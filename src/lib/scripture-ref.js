// ─── SCRIPTURE REFERENCE RESOLUTION ─────────────────────────────────────────
//
// One book map and one parser, shared by hours-tool.jsx (which builds links and
// handoff payloads) and scripture.jsx (which renders the text).
//
// WHY THIS MODULE EXISTS. These lived as two independent copies — hours-tool's
// SCRIPTURE_BOOK_ID and scripture.jsx's LECTIONARY_BOOK_ID — and they drifted.
// hours-tool knew the abbreviations "Is", "Ex", "Judg" and "Jdt"; scripture.jsx
// did not. The tool therefore built a working-looking link that the viewer then
// silently refused to render, for about a fifth of the encoded paroemias. Two
// maps for one job will always drift; one map cannot.
//
// Everything here is pure — no React, no DOM — so tools/test_ref_resolution.mjs
// can import it directly and run the whole encoded corpus through the real
// functions rather than a reimplementation.

// ─── BOOK NAMES → JSON FILE IDS ─────────────────────────────────────────────
//
// Keys are every spelling that appears in encoded data: the LECTIONARY tables,
// feast_e / feast_g, and the paroemia annotations. Values are the `id` field of
// the corresponding public/bible/*.json file.
//
// ON THE TWO KINGS CONVENTIONS — read before adding anything here.
// Slavonic and English number these four books differently:
//
//     Slavonic / LXX          English            file
//     1 Kingdoms              1 Samuel           1Sam
//     2 Kingdoms              2 Samuel           2Sam
//     3 Kingdoms              1 Kings            3Kgdm
//     4 Kingdoms              2 Kings            4Kgdm
//
// Both conventions are present below, and they collide: "1 Kings" (English)
// resolves to 3Kgdm, while "First Kings" (Slavonic, as the Menaion encoder used
// it) resolves to 1Sam — three books apart. That is deliberate, and it is safe
// only because each spelling is unambiguous about which convention it belongs
// to. The evidence for the Slavonic reading is in the data itself: a paroemia
// encoded as "First Kings (1 Samuel) — Hannah prays at Shiloh and conceives
// Samuel (First Kings 1:9-20)" — Hannah at Shiloh is 1 Samuel 1:9-20.
//
// Neither "1 Kings" nor "2 Kings" is currently used anywhere in encoded data,
// so the collision is latent rather than live. If you encode one of these
// books, prefer the unambiguous forms: "1 Samuel", "3 Kgdms".
export const BOOK_ID = {
  // ── New Testament ──
  "Matthew": "Matt", "Matt": "Matt",
  "Mark": "Mark", "Luke": "Luke", "John": "John",
  "Acts": "Acts", "Acts of the Apostles": "Acts",
  "Romans": "Rom", "Colossians": "Col", "Ephesians": "Eph",
  "Galatians": "Gal", "Philippians": "Phil", "Hebrews": "Heb",
  "1 Corinthians": "1Cor", "First Corinthians": "1Cor",
  "2 Corinthians": "2Cor", "Second Corinthians": "2Cor",
  "1 Thessalonians": "1Thes", "First Thessalonians": "1Thes",
  "2 Thessalonians": "2Thes", "Second Thessalonians": "2Thes",
  "1 Timothy": "1Tim", "First Timothy": "1Tim",
  "2 Timothy": "2Tim", "Second Timothy": "2Tim",
  "Titus": "Tit", "Philemon": "Phlm",
  "1 Peter": "1Pet", "First Peter": "1Pet",
  "2 Peter": "2Pet", "Second Peter": "2Pet",
  "James": "Jas", "Jude": "Jude",
  "1 John": "1John", "First John": "1John",
  "First Epistle of John": "1John",
  "2 John": "2John", "Second John": "2John",
  "3 John": "3John", "Third John": "3John",
  "Revelation": "Rev",

  // ── Old Testament ──
  "Genesis": "Gen", "Gen": "Gen",
  "Exodus": "Ex", "Exod": "Ex", "Ex": "Ex",
  "Leviticus": "Lev", "Lev": "Lev",
  "Numbers": "Num", "Num": "Num",
  "Deuteronomy": "Deut", "Deut": "Deut",
  "Joshua": "Josh", "Josh": "Josh",
  "Judges": "Judg", "Judg": "Judg",
  "Ruth": "Ruth",

  // Kingdoms — see the convention note above.
  "1 Samuel": "1Sam", "1 Kgdms": "1Sam", "First Kings": "1Sam",
  "First Book of Kings": "1Sam", "1 Kingdoms": "1Sam",
  "2 Samuel": "2Sam", "2 Kgdms": "2Sam", "Second Kings": "2Sam",
  "Second Book of Kings": "2Sam", "2 Kingdoms": "2Sam",
  "3 Kgdms": "3Kgdm", "3 Kings": "3Kgdm", "Third Kings": "3Kgdm",
  "Third Book of Kings": "3Kgdm", "3 Kingdoms": "3Kgdm",
  "4 Kgdms": "4Kgdm", "4 Kings": "4Kgdm", "Fourth Kings": "4Kgdm",
  "Fourth Book of Kings": "4Kgdm", "4 Kingdoms": "4Kgdm",
  // English convention — unused in encoded data, retained for inbound refs.
  "1 Kings": "3Kgdm", "2 Kings": "4Kgdm",

  "1 Chronicles": "1Chr", "2 Chronicles": "2Chr",
  "Ezra": "Ezra", "Nehemiah": "Neh", "Neh": "Neh",
  "Tobit": "Tob", "Tob": "Tob",
  "Judith": "Jdt", "Jdt": "Jdt",
  "Job": "Job",
  "Proverbs": "Prov", "Prov": "Prov",
  "Ecclesiastes": "Eccl", "Eccl": "Eccl",
  "Song of Songs": "Song", "Song of Solomon": "Song",
  "Wisdom": "Wis", "Wis": "Wis", "Wisdom of Solomon": "Wis",
  "Sirach": "Sir", "Sir": "Sir",
  "Baruch": "Bar", "Bar": "Bar",
  "Isaiah": "Isa", "Isa": "Isa", "Is": "Isa",
  "Jeremiah": "Jer", "Jer": "Jer",
  "Lamentations": "Lam",
  "Ezekiel": "Ezek", "Ezek": "Ezek",
  "Daniel": "Dan", "Dan": "Dan",
  "Hosea": "Hos", "Joel": "Joel", "Amos": "Amos",
  "Obadiah": "Obad", "Jonah": "Jon", "Micah": "Mic",
  "Nahum": "Nah", "Habakkuk": "Hab",
  "Zephaniah": "Zeph", "Haggai": "Hag",
  "Zechariah": "Zech", "Malachi": "Mal",
  "Psalms": "Ps", "Psalm": "Ps", "Ps": "Ps",
};

