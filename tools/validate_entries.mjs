// ─────────────────────────────────────────────────────────────────────────────
// validate_entries.mjs — schema-conformance gate for liturgical data
//
// Closes the blind spot that let the P+63 entries ship with mis-named fields
// (litya_glory_both_now, exapostilarion_saints, stichera_praises, praises_glory)
// and missing flag blocks. The FIELD_REGISTRY audit is a COVERAGE check (for each
// canonical field, is it present?) and tolerates absent fields by design, so a
// mis-named field reads as "canonical field absent + an extra key it ignores" and
// passes silently. This validator is the complementary CONFORMANCE check:
//
//   Check A — Unknown-field guard: every entry key must be in KNOWN_FIELDS (the
//             blessed vocabulary below). A typo or a non-canonical name fails loudly.
//   Check B — Sunday-overlay flag block: all_saints_sunday / pentecostarion_sunday
//             entries must carry the full structural flag set (encoding_rule_v2.md §12).
//   Check C — Stichera completeness audit (Menaion only): an entry whose rank carries
//             Lord-I-Call stichera (§2A–§2F) must actually have stichera_lord_i_call.
//             This catches "skeleton" entries that passed the vocabulary guard while
//             their LIC stichera were never filled (e.g. the June simple saints). It is
//             a WARNING by default (non-fatal — it lists the gaps as a checklist); pass
//             --strict to promote the warnings to failures. An entry may suppress the
//             warning by carrying a stichera_lord_i_call_note documenting the source.
//
// Run: node tools/validate_entries.mjs [--strict]
//   exit 1 on any Check A/B violation (always) or any Check C gap (only with --strict);
//   exit 0 when clean (Check C gaps still print as warnings).
//
// To add a GENUINELY new field, add it to KNOWN_FIELDS deliberately — that is the
// gate. The list was seeded from the union of all shipped Menaion + Pentecostarion
// entries; regenerate with the snippet in the repo notes if the vocabulary grows.
// ─────────────────────────────────────────────────────────────────────────────

import PENT from '../src/data/pentecostarion.js';
import MAY from '../src/data/menaion/may.js';
import JUNE from '../src/data/menaion/june.js';
import JULY from '../src/data/menaion/july.js';

const KNOWN_FIELDS = new Set([
  'alleluia_2_stichos', 'alleluia_2_tone', 'alleluia_2_verse', 'alleluia_stichos',
  'alleluia_tone', 'alleluia_verse', 'aposticha_both_now', 'aposticha_glory',
  'aposticha_note', 'aposticha_source', 'beatitudes_count', 'beatitudes_ode',
  'beatitudes_source', 'beatitudes_troparia', 'canons', 'communion_verse',
  'dismissal_theotokion', 'exapostilarion', 'feast_e', 'feast_e_pentecostarion',
  'feast_g', 'fekula_section', 'fekula_section_override', 'gospel_sticheron',
  'great_doxology_troparion', 'has_great_doxology', 'has_litya', 'has_paroemias',
  'has_polyeleos', 'heavenly_king_omitted', 'heavenly_king_restored', 'hours_format',
  'hours_kontakion', 'hours_kontakion_ikos', 'ikos', 'ikos_ode3', 'ikos_ode6',
  'instead_of_it_is_truly_meet_irmos', 'instead_of_it_is_truly_meet_refrain',
  'it_is_truly_meet_suppressed', 'kontakion_ode3', 'kontakion_ode6', 'lic_theotokion',
  'litya_both_now', 'litya_glory', 'litya_stichera', 'magnificat_sung', 'magnification',
  'magnification_selected_psalm', 'matins_canon_feast', 'matins_exapostilarion_feast',
  'matins_exapostilarion_theotokion', 'matins_format', 'matins_gospel',
  'matins_gospel_number', 'matins_praises_feast', 'matins_praises_glory',
  'matins_prokeimenon', 'matins_prokeimenon_stichos', 'matins_prokeimenon_text',
  'matins_prokeimenon_tone', 'matins_sessional_post_ode3',
  'matins_sessional_post_ode3_both_now', 'matins_sessional_post_polyeleos',
  'matins_sessional_post_polyeleos_2', 'matins_sessional_post_polyeleos_both_now',
  'matins_sessional_post_polyeleos_glory', 'megalynarion', 'megalynarion_verse',
  'menaion_set_aside', 'name', 'note', 'oca_primary', 'ode9_irmos_canon1',
  'ode9_refrain', 'ode9_refrain_alt', 'paroemia_1', 'paroemia_2', 'paroemia_3',
  'prokeimenon_2_text', 'prokeimenon_2_tone', 'prokeimenon_note', 'prokeimenon_stichos',
  'prokeimenon_text', 'prokeimenon_tone', 'rank', 'reposed_e', 'reposed_g',
  'resurrection_e', 'resurrection_g', 'resurrection_kontakion', 'saint',
  'sessional_hymn_kathisma2', 'sessional_hymn_ode3', 'sessional_hymn_ode3_both_now',
  'sessional_hymn_polyeleos', 'small_doxology_read', 'source_file', 'stichera_aposticha',
  'stichera_both_now', 'stichera_glory', 'stichera_lord_i_call',
  'stichera_lord_i_call_count', 'stichera_lord_i_call_note', 'stichera_matins_aposticha',
  'stichera_matins_aposticha_both_now', 'stichera_matins_aposticha_glory',
  'stichera_praises_glory', 'theotokos_troparion', 'tone', 'trisagion_replacement',
  'troparion', 'troparion_2', 'troparion_3', 'troparion_bothnow',
  'troparion_great_doxology', 'troparion_second', 'vespers_alleluia',
  'vespers_alleluia_replaces_prokeimenon', 'vespers_kontakion', 'vespers_prokeimenon',
  'zadostoinik_irmos', 'zadostoinik_refrain',
]);

