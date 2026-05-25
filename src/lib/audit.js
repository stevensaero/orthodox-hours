// audit.js — Shared encoding completeness checks
// Used by: scripts/audit.js (CLI), menaion-browser.jsx, pentecostarion-browser.jsx
// Rule: an entry is NOT complete until every required field is present
// AND no field contains placeholder text.

export const MENAION_REQUIRED = [
  'source_file', 'rank', 'fekula_section', 'has_great_doxology', 'has_polyeleos',
  'has_litya', 'has_paroemias', 'magnificat_sung', 'matins_format', 'feast_e',
  'aposticha_source', 'stichera_lord_i_call', 'troparion', 'kontakion_ode6',
];

export const PENT_REQUIRED = [
  'hours_format', 'matins_format', 'has_great_doxology', 'feast_e',
  'aposticha_source', 'stichera_lord_i_call', 'troparion',
];

const PLACEHOLDER_PATTERNS = [
  /\[Menaion sticheron/i,
  /\[stichera not yet/i,
  /\[NYE\]/i,
  /not yet encoded/i,
  /Track B/i,
  /Phase 2/i,
  /to be encoded/i,
];

/**
 * Check if a string value contains placeholder text.
 */
function hasPlaceholderText(value) {
  if (typeof value !== 'string') return false;
  return PLACEHOLDER_PATTERNS.some(p => p.test(value));
}

/**
 * Deep-search an object for any placeholder text in string values.
 */
function containsPlaceholder(obj) {
  if (obj === null || obj === undefined) return false;
  if (typeof obj === 'string') return hasPlaceholderText(obj);
  if (Array.isArray(obj)) return obj.some(containsPlaceholder);
  if (typeof obj === 'object') {
    return Object.values(obj).some(containsPlaceholder);
  }
  return false;
}

/**
 * Audit a single Menaion entry object.
 * Returns { status: 'complete'|'partial'|'structural', missing: string[], hasPlaceholder: boolean }
 */
export function auditMenaionEntry(entry) {
  if (!entry || typeof entry !== 'object') {
    return { status: 'structural', missing: MENAION_REQUIRED.slice(), hasPlaceholder: false };
  }

  // Handle array entries (double commemorations like 05-27)
  const target = Array.isArray(entry) ? entry[0] : entry;

  const missing = MENAION_REQUIRED.filter(field => {
    // feast_e can be null (§2A) — that counts as present
    if (field === 'feast_e') return !(field in target);
    // For objects like troparion/kontakion_ode6, check existence
    if (field === 'troparion' || field === 'kontakion_ode6') {
      return !(field in target) || target[field] === undefined;
    }
    // For stichera_lord_i_call, check it exists and is an array with content
    if (field === 'stichera_lord_i_call') {
      return !(field in target) || !Array.isArray(target[field]) || target[field].length === 0;
    }
    return !(field in target) || target[field] === undefined;
  });

  const ph = containsPlaceholder(target);

  if (missing.length === 0 && !ph) return { status: 'complete', missing: [], hasPlaceholder: false };
  if (missing.length === MENAION_REQUIRED.length) return { status: 'structural', missing, hasPlaceholder: ph };
  return { status: 'partial', missing, hasPlaceholder: ph };
}

/**
 * Audit a single Pentecostarion entry object.
 * Returns { status: 'complete'|'partial'|'structural', missing: string[], hasPlaceholder: boolean }
 */
export function auditPentecostarionEntry(entry) {
  if (!entry || typeof entry !== 'object') {
    return { status: 'structural', missing: PENT_REQUIRED.slice(), hasPlaceholder: false };
  }

  const missing = PENT_REQUIRED.filter(field => {
    if (field === 'feast_e') return !(field in entry);
    if (field === 'troparion') {
      return !(field in entry) || entry[field] === undefined;
    }
    if (field === 'stichera_lord_i_call') {
      return !(field in entry) || !Array.isArray(entry[field]) || entry[field].length === 0;
    }
    return !(field in entry) || entry[field] === undefined;
  });

  // Also check kontakion: either hours_kontakion or kontakion_ode6 must be present
  const hasKontakion = ('hours_kontakion' in entry && entry.hours_kontakion) ||
                       ('kontakion_ode6' in entry && entry.kontakion_ode6);
  if (!hasKontakion) missing.push('kontakion');

  const ph = containsPlaceholder(entry);

  if (missing.length === 0 && !ph) return { status: 'complete', missing: [], hasPlaceholder: false };
  if (missing.length >= PENT_REQUIRED.length) return { status: 'structural', missing, hasPlaceholder: ph };
  return { status: 'partial', missing, hasPlaceholder: ph };
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
