# 12-10.pdf — COMMEMORATION OF THE HOLY MARTYRS MENAS, HERMOGENES AND EUGRAPHUS OF
# ALEXANDRIA (9 pages). A simple service: 3 stichera, one canon; two kontakia (one
# after Ode III, one after Ode VI); readings at Liturgy. Boundaries read off the
# extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-10')
    t, r = s.t, s.r
    s.mark(5, 38, 250)
    s.mark(42, 60, 106, 129, 146, 180, 197, 219)

    assert same(t(33, 36, 'tr1'), t(252, 255, 'tr2')), 'troparion sites diverge'
    s.mark(251)
    troparion = t(33, 36, 'Troparion of the holy martyrs', sl=32,
                  verified_sites=[{'locus': 'p1 end of Vespers', 'tone': 8}, {'locus': 'p8 AT LITURGY', 'tone': 8}])
    assert same(t(169, 172, 'k1'), t(257, 260, 'k2')), 'kontakion sites diverge'
    s.mark(256)
    kontakion = t(169, 172, 'Kontakion of the holy martyrs', sl=167, sm=168,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 4}, {'locus': 'p8 AT LITURGY', 'tone': 4}])
    ikos = t(173, 179, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion', 'aposticha_rubric', 'troparion'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [11, 15, 19], 'LIC', sm=7, label='plain', first={'tone': 1}),
        'lic_closer': t(21, 25, 'LIC Glory/Both now Theotokion', sl=20, type='theotokion'),
        'lic_stavrotheotokion': t(26, 30, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        'aposticha_rubric': r(31, 31, 'Aposticha rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(39, 41, 'Canon rubric'),
        'canons': [{
            'title': s.raw(39, 41),
            'composer': 'Joseph',
            'acrostic': 'I hymn the steadfast crown-bearing martyrs',
            'tone': 1,
            'odes': {
                1: s.ode(1, (43, 46), [49, 52, 55, 59]),
                3: s.ode(3, (61, 64), [67, 70, 73, 76]),
                4: s.ode(4, (107, 111), [114, 118, 121, 124, 128]),
                5: s.ode(5, (130, 133), [136, 139, 142, 145]),
                6: s.ode(6, (147, 150), [154, 159, 163, 166]),
                7: s.ode(7, (181, 183), [186, 189, 192, 195]),
                8: s.ode(8, (198, 202), [206, 210, 214, 218]),
                9: s.ode(9, (220, 223), [226, 229, 232, 235, 240]),
            },
        }],
        # A kontakion in Tone I stands after Ode III, before the sessional hymn; the
        # kontakion with the ikos (Tone IV) stands after Ode VI and is the one at Liturgy.
        'kontakia_ode3': [
            t(80, 83, 'Kontakion of the holy martyrs (after Ode III)', sl=78, sm=79, label='plain'),
        ],
        'sessional_ode3': [
            t(86, 91, 'Ode III sessional', sl=84, sm=85, label='plain'),
            t(93, 98, 'Ode III sessional Theotokion', sl=92, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(99, 105, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(243, 245, 'Exapostilarion', sl=241, sm=242, label='plain'),
        'exapostilarion_closer': t(246, 248, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }

    liturgy = {
        'order': ['troparion', 'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
        'prokeimenon': t(261, 262, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(263, 264, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(265, 275, 'Epistle', 'THE EPISTLE TO THE EPHESIANS', '(6:10-17).',
                             {'book': 'Ephesians', 'chapter': 6, 'verses': '10-17'}),
        'alleluia': t(276, 277, 'Alleluia', pre='Alleluia, in Tone IV: '),
        'alleluia_verse': t(278, 279, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(280, 290, 'Gospel', 'READING FROM THE GOSPEL ACCORDING TO ST. LUKE', '(21 :12-19).',
                            {'book': 'Luke', 'chapter': 21, 'verses': '12-19'}),
        'communion_verse': t(291, 292, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints. From the title lines.
        'name': 'the holy Martyrs Menas, Hermogenes and Eugraphus of Alexandria',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the martyrs at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-10 entry. NO stichera of the Theotokos '
                 'for Alleluia days are printed here (unlike 1, 2, 3, 7, 8 and 11 December). "Aposticha Stichera from '
                 'the Octoechos" with no Glory. One canon by Joseph. TWO kontakia: one in Tone I after Ode III, before '
                 'the sessional hymn, and the kontakion with its ikos in Tone IV after Ode VI, which is the one printed '
                 'at Liturgy. An exapostilarion with its Theotokion. At Liturgy a prokeimenon, Epistle, Alleluia, Gospel '
                 'and communion verse are printed, and no Beatitudes rubric. The melody lines are printed "Spec. Mel:" '
                 'throughout this file.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
