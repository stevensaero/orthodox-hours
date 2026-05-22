import { useState, useEffect, useRef, useCallback } from "react";

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
const DATA_BASE = `${BASE}scripture/`;

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
  let isCovered = false; // within chapter range of any reading

  for (const r of readings) {
    if (r.book.toLowerCase() !== bookId.toLowerCase() && r.book !== bookId) continue;
    if (r.chapter !== chapter) continue;
    isCovered = true;
    if (verseNum >= r.verseStart && verseNum <= r.verseEnd) {
      isAppointed = true;
      break;
    }
  }

  if (!isCovered) return "normal";
  return isAppointed ? "appointed" : "skipped";
}

// ─── CONTEXT STRIP ────────────────────────────────────────────────────────────
function ContextStrip({ fromContext, position }) {
  if (!fromContext) return null;
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
      <span style={{ fontSize: "1rem", lineHeight: 1, color: C.gold }}>←</span>
      <span style={{ fontSize: "0.78rem", color: C.gold, marginLeft: "0.4rem" }}>
        Hours Tool
      </span>
      <span style={{ fontSize: "0.72rem", color: C.inkLight, fontStyle: "italic", marginLeft: "0.25rem" }}>
        · {fromContext.serviceLabel} · {fromContext.dayName}, {fromContext.dateLabel}
      </span>
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
    const pericopeParam = params.get("pericope");
    const bookParam = params.get("book") || params.get("Book");
    const chapterParam = parseInt(params.get("chapter") || "1", 10);
    const verseParam = parseInt(params.get("verse") || "0", 10) || null;
    const service = params.get("service");
    const date = params.get("date");

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
      fromContext = { dayName, dateLabel, serviceLabel };
    }

    return { pericopeParam, bookParam, chapterParam, verseParam, fromContext };
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
  const { fromContext } = initState;

  // ── Load manifest + pericopes on mount ───────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
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
          setSelectedBookId(bookId);
          setCurrentChapter(firstReading.chapter);
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
        <ContextStrip fromContext={fromContext} position="top" />

        {/* Site header */}
        <div style={{
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
        {pericopeMeta && <PericopeHeader pericope={pericopeMeta} />}

        {/* Book selector */}
        <BookSelector
          manifest={manifest}
          selectedBookId={selectedBookId}
          onSelect={handleBookSelect}
          open={bookSelectorOpen}
          onToggle={() => setBookSelectorOpen(o => !o)}
        />

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
        {!loading && !selectedBookId && (
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

        {/* Context strip — bottom */}
        <ContextStrip fromContext={fromContext} position="bottom" />

        {/* Footer */}
        <div style={{
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
