// src/lib/liturgy-entrance.js
// ─────────────────────────────────────────────────────────────────────────────
// Phase 3 of the Divine Liturgy assembler (liturgy_assembler_spec.md §3):
//
//   1. The Beatitude troparia — how many, from where, interleaved into the
//      last N verses of the Third Antiphon (the book's own "(on 12 / on 10 /
//      on 8)" marks).
//   2. The troparia and kontakia after the Little Entrance, in Fekula's order
//      by day type × rank × forefeast/afterfeast × temple dedication.
//
// Every table below is transcribed from Fekula & Williams, The Order of
// Divine Services, 2nd ed. rev.: chapter 1 (Sunday §1A–§1F3), chapter 2
// (weekday §2A–§2G4), and chapter 4 (Pentecostarion): the four-period weekday
// table on pp.169–170 and the per-Sunday blocks §4B5–§4B17. Bright Week (the
// Paschal Liturgy, §4B1) is not assembled and returns `unresolved`.
//
// Slot vocabulary (Fekula's own words, snake_cased):
//   sunday_troparion  feast_troparion  temple_troparion  dow_troparion
//   saint_troparion
//   sunday_kontakion  feast_kontakion  temple_kontakion  dow_kontakion
//   saint_kontakion   departed_kontakion ("With the saints give rest")
//   steadfast_protectress ("Protection of Christians")
//
// THE MENAION is read through the Menaion V2 plan (entrancePlan in
// src/data/menaion_v2/adapter.js): `menaion` below. A "saint" slot stands for
// every troparion (or kontakion) the page prints for the day's saints, in print
// order: "if there be troparia and kontakia for both saints, both are used"
// (§2B); "if there be two kontakia provided, the first is chanted before
// Glory…, and the second following Glory…" (§2G1 *). So the tables carry one
// saint slot and the page decides how many hymns fill it.
//   pent:<field>      a hymn from the day's own Pentecostarion entry (the
//                     encoder captured what the day's PDF prints): troparion,
//                     troparion_2, troparion_3, kontakion (hours_kontakion or
//                     kontakion_ode6), kontakion_ode3, kontakion_ode6
// A slot string may carry a prefix: "G:" = at "Glory…", "N:" = at "Now and
// ever…", "GN:" = a single "Glory… Now and ever…".
//
// Pure. Sources are injected (see resolveEntrance / resolveBeatitudes).
// ─────────────────────────────────────────────────────────────────────────────
import { shown } from "../data/menaion_v2/adapter.js";
import { ods3Cite } from "../data/ods_v3/orders.js";

const LORD = "lord", THEOTOKOS = "theotokos", SAINT = "saint";

// ── Little Entrance tables ─────────────────────────────────────────────────

