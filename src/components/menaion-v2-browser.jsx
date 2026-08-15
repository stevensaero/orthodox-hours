// menaion-v2-browser.jsx — the Menaion V2 data browser
// ─────────────────────────────────────────────────────────────────────────────
// menaion_v2_spec.md §8. Hosts two mutually exclusive surfaces over one data
// set: `reading` (the bound page) and `audit` (§8.1 — the schema walk).
//
// STYLING IS DELIBERATELY IDENTICAL to octoechos-v2-browser.jsx — the same C
// palette, navBtn/railLabel/railItem/drawerChip factories, the same sticky
// header and 720px rail/drawer breakpoint, the same badge semantics
// (gold = registered, amber = warning, red = hard-fail, green = good). The two
// books must read as one tool. Any divergence here is a bug, not a variation.
//
// §8.1 CONTRACT: the viewer NEVER enumerates fields in component code. It walks
// validated data generically; the presentation registry supplies hints only. A
// field with no registry entry renders through the generic fallback, visibly
// badged "unregistered field" — the registry can make a field look good, it can
// never make one invisible. This inverts V1's whitelist, whose default for new
// data was INVISIBLE.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
import { MONTH_LOADERS, MONTH_LABELS, MONTHS, loadMenaionV2General } from '../data/menaion_v2/index.js';
import { registryLookup, SERVICE_HEADINGS, SERVICE_ORDER } from '../data/menaion_v2/presentation.js';
import { ANCHOR_RE, SERVICES } from '../data/menaion_v2/schema_menaion_v2.js';
import { ReadingContext, RCommemoration } from './menaion-v2-reading.jsx';

// ── palette — IDENTICAL to octoechos-v2-browser.jsx ──────────────────────────
const C = {
  parchment: "#FAF6EE",
  ink: "#1C1008",
  inkMid: "#3D3020",
  inkLight: "#9A8A70",
  gold: "#8B6914",
  goldLight: "#D4C49A",
  goldFaint: "rgba(139,105,20,0.06)",
  goldMid: "rgba(139,105,20,0.15)",
  border: "#E8DEC8",
  green: "#2D6A2E",
  amber: "#A67C00",
  red: "#A03030",
};

const AuditContext = createContext({ audit: false, prefix: '' });

const _cache = {};
async function loadMonth(mm) {
  if (_cache[mm]) return _cache[mm];
  const loader = MONTH_LOADERS[mm];
  if (!loader) return null;
  const data = await loader();
  _cache[mm] = data;
  return data;
}

// ── anchor codec (§10.2) ─────────────────────────────────────────────────────
// Anchor ids contain [ and ], which encodeURIComponent percent-encodes — so a
// naive emitter could never match its own ids. Writing and reading go through
// ONE pair of functions, exported for the Hours tool's link emitter.
export const encodeAnchor = (p) =>
  encodeURIComponent(p).replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/%2E/g, '.');
export const decodeAnchor = (h) => decodeURIComponent(h);

// ── small chrome pieces — mirrored from the Octoechos browser ────────────────
function Badge({ color, title, children }) {
  return (
    <span title={title} style={{
      display: "inline-block", fontSize: "0.62rem", letterSpacing: "0.04em",
      padding: "1px 5px", marginLeft: "5px", borderRadius: "3px",
      border: `1px solid ${color}`, color, background: "#fff", verticalAlign: "middle",
    }}>{children}</span>
  );
}

function RawView({ value }) {
  return (
    <pre style={{
      fontFamily: "ui-monospace, Menlo, monospace", fontSize: "0.68rem", color: C.inkMid,
      background: C.goldFaint, border: `1px dashed ${C.goldLight}`, borderRadius: "4px",
      padding: "6px 8px", margin: "4px 0", whiteSpace: "pre-wrap", overflowX: "auto",
    }}>{JSON.stringify(value, null, 2)}</pre>
  );
}

const isTextNode = v => v && typeof v === 'object' && !Array.isArray(v) && typeof v.text === 'string';
const isAbsence = v => v && typeof v === 'object' && v.absent === true;
const dialectOf = n => n?.dialect === 'oca' || /\s(\||\/\/)\s/.test(n?.text ?? '') ? 'RLE/OCA' : 'St. Sergius';

