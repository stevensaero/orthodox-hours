// ─── TONE TRAINER ─────────────────────────────────────────────────────────────
// Standalone Tone 1 (Common Chant / Obikhod) stichera pointing trainer.
//
// Sub-project of the Orthodox Hours Tool. NOT yet wired to the assembler's data;
// see tone_trainer_notes.md for scope, the resolved findings, open director
// questions, and the eventual hours-tool → tone-trainer data-contract goal.
//
// Component version is tracked independently of the hours-tool version.
// ──────────────────────────────────────────────────────────────────────────────
import React, { useState, useMemo, useRef, useEffect } from "react";
import JSZip from "jszip";

export const TONE_TRAINER_VERSION = "v0.4.0";

// Release notes for the trainer's clickable version badge (mirrors hours-tool).
// Newest entry first; the badge reads TRAINER_RELEASE_NOTES[0].version.
const TRAINER_RELEASE_NOTES = [
  {
    version: "v0.4.0",
    date: "May 2026",
    summary: "Lexicon-driven syllabification + stress — replaces the first-syllable heuristic",
    items: [
      "feat: syllabification and accent placement now lookup-first from a generated lexicon (CMU Pronouncing Dictionary + TeX hyphenation, built at build-time from the OCA service corpus). 1,151 resolved words + 68 best-guess residue entries. Rules remain as a last-ditch fallback for off-table words.",
      "feat: 'show accent source' toggle in the pointing controls (off by default). When on, each syllable shows a small indicator: no marker = CMU-confirmed table entry; ? = unconfirmed residue (best-guess stress, director review pending); ~ = rule fallback (off-table).",
      "note: 68 residue words (proper names, liturgical-technical terms) carry best-guess stress marked confirmed:false. Used now; director corrections improve accuracy by updating name-residue.json — no re-wiring needed.",
      "note: lexicon served from public/lexicon/ (same pattern as psalter/scripture), fetched at component mount.",
    ],
  },
  {
    version: "v0.3.1",
    date: "May 2026",
    summary: "Per-sticheron encoding & context — simplified to [accent] only",
    items: [
      "change: dropped the *accent* option — encoding is now always [accent] (more readable, unambiguous to parse). Removed the marker toggle.",
      "feat: each sticheron now reveals its OWN encoding inline (Show encoding ▸) with a per-block Copy button, instead of one combined panel at the bottom.",
      "feat: expanding a block shows the paragraph immediately before and after it (the bracketing V. verses / Glory etc.), so a singer with the paper service can locate the sticheron in context.",
      "remove: bottom 'Show text encoding' / copy-all panel (the interleaved service made a single combined copy unhelpful).",
      "note: underlined text is sung to the tone (incl. the 'Lord, I call' framing, which is sung though not a movable sticheron); 'V.' verses are read, not sung — underline remains the reliable sung/read signal.",
    ],
  },
  {
    version: "v0.3.0",
    date: "May 2026",
    summary: "Group docx ingest by sticheron — collapsed picker, whole-block pointing with rotation",
    items: [
      "feat: ingest segments the document into stichera (runs of underlined paragraphs, closing on the line after //), not individual lines.",
      "feat: collapsed incipit picker; expand to see lines with phase labels; block-level 'point ▸' loads the whole sticheron with A·B·C·D·…·Final rotation and scrolls to the pointer.",
      "feat: blocks with no // flagged suspect (hidden unless 'show all'); non-underlined paragraphs shown as context under 'show all'.",
    ],
  },
  {
    version: "v0.2.0",
    date: "May 2026",
    summary: "Service .docx ingest — extract OCA underline-marked accents as copy-paste truth",
    items: [
      "feat: Open a day's OCA service .docx in the browser (JSZip, fully client-side — nothing uploads). Extracts underlined accents and reconstructs the verse with marks intact.",
      "feat: Per-verse tone detection — nearest heading, flagging inherited tones.",
    ],
  },
  {
    version: "v0.1.0",
    date: "May 2026",
    summary: "Initial Tone 1 Obikhod stichera pointing trainer",
    items: [
      "feat: syllabify a line, mark accents, map each syllable to its reciting-tone / prep / cadence pitch, and sing via Web Audio.",
      "feat: corrected pointing engine — cadence anchors on the last INTERNAL accent with one-syllable-final-word backup (Drillock & Ealy). Phrase B cadence do→re→ti; prep-on-ti specific to Phrase A.",
    ],
  },
];

// ── PITCH / SOLFEGE ───────────────────────────────────────────────────────────
// Semitone offset from moveable "do". Tone 1 home base is "re" (one step above do).
const OFF = { la: -3, ti: -1, do: 0, re: 2, mi: 4 };
const DO_OPTIONS = [
  { label: "A (low)", hz: 220.0 },
  { label: "B", hz: 246.94 },
  { label: "C", hz: 261.63 },
  { label: "D", hz: 293.66 },
  { label: "E (high)", hz: 329.63 },
];

