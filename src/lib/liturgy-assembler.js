// src/lib/liturgy-assembler.js
// ─────────────────────────────────────────────────────────────────────────────
// The Divine Liturgy assembler — liturgy_assembler_spec.md §1.2, §1.3.
//
// Pure: takes the unit array from getLiturgy(variant) plus view state, returns
// the flat elements[] every other service returns. hours-tool.jsx does one
// dispatch and nothing else. Phase 1 walks the fixed skeleton 1:1 with NO
// hooks; the hook table (§3) lands in Phase 2/3 and slots into `walk()` at the
// marked point without touching the unit→element mapping.
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
export function assembleLiturgy({ units, view = LITURGY_VIEW_DEFAULTS }) {
  // `variant` is accepted in the call (hours-tool.jsx passes it) but the walk
  // does not need it: getLiturgy(variant) already chose the units. Hooks in
  // Phase 2 will read it for the author-specific dismissal.
  if (!Array.isArray(units) || units.length === 0) return [];
  const v = { ...LITURGY_VIEW_DEFAULTS, ...view };
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

  for (const u of units) {
    const first = u.movement !== lastMovement;
    if (first) {
      flush();
      const m = MOVEMENT_BY_ID[u.movement] || { label: u.movement, part: null, core: false, movable: false };
      out.push({
        id: `mv-${u.movement}`,
        type: "liturgy_section",
        movement: u.movement,
        label: m.label,
        part: m.part,
        core: !!m.core,
        movable: !!m.movable,
        // toneLabel / unresolved are set by hooks in Phase 2/3; the outline
        // row already reads them (spec §2.4).
        toneLabel: null,
      });
      lastMovement = u.movement;
    }
    const el = toElement(u, first, v);
    if (el) push(el);
    // ── Phase 2/3: hooks keyed on u.id insert or replace here (spec §1.3) ──
  }
  flush();
  return out;
}

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
