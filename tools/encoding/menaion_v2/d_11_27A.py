# 11-27A.pdf — COMMEMORATION OF THE WONDERWORKING ICON OF THE MOST HOLY
# THEOTOKOS KNOWN AS THE KURSK-ROOT ICON OF THE SIGN (16 pages). Second
# commemoration of 27 November (c1). Great Vespers with Litiya; Polyeleos.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('11-27A')
    t, r = s.t, s.r
    s.mark(5, 168, 472)
    s.mark(236, 255, 286, 314, 337, 371, 392, 413)
    assert s.raw(337) == 'OODE VI', s.raw(337)

    sites = [t(163, 166, 'a'), t(170, 173, 'b'), t(510, 513, 'c')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(509)
    troparion = t(163, 166, 'Troparion', sl=162)
    troparion['verified_sites'] = [
        {'locus': 'p5 end of Great Vespers', 'tone': 4},
        {'locus': 'p6 God is the Lord', 'tone': 4, 'repeat': 3},
        {'locus': 'p15 AT LITURGY', 'tone': 4}]
    assert same(t(358, 360, 'k1'), t(515, 517, 'k2')), 'kontakion sites diverge'
    s.mark(514)
    kontakion = t(358, 360, 'Kontakion', sl=357,
                  verified_sites=[{'locus': 'p10 after Ode VI', 'tone': 6}, {'locus': 'p15 AT LITURGY', 'tone': 6}])
    ikos = t(361, 370, 'Ikos', pre='Ikos: ')

    s.mark(8)
    assert s.raw(8) == 'Spec. Mel: “O most glorious wonder ...”:', s.raw(8)
    SM = 'O most glorious wonder ...'
    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya', 'litiya_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparion'],
        'rubric': r(6, 6, 'Great Vespers rubric'),
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [13, 18, 23, 28, 33], 'LIC', first={'tone': 8}, spec_mel=SM) + [
            t(35, 42, 'LIC 6', sl=34, label='plain'),
            t(44, 47, 'LIC 7', label='plain'),
            t(48, 52, 'LIC 8', label='plain'),
        ],
        'lic_closer': t(54, 57, 'LIC Glory/Now & ever', sl=53, type='of_the_feast'),
        'entrance_rubric': r(58, 58, 'Entrance'),
        'readings': [
            s.reading_id(59, 74, 'Lesson 1', {'book': 'Genesis', 'chapter': 28, 'verses': '10-17'},
                'No reference printed. The body opens "And Jacob went out from Beersheba" and closes "this is the gate '
                'of heaven": Genesis 28:10-17, Jacob\'s ladder. Identified by first and last words; confirm.'),
            s.reading_id(75, 87, 'Lesson 2', {'book': 'Ezekiel', 'chapter': 43, 'verses': '43:27-44:4'},
                'No reference printed. Opens "And when these days are expired, it shall be", closes "I fell upon my '
                'face": Ezekiel 43:27-44:4, the shut gate. Identified by first and last words; confirm.'),
            s.reading(88, 100, 'Lesson 3', 'READING FROM THE PROVERBS', '(9:1-11)',
                      {'book': 'Proverbs', 'chapter': 9, 'verses': '1-11'}),
        ],
        'litiya': [
            t(102, 106, 'Litiya 1', sl=101, label='plain'),
            t(107, 111, 'Litiya 2', label='plain'),
            t(113, 118, 'Litiya 3', sl=112, label='plain'),
            t(120, 126, 'Litiya 4', sl=119, label='plain'),
        ],
        'litiya_closer': t(128, 138, 'Litiya Glory/Now & ever', sl=127, type='of_the_feast'),
        'aposticha_rubric': r(139, 139, 'Aposticha rubric'),
        'aposticha': [
            t(140, 143, 'Aposticha 1', label='plain', tone=1),
            t(144, 144, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(145, 149, 'Aposticha 2', label='plain'),
            t(150, 150, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(151, 154, 'Aposticha 3', label='plain'),
        ],
        'aposticha_closer': t(156, 160, 'Aposticha Glory/Now & ever', sl=155, type='of_the_feast'),
    }

    mr, mt = s.split_inline(195, 197, 'magnification rubric', 'Magnification')
    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'sessional_polyeleos', 'anabathmoi_rubric', 'prokeimenon', 'prokeimenon_verse',
                  'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer', 'praises_rubric', 'praises', 'praises_closer'],
        'god_is_lord_rubric': r(169, 169, 'God is the Lord rubric'),
        'sessional_1': [
            t(175, 179, 'Sessional 1', sl=174, label='plain'),
            t(181, 185, 'Sessional 1 Glory/Now & ever', sl=180, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(187, 193, 'Sessional 2', sl=186, label='plain'),
            t(194, 194, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(198, 198, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(199, 200, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'sessional_polyeleos': [
            t(202, 206, 'Polyeleos sessional', sl=201, label='plain'),
            t(208, 208, 'Polyeleos sessional repeat device', device=False, label=['glory', 'both_now']),
        ],
        'anabathmoi_rubric': r(209, 209, 'Song of Ascents rubric'),
        'prokeimenon': t(210, 211, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(212, 212, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(213, 213, 'Let every breath'),
        'gospel': s.reading(214, 227, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(1:39-49, 56)',
                            {'book': 'Luke', 'chapter': 1, 'verses': '39-49, 56'}),
        'psalm50_sticheron': t(229, 233, 'After Psalm 50 sticheron', sl=228),
        'canon_rubric': r(234, 235, 'Canon rubric'),
        'canons': [{
            'title': s.raw(234, 235),
            'acrostic': 'I dare to offer thee praise, O Theotokos',
            'tone': 4,
            'odes': {
                1: s.ode(1, (237, 239), [242, 246, 250, 254]),
                3: s.ode(3, (256, 258), [262, 266, 271, 276]),
                4: s.ode(4, (287, 289), [295, 301, 309, 313]),
                5: s.ode(5, (315, 317), [323, 328, 332, 336]),
                6: s.ode(6, (338, 340), [345, 349, 353, 356]),
                7: s.ode(7, (372, 375), [379, 383, 387, 391]),
                8: s.ode(8, (393, 396), [400, 404, 408, 412]),
                9: s.ode(9, (414, 417), [421, 426, 430, 436]),
            },
        }],
        'sessional_ode3': [t(278, 284, 'Ode III sessional', sl=277, label='plain')],
        'exapostilarion': t(438, 441, 'Exapostilarion', sl=437, label='plain'),
        'exapostilarion_closer': t(444, 448, 'Exapostilarion Glory/Now & ever', sl=443, type='of_the_feast'),
        'praises_rubric': r(449, 449, 'Praises rubric'),
        'praises': s.seq(450, [454, 458, 463], 'Praises', first={'tone': 8}),
        'praises_closer': t(465, 470, 'Praises Glory/Now & ever', sl=464, type='of_the_feast'),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(473, 473, 'Beatitudes rubric'),
        'beatitudes': s.seq(474, [477, 481, 486, 491, 496, 500, 504, 507], 'Beatitude'),
        'prokeimenon': t(518, 519, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone III: The hymn of the Theotokos: ',
                         tone=3),
        'prokeimenon_verse': t(520, 521, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(522, 533, 'Epistle', 'THE EPISTLE OF PAUL TO THE HEBREWS', '(9:1-7)',
                             {'book': 'Hebrews', 'chapter': 9, 'verses': '1-7'}),
        'alleluia': t(534, 534, 'Alleluia', pre='Alleluia, in Tone VIII: '),
        'alleluia_verse': t(535, 535, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(536, 548, 'Gospel', 'THE GOSPEL ACCORDING TO ST. LUKE', '(10:38-42; 11:27-28)',
                            {'book': 'Luke', 'chapter': 10, 'verses': '10:38-42, 11:27-28'}),
        'communion_verse': t(549, 550, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'feast',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('RANK RULED 14 Nov 2026 (Bill): `polyeleos`, Fekula 2E, still provisional under Q-0002, to agree with 09-08A, which prints this same service and which V1 ranked polyeleos. The note below was written when it was stored vigil. '
                 'A feast of an icon of the Theotokos (the Kursk-Root Icon of the Sign), second file of 27 November; '
                 'the first (11-27) is the Great-martyr James the Persian. Rank by the encoding_rule_v2.md 1.1 '
                 'waterfall: AT GREAT VESPERS with 8 stichera, three lessons, a LITIYA, and Polyeleos with a '
                 'magnification: stored Vigil, Fekula 2F PROVISIONALLY (open question Q-0002: ODS vol. III has no entry for this date, and it shows that a printed Litiya does not by itself prove Vigil rank, since its polyeleos-rank outlines can carry a Litia at the rector\'s direction), on the strength of the printed Litiya (as 11-26A). The page '
                 'does NOT print a blessing of the Loaves rubric, a "Great Doxology" rubric after the Praises, or a '
                 'closing rubric; Matins ends with the Praises. The troparion is printed "(Thrice)" at God is the '
                 'Lord, as for a feast of the Theotokos. This file writes "Now & ever" where the rest of the book '
                 'writes "Both now"; labels kept verbatim. The first two Vespers lessons print no reference '
                 '(citations identified); the third prints "(9:1-11)". The title line prints "THE 27h DAY". Which '
                 'of the two services of the date a parish takes is the Q-0002 kind of question.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'great_vespers', 'matins', 'liturgy']
