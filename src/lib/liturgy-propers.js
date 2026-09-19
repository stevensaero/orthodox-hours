// src/lib/liturgy-propers.js
// ─────────────────────────────────────────────────────────────────────────────
// The Liturgy's sung propers — prokeimenon, Alleluia, communion hymn — resolved
// for a day. liturgy_assembler_spec.md §3.
//
// One rule, from Fekula, applied to all three the way readings.js applies it to
// the Epistle and Gospel:
//
//   "Prokeimenon, Epistle, Alleluia, Gospel, and Communion Hymn: For the day
//    (and, if there be such, from the Menaion)."                 — ch.2 §2A p.39
//   "Prokeimenon, Epistle, Alleluia and Gospel: Sunday and saint" — ch.1 §1F1
//   "Communion Hymn: Praise the Lord … and for the saint (if there be such)"
//   "Prokeimenon of the feast (preceding Sunday), and of the saint, if there be
//    such … Communion Hymn of the feast, and of the saint, if there be such"
//                                                                 — ch.4 §4A1
//   "But if it be Saturday, and there be readings in the Menaion, the
//    prokeimenon, epistle, alleluia, gospel, and communion hymn are first from
//    the Menaion, and then for the day."                          — ch.2 §2A
//
// So: the DAY'S proper (Pentecostarion > Sunday resurrectional > weekday daily
// from the Octoechos), then the MENAION'S, when the printed service has one —
// the gate is presence, exactly as readings.js gates on feast_e/feast_g, not
// rank. Saturday inverts when the Menaion has readings.
//
// Pure. Every source is passed in (`sources`), so hours-tool.jsx wires the
// Octoechos V2 accessors and this file stays testable without the app.
//
// NOTE: assembleTypica() still carries its own older routing (Menaion prok
// appended only at polyeleos/vigil; Menaion Alleluia replacing the daily one).
// This module is the intended single home; porting the Typica to it is a
// separate decision because it changes what the Typica shows on some days.
// ─────────────────────────────────────────────────────────────────────────────

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_KEYS = ["", "mon", "tue", "wed", "thu", "fri", "sat"];

const textOf = (v) => (v && typeof v === "object" ? v.text : v) || null;

/**
 * @param {object} args
 * @param {object} args.liturgicalData   getLiturgicalData(date)
 * @param {object} [args.menaionEntry]
 * @param {object} [args.pentEntry]
 * @param {boolean} [args.menaionFirst]  Saturday inversion, from readingsForDay().order
 * @param {object} args.sources
 *   sunProkeimenon(tone)   → { tone, text, stichos, label?, path? }
 *   sunAlleluia(tone)      → { tone, text|{text}, verses:[{text}] } (V2 shape) or { tone, verse, stichoi }
 *   dailyPropers(dayKey)   → { prokeimenon, prokeimenon_departed?, alleluia, communion } (V2 shape)
 * @returns {{ prokeimena: Array, alleluia: Array, communion: Array }}
 *   each item: { tone, text, stichoi:[], origin, source, note, fekula:{section,note}, path? }
 */
