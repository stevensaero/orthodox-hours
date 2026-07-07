// tools/validate_viewer_coverage.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Viewer Auditability Contract gates (octoechos_v2_spec.md §12.2 + amendment F).
//
//   1 · COVERAGE — joins schema_v2.FIELD_MANIFEST against the presentation
//       registry: every schema field is either registered or explicitly
//       hidden-with-reason. A field added to the schema without viewer
//       coverage is a SAME-SESSION BUILD FAILURE. Stale registry keys (no
//       longer in the manifest) also fail — the registry cannot drift.
//       (Keys present in DATA but absent from the schema already fail
//       validate_octoechos_v2.mjs — the two gates meet in the middle.)
//
//   2 · NO DISPLAY COPIES (amendment F) — render/explainer/badge surfaces
//       must read the canonical tables directly. This lint extracts every
//       canonical text fragment from the V2 data modules and greps component
//       sources for literal copies (the V1 Typica-explainer "it/He is holy"
//       drift class, generalized).
//
// Run: node tools/validate_viewer_coverage.mjs   (exit 1 on any violation)
// ─────────────────────────────────────────────────────────────────────────────

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import * as S from '../src/data/octoechos_v2/schema_v2.js';
import { REGISTRY } from '../src/data/octoechos_v2/presentation.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const V2_DIR = join(ROOT, 'src', 'data', 'octoechos_v2');
const COMPONENTS_DIR = join(ROOT, 'src', 'components');

const problems = [];

// ── 1 · coverage join ────────────────────────────────────────────────────────
const manifestPaths = new Set(S.FIELD_MANIFEST.map(f => f.path));
for (const f of S.FIELD_MANIFEST) {
  const entry = REGISTRY[f.path];
  if (!entry) {
    problems.push(`COVERAGE: manifest path "${f.path}" has NO registry entry and NO hidden:{reason} — §12.2: registered or explicitly hidden, never omitted.`);
    continue;
  }
  if (entry.hidden && !entry.hidden.reason) {
    problems.push(`COVERAGE: "${f.path}" is hidden without a reason — hiding is opt-in WITH declaration (§12.1).`);
  }
  if (!entry.hidden && !entry.heading) {
    problems.push(`COVERAGE: "${f.path}" registry entry lacks a heading.`);
  }
}
for (const key of Object.keys(REGISTRY)) {
  if (!manifestPaths.has(key)) {
    problems.push(`COVERAGE: registry key "${key}" is not in schema_v2.FIELD_MANIFEST — stale entry; the registry cannot drift from the schema.`);
  }
}

// ── 2 · amendment F lint — no display copies ─────────────────────────────────
// Collect canonical fragments from whatever V2 data exists.
const fragments = [];   // { fragment, from }
function collect(where, v) {
  if (typeof v === 'string') return;
  if (Array.isArray(v)) { v.forEach((x, i) => collect(`${where}[${i}]`, x)); return; }
  if (v && typeof v === 'object') {
    if (typeof v.text === 'string' && v.text.trim().length >= 25) {
      // first 60 chars is plenty to identify a literal copy, and short enough
      // to survive line wrapping differences rarely
      fragments.push({ fragment: v.text.slice(0, 60), from: where });
    }
    for (const [k, x] of Object.entries(v)) collect(`${where}.${k}`, x);
  }
}
const v2files = existsSync(V2_DIR) ? readdirSync(V2_DIR) : [];
for (const f of v2files) {
  if (/^tone[1-8]\.js$/.test(f) || f === 'shared.js' || f === 'theotokia.js') {
    const mod = (await import(pathToFileURL(join(V2_DIR, f)).href)).default;
    collect(f.replace('.js', ''), mod);
  }
}

// V1's own data layer legitimately duplicates source texts during the
// parallel build (spec §1: V1 stays live and untouched until Phase 5
// cutover; §8 inventories its static prokeimena tables as the comparison
// surface). Hits in these files are REPORTED as warnings, not failures —
// AT PHASE 5 CUTOVER this set must be emptied so they hard-fail like
// every other component.
const LEGACY_V1_SURFACES = new Set(['hours-tool.jsx', 'octoechos-data.js']);
const legacyWarnings = [];
if (fragments.length) {
  const componentFiles = readdirSync(COMPONENTS_DIR).filter(f => /\.(jsx|js)$/.test(f));
  for (const cf of componentFiles) {
    const src = readFileSync(join(COMPONENTS_DIR, cf), 'utf8');
    for (const { fragment, from } of fragments) {
      if (src.includes(fragment)) {
        const msg = `DISPLAY COPY (amendment F): src/components/${cf} carries a literal copy of canonical text from ${from} ("${fragment.slice(0, 40)}…")`;
        if (LEGACY_V1_SURFACES.has(cf)) legacyWarnings.push(msg + ' — V1 legacy surface, tolerated until Phase 5 cutover.');
        else problems.push(msg + ' — components must read the canonical tables directly.');
      }
    }
  }
}

// ── report ───────────────────────────────────────────────────────────────────
console.log(`Viewer coverage gate — ${manifestPaths.size} manifest paths ⋈ ${Object.keys(REGISTRY).length} registry entries; ${fragments.length} canonical fragments linted against components.`);
if (legacyWarnings.length) {
  console.log(`${legacyWarnings.length} V1-legacy display-copy warning(s) (non-fatal until Phase 5 cutover; incidentally byte-verifies V1's static tables against the source):`);
  for (const w of legacyWarnings.slice(0, 5)) console.log(`  ⚠ ${w}`);
  if (legacyWarnings.length > 5) console.log(`  … and ${legacyWarnings.length - 5} more.`);
}
if (problems.length) {
  console.error(`\n✗ ${problems.length} VIOLATION(S):\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(1);
}
console.log('✓ Viewer coverage gate: PASS');
