# 11-23.pdf — AFTERFEAST OF THE ENTRY OF THE THEOTOKOS INTO THE TEMPLE;
# COMMEMORATION OF OUR FATHERS AMONG THE SAINTS, AMPHILOCHIUS, BISHOP OF
# ICONIUM, & GREGORY, BISHOP OF AGRIGENTUM (18 pages).
# One printed service for an afterfeast and two saints: ONE entry, items tagged
# with `saint`. THREE canons, interleaved in print, stored whole. Troparia and
# kontakia at every print site in positional lists (as 11-20, 11-22).
# Boundaries read off the extracted page, 14 Nov 2026.
from daily_lib import Src, same

FE, AM, GR, BOTH = 'feast', 'Amphilochius', 'Gregory', 'Amphilochius and Gregory'

def build():
    s = Src('11-23')
    t, r = s.t, s.r
    s.mark(6, 78, 572)
    s.mark(103, 151, 227, 281, 324, 378, 421, 474)
    # Two ODE headings are printed with every letter doubled.
    assert s.raw(103) == 'OODDEE II' and s.raw(421) == 'OODDEE VVIIIIII', (s.raw(103), s.raw(421))
    fe_labels = [152, 228, 282, 325, 379, 422, 475]
    am_labels = [167, 246, 295, 338, 390, 436, 493]
    gr_labels = [178, 262, 306, 350, 407, 454, 510]
    for n in fe_labels:
        assert s.raw(n).lower() == 'canon of the feast', (n, s.raw(n))
    for n in am_labels:
        assert s.raw(n) == 'Canon of the holy hierarch Amphilochius', (n, s.raw(n))
    for n in gr_labels:
        assert s.raw(n) == 'Canon of the holy hierarch Gregory', (n, s.raw(n))
    s.mark(*fe_labels, *am_labels, *gr_labels)

    def strip(n):
        n.pop('repeat', None)
        return n
    assert same(t(73, 76, 'a'), strip(t(80, 83, 'b')), t(592, 595, 'c')), 'feast troparion sites diverge'
    assert same(t(70, 71, 'a'), t(85, 86, 'b'), t(597, 598, 'c')), 'hierarchs troparion sites diverge'
    assert same(t(192, 195, 'a'), t(610, 613, 'b')), 'feast kontakion sites diverge'
    assert same(t(205, 207, 'a'), t(600, 602, 'b')), 'Gregory kontakion sites diverge'
    assert same(t(368, 371, 'a'), t(604, 607, 'b')), 'Amphilochius kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparia'],
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [13, 17, 22], 'LIC', sm=8, first={'tone': 4}, saint=AM) + [
            t(25, 29, 'LIC 4', sl=23, sm=24, label='plain', saint=GR),
            t(30, 33, 'LIC 5', sm=24, label='plain', saint=GR),
            t(34, 37, 'LIC 6', sm=24, label='plain', saint=GR),
        ],
        'lic_closer': t(40, 43, 'LIC Glory/Both now, of the feast', sl=39, type='of_the_feast', saint=FE),
        'aposticha_rubric': r(44, 44, 'Aposticha rubric'),
        'aposticha': [
            t(46, 48, 'Aposticha 1', sm=45, label='plain', tone=1, saint=FE),
            t(49, 50, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(51, 53, 'Aposticha 2', sm=45, label='plain', saint=FE),
            t(54, 55, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(56, 58, 'Aposticha 3', sm=45, label='plain', saint=FE),
        ],
        'aposticha_closer': t(60, 68, 'Aposticha Glory/Both now', sl=59, type='of_the_feast', saint=FE),
        'troparia': [
            t(70, 71, 'Troparion of the holy hierarchs', sl=69, label='plain', saint=BOTH),
            t(73, 76, 'Troparion of the feast', sl=72, label=['glory', 'both_now', 'of_the_feast'], saint=FE),
        ],
    }

    s.mark(214)
    assert s.raw(214) == 'Glory ..., in Tone VIII: Spec. Mel.: “Of the Wisdom ...”:', s.raw(214)
    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'sessional_1', 'sessional_2',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_glory', 'exapostilarion_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer'],
        'troparia': [
            t(80, 83, 'Troparion of the feast at God is the Lord', sl=79, label='of_the_feast', saint=FE),
            t(85, 86, 'Troparion of the holy hierarchs at God is the Lord', sl=84, label='glory', saint=BOTH),
        ],
        'troparia_closing_rubric': r(87, 87, 'Both now, that of the feast (Once)'),
        'sessional_1': [
            t(90, 94, 'Sessional 1', sl=88, sm=89, label='plain', saint=FE),
            t(95, 95, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(98, 99, 'Sessional 2', sl=96, sm=97, label='plain', saint=FE),
            t(100, 100, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canon_rubric': r(101, 102, 'Canon rubric'),
        'canons': [
            {'title': s.raw(104), 'composer': 'Basil', 'tone': 1,
             'odes': {
                 1: s.ode(1, (105, 107), [109, 112, 114, 118]),
                 3: s.ode(3, (153, 155), [159, 162, 164, 166]),
                 4: s.ode(4, (229, 232), [235, 239, 242, 245]),
                 5: s.ode(5, (283, 285), [287, 289, 291, 294]),
                 6: s.ode(6, (326, 328), [330, 332, 335, 337]),
                 7: s.ode(7, (380, 381), [383, 385, 387, 389]),
                 8: s.ode(8, (423, 425), [427, 429, 431, 435]),
                 9: s.ode(9, (476, 479), [482, 486, 489, 492]),
             }},
            {'title': s.raw(119, 120), 'composer': 'Theophanes', 'tone': 4,
             'odes': {
                 1: s.ode(1, (121, 123), [126, 128, 131, 134]),
                 3: s.ode(3, (168, 169), [171, 173, 175, 177]),
                 4: s.ode(4, (247, 249), [252, 255, 258, 261]),
                 5: s.ode(5, (296, 297), [299, 301, 303, 305]),
                 6: s.ode(6, (339, 341), [344, 346, 349]),
                 7: s.ode(7, (391, 393), [397, 400, 403, 406]),
                 8: s.ode(8, (437, 439), [443, 446, 449, 453]),
                 9: s.ode(9, (494, 496), [499, 502, 505, 509]),
             }},
            {'title': s.raw(135, 136), 'composer': 'Joseph', 'tone': 8,
             'odes': {
                 1: s.ode(1, (137, 139), [141, 144, 147, 150]),
                 3: s.ode(3, (179, 180), [182, 184, 186, 189]),
                 4: s.ode(4, (263, 266), [269, 272, 275, 280]),
                 5: s.ode(5, (307, 310), [313, 317, 320, 323]),
                 6: s.ode(6, (351, 353), [357, 359, 362, 365]),
                 7: s.ode(7, (408, 410), [413, 415, 417, 420]),
                 8: s.ode(8, (455, 458), [462, 465, 468, 473]),
                 9: s.ode(9, (511, 513), [517, 520, 523, 527, 530]),
             }},
        ],
        'kontakia_ode3': [
            t(192, 195, 'Kontakion of the feast (after Ode III)', sl=190, sm=191, label='of_the_feast', saint=FE),
            t(197, 202, 'Ikos of the feast', pre='Ikos: ', label='of_the_feast', saint=FE),
            t(205, 207, 'Kontakion of the holy hierarch Gregory (after Ode III)', sl=203, sm=204, label='plain', saint=GR),
        ],
        'sessional_ode3': [
            t(210, 213, 'Ode III sessional (Amphilochius)', sl=208, sm=209, label='plain', saint=AM),
            t(215, 220, 'Ode III sessional, Glory', sourceLabel='Glory ..., in Tone VIII', spec_mel='Of the Wisdom ...',
              tone=8, label='glory'),
            t(223, 226, 'Ode III sessional (feast)', sl=221, sm=222, label=['both_now', 'of_the_feast'], saint=FE),
        ],
        'kontakia_ode6': [
            t(368, 371, 'Kontakion of the holy hierarch Amphilochius (after Ode VI)', sl=366, sm=367,
              label='plain', saint=AM),
            t(372, 377, 'Ikos of the holy hierarch Amphilochius', pre='Ikos: ', label='plain', saint=AM),
        ],
        'exapostilarion': t(533, 537, 'Exapostilarion of Amphilochius', sl=531, sm=532, label='plain', saint=AM),
        'exapostilarion_glory': t(539, 543, 'Exapostilarion of Gregory, Glory', sl=538, label='glory', saint=GR),
        'exapostilarion_closer': t(547, 549, 'Exapostilarion of the feast, Both now', sl=545, sm=546,
                                   type='of_the_feast', saint=FE),
        'aposticha_rubric': r(550, 550, 'Matins Aposticha rubric'),
        'aposticha': [
            t(552, 553, 'Matins Aposticha 1', sm=551, label='plain', tone=2, saint=FE),
            t(554, 555, 'Matins Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(556, 557, 'Matins Aposticha 2', sm=551, label='plain', saint=FE),
            t(558, 559, 'Matins Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(560, 561, 'Matins Aposticha 3', sm=551, label='plain', saint=FE),
        ],
        'aposticha_closer': t(563, 570, 'Matins Aposticha Glory/Both now', sl=562, type='of_the_feast', saint=FE),
    }
    s.mark(104, 119, 120, 135, 136)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia', 'prokeimena', 'epistle',
                  'alleluias', 'gospel', 'megalynarion_rubric', 'megalynarion_refrain', 'megalynarion',
                  'communion_verses'],
        'beatitudes_rubric': r(573, 573, 'Beatitudes rubric'),
        'beatitudes': s.seq(574, [576, 579, 581, 584, 587, 590], 'Beatitude', saint=FE),
        'troparia': [
            t(592, 595, 'Troparion of the feast at Liturgy', sl=591, label='of_the_feast', saint=FE),
            t(597, 598, 'Troparion of the holy hierarchs at Liturgy', sl=596, label='plain', saint=BOTH),
        ],
        'kontakia': [
            t(600, 602, 'Kontakion of the holy hierarch Gregory at Liturgy', sl=599, label='plain', saint=GR),
            t(604, 607, 'Kontakion of the holy hierarch Amphilochius at Liturgy', sl=603, label='plain', saint=AM),
            t(610, 613, 'Kontakion of the feast at Liturgy', sl=609, label='of_the_feast', saint=FE),
        ],
        'prokeimena': [
            t(614, 615, 'Prokeimenon of the feast', pre='Prokeimenon, in Tone III: the Song of the Theotokos: ',
              tone=3, label='of_the_feast', saint=FE),
            t(616, 617, 'Prokeimenon of the hierarchs', pre='Prokeimenon, in Tone VII: ', label='plain', saint=BOTH),
            t(618, 619, 'Prokeimenon verse', pre='Verse: ', label='refrain', saint=BOTH),
        ],
        'epistle': s.reading(620, 634, 'Epistle', 'EPISTLE OF ST. PAUL TO THE HEBREWS', '§334(13:7-16)',
                             {'book': 'Hebrews', 'chapter': 13, 'verses': '7-16', 'pericope_number': 334}),
        'alleluias': [
            t(635, 635, 'Alleluia of the feast', pre='Alleluia, in Tone VIII: ', label='of_the_feast', saint=FE),
            t(636, 637, 'Alleluia of the hierarchs', pre='Alleluia, in Tone II: ', label='plain', saint=BOTH),
            t(638, 638, 'Alleluia verse', pre='Verse: ', label='refrain', saint=BOTH),
        ],
        'gospel': s.reading(639, 648, 'Gospel', 'GOSPEL ACCORDING TO MATTHEW,', '§103(MT 24: 42-47)',
                            {'book': 'Matthew', 'chapter': 24, 'verses': '42-47', 'pericope_number': 103}),
        'megalynarion_rubric': r(649, 649, 'Instead of It is truly meet'),
        'megalynarion_refrain': t(650, 651, 'Refrain before the festal Irmos', pre='Refrain: ', label='refrain'),
        'megalynarion': t(652, 655, 'Irmos of Ode IX of Canon I of the feast, at Liturgy', pre='Irmos: '),
        'communion_verses': [
            t(656, 657, 'Communion Verse of the feast', pre='Communion Verse of the feast: ',
              label='of_the_feast', saint=FE),
            t(658, 659, 'Communion Verse of the saints', pre='Communion Verse of the saints: ',
              label='plain', saint=BOTH),
        ],
    }

    entry = {
        'kind': 'afterfeast',
        'feast_ref': 'entrance_theotokos',
        'title': s.node(s.raw(3, 5), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2G1',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ONE printed service for the Afterfeast of the Entry and two hierarchs (Amphilochius of Iconium, '
                 'Gregory of Agrigentum): one entry, items tagged with `saint`. 3 stichera of each hierarch at Lord I '
                 'have cried with the feast at Glory/Both now; no Polyeleos, no Great Doxology: stored Simple, Fekula '
                 '2G1, whose outline covers a Double Commemoration in an afterfeast. THREE canons (feast, by Basil, '
                 'the SECOND canon of the feast day; Amphilochius, by Theophanes; Gregory, by Joseph), interleaved in '
                 'print, stored whole. The canon of the feast prints its troparia WITHOUT the "Glory" / "Both now" '
                 'labels they carry on 21 November, except one "Both now" left in Ode VIII. The middle Ode III '
                 'sessional is printed under "Glory ..., in Tone VIII" with no saint named; it is not tagged. '
                 'Troparia and kontakia at every print site in positional lists. Paired Liturgy propers as 11-22. '
                 'The Liturgy irmos "In nowise" is from Canon I of the feast, which this file does not print at '
                 'Matins. Two ODE headings are printed with doubled letters; headings are not stored.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
