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
// Covers BOTH V2 books. The contract is per-book but identical, so the join
// runs once per book and the amendment-F fragment lint pools every book's
// canonical text against every component — a Menaion text copied into an
// Octoechos component is the same violation as one copied into its own.
//
// Run: node tools/validate_viewer_coverage.mjs   (exit 1 on any violation)
// ─────────────────────────────────────────────────────────────────────────────

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import * as OCTO_S from '../src/data/octoechos_v2/schema_v2.js';
import { REGISTRY as OCTO_R } from '../src/data/octoechos_v2/presentation.js';
import * as MEN_S from '../src/data/menaion_v2/schema_menaion_v2.js';
import { REGISTRY as MEN_R } from '../src/data/menaion_v2/presentation.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const V2_DIR = join(ROOT, 'src', 'data', 'octoechos_v2');
const MENAION_DIR = join(ROOT, 'src', 'data', 'menaion_v2');
const COMPONENTS_DIR = join(ROOT, 'src', 'components');

const problems = [];

// The two books, each with its own contract pair. Adding a third book is one
// row here.
const BOOKS = [
  { name: 'octoechos', manifest: OCTO_S.FIELD_MANIFEST, registry: OCTO_R },
  { name: 'menaion',   manifest: MEN_S.FIELD_MANIFEST,  registry: MEN_R  },
];

