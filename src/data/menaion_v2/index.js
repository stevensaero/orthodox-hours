// src/data/menaion_v2/index.js
// ─────────────────────────────────────────────────────────────────────────────
// THE SINGLE POINT OF TRUTH for which months exist (§3.1).
//
// V1 duplicated this map — `_menaionLoaders` in hours-tool.jsx and
// `MONTHS_WITH_DATA` in menaion-browser.jsx, with a comment admitting the
// mirror — so adding a month meant editing two files and the browser could
// silently disagree with the assembler. Here the tool and the browser both
// import this; validate_menaion_v2.mjs asserts it matches the files on disk.
//
// Nothing month-keyed is ever statically imported (§2.14).
// ─────────────────────────────────────────────────────────────────────────────

// Iterate MONTHS, never Object.keys(MONTH_LABELS). "10", "11" and "12" are
// canonical integer keys and JS orders them FIRST; "01"-"09" carry a leading
// zero, are not integer indices, and follow in insertion order — so
// Object.keys() yields Oct Nov Dec Jan Feb … Sep. The month picker shipped in
// that order until the browser was actually rendered.
export const MONTHS = ['01','02','03','04','05','06','07','08','09','10','11','12'];

export const MONTH_LABELS = {
  '01': 'January', '02': 'February', '03': 'March',     '04': 'April',
  '05': 'May',     '06': 'June',     '07': 'July',      '08': 'August',
  '09': 'September','10': 'October', '11': 'November',  '12': 'December',
};

// One line per encoded month. Add a month here and nowhere else.
export const MONTH_LOADERS = {
  // '08': () => import('./august.js').then(m => m.default),
};

// The General Menaion is a BOOK, not a month (§6.2) — the browser surfaces it on
// its own axis. Without that, its entries are gated and validated but invisible.

// The cross-date tables load like the months — dynamically, never statically
// imported (§2.14).
let _general = null;
export async function loadMenaionV2General() {
  if (!_general) _general = (await import('./general.js')).default;
  return _general;
}
// NO loadMenaionV2Shared() until shared.js EXISTS. A dynamic import of a missing
// module is not a runtime concern the bundler forgives: Vite/rolldown resolves
// it at BUILD time and fails with UNRESOLVED_IMPORT, try/catch notwithstanding.
// That is what broke every deploy from the Phase 1 commit onward. Add the loader
// in the same change that adds the file (§6.1).

const _cache = {};
export async function loadMenaionV2Month(mm) {
  if (_cache[mm]) return _cache[mm];
  const loader = MONTH_LOADERS[mm];
  if (!loader) return null;
  const data = await loader();
  _cache[mm] = data;              // the cache holds MULTIPLE months at once —
  return data;                    // feast cycles cross month edges (§2.14)
}