// ── PHRASE DEFINITIONS (Tone 1, corrected against Drillock & Ealy) ──────────────
// recite : reciting-tone pitch
// inton  : phrase opens with an intonation note on the reciting pitch
// prep   : preparatory note before the cadence (Phrase A only, on ti)
// cad    : cadence pitch figure, hung on the last INTERNAL accent
//
// Corrections from the prior heuristic build:
//  - Phrase B cadence is do → re → ti (hold do, up a tone to re, down a third to ti)
//  - prep on ti belongs to Phrase A specifically (not a general rule)
//  - anchor is the last INTERNAL accent (see pointLine), not merely the last accent
const PH = {
  A:     { recite: "re", inton: true,  prep: "ti", cad: ["do"] },
  B:     { recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"] },
  C:     { recite: "re", inton: true,  prep: null, cad: ["do", "ti"] },
  D:     { recite: "do", inton: false, prep: null, cad: ["ti", "do", "re", "do", "ti"] },
  Final: { recite: "re", inton: false, prep: null, cad: ["do", "ti", "la"] },
};
const ROT = ["A", "B", "C", "D"];
const phraseForLine = (i, total) => (i === total - 1 ? "Final" : ROT[i % 4]);
const PNAME = { A: "Phrase A", B: "Phrase B", C: "Phrase C", D: "Phrase D", Final: "Final Phrase" };

// ── LEXICON LOOKUP ────────────────────────────────────────────────────────────
// The lexicon is fetched from public/lexicon/ at component mount (same pattern
// as psalter/scripture). It merges syllable-table.json (CMU+TeX resolved) and
// name-residue.json (best-guess, confirmed:false). Lookup is by lowercased
// alpha-only key. Falls back to rules when a word is not in the lexicon.
//
// entry.src values: "tex"|"reconciled"|"count-only"|"archaic" = CMU-confirmed
//                   missing src = residue entry (best-guess, confirmed:false)
//                   undefined = rule fallback (not in lexicon at all)
//
// Source indicators for the toggle (shown when showAccentSource is on):
//   (no marker) = CMU-confirmed table entry
//   ?           = unconfirmed residue (best-guess, director review pending)
//   ~           = rule fallback (word not in lexicon)

// ── SYLLABIFIER (rule fallback — used only for words not in the lexicon) ─────
function syllabifyRules(word) {
  const m = word.match(/[A-Za-z']+/);
  if (!m) return [word];
  const core = m[0];
  const lead = word.slice(0, m.index);
  const trail = word.slice(m.index + core.length);
  const lower = core.toLowerCase();
  const isV = (c) => "aeiouy".includes(c);
  const groups = [];
  let i = 0;
  const n = lower.length;
  while (i < n) {
    if (isV(lower[i]) && !(lower[i] === "y" && i === 0)) {
      let j = i;
      while (j < n && isV(lower[j])) j++;
      groups.push([i, j - 1]);
      i = j;
    } else i++;
  }
  if (groups.length <= 1) return [word];
  const breaks = [];
  for (let g = 0; g < groups.length - 1; g++) {
    const vEnd = groups[g][1];
    const nextV = groups[g + 1][0];
    const cc = nextV - vEnd - 1;
    let s;
    if (cc <= 0) s = nextV;
    else if (cc === 1) s = nextV - 1;
    else s = vEnd + 1 + Math.floor(cc / 2);
    breaks.push(s);
  }
  let sylls = [];
  let prev = 0;
  breaks.forEach((b) => { sylls.push(core.slice(prev, b)); prev = b; });
  sylls.push(core.slice(prev));
  if (sylls.length > 1) {
    const last = sylls[sylls.length - 1].toLowerCase();
    if (/^[^aeiou]*e$/.test(last) && !/^[^aeiouy]*le$/.test(last)) {
      sylls[sylls.length - 2] += sylls.pop();
    }
  }
  sylls[0] = lead + sylls[0];
  sylls[sylls.length - 1] += trail;
  return sylls;
}

const STOP = new Set(
  ("the a an of to and in on for with is am are be by at from as us him her them we i you " +
   "he she it our your his my that this whose whom who which but or nor so yet o").split(/\s+/)
);

// Heuristic stress fallback — only used for words not in the lexicon.
function guessStressHeuristic(wordDisplay, sylls, idx) {
  const lw = wordDisplay.toLowerCase().replace(/[^a-z]/g, "");
  if (sylls.length === 1) return idx === 0 ? !STOP.has(lw) : false;
  return idx === 0;
}

// lookupWord: returns {sylls, stressIdx, src, confirmed} or null.
// lexicon is the merged table+residue object passed from component state.
function lookupWord(word, lexicon) {
  if (!lexicon) return null;
  const key = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!key) return null;
  const entry = lexicon[key];
  if (!entry) return null;
  return {
    sylls: entry.sylls,
    stressIdx: entry.stressIdx ?? 0,
    src: entry.src || "residue",
    confirmed: entry.confirmed !== false,
  };
}

// syllabifyWithSource: returns {sylls, stressIdx, source} where source ∈
// "table" (CMU-confirmed) | "residue" (unconfirmed) | "archaic" | "rule"
function syllabifyWithSource(wordDisplay, lexicon) {
  const m = wordDisplay.match(/[A-Za-z']+/);
  const core = m ? m[0] : wordDisplay;
  const lead = m ? wordDisplay.slice(0, m.index) : "";
  const trail = m ? wordDisplay.slice(m.index + core.length) : "";
  // 1. Lexicon lookup
  const entry = lookupWord(core, lexicon);
  if (entry) {
    const sylls = entry.sylls.map((s, i) => {
      if (i === 0) return lead + s;
      if (i === entry.sylls.length - 1) return s + trail;
      return s;
    });
    const src = (entry.src === "residue" || !entry.confirmed) ? "residue" : "table";
    return { sylls, stressIdx: entry.stressIdx, source: src };
  }
  // 2. Archaic -est/-eth rule
  if (/[^aeiouy](est|eth)$/i.test(core)) {
    const stem = core.slice(0, -3);
    const suf = core.slice(-3);
    const stemSylls = syllabifyRules(stem);
    const sylls = [...stemSylls, suf];
    if (sylls.length > 0) {
      sylls[0] = lead + sylls[0];
      sylls[sylls.length - 1] += trail;
    }
    return { sylls, stressIdx: 0, source: "archaic" };
  }
  // 3. Rule fallback
  const sylls = syllabifyRules(wordDisplay);
  return { sylls, stressIdx: null, source: "rule" };
}

// Build a word object from display text using the lexicon (or rules).
// Returns {display, sylls:[{text, accent}]} where accent comes from stressIdx.
function wordFromDisplay(wordDisplay, lexicon) {
  const { sylls, stressIdx, source } = syllabifyWithSource(wordDisplay, lexicon);
  const mappedSylls = sylls
    .map((t, i) => {
      const clean = t.replace(/[^A-Za-z''-]/g, "");
      if (!clean) return null;   // drop pure-punctuation fragments
      return {
        text: clean,
        accent: stressIdx !== null
          ? i === stressIdx
          : guessStressHeuristic(wordDisplay, sylls, i),
        source,
      };
    })
    .filter(Boolean);
  if (!mappedSylls.length) return null;  // whole token was punctuation
  return { display: wordDisplay, sylls: mappedSylls };
}

// ── PRESET: Meeting of the Lord, "Lord, I Call", 3rd sticheron (hand-pointed) ───
// Accents hand-verified against the printed score in the tutorial.
const PRESET = [
  ["A", [["Come,",[["Come",1]]],["let",[["let",0]]],["us",[["us",0]]],["also",[["al",1],["so",0]]],["go",[["go",0]]],["to",[["to",0]]],["meet",[["meet",1]]],["Christ",[["Christ",1]]],["with",[["with",0]]],["divine",[["di",0],["vine",1]]],["songs!",[["songs",1]]]]],
  ["B", [["Let",[["Let",0]]],["us",[["us",0]]],["receive",[["re",0],["ceive",1]]],["Him",[["Him",0]]],["Whose",[["Whose",0]]],["salvation",[["sal",0],["va",1],["tion",0]]],["Simeon",[["Sim",1],["e",0],["on",0]]],["saw!",[["saw",1]]]]],
  ["C", [["This",[["This",0]]],["is",[["is",0]]],["He",[["He",0]]],["Whom",[["Whom",0]]],["David",[["Da",1],["vid",0]]],["announced;",[["an",0],["nounced",1]]]]],
  ["D", [["this",[["this",0]]],["is",[["is",0]]],["He",[["He",0]]],["Who",[["Who",0]]],["spoke",[["spoke",1]]],["in",[["in",0]]],["the",[["the",0]]],["Prophets,",[["Proph",1],["ets",0]]]]],
  ["A", [["Who,",[["Who",0]]],["for",[["for",0]]],["our",[["our",0]]],["sakes,",[["sakes",1]]],["has",[["has",0]]],["taken",[["tak",1],["en",0]]],["flesh",[["flesh",1]]],["and",[["and",0]]],["Who",[["Who",0]]],["speaks",[["speaks",1]]],["through",[["through",0]]],["the",[["the",0]]],["Law.",[["Law",1]]]]],
  ["Final", [["Let",[["Let",0]]],["us",[["us",0]]],["worship",[["wor",1],["ship",0]]],["Him!",[["Him",1]]]]],
];
function presetToLines() {
  return PRESET.map(([ph, ws]) => ({
    phrase: ph,
    words: ws.map(([d, ss]) => ({ display: d, sylls: ss.map(([t, a]) => ({ text: t, accent: !!a })) })),
  }));
}

// ── DOCX INGEST (client-side, via JSZip) ───────────────────────────────────────
// A .docx is a ZIP; word/document.xml holds the text. Each run (<w:r>) carries
// its own run-properties (<w:rPr>), where <w:u> marks underline. OCA service
// texts store each underlined fragment as its own run, so underline is extracted
// losslessly (verified against the Feb 2 Meeting of the Lord service text).
const W_NS = "w";
// Detect a tone heading line, e.g. "Tone 1", "Tone 6", "in Tone 5", "Tone V".
const TONE_HEADING = /\bTone\s+([1-8]|[IVX]+)\b/i;
const ROMAN = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };
function parseToneLabel(s) {
  const m = s.match(TONE_HEADING);
  if (!m) return null;
  const raw = m[1];
  const n = /^[0-9]$/.test(raw) ? parseInt(raw, 10) : (ROMAN[raw.toUpperCase()] || null);
  return n;
}

// Parse the docx XML string into an ordered list of paragraphs.
// Each paragraph => { text, runs:[{text,underline}], toneHeading:int|null }.
function parseDocxParagraphs(xmlString) {
  const doc = new DOMParser().parseFromString(xmlString, "application/xml");
  // namespace-agnostic: match local name "p"
  const allP = Array.from(doc.getElementsByTagName("*")).filter(
    (el) => el.localName === "p"
  );
  const paras = [];
  for (const p of allP) {
    const runs = [];
    const rEls = Array.from(p.getElementsByTagName("*")).filter((el) => el.localName === "r");
    for (const r of rEls) {
      // underline?
      let underline = false;
      const rpr = Array.from(r.children).find((c) => c.localName === "rPr");
      if (rpr) {
        const u = Array.from(rpr.children).find((c) => c.localName === "u");
        if (u) {
          const val = u.getAttribute("w:val") || u.getAttributeNS?.(null, "val") || u.getAttribute("val");
          underline = val !== "none";
        }
      }
      // text (concatenate all <w:t> descendants)
      const tEls = Array.from(r.getElementsByTagName("*")).filter((el) => el.localName === "t");
      const txt = tEls.map((t) => t.textContent || "").join("");
      if (txt) runs.push({ text: txt, underline });
    }
    const text = runs.map((x) => x.text).join("").trim();
    if (text) paras.push({ text, runs, toneHeading: parseToneLabel(text), idx: paras.length });
  }
  return paras;
}

// Determine effective tone per paragraph by carrying the last heading downward.
// A paragraph that IS a bare heading isn't a verse; verses inherit the tone above.
function assignTones(paras) {
  let current = null;
  let inherited = false;
  return paras.map((p) => {
    // a "bare heading" paragraph is short and matches the tone pattern with little else
    const isBareHeading =
      p.toneHeading != null && p.text.replace(TONE_HEADING, "").replace(/[^A-Za-z]/g, "").length <= 4;
    if (isBareHeading) {
      current = p.toneHeading;
      inherited = false;
      return { ...p, effectiveTone: current, isHeading: true, inheritedTone: false };
    }
    // inline tone on a content line still updates current
    if (p.toneHeading != null) {
      current = p.toneHeading;
      inherited = false;
      return { ...p, effectiveTone: current, isHeading: false, inheritedTone: false };
    }
    const wasInherited = current != null; // had to fall through from a previous block
    return { ...p, effectiveTone: current, isHeading: false, inheritedTone: wasInherited };
  });
}

// Segment paragraphs into stichera. A sticheron is a maximal run of consecutive
// underline-bearing paragraphs; the run closes on the line AFTER a //-terminated
// line (the // marks the penultimate line; the next line is the Final). Headings
// and non-underlined paragraphs (V. verses, Glory/Both now, blanks) separate runs.
// A run that never contains a // is flagged `suspect` (we still group it, last
// line → Final, but it should be verified — the UI hides suspect blocks unless
// "show all" is on).
const hasUnderline = (p) => p.runs.some((r) => r.underline);
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
      finish(); // non-underlined paragraph separates stichera
    }
  }
  finish();
  return groups;
}

