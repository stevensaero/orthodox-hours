/**
 * test_pointing_roles.mjs
 *
 * Regression test for the POINTING ROLE-ASSIGNMENT layer — pointLine().
 *
 * Unlike test_pointing_paths.mjs (which covers the upstream syllabification /
 * bracket-parse layer), this test imports the REAL pointLine() and the REAL
 * PH_DEFS from src/lib — no replicated copy to drift. (Drift in a replicated copy
 * is exactly what let the Tone 2 Final pre-slur regression hide.)
 *
 * It asserts the role + pitch sequence pointLine() produces for curated lines per
 * tone/phrase. Each fixture reads as a line of the pointing spec.
 *
 * Scope: roles + pitches only. Durations live downstream in lineToNotes() /
 * lineToRolesWithDuration() and are a separate (future) coverage layer.
 *
 * NOTE on Tone 2 Final cadence pitches: pointLine() emits the raw distribute()
 * figure for the cadence. The Tone 2 Final DURATION engine (lineToNotes /
 * lineToRolesWithDuration, isTone2Final branch) rebuilds the rendered cadence
 * (e.g. restoring the closing ti) — so the cad pitches asserted here are
 * pointLine's role-level output, not the final rendered cadence.
 *
 * Usage: node tools/test_pointing_roles.mjs
 */

import { pointLine } from "../src/lib/pointing.js";
import { PH_DEFS } from "../src/lib/phrase-defs.js";

// ── line builders ────────────────────────────────────────────────────────────
// A single-syllable word. accent defaults to false.
const W = (text, accent = false) => ({ sylls: [{ text, accent, source: "test" }] });
// A multi-syllable word: sylls = [["pray", false], ["er", false], ...]
const WS = (sylls) => ({
  sylls: sylls.map(([text, accent]) => ({ text, accent: !!accent, source: "test" })),
});
const line = (phrase, ...words) => ({ phrase, words });

const pitchStr = (pitches) => pitches.join("·");

// ── fixtures ─────────────────────────────────────────────────────────────────
// expect: array of [text, role, pitchStr] in pointLine output order.
const FIXTURES = [
  {
    name: "T2 Final — pre-slur 'Hear' (regression guard: re·ti, not lone ti)",
    tone: 2, phrase: "Final",
    words: [W("Hear", true), W("me", true), W("O"), W("Lord")],
    expect: [
      ["Hear", "preslur", "re·ti"],
      ["me", "cad", "do"],
      ["O", "cad", "re"],
      ["Lord", "cad", "do"],
    ],
  },
  {
    name: "T2 Final — pre-slur with reciting tones preceding ('Pray to Christ God…')",
    tone: 2, phrase: "Final",
    words: [W("Pray"), W("to"), W("Christ", true), W("God", true), W("for"), W("us"), W("all")],
    expect: [
      ["Pray", "recite", "re"],
      ["to", "recite", "re"],
      ["Christ", "preslur", "re·ti"],
      ["God", "cad", "do"],
      ["for", "cad", "re"],
      ["us", "cad", "do"],
      ["all", "cad", "ti"],
    ],
  },
  {
    name: "T2 Final — control, NO pre-slur word (pre-anchor syllable unaccented → prep ti)",
    tone: 2, phrase: "Final",
    words: [W("We"), W("praise"), W("Thee"), W("O"), W("Lord", true)],
    expect: [
      ["We", "recite", "re"],
      ["praise", "recite", "re"],
      ["Thee", "recite", "re"],
      ["O", "prep", "ti"],
      ["Lord", "cad", "do·re·do·ti"],
    ],
  },
  {
    name: "T2 A — no intonation, cadence fa·mi·re on the anchor",
    tone: 2, phrase: "A",
    words: [W("Praise"), W("the"), W("Lord", true)],
    expect: [
      ["Praise", "recite", "re"],
      ["the", "recite", "re"],
      ["Lord", "cad", "fa·mi·re"],
    ],
  },
  {
    name: "T2 B — di·re cadence",
    tone: 2, phrase: "B",
    words: [W("We"), W("praise", true), W("Thee", true)],
    expect: [
      ["We", "recite", "re"],
      ["praise", "cad", "di"],
      ["Thee", "cad", "re"],
    ],
  },
  {
    name: "T1 A — inton/prep/cad ('Let my [prayer] arise')",
    tone: 1, phrase: "A",
    words: [W("Let"), W("my"), W("prayer", true), WS([["a", false], ["rise", false]])],
    expect: [
      ["Let", "recite", "re"],
      ["my", "recite", "re"],
      ["prayer", "inton", "re"],
      ["a", "prep", "ti"],
      ["rise", "cad", "do"],
    ],
  },
];

// ── runner ───────────────────────────────────────────────────────────────────
let pass = 0, fail = 0;
const PRINT = process.argv.includes("--print");

for (const fx of FIXTURES) {
  const l = line(fx.phrase, ...fx.words);
  const roles = pointLine(l, PH_DEFS[fx.tone], fx.tone);
  const actual = roles.map((r) => [r.text, r.role, pitchStr(r.pitches)]);

  if (PRINT) {
    console.log(`\n${fx.name}`);
    actual.forEach(([t, role, p]) => console.log(`  ${t.padEnd(8)} ${role.padEnd(8)} [${p}]`));
  }

  const exp = fx.expect;
  let ok = actual.length === exp.length;
  if (ok) {
    for (let i = 0; i < exp.length; i++) {
      if (actual[i][0] !== exp[i][0] || actual[i][1] !== exp[i][1] || actual[i][2] !== exp[i][2]) {
        ok = false; break;
      }
    }
  }

  if (ok) { pass++; }
  else {
    fail++;
    console.log(`\nFAIL: ${fx.name}`);
    console.log("  expected: " + exp.map((e) => `${e[0]}:${e[1]}[${e[2]}]`).join("  "));
    console.log("  actual:   " + actual.map((a) => `${a[0]}:${a[1]}[${a[2]}]`).join("  "));
  }
}

console.log(`\n${pass}/${pass + fail} pointing-role checks passed.`);
if (fail > 0) { console.log("FAIL"); process.exit(1); }
console.log("PASS");
