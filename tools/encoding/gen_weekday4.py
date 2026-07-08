# tone2 weekday generation (§11 step 5): vespers_weekday (sun–fri), compline
# (sat–fri), matins_weekday (mon–sat), liturgy_weekday (mon–sat) from the
# 2-1…2-7 -layout text layers. Merges into the existing tone3.js (step-4
# sections untouched — regenerated JSON preserved via json load of the
# exported object is impossible; instead we import the step-4 generator's
# output by reading the JSON payload of tone3.js).
import json, re, sys
sys.path.insert(0, '/tmp/gen4')
from wk_lib import tokenize, make_node, ode_of, label_split, is_incipit, norm, RUBRIC_O_COUNT

_HG = str.maketrans({'\u041e':'O','\u041c':'M','\u043e':'o','\u0421':'C','\u0430':'a'})
def T(x):
    # homoglyph-normalized COPY for structural matching only (4-4 prints 'Саnon'
    # with Cyrillic С+а — §9.10 scan); stored nodes keep raw bytes + per-node log
    return x.translate(_HG)


# Spec. Mel. label matcher — EXACT attested tone-4 variants (sic register):
#   'Spec. Mel.: “X ...”:' (standard) | 'Spec, Mel.: …' (4-4) |
#   'Spec. Mel: …' (4-1, Nocturns) | 'Spec. Mel.: “X... “:' (4-6, curly-left close)
SPECMEL_RE = re.compile(r'^Spec[.,] Mel\.?: \u201c(.+?)( ?\.\.\.)? ?[\u201d\u201c] ?:$')
def specmel(t):
    m = SPECMEL_RE.match(t)
    return m.group(1) if m else None

def collect_rubric(paras, i):
    t = paras[i]['text']; i += 1
    while i < len(paras) and paras[i]['kind'] == 'heading' and not ode_of(paras[i]['text']) and not re.match(r'^(Glory|Both now|Spec[.,] Mel\.?:)', paras[i]['text']):
        t += ' ' + paras[i]['text']; i += 1
    return norm(re.sub(r'\s+', ' ', t)), i


FILES = [
  {'f': '4-2', 'eve': 'sun', 'night': 'sun', 'morn': 'mon'},
  {'f': '4-3', 'eve': 'mon', 'night': 'mon', 'morn': 'tue'},
  {'f': '4-4', 'eve': 'tue', 'night': 'tue', 'morn': 'wed'},
  {'f': '4-5', 'eve': 'wed', 'night': 'wed', 'morn': 'thu'},
  {'f': '4-6', 'eve': 'thu', 'night': 'thu', 'morn': 'fri'},
  {'f': '4-7', 'eve': 'fri', 'night': 'fri', 'morn': 'sat'},
]
# §5 verification results (verify_shared_t3.py, July 7 2026): items whose
# tone-3 print DIVERGES from the shared (tone-2) bytes are stored VERBATIM
# per-tone; matching items ref shared. Byte-verified this session.
DIVERGENT_SHARED = {}  # tone-4 §5 results land via verify_shared_t4/postpass_t4
DAYN = {'sun':'Sunday','mon':'Monday','tue':'Tuesday','wed':'Wednesday','thu':'Thursday','fri':'Friday','sat':'Saturday'}

vespers_weekday, compline, matins_weekday, liturgy_weekday = {}, {}, {}, {}
findings = []
findings.append("4-2 Monday Matins sessional set 3 closer heading prints 'Glory ..., Both now ..,' (two-dot ellipsis — sic register); all Glory/Both-now matchers accept the exact variant")
CAPTURED_WK = []

def parse_canon_meta(head):
    out = {}
    m = re.search(r'acrostic whereof is:? [“‘]+(.+?),?[”’]+ (?:the composition of |of )(\w+)', head)
    if m:
        out['acrostic'], out['composer'] = m.group(1), m.group(2); return out
    m = re.search(r'acrostic whereof is:? [“‘]+(.+?),?[”’]+', head)
    if m: out['acrostic'] = m.group(1)
    m = re.search(r'(?:the composition of |composition of )(\w+)', head)
    if m: out['composer'] = m.group(1)
    return out

def hfind(paras, frag, start=0, kind=None):
    frag_d = frag.replace(' ', '')
    for i in range(start, len(paras)):
        hay = paras[i]['text']
        if (frag in hay or frag_d in hay.replace(' ', '')) and (kind is None or paras[i]['kind'] == kind):
            return i
    raise AssertionError(f'{frag!r} not found')