// Books of a single chapter, where the encoded ref may omit it entirely:
// "Jude 1-10" means Jude 1:1-10, not chapter 1 through chapter 10.
const SINGLE_CHAPTER_BOOKS = new Set([
  "Jude", "Phlm", "2John", "3John", "Obad", "PrMan", "LJe", "Bel", "Sus",
]);

// LXX versification: some books differ from Hebrew chapter/verse numbering.
// Paroemia refs use Hebrew numbering; the Brenton LXX JSON uses LXX numbering.
const LXX_REMAP = {
  // Malachi: Hebrew ch4 = LXX ch3 (LXX Malachi has only 3 chapters).
  // Mal 4:1-6 (Heb) = Mal 3:19-24 (LXX/Brenton).
  Mal: { 4: { chapter: 3, verseOffset: 18 } },
};

function remapVerses(bookId, chapter, verseStart, verseEnd) {
  const remap = LXX_REMAP[bookId]?.[chapter];
  if (!remap) return { chapter, verseStart, verseEnd };
  return {
    chapter: remap.chapter,
    verseStart: verseStart + remap.verseOffset,
    verseEnd: verseEnd + remap.verseOffset,
  };
}

// ─── REF STRING CLEANING ────────────────────────────────────────────────────
//
// Encoded refs carry editorial matter the parser must not see. Three shapes,
// all present in the corpus:
//
//   "Philippians 2:5-11 (§240) — of the feast, repeated at its Leavetaking"
//   "1 Corinthians 13:11-14:5, midpoint (§154 midpoint)"
//   "Judges 4:1-5:31, excerpted"
//   "Wisdom of Solomon 5:15ff"
//
// Stripping only a TRAILING parenthetical — which is what the previous parser
// did — handles the second of those and none of the others.
//
// The rules are applied in a loop until the string stops changing, because
// removing one kind of tail routinely exposes another. "Philippians 2:5-11
// (§240) — of the feast, repeated at its Leavetaking" needs the dash annotation
// gone before its parenthetical is trailing, and a single pass leaves "(§240)"
// stuck on the end.
//
// The comma rule is deliberately shape-based rather than a word list: a final
// comma group containing no digits is prose, never a verse range. That covers
// ", excerpted", ", midpoint" and ", as printed" without anyone having to
// predict the next annotation someone writes.
const CLEAN_RULES = [
  /\s*\([^)]*\)\s*$/,        // trailing parenthetical: "(§240)", "(Jacob's ladder)"
  /\s*[—–]\s+\S.*$/,         // em/en-dash annotation — never a range, which has no space
  /\s*\.\s+[A-Z].*$/,        // a following sentence: ". The PDF prints only…"
  /,\s*[^,\d]*$/,            // final comma group with no digits in it
  /[\s,;.]+$/,               // dangling punctuation
];

