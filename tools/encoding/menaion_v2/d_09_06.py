# 09-06.pdf — COMMEMORATION OF THE MIRACLE PERFORMED BY THE ARCHANGEL MICHAEL
# AT COLOSSAE (CHONAE); COMMEMORATION OF THE MARTYR EUDOXIUS AND THOSE WITH HIM
# (15 pages). OVERLAP DATE for the V1/V2 comparison, shape "six stichera".
# The archangel at Vespers, Matins, Liturgy; the martyr Eudoxius AT COMPLINE.
# Matins prints stichera on the Praises AND a Glory on the Aposticha.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, ABS, same

EU = 'Eudoxius'

def build():
    s = Src('09-06')
    t, r = s.t, s.r
    s.mark(6, 49, 211, 429)
    s.mark(51, 64, 81, 94, 105, 130, 150, 168)               # Compline ODE headings
    s.mark(215, 230, 268, 284, 301, 327, 342, 357)           # Matins ODE headings

    assert same(t(43, 47, 'tr1'), t(451, 455, 'tr2')), 'troparion sites diverge'
    s.mark(450)
    troparion = t(43, 47, 'Troparion of the holy archangel', sl=42,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p14 AT LITURGY', 'tone': 4}])
    assert same(t(316, 318, 'k1'), t(457, 459, 'k2')), 'kontakion sites diverge'
    s.mark(456)
    kontakion = t(316, 318, 'Kontakion of the holy archangel', sl=315,
                  verified_sites=[{'locus': 'p10 after Ode VI', 'tone': 2}, {'locus': 'p14 AT LITURGY', 'tone': 2}])
    ikos = t(319, 325, 'Ikos', pre='Ikos: ')

    OCT = dict(reason='governed_by_octoechos', book='octoechos')
    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'aposticha_rubric', 'aposticha',
                  'aposticha_glory', 'troparion'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [13, 17, 22], 'LIC', sm=8, first={'tone': 4}),
        'lic_glory': t(24, 27, 'LIC Glory', sl=23, composer='the Byzantine'),
        'lic_closer': t(29, 32, 'LIC Both now, Theotokion', sl=28, type='theotokion'),
        'aposticha_rubric': r(33, 33, 'Aposticha rubric'),
        'aposticha': ABS('The rubric appoints "the Stichera from the Oktoechos"; none are printed here.', **OCT),
        'aposticha_glory': t(36, 41, 'Aposticha Glory/Both now', sl=35, composer='John the Monk',
                             label=['glory', 'both_now']),
    }

    compline = {
        'order': ['canon', 'sessional_ode6', 'stichera_rubric', 'stichera', 'stichera_closer',
                  'stichera_stavrotheotokion'],
        'canon': {
            'title': s.raw(50),
            'tone': 8,
            'odes': {
                1: s.ode(1, (52, 54), [56, 58, 60, 63]),
                3: s.ode(3, (65, 68), [71, 74, 77, 80]),
                4: s.ode(4, (82, 83), [85, 88, 90, 93]),
                5: s.ode(5, (95, 96), [98, 100, 102, 104]),
                6: s.ode(6, (106, 108), [111, 114, 117, 120]),
                7: s.ode(7, (131, 133), [137, 141, 145, 149]),
                8: s.ode(8, (151, 155), [158, 161, 164, 167]),
                9: s.ode(9, (169, 172), [176, 180, 184, 188]),
            },
        },
        'sessional_ode6': [t(123, 129, 'Compline sessional after Ode VI', sl=121, sm=122, label='plain', saint=EU)],
        'stichera_rubric': r(189, 189, 'Stichera of the holy martyr'),
        'stichera': s.seq(191, [194, 197, 200], 'Stichera', sm=190, first={'tone': 1}, saint=EU),
        'stichera_closer': t(202, 204, 'Stichera Glory/Both now, Theotokion', sl=201, type='theotokion'),
        'stichera_stavrotheotokion': t(206, 209, 'Stichera Stavrotheotokion', pre='Stavrotheotokion: ',
                                       type='stavrotheotokion'),
    }
    s.mark(50)

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer_rubric', 'praises_stavrotheotokion',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion'],
        'canon_rubric': r(212, 214, 'Canon rubric'),
        'canons': [{
            'title': s.raw(212, 214),
            'composer': 'Joseph',
            'acrostic': 'I hymn the first of the bodiless intelligences',
            'tone': 4,
            'odes': {
                1: s.ode(1, (216, 218), [221, 224, 227, 229]),
                3: s.ode(3, (231, 233), [235, 238, 241, 244]),
                4: s.ode(4, (269, 271), [274, 277, 280, 283]),
                5: s.ode(5, (285, 287), [291, 294, 297, 300]),
                6: s.ode(6, (302, 304), [306, 309, 311, 314]),
                7: s.ode(7, (328, 330), [333, 335, 338, 341]),
                8: s.ode(8, (343, 345), [348, 351, 353, 356]),
                9: s.ode(9, (358, 361), [364, 367, 371, 374, 377]),
            },
        }],
        'sessional_ode3': [
            t(247, 253, 'Ode III sessional', sl=245, sm=246, label='plain'),
            t(256, 258, 'Ode III sessional, Glory', sl=254, sm=255, label='glory'),
            t(260, 263, 'Ode III sessional Theotokion', sl=259, type='theotokion', label=['both_now', 'theotokion']),
            t(264, 267, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(379, 381, 'Exapostilarion', sl=378, label='plain'),
        'exapostilarion_closer': t(382, 386, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
        'praises_rubric': r(387, 387, 'Praises rubric'),
        'praises': s.seq(389, [391, 395, 399], 'Praises', sm=388, first={'tone': 1}),
        'praises_glory': t(401, 407, 'Praises Glory', sl=400),
        'praises_closer_rubric': r(409, 409, 'Praises Both now rubric'),
        'praises_stavrotheotokion': t(411, 413, 'Praises Stavrotheotokion', sm=410, type='stavrotheotokion', tone=1),
        # One printed line: the aposticha rubric and the label of its Glory.
        'aposticha_glory': t(415, 419, 'Matins Aposticha Glory', sl=414),
        'aposticha_closer_rubric': r(420, 420, 'Matins Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(422, 427, 'Matins Aposticha Stavrotheotokion', sm=421,
                                        pre='Stavrotheotokion: ', type='stavrotheotokion', tone=5),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(430, 431, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 432, 433), ('t', 434, 436), ('t', 437, 439), ('t', 440, 441), ('t', 442, 444),
                             ('t', 445, 446), ('theot', 447, 449)], 'Beatitude'),
        'prokeimenon': t(460, 461, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(462, 463, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(465, 481, 'Epistle', 'THE EPISTLE OF PAUL THE APOSTLE TO THE HEBREWS', '(2:2-10)',
                             {'book': 'Hebrews', 'chapter': 2, 'verses': '2-10'}),
        'alleluia': t(482, 482, 'Alleluia', pre='Alleluia, in Tone V: '),
        'alleluia_verse': t(483, 484, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(485, 496, 'Gospel', 'READING FROM THE GOSPEL ACCORDING TO ST. LUKE', '(1O:16-21)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '16-21'}),
        'communion_verse': t(497, 498, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'the holy Archangel Michael and the holy Martyr Eudoxius and those with him',
        'title': s.node(s.raw(3, 5), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2C',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). ODS 3rd ed. vol. III has '
                 'no entry for 6 September (as V1 recorded). Rank by the encoding_rule_v2.md 1.1 waterfall: 6 stichera '
                 'of the archangel (three printed, each "(Twice)"), a Glory, aposticha from the Oktoechos, no '
                 'Polyeleos, no Great Doxology rubric: Six-Stichera, Fekula 2C, agreeing with V1. Matins prints '
                 'stichera ON THE PRAISES with a Glory AND THEN "On the Aposticha, the Stichera from the Oktoechos, '
                 'and Glory": the same printed shape as 24 November (open question Q-0006), here in a service V1 and '
                 'the waterfall both take as six-stichera. The martyr Eudoxius has a canon and stichera AT COMPLINE, '
                 'tagged `saint: "Eudoxius"`; its troparia print "Glory ..." and "Both now ...," as inline labels, '
                 'twice as "Glory ...O" with no comma or space. The Liturgy Gospel citation prints a capital letter O '
                 'for the zero: "(1O:16-21)".'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'compline': compline, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'compline', 'matins', 'liturgy']