// Encode a whole sticheron block (its lines) as copy-paste marked text.
function encodeBlock(block) {
  return encodeVerseBlock(block.lines);
}
// Phrase for line i within a block of n lines (A B C D rotating, Final last).
function blockLinePhrase(i, n) { return i === n - 1 ? "Final" : ["A", "B", "C", "D"][i % 4]; }

// Encode one paragraph's runs as marked text. Accents wrapped in [brackets];
// everything else passes through verbatim. (Bracket format chosen for readability
// and unambiguous parsing.)
function encodeRuns(runs) {
  let out = "";
  for (const r of runs) {
    out += r.underline ? `[${r.text}]` : r.text;
  }
  return out.replace(/\s+/g, " ").trim();
}

// Build the copy-paste block for a set of verse paragraphs.
// Line ends: "|" for ordinary lines; the OCA "//" is already inside the text and
// is kept verbatim (we do NOT add "|" to a line that already ends with "//");
// the final line gets no marker.
function encodeVerseBlock(verses) {
  const lines = verses.map((v) => encodeRuns(v.runs));
  return lines
    .map((ln, i) => {
      const isLast = i === lines.length - 1;
      if (isLast) return ln;                 // verse end: no marker
      if (/\/\/\s*$/.test(ln)) return ln;    // OCA penultimate marker already present
      return ln + " |";                      // ordinary line end
    })
    .join("\n");
}

