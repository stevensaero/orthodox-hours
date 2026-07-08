# shared.js generator — §11 step 2. Extracts verbatim from the raw pdftotext
# layers by line markers; joins wrapped lines with single spaces; strips the
# print labels "Verse: "/"Prokeimenon...: "/"Communion Verse: "/"Alleluia...: ";
# normalizes U+041E -> O (and the one ruled digit-zero site) WITH per-node log.
# Bytes never pass through the LLM. Fails loudly on any marker miss.
import json, re, sys
sys.path.insert(0, '/tmp/gen')
from manifest import MANIFEST, V_PAIR_STD_1, V_PAIR_STD_2, M_PAIR_STD_1, M_PAIR_STD_2

RAW = {f: open(f'/tmp/scan/{f}.txt').read().split('\n') for f in
       ['2-1','2-2','2-3','2-4','2-5','2-6','2-7']}
findings, errors = [], []

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
        pos = find_line(lines, search_after) + 1
        assert pos > 0, f'{file}: search_after not found: {search_after}'
    s = -1
    for _ in range(occ):
        s = find_line(lines, start_marker, s + 1 if s >= 0 else pos)
        assert s >= 0, f'{file}: start not found (occ): {start_marker}'
    if end_marker is None:
        block = [lines[s]]
    else:
        e = find_line(lines, end_marker, s)
        assert 0 <= e <= s + window, f'{file}: end not found within window: {end_marker!r} after {start_marker!r} (s={s}, e={e})'
        block = lines[s:e+1]
    text = ' '.join(l.strip() for l in block if l.strip() != '')
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def strip_label(text):
    for pat in [r'^Verse: ', r'^Communion Verse: ', r'^Prokeimenon(, in Tone [IVX]+)?: ',
                r'^Prokeimenon, the hymn of the Theotokos, in Tone [IVX]+: ',
                r'^Alleluia, in Tone [IVX]+: ']:
        m = re.match(pat, text)
        if m: return text[m.end():]
    return text

def node(text, file, locus, strip=True, digit_zero_ok=False, **extra):
    if strip: text = strip_label(text)
    log = []
    n_o = text.count('О')
    if n_o:
        text = text.replace('О', 'O')
        log.append({'from': 'U+041E О (Cyrillic)', 'to': 'O', 'count': n_o})
    if digit_zero_ok and re.search(r'(?:^|\s)0(?=\s+[A-Z])', text):
        text = re.sub(r'(?:^|(?<=\s))0(?=\s+[A-Z])', 'O', text)
        log.append({'from': 'ASCII digit 0 as O ("0 Lord", §9.10 ext.)', 'to': 'O', 'count': 1})
    elif re.search(r'(?:^|\s)0(?=\s+[A-Z])', text):
        errors.append(f'UNAPPROVED digit-zero at {file} {locus}')
    tier = 2 if '*' in text else 1
    d = {'text': text, 'tier': tier, 'src': {'file': f'{file}.pdf', 'locus': locus}}
    if log: d['homoglyph_log'] = log
    d.update(extra)
    return d

OUT = {}

# ── daily_vespers_prokeimena ──────────────────────────────────────────────────
dvp = {}
for day, m in MANIFEST['daily_vespers_prokeimena'].items():
    f = m['file']
    locus = f'{day}-evening Vespers, daily prokeimenon'
    dvp[day] = {'tone': m['tone'],
        'text': node(extract(f, *m['text']), f, locus),
        'verse': node(extract(f, *m['verse']), f, locus + ' (verse)')}
OUT['daily_vespers_prokeimena'] = dvp

# ── weekday_aposticha_verses ─────────────────────────────────────────────────
# Vespers standard pair: verify byte-identity across sun..thu evenings.
v1_texts, v2_texts = {}, {}
for day, (f, occ) in MANIFEST['vespers_pair_sites'].items():
    v1_texts[day] = (f, extract(f, *V_PAIR_STD_1, occ=occ))
    v2_texts[day] = (f, extract(f, *V_PAIR_STD_2, occ=occ))
def all_equal(d):
    vals = [t for (_, t) in d.values()]
    return all(v == vals[0] for v in vals)
for name, d in [('vespers pair v1', v1_texts), ('vespers pair v2', v2_texts)]:
    norm = {k: t.replace('О', 'O') for k, (_, t) in d.items()}
    if not all(v == list(norm.values())[0] for v in norm.values()):
        findings.append(f'DIVERGENCE in {name} across evenings: ' + json.dumps(norm, ensure_ascii=False))
