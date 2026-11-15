# 11-26.pdf — COMMEMORATION OF OUR VENERABLE FATHER ALYPIUS THE STYLITE OF
# ADRIANOPOLIS (6 pages). First file of 26 November (c0); 11-26A (Innocent of Irkutsk) is the second.
# A simple service: 3 stichera, one canon, nothing printed for the aposticha.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('11-26')
    t, r = s.t, s.r
    s.mark(5, 37, 202)
    s.mark(40, 54, 88, 104, 120, 143, 157, 171)

    assert same(t(32, 35, 'tr1'), t(204, 207, 'tr2')), 'troparion sites diverge'
    s.mark(203)
    troparion = t(32, 35, 'Troparion of the venerable one', sl=31,
                  verified_sites=[{'locus': 'p1 end of Vespers', 'tone': 1}, {'locus': 'p6 AT LITURGY', 'tone': 1}])
    assert same(t(134, 137, 'k1'), t(209, 212, 'k2')), 'kontakion sites diverge'
    s.mark(208)
    kontakion = t(134, 137, 'Kontakion of the venerable one', sl=132, sm=133,
                  verified_sites=[{'locus': 'p4 after Ode VI', 'tone': 8}, {'locus': 'p6 AT LITURGY', 'tone': 8}])
    ikos = t(138, 142, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion', 'troparion'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [11, 15, 20], 'LIC', sm=7, first={'tone': 1}),
        'lic_closer': t(22, 25, 'LIC Glory/Both now, Theotokion', sl=21, type='theotokion'),
        'lic_stavrotheotokion': t(27, 30, 'LIC Stavrotheotokion', sl=26, type='stavrotheotokion'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(38, 39, 'Canon rubric'),
        'canons': [{
            'title': s.raw(38, 39),
            'composer': 'Joseph',
            'acrostic': 'Rejoicing, I praise the pangs of Alypius',
            'tone': 5,
            'odes': {
                1: s.ode(1, (41, 43), [45, 47, 50, 53]),
                3: s.ode(3, (55, 58), [61, 64, 67, 71]),
                4: s.ode(4, (89, 91), [93, 96, 98, 100, 103]),
                5: s.ode(5, (105, 107), [110, 114, 116, 119]),
                6: s.ode(6, (121, 123), [125, 127, 129, 131]),
                7: s.ode(7, (144, 145), [147, 150, 154, 156]),
                8: s.ode(8, (158, 159), [162, 164, 167, 170]),
                9: s.ode(9, (172, 174), [177, 180, 183, 186, 190]),
            },
        }],
        'sessional_ode3': [
            t(75, 78, 'Ode III sessional', sl=73, sm=74, label='plain'),
            t(80, 83, 'Ode III sessional Theotokion', sl=79, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(84, 87, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(194, 197, 'Exapostilarion', sl=192, sm=193, label='plain'),
        'exapostilarion_closer': t(198, 201, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }

    # AT LITURGY prints the troparion and kontakion again and nothing else.
    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'our venerable father Alypius the Stylite',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera at Lord I have cried, no Glory of the '
                 'saint, no Polyeleos, no Great Doxology: Simple, Fekula 2A. The file prints no aposticha at Vespers '
                 'or Matins and no rubric for them. The canon rubric opens "Both canons from the Oktoechos. and that '
                 'of the venerable one" (full stop mid-sentence, as printed). AT LITURGY prints only the troparion '
                 'and kontakion: no prokeimenon, readings or communion verse. First file of the date; 11-26A (Innocent, '
                 'Bishop of Irkutsk) is the second commemoration.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
