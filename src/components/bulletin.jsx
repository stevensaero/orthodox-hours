// ─── BULLETIN ───────────────────────────────────────────────────────────────
//
// Full write-up of the layout budget, the print path and the verification loop:
// bulletin_layout_spec.md in the repo root.
//
// A printable sheet for one liturgical day: commemoration, the readings Fekula
// appoints, and the dismissal hymns — with an optional supplement setting each
// reading out in full so a reader can chant from the sheet without a book.
// 8.5 x 11, two columns, white stock.
//
// THE BREAKS ARE COMPUTED, NOT LEFT TO CSS. src/lib/bulletin-layout.js decides
// what goes in each column of each page, from real Georgia metrics. CSS
// `column-count` broke wherever it landed — mid-troparion, mid-verse, across a
// page turn with no notice — and could not be reasoned about before it
// rendered, so there was no way to answer "will this day fit" for any day but
// the one in front of us.
//
// AND THEN VERIFIED. On mount the component measures the real masthead, footer
// and column width from the rendered sheet and, if they differ from the baked
// geometry, re-paginates against the measured values. A computed budget is a
// prediction; measuring it back is what makes it a guarantee. It also catches
// what the metrics cannot know about — a font substitution, a browser zoom, an
// unexpected glyph.
//
// ON SOURCES. Everything printed traces to Fekula & Williams and the encoded
// Menaion, and the sheet cites the section it followed. Where usage elsewhere
// diverges from the published rubrics, this sheet neither notes nor
// accommodates it. Nothing is inferred from observed practice.
//
// ON PRINTING SHORT. The readings supplement resolves text in strict mode. A
// reading missing any appointed verse is omitted with a notice naming the
// failure, never set one verse shy.

import { useState, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { parseRefString, spanLabel } from "../lib/scripture-ref.js";
import { spansToVerses, readingIntro } from "../lib/scripture-text.js";
import { VERSE_OPEN, VERSE_CLOSE } from "../lib/bulletin-metrics.js";
import { readingsInOrder } from "../lib/readings.js";
import {
  paginateBest, buildPropersFlow, buildReadingsFlow, PAGE,
  continuationNotice, resumptionNotice, reconcileBudget, MAX_LAYOUT_PASSES,
} from "../lib/bulletin-layout.js";
import { BULLETIN_CSS } from "../lib/bulletin-css.js";

const MASTHEAD = "Orthodox Daily Hours · A Liturgical Study Tool";
const SERIF = "Georgia, 'Times New Roman', serif";

// ─── scripture loading ──────────────────────────────────────────────────────
const bookCache = new Map();
const BASE = (import.meta.env && import.meta.env.BASE_URL) || "/";

async function loadBook(bookId) {
  if (bookCache.has(bookId)) return bookCache.get(bookId);
  const promise = fetch(`${BASE}bible/${bookId.toLowerCase()}.json`)
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);
  bookCache.set(bookId, promise);
  return promise;
}

