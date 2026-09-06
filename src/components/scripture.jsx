import { useState, useEffect, useRef, useCallback } from "react";
import { parseRefString, spanLabel } from "../lib/scripture-ref.js";

// ─── COLOR TOKENS ─────────────────────────────────────────────────────────────
// Identical to psalter.jsx — unified liturgical library aesthetic
const C = {
  parchment:  "#FAF6EE",
  ink:        "#1C1008",
  inkMid:     "#3D3020",
  inkLight:   "#9A8A70",
  gold:       "#8B6914",
  goldLight:  "#D4C49A",
  goldFaint:  "rgba(139,105,20,0.06)",
  border:     "#E8DEC8",
  skipVerse:  "#B8A882",
};

// ─── BOOK GROUP ORDER ─────────────────────────────────────────────────────────
const GROUP_ORDER = [
  "Gospels", "Apostolos",
  "Law", "History", "Wisdom",
  "Prophets Major", "Prophets Minor", "Deuterocanon",
  "Not Used Liturgically",
];

// ─── URL PARAM HELPERS ────────────────────────────────────────────────────────
function getParams() {
  return new URLSearchParams(window.location.search);
}

// ─── DATA LOADING ─────────────────────────────────────────────────────────────
const bookCache = {};
let booksManifest = null;
let pericopesData = null;

const BASE = import.meta.env.BASE_URL || "/orthodox-hours/";
const DATA_BASE = `${BASE}bible/`;

async function loadManifest() {
  if (booksManifest) return booksManifest;
  const res = await fetch(`${DATA_BASE}books.json`);
  booksManifest = await res.json();
  return booksManifest;
}

async function loadPericopes() {
  if (pericopesData) return pericopesData;
  try {
    const res = await fetch(`${DATA_BASE}pericopes.json`);
    pericopesData = await res.json();
  } catch {
    pericopesData = { gospel: {}, apostolos: {}, ot: {} };
  }
  return pericopesData;
}

async function loadBook(bookId) {
  const id = bookId.toLowerCase();
  if (bookCache[id]) return bookCache[id];
  try {
    const manifest = await loadManifest();
    const meta = manifest.find(b => b.id.toLowerCase() === id || b.abbreviation?.toLowerCase() === id);
    if (!meta) return null;
    const res = await fetch(`${DATA_BASE}${meta.file}`);
    if (!res.ok) return null;
    const data = await res.json();
    bookCache[id] = data;
    return data;
  } catch {
    return null;
  }
}

// ─── PERICOPE RESOLVER ────────────────────────────────────────────────────────
function resolvePericope(pericopeParam, pericopes) {
  if (!pericopeParam || !pericopes) return null;
  const [ns, key] = pericopeParam.split(":");
  if (!ns || !key) return null;
  const nsMap = pericopes[ns];
  if (!nsMap) return null;
  return nsMap[key] || null;
}

// Determine if a verse is appointed/skipped within a pericope's readings
function verseStatus(bookId, chapter, verseNum, pericope) {
  if (!pericope) return "normal";
  const readings = pericope.readings || [];
  let isAppointed = false;
  let isCovered = false;

  for (const r of readings) {
    if (r.book.toLowerCase() !== bookId.toLowerCase() && r.book !== bookId) continue;
    // Same-chapter reading
    if (r.chapter !== undefined) {
      if (r.chapter !== chapter) continue;
      isCovered = true;
      if (verseNum >= r.verseStart && verseNum <= r.verseEnd) { isAppointed = true; break; }
    } else {
      // Cross-chapter reading: chapterStart/chapterEnd
      const inRange =
        (chapter > r.chapterStart && chapter < r.chapterEnd) ||
        (chapter === r.chapterStart && verseNum >= r.verseStart) ||
        (chapter === r.chapterEnd && verseNum <= r.verseEnd);
      if (chapter < r.chapterStart || chapter > r.chapterEnd) continue;
      isCovered = true;
      if (inRange) { isAppointed = true; break; }
    }
  }

  if (!isCovered) return "normal";
  return isAppointed ? "appointed" : "skipped";
}

