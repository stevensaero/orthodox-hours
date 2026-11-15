# 10-04A.pdf — COMMEMORATION OF THE VENERABLE PAUL THE SIMPLE, DISCIPLE OF THE
# VENERABLE ANTHONY THE GREAT (6 pages). Second file of 4 October (c1).
# OVERLAP DATE for the V1/V2 comparison. Boundaries read off the page.
from daily_lib import Src, same

def build():
    s = Src('10-04A')
    t, r = s.t, s.r
    s.mark(5, 41, 207)
    s.mark(43, 57, 84, 101, 118, 149, 166, 184)

    assert same(t(35, 38, 'tr1'), t(209, 212, 'tr2')), 'troparion sites diverge'
    assert s.raw(34) == s.raw(208) == 'Troparion of the venerable one, in Tone 8 :', (s.raw(34), s.raw(208))
    s.mark(208)
    troparion = t(35, 38, 'Troparion of the venerable one', sl=34, tone=8,
                  verified_sites=[{'locus': 'p1 end of Vespers', 'tone': 8}, {'locus': 'p6 AT LITURGY', 'tone': 8}])
    assert same(t(137, 141, 'k1'), t(214, 218, 'k2')), 'kontakion sites diverge'
    s.mark(213)
    kontakion = t(137, 141, 'Kontakion of the venerable one', sl=136,
                  verified_sites=[{'locus': 'p4 after Ode VI', 'tone': 2}, {'locus': 'p6 AT LITURGY', 'tone': 2}])
    ikos = t(142, 148, 'Ikos', pre='Ikos: ')

    s.mark(7, 22)
    assert s.raw(7) == 'Spec. Mel: “O marvelous wonder ...”:', s.raw(7)
    assert s.raw(22) == 'Spec. Mel: “Having set all aside ...,”:', s.raw(22)
    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'aposticha_glory',
                  'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [11, 15, 20], 'LIC', first={'tone': 1}, spec_mel='O marvelous wonder ...'),
        'lic_glory': t(23, 27, 'LIC Glory', sl=21, spec_mel='Having set all aside ...,'),
        'lic_closer_rubric': r(28, 28, 'LIC Both now rubric'),
        # "On the Aposticha, Glory ..., in Tone III:" is the only aposticha heading.
        'aposticha_glory': t(30, 33, 'Aposticha Glory', sl=29),
        'troparion_closer_rubric': r(39, 39, 'Troparion Theotokion rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos', 'exapostilarion_glory'],
        'canon_rubric': r(42, 42, 'Canon rubric'),
        'canons': [{
            'title': s.raw(42),
            'tone': 2,
            'odes': {
                1: s.ode(1, (44, 46), [48, 50, 53, 56]),
                3: s.ode(3, (58, 61), [64, 67, 71, 73]),
                4: s.ode(4, (85, 87), [90, 93, 97, 100]),
                5: s.ode(5, (102, 104), [107, 110, 114, 117]),
                6: s.ode(6, (119, 120), [124, 128, 131, 135]),
                7: s.ode(7, (150, 152), [155, 158, 161, 165]),
                8: s.ode(8, (167, 169), [172, 176, 180, 183]),
                9: s.ode(9, (185, 187), [190, 193, 196, 199]),
            },
        }],
        'sessional_ode3': [t(75, 82, 'Ode III sessional', sl=74, label='plain')],
        # "After the Exapostilarion. Glory ..., and this of the venerable one": no
        # exapostilarion is printed; the Glory hymn is.
        'exapostilarion_glory': t(202, 206, 'After the Exapostilarion, Glory', sl=201, label='glory'),
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'our venerable father Paul the Simple',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). Second file of 4 '
                 'October, a separate service (ruling of 14 Nov 2026: two files are two services). Rank by the '
                 'encoding_rule_v2.md 1.1 waterfall: 3 stichera and a Glory at Lord I have cried, a Glory at the '
                 'Aposticha, no Polyeleos, no Great Doxology: Simple, Fekula 2A, agreeing with V1. The canon rubric is '
                 'only "Canon of the venerable one, in Tone II:": no acrostic, no composer, no mention of the '
                 'Oktoechos canons. No exapostilarion is printed, only "After the Exapostilarion. Glory ..., and this '
                 'of the venerable one". The troparion label prints the tone as an arabic numeral with a space before '
                 'the colon ("in Tone 8 :"), at both sites. Two Spec. Mel. lines print "Spec. Mel:" without the '
                 'second full stop. AT LITURGY prints only the troparion and kontakion.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