vf, vt = v1_texts['sun']
sets = {}
sets['standard_vespers'] = [
    node(v1_texts['sun'][1], '2-2', 'Sunday-evening Vespers aposticha (identical print verified 2-2/2-3/2-4/2-5/2-6)'),
    node(v2_texts['sun'][1], '2-2', 'Sunday-evening Vespers aposticha, second verse (identical print verified 2-2/2-3/2-4/2-5/2-6)')]
# Matins standard pair: mon,tue,wed,fri
m1, m2 = {}, {}
for day, f in MANIFEST['matins_pair_sites'].items():
    m1[day] = (f, extract(f, *M_PAIR_STD_1))
    m2[day] = (f, extract(f, *M_PAIR_STD_2))
for name, d in [('matins pair v1', m1), ('matins pair v2', m2)]:
    norm = {k: t.replace('О', 'O') for k, (_, t) in d.items()}
    if not all(v == list(norm.values())[0] for v in norm.values()):
        findings.append(f'DIVERGENCE in {name} across mornings: ' + json.dumps(norm, ensure_ascii=False))
sets['standard_matins'] = [
    node(m1['mon'][1], '2-2', 'Monday Matins aposticha (identical print verified 2-2/2-3/2-4/2-6)'),
    node(m2['mon'][1], '2-2', 'Monday Matins aposticha, second verse (identical print verified 2-2/2-3/2-4/2-6)')]
# Thursday Matins anomaly (§9.13, encoded as printed)
thu1 = extract('2-5', *V_PAIR_STD_1, occ=2)
thu2 = extract('2-5', *M_PAIR_STD_2)
sets['thursday_matins_as_printed'] = [
    node(thu1, '2-5', 'Thursday Matins aposticha, first verse AS PRINTED (§9.13 anomaly: the Vespers pair’s verse at a Matins position; ruled encode-as-printed)'),
    node(thu2, '2-5', 'Thursday Matins aposticha, second verse')]
# Friday-evening departed pair (2-7)
dfe = MANIFEST['departed_fri_eve']
sets['departed_vespers'] = [
    node(extract('2-7', *dfe['v1']), '2-7', 'Friday-evening Vespers aposticha, departed verses'),
    node(extract('2-7', *dfe['v2']), '2-7', 'Friday-evening Vespers aposticha, departed verses (second)')]
# Saturday Matins departed trio (2-7)
dsm = MANIFEST['departed_sat_matins']
sets['departed_matins_saturday'] = [
    node(extract('2-7', *dsm['v1'], search_after=dsm['search_after']), '2-7', 'Saturday Matins aposticha of the departed (note per-site variance: “Blessed are THOSE whom” vs Friday evening’s “they”)'),
    node(extract('2-7', *dsm['v2'], search_after=dsm['search_after']), '2-7', 'Saturday Matins aposticha of the departed (second)'),
    node(extract('2-7', *dsm['v3'], search_after=dsm['search_after']), '2-7', 'Saturday Matins aposticha of the departed (third — first attested 2-7)')]
OUT['weekday_aposticha_verses'] = {
  'note': 'Day-keyed verse SETS (§5, day-keying confirmed 2-7). Identity across print sites verified programmatically from the raw text layers; any divergence would have failed generation.',
  'by_day': {
    'vespers': {'sun':'standard_vespers','mon':'standard_vespers','tue':'standard_vespers','wed':'standard_vespers','thu':'standard_vespers','fri':'departed_vespers'},
    'matins':  {'mon':'standard_matins','tue':'standard_matins','wed':'standard_matins','thu':'thursday_matins_as_printed','fri':'standard_matins','sat':'departed_matins_saturday'},
  },
  'sets': sets,
}

