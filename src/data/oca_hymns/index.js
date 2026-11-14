// OCA hymns layer: a second witness beside the Menaion capture, never mixed into it.
// docs/*.js are whole-document captures of the OCA service texts (generated; see
// tools/encoding/oca_hymns/extract.py). slots.js is the hand-kept map from a Menaion
// date to the OCA hymns that fill its places. Rulings: menaion_v2_wirein_spec.md 0.11, 5c.
import { OCA_DOCS } from './manifest.js';
import { OCA_SLOTS } from './slots.js';

const cache = new Map();
export async function loadOcaDoc(stem) {
  if (!OCA_DOCS[stem]) return null;
  if (!cache.has(stem)) cache.set(stem, OCA_DOCS[stem]().then((m) => m.default));
  return cache.get(stem);
}
export const ocaStems = () => Object.keys(OCA_DOCS);
export const ocaStemsForKey = (key) =>
  ocaStems().filter((s) => `${s.slice(5, 7)}-${s.slice(7, 9)}` === key);

// The '^' mark is stored exactly as printed (Q-0007) and hidden wherever text is shown or sung.
export const stripCaret = (text) => text.replace(/\^/g, '');

// 'Tone 1 Troparion (St. Hierotheus)' -> { tone: 1, label: 'Troparion', subject: 'St. Hierotheus' }
// Reads only what the heading prints; anything it cannot read stays null.
export function parseHead(head) {
  if (!head) return { tone: null, label: null, subject: null };
  const m = head.replace(/[[\]]/g, '').match(/^Tone (\d)(\*?)\s*(.*?)\s*(?:\(([^)]*)\))?\s*$/);
  if (!m) return { tone: null, label: head, subject: null };
  return { tone: Number(m[1]), tone_star: m[2] === '*', label: m[3] || null, subject: m[4] || null };
}

// Every text block of a document, each with the heading it stands under and the
// service division it falls in (the last heading printed in parentheses or as a
// bare section name before it). Nothing is dropped; identical text printed at more
// than one place is returned once per place.
export function ocaTexts(doc) {
  const out = []; let section = null;
  for (const b of doc.blocks) {
    if (b.k === 'heading' && !/^Tone \d/.test(b.text.replace(/[[\]]/g, ''))) section = b.text;
    if (b.k === 'text') out.push({ ...b, ...parseHead(b.head), section, file: doc.file });
  }
  return out;
}

// The OCA hymn for one slot of one Menaion date, or null. Returned as a V2-shaped
// text node (tier 3, director pointing) so every consumer reads it like any other.
export async function ocaHymn(key, slot) {
  const ref = OCA_SLOTS[key]?.[slot];
  if (!ref) return null;
  const doc = await loadOcaDoc(ref.doc);
  const hit = doc && ocaTexts(doc).find((t) => t.head === ref.head && (ref.p == null || t.p[0] === ref.p));
  if (!hit) return null;
  return {
    text: hit.text, tier: hit.pointed ? 3 : (hit.n > 1 ? 2 : 1), tone: hit.tone, director: !!hit.pointed,
    type: slot, source: 'oca', sourceLabel: 'OCA', subject: hit.subject,
    ...(hit.repeat ? { repeat: hit.repeat } : {}), ...(hit.underlined ? { underlined: hit.underlined } : {}),
    src: { file: doc.file, locus: `paragraphs ${hit.p[0]}-${hit.p[1]}` },
  };
}
export const ocaSlotsForKey = (key) => Object.keys(OCA_SLOTS[key] || {});