export function resolveLiturgyPropers({ liturgicalData, menaionEntry = null, pentEntry = null, menaionFirst = false, sources = {} }) {
  const ld = liturgicalData || {};
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const dow = typeof ld.dow === "number" ? ld.dow : 0;
  const tone = ld.tone;
  const inPent = !!(pentEntry && (pentEntry.prokeimenon_text || pentEntry.alleluia_verse || pentEntry.communion_verse));

  const day = { prokeimena: [], alleluia: [], communion: [] };
  const men = { prokeimena: [], alleluia: [], communion: [] };

  // ── the day's proper ─────────────────────────────────────────────────────
  if (inPent) {
    const src = "Pentecostarion · " + (pentEntry.source_file || "St. Sergius PDF");
    if (pentEntry.prokeimenon_text) day.prokeimena.push({
      tone: pentEntry.prokeimenon_tone, text: pentEntry.prokeimenon_text,
      stichoi: pentEntry.prokeimenon_stichos ? [pentEntry.prokeimenon_stichos] : [],
      origin: "pentecostarion", source: src, note: "Prokeimenon of the feast (Pentecostarion).",
      fekula: { section: "§4A1", note: "Prokeimenon of the feast (preceding Sunday), and of the saint, if there be such." },
    });
    if (pentEntry.alleluia_verse) day.alleluia.push({
      tone: pentEntry.alleluia_tone, text: pentEntry.alleluia_verse,
      stichoi: pentEntry.alleluia_stichos ? [pentEntry.alleluia_stichos] : [],
      origin: "pentecostarion", source: src, note: "Alleluia of the feast (Pentecostarion).",
      fekula: { section: "§4A1", note: "Alleluia of the feast (preceding Sunday), and of the saint, if there be such." },
    });
    if (pentEntry.communion_verse) day.communion.push({
      text: pentEntry.communion_verse, origin: "pentecostarion", source: src,
      note: "Communion hymn of the feast (Pentecostarion).",
      fekula: { section: "§4A1", note: "Communion Hymn of the feast (preceding Sunday), and of the saint, if there be such." },
    });
  } else if (isSunday) {
    const p = sources.sunProkeimenon ? sources.sunProkeimenon(tone) : null;
    if (p) day.prokeimena.push({
      tone: p.tone, text: p.text, stichoi: p.stichos ? [p.stichos] : [], label: p.label || null, path: p.path,
      origin: "sunday", source: "St. Sergius Sunday Octoechos",
      note: "Sunday resurrectional prokeimenon, Tone " + tone + ".",
      fekula: { section: "§1A–§1E", note: "Prokeimenon, Epistle, Alleluia and Gospel: for Sunday and from the Menaion." },
    });
    const a = sources.sunAlleluia ? sources.sunAlleluia(tone) : null;
    if (a) day.alleluia.push({
      tone: a.tone, text: textOf(a.text) || a.verse,
      stichoi: (a.verses || a.stichoi || []).map(textOf).filter(Boolean), path: a.path,
      origin: "sunday", source: "St. Sergius Sunday Octoechos",
      note: "Sunday resurrectional Alleluia, Tone " + tone + ".",
      fekula: { section: "§1A–§1E", note: "Alleluia for Sunday and from the Menaion; the resurrectional Alleluia is sung first (§4A3)." },
    });
    // Sunday communion hymn — "Praise the Lord from the heavens" — is the book's
    // own printed text (ef-09); nothing to add for the day.
  } else {
    const p = sources.dailyPropers ? sources.dailyPropers(DAY_KEYS[dow]) : null;
    if (p) {
      const mk = (pr, extra) => ({
        tone: pr.tone, text: pr.text, stichoi: pr.stichos ? [pr.stichos] : [], path: pr.path,
        origin: "weekday", source: "Octoechos · daily Liturgy propers",
        fekula: { section: "§2A", note: "Prokeimenon, Epistle, Alleluia, Gospel, and Communion Hymn: For the day (and, if there be such, from the Menaion)." },
        ...extra,
      });
      if (p.prokeimenon) day.prokeimena.push(mk(p.prokeimenon, { note: DAY_NAMES[dow] + " prokeimenon." }));
      if (dow === 6 && p.prokeimenon_departed) day.prokeimena.push(mk(p.prokeimenon_departed, { note: "Saturday prokeimenon for the departed." }));
      if (p.alleluia) day.alleluia.push({
        tone: p.alleluia.tone, text: textOf(p.alleluia.text),
        stichoi: (p.alleluia.verses || []).map(textOf).filter(Boolean), path: p.alleluia.path,
        origin: "weekday", source: "Octoechos · daily Liturgy propers", note: DAY_NAMES[dow] + " Alleluia.",
        fekula: { section: "§2A", note: "Alleluia: for the day (and, if there be such, from the Menaion)." },
      });
      if (p.communion) day.communion.push({
        text: textOf(p.communion), origin: "weekday", source: "Octoechos · daily Liturgy propers",
        note: DAY_NAMES[dow] + " communion hymn.",
        fekula: { section: "§2A", note: "Communion Hymn: for the day (and, if there be such, from the Menaion)." },
      });
    }
  }

  // ── the Menaion's proper — presence-gated, never rank-gated ──────────────
  if (menaionEntry) {
    const saint = menaionEntry.saint || "the commemoration";
    const src = "Menaion · " + (menaionEntry.source_file || saint);
    const fk = { section: menaionEntry.fekula_section ? "§" + menaionEntry.fekula_section : null,
      note: "…and of the saint, if there be such. Present because the printed service appoints it; the gate is the Menaion's contents, not the saint's rank (cf. readings rule)." };
    if (menaionEntry.prokeimenon_text) {
      men.prokeimena.push({
        tone: menaionEntry.prokeimenon_tone, text: menaionEntry.prokeimenon_text,
        stichoi: menaionEntry.prokeimenon_stichos ? [menaionEntry.prokeimenon_stichos] : [],
        origin: "menaion", source: src, note: "Prokeimenon of " + saint + ".", fekula: fk,
      });
      if (menaionEntry.prokeimenon_2_text) men.prokeimena.push({
        tone: menaionEntry.prokeimenon_2_tone, text: menaionEntry.prokeimenon_2_text, stichoi: [],
        origin: "menaion", source: src, note: "Second prokeimenon of " + saint + ".", fekula: fk,
      });
    }
    if (menaionEntry.alleluia_verse) {
      men.alleluia.push({
        tone: menaionEntry.alleluia_tone, text: menaionEntry.alleluia_verse,
        stichoi: menaionEntry.alleluia_stichos ? [menaionEntry.alleluia_stichos] : [],
        origin: "menaion", source: src, note: "Alleluia of " + saint + ".", fekula: fk,
      });
      if (menaionEntry.alleluia_2_verse) men.alleluia.push({
        tone: menaionEntry.alleluia_2_tone, text: menaionEntry.alleluia_2_verse, stichoi: [],
        origin: "menaion", source: src, note: "Second Alleluia of " + saint + ".", fekula: fk,
      });
    }
    if (menaionEntry.communion_verse) {
      men.communion.push({
        text: menaionEntry.communion_verse, origin: "menaion", source: src,
        note: "Communion hymn of " + saint + ".", fekula: fk,
      });
    }
  }

  const join = (k) => (menaionFirst ? [...men[k], ...day[k]] : [...day[k], ...men[k]]);
  return { prokeimena: join("prokeimena"), alleluia: join("alleluia"), communion: join("communion"), menaionFirst };
}

