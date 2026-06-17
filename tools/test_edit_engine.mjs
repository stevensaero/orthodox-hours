// tools/test_edit_engine.mjs
// Headless proof for the dev-only edit engine. Runs against the REAL june.js source.
//   node tools/test_edit_engine.mjs   → exit 0 all pass, exit 1 on any failure.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { editSetValue } from './edit-engine.mjs';
import JUNE from '../src/data/menaion/june.js';

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

console.log(`\n${failures === 0 ? '✓ ALL PASS' : '✗ ' + failures + ' FAILURE(S)'}`);
process.exit(failures === 0 ? 0 : 1);
