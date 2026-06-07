// audit.js — Unified encoding completeness engine
// Used by: scripts/audit.js (CLI), menaion-browser.jsx, pentecostarion-browser.jsx
//
// Architecture: a single FIELD_REGISTRY drives all completeness checks for both
// Menaion and Pentecostarion entries. Each field entry declares:
//   field        — property name on the entry object
//   category     — grouping for display: identity | hours | liturgy |
//                  vespers_lic | vespers_litya | vespers_aposticha | matins | flags
//   appliesTo    — 'both' | 'menaion_only' | 'pentecostarion_only'
//   required     — (entry, type) => boolean; type is 'menaion' or 'pent'
//   description  — human-readable label for gap reports
//   check        — optional custom presence check fn(entry); default is field in entry && !== undefined
//
// Rule: an entry is NOT complete until every applicable required field is
// present AND no field contains placeholder text.

// ── PLACEHOLDER DETECTION ────────────────────────────────────────────────────

const PLACEHOLDER_PATTERNS = [
  /\[Menaion sticheron/i,
  /\[stichera not yet/i,
  /\[NYE\]/i,
  /not yet encoded/i,
  /Track B/i,
  /Phase 2/i,
  /to be encoded/i,
  /pending encoding/i,
  /\[aposticha stichera not yet/i,
];

function hasPlaceholderText(value) {
  if (typeof value !== 'string') return false;
  return PLACEHOLDER_PATTERNS.some(p => p.test(value));
}

function containsPlaceholder(obj) {
  if (obj === null || obj === undefined) return false;
  if (typeof obj === 'string') return hasPlaceholderText(obj);
  if (Array.isArray(obj)) return obj.some(containsPlaceholder);
  if (typeof obj === 'object') return Object.values(obj).some(containsPlaceholder);
  return false;
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

function isPresent(entry, field) {
  return field in entry && entry[field] !== undefined && entry[field] !== null;
}

function isNonEmptyArray(entry, field) {
  return isPresent(entry, field) && Array.isArray(entry[field]) && entry[field].length > 0;
}

// ── FIELD REGISTRY ───────────────────────────────────────────────────────────

export const FIELD_REGISTRY = [

  // ── IDENTITY ───────────────────────────────────────────────────────────────
  {
    field: 'source_file', category: 'identity', appliesTo: 'both',
    required: () => true,
    description: 'Source PDF filename (e.g. 05-21.pdf)',
  },
  {
    field: 'rank', category: 'identity', appliesTo: 'menaion_only',
    required: () => true,
    description: 'Service rank: simple | six_stichera | doxology | polyeleos | vigil',
  },
  {
    field: 'fekula_section', category: 'identity', appliesTo: 'both',
    required: () => true,
    description: 'Fekula section governing assembly (e.g. 2A, 4B15)',
  },
  {
    field: 'hours_format', category: 'identity', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'Assembly engine signal (e.g. pentecostarion_weekday, pentecost)',
  },
  {
    field: 'oca_primary', category: 'identity', appliesTo: 'both',
    required: () => true,
    description: 'OCA calendar is primary source (boolean)',
  },
  {
    field: 'note', category: 'identity', appliesTo: 'both',
    required: () => true,
    description: 'Encoding notes: OCA divergences, rubrical flags, never blank',
    check: (entry) => typeof entry.note === 'string' && entry.note.trim().length > 0,
  },

  // ── HOURS (troparia / kontakia) ────────────────────────────────────────────
  {
    field: 'troparion', category: 'hours', appliesTo: 'both',
    required: () => true,
    description: 'Primary troparion (tone + text)',
    check: (entry) => isPresent(entry, 'troparion') &&
      (typeof entry.troparion === 'object'
        ? !!(entry.troparion.text)
        : typeof entry.troparion === 'string'),
  },
  {
    field: 'kontakion_ode6', category: 'hours', appliesTo: 'menaion_only',
    required: () => true,
    description: 'Kontakion after Ode VI (used at 3rd & 9th Hours)',
    check: (entry) => isPresent(entry, 'kontakion_ode6') && !!(entry.kontakion_ode6.text),
  },
  {
    field: 'kontakion', category: 'hours', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'Kontakion: hours_kontakion or kontakion_ode6 must be present',
    check: (entry) =>
      (isPresent(entry, 'hours_kontakion') && !!(entry.hours_kontakion.text)) ||
      (isPresent(entry, 'kontakion_ode6') && !!(entry.kontakion_ode6.text)),
  },

  // ── LITURGY PROPERS ────────────────────────────────────────────────────────
  {
    field: 'feast_e', category: 'liturgy', appliesTo: 'both',
    // feast_e can be null for §2A (no propers) — counts as present if key exists
    required: () => true,
    description: 'Epistle reading (or explicit null for §2A)',
    check: (entry) => 'feast_e' in entry,
  },
  {
    field: 'feast_g', category: 'liturgy', appliesTo: 'both',
    required: () => true,
    description: 'Gospel reading (or explicit null for §2A)',
    check: (entry) => 'feast_g' in entry,
  },
  {
    field: 'prokeimenon_text', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    description: 'Prokeimenon text',
  },
  {
    field: 'prokeimenon_tone', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    description: 'Prokeimenon tone',
  },
  {
    field: 'prokeimenon_stichos', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    description: 'Prokeimenon stichos verse',
  },
  {
    field: 'alleluia_tone', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    description: 'Alleluia tone number',
  },
  {
    field: 'alleluia_verse', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    description: 'Alleluia verse',
  },
  {
    field: 'alleluia_stichos', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    // alleluia_stichos may legitimately be null (e.g. P+56 T8 alleluia has no stichos)
    // The key must exist; null is an acceptable explicit value
    check: (entry) => 'alleluia_stichos' in entry,
    description: 'Alleluia stichos verse (or explicit null if absent in source)',
  },
  {
    field: 'communion_verse', category: 'liturgy', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return entry.rank !== 'simple' && entry.feast_e !== null;
      return isPresent(entry, 'feast_e') && entry.feast_e !== null;
    },
    description: 'Communion verse',
  },

  // ── VESPERS: LORD I HAVE CRIED ─────────────────────────────────────────────
  {
    field: 'stichera_lord_i_call', category: 'vespers_lic', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') {
        return ['six_stichera', 'doxology', 'polyeleos', 'vigil'].includes(entry.rank);
      }
      // Pentecostarion: required for Great Feasts (menaion_set_aside).
      // IMPORTANT: check the field VALUE not === true, so missing flag doesn't hide the requirement.
      // If an entry has stichera_lord_i_call encoded, it should be correct regardless of flag.
      // Require it when: menaion_set_aside is true OR when stichera are already present (consistency).
      return entry.menaion_set_aside === true;
    },
    description: 'Lord I Have Cried stichera array',
    check: (entry) => isNonEmptyArray(entry, 'stichera_lord_i_call'),
  },
  {
    field: 'stichera_lord_i_call_count', category: 'vespers_lic', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') {
        return ['six_stichera', 'doxology', 'polyeleos', 'vigil'].includes(entry.rank);
      }
      return entry.menaion_set_aside === true;
    },
    description: 'LIC stichera count (6 | 8 | 10)',
  },
  {
    field: 'stichera_glory', category: 'vespers_lic', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') {
        return ['six_stichera', 'doxology', 'polyeleos', 'vigil'].includes(entry.rank);
      }
      return entry.menaion_set_aside === true;
    },
    description: 'LIC Glory doxasticon (tone + text, or null if §2B no doxasticon)',
    check: (entry) => {
      if (!('stichera_glory' in entry)) return false;
      if (entry.stichera_glory === null) return true;
      return typeof entry.stichera_glory === 'object' ? !!(entry.stichera_glory.text) : true;
    },
  },

  // ── VESPERS: LITIYA ────────────────────────────────────────────────────────
  {
    field: 'litya_stichera', category: 'vespers_litya', appliesTo: 'both',
    required: (entry) => entry.has_litya === true,
    description: 'Litiya stichera array (may be empty [] if PDF has none)',
    check: (entry) => isPresent(entry, 'litya_stichera') && Array.isArray(entry.litya_stichera),
  },
  {
    field: 'litya_glory', category: 'vespers_litya', appliesTo: 'both',
    required: (entry) => entry.has_litya === true,
    description: 'Litiya Glory sticheron (tone + text, or null)',
  },
  {
    field: 'litya_both_now', category: 'vespers_litya', appliesTo: 'both',
    required: (entry) => entry.has_litya === true,
    description: 'Litiya Both Now theotokion (tone + text, or null)',
  },

  // ── VESPERS: PROKEIMENON ───────────────────────────────────────────────────
  {
    field: 'vespers_prokeimenon', category: 'vespers_lic', appliesTo: 'pentecostarion_only',
    required: (entry) => {
      // Required on all Pentecostarion entries except those where alleluia replaces
      // prokeimenon (Saturday of Reposed, vespers_alleluia_replaces_prokeimenon: true)
      if (entry.vespers_alleluia_replaces_prokeimenon === true) return false;
      return true;
    },
    description: 'Vespers prokeimenon (tone, text, verses, type)',
    check: (entry) => 'vespers_prokeimenon' in entry,
  },

  // ── VESPERS: APOSTICHA ─────────────────────────────────────────────────────
  {
    field: 'aposticha_source', category: 'vespers_aposticha', appliesTo: 'both',
    required: () => true,
    description: 'Aposticha source: octoechos | menaion | pentecostarion',
  },
  {
    field: 'stichera_aposticha', category: 'vespers_aposticha', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') {
        return ['doxology', 'polyeleos', 'vigil'].includes(entry.rank);
      }
      // Pentecostarion: required for Great Feasts and their apodoses
      return entry.menaion_set_aside === true ||
             entry.hours_format === 'apodosis_pentecost' ||
             entry.hours_format === 'apodosis_ascension';
    },
    description: 'Aposticha stichera array (with interspersed psalm verses)',
    check: (entry) => isNonEmptyArray(entry, 'stichera_aposticha'),
  },
  {
    field: 'aposticha_glory', category: 'vespers_aposticha', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') {
        return ['doxology', 'polyeleos', 'vigil'].includes(entry.rank);
      }
      return entry.menaion_set_aside === true ||
             entry.hours_format === 'apodosis_pentecost' ||
             entry.hours_format === 'apodosis_ascension';
    },
    description: 'Aposticha Glory doxasticon (tone + text)',
    check: (entry) => isPresent(entry, 'aposticha_glory') &&
      (typeof entry.aposticha_glory === 'object' ? !!(entry.aposticha_glory.text) : true),
  },
  {
    field: 'aposticha_both_now', category: 'vespers_aposticha', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') {
        return ['doxology', 'polyeleos', 'vigil'].includes(entry.rank);
      }
      return entry.menaion_set_aside === true ||
             entry.hours_format === 'apodosis_pentecost' ||
             entry.hours_format === 'apodosis_ascension';
    },
    description: 'Aposticha Both Now theotokion (tone + text, or null if Octoechos governs)',
    // null is valid: means the invariable Octoechos theotokion governs
    check: (entry) => 'aposticha_both_now' in entry,
  },

  // ── MATINS: APOSTICHA ──────────────────────────────────────────────────────
  // Required on all Pentecostarion entries. null is valid (NOT YET ENCODED marker
  // when Matins assembler not yet built). The key must be present.
  {
    field: 'stichera_matins_aposticha', category: 'matins', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'Matins aposticha stichera array (or null if NOT YET ENCODED)',
    check: (entry) => 'stichera_matins_aposticha' in entry,
  },
  {
    field: 'stichera_matins_aposticha_glory', category: 'matins', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'Matins aposticha Glory doxasticon (or null if NOT YET ENCODED)',
    check: (entry) => 'stichera_matins_aposticha_glory' in entry,
  },

  // ── MATINS ─────────────────────────────────────────────────────────────────
  {
    field: 'matins_format', category: 'matins', appliesTo: 'both',
    required: () => true,
    description: 'Matins opening: god_is_the_lord | alleluia',
  },
  {
    field: 'has_great_doxology', category: 'matins', appliesTo: 'both',
    required: () => true,
    description: 'Great Doxology sung at Matins (boolean)',
  },
  {
    field: 'magnificat_sung', category: 'matins', appliesTo: 'both',
    required: () => true,
    description: 'Magnificat sung at Matins (boolean)',
  },
  {
    field: 'has_polyeleos', category: 'matins', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return ['polyeleos', 'vigil'].includes(entry.rank);
      // Pentecostarion: required on all Sundays and Great Feasts
      return entry.menaion_set_aside === true ||
             (entry.hours_format || '').includes('sunday') ||
             entry.hours_format === 'all_saints_sunday' ||
             entry.hours_format === 'pentecost' ||
             entry.hours_format === 'all_saints_sunday';
    },
    description: 'Polyeleos sung at Matins (boolean)',
  },
  {
    field: 'matins_gospel', category: 'matins', appliesTo: 'menaion_only',
    required: (entry) => ['polyeleos', 'vigil'].includes(entry.rank),
    description: 'Matins Gospel reading (§2E/§2F)',
  },
  {
    field: 'beatitudes_source', category: 'matins', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return ['polyeleos', 'vigil'].includes(entry.rank);
      return entry.menaion_set_aside === true ||
             (entry.hours_format || '').includes('sunday') ||
             entry.hours_format === 'all_saints_sunday' ||
             entry.hours_format === 'pentecost';
    },
    description: 'Beatitudes source description (e.g. "6 verses from Ode VI")',
    check: (entry) => typeof entry.beatitudes_source === 'string' && entry.beatitudes_source.length > 0,
  },
  {
    field: 'beatitudes_troparia', category: 'matins', appliesTo: 'both',
    required: (entry, type) => {
      if (type === 'menaion') return ['polyeleos', 'vigil'].includes(entry.rank);
      // Pentecostarion: required on Sundays and Great Feasts
      return entry.menaion_set_aside === true ||
             (entry.hours_format || '').includes('sunday') ||
             entry.hours_format === 'all_saints_sunday' ||
             entry.hours_format === 'pentecost';
    },
    description: 'Beatitudes troparia array (§2E/§2F; Pentecostarion Sundays and Great Feasts)',
    check: (entry) => isNonEmptyArray(entry, 'beatitudes_troparia'),
  },

  // ── FLAGS ──────────────────────────────────────────────────────────────────
  {
    field: 'has_litya', category: 'flags', appliesTo: 'both',
    required: () => true,
    description: 'Litiya served (boolean)',
  },
  {
    field: 'has_paroemias', category: 'flags', appliesTo: 'both',
    required: () => true,
    description: 'OT paroemias at Vespers (boolean)',
  },
  {
    field: 'paroemia_1', category: 'flags', appliesTo: 'both',
    required: (entry) => entry.has_paroemias === true || !!entry.paroemia_1,
    description: 'First OT paroemia reference',
  },
  {
    field: 'menaion_set_aside', category: 'flags', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'Menaion entirely set aside — Great Feast governs (boolean)',
  },
  {
    field: 'heavenly_king_omitted', category: 'flags', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'O Heavenly King omitted at Hours (Ascension through eve of Pentecost)',
  },
  {
    field: 'it_is_truly_meet_suppressed', category: 'flags', appliesTo: 'pentecostarion_only',
    required: () => true,
    description: 'It Is Truly Meet suppressed; zadostoinik sung instead (Pascha through Pentecost)',
  },
];

