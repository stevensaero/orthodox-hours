// src/lib/bulletin-day.js
// ─────────────────────────────────────────────────────────────────────────────
// Everything the printable bulletin needs for one day. The bulletin component is
// a renderer: it prints what this returns and resolves nothing of its own.
//
// THE MENAION is the Menaion V2 service, through the same plans the Liturgy
// reads: entrancePlan (the troparia and kontakia the page gives the Liturgy, the
// OCA hymn in its own place when Prefer OCA is on), liturgyPlan (prokeimenon,
// communion verse, every Epistle and Gospel reference), and readingsForDay, which
// applies Fekula's rule by section or the order ODS vol. III prints for the date.
// So the sheet agrees with the Liturgy the tool assembles.
//
// `legacy` is the retired V1 entry (or a Pentecostarion entry): read only where
// the date has no Menaion V2 service, until those paths are reworked.
// Pure. Sources are injected.
// ─────────────────────────────────────────────────────────────────────────────
import { shown } from "../data/menaion_v2/adapter.js";
import { readingsForDay } from "./readings.js";

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const rankWords = (rank) => (rank ? String(rank).replace(/_/g, "-").replace(/\b\w/g, (c) => c.toUpperCase()) : null);
const isText = (n) => !!n && typeof n.text === "string";

/**
 * @param args.liturgicalData  { dow, season, tone, namedDay, feastPeriod, ... }
 * @param args.service         the Menaion V2 service { c, path } or null
 * @param args.entrance        entrancePlan(service) or null
 * @param args.liturgy         liturgyPlan(service) or null
 * @param args.otherName       the name of a second service on the date, or null
 * @param args.legacy          V1 / Pentecostarion entry, read only when service is null
 * @param args.dailyReading    { e, g }
 * @param args.feastReading    { e, g } (legacy path only)
 * @param args.sources         { resTroparion(tone), sunKontakion(tone), dismissalTheotokion(tone), hymnText(node) }
 * @returns { saint, secondSaint, rankLabel, readings, troparia, kontakia, extras }
 */
