# 12-12.pdf — COMMEMORATION OF OUR VENERABLE FATHER SPYRIDON THE WONDERWORKER, BISHOP
# OF TREMITHUS (10 pages). Six stichera (three printed, each Twice); two troparia
# ("Or this Troparion"); a note on Greek usage with Praises stichera for a Doxology
# service. Boundaries read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-12')
    t, r = s.t, s.r
    s.mark(5, 71, 304)
    s.mark(74, 91, 134, 151, 168, 192, 209, 227)

    assert same(t(58, 61, 'tr1'), t(321, 324, 'tr2')), 'troparion sites diverge'
    s.mark(320)
    troparion = t(58, 61, 'Troparion of the holy hierarch', sl=57,
                  verified_sites=[{'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p9 AT LITURGY', 'tone': 4}])
    assert same(t(63, 69, 'a1'), t(326, 332, 'a2')), 'alternate troparion sites diverge'
    assert same(t(182, 185, 'k1'), t(334, 337, 'k2')), 'kontakion sites diverge'
    s.mark(333)
    kontakion = t(182, 185, 'Kontakion of the holy hierarch', sl=180, sm=181,
                  verified_sites=[{'locus': 'p5 after Ode VI', 'tone': 2}, {'locus': 'p9 AT LITURGY', 'tone': 2}])
    ikos = t(186, 190, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion',
                  'troparion', 'troparion_alternate_rubric', 'troparion_alternate'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [12, 19, 26], 'LIC', sm=7, first={'tone': 5}),
        'lic_glory': t(28, 35, 'LIC Glory', sl=27),
        'lic_closer_rubric': r(36, 36, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(38, 42, 'LIC Stavrotheotokion', sm=37, type='stavrotheotokion',
                                  sourceLabel=s.raw(36).rstrip(':')),
        # "The Aposticha from the Oktoechos; Glory ..., to the saint, in Tone II:" is one line.
        'aposticha_glory': t(45, 49, 'Aposticha Glory', sl=44),
        'aposticha_closer_rubric': r(50, 50, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(52, 56, 'Aposticha Stavrotheotokion', sm=51, pre='Stavrotheotokion: ',
                                        type='stavrotheotokion'),
        'troparion_alternate_rubric': r(62, 62, 'Or this Troparion rubric'),
        'troparion_alternate': t(63, 69, 'Or this Troparion', sourceLabel='Or this Troparion, in Tone I', tone=1),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion_glory', 'exapostilarion_closer',
                  'aposticha_rubric', 'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion',
                  'usage_rubric', 'praises_rubric', 'praises', 'praises_glory', 'praises_closer_rubric',
                  'praises_stavrotheotokion'],
        'canon_rubric': r(72, 73, 'Canon rubric'),
        'canons': [{
            'title': s.raw(72, 73),
            'composer': 'Theophanes',
            'tone': 2,
            'odes': {
                1: s.ode(1, (75, 77), [80, 84, 87, 90]),
                3: s.ode(3, (92, 95), [98, 102, 105, 108]),
                4: s.ode(4, (135, 137), [140, 143, 146, 149]),
                5: s.ode(5, (152, 154), [157, 160, 163, 167]),
                6: s.ode(6, (169, 170), [172, 174, 176, 179]),
                7: s.ode(7, (193, 195), [198, 201, 204, 208]),
                8: s.ode(8, (210, 212), [216, 219, 223, 226]),
                9: s.ode(9, (228, 230), [235, 238, 241, 245]),
            },
        }],
        'sessional_ode3': [
            t(112, 118, 'Ode III sessional', sl=110, sm=111, label='plain'),
            # "in the same melody": the melody, and so the tone, of the sessional hymn (Tone VIII).
            t(120, 126, 'Ode III sessional Theotokion', sl=119, type='theotokion', tone=8,
              label=['glory', 'both_now', 'theotokion']),
            t(127, 133, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        # "Exapostilarion from the Oktoechos; Glory ..., that of the holy hierarch:"
        'exapostilarion_glory': t(248, 250, 'Exapostilarion of the holy hierarch, at Glory', sl=246, sm=247),
        'exapostilarion_closer': t(251, 253, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
        'aposticha_rubric': r(254, 254, 'Matins Aposticha rubric'),
        'aposticha_glory': t(256, 263, 'Matins Aposticha Glory', sl=255),
        'aposticha_closer_rubric': r(264, 264, 'Matins Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(266, 269, 'Matins Aposticha Stavrotheotokion', sm=265, type='stavrotheotokion',
                                        sourceLabel=s.raw(264).rstrip(':')),
        # p8: "N.B. In Greek usage, the service to St. Spyridon is of Doxology rank ... if Greek
        # usage is followed, On the Praises:" and then the Praises stichera with the same
        # Glory and Stavrotheotokion as the Matins aposticha.
        'usage_rubric': r(271, 273, 'N.B. Greek usage: Doxology rank'),
        'praises_rubric': r(274, 274, 'Praises rubric'),
        'praises': s.seq(276, [279, 283, 287], 'Praises', sm=275, first={'tone': 1}),
        'praises_glory': t(289, 296, 'Praises Glory', sl=288),
        'praises_closer_rubric': r(297, 297, 'Praises Both now rubric'),
        'praises_stavrotheotokion': t(299, 302, 'Praises Stavrotheotokion', sm=298, type='stavrotheotokion',
                                      sourceLabel=s.raw(297).rstrip(':')),
    }
    # The Tone IV Glory is printed twice and the two printings DIFFER in one word:
    # "all-praised" at the aposticha (p8), "most praised" on the Praises (p8). Each is
    # stored as printed; the variant is in known_recurrences.js.
    assert not same(matins['aposticha_glory'], matins['praises_glory'])
    assert matins['aposticha_glory']['text'].replace('all-praised', 'most praised') == matins['praises_glory']['text']
    assert same(matins['aposticha_stavrotheotokion'], matins['praises_stavrotheotokion']), \
        'the two printings of the Stavrotheotokion diverge'

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'troparion_alternate_rubric', 'troparion_alternate',
                  'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(305, 306, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 307, 309), ('t', 310, 313), ('t', 314, 316), ('theot', 317, 319)], 'Beatitude'),
        'troparion_alternate_rubric': r(325, 325, 'Or this Troparion rubric (Liturgy)'),
        'troparion_alternate': t(326, 332, 'Or this Troparion (Liturgy)', sourceLabel='Or this Troparion, in Tone I', tone=1),
        'prokeimenon': t(338, 339, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone I: '),
        'prokeimenon_verse': t(340, 340, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(342, 351, 'Epistle', 'THE EPISTLE TO THE HEBREWS', '(13:17-21)',
                             {'book': 'Hebrews', 'chapter': 13, 'verses': '17-21'}),
        'alleluia': t(352, 353, 'Alleluia', pre='Alleluia, in Tone II: '),
        'alleluia_verse': t(354, 354, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(355, 366, 'Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(6:17-23)',
                            {'book': 'Luke', 'chapter': 6, 'verses': '17-23'}),
        'communion_verse': t(367, 368, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title lines.
        'name': 'our father among the saints Spyridon the Wonderworker, Bishop of Tremithus',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2C',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: SIX stichera of one saint at Lord I have cried (three '
                 'printed, each marked Twice), a Matins aposticha with a Glory, and no Great Doxology in the service '
                 'as the Slavonic Menaion has it: six-stichera, Fekula 2C. ODS vol. III has no 12-12 entry. THE PAGE '
                 'ITSELF NOTES (p8): "In Greek usage, the service to St. Spyridon is of Doxology rank, rather than of '
                 'six-Stichera rank, as in the Slavonic Menaion", and prints Praises stichera for that usage, with the '
                 'same Glory (one word differs between the two printings: "all-praised", "most praised") and Stavrotheotokion as the Matins aposticha. Both are stored; the rank follows the '
                 'Slavonic service. Two troparia: the general one of a hierarch with the name written in (Tone IV), '
                 'and "Or this Troparion, in Tone I", printed at Vespers and at Liturgy. The canon by Theophanes is '
                 'appointed "with 6 Troparia" (three and a Theotokion are printed in each ode), the Oktoechos canons '
                 '"without their martyria". At Liturgy four Beatitude troparia from Ode III, readings printed.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
