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

export const MONTH_LABELS = {
  '01': 'January', '02': 'February', '03': 'March',     '04': 'April',
  '05': 'May',     '06': 'June',     '07': 'July',      '08': 'August',
  '09': 'September','10': 'October', '11': 'November',  '12': 'December',
};

// One line per encoded month. Add a month here and nowhere else.
export const MONTH_LOADERS = {
  // '08': () => import('./august.js').then(m => m.default),
};

const _cache = {};
export async function loadMenaionV2Month(mm) {
  if (_cache[mm]) return _cache[mm];
  const loader = MONTH_LOADERS[mm];
  if (!loader) return null;
  const data = await loader();
  _cache[mm] = data;              // the cache holds MULTIPLE months at once —
  return data;                    // feast cycles cross month edges (§2.14)
}
