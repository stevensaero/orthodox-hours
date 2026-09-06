// ─── BULLETIN ───────────────────────────────────────────────────────────────
//
// A printable sheet for one liturgical day: commemoration, the readings Fekula
// appoints, and the dismissal hymns — with an optional supplement setting each
// reading out in full so a reader can chant from the sheet without a book.
//
// TWO FORMATS
//   A  half sheet, 5.5 x 8.5, one side, two to a letter page
//   C  broadsheet, 8.5 x 11, two columns, everything the day holds
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
// any appointed verse is missing from the shipped bible data the supplement
// refuses to render and says which reading failed, rather than printing a
// shorter passage than the one appointed. That failure mode — a reading that
// looks complete and is not — is the one this codebase has spent three
// releases eliminating, and it is far worse on paper than on screen.

import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { parseRefString, spanLabel } from "../lib/scripture-ref.js";
import { spansToVerses, readingIntro } from "../lib/scripture-text.js";
import { readingsForDay, readingsInOrder } from "../lib/readings.js";

const MASTHEAD = "Orthodox Daily Hours · A Liturgical Study Tool";

const C = {
  paper: "#FAF6EE",
  ink: "#1C1008",
  inkMid: "#3C2E14",
  inkLight: "#6B5A3A",
  gold: "#8B6914",
  rule: "#D4C49A",
  error: "#B43C1E",
};

const SERIF = "Georgia, 'Times New Roman', serif";

// ─── scripture loading ──────────────────────────────────────────────────────
// Same store the Scripture viewer reads, fetched per book and memoised for the
// life of the page.
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

/**
 * Resolve every reading to full text. Returns one entry per reading, each
 * either { text } or { error } — never a partial passage.
 */
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
    <div style={{ textAlign: "center", borderBottom: `2px solid ${C.gold}`,
                  paddingBottom: "9px", marginBottom: "11px" }}>
      <div style={{ fontSize: "7.5px", letterSpacing: "0.2em", textTransform: "uppercase",
                    color: C.inkLight }}>{MASTHEAD}</div>
      <div style={{ fontSize: "15px", margin: "5px 0 2px", color: C.ink }}>{date}</div>
      {layer && <div style={{ fontSize: "9.5px", color: C.inkMid, fontStyle: "italic" }}>{layer}</div>}
      {(tone || rank) && (
        <div style={{ display: "inline-block", marginTop: "6px", padding: "1.5px 8px",
                      border: `1px solid ${C.gold}`, borderRadius: "2px", fontSize: "8px",
                      letterSpacing: "0.14em", textTransform: "uppercase", color: C.gold }}>
          {[tone, rank].filter(Boolean).join(" · ")}
        </div>
      )}
    </div>
  );
}

function Heading({ children }) {
  return (
    <div style={{ fontSize: "8px", letterSpacing: "0.16em", textTransform: "uppercase",
                  color: C.gold, margin: "13px 0 5px", borderBottom: `1px solid ${C.rule}`,
                  paddingBottom: "3px" }}>{children}</div>
  );
}