def closer_node(node, paras, i, locus, heading):
    # heading gives the printed Glory/Both-now label; an optional Spec. Mel.
    # heading may follow; the closer para itself may carry an inline type
    # prefix ("Stavrotheotokion: …") — stripped into sourceLabel.
    sm = None
    if specmel(paras[i]['text']) is not None:
        sm = specmel(paras[i]['text']); i += 1
    t = paras[i]['text']; i += 1
    m = re.match(r'^(Stavrotheotokion|Theotokion|Trinitarion): ', t)
    printed = None
    if m:
        printed = m.group(1); t = t[m.end():]
    ct = (printed.lower() if printed else closer_of(heading))
    if 'Dogmatic' in heading: ct = 'dogmatic_theotokion'
    return node(t, locus, type=ct, spec_mel=sm, sourceLabel=printed), i

def closer_of(heading):
    if 'Stavrotheotokion' in heading: return 'stavrotheotokion'
    if 'Dogmatic' in heading: return 'dogmatic_theotokion'
    return 'theotokion'

def parse_shape_b_canon(paras, node, i, end_i, where, canon1_odes=None):
    # Shape B odes for ONE canon within [i, end_i); returns odes dict
    odes, ode, items, irmos = {}, None, [], None
    def flush():
        if ode is not None:
            odes[str(ode)] = {'irmos': irmos, 'items': items}
    j = i
    while j < end_i:
        t = paras[j]['text']
        o = ode_of(t)
        if paras[j]['kind'] == 'heading' and o:
            flush(); ode = o; items = []; irmos = None; j += 1; continue
        if t.startswith('Irmos:'):
            body = re.sub(r'^Irmos: ', '', t)
            if is_incipit(body) and canon1_odes and str(ode) in canon1_odes:
                irmos = node(body, f'{where}, Ode {ode} irmos (incipit device, §2.7)',
                             incipit_ref=f'{canon1_odes[str(ode)]}')
            else:
                irmos = node(body, f'{where}, Ode {ode} irmos')
            j += 1; continue
        if ode is not None and paras[j]['kind'] == 'para':
            lab, text, printed = label_split(t)
            rep = None
            if text.endswith('(Twice)'): rep, text = 2, text[:-len('(Twice)')].strip()
            items.append(node(text, f'{where}, Ode {ode}, item {len(items)+1}', label=lab, repeat=rep,
                              sourceLabel=printed if isinstance(lab, list) else None))
        j += 1
    flush()
    return odes

