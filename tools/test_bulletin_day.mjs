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
import { loadMenaionV2Month } from "../src/data/menaion_v2/index.js";
import { servicesOf, entrancePlan, liturgyPlan } from "../src/data/menaion_v2/adapter.js";
import { buildBulletinDay } from "../src/lib/bulletin-day.js";
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

// The sheet is built by the tool's own code (src/lib/bulletin-day.js) from the
// Menaion V2 service, through the same plans the Liturgy reads.
const svc = servicesOf((await loadMenaionV2Month("09"))["09-06"], "09-06")[0];
checkTruthy("09-06 service present in Menaion V2", svc);
const entry = svc.c;
check("rank", entry.rank, "six_stichera");
check("fekula_section", entry.fekula_section, "2C");

await OctoV2.loadV2Tone(5);
const liturgicalData = { dow: 0, season: "sunday", tone: 5 };
const day = buildBulletinDay({
  liturgicalData, service: svc, entrance: entrancePlan(svc.c, svc.path, {}), liturgy: liturgyPlan(svc.c, svc.path),
  dailyReading: { e: "2 Corinthians 1:21-2:4", g: "Matthew 22:1-14" },
  sources: { resTroparion: (t) => OctoV2.getV2Troparion(t), sunKontakion: (t) => OctoV2.getV2Kontakion(t),
             dismissalTheotokion: (t) => OctoV2.getV2ResDismissalTheotokion(t), hymnText },
});
const resolved = day.readings;

check("governing rule", resolved.rule.section, "§1C");
check("order", resolved.order, "day-first");
check("groups", resolved.groups.length, 2);
check("epistles read", resolved.groups[0].items.length, 2);
check("gospels read", resolved.groups[1].items.length, 2);
check("epistle 1 is the Sunday's", resolved.groups[0].items[0].ref, "2 Corinthians 1:21-2:4");
checkTruthy("epistle 2 is the Archangel's (Hebrews 2:2-10)", resolved.groups[0].items[1].ref.startsWith("Hebrews 2:2-10"));
check("menaion label is generic, not the full printed heading",
      resolved.groups[0].items[1].label, "Of the commemoration");
check("gospel 1 is the Sunday's", resolved.groups[1].items[0].ref, "Matthew 22:1-14");
checkTruthy("gospel 2 is the Archangel's (Luke 10:16-21)", resolved.groups[1].items[1].ref.startsWith("Luke 10:16-21"));

// Every reading must resolve to complete text, or the supplement refuses it.
const flat = readingsInOrder(resolved);
check("readings in order", flat.length, 4);
for (const r of flat) {
  const t = resolveText(r.ref);
  if (t.error) { failures++; console.log(`  ✗ ${r.ref}: ${t.error}`); }
  else checkTruthy(`${r.ref} has an announcement formula`, t.intro);
}

// The hymns: the Sunday's from the Octoechos, the commemoration's from the service.
check("troparia on the sheet", day.troparia.map((x) => x.label.replace(/^Of the holy.*/, "Of the commemoration")).join(" | "),
      "Of the Resurrection | Of the commemoration | Dismissal Theotokion");
check("kontakia on the sheet", day.kontakia.length, 2);
for (const h of [...day.troparia, ...day.kontakia]) checkTruthy(`${h.label}: text`, h.text && h.text.length > 20);
check("Sunday hymns are in the tone of the week", day.troparia[0].tone, 5);
// Fekula §1C / ch. 6 §I: the dismissal theotokion "in the tone of the last troparion".
// The Archangel's troparion is Tone 4, so the theotokion is Tone 4, not the week's Tone 5.
check("the commemoration's troparion tone", day.troparia[1].tone, 4);
check("dismissal theotokion follows the last troparion's tone", day.troparia[2].tone, 4);
checkTruthy("dismissal theotokion is the Tone 4 one", day.troparia[2].text && day.troparia[2].text !== hymnText(OctoV2.getV2ResDismissalTheotokion(5)));
check("the commemoration is named by its short name, not the printed title",
      day.saint, "The holy Archangel Michael and the holy Martyr Eudoxius and those with him");

