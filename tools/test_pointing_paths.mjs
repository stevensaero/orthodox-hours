/**
 * test_pointing_paths.mjs
 *
 * Regression test for the shared pointing logic.
 * Tests both the bracket path (parseBracketWord) and the underline path
 * (paraToPointerLine simulation) against identical word sets.
 *
 * Usage: node tools/test_pointing_paths.mjs [--write-baseline]
 *   --write-baseline  write current output as the golden baseline
 *
 * Without --write-baseline: compares against baseline and reports diffs.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dir, "..");
const baselinePath = path.join(__dir, "pointing_baseline.json");
const writeBaseline = process.argv.includes("--write-baseline");

// ── Load lexicon ──────────────────────────────────────────────────────────────
const lexiconPath = path.join(repoRoot, "public", "lexicon", "syllable-table.json");
const lexicon = JSON.parse(readFileSync(lexiconPath, "utf8"));
console.log(`Lexicon: ${Object.keys(lexicon).length} entries`);

// ── Replicate core functions from tone-trainer.jsx ───────────────────────────
// These must be kept in sync with the component. The test imports them as text
// since they can't be ES-module-imported from JSX.

function lookupWord(word, lex) {
  if (!lex) return null;
  const key = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!key) return null;
  return lex[key] || null;
}

function syllabifyRules(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return [word];
  const vowelGroups = [];
  let i = 0;
  while (i < w.length) {
    if ("aeiouy".includes(w[i])) {
      const start = i;
      while (i < w.length && "aeiouy".includes(w[i])) i++;
      vowelGroups.push({ start, end: i - 1 });
    } else i++;
  }
  if (vowelGroups.length <= 1) return [word];
  const parts = [];
  let pos = 0;
  for (let g = 0; g < vowelGroups.length - 1; g++) {
    const cutoff = Math.min(vowelGroups[g].end + 2, vowelGroups[g + 1].start);
    parts.push(word.slice(pos, cutoff));
    pos = cutoff;
  }
  parts.push(word.slice(pos));
  return parts.filter(Boolean);
}

function syllabifyWithSource(wordDisplay, lex) {
  const m = wordDisplay.match(/[A-Za-z']+/);
  const core = m ? m[0] : wordDisplay;
  const lead = m ? wordDisplay.slice(0, m.index) : "";
  const trail = m ? wordDisplay.slice(m.index + core.length) : "";
  const entry = lookupWord(core, lex);
  if (entry) {
    const sylls = entry.sylls.map((s, i) => {
      if (i === 0) return lead + s;
      if (i === entry.sylls.length - 1) return s + trail;
      return s;
    });
    return { sylls, stressIdx: entry.stressIdx, source: entry.src || "table" };
  }
  const sylls = syllabifyRules(wordDisplay);
  return { sylls, stressIdx: null, source: "rule" };
}

function wordFromDisplay(wordDisplay, lex) {
  const { sylls, stressIdx, source } = syllabifyWithSource(wordDisplay, lex);
  const mappedSylls = sylls.map((t, i) => {
    const clean = t.replace(/[^A-Za-z''-]/g, "");
    if (!clean) return null;
    return {
      text: clean,
      accent: stressIdx !== null ? i === stressIdx : i === 0,
      source,
    };
  }).filter(Boolean);
  return mappedSylls.length ? { display: wordDisplay, sylls: mappedSylls } : null;
}

function bracketSpanToSyllIdx(core, bracketStart, bracketEnd, sylls) {
  const isVowel = c => "aeiouy".includes(c.toLowerCase());
  const syllRanges = [];
  let pos = 0;
  for (const s of sylls) {
    syllRanges.push({ start: pos, end: pos + s.length - 1 });
    pos += s.length;
  }
  let k = bracketStart;
  while (k <= bracketEnd) {
    if (isVowel(core[k])) {
      const idx = syllRanges.findIndex(r => k >= r.start && k <= r.end);
      if (idx >= 0) return idx;
      while (k <= bracketEnd && isVowel(core[k])) k++;
    } else k++;
  }
  let max = 0, best = 0;
  syllRanges.forEach((r, si) => {
    const lo = Math.max(r.start, bracketStart);
    const hi = Math.min(r.end, bracketEnd);
    const ov = Math.max(0, hi - lo + 1);
    if (ov > max) { max = ov; best = si; }
  });
  return best;
}

// ── BRACKET PATH (parseBracketWord) ─────────────────────────────────────────
function parseBracketWord(token, lex) {
  if (!/\[/.test(token)) {
    return { cleanWord: token, accentIdx: -1, bracketType: "none" };
  }
  let clean = "", bracketStart = -1, bracketEnd = -1, inBracket = false;
  for (let i = 0; i < token.length; i++) {
    if (token[i] === "[") { inBracket = true; bracketStart = clean.length; continue; }
    if (token[i] === "]") { inBracket = false; bracketEnd = clean.length - 1; continue; }
    clean += token[i];
  }
  const alphaMatch = clean.match(/[A-Za-z''-]+/);
  if (!alphaMatch) return { cleanWord: token.replace(/[\[\]]/g, ""), accentIdx: -1, bracketType: "none" };
  const core = alphaMatch[0];
  const coreOffset = alphaMatch.index;
  const entry = lookupWord(core, lex);
  const rawSylls = entry ? entry.sylls : syllabifyRules(core);
  const stressIdx = entry ? (entry.stressIdx ?? 0) : 0;
  const adjStart = bracketStart - coreOffset;
  const adjEnd   = bracketEnd - coreOffset;
  const wholeWord = adjStart <= 0 && adjEnd >= core.length - 1;
  if (wholeWord) {
    return { cleanWord: clean, accentIdx: stressIdx, bracketType: "whole", sylls: rawSylls };
  }
  const clampedStart = Math.max(0, adjStart);
  const clampedEnd   = Math.min(core.length - 1, adjEnd);
  const prefix   = core.slice(0, clampedStart);
  const bracketed = core.slice(clampedStart, clampedEnd + 1);
  const suffix   = core.slice(clampedEnd + 1);
  if (prefix.length > 0 || suffix.length > 0) {
    const directorSylls = [prefix, bracketed, suffix].filter(s => s.length > 0);
    return { cleanWord: clean, accentIdx: prefix.length > 0 ? 1 : 0, bracketType: "mid", sylls: directorSylls };
  }
  const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);
  return { cleanWord: clean, accentIdx: Math.max(0, idx), bracketType: "mid", sylls: rawSylls };
}

// Simulate parseTruthLines word result for a single token
function bracketPathWord(token, lex) {
  const { cleanWord, accentIdx, bracketType, sylls: rawSylls } = parseBracketWord(token, lex);
  if (!cleanWord) return null;
  const displaySylls = (bracketType === "mid" && rawSylls && rawSylls.length > 0)
    ? rawSylls
    : syllabifyWithSource(cleanWord.replace(/[^A-Za-z''-]/g, "") || cleanWord, lex).sylls;
  const mappedSylls = displaySylls.map((t, si) => {
    const cleanT = t.replace(/[^A-Za-z''-]/g, "");
    if (!cleanT) return null;
    const accent = bracketType !== "none" ? si === accentIdx : false;
    return { text: cleanT, accent, source: bracketType !== "none" ? "truth" : "auto" };
  }).filter(Boolean);
  return { display: cleanWord, sylls: mappedSylls };
}

// ── UNDERLINE PATH (paraToPointerLine simulation) ────────────────────────────
// Simulates a docx paragraph where the "underlined" span is specified explicitly.
function underlinePathWord(display, underlinedSpan, lex) {
  // Build per-char underline flags for the core
  const alphaMatch = display.match(/[A-Za-z]+/);
  if (!alphaMatch) return null;
  const core = alphaMatch[0];
  const coreStart = alphaMatch.index;

  // Build coreUl: true for chars in underlinedSpan, false otherwise
  const coreUl = core.split("").map((_, i) => {
    const globalPos = coreStart + i;
    return globalPos >= underlinedSpan[0] && globalPos <= underlinedSpan[1];
  });

  const anyUnderlined = coreUl.some(Boolean);
  if (!anyUnderlined) {
    const wordObj = wordFromDisplay(core, lex);
    if (!wordObj) return null;
    return { display, sylls: wordObj.sylls.map(s => ({ ...s, accent: false })) };
  }

  const firstUl = coreUl.indexOf(true);
  const lastUl  = coreUl.lastIndexOf(true);
  const prefix    = core.slice(0, firstUl);
  const underlined = core.slice(firstUl, lastUl + 1);
  const suffix    = core.slice(lastUl + 1);
  const hasPrefix = prefix.length > 0;
  const hasSuffix = suffix.length > 0;

  if (hasPrefix || hasSuffix) {
    const dirSylls = [prefix, underlined, suffix].filter(s => s.length > 0);
    const accentIdx = hasPrefix ? 1 : 0;
    return {
      display,
      sylls: dirSylls.map((t, si) => ({
        text: t, accent: si === accentIdx, source: "truth",
      })),
    };
  }

  // Whole-word or no-prefix fallback
  const wordObj = wordFromDisplay(core, lex);
  if (!wordObj) return null;
  const sylls = wordObj.sylls;
  const wholeWordUnderlined = coreUl.every(Boolean);
  if (wholeWordUnderlined) {
    const stressIdx = wordObj.sylls.findIndex(s => s.accent);
    const accentIdx = stressIdx >= 0 ? stressIdx : 0;
    return { display, sylls: sylls.map((s, si) => ({ ...s, accent: si === accentIdx, source: "truth" })) };
  }

  // Nucleus fallback
  const isVowel = c => "aeiouy".includes(c.toLowerCase());
  const syllRanges = [];
  let pos = 0;
  for (const s of sylls) { syllRanges.push({ start: pos, end: pos + s.text.length - 1 }); pos += s.text.length; }
  const ulPositions = new Set(coreUl.map((u, i) => u ? i : -1).filter(i => i >= 0));
  const nuclei = [];
  let k = 0;
  while (k < core.length) {
    if (isVowel(core[k])) { nuclei.push(k); while (k < core.length && isVowel(core[k])) k++; }
    else k++;
  }
  let accentIdx = -1;
  for (const n of nuclei) {
    if (ulPositions.has(n)) {
      accentIdx = syllRanges.findIndex(r => n >= r.start && n <= r.end);
      if (accentIdx >= 0) break;
    }
  }
  if (accentIdx < 0) accentIdx = 0;
  return { display, sylls: sylls.map((s, si) => ({ ...s, accent: si === accentIdx, source: "truth" })) };
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
