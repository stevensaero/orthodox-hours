# 11-14.pdf — COMMEMORATION OF THE HOLY AND GLORIOUS APOSTLE PHILIP (14 pages)
# Boundaries read off the extracted page, 14 Nov 2026. Line numbers are those
# of extract.py output.
from daily_lib import Src, ABS, same

def build():
    s = Src('11-14')
    t, r = s.t, s.r
    s.mark(4, 146, 455)                                   # AT VESPERS / AT MATINS / AT LITURGY
    s.mark(232, 247, 286, 301, 316, 349, 364, 389)        # ODE headings (247 prints doubled glyphs)

    # ── canonical hymns (R-1) ────────────────────────────────────────────────
    trop_sites = [t(136, 137, 'Troparion at the blessing of the Loaves'),
                  t(148, 149, 'Troparion at God is the Lord'),
                  t(482, 483, 'Troparion at Liturgy')]
    assert same(trop_sites[0], trop_sites[1]), 'Vespers/Matins troparion sites diverge'
    liturgy_trop_differs = not same(trop_sites[0], trop_sites[2])   # p13 prints no final period
    troparion = t(136, 137, 'Troparion of the holy apostle',
                  sourceLabel='At the blessing of the Loaves, the Troparion, in Tone III', tone=3, device=True)
    troparion.pop('repeat', None)
    troparion['verified_sites'] = [
        {'locus': 'p4 blessing of the Loaves', 'tone': 3, 'repeat': 2},
        {'locus': 'p5 God is the Lord', 'tone': 3, 'repeat': 2}]

    kont_sites = [t(340, 343, 'Kontakion after Ode VI'), t(491, 494, 'Kontakion at Liturgy')]
    assert same(*kont_sites), 'kontakion sites diverge'
    kontakion = t(340, 343, 'Kontakion of the holy apostle', sl=338, sm=339,
                  verified_sites=[{'locus': 'p10 after Ode VI', 'tone': 8}, {'locus': 'p13 AT LITURGY', 'tone': 8}])
    s.mark(490)                                           # second print of the kontakion label
    ikos = t(344, 348, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon',
                  'entrance_rubric', 'readings', 'litiya',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric',
                  'troparion_alternate_rubric', 'troparion_alternate'],
        'rubric': r(5, 5, 'Vespers rubric'),
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [13, 18, 24], 'LIC', sm=7, first={'tone': 6}),
        'lic_glory': t(26, 30, 'LIC Glory', sl=25, composer='Emperor Leo VI, the Wise, of Byzantium'),
        'dogmatikon': t(32, 37, 'LIC Both now, Dogmatic Theotokion', sl=31, type='dogmatic_theotokion'),
        'entrance_rubric': r(39, 39, 'Entrance'),
        'readings': [
            s.reading(40, 55, 'Lesson 1', 'A READING FROM THE GENERAL EPISTLE OF JOHN', '(I JN. 3: 21-4: 6)',
                      {'book': '1 John', 'chapter': 3, 'verses': '3:21-4:6'}),
            s.reading(56, 64, 'Lesson 2', 'A READING FROM THE GENERAL EPISTLE OF JOHN', '(I JN. 4: 11-16)',
                      {'book': '1 John', 'chapter': 4, 'verses': '11-16'}),
            s.reading(65, 75, 'Lesson 3', 'A READING FROM THE GENERAL EPISTLE OF JOHN', '(I JN. 4: 20-5: 5)',
                      {'book': '1 John', 'chapter': 4, 'verses': '4:20-5:5'}),
        ],
        'litiya': {
            'rubric': r(76, 76, 'Litiya rubric'),
            'stichera': s.seq(79, [82, 87, 92], 'Litiya', sm=77, first={'tone': 4}),
            'glory': t(94, 99, 'Litiya Glory', sl=93),
            'both_now': t(101, 102, 'Litiya Both now', sl=100, type='theotokion'),
        },
        'aposticha_rubric': r(103, 103, 'Aposticha rubric'),
        'aposticha': [
            t(105, 108, 'Aposticha 1', sm=104, label='plain', tone=1),
            t(109, 110, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(111, 113, 'Aposticha 2', sm=104, label='plain'),
            t(114, 115, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(117, 119, 'Aposticha 3', sm=104, label='plain'),
        ],
        'aposticha_glory': t(121, 127, 'Aposticha Glory', sl=120),
        'aposticha_closer': t(129, 134, 'Aposticha Both now', sl=128, type='theotokion'),
        'troparion_rubric': r(135, 135, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(138, 138, 'Virgin Theotokos rejoice rubric'),
        'troparion_alternate_rubric': r(139, 139, 'Or this Troparion rubric'),
        'troparion_alternate': t(140, 144, 'Or this Troparion', sourceLabel='Or this Troparion, in the same tone'),
    }

    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer',
                  'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric',
                  'sessional_polyeleos', 'anabathmoi_rubric', 'prokeimenon', 'prokeimenon_verse',
                  'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'closing_rubric'],
        'god_is_lord_rubric': r(147, 147, 'God is the Lord rubric'),
        'troparion_closer': t(151, 154, 'God is the Lord Theotokion', sl=150, type='theotokion'),
        # A-2 (ruled 14 Nov 2026): a positional slot holding everything the page
        # prints at that position, in order, each item under its printed label.
        'sessional_1': [
            t(157, 159, 'Sessional 1', sl=155, sm=156, label='plain'),
            t(161, 163, 'Sessional 1 Theotokion', sl=160, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(166, 169, 'Sessional 2', sl=164, sm=165, label='plain'),
            t(171, 173, 'Sessional 2 Theotokion', sl=170, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
    }
    # line 174 runs the rubric into the magnification on one line
    mg = s.raw(174, 176)
    head, body = mg.split(': ', 1)
    matins['megalynarion_rubric'] = s.node(head + ':', 174, 'magnification rubric')
    matins['megalynarion'] = s.node(body, 174, 'Magnification', label_inline=True)
    matins.update({
        'megalynarion_verse_rubric': r(177, 177, 'Selected Psalm Verse rubric'),
        'megalynarion_verse': t(178, 179, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(180, 180, 'after the selected verses'),
        'sessional_polyeleos': [
            t(184, 188, 'Polyeleos sessional', sl=182, sm=183, label='plain'),
            t(190, 195, 'Polyeleos sessional Theotokion', sl=189, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(196, 196, 'Song of Ascents rubric'),
        'prokeimenon': t(197, 198, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(199, 200, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(201, 201, 'Let every breath'),
        'gospel': s.reading(202, 222, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '(21:15-25)',
                            {'book': 'John', 'chapter': 21, 'verses': '15-25'}),
        'psalm50_sticheron': t(224, 228, 'After Psalm 50 sticheron', sl=223),
        'canon_rubric': r(229, 231, 'Canon rubric'),
        'canons': [{
            'title': s.raw(229, 231),
            'composer': 'Theophanes',
            'acrostic': 'I hymn the glorious Philip in seemly manner',
            'tone': 6,
            'odes': {
                1: s.ode(1, (233, 235), [237, 239, 242, 245], kat=246),
                3: s.ode(3, (248, 250), [252, 255, 258, 262]),
                4: s.ode(4, (287, 288), [291, 293, 296, 299]),
                5: s.ode(5, (302, 304), [307, 310, 312, 315]),
                6: s.ode(6, (317, 321), [325, 329, 333, 336]),
                7: s.ode(7, (350, 352), [355, 358, 360, 363]),
                8: s.ode(8, (365, 369), [374, 379, 383, 388]),
                9: s.ode(9, (390, 393), [397, 401, 405, 409]),
            },
        }],
        'sessional_ode3': [
            t(265, 271, 'Ode III sessional', sl=263, sm=264, label='plain'),
            t(273, 278, 'Ode III sessional Glory', sl=272, label='glory'),
            t(280, 285, 'Ode III sessional Theotokion', sl=279, type='theotokion', label=['both_now', 'theotokion']),
        ],
        'exapostilarion': t(412, 415, 'Exapostilarion', sl=410, sm=411, label='plain'),
        'exapostilarion_closer': t(418, 421, 'Exapostilarion Theotokion', sl=417, type='theotokion'),
        'praises_rubric': r(422, 422, 'Praises rubric'),
        'praises': s.seq(424, [428, 433, 438], 'Praises', sm=423, first={'tone': 8}) + [
            t(439, 442, 'Praises 4', pre='And this, in Tone II: ', label='plain'),
        ],
        'praises_glory': t(444, 448, 'Praises Glory', sl=443),
        'praises_closer': t(450, 452, 'Praises Both now', sl=449, type='theotokion'),
        'closing_rubric': r(453, 453, 'Matins closing rubric'),
    })

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'liturgy_troparion',
                  'troparion_alternate_rubric', 'troparion_alternate', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle',
                  'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
        'beatitudes_rubric': r(456, 457, 'Beatitudes rubric'),
        'beatitudes': s.seq(458, [459, 462, 465, 469, 473, 477], 'Beatitude') + [
            t(478, 480, 'Beatitude 7 Theotokion', pre='Theotokion: ', label='theotokion')],
        # R-1 REFUSAL: p13 prints this troparion with NO final period ("unto our
        # souls"), against the pointed, period-closed text at p4 and p5. One
        # byte, but a byte: stored at its own position, never folded into the
        # canonical field. Register row + sic row carry the fact.
        'liturgy_troparion': t(482, 483, 'Troparion at Liturgy', sl=481),
        'troparion_alternate_rubric': r(484, 484, 'Or this Troparion rubric (Liturgy)'),
        'troparion_alternate': t(485, 489, 'Or this Troparion (Liturgy)', sourceLabel='Or this Troparion, in the same tone'),
        'prokeimenon': t(496, 497, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VIII: '),
        'prokeimenon_verse': t(498, 499, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(500, 511, 'Epistle', 'THE FIRST EPISTLE OF ST. PAUL TO THE CORINTHIANS', '(4:9-16)',
                             {'book': '1 Corinthians', 'chapter': 4, 'verses': '9-16'}),
        'alleluia': t(512, 513, 'Alleluia', pre='Alleluia, in Tone I: '),
        'alleluia_verse': t(514, 514, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(515, 529, 'Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '(1:43-51)',
                            {'book': 'John', 'chapter': 1, 'verses': '43-51'}),
        'communion_verse': t(530, 531, 'Communion Verse', pre='Communion Verse: '),
    }
    assert liturgy_trop_differs, 'p13 troparion now matches p4/p5: fold it back into the canonical field'

    entry = {
        'kind': 'saint',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall (ODS vol. III has no 11-14 entry): no Little '
                 'Vespers is printed; Matins appoints the Polyeleos with a magnification. PROVISIONAL, see '
                 'open question Q-0001: the page also prints 8 stichera, a Litiya, and the troparion Twice with '
                 '"Virgin Theotokos, rejoice" Once at the blessing of the Loaves, which is the outline Fekula '
                 'gives for a Vigil (2F), not a Polyeleos (2E). OCA lists Apostle Philip first on 14 November.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
