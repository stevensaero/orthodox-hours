# 12-09A.pdf — COMMEMORATION OF THE MIRACULOUS ICON OF THE MOTHER OF GOD KNOWN AS
# "UNEXPECTED JOY" (17 pages). Second file of 9 December (c1). Little Vespers; Great
# Vespers with three lessons, a Litiya and the blessing of the Loaves; Polyeleos with
# a Magnification; two canons of the Theotokos interleaved in print and stored whole;
# Great Doxology. Boundaries read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-09A')
    t, r = s.t, s.r
    s.mark(5, 47, 152, 519)
    s.mark(211, 241, 274, 301, 336, 376, 415, 454)
    c1_labels = [242, 275, 302, 337, 377, 416, 455]
    c2_labels = [255, 287, 318, 352, 395, 435, 473]
    for n in [212] + c1_labels:
        assert s.raw(n) == 'Canon I', (n, s.raw(n))
    for n in [229] + c2_labels:
        assert s.raw(n) == 'Canon II', (n, s.raw(n))
    s.mark(212, 229, *c1_labels, *c2_labels)

    sites = [t(41, 45, 'a'), t(145, 149, 'b'), t(154, 158, 'c'), t(512, 516, 'd'), t(543, 547, 'e')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(542)
    troparion = t(41, 45, 'Troparion of the holy icon', sl=40, verified_sites=[
        {'locus': 'p2 end of Little Vespers', 'tone': 4},
        {'locus': 'p5 blessing of the Loaves', 'tone': 4, 'repeat': 2},
        {'locus': 'p6 God is the Lord', 'tone': 4, 'repeat': 3},
        {'locus': 'p15 after the Great Doxology', 'tone': 4},
        {'locus': 'p16 AT LITURGY', 'tone': 4}])
    assert same(t(368, 370, 'k1'), t(549, 551, 'k2')), 'kontakion sites diverge'
    s.mark(548)
    kontakion = t(368, 370, 'Kontakion of the holy icon', sl=367,
                  verified_sites=[{'locus': 'p11 after Ode VI', 'tone': 6}, {'locus': 'p16 AT LITURGY', 'tone': 6}])
    ikos = t(371, 375, 'Ikos', pre='Ikos: ')

    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparion'],
        'lic_rubric': r(6, 6, 'Little Vespers LIC rubric'),
        'lic': s.seq(7, [10, 14, 17], 'Little Vespers LIC', first={'tone': 2}),
        'lic_closer': t(19, 22, 'Little Vespers LIC Glory/Both now', sl=18, type='of_the_feast'),
        'aposticha_rubric': r(23, 23, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(24, 26, 'Little Vespers Aposticha 1', label='plain', tone=5),
            t(27, 27, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(28, 31, 'Little Vespers Aposticha 2', label='plain'),
            t(32, 32, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(33, 35, 'Little Vespers Aposticha 3', label='plain'),
        ],
        'aposticha_closer': t(37, 38, 'Little Vespers Aposticha Glory/Both now', sl=36, type='of_the_feast'),
    }

    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric'],
        'rubric': r(48, 48, 'Great Vespers rubric'),
        'lic_rubric': r(49, 49, 'LIC rubric'),
        'lic': s.seq(50, [53, 57, 61], 'LIC', first={'tone': 2}),
        'lic_closer': t(63, 66, 'LIC Glory/Both now', sl=62, type='of_the_feast'),
        'entrance_rubric': r(67, 67, 'Entrance'),
        'readings': [
            s.reading_id(68, 82, 'Lesson 1', {'book': 'Genesis', 'chapter': 28, 'verses': '10-17'},
                'The heading names the book and prints no reference. The body opens "Jacob went forth from the well '
                'of the oath" and closes "this is the gate of heaven": Genesis 28:10-17, Jacob\'s ladder, as 11-27A '
                'Lesson 1. Identified by first and last words; confirm.'),
            s.reading_id(84, 95, 'Lesson 2', {'book': 'Ezekiel', 'chapter': 43, 'verses': '43:27-44:4'},
                'The heading names the book and prints no reference. Opens "Thus saith the Lord: It shall come to '
                'pass from the eighth day and onward", closes "I fell upon my face": Ezekiel 43:27-44:4, the shut '
                'gate, as 11-27A Lesson 2. Identified by first and last words; confirm.'),
            s.reading_id(96, 109, 'Lesson 3', {'book': 'Proverbs', 'chapter': 9, 'verses': '1-11'},
                'The heading names the book and prints no reference. Opens "Wisdom hath built a house for herself", '
                'closes "years of life shall be added to thee": Proverbs 9:1-11, which 11-27A prints with its '
                'reference. Identified by first and last words; confirm.'),
        ],
        'litiya': [t(111, 115, 'Litiya 1', sl=110, label='plain')],
        'litiya_closer': t(117, 121, 'Litiya Glory/Both now', sl=116, type='of_the_feast'),
        'aposticha_rubric': r(123, 123, 'Aposticha rubric'),
        'aposticha': [
            t(124, 127, 'Aposticha 1', label='plain', tone=4),
            t(128, 128, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(129, 134, 'Aposticha 2', label='plain'),
            t(135, 135, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(136, 139, 'Aposticha 3', label='plain'),
        ],
        'aposticha_closer': t(141, 143, 'Aposticha Glory/Both now', sl=140, type='of_the_feast'),
        'troparion_rubric': r(144, 144, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(150, 150, 'Virgin Theotokos rejoice rubric'),
    }

    mr, mt = s.split_inline(168, 170, 'magnification rubric', 'Magnification')
    # The label of the Polyeleos sessional hymn ends "in Tone Il-" in both extractions:
    # the tone is not legible from the text layer, and none is stored.
    assert s.raw(174) == 'After the Polyeleos, the Sessional Hymn, in Tone Il-', s.raw(174)
    poly = t(175, 181, 'Polyeleos sessional', sl=174, label='plain')
    poly['provenance_note'] = ('The label is printed "in Tone Il-" in both extractions (p6): the tone cannot be read '
                               'from the text layer and is not stored. To be read off the page image.')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer_rubric',
                  'praises_rubric', 'praises', 'praises_closer', 'great_doxology_rubric', 'closing_rubric'],
        'god_is_lord_rubric': r(153, 153, 'God is the Lord rubric'),
        # "the foregoing is repeated" is a REFERENCE DEVICE (spec 2.8): stored as printed.
        'sessional_1': [
            t(160, 162, 'Sessional 1', sl=159, label='plain'),
            t(163, 163, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(165, 166, 'Sessional 2', sl=164, label='plain'),
            t(167, 167, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(171, 171, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(172, 172, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(173, 173, 'after the selected verses'),
        'sessional_polyeleos': [
            poly,
            t(182, 182, 'Polyeleos sessional repeat device', device=False, label=['glory', 'both_now']),
        ],
        'anabathmoi_rubric': r(183, 183, 'Song of Ascents rubric'),
        'prokeimenon': t(184, 185, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(186, 186, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(187, 187, 'Let every breath'),
        'gospel': s.reading(189, 203, 'Matins Gospel', 'GOSPEL ACCORDING TO LUKE,', '§ 4 (LK. 1: 39-49, 56)',
                            {'book': 'Luke', 'chapter': 1, 'verses': '39-49, 56', 'pericope_number': 4}),
        'psalm50_sticheron': t(205, 208, 'After Psalm 50 sticheron', sl=204),
        'canon_rubric': r(209, 210, 'Canon rubric'),
        # Neither canon has a title line of its own: "Canon I" and "Canon II" under ODE I.
        'canons': [
            {'title': s.raw(212),
             'odes': {
                 1: s.ode(1, (213, 215), [218, 221, 224, 227]),
                 3: s.ode(3, (243, 245), [248, 250, 252, 254]),
                 4: s.ode(4, (276, 278), [280, 282, 284, 286]),
                 5: s.ode(5, (303, 305), [309, 311, 314, 317]),
                 6: s.ode(6, (338, 340), [343, 347, 349, 351]),
                 7: s.ode(7, (378, 381), [384, 388, 391, 394]),
                 8: s.ode(8, (417, 420), [423, 428, 431, 434]),
                 9: s.ode(9, (456, 459), [462, 466, 469, 472]),
             }},
            {'title': s.raw(229),
             'odes': {
                 1: s.ode(1, (230, 231), [234, 237, 239], kat=(240, 240)),
                 3: s.ode(3, (256, 258), [260, 262, 264, 266]),
                 4: s.ode(4, (288, 290), [293, 295, 297, 300]),
                 5: s.ode(5, (319, 321), [325, 329, 332, 335]),
                 6: s.ode(6, (353, 355), [358, 360, 363, 366]),
                 7: s.ode(7, (396, 400), [403, 407, 411, 414]),
                 8: s.ode(8, (436, 438), [442, 447, 451, 453]),
                 9: s.ode(9, (474, 476), [478, 482, 484, 487]),
             }},
        ],
        'sessional_ode3': [
            t(269, 272, 'Ode III sessional', sl=268, label='plain'),
            t(273, 273, 'Ode III sessional repeat device', device=False, label=['glory', 'both_now']),
        ],
        'exapostilarion': t(490, 492, 'Exapostilarion', sl=488, sm=489, label='plain'),
        'exapostilarion_closer_rubric': r(493, 493, 'Glory, Both now: the foregoing is repeated'),
        'praises_rubric': r(494, 494, 'Praises rubric'),
        'praises': s.seq(495, [498, 504], 'Praises', first={'tone': 4}),
        'praises_closer': t(507, 510, 'Praises Glory/Both now', sl=506, type='of_the_feast'),
        'great_doxology_rubric': r(511, 511, 'Great Doxology and the Troparion'),
        'closing_rubric': r(517, 517, 'Litanies and dismissal. First Hour.'),
    }
    # One hymn, "All the noetic ranks", is printed three times. The two Matins printings
    # (after Psalm 50, the Glory at the Praises) agree; the Vespers printing (the Glory at
    # Lord I have cried) differs in two places ("us" / "us,"; "most honored" / "all-honored").
    assert same(matins['psalm50_sticheron'], matins['praises_closer']), 'the two Matins printings diverge'
    assert not same(great_vespers['lic_closer'], matins['psalm50_sticheron']), 'the Vespers printing now agrees'

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(520, 521, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 522, 524), ('t', 525, 526), ('t', 527, 528), ('t', 529, 530),
                             ('t', 531, 533), ('t', 534, 535), ('t', 536, 538), ('t', 539, 541)], 'Beatitude'),
        'prokeimenon': t(552, 553, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone III: '),
        'prokeimenon_verse': t(554, 555, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(557, 568, 'Epistle', 'EPISTLE TO THE HEBREWS,', '§ 320 (HEB. 9: 1-7)',
                             {'book': 'Hebrews', 'chapter': 9, 'verses': '1-7', 'pericope_number': 320}),
        'alleluia': t(569, 570, 'Alleluia', pre='Alleluia, in Tone II: '),
        'alleluia_verse': t(571, 571, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(572, 583, 'Gospel', 'GOSPEL ACCORDING TO ST. LUKE,', '§ 54 (LK. 10: 38-42,11: 27-28)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '10:38-42, 11:27-28', 'pericope_number': 54}),
        'communion_verse': t(584, 585, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'feast',
        # Hand-entered: how the dismissal names the day's saints. None on a feast of an
        # icon of the Theotokos, where no saint is added.
        'name': None,
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Second file of 9 December: a feast of an icon of the Theotokos ("Unexpected Joy"), beside the '
                 'Conception of the Theotokos (12-09), which ODS vol. III and the OCA keep on this date. Rank by the '
                 'encoding_rule_v2.md 1.1 waterfall, step 2: the file prints a LITTLE VESPERS, so Vigil, Fekula 2F, '
                 'PROVISIONAL under Q-0002 (which service of the date a parish serves; ODS vol. III has no entry for '
                 'this service). Great Vespers with "Blessed is the man", 6 stichera (three printed, each Twice), '
                 'three lessons whose headings name the book and print no reference (citations identified), a Litiya '
                 'with one sticheron, the blessing of the Loaves. Matins: troparion Thrice; every sessional hymn is '
                 'followed by "the foregoing is repeated"; a Magnification; a Gospel; two canons of the Theotokos with '
                 'no title line, no tone and no acrostic printed ("Canon I", "Canon II"), "Katavasia: Christ is born" '
                 'after Ode I only; Great Doxology, after which the troparion is printed again. One hymn, "All the '
                 'noetic ranks", is the Glory at Lord I have cried, the sticheron after Psalm 50 and the Glory at the '
                 'Praises; the Vespers printing differs from the other two in two places. The label of the Polyeleos sessional hymn is printed "in Tone Il-": no tone stored.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
