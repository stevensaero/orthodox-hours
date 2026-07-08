// octoechos-v2-browser.jsx — Octoechos V2 Data Browser
// ─────────────────────────────────────────────────────────────────────────────
// The §12 Viewer Auditability Contract, Phase 1 step 1 (octoechos_v2_spec.md):
// ships BEFORE bulk encoding so every encoding session is visually auditable
// the day it is committed.
//
//   • SCHEMA-DRIVEN, DEFAULT-VISIBLE: walks the validated data generically;
//     never enumerates fields in component code. The presentation registry
//     (src/data/octoechos_v2/presentation.js) supplies hints; any field
//     without an entry renders through the GENERIC FALLBACK — visibly styled
//     "unregistered field", never silently absent. Hiding is opt-in only.
//   • AUDIT MODE: every position carries a raw/rendered toggle exposing the
//     verbatim stored object — text, tier badge, sourceLabel, src{file,locus},
//     Spec. Mel., composer/acrostic, repeat/incipit_ref, homoglyph log —
//     auditable locus-by-locus against the open PDF (amendment D).
//   • RECURRENCE CROSS-LINKS: each position shows its known_recurrences
//     partners ("also printed at … — identical/variant") so a human can
//     traverse the recombination web instead of rediscovering it.
//   • CANONICAL MODULES ONLY: no display copies (amendment F lint); nothing
//     tone-keyed is statically imported (§2.1) — tones, shared tables, and
//     the registers all load dynamically.
//
// Route: /orthodox-hours/octoechos-v2 — URL-only access (dev/truthing tool).
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import {
  registryLookup, SERVICE_ORDER, SERVICE_HEADINGS, DAY_HEADINGS,
} from '../data/octoechos_v2/presentation.js';
import {
  TONES, VESPERS_EVENINGS, COMPLINE_NIGHTS, WEEKDAY_MORNINGS,
} from '../data/octoechos_v2/schema_v2.js';
import {
  ReadingContext, DAY_SLOTS, SvcCanonical, RHeading, RRubric,
} from './octoechos-v2-reading.jsx';
import { getLiturgicalData } from './hours-tool.jsx';

// ── Color constants — matches the existing data browsers ─────────────────────
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

// ── Dynamic loaders — nothing tone-keyed is ever statically imported (§2.1) ──
// The `${name}.js` form keeps Vite's dynamic-import glob rooted at the
// octoechos_v2 directory (which already has modules), so the build stays
// green while tone/shared files land one by one; a missing module rejects at
// runtime and the caller handles it.
const _v2Cache = {};   // supports holding multiple tones at once (spec §3)
async function loadV2Module(name) {
  if (_v2Cache[name]) return _v2Cache[name];
  const mod = await import(`../data/octoechos_v2/${name}.js`);
  _v2Cache[name] = mod.default;
  return mod.default;
}
export const loadOctoechosV2Tone = (tone) => loadV2Module(`tone${tone}`);
export const loadOctoechosV2Shared = () => loadV2Module('shared');
const loadRecurrences = () => loadV2Module('known_recurrences');
const loadSics = () => loadV2Module('sic_register');

const AuditContext = createContext({ audit: false, recurrences: [], tonePrefix: '' });

