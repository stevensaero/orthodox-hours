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
// …and the Phase 3 contract (liturgy-entrance.js): Beatitude troparia counted
// and interleaved per Fekula ch.1/ch.2, the Little Entrance order by day ×
// rank × feast period × temple, with the temple selector when none is set.
//
// Usage:  node tools/test_liturgy_assembly.mjs
// ─────────────────────────────────────────────────────────────────────────────

import { loadMenaionV2Month } from '../src/data/menaion_v2/index.js';
import { servicesOf, liturgyPlan, entrancePlan } from '../src/data/menaion_v2/adapter.js';
import { assembleLiturgy, insertAnchors } from "../src/lib/liturgy-assembler.js";
import { resolveLiturgyPropers, zadostoinikFor } from "../src/lib/liturgy-propers.js";
import { getLiturgy, BASIL_OVERRIDES, BASIL_INSERTS } from "../src/data/liturgy/chrysostom.js";
import { MOVEMENT_ORDER, TEACHING_RUBRICS } from "../src/data/liturgy/registry.js";
import { readingsForDay } from "../src/lib/readings.js";
import * as OctoV2 from "../src/data/octoechos_v2/adapter.js";
import { DAILY_TROPARIA } from "../src/data/liturgy/daily_troparia.js";
import pentecostarion from "../src/data/pentecostarion.js";

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
const FIXED_K = { departed: { tone: 8, text: "With the saints give rest…" }, protectress: { tone: null, text: "O protection of Christians…" } };
const TEMPLES = {
  lord: { type: "lord", label: "Holy Cross", troparion: { tone: 1, text: "Save, O Lord, Thy people…" }, kontakion: { tone: 4, text: "O Thou Who wast lifted up…" } },
  theotokos: { type: "theotokos", label: "Dormition", troparion: { tone: 1, text: "In giving birth…" }, kontakion: { tone: 2, text: "Neither the tomb…" } },
  saint: { type: "saint", label: "St. Nicholas", troparion: { tone: 4, text: "The truth of things…" }, kontakion: { tone: 3, text: "In Myra…" } },
};
const DOW_K = { 1: [{ label: "Kontakion — Bodiless Hosts", tone: 2, text: "Supreme commanders…" }], 2: [{ label: "Kontakion — Forerunner", tone: 2, text: "O Prophet…" }], 3: [{ label: "Kontakion — the Holy Cross", tone: 4, text: "Lifted up…" }],
  4: [{ label: "Kontakion — Apostles", tone: 2, text: "Thou hast taken…" }, { label: "Kontakion — St Nicholas", tone: 3, text: "In Myra…" }], 5: [{ label: "Kontakion — the Holy Cross", tone: 4, text: "Lifted up…" }], 6: [{ label: "Kontakion of the Martyrs (Saturday)", tone: 8, text: "To Thee, O Lord, the Planter…" }] };
const baseSources = {
  sunProkeimenon: (t) => OctoV2.getV2LiturgyProkeimenon(t),
  sunAlleluia: (t) => OctoV2.getV2LiturgyAlleluia(t),
  dailyPropers: (k) => OctoV2.getV2DailyLiturgyPropers(k),
  readingsForDay,
  dismissal: (author) => ({ type: "fixed", label: "Dismissal", rubric: "Priest:", text: "May Christ our true God… (" + author + ")" }),
  sundayTroparion: (t) => OctoV2.getV2Troparion(t),
  sundayKontakion: (t) => OctoV2.getV2Kontakion(t),
  dowKontakia: (d) => DOW_K[d] || [],
  dowTroparia: (d) => DAILY_TROPARIA[d] || [],
  departedKontakion: FIXED_K.departed, protectress: FIXED_K.protectress,
  sundayBeatitudes: (t) => OctoV2.resolveV2Ref(`tone${t}.liturgy.beatitudes`, t) || null,
  weekdayBeatitudes: (t, d) => OctoV2.resolveV2Ref(`tone${t}.liturgy_weekday.${d}.beatitudes`, t) || null,
};
const units = getLiturgy("chrysostom");
// The Menaion's sung propers and the "instead of It is truly meet" hymn come from
// the Menaion's service (liturgyPlan), as in the app. `e` in run() is the old-shape
// entry, which only the P+63 overlay still supplies; it is null in these scenarios.
const _v2 = { '09': await loadMenaionV2Month('09'), '11': await loadMenaionV2Month('11') };
const planOf = (key) => { const svc = servicesOf(_v2[key.slice(0, 2)][key], key)[0]; return liturgyPlan(svc.c, svc.path); };
// The Little Entrance / Beatitudes plan of a V2 service (default service, or by index in the file).
const ent = (key, index = null) => { const list = servicesOf(_v2[key.slice(0, 2)][key], key); const svc = index == null ? list[0] : list.find(x => x.index === index); return entrancePlan(svc.c, svc.path, {}); };
// A feast of the Lord whose page prints its own antiphons and a Trisagion substitute (no such day is in V2 yet).
const LORDS_FEAST = { section: "2F", rank: "great_feast", kind: "feast", saintName: "THE ELEVATION OF THE CROSS", lordsFeast: true,
  feast: { troparion: null, kontakion: null }, saints: { troparia: [{ role: "feast", source: "menaion", node: { tone: 1, text: "Save, O Lord, Thy people…", path: "x.troparion" } }], kontakia: [{ role: "feast", source: "menaion", node: { tone: 4, text: "O Thou Who wast lifted up…", path: "x.kontakion" } }] },
  alternates: [], rubrics: {}, beatitudes: { rubric: null, parts: [], items: [], total: 0, complete: false, note: null, antiphons: true }, trisagion: { text: "We venerate Thy Cross, O Master…", path: "x.liturgy.trisagion_replacement" }, notes: [] };