export function buildBulletinDay({ liturgicalData: ld = {}, service = null, entrance = null, liturgy = null, otherName = null,
  legacy = null, dailyReading = null, feastReading = null, sources = {} }) {
  const tone = ld.tone;
  const sunday = ld.season === "sunday" || ld.dow === 0;
  const text = (n) => (sources.hymnText ? sources.hymnText(n) : n.text);
  const troparia = []; const kontakia = []; const extras = [];
  const res = (list, get, label) => { if (sunday && tone && get) { const n = get(tone); if (n) list.push({ label, tone, text: text(n) }); } };

  if (service && entrance) {
    const c = service.c;
    const of = (sl) => (sl.source === "oca" ? "OCA text" : sl.source === "general" ? "General Menaion" : null);
    const hymn = (sl, label) => ({ label: label + (of(sl) ? " (" + of(sl) + ")" : ""), tone: sl.node.tone ?? null, text: shown(sl.node) });
    const who = (sl, i, n) => (sl.node.saint && sl.source === "menaion" ? "Of " + sl.node.saint : entrance.name ? "Of " + entrance.name : n > 1 ? "Of the commemoration (" + (i + 1) + ")" : "Of the commemoration");
    const ownFeast = entrance.kind === "feast";
    res(troparia, sources.resTroparion, "Of the Resurrection");
    if (entrance.feast.troparion) troparia.push(hymn(entrance.feast.troparion, "Of the feast"));
    entrance.saints.troparia.forEach((sl, i, a) => troparia.push(hymn(sl, ownFeast ? "Of the feast" : who(sl, i, a.length))));
    // The dismissal theotokion closes the troparia on an ordinary Sunday; in a feast
    // period the troparion of the feast stands there (Fekula ch. 1).
    if (!entrance.feast.troparion && !ownFeast) res(troparia, sources.dismissalTheotokion, "Dismissal Theotokion");
    res(kontakia, sources.sunKontakion, "Of the Resurrection");
    entrance.saints.kontakia.forEach((sl, i, a) => kontakia.push(hymn(sl, ownFeast ? "Of the feast" : who(sl, i, a.length))));
    if (entrance.feast.kontakion) kontakia.push(hymn(entrance.feast.kontakion, "Of the feast"));

    // Broadsheet only: the half sheet has no room for these.
    const v = c.great_vespers ?? c.vespers ?? {};
    if (isText(v.aposticha_glory)) extras.push({ label: "Glory at the Aposticha", tone: v.aposticha_glory.tone ?? null, text: shown(v.aposticha_glory) });
    const exa = [].concat(c.matins?.exapostilarion ?? []).find(isText);
    if (exa) extras.push({ label: "Exapostilarion", text: shown(exa) });
    (liturgy?.prokeimena ?? []).forEach((p) => extras.push({ label: "Prokeimenon of " + (p.feast ? "the feast" : "the commemoration"), tone: p.tone, text: p.text }));
    (liturgy?.communion ?? []).forEach((p) => extras.push({ label: "Communion verse" + (p.feast ? " of the feast" : ""), text: p.text }));

    const named = ld.namedDay && ld.namedDay.isSunday;
    const readings = readingsForDay({ liturgicalData: ld, rank: c.rank, kind: c.kind, dailyReading,
      feastReading: liturgy && (liturgy.epistles[0] || liturgy.gospels[0]) && !named ? { e: liturgy.epistles[0]?.display ?? null, g: liturgy.gospels[0]?.display ?? null } : null,
      menaionRefs: liturgy && !named ? { e: liturgy.epistles, g: liturgy.gospels } : null, order: entrance.order });
    return {
      saint: entrance.name ? cap(entrance.name) : entrance.saintName,
      secondSaint: otherName ? cap(otherName) : null,
      rankLabel: [rankWords(c.rank), c.fekula_section ? "Fekula §" + c.fekula_section : null].filter(Boolean).join(" · ") || null,
      readings, troparia, kontakia, extras,
    };
  }

  // ── no Menaion V2 service for the date: the retired V1 / Pentecostarion entry ──
  const entry = legacy;
  const saintRaw = entry && entry.saint && !String(entry.saint).startsWith("absent") ? entry.saint : null;
  const label = saintRaw ? "Of " + saintRaw : "Of the commemoration";
  res(troparia, sources.resTroparion, "Of the Resurrection");
  if (entry && entry.troparion) troparia.push({ label, tone: entry.troparion.tone, text: text(entry.troparion) });
  if (entry && entry.troparion_second) troparia.push({ label: "Second troparion", tone: entry.troparion_second.tone, text: text(entry.troparion_second) });
  res(troparia, sources.dismissalTheotokion, "Dismissal Theotokion");
  res(kontakia, sources.sunKontakion, "Of the Resurrection");
  const k = (entry && (entry.kontakion_ode6 || entry.kontakion_ode3)) || null;
  if (k) kontakia.push({ label, tone: k.tone, text: text(k) });
  if (entry && entry.aposticha_glory) extras.push({ label: "Glory at the Aposticha", tone: entry.aposticha_glory.tone, text: text(entry.aposticha_glory) });
  if (entry && entry.exapostilarion) extras.push({ label: "Exapostilarion", text: text(entry.exapostilarion) });
  if (entry && entry.prokeimenon_text) extras.push({ label: "Prokeimenon of the commemoration", tone: entry.prokeimenon_tone, text: entry.prokeimenon_text });
  if (entry && entry.communion_verse) extras.push({ label: "Communion verse", text: entry.communion_verse });
  return {
    saint: saintRaw || "No commemoration encoded for this date",
    secondSaint: null,
    rankLabel: [rankWords(entry && entry.rank), entry && entry.fekula_section ? "Fekula §" + entry.fekula_section : null].filter(Boolean).join(" · ") || null,
    readings: readingsForDay({ liturgicalData: ld, menaionEntry: entry, dailyReading, feastReading }),
    troparia, kontakia, extras,
  };
}
