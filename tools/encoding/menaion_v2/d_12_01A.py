# 12-01A.pdf — COMMEMORATION OF THE HOLY AND RIGHTEOUS PHILARET THE MERCIFUL OF AMNIA
# IN ASIA MINOR (7 pages). Second commemoration of 1 December (c1). A simple service:
# 3 stichera with a Glory, an aposticha Glory, one canon. Boundaries read off the
# extracted page, 15 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-01A')
    t, r = s.t, s.r
    s.mark(6, 57, 235)
    s.mark(61, 78, 110, 123, 138, 167, 187, 209)

    assert same(t(51, 55, 'tr1'), t(237, 241, 'tr2')), 'troparion sites diverge'
    s.mark(236)
    troparion = t(51, 55, 'Troparion of the righteous one', sl=50,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p7 AT LITURGY', 'tone': 4}])
    assert same(t(155, 158, 'k1'), t(243, 246, 'k2')), 'kontakion sites diverge'
    s.mark(242)
    kontakion = t(155, 158, 'Kontakion of the righteous one', sl=154,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 3}, {'locus': 'p7 AT LITURGY', 'tone': 3}])
    ikos = t(159, 166, 'Ikos', pre='Ikos: ')

    # line 32 prints "Spec. Mel:" with no full stop after "Mel".
    assert s.raw(32) == 'Spec. Mel: “When from the Tree ...”:', s.raw(32)
    lic_stavro = t(33, 37, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion', tone=2,
                   spec_mel='When from the Tree ...')
    lic_stavro['provenance_note'] = 'The melody line is printed "Spec. Mel:" without the full stop after "Mel" (p1).'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion', 'troparion'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(8, [13, 18, 23], 'LIC', label='plain', first={'tone': 8}),
        'lic_glory': t(25, 30, 'LIC Glory', sl=24),
        'lic_closer_rubric': r(31, 31, 'LIC Both now rubric'),
        'lic_stavrotheotokion': lic_stavro,
        # "After the Aposticha, Glory ..., in Tone III:" is the only aposticha heading.
        'aposticha_glory': t(40, 45, 'Aposticha Glory', sl=39),
        'aposticha_closer_rubric': r(46, 46, 'Aposticha Both now rubric'),
        # Printed straight under the rubric with NO inline "Stavrotheotokion:" label; typed
        # from the rubric ("or this Stavrotheotokion") and its content.
        'aposticha_stavrotheotokion': t(47, 49, 'Aposticha Stavrotheotokion', type='stavrotheotokion', tone=3,
                                        sourceLabel=s.label(46)),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(58, 60, 'Canon rubric'),
        'canons': [{
            'title': s.raw(58, 60),
            'composer': 'Valeria',
            'acrostic': 'I praise the sun-like remembrance of Philaret',
            'tone': 2,
            'odes': {
                1: s.ode(1, (62, 64), [67, 71, 74, 77]),
                3: s.ode(3, (79, 80), [83, 86, 88, 91]),
                4: s.ode(4, (111, 112), [115, 117, 120, 122]),
                5: s.ode(5, (124, 126), [129, 132, 134, 137]),
                6: s.ode(6, (139, 141), [144, 147, 150, 153]),
                7: s.ode(7, (168, 171), [175, 179, 182, 186]),
                8: s.ode(8, (188, 191), [195, 199, 204, 208]),
                9: s.ode(9, (210, 212), [217, 221, 224, 227]),
            },
        }],
        'sessional_ode3': [
            t(93, 102, 'Ode III sessional', sl=92, label='plain'),
            t(104, 106, 'Ode III sessional Theotokion', sl=103, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(107, 109, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(229, 231, 'Exapostilarion', sl=228, label='plain'),
        'exapostilarion_closer': t(233, 234, 'Exapostilarion Theotokion', sl=232, type='theotokion'),
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title line.
        'name': 'the holy and righteous Philaret the Merciful',
        'title': s.node(s.raw(3, 5), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Second file of 1 December. Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the righteous '
                 'one at Lord I have cried, no Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-01 entry. '
                 'Unlike the first file (the Prophet Nahum) this service prints a Glory at Lord I have cried and a Glory '
                 'at the aposticha, each with a Stavrotheotokion; the aposticha Stavrotheotokion is printed with no '
                 'inline label. No aposticha stichera are printed ("After the Aposticha, Glory" is the only heading). '
                 'One canon "with four Troparia"; kontakion and ikos after Ode VI; an exapostilarion with its '
                 'Theotokion, no tone printed. At Liturgy only the troparion and kontakion are printed. How the two '
                 'services of the day are combined is not stated in either file.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
