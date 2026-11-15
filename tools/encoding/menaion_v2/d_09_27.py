# 09-27.pdf — COMMEMORATION OF THE HOLY MARTYR CALLISTRATUS & HIS COMPANIONS
# (6 pages). OVERLAP DATE: encoded for the V1/V2 comparison
# (menaion_v2_wirein_spec.md section 5), shape "plain single saint".
# Two kontakia (after Ode III and after Ode VI), both printed again at Liturgy.
# Boundaries read off the page, 14 Nov 2026.
from daily_lib import Src, same

def build():
    s = Src('09-27')
    t, r = s.t, s.r
    s.mark(4, 37, 210)
    s.mark(40, 59, 92, 105, 118, 146, 166, 177)

    assert same(t(32, 35, 'tr1'), t(212, 215, 'tr2')), 'troparion sites diverge'
    s.mark(211)
    troparion = t(32, 35, 'Troparion of the holy martyrs', sl=31,
                  verified_sites=[{'locus': 'p1 end of Vespers', 'tone': 4}, {'locus': 'p6 AT LITURGY', 'tone': 4}])
    assert same(t(76, 77, 'a'), t(217, 218, 'b')), 'Ode III kontakion sites diverge'
    assert same(t(136, 139, 'a'), t(220, 223, 'b')), 'Ode VI kontakion sites diverge'

    vespers = {
        'order': ['lic_rubric', 'lic', 'lic_glory', 'lic_closer_rubric', 'lic_stavrotheotokion', 'troparion'],
        'lic_rubric': r(5, 5, 'LIC rubric'),
        'lic': s.seq(7, [10, 15, 19], 'LIC', sm=6, first={'tone': 8}),
        'lic_glory': t(21, 23, 'LIC Glory', sl=20, composer='Byzantius'),
        'lic_closer_rubric': r(24, 24, 'LIC Both now rubric'),
        'lic_stavrotheotokion': t(26, 30, 'LIC Stavrotheotokion', sm=25, pre='Stavrotheotokion: ',
                                  type='stavrotheotokion', tone=4),
    }

    matins = {
        'order': ['canon_rubric', 'canons', 'kontakia_ode3', 'sessional_ode3', 'kontakia_ode6',
                  'exapostilarion', 'exapostilarion_closer'],
        'canon_rubric': r(38, 39, 'Canon rubric'),
        'canons': [{
            'title': s.raw(38, 39),
            'composer': 'Joseph',
            'tone': 8,
            'odes': {
                1: s.ode(1, (41, 43), [46, 49, 52, 55, 58]),
                3: s.ode(3, (60, 62), [65, 67, 70, 72]),
                4: s.ode(4, (93, 94), [96, 98, 100, 102, 104]),
                5: s.ode(5, (106, 108), [110, 113, 115, 117]),
                6: s.ode(6, (119, 121), [124, 127, 130, 133]),
                7: s.ode(7, (147, 149), [153, 156, 159, 162, 165]),
                8: s.ode(8, (167, 168), [170, 172, 174, 176]),
                9: s.ode(9, (178, 181), [184, 187, 191, 195, 199]),
            },
        }],
        'kontakia_ode3': [t(76, 77, 'Kontakion of the holy martyrs (after Ode III)', sl=74, sm=75, label='plain')],
        'sessional_ode3': [
            t(80, 82, 'Ode III sessional', sl=78, sm=79, label='plain'),
            t(84, 87, 'Ode III sessional Theotokion', sl=83, type='theotokion', label=['glory', 'both_now', 'theotokion']),
            t(88, 91, 'Ode III sessional Stavrotheotokion', pre='Stavrotheotokion: ', type='stavrotheotokion',
              label='stavrotheotokion'),
        ],
        'kontakia_ode6': [
            t(136, 139, 'Kontakion of the holy martyrs (after Ode VI)', sl=134, sm=135, label='plain'),
            t(140, 145, 'Ikos', pre='Ikos: ', label='plain'),
        ],
        'exapostilarion': t(202, 205, 'Exapostilarion', sl=200, sm=201, label='plain'),
        'exapostilarion_closer': t(206, 209, 'Exapostilarion Theotokion', pre='Theotokion: ', type='theotokion'),
    }

    liturgy = {
        'order': ['troparion', 'kontakia'],
        'kontakia': [
            t(217, 218, 'Kontakion of Ode III at Liturgy', sl=216, label='plain'),
            t(220, 223, 'Kontakion of Ode VI at Liturgy', sl=219, label='plain'),
        ],
    }

    entry = {
        'kind': 'saint',
        # Hand-entered: how the dismissal names the day's saints ("and of ..., whose memory we
        # celebrate"). From the title line; the OCA title where there is one. None on a feast
        # of the Theotokos or of an icon, where no saint is added.
        'name': 'the holy Martyr Callistratus and his companions',
        'title': s.node(s.raw(3), 3, 'title', sourceLabel=s.raw(2)),
        'rank': 'simple',
        'fekula_section': '2A',
        'oca_primary': True,
        'source_file': s.file,
        'note': ('OVERLAP DATE for the V1/V2 comparison (menaion_v2_wirein_spec.md section 5). ODS 3rd ed. vol. III has '
                 'no entry for 27 September. Rank by the encoding_rule_v2.md 1.1 waterfall: 3 stichera at Lord I have '
                 'cried and a Glory of the saints, no Polyeleos, no Great Doxology, no aposticha printed: Simple, '
                 'Fekula 2A, agreeing with V1. TWO kontakia in Tone IV, after Ode III and after Ode VI (with the '
                 'Ikos), both printed again at Liturgy: positional lists, no entry-level canonical kontakion. AT '
                 'LITURGY prints only the troparion and the two kontakia.'),
        'troparion': troparion,
        'vespers': vespers, 'matins': matins, 'liturgy': liturgy,
    }
    return s, entry, ['identity', 'vespers', 'matins', 'liturgy']
