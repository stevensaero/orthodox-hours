#!/usr/bin/env node
// audit.js — Encoding completeness audit
// Usage: node scripts/audit.js [may|june|july|pentecostarion|all]
// Rule: an entry is NOT complete until every required field is present
// AND no field contains placeholder text.

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

// ── Field lists aligned with FIELD_REGISTRY in src/lib/audit.js ──────────────
// CLI uses text-based parsing (regex on raw source), so these are flat string
// lists checked via chunk.includes(field + ':').
// Conditional fields (litya, aposticha, matins_gospel) are handled separately.

const MENAION_REQUIRED = [
  // identity
  'source_file', 'rank', 'fekula_section',
  // hours
  'troparion', 'kontakion_ode6',
  // liturgy (feast_e checked separately — may be null for §2A)
  'feast_e',
  // matins
  'matins_format', 'has_great_doxology', 'magnificat_sung',
  // flags
  'has_litya', 'has_paroemias',
];

// Menaion fields required only for §2C+ (text-based heuristic: chunk has feast_e value)
const MENAION_REQUIRED_WITH_PROPERS = [
  'prokeimenon_text', 'prokeimenon_tone', 'prokeimenon_stichos',
  'alleluia_verse', 'alleluia_stichos', 'communion_verse',
];

// Menaion fields required for §2D+ (doxology, polyeleos, vigil)
// Detected by presence of 'stichera_lord_i_call:' or rank value
const MENAION_REQUIRED_HIGH_RANK = [
  'stichera_lord_i_call', 'stichera_lord_i_call_count', 'stichera_glory',
  'stichera_aposticha', 'aposticha_glory',
];

// Menaion fields required for §2E+ (polyeleos, vigil)
const MENAION_REQUIRED_POLYELEOS = [
  'has_polyeleos', 'matins_gospel',
];

const PENT_REQUIRED = [
  // identity
  'hours_format', 'fekula_section', 'source_file',
  // hours
  'troparion',
  // liturgy
  'feast_e',
  // matins
  'matins_format', 'has_great_doxology', 'magnificat_sung',
  // flags
  'has_litya', 'menaion_set_aside',
];

// Pentecostarion fields required when entry has feast propers (feast_e is non-null)
const PENT_REQUIRED_WITH_PROPERS = [
  'prokeimenon_text', 'prokeimenon_tone', 'prokeimenon_stichos',
  'alleluia_verse', 'alleluia_stichos', 'communion_verse',
];

// Pentecostarion fields required when menaion_set_aside (Great Feast)
const PENT_REQUIRED_GREAT_FEAST = [
  'stichera_lord_i_call', 'stichera_lord_i_call_count', 'stichera_glory',
  'stichera_aposticha', 'aposticha_glory',
];

