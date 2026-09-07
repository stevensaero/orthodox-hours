// ─── TYPE METRICS FOR THE BULLETIN ──────────────────────────────────────────
//
// Full write-up of this subsystem, including the models that were tried and
// rejected: bulletin_layout_spec.md in the repo root.
//
// Advance widths for Georgia, measured from the browser at 1000px and stored as
// a fraction of the em, so they are size-independent. With them, line counts
// are not estimated from a character budget — they are computed by simulating
// the same greedy word wrap the browser performs.
//
// WHY NOT A CHARACTER BUDGET. Chars-per-line cannot tell "i" (0.293em) from "O"
// (0.744em), and the encoded corpus swings between both extremes. Calibrating a
// single chars-per-line figure against the real hymns and biasing it never to
// underestimate produced errors of up to SIX lines on a nine-line sticheron —
// a 66% overestimate, which would have wasted a third of every column.
//
// ACCURACY, measured against twelve real strings from the 6 September propers
// and readings — every troparion, kontakion, the aposticha doxasticon, the
// exapostilarion, and two Gospel passages — rendered in a browser at the
// sheet's true 3.43in measure:
//
//     10.5pt body     12 of 12 line counts predicted EXACTLY
//     11pt readings   12 of 12 line counts predicted EXACTLY
//
// The simulation deliberately ignores hyphenation. Hyphenation only ever fits
// MORE text on a line, so ignoring it can only ever predict the same number of
// lines or one too many — an error in the safe direction, toward more space
// rather than text off the page.
//
// RE-DERIVING THESE. Open any page in a browser and run:
//   const cv = document.createElement('canvas').getContext('2d');
//   cv.font = "1000px Georgia, 'Times New Roman', serif";
//   cv.measureText('O').width / 1000;
// Verify the font is not silently falling back to Times first: Georgia and
// Times give different widths for 'O' (0.7441 vs 0.7222).

