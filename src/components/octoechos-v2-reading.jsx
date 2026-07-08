// octoechos-v2-reading.jsx — the Octoechos READING VIEW
// ─────────────────────────────────────────────────────────────────────────────
// octoechos_reading_view_spec.md — the bound-book surface over the V2 data.
// Navigation: tone → day of week → service (RULED July 8 2026). Default
// pointing mode: "as printed" (the * / ** markers the bound page shows);
// "clean reading" splits melodic lines per encoding_rule_v2 §3.4.
//
// LAYOUT vs VISIBILITY: this file composes known §4 kinds into book
// typography (layout enumeration), but every key it does not consume still
// renders through the fallback block — nothing can be silently absent. The
// §12 audit contract lives unchanged in octoechos-v2-browser.jsx; the
// browser hosts both surfaces and this module renders reading mode only.
// Refs resolve inline (§2 of the spec); sic-registered positions carry a
// footnote glyph whose text derives from the register at runtime (no display
// copies, amendment F). Every position div carries its schema path as its
// DOM id — the deep-link anchor grammar (spec §4).
// ─────────────────────────────────────────────────────────────────────────────

import React, { useContext, createContext } from 'react';

export const ReadingContext = createContext({
  mode: 'printed', sics: {}, roots: {}, tonePrefix: '', showRubrics: true,
});

