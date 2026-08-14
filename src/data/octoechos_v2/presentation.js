// src/data/octoechos_v2/presentation.js
// ─────────────────────────────────────────────────────────────────────────────
// PRESENTATION REGISTRY (octoechos_v2_spec.md §12.1) — rendering HINTS keyed
// off schema_v2's FIELD_MANIFEST paths. This file contains NO liturgical
// text, ever (amendment F: no display copies) — headings and grouping only.
//
// Rules of the contract:
//   • Every FIELD_MANIFEST path must appear here, either as a registry entry
//     or as hidden: {reason}. tools/validate_viewer_coverage.mjs enforces the
//     join — a field added without coverage is a SAME-SESSION build failure.
//   • Hiding is opt-in only; omission is a gate failure, not a hidden field.
//   • Any data field with no entry still renders through the viewer's GENERIC
//     FALLBACK (visibly styled "unregistered field") — the registry can make
//     a field look good, but it can never make it invisible.
//
// Entry shape: { heading, order, group?, hidden?: {reason} }
//   heading — display label (short; the manifest's own `label` shows in audit
//             mode, so this stays terse)
//   order   — sort weight within its service section
//   group   — visual grouping key (renders as a sub-block)
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICE_ORDER = [
  'core', 'little_vespers', 'great_vespers', 'vespers_weekday', 'compline',
  'nocturns', 'matins', 'matins_weekday', 'liturgy', 'liturgy_weekday',
];

export const SERVICE_HEADINGS = {
  core: 'Canonical tone-level hymns (§4.1)',
  little_vespers: 'Little Vespers (Saturday evening)',
  great_vespers: 'Great Vespers (Saturday evening)',
  vespers_weekday: 'Weekday Vespers (by evening served)',
  compline: 'Compline (by night)',
  nocturns: 'Nocturns (Sunday)',
  matins: 'Sunday Matins',
  matins_weekday: 'Weekday Matins (by morning)',
  liturgy: 'Sunday Liturgy',
  liturgy_weekday: 'Weekday Liturgy (by day)',
};

export const DAY_HEADINGS = {
  sun: 'Sunday', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday',
  thu: 'Thursday', fri: 'Friday', sat: 'Saturday',
};

const R = {};   // registry, keyed by manifest path

// core
R['troparion']            = { heading: 'Resurrection Troparion', order: 1 };
R['dismissal_theotokion'] = { heading: 'Dismissal Theotokion', order: 2 };
R['kontakion']            = { heading: 'Kontakion', order: 3 };
R['ikos']                 = { heading: 'Ikos', order: 4 };

// little_vespers
R['little_vespers.rubric']               = { heading: 'Rubric', order: 1 };
R['little_vespers.lic']                  = { heading: 'At "Lord, I have cried" — stichera', order: 2, group: 'lic' };
R['little_vespers.lic_verses']           = { heading: 'LIC verses', order: 3, group: 'lic' };
R['little_vespers.lic_theotokion']       = { heading: 'LIC Theotokion', order: 4, group: 'lic' };
R['little_vespers.prokeimenon']          = { heading: 'Prokeimenon', order: 5 };
R['little_vespers.aposticha']            = { heading: 'Aposticha', order: 6, group: 'aposticha' };
R['little_vespers.aposticha.resurrection']     = { heading: 'Resurrection sticheron', order: 7, group: 'aposticha' };
R['little_vespers.aposticha.theotokos']        = { heading: 'Stichera of the Theotokos', order: 8, group: 'aposticha' };
R['little_vespers.aposticha.theotokos_verses'] = { heading: 'Theotokos verses', order: 9, group: 'aposticha' };
R['little_vespers.aposticha_theotokion'] = { heading: 'Aposticha Theotokion', order: 10, group: 'aposticha' };

// great_vespers
R['great_vespers.rubric']               = { heading: 'Rubric', order: 1 };
R['great_vespers.lic']                  = { heading: 'At "Lord, I have cried" — stichera', order: 2, group: 'lic' };
R['great_vespers.lic_verses']           = { heading: 'LIC verse ladder', order: 3, group: 'lic' };
R['great_vespers.lic_menaion_verses']   = { heading: 'Menaion-stichera verses', order: 4, group: 'lic' };
R['great_vespers.dogmatikon_rubric']    = { heading: 'Dogmatikon rubric', order: 5, group: 'lic' };
R['great_vespers.dogmatikon']           = { heading: 'Dogmatikon', order: 6, group: 'lic' };
R['great_vespers.aposticha']            = { heading: 'Aposticha', order: 7, group: 'aposticha' };
R['great_vespers.aposticha_verses']     = { heading: 'Aposticha verses', order: 8, group: 'aposticha' };
R['great_vespers.aposticha_theotokion'] = { heading: 'Aposticha Theotokion (Saturday fallback)', order: 9, group: 'aposticha' };

