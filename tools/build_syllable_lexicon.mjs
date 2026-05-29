#!/usr/bin/env node
/**
 * build_syllable_lexicon.mjs — BUILD-TIME tool (not shipped to the browser).
 *
 * Generates the tone-trainer's syllabification + stress data from OCA service
 * .docx files. Uses the CMU Pronouncing Dictionary (count + stress) and TeX
 * hyphenation patterns (boundary placement) as authoritative build-time sources.
 * Neither the dictionary nor the patterns ship in the app bundle — only the lean
 * generated table + the small hand-verified name lexicon do.
 *
 * Architecture (see tone_trainer_notes.md, "Syllabifier" section):
 *   - ~94% of liturgical words are in CMU → count + stress by lookup (authoritative).
 *       Boundaries placed by TeX hyphenation, reconciled to CMU's count.
 *   - Archaic -est/-eth endings → handled by rule (their own final syllable).
 *   - The ~6% not in CMU (proper names, liturgical-technical terms) → emitted to a
 *       residue list for human verification; phonetic best-guesses marked unconfirmed.
 *   - Rules are a last-ditch fallback only; CMU + lexicon carry the real load.
 *
 * Usage:
 *   node tools/build_syllable_lexicon.mjs <file1.docx-unpacked-dir|document.xml> [...]
 *   (pass the path to an unpacked document.xml, or a dir containing word/document.xml)
 *
 * Outputs (to tools/lexicon-out/):
 *   syllable-table.json   — { word: { sylls:[...], stressIdx:N, src:"cmu|tex|reconciled" } }
 *   name-residue.json     — words not in CMU, with best-guess sylls/stress, confirmed:false
 *   name-review.md        — human-readable review sheet for the residue (bulk verify)
 */
import Hypher from "hypher";
import patterns from "hyphenation.en-us";
import { dictionary } from "cmu-pronouncing-dictionary";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "fs";
import { join } from "path";
import { DOMParser } from "@xmldom/xmldom";

const h = new Hypher(patterns);
const VOWELS = "aeiouy";
const isV = (c) => VOWELS.includes(c);

// ── CMU lookup: authoritative syllable count + primary-stress index ──────────────
function cmu(word) {
  const p = dictionary[word.toLowerCase()];
  if (!p) return null;
  const vowels = p.split(" ").filter((x) => /[0-2]$/.test(x));
  let stressIdx = vowels.findIndex((v) => v.endsWith("1"));
  if (stressIdx < 0) stressIdx = vowels.findIndex((v) => v.endsWith("2"));
  if (stressIdx < 0) stressIdx = 0;
  return { count: vowels.length, stressIdx };
}

// ── archaic -est/-eth: its own final syllable when following a consonant ─────────
const ARCHAIC = /[^aeiouy](est|eth)$/i;
function archaicSplit(word) {
  const m = word.match(/(est|eth)$/i);
  if (!m) return null;
  const stem = word.slice(0, word.length - 3);
  const stemSyl = h.hyphenate(stem);
  return [...stemSyl, word.slice(word.length - 3)];
}

// ── boundary placement: TeX, reconciled to a known count where possible ──────────
// Rough rule fallback (only used when TeX undershoots and we must force a count).
const VDI = new Set(["ai","au","ay","ea","ee","ei","eu","ey","oa","oo","ou","ue","ui","aw","ew","ow","oe"]);
function ruleNucleiBreaks(core) {
  const w = core.toLowerCase();
  const nuc = [];
  let i = 0;
  while (i < w.length) {
    if (isV(w[i]) && !(w[i] === "y" && i === 0)) {
      let j = i; while (j < w.length && isV(w[j])) j++;
      let k = i;
      while (k < j) {
        if (k + 1 < j && VDI.has(w[k] + w[k + 1])) { nuc.push([k, k + 1]); k += 2; }
        else { nuc.push([k, k]); k += 1; }
      }
      i = j;
    } else i++;
  }
  const breaks = [];
  for (let g = 0; g < nuc.length - 1; g++) {
    const vE = nuc[g][1], nV = nuc[g + 1][0], cc = nV - vE - 1;
    breaks.push(cc <= 0 ? nV : cc === 1 ? nV - 1 : vE + 1 + Math.floor(cc / 2));
  }
  return breaks;
}
function applyBreaks(core, breaks) {
  let out = [], prev = 0;
  [...breaks].sort((a, b) => a - b).forEach((b) => { out.push(core.slice(prev, b)); prev = b; });
  out.push(core.slice(prev));
  return out;
}

// Produce {sylls, stressIdx, src} for a word. Returns null if not resolvable via CMU.
function resolve(word) {
  // archaic endings first (CMU often lacks them)
  if (ARCHAIC.test(word)) {
    const a = archaicSplit(word);
    if (a) return { sylls: a, stressIdx: 0, src: "archaic" };
  }
  const c = cmu(word);
  if (!c) return null; // not in CMU → residue
  const tex = h.hyphenate(word);
  if (tex.length === c.count) return { sylls: tex, stressIdx: c.stressIdx, src: "tex" };
  // TeX count != CMU count → reconcile: force rule breaks to CMU's count if achievable
  const rb = ruleNucleiBreaks(word);
  const ruleSyl = applyBreaks(word, rb);
  if (ruleSyl.length === c.count) return { sylls: ruleSyl, stressIdx: c.stressIdx, src: "reconciled" };
  // count+stress known but boundary uncertain — keep TeX split, mark low-confidence
  return { sylls: tex.length > 1 ? tex : ruleSyl, stressIdx: c.stressIdx, src: "count-only", lowConfidence: true };
}

