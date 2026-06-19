// menaion-browser.jsx — Menaion Data Browser
// Dev/truthing tool for proofing encoded Menaion entries.
// Route: /orthodox-hours/menaion — URL-only access, not linked from main UI.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { auditMenaionEntry, auditSummary } from '../lib/audit.js';
import { PointScoreControls, normalizeSergius } from './point-score-controls.jsx';
import FieldEditor from './field-editor.jsx';
import { menaionCtx, fieldPath } from './editor-adapters.js';

// Height (px) of the sticky "← Hours Tool" return strip when opened from the
// tool, published as a CSS var by hours-return-strip.jsx (0 when no strip). The
// menaion header pins below the strip, so sticky offsets and scroll targets must
// clear strip + header, not just the header.
function stripOffsetPx() {
  try {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hours-return-strip-h')) || 0;
  } catch { return 0; }
}
const STRIP_VAR = "var(--hours-return-strip-h, 0px)";

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

function statusColor(status, needsReview) {
  if (status === 'complete' && needsReview) return C.amber;  // complete but pointing review needed
  if (status === 'complete') return C.green;
  return C.red;  // partial and structural both red
}

function statusIcon(status, needsReview) {
  if (status === 'complete' && needsReview) return '⚑';
  if (status === 'complete') return '•';
  return '✗';
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
function TextBlock({ tone, text, specMel, label, verse, repeatIndex, editFile, editPath }) {
  const [editing, setEditing] = useState(false);
  const canEdit = import.meta.env.DEV && editFile && editPath && typeof text === 'string';
  // Detect pointing dialect for source badge
  const hasSergius = typeof text === 'string' && (/ \* /.test(text) || / \*\* /.test(text));
  const hasOCA = typeof text === 'string' && (/\s\|\s/.test(text) || /\s\/\/\s/.test(text));
  const dialectBadge = hasSergius
    ? { label: 'St. Sergius', color: C.amber }
    : hasOCA
      ? { label: 'RLE/OCA', color: C.green }
      : null;
  // Normalize for display — render line breaks regardless of dialect
  const displayText = hasSergius ? normalizeSergius(text) : text;
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
          {dialectBadge && (
            <span style={{
              marginLeft: "0.5rem", fontSize: "0.7rem", fontFamily: "monospace",
              color: dialectBadge.color, opacity: 0.85,
            }}>
              [{dialectBadge.label}]
            </span>
          )}
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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          flex: 1,
          minWidth: 0,
          fontSize: "0.88rem",
          color: C.ink,
          lineHeight: 1.65,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}>
          {text || <span style={{ color: C.goldLight, fontStyle: "italic" }}>—</span>}
        </div>
        <PointScoreControls text={text} tone={tone} label={label} />
        {canEdit && (
          <button
            onClick={() => setEditing((v) => !v)}
            title="Edit this field (dev only)"
            style={{
              flexShrink: 0, alignSelf: 'flex-start', padding: '2px 8px', fontSize: '0.72rem', cursor: 'pointer',
              border: '1px solid #C9BC9A', borderRadius: '3px',
              background: editing ? '#3B4A6B' : 'transparent', color: editing ? '#fff' : '#5C4A1E',
            }}
          >✎ edit</button>
        )}
      </div>
      {canEdit && editing && (
        <FieldEditor
          datasetId="menaion"
          file={editFile}
          path={editPath}
          value={text}
          onClose={() => setEditing(false)}
          onSaved={() => setEditing(false)}
        />
      )}
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

// ── Entry Hymnography (shared renderer for primary + secondary) ──────────────

// Returns pointing status for a stichera array:
//   'pointed'   — at least one text item has markers (all should)
//   'unpointed' — no text items have markers (gold review flag)
//   null        — no text items at all (markers or empty)
function sticheraPointingStatus(items) {
  if (!Array.isArray(items)) return null;
  const textItems = items.filter(s => s && s.text);
  if (textItems.length === 0) return null;
  const hasAnyMarker = textItems.some(s =>
    / \* /.test(s.text) || / \*\* /.test(s.text) ||
    /\s\|\s/.test(s.text) || /\s\/\/\s/.test(s.text)
  );
  return hasAnyMarker ? 'pointed' : 'unpointed';
}

function EntryHymnography({ entry, editCtx }) {
  // Stichera count integrity: declared count vs. items in the array.
  // items.length === count → exact (data mirrors rubric slot-for-slot)
  // items.length < count, markers present → rubric-carrying (count = unique + repeats)
  // items.length < count, count % n === 0 → Fekula uniform doubling (assembler repeats each)
  // stichera_lord_i_call_note present → seasonal conditional, note replaces integrity check
  // items.length < count, no markers, not divisible → mismatch
  // items.length > count → overcounting
  const licItems = Array.isArray(entry.stichera_lord_i_call) ? entry.stichera_lord_i_call : null;
  const licCount = entry.stichera_lord_i_call_count;
  const licNote = entry.stichera_lord_i_call_note;
  const licIntegrity = (() => {
    if (!licItems || licCount === undefined) return null;
    // Seasonal conditional: note supersedes count check
    if (licNote) return { ok: 'note', note: licNote };
    const n = licItems.length;
    const markerCount = licItems.filter(s => s && !s.text && (typeof s.repeatIndex === 'number' || s.repeat)).length;
    const textCount = n - markerCount;
    if (n === licCount) return { ok: true, note: `${n} items = count ✓` };
    if (n < licCount && markerCount > 0 && n + markerCount === licCount)
      return { ok: true, note: `${textCount} unique + ${markerCount} repeat marker${markerCount > 1 ? 's' : ''} = ${n} items (count ${licCount}) ✓` };
    if (n < licCount && markerCount === 0 && licCount % n === 0)
      return { ok: true, note: `${n} unique × ${licCount / n} = ${licCount} slots — Fekula uniform doubling (assembler repeats each in order) ✓` };
    if (n < licCount)
      return { ok: false, note: `${n} items, count ${licCount} — ${licCount - n} slot${licCount - n > 1 ? 's' : ''} unaccounted; add repeat markers or correct count` };
    if (n > licCount)
      return { ok: false, note: `${n} items exceeds count ${licCount} — correct count or remove items` };
    return null;
  })();

  return (
    <>\n      {/* ── Lord I Have Cried Stichera ── */}
      <SectionHeader>Vespers — Lord I Have Cried</SectionHeader>
      {entry.stichera_lord_i_call_count !== undefined && (
        <FieldRow label="stichera count" value={entry.stichera_lord_i_call_count} />
      )}
      {licIntegrity && (
        <div style={{ fontSize: "0.78rem", marginBottom: "0.4rem", padding: "2px 8px",
          color: licIntegrity.ok === 'note' ? C.amber
               : licIntegrity.ok ? "#4A7A3A" : "#B43C1E",
          background: licIntegrity.ok === 'note' ? "rgba(166,124,0,0.08)"
                    : licIntegrity.ok ? "rgba(74,122,58,0.08)" : "rgba(180,60,30,0.08)",
          border: `1px solid ${licIntegrity.ok === 'note' ? "rgba(166,124,0,0.35)"
                              : licIntegrity.ok ? "rgba(74,122,58,0.3)" : "rgba(180,60,30,0.3)"}`,
          borderRadius: "3px", lineHeight: 1.5 }}>
          {licIntegrity.ok === 'note' ? "⚑ Rubrical conditional — " : licIntegrity.ok ? "✓ " : "✗ "}
          {licIntegrity.note}
        </div>
      )}
      {entry.stichera_lord_i_call && Array.isArray(entry.stichera_lord_i_call) ? (
        <>
          {sticheraPointingStatus(entry.stichera_lord_i_call) === 'unpointed' && (
            <div style={{ fontSize: "0.78rem", marginBottom: "0.4rem", padding: "2px 8px",
              color: C.amber, background: "rgba(166,124,0,0.07)",
              border: "1px solid rgba(166,124,0,0.3)", borderRadius: "3px" }}>
              ⚑ No pointing markers in any LIC sticheron — review PDF and add * /** or | // where source prints them
            </div>
          )}
          {entry.stichera_lord_i_call.map((s, i) => (
            <TextBlock
              key={i}
              tone={s.tone}
              text={s.text}
              specMel={s.spec_mel}
              label={`[${i + 1}]`}
              repeatIndex={s.repeatIndex}
              editFile={editCtx?.file}
              editPath={fieldPath(editCtx, 'stichera_lord_i_call', i, 'text')}
            />
          ))}
        </>
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>Not encoded</div>
      )}
      {entry.stichera_glory && (
        <TextBlock
          tone={entry.stichera_glory.tone}
          text={entry.stichera_glory.text}
          label="Glory (Doxasticon)"
          editFile={editCtx?.file}
          editPath={fieldPath(editCtx, 'stichera_glory', 'text')}
        />
      )}
      {entry.stichera_glory === null && <FieldRow label="stichera_glory" value={null} />}
      {entry.lic_theotokion && (
        <TextBlock
          tone={entry.lic_theotokion.tone}
          text={entry.lic_theotokion.text}
          label="Both now (Theotokion)"
          editFile={editCtx?.file}
          editPath={fieldPath(editCtx, 'lic_theotokion', 'text')}
        />
      )}
      {entry.lic_theotokion === null && <FieldRow label="lic_theotokion" value={null} />}

      {/* ── Vespers Aposticha ── */}
      {(entry.stichera_aposticha || entry.aposticha_glory) && (
        <>
          <SectionHeader>Vespers — Aposticha</SectionHeader>
          {entry.stichera_aposticha && Array.isArray(entry.stichera_aposticha) && (
            <>
              {sticheraPointingStatus(entry.stichera_aposticha) === 'unpointed' && (
                <div style={{ fontSize: "0.78rem", marginBottom: "0.4rem", padding: "2px 8px",
                  color: C.amber, background: "rgba(166,124,0,0.07)",
                  border: "1px solid rgba(166,124,0,0.3)", borderRadius: "3px" }}>
                  ⚑ No pointing markers in any aposticha sticheron — review PDF and add * /** or | // where source prints them
                </div>
              )}
              {entry.stichera_aposticha.map((s, i) => (
                <TextBlock key={i} tone={s.tone} text={s.text} verse={s.verse} label={`[${i + 1}]`}
                  editFile={editCtx?.file} editPath={fieldPath(editCtx, 'stichera_aposticha', i, 'text')} />
              ))}
            </>
          )}
          {entry.aposticha_glory && (
            <TextBlock
              tone={entry.aposticha_glory.tone}
              text={entry.aposticha_glory.text}
              label="Glory (Doxasticon)"
              editFile={editCtx?.file}
              editPath={fieldPath(editCtx, 'aposticha_glory', 'text')}
            />
          )}
          {entry.aposticha_both_now && (
            <TextBlock
              tone={entry.aposticha_both_now.tone}
              text={entry.aposticha_both_now.text}
              label="Both now (Theotokion)"
              editFile={editCtx?.file}
              editPath={fieldPath(editCtx, 'aposticha_both_now', 'text')}
            />
          )}
        </>
      )}

      {/* ── Liturgy Propers ── */}
      <SectionHeader>Liturgy Propers</SectionHeader>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem" }}>
        <FieldRow label="feast_e" value={entry.feast_e} mono />
        <FieldRow label="feast_g" value={entry.feast_g} mono />
      </div>
      <FieldRow label="prokeimenon_tone" value={entry.prokeimenon_tone} />
      {entry.prokeimenon_text && <FieldRow label="prokeimenon_text" value={entry.prokeimenon_text} />}
      {entry.prokeimenon_stichos && <FieldRow label="prokeimenon_stichos" value={entry.prokeimenon_stichos} />}
      <FieldRow label="alleluia_tone" value={entry.alleluia_tone} />
      {entry.alleluia_verse && <FieldRow label="alleluia_verse" value={entry.alleluia_verse} />}
      {entry.alleluia_stichos && <FieldRow label="alleluia_stichos" value={entry.alleluia_stichos} />}
      {entry.communion_verse && <FieldRow label="communion_verse" value={entry.communion_verse} />}

      {/* ── Paroemias ── */}
      {(entry.paroemia_1 || entry.paroemia_2 || entry.paroemia_3) && (
        <>
          <SectionHeader>Vespers — Paroemias</SectionHeader>
          <FieldRow label="paroemia_1" value={entry.paroemia_1} />
          <FieldRow label="paroemia_2" value={entry.paroemia_2} />
          <FieldRow label="paroemia_3" value={entry.paroemia_3} />
        </>
      )}

      {/* ── Vespers — Litiya ── */}
      {entry.has_litya && (
        <>
          <SectionHeader>Vespers — Litiya</SectionHeader>
          {entry.litya_stichera && Array.isArray(entry.litya_stichera) && entry.litya_stichera.length > 0 ? (
            entry.litya_stichera.map((s, i) => (
              <TextBlock key={i} tone={s.tone} text={s.text} label={`[${i + 1}]`}
                editFile={editCtx?.file} editPath={fieldPath(editCtx, 'litya_stichera', i, 'text')} />
            ))
          ) : entry.litya_stichera && Array.isArray(entry.litya_stichera) && entry.litya_stichera.length === 0 ? (
            <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>
              No dedicated Litiya stichera in Menaion PDF (Litiya petitions are fixed text)
            </div>
          ) : (
            <div style={{ fontSize: "0.85rem", color: C.red, fontStyle: "italic" }}>
              litya_stichera — not encoded (has_litya is true)
            </div>
          )}
          {entry.litya_glory ? (
            <TextBlock
              tone={entry.litya_glory.tone}
              text={entry.litya_glory.text}
              label="Glory (Doxasticon)"
              editFile={editCtx?.file}
              editPath={fieldPath(editCtx, 'litya_glory', 'text')}
            />
          ) : entry.litya_stichera ? null : (
            <div style={{ fontSize: "0.78rem", color: C.red, fontStyle: "italic", marginTop: "0.25rem" }}>
              litya_glory — not encoded
            </div>
          )}
          {entry.litya_both_now ? (
            <TextBlock
              tone={entry.litya_both_now.tone}
              text={entry.litya_both_now.text}
              label="Both now (Theotokion)"
              editFile={editCtx?.file}
              editPath={fieldPath(editCtx, 'litya_both_now', 'text')}
            />
          ) : entry.litya_stichera ? null : (
            <div style={{ fontSize: "0.78rem", color: C.red, fontStyle: "italic", marginTop: "0.25rem" }}>
              litya_both_now — not encoded
            </div>
          )}
        </>
      )}

      {/* ── Matins ── */}
      {(entry.matins_gospel || entry.beatitudes_source) && (
        <>
          <SectionHeader>Matins</SectionHeader>
          {entry.matins_gospel && <FieldRow label="matins_gospel" value={entry.matins_gospel} />}
          {entry.beatitudes_source && <FieldRow label="beatitudes_source" value={entry.beatitudes_source} />}
          {entry.beatitudes_troparia && Array.isArray(entry.beatitudes_troparia) && (
            <div style={{ marginTop: "0.4rem" }}>
              <div style={{ fontSize: "0.75rem", color: C.inkLight, marginBottom: "0.25rem" }}>
                Beatitudes troparia ({entry.beatitudes_troparia.length})
              </div>
              {entry.beatitudes_troparia.map((t, i) => (
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
    </>
  );
}

// ── Entry Card ──────────────────────────────────────────────────────────────
function EntryCard({ dateKey, entry, audit, stickyTop }) {
  // Handle array entries (double commemorations)
  const isArray = Array.isArray(entry);
  const primary = isArray ? entry[0] : entry;
  const secondary = isArray ? entry.slice(1) : [];
  const primaryCtx = import.meta.env.DEV ? menaionCtx(dateKey, 0, isArray) : null; // in-context edit (dev-only)

  // Track which sub-entry is currently scrolled into view (multi-entry dates only)
  const [visibleIdx, setVisibleIdx] = useState(0);
  const subEntryRefs = useRef([]);

  useEffect(() => {
    if (!isArray || entry.length < 2) return;
    const pick = () => {
      const els = subEntryRefs.current.filter(Boolean);
      if (els.length === 0) return;
      const threshold = stickyTop + stripOffsetPx() + 8; // px below top of viewport to treat as "header cleared"
      // Walk from last to first; the last one whose top is at or above threshold wins.
      let idx = 0;
      for (let i = 0; i < els.length; i++) {
        const top = els[i].getBoundingClientRect().top;
        if (top <= threshold) idx = i;
      }
      setVisibleIdx(idx);
    };
    pick(); // run once on mount
    window.addEventListener('scroll', pick, { passive: true });
    return () => window.removeEventListener('scroll', pick);
  }, [isArray, entry.length, stickyTop]);

  const visibleSaint = isArray ? (entry[visibleIdx]?.saint || primary.saint) : primary.saint;

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* ── Sticky Header ── */}
      <div style={{
        position: "sticky",
        top: "calc(" + STRIP_VAR + " + " + stickyTop + "px)",
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
              {visibleSaint}
            </span>
            {isArray && (
              <span style={{ marginLeft: "0.5rem", fontSize: "0.78rem", color: C.amber }}>
                [{visibleIdx + 1} of {entry.length}]
              </span>
            )}
          </div>
          <div style={{
            fontSize: "0.82rem",
            fontWeight: 600,
            color: statusColor(audit.status, audit.needsReview),
            whiteSpace: "nowrap",
          }}>
            {statusIcon(audit.status, audit.needsReview)} {audit.status === 'complete' && audit.needsReview ? 'review pointing' : audit.status}
          </div>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div
        ref={el => { subEntryRefs.current[0] = el; }}
        style={{
        background: "#fff",
        border: `1px solid ${C.border}`,
        borderTop: "none",
        borderRadius: "0 0 6px 6px",
        padding: "0.75rem 1.25rem 1.25rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>

      {/* ── Audit details ── */}
      {(audit.missing.length > 0 || audit.hasPlaceholder) && (
        audit.subAudits ? (
          // Multi-entry: show per-sub-entry breakdown so gaps are attributed correctly
          audit.subAudits.map((sub, idx) => {
            if (sub.missing.length === 0 && !sub.hasPlaceholder) return null;
            const e = isArray ? entry[idx] : entry;
            return (
              <div key={idx} style={{
                fontSize: "0.78rem", color: C.red,
                background: "rgba(185,74,58,0.06)", padding: "0.5rem 0.7rem",
                borderRadius: "4px", borderLeft: `3px solid ${C.red}`,
                marginBottom: "0.5rem",
              }}>
                <div style={{ fontWeight: 600, marginBottom: "0.3rem" }}>
                  [{idx + 1}] {e?.saint?.slice(0, 40)} — {sub.missing.length} missing field{sub.missing.length !== 1 ? 's' : ''}
                  {sub.hasPlaceholder && ' · has placeholder text'}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                  {sub.missing.map(f => (
                    <span key={f} style={{
                      display: "inline-block", fontSize: "0.72rem", fontFamily: "monospace",
                      background: "rgba(185,74,58,0.1)", border: "1px solid rgba(185,74,58,0.4)",
                      borderRadius: "3px", padding: "1px 6px",
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{
            fontSize: "0.78rem", color: C.red,
            background: "rgba(185,74,58,0.06)", padding: "0.5rem 0.7rem",
            borderRadius: "4px", borderLeft: `3px solid ${C.red}`,
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
                  display: "inline-block", fontSize: "0.72rem", fontFamily: "monospace",
                  background: "rgba(185,74,58,0.1)", border: "1px solid rgba(185,74,58,0.4)",
                  borderRadius: "3px", padding: "1px 6px",
                }}>{f}</span>
              ))}
            </div>
          </div>
        )
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
          <TextBlock tone={primary.troparion.tone} text={primary.troparion.text} label="Troparion"
            editFile={primaryCtx?.file} editPath={fieldPath(primaryCtx, 'troparion', 'text')} />
        ) : Array.isArray(primary.troparion) ? (
          primary.troparion.map((t, i) => (
            <TextBlock key={i} tone={t.tone} text={t.text} label={`Troparion ${i + 1}`} />
          ))
        ) : null
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>Not encoded</div>
      )}
      {primary.troparion_2 && (
        <TextBlock tone={primary.troparion_2.tone} text={primary.troparion_2.text} label="Troparion 2"
          editFile={primaryCtx?.file} editPath={fieldPath(primaryCtx, 'troparion_2', 'text')} />
      )}
      {primary.troparion_3 && (
        <TextBlock tone={primary.troparion_3.tone} text={primary.troparion_3.text} label="Troparion 3"
          editFile={primaryCtx?.file} editPath={fieldPath(primaryCtx, 'troparion_3', 'text')} />
      )}

      {/* ── Kontakia ── */}
      <SectionHeader>Kontakia</SectionHeader>
      {primary.kontakion_ode6 ? (
        <TextBlock
          tone={primary.kontakion_ode6.tone}
          text={primary.kontakion_ode6.text}
          label="Kontakion (Ode VI → 3rd & 9th Hours)"
          editFile={primaryCtx?.file}
          editPath={fieldPath(primaryCtx, 'kontakion_ode6', 'text')}
        />
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>kontakion_ode6 — not encoded</div>
      )}
      {primary.kontakion_ode3 ? (
        <TextBlock
          tone={primary.kontakion_ode3.tone}
          text={primary.kontakion_ode3.text}
          label="Kontakion (Ode III → 1st & 6th Hours)"
          editFile={primaryCtx?.file}
          editPath={fieldPath(primaryCtx, 'kontakion_ode3', 'text')}
        />
      ) : (
        <FieldRow label="kontakion_ode3" value={null} />
      )}

      <EntryHymnography entry={primary} editCtx={primaryCtx} />

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
      {secondary.map((sec, idx) => {
        const secCtx = import.meta.env.DEV ? menaionCtx(dateKey, idx + 1, true) : null;
        return (
        <div
          key={idx}
          ref={el => { subEntryRefs.current[idx + 1] = el; }}
          style={{
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
            <TextBlock tone={sec.troparion.tone} text={sec.troparion.text} label="Troparion"
              editFile={secCtx?.file} editPath={fieldPath(secCtx, 'troparion', 'text')} />
          )}
          {sec.kontakion_ode6 && (
            <TextBlock tone={sec.kontakion_ode6.tone} text={sec.kontakion_ode6.text} label="Kontakion (Ode VI)"
              editFile={secCtx?.file} editPath={fieldPath(secCtx, 'kontakion_ode6', 'text')} />
          )}
          <EntryHymnography entry={sec} editCtx={secCtx} />
          {sec.note && (
            <div style={{
              fontSize: "0.85rem", color: C.inkMid, lineHeight: 1.65, marginTop: "0.5rem",
              fontFamily: "Georgia, serif", whiteSpace: "pre-wrap",
            }}>
              {sec.note}
            </div>
          )}
        </div>
        );
      })}
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

  // Deep-positioning on entry (Phase 2): a ?comm=MM-DD link from the Library
  // opens to that month and scrolls to the day's entry. The scroll can't fire on
  // mount — the month data loads via a dynamic import, so entryRefs aren't
  // populated yet. We stash the target here and fire it from the [monthData]
  // effect once data resolves. A direct, no-param visit is unchanged.
  const pendingComm = useRef(null);
  useEffect(() => {
    const comm = new URLSearchParams(window.location.search).get("comm");
    if (comm && /^\d{2}-\d{2}$/.test(comm)) {
      pendingComm.current = comm;
      setActiveMonth(comm.slice(0, 2));
    }
  }, []);

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
    window.scrollTo({ top: elTop - headerH - stripOffsetPx() - 8, behavior: 'smooth' });
  };

  // Fire the deep-positioning scroll once the dynamic month import has resolved
  // and the entry refs are populated (one rAF to let layout settle), then clear
  // the pending target so a later manual month switch doesn't re-trigger it.
  useEffect(() => {
    if (!monthData || !pendingComm.current) return;
    const target = pendingComm.current;
    const id = requestAnimationFrame(() => {
      scrollToEntry(target);
      pendingComm.current = null;
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthData]);

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
        top: "var(--hours-return-strip-h, 0px)",
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
            top: "calc(" + STRIP_VAR + " + " + (headerHeight + 10) + "px)",
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
                  {summary.review > 0 && <> · <span style={{ color: C.amber }}>{summary.review} review</span></>}
                  {summary.partial > 0 && <> · <span style={{ color: C.red }}>{summary.partial} partial</span></>}
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
                        color: statusColor(entryInfo.audit.status, entryInfo.audit.needsReview),
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