// ── audit-mode rendering of one stored position ──────────────────────────────
function TextBlock({ node, path }) {
  const { audit, prefix } = useContext(AuditContext);
  const [rawOpen, setRawOpen] = useState(false);
  const showRaw = audit || rawOpen;
  const full = prefix + path;

  return (
    <div id={full} title={node.src ? `${node.src.file} — ${node.src.locus}` : undefined}
         style={{ margin: "6px 0", paddingLeft: "8px", borderLeft: `2px solid ${C.goldMid}` }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: C.ink, lineHeight: 1.55 }}>
        {node.text}
      </div>
      <div style={{ marginTop: "3px", lineHeight: 1.9 }}>
        {node.tier === undefined
          ? <Badge color={C.red} title="Amendment D: tier is mandatory. Absence is a hard-fail, not 'unpointed'.">TIER MISSING</Badge>
          : <Badge color={C.gold}>Tier {node.tier}</Badge>}
        <Badge color={C.inkLight}>{dialectOf(node)}</Badge>
        {node.type && <Badge color={C.green} title="Typed closer — the source's own label, not flattened into a field name (§5.8)">{node.type}</Badge>}
        {node.label && <Badge color={C.inkMid}>{Array.isArray(node.label) ? node.label.join(' + ') : node.label}</Badge>}
        {node.repeat && <Badge color={C.amber}>×{node.repeat}</Badge>}
        {node.incipit_ref && <Badge color={C.amber} title={node.incipit_ref}>incipit →</Badge>}
        {node.director && <Badge color={C.green}>director</Badge>}
        {node.name_substituted && (
          <Badge color={C.amber} title={`General Menaion substitution (§6.2)`}>
            {node.name_substituted.placeholder} → {node.name_substituted.value}
          </Badge>
        )}
        {node.verified_sites && (
          <Badge color={C.green} title={node.verified_sites.join('\n')}>
            {node.verified_sites.length} sites verified
          </Badge>
        )}
        {node.homoglyph_log && <Badge color={C.red}>homoglyphs logged</Badge>}
        <button onClick={() => setRawOpen(o => !o)} title="Raw/rendered toggle (§8.1 clause 3)"
                style={{ marginLeft: "6px", fontSize: "0.6rem", fontFamily: "Georgia, serif",
                         border: `1px solid ${C.border}`, background: "#fff", color: C.inkLight,
                         borderRadius: "3px", cursor: "pointer", padding: "0 5px" }}>
          {showRaw ? 'rendered' : 'raw'}
        </button>
      </div>
      <div style={{ fontSize: "0.66rem", color: C.inkLight, marginTop: "2px" }}>
        {node.sourceLabel && <>source label: “{node.sourceLabel}” · </>}
        {node.spec_mel && <>Spec. Mel.: “{node.spec_mel}” · </>}
        {node.src
          ? <>src: {node.src.file} — {node.src.locus}</>
          : <span style={{ color: C.red }}>src MISSING (mandatory, §2.6)</span>}
        {node.provenance_note && <> · {node.provenance_note}</>}
      </div>
      {showRaw && <RawView value={node} />}
    </div>
  );
}

function AbsenceBlock({ node, path }) {
  const { audit } = useContext(AuditContext);
  const provisional = node.basis === 'heading_scan';
  return (
    <div id={path} style={{ margin: "6px 0", paddingLeft: "8px", borderLeft: `2px solid ${provisional ? C.red : C.border}` }}>
      <span style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", fontStyle: "italic", color: C.inkLight }}>
        declared absent
      </span>
      <Badge color={provisional ? C.red : C.green}
             title="Absence is declared, never inferred (§2.10)">{node.reason}</Badge>
      <Badge color={provisional ? C.red : C.inkLight}
             title="What verification stands behind this declaration (§7.3a)">{node.basis}</Badge>
      {node.book && <Badge color={C.inkMid}>{node.book}</Badge>}
      {audit && <RawView value={node} />}
    </div>
  );
}

