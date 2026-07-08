// src/data/octoechos_v2/schema_v2.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — THE SINGLE CONTRACT (octoechos_v2_spec.md §6, §12).
//
// Three consumers key off this one module and nothing else:
//   • tools/validate_octoechos_v2.mjs      — the §6 drift gate
//   • src/data/octoechos_v2/presentation.js + the V2 browser — §12 rendering
//   • tools/validate_viewer_coverage.mjs   — §12.2 coverage gate (schema ⋈ registry)
//
// Data cannot exist outside this contract (validator vocabulary guard), and
// nothing inside it can be invisible (coverage gate + generic fallback
// rendering). To add a genuinely new field: add it HERE deliberately — that
// deliberate edit IS the gate — and the coverage gate will demand a registry
// entry (or an explicit hidden-with-reason) in the same session.
//
// Tone-scope (spec §4, amendment C): the structural templates below are
// [T2-attested] and EXPECTED tone-invariant; promotion to [tone-invariant]
// happens only on the tone-3 verification scan (§11), never by assumption.
// ─────────────────────────────────────────────────────────────────────────────

export const TONES = [1, 2, 3, 4, 5, 6, 7, 8];

// Weekday Vespers is keyed by the EVENING (the day it is served; it opens the
// following day). Friday evening is a distinct shape (§4.4 fri).
export const VESPERS_EVENINGS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

// Compline is keyed by NIGHT; all seven nights carry distinct canons (§4.5).
export const COMPLINE_NIGHTS = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

// Weekday Matins/Liturgy keyed by MORNING day; Saturday is its own day-class
// (§4.8a) — same key, different template.
export const WEEKDAY_MORNINGS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Ode II is omitted throughout the Octoechos.
export const CANON_ODES = [1, 3, 4, 5, 6, 7, 8, 9];

// ── §4.11 item-label vocabulary ──────────────────────────────────────────────
// 'martyrs'         = the source's "To the martyrs:" prefix
// 'for_the_reposed' = the source's "For the reposed:" prefix (first attested 2-7)
// 'refrain'         = the interleaved refrain lines of the Saturday fallback
//                     canon (§4.8a) — a new field class
// Labels can COMPOUND (2-7 prints "Glory ..., For the reposed:" on one item):
// an item's `label` is a string from this list OR an array of them, in the
// source's printed order.
export const LABELS = [
  'plain', 'martyrs', 'glory', 'both_now', 'theotokion', 'trinitarion',
  'for_the_reposed', 'refrain',
];

// ── Typed closers (§4.4 closer-typing rule + Shape A ode-9) ──────────────────
// The type records exactly what the source labels the hymn — never flattened
// into a field name.
export const CLOSER_TYPES = [
  'theotokion', 'stavrotheotokion', 'dogmatic_theotokion', 'trinitarion',
];

// ── Source-file vocabulary (spec header list) ────────────────────────────────
// Every text node's src.file must come from this list. Extended deliberately
// as new sources are inventoried into the spec (e.g. Bill's Horologion
// printing for §9.11(b)).
export const SOURCE_FILES = [
  '2-1.pdf', '2-2.pdf', '2-3.pdf', '2-4.pdf', '2-5.pdf', '2-6.pdf', '2-7.pdf',
  'Theotokia.pdf',
  'Music-Evangelical-Stichera.pdf',
  '3-1.pdf', '3-2.pdf', '3-3.pdf', '3-4.pdf', '3-5.pdf', '3-6.pdf', '3-7.pdf',
];

// ── The universal text node (spec §4 hymn value shape + amendment D) ─────────
// Every stored pointed or prose text is an object of this shape. `src` (with
// BOTH file and locus) and `tier` are MANDATORY on every text node — absence
// of a tier field is a hard-fail, not "unpointed" (§6, amendment D).
export const TEXT_NODE = {
  required: ['text', 'tier', 'src'],           // src = { file, locus }
  optional: [
    'sourceLabel',      // the source's own label where it differs from ours
    'spec_mel',         // Spec. Mel. label, verbatim per print site (§2.3)
    'director',         // §3.5 of encoding_rule_v2.md (Tier-3 only)
    'repeat',           // "(Twice)" device → exactly 2 (§2.7, §9.4)
    'incipit_ref',      // incipit-reference device → position path of referent (§2.7)
    'refrain',          // per-item refrain (Saturday fallback canon, §4.8a)
    'label',            // labeled-items arrays: string or array from LABELS
    'type',             // typed closers: from CLOSER_TYPES
    'tone',             // where the source prints a tone (prokeimena etc.)
    'dialect',          // 'sergius' (default) | 'oca' — marker dialect (§3.3)
    'provenance_note',  // e.g. the §9.5 Little-Vespers quotation-mark variance
    'homoglyph_log',    // §9.10 normalize-at-encode log: [{from, to, count}]
    'composer', 'acrostic', // where the source prints them on the item/heading
  ],
};
export const TIERS = [1, 2, 3];

