# 11-17.pdf — COMMEMORATION OF OUR FATHER AMONG THE SAINTS, GREGORY THE
# WONDERWORKER, BISHOP OF NEO-CAESAREA (10 pages). Read off the page, 14 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-17')
    t, r = s.t, s.r
    s.mark(5, 58, 290)
    s.mark(62, 85, 122, 147, 168, 197, 215, 237)     # 237 prints doubled glyphs

    assert same(t(53, 55, 'tr1'), t(306, 308, 'tr2')), 'troparion sites diverge'
    s.mark(305)
    troparion = t(53, 55, 'Troparion of the holy hierarch', sl=52,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 8}, {'locus': 'p9 AT LITURGY', 'tone': 8}])
    assert same(t(188, 190, 'k1'), t(310, 312, 'k2')), 'kontakion sites diverge'
    s.mark(309)
    kontakion = t(188, 190, 'Kontakion of the holy hierarch', sl=186, sm=187,
                  verified_sites=[{'locus': 'p6 after Ode VI', 'tone': 2}, {'locus': 'p9 AT LITURGY', 'tone': 2}])
    ikos = t(191, 196, 'Ikos', pre='Ikos: ')

    OCT = dict(reason='governed_by_octoechos', book='octoechos')
    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer_rubric',
                  'aposticha_stavrotheotokion', 'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [12, 17, 22, 27], 'LIC', sm=7, first={'tone': 8}),
        'lic_glory': t(29, 36, 'LIC Glory', sl=28),
        'lic_closer_rubric': r(37, 37, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(39, 41, 'LIC Stavrotheotokion', sm=38, pre='Stavrotheotokion: ', type='stavrotheotokion', tone=6),
        'aposticha_rubric': r(43, 43, 'Aposticha rubric'),
        'aposticha': ABS('The rubric appoints "the Stichera from the Oktoechos"; none are printed here.', **OCT),
        'aposticha_glory': t(45, 47, 'Aposticha Glory', sl=44),
        'aposticha_closer_rubric': r(48, 48, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(49, 51, 'Aposticha Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion', tone=6),
        'troparion_closer_rubric': r(56, 56, 'Troparion Theotokion rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer_rubric',
                  'aposticha_stavrotheotokion'],
        'canon_rubric': r(59, 61, 'Canon rubric'),
        'canons': [{
            'title': s.raw(59, 61),
            'composer': 'Theophanes',
            'acrostic': 'I shall weave praise for Gregory the Wonderworker',
            'tone': 8,
            'odes': {
                1: s.ode(1, (63, 66), [69, 72, 76, 80, 84]),
                3: s.ode(3, (86, 89), [92, 95, 99, 102, 105]),
                4: s.ode(4, (123, 126), [130, 134, 139, 142, 146]),
                5: s.ode(5, (148, 151), [154, 157, 161, 164, 167]),
                6: s.ode(6, (169, 171), [176, 179, 182, 185]),
                7: s.ode(7, (198, 200), [203, 206, 209, 214]),
                8: s.ode(8, (216, 220), [224, 228, 232, 236]),
                9: s.ode(9, (238, 241), [245, 248, 253, 257]),
            },
        }],
        'sessional_ode3': [
            t(108, 111, 'Ode III sessional', sl=106, sm=107, label='plain'),
            t(113, 116, 'Ode III sessional Theotokion', sl=112, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(117, 121, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(260, 263, 'Exapostilarion', sl=258, sm=259, label='plain'),
        'exapostilarion_closer': t(265, 267, 'Exapostilarion Theotokion', sl=264, type='theotokion'),
        # The Octoechos aposticha are appointed by the rubric; the Menaion prints
        # ONE sticheron of its own to follow them, under its own verse.
        'aposticha_rubric': r(268, 268, 'Matins Aposticha rubric'),
        'aposticha': [
            t(269, 270, 'Matins Aposticha verse', pre='Verse: ', label='refrain'),
            t(271, 276, 'Matins Aposticha sticheron to the saint', label='plain', tone=4),
        ],
        'aposticha_glory': t(278, 281, 'Matins Aposticha Glory', sl=277),
        'aposticha_closer_rubric': r(282, 282, 'Matins Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(284, 288, 'Matins Aposticha Stavrotheotokion', sm=283, pre='Stavrotheotokion: ',
                                        type='stavrotheotokion', tone=8),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(291, 292, 'Beatitudes rubric'),
        'beatitudes': s.seq(293, [295, 298, 301], 'Beatitude') + [
            t(302, 304, 'Beatitude 4 Theotokion', pre='Theotokion: ', label='theotokion')],
        'prokeimenon': t(313, 314, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(315, 316, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(317, 324, 'Epistle', 'THE FIRST EPISTLE OF ST. PAUL TO THE CORINTHIANS', '(12:7-11)',
                             {'book': '1 Corinthians', 'chapter': 12, 'verses': '7-11'}),
        'alleluia': t(326, 327, 'Alleluia', pre='Alleluia, in Tone II: '),
        'alleluia_verse': t(328, 329, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(330, 337, 'Gospel', 'THE GOSPEL ACCORDING TO ST. MATTHEW', '(10:1, 5-8)',
                            {'book': 'Matthew', 'chapter': 10, 'verses': '1, 5-8'}),
        'communion_verse': t(338, 339, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2C',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall (ODS vol. III has no 11-17 entry): 6 stichera of one '
                 'saint at Lord I have cried (four printed, two "(Twice)"), no Polyeleos, no Great Doxology; the '
                 'aposticha at both Vespers and Matins are appointed from the Oktoechos. Nothing is printed at Matins '
                 'before the canon. The Both-now closers print only the Stavrotheotokion; the Theotokion is named and '
                 'not printed. The Beatitudes take three troparia of Ode III and its theotokion, passing over the third.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