// ─── CONTEXT STRIP ────────────────────────────────────────────────────────────
function ContextStrip({ fromContext, fromTool, position }) {
  if (!fromContext && !fromTool) return null;
  const isBottom = position === "bottom";
  return (
    <button
      onClick={() => window.history.back()}
      style={{
        display: "flex", alignItems: "center", gap: "0.5rem",
        position: "sticky",
        top: isBottom ? undefined : 0,
        bottom: isBottom ? 0 : undefined,
        zIndex: 10,
        marginLeft: "-1.25rem", marginRight: "-1.25rem",
        width: "calc(100% + 2.5rem)",
        padding: "0.5rem 1.25rem",
        background: C.parchment,
        border: "none",
        borderBottom: isBottom ? undefined : `1px solid ${C.goldLight}`,
        borderTop: isBottom ? `1px solid ${C.goldLight}` : undefined,
        cursor: "pointer", textAlign: "left",
        fontFamily: "Georgia, serif",
      }}
    >
      <span style={{ fontSize: "1.2rem", lineHeight: 1, color: C.gold }}>←</span>
      <span style={{ fontSize: "0.95rem", color: C.gold, marginLeft: "0.4rem" }}>
        Hours Tool
      </span>
      {fromContext && (
        <span style={{ fontSize: "0.82rem", color: C.inkLight, fontStyle: "italic", marginLeft: "0.25rem" }}>
          · {fromContext.serviceLabel} · {fromContext.dayName}, {fromContext.dateLabel}
        </span>
      )}
    </button>
  );
}

