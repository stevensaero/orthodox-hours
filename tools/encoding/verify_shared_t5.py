# §5 tone-invariance verification: re-run the shared.js extraction manifest
# against the TONE-3 raw layers (file remap 2-N → 3-N). Marker misses and
# byte mismatches are findings; matches verify the hypothesis per §5.
import json, re, sys
sys.path.insert(0, '/tmp/gen5')
import manifest as M

RAW = {}
for f in ['2-1','2-2','2-3','2-4','2-5','2-6','2-7']:
    t3 = f.replace('2-','5-')
    RAW[f] = open(f'/tmp/scan5/{t3}.txt').read().split('\n')

def find_line(lines, marker, start=0):
    for i in range(start, len(lines)):
        if marker.startswith('REGEX:'):
            if re.match(marker[6:], lines[i].strip()): return i
        elif marker in lines[i]: return i
    return -1

def extract(file, start_marker, end_marker, occ=1, search_after=None, window=10):
    lines = RAW[file]
    pos = 0
    if search_after:
        p = find_line(lines, search_after)
        if p < 0: return None
        pos = p + 1
    s = -1
    for _ in range(occ):
        s = find_line(lines, start_marker, s + 1 if s >= 0 else pos)
        if s < 0: return None
    if end_marker is None:
        block = [lines[s]]
    else:
        e = find_line(lines, end_marker, s)
        if not (0 <= e <= s + window): return None
        block = lines[s:e+1]
    text = ' '.join(l.strip() for l in block if l.strip())
    return re.sub(r'\s+', ' ', text).strip()

def strip_label(text):
    for pat in [r'^Verse: ', r'^Communion Verse: ', r'^Prokeimenon(, in Tone [IVX]+)?: ',
                r'^Prokeimenon, the hymn of the Theotokos, in Tone [IVX]+: ',
                r'^Alleluia, in Tone [IVX]+: ']:
        m = re.match(pat, text)
        if m: return text[m.end():]
    return text

def normO(t): return None if t is None else t.replace('О','O').replace('М','M').replace('о'.encode().decode(),'o') if t else t

shared = json.loads(open('/tmp/oh/src/data/octoechos_v2/shared.js').read().split('export default ',1)[1].rstrip().rstrip(';'))
report = {'match': 0, 'diverge': [], 'miss': []}
def cmp(name, t3, sh):
    if t3 is None:
        report['miss'].append(name); return
    a = strip_label(t3).replace('О','O').replace('М','M').replace('о','o').replace('С','C').replace('а','a')
    if a == sh: report['match'] += 1
    else: report['diverge'].append((name, sh[:70], a[:70]))

# daily vespers prokeimena
for day, m in M.MANIFEST['daily_vespers_prokeimena'].items():
    f = m['file']
    cmp(f'vespers_prok.{day}.text', extract(f, *m['text']), shared['daily_vespers_prokeimena'][day]['text']['text'])
    cmp(f'vespers_prok.{day}.verse', extract(f, *m['verse']), shared['daily_vespers_prokeimena'][day]['verse']['text'])
# weekday aposticha pairs
for day, (f, occ) in M.MANIFEST['vespers_pair_sites'].items():
    cmp(f'vespers_pair.{day}.1', extract(f, *M.V_PAIR_STD_1, occ=occ), shared['weekday_aposticha_verses']['sets']['standard_vespers'][0]['text'])
    cmp(f'vespers_pair.{day}.2', extract(f, *M.V_PAIR_STD_2, occ=occ), shared['weekday_aposticha_verses']['sets']['standard_vespers'][1]['text'])
for day, f in M.MANIFEST['matins_pair_sites'].items():
    cmp(f'matins_pair.{day}.1', extract(f, *M.M_PAIR_STD_1), shared['weekday_aposticha_verses']['sets']['standard_matins'][0]['text'])
    cmp(f'matins_pair.{day}.2', extract(f, *M.M_PAIR_STD_2), shared['weekday_aposticha_verses']['sets']['standard_matins'][1]['text'])
# thursday anomaly (§9.13 — does tone 3 repeat it?)
thu1 = extract('2-5', *M.V_PAIR_STD_1, occ=2)
print('THURSDAY ANOMALY in tone 5:', 'REPEATED (Vespers verse at Matins position)' if thu1 else 'NOT repeated — checking normal pair')
if not thu1:
    m1 = extract('2-5', *M.M_PAIR_STD_1)
    print('  tone-5 Thursday Matins first verse normal:', bool(m1))
