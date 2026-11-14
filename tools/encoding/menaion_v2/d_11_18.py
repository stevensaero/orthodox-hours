# 11-18.pdf — COMMEMORATION OF THE HOLY MARTYRS PLATO & ROMANUS (11 pages)
# A DOUBLE service: two saints, 3 + 3 stichera, and TWO canons printed
# interleaved ode by ode. Each canon is stored whole (spec 5.6: storage follows
# composition; the assembler interleaves). Read off the page, 14 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-18')
    t, r = s.t, s.r
    s.mark(4, 55, 378)
    s.mark(57, 96, 152, 188, 219, 261, 295, 334)                       # ODE headings
    # From Ode III on, each canon is re-announced by a bare label under the ode
    # heading ("Canon of the holy martyr Plato"). The canon's identity is its
    # place in `canons`; the full titles are stored once, from Ode I.
    plato_labels = [97, 153, 189, 220, 262, 296, 335]
    romanus_labels = [114, 173, 206, 232, 278, 319, 354]
    for n in plato_labels:
        assert s.raw(n) == 'Canon of the holy martyr Plato', (n, s.raw(n))
    for n in romanus_labels:
        assert s.raw(n) == 'Canon of the holy martyr Romanus', (n, s.raw(n))

    assert same(t(50, 53, 'tr1'), t(380, 383, 'tr2')), 'troparion sites diverge'
    s.mark(379)
    troparion = t(50, 53, 'Troparion of the holy martyrs', sl=49,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p11 AT LITURGY', 'tone': 4}])
    assert same(t(251, 254, 'k1'), t(385, 388, 'k2')), 'kontakion sites diverge'
    s.mark(384)
    kontakion = t(251, 254, 'Kontakion of the holy martyr Plato', sl=249, sm=250, saint='Plato',
                  verified_sites=[{'locus': 'p8 after Ode VI', 'tone': 3}, {'locus': 'p11 AT LITURGY', 'tone': 3}])
    ikos = t(255, 260, 'Ikos', pre='Ikos: ', saint='Plato')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion', 'troparion'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [10, 14, 19], 'LIC', sm=6, first={'tone': 8}, saint='Plato') + [
            t(22, 26, 'LIC 4', sl=20, sm=21, label='plain', saint='Romanus'),
            t(27, 30, 'LIC 5', sm=21, label='plain', saint='Romanus'),
            t(31, 34, 'LIC 6', sm=21, label='plain', saint='Romanus'),
        ],
        'lic_glory': t(37, 43, 'LIC Glory', sl=36, saint='Plato'),
        'lic_closer_rubric': r(44, 44, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(46, 48, 'LIC Stavrotheotokion', sm=45, pre='Stavrotheotokion: ', type='stavrotheotokion', tone=6),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(56, 56, 'Canon rubric'),
        'canons': [
            {'title': s.raw(58, 59), 'composer': 'Theophanes',
             'acrostic': 'I hymn the expanse of thy praises, O Plato', 'tone': 8,
             'odes': {
                 1: s.ode(1, (60, 63), [66, 69, 72, 76]),
                 3: s.ode(3, (98, 101), [104, 107, 110, 113]),
                 4: s.ode(4, (154, 157), [160, 164, 168, 171]),
                 5: s.ode(5, (190, 193), [196, 199, 202, 205]),
                 6: s.ode(6, (221, 223), [226, 228, 231]),
                 7: s.ode(7, (263, 265), [268, 271, 274, 277]),
                 8: s.ode(8, (297, 301), [305, 309, 313, 318]),
                 9: s.ode(9, (336, 339), [342, 345, 349, 353]),
             }},
            {'title': s.raw(77, 78),
             'acrostic': "With spiritual athletes' wreaths I crown thee, O Romanus", 'tone': 4,
             'odes': {
                 1: s.ode(1, (79, 81), [85, 88, 91, 95]),
                 3: s.ode(3, (115, 116), [118, 120, 122, 125]),
                 4: s.ode(4, (174, 176), [179, 181, 184, 187]),
                 5: s.ode(5, (207, 208), [210, 213, 215, 218]),
                 6: s.ode(6, (233, 235), [238, 241, 244, 247]),
                 7: s.ode(7, (279, 281), [284, 287, 291, 294]),
                 8: s.ode(8, (320, 322), [325, 329, 333]),
                 9: s.ode(9, (355, 357), [360, 363, 367]),
             }},
        ],
        # One position, four items, two saints: Plato's hymn, then Glory and
        # Romanus's, then Both now and the Theotokion, then the Stavrotheotokion.
        'sessional_ode3': [
            t(128, 133, 'Ode III sessional (Plato)', sl=126, sm=127, label='plain', saint='Plato'),
            t(137, 141, 'Ode III sessional (Romanus)', sl=135, sm=136, label='glory', saint='Romanus'),
            t(143, 146, 'Ode III sessional Theotokion', sl=142, type='theotokion', label=['both_now', 'theotokion']),
            t(147, 151, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': t(370, 373, 'Exapostilarion', sl=368, sm=369, label='plain'),
        'exapostilarion_closer': t(374, 377, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }
    for lab in plato_labels + romanus_labels:
        s.mark(lab)

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2B',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('A double commemoration: 3 stichera of the martyr Plato and 3 of the martyr Romanus at Lord I have '
                 'cried, so 6 printed for two saints, which the encoding_rule_v2.md 1.1 waterfall reads as Simple rank, '
                 'double service (Fekula 2B). ODS vol. III has no 11-18 entry. No Polyeleos, no Great Doxology. TWO '
                 'canons, printed interleaved ode by ode and stored whole. The Glory, the kontakion, the ikos and the '
                 'exapostilarion are Plato\'s alone; Romanus has stichera, a canon and a sessional hymn. No aposticha '
                 'and no aposticha Glory are printed at Vespers, not even a rubric. At Liturgy only the troparion and '
                 'kontakion are printed: no prokeimenon, readings, alleluia or communion verse.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
