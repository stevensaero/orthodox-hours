#!/usr/bin/env node
// tools/test_liturgy_assembly.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Divine Liturgy assembler gate — liturgy_assembler_spec.md §1.3, §2.1, §2.3.
//
// Runs assembleLiturgy() over both variants and every view-layer combination
// and asserts the Phase 1 contract:
//   • exactly one liturgy_section per registry movement, in order, id mv-<id>
//   • every unit is accounted for: visible, folded into a liturgy_hidden run,
//     or an absorbed movement-opening heading — never dropped silently
//   • teaching rubrics are visible in every view (decision 1)
//   • nothing hidden when both layers are on; hidden runs never cross a
//     section boundary
//   • no page number ever reaches an element (decision 6)
//   • Basil view carries the override / insert tags; Chrysostom carries none
//   • insertAnchors() maps every Basil-only insert to a shared unit
//
// …and the Phase 2 contract (hooks, spec §3) over real September entries:
//   • prokeimenon / Alleluia / communion: the day's, then the Menaion's when
//     the printed service has one; Saturday inverts; tone on the section row
//   • readings via readingsForDay(), blanks filled (tone, epistle title,
//     evangelist), Trisagion replacement, zadostoinik (instead_of_* first,
//     zadostoinik_* fallback), departed litany gated, dismissal replaced
//
// Usage:  node tools/test_liturgy_assembly.mjs
// ─────────────────────────────────────────────────────────────────────────────

import { assembleLiturgy, insertAnchors } from "../src/lib/liturgy-assembler.js";
import { getLiturgy, BASIL_OVERRIDES, BASIL_INSERTS } from "../src/data/liturgy/chrysostom.js";
import { MOVEMENT_ORDER, TEACHING_RUBRICS } from "../src/data/liturgy/registry.js";
import { readingsForDay } from "../src/lib/readings.js";
import september from "../src/data/menaion/september.js";
import * as OctoV2 from "../src/data/octoechos_v2/adapter.js";

let failures = 0;
const check = (ok, msg) => { if (!ok) { failures += 1; console.log(`  FAIL ${msg}`); } };

const VIEWS = [
  { rubrics: false, quiet: false }, { rubrics: true, quiet: false },
  { rubrics: false, quiet: true },  { rubrics: true, quiet: true },
];

for (const variant of ["chrysostom", "basil"]) {
  const units = getLiturgy(variant);
  // Movement-opening ALL-CAPS headings are absorbed by the section header —
  // the one deliberate omission (assembler toElement()).
  const isMajor = (t) => { const x = String(t).replace(/[*\s]/g, ""); return x.length > 0 && x === x.toUpperCase() && /[A-Z]/.test(x); };
  const openingHeadings = new Set();
  let last = null;
  for (const u of units) {
    if (u.movement !== last && u.speaker === "heading" && isMajor(u.text)) openingHeadings.add(u.id);
    last = u.movement;
  }
  for (const view of VIEWS) {
    const label = `${variant} rubrics=${view.rubrics} quiet=${view.quiet}`;
    const els = assembleLiturgy({ units, variant, view });

    const sections = els.filter(e => e.type === "liturgy_section");
    check(sections.length === MOVEMENT_ORDER.length, `${label}: ${sections.length} sections, expected ${MOVEMENT_ORDER.length}`);
    check(sections.every((s, i) => s.id === `mv-${MOVEMENT_ORDER[i]}`), `${label}: section order/ids drift from registry`);

    const visible = els.filter(e => e.type === "liturgy_unit");
    const hiddenRuns = els.filter(e => e.type === "liturgy_hidden");
    const hidden = hiddenRuns.flatMap(r => r.hidden);
    const seen = new Set([...visible, ...hidden].map(e => e.unitId));
    const missing = units.filter(u => !seen.has(u.id) && !openingHeadings.has(u.id));
    check(missing.length === 0, `${label}: ${missing.length} units dropped (${missing.slice(0, 3).map(u => u.id).join(", ")})`);
    check(visible.length + hidden.length + openingHeadings.size === units.length, `${label}: unit accounting off`);

    for (const id of TEACHING_RUBRICS) {
      check(visible.some(e => e.unitId === id), `${label}: teaching rubric ${id} not visible`);
    }
    if (view.rubrics && view.quiet) check(hiddenRuns.length === 0, `${label}: hidden runs with both layers on`);
    for (const r of hiddenRuns) {
      check(r.hidden.every(h => h.movement === r.movement), `${label}: hidden run ${r.id} crosses a section`);
      check(r.rubrics + r.quiet === r.hidden.length, `${label}: hidden run ${r.id} counts drift`);
    }

    const leaked = JSON.stringify(els);
    check(!leaked.includes("source_page") && !leaked.includes("basil_page") && !leaked.includes("basilPage"),
      `${label}: page number reached an element`);

    const tagged = [...visible, ...hidden].filter(e => e.variantTag);
    if (variant === "chrysostom") check(tagged.length === 0, `${label}: Chrysostom carries variant tags`);
    else {
      const expected = Object.keys(BASIL_OVERRIDES).filter(id => !openingHeadings.has(id)).length + Object.keys(BASIL_INSERTS).length;
      check(tagged.length === expected, `${label}: ${tagged.length} Basil tags, expected ${expected}`);
      check(tagged.filter(e => e.variantTag === "insert").length === Object.keys(BASIL_INSERTS).length, `${label}: insert tag count`);
    }
    for (const e of [...visible, ...hidden]) {
      check(typeof e.text === "string" && e.text.length > 0, `${label}: ${e.unitId} blank text`);
      check(["heading", "subheading", "rubric", "line"].includes(e.kind), `${label}: ${e.unitId} bad kind ${e.kind}`);
    }
  }
}