// ── §8.1 clause 1 — heading, or the "you forgot to register me" alarm ────────
function FieldHeading({ path, fallbackKey }) {
  const entry = registryLookup(path);
  if (entry?.hidden) return null;
  return (
    <div style={{
      fontFamily: "Georgia, serif", fontSize: "0.72rem", letterSpacing: "0.05em",
      color: entry ? C.gold : C.amber, marginTop: "12px", marginBottom: "2px",
    }}>
      {entry?.heading ?? fallbackKey}
      {!entry && (
        <Badge color={C.amber} title="No presentation-registry entry — rendered by the §8.1 generic fallback. The coverage gate demands registration for schema fields.">
          unregistered field
        </Badge>
      )}
    </div>
  );
}

// ── the recursive schema walker (§8.1 clause 1) ─────────────────────────────
function Generic({ value, path, fieldKey }) {
  if (value == null) return null;
  const entry = registryLookup(path);
  if (entry?.hidden) {
    return <div style={{ fontSize: "0.7rem", color: C.inkLight, fontStyle: "italic" }}>
      [hidden by declaration: {entry.hidden.reason}]
    </div>;
  }
  if (isAbsence(value)) return <AbsenceBlock node={value} path={path} />;
  if (isTextNode(value)) return <TextBlock node={value} path={path} />;
  if (typeof value !== 'object') {
    return <div style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: C.inkMid }}>{String(value)}</div>;
  }
  if (Array.isArray(value)) {
    return <>{value.map((v, i) => <Generic key={i} value={v} path={`${path}[${i}]`} fieldKey={fieldKey} />)}</>;
  }
  const keys = Object.entries(value)
    .filter(([k]) => k !== 'order')
    .sort(([a], [b]) => (registryLookup(`${path}.${a}`)?.order ?? 99) - (registryLookup(`${path}.${b}`)?.order ?? 99));
  return (
    <div>
      {keys.map(([k, v]) => (
        <div key={k}>
          <FieldHeading path={`${path}.${k}`} fallbackKey={k} />
          <Generic value={v} path={`${path}.${k}`} fieldKey={k} />
        </div>
      ))}
    </div>
  );
}

// ── navigation model: month → day → commemoration → service ─────────────────
function navFromPath(id) {
  const m = ANCHOR_RE.exec(id);
  if (!m) {
    if (/^(shared|general)\./.test(id)) return { audit: true };
    return {};
  }
  const [, dateKey, idx, rest] = m;
  const svc = SERVICES.find(s => rest === s || rest.startsWith(s + '.') || rest.startsWith(s + '['));
  return { mm: dateKey.slice(0, 2), dateKey, cIdx: Number(idx), svcId: svc ?? null };
}