// ── CORE AUDIT FUNCTION ──────────────────────────────────────────────────────

/**
 * Audit a single entry (Menaion or Pentecostarion).
 * type: 'menaion' | 'pent'
 *
 * Returns array of result objects, one per applicable required field:
 *   { field, category, description, present, gap }
 *
 * Also returns: { gaps: ResultObj[], hasPlaceholder: boolean }
 */
export function auditEntry(entry, type) {
  if (!entry || typeof entry !== 'object') return { results: [], gaps: [], hasPlaceholder: false };

  const target = Array.isArray(entry) ? entry[0] : entry;

  const results = FIELD_REGISTRY
    .filter(f => f.appliesTo === 'both' || f.appliesTo === `${type}_only`)
    .filter(f => f.required(target, type))
    .map(f => {
      const present = f.check ? f.check(target) : isPresent(target, f.field);
      return { field: f.field, category: f.category, description: f.description, present, gap: !present };
    });

  const gaps = results.filter(r => r.gap);
  const hasPlaceholder = containsPlaceholder(target);

  return { results, gaps, hasPlaceholder };
}

/**
 * Derive a summary status from auditEntry output.
 * Returns 'complete' | 'partial' | 'structural'
 */
function deriveStatus(results, gaps, hasPlaceholder) {
  if (gaps.length === 0 && !hasPlaceholder) return 'complete';
  // structural = all identity fields are missing (entry is essentially a stub)
  const identityFields = results.filter(r => r.category === 'identity');
  const allIdentityMissing = identityFields.length > 0 && identityFields.every(r => r.gap);
  if (allIdentityMissing) return 'structural';
  return 'partial';
}

