// ─── BULLETIN ───────────────────────────────────────────────────────────────
//
// A printable sheet for one liturgical day: commemoration, the readings Fekula
// appoints, and the dismissal hymns — with an optional supplement setting each
// reading out in full so a reader can chant from the sheet without a book.
//
// ONE FORMAT: an 8.5 x 11 two-column broadsheet. The 5.5 x 8.5 half sheet was
// dropped in v0.45.1 — at a type size a reader can actually use in a dim church
// it could not hold the day's propers, and a bulletin that has to drop the
// aposticha doxasticon to fit is not worth the cut.
//
// EVERYTHING IS SIZED IN POINTS, NOT PIXELS. The first cut sized the sheet for
// its on-screen preview (8.5in rendered at 72dpi = 612px) and set type in px
// against that, so what looked reasonable on screen printed at roughly 6pt. The
// sheet is now 8.5in wide on screen too, with body type at 10.5-11pt, so the
// preview is the same physical object as the page that comes out of the tray.
//
// THE PAPER IS WHITE. No parchment tint anywhere on the sheet: a background
// wash costs toner, and in greyscale it lifts the floor under every letter.
// Colour on the sheet is confined to rules, headings and verse numbers, all of
// which stay legible when a parish photocopies it.
//
// SCOPE IS THE DAY, NOT THE SELECTED SERVICE. Matins and the Liturgy have no
// assemblers yet, so a service-order list would be hand-authored rather than
// derived, and a bulletin that hand-authors its ordo is a document the tool
// merely typeset. Deferred until those assemblers exist.
//
// ON SOURCES. Everything printed here traces to Fekula & Williams and the
// encoded Menaion, and the sheet cites the section it followed. Where usage
// elsewhere diverges from the published rubrics, this sheet neither notes nor
// accommodates it: the tool states what the source appoints. Nothing is
// inferred from observed practice.
//
// ON PRINTING SHORT. The readings supplement resolves text in strict mode. If
// any appointed verse is missing from the shipped bible data the reading is
// omitted with a note naming what failed, rather than set one verse shy. That
// failure mode — a reading that looks complete and is not — is the one this
// codebase spent three releases eliminating, and it is far worse on paper.

import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { parseRefString, spanLabel } from "../lib/scripture-ref.js";
import { spansToVerses, readingIntro } from "../lib/scripture-text.js";
import { readingsForDay, readingsInOrder } from "../lib/readings.js";
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
          ...reading,
          verses,
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

// ─── sheet pieces ───────────────────────────────────────────────────────────

function Masthead({ date, layer, tone, rank }) {
  return (
    <div className="oh-masthead">
      <div className="oh-eyebrow">{MASTHEAD}</div>
      <div className="oh-date">{date}</div>
      {layer && <div className="oh-layer">{layer}</div>}
      {(tone || rank) && (
        <div className="oh-chip">{[tone, rank].filter(Boolean).join(" · ")}</div>
      )}
    </div>
  );
}

function Heading({ children }) {
  return <div className="oh-h">{children}</div>;
}

function Hymn({ label, tone, text }) {
  if (!text) return null;
  return (
    <div className="oh-hymn">
      {label && (
        <div className="oh-hymn-label">
          {label}{tone ? <em>, Tone {tone}</em> : null}
        </div>
      )}
      <p className="oh-hymn-text">
        {String(text).split(/(\*+)/).map((piece, i) =>
          /^\*+$/.test(piece)
            ? <span key={i} className="oh-star">{piece}</span>
            : <span key={i}>{piece}</span>)}
      </p>
    </div>
  );
}