const ADVANCE = {
  normal: {
    "0": 0.6138,
    "1": 0.4297,
    "2": 0.5586,
    "3": 0.5518,
    "4": 0.5649,
    "5": 0.5283,
    "6": 0.5659,
    "7": 0.5024,
    "8": 0.5962,
    "9": 0.5659,
    " ": 0.2412,
    "!": 0.3311,
    "\"": 0.4116,
    "#": 0.6431,
    "$": 0.6099,
    "%": 0.8174,
    "&": 0.7104,
    "'": 0.2153,
    "(": 0.375,
    ")": 0.375,
    "*": 0.4722,
    "+": 0.6431,
    ",": 0.2695,
    "-": 0.374,
    ".": 0.2695,
    "/": 0.4688,
    ":": 0.3125,
    ";": 0.3125,
    "<": 0.6431,
    "=": 0.6431,
    ">": 0.6431,
    "?": 0.4785,
    "@": 0.9287,
    "A": 0.6709,
    "B": 0.6538,
    "C": 0.6421,
    "D": 0.749,
    "E": 0.6533,
    "F": 0.5991,
    "G": 0.7251,
    "H": 0.8149,
    "I": 0.3896,
    "J": 0.5176,
    "K": 0.6943,
    "L": 0.6035,
    "M": 0.9272,
    "N": 0.7671,
    "O": 0.7441,
    "P": 0.6099,
    "Q": 0.7441,
    "R": 0.7017,
    "S": 0.561,
    "T": 0.6187,
    "U": 0.7563,
    "V": 0.6665,
    "W": 0.9756,
    "X": 0.7104,
    "Y": 0.6152,
    "Z": 0.6016,
    "[": 0.375,
    "\\": 0.4688,
    "]": 0.375,
    "^": 0.6431,
    "_": 0.6431,
    "`": 0.5,
    "a": 0.5039,
    "b": 0.5601,
    "c": 0.4541,
    "d": 0.5742,
    "e": 0.4834,
    "f": 0.3252,
    "g": 0.5093,
    "h": 0.582,
    "i": 0.293,
    "j": 0.292,
    "k": 0.5356,
    "l": 0.2861,
    "m": 0.8809,
    "n": 0.5908,
    "o": 0.5391,
    "p": 0.5713,
    "q": 0.5596,
    "r": 0.4097,
    "s": 0.4321,
    "t": 0.3452,
    "u": 0.5752,
    "v": 0.4966,
    "w": 0.7373,
    "x": 0.5049,
    "y": 0.4922,
    "z": 0.4438,
    "{": 0.4302,
    "|": 0.375,
    "}": 0.4302,
    "~": 0.6431,
    "‘": 0.2266,
    "’": 0.2266,
    "“": 0.4102,
    "”": 0.4102,
    "–": 0.6431,
    "—": 0.8569,
    "¶": 0.5,
    " ": 0.2412,
    "é": 0.4834,
    "ë": 0.4834,
    "ö": 0.5391,
  },
  italic: {
    "0": 0.6138,
    "1": 0.4297,
    "2": 0.5586,
    "3": 0.5518,
    "4": 0.5649,
    "5": 0.5283,
    "6": 0.5659,
    "7": 0.4966,
    "8": 0.5962,
    "9": 0.5659,
    " ": 0.2412,
    "!": 0.3311,
    "\"": 0.4116,
    "#": 0.6431,
    "$": 0.6099,
    "%": 0.8174,
    "&": 0.7104,
    "'": 0.2153,
    "(": 0.375,
    ")": 0.375,
    "*": 0.4722,
    "+": 0.6431,
    ",": 0.2695,
    "-": 0.374,
    ".": 0.2695,
    "/": 0.4688,
    ":": 0.3838,
    ";": 0.3838,
    "<": 0.6431,
    "=": 0.6431,
    ">": 0.6431,
    "?": 0.4785,
    "@": 0.9287,
    "A": 0.6709,
    "B": 0.6538,
    "C": 0.6421,
    "D": 0.749,
    "E": 0.6533,
    "F": 0.5991,
    "G": 0.7251,
    "H": 0.8149,
    "I": 0.3896,
    "J": 0.5176,
    "K": 0.6943,
    "L": 0.6035,
    "M": 0.9272,
    "N": 0.7671,
    "O": 0.7305,
    "P": 0.6099,
    "Q": 0.7305,
    "R": 0.7017,
    "S": 0.561,
    "T": 0.6187,
    "U": 0.7563,
    "V": 0.6665,
    "W": 0.9756,
    "X": 0.7104,
    "Y": 0.6152,
    "Z": 0.6016,
    "[": 0.375,
    "\\": 0.4688,
    "]": 0.375,
    "^": 0.6431,
    "_": 0.6431,
    "`": 0.5,
    "a": 0.5728,
    "b": 0.5537,
    "c": 0.4536,
    "d": 0.5752,
    "e": 0.4717,
    "f": 0.3286,
    "g": 0.5728,
    "h": 0.5625,
    "i": 0.2974,
    "j": 0.291,
    "k": 0.5278,
    "l": 0.2852,
    "m": 0.8794,
    "n": 0.5898,
    "o": 0.5371,
    "p": 0.5781,
    "q": 0.5552,
    "r": 0.4614,
    "s": 0.4312,
    "t": 0.3472,
    "u": 0.5752,
    "v": 0.5381,
    "w": 0.8223,
    "x": 0.501,
    "y": 0.5596,
    "z": 0.4438,
    "{": 0.4302,
    "|": 0.375,
    "}": 0.4302,
    "~": 0.6431,
    "‘": 0.1953,
    "’": 0.1953,
    "“": 0.3857,
    "”": 0.3857,
    "–": 0.6431,
    "—": 0.8569,
    "¶": 0.5,
    " ": 0.2412,
    "é": 0.4717,
    "ë": 0.4717,
    "ö": 0.5371,
  },
};

// Anything outside the table — an unexpected glyph in a saint's name, say —
// falls back to a lowercase "n", which sits mid-range for this face. Erring
// mid-range rather than narrow keeps the estimate from running short.
const FALLBACK = 0.5908;

// Sentinels bracketing a verse number in a lection's text. Control characters,
// so they cannot collide with scripture, and zero width so they cost the line
// nothing. The digits between them are still measured at body size even though
// they render as a 7.5pt superscript — an overstatement of roughly 0.4em per
// verse, which errs toward predicting more lines rather than fewer.
export const VERSE_OPEN = "\u0001";
export const VERSE_CLOSE = "\u0002";
const ZERO_WIDTH = new Set([VERSE_OPEN, VERSE_CLOSE]);

/** Width of a string in ems. */
export function widthEm(text, italic = false) {
  const table = italic ? ADVANCE.italic : ADVANCE.normal;
  let total = 0;
  for (const ch of String(text)) {
    if (ZERO_WIDTH.has(ch)) continue;
    total += table[ch] ?? FALLBACK;
  }
  return total;
}

