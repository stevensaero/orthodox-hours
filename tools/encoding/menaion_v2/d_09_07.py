# 09-07.pdf — FOREFEAST OF THE NATIVITY OF THE MOST HOLY THEOTOKOS;
# COMMEMORATION OF THE HOLY MARTYR SOZON (15 pages). OVERLAP DATE for the V1/V2
# comparison, shape "forefeast with a saint". One printed service: ONE entry,
# items tagged `saint`. Two canons, interleaved, stored whole.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

FF, SO = 'forefeast', 'Sozon'

def build():
    s = Src('09-07')
    t, r = s.t, s.r
    s.mark(5, 78, 447)
    s.mark(106, 143, 195, 227, 257, 302, 337, 377)
    ff_labels = [144, 196, 228, 258, 303, 338, 378]
    so_labels = [156, 211, 246, 274, 321, 359, 404]
    for n in ff_labels:
        assert s.raw(n) == 'Canon of the forefeast', (n, s.raw(n))
    for n in so_labels:
        assert s.raw(n) == 'Canon of the holy martyr', (n, s.raw(n))
    s.mark(*ff_labels, *so_labels)

    def strip(n):
        n.pop('repeat', None)
        return n
    assert same(t(72, 76, 'a'), strip(t(80, 84, 'b')), t(476, 480, 'c')), 'forefeast troparion sites diverge'
    assert same(t(67, 70, 'a'), t(86, 89, 'b'), t(471, 474, 'c')), 'martyr troparion sites diverge'
    assert same(t(170, 173, 'a'), t(482, 485, 'b')), 'martyr kontakion sites diverge'
    assert same(t(292, 295, 'a'), t(488, 491, 'b')), 'forefeast kontakion sites diverge'

    # Three Spec. Mel. lines are printed irregularly; kept out of the regex.
    s.mark(7, 92, 169)
    assert s.raw(7) == 'Spec. Mel. “Joy of the ranks of heaven ...”:', s.raw(7)
    assert s.raw(92) == 'Spec. Mel.: ‘When the stone had been sealed ...”:', s.raw(92)
    assert s.raw(169) == 'Spec. Mel.: “The steadfast ...”', s.raw(169)

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_closer', 'lic_closer_alternate_rubric',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer', 'troparia'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [10, 14, 17], 'LIC', first={'tone': 1}, spec_mel='Joy of the ranks of heaven ...', saint=FF) + [
            t(20, 24, 'LIC 4', sl=18, sm=19, label='plain', saint=SO),
            t(25, 28, 'LIC 5', sm=19, label='plain', saint=SO),
            t(29, 33, 'LIC 6', sm=19, label='plain', saint=SO),
        ],
        'lic_closer': t(35, 39, 'LIC Glory/Both now, of the forefeast', sl=34, type='of_the_feast', saint=FF),
        'lic_closer_alternate_rubric': r(41, 42, 'If it be Friday evening'),
        'aposticha_rubric': r(43, 43, 'Aposticha rubric'),
        'aposticha': [
            t(45, 49, 'Aposticha 1', sm=44, label='plain', tone=8, saint=FF),
            t(50, 50, 'Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(51, 54, 'Aposticha 2', sm=44, label='plain', saint=FF),
            t(55, 55, 'Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(56, 60, 'Aposticha 3', sm=44, label='plain', saint=FF),
        ],
        'aposticha_closer': t(62, 65, 'Aposticha Glory/Both now', sl=61, type='of_the_feast',
                              composer='Germanus', saint=FF),
        'troparia': [
            t(67, 70, 'Troparion of the holy martyr', sl=66, label='plain', saint=SO),
            t(72, 76, 'Troparion of the forefeast', sl=71, label=['glory', 'both_now', 'of_the_feast'], saint=FF),
        ],
    }

    matins = {
        'order': ['troparia', 'troparia_closing_rubric', 'sessional_1', 'sessional_2',
                  'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer',
                  'aposticha_rubric', 'aposticha', 'aposticha_closer'],
        'troparia': [
            t(80, 84, 'Troparion of the forefeast at God is the Lord', sl=79, label='of_the_feast', saint=FF),
            t(86, 89, 'Troparion of the holy martyr at God is the Lord', sl=85, label='glory', saint=SO),
        ],
        'troparia_closing_rubric': r(90, 90, 'Both now, that of the forefeast (Once)'),
        'sessional_1': [
            t(93, 97, 'Sessional 1', sl=91, spec_mel='When the stone had been sealed ...', label='plain', saint=FF),
            t(98, 98, 'Sessional 1 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'sessional_2': [
            t(101, 104, 'Sessional 2', sl=99, sm=100, label='plain', saint=FF),
            t(105, 105, 'Sessional 2 repeat device', device=False, label=['glory', 'both_now']),
        ],
        'canons': [
            {'title': s.raw(107, 108), 'composer': 'Joseph', 'tone': 4,
             'acrostic': 'I hymn the nativity of the divine Virgin',
             'odes': {
                 1: s.ode(1, (109, 111), [114, 118, 121, 125]),
                 3: s.ode(3, (145, 147), [149, 152, 154]),
                 4: s.ode(4, (197, 199), [202, 204, 207, 210]),
                 5: s.ode(5, (229, 231), [236, 239, 242, 245]),
                 6: s.ode(6, (259, 261), [264, 266, 269, 273]),
                 7: s.ode(7, (304, 307), [310, 314, 317, 320]),
                 8: s.ode(8, (339, 342), [345, 348, 352, 355, 358]),
                 9: s.ode(9, (379, 382), [386, 391, 395, 399, 403]),
             }},
            {'title': s.raw(126), 'composer': 'Theophanes', 'tone': 4,
             'odes': {
                 1: s.ode(1, (127, 129), [132, 135, 138, 142]),
                 3: s.ode(3, (157, 158), [160, 162, 164, 167]),
                 4: s.ode(4, (212, 214), [217, 220, 223, 226]),
                 5: s.ode(5, (247, 248), [250, 252, 254, 256]),
                 6: s.ode(6, (275, 277), [280, 283, 286, 289]),
                 7: s.ode(7, (322, 324), [327, 330, 333, 336]),
                 8: s.ode(8, (360, 362), [365, 369, 372, 376]),
                 9: s.ode(9, (405, 407), [410, 413, 416, 419]),
             }},
        ],
        'kontakia_ode3': [
            t(170, 173, 'Kontakion of the holy martyr (after Ode III)', sl=168, spec_mel='The steadfast ...',
              label='plain', saint=SO),
            t(174, 180, 'Ikos of the holy martyr', pre='Ikos: ', label='plain', saint=SO),
        ],
        'sessional_ode3': [
            t(183, 186, 'Ode III sessional (martyr)', sl=181, sm=182, label='plain', saint=SO),
            t(189, 193, 'Ode III sessional (forefeast)', sl=187, sm=188,
              label=['glory', 'both_now', 'of_the_feast'], saint=FF),
        ],
        'kontakia_ode6': [
            t(292, 295, 'Kontakion of the forefeast (after Ode VI)', sl=290, sm=291, label='of_the_feast', saint=FF),
            t(296, 301, 'Ikos of the forefeast', pre='Ikos: ', label='of_the_feast', saint=FF),
        ],
        'exapostilarion': t(422, 424, 'Exapostilarion of the holy martyr', sl=420, sm=421, label='plain', saint=SO),
        'exapostilarion_closer': t(427, 429, 'Exapostilarion of the forefeast', sl=426, type='of_the_feast', saint=FF),
        'aposticha_rubric': r(430, 430, 'Matins Aposticha rubric'),
        'aposticha': [
            t(432, 433, 'Matins Aposticha 1', sm=431, label='plain', tone=2, saint=FF),
            t(434, 434, 'Matins Aposticha verse 1', pre='Verse: ', label='refrain'),
            t(435, 436, 'Matins Aposticha 2', sm=431, label='plain', saint=FF),
            t(437, 437, 'Matins Aposticha verse 2', pre='Verse: ', label='refrain'),
            t(438, 439, 'Matins Aposticha 3', sm=431, label='plain', saint=FF),
        ],
        'aposticha_closer': t(441, 445, 'Matins Aposticha Glory/Both now', sl=440, type='of_the_feast', saint=FF),
    }
    s.mark(107, 108, 126)

    liturgy = {
        'order': ['beatitudes_rubric', 'beatitudes', 'troparia', 'kontakia',
                  'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel',
                  'communion_verse'],
        'beatitudes_rubric': r(448, 449, 'Beatitudes rubric'),
        'beatitudes': s.mix([('t', 450, 452), ('t', 453, 455), ('t', 456, 457), ('t', 458, 460), ('t', 461, 463),
                             ('t', 464, 466), ('theot', 467, 469)], 'Beatitude'),
        'troparia': [
            t(471, 474, 'Troparion of the holy martyr at Liturgy', sl=470, label='plain', saint=SO),
            t(476, 480, 'Troparion of the forefeast at Liturgy', sl=475, label='of_the_feast', saint=FF),
        ],
        'kontakia': [
            t(482, 485, 'Kontakion of the holy martyr at Liturgy', sl=481, label='plain', saint=SO),
            t(488, 491, 'Kontakion of the forefeast at Liturgy', sl=487, label='of_the_feast', saint=FF),
        ],
        'prokeimenon': t(492, 493, 'Liturgy Prokeimenon', pre='Prokeimenon, in Tone VII: '),
        'prokeimenon_verse': t(494, 494, 'Liturgy Prokeimenon verse', pre='Verse: ', label='refrain'),
        'epistle': s.reading(495, 505, 'Epistle', 'EPISTLE TO THE EPHESIANS,', '§ 233 (Eph. 6: 10-17)',
                             {'book': 'Ephesians', 'chapter': 6, 'verses': '10-17', 'pericope_number': 233}),
        'alleluia': t(506, 507, 'Alleluia', pre='Alleluia, in Tone IV: '),
        'alleluia_verse': t(508, 509, 'Alleluia verse', pre='Verse: ', label='refrain'),
        'gospel': s.reading(510, 529, 'Gospel', 'GOSPEL ACCORDING TO JOHN,', '§ 52 (JN. 15: 17-16: 2)',
                            {'book': 'John', 'chapter': 15, 'verses': '15:17-16:2', 'pericope_number': 52}),
        'communion_verse': t(530, 531, 'Communion Verse', pre='Communion Verse: '),
    }

    entry = {
        'kind': 'forefeast',
        'feast_ref': 'nativity_theotokos',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'the holy Martyr Sozon',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'six_stichera',
        'fekula_section': '2G1',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). ODS 3rd ed. vol. III has '
                 'no entry for 7 September (as V1 recorded). ONE printed service for the Forefeast of the Nativity of '
                 'the Theotokos and the Martyr Sozon: one entry, items tagged `saint` ("forefeast" / "Sozon"). 3 '
                 'stichera of the forefeast and 3 of the martyr; no Polyeleos, no Great Doxology (Matins ends with '
                 'Aposticha). RANK FOLLOWS V1 (six_stichera, Fekula 2G1) so the comparison starts level; by the 1.1 '
                 'waterfall as applied to 11-20 and 11-22 the same shape was stored `simple` under 2G1. 2G1 covers '
                 'both, so the section agrees; the rank word is a difference between V1 and the November entries '
                 'SETTLED 14 Nov 2026 (Bill): six_stichera, and the November entries were changed to match. Two canons (forefeast, by Joseph; martyr, by Theophanes), stored '
                 'whole. The forefeast canon prints no theotokion label in its odes. Two troparia and two kontakia at '
                 'every print site in positional lists. The Liturgy propers printed are the martyr\'s only.'),
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
