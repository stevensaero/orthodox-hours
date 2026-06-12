// octoechos-browser.jsx — Octoechos Data Browser
// Dev/truthing tool for proofing encoded Octoechos tone data.
// Route: /orthodox-hours/octoechos — URL-only access, not linked from main tool UI.

import React, { useState, useEffect, useContext, createContext } from 'react';
import { PointScoreControls } from './point-score-controls.jsx';

// Current tone in view — provided by OctoechosBrowser, consumed by SticheronBlock
// so its Point/Score controls know which tone the verse belongs to.
const ToneContext = createContext(null);

// ── Color constants — matches existing browsers ──────────────────────────────
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

// ── Tone loaders — lazy per-tone imports ─────────────────────────────────────
const TONE_LOADERS = {
  1: () => import('../data/octoechos/tone1.js'),
  2: () => import('../data/octoechos/tone2.js'),
  3: () => import('../data/octoechos/tone3.js'),
  4: () => import('../data/octoechos/tone4.js'),
  5: () => import('../data/octoechos/tone5.js'),
  6: () => import('../data/octoechos/tone6.js'),
  7: () => import('../data/octoechos/tone7.js'),
  8: () => import('../data/octoechos/tone8.js'),
};

// ── Index import — tone-independent small tables ─────────────────────────────
import {
  LIC_THEOTOKIA, HYPAKOE, RESURRECTIONAL_TROPARIA,
  SUNDAY_KONTAKIA, SUNDAY_PROKEIMENON, SUNDAY_ALLELUIA,
} from '../data/octoechos/index.js';

// ── Day labels ───────────────────────────────────────────────────────────────
const DAY_KEYS  = ['sat', 'sun_eve', 'mon', 'tue', 'wed', 'thu', 'fri'];
const DAY_LABELS = {
  sat:     'Saturday Eve (Great Vespers)',
  sun_eve: 'Sunday Eve (Small Vespers)',
  mon:     'Monday Eve',
  tue:     'Tuesday Eve',
  wed:     'Wednesday Eve',
  thu:     'Thursday Eve',
  fri:     'Friday Eve',
};

// ── Shared display components ────────────────────────────────────────────────
function SectionHeader({ children }) {
  return (
    <div style={{
      fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase",
      color: C.gold, fontWeight: 700, borderBottom: `1px solid ${C.border}`,
      paddingBottom: "0.25rem", marginTop: "1.5rem", marginBottom: "0.6rem",
    }}>
      {children}
    </div>
  );
}

function SubHeader({ children }) {
  return (
    <div style={{
      fontSize: "0.70rem", letterSpacing: "0.10em", textTransform: "uppercase",
      color: C.inkLight, fontWeight: 600, marginTop: "1rem", marginBottom: "0.4rem",
    }}>
      {children}
    </div>
  );
}

function SticheronBlock({ index, text, verse, label }) {
  const tone = useContext(ToneContext);
  return (
    <div style={{
      marginBottom: "0.85rem",
      paddingLeft: "0.75rem",
      borderLeft: `2px solid ${C.border}`,
    }}>
      {label && (
        <div style={{ fontSize: "0.72rem", color: C.gold, marginBottom: "0.15rem",
          letterSpacing: "0.06em" }}>
          {label}
        </div>
      )}
      {!label && index !== undefined && (
        <div style={{ fontSize: "0.72rem", color: C.inkLight, marginBottom: "0.15rem" }}>
          [{index + 1}]
        </div>
      )}
      {verse && (
        <div style={{ fontSize: "0.81rem", color: C.inkLight, fontStyle: "italic",
          marginBottom: "0.2rem" }}>
          Verse: {verse}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          flex: 1, minWidth: 0,
          fontSize: "0.88rem", color: C.ink, lineHeight: 1.65,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}>
          {text || <span style={{ color: C.goldLight, fontStyle: "italic" }}>—</span>}
        </div>
        <PointScoreControls text={text} tone={tone} />
      </div>
    </div>
  );
}

function SmallTableRow({ label, value }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <span style={{
        fontSize: "0.68rem", letterSpacing: "0.10em", textTransform: "uppercase",
        color: C.gold, fontWeight: 600, fontFamily: "Georgia, serif",
      }}>
        {label}
      </span>
      <div style={{
        fontSize: "0.88rem", color: C.ink, lineHeight: 1.6,
        fontFamily: "Georgia, 'Times New Roman', serif",
        marginTop: "0.2rem", paddingLeft: "0.75rem",
        borderLeft: `2px solid ${C.border}`,
      }}>
        {value || <span style={{ color: C.goldLight, fontStyle: "italic" }}>—</span>}
      </div>
    </div>
  );
}

