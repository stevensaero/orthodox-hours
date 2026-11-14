# 11-15.pdf — COMMEMORATION OF THE HOLY MARTYRS; GURIAS, SAMONAS & ABIBUS (10 pages)
# First day of the Nativity Fast. Boundaries read off the extracted page, 14 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-15')
    t, r = s.t, s.r
    s.mark(16, 86, 264)
    s.mark(90, 106, 148, 165, 176, 200, 217, 235)

    assert same(t(81, 84, 'tr1'), t(266, 269, 'tr2')), 'troparion sites diverge'
    s.mark(265)
    troparion = t(81, 84, 'Troparion of the holy martyrs', sl=80,
                  verified_sites=[{'locus': 'p3 end of Vespers', 'tone': 5}, {'locus': 'p9 AT LITURGY', 'tone': 5}])
    assert same(t(191, 193, 'k1'), t(271, 273, 'k2')), 'kontakion sites diverge'
    s.mark(270)
    kontakion = t(191, 193, 'Kontakion of the holy martyrs', sl=189, sm=190,
                  verified_sites=[{'locus': 'p6 after Ode VI', 'tone': 2}, {'locus': 'p9 AT LITURGY', 'tone': 2}])
    ikos = t(194, 199, 'Ikos', pre='Ikos: ')

    # line 18 prints the opening quotation mark BEFORE "Spec. Mel.:" — “Spec. Mel.: Thou hast given a sign ...”:
    assert s.raw(18) == '“Spec. Mel.: Thou hast given a sign ...”:', s.raw(18)
    SM = 'Thou hast given a sign ...'
    lic = s.seq(19, [22, 26, 30], 'LIC', label='plain', first={'tone': 4}, spec_mel=SM)
    lic[0]['provenance_note'] = ('The Spec. Mel. line prints its opening quotation mark before the label: '
                                 '“Spec. Mel.: Thou hast given a sign ...”: (p1). The melody name is stored without it.')

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion',
                  'lic_glory_rubric', 'lic_glory', 'lic_glory_closer_rubric',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer_rubric',
                  'troparion'],
        'lic_rubric': r(17, 17, 'LIC rubric'),
        'lic': lic,
        'theotokos_stichera_rubric': r(31, 32, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(33, [37, 42, 46], 'Sticheron of the Theotokos', label='plain'),
        'lic_closer': t(49, 53, 'LIC Glory/Both now Theotokion', sl=47, sm=48, type='theotokion'),
        'lic_stavrotheotokion': t(54, 58, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        'lic_glory_rubric': r(59, 59, 'If God is the Lord be chanted'),
        'lic_glory': t(61, 70, 'LIC Glory', sl=60),
        'lic_glory_closer_rubric': r(71, 71, 'LIC Both now rubric'),
        'aposticha_rubric': r(72, 72, 'Aposticha rubric'),
        'aposticha': ABS('The rubric appoints "the Stichera from the Oktoechos"; none are printed here.',
                         reason='governed_by_octoechos', book='octoechos'),
        'aposticha_glory': t(73, 77, 'Aposticha Glory', sourceLabel='Glory ..., in Tone II', tone=2),
        'aposticha_closer_rubric': r(78, 78, 'Aposticha Both now rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(87, 89, 'Canon rubric'),
        'canons': [{
            'title': s.raw(87, 89),
            'composer': 'Theophanes',
            'acrostic': 'I praise the three who speak most wisely together',
            'tone': 4,
            'odes': {
                1: s.ode(1, (91, 93), [96, 99, 102, 105]),
                3: s.ode(3, (107, 108), [110, 112, 114, 116]),
                4: s.ode(4, (149, 151), [154, 157, 160, 163]),
                5: s.ode(5, (166, 167), [169, 171, 173, 175]),
                6: s.ode(6, (177, 179), [182, 184, 186, 188]),
                7: s.ode(7, (201, 203), [207, 210, 213, 216]),
                8: s.ode(8, (218, 220), [223, 226, 230, 234]),
                9: s.ode(9, (236, 238), [241, 245, 248, 251, 254]),
            },
        }],
        # Four things printed at one position: the case that settled A-2.
        'sessional_ode3': [
            t(119, 124, 'Ode III sessional', sl=117, sm=118, label='plain'),
            t(127, 132, 'Ode III another sessional', sl=126, label='glory'),
            t(134, 140, 'Ode III sessional Theotokion', sl=133, type='theotokion', label=['both_now', 'theotokion']),
            t(141, 147, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(257, 259, 'Exapostilarion', sl=255, sm=256, label='plain'),
        'exapostilarion_closer': t(260, 262, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }

    liturgy = {
        'order': ['troparion', 'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
        'prokeimenon': t(274, 275, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(276, 277, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(278, 288, 'Epistle', 'EPISTLE TO THE EPHESIANS,', '§233(EPH. 6: 10-17)',
                             {'book': 'Ephesians', 'chapter': 6, 'verses': '10-17', 'pericope_number': 233}),
        'alleluia': t(289, 290, 'Alleluia', pre='Alleluia, in Tone IV: '),
        'alleluia_verse': t(291, 292, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(293, 302, 'Gospel', 'GOSPEL ACCORDING TO LUKE,', '§ 64(LK. 12: 8-12)',
                            {'book': 'Luke', 'chapter': 12, 'verses': '8-12', 'pericope_number': 64}),
        'communion_verse': t(303, 304, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'preface_rubric': r(4, 15, 'Be it known'),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the martyrs at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. The "Be it known" rubric makes the form of the service depend '
                 'on the weekday (God is the Lord on Saturday and Sunday, Alleluia Monday through Friday); it is stored '
                 'verbatim and every branch the page prints is captured. Nothing is printed at Matins before the canon, '
                 'and no Praises or Matins aposticha are printed. Fekula ch. 5 has its own section for this date '
                 '("The 15th Day of the Month of November", p. 214) which is NOT in the delivered chapter text '
                 '(open question Q-0004).'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