/** "Tone 4" / "Tone 4 · Tone 8" for an outline row. */
export function toneLabelFor(items) {
  const tones = (items || []).map(i => i && i.tone).filter(t => t != null);
  return tones.length ? tones.map(t => "Tone " + t).join(" · ") : null;
}

// ── Liturgy-only substitutions ─────────────────────────────────────────────

/** The hymn sung instead of the Trisagion, when the day appoints one. */
export function trisagionReplacement({ menaionEntry, pentEntry }) {
  const t = (pentEntry && pentEntry.trisagion_replacement) || (menaionEntry && menaionEntry.trisagion_replacement) || null;
  if (!t) return null;
  const from = pentEntry && pentEntry.trisagion_replacement ? "Pentecostarion" : "Menaion";
  return { text: t, source: from + " · " + ((from === "Menaion" ? menaionEntry.source_file : pentEntry.source_file) || from),
    note: "Sung instead of the Trisagion, as the printed service appoints." };
}

/**
 * "Instead of It is truly meet": the refrain and irmos of Ode IX.
 * V1 carries two field pairs (decision 3): `instead_of_it_is_truly_meet_*`
 * is read first, `zadostoinik_*` as the fallback.
 * Returns { refrain, irmos, source, suppressedOnly } or null.
 */
export function zadostoinikFor({ menaionEntry, pentEntry }) {
  for (const [entry, from] of [[pentEntry, "Pentecostarion"], [menaionEntry, "Menaion"]]) {
    if (!entry) continue;
    const refrain = entry.instead_of_it_is_truly_meet_refrain || entry.zadostoinik_refrain || null;
    const irmos = entry.instead_of_it_is_truly_meet_irmos || entry.zadostoinik_irmos || null;
    if (refrain || irmos) {
      return { refrain, irmos, source: from + " · " + (entry.source_file || from), suppressedOnly: false,
        legacyField: !entry.instead_of_it_is_truly_meet_refrain && !!entry.zadostoinik_refrain };
    }
    if (entry.it_is_truly_meet_suppressed) return { refrain: null, irmos: null, source: from, suppressedOnly: true };
  }
  return null;
}

