# 12-04.pdf — COMMEMORATION OF THE HOLY GREAT-MARTYR BARBARA & OF OUR VENERABLE
# FATHER JOHN OF DAMASCUS (13 pages). One printed service for two saints: ONE
# entry, items tagged with `saint`. Two canons, interleaved in print, stored whole.
# Boundaries read off the extracted page, 15 Nov 2026.
from daily_lib import Src, ABS, same

BA, JO = 'Barbara', 'John of Damascus'

def build():
    s = Src('12-04')
    t, r = s.t, s.r
    s.mark(5, 67, 405)
    s.mark(79, 109, 168, 195, 220, 255, 283, 312)
    ba_labels = [110, 169, 196, 221, 256, 284, 313]
    jo_labels = [120, 181, 208, 233, 270, 297, 326]
    for n in ba_labels:
        assert s.raw(n) == 'Canon of the holy great-martyr', (n, s.raw(n))
    for n in jo_labels:
        # line 181 prints "Canon of the Venerable One" (capitals); the rest lower case.
        assert s.raw(n).lower() == 'canon of the venerable one', (n, s.raw(n))
    s.mark(*ba_labels, *jo_labels)

    def strip(n):
        n.pop('repeat', None)
        return n
    assert same(t(59, 60, 'a'), strip(t(69, 71, 'b')), t(423, 424, 'c')), 'Barbara troparion sites diverge'
    assert same(t(62, 64, 'a'), t(73, 75, 'b'), t(426, 428, 'c')), 'John troparion sites diverge'
    assert same(t(133, 137, 'a'), t(430, 434, 'b')), 'John kontakion sites diverge'
    assert same(t(245, 248, 'a'), t(436, 439, 'b')), 'Barbara kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion',
                  'aposticha_rubric', 'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion',
                  'troparia', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [11, 15, 20], 'LIC', sm=7, first={'tone': 2}, saint=BA) + [
            t(23, 26, 'LIC 4', sl=21, sm=22, label='plain', saint=JO),
            t(27, 31, 'LIC 5', sm=22, label='plain', saint=JO),
            t(32, 35, 'LIC 6', sm=22, label='plain', saint=JO),
        ],
        'lic_glory': t(37, 40, 'LIC Glory', sl=36, saint=BA),
        'lic_closer_rubric': r(42, 42, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(44, 46, 'LIC Stavrotheotokion', sm=43, pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=6),
        # "On the Aposticha, the Stichera of the Oktoechos, and" (line 47) runs on into
        # the label of the Glory sticheron (line 48).
        'aposticha_rubric': r(47, 47, 'Aposticha rubric'),
        'aposticha_glory': t(49, 53, 'Aposticha Glory', sl=48, saint=JO),
        'aposticha_closer_rubric': r(54, 54, 'Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(55, 57, 'Aposticha Stavrotheotokion', pre='Stavrotheotokion: ',
                                        type='stavrotheotokion', tone=6),
        'troparia': [
            t(59, 60, 'Troparion of the holy great-martyr', sl=58, label='plain', saint=BA),
            t(62, 64, 'Troparion of the venerable one', sl=61, label='glory', saint=JO),
        ],
        'troparion_closer_rubric': r(65, 65, 'Troparion Theotokion rubric'),
    }

    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'canon_rubric', 'canons',
                  'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_glory', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer_rubric', 'praises_stavrotheotokion',
                  'aposticha_rubric', 'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_stavrotheotokion'],
        'troparia': [
            t(69, 71, 'Troparion of the holy great-martyr at God is the Lord', sl=68, label='plain', saint=BA),
            t(73, 75, 'Troparion of the venerable one at God is the Lord', sl=72, label='glory', saint=JO),
        ],
        'troparia_closing_rubric': r(76, 76, 'Both now, Theotokion or Stavrotheotokion'),
        'canon_rubric': r(77, 78, 'Canon rubric'),
        'canons': [
            {'title': s.raw(80), 'tone': 2,
             'odes': {
                 1: s.ode(1, (81, 83), [86, 89, 92]),
                 3: s.ode(3, (111, 112), [114, 117, 119]),
                 4: s.ode(4, (170, 172), [175, 178, 180]),
                 5: s.ode(5, (197, 199), [202, 204, 207]),
                 6: s.ode(6, (222, 224), [227, 230, 232]),
                 7: s.ode(7, (257, 259), [262, 266, 269]),
                 8: s.ode(8, (285, 287), [290, 293, 296]),
                 9: s.ode(9, (314, 316), [319, 322, 325]),
             }},
            {'title': s.raw(93), 'tone': 2,
             'odes': {
                 1: s.ode(1, (94, 96), [99, 103, 108]),
                 3: s.ode(3, (121, 122), [125, 127, 130]),
                 4: s.ode(4, (182, 184), [188, 191, 194]),
                 5: s.ode(5, (209, 211), [213, 216, 219]),
                 6: s.ode(6, (234, 236), [238, 240, 242]),
                 7: s.ode(7, (271, 273), [276, 279, 282]),
                 8: s.ode(8, (298, 300), [304, 307, 311]),
                 9: s.ode(9, (327, 329), [333, 336, 340]),
             }},
        ],
        # After Ode III the page prints the kontakion and ikos of the venerable one,
        # then the sessional hymns; after Ode VI, those of the great-martyr.
        'kontakia_ode3': [
            t(133, 137, 'Kontakion of the venerable one (after Ode III)', sl=131, sm=132, label='plain', saint=JO),
            t(138, 144, 'Ikos of the venerable one', pre='Ikos: ', label='plain', saint=JO),
        ],
        'sessional_ode3': [
            t(148, 152, 'Ode III sessional (Barbara)', sl=146, sm=147, label='plain', saint=BA),
            t(154, 157, 'Ode III sessional (John)', sl=153, label='glory', saint=JO),
            t(159, 162, 'Ode III sessional Theotokion', sl=158, type='theotokion', label=['both_now', 'theotokion']),
            t(163, 167, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'kontakia_ode6': [
            t(245, 248, 'Kontakion of the holy great-martyr (after Ode VI)', sl=243, sm=244, label='plain', saint=BA),
            t(249, 254, 'Ikos of the holy great-martyr', pre='Ikos: ', label='plain', saint=BA),
        ],
        # "Exapostilarion of the Oktoechos, and that of the holy great-martyr:" is one label.
        'exapostilarion': t(344, 346, 'Exapostilarion of the holy great-martyr', sl=342, sm=343, label='plain', saint=BA),
        'exapostilarion_glory': t(348, 351, 'Exapostilarion of the venerable one', sl=347, saint=JO),
        'exapostilarion_closer': t(353, 355, 'Exapostilarion Theotokion', sl=352, type='theotokion'),
        'praises_rubric': r(356, 356, 'Praises rubric'),
        # The first two carry an inline tone and composer; the last two print none.
        'praises': [
            t(357, 362, 'Praises 1', pre='In Tone I, the composition of Anatolius: ', tone=1,
              composer='Anatolius', label='plain', saint=BA),
            t(363, 368, 'Praises 2', pre='In Tone II, the composition of Byzantius: ', tone=2,
              composer='Byzantius', label='plain', saint=BA),
            t(369, 374, 'Praises 3', label='plain', saint=BA),
            t(375, 378, 'Praises 4', label='plain', saint=BA),
        ],
        'praises_glory': t(381, 385, 'Praises Glory', sl=380, composer='John the Monk', saint=BA),
        'praises_closer_rubric': r(386, 386, 'Praises Both now rubric'),
        'praises_stavrotheotokion': t(387, 389, 'Praises Stavrotheotokion', pre='Stavrotheotokion: ',
                                      type='stavrotheotokion', tone=6),
        'aposticha_rubric': r(390, 390, 'Matins Aposticha rubric'),
        'aposticha_glory': t(392, 396, 'Matins Aposticha Glory', sl=391, saint=JO),
        'aposticha_closer_rubric': r(397, 397, 'Matins Aposticha Both now rubric'),
        'aposticha_stavrotheotokion': t(399, 403, 'Matins Aposticha Stavrotheotokion', sm=398,
                                        pre='Stavrotheotokion: ', type='stavrotheotokion', tone=8),
    }
    s.mark(80, 93)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(406, 407, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 408, 410), ('t', 411, 413), ('t', 414, 415),
                             ('t', 416, 417), ('t', 418, 419), ('theot', 420, 421)], 'Beatitude'),
        'troparia': [
            t(423, 424, 'Troparion of the holy great-martyr at Liturgy', sl=422, label='plain', saint=BA),
            t(426, 428, 'Troparion of the venerable one at Liturgy', sl=425, label='plain', saint=JO),
        ],
        # Printed in this order: the venerable one's first, then the great-martyr's.
        'kontakia': [
            t(430, 434, 'Kontakion of the venerable one at Liturgy', sl=429, label='plain', saint=JO),
            t(436, 439, 'Kontakion of the holy great-martyr at Liturgy', sl=435, label='plain', saint=BA),
        ],
        'prokeimenon': t(440, 440, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(441, 441, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(443, 451, 'Epistle', 'EPISTLE TO THE GALATIANS,', '§208 (3: 23-29)',
                             {'book': 'Galatians', 'chapter': 3, 'verses': '23-29', 'pericope_number': 208}),
        'alleluia': t(452, 453, 'Alleluia', pre='Alleluia, in Tone I: '),
        'alleluia_verse': t(454, 455, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(456, 469, 'Gospel', 'GOSPEL ACCORDING TO ST. MARK,', '§21 (5:24-34)',
                            {'book': 'Mark', 'chapter': 5, 'verses': '24-34', 'pericope_number': 21}),
        'communion_verse': t(470, 471, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints. From the title lines.
        'name': 'the holy Great-martyr Barbara and our venerable father John of Damascus',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2B',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('ONE printed service for two saints: one entry, items tagged with `saint`. Rank by the '
                 'encoding_rule_v2.md 1.1 waterfall, step 6: six stichera at Lord I have cried split 3 + 3 between two '
                 'saints, no Little Vespers, no Polyeleos, no Great Doxology; ODS vol. III has no 12-04 entry. Fekula '
                 '2B (a double service). The page DOES print "On the Praises, 4 Stichera of the holy great-martyr" '
                 'with a Glory, and then "On the Aposticha, Stichera from the Oktoechos" with a Glory of the venerable '
                 'one: Praises stichera and a Matins aposticha together, with no Great Doxology named. Two canons, '
                 'both in Tone II on the same irmoi, three troparia to the ode as printed (the great-martyr\'s has no '
                 'Theotokion; the first troparion of several odes is marked "Twice"); the rubric appoints the '
                 'Oktoechos canon with six. The kontakion and ikos of the venerable one stand after Ode III, those of '
                 'the great-martyr after Ode VI; at Liturgy the kontakia are printed venerable one first. At Liturgy '
                 'eight Beatitude troparia (Ode III of the great-martyr, Ode VI of the venerable one) and ONE set of '
                 'prokeimenon, Epistle, Alleluia, Gospel and communion verse.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
