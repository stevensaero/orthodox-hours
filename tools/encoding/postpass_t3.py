import json, re, sys
sys.path.insert(0, '/tmp/gen')
import manifest as M
RAW = {f: open(f'/tmp/scan/{f.replace("2-","3-")}.txt').read().split('\n') for f in ['2-5','2-6','2-7']}
def find_line(lines, marker, start=0):
    for i in range(start, len(lines)):
        if marker.startswith('REGEX:'):
            if re.match(marker[6:], lines[i].strip()): return i
        elif marker in lines[i]: return i
    return -1
def extract(file, start_marker, end_marker, occ=1, search_after=None):
    lines = RAW[file]; pos = 0
    if search_after:
        p = find_line(lines, search_after); assert p >= 0; pos = p + 1
    s = -1
    for _ in range(occ):
        s = find_line(lines, start_marker, s + 1 if s >= 0 else pos); assert s >= 0, (file, start_marker)
    block = [lines[s]] if end_marker is None else lines[s:find_line(lines, end_marker, s)+1]
    return re.sub(r'\s+', ' ', ' '.join(l.strip() for l in block if l.strip())).strip()
def node(text, f3, locus, strip=True):
    if strip: text = re.sub(r'^(The )?Verse: ', '', text)
    log = []
    for cy, la in {'О':'O','М':'M','о':'o'}.items():
        n = text.count(cy)
        if n: text = text.replace(cy, la); log.append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic)', 'to': la, 'count': n})
    d = {'text': text, 'tier': 2 if '*' in text else 1, 'src': {'file': f3, 'locus': locus}}
    if log: d['homoglyph_log'] = log
    return d
srcf = open('/tmp/oh2/src/data/octoechos_v2/tone3.js').read()
t3 = json.loads(srcf.split('export default ',1)[1].rstrip().rstrip(';'))
d = M.MANIFEST['departed_fri_eve']
t3['vespers_weekday']['fri']['aposticha']['verses'] = [
  node(extract('2-7', *d['v1']), '3-7.pdf', 'Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike the 2-7 print — §5 per-tone)'),
  node(extract('2-7', *d['v2']), '3-7.pdf', 'Friday-evening Vespers aposticha, departed verse 2')]
t3['matins_weekday']['fri']['aposticha']['verses'] = [
  node(extract('2-6', *M.M_PAIR_STD_1), '3-6.pdf', 'Friday Matins aposticha verse 1'),
  node(extract('2-6', *M.M_PAIR_STD_2), '3-6.pdf', 'Friday Matins aposticha verse 2 — "works of our hand" (singular; §5 divergence; sic-registered)')]
t3['matins_weekday']['thu']['aposticha']['verses'] = [
  node(extract('2-5', *M.M_PAIR_STD_1), '3-5.pdf', 'Thursday Matins aposticha verse 1 — the NORMAL Matins verse: the tone-2 §9.13 anomaly does NOT recur in tone 3'),
  node(extract('2-5', *M.M_PAIR_STD_2), '3-5.pdf', 'Thursday Matins aposticha verse 2 — "our God. be upon us" stray period (sic-registered)')]
ds = M.MANIFEST['departed_sat_matins']
v1 = extract('2-7', 'Verse: Blessed are they whom Thou hast chosen', 'REGEX:^О?\\s*Lord\\.?$', search_after=ds['search_after'])
v2 = extract('2-7', *ds['v2'], search_after=ds['search_after'])
v3 = extract('2-7', 'Verse: Their memorial * is from generation to generation.', None, search_after=ds['search_after'])
t3['matins_weekday']['sat']['aposticha']['verses'] = [
  node(v1, '3-7.pdf', 'Saturday Matins aposticha of the departed, verse 1 ("they" — the 2-7 print has "those"; §5 per-tone)'),
  node(v2, '3-7.pdf', 'Saturday Matins aposticha of the departed, verse 2'),
  node(v3, '3-7.pdf', 'Saturday Matins aposticha of the departed, verse 3 — "from generation to generation" (2-7: "unto generation and generation"; §5 divergence)')]
m6 = M.MANIFEST['daily_liturgy_propers']['fri']
tone_a, alle, averses = m6['all']
t3['liturgy_weekday']['fri']['alleluia'] = {'tone': tone_a,
  'text': node(re.sub(r'^Alleluia, in Tone [IVX]+: ', '', extract('2-6', *alle)), '3-6.pdf', 'Friday Liturgy Alleluia', strip=False),
  'verses': [node(extract('2-6', *averses[0]), '3-6.pdf', 'Friday Liturgy Alleluia verse — "ages," (the tone-2 print: "ages;"; §5 divergence)')]}
t3['liturgy_weekday']['thu']['alleluia_note'] = '3-5 prints the same digit-zero artifact ("0 Lord") at the same verse as 2-5 — normalized per §9.10 (scan review delivered); post-normalization the print byte-matches shared, so the ref stands.'
header = srcf[:srcf.index('export default ') + len('export default ')]
open('/tmp/oh2/src/data/octoechos_v2/tone3.js', 'w').write(header + json.dumps(t3, ensure_ascii=False, indent=2) + ';\n')
print('post-pass ok')
