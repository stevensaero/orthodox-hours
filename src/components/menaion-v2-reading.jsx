// menaion-v2-reading.jsx — the Menaion READING VIEW
// ─────────────────────────────────────────────────────────────────────────────
// menaion_v2_spec.md §8 — the bound-book surface over the V2 data.
// Navigation: month → day → commemoration → service.
//
// STYLING IS DELIBERATELY IDENTICAL to octoechos-v2-reading.jsx: the same C
// palette, the same SERIF stack, the same heading/rubric/verse treatment. The
// two books must read as one tool, not as two iterations.
//
// ORDER COMES FROM THE DATA, NOT FROM THIS FILE. Every service object carries
// `order: []` — its element keys in the sequence the page prints them (§5.1).
// The composer walks that array. This is what makes "looks like the page" a
// property of the encoding rather than of the component, and it is the one
// structural difference from the Octoechos reading module, whose per-service
// composers hard-code a known order.
//
// Every position div carries its schema path as its DOM id — the deep-link
// anchor grammar (§10.1). Sic-registered positions carry a footnote glyph whose
// text derives from the register at runtime (no display copies, §7.4).
// ─────────────────────────────────────────────────────────────────────────────

import React, { useContext, createContext } from 'react';
import { registryLookup, SERVICE_HEADINGS, SERVICE_ORDER } from '../data/menaion_v2/presentation.js';

export const ReadingContext = createContext({
  mode: 'printed', sics: {}, prefix: '', showRubrics: true,
});

