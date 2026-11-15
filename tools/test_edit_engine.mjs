// tools/test_edit_engine.mjs
// Headless proof for the dev-only edit engine. Runs against the REAL pentecostarion.js source
// (re-based from the retired Menaion month files at v0.53.0).
//   node tools/test_edit_engine.mjs   → exit 0 all pass, exit 1 on any failure.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { editSetValue } from './edit-engine.mjs';
import PENT from '../src/data/pentecostarion.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pentPath = join(root, 'src/data/pentecostarion.js');
const src = readFileSync(pentPath, 'utf8');
const comments = (t) => (t.match(/^\s*\/\/.*$/gm) || []).length;

let failures = 0;
const ok = (name, cond, extra = '') => {
  console.log(`${cond ? '✓' : '✗'} ${name}${extra ? '  — ' + extra : ''}`);
  if (!cond) failures++;
};

// ── 1. String swap with markers + an embedded quote, on a real path ──────────
// P+49 (Pentecost): its first sticheron is a single string literal in the source.
const path = ['49', 'stichera_lord_i_call', 0, 'text'];
const expectedOld = PENT[49].stichera_lord_i_call[0].text;
const sibling = PENT[49].stichera_lord_i_call[1].text;
const newText = 'With joyful heart | and steadfast resolve, // O martyr, he cried "endure!"';
const r = editSetValue(src, path, newText, expectedOld);

ok('edit succeeds', r.ok, r.error || '');
if (r.ok) {
  ok('new value present in output', r.newSrc.includes('he cried \\"endure!\\"') || r.newSrc.includes('he cried "endure!"'));
  ok('every comment line in the file survives', comments(r.newSrc) === comments(src), `${comments(r.newSrc)} of ${comments(src)}`);
  ok('the next sticheron is untouched', r.newSrc.includes(JSON.stringify(sibling).slice(1, 60)));
  ok('reported oldValue matches source', r.oldValue === expectedOld);
  ok('diff is a single change region', r.diff.split('\n').filter(l => l.startsWith('-')).length === 1);
}

// ── 2. Compare-and-swap rejects a stale expectedOld ──────────────────────────
const stale = editSetValue(src, path, 'whatever', 'NOT THE REAL VALUE');
ok('CAS rejects stale expectedOld', stale.ok === false && /stale/.test(stale.error));

// ── 3. Fail-closed on a non-literal target (an object) ───────────────────────
const obj = editSetValue(src, ['49', 'troparion'], 'x', undefined);
ok('refuses non-literal target (object)', obj.ok === false && /not a simple literal/.test(obj.error));

// ── 4. Type-agnostic: boolean + number swaps work ────────────────────────────
const boolPath = ['49', 'has_litya'];
const b = editSetValue(src, boolPath, !PENT[49].has_litya, PENT[49].has_litya);
ok('boolean swap works', b.ok, b.error || '');
const tonePath = ['49', 'troparion', 'tone'];
const n = editSetValue(src, tonePath, 5, PENT[49].troparion.tone);
ok('number swap works', n.ok, n.error || '');
ok('boolean type-mismatch refused', editSetValue(src, boolPath, 'true', PENT[49].has_litya).ok === false);

// ── 4b. A date stored as an ARRAY of services (P+63) takes an entry index ────
const arrPath = ['63', 0, 'troparion', 'tone'];
const a = editSetValue(src, arrPath, 5, PENT[63][0].troparion.tone);
ok('array-date path (entry index) resolves + edit succeeds', a.ok, a.error || '');

// ── 5. Concatenation: a text stored as "…" + "…" across source lines ─────────
const catPath = ['35', 'stichera_lord_i_call', 0, 'text'];
const catOld = PENT[35].stichera_lord_i_call[0].text;

// 5a. pointed with St. Sergius marks: should re-wrap to chant lines
const pointed = 'The Master Who of old appointed the ascent of the clouds, * later having come down into Egypt, ** on the light cloud.';
const c = editSetValue(src, catPath, pointed, catOld);
ok('concat: edit succeeds', c.ok, c.error || '');
if (c.ok) {
  ok('concat: marks kept verbatim (* and ** survive)', c.newSrc.includes(' * ') && c.newSrc.includes(' ** '));
  ok('concat: re-wrapped to multiple + lines at marks', (c.diff.match(/^\+.*" \+$/gm) || []).length >= 2);
  ok('concat: a sibling field is untouched', c.newSrc.includes(JSON.stringify(PENT[35].troparion.text).slice(1, 40)));
}
// 5b. prose (no marks) → word-wrap
const prose = editSetValue(src, catPath, 'A short reworded sticheron of moderate length that should wrap across a couple of source lines for readability.', catOld);
ok('concat: prose re-wrap succeeds', prose.ok, prose.error || '');
if (prose.ok) ok('concat: prose wrapped onto >1 source line', (prose.diff.match(/^\+.*" \+$/gm) || []).length >= 1);
// 5c. CAS still guards concats
ok('concat: CAS rejects stale', editSetValue(src, catPath, 'x', 'WRONG').ok === false);

// 5d. CRLF (Windows checkout): the concat splice must anchor on loc, not on
// node.start/.end. Edit the same re-wrapped sticheron twice.
const crlfSrc = src.replace(/\n/g, '\r\n');
const c1 = editSetValue(crlfSrc, catPath, pointed, catOld);
ok('concat/CRLF: first edit succeeds (loc-anchored splice)', c1.ok, c1.error || '');
if (c1.ok) {
  ok('concat/CRLF: line endings stay CRLF (no lone LF injected)', /\r\n/.test(c1.newSrc) && !/[^\r]\n/.test(c1.newSrc));
  const c2 = editSetValue(c1.newSrc, catPath, pointed, pointed);
  ok('concat/CRLF: re-editing the already-wrapped sticheron succeeds', c2.ok, c2.error || '');
}

console.log(`\n${failures === 0 ? '✓ ALL PASS' : '✗ ' + failures + ' FAILURE(S)'}`);
process.exit(failures === 0 ? 0 : 1);