/**
 * The Entrance verse's middle clause (le-10 / le-11 in the encoding):
 * "O Son of God, ___, save us…". From the book's own table (le-11).
 */
export function entranceClause({ liturgicalData, menaionEntry }) {
  const ld = liturgicalData || {};
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const feast = ld.feastPeriod && ld.feastPeriod.feast;
  const inFeast = ["great_feast", "afterfeast", "apodosis"].includes(ld.season);
  // Sunday first: the book's table gives Sundays their own clause, and Fekula's
  // second-antiphon rule is stated for weekdays in an afterfeast of the Lord
  // (ch.2 §2G2, p.58). A Sunday inside such an afterfeast keeps the Sunday
  // clause here; flag in the note so a reviewer can overrule.
  if (isSunday) return { text: "Who didst rise from the dead", basis: "SUNDAYS (le-11)" + (inFeast ? "; Sunday in a feast period — the resurrectional clause is used" : ""), resolved: true };
  if (inFeast && feast) {
    const isTheotokos = /theotokos|dormition|nativity of the theotokos|entry|annunciation|protection/i.test(feast.name || "");
    if (isTheotokos) return { text: "Through the prayers of the Theotokos", basis: "FEASTS OF THE THEOTOKOS (le-11)", resolved: true };
    // A feast of the Lord: the refrain of the feast's second antiphon — no V1 field.
    return { text: null, basis: "(OTHER FEASTS): See Appendices VI and VII — the refrain of the feast's second antiphon; not encoded in V1", resolved: false };
  }
  void menaionEntry;
  return { text: "Who art wondrous in the saints", basis: "WEEKDAYS (le-11)", resolved: true };
}

/** Evangelist name from a Gospel reference ("Matthew 23:29-39 (§96)"). */
export function evangelistOf(ref) {
  if (!ref) return null;
  const m = String(ref).trim().match(/^(Matthew|Mark|Luke|John)\b/i);
  if (!m) return null;
  const n = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
  return n === "John" ? "John the Theologian" : n;
}

/** "The reading from the Epistle of the Holy Apostle Paul to the Romans." */
export function epistleTitle(ref) {
  if (!ref) return null;
  const r = String(ref).replace(/\s*\(§[^)]+\)/, "").trim();
  const book = r.split(/\s+\d/)[0].trim();
  const ordinal = (b) => ["", "First", "Second", "Third"][+(b.match(/^([123])/) || [0, 0])[1]] || "";
  if (/^acts$/i.test(book)) return "The reading from the Acts of the Holy Apostles.";
  if (/^heb/i.test(book)) return "The reading from the Epistle of the Holy Apostle Paul to the Hebrews.";
  if (/^james$/i.test(book)) return "The reading from the General Epistle of the Holy Apostle James.";
  if (/^jude$/i.test(book)) return "The reading from the General Epistle of the Holy Apostle Jude.";
  if (/^[123]\s*peter/i.test(book)) return "The reading from the " + ordinal(book) + " General Epistle of the Holy Apostle Peter.";
  if (/^[123]\s*john/i.test(book)) return "The reading from the " + ordinal(book) + " General Epistle of the Holy Apostle John the Theologian.";
  if (/^[12]\s*cor/i.test(book)) return "The reading from the " + ordinal(book) + " Epistle of the Holy Apostle Paul to the Corinthians.";
  if (/^[12]\s*thess/i.test(book)) return "The reading from the " + ordinal(book) + " Epistle of the Holy Apostle Paul to the Thessalonians.";
  if (/^[12]\s*tim/i.test(book)) return "The reading from the " + ordinal(book) + " Epistle of the Holy Apostle Paul to Timothy.";
  // Philemon before Philippians: "phil" is a prefix of both.
  const pauline = [["philem", "Philemon"], ["phil", "the Philippians"], ["rom", "the Romans"], ["gal", "the Galatians"],
    ["eph", "the Ephesians"], ["col", "the Colossians"], ["tit", "Titus"]];
  for (const [key, name] of pauline) {
    if (new RegExp("^" + key, "i").test(book)) return "The reading from the Epistle of the Holy Apostle Paul to " + name + ".";
  }
  return "The reading from the Epistle to " + book + ".";
}
