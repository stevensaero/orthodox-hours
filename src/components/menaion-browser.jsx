// menaion-browser.jsx — Menaion Data Browser
// Dev/truthing tool for proofing encoded Menaion entries.
// Route: /orthodox-hours/menaion — URL-only access, not linked from main UI.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { auditMenaionEntry, auditSummary } from '../lib/audit.js';

// ── Color constants — matches psalter.jsx / hours-tool.jsx ──────────────────
const C = {
  parchment: "#FAF6EE",
  ink: "#1C1008",
  inkMid: "#3D3020",
  inkLight: "#9A8A70",
  gold: "#8B6914",
  goldLight: "#D4C49A",
  goldFaint: "rgba(139,105,20,0.06)",
  border: "#E8DEC8",
  green: "#2D6A2E",
  amber: "#A67C00",
  red: "#A03030",
};

// ── Month metadata ──────────────────────────────────────────────────────────
const MONTHS = [
  { key: "01", name: "January",   days: 31 },
  { key: "02", name: "February",  days: 29 },
  { key: "03", name: "March",     days: 31 },
  { key: "04", name: "April",     days: 30 },
  { key: "05", name: "May",       days: 31 },
  { key: "06", name: "June",      days: 30 },
  { key: "07", name: "July",      days: 31 },
  { key: "08", name: "August",    days: 31 },
  { key: "09", name: "September", days: 30 },
  { key: "10", name: "October",   days: 31 },
  { key: "11", name: "November",  days: 30 },
  { key: "12", name: "December",  days: 31 },
];

// Months with data files — mirrors _menaionLoaders in hours-tool.jsx
const MONTHS_WITH_DATA = {
  "05": () => import("../data/menaion/may.js").then(m => m.default),
  "06": () => import("../data/menaion/june.js").then(m => m.default),
  "07": () => import("../data/menaion/july.js").then(m => m.default),
};

// ── Helpers ─────────────────────────────────────────────────────────────────

function pad2(n) { return String(n).padStart(2, '0'); }

function statusColor(status) {
  if (status === 'complete') return C.green;
  if (status === 'partial') return C.amber;
  return C.red;
}

function statusIcon(status) {
  if (status === 'complete') return '●';
  if (status === 'partial') return '◐';
  return '○';
}

// ── Small caps label ────────────────────────────────────────────────────────
function FieldLabel({ children }) {
  return (
    <span style={{
      fontSize: "0.68rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: C.gold,
      fontWeight: 600,
      fontFamily: "Georgia, 'Times New Roman', serif",
    }}>
      {children}
    </span>
  );
}

// ── Boolean flag display ────────────────────────────────────────────────────
function BoolFlag({ label, value }) {
  const defined = value !== undefined && value !== null;
  return (
    <span style={{
      display: "inline-block",
      marginRight: "1rem",
      marginBottom: "0.25rem",
      fontSize: "0.85rem",
      color: defined ? C.inkMid : C.goldLight,
    }}>
      <FieldLabel>{label}</FieldLabel>{' '}
      <span style={{ color: defined ? (value ? C.green : C.inkLight) : C.goldLight }}>
        {defined ? (value ? '✓' : '✗') : '—'}
      </span>
    </span>
  );
}