for cfg in FILES:
    f = cfg['f']; fname = f + '.pdf'
    paras = tokenize(f'/tmp/scan4/{f}L.txt')
    node = make_node(fname)

    # ── VESPERS ──────────────────────────────────────────────────────────────
    eve = cfg['eve']
    vi = hfind(paras, 'AT VESPERS')
    comp_i = hfind(paras, 'COMPLINE')
    seg_end = comp_i
    i = vi + 1
    rubric, i = collect_rubric(paras, i)
    spec_mel = None
    if specmel(paras[i]['text']) is not None:
        rubric = norm(rubric + ' ' + paras[i]['text'])
        spec_mel = norm(specmel(paras[i]['text'])); i += 1
    if eve != 'fri':
        oct_items, oct_verses = [], []
        for n3 in range(3):
            assert paras[i]['text'].startswith('Verse:'), (f, paras[i]['text'])
            oct_verses.append(node(paras[i]['text'], f'{DAYN[eve]}-evening Vespers, LIC ladder verse {n3+1}', strip_label=r'^Verse: ')); i += 1
            oct_items.append(node(paras[i]['text'], f'{DAYN[eve]}-evening Vespers, LIC Octoechos sticheron {n3+1}', label='plain', spec_mel=spec_mel)); i += 1
        men_rubric, i = collect_rubric(paras, i)
        assert 'if there is no Menaion' in men_rubric, (f, men_rubric)
        fb_sm = None
        if specmel(paras[i]['text']) is not None:
            # tone-4 print fact: the fallback tier carries its own Spec. Mel. label
            men_rubric = norm(men_rubric + ' ' + paras[i]['text'])
            fb_sm = norm(specmel(paras[i]['text'])); i += 1
        fb_items, fb_verses = [], []
        for n3 in range(3):
            assert paras[i]['text'].startswith('Verse:'), (f, paras[i]['text'])
            fb_verses.append(node(paras[i]['text'], f'{DAYN[eve]}-evening Vespers, ladder tail verse {n3+1}', strip_label=r'^Verse: ')); i += 1
            fb_items.append(node(paras[i]['text'], f'{DAYN[eve]}-evening Vespers, Menaion-fallback sticheron {n3+1}', label='plain', spec_mel=fb_sm)); i += 1
        assert paras[i]['text'].startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')), (f, paras[i]['text'])
        head_l = paras[i]['text']; i += 1
        lic_theo, i = closer_node(node, paras, i, f'{DAYN[eve]}-evening Vespers, LIC Glory/Both-now closer', head_l)
        lic = {'octoechos': oct_items, 'octoechos_verses': oct_verses,
               'menaion_rubric': men_rubric, 'menaion_fallback': fb_items, 'menaion_verses': fb_verses}
    else:
        # Friday evening (2-7): two sets, incipit repeat, NO fallback tier
        oct_items, oct_verses = [], []
        set_theme = rubric
        n_seen = 0
        while True:
            t = paras[i]['text']
            if paras[i]['kind'] == 'heading' and not t.startswith(('Glory', 'Verse')) and n_seen:
                if 'Glory' in t or 'Dogmatic' in t: break
                sub, i = collect_rubric(paras, i)  # set-2 heading ("of the martyrs")
                set_theme = sub; continue
            if t.startswith('Verse:'):
                oct_verses.append(node(t, f'Friday-evening Vespers, LIC ladder verse {len(oct_verses)+1}', strip_label=r'^Verse: ')); i += 1; continue
            if t.startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')) or 'Dogmatic' in t: break
            body = t
            _rep_label = None
            if body.startswith('Repeat: '):
                # 4-7 print fact: the incipit device carries an explicit printed
                # "Repeat:" label — split like other printed labels (§4.11)
                _rep_label, body = 'Repeat:', body[len('Repeat: '):]
            if is_incipit(body) and n_seen:
                oct_items.append(node(body, f'Friday-evening Vespers, LIC sticheron {n_seen+1} (incipit repeat of sticheron 1, §2.7' + (', printed with an explicit "Repeat:" label' if _rep_label else '') + ')',
                                      label='plain', incipit_ref='tone4.vespers_weekday.fri.lic.octoechos[0]',
                                      sourceLabel=_rep_label, provenance_note=set_theme))
            else:
                oct_items.append(node(body, f'Friday-evening Vespers, LIC sticheron {n_seen+1}', label='plain', provenance_note=set_theme))
            n_seen += 1; i += 1
        head = paras[i]['text']
        ct = closer_of(head) if 'Dogmatic' not in head else 'dogmatic_theotokion'
        src_label = head; i += 1
        lic_theo = node(paras[i]['text'], 'Friday-evening Vespers, LIC Glory/Both-now closer — the dogmatikon printed IN FULL as its own site (§9.2)',
                        type='dogmatic_theotokion', sourceLabel=src_label); i += 1
        lic = {'octoechos': oct_items, 'octoechos_verses': oct_verses}
    # prokeimenon rubric (ref to shared)
    pr_rub, i = collect_rubric(paras, i)
    assert 'Prokeimenon' in pr_rub, (f, pr_rub)
    assert paras[i]['text'].startswith('Prokeimenon:'); i += 1
    assert paras[i]['text'].startswith('Verse:'); i += 1
    vouch, i = collect_rubric(paras, i)
    ap_rub = ''
    if 'Aposticha' not in vouch:
        ap_rub, i = collect_rubric(paras, i)
    apo_items = []
    first = True
    while True:
        t = paras[i]['text']
        if t.startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')): break
        if t.startswith(('Verse:', 'The Verse:')): CAPTURED_WK.append((f, eve, 'vespers_apost_verse', t)); i += 1; continue
        lab, text, printed = label_split(t)
        apo_items.append(node(text, f'{DAYN[eve]}-evening Vespers, aposticha item {len(apo_items)+1}', label=lab))
        i += 1
    head_a = paras[i]['text']; i += 1
    apo_theo, i = closer_node(node, paras, i, f'{DAYN[eve]}-evening Vespers, aposticha Glory/Both-now closer', head_a)
    closing, i = collect_rubric(paras, i)
    vset = 'departed_vespers' if eve == 'fri' else 'standard_vespers'
    vespers_weekday[eve] = {
      'rubric': rubric, 'lic': lic, 'lic_theotokion': lic_theo,
      'prokeimenon': {'ref': f'shared.daily_vespers_prokeimena.{eve}', 'rubric': pr_rub},
      'aposticha': {'rubric': ap_rub or vouch, 'items': apo_items,
                    'verses': {'ref': f'shared.weekday_aposticha_verses.sets.{vset}'}},
      'aposticha_theotokion': apo_theo,
      'closing_rubric': closing,
    }

    # ── COMPLINE ─────────────────────────────────────────────────────────────
    night = cfg['night']
    morn_i = hfind(paras, 'AT MATINS')
    ci = comp_i + 1
    canon_head, ci = collect_rubric(paras, ci)
    after6_i = hfind(paras, 'Lord, have mercy, (Thrice)', start=ci)
    codes = parse_shape_b_canon(paras, node, ci, after6_i, f'{DAYN[night]}-night Compline canon')
    a6_rub, j = collect_rubric(paras, after6_i)
    while paras[j]['kind'] == 'heading' and specmel(paras[j]['text']) is None:
        a6_rub += ' ' + paras[j]['text']; j += 1
    sm = None
    if specmel(paras[j]['text']) is not None:
        sm = specmel(paras[j]['text']); j += 1
    sess = node(paras[j]['text'], f'{DAYN[night]}-night Compline, sessional after Ode VI', spec_mel=sm); j += 1
    # remaining odes VII-IX end at the closing rubric ('Then, "It is truly
    # meet"' — 2-6's Thursday night prints it WITHOUT the final "Dismissal.",
    # §9.12); everything from there to the next day-heading is the rubric.
    close_i = j
    while close_i < morn_i and 'It is truly meet' not in paras[close_i]['text']:
        close_i += 1
    if close_i == morn_i:   # fallback: last para before the day heading
        close_i = morn_i - 1
    codes2 = parse_shape_b_canon(paras, node, j, close_i, f'{DAYN[night]}-night Compline canon')
    codes.update(codes2)
    parts = []
    for k in range(close_i, morn_i):
        if paras[k]['kind'] == 'heading' and ('MORNING' in paras[k]['text'] or 'NIGHT' in paras[k]['text'] or 'TONE' in paras[k]['text']):
            continue
        parts.append(paras[k]['text'])
    closing_c = re.sub(r'\s+', ' ', ' '.join(parts)).strip()
    assert sorted(map(int, codes)) == [1,3,4,5,6,7,8,9], (f, sorted(codes))
    compline[night] = {
      'canon': {'title': norm(canon_head.rstrip(':')), 'heading_rubric': norm(canon_head),
                'odes': codes},
      'after_ode6': {'rubric': a6_rub, 'sessional': sess},
      'closing_rubric': closing_c,
    }

    # ── MATINS ───────────────────────────────────────────────────────────────
    morn = cfg['morn']
    lit_i = hfind(paras, 'LITURGY', kind='heading')
    if morn != 'sat':
        i = morn_i + 1
        sets = []
        set_rubric, i = collect_rubric(paras, i)
        while len(sets) < 3:
            sm2 = None
            m2 = re.search(r'Spec\. Mel\.: “(.+?)”', set_rubric)
            if m2: sm2 = m2.group(1)
            items, verses, closer = [], [], None
            while True:
                t = paras[i]['text']
                if t.startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')):
                    i += 1
                    closer, i = closer_node(node, paras, i, f'{DAYN[morn]} Matins, sessional set closer', t)
                    closer['src']['locus'] = f'{DAYN[morn]} Matins, sessional set {len(sets)+1} closer'
                    break
                if t.startswith('Verse:'):
                    verses.append(node(t, f'{DAYN[morn]} Matins, sessional set {len(sets)+1} verse {len(verses)+1}', strip_label=r'^Verse: ')); i += 1; continue
                if paras[i]['kind'] == 'heading':
                    if specmel(paras[i]['text']) is not None:
                        sm2 = specmel(paras[i]['text']); i += 1; continue
                    i += 1; continue
                lab, text, printed = label_split(t)
                inc = is_incipit(text) and len(items) > 0
                kw = {}
                if inc:
                    kw['incipit_ref'] = f'tone4.matins_weekday.{morn}.sessionals[{len(sets)}].items[0]'
                items.append(node(text, f'{DAYN[morn]} Matins, sessional set {len(sets)+1}, item {len(items)+1}' + (' (incipit repeat, §2.7)' if inc else ''), label=lab, **kw))
                i += 1
            sets.append({'rubric': set_rubric, 'spec_mel': sm2, 'items': items, 'verses': verses, 'closer': closer})
            if len(sets) < 3:
                set_rubric, i = collect_rubric(paras, i)
        # canons
        ode1_i = i
        while not (paras[ode1_i]['kind'] == 'heading' and ode_of(paras[ode1_i]['text'])): ode1_i += 1
        # canon-1 heading prints BEFORE the ODE I heading in some files (2-3
        # pattern) and after it in others (2-2) — search both neighborhoods
        c1_head = None
        for k9 in list(range(ode1_i + 1, ode1_i + 3)) + list(range(ode1_i - 1, max(0, ode1_i - 4), -1)):
            if T(paras[k9]['text']).startswith(('Canon of', 'Canon to')):
                c1_head = paras[k9]['text']; break
        assert c1_head, (f, 'canon-1 heading not found near ODE I')
        another_i = hfind(paras, 'Another canon', start=ode1_i)
        c2_head = paras[another_i]['text']
        post_i = hfind(paras, 'It is truly meet', start=another_i)
        # walk odes: canon1 segments = [canon-1 re-cite → canon-2 re-cite); build split lists
        # collect ode-segmented items for both canons; canon markers appear in
        # PRINT ORDER within each ode (canon 1 first, canon 2 second)
        c1_odes, c2_odes = {}, {}
        ode = None; target = None; markers = 0
        mag_rub = None
        k2 = ode1_i
        while k2 < post_i:
            t = paras[k2]['text']
            if t.startswith('We then chant the hymn of the Theotokos'):
                mag_rub, k2 = collect_rubric(paras, k2); continue
            o = ode_of(t)
            if paras[k2]['kind'] == 'heading' and o:
                ode = o; target = 1; markers = 0; k2 += 1
                continue
            if t.startswith('Another canon'):
                target = 2; k2 += 1; continue
            if T(t).startswith(('Canon of', 'Canon to')):
                markers += 1; target = 1 if markers == 1 else 2
                k2 += 1; continue
            store = c1_odes if target == 1 else c2_odes
            okey = str(ode)
            store.setdefault(okey, {'irmos': None, 'items': []})
            if t.startswith('Irmos:'):
                body = re.sub(r'^Irmos: ', '', t)
                if is_incipit(body) and target == 2:
                    store[okey]['irmos'] = node(body, f'{DAYN[morn]} Matins, canon 2, Ode {ode} irmos (incipit device, §2.7)',
                        incipit_ref=f'tone4.matins_weekday.{morn}.canons[0].odes.{ode}.irmos')
                else:
                    store[okey]['irmos'] = node(body, f'{DAYN[morn]} Matins, canon {target}, Ode {ode} irmos')
            elif paras[k2]['kind'] == 'para':
                lab, text, printed = label_split(t)
                rep = None
                if text.endswith('(Twice)'): rep, text = 2, text[:-len('(Twice)')].strip()
                store[okey]['items'].append(node(text, f'{DAYN[morn]} Matins, canon {target}, Ode {ode}, item {len(store[okey]["items"])+1}',
                    label=lab, repeat=rep, sourceLabel=printed if isinstance(lab, list) else None))
            k2 += 1
        post_rub, k4 = collect_rubric(paras, post_i)
        apo_i = hfind(paras, 'On the Aposticha', start=k4-1)
        apo_rub, k5 = collect_rubric(paras, apo_i)
        items3 = []
        i = k5
        while True:
            t = paras[i]['text']
            if t.startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')): break
            if t.startswith(('Verse:', 'The Verse:')): CAPTURED_WK.append((f, morn, 'matins_apost_verse', t)); i += 1; continue
            lab, text, printed = label_split(t)
            items3.append(node(text, f'{DAYN[morn]} Matins, aposticha item {len(items3)+1}', label=lab))
            i += 1
        head_m = paras[i]['text']; i += 1
        apo_theo, i = closer_node(node, paras, i, f'{DAYN[morn]} Matins, aposticha Glory/Both-now closer', head_m)
        apo_theo['src']['locus'] = f'{DAYN[morn]} Matins, aposticha Glory/Both-now closer'
        mclosing, i = collect_rubric(paras, i)
        mset = 'thursday_matins_as_printed' if morn == 'thu' else 'standard_matins'
        c1 = {'title': norm(c1_head.rstrip(':')), 'heading_rubric': norm(c1_head), 'odes': c1_odes}
        for k3v, v3 in parse_canon_meta(c1_head).items(): c1[k3v] = norm(v3)
        c2 = {'title': norm(c2_head.rstrip(':')), 'heading_rubric': norm(c2_head), 'odes': c2_odes}
        for k3v, v3 in parse_canon_meta(c2_head).items(): c2[k3v] = norm(v3)
        matins_weekday[morn] = {
          'sessionals': sets,
          'canons': [c1, c2],
          'magnificat_rubric': mag_rub,
          'post_canon_rubric': post_rub,
          'aposticha': {'rubric': apo_rub, 'items': items3,
                        'verses': {'ref': f'shared.weekday_aposticha_verses.sets.{mset}'}},
          'aposticha_theotokion': apo_theo,
          'closing_rubric': mclosing,
        }
        c1_odes = {k: v for k, v in c1_odes.items() if k != 'None' and (v['irmos'] or v['items'])}
        c2_odes = {k: v for k, v in c2_odes.items() if k != 'None' and (v['irmos'] or v['items'])}
        assert sorted(map(int, c1_odes)) == [1,3,4,5,6,7,8,9], (f, 'c1', sorted(c1_odes))
        assert sorted(map(int, c2_odes)) == [1,3,4,5,6,7,8,9], (f, 'c2', sorted(c2_odes))
    else:
        # ── SATURDAY MATINS — the §4.8a day-class ────────────────────────────
        i = morn_i + 1
        sets = []
        set_rubric, i = collect_rubric(paras, i)
        for sn in range(2):
            sm2, pend_sm = None, None
            m2 = re.search(r'Spec\. Mel\.: “(.+?)”', set_rubric)
            if m2: sm2 = m2.group(1)
            items, verses, closer = [], [], None
            while True:
                t = paras[i]['text']
                if t.startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')):
                    i += 1
                    closer, i = closer_node(node, paras, i, f'Saturday Matins, sessional set {sn+1} closer', t)
                    break
                if t.startswith('Verse:'):
                    verses.append(node(t, f'Saturday Matins, sessional set {sn+1} verse {len(verses)+1}', strip_label=r'^Verse: ')); i += 1; continue
                if specmel(t) is not None:
                    pend_sm = specmel(t); i += 1; continue
                lab, text, printed = label_split(t)
                tier_override = 1 if 'with boldness preached Christ. * We entreat' in text else None
                items.append(node(text, f'Saturday Matins, sessional set {sn+1}, item {len(items)+1}', tier=tier_override, label=lab, spec_mel=pend_sm))
                pend_sm = None; i += 1
            sets.append({'rubric': set_rubric, 'spec_mel': sm2, 'items': items, 'verses': verses, 'closer': closer})
            if sn == 0:
                set_rubric, i = collect_rubric(paras, i)
        pr_head = hfind(paras, 'On the Praises', start=i)
        # canons (de-interleave, canon-2 with per-item refrains + condition)
        c1_odes, c2_odes = {}, {}
        c1_head = None
        for k9 in range(i, i + 6):
            if T(paras[k9]['text']).startswith(('Canon of', 'Canon to')):
                c1_head = paras[k9]['text']; break
        assert c1_head, 'sat canon-1 heading not found'
        another_i = hfind(paras, 'Another canon', start=i)
        c2_head = paras[another_i]['text']
        ode = None; target = None; markers = 0; pending_refrain = None
        mag_rub, post_rub = None, None
        k2 = i
        while k2 < pr_head:
            t = paras[k2]['text']
            if t.startswith('We then chant the hymn of the Theotokos'):
                mag_rub, k2 = collect_rubric(paras, k2); continue
            if t.startswith('Then, “It is truly meet'):
                post_rub, k2 = collect_rubric(paras, k2); continue
            o = ode_of(t)
            if paras[k2]['kind'] == 'heading' and o:
                ode = o; target = 1; markers = 0; pending_refrain = None; k2 += 1; continue
            if t.startswith('Another canon'):
                target = 2; pending_refrain = None; k2 += 1; continue
            if T(t).startswith(('Canon of', 'Canon to')):
                markers += 1; target = 1 if markers == 1 else 2
                pending_refrain = None; k2 += 1; continue
            if t.startswith('Refrain: '):
                pending_refrain = re.sub(r'^Refrain: ', '', t); k2 += 1; continue
            store = c1_odes if target == 1 else c2_odes
            okey = str(ode)
            store.setdefault(okey, {'irmos': None, 'items': []})
            if t.startswith('Irmos:'):
                body = re.sub(r'^Irmos: ', '', t)
                store[okey]['irmos'] = node(body, f'Saturday Matins, canon {target}, Ode {ode} irmos')
            elif paras[k2]['kind'] == 'para':
                lab, text, printed = label_split(t)
                rep = None
                if text.endswith('(Twice)'): rep, text = 2, text[:-len('(Twice)')].strip()
                store[okey]['items'].append(node(text, f'Saturday Matins, canon {target}, Ode {ode}, item {len(store[okey]["items"])+1}',
                    label=lab, repeat=rep, refrain=pending_refrain, sourceLabel=printed if isinstance(lab, list) else None))
                pending_refrain = None
            k2 += 1
        c1_odes = {k: v for k, v in c1_odes.items() if k != 'None' and (v['irmos'] or v['items'])}
        c2_odes = {k: v for k, v in c2_odes.items() if k != 'None' and (v['irmos'] or v['items'])}
        assert sorted(map(int, c1_odes)) == [1,3,4,5,6,7,8,9], ('sat c1', sorted(c1_odes))
        assert sorted(map(int, c2_odes)) == [1,3,4,5,6,7,8,9], ('sat c2', sorted(c2_odes))
        c1 = {'title': norm(c1_head.rstrip(':')), 'heading_rubric': norm(c1_head), 'odes': c1_odes}
        for k3v, v3 in parse_canon_meta(c1_head).items(): c1[k3v] = norm(v3)
        c2 = {'title': norm(c2_head.rstrip(':')), 'heading_rubric': norm(c2_head), 'odes': c2_odes,
              'condition': 'which we chant when there is no Menaion'}
        for k3v, v3 in parse_canon_meta(c2_head).items():
            if k3v == 'acrostic': c2[k3v] = norm(v3)
        # praises
        pr_rubric, j = collect_rubric(paras, pr_head)
        pr_items, pr_verses = [], []
        pr_theo = None
        pend_glory = False
        while True:
            t = paras[j]['text']
            if t.startswith('Verse:'):
                pr_verses.append(node(t, f'Saturday Matins, Praises verse {len(pr_verses)+1}', strip_label=r'^Verse: ')); j += 1; continue
            if t.rstrip(',') == 'Glory ...' or t == 'Glory ...,':
                pend_glory = True; j += 1; continue
            if t.startswith('Glory ..., Both now'):
                j += 1
                lab2, text2, printed2 = label_split(paras[j]['text'])
                pr_theo = node(text2, 'Saturday Matins, Praises Glory/Both-now Theotokion',
                               type='theotokion', sourceLabel='Glory ..., Both now ..., Theotokion:'); j += 1
                break
            if t.startswith('Both now ...') and paras[j]['kind'] == 'heading':
                # 4-7 print fact: praises closer prints as SEPARATE sites — standalone
                # 'Glory ...,' heading (glory sticheron via pend_glory) then
                # 'Both now ..., Theotokion:' heading with its own text
                _bn = t; j += 1
                lab2, text2, printed2 = label_split(paras[j]['text'])
                pr_theo = node(text2, 'Saturday Matins, Praises Both-now Theotokion (separate print site from the Glory — per-print closer device)',
                               type='theotokion', sourceLabel=_bn); j += 1
                break
            if paras[j]['kind'] == 'heading': j += 1; continue
            lab, text, printed = label_split(t)
            if pend_glory:
                lab = ['glory'] + (lab if isinstance(lab, list) else [lab] if lab != 'plain' else [])
                printed = 'Glory ..., ' + (printed or '')
                pend_glory = False
            pr_items.append(node(text, f'Saturday Matins, Praises item {len(pr_items)+1}', label=lab,
                                 sourceLabel=printed.strip() if isinstance(lab, list) and printed else None))
            j += 1
        dox_i = hfind(paras, 'Small Doxology', start=j-1)
        dox_rub = paras[dox_i]['text']
        apo_i = hfind(paras, 'On the Aposticha, these Stichera of the departed', start=dox_i)
        apo_rub = paras[apo_i]['text']; k5 = apo_i + 1
        sm5 = None
        if specmel(paras[k5]['text']) is not None:
            sm5 = specmel(paras[k5]['text']); k5 += 1
        items3 = []
        i = k5
        while True:
            t = paras[i]['text']
            if t.startswith(('Glory ..., Both now ...', 'Glory ..., Both now ..,', 'Glory..., Both now ...')): break
            if t.startswith('Verse:'): i += 1; continue
            lab, text, printed = label_split(t)
            items3.append(node(text, f'Saturday Matins, aposticha of the departed, item {len(items3)+1}', label=lab, spec_mel=sm5 if not items3 else None))
            i += 1
        head_s = paras[i]['text']; i += 1
        apo_theo, i = closer_node(node, paras, i, 'Saturday Matins, aposticha Glory/Both-now closer', head_s)
        mclosing, i = collect_rubric(paras, i)
        matins_weekday['sat'] = {
          'sessionals': sets,
          'canons': [c1, c2],
          **({'magnificat_rubric': mag_rub} if mag_rub else {}),
          'post_canon_rubric': post_rub or dox_rub,
          'praises': {'rubric': pr_rubric, 'items': pr_items, 'verses': pr_verses, 'theotokion': pr_theo,
                      'doxology_rubric': dox_rub},
          'aposticha': {'rubric': apo_rub, 'items': items3,
                        'verses': {'ref': 'shared.weekday_aposticha_verses.sets.departed_matins_saturday'}},
          'aposticha_theotokion': apo_theo,
          'closing_rubric': mclosing,
        }

    # ── LITURGY ──────────────────────────────────────────────────────────────
    i = lit_i + 1
    b_rub, i = collect_rubric(paras, i)
    bitems = []
    while i < len(paras):
        t = paras[i]['text']
        if 'Prokeimenon' in t: break
        if paras[i]['kind'] == 'heading': i += 1; continue
        lab, text, printed = label_split(t)
        t_ov = 1 if 'In Thy kingdom have mercy* upon us' in text else None
        bitems.append(node(text, f'{DAYN[morn]} Liturgy, Beatitudes item {len(bitems)+1}', label=lab, tier=t_ov,
                           sourceLabel=printed if isinstance(lab, list) else None))
        i += 1
    liturgy_weekday[morn] = {
      'beatitudes': {'rubric': b_rub, 'items': bitems},
      'prokeimenon': {'ref': f'shared.daily_liturgy_propers.{morn}.prokeimenon'},
      'alleluia': {'ref': f'shared.daily_liturgy_propers.{morn}.alleluia'},
      'communion': {'ref': f'shared.daily_liturgy_propers.{morn}.communion'},
    }