const C = {
  ink: "#1C1008", inkMid: "#3D3020", inkLight: "#9A8A70",
  gold: "#8B6914", border: "#E8DEC8", red: "#A03030",
  goldFaint: "rgba(139,105,20,0.06)",
};
const SERIF = "Georgia, 'Times New Roman', serif";
const ROMAN = { 1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX' };

// ── ref resolution (spec §2.8) ───────────────────────────────────────────────
export function resolveRef(refStr, roots) {
  const segs = refStr.split('.');
  let cur = roots[segs[0]];
  for (let i = 1; i < segs.length && cur != null; i++) {
    const m = segs[i].match(/^([^[]+)((\[\d+\])*)$/);
    if (!m) return undefined;
    cur = cur[m[1]];
    if (m[2]) for (const idx of m[2].match(/\d+/g)) cur = cur?.[Number(idx)];
  }
  return cur;
}
const isRef = (v) => v && typeof v === 'object' && typeof v.ref === 'string';
const isTextNode = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.text === 'string';

// ── pointing modes (§3.4; spec §2.9) ─────────────────────────────────────────
// "printed": the stored string verbatim. "clean": one melodic line per row —
// normalize ** / // (penultimate) first, then * / | as ordinary line ends;
// the penultimate mark stays visible as a quiet glyph. Tier-1 prose passes
// through whole in both modes.
function splitPointed(text) {
  if (!/\s(\*\*|\*|\/\/|\|)\s/.test(text)) return null;
  const pen = text.split(/\s(?:\*\*|\/\/)\s/);
  const head = pen[0], tail = pen.slice(1).join(' ');
  const lines = head.split(/\s(?:\*|\|)\s/).map(t => ({ t, pen: false }));
  if (tail) {
    lines[lines.length - 1].pen = true;
    for (const t of tail.split(/\s(?:\*|\|)\s/)) lines.push({ t, pen: false });
  }
  return lines;
}
function Marked({ text, indent = true }) {
  const { mode } = useContext(ReadingContext);
  if (mode === 'printed') {
    return <span>{text}</span>;
  }
  const lines = splitPointed(text);
  if (!lines) return <span>{text}</span>;
  return (
    <span style={{ display: "block" }}>
      {lines.map((l, i) => (
        <span key={i} style={{ display: "block", textIndent: 0, paddingLeft: indent && i > 0 ? "1.1rem" : 0 }}>
          {l.t}
          {l.pen && <span style={{ color: C.inkLight, fontSize: "0.7em", fontFamily: "monospace" }}> //</span>}
        </span>
      ))}
    </span>
  );
}

// ── sic footnote (spec §2.10) ────────────────────────────────────────────────
function SicMark({ path }) {
  const { sics } = useContext(ReadingContext);
  const hits = sics[path];
  if (!hits || hits.length === 0) return null;
  return (
    <sup title={hits.map(h => `Printed thus in ${h.file}: ${h.note}`).join('\n')}
         style={{ color: C.gold, cursor: "help", fontSize: "0.7em", marginLeft: "2px" }}>※</sup>
  );
}

// ── printed labels (§4.11) ───────────────────────────────────────────────────
const LABEL_PRINT = {
  glory: 'Glory ...,', both_now: 'Both now ...,', theotokion: 'Theotokion:',
  trinitarion: 'Trinitarion:', martyrs: 'To the martyrs:',
  for_the_reposed: 'For the reposed:',
};
function printedLabel(node) {
  if (node.sourceLabel) return node.sourceLabel;
  if (!node.label || node.label === 'plain') return null;
  const labs = Array.isArray(node.label) ? node.label : [node.label];
  return labs.map(l => LABEL_PRINT[l] ?? l).join(' ');
}

// ── typography atoms ─────────────────────────────────────────────────────────
export function RHeading({ children, id }) {
  return (
    <div id={id} style={{
      textAlign: "center", fontFamily: SERIF, fontSize: "0.78rem",
      letterSpacing: "0.14em", color: C.inkMid, margin: "18px 0 6px",
      textTransform: "uppercase",
    }}>{children}</div>
  );
}
export function RRubric({ text, center = false, id }) {
  const { showRubrics } = useContext(ReadingContext);
  if (!showRubrics) return id ? <span id={id} /> : null;
  return (
    <div id={id} style={{
      fontFamily: SERIF, fontStyle: "italic", fontSize: "0.82rem",
      color: C.inkLight, margin: "8px 0", textAlign: center ? "center" : "left",
      lineHeight: 1.5, background: C.goldFaint, borderLeft: `2px solid #D4C49A`,
      padding: "5px 9px", borderRadius: 0,
    }}>{text}</div>
  );
}
function RSpecMel({ text }) {
  return (
    <div style={{
      textAlign: "center", fontFamily: SERIF, fontStyle: "italic",
      fontSize: "0.8rem", color: C.inkMid, margin: "4px 0",
    }}>Spec. Mel.: “{text}”:</div>
  );
}
export function RVerse({ node, path }) {
  const full = useContext(ReadingContext).tonePrefix + path;
  return (
    <div id={full} title={node.src ? `${node.src.file} — ${node.src.locus}` : undefined} style={{
      fontFamily: SERIF, fontStyle: "italic", fontSize: "0.86rem",
      color: C.inkMid, margin: "6px 0 2px", paddingLeft: "1.4rem",
      textIndent: "-0.6rem", lineHeight: 1.55,
    }}>
      Verse: <Marked text={node.text} indent={false} />
      <SicMark path={full} />
    </div>
  );
}

// The universal hymn paragraph.
export function RText({ node, path }) {
  const ctx = useContext(ReadingContext);
  const full = ctx.tonePrefix + path;
  const lab = printedLabel(node);
  return (
    <div id={full} title={node.src ? `${node.src.file} — ${node.src.locus}` : undefined}
         style={{ margin: "7px 0" }}>
      {node.spec_mel && <RSpecMel text={node.spec_mel} />}
      {node.refrain && (
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "0.82rem", color: C.gold, margin: "4px 0 2px" }}>
          Refrain: {node.refrain}
        </div>
      )}
      <div style={{
        fontFamily: SERIF, fontSize: "0.95rem", color: C.ink, lineHeight: 1.65,
        textIndent: ctx.mode === 'printed' ? "1.4rem" : 0,
      }}>
        {lab && <span style={{ fontStyle: "italic", color: C.gold }}>{lab} </span>}
        <Marked text={node.text} />
        {node.repeat && <span style={{ color: C.inkLight, fontStyle: "italic" }}> (Twice)</span>}
        {node.incipit_ref && (
          <a href={`#${node.incipit_ref}`} title={`Incipit — repeats ${node.incipit_ref} (§2.7); the printed line is an opening-words reference`}
             style={{ color: C.gold, fontSize: "0.75rem", textDecoration: "none", marginLeft: "6px" }}>↩ repeat</a>
        )}
        <SicMark path={full} />
      </div>
    </div>
  );
}

// ── interleaving (spec §2 — the book alternates verse and sticheron) ─────────
function deref(v, roots) { return isRef(v) ? resolveRef(v.ref, roots) : v; }

export function RInterleaved({ verses, items, itemsPath, versesPath, firstUnversed = false }) {
  const { roots } = useContext(ReadingContext);
  const vs = deref(verses, roots) ?? [];
  const vList = Array.isArray(vs) ? vs : (vs.sets ? [] : [vs]);
  const out = [];
  let vi = 0;
  (items ?? []).forEach((it, i) => {
    const unversed = firstUnversed && i === 0;
    // labeled items (Glory/Both-now/closers) never take a verse before them
    const labeled = it.label && it.label !== 'plain';
    if (!unversed && !labeled && vi < vList.length) {
      out.push(<RVerse key={`v${vi}`} node={vList[vi]} path={`${versesPath}[${vi}]`} />);
      vi += 1;
    }
    out.push(<RText key={`i${i}`} node={it} path={`${itemsPath}[${i}]`} />);
  });
  for (; vi < vList.length; vi += 1) {
    out.push(<RVerse key={`v${vi}`} node={vList[vi]} path={`${versesPath}[${vi}]`} />);
  }
  return <div>{out}</div>;
}

// ── fallback for anything the composed renderers do not consume ──────────────
// (visibility guarantee: unknown keys surface here, book-plausibly styled)
export function RFallback({ value, path, fieldKey }) {
  const { roots } = useContext(ReadingContext);
  if (value == null) return null;
  if (typeof value === 'string') {
    return /rubric|note/i.test(fieldKey ?? '') ? <RRubric text={value} /> : (
      <div style={{ fontFamily: SERIF, fontSize: "0.9rem", color: C.ink, margin: "6px 0" }}>{value}</div>
    );
  }
  if (isRef(value)) {
    const r = resolveRef(value.ref, roots);
    if (r === undefined) {
      return <div style={{ fontSize: "0.75rem", color: C.red }}>[unresolved ref: {value.ref}]</div>;
    }
    return (
      <>
        {value.rubric && <RRubric text={value.rubric} />}
        <RFallback value={r} path={value.ref} fieldKey={fieldKey} />
      </>
    );
  }
  if (isTextNode(value)) return <RText node={value} path={path} />;
  if (Array.isArray(value)) {
    return <div>{value.map((v, i) => <RFallback key={i} value={v} path={`${path}[${i}]`} fieldKey={fieldKey} />)}</div>;
  }
  if (typeof value === 'object') {
    return (
      <div>
        {Object.entries(value).filter(([k]) => k !== 'tone').map(([k, v]) => (
          <div key={k}>
            {!(isTextNode(v) || typeof v === 'string') && (
              <div style={{ fontFamily: SERIF, fontSize: "0.72rem", color: C.inkLight, marginTop: "6px", letterSpacing: "0.06em" }}>{k.replace(/_/g, ' ')}</div>
            )}
            <RFallback value={v} path={`${path}.${k}`} fieldKey={k} />
          </div>
        ))}
      </div>
    );
  }
  return <span>{String(value)}</span>;
}

// prokeimenon / alleluia style group: {tone, text, verse|verses}
export function RProk({ group, path, label }) {
  const { roots } = useContext(ReadingContext);
  const g = deref(group, roots);
  if (!g) return null;
  const consumed = new Set(['tone', 'text', 'verse', 'verses', 'rubric', 'ref']);
  return (
    <div style={{ margin: "8px 0" }}>
      {group.rubric && <RRubric text={group.rubric} />}
      {g.text && isTextNode(g.text) && (
        <div style={{ fontFamily: SERIF, fontSize: "0.9rem", color: C.ink, lineHeight: 1.6 }}>
          <span style={{ fontStyle: "italic", color: C.gold }}>
            {label}{typeof g.tone === 'number' ? `, in Tone ${ROMAN[g.tone]}` : ''}:{' '}
          </span>
          <Marked text={g.text.text} />
        </div>
      )}
      {isTextNode(g.verse) && <RVerse node={g.verse} path={`${path}.verse`} />}
      {Array.isArray(g.verses) && g.verses.map((v, i) => <RVerse key={i} node={v} path={`${path}.verses[${i}]`} />)}
      {Object.entries(g).filter(([k, v]) => !consumed.has(k) && v != null && (typeof v !== 'object' || isTextNode(v) || Array.isArray(v)))
        .map(([k, v]) => <RFallback key={k} value={v} path={`${path}.${k}`} fieldKey={k} />)}
    </div>
  );
}

// ── canons ───────────────────────────────────────────────────────────────────
const ODE_ORDER = ['1','3','4','5','6','7','8','9'];

export function ROdesB({ odes, path }) {
  return (
    <div>
      {ODE_ORDER.filter(o => odes[o]).map(o => {
        const ode = odes[o];
        return (
          <div key={o}>
            <RHeading>Ode {ROMAN[Number(o)]}</RHeading>
            {ode.irmos && (
              <div style={{ margin: "6px 0" }}>
                <span style={{ fontFamily: SERIF, fontStyle: "italic", color: C.inkMid, fontSize: "0.9rem" }}>Irmos: </span>
                <span style={{ fontFamily: SERIF, fontSize: "0.95rem", color: C.ink, lineHeight: 1.65 }}>
                  <RTextInline node={ode.irmos} path={`${path}.${o}.irmos`} />
                </span>
              </div>
            )}
            {(ode.items ?? []).map((it, i) => <RText key={i} node={it} path={`${path}.${o}.items[${i}]`} />)}
          </div>
        );
      })}
    </div>
  );
}
function RTextInline({ node, path }) {
  const ctx = useContext(ReadingContext);
  const full = ctx.tonePrefix + path;
  return (
    <span id={full} title={node.src ? `${node.src.file} — ${node.src.locus}` : undefined}>
      <Marked text={node.text} />
      {node.incipit_ref && (
        <a href={`#${node.incipit_ref}`} title={`Incipit — same as ${node.incipit_ref}`}
           style={{ color: C.gold, fontSize: "0.75rem", textDecoration: "none", marginLeft: "6px" }}>↩</a>
      )}
      <SicMark path={full} />
    </span>
  );
}

const SUBCANON_LABEL = {
  resurrection: null,
  cross_resurrection: 'Of the Cross and Resurrection',
  theotokos: 'Of the Theotokos',
};
export function ROdesA({ odes, path }) {
  return (
    <div>
      {ODE_ORDER.filter(o => odes[o]).map(o => {
        const ode = odes[o];
        return (
          <div key={o}>
            <RHeading>Ode {ROMAN[Number(o)]}</RHeading>
            {ode.irmos && (
              <div style={{ margin: "6px 0", fontFamily: SERIF, fontSize: "0.95rem", color: C.ink, lineHeight: 1.65 }}>
                <span style={{ fontStyle: "italic", color: C.inkMid }}>Irmos: </span>
                <RTextInline node={ode.irmos} path={`${path}.${o}.irmos`} />
              </div>
            )}
            {['resurrection', 'cross_resurrection', 'theotokos'].filter(g => ode[g]).map(g => (
              <div key={g}>
                {SUBCANON_LABEL[g] && (
                  <div style={{ textAlign: "center", fontFamily: SERIF, fontStyle: "italic", fontSize: "0.8rem", color: C.inkMid, margin: "8px 0 2px" }}>
                    {SUBCANON_LABEL[g]}:
                  </div>
                )}
                {ode[g].refrain && (
                  <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "0.82rem", color: C.gold, margin: "4px 0 2px" }}>
                    Refrain: {ode[g].refrain}
                  </div>
                )}
                {(ode[g].troparia ?? []).map((t, i) => <RText key={i} node={t} path={`${path}.${o}.${g}.troparia[${i}]`} />)}
                {ode[g].closer && <RText node={ode[g].closer} path={`${path}.${o}.${g}.closer`} />}
              </div>
            ))}
            {ode.menaion_rubric && <RRubric text={ode.menaion_rubric} center />}
            {ode.post_rubric && <RRubric text={ode.post_rubric} center />}
          </div>
        );
      })}
    </div>
  );
}

