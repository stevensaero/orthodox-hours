// ─── BULLETIN PAGINATION ────────────────────────────────────────────────────
//
// Owns where the bulletin breaks, instead of leaving it to CSS `column-count`.
//
// WHY TAKE THE BREAKS AWAY FROM CSS. Multicol balances and breaks wherever it
// lands: mid-troparion, mid-verse, and across a page turn with no notice. That
// is survivable while browsing and not while singing. It also cannot be
// reasoned about ahead of time, so there was no way to answer "will this day
// fit" for any day but the one in front of us — 6 September fits at 10.97in of
// 11, which says nothing about a Vigil with litya stichera and three paroemias.
//
// HOW HEIGHTS ARE KNOWN. src/lib/bulletin-metrics.js carries real Georgia
// advance widths and simulates the browser's own greedy word wrap, which
// reproduced twelve of twelve real line counts exactly. So these are computed
// heights rather than estimates, and the caller can still hand back measured
// heights from a rendered DOM to close the loop (see `withMeasured`).
//
// THE RULES, in the order they matter:
//   1. A hymn is never split. A troparion, kontakion or sticheron is a sung
//      unit; a choir turning a page mid-hymn is a liturgical problem, not a
//      typographic one. It moves whole, even at the cost of white space.
//   2. A heading never ends a column. It moves with what it introduces.
//   3. A reading may split, but never leaves fewer than two lines on either
//      side of the break, and says so when it does.
//   4. A split across a PAGE is announced loudly at both ends. A split between
//      the two columns of one page is announced quietly — the reader's eye
//      already goes there.

import { STYLES, blockHeightPt, wrapText, VERSE_OPEN, VERSE_CLOSE }
  from "./bulletin-metrics.js";

// Measured from a rendered sheet, not assumed. The component recomputes these
// from the real DOM and passes them in; these values are the fallback for the
// node-side proof renderer, which has no DOM.
// SLACK — two lines of the deepest body leading (11pt x 1.5), held back from
// each column so a sheet that only just fits is not one rounding error away
// from spilling onto a nearly blank extra page.
//
// BUT IT IS NEGOTIATED, NOT IMPOSED, because the cost is a cliff rather than a
// gradient. Measured on 6 September 2026:
//
//     slack   propers                       readings
//     0pt     1 page   99% 97%              2 pages
//     6pt     2 pages  82% 84% 32% 0%       2 pages
//     33pt    2 pages  86% 88% 33% 0%       2 pages
//
// A third of a line of slack costs the propers sheet an entire page, with a
// third column a third full — while the readings sheet, which is where sheets
// actually overran, stays at two pages however much slack it is given.
//
// So `paginateBest` takes the largest slack that does not cost a page. The
// margin is taken wherever it is free and declined where it is not, which is
// the only version of this that is worth having.
export const SLACK_PT = 33;
const SLACK_LADDER = [33, 22, 16.5, 10, 6, 0];

export const PAGE = {
  pageHeightPt: 792,           // 11in
  chromeBudgetPt: 601.7,       // 11in less padding, masthead and footer
  columnHeightPt: 601.7 - SLACK_PT,
  columnWidthIn: 3.43,
  columnsPerPage: 2,
  mastheadPt: 94.16,
  footerPt: 24.14,
};

const MIN_LINES_EITHER_SIDE = 2;

// ─── measuring ──────────────────────────────────────────────────────────────

function measureRun(text, styleKey, widthIn) {
  const m = blockHeightPt(text, styleKey, widthIn);
  const style = STYLES[styleKey];
  return { styleKey, text, ...m, spaceBefore: style.spaceBefore, spaceAfter: style.spaceAfter };
}

/**
 * Stack a block's runs, collapsing the margins between them.
 *
 * CSS vertical margins COLLAPSE: the gap between two stacked blocks is the
 * LARGER of the trailing margin above and the leading margin below, never their
 * sum. Summing them cost roughly 14% of a column and pushed 6 September onto a
 * second page it did not need. Returned as content plus its own outer margins,
 * so the packer can collapse against the neighbouring block too.
 */
function stackRuns(runs) {
  let contentPt = 0;
  for (let i = 0; i < runs.length; i++) {
    contentPt += runs[i].textPt;
    const next = runs[i + 1];
    if (next) contentPt += Math.max(runs[i].spaceAfter, next.spaceBefore);
  }
  return {
    contentPt,
    spaceBefore: runs[0] ? runs[0].spaceBefore : 0,
    spaceAfter: runs[runs.length - 1] ? runs[runs.length - 1].spaceAfter : 0,
  };
}