// Escape text for safe innerHTML use in the verse preview (underline rendering).
function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// ── POINTING ENGINE ─────────────────────────────────────────────────────────
// Flatten a line into a per-syllable list with word context.
function flatten(line) {
  const flat = [];
  line.words.forEach((w) =>
    w.sylls.forEach((s, si) =>
      flat.push({
        text: s.text,
        accent: s.accent,
        source: s.source,          // carries lexicon source for the toggle indicator
        single: w.sylls.length === 1,
        wordLast: si === w.sylls.length - 1,
      })
    )
  );
  return flat;
}

// CORRECTED ANCHOR RULE (Drillock & Ealy, Tone 1):
// The cadence begins on the last INTERNAL accent of the phrase. "Internal" means:
// if the final syllable is an accented one-syllable word (e.g. "Law", "saw",
// "Him", "Christ"), the cadence cannot launch on it, so it backs up to the
// previous accent. Trailing unaccented syllables after the anchor ride on the
// anchor's pitch until the final syllable.
function anchorIndex(flat) {
  const acc = [];
  flat.forEach((s, i) => { if (s.accent) acc.push(i); });
  if (!acc.length) return Math.max(0, flat.length - 1);

  const lastIdx = flat.length - 1;
  let a = acc[acc.length - 1];

  // One-syllable-final-word backup: if the very last syllable is an accented
  // standalone monosyllable, step back to the previous accent (the last internal
  // accent), when one exists.
  const last = flat[lastIdx];
  if (a === lastIdx && last.single && last.accent && acc.length >= 2) {
    a = acc[acc.length - 2];
  }
  return a;
}

function pointLine(line) {
  const def = PH[line.phrase];
  const flat = flatten(line);
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (i === 0 && def.inton) role = "inton";
    if (def.prep && i === body.length - 1) { role = "prep"; pitch = def.prep; }
    roles.push({ role, pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
  });

  const dist = distribute(def.cad, cad.length);
  cad.forEach((s, i) =>
    roles.push({
      role: "cad",
      pitches: dist[i] || [def.cad[def.cad.length - 1]],
      accent: s.accent,
      text: s.text,
      source: s.source,
      anchor: i === 0,
    })
  );
  return roles;
}

// Distribute a cadence pitch figure across the cadence syllables.
// Per the tutorial score and OCA recording analysis:
// - The anchor always carries the first (held) note of the figure.
// - When count == n: one note per syllable.
// - When count > n: first and last syllables get their notes; middle syllables
//   repeat the penultimate note to fill gaps.
// - When count < n: take the first `count` notes of the figure sequentially —
//   the trailing notes of the figure simply don't appear. Verified from the OCA
//   Tone 1 unison recording: Phrase D "this·is·He·Who·spoke·in·the·Proph·ets"
//   shows cadence in·the·Proph·ets = ti·do·re·do (4 notes for 4 syllables,
//   the final ti of the 5-note figure belongs to the next phrase, not this one).
function distribute(figure, count) {
  const n = figure.length;
  if (count <= 1) return [figure.slice()];         // one syllable carries the whole figure
  if (count === n) return figure.map((f) => [f]);   // one note per syllable — exact fit
  if (count > n) {                                  // more syllables than notes
    const out = [[figure[0]]];
    const mid = figure.slice(1, n - 1);
    const ms = count - 2;
    for (let i = 0; i < ms; i++) out.push([mid[i] ?? figure[Math.max(0, n - 2)]]);
    out.push([figure[n - 1]]);
    return out;
  }
  // count < n: take the first `count` notes sequentially — one per syllable.
  // Trailing notes of the figure are unused (they belong to the next phrase).
  return figure.slice(0, count).map((f) => [f]);
}

