# tone-4 §5 post-pass: per-tone storage of the byte-divergent shared items
# (verify_shared_t4.py, July 7 2026) + the digit-zero note. Mirrors
# postpass_t3.py; extraction markers reused from manifest.py (2-N → 4-N).
import json, re, sys
sys.path.insert(0, '/tmp/gen4')
import manifest as M
RAW = {f: open(f'/tmp/scan4/{f.replace("2-","4-")}.txt').read().split('\n') for f in ['2-1','2-5','2-6','2-7']}
def find_line(lines, marker, start=0):
    for i in range(start, len(lines)):
        if marker.startswith('REGEX:'):
            if re.match(marker[6:], lines[i].strip()): return i
        elif marker in lines[i]: return i
    return -1
def extract(file, start_marker, end_marker, occ=1, search_after=None):
    lines = RAW[file]; pos = 0
    if search_after:
        p = find_line(lines, search_after); assert p >= 0, search_after; pos = p + 1
    s = -1
    for _ in range(occ):
        s = find_line(lines, start_marker, s + 1 if s >= 0 else pos); assert s >= 0, (file, start_marker)
    block = [lines[s]] if end_marker is None else lines[s:find_line(lines, end_marker, s)+1]
    return re.sub(r'\s+', ' ', ' '.join(l.strip() for l in block if l.strip())).strip()
def node(text, f4, locus, strip=True):
    if strip: text = re.sub(r'^(The )?Verse: ', '', text)
    log = []
    for cy, la in {'О':'O','М':'M','о':'o','С':'C','а':'a'}.items():
        n = text.count(cy)
        if n: text = text.replace(cy, la); log.append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic)', 'to': la, 'count': n})
    d = {'text': text, 'tier': 2 if '*' in text else 1, 'src': {'file': f4, 'locus': locus}}
    if log: d['homoglyph_log'] = log
    return d
srcf = open('/tmp/oh/src/data/octoechos_v2/tone4.js').read()
t4 = json.loads(srcf.split('export default ',1)[1].rstrip().rstrip(';'))

# 1 · Friday-evening departed pair (4-7): v1 prints a FINAL PERIOD (same
#     divergence class as 3-7 — third tone, third distinct byte-state)
d = M.MANIFEST['departed_fri_eve']
t4['vespers_weekday']['fri']['aposticha']['verses'] = [
  node(extract('2-7', *d['v1']), '4-7.pdf', 'Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike the 2-7 print — §5 per-tone; 3-7 diverged the same way)'),
  node(extract('2-7', *d['v2']), '4-7.pdf', 'Friday-evening Vespers aposticha, departed verse 2')]

# 2 · Thursday Liturgy prokeimenon (4-5): the VERSE gains a `*` pointing mark
#     (§5 divergence; text byte-matches shared — stored per-tone as a pair)
m5 = M.MANIFEST['daily_liturgy_propers']['thu']
tone_p, prok, pverse = m5['prok']
t4['liturgy_weekday']['thu']['prokeimenon'] = {'tone': tone_p,
  'text': node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ', '', extract('2-5', *prok)), '4-5.pdf', 'Thursday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)', strip=False),
  'verse': node(extract('2-5', *pverse), '4-5.pdf', 'Thursday Liturgy prokeimenon verse — prints a * pointing mark absent from the 2-5/shared print (§5 divergence)')}

# 3 · Thursday Liturgy Alleluia: digit-zero "0 Lord" at the SAME verse as 2-5
#     and 3-5 — normalized per §9.10 (logged in the scan review); the ref stands
t4['liturgy_weekday']['thu']['alleluia_note'] = '4-5 prints the same digit-zero artifact ("0 Lord") at the same verse as 2-5 AND 3-5 — three tones running, a per-print-site artifact pattern; normalized per §9.10 (scan review delivered); post-normalization the print byte-matches shared, so the ref stands.'

# 4 · Friday Liturgy Alleluia (4-6): "ages," vs shared "ages;" — the SAME
#     site and class as the 3-6 divergence
m6 = M.MANIFEST['daily_liturgy_propers']['fri']
tone_a, alle, averses = m6['all']
t4['liturgy_weekday']['fri']['alleluia'] = {'tone': tone_a,
  'text': node(re.sub(r'^Alleluia, in Tone [IVX]+: ', '', extract('2-6', *alle)), '4-6.pdf', 'Friday Liturgy Alleluia', strip=False),
  'verses': [node(extract('2-6', *averses[0]), '4-6.pdf', 'Friday Liturgy Alleluia verse — "ages," (the shared print: "ages;"; §5 divergence — 3-6 diverged at the SAME site the same way)')]}

# 5 · Gregory-the-Sinaite hymn (4-1): stanza 1 word-order divergence — "the one
#     Might in three Hypostases, the Sovereignty" vs shared "the Might in three
#     Hypostases, the one Sovereignty". Whole hymn stored per-tone from its own
#     print site (§5 rule: the invariance hypothesis is falsified for this print)
gr = M.MANIFEST['gregory']
old_rub = t4['nocturns']['gregory_rubric']['rubric']
stanzas = []
for i2, st in enumerate(gr['stanzas']):
    note = ' — THIS stanza diverges from shared at bytes (§5 per-tone; 3-1 prints the same variant)' if i2 == 1 else ''
    stanzas.append(node(extract('2-1', *st), '4-1.pdf', f'Nocturns, hymn of Gregory the Sinaite, stanza {i2+1}{note}', strip=False))
t4['nocturns']['gregory_rubric'] = {'rubric': old_rub, 'stanzas': stanzas,
  'provenance_note': '§5: stanza 1 of the 4-1 print diverges at bytes from shared.gregory_sinaite_hymn ("the one Might … the Sovereignty" vs "the Might … the one Sovereignty"); the tone-4 print site is stored whole, per-tone. NOTE: 3-1 prints the SAME variant — two tones now agree against the shared (2-1) reading; tone3.js still refs shared (flagged to Bill). The remaining six stanzas byte-match the shared table (register pairs).'}

# 6 · Saturday Matins departed aposticha (4-7): tone 4 prints a TWO-VERSE set
#     ("they", final periods, v1 pointed) where 2-7/3-7 print three verses —
#     structural per-tone set
sa = 'On the Aposticha, these Stichera of the departed'
v1 = extract('2-7', 'Verse: Blessed are they whom Thou hast chosen', 'REGEX:^Lord\\.$', search_after=sa)
v2 = extract('2-7', 'Verse: Their souls * shall dwell among good things.', None, search_after=sa)
t4['matins_weekday']['sat']['aposticha']['verses'] = [
  node(v1, '4-7.pdf', 'Saturday Matins aposticha of the departed, verse 1 — pointed, "they", final period (§5 per-tone)'),
  node(v2, '4-7.pdf', 'Saturday Matins aposticha of the departed, verse 2 — tone 4 prints TWO verses where the 2-7/3-7 prints carry three (§5 structural per-tone set)')]

header = srcf[:srcf.index('export default ') + len('export default ')]
open('/tmp/oh/src/data/octoechos_v2/tone4.js', 'w').write(header + json.dumps(t4, ensure_ascii=False, indent=2) + ';\n')
print('post-pass ok')
print('gregory s1:', stanzas[1]['text'][:90])
print('sat v1:', v1); print('sat v2:', v2)