/**
 * Turn a flow item into a measured block.
 *
 * Every block reports `atomic` and, when it can be split, the parts a split may
 * fall between. A block that cannot honestly report its own height has no
 * business being in the flow.
 */
function measureBlock(item, widthIn) {
  switch (item.kind) {
    case "heading": {
      const runs = [measureRun(item.text, "heading", widthIn)];
      return { ...item, atomic: true, keepWithNext: true, runs, ...stackRuns(runs) };
    }
    case "commemoration": {
      const runs = [measureRun(item.text, "commemoration", widthIn)];
      if (item.secondary) runs.push(measureRun(item.secondary, "commemoration2", widthIn));
      return { ...item, atomic: true, runs, ...stackRuns(runs) };
    }
    case "slot": {
      const runs = [measureRun(item.label, "slotLabel", widthIn)];
      for (const row of item.rows) {
        runs.push(measureRun(row.ref, "readingRef", widthIn));
        runs.push(measureRun(row.of, "readingOf", widthIn));
      }
      return { ...item, atomic: true, runs, ...stackRuns(runs) };
    }
    case "cite": {
      const runs = [measureRun(item.text, "cite", widthIn)];
      return { ...item, atomic: true, runs, ...stackRuns(runs) };
    }
    case "hymn": {
      // Rule 1. Atomic by policy, not by size.
      const label = item.label
        ? measureRun(item.label + (item.tone ? `, Tone ${item.tone}` : ""), "hymnLabel", widthIn)
        : null;
      const body = measureRun(item.text, "hymnText", widthIn);
      const runs = label ? [label, body] : [body];
      return { ...item, atomic: true, runs, ...stackRuns(runs) };
    }
    case "lection": {
      // Rule 3. The head stays with at least the first two lines of the body.
      const head = [];
      head.push(measureRun(item.refLabel, "lectionRef", widthIn));
      if (item.intro) head.push(measureRun(item.intro, "lectionIntro", widthIn));
      const headStack = stackRuns(head);
      const headPt = head.length ? headStack.contentPt + Math.max(headStack.spaceAfter, 0) : 0;

      const style = STYLES.lectionBody;
      const lines = wrapText(item.text, style.pt, widthIn, !!style.italic);
      const linePt = style.pt * style.leading;

      return {
        ...item, atomic: false, headRuns: head, headPt,
        lines, linePt,
        spaceBefore: headStack.spaceBefore,
        spaceAfter: style.spaceAfter,
        contentPt: headPt + lines.length * linePt,
      };
    }
    default:
      throw new Error(`bulletin-layout: unknown block kind "${item.kind}"`);
  }
}

// ─── pagination ─────────────────────────────────────────────────────────────

/**
 * Pack measured blocks into columns and pages.
 *
 * @param items       flow items, in reading order
 * @param options.page          geometry, defaults to PAGE
 * @param options.startPage     first page number (the readings sheet continues
 *                              the propers sheet's numbering)
 * @returns {{ pages, overflow, totalPages }}
 */
