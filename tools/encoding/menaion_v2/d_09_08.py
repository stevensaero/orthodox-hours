# 09-08.pdf — THE NATIVITY OF OUR MOST HOLY SOVEREIGN LADY, THE THEOTOKOS AND
# EVER-VIRGIN MARY (20 pages). First file of 8 September (c0); 09-08A is a
# second, separate service. OVERLAP DATE for the V1/V2 comparison, shape
# "Great Feast of the Theotokos": Little Vespers, Great Vespers with Litiya,
# Matins with two canons, Liturgy. Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('09-08')
    t, r = s.t, s.r
    s.mark(5, 50, 205, 655)
    s.mark(273, 312, 353, 388, 425, 474, 518, 564)
    assert s.raw(564) == 'OODE IX', s.raw(564)
    c1_labels = [313, 354, 389, 426, 475, 519, 568]
    c2_labels = [324, 364, 400, 437, 489, 533, 581]
    for n in c1_labels:
        assert s.raw(n) == 'Canon I', (n, s.raw(n))
    for n in c2_labels:
        assert s.raw(n) == 'Canon II', (n, s.raw(n))
    s.mark(*c1_labels, *c2_labels)

    sites = [t(45, 48, 'a'), t(200, 203, 'b'), t(207, 210, 'c'), t(649, 652, 'd'), t(677, 680, 'e')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(676)
    troparion = t(45, 48, 'Troparion of the feast', sl=44)
    troparion['verified_sites'] = [
        {'locus': 'p2 Little Vespers', 'tone': 4},
        {'locus': 'p6 blessing of the loaves', 'tone': 4, 'repeat': 3},
        {'locus': 'p7 God is the Lord', 'tone': 4, 'repeat': 3},
        {'locus': 'p18 after the Great Doxology', 'tone': 4},
        {'locus': 'p19 AT LITURGY', 'tone': 4}]
    # The Liturgy print site marks the final phrase "**" where the Ode VI site
    # prints "*": same words. R-1: canonical = Ode VI text; the Liturgy text is
    # stored apart as `liturgy_kontakion` (the 11-14 / 11-26A precedent).
    assert not same(t(464, 467, 'k1'), t(682, 685, 'k2')), 'kontakion sites now match: fold into verified_sites'
    kontakion = t(464, 467, 'Kontakion of the feast', sl=463,
                  verified_sites=[{'locus': 'p13 after Ode VI', 'tone': 4}])
    ikos = t(468, 472, 'Ikos', pre='Ikos: ')

    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer',
                  'troparion'],
        'lic_rubric': r(6, 6, 'Little Vespers LIC rubric'),
        'lic': s.seq(8, [10, 14, 17, 21], 'Little Vespers LIC', sm=7, first={'tone': 1}),
        'lic_closer': t(23, 27, 'Little Vespers LIC Glory/Both now', sl=22, type='of_the_feast'),
        'aposticha_rubric': r(28, 28, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(30, 31, 'Little Vespers Aposticha 1', sm=29, label='plain', tone=2),
            t(32, 32, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(33, 35, 'Little Vespers Aposticha 2', sm=29, label='plain'),
            t(36, 36, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(37, 38, 'Little Vespers Aposticha 3', sm=29, label='plain'),
        ],
        'aposticha_closer': t(42, 43, 'Little Vespers Aposticha Glory/Both now', sl=40, sm=41, type='of_the_feast'),
    }

    V1 = ('No reference printed. Citation as V1 recorded it for this file, identified from the printed text; '
          'confirm the span against the page.')
    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer',
                  'troparion_rubric', 'troparion'],
        'rubric': r(51, 51, 'Great Vespers rubric'),
        'lic_rubric': r(52, 53, 'LIC rubric'),
        'lic': s.seq(54, [58, 63, 70], 'LIC', first={'tone': 6}, composer='Sergius the Patriarch') + [
            t(72, 75, 'LIC 4', sl=71, label='plain', composer='Stephen of Jerusalem'),
            t(76, 81, 'LIC 5', label='plain', composer='Stephen of Jerusalem'),
            t(82, 85, 'LIC 6', label='plain', composer='Stephen of Jerusalem'),
        ],
        'lic_closer': t(88, 92, 'LIC Glory/Both now', sl=87, type='of_the_feast'),
        'entrance_rubric': r(93, 93, 'Entrance'),
        'readings': [
            s.reading_id(94, 108, 'Lesson 1', {'book': 'Genesis', 'chapter': 28, 'verses': '10-17'},
                         'Opens "Jacob went forth from the well of the oath"; closes "gate of heaven!" ' + V1),
            s.reading_id(109, 119, 'Lesson 2', {'book': 'Ezekiel', 'chapter': 43, 'verses': '43:27-44:4'},
                         'Opens "Thus saith the Lord: It shall come to pass from the eighth day". ' + V1),
            s.reading_id(120, 134, 'Lesson 3', {'book': 'Proverbs', 'chapter': 9, 'verses': '1-11'},
                         'Opens "Wisdom hath built a house for herself". ' + V1),
        ],
        'litiya': [
            t(136, 144, 'Litiya 1', sl=135, label='plain', composer='Stephen of Jerusalem'),
            t(145, 148, 'Litiya 2', pre='In Tone II: ', label='plain', tone=2),
            t(150, 153, 'Litiya 3', sl=149, label='plain', composer='Anatolius the Patriarch'),
            t(154, 158, 'Litiya 4', label='plain'),
        ],
        'litiya_closer': t(160, 165, 'Litiya Glory/Both now', sl=159, type='of_the_feast', composer='Sergius'),
        'aposticha_rubric': r(167, 167, 'Aposticha rubric'),
        'aposticha': [
            t(168, 172, 'Aposticha 1', label='plain', tone=4, composer='Germanus'),
            t(173, 173, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(174, 178, 'Aposticha 2', label='plain'),
            t(179, 179, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(180, 188, 'Aposticha 3', label='plain'),
        ],
        'aposticha_closer': t(190, 198, 'Aposticha Glory/Both now', sl=189, type='of_the_feast', composer='Sergius'),
        'troparion_rubric': r(199, 199, 'Blessing of the loaves rubric'),
    }

    mr, mt = s.split_inline(227, 228, 'magnification rubric', 'Magnification')
    ode9_c1 = {
        'preface': s.mix([('rub', 565, 566), ('ref', 567, 567)], 'Ode 9 Canon I preface'),
        'irmos': t(569, 571, 'Ode 9 irmos', pre='Irmos: '),
        'items': s.mix([('t', 572, 574), ('t', 575, 577)], 'Ode 9 Canon I'),
    }
    ode9_c2 = s.ode(9, (582, 585), [588, 592, 596, 599, 602, 605])
    ode9_c2['preface'] = s.mix([('rub', 578, 578), ('ref', 579, 580)], 'Ode 9 Canon II preface')
    # "As Katavasia, we chant here both Irmoi of ODE IX of the canon of the
    # Exaltation of the Cross:" then the two irmoi, labeled Katavasia I and II.
    ode9_c2['closing'] = [
        t(606, 607, 'Ode 9 katavasia rubric', device=False, label='rubric'),
        t(608, 611, 'Ode 9 Katavasia I', pre='Katavasia I: ', label='plain'),
        t(612, 615, 'Ode 9 Katavasia II', pre='Katavasia II: ', label='plain'),
    ]

    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer', 'praises_rubric', 'praises', 'praises_closer',
                  'great_doxology_rubric', 'closing_rubric'],
        'god_is_lord_rubric': r(206, 206, 'God is the Lord rubric'),
        'sessional_1': [
            t(213, 217, 'Sessional 1', sl=211, sm=212, label='plain'),
            t(218, 218, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(221, 225, 'Sessional 2', sl=219, sm=220, label='plain'),
            t(226, 226, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(229, 229, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(230, 230, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(231, 231, 'after the selected verses'),
        'sessional_polyeleos': [
            t(234, 238, 'Polyeleos sessional', sl=232, sm=233, label='plain'),
            t(241, 245, 'Polyeleos sessional Glory/Both now', sl=240, label=['glory', 'both_now']),
        ],
        'anabathmoi_rubric': r(246, 246, 'Song of Ascents rubric'),
        'prokeimenon': t(247, 248, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(249, 249, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(250, 250, 'Let every breath'),
        'gospel': s.reading(251, 265, 'Matins Gospel', 'GOSPEL ACCORDING TO LUKE,', '§ 4 (LK. 1: 39-49, 56)',
                            {'book': 'Luke', 'chapter': 1, 'verses': '39-49, 56', 'pericope_number': 4}),
        'psalm50_sticheron': t(267, 271, 'After Psalm 50 sticheron', sl=266),
        'canon_rubric': r(272, 272, 'Canon rubric'),
        'canons': [
            {'title': s.raw(274), 'composer': 'John of Damascus', 'tone': 2,
             'odes': {
                 1: s.ode(1, (275, 277), [281, 283, 285]),
                 3: s.ode(3, (314, 315), [318, 321, 323]),
                 4: s.ode(4, (355, 356), [359, 361, 363]),
                 5: s.ode(5, (390, 392), [395, 399]),
                 6: s.ode(6, (427, 429), [432, 436]),
                 7: s.ode(7, (476, 480), [484, 488]),
                 8: s.ode(8, (520, 524), [528, 532]),
                 9: ode9_c1,
             }},
            {'title': s.raw(286), 'composer': 'Andrew of Crete', 'tone': 8,
             'odes': {
                 1: s.ode(1, (287, 289), [291, 294, 297, 299, 302, 311]),
                 3: s.ode(3, (325, 326), [329, 332, 334, 337, 344]),
                 4: s.ode(4, (365, 367), [370, 373, 376, 379, 382, 387]),
                 5: s.ode(5, (401, 403), [406, 408, 411, 414, 417, 424]),
                 6: s.ode(6, (438, 440), [443, 445, 448, 451, 454, 462]),
                 # The ONLY katavasia printed before Ode IX stands here, after Ode VII.
                 7: s.ode(7, (490, 492), [495, 498, 501, 504, 507, 510], kat=(512, 517)),
                 8: s.ode(8, (534, 537), [540, 543, 547, 550, 555, 563]),
                 9: ode9_c2,
             }},
        ],
        'sessional_ode3': [
            t(347, 351, 'Ode III sessional', sl=345, sm=346, label='plain'),
            t(352, 352, 'Ode III sessional repeat device', device=False, label=['glory', 'both_now']),
        ],
        'exapostilarion': t(617, 620, 'Exapostilarion', sl=616, label='plain'),
        'exapostilarion_closer': t(622, 624, 'Exapostilarion Glory/Both now', sl=621, type='of_the_feast'),
        'praises_rubric': r(626, 626, 'Praises rubric'),
        'praises': s.seq(628, [632, 636, 641], 'Praises', sm=627, first={'tone': 1}),
        'praises_closer': t(643, 647, 'Praises Glory/Both now', sl=642, type='of_the_feast'),
        'great_doxology_rubric': r(648, 648, 'Great Doxology. Troparion'),
        'closing_rubric': r(653, 653, 'Litanies. Dismissal. First Hour.'),
    }
    s.mark(274, 286)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'liturgy_kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'megalynarion_rubric', 'megalynarion_refrain', 'megalynarion', 'megalynarion_closing_rubric',
                  'communion_verse'],
        'beatitudes_rubric': r(656, 657, 'Beatitudes rubric'),
        'liturgy_kontakion': t(682, 685, 'Kontakion at Liturgy', sl=681),
        'beatitudes': s.mix([('t', 658, 659), ('t', 660, 662), ('t', 663, 664), ('t', 665, 667), ('t', 668, 669),
                             ('glory', 670, 672), ('both', 673, 675)], 'Beatitude'),
        'prokeimenon': t(686, 687, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone III: The hymn of the Theotokos: ',
                         tone=3),
        'prokeimenon_verse': t(688, 689, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(691, 700, 'Epistle', 'EPISTLE TO THE PHILIPPIANS,', '§ 240 (PHIL. 2: 5-11)',
                             {'book': 'Philippians', 'chapter': 2, 'verses': '5-11', 'pericope_number': 240}),
        'alleluia': t(701, 701, 'Alleluia', pre='Alleluia, in Tone VIII: '),
        'alleluia_verse': t(702, 702, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(703, 714, 'Gospel', 'GOSPEL ACCORDING TO LUKE,', '§ 54 (LK. 10: 38-42; 11: 27-28)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '10:38-42, 11:27-28', 'pericope_number': 54}),
        'megalynarion_rubric': r(715, 715, 'Instead of It is truly meet'),
        'megalynarion_refrain': t(716, 716, 'Refrain before the festal Irmos', pre='Refrain: ', label='refrain'),
        'megalynarion': t(717, 719, 'Irmos of Ode IX of Canon I, at Liturgy', pre='Irmos: '),
        'megalynarion_closing_rubric': r(720, 720, 'until the leave-taking'),
        'communion_verse': t(721, 722, 'Communion Verse', pre='Communion Verse: '),
    }
    assert same(liturgy['megalynarion'], ode9_c1['irmos']), 'Liturgy irmos differs from Ode IX'
    assert same(liturgy['megalynarion_refrain'], ode9_c1['preface'][1]), 'Liturgy refrain differs from Ode IX'

    entry = {
        'kind': 'feast',
        'feast_ref': 'nativity_theotokos',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'great_feast',
        'fekula_section': '2F',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). Great Feast of the '
                 'Theotokos; ODS 3rd ed. vol. III has no entry for 8 September (index checked). Fekula 2F names the '
                 'Nativity (Sept. 8) among the feasts of the Theotokos it covers; rank and section as V1. Little '
                 'Vespers; Great Vespers with 8 stichera (three of Sergius, the third "(Twice)"; three of Stephen of '
                 'Jerusalem, the first "(Twice)"), three lessons, Litiya, blessing of the loaves; Matins with two '
                 'canons (John of Damascus, Tone II; Andrew of Crete, Tone VIII), interleaved, stored whole. Canon II '
                 'closes each ode with a Triadicon and a Theotokion. Ode IX: a rubric and refrain before each irmos '
                 '(`preface`); no refrain is printed between the troparia here, unlike 21 November. ONE katavasia is '
                 'printed before Ode IX, after Ode VII; after Ode IX the page gives "As Katavasia ... both Irmoi of '
                 'ODE IX of the canon of the Exaltation of the Cross", stored in `closing`. The three lessons print no '
                 'reference; citations are V1\'s identifications. The kontakion is pointed differently at its Liturgy site (final "**") and stored there as `liturgy_kontakion`. The Ode IX heading prints "OODE IX".'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
