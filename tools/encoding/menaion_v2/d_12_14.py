# 12-14.pdf — COMMEMORATION OF THE HOLY MARTYRS THYRSUS, LUCIUS, PHILEMON & THOSE
# WITH THEM (6 pages). A simple service. NO troparion is printed, no aposticha
# rubric, no ikos, no exapostilarion, and nothing for the Liturgy. Boundaries read
# off the extracted page, 16 Nov 2026.
from daily_lib import Src, ABS

def build():
    s = Src('12-14')
    t, r = s.t, s.r
    s.mark(5, 48)
    # The ODE V heading is printed doubled: "OODDEE VV".
    assert s.raw(115) == 'OODDEE VV', s.raw(115)
    s.mark(51, 67, 101, 115, 131, 153, 170, 186)

    kontakion = t(149, 152, 'Kontakion of the holy martyrs', sl=147, sm=148)

    vespers = {
        'order': ['lic_rubric', 'lic', 'theotokos_stichera_rubric', 'theotokos_stichera',
                  'lic_closer', 'lic_stavrotheotokion'],
        'lic_rubric': r(6, 6, 'LIC rubric'),
        'lic': s.seq(8, [11, 15, 19], 'LIC', sm=7, label='plain', first={'tone': 4}),
        'theotokos_stichera_rubric': r(20, 21, 'Stichera of the Theotokos rubric (Alleluia days)'),
        'theotokos_stichera': s.seq(22, [26, 30, 35], 'Sticheron of the Theotokos', label='plain'),
        'lic_closer': t(37, 40, 'LIC Glory/Both now Theotokion', sl=36, type='theotokion'),
        'lic_stavrotheotokion': t(42, 46, 'LIC Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion'),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'sessional_ode3', 'kontakion'],
        'canon_rubric': r(49, 50, 'Canon rubric'),
        'canons': [{
            'title': s.raw(49, 50),
            'composer': 'Theophanes',
            'tone': 6,
            'odes': {
                1: s.ode(1, (52, 54), [57, 60, 63, 66]),
                3: s.ode(3, (68, 70), [72, 75, 78, 81]),
                4: s.ode(4, (102, 103), [105, 108, 111, 114]),
                5: s.ode(5, (116, 118), [120, 123, 126, 130]),
                6: s.ode(6, (132, 134), [137, 140, 143, 146]),
                7: s.ode(7, (154, 156), [159, 162, 165, 169]),
                8: s.ode(8, (171, 173), [176, 179, 182, 185]),
                9: s.ode(9, (187, 190), [193, 197, 200, 203]),
            },
        }],
        'sessional_ode3': [
            t(84, 87, 'Ode III sessional', sl=82, sm=83, label='plain'),
            t(90, 95, 'Ode III sessional Theotokion', sl=89, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(96, 100, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints. From the title lines.
        'name': 'the holy Martyrs Thyrsus, Lucius, Philemon and those with them',
        'title': s.node(s.raw(3, 4), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera of the martyrs at Lord I have cried, no '
                 'Polyeleos, no Great Doxology appointed. ODS vol. III has no fixed 12-14 entry. A SHORT service: the '
                 'three stichera of the Theotokos for Alleluia days, a Theotokion and Stavrotheotokion, and then '
                 'Matins; NO aposticha rubric and NO TROPARION is printed anywhere in the file. One canon by '
                 'Theophanes; a sessional hymn after Ode III; a kontakion after Ode VI with no ikos; no '
                 'exapostilarion; nothing for the Liturgy. The ODE V heading is printed doubled.'),
        'troparion': ABS('No troparion is printed anywhere in 12-14.pdf.'),
        'kontakion': kontakion,
        'general_fallback': {
            'type': 'Martyrs', 'name': 'Thyrsus, Lucius and Philemon',
            'basis': ('The page heads the service "the holy martyrs" (plural) and prints no troparion, so the '
                      'General Menaion service to several martyrs supplies it (Tone I, "We beseech Thee, O Lord"). '
                      'What the OCA sings for these martyrs was not checked: there is no OCA text for 14 December.'),
        },
        'vespers': vespers, 'matins': matins,
    }
    return s, entry, ['identity', 'vespers', 'matins']
