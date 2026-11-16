# 12-01.pdf — COMMEMORATION OF THE HOLY PROPHET NAHUM (5 pages)
# A simple service: 3 stichera, one canon, no aposticha printed. Boundaries read off
# the extracted page, 15 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-01')
    t, r = s.t, s.r
    s.mark(4, 39, 169)
    # ODE headings. Three are printed with every glyph doubled ("OODDEE VVII"): a
    # scan artefact of the bold heading, the same heading all the same.
    assert s.raw(116) == 'OODDEE VVII' and s.raw(144) == 'OODDEE VVIIIIII' and s.raw(155) == 'OODDEE IIXX'
    s.mark(42, 58, 88, 103, 116, 133, 144, 155)

    assert same(t(36, 37, 'tr1'), t(171, 172, 'tr2')), 'troparion sites diverge'
    s.mark(170)
    troparion = t(36, 37, 'Troparion of the holy prophet', sl=35,
                  verified_sites=[{'locus': 'p1 end of Vespers', 'tone': 2}, {'locus': 'p5 AT LITURGY', 'tone': 2}])
    assert same(t(130, 132, 'k1'), t(174, 176, 'k2')), 'kontakion sites diverge'
    s.mark(173)
    kontakion = t(130, 132, 'Kontakion of the holy prophet', sl=128, sm=129,
                  verified_sites=[{'locus': 'p4 after Ode VI', 'tone': 4}, {'locus': 'p5 AT LITURGY', 'tone': 4}])

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion', 'troparion'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [9, 12, 15], 'LIC', sm=6, label='plain', first={'tone': 3}),
        'theotokos_stichera_rubric': r(16, 17, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(18, [20, 23, 26], 'Sticheron of the Theotokos', label='plain'),
        'lic_closer': t(28, 30, 'LIC Glory/Both now Theotokion', sl=27, type='theotokion'),
        'lic_stavrotheotokion': t(31, 34, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion'],
        'canon_rubric': r(40, 41, 'Canon rubric'),
        'canons': [{
            'title': s.raw(40, 41),
            'composer': 'Theophanes',
            'tone': 5,
            'odes': {
                1: s.ode(1, (43, 45), [48, 51, 54, 57]),
                3: s.ode(3, (59, 62), [65, 68, 71]),
                4: s.ode(4, (89, 91), [94, 97, 99, 102]),
                5: s.ode(5, (104, 106), [108, 110, 112, 115]),
                6: s.ode(6, (118, 120), [123, 125, 127]),
                7: s.ode(7, (134, 135), [137, 139, 141, 143]),
                8: s.ode(8, (145, 147), [149, 151, 154]),
                9: s.ode(9, (157, 159), [162, 165, 168]),
            },
        }],
        'sessional_ode3': [
            t(74, 77, 'Ode III sessional', sl=72, sm=73, label='plain'),
            t(80, 83, 'Ode III sessional Theotokion', sl=79, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(84, 87, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint ("and of ..., whose memory we
        # celebrate"). From the title line.
        'name': 'the holy Prophet Nahum',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the prophet at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-01 entry. The page prints three '
                 'stichera of the Theotokos to be sung first "if Alleluia be chanted at Matins" (a weekday of the '
                 'Nativity Fast; ODS 2nd ed. Appendix A-II). No Glory of the saint, no aposticha and no aposticha '
                 'rubric are printed at Vespers. At Matins: one canon (no acrostic is printed), the sessional hymn '
                 'after Ode III, the kontakion after Ode VI with NO ikos, and no exapostilarion. Three ODE headings '
                 '(VI, VIII, IX) are printed with every glyph doubled. At Liturgy only the troparion and kontakion '
                 'are printed: no prokeimenon, readings, alleluia or communion verse.'),
        'troparion': troparion, 'kontakion': kontakion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
