#!/usr/bin/env node
/**
 * test_ref_resolution.mjs
 * =======================
 * Runs EVERY scripture reference in the encoded corpus through the real parser
 * in src/lib/scripture-ref.js and asserts that all of them resolve completely.
 *
 * WHY THIS EXISTS
 * ---------------
 * Every defect this test guards against failed *silently*. Nothing threw,
 * nothing logged, and the viewer rendered a plausible-looking passage:
 *
 *   "Acts 6:8-7:5, 47-60"  rendered as Acts 6:47-60 — the Stephen pericope
 *                          without its opening, and no indication of loss
 *   "Is 61:1-9"            produced a link the viewer refused to open, because
 *                          the two book maps had drifted apart
 *   "Wisdom 5:15ff"        no endpoint, so no span could honestly be built
 *
 * A parse failure that returns a *shorter* reading rather than an error is the
 * worst shape a bug can take in a liturgical tool: it is invisible on screen
 * and only surfaces when someone reads it aloud in church. Hence a test that
 * covers the whole corpus rather than a sample, and hence { strict: true } —
 * which rejects a partial parse instead of accepting it.
 *
 * WHAT IT COVERS
 *   - every `e` and `g` in the LECTIONARY table (hours-tool.jsx)
 *   - every feast_e / feast_g across the Menaion months and the Pentecostarion
 *   - every paroemia_1..3 annotation, through paroemiaToRef
 *   - regression cases for each defect class, asserted by exact expected output
 *
 * The LECTIONARY table and the "absent — §2A…" sentinels are read out of source
 * with a regex rather than imported, because hours-tool.jsx is a React
 * component and importing it would drag in the DOM.
 *
 * USAGE
 *     node tools/test_ref_resolution.mjs        # or: npm test
 * Exits non-zero on any failure.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseRefString, paroemiaToRef, paroemiaRefSpan, spanLabel, BOOK_ID,
} from "../src/lib/scripture-ref.js";
import { spansToVerses, readingIntro } from "../src/lib/scripture-text.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

const DATA_FILES = [
  "src/data/menaion/may.js",
  "src/data/menaion/june.js",
  "src/data/menaion/july.js",
  "src/data/menaion/september.js",
  "src/data/pentecostarion.js",
];

// A sentinel, not a reference: these dates take their readings from the
// Octoechos and the Menaion prints none.
const IS_SENTINEL = (s) => /^absent\b/.test(s);

let failures = 0;
const fail = (group, subject, why) => {
  failures++;
  console.log(`  ✗ ${group}: ${subject}`);
  console.log(`      ${why}`);
};

function collect(re, files) {
  const found = new Set();
  for (const f of files) {
    for (const m of read(f).matchAll(re)) found.add(m[1]);
  }
  return [...found].sort();
}

// ─── 1. LECTIONARY ──────────────────────────────────────────────────────────
const lectSrc = read("src/components/hours-tool.jsx");
const lectBlock = lectSrc.slice(
  lectSrc.indexOf("const LECTIONARY"),
  lectSrc.indexOf("function getLukanJumpOffset"),
);
const lectRefs = [...new Set(
  [...lectBlock.matchAll(/[eg]:\s*"([^"]+)"/g)].map((m) => m[1]),
)].sort();

console.log(`LECTIONARY — ${lectRefs.length} unique references`);
for (const ref of lectRefs) {
  const spans = parseRefString(ref, { strict: true });
  if (!spans) fail("LECTIONARY", ref, "did not resolve");
}

// ─── 2. feast_e / feast_g ───────────────────────────────────────────────────
const feastRefs = collect(/feast_[eg]:\s*"((?:[^"\\]|\\.)*)"/g, DATA_FILES)
  .filter((r) => !IS_SENTINEL(r));

console.log(`feast_e / feast_g — ${feastRefs.length} unique references`);
for (const ref of feastRefs) {
  const spans = parseRefString(ref, { strict: true });
  if (!spans) fail("feast_e/g", ref, "did not resolve");
}

// ─── 3. Paroemias ───────────────────────────────────────────────────────────
const paroemias = collect(/paroemia_\d:\s*"((?:[^"\\]|\\.)*)"/g, DATA_FILES);

console.log(`paroemia_1..3 — ${paroemias.length} unique annotations`);
for (const p of paroemias) {
  const found = paroemiaRefSpan(p);
  if (!found) {
    fail("paroemia", p.slice(0, 90), "no reference could be extracted");
    continue;
  }
  if (!parseRefString(found.ref, { strict: true })) {
    fail("paroemia", p.slice(0, 90), `extracted "${found.ref}" but it did not resolve`);
    continue;
  }
  // The reported range must actually contain the reference it claims to name,
  // or the Vespers view will underline the wrong words.
  const slice = p.slice(found.start, found.end);
  if (!/\d+\s*:\s*\d+/.test(slice)) {
    fail("paroemia", p.slice(0, 90), `range [${found.start},${found.end}) = "${slice}" holds no chapter:verse`);
  }
}

// ─── 4. Regression cases, asserted by exact output ──────────────────────────
// One per defect class, so a future refactor that reintroduces any of them
// fails here with a readable diff rather than at the lectern.
const CASES = [
  // Cross-chapter span inside a comma list — silently truncated before v0.44.2.
  ["Acts 6:8-7:5, 47-60",        "Acts 6:8–7:5 | Acts 7:47–60"],
  ["Luke 22:39-42, 45-23:1",     "Luke 22:39–42 | Luke 22:45–23:1"],
  ["Galatians 1:1-10, 20-2:5",   "Galatians 1:1–10 | Galatians 1:20–2:5"],
  ["Mark 5:22-24, 35-6:1",       "Mark 5:22–24 | Mark 5:35–6:1"],
  // Plain cross-chapter, which always worked — guard against regressing it.
  ["2 Corinthians 1:21-2:4",     "2 Corinthians 1:21–2:4"],
  // Comma list within one chapter, and a new chapter introduced mid-list.
  ["Hebrews 11:17-23, 27-31",    "Hebrews 11:17–23 | Hebrews 11:27–31"],
  ["Matthew 10:32-33, 37-38, 19:27-30",
   "Matthew 10:32–33 | Matthew 10:37–38 | Matthew 19:27–30"],
  // Semicolon groups.
  ["Luke 10:38-42; 11:27-28",    "Luke 10:38–42 | Luke 11:27–28"],
  // Book-name shapes the old maps rejected.
  ["Is 61:1-9",                  "Is 61:1–9"],
  ["Ex 15:22-16:1",              "Ex 15:22–16:1"],
  ["First Corinthians 1:18-24 (§125)", "First Corinthians 1:18–24"],
  ["First John 4:12-19 (§73)",   "First John 4:12–19"],
  ["Acts of the Apostles 6:8-15; 7:1-5, 47-60 (§17)",
   "Acts of the Apostles 6:8–15 | Acts of the Apostles 7:1–5 | Acts of the Apostles 7:47–60"],
  ["3 Kgdms 8:22-30",            "3 Kgdms 8:22–30"],
  // Single-chapter book with the chapter omitted.
  ["Jude 1-10",                  "Jude 1:1–10"],
  // Editorial matter: non-trailing parenthetical, prose tails, a new sentence.
  ["Philippians 2:5-11 (§240) — of the feast, repeated at its Leavetaking",
   "Philippians 2:5–11"],
  ["1 Corinthians 13:11-14:5, midpoint (§154 midpoint)",
   "1 Corinthians 13:11–14:5"],
  ["Judges 4:1-5:31, excerpted",  "Judges 4:1–5:31"],
  // ── LXX versification ──
  // Hebrew Malachi 4 is Brenton Malachi 3, continuing the verse count.
  ["Malachi 4:4-6",               "Malachi 3:22–24 (Malachi 4:4–6)"],
  // Hebrew Joel 2:28-32 is Brenton Joel 3:1-5, so a span crossing verse 28 has
  // to SPLIT. Collapsing it would silently drop half the Pentecost lesson.
  ["Joel 2:23-32",                "Joel 2:23–27 | Joel 3:1–5 (Joel 2:28–32)"],
  ["Joel 2:23-27",                "Joel 2:23–27"],
  // The LXX reorders Proverbs 24-31: the acrostic of the virtuous woman,
  // Hebrew 31:10-31, is Brenton 31:1-22.
  ["Proverbs 31:10-31",           "Proverbs 31:1–22 (Proverbs 31:10–31)"],
  // Hebrew Proverbs 31:1-9 (the words of Lemuel) sit elsewhere in the LXX and
  // are deliberately NOT mapped, so this passes through unremapped rather than
  // resolving to the wrong passage.
  ["Proverbs 31:1-9",             "Proverbs 31:1–9"],
];

console.log(`regression cases — ${CASES.length}`);
for (const [ref, expected] of CASES) {
  const spans = parseRefString(ref, { strict: true });
  const got = spans ? spans.map(spanLabel).join(" | ") : "(null)";
  if (got !== expected) fail("regression", ref, `expected ${expected}\n      got      ${got}`);
}

// "ff" names no endpoint and must be rejected rather than guessed at.
if (parseRefString("Wisdom of Solomon 5:15ff", { strict: true })) {
  fail("regression", "Wisdom of Solomon 5:15ff",
       "resolved, but 'ff' has no endpoint and must not be invented");
}

// ─── 5. Paroemia extraction shapes ──────────────────────────────────────────
const PAROEMIA_CASES = [
  ["Genesis 28:10-17 (Jacob's ladder)", "Genesis 28:10-17"],
  ["Isaiah 40:1-8, 10-11 — Comfort ye my people", "Isaiah 40:1-8, 10-11"],
  ["3 Kingdoms — Solomon's prayer at the dedication of the Temple (3 Kgdms 8:22-30)",
   "3 Kgdms 8:22-30"],
  ["First Kings (1 Samuel) — Hannah prays at Shiloh and conceives Samuel (First Kings 1:9-20)",
   "First Kings 1:9-20"],
  ["Proverbs — “God by wisdom founded the earth” (Proverbs 3:19-34). The PDF prints only the bare heading.",
   "Proverbs 3:19-34"],
];
console.log(`paroemia extraction cases — ${PAROEMIA_CASES.length}`);
for (const [annotation, expected] of PAROEMIA_CASES) {
  const got = paroemiaToRef(annotation);
  if (got !== expected) {
    fail("paroemia case", annotation.slice(0, 70), `expected "${expected}", got "${got}"`);
  }
}

// ─── 6. Book map sanity ─────────────────────────────────────────────────────
// Every value must name a file that actually ships, or a reference will resolve
// and then render nothing.
const available = new Set(
  fs.readdirSync(path.join(ROOT, "public", "bible"))
    .filter((f) => f.endsWith(".json") && !["books.json", "pericopes.json"].includes(f))
    .map((f) => f.replace(/\.json$/, "").toLowerCase()),
);
const missing = [...new Set(Object.values(BOOK_ID))]
  .filter((id) => !available.has(id.toLowerCase()));
console.log(`book map — ${Object.keys(BOOK_ID).length} names → ${new Set(Object.values(BOOK_ID)).size} books`);
for (const id of missing) {
  fail("book map", id, "no matching file in public/bible/");
}

// ─── 7. Every reference must resolve to actual TEXT, with no gaps ───────────
// Spans resolving is necessary but not sufficient: a reference can parse
// perfectly and still name verses the data does not hold. That is precisely
// what the v0.44.1 running-header shift did — "2 Corinthians 2:4" pointed at a
// verse that had been pushed out of range. This pass loads the real book files
// and requires every appointed verse to actually be there.
const bookCache = new Map();
function loadBook(id) {
  if (!bookCache.has(id)) {
    const file = path.join(ROOT, "public", "bible", `${id.toLowerCase()}.json`);
    bookCache.set(id, fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null);
  }
  return bookCache.get(id);
}

function checkText(group, subject, ref) {
  const spans = parseRefString(ref, { strict: true });
  if (!spans) return;                     // already reported by the earlier pass
  const books = {};
  for (const s of spans) books[s.book] = loadBook(s.book);
  const { verses, missing } = spansToVerses(spans, books);
  if (missing.length) {
    const m = missing[0];
    fail(group, subject, `${missing.length} gap(s); first: ${m.book} ${m.chapter ?? "?"} — ${m.reason}` +
      (m.requested ? ` (wanted v${m.requested}, data stops at v${m.found})` : ""));
  } else if (!verses.length) {
    fail(group, subject, "resolved to zero verses");
  }
}

console.log("text coverage — every reference against the shipped bible data");
for (const ref of lectRefs) checkText("text/LECTIONARY", ref, ref);
for (const ref of feastRefs) checkText("text/feast", ref, ref);
for (const p of paroemias) {
  const ref = paroemiaToRef(p);
  if (ref) checkText("text/paroemia", `${ref}  <- ${p.slice(0, 60)}`, ref);
}

// The announcement formula must exist for every book the lectionary reads.
const introBooks = new Set();
for (const ref of lectRefs) {
  const spans = parseRefString(ref, { strict: true });
  if (spans) introBooks.add(`${spans[0].book}\u0000${spans[0].bookName}`);
}
for (const key of introBooks) {
  const [id, name] = key.split("\u0000");
  if (!readingIntro(id, name)) fail("readingIntro", id, "no announcement formula");
}
console.log(`readingIntro — ${introBooks.size} lectionary books`);

// ─── Result ─────────────────────────────────────────────────────────────────
const total = (lectRefs.length + feastRefs.length + paroemias.length) * 2 +
              CASES.length + PAROEMIA_CASES.length + introBooks.size + 1;
if (failures) {
  console.log(`\nFAILED — ${failures} of ${total} checks`);
  process.exit(1);
}
console.log(`\nPASSED — ${total} checks, every encoded reference resolves`);
