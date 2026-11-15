// Gate for the OCA hymns layer. Needs no docx: it checks the captured documents
// and the hand-kept slot map. (Byte fidelity to the docx is the extractor's
// --check, run where the documents are.)
import fs from 'node:fs';
import crypto from 'node:crypto';
import { OCA_DOCS, OCA_DIGESTS } from '../src/data/oca_hymns/manifest.js';
import LIBRARY from '../src/data/oca_hymns/library.js';
import { OCA_MATCHES_AUTO } from '../src/data/oca_hymns/matches_auto.js';
import { OCA_MATCHES_HUMAN } from '../src/data/oca_hymns/matches_human.js';
import { OCA_MATCHES_REVIEW } from '../src/data/oca_hymns/matches_review.js';
import { loadHymnPool } from './lib/hymn_pool.mjs';
import { OCA_SLOTS } from '../src/data/oca_hymns/slots.js';
import { ocaTexts, ocaHymn, loadOcaDoc } from '../src/data/oca_hymns/index.js';
const errs = []; const E = (m) => errs.push(m);
const dir = new URL('../src/data/oca_hymns/docs/', import.meta.url);
const onDisk = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)).sort();
const listed = Object.keys(OCA_DOCS).sort();
if (onDisk.join() !== listed.join()) E('manifest and docs/ disagree');
let blocks = 0, pointed = 0, carets = 0, hymns = 0;
const sha = (algo, t) => crypto.createHash(algo).update(t, 'utf8').digest('hex');
const printedIn = new Map();   // hymn id -> documents it is printed in
const inline = new Map();      // hymn id -> documents that store its text themselves
for (const stem of listed) {
  const d = await loadOcaDoc(stem); let last = -1;
  if (d.file !== stem + '.docx') E(`${stem}: file field`);
  // THE REBUILD GATE: the document, with the library's texts put back, must be
  // exactly what the extractor read from the docx.
  const lines = d.blocks.map((b) => `${b.k}|${b.p[0]}-${b.p[1]}|${b.head ?? ''}|${b.repeat ?? ''}|${JSON.stringify(b.underlined ?? '')}|${b.text}`);
  if (sha('sha256', lines.join('\n')) !== OCA_DIGESTS[stem]) E(`${stem}: does not rebuild to the captured document (digest)`);
  const raw = (await OCA_DOCS[stem]()).default;
  for (const b of raw.blocks) if (b.k === 'text') {
    hymns++;
    (printedIn.get(b.id) ?? printedIn.set(b.id, new Set()).get(b.id)).add(stem);
    if (b.text != null) (inline.get(b.id) ?? inline.set(b.id, new Set()).get(b.id)).add(stem);
  }
  for (const b of d.blocks) if (b.k === 'text' && b.id !== 'o' + sha('sha1', b.text).slice(0, 10)) E(`${stem} p${b.p[0]}: id ${b.id} is not the hash of its text`);
  for (const b of d.blocks) {
    blocks++; const at = `${stem} p${b.p[0]}`;
    if (!['heading', 'note', 'text'].includes(b.k)) E(`${at}: kind ${b.k}`);
    if (!(b.p[0] > last && b.p[1] >= b.p[0] && b.p[1] < d.paragraphs)) E(`${at}: paragraph range out of order`);
    last = b.p[1];
    if (!b.text || b.text !== b.text.trim() || /\s{2,}|\t|\n/.test(b.text)) E(`${at}: whitespace`);
    let depth = 0;
    for (const ch of b.text) { if (ch === '[') depth++; if (ch === ']') depth--; if (depth < 0 || depth > 1) { E(`${at}: brackets`); break; } }
    if (depth) E(`${at}: brackets unbalanced`);
    if (/\[\s|\s\]|\[\]/.test(b.text)) E(`${at}: bracket on a space`);
    if (b.k === 'text') {
      if (b.n !== b.text.split(/ \| | \/\/ /).length && !/\/\/ \S/.test(b.text.replace(/ \/\/ /g, ''))) E(`${at}: line count ${b.n}`);
      if (!!b.pointed !== b.text.includes('[')) E(`${at}: pointed flag`);
      if (b.pointed) pointed++;
    }
    carets += (b.text.match(/\^/g) || []).length;
  }
}
// A hymn printed in more than one document is in the library and nowhere else;
// a hymn printed in one is inline and not in the library.
for (const [id, docs] of printedIn) {
  const shared = docs.size > 1;
  if (shared && !(id in LIBRARY)) E(`${id}: printed in ${docs.size} documents but not in the library`);
  if (shared && inline.has(id)) E(`${id}: in the library and also stored inline (${[...inline.get(id)].join(', ')})`);
  if (!shared && id in LIBRARY) E(`${id}: in the library but printed in one document`);
}
for (const id of Object.keys(LIBRARY)) if (!printedIn.has(id)) E(`${id}: in the library but printed nowhere`);
let slots = 0;
for (const [key, map] of Object.entries(OCA_SLOTS)) {
  if (!/^\d\d-\d\d$/.test(key)) E(`slots ${key}: key`);
  for (const [slot, ref] of Object.entries(map)) {
    slots++; const d = await loadOcaDoc(ref.doc);
    if (ref.replaces && !(slot === 'kontakion' && ['ode3', 'ode6', 'all'].includes(ref.replaces))) E(`slots ${key}.${slot}: replaces '${ref.replaces}'`);
    if (!d) { E(`slots ${key}.${slot}: no document ${ref.doc}`); continue; }
    if (d.key !== key) E(`slots ${key}.${slot}: document is dated ${d.key}`);
    const hits = ocaTexts(d).filter((t) => t.head === ref.head && t.n > 1);
    const distinct = new Set(hits.map((t) => t.text));
    if (!hits.length) E(`slots ${key}.${slot}: heading not found: ${ref.head}`);
    else if (distinct.size > 1 && ref.p == null) E(`slots ${key}.${slot}: ${distinct.size} different texts under "${ref.head}"`);
    const h = await ocaHymn(key, slot);
    if (hits.length && (!h || !h.text || !h.tone)) E(`slots ${key}.${slot}: does not resolve to a hymn with a tone`);
  }
}
// THE MATCH REGISTER. Every match names an OCA hymn that exists and a mate that
// is still in the tool's books with the same words it had when the match was
// made: a re-encoded Menaion hymn must not silently keep an old match.
const pool = await loadHymnPool();
const check = (name, reg, by) => {
  for (const [id, m] of Object.entries(reg)) {
    if (!printedIn.has(id)) { E(`${name} ${id}: no such OCA hymn`); continue; }
    if (by && m.by !== by) E(`${name} ${id}: by is '${m.by}', expected '${by}'`);
    if (by === 'human' && !/^\d{4}-\d\d-\d\d$/.test(m.decided || '')) E(`${name} ${id}: a person's decision needs its date`);
    if (m.reject) { if (by !== 'human') E(`${name} ${id}: only a person can reject a candidate`); if (!m.note) E(`${name} ${id}: a rejection needs a note`);
      for (const h of m.reject) if (!pool.hymns.has(h)) E(`${name} ${id}: rejected candidate ${h} is not in the tool's books`); }
    if (!('mate' in m)) { if (!m.reject) E(`${name} ${id}: neither a mate nor a rejection`); continue; }
    if (m.mate === null) { if (by !== 'human') E(`${name} ${id}: only a person can decide "no mate"`); if (!m.note) E(`${name} ${id}: a "no mate" decision needs a note`); continue; }
    if (!m.first || !printedIn.get(id).has(m.first.doc)) E(`${name} ${id}: \`first.doc\` must name a document the hymn is printed in`);
    const at = pool.byPath.get(m.mate);
    if (!at) E(`${name} ${id}: mate ${m.mate} is not in the tool's books`);
    else if (at !== m.mateHash) E(`${name} ${id}: the text at ${m.mate} has changed since this match was made`);
  }
};
check('matches_auto', OCA_MATCHES_AUTO, 'auto');
check('matches_human', OCA_MATCHES_HUMAN, 'human');
check('matches_review', OCA_MATCHES_REVIEW, null);
for (const [id, m] of Object.entries(OCA_MATCHES_HUMAN)) if ('mate' in m && (id in OCA_MATCHES_AUTO || id in OCA_MATCHES_REVIEW)) E(`${id}: decided by a person but still in a generated file (run tools/match_oca_hymns.mjs)`);
console.log(`Match register: ${Object.keys(OCA_MATCHES_AUTO).length} automatic, ${Object.values(OCA_MATCHES_HUMAN).filter((m) => m.mate).length} by a person (and ${Object.values(OCA_MATCHES_HUMAN).filter((m) => m.reject).length} candidates rejected), ${Object.keys(OCA_MATCHES_REVIEW).length} awaiting review`);
console.log(`OCA hymns: ${listed.length} documents, ${blocks} blocks, ${hymns} hymns (${printedIn.size} distinct, ${Object.keys(LIBRARY).length} stored once in the library), ${pointed} pointed, ${carets} caret marks, ${slots} slots on ${Object.keys(OCA_SLOTS).length} dates`);
if (errs.length) { errs.slice(0, 40).forEach((e) => console.log('  ERROR', e)); console.log(`${errs.length} error(s)`); process.exit(1); }
console.log('OK');
