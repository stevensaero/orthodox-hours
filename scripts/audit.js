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

const MENAION_REQUIRED = [
  'source_file','rank','fekula_section','has_great_doxology','has_polyeleos',
  'has_litya','has_paroemias','magnificat_sung','matins_format','feast_e',
  'aposticha_source','stichera_lord_i_call','troparion','kontakion_ode6',
];

const PENT_REQUIRED = [
  'hours_format','matins_format','has_great_doxology','feast_e',
  'aposticha_source','stichera_lord_i_call','troparion',
];

const pentKontakionOk = c => c.includes('hours_kontakion:') || c.includes('kontakion_ode6:');

const PLACEHOLDERS = [
  /\[Menaion sticheron/i,
  /\[stichera not yet/i,
  /\[NYE\]/i,
  /not yet encoded/i,
  /Track B/i,
  /Phase 2/i,
  /to be encoded/i,
];

function hasPlaceholder(chunk) {
  return PLACEHOLDERS.some(p => p.test(chunk));
}

function auditBlock(entries, required, kontakionCheck, label) {
  const complete = [], incomplete = [], placeholder = [];

  for (const [key, chunk] of entries) {
    const missing = required.filter(f => !chunk.includes(f + ':'));
    if (kontakionCheck && !kontakionCheck(chunk)) missing.push('kontakion');
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
    const r = auditBlock(parseMenaion(src), MENAION_REQUIRED, null, `Menaion/${month}.js`);
    C += r.c; I += r.i; P += r.p;
  } catch { console.log(`\n── Menaion/${month}.js — not found`); }
}

if (target === 'all' || target === 'pentecostarion') {
  try {
    const src = readFileSync(join(root, 'src/data/pentecostarion.js'), 'utf8');
    const r = auditBlock(parsePent(src), PENT_REQUIRED, pentKontakionOk, 'pentecostarion.js');
    C += r.c; I += r.i; P += r.p;
  } catch { console.log('\n── pentecostarion.js — not found'); }
}

if (target === 'all') {
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`TOTAL  ✅ ${C}  ⚠ ${I}  📝 ${P}`);
  if (I === 0 && P === 0) console.log('All encoded entries complete.');
  else console.log('Resolve incomplete entries before closing a session.');
}