// ── §6 pointing rules per tier (St. Sergius dialect) ─────────────────────────
// Tier 2: contains `*`, exactly one `**`, never `|` or `//`, no `[`.
// Tier 1: no markers at all.
// Tier 3 (OCA dialect, later backfill): `|` / `//` / `[brackets]` — marked by
// dialect: 'oca'; the sergius checks then do not apply.
// (Enforced by the validator; recorded here so the contract is complete.)

// ── The `_encoded` claim vocabulary (§6) ─────────────────────────────────────
// Weekday claims are per-day so a partially encoded tone gates only what it
// claims. 'core' = the §4.1 canonical tone-level hymns.
export const ENCODABLE_SECTIONS = [
  'core',
  'little_vespers',
  'great_vespers',
  ...VESPERS_EVENINGS.map(d => `vespers_weekday.${d}`),
  ...COMPLINE_NIGHTS.map(n => `compline.${n}`),
  'nocturns',
  'matins',
  ...WEEKDAY_MORNINGS.map(d => `matins_weekday.${d}`),
  'liturgy',
  ...WEEKDAY_MORNINGS.map(d => `liturgy_weekday.${d}`),
];

// ─────────────────────────────────────────────────────────────────────────────
// FIELD KINDS — the vocabulary shared by validator, viewer, and coverage gate.
//
//   rubric        — verbatim printed rubric string (§2.6); prose only here
//   text          — one text node
//   closer        — text node with required `type` from CLOSER_TYPES
//   text_array    — array of text nodes (stichera, verses, troparia)
//   labeled_items — array of text nodes each carrying `label` (§4.11)
//   sessional_sets— array of { rubric?, spec_mel?, items[], verses[], closer }
//   canon_a       — Shape A multi-canon block (§4.11)
//   canon_b       — Shape B labeled canon (§4.11)
//   canons        — array of exactly 2 canon_b (weekday double-canon)
//   after_ode     — { rubric?, sessional, theotokion? } mid-canon insertion
//   prokeimenon   — { tone?, text, verse } (text/verse are text nodes)
//   alleluia      — { tone?, verses: text_array }
//   anabathmoi    — array of { troparia: text_array, gloria: text } (§9.7:
//                   antiphon count is per-tone; NEVER hard-require 3)
//   beatitudes    — Sunday: { troparia, gloria, theotokion } /
//                   weekday: { items: labeled_items } with exactly one glory
//                   + one both_now
//   praises       — { rubric?, stichera|items, verses, gloria_rubric?, theotokion }
//   aposticha     — { items | resurrection/theotokos..., verses, ... } per section
//   ref           — { ref: 'shared.<table>' } cross-reference to a shared table
//   group         — nested object whose children are themselves manifest rows
// ─────────────────────────────────────────────────────────────────────────────
export const FIELD_KINDS = [
  'rubric', 'text', 'closer', 'text_array', 'labeled_items', 'sessional_sets',
  'canon_a', 'canon_b', 'canons', 'after_ode', 'prokeimenon', 'alleluia',
  'anabathmoi', 'beatitudes', 'praises', 'aposticha', 'ref', 'group',
];