// ─── PERICOPE HEADER ──────────────────────────────────────────────────────────
function PericopeHeader({ pericope }) {
  if (!pericope) return null;
  return (
    <div style={{
      marginBottom: "1.5rem",
      padding: "0.75rem 1rem",
      borderLeft: `3px solid ${C.gold}`,
      background: C.goldFaint,
      borderRadius: "0 4px 4px 0",
    }}>
      <div style={{
        fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase",
        color: C.gold, fontWeight: "bold", marginBottom: "0.2rem",
      }}>
        {pericope.label}
      </div>
      {pericope.description && (
        <div style={{ fontSize: "0.78rem", color: C.inkLight, fontStyle: "italic" }}>
          {pericope.description}
        </div>
      )}
      {pericope.readings && pericope.readings.length > 0 && (
        <div style={{ fontSize: "0.75rem", color: C.inkMid, marginTop: "0.3rem" }}>
          {pericope.readings.map((r, i) => (
            <span key={i}>
              {i > 0 && <span style={{ color: C.inkLight }}>, </span>}
              {r.book} {r.chapter}:{r.verseStart}–{r.verseEnd}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── CHAPTER VIEW ─────────────────────────────────────────────────────────────
function ChapterView({ bookData, chapterNum, targetVerse, pericope, totalChapters, onChapterChange }) {
  const topRef = useRef(null);
  const verseRefs = useRef({});

  const chapterData = bookData?.chapters?.find(c => c.chapter === chapterNum);

  useEffect(() => {
    const t = setTimeout(() => {
      if (targetVerse && verseRefs.current[targetVerse]) {
        verseRefs.current[targetVerse].scrollIntoView({ behavior: "instant", block: "center" });
      } else {
        topRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }, 80);
    return () => clearTimeout(t);
  }, [chapterNum, targetVerse, bookData]);

  const bookId = bookData?.id || "";

  return (
    <div ref={topRef}>
      {/* Chapter heading */}
      <div style={{
        fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
        color: C.gold, marginBottom: "1rem", fontWeight: "bold",
        display: "flex", alignItems: "center", gap: "0.75rem",
      }}>
        Chapter {chapterNum}
        <span style={{ flex: 1, height: "1px", background: C.goldLight }} />
      </div>

      {/* Verse text */}
      {!chapterData ? (
        <div style={{ fontSize: "0.9rem", color: C.inkLight, fontStyle: "italic", padding: "2rem 0", textAlign: "center" }}>
          Chapter {chapterNum} not yet encoded.{" "}
          <a href={`https://www.biblegateway.com/passage/?search=${bookId}+${chapterNum}`}
             target="_blank" rel="noopener" style={{ color: C.gold }}>
            Read online →
          </a>
        </div>
      ) : (
        <div style={{ fontSize: "0.97rem", lineHeight: "1.9", color: C.inkMid }}>
          {chapterData.verses.map(v => {
            const status = verseStatus(bookId, chapterNum, v.verse, pericope);
            const isAppointed = status === "appointed";
            const isSkipped = status === "skipped";
            return (
              <span
                key={v.verse}
                ref={el => { if (el) verseRefs.current[v.verse] = el; }}
                style={{
                  display: "inline",
                  color: isSkipped ? C.skipVerse : C.inkMid,
                  opacity: isSkipped ? 0.7 : 1,
                  background: isAppointed ? "rgba(139,105,20,0.04)" : "transparent",
                  borderLeft: isAppointed ? `2px solid ${C.goldLight}` : undefined,
                  paddingLeft: isAppointed ? "0.4rem" : undefined,
                  marginLeft: isAppointed ? "-0.4rem" : undefined,
                }}
              >
                <sup style={{
                  fontSize: "0.62rem", color: isSkipped ? C.skipVerse : C.gold,
                  marginRight: "2px", verticalAlign: "super",
                }}>
                  {v.verse}
                </sup>
                {v.text}{" "}
              </span>
            );
          })}
        </div>
      )}

      {/* Chapter navigation */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginTop: "2rem", marginBottom: "1.5rem",
        paddingTop: "1rem", borderTop: `1px solid ${C.border}`,
      }}>
        <button
          onClick={() => onChapterChange(chapterNum - 1)}
          disabled={chapterNum <= 1}
          style={navBtnStyle(chapterNum <= 1)}
        >
          ← Chapter {chapterNum - 1}
        </button>
        <button
          onClick={() => onChapterChange(chapterNum + 1)}
          disabled={chapterNum >= totalChapters}
          style={navBtnStyle(chapterNum >= totalChapters)}
        >
          Chapter {chapterNum + 1} →
        </button>
      </div>
    </div>
  );
}

function navBtnStyle(disabled) {
  return {
    fontFamily: "Georgia, serif", fontSize: "0.82rem",
    color: C.gold, background: "none",
    border: `1px solid ${C.goldLight}`, borderRadius: "3px",
    padding: "5px 14px", cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.3 : 1,
  };
}

// ─── REF PARSER + READING MODE ──────────────────────────────────────────────
// The book map and reference parser live in src/lib/scripture-ref.js, shared
// with hours-tool.jsx. They used to be duplicated here, and the two copies
// drifted: this file did not know the abbreviations "Is", "Ex", "Judg" or
// "Jdt", so the tool built links that this viewer then silently refused to
// render. See that module's header for the full account.

function SpanHeading({ label }) {
  return (
    <div style={{
      fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
      color: C.gold, marginBottom: "1rem", marginTop: "1.5rem", fontWeight: "bold",
      display: "flex", alignItems: "center", gap: "0.75rem",
    }}>
      {label}
      <span style={{ flex: 1, height: "1px", background: C.goldLight }} />
    </div>
  );
}

function ReadingView({ spans, allBookData, autoScroll = true }) {
  const topRef = useRef(null);
  useEffect(() => { if (autoScroll) topRef.current?.scrollIntoView({ behavior: "instant", block: "start" }); }, [spans, autoScroll]);
  if (!spans || spans.length === 0) return null;

  const vStyle = { fontSize: "0.97rem", lineHeight: "1.9", color: C.inkMid, display: "block" };
  const supStyle = { fontSize: "0.62rem", color: C.gold, marginRight: "2px", verticalAlign: "super" };

  const renderCross = (span, bookData) => {
    if (!bookData) return null;
    const els = [];
    for (let ch = span.chapterStart; ch <= span.chapterEnd; ch++) {
      const chData = bookData.chapters?.find(c => c.chapter === ch);
      if (!chData) continue;
      const vStart = ch === span.chapterStart ? span.verseStart : 1;
      const vEnd = ch === span.chapterEnd ? span.verseEnd : 99999;
      const verses = chData.verses.filter(v => v.verse >= vStart && v.verse <= vEnd);
      if (ch > span.chapterStart && verses.length > 0)
        els.push(<SpanHeading key={`ch${ch}`} label={`${span.bookName || span.book} ${ch}:${verses[0].verse}`} />);
      verses.forEach(v => els.push(
        <span key={`${ch}-${v.verse}`} style={vStyle}>
          <sup style={supStyle}>{v.verse}</sup>{v.text}
        </span>
      ));
    }
    return <div>{els}</div>;
  };

  const renderSame = (span, bookData) => {
    if (!bookData) return null;
    const chData = bookData.chapters?.find(c => c.chapter === span.chapter);
    if (!chData) return null;
    const verses = chData.verses.filter(v => v.verse >= span.verseStart && v.verse <= span.verseEnd);
    return (
      <div>
        {verses.map(v => (
          <span key={v.verse} style={vStyle}>
            <sup style={supStyle}>{v.verse}</sup>{v.text}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div ref={topRef}>
      {spans.map((span, i) => (
        <div key={i}>
          <SpanHeading label={spanLabel(span)} />
          {span.chapterStart !== undefined
            ? renderCross(span, allBookData[span.book])
            : renderSame(span, allBookData[span.book])}
        </div>
      ))}
    </div>
  );
}

// ─── COMBINED READINGS LANDING ────────────────────────────────────────────────
// Composed when the Hours tool hands off a group of readings (sessionStorage
// oht_scripture_readings) — either the day's Epistle/Gospel (Library's "Today's
// Readings" book) or a Vespers's OT lessons (paroemias, from the "Read in
// Scripture" combined link). Each group carries a semantic label and its
// parsed spans; spans render through the SAME ReadingView split-gospel path
// used by ?ref= reading mode (no forked renderer). Order follows the handoff
// order (day reading before commemoration for Epistle/Gospel; I/II/III for
// paroemias). No book selector in this mode — a direct handoff from the tool
// already carries a specific reading, so browsing isn't the point of the
// visit (same reasoning as ?ref= reading mode, which has never shown it).
// heading is resolved from the `readings` URL param (READINGS_LANDING_HEADINGS)
// so each handoff gets an accurate label rather than a reused one.
// Heading text for the combined-readings landing, keyed by the `readings` URL
// param value. Add an entry here for any future combined-reading handoff.
const READINGS_LANDING_HEADINGS = {
  "today": "Today's Readings",
  "vespers-lessons": "Old Testament Lessons",
};

function GroupHeading({ label }) {
  return (
    <div style={{
      fontSize: "1rem", fontWeight: "bold", color: C.ink, fontFamily: "Georgia, serif",
      marginTop: "2.25rem", marginBottom: "0.25rem", letterSpacing: "0.01em",
    }}>
      {label}
    </div>
  );
}

// Print CSS, shared by both the combined-readings landing and the single-
// reading (?ref=) view — rendered once regardless of which is showing (rules
// are inert until an actual print, so no harm doing this unconditionally).
// Page-number footer via native @page margin boxes: supported in Chrome 131+
// (Nov 2024) and Safari 18.2+ (Dec 2024); Firefox hasn't shipped it as of
// this writing (tracked in an open Mozilla bug) — on Firefox, its own
// default print footer shows instead, unstyled but still page-numbered.
function PrintStyles() {
  return (
    <style>{`
      @media print {
        .no-print { display: none !important; }
        html, body { background: #fff !important; }
      }
      @page {
        margin: 0.6in 0.6in 0.9in 0.6in;
        @bottom-center {
          content: "Brenton Septuagint (OT) \u00b7 KJV 2006 (NT)   \u00b7   Page " counter(page) " of " counter(pages);
          font-family: Georgia, serif;
          font-size: 9pt;
          color: #7a6a4a;
        }
      }
    `}</style>
  );
}

function PrintButton() {
  return (
    <button
      type="button"
      className="no-print"
      onClick={() => window.print()}
      style={{
        fontSize: "0.68rem", color: C.gold, textDecoration: "none",
        border: `1px solid rgba(139,105,20,0.35)`, borderRadius: "3px",
        padding: "1px 7px", background: "rgba(139,105,20,0.07)",
        fontFamily: "Georgia, serif", letterSpacing: "0.04em",
        whiteSpace: "nowrap", cursor: "pointer",
        WebkitAppearance: "none", appearance: "none", flexShrink: 0,
      }}
    >
      Print
    </button>
  );
}

// "Vespers · Kazan Icon of the Most Holy Theotokos · Wednesday, July 8, 2026"
// — anchors the printed/on-screen page to the specific service it belongs
// to. Shown both on screen and in print (not .no-print) since it's useful
// either place. Renders nothing if there's nothing to show.
function ReadingContextLine({ service, commemoration, dateLabel }) {
  const parts = [service, commemoration, dateLabel].filter(Boolean);
  if (!parts.length) return null;
  return (
    <div style={{ fontSize: "0.85rem", color: C.inkLight, fontStyle: "italic", marginBottom: "1rem" }}>
      {parts.join(" \u00b7 ")}
    </div>
  );
}

function TodayReadingsView({ groups, allBookData, heading, context }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!groups || groups.length === 0) return null;
  return (
    <div>
      <PrintStyles />
      <div style={{
        display: "flex", alignItems: "baseline", justifyContent: "space-between",
        gap: "0.75rem", marginBottom: "0.25rem",
      }}>
        <div style={{
          fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
          color: C.gold, fontWeight: "bold",
        }}>
          {heading || "Today's Readings"}
        </div>
        <PrintButton />
      </div>
      {context && (
        <ReadingContextLine
          service={context.service}
          commemoration={context.commemoration}
          dateLabel={context.dateLabel}
        />
      )}
      {groups.map((g, i) => (
        <div key={i}>
          <GroupHeading label={g.label} />
          <ReadingView spans={g.spans} allBookData={allBookData} autoScroll={false} />
        </div>
      ))}
    </div>
  );
}

// ─── BOOK SELECTOR ────────────────────────────────────────────────────────────
function BookSelector({ manifest, selectedBookId, onSelect, open, onToggle }) {
  if (!manifest) return null;

  // Group books
  const groups = {};
  manifest.forEach(b => {
    if (!groups[b.group]) groups[b.group] = [];
    groups[b.group].push(b);
  });

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <button
        onClick={onToggle}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "100%", padding: "0.5rem 0.75rem",
          background: C.goldFaint, border: `1px solid ${C.goldLight}`,
          borderRadius: "4px", cursor: "pointer",
          fontFamily: "Georgia, serif", color: C.gold,
          fontSize: "0.78rem",
        }}
      >
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {selectedBookId
            ? manifest.find(b => b.id.toLowerCase() === selectedBookId.toLowerCase())?.name || "Select Book"
            : "Select Book"}
        </span>
        <span style={{ fontSize: "0.75rem" }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div style={{
          border: `1px solid ${C.goldLight}`, borderTop: "none",
          borderRadius: "0 0 4px 4px", background: C.parchment,
          maxHeight: "60vh", overflowY: "auto",
        }}>
          {GROUP_ORDER.filter(g => groups[g]).map(groupName => (
            <div key={groupName}>
              <div style={{
                fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase",
                color: C.inkLight, padding: "0.5rem 0.75rem 0.25rem",
                borderTop: `1px solid ${C.border}`, fontWeight: "bold",
              }}>
                {groupName}
              </div>
              {groupName === "Not Used Liturgically" && (
                <div style={{
                  fontSize: "0.68rem", color: C.inkLight, fontStyle: "italic",
                  padding: "0 0.75rem 0.25rem",
                }}>
                  Revelation is not read in Orthodox liturgy.
                </div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "0.25rem 0.75rem 0.5rem" }}>
                {groups[groupName].map(book => {
                  const isSelected = book.id.toLowerCase() === selectedBookId?.toLowerCase();
                  const isAvailable = true; // all books shown; unavailable ones show stub
                  return (
                    <button
                      key={book.id}
                      onClick={() => { onSelect(book.id); onToggle(); }}
                      style={{
                        fontFamily: "Georgia, serif", fontSize: "0.75rem",
                        padding: "3px 8px",
                        border: `1px solid ${isSelected ? C.gold : C.goldLight}`,
                        borderRadius: "3px",
                        background: isSelected ? C.gold : "transparent",
                        color: isSelected ? C.parchment : C.gold,
                        cursor: "pointer",
                      }}
                    >
                      {book.abbreviation || book.id}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── CHAPTER SELECTOR ─────────────────────────────────────────────────────────
function ChapterSelector({ totalChapters, currentChapter, onSelect }) {
  if (!totalChapters || totalChapters <= 1) return null;
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <div style={{
        fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase",
        color: C.inkLight, marginBottom: "0.5rem",
      }}>
        Chapter
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {Array.from({ length: totalChapters }, (_, i) => i + 1).map(ch => {
          const active = ch === currentChapter;
          return (
            <button
              key={ch}
              onClick={() => onSelect(ch)}
              style={{
                fontFamily: "Georgia, serif", fontSize: "0.78rem",
                padding: "3px 8px",
                border: `1px solid ${C.goldLight}`, borderRadius: "3px",
                background: active ? C.gold : "transparent",
                color: active ? C.parchment : C.gold,
                cursor: "pointer",
              }}
            >
              {ch}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── VERSE GOTO ───────────────────────────────────────────────────────────────
function VerseGoto({ bookData, chapterNum, onGoto }) {
  const [val, setVal] = useState("");
  const chapter = bookData?.chapters?.find(c => c.chapter === chapterNum);
  const maxVerse = chapter ? Math.max(...chapter.verses.map(v => v.verse)) : 0;

  const handleGo = () => {
    const n = parseInt(val, 10);
    if (!isNaN(n) && chapter) {
      const exists = chapter.verses.find(v => v.verse === n);
      const clamped = exists ? n : chapter.verses[0]?.verse || 1;
      onGoto(clamped);
    }
    setVal("");
  };

  if (!chapter || maxVerse <= 1) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
      <span style={{ fontSize: "0.68rem", color: C.inkLight, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Go to verse
      </span>
      <input
        type="number" min="1" max={maxVerse} value={val}
        onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleGo()}
        placeholder={`1–${maxVerse}`}
        style={{
          width: "70px", padding: "2px 6px",
          fontFamily: "Georgia, serif", fontSize: "0.82rem",
          border: `1px solid ${C.goldLight}`, borderRadius: "3px",
          background: C.parchment, color: C.inkMid,
          outline: "none",
        }}
      />
      <button onClick={handleGo} style={{
        fontFamily: "Georgia, serif", fontSize: "0.78rem",
        padding: "2px 10px", border: `1px solid ${C.goldLight}`,
        borderRadius: "3px", background: "transparent",
        color: C.gold, cursor: "pointer",
      }}>
        Go
      </button>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Scripture() {
  // ── Init from URL params ──────────────────────────────────────────────────
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  const initState = (() => {
    const params = getParams();
    const refParam = params.get("ref");
    const pericopeParam = params.get("pericope");
    const bookParam = params.get("book") || params.get("Book");
    const chapterParam = parseInt(params.get("chapter") || "1", 10);
    const verseParam = parseInt(params.get("verse") || "0", 10) || null;
    const service = params.get("service");
    const date = params.get("date");
    const commemorationParam = params.get("commemoration");

    let fromContext = null;
    if (service && date) {
      const d = new Date(date + "T12:00:00");
      const dayName = d.toLocaleDateString("en-US", { weekday: "long" });
      const dateLabel = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      const serviceLabel = service === "vespers" ? "Vespers"
        : service === "liturgy" ? "Divine Liturgy"
        : service === "post_communion" ? "Prayers After Communion"
        : service === "typica" ? "Typica"
        : service.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      // commemoration is optional — present on paroemia links (v0.29.0),
      // absent on older Epistle/Gospel-style ?ref= links that don't carry it.
      fromContext = { dayName, dateLabel, serviceLabel, commemoration: commemorationParam || null };
    }

    const fromTool = params.get("from") === "tool";
    const refSpans = refParam ? parseRefString(refParam) : null;
    return { pericopeParam, refParam, refSpans, bookParam, chapterParam, verseParam, fromContext, fromTool };
  })();

  const [manifest, setManifest] = useState(null);
  const [pericopes, setPericopes] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(initState.bookParam || null);
  const [currentChapter, setCurrentChapter] = useState(initState.chapterParam || 1);
  const [targetVerse, setTargetVerse] = useState(initState.verseParam);
  const [bookData, setBookData] = useState(null);
  const [activePericope, setActivePericope] = useState(null);
  const [bookSelectorOpen, setBookSelectorOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pericopeMeta, setPericopeMeta] = useState(null);
  const { fromContext, fromTool, refSpans } = initState;
  const [allBookData, setAllBookData] = useState({});
  const isReadingMode = !!(initState.refParam && parseRefString(initState.refParam));

  // Hours tool → Scripture handoff: a group of readings, stashed in
  // sessionStorage and consumed ONCE here (mirrors the Tone Trainer's
  // oht_handoff). Read in a useState initializer so it runs a single time and
  // never re-reads on render. Each item becomes { label, kind, spans } via the
  // existing parseRefString. `readings` selects both the gate and the landing
  // heading (READINGS_LANDING_HEADINGS) — "today" for the Library's Epistle/
  // Gospel book, "vespers-lessons" for a Vespers's combined OT lessons link.
  // Payload shape: accepts either a bare items array (the Library's Today's
  // Readings handoff, unchanged) or the newer { items, context } envelope
  // (Vespers OT lessons, v0.29.0) that also carries a service/commemoration/
  // date anchor for display.
  const [readingsPayload] = useState(() => {
    try {
      const p = getParams();
      if (p.get("from") !== "tool" || !READINGS_LANDING_HEADINGS[p.get("readings")]) return null;
      const raw = sessionStorage.getItem("oht_scripture_readings");
      if (!raw) return null;
      sessionStorage.removeItem("oht_scripture_readings");
      const parsed = JSON.parse(raw);
      const items = Array.isArray(parsed) ? parsed
        : (parsed && Array.isArray(parsed.items)) ? parsed.items : null;
      const context = Array.isArray(parsed) ? null : (parsed && parsed.context) || null;
      if (!items || items.length === 0) return null;
      const groups = items
        .map(it => ({ label: it.label, kind: it.kind, spans: parseRefString(it.ref) }))
        .filter(g => g.spans && g.spans.length > 0);
      if (!groups.length) return null;
      return { groups, context };
    } catch { return null; }
  });
  const readingGroups = readingsPayload ? readingsPayload.groups : null;
  const readingsContext = readingsPayload ? readingsPayload.context : null;
  const isTodayReadings = !!(readingGroups && readingGroups.length > 0);
  const readingsHeading = READINGS_LANDING_HEADINGS[getParams().get("readings")] || "Today's Readings";


  // ── Load manifest + pericopes on mount ───────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isTodayReadings) {
      // Today's Readings landing: load manifest + every book across all groups'
      // spans, then render each group through ReadingView. Native nav (the book
      // selector) stays live alongside.
      const allSpans = readingGroups.flatMap(g => g.spans);
      const uniqueBooks = [...new Set(allSpans.map(s => s.book))];
      loadManifest().then(mf => {
        setManifest(mf);
        return Promise.all(uniqueBooks.map(bid => loadBook(bid).then(data => ({ bid, data }))));
      }).then(results => {
        const map = {};
        results.forEach(({ bid, data }) => { map[bid] = data; });
        setAllBookData(map);
        setLoading(false);
      }).catch(() => setLoading(false));
      return;
    }
    if (isReadingMode) {
      // Reading mode: load manifest + all books in the ref spans
      const spans = initState.refSpans;
      const uniqueBooks = [...new Set(spans.map(s => s.book))];
      loadManifest().then(mf => {
        setManifest(mf);
        return Promise.all(uniqueBooks.map(bid => loadBook(bid).then(data => ({ bid, data }))));
      }).then(results => {
        const map = {};
        results.forEach(({ bid, data }) => { map[bid] = data; });
        setAllBookData(map);
        setLoading(false);
      }).catch(() => setLoading(false));
      return;
    }

    Promise.all([loadManifest(), loadPericopes()]).then(([mf, pc]) => {
      setManifest(mf);
      setPericopes(pc);

      // Resolve pericope mode
      if (initState.pericopeParam) {
        const resolved = resolvePericope(initState.pericopeParam, pc);
        if (resolved && resolved.readings?.length > 0) {
          setActivePericope(resolved);
          setPericopeMeta(resolved);
          const firstReading = resolved.readings[0];
          const bookId = firstReading.book;
          // Support both same-chapter (chapter) and cross-chapter (chapterStart) readings
          const landingChapter = firstReading.chapter ?? firstReading.chapterStart ?? 1;
          setSelectedBookId(bookId);
          setCurrentChapter(landingChapter);
          setTargetVerse(firstReading.verseStart);
        }
      } else if (!initState.bookParam) {
        // Default to Matthew ch.1
        setSelectedBookId("Matt");
      }
    });
  }, []);

  // ── Load book data when selectedBookId changes ────────────────────────────
  useEffect(() => {
    if (!selectedBookId) return;
    setLoading(true);
    setBookData(null);
    loadBook(selectedBookId).then(data => {
      setBookData(data);
      setLoading(false);
    });
  }, [selectedBookId]);

  // ── Validate chapter when bookData loads ──────────────────────────────────
  useEffect(() => {
    if (!bookData) return;
    const maxCh = bookData.chapters?.length > 0
      ? Math.max(...bookData.chapters.map(c => c.chapter))
      : 1;
    if (currentChapter > maxCh) setCurrentChapter(1);
  }, [bookData]);

  const handleBookSelect = useCallback((bookId) => {
    setSelectedBookId(bookId);
    setCurrentChapter(1);
    setTargetVerse(null);
    setActivePericope(null);
    setPericopeMeta(null);
  }, []);

  const handleChapterChange = useCallback((ch) => {
    const meta = manifest?.find(b => b.id.toLowerCase() === selectedBookId?.toLowerCase());
    const maxCh = meta?.chapters || 1;
    const clamped = Math.max(1, Math.min(ch, maxCh));
    setCurrentChapter(clamped);
    setTargetVerse(null);
  }, [manifest, selectedBookId]);

  const bookMeta = manifest?.find(b =>
    b.id.toLowerCase() === selectedBookId?.toLowerCase()
  );
  const totalChapters = bookMeta?.chapters || (bookData?.chapters?.length) || 1;
  const bookName = bookMeta?.name || bookData?.name || selectedBookId || "";
  const sourceLabel = bookData?.testament === "NT"
    ? "KJV 2006 · Public Domain"
    : "Brenton LXX 1844 · Public Domain";

  return (
    <div style={{ minHeight: "100vh", background: C.parchment, fontFamily: "Georgia, serif", color: C.ink }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "1.5rem 1.25rem 5rem" }}>

        {/* Context strip — top */}
        <div className="no-print">
          <ContextStrip fromContext={fromContext} fromTool={fromTool} position="top" />
        </div>

        {/* Site header */}
        <div className="no-print" style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          borderBottom: `2px solid ${C.goldLight}`,
          paddingBottom: "0.6rem", marginBottom: "1.5rem",
          marginTop: fromContext ? "0.75rem" : 0,
        }}>
          <span style={{
            fontSize: "0.65rem", letterSpacing: "0.22em",
            textTransform: "uppercase", color: C.gold, fontWeight: "bold",
          }}>
            Orthodox Scripture
          </span>
          <span style={{ fontSize: "0.72rem", color: C.inkLight, fontStyle: "italic" }}>
            {bookData ? sourceLabel : "Brenton LXX · KJV"}
          </span>
        </div>

        {/* Pericope header */}
        {pericopeMeta && <div className="no-print"><PericopeHeader pericope={pericopeMeta} /></div>}

        {/* Book selector — hidden for any direct handoff from the Hours tool
            (single ?ref= reading, or the combined-readings landing): both
            already carry a specific reading, so browsing to another book
            isn't the point of the visit. Shown only for a genuine browse
            visit (no reading handed in). */}
        {!isReadingMode && !isTodayReadings && <BookSelector
          manifest={manifest}
          selectedBookId={selectedBookId}
          onSelect={handleBookSelect}
          open={bookSelectorOpen}
          onToggle={() => setBookSelectorOpen(o => !o)}
        />}

        {/* Book + chapter heading */}
        {selectedBookId && (
          <div style={{ marginBottom: "0.5rem" }}>
            <div style={{
              fontSize: "0.65rem", letterSpacing: "0.22em",
              textTransform: "uppercase", color: C.gold, marginBottom: "0.2rem",
            }}>
              {bookName}
            </div>
            {bookData && (
              <div style={{ fontSize: "0.72rem", color: C.inkLight, fontStyle: "italic" }}>
                {bookData.testament === "NT" ? "New Testament" : "Old Testament"} · {bookMeta?.group || bookData.group}
              </div>
            )}
          </div>
        )}

        {/* Chapter selector */}
        {!loading && (
          <ChapterSelector
            totalChapters={totalChapters}
            currentChapter={currentChapter}
            onSelect={(ch) => { setCurrentChapter(ch); setTargetVerse(null); }}
          />
        )}

        {/* Verse goto */}
        {bookData && (
          <VerseGoto
            bookData={bookData}
            chapterNum={currentChapter}
            onGoto={(v) => setTargetVerse(v)}
          />
        )}

        {/* Loading state */}
        {loading && (
          <div style={{
            textAlign: "center", padding: "3rem",
            color: C.inkLight, fontStyle: "italic", fontSize: "0.9rem",
          }}>
            {selectedBookId ? `Loading ${bookName}…` : "Loading…"}
          </div>
        )}

        {/* Reading mode — appointed verses only. Same heading/print/context
            treatment as the combined-readings landing, reusing the shared
            components rather than duplicating: heading is the reference
            itself (accurate for both single and semicolon-joined multi-span
            refs), context line only shows when fromContext is present
            (arrived from the tool with service+date, optionally
            commemoration — plain bookmarked/direct ?ref= visits show no
            context line but still get the heading and print button). */}
        {isReadingMode && !loading && (
          <div>
            <PrintStyles />
            <div style={{
              display: "flex", alignItems: "baseline", justifyContent: "space-between",
              gap: "0.75rem", marginBottom: "0.25rem",
            }}>
              <div style={{
                fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
                color: C.gold, fontWeight: "bold",
              }}>
                {initState.refParam}
              </div>
              <PrintButton />
            </div>
            {fromContext && (
              <ReadingContextLine
                service={fromContext.serviceLabel}
                commemoration={fromContext.commemoration}
                dateLabel={`${fromContext.dayName}, ${fromContext.dateLabel}`}
              />
            )}
            <ReadingView spans={refSpans} allBookData={allBookData} />
          </div>
        )}
        {isReadingMode && loading && (
          <div style={{ textAlign: "center", padding: "3rem", color: C.inkLight, fontStyle: "italic", fontSize: "0.9rem" }}>
            Loading…
          </div>
        )}

        {/* Combined-readings landing (Library's Epistle/Gospel handoff, or a
            Vespers's combined OT lessons link) — composed via ReadingView.
            No book selector in this mode (see above), so selectedBookId can
            only be set by a stray ?book= param; guarded defensively. */}
        {isTodayReadings && !selectedBookId && !loading && (
          <TodayReadingsView groups={readingGroups} allBookData={allBookData} heading={readingsHeading} context={readingsContext} />
        )}

        {/* Browse mode */}
        {!isReadingMode && (
          <>
            {/* Chapter content */}
            {!loading && selectedBookId && (
              <ChapterView
                key={`${selectedBookId}-${currentChapter}`}
                bookData={bookData}
                chapterNum={currentChapter}
                targetVerse={targetVerse}
                pericope={activePericope}
                totalChapters={totalChapters}
                onChapterChange={handleChapterChange}
              />
            )}

            {/* Welcome state */}
            {!loading && !selectedBookId && !isTodayReadings && (
              <div style={{
                textAlign: "center", padding: "3rem 1rem",
                color: C.inkLight, fontStyle: "italic",
              }}>
                <div style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  Select a book to begin reading.
                </div>
                <div style={{ fontSize: "0.78rem" }}>
                  Brenton Septuagint (OT) · KJV 2006 (NT)
                </div>
              </div>
            )}
          </>
        )}

        {/* Context strip — bottom */}
        <div className="no-print">
          <ContextStrip fromContext={fromContext} fromTool={fromTool} position="bottom" />
        </div>

        {/* Footer */}
        <div className="no-print" style={{
          marginTop: "3rem", paddingTop: "1rem",
          borderTop: `1px solid ${C.border}`,
          fontSize: "0.7rem", color: "#B8A882",
          fontStyle: "italic", textAlign: "center", lineHeight: "1.6",
        }}>
          Old Testament: Brenton Septuagint (1844), public domain.<br />
          New Testament: King James Version (2006 edition), public domain.
        </div>

      </div>
    </div>
  );
}
