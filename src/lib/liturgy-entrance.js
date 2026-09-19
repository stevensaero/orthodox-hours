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
// (weekday §2A–§2G4). Chapter 4 (Pentecostarion, pp.169–170) is NOT yet
// encoded: a Pentecostarion day returns `unresolved` with that citation.
//
// Slot vocabulary (Fekula's own words, snake_cased):
//   sunday_troparion  feast_troparion  temple_troparion  dow_troparion
//   saint_troparion   saint2_troparion
//   sunday_kontakion  feast_kontakion  temple_kontakion  dow_kontakion
//   saint_kontakion   saint2_kontakion departed_kontakion ("With the saints
//   give rest") steadfast_protectress ("Protection of Christians")
// A slot string may carry a prefix: "G:" = at "Glory…", "N:" = at "Now and
// ever…", "GN:" = a single "Glory… Now and ever…".
//
// Pure. Sources are injected (see resolveEntrance / resolveBeatitudes).
// ─────────────────────────────────────────────────────────────────────────────

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
// §1B p.15 — two saints.
const SUNDAY_DOUBLE = {
  [LORD]:      ["sunday_troparion", "saint_troparion", "saint2_troparion", "saint_kontakion", "G:saint2_kontakion", "N:sunday_kontakion"],
  [THEOTOKOS]: ["sunday_troparion", "temple_troparion", "saint_troparion", "saint2_troparion", "sunday_kontakion", "saint_kontakion", "G:saint2_kontakion", "N:temple_kontakion"],
  [SAINT]:     ["sunday_troparion", "temple_troparion", "saint_troparion", "saint2_troparion", "sunday_kontakion", "temple_kontakion", "saint_kontakion", "G:saint2_kontakion", "N:steadfast_protectress"],
};
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
export function entranceOrder({ liturgicalData: ld = {}, menaionEntry = null, templeType = null, isDouble = false }) {
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const rank = (menaionEntry && menaionEntry.rank) || "simple";
  const isVigil = rank === "vigil";
  const feast = ld.feastPeriod && ld.feastPeriod.feast;
  const period = ld.feastPeriod && ld.feastPeriod.periodType;   // feast | forefeast | afterfeast | apodosis
  const season = ld.season;
  const feastIsLord = !!(feast && feast.forLord);
  const feastIsTheotokos = !!(feast && !feast.forLord);
  const notes = [];
  const t = templeType;

  if (ld.isPentecostarion || season === "pentecostarion" || season === "brightweek") {
    return { templeDependent: false, slots: null, section: "ch.4 pp.169–170", quote: "The order of chanting the troparia and kontakia at Liturgy (four Pentecostarion periods).", notes: ["Pentecostarion table not yet encoded — Phase 3b."], templeNeeded: false, unresolved: true };
  }
  if (season === "great_feast" || period === "feast") {
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
    if (feastIsTheotokos && (season === "great_feast")) {
      return { templeDependent: false, slots: SUNDAY_THEOTOKOS_FEAST, section: "§1E", page: "p.23", quote: "But if it be a feast of the Theotokos: Sunday troparion / Troparion of the Feast / Glory… Sunday kontakion / Now and ever… Kontakion of the Feast", notes, templeNeeded: false };
    }
    if (!t) return { slots: null, section: isDouble ? "§1B" : "§1A", templeNeeded: true, notes, quote: "" };
    if (isDouble) return { slots: SUNDAY_DOUBLE[t], section: "§1B", page: "p.15", quote: "Sunday, double commemoration, in a temple dedicated to " + templeWords(t) + ".", notes, templeNeeded: false };
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
    if (isVigil && feastIsTheotokos && season === "great_feast") return { templeDependent: false, slots: WEEKDAY_HIGH.vigilTheotokosFeast, section: "§2F", page: "p.54", quote: "If it be a feast of the Theotokos: Troparion of the feast; Glory… Now and ever… kontakion of the feast", notes, templeNeeded: false };
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
  let slots = WEEKDAY_SIMPLE[t][dk];
  if (isDouble) {
    slots = slots.flatMap(s => s === "saint_troparion" ? ["saint_troparion", "saint2_troparion"] : s === "saint_kontakion" ? ["saint_kontakion", "saint2_kontakion"] : [s]);
    notes.push("§2B: If there be troparia and kontakia for both saints, both are used.");
  }
  if (t === LORD && dk === "wf") notes.push("§2A: if the priest so desires, the kontakion of the temple may be sung instead of that for the day of the week.");
  if (t === SAINT && dk !== "sat") notes.push("§2A fn.31: If the commemoration for the day of the week is the same as that for the temple (e.g. a temple of the Holy Angels on Monday), the troparion and kontakion of the temple are not chanted.");
  if (dow === 4) notes.push("§2A: on Thursday, two troparia and two kontakia of the day of the week (the Apostles; St Nicholas).");
  const sec = rank === "six_stichera" ? "§2C → §2A" : isDouble ? "§2B → §2A" : "§2A";
  return { slots, section: sec, page: "p.38–39", quote: "In a temple dedicated to " + templeWords(t) + ", on " + (dk === "sat" ? "Saturday" : dk === "wf" ? "Wednesday or Friday" : "Monday, Tuesday or Thursday") + ".", notes, templeNeeded: false };
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
export function resolveEntrance({ liturgicalData: ld = {}, menaionEntry = null, sources = {} }) {
  const temple = sources.temple || null;
  const templeType = temple && temple.type;
  const inFeastPeriod = ["forefeast", "afterfeast", "apodosis"].includes(ld.season) || ["forefeast", "afterfeast", "apodosis"].includes(ld.feastPeriod && ld.feastPeriod.periodType);
  // Outside a feast period, a second printed troparion is a second saint (double).
  const isDouble = !!(menaionEntry && menaionEntry.troparion_second && !inFeastPeriod && ld.season !== "great_feast");
  const order = entranceOrder({ liturgicalData: ld, menaionEntry, templeType, isDouble });
  const cite = { section: order.section, note: [order.quote, ...(order.notes || [])].filter(Boolean).join(" ") };
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const tone = ld.tone;
  const els = [];
  let unresolved = !!order.unresolved;
  const tones = [];

  if (order.unresolved) {
    return { elements: [{ id: "lit-tk-order", type: "movable", label: "Troparia and Kontakia", text: order.notes.join(" "), unresolved: true, unresolvedNote: "Pentecostarion table not yet encoded", source: "—", fekula: cite }], toneLabel: null, unresolved: true, section: order.section, quote: order.quote, notes: order.notes };
  }
  if (order.templeNeeded) {
    return { elements: [
      { id: "lit-tk-temple", type: "temple_selector", templeMode: "troparion", label: "Temple dedication",
        prompt: "The order of the troparia and kontakia after the Little Entrance depends on the temple's dedication (Fekula " + order.section + "). Select your parish dedication." },
      { id: "lit-tk-order", type: "movable", label: "Troparia and Kontakia", text: "Choose the temple dedication above; Fekula " + order.section + " orders the troparia and kontakia by whether the temple is dedicated to the Lord, the Theotokos, or a saint.", unresolved: true, unresolvedNote: "temple dedication not set", source: "—", fekula: cite },
    ], toneLabel: null, unresolved: true, section: order.section, quote: order.quote, notes: order.notes };
  }

  const saintName = (menaionEntry && menaionEntry.saint) || "the saint of the day";
  const feast = sources.feast || null;
  // The temple picker rides with the hymns whenever the table has a temple
  // slot, showing the current dedication and letting the reader change it in
  // place — the same TempleSelector the Typica and Litiya use.
  // Shown whenever the CHOICE of table depended on the temple — even when the
  // chosen order has no temple hymns (a temple of the Lord on Sunday, §1A) —
  // so the dedication can always be re-picked. Only the tables Fekula prints
  // without temple variation (apodosis, Great Feast, a Theotokos feast) omit it.
  if (order.templeDependent !== false) {
    els.push({ id: "lit-tk-temple", type: "temple_selector", templeMode: "troparion", compact: true, label: "Temple dedication",
      compactNote: "In a temple dedicated to the Lord, to the Theotokos, or to a saint, the troparia and kontakia stand in a different order; the temple's own troparion and kontakion take their slots below. — Fekula ch.1 / ch.2",
      fekula: { section: order.section, note: "The order of the troparia and kontakia depends on the temple's dedication." } });
  }
  const hymn = (slot) => {
    const S = sources;
    switch (slot) {
      case "sunday_troparion": { const h = S.sundayTroparion && S.sundayTroparion(tone); return h && { label: "Sunday Troparion", ...h, source: "Octoechos · Tone " + tone }; }
      case "sunday_kontakion": { const h = S.sundayKontakion && S.sundayKontakion(tone); return h && { label: "Sunday Kontakion", ...h, source: "Octoechos · Tone " + tone }; }
      case "feast_troparion":  return feast && feast.troparion && { label: "Troparion of the Feast", ...feast.troparion, source: "Menaion · " + feast.name };
      case "feast_kontakion":  return feast && feast.kontakion && { label: "Kontakion of the Feast", ...feast.kontakion, source: "Menaion · " + feast.name };
      case "temple_troparion": return temple && temple.troparion && { label: "Troparion of the Temple", ...temple.troparion, source: "Temple · " + temple.label };
      case "temple_kontakion": return temple && temple.kontakion && { label: "Kontakion of the Temple", ...temple.kontakion, source: "Temple · " + temple.label };
      case "saint_troparion":  return menaionEntry && menaionEntry.troparion && { label: "Troparion", ...pick(menaionEntry.troparion), source: "Menaion · " + saintName };
      case "saint2_troparion": return menaionEntry && menaionEntry.troparion_second && { label: "Troparion (second)", ...pick(menaionEntry.troparion_second), source: "Menaion · " + saintName };
      case "saint_kontakion":  { const k = menaionEntry && (menaionEntry.kontakion_ode6 || menaionEntry.kontakion_ode3); return k && { label: "Kontakion", ...pick(k), source: "Menaion · " + saintName }; }
      case "saint2_kontakion": { const k = menaionEntry && (menaionEntry.kontakion_2 || (menaionEntry.kontakion_ode6 && menaionEntry.kontakion_ode3 ? menaionEntry.kontakion_ode3 : null)); return k && { label: "Kontakion (second)", ...pick(k), source: "Menaion · " + saintName }; }
      case "departed_kontakion": return S.departedKontakion && { label: "Kontakion of the Departed", ...S.departedKontakion, source: "Horologion" };
      case "steadfast_protectress": return S.protectress && { label: "Theotokion — Protection of Christians", ...S.protectress, source: "Horologion" };
      case "dow_kontakion": { const ks = S.dowKontakia ? S.dowKontakia(dow) : null; return ks && ks.length ? ks.map(k => ({ label: k.label, tone: k.tone, text: k.text, source: "Horologion · kontakion of the day" })) : null; }
      case "dow_troparion": { const ts = S.dowTroparia ? S.dowTroparia(dow) : null; return ts && ts.length ? ts.map(k => ({ label: k.label, tone: k.tone, text: k.text, source: k.source || "HTM · troparion of the day" })) : null; }
      default: return null;
    }
  };

  order.slots.forEach((spec, i) => {
    const m = spec.match(/^(GN|G|N):(.*)$/);
    const prefix = m ? m[1] : null, slot = m ? m[2] : spec;
    const lead = prefix === "GN" ? "Glory… Now and ever…" : prefix === "G" ? "Glory…" : prefix === "N" ? "Now and ever…" : null;
    let h = hymn(slot);
    const list = Array.isArray(h) ? h : (h ? [h] : []);
    if (!list.length) {
      unresolved = true;
      els.push({ id: `lit-tk-${i}-${slot}`, type: "movable", label: (lead ? lead + " " : "") + slotLabel(slot), text: missingText(slot, saintName, temple, feast), unresolved: true,
        unresolvedNote: slot === "dow_troparion" ? "troparia of the day of the week not yet encoded" : "not available for this date", source: "—", fekula: cite });
      return;
    }
    list.forEach((x, j) => {
      if (x.tone != null) tones.push(x.tone);
      els.push({ id: `lit-tk-${i}-${slot}${list.length > 1 ? "-" + j : ""}`, type: "movable",
        label: (lead && j === 0 ? lead + " " : "") + x.label, text: x.text, toneNote: x.tone != null ? "Tone " + x.tone : null,
        source: x.source, ...(x.path ? { srcPath: x.path } : {}), fekula: j === 0 && i === 0 ? cite : { section: order.section, note: slotLabel(slot) + " — " + order.section + (order.page ? " " + order.page : "") } });
    });
  });
  const toneLabel = tones.length ? [...new Set(tones)].map(t => "Tone " + t).join(" · ") : null;
  return { elements: els, toneLabel, unresolved, section: order.section, quote: order.quote, notes: order.notes };
}

const pick = (h) => ({ tone: h.tone, text: h.text });
function slotLabel(slot) {
  return { sunday_troparion: "Sunday Troparion", sunday_kontakion: "Sunday Kontakion", feast_troparion: "Troparion of the Feast", feast_kontakion: "Kontakion of the Feast",
    temple_troparion: "Troparion of the Temple", temple_kontakion: "Kontakion of the Temple", dow_troparion: "Troparion of the day of the week", dow_kontakion: "Kontakion of the day of the week",
    saint_troparion: "Troparion of the saint", saint2_troparion: "Troparion of the second saint", saint_kontakion: "Kontakion of the saint", saint2_kontakion: "Kontakion of the second saint",
    departed_kontakion: "With the saints give rest", steadfast_protectress: "Protection of Christians" }[slot] || slot;
}
function missingText(slot, saintName, temple, feast) {
  if (slot === "dow_troparion") return "The troparion of the day of the week (Horologion) is appointed here; the daily troparia are not yet encoded.";
  if (slot.startsWith("temple")) return "The temple " + (slot.endsWith("troparion") ? "troparion" : "kontakion") + " for " + (temple ? temple.label : "the parish dedication") + " is not encoded yet.";
  if (slot.startsWith("feast")) return "The feast's " + (slot.endsWith("troparion") ? "troparion" : "kontakion") + (feast ? " (" + feast.name + ")" : "") + " is not available: the feast day's Menaion entry is not encoded.";
  if (slot.startsWith("saint")) return "The Menaion entry for " + saintName + " carries no " + (slot.endsWith("troparion") ? "troparion" : "kontakion") + " for this slot.";
  return "Not available.";
}

// ── Beatitudes ─────────────────────────────────────────────────────────────

// Expand the Menaion's printed list: an item whose note says "(Twice)" is sung twice.
function expandMenaion(items, source) {
  const out = [];
  for (const it of items || []) {
    const n = /twice/i.test(it.note || "") ? 2 : 1;
    for (let i = 0; i < n; i++) out.push({ text: it.text, label: it.label || it.source || "Menaion", source, repeat: n === 2 && i === 1 });
  }
  return out;
}
const byOde = (items, ode) => items.filter(i => new RegExp("Ode\\s+" + ode + "\\b", "i").test(i.label || ""));

/**
 * sources: { sundayBeatitudes(tone) → { troparia:[{text}], gloria:{text}, theotokion:{text} },
 *            weekdayBeatitudes(tone, dayKey) → { items:[{text,label}] } }
 * Returns { troparia:[{text,label,source}], count, section, quote, unresolved, notes }.
 */
export function resolveBeatitudes({ liturgicalData: ld = {}, menaionEntry = null, sources = {} }) {
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const rank = (menaionEntry && menaionEntry.rank) || "simple";
  const tone = ld.tone;
  const period = ld.feastPeriod && ld.feastPeriod.periodType;
  const inFeastPeriod = ["forefeast", "afterfeast"].includes(ld.season) || ["forefeast", "afterfeast"].includes(period);
  const isApodosis = ld.season === "apodosis" || period === "apodosis";
  const menaionAll = expandMenaion(menaionEntry && menaionEntry.beatitudes_troparia, "Menaion · " + ((menaionEntry && menaionEntry.saint) || "commemoration"));
  const notes = [];
  const R = (troparia, count, section, quote) => ({ troparia, count, section, quote, unresolved: troparia.length === 0 || troparia.length !== count, notes });

  if (ld.isPentecostarion || ld.season === "pentecostarion" || ld.season === "brightweek") {
    return { troparia: [], count: 0, section: "§4A1–§4A3", quote: "At the Beatitudes we read six troparia from the canon appointed by the Pentecostarion…", unresolved: true, notes: ["Pentecostarion Beatitudes not yet encoded — Phase 3b."] };
  }
  if (ld.season === "great_feast") {
    return { troparia: [], count: 0, section: "Great Feast", quote: "Festal antiphons replace the Typika and Beatitudes.", unresolved: true, notes: ["Festal antiphons — no V1 field."] };
  }
  const sunday = () => {
    const s = sources.sundayBeatitudes ? sources.sundayBeatitudes(tone) : null;
    if (!s) return { six: [], eight: [] };
    const six = (s.troparia || []).map((t, i) => ({ text: t.text, label: "Resurrection " + (i + 1), source: "Octoechos · Tone " + tone, path: t.path }));
    const eight = [...six, ...(s.gloria ? [{ text: s.gloria.text, label: "Glory… Triadicon", source: "Octoechos · Tone " + tone }] : []), ...(s.theotokion ? [{ text: s.theotokion.text, label: "Now and ever… Theotokion", source: "Octoechos · Tone " + tone }] : [])];
    return { six, eight };
  };

  if (isSunday) {
    if (isApodosis) return R([...sunday().six, ...byOde(menaionAll, "IX").slice(0, 4)], 10, "§1F3", "At the Beatitudes we read ten troparia: six of the resurrection and four from Ode IX of the feast.");
    if (inFeastPeriod) {
      // The afterfeast day's Menaion prints the feast's four (and the saint's four when appointed).
      const printed = menaionAll;
      if (printed.length >= 8) { notes.push("Menaion prints troparia for the feast and the saint: twelve in all."); return R([...sunday().six.slice(0, 4), ...printed.slice(0, 8)], 12, rank === "polyeleos" || rank === "vigil" ? "§1F2" : "§1F1", "…we read twelve troparia: four troparia of the resurrection, four troparia from the canon of the feast and four troparia of the saint (from Ode VI of his canon)."); }
      return R([...sunday().six, ...printed.slice(0, 4)], 10, "§1F1", "At the Beatitudes we read ten troparia: six troparia of the resurrection and four troparia from Ode III of the canon of the forefeast, or if it be an afterfeast four troparia from the Ode indicated in the Menaion.");
    }
    if (rank === "simple") return R(sunday().eight, 8, "§1A", "At the Beatitudes we read eight troparia of the resurrection.");
    const four = byOde(menaionAll, "III").slice(0, 4);
    if (four.length === 4) return R([...sunday().six, ...four], 10, rank === "vigil" ? "§1E" : rank === "polyeleos" ? "§1D → §1C" : "§1C", "At the Beatitudes we read ten troparia: six of the resurrection and four from the Menaion (from Ode III of the canon).");
    notes.push("The Menaion appoints no Beatitude troparia for this commemoration; the eight of the resurrection are read (§1A form).");
    return R(sunday().eight, 8, rank === "vigil" ? "§1E" : "§1C", "…six of the resurrection and four from the Menaion (from Ode III of the canon) — none printed, so the resurrectional eight.");
  }

  // ── weekday ──
  const w = sources.weekdayBeatitudes ? sources.weekdayBeatitudes(tone, ["", "mon", "tue", "wed", "thu", "fri", "sat"][dow]) : null;
  const octo = w && w.items ? w.items.map((it, i) => ({ text: it.text, label: it.label === "glory" ? "Glory…" : it.label === "both_now" ? "Now and ever…" : "Octoechos " + (i + 1), source: "Octoechos · Tone " + tone + " · " + ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dow] })) : [];
  if (isApodosis) return R(byOde(menaionAll, "IX").slice(0, 8).length ? byOde(menaionAll, "IX").slice(0, 8) : menaionAll.slice(0, 8), 8, rank === "vigil" ? "§2G4" : "§2G3", rank === "vigil" ? "…eight troparia: four from ode IX of the feast (first canon) and four from ode VI of the saint." : "At the Beatitudes we read eight troparia from ode IX of the feast.");
  if (inFeastPeriod) {
    const high = rank === "polyeleos" || rank === "vigil";
    if (rank === "simple" && menaionAll.length <= 6) return R(menaionAll.slice(0, 6), Math.min(6, menaionAll.length) || 6, "§2G1", "At the Beatitudes we read six troparia from Ode III of the forefeast, or from the appointed ode of the feast (as noted in the Menaion).");
    return R(menaionAll.slice(0, 8), 8, high ? "§2G2" : "§2G1", "…we read eight troparia, taking four from Ode III of the forefeast, or from the appointed ode of the feast, and four from Ode VI of the canon of the saint.");
  }
  if (rank === "doxology" || rank === "polyeleos" || rank === "vigil") {
    return R([...byOde(menaionAll, "III").slice(0, 4), ...byOde(menaionAll, "VI").slice(0, 4)], 8, rank === "vigil" ? "§2F" : rank === "polyeleos" ? "§2E" : "§2D", "At the Beatitudes we read four troparia from ode III and four from ode VI of the canon in the Menaion.");
  }
  const three = byOde(menaionAll, "III").slice(0, 4);
  if (three.length === 4) {
    if (rank === "six_stichera") return R([...octo.slice(-4), ...three], 8, "§2C", "At the Beatitudes we read four troparia from the Octoechos and four troparia from ode III in the Menaion.");
    notes.push("The Octoechos supplies its last four (its Glory… and Now and ever… among them).");
    return R([...three, ...octo.slice(-4)], 8, "§2A", "If the Menaion calls for Beatitude troparia for the saint (from Ode III), these precede those of the Octoechos (four each).");
  }
  return R(octo.slice(0, 6), 6, "§2A", "…otherwise, we use six troparia on the Beatitudes, all from the Octoechos.");
}
