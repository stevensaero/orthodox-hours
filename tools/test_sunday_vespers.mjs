/**
 * test_sunday_vespers.mjs
 *
 * Structural regression test for the unified Sunday Vespers engine (P1).
 *
 * The assembler (assembleVespers) lives in hours-tool.jsx and cannot be
 * ESM-imported in this plain-node harness (same constraint as
 * test_pointing_paths.mjs). So this test guards the two things the engine's
 * correctness rests on, using the REAL data modules:
 *
 *   1. The LIC split arithmetic (resurrection N + commemoration M = 10),
 *      replicated from the engine's SUN_RES_N map, asserted per rank.
 *   2. The Octoechos data contract the engine depends on for every tone —
 *      REBASED to V2 at the Phase 5 cutover (v0.36.0): great_vespers.lic
 *      (==7), great_vespers.aposticha (==4), great_vespers.dogmatikon,
 *      great_vespers.aposticha_theotokion, read through the assembler
 *      adapter (src/data/octoechos_v2/adapter.js).
 *   3. The resurrectional theotokia table (theotokia.js) is 8-keyed with
 *      aposticha_theotokion present per tone (replaces V1's
 *      SUNDAY_APOSTICHA_THEOTOKIA).
 *   4. The in-calendar acceptance saints carry the ranks the split assumes.
 *
 * A failure here means the engine would silently mis-split or lose its
 * resurrection source. Exit code is nonzero on any failure so this can join
 * the push gate alongside `npm run gate`.
 *
 * Usage: node tools/test_sunday_vespers.mjs
 */

import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dir, "..");
const imp = (rel) => import(pathToFileURL(path.join(repoRoot, rel)).href);

let failures = 0;
let checks = 0;
function ok(cond, msg) {
  checks++;
  if (!cond) { failures++; console.error("  ✗ " + msg); }
}

// ── Replicated engine logic (keep in sync with assembleVespers Sunday branch) ─
const SUN_RES_N = { simple: 7, six_stichera: 6, doxology: 6, polyeleos: 4, vigil: 4, great_feast: 4 };
const splitFor = (rank) => {
  const resN = SUN_RES_N[rank] ?? 7;
  return { resN, commN: 10 - resN };
};

// Mirror of expandSticheraToCount's length behavior (clean multiple → fill;
// otherwise it fills min(n,count) and flags the remainder — still length count).
const expandedLength = (n, count) => count;

console.log("Sunday Vespers engine — structural test\n");

// 1. Split arithmetic per rank.
console.log("1. LIC split (resurrection + commemoration = 10):");
const expectedSplit = {
  simple: [7, 3], six_stichera: [6, 4], doxology: [6, 4],
  polyeleos: [4, 6], vigil: [4, 6], great_feast: [4, 6],
};
for (const [rank, [eRes, eComm]] of Object.entries(expectedSplit)) {
  const { resN, commN } = splitFor(rank);
  ok(resN === eRes && commN === eComm,
    `${rank}: expected ${eRes}+${eComm}, got ${resN}+${commN}`);
  ok(resN + commN === 10, `${rank}: split must sum to 10 (got ${resN + commN})`);
}

// 2. Octoechos V2 Sunday data contract for all 8 tones, read through the
//    assembler adapter (the same read path the engine uses post-cutover).
console.log("2. Octoechos V2 Great Vespers data contract (all 8 tones, via adapter):");
const A = await imp("src/data/octoechos_v2/adapter.js");
const tones = {};
for (let t = 1; t <= 8; t++) {
  await A.loadV2Tone(t);
  const sv = A.getV2SundayVespers(t) || {};
  // Keep the engine-facing shape for §4 below (lic + dogmatikon).
  tones[t] = { lic: sv.lic || [], aposticha: sv.aposticha || [], dogmatikon: sv.dogmatikon };
  ok(Array.isArray(sv.lic) && sv.lic.length === 7,
    `T${t}: great_vespers.lic must have exactly 7 entries (got ${Array.isArray(sv.lic) ? sv.lic.length : "—"})`);
  ok(Array.isArray(sv.aposticha) && sv.aposticha.length === 4,
    `T${t}: great_vespers.aposticha must have 4 entries (got ${Array.isArray(sv.aposticha) ? sv.aposticha.length : "—"})`);
  ok(!!sv.dogmatikon && !!sv.dogmatikon.text, `T${t}: great_vespers.dogmatikon must be present (LIC Both-now)`);
  ok(!!sv.aposticha_theotokion && !!sv.aposticha_theotokion.text,
    `T${t}: great_vespers.aposticha_theotokion must be present`);
  ok(sv.lic.every(n => n && n.path && n.text),
    `T${t}: every lic node must carry text + path (B.2 anchor)`);
}

// 3. Resurrectional theotokia table 8-keyed with aposticha_theotokion per tone.
console.log("3. theotokia.resurrectional_theotokia (aposticha Both-now, tone of the Glory):");
for (let t = 1; t <= 8; t++) {
  const at = A.getV2ApostichaTheotokion(t);
  ok(!!at && !!at.text, `resurrectional_theotokia[${t}].aposticha_theotokion must resolve`);
}

// (Sections 4 and 5 read the summarized Menaion month files, retired at v0.53.0.
// The ten-sticheron Saturday split by rank is now proved against the Menaion and
// the OCA texts in tools/test_menaion_v2_vespers.mjs; section 5 guarded repeat
// markers in the old entry shape, which no Menaion data carries any longer.)

console.log(`\n${checks - failures}/${checks} checks passed.`);
if (failures > 0) {
  console.error(`FAILED: ${failures} check(s).`);
  process.exit(1);
}
console.log("PASS");
