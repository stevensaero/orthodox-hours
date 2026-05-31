/**
 * snapshot_comparison.mjs
 *
 * Programmatic snapshot tool for pre/post diff validation of tone-trainer engine changes.
 * Replicates the browser's "Export JSON ↓" button without needing a running dev server.
 *
 * Usage:
 *   node tools/snapshot_comparison.mjs --docx <file.docx> --tone <1|2|3> --out <output.json>
 *
 * Or via npm script:
 *   npm run snapshot -- --docx tools/2026-0215-texts-tt-.docx --tone 3 --out tools/pre_cad1_t3_feb.json
 *
 * Requirements: node 18+, jszip and @xmldom/xmldom in node_modules (both already present).
 *
 * Limitations:
 *   - Exercises parseTruthLines + autoEncodeLines + buildComparison + pointLine (accent/role layer).
 *   - Does NOT exercise lineToNotes() — that closes over React state (bpm, activeTone).
 *     Audio/duration correctness must be verified by ear in the browser after a patch.
 *   - dur values in output use normalised units (H=1, Q=0.5, W=2, DH=1.5) not seconds.
 */

import { readFileSync, writeFileSync } from "fs";
import { createRequire } from "module";
import { DOMParser } from "@xmldom/xmldom";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const JSZip = require("jszip");

// ── Arg parsing ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const get = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : null; };
const docxPath  = get("--docx");
const toneArg   = parseInt(get("--tone") || "1", 10);
const outPath   = get("--out");

if (!docxPath || !outPath) {
  console.error("Usage: node tools/snapshot_comparison.mjs --docx <file> --tone <1|2|3> --out <output.json>");
  process.exit(1);
}

// ── Replicated constants from tone-trainer.jsx ───────────────────────────────
// These must stay in sync with the component. When a constant changes in the
// component, update here too.

const STOP = new Set([
  "the","a","an","and","or","but","of","to","in","on","at","by","for",
  "with","from","as","is","are","was","were","be","been","being",
  "have","has","had","do","does","did","will","would","shall","should",
  "may","might","can","could","must","that","which","who","whom","this",
  "these","those","it","its","not","no","so","if","then","than","when",
  "where","how","all","both","each","few","more","most","other","some",
  "such","nor","yet","while","after","before","since","until","though",
  "about","above","below","between","into","through","during","he","she",
  "we","they","their","them","his","her","our","your","its","my","thy",
  "thine","mine","him","hers","ours","yours",
]);

// PH_DEFS — copied verbatim from tone-trainer.jsx.
// CRITICAL: keep in sync. If the component's PH_DEFS changes, update here.
const PH_DEFS = {
  1: {
    A:     { recite: "re", inton: true,  prep: null, cad: ["do", "ti", "la"] },
    B:     { recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"] },
    C:     { recite: "re", inton: true,  prep: null, cad: ["do", "ti"] },
    D:     { recite: "do", inton: false, prep: null, cad: ["ti", "do", "re", "do", "ti"] },
    Final: { recite: "re", inton: false, prep: null, cad: ["do", "ti", "la"] },
  },
  2: {
    A:     { recite: "do", inton: false, prep: null,  cad: ["re", "do", "ti", "do"] },
    B:     { recite: "do", inton: false, prep: null,  cad: ["do", "re", "ti"] },
    C:     { recite: "re", inton: true,  prep: null,  cad: ["do", "ti"] },
    D:     { recite: "do", inton: false, prep: null,  cad: ["re", "do", "re"] },
    Final: { recite: "re", inton: false, prep: "ti",  cad: ["do", "re", "do", "ti"] },
  },
  3: {
    A: { recite: "fa", inton: false, prep: null, cad: ["fa", "do", "mi"] },
    B: {
      recite: "fa", inton: false, prep: null,
      cad: ["mi", "re", "do"], anchorDH: true,
    },
    Final: {
      recite: "fa", inton: false, prep: null,
      cad: ["mi", "fa", "re", "do"],
    },
  },
};

const ROT_DEFS = {
  1: ["A", "B", "C", "D"],
  2: ["A", "B", "C", "D"],
  3: ["A", "B"],
};

// ── Helper functions (replicated from tone-trainer.jsx) ───────────────────────

const phraseForLine = (i, total, rot) =>
  i === total - 1 ? "Final" : rot[i % rot.length];

function syllabifySimple(word) {
  // Minimal rule-based fallback — only used for words not in the lexicon.
  // Single syllable for monosyllables; split naively otherwise.
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w.length) return [word];
  const vowels = w.match(/[aeiouy]+/g);
  if (!vowels || vowels.length <= 1) return [word];
  // Rough split: one syllable per vowel cluster.
  const parts = [];
  let rest = word;
  let pos = 0;
  const wLower = word.toLowerCase();
  for (let vi = 0; vi < vowels.length - 1; vi++) {
    const vIdx = wLower.indexOf(vowels[vi], pos);
    const end = vIdx + vowels[vi].length;
    const splitAt = Math.min(end + 1, word.length);
    parts.push(word.slice(pos, splitAt));
    pos = splitAt;
  }
  parts.push(word.slice(pos));
  return parts.filter(Boolean);
}

