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

export const TONE_TRAINER_VERSION = "v0.6.2";

// Release notes for the trainer's clickable version badge (mirrors hours-tool).
// Newest entry first; the badge reads TRAINER_RELEASE_NOTES[0].version.
const TRAINER_RELEASE_NOTES = [
  {
    version: "v0.6.2",
    date: "May 2026",
    summary: "Pitch height mode — chip height and text position reflect solfege pitch",
    items: [
      "feat: pitch height toggle in legend row. Off by default. When on: chip height scales with pitch (la=36px base, +10px per scale degree → re=66px). Chips bottom-align so taller chips extend upward, creating a melody contour.",
      "feat: in pitch height mode, syllable text rises to the top of each chip (rises and falls with pitch). The solfege label stays pinned at the bottom.",
      "feat: in pitch height mode, accent mark (´) floats above the chip border via position:absolute on the chip container (overflow:visible). Phrase block top padding increases to 1.4rem to give accent marks headroom.",
    ],
  },
  {
    version: "v0.6.1",
    date: "May 2026",
    summary: "Edit mode toggle — clean singing view by default, editing gated",
    items: [
      "feat: global edit mode toggle (✎ edit button in controls bar). Off by default — singing view is clean. When on: chip click-to-accent, edit syllables, and machine row editing are all enabled.",
      "feat: comparison harness machine row is editable in edit mode — click a machine chip to toggle its accent, or use 'edit syllables' to re-break a line. Changes recompute the comparison immediately.",
    ],
  },
  {
    version: "v0.6.0",
    date: "May 2026",
    summary: "Tutorial-faithful rhythm — quarter/half/whole note durations + adjustable BPM",
    items: [
      "feat: lineToNotes now uses tutorial-specified note values. Reciting tone = quarter notes. Intonation accented syllable = half note; unaccented lead-ins = quarter. Prep = quarter. Cadence anchor = half note; middle cadence syllables = quarter; last cadence syllable = half (whole for Final Phrase). Verified against Drillock & Ealy.",
      "feat: adjustable tempo — range slider 40–120 BPM (default 80). Half note = 1 beat per tutorial. At 80 BPM: quarter = 0.375s, half = 0.75s, whole = 1.5s.",
      "feat: multi-pitch melisma durations divide the syllable's full note value evenly across pitches.",
      "feat: inter-phrase gap in Sing all scales with BPM (1 quarter note of silence).",
    ],
  },
  {
    version: "v0.5.5",
    date: "May 2026",
    summary: "Per-row sing buttons — director and machine rows each have their own ▶",
    items: [
      "feat: each row (director / machine) in the comparison harness now has its own ▶ play button, right-aligned. Clicking a row's ▶ plays that line in that version — no need to change the global toggle first.",
      "feat: Sing all in the harness header continues to use the Sing director / Sing machine toggle for batch playback.",
      "feat: playingWhich state tracks which version (director/machine) is currently sounding — amber row highlight follows the actual playing row, not the global toggle.",
      "change: per-line Sing button removed from line header (superseded by the per-row buttons).",
    ],
  },
  {
    version: "v0.5.4",
    date: "May 2026",
    summary: "Comparison mode becomes the full singing view — sung display hidden, per-line Sing added",
    items: [
      "feat: sung display (phrase blocks at bottom) hidden when comparison harness is active — eliminates scrolling and duplicate information.",
      "feat: 'Sing all' button added to comparison harness header — plays director or machine version per the sing toggle.",
      "feat: per-line '▶ Sing' button in each comparison line header.",
      "feat: playing line highlights gold with dark-red left bracket in comparison harness, matching the sung display behavior.",
      "feat: the singing row (director or machine) gets an amber highlight while playing so the singer knows which version they're hearing.",
    ],
  },
  {
    version: "v0.5.3",
    date: "May 2026",
    summary: "show source: uniform chip height, hover legend, comparison harness, auto-source fix",
    items: [
      "fix: 'auto' source tag (non-bracketed syllables in TRUTH mode) excluded from indicators — was causing false ~ flood after Analyze & point with encoded text.",
      "fix: chips now always reserve space for the source indicator row (uniform height). Previously chips grew taller when ? or ~ appeared, causing layout shift.",
      "feat: source indicators (? / ~) now appear on machine-row chips in the A/B comparison harness when 'show source' is on.",
      "feat: 'show source' toggle now has a hover legend explaining no-marker = CMU-confirmed, ? = unconfirmed best-guess, ~ = rule fallback.",
    ],
  },
  {
    version: "v0.5.2",
    date: "May 2026",
    summary: "STOP-filter on anchor candidates — 56% → ~88% projected anchor match",
    items: [
      "fix: autoAccentLine now filters STOP-list words from anchor candidates before applying the backup rule. The lexicon marks function words (the, from, or, as, this, he, our, etc.) as stressed, which previously caused the backup rule to land on them instead of stepping past. The STOP list is the correct filter: its membership is defined by grammatical function, not by test failures.",
      "note: me and thee are NOT in the STOP list and remain valid anchor candidates — the Final Phrase anchor on 'me' is unaffected.",
      "note: same filter applied to applyPhraseAccent inside autoEncodeLines, so the comparison harness machine column improves equally.",
      "note: 6 remaining non-STOP misses (polysyllabic final words: arise, aloud, announced, himself; lexicon data error: incense; thine not in STOP list) are separate concerns.",
    ],
  },
  {
    version: "v0.5.1",
    date: "May 2026",
    summary: "Phrase-structural AUTO accent engine — replaces word-stress heuristic",
    items: [
      "fix: AUTO mode now places exactly 1-2 accent marks per phrase using tutorial phrase logic, not word-stress marking. Anchor = last internally stressed syllable (existing rule). Intonation = first stressed syllable (Phrases A and C only). Everything else unaccented.",
      "fix: autoEncodeLines (machine column in comparison harness) uses the same phrase-structural engine — comparison now reflects the correct machine logic.",
      "note: accuracy ceiling is lexicon quality. Known cases: 'me' is lexicon-stressed so short Phrase B lines may anchor one syllable late; 'when' as a phrase opener may land the intonation one word early. These are lexicon improvement targets, not logic errors.",
    ],
  },
  {
    version: "v0.5.0",
    date: "May 2026",
    summary: "Feature B: encoding-aware text field + A/B comparison harness",
    items: [
      "feat: the 'your own text' textarea is now encoding-aware. Paste text with [accent] marks + | line-ends + // → TRUTH mode: brackets are authoritative over the lexicon. Plain text → AUTO mode: lexicon + heuristic unchanged.",
      "feat: both whole-word ([Lord], [hear]) and mid-word (Re[ceive], up[on]) bracket cases handled. Mid-word brackets map to syllables via vowel-nucleus overlap (SYLLABIFIER_SPEC §7).",
      "feat: 'point ▸' on an ingested sticheron now populates the textarea with the block's encoded text, making it the single channel for both ingested and hand-typed text.",
      "feat: comparison harness — after analyzing encoded text, a side-by-side director vs. machine view appears below the pointer. Anchor-level (headline) and syllable-level (detail) agreement metrics shown.",
      "feat: sing toggle in the harness — switch between truth and machine version to hear what the wrong accent sounds like.",
      "feat: JSON export — downloads per-line, per-syllable comparison detail (truth accents, machine accents, anchor-match bool) for the improvement loop.",
    ],
  },
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

// ── PITCH HEIGHT (sung display) ───────────────────────────────────────────────
// la is the lowest pitch in Tone 1 cadences. Each scale step adds CHIP_STEP_H px.
const PITCH_SCALE = ["la", "ti", "do", "re", "mi", "fa", "sol"];
const CHIP_BASE_H = 36;   // la = 36px
const CHIP_STEP_H = 10;   // +10px per scale degree → re = 66px
const chipH = (sol) => CHIP_BASE_H + Math.max(0, PITCH_SCALE.indexOf(sol)) * CHIP_STEP_H;

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
// Tutorial-faithful: intonation syllable + cadence anchor only (1–2 marks per phrase).
// Old v0.1.0 preset marked all natural word stresses — corrected per Drillock & Ealy.
const PRESET = [
  // Phrase A — Come = intonation (H); vine = cadence anchor (H); songs trails (H)
  ["A", [["Come,",[["Come",1]]],["let",[["let",0]]],["us",[["us",0]]],["also",[["al",0],["so",0]]],["go",[["go",0]]],["to",[["to",0]]],["meet",[["meet",0]]],["Christ",[["Christ",0]]],["with",[["with",0]]],["divine",[["di",0],["vine",1]]],["songs!",[["songs",0]]]]],
  // Phrase B — no intonation; Sim = anchor (backup from final monosyllable saw)
  ["B", [["Let",[["Let",0]]],["us",[["us",0]]],["receive",[["re",0],["ceive",0]]],["Him",[["Him",0]]],["Whose",[["Whose",0]]],["salvation",[["sal",0],["va",0],["tion",0]]],["Simeon",[["Sim",1],["e",0],["on",0]]],["saw!",[["saw",0]]]]],
  // Phrase C — Da = intonation; nounced = anchor
  ["C", [["This",[["This",0]]],["is",[["is",0]]],["He",[["He",0]]],["Whom",[["Whom",0]]],["David",[["Da",1],["vid",0]]],["announced;",[["an",0],["nounced",1]]]]],
  // Phrase D — no intonation; Proph = anchor (ets trails)
  ["D", [["this",[["this",0]]],["is",[["is",0]]],["He",[["He",0]]],["Who",[["Who",0]]],["spoke",[["spoke",0]]],["in",[["in",0]]],["the",[["the",0]]],["Prophets,",[["Proph",1],["ets",0]]]]],
  // Phrase A — Who = intonation; speaks = anchor (backup from final monosyllable Law)
  ["A", [["Who,",[["Who",1]]],["for",[["for",0]]],["our",[["our",0]]],["sakes,",[["sakes",0]]],["has",[["has",0]]],["taken",[["tak",0],["en",0]]],["flesh",[["flesh",0]]],["and",[["and",0]]],["Who",[["Who",0]]],["speaks",[["speaks",1]]],["through",[["through",0]]],["the",[["the",0]]],["Law.",[["Law",0]]]]],
  // Final — wor = anchor; Him trails
  ["Final", [["Let",[["Let",0]]],["us",[["us",0]]],["worship",[["wor",1],["ship",0]]],["Him!",[["Him",0]]]]],
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

  // For phrases with intonation, find the first accented body syllable.
  // That syllable is the tutorial's intonation half note (role="inton", accent=true → H).
  // Unaccented syllables before it are lead-ins on the same pitch (role="recite" → Q).
  // Fallback: if no accented body syllable exists, body[0] gets the inton role.
  const intonIdx = def.inton
    ? (body.findIndex(s => s.accent) >= 0 ? body.findIndex(s => s.accent) : 0)
    : -1;

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (def.inton && i === intonIdx) role = "inton";
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

// ── FEATURE B: BRACKET-AWARE PARSING + COMPARISON HARNESS ───────────────────
// See SYLLABIFIER_SPEC.md §7 for full design decisions.
//
// Bracket formats that occur in OCA materials:
//   Whole-word:  [Lord], [hear], [Hear]  — entire word bracketed
//   Mid-word:    up[on], Re[ceive]       — bracket covers a character span
//
// In TRUTH mode (brackets present), brackets are authoritative over the lexicon.
// The lexicon still drives syllabification; accent position comes from the bracket.

// Detect whether a raw text block contains [accent] marks.
function parseBracketedText(rawText) {
  return { hasBrackets: /\[[A-Za-z''-]+\]/.test(rawText) };
}

// Map a bracket character span within `core` to a syllable index using
// vowel-nucleus overlap (SYLLABIFIER_SPEC §7 algorithm).
// Returns the syllable index that contains the first underlined vowel nucleus,
// or -1 if no match (caller should fallback to overlap count).
function bracketSpanToSyllIdx(core, bracketStart, bracketEnd, sylls) {
  const isVowel = (c) => "aeiouy".includes(c.toLowerCase());
  // Build syllable character ranges within `core`.
  const syllRanges = [];
  let pos = 0;
  for (const s of sylls) {
    syllRanges.push({ start: pos, end: pos + s.length - 1 });
    pos += s.length;
  }
  // Find nuclei (first char of each vowel run) in the bracket span.
  let k = bracketStart;
  while (k <= bracketEnd) {
    if (isVowel(core[k])) {
      // This is a nucleus — find which syllable it belongs to.
      const idx = syllRanges.findIndex((r) => k >= r.start && k <= r.end);
      if (idx >= 0) return idx;
      while (k <= bracketEnd && isVowel(core[k])) k++;
    } else k++;
  }
  // No nucleus in bracket span — fallback: syllable with most overlapping chars.
  let max = 0, best = 0;
  syllRanges.forEach((r, si) => {
    const lo = Math.max(r.start, bracketStart);
    const hi = Math.min(r.end, bracketEnd);
    const ov = Math.max(0, hi - lo + 1);
    if (ov > max) { max = ov; best = si; }
  });
  return best;
}

// Parse one word token that may contain [bracket] marks.
// Returns {cleanWord, accentIdx, bracketType} where:
//   bracketType: "none" | "whole" | "mid"
//   accentIdx:   syllable index (into lexicon-syllabified syllables), or -1 (no bracket)
// cleanWord is the alphabetic core with brackets stripped.
function parseBracketWord(token, lexicon) {
  const hasBracket = /\[/.test(token);
  if (!hasBracket) {
    return { cleanWord: token, accentIdx: -1, bracketType: "none" };
  }

  // Strip brackets to get clean token, recording bracket span positions.
  // e.g. "up[on]" → clean="upon", bracketStart=2, bracketEnd=3
  // e.g. "[Lord]," → clean="Lord,", bracketStart=0, bracketEnd=3
  // e.g. "[Hear]" → clean="Hear", bracketStart=0, bracketEnd=3
  let clean = "";
  let bracketStart = -1, bracketEnd = -1;
  let inBracket = false;
  for (let i = 0; i < token.length; i++) {
    if (token[i] === "[") { inBracket = true; bracketStart = clean.length; continue; }
    if (token[i] === "]") { inBracket = false; bracketEnd = clean.length - 1; continue; }
    clean += token[i];
  }

  // Extract alpha core from clean token (strips leading punctuation like commas)
  const alphaMatch = clean.match(/[A-Za-z''-]+/);
  if (!alphaMatch) return { cleanWord: token.replace(/[\[\]]/g, ""), accentIdx: -1, bracketType: "none" };
  const core = alphaMatch[0];
  const coreOffset = alphaMatch.index;

  // Syllabify via lexicon.
  const entry = lookupWord(core, lexicon);
  const rawSylls = entry
    ? entry.sylls
    : syllabifyRules(core);
  const stressIdx = entry ? (entry.stressIdx ?? 0) : 0;

  // Adjust bracket positions to be relative to the alpha core.
  const adjStart = bracketStart - coreOffset;
  const adjEnd = bracketEnd - coreOffset;

  // Whole-word bracket: [Lord], [Hear], [Receive] (entire core is bracketed).
  // bracketStart..bracketEnd spans the whole core (adjusted positions cover 0..core.length-1)
  const wholeWord = adjStart <= 0 && adjEnd >= core.length - 1;

  if (wholeWord) {
    // Director marked the whole word — use lexicon stressIdx as tiebreaker.
    return {
      cleanWord: clean,
      accentIdx: stressIdx,
      bracketType: "whole",
      sylls: rawSylls,
    };
  }

  // Mid-word bracket: up[on], Re[ceive] — character span to syllable mapping.
  const clampedStart = Math.max(0, adjStart);
  const clampedEnd = Math.min(core.length - 1, adjEnd);
  const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);

  return {
    cleanWord: clean,
    accentIdx: Math.max(0, idx),
    bracketType: "mid",
    sylls: rawSylls,
  };
}

// Parse a [accent]-marked text block into the same [{phrase, words}] structure
// that analyze() produces, but with brackets as accent authority (TRUTH mode).
//
// Input format:
//   "[Lord], I call upon Thee, [hear] me! | [Hear] me, O Lord! | ... // [Hear] [me], O Lord!"
//   Lines separated by newlines. Trailing " |" marks ordinary line ends.
//   "//" is the OCA penultimate marker; the line containing it is penultimate,
//   the NEXT line (or the text after // on the same line) is the Final.
//
// Phrase rotation is rebuilt from the line structure (same as analyze()).
function parseTruthLines(rawText, lexicon) {
  // Split into lines, strip trailing | markers.
  const rawLines = rawText
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/\s*\|\s*$/, "").trim())
    .filter(Boolean);

  if (!rawLines.length) return [];
  const total = rawLines.length;

  return rawLines.map((ln, i) => {
    const phrase = phraseForLine(i, total);
    // Tokenize on whitespace; each token may contain [bracket] marks.
    const tokens = ln.split(/\s+/).filter(Boolean);
    const words = tokens
      .map((tok) => {
        const { cleanWord, accentIdx, bracketType, sylls: rawSylls } = parseBracketWord(tok, lexicon);
        if (!cleanWord) return null;

        // Syllabify the clean word for chip display.
        const { sylls: displaySylls, stressIdx: lexStress } = syllabifyWithSource(
          cleanWord.replace(/[^A-Za-z''-]/g, "") || cleanWord,
          lexicon
        );

        // Build syllable objects.
        // If bracket present: accentIdx (from bracket) is authoritative.
        // If no bracket: no accent (non-bracketed words in TRUTH mode are unaccented).
        const mappedSylls = displaySylls
          .map((t, si) => {
            const cleanT = t.replace(/[^A-Za-z''-]/g, "");
            if (!cleanT) return null;
            let accent = false;
            if (bracketType !== "none") {
              // Bracket is authoritative.
              if (bracketType === "whole") {
                // Whole-word: use lexicon stressIdx (passed through accentIdx)
                accent = si === accentIdx;
              } else {
                // Mid-word: bracket span → syllable index from parseBracketWord
                accent = si === accentIdx;
              }
            }
            // In TRUTH mode, non-bracketed words have no accent (silence = unaccented).
            return { text: cleanT, accent, source: bracketType !== "none" ? "truth" : "auto" };
          })
          .filter(Boolean);

        if (!mappedSylls.length) return null;
        return { display: cleanWord, sylls: mappedSylls };
      })
      .filter(Boolean);

    return { phrase, words };
  });
}