export function RCanon({ canon, path, shape }) {
  if (!canon) return null;
  const consumed = new Set(['title', 'heading_rubric', 'composer', 'acrostic', 'odes', 'condition']);
  return (
    <div>
      {canon.heading_rubric && <RRubric text={canon.heading_rubric} center />}
      {canon.condition && <RRubric text={`(${canon.condition})`} center />}
      {shape === 'A'
        ? <ROdesA odes={canon.odes ?? {}} path={`${path}.odes`} />
        : <ROdesB odes={canon.odes ?? {}} path={`${path}.odes`} />}
      {Object.entries(canon).filter(([k]) => !consumed.has(k))
        .map(([k, v]) => <RFallback key={k} value={v} path={`${path}.${k}`} fieldKey={k} />)}
    </div>
  );
}

// ── leftovers helper — visibility guarantee for unconsumed keys ──────────────
function Leftovers({ obj, consumed, path }) {
  const extra = Object.keys(obj).filter(k => !consumed.has(k));
  if (extra.length === 0) return null;
  return (
    <div>
      {extra.map(k => (
        <div key={k}>
          <div style={{ fontFamily: SERIF, fontSize: "0.72rem", color: C.inkLight, marginTop: "10px", letterSpacing: "0.06em" }}>
            {k.replace(/_/g, ' ')}
          </div>
          <RFallback value={obj[k]} path={`${path}.${k}`} fieldKey={k} />
        </div>
      ))}
    </div>
  );
}

