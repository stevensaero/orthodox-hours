# tone-6 §5 post-pass: per-tone storage of byte-divergent shared items
# (verify_shared_t6.py, July 8 2026) + the Gregory per-tone ruling (Bill, July 8
# 2026 — stored per-tone in EVERY tone). Extraction from the raw 6-x text layers.
# Empirical tone-6 divergence set (from verify_shared_t6):
#   - standard Vespers aposticha v1 "her mistress" lowercase — ALL FIVE weekday
#     evenings (tone-5 diverged at Sunday only)
#   - fri-eve departed v1 final period (3-7/4-7/5-7 class, 4th tone running)
#   - thu Liturgy prokeimenon verse gains a * (4-5/5-5 class)
#   - thu Liturgy Alleluia digit-zero "0 Lord" (2-5..6-5, 5 tones); ref stands post-norm
#   - Saturday Matins departed aposticha TWO-verse set (4-7/5-7 class)
#   - Gregory whole per-tone from 6-1 (s2 "in godly manner"+comma; s6 "unshakable";
#     s7 "from the Virgin"; 2-1/5-1 word-order side at s2)
#   - sat Liturgy Alleluia v0: MARKER SHADOW (Matins sessional shadows it) — the
#     re-scoped Liturgy verse byte-matches shared; ref stands, variant registered.
# NOT divergent in tone 6 (ref stands): polyeleos, virgin-rejoice, evlogitaria,
#   sat GV prokeimenon.
import json, re, sys
sys.path.insert(0, '/tmp/gen6')
import manifest as M
REPO = '/tmp/oh'
RAW = {f: open(f'/tmp/scan6/{f.replace("2-","6-")}.txt').read().split('\n')
       for f in ['2-1','2-2','2-3','2-4','2-5','2-6','2-7']}

def find_line(lines, marker, start=0):
    for i in range(start, len(lines)):
        if marker.startswith('REGEX:'):
            if re.match(marker[6:], lines[i].strip()): return i
        elif marker in lines[i]: return i
    return -1

def extract(file, start_marker, end_marker, occ=1, search_after=None):
    lines = RAW[file]; pos = 0
    if search_after:
        p = find_line(lines, search_after); assert p >= 0, ('search_after', file, search_after); pos = p + 1
    s = -1
    for _ in range(occ):
        s = find_line(lines, start_marker, s + 1 if s >= 0 else pos); assert s >= 0, (file, start_marker)
    block = [lines[s]] if end_marker is None else lines[s:find_line(lines, end_marker, s)+1]
    return re.sub(r'\s+', ' ', ' '.join(l.strip() for l in block if l.strip())).strip()

def node(text, f6, locus, strip=True, tier=None):
    if strip: text = re.sub(r'^(The )?Verse: ', '', text)
    log = []
    for cy, la in {'О':'O','М':'M','о':'o','С':'C','а':'a'}.items():
        n = text.count(cy)
        if n: text = text.replace(cy, la); log.append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic)', 'to': la, 'count': n})
    d = {'text': text, 'tier': tier if tier else (2 if '*' in text else 1), 'src': {'file': f6, 'locus': locus}}
    if log: d['homoglyph_log'] = log
    return d

srcf = open(f'{REPO}/src/data/octoechos_v2/tone6.js').read()
t6 = json.loads(srcf.split('export default ', 1)[1].rstrip().rstrip(';'))
findings = []

# 1 · Standard Vespers aposticha pair — "her mistress" lowercase at ALL FIVE
#     weekday evenings (shared/2-x: "her Mistress"). Per-tone override each day.
DAYFILE = {'sun': '6-2', 'mon': '6-3', 'tue': '6-4', 'wed': '6-5', 'thu': '6-6'}
for day, (keyf, occ) in M.MANIFEST['vespers_pair_sites'].items():
    f6 = DAYFILE[day]
    v1 = extract(keyf, *M.V_PAIR_STD_1, occ=occ)
    v2 = extract(keyf, *M.V_PAIR_STD_2, occ=occ)
    t6['vespers_weekday'][day]['aposticha']['verses'] = [
      node(v1, f6+'.pdf', f'{day.title()}-evening Vespers aposticha verse 1 — "her mistress" lowercase (shared/2-x: "Mistress"; §5 per-tone — tone 6 diverges at every weekday evening)'),
      node(v2, f6+'.pdf', f'{day.title()}-evening Vespers aposticha verse 2 (byte-matches shared; stored with its per-tone verse-1 partner)')]
findings.append('standard Vespers aposticha v1 "her mistress" lowercase — all 5 weekday evenings per-tone (tone 5: Sunday only)')

# 2 · Friday-evening departed pair (6-7): v1 final period — 4th tone running
d = M.MANIFEST['departed_fri_eve']
t6['vespers_weekday']['fri']['aposticha']['verses'] = [
  node(extract('2-7', *d['v1']), '6-7.pdf', 'Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike the shared/2-7 print — §5 per-tone; 3-7/4-7/5-7 diverged the same way)'),
  node(extract('2-7', *d['v2']), '6-7.pdf', 'Friday-evening Vespers aposticha, departed verse 2')]

# 3 · Thursday Liturgy prokeimenon (6-5): verse gains a `*`; text matches shared
m6 = M.MANIFEST['daily_liturgy_propers']['thu']
tone_p, prok, pverse = m6['prok']
t6['liturgy_weekday']['thu']['prokeimenon'] = {'tone': tone_p,
  'text': node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ', '', extract('2-5', *prok)), '6-5.pdf', 'Thursday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)', strip=False),
  'verse': node(extract('2-5', *pverse), '6-5.pdf', 'Thursday Liturgy prokeimenon verse — prints a * pointing mark absent from the shared/2-5 print (§5 divergence; 4-5/5-5 printed the same mark)')}

