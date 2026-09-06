// ─── PASSAGE TEXT ───────────────────────────────────────────────────────────
//
// Turns the spans produced by scripture-ref.js into actual verses, and verses
// into a string. Headless: no React, no DOM, so the bulletin generator, the
// Scripture viewer and the corpus test all draw the same text from one place.
//
// WHY THIS EXISTS. Passage text used to come into being only inside JSX, in
// ReadingView's render. There was no way to ask "what does this reference
// actually say" outside a React tree, which is what a printable bulletin needs.
//
// THE GAP REPORT IS THE POINT. spansToVerses returns `missing` alongside
// `verses`, and callers that print rather than browse are expected to check it.
// The whole class of defect repaired in v0.44.1 and v0.44.2 was a reading that
// came out SHORTER than the one appointed, with nothing thrown and nothing
// logged. A renderer that quietly skips an absent chapter repeats exactly that.
// Browsing can degrade; print must not.

/**
 * Flatten spans into an ordered verse list against loaded book data.
 *
 * @param spans  array from parseRefString — both span shapes are accepted:
 *               { book, chapter, verseStart, verseEnd } and
 *               { book, chapterStart, verseStart, chapterEnd, verseEnd }
 * @param books  { [bookId]: bookData } as shipped in public/bible/*.json
 * @returns {{ verses: Array, missing: Array }}
 *   verses  [{ book, bookName, chapter, verse, text, startsChapter, startsSpan }]
 *   missing [{ book, chapter, reason, ... }] — anything the data could not supply
 */
export function spansToVerses(spans, books) {
  const verses = [];
  const missing = [];
  if (!spans || !spans.length) return { verses, missing };

  for (const span of spans) {
    const bookData = books && books[span.book];
    if (!bookData) {
      missing.push({ book: span.book, reason: "book not loaded" });
      continue;
    }

    const cross = span.chapterStart !== undefined;
    const first = cross ? span.chapterStart : span.chapter;
    const last = cross ? span.chapterEnd : span.chapter;
    let startedSpan = false;

    for (let chapter = first; chapter <= last; chapter++) {
      const chapterData = bookData.chapters?.find((c) => c.chapter === chapter);
      if (!chapterData) {
        missing.push({ book: span.book, chapter, reason: "chapter not in data" });
        continue;
      }

      // A middle chapter of a cross-chapter span runs end to end.
      const from = chapter === first ? span.verseStart : 1;
      const to = chapter === last ? span.verseEnd : Infinity;

      const picked = chapterData.verses.filter(
        (v) => v.verse >= from && v.verse <= to,
      );

      if (!picked.length) {
        missing.push({
          book: span.book, chapter, reason: "no verses in range",
          verseStart: from, verseEnd: to === Infinity ? null : to,
        });
        continue;
      }

      // A requested verse that does not exist is a real gap, not a rounding
      // error: "Matthew 22:1-14" against a chapter holding 12 verses means the
      // reference and the data disagree, and a bulletin must not print the
      // short version as though it were whole.
      if (picked[0].verse !== from) {
        missing.push({
          book: span.book, chapter, reason: "range starts after the requested verse",
          requested: from, found: picked[0].verse,
        });
      }
      if (to !== Infinity && picked[picked.length - 1].verse !== to) {
        missing.push({
          book: span.book, chapter, reason: "range ends before the requested verse",
          requested: to, found: picked[picked.length - 1].verse,
        });
      }

      picked.forEach((v, i) => {
        verses.push({
          book: span.book,
          bookName: span.bookName || span.book,
          chapter,
          verse: v.verse,
          text: v.text,
          startsChapter: i === 0 && chapter !== first,
          startsSpan: i === 0 && !startedSpan,
        });
        if (i === 0) startedSpan = true;
      });
    }
  }

  return { verses, missing };
}