// ── service composers (print order; leftovers always surface) ────────────────
function SvcLittleVespers({ v }) {
  const consumed = new Set(['rubric', 'lic', 'lic_verses', 'lic_theotokion', 'prokeimenon',
    'aposticha', 'aposticha_theotokion', 'closing_rubric', 'dismissal_rubric']);
  return (
    <div>
      <RHeading id="sec-lic">At Little Vespers</RHeading>
      {v.rubric && <RRubric text={v.rubric} center />}
      <RInterleaved verses={v.lic_verses} items={v.lic} itemsPath="little_vespers.lic" versesPath="little_vespers.lic_verses" />
      {v.lic_theotokion && <RText node={v.lic_theotokion} path="little_vespers.lic_theotokion" />}
      {v.prokeimenon && <RProk group={v.prokeimenon} path="little_vespers.prokeimenon" label="The Prokeimenon" />}
      {v.aposticha && (
        <div>
          <RHeading id="sec-apost">On the Aposticha</RHeading>
          {(v.aposticha.resurrection ?? []).map((n, i) => <RText key={i} node={n} path={`little_vespers.aposticha.resurrection[${i}]`} />)}
          <RInterleaved verses={v.aposticha.theotokos_verses} items={v.aposticha.theotokos}
            itemsPath="little_vespers.aposticha.theotokos" versesPath="little_vespers.aposticha.theotokos_verses" />
        </div>
      )}
      {v.aposticha_theotokion && <RText node={v.aposticha_theotokion} path="little_vespers.aposticha_theotokion" />}
      {v.closing_rubric && <RRubric text={v.closing_rubric} center />}
      {v.dismissal_rubric && <RRubric text={v.dismissal_rubric} center />}
      <Leftovers obj={v} consumed={consumed} path="little_vespers" />
    </div>
  );
}