// ── 1 · coverage join (per book) ─────────────────────────────────────────────
const covStats = [];
for (const { name, manifest, registry } of BOOKS) {
  const manifestPaths = new Set(manifest.map(f => f.path));
  for (const f of manifest) {
    const entry = registry[f.path];
    if (!entry) {
      problems.push(`COVERAGE [${name}]: manifest path "${f.path}" has NO registry entry and NO hidden:{reason} — registered or explicitly hidden, never omitted.`);
      continue;
    }
    if (entry.hidden && !entry.hidden.reason) {
      problems.push(`COVERAGE [${name}]: "${f.path}" is hidden without a reason — hiding is opt-in WITH declaration.`);
    }
    if (!entry.hidden && !entry.heading) {
      problems.push(`COVERAGE [${name}]: "${f.path}" registry entry lacks a heading.`);
    }
  }
  for (const key of Object.keys(registry)) {
    if (!manifestPaths.has(key)) {
      problems.push(`COVERAGE [${name}]: registry key "${key}" is not in the manifest — stale entry; the registry cannot drift from the schema.`);
    }
  }
  covStats.push(`${name} ${manifestPaths.size}\u22c8${Object.keys(registry).length}`);
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
// Menaion V2: month files plus the cross-date tables. Same rule — a literal
// copy of any of this text inside a component is a display copy.
const menFiles = existsSync(MENAION_DIR) ? readdirSync(MENAION_DIR) : [];
for (const f of menFiles) {
  if (/^(january|february|march|april|may|june|july|august|september|october|november|december|shared|general)\.js$/.test(f)) {
    const mod = (await import(pathToFileURL(join(MENAION_DIR, f)).href)).default;
    collect('menaion/' + f.replace('.js', ''), mod);
  }
}

// PHASE 5 CUTOVER (v0.36.0, July 11 2026): the legacy set is EMPTY. Any
// literal copy of canonical V2 text in a component is now a hard failure —
// components read the canonical tables (directly or via the adapter), full
// stop. (Pre-cutover this set tolerated hours-tool.jsx and octoechos-data.js
// as warnings while V1 ran in parallel.)
const LEGACY_V1_SURFACES = new Set([]);

// CROSS-BOOK FRAME DUPLICATES (audited at cutover, July 11 2026): texts that
// legitimately exist BOTH as V2 print-position nodes AND as the assembler's
// own Horologion/HTM FRAME material or psalmody. These are not display copies
// of the Octoechos — the same scripture/frame text simply appears in more
// than one book (V2 principle §2.3: true duplicates stored per position).
// Keyed by fragment prefix; each entry documents the frame home. Anything
// NOT on this list still hard-fails. Revisit when the Horologion source is
// encoded (§9.11(b)).
const CROSS_BOOK_FRAME_DUPLICATES = [
  ["For with the Lord there is mercy", "LIC ladder verse (Ps 129) — Vespers frame, all services"],
  ["Have mercy on us, O Lord, have mercy on ", "aposticha psalm verse (Ps 122) — Vespers frame"],
  ["Remember Thy congregation which Thou has", "weekday Alleluia verse (Ps 73) — HTM daily table"],
  ["All of thy most glorious mysteries are b", "Hours theotokion — Horologion frame (Common Theotokia)"],
  ["With the saints give rest, O Christ, to ", "kontakion of the departed — HTM Typica kontakia sequence"],
  ["They that are planted in the house of th", "weekday Alleluia verse (Ps 91) — HTM daily table"],
  // Added 15 Aug with the Martyrs encode. Psalm 33:17 and 33:19 — the same
  // class as the Ps 91 pair above, and audited the same way: hours-tool.jsx
  // carries them TWICE over, once inside the full Psalm 33 frame text and once
  // in the HTM weekday prokeimenon/Alleluia table. Martyrs.pdf prints them as
  // its Matins prokeimenon verse, its aposticha verses and its Liturgy Alleluia,
  // so they are now canonical V2 nodes as well. Genuine cross-book duplicates,
  // not display copies: the psalm belongs to the frame and the Menaion quotes it.
  ["The righteous cried, and the Lord heard ", "Ps 33:17 — Psalm 33 frame text + HTM weekday prokeimenon/Alleluia table"],
  ["Many are the tribulations of the righteo", "Ps 33:19 — Psalm 33 frame text + HTM weekday prokeimenon/Alleluia table"],
  ["The righteous man shall flourish like a ", "weekday Alleluia verse (Ps 91) — HTM daily table"],
  // Added 15 Aug with the Angels encode. Psalm 103:33 — hours-tool.jsx carries
  // it inside the full Psalm 103 Vespers-opening frame text; Angels.pdf prints
  // the same verse as its Megalynarion verse (a NEW verse at that position —
  // nine files print other psalms there). The Martyrs Ps-33 class exactly:
  // the psalm belongs to the frame and the Menaion quotes it. Audited, not a
  // display copy.
  ["I will sing unto the Lord throughout my ", "Ps 103:33 — Vespers opening psalm (frame) + Angels megalynarion verse"],
  ["The rich among the people shall entreat ", "weekday Alleluia verse (Ps 44) — HTM daily table"],
  ["The heavens shall confess Thy wonders, O", "weekday Alleluia verse (Ps 88) — HTM daily table"],
  ["Praise the Lord, O my soul. I will prais", "psalm verse (Ps 145) — frame psalmody"],
  ["Holiness becometh Thy house, O Lord, unt", "Saturday aposticha verse (Ps 92) — Vespers frame"],
  ["Hearken, O daughter, and see, and inclin", "weekday Alleluia verse (Ps 44) — HTM daily table"],
  ["God Who is glorified in the council of t", "psalm verse (Ps 88) — frame psalmody"],
  ["Glory to the Father, and to the Son, and", "the lesser doxology — universal frame line"],
  ["For He spake, and they came to be; He co", "weekday Alleluia verse (Ps 148) — HTM daily table"],
  ["Bless the Lord, O my soul; O Lord my God", "Vespers opening psalm (Ps 103) — frame psalmody"],
  ["As thou art the treasury of our resurrec", "Hours theotokion — Horologion frame (Common Theotokia)"],
];
const isFrameDuplicate = (fragment) =>
  CROSS_BOOK_FRAME_DUPLICATES.some(([prefix]) => fragment.startsWith(prefix));
const legacyWarnings = [];
if (fragments.length) {
  const componentFiles = readdirSync(COMPONENTS_DIR).filter(f => /\.(jsx|js)$/.test(f));
  for (const cf of componentFiles) {
    const src = readFileSync(join(COMPONENTS_DIR, cf), 'utf8');
    for (const { fragment, from } of fragments) {
      if (src.includes(fragment)) {
        if (isFrameDuplicate(fragment)) continue; // audited cross-book frame text — see the allowlist above
        const msg = `DISPLAY COPY (amendment F): src/components/${cf} carries a literal copy of canonical text from ${from} ("${fragment.slice(0, 40)}…")`;
        if (LEGACY_V1_SURFACES.has(cf)) legacyWarnings.push(msg + ' — V1 legacy surface, tolerated until Phase 5 cutover.');
        else problems.push(msg + ' — components must read the canonical tables directly.');
      }
    }
  }
}

// ── report ───────────────────────────────────────────────────────────────────
console.log(`Viewer coverage gate — ${covStats.join(' · ')} (manifest ⋈ registry); ${fragments.length} canonical fragments linted against components.`);
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