// ── Text block (troparion, kontakion, sticheron, etc.) ──────────────────────
function TextBlock({ tone, text, specMel, label, verse, repeatIndex }) {
  return (
    <div style={{
      marginBottom: "0.75rem",
      paddingLeft: "0.75rem",
      borderLeft: `2px solid ${C.border}`,
    }}>
      {label && <div style={{ fontSize: "0.75rem", color: C.inkLight, marginBottom: "0.15rem" }}>{label}</div>}
      {tone !== undefined && tone !== null && (
        <div style={{ fontSize: "0.78rem", color: C.gold, marginBottom: "0.15rem" }}>
          Tone {tone}{specMel ? ` — Spec. Mel.: "${specMel}"` : ''}
        </div>
      )}
      {verse && (
        <div style={{ fontSize: "0.82rem", color: C.inkLight, fontStyle: "italic", marginBottom: "0.25rem" }}>
          Verse: {verse}
        </div>
      )}
      {repeatIndex !== undefined && (
        <div style={{ fontSize: "0.78rem", color: C.amber, marginBottom: "0.15rem" }}>
          [repeats sticheron #{repeatIndex + 1}]
        </div>
      )}
      <div style={{
        fontSize: "0.88rem",
        color: C.ink,
        lineHeight: 1.65,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}>
        {text || <span style={{ color: C.goldLight, fontStyle: "italic" }}>—</span>}
      </div>
    </div>
  );
}

// ── Section header within a card ────────────────────────────────────────────
function SectionHeader({ children }) {
  return (
    <div style={{
      fontSize: "0.72rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: C.gold,
      fontWeight: 700,
      borderBottom: `1px solid ${C.border}`,
      paddingBottom: "0.25rem",
      marginTop: "1.25rem",
      marginBottom: "0.6rem",
    }}>
      {children}
    </div>
  );
}

// ── Single field row ────────────────────────────────────────────────────────
function FieldRow({ label, value, mono }) {
  const display = value === null ? <span style={{ color: C.goldLight }}>null</span>
    : value === undefined ? <span style={{ color: C.goldLight }}>—</span>
    : typeof value === 'boolean' ? (value ? <span style={{ color: C.green }}>✓ true</span> : <span style={{ color: C.inkLight }}>✗ false</span>)
    : <span style={{ fontFamily: mono ? "monospace" : "inherit" }}>{String(value)}</span>;

  return (
    <div style={{ marginBottom: "0.3rem", fontSize: "0.85rem", color: C.inkMid }}>
      <FieldLabel>{label}</FieldLabel>{' '}
      {display}
    </div>
  );
}

// ── Entry Card ──────────────────────────────────────────────────────────────
function EntryCard({ dateKey, entry, audit, stickyTop }) {
  // Handle array entries (double commemorations)
  const isArray = Array.isArray(entry);
  const primary = isArray ? entry[0] : entry;
  const secondary = isArray ? entry.slice(1) : [];

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* ── Sticky Header ── */}
      <div style={{
        position: "sticky",
        top: stickyTop + "px",
        zIndex: 10,
        background: C.parchment,
        paddingTop: "0.35rem",
        paddingBottom: "0.35rem",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          border: `1px solid ${C.border}`,
          borderRadius: "6px 6px 0 0",
          padding: "0.6rem 1.25rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          <div>
            <span style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: C.ink,
              fontFamily: "Georgia, serif",
            }}>
              {dateKey}
            </span>
            <span style={{
              marginLeft: "0.75rem",
              fontSize: "0.95rem",
              color: C.inkMid,
              fontFamily: "Georgia, serif",
            }}>
              {primary.saint || '(no saint name)'}
            </span>
            {isArray && (
              <span style={{ marginLeft: "0.5rem", fontSize: "0.78rem", color: C.amber }}>
                [{entry.length} entries]
              </span>
            )}
          </div>
          <div style={{
            fontSize: "0.82rem",
            fontWeight: 600,
            color: statusColor(audit.status),
            whiteSpace: "nowrap",
          }}>
            {statusIcon(audit.status)} {audit.status}
          </div>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div style={{
        background: "#fff",
        border: `1px solid ${C.border}`,
        borderTop: "none",
        borderRadius: "0 0 6px 6px",
        padding: "0.75rem 1.25rem 1.25rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>

      {/* ── Audit details ── */}
      {(audit.missing.length > 0 || audit.hasPlaceholder) && (
        <div style={{
          fontSize: "0.78rem",
          color: audit.status === 'structural' ? C.red : C.amber,
          background: audit.status === 'structural' ? "rgba(185,74,58,0.06)" : "rgba(166,124,0,0.06)",
          padding: "0.5rem 0.7rem",
          borderRadius: "4px",
          borderLeft: `3px solid ${audit.status === 'structural' ? C.red : C.amber}`,
          marginBottom: "0.75rem",
        }}>
          <div style={{ fontWeight: 600, marginBottom: "0.3rem" }}>
            {audit.status === 'structural' ? 'Structural — ' : ''}
            {audit.missing.length} missing field{audit.missing.length !== 1 ? 's' : ''}
            {audit.hasPlaceholder && ' · has placeholder text'}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
            {audit.missing.map(f => (
              <span key={f} style={{
                display: "inline-block",
                fontSize: "0.72rem",
                fontFamily: "monospace",
                background: audit.status === 'structural' ? "rgba(185,74,58,0.1)" : "rgba(166,124,0,0.1)",
                border: `1px solid ${audit.status === 'structural' ? "rgba(185,74,58,0.3)" : "rgba(166,124,0,0.3)"}`,
                borderRadius: "3px",
                padding: "1px 6px",
              }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Metadata ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem", marginBottom: "0.5rem" }}>
        <FieldRow label="source_file" value={primary.source_file} mono />
        <FieldRow label="rank" value={primary.rank} />
        <FieldRow label="fekula_section" value={primary.fekula_section} />
        <FieldRow label="oca_primary" value={primary.oca_primary} />
        <FieldRow label="matins_format" value={primary.matins_format} />
        <FieldRow label="aposticha_source" value={primary.aposticha_source} />
      </div>

      {/* ── Flags ── */}
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "0.5rem" }}>
        <BoolFlag label="doxology" value={primary.has_great_doxology} />
        <BoolFlag label="polyeleos" value={primary.has_polyeleos} />
        <BoolFlag label="litya" value={primary.has_litya} />
        <BoolFlag label="paroemias" value={primary.has_paroemias} />
        <BoolFlag label="magnificat" value={primary.magnificat_sung} />
        <BoolFlag label="truly meet suppressed" value={primary.it_is_truly_meet_suppressed} />
        <BoolFlag label="heavenly king omitted" value={primary.heavenly_king_omitted} />
      </div>

      {/* ── Troparion ── */}
      <SectionHeader>Troparion</SectionHeader>
      {primary.troparion ? (
        typeof primary.troparion === 'object' && !Array.isArray(primary.troparion) ? (
          <TextBlock tone={primary.troparion.tone} text={primary.troparion.text} label="Troparion" />
        ) : Array.isArray(primary.troparion) ? (
          primary.troparion.map((t, i) => (
            <TextBlock key={i} tone={t.tone} text={t.text} label={`Troparion ${i + 1}`} />
          ))
        ) : null
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>Not encoded</div>
      )}
      {primary.troparion_2 && (
        <TextBlock tone={primary.troparion_2.tone} text={primary.troparion_2.text} label="Troparion 2" />
      )}
      {primary.troparion_3 && (
        <TextBlock tone={primary.troparion_3.tone} text={primary.troparion_3.text} label="Troparion 3" />
      )}

      {/* ── Kontakia ── */}
      <SectionHeader>Kontakia</SectionHeader>
      {primary.kontakion_ode6 ? (
        <TextBlock
          tone={primary.kontakion_ode6.tone}
          text={primary.kontakion_ode6.text}
          label="Kontakion (Ode VI → 3rd & 9th Hours)"
        />
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>kontakion_ode6 — not encoded</div>
      )}
      {primary.kontakion_ode3 ? (
        <TextBlock
          tone={primary.kontakion_ode3.tone}
          text={primary.kontakion_ode3.text}
          label="Kontakion (Ode III → 1st & 6th Hours)"
        />
      ) : (
        <FieldRow label="kontakion_ode3" value={null} />
      )}

      {/* ── Lord I Have Cried Stichera ── */}
      <SectionHeader>Vespers — Lord I Have Cried</SectionHeader>
      {primary.stichera_lord_i_call_count !== undefined && (
        <FieldRow label="stichera count" value={primary.stichera_lord_i_call_count} />
      )}
      {primary.stichera_lord_i_call && Array.isArray(primary.stichera_lord_i_call) ? (
        primary.stichera_lord_i_call.map((s, i) => (
          <TextBlock
            key={i}
            tone={s.tone}
            text={s.text}
            specMel={s.spec_mel}
            label={`[${i + 1}]`}
            repeatIndex={s.repeatIndex}
          />
        ))
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>Not encoded</div>
      )}
      {primary.stichera_glory && (
        <TextBlock
          tone={primary.stichera_glory.tone}
          text={primary.stichera_glory.text}
          label="Glory (Doxasticon)"
        />
      )}
      {primary.stichera_glory === null && <FieldRow label="stichera_glory" value={null} />}
      {primary.lic_theotokion && (
        <TextBlock
          tone={primary.lic_theotokion.tone}
          text={primary.lic_theotokion.text}
          label="Both now (Theotokion)"
        />
      )}
      {primary.lic_theotokion === null && <FieldRow label="lic_theotokion" value={null} />}

      {/* ── Vespers Aposticha ── */}
      {(primary.stichera_aposticha || primary.aposticha_glory) && (
        <>
          <SectionHeader>Vespers — Aposticha</SectionHeader>
          {primary.stichera_aposticha && Array.isArray(primary.stichera_aposticha) && (
            primary.stichera_aposticha.map((s, i) => (
              <TextBlock key={i} tone={s.tone} text={s.text} verse={s.verse} label={`[${i + 1}]`} />
            ))
          )}
          {primary.aposticha_glory && (
            <TextBlock
              tone={primary.aposticha_glory.tone}
              text={primary.aposticha_glory.text}
              label="Glory (Doxasticon)"
            />
          )}
          {primary.aposticha_theotokion && (
            <TextBlock
              tone={primary.aposticha_theotokion.tone}
              text={primary.aposticha_theotokion.text}
              label="Both now (Theotokion)"
            />
          )}
        </>
      )}

      {/* ── Liturgy Propers ── */}
      <SectionHeader>Liturgy Propers</SectionHeader>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem" }}>
        <FieldRow label="feast_e" value={primary.feast_e} mono />
        <FieldRow label="feast_g" value={primary.feast_g} mono />
      </div>
      <FieldRow label="prokeimenon_tone" value={primary.prokeimenon_tone} />
      {primary.prokeimenon_text && <FieldRow label="prokeimenon_text" value={primary.prokeimenon_text} />}
      {primary.prokeimenon_stichos && <FieldRow label="prokeimenon_stichos" value={primary.prokeimenon_stichos} />}
      <FieldRow label="alleluia_tone" value={primary.alleluia_tone} />
      {primary.alleluia_verse && <FieldRow label="alleluia_verse" value={primary.alleluia_verse} />}
      {primary.alleluia_stichos && <FieldRow label="alleluia_stichos" value={primary.alleluia_stichos} />}
      {primary.communion_verse && <FieldRow label="communion_verse" value={primary.communion_verse} />}

      {/* ── Paroemias ── */}
      {(primary.paroemia_1 || primary.paroemia_2 || primary.paroemia_3) && (
        <>
          <SectionHeader>Vespers — Paroemias</SectionHeader>
          <FieldRow label="paroemia_1" value={primary.paroemia_1} />
          <FieldRow label="paroemia_2" value={primary.paroemia_2} />
          <FieldRow label="paroemia_3" value={primary.paroemia_3} />
        </>
      )}

      {/* ── Vespers — Litiya ── */}
      {primary.has_litya && (
        <>
          <SectionHeader>Vespers — Litiya</SectionHeader>
          {primary.litya_stichera && Array.isArray(primary.litya_stichera) && primary.litya_stichera.length > 0 ? (
            primary.litya_stichera.map((s, i) => (
              <TextBlock key={i} tone={s.tone} text={s.text} label={`[${i + 1}]`} />
            ))
          ) : primary.litya_stichera && Array.isArray(primary.litya_stichera) && primary.litya_stichera.length === 0 ? (
            <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>
              No dedicated Litiya stichera in Menaion PDF (Litiya petitions are fixed text)
            </div>
          ) : (
            <div style={{ fontSize: "0.85rem", color: C.red, fontStyle: "italic" }}>
              litya_stichera — not encoded (has_litya is true)
            </div>
          )}
          {primary.litya_glory ? (
            <TextBlock
              tone={primary.litya_glory.tone}
              text={primary.litya_glory.text}
              label="Glory (Doxasticon)"
            />
          ) : primary.litya_stichera ? null : (
            <div style={{ fontSize: "0.78rem", color: C.red, fontStyle: "italic", marginTop: "0.25rem" }}>
              litya_glory — not encoded
            </div>
          )}
          {primary.litya_both_now ? (
            <TextBlock
              tone={primary.litya_both_now.tone}
              text={primary.litya_both_now.text}
              label="Both now (Theotokion)"
            />
          ) : primary.litya_stichera ? null : (
            <div style={{ fontSize: "0.78rem", color: C.red, fontStyle: "italic", marginTop: "0.25rem" }}>
              litya_both_now — not encoded
            </div>
          )}
        </>
      )}

      {/* ── Matins ── */}
      {(primary.matins_gospel || primary.beatitudes_source) && (
        <>
          <SectionHeader>Matins</SectionHeader>
          {primary.matins_gospel && <FieldRow label="matins_gospel" value={primary.matins_gospel} />}
          {primary.beatitudes_source && <FieldRow label="beatitudes_source" value={primary.beatitudes_source} />}
          {primary.beatitudes_troparia && Array.isArray(primary.beatitudes_troparia) && (
            <div style={{ marginTop: "0.4rem" }}>
              <div style={{ fontSize: "0.75rem", color: C.inkLight, marginBottom: "0.25rem" }}>
                Beatitudes troparia ({primary.beatitudes_troparia.length})
              </div>
              {primary.beatitudes_troparia.map((t, i) => (
                <div key={i} style={{
                  fontSize: "0.84rem",
                  color: typeof t === 'object' && t.repeat ? C.amber : C.ink,
                  fontStyle: typeof t === 'object' && t.repeat ? "italic" : "normal",
                  lineHeight: 1.6,
                  fontFamily: "Georgia, serif",
                  paddingLeft: "0.75rem",
                  borderLeft: `2px solid ${C.border}`,
                  marginBottom: "0.5rem",
                }}>
                  <span style={{ fontSize: "0.72rem", color: C.inkLight }}>
                    [{i + 1}]{' '}
                  </span>
                  {typeof t === 'string' ? t
                    : typeof t === 'object' && t.text ? t.text
                    : typeof t === 'object' && t.repeat ? `[repeats previous]${t.note ? ' — ' + t.note : ''}`
                    : JSON.stringify(t)}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── Notes ── */}
      {primary.note && (
        <>
          <SectionHeader>Notes</SectionHeader>
          <div style={{
            fontSize: "0.85rem",
            color: C.inkMid,
            lineHeight: 1.65,
            fontFamily: "Georgia, serif",
            whiteSpace: "pre-wrap",
          }}>
            {primary.note}
          </div>
        </>
      )}

      {/* ── Secondary entries (double commemorations) ── */}
      {secondary.map((sec, idx) => (
        <div key={idx} style={{
          marginTop: "1.25rem",
          paddingTop: "1rem",
          borderTop: `2px dashed ${C.border}`,
        }}>
          <div style={{
            fontSize: "0.82rem",
            color: C.gold,
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}>
            Secondary Entry #{idx + 2}: {sec.saint || '(unnamed)'}
          </div>
          <FieldRow label="rank" value={sec.rank} />
          <FieldRow label="fekula_section" value={sec.fekula_section} />
          {sec.troparion && (
            <TextBlock tone={sec.troparion.tone} text={sec.troparion.text} label="Troparion" />
          )}
          {sec.kontakion_ode6 && (
            <TextBlock tone={sec.kontakion_ode6.tone} text={sec.kontakion_ode6.text} label="Kontakion (Ode VI)" />
          )}
          {sec.feast_e && <FieldRow label="feast_e" value={sec.feast_e} mono />}
          {sec.feast_g && <FieldRow label="feast_g" value={sec.feast_g} mono />}
          {sec.note && (
            <div style={{
              fontSize: "0.85rem", color: C.inkMid, lineHeight: 1.65, marginTop: "0.5rem",
              fontFamily: "Georgia, serif", whiteSpace: "pre-wrap",
            }}>
              {sec.note}
            </div>
          )}
        </div>
      ))}
      </div>{/* end card body */}
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function MenaionBrowser() {
  const [activeMonth, setActiveMonth] = useState("05"); // start on May (first month with data)
  const [monthData, setMonthData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const entryRefs = useRef({});
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(90);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        setHeaderHeight(Math.ceil(entry.contentRect.height + parseFloat(getComputedStyle(el).paddingTop) + parseFloat(getComputedStyle(el).paddingBottom) + 2));
      }
    });
    ro.observe(el);
    setHeaderHeight(Math.ceil(el.getBoundingClientRect().height));
    return () => ro.disconnect();
  }, []);

  const hasData = useCallback((monthKey) => monthKey in MONTHS_WITH_DATA, []);

  // Load month data
  useEffect(() => {
    if (!hasData(activeMonth)) {
      setMonthData(null);
      return;
    }
    setLoading(true);
    setError(null);
    MONTHS_WITH_DATA[activeMonth]()
      .then(data => { setMonthData(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [activeMonth, hasData]);

  // Compute entries and audits for the active month
  const monthInfo = MONTHS.find(m => m.key === activeMonth);
  const entries = [];
  const auditResults = [];

  if (monthData && monthInfo) {
    for (let d = 1; d <= monthInfo.days; d++) {
      const key = `${activeMonth}-${pad2(d)}`;
      const entry = monthData[key];
      if (entry) {
        const audit = auditMenaionEntry(entry);
        entries.push({ key, entry, audit });
        auditResults.push(audit);
      }
    }
  }

  const summary = auditSummary(auditResults);

  const scrollToEntry = (key) => {
    const el = entryRefs.current[key];
    if (!el) return;
    const headerH = headerRef.current ? headerRef.current.getBoundingClientRect().height : 90;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elTop - headerH - 8, behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: C.parchment,
      fontFamily: "Georgia, 'Times New Roman', serif",
      color: C.ink,
    }}>
      {/* ── Header ── */}
      <div ref={headerRef} style={{
        background: "#fff",
        borderBottom: `2px solid ${C.border}`,
        padding: "1rem 1.5rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}>
          <div style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
              <a href="/orthodox-hours/" style={{
                fontSize: "0.82rem", color: C.gold, textDecoration: "none",
                fontFamily: "Georgia, serif",
              }}>← Hours Tool</a>
              <h1 style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: C.gold,
                margin: 0,
                letterSpacing: "0.04em",
              }}>
                Menaion Data Browser
              </h1>
            </div>
            <span style={{
              fontSize: "0.72rem",
              color: C.inkLight,
              letterSpacing: "0.06em",
            }}>
              DEV / TRUTHING TOOL
            </span>
          </div>

          {/* ── Month tabs ── */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.15rem",
          }}>
            {MONTHS.map(m => {
              const active = m.key === activeMonth;
              const has = hasData(m.key);
              return (
                <button
                  key={m.key}
                  onClick={() => has && setActiveMonth(m.key)}
                  disabled={!has}
                  style={{
                    padding: "0.3rem 0.6rem",
                    fontSize: "0.78rem",
                    fontFamily: "Georgia, serif",
                    border: active ? `1px solid ${C.gold}` : `1px solid transparent`,
                    borderRadius: "3px",
                    background: active ? C.goldFaint : "transparent",
                    color: has ? (active ? C.gold : C.inkMid) : C.goldLight,
                    cursor: has ? "pointer" : "default",
                    fontWeight: active ? 700 : 400,
                    letterSpacing: "0.03em",
                    opacity: has ? 1 : 0.5,
                  }}
                >
                  {m.name.slice(0, 3)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "1.25rem 1.5rem",
        display: "flex",
        gap: "1.5rem",
      }}>
        {/* ── Day sidebar ── */}
        {hasData(activeMonth) && monthInfo && (
          <div style={{
            flexShrink: 0,
            width: "200px",
            position: "sticky",
            top: (headerHeight + 10) + "px",
            alignSelf: "flex-start",
          }}>
            {/* Month summary */}
            <div style={{
              fontSize: "0.78rem",
              color: C.inkMid,
              marginBottom: "0.75rem",
              lineHeight: 1.6,
            }}>
              <strong style={{ color: C.ink }}>{monthInfo.name}</strong>
              <br />
              {summary.total}/{monthInfo.days} days encoded
              {summary.total > 0 && (
                <>
                  <br />
                  <span style={{ color: C.green }}>{summary.complete} complete</span>
                  {summary.partial > 0 && <> · <span style={{ color: C.amber }}>{summary.partial} partial</span></>}
                  {summary.structural > 0 && <> · <span style={{ color: C.red }}>{summary.structural} structural</span></>}
                </>
              )}
            </div>

            {/* Day grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "2px",
            }}>
              {Array.from({ length: monthInfo.days }, (_, i) => {
                const d = i + 1;
                const key = `${activeMonth}-${pad2(d)}`;
                const entryInfo = entries.find(e => e.key === key);
                const hasEntry = !!entryInfo;

                return (
                  <button
                    key={d}
                    onClick={() => hasEntry && scrollToEntry(key)}
                    disabled={!hasEntry}
                    style={{
                      width: "26px",
                      height: "26px",
                      fontSize: "0.72rem",
                      fontFamily: "Georgia, serif",
                      border: "none",
                      borderRadius: "3px",
                      background: hasEntry ? C.goldFaint : "transparent",
                      color: hasEntry ? C.ink : C.goldLight,
                      cursor: hasEntry ? "pointer" : "default",
                      fontWeight: hasEntry ? 600 : 400,
                      padding: 0,
                      position: "relative",
                    }}
                    title={hasEntry ? `${key} — ${entryInfo.audit.status}` : `${key} — no data`}
                  >
                    {d}
                    {hasEntry && (
                      <span style={{
                        position: "absolute",
                        bottom: "1px",
                        right: "2px",
                        fontSize: "0.5rem",
                        color: statusColor(entryInfo.audit.status),
                        lineHeight: 1,
                      }}>
                        ●
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Entry cards ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {loading && (
            <div style={{ fontSize: "0.9rem", color: C.inkLight, padding: "2rem 0" }}>
              Loading {monthInfo?.name} data…
            </div>
          )}
          {error && (
            <div style={{ fontSize: "0.9rem", color: C.red, padding: "2rem 0" }}>
              Error loading data: {error}
            </div>
          )}
          {!hasData(activeMonth) && (
            <div style={{
              fontSize: "0.9rem",
              color: C.inkLight,
              padding: "3rem 0",
              textAlign: "center",
              fontStyle: "italic",
            }}>
              No data file exists for {monthInfo?.name}.
              <br />
              <span style={{ fontSize: "0.78rem" }}>
                Create <code style={{ fontFamily: "monospace", fontSize: "0.82em" }}>
                  src/data/menaion/{monthInfo?.name.toLowerCase()}.js
                </code> and add a loader to <code style={{ fontFamily: "monospace", fontSize: "0.82em" }}>_menaionLoaders</code>.
              </span>
            </div>
          )}
          {!loading && !error && hasData(activeMonth) && entries.length === 0 && monthData && (
            <div style={{
              fontSize: "0.9rem",
              color: C.inkLight,
              padding: "3rem 0",
              textAlign: "center",
              fontStyle: "italic",
            }}>
              No entries encoded for {monthInfo?.name} yet.
            </div>
          )}
          {entries.map(({ key, entry, audit }) => (
            <div key={key} ref={el => entryRefs.current[key] = el}>
              <EntryCard dateKey={key} entry={entry} audit={audit} stickyTop={headerHeight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