function syllabifyWithSource(word, lexicon) {
  if (lexicon) {
    const key = word.toLowerCase().replace(/[^a-z''-]/g, "");
    const entry = lexicon[key];
    if (entry) {
      return { sylls: entry.sylls, stressIdx: entry.stressIdx, source: entry.src || "table" };
    }
  }
  const sylls = syllabifySimple(word);
  // Stress heuristic: last syllable for short words, penultimate for longer.
  const stressIdx = sylls.length <= 2 ? 0 : sylls.length - 2;
  return { sylls, stressIdx, source: "rule" };
}

function wordFromDisplay(wordDisplay, lexicon) {
  const clean = wordDisplay.replace(/[^A-Za-z''\-]/g, "");
  if (!clean) return null;
  const { sylls, stressIdx, source } = syllabifyWithSource(clean, lexicon);
  return {
    display: wordDisplay,
    sylls: sylls.map((t, i) => ({
      text: t.replace(/[^A-Za-z''\-]/g, "") || t,
      accent: i === stressIdx,
      source,
    })).filter(s => s.text),
  };
}

function anchorIndex(flat) {
  const acc = [];
  flat.forEach((s, i) => { if (s.accent) acc.push(i); });
  if (!acc.length) return Math.max(0, flat.length - 1);
  const lastIdx = flat.length - 1;
  let a = acc[acc.length - 1];
  const last = flat[lastIdx];
  if (a === lastIdx && last.single && last.accent && acc.length >= 2) {
    a = acc[acc.length - 2];
  }
  return a;
}

function flatten(line) {
  const out = [];
  line.words.forEach((w) => {
    const single = w.sylls.length === 1;
    w.sylls.forEach((s) => out.push({ ...s, single }));
  });
  return out;
}

function distribute(figure, count) {
  if (!count) return [];
  if (count === figure.length) return figure.map((p) => [p]);
  if (count < figure.length) return figure.slice(0, count).map((p) => [p]);
  // count > figure.length: anchor gets first, last gets last, middle repeats penultimate.
  const result = [];
  const penult = figure[figure.length - 2] ?? figure[figure.length - 1];
  for (let i = 0; i < count; i++) {
    if (i === 0)           result.push([figure[0]]);
    else if (i === count - 1) result.push([figure[figure.length - 1]]);
    else                   result.push([penult]);
  }
  return result;
}

