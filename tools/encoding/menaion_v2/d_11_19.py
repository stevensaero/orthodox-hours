# 11-19.pdf — COMMEMORATION OF THE HOLY PROPHET OBADIAH / COMMEMORATION OF THE
# HOLY MARTYR BARLAAM OF CAESAREA IN CAPPADOCIA (10 pages). A double service
# under TWO title lines, with two canons interleaved. Read off the page, 14 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-19')
    t, r = s.t, s.r
    s.mark(6, 53, 312)
    s.mark(55, 87, 134, 159, 184, 220, 242, 273)
    prophet_labels = [88, 135, 160, 185, 221, 243, 274]     # 160 prints "Canon TO the holy prophet"
    martyr_labels = [101, 148, 172, 199, 230, 257, 287]
    for n in prophet_labels:
        assert s.raw(n) in ('Canon of the holy prophet', 'Canon to the holy prophet'), (n, s.raw(n))
    for n in martyr_labels:
        assert s.raw(n) == 'Canon of the holy martyr', (n, s.raw(n))

    # TWO troparia (the martyr's at Vespers and Liturgy, the prophet's at Liturgy
    # only): more than one, so no entry-level canonical troparion. Each is stored
    # at its print site in `troparia` (ruled 14 Nov 2026). ONE kontakion, so that
    # keeps its canonical field.
    assert same(t(48, 51, 'tr1'), t(317, 320, 'tr2')), 'martyr troparion sites diverge'
    assert same(t(216, 219, 'k1'), t(322, 325, 'k2')), 'kontakion sites diverge'
    s.mark(321)
    kontakion = t(216, 219, 'Kontakion of the holy martyr', sl=214, sm=215, saint='Barlaam',
                  verified_sites=[{'locus': 'p7 after Ode VI', 'tone': 4}, {'locus': 'p10 AT LITURGY', 'tone': 4}])

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion', 'troparia'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [12, 16, 20], 'LIC', sm=8, first={'tone': 1}, saint='Obadiah') + [
            t(23, 26, 'LIC 4', sl=21, sm=22, label='plain', saint='Barlaam'),
            t(27, 30, 'LIC 5', sm=22, label='plain', saint='Barlaam'),
            t(31, 34, 'LIC 6', sm=22, label='plain', saint='Barlaam'),
        ],
        'lic_closer': t(36, 39, 'LIC Glory/Both now Theotokion', sl=35, type='theotokion'),
        'lic_stavrotheotokion': t(41, 46, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
        'troparia': [t(48, 51, 'Troparion of the holy martyr', sl=47, label='plain', saint='Barlaam')],
    }

    assert s.raw(304) == 'Spec. Mel.: “When the disciples beheld ...”-', s.raw(304)
    exap = t(305, 307, 'Exapostilarion', sl=303, label='plain', saint='Obadiah',
             spec_mel='When the disciples beheld ...')
    exap['provenance_note'] = 'The Spec. Mel. line closes with a hyphen where every other prints a colon: “When the disciples beheld ...”- (p9).'

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(54, 54, 'Canon rubric'),
        'canons': [
            {'title': s.raw(56, 57), 'composer': 'Theophanes',
             'acrostic': 'I hymn the glory of the clairvoyant Obadiah', 'tone': 5,
             'odes': {
                 1: s.ode(1, (58, 60), [63, 65, 67, 70]),
                 3: s.ode(3, (89, 90), [93, 95, 97, 100]),
                 4: s.ode(4, (136, 137), [139, 141, 144, 147]),
                 5: s.ode(5, (161, 162), [164, 167, 169, 171]),
                 6: s.ode(6, (186, 188), [190, 192, 195, 198]),
                 7: s.ode(7, (222, 223), [224, 226, 227, 229]),
                 8: s.ode(8, (244, 246), [249, 252, 256]),
                 9: s.ode(9, (275, 277), [280, 282, 284, 286]),
             }},
            {'title': s.raw(71, 72), 'composer': 'Theophanes',
             'acrostic': 'I hymn thy pangs of endurance, O Barlaam', 'tone': 4,
             'odes': {
                 1: s.ode(1, (73, 75), [77, 79, 81, 83, 86]),
                 3: s.ode(3, (102, 103), [105, 107, 109, 111]),
                 4: s.ode(4, (149, 150), [152, 154, 156, 158]),
                 5: s.ode(5, (173, 175), [177, 179, 181, 183]),
                 6: s.ode(6, (200, 202), [206, 208, 210, 213]),
                 7: s.ode(7, (231, 232), [234, 236, 238, 240]),
                 8: s.ode(8, (258, 260), [263, 266, 269, 272]),
                 9: s.ode(9, (288, 290), [293, 296, 299, 302]),
             }},
        ],
        'sessional_ode3': [
            t(114, 116, 'Ode III sessional (prophet)', sl=112, sm=113, label='plain', saint='Obadiah'),
            t(119, 122, 'Ode III sessional (martyr)', sl=117, sm=118, label='glory', saint='Barlaam'),
            t(124, 127, 'Ode III sessional Theotokion', sl=123, type='theotokion', label=['both_now', 'theotokion']),
            t(129, 133, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'exapostilarion': exap,
        'exapostilarion_closer': t(308, 310, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }
    s.mark(304, *prophet_labels, *martyr_labels)

    liturgy = {
        'order': ['troparia', 'kontakion'],
        'troparia': [
            t(314, 315, 'Troparion of the holy prophet at Liturgy', sl=313, label='plain', saint='Obadiah'),
            t(317, 320, 'Troparion of the holy martyr at Liturgy', sl=316, label='plain', saint='Barlaam'),
        ],
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 5), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2B',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('A double commemoration under two title lines: the Prophet Obadiah and the Martyr Barlaam. 3 + 3 '
                 'stichera, Simple rank, double service (Fekula 2B) by the encoding_rule_v2.md 1.1 waterfall; ODS vol. '
                 'III has no 11-19 entry. Two canons, interleaved in print and stored whole. STORED AS ONE ENTRY, the '
                 'saints told apart by `saint` on each item, as on 11-18. The two saints have separate troparia, so '
                 'there is no entry-level troparion: each is stored where it is printed, in `troparia` (the '
                 'martyr\'s at Vespers and Liturgy, the prophet\'s at Liturgy only). The '
                 'kontakion is the martyr\'s; no kontakion of the prophet and no ikos are printed. No Glory at Lord I '
                 'have cried, no aposticha at Vespers, and at Liturgy only the troparia and kontakion.'),
        'kontakion': kontakion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
