# 11-22.pdf — AFTER-FEAST OF THE ENTRY OF THE THEOTOKOS INTO THE TEMPLE;
# COMMEMORATION OF THE HOLY APOSTLE PHILEMON & THOSE WITH HIM (16 pages).
# One printed service for an afterfeast and a saint: ONE entry, every item
# tagged with `saint`. Two canons, interleaved in print, stored whole.
# Two troparia and two kontakia, each printed at several sites: stored at every
# site in positional lists, no entry-level canonical field (as 11-20).
# Boundaries read off the extracted page, 14 Nov 2026.
from daily_lib import Src, same

FE, AP = 'feast', 'Philemon and those with him'

def build():
    s = Src('11-22')
    t, r = s.t, s.r
    s.mark(5, 74, 442)
    s.mark(100, 135, 185, 218, 247, 289, 329, 370)
    # The Ode V heading is printed with every letter doubled.
    assert s.raw(218) == 'OODDEE VV', s.raw(218)
    fe_labels = [136, 186, 219, 248, 290, 330, 371]
    ap_labels = [153, 202, 236, 263, 308, 352, 392]
    for n in fe_labels:
        assert s.raw(n) == 'Canon of the feast', (n, s.raw(n))
    for n in ap_labels:
        assert s.raw(n) == 'Canon of the holy apostles', (n, s.raw(n))
    s.mark(*fe_labels, *ap_labels)

    def strip(n):
        n.pop('repeat', None)
        return n
    assert same(t(69, 72, 'a'), strip(t(76, 79, 'b')), t(461, 464, 'c')), 'feast troparion sites diverge'
    assert same(t(66, 67, 'a'), t(81, 82, 'b'), t(466, 467, 'c')), 'apostles troparion sites diverge'
    assert same(t(167, 170, 'a'), t(469, 472, 'b')), 'apostles kontakion sites diverge'
    assert same(t(279, 282, 'a'), t(474, 477, 'b')), 'feast kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparia'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [11, 16, 20], 'LIC', sm=7, first={'tone': 8}, saint=FE) + [
            t(23, 26, 'LIC 4', sl=21, sm=22, label='plain', saint=AP),
            t(27, 31, 'LIC 5', sm=22, label='plain', saint=AP),
            t(32, 36, 'LIC 6', sm=22, label='plain', saint=AP),
        ],
        'lic_closer': t(38, 47, 'LIC Glory/Both now, Doxasticon of the feast', sl=37, type='of_the_feast', saint=FE),
        'aposticha_rubric': r(48, 48, 'Aposticha rubric'),
        'aposticha': [
            t(50, 51, 'Aposticha 1', sm=49, label='plain', tone=2, saint=FE),
            t(52, 53, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(54, 55, 'Aposticha 2', sm=49, label='plain', saint=FE),
            t(56, 57, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(58, 59, 'Aposticha 3', sm=49, label='plain', saint=FE),
        ],
        'aposticha_closer': t(61, 64, 'Aposticha Glory/Both now', sl=60, type='of_the_feast', saint=FE),
        'troparia': [
            t(66, 67, 'Troparion of the holy apostles', sl=65, label='plain', saint=AP),
            t(69, 72, 'Troparion of the feast', sl=68, label=['glory', 'both_now', 'of_the_feast'], saint=FE),
        ],
    }

    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'sessional_1', 'sessional_2',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer_rubric',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer'],
        'troparia': [
            t(76, 79, 'Troparion of the feast at God is the Lord', sl=75, label='of_the_feast', saint=FE),
            t(81, 82, 'Troparion of the holy apostles at God is the Lord', sl=80, label='glory', saint=AP),
        ],
        'troparia_closing_rubric': r(83, 83, 'Both now, that of the feast'),
        'sessional_1': [
            t(86, 89, 'Sessional 1', sl=84, sm=85, label='plain', saint=FE),
            t(90, 90, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(93, 96, 'Sessional 2', sl=91, sm=92, label='plain', saint=FE),
            t(97, 97, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canon_rubric': r(98, 99, 'Canon rubric'),
        'canons': [
            {'title': s.raw(101, 102), 'composer': 'George', 'tone': 4,
             'odes': {
                 1: s.ode(1, (103, 105), [108, 111, 114, 117]),
                 3: s.ode(3, (137, 139), [142, 145, 148, 151]),
                 4: s.ode(4, (187, 189), [193, 196, 198, 201]),
                 5: s.ode(5, (220, 222), [225, 228, 232, 235]),
                 6: s.ode(6, (249, 251), [254, 257, 259, 262]),
                 7: s.ode(7, (291, 294), [297, 300, 303, 306]),
                 8: s.ode(8, (331, 334), [338, 342, 346, 351]),
                 9: s.ode(9, (372, 375), [379, 382, 386, 391]),
             }},
            {'title': s.raw(118, 119), 'composer': 'Joseph', 'tone': 2,
             'odes': {
                 1: s.ode(1, (120, 122), [125, 128, 131, 134]),
                 3: s.ode(3, (154, 155), [157, 159, 161, 164]),
                 4: s.ode(4, (203, 205), [208, 211, 214, 217]),
                 5: s.ode(5, (237, 238), [240, 242, 244, 246]),
                 6: s.ode(6, (264, 265), [268, 272, 274, 276]),
                 7: s.ode(7, (309, 312), [315, 319, 322, 325, 328]),
                 8: s.ode(8, (353, 355), [358, 361, 364, 366, 369]),
                 9: s.ode(9, (393, 396), [399, 402, 405, 408, 412]),
             }},
        ],
        'kontakia_ode3': [
            t(167, 170, 'Kontakion of the holy apostles (after Ode III)', sl=165, sm=166, label='plain', saint=AP),
        ],
        'sessional_ode3': [
            t(173, 178, 'Ode III sessional (apostle)', sl=171, sm=172, label='plain', saint=AP),
            t(181, 184, 'Ode III sessional (feast)', sl=179, sm=180, tone=8,
              label=['glory', 'both_now', 'of_the_feast'], saint=FE),
        ],
        'kontakia_ode6': [
            t(279, 282, 'Kontakion of the feast (after Ode VI)', sl=277, sm=278, label='of_the_feast', saint=FE),
            t(283, 288, 'Ikos of the feast', pre='Ikos: ', label='of_the_feast', saint=FE),
        ],
        'exapostilarion': t(415, 417, 'Exapostilarion of the feast', sl=413, sm=414, label='of_the_feast', saint=FE),
        'exapostilarion_closer_rubric': r(418, 418, 'Exapostilarion repeat device'),
        'aposticha_rubric': r(419, 419, 'Matins Aposticha rubric'),
        'aposticha': [
            t(421, 423, 'Matins Aposticha 1', sm=420, label='plain', tone=6, saint=FE),
            t(425, 426, 'Matins Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(427, 429, 'Matins Aposticha 2', sm=420, label='plain', saint=FE),
            t(430, 431, 'Matins Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(432, 434, 'Matins Aposticha 3', sm=420, label='plain', saint=FE),
        ],
        'aposticha_closer': t(436, 440, 'Matins Aposticha Glory/Both now', sl=435, type='of_the_feast', saint=FE),
    }
    s.mark(101, 102, 118, 119)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia', 'prokeimena', 'epistle',
                  'alleluias', 'gospel', 'megalynarion_rubric', 'megalynarion_refrain', 'megalynarion',
                  'communion_verses'],
        'beatitudes_rubric': r(443, 443, 'Beatitudes rubric'),
        'beatitudes': s.seq(444, [446, 449, 451, 454, 456, 459], 'Beatitude', saint=FE),
        'troparia': [
            t(461, 464, 'Troparion of the feast at Liturgy', sl=460, label='of_the_feast', saint=FE),
            t(466, 467, 'Troparion of the holy apostles at Liturgy', sl=465, label='plain', saint=AP),
        ],
        'kontakia': [
            t(469, 472, 'Kontakion of the holy apostles at Liturgy', sl=468, label='plain', saint=AP),
            t(474, 477, 'Kontakion of the feast at Liturgy', sl=473, label='of_the_feast', saint=FE),
        ],
        'prokeimena': [
            t(479, 480, 'Prokeimenon of the feast', pre='Prokeimenon, in Tone III: the Song of the Theotokos: ',
              tone=3, label='of_the_feast', saint=FE),
            t(481, 482, 'Prokeimenon of the apostles', pre='Prokeimenon, in Tone VIII: ', label='plain', saint=AP),
            t(483, 484, 'Prokeimenon verse', pre='Verse: ', label='refrain', saint=AP),
        ],
        'epistle': s.reading(485, 514, 'Epistle', 'EPISTLE TO PHILEMON,', 'FROM AFTER §302(PHILM. 1-24)',
                             {'book': 'Philemon', 'chapter': 1, 'verses': '1-24', 'pericope_number': 302}),
        'alleluias': [
            t(516, 516, 'Alleluia of the feast', pre='Alleluia, in Tone VIII: ', label='of_the_feast', saint=FE),
            t(517, 518, 'Alleluia of the apostles', pre='Alleluia, in Tone I: Verse: ', tone=1, label='plain', saint=AP),
            t(519, 519, 'Alleluia verse', pre='Verse: ', label='refrain', saint=AP),
        ],
        'gospel': s.reading(520, 541, 'Gospel', 'GOSPEL ACCORDING TO LUKE;', '§ 50(LK. 10: 1-15)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '1-15', 'pericope_number': 50}),
        'megalynarion_rubric': r(542, 542, 'Instead of It is truly meet'),
        'megalynarion_refrain': t(543, 544, 'Refrain before the festal Irmos', pre='Refrain: ', label='refrain'),
        'megalynarion': t(545, 548, 'Irmos of Ode IX of the feast, at Liturgy', pre='Irmos: '),
        'communion_verses': [
            t(549, 550, 'Communion Verse for the feast', pre='Communion Verse for the feast: ',
              label='of_the_feast', saint=FE),
            t(552, 553, 'Communion Verse for the saints', pre='Communion Verse for the saints: ',
              label='plain', saint=AP),
        ],
    }
    assert same(liturgy['megalynarion'], matins['canons'][0]['odes'][9]['irmos']), 'Liturgy irmos differs from Ode IX'

    entry = {
        'kind': 'afterfeast',
        'feast_ref': 'entrance_theotokos',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2G1',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('RANK WORD RULED 14 Nov 2026 (Bill): a forefeast or afterfeast day with 3 + 3 stichera and no doxology is `six_stichera`, as V1 has it (09-07); the note below was written when it was stored `simple`. The section, 2G1, is unchanged. '
                 'ONE printed service for the Afterfeast of the Entry and the Apostle Philemon and those with him: '
                 'one entry, every item tagged with `saint` ("feast" or "Philemon and those with him"). 3 stichera of '
                 'the feast and 3 of the apostle at Lord I have cried; no Polyeleos, no Great Doxology (Matins ends '
                 'with Aposticha): Simple, Fekula 2G1 (weekday service in an afterfeast). Two canons, interleaved in '
                 'print, stored whole. Two troparia and two kontakia, each printed at several sites, are stored at '
                 'every site in positional lists and NOT as entry-level canonical fields. The Liturgy prints TWO '
                 'prokeimena, TWO alleluia verses and TWO communion verses (feast and apostles): stored as the lists '
                 '`prokeimena`, `alleluias`, `communion_verses`. Only the apostles\' Epistle and Gospel are printed. '
                 'The Ode V heading is printed with doubled letters ("OODDEE VV"); headings are not stored.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