// Sunday-overlay formats that share the All Saints assembler contract.
const SUNDAY_OVERLAY_FORMATS = new Set(['all_saints_sunday', 'pentecostarion_sunday']);
const REQUIRED_OVERLAY_FLAGS = [
  'menaion_set_aside', 'has_paroemias', 'has_polyeleos',
  'heavenly_king_omitted', 'it_is_truly_meet_suppressed',
];

// Check C — ranks whose Vespers carries Lord-I-Call stichera from the Menaion saint
// (§2A simple → §2F vigil). great_feast is intentionally excluded: its propers have
// varied sourcing (often menaion_set_aside / Pentecostarion) and don't fit one rule.
const RANKS_REQUIRING_LIC = new Set(['simple', 'six_stichera', 'doxology', 'polyeleos', 'vigil']);
const SIMPLE_MIN_LIC = 3; // §2A weekday = 3 Octoechos + 3 Menaion

const strict = process.argv.includes('--strict');

const problems = [];
const warnings = [];

function checkEntry(label, entry, kind) {
  if (!entry || typeof entry !== 'object') return;

  // Check A — unknown-field guard
  for (const key of Object.keys(entry)) {
    if (!KNOWN_FIELDS.has(key)) {
      problems.push(`${label}: unknown field "${key}" — typo, or add it to KNOWN_FIELDS in tools/validate_entries.mjs if genuinely new.`);
    }
  }

  // Check B — Sunday-overlay flag block
  if (SUNDAY_OVERLAY_FORMATS.has(entry.hours_format)) {
    for (const flag of REQUIRED_OVERLAY_FLAGS) {
      if (!(flag in entry)) {
        problems.push(`${label}: hours_format "${entry.hours_format}" requires structural flag "${flag}" (encoding_rule_v2.md §12) — absent.`);
      }
    }
  }

  // Check C — stichera completeness (Menaion entries only)
  if (kind === 'menaion' && RANKS_REQUIRING_LIC.has(entry.rank)) {
    // menaion_set_aside (a Great-Feast / overlay contract) sources stichera elsewhere.
    // A stichera_lord_i_call_note documents a deliberate exception and suppresses the warning.
    const exempt = entry.menaion_set_aside === true || typeof entry.stichera_lord_i_call_note === 'string';
    const lic = entry.stichera_lord_i_call;
    const n = Array.isArray(lic) ? lic.length : 0;
    if (!exempt) {
      if (n === 0) {
        warnings.push(`${label}: rank "${entry.rank}" carries Lord-I-Call stichera, but stichera_lord_i_call is empty/absent (enter the stichera, or add a stichera_lord_i_call_note documenting the source).`);
      } else if (entry.rank === 'simple' && n < SIMPLE_MIN_LIC) {
        warnings.push(`${label}: simple/§2A entry has only ${n} Lord-I-Call sticheron(a); §2A expects ${SIMPLE_MIN_LIC} Menaion stichera.`);
      }
    }
  }
}

function walk(name, data, kind) {
  for (const key of Object.keys(data)) {
    const raw = data[key];
    const list = Array.isArray(raw) ? raw : [raw];
    list.forEach((entry, i) => {
      const label = list.length > 1 ? `${name}[${key}][${i}]` : `${name}[${key}]`;
      checkEntry(label, entry, kind);
    });
  }
}

walk('Pentecostarion', PENT, 'pentecostarion');
walk('Menaion/may', MAY, 'menaion');
walk('Menaion/june', JUNE, 'menaion');
walk('Menaion/july', JULY, 'menaion');

// ── Report ───────────────────────────────────────────────────────────────────
if (problems.length === 0) {
  console.log('✓ Entry schema conformance: all entries pass (unknown-field guard + Sunday-overlay flag block).');
} else {
  console.error(`✗ Entry schema conformance: ${problems.length} violation(s):\n`);
  for (const p of problems) console.error('  • ' + p);
  console.error('\nFix the entries (or extend KNOWN_FIELDS deliberately) before pushing.');
}

if (warnings.length > 0) {
  const tag = strict ? '✗' : '⚠';
  console.error(`\n${tag} Stichera completeness (Check C): ${warnings.length} entr${warnings.length === 1 ? 'y' : 'ies'} missing Lord-I-Call stichera:\n`);
  for (const w of warnings) console.error('  • ' + w);
  console.error(
    strict
      ? '\n--strict: completeness gaps are treated as failures. Enter the stichera or add a stichera_lord_i_call_note.'
      : '\nThese are warnings (non-fatal). Run with --strict to gate on them once the data is filled in.'
  );
} else if (problems.length === 0) {
  console.log('✓ Stichera completeness (Check C): all rank-bearing Menaion entries carry Lord-I-Call stichera.');
}

const failed = problems.length > 0 || (strict && warnings.length > 0);
process.exit(failed ? 1 : 0);
