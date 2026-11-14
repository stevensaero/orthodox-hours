# 11-28.pdf — COMMEMORATION OF THE HOLY VENERABLE-MARTYR STEPHEN THE NEW;
# COMMEMORATION OF THE HOLY MARTYR IRENARCHUS (14 pages).
# The same shape as 11-27: Stephen at Vespers, Matins and Liturgy; Irenarchus
# has a canon and stichera AT COMPLINE. One entry, Irenarchus tagged `saint`.
# Stephen has TWO kontakia (after Ode III and after Ode VI), both printed again
# at Liturgy: positional lists, no entry-level canonical kontakion.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, ABS, same

IR = 'Irenarchus'

def build():
    s = Src('11-28')
    t, r = s.t, s.r
    s.mark(5, 66, 225, 422)
    s.mark(69, 84, 98, 116, 132, 156, 172, 189)              # Compline ODE headings
    s.mark(229, 246, 290, 307, 325, 357, 373, 389)           # Matins ODE headings

    assert same(t(59, 63, 'tr1'), t(437, 441, 'tr2')), 'troparion sites diverge'
    s.mark(436)
    troparion = t(59, 63, 'Troparion of the venerable martyr', sl=58,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p13 AT LITURGY', 'tone': 4}])
    assert same(t(267, 270, 'a'), t(443, 446, 'b')), 'Ode III kontakion sites diverge'
    assert same(t(345, 349, 'a'), t(448, 452, 'b')), 'Ode VI kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion',
                  'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [13, 19, 26], 'LIC', sm=7, first={'tone': 6}),
        'lic_glory': t(28, 35, 'LIC Glory', sl=27, composer='the Studite'),
        'lic_closer_rubric': r(37, 37, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(39, 44, 'LIC Stavrotheotokion', sm=38, pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=6),
        # "Stichera on the Aposticha from the Oktoechos; Glory ..., in Tone VIII:" is
        # one printed line: the aposticha rubric and the label of the Glory sticheron.
        'aposticha_glory': t(46, 50, 'Aposticha Glory', sl=45),
        'aposticha_closer_rubric': r(51, 51, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(53, 57, 'Aposticha Stavrotheotokion', sm=52, pre='Stavrotheotokion: ',
                                        type='stavrotheotokion', tone=8),
        'troparion_closer_rubric': r(64, 64, 'Troparion Theotokion rubric'),
    }

    assert s.raw(206) == 'Stichera, in Tone VI: Spec. Mel.: “On the third day ...”:', s.raw(206)
    SM = 'On the third day ...'
    compline = {
        'order': ['canon', 'after_ode6_rubric', 'sessional_ode6',
                  'stichera_rubric', 'stichera', 'stichera_closer', 'stichera_stavrotheotokion'],
        'canon': {
            'title': s.raw(67, 68),
            'acrostic': 'Grant me the grace of peace, O martyr',
            'tone': 6,
            'odes': {
                1: s.ode(1, (70, 72), [74, 77, 80, 83]),
                3: s.ode(3, (85, 87), [90, 92, 95, 97]),
                4: s.ode(4, (99, 100), [103, 107, 110, 112, 115]),
                5: s.ode(5, (117, 119), [122, 125, 128, 131]),
                6: s.ode(6, (133, 135), [138, 141, 145, 148]),
                7: s.ode(7, (157, 159), [162, 165, 168, 171]),
                8: s.ode(8, (173, 175), [178, 181, 185, 188]),
                9: s.ode(9, (190, 193), [196, 199, 202, 205]),
            },
        },
        'after_ode6_rubric': r(149, 149, 'After Ode VI: Lord, have mercy'),
        'sessional_ode6': [
            t(152, 155, 'Compline sessional after Ode VI', sl=150, sm=151, label=['glory', 'both_now'], saint=IR),
        ],
        'stichera_rubric': r(206, 206, 'Stichera rubric'),
        'stichera': [
            t(207, 207, 'Stichera verse', pre='Verse: ', label='refrain', saint=IR),
            t(208, 210, 'Stichera 1', spec_mel=SM, label='plain', tone=6, saint=IR),
            t(211, 213, 'Stichera 2', spec_mel=SM, label='plain', saint=IR),
            t(214, 216, 'Stichera Glory', pre='Glory ..., ', label='glory', saint=IR),
        ],
        'stichera_closer': t(217, 219, 'Stichera Both now', pre='Both now ..., ', type='theotokion'),
        'stichera_stavrotheotokion': t(221, 223, 'Stichera Stavrotheotokion', pre='Stavrotheotokion: ',
                                       type='stavrotheotokion'),
    }
    s.mark(67, 68)

    matins = {
        'order': ['canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(226, 228, 'Canon rubric'),
        'canons': [{
            'title': s.raw(226, 228),
            'composer': 'Joseph',
            'acrostic': 'Christ crowneth thee with the wreath of martyrdom, O blessed one',
            'tone': 6,
            'odes': {
                1: s.ode(1, (230, 232), [234, 237, 240, 243, 245]),
                3: s.ode(3, (247, 249), [251, 254, 257, 260, 263]),
                4: s.ode(4, (291, 292), [294, 296, 299, 302, 306]),
                5: s.ode(5, (308, 310), [313, 316, 318, 321, 324]),
                6: s.ode(6, (326, 328), [330, 333, 335, 338, 341]),
                7: s.ode(7, (358, 360), [363, 366, 369, 372]),
                8: s.ode(8, (374, 376), [378, 380, 383, 385, 388]),
                9: s.ode(9, (390, 393), [397, 400, 403, 406, 409]),
            },
        }],
        'kontakia_ode3': [
            t(267, 270, 'Kontakion of the venerable martyr (after Ode III)', sl=265, sm=266, label='plain'),
        ],
        'sessional_ode3': [
            t(273, 276, 'Ode III sessional', sl=271, sm=272, label='plain'),
            t(278, 280, 'Ode III sessional, Glory', sl=277, label='glory'),
            t(282, 285, 'Ode III sessional Theotokion', sl=281, type='theotokion', label=['both_now', 'theotokion']),
            t(286, 289, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'kontakia_ode6': [
            t(345, 349, 'Kontakion of the venerable martyr (after Ode VI)', sl=343, sm=344, label='plain'),
            t(350, 356, 'Ikos', pre='Ikos: ', label='plain'),
        ],
        'exapostilarion': t(412, 415, 'Exapostilarion', sl=410, sm=411, label='plain'),
        'exapostilarion_closer': t(417, 420, 'Exapostilarion Theotokion', sl=416, type='theotokion'),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakia',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(423, 424, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 425, 426), ('t', 427, 429), ('t', 430, 432), ('theot', 433, 435)], 'Beatitude'),
        'kontakia': [
            t(443, 446, 'Kontakion of Ode III at Liturgy', sl=442, label='plain'),
            t(448, 452, 'Kontakion of Ode VI at Liturgy', sl=447, label='plain'),
        ],
        'prokeimenon': t(453, 454, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VIII: '),
        'prokeimenon_verse': t(455, 455, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(456, 475, 'Epistle', 'EPISTLE TO TIMOTHY,', '§291(II TIM 1 :8-18)',
                             {'book': '2 Timothy', 'chapter': 1, 'verses': '8-18', 'pericope_number': 291}),
        'alleluia': t(476, 477, 'Alleluia', pre='Alleluia, in Tone VIII: '),
        'alleluia_verse': t(478, 478, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(479, 492, 'Gospel', 'GOSPEL ACCORDING TO MATTHEW,', '§37(MT 10:23-31)',
                            {'book': 'Matthew', 'chapter': 10, 'verses': '23-31', 'pericope_number': 37}),
        'communion_verse': t(493, 494, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2C',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ODS 3rd ed. vol. III has no entry for 28 November (index checked 14 Nov 2026). Rank by the '
                 'encoding_rule_v2.md 1.1 waterfall: 6 stichera of ONE saint at Lord I have cried (three printed, each '
                 '"(Twice)"), a Glory of the saint, aposticha from the Oktoechos, no Polyeleos, no Great Doxology, and '
                 'no Matins aposticha printed: Six-Stichera, Fekula 2C. The martyr Irenarchus, named in the title, has '
                 'no stichera at Vespers and no canon at Matins: his canon and stichera are printed AT COMPLINE, stored '
                 'in `compline` and tagged `saint: "Irenarchus"`; he has no troparion or kontakion in the file. The '
                 'venerable martyr has TWO kontakia, Tone VIII after Ode III and Tone III (with the Ikos) after Ode '
                 'VI, and the Liturgy prints both under "ODE III, Kontakion ..." and "ODE VI, Kontakion ...": stored '
                 'in positional lists with no entry-level canonical kontakion. The title line prints "THE- HOLY".'),
        'troparion': troparion,
        'vespers': vespers, 'compline': compline, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'compline', 'matins', 'liturgy']
