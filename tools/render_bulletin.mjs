#!/usr/bin/env node
/**
 * render_bulletin.mjs
 * ===================
 * Renders the bulletin for a date as a standalone HTML file, using the real
 * data path and the real stylesheet (src/lib/bulletin-css.js — imported, not
 * copied, so it cannot drift from what the component renders).
 *
 * WHY. The layout of a printed sheet cannot be judged from a unit test. v0.45.0
 * shipped with body type at roughly 6pt because the sheet had been sized for
 * its on-screen preview and nobody had looked at a page. This produces
 * something anyone can open in a browser and print, without npm or a dev
 * server, and it is the artifact to check before shipping a layout change.
 *
 * USAGE
 *     node tools/render_bulletin.mjs 2026-09-06 > bulletin.html
 *     node tools/render_bulletin.mjs 2026-09-06 --readings > bulletin.html
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRefString, spanLabel } from "../src/lib/scripture-ref.js";
import { spansToVerses, readingIntro } from "../src/lib/scripture-text.js";
import { readingsForDay, readingsInOrder } from "../src/lib/readings.js";
import { paginate, buildPropersFlow, buildReadingsFlow } from "../src/lib/bulletin-layout.js";
import { renderPage, renderMasthead } from "../src/lib/bulletin-html.js";
import { BULLETIN_CSS } from "../src/lib/bulletin-css.js";
import { hymnText } from "../src/lib/hymn-entry.js";
import * as OctoV2 from "../src/data/octoechos_v2/adapter.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MASTHEAD = "Orthodox Daily Hours · A Liturgical Study Tool";

const argv = process.argv.slice(2);
const dateArg = argv.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || "2026-09-06";
const wantReadings = argv.includes("--readings");

const MONTHS = { "05": "may", "06": "june", "07": "july", "09": "september" };
const [yy, mm, dd] = dateArg.split("-");
const monthFile = MONTHS[mm];
if (!monthFile) {
  console.error(`No Menaion data for month ${mm}. Encoded months: ${Object.values(MONTHS).join(", ")}.`);
  process.exit(1);
}
const menaion = (await import(`../src/data/menaion/${monthFile}.js`)).default;
const entry = menaion[`${mm}-${dd}`] && (Array.isArray(menaion[`${mm}-${dd}`])
  ? menaion[`${mm}-${dd}`][0] : menaion[`${mm}-${dd}`]);
if (!entry) { console.error(`No entry encoded for ${mm}-${dd}.`); process.exit(1); }

function loadBook(id) {
  const file = path.join(ROOT, "public", "bible", `${id.toLowerCase()}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null;
}

// ── the day ─────────────────────────────────────────────────────────────────
const date = new Date(`${dateArg}T12:00:00`);
const dow = date.getDay();
const isSunday = dow === 0;
const tone = Number(process.env.OH_TONE || 5);   // 9/6/2026 is Tone 5
await OctoV2.loadV2Tone(tone);

const readings = readingsForDay({
  liturgicalData: { dow, season: isSunday ? "sunday" : "ordinary", tone },
  menaionEntry: entry,
  dailyReading: isSunday
    ? { e: "2 Corinthians 1:21-2:4", g: "Matthew 22:1-14" }
    : null,
  feastReading: entry.feast_e || entry.feast_g
    ? { e: entry.feast_e, g: entry.feast_g } : null,
});

const troparia = [];
const kontakia = [];
const extras = [];
if (isSunday) {
  const t = OctoV2.getV2Troparion(tone);
  if (t) troparia.push({ label: "Of the Resurrection", tone, text: hymnText(t) });
}
if (entry.troparion) troparia.push({ label: "Of the commemoration", tone: entry.troparion.tone, text: hymnText(entry.troparion) });
if (isSunday) {
  const th = OctoV2.getV2DismissalTheotokion(tone);
  if (th) troparia.push({ label: "Dismissal Theotokion", tone, text: hymnText(th) });
}
if (isSunday) {
  const k = OctoV2.getV2Kontakion(tone);
  if (k) kontakia.push({ label: "Of the Resurrection", tone, text: hymnText(k) });
}
const mk = entry.kontakion_ode6 || entry.kontakion_ode3;
if (mk) kontakia.push({ label: "Of the commemoration", tone: mk.tone, text: hymnText(mk) });
if (entry.aposticha_glory) extras.push({ label: "Glory at the Aposticha", tone: entry.aposticha_glory.tone, text: hymnText(entry.aposticha_glory) });
if (entry.exapostilarion) extras.push({ label: "Exapostilarion", text: hymnText(entry.exapostilarion) });
if (entry.prokeimenon_text) extras.push({ label: "Prokeimenon of the commemoration", tone: entry.prokeimenon_tone, text: entry.prokeimenon_text });
if (entry.communion_verse) extras.push({ label: "Communion verse", text: entry.communion_verse });

const dateLabel = date.toLocaleDateString("en-US",
  { weekday: "long", year: "numeric", month: "long", day: "numeric" });
const rankLabel = [
  entry.rank && entry.rank.replace(/_/g, "-").replace(/\b\w/g, (c) => c.toUpperCase()),
  entry.fekula_section && `Fekula §${entry.fekula_section}`,
].filter(Boolean).join(" · ");
const layer = isSunday ? "Fourteenth Sunday after Pentecost" : date.toLocaleDateString("en-US", { weekday: "long" });

// ── pagination and markup ───────────────────────────────────────────────────
const day = {
  saint: entry.saint,
  secondSaint: null,
  readings,
  troparia, kontakia, extras,
};

const propers = paginate(buildPropersFlow(day));

let lections = [];
if (wantReadings) {
  lections = readingsInOrder(readings).map((r) => {
    const spans = parseRefString(r.ref, { strict: true });
    if (!spans) return { slotLabel: r.slotLabel, ref: r.ref, itemLabel: r.label,
                         error: "the reference could not be resolved." };
    const books = {};
    for (const sp of spans) books[sp.book] = loadBook(sp.book);
    const { verses, missing } = spansToVerses(spans, books);
    if (missing.length) return { slotLabel: r.slotLabel, ref: r.ref, itemLabel: r.label,
                                 error: `${missing[0].reason}.` };
    return {
      slotLabel: r.slotLabel, itemLabel: r.label,
      label: spans.map(spanLabel).join(" · "),
      intro: readingIntro(spans[0].book, spans[0].bookName),
      verses,
    };
  });
}
const readingPages = lections.length
  ? paginate(buildReadingsFlow(lections), { startPage: propers.totalPages + 1 })
  : { pages: [], totalPages: 0, overflow: [] };

const totalPages = propers.totalPages + readingPages.totalPages;

for (const o of [...propers.overflow, ...readingPages.overflow]) {
  process.stderr.write(`warning: "${o.label}" is ${(o.heightPt / 72).toFixed(2)}in, ` +
    `taller than a ${(o.columnHeightPt / 72).toFixed(2)}in column\n`);
}

const propersMast = renderMasthead({
  eyebrow: MASTHEAD, title: dateLabel, sub: layer,
  chip: [tone ? `Tone ${tone}` : null, rankLabel].filter(Boolean).join(" · "),
});
const readingsMast = renderMasthead({
  eyebrow: MASTHEAD, title: "The Readings", sub: `${dateLabel} · ${layer}`, chip: null,
});

const sheets = [
  ...propers.pages.map((page) => renderPage({
    page, totalPages, masthead: propersMast,
    footerLeft: "Assembled per Fekula & Williams, The Order of Divine Services, 2nd ed. rev.",
  })),
  ...readingPages.pages.map((page) => renderPage({
    page, totalPages, masthead: readingsMast,
    footerLeft: "Brenton Septuagint (OT) · King James Version 2006 (NT), public domain",
  })),
].join("\n");

process.stdout.write(`<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Bulletin — ${dateLabel}</title>
<style>
  html, body { margin: 0; padding: 0; background: #6b6b6b; }
  ${BULLETIN_CSS}
</style>
</head><body>
${sheets}
</body></html>
`);