function SvcGreatVespers({ v }) {
  const consumed = new Set(['rubric', 'lic', 'lic_verses', 'lic_menaion_rubric', 'lic_menaion_verses',
    'dogmatikon_rubric', 'dogmatikon', 'prokeimenon', 'aposticha', 'aposticha_verses',
    'aposticha_glory_rubric', 'aposticha_theotokion', 'vigil_rubric', 'no_vigil_rubric']);
  return (
    <div>
      <RHeading id="sec-lic">At Great Vespers</RHeading>
      {v.rubric && <RRubric text={v.rubric} center />}
      <RInterleaved verses={v.lic_verses} items={v.lic} itemsPath="great_vespers.lic" versesPath="great_vespers.lic_verses" />
      {v.lic_menaion_rubric && <RRubric text={v.lic_menaion_rubric} center />}
      {(v.lic_menaion_verses ?? []).map((n, i) => <RVerse key={i} node={n} path={`great_vespers.lic_menaion_verses[${i}]`} />)}
      {v.dogmatikon_rubric && <RRubric text={v.dogmatikon_rubric} center />}
      {v.dogmatikon && <RText node={v.dogmatikon} path="great_vespers.dogmatikon" />}
      {v.prokeimenon && <RProk group={v.prokeimenon} path="great_vespers.prokeimenon" label="The Prokeimenon" />}
      {v.aposticha && (
        <div>
          <RHeading id="sec-apost">On the Aposticha</RHeading>
          <RInterleaved verses={v.aposticha_verses} items={v.aposticha} firstUnversed
            itemsPath="great_vespers.aposticha" versesPath="great_vespers.aposticha_verses" />
        </div>
      )}
      {v.aposticha_glory_rubric && <RRubric text={v.aposticha_glory_rubric} center />}
      {v.aposticha_theotokion && <RText node={v.aposticha_theotokion} path="great_vespers.aposticha_theotokion" />}
      {v.vigil_rubric && <RProk group={v.vigil_rubric} path="great_vespers.vigil_rubric" label="At the Vigil" />}
      {v.no_vigil_rubric && <RRubric text={v.no_vigil_rubric} center />}
      <Leftovers obj={v} consumed={consumed} path="great_vespers" />
    </div>
  );
}

function SvcVespersWeekday({ v, eve }) {
  const p = `vespers_weekday.${eve}`;
  const consumed = new Set(['rubric', 'lic', 'lic_theotokion', 'prokeimenon', 'aposticha',
    'aposticha_theotokion', 'closing_rubric']);
  const lic = v.lic ?? {};
  return (
    <div>
      <RHeading id="sec-lic">At Vespers</RHeading>
      {v.rubric && <RRubric text={v.rubric} center />}
      <RInterleaved verses={lic.octoechos_verses} items={lic.octoechos}
        itemsPath={`${p}.lic.octoechos`} versesPath={`${p}.lic.octoechos_verses`} />
      {lic.menaion_rubric && <RRubric text={lic.menaion_rubric} center id="sec-fallback" />}
      <RInterleaved verses={lic.menaion_verses} items={lic.menaion_fallback}
        itemsPath={`${p}.lic.menaion_fallback`} versesPath={`${p}.lic.menaion_verses`} />
      {v.lic_theotokion && <RText node={v.lic_theotokion} path={`${p}.lic_theotokion`} />}
      {v.prokeimenon && <RProk group={v.prokeimenon} path={`${p}.prokeimenon`} label="The Prokeimenon" />}
      {v.aposticha && (
        <div>
          <RHeading id="sec-apost">On the Aposticha</RHeading>
          {v.aposticha.rubric && <RRubric text={v.aposticha.rubric} center />}
          <RInterleaved verses={v.aposticha.verses} items={v.aposticha.items} firstUnversed
            itemsPath={`${p}.aposticha.items`} versesPath={`${p}.aposticha.verses`} />
        </div>
      )}
      {v.aposticha_theotokion && <RText node={v.aposticha_theotokion} path={`${p}.aposticha_theotokion`} />}
      {v.closing_rubric && <RRubric text={v.closing_rubric} center id="sec-closing" />}
      <Leftovers obj={v} consumed={consumed} path={p} />
    </div>
  );
}

function SvcCompline({ cpl, night }) {
  const p = `compline.${night}`;
  const consumed = new Set(['frame_rubric', 'canon', 'after_ode6', 'closing_rubric']);
  return (
    <div>
      <RHeading id="sec-canon">At Compline</RHeading>
      {cpl.frame_rubric && <RRubric text={cpl.frame_rubric} center />}
      <RCanon canon={cpl.canon} path={`${p}.canon`} shape="B" />
      {cpl.after_ode6 && (
        <div id="sec-after6">
          {cpl.after_ode6.rubric && <RRubric text={cpl.after_ode6.rubric} center />}
          {cpl.after_ode6.sessional && <RText node={cpl.after_ode6.sessional} path={`${p}.after_ode6.sessional`} />}
        </div>
      )}
      {cpl.closing_rubric && <RRubric text={cpl.closing_rubric} center id="sec-closing" />}
      <Leftovers obj={cpl} consumed={consumed} path={p} />
    </div>
  );
}

function SvcNocturns({ n }) {
  const consumed = new Set(['frame_rubric', 'canon', 'after_ode3', 'after_ode6',
    'gregory_rubric', 'closing_rubric']);
  const greg = n.gregory_rubric;
  return (
    <div>
      <RHeading id="sec-canon">At Nocturns</RHeading>
      {n.frame_rubric && <RRubric text={n.frame_rubric} center />}
      <RCanon canon={n.canon} path="nocturns.canon" shape="B" />
      {['after_ode3', 'after_ode6'].filter(k => n[k]).map(k => (
        <div key={k}>
          {n[k].sessional && <RText node={n[k].sessional} path={`nocturns.${k}.sessional`} />}
          {n[k].theotokion && <RText node={n[k].theotokion} path={`nocturns.${k}.theotokion`} />}
        </div>
      ))}
      {greg && (
        <div id="sec-gregory">
          {greg.rubric && <RRubric text={greg.rubric} center />}
          {Array.isArray(greg.stanzas)
            ? greg.stanzas.map((st, i) => <RText key={i} node={st} path={`nocturns.gregory_rubric.stanzas[${i}]`} />)
            : <RFallback value={greg} path="nocturns.gregory_rubric" fieldKey="gregory_rubric" />}
        </div>
      )}
      {n.closing_rubric && <RRubric text={n.closing_rubric} center />}
      <Leftovers obj={n} consumed={consumed} path="nocturns" />
    </div>
  );
}

