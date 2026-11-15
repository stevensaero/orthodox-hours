// Every hymn the tool's own books hold, for matching OCA texts against
// (tools/match_oca_hymns.mjs) and for checking the match register
// (tools/validate_oca_hymns.mjs). One entry per distinct TEXT: a hymn printed at
// several places is one hymn with several paths.
import { MONTHS, loadMenaionV2Month } from '../../src/data/menaion_v2/index.js';
import { loadV2Tone, v2Shared, v2Theotokia } from '../../src/data/octoechos_v2/adapter.js';

import { textKey } from '../../src/data/oca_hymns/text_key.js';
export const textHash = textKey;

// Rubrics, notes and headings are not hymns; neither is anything under 60
// characters (a prokeimenon or a verse is too short to match by wording).
const NOT_A_HYMN = /rubric|note|title|order|preface|heading|refrain|verse|source|provenance|name\b/i;
export const MIN_LEN = 60;
// Psalm verses, wherever they sit: a prokeimenon, an Alleluia, a communion hymn
// and the tables of them are Scripture, not hymnography, and are not matched.
const VERSES = /prokeimen|alleluia|communion|liturgy_propers|_verses|verse_ladder/i;

function walk(root, base, book, out, tone0 = null) {
  (function rec(v, path, tone) {
    if (Array.isArray(v)) {
      let t = tone;   // the stichera of a group follow the tone printed on the first
      v.forEach((x, i) => { if (x && typeof x === 'object' && x.tone != null) t = x.tone; rec(x, `${path}[${i}]`, t); });
      return;
    }
    if (!v || typeof v !== 'object') return;
    const key = path.slice(path.lastIndexOf('.') + 1);
    if (typeof v.text === 'string' && v.text.length >= MIN_LEN && !NOT_A_HYMN.test(key) && !VERSES.test(path) && v.label !== 'rubric') {
      out.push({ book, path, text: v.text, tone: v.tone ?? tone ?? null, melody: v.spec_mel ?? null });
    }
    for (const [k, x] of Object.entries(v)) if (k !== 'src' && x && typeof x === 'object') rec(x, `${path}.${k}`, v.tone ?? tone);
  })(root, base, tone0);
}

/** @returns {Promise<{ hymns: Map<hash, {hash,text,tone,melody,paths:[{book,path}]}>, byPath: Map<'book:path', hash> }>} */
export async function loadHymnPool() {
  const nodes = [];
  for (const mm of MONTHS) {
    const data = await loadMenaionV2Month(mm);
    if (!data) continue;
    for (const key of Object.keys(data).sort()) (data[key].commemorations || []).forEach((c, i) => walk(c, `${key}.c${i}`, 'menaion', nodes));
  }
  for (let t = 1; t <= 8; t++) { const tone = await loadV2Tone(t); if (tone) walk(tone, `tone${t}`, 'octoechos', nodes, t); }
  walk(v2Shared, 'shared', 'octoechos', nodes);
  walk(v2Theotokia, 'theotokia', 'octoechos', nodes);
  const hymns = new Map(); const byPath = new Map();
  for (const n of nodes) {
    const hash = textHash(n.text);
    if (!hymns.has(hash)) hymns.set(hash, { hash, text: n.text, tone: n.tone, melody: n.melody, paths: [] });
    const h = hymns.get(hash);
    if (h.text !== n.text) throw new Error(`text key collision: ${n.book}:${n.path} and ${h.paths[0].book}:${h.paths[0].path}`);
    h.paths.push({ book: n.book, path: n.path });
    if (h.tone == null) h.tone = n.tone;
    if (!h.melody) h.melody = n.melody;
    byPath.set(`${n.book}:${n.path}`, hash);
  }
  return { hymns, byPath };
}
