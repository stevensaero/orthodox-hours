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
import { readingsInOrder } from "../src/lib/readings.js";
import { loadMenaionV2Month } from "../src/data/menaion_v2/index.js";
import { servicesOf, entrancePlan, liturgyPlan } from "../src/data/menaion_v2/adapter.js";
import { ods3OrderFor } from "../src/data/ods_v3/orders.js";
import { buildBulletinDay } from "../src/lib/bulletin-day.js";
import { paginateBest, buildPropersFlow, buildReadingsFlow } from "../src/lib/bulletin-layout.js";
import { renderPage, renderMasthead } from "../src/lib/bulletin-html.js";
import { BULLETIN_CSS } from "../src/lib/bulletin-css.js";
import { hymnText } from "../src/lib/hymn-entry.js";
import * as OctoV2 from "../src/data/octoechos_v2/adapter.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MASTHEAD = "Orthodox Daily Hours · A Liturgical Study Tool";

const argv = process.argv.slice(2);
const dateArg = argv.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || "2026-09-06";
const wantReadings = argv.includes("--readings");

const [, mm, dd] = dateArg.split("-");
const monthData = await loadMenaionV2Month(mm);
const svc = monthData ? servicesOf(monthData[`${mm}-${dd}`], `${mm}-${dd}`)[0] : null;
if (!svc) { console.error(`The Menaion is not yet encoded for ${mm}-${dd}.`); process.exit(1); }

function loadBook(id) {
  const file = path.join(ROOT, "public", "bible", `${id.toLowerCase()}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null;
}

// ── the day ─────────────────────────────────────────────────────────────────
// Built by the tool's own code (src/lib/bulletin-day.js), as the app builds it.
const date = new Date(`${dateArg}T12:00:00`);
const dow = date.getDay();
const isSunday = dow === 0;
const tone = Number(process.env.OH_TONE || 5);   // 9/6/2026 is Tone 5
await OctoV2.loadV2Tone(tone);

const built = buildBulletinDay({
  liturgicalData: { dow, season: isSunday ? "sunday" : "ordinary", tone }, service: svc,
  entrance: entrancePlan(svc.c, svc.path, { order: ods3OrderFor(svc.path, dow) }), liturgy: liturgyPlan(svc.c, svc.path),
  dailyReading: isSunday ? { e: "2 Corinthians 1:21-2:4", g: "Matthew 22:1-14" } : null,
  sources: { resTroparion: (t) => OctoV2.getV2Troparion(t), sunKontakion: (t) => OctoV2.getV2Kontakion(t),
             dismissalTheotokion: (t) => OctoV2.getV2ResDismissalTheotokion(t), hymnText },
});
const { readings, rankLabel } = built;

const dateLabel = date.toLocaleDateString("en-US",
  { weekday: "long", year: "numeric", month: "long", day: "numeric" });
const layer = isSunday ? "Fourteenth Sunday after Pentecost" : date.toLocaleDateString("en-US", { weekday: "long" });

// ── pagination and markup ───────────────────────────────────────────────────
const day = built;

const propers = paginateBest(buildPropersFlow(day));

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
  ? paginateBest(buildReadingsFlow(lections), { startPage: propers.totalPages + 1 })
  : { pages: [], totalPages: 0, overflow: [], slackPt: 0 };

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
