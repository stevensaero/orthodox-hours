// ── SYLLABIFICATION + BRACKET-PARSE LAYER (extracted from tone-trainer.jsx) ───
// Pure text→sylls and director-mark parsing. No React, no component state; the
// lexicon is always passed as an argument. Extracted (Pass 2) so the component
// AND tools/test_pointing_paths.mjs share the SAME implementation — retiring the
// replicated copy that previously had to be hand-synced.
//
// Layered: syllabifyRules / lookupWord / syllabifyWithSource / wordFromDisplay
// (text→sylls), then bracketSpanToSyllIdx / syllabifyWithDirectorMark /
// parseBracketWord (director-mark → which syllable carries the accent).
// syllabifyWithDirectorMark is the shared core of BOTH pointing paths (bracket
// textarea + docx underline); the underline path in the component imports it too.

export function syllabifyRules(word) {
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

export const STOP = new Set(
  ("the a an of to and in on for with is am are be by at from as us him her them we i you " +
   "he she it our your his my thy thine that this whose whom who which but or nor so yet o").split(/\s+/)
);

// Heuristic stress fallback — only used for words not in the lexicon.
export function guessStressHeuristic(wordDisplay, sylls, idx) {
  const lw = wordDisplay.toLowerCase().replace(/[^a-z]/g, "");
  if (sylls.length === 1) return idx === 0 ? !STOP.has(lw) : false;
  return idx === 0;
}

// lookupWord: returns {sylls, stressIdx, src, confirmed} or null.
// lexicon is the merged table+residue object passed from component state.
export function lookupWord(word, lexicon) {
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
export function syllabifyWithSource(wordDisplay, lexicon) {
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
export function wordFromDisplay(wordDisplay, lexicon) {
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

export function bracketSpanToSyllIdx(core, bracketStart, bracketEnd, sylls) {
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
// syllabifyWithDirectorMark — shared core of both pointing paths.
//
// Both paths reduce to the same question:
//   "Given a word core and a marked span (start..end char offsets), what are
//    the syllables and which one carries the accent?"
//
// The bracket path derives markStart/markEnd from [ ] positions.
// The underline path derives markStart/markEnd from firstUl/lastUl positions.
// Both call this function with those offsets.
//
// Rules (same as both callers previously implemented independently):
//   1. If prefix (chars before mark) or suffix (chars after mark) is non-empty:
//      syllables = [prefix, marked, suffix].filter(Boolean), accent on marked.
//      → director's notation directly encodes the split, no lexicon needed.
//   2. If whole word marked (no prefix, no suffix):
//      syllables from lexicon, accent on lexicon stressIdx.
//   3. If mark at word start with no prefix but suffix exists:
//      covered by rule 1 (suffix non-empty).
//   4. Fallback — mark at word start, no suffix (shouldn't occur in practice):
//      use bracketSpanToSyllIdx on lexicon/rule sylls.
//
// Returns { sylls: string[], accentIdx: number }
export function syllabifyWithDirectorMark(core, markStart, markEnd, lexicon) {
  const entry   = lookupWord(core, lexicon);
  const rawSylls = entry ? entry.sylls : syllabifyRules(core);
  const stressIdx = entry ? (entry.stressIdx ?? 0) : 0;

  const clampedStart = Math.max(0, markStart);
  const clampedEnd   = Math.min(core.length - 1, markEnd);

  const prefix    = core.slice(0, clampedStart);
  const marked    = core.slice(clampedStart, clampedEnd + 1);
  const suffix    = core.slice(clampedEnd + 1);
  const hasPrefix = prefix.length > 0;
  const hasSuffix = suffix.length > 0;
  const wholeWord = !hasPrefix && !hasSuffix;

  if (wholeWord) {
    // Whole word marked — lexicon knows best stress position.
    return { sylls: rawSylls, accentIdx: stressIdx };
  }

  if (hasPrefix || hasSuffix) {
    // Mid-word bracket. Use lexicon syllables when available — the director
    // mark boundary tells us WHICH syllable is accented, not where to split.
    // bracketSpanToSyllIdx maps the bracket character span to a syllable index.
    if (rawSylls.length > 1) {
      const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);
      return { sylls: rawSylls, accentIdx: Math.max(0, idx) };
    }
    // No lexicon entry and rule-based gave 1 syllable — fall back to character split.
    const dirSylls = [prefix, marked, suffix].filter(s => s.length > 0);
    const accentIdx = hasPrefix ? 1 : 0;
    return { sylls: dirSylls, accentIdx };
  }

  // Fallback: mark at word start with no suffix — nucleus mapping on lexicon sylls.
  const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);
  return { sylls: rawSylls, accentIdx: Math.max(0, idx) };
}

export function parseBracketWord(token, lexicon) {
  const hasBracket = /\[/.test(token);
  if (!hasBracket) {
    return { cleanWord: token, accentIdx: -1, bracketType: "none" };
  }

  // Strip brackets, recording span positions in the clean string.
  // e.g. "up[on]" → clean="upon", bracketStart=2, bracketEnd=3
  let clean = "", bracketStart = -1, bracketEnd = -1, inBracket = false;
  for (let i = 0; i < token.length; i++) {
    if (token[i] === "[") { inBracket = true; bracketStart = clean.length; continue; }
    if (token[i] === "]") { inBracket = false; bracketEnd = clean.length - 1; continue; }
    clean += token[i];
  }

  // Extract alpha core (strips leading/trailing punctuation).
  const alphaMatch = clean.match(/[A-Za-z''-]+/);
  if (!alphaMatch) return { cleanWord: token.replace(/[\[\]]/g, ""), accentIdx: -1, bracketType: "none" };
  const core = alphaMatch[0];
  const coreOffset = alphaMatch.index;

  // Adjust bracket positions relative to the alpha core, then delegate.
  const adjStart = bracketStart - coreOffset;
  const adjEnd   = bracketEnd   - coreOffset;
  const wholeWord = adjStart <= 0 && adjEnd >= core.length - 1;

  const { sylls, accentIdx } = syllabifyWithDirectorMark(core, adjStart, adjEnd, lexicon);

  return {
    cleanWord: clean,
    accentIdx,
    bracketType: wholeWord ? "whole" : "mid",
    sylls,
  };
}