// NOT cleaned, deliberately: "ff" ("and following"). It names no endpoint, so
// any span the parser produced from it would be invented. A ref containing it
// fails to match a segment pattern, lands in `unparsed`, and is rejected under
// { strict: true } — which is what tools/test_ref_resolution.mjs runs. Encode
// the explicit range instead. Two paroemias read "Wisdom 5:15ff" against 23
// places encoding the same lesson as "5:15-6:3"; they were normalised rather
// than accommodated here.

function cleanRef(refStr) {
  let s = String(refStr).trim();
  let previous;
  do {
    previous = s;
    for (const rule of CLEAN_RULES) s = s.replace(rule, "");
    s = s.trim();
  } while (s !== previous);
  return s;
}

// ─── SEGMENT PARSER ─────────────────────────────────────────────────────────
//
// Walks the comma/semicolon groups of a reference carrying a "current chapter",
// so a chapter boundary can be crossed anywhere in the list rather than only
// when the whole string is one span.
//
// HISTORY: the previous implementation special-cased "C:V-C:V" against the
// ENTIRE string (/^(\d+):(\d+)-(\d+):(\d+)$/) and, inside a comma list, could
// only handle a segment shaped "C:V-V" or "V-V". A cross span in a list was
// dropped with no warning. Four encoded lectionary refs were affected, and the
// failure was invisible because the surviving spans still rendered:
//
//   "Acts 6:8-7:5, 47-60"       rendered as Acts 6:47-60  (Stephen's pericope
//                                lost its opening — the arrest and the trial)
//   "Luke 22:39-42, 45-23:1"    rendered as Luke 22:39-42
//   "Galatians 1:1-10, 20-2:5"  rendered as Gal 1:1-10
//   "Mark 5:22-24, 35-6:1"      rendered as Mark 5:22-24
//
// Grammar accepted per comma group, where C is a chapter and V a verse:
//     C:V-C:V   cross-chapter range, sets the current chapter to the end chapter
//     C:V-V     range within C, sets the current chapter to C
//     C:V       single verse in C, sets the current chapter to C
//     V-C:V     cross range from the current chapter, sets it to the end chapter
//     V-V       range within the current chapter
//     V         single verse in the current chapter
function parseGroup(bookId, bookName, group, state) {
  const spans = [];
  for (const raw of group.split(/,\s*/)) {
    const part = raw.trim();
    if (!part) continue;

    let m;

    // C:V-C:V — cross-chapter
    if ((m = part.match(/^(\d+):(\d+)\s*[-–]\s*(\d+):(\d+)$/))) {
      state.chapter = parseInt(m[3], 10);
      spans.push({
        book: bookId, bookName,
        chapterStart: parseInt(m[1], 10), verseStart: parseInt(m[2], 10),
        chapterEnd: parseInt(m[3], 10), verseEnd: parseInt(m[4], 10),
      });
      continue;
    }

    // V-C:V — cross-chapter continuing from the current chapter
    if ((m = part.match(/^(\d+)\s*[-–]\s*(\d+):(\d+)$/)) && state.chapter != null) {
      const from = state.chapter;
      state.chapter = parseInt(m[2], 10);
      spans.push({
        book: bookId, bookName,
        chapterStart: from, verseStart: parseInt(m[1], 10),
        chapterEnd: parseInt(m[2], 10), verseEnd: parseInt(m[3], 10),
      });
      continue;
    }

    // C:V-V or C:V — within one chapter
    if ((m = part.match(/^(\d+):(\d+)(?:\s*[-–]\s*(\d+))?$/))) {
      const chapter = parseInt(m[1], 10);
      state.chapter = chapter;
      spans.push(sameChapter(bookId, bookName, chapter,
        parseInt(m[2], 10), m[3] ? parseInt(m[3], 10) : parseInt(m[2], 10)));
      continue;
    }

    // V-V or V — continuing in the current chapter
    if ((m = part.match(/^(\d+)(?:\s*[-–]\s*(\d+))?$/)) && state.chapter != null) {
      spans.push(sameChapter(bookId, bookName, state.chapter,
        parseInt(m[1], 10), m[2] ? parseInt(m[2], 10) : parseInt(m[1], 10)));
      continue;
    }

    // Anything else is malformed. Record it so callers can surface a real
    // failure rather than quietly returning a shorter reading.
    state.unparsed.push(part);
  }
  return spans;
}