// A polyeleos weekday (16 Nov, Apostle Matthew): Fekula §2E reads the day's and the
// Menaion's; the sheet follows the same rule as the Liturgy.
{
  const s16 = servicesOf((await loadMenaionV2Month("11"))["11-16"], "11-16")[0];
  const d16 = buildBulletinDay({ liturgicalData: { dow: 1, season: "ordinary", tone: 7 }, service: s16, entrance: entrancePlan(s16.c, s16.path, {}),
    liturgy: liturgyPlan(s16.c, s16.path), dailyReading: { e: "1 Thessalonians 1:1-5", g: "Luke 12:13-15, 22-31" }, sources: { hymnText } });
  check("16 Nov rule", d16.readings.rule.section, "§2E");
  check("16 Nov epistles (day, then the Apostle's)", d16.readings.groups[0].items.map((x) => x.source).join(","), "day,menaion");
  check("16 Nov: no Sunday hymns on a weekday", d16.troparia.length, 1);
}
// 25 Nov (weekday): the order ODS vol. III prints is not applied here without the
// order; with it the sheet lists three Epistles.
{
  const { ods3OrderFor } = await import("../src/data/ods_v3/orders.js");
  const s25 = servicesOf((await loadMenaionV2Month("11"))["11-25"], "11-25")[0];
  const d25 = buildBulletinDay({ liturgicalData: { dow: 3, season: "apodosis", tone: 8, feastPeriod: { periodType: "apodosis", feast: { forLord: false } } }, service: s25,
    entrance: entrancePlan(s25.c, s25.path, { order: ods3OrderFor(s25.path, 3) }), liturgy: liturgyPlan(s25.c, s25.path),
    dailyReading: { e: "2 Thessalonians 2:1-12", g: "Luke 12:48-59" }, sources: { hymnText } });
  check("25 Nov epistles (ODS vol. III: day, feast, hieromartyrs)", d25.readings.groups[0].items.length, 3);
  check("25 Nov troparia: the feast's, then the saints'", d25.troparia.map((x) => x.label.slice(0, 12)).join(" | "), "Of the feast | Of the comme");
}

// ─── The counter-case: same rank, no Menaion readings ──────────────────────
// Two simple services under the same section, set on the same Sunday: 15 Nov
// (the holy Martyrs Gurias, Samonas and Abibus) prints an AT LITURGY section with
// its own Epistle and Gospel; 27 Sept (the holy Martyr Callistratus) prints none.
// Same rank, same rule, opposite outcome, which is the whole point: what is read
// is decided by what the service prints, not by its rank.
console.log("\nRank does not decide — the Menaion's contents do");
{
  const sunday = { dow: 0, season: "sunday", tone: 5 };
  const dailyReading = { e: "Romans 5:1-10", g: "Matthew 6:22-33" };
  const dayOf = (svc) => buildBulletinDay({ liturgicalData: sunday, service: svc, entrance: entrancePlan(svc.c, svc.path, {}),
    liturgy: liturgyPlan(svc.c, svc.path), dailyReading, sources: { hymnText } }).readings;
  const sWith = servicesOf((await loadMenaionV2Month("11"))["11-15"], "11-15")[0];
  const sNone = servicesOf((await loadMenaionV2Month("09"))["09-27"], "09-27")[0];
  checkTruthy("11-15 and 09-27 services present", sWith && sNone);
  check("the two share a rank", sNone.c.rank, sWith.c.rank);
  check("the two share a section", sNone.c.fekula_section, sWith.c.fekula_section);
  check("09-27 prints no epistle", liturgyPlan(sNone.c, sNone.path).epistles.length, 0);
  check("09-27 prints no gospel", liturgyPlan(sNone.c, sNone.path).gospels.length, 0);
  const rWith = dayOf(sWith), rNone = dayOf(sNone);
  check("both cite the same rule", rNone.rule.section, rWith.rule.section);
  check("11-15 reads two epistles", rWith.groups[0].items.length, 2);
  check("09-27 reads one epistle", rNone.groups[0].items.length, 1);
  check("09-27 reads one gospel", rNone.groups[1].items.length, 1);
  check("09-27 has no Menaion readings", rNone.hasMenaionReadings, false);
  console.log(`  both are ${sWith.c.rank}, both §${sWith.c.fekula_section}, both cite ${rWith.rule.section}: ` +
              `11-15 reads ${rWith.groups[0].items.length} epistles, 09-27 reads ${rNone.groups[0].items.length}.`);
}

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
  console.log("\nCOMMEMORATION\n  " + day.saint);
  console.log("\nREADINGS AT THE LITURGY");
  for (const g of resolved.groups) {
    console.log("  " + g.label);
    for (const it of g.items) console.log(`    ${it.label.padEnd(34)} ${it.ref}`);
  }
  console.log(`  ${resolved.rule.section}: “${resolved.rule.quote}”`);
  console.log("\nTROPARIA");
  for (const h of day.troparia) console.log(`  ${h.label}, Tone ${h.tone}\n    ` + h.text.slice(0, 150) + "…");
  console.log("\nKONTAKIA");
  for (const h of day.kontakia) console.log(`  ${h.label}, Tone ${h.tone}\n    ` + h.text.slice(0, 150) + "…");
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
