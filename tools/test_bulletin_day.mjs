#!/usr/bin/env node
/**
 * test_bulletin_day.mjs
 * =====================
 * Exercises the bulletin's data path end to end for real dates, without React:
 * the Fekula reading rule, the encoded Menaion entry, the Octoechos V2
 * resurrectional hymns, and the full text of every appointed reading.
 *
 * The component itself is a renderer — it prints what it is handed and resolves
 * nothing. So everything that can be liturgically wrong about a bulletin is
 * decided here, and can be tested here.
 *
 * Run with --show to print the sheet content for eyeballing:
 *     node tools/test_bulletin_day.mjs --show
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRefString, spanLabel } from "../src/lib/scripture-ref.js";
import { spansToVerses, spansToText, readingIntro } from "../src/lib/scripture-text.js";
import { readingsForDay, readingsInOrder } from "../src/lib/readings.js";
import september from "../src/data/menaion/september.js";
import may from "../src/data/menaion/may.js";
import * as OctoV2 from "../src/data/octoechos_v2/adapter.js";
import { hymnText } from "../src/lib/hymn-entry.js";
import { BULLETIN_CSS } from "../src/lib/bulletin-css.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SHOW = process.argv.includes("--show");

let failures = 0;
const check = (what, got, want) => {
  const ok = got === want;
  if (!ok) { failures++; console.log(`  ✗ ${what}\n      expected: ${want}\n      got:      ${got}`); }
  return ok;
};
const checkTruthy = (what, got) => {
  if (!got) { failures++; console.log(`  ✗ ${what} — missing`); return false; }
  return true;
};

function loadBook(id) {
  const file = path.join(ROOT, "public", "bible", `${id.toLowerCase()}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null;
}

function resolveText(ref) {
  const spans = parseRefString(ref, { strict: true });
  if (!spans) return { error: "unresolved reference" };
  const books = {};
  for (const s of spans) books[s.book] = loadBook(s.book);
  const { verses, missing } = spansToVerses(spans, books);
  if (missing.length) return { error: `${missing.length} gap(s): ${missing[0].reason}` };
  return {
    verses,
    label: spans.map(spanLabel).join(" · "),
    intro: readingIntro(spans[0].book, spans[0].bookName),
    text: spansToText(spans, books, { continuous: true, strict: true }),
  };
}

// ─── The worked case: Sunday 6 September 2026 ───────────────────────────────
// 14th Sunday after Pentecost, Tone 5, with the Miracle of the Archangel
// Michael at Chonae — a six-stichera commemoration whose Menaion DOES appoint
// its own readings. Both pairs are therefore read, per Fekula §1C.
console.log("Sunday 6 September 2026 — Michael at Chonae");

const entry = september["09-06"];
checkTruthy("09-06 entry present", entry);
check("rank", entry.rank, "six_stichera");
check("fekula_section", entry.fekula_section, "2C");

const liturgicalData = { dow: 0, season: "sunday", tone: 5 };
const resolved = readingsForDay({
  liturgicalData,
  menaionEntry: entry,
  dailyReading: { e: "2 Corinthians 1:21-2:4", g: "Matthew 22:1-14" },
  feastReading: { e: entry.feast_e, g: entry.feast_g },
});

check("governing rule", resolved.rule.section, "Fekula §1C");
check("order", resolved.order, "day-first");
check("groups", resolved.groups.length, 2);
check("epistles read", resolved.groups[0].items.length, 2);
check("gospels read", resolved.groups[1].items.length, 2);
check("epistle 1 is the Sunday's", resolved.groups[0].items[0].ref, "2 Corinthians 1:21-2:4");
check("epistle 2 is the Archangel's", resolved.groups[0].items[1].ref, "Hebrews 2:2-10");
check("menaion label is generic, not the full printed heading",
      resolved.groups[0].items[1].label, "Of the commemoration");
check("gospel 1 is the Sunday's", resolved.groups[1].items[0].ref, "Matthew 22:1-14");
check("gospel 2 is the Archangel's", resolved.groups[1].items[1].ref, "Luke 10:16-21");

// Every reading must resolve to complete text, or the supplement refuses it.
const flat = readingsInOrder(resolved);
check("readings in order", flat.length, 4);
for (const r of flat) {
  const t = resolveText(r.ref);
  if (t.error) { failures++; console.log(`  ✗ ${r.ref}: ${t.error}`); }
  else checkTruthy(`${r.ref} has an announcement formula`, t.intro);
}

// The Octoechos side must supply the resurrectional hymns for Tone 5.
await OctoV2.loadV2Tone(5);
const resTrop = OctoV2.getV2Troparion(5);
const resKont = OctoV2.getV2Kontakion(5);
const dismTheot = OctoV2.getV2DismissalTheotokion(5);
checkTruthy("Tone 5 resurrectional troparion", resTrop && hymnText(resTrop));
checkTruthy("Tone 5 resurrectional kontakion", resKont && hymnText(resKont));
checkTruthy("Tone 5 dismissal theotokion", dismTheot && hymnText(dismTheot));
checkTruthy("Menaion troparion", entry.troparion && hymnText(entry.troparion));
checkTruthy("Menaion kontakion", entry.kontakion_ode6 && hymnText(entry.kontakion_ode6));

// ─── The counter-case: same rank, no Menaion readings ──────────────────────
// 05-23, Michael the Confessor of Synada: also six_stichera, also §2C, but its
// service prints no AT LITURGY section, so feast_e is null and the
// commemoration contributes nothing. Identical rank to 09-06, opposite outcome
// — which is the whole point. The gate is the Menaion's contents, not rank.
console.log("\nRank does not decide — the Menaion's contents do");
const may23 = may["05-23"];
checkTruthy("05-23 entry present", may23);
check("05-23 rank matches 09-06", may23.rank, entry.rank);
check("05-23 section matches 09-06", may23.fekula_section, entry.fekula_section);
check("05-23 appoints no epistle", may23.feast_e, null);
check("05-23 appoints no gospel", may23.feast_g, null);

const hasOwn23 = !!(may23.feast_e && !String(may23.feast_e).startsWith("absent"));
const r23 = readingsForDay({
  liturgicalData: { dow: 0, season: "sunday", tone: 5 },
  menaionEntry: may23,
  dailyReading: { e: "Romans 5:1-10", g: "Matthew 6:22-33" },
  feastReading: hasOwn23 ? { e: may23.feast_e, g: may23.feast_g } : null,
});
check("05-23 cites the same rule as 09-06", r23.rule.section, resolved.rule.section);
check("05-23 reads one epistle", r23.groups[0].items.length, 1);
check("05-23 reads one gospel", r23.groups[1].items.length, 1);
check("05-23 has no Menaion readings", r23.hasMenaionReadings, false);
console.log(`  09-06 and 05-23 are both ${entry.rank}, both §${entry.fekula_section}, ` +
            `both cite ${resolved.rule.section} —`);
console.log(`  09-06 reads ${resolved.groups[0].items.length} epistles, ` +
            `05-23 reads ${r23.groups[0].items.length}. The rank is identical; ` +
            `the printed services differ.`);

// ─── The Saturday inversion ─────────────────────────────────────────────────
console.log("\nSaturday inverts the order — Fekula §2A");
const sat = readingsForDay({
  liturgicalData: { dow: 6, season: "ordinary", tone: 5 },
  menaionEntry: { rank: "six_stichera" },
  dailyReading: { e: "1 Corinthians 2:6-9", g: "Matthew 22:15-22" },
  feastReading: { e: "Galatians 5:22-6:2", g: "Luke 6:17-23" },
});
check("saturday order", sat.order, "menaion-first");
check("saturday cites §2A", sat.rule.section, "Fekula §2A");
check("saturday epistle 1 is the Menaion's", sat.groups[0].items[0].ref, "Galatians 5:22-6:2");

// Saturday with no Menaion readings must NOT invert — the rubric is explicit
// that the inversion applies only "if there be readings in the Menaion".
const satNone = readingsForDay({
  liturgicalData: { dow: 6, season: "ordinary", tone: 5 },
  menaionEntry: { rank: "simple" },
  dailyReading: { e: "1 Corinthians 2:6-9", g: "Matthew 22:15-22" },
  feastReading: null,
});
check("saturday with no Menaion readings does not invert", satNone.order, "day-first");

// ─── Optional: print the sheet content ──────────────────────────────────────
if (SHOW) {
  console.log("\n" + "─".repeat(72));
  console.log("BULLETIN — Sunday, September 6, 2026");
  console.log("14th Sunday after Pentecost · Tone 5 · Six-Stichera · Fekula §2C");
  console.log("─".repeat(72));
  console.log("\nCOMMEMORATION\n  " + entry.saint);
  console.log("\nREADINGS AT THE LITURGY");
  for (const g of resolved.groups) {
    console.log("  " + g.label);
    for (const it of g.items) console.log(`    ${it.label.padEnd(34)} ${it.ref}`);
  }
  console.log(`  ${resolved.rule.section}: “${resolved.rule.quote}”`);
  console.log("\nTROPARIA");
  console.log("  Of the Resurrection, Tone 5\n    " + hymnText(resTrop).slice(0, 150) + "…");
  console.log(`  Of the commemoration, Tone ${entry.troparion.tone}\n    ` +
              hymnText(entry.troparion).slice(0, 150) + "…");
  console.log("\nKONTAKIA");
  console.log("  Of the Resurrection, Tone 5\n    " + hymnText(resKont).slice(0, 150) + "…");
  console.log(`  Of the commemoration, Tone ${entry.kontakion_ode6.tone}\n    ` +
              hymnText(entry.kontakion_ode6).slice(0, 150) + "…");
  console.log("\nREADINGS IN FULL (supplement)");
  for (const r of flat) {
    const t = resolveText(r.ref);
    console.log(`\n  ${r.slotLabel} · ${t.label} · ${r.label}`);
    console.log("  " + (t.intro || ""));
    console.log("  " + t.text.slice(0, 260) + "…");
  }
  console.log("\n" + "─".repeat(72));
}

// ─── Print-path regression guard ────────────────────────────────────────────
// v0.45.1 printed exactly one page and no readings sheet. The cause was two
// INLINE declarations on the modal container — position:fixed and
// overflow:auto — which beat the @media print rules, because an inline style
// wins over a stylesheet rule that carries no !important. A fixed element
// prints on the first page only in Chrome, and overflow:auto clipped 27in of
// sheets into a 0.88in scroll box.
//
// These assertions are structural rather than visual, because the failure was
// structural and nothing about the rendered sheet looked wrong on screen.
console.log("\nPrint path");

const componentSrc = fs.readFileSync(
  path.join(ROOT, "src", "components", "bulletin.jsx"), "utf8");

// 1. The overlay must not be positioned from inline styles again.
if (/position:\s*["']fixed["']/.test(componentSrc)) {
  failures++;
  console.log("  ✗ bulletin.jsx sets position:fixed inline — the print rules cannot override it");
}
if (/overflow:\s*["']auto["']/.test(componentSrc)) {
  failures++;
  console.log("  ✗ bulletin.jsx sets overflow:auto inline — it will clip printing to one page");
}

// 2. The print block must unwind every containment the modal needs on screen.
// lastIndexOf, not indexOf: the stylesheet mentions "@media print" in a
// comment above the block itself, and indexOf would slice from the prose.
const printBlock = BULLETIN_CSS.slice(BULLETIN_CSS.lastIndexOf("@media print"));
for (const [what, re] of [
  ["releases position",        /\.oh-overlay\s*\{[^}]*position:\s*static\s*!important/],
  ["releases overflow",        /\.oh-overlay\s*\{[^}]*overflow:\s*visible\s*!important/],
  ["releases height",          /\.oh-overlay\s*\{[^}]*height:\s*auto\s*!important/],
  ["releases inset",           /\.oh-overlay\s*\{[^}]*inset:\s*auto\s*!important/],
  ["sizes the page box",       /@page\s*\{[^}]*size:\s*8\.5in\s+11in/],
  ["margins on the page box",  /@page\s*\{[^}]*margin:\s*0\.55in/],
  ["breaks between sheets",    /\.oh-sheet\s*\{[^}]*page-break-after:\s*always/],
  ["last sheet does not break", /\.oh-sheet:last-child\s*\{[^}]*page-break-after:\s*auto/],
  ["hides the app",            /body\s*>\s*\*:not\(\.oh-overlay\)/],
  ["keeps the proof page",     /:not\(\.oh-sheet\)\s*\{\s*display:\s*none/],
]) {
  if (!re.test(printBlock)) { failures++; console.log(`  ✗ print CSS: ${what}`); }
}

// 3. Paper geometry must live under @media screen only. A fixed 8.5in-wide box
//    on a zero-margin 8.5in page is where stray blank pages come from.
const screenBlock = BULLETIN_CSS.slice(
  BULLETIN_CSS.indexOf("@media screen"), BULLETIN_CSS.lastIndexOf("@media print"));
if (!/width:\s*8\.5in/.test(screenBlock)) {
  failures++; console.log("  ✗ the 8.5in sheet width is not confined to @media screen");
}

if (failures) { console.log(`\nFAILED — ${failures} check(s)`); process.exit(1); }
console.log("\nPASSED — the bulletin's data path is sound");
