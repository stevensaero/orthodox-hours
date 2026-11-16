# 12-11A.pdf — COMMEMORATION OF THE HOLY MARTYR MYRAX (7 pages). Second file of 11
# December (c1). A simple service with a Glory at Lord I have cried and at the
# aposticha. Boundaries read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-11A')
    t, r = s.t, s.r
    s.mark(4, 63, 235)
    # The ODE VIII heading is printed "OODE VIII".
    assert s.raw(192) == 'OODE VIII', s.raw(192)
    s.mark(67, 80, 114, 132, 148, 172, 192, 208)

    assert same(t(58, 61, 'tr1'), t(237, 240, 'tr2')), 'troparion sites diverge'
    s.mark(236)
    troparion = t(58, 61, 'Troparion of the holy martyr', sl=57,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p7 AT LITURGY', 'tone': 4}])
    assert same(t(164, 166, 'k1'), t(242, 244, 'k2')), 'kontakion sites diverge'
    s.mark(241)
    kontakion = t(164, 166, 'Kontakion of the holy martyr', sl=163,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 4}, {'locus': 'p7 AT LITURGY', 'tone': 4}])
    ikos = t(167, 171, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_rubric', 'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion',
                  'troparion'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(6, [13, 19, 25], 'LIC', label='plain', first={'tone': 6}),
        'lic_glory': t(27, 31, 'LIC Glory', sl=26),
        'lic_closer_rubric': r(32, 32, 'LIC Both now rubric'),
        # The Both now rubric is its printed label. No tone is printed for it; the Glory
        # before it is in Tone VI.
        'lic_stavrotheotokion': t(34, 39, 'LIC Stavrotheotokion', sm=33, type='stavrotheotokion',
                                  sourceLabel=s.raw(32).rstrip(':')),
        'aposticha_rubric': r(40, 40, 'Aposticha rubric'),
        'aposticha_glory': t(43, 50, 'Aposticha Glory', sl=42),
        'aposticha_closer_rubric': r(51, 51, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(53, 56, 'Aposticha Stavrotheotokion', sm=52, type='stavrotheotokion',
                                        sourceLabel=s.raw(51).rstrip(':')),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(64, 66, 'Canon rubric'),
        'canons': [{
            'title': s.raw(64, 66),
            'composer': 'Valeria',
            'acrostic': 'Have mercy on me who have fallen away from Thee, O my God!',
            'tone': 2,
            'odes': {
                1: s.ode(1, (68, 69), [72, 75, 77, 79]),
                3: s.ode(3, (81, 83), [87, 90, 93, 96]),
                4: s.ode(4, (115, 118), [121, 125, 129, 131]),
                5: s.ode(5, (133, 135), [137, 140, 144, 147]),
                6: s.ode(6, (149, 151), [154, 157, 160, 162]),
                7: s.ode(7, (173, 176), [178, 183, 188, 191]),
                8: s.ode(8, (193, 195), [198, 201, 204, 207]),
                9: s.ode(9, (209, 211), [214, 216, 220, 223]),
            },
        }],
        'sessional_ode3': [
            t(98, 102, 'Ode III sessional', sl=97, label='plain'),
            t(106, 109, 'Ode III sessional Theotokion', sl=104, sm=105, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
            t(110, 113, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(225, 229, 'Exapostilarion', sl=224, label='plain'),
        'exapostilarion_closer': t(230, 234, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title line.
        'name': 'the holy Martyr Myrax',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Second file of 11 December, a separate service (Bill, 15 Nov 2026, on the lettered files). Rank by '
                 'the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the martyr at Lord I have cried, no Polyeleos, '
                 'no Great Doxology appointed. ODS vol. III has no 12-11 entry for it. A Glory at Lord I have cried and '
                 'a Glory at the aposticha, each followed by "Both now, Theotokion, or this Stavrotheotokion" with the '
                 'Stavrotheotokion printed. One canon by Valeria, written in the martyr\'s own voice; kontakion and '
                 'ikos; an exapostilarion with its Theotokion. The troparion is the general one of a martyr, with no '
                 'name in it. The ODE VIII heading is printed "OODE VIII". At Liturgy only the troparion and kontakion.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
