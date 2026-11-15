"""OCA service texts (-tt docx) -> src/data/oca_hymns/docs/<stem>.js

WHOLE-DOCUMENT CAPTURE (Bill, 14 Nov 2026: never a partial capture). Every
non-empty paragraph of the docx lands in exactly one block, in print order.
Text is lifted from word/document.xml, never retyped.

  heading  a paragraph carrying bold type
  note     a paragraph wholly in italic (psalm verses, rubrics, Glory / Both now),
           and any paragraph that begins "V. " (a psalm verse), italic or not
  text     consecutive plain paragraphs: one printed line each, joined ' | ';
           a line ending '//' joins with ' // ' (encoding_rule_v2.md 3.1)

Pointing (rule 3.3): underlined runs -> [brackets], adjacent runs merged; a
paragraph underlined end to end is flagged `underlined`, not bracketed; '//'
kept; a closing "(once)" / "(twice)" / "(thrice)" on a hymn is lifted into `repeat`
so the same hymn reads the same at every place it is printed; the undefined '^' mark kept exactly as printed (Q-0007; display strips it).
Layout whitespace (tabs, runs of spaces, line breaks inside a paragraph) is
collapsed to one space: it is page layout, not text.

  python3 extract.py <docx-dir>            write every document
  python3 extract.py <docx-dir> --check    re-extract, compare with the repo
"""
import sys, os, re, json, zipfile, glob
from lxml import etree
W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, '..', '..', '..', 'src', 'data', 'oca_hymns', 'docs'))

def on(rpr, tag):
    e = rpr.find(W + tag) if rpr is not None else None
    return e is not None and e.get(W + 'val') not in ('0', 'false', 'none')

def paragraphs(path):
    root = etree.fromstring(zipfile.ZipFile(path).read('word/document.xml'))
    out = []
    for p in root.find(W + 'body').iter(W + 'p'):
        segs = []
        for r in p.iter(W + 'r'):
            rpr = r.find(W + 'rPr'); t = ''
            for c in r:
                if c.tag == W + 't': t += c.text or ''
                elif c.tag in (W + 'tab', W + 'br', W + 'cr'): t += ' '
                elif c.tag == W + 'noBreakHyphen': t += '-'
                elif c.tag == W + 'softHyphen': pass
                elif c.tag == W + 'sym': raise SystemExit(f'{path}: w:sym not handled')
            if t: segs.append((t, on(rpr, 'u'), on(rpr, 'b'), on(rpr, 'i')))
        out.append(segs)
    return out

def whole(segs):
    # A paragraph underlined from end to end is not syllable pointing: the OCA
    # underlines whole passages (the Litya, an alternate troparion). The block is
    # flagged `underlined` and its text carries no brackets for it.
    ink = [x for x in segs if x[0].strip()]
    return bool(ink) and all(x[1] for x in ink)

def marked(segs):
    # Bracket each maximal underlined stretch, character by character, so that an
    # underlined space joins its neighbours and brackets never open or close on a space.
    chars = [(c, u) for t, u, _, _ in segs for c in t]
    if whole(segs): chars = [(c, False) for c, _ in chars]
    s = ''; i = 0
    while i < len(chars):
        if not chars[i][1]: s += chars[i][0]; i += 1; continue
        j = i
        while j < len(chars) and chars[j][1]: j += 1
        run = ''.join(c for c, _ in chars[i:j]); core = run.strip()
        s += (run[:len(run) - len(run.lstrip())] + '[' + core + ']' + run[len(run.rstrip()):]) if core else run
        i = j
    return re.sub(r'\s+', ' ', s).strip()

def kind(segs):
    ink = [x for x in segs if x[0].strip()]
    # A psalm verse ("V. (4) From the morning watch ...") is a note whatever its type
    # face: where one is printed in roman directly under a hymn, with no blank line
    # between, it would otherwise be read as one more line of that hymn.
    if re.match(r'V\.\s', ''.join(x[0] for x in segs).lstrip()): return 'note'
    if any(x[2] for x in ink): return 'heading'
    if all(x[3] for x in ink): return 'note'
    return 'text'

def join(lines):
    s = lines[0]
    for l in lines[1:]:
        s = (s[:-2].rstrip() + ' // ' + l) if s.endswith('//') else (s + ' | ' + l)
    return s

def blocks(path):
    ps = paragraphs(path); out = []; cur = None; ink = 0
    for n, segs in enumerate(ps):
        text = marked(segs)
        if not text: cur = None; continue
        ink += 1; k = kind(segs); w = whole(segs)
        if k == 'text':
            if cur is None: cur = {'k': 'text', 'p': [n, n], 'lines': [], 'w': []}; out.append(cur)
            cur['lines'].append(text); cur['p'][1] = n; cur['w'].append(w)
        else:
            cur = None; out.append({'k': k, 'p': [n, n], 'text': text}); 
            if w: out[-1]['underlined'] = 'all'
    head = None
    for b in out:
        if b['k'] == 'heading': head = b['text']
        elif b['k'] == 'text':
            b['text'] = join(b.pop('lines')); b['n'] = b['p'][1] - b['p'][0] + 1
            m = re.search(r'\s*\((once|twice|thrice)\)$', b['text'])
            if m and b['n'] > 1: b['repeat'] = m[1]; b['text'] = b['text'][:m.start()]
            if head: b['head'] = head
            if '[' in b['text']: b['pointed'] = True
            w = b.pop('w')
            if any(w): b['underlined'] = 'all' if all(w) else [i for i, x in enumerate(w) if x]
    assert ink == sum(b['p'][1] - b['p'][0] + 1 for b in out) , path
    return len(ps), out

def render(path):
    stem = os.path.basename(path)[:-5]
    m = re.match(r'(\d{4})-(\d\d)(\d\d)-texts-(.*)$', stem); assert m, stem
    npar, bl = blocks(path)
    doc = {'file': os.path.basename(path), 'date': f'{m[1]}-{m[2]}-{m[3]}', 'key': f'{m[2]}-{m[3]}',
           'paragraphs': npar, 'blocks': bl}
    body = ',\n'.join('    ' + json.dumps(b, ensure_ascii=False) for b in bl)
    head = {k: v for k, v in doc.items() if k != 'blocks'}
    return stem, ('// GENERATED by tools/encoding/oca_hymns/extract.py from the OCA service text. Do not edit by hand.\n'
                  '// Source: Orthodox Church in America, Department of Liturgical Music and Translations.\n'
                  'export default {\n' + ''.join(f'  {k}: {json.dumps(v, ensure_ascii=False)},\n' for k, v in head.items())
                  + '  blocks: [\n' + body + ',\n  ],\n};\n')

if __name__ == '__main__':
    src = sys.argv[1]; check = '--check' in sys.argv; bad = 0; stems = []
    for path in sorted(glob.glob(os.path.join(src, '*.docx'))):
        stem, js = render(path); stems.append(stem); out = os.path.join(OUT, stem + '.js')
        if check:
            if not os.path.exists(out) or open(out, encoding='utf-8').read() != js: bad += 1; print('DIFFERS', stem)
        else:
            open(out, 'w', encoding='utf-8').write(js)
    if not check:
        open(os.path.join(OUT, '..', 'manifest.js'), 'w').write(
            '// GENERATED by tools/encoding/oca_hymns/extract.py. One loader per captured OCA document.\n'
            'export const OCA_DOCS = {\n' + ''.join(f"  '{s}': () => import('./docs/{s}.js'),\n" for s in stems) + '};\n')
    print(len(stems), 'documents', 'differ:' if check else 'written', bad if check else '')
    sys.exit(1 if bad else 0)