// ─────────────────────────────────────────────────────────────────────────────
// FIELD MANIFEST — every renderable field path in a V2 tone file.
//
// Path grammar: dot-separated; `<eve>` ranges over VESPERS_EVENINGS, `<night>`
// over COMPLINE_NIGHTS, `<day>` over WEEKDAY_MORNINGS. Array positions in data
// use [i]. The coverage gate (§12.2) joins these paths against the
// presentation registry: every row below must be registered or explicitly
// hidden-with-reason. A key present in DATA but absent here already fails the
// data validator (vocabulary guard) — the two gates meet in the middle.
//
// `required` is evaluated only when the owning section is claimed in
// `_encoded` (§6). Counts live in SECTION_RULES below, not here.
// ─────────────────────────────────────────────────────────────────────────────
export const FIELD_MANIFEST = [
  // §4.1 canonical tone-level hymns (claim: 'core')
  { path: 'troparion',            kind: 'text',  section: 'core', required: true,
    label: 'Resurrection Troparion (canonical, multi-site verified §4.1; GV print canonical §9.5)' },
  { path: 'dismissal_theotokion', kind: 'text',  section: 'core', required: true,
    label: 'Resurrectional Dismissal Theotokion (canonical)' },
  { path: 'kontakion',            kind: 'text',  section: 'core', required: true,
    label: 'Sunday Kontakion (canonical)' },
  { path: 'ikos',                 kind: 'text',  section: 'core', required: true,
    label: 'Ikos (Tier 1 prose)' },

  // §4.2 little_vespers
  { path: 'little_vespers.rubric',               kind: 'rubric',     section: 'little_vespers', required: true, label: 'LV rubric' },
  { path: 'little_vespers.lic',                  kind: 'text_array', section: 'little_vespers', required: true, label: 'LV Lord-I-have-cried stichera (4 positions AS PRINTED — first printed twice, §9.4)' },
  { path: 'little_vespers.lic_verses',           kind: 'text_array', section: 'little_vespers', required: true, label: 'LV LIC verses' },
  { path: 'little_vespers.lic_theotokion',       kind: 'text',       section: 'little_vespers', required: true, label: 'LV LIC Theotokion' },
  { path: 'little_vespers.prokeimenon',          kind: 'ref',        section: 'little_vespers', required: true, label: 'LV prokeimenon (→ shared.saturday_vespers_prokeimenon)' },
  { path: 'little_vespers.aposticha',            kind: 'group',      section: 'little_vespers', required: true, label: 'LV aposticha' },
  { path: 'little_vespers.aposticha.resurrection',     kind: 'text_array', section: 'little_vespers', required: true, label: 'LV aposticha — Resurrection sticheron (as printed HERE, §2.2)' },
  { path: 'little_vespers.aposticha.theotokos',        kind: 'text_array', section: 'little_vespers', required: true, label: 'LV aposticha — Theotokos stichera' },
  { path: 'little_vespers.aposticha.theotokos_verses', kind: 'ref', section: 'little_vespers', required: true, label: 'LV aposticha — Theotokos verses (print site in shared.lv_theotokos_aposticha_verses)' },
  { path: 'little_vespers.aposticha_theotokion', kind: 'text',       section: 'little_vespers', required: true, label: 'LV aposticha Theotokion' },

  // §4.3 great_vespers
  { path: 'great_vespers.rubric',              kind: 'rubric',     section: 'great_vespers', required: true, label: 'GV rubric' },
  { path: 'great_vespers.lic',                 kind: 'text_array', section: 'great_vespers', required: true, label: 'GV LIC stichera (7; ss.4–7 "by Anatolius" as item provenance)' },
  { path: 'great_vespers.lic_verses',          kind: 'text_array', section: 'great_vespers', required: true, label: 'GV LIC verse ladder as printed' },
  { path: 'great_vespers.lic_menaion_verses',  kind: 'text_array', section: 'great_vespers', required: true, label: 'GV Menaion-stichera verses (3)' },
  { path: 'great_vespers.dogmatikon',          kind: 'text',       section: 'great_vespers', required: true, label: 'Dogmatikon' },
  { path: 'great_vespers.dogmatikon_rubric',   kind: 'rubric',     section: 'great_vespers', required: true, label: 'Dogmatikon rubric' },
  { path: 'great_vespers.aposticha',           kind: 'text_array', section: 'great_vespers', required: true, label: 'GV aposticha (4)' },
  { path: 'great_vespers.aposticha_verses',    kind: 'ref', section: 'great_vespers', required: true, label: 'GV aposticha verses (3; first sticheron unversed) — print site encoded in shared.saturday_gv_aposticha_verses' },
  { path: 'great_vespers.aposticha_theotokion',kind: 'text',       section: 'great_vespers', required: true, label: 'GV aposticha Theotokion — the REAL Saturday fallback (§4.3)' },

  // §4.4 vespers_weekday.<eve> (sun–thu template; Friday: no fallback tier,
  // dogmatic_theotokion closer — the optional fields below are ABSENT fri)
  { path: 'vespers_weekday.<eve>.lic',                  kind: 'group',      section: 'vespers_weekday.<eve>', required: true, label: 'Weekday LIC block' },
  { path: 'vespers_weekday.<eve>.lic.octoechos',        kind: 'labeled_items', section: 'vespers_weekday.<eve>', required: true, label: 'LIC Octoechos stichera (Friday: both sets, 6 items, incipit device §2.7)' },
  { path: 'vespers_weekday.<eve>.lic.octoechos_verses', kind: 'text_array', section: 'vespers_weekday.<eve>', required: true, label: 'LIC ladder verses (Octoechos entry point)' },
  { path: 'vespers_weekday.<eve>.lic.menaion_rubric',   kind: 'rubric',     section: 'vespers_weekday.<eve>', required: false, label: 'Menaion / fallback rubric (ABSENT Friday)' },
  { path: 'vespers_weekday.<eve>.lic.menaion_fallback', kind: 'labeled_items', section: 'vespers_weekday.<eve>', required: false, label: 'Menaion-absence fallback set (day-themed, per-evening texts; ABSENT Friday)' },
  { path: 'vespers_weekday.<eve>.lic.menaion_verses',   kind: 'text_array', section: 'vespers_weekday.<eve>', required: false, label: 'Ladder tail verses for the Menaion/fallback stichera (ABSENT Friday)' },
  { path: 'vespers_weekday.<eve>.lic_theotokion',       kind: 'closer',     section: 'vespers_weekday.<eve>', required: true, label: 'LIC Glory/Both-now closer — typed (Friday: dogmatic_theotokion, §9.2)' },
  { path: 'vespers_weekday.<eve>.prokeimenon',          kind: 'prokeimenon',section: 'vespers_weekday.<eve>', required: true, label: 'Daily Vespers prokeimenon (shared-by-day hypothesis §5 — verify per tone)' },
  { path: 'vespers_weekday.<eve>.aposticha',            kind: 'aposticha',  section: 'vespers_weekday.<eve>', required: true, label: 'Weekday Vespers aposticha (labeled items + long pointed verses; Friday: departed verses §5)' },
  { path: 'vespers_weekday.<eve>.aposticha_theotokion', kind: 'closer',     section: 'vespers_weekday.<eve>', required: true, label: 'Aposticha closer — typed' },
  { path: 'vespers_weekday.<eve>.closing_rubric',       kind: 'rubric',     section: 'vespers_weekday.<eve>', required: true, label: 'Closing rubric (verbatim per evening)' },

  // §4.5 compline.<night>
  { path: 'compline.<night>.frame_rubric',   kind: 'rubric',    section: 'compline.<night>', required: false, label: 'Frame rubric (printed at Saturday only so far)' },
  { path: 'compline.<night>.canon',          kind: 'canon_b',   section: 'compline.<night>', required: true,  label: 'Compline canon (distinct composition per night — all seven distinct)' },
  { path: 'compline.<night>.after_ode6',     kind: 'after_ode', section: 'compline.<night>', required: true,  label: 'After Ode VI (rubric + sessional; tier is a per-night source fact)' },
  { path: 'compline.<night>.closing_rubric', kind: 'rubric',    section: 'compline.<night>', required: true,  label: 'Closing rubric (differs per night — verbatim; Thu night sic §9.12)' },

  // §4.6 nocturns (Sunday only — §9.3 closed)
  { path: 'nocturns.frame_rubric',   kind: 'rubric',    section: 'nocturns', required: true, label: 'Nocturns frame rubric' },
  { path: 'nocturns.canon',          kind: 'canon_b',   section: 'nocturns', required: true, label: 'Trinity canon (Metrophanes of Smyrna; acrostic printed)' },
  { path: 'nocturns.after_ode3',     kind: 'after_ode', section: 'nocturns', required: true, label: 'After Ode III sessional pair' },
  { path: 'nocturns.after_ode6',     kind: 'after_ode', section: 'nocturns', required: true, label: 'After Ode VI sessional pair' },
  { path: 'nocturns.closing_rubric', kind: 'rubric',    section: 'nocturns', required: true, label: 'Closing rubric' },

  // §4.7 matins (Sunday)
  { path: 'matins.god_is_lord_rubric',     kind: 'rubric',        section: 'matins', required: true, label: 'God-is-the-Lord rubric (cross-tone dismissal-theotokion lookup, §3)' },
  { path: 'matins.sessionals',             kind: 'sessional_sets',section: 'matins', required: true, label: 'Sessional sets (Sunday: exactly 2 — Kathismata II, III; closer type per source, §4.7)' },
  { path: 'matins.hypakoe',                kind: 'text',          section: 'matins', required: true, label: 'Hypakoe (source labels it "The Sessional Hymn" — sourceLabel)' },
  { path: 'matins.anabathmoi',             kind: 'anabathmoi',    section: 'matins', required: true, label: 'Anabathmoi / Songs of Ascent (antiphon count is PER-TONE, §9.7)' },
  { path: 'matins.prokeimenon',            kind: 'prokeimenon',   section: 'matins', required: true, label: 'MATINS prokeimenon (must differ from Liturgy — V1 conflation trap §8)' },
  { path: 'matins.canon',                  kind: 'canon_a',       section: 'matins', required: true, label: 'Resurrection canon (Shape A: three sub-canons per ode)' },
  { path: 'matins.exapostilarion_rubric',  kind: 'rubric',        section: 'matins', required: true, label: 'Exapostilarion rubric (Eothinon-keyed, NOT tone-keyed — §9.11a)' },
  { path: 'matins.praises',                kind: 'praises',       section: 'matins', required: true, label: 'Praises (8 stichera + 8 verses + gloria rubric + theotokion)' },
  { path: 'matins.doxology_troparion',     kind: 'text',          section: 'matins', required: true, label: 'Doxology troparion (which tones print which is a per-chapter fact)' },

  // §4.8 matins_weekday.<day> (mon–fri template; sat = §4.8a day-class)
  { path: 'matins_weekday.<day>.sessionals',            kind: 'sessional_sets', section: 'matins_weekday.<day>', required: true, label: 'Sessional sets (Mon–Fri: 3; Sat: 2 — §4.8a)' },
  { path: 'matins_weekday.<day>.canons',                kind: 'canons',         section: 'matins_weekday.<day>', required: true, label: 'Two canons stored whole (assembler interleaves; Sat canon 2 = conditional fallback canon with refrains, §4.8a)' },
  { path: 'matins_weekday.<day>.magnificat_rubric',     kind: 'rubric',         section: 'matins_weekday.<day>', required: false, label: 'Magnificat rubric (between Odes VIII and IX)' },
  { path: 'matins_weekday.<day>.post_canon_rubric',     kind: 'rubric',         section: 'matins_weekday.<day>', required: true, label: 'Post-canon rubric (exapostilarion named without text — §9.11b)' },
  { path: 'matins_weekday.<day>.praises',               kind: 'praises',        section: 'matins_weekday.<day>', required: false, label: 'Praises — SATURDAY ONLY (§4.8a); absent Mon–Fri' },
  { path: 'matins_weekday.<day>.aposticha',             kind: 'aposticha',      section: 'matins_weekday.<day>', required: true, label: 'Matins aposticha (items + verses; Thu verse anomaly §9.13 encoded as printed)' },
  { path: 'matins_weekday.<day>.aposticha_theotokion',  kind: 'closer',         section: 'matins_weekday.<day>', required: true, label: 'Matins aposticha closer — typed (§4.4 convention)' },
  { path: 'matins_weekday.<day>.closing_rubric',        kind: 'rubric',         section: 'matins_weekday.<day>', required: true, label: 'Closing rubric' },

  // §4.9 liturgy (Sunday)
  { path: 'liturgy.beatitudes',             kind: 'beatitudes',  section: 'liturgy', required: true, label: 'Beatitude troparia (6) + Gloria (Triadicon) + Theotokion' },
  { path: 'liturgy.prokeimenon',            kind: 'prokeimenon', section: 'liturgy', required: true, label: 'Liturgy prokeimenon' },
  { path: 'liturgy.alleluia',               kind: 'alleluia',    section: 'liturgy', required: true, label: 'Alleluia verses (NO communion verse on Sunday — §4.9, do not invent)' },

  // §4.10 liturgy_weekday.<day>
  { path: 'liturgy_weekday.<day>.beatitudes',  kind: 'beatitudes',  section: 'liturgy_weekday.<day>', required: true, label: 'Weekday beatitudes (labeled; exactly one glory + one both_now)' },
  { path: 'liturgy_weekday.<day>.prokeimenon', kind: 'prokeimenon', section: 'liturgy_weekday.<day>', required: true, label: 'Weekday Liturgy prokeimenon (day cycle; shared-by-day hypothesis §5)' },
  { path: 'liturgy_weekday.<day>.alleluia',    kind: 'alleluia',    section: 'liturgy_weekday.<day>', required: true, label: 'Weekday Alleluia' },
  { path: 'liturgy_weekday.<day>.communion',   kind: 'text',        section: 'liturgy_weekday.<day>', required: true, label: 'Koinonikon (REQUIRED weekday, FORBIDDEN Sunday — §4.9/§4.10)' },

  // print-site companions added at tone-2 Sunday-cycle encoding (step 4)
  { path: 'little_vespers.closing_rubric',    kind: 'rubric', section: 'little_vespers', required: false, label: 'LV closing rubric' },
  { path: 'little_vespers.dismissal_rubric',  kind: 'rubric', section: 'little_vespers', required: false, label: 'LV dismissal Glory/Both-now marked WITHOUT text (§9.6)' },
  { path: 'great_vespers.lic_menaion_rubric', kind: 'rubric', section: 'great_vespers', required: false, label: 'GV Menaion-stichera rubric' },
  { path: 'great_vespers.aposticha_glory_rubric', kind: 'rubric', section: 'great_vespers', required: false, label: 'GV aposticha Glory-from-Menaion rubric' },
  { path: 'great_vespers.prokeimenon',        kind: 'ref', section: 'great_vespers', required: false, label: 'GV prokeimenon (→ shared.saturday_vespers_prokeimenon)' },
  { path: 'great_vespers.vigil_rubric',       kind: 'ref', section: 'great_vespers', required: false, label: 'Vigil block (→ shared.theotokos_virgin_rejoice + its note)' },
  { path: 'great_vespers.no_vigil_rubric',    kind: 'rubric', section: 'great_vespers', required: false, label: 'If-no-Vigil rubric (canonical troparion print site follows)' },
  { path: 'nocturns.gregory_rubric',          kind: 'ref', section: 'nocturns', required: false, label: 'Gregory-the-Sinaite hymn (→ shared.gregory_sinaite_hymn)' },
  { path: 'matins.polyeleos_rubric',          kind: 'ref', section: 'matins', required: false, label: 'Polyeleos block (→ shared.polyeleos, printed here)' },
  { path: 'matins.evlogitaria_rubric',        kind: 'ref', section: 'matins', required: false, label: 'Evlogitaria (→ shared.evlogitaria, printed here in full)' },

  // §5 shared tables (shared.js — rendered by the viewer's Shared section;
  // coverage-gated like every other field)
  { path: 'shared.daily_vespers_prokeimena',      kind: 'group', section: 'shared', required: false, label: 'Daily Vespers prokeimena (keyed by evening; verify per tone §5)' },
  { path: 'shared.weekday_aposticha_verses',      kind: 'group', section: 'shared', required: false, label: 'Weekday aposticha verse SETS (day-keyed; §9.13 Thursday as printed; departed sets 2-7)' },
  { path: 'shared.daily_liturgy_propers',         kind: 'group', section: 'shared', required: false, label: 'Daily Liturgy propers (prokeimenon / alleluia / koinonikon per day; Saturday adds departed forms)' },
  { path: 'shared.saturday_vespers_prokeimenon',  kind: 'group', section: 'shared', required: false, label: 'Saturday Great Vespers prokeimenon (Tone VI + 3 verses)' },
  { path: 'shared.saturday_gv_aposticha_verses',  kind: 'text_array', section: 'shared', required: false, label: 'Saturday GV aposticha verses ("The Lord is King …" set)' },
  { path: 'shared.lv_theotokos_aposticha_verses', kind: 'text_array', section: 'shared', required: false, label: 'Little Vespers Theotokos aposticha verses' },
  { path: 'shared.theotokos_virgin_rejoice',      kind: 'group', section: 'shared', required: false, label: '"O Theotokos and Virgin, rejoice" (Tone IV) + vigil rubric' },
  { path: 'shared.evlogitaria',                   kind: 'group', section: 'shared', required: false, label: 'The Resurrectional Evlogitaria (full print, 2-1; V1 comparison surface)' },
  { path: 'shared.polyeleos',                     kind: 'group', section: 'shared', required: false, label: 'Polyeleos select verses + pre-Lent Ps 136 note + Megalynarion rubric' },
  { path: 'shared.praises_verse_ladder',          kind: 'text_array', section: 'shared', required: false, label: 'Praises 8-verse ladder (Sunday Matins print site)' },
  { path: 'shared.ode8_hymn_verse',               kind: 'group', section: 'shared', required: false, label: '"We praise, we bless …" Ode VIII verse + rubric' },
  { path: 'shared.gregory_sinaite_hymn',          kind: 'group', section: 'shared', required: false, label: 'Hymn of Gregory the Sinaite (7 stanzas, Tier 1; "chanted every Sunday after the canon")' },

  // §4.12 Common Theotokia tables (theotokia.js — coverage-gated)
  { path: 'theotokia.resurrectional_theotokia',    kind: 'group', section: 'theotokia', required: false, label: 'Part 1 — Resurrectional triplets per tone: Dogmaticon / At-the-Aposticha / Dismissal Theotokion' },
  { path: 'theotokia.doxasticon_theotokia',        kind: 'group', section: 'theotokia', required: false, label: 'Part 2 — Both-now Theotokia in the doxasticon\'s tone, (day+slot) × tone' },
  { path: 'theotokia.dismissal_theotokia_annual',  kind: 'group', section: 'theotokia', required: false, label: 'Part 3 — Dismissal Theotokia through the year, day-pair × tone (usage note stored verbatim, unclosed bracket sic)' },
];

