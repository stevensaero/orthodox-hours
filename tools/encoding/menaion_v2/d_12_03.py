# 12-03.pdf — COMMEMORATION OF THE HOLY PROPHET ZEPHANIAH (6 pages)
# A simple service: 3 stichera, one canon, no aposticha printed. Boundaries read off
# the extracted page, 15 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-03')
    t, r = s.t, s.r
    s.mark(4, 62, 189)
    s.mark(65, 78, 105, 115, 128, 147, 160, 173)

    assert same(t(59, 60, 'tr1'), t(191, 192, 'tr2')), 'troparion sites diverge'
    s.mark(190)
    troparion = t(59, 60, 'Troparion of the holy prophet', sl=58,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 2}, {'locus': 'p6 AT LITURGY', 'tone': 2}])
    assert same(t(144, 146, 'k1'), t(194, 196, 'k2')), 'kontakion sites diverge'
    s.mark(193)
    kontakion = t(144, 146, 'Kontakion of the holy prophet', sl=142, sm=143,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 4}, {'locus': 'p6 AT LITURGY', 'tone': 4}])

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion', 'troparion'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [12, 18, 24], 'LIC', sm=6, label='plain', first={'tone': 4}),
        'theotokos_stichera_rubric': r(25, 26, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(27, [32, 38, 45], 'Sticheron of the Theotokos', label='plain'),
        # Both labels read "in the same melody": the melody, and so the tone, of the stichera (Tone IV).
        'lic_closer': t(47, 51, 'LIC Glory/Both now Theotokion', sl=46, type='theotokion', tone=4),
        'lic_stavrotheotokion': t(53, 57, 'LIC Stavrotheotokion', sl=52, type='stavrotheotokion', tone=4),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion'],
        'canon_rubric': r(63, 64, 'Canon rubric'),
        'canons': [{
            'title': s.raw(63, 64),
            'composer': 'Theophanes',
            'acrostic': 'May the glory of Zephaniah illumine me',
            'tone': 6,
            'odes': {
                1: s.ode(1, (66, 68), [71, 74, 77]),
                3: s.ode(3, (79, 81), [84, 86, 89]),
                4: s.ode(4, (106, 107), [109, 111, 114]),
                5: s.ode(5, (116, 118), [121, 124, 127]),
                6: s.ode(6, (129, 131), [134, 137, 141]),
                7: s.ode(7, (148, 150), [153, 156, 159]),
                8: s.ode(8, (161, 163), [166, 169, 172]),
                9: s.ode(9, (174, 177), [182, 185, 188]),
            },
        }],
        'sessional_ode3': [
            t(92, 94, 'Ode III sessional', sl=90, sm=91, label='plain'),
            t(96, 99, 'Ode III sessional Theotokion', sl=95, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            # Printed "Stavrotheotokion The ever-virgin ..." with no colon after the label.
            t(101, 104, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
    }

    liturgy = {'order': ['troparion', 'kontakion']}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title line.
        'name': 'the holy Prophet Zephaniah',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the prophet at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-03 entry. The page prints three '
                 'stichera of the Theotokos to be sung first "if Alleluia be chanted at Matins". The Glory/Both now '
                 'Theotokion and the Stavrotheotokion are both labelled "in the same melody" (Tone IV, of the '
                 'stichera). No Glory of the saint, no aposticha and no aposticha rubric are printed at Vespers. At '
                 'Matins: one canon of two troparia and a Theotokion to the ode; the sessional hymn after Ode III; '
                 'the kontakion after Ode VI with NO ikos; no exapostilarion. At Liturgy only the troparion and '
                 'kontakion are printed.'),
        'troparion': troparion, 'kontakion': kontakion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