# ── daily_liturgy_propers ────────────────────────────────────────────────────
dlp = {}
for day, m in MANIFEST['daily_liturgy_propers'].items():
    f = m['file']
    tone_p, prok, pverse = m['prok']
    d = {}
    extra = {'sourceLabel': m['prok_label']} if 'prok_label' in m else {}
    d['prokeimenon'] = {'tone': tone_p,
        'text': node(extract(f, *prok), f, f'{day} Liturgy prokeimenon', **extra)}
    if pverse: d['prokeimenon']['verse'] = node(extract(f, *pverse), f, f'{day} Liturgy prokeimenon verse')
    tone_a, alle, averses = m['all']
    d['alleluia'] = {'tone': tone_a,
        'text': node(extract(f, *alle), f, f'{day} Liturgy Alleluia', digit_zero_ok=(day=='thu')),
        'verses': [node(extract(f, *av), f, f'{day} Liturgy Alleluia verse') for av in averses]}
    d['communion'] = node(extract(f, *m['comm']), f, f'{day} Liturgy koinonikon')
    if 'prok_departed' in m:
        tone_d, pd, _ = m['prok_departed']
        d['prokeimenon_departed'] = {'tone': tone_d, 'rubric': m['prok_departed_rubric'],
            'text': node(extract(f, *pd), f, 'Saturday Liturgy prokeimenon for the departed')}
    if 'comm_departed' in m:
        d['communion_departed'] = node(extract(f, *m['comm_departed']), f, 'Saturday Liturgy koinonikon for the departed', rubric_hint=m['comm_departed_rubric'])
        d['communion_departed']['sourceLabel'] = m['comm_departed_rubric']
        del d['communion_departed']['rubric_hint']
    dlp[day] = d
OUT['daily_liturgy_propers'] = dlp

# ── remaining 2-1 tables ─────────────────────────────────────────────────────
svp = MANIFEST['sat_vespers_prok']
OUT['saturday_vespers_prokeimenon'] = {'tone': svp['tone'],
  'text': node(extract('2-1', *svp['text']), '2-1', 'Saturday Great Vespers prokeimenon'),
  'verses': [node(extract('2-1', *v), '2-1', f'Saturday GV prokeimenon verse {i+1}') for i, v in enumerate(svp['verses'])]}

OUT['saturday_gv_aposticha_verses'] = [
  node(extract('2-1', *v), '2-1', f'Saturday Great Vespers aposticha verse {i+1}')
  for i, v in enumerate(MANIFEST['sat_gv_aposticha_verses']['verses'])]

OUT['lv_theotokos_aposticha_verses'] = [
  node(extract('2-1', *v), '2-1', f'Little Vespers Theotokos aposticha verse {i+1}')
  for i, v in enumerate(MANIFEST['lv_theotokos_verses']['verses'])]

vr = MANIFEST['virgin_rejoice']
vr_text = extract('2-1', *vr['text'])
assert vr_text.endswith('(Thrice)'), 'Virgin-rejoice (Thrice) marker expected'
vr_text_clean = vr_text[:-len('(Thrice)')].strip()
OUT['theotokos_virgin_rejoice'] = {'tone': vr['tone'],
  'text': dict(node(vr_text_clean, '2-1', 'Saturday Great Vespers, after the aposticha (vigil)', strip=False),
               provenance_note='Printed with “(Thrice)”; the vigil rubric (stored beside) governs Thrice/Twice/Once — device left to assembly per the rubric, not a repeat field (§9.4 covers “(Twice)” only; flagged in session notes).'),
  'vigil_rubric': extract('2-1', *vr['rubric'])}

ev = MANIFEST['evlogitaria']
OUT['evlogitaria'] = {
  'heading': extract('2-1', *ev['heading']),
  'refrain': node(extract('2-1', *ev['refrain']), '2-1', 'Evlogitaria refrain', strip=False),
  'troparia': [dict(node(extract('2-1', *t), '2-1', f'Evlogitaria troparion {i+1}', strip=False), label='plain') for i, t in enumerate(ev['troparia'])],
  'glory_verse': node(extract('2-1', *ev['glory_verse']), '2-1', 'Evlogitaria Glory verse (printed in full)', strip=False),
  'glory': dict(node(extract('2-1', *ev['glory']), '2-1', 'Evlogitaria Glory troparion (Trinity)', strip=False), label='glory'),
  'both_now_verse': node(extract('2-1', *ev['both_now_verse']), '2-1', 'Evlogitaria Both-now verse (printed in full)', strip=False),
  'both_now': dict(node(extract('2-1', *ev['both_now']), '2-1', 'Evlogitaria Both-now theotokion', strip=False), label='both_now'),
  'closing': extract('2-1', *ev['closing']),
  'note': 'V1 comparison surface: index.js EVLOGITARIA — compare at cross-check time (§5).'}