const C = {
  ink: "#1C1008", inkMid: "#3D3020", inkLight: "#9A8A70",
  gold: "#8B6914", border: "#E8DEC8", red: "#A03030",
  goldFaint: "rgba(139,105,20,0.06)",
};
const SERIF = "Georgia, 'Times New Roman', serif";
const ROMAN = { 1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX' };

const isTextNode = v => v && typeof v === 'object' && !Array.isArray(v) && typeof v.text === 'string';
const isAbsence  = v => v && typeof v === 'object' && v.absent === true;
// STANDING WARNING #7, AGAIN — and this time in the component. The gate's
// isReading() was keyed on `citation_verbatim` and corrected to `heading`,
// because `citation_verbatim` is the one field a citationless reading lacks:
// the detector required exactly what its check was meant to catch. The
// RENDERER kept the old predicate. Consequence: the Epistle and Gospel, which
// print a citation, rendered fine — and all three Vespers lessons in every
// General Menaion file, which print a heading and no citation, returned null
// and vanished from the reading view without a trace. Keyed on `heading`, as
// the gate is.
const isReading  = v => v && typeof v === 'object' && typeof v.heading === 'string';

// ── pointing modes (encoding_rule_v2.md §3.4) ────────────────────────────────
// "printed": the stored string verbatim — the * / ** the bound page shows.
// "clean":   one melodic line per row; the penultimate mark stays as a quiet
//            glyph. Tier-1 prose passes through whole in both modes.
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

// ── sic footnote (§7.4 — derived from the register, never a stored copy) ─────
function SicMark({ path }) {
  const { sics } = useContext(ReadingContext);
  const hits = sics?.[path];
  if (!hits || !hits.length) return null;
  return (
    <sup title={hits.map(h => `Printed thus in ${h.file}: ${h.note}`).join('\n')}
         style={{ color: C.gold, cursor: "help", fontSize: "0.7em", marginLeft: "2px" }}>※</sup>
  );
}

// ── typography atoms ─────────────────────────────────────────────────────────
// Values below are COPIED from octoechos-v2-reading.jsx, not approximated. An
// earlier pass wrote these atoms from scratch while the commit message claimed
// the styling was "deliberately identical" — the chrome matched and the page
// body did not.
export function RHeading({ id, children }) {
  return (
    <div id={id} style={{
      textAlign: "center", fontFamily: SERIF, fontSize: "0.78rem",
      letterSpacing: "0.14em", color: C.inkMid, margin: "18px 0 6px",
      textTransform: "uppercase",
    }}>{children}</div>
  );
}

export function RSubHeading({ children }) {
  return (
    <div style={{ textAlign: "center", fontFamily: SERIF, fontSize: "0.74rem",
                  letterSpacing: "0.12em", color: C.inkLight, margin: "14px 0 4px",
                  textTransform: "uppercase" }}>{children}</div>
  );
}

export function RRubric({ node, path, center }) {
  const { showRubrics } = useContext(ReadingContext);
  if (!showRubrics) return null;
  const text = isTextNode(node) ? node.text : String(node ?? '');
  return (
    <div id={path} title={node?.src ? `${node.src.file} — ${node.src.locus}` : undefined}
         style={{
           fontFamily: SERIF, fontStyle: "italic", fontSize: "0.82rem",
           color: C.inkLight, margin: "8px 0", textAlign: center ? "center" : "left",
           lineHeight: 1.5, background: C.goldFaint, borderLeft: "2px solid #D4C49A",
           padding: "5px 9px", borderRadius: 0,
         }}>{text}<SicMark path={path} /></div>
  );
}

export function RText({ node, path, label }) {
  const { mode, prefix } = useContext(ReadingContext);
  if (isAbsence(node)) return <RAbsence node={node} path={path} />;
  if (!isTextNode(node)) return null;
  const full = prefix + path;
  const lines = mode === 'clean' ? splitPointed(node.text) : null;
  return (
    <div id={full} title={node.src ? `${node.src.file} — ${node.src.locus}` : undefined}
         style={{ fontFamily: SERIF, color: C.ink, fontSize: "0.95rem", lineHeight: 1.65,
                  margin: "7px 0", textIndent: mode === 'printed' ? "1.4rem" : 0 }}>
      {node.spec_mel && (
        <div style={{ textAlign: "center", fontFamily: SERIF, fontStyle: "italic",
                      fontSize: "0.8rem", color: C.inkMid, margin: "4px 0" }}>
          Spec. Mel.: “{node.spec_mel}”
        </div>
      )}
      {(label || node.sourceLabel) && (
        <span style={{ fontStyle: "italic", color: C.inkMid, marginRight: "6px" }}>
          {node.sourceLabel ?? label}
        </span>
      )}
      {lines
        ? lines.map((l, i) => (
            <div key={i} style={{ paddingLeft: i ? "1.4em" : 0, textIndent: i ? "-1.4em" : 0 }}>
              {l.t}{l.pen && <span style={{ color: C.inkLight }}> //</span>}
            </div>
          ))
        : <span>{node.text}</span>}
      <SicMark path={full} />
    </div>
  );
}

export function RAbsence({ node, path }) {
  // Absence is VISIBLE in the reading view, quietly. A capture that hides its
  // own gaps is the failure §2.10 exists to prevent — and `basis` is what
  // distinguishes "the book prints nothing" from "nobody looked" (§7.3a).
  const provisional = node.basis === 'heading_scan';
  return (
    <div id={path} style={{
      fontFamily: SERIF, fontStyle: "italic", fontSize: "0.8rem",
      color: provisional ? C.red : C.inkLight, margin: "8px 0",
    }}>
      — {node.reason?.replace(/_/g, ' ')}
      {provisional && <span title="Declared from a heading scan only; needs close reading (§7.3a)"> · unverified</span>}
    </div>
  );
}

export function RCitation({ node, path }) {
  // R-4: the scripture tool owns reading text. The Menaion stores the citation
  // and the viewer links out. `citation_verbatim` preserves the print site's own
  // formatting; the normalized form is what resolves.
  if (!isReading(node)) return null;
  const c = node.citation ?? {};
  const resolvable = c.book != null && c.chapter != null;
  const href = `/orthodox-hours/scripture?book=${encodeURIComponent(c.book ?? '')}` +
               `&chapter=${encodeURIComponent(c.chapter ?? '')}&verses=${encodeURIComponent(c.verses ?? '')}`;
  // A reading may print a heading and no citation at all — every Vespers lesson
  // in the General Menaion does. The heading is Menaion content and always
  // shows; the link appears only when there is something to resolve, and the
  // derived reference is labelled as ours rather than the book's.
  const derived = !node.citation_verbatim && resolvable
    ? `${c.book} ${c.chapter}${c.verses ? ':' + String(c.verses).replace(/^\d+:/, '') : ''}`
    : null;
  // A DISPUTED citation renders as text and never as a link. The reference is
  // Menaion content and still shows verbatim; what is withheld is the promise
  // that following it leads to what the page prints. Rendering it as a live link
  // would be the whole defect the dispute exists to record.
  const disputed = node.citation_disputed;
  return (
    <div id={path} style={{ fontFamily: SERIF, margin: "10px 0" }}>
      <div style={{ fontVariant: "small-caps", letterSpacing: "0.04em", color: C.inkMid, fontSize: "0.82rem" }}>
        {node.heading}
      </div>
      {disputed ? (
        <>
          <span style={{ color: C.inkMid, fontSize: "0.9rem" }}>{node.citation_verbatim}</span>
          <div style={{ color: C.red, fontSize: "0.72rem", fontStyle: "italic", marginTop: "2px" }}>
            printed reference disputed — the body printed here reconstructs as{' '}
            {disputed.body_is} ({disputed.reconstruction}). No link is offered.
          </div>
        </>
      ) : resolvable && (
        <a href={href} style={{ color: C.gold, fontSize: "0.9rem", textDecoration: "none", borderBottom: `1px dotted ${C.gold}` }}>
          {node.citation_verbatim ?? derived} ↗
        </a>
      )}
      {!node.citation_verbatim && (
        <span style={{ marginLeft: "6px", color: C.inkLight, fontSize: "0.72rem", fontStyle: "italic" }}>
          reference {node.citation_basis ?? 'derived'} — not printed in the source
        </span>
      )}
    </div>
  );
}

export function RCanon({ canon, path }) {
  if (!canon?.odes) return null;
  return (
    <div id={path} style={{ margin: "12px 0" }}>
      {(canon.title || canon.composer || canon.acrostic) && (
        <div style={{ fontFamily: SERIF, fontStyle: "italic", color: C.inkMid, fontSize: "0.86rem", marginBottom: "6px" }}>
          {canon.title}
          {canon.composer && <> · {canon.composer}</>}
          {canon.acrostic && <> · <span style={{ color: C.inkLight }}>{canon.acrostic}</span></>}
        </div>
      )}
      {Object.keys(canon.odes).sort((a, b) => Number(a) - Number(b)).map(k => {
        const ode = canon.odes[k];
        // Everything an ode may carry beyond the three keys rendered below.
        // The service renderer has had a Leftovers guard since it was written;
        // the ODE renderer did not, and `refrain` — stored on Ode I in all four
        // encoded General Menaion files — was dropped on the floor by every one
        // of them without a single gate noticing. A component that renders some
        // of a node is indistinguishable, from outside, from data that was never
        // encoded. Same guard, same reason.
        const known = ['irmos', 'refrain', 'items'];
        const extra = Object.keys(ode).filter(x => !known.includes(x));
        return (
          <div key={k} style={{ margin: "12px 0" }}>
            <RSubHeading>Ode {ROMAN[Number(k)] ?? k}</RSubHeading>
            <RText node={ode.irmos} path={`${path}.odes.${k}.irmos`} label="Irmos:" />
            {ode.refrain && <RText node={ode.refrain} path={`${path}.odes.${k}.refrain`} label="Refrain:" />}
            {(ode.items ?? []).map((it, i) => (
              <RText key={i} node={it} path={`${path}.odes.${k}.items[${i}]`} />
            ))}
            {extra.length > 0 && (
              <div style={{ marginTop: "10px", paddingTop: "6px", borderTop: `1px dashed ${C.border}` }}>
                <div style={{ fontFamily: SERIF, fontSize: "0.75rem", color: C.red, marginBottom: "4px" }}>
                  ode keys with no renderer — encoded but unrendered until now
                </div>
                {extra.map(x => (
                  <RElement key={x} value={ode[x]} path={`${path}.odes.${k}.${x}`} fieldKey={x} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── the generic element dispatcher ───────────────────────────────────────────
// Driven by the manifest `kind`, not by a hand-written switch per service. A key
// with no recognised shape still renders — nothing is silently absent (§8.1).
export function RElement({ value, path, fieldKey }) {
  if (value == null) return null;
  if (isAbsence(value)) return <RAbsence node={value} path={path} />;
  if (isReading(value)) return <RCitation node={value} path={path} />;

  const entry = registryLookup(path);
  const kind = entry?.kind;

  if (Array.isArray(value)) {
    return <>{value.map((v, i) => <RElement key={i} value={v} path={`${path}[${i}]`} fieldKey={fieldKey} />)}</>;
  }
  if (isTextNode(value)) {
    const isRubric = /rubric$/.test(fieldKey ?? '');
    return isRubric
      ? <RRubric node={value} path={path} />
      : <RText node={value} path={path} />;
  }
  if (value.odes) return <RCanon canon={value} path={path} />;
  if (typeof value === 'object') {
    return (
      <div>
        {Object.entries(value).filter(([k]) => k !== 'order').map(([k, v]) => (
          <RElement key={k} value={v} path={`${path}.${k}`} fieldKey={k} />
        ))}
      </div>
    );
  }
  return null;
}

// ── a whole service, rendered in the PAGE's order ────────────────────────────
export function RService({ svc, svcKey, path, entry }) {
  if (!svc) return null;
  if (isAbsence(svc)) {
    return (<><RHeading id={`sec-${svcKey}`}>{SERVICE_HEADINGS[svcKey] ?? svcKey}</RHeading>
             <RAbsence node={svc} path={path} /></>);
  }
  // `order` is the printed sequence. Any key the encoder omitted from it still
  // renders, after the ordered ones — a Leftovers guard, so a forgotten key is
  // visible rather than lost.
  const ordered = Array.isArray(svc.order) ? svc.order : [];
  const rest = Object.keys(svc).filter(k => k !== 'order' && !ordered.includes(k));
  return (
    <>
      <RHeading id={`sec-${svcKey}`}>{SERVICE_HEADINGS[svcKey] ?? svcKey}</RHeading>
      {ordered.map((k, i) => (
        <RElement key={`${k}-${i}`} value={(k in svc) ? svc[k] : entry?.[k]}
                  path={`${path}.${k}`} fieldKey={k} />
      ))}
      {rest.length > 0 && (
        <div style={{ marginTop: "10px", paddingTop: "6px", borderTop: `1px dashed ${C.border}` }}>
          <div style={{ fontFamily: SERIF, fontSize: "0.7rem", color: C.red, fontStyle: "italic", marginBottom: "4px" }}>
            not named in `order` — printed sequence unrecorded for these
          </div>
          {rest.map(k => <RElement key={k} value={svc[k]} path={`${path}.${k}`} fieldKey={k} />)}
        </div>
      )}
    </>
  );
}

// ── a whole commemoration ────────────────────────────────────────────────────
export function RCommemoration({ entry, path }) {
  if (!entry) return null;
  const services = SERVICE_ORDER.filter(s => s !== 'identity' && entry[s] !== undefined);
  return (
    <div>
      <div style={{ textAlign: "center", margin: "8px 0 4px" }}>
        <div style={{ fontFamily: SERIF, letterSpacing: "0.18em", color: C.gold,
                      fontSize: "0.85rem", textTransform: "uppercase" }}>
          {/* `title` is a TEXT NODE, not a string — rendering it raw threw
              "Objects are not valid as a React child" and the ErrorBoundary
              swallowed the whole General Menaion view. Found by rendering; no
              amount of reading the file would have shown it. */}
          {typeof entry.title === 'string' ? entry.title : (entry.title?.text ?? '')}
        </div>
        <div style={{ fontFamily: SERIF, fontSize: "0.78rem", color: C.inkLight, marginBottom: "8px" }}>
          {entry.kind ?? ''}{entry.rank ? ` · ${String(entry.rank).replace(/_/g, ' ')}` : ''}
          {entry.fekula_section ? ` · Fekula §${entry.fekula_section}` : ''}
        </div>
      </div>
      {/* NOTHING HOISTED HERE. troparion/kontakion/ikos are stored once at
          entry level (R-1) but PRINTED inside the services, and each service's
          `order` names them at the position the book prints them. Rendering
          them above the services is an Octoechos shape the Menaion does not
          have — and it also made the hymn appear twice. */}
      {services.map(s => (
        <RService key={s} svc={entry[s]} svcKey={s} path={`${path}.${s}`} entry={entry} />
      ))}
    </div>
  );
}

export { C as READING_C, SERIF };