// ── AUDIO ───────────────────────────────────────────────────────────────────
function useAudio() {
  const ctxRef = useRef(null);
  const ac = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AC();
    }
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  };
  const tone = (f, t0, dur, peak = 0.22) => {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "triangle";
    o.frequency.value = f;
    o.connect(g);
    g.connect(c.destination);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + 0.035);
    g.gain.setValueAtTime(peak, t0 + dur - 0.07);
    g.gain.linearRampToValueAtTime(0, t0 + dur - 0.005);
    o.start(t0);
    o.stop(t0 + dur);
  };
  return { ac, tone };
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ToneTrainer() {
  const [doHz, setDoHz] = useState(261.63);
  const [mode, setMode] = useState("preset"); // 'preset' | 'custom'
  const [text, setText] = useState("");
  const [lines, setLines] = useState(presetToLines);
  const [playingLine, setPlayingLine] = useState(null);
  const [editOpen, setEditOpen] = useState({});
  const [showReleaseNotes, setShowReleaseNotes] = useState(false);
  // lexicon (fetched from public/lexicon/ at mount, same pattern as psalter/scripture)
  const [lexicon, setLexicon] = useState(null);
  const [lexiconError, setLexiconError] = useState(null);
  const [showAccentSource, setShowAccentSource] = useState(false);

  // Fetch both lexicon files at mount and merge.
  useEffect(() => {
    const base = "/orthodox-hours/lexicon/";
    Promise.all([
      fetch(base + "syllable-table.json").then((r) => r.json()),
      fetch(base + "name-residue.json").then((r) => r.json()),
    ])
      .then(([table, residue]) => setLexicon({ ...table, ...residue }))
      .catch(() => setLexiconError("Lexicon unavailable — using rules only"));
  }, []);
  // docx ingest state
  const [docName, setDocName] = useState(null);
  const [docParas, setDocParas] = useState([]);     // assignTones output
  const [docError, setDocError] = useState(null);
  const [showAllParas, setShowAllParas] = useState(false);
  const [encOpenBlocks, setEncOpenBlocks] = useState({}); // block index -> show encoding
  const [copiedBlock, setCopiedBlock] = useState(null);   // block index just copied
  const [expandedBlocks, setExpandedBlocks] = useState({}); // block index -> bool
  const pointerRef = useRef(null);
  const { ac, tone } = useAudio();

  const freq = (sol) => doHz * Math.pow(2, OFF[sol] / 12);

  const lineToNotes = (line) => {
    const roles = pointLine(line);
    const notes = [];
    roles.forEach((r, i) => {
      const last = i === roles.length - 1;
      r.pitches.forEach((p, k) => {
        let dur = 0.45;
        let peak = 0.2;
        if (r.role === "recite" || r.role === "inton") dur = r.accent ? 0.6 : 0.45;
        if (r.role === "prep") dur = 0.5;
        if (r.role === "cad") { dur = r.pitches.length > 1 ? 0.42 : 0.55; if (r.accent) peak = 0.27; }
        if (last && k === r.pitches.length - 1) dur = 1.0;
        notes.push({ sol: p, dur, peak });
      });
    });
    return notes;
  };

  const playNotes = (notes, onDone) => {
    const c = ac();
    let t = c.currentTime + 0.06;
    notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
    if (onDone) setTimeout(onDone, (t - c.currentTime) * 1000 + 40);
  };

  const playLine = (li) => {
    setPlayingLine(li);
    playNotes(lineToNotes(lines[li]), () => setPlayingLine(null));
  };

  const playAll = () => {
    const c = ac();
    let t = c.currentTime + 0.06;
    lines.forEach((line, li) => {
      const notes = lineToNotes(line);
      const start = t;
      setTimeout(() => setPlayingLine(li), (start - c.currentTime) * 1000);
      notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
      t += 0.35;
    });
    setTimeout(() => setPlayingLine(null), (t - c.currentTime) * 1000 + 40);
  };

  const playScale = () =>
    playNotes(["la", "ti", "do", "re", "mi"].map((s) => ({ sol: s, dur: 0.4 })));

  const analyze = () => {
    const raw = text.split("\n").map((s) => s.trim()).filter(Boolean);
    if (!raw.length) { setLines([]); return; }
    const next = raw.map((ln, i) => {
      const words = ln.split(/\s+/)
        .filter((w) => /[A-Za-z]/.test(w))   // skip pure-punctuation tokens (commas, etc.)
        .map((w) => wordFromDisplay(w, lexicon))
        .filter(Boolean);                      // drop null returns (whole-punctuation tokens)
      return { phrase: phraseForLine(i, raw.length), words };
    });
    setLines(next);
  };

  const toggleAccent = (li, fi) => {
    setLines((prev) => {
      const copy = prev.map((l) => ({ phrase: l.phrase, words: l.words.map((w) => ({ display: w.display, sylls: w.sylls.map((s) => ({ ...s })) })) }));
      let count = 0;
      for (const w of copy[li].words) {
        for (const s of w.sylls) { if (count === fi) s.accent = !s.accent; count++; }
      }
      return copy;
    });
  };

  const applyEdit = (li, val) => {
    setLines((prev) => {
      const copy = prev.map((l) => ({ ...l, words: l.words.map((w) => ({ ...w, sylls: w.sylls.map((s) => ({ ...s })) })) }));
      const words = val.trim().split(/\s+/).map((tok) => {
        const ss = tok.split(/[·\-]/).filter(Boolean);
        return { display: ss.join(""), sylls: ss.map((t) => ({ text: t, accent: false })) };
      });
      copy[li].words = words;
      return copy;
    });
  };

  const switchMode = (m) => {
    setMode(m);
    if (m === "preset") setLines(presetToLines());
    else setLines([]);
  };

  // ── docx ingest handlers ──────────────────────────────────────────────────
  const onDocxFile = async (file) => {
    if (!file) return;
    setDocError(null);
    setDocName(file.name);
    setDocParas([]);
    try {
      const buf = await file.arrayBuffer();
      const zip = await JSZip.loadAsync(buf);
      const docXml = zip.file("word/document.xml");
      if (!docXml) throw new Error("Not a Word .docx (no word/document.xml found).");
      const xml = await docXml.async("string");
      const paras = assignTones(parseDocxParagraphs(xml));
      setDocParas(paras);
      if (!paras.some((p) => p.runs.some((r) => r.underline))) {
        setDocError("No underlined (accented) text found in this document.");
      }
    } catch (e) {
      setDocError(e.message || String(e));
    }
  };

  // Segment the document into stichera blocks.
  const blocks = useMemo(() => segmentStichera(docParas), [docParas]);

  // Blocks shown in the picker: non-suspect by default; suspect ones only when
  // "show all" is ticked.
  const visibleBlocks = useMemo(
    () => blocks.filter((b) => showAllParas || !b.suspect),
    [blocks, showAllParas]
  );

  // Context: the paragraph immediately before the block's first line and
  // immediately after its last line, in original document order. Gives a singer
  // holding the paper service a place to anchor the sticheron.
  const blockContext = (block) => {
    const firstIdx = block.lines[0]?.idx;
    const lastIdx = block.lines[block.lines.length - 1]?.idx;
    const before = docParas.find((p) => p.idx === firstIdx - 1) || null;
    const after = docParas.find((p) => p.idx === lastIdx + 1) || null;
    return { before, after };
  };

  const copyBlock = async (block, i) => {
    try {
      await navigator.clipboard.writeText(encodeBlock(block));
      setCopiedBlock(i);
      setTimeout(() => setCopiedBlock((c) => (c === i ? null : c)), 1400);
    } catch {
      setCopiedBlock(null);
    }
  };

  const toggleEnc = (i) => setEncOpenBlocks((o) => ({ ...o, [i]: !o[i] }));

  // Convert one docx paragraph's runs into a pointer "line" {phrase, words}.
  // Uses lexicon syllabification (so "upon" → u·pon, not one chip), then maps
  // OCA underline spans onto syllables by vowel-nucleus overlap (SYLLABIFIER_SPEC §7).
  // Underline is authoritative over the lexicon stress guess when present.
  const paraToPointerLine = (para, phrase) => {
    // Step 1: build a char-level representation with per-char underline flags.
    let charText = "";
    const charUnderline = [];
    for (const r of para.runs) {
      for (const ch of r.text) {
        charText += ch;
        charUnderline.push(!!r.underline);
      }
    }

    // Step 2: tokenize into words on whitespace, preserving char offsets.
    const wordTokens = [];
    let i = 0;
    while (i < charText.length) {
      if (/\s/.test(charText[i])) { i++; continue; }
      let j = i;
      while (j < charText.length && !/\s/.test(charText[j])) j++;
      const raw = charText.slice(i, j);
      const ulSlice = charUnderline.slice(i, j);
      const alphaMatch = raw.match(/[A-Za-z]+/);
      if (alphaMatch) {
        wordTokens.push({ display: raw, core: alphaMatch[0],
                          coreStart: alphaMatch.index, ulSlice });
      }
      i = j;
    }

    // Step 3: syllabify via lexicon, then map underline spans to syllables.
    const isVowel = (c) => "aeiouy".includes(c.toLowerCase());
    const nucleusPositions = (s) => {
      const pos = []; let k = 0;
      while (k < s.length) {
        if (isVowel(s[k])) { pos.push(k); while (k < s.length && isVowel(s[k])) k++; }
        else k++;
      }
      return pos;
    };

    const words = wordTokens.map(({ display, core, coreStart, ulSlice }) => {
      const wordObj = wordFromDisplay(core, lexicon);
      if (!wordObj) return null;
      const sylls = wordObj.sylls;
      const coreUl = ulSlice.slice(coreStart, coreStart + core.length);
      const anyUnderlined = coreUl.some(Boolean);

      // No underline → no director accent mark on this word. Set all syllables
      // unaccented. (Lexicon stress is only used in the auto-analyze path, not
      // here where underline = OCA truth and absence of underline = unaccented.)
      if (!anyUnderlined) {
        return { display, sylls: sylls.map(s => ({ ...s, accent: false })) };
      }

      // Map underline to syllable by vowel-nucleus overlap.
      // If the entire core is underlined (whole-word bracket like [Lord], [hear],
      // [Receive]), the director marked the word as a whole, not a specific syllable.
      // Use the lexicon's stressIdx as the tiebreaker — it knows re-CEIVE not RE-ceive.
      const wholeWordUnderlined = coreUl.every(Boolean);
      if (wholeWordUnderlined) {
        const stressIdx = wordObj.sylls.findIndex(s => s.accent);
        const accentIdx = stressIdx >= 0 ? stressIdx : 0;
        return {
          display,
          sylls: sylls.map((s, si) => ({
            ...s, accent: si === accentIdx, source: "truth",
          })),
        };
      }

      // Partial underline (mid-word bracket like up[on], Re[ceive]) — map
      // the underlined span to a syllable by vowel-nucleus overlap.
      let pos = 0;
      const syllRanges = sylls.map((s) => {
        const start = pos; pos += s.text.length; return { start, end: pos - 1 };
      });
      const ulPositions = new Set(
        coreUl.map((u, idx) => u ? idx : -1).filter(idx => idx >= 0)
      );
      const nuclei = nucleusPositions(core);
      let accentIdx = -1;
      for (let n = 0; n < nuclei.length; n++) {
        if (ulPositions.has(nuclei[n])) {
          accentIdx = syllRanges.findIndex(r => nuclei[n] >= r.start && nuclei[n] <= r.end);
          if (accentIdx >= 0) break;
        }
      }
      // Fallback: syllable with most overlapping underlined chars.
      if (accentIdx < 0) {
        let max = 0;
        syllRanges.forEach((r, si) => {
          let ov = 0;
          for (let c = r.start; c <= r.end; c++) { if (ulPositions.has(c)) ov++; }
          if (ov > max) { max = ov; accentIdx = si; }
        });
      }
      return {
        display,
        sylls: sylls.map((s, si) => ({
          ...s, accent: si === accentIdx, source: "truth",
        })),
      };
    }).filter(Boolean);

    return { phrase, words };
  };

    // Load a whole sticheron block into the pointer with correct A-B-C-D-…-Final
  // rotation across its lines, then scroll to the pointer. Tone 1 only.
  const sendBlockToPointer = (block) => {
    if (block.tone !== 1) return; // guarded in UI; defensive here
    const n = block.lines.length;
    const next = block.lines.map((p, i) => paraToPointerLine(p, blockLinePhrase(i, n)));
    setMode("custom");
    setLines(next);
    setTimeout(() => {
      if (pointerRef.current) pointerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const toggleBlock = (i) => setExpandedBlocks((o) => ({ ...o, [i]: !o[i] }));

  // shared styles
  const gold = "#8B6914";
  const ink = "#2a2118";
  const btn = {
    background: "transparent", border: `1px solid ${gold}`, color: gold,
    borderRadius: "3px", padding: "5px 14px", fontSize: "0.78rem",
    letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Georgia, serif",
  };
  const roleBg = {
    recite: "rgba(40,58,92,.06)", inton: "rgba(40,58,92,.10)",
    prep: "rgba(180,137,43,.16)", cad: "rgba(122,36,24,.10)",
  };
  const roleColor = { recite: "#283a5c", inton: "#283a5c", prep: "#8a6a14", cad: "#7a2418" };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem", fontFamily: "Georgia, serif", color: ink }}>
      <div style={{ textAlign: "center", marginBottom: "0.4rem", letterSpacing: "0.28em", textTransform: "uppercase", fontSize: "0.7rem", color: gold }}>
        Common Chant · Obikhod · Tone 1
      </div>
      <h1 style={{ textAlign: "center", color: "#7a2418", fontWeight: 600, fontSize: "2rem", margin: "0.1em 0" }}>
        Tone Trainer — Pointing
      </h1>
      <div style={{ textAlign: "center", fontStyle: "italic", color: "#5b4a33", marginBottom: "0.3rem" }}>
        Syllables → accents → reciting tone &amp; cadence · then sing it
      </div>
      <div style={{ textAlign: "center", marginBottom: "1.4rem" }}>
        <button
          onClick={() => setShowReleaseNotes((v) => !v)}
          style={{ background: "transparent", border: `1px solid ${gold}`, color: gold,
                   borderRadius: 3, padding: "2px 10px", fontSize: "0.7rem", letterSpacing: "0.06em",
                   cursor: "pointer", fontFamily: "Georgia, serif" }}
          title="Release notes"
        >
          {TONE_TRAINER_VERSION} ▾
        </button>
        {showReleaseNotes && (
          <div style={{ maxWidth: 560, margin: "0.6rem auto 0", textAlign: "left",
                        border: "1px solid #d6c79f", borderRadius: 8, background: "rgba(255,255,255,.6)",
                        padding: "0.8rem 1rem" }}>
            {TRAINER_RELEASE_NOTES.map((rel) => (
              <div key={rel.version} style={{ marginBottom: "0.8rem" }}>
                <div style={{ fontWeight: 600, color: "#7a2418" }}>
                  {rel.version} <span style={{ color: "#9A8A70", fontWeight: 400, fontSize: "0.8rem" }}>· {rel.date}</span>
                </div>
                <div style={{ fontStyle: "italic", color: "#5b4a33", fontSize: "0.85rem", marginBottom: "0.3rem" }}>{rel.summary}</div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.8rem", color: ink }}>
                  {rel.items.map((it, i) => <li key={i} style={{ marginBottom: "0.2rem" }}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── DOCX INGEST ─────────────────────────────────────────────────── */}
      <div style={{ border: "1px solid #d6c79f", borderRadius: 8, padding: "0.8rem 0.9rem", marginBottom: "1.1rem", background: "rgba(40,58,92,.03)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center" }}>
          <label style={{ ...btn, display: "inline-block" }}>
            Open service .docx
            <input type="file" accept=".docx" style={{ display: "none" }}
              onChange={(e) => onDocxFile(e.target.files && e.target.files[0])} />
          </label>
          {docName && <span style={{ fontSize: "0.8rem", color: "#5b4a33" }}>{docName}</span>}
          {blocks.length > 0 && (
            <>
              <span style={{ flex: 1 }} />
              <label style={{ fontSize: "0.78rem", color: "#5b4a33", display: "inline-flex", alignItems: "center", gap: 5 }}>
                <input type="checkbox" checked={showAllParas} onChange={(e) => setShowAllParas(e.target.checked)} />
                show all paragraphs
              </label>
            </>
          )}
        </div>
        {docError && <div style={{ marginTop: "0.5rem", color: "#7a2418", fontSize: "0.82rem" }}>{docError}</div>}
        {!docName && (
          <div style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic" }}>
            Reads the file in your browser only — nothing is uploaded. Extracts the OCA underline-marked
            accents from a day's service text, grouped by sticheron.
          </div>
        )}

        {blocks.length > 0 && (
          <>
            <div style={{ marginTop: "0.8rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {visibleBlocks.map((b, i) => {
                const t1 = b.tone === 1;
                const open = !!expandedBlocks[i];
                return (
                  <div key={i} style={{ border: "1px solid #d6c79f", borderRadius: 6, background: "rgba(255,255,255,.45)" }}>
                    {/* collapsed header row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.45rem 0.6rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.7rem", color: "#fff", background: b.tone ? "#283a5c" : "#9A8A70",
                                     borderRadius: 4, padding: "1px 7px", whiteSpace: "nowrap" }}>
                        {b.tone ? `Tone ${b.tone}` : "no tone"}{b.inherited ? "*" : ""}
                      </span>
                      {b.suspect && (
                        <span style={{ fontSize: "0.68rem", color: "#7a2418", border: "1px solid #7a2418",
                                       borderRadius: 4, padding: "1px 6px", whiteSpace: "nowrap" }} title="No // found — verify this grouping">
                          ⚠ no //
                        </span>
                      )}
                      <button onClick={() => toggleBlock(i)}
                        style={{ flex: 1, textAlign: "left", border: "none", background: "transparent", cursor: "pointer",
                                 fontFamily: "Georgia, serif", fontSize: "0.98rem", color: ink, padding: 0 }}>
                        {open ? "▾ " : "▸ "}{b.incipit}… <span style={{ color: "#9A8A70", fontSize: "0.8rem" }}>({b.lines.length} lines)</span>
                      </button>
                      {t1 && (
                        <button style={{ ...btn, padding: "3px 11px", fontSize: "0.74rem" }}
                          onClick={() => sendBlockToPointer(b)}>point ▸</button>
                      )}
                    </div>
                    {/* expanded lines + context + per-block encoding */}
                    {open && (() => {
                      const ctx = blockContext(b);
                      const encShown = !!encOpenBlocks[i];
                      return (
                        <div style={{ padding: "0 0.6rem 0.5rem 0.6rem" }}>
                          {ctx.before && (
                            <div style={{ fontSize: "0.78rem", color: "#9A8A70", fontStyle: "italic", padding: "0.15rem 0" }}>
                              ↑ before: {ctx.before.text}
                            </div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                            {b.lines.map((l, j) => (
                              <div key={j} style={{ display: "flex", gap: "0.5rem", alignItems: "baseline", fontSize: "0.92rem",
                                                    borderTop: "1px dotted #e7dcc0", paddingTop: "0.2rem" }}>
                                <span style={{ fontSize: "0.66rem", color: "#283a5c", minWidth: "2.6em", fontStyle: "italic" }}>
                                  {blockLinePhrase(j, b.lines.length)}
                                </span>
                                <span style={{ flex: 1 }}
                                  dangerouslySetInnerHTML={{ __html: l.runs.map((r) => r.underline
                                    ? `<u style="text-decoration-color:#7a2418">${escapeHtml(r.text)}</u>` : escapeHtml(r.text)).join("") }} />
                              </div>
                            ))}
                          </div>
                          {ctx.after && (
                            <div style={{ fontSize: "0.78rem", color: "#9A8A70", fontStyle: "italic", padding: "0.15rem 0", marginTop: "0.15rem" }}>
                              ↓ after: {ctx.after.text}
                            </div>
                          )}
                          {/* per-block encoding reveal */}
                          <div style={{ marginTop: "0.5rem" }}>
                            <button style={{ ...btn, padding: "3px 10px", fontSize: "0.72rem" }} onClick={() => toggleEnc(i)}>
                              {encShown ? "Hide encoding ▾" : "Show encoding ▸"}
                            </button>
                            {encShown && (
                              <div style={{ marginTop: "0.4rem" }}>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "0.3rem" }}>
                                  <span style={{ fontSize: "0.72rem", color: "#6b5942", fontStyle: "italic", flex: 1 }}>
                                    [accent] · line ends <b>|</b> · OCA <b>//</b> verbatim · final line bare
                                  </span>
                                  <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none", padding: "3px 12px", fontSize: "0.74rem" }}
                                    onClick={() => copyBlock(b, i)}>
                                    {copiedBlock === i ? "Copied ✓" : "Copy"}
                                  </button>
                                </div>
                                <textarea readOnly value={encodeBlock(b)} rows={Math.min(12, b.lines.length + 1)}
                                  style={{ width: "100%", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "0.82rem",
                                           lineHeight: 1.5, border: "1px solid #d6c79f", borderRadius: 6, padding: "0.5rem",
                                           background: "#fbf6ea", color: ink, resize: "vertical" }} />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "#6b5942", fontStyle: "italic" }}>
              Each block is one sticheron (lines grouped, closing after the line that follows <b>//</b>).
              <b> *</b> = tone inherited from a preceding heading. <b>⚠ no //</b> = no penultimate marker found;
              verify the grouping (shown only under “show all paragraphs”). Expand a block for its context, its
              lines, and its copy-paste encoding. “point ▸” loads a Tone 1 sticheron into the pointer with full
              A·B·C·D·…·Final rotation and scrolls to it; other tones convert but aren’t pointed yet.
            </div>
          </>
        )}
      </div>

      {/* controls */}
      <div ref={pointerRef} style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center", justifyContent: "space-between", border: "1px solid #d6c79f", borderRadius: 8, padding: "0.7rem 0.9rem", marginBottom: "1.1rem" }}>
        <div style={{ display: "inline-flex", border: `1.5px solid ${gold}`, borderRadius: 6, overflow: "hidden" }}>
          {["preset", "custom"].map((m) => (
            <button key={m} onClick={() => switchMode(m)}
              style={{ border: "none", background: mode === m ? gold : "transparent", color: mode === m ? "#fff" : gold, padding: "7px 14px", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.85rem" }}>
              {m === "preset" ? "Meeting of the Lord" : "Your own text"}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <label style={{ fontSize: "0.82rem", color: "#5b4a33" }}>
            do ={" "}
            <select value={doHz} onChange={(e) => setDoHz(parseFloat(e.target.value))}
              style={{ fontFamily: "Georgia, serif", border: "1px solid #d6c79f", borderRadius: 6, padding: "4px 8px" }}>
              {DO_OPTIONS.map((o) => <option key={o.label} value={o.hz}>{o.label}</option>)}
            </select>
          </label>
          <button style={btn} onClick={playScale}>scale</button>
          <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none" }} onClick={playAll}>▶ Sing all</button>
          <label style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.78rem", color: "#5b4a33", cursor: "pointer" }}
            title="Show which syllables come from unconfirmed or rule-fallback sources">
            <input type="checkbox" checked={showAccentSource} onChange={(e) => setShowAccentSource(e.target.checked)} />
            show source
          </label>
          {lexiconError && <span style={{ fontSize: "0.72rem", color: "#7a2418", fontStyle: "italic" }}>{lexiconError}</span>}
          {!lexicon && !lexiconError && <span style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic" }}>loading lexicon…</span>}
        </div>
      </div>

      {mode === "custom" && (
        <div style={{ marginBottom: "1.1rem" }}>
          <label style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.85rem", color: "#5b4a33" }}>
            Type the sticheron — one text line per line. Phrases rotate A·B·C·D; the last line uses the Final Phrase.
          </label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4}
            placeholder={"Come, let us also go to meet Christ with divine songs!\nLet us receive Him Whose salvation Simeon saw!\nThis is He Whom David announced;\nLet us worship Him!"}
            style={{ width: "100%", fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.6, border: "1px solid #d6c79f", borderRadius: 6, padding: "8px", resize: "vertical" }} />
          <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
            <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none" }} onClick={analyze}>Analyze &amp; point</button>
            <span style={{ fontSize: "0.78rem", color: "#6b5942", fontStyle: "italic" }}>
              Auto-accent is a draft — click any syllable to fix its accent; the phrase-final accent is the one that matters most.
            </span>
          </div>
        </div>
      )}

      {/* legend */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.78rem", color: "#6b5942", marginBottom: "1rem" }}>
        <span>reciting tone</span><span>· prep (ti)</span><span>· cadence</span><span>· ´ = accent</span>
      </div>

      {/* lines */}
      {lines.map((line, li) => {
        const roles = pointLine(line);
        const isFin = line.phrase === "Final";
        let fi = -1;
        return (
          <div key={li} style={{ background: playingLine === li ? "rgba(255,250,238,.9)" : "rgba(255,255,255,.5)", border: "1px solid #d6c79f", borderLeft: `5px solid ${playingLine === li ? "#7a2418" : gold}`, borderRadius: 8, padding: "0.7rem 0.9rem", marginBottom: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <span style={{ background: isFin ? "#7a2418" : "#283a5c", color: "#fff", borderRadius: 5, padding: "2px 10px", fontSize: "0.78rem" }}>{PNAME[line.phrase]}</span>
              <span style={{ fontSize: "0.76rem", color: "#6b5942", fontStyle: "italic" }}>
                reciting on <b>{PH[line.phrase].recite}</b>{PH[line.phrase].prep ? <> · prep on <b>ti</b></> : null} · click syllables to set accents
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 2px", alignItems: "flex-end" }}>
              {line.words.map((w, wi) => (
                <React.Fragment key={wi}>
                  {w.sylls.map((s, si) => {
                    fi += 1;
                    const r = roles[fi];
                    const myFi = fi;
                    const pis = r.pitches.join("-");
                    return (
                      <span key={si} onClick={() => toggleAccent(li, myFi)}
                        style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", padding: "3px 6px 2px", borderRadius: 6, cursor: "pointer", background: roleBg[r.role], border: r.anchor ? "1px solid #7a2418" : "1px solid transparent", minWidth: "2em" }}>
                        <span style={{ fontSize: "1.1rem", fontWeight: s.accent ? 600 : 400, position: "relative" }}>
                          {s.accent ? <span style={{ position: "absolute", top: "-0.55em", left: "50%", transform: "translateX(-50%)", color: "#7a2418" }}>´</span> : null}
                          {s.text}
                        </span>
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "0.72rem", color: roleColor[r.role] }}>{pis}</span>
                        {showAccentSource && s.source && s.source !== "table" && s.source !== "archaic" && s.source !== "truth" && s.source !== "reconciled" && s.source !== "count-only" && !STOP.has(s.text.toLowerCase()) && (
                          <span style={{ fontSize: "0.6rem", color: s.source === "residue" ? "#8a6a14" : "#9A8A70",
                                         lineHeight: 1, marginTop: "1px" }} title={s.source === "residue" ? "unconfirmed (best-guess)" : "rule fallback"}>
                            {s.source === "residue" ? "?" : "~"}
                          </span>
                        )}
                      </span>
                    );
                  })}
                  <span style={{ width: 7 }} />
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.6rem", flexWrap: "wrap" }}>
              <button style={btn} onClick={() => playLine(li)}>▶ Sing this line</button>
              <button style={btn} onClick={() => setEditOpen((o) => ({ ...o, [li]: !o[li] }))}>edit syllables</button>
            </div>
            {editOpen[li] && (
              <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                <input defaultValue={line.words.map((w) => w.sylls.map((s) => s.text).join("·")).join(" ")}
                  id={`edit-${li}`}
                  style={{ flex: 1, minWidth: 240, fontFamily: "Georgia, serif", fontSize: "0.9rem", border: "1px solid #d6c79f", borderRadius: 6, padding: "5px 8px" }} />
                <button style={btn} onClick={() => applyEdit(li, document.getElementById(`edit-${li}`).value)}>apply</button>
                <span style={{ fontSize: "0.74rem", color: "#6b5942", fontStyle: "italic" }}>separate syllables with · or - ; spaces separate words</span>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic", borderTop: "1px solid #d6c79f", paddingTop: "0.9rem" }}>
        Structural pointing (reciting run vs. cadence, anchored on the last internal accent, with the
        one-syllable-final-word backup) follows Drillock &amp; Ealy, <i>Tutorial for Learning the Church
        Tones — Common Chant</i> (OCA). The exact note-to-syllable distribution inside a cadence is the
        trainer's best reading; verify against the printed staves. Auto-syllabification of free text is
        heuristic — correct it with "edit syllables."
      </div>
    </div>
  );
}
