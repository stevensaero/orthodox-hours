# 09-05.pdf — COMMEMORATION OF THE HOLY PROPHET ZACHARIAS, THE FATHER OF THE
# HONORABLE FORERUNNER JOHN THE BAPTIST (9 pages). First file of 5 September
# (c0); 09-05A is the second, a Polyeleos service of the same saint with
# Elizabeth. OVERLAP DATE for the V1/V2 comparison (V1 encoded 09-05A only).
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('09-05')
    t, r = s.t, s.r
    s.mark(5, 60, 221)
    s.mark(63, 77, 106, 117, 128, 153, 169, 186)

    assert same(t(53, 57, 'tr1'), t(233, 237, 'tr2')), 'troparion sites diverge'
    s.mark(232)
    troparion = t(53, 57, 'Troparion of the holy prophet', sl=52,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p8 AT LITURGY', 'tone': 4}])
    assert same(t(142, 145, 'k1'), t(239, 242, 'k2')), 'kontakion sites diverge'
    s.mark(238)
    kontakion = t(142, 145, 'Kontakion of the holy prophet', sl=140, sm=141,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 3}, {'locus': 'p8 AT LITURGY', 'tone': 3}])
    ikos = t(146, 152, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion',
                  'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [12, 17, 22], 'LIC', sm=7, first={'tone': 4}),
        'lic_glory': t(24, 28, 'LIC Glory', sl=23, composer='John the Monk'),
        'lic_closer_rubric': r(29, 29, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(31, 35, 'LIC Stavrotheotokion', sm=30, pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=8),
        # "On the Aposticha, Glory ..., in Tone II:" is the only aposticha heading.
        'aposticha_glory': t(37, 44, 'Aposticha Glory', sl=36),
        'aposticha_closer_rubric': r(45, 45, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(47, 51, 'Aposticha Stavrotheotokion', sm=46, pre='Stavrotheotokion: ',
                                        type='stavrotheotokion', tone=2),
        'troparion_closer_rubric': r(58, 58, 'Troparion Theotokion rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion'],
        'canon_rubric': r(61, 62, 'Canon rubric'),
        'canons': [{
            'title': s.raw(61, 62),
            'composer': 'Theophanes',
            'tone': 1,
            'odes': {
                1: s.ode(1, (64, 66), [68, 71, 73, 76]),
                3: s.ode(3, (78, 79), [81, 83, 85, 87]),
                4: s.ode(4, (107, 108), [110, 112, 114, 116]),
                5: s.ode(5, (118, 119), [121, 123, 125, 127]),
                6: s.ode(6, (129, 130), [132, 134, 136, 138]),
                7: s.ode(7, (154, 156), [159, 162, 165, 168]),
                8: s.ode(8, (170, 172), [175, 179, 182, 185]),
                9: s.ode(9, (187, 189), [192, 194, 196, 199]),
            },
        }],
        'sessional_ode3': [
            t(90, 94, 'Ode III sessional', sl=88, sm=89, label='plain'),
            t(96, 100, 'Ode III sessional Theotokion', sl=95, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(102, 105, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion in Tone IV: ',
              type='stavrotheotokion', label='stavrotheotokion', tone=4),
        ],
        'exapostilarion': t(202, 204, 'Exapostilarion', sl=200, sm=201, label='plain'),
        'exapostilarion_closer': t(206, 208, 'Exapostilarion Theotokion', sl=205, type='theotokion'),
        # Printed "At the Stichera, Glory ..., in Tone VIII:" (the Matins aposticha).
        'aposticha_glory': t(210, 213, 'Matins Stichera, Glory', sl=209),
        'aposticha_closer_rubric': r(215, 215, 'Matins Stichera, Both now rubric'),
        'aposticha_stavrotheotokion': t(217, 219, 'Matins Stichera Stavrotheotokion', sm=216,
                                        pre='Stavrotheotokion: ', type='stavrotheotokion', tone=8),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(222, 223, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 224, 225), ('t', 226, 227), ('t', 228, 229), ('theot', 230, 231)], 'Beatitude'),
        'prokeimenon': t(243, 244, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(245, 245, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(246, 258, 'Epistle', 'EPISTLE TO THE HEBREWS,', '§314 (HEB.6: 13-20)',
                             {'book': 'Hebrews', 'chapter': 6, 'verses': '13-20', 'pericope_number': 314}),
        'alleluia': t(259, 260, 'Alleluia', pre='Alleluia, in Tone VII: '),
        'gospel': s.reading(261, 278, 'Gospel', 'GOSPEL ACCORDING TO ST. MATTHEW,', '§ 96 (MT. 23: 29-39)',
                            {'book': 'Matthew', 'chapter': 23, 'verses': '29-39', 'pericope_number': 96}),
        'communion_verse': t(279, 280, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2C',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). First FILE of 5 '
                 'September; the second, 09-05A, is a Polyeleos service of the Prophet Zacharias and Righteous '
                 'Elizabeth and is the one V1 encoded and ODS 3rd ed. vol. III (pp. 14-16, `ods3-0905-wkd`) follows. '
                 'This file is the lesser form: by the encoding_rule_v2.md 1.1 waterfall, 6 stichera of one saint '
                 '(three printed, each "(Twice)"), a Glory of the saint, no Polyeleos, no Great Doxology: '
                 'Six-Stichera, Fekula 2C. `oca_primary` is false because the vol. III entry and V1 take the second '
                 'service. Two files are two services (ruling of 14 Nov 2026). The aposticha print only their Glory '
                 'and Both now at Vespers and at Matins ("At the Stichera, Glory ...").'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
