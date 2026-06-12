#!/usr/bin/env node
// check-skeleton.mjs — Pre-encoding gate
// Run before every commit that touches pentecostarion.js or Menaion data files.
// Exits 0 only when every entry passes the full FIELD_REGISTRY skeleton.
// Exits 1 with a gap report when anything is missing.
//
// Usage:
//   node scripts/check-skeleton.mjs              # all data
//   node scripts/check-skeleton.mjs pentecostarion
//   node scripts/check-skeleton.mjs may
//   node scripts/check-skeleton.mjs june july
//
// Add to your session close-out:
//   node scripts/check-skeleton.mjs all
//   → must report 0 gaps before pushing.

import { pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { auditEntry } from '../src/lib/audit.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

// ── Load data ─────────────────────────────────────────────────────────────────

async function loadMenaion(month) {
  const url = pathToFileURL(join(root, `src/data/menaion/${month}.js`)).href;
  const mod = await import(url);
  const data = mod.default;
  const entries = [];
  for (const [key, raw] of Object.entries(data)) {
    if (Array.isArray(raw)) {
      raw.forEach((entry, i) => entries.push({ key: `${key}[${i}]`, entry, type: 'menaion' }));
    } else {
      entries.push({ key, entry: raw, type: 'menaion' });
    }
  }
  return entries;
}

async function loadPentecostarion() {
  const url = pathToFileURL(join(root, 'src/data/pentecostarion.js')).href;
  const mod = await import(url);
  return Object.entries(mod.default).map(([key, entry]) => ({
    key: `P+${key}`, entry, type: 'pent',
  }));
}

// ── Check ─────────────────────────────────────────────────────────────────────

function checkEntries(label, entries) {
  const gaps = [];
  for (const { key, entry, type } of entries) {
    const { gaps: fieldGaps, hasPlaceholder } = auditEntry(entry, type);
    if (fieldGaps.length > 0 || hasPlaceholder) {
      const issues = [];
      if (fieldGaps.length) issues.push('missing: ' + fieldGaps.map(g => g.field).join(', '));
      if (hasPlaceholder) issues.push('placeholder text');
      gaps.push({ key, issues });
    }
  }

  if (gaps.length === 0) {
    console.log(`✅  ${label} — all entries complete`);
  } else {
    console.log(`❌  ${label} — ${gaps.length} incomplete:`);
    gaps.forEach(({ key, issues }) => {
      console.log(`    ${String(key).padEnd(10)} ${issues.join(' | ')}`);
    });
  }
  return gaps.length;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const targets = args.length === 0 || args[0] === 'all'
  ? ['may', 'june', 'july', 'pentecostarion']
  : args;

let totalGaps = 0;

console.log('\n── Orthodox Hours Tool — Skeleton Gate ──────────────────────\n');

for (const target of targets) {
  if (target === 'pentecostarion') {
    try {
      const entries = await loadPentecostarion();
      totalGaps += checkEntries('pentecostarion.js', entries);
    } catch (e) {
      console.log(`⚠  pentecostarion.js — not found (${e.message})`);
    }
  } else {
    try {
      const entries = await loadMenaion(target);
      totalGaps += checkEntries(`Menaion/${target}.js`, entries);
    } catch (e) {
      console.log(`⚠  Menaion/${target}.js — not found`);
    }
  }
}

console.log('\n─────────────────────────────────────────────────────────────');

// ── Schema-conformance gate (tools/validate_entries.mjs) ─────────────────────
// Complements the FIELD_REGISTRY coverage check above: catches mis-named fields
// (which read as "canonical field absent" to a coverage check) and missing
// Sunday-overlay flag blocks.
const { spawnSync } = await import('node:child_process');
const validator = new URL('../tools/validate_entries.mjs', import.meta.url);
const conformance = spawnSync(process.execPath, [validator.pathname], { stdio: 'inherit' });
const conformanceFailed = conformance.status !== 0;

// ── Octoechos drift gate (tools/validate_octoechos.mjs) ──────────────────────
// Nested per-tone schema (src/data/octoechos/schema.js): vocabulary guard +
// required-per-section gated by each tone's _encoded marker + cross-tone uniformity.
const octoValidator = new URL('../tools/validate_octoechos.mjs', import.meta.url);
const octo = spawnSync(process.execPath, [octoValidator.pathname], { stdio: 'inherit' });
const octoFailed = octo.status !== 0;

if (totalGaps === 0 && !conformanceFailed && !octoFailed) {
  console.log('✅  All entries complete and conformant. Safe to commit.\n');
  process.exit(0);
} else {
  if (totalGaps > 0) console.log(`❌  ${totalGaps} skeleton gaps found.`);
  if (conformanceFailed) console.log('❌  Schema conformance failed (see above).');
  if (octoFailed) console.log('❌  Octoechos schema conformance failed (see above).');
  console.log('Resolve before committing.\n');
  process.exit(1);
}
