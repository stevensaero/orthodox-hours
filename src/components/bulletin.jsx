// ─── BULLETIN ───────────────────────────────────────────────────────────────
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

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { parseRefString, spanLabel } from "../lib/scripture-ref.js";
import { spansToVerses, readingIntro } from "../lib/scripture-text.js";
import { readingsInOrder } from "../lib/readings.js";
import {
  paginate, buildPropersFlow, buildReadingsFlow, PAGE,
  continuationNotice, resumptionNotice,
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
          <p className="oh-lection-body">{block.text}</p>
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
  const [geometry, setGeometry] = useState(null);   // measured, once rendered
  const firstSheet = useRef(null);

  const flatReadings = useMemo(
    () => readingsInOrder(day.readings).map((r) => ({
      ref: r.ref, slotLabel: r.slotLabel, itemLabel: r.label,
    })),
    [day.readings],
  );
  const { loading, resolved } = useReadingTexts(flatReadings, withReadings);

  const page = geometry || PAGE;

  const propers = useMemo(
    () => paginate(buildPropersFlow(day), { page }),
    [day, page],
  );
  const readingPages = useMemo(() => {
    if (!withReadings || !resolved) return { pages: [], totalPages: 0, overflow: [] };
    return paginate(buildReadingsFlow(resolved),
                    { page, startPage: propers.totalPages + 1 });
  }, [withReadings, resolved, page, propers.totalPages]);

  const totalPages = propers.totalPages + readingPages.totalPages;
  const overflow = [...propers.overflow, ...readingPages.overflow];

  // ── the verification pass ────────────────────────────────────────────────
  // Measure the real chrome once the first sheet exists. The baked geometry
  // came from a browser on one machine; a font substitution, a zoom level or a
  // different platform moves it, and a budget nobody checks is just a
  // confident-sounding guess.
  const measure = useCallback(() => {
    const sheet = firstSheet.current;
    if (!sheet) return;
    const px2pt = (px) => px * 0.75;
    const mast = sheet.querySelector(".oh-masthead");
    const foot = sheet.querySelector(".oh-foot");
    const col = sheet.querySelector(".oh-col");
    if (!mast || !foot || !col) return;

    const style = getComputedStyle(sheet);
    const padTop = px2pt(parseFloat(style.paddingTop));
    const padBottom = px2pt(parseFloat(style.paddingBottom));
    const mastPt = px2pt(mast.getBoundingClientRect().height
      + parseFloat(getComputedStyle(mast).marginBottom));
    const footPt = px2pt(foot.getBoundingClientRect().height
      + parseFloat(getComputedStyle(foot).marginTop));
    const columnHeightPt = PAGE.pageHeightPt - padTop - padBottom - mastPt - footPt;
    const columnWidthIn = col.getBoundingClientRect().width / 96;

    // Second half of the loop: did any column actually render taller than the
    // budget allowed? The chrome measurement above catches a different page
    // shape; this catches the type itself setting deeper than predicted, which
    // is what a font substitution or an unusual glyph would do. Shrink the
    // budget by the worst drift and let the next pass re-break.
    let worstDrift = 0;
    for (const el of document.querySelectorAll(".oh-col")) {
      const drift = px2pt(el.getBoundingClientRect().height) - columnHeightPt;
      if (drift > worstDrift) worstDrift = drift;
    }
    const budget = columnHeightPt - Math.ceil(worstDrift);

    const drifted = !geometry
      || Math.abs(budget - geometry.columnHeightPt) > 1
      || Math.abs(columnWidthIn - geometry.columnWidthIn) > 0.01;
    if (drifted) {
      setGeometry({ ...PAGE, columnHeightPt: budget, columnWidthIn,
                    mastheadPt: mastPt, footerPt: footPt });
    }
  }, [geometry]);

  useEffect(() => { measure(); }, [measure, withReadings, resolved]);

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
          {withReadings && " Readings are set continuously, as they are chanted; a ¶ marks a chapter change."}
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
