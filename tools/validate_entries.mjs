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
//   Check F — Register + provenance lint (encoding_rule_v2.md §11 #17–18):
//             F-1 register — stored hymnography is traditional thou/thy. A hymn text is
//             flagged if (a) it carries a capitalized standalone You/Your/Yours
//             (reverential capitalization for God), OR (b) it carries lowercase
//             you/your/yours AND none of thee/thou/thy/thine/ye (rule (b) is the
//             discriminator: genuine traditional PLURAL address always co-occurs with
//             ye/thou/thy and passes; contemporary text uses only you/your and flags).
//             F-2 provenance — flag any entry whose header comments or note contain the
//             substring "No PDF" or "No AT LITURGY" (100% false-positive in the audit).
//             WARNING by default; fatal under --strict. Skipped entirely under --editor
//             (per-sticheron save path) to keep that path quiet.
//
// Run: node tools/validate_entries.mjs [--strict] [--editor]
//   exit 1 on any Check A/B violation (always) or any Check C/F gap (only with --strict);
//   exit 0 when clean (Check C/F gaps still print as warnings).
//
// To add a GENUINELY new field, add it to KNOWN_FIELDS deliberately — that is the
// gate. The list was seeded from the union of all shipped Menaion + Pentecostarion
// entries; regenerate with the snippet in the repo notes if the vocabulary grows.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync } from 'node:fs';
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
  'stichera_both_now', 'stichera_glory', 'stichera_glory_absent',
  'stichera_lord_i_call',
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

// Check F — register + provenance lint (encoding_rule_v2.md §11 #17–18).
// Scalar hymn fields: an object carrying a string `text`. Plain-string pointers
// (e.g. aposticha_both_now: "Octoechos (...)") and {source,...} objects without a
// `text` are intentionally skipped — they hold no liturgical text to register-check.
const F1_SCALAR_FIELDS = [
  'stichera_glory', 'lic_theotokion', 'troparion', 'kontakion_ode6',
  'litya_glory', 'litya_both_now', 'aposticha_glory', 'aposticha_both_now',
];
// Array hymn fields: each element may be an object carrying a string `text`.
// (litya[] in the spec == litya_stichera.)
const F1_ARRAY_FIELDS = ['stichera_lord_i_call', 'litya_stichera', 'stichera_aposticha'];

const CAP_YOU = /\b(?:Yours|Your|You)\b/;            // F-1a — case-sensitive capitalized set
const LOWER_YOU = /\b(?:yours|your|you)\b/;          // F-1b — case-sensitive lowercase set
const TRAD_MARK = /\b(?:thee|thou|thy|thine|ye)\b/i; // discriminator — case-insensitive (Thy/Thou/Ye)

const PROVENANCE_PHRASES = ['No PDF', 'No AT LITURGY']; // F-2 substrings

const strict = process.argv.includes('--strict');
// --editor: per-save runs from the in-context editor. Downgrades Check E's
// intra-array pointing-consistency violation to a warning so a stichera array can
// be pointed one sticheron at a time. Malformed markers and Check A/B/D stay fatal.
// The push gate (no flag) keeps it fatal — a half-pointed array must not be pushed.
// Check F is skipped entirely under --editor (kept out of the lenient path).
const editorMode = process.argv.includes('--editor');

const problems = [];
const warnings = [];
const fWarnings = [];                    // Check F (register + provenance)
const provenanceSeenKeys = new Set();    // scan a key's header comments only once

// Build a map of top-level entry key → joined full-line header comments, read from
// the raw source (the parsed module strips comments). Handles quoted ("05-16") and
// bare (19) top-level keys at 2-space indent; deeper quoted field keys are excluded.
function buildCommentMap(fileUrl) {
  const map = new Map();
  let src;
  try {
    src = readFileSync(fileUrl, 'utf8');
  } catch {
    return map; // missing/unreadable source → no comment scan for this file
  }
  const keyRe = /^  (?:"([^"]+)"|([\w-]+)):\s*[[{]/;
  const commentRe = /^\s*\/\//;
  let current = null;
  for (const line of src.split('\n')) {
    const km = line.match(keyRe);
    if (km) {
      current = km[1] ?? km[2];
      if (!map.has(current)) map.set(current, []);
      continue;
    }
    if (current && commentRe.test(line)) map.get(current).push(line);
  }
  for (const [k, v] of map) map.set(k, v.join('\n'));
  return map;
}