const run = (ld, e, extra = {}) => assembleLiturgy({ units, view: { rubrics: true, quiet: true }, ctx: {
  liturgicalData: ld, menaionEntry: e, menaionPlan: extra.plan || null, menaionEntrance: extra.ent || null, menaionRank: extra.ent ? extra.ent.rank : null, pentEntry: null,
  dailyReading: extra.dailyReading || { e: "Romans 5:1-10 (§88)", g: "Matthew 6:22-33 (§18)" },
  feastReading: e && (e.feast_e || e.feast_g) ? { e: e.feast_e, g: e.feast_g } : null,
  sources: { ...baseSources, temple: extra.temple === undefined ? TEMPLES.saint : extra.temple, feast: extra.feast || null } } });
const sources = baseSources;
const byId = (els, id) => els.find(x => x.id === id);
const section = (els, m) => byId(els, "mv-" + m);
const textOf = (els, unitId) => { const x = els.find(y => y.unitId === unitId); return x ? x.text : null; };

// 1. Sunday, six-stichera saint with an AT LITURGY section (09-20), tone 7
{
  const els = run({ dow: 0, isSunday: true, season: "afterfeast", tone: 7, feastPeriod: { feast: { name: "Elevation of the Cross" } } }, null, { plan: planOf('11-22') });
  const prok = els.filter(x => x.type === "prokeimenon");
  // 09-20 prints two Menaion prokeimena (feast in Tone 7, saint in Tone 4): Sunday + both
  // §1F1: afterfeast, Sunday and feast; "but if there be readings for the saint ... for Sunday and the saint". 11-22 prints the Apostles' readings.
  check(prok.length === 2, `Sunday in an afterfeast (V2 11-22 propers): ${prok.length} prokeimena, expected 2 (Sunday + saint, §1F1)`);
  check(prok[0] && /Tone 7/.test(prok[0].label) && /Sunday Octoechos/.test(prok[0].source), "09-20 Sunday: resurrectional prokeimenon first");
  check(section(els, "prokeimenon").toneLabel === "Tone 7 · Tone 8", "V2 11-22 propers: prokeimenon row tone label " + section(els, "prokeimenon").toneLabel);
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
  check(!els.some(x => x.unitId === "cm-07") && byId(els, "lit-zadostoinik"), "09-20: zadostoinik stands in place of It is truly meet — once");
  check(els.filter(x => /^lit-communion-/.test(x.id)).length === 1, "V2 11-22 propers: the saints' communion hymn appended (§1F1, Sunday and saint)");
}
// 2. Weekday (Monday), same entry shape — day propers from the Octoechos, then the Menaion
{
  const els = run({ dow: 1, isSunday: false, season: "ordinary", tone: 7 }, null, { plan: planOf('09-06') });
  const prok = els.filter(x => x.type === "prokeimenon");
  check(prok.length === 2 && /Monday/.test(prok[0].note), "09-06 Monday: weekday prokeimenon first, then Menaion");
  check(/Who art wondrous in the saints/.test(textOf(els, "le-10")), "09-06: weekday entrance clause");
  check(els.some(x => x.movement === "litany_departed" && x.type === "liturgy_unit"), "09-06: departed litany present on a weekday");
  check(!els.some(x => x.unitId === "ef-09") && byId(els, "lit-communion-0") && /of the day/.test(byId(els, "lit-communion-0").label), "09-06: weekday communion hymn stands in place of the Sunday text — once");
  check(!byId(els, "lit-zadostoinik") && !byId(els, "lit-zadostoinik-missing"), "09-06: no zadostoinik");
}
// 3. Saturday: Menaion first
{
  const els = run({ dow: 6, isSunday: false, season: "ordinary", tone: 7 }, null, { plan: planOf('09-06') });
  const prok = els.filter(x => x.type === "prokeimenon");
  check(prok.length === 3 && /Menaion/.test(prok[0].source), "Saturday: Menaion prokeimenon first (§2A), then day + departed");
  check(byId(els, "lit-e-0").source === "Menaion", "Saturday: Menaion epistle first");
}
// 4. Great Feast (09-14): Trisagion replaced, festal antiphons flagged, zadostoinik via instead_of_*
{
  const els = run({ dow: 1, isSunday: false, season: "great_feast", tone: 7, feastPeriod: { feast: { name: "Elevation of the Cross" } } }, null, { ent: LORDS_FEAST });
  check(!els.some(x => x.unitId === "tr-01") && byId(els, "lit-trisagion-sub") && /We venerate Thy Cross/.test(byId(els, "lit-trisagion-sub").text), "09-14: Trisagion replaced — once");
  check(!els.some(x => x.unitId === "tr-03"), "09-14: tr-03 dropped under the substitute");
  check(byId(els, "lit-antiphons-festal") && section(els, "antiphon_1").unresolved, "09-14: festal antiphons flagged unresolved");
  {
    // The hymn sung instead of It is truly meet comes from the feast's own service (11-21).
    const z = byId(run({ dow: 1, isSunday: false, season: "great_feast", tone: 7, feastPeriod: { feast: { name: "Entry of the Theotokos" } } }, null, { plan: planOf('11-21'), ent: ent('11-21') }), "lit-zadostoinik");
    check(z && /The angels, beholding the entry/.test(z.text) && !/legacy/.test(z.note || ""), "11-21: the refrain and irmos instead of It is truly meet, from the service");
  }
  check(!els.some(x => x.movement === "litany_departed" && x.type === "liturgy_unit"), "09-14: departed litany skipped on a feast");
  check(byId(els, "lit-departed-omitted"), "09-14: departed omission shown");
  check(section(els, "little_entrance").unresolved && byId(els, "lit-le-clause"), "09-14: feast-of-the-Lord entrance clause flagged (no V1 field)");
}
// 4b. The two old-shape field pairs, which the Pentecostarion still carries: instead_of_* is
// read first, zadostoinik_* as the fallback; and a Theotokos-feast entrance clause.
{
  const zNew = zadostoinikFor({ pentEntry: pentecostarion["39"] }), zOld = zadostoinikFor({ pentEntry: pentecostarion["35"] });
  check(zNew && zNew.refrain && zNew.legacyField === false, "instead_of_* fields read first (P+39)");
  check(zOld && zOld.refrain && zOld.legacyField === true, "zadostoinik_* fields read as the fallback (P+35)");
  const els = run({ dow: 3, isSunday: false, season: "apodosis", tone: 7, feastPeriod: { feast: { name: "Nativity of the Theotokos" } } }, null);
  check(/Through the prayers of the Theotokos/.test(textOf(els, "le-10")), "Theotokos-feast entrance clause");
}
// 5. Simple saint with no AT LITURGY section (09-27): day only
{
  const els = run({ dow: 2, isSunday: false, season: "ordinary", tone: 7 }, null);
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
// ── Phase 3: Little Entrance order and Beatitudes ───────────────────────────
const tk = (els) => els.filter(x => /^lit-tk-\d+-/.test(x.id));
const slotsOf = (els) => tk(els).map(x => x.id.replace(/^lit-tk-\d+-/, "").replace(/-\d+$/, ""));
// Picker placement: the element right after `lit-tk-temple` must be the first
// temple hymn (troparion or kontakion) — or, when the order has no temple
// slot, the first troparion of the list (picker heads the list).
const pickerAbove = (els) => {
  const i = els.findIndex(x => x.id === "lit-tk-temple");
  const next = els[i + 1];
  return i >= 0 && next ? next.id.replace(/^lit-tk-\d+-/, "").replace(/-\d+$/, "") : null;
};
const beats = (els) => els.filter(x => /^lit-beat-\d+$/.test(x.id));
const cross = { name: "Elevation of the Holy Cross", forLord: true, month: 9, day: 14 };
const nativityT = { name: "Nativity of the Theotokos", month: 9, day: 8 };
// The Menaion is the V2 service's own plan (entrancePlan) throughout.
const theotokosFeast = { name: "Entry of the Theotokos", forLord: false, month: 11, day: 21 };
// A. Sunday, six-stichera, ordinary time, temple of a saint (§1C): 10 Beatitudes, 7 slots ending Protection of Christians
{
  const els = run({ dow: 0, isSunday: true, season: "sunday", tone: 7 }, null, { ent: ent("09-06") });
  check(slotsOf(els).join(",") === "sunday_troparion,temple_troparion,saint_troparion,sunday_kontakion,temple_kontakion,saint_kontakion,steadfast_protectress", "§1C saint temple order: " + slotsOf(els).join(","));
  check(!section(els, "troparia_kontakia").unresolved, "§1C: entrance resolved");
  check(pickerAbove(els) === "temple_troparion" && els[els.findIndex(x => x.id === "lit-tk-temple") - 1].id.endsWith("sunday_troparion"), "§1C: picker between the Sunday troparion and the troparion of the temple");
  check(/Tone 7/.test(section(els, "troparia_kontakia").toneLabel || ""), "§1C: tone label carries the Sunday tone");
  check(beats(els).length === 10 && /Ode III/.test(beats(els)[6].label), `§1C: ${beats(els).length} Beatitude troparia, expected 10 (six of the resurrection, four from Ode III)`);
  check(byId(els, "lit-a3-glory") && byId(els, "lit-a3-bothnow"), "§1C: Glory / Now and ever lines emitted");
  const i05 = els.findIndex(x => x.unitId === "a3-05"), i04 = els.findIndex(x => x.unitId === "a3-04");
  check(els[i05 + 1] && els[i05 + 1].id === "lit-beat-0" && !(els[i04 + 1] && /^lit-beat/.test(els[i04 + 1].id)), "§1C: interleave starts at 'on 10'");
  const tr = tk(els).find(x => /saint_troparion/.test(x.id));
  check(tr && tr.srcPath === "09-06.c0.troparion" && /^Menaion/.test(tr.source), "saint troparion carries its V2 path and source (" + (tr && tr.srcPath) + ")");
}
// B. Sunday simple saint (09-27), temple of the Lord (§1A): 8 resurrectional, 4 slots, no temple
{
  const els = run({ dow: 0, isSunday: true, season: "sunday", tone: 7 }, null, { temple: TEMPLES.lord, ent: ent("09-27") });
  check(slotsOf(els).join(",") === "sunday_troparion,saint_troparion,saint_kontakion,sunday_kontakion", "§1A Lord temple order: " + slotsOf(els).join(","));
  check(beats(els).length === 8 && /Triadicon/.test(beats(els)[6].label), "§1A: eight of the resurrection with the Triadicon at Glory");
  check(byId(els, "lit-tk-temple"), "§1A Lord temple: picker still shown though the order has no temple hymns (re-pickable)");
  check(pickerAbove(els) === "sunday_troparion", "§1A Lord temple: no temple slot → picker heads the list (above " + pickerAbove(els) + ")");
  // Two kontakia are printed (after Ode III and Ode VI): one is sung at the Liturgy, the one after Ode VI.
  const k = tk(els).filter(x => /saint_kontakion/.test(x.id));
  check(k.length === 1 && /Having endured/.test(k[0].text) && /^Glory…/.test(k[0].label), "§1A: of two printed kontakia the one after Ode VI is sung, at Glory");
}
// C. No temple set: selector + unresolved
{
  const els = run({ dow: 0, isSunday: true, season: "sunday", tone: 7 }, null, { temple: null, ent: ent("09-06") });
  check(byId(els, "lit-tk-temple") && byId(els, "lit-tk-temple").type === "temple_selector", "no temple: selector emitted");
  check(section(els, "troparia_kontakia").unresolved, "no temple: section unresolved");
}
// D. Sunday in the afterfeast of the Entry (11-22), temple of a saint (§1F1): the feast's hymns from the day's own page
{
  const ld = { dow: 0, isSunday: true, season: "afterfeast", tone: 7, feastPeriod: { periodType: "afterfeast", feast: theotokosFeast } };
  const els = run(ld, null, { ent: ent("11-22") });
  check(slotsOf(els).join(",") === "sunday_troparion,feast_troparion,temple_troparion,saint_troparion,sunday_kontakion,temple_kontakion,saint_kontakion,feast_kontakion", "§1F1 order: " + slotsOf(els).join(","));
  check(tk(els).some(x => /Troparion of the Feast/.test(x.label) && /prelude of God's good will/.test(x.text) && /^11-22\.c0\.liturgy\.troparia/.test(x.srcPath)), "§1F1: feast troparion read from the day's own page");
  check(beats(els).length === 10, `§1F1: ${beats(els).length} Beatitude troparia, expected 10 (six of the resurrection, four of the feast)`);
  check(!section(els, "troparia_kontakia").unresolved, "§1F1: resolved");
  // 24 Nov as a Sunday: the page prints troparia of the feast and of the saint → twelve; both saints' hymns are used
  const e24 = run(ld, null, { ent: ent("11-24") });
  check(beats(e24).length === 12, `§1F1 with the saint's troparia: ${beats(e24).length}, expected 12 (4 + 4 + 4)`);
  const ks = tk(e24).filter(x => /saint_kontakion/.test(x.id));
  check(ks.length === 2 && !/^Glory/.test(ks[0].label) && /^Glory…/.test(ks[1].label), "two saints' kontakia: the first before Glory, the second at Glory (§2G1 *)");
  check(tk(e24).filter(x => /saint_troparion/.test(x.id)).length === 2, "two saints' troparia, the printed alternative left out");
}
// E. Monday, six-stichera saint (09-06), temple of the Lord (§2C → §2A mtt)
{
  const els = run({ dow: 1, isSunday: false, season: "ordinary", tone: 7 }, null, { temple: TEMPLES.lord, ent: ent("09-06") });
  check(slotsOf(els).join(",") === "temple_troparion,dow_troparion,saint_troparion,dow_kontakion,saint_kontakion,departed_kontakion,temple_kontakion", "§2A Lord Mon order: " + slotsOf(els).join(","));
  check(!section(els, "troparia_kontakia").unresolved && tk(els).some(x => /Bodiless Hosts/.test(x.label) && /Supreme Commanders/.test(x.text)), "§2A Monday: troparion of the Bodiless Hosts resolved");
  check(byId(els, "lit-tk-temple") && byId(els, "lit-tk-temple").type === "temple_selector", "§2A: temple picker shown inline with the hymns");
  check(pickerAbove(els) === "temple_troparion", "§2A: picker sits directly above the troparion of the temple (above " + pickerAbove(els) + ")");
  // 09-06's own rubric: "four each from Odes III and VI of the canon of the holy archangel" — all eight from the Menaion
  check(beats(els).length === 8 && /Ode III/.test(beats(els)[0].label) && /Ode VI/.test(beats(els)[7].label), "09-06 as its page appoints: four from Ode III and four from Ode VI");
  // 09-05 (prophet, six-stichera): "4 from the Oktoechos, and 4 from ODE III" — the Octoechos first, as printed
  const z = run({ dow: 1, isSunday: false, season: "ordinary", tone: 7 }, null, { temple: TEMPLES.lord, ent: ent("09-05", 0) });
  check(beats(z).length === 8 && /Octoechos|Glory|Now and ever/.test(beats(z)[0].label) && /Ode III/.test(beats(z)[4].label), "§2C as printed: 4 Octoechos then 4 Menaion Ode III");
  // …and on Saturday the Menaion's precede (§2A)
  const zs = run({ dow: 6, isSunday: false, season: "ordinary", tone: 7 }, null, { temple: TEMPLES.lord, ent: ent("09-05", 0) });
  check(beats(zs).length === 8 && /Ode III/.test(beats(zs)[0].label), "Saturday: the Menaion's four precede the Octoechos' (§2A)");
}
// F. Thursday, temple of a saint: two dow kontakia; Saturday Lord temple: departed at Glory, Martyrs at Now
{
  const th = run({ dow: 4, isSunday: false, season: "ordinary", tone: 7 }, null, { ent: ent("09-27") });
  check(tk(th).filter(x => /^lit-tk-\d+-dow_kontakion/.test(x.id)).length === 2, "§2A Thursday: two kontakia of the day");
  check(tk(th).filter(x => /^lit-tk-\d+-dow_troparion/.test(x.id)).length === 2 && tk(th).some(x => /St. Nicholas/.test(x.label)), "§2A Thursday: two troparia of the day (Apostles, St Nicholas)");
  check(beats(th).length === 6, "§2A simple, no Menaion troparia: six from the Octoechos");
  const sa = run({ dow: 6, isSunday: false, season: "ordinary", tone: 7 }, null, { temple: TEMPLES.lord, ent: ent("09-27") });
  check(slotsOf(sa).join(",") === "temple_troparion,dow_troparion,saint_troparion,temple_kontakion,saint_kontakion,departed_kontakion,dow_kontakion", "§2A Saturday order: " + slotsOf(sa).join(","));
  check(tk(sa).some(x => /Martyrs/.test(x.label)), "§2A Saturday: the Martyrs' kontakion at Now and ever");
  check(tk(sa).some(x => /All Saints/.test(x.label)), "§2A Saturday: the troparion of All Saints");
  // a double commemoration (11-19, two troparia and one kontakion): both troparia, the one kontakion
  const db = run({ dow: 4, isSunday: false, season: "ordinary", tone: 7 }, null, { ent: ent("11-19") });
  check(tk(db).filter(x => /saint_troparion/.test(x.id)).length === 2 && tk(db).filter(x => /saint_kontakion/.test(x.id)).length === 1 && !section(db, "troparia_kontakia").unresolved, "§2B: both saints' troparia and the one printed kontakion, nothing left unresolved");
}
// G. Polyeleos weekday (09-05, Zacharias and Elizabeth), temple of the Theotokos (§2E): Beatitudes 4+4 from the Menaion
{
  const els = run({ dow: 2, isSunday: false, season: "ordinary", tone: 7 }, null, { temple: TEMPLES.theotokos, ent: ent("09-05", 1) });
  check(slotsOf(els).join(",") === "temple_troparion,saint_troparion,saint_kontakion,saint_kontakion,temple_kontakion", "§2E order (both printed kontakia): " + slotsOf(els).join(","));
  check(!section(els, "troparia_kontakia").unresolved, "§2E: resolved");
  check(beats(els).length === 8 && /Ode III/.test(beats(els)[0].label) && /Ode VI/.test(beats(els)[7].label), "§2E: four from Ode III and four from Ode VI");
}
// H. Vigil weekday, temple of a saint (§2F): temple slots dropped (no vigil-rank day is in V2 yet: 11-30 read at vigil rank)
{
  const els = run({ dow: 5, isSunday: false, season: "ordinary", tone: 7 }, null, { ent: { ...ent("11-30"), rank: "vigil" } });
  check(slotsOf(els).join(",") === "saint_troparion,saint_kontakion,steadfast_protectress", "§2F vigil, saint temple: " + slotsOf(els).join(","));
}
// I. The apodosis of the Entry (11-25, weekday): the page prints the saints' hymns with the feast's
{
  const ld = { dow: 3, isSunday: false, season: "apodosis", tone: 7, feastPeriod: { periodType: "apodosis", feast: theotokosFeast } };
  const els = run(ld, null, { ent: ent("11-25") });
  check(slotsOf(els).join(",") === "feast_troparion,saint_troparion,saint_kontakion,feast_kontakion", "§2G3 as the page prints: " + slotsOf(els).join(","));
  check(/^Glory…/.test(tk(els)[2].label) && /^Now and ever…/.test(tk(els)[3].label), "§2G3 with saints: Glory… the saints' kontakion, Now and ever… the feast's");
  check(!byId(els, "lit-tk-temple"), "§2G3: no temple picker when the table has no temple slot");
  check(beats(els).length === 8, "§2G3: eight troparia from Ode IX of the feast");
  // the same day with nothing printed for a saint: the feast alone
  const p = ent("11-25"); const bare = run(ld, null, { ent: { ...p, saints: { troparia: [], kontakia: [] } } });
  check(slotsOf(bare).join(",") === "feast_troparion,feast_kontakion" && /^Glory… Now and ever…/.test(tk(bare)[1].label), "§2G3, feast alone: single Glory… Now and ever… on the feast kontakion");
  // a Sunday apodosis (§1F3)
  const su = run({ ...ld, dow: 0, isSunday: true }, null, { ent: ent("11-25") });
  check(slotsOf(su).join(",") === "sunday_troparion,feast_troparion,sunday_kontakion,feast_kontakion" && beats(su).length === 10, "§1F3: " + slotsOf(su).join(",") + ", " + beats(su).length + " Beatitudes");
}
// J. Great Feasts
{
  // a feast of the Theotokos on a weekday (11-21): the Typika, with the Beatitude troparia its page prints
  const ld = { dow: 6, isSunday: false, season: "great_feast", tone: 7, feastPeriod: { periodType: "feast", feast: theotokosFeast } };
  const els = run(ld, null, { ent: ent("11-21") });
  check(slotsOf(els).join(",") === "feast_troparion,feast_kontakion" && /^Glory… Now and ever…/.test(tk(els)[1].label), "Great Feast: " + slotsOf(els).join(","));
  check(beats(els).length === 8 && !section(els, "antiphon_3").unresolved && !byId(els, "lit-antiphons-festal"), "feast of the Theotokos: eight printed Beatitude troparia, no festal antiphons");
  // the same feast on a Sunday (§1E): the Sunday is kept
  const su = run({ ...ld, dow: 0, isSunday: true }, null, { ent: ent("11-21") });
  check(slotsOf(su).join(",") === "sunday_troparion,feast_troparion,sunday_kontakion,feast_kontakion", "§1E feast of the Theotokos on a Sunday: " + slotsOf(su).join(","));
  check(/^Glory…/.test(tk(su)[2].label) && /^Now and ever…/.test(tk(su)[3].label) && beats(su).length === 10, "§1E: Glory… Sunday kontakion, Now and ever… of the feast; ten Beatitudes");
  // a feast of the Lord: its own antiphons, flagged; the feast's hymns alone even on a Sunday
  const lo = run({ dow: 0, isSunday: true, season: "great_feast", tone: 7, feastPeriod: { periodType: "feast", feast: cross } }, null, { ent: LORDS_FEAST });
  check(slotsOf(lo).join(",") === "feast_troparion,feast_kontakion", "feast of the Lord on a Sunday: the feast alone (" + slotsOf(lo).join(",") + ")");
  check(beats(lo).length === 0 && section(lo, "antiphon_3").unresolved && byId(lo, "lit-antiphons-festal"), "feast of the Lord: no Beatitude troparia; festal antiphons flagged");
}
// K. Pentecostarion: both flagged, not guessed
{
  const els = run({ dow: 1, isSunday: false, season: "pentecostarion", isPentecostarion: true, paschaOffset: 30, tone: 3 }, null, { ent: ent("09-27") });
  check(section(els, "troparia_kontakia").unresolved && byId(els, "lit-tk-order"), "Pentecostarion day with no encoded entry: entrance flagged, not guessed");
  check(section(els, "antiphon_3").unresolved, "Pentecostarion day with no encoded entry: Beatitudes flagged");
}

// ── resolveLiturgyPropers() direct — the rule the Typica now shares (v0.49.2) ──
{
  const P = (ld, e, menaionFirst = false, plan = null) => resolveLiturgyPropers({ liturgicalData: ld, menaionEntry: e, menaionPlan: plan, pentEntry: null, menaionFirst, sources: baseSources });
  const wk = P({ dow: 1, tone: 7 }, null, false, planOf('09-06'));
  check(wk.prokeimena.length === 2 && wk.prokeimena[0].origin === "weekday" && wk.prokeimena[1].origin === "menaion", "propers: six-stichera weekday keeps the day's prokeimenon and adds the Menaion's (presence gate)");
  check(wk.alleluia.length === 2 && wk.alleluia[0].origin === "weekday", "propers: Menaion Alleluia joins the daily one, does not replace it");
  const sat = P({ dow: 6, tone: 7 }, null, true, planOf('09-06'));
  check(sat.prokeimena[0].origin === "menaion" && sat.prokeimena.length === 3, "propers: Saturday Menaion first, then day + departed");
  const sun = P({ dow: 0, isSunday: true, tone: 7 }, null);
  check(sun.prokeimena.length === 1 && sun.prokeimena[0].origin === "sunday" && sun.communion.length === 0, "propers: simple Sunday with no AT LITURGY section — resurrectional only");
  const pent = resolveLiturgyPropers({ liturgicalData: { dow: 1, tone: 3 }, menaionEntry: null, menaionPlan: planOf('09-06'),
    pentEntry: { prokeimenon_tone: 8, prokeimenon_text: "Pent prok", alleluia_tone: 8, alleluia_verse: "Pent al", communion_verse: "Pent comm", source_file: "P+40.pdf" }, sources: baseSources });
  check(pent.prokeimena.length === 2 && pent.prokeimena[0].origin === "pentecostarion" && pent.prokeimena[1].origin === "menaion", "propers: Pentecostarion feast first, then the Menaion's (§4A1)");
}

// ── Phase 3b: the Pentecostarion (Fekula ch.4) over the real entries ─────────
{
  const P = (k) => pentecostarion[String(k)] || null;
  const runP = (offset, e, extra = {}) => assembleLiturgy({ units, view: { rubrics: true, quiet: true }, ctx: {
    liturgicalData: { dow: offset % 7, isSunday: offset % 7 === 0, season: "pentecostarion", isPentecostarion: true, paschaOffset: offset, tone: 5 },
    menaionEntry: null, menaionEntrance: e, menaionRank: e ? e.rank : null, pentEntry: P(offset), dailyReading: { e: "Acts 1:1-8", g: "John 1:1-17" }, feastReading: null,
    sources: { ...baseSources, temple: extra.temple === undefined ? TEMPLES.saint : extra.temple, feast: null } } });
  // Blind Man Sunday (P+35), §4B6: Sunday troparion; Glory… Pentecostarion kontakion; Now… kontakion of Pascha
  {
    const els = runP(35, null);
    check(slotsOf(els).join(",") === "pent:troparion,pent:kontakion_ode6,pent:kontakion_ode3", "§4B6 P+35: " + slotsOf(els).join(","));
    check(tk(els)[1] && /^Glory/.test(tk(els)[1].label) && tk(els)[1].toneNote === "Tone 4", "§4B6: Blind Man kontakion (Tone 4) at Glory");
    check(tk(els)[2] && /^Now and ever/.test(tk(els)[2].label) && tk(els)[2].toneNote === "Tone 8", "§4B6: Pascha kontakion (Tone 8) at Now and ever");
    check(!section(els, "troparia_kontakia").unresolved && !byId(els, "lit-tk-temple"), "§4B6: resolved; no temple slot on a Pentecostarion Sunday");
    check(beats(els).length === 8 && !section(els, "antiphon_3").unresolved, "§4B6: eight Beatitude troparia as printed");
  }
  // Holy Fathers (P+42), §4B13
  {
    const els = runP(42, null);
    check(slotsOf(els).join(",") === "pent:troparion,pent:troparion_3,pent:troparion_2,pent:kontakion_ode6,pent:kontakion", "§4B13 P+42: " + slotsOf(els).join(","));
    check(tk(els)[1].toneNote === "Tone 4" && tk(els)[2].toneNote === "Tone 8", "§4B13: Ascension troparion (T4) then the Fathers' (T8)");
  }
  // All Saints (P+56), §4B17; Apodosis of Pascha (P+38), §4B11
  {
    const a = runP(56, null);
    check(slotsOf(a).join(",") === "pent:troparion,pent:troparion_2,pent:kontakion" && /^Glory… Now and ever…/.test(tk(a)[2].label), "§4B17 P+56: " + slotsOf(a).join(","));
    check(beats(a).length === 10, "§4B17: ten Beatitude troparia as printed");
    const b = runP(38, null);
    check(slotsOf(b).join(",") === "pent:troparion,pent:kontakion_ode3,pent:kontakion_ode6", "§4B11 P+38: " + slotsOf(b).join(","));
  }
  // Ascension (P+39): feast troparion + GN kontakion; festal antiphons flagged
  {
    const els = runP(39, null);
    check(slotsOf(els).join(",") === "pent:troparion,pent:kontakion", "§4B12 P+39: " + slotsOf(els).join(","));
    check(section(els, "antiphon_1").unresolved && byId(els, "lit-antiphons-festal") && beats(els).length === 0, "P+39: festal antiphons flagged, no Beatitudes");
  }
  // Afterfeast weekday (P+44, Tuesday), period (4): feast troparion … Menaion saint … Now… feast kontakion; temple of a saint
  {
    const els = runP(44, ent("09-06"));
    check(slotsOf(els).join(",") === "pent:troparion,temple_troparion,saint_troparion,temple_kontakion,saint_kontakion,pent:kontakion", "ch.4 (4) P+44 saint temple: " + slotsOf(els).join(","));
    check(tk(els)[5] && /^Now and ever/.test(tk(els)[5].label) && tk(els)[5].toneNote === "Tone 6", "ch.4 (4): Ascension kontakion at Now and ever");
    check(beats(els).length === 8 && /Ode III/.test(beats(els)[4].label), "§4A1: four Pentecostarion + four Menaion Ode III");
    check(byId(els, "lit-tk-temple"), "ch.4 weekday: temple picker shown");
    check(pickerAbove(els) === "temple_troparion", "ch.4 (4): picker directly above the troparion of the temple, after the Pentecostarion troparion");
    const lord = runP(44, ent("09-06"), { temple: TEMPLES.lord });
    check(slotsOf(lord).join(",") === "pent:troparion,saint_troparion,saint_kontakion,pent:kontakion", "ch.4 (4) P+44 Lord temple: no temple slots — " + slotsOf(lord).join(","));
    const none = runP(44, null, { temple: TEMPLES.lord });
    check(slotsOf(none).join(",") === "pent:troparion,pent:kontakion" && /^Glory… Now and ever…/.test(tk(none)[1].label), "ch.4 (4) no Menaion saint: Glory… Now and ever… on the feast kontakion");
    check(beats(none).length === 6, "§4A1: six from the Pentecostarion when the Menaion appoints none");
  }
  // Period (3) weekday (P+36) and Bright Week (P+3)
  {
    const els = runP(36, null, { temple: TEMPLES.lord });
    check(slotsOf(els).join(",") === "pent:troparion,pent:kontakion" && /Tone 5/.test(section(els, "troparia_kontakia").toneLabel || ""), "ch.4 (3) P+36: preceding Sunday's troparion (T5)");
    const st = runP(36, null);
    check(slotsOf(st).join(",") === "pent:troparion,temple_troparion,temple_kontakion,pent:kontakion", "ch.4 (3) P+36 saint temple: temple slots per ◊ — " + slotsOf(st).join(","));
    const bw = runP(3, null);
    check(section(bw, "troparia_kontakia").unresolved && section(bw, "antiphon_1").unresolved, "Bright Week: Paschal Liturgy flagged, not assembled");
  }
}

// Every replaced/filled line keeps its unitId and never leaks a blank
for (const els of [run({ dow: 0, isSunday: true, season: "sunday", tone: 7 }, null)]) {
  for (const id of ["pk-06", "al-02", "ep-02", "go-02", "go-04", "go-11", "le-10"]) {
    const t = textOf(els, id);
    check(t && !/___/.test(t), `resolved line ${id} still carries a blank`);
  }
}

const overview = assembleLiturgy({ units: getLiturgy("chrysostom") }).filter(e => e.type === "liturgy_section" && e.core).length;
// ── The general rule is Fekula's by section; the OCA mark stands only where the OCA text differs (Bill, 14 Nov 2026) ──
{
  const { ocaLiturgyPropersFor } = await import('../src/data/oca_hymns/index.js');
  const { ocaReadingPractice } = await import('../src/lib/liturgy-propers.js');
  let bad = 0; const ck = (c, m) => { if (!c) { bad++; console.log('  FAIL OCA practice: ' + m); } };
  // 16 Nov 2026, Monday, Apostle Matthew: the OCA prints only the Apostle's.
  const oca = await ocaLiturgyPropersFor('11-16'); const plan = planOf('11-16');
  const base = { liturgicalData: { dow: 1, tone: 7 }, menaionPlan: plan, sources: baseSources };
  const full = resolveLiturgyPropers(base); const noted = resolveLiturgyPropers({ ...base, ocaPractice: oca });
  // The general rule is Fekula's (§2E, polyeleos): prokeimenon and Alleluia "from the Menaion, only". The OCA text agrees.
  ck(full.prokeimena.length === 1 && full.prokeimena[0].origin === 'menaion' && full.alleluia.length === 1 && full.rule.section === '§2E', '§2E: the Apostle\'s prokeimenon and Alleluia only (' + full.prokeimena.length + ', ' + full.rule.section + ')');
  ck(noted.prokeimena.length === full.prokeimena.length && noted.prokeimena[0].oca === 'printed', 'the OCA text prints what Fekula appoints: nothing to mark');
  ck(ocaReadingPractice(oca, 'g', 'Matthew 9:9-13 (§30)')?.oca === 'printed' && ocaReadingPractice(oca, 'e', 'Romans 5:1-10 (§88)')?.oca === 'not_printed', 'a reading the OCA text does not print is still marked');
  ck(ocaReadingPractice(null, 'e', 'Romans 5:1-10') === null && !full.prokeimena.some((x) => x.oca), 'no OCA text for the day: no mark at all');
  // Saturday at polyeleos: "all from the Menaion and then for the day"
  const satP = resolveLiturgyPropers({ ...base, liturgicalData: { dow: 6, tone: 7 } });
  ck(satP.prokeimena[0].origin === 'menaion' && satP.prokeimena.some((x) => x.origin === 'weekday'), '§2E Saturday: the Menaion\'s, then the day\'s');
  // Feast periods (§2G1): a weekday afterfeast takes the feast's and the saint's, not the day's (11-23, Monday)
  const af = resolveLiturgyPropers({ liturgicalData: { dow: 1, tone: 7, season: 'afterfeast', feastPeriod: { periodType: 'afterfeast', feast: { name: 'Entry', forLord: false } } }, menaionPlan: planOf('11-23'), sources: baseSources });
  ck(af.prokeimena.length >= 1 && af.prokeimena.every((x) => x.origin === 'menaion') && af.prokeimena[0].feast && af.rule.section === '§2G1', '§2G1 afterfeast: of the feast (and of the saint), not the day\'s');
  // 6 Sep 2026, a six-stichera Sunday (§1C): for Sunday and from the Menaion. The OCA text prints only the Sunday's: that difference is marked.
  await OctoV2.loadV2Tone(5);
  const sun = null;
  const sun2 = resolveLiturgyPropers({ liturgicalData: { dow: 0, isSunday: true, tone: 5 }, menaionPlan: planOf('09-06'), ocaPractice: await ocaLiturgyPropersFor('09-06'), sources: baseSources });
  ck(sun2.prokeimena.find((x) => x.origin === 'sunday')?.oca === 'printed' && sun2.prokeimena.find((x) => x.origin === 'menaion')?.oca === 'not_printed', 'Sunday §1C: Sunday and Menaion both shown; the saint\'s, which the OCA text does not print, is marked');
  void sun;
  console.log(bad ? `OCA practice notes: ${bad} failure(s)` : 'OCA practice notes: OK');
  failures += bad;
}

console.log(`liturgy assembly: ${MOVEMENT_ORDER.length} movements (${overview} core), 2 variants × ${VIEWS.length} views, ${Object.keys(BASIL_INSERTS).length} insert anchors, 6 hook scenarios, 11 entrance/Beatitudes scenarios, 7 Pentecostarion scenarios`);
console.log(failures ? `${failures} failure(s)` : "OK");
process.exit(failures ? 1 : 0);
