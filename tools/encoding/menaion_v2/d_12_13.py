# 12-13.pdf — COMMEMORATION OF THE HOLY MARTYRS EUSTRATIUS, AUXENTIUS, EUGENE,
# MARDARIUS & ORESTES; COMMEMORATION OF THE HOLY MARTYR LUCIA (17 pages). Great
# Vespers with three lessons; Polyeleos with a Magnification; two canons of the
# martyrs, interleaved in print, stored whole; Great Doxology. No hymn of St. Lucia
# is printed apart: she is named in the title and in three theotokia. Boundaries
# read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('12-13')
    t, r = s.t, s.r
    s.mark(5, 140, 551)
    # The ODE III heading is printed doubled: "OODDEE IIIIII".
    assert s.raw(242) == 'OODDEE IIIIII', s.raw(242)
    s.mark(209, 242, 293, 320, 347, 391, 425, 460)
    c1 = [243, 294, 321, 348, 392, 426, 461]
    c2 = [255, 307, 333, 362, 409, 445, 477]
    for n in c1:
        assert s.raw(n) == 'Canon I', (n, s.raw(n))
    for n in c2:
        assert s.raw(n) == 'Canon II', (n, s.raw(n))
    s.mark(*c1, *c2)

    assert same(t(130, 133, 'tr1'), t(573, 576, 'tr2')), 'troparion sites diverge'
    s.mark(572)
    troparion = t(130, 133, 'Troparion of the holy martyrs', sl=129,
                  verified_sites=[{'locus': 'p4 end of Vespers', 'tone': 4}, {'locus': 'p16 AT LITURGY', 'tone': 4}])
    assert same(t(272, 275, 'a'), t(578, 581, 'b')), 'Ode III kontakion sites diverge'
    assert same(t(381, 384, 'a'), t(583, 586, 'b')), 'Ode VI kontakion sites diverge'
    kontakion = t(381, 384, 'Kontakion of the holy martyrs (after Ode VI)', sl=379, sm=380)
    ikos = t(385, 390, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['rubric', 'lic_rubric', 'lic', 'lic_glory', 'dogmatikon', 'entrance_rubric', 'readings',
                  'aposticha_rubric', 'aposticha', 'aposticha_glory', 'aposticha_closer',
                  'troparion', 'troparion_closer'],
        'rubric': r(6, 6, 'Blessed is the man'),
        # "6 Stichera of the holy martyrs, 3 in Tone IV:" then "And 3 Stichera, in Tone IV:".
        'lic_rubric': r(7, 7, 'LIC rubric'),
        'lic': s.seq(9, [13, 18, 22], 'LIC', sm=8, label='plain', first={'tone': 4}) + [
            t(25, 28, 'LIC 4', sl=23, sm=24, label='plain'),
            t(29, 32, 'LIC 5', sm=24, label='plain'),
            t(33, 37, 'LIC 6', sm=24, label='plain'),
        ],
        'lic_glory': t(40, 44, 'LIC Glory', sl=39),
        'dogmatikon': t(46, 51, 'LIC Both now, Dogmatic Theotokion', sl=45, type='dogmatic_theotokion'),
        'entrance_rubric': r(52, 52, 'Entrance. Prokeimenon of the day. Three Lessons'),
        'readings': [
            s.reading_id(53, 64, 'Lesson 1', {'book': 'Isaiah', 'chapter': 43, 'verses': '9-14'},
                'No reference printed. Opens "Thus saith the Lord: Let all the nations be gathered together", closes '
                '"the Holy One of Israel": Isaiah 43:9-14, the first lesson of martyrs. Identified by first and last '
                'words; confirm against the page.'),
            s.reading_id(65, 77, 'Lesson 2', {'book': 'Wisdom of Solomon', 'chapter': 3, 'verses': '1-9'},
                'No reference printed. Opens "The souls of the righteous are in the hand of God", closes "and He hath '
                'care for His elect": Wisdom 3:1-9. Identified by first and last words; confirm against the page.'),
            s.reading_id(79, 95, 'Lesson 3', {'book': 'Wisdom of Solomon', 'chapter': 5, 'verses': '5:15-6:3'},
                'No reference printed. Opens "The righteous live for evermore", closes "sovereignty from the Most '
                'High": Wisdom 5:15-6:3. Identified by first and last words; confirm against the page.'),
        ],
        'aposticha_rubric': r(96, 96, 'Aposticha rubric'),
        'aposticha': [
            t(98, 103, 'Aposticha 1', sm=97, label='plain', tone=5),
            t(104, 104, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(105, 110, 'Aposticha 2', sm=97, label='plain'),
            t(111, 112, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(113, 118, 'Aposticha 3', sm=97, label='plain'),
        ],
        'aposticha_glory': t(121, 124, 'Aposticha Glory', sl=120),
        'aposticha_closer': t(126, 128, 'Aposticha Both now, Theotokion', sl=125, type='theotokion'),
        'troparion_closer': t(135, 138, 'Dismissal Theotokion', sl=134, type='theotokion'),
    }

    mr, mt = s.split_inline(161, 162, 'magnification rubric', 'Magnification')
    # p14: the label and the melody of the exapostilarion stand on one line.
    assert s.raw(496) == 'Exapostilarion: Spec. Mel.: “By the Spirit in the sanctuary ...”:', s.raw(496)
    s.mark(496)

    canon1 = {'title': s.raw(210), 'composer': 'John the Monk', 'tone': 4,
              'odes': {
                  1: s.ode(1, (211, 213), [217, 220, 222, 225]),
                  3: s.ode(3, (244, 245), [247, 249, 251, 253]),
                  4: s.ode(4, (295, 297), [299, 301, 303, 306]),
                  5: s.ode(5, (322, 323), [325, 327, 329, 332]),
                  6: s.ode(6, (349, 351), [353, 356, 358, 361]),
                  7: s.ode(7, (393, 395), [398, 401, 404, 407]),
                  8: s.ode(8, (427, 429), [433, 436, 439, 443]),
                  9: s.ode(9, (462, 464), [467, 470, 473, 476]),
              }}
    canon2 = {'title': s.raw(226), 'tone': 6,
              'odes': {
                  1: s.ode(1, (227, 229), [231, 234, 236, 240]),
                  3: s.ode(3, (256, 258), [260, 263, 266, 269]),
                  4: s.ode(4, (308, 309), [311, 313, 316, 319]),
                  5: s.ode(5, (334, 336), [338, 340, 343, 346]),
                  6: s.ode(6, (363, 365), [368, 372, 375, 378]),
                  7: s.ode(7, (410, 412), [415, 418, 421, 424]),
                  8: s.ode(8, (446, 448), [450, 453, 456, 459]),
                  9: s.ode(9, (478, 481), [485, 489, 492, 495]),
              }}
    s.mark(210, 226)
    # The katavasia is named once, after Ode I, and not printed.
    canon2['odes'][1]['katavasia_rubric'] = r(241, 241, 'Katavasia: Christ is born')

    matins = {
        'order': ['sessional_1', 'sessional_2',
                  'megalynarion_rubric', 'megalynarion', 'megalynarion_verse_rubric', 'megalynarion_verse',
                  'megalynarion_closing_rubric', 'sessional_polyeleos', 'anabathmoi_rubric',
                  'prokeimenon', 'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_sticheron',
                  'canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer',
                  'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'great_doxology_rubric'],
        'sessional_1': [
            t(143, 146, 'Sessional 1', sl=141, sm=142, label='plain'),
            t(148, 150, 'Sessional 1 Theotokion', sl=147, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'sessional_2': [
            t(152, 155, 'Sessional 2', sl=151, label='plain'),
            t(157, 160, 'Sessional 2 Theotokion', sl=156, type='theotokion', label=['glory', 'both_now', 'theotokion']),
        ],
        'megalynarion_rubric': mr, 'megalynarion': mt,
        'megalynarion_verse_rubric': r(163, 163, 'Selected Psalm verses rubric'),
        'megalynarion_verse': t(164, 165, 'Selected Psalm verse', pre='A: ', label='refrain'),
        'megalynarion_closing_rubric': r(166, 166, 'after the selected verses'),
        'sessional_polyeleos': [
            t(169, 174, 'Polyeleos sessional', sl=167, sm=168, label='plain'),
            t(177, 182, 'Polyeleos sessional Theotokion', sl=176, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'anabathmoi_rubric': r(183, 183, 'Song of Ascents rubric'),
        'prokeimenon': t(184, 184, 'Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(185, 186, 'Prokeimenon verse', pre='Verse: ', label='refrain'),
        'gospel_rubric': r(187, 187, 'Let every breath'),
        'gospel': s.reading(188, 199, 'Matins Gospel', 'GOSPEL ACCORDING TO MATTHEW,', '§36 (10:16-22)',
                            {'book': 'Matthew', 'chapter': 10, 'verses': '16-22', 'pericope_number': 36}),
        'psalm50_sticheron': t(201, 206, 'After Psalm 50 sticheron', sl=200),
        'canon_rubric': r(207, 208, 'Canon rubric'),
        'canons': [canon1, canon2],
        # A kontakion in Tone II stands after Ode III, before the sessional hymn; the
        # kontakion with the ikos (Tone III) stands after Ode VI. BOTH are printed at
        # Liturgy, headed "ODE III, Kontakion ..." and "ODE VI, Kontakion ...".
        'kontakia_ode3': [
            t(272, 275, 'Kontakion of the holy martyrs (after Ode III)', sl=270, sm=271, label='plain'),
        ],
        'sessional_ode3': [
            t(278, 284, 'Ode III sessional', sl=276, sm=277, label='plain'),
            t(286, 291, 'Ode III sessional Theotokion', sl=285, type='theotokion',
              label=['glory', 'both_now', 'theotokion']),
        ],
        'exapostilarion': t(497, 500, 'Exapostilarion', sourceLabel='Exapostilarion',
                            spec_mel='By the Spirit in the sanctuary ...', label='plain'),
        'exapostilarion_closer': t(502, 505, 'Exapostilarion Theotokion', sl=501, type='theotokion'),
        # "On the Praises, 4 Stichera: The composition of Germanus, in Tone III:" Four
        # are printed; the third and fourth carry their composer inline.
        'praises_rubric': r(506, 506, 'Praises rubric'),
        'praises': [
            t(507, 511, 'Praises 1', label='plain', tone=3, composer='Germanus'),
            t(512, 518, 'Praises 2', label='plain', composer='Germanus'),
            t(520, 527, 'Praises 3', pre='The composition of John the Monk, in Tone IV: ', tone=4,
              composer='John the Monk', label='plain'),
            t(528, 532, 'Praises 4', pre='The composition of Cassia the nun: ', composer='Cassia the nun', label='plain'),
        ],
        'praises_glory': t(534, 545, 'Praises Glory', sl=533, composer='Cassia the nun'),
        'praises_closer': t(547, 548, 'Praises Both now, Theotokion', sl=546, type='theotokion'),
        'great_doxology_rubric': r(549, 549, 'Great Doxology. Troparion. Litanies. First Hour.'),
    }

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparion', 'kontakia',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(552, 553, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 554, 555), ('t', 556, 557), ('t', 558, 559), ('t', 560, 562),
                             ('t', 563, 565), ('t', 566, 568), ('theot', 569, 571)], 'Beatitude'),
        'kontakia': [
            t(578, 581, 'Kontakion after Ode III, at Liturgy', sl=577, label='plain'),
            t(583, 586, 'Kontakion after Ode VI, at Liturgy', sl=582, label='plain'),
        ],
        'prokeimenon': t(588, 589, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(590, 591, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(592, 602, 'Epistle', 'EPISTLE TO THE EPHESIANS,', '§233 (6: 10-17)',
                             {'book': 'Ephesians', 'chapter': 6, 'verses': '10-17', 'pericope_number': 233}),
        'alleluia': t(603, 604, 'Alleluia', pre='Alleluia, in Tone IV: '),
        'alleluia_verse': t(605, 606, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(607, 616, 'Gospel', 'GOSPEL ACCORDING TO LUKE,', '§106 (LK. 21:12-19)',
                            {'book': 'Luke', 'chapter': 21, 'verses': '12-19', 'pericope_number': 106}),
        'communion_verse': t(617, 618, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints. From the title lines.
        'name': 'the holy Martyrs Eustratius, Auxentius, Eugene, Mardarius and Orestes, and the holy Martyr Lucia',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'polyeleos',
        'fekula_section': '2E',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: no Little Vespers; "Blessed is the man", three '
                 'lessons, a Polyeleos with a Magnification and a Gospel, a Great Doxology: Polyeleos, Fekula 2E. ODS '
                 'vol. III has no fixed 12-13 entry (its 11 to 17 December entries are the movable Sunday of the '
                 'Forefathers, Q-0019; in 2026 that Sunday IS 13 December). THE OCA KEEPS ST. HERMAN OF ALASKA ON THIS '
                 'DAY; this Menaion prints him under 12 December (12-12C, Q-0018). The title also names the holy '
                 'Martyr Lucia: NO hymn of hers is printed apart; three theotokia of Canon I name her. Six stichera '
                 'of the martyrs in two sets of three, both Tone IV; the Dogmatic Theotokion; three lessons with NO '
                 'reference printed (citations are identifications); no Litiya and no blessing of the Loaves. Matins: '
                 'no God is the Lord rubric; a sessional hymn (Twice) and Theotokion at each kathisma and after the '
                 'Polyeleos; "Canon of the supplication to the Theotokos (the Paraclysis), with 6 Troparia" appointed '
                 'and NOT printed; two canons of the martyrs "with a total of 8", Canon I by John the Monk in Tone IV, '
                 'Canon II in Tone VI with no composer named; the katavasia "Christ is born" named after Ode I. TWO '
                 'kontakia: Tone II after Ode III, Tone III with the ikos after Ode VI; both are printed at Liturgy, '
                 'headed "ODE III" and "ODE VI". Four stichera on the Praises by Germanus, John the Monk and Cassia '
                 'the nun. The ODE III heading is printed doubled. At Liturgy the rubric appoints 8 Beatitude '
                 'troparia; three (the first Twice), three and a Theotokion are printed.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
