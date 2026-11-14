# 10-04.pdf — COMMEMORATION OF THE HOLY HIEROMARTYR HIEROTHEUS, BISHOP OF
# ATHENS (8 pages). First file of 4 October (c0); 10-04A is the second.
# OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5),
# shape "two services on one date". Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('10-04')
    t, r = s.t, s.r
    s.mark(5, 43, 235)
    s.mark(47, 61, 97, 116, 135, 164, 180, 203)

    assert same(t(37, 40, 'tr1'), t(237, 240, 'tr2')), 'troparion sites diverge'
    s.mark(236)
    troparion = t(37, 40, 'Troparion of the holy hieromartyr', sl=36,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p8 AT LITURGY', 'tone': 4}])
    # The Ode III kontakion is printed UNPOINTED at Matins (p3) and POINTED at
    # Liturgy (p8): same words. Both stored as printed; variant row registered.
    assert not same(t(77, 80, 'a'), t(242, 245, 'b')), 'Ode III kontakion sites now match: drop the variant row'
    assert same(t(152, 156, 'a'), t(247, 251, 'b')), 'Ode VI kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [12, 17, 21], 'LIC', sm=7, first={'tone': 4}),
        'lic_glory': t(23, 27, 'LIC Glory', sl=22),
        'lic_closer_rubric': r(28, 28, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(30, 34, 'LIC Stavrotheotokion', sm=29, pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=2),
        'troparion_closer_rubric': r(41, 41, 'Troparion Theotokion rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(44, 46, 'Canon rubric'),
        'canons': [{
            'title': s.raw(44, 46),
            'composer': 'Theophanes',
            'acrostic': 'We honor thy luminous memory, O all-blessed one',
            'tone': 8,
            'odes': {
                1: s.ode(1, (48, 50), [53, 55, 57, 60]),
                3: s.ode(3, (62, 64), [66, 69, 71, 74]),
                4: s.ode(4, (98, 101), [104, 108, 112, 115]),
                5: s.ode(5, (117, 120), [124, 127, 130, 134]),
                6: s.ode(6, (136, 138), [141, 143, 146, 149]),
                7: s.ode(7, (165, 167), [170, 173, 176, 179]),
                8: s.ode(8, (181, 185), [189, 193, 197, 201]),
                9: s.ode(9, (204, 207), [211, 215, 219, 223]),
            },
        }],
        'kontakia_ode3': [t(77, 80, 'Kontakion of the holy hieromartyr (after Ode III)', sl=75, sm=76, label='plain')],
        'sessional_ode3': [
            t(84, 87, 'Ode III sessional', sl=82, sm=83, label='plain'),
            t(89, 92, 'Ode III sessional Theotokion', sl=88, type='theotokion', label=['both_now', 'theotokion']),
            t(93, 96, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'kontakia_ode6': [
            t(152, 156, 'Kontakion (after Ode VI)', sl=150, sm=151, label='plain'),
            t(157, 162, 'Ikos', pre='Ikos: ', label='plain'),
        ],
        'exapostilarion': t(226, 229, 'Exapostilarion', sl=224, sm=225, label='plain'),
        'exapostilarion_closer': t(230, 233, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }

    liturgy = {
        'order': ['troparion', 'kontakia'],
        'kontakia': [
            t(242, 245, 'Kontakion of Ode III at Liturgy', sl=241, label='plain'),
            t(247, 251, 'Kontakion of Ode VI at Liturgy', sl=246, label='plain'),
        ],
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). ODS 3rd ed. vol. III has '
                 'no entry for 4 October. Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera at Lord I have '
                 'cried and a Glory of the saint, no Polyeleos, no Great Doxology, no aposticha printed: Simple, '
                 'Fekula 2A, agreeing with V1. TWO kontakia (Tone VIII after Ode III; Tone IV with the Ikos after Ode '
                 'VI), both printed again at Liturgy: positional lists, no entry-level canonical kontakion. The Ode III kontakion is unpointed at Matins and pointed at Liturgy (same words). First file '
                 'of the date; 10-04A (the venerable Paul the Simple) is a second, separate service.'),
        'troparion': troparion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
