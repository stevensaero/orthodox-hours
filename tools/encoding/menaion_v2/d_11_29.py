# 11-29.pdf — COMMEMORATION OF THE HOLY MARTYR PARAMON; COMMEMORATION OF THE
# VENERABLE ACACIUS, WHO IS MENTIONED IN "THE LADDER" (12 pages).
# A simple service: Paramon at Vespers and Matins, Acacius AT COMPLINE.
# THE FILE PRINTS NO TROPARION AND NO KONTAKION for either saint, and no
# AT LITURGY. Both entry-level hymns are stored as explicit absences.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, ABS

AC = 'Acacius'

def build():
    s = Src('11-29')
    t, r = s.t, s.r
    s.mark(5, 62, 223)
    s.mark(65, 83, 94, 110, 121, 142, 158, 175)              # Compline ODE headings
    s.mark(227, 242, 270, 287, 299, 314, 331, 350)           # Matins ODE headings

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_closer_alternate_rubric', 'lic_stavrotheotokion'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [13, 19, 25], 'LIC', sm=7, first={'tone': 4}),
        'theotokos_stichera_rubric': r(26, 27, 'If Alleluia is chanted at Matins'),
        'theotokos_stichera': s.seq(28, [33, 39, 46], 'Stichera of the Theotokos', first={'tone': 4}),
        'lic_closer': t(48, 53, 'LIC Glory/Both now, Theotokion', sl=47, type='theotokion'),
        'lic_closer_alternate_rubric': r(54, 54, 'Stavrotheotokion, in the same melody'),
        'lic_stavrotheotokion': t(55, 60, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=4),
    }

    s.mark(136)
    assert s.raw(136) == 'Sessional Hymn, in Tone IV: Spec. Mel.: “Go thou quickly before ...”:', s.raw(136)
    compline = {
        'order': ['canon', 'sessional_ode6', 'stichera_rubric', 'stichera', 'stichera_closer',
                  'stichera_stavrotheotokion'],
        'canon': {
            'title': s.raw(63, 64),
            'composer': 'Theophanes',
            'acrostic': 'With songs do I hymn Acacius, the chosen and obedient one',
            'tone': 4,
            'odes': {
                1: s.ode(1, (66, 68), [70, 73, 76, 79, 82]),
                3: s.ode(3, (84, 85), [87, 89, 91, 93]),
                4: s.ode(4, (95, 97), [100, 104, 106, 109]),
                5: s.ode(5, (111, 112), [114, 116, 118, 120]),
                6: s.ode(6, (122, 124), [126, 129, 132, 135]),
                7: s.ode(7, (143, 145), [148, 151, 154, 157]),
                8: s.ode(8, (159, 161), [164, 167, 170, 174]),
                9: s.ode(9, (176, 178), [182, 184, 187, 190, 193]),
            },
        },
        'sessional_ode6': [
            t(137, 140, 'Compline sessional after Ode VI', sourceLabel='Sessional Hymn, in Tone IV',
              spec_mel='Go thou quickly before ...', tone=4, label='plain', saint=AC),
        ],
        'stichera_rubric': r(194, 194, 'Stichera of the venerable one'),
        'stichera': s.seq(196, [200, 204, 209], 'Stichera', sm=195, first={'tone': 4}, saint=AC),
        'stichera_closer': t(211, 215, 'Stichera Glory/Both now, Theotokion', sl=210, type='theotokion'),
        'stichera_stavrotheotokion': t(217, 221, 'Stichera Stavrotheotokion', pre='Stavrotheotokion: ',
                                       type='stavrotheotokion'),
    }
    s.mark(63, 64)

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'after_ode6_rubric',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(224, 226, 'Canon rubric'),
        'canons': [{
            'title': s.raw(224, 226),
            'composer': 'Joseph',
            'acrostic': 'Grant now that I may hymn thy grace, O martyr',
            'tone': 4,
            'odes': {
                1: s.ode(1, (228, 230), [232, 235, 238, 241]),
                3: s.ode(3, (243, 244), [246, 248, 250, 252]),
                4: s.ode(4, (271, 273), [276, 278, 281, 283, 286]),
                5: s.ode(5, (288, 289), [291, 293, 295, 297]),
                6: s.ode(6, (300, 302), [304, 307, 309, 312]),
                7: s.ode(7, (315, 317), [320, 323, 327, 330]),
                8: s.ode(8, (332, 334), [339, 342, 345, 349]),
                9: s.ode(9, (351, 353), [356, 358, 361, 364, 367]),
            },
        }],
        'sessional_ode3': [
            t(255, 258, 'Ode III sessional', sl=253, sm=254, label='plain'),
            t(261, 264, 'Ode III sessional Theotokion', sl=260, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(265, 269, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'after_ode6_rubric': r(313, 313, 'After Ode VI, the Martyricon from the Oktoechos'),
        'exapostilarion': t(370, 373, 'Exapostilarion', sl=368, sm=369, label='plain'),
        'exapostilarion_closer': t(376, 379, 'Exapostilarion Theotokion', sl=375, type='theotokion'),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ODS 3rd ed. vol. III has no entry for 29 November (index checked 14 Nov 2026). Rank by the '
                 'encoding_rule_v2.md 1.1 waterfall: 3 stichera at Lord I have cried, no Glory of the saint, no '
                 'Polyeleos, no Great Doxology: Simple, Fekula 2A. THE FILE PRINTS NO TROPARION AND NO KONTAKION, for '
                 'the martyr Paramon or for the venerable Acacius, and has no AT LITURGY section; after Ode VI the '
                 'rubric appoints "the Martyricon from the Oktoechos" in the kontakion\'s place. Both hymns are stored '
                 'as explicit absences: the Hours must take them by the fallback chain (encoding_rule_v2.md 1 and '
                 '2.1), not from this entry. Vespers prints a rubric and three stichera of the Theotokos for when '
                 'Alleluia is chanted at Matins instead of God is the Lord (a fast-day provision in the Nativity '
                 'Fast). Acacius has a canon and stichera AT COMPLINE, tagged `saint: "Acacius"`.'),
        'troparion': ABS('No troparion is printed anywhere in 11-29.pdf, for either saint.'),
        'kontakion': ABS('No kontakion is printed anywhere in 11-29.pdf; after Ode VI the page appoints "the '
                         'Martyricon from the Oktoechos".'),
        'vespers': vespers, 'compline': compline, 'matins': matins,
    }
    return s, entry, ['identity', 'vespers', 'compline', 'matins']
