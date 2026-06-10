import { useState, useRef, useEffect } from "react";
import { KATHISMA_MAP, PSALMS, getPsalmRange } from "../data/psalter.js";

// ─── LITURGICAL CONSTANTS ─────────────────────────────────────────────────────
const GLORY = "Glory to the Father, and to the Son, and to the Holy Spirit; both now and ever and unto the ages of ages. Amen.";
const ALLELUIA = "Alleluia, alleluia, alleluia: Glory to Thee, O God.";
const LHM = "Lord, have mercy; Lord, have mercy; Lord, have mercy.";
const STASIS_NAMES = ["First Stasis", "Second Stasis", "Third Stasis"];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
const C = {
  parchment: "#FAF6EE",
  ink: "#1C1008",
  inkMid: "#3D3020",
  inkLight: "#9A8A70",
  gold: "#8B6914",
  goldLight: "#D4C49A",
  goldFaint: "rgba(139,105,20,0.06)",
  border: "#E8DEC8",
};

function StasisDivider({ isLast }) {
  return (
    <div style={{
      margin: "1.25rem 0", padding: "0.75rem 1rem",
      borderLeft: `2px solid ${C.goldLight}`, borderRadius: "0 3px 3px 0",
      background: C.goldFaint, fontSize: "0.88rem", color: C.inkMid,
      lineHeight: "1.85", fontStyle: "italic",
    }}>
      {GLORY}<br />
      <span style={{ color: C.inkLight, fontSize: "0.83rem" }}>
        {ALLELUIA}<br />{ALLELUIA}<br />{ALLELUIA}
      </span>
      <br /><br />
      {isLast
        ? "O Lord, our hope, glory to Thee."
        : <>{LHM}<br /><br />{GLORY}</>
      }
    </div>
  );
}

