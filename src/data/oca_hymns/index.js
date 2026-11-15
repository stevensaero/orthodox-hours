// OCA hymns layer: a second witness beside the Menaion capture, never mixed into it.
// docs/*.js are whole-document captures of the OCA service texts (generated; see
// tools/encoding/oca_hymns/extract.py).
//
// RULED 15 Nov 2026: the running tool shows an OCA text only HYMN BY HYMN, through the
// match register below, inside its own logic. Nothing here answers "what does the OCA
// appoint on this date": that is by_date.js, which only the tests and tools read.
import { OCA_DOCS } from './manifest.js';
import { textKey } from './text_key.js';

// A hymn printed in more than one document is stored once, in library.js, and its
// blocks carry only the id. The words are put back here, so every reader of a
// document gets it whole and as printed.
let library = null;
const loadLibrary = () => (library ??= import('./library.js').then((m) => m.default));
const cache = new Map();
export async function loadOcaDoc(stem) {
  if (!OCA_DOCS[stem]) return null;
  if (!cache.has(stem)) cache.set(stem, Promise.all([OCA_DOCS[stem](), loadLibrary()]).then(([m, lib]) => ({
    ...m.default,
    blocks: m.default.blocks.map((b) => {
      if (b.k !== 'text' || b.text != null) return b;
      const text = lib[b.id];
      if (text == null) throw new Error(`OCA hymn ${b.id} is not in the library (${stem})`);
      return { ...b, text, ...(text.includes('[') ? { pointed: true } : {}) };
    }),
  })));
  return cache.get(stem);
}
// When and where a document was published, for marking a text shown from it.
export const ocaDocInfo = (stem) => { const m = /^(\d{4})-(\d\d)(\d\d)-texts-(.*)$/.exec(stem); return m ? { stem, year: Number(m[1]), key: `${m[2]}-${m[3]}`, date: `${m[1]}-${m[2]}-${m[3]}`, variant: m[4] } : null; };
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

// The readings an OCA document appoints at Vespers: the references it heads them
// with, in order ("Genesis 28:10-17"; "Composite 17 (Exod. 40:1–5, 9, 10, 16, 34–35)").
// Dashes are made plain hyphens; nothing else is changed.
export function ocaVespersReadings(doc) {
  const out = []; let on = false;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /^(Old Testament )?Readings/i.test(t)) { on = true; continue; }
    if (!on) continue;
    const m = t.replace(/[–—]/g, '-').replace(/^Composite \d+ \((.*)\)$/, '$1')
      .match(/^(?:\(\d+\)\s*)?((?:[1-4] )?[A-Z][A-Za-z.]+(?: [a-z]+ [A-Z][a-z]+)? \d+:\d[\d:,;\- ]*)/);
    if (b.k === 'heading' && m) { out.push({ ref: m[1].trim(), head: t, file: doc.file, locus: `paragraph ${b.p[0]}` }); continue; }
    if (b.k === 'heading' && /^(Litya|Aposticha|Tone \d)/.test(t)) break;
  }
  return out;
}
// What an OCA document prints for the Divine Liturgy: its prokeimena and Alleluia
// (tone and the label the heading gives), and the Epistle and Gospel references.
// Used to NOTE OCA practice beside the full order, never to shorten it.
export function ocaLiturgyPropers(doc) {
  const out = { prokeimena: [], alleluia: [], epistles: [], gospels: [], file: doc.file };
  let on = false; let sec = null;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '').replace(/[–—]/g, '-');
    if (b.k === 'heading' && /^\(at the Divine Liturgy\)/i.test(t)) { on = true; continue; }
    if (!on) continue;
    if (b.k === 'heading') {
      const h = t.match(/^Tone (\d)\*?\s*(.*)$/);
      if (/^Epistle/i.test(t)) sec = 'epistles'; else if (/^Gospel/i.test(t)) sec = 'gospels'; else if (/^Communion/i.test(t)) sec = 'communion';
      else if (h && /Prokeimenon/i.test(h[2])) { out.prokeimena.push({ tone: Number(h[1]), sunday: /Resurrection/i.test(h[2]), label: h[2] }); sec = 'prokeimenon'; }
      else if (h && !h[2] && (sec === 'epistles' || sec === 'alleluia')) { out.alleluia.push({ tone: Number(h[1]) }); sec = 'alleluia'; }
      continue;
    }
    if (sec === 'epistles' || sec === 'gospels') {
      // Two readings are printed one under the other and captured as lines of one block.
      for (const line of t.split(/ \| | \/\/ /)) {
        const m = line.match(/^(?:\((\d+)\)\s*)?((?:[1-4] )?[A-Z][A-Za-z]+ \d+:\d[\d:,;\- ]*)/);
        if (m) out[sec].push({ ref: m[2].trim(), pericope: m[1] ? Number(m[1]) : null });
      }
    }
  }
  return out.prokeimena.length || out.epistles.length ? out : null;
}

