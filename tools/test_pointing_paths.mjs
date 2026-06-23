/**
 * test_pointing_paths.mjs
 *
 * Regression test for the SYLLABIFICATION + BRACKET-PARSE layer.
 * Tests that the bracket path (parseBracketWord) and the underline path
 * (paraToPointerLine simulation) agree on syllabification + accent for the same
 * word, and guards their output against a golden baseline.
 *
 * Pass 2 (June 2026): the real parse functions now live in src/lib/syllabify.js
 * and are IMPORTED here — no replicated copy to drift. Both wrappers below route
 * through the real syllabifyWithDirectorMark (the shared core of both pointing
 * paths), so agreement is now a property of the real code, not a simulation.
 * (The prior replica was a divergent reimplementation; the baseline was
 * regenerated from real output when this was rewritten.)
 *
 * Usage: node tools/test_pointing_paths.mjs [--write-baseline]
 *   --write-baseline  write current output as the golden baseline
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  lookupWord, syllabifyWithSource, wordFromDisplay,
  parseBracketWord, syllabifyWithDirectorMark,
} from "../src/lib/syllabify.js";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dir, "..");
const baselinePath = path.join(__dir, "pointing_baseline.json");
const writeBaseline = process.argv.includes("--write-baseline");

// ── Load lexicon ──────────────────────────────────────────────────────────────
const lexiconPath = path.join(repoRoot, "public", "lexicon", "syllable-table.json");
const lexicon = JSON.parse(readFileSync(lexiconPath, "utf8"));
console.log(`Lexicon: ${Object.keys(lexicon).length} entries`);

const cleanT = (t) => t.replace(/[^A-Za-z''-]/g, "");

// ── BRACKET PATH ─────────────────────────────────────────────────────────────
// Per-word result via the REAL parseBracketWord (which delegates to the shared
// syllabifyWithDirectorMark for mid/whole marks). Mirrors parseTruthLines' per-word
// handling.
function bracketPathWord(token, lex) {
  const { cleanWord, accentIdx, bracketType, sylls } = parseBracketWord(token, lex);
  if (!cleanWord) return null;
  const useSylls = (bracketType !== "none" && sylls && sylls.length)
    ? sylls
    : syllabifyWithSource(cleanT(cleanWord) || cleanWord, lex).sylls;
  const mapped = useSylls
    .map((t, si) => {
      const ct = cleanT(t);
      if (!ct) return null;
      return {
        text: ct,
        accent: bracketType !== "none" ? si === accentIdx : false,
        source: bracketType !== "none" ? "truth" : "auto",
      };
    })
    .filter(Boolean);
  return { display: cleanWord, sylls: mapped };
}

// ── UNDERLINE PATH (paraToPointerLine simulation) ────────────────────────────
// Simulates a docx paragraph where the underlined span is given explicitly, then
// routes through the REAL syllabifyWithDirectorMark — the same core the bracket
// path uses. Only the underline-span → markStart/markEnd derivation is test-local
// (that is the part paraToPointerLine does from docx runs).
function underlinePathWord(display, underlinedSpan, lex) {
  const alphaMatch = display.match(/[A-Za-z]+/);
  if (!alphaMatch) return null;
  const core = alphaMatch[0];
  const coreStart = alphaMatch.index;
  const coreUl = core.split("").map((_, i) => {
    const g = coreStart + i;
    return g >= underlinedSpan[0] && g <= underlinedSpan[1];
  });
  if (!coreUl.some(Boolean)) {
    const w = wordFromDisplay(core, lex);
    if (!w) return null;
    return { display, sylls: w.sylls.map((s) => ({ text: cleanT(s.text), accent: false, source: "truth" })) };
  }
  const markStart = coreUl.indexOf(true);
  const markEnd = coreUl.lastIndexOf(true);
  const { sylls, accentIdx } = syllabifyWithDirectorMark(core, markStart, markEnd, lex);
  return {
    display,
    sylls: sylls
      .map((t, si) => ({ text: cleanT(t), accent: si === accentIdx, source: "truth" }))
      .filter((s) => s.text),
  };
}


// ── Test cases ───────────────────────────────────────────────────────────────
// Format: [bracketToken, display, underlineRange, description]
// underlineRange: [start, end] global char positions in display string (0-indexed)
// For "Re[deem]er": display="Redeemer", underline covers chars 2-5 (d-e-e-m)
const cases = [
  ["Re[deem]er.",   "Redeemer.",  [2, 5],  "mid: prefix+suffix"],
  ["up[on]",        "upon",       [2, 3],  "mid: prefix only"],
  ["in[car]nate",   "incarnate",  [2, 4],  "mid: prefix+suffix"],
  ["[ang]els",      "angels",     [0, 2],  "mid: suffix only (no prefix)"],
  ["Arch[ang]els",  "Archangels", [4, 6],  "mid: prefix+suffix"],
  ["Resur[rec]tion","Resurrection",[5, 7], "mid: prefix+suffix"],
  ["[Lord],",       "Lord,",      [0, 3],  "whole word"],
  ["[Hear]",        "Hear",       [0, 3],  "whole word no punct"],
  ["[Sav]ior",      "Savior",     [0, 2],  "mid: suffix only"],
  ["[pow]er//",     "power",      [0, 2],  "mid: suffix only"],
  ["Re[ceive]",     "Receive",    [2, 6],  "mid: prefix only"],
  ["be[fore]",      "before",     [2, 5],  "mid: prefix only"],
  ["a[gainst]",     "against",    [1, 6],  "mid: prefix only"],
];

const results = {};
let allPass = true;

for (const [bracketToken, display, ulRange, desc] of cases) {
  const bResult = bracketPathWord(bracketToken, lexicon);
  const uResult = underlinePathWord(display, ulRange, lexicon);

  const bSylls = bResult ? bResult.sylls.map(s => `${s.text}${s.accent ? "•" : ""}`) : ["ERROR"];
  const uSylls = uResult ? uResult.sylls.map(s => `${s.text}${s.accent ? "•" : ""}`) : ["ERROR"];

  const match = JSON.stringify(bSylls) === JSON.stringify(uSylls);
  if (!match) allPass = false;

  results[bracketToken] = {
    desc,
    bracket:   bSylls,
    underline: uSylls,
    match,
  };

  const icon = match ? "✓" : "✗";
  console.log(`${icon} ${bracketToken.padEnd(18)} bracket=${bSylls.join(" ")} underline=${uSylls.join(" ")}`);
  if (!match) console.log(`  MISMATCH — bracket and underline paths disagree`);
}

console.log(`\n${allPass ? "ALL PASS" : "FAILURES DETECTED"}`);

if (writeBaseline) {
  writeFileSync(baselinePath, JSON.stringify(results, null, 2));
  console.log(`Baseline written to: ${baselinePath}`);
} else if (existsSync(baselinePath)) {
  const baseline = JSON.parse(readFileSync(baselinePath, "utf8"));
  let regressions = 0;
  for (const [token, cur] of Object.entries(results)) {
    const base = baseline[token];
    if (!base) { console.log(`NEW CASE (not in baseline): ${token}`); continue; }
    if (JSON.stringify(cur.bracket) !== JSON.stringify(base.bracket)) {
      console.log(`REGRESSION bracket path for ${token}:`);
      console.log(`  before: ${base.bracket.join(" ")}`);
      console.log(`  after:  ${cur.bracket.join(" ")}`);
      regressions++;
    }
    if (JSON.stringify(cur.underline) !== JSON.stringify(base.underline)) {
      console.log(`REGRESSION underline path for ${token}:`);
      console.log(`  before: ${base.underline.join(" ")}`);
      console.log(`  after:  ${cur.underline.join(" ")}`);
      regressions++;
    }
  }
  if (regressions === 0) console.log("No regressions vs baseline ✓");
  else console.log(`${regressions} regression(s) detected`);
} else {
  console.log("No baseline found — run with --write-baseline to create one");
}

// ── Entry schema-conformance gate (tools/validate_entries.mjs) ───────────────
// Runs after the pointing checks above. Catches mis-named fields and missing
// Sunday-overlay flag blocks so a divergent entry cannot reach a push.
{
  const { spawnSync } = await import('node:child_process');
  const validator = new URL('./validate_entries.mjs', import.meta.url);
  const v = spawnSync(process.execPath, [validator.pathname], { stdio: 'inherit' });
  if (v.status !== 0) process.exit(v.status);
}
