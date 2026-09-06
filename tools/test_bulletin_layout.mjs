#!/usr/bin/env node
/**
 * test_bulletin_layout.mjs
 * ========================
 * Exercises the layout budget: line estimation, column packing, the split
 * rules, and the continuation notices.
 *
 * The point of a budget is that it holds for days nobody has looked at, so the
 * cases below deliberately include a day heavier than anything encoded.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STYLES, wrapText, blockHeightPt } from "../src/lib/bulletin-metrics.js";
import { paginate, buildPropersFlow, buildReadingsFlow,
         continuationNotice, resumptionNotice, PAGE,
         reconcileBudget, MAX_LAYOUT_PASSES, SLACK_PT,
         paginateBest } from "../src/lib/bulletin-layout.js";
import { readingsForDay } from "../src/lib/readings.js";
import september from "../src/data/menaion/september.js";
import { hymnText } from "../src/lib/hymn-entry.js";

let failures = 0;
const check = (what, got, want) => {
  if (got !== want) { failures++; console.log(`  ✗ ${what}\n      expected ${want}, got ${got}`); }
};
const ok = (what, cond) => { if (!cond) { failures++; console.log(`  ✗ ${what}`); } };

// ─── 1. The wrap simulation matches the browser ─────────────────────────────
// Measured in Chrome at the sheet's real 3.43in measure; see the header of
// src/lib/bulletin-metrics.js for the method.
console.log("Wrap simulation vs browser (12 real strings measured in Chrome)");
const BROWSER = [
  ["Let us, O faithful, praise and worship the Word * Who is co-beginningless with the Father and the Spirit, * and Who was born of the Virgin for our salvation; * for He was pleased to ascend the Cross in the flesh * and to endure death, ** and to raise the dead by His glorious Resurrection.", "hymnText", 6],
  ["O supreme commander of the heavenly hosts, * we entreat thee unworthy though we be, * that by thy prayers, thou wilt encompass us * with the protection of the wings of thine immaterial glory * preserving us who fall down before thee and earnestly cry aloud: * deliver us from all misfortunes, ** for thou art the supreme commander of the hosts on high.", "hymnText", 7],
  ["Rejoice, impassible portal of the Lord! * Rejoice, rampart and protection of those who have recourse unto thee! * Rejoice, haven untouched by storms, * and who knowing not wedlock, * didst bear in the flesh thy Creator and God. * Cease not to intercede for those ** who praise and worship thine Offspring.", "hymnText", 6],
  ["Thou didst descend into Hades, O my Savior, * and having shattered its gates, as All-powerful, * Thou didst raise the dead with Thyself, as Creator, * and didst deliver Adam from the curse, * O Lover of mankind. ** Therefore, we all cry to Thee: “Save us, O Lord!”", "hymnText", 6],
  ["O chief commander of God, minister of divine glory, * captain of the angels and instructor of all mankind: * beg thou great mercy and that which is profitable for us, * for thou art the supreme commander ** of the bodiless hosts.", "hymnText", 5],
  ["O supreme commander, as general, champion and chief of the angels, from all want and grief, from afflictions and grievous sins do thou free those who hymn and beseech thee with faith, O glorious one, for thou art manifestly immaterial, beholding the Immaterial One, illumined with the unapproachable light of the Master’s glory. For in His love for mankind He took flesh from the Virgin for our sake, wishing to save the human race.", "hymnText", 9],
  ["As of old thou didst subdue the raging flow and thundering of the river, O glorious supreme commander, so now destroy the pride of the heathen and the raging of the demons, that we may fittingly honor thee as is meet.", "hymnText", 5],
  ["He maketh His angels spirits, * and His ministers a flame of fire.", "hymnText", 2],
  ["And Jesus answered and spake unto them again by parables, and said, The kingdom of heaven is like unto a certain king, which made a marriage for his son, And sent forth his servants to call them that were bidden to the wedding: and they would not come. Again, he sent forth other servants, saying, Tell them which are bidden, Behold, I have prepared my dinner: my oxen and my fatlings are killed, and all things are ready: come unto the marriage.", "lectionBody", 10],
  ["Now he which stablisheth us with you in Christ, and hath anointed us, is God; Who hath also sealed us, and given the earnest of the Spirit in our hearts. Moreover I call God for a record upon my soul, that to spare you I came not as yet unto Corinth.", "lectionBody", 6],
];
for (const [text, styleKey, expected] of BROWSER) {
  const got = blockHeightPt(text, styleKey, PAGE.columnWidthIn).lines;
  if (got !== expected) {
    failures++;
    console.log(`  ✗ ${styleKey}: predicted ${got} lines, Chrome rendered ${expected}`);
    console.log(`      "${text.slice(0, 70)}…"`);
  }
}

// ─── 2. Metrics must agree with the stylesheet ──────────────────────────────
// A budget computed from stale numbers is worse than none: confidently wrong.
console.log("Metrics agree with bulletin-css.js");
const css = (await import("../src/lib/bulletin-css.js")).BULLETIN_CSS;
const CSS_CHECK = [
  ["hymnText", ".oh-hymn-text", 10.5, 1.42],
  ["lectionBody", ".oh-lection-body", 11, 1.5],
  ["readingRef", ".oh-reading-ref", 11, 1.25],
  ["readingOf", ".oh-reading-of", 9, 1.2],
  ["heading", ".oh-h", 10, null],
  ["commemoration", ".oh-comm", 13, 1.32],
];
for (const [key, selector, pt, leading] of CSS_CHECK) {
  const block = css.slice(css.indexOf(selector));
  const decl = block.slice(0, block.indexOf("}"));
  const size = /font-size:\s*([0-9.]+)pt/.exec(decl);
  if (!size) { failures++; console.log(`  ✗ ${selector}: no font-size found`); continue; }
  check(`${selector} font-size`, parseFloat(size[1]), STYLES[key].pt);
  if (leading != null) {
    const lh = /line-height:\s*([0-9.]+)/.exec(decl);
    if (!lh) { failures++; console.log(`  ✗ ${selector}: no line-height found`); }
    else check(`${selector} line-height`, parseFloat(lh[1]), STYLES[key].leading);
  }
}

// ─── 3. The real day fits, and fills honestly ───────────────────────────────
console.log("6 September 2026 — the propers sheet");
const entry = september["09-06"];
const readings = readingsForDay({
  liturgicalData: { dow: 0, season: "sunday", tone: 5 },
  menaionEntry: entry,
  dailyReading: { e: "2 Corinthians 1:21-2:4", g: "Matthew 22:1-14" },
  feastReading: { e: entry.feast_e, g: entry.feast_g },
});
const day = {
  saint: entry.saint, secondSaint: null, readings,
  troparia: [
    { label: "Of the Resurrection", tone: 5, text: BROWSER[0][0] },
    { label: "Of the commemoration", tone: 4, text: hymnText(entry.troparion) },
    { label: "Dismissal Theotokion", tone: 5, text: BROWSER[2][0] },
  ],
  kontakia: [
    { label: "Of the Resurrection", tone: 5, text: BROWSER[3][0] },
    { label: "Of the commemoration", tone: 2, text: hymnText(entry.kontakion_ode6) },
  ],
  extras: [
    { label: "Glory at the Aposticha", tone: 8, text: hymnText(entry.aposticha_glory) },
    { label: "Exapostilarion", text: hymnText(entry.exapostilarion) },
    { label: "Prokeimenon of the commemoration", tone: 4, text: entry.prokeimenon_text },
    { label: "Communion verse", text: entry.communion_verse },
  ],
};
// paginateBest negotiates the slack: it takes the safety margin wherever it is
// free and declines it where it would cost a page. On 6 September the propers
// sheet has essentially no headroom — a third of a line of slack costs it a
// whole page with a third column a third full — so it should decline.
const propers = paginateBest(buildPropersFlow(day));
check("the propers sheet declines slack it cannot afford", propers.slackPt, 0);
check("propers pages", propers.totalPages, 1);
check("nothing overflows a column", propers.overflow.length, 0);
const fills = propers.pages[0].columns.map((c) => c.fillRatio);
console.log(`  1 page, column fill ${fills.map((f) => (f * 100).toFixed(0) + "%").join(" / ")}`);
ok("both columns carry content", fills.every((f) => f > 0.5));

// ─── 4. A hymn is never split ───────────────────────────────────────────────
console.log("A hymn is never split, however badly it fits");
const hostile = [
  { kind: "heading", text: "Troparia" },
  { kind: "hymn", label: "Filler", tone: 1, text: "word ".repeat(700) },
  { kind: "hymn", label: "Must stay whole", tone: 2, text: BROWSER[5][0] },
];
const split = paginate(hostile);
const whole = split.pages.flatMap((p) => p.columns).flatMap((c) => c.items)
  .filter((i) => i.kind === "hymn" && i.label === "Must stay whole");
check("the hymn appears exactly once", whole.length, 1);
check("and is not marked as a part", whole[0].isFirstPart, undefined);

// ─── 5. A heading never ends a column ───────────────────────────────────────
console.log("A heading never ends a column");
const headingTest = paginate([
  { kind: "hymn", label: "Filler", tone: 1, text: "word ".repeat(560) },
  { kind: "heading", text: "Kontakia" },
  { kind: "hymn", label: "After the heading", tone: 2, text: BROWSER[0][0] },
]);
for (const page of headingTest.pages) {
  for (const col of page.columns) {
    const last = col.items[col.items.length - 1];
    if (last && last.kind === "heading") {
      failures++; console.log(`  ✗ column ends with the heading "${last.text}"`);
    }
  }
}

// ─── 6. A reading splits, with notices, and never strands a line ────────────
console.log("A long reading splits with continuation notices");
const longVerses = Array.from({ length: 90 }, (_, i) => ({
  chapter: 1, verse: i + 1, startsChapter: false,
  text: "And he spake unto them a parable concerning the kingdom of heaven, saying,",
}));
const lect = paginate(buildReadingsFlow([{
  slotLabel: "Gospel", label: "St Luke 1:1-90", itemLabel: "Of the Sunday",
  intro: "The Reading is from the Holy Gospel according to St Luke.",
  verses: longVerses,
}]), { startPage: 2 });

const parts = lect.pages.flatMap((p) => p.columns).flatMap((c) => c.items)
  .filter((i) => i.kind === "lection");
ok("the reading did split", parts.length > 1);
ok("every part keeps at least two lines",
   parts.every((p) => p.lines.length >= 2));
check("only the first part shows the heading", parts.filter((p) => p.showHead).length, 1);
check("exactly one part is marked last", parts.filter((p) => p.isLastPart).length, 1);

const crossing = parts.find((p) => p.continuesAcrossPage);
ok("a page-crossing part exists", !!crossing);
if (crossing) {
  ok("it says so loudly", /^continued on page \d+$/.test(continuationNotice(crossing)));
  const resumed = parts.find((p) => p.continuedAcrossPage);
  ok("and the resumption says where it came from",
     /^continued from page \d+$/.test(resumptionNotice(resumed)));
  console.log(`  "${continuationNotice(crossing)}" → "${resumptionNotice(parts.find((p) => p.continuedAcrossPage))}"`);
}
check("page numbering starts where it was told to", lect.pages[0].number, 2);

// ─── 7. A heavier day than anything encoded ─────────────────────────────────
// The point of a budget is days nobody has looked at.
console.log("A Vigil-weight day — more propers than any encoded date");
const heavy = {
  saint: "The Holy Glorious and All-Praised Leaders of the Apostles, Peter and Paul",
  secondSaint: "and the Synaxis of the Twelve Holy Apostles",
  readings,
  troparia: Array.from({ length: 4 }, (_, i) => ({ label: `Troparion ${i + 1}`, tone: i + 1, text: BROWSER[1][0] })),
  kontakia: Array.from({ length: 3 }, (_, i) => ({ label: `Kontakion ${i + 1}`, tone: i + 1, text: BROWSER[3][0] })),
  extras: Array.from({ length: 8 }, (_, i) => ({ label: `Sticheron ${i + 1}`, tone: (i % 8) + 1, text: BROWSER[5][0] })),
};
const heavyOut = paginateBest(buildPropersFlow(heavy));
console.log(`  ${heavyOut.totalPages} pages, fills ` +
  heavyOut.pages.flatMap((p) => p.columns).map((c) => (c.fillRatio * 100).toFixed(0) + "%").join(" / "));
check("nothing overflows a column", heavyOut.overflow.length, 0);
ok("it needed more than one page", heavyOut.totalPages > 1);
for (const page of heavyOut.pages) {
  for (const col of page.columns) {
    if (col.usedPt > PAGE.columnHeightPt + 0.01) {
      failures++; console.log(`  ✗ column overfilled: ${col.usedPt}pt of ${PAGE.columnHeightPt}pt`);
    }
  }
}

// ─── 7b. Slack is negotiated, not imposed ───────────────────────────────────
console.log("Slack is taken where free and declined where it costs a page");
// A flow with room to spare should take the whole margin.
const roomy = paginateBest([
  { kind: "heading", text: "Troparia" },
  { kind: "hymn", label: "One", tone: 1, text: BROWSER[0][0] },
  { kind: "hymn", label: "Two", tone: 2, text: BROWSER[4][0] },
]);
check("a roomy sheet takes the full slack", roomy.slackPt, SLACK_PT);
check("and still fits one page", roomy.totalPages, 1);

// Whatever it chooses, no column may exceed the budget it chose.
for (const layout of [propers, roomy, heavyOut]) {
  const budget = (PAGE.chromeBudgetPt ?? PAGE.columnHeightPt) - (layout.slackPt ?? 0);
  for (const page of layout.pages) {
    for (const col of page.columns) {
      if (col.usedPt > budget + 0.01) {
        failures++;
        console.log(`  ✗ column used ${col.usedPt.toFixed(1)}pt of a ${budget.toFixed(1)}pt budget`);
      }
    }
  }
}

// ─── 8. Budget reconciliation must converge ─────────────────────────────────
// v0.46.0 shipped a measure-and-correct pass that oscillated: shrink on drift,
// then grow back when the drift disappeared, then overflow again. In Chrome's
// print preview that showed as text flickering and re-ordering, because every
// pass re-sliced where each reading broke.
console.log("Budget reconciliation converges");

const chrome = 601.7;

// The oscillation itself: an adversarial measurement that reports drift again
// every time the budget returns to full. Monotonic shrinking must starve it.
let budget = chrome, pass = 0, settled = false, history = [];
for (let i = 0; i < 20 && !settled; i++) {
  const drift = budget >= chrome ? 3 : -2;      // "fits only when shrunk"
  const r = reconcileBudget({ chromeBudgetPt: chrome, currentBudgetPt: budget,
                              measuredDriftPt: drift, pass });
  history.push(+r.budgetPt.toFixed(1));
  budget = r.budgetPt; settled = r.settled; pass += 1;
}
ok("it settles rather than spinning", settled);
ok(`it settles within ${MAX_LAYOUT_PASSES} passes`, pass <= MAX_LAYOUT_PASSES + 1);
ok("the budget never grows back", history.every((b, i) => i === 0 || b <= history[i - 1]));
console.log(`  budgets: ${history.join(" → ")} (settled after ${pass} pass${pass === 1 ? "" : "es"})`);

// A clean first pass settles immediately.
const clean = reconcileBudget({ chromeBudgetPt: chrome, currentBudgetPt: chrome,
                                measuredDriftPt: 0, pass: 0 });
check("no drift settles at once", clean.settled, true);
check("and holds back the slack", clean.budgetPt, chrome - SLACK_PT);

// Rounding noise is not drift.
const noise = reconcileBudget({ chromeBudgetPt: chrome, currentBudgetPt: chrome,
                                measuredDriftPt: 0.4, pass: 0 });
check("sub-point noise is ignored", noise.settled, true);

// A runaway measurement hits the floor and stops, rather than squeezing to nothing.
const runaway = reconcileBudget({ chromeBudgetPt: chrome, currentBudgetPt: chrome,
                                  measuredDriftPt: 400, pass: 0 });
check("a runaway drift is floored", runaway.floored, true);
check("and stops there", runaway.settled, true);
ok("the floor is a sane column", runaway.budgetPt > chrome * 0.7);

// The cap holds even if drift never resolves.
const capped = reconcileBudget({ chromeBudgetPt: chrome, currentBudgetPt: 500,
                                 measuredDriftPt: 10, pass: MAX_LAYOUT_PASSES });
check("the pass cap forces a settle", capped.settled, true);

// ─── 9. The settling loop cannot come back ──────────────────────────────────
// Structural, because the failure was structural: the sheet looked correct at
// every individual moment and only misbehaved as a sequence of moments.
console.log("The component settles safely");
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(ROOT, "src", "components", "bulletin.jsx"), "utf8");

for (const [what, present] of [
  ["settling runs before paint (useLayoutEffect)", /useLayoutEffect\(/.test(src)],
  ["the budget goes through reconcileBudget", /reconcileBudget\(/.test(src)],
  ["there is a settled gate", /if \(settled\) return;/.test(src)],
  ["settling resets when the content changes", /setSettled\(false\)/.test(src)],
  // Print must NOT be gated on settling. The layout is valid at every pass, and
  // when the settle loop stalled this hid the button altogether.
  ["printing is never gated on settling", !/disabled=\{[^}]*!settled/.test(src)],
  ["the button always reads Print", /: "Print"\}/.test(src)],
  // Every exit from the settle effect must either settle or schedule a retry;
  // a bare return leaves the deps unchanged and the effect never runs again.
  ["the settle effect cannot dead-end", /requestAnimationFrame\(\(\) => setPass/.test(src)],
]) {
  if (!present) { failures++; console.log(`  ✗ ${what}`); }
}
// The v0.46.0 shape: a plain effect that set geometry from a raw measurement
// with nothing stopping it going round again.
if (/useEffect\(\(\) => \{ measure\(\); \}/.test(src)) {
  failures++;
  console.log("  ✗ the unbounded measure() effect from v0.46.0 is back");
}

if (failures) { console.log(`\nFAILED — ${failures} check(s)`); process.exit(1); }
console.log("\nPASSED — the layout budget holds");
