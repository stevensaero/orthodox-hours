# tone-5 §5 post-pass: per-tone storage of byte-divergent shared items
# (verify_shared_t5.py, July 8 2026) + the Gregory per-tone ruling (Bill,
# July 8 2026). Extraction from the raw 5-x text layers, markers adapted.
import json, re, sys
sys.path.insert(0, '/tmp/gen5')
import manifest as M
RAW = {f: open(f'/tmp/scan5/{f.replace("2-","5-")}.txt').read().split('\n') for f in ['2-1','2-2','2-5','2-7']}
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
def node(text, f5, locus, strip=True, tier=None):
    if strip: text = re.sub(r'^(The )?Verse: ', '', text)
    log = []
    for cy, la in {'О':'O','М':'M','о':'o','С':'C','а':'a'}.items():
        n = text.count(cy)
        if n: text = text.replace(cy, la); log.append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic)', 'to': la, 'count': n})
    d = {'text': text, 'tier': tier if tier else (2 if '*' in text else 1), 'src': {'file': f5, 'locus': locus}}
    if log: d['homoglyph_log'] = log
    return d
srcf = open('/tmp/oh/src/data/octoechos_v2/tone5.js').read()
t5 = json.loads(srcf.split('export default ',1)[1].rstrip().rstrip(';'))

# 1 · Friday-evening departed pair (5-7): v1 final period — THIRD tone running
d = M.MANIFEST['departed_fri_eve']
t5['vespers_weekday']['fri']['aposticha']['verses'] = [
  node(extract('2-7', *d['v1']), '5-7.pdf', 'Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike the 2-7 print — §5 per-tone; 3-7 and 4-7 diverged the same way)'),
  node(extract('2-7', *d['v2']), '5-7.pdf', 'Friday-evening Vespers aposticha, departed verse 2')]

# 2 · Thursday Liturgy prokeimenon (5-5): verse gains a `*` — 4-5 diverged identically
m5 = M.MANIFEST['daily_liturgy_propers']['thu']
tone_p, prok, pverse = m5['prok']
t5['liturgy_weekday']['thu']['prokeimenon'] = {'tone': tone_p,
  'text': node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ', '', extract('2-5', *prok)), '5-5.pdf', 'Thursday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)', strip=False),
  'verse': node(extract('2-5', *pverse), '5-5.pdf', 'Thursday Liturgy prokeimenon verse — prints a * pointing mark absent from the 2-5/shared print (§5 divergence; 4-5 printed the same mark)')}

# 3 · Thursday Alleluia digit-zero — FOURTH tone running; ref stands
t5['liturgy_weekday']['thu']['alleluia_note'] = '5-5 prints the digit-zero artifact ("0 Lord") at the same verse as 2-5/3-5/4-5 — four tones running; normalized per §9.10 (scan review delivered); post-normalization the print byte-matches shared, so the ref stands.'

# 4 · Sunday-evening Vespers aposticha pair (5-2): "her mistress" lowercase
#     (shared/2-2: "her Mistress") — per-tone pair for the sun print site
t5['vespers_weekday']['sun']['aposticha']['verses'] = [
  node(extract('2-2', *M.V_PAIR_STD_1, occ=1), '5-2.pdf', 'Sunday-evening Vespers aposticha verse 1 — "her mistress" lowercase (shared/2-2: "Mistress"; §5 per-tone)'),
  node(extract('2-2', *M.V_PAIR_STD_2, occ=1), '5-2.pdf', 'Sunday-evening Vespers aposticha verse 2')]

# 5 · Polyeleos (5-1): ALL FOUR verses print WITH a * pointing mark, and v4
#     prints "God of Heaven" (shared/2-1: unpointed, "God of heaven") —
#     whole select-verse set per-tone
pol = []
POL_STARTS = ['Verse: Praise ye the name of the Lord', 'Verse: Blessed is the Lord out of Zion',
              'Verse: O give thanks unto the Lord', 'Verse: O give thanks unto the God of']
for i2, start in enumerate(POL_STARTS):
    ext = extract('2-1', start, 'alleluia.')
    notes = [' — "God of Heaven" (shared: "of heaven")' if i2 == 3 else '']
    pol.append(node(ext, '5-1.pdf', f'Polyeleos select verse {i2+1} (with Alleluia refrain) — pointed print (§5 per-tone; shared/2-1 prints unpointed){notes[0]}'))
