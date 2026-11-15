# 11-20.pdf — FOREFEAST OF THE ENTRANCE OF THE MOST HOLY THEOTOKOS;
# COMMEMORATION OF OUR VENERABLE FATHER GREGORY THE DECAPOLITE & OF OUR FATHER
# AMONG THE SAINTS PROCLUS, ARCHBISHOP OF CONSTANTINOPLE (21 pages).
# One printed service for a forefeast and two saints: ONE entry (ruled 14 Nov
# 2026). THREE canons, interleaved ode by ode, each stored whole.
#
# NO ENTRY-LEVEL CANONICAL HYMNS HERE. The page prints two troparia (the
# forefeast's and the holy fathers') and three kontakia, each at several sites;
# a single `troparion`/`kontakion` field cannot hold them. So every one is
# stored AT ITS PRINT SITE, in a positional list (`troparia`, `kontakia`,
# `kontakia_ode3`, `kontakia_ode6`), each item under its printed label and
# tagged with `saint`. The recurrence register carries the identities.
from daily_lib import Src, ABS, same

FF, GR, PR, BOTH = 'forefeast', 'Gregory', 'Proclus', 'Gregory and Proclus'

def build():
    s = Src('11-20')
    t, r = s.t, s.r
    s.mark(7, 73, 632)
    s.mark(100, 155, 238, 289, 342, 399, 455, 527)
    ff_labels = [156, 239, 290, 343, 400, 456, 528]
    gr_labels = [172, 254, 307, 356, 418, 485, 552]
    pr_labels = [190, 273, 324, 372, 434, 509, 576]
    for n in ff_labels:
        assert s.raw(n).lower() == 'canon of the forefeast', (n, s.raw(n))
    for n in gr_labels:
        assert s.raw(n).lower() == 'canon of the venerable one', (n, s.raw(n))
    for n in pr_labels:
        assert s.raw(n) == 'Canon of the holy hierarch', (n, s.raw(n))

    # the print sites of each hymn, checked against one another
    tr_ff = [t(68, 71, 'a'), t(75, 78, 'b'), t(657, 660, 'c')]
    tr_fa = [t(65, 66, 'a'), t(80, 81, 'b'), t(662, 663, 'c')]
    assert same(*tr_ff), 'forefeast troparion sites diverge'
    assert same(*tr_fa), 'fathers troparion sites diverge'
    assert same(t(210, 213, 'a'), t(665, 668, 'b')), 'Gregory kontakion sites diverge'
    assert same(t(216, 217, 'a'), t(670, 671, 'b')), 'Proclus kontakion sites diverge'
    assert same(t(391, 392, 'a'), t(674, 675, 'b')), 'forefeast kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'lic_closer_alternate_rubric',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparia'],
        'lic_rubric': r(8, 8, 'LIC rubric'),
        'lic': s.seq(10, [12, 15, 19], 'LIC', sm=9, first={'tone': 1}, saint=FF) + [
            t(21, 23, 'LIC 4', sl=20, label='plain', saint=GR),
            t(24, 27, 'LIC 5', label='plain', saint=GR),
            t(28, 30, 'LIC 6', label='plain', saint=GR),
        ],
        'lic_closer': t(32, 36, 'LIC Glory/Both now of the forefeast', sl=31, type='of_the_feast', saint=FF),
        'lic_closer_alternate_rubric': r(37, 38, 'If it be Friday evening'),
        'aposticha_rubric': r(40, 40, 'Aposticha rubric'),
        'aposticha': [
            t(42, 45, 'Aposticha 1', sm=41, label='plain', tone=4, saint=PR),
            t(46, 46, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(47, 51, 'Aposticha 2', sm=41, label='plain', saint=PR),
            t(52, 53, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(54, 58, 'Aposticha 3', sm=41, label='plain', saint=PR),
        ],
        'aposticha_closer': t(60, 63, 'Aposticha Glory/Both now of the forefeast', sl=59, type='of_the_feast', saint=FF),
        'troparia': [
            t(65, 66, 'Troparion of the holy fathers', sl=64, label='plain', saint=BOTH),
            t(68, 71, 'Troparion of the forefeast', sl=67, label=['glory', 'both_now', 'of_the_feast'], saint=FF),
        ],
    }

    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'sessional_1', 'sessional_2',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer'],
        'troparia': [
            t(75, 78, 'Troparion of the forefeast at God is the Lord', sl=74, label='of_the_feast', saint=FF),
            t(80, 81, 'Troparion of the holy fathers at God is the Lord', sl=79, label='glory', saint=BOTH),
        ],
        'troparia_closing_rubric': r(82, 82, 'Both now, of the forefeast'),
        # "the foregoing is repeated" is a REFERENCE DEVICE (spec 2.8): stored as
        # the page prints it, never expanded into a second copy of the hymn.
        'sessional_1': [
            t(85, 89, 'Sessional 1', sl=83, sm=84, label='plain', saint=FF),
            t(90, 90, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(92, 96, 'Sessional 2', sl=91, label='plain', saint=FF),
            t(97, 97, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canon_rubric': r(98, 99, 'Canon rubric'),
        'canons': [
            {'title': s.raw(101, 102), 'tone': 4,
             'odes': {
                 1: s.ode(1, (103, 105), [108, 112, 115, 118]),
                 3: s.ode(3, (157, 159), [162, 165, 168, 171]),
                 4: s.ode(4, (240, 242), [245, 247, 250, 253]),
                 5: s.ode(5, (291, 293), [296, 299, 303, 306]),
                 6: s.ode(6, (344, 346), [348, 350, 352, 355]),
                 7: s.ode(7, (401, 404), [407, 410, 413, 417]),
                 8: s.ode(8, (457, 460), [464, 468, 472, 476, 480, 484]),
                 9: s.ode(9, (529, 532), [537, 541, 545, 548, 551]),
             }},
            {'title': s.raw(119), 'composer': 'Joseph', 'tone': 8,
             'odes': {
                 1: s.ode(1, (120, 123), [126, 129, 133, 137]),
                 3: s.ode(3, (173, 175), [179, 182, 185, 189]),
                 4: s.ode(4, (255, 258), [261, 266, 269, 272]),
                 5: s.ode(5, (308, 311), [314, 317, 320, 323]),
                 6: s.ode(6, (357, 359), [362, 365, 368, 371]),
                 7: s.ode(7, (419, 421), [424, 427, 430, 433]),
                 8: s.ode(8, (486, 490), [496, 500, 504, 508]),
                 9: s.ode(9, (553, 556), [560, 564, 568, 571, 575]),
             }},
            {'title': s.raw(138), 'composer': 'Theophanes', 'tone': 1,
             'odes': {
                 1: s.ode(1, (139, 141), [144, 147, 151, 154]),
                 3: s.ode(3, (191, 194), [198, 201, 204, 208]),
                 4: s.ode(4, (274, 276), [279, 282, 285, 288]),
                 5: s.ode(5, (325, 328), [331, 334, 337, 341]),
                 6: s.ode(6, (373, 375), [379, 382, 385, 388]),
                 7: s.ode(7, (435, 438), [442, 445, 449, 453]),
                 8: s.ode(8, (510, 513), [516, 519, 523, 526]),
                 9: s.ode(9, (577, 580), [583, 586, 589, 592]),
             }},
        ],
        'kontakia_ode3': [
            t(210, 213, 'Kontakion of the venerable Gregory (after Ode III)', sl=209, label='plain', saint=GR),
            t(216, 217, 'Kontakion of the holy hierarch Proclus (after Ode III)', sl=214, sm=215, label='plain', saint=PR),
        ],
        'sessional_ode3': [
            t(220, 223, 'Ode III sessional (Gregory)', sl=218, sm=219, label='plain', saint=GR),
            t(227, 230, 'Ode III sessional (Proclus)', sl=225, sm=226, label='glory', saint=PR),
            t(233, 237, 'Ode III sessional (forefeast)', sl=231, sm=232, label=['both_now', 'of_the_feast'], saint=FF),
        ],
        'kontakia_ode6': [
            t(391, 392, 'Kontakion of the forefeast (after Ode VI)', sl=389, sm=390, label='of_the_feast', saint=FF),
            t(393, 398, 'Ikos of the forefeast', pre='Ikos: ', label='of_the_feast', saint=FF),
        ],
        'exapostilarion': t(595, 598, 'Exapostilarion', sl=593, sm=594, label='plain', saint=GR),
        'exapostilarion_closer': t(601, 603, 'Exapostilarion Both now, of the forefeast', sl=599, sm=600,
                                   type='of_the_feast', saint=FF),
        'aposticha_rubric': r(604, 604, 'Matins Aposticha rubric'),
        'aposticha': [
            t(606, 609, 'Matins Aposticha 1', sm=605, label='plain', tone=1, saint=FF),
            t(611, 612, 'Matins Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(613, 615, 'Matins Aposticha 2', sm=605, label='plain', saint=FF),
            t(616, 617, 'Matins Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(618, 621, 'Matins Aposticha 3', sm=605, label='plain', saint=FF),
        ],
        'aposticha_closer': t(623, 630, 'Matins Aposticha Glory/Both now', sl=622, type='of_the_feast',
                              composer='George of Nicomedia', saint=FF),
    }
    s.mark(*ff_labels, *gr_labels, *pr_labels)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia',
                  'prokeimenon', 'prokeimenon_verse', 'epistle_rubric', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel_rubric', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(633, 634, 'Beatitudes rubric'),
        'beatitudes': s.seq(635, [637, 640, 643, 646, 648, 650, 652, 655], 'Beatitude', saint=FF),
        'troparia': [
            t(657, 660, 'Troparion of the forefeast at Liturgy', sl=656, label='of_the_feast', saint=FF),
            t(662, 663, 'Troparion of the holy fathers at Liturgy', sl=661, label='plain', saint=BOTH),
        ],
        'kontakia': [
            t(665, 668, 'Kontakion of the venerable Gregory at Liturgy', sl=664, label='plain', saint=GR),
            t(670, 671, 'Kontakion of the holy hierarch Proclus at Liturgy', sl=669, label='plain', saint=PR),
            t(674, 675, 'Kontakion of the forefeast at Liturgy', sl=673, label='of_the_feast', saint=FF),
        ],
        'prokeimenon': t(676, 677, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone I: '),
        'prokeimenon_verse': t(678, 678, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle_rubric': r(679, 679, 'Epistle rubric'),
        'epistle': s.reading(680, 689, 'Epistle', 'HEBREWS,', '§ 318(HEB. 7: 26, 8: 2)',
                             {'book': 'Hebrews', 'chapter': 7, 'verses': '7:26-8:2', 'pericope_number': 318}),
        'alleluia': t(690, 691, 'Alleluia', pre='Alleluia, in Tone II: '),
        'alleluia_verse': t(692, 692, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(693, 693, 'Gospel rubric'),
        'gospel': s.reading(694, 706, 'Gospel', 'JOHN', '§ 36(JN. 10: 9-16)',
                            {'book': 'John', 'chapter': 10, 'verses': '9-16', 'pericope_number': 36}),
        'communion_verse': t(707, 708, 'Communion Verse', pre='Communion Verse: '),
    }

    # pp. 20-21, after the Liturgy: the order when the forefeast falls on a
    # Sunday, with two troparia printed nowhere else in the file.
    appendix = [
        r(710, 716, 'Be it known: forefeast on a Sunday (Vespers)'),
        r(717, 718, 'If vigil not be served'),
        t(719, 721, 'Troparion of Saint Gregory', sourceLabel='that of Saint Gregory, in Tone III', tone=3,
          label='glory', saint=GR),
        r(722, 722, 'Both now, of the forefeast'),
        r(723, 747, 'Be it known: forefeast on a Sunday (Matins, Hours, Liturgy)'),
        r(748, 748, 'The service of the holy hierarch Proclus'),
        t(750, 755, 'Troparion of the hierarch', sl=749, label='plain', saint=PR),
    ]

    entry = {
        'kind': 'forefeast',
        'feast_ref': 'entrance_theotokos',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'our venerable father Gregory the Decapolite and our father among the saints Proclus, Archbishop of Constantinople',
        'title': s.node(s.raw(3, 6), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2G1',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('RANK WORD RULED 14 Nov 2026 (Bill): a forefeast or afterfeast day with 3 + 3 stichera and no doxology is `six_stichera`, as V1 has it (09-07); the note below was written when it was stored `simple`. The section, 2G1, is unchanged. '
                 'ONE printed service for the Forefeast of the Entrance and two saints (Gregory the Decapolite, '
                 'Proclus of Constantinople): one entry, every item tagged with `saint` ("forefeast", "Gregory", '
                 '"Proclus", or "Gregory and Proclus" for the shared Troparion of the holy fathers). 3 stichera of the '
                 'forefeast and 3 of St. Gregory at Lord I have cried; St. Proclus has the Vespers aposticha. No '
                 'Polyeleos and no Great Doxology: stored Simple, Fekula 2G1 (weekday service in a forefeast), by the '
                 'encoding_rule_v2.md 1.1 waterfall; ODS vol. III has no 11-20 entry. THREE canons, interleaved in '
                 'print, stored whole. Two troparia and three kontakia, each printed at several sites, are stored at '
                 'every site in positional lists and NOT as entry-level canonical fields. The `appendix` holds the '
                 '"Be it known" order for a Sunday and two troparia printed only there (St. Gregory, Tone III; St. '
                 'Proclus, Tone IV). kind is "forefeast" because the title leads with it; the saints share the entry.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
        'appendix': appendix,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
