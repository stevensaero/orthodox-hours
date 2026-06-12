// src/data/octoechos/schema.js
// ─────────────────────────────────────────────────────────────────────────────
// Canonical Octoechos data skeleton — the single source of truth for the drift
// gate. Interpreted by tools/validate_octoechos.mjs (wired into
// scripts/check-skeleton.mjs). This is the Octoechos analogue of FIELD_REGISTRY +
// validate_entries.mjs, adapted to the Octoechos's nested per-tone shape.
//
// Data lives in two homes:
//   • Per-tone           — src/data/octoechos/toneN.js default export (vespers + matins)
//   • Tone-independent    — src/data/octoechos/index.js named tables
//
// Enforcement philosophy (mirrors the Menaion/Pentecostarion gate):
//   - VOCABULARY guard  — every key must be blessed here; a typo or drifted name
//                         fails loudly instead of reading as "field absent".
//   - REQUIRED per section, GATED by each tone's `_encoded` marker, so partial
//                         progress (e.g. vespers done, matins stubbed) never blocks
//                         a push. A section is only checked for completeness once
//                         the tone claims it in `_encoded`.
//   - CROSS-TONE uniformity is guaranteed by construction: every tone is validated
//                         against this one schema, plus a light claimed-section
//                         key-diff in the validator as belt-and-suspenders.
//
// To add a genuinely new field, add it to the relevant `known` list here
// deliberately — that deliberate edit IS the gate.
// ─────────────────────────────────────────────────────────────────────────────

export const TONES = [1, 2, 3, 4, 5, 6, 7, 8];
export const VESPERS_DAYS = ['sat', 'sun_eve', 'mon', 'tue', 'wed', 'thu', 'fri'];

// Ode II is omitted on Sundays throughout the Octoechos.
export const CANON_ODES = [1, 3, 4, 5, 6, 7, 8, 9];

// Sections a tone may claim complete via its `_encoded` marker.
export const ENCODABLE_SECTIONS = ['vespers', 'matins'];

// ── Top level (toneN.js default export) ──────────────────────────────────────
export const TOP = {
  known: ['vespers', 'vespers_universal', 'matins', '_encoded'],
  required: ['vespers', 'vespers_universal', 'matins', '_encoded'],
};

// ── Vespers (verified uniform across all 8 tones) ────────────────────────────
export const VESPERS_UNIVERSAL = {
  known: ['weekday', 'saturday'],
  required: ['weekday', 'saturday'],
  // weekday/saturday are objects of verse-keyed arrays of strings (the fixed
  // aposticha verses), e.g. { verse_weekday_1: [".."], verse_weekday_2: [".."] }
  // and { verse_sat_1: [".."], verse_sat_2: [".."], verse_sat_3: [".."] }.
  verseKey: /^verse_(weekday|sat)_\d+$/,
};

export const VESPERS_DAY = {
  sat:     { known: ['lic', 'aposticha', 'aposticha_glory', 'dogmatikon'], required: ['lic', 'aposticha', 'aposticha_glory', 'dogmatikon'] },
  sun_eve: { known: ['lic', 'aposticha', 'aposticha_glory'],              required: ['lic', 'aposticha', 'aposticha_glory'] },
  mon:     { known: ['lic', 'aposticha', 'aposticha_glory'],              required: ['lic', 'aposticha', 'aposticha_glory'] },
  tue:     { known: ['lic', 'aposticha', 'aposticha_glory'],              required: ['lic', 'aposticha', 'aposticha_glory'] },
  wed:     { known: ['lic', 'aposticha', 'aposticha_glory'],              required: ['lic', 'aposticha', 'aposticha_glory'] },
  thu:     { known: ['lic', 'aposticha', 'aposticha_glory'],              required: ['lic', 'aposticha', 'aposticha_glory'] },
  // Friday evening: 6 stichera (doubled) + the dogmaticon in the tone of the week.
  fri:     { known: ['lic', 'lic_dogmatikon', 'aposticha', 'aposticha_glory'], required: ['lic', 'lic_dogmatikon', 'aposticha', 'aposticha_glory'] },
};