/**
 * Render spans as a string.
 *
 * @param options.verseNumbers  prefix each verse with its number. Default true.
 * @param options.continuous    run verses together as one paragraph rather than
 *                              one per line. This is the setting a reading is
 *                              chanted from: chapter boundaries dissolve, and
 *                              "2 Corinthians 1:21-2:4" reads as the single
 *                              pericope it is. Default false.
 * @param options.chapterMarker inserted where a chapter changes in continuous
 *                              mode, so the break is visible without becoming a
 *                              heading. Default "¶". Pass "" to suppress.
 * @param options.strict        throw if any verse is missing, rather than
 *                              returning a short passage. Use when printing.
 */
export function spansToText(spans, books, options = {}) {
  const {
    verseNumbers = true,
    continuous = false,
    chapterMarker = "¶",
    strict = false,
  } = options;

  const { verses, missing } = spansToVerses(spans, books);

  if (strict && missing.length) {
    const first = missing[0];
    throw new Error(
      `spansToText: ${missing.length} gap(s); first is ${first.book} ` +
      `${first.chapter ?? "?"} — ${first.reason}`,
    );
  }

  const pieces = verses.map((v) => {
    const marker = v.startsChapter && chapterMarker ? `${chapterMarker} ` : "";
    const number = verseNumbers ? `${v.verse} ` : "";
    return `${marker}${number}${v.text}`;
  });

  return continuous ? pieces.join(" ") : pieces.join("\n");
}

/**
 * The liturgical announcement that precedes a reading, e.g.
 * "The Reading is from the Second Epistle of the Holy Apostle Paul to the
 * Corinthians." Returns null for a book with no conventional formula, so the
 * caller can fall back to the plain reference rather than print an invention.
 */
const PAULINE = {
  Rom: "the Epistle of the Holy Apostle Paul to the Romans",
  "1Cor": "the First Epistle of the Holy Apostle Paul to the Corinthians",
  "2Cor": "the Second Epistle of the Holy Apostle Paul to the Corinthians",
  Gal: "the Epistle of the Holy Apostle Paul to the Galatians",
  Eph: "the Epistle of the Holy Apostle Paul to the Ephesians",
  Phil: "the Epistle of the Holy Apostle Paul to the Philippians",
  Col: "the Epistle of the Holy Apostle Paul to the Colossians",
  "1Thes": "the First Epistle of the Holy Apostle Paul to the Thessalonians",
  "2Thes": "the Second Epistle of the Holy Apostle Paul to the Thessalonians",
  "1Tim": "the First Epistle of the Holy Apostle Paul to Timothy",
  "2Tim": "the Second Epistle of the Holy Apostle Paul to Timothy",
  Tit: "the Epistle of the Holy Apostle Paul to Titus",
  Phlm: "the Epistle of the Holy Apostle Paul to Philemon",
  Heb: "the Epistle of the Holy Apostle Paul to the Hebrews",
};

const CATHOLIC = {
  Jas: "the Epistle of the Holy Apostle James",
  "1Pet": "the First Epistle of the Holy Apostle Peter",
  "2Pet": "the Second Epistle of the Holy Apostle Peter",
  "1John": "the First Epistle of the Holy Apostle John",
  "2John": "the Second Epistle of the Holy Apostle John",
  "3John": "the Third Epistle of the Holy Apostle John",
  Jude: "the Epistle of the Holy Apostle Jude",
};

const GOSPELS = {
  Matt: "Matthew", Mark: "Mark", Luke: "Luke", John: "John",
};

export function readingIntro(bookId, bookName) {
  if (!bookId) return null;
  if (GOSPELS[bookId]) {
    return `The Reading is from the Holy Gospel according to St ${GOSPELS[bookId]}.`;
  }
  if (bookId === "Acts") {
    return "The Reading is from the Acts of the Holy Apostles.";
  }
  const epistle = PAULINE[bookId] || CATHOLIC[bookId];
  if (epistle) return `The Reading is from ${epistle}.`;
  // Old Testament lessons are announced by book alone — "A READING FROM
  // PROVERBS" — and the Menaion prints them that way. Use the name we were
  // given rather than guessing a formula.
  return bookName ? `The Reading is from ${bookName}.` : null;
}