// insert anchors
const anchors = insertAnchors(getLiturgy("basil"));
const chrysIds = new Set(getLiturgy("chrysostom").map(u => u.id));
for (const id of Object.keys(BASIL_INSERTS)) {
  check(anchors[id] && chrysIds.has(anchors[id]), `insert ${id} has no shared anchor`);
}

// empty input
check(assembleLiturgy({ units: [] }).length === 0, "empty units → empty elements");

// ── Phase 2: hooks over real data ───────────────────────────────────────────
await OctoV2.loadV2Tone(7);
const entry = (k) => { const e = september[k]; return Array.isArray(e) ? e[0] : e; };
const sources = {
  sunProkeimenon: (t) => OctoV2.getV2LiturgyProkeimenon(t),
  sunAlleluia: (t) => OctoV2.getV2LiturgyAlleluia(t),
  dailyPropers: (k) => OctoV2.getV2DailyLiturgyPropers(k),
  readingsForDay,
  dismissal: (author) => ({ type: "fixed", label: "Dismissal", rubric: "Priest:", text: "May Christ our true God… (" + author + ")" }),
};
const units = getLiturgy("chrysostom");
const run = (ld, e, extra = {}) => assembleLiturgy({ units, view: { rubrics: true, quiet: true }, ctx: {
  liturgicalData: ld, menaionEntry: e, pentEntry: null,
  dailyReading: extra.dailyReading || { e: "Romans 5:1-10 (§88)", g: "Matthew 6:22-33 (§18)" },
  feastReading: e && (e.feast_e || e.feast_g) ? { e: e.feast_e, g: e.feast_g } : null, sources } });
const byId = (els, id) => els.find(x => x.id === id);
const section = (els, m) => byId(els, "mv-" + m);
const textOf = (els, unitId) => { const x = els.find(y => y.unitId === unitId); return x ? x.text : null; };