# Saturday Compline from 2-1 (night-keyed table)
paras1 = tokenize('/tmp/scan4/4-1L.txt')
node1 = make_node('4-1.pdf')
sc_i = hfind(paras1, 'COMPLINE')
noc_i = hfind(paras1, 'AT NOCTURNS')
ci = sc_i + 1
frame = paras1[ci]['text']; ci += 1
canon_head, ci = collect_rubric(paras1, ci)
after6_i = hfind(paras1, 'Lord, have mercy, (Thrice)', start=ci)
codes = parse_shape_b_canon(paras1, node1, ci, after6_i, 'Saturday-night Compline canon')
a6_rub = paras1[after6_i]['text']
j = after6_i + 1
while paras1[j]['kind'] == 'heading':
    a6_rub += ' ' + paras1[j]['text']; j += 1
sess = node1(paras1[j]['text'], 'Saturday-night Compline, sessional after Ode VI'); j += 1
close_i = j
while close_i < noc_i and 'It is truly meet' not in paras1[close_i]['text']:
    close_i += 1
if close_i == noc_i: close_i = noc_i - 1
codes.update(parse_shape_b_canon(paras1, node1, j, close_i, 'Saturday-night Compline canon'))
closing_c = ' '.join(paras1[k]['text'] for k in range(close_i, noc_i)
                     if not (paras1[k]['kind'] == 'heading' and ('NOCTURNS' in paras1[k]['text'] or 'TONE' in paras1[k]['text'] or 'MORNING' in paras1[k]['text'])))
