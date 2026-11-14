# 11-27.pdf — COMMEMORATION OF THE HOLY GREAT-MARTYR JAMES THE PERSIAN;
# COMMEMORATION OF OUR VENERABLE FATHER PALLADIUS (14 pages). First file of
# 27 November (c0); 11-27A is the second.
# One printed service: James at Vespers, Matins and Liturgy; Palladius has a
# canon and stichera AT COMPLINE (first Compline in the daily book). One entry,
# Palladius's material tagged with `saint`. Boundaries read off the page.
from daily_lib import Src, ABS, same

JA, PA = 'James', 'Palladius'

def build():
    s = Src('11-27')
    t, r = s.t, s.r
    s.mark(5, 70, 249, 437)
    s.mark(73, 88, 101, 119, 135, 160, 177, 198)             # Compline ODE headings
    s.mark(253, 266, 301, 312, 328, 352, 372, 392)           # Matins ODE headings
    assert s.raw(352) == 'OODDEE VVIIII', s.raw(352)

    assert same(t(58, 61, 'tr1'), t(439, 442, 'tr2')), 'troparion sites diverge'
    s.mark(438)
    troparion = t(58, 61, 'Troparion of the holy great-martyr', sl=57,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p13 AT LITURGY', 'tone': 4}])
    assert same(t(63, 67, 'a'), t(444, 448, 'b')), 'alternate troparion sites diverge'
    assert same(t(343, 346, 'k1'), t(450, 453, 'k2')), 'kontakion sites diverge'
    s.mark(449)
    kontakion = t(343, 346, 'Kontakion of the holy great-martyr', sl=341, sm=342,
                  verified_sites=[{'locus': 'p10 after Ode VI', 'tone': 2}, {'locus': 'p13 AT LITURGY', 'tone': 2}])
    ikos = t(347, 351, 'Ikos', pre='Ikos: ')

    OCT = dict(reason='governed_by_octoechos', book='octoechos')
    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer_rubric',
                  'aposticha_stavrotheotokion', 'troparion', 'troparion_alternate_rubric', 'troparion_alternate',
                  'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [12, 17, 22], 'LIC', sm=7, first={'tone': 2}),
        'lic_glory': t(24, 28, 'LIC Glory', sl=23),
        'lic_closer_rubric': r(29, 29, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(31, 36, 'LIC Stavrotheotokion', sm=30, pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=5),
        'aposticha_rubric': r(37, 37, 'Aposticha rubric'),
        'aposticha': ABS('The rubric appoints "the Stichera from the Oktoechos"; none are printed here.', **OCT),
        'aposticha_glory': t(40, 49, 'Aposticha Glory', sl=39, composer='George the Syngellus'),
        'aposticha_closer_rubric': r(50, 50, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(52, 56, 'Aposticha Stavrotheotokion', sm=51, pre='Stavrotheotokion: ',
                                        type='stavrotheotokion', tone=8),
        'troparion_alternate_rubric': r(62, 62, 'Or this Troparion rubric'),
        'troparion_alternate': t(63, 67, 'Or this Troparion', sourceLabel='Or this Troparion, in the same tone'),
        'troparion_closer_rubric': r(68, 68, 'Troparion Theotokion rubric'),
    }

    compline = {
        'order': ['canon', 'after_ode6_rubric', 'sessional_ode6',
                  'stichera_rubric', 'stichera', 'stichera_closer', 'stichera_stavrotheotokion'],
        'canon': {
            'title': s.raw(71, 72),
            'composer': 'Joseph',
            'acrostic': 'I honor thy life, O all-blessed father',
            'tone': 4,
            'odes': {
                1: s.ode(1, (74, 76), [78, 81, 84, 87]),
                3: s.ode(3, (89, 91), [94, 97, 100]),
                4: s.ode(4, (102, 104), [107, 110, 113, 115, 118]),
                5: s.ode(5, (120, 122), [125, 128, 131, 134]),
                6: s.ode(6, (136, 138), [141, 144, 148, 151]),
                7: s.ode(7, (161, 164), [167, 170, 173, 176]),
                8: s.ode(8, (178, 181), [184, 189, 193, 197]),
                9: s.ode(9, (199, 202), [205, 209, 213, 217, 221]),
            },
        },
        'after_ode6_rubric': r(152, 152, 'After Ode VI: Lord, have mercy'),
        'sessional_ode6': [
            t(155, 159, 'Compline sessional after Ode VI', sl=153, sm=154, label=['glory', 'both_now'], saint=PA),
        ],
        'stichera_rubric': r(223, 223, 'Stichera of the venerable one'),
        'stichera': [
            t(225, 225, 'Stichera verse 1', pre='Verse: ', label='refrain', saint=PA),
            t(226, 228, 'Stichera 1', sm=224, label='plain', tone=1, saint=PA),
            t(229, 229, 'Stichera verse 2', pre='Verse: ', label='refrain', saint=PA),
            t(230, 233, 'Stichera 2', sm=224, label='plain', saint=PA),
            t(234, 237, 'Stichera Glory', pre='Glory ..., ', label='glory', saint=PA),
        ],
        'stichera_closer': t(239, 242, 'Stichera Both now, Theotokion', sl=238, type='theotokion'),
        'stichera_stavrotheotokion': t(243, 247, 'Stichera Stavrotheotokion', pre='Or this Stavrotheotokion: ',
                                       type='stavrotheotokion'),
    }
    s.mark(71, 72)

    s.mark(279)
    assert s.raw(279) == 'Spec. Mel.: “Of the Wisdom ...”-', s.raw(279)
    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion'],
        'canon_rubric': r(250, 252, 'Canon rubric'),
        'canons': [{
            'title': s.raw(250, 252),
            'composer': 'Joseph',
            'acrostic': 'With songs do I hymn the Persian martyr James',
            'tone': 2,
            'odes': {
                1: s.ode(1, (254, 256), [258, 260, 262, 265]),
                3: s.ode(3, (267, 268), [270, 273, 275, 277]),
                4: s.ode(4, (302, 303), [305, 307, 309, 311]),
                5: s.ode(5, (313, 314), [316, 319, 321, 324, 327]),
                6: s.ode(6, (329, 330), [332, 334, 336, 338, 340]),
                7: s.ode(7, (353, 356), [359, 363, 367, 371]),
                8: s.ode(8, (373, 375), [379, 382, 385, 388, 391]),
                9: s.ode(9, (393, 396), [399, 402, 407, 411, 414]),
            },
        }],
        'sessional_ode3': [
            t(280, 285, 'Ode III sessional', sl=278, spec_mel='Of the Wisdom ...', label='plain'),
            t(288, 293, 'Ode III sessional Theotokion', sl=287, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(294, 300, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(417, 419, 'Exapostilarion', sl=415, sm=416, label='plain'),
        'exapostilarion_closer': t(420, 422, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
        # "On the Aposticha, Glory ..., the composition of the Studite": the label
        # of the Glory sticheron is the only aposticha heading the page prints.
        'aposticha_glory': t(424, 428, 'Matins Aposticha Glory', sl=423, composer='the Studite'),
        'aposticha_closer_rubric': r(429, 429, 'Matins Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(431, 435, 'Matins Aposticha Stavrotheotokion', sm=430,
                                        pre='Stavrotheotokion: ', type='stavrotheotokion', tone=2),
    }

    liturgy = {
        'order': ['troparion', 'troparion_alternate_rubric', 'troparion_alternate', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'troparion_alternate_rubric': r(443, 443, 'Or this Troparion rubric (Liturgy)'),
        'troparion_alternate': t(444, 448, 'Or this Troparion (Liturgy)', sourceLabel='Or this Troparion, in the same tone'),
        'prokeimenon': t(454, 455, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(456, 457, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(458, 468, 'Epistle', 'EPISTLE TO THE EPHESIANS,', '§233(6: 10-17)',
                             {'book': 'Ephesians', 'chapter': 6, 'verses': '10-17', 'pericope_number': 233}),
        'alleluia': t(469, 470, 'Alleluia', pre='Alleluia, in Tone IV Verse: ', tone=4),
        'alleluia_verse': t(471, 472, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(474, 484, 'Gospel', 'GOSPEL ACCORDING TO ST. JOHN,', '§50(15:1-7)',
                            {'book': 'John', 'chapter': 15, 'verses': '1-7', 'pericope_number': 50}),
        'communion_verse': t(485, 486, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2C',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 6 stichera of ONE saint at Lord I have cried (three '
                 'printed, each "(Twice)"), a Glory of the saint, aposticha from the Oktoechos, no Polyeleos, no Great '
                 'Doxology: Six-Stichera, Fekula 2C. The title names two commemorations, but the venerable Palladius '
                 'is given no stichera at Vespers and no canon at Matins: his canon (by Joseph) and stichera are '
                 'printed AT COMPLINE, stored in `compline` and tagged `saint: "Palladius"`. The Compline stichera '
                 'carry the refrain "O venerable father Palladius, pray to God for us" as their verses. The '
                 'great-martyr has TWO troparia ("Or this Troparion"), the second stored at both print sites. At '
                 'Matins the only aposticha heading is the label of the Glory sticheron. The Epistle is the same '
                 'pericope 11-24 prints for Catherine, here with its number (233). The Gospel heading gives John '
                 'pericope 50 for 15:1-7. First file of the date; 11-27A is the second.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'compline': compline, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'compline', 'matins', 'liturgy']