// Top-level keys a tone file may carry (vocabulary guard).
export const TONE_TOP = {
  known: [
    'tone', '_encoded',
    'troparion', 'dismissal_theotokion', 'kontakion', 'ikos',
    'little_vespers', 'great_vespers', 'vespers_weekday', 'compline',
    'nocturns', 'matins', 'matins_weekday', 'liturgy', 'liturgy_weekday',
  ],
  required: ['tone', '_encoded'],
};

// ── SECTION RULES — the §6 structural counts, per claimed section ────────────
// Only what the spec pins as a count is pinned here; everything the spec calls
// a per-ode / per-set / per-tone source fact is deliberately NOT a count rule.
export const SECTION_RULES = {
  little_vespers: {
    counts: {
      'lic': 4, 'lic_verses': 4,
      'aposticha.resurrection': 1, 'aposticha.theotokos': 3, 'aposticha.theotokos_verses': 3,
    },
  },
  great_vespers: {
    counts: { 'lic': 7, 'lic_verses': 7, 'lic_menaion_verses': 3, 'aposticha': 4, 'aposticha_verses': 3 },
  },
  matins: {
    sessionalSets: 2,           // Sunday: exactly 2 (Kathismata II, III)
    praises: { stichera: 8, verses: 8 },
    prokeimenonNotEqual: 'liturgy.prokeimenon',   // V1 conflation trap (§8)
  },
  matins_weekday: {
    sessionalSets: { mon: 3, tue: 3, wed: 3, thu: 3, fri: 3, sat: 2 },  // §4.8 / §4.8a
    canons: 2,
  },
  liturgy: {
    beatitudesTroparia: 6,
    communionForbidden: true,    // §4.9 — Sunday prints NO communion verse
  },
  liturgy_weekday: {
    communionRequired: true,     // §4.10 — koinonikon is a weekday field class
    beatitudesExactlyOne: ['glory', 'both_now'],
  },
};

