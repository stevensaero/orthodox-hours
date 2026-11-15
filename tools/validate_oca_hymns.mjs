// Gate for the OCA hymns layer. Needs no docx: it checks the captured documents
// and the hand-kept slot map. (Byte fidelity to the docx is the extractor's
// --check, run where the documents are.)
import fs from 'node:fs';
import { OCA_DOCS } from '../src/data/oca_hymns/manifest.js';
import { OCA_SLOTS } from '../src/data/oca_hymns/slots.js';
import { ocaTexts, ocaHymn, loadOcaDoc } from '../src/data/oca_hymns/index.js';
const errs = []; const E = (m) => errs.push(m);
const dir = new URL('../src/data/oca_hymns/docs/', import.meta.url);
const onDisk = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)).sort();
const listed = Object.keys(OCA_DOCS).sort();
if (onDisk.join() !== listed.join()) E('manifest and docs/ disagree');
let blocks = 0, pointed = 0, carets = 0;
for (const stem of listed) {
  const d = await loadOcaDoc(stem); let last = -1;
  if (d.file !== stem + '.docx') E(`${stem}: file field`);
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
console.log(`OCA hymns: ${listed.length} documents, ${blocks} blocks, ${pointed} pointed, ${carets} caret marks, ${slots} slots on ${Object.keys(OCA_SLOTS).length} dates`);
if (errs.length) { errs.slice(0, 40).forEach((e) => console.log('  ERROR', e)); console.log(`${errs.length} error(s)`); process.exit(1); }
console.log('OK');
