# 11-25.pdf — APODOSIS OF THE ENTRY OF THE THEOTOKOS INTO THE TEMPLE;
# HIEROMARTYR CLEMENT, POPE OF ROME, AND PETER, PATRIARCH OF ALEXANDRIA
# (22 pages). One printed service: ONE entry, items tagged with `saint`.
# THREE canons, interleaved in print, stored whole.
# Between Vespers and Matins (pp. 3-4) the page prints a "Be it known" order
# for the apodosis falling on a Sunday, with a troparion and a kontakion of
# Clement printed nowhere else: stored as `appendix`, in page order.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

FE, CL, PE, BOTH = 'feast', 'Clement', 'Peter', 'Clement and Peter'

def build():
    s = Src('11-25')
    t, r = s.t, s.r
    s.mark(6, 140, 660)
    s.mark(167, 213, 282, 342, 386, 442, 493, 550)
    fe_labels = [214, 283, 343, 387, 443, 494, 551]
    cl_labels = [230, 301, 357, 399, 455, 508, 578]
    pe_labels = [241, 320, 370, 415, 472, 524, 590]
    for n in fe_labels:
        assert s.raw(n).lower() == 'canon of the feast', (n, s.raw(n))
    for n in cl_labels:
        assert s.raw(n) == 'Canon of the holy hieromartyr Clement', (n, s.raw(n))
    for n in pe_labels:
        assert s.raw(n) == 'Canon of the holy hieromartyr Peter', (n, s.raw(n))
    s.mark(*fe_labels, *cl_labels, *pe_labels)

    def strip(n):
        n.pop('repeat', None)
        return n
    assert same(strip(t(142, 145, 'b')), t(691, 694, 'c')), 'feast troparion sites diverge'
    # The VESPERS site (p3) carries the other pointing of the same words (the one
    # 11-24 prints at Liturgy). Registered as a `variant`; both stored as printed.
    assert not same(t(85, 88, 'a'), t(691, 694, 'c')), 'feast troparion at Vespers now matches: drop the variant row'
    assert same(t(82, 83, 'a'), t(147, 148, 'b'), t(697, 698, 'c')), 'hieromartyrs troparion sites diverge'
    assert same(t(261, 262, 'a'), t(700, 701, 'b')), 'hieromartyrs kontakion sites diverge'
    assert same(t(432, 435, 'a'), t(703, 706, 'b')), 'feast kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparia'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [13, 17, 22], 'LIC', sm=8, first={'tone': 1}, saint=FE) + [
            t(25, 28, 'LIC 4', sl=23, sm=24, label='plain', saint=CL),
            t(29, 33, 'LIC 5', sm=24, label='plain', saint=CL),
            t(34, 38, 'LIC 6', sm=24, label='plain', saint=CL),
        ],
        'lic_closer': t(41, 46, 'LIC Glory/Both now', sl=40, type='of_the_feast', saint=FE),
        'aposticha_rubric': r(47, 47, 'Aposticha rubric'),
        'aposticha': [
            t(49, 54, 'Aposticha 1', sm=48, label='plain', tone=5, saint=FE),
            t(55, 56, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(57, 62, 'Aposticha 2', sm=48, label='plain', saint=FE),
            t(63, 64, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(65, 70, 'Aposticha 3', sm=48, label='plain', saint=FE),
        ],
        'aposticha_closer': t(72, 79, 'Aposticha Glory/Both now', sl=71, type='of_the_feast',
                              composer='Sergius of Jerusalem', saint=FE),
        'troparia': [
            t(82, 83, 'Troparion of the hieromartyrs', sl=81, label='plain', saint=BOTH),
            t(85, 88, 'Troparion of the feast', sl=84, label=['glory', 'both_now', 'of_the_feast'], saint=FE),
        ],
    }

    s.mark(118)
    assert s.raw(118) == 'Kontakion of Clement, in Tone II: Spec. Mel.: “The steadfast ...”:', s.raw(118)
    appendix = [
        r(89, 91, 'Be it known: apodosis on a Sunday'),
        r(92, 93, 'On Saturday, at Little Vespers'),
        r(94, 100, 'At Great Vespers'),
        t(102, 108, 'Troparion of the holy hieromartyr Clement', sl=101, label='glory', saint=CL),
        r(109, 109, 'Both now, Troparion of the feast'),
        r(110, 117, 'At Matins'),
        t(119, 122, 'Kontakion of Clement', sourceLabel='Kontakion of Clement, in Tone II',
          spec_mel='The steadfast ...', tone=2, label='plain', saint=CL),
        r(123, 123, 'Sessional Hymn of the saint'),
        r(125, 133, 'After Ode VI, to the Hours'),
        r(134, 138, 'At Liturgy'),
    ]

    ode9_fe = {
        'preface': s.mix([('rub', 547, 547), ('ref', 548, 549)], 'Ode 9 preface'),
        'irmos': t(552, 555, 'Ode 9 irmos', pre='Irmos: '),
        'items': s.mix([('ref', 556, 557), ('t', 558, 560), ('ref', 561, 562), ('t', 563, 566),
                        ('ref', 568, 569), ('tri', 570, 572), ('ref', 573, 574), ('t', 575, 577)],
                       'Ode 9 Canon of the feast'),
    }
    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'sessional_1', 'sessional_2',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'troparia': [
            t(142, 145, 'Troparion of the feast at God is the Lord', sl=141, label='of_the_feast', saint=FE),
            t(147, 148, 'Troparion of the hieromartyrs at God is the Lord', sl=146, label='glory', saint=BOTH),
        ],
        'troparia_closing_rubric': r(149, 149, 'Both now, that of the feast (Once)'),
        'sessional_1': [
            t(152, 154, 'Sessional 1', sl=150, sm=151, label='plain', saint=FE),
            t(155, 155, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(158, 163, 'Sessional 2', sl=156, sm=157, label='plain', saint=FE),
            t(164, 164, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canon_rubric': r(165, 166, 'Canon rubric'),
        'canons': [
            {'title': s.raw(168), 'composer': 'Basil', 'tone': 1,
             'odes': {
                 1: s.ode(1, (169, 171), [173, 176, 180, 182]),
                 3: s.ode(3, (215, 217), [221, 224, 226, 229]),
                 4: s.ode(4, (284, 287), [290, 293, 296, 300]),
                 5: s.ode(5, (344, 346), [348, 350, 353, 356]),
                 6: s.ode(6, (388, 390), [392, 394, 396, 398]),
                 7: s.ode(7, (444, 445), [447, 449, 451, 454]),
                 8: s.ode(8, (495, 497), [499, 501, 504, 507]),
                 9: ode9_fe,
             }},
            {'title': s.raw(183), 'composer': 'Theophanes', 'tone': 8,
             'odes': {
                 1: s.ode(1, (184, 186), [189, 191, 194, 197]),
                 3: s.ode(3, (231, 232), [234, 236, 238, 240]),
                 4: s.ode(4, (302, 305), [308, 311, 315, 319]),
                 5: s.ode(5, (358, 359), [361, 364, 366, 369]),
                 6: s.ode(6, (400, 402), [405, 407, 410, 413]),
                 7: s.ode(7, (456, 458), [461, 464, 467, 471]),
                 8: s.ode(8, (509, 512), [515, 518, 520, 523]),
                 9: s.ode(9, (579, 581), [583, 585, 587, 589]),
             }},
            {'title': s.raw(198, 199), 'composer': 'Theophanes', 'tone': 8,
             'odes': {
                 1: s.ode(1, (200, 201), [203, 205, 207, 212]),
                 3: s.ode(3, (242, 244), [246, 248, 251, 257]),
                 # The ONLY katavasia printed in the file stands here, after Ode IV.
                 4: s.ode(4, (321, 323), [326, 329, 332, 335], kat=(337, 341)),
                 5: s.ode(5, (371, 372), [374, 377, 379, 385]),
                 6: s.ode(6, (416, 417), [419, 421, 423, 429]),
                 7: s.ode(7, (473, 475), [478, 481, 484, 492]),
                 8: s.ode(8, (525, 527), [531, 534, 538, 546]),
                 9: s.ode(9, (591, 593), [596, 599, 602, 604, 612]),
             }},
        ],
        'kontakia_ode3': [
            t(261, 262, 'Kontakion of the holy hieromartyrs (after Ode III)', sl=259, sm=260, label='plain', saint=BOTH),
        ],
        'sessional_ode3': [
            t(264, 266, 'Ode III sessional (Clement)', sl=263, label='plain', saint=CL),
            t(269, 274, 'Ode III sessional (Peter)', sl=267, sm=268, label='glory', saint=PE),
            t(277, 281, 'Ode III sessional (feast)', sl=275, sm=276, label=['both_now', 'of_the_feast'], saint=FE),
        ],
        'kontakia_ode6': [
            t(432, 435, 'Kontakion of the feast (after Ode VI)', sl=430, sm=431, label='of_the_feast', saint=FE),
            t(436, 441, 'Ikos of the feast', pre='Ikos: ', label='of_the_feast', saint=FE),
        ],
        'exapostilarion': t(615, 617, 'Exapostilarion of the hieromartyrs', sl=613, sm=614, label='plain', saint=BOTH),
        'exapostilarion_closer': t(619, 621, 'Exapostilarion of the feast', sl=618, type='of_the_feast', saint=FE),
        'praises_rubric': r(622, 622, 'Praises rubric'),
        'praises': s.seq(624, [626, 629, 633], 'Praises', sm=623, first={'tone': 1}, saint=FE) + [
            t(635, 637, 'Praises 4', sl=634, label='plain', saint=PE),
            t(638, 641, 'Praises 5', label='plain', saint=PE),
            t(642, 646, 'Praises 6', label='plain', saint=PE),
        ],
        'praises_glory': t(648, 652, 'Praises Glory', sl=647),
        'praises_closer': t(654, 657, 'Praises Both now', sl=653, type='of_the_feast', saint=FE),
        'great_doxology_rubric': r(658, 658, 'Great Doxology. Troparia. Litanies. Dismissal. First Hour.'),
    }
    s.mark(168, 183, 198, 199)

    s.mark(713, 726, 741, 754)
    for n, want in ((713, 'FOR THE FEAST:'), (726, 'FOR THE HOLY HIEROMARTYRS:'),
                    (741, 'FOR THE FEAST:'), (754, 'FOR THE HOLY HIEROMARTYRS:')):
        assert s.raw(n) == want, (n, s.raw(n))
    def rd(node, head):
        node['note'] = 'Printed under the heading "%s"' % head
        return node
    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia', 'prokeimena', 'epistles',
                  'alleluias', 'gospels', 'megalynarion_rubric', 'megalynarion_refrain', 'megalynarion',
                  'communion_verses'],
        'beatitudes_rubric': r(661, 661, 'Beatitudes rubric'),
        'beatitudes': s.seq(662, [665, 668, 672, 676, 679, 683, 686, 689], 'Beatitude', saint=FE),
        'troparia': [
            t(691, 694, 'Troparion of the feast at Liturgy', sl=690, label='of_the_feast', saint=FE),
            t(697, 698, 'Troparion of the holy hieromartyrs at Liturgy', sl=696, label='plain', saint=BOTH),
        ],
        'kontakia': [
            t(700, 701, 'Kontakion of the holy hieromartyrs at Liturgy', sl=699, label='glory', saint=BOTH),
            t(703, 706, 'Kontakion of the feast at Liturgy', sl=702, label=['both_now', 'of_the_feast'], saint=FE),
        ],
        'prokeimena': [
            t(707, 708, 'Prokeimenon of the feast',
              pre='Prokeimenon of the feast, in Tone III: The Hymn of the Theotokos: ', tone=3,
              label='of_the_feast', saint=FE),
            t(709, 710, 'Prokeimenon verse', pre='Verse: ', label='refrain', saint=FE),
            t(711, 712, 'Prokeimenon of the saints', pre='Prokeimenon of the saints, in Tone VI: ',
              label='plain', saint=BOTH),
        ],
        'epistles': [
            rd(s.reading(714, 725, 'Epistle for the feast', 'EPISTLE TO THE HEBREWS,', '§ 320(HEB. 9: 1-7)',
                         {'book': 'Hebrews', 'chapter': 9, 'verses': '1-7', 'pericope_number': 320}), 'FOR THE FEAST:'),
            rd(s.reading(727, 736, 'Epistle for the hieromartyrs', 'EPISTLE TO THE PHILIPPIANS,',
                         '§ 246(PHIL. 3: 20-4: 3)',
                         {'book': 'Philippians', 'chapter': 3, 'verses': '3:20-4:3', 'pericope_number': 246}),
               'FOR THE HOLY HIEROMARTYRS:'),
        ],
        'alleluias': [
            t(737, 737, 'Alleluia of the feast', pre='Alleluia, in Tone VIII: ', label='of_the_feast', saint=FE),
            t(738, 738, 'Alleluia verse', pre='Verse: ', label='refrain', saint=FE),
            t(739, 740, 'Alleluia of the saints', pre='Alleluia, In Tone II: ', label='plain', saint=BOTH),
        ],
        'gospels': [
            rd(s.reading(742, 753, 'Gospel for the feast', 'GOSPEL ACCORDING TO LUKE,',
                         '§54 (LK. 10: 38-42; 11: 27-28)',
                         {'book': 'Luke', 'chapter': 10, 'verses': '10:38-42, 11:27-28', 'pericope_number': 54}),
               'FOR THE FEAST:'),
            rd(s.reading(755, 765, 'Gospel for the hieromartyrs', 'GOSPEL ACCORDING TO MATTHEW,', '§ 11(MT. 5: 14-19)',
                         {'book': 'Matthew', 'chapter': 5, 'verses': '14-19', 'pericope_number': 11}),
               'FOR THE HOLY HIEROMARTYRS:'),
        ],
        'megalynarion_rubric': r(767, 767, 'Instead of It is truly meet'),
        'megalynarion_refrain': t(768, 769, 'Refrain before the festal Irmos', pre='Refrain: ', label='refrain'),
        'megalynarion': t(770, 773, 'Irmos of Ode IX of Canon I of the feast, at Liturgy', pre='Irmos: '),
        'communion_verses': [
            t(774, 775, 'Communion Verse, Feast', pre='Communion Verse, Feast: ', label='of_the_feast', saint=FE),
            t(776, 777, 'Communion Verse, Saint', pre='Communion Verse, Saint: ', label='plain', saint=BOTH),
        ],
    }

    entry = {
        'kind': 'apodosis',
        'feast_ref': 'entrance_theotokos',
        'title': s.node(s.raw(3, 5), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'doxology',
        'fekula_section': '2G3',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ONE printed service for the Apodosis (leave-taking) of the Entry and two hieromartyrs (Clement of '
                 'Rome, Peter of Alexandria): one entry, items tagged with `saint`. No Polyeleos; Matins prints 6 '
                 'stichera on the Praises and "Great Doxology". RANK IS PRINTED by ODS 3rd ed. vol. III, pp. 56-58, entry '
                 '`ods3-1125-wkd`: "A doxology-rank service on Monday through Saturday" (encoding_rule_v2.md 1.1 step '
                 '0; the section field keeps 2G3 as the general outline). The same entry gives the Hours (troparion of '
                 'the feast; Glory, of the Hieromartyrs; kontakion of the feast), the katavasia of the Nativity after '
                 'each ode, and names the printed feast canon as Canon II, whose unlabeled last troparion is the '
                 'theotokion. Vol. III also has a Sunday entry for a service of St. Clement of Ochrid on this date, '
                 'which the St. Sergius folder does not hold. THREE canons (the feast, by Basil; Clement; Peter), interleaved, stored whole. The canon '
                 'of the feast here prints a Triadicon and a closing troparion in each ode that 11-21 and 11-23 do not, '
                 'and Ode IX carries refrains before each troparion, stored labeled in page order. ONE katavasia is '
                 'printed in the whole file, after Ode IV; it is stored on Peter\'s Ode IV, where it stands. The '
                 'Liturgy prints TWO Epistles and TWO Gospels under "FOR THE FEAST:" / "FOR THE HOLY HIEROMARTYRS:": '
                 'lists `epistles`, `gospels`, each reading noting its heading. The `appendix` is printed BETWEEN '
                 'Vespers and Matins (pp. 3-4): the order when the apodosis falls on a Sunday, with a troparion and a '
                 'kontakion of Clement alone that appear nowhere else in the file.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
        'appendix': appendix,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