// ── Shape A / Shape B canon contracts (§4.11) ────────────────────────────────
export const CANON_A = {
  odeKeys: CANON_ODES,
  subCanons: ['resurrection', 'cross_resurrection', 'theotokos'],
  // Closer-type distribution across odes is PER-TONE (tone-2: theotokion at
  // 1–8 + trinitarion at 9; tone-3: trinitarion at 7, theotokion elsewhere —
  // §4.11 claim demoted at the tone-3 verification, July 7 2026). The gate
  // requires a typed closer per ode; the type census is a source fact.
  closerByOde: null,
  known: ['title', 'composer', 'acrostic', 'odes'],
};
export const CANON_B = {
  odeKeys: CANON_ODES,
  // per ode: irmos (full text node OR incipit_ref device) + non-empty labeled
  // items. Which labels appear, and how many items, is a per-ode source fact —
  // the gate checks label validity and non-emptiness, not a fixed census.
  // composer and acrostic are BOTH optional and INDEPENDENT (2-4: neither;
  // 2-5: composer without acrostic; 2-7: acrostic without composer).
  known: ['title', 'composer', 'acrostic', 'condition', 'odes', 'heading_rubric'],
  // 'condition' — the Saturday conditional fallback canon's own rubric
  // ("... WHICH WE CHANT WHEN THERE IS NO MENAION", §4.8a), verbatim.
};

