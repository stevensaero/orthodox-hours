import { useState, useEffect, useRef } from "react";

// ─── KATHISMA STRUCTURE ───────────────────────────────────────────────────────
// Psalm groupings and stasis divisions per Orthodox usage.
// Text fetched live from psalter.app (Brenton LXX, public domain).

const KATHISMA_MAP = {
  1:  { stases: [[1,2,3],[4,5,6],[7,8]] },
  2:  { stases: [[9,10],[11,12,13],[14,15,16]] },
  3:  { stases: [[17],[18,19,20],[21,22,23]] },
  4:  { stases: [[24,25,26],[27,28,29],[30,31]] },
  5:  { stases: [[32,33],[34,35],[36]] },
  6:  { stases: [[37,38,39],[40,41,42],[43,44,45]] },
  7:  { stases: [[46,47,48],[49,50],[51,52,53,54]] },
  8:  { stases: [[55,56,57],[58,59,60],[61,62,63]] },
  9:  { stases: [[64,65,66],[67],[68,69]] },
  10: { stases: [[70,71,72],[73,74,75],[76,77]] },
  11: { stases: [[78,79,80],[81,82,83],[84,85]] },
  12: { stases: [[86,87],[88],[89]] },
  13: { stases: [[90,91,92,93,94],[95,96,97,98],[99,100]] },
  14: { stases: [[101],[102],[103]] },
  15: { stases: [[104],[105],[106]] },
  16: { stases: [[107,108,109],[110,111,112],[113]] },
  17: { stases: [[118]] },
  18: { stases: [[119,120,121,122,123],[124,125,126,127,128],[129,130,131,132,133]] },
  19: { stases: [[134,135,136],[137,138,139],[140,141,142]] },
  20: { stases: [[143,144,145],[146,147,148],[149,150,151]] },
};

const STASIS_NAMES = ["First Stasis", "Second Stasis", "Third Stasis"];

const GLORY = "Glory to the Father, and to the Son, and to the Holy Spirit; both now and ever and unto the ages of ages. Amen.";
const ALLELUIA = "Alleluia, alleluia, alleluia: Glory to Thee, O God.";
const LHM = "Lord, have mercy; Lord, have mercy; Lord, have mercy.";

// ─── PSALM FETCHER ────────────────────────────────────────────────────────────

const psalmCache = {};

async function fetchPsalm(n) {
  if (psalmCache[n]) return psalmCache[n];
  try {
    const res = await fetch(`https://psalter.app/psalm/${n}/`);
    const html = await res.text();
    const parsed = parsePsalmHtml(html, n);
    psalmCache[n] = parsed;
    return parsed;
  } catch {
    return { num: n, subtitle: "", verses: [{ n: 1, text: "[Could not load — check connection]" }] };
  }
}

