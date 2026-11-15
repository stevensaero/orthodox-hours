// ─── WHICH READINGS ARE READ, AND IN WHAT ORDER ─────────────────────────────
//
// Resolves the Epistle and Gospel appointed at the Liturgy for a given day,
// from Fekula & Williams, The Order of Divine Services, 2nd ed. revised.
//
// ── THE RULE, AND WHY IT IS NOT ABOUT RANK ──────────────────────────────────
//
// Every Sunday section of chapter 1 ends its Divine Liturgy block with a
// readings line, and the wording shifts in a way that is easy to misread:
//
//   §1A simple            "For Sunday (and, if there be such, from the Menaion)"
//   §1B double            "For Sunday (and, if there be such, from the Menaion)"
//   §1C six-stichera      "For Sunday and from the Menaion"
//       or doxology
//   §1D polyeleos         "As set forth for a doxology rank service. See §1C."
//   §1E vigil             "For Sunday and from the Menaion"
//   §1F1 in a feast       "Sunday and saint" / "…are for Sunday and the saint."
//
// §1A and §1B hedge; §1C and §1E do not. It is tempting to read that as a rank
// threshold — as though a saint earns his own readings at six-stichera. He does
// not. The hedge is about the MENAION'S CONTENTS, not the saint's rank: at
// six-stichera and above the Menaion normally appoints readings, so the hedge
// would be redundant, and Fekula drops it. At simple rank it often does not, so
// the hedge is there.
//
// So the gate is one question, asked at every rank:
//
//     Does the Menaion appoint readings for this commemoration?
//     If yes, they are read. If no, they are not.
//
// The encoded data already answers it exactly. `feast_e` / `feast_g` are null
// when the source prints no AT LITURGY section and carry the reference when it
// does — see 05-23 ("No AT LITURGY section — §2C; cycle readings govern",
// feast_e: null) against 09-06 (§2C, feast_e: "Hebrews 2:2-10"). Both are
// six-stichera. They differ because the two printed services differ, which is
// the only thing that should make them differ.
//
// ── ORDER ───────────────────────────────────────────────────────────────────
//
// Day first, then the Menaion — except on SATURDAY, which inverts. Fekula ch.2
// §2A: "But if it be Saturday, and there be readings in the Menaion, the
// prokeimenon, epistle, alleluia, gospel, and communion hymn are first from the
// Menaion, and then for the day."
//
// Grouping is by SLOT, not by source: both Epistles stand together at the
// Epistle, both Gospels at the Gospel. That is how Fekula's line is written
// ("Prokeimenon, Epistle, Alleluia and Gospel: For Sunday and from the
// Menaion") and how service books set it out.
//
// ── WHAT THIS MODULE DOES NOT DO ────────────────────────────────────────────
//
// It makes no claim about any other calendar's practice. Where usage diverges
// from the published rubrics, the divergence is for whoever diverges to
// explain; this tool states what the source appoints and cites where it says
// so. Nothing here is inferred from observed practice.

/**
 * The chapter-1 section governing readings for a Sunday at a given rank.
 * Returns { section, quote } — the quote is verbatim from Fekula.
 */
import { fekulaProperOrder } from "./liturgy-order.js";

function sundayRule(rank, inFeastPeriod) {
  if (inFeastPeriod) {
    return {
      section: "Fekula §1F1",
      quote: "…are for Sunday and the saint.",
    };
  }
  switch (rank) {
    case "simple":
      return { section: "Fekula §1A", quote: "For Sunday (and, if there be such, from the Menaion)" };
    case "double":
      return { section: "Fekula §1B", quote: "For Sunday (and, if there be such, from the Menaion)" };
    case "polyeleos":
      // §1D defers rather than restating: "As set forth for a doxology rank
      // service. See §1C." Cite both so the trail is followable.
      return { section: "Fekula §1D → §1C", quote: "For Sunday and from the Menaion" };
    case "vigil":
    case "great_feast":
      return { section: "Fekula §1E", quote: "For Sunday and from the Menaion" };
    case "six_stichera":
    case "doxology":
    default:
      return { section: "Fekula §1C", quote: "For Sunday and from the Menaion" };
  }
}

