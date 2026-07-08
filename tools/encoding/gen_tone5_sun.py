# tone3.js generator — §11 step 4: core + LV + GV + Nocturns + Sunday Matins +
# Sunday Liturgy from 2-1.pdf's -layout text (paragraph-indent tokenization).
# Nothing hand-retyped. 2-1 layer is CLEAN (scan July 8 2026) — asserted.
import json, re, sys

RAW = open('/tmp/scan5/5-1L.txt').read().replace('\x0c', '')   # 4-1 print fact: 3 page breaks fall MID-PARAGRAPH — formfeed is a page separator, not a paragraph boundary
assert not any(c in RAW for c in 'ОМоСа'), 'N-1 must be clean'
lines = RAW.split('\n')

# ── paragraph tokenizer ──────────────────────────────────────────────────────
paras = []   # {kind: 'heading'|'para', text}
cur = None
for l in lines:
    stripped = l.strip()
    indent = len(l) - len(l.lstrip())
    if not stripped:
        cur = None; continue
    if indent >= 8:
        paras.append({'kind': 'heading', 'text': stripped}); cur = None; continue
    if indent >= 1 or stripped.startswith('Irmos:'):   # tone-4 print fact: paragraph starts at single-space indent (4-1 l.19 etc.)
        cur = {'kind': 'para', 'text': stripped}; paras.append(cur); continue
    if cur is None or re.match(r'^((The )?Verse:|Refrain: |Alleluia, in Tone|Irmos: |Communion Verse: |Glory \.\.\.,|Both now \.\.\.,|Theotokion: |Trinitarion: |(The )?Prokeimenon[,:])', stripped):   # 5-1: a page break puts the Liturgy Prokeimenon at col 0 — block-start form added
        cur = {'kind': 'para', 'text': stripped}; paras.append(cur)
    else:
        cur['text'] += ' ' + stripped
for p in paras: p['text'] = re.sub(r'\s+', ' ', p['text']).strip()

# merge pass: verse-class blocks print their continuations INDENTED (bold-
# italic typesetting), so they tokenized as separate paragraphs — absorb
# followers until the block ends with terminal punctuation.
VERSE_CLASS = re.compile(r'^(The )?Verse: |^Refrain: |^(The )?Prokeimenon|^Communion Verse: |^Alleluia, in Tone|^Spec\. Mel\.')
TERMINAL = re.compile(r'[.!?”’)]$|:$')
merged = []
for p in paras:
    if merged and merged[-1]['kind'] == 'para' and VERSE_CLASS.match(merged[-1]['text']) \
       and not TERMINAL.search(merged[-1]['text']) and p['kind'] == 'para' \
       and not merged[-1]['text'].endswith('all ye peoples'):
        # exact guard: 5-1's LV verse 3 prints WITHOUT its final period
        # ('all ye peoples' — sic register); an unterminated-looking verse that
        # is in fact complete must not absorb the following sticheron
        merged[-1]['text'] += ' ' + p['text']
    else:
        merged.append(p)
paras = merged

def find(text_frag, kind=None, start=0):
    for i in range(start, len(paras)):
        if text_frag in paras[i]['text'] and (kind is None or paras[i]['kind'] == kind):
            return i
    raise AssertionError(f'not found: {text_frag!r}')

def node(text, locus, tier=None, **extra):
    assert text and not any(c in text for c in 'ОМоСа'), locus
    d = {'text': text, 'tier': tier if tier is not None else (2 if '*' in text else 1),
         'src': {'file': '5-1.pdf', 'locus': locus}}
    d.update({k: v for k, v in extra.items() if v is not None})
    return d

def strip_verse(t): return re.sub(r'^(The )?Verse: ', '', t)