export function paginate(items, options = {}) {
  const page = { ...PAGE, ...(options.page || {}) };
  const startPage = options.startPage || 1;
  const widthIn = page.columnWidthIn;
  const blocks = items.map((i) => measureBlock(i, widthIn));

  const columns = [];
  let current = null;
  const overflow = [];

  const columnIndex = () => columns.length - 1;
  const pageOf = (colIdx) => startPage + Math.floor(colIdx / page.columnsPerPage);

  function newColumn() {
    current = { items: [], usedPt: 0 };
    columns.push(current);
    return current;
  }
  newColumn();

  const remaining = () => page.columnHeightPt - current.usedPt;

  // The gap before a block is the larger of the previous block's trailing
  // margin and this block's leading margin — and is dropped entirely at the top
  // of a column, which the stylesheet enforces with
  // `.oh-col > *:first-child { margin-top: 0 }`.
  function gapBefore(block) {
    if (!current.items.length) return 0;
    const prev = current.items[current.items.length - 1];
    return Math.max(prev.spaceAfter || 0, block.spaceBefore || 0);
  }
  function costOf(block, contentPt) {
    return gapBefore(block) + (contentPt != null ? contentPt : block.contentPt);
  }
  function place(entry, contentPt) {
    entry.gapBeforePt = gapBefore(entry);
    current.usedPt += entry.gapBeforePt + contentPt;
    entry.contentPt = contentPt;
    current.items.push(entry);
  }

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    // Rule 2. A heading needs room for itself plus a foothold of whatever it
    // introduces, or it starts the next column with it.
    if (block.keepWithNext) {
      const next = blocks[i + 1];
      const foothold = next
        ? (next.atomic
            ? Math.min(next.contentPt, 2 * (next.runs?.[0]?.linePt || 12))
            : next.headPt + MIN_LINES_EITHER_SIDE * next.linePt)
        : 0;
      if (costOf(block) + foothold > remaining() && current.items.length) newColumn();
      place(block, block.contentPt);
      continue;
    }

    if (block.atomic) {
      // Rule 1. Move it whole. If it cannot fit an empty column at all, place
      // it anyway and report — silently dropping it would be far worse.
      if (costOf(block) > remaining() && current.items.length) newColumn();
      if (block.contentPt > page.columnHeightPt) {
        overflow.push({ kind: block.kind, label: block.label || block.text?.slice(0, 60),
                        heightPt: block.contentPt, columnHeightPt: page.columnHeightPt });
      }
      place(block, block.contentPt);
      continue;
    }

    // Rule 3. A splittable reading.
    let lineCursor = 0;
    let first = true;
    while (lineCursor < block.lines.length) {
      // A resumed part opens with "…continued from page 2"; a part that carries
      // over closes with "continued on page 3 →". BOTH occupy a line, and
      // v0.46.x budgeted only the first of them. The unbudgeted footer notice
      // was about 14.7pt each time, so a readings page with three splits ran
      // roughly three lines past its column and spilled onto a page of its own.
      const noticePt = STYLES.continuation.pt * STYLES.continuation.leading
                     + STYLES.continuation.spaceBefore;
      const headPt = first ? block.headPt : noticePt;
      const linesLeft = block.lines.length - lineCursor;

      // Whether a tail notice is needed depends on how many lines are taken,
      // which depends on whether a tail notice is needed. Resolve it by trying
      // the optimistic case first and reserving the notice only if it splits.
      const roomPt = remaining() - gapBefore(block) - headPt;
      let canTake = Math.floor(roomPt / block.linePt);
      if (canTake < linesLeft) canTake = Math.floor((roomPt - noticePt) / block.linePt);

      // Never strand fewer than two lines here or two lines over there.
      if (canTake < MIN_LINES_EITHER_SIDE ||
          (linesLeft - canTake > 0 && linesLeft - canTake < MIN_LINES_EITHER_SIDE)) {
        if (canTake >= linesLeft) canTake = linesLeft;          // it all fits
        else if (current.items.length) { newColumn(); continue; }
        else canTake = Math.max(MIN_LINES_EITHER_SIDE, canTake); // empty column, take what we can
      }
      const take = Math.min(canTake, linesLeft);
      const isLast = lineCursor + take >= block.lines.length;

      const entry = {
        ...block,
        kind: "lection",
        lines: block.lines.slice(lineCursor, lineCursor + take),
        text: block.lines.slice(lineCursor, lineCursor + take).join(" "),
        isFirstPart: first,
        isLastPart: isLast,
        showHead: first,
        columnIndex: columnIndex(),
      };
      place(entry, headPt + take * block.linePt + (isLast ? 0 : noticePt));
      lineCursor += take;
      first = false;
      if (!isLast) newColumn();
    }
  }

  // ─── Rule 4. Announce the splits, now that page numbers are known. ────────
  const parts = new Map();
  columns.forEach((col, colIdx) => {
    col.items.forEach((entry) => {
      if (entry.kind !== "lection" || (entry.isFirstPart && entry.isLastPart)) return;
      entry.columnIndex = colIdx;
      entry.pageNumber = pageOf(colIdx);
      const key = entry.refLabel;
      if (!parts.has(key)) parts.set(key, []);
      parts.get(key).push(entry);
    });
  });
  for (const group of parts.values()) {
    group.forEach((entry, idx) => {
      const next = group[idx + 1];
      const prev = group[idx - 1];
      if (next) {
        entry.continuesOnPage = next.pageNumber;
        entry.continuesAcrossPage = next.pageNumber !== entry.pageNumber;
      }
      if (prev) {
        entry.continuedFromPage = prev.pageNumber;
        entry.continuedAcrossPage = prev.pageNumber !== entry.pageNumber;
      }
    });
  }

  // ─── Group columns into pages. ───────────────────────────────────────────
  const pages = [];
  for (let c = 0; c < columns.length; c += page.columnsPerPage) {
    pages.push({
      number: startPage + pages.length,
      columns: columns.slice(c, c + page.columnsPerPage).map((col) => ({
        items: col.items,
        usedPt: +col.usedPt.toFixed(2),
        fillRatio: +(col.usedPt / page.columnHeightPt).toFixed(3),
      })),
    });
  }
  // A page always shows both column rules, so pad a lone trailing column.
  const last = pages[pages.length - 1];
  while (last && last.columns.length < page.columnsPerPage) {
    last.columns.push({ items: [], usedPt: 0, fillRatio: 0 });
  }

  return { pages, overflow, totalPages: pages.length, columnHeightPt: page.columnHeightPt };
}