function sameChapter(bookId, bookName, chapter, verseStart, verseEnd) {
  const rv = remapVerses(bookId, chapter, verseStart, verseEnd);
  const remapped = rv.chapter !== chapter || rv.verseStart !== verseStart;
  return {
    book: bookId, bookName,
    chapter: rv.chapter, verseStart: rv.verseStart, verseEnd: rv.verseEnd,
    ...(remapped
      ? { origChapter: chapter, origVerseStart: verseStart, origVerseEnd: verseEnd }
      : {}),
  };
}

// Longest-match book name lookup. Tried longest-first so "Wisdom of Solomon"
// wins over "Wisdom", and "Acts of the Apostles" over "Acts".
const BOOK_NAMES_BY_LENGTH = Object.keys(BOOK_ID)
  .sort((a, b) => b.length - a.length);

export function splitBookAndRest(cleaned) {
  for (const name of BOOK_NAMES_BY_LENGTH) {
    if (cleaned.length > name.length &&
        cleaned.slice(0, name.length) === name &&
        /[\s]/.test(cleaned[name.length])) {
      return { bookName: name, bookId: BOOK_ID[name], rest: cleaned.slice(name.length).trim() };
    }
  }
  return null;
}

/**
 * Parse a reference string into an array of span objects, or null.
 *
 * Two span shapes are returned, and callers must handle both:
 *   same chapter  { book, bookName, chapter, verseStart, verseEnd }
 *   cross chapter { book, bookName, chapterStart, verseStart, chapterEnd, verseEnd }
 *
 * Pass { strict: true } to get null when any segment failed to parse, rather
 * than a partial result. The renderer wants the partial (show what we have);
 * the corpus test wants the failure.
 */
export function parseRefString(refStr, { strict = false } = {}) {
  if (!refStr) return null;
  const cleaned = cleanRef(refStr);
  if (!cleaned) return null;

  const split = splitBookAndRest(cleaned);
  if (!split) return null;
  const { bookName, bookId, rest } = split;

  const state = { chapter: null, unparsed: [] };

  // A single-chapter book may omit the chapter: "Jude 1-10" is Jude 1:1-10.
  if (SINGLE_CHAPTER_BOOKS.has(bookId) && !rest.includes(":")) {
    state.chapter = 1;
  }

  const spans = [];
  for (const group of rest.split(/;\s*/)) {
    spans.push(...parseGroup(bookId, bookName, group.trim(), state));
  }

  if (strict && state.unparsed.length) return null;
  return spans.length ? spans : null;
}

