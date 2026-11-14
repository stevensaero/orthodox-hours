# 11-14A.pdf — COMMEMORATION OF OUR FATHER AMONG THE SAINTS GREGORY PALAMAS,
# ARCHBISHOP OF THESSALONICA, THE WONDERWORKER (16 pages). Second commemoration
# of 14 November (c1). Boundaries read off the extracted page, 14 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-14A')
    t, r = s.t, s.r
    s.mark(5, 190, 518)
    s.mark(270, 289, 328, 346, 366, 408, 428, 451)

    sites = [t(177, 179, 'Troparion at the blessing of the Loaves'),
             t(192, 194, 'Troparion at God is the Lord'),
             t(549, 551, 'Troparion at Liturgy')]
    assert same(*sites), 'troparion sites diverge'
    s.mark(548)
    troparion = t(177, 179, 'Troparion of the holy hierarch', sl=176)
    troparion.pop('repeat', None)
    troparion['verified_sites'] = [
        {'locus': 'p5 blessing of the Loaves', 'tone': 8, 'repeat': 2},
        {'locus': 'p6 God is the Lord', 'tone': 8, 'repeat': 2},
        {'locus': 'p15 AT LITURGY', 'tone': 8}]
    assert same(t(391, 394, 'k1'), t(553, 556, 'k2')), 'kontakion sites diverge'
    s.mark(552)
    kontakion = t(391, 394, 'Kontakion of the holy hierarch', sl=389, sm=390,
                  verified_sites=[{'locus': 'p11 after Ode VI', 'tone': 8}, {'locus': 'p15 AT LITURGY', 'tone': 8}])
    ikos = t(395, 407, 'Ikos', pre='Ikos: ')

    # The God-is-the-Lord theotokion (p6) and the no-vigil dismissal theotokion
    # (p5) are one text printed twice; each position stores its own copy (2.3).
    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon',
                  'entrance_rubric', 'readings',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric',
                  'no_vigil_rubric', 'troparion_closer', 'closing_rubric'],
        'rubric': r(6, 6, 'Great Vespers rubric'),
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [14, 21, 29], 'LIC', sm=8, first={'tone': 5}) + [
            t(32, 35, 'LIC 4', sl=30, sm=31, label='plain'),
            t(36, 40, 'LIC 5', sm=31, label='plain'),
            t(42, 46, 'LIC 6', sm=31, label='plain'),
        ],
        'lic_glory': t(48, 54, 'LIC Glory', sl=47),
        'dogmatikon': t(56, 63, 'LIC Both now, Dogmatic Theotokion', sl=55, type='dogmatic_theotokion'),
        'entrance_rubric': r(64, 64, 'Entrance'),
        'readings': [
            s.reading_id(65, 84, 'Lesson 1', {'book': 'Proverbs', 'chapter': 10, 'verses': '10:7, 3:13-16, 8:6'},
                'No reference printed. The body opens "The memory of the just is praised" (Proverbs 10:7) and moves to '
                '"Blessed is the man who hath found wisdom" (3:13-16), then the Wisdom-speech of chapter 8: the composite '
                'hierarch lesson general.Heirarch.vespers.readings[0] identifies and Heirarchs.pdf prints as "(3, 13-16; 8, 6)". '
                'The body here runs on past 8:6. Identified by correspondence; confirm the span against the page.'),
            s.reading_id(85, 103, 'Lesson 2', {'book': 'Proverbs', 'chapter': 10, 'verses': '10:31-32, 11:1-12'},
                'No reference printed. Opens "The mouth of the righteous droppeth wisdom" (Proverbs 10:31), the lesson '
                'Heirarchs.pdf cites "(10, 31-32 ; 11, 1-10)". The body here continues two verses further, to "a sensible '
                'man is quiet" (11:12). Identified; confirm against the page.'),
            s.reading_id(104, 137, 'Lesson 3', {'book': 'Wisdom of Solomon', 'chapter': 4, 'verses': '4:1, 6:11-12, 17-21'},
                'Heading prints no article and a full stop: "READING FROM THE WISDOM OF SOLOMON." No reference printed. '
                'Opens "When the righteous is praised", as general.Heirarch.vespers.readings[2]; composite, and it runs on '
                'into the "Let us oppress the righteous man" material of Wisdom 2. Identified by correspondence only; the '
                'span is NOT settled. Confirm against the page.'),
        ],
        'aposticha_rubric': r(138, 138, 'Aposticha rubric'),
        'aposticha': [
            t(140, 145, 'Aposticha 1', sm=139, label='plain', tone=5),
            t(146, 146, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(147, 152, 'Aposticha 2', sm=139, label='plain'),
            t(153, 154, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(155, 160, 'Aposticha 3', sm=139, label='plain'),
        ],
        'aposticha_glory': t(163, 168, 'Aposticha Glory', sl=162),
        'aposticha_closer': t(170, 175, 'Aposticha Both now', sl=169, type='theotokion'),
        'troparion_rubric': r(176, 176, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(180, 180, 'Virgin Theotokos rejoice rubric'),
        'no_vigil_rubric': r(181, 181, 'If a vigil is not served'),
        'troparion_closer': t(183, 187, 'Dismissal Theotokion (no vigil)', sl=182, type='theotokion'),
        'closing_rubric': r(188, 188, 'The dismissal'),
    }

    mr, mt = s.split_inline(219, 221, 'magnification rubric', 'Magnification')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer',
                  'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric',
                  'sessional_polyeleos', 'anabathmoi_rubric', 'prokeimenon', 'prokeimenon_verse',
                  'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer', 'closing_rubric'],
        'god_is_lord_rubric': r(191, 191, 'God is the Lord rubric'),
        'troparion_closer': t(196, 200, 'God is the Lord Theotokion', sl=195, type='theotokion'),
        'sessional_1': [
            t(203, 205, 'Sessional 1', sl=201, sm=202, label='plain'),
            t(207, 209, 'Sessional 1 Theotokion', sl=206, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(211, 214, 'Sessional 2', sl=210, label='plain'),
            t(216, 218, 'Sessional 2 Theotokion', sl=215, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(222, 222, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(223, 223, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(224, 224, 'after the selected verses'),
        'sessional_polyeleos': [
            t(228, 233, 'Polyeleos sessional', sl=226, sm=227, label='plain'),
            t(235, 241, 'Polyeleos sessional Theotokion', sl=234, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(242, 242, 'Song of ascents rubric'),
        'prokeimenon': t(243, 244, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(245, 246, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(247, 247, 'Let every breath'),
        'gospel': s.reading(248, 260, 'Matins Gospel', 'GOSPEL ACCORDING TO JOHN,', '§ 35(JN. 9: 39-10: 9)',
                            {'book': 'John', 'chapter': 9, 'verses': '9:39-10:9', 'pericope_number': 35}),
        'psalm50_sticheron': t(262, 266, 'After Psalm 50 sticheron', sl=261),
        'canon_rubric': r(268, 269, 'Canon rubric'),
        'canons': [{
            'title': s.raw(268, 269),
            'composer': 'Patriarch Philotheus',
            'tone': 1,
            'odes': {
                1: s.ode(1, (271, 273), [276, 279, 282, 285, 288]),
                3: s.ode(3, (290, 293), [296, 299, 303, 306, 311]),
                4: s.ode(4, (329, 331), [334, 337, 341, 344]),
                5: s.ode(5, (347, 350), [353, 356, 359, 362, 365]),
                6: s.ode(6, (367, 370), [373, 377, 380, 383, 388]),
                7: s.ode(7, (409, 412), [416, 420, 423, 427]),
                8: s.ode(8, (429, 432), [436, 439, 443, 446, 450]),
                9: s.ode(9, (452, 455), [458, 461, 465, 469, 472]),
            },
        }],
        'sessional_ode3': [
            t(314, 319, 'Ode III sessional', sl=312, sm=313, label='plain'),
            t(321, 327, 'Ode III sessional Theotokion', sl=320, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'exapostilarion': t(475, 479, 'Exapostilarion', sl=473, sm=474, label='plain'),
        'exapostilarion_closer': t(481, 487, 'Exapostilarion Theotokion', sl=480, type='theotokion'),
        # PRINTED "On the Aposticha", in the position where a service ending in
        # the Great Doxology takes its Praises stichera. Stored under the name
        # the page prints (R-9). Open question Q-0003.
        'aposticha_rubric': r(488, 488, 'Matins Aposticha rubric'),
        'aposticha': s.seq(490, [494, 498, 502], 'Matins Aposticha', sm=489, first={'tone': 1}),
        'aposticha_glory': t(504, 510, 'Matins Aposticha Glory', sl=503),
        'aposticha_closer': t(512, 515, 'Matins Aposticha Both now', sl=511, type='theotokion'),
        'closing_rubric': r(516, 516, 'Matins closing rubric'),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(519, 520, 'Beatitudes rubric'),
        'beatitudes': s.seq(521, [523, 526, 530, 533, 536, 540, 543], 'Beatitude') + [
            t(544, 547, 'Beatitude 8 Theotokion', pre='Theotokion: ', label='theotokion')],
        'prokeimenon': t(558, 559, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone I: '),
        'prokeimenon_verse': t(560, 560, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(561, 568, 'Epistle', 'THE FIRST EPISTLE TO THE CORINTHIANS', '§151(12: 7-11)',
                             {'book': '1 Corinthians', 'chapter': 12, 'verses': '7-11', 'pericope_number': 151}),
        'alleluia': t(569, 570, 'Alleluia', pre='Alleluia, in Tone II: '),
        'alleluia_verse': t(571, 571, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(572, 584, 'Gospel', 'GOSPEL ACCORDING TO ST. JOHN', '§36(10:9-16)',
                            {'book': 'John', 'chapter': 10, 'verses': '9-16', 'pericope_number': 36}),
        'communion_verse': t(585, 586, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall (ODS vol. III has no 11-14 entry): the heading is '
                 'AT GREAT VESPERS, no Little Vespers is printed, and Matins appoints the Polyeleos with a '
                 'magnification. PROVISIONAL, see open question Q-0002: the page prints the blessing of the Loaves '
                 'and then "But if a vigil is not served", so the book itself treats a Vigil as the expected form. '
                 'Second commemoration of the day; OCA lists Apostle Philip first. Matins prints its closing stichera '
                 'under "On the Aposticha" although the service ends with the Great Doxology (Q-0003).'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'great_vespers', 'matins', 'liturgy']
