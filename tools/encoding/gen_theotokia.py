# theotokia.js generator — §11 step 3 (§4.12). Heading-driven parse of the
# raw pdftotext layer; nothing hand-retyped. Text layer verified clean
# (0 non-Latin letters, 0 digit-zero — scan July 7 2026).
import json, re

lines = open('/tmp/scan/theotokia.txt').read().split('\n')
ROMAN = {'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8}
DAY = {'Sunday':'sun','Monday':'mon','Tuesday':'tue','Wednesday':'wed','Thursday':'thu','Friday':'fri','Saturday':'sat'}

def idx(marker):
    for i, l in enumerate(lines):
        if marker in l: return i
    raise AssertionError(marker)

p2 = idx('THEOTOKIA IN THE EIGHT TONES, CHANTED WHEN THERE IS A')
p3 = idx('DISMISSAL THEOTOKIA, CHANTED THROUGHOUT')

def node(text_lines, locus, source_label):
    text = re.sub(r'\s+', ' ', ' '.join(l.strip() for l in text_lines if l.strip())).strip()
    assert text, f'empty cell at {locus}'
    assert 'О' not in text and '0 ' not in text
    d = {'text': text, 'tier': 2 if '*' in text else 1,
         'src': {'file': 'Theotokia.pdf', 'locus': locus}}
    if source_label: d['sourceLabel'] = source_label
    return d

def parse(seg, heading_re, key_fn, part_name):
    tones, tone, key, buf, label = {}, None, None, [], None
    def flush():
        nonlocal buf
        if tone and key and buf:
            tones.setdefault(str(tone), {})[key] = node(buf, f'{part_name}, Tone {tone}, "{label}"', label)
        buf = []
    for l in seg:
        m = re.match(r'^TONE ([IVX]+)$', l.strip())
        if m:
            flush(); tone = ROMAN[m.group(1)]; key = None; continue
        h = heading_re.match(l.strip())
        if h:
            flush(); key = key_fn(h); label = l.strip().rstrip(':'); continue
        buf.append(l)
    flush()
    return tones

# Part 1 — resurrectional triplets
P1_KEYS = {'Dogmaticon': 'dogmatikon', 'At the Aposticha': 'aposticha_theotokion',
           'Dismissal Theotokion': 'dismissal_theotokion'}
part1 = parse(lines[2:p2], re.compile(r'^(Dogmaticon|At the Aposticha|Dismissal Theotokion)$'),
              lambda h: P1_KEYS[h.group(1)], 'Part 1 (Resurrectional Theotokia)')
assert len(part1) == 8 and all(len(v) == 3 for v in part1.values()), \
    {k: list(v) for k, v in part1.items()}

# Part 2 — doxasticon-tone theotokia, (day+slot) x tone
p2_re = re.compile(r'^On (\w+)(?: evening,?)? at (Vespers Aposticha|the praises for Matins), in Tone [IVX]+:$')
def p2_key(h):
    d = DAY[h.group(1)]
    return f'{d}_eve_aposticha' if h.group(2) == 'Vespers Aposticha' else f'{d}_praises'
part2 = parse(lines[p2+4:p3], p2_re, p2_key, 'Part 2 (doxasticon-tone Both-now Theotokia)')
assert len(part2) == 8 and all(len(v) == 8 for v in part2.values()), \
    {k: list(v) for k, v in part2.items()}

# Part 3 — dismissal theotokia through the year, day-pair x tone
p3_re = re.compile(r'^(\w+)[- ]Vespers and (\w+) Matins, in Tone [IVX]+:$|^(\w+) (?:Lauds|Matins), in Tone [IVX]+:$')
def p3_key(h):
    if h.group(1): return f'{DAY[h.group(1)]}_vespers_{DAY[h.group(2)]}_matins'
    return f'{DAY[h.group(3)]}_lauds'   # Tone IV prints 'Saturday Matins' at the
                                        # Lauds position — keyed positionally,
                                        # printed heading kept in sourceLabel
note_start = idx('[Note: the Theotokion identified')
usage_note = re.sub(r'\s+', ' ', ' '.join(l.strip() for l in lines[note_start:note_start+4])).strip()
header_rubric = re.sub(r'\s+', ' ', ' '.join(l.strip() for l in lines[p3:p3+3] if 'Note' not in l)).strip()
part3 = parse(lines[note_start+4:], p3_re, p3_key, 'Part 3 (Dismissal Theotokia through the year)')
assert len(part3) == 8 and all(len(v) == 12 for v in part3.values()), \
    {k: len(v) for k, v in part3.items()}

# cross-part identical prints (new recurrence pairs, byte-verified)
cross = []
for t in map(str, range(1, 9)):
    d1 = part1[t]['dismissal_theotokion']['text']
    for k, cell in part3[t].items():
        if cell['text'] == d1:
            cross.append(('identical', f'theotokia.resurrectional_theotokia.{t}.dismissal_theotokion',
                          f'theotokia.dismissal_theotokia_annual.{t}.{k}'))
# within-part-3 repeated cells per tone
for t in map(str, range(1, 9)):
    seen = {}
    for k, cell in part3[t].items():
        if cell['text'] in seen:
            cross.append(('identical', f'theotokia.dismissal_theotokia_annual.{t}.{seen[cell["text"]]}',
                          f'theotokia.dismissal_theotokia_annual.{t}.{k}'))
        else: seen[cell['text']] = k

OUT = {
 'resurrectional_theotokia': dict({'heading_rubric': 'THE RESURRECTIONAL THEOTOKIA, IN THE EIGHT TONES'}, **part1),
 'doxasticon_theotokia': dict({
   'heading_rubric': re.sub(r'\s+', ' ', ' '.join(l.strip() for l in lines[p2:p2+4])).strip()}, **part2),
 'dismissal_theotokia_annual': dict({
   'heading_rubric': header_rubric, 'usage_note': usage_note}, **part3),
}

header = '''// src/data/octoechos_v2/theotokia.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — the Common Theotokia tables (spec §4.12; §11 step 3).
// Source: Theotokia.pdf ("The Common Theotokia", St. Sergius, source 8).
// GENERATED from the raw pdftotext layer by heading-driven parsing (July 7
// 2026) — nothing hand-retyped. Text layer verified CLEAN (zero non-Latin
// letter codepoints, zero digit-zero; scan review delivered to Bill).
//
// Three tables mirroring the source's own structure; per the §9.8 ruling
// each cell is a PRINT SITE — the gate never merges a cell with a chapter
// position (§2.3 catalog overlaps both ways: identical prints AND
// re-renderings). Tone keys are '1'–'8'; every cell carries src{file,locus}
// with the printed row heading as sourceLabel. Tier per cell: 2 where
// pointed, 1 where the print is prose (e.g. Part 2 Tone II Tuesday praises —
// the internal same-file variance the spec records).
//
// Known source sic (register): the Part 3 usage note opens "[Note:" and
// never closes the bracket — stored verbatim.
// Dynamically loaded only (§2.1).
// ─────────────────────────────────────────────────────────────────────────────

export default '''
open('/tmp/oh2/src/data/octoechos_v2/theotokia.js', 'w').write(
    header + json.dumps(OUT, ensure_ascii=False, indent=2) + ';\n')

cells = sum(len(v) for k, v in part1.items()) + sum(len(v) for v in part2.values()) + sum(len(v) for v in part3.values())
print(f'theotokia.js written: {cells} cells (24 + 64 + 96 expected 184)')
print('\nCROSS-PART / WITHIN-PART IDENTICAL PRINTS (byte-verified):')
for rel, a, b in cross: print(f'  {rel}: {a} == {b}')
print('\nKey texts located:')
for t, k in [('2','mon_praises'), ('2','tue_praises'), ('2','sun_eve_aposticha')]:
    print(f'  P2 T{t} {k}: {part2[t][k]["text"][:60]}… (tier {part2[t][k]["tier"]})')
for t in ['2','4']:
    for k, cell in part3[t].items():
        if 'un-burnt bush' in cell['text'] or 'Through thee, O Ever-virgin' in cell['text'] or 'well-spring of loving compassion' in cell['text']:
            print(f'  P3 T{t} {k}: {cell["text"][:50]}…')
