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

import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  registryLookup, SERVICE_ORDER, SERVICE_HEADINGS, DAY_HEADINGS,
} from '../data/octoechos_v2/presentation.js';
import {
  TONES, VESPERS_EVENINGS, COMPLINE_NIGHTS, WEEKDAY_MORNINGS,
} from '../data/octoechos_v2/schema_v2.js';

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

const isTextNode = (v) => v && typeof v === 'object' && !Array.isArray(v) && 'text' in v;

// ── generic renderer — walks the data, never enumerates fields (§12.1) ───────
function FieldHeading({ path, fallbackKey }) {
  const entry = registryLookup(path);
  if (entry?.hidden) return null;
  const unregistered = !entry;
  return (
    <div style={{
      fontFamily: "Georgia, serif", fontSize: "0.8rem", fontWeight: 700,
      color: unregistered ? C.amber : C.gold, marginTop: "10px",
      borderBottom: `1px solid ${C.border}`, paddingBottom: "1px",
    }}>
      {entry?.heading ?? fallbackKey}
      {unregistered && (
        <Badge color={C.amber} title="No presentation-registry entry — rendered by the §12.1 generic fallback; add a registry entry (coverage gate will demand it for schema fields)">
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
      .sort(([a], [b]) => (registryLookup(`${path}.${a}`)?.order ?? 99) - (registryLookup(`${path}.${b}`)?.order ?? 99));
    return (
      <div style={{ paddingLeft: "6px" }}>
        {entries.map(([k, v]) => (
          <div key={k}>
            <FieldHeading path={`${path}.${k}`} fallbackKey={k} />
            <Generic value={v} path={`${path}.${k}`} fieldKey={k} />
          </div>
        ))}
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

// ── main component ───────────────────────────────────────────────────────────
export default function OctoechosV2Browser() {
  const [tone, setTone] = useState(2);
  const [data, setData] = useState(undefined);       // undefined=loading, null=absent
  const [recurrences, setRecurrences] = useState([]);
  const [audit, setAudit] = useState(false);

  useEffect(() => { loadRecurrences().then(setRecurrences).catch(() => setRecurrences([])); }, []);
  useEffect(() => {
    let live = true;
    setData(undefined);
    loadOctoechosV2Tone(tone)
      .then(d => { if (live) setData(d); })
      .catch(() => { if (live) setData(null); });
    return () => { live = false; };
  }, [tone]);

  // Core canonical fields + service sections, in registry order; anything
  // else in the file (except housekeeping keys) renders too — nothing can be
  // silently absent.
  const coreKeys = ['troparion', 'dismissal_theotokion', 'kontakion', 'ikos'];
  const skip = new Set(['tone', '_encoded']);

  return (
    <AuditContext.Provider value={{ audit, recurrences, tonePrefix: `tone${tone}.` }}>
      <div style={{ background: C.parchment, minHeight: "100vh", padding: "18px 26px", fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap" }}>
          <h1 style={{ fontSize: "1.25rem", color: C.ink, margin: 0 }}>Octoechos V2 — Data Browser</h1>
          <span style={{ fontSize: "0.7rem", color: C.inkLight }}>
            §12 Viewer Auditability Contract · schema-driven, default-visible · truthing view (markers verbatim, §3.4)
          </span>
        </div>

        <div style={{ margin: "10px 0", display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          {TONES.map(t => (
            <button key={t} onClick={() => setTone(t)} style={{
              fontFamily: "Georgia, serif", fontSize: "0.85rem", cursor: "pointer",
              padding: "3px 10px", borderRadius: "4px",
              border: `1px solid ${t === tone ? C.gold : C.border}`,
              background: t === tone ? C.goldMid : "#fff",
              color: t === tone ? C.gold : C.inkMid, fontWeight: t === tone ? 700 : 400,
            }}>Tone {t}</button>
          ))}
          <label style={{ marginLeft: "12px", fontSize: "0.75rem", color: C.inkMid, cursor: "pointer" }}>
            <input type="checkbox" checked={audit} onChange={e => setAudit(e.target.checked)} />
            {' '}Audit mode (raw objects everywhere, §12.3)
          </label>
        </div>

        {data === undefined && <div style={{ color: C.inkLight }}>Loading…</div>}

        {data === null && (
          <div style={{
            border: `1px dashed ${C.goldLight}`, borderRadius: "6px", padding: "16px",
            color: C.inkMid, background: "#fff", maxWidth: "620px",
          }}>
            <b>Tone {tone} has no V2 data yet.</b>
            <div style={{ fontSize: "0.8rem", marginTop: "6px", color: C.inkLight }}>
              Phase 1 infrastructure ships before encoding (spec §11/§12.6): the schema,
              validators, registers, and this viewer are live so that every encoding
              session is visually auditable the day it is committed. Tone 2 is the
              reference derivation and lands first.
            </div>
          </div>
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
            {SERVICE_ORDER.filter(s => s !== 'core' && data[s] !== undefined).map(s => (
              <ServiceSection key={s} sectionKey={s} value={data[s]} />
            ))}
            {/* nothing can be silently absent: render any top-level key not
                covered above through the generic fallback */}
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
    </AuditContext.Provider>
  );
}
