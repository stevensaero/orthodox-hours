// pentecostarion-browser.jsx — Pentecostarion Data Browser
// Dev/truthing tool for proofing encoded Pentecostarion entries.
// Route: /orthodox-hours/pentecostarion — URL-only access, not linked from main UI.

import React, { useState, useEffect, useRef } from 'react';
import { auditPentecostarionEntry, auditSummary } from '../lib/audit.js';

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

// ── Liturgical period groupings ─────────────────────────────────────────────
const PERIODS = [
  { label: "Bright Week",               start: 0,  end: 6,  note: "P+0 through P+6" },
  { label: "Thomas → Blind Man",        start: 7,  end: 35, note: "P+7 through P+35" },
  { label: "Post-Pascha / Ascension",   start: 36, end: 48, note: "P+36 through P+48" },
  { label: "Pentecost",                 start: 49, end: 56, note: "P+49 through P+56" },
];

const ALL_OFFSETS = Array.from({ length: 57 }, (_, i) => i); // P+0 through P+56

// ── Helpers ─────────────────────────────────────────────────────────────────

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

// ── Shared display components ───────────────────────────────────────────────
function FieldLabel({ children }) {
  return (
    <span style={{
      fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase",
      color: C.gold, fontWeight: 600, fontFamily: "Georgia, 'Times New Roman', serif",
    }}>
      {children}
    </span>
  );
}

function BoolFlag({ label, value }) {
  const defined = value !== undefined && value !== null;
  return (
    <span style={{
      display: "inline-block", marginRight: "1rem", marginBottom: "0.25rem",
      fontSize: "0.85rem", color: defined ? C.inkMid : C.goldLight,
    }}>
      <FieldLabel>{label}</FieldLabel>{' '}
      <span style={{ color: defined ? (value ? C.green : C.inkLight) : C.goldLight }}>
        {defined ? (value ? '✓' : '✗') : '—'}
      </span>
    </span>
  );
}