function PsalmBlock({ num }) {
  const data = PSALMS[num];
  if (!data) {
    return (
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkLight, fontWeight: "bold", marginBottom: "0.4rem" }}>
          Psalm {num}
        </div>
        <div style={{ fontSize: "0.88rem", color: C.goldLight, fontStyle: "italic" }}>
          Text for Psalm {num} will be encoded in a future session. Visit{" "}
          <a href={`https://psalter.app/psalm/${num}/`} target="_blank" rel="noopener" style={{ color: C.gold }}>
            psalter.app
          </a>{" "}to read it now.
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkLight, fontWeight: "bold", marginBottom: "0.25rem" }}>
        Psalm {num}
      </div>
      {data.sub && (
        <div style={{ fontSize: "0.78rem", color: C.inkLight, fontStyle: "italic", marginBottom: "0.35rem" }}>
          {data.sub}
        </div>
      )}
      <div style={{ fontSize: "0.97rem", lineHeight: "1.9", color: C.inkMid }}>
        {data.v.map(([vn, text]) => (
          <span key={vn}>
            <sup style={{ fontSize: "0.62rem", color: C.gold, marginRight: "2px", verticalAlign: "super" }}>{vn}</sup>
            {text}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

function KathismaView({ k, onNav }) {
  const topRef = useRef(null);

  useEffect(() => {
    // Fire on mount and on k change — delay overrides browser scroll restoration
    const t = setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 80);
    return () => clearTimeout(t);
  }, [k]);

  const info = KATHISMA_MAP[k];

  return (
    <div ref={topRef}>
      <div style={{ marginBottom: "1.4rem", paddingBottom: "0.75rem", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold, marginBottom: "0.2rem" }}>
          Kathisma {k}
        </div>
        <div style={{ fontSize: "0.75rem", color: C.inkLight, fontStyle: "italic" }}>
          {getPsalmRange(k)}
        </div>
      </div>

      <div style={{ fontSize: "0.88rem", color: C.inkMid, lineHeight: "1.8", marginBottom: "1.25rem", fontStyle: "italic" }}>
        {LHM}<br />{GLORY}
      </div>

      {info.stases.map((psalms, si) => {
        const isLast = si === info.stases.length - 1;
        return (
          <div key={si}>
            <div style={{
              fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
              color: C.gold, fontWeight: "bold", margin: "1.75rem 0 1rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              {STASIS_NAMES[si]}
              <span style={{ flex: 1, height: "1px", background: C.goldLight, display: "block" }} />
            </div>
            {info.verseRanges ? (() => {
                const [vStart, vEnd] = info.verseRanges[si];
                const data = PSALMS[118];
                const sliced = data ? data.v.filter(([vn]) => vn >= vStart && vn <= vEnd) : [];
                return (
                  <div style={{ marginBottom: "1.5rem" }}>
                    {si === 0 && <>
                      <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkLight, fontWeight: "bold", marginBottom: "0.25rem" }}>Psalm 118</div>
                      {data?.sub && <div style={{ fontSize: "0.78rem", color: C.inkLight, fontStyle: "italic", marginBottom: "0.35rem" }}>{data.sub}</div>}
                    </>}
                    <div style={{ fontSize: "0.97rem", lineHeight: "1.9", color: C.inkMid }}>
                      {sliced.map(([vn, text]) => (
                        <span key={vn}>
                          <sup style={{ fontSize: "0.62rem", color: C.gold, marginRight: "2px", verticalAlign: "super" }}>{vn}</sup>
                          {text}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })() : psalms.filter(Boolean).map(n => <PsalmBlock key={n} num={n} />)}
            <StasisDivider isLast={isLast} />
          </div>
        );
      })}

      {/* End of Kathisma marker with Orthodox cross */}
      <div style={{
        textAlign: 'center',
        margin: '2rem 0 0.5rem',
        paddingTop: '1rem',
        borderTop: `1px solid ${C.goldLight}`,
      }}>
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          letterSpacing: '0.12em',
          color: '#5A4A2A',
          marginBottom: '1rem',
        }}>
          {`THE END OF THE ${['', 'FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH', 'NINTH', 'TENTH', 'ELEVENTH', 'TWELFTH', 'THIRTEENTH', 'FOURTEENTH', 'FIFTEENTH', 'SIXTEENTH', 'SEVENTEENTH', 'EIGHTEENTH', 'NINETEENTH', 'TWENTIETH'][k]} KATHISMA`}
        </div>
        <svg width="46" height="66" viewBox="0 0 92 133" role="img" aria-label="Orthodox cross" style={{display:'inline-block'}}>
          <g transform="matrix(1,0,0,1,-188.023852,108.103825)">
            <path d="M247.237,-66.889C248.05,-71.423 251.98,-74.733 256.586,-74.764C261.193,-74.794 265.166,-71.537 266.039,-67.014C270.027,-65.763 272.741,-62.068 272.741,-57.889C272.741,-53.71 270.027,-50.015 266.039,-48.765C265.166,-44.242 261.193,-40.984 256.586,-41.014C251.98,-41.045 248.05,-44.355 247.237,-48.889L244.82,-48.889L244.82,-46.639L242.57,-46.639L242.57,-7.504C247.105,-6.691 250.415,-2.761 250.445,1.846C250.476,6.452 247.218,10.425 242.695,11.298C241.445,15.286 237.75,18 233.57,18C229.391,18 225.696,15.286 224.446,11.298C219.923,10.425 216.665,6.452 216.696,1.846C216.726,-2.761 220.036,-6.691 224.57,-7.504L224.57,-46.639L222.32,-46.639L222.32,-48.889L219.904,-48.889C219.091,-44.355 215.161,-41.045 210.554,-41.014C205.948,-40.984 201.975,-44.242 201.102,-48.765C197.114,-50.015 194.4,-53.71 194.4,-57.889C194.4,-62.068 197.114,-65.763 201.102,-67.014C201.975,-71.537 205.948,-74.794 210.554,-74.764C215.161,-74.733 219.091,-71.423 219.904,-66.889L222.32,-66.889L222.32,-69.139L224.57,-69.139L224.57,-76.224C220.036,-77.037 216.726,-80.967 216.696,-85.573C216.665,-90.179 219.923,-94.153 224.446,-95.026C225.696,-99.014 229.391,-101.728 233.57,-101.728C237.75,-101.728 241.445,-99.014 242.695,-95.026C247.218,-94.153 250.476,-90.179 250.445,-85.573C250.415,-80.967 247.105,-77.037 242.57,-76.224L242.57,-69.139L244.82,-69.139L244.82,-66.889L247.237,-66.889Z" fill="#B8A070"/>
          </g>
        </svg>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", marginBottom: "1.5rem", paddingTop: "1rem", borderTop: `1px solid ${C.border}` }}>
        <button onClick={() => onNav(k - 1)} disabled={k <= 1}
          style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: C.gold, background: "none", border: `1px solid ${C.goldLight}`, borderRadius: "3px", padding: "5px 14px", cursor: k <= 1 ? "default" : "pointer", opacity: k <= 1 ? 0.3 : 1 }}>
          ← Kathisma {k - 1}
        </button>
        <button onClick={() => onNav(k + 1)} disabled={k >= 20}
          style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: C.gold, background: "none", border: `1px solid ${C.goldLight}`, borderRadius: "3px", padding: "5px 14px", cursor: k >= 20 ? "default" : "pointer", opacity: k >= 20 ? 0.3 : 1 }}>
          Kathisma {k + 1} →
        </button>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function Psalter() {
  const initialK = (() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const params = new URLSearchParams(window.location.search);
    const k = parseInt(params.get("kathisma"), 10);
    return k >= 1 && k <= 20 ? k : 1;
  })();

  const fromContext = (() => {
    const params = new URLSearchParams(window.location.search);
    const fromTool = params.get("from") === "tool";
    const service = params.get("service");
    const date = params.get("date");
    if (fromTool) return { fromToolOnly: true };
    if (!service || !date) return null;
    const d = new Date(date + "T12:00:00");
    const dayName = d.toLocaleDateString("en-US", { weekday: "long" });
    const dateLabel = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const serviceLabel = service === "vespers" ? "Vespers"
      : service === "post_communion" ? "Prayers After Communion"
      : service === "typica" ? "Typica"
      : service.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase());
    return { dayName, dateLabel, serviceLabel, href: "/orthodox-hours/" };
  })();

  const [currentK, setCurrentK] = useState(initialK);

  // Scroll window to top on initial load — must be in useEffect, not render
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ minHeight: "100vh", background: C.parchment, fontFamily: "Georgia, serif", color: C.ink }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "1.5rem 1.25rem 5rem" }}>

        {/* ── Context strip — shown when opened from Hours tool ── */}
        {fromContext && (
          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              position: "sticky", top: 0, zIndex: 10,
              marginBottom: "1.25rem",
              marginLeft: "-1.25rem", marginRight: "-1.25rem",
              width: "calc(100% + 2.5rem)",
              padding: "0.5rem 1.25rem",
              background: "#FAF6EE",
              border: "none", borderBottom: `1px solid ${C.goldLight}`,
              cursor: "pointer", textAlign: "left",
              fontFamily: "Georgia, serif",
            }}
          >
            <span style={{ fontSize: "1.2rem", lineHeight: 1, color: C.gold }}>←</span>
            <span style={{ fontSize: "0.95rem", fontFamily: "Georgia, serif", color: C.gold, marginLeft: "0.4rem" }}>
              Hours Tool
            </span>
            {!fromContext.fromToolOnly && (
              <span style={{ fontSize: "0.82rem", color: C.inkLight, fontStyle: "italic", marginLeft: "0.25rem" }}>
                · {fromContext.serviceLabel} · {fromContext.dayName}, {fromContext.dateLabel}
              </span>
            )}
          </button>
        )}

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${C.goldLight}`, paddingBottom: "0.6rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, fontWeight: "bold" }}>Orthodox Psalter</span>
          <span style={{ fontSize: "0.72rem", color: C.inkLight, fontStyle: "italic" }}>Brenton Septuagint · Public Domain</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: C.inkLight, marginRight: "0.2rem" }}>Kathisma</span>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(k => (
            <button key={k} onClick={() => setCurrentK(k)} style={{
              fontFamily: "Georgia, serif", fontSize: "0.78rem",
              padding: "3px 8px", border: `1px solid ${C.goldLight}`, borderRadius: "3px",
              background: currentK === k ? C.gold : "transparent",
              color: currentK === k ? C.parchment : C.gold,
              cursor: "pointer",
            }}>
              {k}
            </button>
          ))}
        </div>

        <KathismaView key={currentK} k={currentK} onNav={setCurrentK} />

        {currentK === 20 && PSALMS[151] && (
          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${C.border}` }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: C.inkLight, fontWeight: "bold", marginBottom: "0.5rem" }}>
              Supplementary
            </div>
            <div style={{ fontSize: "0.78rem", color: C.inkLight, fontStyle: "italic", marginBottom: "1rem", lineHeight: "1.5" }}>
              Psalm 151 is not numbered among the 150 Psalms and is not part of any Kathisma. It is placed here as a supplement, following the Septuagint tradition.
            </div>
            <PsalmBlock num={151} />
          </div>
        )}

        {fromContext && (
          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              position: "sticky", bottom: 0, zIndex: 10,
              marginLeft: "-1.25rem", marginRight: "-1.25rem",
              width: "calc(100% + 2.5rem)",
              padding: "0.5rem 1.25rem",
              background: "#FAF6EE",
              border: "none", borderTop: `1px solid ${C.goldLight}`,
              cursor: "pointer", textAlign: "left",
              fontFamily: "Georgia, serif",
            }}
          >
            <span style={{ fontSize: "1.2rem", lineHeight: 1, color: C.gold }}>←</span>
            <span style={{ fontSize: "0.95rem", fontFamily: "Georgia, serif", color: C.gold, marginLeft: "0.4rem" }}>
              Hours Tool
            </span>
            {!fromContext.fromToolOnly && (
              <span style={{ fontSize: "0.82rem", color: C.inkLight, fontStyle: "italic", marginLeft: "0.25rem" }}>
                · {fromContext.serviceLabel} · {fromContext.dayName}, {fromContext.dateLabel}
              </span>
            )}
          </button>
        )}

        <div style={{ marginTop: "3rem", paddingTop: "1rem", borderTop: `1px solid ${C.border}`, fontSize: "0.7rem", color: "#B8A882", fontStyle: "italic", textAlign: "center", lineHeight: "1.6" }}>
          Psalm texts from the Brenton Septuagint (1851), public domain.<br />
          Sourced from <a href="https://psalter.app" target="_blank" rel="noopener" style={{ color: C.gold }}>psalter.app</a> (MIT license). All 20 kathismata fully encoded.
        </div>

      </div>
    </div>
  );
}
