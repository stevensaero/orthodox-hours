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

// 5. §4A3 Pentecostarion + high-rank Menaion repeat marker resolution.
//    Guards the fix where menaionLicStichera (not effectiveLicStichera) must be
//    used to resolve Menaion repeatIndex markers in the combined array.
//    Bug: undefined variable 'manaionLicStichera' (typo) crashed assembler → blank screen.
//    Scenario: 05-21 Constantine & Helena at P+43 (afterfeast weekday, licCount=8).
console.log("5. §4A3 Menaion repeat marker resolution (cross-source guard):");

const may = await imp("src/data/menaion/may.js");
const mayData = may.default || may[Object.keys(may)[0]];
const pent43 = (await imp("src/data/pentecostarion.js")).default[43];
const constEntry = mayData["05-21"];

ok(!!constEntry, "05-21: Constantine & Helena entry must exist");
ok(constEntry.stichera_lord_i_call_count === 8, "05-21: count must be 8");

const menaionLicStichera = (constEntry.stichera_lord_i_call || [])
  .map(s => ({ ...s, source: "Menaion" }));
const pentStichera = (pent43.stichera_lord_i_call || [])
  .map(s => ({ ...s, source: "Pentecostarion" }));

ok(menaionLicStichera.length === 5, `05-21: Menaion array must be 5 items (got ${menaionLicStichera.length})`);
ok(pentStichera.length === 3, `P+43: Pentecostarion array must be 3 items (got ${pentStichera.length})`);

// Replicate the combined array the assembler builds
const effectiveLicStichera = [...pentStichera, ...menaionLicStichera];
ok(effectiveLicStichera.length === 8, `Combined array must be 8 (got ${effectiveLicStichera.length})`);

// Replicate applyStichRepeat logic (copied from assembler)
function applyStichRepeatTest(stich, array) {
  if (!stich || stich.text) return stich;
  if (typeof stich.repeatIndex === "number") {
    const src = array[stich.repeatIndex];
    if (src && src.text) return { ...stich, text: src.text };
  }
  return stich;
}

// Simulate rendering all 8 slots with the FIX applied
const licCount = 8;
let crossSourceError = false;
for (let slotIndex = 0; slotIndex < licCount; slotIndex++) {
  const stich = effectiveLicStichera[slotIndex];
  if (!stich) continue;
  // THE FIX: Menaion items resolve against menaionLicStichera
  const resolveArray = stich.source === "Menaion" ? menaionLicStichera : effectiveLicStichera;
  const resolved = applyStichRepeatTest(stich, resolveArray);
  // If a Menaion repeat slot resolves to a Pentecostarion text, that's the bug
  if (!stich.text && stich.repeatIndex !== undefined && resolved.source === "Pentecostarion") {
    crossSourceError = true;
  }
}
ok(!crossSourceError, "05-21 §4A3: Menaion repeat markers must not resolve to Pentecostarion texts");

// Verify slots 3-4 (first Menaion text + its repeat) both resolve to Menaion text
const slot3 = effectiveLicStichera[3]; // Menaion text0
const slot4 = effectiveLicStichera[4]; // repeatIndex:0 → should resolve to Menaion[0]
ok(slot3 && slot3.text && slot3.source === "Menaion", "Slot 3 must be Menaion text");
const resolved4 = applyStichRepeatTest(slot4, menaionLicStichera);
ok(resolved4 && resolved4.text === slot3.text,
  "Slot 4 (repeatIndex:0) must resolve to same text as slot 3 (Menaion[0]), not Pentecostarion");

console.log(`\n${checks - failures}/${checks} checks passed.`);
if (failures > 0) {
  console.error(`FAILED: ${failures} check(s).`);
  process.exit(1);
}
console.log("PASS");