function TextBlock({ tone, text, specMel, label, verse, repeatIndex }) {
  return (
    <div style={{
      marginBottom: "0.75rem", paddingLeft: "0.75rem",
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
        fontSize: "0.88rem", color: C.ink, lineHeight: 1.65,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}>
        {text || <span style={{ color: C.goldLight, fontStyle: "italic" }}>—</span>}
      </div>
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <div style={{
      fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase",
      color: C.gold, fontWeight: 700, borderBottom: `1px solid ${C.border}`,
      paddingBottom: "0.25rem", marginTop: "1.25rem", marginBottom: "0.6rem",
    }}>
      {children}
    </div>
  );
}

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

// ── Pentecostarion Entry Card ───────────────────────────────────────────────
function PentEntryCard({ offset, entry, audit, stickyTop }) {
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
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#fff", border: `1px solid ${C.border}`,
          borderRadius: "6px 6px 0 0", padding: "0.6rem 1.25rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          <div>
            <span style={{
              fontSize: "1.1rem", fontWeight: 700, color: C.ink,
              fontFamily: "Georgia, serif",
            }}>
              P+{offset}
            </span>
            <span style={{
              marginLeft: "0.75rem", fontSize: "0.95rem", color: C.inkMid,
              fontFamily: "Georgia, serif",
            }}>
              {entry.name || '(unnamed)'}
            </span>
          </div>
          <div style={{
            fontSize: "0.82rem", fontWeight: 600,
            color: statusColor(audit.status), whiteSpace: "nowrap",
          }}>
            {statusIcon(audit.status)} {audit.status}
          </div>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div style={{
        background: "#fff", border: `1px solid ${C.border}`, borderTop: "none",
        borderRadius: "0 0 6px 6px", padding: "0.75rem 1.25rem 1.25rem",
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
        <FieldRow label="source_file" value={entry.source_file} mono />
        <FieldRow label="fekula_section" value={entry.fekula_section} />
        <FieldRow label="hours_format" value={entry.hours_format} />
        <FieldRow label="tone" value={entry.tone} />
        <FieldRow label="matins_format" value={entry.matins_format} />
        <FieldRow label="aposticha_source" value={entry.aposticha_source} />
      </div>

      {/* ── Flags ── */}
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "0.5rem" }}>
        <BoolFlag label="menaion set aside" value={entry.menaion_set_aside} />
        <BoolFlag label="doxology" value={entry.has_great_doxology} />
        <BoolFlag label="litya" value={entry.has_litya} />
        <BoolFlag label="paroemias" value={entry.has_paroemias} />
        <BoolFlag label="magnificat" value={entry.magnificat_sung} />
        <BoolFlag label="truly meet suppressed" value={entry.it_is_truly_meet_suppressed} />
        <BoolFlag label="heavenly king omitted" value={entry.heavenly_king_omitted} />
      </div>

      {/* ── Troparion ── */}
      <SectionHeader>Troparion</SectionHeader>
      {entry.troparion ? (
        Array.isArray(entry.troparion) ? (
          entry.troparion.map((t, i) => (
            <TextBlock key={i} tone={t.tone} text={t.text} label={`Troparion ${i + 1}`} />
          ))
        ) : (
          <TextBlock tone={entry.troparion.tone} text={entry.troparion.text} label="Troparion" />
        )
      ) : (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>Not encoded</div>
      )}
      {entry.troparion_2 && (
        <TextBlock tone={entry.troparion_2.tone} text={entry.troparion_2.text} label="Troparion 2" />
      )}
      {entry.troparion_3 && (
        <TextBlock tone={entry.troparion_3.tone} text={entry.troparion_3.text} label="Troparion 3" />
      )}
      {entry.troparion_bothnow && (
        <TextBlock
          tone={entry.troparion_bothnow.tone}
          text={entry.troparion_bothnow.text}
          label="Both now (Theotokion)"
        />
      )}

      {/* ── Kontakia ── */}
      <SectionHeader>Kontakia</SectionHeader>
      {entry.hours_kontakion && (
        <TextBlock
          tone={entry.hours_kontakion.tone}
          text={entry.hours_kontakion.text}
          label="Hours Kontakion (single — all four Hours)"
        />
      )}
      {entry.kontakion_ode6 && (
        <TextBlock
          tone={entry.kontakion_ode6.tone}
          text={entry.kontakion_ode6.text}
          label="Kontakion (Ode VI → 3rd & 9th Hours)"
        />
      )}
      {entry.kontakion_ode3 && (
        <TextBlock
          tone={entry.kontakion_ode3.tone}
          text={entry.kontakion_ode3.text}
          label="Kontakion (Ode III → 1st & 6th Hours)"
        />
      )}
      {!entry.hours_kontakion && !entry.kontakion_ode6 && (
        <div style={{ fontSize: "0.85rem", color: C.goldLight, fontStyle: "italic" }}>Not encoded</div>
      )}

      {/* ── Lord I Have Cried Stichera ── */}
      <SectionHeader>Vespers — Lord I Have Cried</SectionHeader>
      {entry.stichera_lord_i_call_count !== undefined && (
        <FieldRow label="stichera count" value={entry.stichera_lord_i_call_count} />
      )}
      {entry.stichera_lord_i_call && Array.isArray(entry.stichera_lord_i_call) ? (
        entry.stichera_lord_i_call.map((s, i) => (
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
      {entry.stichera_glory && (
        <TextBlock
          tone={entry.stichera_glory.tone || entry.stichera_glory?.tone}
          text={entry.stichera_glory.text || (typeof entry.stichera_glory === 'string' ? entry.stichera_glory : null)}
          label="Glory (Doxasticon)"
        />
      )}
      {entry.lic_theotokion && (
        <TextBlock
          tone={entry.lic_theotokion.tone}
          text={entry.lic_theotokion.text}
          label="Both now (Theotokion)"
        />
      )}

      {/* ── Vespers Aposticha ── */}
      {(entry.stichera_aposticha || entry.aposticha_glory) && (
        <>
          <SectionHeader>Vespers — Aposticha</SectionHeader>
          {entry.stichera_aposticha && Array.isArray(entry.stichera_aposticha) && (
            entry.stichera_aposticha.map((s, i) => (
              <TextBlock key={i} tone={s.tone} text={s.text} verse={s.verse} label={`[${i + 1}]`} />
            ))
          )}
          {entry.aposticha_glory && (
            <TextBlock
              tone={entry.aposticha_glory.tone}
              text={entry.aposticha_glory.text}
              label="Glory (Doxasticon)"
            />
          )}
          {entry.aposticha_both_now && (
            <TextBlock
              tone={entry.aposticha_both_now.tone}
              text={entry.aposticha_both_now.text}
              label="Both now (Theotokion)"
            />
          )}
        </>
      )}

      {/* ── Matins Aposticha ── */}
      {(entry.stichera_matins_aposticha || entry.stichera_matins_aposticha_glory) && (
        <>
          <SectionHeader>Matins — Aposticha</SectionHeader>
          {entry.stichera_matins_aposticha && Array.isArray(entry.stichera_matins_aposticha) && (
            entry.stichera_matins_aposticha.map((s, i) => (
              <TextBlock key={i} tone={s.tone} text={s.text} verse={s.verse} label={`[${i + 1}]`} />
            ))
          )}
          {entry.stichera_matins_aposticha_glory && (
            <TextBlock
              tone={entry.stichera_matins_aposticha_glory.tone}
              text={entry.stichera_matins_aposticha_glory.text}
              label="Glory (Doxasticon)"
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

      {/* ── Beatitudes ── */}
      {(entry.beatitudes_source || entry.beatitudes_troparia) && (
        <>
          <SectionHeader>Beatitudes</SectionHeader>
          {entry.beatitudes_source && <FieldRow label="source" value={entry.beatitudes_source} />}
          {entry.beatitudes_troparia && Array.isArray(entry.beatitudes_troparia) && (
            entry.beatitudes_troparia.map((t, i) => {
              // Items can be strings OR objects with {text, tone?, source?, label?}
              if (typeof t === 'string') {
                return <TextBlock key={i} text={t} label={`[${i + 1}]`} />;
              }
              return (
                <TextBlock
                  key={i}
                  text={t.text}
                  tone={t.tone}
                  label={t.label ? t.label : t.source ? `[${i + 1}] (${t.source})` : `[${i + 1}]`}
                />
              );
            })
          )}
        </>
      )}

      {/* ── Matins ── */}
      {(entry.matins_gospel || entry.matins_gospel_number || entry.matins_canon_feast ||
        entry.matins_sessional_post_polyeleos || entry.matins_exapostilarion_feast) && (
        <>
          <SectionHeader>Matins</SectionHeader>
          {entry.matins_gospel && <FieldRow label="matins_gospel" value={entry.matins_gospel} />}
          {entry.matins_gospel_number !== undefined && (
            <FieldRow label="matins_gospel_number" value={`#${entry.matins_gospel_number} (Sunday Resurrection Gospel)`} />
          )}

          {/* Sessional hymn after Polyeleos */}
          {entry.matins_sessional_post_polyeleos && (
            <>
              <div style={{ fontSize: "0.78rem", color: C.inkLight, fontWeight: 600,
                marginTop: "0.75rem", marginBottom: "0.35rem", letterSpacing: "0.06em" }}>
                Sessional Hymn (after Polyeleos / Evlogitaria) — feast specific
              </div>
              <TextBlock tone={entry.matins_sessional_post_polyeleos.tone}
                text={entry.matins_sessional_post_polyeleos.text} />
              {entry.matins_sessional_post_polyeleos_both_now && (
                <TextBlock
                  tone={entry.matins_sessional_post_polyeleos_both_now.tone}
                  text={entry.matins_sessional_post_polyeleos_both_now.text}
                  label="Both now" />
              )}
            </>
          )}

          {/* Feast Canon */}
          {entry.matins_canon_feast && (() => {
            const canon = entry.matins_canon_feast;
            const odeNums = Object.keys(canon.odes || {}).map(Number).sort((a, b) => a - b);
            return (
              <>
                <div style={{ fontSize: "0.78rem", color: C.inkLight, fontWeight: 600,
                  marginTop: "0.75rem", marginBottom: "0.35rem", letterSpacing: "0.06em" }}>
                  Feast Canon — 4th canon (Octoechos canons 1–3 sourced from octoechos.js)
                </div>
                <div style={{ fontSize: "0.82rem", color: C.gold, marginBottom: "0.5rem" }}>
                  Refrain: <em>{canon.refrain}</em>
                  {canon.source && (
                    <span style={{ color: C.inkLight, marginLeft: "0.75rem" }}>
                      Source: {canon.source}
                    </span>
                  )}
                </div>
                {odeNums.map(odeNum => {
                  const ode = canon.odes[odeNum];
                  return (
                    <div key={odeNum} style={{
                      marginBottom: "1rem",
                      borderLeft: `3px solid ${C.goldLight}`,
                      paddingLeft: "0.75rem",
                    }}>
                      <div style={{ fontSize: "0.75rem", color: C.gold, fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        marginBottom: "0.4rem" }}>
                        Ode {odeNum}
                      </div>
                      {(ode.troparia || []).map((t, ti) => (
                        <div key={ti} style={{ marginBottom: "0.5rem" }}>
                          <div style={{ fontSize: "0.72rem", color: C.inkLight, marginBottom: "0.15rem" }}>
                            [{ti + 1}] Refrain: <em>{canon.refrain}</em>
                          </div>
                          <div style={{ fontSize: "0.87rem", color: C.ink, lineHeight: 1.6,
                            fontFamily: "Georgia, 'Times New Roman', serif" }}>
                            {t}
                          </div>
                        </div>
                      ))}
                      {ode.gloria && (
                        <div style={{ marginBottom: "0.5rem" }}>
                          <div style={{ fontSize: "0.72rem", color: C.inkLight, marginBottom: "0.15rem" }}>
                            Glory...
                          </div>
                          <div style={{ fontSize: "0.87rem", color: C.ink, lineHeight: 1.6,
                            fontFamily: "Georgia, 'Times New Roman', serif" }}>
                            {ode.gloria}
                          </div>
                        </div>
                      )}
                      {ode.both_now && (
                        <div style={{ marginBottom: "0.5rem" }}>
                          <div style={{ fontSize: "0.72rem", color: C.inkLight, marginBottom: "0.15rem" }}>
                            Both now...
                          </div>
                          <div style={{ fontSize: "0.87rem", color: C.ink, lineHeight: 1.6,
                            fontFamily: "Georgia, 'Times New Roman', serif" }}>
                            {ode.both_now}
                          </div>
                        </div>
                      )}
                      {ode.kontakion && (
                        <div style={{
                          marginTop: "0.4rem", padding: "0.4rem 0.6rem",
                          background: C.goldFaint, borderRadius: "4px",
                        }}>
                          <div style={{ fontSize: "0.72rem", color: C.gold, fontWeight: 600,
                            marginBottom: "0.2rem" }}>
                            Kontakion (after Ode VI) — Tone {ode.kontakion.tone}
                          </div>
                          <div style={{ fontSize: "0.87rem", color: C.ink, lineHeight: 1.6,
                            fontFamily: "Georgia, 'Times New Roman', serif" }}>
                            {ode.kontakion.text}
                          </div>
                        </div>
                      )}
                      {ode.ikos && (
                        <div style={{ marginTop: "0.4rem" }}>
                          <div style={{ fontSize: "0.72rem", color: C.inkLight, marginBottom: "0.15rem" }}>
                            Ikos
                          </div>
                          <div style={{ fontSize: "0.87rem", color: C.ink, lineHeight: 1.6,
                            fontFamily: "Georgia, 'Times New Roman', serif" }}>
                            {ode.ikos}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            );
          })()}

          {/* Exapostilaria */}
          {(entry.matins_exapostilarion_feast || entry.matins_exapostilarion_theotokion) && (
            <>
              <div style={{ fontSize: "0.78rem", color: C.inkLight, fontWeight: 600,
                marginTop: "0.75rem", marginBottom: "0.35rem", letterSpacing: "0.06em" }}>
                Exapostilarion (feast specific; Resurrection exapostilarion from Octoechos)
              </div>
              {entry.matins_exapostilarion_feast && (
                <TextBlock text={entry.matins_exapostilarion_feast.text} label="Feast" />
              )}
              {entry.matins_exapostilarion_theotokion && (
                <TextBlock text={entry.matins_exapostilarion_theotokion.text} label="Theotokion" />
              )}
            </>
          )}

          {/* Stichera on the Praises — feast stichera */}
          {entry.matins_praises_feast && entry.matins_praises_feast.length > 0 && (
            <>
              <div style={{ fontSize: "0.78rem", color: C.inkLight, fontWeight: 600,
                marginTop: "0.75rem", marginBottom: "0.35rem", letterSpacing: "0.06em" }}>
                Stichera on the Praises — feast (added after Resurrection stichera from Octoechos)
              </div>
              {entry.matins_praises_feast.map((s, i) => (
                <TextBlock key={i} tone={s.tone} verse={s.verse} text={s.text} label={`[${i + 1}]`} />
              ))}
              {entry.matins_praises_glory && (
                <div style={{ fontSize: "0.82rem", color: C.inkMid, marginTop: "0.25rem" }}>
                  <FieldLabel>Glory</FieldLabel>{' '}
                  {entry.matins_praises_glory.source === 'gospel_sticheron'
                    ? `→ Resurrection Gospel Sticheron #${entry.matins_praises_glory.gospel_number} (from RESURRECTION_GOSPEL_STICHERA)`
                    : entry.matins_praises_glory.text || '—'}
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* ── Zadostoinik ── */}
      {(entry.instead_of_it_is_truly_meet_refrain || entry.instead_of_it_is_truly_meet_irmos) && (
        <>
          <SectionHeader>Zadostoinik</SectionHeader>
          {entry.instead_of_it_is_truly_meet_refrain && (
            <FieldRow label="refrain" value={entry.instead_of_it_is_truly_meet_refrain} />
          )}
          {entry.instead_of_it_is_truly_meet_irmos && (
            <FieldRow label="irmos" value={entry.instead_of_it_is_truly_meet_irmos} />
          )}
        </>
      )}

      {/* ── Notes ── */}
      {entry.note && (
        <>
          <SectionHeader>Notes</SectionHeader>
          <div style={{
            fontSize: "0.85rem", color: C.inkMid, lineHeight: 1.65,
            fontFamily: "Georgia, serif", whiteSpace: "pre-wrap",
          }}>
            {entry.note}
          </div>
        </>
      )}
      </div>{/* end card body */}
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function PentecostarionBrowser() {
  const [pentData, setPentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activePeriod, setActivePeriod] = useState(null); // null = all
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

  useEffect(() => {
    import("../data/pentecostarion.js")
      .then(m => { setPentData(m.default); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  // Build entries list
  const entries = [];
  const auditResults = [];

  if (pentData) {
    const offsets = activePeriod
      ? ALL_OFFSETS.filter(o => o >= activePeriod.start && o <= activePeriod.end)
      : ALL_OFFSETS;

    for (const offset of offsets) {
      const entry = pentData[offset];
      if (entry) {
        const audit = auditPentecostarionEntry(entry);
        entries.push({ offset, entry, audit });
        auditResults.push(audit);
      }
    }
  }

  // Overall summary (all entries, not just filtered)
  const allAudits = [];
  if (pentData) {
    for (const offset of ALL_OFFSETS) {
      if (pentData[offset]) allAudits.push(auditPentecostarionEntry(pentData[offset]));
    }
  }
  const overallSummary = auditSummary(allAudits);
  const filteredSummary = auditSummary(auditResults);

  const scrollToEntry = (offset) => {
    const el = entryRefs.current[offset];
    if (!el) return;
    // Scroll so the entry starts just below the sticky header,
    // ensuring the audit box is visible (not hidden behind the header).
    const headerH = headerRef.current ? headerRef.current.getBoundingClientRect().height : 90;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elTop - headerH - 8, behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: "100vh", background: C.parchment,
      fontFamily: "Georgia, 'Times New Roman', serif", color: C.ink,
    }}>
      {/* ── Header ── */}
      <div ref={headerRef} style={{
        background: "#fff", borderBottom: `2px solid ${C.border}`,
        padding: "1rem 1.5rem", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
              <a href="/orthodox-hours/" style={{
                fontSize: "0.82rem", color: C.gold, textDecoration: "none",
                fontFamily: "Georgia, serif",
              }}>← Hours Tool</a>
              <h1 style={{
                fontSize: "1.15rem", fontWeight: 700, color: C.gold,
                margin: 0, letterSpacing: "0.04em",
              }}>
                Pentecostarion Data Browser
              </h1>
            </div>
            <span style={{
              fontSize: "0.72rem", color: C.inkLight, letterSpacing: "0.06em",
            }}>
              DEV / TRUTHING TOOL
            </span>
          </div>

          {/* ── Period tabs ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.15rem" }}>
            <button
              onClick={() => setActivePeriod(null)}
              style={{
                padding: "0.3rem 0.6rem", fontSize: "0.78rem", fontFamily: "Georgia, serif",
                border: !activePeriod ? `1px solid ${C.gold}` : `1px solid transparent`,
                borderRadius: "3px",
                background: !activePeriod ? C.goldFaint : "transparent",
                color: !activePeriod ? C.gold : C.inkMid,
                cursor: "pointer", fontWeight: !activePeriod ? 700 : 400,
                letterSpacing: "0.03em",
              }}
            >
              All
            </button>
            {PERIODS.map(p => {
              const active = activePeriod?.label === p.label;
              return (
                <button
                  key={p.label}
                  onClick={() => setActivePeriod(active ? null : p)}
                  style={{
                    padding: "0.3rem 0.6rem", fontSize: "0.78rem", fontFamily: "Georgia, serif",
                    border: active ? `1px solid ${C.gold}` : `1px solid transparent`,
                    borderRadius: "3px",
                    background: active ? C.goldFaint : "transparent",
                    color: active ? C.gold : C.inkMid,
                    cursor: "pointer", fontWeight: active ? 700 : 400,
                    letterSpacing: "0.03em",
                  }}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{
        maxWidth: "960px", margin: "0 auto", padding: "1.25rem 1.5rem",
        display: "flex", gap: "1.5rem",
      }}>
        {/* ── Offset sidebar ── */}
        <div style={{
          flexShrink: 0, width: "200px", position: "sticky",
          top: (headerHeight + 10) + "px", alignSelf: "flex-start",
        }}>
          {/* Summary */}
          <div style={{
            fontSize: "0.78rem", color: C.inkMid, marginBottom: "0.75rem", lineHeight: 1.6,
          }}>
            <strong style={{ color: C.ink }}>
              {activePeriod ? activePeriod.label : "All Offsets"}
            </strong>
            <br />
            {overallSummary.total}/57 offsets encoded
            <br />
            <span style={{ color: C.green }}>{overallSummary.complete} complete</span>
            {overallSummary.partial > 0 && <> · <span style={{ color: C.amber }}>{overallSummary.partial} partial</span></>}
            {overallSummary.structural > 0 && <> · <span style={{ color: C.red }}>{overallSummary.structural} structural</span></>}
          </div>

          {/* Offset grid — grouped by period */}
          {PERIODS.map(period => {
            if (activePeriod && activePeriod.label !== period.label) return null;
            const offsets = ALL_OFFSETS.filter(o => o >= period.start && o <= period.end);
            return (
              <div key={period.label} style={{ marginBottom: "0.75rem" }}>
                <div style={{
                  fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  color: C.inkLight, fontWeight: 600, marginBottom: "0.3rem",
                }}>
                  {period.label}
                </div>
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: "2px",
                }}>
                  {offsets.map(o => {
                    const hasEntry = pentData && pentData[o];
                    const audit = hasEntry ? auditPentecostarionEntry(pentData[o]) : null;
                    return (
                      <button
                        key={o}
                        onClick={() => hasEntry && scrollToEntry(o)}
                        disabled={!hasEntry}
                        style={{
                          minWidth: "30px", height: "24px", fontSize: "0.68rem",
                          fontFamily: "Georgia, serif", border: "none", borderRadius: "3px",
                          background: hasEntry ? C.goldFaint : "transparent",
                          color: hasEntry ? C.ink : C.goldLight,
                          cursor: hasEntry ? "pointer" : "default",
                          fontWeight: hasEntry ? 600 : 400, padding: "0 3px",
                          position: "relative",
                        }}
                        title={hasEntry ? `P+${o} — ${audit.status}` : `P+${o} — no data`}
                      >
                        {o}
                        {audit && (
                          <span style={{
                            position: "absolute", bottom: "1px", right: "2px",
                            fontSize: "0.5rem", color: statusColor(audit.status), lineHeight: 1,
                          }}>
                            ●
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Entry cards ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {loading && (
            <div style={{ fontSize: "0.9rem", color: C.inkLight, padding: "2rem 0" }}>
              Loading Pentecostarion data…
            </div>
          )}
          {error && (
            <div style={{ fontSize: "0.9rem", color: C.red, padding: "2rem 0" }}>
              Error loading data: {error}
            </div>
          )}
          {!loading && !error && entries.length === 0 && (
            <div style={{
              fontSize: "0.9rem", color: C.inkLight, padding: "3rem 0",
              textAlign: "center", fontStyle: "italic",
            }}>
              No entries encoded for {activePeriod ? activePeriod.label : "the Pentecostarion"} yet.
            </div>
          )}
          {entries.map(({ offset, entry, audit }) => (
            <div key={offset} ref={el => entryRefs.current[offset] = el}>
              <PentEntryCard offset={offset} entry={entry} audit={audit} stickyTop={headerHeight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