// ── shared.js manifest (§5) — tone-independent, dynamically loaded ───────────
// Each table is a HYPOTHESIS of tone-invariance: re-verified against every
// tone's chapter as it is encoded; any divergence is a finding and the item
// moves into the per-tone files. Day-keyed shared tables are for psalm-verse /
// prokeimenon-class texts ONLY (§9.8 ruling); everything hymnographic is
// per-position.
export const SHARED_TABLES = [
  // 'lic_verse_ladder' — REMOVED July 7 2026: byte-comparison across the
  // 2-1/2-2 print sites falsified the shared-ladder hypothesis ("patiently
  // waited"/"waited patiently"; "with Him is"/"with Him there is"). Per §5's
  // own rule the item moves per-position (§4 lic_verses fields). Finding
  // recorded in project_notes.md.
  'saturday_gv_aposticha_verses',
  'lv_theotokos_aposticha_verses',
  'weekday_aposticha_verses',      // day-keyed verse SETS incl. departed set (§5, 2-7)
  'daily_vespers_prokeimena',
  'daily_liturgy_propers',
  'saturday_vespers_prokeimenon',
  'theotokos_virgin_rejoice',
  'evlogitaria',
  'praises_verse_ladder',
  'polyeleos',
  'ode8_hymn_verse',
  'gregory_sinaite_hymn',
];