/** Resolve readings to full text. Each entry is { verses } or { error } — never partial. */
function useReadingTexts(readings, enabled) {
  const [state, setState] = useState({ loading: false, resolved: null });
  const key = enabled ? readings.map((r) => r.ref).join("|") : "";

  useEffect(() => {
    if (!enabled || !readings.length) { setState({ loading: false, resolved: null }); return; }
    let cancelled = false;
    setState({ loading: true, resolved: null });

    (async () => {
      const out = [];
      for (const reading of readings) {
        const spans = parseRefString(reading.ref, { strict: true });
        if (!spans) {
          out.push({ ...reading, error: `“${reading.ref}” could not be resolved to a passage.` });
          continue;
        }
        const books = {};
        for (const span of spans) books[span.book] = await loadBook(span.book);
        const { verses, missing } = spansToVerses(spans, books);

        if (missing.length) {
          const first = missing[0];
          out.push({
            ...reading,
            error:
              `${missing.length} part${missing.length === 1 ? "" : "s"} of ` +
              `${reading.ref} are not in the scripture data — ` +
              `${first.book} ${first.chapter ?? "?"}: ${first.reason}.`,
          });
          continue;
        }
        out.push({
          ...reading, verses,
          label: spans.map(spanLabel).join(" · "),
          intro: readingIntro(spans[0].book, spans[0].bookName),
        });
      }
      if (!cancelled) setState({ loading: false, resolved: out });
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  return state;
}

// ─── blocks ─────────────────────────────────────────────────────────────────

// Verse numbers come back out of their sentinels as small gold superscripts —
// present for a reader who needs to find a verse, and out of the way of one
// who is simply reading it aloud.
const VERSE_SPLIT = new RegExp(`${VERSE_OPEN}(\\d+)${VERSE_CLOSE}`);
const lectionBody = (text) => String(text).split(VERSE_SPLIT).map((piece, i) =>
  i % 2 === 1
    ? <sup key={i} className="oh-vnum">{piece}</sup>
    : <span key={i}>{piece}</span>);

const marks = (text) => String(text).split(/(\*+)/).map((piece, i) =>
  /^\*+$/.test(piece)
    ? <span key={i} className="oh-star">{piece}</span>
    : <span key={i}>{piece}</span>);

function Block({ block }) {
  switch (block.kind) {
    case "heading":
      return <div className="oh-h">{block.text}</div>;

    case "commemoration":
      return (
        <>
          <p className="oh-comm">{block.text}</p>
          {block.secondary && <p className="oh-comm2">{block.secondary}</p>}
        </>
      );

    case "slot":
      return (
        <div className="oh-slot">
          <div className="oh-slot-label">{block.label}</div>
          {block.rows.map((r, i) => (
            <div key={i} className="oh-reading-row">
              <span className="oh-reading-ref">{r.ref}</span>
              <span className="oh-reading-of">{r.of}</span>
            </div>
          ))}
        </div>
      );

    case "cite":
      return <div className="oh-cite">{block.text}</div>;

    case "hymn":
      return (
        <div className={"oh-hymn" + (block.isError ? " oh-err" : "")}>
          {block.label && (
            <div className="oh-hymn-label">
              {block.label}{block.tone ? <em>, Tone {block.tone}</em> : null}
            </div>
          )}
          <p className="oh-hymn-text">{marks(block.text)}</p>
        </div>
      );

    case "lection": {
      const resume = resumptionNotice(block);
      const carry = continuationNotice(block);
      return (
        <div className="oh-lection">
          {block.showHead && (
            <>
              <div className="oh-lection-ref">{block.refLabel}</div>
              {block.intro && <p className="oh-lection-intro">{block.intro}</p>}
            </>
          )}
          {resume && <p className="oh-resumes">{block.refLabel} — {resume}</p>}
          <p className="oh-lection-body">{lectionBody(block.text)}</p>
          {carry && <p className="oh-continues">{carry} →</p>}
        </div>
      );
    }

    default:
      return null;
  }
}

function Masthead({ eyebrow, title, sub, chip }) {
  return (
    <div className="oh-masthead">
      <div className="oh-eyebrow">{eyebrow}</div>
      <div className="oh-date">{title}</div>
      {sub && <div className="oh-layer">{sub}</div>}
      {chip && <div className="oh-chip">{chip}</div>}
    </div>
  );
}

function Sheet({ page, totalPages, masthead, footerLeft, sheetRef }) {
  return (
    <div className="oh-sheet" ref={sheetRef}>
      <Masthead {...masthead} />
      <div className="oh-twocol">
        {page.columns.map((col, i) => (
          <div className="oh-col" key={i}>
            {col.items.map((block, j) => <Block key={j} block={block} />)}
          </div>
        ))}
      </div>
      <div className="oh-foot">
        <span>{footerLeft}</span>
        <span>Page {page.number} of {totalPages}</span>
      </div>
    </div>
  );
}

// ─── the modal ──────────────────────────────────────────────────────────────

export default function Bulletin({ day, onClose }) {
  const [withReadings, setWithReadings] = useState(false);
  const [budget, setBudget] = useState(null);     // measured, once rendered
  const [pass, setPass] = useState(0);
  const [settled, setSettled] = useState(false);
  const firstSheet = useRef(null);

  const flatReadings = useMemo(
    () => readingsInOrder(day.readings).map((r) => ({
      ref: r.ref, slotLabel: r.slotLabel, itemLabel: r.label,
    })),
    [day.readings],
  );
  const { loading, resolved } = useReadingTexts(flatReadings, withReadings);

  const page = budget || PAGE;

  const propers = useMemo(
    () => paginateBest(buildPropersFlow(day), { page }),
    [day, page],
  );
  const readingPages = useMemo(() => {
    if (!withReadings || !resolved) return { pages: [], totalPages: 0, overflow: [] };
    return paginateBest(buildReadingsFlow(resolved),
                        { page, startPage: propers.totalPages + 1 });
  }, [withReadings, resolved, page, propers.totalPages]);

  const totalPages = propers.totalPages + readingPages.totalPages;
  const overflow = [...propers.overflow, ...readingPages.overflow];

  // ── the verification pass ────────────────────────────────────────────────
  // Measure the rendered sheet and re-break against what actually happened. The
  // baked geometry came from one browser on one machine; a font substitution, a
  // zoom level or a different platform moves it, and a budget nobody checks is
  // a confident-sounding guess.
  //
  // SETTLING IS BOUNDED AND ONE-WAY, which v0.46.0's version was not. It
  // shrank the budget on drift and then grew it back once the drift went away,
  // reproducing the drift, for ever — visible in Chrome's print preview as text
  // flickering and re-ordering, because each pass re-sliced where the readings
  // broke. reconcileBudget() only ever shrinks and always terminates; see its
  // header. useLayoutEffect runs the passes BEFORE paint, so settling is not
  // something the reader watches happen.
  const contentKey = `${day.dateLabel}|${withReadings}|${resolved ? resolved.length : 0}`;
  useEffect(() => { setBudget(null); setPass(0); setSettled(false); }, [contentKey]);

  useLayoutEffect(() => {
    if (settled) return;
    const px2pt = (px) => px * 0.75;
    const sheet = firstSheet.current;
    const mast = sheet && sheet.querySelector(".oh-masthead");
    const foot = sheet && sheet.querySelector(".oh-foot");
    const col = sheet && sheet.querySelector(".oh-col");

    // NOTHING TO MEASURE YET — and this must not become a dead end. The
    // previous version simply returned here, which left `pass` unchanged and
    // `settled` false while none of the dependencies changed, so the effect
    // never ran again and the layout stayed "settling" for ever. Under
    // StrictMode, whose simulated unmount detaches refs mid-mount, that is a
    // live path rather than a theoretical one. Schedule another attempt
    // instead, and give up measuring rather than hang if it never arrives.
    if (!sheet || !mast || !foot || !col) {
      if (pass >= MAX_LAYOUT_PASSES) { setSettled(true); return; }
      const id = requestAnimationFrame(() => setPass((p) => p + 1));
      return () => cancelAnimationFrame(id);
    }

    const style = getComputedStyle(sheet);
    const chromeBudgetPt = PAGE.pageHeightPt
      - px2pt(parseFloat(style.paddingTop))
      - px2pt(parseFloat(style.paddingBottom))
      - px2pt(mast.getBoundingClientRect().height
              + parseFloat(getComputedStyle(mast).marginBottom))
      - px2pt(foot.getBoundingClientRect().height
              + parseFloat(getComputedStyle(foot).marginTop));
    const columnWidthIn = col.getBoundingClientRect().width / 96;

    const currentBudgetPt = budget ? budget.columnHeightPt : chromeBudgetPt;
    // Drift is measured against the budget the columns were actually laid out
    // with, which paginateBest may have reduced by its chosen slack.
    let drift = 0;
    for (const el of document.querySelectorAll(".oh-col")) {
      const d = px2pt(el.getBoundingClientRect().height) - currentBudgetPt;
      if (d > drift) drift = d;
    }

    const next = reconcileBudget({
      chromeBudgetPt, currentBudgetPt, measuredDriftPt: drift, pass,
    });
    const moved = !budget
      || Math.abs(next.budgetPt - budget.columnHeightPt) > 0.5
      || Math.abs(columnWidthIn - budget.columnWidthIn) > 0.01;
    if (moved) {
      setBudget({ ...PAGE, chromeBudgetPt, columnHeightPt: next.budgetPt, columnWidthIn });
    }
    setPass((p) => p + 1);
    if (next.settled) setSettled(true);
  }, [settled, pass, budget, contentKey]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const control = {
    background: "transparent", border: "1px solid #8B6914", color: "#8B6914",
    borderRadius: "3px", padding: "5px 14px", fontSize: "0.78rem",
    letterSpacing: "0.08em", cursor: "pointer", fontFamily: SERIF,
  };
  const primary = { ...control, background: "#8B6914", color: "#FAF6EE" };

  const propersMast = {
    eyebrow: MASTHEAD, title: day.dateLabel, sub: day.layer,
    chip: [day.toneLabel, day.rankLabel].filter(Boolean).join(" · "),
  };
  const readingsMast = {
    eyebrow: MASTHEAD, title: "The Readings",
    sub: `${day.dateLabel} · ${day.layer}`, chip: null,
  };

  return createPortal(
    <div className="oh-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <style>{BULLETIN_CSS}</style>

      <div className="oh-no-print"
           style={{ width: "8.5in", maxWidth: "100%", margin: "0 auto 20px",
                    background: "#EDE5D0", border: "1px solid #D4C49A", borderRadius: "3px",
                    padding: "14px 18px", fontFamily: SERIF, color: "#1C1008",
                    boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
          <strong style={{ fontSize: "1rem" }}>Bulletin</strong>
          <span style={{ fontSize: "0.8rem", color: "#6B5A3A" }}>
            {day.dateLabel} · 8.5 × 11 in · {totalPages} page{totalPages === 1 ? "" : "s"}
            {!settled && " · checking the fit…"}
          </span>
          <button onClick={onClose} style={{ ...control, marginLeft: "auto" }}>Close</button>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px",
                      alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "6px",
                          fontSize: "0.85rem", cursor: "pointer" }}>
            <input type="checkbox" checked={withReadings}
                   onChange={(e) => setWithReadings(e.target.checked)} />
            Print the readings in full
          </label>
          {/* Never gated on `settled`. The layout is valid at every pass — the
              settling loop only refines the budget — so blocking the primary
              action on a background refinement buys nothing and, when that
              loop stalled, hid the button entirely. Only a genuine
              data-not-ready state disables it. */}
          <button style={{ ...primary, marginLeft: "auto" }}
                  onClick={() => window.print()}
                  disabled={withReadings && loading}>
            {withReadings && loading ? "Loading readings…" : "Print"}
          </button>
        </div>

        <p style={{ fontSize: "0.76rem", color: "#6B5A3A", margin: "10px 0 0", lineHeight: 1.5 }}>
          Columns and page breaks are computed, so a hymn is never split and any
          reading that carries over says where it goes. The preview is full size:
          what you see is the sheet that prints.
          {withReadings && " Readings are set continuously, as they are chanted, with verse numbers kept small and out of the way."}
        </p>

        {overflow.length > 0 && (
          <p style={{ fontSize: "0.78rem", color: "#B43C1E", margin: "8px 0 0", lineHeight: 1.5 }}>
            {overflow.length} item{overflow.length === 1 ? " is" : "s are"} taller
            than a single column and will run past it:{" "}
            {overflow.map((o) => o.label).join("; ")}. Nothing has been dropped —
            the sheet will simply be long there.
          </p>
        )}
      </div>

      {propers.pages.map((p, i) => (
        <Sheet key={`p${i}`} page={p} totalPages={totalPages} masthead={propersMast}
               sheetRef={i === 0 ? firstSheet : null}
               footerLeft="Assembled per Fekula & Williams, The Order of Divine Services, 2nd ed. rev." />
      ))}
      {readingPages.pages.map((p, i) => (
        <Sheet key={`r${i}`} page={p} totalPages={totalPages} masthead={readingsMast}
               footerLeft="Brenton Septuagint (OT) · King James Version 2006 (NT), public domain" />
      ))}
    </div>,
    document.body,
  );
}
