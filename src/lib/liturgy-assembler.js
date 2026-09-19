// src/lib/liturgy-assembler.js
// ─────────────────────────────────────────────────────────────────────────────
// The Divine Liturgy assembler — liturgy_assembler_spec.md §1.2, §1.3.
//
// Pure: takes the unit array from getLiturgy(variant) plus view state, returns
// the flat elements[] every other service returns. hours-tool.jsx does one
// dispatch and nothing else. The walk emits the fixed skeleton 1:1; the HOOKS
// (§3) — planned in planHooks() from the day's context — insert the movable
// parts after, before, or in place of specific units, or skip a movement.
// Without a `ctx` the walk is the fixed skeleton alone (Phase 1 behaviour).
//
// Element types emitted (rendered by ServiceBlock):
//   liturgy_section  — one per movement, id "mv-<movement>"; the outline row
//   liturgy_unit     — one per unit; kind: heading | subheading | rubric | line
//   liturgy_hidden   — a collapsed run of units the view layers hide
//
// Never emitted: source_page / basil_page (decision 6). Provenance stays in
// the data; the tool does not show page numbers.
// ─────────────────────────────────────────────────────────────────────────────

import { MOVEMENT_BY_ID, TEACHING_RUBRICS, VARIANT_TITLES } from "../data/liturgy/registry.js";
import { resolveLiturgyPropers, toneLabelFor, trisagionReplacement, zadostoinikFor, entranceClause,
         evangelistOf, epistleTitle } from "./liturgy-propers.js";

export const LITURGY_VIEW_DEFAULTS = Object.freeze({ rubrics: false, quiet: false, markDiff: true });

function isMajorHeading(text) {
  const stripped = String(text || "").replace(/[*\s]/g, "");
  return stripped.length > 0 && stripped === stripped.toUpperCase() && /[A-Z]/.test(stripped);
}

// unit → element. `first` marks the first unit of its movement.
function toElement(u, first, view) {
  const base = {
    id: `lit-${u.id}`,
    unitId: u.id,
    type: "liturgy_unit",
    movement: u.movement,
    text: u.text,
    speaker: u.speaker,
    mode: u.mode ?? null,
    cue: u.cue ?? null,
    variantTag: u.basilInsert ? "insert" : (u.basilOverride ? "override" : null),
    markDiff: view.markDiff !== false,
  };
  if (u.speaker === "heading") {
    // A movement-opening ALL-CAPS heading is absorbed by the section header
    // (registry label); it returns null and is dropped. Mid-movement headings
    // ("COMMUNION HYMN", "EPISTLE READING") and minor cues ("Exclamation:")
    // stay, because the book placed them inside a movement on purpose.
    if (first && isMajorHeading(u.text)) return null;
    return { ...base, kind: isMajorHeading(u.text) ? "heading" : "subheading" };
  }
  if (u.speaker === "rubric") {
    return { ...base, kind: "rubric", teaching: TEACHING_RUBRICS.has(u.id) };
  }
  return { ...base, kind: "line" };
}

// Which units the two view layers hide. Teaching rubrics are never hidden.
function isHidden(el, view) {
  if (el.type !== "liturgy_unit") return false;
  if (el.kind === "rubric") return !view.rubrics && !el.teaching;
  if (el.kind === "line") return !view.quiet && el.mode === "quiet";
  return false;
}

/**
 * @param {object} args
 * @param {Array}  args.units     getLiturgy(variant) output
 * @param {string} args.variant   "chrysostom" | "basil"
 * @param {object} args.view      { rubrics, quiet, markDiff }
 * @returns {Array} elements
 */