export default function MenaionV2Browser() {
  const [mm, setMm] = useState('08');
  // The General Menaion is a BOOK, not a month — 26 full Vigil services keyed by
  // saint type and subject (§6.2). Without this axis its entries are validated,
  // gated and completely invisible, which is a §8.1 violation on the contract's
  // own terms: nothing inside the schema may be unviewable.
  const [general, setGeneral] = useState(null);
  const [generalType, setGeneralType] = useState(null);
  const [data, setData] = useState(undefined);       // undefined = loading, null = not encoded
  const [dateKey, setDateKey] = useState(null);
  const [cIdx, setCIdx] = useState(0);
  const [view, setView] = useState('reading');        // 'reading' | 'audit'
  const [mode, setMode] = useState(() => (typeof localStorage !== 'undefined' && localStorage.getItem('menRdgMode')) || 'printed');
  const [showRubrics, setShowRubrics] = useState(() => (typeof localStorage === 'undefined' || localStorage.getItem('menRdgRub') !== '0'));
  const [narrow, setNarrow] = useState(typeof window !== 'undefined' && window.innerWidth < 720);
  const [railOpen, setRailOpen] = useState(false);
  const [headerH, setHeaderH] = useState(0);
  const [q, setQ] = useState('');
  const [results, setResults] = useState(null);
  const headerRef = useRef(null);
  const audit = view === 'audit';

  // Seed the month SYNCHRONOUSLY from ?comm=MM-DD before the first fetch — the
  // V1 browser does this deliberately, to avoid a double-fetch race.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const p = new URLSearchParams(window.location.search);
    const comm = p.get('comm');
    if (comm && /^\d{2}-\d{2}$/.test(comm)) { setMm(comm.slice(0, 2)); setDateKey(comm); }
    const hash = window.location.hash ? decodeAnchor(window.location.hash.slice(1)) : '';
    if (hash) {
      const nav = navFromPath(hash);
      if (nav.audit) { setView('audit'); return; }
      if (nav.mm) { setMm(nav.mm); setDateKey(nav.dateKey); setCIdx(nav.cIdx ?? 0); }
    }
  }, []);

  useEffect(() => { loadMenaionV2General().then(g => setGeneral(g ?? {})); }, []);

  useEffect(() => {
    let live = true;
    setData(undefined);
    loadMonth(mm).then(d => { if (live) setData(d ?? null); });
    return () => { live = false; };
  }, [mm]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setNarrow(window.innerWidth < 720);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (headerRef.current) setHeaderH(headerRef.current.offsetHeight);
  });

  // Scroll to the deep-link target only once the month has actually loaded.
  useEffect(() => {
    if (!data || typeof window === 'undefined') return;
    const hash = window.location.hash ? decodeAnchor(window.location.hash.slice(1)) : '';
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) { el.scrollIntoView({ block: 'center' }); el.style.background = C.goldMid; }
  }, [data, dateKey, cIdx, view]);

  useEffect(() => { try { localStorage.setItem('menRdgMode', mode); } catch {} }, [mode]);
  useEffect(() => { try { localStorage.setItem('menRdgRub', showRubrics ? '1' : '0'); } catch {} }, [showRubrics]);

  const dates = useMemo(() => (data ? Object.keys(data).sort() : []), [data]);
  const dateObj = dateKey && data ? data[dateKey] : null;
  const comms = dateObj?.commemorations ?? [];
  const encoded = useMemo(() => new Set(dateObj?._encoded ?? []), [dateObj]);
  // A selected General Menaion type takes precedence over the date axis.
  const entry = generalType ? (general?.[generalType] ?? null) : (comms[cIdx] ?? null);
  const prefix = generalType ? `general.${generalType}.` : (dateKey ? `${dateKey}.c${cIdx}.` : '');
  const generalTypes = useMemo(() => Object.keys(general ?? {}).sort(), [general]);

  const goToday = () => {
    const d = new Date();
    const k = `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    setMm(k.slice(0, 2)); setDateKey(k); setCIdx(0); setRailOpen(false);
  };

  const runSearch = () => {
    if (!q.trim() || !data) { setResults(null); return; }
    const needle = q.toLowerCase();
    const hits = [];
    const walk = (v, p) => {
      if (v == null) return;
      if (isTextNode(v)) { if (v.text.toLowerCase().includes(needle)) hits.push({ path: p, text: v.text }); return; }
      if (typeof v !== 'object') return;
      if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${p}[${i}]`));
      Object.entries(v).forEach(([k, x]) => walk(x, `${p}.${k}`));
    };
    for (const dk of dates) (data[dk].commemorations ?? []).forEach((e, i) => walk(e, `${dk}.c${i}`));
    setResults(hits.slice(0, 200));
  };

  // ── style factories — IDENTICAL to the Octoechos browser ───────────────────
  const navBtn = (active) => ({
    fontFamily: "Georgia, serif", fontSize: "0.8rem", cursor: "pointer",
    padding: "3px 10px", borderRadius: "4px",
    border: `1px solid ${active ? C.gold : C.border}`,
    background: active ? C.goldMid : "#fff",
    color: active ? C.gold : C.inkMid, fontWeight: active ? 700 : 400,
  });
  const railLabel = { fontSize: "0.62rem", letterSpacing: "0.12em", color: C.gold, margin: "12px 0 5px" };
  const railItem = (active) => ({
    fontSize: "0.8rem", color: active ? C.gold : C.inkMid, cursor: "pointer",
    padding: "2px 8px", margin: "0 -8px", borderRadius: "4px",
    border: `1px solid ${active ? C.gold : "transparent"}`,
    background: active ? C.goldMid : "none", fontWeight: active ? 700 : 400,
  });
  const drawerChip = (active) => ({
    fontFamily: "Georgia, serif", fontSize: "0.85rem", cursor: "pointer",
    padding: "5px 14px", borderRadius: "16px",
    border: `1px solid ${active ? C.gold : C.border}`,
    background: active ? C.goldMid : "#fff",
    color: active ? C.gold : C.inkMid, fontWeight: active ? 700 : 400,
  });
  // The bound-page card and its in-card toggles — same values as the Octoechos
  // reading view. Previously the Menaion rendered straight onto the parchment
  // and put these toggles in the header as buttons, which is the most visible
  // way the two books diverged.
  const readingCard = {
    background: "#fff", border: `1px solid ${C.border}`, borderRadius: "6px",
    padding: narrow ? "16px 18px" : "26px 34px", maxWidth: "720px",
    margin: "0 auto", boxShadow: "0 1px 3px rgba(60,40,10,0.08)",
  };
  const ReadingToggles = (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", fontSize: "0.68rem", color: C.inkMid }}>
      <label style={{ cursor: "pointer" }}>
        <input type="checkbox" checked={showRubrics} onChange={e => setShowRubrics(e.target.checked)} /> Rubrics
      </label>
      <label style={{ cursor: "pointer" }}
             title="As printed shows the * / ** pointing of the bound page; clean reading sets one melodic line per row (§3.4)">
        <input type="checkbox" checked={mode === 'clean'} onChange={e => setMode(e.target.checked ? 'clean' : 'printed')} /> Clean reading
      </label>
    </div>
  );

  const railStickyStyle = narrow ? {} : {
    position: "sticky",
    top: `calc(var(--hours-return-strip-h, 0px) + ${headerH + 12}px)`,
    alignSelf: "flex-start",
    maxHeight: `calc(100vh - var(--hours-return-strip-h, 0px) - ${headerH + 24}px)`,
    overflowY: "auto",
  };

  // ── the month picker: 12 buttons, disabled where no month file exists ──────
  const MonthStrip = (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" }}>
      {MONTHS.map(k => {
        const has = !!MONTH_LOADERS[k];
        return (
          <button key={k} disabled={!has}
                  onClick={() => { setMm(k); setDateKey(null); setCIdx(0); setGeneralType(null); }}
                  title={has ? MONTH_LABELS[k] : `${MONTH_LABELS[k]} — not yet encoded`}
                  style={{ ...navBtn(k === mm), padding: "4px 0", textAlign: "center", fontSize: "0.72rem",
                           opacity: has ? 1 : 0.35, cursor: has ? "pointer" : "default" }}>
            {MONTH_LABELS[k].slice(0, 3)}
          </button>
        );
      })}
    </div>
  );

  const DayGrid = (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 26px)", gap: "3px" }}>
      {dates.map(dk => (
        <button key={dk} onClick={() => { setDateKey(dk); setCIdx(0); setGeneralType(null); setRailOpen(false); }}
                title={dk}
                style={{ ...navBtn(dk === dateKey), width: "26px", height: "26px", padding: 0,
                         textAlign: "center", fontSize: "0.7rem" }}>
          {Number(dk.slice(3))}
        </button>
      ))}
    </div>
  );

  const Rail = (
    <div style={{ width: "168px", flexShrink: 0, borderRight: narrow ? "none" : `1px solid ${C.border}`,
                  paddingRight: narrow ? 0 : "14px", ...railStickyStyle }}>
      <div style={railLabel}>MONTH</div>
      {MonthStrip}
      <div style={railLabel}>DAY</div>
      {data === undefined ? <div style={{ fontSize: "0.75rem", color: C.inkLight }}>loading…</div>
        : data === null ? <div style={{ fontSize: "0.75rem", color: C.inkLight }}>not encoded</div>
        : DayGrid}
      {comms.length > 1 && (
        <>
          <div style={railLabel}>COMMEMORATION</div>
          <div>
            {comms.map((c, i) => (
              <div key={i} onClick={() => setCIdx(i)} style={railItem(i === cIdx)}>
                {c.kind === 'saint' ? (c.title ?? '').slice(0, 28) : c.kind}
              </div>
            ))}
          </div>
        </>
      )}
      {generalTypes.length > 0 && (
        <>
          <div style={railLabel}>GENERAL MENAION</div>
          <div>
            {generalTypes.map(k => (
              <div key={k} onClick={() => { setGeneralType(k === generalType ? null : k); setRailOpen(false); }}
                   style={railItem(k === generalType)}>{k}</div>
            ))}
          </div>
        </>
      )}
      {entry && (
        <>
          <div style={railLabel}>SERVICE</div>
          <div>
            {SERVICE_ORDER.filter(s => s !== 'identity' && entry[s] !== undefined).map(s => (
              <div key={s} onClick={() => { setRailOpen(false); document.getElementById(`sec-${s}`)?.scrollIntoView({ block: 'start' }); }}
                   style={railItem(false)}>
                {SERVICE_HEADINGS[s] ?? s}
                {!encoded.has(`c${cIdx}.${s}`) && <Badge color={C.amber} title="present in data but not claimed in _encoded">?</Badge>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  const breadcrumb = generalType
    ? `General Menaion · ${generalType}`
    : `${MONTH_LABELS[mm] ?? mm}${dateKey ? ` ${Number(dateKey.slice(3))}` : ''}` +
      `${comms.length > 1 ? ` · ${entry?.kind ?? ''}` : ''}`;

  const MobileDrawer = (
    <>
      <div onClick={() => setRailOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(28,16,8,0.38)", zIndex: 40 }} />
      <div style={{
        position: "fixed", top: 0, left: 0, bottom: 0, width: "min(320px, 86vw)",
        background: C.parchment, borderRight: `1px solid ${C.goldLight}`,
        boxShadow: "2px 0 14px rgba(60,40,10,0.25)", zIndex: 41,
        padding: "14px 18px 22px", overflowY: "auto", boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
          <button onClick={() => setRailOpen(false)} style={{ ...navBtn(false), padding: "3px 9px" }}>✕</button>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: C.ink }}>Navigate</span>
        </div>
        {Rail}
        <div style={{ marginTop: "14px" }}>
          <button onClick={() => setRailOpen(false)} style={drawerChip(true)}>View →</button>
        </div>
      </div>
    </>
  );

  return (
    <AuditContext.Provider value={{ audit, prefix }}>
      <div style={{ background: C.parchment, minHeight: "100vh", padding: narrow ? "0 12px 12px" : "0 26px 18px", fontFamily: "Georgia, serif" }}>
        <div ref={headerRef} style={{
          display: "flex", alignItems: "center", gap: "10px", flexWrap: narrow ? "nowrap" : "wrap",
          borderBottom: `1px solid ${C.border}`, paddingTop: narrow ? "12px" : "18px", paddingBottom: "8px",
          position: "sticky", top: "var(--hours-return-strip-h, 0px)", zIndex: 30, background: C.parchment,
        }}>
          {narrow ? (
            <>
              <button onClick={() => setRailOpen(o => !o)} style={{ ...navBtn(railOpen), padding: "4px 10px", fontSize: "1.05rem", lineHeight: 1 }} title="Navigate">☰</button>
              <span style={{ flex: 1, minWidth: 0, fontSize: "0.92rem", fontWeight: 700, color: C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {view === 'reading' ? breadcrumb : '§8.1 Audit'}
              </span>
              <button onClick={goToday} style={{ ...navBtn(false), padding: "4px 9px" }}>Today</button>
              <button onClick={() => setView(audit ? 'reading' : 'audit')} style={navBtn(audit)}>{audit ? 'Read' : 'Audit'}</button>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: "1.25rem", color: C.ink, margin: 0 }}>The Menaion</h1>
              <span style={{ fontSize: "0.68rem", color: C.inkLight, fontStyle: "italic" }}>
                {view === 'reading' ? 'the bound page, digitized' : '§8.1 audit — markers verbatim, raw objects'}
              </span>
              <form onSubmit={e => { e.preventDefault(); runSearch(); }} style={{ marginLeft: "auto", display: "flex", gap: "5px", alignItems: "center" }}>
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" style={{
                  fontFamily: "Georgia, serif", fontSize: "0.78rem", padding: "3px 8px",
                  border: `1px solid ${C.goldLight}`, borderRadius: "4px", width: "170px", background: "#fff",
                }} />
                <button type="submit" style={navBtn(false)}>Go</button>
              </form>
              {results !== null && <button onClick={() => { setResults(null); setQ(''); }} style={navBtn(false)}>Clear</button>}
              <button onClick={goToday} style={navBtn(false)}>Today</button>
              <button onClick={() => setView(audit ? 'reading' : 'audit')} style={navBtn(audit)}
                      title="Raw objects, provenance, absence basis (§8.1)">Audit</button>
            </>
          )}
        </div>

        {narrow && railOpen && MobileDrawer}

        <div style={{ display: "flex", gap: narrow ? 0 : "20px", paddingTop: "14px" }}>
          {!narrow && Rail}
          <div style={{ flex: 1, minWidth: 0, maxWidth: "720px", margin: narrow ? 0 : "0 auto" }}>
            {results !== null ? (
              <div>
                <div style={{ fontSize: "0.75rem", color: C.inkLight, marginBottom: "8px" }}>{results.length} match(es)</div>
                {results.map((r, i) => (
                  <div key={i} style={{ borderBottom: `1px solid ${C.border}`, padding: "6px 0" }}>
                    <div style={{ fontSize: "0.66rem", color: C.gold }}>{r.path}</div>
                    <div style={{ fontSize: "0.85rem", color: C.ink }}>{r.text.slice(0, 220)}</div>
                  </div>
                ))}
              </div>
            ) : generalType && entry ? (
              audit ? (
                <div>
                  <div style={{ fontSize: "0.7rem", color: C.gold, marginBottom: "6px" }}>{prefix}</div>
                  <Generic value={entry} path="" fieldKey={null} />
                </div>
              ) : (
                <ReadingContext.Provider value={{ mode, sics: {}, prefix, showRubrics }}>
                  <div style={readingCard}>
                    {ReadingToggles}
                    <RCommemoration entry={entry} path={`general.${generalType}`} />
                  </div>
                </ReadingContext.Provider>
              )
            ) : data === undefined ? (
              <div style={{ color: C.inkLight, fontStyle: "italic" }}>loading…</div>
            ) : data === null ? (
              <div style={{ color: C.inkLight, fontStyle: "italic" }}>
                <div>{MONTH_LABELS[mm]} is not yet encoded.</div>
                {generalTypes.length > 0 && (
                  <div style={{ marginTop: "10px", fontStyle: "normal" }}>
                    Encoded and readable now — the <strong>General Menaion</strong>:{' '}
                    {generalTypes.map((k, i) => (
                      <span key={k}>
                        {i > 0 && ' · '}
                        <span onClick={() => setGeneralType(k)}
                              style={{ color: C.gold, cursor: "pointer", borderBottom: `1px dotted ${C.gold}` }}>{k}</span>
                      </span>
                    ))}
                  </div>
                )}
                <div style={{ marginTop: "10px", fontSize: "0.75rem" }}>
                  To add a month: create <code>src/data/menaion_v2/{(MONTH_LABELS[mm] ?? '').toLowerCase()}.js</code> and one line in <code>MONTH_LOADERS</code>.
                </div>
              </div>
            ) : !entry ? (
              <div style={{ color: C.inkLight, fontStyle: "italic" }}>Choose a day.</div>
            ) : audit ? (
              <div>
                <div style={{ fontSize: "0.7rem", color: C.gold, marginBottom: "6px" }}>
                  {prefix}
                  {(dateObj._encoded ?? []).map(c => <Badge key={c} color={C.green}>{c}</Badge>)}
                </div>
                <Generic value={entry} path="" fieldKey={null} />
              </div>
            ) : (
              <ReadingContext.Provider value={{ mode, sics: {}, prefix, showRubrics }}>
                <div style={readingCard}>
                  {ReadingToggles}
                  <RCommemoration entry={entry} path={`${dateKey}.c${cIdx}`} />
                </div>
              </ReadingContext.Provider>
            )}
          </div>
        </div>
      </div>
    </AuditContext.Provider>
  );
}
