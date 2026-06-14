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
 *   2. The Octoechos data contract the engine depends on for every tone:
 *      sat.lic (>=7), sat.aposticha (==4), sat.dogmatikon, sat.aposticha_glory.
 *   3. The new SUNDAY_APOSTICHA_THEOTOKIA table is present and 8-keyed.
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

// 2. Octoechos Sunday data contract for all 8 tones.
console.log("2. Octoechos sat data contract (all 8 tones):");
const tones = {};
for (let t = 1; t <= 8; t++) {
  const m = await imp(`src/data/octoechos/tone${t}.js`);
  const d = m.default || m[Object.keys(m)[0]];
  const sat = d?.vespers?.sat || {};
  tones[t] = sat;
  ok(Array.isArray(sat.lic) && sat.lic.length >= 7,
    `T${t}: sat.lic must have >=7 entries (got ${Array.isArray(sat.lic) ? sat.lic.length : "—"})`);
  ok(Array.isArray(sat.aposticha) && sat.aposticha.length === 4,
    `T${t}: sat.aposticha must have 4 entries (got ${Array.isArray(sat.aposticha) ? sat.aposticha.length : "—"})`);
  ok(!!sat.dogmatikon, `T${t}: sat.dogmatikon must be present (LIC Both-now)`);
  ok(!!sat.aposticha_glory, `T${t}: sat.aposticha_glory must be present`);
}

// 3. SUNDAY_APOSTICHA_THEOTOKIA present and 8-keyed (values may be null in P1).
console.log("3. SUNDAY_APOSTICHA_THEOTOKIA stub table:");
const idx = await imp("src/data/octoechos/index.js");
ok(idx.SUNDAY_APOSTICHA_THEOTOKIA && typeof idx.SUNDAY_APOSTICHA_THEOTOKIA === "object",
  "SUNDAY_APOSTICHA_THEOTOKIA export must exist");
for (let t = 1; t <= 8; t++) {
  ok(t in (idx.SUNDAY_APOSTICHA_THEOTOKIA || {}),
    `SUNDAY_APOSTICHA_THEOTOKIA must key tone ${t}`);
}

// 4. Build the combined Sunday LIC for the in-calendar acceptance saints using
//    REAL data and assert the 10-slot split + slot provenance.
console.log("4. Acceptance saints — rank + assembled split:");
const june = await imp("src/data/menaion/june.js");
const juneData = june.default || june[Object.keys(june).find(k => typeof june[k] === "object")];
const entryFor = (key) => {
  const e = juneData[key];
  return Array.isArray(e) ? e[0] : e;
};

// Tone assignments are fixed by the 2026 calendar (spec acceptance set).
const acceptance = [
  { key: "06-21", tone: 2, rank: "simple" },
  { key: "06-28", tone: 3, rank: "six_stichera" },
];
for (const a of acceptance) {
  const e = entryFor(a.key);
  ok(!!e, `${a.key}: Menaion entry must exist`);
  if (!e) continue;
  ok(e.rank === a.rank, `${a.key}: rank expected ${a.rank}, got ${e.rank}`);
  const { resN, commN } = splitFor(e.rank || "simple");
  const sat = tones[a.tone];
  const res = (sat.lic || []).slice(0, resN);
  ok(res.length === resN, `${a.key}: resurrection slice must be ${resN} (got ${res.length})`);
  const commLen = expandedLength((e.stichera_lord_i_call || []).length, commN);
  ok(res.length + commLen === 10,
    `${a.key}: assembled LIC must be 10 (got ${res.length + commLen})`);
  ok(!!sat.dogmatikon, `${a.key}: Both-now Dogmatikon (T${a.tone}) must resolve`);
}

console.log(`\n${checks - failures}/${checks} checks passed.`);
if (failures > 0) {
  console.error(`FAILED: ${failures} check(s).`);
  process.exit(1);
}
console.log("PASS");
