# 11-26A.pdf — COMMEMORATION OF OUR FATHER AMONG THE SAINTS, INNOCENT, BISHOP
# OF IRKUTSK, THE WONDERWORKER (16 pages). Second commemoration of 26 November
# (c1). Great Vespers with Litiya and the blessing of the Loaves; Polyeleos;
# Great Doxology. Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('11-26A')
    t, r = s.t, s.r
    s.mark(5, 182, 505)
    s.mark(256, 276, 310, 328, 350, 389, 406, 428)
    assert s.raw(328) == 'OODDEE VV' and s.raw(406) == 'OODDEE VVIIIIII', (s.raw(328), s.raw(406))

    sites = [t(170, 173, 'a'), t(184, 187, 'b'), t(494, 497, 'c'), t(538, 541, 'd')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(493, 537)
    troparion = t(170, 173, 'Troparion of the holy hierarch', sl=169)
    troparion.pop('repeat', None)
    troparion['verified_sites'] = [
        {'locus': 'p5 blessing of the Loaves', 'tone': 3, 'repeat': 2},
        {'locus': 'p6 God is the Lord', 'tone': 3, 'repeat': 2},
        {'locus': 'p14 after the Great Doxology', 'tone': 3},
        {'locus': 'p15 AT LITURGY', 'tone': 3}]
    # The Liturgy print site (p16) carries the same words with DIFFERENT POINTING.
    # R-1: the canonical field holds the Ode VI text; the Liturgy text is stored
    # apart as `liturgy_kontakion` (as 11-14 does for its troparion).
    assert not same(t(372, 375, 'k1'), t(544, 547, 'k2')), 'kontakion sites now match: fold into verified_sites'
    kontakion = t(372, 375, 'Kontakion of the holy hierarch', sl=371,
                  verified_sites=[{'locus': 'p10 after Ode VI', 'tone': 4}])
    ikos = t(376, 388, 'Ikos', pre='Ikos: ')

    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric',
                  'no_vigil_rubric', 'troparion_closer'],
        'rubric': r(6, 6, 'Great Vespers rubric'),
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(8, [14, 19, 24, 29, 35], 'LIC', first={'tone': 6}),
        'lic_glory': t(37, 48, 'LIC Glory', sl=36),
        'dogmatikon': t(50, 55, 'LIC Both now, Dogmatic Theotokion', sl=49, type='dogmatic_theotokion'),
        'entrance_rubric': r(56, 56, 'Entrance'),
        'readings': [
            s.reading_id(57, 75, 'Lesson 1', {'book': 'Isaiah', 'chapter': 35, 'verses': '1-10'},
                'No reference printed. The body opens "The wilderness and the solitary place shall be glad" and closes '
                '"sorrow and sighing shall flee away": Isaiah 35:1-10 in the King James wording. Identified by first '
                'and last words; confirm against the page.'),
            s.reading_id(76, 89, 'Lesson 2', {'book': 'Wisdom of Solomon', 'chapter': 3, 'verses': '1-9'},
                'No reference printed. Opens "But the souls of the righteous are in the hand of God", closes "care for '
                'his elect": Wisdom 3:1-9. Identified by first and last words; confirm against the page.'),
            s.reading_id(90, 101, 'Lesson 3', {'book': 'Wisdom of Solomon', 'chapter': 4, 'verses': '7-15'},
                'No reference printed. Opens "But though the righteous be prevented with death", closes "respect unto '
                'his chosen": Wisdom 4:7-15. Identified by first and last words; confirm against the page.'),
        ],
        'litiya': [
            t(103, 108, 'Litiya 1', sl=102, label='plain'),
            t(109, 115, 'Litiya 2', label='plain'),
            t(116, 121, 'Litiya 3', label='plain'),
        ],
        'litiya_glory': t(124, 128, 'Litiya Glory', sl=123),
        'litiya_closer': t(130, 135, 'Litiya Both now, Theotokion', sl=129, type='theotokion'),
        'aposticha_rubric': r(136, 136, 'Aposticha rubric'),
        'aposticha': [
            t(137, 141, 'Aposticha 1', label='plain', tone=7),
            t(142, 143, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(144, 148, 'Aposticha 2', label='plain'),
            t(149, 149, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(150, 154, 'Aposticha 3', label='plain'),
        ],
        'aposticha_glory': t(156, 162, 'Aposticha Glory', sl=155),
        'aposticha_closer': t(165, 168, 'Aposticha Both now, Theotokion', sl=164, type='theotokion'),
        'troparion_rubric': r(169, 169, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(174, 174, 'Virgin Theotokos rejoice rubric'),
        'no_vigil_rubric': r(175, 175, 'If a vigil is not served'),
        'troparion_closer': t(177, 180, 'Dismissal Theotokion (no vigil)', sl=176, type='theotokion'),
    }

    mr, mt = s.split_inline(215, 217, 'megalynarion rubric', 'Megalynarion')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse', 'megalynarion_closing_rubric',
                  'sessional_polyeleos', 'anabathmoi_rubric', 'prokeimenon', 'prokeimenon_verse',
                  'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
                  'great_doxology_rubric', 'doxology_theotokion', 'closing_rubric'],
        'god_is_lord_rubric': r(183, 183, 'God is the Lord rubric'),
        'troparion_closer': t(189, 192, 'God is the Lord Theotokion', sl=188, type='theotokion'),
        'sessional_1': [
            t(194, 199, 'Sessional 1', sl=193, label='plain'),
            t(201, 203, 'Sessional 1 Theotokion', sl=200, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(205, 210, 'Sessional 2', sl=204, label='plain'),
            t(212, 214, 'Sessional 2 Theotokion', sl=211, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse': t(218, 218, 'Megalynarion verse', pre='Verse: ', label='refrain'),
        'megalynarion_closing_rubric': r(219, 219, 'after the verse'),
        'sessional_polyeleos': [
            t(222, 226, 'Polyeleos sessional', sl=221, label='plain'),
            t(228, 229, 'Polyeleos sessional Theotokion', sl=227, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(230, 230, 'Song of Ascents rubric'),
        'prokeimenon': t(231, 232, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(233, 234, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(235, 235, 'Let every breath'),
        'gospel': s.reading(236, 246, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. MATTHEW', '(5:14-19)',
                            {'book': 'Matthew', 'chapter': 5, 'verses': '14-19'}),
        'psalm50_sticheron': t(248, 252, 'After Psalm 50 sticheron', sl=247),
        'canon_rubric': r(253, 255, 'Canon rubric'),
        'canons': [{
            'title': s.raw(253, 255),
            'acrostic': 'Innocent, intercessor for our souls',
            'tone': 8,
            'odes': {
                1: s.ode(1, (257, 259), [263, 267, 271, 274], kat=275),
                3: s.ode(3, (277, 279), [283, 287, 290, 294]),
                4: s.ode(4, (311, 312), [316, 320, 323, 327]),
                5: s.ode(5, (329, 331), [335, 339, 344, 349]),
                6: s.ode(6, (351, 352), [357, 362, 367, 370]),
                7: s.ode(7, (390, 392), [396, 399, 402, 405]),
                8: s.ode(8, (407, 409), [413, 417, 422, 427]),
                9: s.ode(9, (429, 431), [434, 438, 442, 447]),
            },
        }],
        'sessional_ode3': [
            t(296, 299, 'Ode III sessional', sl=295, label='plain'),
            t(302, 305, 'Ode III sessional, Glory', sl=301, label='glory'),
            t(307, 309, 'Ode III sessional Theotokion', sl=306, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'exapostilarion': t(449, 454, 'Exapostilarion', sl=448, label='plain'),
        'exapostilarion_closer': t(457, 460, 'Exapostilarion Theotokion', sl=456, type='theotokion'),
        'praises_rubric': r(461, 461, 'Praises rubric'),
        'praises': s.seq(462, [465, 471, 477, 481], 'Praises', first={'tone': 8}),
        'praises_glory': t(483, 487, 'Praises Glory', sl=482),
        'praises_closer': t(489, 490, 'Praises Both now, Theotokion', sl=488, type='theotokion'),
        'great_doxology_rubric': r(491, 491, 'Great Doxology. Troparion.'),
        'doxology_theotokion': t(499, 502, 'Theotokion after the Great Doxology', sl=498, type='theotokion'),
        'closing_rubric': r(503, 503, 'Litanies. Dismissal. First Hour.'),
    }
    assert same(great_vespers['troparion_closer'], matins['troparion_closer'], matins['doxology_theotokion']), \
        'the three printings of the Tone III theotokion diverge'

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'liturgy_kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'gospel', 'communion_verse'],
        'liturgy_kontakion': t(544, 547, 'Kontakion at Liturgy', sl=543),
        'beatitudes_rubric': r(506, 507, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 508, 511), ('t', 512, 515), ('t', 516, 518), ('t', 519, 523),
                             ('t', 524, 528), ('t', 529, 533), ('theot', 534, 536)], 'Beatitude'),
        'prokeimenon': t(548, 549, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone I: '),
        'prokeimenon_verse': t(550, 550, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(551, 560, 'Epistle', 'THE EPISTLE OF ST. PAUL TO THE HEBREWS', '(7:26-8:2).',
                             {'book': 'Hebrews', 'chapter': 7, 'verses': '7:26-8:2'}),
        'alleluia': t(561, 562, 'Alleluia', pre='Alleluia, in Tone I: '),
        'gospel': s.reading(563, 575, 'Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '(1O:9-16).',
                            {'book': 'John', 'chapter': 10, 'verses': '9-16'}),
        'communion_verse': t(576, 577, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: AT GREAT VESPERS with 8 stichera, three lessons, a '
                 'LITIYA ("the Sticheron of the temple, and these Stichera"), the blessing of the Loaves, Polyeleos '
                 'with a megalynarion, and the Great Doxology: stored Vigil, Fekula 2F PROVISIONALLY (open question Q-0002: ODS vol. III has no entry for this date, and it shows that a printed Litiya does not by itself prove Vigil rank, since its polyeleos-rank outlines can carry a Litia at the rector\'s direction). The page also prints "But if a '
                 'vigil is not served" with a dismissal theotokion, so a lesser form is provided for; no Little '
                 'Vespers is printed. Second file of 26 November; the first (11-26) is Alypius the Stylite, a simple '
                 'service. Which of the two a parish serves is the same kind of question as Q-0002. The canon rubric '
                 'appoints the Paraklisis canon of the Theotokos first; only the hierarch\'s canon is printed. Ode I '
                 'ends with the katavasia given as an incipit, "Christ is born ...,". The three lessons print no '
                 'reference; citations are identifications. The Liturgy Gospel citation prints a capital letter O for '
                 'the zero: "(1O:9-16)."; the troparion and its theotokion are printed again after the Great Doxology. The kontakion is pointed differently at its Liturgy site and is stored there as `liturgy_kontakion`.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'great_vespers', 'matins', 'liturgy']