function ReadingsBlock({ resolved }) {
  if (!resolved || !resolved.groups.length) return null;
  return (
    <>
      <Heading>Readings at the Liturgy</Heading>
      {resolved.groups.map((group) => (
        <div key={group.slot} className="oh-slot">
          <div className="oh-slot-label">{group.label}</div>
          {group.items.map((item, i) => (
            <div key={i} className="oh-reading-row">
              <span className="oh-reading-of">{item.label}</span>
              <span className="oh-reading-ref">{item.ref}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="oh-cite">
        {resolved.rule.section}: “{resolved.rule.quote}”
        {resolved.order === "menaion-first" &&
          " The Menaion's readings precede the day's on a Saturday."}
      </div>
    </>
  );
}

function Lection({ reading }) {
  if (reading.error) {
    return (
      <div className="oh-lection">
        <div className="oh-lection-ref oh-err">{reading.slotLabel} · {reading.ref}</div>
        <p className="oh-lection-intro oh-err">
          Not printed: {reading.error} The reading has been left out rather than set short.
        </p>
      </div>
    );
  }
  return (
    <div className="oh-lection">
      <div className="oh-lection-ref">
        {reading.slotLabel} · {reading.label} · {reading.itemLabel}
      </div>
      {reading.intro && <p className="oh-lection-intro">{reading.intro}</p>}
      <p className="oh-lection-body">
        {reading.verses.map((v) => (
          <span key={`${v.chapter}-${v.verse}`}>
            {v.startsChapter && <span className="oh-star">¶ </span>}
            <sup className="oh-vnum">{v.verse}</sup>
            {v.text}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

// ─── the sheets ─────────────────────────────────────────────────────────────

function PropersSheet({ day }) {
  return (
    <div className="oh-sheet">
      <Masthead date={day.dateLabel} layer={day.layer} tone={day.toneLabel} rank={day.rankLabel} />
      <div className="oh-twocol">
        <Heading>Commemoration</Heading>
        <p className="oh-comm">{day.saint}</p>
        {day.secondSaint && <p className="oh-comm2">{day.secondSaint}</p>}

        <ReadingsBlock resolved={day.readings} />

        {day.troparia.length > 0 && <Heading>Troparia</Heading>}
        {day.troparia.map((h, i) => <Hymn key={i} {...h} />)}

        {day.kontakia.length > 0 && <Heading>Kontakia</Heading>}
        {day.kontakia.map((h, i) => <Hymn key={i} {...h} />)}

        {day.extras.length > 0 && <Heading>Also Appointed</Heading>}
        {day.extras.map((h, i) => <Hymn key={i} {...h} />)}
      </div>
      <div className="oh-foot">
        <span>Assembled per Fekula &amp; Williams, The Order of Divine Services, 2nd ed. rev.</span>
        <span>{day.version}</span>
      </div>
    </div>
  );
}

function ReadingsSheet({ day, readings }) {
  return (
    <div className="oh-sheet">
      <Masthead date="The Readings" layer={`${day.dateLabel} · ${day.layer}`} />
      <div className="oh-twocol">
        {readings.map((r, i) => <Lection key={i} reading={r} />)}
      </div>
      <div className="oh-foot">
        <span>Brenton Septuagint (OT) · King James Version 2006 (NT), public domain</span>
        <span>{day.version}</span>
      </div>
    </div>
  );
}

// ─── stylesheet ─────────────────────────────────────────────────────────────
// Sizes are in points throughout. The sheet is 8.5in wide on screen as well as
// on paper, so the preview and the printed page are the same physical object
// and nothing has to be mentally rescaled.
function SheetStyles() {
  return <style>{BULLETIN_CSS}</style>;
}

// ─── the modal ──────────────────────────────────────────────────────────────

export default function Bulletin({ day, onClose }) {
  const [withReadings, setWithReadings] = useState(false);

  const flatReadings = useMemo(
    () => readingsInOrder(day.readings).map((r) => ({
      ref: r.ref, slotLabel: r.slotLabel, itemLabel: r.label,
    })),
    [day.readings],
  );

  const { loading, resolved } = useReadingTexts(flatReadings, withReadings);

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

  return createPortal(
    <div
      className="oh-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <SheetStyles />

      <div className="oh-no-print"
           style={{ width: "8.5in", maxWidth: "100%", margin: "0 auto 20px",
                    background: "#EDE5D0", border: "1px solid #D4C49A", borderRadius: "3px",
                    padding: "14px 18px", fontFamily: SERIF, color: "#1C1008",
                    boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
          <strong style={{ fontSize: "1rem" }}>Bulletin</strong>
          <span style={{ fontSize: "0.8rem", color: "#6B5A3A" }}>
            {day.dateLabel} · 8.5 × 11 in
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
          White stock, two columns, body type at 10.5–11pt. The preview below is
          shown at full size, so what you see is the sheet that prints.
          {withReadings && " Each reading is set continuously, as it is chanted; a ¶ marks a chapter change."}
        </p>
      </div>

      <PropersSheet day={day} />
      {withReadings && resolved && <ReadingsSheet day={day} readings={resolved} />}
    </div>,
    document.body,
  );
}
