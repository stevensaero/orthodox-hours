#!/usr/bin/env node
// tools/validate_liturgy.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Divine Liturgy data gate — liturgy_assembler_spec.md §1.1, encoding spec §4.1.
//
// Keys off src/data/liturgy/registry.js and the module's own exports. Every
// check is a hard ERROR (exit 1): this data is a fixed skeleton, so there is
// nothing to leave for judgment the way the Menaion V2 gate does.
//
//   1. closed vocabulary — every `movement` is in MOVEMENT_REGISTRY
//   2. order            — movements appear in non-decreasing registry order
//   3. ids              — unique across the Chrysostom array; every override
//                         names an existing id; every insert chain resolves;
//                         insert ids carry the b- prefix and never collide
//   4. fields           — id / movement / speaker / text / note present and
//                         non-blank (encoding spec §1: never silently blank);
//                         speaker and mode from the closed sets
//   5. teaching rubrics — every TEACHING_RUBRICS id exists and is a rubric
//   6. counts           — Chrysostom and Basil unit counts match the spec
//                         (624 / 628); overrides all `encoded`, none pending
//
// Usage:  node tools/validate_liturgy.mjs [--json]
// ─────────────────────────────────────────────────────────────────────────────

import { MOVEMENT_ORDER, MOVEMENT_BY_ID, TEACHING_RUBRICS } from "../src/data/liturgy/registry.js";
import { LITURGY_CHRYSOSTOM, BASIL_OVERRIDES, BASIL_INSERTS, getLiturgy } from "../src/data/liturgy/chrysostom.js";

const EXPECTED = { chrysostom: 624, basil: 628 };
const SPEAKERS = new Set(["priest", "deacon", "choir", "reader", "people", "rubric", "heading"]);
const MODES = new Set(["aloud", "quiet", null, undefined]);

const errors = [];
const err = (m) => errors.push(m);

// 1 + 2 — vocabulary and order
let lastIdx = -1;
for (const u of LITURGY_CHRYSOSTOM) {
  const idx = MOVEMENT_ORDER.indexOf(u.movement);
  if (idx === -1) { err(`${u.id}: movement "${u.movement}" not in registry`); continue; }
  if (idx < lastIdx) err(`${u.id}: movement "${u.movement}" out of order (after "${MOVEMENT_ORDER[lastIdx]}")`);
  lastIdx = Math.max(lastIdx, idx);
}
const used = new Set(LITURGY_CHRYSOSTOM.map(u => u.movement));
for (const id of MOVEMENT_ORDER) if (!used.has(id)) err(`registry movement "${id}" has no units`);

// 3 — ids
const ids = new Set();
for (const u of LITURGY_CHRYSOSTOM) {
  if (ids.has(u.id)) err(`duplicate id ${u.id}`);
  ids.add(u.id);
  if (u.id.startsWith("b-")) err(`${u.id}: Chrysostom unit carries the Basil-insert prefix`);
}
for (const id of Object.keys(BASIL_OVERRIDES)) {
  if (!ids.has(id)) err(`override "${id}" names no Chrysostom unit`);
  if (BASIL_OVERRIDES[id].status !== "encoded") err(`override "${id}" is ${BASIL_OVERRIDES[id].status}`);
}
for (const [id, ins] of Object.entries(BASIL_INSERTS)) {
  if (!id.startsWith("b-")) err(`insert "${id}" lacks the b- prefix`);
  if (ids.has(id)) err(`insert "${id}" collides with a Chrysostom id`);
  if (!ids.has(ins.insert_after) && !BASIL_INSERTS[ins.insert_after]) err(`insert "${id}" follows unknown unit "${ins.insert_after}"`);
  if (!MOVEMENT_BY_ID[ins.movement]) err(`insert "${id}": movement "${ins.movement}" not in registry`);
}
const basil = getLiturgy("basil");
const emitted = new Set(basil.map(u => u.id));
for (const id of Object.keys(BASIL_INSERTS)) if (!emitted.has(id)) err(`insert "${id}" is never emitted by getLiturgy("basil") — chain broken`);

// 4 — fields
const blank = (v) => typeof v !== "string" || v.trim() === "";
for (const u of LITURGY_CHRYSOSTOM) {
  for (const f of ["id", "movement", "speaker", "text", "note"]) if (blank(u[f])) err(`${u.id || "?"}: blank ${f}`);
  if (!SPEAKERS.has(u.speaker)) err(`${u.id}: speaker "${u.speaker}" not in closed set`);
  if (!MODES.has(u.mode)) err(`${u.id}: mode "${u.mode}" not in closed set`);
}
for (const [id, o] of Object.entries(BASIL_OVERRIDES)) if (blank(o.text)) err(`override "${id}": blank text`);
for (const [id, i] of Object.entries(BASIL_INSERTS)) if (blank(i.text) || !SPEAKERS.has(i.speaker)) err(`insert "${id}": blank text or bad speaker`);

// 5 — teaching rubrics
const byId = Object.fromEntries(LITURGY_CHRYSOSTOM.map(u => [u.id, u]));
for (const id of TEACHING_RUBRICS) {
  if (!byId[id]) err(`TEACHING_RUBRICS "${id}" does not exist`);
  else if (byId[id].speaker !== "rubric") err(`TEACHING_RUBRICS "${id}" is a ${byId[id].speaker}, not a rubric`);
}

// 6 — counts
const chrys = getLiturgy("chrysostom");
if (chrys.length !== EXPECTED.chrysostom) err(`Chrysostom count ${chrys.length}, expected ${EXPECTED.chrysostom}`);
if (basil.length !== EXPECTED.basil) err(`Basil count ${basil.length}, expected ${EXPECTED.basil}`);
if (basil.some(u => u.basilPending)) err(`Basil view still has pending placeholders`);
if (chrys.length !== LITURGY_CHRYSOSTOM.length) err(`getLiturgy("chrysostom") altered the array length`);

const summary = {
  chrysostom: chrys.length, basil: basil.length,
  overrides: Object.keys(BASIL_OVERRIDES).length, inserts: Object.keys(BASIL_INSERTS).length,
  movements: MOVEMENT_ORDER.length, errors,
};
if (process.argv.includes("--json")) console.log(JSON.stringify(summary, null, 2));
else {
  console.log(`liturgy: ${summary.chrysostom} Chrysostom / ${summary.basil} Basil units, ${summary.overrides} overrides, ${summary.inserts} inserts, ${summary.movements} movements`);
  for (const e of errors) console.log(`  ERROR ${e}`);
  console.log(errors.length ? `${errors.length} error(s)` : "OK");
}
process.exit(errors.length ? 1 : 0);