// ─── THE MATCH REGISTER ─────────────────────────────────────────────────────
// Which hymn of the tool's own books an OCA hymn is (two translations of one
// hymn). matches_auto.js is written by tools/match_oca_hymns.mjs on evidence
// (by: 'auto'); matches_human.js is a person's decision (by: 'human') and always
// wins. A match is hymn to hymn: it holds on any date, in any year.
let register = null;
export const loadOcaMatches = () => (register ??= Promise.all([import('./matches_auto.js'), import('./matches_human.js'), import('./matches_reprints.js')])
  .then(([a, h, r]) => {
    const byMate = new Map();   // mate's text key -> [{ id, by, first, ... }], best first
    const all = { ...a.OCA_MATCHES_AUTO, ...h.OCA_MATCHES_HUMAN };
    for (const [id, m] of Object.entries(all)) {
      if (!m.mate || !m.mateHash) continue;            // decided: no mate, or only a rejected candidate
      (byMate.get(m.mateHash) ?? byMate.set(m.mateHash, []).get(m.mateHash)).push({ id, ...m });
    }
    // Where more than one OCA hymn is matched to one of ours (the OCA words a hymn
    // differently on different days): a person's decision first; then the OCA hymn
    // printed for the same day of the year as our hymn's own place (a property of the
    // pair, not of the day being served); then the closer wording; then the newer text.
    const md = (stem) => `${stem.slice(5, 7)}-${stem.slice(7, 9)}`;
    const home = (m) => (m.mate.startsWith('menaion:') && m.mate.slice(8, 13) === md(m.first.doc) ? 0 : 1);
    for (const list of byMate.values()) list.sort((x, y) => (x.by !== y.by ? (x.by === 'human' ? -1 : 1) : 0)
      || home(x) - home(y) || (y.score ?? 0) - (x.score ?? 0) || y.first.doc.localeCompare(x.first.doc));
    // The same hymn printed again (matches_reprints.js): the match holds at every print.
    for (const [mate, others] of Object.entries(r.OCA_MATE_REPRINTS)) for (const k of others) if (!byMate.has(k) && byMate.has(mate)) byMate.set(k, byMate.get(mate));
    return { all, byMate };
  }));

// One printed OCA hymn as a V2-shaped text node (tier 3, director pointing), so every
// consumer reads it like any other. It carries its OWN tone and pointing.
export const ocaNode = (hit, doc, stem) => ({
  text: hit.text, tier: hit.pointed ? 3 : (hit.n > 1 ? 2 : 1), tone: hit.tone ?? null, director: !!hit.pointed, pointed: !!hit.pointed,
  source: 'oca', sourceLabel: 'OCA', subject: hit.subject ?? null, id: hit.id, from: { doc: stem, date: doc.date, head: hit.head ?? null },
  ...(hit.repeat ? { repeat: hit.repeat } : {}), ...(hit.underlined ? { underlined: hit.underlined } : {}),
  src: { file: doc.file, locus: `paragraphs ${hit.p[0]}-${hit.p[1]}` },
});

// An OCA hymn by id, read from the document it was first matched in.
export async function ocaHymnById(id, stem) {
  const doc = await loadOcaDoc(stem);
  const hit = doc && ocaTexts(doc).find((t) => t.id === id);
  return hit ? ocaNode(hit, doc, stem) : null;
}

/**
 * The OCA texts for a set of the tool's own hymns.
 * @param texts  the hymns' texts, exactly as stored
 * @returns Map<textKey, OCA node + { by, toneDiffers, evidence, note }>
 */
export async function ocaMatesFor(texts) {
  const { byMate } = await loadOcaMatches(); const out = new Map();
  for (const key of new Set(texts.map(textKey))) {
    const m = (byMate.get(key) || [])[0];
    if (!m) continue;
    const h = await ocaHymnById(m.id, m.first.doc);
    if (h) out.set(key, { ...h, by: m.by, toneDiffers: m.toneDiffers === true, evidence: m.evidence ?? null, note: m.note ?? null });
  }
  return out;
}
// Every text under a stored value (a day, a commemoration, a tone), for ocaMatesFor.
export function textsUnder(v, out = []) {
  if (!v || typeof v !== 'object') return out;
  if (Array.isArray(v)) { for (const x of v) textsUnder(x, out); return out; }
  if (typeof v.text === 'string') out.push(v.text);
  for (const [k, x] of Object.entries(v)) if (k !== 'src') textsUnder(x, out);
  return out;
}
/**
 * The OCA text that may stand in the place of one of the tool's hymns, or null.
 * THE TONE GUARD: an OCA text carries its own tone, so it stands only where that is
 * the tone of the place, unless a person confirmed the match although the two books
 * print the hymn in different tones (`toneDiffers`), when it is sung in the OCA's.
 * @param map   from ocaMatesFor
 * @param node  the tool's own hymn at the place ({ text, tone })
 */
export function ocaMate(map, node) {
  const o = map && node && typeof node.text === 'string' ? map.get(textKey(node.text)) : null;
  if (!o) return null;
  if (o.tone != null && node.tone != null && o.tone !== node.tone && !o.toneDiffers) return null;
  return o;
}
export { textKey };
