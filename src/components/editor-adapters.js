// src/components/editor-adapters.js
// Dataset adapters for the in-context editor. v1: Menaion only.
// An adapter maps a displayed entry to { datasetId, file, basePath } so a
// TextBlock can build the full AST path to any field it renders. Pentecostarion,
// Octoechos, and Triodion adapters slot in here later (same shape).

const MENAION_MONTH = { '05': 'may', '06': 'june', '07': 'july' };

export function menaionFile(dateKey) {
  const month = MENAION_MONTH[String(dateKey).slice(0, 2)];
  return month ? `src/data/menaion/${month}.js` : null;
}

// basePath = [dateKey, entryIndex] — entryIndex 0 = primary, 1+ = secondary commemorations
export function menaionCtx(dateKey, entryIndex) {
  const file = menaionFile(dateKey);
  return file ? { datasetId: 'menaion', file, basePath: [dateKey, entryIndex] } : null;
}

// Build the full field path from a ctx + the field tail (e.g. 'troparion', 'text').
export function fieldPath(ctx, ...tail) {
  return ctx ? [...ctx.basePath, ...tail] : null;
}