function StubSection({ label, phase }) {
  return (
    <div style={{
      padding: "1rem 1.25rem",
      background: C.goldFaint,
      border: `1px dashed ${C.goldLight}`,
      borderRadius: "4px",
      marginTop: "0.75rem",
      marginBottom: "1rem",
    }}>
      <div style={{ fontSize: "0.72rem", color: C.gold, fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
        {label}
      </div>
      <div style={{ fontSize: "0.82rem", color: C.inkLight, fontStyle: "italic" }}>
        Not yet encoded — {phase}
      </div>
    </div>
  );
}

// ── Vespers day panel ────────────────────────────────────────────────────────
function VespersDayPanel({ tone, dayKey, dayData }) {
  if (!dayData) {
    return (
      <div style={{ padding: "1rem", color: C.inkLight, fontStyle: "italic",
        fontSize: "0.85rem" }}>
        No data for {DAY_LABELS[dayKey]}.
      </div>
    );
  }

  const { lic = [], aposticha = [], aposticha_glory, dogmatikon, lic_theotokion,
    lic_dogmatikon } = dayData;

  return (
    <div>
      {/* Lord I Have Cried stichera */}
      <SubHeader>Lord I Have Cried — {lic.length} stichera</SubHeader>
      {lic.length > 0
        ? lic.map((text, i) => <SticheronBlock key={i} index={i} text={text} />)
        : <div style={{ color: C.goldLight, fontStyle: "italic", fontSize: "0.85rem",
            marginBottom: "0.5rem" }}>—</div>
      }

      {/* LIC theotokion / dogmatikon */}
      {lic_dogmatikon && (
        <>
          <SubHeader>LIC Theotokion (Friday dogmatikon)</SubHeader>
          <SticheronBlock text={lic_dogmatikon} />
        </>
      )}
      {lic_theotokion && (
        <>
          <SubHeader>LIC Both Now (theotokion)</SubHeader>
          <SticheronBlock text={lic_theotokion} />
        </>
      )}
      {dogmatikon && (
        <>
          <SubHeader>Dogmatikon (Saturday Both Now)</SubHeader>
          <SticheronBlock text={dogmatikon} label={`Tone ${tone} Dogmatikon`} />
        </>
      )}

      {/* Aposticha */}
      <SubHeader>Aposticha — {aposticha.length} stichera</SubHeader>
      {aposticha.length > 0 ? (
        aposticha.map((s, i) => {
          const text = typeof s === 'string' ? s : s.text;
          const verse = typeof s === 'object' ? s.verse : null;
          return <SticheronBlock key={i} index={i} text={text} verse={verse} />;
        })
      ) : (
        <div style={{ color: C.goldLight, fontStyle: "italic", fontSize: "0.85rem",
          marginBottom: "0.5rem" }}>—</div>
      )}

      {aposticha_glory && (
        <SticheronBlock
          label={aposticha_glory.startsWith('[') ? 'Glory (Menaion)' : 'Glory'}
          text={aposticha_glory}
        />
      )}
    </div>
  );
}

// ── Small tables panel (index.js data) ──────────────────────────────────────
function SmallTablesPanel({ tone }) {
  const toneNum = parseInt(tone);
  return (
    <div>
      <div style={{ fontSize: "0.82rem", color: C.inkLight, marginBottom: "1rem",
        fontStyle: "italic" }}>
        Tone-independent data from <code>index.js</code> — shared across all tones,
        always loaded. Showing values for Tone {toneNum}.
      </div>

      <SectionHeader>Resurrectional Troparion</SectionHeader>
      <SmallTableRow
        label={`Tone ${RESURRECTIONAL_TROPARIA[toneNum]?.tone ?? toneNum}`}
        value={RESURRECTIONAL_TROPARIA[toneNum]?.text ?? RESURRECTIONAL_TROPARIA[toneNum]}
      />

      <SectionHeader>Sunday Kontakion</SectionHeader>
      <SmallTableRow
        label={`Tone ${toneNum} — Tone ${SUNDAY_KONTAKIA[toneNum]?.tone}`}
        value={SUNDAY_KONTAKIA[toneNum]?.text}
      />

      <SectionHeader>Hypakoë (Sunday Matins / Typica)</SectionHeader>
      <SmallTableRow label={`Tone ${toneNum}`} value={HYPAKOE[toneNum]} />

      <SectionHeader>LIC Theotokion (Weekday Both Now)</SectionHeader>
      <SmallTableRow label={`Tone ${toneNum}`} value={LIC_THEOTOKIA[toneNum]} />

      <SectionHeader>Sunday Matins Prokeimenon</SectionHeader>
      {SUNDAY_PROKEIMENON[toneNum] ? (
        <>
          <SmallTableRow
            label={`Tone ${SUNDAY_PROKEIMENON[toneNum].tone}`}
            value={SUNDAY_PROKEIMENON[toneNum].text}
          />
          {SUNDAY_PROKEIMENON[toneNum].verse && (
            <SmallTableRow label="Verse" value={SUNDAY_PROKEIMENON[toneNum].verse} />
          )}
        </>
      ) : <SmallTableRow label="—" value={null} />}

      <SectionHeader>Sunday Alleluia</SectionHeader>
      {SUNDAY_ALLELUIA[toneNum] ? (
        <>
          <SmallTableRow
            label={`Tone ${SUNDAY_ALLELUIA[toneNum].tone}`}
            value={SUNDAY_ALLELUIA[toneNum].verse}
          />
          {/* stichoi is an array in the original data; stichos is singular fallback */}
          {(SUNDAY_ALLELUIA[toneNum].stichoi || SUNDAY_ALLELUIA[toneNum].stichos) && (
            <SmallTableRow
              label="Stichoi"
              value={Array.isArray(SUNDAY_ALLELUIA[toneNum].stichoi)
                ? SUNDAY_ALLELUIA[toneNum].stichoi.join(' / ')
                : SUNDAY_ALLELUIA[toneNum].stichos}
            />
          )}
        </>
      ) : <SmallTableRow label="—" value={null} />}
    </div>
  );
}

// ── Matins panel ─────────────────────────────────────────────────────────────
function MatinsPanel({ tone, matinsData }) {
  const hasData = matinsData && Object.keys(matinsData).length > 0;

  if (!hasData) {
    return (
      <div>
        <StubSection
          label="Sunday Matins — Tone Data"
          phase="Phase 3 — encode from Drive: Octoechos/tone{N}/N-1.pdf (Saturday Eve + Sunday Matins)"
        />
        <div style={{ fontSize: "0.82rem", color: C.inkLight, lineHeight: 1.6 }}>
          When encoded, this section will display:
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", color: C.inkLight }}>
            <li>Sessional hymns after Kathisma II and III</li>
            <li>Songs of Ascent — 4 antiphons × 3 stanzas</li>
            <li>Canon: Resurrection (irmos + 4 troparia + theotokion, Odes I, III–IX)</li>
            <li>Canon: Cross/Resurrection (2 troparia, Odes I, III–IX)</li>
            <li>Canon: Theotokos (2 troparia, Odes I, III–IX)</li>
            <li>Exapostilarion + Theotokion</li>
            <li>Stichera on the Praises (5 resurrection stichera)</li>
          </ul>
          <div style={{ marginTop: "0.75rem" }}>
            Encoding order per scope: Tone 8 first (unblocks P+56 All Saints Sunday),
            then Tones 1–7.
          </div>
        </div>
      </div>
    );
  }

  const { kathisma_2, kathisma_3, songs_of_ascent, canons,
    exapostilarion, exapostilarion_theotokion, praises } = matinsData;

  return (
    <div>
      {/* Sessional hymns */}
      {(kathisma_2 || kathisma_3) ? (
        <>
          <SectionHeader>Sessional Hymns — after Kathisma II</SectionHeader>
          {kathisma_2 ? (
            <>
              <SticheronBlock label="Hymn 1" text={kathisma_2.hymn_1?.text}
                verse={kathisma_2.hymn_1?.verse} />
              <SticheronBlock label="Hymn 2" text={kathisma_2.hymn_2?.text}
                verse={kathisma_2.hymn_2?.verse} />
              <SticheronBlock label="Theotokion" text={kathisma_2.theotokion} />
            </>
          ) : <StubSection label="Kathisma II sessional" phase="Phase 3" />}

          <SectionHeader>Sessional Hymns — after Kathisma III</SectionHeader>
          {kathisma_3 ? (
            <>
              <SticheronBlock label="Hymn 1" text={kathisma_3.hymn_1?.text}
                verse={kathisma_3.hymn_1?.verse} />
              <SticheronBlock label="Hymn 2" text={kathisma_3.hymn_2?.text}
                verse={kathisma_3.hymn_2?.verse} />
              <SticheronBlock label="Theotokion" text={kathisma_3.theotokion} />
            </>
          ) : <StubSection label="Kathisma III sessional" phase="Phase 3" />}
        </>
      ) : (
        <StubSection label="Sessional Hymns (Kathisma II + III)" phase="Phase 3" />
      )}

      {/* Songs of Ascent */}
      <SectionHeader>Songs of Ascent</SectionHeader>
      {songs_of_ascent ? (
        [1,2,3,4].map(n => {
          const ant = songs_of_ascent[`antiphon_${n}`];
          return ant ? (
            <div key={n} style={{ marginBottom: "0.75rem" }}>
              <SubHeader>Antiphon {n}</SubHeader>
              {ant.map((stanza, i) => (
                <SticheronBlock key={i}
                  label={i === ant.length - 1 ? 'Glory / Both now' : `Stanza ${i + 1}`}
                  text={stanza} />
              ))}
            </div>
          ) : null;
        })
      ) : <StubSection label="Songs of Ascent" phase="Phase 3" />}

      {/* Canons */}
      {canons ? (
        ['resurrection', 'cross_resurrection', 'theotokos'].map(canonKey => {
          const canon = canons[canonKey];
          if (!canon) return null;
          const label = canonKey === 'resurrection' ? 'Canon: Resurrection'
            : canonKey === 'cross_resurrection' ? 'Canon: Cross & Resurrection'
            : 'Canon: Theotokos';
          const refrain = canon.refrain || (
            canonKey === 'resurrection' ? 'Glory to Thy holy Resurrection, O Lord'
            : canonKey === 'cross_resurrection' ? 'Glory to Thy precious Cross and Resurrection, O Lord'
            : 'Most holy Theotokos save us'
          );
          const odeNums = Object.keys(canon.odes || {}).map(Number).sort((a,b) => a-b);
          return (
            <div key={canonKey}>
              <SectionHeader>{label}</SectionHeader>
              <div style={{ fontSize: "0.80rem", color: C.gold, marginBottom: "0.75rem",
                fontStyle: "italic" }}>
                Refrain: {refrain}
              </div>
              {odeNums.map(ode => {
                const odeData = canon.odes[ode];
                return (
                  <div key={ode} style={{
                    marginBottom: "1rem", borderLeft: `3px solid ${C.goldLight}`,
                    paddingLeft: "0.75rem",
                  }}>
                    <div style={{ fontSize: "0.72rem", color: C.gold, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      marginBottom: "0.35rem" }}>
                      Ode {ode}
                    </div>
                    {odeData.irmos && (
                      <SticheronBlock label="Irmos" text={odeData.irmos} />
                    )}
                    {(odeData.troparia || []).map((t, i) => (
                      <SticheronBlock key={i} index={i} text={t} />
                    ))}
                    {odeData.theotokion && (
                      <SticheronBlock label="Theotokion" text={odeData.theotokion} />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })
      ) : <StubSection label="Canons (Resurrection, Cross/Resurrection, Theotokos)" phase="Phase 3" />}

      {/* Exapostilaria */}
      <SectionHeader>Exapostilaria</SectionHeader>
      {exapostilarion ? (
        <>
          <SticheronBlock label="Resurrectional Exapostilarion" text={exapostilarion} />
          {exapostilarion_theotokion && (
            <SticheronBlock label="Theotokion" text={exapostilarion_theotokion} />
          )}
        </>
      ) : <StubSection label="Exapostilaria" phase="Phase 3" />}

      {/* Stichera on the Praises */}
      <SectionHeader>Stichera on the Praises</SectionHeader>
      {praises?.stichera?.length > 0 ? (
        praises.stichera.map((s, i) => (
          <SticheronBlock key={i} index={i} text={s.text} verse={s.verse} />
        ))
      ) : <StubSection label="Stichera on the Praises (5 resurrection stichera)" phase="Phase 3" />}
    </div>
  );
}

// ── Main browser component ───────────────────────────────────────────────────
export default function OctoechosBrowser() {
  const [selectedTone, setSelectedTone] = useState(1);
  const [toneData, setToneData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Active view: 'vespers', 'matins', 'small_tables'
  const [activeView, setActiveView] = useState('vespers');

  // Active day within vespers view
  const [activeDay, setActiveDay] = useState('sat');

  useEffect(() => {
    setLoading(true);
    setToneData(null);
    const loader = TONE_LOADERS[selectedTone];
    if (loader) {
      loader().then(mod => {
        setToneData(mod.default);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [selectedTone]);

  // Count vespers day coverage
  const vespersStats = toneData?.vespers
    ? DAY_KEYS.filter(k => toneData.vespers[k] && (
        (toneData.vespers[k].lic?.length > 0) ||
        (toneData.vespers[k].aposticha?.length > 0)
      )).length
    : 0;
  const matinsEncoded = toneData?.matins && Object.keys(toneData.matins).length > 0;

  return (
    <ToneContext.Provider value={selectedTone}>
    <div style={{
      minHeight: "100vh",
      background: C.parchment,
      fontFamily: "Georgia, 'Times New Roman', serif",
      color: C.ink,
    }}>
      {/* ── Header ── */}
      <div style={{
        background: C.ink,
        color: C.parchment,
        padding: "1.25rem 1.5rem",
        borderBottom: `3px solid ${C.gold}`,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem",
          flexWrap: "wrap" }}>
          <div style={{ fontSize: "1.1rem", letterSpacing: "0.04em", fontWeight: 400 }}>
            Octoechos Data Browser
          </div>
          <div style={{ fontSize: "0.72rem", color: C.goldLight, letterSpacing: "0.1em",
            textTransform: "uppercase" }}>
            Phase 1 — vespers migrated · matins pending Phase 3
          </div>
        </div>
        <div style={{ fontSize: "0.75rem", color: C.inkLight, marginTop: "0.35rem" }}>
          <code style={{ color: C.goldLight }}>src/data/octoechos/</code>
          {' '}— lazy-loaded per-tone files · index.js tone-independent tables
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 80px)" }}>

        {/* ── Sidebar ── */}
        <div style={{
          width: "200px", flexShrink: 0,
          borderRight: `1px solid ${C.border}`,
          background: "#F5F0E8",
          padding: "1rem 0",
        }}>
          {/* Tone picker */}
          <div style={{ padding: "0 0.75rem 0.5rem",
            fontSize: "0.68rem", color: C.inkLight, letterSpacing: "0.1em",
            textTransform: "uppercase", fontWeight: 600 }}>
            Tone
          </div>
          {[1,2,3,4,5,6,7,8].map(t => (
            <button key={t} onClick={() => setSelectedTone(t)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "0.45rem 0.75rem",
              background: selectedTone === t ? C.gold : "transparent",
              color: selectedTone === t ? "#FAF6EE" : C.inkMid,
              border: "none", cursor: "pointer",
              fontSize: "0.88rem",
              fontFamily: "Georgia, serif",
              transition: "background 0.12s",
            }}>
              Tone {t}
            </button>
          ))}

          <div style={{ margin: "1rem 0.75rem 0.5rem", borderTop: `1px solid ${C.border}` }} />

          {/* View picker */}
          <div style={{ padding: "0 0.75rem 0.5rem",
            fontSize: "0.68rem", color: C.inkLight, letterSpacing: "0.1em",
            textTransform: "uppercase", fontWeight: 600 }}>
            Section
          </div>
          {[
            { key: 'vespers',      label: 'Vespers' },
            { key: 'matins',       label: 'Matins' },
            { key: 'small_tables', label: 'Index Tables' },
          ].map(({ key, label }) => (
            <button key={key} onClick={() => setActiveView(key)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "0.45rem 0.75rem",
              background: activeView === key ? C.goldMid : "transparent",
              color: activeView === key ? C.gold : C.inkMid,
              border: "none", cursor: "pointer",
              fontSize: "0.88rem", fontFamily: "Georgia, serif",
            }}>
              {label}
              {key === 'matins' && (
                <span style={{ fontSize: "0.65rem", color: matinsEncoded ? C.green : C.amber,
                  marginLeft: "0.4rem" }}>
                  {matinsEncoded ? '●' : '○'}
                </span>
              )}
            </button>
          ))}

          {/* Day picker (only in vespers view) */}
          {activeView === 'vespers' && (
            <>
              <div style={{ margin: "1rem 0.75rem 0.5rem", borderTop: `1px solid ${C.border}` }} />
              <div style={{ padding: "0 0.75rem 0.5rem",
                fontSize: "0.68rem", color: C.inkLight, letterSpacing: "0.1em",
                textTransform: "uppercase", fontWeight: 600 }}>
                Day
              </div>
              {DAY_KEYS.map(dayKey => {
                const dayData = toneData?.vespers?.[dayKey];
                const hasLic = dayData?.lic?.length > 0;
                return (
                  <button key={dayKey} onClick={() => setActiveDay(dayKey)} style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: "0.4rem 0.75rem",
                    background: activeDay === dayKey ? C.goldMid : "transparent",
                    color: activeDay === dayKey ? C.gold : C.inkMid,
                    border: "none", cursor: "pointer",
                    fontSize: "0.82rem", fontFamily: "Georgia, serif",
                  }}>
                    <span style={{
                      display: "inline-block", width: "8px", height: "8px",
                      borderRadius: "50%", marginRight: "0.4rem",
                      background: hasLic ? C.green : C.border,
                      verticalAlign: "middle",
                    }} />
                    {dayKey === 'sat' ? 'Saturday' :
                     dayKey === 'sun_eve' ? 'Sunday Eve' :
                     dayKey.charAt(0).toUpperCase() + dayKey.slice(1)}
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* ── Main content ── */}
        <div style={{ flex: 1, padding: "1.25rem 1.5rem", overflowY: "auto" }}>

          {/* Tone header */}
          <div style={{
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            flexWrap: "wrap", gap: "0.5rem",
            marginBottom: "1rem", paddingBottom: "0.75rem",
            borderBottom: `1px solid ${C.border}`,
          }}>
            <div style={{ fontSize: "1.05rem", color: C.gold }}>
              Tone {selectedTone}
              <span style={{ fontSize: "0.75rem", color: C.inkLight, marginLeft: "0.75rem" }}>
                tone{selectedTone}.js
              </span>
            </div>
            {toneData && (
              <div style={{ fontSize: "0.75rem", color: C.inkLight }}>
                Vespers: {vespersStats}/7 days encoded
                {' · '}
                Matins: {matinsEncoded
                  ? <span style={{ color: C.green }}>encoded</span>
                  : <span style={{ color: C.amber }}>Phase 3 pending</span>
                }
              </div>
            )}
          </div>

          {loading && (
            <div style={{ padding: "2rem", color: C.inkLight, fontStyle: "italic",
              textAlign: "center" }}>
              Loading Tone {selectedTone}…
            </div>
          )}

          {!loading && toneData && activeView === 'vespers' && (
            <>
              <div style={{ fontSize: "0.82rem", color: C.inkLight, marginBottom: "1rem" }}>
                <strong style={{ color: C.gold }}>
                  {DAY_LABELS[activeDay]}
                </strong>
                <span style={{ marginLeft: "0.75rem" }}>
                  — stichera for Lord I Have Cried, aposticha, and doxastika
                </span>
              </div>
              <VespersDayPanel
                tone={selectedTone}
                dayKey={activeDay}
                dayData={toneData.vespers?.[activeDay]}
              />
            </>
          )}

          {!loading && toneData && activeView === 'matins' && (
            <MatinsPanel tone={selectedTone} matinsData={toneData.matins} />
          )}

          {!loading && activeView === 'small_tables' && (
            <SmallTablesPanel tone={selectedTone} />
          )}

          {!loading && !toneData && (
            <div style={{ color: C.inkLight, fontStyle: "italic", padding: "1rem 0" }}>
              Select a tone to begin.
            </div>
          )}
        </div>
      </div>
    </div>
    </ToneContext.Provider>
  );
}