const WEEKDAY_RULE = {
  section: "Fekula §2A",
  quote: "For the day (and, if there be such, from the Menaion).",
};

const SATURDAY_RULE = {
  section: "Fekula §2A",
  quote:
    "But if it be Saturday, and there be readings in the Menaion, the " +
    "prokeimenon, epistle, alleluia, gospel, and communion hymn are first " +
    "from the Menaion, and then for the day.",
};

/**
 * Resolve the day's Liturgy readings.
 *
 * @param liturgicalData  from getLiturgicalData(date)
 * @param menaionEntry    the selected commemoration, or null
 * @param dailyReading    { e, g } from the paschal-offset lectionary, or null
 * @param feastReading    { e, g } from feast_e / feast_g, or null — already
 *                        suppressed upstream on a named Sunday, where the cycle
 *                        reading at that offset IS the Sunday proper
 *
 * @returns {{
 *   groups: Array<{ slot, label, items: Array<{ source, label, ref }> }>,
 *   order: "day-first" | "menaion-first",
 *   rule: { section, quote },
 *   hasMenaionReadings: boolean,
 * }}
 */
export function readingsForDay({
  liturgicalData,
  menaionEntry = null,
  rank: rankGiven = null,          // the service's rank, from the Menaion V2 service
  dailyReading = null,
  feastReading = null,
  menaionRefs = null,              // { e: [{ display, feast }], g: [...] }: every reference the service prints (liturgyPlan)
  kind = null,                     // the service's kind (forefeast, afterfeast, apodosis, feast, saint)
  order = null,                    // ODS vol. III's order for this service on this day (src/data/ods_v3/orders.js)
} = {}) {
  const ld = liturgicalData || {};
  const isSunday = ld.dow === 0 || ld.season === "sunday" || ld.isSunday === true;
  const isSaturday = ld.dow === 6;
  const inFeastPeriod = ["great_feast", "forefeast", "afterfeast", "apodosis"]
    .includes(ld.season);

  const rank = rankGiven || (menaionEntry && menaionEntry.rank) || "simple";
  const rule = isSunday
    ? sundayRule(rank, inFeastPeriod)
    : (isSaturday ? SATURDAY_RULE : WEEKDAY_RULE);

  const dayLabel = isSunday ? "Of the Sunday" : "Of the day";
  // Deliberately NOT the saint's name. Menaion `saint` strings are full printed
  // headings — "Commemoration of the Miracle of the Archangel Michael at
  // Colossae (Chonae)" — which read badly after "Of" and overflow a bulletin
  // column. Shortening them would mean inventing a short name for every saint,
  // which is an editorial act the tool has no source for. The sheet names the
  // commemoration in full directly above, and only one commemoration is ever
  // selected, so this is unambiguous.
  const menaionLabel = "Of the commemoration";

  const dayItems = {
    e: dailyReading && dailyReading.e ? { source: "day", label: dayLabel, ref: dailyReading.e } : null,
    g: dailyReading && dailyReading.g ? { source: "day", label: dayLabel, ref: dailyReading.g } : null,
  };
  const menaionItems = {
    e: feastReading && feastReading.e ? { source: "menaion", label: menaionLabel, ref: feastReading.e } : null,
    g: feastReading && feastReading.g ? { source: "menaion", label: menaionLabel, ref: feastReading.g } : null,
  };

  const hasMenaionReadings = !!(menaionItems.e || menaionItems.g);
  // Saturday inverts, and only when the Menaion actually has readings — the
  // rubric says so explicitly ("and there be readings in the Menaion").
  const menaionFirst = isSaturday && hasMenaionReadings;

  const build = (slot, label) => {
    const pair = menaionFirst
      ? [menaionItems[slot], dayItems[slot]]
      : [dayItems[slot], menaionItems[slot]];
    const items = pair.filter(Boolean);
    return items.length ? { slot, label, items } : null;
  };

  let groups = [build("e", "Epistle"), build("g", "Gospel")].filter(Boolean);

  // THE GENERAL RULE IS FEKULA'S, BY SECTION (ruled 14 Nov 2026; src/lib/liturgy-order.js):
  // whose Epistle and Gospel, in what order. Applied when the caller hands over every
  // reference the Menaion service prints, outside the Pentecostarion.
  const pentSeason = ld.isPentecostarion || ld.season === "pentecostarion" || ld.season === "brightweek";
  const pickRefs = (slot, who, unbound) => {
    if (who === "day") return dayItems[slot] ? [dayItems[slot]] : [];
    const refs = (menaionRefs[slot] || []).filter((r) => who === "menaion" || (who === "feast") === !!r.feast);
    if (!refs.length && unbound) unbound.push((slot === "e" ? "Epistle" : "Gospel") + " of the " + who);
    return refs.map((r) => ({ source: "menaion", label: r.feast ? "Of the feast" : menaionLabel, ref: r.display, who: r.feast ? "feast" : "saint" }));
  };
  let fekula = null;
  if (menaionRefs && !pentSeason) {
    fekula = fekulaProperOrder({ ld: { ...ld, isSunday }, rank, kind, saintReadings: [...(menaionRefs.e || []), ...(menaionRefs.g || [])].some((r) => !r.feast) });
    groups = ["e", "g"].map((slot) => {
      let items = fekula[slot === "e" ? "epistle" : "gospel"].flatMap((who) => pickRefs(slot, who, null));
      if (!items.length && dayItems[slot]) items = [dayItems[slot]];   // the Menaion prints none: the day's is read
      return items.length ? { slot, label: slot === "e" ? "Epistle" : "Gospel", items } : null;
    }).filter(Boolean);
  }

  // ODS 3rd ed. vol. III prints whose Epistle and Gospel are read on this date,
  // and in what order (its own Saturday order where it prints one): it overrides
  // the general rule (ruled 14 Nov 2026). Each name is bound to a reference the
  // service prints; a name that binds to nothing is left out and reported.
  const ol = order && order.liturgy;
  if (ol && (ol.epistle || ol.gospel) && menaionRefs) {
    const cite = "ODS 3rd ed. vol. III, p. " + (ol.page || order.pages[0]) + " (" + order.id + ")";
    const unbound = [];
    const pick = (slot, who) => pickRefs(slot, who, unbound);
    const whos = (slot) => { const k = slot === "e" ? "epistle" : "gospel"; return (isSaturday && ol.saturday && ol.saturday[k]) || ol[k] || null; };
    const made = ["e", "g"].map((slot) => { const w = whos(slot); if (!w) return groups.find((x) => x.slot === slot) || null;
      const items = w.flatMap((who) => pick(slot, who)); return items.length ? { slot, label: slot === "e" ? "Epistle" : "Gospel", items } : null; }).filter(Boolean);
    const ods3 = { id: order.id, cite, general: groups, unbound };
    groups = made;
    return { groups, order: (whos("e") || [])[0] === "day" || !whos("e") ? "day-first" : "menaion-first",
      rule: { section: cite, quote: "The readings appointed for this date." }, hasMenaionReadings, ods3 };
  }

  if (fekula) return { groups, order: fekula.epistle[0] === "day" ? "day-first" : "menaion-first",
    rule: { section: fekula.section, quote: fekula.quote }, hasMenaionReadings };

  return {
    groups,
    order: menaionFirst ? "menaion-first" : "day-first",
    rule,
    hasMenaionReadings,
  };
}

/** Flat list of every reading, in printed order — convenient for the supplement. */
export function readingsInOrder(resolved) {
  if (!resolved || !resolved.groups) return [];
  const out = [];
  for (const group of resolved.groups) {
    for (const item of group.items) {
      out.push({ ...item, slot: group.slot, slotLabel: group.label });
    }
  }
  return out;
}