// vespers_weekday.<eve>
R['vespers_weekday.<eve>.lic']                  = { heading: 'At "Lord, I have cried"', order: 1, group: 'lic' };
R['vespers_weekday.<eve>.lic.octoechos']        = { heading: 'Octoechos stichera', order: 2, group: 'lic' };
R['vespers_weekday.<eve>.lic.octoechos_verses'] = { heading: 'Ladder verses', order: 3, group: 'lic' };
R['vespers_weekday.<eve>.lic.menaion_rubric']   = { heading: 'Menaion / fallback rubric', order: 4, group: 'lic' };
R['vespers_weekday.<eve>.lic.menaion_fallback'] = { heading: 'Fallback stichera (if no Menaion)', order: 5, group: 'lic' };
R['vespers_weekday.<eve>.lic.menaion_verses']   = { heading: 'Ladder tail verses', order: 6, group: 'lic' };
R['vespers_weekday.<eve>.lic_theotokion']       = { heading: 'LIC closer', order: 7, group: 'lic' };
R['vespers_weekday.<eve>.prokeimenon']          = { heading: 'Daily prokeimenon', order: 8 };
R['vespers_weekday.<eve>.aposticha']            = { heading: 'Aposticha', order: 9, group: 'aposticha' };
R['vespers_weekday.<eve>.aposticha_theotokion'] = { heading: 'Aposticha closer', order: 10, group: 'aposticha' };
R['vespers_weekday.<eve>.closing_rubric']       = { heading: 'Closing rubric', order: 11 };

// compline.<night>
R['compline.<night>.frame_rubric']   = { heading: 'Frame rubric', order: 1 };
R['compline.<night>.canon']          = { heading: 'Canon', order: 2 };
R['compline.<night>.after_ode6']     = { heading: 'After Ode VI', order: 3 };
R['compline.<night>.closing_rubric'] = { heading: 'Closing rubric', order: 4 };

// nocturns
R['nocturns.frame_rubric']   = { heading: 'Frame rubric', order: 1 };
R['nocturns.canon']          = { heading: 'Trinity canon', order: 2 };
R['nocturns.after_ode3']     = { heading: 'After Ode III', order: 3 };
R['nocturns.after_ode6']     = { heading: 'After Ode VI', order: 4 };
R['nocturns.closing_rubric'] = { heading: 'Closing rubric', order: 6 };

// matins (Sunday)
R['matins.god_is_lord_rubric']    = { heading: 'God is the Lord — rubric', order: 1 };
R['matins.sessionals']            = { heading: 'Sessional hymns (Kathismata II, III)', order: 2 };
R['matins.hypakoe']               = { heading: 'Hypakoe', order: 5 };
R['matins.anabathmoi']            = { heading: 'Anabathmoi (Songs of Ascent)', order: 6 };
R['matins.prokeimenon']           = { heading: 'Matins prokeimenon', order: 7 };
R['matins.canon']                 = { heading: 'Canon (Shape A)', order: 8 };
R['matins.exapostilarion_rubric'] = { heading: 'Exapostilarion rubric', order: 9 };
R['matins.praises']               = { heading: 'Praises', order: 10 };
R['matins.doxology_troparion']    = { heading: 'Doxology troparion', order: 11 };

// matins_weekday.<day>
R['matins_weekday.<day>.sessionals']           = { heading: 'Sessional sets', order: 1 };
R['matins_weekday.<day>.canons']               = { heading: 'Canons (two, stored whole)', order: 2 };
R['matins_weekday.<day>.magnificat_rubric']    = { heading: 'Magnificat rubric', order: 3 };
R['matins_weekday.<day>.post_canon_rubric']    = { heading: 'Post-canon rubric', order: 4 };
R['matins_weekday.<day>.praises']              = { heading: 'Praises (Saturday day-class)', order: 5 };
R['matins_weekday.<day>.aposticha']            = { heading: 'Aposticha', order: 6, group: 'aposticha' };
R['matins_weekday.<day>.aposticha_theotokion'] = { heading: 'Aposticha closer', order: 7, group: 'aposticha' };
R['matins_weekday.<day>.closing_rubric']       = { heading: 'Closing rubric', order: 8 };

