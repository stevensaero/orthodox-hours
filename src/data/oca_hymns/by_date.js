// BACKEND ONLY. What the OCA appointed on one date in one year, read through the
// hand-kept slots.js. RULED 15 Nov 2026: the running tool never takes anything from
// an OCA document by its date; these are for the tests and tools that COMPARE the
// tool's own render of a day with the OCA text for that day, to hone the tool's
// logic and settle disputes. Nothing under src/components or src/lib may import this
// file (tools/validate_oca_hymns.mjs fails if one does).
import { OCA_SLOTS } from './slots.js';
import { loadOcaDoc, ocaTexts, ocaNode, ocaVespersReadings, ocaLiturgyPropers } from './index.js';

// The OCA hymn for one slot of one Menaion date, or null. Returned as a V2-shaped
// text node (tier 3, director pointing) so every consumer reads it like any other.
export async function ocaHymn(key, slot) {
  const ref = OCA_SLOTS[key]?.[slot];
  if (!ref) return null;
  const doc = await loadOcaDoc(ref.doc);
  const hit = doc && ocaTexts(doc).find((t) => t.head === ref.head && (ref.p == null || t.p[0] === ref.p));
  if (!hit) return null;
  return { ...ocaNode(hit, doc, ref.doc), type: slot, ...(ref.replaces ? { replaces: ref.replaces } : {}) };
}
export const ocaSlotsForKey = (key) => Object.keys(OCA_SLOTS[key] || {});

// The OCA hymns for a date, as { slot: node }, or null when there are none.
export async function ocaAppointed(key) {
  const out = {};
  for (const s of ocaSlotsForKey(key)) { const n = await ocaHymn(key, s); if (n) out[s] = n; }
  return Object.keys(out).length ? out : null;
}

// The Vespers readings, for a Menaion date that has a mapped OCA document; [] when it has none.
export async function ocaVespersReadingsFor(key) {
  const ref = Object.values(OCA_SLOTS[key] || {})[0];
  const doc = ref ? await loadOcaDoc(ref.doc) : null;
  return doc ? ocaVespersReadings(doc) : [];
}

export async function ocaLiturgyPropersFor(key) {
  const ref = Object.values(OCA_SLOTS[key] || {})[0];
  const doc = ref ? await loadOcaDoc(ref.doc) : null;
  return doc ? ocaLiturgyPropers(doc) : null;
}

