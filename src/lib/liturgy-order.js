// src/lib/liturgy-order.js
// ─────────────────────────────────────────────────────────────────────────────
// Whose prokeimenon, Epistle, Alleluia, Gospel and communion hymn are taken at
// the Liturgy, and in what order: Fekula & Williams, The Order of Divine
// Services, 2nd ed. rev., chapter 1 (Sundays) and chapter 2 (weekdays), section
// by section. RULED (Bill, 14 Nov 2026): the general rule is Fekula's, by
// section; it is not "the day's and the Menaion's wherever printed".
//
// Outside the Pentecostarion only (chapter 4 has its own order). Where ODS 3rd
// ed. vol. III prints an order for the date, that overrides this
// (src/data/ods_v3/orders.js).
//
// Each list names, in order:
//   'day'     the Sunday's, or the weekday's
//   'menaion' whatever the Menaion service prints (outside a feast period)
//   'feast'   of the forefeast or feast, as the day's page prints it
//   'saint'   of the day's saint
// A name the page prints nothing for is simply empty; "(and of the saint)" in the
// book is exactly that. Pure.
// ─────────────────────────────────────────────────────────────────────────────

const all = (prokeimenon, epistle, alleluia = prokeimenon, gospel = epistle, communion = prokeimenon) => ({ prokeimenon, epistle, alleluia, gospel, communion });
const same = (list) => all(list, list);

/**
 * @param ld            liturgical day: { dow, isSunday, season, feastPeriod }
 * @param rank          the service's rank (Menaion V2)
 * @param kind          the service's kind: 'forefeast' | 'afterfeast' | 'apodosis' | 'feast' | 'saint'
 * @param saintReadings the page prints an Epistle or Gospel of the saint (§1F1)
 * @returns { prokeimenon, epistle, alleluia, gospel, communion, section, page, quote }
 */