function parsePsalmHtml(html, num) {
  const div = document.createElement("div");
  div.innerHTML = html;
  const lines = (div.textContent || "").split("\n").map(l => l.trim()).filter(Boolean);

  const start = lines.findIndex(l => l === `Psalm ${num}`);
  let subtitle = "";
  const verses = [];

  if (start >= 0) {
    let i = start + 1;
    // optional subtitle line before first verse
    if (i < lines.length && !lines[i].match(/^\d/)) {
      subtitle = lines[i];
      i++;
    }
    while (i < lines.length) {
      const l = lines[i];
      if (l.startsWith("Glory to the Father") || l.startsWith("Alleluia") ||
          l.startsWith("About") || l.startsWith("psalter.app") ||
          l.startsWith("# ") || l === "psalter.app") break;
      const m = l.match(/^(\d+)\s+(.+)/);
      if (m) verses.push({ n: parseInt(m[1]), text: m[2] });
      i++;
    }
  }

  return { num, subtitle, verses };
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function StasisDivider({ isLast }) {
  const s = {
    margin: "1.25rem 0",
    padding: "0.75rem 1rem",
    borderLeft: "2px solid #D4C49A",
    borderRadius: "0 3px 3px 0",
    background: "rgba(139,105,20,0.06)",
    fontSize: "0.88rem",
    color: "#3D3020",
    lineHeight: "1.85",
    fontStyle: "italic",
  };
  const faint = { color: "#9A8A70", fontSize: "0.83rem" };

  if (isLast) {
    return (
      <div style={s}>
        {GLORY}<br />
        <span style={faint}>{ALLELUIA}<br />{ALLELUIA}<br />{ALLELUIA}</span><br /><br />
        O Lord, our hope, glory to Thee.
      </div>
    );
  }
  return (
    <div style={s}>
      {GLORY}<br />
      <span style={faint}>{ALLELUIA}<br />{ALLELUIA}<br />{ALLELUIA}</span><br /><br />
      {LHM}<br /><br />
      {GLORY}
    </div>
  );
}

function PsalmBlock({ data }) {
  if (!data) return null;
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{
        fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase",
        color: "#9A8A70", fontWeight: "bold", marginBottom: "0.3rem",
        fontFamily: "Georgia, serif",
      }}>
        Psalm {data.num}
      </div>
      {data.subtitle && (
        <div style={{ fontSize: "0.78rem", color: "#9A8A70", fontStyle: "italic", marginBottom: "0.4rem" }}>
          {data.subtitle}
        </div>
      )}
      <div style={{ fontSize: "0.97rem", lineHeight: "1.9", color: "#3D3020" }}>
        {data.verses.map(v => (
          <span key={v.n}>
            <sup style={{ fontSize: "0.62rem", color: "#8B6914", marginRight: "2px", verticalAlign: "super" }}>
              {v.n}
            </sup>
            {v.text}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

function KathismaView({ k, onNav }) {
  const [psalmData, setPsalmData] = useState({});
  const [loading, setLoading] = useState(true);
  const topRef = useRef(null);

  const info = KATHISMA_MAP[k];
  const allNums = info.stases.flat().filter(Boolean);
  const firstPsalm = allNums[0];
  const lastPsalm = allNums[allNums.length - 1];
  const rangeLabel = firstPsalm === lastPsalm
    ? `Psalm ${firstPsalm}`
    : `Psalms ${firstPsalm}–${lastPsalm}`;

  useEffect(() => {
    setLoading(true);
    setPsalmData({});
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    Promise.all(allNums.map(n => fetchPsalm(n).then(d => [n, d])))
      .then(entries => {
        const map = {};
        entries.forEach(([n, d]) => { map[n] = d; });
        setPsalmData(map);
        setLoading(false);
      });
  }, [k]);

  const navBtn = (dir, label) => (
    <button
      onClick={() => onNav(k + dir)}
      disabled={dir < 0 ? k <= 1 : k >= 20}
      style={{
        fontFamily: "Georgia, serif", fontSize: "0.82rem",
        color: "#8B6914", background: "none",
        border: "1px solid #D4C49A", borderRadius: "3px",
        padding: "5px 14px", cursor: "pointer",
        opacity: (dir < 0 ? k <= 1 : k >= 20) ? 0.3 : 1,
      }}
    >
      {label}
    </button>
  );

  return (
    <div ref={topRef}>
      {/* Header */}
      <div style={{ marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E8DEC8" }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B6914", marginBottom: "0.2rem" }}>
          Kathisma {k}
        </div>
        <div style={{ fontSize: "0.75rem", color: "#9A8A70", fontStyle: "italic" }}>
          {rangeLabel}
        </div>
      </div>

      {/* Opening */}
      <div style={{ fontSize: "0.88rem", color: "#3D3020", lineHeight: "1.8", marginBottom: "1.25rem", fontStyle: "italic" }}>
        {LHM}<br />{GLORY}
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem", color: "#9A8A70", fontStyle: "italic" }}>
          Loading psalms…
        </div>
      ) : (
        <>
          {info.stases.map((stasisPsalms, si) => {
            const isLast = si === info.stases.length - 1;
            return (
              <div key={si}>
                <div style={{
                  fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#8B6914", fontWeight: "bold",
                  margin: "1.75rem 0 1rem",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                }}>
                  {STASIS_NAMES[si]}
                  <span style={{ flex: 1, height: "1px", background: "#D4C49A", display: "block" }} />
                </div>

                {stasisPsalms.filter(Boolean).map(pn => (
                  <PsalmBlock key={pn} data={psalmData[pn]} />
                ))}

                <StasisDivider isLast={isLast} />
              </div>
            );
          })}
        </>
      )}

      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #E8DEC8" }}>
        {navBtn(-1, `← Kathisma ${k - 1}`)}
        {navBtn(+1, `Kathisma ${k + 1} →`)}
      </div>
    </div>
  );
}

// ─── MAIN PSALTER APP ─────────────────────────────────────────────────────────

export default function Psalter() {
  const [currentK, setCurrentK] = useState(1);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF6EE",
      fontFamily: "Georgia, serif",
      color: "#1C1008",
    }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "1.5rem 1.25rem 5rem" }}>

        {/* Site header */}
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          borderBottom: "2px solid #D4C49A", paddingBottom: "0.6rem", marginBottom: "1.5rem",
        }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B6914", fontWeight: "bold" }}>
            Orthodox Psalter
          </span>
          <span style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic" }}>
            Brenton Septuagint · Public Domain
          </span>
        </div>

        {/* Kathisma selector */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8A70", marginRight: "0.25rem" }}>
            Kathisma
          </span>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(k => (
            <button
              key={k}
              onClick={() => setCurrentK(k)}
              style={{
                fontFamily: "Georgia, serif", fontSize: "0.78rem",
                padding: "3px 9px",
                border: "1px solid #D4C49A", borderRadius: "3px",
                background: currentK === k ? "#8B6914" : "transparent",
                color: currentK === k ? "#FAF6EE" : "#8B6914",
                cursor: "pointer",
              }}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Kathisma content */}
        <KathismaView key={currentK} k={currentK} onNav={setCurrentK} />

        {/* Footer */}
        <div style={{
          marginTop: "3rem", paddingTop: "1rem", borderTop: "1px solid #E8DEC8",
          fontSize: "0.7rem", color: "#B8A882", fontStyle: "italic", textAlign: "center",
          lineHeight: "1.6",
        }}>
          Psalm texts from the Brenton Septuagint (1851), public domain.<br />
          Sourced from <a href="https://psalter.app" target="_blank" rel="noopener" style={{ color: "#8B6914" }}>psalter.app</a> (MIT license).
        </div>

      </div>
    </div>
  );
}