// ── phonetic best-guess for residue (not-in-CMU) words ──────────────────────────
function guessResidue(word) {
  if (ARCHAIC.test(word)) {
    const a = archaicSplit(word);
    if (a) return { sylls: a, stressIdx: 0 };
  }
  const tex = h.hyphenate(word);
  const sylls = tex.length > 1 ? tex : applyBreaks(word, ruleNucleiBreaks(word));
  // crude stress guess: first syllable for ≤2 syllables, else second (very rough)
  const stressIdx = sylls.length <= 2 ? 0 : 1;
  return { sylls, stressIdx };
}

// ── docx word extraction (reuse the component's parser logic) ────────────────────
function wordsFromXml(xmlPath) {
  const xml = readFileSync(xmlPath, "utf8");
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const allP = Array.from(doc.getElementsByTagName("*")).filter((e) => e.localName === "p");
  const lines = [];
  for (const p of allP) {
    const tEls = Array.from(p.getElementsByTagName("*")).filter((e) => e.localName === "t");
    let text = tEls.map((t) => t.textContent || "").join("");
    text = text.replace(/([a-z])(Tone)\b/g, "$1 $2"); // un-glue heading concatenations
    if (text.trim()) lines.push(text.trim());
  }
  return [...new Set(lines.flatMap((l) => l.match(/[A-Za-z]+/g) || []))]
    .filter((w) => w.length > 1)
    // drop abbreviation/junk tokens: all-consonant short tokens (Lk, Ps, nd, st),
    // which are scripture/ordinal abbreviations, not syllabifiable words.
    .filter((w) => !(w.length <= 3 && !/[aeiouy]/i.test(w)));
}

function resolveXmlPath(arg) {
  if (statSync(arg).isDirectory()) {
    const p = join(arg, "word", "document.xml");
    if (existsSync(p)) return p;
    const p2 = join(arg, "document.xml");
    if (existsSync(p2)) return p2;
    throw new Error(`No document.xml under ${arg}`);
  }
  return arg;
}

// ── main ─────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
if (!args.length) {
  console.error("usage: node tools/build_syllable_lexicon.mjs <unpacked-dir|document.xml> [...]");
  process.exit(1);
}

const OUT = join("tools", "lexicon-out");
mkdirSync(OUT, { recursive: true });

// load existing table to accumulate across runs (build on the last)
const tablePath = join(OUT, "syllable-table.json");
const residuePath = join(OUT, "name-residue.json");
const table = existsSync(tablePath) ? JSON.parse(readFileSync(tablePath, "utf8")) : {};
const residue = existsSync(residuePath) ? JSON.parse(readFileSync(residuePath, "utf8")) : {};

let allWords = new Set();
for (const arg of args) {
  const xmlPath = resolveXmlPath(arg);
  for (const w of wordsFromXml(xmlPath)) allWords.add(w);
}

let added = 0, newResidue = 0, lowConf = 0;
for (const word of allWords) {
  const key = word.toLowerCase();
  if (table[key] || residue[key]) continue; // already known — build on the last
  const r = resolve(word);
  if (r) {
    table[key] = { word, sylls: r.sylls, stressIdx: r.stressIdx, src: r.src, ...(r.lowConfidence ? { lowConfidence: true } : {}) };
    added++;
    if (r.lowConfidence) lowConf++;
  } else {
    const g = guessResidue(word);
    residue[key] = { word, sylls: g.sylls, stressIdx: g.stressIdx, confirmed: false };
    newResidue++;
  }
}

writeFileSync(tablePath, JSON.stringify(table, null, 0));
writeFileSync(residuePath, JSON.stringify(residue, null, 2));

// human-readable review sheet for the residue
const rows = Object.values(residue)
  .sort((a, b) => a.word.localeCompare(b.word))
  .map((e) => {
    const marked = e.sylls.map((s, i) => (i === e.stressIdx ? s.toUpperCase() : s)).join("·");
    return `| ${e.word} | ${e.sylls.join("·")} | ${e.stressIdx + 1} | ${marked} | ${e.confirmed ? "✓" : ""} |`;
  });
const md = `# Name / Term Stress Review — Tone Trainer Lexicon

These words are **not in the CMU dictionary** (proper names, liturgical-technical
terms, some archaic forms), so BOTH their **syllable boundaries** and their
**stress** are phonetic best-guesses, marked \`confirmed: false\` until reviewed.

**Please check two things per row:**
1. **Syllables** — is the word broken into the right syllables? (TeX under-splits
   words it doesn't know, so liturgical terms especially may be wrong, e.g. a
   4-syllable word shown as 2.)
2. **Stress** — the stressed syllable is shown in CAPS in the last column. Is it
   on the right syllable? (Greek/Slavonic names are the most likely to be wrong,
   e.g. Theotokos is the·o·TO·kos, not THE·o·to·kos.)

Many are likely right; correct in bulk and send back. Liturgical-technical terms
(Troparion, Kontakion, Stichera, Theotokos…) have known correct forms — those are
the quickest wins.

Total residue words: ${Object.keys(residue).length}

| Word | Syllables | Stress # | Stressed (CAPS = stressed) | OK? |
|------|-----------|----------|----------------------------|-----|
${rows.join("\n")}

*Generated by tools/build_syllable_lexicon.mjs. Correct either column; send back
for folding into the confirmed lexicon.*
`;
writeFileSync(join(OUT, "name-review.md"), md);

console.log(`words processed: ${allWords.size}`);
console.log(`table entries (in-CMU / archaic): ${Object.keys(table).length}  (+${added} new, ${lowConf} low-confidence boundaries)`);
console.log(`name residue (need verification): ${Object.keys(residue).length}  (+${newResidue} new)`);
console.log(`\nwrote:\n  ${tablePath}\n  ${residuePath}\n  ${join(OUT, "name-review.md")}`);
