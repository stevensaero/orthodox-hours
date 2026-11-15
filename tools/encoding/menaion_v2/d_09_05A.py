# 09-05A.pdf — COMMEMORATION OF THE HOLY PROPHET ZACHARIAS & THE HOLY &
# RIGHTEOUS ELIZABETH, THE PARENTS OF THE HONORABLE FORERUNNER JOHN THE
# BAPTIST (19 pages). Second file of 5 September (c1); the service V1 encoded
# and ODS vol. III follows. OVERLAP DATE for the V1/V2 comparison, shape
# "Polyeleos, lessons, Litiya". Two canons (prophet; righteous one),
# interleaved, stored whole; items tagged `saint`.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

ZA, EL, BOTH = 'Zacharias', 'Elizabeth', 'Zacharias and Elizabeth'

def build():
    s = Src('09-05A')
    t, r = s.t, s.r
    s.mark(6, 199, 620)
    s.mark(288, 320, 379, 411, 440, 477, 512, 547)
    za_labels = [321, 380, 412, 441, 478, 513, 548]
    el_labels = [332, 391, 423, 452, 494, 529, 562]
    for n in za_labels:
        assert s.raw(n) == 'Canon of the holy prophet', (n, s.raw(n))
    for n in el_labels:
        assert s.raw(n) == 'Canon of the righteous one', (n, s.raw(n))
    s.mark(*za_labels, *el_labels)

    assert same(t(191, 192, 'tr1'), t(641, 642, 'tr2')), 'troparion sites diverge'
    s.mark(640)
    troparion = t(191, 192, 'Troparion of the righteous ones', sl=190, saint=BOTH,
                  verified_sites=[{'locus': 'p5 end of Vespers', 'tone': 2}, {'locus': 'p18 AT LITURGY', 'tone': 2}])
    assert same(t(350, 353, 'a'), t(644, 647, 'b')), 'prophet kontakion sites diverge'
    assert same(t(468, 471, 'a'), t(649, 652, 'b')), 'righteous one kontakion sites diverge'

    NOTE = ('No reference printed. Citation as V1 recorded it for this file (identified from the printed text, not '
            'read off a printed reference); confirm the span against the page.')
    vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion', 'troparion_closer'],
        'rubric': r(7, 7, 'Vespers rubric'),
        'lic_rubric': r(8, 8, 'LIC rubric'),
        'lic': s.seq(10, [14, 19, 24], 'LIC', sm=9, first={'tone': 4}, saint=ZA) + [
            t(27, 30, 'LIC 4', sl=25, sm=26, label='plain', saint=EL),
            t(31, 33, 'LIC 5', sm=26, label='plain', saint=EL),
            t(34, 37, 'LIC 6', sm=26, label='plain', saint=EL),
        ],
        'lic_glory': t(40, 44, 'LIC Glory', sl=39, composer='John the Monk', saint=ZA),
        'dogmatikon': t(46, 51, 'LIC Both now, Dogmatic Theotokion', sl=45, type='dogmatic_theotokion'),
        'entrance_rubric': r(52, 52, 'Entrance'),
        'readings': [
            s.reading_id(53, 75, 'Lesson 1', {'book': 'Genesis', 'chapter': 18, 'verses': '1-14'},
                         'Opens "God appeared to Abraham by the oak of Mamre". ' + NOTE),
            s.reading_id(77, 115, 'Lesson 2', {'book': 'Judges', 'chapter': 13, 'verses': '2-20'},
                         'Opens "And there was a man of Zorah" (the birth of Samson announced). ' + NOTE),
            s.reading_id(117, 141, 'Lesson 3', {'book': '1 Kings', 'chapter': 1, 'verses': '9-20'},
                         'Opens "And Hannah rose up after they had eaten in Shiloh" (First Kings, i.e. 1 Samuel). ' + NOTE),
        ],
        'litiya': [
            t(143, 145, 'Litiya 1', sl=142, label='plain'),
            t(146, 147, 'Litiya 2', label='plain'),
            t(148, 150, 'Litiya 3', label='plain'),
        ],
        'litiya_glory': t(152, 154, 'Litiya Glory', sl=151),
        'litiya_closer': t(157, 161, 'Litiya Both now, Theotokion', sl=156, type='theotokion'),
        'aposticha_rubric': r(162, 162, 'Aposticha rubric'),
        'aposticha': [
            t(163, 165, 'Aposticha 1', label='plain', tone=1, saint=EL),
            t(166, 166, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(167, 169, 'Aposticha 2', label='plain', saint=EL),
            t(170, 171, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(172, 174, 'Aposticha 3', label='plain', saint=EL),
        ],
        'aposticha_glory': t(176, 182, 'Aposticha Glory, of the holy prophet', sl=175, composer='Anatolius', saint=ZA),
        'aposticha_closer': t(184, 189, 'Aposticha Both now, Theotokion', sl=183, type='theotokion'),
        'troparion_closer': t(195, 197, 'Troparion Theotokion', sl=194, type='theotokion'),
    }

    mr, mt = s.split_inline(224, 226, 'megalynarion rubric', 'Megalynarion')
    matins = {
        'order': ['sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_glory', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'sessional_1': [
            t(202, 206, 'Sessional 1', sl=200, sm=201, label='plain'),
            t(208, 212, 'Sessional 1 Theotokion', sl=207, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(215, 218, 'Sessional 2', sl=213, sm=214, label='plain'),
            t(220, 223, 'Sessional 2 Theotokion', sl=219, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(227, 227, 'Selected Psalm Verse rubric'),
        'megalynarion_verse': t(228, 229, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(230, 230, 'after the selected verses'),
        'sessional_polyeleos': [
            t(233, 236, 'Polyeleos sessional', sl=231, sm=232, label='plain'),
            t(239, 241, 'Polyeleos sessional Theotokion', sl=238, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'prokeimenon': t(242, 243, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(244, 244, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(245, 245, 'Let every breath'),
        'gospel': s.reading(246, 278, 'Matins Gospel', 'GOSPEL ACCORDING TO LUKE.', '§ 2 (LK. 1: 5-25)',
                            {'book': 'Luke', 'chapter': 1, 'verses': '5-25', 'pericope_number': 2}),
        'psalm50_sticheron': t(281, 284, 'After Psalm 50 sticheron', sl=280),
        'canon_rubric': r(285, 287, 'Canon rubric'),
        'canons': [
            {'title': s.raw(289), 'composer': 'Theophanes', 'tone': 8,
             'odes': {
                 1: s.ode(1, (290, 292), [294, 297, 299, 302]),
                 3: s.ode(3, (322, 323), [325, 327, 329, 331]),
                 4: s.ode(4, (381, 382), [384, 386, 388, 390]),
                 5: s.ode(5, (413, 414), [416, 418, 420, 422]),
                 6: s.ode(6, (442, 443), [445, 447, 449, 451]),
                 7: s.ode(7, (479, 481), [484, 487, 490, 493]),
                 8: s.ode(8, (514, 516), [519, 522, 525, 528]),
                 9: s.ode(9, (549, 551), [554, 556, 558, 561]),
             }},
            {'title': s.raw(303), 'tone': 8,
             'odes': {
                 # Ode I ends with the katavasia given as an incipit.
                 1: s.ode(1, (304, 306), [309, 312, 314, 317], kat=318),
                 3: s.ode(3, (333, 334), [338, 341, 344, 347]),
                 4: s.ode(4, (392, 394), [397, 402, 406, 410]),
                 5: s.ode(5, (424, 426), [429, 431, 434, 439]),
                 6: s.ode(6, (453, 455), [458, 461, 463, 466]),
                 7: s.ode(7, (495, 497), [500, 503, 506, 511]),
                 8: s.ode(8, (530, 533), [536, 539, 542, 545]),
                 9: s.ode(9, (563, 566), [570, 574, 577, 581]),
             }},
        ],
        'kontakia_ode3': [
            t(350, 353, 'Kontakion of the holy prophet (after Ode III)', sl=348, sm=349, label='plain', saint=ZA),
            t(354, 361, 'Ikos of the holy prophet', pre='Ikos: ', label='plain', saint=ZA),
        ],
        'sessional_ode3': [
            t(364, 368, 'Ode III sessional (prophet)', sl=362, sm=363, label='plain', saint=ZA),
            t(370, 373, 'Ode III sessional (righteous one)', sl=369, label='glory', saint=EL),
            t(375, 378, 'Ode III sessional Theotokion', sl=374, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'kontakia_ode6': [
            t(468, 471, 'Kontakion of the righteous one (after Ode VI)', sl=467, label='plain', saint=EL),
            t(473, 476, 'Ikos of the righteous one', pre='Ikos: ', label='plain', saint=EL),
        ],
        'exapostilarion': t(585, 587, 'Exapostilarion of the prophet', sl=583, sm=584, label='plain', saint=ZA),
        'exapostilarion_glory': t(590, 592, 'Exapostilarion of the righteous one', sl=588, sm=589, label='glory',
                                  saint=EL),
        'exapostilarion_closer': t(594, 596, 'Exapostilarion Theotokion', sl=593, type='theotokion'),
        'praises_rubric': r(597, 597, 'Praises rubric'),
        'praises': s.seq(598, [601, 604, 607], 'Praises', first={'tone': 1}, saint=EL),
        'praises_glory': t(609, 611, 'Praises Glory', sl=608),
        'praises_closer': t(613, 617, 'Praises Both now', sl=612, type='theotokion'),
        'great_doxology_rubric': r(618, 618, 'Great Doxology, and the dismissal.'),
    }
    s.mark(289, 303)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakia',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(621, 622, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 623, 624), ('t', 625, 626), ('t', 627, 628), ('t', 629, 631), ('t', 632, 634),
                             ('t', 635, 636), ('theot', 637, 639)], 'Beatitude'),
        'kontakia': [
            t(644, 647, 'Kontakion of the holy prophet at Liturgy', sl=643, label='plain', saint=ZA),
            t(649, 652, 'Kontakion of the righteous one at Liturgy', sl=648, label='plain', saint=EL),
        ],
        'prokeimenon': t(653, 654, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(655, 655, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(657, 668, 'Epistle', 'EPISTLE TO THE HEBREWS,', '§314 (HEB.6: 13-20)',
                             {'book': 'Hebrews', 'chapter': 6, 'verses': '13-20', 'pericope_number': 314}),
        'alleluia': t(669, 670, 'Alleluia', pre='Alleluia, in Tone VII: '),
        'gospel': s.reading(671, 688, 'Gospel', 'GOSPEL ACCORDING TO ST. MATTHEW,', '§ 96 (MT. 23: 29-39)',
                            {'book': 'Matthew', 'chapter': 23, 'verses': '29-39', 'pericope_number': 96}),
        'communion_verse': t(689, 690, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'the holy Prophet Zacharias and the holy and righteous Elizabeth',
        'title': s.node(s.raw(3, 5), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). Second FILE of 5 '
                 'September and the service of the day: RANK IS PRINTED by ODS 3rd ed. vol. III, pp. 14-16, entry '
                 '`ods3-0905-wkd` (a polyeleos-rank service on a weekday; encoding_rule_v2.md 1.1 step 0), as V1 '
                 'recorded. The page prints a Litiya ("the Sticheron of the temple, followed by these Stichera") in a '
                 'Polyeleos service: the case vol. III allows for. 8 stichera, 4 of the prophet (three printed, the '
                 'first "(Twice)") and 4 of the righteous Elizabeth (three printed, the first "(Twice)" on a line of '
                 'its own). TWO canons, the prophet\'s (Theophanes, headed Tone VIII here; 09-05.pdf heads the same '
                 'canon "Tone I") and the righteous one\'s, interleaved, stored whole. One troparion "of the righteous '
                 'ones" (entry-level); two kontakia, one per saint, in positional lists. The three lessons print no '
                 'reference; citations are V1\'s identifications. Ode I of the second canon ends with the katavasia '
                 'as an incipit.'),
        'troparion': troparion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