# 4 · Thursday Alleluia digit-zero — FIFTH tone running; ref stands post-norm
t6['liturgy_weekday']['thu']['alleluia_note'] = '6-5 prints the digit-zero artifact ("0 Lord") at the same verse as 2-5/3-5/4-5/5-5 — five tones running; normalized per §9.10 (scan review delivered); post-normalization the print byte-matches shared, so the ref stands.'

# 5 · Saturday Matins departed aposticha (6-7): TWO-verse set (the 4-7/5-7 pattern;
#     2-7/3-7 print three). Re-scoped by search_after (avoids the fri-eve shadow).
sa = 'On the Aposticha, these Stichera of the departed'
v1 = extract('2-7', 'Verse: Blessed are they whom Thou hast chosen', 'REGEX:^Lord\\.$', search_after=sa)
v2 = extract('2-7', 'Verse: Their souls * shall dwell among good things.', None, search_after=sa)
t6['matins_weekday']['sat']['aposticha']['verses'] = [
  node(v1, '6-7.pdf', 'Saturday Matins aposticha of the departed, verse 1 — pointed, "they", final period (§5 per-tone; the 4-7/5-7 pattern)'),
  node(v2, '6-7.pdf', 'Saturday Matins aposticha of the departed, verse 2 — tone 6 prints TWO verses where 2-7/3-7 carry three (§5 structural per-tone set)')]

# 6 · Saturday Liturgy Alleluia v0 — MARKER SHADOW (Matins sessional "Many are the
#     tribulations, * and the Lord" shadows it). Re-scoped after 'AT THE LITURGY'
#     the real Liturgy verse reads "but the Lord ... out of them all" = shared.
#     Ref stands; cross-surface variant recorded (registered in task-8 commit).
resc = extract('2-7', 'Verse: Many are the tribulations', 'out of them all.', search_after='AT THE LITURGY')
_shared_sat_all = json.loads(open(f'{REPO}/src/data/octoechos_v2/shared.js').read().split('export default ',1)[1].rstrip().rstrip(';'))['daily_liturgy_propers']['sat']['alleluia']['verses'][0]['text']
assert re.sub(r'^Verse: ','',resc) == _shared_sat_all, ('sat liturgy alleluia re-scope must match shared', resc)
t6['liturgy_weekday']['sat']['alleluia_note'] = 'sat Liturgy Alleluia verse 1 byte-matches shared (ref stands). NOTE: the Saturday Matins sessional verse "Many are the tribulations of the righteous, * and the Lord ..." (pointed, "and") shadows this Alleluia marker in a flat scan — re-scoped after "AT THE LITURGY" the Liturgy verse reads "but the Lord ... out of them all" = shared. Cross-surface variant (sessional vs liturgy) registered.'

# 7 · GREGORY — whole hymn per-tone from 6-1 (RULED per-tone in every tone).
#     7 stanzas, same structure as shared. Divergences: s2 (idx1) "in godly
#     manner" (no article) + comma stanza-end (2-1/5-1 word-order side: "the
#     Might ... the one Sovereignty"); s6 (idx5) "unshakable" (shared: "immutable");
#     s7 (idx6) "incarnate from the Virgin" (shared: "of the Virgin").
gr = M.MANIFEST['gregory']
old_rub = t6['nocturns']['gregory_rubric']['rubric']
div = {1: ' — "in godly manner" (no article) + comma stanza-end; takes the 2-1/5-1 word-order side ("the Might ... the one Sovereignty") (§5 per-tone)',
       5: ' — "unshakable" (shared: "immutable"; §5 per-tone)',
       6: ' — "incarnate from the Virgin" (shared: "of the Virgin"; §5 per-tone)'}
stanzas = []
for i2, st in enumerate(gr['stanzas']):
    if i2 == 1:
        ext = extract('2-1', 'With divine songs let us all in', 'Dominion,')  # 6-1: comma stanza-end, not the 2-1 period
    else:
        ext = extract('2-1', *st)
    stanzas.append(node(ext, '6-1.pdf', f'Nocturns, hymn of Gregory the Sinaite, stanza {i2+1}{div.get(i2,"")}', strip=False))
t6['nocturns']['gregory_rubric'] = {'rubric': old_rub, 'stanzas': stanzas,
  'provenance_note': 'RULED (Bill, July 8 2026): the Gregory hymn is stored PER-TONE in every tone. 6-1 tracks the 5-1 byte-state and takes the 2-1/5-1 word-order side at stanza 2; divergences from shared at stanzas 2, 6, 7 (see per-stanza loci). The shared table remains the 2-1 print.'}

header = srcf[:srcf.index('export default ') + len('export default ')]
open(f'{REPO}/src/data/octoechos_v2/tone6.js', 'w').write(header + json.dumps(t6, ensure_ascii=False, indent=2) + ';\n')
print('post-pass ok — nodes now:', json.dumps(t6).count('"src"'))
print('gregory stanzas:', len(stanzas))
print('  s2:', stanzas[1]['text'])
print('  s6:', stanzas[5]['text'][-60:])
print('  s7:', stanzas[6]['text'][-60:])
print('fri-eve departed v1 tail:', repr(t6['vespers_weekday']['fri']['aposticha']['verses'][0]['text'][-30:]))
print('sun-eve v1 tail:', repr(t6['vespers_weekday']['sun']['aposticha']['verses'][0]['text'][-60:]))
print('sat matins departed count:', len(t6['matins_weekday']['sat']['aposticha']['verses']))
for f in findings: print('FINDING:', f)
