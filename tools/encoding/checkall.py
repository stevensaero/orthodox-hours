# batch-verify every extract marker pair; print all failures at once
import re, sys
sys.path.insert(0, '/tmp/gen')
from manifest import MANIFEST, V_PAIR_STD_1, V_PAIR_STD_2, M_PAIR_STD_1, M_PAIR_STD_2
RAW = {f: open(f'/tmp/scan/{f}.txt').read().split('\n') for f in ['2-1','2-2','2-3','2-4','2-5','2-6','2-7']}
fails = []
def find_line(lines, marker, start=0):
    for i in range(start, len(lines)):
        if marker.startswith('REGEX:'):
            if re.match(marker[6:], lines[i].strip()): return i
        elif marker in lines[i]: return i
    return -1
def test(file, pair, occ=1, search_after=None, tag=''):
    if pair is None: return
    start, end = pair if isinstance(pair, tuple) and len(pair) == 2 else (pair, None)
    lines = RAW[file]; pos = 0
    if search_after:
        pos = find_line(lines, search_after) + 1
    s = -1
    for _ in range(occ):
        s = find_line(lines, start, s + 1 if s >= 0 else pos)
        if s < 0: fails.append(f'{tag} {file}: START missing: {start!r}'); return
    if end is not None:
        e = find_line(lines, end, s)
        if not (0 <= e <= s + 10): fails.append(f'{tag} {file}: END missing/far: {end!r} after {start!r}')
def walk(m, file=None, tag=''):
    if isinstance(m, dict):
        f = m.get('file', file)
        for k, v in m.items():
            if k in ('file','tone','prok_label','search_after','prok_departed_rubric','comm_departed_rubric'): continue
            walk(v, f, f'{tag}.{k}')
    elif isinstance(m, tuple):
        if len(m) == 2 and isinstance(m[0], str) and (m[1] is None or isinstance(m[1], str)):
            test(file, m, tag=tag)
        else:
            for v in m:
                if isinstance(v, (tuple, list)): walk(v, file, tag)
    elif isinstance(m, list):
        for v in m: walk(v, file, tag)
for key in ['daily_vespers_prokeimena','daily_liturgy_propers','sat_vespers_prok','sat_gv_aposticha_verses','lv_theotokos_verses','virgin_rejoice','evlogitaria','polyeleos','ode8','gregory']:
    walk(MANIFEST[key], tag=key)
walk(MANIFEST['praises_ladder']['verses'], '2-1', 'praises')
test('2-7', MANIFEST['departed_fri_eve']['v1'], tag='dep-fri v1')
test('2-7', MANIFEST['departed_fri_eve']['v2'], tag='dep-fri v2')
for k in ['v1','v2','v3']:
    test('2-7', MANIFEST['departed_sat_matins'][k], search_after=MANIFEST['departed_sat_matins']['search_after'], tag=f'dep-sat {k}')
for day,(f,occ) in MANIFEST['vespers_pair_sites'].items():
    test(f, V_PAIR_STD_1, occ=occ, tag=f'vp1 {day}'); test(f, V_PAIR_STD_2, occ=occ, tag=f'vp2 {day}')
for day,f in MANIFEST['matins_pair_sites'].items():
    test(f, M_PAIR_STD_1, tag=f'mp1 {day}'); test(f, M_PAIR_STD_2, tag=f'mp2 {day}')
test('2-5', V_PAIR_STD_1, occ=2, tag='thu anomaly v1'); test('2-5', M_PAIR_STD_2, tag='thu anomaly v2')
for name, fa, ma, fb, mb in MANIFEST['ladder_compare']:
    test(fa, ma, tag=f'ladder {name} a'); test(fb, mb, tag=f'ladder {name} b')
print('FAILURES:', len(fails))
for x in fails: print(' ', x)
