// An OCA service text, whole, as the OCA published it: every heading, rubric and
// hymn in its printed order. This is the source display, not an assembly: the
// tool's own services are built from the Menaion and Fekula and only CHECKED
// against these documents.
import React, { useState, useEffect } from 'react';
import { loadOcaDoc, ocaDocInfo, stripCaret } from '../data/oca_hymns/index.js';

const SERIF = "Georgia, 'Times New Roman', serif";
const C = { ink: "#1C1008", inkMid: "#5C4A1E", inkLight: "#9A8A70", gold: "#8B6914", border: "#E0D5BC", rubricBg: "#F5F0E3" };

/** A [bracketed] syllable is the OCA's pointing: underlined, without the brackets. */
export function Pointed({ text }) {
  return String(text).split(/(\[[^\]]+\])/).map((seg, i) =>
    (/^\[[^\]]+\]$/.test(seg) ? <u key={i}>{seg.slice(1, -1)}</u> : <React.Fragment key={i}>{seg}</React.Fragment>));
}

// One printed line per row; the line before the last carries the OCA's "//".
function Lines({ text }) {
  const parts = stripCaret(text).split(/( \| | \/\/ )/);
  const rows = [];
  for (let i = 0; i < parts.length; i += 2) rows.push({ t: parts[i], pen: parts[i + 1] === ' // ' });
  return rows.map((r, i) => (
    <div key={i} style={{ paddingLeft: "1.4em", textIndent: "-1.4em" }}>
      <Pointed text={r.t} />{r.pen && <span style={{ color: C.inkLight }}> //</span>}
    </div>
  ));
}

export default function OcaDocView({ stem }) {
  const [doc, setDoc] = useState(undefined);
  useEffect(() => { let live = true; setDoc(undefined); loadOcaDoc(stem).then((d) => { if (live) setDoc(d ?? null); }); return () => { live = false; }; }, [stem]);
  if (doc === undefined) return <div style={{ color: C.inkLight, fontStyle: "italic" }}>loading…</div>;
  if (doc === null) return <div style={{ color: C.inkLight, fontStyle: "italic" }}>That OCA service text is not captured.</div>;
  const info = ocaDocInfo(stem);
  return (
    <div style={{ fontFamily: SERIF, color: C.ink }}>
      <div style={{ fontSize: "0.72rem", color: C.inkMid, background: C.rubricBg, borderLeft: `2px solid ${C.gold}`, padding: "7px 10px", marginBottom: "14px", lineHeight: 1.5 }}>
        <strong>OCA service text for {new Date(info.date + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</strong>, shown
        whole and in the order the OCA printed it ({doc.file}). Published by the Orthodox Church in America, Department of
        Liturgical Music and Translations. It was issued for this date in {info.year}; the same date in another year is a different service.
      </div>
      {doc.blocks.map((b, i) => {
        if (b.k === 'heading') {
          const top = i < 3;
          return <div key={i} style={{ textAlign: top ? "center" : "left", fontWeight: 700, fontSize: top ? "0.98rem" : "0.86rem", color: top ? C.ink : C.gold,
                                       margin: top ? "2px 0" : "16px 0 4px", letterSpacing: top ? "0.03em" : 0 }}><Pointed text={stripCaret(b.text)} /></div>;
        }
        if (b.k === 'note') return <div key={i} style={{ fontStyle: "italic", fontSize: "0.84rem", color: C.inkMid, margin: "6px 0" }}><Pointed text={stripCaret(b.text)} /></div>;
        return (
          <div key={i} id={`oca-${b.id}`} style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: "6px 0 10px", textDecoration: b.underlined === 'all' ? "underline" : "none" }}>
            <Lines text={b.text} />
            {b.repeat && <div style={{ fontStyle: "italic", fontSize: "0.8rem", color: C.inkMid }}>({b.repeat})</div>}
          </div>
        );
      })}
    </div>
  );
}
