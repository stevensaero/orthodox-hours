# 12-15.pdf — COMMEMORATION OF THE HOLY HIEROMARTYR ELEUTHERIUS (12 pages). The title
# names him alone; the service is for TWO saints, the hieromartyr and "the venerable
# one", Paul (of Mount Latros, by the stichera): ONE entry, items tagged with `saint`.
# Two canons, interleaved in print, stored whole. Boundaries read off the extracted
# page, 16 Nov 2026.
from daily_lib import Src, same

EL, PA = 'Eleutherius', 'Paul of Latros'

def build():
    s = Src('12-15')
    t, r = s.t, s.r
    s.mark(4, 63, 418)
    # The ODE VI heading is printed doubled: "OODDEE VVII".
    assert s.raw(246) == 'OODDEE VVII', s.raw(246)
    s.mark(65, 100, 171, 210, 246, 294, 330, 370)
    el_labels = [101, 172, 211, 247, 295, 331, 371]
    pa_labels = [117, 191, 227, 262, 313, 348, 388]
    for n in el_labels:
        assert s.raw(n) == 'Canon of the holy hieromartyr', (n, s.raw(n))
    for n in pa_labels:
        assert s.raw(n) == 'Canon of the venerable one', (n, s.raw(n))
    s.mark(*el_labels, *pa_labels)

    assert same(t(52, 56, 'a'), t(420, 424, 'b')), 'Eleutherius troparion sites diverge'
    assert same(t(58, 60, 'a'), t(426, 428, 'b')), 'Paul troparion sites diverge'
    assert same(t(284, 287, 'a'), t(430, 433, 'b')), 'Eleutherius kontakion sites diverge'
    assert same(t(138, 141, 'a'), t(435, 438, 'b')), 'Paul kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion', 'troparia', 'troparion_closer_rubric'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [11, 15, 20], 'LIC', sm=6, label='plain', first={'tone': 4}, saint=EL) + [
            t(23, 27, 'LIC 4', sl=21, sm=22, label='plain', saint=PA),
            t(28, 32, 'LIC 5', sm=22, label='plain', saint=PA),
            t(33, 37, 'LIC 6', sm=22, label='plain', saint=PA),
        ],
        # "in the same melody": the melody, and so the tone, of the stichera before it (Tone II).
        'lic_closer': t(40, 44, 'LIC Glory/Both now Theotokion', sl=39, type='theotokion', tone=2),
        'lic_stavrotheotokion': t(45, 50, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        'troparia': [
            t(52, 56, 'Troparion of the holy hieromartyr', sl=51, label='plain', saint=EL),
            t(58, 60, 'Troparion of the venerable one', sl=57, label='glory', saint=PA),
        ],
        'troparion_closer_rubric': r(61, 61, 'Both now, Theotokion or Stavrotheotokion'),
    }

    # "Exapostilarion from the Oktoechos; Glory ...," / "Exapostilarion of the venerable
    # one:" is one label on two lines.
    s.mark(404, 405)
    matins = {
        'order': ['canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion_glory', 'exapostilarion_closer'],
        'canon_rubric': r(64, 64, 'Canon rubric'),
        'canons': [
            {'title': s.raw(66, 67), 'composer': 'Joseph', 'tone': 1,
             'acrostic': 'Show me to be free of the passions, O all-blessed one',
             'odes': {
                 1: s.ode(1, (68, 70), [73, 76, 79, 82]),
                 3: s.ode(3, (102, 104), [107, 110, 113, 116]),
                 4: s.ode(4, (173, 176), [180, 183, 186, 190]),
                 5: s.ode(5, (212, 214), [217, 220, 223, 226]),
                 6: s.ode(6, (248, 250), [252, 255, 257, 261]),
                 7: s.ode(7, (296, 299), [303, 306, 309, 312]),
                 8: s.ode(8, (332, 334), [337, 341, 344, 347]),
                 9: s.ode(9, (372, 374), [377, 381, 384, 387]),
             }},
            # Its irmoi are those of the Nativity ("Christ is born").
            {'title': s.raw(83), 'tone': 1,
             'odes': {
                 1: s.ode(1, (84, 86), [89, 92, 95, 98]),
                 3: s.ode(3, (118, 121), [124, 127, 130, 134]),
                 4: s.ode(4, (192, 196), [199, 202, 205, 209]),
                 5: s.ode(5, (228, 231), [235, 238, 241, 245]),
                 6: s.ode(6, (263, 266), [269, 273, 277, 281]),
                 7: s.ode(7, (314, 316), [319, 322, 325, 329]),
                 8: s.ode(8, (349, 353), [357, 361, 365, 369]),
                 9: s.ode(9, (389, 391), [394, 397, 400, 403]),
             }},
        ],
        # After Ode III the kontakion of the venerable one (no ikos), then the sessional
        # hymns; after Ode VI the kontakion and ikos of the hieromartyr.
        'kontakia_ode3': [
            t(138, 141, 'Kontakion of the venerable one (after Ode III)', sl=136, sm=137, label='plain', saint=PA),
        ],
        'sessional_ode3': [
            t(144, 147, 'Ode III sessional (Eleutherius)', sl=142, sm=143, label='plain', saint=EL),
            t(150, 155, 'Ode III sessional (Paul)', sl=148, sm=149, label='glory', saint=PA),
            t(157, 163, 'Ode III sessional Theotokion', sl=156, type='theotokion', label=['both_now', 'theotokion']),
            t(164, 170, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'kontakia_ode6': [
            t(284, 287, 'Kontakion of the holy hieromartyr (after Ode VI)', sl=282, sm=283, label='plain', saint=EL),
            t(288, 293, 'Ikos of the holy hieromartyr', pre='Ikos: ', label='plain', saint=EL),
        ],
        'exapostilarion_glory': t(407, 411, 'Exapostilarion of the venerable one, at Glory', sm=406,
                                  sourceLabel=s.raw(404, 405).rstrip(':'), saint=PA),
        'exapostilarion_closer': t(413, 416, 'Exapostilarion Theotokion', sl=412, type='theotokion'),
    }
    s.mark(66, 67, 83)

    liturgy = {
        'order': ['troparia', 'kontakia'],
        'troparia': [
            t(420, 424, 'Troparion of the holy hieromartyr at Liturgy', sl=419, label='plain', saint=EL),
            t(426, 428, 'Troparion of the venerable one at Liturgy', sl=425, label='plain', saint=PA),
        ],
        'kontakia': [
            t(430, 433, 'Kontakion of the holy hieromartyr at Liturgy', sl=429, label='plain', saint=EL),
            t(435, 438, 'Kontakion of the venerable one at Liturgy', sl=434, label='plain', saint=PA),
        ],
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints. The title names the
        # hieromartyr alone; the venerable one is Paul, "pride of Mount Latros" (p1).
        'name': 'the holy Hieromartyr Eleutherius and our venerable father Paul of Latros',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2B',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ONE printed service for two saints: one entry, items tagged with `saint`. THE TITLE NAMES ST. '
                 'ELEUTHERIUS ALONE; the service gives three stichera, a troparion, a kontakion, a sessional hymn, a '
                 'canon and an exapostilarion to "the venerable one", whom the hymns call Paul and "pride of Mount '
                 'Latros": Paul of Latros (an identification from the text; his name stands in no heading). Rank by '
                 'the encoding_rule_v2.md 1.1 waterfall, step 6: six stichera at Lord I have cried split 3 + 3 '
                 'between two saints, no Polyeleos, no Great Doxology; ODS vol. III has no fixed 12-15 entry. Fekula '
                 '2B (a double service). No Glory at Lord I have cried and no aposticha rubric. "One canon from the '
                 'Oktoechos, and two canons of the saints": the hieromartyr\'s by Joseph, the venerable one\'s on the '
                 'irmoi of the Nativity. The kontakion of the venerable one stands after Ode III with no ikos; the '
                 'kontakion and ikos of the hieromartyr after Ode VI. At Liturgy the two troparia and two kontakia '
                 'are printed, the hieromartyr\'s first; no readings. The ODE VI heading is printed doubled.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