export function assembleLiturgy({ units, variant = "chrysostom", view = LITURGY_VIEW_DEFAULTS, ctx = null }) {
  if (!Array.isArray(units) || units.length === 0) return [];
  const v = { ...LITURGY_VIEW_DEFAULTS, ...view };
  const hooks = ctx ? planHooks(ctx, variant) : EMPTY_HOOKS;
  const out = [];
  let lastMovement = null;

  // Collapse consecutive hidden units into one chip. Flushed whenever a
  // visible element or a section boundary arrives.
  let run = null;
  const flush = () => {
    if (!run) return;
    out.push(run);
    run = null;
  };
  const push = (el) => {
    if (isHidden(el, v)) {
      if (!run) run = { id: `lit-hidden-${el.unitId}`, type: "liturgy_hidden", movement: el.movement, hidden: [], rubrics: 0, quiet: 0 };
      run.hidden.push(el);
      if (el.kind === "rubric") run.rubrics += 1; else run.quiet += 1;
      return;
    }
    flush();
    out.push(el);
  };

  const emitAll = (els) => { for (const e of els || []) { flush(); out.push(e); } };

  for (const u of units) {
    const first = u.movement !== lastMovement;
    if (first) {
      flush();
      const m = MOVEMENT_BY_ID[u.movement] || { label: u.movement, part: null, core: false, movable: false };
      const meta = hooks.section[u.movement] || {};
      out.push({
        id: `mv-${u.movement}`,
        type: "liturgy_section",
        movement: u.movement,
        label: m.label,
        part: m.part,
        core: !!m.core,
        movable: !!m.movable,
        toneLabel: meta.toneLabel || null,     // read by the outline row (spec §2.4)
        unresolved: !!meta.unresolved,
      });
      lastMovement = u.movement;
      if (meta.open) emitAll(meta.open);
    }
    if (hooks.skip.has(u.movement)) continue;             // whole movement omitted (the omission was emitted by `open`)
    if (hooks.before[u.id]) emitAll(hooks.before[u.id]);
    if (u.id in hooks.replace) {
      const r = hooks.replace[u.id];
      if (r) emitAll(Array.isArray(r) ? r : [r]);            // null = drop the unit
    } else {
      const el = toElement(u, first, v);
      if (el) push(el);
    }
    if (hooks.after[u.id]) emitAll(hooks.after[u.id]);
  }
  flush();
  return out;
}

const EMPTY_HOOKS = Object.freeze({ before: {}, after: {}, replace: {}, skip: new Set(), section: {} });