function Hymn({ label, tone, text }) {
  if (!text) return null;
  return (
    <div style={{ margin: "0 0 8px" }}>
      {label && (
        <div style={{ fontSize: "8px", color: C.inkLight, letterSpacing: "0.06em" }}>
          {label}
          {tone ? <span style={{ color: C.inkMid, fontStyle: "italic" }}>, Tone {tone}</span> : null}
        </div>
      )}
      <p style={{ fontSize: "8.6px", lineHeight: 1.42, margin: "1px 0 0",
                  textAlign: "justify", hyphens: "auto" }}>
        {String(text).split(/(\*+)/).map((piece, i) =>
          /^\*+$/.test(piece)
            ? <span key={i} style={{ color: C.gold }}>{piece}</span>
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
        <div key={group.slot} style={{ marginBottom: "5px" }}>
          <div style={{ fontSize: "7.5px", letterSpacing: "0.12em", textTransform: "uppercase",
                        color: C.gold, margin: "5px 0 2px" }}>{group.label}</div>
          {group.items.map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr",
                                  gap: "2px 10px", fontSize: "9px", lineHeight: 1.45 }}>
              <span style={{ color: C.inkLight, whiteSpace: "nowrap" }}>{item.label}</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>{item.ref}</span>
            </div>
          ))}
        </div>
      ))}
      <div style={{ fontSize: "7px", color: C.inkLight, fontStyle: "italic",
                    borderLeft: `1px solid ${C.rule}`, paddingLeft: "7px", marginTop: "6px" }}>
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
      <div style={{ margin: "0 0 12px" }}>
        <div style={{ fontSize: "7.5px", letterSpacing: "0.1em", textTransform: "uppercase",
                      color: C.error, margin: "0 0 2px" }}>{reading.slotLabel} · {reading.ref}</div>
        <p style={{ fontSize: "8.6px", lineHeight: 1.5, margin: 0, color: C.error, fontStyle: "italic" }}>
          Not printed: {reading.error} The reading has been left out rather than
          set short.
        </p>
      </div>
    );
  }
  return (
    <div style={{ margin: "0 0 12px" }}>
      <div style={{ fontSize: "7.5px", letterSpacing: "0.1em", textTransform: "uppercase",
                    color: C.gold, margin: "0 0 2px" }}>
        {reading.slotLabel} · {reading.label} · {reading.itemLabel}
      </div>
      {reading.intro && (
        <p style={{ fontSize: "8px", fontStyle: "italic", color: C.inkLight, margin: "0 0 3px" }}>
          {reading.intro}
        </p>
      )}
      <p style={{ fontSize: "9.4px", lineHeight: 1.52, margin: 0,
                  textAlign: "justify", hyphens: "auto" }}>
        {reading.verses.map((v) => (
          <span key={`${v.chapter}-${v.verse}`}>
            {v.startsChapter && <span style={{ color: C.gold }}>¶ </span>}
            <sup style={{ fontSize: "6.2px", color: C.gold, verticalAlign: "super",
                          marginRight: "1.5px" }}>{v.verse}</sup>
            {v.text}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

// ─── the sheets ─────────────────────────────────────────────────────────────

function PropersSheet({ day, format }) {
  const wide = format === "C";
  const body = (
    <>
      <Heading>Commemoration</Heading>
      <p style={{ fontSize: "10.5px", lineHeight: 1.4, margin: "0 0 3px" }}>{day.saint}</p>
      {day.secondSaint && (
        <p style={{ fontSize: "9px", color: C.inkLight, fontStyle: "italic", margin: 0 }}>
          {day.secondSaint}
        </p>
      )}

      <ReadingsBlock resolved={day.readings} />

      {day.troparia.length > 0 && <Heading>Troparia</Heading>}
      {day.troparia.map((h, i) => <Hymn key={i} {...h} />)}

      {day.kontakia.length > 0 && <Heading>Kontakia</Heading>}
      {day.kontakia.map((h, i) => <Hymn key={i} {...h} />)}

      {wide && day.extras.length > 0 && <Heading>Also Appointed</Heading>}
      {wide && day.extras.map((h, i) => <Hymn key={i} {...h} />)}
    </>
  );

  return (
    <div className={`oh-sheet oh-sheet-${format.toLowerCase()}`}>
      <Masthead date={day.dateLabel} layer={day.layer} tone={day.toneLabel} rank={day.rankLabel} />
      {wide ? <div className="oh-twocol">{body}</div> : body}
      <div className="oh-foot">
        <span>Assembled per Fekula &amp; Williams, The Order of Divine Services, 2nd ed. rev.</span>
        <span>{day.version}</span>
      </div>
    </div>
  );
}

function ReadingsSheet({ day, readings, format, index, total }) {
  return (
    <div className={`oh-sheet oh-sheet-${format.toLowerCase()}`}>
      <Masthead date="The Readings" layer={`${day.dateLabel} · ${day.layer}`} />
      {readings.map((r, i) => <Lection key={i} reading={r} />)}
      <div className="oh-foot">
        <span>Brenton Septuagint (OT) · King James Version 2006 (NT), public domain</span>
        <span>{total > 1 ? `${index} of ${total}` : day.version}</span>
      </div>
    </div>
  );
}

// ─── print stylesheet ───────────────────────────────────────────────────────
// Follows the pattern already established by scripture.jsx's PrintStyles: a
// `.oh-no-print` class for chrome, and @page sized to the chosen format so the
// sheet prints at real inches rather than at whatever the screen preview used.
function PrintStyles({ format }) {
  const page = format === "C" ? "8.5in 11in" : "5.5in 8.5in";
  const pad = format === "C" ? "0.6in 0.7in" : "0.45in 0.5in";
  return (
    <style>{`
      .oh-sheet {
        background: ${C.paper};
        color: ${C.ink};
        font-family: ${SERIF};
        position: relative;
        box-sizing: border-box;
        box-shadow: 0 10px 30px rgba(0,0,0,0.28);
        margin: 0 auto 24px;
      }
      .oh-sheet-a { width: 396px; min-height: 612px; padding: 26px 30px 34px; }
      .oh-sheet-c { width: 612px; min-height: 792px; padding: 34px 40px 42px; }
      .oh-twocol { column-count: 2; column-gap: 26px; column-rule: 1px solid ${C.rule}; }
      .oh-foot {
        border-top: 1px solid ${C.rule};
        margin-top: 14px; padding-top: 5px;
        font-size: 6.5px; color: ${C.inkLight};
        display: flex; justify-content: space-between; gap: 12px;
      }
      @media print {
        body > *:not(.oh-print-root) { display: none !important; }
        .oh-print-root, .oh-print-root * { visibility: visible; }
        .oh-print-root {
          position: absolute; inset: 0; background: #fff;
          padding: 0; margin: 0; overflow: visible;
        }
        .oh-no-print { display: none !important; }
        .oh-sheet {
          box-shadow: none; margin: 0;
          width: ${format === "C" ? "8.5in" : "5.5in"};
          min-height: ${format === "C" ? "11in" : "8.5in"};
          padding: ${pad};
          page-break-after: always; break-after: page;
        }
        .oh-sheet:last-child { page-break-after: auto; break-after: auto; }
        @page { size: ${page}; margin: 0; }
      }
    `}</style>
  );
}

// ─── the modal ──────────────────────────────────────────────────────────────

export default function Bulletin({ day, onClose }) {
  const [format, setFormat] = useState("A");
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

  // One reading per sheet on the half sheet, all of them on the broadsheet:
  // a Gospel set continuously does not share 5.5 x 8.5 with an Epistle.
  const readingSheets = [];
  if (withReadings && resolved) {
    if (format === "A") {
      for (const r of resolved) readingSheets.push([r]);
    } else {
      readingSheets.push(resolved);
    }
  }

  const control = {
    background: "transparent", border: `1px solid ${C.gold}`, color: C.gold,
    borderRadius: "3px", padding: "5px 14px", fontSize: "0.78rem",
    letterSpacing: "0.08em", cursor: "pointer", fontFamily: SERIF,
  };
  const active = { ...control, background: C.gold, color: C.paper };

  return createPortal(
    <div
      className="oh-print-root"
      style={{ position: "fixed", inset: 0, background: "rgba(28,16,8,0.62)",
               zIndex: 200, overflowY: "auto", padding: "24px 16px 60px" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <PrintStyles format={format} />

      <div className="oh-no-print"
           style={{ maxWidth: "660px", margin: "0 auto 20px", background: "#EDE5D0",
                    border: `1px solid ${C.rule}`, borderRadius: "3px", padding: "14px 18px",
                    fontFamily: SERIF, color: C.ink }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
          <strong style={{ fontSize: "1rem" }}>Bulletin</strong>
          <span style={{ fontSize: "0.8rem", color: C.inkLight }}>{day.dateLabel}</span>
          <button onClick={onClose} style={{ ...control, marginLeft: "auto" }}>Close</button>
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px",
                      alignItems: "center" }}>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase",
                         color: C.gold }}>Format</span>
          <button style={format === "A" ? active : control} onClick={() => setFormat("A")}>
            A · Half sheet
          </button>
          <button style={format === "C" ? active : control} onClick={() => setFormat("C")}>
            C · Broadsheet
          </button>

          <label style={{ display: "flex", alignItems: "center", gap: "6px",
                          fontSize: "0.82rem", marginLeft: "8px", cursor: "pointer" }}>
            <input type="checkbox" checked={withReadings}
                   onChange={(e) => setWithReadings(e.target.checked)} />
            Print the readings in full
          </label>

          <button style={{ ...active, marginLeft: "auto" }}
                  onClick={() => window.print()}
                  disabled={withReadings && loading}>
            {withReadings && loading ? "Loading readings…" : "Print"}
          </button>
        </div>

        <p style={{ fontSize: "0.74rem", color: C.inkLight, margin: "10px 0 0", lineHeight: 1.5 }}>
          {format === "A"
            ? "5.5 × 8.5 in — two to a letter sheet with one cut."
            : "8.5 × 11 in, two columns — carries every proper the day appoints."}
          {withReadings && " Each reading is set continuously, as it is chanted; a ¶ marks a chapter change."}
        </p>
      </div>

      <PropersSheet day={day} format={format} />
      {readingSheets.map((sheet, i) => (
        <ReadingsSheet key={i} day={day} readings={sheet} format={format}
                       index={i + 2} total={readingSheets.length + 1} />
      ))}
    </div>,
    document.body,
  );
}