// ── badges ───────────────────────────────────────────────────────────────────
function Badge({ children, color = C.gold, title }) {
  return (
    <span title={title} style={{
      display: "inline-block", fontSize: "0.62rem", fontFamily: "Georgia, serif",
      color, border: `1px solid ${color}`, borderRadius: "3px",
      padding: "0 4px", marginRight: "5px", verticalAlign: "middle",
      background: C.goldFaint, whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function dialectOf(node) {
  if (node.dialect === 'oca') return 'RLE/OCA';
  if (node.dialect === 'sergius') return 'St. Sergius';
  // derive from stored markers (§3.3: the stored dialect records provenance)
  if (typeof node.text === 'string' && (node.text.includes('|') || node.text.includes('//'))) return 'RLE/OCA';
  return 'St. Sergius';
}

// ── recurrence cross-links (§12.4) ───────────────────────────────────────────
function RecurrenceLinks({ path }) {
  const { recurrences, tonePrefix } = useContext(AuditContext);
  const full = `${tonePrefix}${path}`;
  const partners = [];
  for (const r of recurrences) {
    if (r.a === full) partners.push({ other: r.b, relation: r.relation, note: r.note });
    else if (r.b === full) partners.push({ other: r.a, relation: r.relation, note: r.note });
  }
  if (partners.length === 0) return null;
  return (
    <div style={{ marginTop: "4px" }}>
      {partners.map((p, i) => (
        <div key={i} style={{ fontSize: "0.68rem", color: C.inkLight, fontStyle: "italic" }} title={p.note}>
          ⇄ also printed at <span style={{ color: C.gold }}>{p.other}</span>
          {' — '}
          <span style={{
            color: p.relation === 'identical' ? C.green : p.relation === 'variant' ? C.amber : C.inkLight,
            fontWeight: 600,
          }}>{p.relation}</span>
        </div>
      ))}
    </div>
  );
}

// ── audit raw view ───────────────────────────────────────────────────────────
function RawView({ value }) {
  return (
    <pre style={{
      whiteSpace: "pre-wrap", fontSize: "0.7rem", background: "#f5f0e2",
      border: `1px dashed ${C.goldLight}`, borderRadius: "4px",
      padding: "6px 8px", margin: "4px 0", color: C.inkMid, overflowX: "auto",
    }}>{JSON.stringify(value, null, 2)}</pre>
  );
}

// ── a single text node (the universal hymn value shape) ──────────────────────
function TextBlock({ node, path }) {
  const { audit } = useContext(AuditContext);
  const [rawOpen, setRawOpen] = useState(false);
  const showRaw = audit || rawOpen;
  const labels = node.label ? (Array.isArray(node.label) ? node.label : [node.label]) : [];
  return (
    <div style={{ margin: "6px 0", paddingLeft: "8px", borderLeft: `2px solid ${C.goldMid}` }}>
      <div style={{ marginBottom: "2px" }}>
        <Badge color={node.tier === undefined ? C.red : C.gold}
               title="Tier — mandatory on every text node (amendment D)">
          {node.tier === undefined ? 'TIER MISSING' : `Tier ${node.tier}`}
        </Badge>
        <Badge title="Marker dialect (encoding_rule_v2.md §3.4)">{dialectOf(node)}</Badge>
        {node.type && <Badge color={C.green} title="Typed closer — the source's own label (§4.4)">{node.type}</Badge>}
        {labels.map(l => <Badge key={l} color={C.inkMid} title="§4.11 item label">{l}</Badge>)}
        {node.repeat && <Badge color={C.amber} title='"(Twice)" device (§2.7)'>×{node.repeat}</Badge>}
        {node.incipit_ref && <Badge color={C.amber} title={`Incipit reference → ${node.incipit_ref} (§2.7 — never silently resolved)`}>incipit → {node.incipit_ref}</Badge>}
        {node.homoglyph_log && <Badge color={C.red} title="§9.10 normalize-at-encode log present">homoglyphs logged</Badge>}
        {node.director && <Badge color={C.green} title="Director pointing exists (§3.5)">director</Badge>}
        <button onClick={() => setRawOpen(o => !o)} style={{
          fontSize: "0.6rem", border: `1px solid ${C.border}`, background: "none",
          color: C.inkLight, borderRadius: "3px", cursor: "pointer", padding: "0 4px",
        }} title="Raw/rendered toggle (§12.3)">{showRaw ? 'rendered' : 'raw'}</button>
      </div>
      {node.spec_mel && (
        <div style={{ fontSize: "0.72rem", color: C.inkLight, fontStyle: "italic" }}>
          Spec. Mel.: “{node.spec_mel}”
        </div>
      )}
      {node.refrain && (
        <div style={{ fontSize: "0.72rem", color: C.gold, fontStyle: "italic" }}>
          Refrain: {node.refrain}
        </div>
      )}
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: C.ink, whiteSpace: "pre-wrap" }}>
        {node.text}
      </div>
      <div style={{ fontSize: "0.66rem", color: C.inkLight, marginTop: "2px" }}>
        {node.sourceLabel && <>source label: “{node.sourceLabel}” · </>}
        {node.src
          ? <>src: {node.src.file} — {node.src.locus}</>
          : <span style={{ color: C.red }}>src MISSING (amendment D hard-fail)</span>}
        {node.provenance_note && <> · {node.provenance_note}</>}
      </div>
      <RecurrenceLinks path={path} />
      {showRaw && <RawView value={node} />}
    </div>
  );
}

const isTextNode = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.text === 'string';

// ── generic renderer — walks the data, never enumerates fields (§12.1) ───────
const ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII' };

// A path is ALARMING only when neither it nor any ancestor is registered —
// interior keys of a registered table are covered by their ancestor (§12.2's
// unit of coverage is the schema-manifest field, not every nested key).
function hasRegisteredAncestor(path) {
  let p = path;
  while (p.includes('.') || p.includes('[')) {
    p = p.replace(/(\.[^.[]+|\[\d+\])$/, '');
    if (registryLookup(p)) return true;
    if (!/[.[]/.test(p)) break;
  }
  return false;
}

function FieldHeading({ path, fallbackKey }) {
  const entry = registryLookup(path);
  if (entry?.hidden) return null;
  const covered = entry || hasRegisteredAncestor(path);
  return (
    <div style={{
      fontFamily: "Georgia, serif", fontSize: "0.8rem", fontWeight: 700,
      color: entry ? C.gold : covered ? C.inkMid : C.amber, marginTop: "10px",
      borderBottom: `1px solid ${C.border}`, paddingBottom: "1px",
    }}>
      {entry?.heading ?? fallbackKey}
      {!covered && (
        <Badge color={C.amber} title="No presentation-registry entry on this field or any ancestor — rendered by the §12.1 generic fallback; the coverage gate demands registration for schema fields">
          unregistered field
        </Badge>
      )}
    </div>
  );
}

function Generic({ value, path, fieldKey }) {
  const entry = registryLookup(path);
  if (entry?.hidden) {
    return (
      <div style={{ fontSize: "0.66rem", color: C.inkLight, fontStyle: "italic" }}>
        [hidden by declaration: {entry.hidden.reason}]
      </div>
    );
  }
  if (typeof value === 'string') {
    const rubricish = /rubric/.test(fieldKey ?? '');
    return (
      <div style={{
        fontFamily: "Georgia, serif", fontSize: "0.8rem",
        color: rubricish ? C.inkMid : C.ink,
        fontStyle: rubricish ? "italic" : "normal",
        background: rubricish ? C.goldFaint : "none",
        padding: rubricish ? "4px 8px" : 0, borderRadius: "4px", margin: "4px 0",
        whiteSpace: "pre-wrap",
      }}>{value}</div>
    );
  }
  if (isTextNode(value)) return <TextBlock node={value} path={path} />;
  if (Array.isArray(value)) {
    return (
      <div>
        {value.map((v, i) => (
          <div key={i} style={{ display: "flex", gap: "6px" }}>
            <div style={{ fontSize: "0.7rem", color: C.inkLight, paddingTop: "8px", minWidth: "18px" }}>{i + 1}.</div>
            <div style={{ flex: 1 }}><Generic value={v} path={`${path}[${i}]`} fieldKey={fieldKey} /></div>
          </div>
        ))}
      </div>
    );
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .filter(([k]) => k !== 'tone')
      .sort(([a], [b]) => (registryLookup(`${path}.${a}`)?.order ?? 99) - (registryLookup(`${path}.${b}`)?.order ?? 99));
    const toneBadge = typeof value.tone === 'number'
      ? <Badge color={C.gold} title="Tone, as printed">Tone {ROMAN[value.tone] ?? value.tone}</Badge> : null;
    return (
      <div style={{ paddingLeft: "6px" }}>
        {toneBadge && <div style={{ marginTop: "4px" }}>{toneBadge}</div>}
        {entries.map(([k, v]) => {
          const kidPath = `${path}.${k}`;
          // 'text' inside a prokeimenon/alleluia-style group: render inline,
          // no redundant heading row; 'verse'/'verses' get a muted inline label.
          if (k === 'text' && isTextNode(v)) {
            return <Generic key={k} value={v} path={kidPath} fieldKey={k} />;
          }
          if ((k === 'verse' && isTextNode(v)) || (k === 'verses' && Array.isArray(v) && !registryLookup(kidPath))) {
            return (
              <div key={k} style={{ marginLeft: "10px" }}>
                <div style={{ fontSize: "0.68rem", color: C.inkLight, fontStyle: "italic", marginTop: "4px" }}>
                  {k === 'verse' ? 'Verse' : 'Verses'}
                </div>
                <Generic value={v} path={kidPath} fieldKey={k} />
              </div>
            );
          }
          return (
            <div key={k}>
              <FieldHeading path={kidPath} fallbackKey={DAY_HEADINGS[k] ?? k} />
              <Generic value={v} path={kidPath} fieldKey={k} />
            </div>
          );
        })}
      </div>
    );
  }
  return <div style={{ fontSize: "0.75rem", color: C.inkMid }}>{String(value)}</div>;
}

// ── service sections (each Compline night / weekday is a service in its own
//    right — no "Index Tables" burial, §7) ────────────────────────────────────
function ServiceSection({ sectionKey, value }) {
  const dayKeyed = ['vespers_weekday', 'compline', 'matins_weekday', 'liturgy_weekday'].includes(sectionKey);
  const dayOrder = sectionKey === 'vespers_weekday' ? VESPERS_EVENINGS
    : sectionKey === 'compline' ? COMPLINE_NIGHTS : WEEKDAY_MORNINGS;
  return (
    <div style={{ margin: "14px 0", border: `1px solid ${C.border}`, borderRadius: "6px", padding: "10px 14px", background: "#fff" }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: C.ink }}>
        {SERVICE_HEADINGS[sectionKey] ?? sectionKey}
      </div>
      {dayKeyed ? (
        dayOrder.filter(d => value[d] !== undefined).map(d => (
          <div key={d} style={{ marginTop: "8px" }}>
            <div style={{
              fontFamily: "Georgia, serif", fontSize: "0.9rem", fontWeight: 700,
              color: C.gold, background: C.goldFaint, padding: "2px 8px", borderRadius: "4px",
            }}>
              {DAY_HEADINGS[d]}{sectionKey === 'vespers_weekday' ? ' evening' : sectionKey === 'compline' ? ' night' : ''}
            </div>
            <Generic value={value[d]} path={`${sectionKey}.${d}`} />
          </div>
        ))
      ) : (
        <Generic value={value} path={sectionKey} />
      )}
    </div>
  );
}

// ── search (reading-view spec §7 Phase B.1) ──────────────────────────────────
// Client-side index over every loaded module; READER mode normalizes pointing
// markers, quote/apostrophe glyphs, and case; EXACT BYTES searches the stored
// strings verbatim (finds sics and print variants as stored).
const normQ = (t) => t
  .replace(/\s(\*\*|\*|\/\/|\|)\s/g, ' ')
  .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  .replace(/\s+/g, ' ').toLowerCase();

function walkIndex(value, path, out) {
  if (value == null) return;
  if (typeof value === 'object' && !Array.isArray(value) && typeof value.text === 'string') {
    out.push({ path, text: value.text, file: value.src?.file, locus: value.src?.locus, type: value.type });
    return;
  }
  if (Array.isArray(value)) { value.forEach((v, i) => walkIndex(v, `${path}[${i}]`, out)); return; }
  if (typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      if (k === '_encoded' || k === 'src' || k === 'homoglyph_log') continue;
      walkIndex(v, `${path}.${k}`, out);
    }
  }
}
let _searchIndex = null;
async function buildSearchIndex() {
  if (_searchIndex) return _searchIndex;
  const out = [];
  for (const t of TONES) {
    try { walkIndex(await loadV2Module(`tone${t}`), `tone${t}`, out); } catch { /* tone absent */ }
  }
  try { walkIndex(await loadV2Module('shared'), 'shared', out); } catch { /* absent */ }
  try { walkIndex(await loadV2Module('theotokia'), 'theotokia', out); } catch { /* absent */ }
  for (const e of out) e.norm = normQ(e.text);
  _searchIndex = out;
  return out;
}

// breadcrumb + navigation target from a position path
function navFromPath(path) {
  const m = path.match(/^tone(\d)\.(.+)$/);
  if (!m) return { crumb: path.split('.').slice(0, 2).join(' · '), audit: true, path };
  const tone = Number(m[1]); const rest = m[2];
  for (const slot of DAY_SLOTS) {
    for (const svc of slot.services) {
      if (rest === svc.claim || rest.startsWith(svc.claim + '.') || rest.startsWith(svc.claim + '[')) {
        return { crumb: `Tone ${tone} → ${slot.label} → ${svc.label}`, tone, slotId: slot.id, svcId: svc.id, path };
      }
    }
  }
  return { crumb: `Tone ${tone} → canonical hymns`, tone, slotId: 'sun', svcId: null, path };
}

// ── main component — hosts the READING view (default) and the §12 AUDIT view ─
export default function OctoechosV2Browser() {
  const [tone, setTone] = useState(1);
  const [data, setData] = useState(undefined);
  const [recurrences, setRecurrences] = useState([]);
  const [sics, setSics] = useState([]);
  const [view, setView] = useState('reading');
  const [slotId, setSlotId] = useState('sat_eve');
  const [svcId, setSvcId] = useState(null);
  const [mode, setMode] = useState(() => { try { return localStorage.getItem('octoRdgMode') || 'printed'; } catch { return 'printed'; } });
  const [showRubrics, setShowRubrics] = useState(() => { try { return localStorage.getItem('octoRdgRub') !== '0'; } catch { return true; } });
  const [narrow, setNarrow] = useState(typeof window !== 'undefined' && window.innerWidth < 720);
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(0);
  const [railOpen, setRailOpen] = useState(false);
  const [q, setQ] = useState('');
  const [scope, setScope] = useState('corpus');
  const [exact, setExact] = useState(false);
  const [results, setResults] = useState(null);
  const setModePersist = (m) => { setMode(m); try { localStorage.setItem('octoRdgMode', m); } catch { /* private */ } };
  const setRubPersist = (v) => { setShowRubrics(v); try { localStorage.setItem('octoRdgRub', v ? '1' : '0'); } catch { /* private */ } };
  const audit = view === 'audit';

  const [shared, setShared] = useState(null);
  const [theotokia, setTheotokia] = useState(null);
  useEffect(() => { loadRecurrences().then(setRecurrences).catch(() => setRecurrences([])); }, []);
  useEffect(() => { loadSics().then(setSics).catch(() => setSics([])); }, []);
  useEffect(() => { loadOctoechosV2Shared().then(setShared).catch(() => setShared(null)); }, []);
  useEffect(() => { loadV2Module('theotokia').then(setTheotokia).catch(() => setTheotokia(null)); }, []);
  useEffect(() => {
    let live = true;
    setData(undefined);
    loadOctoechosV2Tone(tone).then(d => { if (live) setData(d); }).catch(() => { if (live) setData(null); });
    return () => { live = false; };
  }, [tone]);
  useEffect(() => {
    const onR = () => setNarrow(window.innerWidth < 720);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  // Measure the sticky header so the rail can pin just beneath it, whatever the
  // header wraps to at the current width (re-measures on resize and view/data change).
  useEffect(() => {
    const measure = () => setHeaderH(headerRef.current?.offsetHeight ?? 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [narrow, view, results, data]);
  useEffect(() => {
    if (!data || results) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ block: 'center' }); el.style.background = C.goldMid; }
  }, [data, slotId, svcId, view, results]);

  const sicIndex = {};
  for (const e of sics) if (e.path && !e.approx) (sicIndex[e.path] = sicIndex[e.path] ?? []).push(e);
  const roots = { shared, theotokia, [`tone${tone}`]: data };
  const encoded = new Set(data?._encoded ?? []);
  const slot = DAY_SLOTS.find(sl => sl.id === slotId) ?? DAY_SLOTS[0];
  const svc = svcId ? slot.services.find(x => x.id === svcId) : null;

  const flat = [];
  DAY_SLOTS.forEach(sl => sl.services.forEach(sv => flat.push({ slot: sl, svc: sv })));
  const flatIdx = flat.findIndex(f => f.slot.id === slotId && svcId && f.svc.id === svcId);
  const goFlat = (i) => {
    if (i < 0 || i >= flat.length) return;
    setSlotId(flat[i].slot.id); setSvcId(flat[i].svc.id); window.location.hash = '';
  };

  const goToday = () => {
    try {
      const lit = getLiturgicalData(new Date());
      setTone(lit.tone || 1);
      const dow = new Date().getDay();
      const evening = new Date().getHours() >= 15;
      const k = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][dow];
      const id = evening ? (k === 'sat' ? 'sat_eve' : `${k}_eve`) : k;
      if (DAY_SLOTS.some(sl => sl.id === id)) { setSlotId(id); setSvcId(null); }
    } catch { /* calendar unavailable */ }
  };

  const runSearch = async () => {
    const query = q.trim();
    if (!query) { setResults(null); return; }
    const idx = await buildSearchIndex();
    const needle = exact ? query : normQ(query);
    const scopePrefix = scope === 'tone' ? `tone${tone}.` : '';
    const claims = scope === 'day' ? slot.services.map(x => `tone${tone}.${x.claim}`)
      : scope === 'service' && svc ? [`tone${tone}.${svc.claim}`] : null;
    const hits = [];
    for (const e of idx) {
      if (scopePrefix && !e.path.startsWith(scopePrefix)) continue;
      if (claims && !claims.some(c => e.path === c || e.path.startsWith(c + '.') || e.path.startsWith(c + '['))) continue;
      const hay = exact ? e.text : e.norm;
      const at = hay.indexOf(needle);
      if (at === -1) continue;
      hits.push({ ...e, at });
      if (hits.length >= 80) break;
    }
    setResults(hits);
  };
  const openResult = (r) => {
    const nav = navFromPath(r.path);
    setResults(null); setQ('');
    if (nav.audit) { setView('audit'); window.location.hash = nav.path; return; }
    setView('reading'); setTone(nav.tone); setSlotId(nav.slotId); setSvcId(nav.svcId);
    window.location.hash = nav.path;
  };

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

  // On desktop the rail pins just beneath the sticky header and scrolls
  // internally if its SECTIONS list runs long. In the narrow (<720px) drawer
  // the rail lives inside an absolutely-positioned popup, so it stays static.
  const railStickyStyle = narrow ? {} : {
    position: "sticky",
    top: `calc(var(--hours-return-strip-h, 0px) + ${headerH + 12}px)`,
    alignSelf: "flex-start",
    maxHeight: `calc(100vh - var(--hours-return-strip-h, 0px) - ${headerH + 24}px)`,
    overflowY: "auto",
  };

  const Rail = (
    <div style={{ width: "168px", flexShrink: 0, borderRight: narrow ? "none" : `1px solid ${C.border}`, paddingRight: narrow ? 0 : "14px", ...railStickyStyle }}>
      <div style={railLabel}>TONE</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" }}>
        {TONES.map(t => (
          <button key={t} onClick={() => { setTone(t); setSvcId(null); setRailOpen(false); }} style={{
            ...navBtn(t === tone), padding: "4px 0", textAlign: "center", fontSize: "0.8rem",
          }}>{t}</button>
        ))}
      </div>
      <div style={railLabel}>DAY</div>
      <div>
        {DAY_SLOTS.map(sl => (
          <div key={sl.id} onClick={() => { setSlotId(sl.id); setSvcId(null); }} style={railItem(sl.id === slotId)}>{sl.label}</div>
        ))}
      </div>
      <div style={railLabel}>SERVICE</div>
      <div>
        {slot.services.map(x => (
          <div key={x.id} onClick={() => { setSvcId(x.id); setRailOpen(false); }} style={railItem(svcId === x.id)}>{x.label}</div>
        ))}
      </div>
      {svc?.sections && (
        <>
          <div style={railLabel}>SECTIONS</div>
          <div>
            {svc.sections.map(([sid, lab]) => (
              <div key={sid} onClick={() => { setRailOpen(false); document.getElementById(sid)?.scrollIntoView({ block: 'start' }); }}
                   style={{ ...railItem(false), fontSize: "0.76rem" }}>{lab}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  const coreKeys = ['troparion', 'dismissal_theotokion', 'kontakion', 'ikos'];
  const skip = new Set(['tone', '_encoded']);

  return (
    <AuditContext.Provider value={{ audit, recurrences, tonePrefix: `tone${tone}.` }}>
      <div style={{ background: C.parchment, minHeight: "100vh", padding: narrow ? "0 12px 12px" : "0 26px 18px", fontFamily: "Georgia, serif" }}>
        <div ref={headerRef} style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", borderBottom: `1px solid ${C.border}`, paddingTop: narrow ? "12px" : "18px", paddingBottom: "8px", position: "sticky", top: "var(--hours-return-strip-h, 0px)", zIndex: 30, background: C.parchment }}>
          {narrow && view === 'reading' && (
            <button onClick={() => setRailOpen(o => !o)} style={{ ...navBtn(railOpen), padding: "3px 8px" }} title="Navigation">☰</button>
          )}
          <h1 style={{ fontSize: narrow ? "1.05rem" : "1.25rem", color: C.ink, margin: 0 }}>The Octoechos</h1>
          {!narrow && (
            <span style={{ fontSize: "0.68rem", color: C.inkLight, fontStyle: "italic" }}>
              {view === 'reading' ? 'the bound page, digitized' : '§12 audit — markers verbatim, raw objects'}
            </span>
          )}
          <form onSubmit={e => { e.preventDefault(); runSearch(); }} style={{ marginLeft: "auto", display: "flex", gap: "5px", alignItems: "center" }}>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" style={{
              fontFamily: "Georgia, serif", fontSize: "0.78rem", padding: "3px 8px",
              border: `1px solid ${C.goldLight}`, borderRadius: "4px", width: narrow ? "110px" : "170px", background: "#fff",
            }} />
            <button type="submit" style={navBtn(false)}>Go</button>
          </form>
          <button onClick={goToday} style={navBtn(false)}>Today</button>
          <button onClick={() => setView(view === 'audit' ? 'reading' : 'audit')} style={navBtn(view === 'audit')}
                  title="Raw objects, provenance, recurrence links (§12)">Audit</button>
        </div>

        {results !== null && (
          <div style={{ maxWidth: "760px", margin: "14px auto" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: C.ink, fontWeight: 700 }}>“{q}” — {results.length}{results.length >= 80 ? '+' : ''} position{results.length === 1 ? '' : 's'}</span>
              <select value={scope} onChange={e => setScope(e.target.value)} style={{ fontFamily: "Georgia, serif", fontSize: "0.72rem", border: `1px solid ${C.border}`, borderRadius: "4px", background: "#fff", color: C.inkMid }}>
                <option value="corpus">Whole corpus</option>
                <option value="tone">Tone {tone} only</option>
                <option value="day">{slot.label}</option>
                {svc && <option value="service">{svc.label} only</option>}
              </select>
              <label style={{ fontSize: "0.72rem", color: C.inkMid }}>
                <input type="checkbox" checked={exact} onChange={e => setExact(e.target.checked)} /> Exact bytes
              </label>
              <button onClick={runSearch} style={navBtn(false)}>Apply</button>
              <button onClick={() => setResults(null)} style={{ ...navBtn(false), marginLeft: "auto" }}>Close</button>
            </div>
            <div style={{ fontSize: "0.66rem", color: C.inkLight, marginBottom: "8px" }}>
              {exact ? 'matching stored bytes exactly (finds sics and print variants as stored)' : 'pointing and quote marks normalized'}
            </div>
            {results.map((r, i) => {
              const nav = navFromPath(r.path);
              const start = Math.max(0, r.at - 60);
              return (
                <div key={i} onClick={() => openResult(r)} style={{
                  background: "#fff", border: `1px solid ${C.border}`, borderRadius: "6px",
                  padding: "8px 12px", marginBottom: "6px", cursor: "pointer",
                }}>
                  <div style={{ fontSize: "0.68rem", color: C.gold, marginBottom: "2px" }}>{nav.crumb}</div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: C.ink, lineHeight: 1.5 }}>
                    {start > 0 ? '…' : ''}{r.text.slice(start, r.at + 90)}{r.at + 90 < r.text.length ? '…' : ''}
                    {sicIndex[r.path] && <sup style={{ color: C.gold }} title={sicIndex[r.path].map(h => h.note).join('; ')}>※</sup>}
                  </div>
                  <div style={{ fontSize: "0.62rem", color: C.inkLight, marginTop: "2px" }}>
                    {r.file ? `${r.file} — ${r.locus}` : r.path}{r.type ? ` · ${r.type}` : ''}
                  </div>
                </div>
              );
            })}
            {results.length === 0 && <div style={{ color: C.inkLight, fontSize: "0.85rem" }}>No positions match.</div>}
          </div>
        )}

        {results === null && view === 'reading' && (
          <div style={{ display: "flex", gap: "20px", marginTop: "12px", position: "relative" }}>
            {(!narrow || railOpen) && (
              narrow ? (
                <div style={{ position: "absolute", zIndex: 5, background: C.parchment, border: `1px solid ${C.goldLight}`, borderRadius: "6px", padding: "10px 14px", boxShadow: "0 2px 8px rgba(60,40,10,0.15)" }}>
                  {Rail}
                </div>
              ) : Rail
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              {data === undefined && <div style={{ color: C.inkLight }}>Loading…</div>}
              {data === null && (
                <div style={{ border: `1px dashed ${C.goldLight}`, borderRadius: "6px", padding: "26px", background: "#fff", maxWidth: "640px", margin: "20px auto", textAlign: "center" }}>
                  <div style={{ fontSize: "1.05rem", color: C.ink, fontWeight: 700 }}>Tone {tone}</div>
                  <div style={{ fontSize: "0.85rem", color: C.inkMid, marginTop: "8px" }}>Not yet encoded — coming soon.</div>
                </div>
              )}
              {data && (
                <ReadingContext.Provider value={{ mode, sics: sicIndex, roots, tonePrefix: `tone${tone}.`, showRubrics }}>
                  <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: "6px", padding: narrow ? "16px 18px" : "26px 34px", maxWidth: "720px", margin: "0 auto", boxShadow: "0 1px 3px rgba(60,40,10,0.08)" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", fontSize: "0.68rem", color: C.inkMid }}>
                      <label style={{ cursor: "pointer" }}><input type="checkbox" checked={showRubrics} onChange={e => setRubPersist(e.target.checked)} /> Rubrics</label>
                      <label style={{ cursor: "pointer" }} title="As printed shows the * / ** pointing of the bound page; clean reading sets one melodic line per row (§3.4)">
                        <input type="checkbox" checked={mode === 'clean'} onChange={e => setModePersist(e.target.checked ? 'clean' : 'printed')} /> Clean reading
                      </label>
                    </div>
                    <div style={{ textAlign: "center", letterSpacing: "0.18em", color: C.gold, fontSize: "0.85rem" }}>TONE {tone}</div>
                    <div style={{ textAlign: "center", fontSize: "0.78rem", color: C.inkLight, marginBottom: "8px" }}>{slot.label}{svc ? ` — ${svc.label}` : ''}</div>
                    {!svc && <SvcCanonical d={data} />}
                    {!svc && <div style={{ textAlign: "center", fontSize: "0.78rem", color: C.inkLight, marginTop: "14px" }}>Choose a service to open its page.</div>}
                    {svc && !encoded.has(svc.claim) && (
                      <div style={{ textAlign: "center", padding: "20px 0" }}>
                        <div style={{ fontSize: "0.9rem", color: C.inkMid }}>{svc.label} — not yet encoded for Tone {tone}.</div>
                      </div>
                    )}
                    {svc && encoded.has(svc.claim) && svc.render(data)}
                    {svc && flatIdx >= 0 && (
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "18px", borderTop: `1px solid ${C.border}`, paddingTop: "8px", fontSize: "0.72rem" }}>
                        <span onClick={() => goFlat(flatIdx - 1)} style={{ color: flatIdx > 0 ? C.gold : C.border, cursor: flatIdx > 0 ? "pointer" : "default" }}>
                          {flatIdx > 0 ? `← ${flat[flatIdx - 1].slot.label} · ${flat[flatIdx - 1].svc.label}` : ''}
                        </span>
                        <span onClick={() => goFlat(flatIdx + 1)} style={{ color: flatIdx < flat.length - 1 ? C.gold : C.border, cursor: flatIdx < flat.length - 1 ? "pointer" : "default" }}>
                          {flatIdx < flat.length - 1 ? `${flat[flatIdx + 1].slot.label} · ${flat[flatIdx + 1].svc.label} →` : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </ReadingContext.Provider>
              )}
            </div>
          </div>
        )}

        {results === null && view === 'audit' && (
          <div style={{ marginTop: "12px" }}>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
              {TONES.map(t => <button key={t} onClick={() => setTone(t)} style={navBtn(t === tone)}>Tone {t}</button>)}
            </div>
            {data === undefined && <div style={{ color: C.inkLight }}>Loading…</div>}
            {data === null && (
              <div style={{ border: `1px dashed ${C.goldLight}`, borderRadius: "6px", padding: "16px", color: C.inkMid, background: "#fff", maxWidth: "620px" }}>
                <b>The Tone {tone} chapter file has no V2 data yet.</b>
              </div>
            )}
            {shared && (
              <AuditContext.Provider value={{ audit, recurrences, tonePrefix: '' }}>
                <div style={{ margin: "14px 0", border: `1px solid ${C.border}`, borderRadius: "6px", padding: "10px 14px", background: "#fff" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: C.ink }}>Shared tables (§5) — tone-independent; each table re-verified per tone as encoding proceeds</div>
                  {Object.keys(shared).map(k => (
                    <div key={k}>
                      <FieldHeading path={`shared.${k}`} fallbackKey={k} />
                      <Generic value={shared[k]} path={`shared.${k}`} fieldKey={k} />
                    </div>
                  ))}
                </div>
              </AuditContext.Provider>
            )}
            {theotokia && (
              <AuditContext.Provider value={{ audit, recurrences, tonePrefix: '' }}>
                <div style={{ margin: "14px 0", border: `1px solid ${C.border}`, borderRadius: "6px", padding: "10px 14px", background: "#fff" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: C.ink }}>Common Theotokia (§4.12) — Theotokia.pdf, all eight tones; each cell a print site</div>
                  {Object.keys(theotokia).map(k => (
                    <div key={k}>
                      <FieldHeading path={`theotokia.${k}`} fallbackKey={k} />
                      <Generic value={theotokia[k]} path={`theotokia.${k}`} fieldKey={k} />
                    </div>
                  ))}
                </div>
              </AuditContext.Provider>
            )}
            {data && (
              <>
                <div style={{ fontSize: "0.72rem", color: C.inkLight, margin: "4px 0 10px" }}>
                  _encoded claims: {(data._encoded ?? []).length
                    ? (data._encoded ?? []).map(c => <Badge key={c} color={C.green}>{c}</Badge>)
                    : '(none yet)'}
                </div>
                <div style={{ margin: "14px 0", border: `1px solid ${C.border}`, borderRadius: "6px", padding: "10px 14px", background: "#fff" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: C.ink }}>{SERVICE_HEADINGS.core}</div>
                  {coreKeys.filter(k => data[k] !== undefined).map(k => (
                    <div key={k}>
                      <FieldHeading path={k} fallbackKey={k} />
                      <Generic value={data[k]} path={k} fieldKey={k} />
                    </div>
                  ))}
                </div>
                {SERVICE_ORDER.filter(x => x !== 'core' && data[x] !== undefined).map(x => (
                  <ServiceSection key={x} sectionKey={x} value={data[x]} />
                ))}
                {Object.keys(data)
                  .filter(k => !skip.has(k) && !coreKeys.includes(k) && !SERVICE_ORDER.includes(k))
                  .map(k => (
                    <div key={k}>
                      <FieldHeading path={k} fallbackKey={k} />
                      <Generic value={data[k]} path={k} fieldKey={k} />
                    </div>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </AuditContext.Provider>
  );
}
