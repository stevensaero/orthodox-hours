# 12-12C.pdf — COMMEMORATION OF OUR VENERABLE FATHER HERMAN, WONDERWORKER OF ALASKA
# (17 pages). The page is headed "THE 12th DAY OF THE MONTH OF DECEMBER"; THE OCA KEEPS
# THE REPOSE OF ST. HERMAN ON 13 DECEMBER. RULED BY BILL, 16 Nov 2026 (Q-0018): the
# service is built into 13 December as its FIRST service (build_month.py), and the
# Menaion's own saints of the 13th are the secondary selection.
# Little Vespers; Great Vespers with three lessons, a Litiya and the blessing of the
# Loaves; Polyeleos with a Magnification; one canon printed (the Paraklisis is
# appointed, not printed); Great Doxology. Boundaries read off the extracted page,
# 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-12C')
    t, r = s.t, s.r
    s.mark(5, 62, 242, 552)
    s.mark(313, 334, 362, 383, 405, 446, 466, 488)

    sites = [t(52, 55, 'a'), t(230, 233, 'b'), t(244, 247, 'c'), t(584, 587, 'd')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(583)
    troparion = t(52, 55, 'Troparion of the venerable one', sl=51, verified_sites=[
        {'locus': 'p2 end of Little Vespers', 'tone': 4},
        {'locus': 'p7 blessing of the Loaves', 'tone': 4, 'repeat': 2},
        {'locus': 'p8 God is the Lord', 'tone': 4, 'repeat': 2},
        {'locus': 'p16 AT LITURGY', 'tone': 4}])
    assert same(t(432, 436, 'k1'), t(590, 594, 'k2')), 'kontakion sites diverge'
    s.mark(589)
    kontakion = t(432, 436, 'Kontakion of the venerable one', sl=431,
                  verified_sites=[{'locus': 'p12 after Ode VI', 'tone': 8}, {'locus': 'p17 AT LITURGY', 'tone': 8}])
    ikos = t(438, 445, 'Ikos', pre='Ikos: ')

    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'aposticha_rubric', 'aposticha',
                  'aposticha_glory', 'aposticha_closer', 'troparion', 'troparion_closer'],
        'lic_rubric': r(6, 6, 'Little Vespers LIC rubric'),
        'lic': s.seq(8, [11, 14, 17], 'Little Vespers LIC', sm=7, first={'tone': 1}),
        'lic_glory': t(19, 25, 'Little Vespers LIC Glory', sl=18),
        'lic_closer': t(27, 28, 'Little Vespers LIC Both now, Theotokion', sl=26, type='theotokion'),
        'aposticha_rubric': r(29, 29, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(31, 32, 'Little Vespers Aposticha 1', sm=30, label='plain', tone=2),
            t(33, 33, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(34, 35, 'Little Vespers Aposticha 2', sm=30, label='plain'),
            t(36, 37, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(38, 39, 'Little Vespers Aposticha 3', sm=30, label='plain'),
        ],
        'aposticha_glory': t(42, 46, 'Little Vespers Aposticha Glory', sl=41),
        'aposticha_closer': t(48, 50, 'Little Vespers Aposticha Both now, Theotokion', sl=47, type='theotokion'),
        # Printed "Glory ..., Both now ..., Theotokion:" with no tone here and at Matins; the
        # same hymn is labelled "in Tone IV" at Great Vespers (p7).
        'troparion_closer': t(57, 60, 'Little Vespers dismissal Theotokion', sl=56, type='theotokion', tone=4),
    }

    # p4: the fifth sticheron of the second set breaks off in print, "wherefore, teach
    # us", with no close and no pointing of an ending; the Glory follows on the next line.
    lic8 = t(105, 108, 'LIC 8', sm=81, label='plain')
    assert lic8['text'].endswith('** wherefore, teach us'), lic8['text'][-40:]
    lic8['provenance_note'] = ('The sticheron breaks off in print: it ends "wherefore, teach us", with no close '
                               '(p4; confirmed by a second extraction). Stored as printed.')

    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon', 'entrance_rubric', 'readings',
                  'litiya_rubric', 'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric', 'no_vigil_rubric', 'troparion_closer'],
        'rubric': r(63, 63, 'Great Vespers rubric'),
        # "8 Stichera: 3 Stichera, in Tone III:" then "And 5 Stichera, in Tone VI:". All
        # eight are printed.
        'lic_rubric': r(64, 64, 'LIC rubric'),
        'lic': s.seq(65, [69, 74, 79], 'LIC', label='plain', first={'tone': 3}) + [
            t(82, 86, 'LIC 4', sl=80, sm=81, label='plain'),
            t(87, 91, 'LIC 5', sm=81, label='plain'),
            t(92, 97, 'LIC 6', sm=81, label='plain'),
            t(99, 104, 'LIC 7', sm=81, label='plain'),
            lic8,
        ],
        'lic_glory': t(110, 114, 'LIC Glory', sl=109),
        # "in the same tone": the tone of the Glory before it (Tone VI).
        'dogmatikon': t(116, 121, 'LIC Both now, Dogmatic Theotokion', sl=115, type='dogmatic_theotokion', tone=6),
        'entrance_rubric': r(122, 122, 'Entrance'),
        'readings': [
            s.reading_id(123, 135, 'Lesson 1', {'book': 'Wisdom of Solomon', 'chapter': 3, 'verses': '1-9'},
                'No reference printed. Opens "The souls of the righteous are in the hand of God", closes "and He hath '
                'care for His elect": Wisdom 3:1-9. Identified by first and last words; confirm against the page.'),
            s.reading_id(137, 153, 'Lesson 2', {'book': 'Wisdom of Solomon', 'chapter': 5, 'verses': '5:15-6:3'},
                'No reference printed. Opens "The righteous live for evermore", closes "sovereignty from the Most '
                'High": Wisdom 5:15-6:3. Identified by first and last words; confirm against the page.'),
            s.reading_id(154, 165, 'Lesson 3', {'book': 'Wisdom of Solomon', 'chapter': 4, 'verses': '7-15'},
                'No reference printed. Opens "Though the righteous be prevented with death", closes "unto His chosen": '
                'Wisdom 4:7-15, as 12-06 Lesson 3. Identified by first and last words; confirm against the page.'),
        ],
        # "At Litiya, the Sticheron of the temple, and this of the venerable one, in Tone VIII:"
        'litiya_rubric': r(166, 166, 'Litiya rubric'),
        'litiya': [t(167, 175, 'Litiya 1', label='plain', tone=8)],
        'litiya_glory': t(178, 184, 'Litiya Glory', sl=177),
        'litiya_closer': t(186, 187, 'Litiya Both now, Theotokion', sl=185, type='theotokion'),
        'aposticha_rubric': r(188, 188, 'Aposticha rubric'),
        'aposticha': [
            t(190, 196, 'Aposticha 1', sm=189, label='plain', tone=5),
            t(197, 197, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(198, 204, 'Aposticha 2', sm=189, label='plain'),
            t(205, 206, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(207, 215, 'Aposticha 3', sm=189, label='plain'),
        ],
        'aposticha_glory': t(218, 222, 'Aposticha Glory', sl=217),
        # "in the same tone": the tone of the Glory before it (Tone VI).
        'aposticha_closer': t(224, 228, 'Aposticha Both now, Theotokion', sl=223, type='theotokion', tone=6),
        'troparion_rubric': r(229, 229, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(234, 234, 'Virgin Theotokos rejoice rubric'),
        'no_vigil_rubric': r(235, 235, 'If a vigil is not served'),
        'troparion_closer': t(237, 240, 'Dismissal Theotokion (no vigil)', sl=236, type='theotokion'),
    }

    mr, mt = s.split_inline(272, 274, 'magnification rubric', 'Magnification')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'god_is_lord_rubric': r(243, 243, 'God is the Lord rubric'),
        'troparion_closer': t(249, 252, 'God is the Lord Theotokion', sl=248, type='theotokion', tone=4),
        'sessional_1': [
            t(255, 259, 'Sessional 1', sl=253, sm=254, label='plain'),
            t(261, 262, 'Sessional 1 Theotokion', sl=260, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(265, 268, 'Sessional 2', sl=263, sm=264, label='plain'),
            t(270, 271, 'Sessional 2 Theotokion', sl=269, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(275, 275, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(276, 277, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(278, 278, 'after the selected verses'),
        'sessional_polyeleos': [
            t(282, 285, 'Polyeleos sessional', sl=280, sm=281, label='plain'),
            t(287, 290, 'Polyeleos sessional Theotokion', sl=286, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(291, 291, 'Song of Ascents rubric'),
        'prokeimenon': t(292, 293, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(294, 295, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(296, 296, 'Let every breath'),
        'gospel': s.reading(297, 303, 'Matins Gospel', 'GOSPEL ACCORDING TO MATTHEW,', '§43 (MT. 11: 27-30)',
                            {'book': 'Matthew', 'chapter': 11, 'verses': '27-30', 'pericope_number': 43}),
        'psalm50_sticheron': t(305, 309, 'After Psalm 50 sticheron', sl=304),
        'canon_rubric': r(310, 312, 'Canon rubric'),
        'canons': [{
            'title': s.raw(310, 312),
            'acrostic': 'Let us love God more than all, and Herman let us hymn',
            'tone': 3,
            'odes': {
                1: s.ode(1, (314, 316), [320, 323, 326, 330, 333]),
                3: s.ode(3, (335, 337), [340, 343, 346, 349]),
                4: s.ode(4, (363, 365), [369, 374, 379, 382]),
                5: s.ode(5, (384, 386), [390, 394, 398, 401, 404]),
                6: s.ode(6, (406, 408), [413, 417, 421, 425, 430]),
                7: s.ode(7, (447, 449), [454, 458, 462, 465]),
                8: s.ode(8, (467, 469), [474, 479, 483, 487]),
                9: s.ode(9, (489, 492), [496, 500, 503, 506, 510]),
            },
        }],
        'sessional_ode3': [
            t(352, 355, 'Ode III sessional', sl=350, sm=351, label='plain'),
            t(358, 361, 'Ode III sessional Theotokion', sl=357, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'exapostilarion': t(513, 515, 'Exapostilarion', sl=511, sm=512, label='plain'),
        'exapostilarion_closer': t(518, 521, 'Exapostilarion Theotokion', sl=517, type='theotokion'),
        'praises_rubric': r(522, 522, 'Praises rubric'),
        'praises': s.seq(524, [528, 532, 536, 540], 'Praises', sm=523, label='plain', first={'tone': 8}),
        'praises_glory': t(542, 546, 'Praises Glory', sl=541),
        'praises_closer': t(548, 549, 'Praises Both now, Theotokion', sl=547, type='theotokion'),
        'great_doxology_rubric': r(550, 550, 'Great Doxology. Troparion. Litanies. Dismissal. First Hour.'),
    }
    for a, b in ((little_vespers['troparion_closer'], great_vespers['troparion_closer']),
                 (little_vespers['troparion_closer'], matins['troparion_closer']),
                 (little_vespers['lic_glory'], great_vespers['litiya_glory']),
                 (little_vespers['lic_closer'], great_vespers['litiya_closer'])):
        assert same(a, b), 'two printings diverge: %s' % a['text'][:40]
    # The Tone VI Glory is printed three times. The two Vespers printings agree; after
    # Psalm 50 (p9) it opens "Hath the bosom of the earth or the fleeting years" where
    # they open "Have the fleeting years or the bosom of the earth". Each is stored as
    # printed; the variant is in known_recurrences.js.
    g_gv, g_50 = great_vespers['lic_glory']['text'], matins['psalm50_sticheron']['text']
    assert same(little_vespers['aposticha_glory'], great_vespers['lic_glory'])
    assert g_50 != g_gv and g_50.replace('Hath the bosom of the earth or the fleeting years',
                                         'Have the fleeting years or the bosom of the earth') == g_gv

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(553, 554, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 555, 558), ('t', 559, 561), ('t', 562, 564), ('t', 565, 569),
                             ('t', 570, 573), ('t', 574, 577), ('theot', 578, 582)], 'Beatitude'),
        'prokeimenon': t(595, 596, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(597, 598, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(599, 606, 'Epistle', 'EPISTLE TO THE GALATIANS,', '§213 (5: 22-6: 2)',
                             {'book': 'Galatians', 'chapter': 5, 'verses': '5:22-6:2', 'pericope_number': 213}),
        'alleluia': t(607, 608, 'Alleluia', pre='Alleluia, in Tone VI: '),
        'alleluia_verse': t(609, 609, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(610, 621, 'Gospel', 'GOSPEL ACCORDING TO LUKE:', '§ 24 (LK. 6: 17-23)',
                            {'book': 'Luke', 'chapter': 6, 'verses': '17-23', 'pericope_number': 24}),
        'communion_verse': t(622, 623, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title lines.
        'name': 'our venerable father Herman, Wonderworker of Alaska',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': True,
        'printed_under': '12-12',
        'source_file': s.file,
        'note': ('PRINTED UNDER 12 DECEMBER, SERVED ON 13 DECEMBER. The page is headed "THE 12th DAY OF THE MONTH OF '
                 'DECEMBER" (file 12-12C, beside St. Spyridon); the OCA calendar keeps the Repose of Venerable Herman '
                 'of Alaska on 13 December (oca.org, 16 Nov 2026). Ruled by Bill, 16 Nov 2026 (Q-0018): the tool '
                 'follows the OCA and favors the North American saint, so this is the FIRST service of 13 December '
                 'and the Menaion\'s martyrs of that day are the secondary selection. '
                 'Rank by the '
                 'encoding_rule_v2.md 1.1 waterfall, step 2: the Menaion prints a LITTLE VESPERS for the saint, so '
                 'Vigil, Fekula 2F. ODS vol. III has no 12-12 or 12-13 entry for him. Great Vespers with "Blessed is '
                 'the man", 8 stichera all printed (3 in Tone III, 5 in Tone VI), the Dogmatic Theotokion, three '
                 'lessons with NO reference printed (citations are identifications), a Litiya, the blessing of the '
                 'Loaves, and "if a vigil is not served" a Theotokion after the troparion. Matins: a sessional hymn '
                 'and Theotokion at each kathisma and after the Polyeleos; a Magnification and Selected Psalm verse; '
                 'a Gospel; "Canon of supplication to the Theotokos (the Paraklisis), with 6 Troparia, including the '
                 'Irmos" is appointed and NOT printed; the canon of the venerable one, with 8, is printed; Great '
                 'Doxology. FAULTS IN PRINT: the last sticheron at Lord I have cried breaks off ("wherefore, teach '
                 'us"); the Tone VI Glory is printed three times and the printing after Psalm 50 opens with its first two phrases in the other order. At Liturgy the rubric '
                 'appoints 8 Beatitude troparia, 4 from Ode III and 4 from Ode VI; three (the first Twice), three and '
                 'the Theotokion of Ode VI are printed.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