// Strip accents from a line set and re-encode with the auto-accenter (lexicon+heuristic).
// Returns a parallel [{phrase, words}] array — the "machine" version for comparison.
function autoEncodeLines(truthLines, lexicon) {
  // NOTE: autoAccentLine is a component-scoped arrow function (it closes over
  // nothing from the component, but is defined inside it for co-location).
  // autoEncodeLines is a module-level pure function so we replicate the logic
  // inline here to avoid a dependency on the component scope.
  //
  // Phrase-structural accent engine (mirrors autoAccentLine inside the component):
  const applyPhraseAccent = (words, phrase) => {
    const flat = [];
    words.forEach((w, wi) => {
      w.sylls.forEach((s, si) => {
        flat.push({ text: s.text, stressed: s.accent, single: w.sylls.length === 1, wi, si });
      });
    });
    if (!flat.length) return words;
    const lastIdx = flat.length - 1;
    // Same STOP filter as autoAccentLine — function words are never anchor candidates.
    const sIdxs = flat
      .map((s, i) => (s.stressed && !STOP.has(s.text.toLowerCase()) ? i : -1))
      .filter((i) => i >= 0);
    let anchorIdx = lastIdx;
    if (sIdxs.length > 0) {
      let c = sIdxs[sIdxs.length - 1];
      if (c === lastIdx && flat[lastIdx].single && sIdxs.length >= 2)
        c = sIdxs[sIdxs.length - 2];
      anchorIdx = c;
    }
    let intonIdx = -1;
    if ((phrase === "A" || phrase === "C") && sIdxs.length > 0) {
      const first = sIdxs[0];
      if (first !== anchorIdx) intonIdx = first;
    }
    const accentSet = new Set([anchorIdx]);
    if (intonIdx >= 0) accentSet.add(intonIdx);
    let fi = 0;
    return words.map((w) => ({
      ...w,
      sylls: w.sylls.map((s) => ({ ...s, accent: accentSet.has(fi++) })),
    }));
  };

  return truthLines.map((line) => {
    const rawWords = line.words.map((w) => {
      // Reconstruct the display text from the syllables (brackets already stripped).
      const display = w.display.replace(/[\[\]]/g, "");
      return wordFromDisplay(display, lexicon);
    }).filter(Boolean);
    // Apply phrase-structural engine to the machine column.
    const words = applyPhraseAccent(rawWords, line.phrase);
    return { phrase: line.phrase, words };
  });
}

