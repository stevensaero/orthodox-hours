#!/usr/bin/env node
// tools/test_liturgy_assembly.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Divine Liturgy assembler gate — liturgy_assembler_spec.md §1.3, §2.1, §2.3.
//
// Runs assembleLiturgy() over both variants and every view-layer combination
// and asserts the Phase 1 contract:
//   • exactly one liturgy_section per registry movement, in order, id mv-<id>
//   • every unit is accounted for: visible, folded into a liturgy_hidden run,
//     or an absorbed movement-opening heading — never dropped silently
//   • teaching rubrics are visible in every view (decision 1)
//   • nothing hidden when both layers are on; hidden runs never cross a
//     section boundary
//   • no page number ever reaches an element (decision 6)
//   • Basil view carries the override / insert tags; Chrysostom carries none
//   • insertAnchors() maps every Basil-only insert to a shared unit
//
// Usage:  node tools/test_liturgy_assembly.mjs
// ─────────────────────────────────────────────────────────────────────────────

import { assembleLiturgy, insertAnchors } from "../src/lib/liturgy-assembler.js";
import { getLiturgy, BASIL_OVERRIDES, BASIL_INSERTS } from "../src/data/liturgy/chrysostom.js";
import { MOVEMENT_ORDER, TEACHING_RUBRICS } from "../src/data/liturgy/registry.js";

let failures = 0;
const check = (ok, msg) => { if (!ok) { failures += 1; console.log(`  FAIL ${msg}`); } };

const VIEWS = [
  { rubrics: false, quiet: false }, { rubrics: true, quiet: false },
  { rubrics: false, quiet: true },  { rubrics: true, quiet: true },
];

for (const variant of ["chrysostom", "basil"]) {
  const units = getLiturgy(variant);
  // Movement-opening ALL-CAPS headings are absorbed by the section header —
  // the one deliberate omission (assembler toElement()).
  const isMajor = (t) => { const x = String(t).replace(/[*\s]/g, ""); return x.length > 0 && x === x.toUpperCase() && /[A-Z]/.test(x); };
  const openingHeadings = new Set();
  let last = null;
  for (const u of units) {
    if (u.movement !== last && u.speaker === "heading" && isMajor(u.text)) openingHeadings.add(u.id);
    last = u.movement;
  }
  for (const view of VIEWS) {
    const label = `${variant} rubrics=${view.rubrics} quiet=${view.quiet}`;
    const els = assembleLiturgy({ units, variant, view });

    const sections = els.filter(e => e.type === "liturgy_section");
    check(sections.length === MOVEMENT_ORDER.length, `${label}: ${sections.length} sections, expected ${MOVEMENT_ORDER.length}`);
    check(sections.every((s, i) => s.id === `mv-${MOVEMENT_ORDER[i]}`), `${label}: section order/ids drift from registry`);

    const visible = els.filter(e => e.type === "liturgy_unit");
    const hiddenRuns = els.filter(e => e.type === "liturgy_hidden");
    const hidden = hiddenRuns.flatMap(r => r.hidden);
    const seen = new Set([...visible, ...hidden].map(e => e.unitId));
    const missing = units.filter(u => !seen.has(u.id) && !openingHeadings.has(u.id));
    check(missing.length === 0, `${label}: ${missing.length} units dropped (${missing.slice(0, 3).map(u => u.id).join(", ")})`);
    check(visible.length + hidden.length + openingHeadings.size === units.length, `${label}: unit accounting off`);

    for (const id of TEACHING_RUBRICS) {
      check(visible.some(e => e.unitId === id), `${label}: teaching rubric ${id} not visible`);
    }
    if (view.rubrics && view.quiet) check(hiddenRuns.length === 0, `${label}: hidden runs with both layers on`);
    for (const r of hiddenRuns) {
      check(r.hidden.every(h => h.movement === r.movement), `${label}: hidden run ${r.id} crosses a section`);
      check(r.rubrics + r.quiet === r.hidden.length, `${label}: hidden run ${r.id} counts drift`);
    }

    const leaked = JSON.stringify(els);
    check(!leaked.includes("source_page") && !leaked.includes("basil_page") && !leaked.includes("basilPage"),
      `${label}: page number reached an element`);

    const tagged = [...visible, ...hidden].filter(e => e.variantTag);
    if (variant === "chrysostom") check(tagged.length === 0, `${label}: Chrysostom carries variant tags`);
    else {
      const expected = Object.keys(BASIL_OVERRIDES).filter(id => !openingHeadings.has(id)).length + Object.keys(BASIL_INSERTS).length;
      check(tagged.length === expected, `${label}: ${tagged.length} Basil tags, expected ${expected}`);
      check(tagged.filter(e => e.variantTag === "insert").length === Object.keys(BASIL_INSERTS).length, `${label}: insert tag count`);
    }
    for (const e of [...visible, ...hidden]) {
      check(typeof e.text === "string" && e.text.length > 0, `${label}: ${e.unitId} blank text`);
      check(["heading", "subheading", "rubric", "line"].includes(e.kind), `${label}: ${e.unitId} bad kind ${e.kind}`);
    }
  }
}

// insert anchors
const anchors = insertAnchors(getLiturgy("basil"));
const chrysIds = new Set(getLiturgy("chrysostom").map(u => u.id));
for (const id of Object.keys(BASIL_INSERTS)) {
  check(anchors[id] && chrysIds.has(anchors[id]), `insert ${id} has no shared anchor`);
}

// empty input
check(assembleLiturgy({ units: [] }).length === 0, "empty units → empty elements");

const overview = assembleLiturgy({ units: getLiturgy("chrysostom") }).filter(e => e.type === "liturgy_section" && e.core).length;
console.log(`liturgy assembly: ${MOVEMENT_ORDER.length} movements (${overview} core), 2 variants × ${VIEWS.length} views, ${Object.keys(BASIL_INSERTS).length} insert anchors`);
console.log(failures ? `${failures} failure(s)` : "OK");
process.exit(failures ? 1 : 0);