// Deliberate exclusions (§5) — Horologion/other-book material printed for
// convenience. Recorded so the audit trail shows each was seen and
// deliberately not encoded.
export const SHARED_EXCLUSIONS = [
  '"Having beheld the Resurrection"',
  'Psalm 50 troparia',
  'Magnificat verses + "More honorable" refrain',
  'Katavasiae',
  'Exapostilaria / Eothina (Gospel-keyed 11-set — its own future table, §9.11a)',
  'Compline and Nocturns frames',
  'weekday Matins/Compline frame elements named in rubrics ("It is truly meet", Trisagion, First Hour)',
];

// ── §4.12 Common Theotokia tables (Theotokia.pdf, source 8) ──────────────────
// Three first-class tables mirroring the source's own table structure; each
// cell is a print site (§9.8). The gate never merges a table cell with a
// chapter position.
export const THEOTOKIA_TABLES = [
  'resurrectional_theotokia',      // tone-keyed {dogmatikon, aposticha_theotokion, dismissal_theotokion}
  'doxasticon_theotokia',          // (day+slot) × tone — Part 2
  'dismissal_theotokia_annual',    // day-pair × tone — Part 3
];
export const DOXASTICON_SLOTS = [
  'sun_eve_aposticha', 'mon_praises', 'mon_eve_aposticha', 'tue_praises',
  'wed_eve_aposticha', 'thu_praises', 'fri_eve_aposticha', 'sat_praises',
];

// ── Placeholder patterns (§6) ────────────────────────────────────────────────
export const PLACEHOLDER_PATTERNS = [
  /TODO/i,
  /not yet encoded/i,
  /^\s*\.\.\.\s*$/,
  /\[Glory from Menaion[^\]]*\]/i,   // the V1 bracketed-rubric anti-pattern (§2.6)
];

// ── Recurrence-register relations (§2.3a, amendment A) ───────────────────────
//   identical — gate requires BYTE-MATCH (text and pointing)
//   variant   — gate requires the two texts NOT to byte-match
//   family    — same hymn family attested, but byte-status NOT pinned by the
//               spec prose (e.g. the irmos-suite recurrences): informational
//               only; upgraded to identical/variant during encoding, in the
//               same commit as the data (§2.3a). [Extension beyond the spec's
//               identical|variant — flagged for Bill's review, July 7 2026.]
export const RECURRENCE_RELATIONS = ['identical', 'variant', 'family'];