ROM2N = {'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9}
def ode_of(t):
    m = re.match(r'^ODE(VIII|VII|VI|IX|IV|III|II|I|V)$', t.replace(' ', ''))
    return ROM2N[m.group(1)] if m else None


# Spec. Mel. label matcher — EXACT attested tone-4 variants (sic register):
#   'Spec. Mel.: “X ...”:' (standard) | 'Spec, Mel.: …' (4-4) |
#   'Spec. Mel: …' (4-1, Nocturns) | 'Spec. Mel.: “X... “:' (4-6, curly-left close)
SPECMEL_RE = re.compile(r'^Spec[.,] Mel\.?: \u201c(.+?)( ?\.\.\.)? ?[\u201d\u201c] ?:$')
def specmel(t):
    m = SPECMEL_RE.match(t)
    return m.group(1) if m else None

findings = []

# ═══ LITTLE VESPERS (§4.2) ════════════════════════════════════════════════════
i = find('AT LITTLE VESPERS', 'heading') + 1
lv_rubric = paras[i]['text']; assert lv_rubric.startswith('On “Lord, I have cried'), lv_rubric
i = find('The Resurrection Stichera, in Tone V', start=i)   # 5-1 prints 'Tone V.' (period, not colon) — heading-punctuation print fact
if paras[i]['text'].endswith('.'):
    findings.append("LV stichera heading prints 'The Resurrection Stichera, in Tone V.' — period for colon (heading sic class)")
i += 1
lv_verses, lv_lic = [], []
while paras[i]['text'].startswith('Verse:'):
    lv_verses.append(node(strip_verse(paras[i]['text']), f'Little Vespers, LIC verse {len(lv_verses)+1}')); i += 1
    _lt = paras[i]['text']
    if _lt.startswith('Repeat: '):
        # 5-1 print fact: the LV repeat is an INCIPIT with an explicit printed
        # 'Repeat:' label (§2.7 device mirrored; 2-1/4-1 printed it in full)
        lv_lic.append(node(_lt[len('Repeat: '):], f'Little Vespers, LIC sticheron position {len(lv_lic)+1} (incipit repeat of position 1, §2.7, printed with an explicit "Repeat:" label)',
                           incipit_ref='tone5.little_vespers.lic[0]', sourceLabel='Repeat:'))
    else:
        lv_lic.append(node(_lt, f'Little Vespers, LIC sticheron position {len(lv_lic)+1}'))
    i += 1
findings.append(f'LV LIC positions: {len(lv_lic)} (tone 2: 4)')
if lv_lic[1].get('incipit_ref'):
    findings.append('LV s1 repeat printed as a "Repeat:"-labeled INCIPIT (§2.7) — tone 2/4: full double print; tone 3: no repeat — third distinct per-tone device form')
elif lv_lic[0]['text'] == lv_lic[1]['text']:
    findings.append('LV s1 full double print CONFIRMED (§9.4 device, byte-identical)')
else:
    findings.append('LV: NO double print of s1 — tone-2 pattern NOT repeated (per-tone fact)')
assert paras[i]['text'].startswith('Glory ..., Both now ..., Theotokion'), paras[i]['text']
i += 1
lv_lic_theotokion = node(paras[i]['text'], 'Little Vespers, LIC Glory/Both-now Theotokion'); i += 1
assert 'O Joyous Light' in paras[i]['text']; i += 1
lv_prok_rubric = paras[i]['text']; assert lv_prok_rubric.startswith('The Prokeimenon'); i += 1
assert 'Vouchsafe' in paras[i]['text']; i += 1
assert paras[i]['text'].startswith('On the Aposticha'); i += 1
lv_ap_res = node(paras[i]['text'], 'Little Vespers, aposticha Resurrection sticheron (as printed here — differs from the GV print, §2.2)'); i += 1
lv_theo_stich = []
CAPTURED = []
for n in range(3):
    assert paras[i]['text'].startswith('Verse:'), paras[i]['text']
    CAPTURED.append(('shared.lv_theotokos_aposticha_verses[%d]' % n, strip_verse(paras[i]['text']))); i += 1
    lv_theo_stich.append(node(paras[i]['text'], f'Little Vespers, aposticha Theotokos sticheron {n+1}')); i += 1
assert paras[i]['text'].startswith('Glory ..., Both now ..., Theotokion'); i += 1
lv_ap_theotokion = node(paras[i]['text'], 'Little Vespers, aposticha Theotokion'); i += 1
assert paras[i]['text'].startswith('“Now lettest Thou'); lv_closing = paras[i]['text']; i += 1
assert 'Resurrection Troparion' in paras[i]['text']; i += 1
lv_troparion_site = paras[i]['text']; i += 1
lv_dismissal_marker = paras[i]['text']; assert lv_dismissal_marker.startswith('Glory ..., Both now ..., Theotokion')
i += 1; assert 'And the Dismissal' in paras[i]['text']

little_vespers = {
  'rubric': lv_rubric,
  'lic': lv_lic, 'lic_verses': lv_verses,
  'lic_theotokion': lv_lic_theotokion,
  'prokeimenon': {'ref': 'shared.saturday_vespers_prokeimenon', 'rubric': lv_prok_rubric},
  'aposticha': {
    'resurrection': [lv_ap_res],
    'theotokos': lv_theo_stich,
    'theotokos_verses': {'ref': 'shared.lv_theotokos_aposticha_verses'},
  },
  'aposticha_theotokion': lv_ap_theotokion,
  'closing_rubric': lv_closing,
  'dismissal_rubric': lv_dismissal_marker + ' [marked WITHOUT a printed text — §9.6: resolution is an assembly question (Fekula/Theotokia tables), not a data gap]',
}

# ═══ GREAT VESPERS (§4.3) ═════════════════════════════════════════════════════
i = find('AT GREAT VESPERS', 'heading') + 1
gv_rubric = paras[i]['text']; assert gv_rubric.startswith('On “Lord I have cried'), gv_rubric; i += 1
assert 'The Resurrection Stichera' in paras[i]['text']; i += 1
gv_lic, gv_verses = [], []
anatolius = False
while True:
    if 'Anatolius' in paras[i]['text'] and paras[i]['kind'] == 'heading':
        anatolius = True; i += 1; continue
    if 'Menaion' in paras[i]['text']: break
    assert paras[i]['text'].startswith('Verse:'), (len(gv_lic), paras[i]['text'])
    gv_verses.append(node(strip_verse(paras[i]['text']), f'Great Vespers, LIC ladder verse {len(gv_verses)+1}')); i += 1
    extra = {'provenance_note': 'sub-group "Other Stichera, by Anatolius" (§4.3)'} if anatolius else {}
    gv_lic.append(node(paras[i]['text'], f'Great Vespers, LIC sticheron {len(gv_lic)+1}', **extra)); i += 1
findings.append(f'GV LIC stichera: {len(gv_lic)} (tone 2: 7); Anatolius sub-group present: {anatolius}')
assert 'Then the Stichera from the Menaion' in paras[i]['text']; gv_menaion_rubric = paras[i]['text']; i += 1
gv_menaion_verses = []
for n in range(3):
    assert paras[i]['text'].startswith('Verse:'), paras[i]['text']
    gv_menaion_verses.append(node(strip_verse(paras[i]['text']), f'Great Vespers, Menaion-stichera verse {n+1}')); i += 1
assert paras[i]['text'].startswith('Glory from the Menaion'); dog_rub1 = paras[i]['text']; i += 1
assert 'Theotokion Dogmatic' in paras[i]['text']; dog_rub2 = paras[i]['text']; i += 1
gv_dogmatikon = node(paras[i]['text'], 'Great Vespers, Glory/Both-now — Theotokion Dogmatic',
                     sourceLabel='Glory ..., Both now ..., Theotokion Dogmatic'); i += 1
assert 'After the Entrance' in paras[i]['text']; i += 1
assert 'Saturday Vespers Prokeimenon' in paras[i]['text']; i += 1
i = find('On the Aposticha, these Stichera, in Tone V:', start=i) + 1
gv_ap = [node(paras[i]['text'], 'Great Vespers, aposticha sticheron 1 (unversed)')]; i += 1
for n in range(3):
    assert paras[i]['text'].startswith('Verse:'), paras[i]['text']
    CAPTURED.append(('shared.saturday_gv_aposticha_verses[%d]' % n, strip_verse(paras[i]['text']))); i += 1
    gv_ap.append(node(paras[i]['text'], f'Great Vespers, aposticha sticheron {n+2}')); i += 1
ap_glory_rubric = None
if paras[i]['text'].startswith('Glory from the Menaion'):
    ap_glory_rubric = paras[i]['text']; i += 1
assert paras[i]['text'].startswith('Glory ..., Both now ..., Theotokion'); i += 1
gv_ap_theotokion = node(paras[i]['text'], 'Great Vespers, aposticha Theotokion — the REAL Saturday fallback (§4.3/§8)'); i += 1
assert paras[i]['text'].startswith('“Now lettest Thou'); i += 1
assert paras[i]['text'] in ('Tone IV:', 'Then, in Tone IV:'), paras[i]['text']
if paras[i]['text'] == 'Then, in Tone IV:':
    findings.append("virgin-rejoice heading prints 'Then, in Tone IV:' (3-1/4-1: bare 'Tone IV:') — per-print heading fact")
i += 1
i += 1   # O Theotokos and Virgin (shared print site incl. (Thrice))
assert paras[i]['text'].startswith('Note: If it is a regular Sunday Vigil'); i += 1
assert 'And the Dismissal' in paras[i]['text']; i += 1
assert paras[i]['text'].startswith('If a Vigil is not served'); gv_novigil_rubric = paras[i]['text']; i += 1
assert 'Resurrection Troparion' in paras[i]['text']; i += 1
gv_troparion_site = paras[i]['text']; i += 1
assert 'the Resurrection Theotokion' in paras[i]['text']; i += 1
gv_dismissal_site = paras[i]['text']

great_vespers = {
  'rubric': gv_rubric,
  'lic': gv_lic, 'lic_verses': gv_verses,
  'lic_menaion_rubric': gv_menaion_rubric,
  'lic_menaion_verses': gv_menaion_verses,
  'dogmatikon_rubric': dog_rub1 + ' ' + dog_rub2,
  'dogmatikon': gv_dogmatikon,
  'prokeimenon': {'ref': 'shared.saturday_vespers_prokeimenon'},
  'aposticha': gv_ap,
  'aposticha_verses': {'ref': 'shared.saturday_gv_aposticha_verses'},
  'aposticha_glory_rubric': ap_glory_rubric,
  'aposticha_theotokion': gv_ap_theotokion,
  'vigil_rubric': {'ref': 'shared.theotokos_virgin_rejoice'},
  'no_vigil_rubric': gv_novigil_rubric,
}

# ═══ canonical fields (§4.1) — multi-site verification ═══════════════════════
def normquote(t): return t.replace('“','').replace('”','').replace('(Twice)','').strip()
i = find('AT MATINS', 'heading') + 1
gil_rubric = paras[i]['text']; assert gil_rubric.startswith('On “God is The Lord'), gil_rubric; i += 1
matins_troparion_site = paras[i]['text']; i += 1
gil_glory_rubric = paras[i]['text']; i += 1
while paras[i]['text'].endswith(':') and 'Theotokion' in paras[i]['text']:
    gil_glory_rubric += ' ' + paras[i]['text']; i += 1
assert '(or in the Tone of that from the Menaion)' in gil_glory_rubric, gil_glory_rubric
matins_dismissal_site = paras[i]['text']
lit_i = find('LITURGY', 'heading')
trop_prefix = gv_troparion_site[:40]
lit_trop_i = find(trop_prefix, start=lit_i)
liturgy_troparion_site = paras[lit_trop_i]['text']
sites = {'LV': lv_troparion_site, 'GV': gv_troparion_site,
         'Matins': matins_troparion_site, 'Liturgy': liturgy_troparion_site}
base = normquote(gv_troparion_site)
for k, s in sites.items():
    assert normquote(s) == base, f'troparion site {k} diverges beyond punctuation:\n{normquote(s)}\n{base}'
quoted = [k for k, s in sites.items() if '“' in s]
findings.append(f'troparion print sites verified identical (mod punctuation) at {len(sites)}; quote-marked sites: {quoted or "none"} (tone 2: LV only)')
troparion = node(gv_troparion_site, 'Great Vespers, if-no-Vigil (CANONICAL print, §9.5 convention)',
  provenance_note=f'Verified word- and pointing-identical at all four print sites (LV dismissal, GV no-vigil, Matins God-is-the-Lord, Liturgy); quotation-mark variance at: {", ".join(quoted) if quoted else "none"}. Canonical field stores the GV print per the §9.5 ruling.')
assert matins_dismissal_site == gv_dismissal_site, 'dismissal theotokion sites must byte-match (§4.1)'
dismissal_theotokion = node(gv_dismissal_site, 'Great Vespers, if-no-Vigil (verified identical at the Matins God-is-the-Lord site)')
kont_i = find('Resurrection Kontakion, in Tone V:', start=find('AT MATINS','heading')) + 1
kont_sm = None
if specmel(paras[kont_i]['text']) is not None:
    kont_sm = specmel(paras[kont_i]['text']); kont_i += 1
    findings.append(f'kontakion carries a Spec. Mel. label at the Matins site: “{kont_sm}” (tone 2: none)')
kontakion_site1 = paras[kont_i]['text']
assert paras[kont_i+1]['text'].startswith('Ikos:')
ikos = node(re.sub(r'^Ikos: ', '', paras[kont_i+1]['text']), 'Sunday Matins, after Ode VI', sourceLabel='Ikos')
lit_kont_i = find('Resurrection Kontakion, in Tone V:', start=lit_i) + 1
assert paras[lit_kont_i]['text'] == kontakion_site1, 'kontakion sites must byte-match (§4.1)'
kontakion = node(kontakion_site1, 'Sunday Matins after Ode VI (verified identical at the Liturgy site)', spec_mel=kont_sm)

# ═══ NOCTURNS (§4.6) — Shape B ════════════════════════════════════════════════
def parse_shape_b(start_i, end_i, where):
    odes, ode, items, irmos = {}, None, None, None
    after = {}
    j = start_i
    def flush():
        if ode: odes[ode] = {'irmos': irmos, 'items': items}
    while j < end_i:
        p = paras[j]; t = p['text']
        o = ode_of(t)
        if p['kind'] == 'heading' and o:
            flush()
            ode = o
            items, irmos = [], None; j += 1; continue
        if t.startswith('Sessional Hymn'):
            assert ode in (3, 6), (where, ode)
            spec_mel = None; j += 1
            if specmel(paras[j]['text']) is not None:
                spec_mel = specmel(paras[j]['text']); j += 1
                if not paras[j-1]['text'].startswith('Spec. Mel.: '):
                    findings.append('Spec. Mel. label variant at ' + where + ': ' + repr(paras[j-1]['text']) + ' (sic register)')
            sess = node(paras[j]['text'], f'{where}, sessional after Ode {"III" if ode==3 else "VI"}', spec_mel=spec_mel, sourceLabel='Sessional Hymn'); j += 1
            theo = None
            if paras[j]['text'].startswith('Glory ..., Both now ..., Theotokion'):
                j += 1
                theo = node(paras[j]['text'], f'{where}, sessional theotokion after Ode {"III" if ode==3 else "VI"}', type='theotokion'); j += 1
            after[f'after_ode{ode}'] = {'sessional': sess, **({'theotokion': theo} if theo else {})}
            continue
        if t.startswith('Irmos:'):
            irmos = node(re.sub(r'^Irmos: ', '', t), f'{where}, Ode {ode} irmos'); j += 1; continue
        if ode:
            label, text = 'plain', t
            if t.startswith('Glory ...,'): label, text = 'glory', re.sub(r'^Glory \.\.\., ', '', t)
            elif t.startswith('Both now ...,'): label, text = 'both_now', re.sub(r'^Both now \.\.\., ', '', t)
            rep = None
            if text.endswith('(Twice)'): rep, text = 2, text[:-len('(Twice)')].strip()
            items.append(node(text, f'{where}, Ode {ode}, item {len(items)+1}', label=label, repeat=rep))
        j += 1
    flush()
    return odes, after

noc_i = find('AT NOCTURNS', 'heading')
noc_frame = paras[noc_i+1]['text']
canon_head_i = find('And then, the Canon to the Holy', start=noc_i)
head = paras[canon_head_i]['text']
m = re.search(r'the acrostic whereof is “(.+?),?” the composition of (.+?), in Tone V', head)
assert m, head
greg_i = find('Then, the hymn of Gregory the Sinaite', start=noc_i)
noc_odes, noc_after = parse_shape_b(canon_head_i+1, greg_i, 'Nocturns, Trinity canon')
assert sorted(noc_odes) == [1,3,4,5,6,7,8,9], sorted(noc_odes)
noc_close_i = find('The rest of Nocturns, and the Dismissal', start=greg_i)
nocturns = {
  'frame_rubric': noc_frame,
  'canon': {'title': 'Canon to the Holy & Life-creating Trinity',
            'composer': m.group(2), 'acrostic': m.group(1),
            'heading_rubric': head,
            'odes': {str(k): v for k, v in noc_odes.items()}},
  'after_ode3': noc_after['after_ode3'], 'after_ode6': noc_after['after_ode6'],
  'gregory_rubric': {'ref': 'shared.gregory_sinaite_hymn', 'rubric': paras[greg_i]['text'] + ' ' + paras[greg_i+1]['text']},
  'closing_rubric': paras[noc_close_i]['text'],
}
tw = [o for o in [1,3,4,5,6,7,8,9] if noc_odes[o]['items'] and noc_odes[o]['items'][0].get('repeat') == 2]
findings.append(f'Nocturns (Twice) on first items at odes: {tw or "none"} (tone 2: [6, 7, 8]) — per-tone device distribution')

# ═══ SUNDAY MATINS (§4.7) ═════════════════════════════════════════════════════
i = find('After the 1st chanting of the Psalter')
sessionals = []
for kath, label in [(i, 'Kathisma II'), (find('After the 2nd chanting of the Psalter'), 'Kathisma III')]:
    j = kath; rub = paras[j]['text']; j += 1
    while paras[j]['text'].endswith(':') and not paras[j]['text'].startswith(('Glory', 'Spec')):
        rub += ' ' + paras[j]['text']; j += 1
    h1 = node(paras[j]['text'], f'Sunday Matins, {label}, sessional 1', label='plain'); j += 1
    assert paras[j]['text'].startswith('Verse:')
    v = node(strip_verse(paras[j]['text']), f'Sunday Matins, {label}, sessional verse'); j += 1
    h2 = node(paras[j]['text'], f'Sunday Matins, {label}, sessional 2', label='plain'); j += 1
    ct = 'stavrotheotokion' if 'Stavrotheotokion' in paras[j]['text'] else 'theotokion'
    _gh = paras[j]['text']
    assert _gh.startswith('Glory ..., Both now ...') or _gh == 'Glory, Both now ..., Theotokion:', _gh
    if _gh == 'Glory, Both now ..., Theotokion:':
        findings.append(f'{label} closer heading prints \'Glory, Both now ..., Theotokion:\' — ellipsis missing after Glory (structural-heading sic, register)')
    j += 1
    closer = node(paras[j]['text'], f'Sunday Matins, {label}, Glory/Both-now closer', type=ct)
    sessionals.append({'rubric': rub, 'items': [h1, h2], 'verses': [v], 'closer': closer})
findings.append(f"Sunday sessional closer types: K-II {sessionals[0]['closer']['type']}, K-III {sessionals[1]['closer']['type']} (tone 2: stavrotheotokion, theotokion — spec §4.7 warned: do NOT assume the distribution)")

hyp_i = find('The Sessional Hymn', 'heading')   # 5-1 prints 'The Sessional Hymn, in Tone V:' (3-1/4-1: 'The Sessional Hymn:')
findings.append('hypakoe heading form: ' + repr(paras[hyp_i]['text']) + " (3-1/4-1: 'The Sessional Hymn:') — per-print heading fact")
hypakoe = node(paras[hyp_i+1]['text'], 'Sunday Matins, after the Evlogitaria', sourceLabel='The Sessional Hymn')
asc_i = find('The Songs of Ascent:')
_asch = paras[asc_i]['text']
findings.append('Songs of Ascent heading form: ' + repr(_asch) + " (tone 3: 'The Songs of Ascent: 1st Antiphon:') — per-print heading fact")
anabathmoi = []
j = asc_i
while 'Antiphon' in paras[j]['text']:
    ant = len(anabathmoi); j += 1
    t1 = node(paras[j]['text'], f'Sunday Matins, Anabathmoi antiphon {ant+1}, troparion 1'); j += 1
    t2 = node(paras[j]['text'], f'Sunday Matins, Anabathmoi antiphon {ant+1}, troparion 2'); j += 1
    assert paras[j]['text'].startswith('Glory ..., Both now'); j += 1
    g = node(paras[j]['text'], f'Sunday Matins, Anabathmoi antiphon {ant+1}, Glory/Both-now'); j += 1
    anabathmoi.append({'troparia': [t1, t2], 'gloria': g})
findings.append(f'anabathmoi antiphon count (per-tone fact, §9.7): {len(anabathmoi)}')
assert paras[j]['text'].startswith('Prokeimenon, in Tone V:'), paras[j]['text']
m_prok = node(re.sub(r'^Prokeimenon, in Tone V: ', '', paras[j]['text']), 'Sunday Matins prokeimenon'); j += 1
m_prok_verse = None
if paras[j]['text'].startswith(('The Verse:', 'Verse:')):
    m_prok_verse = node(strip_verse(paras[j]['text']), 'Sunday Matins prokeimenon verse')
else:
    findings.append('Matins prokeimenon printed WITHOUT a verse line (tone 2: verse printed) — per-tone print fact')
findings.append('Psalm-50 post-Gospel troparia block printed IN FULL in this chapter — EXCLUDED per §5 (tone 2 did not print it); recorded for the audit trail')

# Shape A canon
def parse_shape_a(start_i, end_i):
    odes = {}; ode = None; sub = None; cur = None; pending_refrain = None
    j = start_i
    while j < end_i:
        p = paras[j]; t = p['text']
        o2 = ode_of(t)
        if p['kind'] == 'heading' and o2:
            ode = o2
            odes[ode] = {'irmos': None, 'resurrection': None, 'cross_resurrection': None, 'theotokos': None}
            sub = 'resurrection'; cur = {'refrain': None, 'troparia': []}; odes[ode][sub] = cur
            pending_refrain = None; j += 1; continue
        if ode is None: j += 1; continue
        if t.startswith(('Another, of the Cross and Resurrection', 'Another Canon, of Cross and Resurrection')):
            sub = 'cross_resurrection'; cur = {'refrain': None, 'troparia': []}; odes[ode][sub] = cur; pending_refrain = None; j += 1; continue
        if t.startswith(('Another, of the Theotokos', 'Another Canon, to the most holy Theotokos')):
            sub = 'theotokos'; cur = {'refrain': None, 'troparia': []}; odes[ode][sub] = cur; pending_refrain = None; j += 1; continue
        if t.startswith('Irmos:'):
            odes[ode]['irmos'] = node(re.sub(r'^Irmos: ', '', t), f'Sunday Matins canon, Ode {ode} irmos'); j += 1; continue
        if t.startswith('Refrain:'):
            pending_refrain = re.sub(r'^Refrain: ', '', t)
            if cur['refrain'] is None and not t.startswith('Refrain: We bless') and 'Most holy Theotokos' not in t or (sub != 'resurrection' and cur['refrain'] is None):
                pass
            j += 1; continue
        if t.startswith(('The Troparia from the Menaion', 'After the Troparia from the Menaion')):
            odes[ode]['menaion_rubric'] = t
            # everything from here to the next ODE heading is out-of-canon
            # material: the shared Ode-VIII verse + katavasia rubric, the
            # §5-EXCLUDED Magnificat block, small litany, kontakion/ikos
            # (extracted separately as canonical fields).
            j += 1
            while j < end_i and not (paras[j]['kind'] == 'heading' and ode_of(paras[j]['text'])):
                j += 1
            continue
        if t == 'The small litany:' or t.startswith('Then, “Holy is our God'):
            odes[ode]['post_rubric'] = odes[ode].get('post_rubric', '')
            odes[ode]['post_rubric'] = (odes[ode]['post_rubric'] + ' ' + t).strip(); j += 1; continue
        if t.startswith('Resurrection Kontakion') or t.startswith('Ikos:'):
            j += 1
            if paras[j-1]['text'].startswith('Resurrection Kontakion'): j += 1  # skip kontakion text (canonical field)
            continue
        m3 = re.match(r'^(Theotokion|Trinitarion|Trinitarian): ', t)
        if m3:
            ct9 = 'trinitarion' if m3.group(1).startswith('Trinitari') else 'theotokion'
            cur['closer'] = node(t[m3.end():], f'Sunday Matins canon, Ode {ode}, {sub} closer',
                                 type=ct9, refrain=pending_refrain, sourceLabel=m3.group(1))
            pending_refrain = None; j += 1; continue
        # plain troparion
        if cur['refrain'] is None: cur['refrain'] = pending_refrain
        cur['troparia'].append(node(t, f'Sunday Matins canon, Ode {ode}, {sub} troparion {len(cur["troparia"])+1}'))
        j += 1
    return odes

canon_start = find('O God, save Thy people', 'heading') + 1
canon_title_print = paras[canon_start]['text']
findings.append(f'canon heading form: “{canon_title_print}” (tone 2: “Resurrection canon, in Tone II:”)')
exap_i = find('Exapostilarion (Svetilen)')
odes_a = parse_shape_a(canon_start+1, exap_i)
assert sorted(odes_a) == [1,3,4,5,6,7,8,9]
if 'Another Canon, of Cross and Resurrection' in RAW:
    findings.append('Shape A sub-canon headings: Ode I prints the LONG forms; Odes III-IX the short forms — per-print heading variance (the 4-1 pattern)')
else:
    findings.append('Shape A sub-canon headings: short forms throughout (no 4-1-style Ode-I long forms)')
closer_census = {}
for o, od in odes_a.items():
    assert od['irmos'] and od['resurrection'] and od['cross_resurrection'] and od['theotokos'], o
    closer_census[o] = od['resurrection'].get('closer', {}).get('type') if od['resurrection'].get('closer') else None
findings.append(f'Shape A resurrection closer census: {closer_census} (tone 2: theotokion at 1–8, trinitarion at 9 — §4.11 claim DEMOTED to per-tone)')

exap_rubric = paras[exap_i]['text'] + ' ' + paras[exap_i+1]['text']
assert paras[exap_i+1]['text'].startswith('Note: The Exapostilarion')

# praises
pr_i = find('On the Praises')
pr_rubric = paras[pr_i]['text']
j = pr_i + 1
assert 'Resurrection Stichera' in paras[j]['text']; j += 1
pr_stichera = []
anat2 = False
while True:
    if 'Anatolius' in paras[j]['text']: anat2 = True; j += 1; continue
    if not paras[j]['text'].startswith('Verse:'): break
    CAPTURED.append(('shared.praises_verse_ladder[%d]' % len(pr_stichera), strip_verse(paras[j]['text']))); j += 1
    pr_stichera.append(node(paras[j]['text'], f'Sunday Matins, Praises sticheron {len(pr_stichera)+1}',
        **({'provenance_note': 'sub-group "Other Stichera of Anatolius"'} if anat2 else {}))); j += 1
findings.append(f'Praises stichera: {len(pr_stichera)} (tone 2: 8)')
gloria_rub = paras[j]['text']; assert gloria_rub.startswith('Glory ..., The Eothinon'), gloria_rub; j += 1
eothinon_note = paras[j]['text']; assert eothinon_note.startswith('Note:'); j += 1
assert paras[j]['text'].startswith('Both now ..., Theotokion'); j += 1
pr_theotokion = node(paras[j]['text'], 'Sunday Matins, Praises Both-now Theotokion'); j += 1
dox_rub = paras[j]['text']; assert dox_rub.startswith('Then the Great Doxology'), dox_rub; j += 1
doxology_troparion = node(paras[j]['text'], 'Sunday Matins, troparion after the Great Doxology')

matins = {
  'god_is_lord_rubric': gil_rubric + ' [troparion printed "(Twice)"] ' + gil_glory_rubric,
  'sessionals': sessionals,
  'polyeleos_rubric': {'ref': 'shared.polyeleos'},
  'evlogitaria_rubric': {'ref': 'shared.evlogitaria'},
  'hypakoe': hypakoe,
  'anabathmoi': anabathmoi,
  'prokeimenon': {'tone': 5, 'text': m_prok, **({'verse': m_prok_verse} if m_prok_verse else {})},
  'canon': {'title': canon_title_print.rstrip('.:'), 'heading_rubric': 'After which: “O God, save Thy people ...,” Then the Canons: ' + canon_title_print,
            'odes': {str(k): v for k, v in odes_a.items()}},
  'exapostilarion_rubric': exap_rubric,
  'praises': {'rubric': pr_rubric, 'stichera': pr_stichera,
              'verses': {'ref': 'shared.praises_verse_ladder'},
              'gloria_rubric': gloria_rub + ' ' + eothinon_note,
              'theotokion': pr_theotokion},
  'doxology_troparion': doxology_troparion,
}

# ═══ SUNDAY LITURGY (§4.9) ════════════════════════════════════════════════════
j = lit_i + 1
assert paras[j]['text'] in ('Typika and Beatitudes.', 'Typica and Beatitudes'), paras[j]['text']
if paras[j]['text'] == 'Typica and Beatitudes':
    findings.append("Liturgy heading prints 'Typica and Beatitudes' — 'Typica' spelling, no period (tone 3: 'Typika and Beatitudes.') — per-print heading fact")
beat_rubric = paras[j]['text']; j += 1
while paras[j]['kind'] == 'heading':
    beat_rubric += ' ' + paras[j]['text']; j += 1
beat = []
while not paras[j]['text'].startswith('Theotokion:'):
    beat.append(node(paras[j]['text'], f'Sunday Liturgy, Beatitude troparion {len(beat)+1}')); j += 1
gloria = beat.pop()
gloria['src']['locus'] = 'Sunday Liturgy, Beatitudes Gloria (Triadicon — final pre-Theotokion item)'
findings.append(f'Beatitude troparia: {len(beat)} + Gloria + Theotokion (tone 2: 6 + Gloria + Theotokion)')
assert paras[j]['text'].startswith('Theotokion:')
beat_theo = node(re.sub(r'^Theotokion: ', '', paras[j]['text']), 'Sunday Liturgy, Beatitudes Theotokion', sourceLabel='Theotokion'); j += 1
j = find('The Prokeimenon, in Tone V:', start=lit_i)
l_prok = node(re.sub(r'^The Prokeimenon, in Tone V: ', '', paras[j]['text']), 'Sunday Liturgy prokeimenon'); j += 1
assert paras[j]['text'].startswith(('Verse:', 'The Verse:'))
l_prok_verse = node(strip_verse(paras[j]['text']), 'Sunday Liturgy prokeimenon verse'); j += 1
assert paras[j]['text'].startswith('Alleluia, in Tone V:')
l_all = node(re.sub(r'^Alleluia, in Tone V: ', '', paras[j]['text']), 'Sunday Liturgy Alleluia'); j += 1
assert paras[j]['text'].startswith(('Verse:', 'The Verse:'))
l_all_v = node(strip_verse(paras[j]['text']), 'Sunday Liturgy Alleluia verse 2')

liturgy = {
  'beatitudes': {'rubric': beat_rubric, 'troparia': beat, 'gloria': gloria, 'theotokion': beat_theo},
  'prokeimenon': {'tone': 5, 'text': l_prok, 'verse': l_prok_verse},
  'alleluia': {'tone': 5, 'verses': [l_all, l_all_v]},
}
assert l_prok['text'] != m_prok['text'], 'V1 conflation trap (§8): matins and liturgy prokeimena must differ'

# ═══ in-file irmos recurrences (new pairs, byte-verified) ═════════════════════
new_pairs = []
for o in [1,3,4,5,6,7,8,9]:
    a = noc_odes[o]['irmos']['text']; b = odes_a[o]['irmos']['text']
    if a == b:
        new_pairs.append((str(o), 'identical'))
    else:
        new_pairs.append((str(o), 'variant'))

OUT = {
  'tone': 5,
  '_encoded': ['core', 'little_vespers', 'great_vespers', 'nocturns', 'matins', 'liturgy'],
  'troparion': troparion, 'dismissal_theotokion': dismissal_theotokion,
  'kontakion': kontakion, 'ikos': ikos,
  'little_vespers': little_vespers,
  'great_vespers': great_vespers,
  'nocturns': nocturns,
  'matins': matins,
  'liturgy': liturgy,
}

header = '''// src/data/octoechos_v2/tone5.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — Tone 5, DIFFERENTIAL scan (spec §11: templates assumed after
// the tone-3 verification, texts and per-tone facts captured fresh from the
// tone-5 chapters). THIS STEP: core §4.1 + Little Vespers + Great Vespers +
// Nocturns + Sunday Matins + Sunday Liturgy from 5-1.pdf (text layer CLEAN,
// scan July 8 2026); weekday sections merge in next.
//
// GENERATED from the raw pdftotext -layout text by paragraph-grammar walking
// (adapted tone-4 generators, July 8 2026) — nothing hand-retyped. Canonical
// §4.1 fields verified across ALL their print sites at generation. Psalm-verse
// fields whose print site is already encoded in shared.js are stored as {ref}
// — one print site, one encoding. Dynamically loaded only (§2.1).
// ─────────────────────────────────────────────────────────────────────────────

export default '''
open('/tmp/oh/src/data/octoechos_v2/tone5.js', 'w').write(header + json.dumps(OUT, ensure_ascii=False, indent=2) + ';\n')
n_nodes = json.dumps(OUT).count('"src"')
print(f'tone5.js written — {n_nodes} text nodes')
import pickle
pickle.dump(CAPTURED, open('/tmp/gen5/captured_t5_sun.pkl','wb'))
print('captured for §5 comparison:', len(CAPTURED))
print('\nNocturns↔Matins irmos comparison (per ode):')
for o, rel in new_pairs: print(f'  Ode {o}: {rel}')
for f in findings: print('FINDING:', f)