closing_c = re.sub(r'\s+', ' ', closing_c).strip()
assert sorted(map(int, codes)) == [1,3,4,5,6,7,8,9], sorted(codes)
compline['sat'] = {
  'frame_rubric': frame,
  'canon': {'title': norm(canon_head.rstrip(':')), 'heading_rubric': norm(canon_head), 'odes': codes},
  'after_ode6': {'rubric': norm(a6_rub), 'sessional': sess},
  'closing_rubric': norm(closing_c),
}

# merge into tone3.js
src = open('/tmp/oh/src/data/octoechos_v2/tone4.js').read()
payload = src[src.index('export default ') + len('export default '):].rstrip().rstrip(';')
tone4 = json.loads(payload)
tone4['vespers_weekday'] = vespers_weekday
tone4['compline'] = compline
tone4['matins_weekday'] = matins_weekday
tone4['liturgy_weekday'] = liturgy_weekday
claims = [c for c in tone4['_encoded'] if '.' not in c]
for eve in vespers_weekday: claims.append(f'vespers_weekday.{eve}')
for n in compline: claims.append(f'compline.{n}')
for d2 in matins_weekday: claims.append(f'matins_weekday.{d2}')
for d2 in liturgy_weekday: claims.append(f'liturgy_weekday.{d2}')
tone4['_encoded'] = claims
header = src[:src.index('export default ') + len('export default ')]
open('/tmp/oh/src/data/octoechos_v2/tone4.js', 'w').write(header + json.dumps(tone4, ensure_ascii=False, indent=2) + ';\n')
import pickle
pickle.dump(CAPTURED_WK, open('/tmp/gen4/captured_t4_wk.pkl','wb'))
print('merged; nodes now:', json.dumps(tone4).count('"src"'))
print('captured weekday verse prints:', len(CAPTURED_WK))
for f2 in findings: print('FINDING:', f2)
print('rubric-string О normalized (session count):', RUBRIC_O_COUNT['n'])
print('claims:', len(claims))
for f2 in findings: print('FINDING:', f2)