// ── BACKWARD-COMPATIBLE WRAPPERS ─────────────────────────────────────────────
// These preserve the existing API used by menaion-browser.jsx,
// pentecostarion-browser.jsx, and scripts/audit.js.

/**
 * Audit a Menaion entry.
 * Returns { status, missing, gaps, hasPlaceholder }
 */
export function auditMenaionEntry(entry) {
  const { results, gaps, hasPlaceholder } = auditEntry(entry, 'menaion');
  const missing = gaps.map(g => g.field);
  const status = deriveStatus(results, gaps, hasPlaceholder);
  return { status, missing, gaps, hasPlaceholder };
}

/**
 * Audit a Pentecostarion entry.
 * Returns { status, missing, gaps, hasPlaceholder }
 */
export function auditPentecostarionEntry(entry) {
  const { results, gaps, hasPlaceholder } = auditEntry(entry, 'pent');
  const missing = gaps.map(g => g.field);
  const status = deriveStatus(results, gaps, hasPlaceholder);
  return { status, missing, gaps, hasPlaceholder };
}

/**
 * Summary stats for a set of audited entries.
 */
export function auditSummary(auditResults) {
  let complete = 0, partial = 0, structural = 0;
  for (const r of auditResults) {
    if (r.status === 'complete') complete++;
    else if (r.status === 'partial') partial++;
    else structural++;
  }
  return { complete, partial, structural, total: auditResults.length };
}

// ── FIELD REGISTRY EXPORTS ────────────────────────────────────────────────────
// For consumers that want to inspect the registry directly (e.g. a future
// detailed gap report UI).

export const FIELD_CATEGORIES = [
  'identity', 'hours', 'liturgy', 'vespers_lic',
  'vespers_litya', 'vespers_aposticha', 'matins', 'flags',
];

export function fieldsByCategory(category) {
  return FIELD_REGISTRY.filter(f => f.category === category);
}