const COMMENT_MAPS = {
  'Pentecostarion': buildCommentMap(new URL('../src/data/pentecostarion.js', import.meta.url)),
  'Menaion/may': buildCommentMap(new URL('../src/data/menaion/may.js', import.meta.url)),
  'Menaion/june': buildCommentMap(new URL('../src/data/menaion/june.js', import.meta.url)),
  'Menaion/july': buildCommentMap(new URL('../src/data/menaion/july.js', import.meta.url)),
};

// Collect {path, text} for every in-scope hymn object carrying a string `text`.
function f1Texts(entry) {
  const out = [];
  for (const f of F1_SCALAR_FIELDS) {
    const v = entry[f];
    if (v && typeof v === 'object' && typeof v.text === 'string') {
      out.push({ path: f, text: v.text });
    }
  }
  for (const f of F1_ARRAY_FIELDS) {
    const arr = entry[f];
    if (Array.isArray(arr)) {
      arr.forEach((it, i) => {
        if (it && typeof it === 'object' && typeof it.text === 'string') {
          out.push({ path: `${f}[${i}]`, text: it.text });
        }
      });
    }
  }
  return out;
}

function checkEntry(label, entry, kind, key, locPrefix, commentBlob) {
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

  // Check D — stichera_glory_absent integrity
  // This field marks a verified-absent doxasticon (Fekula "if there be one").
  // Must be boolean true; must not coexist with stichera_glory; only meaningful
  // on §2A/§2C ranks (simple, six_stichera) where "if there be one" applies.
  if ('stichera_glory_absent' in entry) {
    if (entry.stichera_glory_absent !== true) {
      problems.push(`${label}: stichera_glory_absent must be boolean true (not ${JSON.stringify(entry.stichera_glory_absent)}).`);
    }
    if (entry.stichera_glory != null) {
      problems.push(`${label}: stichera_glory_absent is set but stichera_glory is also present — remove one.`);
    }
    if (entry.rank && !['simple', 'six_stichera'].includes(entry.rank)) {
      problems.push(`${label}: stichera_glory_absent used on rank "${entry.rank}" — only valid for simple/six_stichera (§2A/§2C). Higher ranks always have a doxasticon.`);
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

  // Check E — pointing marker well-formedness and intra-array consistency.
  // Rule: if any text item in a stichera array carries pointing markers
  // (* /** or | //), ALL text items in that array must carry markers.
  // A fully-unmarked array passes (source may have had no structured markers).
  // A fully-marked array passes.
  // A mixed array (some marked, some not) fails — indicates incomplete encoding.
  // Also fails if markers appear without surrounding spaces (malformed).
  function checkSticheraMarkers(items, fieldName) {
    if (!Array.isArray(items)) return;
    const textItems = items.filter(s => s && s.text);
    if (textItems.length === 0) return;
    // Malformed: * present but not as space-delimited ' * ' or ' ** '
    textItems.forEach((s, i) => {
      const stripped = s.text.replace(/ \*\* /g, ' ').replace(/ \* /g, ' ');
      if (/\*/.test(stripped)) {
        problems.push(`${label}: ${fieldName}[${i}] has unspaced marker character — use ' * ' and ' ** ' (space-delimited).`);
      }
    });
    // Intra-array consistency
    const hasMarker = (t) => / \* /.test(t) || / \*\* /.test(t) || /\s\|\s/.test(t) || /\s\/\/\s/.test(t);
    const markedCount = textItems.filter(s => hasMarker(s.text)).length;
    if (markedCount > 0 && markedCount < textItems.length) {
      (editorMode ? warnings : problems).push(`${label}: ${fieldName} — ${markedCount}/${textItems.length} items have pointing markers; all must match. Encode markers on unmarked items or confirm source had none.`);
    }
  }
  checkSticheraMarkers(entry.stichera_lord_i_call, 'stichera_lord_i_call');
  checkSticheraMarkers(entry.stichera_aposticha, 'stichera_aposticha');
  checkSticheraMarkers(entry.stichera_matins_aposticha, 'stichera_matins_aposticha');

  // Check F — register + provenance lint (skipped under --editor)
  if (!editorMode) {
    // F-1 register
    for (const { path, text } of f1Texts(entry)) {
      const cap = text.match(CAP_YOU);
      if (cap) {
        fWarnings.push(`${key} · ${locPrefix}${path} · ${cap[0]} (F-1a)`);
        continue; // one finding per field is enough
      }
      const low = text.match(LOWER_YOU);
      if (low && !TRAD_MARK.test(text)) {
        fWarnings.push(`${key} · ${locPrefix}${path} · ${low[0]} (F-1b)`);
      }
    }
    // F-2 provenance — note (per entry) + header comments (once per key)
    if (typeof entry.note === 'string') {
      for (const p of PROVENANCE_PHRASES) {
        if (entry.note.includes(p)) fWarnings.push(`${key} · ${locPrefix}note · "${p}" (F-2)`);
      }
    }
    if (commentBlob && !provenanceSeenKeys.has(key)) {
      for (const p of PROVENANCE_PHRASES) {
        if (commentBlob.includes(p)) fWarnings.push(`${key} · (header comments) · "${p}" (F-2)`);
      }
      provenanceSeenKeys.add(key);
    }
  }
}

function walk(name, data, kind) {
  const commentMap = COMMENT_MAPS[name];
  for (const key of Object.keys(data)) {
    const raw = data[key];
    const list = Array.isArray(raw) ? raw : [raw];
    const commentBlob = commentMap ? commentMap.get(key) : undefined;
    list.forEach((entry, i) => {
      const label = list.length > 1 ? `${name}[${key}][${i}]` : `${name}[${key}]`;
      const locPrefix = list.length > 1 ? `[${i}].` : '';
      checkEntry(label, entry, kind, key, locPrefix, commentBlob);
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
  console.error(`\n${tag} Stichera warnings (completeness / pointing consistency): ${warnings.length}:\n`);
  for (const w of warnings) console.error('  • ' + w);
  console.error(
    strict
      ? '\n--strict: warnings are treated as failures. Enter the stichera, finish pointing the array, or add a stichera_lord_i_call_note.'
      : '\nThese are warnings (non-fatal). Run with --strict to gate on them once the data is filled in.'
  );
} else if (problems.length === 0) {
  console.log('✓ Stichera completeness (Check C): all rank-bearing Menaion entries carry Lord-I-Call stichera.');
}

if (!editorMode) {
  if (fWarnings.length > 0) {
    const tag = strict ? '✗' : '⚠';
    console.error(`\n${tag} Check F (register + provenance lint): ${fWarnings.length}:\n`);
    for (const w of fWarnings) console.error('  • ' + w);
    console.error(
      strict
        ? '\n--strict: Check F warnings are treated as failures. Conform contemporary You/Your to the thou/thy register, and re-verify or remove "No PDF"/"No AT LITURGY" provenance comments (encoding_rule_v2.md §11 #17–18).'
        : '\nThese are warnings (non-fatal). Run with --strict to gate on them. (See encoding_rule_v2.md §11 #17–18.)'
    );
  } else if (problems.length === 0) {
    console.log('✓ Check F (register + provenance): all scanned hymn fields use the traditional register; no stale provenance comments.');
  }
}

const failed = problems.length > 0 || (strict && (warnings.length > 0 || fWarnings.length > 0));
process.exit(failed ? 1 : 0);