/**
 * Paginate at the most slack the day can afford.
 *
 * Tries the slack ladder from generous to none and keeps the most generous
 * setting that still uses the fewest pages. A day with room gets the full
 * safety margin; a day that only just fits keeps its page rather than paying
 * for insurance it cannot afford.
 *
 * Returns the chosen layout with `slackPt` recording what it settled on.
 */
export function paginateBest(items, options = {}) {
  const base = { ...PAGE, ...(options.page || {}) };
  const chrome = base.chromeBudgetPt ?? base.columnHeightPt;
  const ladder = SLACK_LADDER.filter((v) => v <= (options.maxSlackPt ?? SLACK_PT));

  let best = null;
  for (const slackPt of ladder) {
    const laid = paginate(items, {
      ...options,
      page: { ...base, columnHeightPt: chrome - slackPt },
    });
    // The ladder descends, and a candidate replaces the incumbent only on a
    // STRICTLY lower page count. So the winner is the most generous slack that
    // achieves the fewest pages — ties always go to the earlier, roomier entry.
    if (!best || laid.totalPages < best.totalPages) best = { ...laid, slackPt };
  }
  return best;
}

/**
 * Re-run pagination with heights measured from a rendered DOM.
 *
 * The computed budget is exact for the corpus it was calibrated against, but a
 * font substitution, a zoom level or an unexpected glyph can move it. Feeding
 * real measurements back is what turns a prediction into a guarantee — predict,
 * render, measure, correct.
 *
 * @param measuredHeights  { [blockKey]: heightPt } from the rendered sheet
 */
export function withMeasured(items, measuredHeights, options = {}) {
  const patched = items.map((item, i) => {
    const measured = measuredHeights[item.key ?? i];
    return measured == null ? item : { ...item, measuredHeightPt: measured };
  });
  return paginate(patched, options);
}

/** Continuation wording. Kept here so both renderers say the same thing. */
export function continuationNotice(entry) {
  if (entry.continuesOnPage != null) {
    return entry.continuesAcrossPage
      ? `continued on page ${entry.continuesOnPage}`
      : "continued in the next column";
  }
  return null;
}

export function resumptionNotice(entry) {
  if (entry.continuedFromPage != null) {
    return entry.continuedAcrossPage
      ? `continued from page ${entry.continuedFromPage}`
      : "continued from the previous column";
  }
  return null;
}

// ─── FLOW BUILDERS ──────────────────────────────────────────────────────────
//
// The one place that decides what goes on a bulletin and in what order. Both
// the React component and tools/render_bulletin.mjs consume these, so the proof
// sheet cannot drift from the thing it is a proof of.

/** The propers sheet: commemoration, readings as appointed, the hymns. */
export function buildPropersFlow(day) {
  const flow = [];
  flow.push({ kind: "heading", text: "Commemoration" });
  flow.push({ kind: "commemoration", text: day.saint, secondary: day.secondSaint || null });

  if (day.readings && day.readings.groups.length) {
    flow.push({ kind: "heading", text: "Readings at the Liturgy" });
    for (const group of day.readings.groups) {
      flow.push({
        kind: "slot", label: group.label,
        rows: group.items.map((it) => ({ ref: it.ref, of: it.label })),
      });
    }
    const rule = day.readings.rule;
    flow.push({
      kind: "cite",
      text: `${rule.section}: “${rule.quote}”` +
        (day.readings.order === "menaion-first"
          ? " The Menaion’s readings precede the day’s on a Saturday." : ""),
    });
  }

  const section = (title, hymns) => {
    if (!hymns || !hymns.length) return;
    flow.push({ kind: "heading", text: title });
    for (const h of hymns) {
      if (h.text) flow.push({ kind: "hymn", label: h.label, tone: h.tone, text: h.text });
    }
  };
  section("Troparia", day.troparia);
  section("Kontakia", day.kontakia);
  section("Also Appointed", day.extras);

  return flow;
}

