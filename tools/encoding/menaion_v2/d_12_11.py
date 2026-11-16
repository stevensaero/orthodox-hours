# 12-11.pdf — COMMEMORATION OF OUR VENERABLE FATHER DANIEL THE STYLITE OF
# CONSTANTINOPLE (8 pages). Headed 'Alleluia, or "God is the Lord"': the page gives
# both forms. Boundaries read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-11')
    t, r = s.t, s.r
    s.mark(6, 63, 251)
    s.mark(67, 79, 111, 131, 151, 174, 191, 216)

    assert same(t(59, 61, 'tr1'), t(253, 255, 'tr2')), 'troparion sites diverge'
    s.mark(252)
    troparion = t(59, 61, 'Troparion of the venerable one', sl=58,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 1}, {'locus': 'p8 AT LITURGY', 'tone': 1}])
    assert same(t(166, 169, 'k1'), t(257, 260, 'k2')), 'kontakion sites diverge'
    s.mark(256)
    kontakion = t(166, 169, 'Kontakion of the venerable one', sl=164, sm=165,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 8}, {'locus': 'p8 AT LITURGY', 'tone': 8}])
    ikos = t(170, 173, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion', 'lic_glory_rubric', 'lic_glory',
                  'aposticha_rubric', 'troparion'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [12, 16, 21], 'LIC', sm=8, label='plain', first={'tone': 8}),
        'theotokos_stichera_rubric': r(22, 23, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(24, [28, 32, 37], 'Sticheron of the Theotokos', label='plain'),
        # "in the same melody": the melody, and so the tone, of the stichera (Tone VIII).
        'lic_closer': t(40, 44, 'LIC Glory/Both now Theotokion', sl=39, type='theotokion', tone=8),
        'lic_stavrotheotokion': t(45, 49, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        # The page prints the Alleluia form first; then, for a day with "God is the Lord":
        'lic_glory_rubric': r(50, 50, 'If God is the Lord is chanted at Matins'),
        'lic_glory': t(52, 56, 'LIC Glory (God is the Lord days)', sl=51, composer='the Studite'),
        'aposticha_rubric': r(57, 57, 'Aposticha rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion_glory', 'exapostilarion_closer', 'aposticha_rubric'],
        'canon_rubric': r(64, 66, 'Canon rubric'),
        'canons': [{
            'title': s.raw(64, 66),
            'composer': 'Joseph',
            'acrostic': 'With hymns I honor Daniel the Stylite',
            'tone': 8,
            'odes': {
                1: s.ode(1, (68, 69), [71, 73, 75, 78]),
                3: s.ode(3, (80, 82), [85, 88, 91, 94]),
                4: s.ode(4, (112, 115), [119, 123, 126, 130]),
                5: s.ode(5, (132, 135), [139, 143, 146, 150]),
                6: s.ode(6, (152, 154), [157, 160, 163]),
                7: s.ode(7, (175, 177), [181, 184, 187, 190]),
                8: s.ode(8, (192, 196), [200, 204, 209, 214]),
                9: s.ode(9, (217, 220), [224, 228, 232, 235, 239]),
            },
        }],
        'sessional_ode3': [
            t(97, 100, 'Ode III sessional', sl=95, sm=96, label='plain'),
            t(103, 106, 'Ode III sessional Theotokion', sl=102, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(107, 110, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        # "Exapostilarion from the Oktoechos, and Glory ...," then the saint's.
        'exapostilarion_glory': t(242, 244, 'Exapostilarion of the venerable one, at Glory', sl=240, sm=241),
        'exapostilarion_closer': t(246, 248, 'Exapostilarion Theotokion', sl=245, type='theotokion'),
        'aposticha_rubric': r(249, 249, 'Matins Aposticha rubric'),
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title lines.
        'name': 'our venerable father Daniel the Stylite',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'preface_rubric': r(5, 5, 'Alleluia, or God is the Lord'),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the venerable one at Lord I have cried, '
                 'no Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-11 entry (its Sunday of the '
                 'Forefathers entries are for the movable Sunday, 12-11B). Under the title the page prints "Alleluia, '
                 'or God is the Lord" and then gives BOTH forms at Lord I have cried: three stichera of the Theotokos, '
                 'a Theotokion and a Stavrotheotokion "if Alleluia be chanted", and "If God is the Lord is to be '
                 'chanted at Matins, then we chant" a Glory of the saint in Tone V, with no Both now printed after it. '
                 'Aposticha from the Oktoechos at Vespers and at Matins. One canon by Joseph (Ode VI has two troparia '
                 'and a Theotokion); kontakion and ikos; the saint\'s exapostilarion is appointed at Glory after that '
                 'of the Oktoechos. At Liturgy only the troparion and kontakion are printed.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
