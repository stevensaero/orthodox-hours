# 09-08A.pdf — COMMEMORATION OF THE FINDING OF THE WONDERWORKING ICON OF THE
# MOST HOLY THEOTOKOS KNOWN AS THE KURSK-ROOT ICON OF THE SIGN (16 pages).
# Second file of 8 September (c1), a separate service. OVERLAP DATE for the
# V1/V2 comparison. The same service the book prints again as 11-27A, with
# small differences of wording in its labels. Boundaries read off the page.
from daily_lib import Src, same

def build():
    s = Src('09-08A')
    t, r = s.t, s.r
    s.mark(5, 167, 471)
    s.mark(235, 254, 285, 313, 336, 370, 391, 412)
    assert s.raw(336) == 'OODE VI', s.raw(336)

    sites = [t(162, 165, 'a'), t(169, 172, 'b'), t(509, 512, 'c')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(508)
    troparion = t(162, 165, 'Troparion of the holy icon', sl=161)
    troparion['verified_sites'] = [
        {'locus': 'p5 end of Great Vespers', 'tone': 4},
        {'locus': 'p6 God is the Lord', 'tone': 4, 'repeat': 3},
        {'locus': 'p15 AT LITURGY', 'tone': 4}]
    assert same(t(357, 359, 'k1'), t(514, 516, 'k2')), 'kontakion sites diverge'
    s.mark(513)
    kontakion = t(357, 359, 'Kontakion of the holy icon', sl=356,
                  verified_sites=[{'locus': 'p10 after Ode VI', 'tone': 6}, {'locus': 'p15 AT LITURGY', 'tone': 6}])
    ikos = t(360, 369, 'Ikos', pre='Ikos: ')

    s.mark(8)
    assert s.raw(8) == 'Spec. Mel: “O most glorious wonder ...”:', s.raw(8)
    SM = 'O most glorious wonder ...'
    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya_rubric', 'litiya', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparion'],
        'rubric': r(6, 6, 'Great Vespers rubric'),
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [13, 18, 23, 28, 33], 'LIC', first={'tone': 8}, spec_mel=SM) + [
            t(35, 42, 'LIC 6', sl=34, label='plain'),
            t(44, 47, 'LIC 7', label='plain'),
            t(48, 52, 'LIC 8', label='plain'),
        ],
        'lic_closer': t(54, 57, 'LIC Glory/Both now', sl=53, type='of_the_feast'),
        'entrance_rubric': r(58, 58, 'Entrance'),
        'readings': [
            s.reading_id(59, 74, 'Lesson 1', {'book': 'Genesis', 'chapter': 28, 'verses': '10-17'},
                'No reference printed. The body opens "And Jacob went out from Beersheba" and closes "this is the gate '
                'of heaven": Genesis 28:10-17, as V1 identified it for this file. Confirm.'),
            s.reading_id(75, 87, 'Lesson 2', {'book': 'Ezekiel', 'chapter': 43, 'verses': '43:27-44:4'},
                'No reference printed. Opens "And when these days are expired, it shall be", closes "I fell upon my '
                'face": Ezekiel 43:27-44:4, as V1 identified it for this file. Confirm.'),
            s.reading(88, 100, 'Lesson 3', 'READING FROM THE PROVERBS', '(9:1-11)',
                      {'book': 'Proverbs', 'chapter': 9, 'verses': '1-11'}),
        ],
        'litiya_rubric': r(101, 101, 'Litiya rubric'),
        'litiya': [
            t(102, 107, 'Litiya 1', pre='In Tone I: ', label='plain', tone=1),
            t(108, 112, 'Litiya 2', label='plain'),
            t(113, 118, 'Litiya 3', pre='In Tone II: ', label='plain', tone=2),
            t(119, 125, 'Litiya 4', pre='In Tone VII: ', label='plain', tone=7),
        ],
        'litiya_closer': t(127, 137, 'Litiya Glory/Both now', sl=126, type='of_the_feast'),
        'aposticha_rubric': r(138, 138, 'Aposticha rubric'),
        'aposticha': [
            t(139, 142, 'Aposticha 1', label='plain', tone=1),
            t(143, 143, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(144, 148, 'Aposticha 2', label='plain'),
            t(149, 149, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(150, 153, 'Aposticha 3', label='plain'),
        ],
        'aposticha_closer': t(155, 159, 'Aposticha Glory/Both now', sl=154, type='of_the_feast'),
    }

    mr, mt = s.split_inline(194, 196, 'magnification rubric', 'Magnification')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'sessional_polyeleos', 'anabathmoi_rubric', 'prokeimenon', 'prokeimenon_verse',
                  'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer', 'praises_rubric', 'praises', 'praises_closer'],
        'god_is_lord_rubric': r(168, 168, 'God is the Lord rubric'),
        'sessional_1': [
            t(174, 178, 'Sessional 1', sl=173, label='plain'),
            t(180, 184, 'Sessional 1 Glory/Both now', sl=179, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(186, 192, 'Sessional 2', sl=185, label='plain'),
            t(193, 193, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(197, 197, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(198, 199, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'sessional_polyeleos': [
            t(201, 205, 'Polyeleos sessional', sl=200, label='plain'),
            t(207, 207, 'Polyeleos sessional repeat device', device=False, label=['glory', 'both_now']),
        ],
        'anabathmoi_rubric': r(208, 208, 'Song of Ascents rubric'),
        'prokeimenon': t(209, 210, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(211, 211, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(212, 212, 'Let every breath'),
        'gospel': s.reading(213, 226, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(1:39-49, 56)',
                            {'book': 'Luke', 'chapter': 1, 'verses': '39-49, 56'}),
        'psalm50_sticheron': t(228, 232, 'After Psalm 50 sticheron', sl=227),
        'canon_rubric': r(233, 234, 'Canon rubric'),
        'canons': [{
            'title': s.raw(233, 234),
            'acrostic': 'I dare to offer thee praise, O Theotokos',
            'tone': 4,
            'odes': {
                1: s.ode(1, (236, 238), [241, 246, 249, 253]),
                3: s.ode(3, (255, 257), [261, 265, 270, 275]),
                4: s.ode(4, (286, 288), [294, 300, 308, 312]),
                5: s.ode(5, (314, 316), [322, 327, 331, 335]),
                6: s.ode(6, (337, 339), [344, 348, 352, 355]),
                7: s.ode(7, (371, 374), [378, 382, 386, 390]),
                8: s.ode(8, (392, 395), [399, 403, 407, 411]),
                9: s.ode(9, (413, 416), [420, 425, 429, 435]),
            },
        }],
        'sessional_ode3': [t(277, 283, 'Ode III sessional', sl=276, label='plain')],
        'exapostilarion': t(437, 440, 'Exapostilarion', sl=436, label='plain'),
        'exapostilarion_closer': t(443, 447, 'Exapostilarion Glory/Both now', sl=442, type='of_the_feast'),
        'praises_rubric': r(448, 448, 'Praises rubric'),
        'praises': s.seq(449, [453, 457, 462], 'Praises', first={'tone': 8}),
        'praises_closer': t(464, 469, 'Praises Glory/Both now', sl=463, type='of_the_feast'),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(472, 472, 'Beatitudes rubric'),
        'beatitudes': s.seq(473, [476, 480, 485, 490, 495, 499, 503, 506], 'Beatitude'),
        'prokeimenon': t(517, 518, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone III: The hymn of the Theotokos: ',
                         tone=3),
        'prokeimenon_verse': t(519, 520, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(521, 532, 'Epistle', 'THE EPISTLE OF PAUL TO THE HEBREWS', '(9:1-7)',
                             {'book': 'Hebrews', 'chapter': 9, 'verses': '1-7'}),
        'alleluia': t(533, 533, 'Alleluia', pre='Alleluia, in Tone VIII: '),
        'alleluia_verse': t(534, 534, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(535, 547, 'Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(10:38-42; 11:27-28)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '10:38-42, 11:27-28'}),
        'communion_verse': t(548, 549, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'feast',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). Second file of 8 '
                 'September, a separate service (the Finding of the Kursk-Root Icon), beside the Great Feast. RANK '
                 'FOLLOWS V1: polyeleos, Fekula 2E. THE SAME PRINTED SERVICE appears again as 11-27A.pdf, which was '
                 'stored `vigil` / 2F provisionally on its printed Litiya; ODS vol. III shows a printed Litiya does '
                 'not settle Vigil against Polyeleos, and V1 took Polyeleos. The two entries must end up with one '
                 'rank: open question Q-0002. Great Vespers with 8 stichera, three lessons, a Litiya; Polyeleos with '
                 'a magnification; no blessing of the Loaves rubric, no Great Doxology rubric; Matins ends with the '
                 'Praises. The first two Vespers lessons print no reference; the third prints "(9:1-11)". This file '
                 'writes "Both now" where 11-27A writes "Now & ever".'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'great_vespers', 'matins', 'liturgy']
