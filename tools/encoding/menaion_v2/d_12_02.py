# 12-02.pdf — COMMEMORATION OF THE HOLY PROPHET HABBAKUK (7 pages)
# A simple service: 3 stichera, one canon, no aposticha printed. Boundaries read off
# the extracted page, 15 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('12-02')
    t, r = s.t, s.r
    s.mark(4, 51, 191)
    s.mark(53, 67, 97, 109, 121, 145, 158, 174)

    assert same(t(48, 49, 'tr1'), t(193, 194, 'tr2')), 'troparion sites diverge'
    s.mark(192)
    troparion = t(48, 49, 'Troparion of the holy prophet', sl=47,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 2}, {'locus': 'p7 AT LITURGY', 'tone': 2}])
    # R-1: the kontakion is printed twice and the two sites DIFFER (p5 "angel: * and
    # proclaimed ... to the world. *"; p7 "angel, and proclaimed ... to the world. *").
    # The Ode VI site is the canonical field; the Liturgy site is stored at its own position.
    kontakion = t(140, 144, 'Kontakion of the holy prophet', sl=138, sm=139,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 8}])
    liturgy_kontakion = t(196, 200, 'Kontakion at Liturgy', sl=195)
    assert not same(kontakion, liturgy_kontakion), 'p7 kontakion now matches p5: fold it back into the canonical field'

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion', 'troparion'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [10, 14, 18], 'LIC', sm=6, label='plain', first={'tone': 4}),
        'theotokos_stichera_rubric': r(19, 20, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(21, [25, 30, 34], 'Sticheron of the Theotokos', label='plain'),
        # Both labels read "in the same melody": the melody, and so the tone, of the stichera (Tone IV).
        'lic_closer': t(36, 39, 'LIC Glory/Both now Theotokion', sl=35, type='theotokion', tone=4),
        'lic_stavrotheotokion': t(42, 46, 'LIC Stavrotheotokion', sl=41, type='stavrotheotokion', tone=4),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion'],
        'canon_rubric': r(52, 52, 'Canon rubric'),
        'canons': [{
            # The canon's own title is printed UNDER the "ODE I" heading.
            'title': s.raw(54, 55),
            'composer': 'Theophanes',
            'acrostic': 'I hymn thee, O blessed prophet Habbakuk',
            'tone': 4,
            'odes': {
                1: s.ode(1, (56, 58), [60, 62, 64, 66]),
                3: s.ode(3, (68, 69), [72, 74, 76, 79]),
                4: s.ode(4, (98, 99), [102, 104, 106, 108]),
                5: s.ode(5, (110, 112), [114, 116, 118, 120]),
                6: s.ode(6, (122, 124), [128, 131, 134, 137]),
                7: s.ode(7, (146, 148), [151, 154, 157]),
                8: s.ode(8, (159, 161), [165, 168, 170, 173]),
                9: s.ode(9, (175, 177), [180, 183, 186, 189]),
            },
        }],
        'sessional_ode3': [
            t(82, 85, 'Ode III sessional', sl=80, sm=81, label='plain'),
            t(88, 91, 'Ode III sessional Theotokion', sl=87, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(92, 96, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
    }

    liturgy = {'order': ['troparion', 'liturgy_kontakion'], 'liturgy_kontakion': liturgy_kontakion}

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title line.
        'name': 'the holy Prophet Habbakuk',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the prophet at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. ODS vol. III has no 12-02 entry. The page prints three '
                 'stichera of the Theotokos to be sung first "if Alleluia be chanted at Matins". The Glory/Both now '
                 'Theotokion and the Stavrotheotokion are both labelled "in the same melody" (Tone IV, of the '
                 'stichera). No Glory of the saint, no aposticha and no aposticha rubric are printed at Vespers. At '
                 'Matins: one canon, whose title is printed under the ODE I heading; the sessional hymn after Ode III; '
                 'the kontakion after Ode VI with NO ikos; no exapostilarion. The kontakion is printed twice and the '
                 'two sites differ in pointing and punctuation: the Liturgy site is stored at its own position. At '
                 'Liturgy only the troparion and kontakion are printed.'),
        'troparion': troparion, 'kontakion': kontakion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
