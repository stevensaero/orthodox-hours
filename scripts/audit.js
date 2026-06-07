#!/usr/bin/env node
// audit.js — Encoding completeness audit
// Usage: node scripts/audit.js [may|june|july|pentecostarion|all]
//
// Single source of truth: all field requirements come from FIELD_REGISTRY
// in src/lib/audit.js. This script imports the data modules directly and
// calls auditEntry() — the same function the browser data browsers use.
// No parallel field lists. No regex parsing. One audit, one result.

import { createRequire } from 'module';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { auditEntry, auditSummary } from '../src/lib/audit.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

// ── Output helpers ────────────────────────────────────────────────────────────

function printBlock(label, entries) {
  const complete = [], incomplete = [], placeholder = [];

  for (const { key, entry, type } of entries) {
    const { gaps, hasPlaceholder } = auditEntry(entry, type);

    if (gaps.length === 0 && !hasPlaceholder) {
      complete.push(key);
    } else {
      const issues = [];
      if (gaps.length)    issues.push('missing: ' + gaps.map(g => g.field).join(', '));
      if (hasPlaceholder) issues.push('placeholder text');
      if (hasPlaceholder && gaps.length === 0) {
        placeholder.push({ key, issues });
      } else {
        incomplete.push({ key, issues });
      }
    }
  }

  console.log(`\n── ${label}`);
  console.log(`   ✅ complete: ${complete.length}  ⚠ incomplete: ${incomplete.length}  📝 placeholder: ${placeholder.length}`);
  [...incomplete, ...placeholder].forEach(({ key, issues }) => {
    console.log(`   ${String(key).padEnd(8)} ${issues.join(' | ')}`);
  });
  return { c: complete.length, i: incomplete.length, p: placeholder.length };
}

// ── Data loading ──────────────────────────────────────────────────────────────

async function loadMenaion(month) {
  const url = pathToFileURL(join(root, `src/data/menaion/${month}.js`)).href;
  const mod = await import(url);
  // Module exports a default object keyed by 'MM-DD' strings
  const data = mod.default;
  const entries = [];
  for (const [key, raw] of Object.entries(data)) {
    // Double entries (e.g. 05-27 = array) — audit each element
    if (Array.isArray(raw)) {
      raw.forEach((entry, i) =>
        entries.push({ key: `${key}[${i}]`, entry, type: 'menaion' })
      );
    } else {
      entries.push({ key, entry: raw, type: 'menaion' });
    }
  }
  return entries;
}

async function loadPentecostarion() {
  const url = pathToFileURL(join(root, 'src/data/pentecostarion.js')).href;
  const mod = await import(url);
  const data = mod.default;
  return Object.entries(data).map(([key, entry]) => ({
    key: `P+${key}`, entry, type: 'pent',
  }));
}

// ── Main ──────────────────────────────────────────────────────────────────────

const target = process.argv[2] || 'all';
let C = 0, I = 0, P = 0;

for (const month of ['may', 'june', 'july']) {
  if (target !== 'all' && target !== month) continue;
  try {
    const entries = await loadMenaion(month);
    const r = printBlock(`Menaion/${month}.js`, entries);
    C += r.c; I += r.i; P += r.p;
  } catch (e) {
    console.log(`\n── Menaion/${month}.js — not found (${e.message})`);
  }
}

if (target === 'all' || target === 'pentecostarion') {
  try {
    const entries = await loadPentecostarion();
    const r = printBlock('pentecostarion.js', entries);
    C += r.c; I += r.i; P += r.p;
  } catch (e) {
    console.log(`\n── pentecostarion.js — not found (${e.message})`);
  }
}

if (target === 'all') {
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`TOTAL  ✅ ${C}  ⚠ ${I}  📝 ${P}`);
  if (I === 0 && P === 0) console.log('All encoded entries complete.');
  else console.log('Resolve incomplete entries before closing a session.');
}
