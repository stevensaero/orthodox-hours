# 11-30.pdf — COMMEMORATION OF THE HOLY AND ALL-PRAISED APOSTLE ANDREW, THE
# FIRST-CALLED (27 pages). Headed AT VESPERS, in the vigil form: Blessed is the
# man, 8 stichera, three lessons, Litiya, blessing of the Loaves; Polyeleos;
# Great Doxology. THREE canons (Theotokos; two of the apostle), interleaved in
# print, stored whole. Forefeast-of-the-Nativity stichera at "Both now".
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('11-30')
    t, r = s.t, s.r
    s.mark(5, 221, 882)
    s.mark(288, 348, 431, 502, 559, 622, 693, 764)
    th_labels = [349, 432, 503, 560, 623, 694, 765]
    c1_labels = [364, 453, 516, 574, 641, 710, 783]
    c2_labels = [383, 472, 533, 590, 663, 734, 805]
    for n in th_labels:
        assert s.raw(n) == 'Canon of the Theotokos', (n, s.raw(n))
    for n in c1_labels:
        assert s.raw(n) == 'Canon I of the holy apostle', (n, s.raw(n))
    for n in c2_labels:
        assert s.raw(n) == 'Canon II of the holy apostle', (n, s.raw(n))
    s.mark(*th_labels, *c1_labels, *c2_labels)

    a_site, b_site = t(210, 212, 'a'), t(905, 907, 'b')
    a_site.pop('repeat', None)
    assert same(a_site, b_site), 'troparion sites diverge'
    s.mark(904)
    troparion = t(210, 212, 'Troparion of the holy apostle', sl=209)
    troparion.pop('repeat', None)
    troparion['verified_sites'] = [
        {'locus': 'p6 blessing of the Loaves', 'tone': 4, 'repeat': 2},
        {'locus': 'p25 AT LITURGY', 'tone': 4}]
    assert same(t(614, 616, 'k1'), t(909, 911, 'k2')), 'kontakion sites diverge'
    s.mark(908)
    kontakion = t(614, 616, 'Kontakion of the holy apostle', sl=612, sm=613,
                  verified_sites=[{'locus': 'p17 after Ode VI', 'tone': 2}, {'locus': 'p25 AT LITURGY', 'tone': 2}])
    ikos = t(617, 621, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric', 'no_vigil_rubric', 'troparion_closer'],
        'rubric': r(6, 6, 'Vespers rubric'),
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [14, 19, 25], 'LIC', sm=8, first={'tone': 4}),
        'lic_glory': t(27, 31, 'LIC Glory', sl=26, composer='Anatolius'),
        'lic_closer': t(33, 37, 'LIC Both now, of the forefeast', sl=32, type='of_the_feast'),
        'entrance_rubric': r(38, 38, 'Entrance'),
        'readings': [
            s.reading(40, 89, 'Lesson 1', 'THE FIRST EPISTLE GENERAL OF PETER', '(1:1-2:6)',
                      {'book': '1 Peter', 'chapter': 1, 'verses': '1:1-2:6'}),
            s.reading(90, 112, 'Lesson 2', 'THE FIRST EPISTLE GENERAL OF ST. PETER', '(2:21-3:9)',
                      {'book': '1 Peter', 'chapter': 2, 'verses': '2:21-3:9'}),
            s.reading(113, 131, 'Lesson 3', 'THE FIRST EPISTLE GENERAL OF PETER', '(4:1-11)',
                      {'book': '1 Peter', 'chapter': 4, 'verses': '1-11'}),
        ],
        'litiya': [
            t(134, 138, 'Litiya 1', sl=(132, 133), label='plain', tone=1, composer='Andrew of Jerusalem'),
            t(139, 143, 'Litiya 2', label='plain'),
            t(144, 150, 'Litiya 3', label='plain'),
            t(151, 158, 'Litiya 4', pre='In Tone VIII: ', label='plain', tone=8),
        ],
        'litiya_glory': t(161, 166, 'Litiya Glory', sl=160),
        'litiya_closer': t(168, 169, 'Litiya Both now, Theotokion', sl=167, type='theotokion'),
        'aposticha_rubric': r(170, 170, 'Aposticha rubric'),
        'aposticha': [
            t(172, 177, 'Aposticha 1', sm=171, label='plain', tone=5),
            t(178, 179, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(180, 186, 'Aposticha 2', sm=171, label='plain'),
            t(187, 188, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(189, 195, 'Aposticha 3', sm=171, label='plain'),
        ],
        'aposticha_glory': t(198, 202, 'Aposticha Glory', sl=197, composer='Germanus'),
        'aposticha_closer': t(204, 208, 'Aposticha Both now, of the forefeast', sl=203, type='of_the_feast'),
        'troparion_rubric': r(209, 209, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(213, 213, 'Virgin Theotokos rejoice rubric'),
        'no_vigil_rubric': r(214, 214, 'If a vigil is not served'),
        'troparion_closer': t(216, 219, 'Dismissal Theotokion (no vigil)', sl=215, type='theotokion'),
    }

    # Ode VIII of Canon II: "We bless the Father ..." is printed on its own line
    # above a troparion that carries its own inline "Trinitarian:" label.
    s.mark(751)
    assert s.raw(751) == 'We bless the Father, the Son and the Holy Spirit, the Lord:', s.raw(751)
    ode8_c2 = s.ode(8, (735, 737), [741, 744, 747, 750])
    ode8_c2['items'] += [
        t(752, 754, 'Ode 8 Trinitarian', pre='Trinitarian: ', label='trinitarion',
          sourceLabel='We bless the Father, the Son and the Holy Spirit, the Lord: Trinitarian'),
        t(755, 763, 'Ode 8 Both now, Theotokion', pre='Both now ..., Theotokion: ', label=['both_now', 'theotokion']),
    ]

    s.mark(841)
    assert s.raw(841) == 'Glory ..., Spec. Mel.: “Hearken, ye women ...”:', s.raw(841)
    mr, mt = s.split_inline(244, 246, 'magnification rubric', 'Magnification')
    matins = {
        'order': ['sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_glory', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'sessional_1': [
            t(224, 227, 'Sessional 1', sl=222, sm=223, label='plain'),
            t(229, 232, 'Sessional 1 Theotokion', sl=228, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(235, 238, 'Sessional 2', sl=233, sm=234, label='plain'),
            t(240, 243, 'Sessional 2 Theotokion', sl=239, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(247, 247, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(248, 249, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(250, 250, 'after the selected verses'),
        'sessional_polyeleos': [
            t(253, 256, 'Polyeleos sessional', sl=251, sm=252, label='plain'),
            t(259, 262, 'Polyeleos sessional Theotokion', sl=258, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(263, 263, 'Song of Ascents rubric'),
        'prokeimenon': t(264, 265, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(266, 267, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(268, 268, 'Let every breath'),
        'gospel': s.reading(269, 278, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. MATTHEW', '(4:18-23)',
                            {'book': 'Matthew', 'chapter': 4, 'verses': '18-23'}),
        'psalm50_sticheron': t(280, 285, 'After Psalm 50 sticheron', sl=279),
        'canon_rubric': r(286, 287, 'Canon rubric'),
        'canons': [
            {'title': s.raw(289), 'tone': 1,
             'odes': {
                 1: s.ode(1, (290, 292), [295, 299, 301, 304]),
                 3: s.ode(3, (350, 352), [354, 357, 360, 363]),
                 4: s.ode(4, (433, 436), [440, 444, 448, 452]),
                 5: s.ode(5, (504, 506), [508, 510, 512, 515]),
                 6: s.ode(6, (561, 563), [566, 569, 571, 573]),
                 7: s.ode(7, (624, 627), [630, 633, 636, 639]),
                 8: s.ode(8, (695, 697), [700, 703, 706, 709]),
                 9: s.ode(9, (766, 769), [772, 775, 778, 782]),
             }},
            {'title': s.raw(305), 'composer': 'John the Monk', 'tone': 1,
             'odes': {
                 1: s.ode(1, (306, 308), [311, 314, 316, 319]),
                 3: s.ode(3, (365, 368), [372, 376, 379, 382]),
                 4: s.ode(4, (454, 456), [459, 462, 465, 468, 471]),
                 5: s.ode(5, (517, 520), [523, 526, 529, 532]),
                 6: s.ode(6, (575, 577), [580, 583, 586, 589]),
                 7: s.ode(7, (642, 645), [648, 652, 655, 658, 662]),
                 8: s.ode(8, (711, 714), [717, 721, 725, 729, 733]),
                 9: s.ode(9, (784, 787), [790, 793, 797, 800, 804]),
             }},
            {'title': s.raw(320), 'tone': 1,
             'odes': {
                 1: s.ode(1, (321, 323), [326, 329, 332, 337, 340, 347]),
                 3: s.ode(3, (384, 386), [389, 391, 394, 397, 400, 407]),
                 4: s.ode(4, (473, 476), [479, 482, 485, 489, 492, 501]),
                 5: s.ode(5, (534, 536), [539, 542, 545, 548, 551, 558]),
                 6: s.ode(6, (591, 593), [595, 597, 599, 601, 604, 611]),
                 7: s.ode(7, (664, 667), [670, 673, 676, 679, 684, 692]),
                 8: ode8_c2,
                 9: s.ode(9, (806, 809), [812, 815, 818, 821, 825, 834]),
             }},
        ],
        'sessional_ode3': [
            t(411, 416, 'Ode III sessional', sl=409, sm=410, label='plain'),
            t(418, 423, 'Ode III sessional, Glory', sl=417, label='glory'),
            t(425, 430, 'Ode III sessional Theotokion', sl=424, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'exapostilarion': t(837, 840, 'Exapostilarion', sl=835, sm=836, label='plain'),
        'exapostilarion_glory': t(842, 844, 'Exapostilarion, Glory', sourceLabel='Glory ...',
                                  spec_mel='Hearken, ye women ...', label='glory'),
        'exapostilarion_closer': t(845, 848, 'Exapostilarion Theotokion', pre='Both now ..., Theotokion: ',
                                   type='theotokion'),
        'praises_rubric': r(849, 849, 'Praises rubric'),
        'praises': s.seq(851, [854, 858, 862, 865], 'Praises', sm=850, first={'tone': 1}),
        'praises_glory': t(867, 873, 'Praises Glory', sl=866),
        'praises_closer': t(875, 879, 'Praises Both now', sl=874, type='of_the_feast'),
        'great_doxology_rubric': r(880, 880, 'Great Doxology. Troparia. Litinies. Dismissal. First Hour'),
    }
    s.mark(289, 305, 320)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(883, 884, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 885, 888), ('t', 889, 891), ('t', 892, 894), ('t', 895, 896), ('t', 897, 898),
                             ('glorytri', 899, 900), ('boththeot', 901, 903)], 'Beatitude'),
        'prokeimenon': t(912, 913, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VIII: '),
        'prokeimenon_verse': t(914, 915, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(917, 928, 'Epistle', 'THE FIRST EPISTLE OF ST. PAUL TO THE CORINTHIANS', '(4:9-16)',
                             {'book': '1 Corinthians', 'chapter': 4, 'verses': '9-16'}),
        'alleluia': t(929, 930, 'Alleluia', pre='Alleluia, in Tone I: '),
        'alleluia_verse': t(931, 931, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(932, 957, 'Gospel', 'READING FROM THE GOSPEL ACCORDING TO ST. JOHN', '(1:35-51)',
                            {'book': 'John', 'chapter': 1, 'verses': '35-51'}),
        'communion_verse': t(958, 959, 'Communion Verse', pre='Communion Verse: '),
    }
    # The Beatitudes' closing theotokion is the Ode VI theotokion of Canon II CUT
    # SHORT ("... in His image."); registered as a variant, both stored as printed.
    assert not same(liturgy['beatitudes'][6], matins['canons'][2]['odes'][6]['items'][5]), 'beatitude theotokion now full'

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ODS 3rd ed. vol. III has no entry for 30 November (index checked 14 Nov 2026). The page is headed AT '
                 'VESPERS (stored under `vespers`, the name printed) but is in the vigil form: Blessed is the man, 8 '
                 'stichera (three printed: Thrice, Thrice, Twice), three lessons, a LITIYA with "the Sticheron of the '
                 'temple", the blessing of the Loaves, Polyeleos with a magnification, and the Great Doxology. Stored '
                 'Vigil, Fekula 2F, PROVISIONALLY: the page also prints "But if a vigil is not served", and vol. III '
                 'shows a printed Litiya does not by itself settle Vigil against Polyeleos (the same question as '
                 'Q-0001 for the Apostle Philip). The three lessons are from 1 Peter and print their references. '
                 'THREE canons (the Theotokos; Canon I of the apostle, by John the Monk; Canon II of the apostle), '
                 'interleaved in print, stored whole; Canon II closes each ode with "Glory ..., Trinitarian:" and '
                 '"Both now ..., Theotokion:", double labels kept in print order. The "Both now" stichera at Lord I '
                 'have cried, the Aposticha and the Praises are of the FOREFEAST of the Nativity. Matins prints no '
                 'troparion at God is the Lord; the troparion stands at the blessing of the Loaves and at Liturgy. '
                 'The closing rubric prints "Litinies".'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