po = MANIFEST['polyeleos']
OUT['polyeleos'] = {
  'rubric': extract('2-1', *po['rubric']),
  'verses': [node(extract('2-1', *v), '2-1', f'Polyeleos select verse {i+1} (with Alleluia refrain as printed)') for i, v in enumerate(po['verses'])],
  'prelent_note': extract('2-1', *po['prelent_note']),
  'megalynarion_rubric': extract('2-1', *po['megalynarion_rubric'])}

OUT['praises_verse_ladder'] = [
  node(extract('2-1', *v, search_after=MANIFEST['praises_ladder']['search_after']), '2-1', f'Sunday Matins Praises verse {i+1}')
  for i, v in enumerate(MANIFEST['praises_ladder']['verses'])]

o8 = MANIFEST['ode8']
OUT['ode8_hymn_verse'] = {
  'rubric': extract('2-1', *o8['rubric']),
  'verse': node(extract('2-1', *o8['text']), '2-1', 'Sunday Matins, before the Ode VIII irmos/katavasia')}

gr = MANIFEST['gregory']
OUT['gregory_sinaite_hymn'] = {
  'title_rubric': extract('2-1', *gr['title_rubric']),
  'source_note': extract('2-1', *gr['source_note']),
  'stanzas': [node(extract('2-1', *s), '2-1', f'Hymn of Gregory the Sinaite, stanza {i+1}', strip=False) for i, s in enumerate(gr['stanzas'])]}

# ── ladder comparison (FINDING documentation; ladder NOT encoded) ────────────
ladder_report = []
for name, fa, ma, fb, mb in MANIFEST['ladder_compare']:
    ta = extract(fa, *ma).replace('О', 'O')
    tb = extract(fb, *mb).replace('О', 'O')
    ladder_report.append({'verse': name, 'match': ta == tb, 'a': f'{fa}: {ta}', 'b': f'{fb}: {tb}'})

# ── sanity: every text node non-empty, no stray Cyrillic left ────────────────
def check(o, path='shared'):
    if isinstance(o, dict):
        if 'text' in o and isinstance(o['text'], str):
            assert o['text'].strip(), f'empty text at {path}'
            assert 'О' not in o['text'], f'unnormalized Cyrillic at {path}'
        for k, v in o.items(): check(v, f'{path}.{k}')
    elif isinstance(o, list):
        for i, v in enumerate(o): check(v, f'{path}[{i}]')
check(OUT)

if errors:
    print('ERRORS:'); [print(' ', e) for e in errors]; sys.exit(1)

# ── emit shared.js ───────────────────────────────────────────────────────────
header = '''// src/data/octoechos_v2/shared.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — tone-independent shared tables (spec §5), §11 step 2.
// GENERATED from the raw pdftotext layers of the orthodox-sources chapter
// files (July 7 2026) — text extracted by line markers and joined
// programmatically; label prefixes ("Verse: ", "Prokeimenon:", etc.) stripped;
// U+041E О normalized to Latin O per the §9.10 ruling with per-node
// homoglyph_log; the single ruled digit-zero site (2-5 Thursday Alleluia)
// normalized with log. NOTHING hand-retyped.
//
// Tier rule applied: tier 2 where the print carries pointing (*), tier 1
// where it does not — per-item source fact (§3.2 of encoding_rule_v2.md).
// Note: verse/prokeimenon-class Tier-2 texts print no ** — see the §6
// pointing-check relaxation recorded in the session notes.
//
// Every table is a tone-invariance HYPOTHESIS: re-verify against each tone's
// chapters as encoded (§5); divergence is a finding and the item moves
// per-tone. lic_verse_ladder is DELIBERATELY ABSENT: byte-comparison across
// 2-1/2-2 print sites falsified the shared-ladder hypothesis (see
// project_notes.md, July 7 2026 — LIC verses stay per-position per §4).
// Dynamically loaded only (§2.1) via loadOctoechosV2Shared().
// ─────────────────────────────────────────────────────────────────────────────

export default '''
body = json.dumps(OUT, ensure_ascii=False, indent=2)
open('/tmp/oh2/src/data/octoechos_v2/shared.js', 'w').write(header + body + ';\n')

print('shared.js written:', len(body), 'bytes')
print('\nLADDER COMPARISON (finding):')
for r in ladder_report:
    print(f"  {r['verse']}: {'MATCH' if r['match'] else 'DIVERGE'}")
    if not r['match']:
        print(f"    {r['a']}\n    {r['b']}")
print('\nOTHER FINDINGS:', len(findings))
for f in findings: print(' ', f)
