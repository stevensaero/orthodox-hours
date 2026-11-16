# 12-07.pdf — COMMEMORATION OF OUR FATHER AMONG THE SAINTS, AMBROSE, BISHOP OF MILAN (7 pages)
# A simple service: 3 stichera, one canon. Boundaries read off the extracted page,
# 16 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-07')
    t, r = s.t, s.r
    s.mark(5, 46, 205)
    s.mark(49, 67, 106, 118, 130, 149, 166, 185)

    assert same(t(41, 44, 'tr1'), t(207, 210, 'tr2')), 'troparion sites diverge'
    s.mark(206)
    troparion = t(41, 44, 'Troparion of the holy hierarch', sl=40,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p7 AT LITURGY', 'tone': 4}])
    assert same(t(145, 148, 'k1'), t(212, 215, 'k2')), 'kontakion sites diverge'
    s.mark(211)
    kontakion = t(145, 148, 'Kontakion of the holy hierarch', sl=143, sm=144,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 3}, {'locus': 'p7 AT LITURGY', 'tone': 3}])

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion', 'aposticha_rubric', 'troparion'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [10, 13, 17], 'LIC', sm=7, label='plain', first={'tone': 1}),
        'theotokos_stichera_rubric': r(18, 19, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(20, [22, 25, 28], 'Sticheron of the Theotokos', label='plain'),
        'lic_closer': t(30, 33, 'LIC Glory/Both now Theotokion', sl=29, type='theotokion'),
        'lic_stavrotheotokion': t(34, 37, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        'aposticha_rubric': r(38, 38, 'Aposticha rubric'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion'],
        'canon_rubric': r(47, 48, 'Canon rubric'),
        'canons': [{
            'title': s.raw(47, 48),
            'acrostic': 'I praise Ambrose most great',
            'tone': 4,
            'odes': {
                1: s.ode(1, (50, 52), [54, 57, 60, 63, 66]),
                3: s.ode(3, (68, 70), [73, 76, 79, 81]),
                4: s.ode(4, (107, 109), [111, 113, 115, 117]),
                5: s.ode(5, (119, 120), [123, 125, 127, 129]),
                6: s.ode(6, (131, 133), [135, 137, 139, 142]),
                7: s.ode(7, (150, 152), [155, 158, 162, 165]),
                8: s.ode(8, (167, 169), [173, 177, 180, 184]),
                9: s.ode(9, (186, 188), [191, 194, 197, 201, 204]),
            },
        }],
        'sessional_ode3': [
            t(85, 90, 'Ode III sessional', sl=83, sm=84, label='plain'),
            t(92, 98, 'Ode III sessional Theotokion', sl=91, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(99, 105, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title lines.
        'name': 'our father among the saints Ambrose, Bishop of Milan',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the hierarch at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-07 entry. The page prints three '
                 'stichera of the Theotokos to be sung first "if Alleluia be chanted at Matins", and "The Aposticha '
                 'from the Oktoechos" with no Glory. At Matins one canon, with five troparia in Odes I and IX and '
                 'four elsewhere (the rubric says "with 4 Troparia"); the sessional hymn after Ode III; the kontakion '
                 'after Ode VI with NO ikos; no exapostilarion. The troparion is the general one of a hierarch with '
                 'the name written in. At Liturgy only the troparion and kontakion are printed.'),
        'troparion': troparion, 'kontakion': kontakion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