const pentKontakionOk = c => c.includes('hours_kontakion:') || c.includes('kontakion_ode6:');
const pentHasPropers = c => /feast_e:\s*["']/.test(c); // non-null feast_e
const pentIsGreatFeast = c => c.includes('menaion_set_aside: true');
const pentHasLitya = c => c.includes('has_litya: true');
const menaionHasPropers = c => /feast_e:\s*["']/.test(c);
const menaionIsHighRank = c =>
  c.includes("rank: 'doxology'") || c.includes("rank: 'polyeleos'") || c.includes("rank: 'vigil'") ||
  c.includes('rank: "doxology"') || c.includes('rank: "polyeleos"') || c.includes('rank: "vigil"');
const menaionIsPolyeleos = c =>
  c.includes("rank: 'polyeleos'") || c.includes("rank: 'vigil'") ||
  c.includes('rank: "polyeleos"') || c.includes('rank: "vigil"');
const menaionHasLitya = c => c.includes('has_litya: true');

const PLACEHOLDERS = [
  /\[Menaion sticheron/i,
  /\[stichera not yet/i,
  /\[aposticha stichera not yet/i,
  /\[NYE\]/i,
  /not yet encoded/i,
  /Track B/i,
  /Phase 2/i,
  /to be encoded/i,
  /pending encoding/i,
];

function hasPlaceholder(chunk) {
  return PLACEHOLDERS.some(p => p.test(chunk));
}

function auditMenaionBlock(entries, label) {
  const complete = [], incomplete = [], placeholder = [];

  for (const [key, chunk] of entries) {
    const missing = MENAION_REQUIRED.filter(f => !chunk.includes(f + ':'));

    // Kontakion
    if (!chunk.includes('kontakion_ode6:')) missing.push('kontakion_ode6');

    // Liturgy propers (§2C+)
    if (menaionHasPropers(chunk)) {
      MENAION_REQUIRED_WITH_PROPERS.forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    // Vespers stichera + aposticha (§2D+)
    if (menaionIsHighRank(chunk)) {
      MENAION_REQUIRED_HIGH_RANK.forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    // Polyeleos fields (§2E/§2F)
    if (menaionIsPolyeleos(chunk)) {
      MENAION_REQUIRED_POLYELEOS.forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    // Litiya fields
    if (menaionHasLitya(chunk)) {
      ['litya_stichera', 'litya_glory', 'litya_both_now'].forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    const ph = hasPlaceholder(chunk);

    if (!missing.length && !ph) {
      complete.push(key);
    } else if (ph && !missing.length) {
      placeholder.push({ key, issues: ['placeholder text'] });
    } else {
      const issues = [];
      if (missing.length) issues.push('missing: ' + missing.join(', '));
      if (ph) issues.push('placeholder text');
      incomplete.push({ key, issues });
    }
  }

  console.log(`\n── ${label}`);
  console.log(`   ✅ complete: ${complete.length}  ⚠ incomplete: ${incomplete.length}  📝 placeholder: ${placeholder.length}`);
  [...incomplete, ...placeholder].forEach(({ key, issues }) => {
    console.log(`   ${String(key).padEnd(8)} ${issues.join(' | ')}`);
  });
  return { c: complete.length, i: incomplete.length, p: placeholder.length };
}

function auditPentBlock(entries, label) {
  const complete = [], incomplete = [], placeholder = [];

  for (const [key, chunk] of entries) {
    const missing = PENT_REQUIRED.filter(f => !chunk.includes(f + ':'));

    // Kontakion
    if (!pentKontakionOk(chunk)) missing.push('kontakion');

    // Liturgy propers
    if (pentHasPropers(chunk)) {
      PENT_REQUIRED_WITH_PROPERS.forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    // Vespers stichera + aposticha (Great Feast)
    if (pentIsGreatFeast(chunk)) {
      PENT_REQUIRED_GREAT_FEAST.forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    // Litiya fields
    if (pentHasLitya(chunk)) {
      ['litya_stichera', 'litya_glory', 'litya_both_now'].forEach(f => {
        if (!chunk.includes(f + ':')) missing.push(f);
      });
    }

    const ph = hasPlaceholder(chunk);

    if (!missing.length && !ph) {
      complete.push(key);
    } else if (ph && !missing.length) {
      placeholder.push({ key, issues: ['placeholder text'] });
    } else {
      const issues = [];
      if (missing.length) issues.push('missing: ' + missing.join(', '));
      if (ph) issues.push('placeholder text');
      incomplete.push({ key, issues });
    }
  }

  console.log(`\n── ${label}`);
  console.log(`   ✅ complete: ${complete.length}  ⚠ incomplete: ${incomplete.length}  📝 placeholder: ${placeholder.length}`);
  [...incomplete, ...placeholder].forEach(({ key, issues }) => {
    console.log(`   ${String(key).padEnd(8)} ${issues.join(' | ')}`);
  });
  return { c: complete.length, i: incomplete.length, p: placeholder.length };
}

function parseMenaion(src) {
  const matches = [...src.matchAll(/^  "(\d{2}-\d{2}[A-Z]?)":/gm)];
  return matches.map(({ 1: key, index }, i) => [
    key,
    src.slice(index, i + 1 < matches.length ? matches[i + 1].index : src.length),
  ]);
}

function parsePent(src) {
  const matches = [...src.matchAll(/^\s{2}(-?\d+):/gm)];
  return matches.map(({ 1: key, index }, i) => [
    key,
    src.slice(index, i + 1 < matches.length ? matches[i + 1].index : src.length),
  ]);
}

const target = process.argv[2] || 'all';
let C = 0, I = 0, P = 0;

for (const month of ['may', 'june', 'july']) {
  if (target !== 'all' && target !== month) continue;
  try {
    const src = readFileSync(join(root, `src/data/menaion/${month}.js`), 'utf8');
    const r = auditMenaionBlock(parseMenaion(src), `Menaion/${month}.js`);
    C += r.c; I += r.i; P += r.p;
  } catch { console.log(`\n── Menaion/${month}.js — not found`); }
}

if (target === 'all' || target === 'pentecostarion') {
  try {
    const src = readFileSync(join(root, 'src/data/pentecostarion.js'), 'utf8');
    const r = auditPentBlock(parsePent(src), 'pentecostarion.js');
    C += r.c; I += r.i; P += r.p;
  } catch { console.log('\n── pentecostarion.js — not found'); }
}

if (target === 'all') {
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`TOTAL  ✅ ${C}  ⚠ ${I}  📝 ${P}`);
  if (I === 0 && P === 0) console.log('All encoded entries complete.');
  else console.log('Resolve incomplete entries before closing a session.');
}