// 1. Sunday, six-stichera saint with an AT LITURGY section (09-20), tone 7
{
  const e = entry("09-20");
  const els = run({ dow: 0, isSunday: true, season: "afterfeast", tone: 7, feastPeriod: { feast: { name: "Elevation of the Cross" } } }, e);
  const prok = els.filter(x => x.type === "prokeimenon");
  // 09-20 prints two Menaion prokeimena (feast in Tone 7, saint in Tone 4): Sunday + both
  check(prok.length === 3, `09-20 Sunday: ${prok.length} prokeimena, expected 3 (Sunday + feast + saint)`);
  check(prok[0] && /Tone 7/.test(prok[0].label) && /Sunday Octoechos/.test(prok[0].source), "09-20 Sunday: resurrectional prokeimenon first");
  check(section(els, "prokeimenon").toneLabel === "Tone 7 · Tone 7 · Tone 4", "09-20: prokeimenon row tone label " + section(els, "prokeimenon").toneLabel);
  check(/Seventh Tone/.test(textOf(els, "pk-06")), "09-20: pk-06 blank filled");
  check(!/___/.test(textOf(els, "al-02")), "09-20: al-02 blank filled");
  check(byId(els, "lit-e-0") && byId(els, "lit-e-0").readingRef, "09-20: epistle element with readingRef");
  check(byId(els, "lit-e-1") && byId(els, "lit-e-1").source === "Menaion", "09-20: Menaion epistle second");
  check(/Matthew/.test(textOf(els, "go-11")), "09-20: evangelist filled in go-11");
  check(/Who didst rise from the dead/.test(textOf(els, "le-10")), "09-20: Sunday entrance clause");
  check(!els.some(x => x.movement === "litany_departed" && x.type === "liturgy_unit"), "09-20: departed litany skipped on Sunday");
  check(byId(els, "lit-departed-omitted"), "09-20: departed omission shown");
  check(byId(els, "lit-zadostoinik"), "09-20: zadostoinik present (afterfeast, legacy fields)");
  check(byId(els, "lit-di-08") && /basil|chrysostom/.test(byId(els, "lit-di-08").text), "09-20: dismissal replaced");
  check(textOf(els, "ef-09") && /Praise the Lord/.test(textOf(els, "ef-09")), "09-20: Sunday communion hymn unchanged");
  check(els.filter(x => /^lit-communion-/.test(x.id)).length === 1, "09-20: one Menaion communion hymn appended");
}
// 2. Weekday (Monday), same entry shape — day propers from the Octoechos, then the Menaion
{
  const e = entry("09-06");
  const els = run({ dow: 1, isSunday: false, season: "ordinary", tone: 7 }, e);
  const prok = els.filter(x => x.type === "prokeimenon");
  check(prok.length === 2 && /Monday/.test(prok[0].note), "09-06 Monday: weekday prokeimenon first, then Menaion");
  check(/Who art wondrous in the saints/.test(textOf(els, "le-10")), "09-06: weekday entrance clause");
  check(els.some(x => x.movement === "litany_departed" && x.type === "liturgy_unit"), "09-06: departed litany present on a weekday");
  check(textOf(els, "ef-09") && !/Praise the Lord from the heavens/.test(textOf(els, "ef-09")), "09-06: weekday communion hymn replaces the Sunday text");
  check(!byId(els, "lit-zadostoinik") && !byId(els, "lit-zadostoinik-missing"), "09-06: no zadostoinik");
}
// 3. Saturday: Menaion first
{
  const e = entry("09-06");
  const els = run({ dow: 6, isSunday: false, season: "ordinary", tone: 7 }, e);
  const prok = els.filter(x => x.type === "prokeimenon");
  check(prok.length === 3 && /Menaion/.test(prok[0].source), "Saturday: Menaion prokeimenon first (§2A), then day + departed");
  check(byId(els, "lit-e-0").source === "Menaion", "Saturday: Menaion epistle first");
}
// 4. Great Feast (09-14): Trisagion replaced, festal antiphons flagged, zadostoinik via instead_of_*
{
  const e = entry("09-14");
  const els = run({ dow: 1, isSunday: false, season: "great_feast", tone: 7, feastPeriod: { feast: { name: "Elevation of the Cross" } } }, e);
  check(/We venerate Thy Cross/.test(textOf(els, "tr-01")), "09-14: Trisagion replaced");
  check(!els.some(x => x.unitId === "tr-03"), "09-14: tr-03 dropped under the substitute");
  check(byId(els, "lit-antiphons-festal") && section(els, "antiphon_1").unresolved, "09-14: festal antiphons flagged unresolved");
  check(byId(els, "lit-zadostoinik") && /legacy/.test(byId(els, "lit-zadostoinik").note || ""), "09-14: zadostoinik via the legacy zadostoinik_* fallback");
  check(!els.some(x => x.movement === "litany_departed" && x.type === "liturgy_unit"), "09-14: departed litany skipped on a feast");
  check(byId(els, "lit-departed-omitted"), "09-14: departed omission shown");
  check(section(els, "little_entrance").unresolved && byId(els, "lit-le-clause"), "09-14: feast-of-the-Lord entrance clause flagged (no V1 field)");
}
// 4b. A day encoded with the instead_of_* pair (whichever September service carries it), and a Theotokos-feast entrance clause
{
  const withNew = Object.values(september).flatMap(e => Array.isArray(e) ? e : [e]).find(e => e.instead_of_it_is_truly_meet_refrain);
  check(!!withNew, "a September service carries instead_of_it_is_truly_meet_refrain");
  const els = run({ dow: 3, isSunday: false, season: "apodosis", tone: 7, feastPeriod: { feast: { name: "Nativity of the Theotokos" } } }, withNew || entry("09-12"));
  check(byId(els, "lit-zadostoinik") && !/legacy/.test(byId(els, "lit-zadostoinik").note || ""), "instead_of_* fields read first");
  check(/Through the prayers of the Theotokos/.test(textOf(els, "le-10")), "Theotokos-feast entrance clause");
}
// 5. Simple saint with no AT LITURGY section (09-27): day only
{
  const e = entry("09-27");
  const els = run({ dow: 2, isSunday: false, season: "ordinary", tone: 7 }, e);
  const prok = els.filter(x => x.type === "prokeimenon");
  check(prok.length === 1 && /Tuesday/.test(prok[0].note), "09-27 Tuesday: day prokeimenon only");
  check(els.filter(x => /^lit-e-/.test(x.id)).length === 1, "09-27: day epistle only");
  check(els.filter(x => /^lit-communion-/.test(x.id)).length === 1, "09-27: day communion only");
}
// 6. No ctx → Phase 1 skeleton, no hooks
{
  const els = assembleLiturgy({ units });
  check(!els.some(x => x.type === "prokeimenon" || x.type === "omission"), "no ctx: fixed skeleton only");
}
// Every replaced/filled line keeps its unitId and never leaks a blank
for (const els of [run({ dow: 0, isSunday: true, season: "sunday", tone: 7 }, entry("09-20"))]) {
  for (const id of ["pk-06", "al-02", "ep-02", "go-02", "go-04", "go-11", "le-10"]) {
    const t = textOf(els, id);
    check(t && !/___/.test(t), `resolved line ${id} still carries a blank`);
  }
}

const overview = assembleLiturgy({ units: getLiturgy("chrysostom") }).filter(e => e.type === "liturgy_section" && e.core).length;
console.log(`liturgy assembly: ${MOVEMENT_ORDER.length} movements (${overview} core), 2 variants × ${VIEWS.length} views, ${Object.keys(BASIL_INSERTS).length} insert anchors, 6 hook scenarios`);
console.log(failures ? `${failures} failure(s)` : "OK");
process.exit(failures ? 1 : 0);