// ─── HOOKS — liturgy_assembler_spec.md §3 ───────────────────────────────────
// Everything that varies by day is decided here, from `ctx`, and attached to
// the unit id it belongs to. Nothing in the walk knows the rubrics.
//
// ctx = { liturgicalData, menaionEntry, pentEntry, dailyReading, feastReading,
//         sources: { sunProkeimenon, sunAlleluia, dailyPropers, readingsForDay,
//                    dismissal(variant) → element | null } }
function planHooks(ctx, variant) {
  const { liturgicalData: ld = {}, menaionEntry = null, pentEntry = null, dailyReading = null, feastReading = null, sources = {} } = ctx;
  const h = { before: {}, after: {}, replace: {}, skip: new Set(), section: {} };
  const isSunday = ld.dow === 0 || ld.isSunday === true;
  const rank = (menaionEntry && menaionEntry.rank) || "simple";
  const isGreatFeast = ld.season === "great_feast";
  const highRank = ["polyeleos", "vigil", "great_feast"].includes(rank) || isGreatFeast;
  const mov = (id, label, text, extra = {}) => ({ id, type: "movable", label, text, ...extra });
  const unresolved = (id, label, why, fekula) => ({ id, type: "movable", label, text: why, unresolved: true, unresolvedNote: "not yet encoded", source: "—", fekula });

  // ── Antiphons: festal antiphons on a Great Feast — no V1 field yet ───────
  if (isGreatFeast) {
    const why = "On this Great Feast the festal antiphons replace the typical psalms and the Beatitudes. V1 has no field for them yet, so the typical antiphons are shown below as printed.";
    h.section.antiphon_1 = { unresolved: true, open: [unresolved("lit-antiphons-festal", "Festal Antiphons", why,
      { section: "ch.1 Liturgy order", note: "On Feast Days, special Antiphons are sung (the book's own footnote). Festal-antiphon fields are a known V1 capture gap." })] };
    h.section.antiphon_2 = { unresolved: true };
    h.section.antiphon_3 = { unresolved: true };
  }

  // ── Little Entrance: the entrance verse's day-type clause (le-10) ────────
  {
    const c = entranceClause({ liturgicalData: ld, menaionEntry });
    if (c.resolved) {
      h.replace["le-10"] = {
        id: "lit-le-10", unitId: "le-10", type: "liturgy_unit", kind: "line", movement: "little_entrance",
        speaker: "choir", mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true,
        text: "Come, let us worship and fall down before Christ. O Son of God, " + c.text + ", save us, who sing to Thee: Alleluia!",
        fekula: { section: "Entrance verse", note: "Middle clause from the book's own table: " + c.basis + "." },
      };
      h.replace["le-11"] = null;   // the table is answered; the teaching rubric is not needed today
    } else {
      h.section.little_entrance = { unresolved: true };
      h.after["le-11"] = [unresolved("lit-le-clause", "Entrance verse clause", c.basis, { section: "ch.2 p.58", note: "On a feast of the Lord the clause is the refrain of the feast's second antiphon." })];
    }
  }

  // ── Troparia and kontakia (Phase 3) ──────────────────────────────────────
  h.section.troparia_kontakia = { unresolved: true };
  h.after["tk-01"] = [unresolved("lit-tk-order", "Troparia and Kontakia",
    "The appointed troparia and kontakia in their Fekula order (Sunday/weekday, rank, forefeast/afterfeast, temple dedication) land in Phase 3.",
    { section: "ch.1 / ch.2", note: "Order of the troparia and kontakia after the Little Entrance — Phase 3." })];

  // ── Trisagion replacement ────────────────────────────────────────────────
  {
    const t = trisagionReplacement({ menaionEntry, pentEntry });
    if (t) {
      const sub = (id, unitId, text) => ({ id, unitId, type: "liturgy_unit", kind: "line", movement: "trisagion", speaker: "choir",
        mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true, text,
        fekula: { section: "Trisagion", note: t.note + " Source: " + t.source } });
      h.replace["tr-01"] = sub("lit-tr-01", "tr-01", t.text + " {{(3)}}");
      h.replace["tr-03"] = null;                       // "Holy Immortal…" has no half-line in the substitute
      h.replace["tr-04"] = sub("lit-tr-04", "tr-04", t.text);
      h.before["tr-01"] = [mov("lit-trisagion-sub", "Instead of the Trisagion", t.text, { source: t.source,
        fekula: { section: "Trisagion", note: "On certain Feast Days this is replaced by another hymn (the book's footnote); the printed service appoints the hymn." } })];
      h.section.trisagion = { toneLabel: null };
    }
  }

  // ── Readings, prokeimenon, Alleluia, communion ───────────────────────────
  const readings = sources.readingsForDay
    ? sources.readingsForDay({ liturgicalData: ld, menaionEntry, dailyReading, feastReading })
    : { groups: [], order: "day-first", rule: { section: null, quote: "" }, hasMenaionReadings: false };
  const propers = resolveLiturgyPropers({ liturgicalData: ld, menaionEntry, pentEntry, menaionFirst: readings.order === "menaion-first", sources });

  const prokEls = propers.prokeimena.map((p, i) => ({
    id: "lit-prokeimenon-" + i, type: "prokeimenon",
    label: "Prokeimenon · Tone " + p.tone + (p.label ? " — " + p.label : ""),
    announcement: "The Prokeimenon in Tone " + p.tone + ": " + p.text,
    exchanges: [
      { speaker: "chanters", text: p.text }, { speaker: "chanters", text: p.text },
      ...(p.stichoi || []).flatMap(st => [{ speaker: "deacon", text: "V.: " + st }, { speaker: "chanters", text: p.text }]),
    ],
    source: p.source, note: p.note, fekula: p.fekula, ...(p.path ? { srcPath: p.path } : {}),
  }));
  if (prokEls.length) {
    h.replace["pk-06"] = { id: "lit-pk-06", unitId: "pk-06", type: "liturgy_unit", kind: "line", movement: "prokeimenon", speaker: "reader",
      mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true,
      text: "The Prokeimenon in the " + ordinalTone(propers.prokeimena[0].tone) + " Tone:" };
    h.after["pk-07"] = prokEls;
    h.section.prokeimenon = { toneLabel: toneLabelFor(propers.prokeimena) };
  } else {
    h.section.prokeimenon = { unresolved: true };
    h.after["pk-07"] = [unresolved("lit-prokeimenon-none", "Prokeimenon", "No prokeimenon resolved for this day.", { section: null, note: "" })];
  }

  const readingEls = (slot) => {
    const g = readings.groups.find(x => x.slot === slot);
    if (!g) return [];
    return g.items.map((it, i) => mov("lit-" + slot + "-" + i, g.label + " · " + it.label, it.ref, {
      readingRef: it.ref, source: it.source === "menaion" ? "Menaion" : "OCA lectionary",
      fekula: { section: readings.rule.section, note: readings.rule.quote + (readings.order === "menaion-first" ? " — Saturday: Menaion first." : "") },
    }));
  };
  const ep = readingEls("e"), go = readingEls("g");
  if (ep.length) {
    const first = ep[0];
    h.replace["ep-02"] = { id: "lit-ep-02", unitId: "ep-02", type: "liturgy_unit", kind: "line", movement: "epistle", speaker: "reader",
      mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true, text: epistleTitle(first.readingRef) || "The reading from…" };
    h.replace["ep-03"] = null;
    h.after["ep-05"] = ep;
    h.section.epistle = {};
  } else {
    h.section.epistle = { unresolved: true };
    h.after["ep-05"] = [unresolved("lit-epistle-none", "Epistle", "No Epistle appointed for this date in the encoded lectionary.", { section: readings.rule.section, note: readings.rule.quote })];
  }

  const alEls = propers.alleluia.map((a, i) => mov("lit-alleluia-" + i, "Alleluia · Tone " + a.tone,
    ["Alleluia, Tone " + a.tone + ".\n\nV.: " + a.text, ...(a.stichoi || []).map(st => "V.: " + st)].join("\n\n"),
    { source: a.source, note: a.note, fekula: a.fekula, ...(a.path ? { srcPath: a.path } : {}) }));
  if (alEls.length) {
    h.replace["al-02"] = { id: "lit-al-02", unitId: "al-02", type: "liturgy_unit", kind: "line", movement: "alleluia", speaker: "reader",
      mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true,
      text: "In the " + ordinalTone(propers.alleluia[0].tone) + " tone, Alleluia! Alleluia! Alleluia!" };
    h.after["al-03"] = alEls;
    h.section.alleluia = { toneLabel: toneLabelFor(propers.alleluia) };
  } else {
    h.section.alleluia = { unresolved: true };
    h.after["al-03"] = [unresolved("lit-alleluia-none", "Alleluia", "No Alleluia resolved for this day.", { section: null, note: "" })];
  }

  if (go.length) {
    const ev = evangelistOf(go[0].readingRef);
    const evs = [...new Set(go.map(x => evangelistOf(x.readingRef)).filter(Boolean))];
    const fill = (id, text) => ({ id: "lit-" + id, unitId: id, type: "liturgy_unit", kind: "line", movement: "gospel", speaker: id === "go-04" ? "priest" : "deacon",
      mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true, text });
    if (ev) {
      h.replace["go-02"] = fill("go-02", "Bless, Master, him who proclaims the good tidings of the holy Apostle and Evangelist " + ev + ".");
      h.replace["go-04"] = fill("go-04", "May God, through the prayers of the holy, glorious, and all-laudable Apostle and Evangelist " + ev + ", enable you to proclaim the good tidings with great power, to the fulfillment of the Gospel of His belovèd Son, our Lord Jesus Christ.");
      h.replace["go-11"] = fill("go-11", "The reading from the Holy Gospel according to Saint " + evs.join(" and Saint ") + ".");
    }
    h.after["go-14"] = go;
    h.section.gospel = {};
  } else {
    h.section.gospel = { unresolved: true };
    h.after["go-14"] = [unresolved("lit-gospel-none", "Gospel", "No Gospel appointed for this date in the encoded lectionary.", { section: readings.rule.section, note: readings.rule.quote })];
  }

  // ── Litany for the Departed: weekdays only ──────────────────────────────
  if (isSunday || highRank) {
    h.skip.add("litany_departed");
    h.section.litany_departed = { open: [{ id: "lit-departed-omitted", type: "omission",
      text: "The Litany for the Departed is not said today — " + (isSunday ? "it is Sunday." : "it is a feast day."),
      fekula: { section: "Book rubric", note: "The Litany for the Departed may be recited here, except on Sundays and Feast Days." } }] };
  }

  // ── Hymn to the Theotokos: the zadostoinik ──────────────────────────────
  {
    const z = zadostoinikFor({ menaionEntry, pentEntry });
    if (z && !z.suppressedOnly) {
      h.replace["cm-07"] = [
        { id: "lit-cm-07", unitId: "cm-07", type: "liturgy_unit", kind: "line", movement: "commemorations", speaker: "choir",
          mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true,
          text: [z.refrain, z.irmos].filter(Boolean).join("\n") },
        mov("lit-zadostoinik", "Instead of It is truly meet", [z.refrain, z.irmos].filter(Boolean).join("\n\n"), {
          source: z.source,
          note: z.legacyField ? "Read from the legacy zadostoinik_* fields (decision 3)." : undefined,
          fekula: { section: "ch.2 p.63", note: "If it be an afterfeast, instead of It is truly meet… we sing the Refrain and Irmos of Ode IX, from the canon of the feast." } }),
      ];
      h.section.commemorations = { toneLabel: null };
    } else if (z && z.suppressedOnly) {
      h.section.commemorations = { unresolved: true };
      h.after["cm-07"] = [unresolved("lit-zadostoinik-missing", "Instead of It is truly meet", "The printed service suppresses It is truly meet but the refrain and irmos are not encoded for this date.", { section: "ch.2 p.63", note: "Refrain and Irmos of Ode IX of the feast." })];
    }
  }

  // ── Communion hymn ──────────────────────────────────────────────────────
  {
    const c = propers.communion;
    const dayC = c.find(x => x.origin !== "menaion");
    if (dayC && !isSunday) {
      h.replace["ef-09"] = { id: "lit-ef-09", unitId: "ef-09", type: "liturgy_unit", kind: "line", movement: "elevation_and_fraction", speaker: "choir",
        mode: null, cue: null, variantTag: null, markDiff: false, resolvedBlank: true, text: dayC.text + " Alleluia! Alleluia! Alleluia!" };
    }
    const els = c.map((x, i) => mov("lit-communion-" + i, "Communion Hymn · " + (x.origin === "menaion" ? "of the commemoration" : x.origin === "pentecostarion" ? "of the feast" : "of the day"),
      x.text, { source: x.source, note: x.note, fekula: x.fekula }));
    if (els.length) h.after["ef-footnote"] = els;
    h.section.elevation_and_fraction = {};
  }

  // ── Dismissal ───────────────────────────────────────────────────────────
  if (sources.dismissal) {
    const d = sources.dismissal(variant);
    if (d) {
      h.replace["di-08"] = [{ ...d, id: "lit-di-08" }];
      h.replace["di-footnote"] = null;
      h.section.dismissal = {};
    }
  }

  return h;
}

const ORDINAL_TONE = ["", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"];
function ordinalTone(t) { return ORDINAL_TONE[t] || String(t); }

export function liturgyTitle(variant) {
  return VARIANT_TITLES[variant] || VARIANT_TITLES.chrysostom;
}

// Scroll anchoring across the variant toggle (spec §2.2): a Basil-only insert
// has no Chrysostom counterpart, so it resolves to the nearest preceding unit
// present in both views. Computed once from the Basil unit list.
export function insertAnchors(basilUnits) {
  const anchors = {};
  let lastShared = null;
  for (const u of basilUnits || []) {
    if (u.basilInsert) anchors[u.id] = lastShared;
    else lastShared = u.id;
  }
  return anchors;
}