# departed sets
d = M.MANIFEST['departed_fri_eve']
cmp('departed_fri.1', extract('2-7', *d['v1']), shared['weekday_aposticha_verses']['sets']['departed_vespers'][0]['text'])
cmp('departed_fri.2', extract('2-7', *d['v2']), shared['weekday_aposticha_verses']['sets']['departed_vespers'][1]['text'])
ds = M.MANIFEST['departed_sat_matins']
for k, sh_i in [('v1',0),('v2',1),('v3',2)]:
    cmp(f'departed_sat.{k}', extract('2-7', *ds[k], search_after=ds['search_after']), shared['weekday_aposticha_verses']['sets']['departed_matins_saturday'][sh_i]['text'])
# daily liturgy propers
for day, m in M.MANIFEST['daily_liturgy_propers'].items():
    f = m['file']
    tone_p, prok, pverse = m['prok']
    cmp(f'lit.{day}.prok', extract(f, *prok), shared['daily_liturgy_propers'][day]['prokeimenon']['text']['text'])
    if pverse: cmp(f'lit.{day}.prok_verse', extract(f, *pverse), shared['daily_liturgy_propers'][day]['prokeimenon']['verse']['text'])
    tone_a, alle, averses = m['all']
    cmp(f'lit.{day}.alleluia', extract(f, *alle), shared['daily_liturgy_propers'][day]['alleluia']['text']['text'])
    for i2, av in enumerate(averses):
        cmp(f'lit.{day}.all_v{i2}', extract(f, *av), shared['daily_liturgy_propers'][day]['alleluia']['verses'][i2]['text'])
    cmp(f'lit.{day}.communion', extract(f, *m['comm']), shared['daily_liturgy_propers'][day]['communion']['text'])
# saturday vespers prok + evlogitaria + polyeleos + virgin rejoice + gregory + ode8 (3-1)
svp = M.MANIFEST['sat_vespers_prok']
cmp('sat_gv_prok.text', extract('2-1', *svp['text']), shared['saturday_vespers_prokeimenon']['text']['text'])
for i2, v in enumerate(svp['verses']):
    cmp(f'sat_gv_prok.v{i2}', extract('2-1', *v), shared['saturday_vespers_prokeimenon']['verses'][i2]['text'])
ev = M.MANIFEST['evlogitaria']
cmp('evlog.refrain', extract('2-1', *ev['refrain']), shared['evlogitaria']['refrain']['text'])
for i2, t in enumerate(ev['troparia']):
    cmp(f'evlog.t{i2}', extract('2-1', *t), shared['evlogitaria']['troparia'][i2]['text'])
cmp('evlog.glory', extract('2-1', *ev['glory']), shared['evlogitaria']['glory']['text'])
cmp('evlog.both_now', extract('2-1', *ev['both_now']), shared['evlogitaria']['both_now']['text'])
po = M.MANIFEST['polyeleos']
for i2, v in enumerate(po['verses']):
    cmp(f'polyeleos.v{i2}', extract('2-1', *v), shared['polyeleos']['verses'][i2]['text'])
vr = M.MANIFEST['virgin_rejoice']
t3vr = extract('2-1', *vr['text'])
cmp('virgin_rejoice', (t3vr[:-len('(Thrice)')].strip() if t3vr and t3vr.endswith('(Thrice)') else t3vr), shared['theotokos_virgin_rejoice']['text']['text'])
gr = M.MANIFEST['gregory']
for i2, st in enumerate(gr['stanzas']):
    cmp(f'gregory.s{i2}', extract('2-1', *st), shared['gregory_sinaite_hymn']['stanzas'][i2]['text'])
o8 = M.MANIFEST['ode8']
cmp('ode8', extract('2-1', *o8['text']), shared['ode8_hymn_verse']['verse']['text'])

print(f"\n§5 WEEKDAY/SHARED verification vs tone 5: {report['match']} matched")
print(f"marker MISSES ({len(report['miss'])}):", report['miss'])
for name, sh, t3 in report['diverge']:
    print('DIVERGE', name); print('  T2/shared:', json.dumps(sh)); print('  T5       :', json.dumps(t3))