// Sunday, ordinary time (§1A p.11–12; §1C p.18 identical; §1D defers to §1C;
// §1E p.22–23 identical except the vigil-rank saint temple, below).
const SUNDAY_ORDINARY = {
  [LORD]:      ["sunday_troparion", "saint_troparion", "G:saint_kontakion", "N:sunday_kontakion"],
  [THEOTOKOS]: ["sunday_troparion", "temple_troparion", "saint_troparion", "sunday_kontakion", "G:saint_kontakion", "N:temple_kontakion"],
  [SAINT]:     ["sunday_troparion", "temple_troparion", "saint_troparion", "sunday_kontakion", "temple_kontakion", "G:saint_kontakion", "N:steadfast_protectress"],
};
// §1E p.23, temple of a saint at vigil rank: the temple slots are absent.
const SUNDAY_VIGIL_SAINT_TEMPLE = ["sunday_troparion", "saint_troparion", "sunday_kontakion", "G:saint_kontakion", "N:steadfast_protectress"];
// §1B p.15, two saints: the same tables, with both saints' hymns in the saint slots.
// §1E p.23 — a feast of the Theotokos on Sunday, regardless of temple.
const SUNDAY_THEOTOKOS_FEAST = ["sunday_troparion", "feast_troparion", "G:sunday_kontakion", "N:feast_kontakion"];
// §1F1 p.26–27 / §1F2 p.30 — Sunday in a forefeast or afterfeast.
const SUNDAY_FEAST_PERIOD = {
  lordFeast: {
    [LORD]:      ["sunday_troparion", "feast_troparion", "saint_troparion", "sunday_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
    [THEOTOKOS]: ["sunday_troparion", "feast_troparion", "temple_troparion", "saint_troparion", "sunday_kontakion", "feast_kontakion", "G:saint_kontakion", "N:temple_kontakion"],
    [SAINT]:     ["sunday_troparion", "feast_troparion", "temple_troparion", "saint_troparion", "sunday_kontakion", "temple_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
  },
  theotokosFeast: {
    [LORD]:      ["sunday_troparion", "feast_troparion", "saint_troparion", "sunday_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
    [THEOTOKOS]: ["sunday_troparion", "feast_troparion", "saint_troparion", "sunday_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
    [SAINT]:     ["sunday_troparion", "feast_troparion", "temple_troparion", "saint_troparion", "sunday_kontakion", "temple_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
  },
};
// §1F2 p.30 "*": vigil rank in a temple of a saint — temple slots dropped.
const SUNDAY_FEAST_PERIOD_VIGIL_SAINT_TEMPLE = ["sunday_troparion", "feast_troparion", "saint_troparion", "sunday_kontakion", "G:saint_kontakion", "N:feast_kontakion"];
// §1F3 p.32 — apodosis of a Great Feast on Sunday.
const SUNDAY_APODOSIS = ["sunday_troparion", "feast_troparion", "G:sunday_kontakion", "N:feast_kontakion"];

// Weekday, simple / double / six-stichera (§2A p.38–39; §2B and §2C defer).
const WEEKDAY_SIMPLE = {
  [LORD]: {
    mtt: ["temple_troparion", "dow_troparion", "saint_troparion", "dow_kontakion", "saint_kontakion", "G:departed_kontakion", "N:temple_kontakion"],
    wf:  ["dow_troparion", "saint_troparion", "saint_kontakion", "G:departed_kontakion", "N:dow_kontakion"],
    sat: ["temple_troparion", "dow_troparion", "saint_troparion", "temple_kontakion", "saint_kontakion", "G:departed_kontakion", "N:dow_kontakion"],
  },
  [THEOTOKOS]: {
    mtt: ["temple_troparion", "dow_troparion", "saint_troparion", "dow_kontakion", "saint_kontakion", "G:departed_kontakion", "N:temple_kontakion"],
    wf:  ["dow_troparion", "temple_troparion", "saint_troparion", "dow_kontakion", "saint_kontakion", "G:departed_kontakion", "N:temple_kontakion"],
    sat: ["temple_troparion", "dow_troparion", "saint_troparion", "temple_kontakion", "saint_kontakion", "G:departed_kontakion", "N:dow_kontakion"],
  },
  [SAINT]: {
    mtt: ["dow_troparion", "temple_troparion", "saint_troparion", "dow_kontakion", "temple_kontakion", "saint_kontakion", "G:departed_kontakion", "N:steadfast_protectress"],
    wf:  ["dow_troparion", "temple_troparion", "saint_troparion", "dow_kontakion", "temple_kontakion", "saint_kontakion", "G:departed_kontakion", "N:steadfast_protectress"],
    sat: ["dow_troparion", "saint_troparion", "saint_kontakion", "G:departed_kontakion", "N:dow_kontakion"],
  },
};
// Weekday, doxology / polyeleos / vigil (§2D p.47, §2E p.50, §2F p.54).
const WEEKDAY_HIGH = {
  lordOrTheotokos: ["temple_troparion", "saint_troparion", "G:saint_kontakion", "N:temple_kontakion"],
  [SAINT]:         ["temple_troparion", "saint_troparion", "temple_kontakion", "G:saint_kontakion", "N:steadfast_protectress"],
  vigilSaintTemple: ["saint_troparion", "G:saint_kontakion", "N:steadfast_protectress"],          // §2F p.54, temple of a saint
  vigilTheotokosFeast: ["feast_troparion", "GN:feast_kontakion"],                                // §2F p.54
};
// Weekday in a forefeast or afterfeast (§2G1 p.58–59; §2G2 p.62–63).
const WEEKDAY_FEAST_PERIOD = {
  lordFeast: {
    [LORD]:      ["feast_troparion", "saint_troparion", "G:saint_kontakion", "N:feast_kontakion"],
    [THEOTOKOS]: ["feast_troparion", "temple_troparion", "saint_troparion", "feast_kontakion", "G:saint_kontakion", "N:temple_kontakion"],
    [SAINT]:     ["feast_troparion", "temple_troparion", "saint_troparion", "temple_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
  },
  theotokosFeast: {
    [LORD]:      ["temple_troparion", "feast_troparion", "saint_troparion", "temple_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
    [THEOTOKOS]: ["feast_troparion", "saint_troparion", "G:saint_kontakion", "N:feast_kontakion"],
    [SAINT]:     ["feast_troparion", "temple_troparion", "saint_troparion", "temple_kontakion", "G:saint_kontakion", "N:feast_kontakion"],
  },
};
// §2G2: polyeleos/vigil in a feast period, temple of a saint — temple slots absent.
const WEEKDAY_FEAST_PERIOD_HIGH_SAINT_TEMPLE = ["feast_troparion", "saint_troparion", "G:saint_kontakion", "N:feast_kontakion"];
// §2G3 p.65 apodosis; §2G4 p.67 apodosis with a vigil saint; Great Feast day.
const WEEKDAY_APODOSIS = ["feast_troparion", "GN:feast_kontakion"];
const WEEKDAY_APODOSIS_VIGIL = ["feast_troparion", "saint_troparion", "G:saint_kontakion", "N:feast_kontakion"];
const GREAT_FEAST_DAY = ["feast_troparion", "GN:feast_kontakion"];

const HIGH_RANKS = new Set(["doxology", "polyeleos", "vigil"]);

/**
 * Pick the table. Returns { slots, section, page, quote, notes[], templeNeeded }.
 * templeNeeded: the chosen table varies by temple and no dedication is known.
 */
export function entranceOrder({ liturgicalData: ld = {}, menaion = null, templeType = null, isDouble = false, pentEntry = null }) {
  void pentEntry;
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const rank = (menaion && menaion.rank) || "simple";
  const isVigil = rank === "vigil";
  const greatFeast = rank === "great_feast";
  const feast = ld.feastPeriod && ld.feastPeriod.feast;
  const period = ld.feastPeriod && ld.feastPeriod.periodType;   // feast | forefeast | afterfeast | apodosis
  const season = ld.season;
  // A Great Feast's own page says whose feast it is when the calendar gives no period.
  const feastIsLord = feast ? !!feast.forLord : !!(greatFeast && menaion.lordsFeast);
  const feastIsTheotokos = feast ? !feast.forLord : !!(greatFeast && !menaion.lordsFeast);
  const notes = [];
  const t = templeType;

  if (ld.isPentecostarion || season === "pentecostarion" || season === "brightweek") {
    return pentecostarionOrder({ offset: ld.paschaOffset, pent: pentEntry, menaion, templeType: t, isVigil, notes });
  }
  // ODS 3rd ed. vol. III prints the order for this service on this day: it
  // overrides the tables below (ruled 14 Nov 2026; src/data/ods_v3/orders.js).
  const ord = menaion && menaion.order && menaion.order.liturgy && menaion.order.liturgy.entrance;
  if (ord) {
    const cite = ods3Cite(menaion.order, "liturgy"); const byTemple = !Array.isArray(ord);
    if (byTemple && !t) return { slots: null, section: cite, templeNeeded: true, notes, quote: "" };
    return { slots: byTemple ? ord[t] : ord, templeDependent: byTemple, section: cite, ods3: true,
      quote: "The order ODS vol. III appoints for this date" + (byTemple ? ", in a temple dedicated to " + templeWords(t) : "") + ".", notes, templeNeeded: false };
  }
  const isGreat = season === "great_feast" || period === "feast" || greatFeast;
  // A feast of the Theotokos on a Sunday keeps the Sunday (§1E); a feast of the
  // Lord sets the Sunday service aside (ch. 5), so it takes the feast's own order.
  if (isGreat && isSunday && feastIsTheotokos) {
    return { templeDependent: false, slots: SUNDAY_THEOTOKOS_FEAST, section: "§1E", page: "p.23", quote: "But if it be a feast of the Theotokos: Sunday troparion / Troparion of the Feast / Glory… Sunday kontakion / Now and ever… Kontakion of the Feast", notes, templeNeeded: false };
  }
  if (isGreat) {
    return { templeDependent: false, slots: GREAT_FEAST_DAY, section: "Great Feast", quote: "Troparion of the feast; Glory… Now and ever… kontakion of the feast (the Menaion's own printed order; cf. §2G3 for the apodosis).", notes, templeNeeded: false };
  }
  if (isSunday) {
    if (season === "apodosis" || period === "apodosis") {
      return { templeDependent: false, slots: SUNDAY_APODOSIS, section: "§1F3", page: "p.32", quote: "Sunday troparion / Troparion of the feast / Glory… Sunday kontakion / Now and ever… kontakion of the feast", notes, templeNeeded: false };
    }
    if (period === "forefeast" || period === "afterfeast") {
      if (!t) return { slots: null, section: HIGH_RANKS.has(rank) ? "§1F2" : "§1F1", templeNeeded: true, notes, quote: "" };
      if (isVigil && t === SAINT) {
        notes.push("§1F2 *: If it be a service of vigil-rank, the troparion and kontakion of the temple are not chanted.");
        return { slots: SUNDAY_FEAST_PERIOD_VIGIL_SAINT_TEMPLE, section: "§1F2", page: "p.30", quote: "Sunday troparion / Troparion of the feast / Troparion of the saint / Sunday kontakion / Glory… kontakion of the saint / Now and ever… kontakion of the feast", notes, templeNeeded: false };
      }
      const tbl = feastIsLord ? SUNDAY_FEAST_PERIOD.lordFeast : SUNDAY_FEAST_PERIOD.theotokosFeast;
      return { slots: tbl[t], section: HIGH_RANKS.has(rank) && rank !== "doxology" ? "§1F2" : "§1F1", page: HIGH_RANKS.has(rank) && rank !== "doxology" ? "p.30" : "p.26–27",
        quote: (feastIsLord ? "If it be a feast of the Lord" : "If it be a feast of the Theotokos") + ", in a temple dedicated to " + templeWords(t) + ".", notes, templeNeeded: false };
    }
    if (!t) return { slots: null, section: isDouble ? "§1B" : "§1A", templeNeeded: true, notes, quote: "" };
    if (isDouble) { notes.push("§1B: the troparia and kontakia of both saints are used."); return { slots: SUNDAY_ORDINARY[t], section: "§1B", page: "p.15", quote: "Sunday, double commemoration, in a temple dedicated to " + templeWords(t) + ".", notes, templeNeeded: false }; }
    if (isVigil && t === SAINT) {
      notes.push("§1E: at vigil rank in a temple of a saint the temple troparion and kontakion are not chanted.");
      return { slots: SUNDAY_VIGIL_SAINT_TEMPLE, section: "§1E", page: "p.23", quote: "Sunday troparion / Troparion from the Menaion / Sunday kontakion / Glory… Kontakion from the Menaion / Now and ever… Protection of Christians…", notes, templeNeeded: false };
    }
    const sec = rank === "vigil" ? "§1E" : rank === "polyeleos" ? "§1D → §1C" : (rank === "six_stichera" || rank === "doxology") ? "§1C" : "§1A";
    const page = rank === "vigil" ? "p.22–23" : rank === "polyeleos" ? "p.19" : (rank === "six_stichera" || rank === "doxology") ? "p.18" : "p.11–12";
    if (t === LORD) notes.push("On Sunday, in a temple dedicated to the Lord, the troparion and kontakion of the temple are not chanted (§1A).");
    return { slots: SUNDAY_ORDINARY[t], section: sec, page, quote: "Sunday, in a temple dedicated to " + templeWords(t) + ".", notes, templeNeeded: false };
  }

  // ── weekday ──
  if (season === "apodosis" || period === "apodosis") {
    if (isVigil) return { templeDependent: false, slots: WEEKDAY_APODOSIS_VIGIL, section: "§2G4", page: "p.67", quote: "Troparion of the feast / Troparion of the saint / Glory… Kontakion of the saint / Now and ever… Kontakion of the feast", notes, templeNeeded: false };
    // §2G3 names the feast only. Where the day's page also prints a troparion and
    // kontakion of its saints for the Liturgy, they are sung as printed (PRINTED
    // FIRST), in the order the page and §2G4 both give.
    if (menaion && menaion.saints.troparia.length) {
      notes.push("§2G3 names the feast alone; this day's Menaion also prints the troparion and kontakion of its saints at the Liturgy, and they are sung as printed.");
      return { templeDependent: false, slots: WEEKDAY_APODOSIS_VIGIL, section: "§2G3", page: "p.65", quote: "Troparion of the feast / Troparion of the saints / Glory… kontakion of the saints / Now and ever… kontakion of the feast (as the Menaion prints for this day).", notes, templeNeeded: false };
    }
    return { templeDependent: false, slots: WEEKDAY_APODOSIS, section: "§2G3", page: "p.65", quote: "We sing the troparion of the feast; Glory… Now and ever… and the kontakion of the feast.", notes, templeNeeded: false };
  }
  if (period === "forefeast" || period === "afterfeast") {
    const high = rank === "polyeleos" || rank === "vigil";
    if (!t) return { slots: null, section: high ? "§2G2" : "§2G1", templeNeeded: true, notes, quote: "" };
    if (high && t === SAINT) return { slots: WEEKDAY_FEAST_PERIOD_HIGH_SAINT_TEMPLE, section: "§2G2", page: "p.62–63", quote: (feastIsLord ? "If it be a feast of the Lord" : "If it be a feast of the Theotokos") + ", in a temple dedicated to a saint (temple troparion and kontakion absent).", notes, templeNeeded: false };
    const tbl = feastIsLord ? WEEKDAY_FEAST_PERIOD.lordFeast : WEEKDAY_FEAST_PERIOD.theotokosFeast;
    if (!high && isDouble) notes.push("§2G1 *: If it be a double-commemoration and the Menaion provide two troparia, they are both chanted. If there be two kontakia provided, the first is chanted before Glory…, and the second following Glory….");
    return { slots: tbl[t], section: high ? "§2G2" : "§2G1", page: high ? "p.62–63" : "p.58–59", quote: (feastIsLord ? "If it be a feast of the Lord" : "If it be a feast of the Theotokos") + ", in a temple dedicated to " + templeWords(t) + ".", notes, templeNeeded: false };
  }
  if (HIGH_RANKS.has(rank)) {
    if (isVigil && feastIsTheotokos && isGreat) return { templeDependent: false, slots: WEEKDAY_HIGH.vigilTheotokosFeast, section: "§2F", page: "p.54", quote: "If it be a feast of the Theotokos: Troparion of the feast; Glory… Now and ever… kontakion of the feast", notes, templeNeeded: false };
    if (!t) return { slots: null, section: rank === "vigil" ? "§2F" : rank === "polyeleos" ? "§2E" : "§2D", templeNeeded: true, notes, quote: "" };
    const sec = rank === "vigil" ? "§2F" : rank === "polyeleos" ? "§2E" : "§2D";
    const page = rank === "vigil" ? "p.54" : rank === "polyeleos" ? "p.50" : "p.47";
    if (t === SAINT) {
      if (isVigil) { notes.push("§2F: at vigil rank in a temple of a saint the temple troparion and kontakion are not chanted."); return { slots: WEEKDAY_HIGH.vigilSaintTemple, section: sec, page, quote: "Troparion from the Menaion / Glory… kontakion from the Menaion / Now and ever… Protection of Christians…", notes, templeNeeded: false }; }
      return { slots: WEEKDAY_HIGH[SAINT], section: sec, page, quote: "Troparion of the temple / Troparion from the Menaion / Kontakion of the temple / Glory… kontakion from the Menaion / Now and ever… Protection of Christians…", notes, templeNeeded: false };
    }
    return { slots: WEEKDAY_HIGH.lordOrTheotokos, section: sec, page, quote: "Troparion of the temple / Troparion from the Menaion / Glory… kontakion from the Menaion / Now and ever… kontakion of the temple", notes, templeNeeded: false };
  }
  // §2A (simple), §2B (double: both saints), §2C (six-stichera) — by day of week.
  if (!t) return { slots: null, section: rank === "six_stichera" ? "§2C → §2A" : isDouble ? "§2B → §2A" : "§2A", templeNeeded: true, notes, quote: "" };
  const dk = dow === 6 ? "sat" : (dow === 3 || dow === 5) ? "wf" : "mtt";
  const slots = WEEKDAY_SIMPLE[t][dk];
  if (isDouble) notes.push("§2B: If there be troparia and kontakia for both saints, both are used.");
  if (t === LORD && dk === "wf") notes.push("§2A: if the priest so desires, the kontakion of the temple may be sung instead of that for the day of the week.");
  if (t === SAINT && dk !== "sat") notes.push("§2A fn.31: If the commemoration for the day of the week is the same as that for the temple (e.g. a temple of the Holy Angels on Monday), the troparion and kontakion of the temple are not chanted.");
  if (dow === 4) notes.push("§2A: on Thursday, two troparia and two kontakia of the day of the week (the Apostles; St Nicholas).");
  const sec = rank === "six_stichera" ? "§2C → §2A" : isDouble ? "§2B → §2A" : "§2A";
  return { slots, section: sec, page: "p.38–39", quote: "In a temple dedicated to " + templeWords(t) + ", on " + (dk === "sat" ? "Saturday" : dk === "wf" ? "Wednesday or Friday" : "Monday, Tuesday or Thursday") + ".", notes, templeNeeded: false };
}

// ── Pentecostarion (Fekula ch.4) ───────────────────────────────────────────
// Weekdays follow the four-period table on pp.169–170; Sundays and feasts the
// §4B blocks. The day's own Pentecostarion entry supplies "the troparion of the
// preceding Sunday / of the feast" and its kontakion, because the encoder
// captured exactly what that day's PDF prints (hours-tool's Hours use the same
// fields). Menaion saint slots follow the table; `menaion_set_aside` on the
// entry removes them. ◊ (pp.169–170): at vigil rank in a temple of a saint the
// temple troparion and kontakion are not chanted.
function pentecostarionOrder({ offset, pent, menaion, templeType: t, isVigil, notes }) {
  const R = (slots, section, page, quote, extra = {}) => ({ slots, section, page, quote, notes, templeDependent: false, templeNeeded: false, ...extra });
  if (offset == null) return R(null, "ch.4", null, "", { unresolved: true, notes: ["Pascha offset unknown."] });
  if (offset >= 1 && offset <= 6) return R(null, "§4B1", "p.181", "Bright Week: the Paschal Liturgy — Christ is risen…, the hypakoe and the kontakion of Pascha in place of any troparia; festal antiphons.", { unresolved: true, notes: ["The Paschal Liturgy is not assembled."] });
  if (!pent) return R(null, "ch.4", null, "", { unresolved: true, notes: ["No Pentecostarion entry is encoded for Pascha + " + offset + "."] });
  const setAside = !!pent.menaion_set_aside;
  const saintSlots = (!setAside && menaion && menaion.saints.troparia.length) ? ["saint_troparion", "G:saint_kontakion"] : [];
  // temple slots per the table's own conditions
  const templeTrop = (period) => (t === SAINT || (period === 1 && t === THEOTOKOS)) && !(isVigil && t === SAINT) ? ["temple_troparion"] : [];
  const templeKont = () => (t === SAINT && !(isVigil && t === SAINT)) ? ["temple_kontakion"] : [];
  if (isVigil && t === SAINT) notes.push("◊ If it be a service of Vigil rank, and it be a temple of a saint, the troparion and kontakion of the temple are not chanted.");
  const weekday = (period, label, section, page) => {
    const slots = ["pent:troparion", ...templeTrop(period), ...saintSlots.filter(x => !x.includes("kontakion")), ...templeKont(),
      ...saintSlots.filter(x => x.includes("kontakion")), "N:pent:kontakion"];
    // With no saint kontakion, "Glory…" falls to the Pentecostarion kontakion as a single Glory… Now and ever….
    const fixed = saintSlots.length ? slots : slots.map(x => x === "N:pent:kontakion" ? "GN:pent:kontakion" : x);
    return R(fixed, section, page, label, { templeDependent: true });
  };
  const isSunday = offset % 7 === 0;
  // ── feasts and their apodoses: troparion of the feast; Glory… Now and ever… kontakion of the feast
  if ([24, 39, 49, 50].includes(offset)) return R(["pent:troparion", "GN:pent:kontakion"], offset === 24 ? "§4B8" : offset === 39 ? "§4B12" : offset === 49 ? "§4B15" : "§4B16", offset === 24 ? "p.193" : offset === 39 ? "p.201" : "p.206–207", "Troparion of the feast; Glory… Now and ever… kontakion of the feast.");
  if ([31, 47, 55].includes(offset)) return R(["pent:troparion", "GN:pent:kontakion"], offset === 31 ? "§4B10" : offset === 47 ? "§4B12" : "§4B15", null, "Apodosis: troparion of the feast; Glory… Now and ever… kontakion of the feast.");
  if (offset === 7) return R(["pent:troparion", "GN:pent:kontakion"], "§4B5", "p.187", "We sing the troparion Whilst the tomb was sealed…; Glory… Now and ever… and the kontakion With his searching right hand….");
  if (offset === 38) return R(["pent:troparion", "G:pent:kontakion_ode3", "N:pent:kontakion_ode6"], "§4B11", "p.198", "Sunday troparion, Let us worship…; Glory… kontakion of the Blind Man; Now and ever… kontakion of Pascha.");
  if (offset === 42) return R(["pent:troparion", "pent:troparion_3", "pent:troparion_2", "G:pent:kontakion_ode6", "N:pent:kontakion"], "§4B13", "p.203", "Sunday troparion / Troparion of the feast / Troparion of the Fathers / Glory… kontakion of the Fathers / Now and ever… kontakion of the feast.");
  if (offset === 48) return R(["pent:troparion", "GN:pent:kontakion"], "§4B14 → §383", "p.204", "Saturday of the Departed: as set forth for the Saturday of Meatfare (§383); the Pentecostarion's printed troparion and kontakion.", { notes: [...notes, "§383 (Meatfare Saturday) is not yet extracted; the order shown is the entry's printed troparion and kontakion."] });
  if (offset === 56) return R(["pent:troparion", "pent:troparion_2", "GN:pent:kontakion"], "§4B17", "p.209", "Sunday troparion / Troparion of All Saints / Glory… Now and ever… kontakion of All Saints.");
  if (offset === 28) return R(["pent:troparion", "pent:troparion_3", "G:pent:kontakion_ode6", "N:pent:kontakion"], "§4B9", "p.195", "Sunday troparion / Troparion of the feast / Glory… kontakion of the Samaritan / Now and ever… kontakion of the feast.");
  if (isSunday) {
    // §4B6 / §4B7 — the 2nd (Myrrhbearers), 3rd, 5th, 6th Sundays
    const high = menaion && !setAside && (menaion.rank === "polyeleos" || menaion.rank === "vigil");
    if (high) return R(["pent:troparion", "saint_troparion", "G:saint_kontakion", "N:pent:kontakion_ode6"], "§4B7", "p.192", "Sunday troparion / Troparion from the Menaion / Glory… kontakion from the Menaion / Now and ever… kontakion from the Pentecostarion.");
    return R(["pent:troparion", "G:pent:kontakion_ode6", "N:pent:kontakion_ode3"], "§4B6", "p.189", "Sunday troparion (the Myrrhbearers' two on their Sunday); Glory… kontakion from the Pentecostarion; Now and ever… kontakion of Pascha, Though Thou, O deathless….");
  }
  if (offset >= 8 && offset <= 13) return weekday(1, "The week following the Sunday of Saint Thomas.", "ch.4 (1)", "p.169");
  if (offset >= 15 && offset <= 20) { notes.push("Fekula lists three troparia here — Noble Joseph…, When Thou didst descend…, Unto the Myrrh-bearing Women…; the entry supplies what its PDF prints."); return weekday(2, "The week following the Sunday of the Myrrh-bearing Women.", "ch.4 (2)", "p.170"); }
  if ((offset >= 25 && offset <= 30) || (offset >= 40 && offset <= 46) || (offset >= 51 && offset <= 54)) return weekday(4, "During the afterfeasts of Mid-Pentecost, Ascension and Pentecost: troparion of the Feast … Now and ever… kontakion of the Feast.", "ch.4 (4)", "p.170");
  if ((offset >= 22 && offset <= 23) || (offset >= 32 && offset <= 37)) { notes.push("Printed 'Now and ever… kontakion of Thomas Sunday' in period (3) is read as the kontakion of the preceding Sunday, by parallel with periods (1), (2) and (4) and the Hours table on p.169."); return weekday(3, "The fourth, fifth and sixth weeks after Pascha: troparion of the preceding Sunday … Now and ever… kontakion of the preceding Sunday.", "ch.4 (3)", "p.169–170"); }
  return R(null, "ch.4", null, "", { unresolved: true, notes: ["Pascha + " + offset + " is outside the Pentecostarion table."] });
}

function templeWords(t) { return t === LORD ? "the Lord" : t === THEOTOKOS ? "the Theotokos" : "a saint"; }

/**
 * Resolve the slots to hymns.
 * sources: {
 *   sundayTroparion(tone), sundayKontakion(tone)        → { tone, text, path? }
 *   temple → { type, label, troparion:{tone,text}|null, kontakion:{tone,text}|null } | null
 *   feast  → { name, troparion, kontakion } | null      (the feast day's own Menaion entry)
 *   dowKontakia(dow) → [{ label, tone, text }]           (the day-of-week kontakia; Thursday two)
 *   dowTroparia(dow) → [{ label, tone, text }] | null    (not yet encoded → null)
 *   departedKontakion → { tone, text }, protectress → { tone, text }
 * }
 * Returns { elements, toneLabel, unresolved, section, quote, notes }.
 */
export function resolveEntrance({ liturgicalData: ld = {}, menaion = null, pentEntry = null, sources = {} }) {
  const temple = sources.temple || null;
  const templeType = temple && temple.type;
  const inFeastPeriod = ["forefeast", "afterfeast", "apodosis"].includes(ld.season) || ["forefeast", "afterfeast", "apodosis"].includes(ld.feastPeriod && ld.feastPeriod.periodType);
  // Outside a feast period, a second printed troparion is a second saint (double).
  const isDouble = !!(menaion && menaion.saints.troparia.length > 1 && !inFeastPeriod && ld.season !== "great_feast" && menaion.rank !== "great_feast");
  const order = entranceOrder({ liturgicalData: ld, menaion, templeType, isDouble, pentEntry });
  const cite = { section: order.section, note: [order.quote, ...(order.notes || []), ...((menaion && menaion.notes) || [])].filter(Boolean).join(" ") };
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const tone = ld.tone;
  const els = [];
  let unresolved = !!order.unresolved;
  const tones = [];

  if (order.unresolved) {
    return { elements: [{ id: "lit-tk-order", type: "movable", label: "Troparia and Kontakia", text: (order.notes || []).join(" ") || order.quote, unresolved: true, unresolvedNote: "not assembled for this day", source: "—", fekula: cite }], toneLabel: null, unresolved: true, section: order.section, quote: order.quote, notes: order.notes };
  }
  if (order.templeNeeded) {
    return { elements: [
      { id: "lit-tk-temple", type: "temple_selector", templeMode: "troparion", label: "Temple dedication",
        prompt: "The order of the troparia and kontakia after the Little Entrance depends on the temple's dedication (Fekula " + order.section + "). Select your parish dedication." },
      { id: "lit-tk-order", type: "movable", label: "Troparia and Kontakia", text: "Choose the temple dedication above; Fekula " + order.section + " orders the troparia and kontakia by whether the temple is dedicated to the Lord, the Theotokos, or a saint.", unresolved: true, unresolvedNote: "temple dedication not set", source: "—", fekula: cite },
    ], toneLabel: null, unresolved: true, section: order.section, quote: order.quote, notes: order.notes };
  }

  const saintName = (menaion && menaion.saintName) || "the saint of the day";
  // A Menaion slot as a hymn: the text as shown (the OCA's undefined '^' mark
  // hidden, Q-0007), its tone, where it is stored, and which witness it is from.
  const fromPlan = (sl, label) => {
    if (!sl || !sl.node) return null;
    const n = sl.node;
    const source = sl.source === "oca" ? "OCA service texts" + (n.subject ? " · " + n.subject : "")
      : sl.source === "general" ? "General Menaion · " + (n.generalType || "")
      : "Menaion · " + saintName;
    return { label: label + (sl.source === "menaion" && n.saint && !["feast", "forefeast"].includes(n.saint) ? " · " + n.saint : ""), tone: n.tone != null ? n.tone : null, text: shown(n), source, path: n.path || null };
  };
  // On the feast day itself the feast's hymns are the service's own.
  const ownFeast = !!(menaion && menaion.kind === "feast");
  const feastSlot = (which) => {
    const own = menaion && (ownFeast ? menaion.saints[which === "troparion" ? "troparia" : "kontakia"][0] : menaion.feast[which]);
    if (own) return fromPlan(own, (which === "troparion" ? "Troparion" : "Kontakion") + " of the Feast");
    const f = sources.feast || null;   // the feast day's own service, when this day's page does not print the feast's hymn
    return f && f[which] ? { label: (which === "troparion" ? "Troparion" : "Kontakion") + " of the Feast", ...f[which], source: "Menaion · " + f.name } : null;
  };
  const feast = sources.feast || null;
  // The temple picker rides with the hymns whenever the table has a temple
  // slot, showing the current dedication and letting the reader change it in
  // place — the same TempleSelector the Typica and Litiya use.
  // Shown whenever the CHOICE of table depended on the temple — even when the
  // chosen order has no temple hymns (a temple of the Lord on Sunday, §1A) —
  // so the dedication can always be re-picked. Only the tables Fekula prints
  // without temple variation (apodosis, Great Feast, a Theotokos feast) omit it.
  // Placement (Bill, Sept 19 2026): the picker sits DIRECTLY ABOVE the first
  // verse it changes — the temple's own troparion (or kontakion, if the table
  // has only that) — so the effect of a choice is visible right below it. When
  // the chosen order carries no temple hymn at all it stands at the head of the
  // list, since the whole order is what the choice governs.
  const templeSelector = order.templeDependent !== false ? {
    id: "lit-tk-temple", type: "temple_selector", templeMode: "troparion", compact: true, label: "Temple dedication",
    compactNote: "In a temple dedicated to the Lord, to the Theotokos, or to a saint, the troparia and kontakia stand in a different order; the temple's own troparion and kontakion take the slots that follow. — Fekula ch.1 / ch.2",
    fekula: { section: order.section, note: "The order of the troparia and kontakia depends on the temple's dedication." } } : null;
  const hymn = (slot) => {
    const S = sources;
    switch (slot) {
      case "sunday_troparion": { const h = S.sundayTroparion && S.sundayTroparion(tone); return h && { label: "Sunday Troparion", ...h, source: "Octoechos · Tone " + tone }; }
      case "sunday_kontakion": { const h = S.sundayKontakion && S.sundayKontakion(tone); return h && { label: "Sunday Kontakion", ...h, source: "Octoechos · Tone " + tone }; }
      case "feast_troparion":  return feastSlot("troparion");
      case "feast_kontakion":  return feastSlot("kontakion");
      case "temple_troparion": return temple && temple.troparion && { label: "Troparion of the Temple", ...temple.troparion, source: "Temple · " + temple.label };
      case "temple_kontakion": return temple && temple.kontakion && { label: "Kontakion of the Temple", ...temple.kontakion, source: "Temple · " + temple.label };
      // Every troparion / kontakion the page prints for the day's saints, in print order.
      case "saint_troparion":  { const l = menaion ? menaion.saints.troparia.map(x => fromPlan(x, "Troparion")).filter(Boolean) : []; return l.length ? l : null; }
      case "saint_kontakion":  { const l = menaion ? menaion.saints.kontakia.map(x => fromPlan(x, "Kontakion")).filter(Boolean) : []; return l.length ? l : null; }
      case "departed_kontakion": return S.departedKontakion && { label: "Kontakion of the Departed", ...S.departedKontakion, source: "Horologion" };
      case "steadfast_protectress": return S.protectress && { label: "Theotokion — Protection of Christians", ...S.protectress, source: "Horologion" };
      case "dow_kontakion": { const ks = S.dowKontakia ? S.dowKontakia(dow) : null; return ks && ks.length ? ks.map(k => ({ label: k.label, tone: k.tone, text: k.text, source: "Horologion · kontakion of the day" })) : null; }
      case "pent:troparion": case "pent:troparion_2": case "pent:troparion_3": case "pent:kontakion_ode3": case "pent:kontakion_ode6": case "pent:kontakion": {
        if (!pentEntry) return null;
        const f = slot.slice(5);
        const v = f === "kontakion" ? (pentEntry.hours_kontakion || pentEntry.kontakion_ode6 || pentEntry.kontakion_ode3) : pentEntry[f];
        if (!v) return null;
        const label = f.startsWith("troparion") ? (f === "troparion" ? "Troparion (Pentecostarion)" : "Troparion (Pentecostarion, " + (f === "troparion_2" ? "second" : "third") + ")") : "Kontakion (Pentecostarion)";
        const src = "Pentecostarion · " + (pentEntry.source_file || pentEntry.name || "Pascha + " + ld.paschaOffset);
        return (Array.isArray(v) ? v : [v]).map(x => ({ label, tone: x.tone, text: x.text, source: src }));
      }
      case "dow_troparion": { const ts = S.dowTroparia ? S.dowTroparia(dow) : null; return ts && ts.length ? ts.map(k => ({ label: k.label, tone: k.tone, text: k.text, source: k.source || "HTM · troparion of the day" })) : null; }
      default: return null;
    }
  };

  let pickerPlaced = false;
  order.slots.forEach((spec, i) => {
    const m = spec.match(/^(GN|G|N):(.*)$/);
    const prefix = m ? m[1] : null, slot = m ? m[2] : spec;
    const lead = prefix === "GN" ? "Glory… Now and ever…" : prefix === "G" ? "Glory…" : prefix === "N" ? "Now and ever…" : null;
    if (templeSelector && !pickerPlaced && (slot === "temple_troparion" || slot === "temple_kontakion")) {
      els.push(templeSelector); pickerPlaced = true;
    }
    let h = hymn(slot);
    const list = Array.isArray(h) ? h : (h ? [h] : []);
    if (!list.length) {
      unresolved = true;
      els.push({ id: `lit-tk-${i}-${slot}`, type: "movable", label: (lead ? lead + " " : "") + slotLabel(slot), text: missingText(slot, saintName, temple, feast), unresolved: true,
        unresolvedNote: slot === "dow_troparion" ? "troparia of the day of the week not yet encoded" : "not available for this date", source: "—", fekula: cite });
      return;
    }
    // "If there be two kontakia provided, the first is chanted before Glory…, and
    // the second following Glory…" (§2G1 *): the lead stands on the last of them.
    const leadAt = slot === "saint_kontakion" && prefix === "G" ? list.length - 1 : 0;
    list.forEach((x, j) => {
      if (x.tone != null) tones.push(x.tone);
      els.push({ id: `lit-tk-${i}-${slot}${list.length > 1 ? "-" + j : ""}`, type: "movable",
        label: (lead && j === leadAt ? lead + " " : "") + x.label, text: x.text, toneNote: x.tone != null ? "Tone " + x.tone : null,
        source: x.source, ...(x.path ? { srcPath: x.path } : {}), fekula: j === 0 && i === 0 ? cite : { section: order.section, note: slotLabel(slot) + " — " + order.section + (order.page ? " " + order.page : "") } });
    });
  });
  // No temple slot in the chosen order (e.g. §1A, temple of the Lord): the
  // picker heads the list so the dedication stays re-pickable.
  if (templeSelector && !pickerPlaced) els.unshift(templeSelector);
  const toneLabel = tones.length ? [...new Set(tones)].map(t => "Tone " + t).join(" · ") : null;
  return { elements: els, toneLabel, unresolved, section: order.section, quote: order.quote, notes: order.notes };
}

function slotLabel(slot) {
  return { sunday_troparion: "Sunday Troparion", sunday_kontakion: "Sunday Kontakion", feast_troparion: "Troparion of the Feast", feast_kontakion: "Kontakion of the Feast",
    temple_troparion: "Troparion of the Temple", temple_kontakion: "Kontakion of the Temple", dow_troparion: "Troparion of the day of the week", dow_kontakion: "Kontakion of the day of the week",
    saint_troparion: "Troparion of the saint", saint_kontakion: "Kontakion of the saint",
    departed_kontakion: "With the saints give rest", steadfast_protectress: "Protection of Christians",
    "pent:troparion": "Troparion (Pentecostarion)", "pent:troparion_2": "Second troparion (Pentecostarion)", "pent:troparion_3": "Third troparion (Pentecostarion)",
    "pent:kontakion": "Kontakion (Pentecostarion)", "pent:kontakion_ode3": "Kontakion (Pentecostarion, Ode III)", "pent:kontakion_ode6": "Kontakion (Pentecostarion, Ode VI)" }[slot] || slot;
}
function missingText(slot, saintName, temple, feast) {
  if (slot === "dow_troparion") return "The troparion of the day of the week (Horologion) is appointed here; the daily troparia are not yet encoded.";
  if (slot.startsWith("pent:")) return "The Pentecostarion entry for this day does not carry the " + slot.slice(5).replace(/_/g, " ") + " this slot needs.";
  if (slot.startsWith("temple")) return "The temple " + (slot.endsWith("troparion") ? "troparion" : "kontakion") + " for " + (temple ? temple.label : "the parish dedication") + " is not encoded yet.";
  if (slot.startsWith("feast")) return "The feast's " + (slot.endsWith("troparion") ? "troparion" : "kontakion") + (feast ? " (" + feast.name + ")" : "") + " is not printed in this day's service, and the feast day's own service is not encoded.";
  if (slot.startsWith("saint")) return "The Menaion service for " + saintName + " prints no " + (slot.endsWith("troparion") ? "troparion" : "kontakion") + ", or the day is not yet encoded.";
  return "Not available.";
}

// ── Beatitudes ─────────────────────────────────────────────────────────────

// The Menaion's Beatitude troparia come from the V2 plan (beatitudesOf): the
// troparia as printed, a troparion marked "Twice" standing twice, set against the
// page's own rubric ("4 from the Oktoechos, and 4 from ODE III of the canon…").
const menItems = (part, source) => (part.items || []).map(it => ({ text: it.text, label: "Ode " + part.ode + (it.labels.includes("theotokion") ? " · Theotokion" : ""), source, path: it.path }));

/**
 * sources: { sundayBeatitudes(tone) → { troparia:[{text}], gloria:{text}, theotokion:{text} },
 *            weekdayBeatitudes(tone, dayKey) → { items:[{text,label}] } }
 * Returns { troparia:[{text,label,source}], count, section, quote, unresolved, notes }.
 */
export function resolveBeatitudes({ liturgicalData: ld = {}, menaion = null, pentEntry = null, sources = {} }) {
  void pentEntry;
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const rank = (menaion && menaion.rank) || "simple";
  const tone = ld.tone;
  const period = ld.feastPeriod && ld.feastPeriod.periodType;
  const inFeastPeriod = ["forefeast", "afterfeast"].includes(ld.season) || ["forefeast", "afterfeast"].includes(period);
  const isApodosis = ld.season === "apodosis" || period === "apodosis";
  const mb = menaion ? menaion.beatitudes : null;
  const mSrc = "Menaion · " + ((menaion && menaion.saintName) || "commemoration");
  const mParts = mb ? mb.parts.filter(g => g.from === "menaion") : [];
  const menaionAll = mParts.flatMap(g => menItems(g, mSrc));
  const odeIII = () => { const g = mParts.find(x => x.ode === "III"); return g ? menItems(g, mSrc).slice(0, 4) : []; };
  const notes = [];
  const R = (troparia, count, section, quote) => ({ troparia, count, section, quote, unresolved: troparia.length === 0 || troparia.length !== count, notes });

  if (ld.isPentecostarion || ld.season === "pentecostarion" || ld.season === "brightweek") {
    const pent = pentEntry;
    if (ld.season === "brightweek" || (ld.paschaOffset >= 1 && ld.paschaOffset <= 6)) return { troparia: [], count: 0, section: "§4B1", quote: "The Paschal Liturgy: festal antiphons.", unresolved: true, festalAntiphons: true, notes: ["Bright Week — the Paschal Liturgy is not assembled."] };
    if (!pent) return { troparia: [], count: 0, section: "§4A1", quote: "At the Beatitudes we read six troparia from the canon appointed by the Pentecostarion.", unresolved: true, notes: ["No Pentecostarion entry is encoded for this day."] };
    const src = (pent.beatitudes_source || "");
    if (/antiphon/i.test(src) && !(pent.beatitudes_troparia || []).length) {
      return { troparia: [], count: 0, section: "§4B", quote: src, unresolved: true, festalAntiphons: true, notes: ["Festal antiphons replace the Typika and Beatitudes: " + src] };
    }
    const printed = (pent.beatitudes_troparia || []).map((t, i) => ({ text: t.text, label: t.label || t.source || ("Pentecostarion " + (i + 1)), source: "Pentecostarion · " + (pent.source_file || pent.name || "") }));
    const isSun = ld.dow === 0 || ld.isSunday === true;
    // §4A1–§4A3: on a weekday, four from the Pentecostarion and four from Ode III in the Menaion when the Menaion appoints them
    const menIII = (!pent.menaion_set_aside && !isSun) ? odeIII() : [];
    if (menIII.length === 4 && printed.length) {
      return R([...printed.slice(0, 4), ...menIII], 8, (rank === "polyeleos" || rank === "vigil") ? "§4A3" : "§4A1", "But if the Menaion calls for Beatitudes we read four troparia from the Pentecostarion and four from Ode III in the Menaion.");
    }
    if (!printed.length) return { troparia: [], count: 0, section: isSun ? "§4B" : "§4A1", quote: src || "As appointed by the Pentecostarion.", unresolved: true, notes: ["The Pentecostarion entry prints no Beatitude troparia (" + (src || "no source note") + ")."] };
    notes.push("As the Pentecostarion prints: " + src);
    return R(printed, printed.length, isSun ? "§4B (as printed)" : "§4A1", isSun ? "The Sunday's Beatitude troparia as the Pentecostarion appoints them." : "At the Beatitudes we read six troparia from the canon appointed by the Pentecostarion.");
  }
  const sunday = () => {
    const sb = sources.sundayBeatitudes ? sources.sundayBeatitudes(tone) : null;
    if (!sb) return { six: [], eight: [] };
    const six = (sb.troparia || []).map((t, i) => ({ text: t.text, label: "Resurrection " + (i + 1), source: "Octoechos · Tone " + tone, path: t.path }));
    const eight = [...six, ...(sb.gloria ? [{ text: sb.gloria.text, label: "Glory… Triadicon", source: "Octoechos · Tone " + tone }] : []), ...(sb.theotokion ? [{ text: sb.theotokion.text, label: "Now and ever… Theotokion", source: "Octoechos · Tone " + tone }] : [])];
    return { six, eight };
  };
  const asRubric = mb && mb.rubric ? "Menaion: " + mb.rubric : "";
  if (mb && mb.note) notes.push(mb.note + " The troparia are given as printed; nothing is added to make up the number.");

  // ODS 3rd ed. vol. III prints the Beatitudes for this service on this day: it
  // overrides the rules below. Each part is taken from where the order says.
  const ordB = menaion && menaion.order && menaion.order.liturgy && menaion.order.liturgy.beatitudes;
  if (ordB) {
    const wk = () => { const w = sources.weekdayBeatitudes ? sources.weekdayBeatitudes(tone, ["", "mon", "tue", "wed", "thu", "fri", "sat"][dow]) : null; return w && w.items ? w.items.map((it, i) => ({ text: it.text, label: "Octoechos " + (i + 1), source: "Octoechos · Tone " + tone })) : []; };
    const out = ordB.flatMap(([from, a, b]) => from === "resurrection" ? (a === 8 ? sunday().eight : sunday().six.slice(0, a)) : from === "octoechos" ? wk().slice(-a) : menaionAll.slice(a, b));
    const want = ordB.reduce((n, [from, a, b]) => n + (from === "menaion" ? b - a : a), 0);
    return R(out, want, ods3Cite(menaion.order, "liturgy"), "The Beatitude troparia ODS vol. III appoints for this date: " + ordB.map(([from, a, b]) => from === "menaion" ? (b - a) + " from the Menaion" : a + (from === "resurrection" ? " of the resurrection" : " from the Octoechos")).join(", ") + ".");
  }

  // ── a Great Feast ──
  // Festal antiphons belong to the feasts of the Lord ("in which case there would
  // have been festal antiphons on the Feast itself", ch.2 note 68). A feast of the
  // Theotokos keeps the Typika, and its page prints the Beatitude troparia.
  const isGreat = ld.season === "great_feast" || period === "feast" || rank === "great_feast";
  if (isGreat) {
    if (mb && mb.antiphons) return { troparia: [], count: 0, section: "Great Feast", quote: "Festal antiphons replace the Typika and Beatitudes.", unresolved: true, festalAntiphons: true, notes: ["The feast's own antiphons are printed in the Menaion; they are not yet assembled."] };
    if (!menaionAll.length) return { troparia: [], count: 0, section: "Great Feast", quote: "Festal antiphons replace the Typika and Beatitudes.", unresolved: true, festalAntiphons: true, notes: [menaion ? "This feast's service prints no Beatitude troparia." : "The feast's service is not yet encoded."] };
    if (isSunday && !menaion.lordsFeast) return R([...sunday().six, ...odeIII()], 10, "§1E", "At the Beatitudes we read ten troparia: six of the resurrection and four from the Menaion (from Ode III of the canon).");
    return R(menaionAll, menaionAll.length, "§" + (menaion.section || "2F"), asRubric);
  }

  if (isSunday) {
    if (isApodosis) return R([...sunday().six, ...menaionAll.slice(0, 4)], 10, "§1F3", "At the Beatitudes we read ten troparia: six of the resurrection and four from Ode IX of the feast.");
    if (inFeastPeriod) {
      // The day's page prints the feast's troparia and, when appointed, the saint's.
      const ofFeast = mParts.filter(g => g.feast).flatMap(g => menItems(g, mSrc)).slice(0, 4);
      const ofSaint = mParts.filter(g => !g.feast).flatMap(g => menItems(g, mSrc)).slice(0, 4);
      const high = rank === "polyeleos" || rank === "vigil";
      if (ofFeast.length === 4 && ofSaint.length === 4) return R([...sunday().six.slice(0, 4), ...ofFeast, ...ofSaint], 12, high ? "§1F2" : "§1F1", "…we read twelve troparia: four troparia of the resurrection, four troparia from the canon of the feast and four troparia of the saint (from Ode VI of his canon).");
      if (ofFeast.length === 4) return R([...sunday().six, ...ofFeast], 10, "§1F1", "At the Beatitudes we read ten troparia: six troparia of the resurrection and four troparia from Ode III of the canon of the forefeast, or if it be an afterfeast four troparia from the Ode indicated in the Menaion.");
      notes.push("This day's service prints no Beatitude troparia of the feast; the eight of the resurrection are read (§1A form).");
      return R(sunday().eight, 8, "§1F1", "…six troparia of the resurrection and four troparia of the feast: none printed, so the resurrectional eight.");
    }
    if (rank === "simple") return R(sunday().eight, 8, "§1A", "At the Beatitudes we read eight troparia of the resurrection.");
    const four = odeIII();
    if (four.length === 4) return R([...sunday().six, ...four], 10, rank === "vigil" ? "§1E" : rank === "polyeleos" ? "§1D → §1C" : "§1C", "At the Beatitudes we read ten troparia: six of the resurrection and four from the Menaion (from Ode III of the canon).");
    notes.push("The Menaion appoints no Beatitude troparia for this commemoration; the eight of the resurrection are read (§1A form).");
    return R(sunday().eight, 8, rank === "vigil" ? "§1E" : "§1C", "…six of the resurrection and four from the Menaion (from Ode III of the canon): none printed, so the resurrectional eight.");
  }

  // ── weekday ──
  const w = sources.weekdayBeatitudes ? sources.weekdayBeatitudes(tone, ["", "mon", "tue", "wed", "thu", "fri", "sat"][dow]) : null;
  const octo = w && w.items ? w.items.map((it, i) => ({ text: it.text, label: it.label === "glory" ? "Glory…" : it.label === "both_now" ? "Now and ever…" : "Octoechos " + (i + 1), source: "Octoechos · Tone " + tone + " · " + ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dow] })) : [];
  // Nothing printed for the Beatitudes: six from the Octoechos (§2A).
  if (!menaionAll.length) return R(octo.slice(0, 6), 6, "§2A", "…otherwise, we use six troparia on the Beatitudes, all from the Octoechos.");
  // PRINTED FIRST: the page's own rubric says how many, from where and in what
  // order. A part "from the Oktoechos" is the Octoechos' last four, so that its
  // Glory… and Now and ever… stay in place (Fekula does not say which four).
  let parts = mb.parts.length ? mb.parts : [{ from: "menaion", all: true }];
  const hasOcto = parts.some(g => g.from === "octoechos");
  if (hasOcto && dow === 6) {
    parts = [...parts.filter(g => g.from === "menaion"), ...parts.filter(g => g.from === "octoechos")];
    notes.push("Saturday: the troparia from the Menaion \"precede those of the Octoechos (four each)\" (§2A).");
  }
  if (hasOcto) notes.push("The Octoechos supplies its last four (its Glory… and Now and ever… among them).");
  const out = parts.flatMap(g => g.from === "octoechos" ? octo.slice(-g.n) : g.all ? menaionAll : menItems(g, mSrc));
  const want = mb.complete ? mb.total : out.length;
  return R(out, want, "§" + (menaion.section || "2A"), asRubric);
}
