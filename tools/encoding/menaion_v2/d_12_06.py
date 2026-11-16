# 12-06.pdf — COMMEMORATION OF OUR FATHER AMONG THE SAINTS NICHOLAS, ARCHBISHOP OF
# MYRA (25 pages). Little Vespers; Great Vespers with three lessons, a Litiya and
# the blessing of the Loaves; Polyeleos with a Magnification; THREE canons (the
# Theotokos, Canon I and Canon II of the hierarch), interleaved in print, stored
# whole; the katavasia of the Nativity printed after every ode; Great Doxology.
# Several Both now hymns are "of the forefeast".
# Boundaries read off the extracted page, 15 Nov 2026.
from daily_lib import Src, same

FF = 'forefeast'

def build():
    s = Src('12-06')
    t, r = s.t, s.r
    s.mark(5, 67, 264, 878)
    s.mark(363, 414, 485, 545, 595, 656, 705, 762)
    th_labels = [415, 486, 546, 596, 657, 706, 763]
    c1_labels = [426, 499, 555, 604, 665, 716, 775]
    c2_labels = [437, 514, 568, 614, 681, 731, 788]
    for n in th_labels:
        assert s.raw(n) == 'Canon of the Theotokos', (n, s.raw(n))
    for n in c1_labels:
        assert s.raw(n) == 'Canon I of the holy hierarch', (n, s.raw(n))
    for n in c2_labels:
        assert s.raw(n) == 'Canon II of the holy hierarch', (n, s.raw(n))
    s.mark(*th_labels, *c1_labels, *c2_labels)

    sites = [t(57, 60, 'a'), t(258, 261, 'b'), t(266, 269, 'c'), t(903, 906, 'd')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(902)
    troparion = t(57, 60, 'Troparion of the holy hierarch', sl=56, verified_sites=[
        {'locus': 'p2 end of Little Vespers', 'tone': 4},
        {'locus': 'p7 blessing of the Loaves', 'tone': 4, 'repeat': 2},
        {'locus': 'p8 God is the Lord', 'tone': 4, 'repeat': 2},
        {'locus': 'p24 AT LITURGY', 'tone': 4}])
    assert same(t(645, 648, 'k1'), t(908, 911, 'k2')), 'kontakion sites diverge'
    s.mark(907)
    kontakion = t(645, 648, 'Kontakion of the holy hierarch', sl=643, sm=644,
                  verified_sites=[{'locus': 'p17 after Ode VI', 'tone': 3}, {'locus': 'p24 AT LITURGY', 'tone': 3}])
    ikos = t(649, 655, 'Ikos', pre='Ikos: ')

    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'aposticha_rubric', 'aposticha',
                  'aposticha_closer', 'troparion', 'troparion_closer'],
        'lic_rubric': r(6, 6, 'Little Vespers LIC rubric'),
        'lic': s.seq(8, [12, 16, 21, 26], 'Little Vespers LIC', sm=7, first={'tone': 4}),
        'lic_glory': t(28, 34, 'Little Vespers LIC Glory', sl=27),
        'lic_closer': t(36, 38, 'Little Vespers LIC Both now, Theotokion', sl=35, type='theotokion'),
        'aposticha_rubric': r(40, 40, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(42, 44, 'Little Vespers Aposticha 1', sm=41, label='plain', tone=6),
            t(45, 45, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(46, 47, 'Little Vespers Aposticha 2', sm=41, label='plain'),
            t(48, 49, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(50, 52, 'Little Vespers Aposticha 3', sm=41, label='plain'),
        ],
        'aposticha_closer': t(54, 55, 'Little Vespers Aposticha Glory/Both now, Theotokion', sl=53, type='theotokion'),
        'troparion_closer': t(62, 65, 'Little Vespers dismissal Theotokion', sl=61, type='theotokion'),
    }

    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya_rubric', 'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric'],
        'rubric': r(68, 68, 'Great Vespers rubric'),
        'lic_rubric': r(69, 69, 'LIC rubric'),
        # "8 Stichera of the holy hierarch: 4 in Tone II" (four printed), "And 4 in Tone II"
        # (three printed, the first marked Twice).
        'lic': s.seq(71, [75, 80, 85, 90], 'LIC', sm=70, first={'tone': 2}) + [
            t(93, 97, 'LIC 5', sl=91, sm=92, label='plain'),
            t(98, 101, 'LIC 6', sm=92, label='plain'),
            t(102, 106, 'LIC 7', sm=92, label='plain'),
        ],
        'lic_glory': t(109, 116, 'LIC Glory', sl=108),
        'lic_closer': t(118, 125, 'LIC Both now, of the forefeast', sl=117, type='of_the_feast', saint=FF),
        'entrance_rubric': r(126, 126, 'Entrance'),
        'readings': [
            s.reading_id(127, 145, 'Lesson 1', {'book': 'Proverbs', 'chapter': 10, 'verses': '10:7, 3:13-16, 8:6'},
                'No reference printed. The body opens "The memory of the just is praised" (Proverbs 10:7) and moves to '
                '"Blessed is the man who hath found wisdom" (3:13-16), then the Wisdom-speech of chapter 8: the composite '
                'hierarch lesson, as 11-14A Lesson 1. The body runs on past 8:6. Identified by correspondence; confirm '
                'the span against the page.'),
            s.reading_id(147, 165, 'Lesson 2', {'book': 'Proverbs', 'chapter': 10, 'verses': '10:31-32, 11:1-12'},
                'No reference printed. Opens "The mouth of the righteous droppeth wisdom" (Proverbs 10:31) and closes '
                '"a sensible man is quiet" (11:12), as 11-14A Lesson 2. Identified; confirm against the page.'),
            s.reading_id(166, 177, 'Lesson 3', {'book': 'Wisdom of Solomon', 'chapter': 4, 'verses': '7-15'},
                'No reference printed. Opens "Though the righteous be prevented with death", closes "that He doth visit '
                'His chosen": Wisdom 4:7-15. Identified by first and last words; confirm against the page.'),
        ],
        # "At Litiya, these Stichera, the composition of Byzantius:" then each tone inline.
        'litiya_rubric': r(178, 178, 'Litiya rubric'),
        'litiya': [
            t(179, 182, 'Litiya 1', pre='In Tone II: ', label='plain', composer='Byzantius'),
            t(183, 186, 'Litiya 2', label='plain'),
            t(188, 192, 'Litiya 3', label='plain'),
            t(193, 199, 'Litiya 4', pre='In Tone IV: ', label='plain'),
            t(200, 204, 'Litiya 5', pre='In Tone VIII: ', label='plain'),
            t(205, 207, 'Litiya 6', label='plain'),
        ],
        'litiya_glory': t(209, 213, 'Litiya Glory', sl=208),
        'litiya_closer': t(215, 219, 'Litiya Both now, of the forefeast', sl=214, type='of_the_feast', saint=FF),
        'aposticha_rubric': r(220, 220, 'Aposticha rubric'),
        'aposticha': [
            t(222, 227, 'Aposticha 1', sm=221, label='plain', tone=5),
            t(229, 229, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(230, 235, 'Aposticha 2', sm=221, label='plain'),
            t(236, 237, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(238, 244, 'Aposticha 3', sm=221, label='plain'),
        ],
        'aposticha_glory': t(246, 248, 'Aposticha Glory', sl=245, composer='John the Monk'),
        # Labelled "Both now ..., the composition of Byzantius" only. Its matter is the
        # forefeast (the cave, the manger, the star, the magi), as the two Both now hymns
        # before it, which ARE labelled "of the forefeast": typed with them, by content.
        'aposticha_closer': t(250, 256, 'Aposticha Both now', sl=249, composer='Byzantius', type='of_the_feast',
                              saint=FF),
        'troparion_rubric': r(257, 257, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(262, 262, 'Virgin Theotokos rejoice rubric'),
    }

    mr, mt = s.split_inline(312, 314, 'magnification rubric', 'Magnification')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_glory', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'god_is_lord_rubric': r(265, 265, 'God is the Lord rubric'),
        'troparion_closer': t(271, 274, 'God is the Lord Theotokion', sl=270, type='theotokion'),
        'sessional_1': [
            t(277, 280, 'Sessional 1', sl=275, sm=276, label='plain'),
            t(282, 285, 'Sessional 1, Glory', sl=281, label='glory'),
            t(287, 290, 'Sessional 1 Theotokion', sl=286, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(293, 295, 'Sessional 2', sl=291, sm=292, label='plain'),
            t(298, 304, 'Sessional 2, Glory', sl=296, sm=297, label='glory'),
            t(306, 311, 'Sessional 2 Theotokion', sl=305, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(315, 315, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(316, 316, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(317, 317, 'after the selected verses'),
        'sessional_polyeleos': [
            t(320, 323, 'Polyeleos sessional', sl=318, sm=319, label='plain'),
            t(326, 329, 'Polyeleos sessional, Glory', sl=324, sm=325, label='glory'),
            t(331, 334, 'Polyeleos sessional Theotokion', sl=330, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(335, 335, 'Song of Ascents rubric'),
        'prokeimenon': t(336, 337, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(338, 339, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(340, 340, 'Let every breath'),
        'gospel': s.reading(342, 354, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '§36 (10:9-16)',
                            {'book': 'John', 'chapter': 10, 'verses': '9-16', 'pericope_number': 36}),
        'psalm50_sticheron': t(356, 360, 'After Psalm 50 sticheron', sl=355),
        'canon_rubric': r(361, 362, 'Canon rubric'),
        'canons': [
            {'title': s.raw(364), 'tone': 1,
             'odes': {
                 1: s.ode(1, (365, 367), [370, 373]),
                 3: s.ode(3, (416, 418), [422, 425]),
                 4: s.ode(4, (487, 490), [494, 498]),
                 5: s.ode(5, (547, 549), [551, 554]),
                 6: s.ode(6, (597, 599), [601, 603]),
                 7: s.ode(7, (658, 659), [662, 664]),
                 8: s.ode(8, (707, 709), [712, 715]),
                 9: s.ode(9, (764, 766), [771, 774]),
             }},
            {'title': s.raw(374, 375), 'acrostic': 'I chant divine hymnody unto thee, O Nicholas',
             'composer': 'Theophanes', 'tone': 2,
             'odes': {
                 1: s.ode(1, (376, 378), [382, 385, 389]),
                 3: s.ode(3, (427, 428), [430, 433, 436]),
                 4: s.ode(4, (500, 502), [505, 508, 511, 513]),
                 5: s.ode(5, (556, 558), [561, 564, 567]),
                 6: s.ode(6, (605, 606), [608, 610, 612]),
                 7: s.ode(7, (666, 669), [673, 676, 680]),
                 8: s.ode(8, (717, 719), [723, 726, 729]),
                 9: s.ode(9, (776, 778), [781, 784, 787]),
             }},
            # Canon II: its irmoi are those of the Nativity canon, and each is printed
            # again after the ode as the katavasia.
            {'title': s.raw(390, 391), 'tone': 1,
             'odes': {
                 1: s.ode(1, (392, 394), [397, 400, 403, 406, 410], kat=(411, 413)),
                 3: s.ode(3, (438, 441), [444, 447, 450, 453, 456], kat=(458, 461)),
                 4: s.ode(4, (515, 519), [522, 526, 530, 534, 539], kat=(540, 544)),
                 5: s.ode(5, (569, 572), [576, 579, 583, 587, 590], kat=(591, 594)),
                 6: s.ode(6, (615, 618), [622, 626, 630, 634, 638], kat=(639, 642)),
                 7: s.ode(7, (682, 684), [687, 690, 694, 697, 700], kat=(701, 704)),
                 8: s.ode(8, (732, 736), [740, 744, 748, 752, 756], kat=(757, 761)),
                 9: s.ode(9, (789, 791), [795, 798, 801, 805, 808], kat=(809, 812)),
             }},
        ],
        'sessional_ode3': [
            t(464, 469, 'Ode III sessional', sl=462, sm=463, label='plain'),
            t(471, 476, 'Ode III sessional, Glory', sl=470, label='glory'),
            t(478, 484, 'Ode III sessional Theotokion', sl=477, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'exapostilarion': t(815, 817, 'Exapostilarion', sl=813, sm=814, label='plain'),
        'exapostilarion_glory': t(819, 822, 'Another Exapostilarion', sl=818),
        'exapostilarion_closer': t(824, 826, 'Exapostilarion Theotokion', sl=823, type='theotokion'),
        # "On the Praises, 6 Stichera: 2 Stichera, in Tone I:" is the rubric and the label
        # of the first two; "And 4 Stichera, in Tone I:" labels the rest.
        'praises_rubric': r(827, 827, 'Praises rubric'),
        'praises': [
            t(828, 830, 'Praises 1', label='plain', tone=1),
            t(831, 833, 'Praises 2', label='plain'),
            t(836, 839, 'Praises 3', sl=834, sm=835, label='plain'),
            t(840, 844, 'Praises 4', sm=835, label='plain'),
            t(845, 847, 'Praises 5', sm=835, label='plain'),
            t(848, 851, 'Praises 6', sm=835, label='plain'),
        ],
        'praises_glory': t(853, 863, 'Praises Glory', sl=852),
        # The label prints the composer's name broken: "German us the Patriarch".
        'praises_closer': t(865, 875, 'Praises Both now', sl=864, composer='Germanus the Patriarch', type='theotokion'),
        'great_doxology_rubric': r(876, 876, 'Great Doxology. Troparion. Litanies. Dismissal. First Hour.'),
    }
    s.mark(364, 374, 375, 390, 391)
    assert same(little_vespers['troparion_closer'], matins['troparion_closer']), \
        'the two printings of the Tone IV theotokion diverge'

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(879, 880, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 881, 882), ('t', 883, 885), ('t', 886, 889), ('t', 890, 893),
                             ('tri', 894, 897), ('theot', 898, 901)], 'Beatitude'),
        'prokeimenon': t(912, 913, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(914, 914, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(916, 925, 'Epistle', 'EPISTLE TO THE HEBREWS,', '§ 335 (13: 17-21)',
                             {'book': 'Hebrews', 'chapter': 13, 'verses': '17-21', 'pericope_number': 335}),
        'alleluia': t(926, 927, 'Alleluia', pre='Alleluia, in Tone IV: '),
        'alleluia_verse': t(928, 929, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(930, 941, 'Gospel', 'GOSPEL ACCORDING TO ST. LUKE,', '§ 24 (6: 17-23).',
                            {'book': 'Luke', 'chapter': 6, 'verses': '17-23', 'pericope_number': 24}),
        'communion_verse': t(942, 943, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. The title lines, with the
        # OCA calendar's "in Lycia, the Wonderworker".
        'name': 'our father among the saints Nicholas, Archbishop of Myra in Lycia, the Wonderworker',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall, step 2: the Menaion prints a LITTLE VESPERS for the '
                 'saint, so Vigil, Fekula 2F. ODS vol. III has no 12-06 entry. Great Vespers with "Blessed is the man", '
                 '8 stichera in two sets of four (seven printed, one marked Twice), three lessons with NO reference '
                 'printed (citations are identifications), a Litiya of six stichera, the blessing of the Loaves; no '
                 '"if a vigil is not served" line. THE FOREFEAST OF THE NATIVITY ALREADY SOUNDS: the Both now at Lord I '
                 'have cried and at the Litiya are labelled "of the forefeast", the aposticha Both now (labelled only '
                 '"the composition of Byzantius") is of the same matter and is typed with them by its content, and Canon II of the hierarch is set on the '
                 'irmoi of the Nativity canon, each printed again after its ode as the katavasia. Matins: two '
                 'sessional hymns of the saint at each kathisma and after the Polyeleos; a Magnification and Selected '
                 'Psalm verse; a Gospel; THREE canons (the Theotokos, with no Theotokion marked; Canon I by '
                 'Theophanes; Canon II, whose acrostic is the Greek alphabet, with a Triadicon and a Theotokion in '
                 'every ode); two exapostilaria; six stichera on the Praises printed in two sets; Great Doxology. The '
                 'Praises Both now names its composer as "German us the Patriarch" (a broken word). At Liturgy the '
                 'Beatitude troparia are from Ode III of Canon I and Ode VI of Canon II, six printed, one marked Twice.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
