# 12-09.pdf — COMMEMORATION OF THE CONCEPTION OF THE MOST HOLY THEOTOKOS BY SAINT
# ANNA (13 pages). A feast of the Theotokos with the Great Doxology: 6 stichera
# (three printed, each Twice), aposticha of the feast, two canons interleaved in
# print and stored whole, Praises stichera. ODS vol. III has this date (ods3-1209-sun,
# ods3-1209-wkd). Boundaries read off the extracted page, 16 Nov 2026.
from daily_lib import Src, same

FE = 'feast'

def build():
    s = Src('12-09')
    t, r = s.t, s.r
    s.mark(5, 70, 406)
    s.mark(92, 123, 166, 202, 235, 277, 309, 345)
    c1_labels = [124, 167, 203, 236, 278, 310, 346]
    c2_labels = [138, 186, 218, 249, 295, 326, 362]
    for n in c1_labels:
        assert s.raw(n) == 'Canon I', (n, s.raw(n))
    for n in c2_labels:
        assert s.raw(n) == 'Canon II', (n, s.raw(n))
    s.mark(*c1_labels, *c2_labels)

    # R-1: the troparion is printed three times. Vespers (p2) and God is the Lord (p3)
    # agree; the Liturgy site (p12) moves one phrase mark ("who, * beyond all
    # expectation, will" for "who, beyond all expectation, * will") and is stored at
    # its own position.
    a, b = t(63, 67, 'a'), t(72, 76, 'b')
    b.pop('repeat', None)
    assert same(a, b), 'troparion sites diverge'
    troparion = t(63, 67, 'Troparion of the conception', sl=62, verified_sites=[
        {'locus': 'p2 end of Vespers', 'tone': 4}, {'locus': 'p3 God is the Lord', 'tone': 4, 'repeat': 3}])
    liturgy_troparion = t(430, 434, 'Troparion of the conception at Liturgy', sl=429)
    assert not same(troparion, liturgy_troparion), 'p12 troparion now matches p2: fold it back into the canonical field'
    assert same(t(269, 270, 'k1'), t(436, 437, 'k2')), 'kontakion sites diverge'
    s.mark(435)
    kontakion = t(269, 270, 'Kontakion of the conception', sl=267, sm=268,
                  verified_sites=[{'locus': 'p8 after Ode VI', 'tone': 4}, {'locus': 'p12 AT LITURGY', 'tone': 4}])
    ikos = t(271, 276, 'Ikos', pre='Ikos: ')

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'aposticha_rubric', 'aposticha', 'aposticha_closer',
                  'troparion', 'troparion_closer_rubric'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [13, 20, 26], 'LIC', sm=7, first={'tone': 4}),
        'lic_closer': t(28, 33, 'LIC Glory/Both now', sl=27, composer='Germanus', type='of_the_feast'),
        'aposticha_rubric': r(34, 34, 'Aposticha rubric'),
        'aposticha': [
            t(36, 41, 'Aposticha 1', sm=35, label='plain', tone=5),
            t(43, 43, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(44, 49, 'Aposticha 2', sm=35, label='plain'),
            t(50, 50, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(51, 57, 'Aposticha 3', sm=35, label='plain'),
        ],
        'aposticha_closer': t(59, 61, 'Aposticha Glory/Both now', sl=58, type='of_the_feast'),
        'troparion_closer_rubric': r(68, 68, 'The troparion is chanted without a Theotokion'),
    }

    matins = {
        'order': ['god_is_lord_rubric', 'troparion', 'sessional_1', 'sessional_2',
                  'canon_rubric', 'canons', 'sessional_ode3', 'kontakion', 'ikos',
                  'exapostilarion', 'exapostilarion_closer_rubric',
                  'praises_rubric', 'praises', 'praises_closer', 'great_doxology_rubric'],
        'god_is_lord_rubric': r(71, 71, 'God is the Lord rubric'),
        # "the foregoing is repeated" is a REFERENCE DEVICE (spec 2.8): stored as the
        # page prints it, never expanded into a second copy of the hymn.
        'sessional_1': [
            t(79, 82, 'Sessional 1', sl=77, sm=78, label='plain'),
            t(83, 83, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        # "in the same melody": the melody, and so the tone, of the first (Tone I).
        'sessional_2': [
            t(85, 88, 'Sessional 2', sl=84, label='plain', tone=1),
            t(89, 89, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canon_rubric': r(90, 91, 'Canon rubric'),
        'canons': [
            {'title': s.raw(93), 'composer': 'Andrew', 'tone': 1,
             'odes': {
                 1: s.ode(1, (94, 96), [99, 102, 104, 107]),
                 3: s.ode(3, (125, 127), [129, 132, 135, 137]),
                 4: s.ode(4, (168, 171), [174, 177, 180, 184]),
                 5: s.ode(5, (204, 206), [209, 212, 215, 217]),
                 6: s.ode(6, (237, 239), [242, 244, 246, 248]),
                 7: s.ode(7, (279, 282), [285, 288, 291, 294]),
                 8: s.ode(8, (311, 313), [316, 319, 322, 325]),
                 9: s.ode(9, (347, 349), [352, 355, 358, 361]),
             }},
            # Canon II is set on the irmoi of the Nativity canon; after Ode I alone the
            # page prints "Katavasia: Christ is born ...," (an incipit).
            {'title': s.raw(109), 'tone': 1,
             'odes': {
                 1: s.ode(1, (110, 112), [115, 118, 121], kat=(122, 122)),
                 3: s.ode(3, (139, 142), [145, 149, 152]),
                 4: s.ode(4, (187, 191), [195, 198, 201]),
                 5: s.ode(5, (219, 222), [226, 230, 234]),
                 6: s.ode(6, (250, 253), [257, 261, 266]),
                 7: s.ode(7, (296, 298), [301, 305, 308]),
                 8: s.ode(8, (327, 331), [335, 339, 344]),
                 9: s.ode(9, (363, 365), [368, 371, 374]),
             }},
        ],
        'sessional_ode3': [
            t(155, 158, 'Ode III sessional', sl=153, sm=154, label='plain'),
            t(161, 165, 'Ode III sessional, Glory/Both now', sl=159, sm=160, label=['glory', 'both_now']),
        ],
        'exapostilarion': t(377, 379, 'Exapostilarion', sl=375, sm=376, label='plain'),
        'exapostilarion_closer_rubric': r(381, 381, 'Glory, Both now: the foregoing is repeated'),
        'praises_rubric': r(382, 382, 'Praises rubric'),
        'praises': s.seq(384, [386, 389, 393], 'Praises', sm=383, first={'tone': 1}),
        'praises_closer': t(395, 403, 'Praises Glory/Both now', sl=394, composer='Malax', type='of_the_feast'),
        'great_doxology_rubric': r(404, 404, 'Great Doxology. The Troparion. Litanies and dismissal.'),
    }
    s.mark(93, 109)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'liturgy_troparion', 'kontakion',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verses'],
        'beatitudes_rubric': r(407, 408, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 409, 410), ('t', 411, 413), ('t', 414, 416),
                             ('t', 417, 420), ('t', 421, 424), ('t', 425, 428)], 'Beatitude'),
        'liturgy_troparion': liturgy_troparion,
        'prokeimenon': t(438, 438, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone IV: '),
        'prokeimenon_verse': t(439, 439, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(441, 455, 'Epistle', 'EPISTLE TO THE GALATIANS,', '§ 210 (4: 22-31)',
                             {'book': 'Galatians', 'chapter': 4, 'verses': '22-31', 'pericope_number': 210}),
        'alleluia': t(456, 457, 'Alleluia', pre='Alleluia, in Tone I: '),
        'alleluia_verse': t(458, 458, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(459, 468, 'Gospel', 'GOSPEL ACCORDING TO ST. LUKE,', '§ 36 (8: 16-21)',
                            {'book': 'Luke', 'chapter': 8, 'verses': '16-21', 'pericope_number': 36}),
        # Two are printed: "Communion Verse: ..." and "Another: ...".
        'communion_verses': [
            t(469, 470, 'Communion Verse', pre='Communion Verse: ', label='plain'),
            t(471, 472, 'Another Communion Verse', pre='Another: ', label='plain'),
        ],
    }

    entry = {
        'kind': 'feast',
        # Hand-entered: how the dismissal names the day's saints. None on a feast of the
        # Theotokos, where no saint is added.
        'name': None,
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'doxology',
        'fekula_section': '2C',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank: `doxology`. ODS vol. III has this date (ods3-1209-sun, ods3-1209-wkd; rank "doxology" by its '
                 'explicit rubric), and the page agrees with the 1.1 waterfall: "Great Doxology" is printed after the '
                 'Praises, with no Polyeleos, no lessons, no Litiya. Six stichera at Lord I have cried (three printed, '
                 'each marked Twice); the aposticha are the feast\'s own, with verses; "This Troparion is chanted '
                 'without a Theotokion"; the troparion is marked Thrice at God is the Lord. The sessional hymns and '
                 'the exapostilarion are each followed by "Glory ..., Both now ..., the foregoing is repeated." Two '
                 'canons "of the righteous Anna": Canon I by Andrew, Canon II (acrostic the alphabet) on the irmoi of '
                 'the Nativity canon, with "Katavasia: Christ is born" printed after Ode I only. The troparion\'s '
                 'Liturgy printing moves one phrase mark and is stored at its own position. At Liturgy six Beatitude '
                 'troparia printed (two marked Twice, for the eight of the rubric), and two communion verses.'),
        'troparion': troparion, 'kontakion': kontakion, 'ikos': ikos,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