function SvcMatinsSunday({ m, core }) {
  const consumed = new Set(['god_is_lord_rubric', 'sessionals', 'polyeleos_rubric',
    'evlogitaria_rubric', 'hypakoe', 'anabathmoi', 'prokeimenon', 'canon',
    'exapostilarion_rubric', 'praises', 'doxology_troparion']);
  return (
    <div>
      <RHeading id="sec-sessionals">At Matins</RHeading>
      {m.god_is_lord_rubric && <RRubric text={m.god_is_lord_rubric} center />}
      {(m.sessionals ?? []).map((s, i) => (
        <div key={i}>
          {s.rubric && <RRubric text={s.rubric} center />}
          <RInterleaved verses={s.verses} items={s.items} firstUnversed
            itemsPath={`matins.sessionals[${i}].items`} versesPath={`matins.sessionals[${i}].verses`} />
          {s.closer && <RText node={s.closer} path={`matins.sessionals[${i}].closer`} />}
        </div>
      ))}
      {m.polyeleos_rubric && (
        <div>
          <RHeading id="sec-polyeleos">Polyeleos</RHeading>
          <RFallback value={m.polyeleos_rubric} path="matins.polyeleos_rubric" fieldKey="polyeleos" />
        </div>
      )}
      {m.evlogitaria_rubric && (
        <div>
          <RHeading>The Evlogitaria</RHeading>
          <RFallback value={m.evlogitaria_rubric} path="matins.evlogitaria_rubric" fieldKey="evlogitaria" />
        </div>
      )}
      {m.hypakoe && (<div><RHeading id="sec-hypakoe">The Sessional Hymn (Hypakoe)</RHeading><RText node={m.hypakoe} path="matins.hypakoe" /></div>)}
      {(m.anabathmoi ?? []).length > 0 && (
        <div>
          <RHeading id="sec-ascent">The Songs of Ascent</RHeading>
          {m.anabathmoi.map((a, i) => (
            <div key={i}>
              <div style={{ textAlign: "center", fontFamily: SERIF, fontStyle: "italic", fontSize: "0.8rem", color: C.inkMid, margin: "6px 0 2px" }}>
                {i + 1}{['st', 'nd', 'rd'][i] ?? 'th'} Antiphon:
              </div>
              {(a.troparia ?? []).map((t, j) => <RText key={j} node={t} path={`matins.anabathmoi[${i}].troparia[${j}]`} />)}
              {a.gloria && <RText node={a.gloria} path={`matins.anabathmoi[${i}].gloria`} />}
            </div>
          ))}
        </div>
      )}
      {m.prokeimenon && <RProk group={m.prokeimenon} path="matins.prokeimenon" label="Prokeimenon" />}
      {m.canon && (<div><RHeading id="sec-canons">The Canons</RHeading><RCanon canon={m.canon} path="matins.canon" shape="A" /></div>)}
      {core?.kontakion && (
        <div>
          <RHeading id="sec-kontakion">After Ode VI — Kontakion and Ikos</RHeading>
          <RText node={core.kontakion} path="kontakion" />
          {core.ikos && <RText node={core.ikos} path="ikos" />}
        </div>
      )}
      {m.exapostilarion_rubric && <RRubric text={m.exapostilarion_rubric} center />}
      {m.praises && (
        <div>
          <RHeading id="sec-praises">On the Praises</RHeading>
          {m.praises.rubric && <RRubric text={m.praises.rubric} center />}
          <RInterleaved verses={m.praises.verses} items={m.praises.stichera}
            itemsPath="matins.praises.stichera" versesPath="matins.praises.verses" />
          {m.praises.gloria_rubric && <RRubric text={m.praises.gloria_rubric} center />}
          {m.praises.theotokion && <RText node={m.praises.theotokion} path="matins.praises.theotokion" />}
        </div>
      )}
      {m.doxology_troparion && (
        <div>
          <RHeading id="sec-doxology">Troparion after the Great Doxology</RHeading>
          <RText node={m.doxology_troparion} path="matins.doxology_troparion" />
        </div>
      )}
      <Leftovers obj={m} consumed={consumed} path="matins" />
    </div>
  );
}

