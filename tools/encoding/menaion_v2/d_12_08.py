# 12-08.pdf — COMMEMORATION OF OUR VENERABLE FATHER PATAPIUS OF THEBES (7 pages)
# A simple service: 3 stichera, one canon. Boundaries read off the extracted page,
# 16 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-08')
    t, r = s.t, s.r
    s.mark(4, 51, 209)
    # ODE VII is printed with every glyph doubled ("OODDEE VVIIII"), as on 12-01.
    assert s.raw(155) == 'OODDEE VVIIII', s.raw(155)
    s.mark(54, 70, 105, 120, 138, 155, 175, 191)

    assert same(t(45, 48, 'tr1'), t(211, 214, 'tr2')), 'troparion sites diverge'
    s.mark(210)
    troparion = t(45, 48, 'Troparion of the venerable one', sl=44,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 8}, {'locus': 'p7 AT LITURGY', 'tone': 8}])
    assert same(t(151, 154, 'k1'), t(216, 219, 'k2')), 'kontakion sites diverge'
    s.mark(215)
    kontakion = t(151, 154, 'Kontakion of the venerable one', sl=149, sm=150,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 3}, {'locus': 'p7 AT LITURGY', 'tone': 3}])

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion', 'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [10, 14, 18], 'LIC', sm=6, label='plain', first={'tone': 1}),
        'theotokos_stichera_rubric': r(19, 20, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(21, [25, 29, 33], 'Sticheron of the Theotokos', label='plain'),
        'lic_closer': t(35, 38, 'LIC Glory/Both now Theotokion', sl=34, type='theotokion'),
        'lic_stavrotheotokion': t(40, 43, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        'troparion_closer_rubric': r(49, 49, 'Troparion Theotokion rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion'],
        'canon_rubric': r(52, 53, 'Canon rubric'),
        'canons': [{
            'title': s.raw(52, 53),
            'tone': 2,
            'odes': {
                1: s.ode(1, (55, 57), [60, 63, 66, 69]),
                3: s.ode(3, (71, 72), [74, 76, 78, 81]),
                4: s.ode(4, (106, 108), [111, 113, 116, 119]),
                5: s.ode(5, (121, 123), [127, 131, 134, 137]),
                6: s.ode(6, (139, 140), [142, 144, 146, 148]),
                7: s.ode(7, (156, 159), [162, 166, 170, 174]),
                8: s.ode(8, (176, 178), [181, 184, 187, 190]),
                9: s.ode(9, (192, 194), [197, 200, 203, 208]),
            },
        }],
        'sessional_ode3': [
            t(84, 89, 'Ode III sessional', sl=82, sm=83, label='plain'),
            t(92, 97, 'Ode III sessional Theotokion', sl=91, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(98, 104, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title line.
        'name': 'our venerable father Patapius of Thebes',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the venerable one at Lord I have cried, '
                 'no Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-08 entry. The page prints three '
                 'stichera of the Theotokos to be sung first "if Alleluia be chanted at Matins". No Glory of the '
                 'saint, no aposticha and no aposticha rubric are printed at Vespers. At Matins one canon, no '
                 'acrostic printed; the sessional hymn after Ode III; the kontakion after Ode VI with NO ikos; no '
                 'exapostilarion. The ODE VII heading is printed with every glyph doubled. The troparion is the '
                 'general one of a venerable father with the name written in. At Liturgy only the troparion and '
                 'kontakion are printed.'),
        'troparion': troparion, 'kontakion': kontakion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