function pointLine(line, phDefs, activeTone) {
  const def = phDefs[line.phrase];
  const flat = flatten(line);

  // Tone 3 Final Phrase two-part cadence — scope-guarded.
  if (activeTone === 3 && line.phrase === "Final") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a2 = anchorIndex(flat);
      const lastIdx = flat.length - 1;
      let a1 = acc[acc.length - 2];
      if (a1 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a1 = acc[acc.length - 3];
      if (a1 >= 0 && a1 < a2) {
        const body  = flat.slice(0, a1);
        const cad1  = flat.slice(a1, a2);
        const cad   = flat.slice(a2);
        const roles = [];
        body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        const dist1 = distribute(["mi", "do", "re"], cad1.length);
        cad1.forEach((s, i) => roles.push({ role: "cad1", pitches: dist1[i] || ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 }));
        const dist2 = distribute(def.cad, cad.length);
        cad.forEach((s, i) => roles.push({ role: "cad", pitches: dist2[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 }));
        return roles;
      }
    }
  }

  // Standard single-anchor logic.
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  // Pre-slur detection.
  let preslurIdx = -1;
  if (def.prep && body.length >= 1) {
    const candidate = body[body.length - 1];
    if (candidate.single && candidate.accent) preslurIdx = body.length - 1;
  }

  const intonIdx = def.inton
    ? (body.findIndex(s => s.accent) >= 0 ? body.findIndex(s => s.accent) : 0)
    : -1;

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (def.inton && i === intonIdx) role = "inton";
    if (preslurIdx >= 0 && i === preslurIdx) {
      roles.push({ role: "preslur", pitches: [def.recite, def.prep], accent: s.accent, text: s.text, source: s.source });
      return;
    }
    if (def.prep && i === body.length - 1 && preslurIdx < 0) { role = "prep"; pitch = def.prep; }
    roles.push({ role, pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
  });

  const dist = distribute(def.cad, cad.length);
  cad.forEach((s, i) =>
    roles.push({ role: "cad", pitches: dist[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
  );
  return roles;
}

function applyPhraseAccent(words, phrase, activePH) {
  const flat = [];
  words.forEach((w, wi) => {
    w.sylls.forEach((s, si) => {
      flat.push({ text: s.text, stressed: s.accent, single: w.sylls.length === 1, wi, si });
    });
  });
  if (!flat.length) return words;
  const lastIdx = flat.length - 1;
  const sIdxs = flat
    .map((s, i) => (s.stressed && !STOP.has(s.text.toLowerCase()) ? i : -1))
    .filter(i => i >= 0);
  let anchorIdx = lastIdx;
  if (sIdxs.length > 0) {
    let c = sIdxs[sIdxs.length - 1];
    if (c === lastIdx && flat[lastIdx].single && sIdxs.length >= 2)
      c = sIdxs[sIdxs.length - 2];
    anchorIdx = c;
  }
  let intonIdx = -1;
  if (activePH && activePH[phrase] && activePH[phrase].inton && sIdxs.length > 0) {
    const first = sIdxs[0];
    if (first !== anchorIdx) intonIdx = first;
  }
  const accentSet = new Set([anchorIdx]);
  if (intonIdx >= 0) accentSet.add(intonIdx);
  let fi = 0;
  return words.map((w) => ({ ...w, sylls: w.sylls.map((s) => ({ ...s, accent: accentSet.has(fi++) })) }));
}

function autoEncodeLines(truthLines, lexicon, activePH) {
  return truthLines.map((line) => {
    const rawWords = line.words.map((w) => {
      const display = w.display.replace(/[\[\]]/g, "");
      return wordFromDisplay(display, lexicon);
    }).filter(Boolean);
    const words = applyPhraseAccent(rawWords, line.phrase, activePH);
    return { phrase: line.phrase, words };
  });
}

function buildComparison(truthLines, machineLines, phDefs, activeTone) {
  let anchorMatchCount = 0;
  let firstAnchorMatchCount = 0;
  let syllMatchCount = 0;
  let totalSylls = 0;

  const H = 1, Q = 0.5, W = 2, DH = 1.5; // normalised durations

  const lines = truthLines.map((tLine, li) => {
    const mLine = machineLines[li] || { phrase: tLine.phrase, words: [] };
    const flatSylls = (words) => {
      const out = [];
      words.forEach((w) => w.sylls.forEach((s) => out.push({ text: s.text, accent: s.accent, source: s.source })));
      return out;
    };
    const tFlat = flatSylls(tLine.words);
    const mFlat = flatSylls(mLine.words);

    const truthAnchor  = anchorIndex(tFlat);
    const machineAnchor = anchorIndex(mFlat);
    const anchorMatch  = truthAnchor === machineAnchor;
    if (anchorMatch) anchorMatchCount++;

    // First-anchor (cad1) tracking.
    const firstAnchorOf = (flat) => {
      const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
      if (acc.length < 2) return null;
      const lastIdx = flat.length - 1;
      let c = acc[acc.length - 2];
      if (c === lastIdx && flat[lastIdx].single && acc.length >= 3)
        c = acc[acc.length - 3];
      const anchor2 = anchorIndex(flat);
      return c !== anchor2 ? c : null;
    };
    const truthFirstAnchor   = firstAnchorOf(tFlat);
    const machineFirstAnchor = firstAnchorOf(mFlat);
    let firstAnchorMatch = null;
    if (truthFirstAnchor !== null && machineFirstAnchor !== null) {
      firstAnchorMatch = truthFirstAnchor === machineFirstAnchor;
      if (firstAnchorMatch) firstAnchorMatchCount++;
    }

    // Role/pitch computation via pointLine.
    const computeRoles = (line) => {
      if (!phDefs) return null;
      const roles = pointLine(line, phDefs, activeTone);
      const isFinal = line.phrase === "Final";
      const phDef = phDefs[line.phrase];
      const useAnchorDH = !!(phDef && phDef.anchorDH);
      const cadIdxs  = roles.map((r, i) => r.role === "cad"  ? i : -1).filter(i => i >= 0);
      const cad1Idxs = roles.map((r, i) => r.role === "cad1" ? i : -1).filter(i => i >= 0);
      return roles.map((r, ri) => {
        let dur;
        if (r.role === "inton")        { dur = r.accent ? H : Q; }
        else if (r.role === "recite" || r.role === "prep") { dur = Q; }
        else if (r.role === "preslur") { dur = H; }
        else if (r.role === "cad1") {
          const pos = cad1Idxs.indexOf(ri);
          dur = pos === 0 ? H : Q;
        } else if (r.role === "cad") {
          const cadPos  = cadIdxs.indexOf(ri);
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadIdxs.length - 1;
          if (isFirst && isLast)   dur = isFinal ? W : H;
          else if (isFirst)        dur = (useAnchorDH && cadIdxs.length <= (phDef?.cad?.length ?? 99)) ? DH : H;
          else if (isLast)         dur = isFinal ? W : H;
          else                     dur = Q;
        } else { dur = Q; }
        return { role: r.role, pitches: r.pitches, dur };
      });
    };
    const tRoles = computeRoles(tLine);
    const mRoles = computeRoles(mLine);

    const maxLen = Math.max(tFlat.length, mFlat.length);
    const syllables = [];
    for (let si = 0; si < maxLen; si++) {
      const ts = tFlat[si];
      const ms = mFlat[si];
      const agree = ts && ms ? ts.accent === ms.accent : false;
      if (agree) syllMatchCount++;
      totalSylls++;
      const syl = {
        text: ts?.text || ms?.text || "?",
        truthAccent: ts?.accent ?? false,
        machineAccent: ms?.accent ?? false,
        agree,
        isAnchor: si === truthAnchor,
        isMachineAnchor: si === machineAnchor,
      };
      if (tRoles && tRoles[si]) { syl.role = tRoles[si].role; syl.pitches = tRoles[si].pitches; syl.dur = tRoles[si].dur; }
      if (mRoles && mRoles[si]) { syl.machineRole = mRoles[si].role; syl.machinePitches = mRoles[si].pitches; syl.machineDur = mRoles[si].dur; }
      syllables.push(syl);
    }

    return { phrase: tLine.phrase, truthAnchor, machineAnchor, truthFirstAnchor, machineFirstAnchor, anchorMatch, firstAnchorMatch, syllables };
  });

  return { lines, anchorMatchCount, firstAnchorMatchCount, totalLines: truthLines.length, syllMatchCount, totalSylls };
}

// ── Docx parsing (Node-safe — uses @xmldom/xmldom instead of browser DOMParser) ─

const TONE_HEADING = /\bTone\s+([1-8]|[IVX]+)\b/i;
const ROMAN = { I:1, II:2, III:3, IV:4, V:5, VI:6, VII:7, VIII:8 };
function parseToneLabel(s) {
  const m = s.match(TONE_HEADING);
  if (!m) return null;
  const raw = m[1];
  const n = /^[0-9]$/.test(raw) ? parseInt(raw, 10) : (ROMAN[raw.toUpperCase()] || null);
  return n;
}

function parseDocxParagraphsNode(xmlString) {
  const doc = new DOMParser().parseFromString(xmlString, "application/xml");
  const allEls = Array.from(doc.getElementsByTagName("*"));
  const allP = allEls.filter(el => el.localName === "p");
  const paras = [];
  for (const p of allP) {
    const runs = [];
    const rEls = Array.from(p.getElementsByTagName("*")).filter(el => el.localName === "r");
    for (const r of rEls) {
      let underline = false;
      const rprList = Array.from(r.childNodes).filter(c => c.localName === "rPr");
      if (rprList.length) {
        const rpr = rprList[0];
        const uList = Array.from(rpr.childNodes).filter(c => c.localName === "u");
        if (uList.length) {
          const u = uList[0];
          const val = u.getAttribute("w:val") || u.getAttribute("val") || "";
          underline = val !== "none";
        }
      }
      const tEls = Array.from(r.getElementsByTagName("*")).filter(el => el.localName === "t");
      const txt = tEls.map(t => t.textContent || "").join("");
      if (txt) runs.push({ text: txt, underline });
    }
    const text = runs.map(x => x.text).join("").trim();
    if (text) paras.push({ text, runs, toneHeading: parseToneLabel(text), idx: paras.length });
  }
  return paras;
}

function assignTones(paras) {
  let current = null;
  return paras.map((p) => {
    const isHeading = !!p.toneHeading;
    if (isHeading) current = p.toneHeading;
    const effectiveTone = current || 1;
    return { ...p, effectiveTone, inheritedTone: isHeading ? false : !!current, isHeading };
  });
}

const hasUnderline = (p) => p.runs.some(r => r.underline);

function segmentStichera(paras) {
  const groups = [];
  let cur = null, sawSlash = false, closeNext = false;
  const finish = () => {
    if (!cur || !cur.length) { cur = null; return; }
    groups.push({
      lines: cur,
      tone: cur[0].effectiveTone,
      inherited: cur[0].inheritedTone,
      incipit: cur[0].text.split(/\s+/).slice(0, 4).join(" "),
      suspect: !sawSlash,
    });
    cur = null; sawSlash = false; closeNext = false;
  };
  for (const p of paras) {
    if (p.isHeading) { finish(); continue; }
    if (hasUnderline(p)) {
      if (!cur) { cur = []; sawSlash = false; closeNext = false; }
      cur.push(p);
      if (closeNext) { finish(); continue; }
      if (/\/\/\s*$/.test(p.text)) { sawSlash = true; closeNext = true; }
    } else {
      finish();
    }
  }
  finish();
  return groups;
}

function encodeVerseBlock(lines) {
  return lines.map((p, i) => {
    const parts = p.runs.map(r => {
      if (!r.text.trim()) return r.text;
      return r.underline ? `[${r.text.trim()}]` : r.text;
    }).join("");
    const isLast = i === lines.length - 1;
    const isPenult = !isLast && /\/\/\s*$/.test(p.text);
    if (isLast) return parts.replace(/\s*\/\/\s*$/, "").trim();
    if (isPenult) return parts.replace(/\s*\/\/\s*$/, "").trim() + " //";
    return parts.trim() + " |";
  }).join("\n");
}

// ── Stub parseBracketWord (simplified — handles whole-word brackets only) ───────

function parseBracketWord(tok, lexicon) {
  const wholeMatch = tok.match(/^\[(.+?)\]([.,;:!?]*)$/);
  if (wholeMatch) {
    const word = wholeMatch[1];
    const { sylls, stressIdx } = syllabifyWithSource(word.replace(/[^A-Za-z''-]/g, ""), lexicon);
    return { cleanWord: word + wholeMatch[2], accentIdx: stressIdx, bracketType: "whole", sylls };
  }
  const midMatch = tok.match(/^([A-Za-z]*)(\[)([A-Za-z]+)(\])([A-Za-z.,;:!?]*)$/);
  if (midMatch) {
    const fullWord = midMatch[1] + midMatch[3] + midMatch[5].replace(/[.,;:!?]+$/, "");
    const punct = midMatch[5].match(/[.,;:!?]+$/)?.[0] || "";
    const { sylls, stressIdx } = syllabifyWithSource(fullWord.replace(/[^A-Za-z''-]/g, ""), lexicon);
    // Find which syllable contains the bracketed chars.
    const bracketed = midMatch[3].toLowerCase();
    let accentIdx = stressIdx;
    let cumLen = 0;
    for (let i = 0; i < sylls.length; i++) {
      cumLen += sylls[i].length;
      if (fullWord.toLowerCase().slice(0, cumLen).includes(bracketed)) { accentIdx = i; break; }
    }
    return { cleanWord: fullWord + punct, accentIdx, bracketType: "mid", sylls };
  }
  const clean = tok.replace(/[\[\]]/g, "");
  const { sylls, stressIdx } = syllabifyWithSource(clean.replace(/[^A-Za-z''-]/g, ""), lexicon);
  return { cleanWord: clean, accentIdx: stressIdx, bracketType: "none", sylls };
}

function parseTruthLines(rawText, lexicon, rot) {
  const rawLines = rawText.split("\n").map(l => l.trim()).filter(Boolean)
    .map(l => l.replace(/\s*\|\s*$/, "").trim()).filter(Boolean);
  if (!rawLines.length) return [];
  const total = rawLines.length;
  return rawLines.map((ln, i) => {
    const phrase = phraseForLine(i, total, rot || ROT_DEFS[1]);
    const tokens = ln.split(/\s+/).filter(Boolean);
    const words = tokens.map((tok) => {
      const { cleanWord, accentIdx, bracketType, sylls: rawSylls } = parseBracketWord(tok, lexicon);
      if (!cleanWord) return null;
      const { sylls: displaySylls, stressIdx: lexStress } = syllabifyWithSource(
        cleanWord.replace(/[^A-Za-z''-]/g, "") || cleanWord, lexicon
      );
      const mappedSylls = displaySylls.map((t, si) => {
        const cleanT = t.replace(/[^A-Za-z''-]/g, "");
        if (!cleanT) return null;
        let accent = false;
        if (bracketType !== "none") accent = si === accentIdx;
        return { text: cleanT, accent, source: bracketType !== "none" ? "truth" : "auto" };
      }).filter(Boolean);
      if (!mappedSylls.length) return null;
      return { display: cleanWord, sylls: mappedSylls };
    }).filter(Boolean);
    return { phrase, words };
  });
}

// ── Load lexicon ─────────────────────────────────────────────────────────────

const __dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dir, "..");
const lexiconPath = path.join(repoRoot, "public", "lexicon", "syllable-table.json");
let lexicon = null;
try {
  const raw = JSON.parse(readFileSync(lexiconPath, "utf8"));
  // syllable-table.json is an array of {word, sylls, stressIdx, src} entries.
  lexicon = {};
  if (Array.isArray(raw)) {
    raw.forEach(e => { if (e.word) lexicon[e.word.toLowerCase()] = e; });
  } else {
    // May already be a keyed object.
    lexicon = raw;
  }
  console.log(`Lexicon loaded: ${Object.keys(lexicon).length} entries`);
} catch (e) {
  console.warn(`Lexicon not loaded (${e.message}) — using rule fallback only`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

const buf = readFileSync(docxPath);
const zip = await JSZip.loadAsync(buf);
const docXmlFile = zip.file("word/document.xml");
if (!docXmlFile) { console.error("Not a .docx — no word/document.xml"); process.exit(1); }
const xml = await docXmlFile.async("string");
const paras = assignTones(parseDocxParagraphsNode(xml));
const stichera = segmentStichera(paras);

console.log(`Parsed ${stichera.length} stichera blocks`);

// Filter to the requested tone.
const toneBlocks = stichera.filter(b => b.tone === toneArg && !b.suspect);
console.log(`Tone ${toneArg} non-suspect blocks: ${toneBlocks.length}`);

const PH = PH_DEFS[toneArg] || PH_DEFS[1];
const rot = ROT_DEFS[toneArg] || ROT_DEFS[1];

// Build comparison for each block and accumulate.
let allTruthLines = [], allMachineLines = [];
for (const block of toneBlocks) {
  const encoded = encodeVerseBlock(block.lines);
  const tLines = parseTruthLines(encoded, lexicon, rot);
  const mLines = autoEncodeLines(tLines, lexicon, PH);
  allTruthLines = allTruthLines.concat(tLines);
  allMachineLines = allMachineLines.concat(mLines);
}

console.log(`Total lines: ${allTruthLines.length}`);

const cmp = buildComparison(allTruthLines, allMachineLines, PH, toneArg);

const payload = {
  generated: new Date().toISOString(),
  scriptVersion: "1.0.0",
  docx: path.basename(docxPath),
  tone: toneArg,
  blocksProcessed: toneBlocks.length,
  totalLines: cmp.totalLines,
  anchorMatchPct: Math.round(cmp.anchorMatchCount / Math.max(1, cmp.totalLines) * 100),
  firstAnchorMatchCount: cmp.firstAnchorMatchCount,
  syllMatchPct: Math.round(cmp.syllMatchCount / Math.max(1, cmp.totalSylls) * 100),
  lines: cmp.lines.map(l => ({
    phrase: l.phrase,
    anchorMatch: l.anchorMatch,
    truthAnchorIdx: l.truthAnchor,
    machineAnchorIdx: l.machineAnchor,
    truthFirstAnchorIdx: l.truthFirstAnchor ?? null,
    machineFirstAnchorIdx: l.machineFirstAnchor ?? null,
    firstAnchorMatch: l.firstAnchorMatch ?? null,
    syllables: l.syllables.map(s => {
      const out = {
        text: s.text,
        truthAccent: s.truthAccent,
        machineAccent: s.machineAccent,
        agree: s.agree,
        isAnchor: s.isAnchor,
        isMachineAnchor: s.isMachineAnchor,
      };
      if (s.role !== undefined)        { out.role = s.role; out.pitches = s.pitches; out.dur = s.dur; }
      if (s.machineRole !== undefined) { out.machineRole = s.machineRole; out.machinePitches = s.machinePitches; out.machineDur = s.machineDur; }
      return out;
    }),
  })),
};

writeFileSync(outPath, JSON.stringify(payload, null, 2));
console.log(`\nSnapshot written to: ${outPath}`);
console.log(`Anchor match: ${cmp.anchorMatchCount}/${cmp.totalLines} (${payload.anchorMatchPct}%)`);
if (cmp.firstAnchorMatchCount > 0) {
  console.log(`First-anchor (cad1) match: ${cmp.firstAnchorMatchCount}`);
}
