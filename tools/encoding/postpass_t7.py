# tone-7 §5 post-pass: per-tone storage of byte-divergent shared items
# (verify_shared_t7.py) + Gregory per-tone (standing ruling). Empirical tone-7 set:
#   - Wednesday Matins aposticha v2 DROPS the * that shared prints (only Wed)
#   - Tuesday Liturgy prokeimenon verse "when I pray unto Thee" (shared: "when I
#     make supplication unto Thee")
#   - fri-eve departed v1 final period (3-7/4-7/5-7/6-7 class, 5th tone)
#   - thu Liturgy prokeimenon verse gains a * (4-5/5-5/6-5 class)
#   - thu Liturgy Alleluia digit-zero "0 Lord" (6th tone); ref stands post-norm
#   - Saturday Matins departed aposticha TWO-verse set ("those"; 4-7/5-7/6-7 class)
#   - Gregory whole per-tone from 7-1: NEW byte-state — s2 "the one KINGSHIP"
#     (shared: "Sovereignty") + "in godly manner" (no article); s5 word order
#     ("I worship the beginningless God the Father"); s6 "Thou Creator"; s7
#     "became ineffably incarnate". Takes the 2-1/5-1 word-order side at s2.
#   - sat Liturgy Alleluia v0: MARKER SHADOW (Matins sessional shadows it) — the
#     re-scoped Liturgy verse byte-matches shared; ref stands, variant registered.
# NOT divergent (ref stands): standard Vespers (mistress), polyeleos,
#   virgin-rejoice, evlogitaria, sat GV prokeimenon.
import json, re, sys
sys.path.insert(0, '/tmp/gen7')
import manifest as M
REPO = '/tmp/oh'
RAW = {f: open(f'/tmp/scan7/{f.replace("2-","7-")}.txt').read().split('\n')
       for f in ['2-1','2-3','2-4','2-5','2-7']}
def find_line(lines, marker, start=0):
    for i in range(start, len(lines)):
        if marker.startswith('REGEX:'):
            if re.match(marker[6:], lines[i].strip()): return i
        elif marker in lines[i]: return i
    return -1
def extract(file, sm, em, occ=1, search_after=None):
    lines = RAW[file]; pos = 0
    if search_after:
        p = find_line(lines, search_after); assert p >= 0, ('sa', file, search_after); pos = p + 1
    s = -1
    for _ in range(occ):
        s = find_line(lines, sm, s + 1 if s >= 0 else pos); assert s >= 0, (file, sm)
    block = [lines[s]] if em is None else lines[s:find_line(lines, em, s)+1]
    return re.sub(r'\s+', ' ', ' '.join(l.strip() for l in block if l.strip())).strip()
def node(text, f7, locus, strip=True, tier=None):
    if strip: text = re.sub(r'^(The )?Verse: ', '', text)
    log = []
    for cy, la in {'О':'O','М':'M','о':'o','С':'C','а':'a'}.items():
        n = text.count(cy)
        if n: text = text.replace(cy, la); log.append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic)', 'to': la, 'count': n})
    d = {'text': text, 'tier': tier if tier else (2 if '*' in text else 1), 'src': {'file': f7, 'locus': locus}}
    if log: d['homoglyph_log'] = log
    return d
srcf = open(f'{REPO}/src/data/octoechos_v2/tone7.js').read()
t7 = json.loads(srcf.split('export default ', 1)[1].rstrip().rstrip(';'))

# 1 · Wednesday Matins aposticha (7-4): v2 DROPS the * (only Wed; mon/tue/fri match)
t7['matins_weekday']['wed']['aposticha']['verses'] = [
  node(extract('2-4', *M.M_PAIR_STD_1), '7-4.pdf', 'Wednesday Matins aposticha verse 1 (byte-matches shared; stored with its per-tone verse-2 partner)'),
  node(extract('2-4', *M.M_PAIR_STD_2), '7-4.pdf', 'Wednesday Matins aposticha verse 2 — DROPS the * pointing mark that shared/2-4 prints ("upon us, yea," for "upon us, * yea,"); §5 per-tone, Wednesday only')]

# 2 · Friday-evening departed pair (7-7): v1 final period — 5th tone running
d = M.MANIFEST['departed_fri_eve']
t7['vespers_weekday']['fri']['aposticha']['verses'] = [
  node(extract('2-7', *d['v1']), '7-7.pdf', 'Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike shared/2-7 — §5 per-tone; 3-7/4-7/5-7/6-7 class)'),
  node(extract('2-7', *d['v2']), '7-7.pdf', 'Friday-evening Vespers aposticha, departed verse 2')]

# 3 · Thursday Liturgy prokeimenon (7-5): verse gains a *; text matches shared
m = M.MANIFEST['daily_liturgy_propers']['thu']; tone_p, prok, pverse = m['prok']
t7['liturgy_weekday']['thu']['prokeimenon'] = {'tone': tone_p,
  'text': node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ', '', extract('2-5', *prok)), '7-5.pdf', 'Thursday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)', strip=False),
  'verse': node(extract('2-5', *pverse), '7-5.pdf', 'Thursday Liturgy prokeimenon verse — prints a * absent from shared/2-5 (§5; 4-5/5-5/6-5 class)')}

# 4 · Thursday Alleluia digit-zero — SIXTH tone; ref stands post-norm
t7['liturgy_weekday']['thu']['alleluia_note'] = '7-5 prints the digit-zero artifact ("0 Lord") at the same verse as 2-5/3-5/4-5/5-5/6-5 — six tones running; normalized per §9.10; post-normalization byte-matches shared, so the ref stands.'