t5['matins']['polyeleos_rubric'] = {'verses': pol,
  'provenance_note': '§5: the 5-1 Polyeleos prints every select verse WITH a * pointing mark, and verse 4 reads "God of Heaven" — the whole set stored per-tone; the shared (2-1) table stands for the tones that match it. Frame rubrics unchanged (shared.polyeleos.rubric/prelent_note/megalynarion_rubric still govern assembly).'}

# 6 · Theotokos-Virgin-rejoice (5-1): final line carries a SINGLE * where the
#     2-1 print points ** — per-tone print site
vr = M.MANIFEST['virgin_rejoice']
t5vr = extract('2-1', *vr['text'])
if t5vr.endswith('(Thrice)'): t5vr = t5vr[:-len('(Thrice)')].strip()
t5['great_vespers']['vigil_rubric'] = {
  'tone': 4,
  'text': node(t5vr, '5-1.pdf', 'Saturday Great Vespers, after the aposticha (vigil) — "* for thou hast borne" single asterisk (shared/2-1: **; §5 pointing divergence)'),
  'provenance_note': 'Printed with "(Thrice)"; stored WITHOUT a repeat field per the §9.4-adjacent ruling — the vigil rubric governs the count. §5: pointing diverges from shared (single * at the final line).'}

# 7 · GREGORY — whole hymn per-tone from 5-1 (RULED: Bill, July 8 2026 —
#     per-tone everywhere; four prints, no majority byte-state).
#     5-1 divergences: s2 "in godly manner" (no article) + comma end;
#     s6 "unshakable" (shared: "immutable"); s7 "incarnate from the Virgin"
#     (shared: "of the Virgin").
gr = M.MANIFEST['gregory']
old_rub = t5['nocturns']['gregory_rubric']['rubric']
div = {1: ' — "in godly manner" (no article) + comma stanza end (§5 per-tone)',
       5: ' — "unshakable" (shared: "immutable"; §5 per-tone)',
       6: ' — "incarnate from the Virgin" (shared: "of the Virgin"; §5 per-tone)'}
stanzas = []
for i2, st in enumerate(gr['stanzas']):
    if i2 == 1:
        ext = extract('2-1', 'With divine songs let us all in', 'Dominion,')
    else:
        ext = extract('2-1', *st)
    stanzas.append(node(ext, '5-1.pdf', f'Nocturns, hymn of Gregory the Sinaite, stanza {i2+1}{div.get(i2,"")}', strip=False))
t5['nocturns']['gregory_rubric'] = {'rubric': old_rub, 'stanzas': stanzas,
  'provenance_note': 'RULED (Bill, July 8 2026): the Gregory hymn is stored PER-TONE in every tone — four prints (2-1/3-1/4-1/5-1) yield three distinct byte-states with no majority reading, falsifying the §5 shared hypothesis for this hymn. 5-1 divergences at stanzas 2, 6, 7 (see per-stanza loci). The shared table remains the 2-1 print.'}

# 8 · Saturday Matins departed aposticha (5-7): TWO-verse set again ("they",
#     pointed, final period — the 4-7 pattern; 2-7/3-7 print three verses)
sa = 'On the Aposticha, these Stichera of the departed'
v1 = extract('2-7', 'Verse: Blessed are they whom Thou hast chosen', 'REGEX:^Lord\\.$', search_after=sa)
v2 = extract('2-7', 'Verse: Their souls * shall dwell among good things.', None, search_after=sa)
t5['matins_weekday']['sat']['aposticha']['verses'] = [
  node(v1, '5-7.pdf', 'Saturday Matins aposticha of the departed, verse 1 — pointed, "they", final period (§5 per-tone; the 4-7 pattern)'),
  node(v2, '5-7.pdf', 'Saturday Matins aposticha of the departed, verse 2 — tone 5 prints TWO verses where 2-7/3-7 carry three (§5 structural per-tone set)')]

header = srcf[:srcf.index('export default ') + len('export default ')]
open('/tmp/oh/src/data/octoechos_v2/tone5.js', 'w').write(header + json.dumps(t5, ensure_ascii=False, indent=2) + ';\n')
print('post-pass ok')
print('gregory s2:', stanzas[1]['text'][:80])
print('polyeleos v4:', pol[3]['text'])
print('vr tail:', t5vr[-60:])
print('sun v1 tail:', t5['vespers_weekday']['sun']['aposticha']['verses'][0]['text'][-50:])