/** Human label for one span, e.g. "Hebrews 10:35–11:7". */
export function spanLabel(span) {
  if (span.chapterStart !== undefined) {
    return `${span.bookName} ${span.chapterStart}:${span.verseStart}–${span.chapterEnd}:${span.verseEnd}`;
  }
  const lxx = `${span.bookName} ${span.chapter}:${span.verseStart}–${span.verseEnd}`;
  if (span.origChapter !== undefined) {
    const heb = `${span.bookName} ${span.origChapter}:${span.origVerseStart}–${span.origVerseEnd}`;
    return `${lxx} (${heb})`;
  }
  return lxx;
}

// ─── PAROEMIA ANNOTATIONS ───────────────────────────────────────────────────
//
// A paroemia field carries a typological annotation alongside its reference,
// in one of two layouts:
//
//   ref first  "Genesis 28:10-17 (Jacob's ladder)"
//              "Isaiah 40:1-8, 10-11 — Comfort ye my people"
//   ref last   "Proverbs — “God by wisdom founded the earth” (Proverbs 3:19-34).
//               The PDF prints only the bare heading…"
//              "3 Kingdoms — Solomon's prayer at the dedication (3 Kgdms 8:22-30)"
//
// Three bugs lived in the previous extractor, all of which failed silently:
//   1. the ref-first pattern ran to "—" or end of string, so it swallowed a
//      following " (annotation" and produced an unbalanced fragment;
//   2. the ref-last pattern only examined a parenthetical at the very END of
//      the string, so any annotation followed by prose was missed;
//   3. that pattern also required the book name to begin with a letter, so
//      "3 Kgdms 8:22-30" and "First Kings 1:9-20" were rejected.
/**
 * Locate the reference inside a paroemia annotation.
 *
 * Returns { ref, start, end } — the resolved reference plus the character range
 * it occupies in the original string — or null. The range is what lets the
 * Vespers view underline only the citation and leave the surrounding sentence
 * as plain text.
 */
export function paroemiaRefSpan(paroemia) {
  if (!paroemia) return null;
  const text = String(paroemia);

  // Layout 1 — the field opens with the reference. Stop at an em/en dash or an
  // opening parenthesis, whichever comes first, so a following annotation is
  // never absorbed into the reference.
  const lead = text.length - text.trimStart().length;
  const boundary = text.search(/\s+[—–]\s+|\s+\(/);
  const head = (boundary === -1 ? text : text.slice(0, boundary)).trim();
  const fromHead = head ? splitBookAndRest(head) : null;
  if (fromHead && /\d/.test(fromHead.rest) && parseRefString(head)) {
    return { ref: cleanRef(head), start: lead, end: lead + head.length };
  }

  // Layout 2 — the reference sits inside a parenthetical, which is not
  // necessarily the last one and not necessarily at the end of the string.
  // Take the last parenthetical that actually resolves: "(1 Samuel)" and
  // "(= First Kings in the Hebrew numbering)" carry no chapter:verse and are
  // skipped, and "(Proverbs 3:19-34). The PDF prints only…" is found even
  // though prose follows it.
  const parens = [...text.matchAll(/\(([^)]*)\)/g)];
  for (let i = parens.length - 1; i >= 0; i--) {
    const m = parens[i];
    const first = m[1].split(/;/)[0].trim();
    if (!/\d+\s*:\s*\d+/.test(first)) continue;
    if (parseRefString(first)) {
      return { ref: cleanRef(first), start: m.index, end: m.index + m[0].length };
    }
  }

  return null;
}

/** The reference inside a paroemia annotation, or null. */
export function paroemiaToRef(paroemia) {
  const found = paroemiaRefSpan(paroemia);
  return found ? found.ref : null;
}