export function fekulaProperOrder({ ld = {}, rank = "simple", kind = null, saintReadings = false } = {}) {
  const sunday = ld.dow === 0 || ld.isSunday === true;
  const saturday = ld.dow === 6;
  const period = ["forefeast", "afterfeast", "apodosis"].includes(kind) ? kind
    : (ld.feastPeriod && ["forefeast", "afterfeast", "apodosis"].includes(ld.feastPeriod.periodType) ? ld.feastPeriod.periodType
      : (["forefeast", "afterfeast", "apodosis"].includes(ld.season) ? ld.season : null));
  const feast = ld.feastPeriod && ld.feastPeriod.feast;
  const lords = !!(feast && feast.forLord);
  const vigil = rank === "vigil";
  const R = (o, section, page, quote) => ({ ...o, section, page, quote });

  // A Great Feast on its own day. A feast of the Lord sets the Sunday aside (ch. 5);
  // a feast of the Theotokos on a Sunday keeps it (§1E).
  if (rank === "great_feast" || ld.season === "great_feast") {
    if (sunday && !lords) return R(same(["day", "menaion"]), "§1E", "p.23", "Prokeimenon, Epistle, Alleluia and Gospel: for Sunday and from the Menaion.");
    return R(same(["menaion"]), "§2F", "p.54", "The Prokeimenon, Epistle, Alleluia, Gospel and Communion Hymn are from the Menaion alone.");
  }

  if (sunday) {
    if (period === "apodosis") return lords
      ? R(all(["day", "feast"], ["day"]), "§1F3", "p.32", "A feast of the Lord: Prokeimenon and Alleluia, Sunday and feast; Epistle and Gospel for the Sunday only.")
      : R(same(["day", "feast"]), "§1F3", "p.32", "A feast of the Theotokos: the Prokeimenon, Epistle, Alleluia and Gospel are of the Sunday and the feast.");
    if (period) {
      if (rank === "polyeleos" || vigil) return R(same(["day", "saint"]), "§1F2", "p.30", "The Prokeimenon, Epistle, Alleluia and Gospel are of the Sunday and saint.");
      if (period === "forefeast" || saintReadings) return R(same(["day", "saint"]), "§1F1", "p.27", period === "forefeast" ? "Forefeast: Sunday and saint." : "But if there be readings for the saint: for Sunday and the saint.");
      return R(all(["day", "feast"], ["day"]), "§1F1", "p.27", "Afterfeast: Prokeimenon and Alleluia, Sunday and feast; Epistle and Gospel, Sunday.");
    }
    const sec = vigil ? "§1E" : rank === "polyeleos" ? "§1D → §1C" : (rank === "six_stichera" || rank === "doxology") ? "§1C" : "§1A";
    return R(same(["day", "menaion"]), sec, sec === "§1A" ? "p.12" : sec === "§1E" ? "p.23" : "p.18", "For Sunday and from the Menaion.");
  }

  // ── weekdays ──
  if (period === "apodosis") {
    if (vigil) return lords
      ? R(all(["feast", "saint"], ["saint"]), "§2G4", "p.67", "A feast of the Lord: Prokeimenon of the feast and of the saint; Epistle of the saint, only.")
      : R(all(["feast", "saint"], ["saint", "feast"]), "§2G4", "p.67", "A feast of the Theotokos: Prokeimenon of the feast and of the saint; Epistle of the saint and of the feast.");
    return lords
      ? R(all(["feast"], ["day"]), "§2G3", "p.65", "A feast of the Lord: Prokeimenon of the feast; Epistle of the day, only.")
      : R(all(["feast"], ["day", "feast"]), "§2G3", "p.65", "A feast of the Theotokos: Prokeimenon of the feast; Epistle of the day and of the feast.");
  }
  if (period) {
    if (vigil) return period === "forefeast"
      ? R(same(["saint"]), "§2G2", "p.63", "If it be a forefeast, the Prokeimenon, Epistle, Alleluia, Gospel, and Communion hymn are of the saint, only.")
      : R(all(["feast", "saint"], ["saint"]), "§2G2", "p.63", "Afterfeast: Prokeimenon of the feast and saint; Epistle of the saint, only.");
    // §2G1; a polyeleos service follows it (§2G2: "the order set forth in the preceding section").
    const sec = rank === "polyeleos" ? "§2G2 → §2G1" : "§2G1";
    if (period === "forefeast") return saturday
      ? R(all(["day", "saint"], ["saint", "day"]), sec, "p.60", "Saturday, forefeast: Prokeimenon of the day (and of the saint); Epistle (of the saint and) of the day.")
      : R(all(["saint"], ["day", "saint"]), sec, "p.59", "Forefeast: Prokeimenon of the saint; Epistle of the day (and of the saint).");
    return saturday
      ? R(all(["feast", "saint"], ["saint", "day"]), sec, "p.60", "Saturday, afterfeast: Prokeimenon of the feast (and of the saint); Epistle (of the saint and) of the day.")
      : R(all(["feast", "saint"], ["day", "saint"]), sec, "p.59", "Afterfeast: Prokeimenon of the feast (and of the saint); Epistle of the day (and of the saint).");
  }
  if (vigil) return R(same(["menaion"]), "§2F", "p.54", "The Prokeimenon, Epistle, Alleluia, Gospel and Communion Hymn are from the Menaion alone.");
  if (rank === "polyeleos") return saturday
    ? R(same(["menaion", "day"]), "§2E", "p.50", "But if it be Saturday, all are from the Menaion and then for the day.")
    : R(all(["menaion"], ["day", "menaion"]), "§2E", "p.50", "Prokeimenon, Alleluia and Communion Hymn: from the Menaion, only. Epistle and Gospel: for the day and from the Menaion.");
  const sec = rank === "doxology" ? "§2D" : rank === "six_stichera" ? "§2C → §2A" : "§2A";
  return saturday
    ? R(same(["menaion", "day"]), sec, rank === "doxology" ? "p.47" : "p.39", "But on Saturday: from the Menaion and then for the day.")
    : R(same(["day", "menaion"]), sec, rank === "doxology" ? "p.47" : "p.39", "For the day (and, if there be such, from the Menaion).");
}
