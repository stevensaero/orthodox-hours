# 11-21.pdf — THE ENTRY OF OUR MOST HOLY LADY, THE THEOTOKOS & EVER-VIRGIN
# MARY, INTO THE TEMPLE (22 pages). Great Feast of the Theotokos: Little
# Vespers, Great Vespers with Litiya, Matins with two canons, Liturgy.
# Boundaries read off the extracted page, 14 Nov 2026.
#
# First file with: a Little Vespers; a Litiya; a katavasia after every ode; the
# special verses after Psalm 50 (Fekula 2F, note 48); and an Ode IX that prints
# rubrics and a refrain before the irmos and a refrain before every troparion.
# Ode IX stores those as the page orders them: `preface` (before the irmos),
# `items` (refrains and troparia interleaved, each labeled), `closing`.
from daily_lib import Src, same

def build():
    s = Src('11-21')
    t, r = s.t, s.r
    s.mark(5, 48, 198, 696)                                   # service headings
    s.mark(271, 304, 355, 394, 429, 476, 510, 558)            # ODE headings
    c1_labels = [305, 356, 395, 430, 477, 511, 559]
    c2_labels = [322, 371, 411, 445, 494, 532, 606]
    for n in c1_labels:
        assert s.raw(n) == 'Canon I', (n, s.raw(n))
    for n in c2_labels:
        assert s.raw(n) == 'Canon II', (n, s.raw(n))
    s.mark(*c1_labels, *c2_labels)

    # Troparion of the feast: five print sites, checked against one another.
    sites = [t(43, 46, 'a'), t(193, 196, 'b'), t(200, 203, 'c'), t(689, 692, 'd'), t(722, 725, 'e')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    troparion = t(43, 46, 'Troparion of the feast', sl=42)
    troparion['verified_sites'] = [
        {'locus': 'p2 Little Vespers', 'tone': 4},
        {'locus': 'p6 blessing of the loaves', 'tone': 4, 'repeat': 3},
        {'locus': 'p7 God is the Lord', 'tone': 4, 'repeat': 3},
        {'locus': 'p19 after the Great Doxology', 'tone': 4},
        {'locus': 'p21 AT LITURGY', 'tone': 4}]
    assert same(t(466, 469, 'k1'), t(727, 730, 'k2')), 'kontakion sites diverge'
    kontakion = t(466, 469, 'Kontakion of the feast', sl=464, sm=465,
                  verified_sites=[{'locus': 'p14 after Ode VI', 'tone': 4}, {'locus': 'p21 AT LITURGY', 'tone': 4}])
    ikos = t(470, 475, 'Ikos', pre='Ikos: ')

    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer',
                  'troparion'],
        'lic_rubric': r(6, 6, 'Little Vespers LIC rubric'),
        'lic': s.seq(8, [10, 13, 16], 'Little Vespers LIC', sm=7, first={'tone': 1}),
        'lic_closer': t(18, 25, 'Little Vespers LIC Glory/Both now', sl=17, type='of_the_feast'),
        'aposticha_rubric': r(26, 26, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(28, 29, 'Little Vespers Aposticha 1', sm=27, label='plain', tone=2),
            t(30, 31, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(32, 33, 'Little Vespers Aposticha 2', sm=27, label='plain'),
            t(34, 35, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(36, 37, 'Little Vespers Aposticha 3', sm=27, label='plain'),
        ],
        'aposticha_closer': t(40, 41, 'Little Vespers Aposticha Glory/Both now', sl=39, type='of_the_feast'),
    }

    exodus = ('No reference printed. The body opens "The Lord spake to Moses, saying: On the first day of the first '
              'month ... thou shalt set up the tabernacle of the witness" (Exodus 40). The span given is the lesson '
              'commonly appointed for feasts of the Theotokos; it is an identification by opening words, NOT read off '
              'this page. Confirm the verses against the body.')
    kings = ('No reference printed. Opens "It came to pass that Solomon finished building the house of the Lord. And '
             'he assembled all the elders of Israel in Sion, to bring the ark of the covenant" (3 Kings 7:51-8:1). '
             'Composite; span identified by opening words, not read off this page. Confirm.')
    ezek = ('No reference printed. Opens "Thus saith the Lord: It shall come to pass from the eighth day and onward, '
            'that the priests shall offer your wholeburnt-offerings on the altar" (Ezekiel 43:27), the lesson of the '
            'shut gate. Span identified by opening words, not read off this page. Confirm.')
    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparion_rubric', 'troparion'],
        'rubric': r(49, 49, 'Great Vespers rubric'),
        'lic_rubric': r(50, 50, 'LIC rubric'),
        'lic': s.seq(52, [56, 60, 65], 'LIC', sm=51, first={'tone': 1}) + [
            t(68, 71, 'LIC 4', sl=66, sm=67, label='plain'),
            t(72, 75, 'LIC 5', sm=67, label='plain'),
            t(76, 79, 'LIC 6', sm=67, label='plain'),
        ],
        'lic_closer': t(81, 86, 'LIC Glory/Both now', sl=80, type='of_the_feast'),
        'entrance_rubric': r(88, 88, 'Entrance'),
        'readings': [
            s.reading_id(89, 102, 'Lesson 1', {'book': 'Exodus', 'chapter': 40,
                                               'verses': '1-5, 9-10, 16, 34-35'}, exodus),
            s.reading_id(103, 116, 'Lesson 2', {'book': '3 Kings', 'chapter': 7,
                                                'verses': '7:51, 8:1, 3-7, 9-11'}, kings),
            s.reading_id(117, 127, 'Lesson 3', {'book': 'Ezekiel', 'chapter': 43, 'verses': '43:27-44:4'}, ezek),
        ],
        'litiya': [
            t(130, 138, 'Litiya 1', sl=129, label='plain', composer='George of Nicomedia'),
            t(139, 143, 'Litiya 2', pre='In Tone IV: ', label='plain', tone=4),
            t(144, 147, 'Litiya 3', label='plain'),
        ],
        'litiya_closer': t(149, 157, 'Litiya Glory/Both now', sl=148, type='of_the_feast', composer='Leo Magister'),
        'aposticha_rubric': r(158, 158, 'Aposticha rubric'),
        'aposticha': [
            t(160, 165, 'Aposticha 1', sm=159, label='plain', tone=5),
            t(167, 168, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(169, 174, 'Aposticha 2', sm=159, label='plain'),
            t(175, 176, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(177, 182, 'Aposticha 3', sm=159, label='plain'),
        ],
        'aposticha_closer': t(184, 191, 'Aposticha Glory/Both now', sl=183, type='of_the_feast',
                              composer='Sergius of Jerusalem'),
        'troparion_rubric': r(192, 192, 'Blessing of the loaves rubric'),
    }

    mr, mt = s.split_inline(219, 220, 'magnification rubric', 'Magnification')

    ref1 = 'Refrain: The angels, beholding the entry of the all-pure one, were '
    REF2 = 'Refrain: Magnify, O my soul, her who hath been brought into the temple of the '
    for a in (553, 564, 570, 575, 582, 588, 594, 657, 763):
        assert s.raw(a).startswith(ref1[:40]), (a, s.raw(a))
    for a in (601, 611, 616, 623, 628, 633, 638, 644, 649):
        assert s.raw(a).startswith(REF2[:40]), (a, s.raw(a))

    ode9_c1 = {
        'preface': s.mix([('rub', 552, 552), ('ref', 553, 554), ('rub', 555, 557)], 'Ode 9 Canon I preface'),
        'irmos': t(560, 563, 'Ode 9 irmos', pre='Irmos: '),
        'items': s.mix([('ref', 564, 565), ('t', 566, 569), ('ref', 570, 571), ('t', 572, 574),
                        ('ref', 575, 576), ('t', 577, 581), ('ref', 582, 583), ('t', 584, 587),
                        ('ref', 588, 589), ('t', 590, 593), ('ref', 594, 595), ('t', 596, 599)], 'Ode 9 Canon I'),
    }
    ode9_c2 = {
        'preface': s.mix([('rub', 600, 600), ('ref', 601, 602), ('rub', 603, 605)], 'Ode 9 Canon II preface'),
        'irmos': t(607, 610, 'Ode 9 irmos', pre='Irmos: '),
        'items': s.mix([('ref', 611, 612), ('t', 613, 615), ('ref', 616, 617), ('t', 619, 622),
                        ('ref', 623, 624), ('t', 625, 627), ('ref', 628, 629), ('t', 630, 632),
                        ('ref', 633, 634), ('t', 635, 637), ('ref', 638, 639), ('t', 640, 643),
                        ('ref', 644, 645), ('tri', 646, 648), ('ref', 649, 650), ('t', 651, 653)], 'Ode 9 Canon II'),
        'closing': s.mix([('rub', 654, 656), ('ref', 657, 658)], 'Ode 9 closing'),
        'katavasia': t(659, 662, 'Ode 9 katavasia', pre='Katavasia: '),
    }

    # Ode VIII, Canon II: the verse "We bless the Father ..." is printed as the
    # label of the troparion that follows it, in place of "Glory".
    ode8_c2 = s.ode(8, (533, 535), [537, 539])
    ode8_c2['items'] += [
        t(541, 543, 'Ode 8 troparion under "We bless the Father"', sl=540, label='plain'),
        t(544, 546, 'Ode 8 Both now ...', pre='Both now ..., ', label='both_now'),
    ]
    ode8_c2['katavasia'] = t(547, 551, 'Ode 8 katavasia', pre='Katavasia: ')

    ode1_c2 = s.ode(1, (287, 289), [291, 294, 296, 299], kat=(300, 302))
    ode1_c2['katavasia_rubric'] = r(303, 303, 'Katavasia rubric: until the 1st day of January')

    s.mark(663)
    assert s.raw(663) == 'Exapostilarion of the feast: Spec. Mel.: “Hearken, ye women ...”:', s.raw(663)

    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel',
                  'psalm50_rubric', 'psalm50_glory', 'psalm50_closer_rubric', 'psalm50_verse_rubric',
                  'psalm50_sticheron', 'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'praises_rubric', 'praises', 'praises_closer',
                  'great_doxology_rubric', 'closing_rubric'],
        'god_is_lord_rubric': r(199, 199, 'God is the Lord rubric'),
        'sessional_1': [
            t(206, 208, 'Sessional 1', sl=204, sm=205, label='plain'),
            t(209, 209, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(212, 217, 'Sessional 2', sl=210, sm=211, label='plain'),
            t(218, 218, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(221, 221, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(222, 223, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(224, 224, 'after the selected verses'),
        'sessional_polyeleos': [
            t(227, 230, 'Polyeleos sessional', sl=225, sm=226, label='plain'),
            t(231, 231, 'Polyeleos sessional repeat device', device=False, label=['glory', 'both_now']),
        ],
        'anabathmoi_rubric': r(232, 232, 'Song of Ascents rubric'),
        'prokeimenon': t(234, 235, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(236, 237, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(238, 238, 'Let every breath'),
        'gospel': s.reading(239, 252, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '§4(1:39-49,56)',
                            {'book': 'Luke', 'chapter': 1, 'verses': '39-49, 56', 'pericope_number': 4}),
        'psalm50_rubric': r(253, 253, 'After Psalm 50 rubric'),
        'psalm50_glory': t(254, 255, 'After Psalm 50, Glory', pre='Glory ..., ', label='glory'),
        'psalm50_closer_rubric': r(256, 256, 'After Psalm 50, Both now'),
        'psalm50_verse_rubric': r(257, 257, 'Have mercy on me O God'),
        'psalm50_sticheron': t(259, 263, 'After Psalm 50 sticheron', sl=258),
        'canon_rubric': r(264, 266, 'Canon rubric'),
        'canons': [
            {'title': s.raw(267, 269), 'composer': 'George', 'tone': 4,
             'odes': {
                 1: s.ode(1, (272, 274), [277, 280, 282, 285]),
                 3: s.ode(3, (306, 308), [312, 315, 318, 321]),
                 4: s.ode(4, (357, 359), [362, 365, 367, 370]),
                 5: s.ode(5, (396, 398), [401, 404, 407, 410]),
                 6: s.ode(6, (431, 433), [436, 439, 441, 444]),
                 7: s.ode(7, (478, 481), [484, 487, 490, 493]),
                 8: s.ode(8, (512, 515), [519, 523, 527, 531]),
                 9: ode9_c1,
             }},
            {'title': s.raw(286), 'composer': 'Basil', 'tone': 1,
             'odes': {
                 1: ode1_c2,
                 3: s.ode(3, (323, 325), [328, 331, 333, 336], kat=(337, 340)),
                 4: s.ode(4, (372, 375), [378, 381, 384, 387], kat=(389, 393)),
                 5: s.ode(5, (412, 414), [416, 418, 420, 423], kat=(425, 428)),
                 6: s.ode(6, (446, 448), [450, 452, 455, 458], kat=(459, 462)),
                 7: s.ode(7, (495, 496), [498, 500, 502, 505], kat=(506, 509)),
                 8: ode8_c2,
                 9: ode9_c2,
             }},
        ],
        'sessional_ode3': [
            t(343, 347, 'Ode III sessional', sl=341, sm=342, label='plain'),
            t(350, 354, 'Ode III sessional Glory/Both now', sl=349, label=['glory', 'both_now']),
        ],
        'exapostilarion': t(664, 667, 'Exapostilarion', sourceLabel='Exapostilarion of the feast',
                            spec_mel='Hearken, ye women ...', label='plain'),
        'praises_rubric': r(668, 668, 'Praises rubric'),
        'praises': s.seq(670, [672, 675, 679, 682], 'Praises', sm=669, first={'tone': 4}),
        'praises_closer': t(684, 687, 'Praises Glory/Both now', sl=683, type='of_the_feast', composer='Leo Magister'),
        'great_doxology_rubric': r(688, 688, 'Great Doxology. Troparion'),
        'closing_rubric': r(694, 694, 'Litanies. Dismissal. First Hour.'),
    }
    s.mark(267, 268, 269, 286)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia_rubric', 'troparion', 'kontakion_rubric', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'megalynarion_rubric', 'megalynarion_refrain', 'megalynarion', 'megalynarion_closing_rubric',
                  'communion_verse'],
        'beatitudes_rubric': r(697, 698, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 699, 701), ('t', 702, 704), ('t', 705, 707), ('t', 708, 710),
                             ('t', 711, 712), ('t', 713, 714), ('glory', 715, 717), ('both', 718, 720)], 'Beatitude'),
        'troparia_rubric': r(721, 721, 'After the entrance, the Troparion'),
        'kontakion_rubric': r(726, 726, 'Glory, Both now, the Kontakion'),
        'prokeimenon': t(731, 732, 'Liturgy Prokeimenon',
                         pre='Prokeimenon, in Tone III: the Song of the Theotokos: ', tone=3),
        'prokeimenon_verse': t(733, 734, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(736, 747, 'Epistle', 'EPISTLE TO THE HEBREWS,', '§ 320(HEB. 9: 1-7)',
                             {'book': 'Hebrews', 'chapter': 9, 'verses': '1-7', 'pericope_number': 320}),
        'alleluia': t(748, 748, 'Alleluia', pre='Alleluia, in Tone VIII: '),
        'alleluia_verse': t(749, 749, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(750, 761, 'Gospel', 'GOSPEL ACCORDING TO LUKE,', '§ 54(LK. 10: 38-42, 11: 27-28)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '10:38-42, 11:27-28', 'pericope_number': 54}),
        'megalynarion_rubric': r(762, 762, 'Instead of It is truly meet'),
        'megalynarion_refrain': t(763, 764, 'Refrain before the festal Irmos', pre='Refrain: ', label='refrain'),
        'megalynarion': t(765, 768, 'Irmos of Ode IX of Canon I, at Liturgy', pre='Irmos: '),
        'megalynarion_closing_rubric': r(769, 769, 'through to the leave-taking'),
        'communion_verse': t(770, 771, 'Communion Verse', pre='Communion Verse: '),
    }

    # Texts the page prints twice, checked: the Liturgy irmos is Ode IX's; the
    # last four Beatitude troparia are Ode VI of Canon II; Praises 4 is Little
    # Vespers LIC 3.
    assert same(liturgy['megalynarion'], ode9_c1['irmos']), 'Liturgy irmos differs from Ode IX'
    assert same(liturgy['megalynarion_refrain'], ode9_c1['preface'][1]), 'Liturgy refrain differs from Ode IX'
    for i in range(4):
        assert same(liturgy['beatitudes'][4 + i], matins['canons'][1]['odes'][6]['items'][i]), ('beatitude', i)
    assert same(matins['praises'][3], little_vespers['lic'][2]), 'Praises 4 differs from Little Vespers LIC 3'

    entry = {
        'kind': 'feast',
        'feast_ref': 'entrance_theotokos',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'great_feast',
        'fekula_section': '2F',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Great Feast of the Theotokos. Little Vespers, Great Vespers (Litiya, blessing of the loaves) and '
                 'Matins as a Vigil: Fekula 2F, which names the Entrance (Nov. 21) among the feasts of the Theotokos '
                 'it covers (the troparion of the feast alone, thrice; two canons of 8 each; no Magnificat) and, in '
                 'its note 48, the special verses that replace "Through the prayers" after Psalm 50, stored here as '
                 'the psalm50_* keys. TWO canons (George, Tone IV; Basil, Tone I), interleaved in print, stored whole; '
                 'a katavasia after every ode under Canon II, and after Ode I the rubric that these katavasiae are '
                 'chanted until 1 January. Ode IX prints rubrics and a refrain before each irmos and a refrain before '
                 'every troparion: stored as `preface`, labeled `items`, and `closing`. The three Vespers lessons print '
                 'no reference; their citations are identifications, flagged for checking. Texts printed twice are '
                 'stored at both sites: the Beatitudes repeat Ode III of Canon I and Ode VI of Canon II; the Liturgy '
                 'refrain and irmos repeat Ode IX of Canon I.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
