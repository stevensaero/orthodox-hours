# 12-10A.pdf — COMMEMORATION OF THE HOLY HIERARCH JOASAPH (of Belgorod) (19 pages).
# Second file of 10 December (c1). Little Vespers; Great Vespers with three lessons,
# a Litiya and the blessing of the Loaves; Polyeleos with a Magnification; one canon
# printed (the Paraklisis is appointed, not printed); Great Doxology. Two troparia
# ("Or this Troparion"). Boundaries read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-10A')
    t, r = s.t, s.r
    s.mark(4, 80, 280, 605)
    s.mark(357, 377, 410, 430, 452, 486, 509, 531)

    sites = [t(58, 63, 'a'), t(266, 271, 'b'), t(282, 287, 'c'), t(634, 639, 'd')]
    for x in sites:
        x.pop('repeat', None)
    assert same(*sites), 'troparion sites diverge'
    s.mark(633)
    troparion = t(58, 63, 'Troparion of the holy hierarch', sl=57, verified_sites=[
        {'locus': 'p2 end of Little Vespers', 'tone': 3},
        {'locus': 'p7 blessing of the Loaves', 'tone': 3, 'repeat': 2},
        {'locus': 'p8 God is the Lord', 'tone': 3, 'repeat': 2},
        {'locus': 'p17 AT LITURGY', 'tone': 3}])
    assert same(t(70, 74, 'a1'), t(274, 278, 'a2'), t(642, 646, 'a3')), 'alternate troparion sites diverge'
    assert same(t(475, 479, 'k1'), t(648, 652, 'k2')), 'kontakion sites diverge'
    s.mark(647)
    kontakion = t(475, 479, 'Kontakion of the holy hierarch', sl=474,
                  verified_sites=[{'locus': 'p13 after Ode VI', 'tone': 8}, {'locus': 'p18 AT LITURGY', 'tone': 8}])
    ikos = t(480, 485, 'Ikos', pre='Ikos: ')

    ALT = 'Or this Troparion, in Tone II'
    little_vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'aposticha_rubric', 'aposticha',
                  'aposticha_glory', 'aposticha_closer', 'troparion', 'troparion_closer',
                  'troparion_alternate_rubric', 'troparion_alternate', 'troparion_alternate_closer'],
        # "On Lord, I have cried, 4 Stichera of the holy hierarch, in Tone I:" is the rubric
        # and the tone of the stichera.
        'lic_rubric': r(5, 5, 'Little Vespers LIC rubric'),
        'lic': s.seq(6, [8, 12, 16, 20], 'Little Vespers LIC', first={'tone': 1}),
        'lic_glory': t(22, 26, 'Little Vespers LIC Glory', sl=21),
        'lic_closer': t(28, 30, 'Little Vespers LIC Both now, Theotokion', sl=27, type='theotokion'),
        'aposticha_rubric': r(31, 31, 'Little Vespers Aposticha rubric'),
        'aposticha': [
            t(33, 35, 'Little Vespers Aposticha 1', sm=32, label='plain', tone=2),
            t(36, 37, 'Little Vespers Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(38, 40, 'Little Vespers Aposticha 2', sm=32, label='plain'),
            t(42, 43, 'Little Vespers Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(44, 46, 'Little Vespers Aposticha 3', sm=32, label='plain'),
        ],
        'aposticha_glory': t(48, 52, 'Little Vespers Aposticha Glory', sl=47),
        # Printed "Now and ever ..., Theotokion:" with no tone; the Glory before it is Tone VI.
        'aposticha_closer': t(54, 56, 'Little Vespers Aposticha Both now, Theotokion', sl=53, type='theotokion'),
        'troparion_closer': t(65, 68, 'Little Vespers dismissal Theotokion', sl=64, type='theotokion'),
        'troparion_alternate_rubric': r(69, 69, 'Or this Troparion rubric'),
        'troparion_alternate': t(70, 74, 'Or this Troparion', sourceLabel=ALT, tone=2),
        'troparion_alternate_closer': t(76, 78, 'Theotokion after the alternate troparion', sl=75, type='theotokion'),
    }

    great_vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'lic_closer', 'entrance_rubric', 'readings',
                  'litiya_rubric', 'litiya', 'litiya_glory', 'litiya_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer',
                  'troparion_rubric', 'troparion', 'virgin_theotokos_rubric',
                  'troparion_alternate_rubric', 'troparion_alternate'],
        'rubric': r(81, 81, 'Great Vespers rubric'),
        # "8 Stichera of the holy hierarch; 4 in Tone VIII:" (three printed, the first Twice),
        # "And 4 Stichera, in Tone IV:" (three printed, the first Twice).
        'lic_rubric': r(82, 82, 'LIC rubric'),
        'lic': s.seq(83, [87, 90, 95], 'LIC', first={'tone': 8}) + [
            t(97, 101, 'LIC 4', sl=96, label='plain'),
            t(102, 105, 'LIC 5', label='plain'),
            t(106, 109, 'LIC 6', label='plain'),
        ],
        'lic_glory': t(111, 115, 'LIC Glory', sl=110),
        'lic_closer': t(118, 125, 'LIC Both now, of the forefeast', sl=117, type='of_the_feast', saint='forefeast'),
        'entrance_rubric': r(126, 126, 'Entrance'),
        'readings': [
            s.reading_id(127, 148, 'Lesson 1', {'book': 'Proverbs', 'chapter': 10, 'verses': '10:7, 3:13-16, 8:6'},
                'No reference printed. The body opens "The memory of the righteous man calleth forth praises" '
                '(Proverbs 10:7) and moves to "Happy is the man that findeth wisdom" (3:13-16), then the Wisdom-speech '
                'of chapter 8: the composite hierarch lesson, as 11-14A and 12-06 Lesson 1, in another translation. '
                'The body runs on past 8:6. Identified by correspondence; confirm the span against the page.'),
            s.reading_id(149, 181, 'Lesson 2', {'book': 'Proverbs', 'chapter': 10, 'verses': '10:31-32'},
                'Headed "READING FROM THE WISDOM OF SOLOMON." No reference printed. Opens "The mouth of the righteous '
                'droppeth wisdom" (Proverbs 10:31) and, unlike the 11-14A and 12-06 printing, runs on into the Wisdom '
                'of Solomon ("O God of my fathers ... Give me wisdom"), closing "their devices are but uncertain" '
                '(Wisdom 9:14): the long composite form of the hierarch lesson. The citation names its opening verses only; '
                'the span is NOT settled. Confirm against the page.'),
            s.reading_id(182, 217, 'Lesson 3', {'book': 'Wisdom of Solomon', 'chapter': 4, 'verses': '4:1, 6:11-12, 17-21'},
                'Headed "READING FROM THE WISDOM OF SOLOMON." No reference printed. Opens "When the righteous is '
                'praised, the people will rejoice", as 11-14A Lesson 3; composite, running through the "let us '
                'condemn him" material of Wisdom 2 to "opposest the prideful with thine own arm". Identified by '
                'correspondence only; the span is NOT settled. Confirm against the page.'),
        ],
        # "At the Litiya, the Sticheron of the temple, and this Sticheron, in Tone I:"
        'litiya_rubric': r(218, 218, 'Litiya rubric'),
        'litiya': [t(219, 224, 'Litiya 1', label='plain', tone=1)],
        'litiya_glory': t(226, 231, 'Litiya Glory', sl=225),
        'litiya_closer': t(233, 237, 'Litiya Both now, Theotokion', sl=232, type='theotokion'),
        # "On the Aposticha, these Stichera, in Tone VII:"
        'aposticha_rubric': r(239, 239, 'Aposticha rubric'),
        'aposticha': [
            t(240, 243, 'Aposticha 1', label='plain', tone=7),
            t(244, 245, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(246, 250, 'Aposticha 2', label='plain'),
            t(251, 252, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(253, 258, 'Aposticha 3', label='plain'),
        ],
        # No Glory of the saint is printed: one hymn at "Glory ..., Both now ..., Theotokion".
        'aposticha_closer': t(260, 264, 'Aposticha Glory/Both now, Theotokion', sl=259, type='theotokion'),
        'troparion_rubric': r(265, 265, 'Blessing of the Loaves rubric'),
        'virgin_theotokos_rubric': r(272, 272, 'Virgin Theotokos rejoice rubric'),
        'troparion_alternate_rubric': r(273, 273, 'Or this Troparion rubric'),
        'troparion_alternate': t(274, 278, 'Or this Troparion', sourceLabel=ALT, tone=2),
    }

    mr, mt = s.split_inline(314, 316, 'magnification rubric', 'Magnification')
    # p9: the label of the sticheron after the Gospel ends with a hyphen where a colon
    # is meant: "in Tone VI-". The tone is read from it by hand.
    assert s.raw(348) == 'After the Gospel, this Sticheron, in Tone VI-', s.raw(348)
    s.mark(348)
    p50 = t(349, 352, 'After the Gospel sticheron', sourceLabel='After the Gospel, this Sticheron, in Tone VI-', tone=6)
    p50['provenance_note'] = 'The label is printed "in Tone VI-", a hyphen for the colon (p9).'

    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'troparion_closer', 'sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'god_is_lord_rubric': r(281, 281, 'God is the Lord rubric'),
        'troparion_closer': t(289, 292, 'God is the Lord Theotokion', sl=288, type='theotokion'),
        'sessional_1': [
            t(294, 297, 'Sessional 1', sl=293, label='plain'),
            t(299, 300, 'Sessional 1 Theotokion', sl=298, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(302, 305, 'Sessional 2', sl=301, label='plain'),
            t(307, 313, 'Sessional 2 Theotokion', sl=306, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(318, 318, 'Selected Psalm verse rubric'),
        'megalynarion_verse': t(319, 319, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(320, 320, 'after the selected verses'),
        'sessional_polyeleos': [
            t(322, 325, 'Polyeleos sessional', sl=321, label='plain'),
            t(327, 330, 'Polyeleos sessional Theotokion', sl=326, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(331, 331, 'Song of Ascents rubric'),
        'prokeimenon': t(332, 333, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(334, 334, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(335, 335, 'Let every breath'),
        'gospel': s.reading(336, 347, 'Matins Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '(10:9-16).',
                            {'book': 'John', 'chapter': 10, 'verses': '9-16'}),
        'psalm50_sticheron': p50,
        'canon_rubric': r(353, 355, 'Canon rubric'),
        'canons': [{
            'title': s.raw(353, 355),
            'acrostic': 'O holy hierarch Joasaph, pray thou for the Tsar and the people.',
            'tone': 4,
            'odes': {
                1: s.ode(1, (358, 361), [364, 367, 370, 373, 375]),
                3: s.ode(3, (378, 381), [384, 387, 390, 393, 397]),
                4: s.ode(4, (411, 413), [416, 420, 423, 426, 429]),
                5: s.ode(5, (431, 433), [437, 441, 444, 448, 451]),
                6: s.ode(6, (453, 455), [459, 462, 466, 470, 473]),
                7: s.ode(7, (487, 489), [493, 497, 501, 504, 507]),
                8: s.ode(8, (510, 512), [515, 519, 523, 527, 530]),
                9: s.ode(9, (532, 534), [537, 540, 543, 546, 550, 553]),
            },
        }],
        'sessional_ode3': [
            t(399, 404, 'Ode III sessional', sl=398, label='plain'),
            t(406, 409, 'Ode III sessional Theotokion', sl=405, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'exapostilarion': t(556, 559, 'Exapostilarion', sl=554, sm=555, label='plain'),
        'exapostilarion_closer': t(561, 563, 'Exapostilarion Theotokion', sl=560, type='theotokion'),
        # "On the Praises, 4 Stichera, in Tone IV:" (three printed, the first Twice).
        'praises_rubric': r(564, 564, 'Praises rubric'),
        'praises': s.seq(566, [569, 574, 579], 'Praises', sm=565, first={'tone': 4}),
        'praises_glory': t(581, 590, 'Praises Glory', sl=580),
        'praises_closer': t(592, 602, 'Praises Both now, Theotokion', sl=591, type='theotokion'),
        'great_doxology_rubric': r(603, 603, 'Great Doxology and Troparion. Litanies. Dismissal. First Hour.'),
    }
    # The katavasia is named once, after Ode I, and not printed.
    matins['canons'][0]['odes'][1]['katavasia_rubric'] = r(376, 376, 'Katavasia: Christ is born')
    # The Tone III theotokion is printed twice; the two printings differ in ONE pointing
    # mark (p2 closes the last phrase "**", p8 "*"). Each is stored as printed.
    assert little_vespers['troparion_closer']['text'].replace('corruption, ** in', 'corruption, * in') == \
        matins['troparion_closer']['text'], 'the two printings of the Tone III theotokion diverge in more than pointing'

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'troparion_alternate_rubric', 'troparion_alternate',
                  'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(606, 607, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 608, 610), ('t', 611, 613), ('t', 614, 616), ('t', 617, 619),
                             ('t', 620, 623), ('t', 624, 626), ('t', 627, 630), ('theot', 631, 632)], 'Beatitude'),
        'troparion_alternate_rubric': r(641, 641, 'Or this Troparion rubric (Liturgy)'),
        'troparion_alternate': t(642, 646, 'Or this Troparion (Liturgy)', sourceLabel=ALT, tone=2),
        'prokeimenon': t(653, 654, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone I: '),
        'prokeimenon_verse': t(655, 655, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(656, 665, 'Epistle', 'THE EPISTLE OF ST. PAUL TO THE HEBREWS', '(7:26-8:2)',
                             {'book': 'Hebrews', 'chapter': 7, 'verses': '7:26-8:2'}),
        'alleluia': t(666, 667, 'Alleluia', pre='Alleluia, in Tone II: '),
        'alleluia_verse': t(668, 668, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(669, 682, 'Gospel', 'THE GOSPEL ACCORDING TO ST. JOHN', '(10:9-16)',
                            {'book': 'John', 'chapter': 10, 'verses': '9-16'}),
        'communion_verse': t(683, 684, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saint. The title line, with the
        # OCA calendar's "Bishop of Belgorod".
        'name': 'our father among the saints Joasaph, Bishop of Belgorod',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'vigil',
        'fekula_section': '2F',
        'oca_primary': False,
        'source_file': s.file,
        'note': ('Second file of 10 December, a separate service (Bill, 15 Nov 2026, on the lettered files). Rank by '
                 'the encoding_rule_v2.md 1.1 waterfall, step 2: the Menaion prints a LITTLE VESPERS for the saint, so '
                 'Vigil, Fekula 2F. ODS vol. III has no 12-10 entry. Which of the two services of the day a parish '
                 'keeps is Q-0002. Great Vespers with "Blessed is the man", 8 stichera in two sets of four (three '
                 'printed in each, the first marked Twice), three lessons with NO reference printed (citations are '
                 'identifications), a Litiya ("the Sticheron of the temple, and this Sticheron"), the blessing of the '
                 'Loaves. The Both now at Lord I have cried is labelled "of the forefeast" (10 December, as at 6 '
                 'December), and the katavasia "Christ is born" is named after Ode I and not printed. TWO troparia: '
                 'Tone III and "Or this Troparion, in Tone II", the second printed at Little Vespers (with its own '
                 'Theotokion), at the blessing of the Loaves and at Liturgy. Matins: a sessional hymn and Theotokion '
                 'at each kathisma and after the Polyeleos; a Magnification and Selected Psalm verse; a Gospel; "Canon '
                 'of supplication to the Theotokos (the Paraklisis), with 6 Troparia" is appointed and NOT printed; the '
                 'canon of the hierarch, with 8, is printed, its acrostic naming "the Tsar and the people"; Great '
                 'Doxology. The label of the sticheron after the Gospel is printed "in Tone VI-". At Liturgy the '
                 'rubric appoints 8 Beatitude troparia, 4 from Ode III and 4 from Ode VI; four, three and the '
                 'Theotokion of Ode VI are printed.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'little_vespers': little_vespers, 'great_vespers': great_vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'little_vespers', 'great_vespers', 'matins', 'liturgy']
