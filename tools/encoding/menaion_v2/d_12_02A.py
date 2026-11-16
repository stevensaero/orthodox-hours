# 12-02A.pdf — COMMEMORATION OF THE VENERABLE JOHN, HERACLEMON, ANDREW AND THEOPHILUS
# OF EGYPT (8 pages). Second commemoration of 2 December (c1); the heading also assigns
# the service to 12 June. Boundaries read off the extracted page, 15 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-02A')
    t, r = s.t, s.r
    s.mark(6, 41, 272)
    s.mark(44, 70, 100, 123, 150, 189, 211, 237)

    assert same(t(38, 39, 'tr1'), t(274, 275, 'tr2')), 'troparion sites diverge'
    s.mark(273)
    troparion = t(38, 39, 'Troparion of the venerable fathers', sl=37,
                  verified_sites=[{'locus': 'p1 end of Vespers', 'tone': 4}, {'locus': 'p8 AT LITURGY', 'tone': 4}])
    assert same(t(178, 182, 'k1'), t(277, 281, 'k2')), 'kontakion sites diverge'
    s.mark(276)
    kontakion = t(178, 182, 'Kontakion of the venerable fathers', sl=177,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 8}, {'locus': 'p8 AT LITURGY', 'tone': 8}])
    ikos = t(183, 188, 'Ikos', pre='Ikos: ')

    # line 8 prints "Spec. Mel:" with no full stop after "Mel".
    assert s.raw(8) == 'Spec. Mel: “O most glorious wonder ...”:', s.raw(8)
    lic = s.seq(9, [12, 17, 22], 'LIC', label='plain', first={'tone': 8}, spec_mel='O most glorious wonder ...')
    lic[0]['provenance_note'] = 'The melody line is printed "Spec. Mel:" without the full stop after "Mel" (p1).'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'aposticha_glory', 'troparion'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': lic,
        'lic_glory': t(24, 28, 'LIC Glory', sl=23),
        # Printed "Glory ..., Both now ..., Theotokion, or Stavrotheotokion:" though it follows a Glory.
        'lic_closer_rubric': r(29, 29, 'LIC Both now rubric'),
        # "On the Aposticha, Glory ..., in Tone V:" is the only aposticha heading; no Both now is printed.
        'aposticha_glory': t(31, 36, 'Aposticha Glory', sl=30),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion_glory', 'exapostilarion_closer_rubric'],
        'canon_rubric': r(42, 43, 'Canon rubric'),
        'canons': [{
            'title': s.raw(42, 43),
            'acrostic': 'We glorify your holy memory, O venerable ones',
            'tone': 8,
            'odes': {
                1: s.ode(1, (45, 48), [52, 60, 65, 69]),
                3: s.ode(3, (71, 74), [77, 84, 88, 92]),
                4: s.ode(4, (101, 104), [108, 113, 117, 122]),
                5: s.ode(5, (124, 127), [133, 138, 145, 149]),
                6: s.ode(6, (151, 153), [158, 165, 171, 176]),
                7: s.ode(7, (190, 192), [195, 199, 205, 210]),
                8: s.ode(8, (212, 216), [222, 226, 231, 236]),
                9: s.ode(9, (238, 241), [247, 252, 257, 262]),
            },
        }],
        # One hymn only: no Theotokion follows it on the page.
        'sessional_ode3': [
            t(94, 99, 'Ode III sessional', sl=93, label='plain'),
        ],
        # "After the Exapostilarion, Glory:" — the exapostilarion itself is not printed.
        'exapostilarion_glory': t(264, 269, 'After the Exapostilarion, Glory', sl=263),
        'exapostilarion_closer_rubric': r(270, 270, 'Exapostilarion Both now rubric'),
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints. From the title line.
        'name': 'our venerable fathers John, Heraclemon, Andrew and Theophilus of Egypt',
        'title': s.node(s.raw(4, 5), 4, 'title', sourceLabel=s.raw(2, 3)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Second file of 2 December. The heading reads "THE 2nd DAY OF THE MONTH OF DECEMBER (AND THE 12th DAY '
                 'OF THE MONTH OF JUNE)": the same service serves both dates. Rank by the encoding_rule_v2.md 1.1 '
                 'waterfall: 3 stichera of the venerable fathers at Lord I have cried, no Polyeleos, no Great Doxology '
                 'appointed. ODS vol. III has no 12-02 entry. A Glory at Lord I have cried and a Glory at the aposticha '
                 'are printed; the Theotokia are named and not printed, and the rubric after the first Glory reads '
                 '"Glory ..., Both now ..." though a Glory precedes it. One canon, no composer named; one sessional '
                 'hymn with no Theotokion; kontakion and ikos. "After the Exapostilarion, Glory" prints a hymn, but no '
                 'exapostilarion itself is printed. The troparion is the general one of the fathers, with no name in '
                 'it. At Liturgy only the troparion and kontakion are printed.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