// Build a per-line, per-syllable comparison between truth and machine encodings.
// Returns { lines: [...], anchorMatchCount, totalLines, syllMatchCount, totalSylls }
// Each line entry: { truthRoles, machineRoles, truthAnchor, machineAnchor, anchorMatch,
//                    syllables: [{text, truthAccent, machineAccent, agree}] }
function buildComparison(truthLines, machineLines) {
  let anchorMatchCount = 0;
  let syllMatchCount = 0;
  let totalSylls = 0;

  const lines = truthLines.map((tLine, li) => {
    const mLine = machineLines[li] || { phrase: tLine.phrase, words: [] };

    // Flatten syllables from each.
    const flatSylls = (words) => {
      const out = [];
      words.forEach((w) => w.sylls.forEach((s) => out.push({ text: s.text, accent: s.accent, source: s.source })));
      return out;
    };
    const tFlat = flatSylls(tLine.words);
    const mFlat = flatSylls(mLine.words);

    // Compute anchors.
    const truthAnchor = anchorIndex(tFlat);
    const machineAnchor = anchorIndex(mFlat);
    const anchorMatch = truthAnchor === machineAnchor;
    if (anchorMatch) anchorMatchCount++;

    // Per-syllable comparison (align by index — same text since same words).
    const maxLen = Math.max(tFlat.length, mFlat.length);
    const syllables = [];
    for (let si = 0; si < maxLen; si++) {
      const ts = tFlat[si];
      const ms = mFlat[si];
      const agree = ts && ms ? ts.accent === ms.accent : false;
      if (agree) syllMatchCount++;
      totalSylls++;
      syllables.push({
        text: ts?.text || ms?.text || "?",
        truthAccent: ts?.accent ?? false,
        machineAccent: ms?.accent ?? false,
        machineSource: ms?.source || null,
        agree,
        isAnchor: si === truthAnchor,
        isMachineAnchor: si === machineAnchor,
      });
    }

    return {
      phrase: tLine.phrase,
      truthLine: tLine,
      machineLine: mLine,
      truthAnchor,
      machineAnchor,
      anchorMatch,
      syllables,
    };
  });

  return {
    lines,
    anchorMatchCount,
    totalLines: truthLines.length,
    syllMatchCount,
    totalSylls,
  };
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
  const stop = () => {
    if (ctxRef.current) {
      try { ctxRef.current.close(); } catch (_) {}
      ctxRef.current = null;
    }
  };
  return { ac, tone, stop };
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ToneTrainer() {
  const [doHz, setDoHz] = useState(261.63);
  const [bpm, setBpm] = useState(70); // half note = 1 beat per tutorial
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const [playingLine, setPlayingLine] = useState(null);
  const [playingWhich, setPlayingWhich] = useState(null); // "truth"|"machine" while a line plays
  const [editOpen, setEditOpen] = useState({});
  const [editMode, setEditMode] = useState(false); // gates all accent/syllable editing
  const [pitchHeight, setPitchHeight] = useState(false); // chip height reflects solfege pitch
  const [machineEditOpen, setMachineEditOpen] = useState({}); // comparison machine edit lines
  const [showReleaseNotes, setShowReleaseNotes] = useState(false);
  // lexicon (fetched from public/lexicon/ at mount, same pattern as psalter/scripture)
  const [lexicon, setLexicon] = useState(null);
  const [lexiconError, setLexiconError] = useState(null);
  const [showAccentSource, setShowAccentSource] = useState(false);
  const [sourceTooltip, setSourceTooltip] = useState(false); // hover legend for show source
  // Feature B: encoding-aware field + comparison harness
  const [hasTruth, setHasTruth] = useState(false);      // textarea contains [accent] marks?
  const [compareMode, setCompareMode] = useState(false); // show comparison harness?
  const [compareData, setCompareData] = useState(null);  // buildComparison() result
  const [singWhich, setSingWhich] = useState("truth");   // harness sing toggle: "truth"|"machine"
  const [machineLines, setMachineLines] = useState(null); // auto-encoded parallel lines

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

  // Auto-scroll the active block into view while singing — centers in the window.
  // Works for both the sung display (phrase-block-N) and the comparison harness
  // (compare-block-N). Using block:"center" keeps the active verse mid-screen
  // rather than just barely in view.
  useEffect(() => {
    if (playingLine === null) return;
    const id = (compareMode && compareData)
      ? `compare-block-${playingLine}`
      : `phrase-block-${playingLine}`;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [playingLine]);

  // docx ingest state
  const [docName, setDocName] = useState(null);
  const [docPanelOpen, setDocPanelOpen] = useState(true); // collapse/expand when docx loaded
  const [docParas, setDocParas] = useState([]);     // assignTones output
  const [docError, setDocError] = useState(null);
  const [showAllParas, setShowAllParas] = useState(false);
  const [encOpenBlocks, setEncOpenBlocks] = useState({}); // block index -> show encoding
  const [copiedBlock, setCopiedBlock] = useState(null);   // block index just copied
  const [expandedBlocks, setExpandedBlocks] = useState({}); // block index -> bool
  const pointerRef = useRef(null);
  const timerIdsRef = useRef([]); // all active setTimeout IDs — cleared by stopAll
  const { ac, tone, stop } = useAudio();

  const freq = (sol) => doHz * Math.pow(2, OFF[sol] / 12);

  const lineToNotes = (line) => {
    const roles = pointLine(line);
    const notes = [];
    const isFinal = line.phrase === "Final";

    // Tutorial-faithful note values (Drillock & Ealy, Common Chant Introduction).
    // Half note = 1 beat (the predominant pulse). BPM = half notes per minute.
    const H = 60 / bpm;        // half note — intonation, cadence anchor, final cadence
    const Q = H / 2;           // quarter note — reciting tone, prep, middle cadence
    const W = H * 2;           // whole note — last syllable of Final Phrase only

    // Precompute cadence syllable positions for first/middle/last logic.
    const cadIdxs = roles.map((r, i) => r.role === "cad" ? i : -1).filter(i => i >= 0);

    roles.forEach((r, ri) => {
      // Syllable duration per tutorial:
      //   inton accented → H (half note intonation)
      //   inton unaccented → Q (quarter note lead-in on same pitch)
      //   recite / prep → Q (quarter note always)
      //   cad anchor (first) → H; cad middle → Q; cad last → H or W (Final only)
      let syllDur;
      if (r.role === "inton") {
        syllDur = r.accent ? H : Q;
      } else if (r.role === "recite" || r.role === "prep") {
        syllDur = Q;
      } else if (r.role === "cad") {
        const cadPos = cadIdxs.indexOf(ri);
        const isFirst = cadPos === 0;
        const isLast  = cadPos === cadIdxs.length - 1;
        if (isFirst && isLast) {
          // Only one cadence syllable — serves as both anchor and final.
          syllDur = isFinal ? W : H;
        } else if (isFirst) {
          syllDur = H; // anchor always half note
        } else if (isLast) {
          syllDur = isFinal ? W : H; // whole note only for Final Phrase
        } else {
          syllDur = Q; // middle cadence syllables = quarter notes
        }
      } else {
        syllDur = Q;
      }

      // Multi-pitch melisma: divide syllable duration evenly across pitches.
      const pitchDur = syllDur / r.pitches.length;
      const peak = (r.role === "cad" && r.anchor) ? 0.27 : 0.2;

      r.pitches.forEach((p) => {
        notes.push({ sol: p, dur: pitchDur, peak });
      });
    });
    return notes;
  };

  const playNotes = (notes, onDone) => {
    const c = ac();
    let t = c.currentTime + 0.06;
    notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
    if (onDone) {
      const id = setTimeout(onDone, (t - c.currentTime) * 1000 + 40);
      timerIdsRef.current.push(id);
    }
  };

  // In TRUTH mode with a comparison harness open, singWhich controls whether
  // playLine/playAll sings the director truth or the machine version.
  const activeLines = () =>
    compareMode && singWhich === "machine" && machineLines ? machineLines : lines;

  // playLineAs: play a specific line in a specific version (truth/machine)
  // without changing the global singWhich — used by per-row ▶ buttons.
  const playLineAs = (li, which) => {
    const src = which === "machine" && machineLines ? machineLines : lines;
    setPlayingLine(li);
    setPlayingWhich(which);
    playNotes(lineToNotes(src[li]), () => { setPlayingLine(null); setPlayingWhich(null); });
  };

  const playLine = (li) => {
    setPlayingLine(li);
    setPlayingWhich(singWhich);
    playNotes(lineToNotes(activeLines()[li]), () => { setPlayingLine(null); setPlayingWhich(null); });
  };

  const playAll = () => {
    timerIdsRef.current.forEach(id => clearTimeout(id));
    timerIdsRef.current = [];
    const c = ac();
    let t = c.currentTime + 0.06;
    const which = compareMode && machineLines ? singWhich : "truth";
    setPlayingWhich(which);
    activeLines().forEach((line, li) => {
      const notes = lineToNotes(line);
      const start = t;
      const id1 = setTimeout(() => setPlayingLine(li), (start - c.currentTime) * 1000);
      timerIdsRef.current.push(id1);
      notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
      t += (60 / bpm) / 2; // one quarter note of silence between phrases
    });
    const id2 = setTimeout(() => { setPlayingLine(null); setPlayingWhich(null); }, (t - c.currentTime) * 1000 + 40);
    timerIdsRef.current.push(id2);
  };

  const stopAll = () => {
    timerIdsRef.current.forEach(id => clearTimeout(id));
    timerIdsRef.current = [];
    stop();
    setPlayingLine(null);
    setPlayingWhich(null);
  };

  const playScale = () =>
    playNotes(["la", "ti", "do", "re", "mi"].map((s) => ({ sol: s, dur: 0.4 })));

  // ── PHRASE-STRUCTURAL AUTO ACCENT ENGINE (v0.5.1) ──────────────────────────
  // Takes a words array already syllabified by wordFromDisplay (lexicon has done
  // its job), and the phrase type. Reads the existing `accent` flag as a STRESS
  // CANDIDATE signal (is this syllable naturally stressed?), then applies the
  // tutorial's phrase structural rules to mark exactly the right 1-2 syllables:
  //
  //   Anchor    (all phrases)    : last internally stressed syllable
  //                                (with the existing monosyllable-final backup)
  //   Intonation (Phrases A + C) : first stressed syllable
  //
  // Everything else gets accent = false.
  // Accuracy ceiling = lexicon quality. Logic is phrase-structural, not word-level.
  const autoAccentLine = (words, phrase) => {
    // Build flat syllable list, reading accent as "stressed" candidate.
    const flat = [];
    words.forEach((w, wi) => {
      w.sylls.forEach((s, si) => {
        flat.push({ text: s.text, stressed: s.accent, single: w.sylls.length === 1, wi, si });
      });
    });
    if (!flat.length) return words;

    const lastIdx = flat.length - 1;
    // Filter STOP-list words from anchor candidates. The lexicon marks function
    // words (the, from, or, as, this, he, our, etc.) as stressed, which causes
    // the backup rule to land on them. The STOP list is defined by grammatical
    // function — not test fixtures — so it is the correct filter here.
    // Note: "me" and "thee" are NOT in STOP and remain valid anchor candidates.
    const stressedIdxs = flat
      .map((s, i) => (s.stressed && !STOP.has(s.text.toLowerCase()) ? i : -1))
      .filter((i) => i >= 0);

    // ── Anchor: last internally stressed syllable ──────────────────────────
    let anchorIdx = lastIdx; // fallback: use last syllable if nothing is stressed
    if (stressedIdxs.length > 0) {
      let c = stressedIdxs[stressedIdxs.length - 1];
      // Last-internal backup: final stressed monosyllable → step back one.
      if (c === lastIdx && flat[lastIdx].single && stressedIdxs.length >= 2) {
        c = stressedIdxs[stressedIdxs.length - 2];
      }
      anchorIdx = c;
    }

    // ── Intonation: first stressed syllable (Phrases A and C only) ─────────
    let intonIdx = -1;
    if ((phrase === "A" || phrase === "C") && stressedIdxs.length > 0) {
      const first = stressedIdxs[0];
      // Don't double-mark: if only one stressed syllable in the phrase it serves
      // as the anchor; no separate intonation mark.
      if (first !== anchorIdx) intonIdx = first;
    }

    // ── Rebuild words: accent = true only at anchor + intonation ───────────
    const accentSet = new Set([anchorIdx]);
    if (intonIdx >= 0) accentSet.add(intonIdx);

    let fi = 0;
    return words.map((w) => ({
      ...w,
      sylls: w.sylls.map((s) => ({ ...s, accent: accentSet.has(fi++) })),
    }));
  };

  const analyze = () => {
    if (!text.trim()) { setLines([]); return; }
    const { hasBrackets } = parseBracketedText(text);
    if (hasBrackets) {
      // TRUTH MODE: brackets are authoritative over the lexicon.
      const tLines = parseTruthLines(text, lexicon);
      if (!tLines.length) { setLines([]); return; }
      const mLines = autoEncodeLines(tLines, lexicon);
      const cmp = buildComparison(tLines, mLines);
      setLines(tLines);
      setMachineLines(mLines);
      setCompareData(cmp);
      setHasTruth(true);
      setCompareMode(true);
      setSingWhich("truth");
    } else {
      // AUTO MODE: syllabify via lexicon, then apply phrase-structural accent engine.
      const raw = text.split("\n").map((s) => s.trim()).filter(Boolean);
      const next = raw.map((ln, i) => {
        const phrase = phraseForLine(i, raw.length);
        const rawWords = ln.split(/\s+/)
          .filter((w) => /[A-Za-z]/.test(w))   // skip pure-punctuation tokens (commas, etc.)
          .map((w) => wordFromDisplay(w, lexicon))
          .filter(Boolean);                      // drop null returns (whole-punctuation tokens)
        // Apply phrase-structural engine: anchor + intonation only, not all word stress.
        const words = autoAccentLine(rawWords, phrase);
        return { phrase, words };
      });
      setLines(next);
      setHasTruth(false);
      setCompareData(null);
      setMachineLines(null);
      setCompareMode(false);
    }
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

  // Toggle accent on a machine syllable in the comparison harness.
  // Mutates machineLines and recomputes compareData immediately.
  const toggleMachineAccent = (li, si) => {
    if (!machineLines) return;
    const newML = machineLines.map((line, lineIdx) => {
      if (lineIdx !== li) return line;
      let count = 0;
      const words = line.words.map((w) => ({
        ...w,
        sylls: w.sylls.map((s) => {
          const result = { ...s, accent: count === si ? !s.accent : s.accent };
          count++;
          return result;
        }),
      }));
      return { ...line, words };
    });
    setMachineLines(newML);
    setCompareData(buildComparison(lines, newML));
  };

  // Re-syllabify a machine line from text (same format as applyEdit: syll·syll word).
  const applyMachineEdit = (li, val) => {
    if (!machineLines) return;
    const words = val.trim().split(/\s+/).map((tok) => {
      const sylls = tok.split(/[·\-]/).filter(Boolean);
      return { display: sylls.join(""), sylls: sylls.map((t) => ({ text: t, accent: false, source: "rule" })) };
    });
    const newML = machineLines.map((line, lineIdx) =>
      lineIdx === li ? { ...line, words } : line
    );
    setMachineLines(newML);
    setCompareData(buildComparison(lines, newML));
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
    // Also populate the textarea with the encoded text (Feature B: [accent]/|// format).
    // When the user hits "Analyze & point" it will re-run in TRUTH mode.
    const encoded = encodeBlock(block);
    setText(encoded);
    setLines(next);
    // The block's OCA-underline accents ARE truth — set hasTruth and build comparison.
    const mLines = autoEncodeLines(next, lexicon);
    const cmp = buildComparison(next, mLines);
    setMachineLines(mLines);
    setCompareData(cmp);
    setHasTruth(true);
    setCompareMode(false); // user must hit "show comparison ▸" explicitly
    setSingWhich("truth");
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
              onChange={(e) => { onDocxFile(e.target.files && e.target.files[0]); setDocPanelOpen(true); }} />
          </label>
          {docName && (
            <>
              <span style={{ fontSize: "0.8rem", color: "#5b4a33", flex: 1 }}>{docName}</span>
              <button
                onClick={() => setDocPanelOpen(v => !v)}
                style={{ border: "1px solid #d6c79f", background: "transparent", borderRadius: 4,
                         padding: "2px 10px", cursor: "pointer", fontFamily: "Georgia, serif",
                         fontSize: "0.78rem", color: "#6b5942" }}
                title={docPanelOpen ? "Collapse service file panel" : "Expand service file panel"}>
                {docPanelOpen ? "▾ collapse" : "▸ expand"}
              </button>
            </>
          )}
          {blocks.some(b => b.suspect) && (
            <>
              <span style={{ flex: 1 }} />
              <label style={{ fontSize: "0.78rem", color: "#7a2418", display: "inline-flex", alignItems: "center", gap: 5 }}
                title="Show stichera blocks where no // penultimate marker was found — verify these groupings">
                <input type="checkbox" checked={showAllParas} onChange={(e) => setShowAllParas(e.target.checked)} />
                show suspect blocks
              </label>
            </>
          )}
        </div>
        {docError && <div style={{ marginTop: "0.5rem", color: "#7a2418", fontSize: "0.82rem" }}>{docError}</div>}
        {!docName && (
          <div style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic" }}>
            Extracts the OCA underline-marked accents from a day's service text, grouped by sticheron.
          </div>
        )}

        {docPanelOpen && blocks.length > 0 && (
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
              verify the grouping (revealed by “show suspect blocks” above). Expand a block for its context, its
              lines, and its copy-paste encoding. “point ▸” loads a Tone 1 sticheron into the pointer with full
              A·B·C·D·…·Final rotation and scrolls to it; other tones convert but aren’t pointed yet.
            </div>
          </>
        )}
      </div>

      {/* ── POINTER (textarea + comparison) — above the play bar ────────── */}
      <div ref={pointerRef} style={{ marginBottom: "1.1rem" }}>
          {/* Label adapts to whether brackets are detected in the text. */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
            <label style={{ fontSize: "0.85rem", color: "#5b4a33" }}>
              Type or paste the sticheron — one line per line. Phrases rotate A·B·C·D; the last line is the Final Phrase.
            </label>
            {hasTruth && (
              <span style={{ fontSize: "0.72rem", background: "rgba(90,122,60,.12)", border: "1px solid rgba(90,122,60,.5)",
                             borderRadius: 3, color: "#3a6020", padding: "1px 7px", whiteSpace: "nowrap" }}
                title="Director Pointing active — [accent] brackets override the machine engine">
                Director Pointing ✓
              </span>
            )}
          </div>
          <textarea value={text} onChange={(e) => { setText(e.target.value); setHasTruth(parseBracketedText(e.target.value).hasBrackets); }} rows={5}
            placeholder={"Machine Pointing (plain text):\nCome, let us also go to meet Christ with divine songs!\n\nDirector Pointing (with [accent] marks):\n[Lord], I call up[on] Thee, [hear] me! |\n[Hear] me, O Lord!"}
            style={{ width: "100%", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "0.88rem",
                     lineHeight: 1.6, border: `1px solid ${hasTruth ? "rgba(90,122,60,.6)" : "#d6c79f"}`,
                     borderRadius: 6, padding: "8px", resize: "vertical",
                     background: hasTruth ? "rgba(90,122,60,.03)" : "transparent" }} />
          <div style={{ marginTop: "0.45rem", fontSize: "0.75rem", color: "#9A8A70", fontStyle: "italic" }}>
            {hasTruth && <>Director Pointing mode — [accent] brackets override the machine. | = line end · // = penultimate line.</>}
          </div>
      </div>

      {/* ── PLAY BAR ─────────────────────────────────────────────────────── */}
      <div style={{ display: "flex", flexWrap: "nowrap", gap: "0.5rem", alignItems: "center",
                    border: "1px solid #d6c79f", borderRadius: 8,
                    padding: "0.55rem 0.9rem", marginBottom: "1.1rem",
                    overflowX: "auto" }}>
        <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none",
                         flexShrink: 0 }} onClick={analyze}
          title="Syllabify and point the sticheron — assigns reciting tone, prep, and cadence roles">
          Point
        </button>
        {compareData && (
          <button style={{ ...btn, background: "transparent", fontSize: "0.75rem",
                           flexShrink: 0 }}
            onClick={() => setCompareMode((v) => !v)}>
            {compareMode ? "hide comparison ▾" : "show comparison ▸"}
          </button>
        )}
        <span style={{ color: "#d6c79f", margin: "0 0.25rem", flexShrink: 0 }}>|</span>
        <label style={{ fontSize: "0.82rem", color: "#5b4a33", flexShrink: 0 }}>
          do ={" "}
          <select value={doHz} onChange={(e) => setDoHz(parseFloat(e.target.value))}
            style={{ fontFamily: "Georgia, serif", border: "1px solid #d6c79f",
                     borderRadius: 6, padding: "3px 6px" }}>
            {DO_OPTIONS.map((o) => <option key={o.label} value={o.hz}>{o.label}</option>)}
          </select>
        </label>
        <button style={{ ...btn, flexShrink: 0 }} onClick={playScale}>scale</button>
        <label style={{ fontSize: "0.82rem", color: "#5b4a33", display: "inline-flex",
                        alignItems: "center", gap: "0.3rem", flexShrink: 0 }}
          title="Half note = 1 beat (Drillock &amp; Ealy). Range: 40–120 BPM.">
          tempo
          <input type="range" min={40} max={120} step={1} value={bpm}
            onChange={(e) => setBpm(parseInt(e.target.value, 10))}
            style={{ width: 64, cursor: "pointer", accentColor: gold }} />
          <span style={{ minWidth: "3.5em", textAlign: "right" }}>{bpm} BPM</span>
        </label>
        <button
          style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none",
                   flexShrink: 0, fontSize: "1rem", padding: "5px 10px" }}
          onClick={playingLine !== null ? stopAll : playAll}
          title={playingLine !== null ? "Stop playback" : "Sing all lines"}>
          {playingLine !== null ? "◼" : "▶"}
        </button>
        {lexiconError && <span style={{ fontSize: "0.72rem", color: "#7a2418",
                                        fontStyle: "italic", flexShrink: 0 }}>{lexiconError}</span>}
        {!lexicon && !lexiconError && <span style={{ fontSize: "0.72rem", color: "#9A8A70",
                                                      fontStyle: "italic", flexShrink: 0 }}>loading lexicon…</span>}
      </div>

      {/* ── COMPARISON HARNESS (Feature B) ───────────────────────────────── */}
      {compareMode && compareData && (
        <div style={{ border: "1px solid rgba(90,122,60,.5)", borderRadius: 8, padding: "0.8rem 0.9rem",
                      marginBottom: "1.1rem", background: "rgba(90,122,60,.04)" }}>
          {/* Header row 1: title | stats | spacer | Export JSON */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#3a6020" }}>
              Director vs. Machine
            </span>
            <span style={{ fontSize: "0.78rem", color: "#3a6020",
                           background: "rgba(90,122,60,.12)", border: "1px solid rgba(90,122,60,.3)",
                           borderRadius: 3, padding: "1px 8px" }}>
              anchor: {compareData.anchorMatchCount}/{compareData.totalLines} lines match
              {" "}({Math.round(compareData.anchorMatchCount / Math.max(1, compareData.totalLines) * 100)}%)
            </span>
            <span style={{ fontSize: "0.78rem", color: "#5b4a33",
                           background: "rgba(139,105,20,.08)", border: "1px solid rgba(139,105,20,.25)",
                           borderRadius: 3, padding: "1px 8px" }}>
              syllable: {compareData.syllMatchCount}/{compareData.totalSylls}
              {" "}({Math.round(compareData.syllMatchCount / Math.max(1, compareData.totalSylls) * 100)}%)
            </span>
            <span style={{ flex: 1 }} />
            {/* JSON export — top right */}
            <button
              onClick={() => {
                const payload = {
                  generated: new Date().toISOString(),
                  trainerVersion: TONE_TRAINER_VERSION,
                  anchorMatchPct: Math.round(compareData.anchorMatchCount / Math.max(1, compareData.totalLines) * 100),
                  syllMatchPct: Math.round(compareData.syllMatchCount / Math.max(1, compareData.totalSylls) * 100),
                  lines: compareData.lines.map((l) => ({
                    phrase: l.phrase,
                    anchorMatch: l.anchorMatch,
                    truthAnchorIdx: l.truthAnchor,
                    machineAnchorIdx: l.machineAnchor,
                    syllables: l.syllables.map((s) => ({
                      text: s.text,
                      truthAccent: s.truthAccent,
                      machineAccent: s.machineAccent,
                      agree: s.agree,
                      isAnchor: s.isAnchor,
                      isMachineAnchor: s.isMachineAnchor,
                    })),
                  })),
                };
                const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url; a.download = "tone-trainer-comparison.json"; a.click();
                URL.revokeObjectURL(url);
              }}
              style={{ ...btn, fontSize: "0.74rem", padding: "3px 11px" }}
            >
              Export JSON ↓
            </button>
          </div>
          {/* Header row 2: Sing director/machine toggle | edit machine | spacer | show source */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.7rem" }}>
            {/* Sing director / machine toggle */}
            <div style={{ display: "inline-flex", border: "1.5px solid #8B6914", borderRadius: 5, overflow: "hidden" }}>
              {["truth", "machine"].map((w) => (
                <button key={w} onClick={() => setSingWhich(w)}
                  style={{ border: "none", background: singWhich === w ? "#8B6914" : "transparent",
                           color: singWhich === w ? "#fff" : "#8B6914",
                           padding: "4px 11px", cursor: "pointer", fontFamily: "Georgia, serif",
                           fontSize: "0.75rem", letterSpacing: "0.04em" }}>
                  {w === "truth" ? "Sing director" : "Sing machine"}
                </button>
              ))}
            </div>
            {/* edit machine toggle — lives in the harness where it's used */}
            <button
              onClick={() => setEditMode(v => !v)}
              style={{ ...btn,
                       background: editMode ? gold : "transparent",
                       color: editMode ? "#fff" : gold,
                       fontSize: "0.75rem", padding: "4px 11px" }}
              title={editMode ? "Edit mode on — click machine chips or edit syllables" : "Enable to edit machine accent and syllable breakdown"}>
              ✎ edit machine
            </button>
            <span style={{ flex: 1 }} />
            {/* show source ⓘ — moved here from controls bar */}
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
              <label style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.78rem", color: "#5b4a33", cursor: "pointer" }}
                onMouseEnter={() => setSourceTooltip(true)} onMouseLeave={() => setSourceTooltip(false)}>
                <input type="checkbox" checked={showAccentSource} onChange={(e) => setShowAccentSource(e.target.checked)} />
                show source ⓘ
              </label>
              {sourceTooltip && (
                <div style={{ position: "absolute", bottom: "calc(100% + 8px)", right: 0, zIndex: 100,
                               background: "#FAF6EE", border: "1px solid #D4C49A", borderRadius: 5,
                               padding: "0.55rem 0.75rem", width: 220, boxShadow: "0 3px 12px rgba(0,0,0,.13)",
                               fontSize: "0.72rem", color: "#3D3020", lineHeight: 1.6,
                               pointerEvents: "none" }}>
                  <div style={{ fontWeight: 600, marginBottom: "0.3rem", color: "#5C4A1E" }}>Accent source legend</div>
                  <div><span style={{ fontFamily: "monospace" }}>no marker</span> — CMU-confirmed (table entry)</div>
                  <div><span style={{ fontFamily: "monospace", color: "#8a6a14" }}>?</span> — unconfirmed best-guess (word not in CMU; stress estimated)</div>
                  <div><span style={{ fontFamily: "monospace", color: "#9A8A70" }}>~</span> — rule fallback (word completely off-table)</div>
                </div>
              )}
            </div>
          </div>

          {/* Per-line side-by-side comparison */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {compareData.lines.map((cl, li) => {
              const isPlaying = playingLine === li;
              return (
              <div key={li} id={`compare-block-${li}`} style={{ borderRadius: 5, overflow: "hidden",
                                     background: isPlaying ? "rgba(255,250,238,.95)" : "transparent",
                                     borderTop: cl.anchorMatch ? "1px solid rgba(90,122,60,.35)" : "1px solid rgba(180,80,40,.35)",
                                     borderRight: cl.anchorMatch ? "1px solid rgba(90,122,60,.35)" : "1px solid rgba(180,80,40,.35)",
                                     borderBottom: cl.anchorMatch ? "1px solid rgba(90,122,60,.35)" : "1px solid rgba(180,80,40,.35)",
                                     borderLeft: isPlaying ? "4px solid #7a2418" : cl.anchorMatch ? "4px solid rgba(90,122,60,.45)" : "4px solid rgba(180,80,40,.35)" }}>
                {/* Line header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.6rem",
                              background: isPlaying ? "rgba(255,243,220,.8)" : cl.anchorMatch ? "rgba(90,122,60,.08)" : "rgba(180,80,40,.07)",
                              fontSize: "0.72rem" }}>
                  <span style={{ background: cl.phrase === "Final" ? "#7a2418" : "#283a5c", color: "#fff",
                                 borderRadius: 3, padding: "1px 7px" }}>{cl.phrase}</span>
                  <span style={{ color: cl.anchorMatch ? "#3a6020" : "#8a3010", fontWeight: 600 }}>
                    {cl.anchorMatch ? "anchor ✓" : "anchor ✗"}
                  </span>
                  <span style={{ color: "#9A8A70", fontStyle: "italic" }}>
                    {cl.syllables.filter(s => s.agree).length}/{cl.syllables.length} syllables agree
                  </span>
                </div>

                {/* Two-row chip display: director on top, machine below */}
                {["truth", "machine"].map((which) => {
                  // rowSinging follows playingWhich (set by playLineAs) not the global toggle
                  const rowSinging = isPlaying && playingWhich === which;
                  // Machine edit vars — hoisted so they're available in JSX without an IIFE
                  const mLine = which === "machine" ? (machineLines || [])[li] : null;
                  const mDefaultVal = mLine
                    ? mLine.words.map(w => w.sylls.map(s => s.text).join("\u00b7")).join(" ")
                    : "";
                  const mInputId = `medit-${li}`;
                  return (
                  <div key={which} style={{ background: rowSinging ? "rgba(255,236,180,.55)"
                                              : which === "truth" ? "rgba(255,255,255,.6)" : "rgba(245,245,245,.6)",
                                            borderTop: "1px solid rgba(0,0,0,.05)" }}>
                    {/* Chips + play button row */}
                    <div style={{ display: "flex", alignItems: "center", padding: "0.35rem 0.6rem" }}>
                    <span style={{ fontSize: "0.6rem", color: "#9A8A70", minWidth: "3.2em",
                                   flexShrink: 0, fontStyle: "italic" }}>
                      {which === "truth" ? "director" : "machine"}
                    </span>
                    {/* Inner chips container — wraps freely, grows to fill available space */}
                    <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "2px 2px",
                                  alignItems: "flex-end" }}>
                    {cl.syllables.map((s, si) => {
                      const accent = which === "truth" ? s.truthAccent : s.machineAccent;
                      const disagree = !s.agree;
                      const isAnchorThis = which === "truth" ? s.isAnchor : s.isMachineAnchor;
                      // Source indicator — only on machine row, only when showAccentSource on.
                      const NOSRC = ["table","archaic","truth","reconciled","count-only","auto"];
                      const mSrc = s.machineSource;
                      const mSrcChar = (which === "machine" && mSrc && !NOSRC.includes(mSrc))
                        ? (mSrc === "residue" ? "?" : "~") : null;
                      const machineClickable = editMode && which === "machine";
                      return (
                        <span key={si}
                          onClick={machineClickable ? () => toggleMachineAccent(li, si) : undefined}
                          style={{ display: "inline-flex", flexDirection: "column", alignItems: "center",
                                   padding: "2px 5px 1px", borderRadius: 5, minWidth: "1.8em",
                                   cursor: machineClickable ? "pointer" : "default",
                                   background: disagree ? "rgba(200,100,40,.12)" : "rgba(40,58,92,.05)",
                                   border: isAnchorThis ? "1px solid #7a2418" : disagree ? "1px solid rgba(200,100,40,.4)" : "1px solid transparent" }}>
                          <span style={{ fontSize: "1rem", fontWeight: accent ? 600 : 400, position: "relative", color: accent ? "#1c1008" : "#9A8A70" }}>
                            {accent && <span style={{ position: "absolute", top: "-0.5em", left: "50%", transform: "translateX(-50%)", color: "#7a2418", fontSize: "0.9em" }}>´</span>}
                            {s.text}
                          </span>
                          {/* Uniform-height indicator row — always present */}
                          <span style={{ fontSize: "0.6rem", lineHeight: 1, marginTop: "1px",
                                         color: mSrcChar === "?" ? "#8a6a14" : "#9A8A70",
                                         visibility: (showAccentSource && mSrcChar) ? "visible" : "hidden" }}
                                title={mSrcChar === "?" ? "unconfirmed best-guess" : "rule fallback"}>
                            {mSrcChar || " "}
                          </span>
                        </span>
                      );
                    })}
                    </div>{/* end inner chips container */}
                    {/* Per-row play button — outside the chips container, anchored right */}
                    <button
                      onClick={() => playLineAs(li, which)}
                      style={{ border: `1px solid ${rowSinging ? "#7a2418" : gold}`,
                               background: rowSinging ? "rgba(122,36,24,.08)" : "transparent",
                               color: rowSinging ? "#7a2418" : gold,
                               borderRadius: 3, padding: "2px 9px", cursor: "pointer",
                               fontFamily: "Georgia, serif", fontSize: "0.68rem",
                               flexShrink: 0, marginLeft: "0.5rem", alignSelf: "center" }}>
                      ▶
                    </button>
                    </div>{/* end chips row */}
                    {/* Machine edit panel — inside the machine row when editMode on */}
                    {which === "machine" && editMode && (
                      <div style={{ padding: "0.3rem 0.6rem 0.45rem", borderTop: "1px solid rgba(0,0,0,.08)",
                                     background: "rgba(235,235,235,.5)" }}>
                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                          <input id={mInputId} defaultValue={mDefaultVal}
                            style={{ flex: 1, minWidth: 200, fontFamily: "Georgia, serif", fontSize: "0.85rem",
                                     border: "1px solid #d6c79f", borderRadius: 6, padding: "3px 7px" }} />
                          <button style={btn}
                            onClick={() => applyMachineEdit(li, document.getElementById(mInputId).value)}>
                            apply
                          </button>
                          <span style={{ fontSize: "0.7rem", color: "#6b5942", fontStyle: "italic" }}>
                            · separates syllables, space separates words
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
              );
            })}
          </div>

          <div style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "#6b5942", fontStyle: "italic" }}>
            Amber chips = syllable-level disagreement. Boxed chip = cadence anchor. "Sing all" plays per the Sing director / machine toggle. Each row has its own ▶ to play that version directly. "Show source" reveals ? / ~ on machine chips.
          </div>
        </div>
      )}

      {/* legend + sung display — hidden in comparison mode */}
      {!(compareMode && compareData) && (
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap",
                    fontSize: "0.78rem", color: "#6b5942", marginBottom: "1rem" }}>
        <span style={{ flex: 1, display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <span>reciting tone</span><span>· prep (ti)</span><span>· cadence</span><span>· ´ = accent</span>
        </span>
        {/* Pointing mode indicator */}
        <span style={{ fontSize: "0.72rem", flexShrink: 0,
                       background: hasTruth ? "rgba(90,122,60,.12)" : "rgba(139,105,20,.08)",
                       border: `1px solid ${hasTruth ? "rgba(90,122,60,.45)" : "rgba(139,105,20,.3)"}`,
                       color: hasTruth ? "#3a6020" : "#5b4a33",
                       borderRadius: 3, padding: "1px 8px", whiteSpace: "nowrap" }}>
          {hasTruth ? "Director Pointing" : "Machine Pointing"}
        </span>
        {/* Pitch height toggle */}
        <button
          onClick={() => setPitchHeight(v => !v)}
          style={{ marginLeft: "0.5rem", fontSize: "0.72rem", flexShrink: 0,
                   background: pitchHeight ? "rgba(40,58,92,.12)" : "transparent",
                   border: `1px solid ${pitchHeight ? "rgba(40,58,92,.5)" : "#d6c79f"}`,
                   color: pitchHeight ? "#283a5c" : "#9A8A70",
                   borderRadius: 3, padding: "1px 8px", cursor: "pointer",
                   fontFamily: "Georgia, serif", whiteSpace: "nowrap" }}
          title="Show chip height and text position scaled to solfege pitch">
          {pitchHeight ? "pitch height ✓" : "pitch height"}
        </button>
      </div>
      )}
      {!(compareMode && compareData) && lines.map((line, li) => {
        const roles = pointLine(line);
        const isFin = line.phrase === "Final";
        let fi = -1;
        return (
          <div key={li} id={`phrase-block-${li}`} style={{ background: playingLine === li ? "rgba(255,250,238,.9)" : "rgba(255,255,255,.5)", border: "1px solid #d6c79f", borderLeft: `5px solid ${playingLine === li ? "#7a2418" : gold}`, borderRadius: 8, padding: pitchHeight ? "1.4rem 0.9rem 0.7rem" : "0.7rem 0.9rem", marginBottom: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <span style={{ background: isFin ? "#7a2418" : "#283a5c", color: "#fff", borderRadius: 5, padding: "2px 10px", fontSize: "0.78rem" }}>{PNAME[line.phrase]}</span>
              <span style={{ fontSize: "0.76rem", color: "#6b5942", fontStyle: "italic" }}>
                reciting on <b>{PH[line.phrase].recite}</b>{PH[line.phrase].prep ? <> · prep on <b>ti</b></> : null}
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
                      <span key={si} onClick={editMode ? () => toggleAccent(li, myFi) : undefined}
                        style={{ position: "relative", display: "inline-flex", flexDirection: "column",
                                 alignItems: "center",
                                 justifyContent: pitchHeight ? "space-between" : "flex-end",
                                 height: pitchHeight ? chipH(r.pitches[0]) : undefined,
                                 overflow: "visible",
                                 padding: "3px 6px 2px", borderRadius: 6,
                                 cursor: editMode ? "pointer" : "default",
                                 background: roleBg[r.role],
                                 border: r.anchor ? "1px solid #7a2418" : "1px solid transparent",
                                 minWidth: "2em" }}>
                        {/* HEIGHT MODE: accent floats above chip border */}
                        {s.accent && pitchHeight && (
                          <span style={{ position: "absolute", top: "-1em", left: "50%",
                                         transform: "translateX(-50%)", color: "#7a2418",
                                         fontSize: "1.1rem", lineHeight: 1,
                                         pointerEvents: "none", userSelect: "none" }}>´</span>
                        )}
                        <span style={{ fontSize: "1.1rem", fontWeight: s.accent ? 600 : 400, position: "relative" }}>
                          {/* FLAT MODE: accent stays inline as before */}
                          {s.accent && !pitchHeight
                            ? <span style={{ position: "absolute", top: "-0.55em", left: "50%", transform: "translateX(-50%)", color: "#7a2418" }}>´</span>
                            : null}
                          {s.text}
                        </span>
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "0.72rem", color: roleColor[r.role] }}>{pis}</span>
                      </span>
                    );
                  })}
                  <span style={{ width: 7 }} />
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.6rem", flexWrap: "wrap" }}>
              <button style={btn} onClick={() => playLine(li)}>▶ Sing this line</button>
              {editMode && <button style={btn} onClick={() => setEditOpen((o) => ({ ...o, [li]: !o[li] }))}>edit syllables</button>}
            </div>
            {editMode && editOpen[li] && (
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