# 5 · Tuesday Liturgy prokeimenon (7-3): verse "when I pray unto Thee" (shared:
#     "when I make supplication unto Thee"); prokeimenon text matches shared.
mt = M.MANIFEST['daily_liturgy_propers']['tue']; t_tp, t_prok, t_pverse = mt['prok']
t7['liturgy_weekday']['tue']['prokeimenon'] = {'tone': t_tp,
  'text': node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ', '', extract('2-3', *t_prok)), '7-3.pdf', 'Tuesday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)', strip=False),
  'verse': node(extract('2-3', t_pverse[0], 'unto Thee.'), '7-3.pdf', 'Tuesday Liturgy prokeimenon verse — "when I pray unto Thee" where shared/2-3 prints "when I make supplication unto Thee" (§5 word divergence)')}

# 6 · Saturday Matins departed aposticha (7-7): TWO-verse set ("those"; 2-7/3-7 = three)
sa = 'On the Aposticha, these Stichera of the departed'
v1 = extract('2-7', 'Verse: Blessed are those whom Thou hast chosen', 'REGEX:^О?\\s*Lord\\.?$', search_after=sa)
v2 = extract('2-7', 'Verse: Their souls * shall dwell among good things.', None, search_after=sa)
t7['matins_weekday']['sat']['aposticha']['verses'] = [
  node(v1, '7-7.pdf', 'Saturday Matins aposticha of the departed, verse 1 — pointed, "those", final period (§5 per-tone; the 4-7/5-7/6-7 two-verse pattern)'),
  node(v2, '7-7.pdf', 'Saturday Matins aposticha of the departed, verse 2 — tone 7 prints TWO verses where 2-7/3-7 carry three (§5 structural per-tone set)')]

# 7 · sat Liturgy Alleluia v0 — MARKER SHADOW; re-scoped byte-matches shared.
resc = extract('2-7', 'Verse: Many are the tribulations', 'out of them all.', search_after='AT LITURGY')
_sh = json.loads(open(f'{REPO}/src/data/octoechos_v2/shared.js').read().split('export default ',1)[1].rstrip().rstrip(';'))['daily_liturgy_propers']['sat']['alleluia']['verses'][0]['text']
assert re.sub(r'^Verse: ','',resc) == _sh, ('sat alleluia re-scope must match shared', resc)
t7['liturgy_weekday']['sat']['alleluia_note'] = 'sat Liturgy Alleluia verse 1 byte-matches shared (ref stands). The Saturday Matins sessional "Many are the tribulations … * and the Lord" shadows this marker in a flat scan — re-scoped after "AT LITURGY" (= shared). Cross-surface variant registered.'

# 8 · GREGORY — whole per-tone from 7-1 (NEW byte-state). 7 stanzas.
gr = M.MANIFEST['gregory']; old_rub = t7['nocturns']['gregory_rubric']['rubric']
div = {1: ' — "in godly manner" (no article) + "the one KINGSHIP and Dominion" (shared/all prior: "Sovereignty"); takes the 2-1/5-1 word-order side ("the Might … the one …") (§5 per-tone, NEW lexical variant)',
       4: ' — "I worship the beginningless God the Father" word order (shared: "I worship God: the beginningless Father") (§5 per-tone)',
       5: ' — "Thou Creator of all" (shared: "Creator of all"); "immutable" matches shared (§5 per-tone)',
       6: ' — "Who became ineffably incarnate" word order (shared: "ineffably became incarnate"); "of the Virgin" matches shared (§5 per-tone)'}
stanzas = []
for i2, st in enumerate(gr['stanzas']):
    if i2 == 1:
        ext = extract('2-1', 'With divine songs let us all in', 'Dominion.')  # 7-1: "the one Kingship and Dominion." (period)
    elif i2 == 4:
        ext = extract('2-1', 'I worship the beginningless God the Father', st[1])  # 7-1 word order
    else:
        ext = extract('2-1', *st)
    stanzas.append(node(ext, '7-1.pdf', f'Nocturns, hymn of Gregory the Sinaite, stanza {i2+1}{div.get(i2,"")}', strip=False))
t7['nocturns']['gregory_rubric'] = {'rubric': old_rub, 'stanzas': stanzas,
  'provenance_note': 'RULED (Bill, July 8 2026): the Gregory hymn is stored PER-TONE in every tone. 7-1 is a distinct byte-state — stanza 2 reads "the one KINGSHIP and Dominion" (a lexical variant no prior tone prints; all print "Sovereignty"), on the 2-1/5-1 word-order side; further divergences at stanzas 5, 6, 7. The shared table remains the 2-1 print.'}

header = srcf[:srcf.index('export default ') + len('export default ')]
open(f'{REPO}/src/data/octoechos_v2/tone7.js', 'w').write(header + json.dumps(t7, ensure_ascii=False, indent=2) + ';\n')
print('post-pass ok — nodes now:', json.dumps(t7).count('"src"'))
print('gregory s2:', stanzas[1]['text'])
print('gregory s5:', stanzas[4]['text'][:60])
print('wed matins v2 tail:', repr(t7['matins_weekday']['wed']['aposticha']['verses'][1]['text'][-40:]))
print('tue lit prok verse:', repr(t7['liturgy_weekday']['tue']['prokeimenon']['verse']['text']))
print('sat departed count:', len(t7['matins_weekday']['sat']['aposticha']['verses']))
