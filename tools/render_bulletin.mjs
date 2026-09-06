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

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Gold the asterisk phrase-marks, as the component does.
const marks = (text) => esc(text).split(/(\*+)/)
  .map((p) => (/^\*+$/.test(p) ? `<span class="oh-star">${p}</span>` : p)).join("");

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

// ── markup ──────────────────────────────────────────────────────────────────
const masthead = (title, sub, chip) => `
  <div class="oh-masthead">
    <div class="oh-eyebrow">${esc(MASTHEAD)}</div>
    <div class="oh-date">${esc(title)}</div>
    ${sub ? `<div class="oh-layer">${esc(sub)}</div>` : ""}
    ${chip ? `<div class="oh-chip">${esc(chip)}</div>` : ""}
  </div>`;

const hymn = (h) => !h.text ? "" : `
  <div class="oh-hymn">
    <div class="oh-hymn-label">${esc(h.label)}${h.tone ? `<em>, Tone ${h.tone}</em>` : ""}</div>
    <p class="oh-hymn-text">${marks(h.text)}</p>
  </div>`;

const readingsBlock = `
  <div class="oh-h">Readings at the Liturgy</div>
  ${readings.groups.map((g) => `
    <div class="oh-slot">
      <div class="oh-slot-label">${esc(g.label)}</div>
      ${g.items.map((it) => `
        <div class="oh-reading-row">
          <span class="oh-reading-ref">${esc(it.ref)}</span>
          <span class="oh-reading-of">${esc(it.label)}</span>
        </div>`).join("")}
    </div>`).join("")}
  <div class="oh-cite">${esc(readings.rule.section)}: “${esc(readings.rule.quote)}”${
    readings.order === "menaion-first"
      ? " The Menaion’s readings precede the day’s on a Saturday." : ""}</div>`;

const propersSheet = `
<div class="oh-sheet">
  ${masthead(dateLabel, layer, [tone ? `Tone ${tone}` : null, rankLabel].filter(Boolean).join(" · "))}
  <div class="oh-twocol">
    <div class="oh-h">Commemoration</div>
    <p class="oh-comm">${esc(entry.saint)}</p>
    ${readingsBlock}
    ${troparia.length ? '<div class="oh-h">Troparia</div>' : ""}
    ${troparia.map(hymn).join("")}
    ${kontakia.length ? '<div class="oh-h">Kontakia</div>' : ""}
    ${kontakia.map(hymn).join("")}
    ${extras.length ? '<div class="oh-h">Also Appointed</div>' : ""}
    ${extras.map(hymn).join("")}
  </div>
  <div class="oh-foot">
    <span>Assembled per Fekula &amp; Williams, The Order of Divine Services, 2nd ed. rev.</span>
    <span>proof sheet</span>
  </div>
</div>`;

let readingsSheet = "";
if (wantReadings) {
  const lections = readingsInOrder(readings).map((r) => {
    const spans = parseRefString(r.ref, { strict: true });
    if (!spans) return `<div class="oh-lection"><div class="oh-lection-ref oh-err">${esc(r.slotLabel)} · ${esc(r.ref)}</div><p class="oh-lection-intro oh-err">Not printed: unresolved reference.</p></div>`;
    const books = {};
    for (const s of spans) books[s.book] = loadBook(s.book);
    const { verses, missing } = spansToVerses(spans, books);
    if (missing.length) return `<div class="oh-lection"><div class="oh-lection-ref oh-err">${esc(r.slotLabel)} · ${esc(r.ref)}</div><p class="oh-lection-intro oh-err">Not printed: ${esc(missing[0].reason)}. Left out rather than set short.</p></div>`;
    const body = verses.map((v) =>
      `${v.startsChapter ? '<span class="oh-star">¶ </span>' : ""}<sup class="oh-vnum">${v.verse}</sup>${esc(v.text)} `).join("");
    return `
      <div class="oh-lection">
        <div class="oh-lection-ref">${esc(r.slotLabel)} · ${esc(spans.map(spanLabel).join(" · "))} · ${esc(r.label)}</div>
        <p class="oh-lection-intro">${esc(readingIntro(spans[0].book, spans[0].bookName) || "")}</p>
        <p class="oh-lection-body">${body}</p>
      </div>`;
  }).join("");

  readingsSheet = `
<div class="oh-sheet">
  ${masthead("The Readings", `${dateLabel} · ${layer}`, null)}
  <div class="oh-twocol">${lections}</div>
  <div class="oh-foot">
    <span>Brenton Septuagint (OT) · King James Version 2006 (NT), public domain</span>
    <span>proof sheet</span>
  </div>
</div>`;
}

process.stdout.write(`<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Bulletin — ${esc(dateLabel)}</title>
<style>
  html, body { margin: 0; padding: 0; background: #6b6b6b; }
  ${BULLETIN_CSS}
  @media screen { .oh-sheet { margin: 24px auto; } }
</style>
</head><body>
${propersSheet}
${readingsSheet}
</body></html>
`);