function SvcMatinsWeekday({ m, morn }) {
  const p = `matins_weekday.${morn}`;
  const consumed = new Set(['sessionals', 'canons', 'magnificat_rubric', 'post_canon_rubric',
    'praises', 'aposticha', 'aposticha_theotokion', 'closing_rubric']);
  return (
    <div>
      <RHeading id="sec-sessionals">At Matins</RHeading>
      {(m.sessionals ?? []).map((s, i) => (
        <div key={i}>
          {s.rubric && <RRubric text={s.rubric} center />}
          <RInterleaved verses={s.verses} items={s.items} firstUnversed
            itemsPath={`${p}.sessionals[${i}].items`} versesPath={`${p}.sessionals[${i}].verses`} />
          {s.closer && <RText node={s.closer} path={`${p}.sessionals[${i}].closer`} />}
        </div>
      ))}
      <div id="sec-canons" />
      {(m.canons ?? []).map((c, i) => (
        <div key={i}><RCanon canon={c} path={`${p}.canons[${i}]`} shape="B" /></div>
      ))}
      {m.magnificat_rubric && <RRubric text={m.magnificat_rubric} center />}
      {m.post_canon_rubric && <RRubric text={m.post_canon_rubric} center />}
      {m.praises && (
        <div>
          <RHeading id="sec-praises">On the Praises</RHeading>
          {m.praises.rubric && <RRubric text={m.praises.rubric} center />}
          <RInterleaved verses={m.praises.verses} items={m.praises.items}
            itemsPath={`${p}.praises.items`} versesPath={`${p}.praises.verses`} />
          {m.praises.theotokion && <RText node={m.praises.theotokion} path={`${p}.praises.theotokion`} />}
          {m.praises.doxology_rubric && <RRubric text={m.praises.doxology_rubric} center />}
        </div>
      )}
      {m.aposticha && (
        <div>
          <RHeading id="sec-apost">On the Aposticha</RHeading>
          {m.aposticha.rubric && <RRubric text={m.aposticha.rubric} center />}
          <RInterleaved verses={m.aposticha.verses} items={m.aposticha.items} firstUnversed
            itemsPath={`${p}.aposticha.items`} versesPath={`${p}.aposticha.verses`} />
        </div>
      )}
      {m.aposticha_theotokion && <RText node={m.aposticha_theotokion} path={`${p}.aposticha_theotokion`} />}
      {m.closing_rubric && <RRubric text={m.closing_rubric} center id="sec-closing" />}
      <Leftovers obj={m} consumed={consumed} path={p} />
    </div>
  );
}

function SvcLiturgySunday({ l, core }) {
  const consumed = new Set(['beatitudes', 'prokeimenon', 'alleluia']);
  return (
    <div>
      <RHeading id="sec-beatitudes">At Liturgy</RHeading>
      {l.beatitudes && (
        <div>
          {l.beatitudes.rubric && <RRubric text={l.beatitudes.rubric} center />}
          {(l.beatitudes.troparia ?? []).map((t, i) => <RText key={i} node={t} path={`liturgy.beatitudes.troparia[${i}]`} />)}
          {l.beatitudes.gloria && <RText node={l.beatitudes.gloria} path="liturgy.beatitudes.gloria" />}
          {l.beatitudes.theotokion && <RText node={l.beatitudes.theotokion} path="liturgy.beatitudes.theotokion" />}
        </div>
      )}
      {core?.troparion && (
        <div>
          <RHeading>Resurrection Troparion</RHeading>
          <RText node={core.troparion} path="troparion" />
        </div>
      )}
      {core?.kontakion && (
        <div>
          <RHeading>Resurrection Kontakion</RHeading>
          <RText node={core.kontakion} path="kontakion" />
        </div>
      )}
      <div id="sec-propers" />
      {l.prokeimenon && <RProk group={l.prokeimenon} path="liturgy.prokeimenon" label="The Prokeimenon" />}
      {l.alleluia && <RProk group={l.alleluia} path="liturgy.alleluia" label="Alleluia" />}
      <Leftovers obj={l} consumed={consumed} path="liturgy" />
    </div>
  );
}

function SvcLiturgyWeekday({ l, morn }) {
  const p = `liturgy_weekday.${morn}`;
  const consumed = new Set(['beatitudes', 'prokeimenon', 'alleluia', 'communion', 'alleluia_note']);
  return (
    <div>
      <RHeading id="sec-beatitudes">At Liturgy</RHeading>
      {l.beatitudes && (
        <div>
          {l.beatitudes.rubric && <RRubric text={l.beatitudes.rubric} center />}
          {(l.beatitudes.items ?? []).map((t, i) => <RText key={i} node={t} path={`${p}.beatitudes.items[${i}]`} />)}
        </div>
      )}
      <div id="sec-propers" />
      {l.prokeimenon && <RProk group={l.prokeimenon} path={`${p}.prokeimenon`} label="The Prokeimenon" />}
      {l.alleluia && <RProk group={l.alleluia} path={`${p}.alleluia`} label="Alleluia" />}
      {l.communion && (
        <div style={{ margin: "8px 0", fontFamily: SERIF, fontSize: "0.9rem", color: C.ink }}>
          <span style={{ fontStyle: "italic", color: C.gold }}>Communion Verse: </span>
          {isRef(l.communion)
            ? <RFallback value={l.communion} path={`${p}.communion`} fieldKey="communion" />
            : <RTextInline node={l.communion} path={`${p}.communion`} />}
        </div>
      )}
      {l.alleluia_note && <RRubric text={l.alleluia_note} />}
      <Leftovers obj={l} consumed={consumed} path={p} />
    </div>
  );
}