/**
 * Break a string into lines the way the browser will, by simulating greedy word
 * wrap. Returns the actual lines, so a caller that has to split a passage
 * across a column can slice at a real line boundary rather than guess at one.
 *
 * @param text        the string
 * @param fontPt      type size in points
 * @param usableIn    column width in inches
 * @param italic      italic face
 */
export function wrapText(text, fontPt, usableIn, italic = false) {
  const words = String(text).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [""];

  const emPerIn = fontPt / 72;          // points to inches, 1em = the font size
  const usableEm = usableIn / emPerIn;  // column width expressed in ems
  const space = widthEm(" ", italic);

  const lines = [];
  let current = [];
  let cursor = 0;
  for (const word of words) {
    const w = widthEm(word, italic);
    if (!current.length) { current = [word]; cursor = w; continue; }
    if (cursor + space + w <= usableEm) { current.push(word); cursor += space + w; }
    else { lines.push(current.join(" ")); current = [word]; cursor = w; }
  }
  if (current.length) lines.push(current.join(" "));
  return lines;
}

/** Line count only. */
export function wrapLines(text, fontPt, usableIn, italic = false) {
  return wrapText(text, fontPt, usableIn, italic).length;
}

// ─── STYLES ─────────────────────────────────────────────────────────────────
//
// One entry per class in src/lib/bulletin-css.js. These MUST track that file:
// tools/test_bulletin_layout.mjs fails if a size or leading here disagrees with
// the stylesheet, because a layout budget computed from stale numbers is worse
// than no budget at all — it is confidently wrong.
//
// spaceBefore / spaceAfter are the CSS margins in points. keepWithNext marks a
// heading, which must never be the last thing in a column.
export const STYLES = {
  heading:      { pt: 10,   leading: 1.25, spaceBefore: 12, spaceAfter: 4,  keepWithNext: true,  caps: true },
  commemoration:{ pt: 13,   leading: 1.32, spaceBefore: 0,  spaceAfter: 3 },
  commemoration2:{ pt: 11,  leading: 1.3,  spaceBefore: 0,  spaceAfter: 0,  italic: true },
  slotLabel:    { pt: 9.5,  leading: 1.2,  spaceBefore: 4,  spaceAfter: 2,  keepWithNext: true,  caps: true },
  readingRef:   { pt: 11,   leading: 1.25, spaceBefore: 0,  spaceAfter: 0 },
  readingOf:    { pt: 9,    leading: 1.2,  spaceBefore: 0,  spaceAfter: 3,  italic: true },
  cite:         { pt: 9,    leading: 1.4,  spaceBefore: 5,  spaceAfter: 0,  italic: true },
  hymnLabel:    { pt: 9.5,  leading: 1.2,  spaceBefore: 0,  spaceAfter: 1,  keepWithNext: true },
  hymnText:     { pt: 10.5, leading: 1.42, spaceBefore: 0,  spaceAfter: 8 },
  lectionRef:   { pt: 10,   leading: 1.2,  spaceBefore: 0,  spaceAfter: 2,  keepWithNext: true,  caps: true },
  lectionIntro: { pt: 10,   leading: 1.3,  spaceBefore: 0,  spaceAfter: 3,  italic: true },
  lectionBody:  { pt: 11,   leading: 1.5,  spaceBefore: 0,  spaceAfter: 12 },
  continuation: { pt: 9,    leading: 1.3,  spaceBefore: 3,  spaceAfter: 0,  italic: true },
};

// Uppercased text is wider than the string suggests, and several styles are set
// in caps. Measure what will actually be drawn.
export function renderedText(text, style) {
  return style.caps ? String(text).toUpperCase() : String(text);
}

/**
 * Height in points of a run of text in a given style, at a column width.
 *
 * `textPt` is the type only; `spaceBefore` and `spaceAfter` are returned
 * SEPARATELY rather than folded into a total, because CSS vertical margins
 * COLLAPSE — the gap between two blocks is the larger of the two margins, not
 * their sum. Adding them cost about 14% of a column and pushed 6 September onto
 * a second page it did not need.
 */
export function blockHeightPt(text, styleKey, usableIn) {
  const style = STYLES[styleKey];
  if (!style) throw new Error(`bulletin-metrics: unknown style "${styleKey}"`);
  const lines = wrapLines(renderedText(text, style), style.pt, usableIn, !!style.italic);
  return {
    lines,
    linePt: style.pt * style.leading,
    textPt: lines * style.pt * style.leading,
    totalPt: style.spaceBefore + lines * style.pt * style.leading + style.spaceAfter,
  };
}
