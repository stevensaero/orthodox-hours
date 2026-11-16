# 12-05.pdf — COMMEMORATION OF OUR VENERABLE AND GOD-BEARING FATHER, SABBAS THE
# SANCTIFIED (21 pages). Little Vespers, Great Vespers with three lessons, a Litiya
# and the blessing of the Loaves; Polyeleos with a Magnification; two canons (the
# Theotokos, the venerable one), interleaved in print, stored whole; a katavasia
# after every ode of the second. Boundaries read off the extracted page, 15 Nov 2026.
from daily_lib import Src, same


def build():
    s = Src('12-05')
    t, r = s.t, s.r
    s.mark(5, 56, 227, 674)
    s.mark(310, 349, 406, 440, 475, 523, 559, 603)
    th_labels = [350, 407, 441, 476, 524, 560, 604]
    ve_labels = [357, 415, 452, 484, 539, 573, 615]
    for n in th_labels:
        assert s.raw(n) == 'Canon of the Theotokos', (n, s.raw(n))
    for n in ve_labels:
        assert s.raw(n) == 'Canon of the venerable one', (n, s.raw(n))
    s.mark(*th_labels, *ve_labels)

    sites = [t(45, 48, 'a'), t(214, 217, 'b'), t(229, 232, 'c'), t(703, 706, 'd')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(702)
    troparion = t(45, 48, 'Troparion of the venerable one', sl=44, verified_sites=[
        {'locus': 'p2 end of Little Vespers', 'tone': 8},
        {'locus': 'p7 blessing of the Loaves', 'tone': 8, 'repeat': 2},
        {'locus': 'p8 God is the Lord', 'tone': 8, 'repeat': 2},
        {'locus': 'p20 AT LITURGY', 'tone': 8}])
    assert same(t(507, 511, 'k1'), t(708, 712, 'k2')), 'kontakion sites diverge'
    s.mark(707)
    kontakion = t(507, 511, 'Kontakion of the venerable one', sl=505, sm=506,
                  verified_sites=[{'locus': 'p15 after Ode VI', 'tone': 8}, {'locus': 'p20 AT LITURGY', 'tone': 8}])
    ikos = t(512, 522, 'Ikos', pre='Ikos: ')

    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'aposticha_rubric', 'aposticha',
                  'aposticha_closer', 'troparion', 'troparion_closer'],
        'lic_rubric': r(6, 6, 'Little Vespers LIC rubric'),
        'lic': s.seq(8, [11, 15, 19], 'Little Vespers LIC', sm=7, first={'tone': 1}),
        'lic_glory': t(21, 25, 'Little Vespers LIC Glory', sl=20),
        'lic_closer': t(27, 28, 'Little Vespers LIC Both now, Theotokion', sl=26, type='theotokion'),
        'aposticha_rubric': r(29, 29, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(31, 32, 'Little Vespers Aposticha 1', sm=30, label='plain', tone=2),
            t(33, 33, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(34, 35, 'Little Vespers Aposticha 2', sm=30, label='plain'),
            t(36, 37, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(39, 40, 'Little Vespers Aposticha 3', sm=30, label='plain'),
        ],
        # "Glory ..., Both now ..., in the same melody:" — the melody, and so the tone, of the aposticha (Tone II).
        'aposticha_closer': t(42, 43, 'Little Vespers Aposticha Glory/Both now', sl=41, type='theotokion', tone=2),
        'troparion_closer': t(50, 54, 'Little Vespers dismissal Theotokion', sl=49, type='theotokion'),
    }

    # line 59 prints "Spec Mel.:" with no full stop after "Spec".
    assert s.raw(59) == 'Spec Mel.: “O venerable father ...”:', s.raw(59)
    SM = 'O venerable father ...'
    lic = [
        t(60, 66, 'LIC 1', label='plain', tone=5, spec_mel=SM),
        t(67, 73, 'LIC 2', label='plain', spec_mel=SM),
        t(74, 79, 'LIC 3', label='plain', spec_mel=SM),
    ]
    s.mark(59)
    lic[0]['provenance_note'] = 'The melody line is printed "Spec Mel.:" without the full stop after "Spec" (p3).'
    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon', 'entrance_rubric', 'readings',
                  'litiya_rubric', 'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric',
                  'no_vigil_rubric', 'troparion_closer'],
        'rubric': r(57, 57, 'Great Vespers rubric'),
        'lic_rubric': r(58, 58, 'LIC rubric'),
        'lic': lic,
        'lic_glory': t(81, 90, 'LIC Glory', sl=80),
        'dogmatikon': t(93, 98, 'LIC Both now, Dogmatic Theotokion', sl=92, type='dogmatic_theotokion'),
        'entrance_rubric': r(99, 99, 'Entrance'),
        'readings': [
            s.reading(100, 112, 'Lesson 1', 'READING FROM THE WISDOM OF SOLOMON', '(3:1-9).',
                      {'book': 'Wisdom of Solomon', 'chapter': 3, 'verses': '1-9'}),
            s.reading(113, 130, 'Lesson 2', 'READING FROM THE WISDOM OF SOLOMON', '(5:15-6:3).',
                      {'book': 'Wisdom of Solomon', 'chapter': 5, 'verses': '5:15-6:3'}),
            s.reading(132, 143, 'Lesson 3', 'READING FROM THE WISDOM OF SOLOMON', '(4:7-15).',
                      {'book': 'Wisdom of Solomon', 'chapter': 4, 'verses': '7-15'}),
        ],
        'litiya_rubric': r(144, 144, 'Litiya rubric'),
        'litiya': [
            t(146, 154, 'Litiya 1', sl=145, label='plain'),
            t(155, 158, 'Litiya 2', label='plain'),
            t(159, 161, 'Litiya 3', label='plain'),
        ],
        'litiya_glory': t(163, 168, 'Litiya Glory', sl=162),
        'litiya_closer': t(171, 176, 'Litiya Both now, Theotokion', sl=170, type='theotokion'),
        'aposticha_rubric': r(177, 177, 'Aposticha rubric'),
        'aposticha': [
            t(179, 184, 'Aposticha 1', sm=178, label='plain', tone=5),
            t(185, 185, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(186, 192, 'Aposticha 2', sm=178, label='plain'),
            t(193, 194, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(195, 201, 'Aposticha 3', sm=178, label='plain'),
        ],
        'aposticha_glory': t(203, 206, 'Aposticha Glory', sl=202),
        'aposticha_closer': t(209, 212, 'Aposticha Both now, Theotokion', sl=208, type='theotokion'),
        'troparion_rubric': r(213, 213, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(218, 218, 'Virgin Theotokos rejoice rubric'),
        'no_vigil_rubric': r(219, 219, 'If a vigil is not served'),
        'troparion_closer': t(221, 225, 'Dismissal Theotokion (no vigil)', sl=220, type='theotokion'),
    }

    mr, mt = s.split_inline(259, 261, 'magnification rubric', 'Magnification')
    # The comma after "womb" is printed a little below the line, and the extraction
    # sets it down as a line of its own (270) after "and". Seen on a render of p9 and in
    # the second extraction (pdftotext): "thy mother's womb, O most sacred Sabbas, and /
    # on earth". The comma is put back where it is printed; nothing else is touched.
    assert s.raw(270) == ',', s.raw(270)
    poly = t(269, 276, 'Polyeleos sessional', sl=267, sm=268, label='plain')
    assert "womb O most sacred Sabbas, and , on earth" in poly['text'], poly['text'][:120]
    poly['text'] = poly['text'].replace("womb O most sacred Sabbas, and , on earth", "womb, O most sacred Sabbas, and on earth")
    poly['provenance_note'] = ('The extraction displaces one comma (printed slightly below the line after "womb") onto '
                               'a line of its own; it is restored to its printed place, checked against a render of p9.')
    ode1 = s.ode(1, (325, 328), [331, 334, 337, 340, 344])
    # Ode I alone prints its katavasia as "Katavasia, in Tone I:"; the rest "Katavasia:".
    ode1['katavasia'] = t(345, 348, 'Ode 1 katavasia', pre='Katavasia, in Tone I: ', tone=1)
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer'],
        'god_is_lord_rubric': r(228, 228, 'God is the Lord rubric'),
        'troparion_closer': t(234, 238, 'God is the Lord Theotokion', sl=233, type='theotokion'),
        'sessional_1': [
            t(241, 244, 'Sessional 1', sl=239, sm=240, label='plain'),
            t(246, 249, 'Sessional 1 Theotokion', sl=245, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(252, 254, 'Sessional 2', sl=250, sm=251, label='plain'),
            t(256, 258, 'Sessional 2 Theotokion', sl=255, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(262, 262, 'Selected Psalm rubric'),
        'megalynarion_verse': t(263, 264, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(266, 266, 'after the selected verses'),
        'sessional_polyeleos': [
            poly,
            t(278, 283, 'Polyeleos sessional Theotokion', sl=277, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(284, 284, 'Song of Ascents rubric'),
        'prokeimenon': t(285, 286, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(287, 288, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(289, 289, 'Let every breath'),
        'gospel': s.reading(290, 301, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(6:17-23)',
                            {'book': 'Luke', 'chapter': 6, 'verses': '17-23'}),
        'psalm50_sticheron': t(304, 307, 'After Psalm 50 sticheron', sl=303),
        'canon_rubric': r(308, 309, 'Canon rubric'),
        'canons': [
            {'title': s.raw(311, 312), 'acrostic': 'I chant praise unto the Life-bearing maiden', 'tone': 1,
             'odes': {
                 1: s.ode(1, (313, 314), [316, 319, 322]),
                 3: s.ode(3, (351, 352), [354, 356]),
                 4: s.ode(4, (408, 409), [411, 413]),
                 5: s.ode(5, (442, 444), [447, 450]),
                 6: s.ode(6, (477, 479), [481, 483]),
                 7: s.ode(7, (525, 528), [532, 535, 538]),
                 8: s.ode(8, (561, 564), [567, 572]),
                 9: s.ode(9, (605, 607), [611, 614]),
             }},
            {'title': s.raw(323, 324), 'acrostic': 'Lovingly I hymn Sabbas, most eminent among fasters',
             'composer': 'Theophanes', 'tone': 8,
             'odes': {
                 1: ode1,
                 3: s.ode(3, (358, 361), [365, 368, 371, 374, 377], kat=(379, 382)),
                 4: s.ode(4, (416, 419), [422, 425, 428, 431, 435], kat=(436, 439)),
                 5: s.ode(5, (453, 456), [459, 462, 465, 468, 471], kat=(472, 474)),
                 6: s.ode(6, (485, 487), [491, 494, 497, 500], kat=(501, 504)),
                 7: s.ode(7, (540, 542), [545, 548, 551, 554], kat=(555, 558)),
                 8: s.ode(8, (574, 578), [582, 586, 590, 594, 598], kat=(599, 602)),
                 9: s.ode(9, (616, 619), [622, 625, 629, 633, 637], kat=(638, 641)),
             }},
        ],
        'sessional_ode3': [
            t(385, 390, 'Ode III sessional', sl=383, sm=384, label='plain'),
            t(392, 397, 'Ode III sessional, Glory', sl=391, label='glory'),
            t(399, 405, 'Ode III sessional Theotokion', sl=398, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'exapostilarion': t(643, 646, 'Exapostilarion', sl=642, label='plain'),
        'exapostilarion_closer': t(649, 651, 'Exapostilarion Theotokion', sl=648, type='theotokion'),
        'praises_rubric': r(652, 652, 'Praises rubric'),
        'praises': s.seq(654, [656, 660, 663], 'Praises', sm=653, first={'tone': 1}),
        'praises_glory': t(665, 668, 'Praises Glory', sl=664),
        'praises_closer': t(670, 672, 'Praises Both now, Theotokion', sl=669, type='theotokion'),
    }
    s.mark(311, 312, 323, 324)
    assert same(little_vespers['troparion_closer'], great_vespers['troparion_closer'], matins['troparion_closer']), \
        'the three printings of the Tone VIII theotokion diverge'
    assert same(matins['psalm50_sticheron'], matins['praises_glory']), 'Psalm 50 sticheron and Praises Glory diverge'

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(675, 676, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 677, 680), ('t', 681, 683), ('t', 684, 686), ('t', 687, 689),
                             ('t', 690, 692), ('t', 693, 695), ('t', 696, 698), ('theot', 699, 701)], 'Beatitude'),
        'prokeimenon': t(714, 715, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(716, 717, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(718, 725, 'Epistle', 'READING FROM THE EPISTLE TO THE GALATIANS', '(5:22-6:2).',
                             {'book': 'Galatians', 'chapter': 5, 'verses': '5:22-6:2'}),
        'alleluia': t(726, 727, 'Alleluia', pre='Alleluia, in Tone VIII: '),
        'alleluia_verse': t(728, 728, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(729, 735, 'Gospel', 'READING FROM THE GOSPEL OF ST. MATTHEW', '(11 :27-30)',
                            {'book': 'Matthew', 'chapter': 11, 'verses': '27-30'}),
        'communion_verse': t(736, 737, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. From the title lines.
        'name': 'our venerable and God-bearing father Sabbas the Sanctified',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall, step 2: the Menaion prints a LITTLE VESPERS for the '
                 'saint, so Vigil, Fekula 2F. ODS vol. III has no 12-05 entry. Great Vespers with "Blessed is the man", '
                 '8 stichera (three printed, marked Thrice, Thrice, Twice), three lessons with printed references, a '
                 'Litiya, the blessing of the Loaves, and "But if a vigil is not served" with a dismissal Theotokion. '
                 'Matins: Polyeleos with a Magnification and a Selected Psalm verse, a Gospel, the sticheron after '
                 'Psalm 50 (the same hymn as the Praises Glory). Two canons, the Theotokos (two or three troparia to '
                 'the ode, no Theotokion marked) and the venerable one, by Theophanes; a katavasia is printed after '
                 'every ode, the first headed "Katavasia, in Tone I". The page ends Matins at the Praises Theotokion: '
                 'NO "Great Doxology" line is printed. The melody line at Lord I have cried is printed "Spec Mel.:". The Matins prokeimenon is '
                 'printed in Tone IV and the same words at Liturgy in Tone VII.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
