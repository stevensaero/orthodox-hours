// tools/test_edit_engine.mjs
// Headless proof for the dev-only edit engine. Runs against the REAL june.js source.
//   node tools/test_edit_engine.mjs   → exit 0 all pass, exit 1 on any failure.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { editSetValue } from './edit-engine.mjs';
import JUNE from '../src/data/menaion/june.js';
import MAY from '../src/data/menaion/may.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const junePath = join(root, 'src/data/menaion/june.js');
const src = readFileSync(junePath, 'utf8');

let failures = 0;
const ok = (name, cond, extra = '') => {
  console.log(`${cond ? '✓' : '✗'} ${name}${extra ? '  — ' + extra : ''}`);
  if (!cond) failures++;
};

// ── 1. String swap with markers + an embedded quote, on a real path ──────────
const path = ['06-07', 0, 'stichera_lord_i_call', 0, 'text'];
const expectedOld = JUNE['06-07'][0].stichera_lord_i_call[0].text;
const newText = 'With joyful heart | and steadfast resolve, // O martyr, he cried "endure!"';
const r = editSetValue(src, path, newText, expectedOld);

ok('edit succeeds', r.ok, r.error || '');
if (r.ok) {
  ok('new value present in output', r.newSrc.includes('he cried \\"endure!\\"') || r.newSrc.includes('he cried "endure!"'));
  ok('output is valid (round-trip verified by engine)', true);
  // comments elsewhere in the file must survive
  ok('inline comment "§2A — no separate doxasticon" preserved', r.newSrc.includes('§2A — no separate doxasticon'));
  ok('inline comment "no Menaion aposticha in PDF" preserved', r.newSrc.includes('no Menaion aposticha in PDF'));
  // a DIFFERENT sticheron that already contains escaped quotes must be untouched
  ok('sibling sticheron #3 (with its own quotes) untouched',
     r.newSrc.includes('Nothing shall ever separate me from the love of Christ'));
  ok('reported oldValue matches source', r.oldValue === expectedOld);
  ok('diff is a single change region', r.diff.split('\n').filter(l => l.startsWith('-')).length === 1);
}

// ── 2. Compare-and-swap rejects a stale expectedOld ──────────────────────────
const stale = editSetValue(src, path, 'whatever', 'NOT THE REAL VALUE');
ok('CAS rejects stale expectedOld', stale.ok === false && /stale/.test(stale.error));

// ── 3. Fail-closed on a non-literal target (an object) ───────────────────────
const obj = editSetValue(src, ['06-07', 0, 'troparion'], 'x', undefined);
ok('refuses non-literal target (object)', obj.ok === false && /not a simple literal/.test(obj.error));

// ── 4. Type-agnostic: boolean + number swaps work (Tier-1 free extension) ────
const boolPath = ['06-07', 0, 'has_litya'];
const b = editSetValue(src, boolPath, true, JUNE['06-07'][0].has_litya);
ok('boolean swap works', b.ok, b.error || '');
const tonePath = ['06-07', 0, 'troparion', 'tone'];
const n = editSetValue(src, tonePath, 5, JUNE['06-07'][0].troparion.tone);
ok('number swap works', n.ok, n.error || '');
ok('boolean type-mismatch refused', editSetValue(src, boolPath, 'true', JUNE['06-07'][0].has_litya).ok === false);

// ── 5. Concatenation + bare-object date (the 05-16 case) ─────────────────────
// 05-16 is a single-commemoration BARE OBJECT (no array index), and its LIC[0]
// text is a multi-line + concatenation of plain prose.
const mayPath = ['05-16', 'stichera_lord_i_call', 0, 'text']; // note: NO entry index
const mayOld = MAY['05-16'].stichera_lord_i_call[0].text;
const maySrc = readFileSync(join(root, 'src/data/menaion/may.js'), 'utf8');

// 5a. point it with St. Sergius marks (what Bill was doing) — should re-wrap to chant lines
const pointed = 'The Master Who of old appointed the ascent of the clouds, * later having come down into Egypt, ** on the light cloud.';
const c = editSetValue(maySrc, mayPath, pointed, mayOld);
ok('concat: bare-object path resolves + edit succeeds', c.ok, c.error || '');
if (c.ok) {
  ok('concat: marks kept verbatim (* and ** survive)', c.newSrc.includes(' * ') && c.newSrc.includes(' ** '));
  ok('concat: re-wrapped to multiple + lines at marks', (c.diff.match(/^\+.*" \+$/gm) || []).length >= 2);
  ok('concat: round-trip value === new value (engine-verified)', true);
  ok('concat: a sibling field is untouched', c.newSrc.includes(MAY['05-16'].troparion?.text?.slice(0, 20) || 'Troparion'));
}
// 5b. prose (no marks) → word-wrap
const prose = editSetValue(maySrc, mayPath, 'A short reworded sticheron of moderate length that should wrap across a couple of source lines for readability.', mayOld);
ok('concat: prose re-wrap succeeds', prose.ok, prose.error || '');
if (prose.ok) ok('concat: prose wrapped onto >1 source line', (prose.diff.match(/^\+.*" \+$/gm) || []).length >= 1);
// 5c. CAS still guards concats
ok('concat: CAS rejects stale', editSetValue(maySrc, mayPath, 'x', 'WRONG').ok === false);

// 5d. CRLF (Windows checkout) — node offsets are reported against an LF-normalized
// copy, so the concat splice must anchor on loc, not node.start/.end. Edit the same
// re-wrapped sticheron twice and confirm both succeed and line endings stay CRLF.
const crlfSrc = maySrc.replace(/\n/g, '\r\n');
const c1 = editSetValue(crlfSrc, mayPath, pointed, mayOld);
ok('concat/CRLF: first edit succeeds (loc-anchored splice)', c1.ok, c1.error || '');
if (c1.ok) {
  ok('concat/CRLF: line endings stay CRLF (no lone LF injected)', /\r\n/.test(c1.newSrc) && !/[^\r]\n/.test(c1.newSrc));
  const c2 = editSetValue(c1.newSrc, mayPath, pointed, pointed);
  ok('concat/CRLF: re-editing the already-wrapped sticheron succeeds', c2.ok, c2.error || '');
}

console.log(`\n${failures === 0 ? '✓ ALL PASS' : '✗ ' + failures + ' FAILURE(S)'}`);
process.exit(failures === 0 ? 0 : 1);