// ── day-slot navigation model (spec §1: tone → day → service) ────────────────
const WK = [['sun','Sunday'],['mon','Monday'],['tue','Tuesday'],['wed','Wednesday'],['thu','Thursday'],['fri','Friday']];
export const DAY_SLOTS = (() => {
  const slots = [];
  slots.push({ id: 'sat_eve', label: 'Saturday Evening', services: [
    { id: 'lv', label: 'Little Vespers', claim: 'little_vespers', render: d => <SvcLittleVespers v={d.little_vespers} />,
      sections: [['sec-lic', 'Lord, I have cried'], ['sec-apost', 'Aposticha']] },
    { id: 'gv', label: 'Great Vespers', claim: 'great_vespers', render: d => <SvcGreatVespers v={d.great_vespers} />,
      sections: [['sec-lic', 'Lord, I have cried'], ['sec-apost', 'Aposticha']] },
    { id: 'cpl', label: 'Compline', claim: 'compline.sat', render: d => <SvcCompline cpl={d.compline.sat} night="sat" />,
      sections: [['sec-canon', 'Canon'], ['sec-after6', 'After Ode VI'], ['sec-closing', 'Closing']] },
  ]});
  slots.push({ id: 'sun', label: 'Sunday', services: [
    { id: 'noc', label: 'Nocturns', claim: 'nocturns', render: d => <SvcNocturns n={d.nocturns} />,
      sections: [['sec-canon', 'Trinity canon'], ['sec-gregory', 'Hymn of Gregory']] },
    { id: 'mat', label: 'Matins', claim: 'matins', render: d => <SvcMatinsSunday m={d.matins} core={d} />,
      sections: [['sec-sessionals', 'Sessional hymns'], ['sec-polyeleos', 'Polyeleos'], ['sec-hypakoe', 'Hypakoe'], ['sec-ascent', 'Songs of Ascent'], ['sec-canons', 'The Canons'], ['sec-kontakion', 'Kontakion & Ikos'], ['sec-praises', 'Praises'], ['sec-doxology', 'Doxology']] },
    { id: 'lit', label: 'Liturgy', claim: 'liturgy', render: d => <SvcLiturgySunday l={d.liturgy} core={d} />,
      sections: [['sec-beatitudes', 'Beatitudes'], ['sec-propers', 'Prokeimenon & Alleluia']] },
  ]});
  for (const [k, name] of WK) {
    slots.push({ id: `${k}_eve`, label: `${name} Evening`, services: [
      { id: 'vsp', label: 'Vespers', claim: `vespers_weekday.${k}`, render: d => <SvcVespersWeekday v={d.vespers_weekday[k]} eve={k} />,
        sections: [['sec-lic', 'Lord, I have cried'], ['sec-fallback', 'Menaion fallback'], ['sec-apost', 'Aposticha'], ['sec-closing', 'Closing']] },
      { id: 'cpl', label: 'Compline', claim: `compline.${k}`, render: d => <SvcCompline cpl={d.compline[k]} night={k} />,
        sections: [['sec-canon', 'Canon'], ['sec-after6', 'After Ode VI'], ['sec-closing', 'Closing']] },
    ]});
    const morn = { sun: 'mon', mon: 'tue', tue: 'wed', wed: 'thu', thu: 'fri', fri: 'sat' }[k];
    const mname = { mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday' }[morn];
    slots.push({ id: morn, label: mname, services: [
      { id: 'mat', label: 'Matins', claim: `matins_weekday.${morn}`, render: d => <SvcMatinsWeekday m={d.matins_weekday[morn]} morn={morn} />,
        sections: [['sec-sessionals', 'Sessional hymns'], ['sec-canons', 'The Canons'], ['sec-praises', 'Praises'], ['sec-apost', 'Aposticha'], ['sec-closing', 'Closing']] },
      { id: 'lit', label: 'Liturgy', claim: `liturgy_weekday.${morn}`, render: d => <SvcLiturgyWeekday l={d.liturgy_weekday[morn]} morn={morn} />,
        sections: [['sec-beatitudes', 'Beatitudes'], ['sec-propers', 'Prokeimenon & Alleluia']] },
    ]});
  }
  return slots;
})();

// tone landing block: the §4.1 canonical hymns
export function SvcCanonical({ d }) {
  return (
    <div>
      <RHeading>Canonical hymns of the tone</RHeading>
      {d.troparion && (<div><RRubric text="Resurrection Troparion:" center /><RText node={d.troparion} path="troparion" /></div>)}
      {d.dismissal_theotokion && (<div><RRubric text="Resurrection (Dismissal) Theotokion:" center /><RText node={d.dismissal_theotokion} path="dismissal_theotokion" /></div>)}
      {d.kontakion && (<div><RRubric text="Resurrection Kontakion:" center /><RText node={d.kontakion} path="kontakion" /></div>)}
      {d.ikos && (<div><RRubric text="Ikos:" center /><RText node={d.ikos} path="ikos" /></div>)}
    </div>
  );
}