// liturgy (Sunday)
R['liturgy.beatitudes']  = { heading: 'Beatitude troparia', order: 1 };
R['liturgy.prokeimenon'] = { heading: 'Prokeimenon', order: 2 };
R['liturgy.alleluia']    = { heading: 'Alleluia', order: 3 };

// liturgy_weekday.<day>
R['liturgy_weekday.<day>.beatitudes']  = { heading: 'Beatitudes', order: 1 };
R['liturgy_weekday.<day>.prokeimenon'] = { heading: 'Prokeimenon', order: 2 };
R['liturgy_weekday.<day>.alleluia']    = { heading: 'Alleluia', order: 3 };
R['liturgy_weekday.<day>.communion']   = { heading: 'Communion verse (koinonikon)', order: 4 };

R['little_vespers.closing_rubric']    = { heading: 'Closing rubric', order: 11 };
R['little_vespers.dismissal_rubric']  = { heading: 'Dismissal (Theotokion slot marked without text, §9.6)', order: 12 };
R['great_vespers.lic_menaion_rubric'] = { heading: 'Menaion stichera rubric', order: 4 };
R['great_vespers.aposticha_glory_rubric'] = { heading: 'Aposticha Glory rubric', order: 8 };
R['great_vespers.prokeimenon']        = { heading: 'Prokeimenon (shared)', order: 6 };
R['great_vespers.vigil_rubric']       = { heading: 'Vigil block (shared)', order: 10 };
R['great_vespers.no_vigil_rubric']    = { heading: 'If no Vigil', order: 11 };
R['nocturns.gregory_rubric']          = { heading: 'Hymn of Gregory the Sinaite (shared)', order: 5 };
R['matins.polyeleos_rubric']          = { heading: 'Polyeleos (shared)', order: 3 };
R['matins.evlogitaria_rubric']        = { heading: 'Evlogitaria (shared)', order: 4 };

// §5 shared tables
R['shared.daily_vespers_prokeimena']      = { heading: 'Daily Vespers prokeimena (by evening)', order: 1 };
R['shared.weekday_aposticha_verses']      = { heading: 'Weekday aposticha verse sets (day-keyed)', order: 2 };
R['shared.daily_liturgy_propers']         = { heading: 'Daily Liturgy propers (by day)', order: 3 };
R['shared.saturday_vespers_prokeimenon']  = { heading: 'Saturday GV prokeimenon', order: 4 };
R['shared.saturday_gv_aposticha_verses']  = { heading: 'Saturday GV aposticha verses', order: 5 };
R['shared.lv_theotokos_aposticha_verses'] = { heading: 'LV Theotokos aposticha verses', order: 6 };
R['shared.theotokos_virgin_rejoice']      = { heading: '“O Theotokos and Virgin, rejoice” + vigil rubric', order: 7 };
R['shared.evlogitaria']                   = { heading: 'Resurrectional Evlogitaria', order: 8 };
R['shared.polyeleos']                     = { heading: 'Polyeleos (select verses)', order: 9 };
R['shared.praises_verse_ladder']          = { heading: 'Praises verse ladder', order: 10 };
R['shared.ode8_hymn_verse']               = { heading: 'Ode VIII “We praise, we bless …”', order: 11 };
R['shared.gregory_sinaite_hymn']          = { heading: 'Hymn of Gregory the Sinaite', order: 12 };

R['theotokia.resurrectional_theotokia']   = { heading: 'Resurrectional Theotokia (Part 1, per tone)', order: 1 };
R['theotokia.doxasticon_theotokia']       = { heading: 'Doxasticon-tone Both-now Theotokia (Part 2)', order: 2 };
R['theotokia.dismissal_theotokia_annual'] = { heading: 'Dismissal Theotokia through the year (Part 3)', order: 3 };

export const REGISTRY = R;

// Resolve a concrete data path (tone2.vespers_weekday.tue.lic.octoechos) to
// its registry entry via the manifest's <eve>/<night>/<day> wildcards.
export function registryLookup(path) {
  if (REGISTRY[path]) return REGISTRY[path];
  const generic = path
    .replace(/^(vespers_weekday)\.(sun|mon|tue|wed|thu|fri)\./, '$1.<eve>.')
    .replace(/^(compline)\.(sat|sun|mon|tue|wed|thu|fri)\./, '$1.<night>.')
    .replace(/^(matins_weekday|liturgy_weekday)\.(mon|tue|wed|thu|fri|sat)\./, '$1.<day>.');
  return REGISTRY[generic] ?? null;
}