/** The readings supplement: each appointed reading, in full. */
export function buildReadingsFlow(readings) {
  const flow = [];
  for (const r of readings) {
    if (r.error) {
      flow.push({
        kind: "hymn", label: `${r.slotLabel} · ${r.ref}`, tone: null,
        text: `Not printed: ${r.error} The reading has been left out rather than set short.`,
        isError: true,
      });
      continue;
    }
    flow.push({
      kind: "lection",
      refLabel: `${r.slotLabel} · ${r.label} · ${r.itemLabel}`,
      intro: r.intro || null,
      // Verse numbers are wrapped in sentinels rather than left as bare digits.
      // The paginator slices a passage into lines as plain strings, so any
      // structure has to survive inside the string itself; picking the numbers
      // back out by pattern would be guesswork, since scripture contains
      // numerals of its own. VERSE_OPEN/CLOSE are control characters that
      // cannot occur in the text, measure as zero width, and are turned into
      // superscripts at render.
      text: r.verses.map((v) => `${VERSE_OPEN}${v.verse}${VERSE_CLOSE}${v.text}`).join(" "),
      verses: r.verses,
    });
  }
  return flow;
}

// ─── BUDGET RECONCILIATION ──────────────────────────────────────────────────
//
// The measure-and-correct pass is what turns a predicted budget into a verified
// one, but naively applied it OSCILLATES, and the oscillation is visible:
//
//   1. render at the full budget; some column sets 3pt deeper than predicted
//   2. shrink the budget by 3pt, re-paginate, content moves up a column
//   3. measure again — now nothing overflows, so the budget returns to full
//   4. which reproduces step 1, for ever
//
// In Chrome's print preview that reads as text flickering and re-ordering,
// because every pass re-slices where each reading breaks. v0.46.0 shipped
// exactly this.
//
// Two properties fix it, and both are needed:
//   MONOTONIC  the budget only ever shrinks within a settling run, so a pass
//              can never undo the pass before it.
//   CAPPED     settling stops after MAX_LAYOUT_PASSES whatever the drift says,
//              so a pathological measurement cannot spin.
//
// A floor stops a runaway measurement from squeezing the columns to nothing: if
// drift ever demands more than a quarter of the column, something is wrong that
// shrinking will not fix, and the caller is told rather than driven in circles.

export const MAX_LAYOUT_PASSES = 3;
const BUDGET_FLOOR_RATIO = 0.75;
const DRIFT_TOLERANCE_PT = 0.5;   // below this, rounding rather than real drift

/**
 * Decide the next column budget from a measured pass.
 *
 * @param chromeBudgetPt    page height less padding, masthead and footer
 * @param currentBudgetPt   the budget this pass was laid out with
 * @param measuredDriftPt   worst (rendered column height − budget); ≤0 means it fitted
 * @param pass              how many settling passes have already run
 * @returns {{ budgetPt, settled, floored }}
 */
export function reconcileBudget({ chromeBudgetPt, currentBudgetPt, measuredDriftPt, pass }) {
  // SLACK_PT is held back before anything else: the measured chrome height is
  // what the page can physically hold, not what we are willing to fill.
  const target = chromeBudgetPt - SLACK_PT;
  const floor = target * BUDGET_FLOOR_RATIO;
  const current = currentBudgetPt ?? target;

  if (pass >= MAX_LAYOUT_PASSES) return { budgetPt: current, settled: true, floored: false };
  if (measuredDriftPt <= DRIFT_TOLERANCE_PT) {
    return { budgetPt: Math.min(current, target), settled: true, floored: false };
  }

  // Monotonic: never larger than the budget we just used.
  const wanted = current - Math.ceil(measuredDriftPt);
  if (wanted < floor) return { budgetPt: floor, settled: true, floored: true };
  return { budgetPt: wanted, settled: false, floored: false };
}
