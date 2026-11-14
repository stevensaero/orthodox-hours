# 11-16.pdf — COMMEMORATION OF THE HOLY APOSTLE & EVANGELIST MATTHEW (16 pages)
# Boundaries read off the extracted page, 14 Nov 2026.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-16')
    t, r = s.t, s.r
    s.mark(4, 172, 487)
    s.mark(262, 279, 320, 336, 353, 381, 398, 419)

    sites = [t(156, 157, 'tr vespers'), t(174, 175, 'tr matins'), t(511, 512, 'tr liturgy')]
    assert same(sites[0], sites[1]), 'Vespers/Matins troparion sites diverge'
    assert not same(sites[0], sites[2]), 'p15 troparion now matches: fold it into the canonical field'
    troparion = t(156, 157, 'Troparion of the holy evangelist', sl=155)
    troparion.pop('repeat', None)
    troparion['verified_sites'] = [{'locus': 'p5 blessing of the Loaves', 'tone': 3, 'repeat': 2},
                                   {'locus': 'p6 God is the Lord', 'tone': 3, 'repeat': 2}]
    assert same(t(371, 374, 'k1'), t(520, 523, 'k2')), 'kontakion sites diverge'
    s.mark(519)
    kontakion = t(371, 374, 'Kontakion of the holy evangelist', sl=369, sm=370,
                  verified_sites=[{'locus': 'p11 after Ode VI', 'tone': 4}, {'locus': 'p15 AT LITURGY', 'tone': 4}])
    ikos = t(375, 380, 'Ikos', pre='Ikos: ')

    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon',
                  'entrance_rubric', 'readings', 'litiya',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'troparion_alternate_rubric', 'troparion_alternate',
                  'virgin_theotokos_rubric', 'no_vigil_rubric', 'troparion_closer'],
        'rubric': r(5, 5, 'Great Vespers rubric'),
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [13, 19, 24, 30, 36], 'LIC', sm=7, first={'tone': 4}),
        'lic_glory': t(39, 45, 'LIC Glory', sl=38),
        'dogmatikon': t(47, 54, 'LIC Both now, Dogmatic Theotokion', sl=46, type='dogmatic_theotokion'),
        'entrance_rubric': r(55, 55, 'Entrance'),
        'readings': [
            s.reading(56, 71, 'Lesson 1', 'A READING FROM THE GENERAL EPISTLE OF JOHN', '(I JN. 3: 21-4: 6)',
                      {'book': '1 John', 'chapter': 3, 'verses': '3:21-4:6'}),
            s.reading(72, 81, 'Lesson 2', 'A READING FROM THE GENERAL EPISTLE OF JOHN', '(I JN. 4: 11-16)',
                      {'book': '1 John', 'chapter': 4, 'verses': '11-16'}),
            s.reading(82, 92, 'Lesson 3', 'A READING FROM THE GENERAL EPISTLE OF JOHN', '(I JN. 4: 20-5: 5)',
                      {'book': '1 John', 'chapter': 4, 'verses': '4:20-5:5'}),
        ],
        'litiya': {
            'rubric': r(93, 93, 'Litiya rubric'),
            'stichera': s.seq(95, [98, 103, 108], 'Litiya', sm=94, first={'tone': 4}),
            'glory': t(110, 115, 'Litiya Glory', sl=109),
            'both_now': t(118, 118, 'Litiya Both now', sl=117, type='theotokion'),
        },
        'aposticha_rubric': r(119, 119, 'Aposticha rubric'),
        'aposticha': [
            t(121, 125, 'Aposticha 1', sm=120, label='plain', tone=4),
            t(126, 127, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(128, 132, 'Aposticha 2', sm=120, label='plain'),
            t(133, 134, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(135, 139, 'Aposticha 3', sm=120, label='plain'),
        ],
        'aposticha_glory': t(141, 147, 'Aposticha Glory', sl=140),
        'aposticha_closer': t(149, 153, 'Aposticha Both now', sl=148, type='theotokion'),
        'troparion_rubric': r(155, 155, 'Blessing of the Loaves rubric'),
        'troparion_alternate_rubric': r(158, 158, 'Or this Troparion rubric'),
        'troparion_alternate': t(159, 163, 'Or this Troparion', sourceLabel='Or this Troparion, in the same tone'),
        'virgin_theotokos_rubric': r(164, 164, 'Virgin Theotokos rejoice rubric'),
        'no_vigil_rubric': r(165, 165, 'If a vigil is not served'),
        'troparion_closer': t(167, 170, 'Dismissal Theotokion (no vigil)', sl=166, type='theotokion'),
    }

    mr, mt = s.split_inline(203, 205, 'magnification rubric', 'Magnification')
    # p13: the first Praises sticheron ends "sanctification. Twice" — the device
    # printed WITHOUT its parentheses. Lifted by hand; the page is on record here.
    p1 = t(458, 462, 'Praises 1', sm=457, label='plain', tone=4)
    assert p1['text'].endswith(' Twice'), p1['text'][-20:]
    p1['text'] = p1['text'][:-len(' Twice')]
    p1['repeat'] = 2
    p1['provenance_note'] = 'The repeat device is printed bare, "Twice", with no parentheses (p13).'

    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer',
                  'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric',
                  'sessional_polyeleos', 'anabathmoi_rubric', 'prokeimenon', 'prokeimenon_verse',
                  'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_glory', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'closing_rubric'],
        'god_is_lord_rubric': r(173, 173, 'God is the Lord rubric'),
        'troparion_closer': t(177, 180, 'God is the Lord Theotokion', sl=176, type='theotokion'),
        'sessional_1': [
            t(183, 186, 'Sessional 1', sl=181, sm=182, label='plain'),
            t(188, 191, 'Sessional 1 Theotokion', sl=187, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(194, 197, 'Sessional 2', sl=192, sm=193, label='plain'),
            t(199, 202, 'Sessional 2 Theotokion', sl=198, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(206, 206, 'Selected verse rubric'),
        'megalynarion_verse': t(207, 208, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(210, 210, 'after the selected verses'),
        'sessional_polyeleos': [
            t(213, 218, 'Polyeleos sessional', sl=211, sm=212, label='plain'),
            t(220, 226, 'Polyeleos sessional Theotokion', sl=219, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(227, 227, 'Song of Ascents rubric'),
        'prokeimenon': t(228, 229, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(230, 231, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(232, 232, 'Let every breath'),
        'gospel': s.reading(233, 253, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '(21:15-25)',
                            {'book': 'John', 'chapter': 21, 'verses': '15-25'}),
        'psalm50_sticheron': t(255, 259, 'After Psalm 50 sticheron', sl=254),
        'canon_rubric': r(260, 261, 'Canon rubric'),
        'canons': [{
            'title': s.raw(260, 261),
            'composer': 'Theophanes',
            'tone': 4,
            'odes': {
                1: s.ode(1, (263, 265), [268, 271, 274, 277], kat=278),
                3: s.ode(3, (280, 282), [285, 289, 292, 296]),
                4: s.ode(4, (321, 323), [325, 329, 332, 335]),
                5: s.ode(5, (337, 339), [343, 346, 349, 352]),
                6: s.ode(6, (354, 356), [359, 362, 364, 368]),
                7: s.ode(7, (382, 385), [388, 391, 394, 397]),
                8: s.ode(8, (399, 402), [406, 410, 414, 418]),
                9: s.ode(9, (420, 423), [427, 431, 435, 439]),
            },
        }],
        'sessional_ode3': [
            t(299, 304, 'Ode III sessional', sl=297, sm=298, label='plain'),
            t(306, 311, 'Ode III sessional Glory', sl=305, label='glory'),
            t(313, 319, 'Ode III sessional Theotokion', sl=312, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'exapostilarion': t(443, 445, 'Exapostilarion', sl=440, sm=442, label='plain'),
        'exapostilarion_glory': t(447, 450, 'Another Exapostilarion', sl=446, label='glory'),
        'exapostilarion_closer': t(452, 455, 'Exapostilarion Theotokion', sl=451, type='theotokion'),
        'praises_rubric': r(456, 456, 'Praises rubric'),
        'praises': [p1,
                    t(463, 467, 'Praises 2', sm=457, label='plain'),
                    t(468, 471, 'Praises 3', sm=457, label='plain')],
        'praises_glory': t(473, 480, 'Praises Glory', sl=472, composer='Byzantius'),
        'praises_closer': t(483, 484, 'Praises Both now', sl=482, type='theotokion'),
        'closing_rubric': r(485, 485, 'Matins closing rubric'),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'liturgy_troparion',
                  'troparion_alternate_rubric', 'troparion_alternate', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(488, 489, 'Beatitudes rubric'),
        'beatitudes': s.seq(490, [492, 495, 498, 501, 504, 506], 'Beatitude') + [
            t(507, 509, 'Beatitude 7 Theotokion', pre='Theotokion: ', label='theotokion')],
        # R-1 REFUSAL, the same one as 11-14: no final period at the Liturgy site.
        'liturgy_troparion': t(511, 512, 'Troparion at Liturgy', sl=510),
        'troparion_alternate_rubric': r(513, 513, 'Or this Troparion rubric (Liturgy)'),
        'troparion_alternate': t(514, 518, 'Or this Troparion (Liturgy)', sourceLabel='Or this Troparion, in the same tone'),
        'prokeimenon': t(525, 526, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VIII: '),
        'prokeimenon_verse': t(527, 528, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(529, 540, 'Epistle', 'EPISTLE TO THE CORINTHIANS,', '§111(I COR. 4: 9-16)',
                             {'book': '1 Corinthians', 'chapter': 4, 'verses': '9-16', 'pericope_number': 111}),
        'alleluia': t(541, 542, 'Alleluia', pre='Alleluia, in Tone I: '),
        'alleluia_verse': t(543, 543, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(544, 553, 'Gospel', 'GOSPEL ACCORDING TO MATTHEW,', '§30(9: 9-13)',
                            {'book': 'Matthew', 'chapter': 9, 'verses': '9-13', 'pericope_number': 30}),
        'communion_verse': t(554, 555, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall (ODS vol. III has no 11-16 entry): headed AT GREAT '
                 'VESPERS, no Little Vespers, Polyeleos with a magnification. PROVISIONAL on the same ground as the '
                 'Apostle Philip (open question Q-0001): 8 stichera, a Litiya, the blessing of the Loaves, and "But if '
                 'a vigil is not served". Two troparia are printed, as for Philip (the class of Q-0005). The '
                 '"Or this Troparion" is pointed differently at its two print sites, and the troparion loses its '
                 'final period at the Liturgy, exactly as on 11-14.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'great_vespers', 'matins', 'liturgy']