// ── Matins (enforced only when a tone's `_encoded` includes 'matins') ────────
// Shape designed from 1-1.pdf + octoechos_data_spec.md; refined during the first
// matins encode (Tone 1). Tone-INDEPENDENT material (exapostilaria, evlogitaria,
// gospel/praises stichera, katavasiae) lives in index.js, NOT here — see INDEX.
export const MATINS = {
  known: [
    'god_is_the_lord_theotokion', 'sessional_kathisma2', 'sessional_kathisma3',
    'songs_of_ascent', 'matins_prokeimenon', 'canons', 'ikos',
    'praises', 'great_doxology_troparion',
  ],
  // The Matins kontakion is the same hymn as SUNDAY_KONTAKIA[tone] (index.js), so
  // only the ikos is stored here; the kontakion is pulled from that table.
  required: [
    'god_is_the_lord_theotokion', 'sessional_kathisma2', 'sessional_kathisma3',
    'songs_of_ascent', 'matins_prokeimenon', 'canons', 'ikos',
    'praises', 'great_doxology_troparion',
  ],
};

export const SESSIONAL = { known: ['hymn_1', 'hymn_2', 'theotokion'], required: ['hymn_1', 'hymn_2', 'theotokion'] };
// hymn_1 is often verseless (sung without a preceding verse); hymn_2 carries one.
export const SESSIONAL_HYMN = { known: ['text', 'verse'], required: ['text'] };
export const MATINS_PROKEIMENON = { known: ['tone', 'text', 'verse'], required: ['tone', 'text', 'verse'] };
export const PRAISES = { known: ['stichera', 'glory'], required: ['stichera'] };
export const PRAISES_STICHERON = { known: ['verse', 'text'], required: ['text'] };
export const CANONS = { known: ['resurrection', 'cross_resurrection', 'theotokos'], required: ['resurrection', 'cross_resurrection', 'theotokos'] };
// Resurrection canon carries a per-ode irmos; the other two share its irmoi and
// carry a single canon-level refrain. `refrain` is therefore optional at canon level.
export const CANON = { known: ['refrain', 'odes'], required: ['odes'] };
export const CANON_ODE = { known: ['irmos', 'refrain', 'troparia', 'theotokion'], required: ['troparia'] };

// songs_of_ascent: an array of antiphons; each antiphon an array of stanza
// strings (final entry = Glory/Both-now). Antiphon count varies by tone (3 or 4)
// — the validator checks SHAPE (array of arrays of strings), never a fixed count.

// ── Tone-independent tables (index.js named exports) ─────────────────────────
export const INDEX = {
  // Populated, tone-keyed (1..8) — must stay covered for all 8 tones.
  toneKeyed: [
    'LIC_THEOTOKIA', 'HYPAKOE', 'RESURRECTIONAL_TROPARIA',
    'SUNDAY_KONTAKIA', 'SUNDAY_PROKEIMENON', 'SUNDAY_ALLELUIA',
  ],
  // Present-but-empty stubs to be filled later (not tone-keyed in the 1..8 sense).
  stubs: ['KATAVASIAE', 'RESURRECTION_GOSPEL_STICHERA'],
  // NEW tone-independent tables (placement decisions 1 & 2): exapostilaria are
  // taken from the Eothinon (11, by Gospel #); evlogitaria are the same every
  // Sunday. Added when first encoded; listed here so the validator blesses them.
  planned: ['EXAPOSTILARIA', 'EVLOGITARIA'],
};

// Placeholder patterns that must never survive in a CLAIMED (encoded) section.
// Note: `[Glory from Menaion if appointed]` is a legitimate rubric, not a
// placeholder, and is intentionally NOT matched here.
export const PLACEHOLDER_PATTERNS = [
  /not yet encoded/i, /\bTODO\b/, /\bPLACEHOLDER\b/i, /^\s*\.\.\.\s*$/,
];
