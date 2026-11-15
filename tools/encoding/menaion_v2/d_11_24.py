# 11-24.pdf — AFTERFEAST OF THE ENTRY OF THE MOST HOLY THEOTOKOS INTO THE
# TEMPLE; HOLY GREAT MARTYR CATHERINE OF ALEXANDRIA; HOLY GREAT MARTYR
# MERCURIUS OF CAESAREA IN CAPPADOCIA (22 pages).
# One printed service for an afterfeast and two great-martyrs: ONE entry, items
# tagged with `saint`. THREE canons, interleaved in print, stored whole.
# Matins prints BOTH stichera on the Praises AND stichera on the Aposticha
# (open question Q-0006). Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

FE, CA, ME = 'feast', 'Catherine', 'Mercurius'

def build():
    s = Src('11-24')
    t, r = s.t, s.r
    s.mark(9, 115, 718)
    s.mark(153, 215, 296, 350, 397, 461, 515, 588)
    fe_labels = [154, 216, 297, 351, 398, 462, 516, 589]
    ca_labels = [233, 313, 367, 413, 479, 538, 609]
    me_labels = [250, 336, 386, 431, 495, 564, 636]
    for n in fe_labels:
        assert s.raw(n) == 'Canon of the feast', (n, s.raw(n))
    for n in ca_labels:
        assert s.raw(n) == 'Canon of the holy great-martyr Catherine', (n, s.raw(n))
    for n in me_labels:
        assert s.raw(n) == 'Canon of the holy great-martyr Mercurius', (n, s.raw(n))
    s.mark(*fe_labels, *ca_labels, *me_labels)

    def strip(n):
        n.pop('repeat', None)
        return n
    assert same(t(110, 113, 'a'), strip(t(117, 120, 'b'))), 'feast troparion sites diverge'
    # The Liturgy site (p20) prints the SAME words with DIFFERENT pointing: three
    # asterisks moved. Recorded as a `variant` pair, both stored as printed.
    assert not same(t(110, 113, 'a'), t(748, 751, 'c')), 'feast troparion at Liturgy now matches: drop the variant row'
    assert same(t(89, 94, 'a'), t(122, 127, 'b'), t(753, 758, 'c')), 'Catherine troparion sites diverge'
    assert same(t(96, 103, 'a'), t(761, 768, 'b')), 'Catherine alternate troparion sites diverge'
    assert same(t(105, 108, 'a'), t(129, 132, 'b'), t(770, 773, 'c')), 'Mercurius troparion sites diverge'
    assert same(t(263, 266, 'a'), t(783, 786, 'b')), 'feast kontakion sites diverge'
    assert same(t(276, 278, 'a'), t(779, 781, 'b')), 'Mercurius kontakion sites diverge'
    assert same(t(451, 453, 'a'), t(775, 777, 'b')), 'Catherine kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'aposticha_rubric', 'aposticha',
                  'aposticha_glory', 'aposticha_closer', 'troparia'],
        'lic_rubric': r(10, 10, 'LIC rubric'),
        'lic': s.seq(12, [15, 18, 22], 'LIC', sm=11, first={'tone': 1}, saint=CA) + [
            t(25, 29, 'LIC 4', sl=23, sm=24, label='plain', saint=ME),
            t(30, 33, 'LIC 5', sm=24, label='plain', saint=ME),
            t(34, 38, 'LIC 6', sm=24, label='plain', saint=ME),
        ],
        'lic_glory': t(41, 48, 'LIC Glory', sl=40),
        'lic_closer': t(50, 55, 'LIC Both now', sl=49, type='of_the_feast', saint=FE),
        'aposticha_rubric': r(56, 56, 'Aposticha rubric'),
        'aposticha': [
            t(58, 61, 'Aposticha 1', sm=57, label='plain', tone=1, saint=FE),
            t(62, 63, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(64, 66, 'Aposticha 2', sm=57, label='plain', saint=FE),
            t(67, 68, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(69, 72, 'Aposticha 3', sm=57, label='plain', saint=FE),
        ],
        'aposticha_glory': t(74, 77, 'Aposticha Glory', sl=73),
        'aposticha_closer': t(80, 87, 'Aposticha Both now, of the feast', sl=79, type='of_the_feast', saint=FE),
        'troparia': [
            t(89, 94, 'Troparion of the great-martyr Catherine', sl=88, label='plain', saint=CA),
            t(96, 103, 'Or this Troparion (Catherine)', sl=95, label='plain', saint=CA),
            t(105, 108, 'Troparion of the great-martyr Mercurius', sl=104, label='glory', saint=ME),
            t(110, 113, 'Troparion of the feast', sl=109, label=['both_now', 'of_the_feast'], saint=FE),
        ],
    }

    s.mark(135)
    assert s.raw(135) == 'Spec. Mel.: “When the stone had been sealed ...”-', s.raw(135)
    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'sessional_1', 'sessional_2',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer'],
        'troparia': [
            t(117, 120, 'Troparion of the feast at God is the Lord', sl=116, label='of_the_feast', saint=FE),
            t(122, 127, 'Troparion of the great-martyr Catherine at God is the Lord', sl=121, label='plain', saint=CA),
            t(129, 132, 'Troparion of the great-martyr Mercurius at God is the Lord', sl=128, label='glory', saint=ME),
        ],
        'troparia_closing_rubric': r(133, 133, 'Both now, Troparion of the feast (Once)'),
        'sessional_1': [
            t(136, 139, 'Sessional 1', sl=134, spec_mel='When the stone had been sealed ...', label='plain', saint=FE),
            t(140, 140, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(143, 147, 'Sessional 2', sl=141, sm=142, label='plain', saint=FE),
            t(148, 148, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canon_rubric': r(149, 151, 'Canon rubric'),
        'canons': [
            {'title': s.raw(154), 'tone': 4,
             'odes': {
                 1: s.ode(1, (155, 157), [160, 163, 165, 168]),
                 3: s.ode(3, (217, 219), [222, 225, 228, 232]),
                 4: s.ode(4, (298, 300), [303, 306, 309, 312]),
                 5: s.ode(5, (352, 354), [357, 360, 363, 366]),
                 6: s.ode(6, (399, 401), [404, 407, 409, 412]),
                 7: s.ode(7, (463, 466), [469, 472, 475, 478]),
                 8: s.ode(8, (517, 520), [524, 528, 532, 536]),
                 9: s.ode(9, (590, 593), [597, 600, 604, 608]),
             }},
            {'title': s.raw(169, 170), 'composer': 'Theophanes', 'tone': 8,
             'odes': {
                 1: s.ode(1, (171, 174), [177, 180, 183, 186, 190]),
                 3: s.ode(3, (234, 237), [240, 243, 246, 249]),
                 4: s.ode(4, (314, 317), [321, 324, 328, 331, 335]),
                 5: s.ode(5, (368, 371), [374, 377, 381, 384]),
                 6: s.ode(6, (414, 417), [420, 423, 427, 430]),
                 7: s.ode(7, (480, 482), [485, 488, 491, 494]),
                 8: s.ode(8, (539, 543), [547, 551, 555, 559, 563]),
                 9: s.ode(9, (610, 613), [617, 622, 626, 630, 635]),
             }},
            {'title': s.raw(192, 194), 'composer': 'Joseph the Hymnographer', 'tone': 8,
             'odes': {
                 1: s.ode(1, (195, 198), [202, 206, 210, 214]),
                 3: s.ode(3, (251, 252), [254, 256, 258, 260]),
                 4: s.ode(4, (337, 338), [341, 343, 346, 349]),
                 5: s.ode(5, (387, 388), [390, 392, 394, 396]),
                 6: s.ode(6, (432, 435), [438, 441, 444, 448]),
                 7: s.ode(7, (496, 498), [502, 505, 508, 511, 514]),
                 8: s.ode(8, (565, 569), [573, 577, 583, 587]),
                 9: s.ode(9, (637, 640), [643, 647, 651, 654, 658]),
             }},
        ],
        'kontakia_ode3': [
            t(263, 266, 'Kontakion of the feast (after Ode III)', sl=261, sm=262, label='of_the_feast', saint=FE),
            t(268, 273, 'Ikos of the feast', pre='Ikos: ', label='of_the_feast', saint=FE),
            t(276, 278, 'Kontakion of the great-martyr Mercurius (after Ode III)', sl=274, sm=275,
              label='plain', saint=ME),
        ],
        'sessional_ode3': [
            t(281, 284, 'Ode III sessional (Catherine)', sl=279, sm=280, label='plain', saint=CA),
            t(287, 290, 'Ode III sessional (Mercurius)', sl=285, sm=286, label='glory', saint=ME),
            t(292, 295, 'Ode III sessional (feast)', sl=291, label=['both_now', 'of_the_feast'], saint=FE),
        ],
        'kontakia_ode6': [
            t(451, 453, 'Kontakion of the great-martyr Catherine (after Ode VI)', sl=449, sm=450,
              label='plain', saint=CA),
            t(454, 459, 'Ikos of the great-martyr Catherine', pre='Ikos: ', label='plain', saint=CA),
        ],
        'exapostilarion': t(662, 665, 'Exapostilarion of Catherine', sl=660, sm=661, label='plain', saint=CA),
        'exapostilarion_closer': t(668, 671, 'Exapostilarion of the feast', sl=666, sm=667,
                                   type='of_the_feast', saint=FE),
        'praises_rubric': r(672, 672, 'Praises rubric'),
        'praises': s.seq(674, [677, 681, 686], 'Praises', sm=673, first={'tone': 4}, saint=CA),
        'praises_glory': t(688, 691, 'Praises Glory', sl=687, composer='Babylas the Monk', saint=CA),
        'praises_closer': t(693, 701, 'Praises Both now', sl=692, type='of_the_feast',
                            composer='Sergius of the Holy City', saint=FE),
        'aposticha_rubric': r(702, 702, 'Matins Aposticha rubric'),
        'aposticha': [
            t(704, 705, 'Matins Aposticha 1', sm=703, label='plain', tone=2, saint=FE),
            t(706, 707, 'Matins Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(708, 709, 'Matins Aposticha 2', sm=703, label='plain', saint=FE),
            t(710, 711, 'Matins Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(712, 713, 'Matins Aposticha 3', sm=703, label='plain', saint=FE),
        ],
        'aposticha_closer': t(715, 716, 'Matins Aposticha Glory/Both now', sl=714, type='of_the_feast', saint=FE),
    }
    s.mark(169, 170, 192, 193, 194)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia', 'prokeimena', 'epistle',
                  'alleluias', 'gospel', 'megalynarion_rubric', 'megalynarion_refrain', 'megalynarion',
                  'communion_verses'],
        'beatitudes_rubric': r(719, 720, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 721, 723), ('t', 724, 726), ('t', 727, 730), ('t', 731, 734),
                             ('t', 735, 737), ('t', 738, 740), ('t', 741, 743), ('theot', 744, 746)], 'Beatitude'),
        'troparia': [
            t(748, 751, 'Troparion of the feast at Liturgy', sl=747, label='of_the_feast', saint=FE),
            t(753, 758, 'Troparion of the great-martyr Catherine at Liturgy', sl=752, label='plain', saint=CA),
            t(761, 768, 'Or this Troparion (Catherine) at Liturgy', sl=760, label='plain', saint=CA),
            t(770, 773, 'Troparion of the great-martyr Mercurius at Liturgy', sl=769, label='plain', saint=ME),
        ],
        'kontakia': [
            t(775, 777, 'Kontakion of the great-martyr Catherine at Liturgy', sl=774, label='plain', saint=CA),
            t(779, 781, 'Kontakion of the great-martyr Mercurius at Liturgy', sl=778, label='plain', saint=ME),
            t(783, 786, 'Kontakion of the feast at Liturgy', sl=782, label='of_the_feast', saint=FE),
        ],
        'prokeimena': [
            t(787, 788, 'Prokeimenon of the feast', pre='Prokeimenon, in Tone III: the Song of the Theotokos: ',
              tone=3, label='of_the_feast', saint=FE),
            t(789, 789, 'Prokeimenon of the martyrs', pre='Prokeimenon, in Tone IV: ', label='plain'),
            t(790, 790, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        ],
        'epistle': s.reading(791, 802, 'Epistle', 'THE EPISTLE OF ST. PAUL TO THE EPHESIANS', '(6:10-17)',
                             {'book': 'Ephesians', 'chapter': 6, 'verses': '10-17'}),
        'alleluias': [
            t(803, 803, 'Alleluia of the feast', pre='Alleluia, in Tone VIII: ', label='of_the_feast', saint=FE),
            t(804, 805, 'Alleluia of the martyrs', pre='Alleluia, in Tone I: ', label='plain'),
            t(806, 807, 'Alleluia verse', pre='Verse: ', label='refrain'),
        ],
        'gospel': s.reading(808, 817, 'Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(21:12-19)',
                            {'book': 'Luke', 'chapter': 21, 'verses': '12-19'}),
        'megalynarion_rubric': r(818, 818, 'Instead of It is truly meet'),
        'megalynarion_refrain': t(819, 820, 'Refrain before the festal Irmos', pre='Refrain: ', label='refrain'),
        'megalynarion': t(821, 824, 'Irmos of Ode IX of the feast, at Liturgy', pre='Irmos: '),
        'communion_verses': [
            t(825, 826, 'Communion Verse of the feast', pre='Communion Verse of the feast: ',
              label='of_the_feast', saint=FE),
            t(827, 828, 'Communion Verse of the saints', pre='Communion Verse of the saints: ', label='plain'),
        ],
    }
    assert same(liturgy['megalynarion'], matins['canons'][0]['odes'][9]['irmos']), 'Liturgy irmos differs from Ode IX'

    entry = {
        'kind': 'afterfeast',
        'feast_ref': 'entrance_theotokos',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'the holy Great-martyr Catherine and the holy Great-martyr Mercurius',
        'title': s.node(s.raw(3, 8), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2G1',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ONE printed service for the Afterfeast of the Entry and two great-martyrs (Catherine of Alexandria, '
                 'Mercurius of Caesarea): one entry, items tagged with `saint`. 3 stichera of each martyr at Lord I '
                 'have cried. THREE canons (Canon I of the feast; Catherine, by Theophanes; Mercurius, by Joseph the '
                 'Hymnographer), interleaved in print, stored whole. The troparion of the feast reads "Rejoice, O thou fulfillment" here where 11-21 prints "Rejoice, thou fulfillment", and its Liturgy print site moves three pointing asterisks: every site stored as printed, the differences registered as variants. RANK IS PROVISIONAL, open question Q-0006: Matins '
                 'prints 4 stichera on the Praises with Glory and Both now, and THEN stichera on the Aposticha, with no '
                 'Polyeleos and no Great Doxology rubric. Stored Simple under Fekula 2G1 (which covers simple through '
                 'doxology services in an afterfeast) and stored exactly as printed, Praises then Aposticha. Catherine '
                 'has TWO troparia ("Or this Troparion"), both stored at each print site. The Epistle and Gospel '
                 'headings print chapter and verse but no pericope number. Troparia and kontakia at every print site '
                 'in positional lists; paired Liturgy propers as 11-22.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
