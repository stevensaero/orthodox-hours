// oca-match-review.jsx — the review page for OCA matches (/oca-matches).
//
// An OCA hymn and a hymn of the tool's own books are two translations of one
// hymn. tools/match_oca_hymns.mjs confirms the clear ones itself; the rest wait
// here for a person. Nothing on this page is used anywhere until it is decided.
//
// This is a static site, so a decision made here is kept in THIS BROWSER
// (localStorage) until "Copy decisions" is pressed and the text is handed to
// whoever maintains the repository, who applies it with
// tools/apply_match_decisions.mjs. That is deliberate: the register in the
// repository changes only by a reviewed commit.
import React, { useEffect, useMemo, useState } from 'react';
import { Pointed } from './oca-doc-view.jsx';
import { matchDecisionsMailto } from '../data/open_questions.js';

const C = { ink: "#1C1008", inkMid: "#3D3020", inkLight: "#9A8A70", gold: "#8B6914", border: "#E8DEC8",
            parchment: "#FBF7EE", green: "#2E6B3A", red: "#A03030", amber: "#A0650A", faint: "rgba(139,105,20,0.06)" };
const SERIF = "Georgia, 'Times New Roman', serif";
const KEY = 'oca_match_decisions';
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

const hrefFor = (mate) => {
  const [book, path] = [mate.slice(0, mate.indexOf(':')), mate.slice(mate.indexOf(':') + 1)];
  if (book === 'menaion' && /^\d\d-\d\d\./.test(path)) return `/orthodox-hours/menaion-v2?comm=${path.slice(0, 5)}&from=tool#${encodeURIComponent(path)}`;
  if (book === 'octoechos') return `/orthodox-hours/octoechos-v2?from=tool#${encodeURIComponent(path)}`;
  return null;
};

// One printed line per row for the OCA text; the St. Sergius text as printed.
function OcaText({ text }) {
  const parts = text.replace(/\^/g, '').split(/( \| | \/\/ )/); const rows = [];
  for (let i = 0; i < parts.length; i += 2) rows.push({ t: parts[i], pen: parts[i + 1] === ' // ' });
  return rows.map((r, i) => <div key={i} style={{ paddingLeft: "1.2em", textIndent: "-1.2em" }}><Pointed text={r.t} />{r.pen && <span style={{ color: C.inkLight }}> //</span>}</div>);
}

const btn = (color, on) => ({ fontFamily: SERIF, fontSize: "0.76rem", cursor: "pointer", padding: "3px 10px", borderRadius: "4px",
  border: `1px solid ${color}`, background: on ? color : "#fff", color: on ? "#fff" : color });

function Card({ id, m, d, set }) {
  const cands = [{ mate: m.mate, mateHash: m.mateHash, score: m.score, text: m.mateText, tones: m.mateTones, top: true }, ...(m.others || [])];
  const rejected = new Set(d?.reject ?? []);
  const state = d?.none ? 'none' : d?.confirm ? 'confirm' : rejected.size ? 'reject' : null;
  const toggleReject = (h) => { const r = new Set(rejected); r.has(h) ? r.delete(h) : r.add(h); set(id, { ...d, reject: [...r], confirm: d?.confirm === h ? null : d?.confirm ?? null }); };
  return (
    <div id={id} style={{ border: `1px solid ${state ? (state === 'confirm' ? C.green : state === 'none' ? C.inkLight : C.amber) : C.border}`, borderRadius: "6px", background: "#fff", padding: "12px 14px", margin: "12px 0" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "baseline", flexWrap: "wrap", fontSize: "0.74rem", color: C.inkLight }}>
        <strong style={{ color: C.gold, fontSize: "0.82rem" }}>{m.first.head || 'no heading'}</strong>
        <span>OCA text of {m.dates.map((x) => `${x.slice(5, 7)}/${x.slice(7, 9)}/${x.slice(0, 4)}`).slice(0, 3).join(', ')}{m.dates.length > 3 ? ` and ${m.dates.length - 3} more` : ''}</span>
        <span>printed {m.prints}×</span>
        <a href={`/orthodox-hours/menaion-v2?oca=${encodeURIComponent(m.first.doc)}&from=tool`} style={{ color: C.gold }}>open the OCA text ↗</a>
        {state && <span style={{ marginLeft: "auto", color: state === 'confirm' ? C.green : state === 'none' ? C.inkMid : C.amber, fontWeight: 700 }}>
          {state === 'confirm' ? 'confirmed' : state === 'none' ? 'no mate' : 'candidate rejected'} (not yet sent)</span>}
      </div>
      <div style={{ fontFamily: SERIF, fontSize: "0.95rem", lineHeight: 1.55, color: C.ink, margin: "8px 0 4px" }}><OcaText text={m.text} /></div>
      <div style={{ fontSize: "0.72rem", color: C.inkMid, margin: "8px 0 2px" }}>
        Held because: {m.why.join('; ')}. <span style={{ color: C.inkLight }}>{m.evidence.join(' · ')}</span>
      </div>
      {cands.map((c, i) => {
        const isConfirmed = d?.confirm === c.mateHash, isRejected = rejected.has(c.mateHash);
        const href = hrefFor(c.mate);
        const toneDiffers = m.tone != null && c.tones && c.tones.length > 0 && !c.tones.includes(m.tone);
        return (
          <div key={c.mateHash} style={{ borderLeft: `3px solid ${isConfirmed ? C.green : isRejected ? C.red : c.top ? C.gold : C.border}`, background: c.top ? C.faint : "transparent",
                                         padding: "6px 10px", margin: "8px 0", opacity: isRejected ? 0.55 : 1 }}>
            <div style={{ fontSize: "0.72rem", color: C.inkLight, display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "baseline" }}>
              <span>{c.top ? 'Proposed mate' : `Candidate ${i + 1}`}</span>
              {href ? <a href={href} style={{ color: C.gold, fontFamily: "monospace", fontSize: "0.7rem" }}>{c.mate}</a> : <span style={{ fontFamily: "monospace", fontSize: "0.7rem" }}>{c.mate}</span>}
              <span>wording {c.score}</span>
              {c.tones && c.tones.length > 0 && <span style={{ color: toneDiffers ? C.red : C.inkLight, fontWeight: toneDiffers ? 700 : 400 }}>Tone {c.tones.join('/')}{toneDiffers ? ` (the OCA: Tone ${m.tone})` : ''}</span>}
            </div>
            <div style={{ fontFamily: SERIF, fontSize: "0.92rem", lineHeight: 1.55, color: C.ink, margin: "4px 0 6px" }}>{c.text}</div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button style={btn(C.green, isConfirmed)} onClick={() => set(id, { ...d, none: false, confirm: isConfirmed ? null : c.mateHash, reject: [...rejected].filter((h) => h !== c.mateHash) })}>
                {isConfirmed ? '✓ This is the same hymn' : 'This is the same hymn'}
              </button>
              <button style={btn(C.red, isRejected)} onClick={() => toggleReject(c.mateHash)}>{isRejected ? '✗ Not this one' : 'Not this one'}</button>
            </div>
          </div>
        );
      })}
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "6px" }}>
        <button style={btn(C.inkMid, !!d?.none)} title="The tool's books do not hold this hymn at all. It will not be offered again."
                onClick={() => set(id, { ...d, none: !d?.none, confirm: null })}>{d?.none ? '✓ It has no mate in our books' : 'It has no mate in our books'}</button>
        <input value={d?.note ?? ''} onChange={(e) => set(id, { ...d, note: e.target.value })} placeholder="a note on why (optional)"
               style={{ flex: 1, minWidth: "180px", fontFamily: SERIF, fontSize: "0.8rem", padding: "3px 8px", border: `1px solid ${C.border}`, borderRadius: "4px" }} />
      </div>
    </div>
  );
}

export default function OcaMatchReview() {
  const [review, setReview] = useState(null);
  const [dec, setDec] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } });
  // 'all' by default: under 'waiting' a card would vanish the moment it was decided,
  // before a note could be added or the choice looked at again.
  const [show, setShow] = useState('all');         // all | waiting | decided
  const [why, setWhy] = useState('any');
  const [out, setOut] = useState(null);
  useEffect(() => { import('../data/oca_hymns/matches_review.js').then((m) => setReview(m.OCA_MATCHES_REVIEW)); }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(dec)); } catch { /* private mode: decisions last for this visit only */ } }, [dec]);

  const isDecided = (d) => !!d && (d.none || !!d.confirm || (d.reject && d.reject.length > 0));
  const set = (id, d) => setDec((all) => { const next = { ...all }; if (isDecided(d) || d?.note) next[id] = { ...d, decided: today() }; else delete next[id]; return next; });
  const ids = useMemo(() => (review ? Object.keys(review).sort((a, b) => review[b].score - review[a].score) : []), [review]);
  const reasons = useMemo(() => { const r = {}; for (const id of ids) for (const w of review[id].why) { const k = w.replace(/:.*/, '').replace(/a Menaion hymn in Tone.*/, 'another tone is closer'); r[k] = (r[k] || 0) + 1; } return r; }, [ids, review]);
  const shown = ids.filter((id) => (show === 'all' || (show === 'decided') === isDecided(dec[id]))
    && (why === 'any' || review[id].why.some((w) => w.replace(/:.*/, '').replace(/a Menaion hymn in Tone.*/, 'another tone is closer') === why)));
  const decidedIds = ids.filter((id) => isDecided(dec[id]));

  const exportText = () => JSON.stringify(decidedIds.map((id) => {
    const d = dec[id], m = review[id];
    const base = { id, decided: d.decided || today(), ...(d.note ? { note: d.note } : {}), ...(d.reject && d.reject.length ? { reject: d.reject } : {}) };
    if (d.none) return { ...base, decision: 'none' };
    if (d.confirm) {
      const c = [{ mate: m.mate, mateHash: m.mateHash, tones: m.mateTones }, ...(m.others || [])].find((x) => x.mateHash === d.confirm);
      return { ...base, decision: 'confirm', mate: c.mate, mateHash: c.mateHash, tone: m.tone, first: m.first,
               ...(m.tone != null && c.tones && c.tones.length && !c.tones.includes(m.tone) ? { toneDiffers: true } : {}) };
    }
    return { ...base, decision: 'reject' };
  }), null, 1);
  const mail = matchDecisionsMailto();
  const copy = async () => { const t = exportText(); setOut(t); try { await navigator.clipboard.writeText(t); } catch { /* the text is shown below to copy by hand */ } };

  const pill = (on) => ({ fontFamily: SERIF, fontSize: "0.78rem", cursor: "pointer", padding: "3px 10px", borderRadius: "12px",
    border: `1px solid ${on ? C.gold : C.border}`, background: on ? "rgba(139,105,20,0.12)" : "#fff", color: on ? C.gold : C.inkMid });
  return (
    <div style={{ background: C.parchment, minHeight: "100vh", padding: "0 18px 40px", fontFamily: SERIF, color: C.ink }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.35rem", fontWeight: 400, margin: "18px 0 4px" }}>OCA matches for review</h1>
        <div style={{ fontSize: "0.86rem", color: C.inkMid, lineHeight: 1.55 }}>
          Each card is an OCA hymn and the hymn of the Menaion or Octoechos the tool thinks is the same hymn in another translation,
          but was not sure enough to decide. <strong>It is the same hymn if it makes the same points</strong> (the same request, the same appeal),
          not merely if it shares names or a passage of Scripture. Choose <em>This is the same hymn</em>, <em>Not this one</em> (the tool keeps looking),
          or <em>It has no mate in our books</em>.
        </div>
        <div style={{ fontSize: "0.78rem", color: C.inkLight, lineHeight: 1.5, margin: "6px 0 10px" }}>
          Your choices are kept in this browser only. When you are done, press <strong>Copy decisions</strong>, then
          <strong> E-mail them</strong> and paste the copied text into the message. Nothing in the tool changes until they are applied.
          {' '}<a href="/orthodox-hours/questions?from=tool" style={{ color: C.gold }}>Other ways to help</a>
        </div>
        {!review ? <div style={{ color: C.inkLight, fontStyle: "italic" }}>loading…</div> : (
          <>
            <div style={{ position: "sticky", top: "var(--hours-return-strip-h, 0px)", background: C.parchment, zIndex: 5, padding: "8px 0", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                {[['all', `All (${ids.length})`], ['waiting', `Waiting (${ids.length - decidedIds.length})`], ['decided', `Decided here (${decidedIds.length})`]].map(([k, label]) =>
                  <span key={k} role="button" style={pill(show === k)} onClick={() => setShow(k)}>{label}</span>)}
                <button style={{ ...btn(C.gold, decidedIds.length > 0), marginLeft: "auto" }} disabled={!decidedIds.length} onClick={copy}>Copy decisions ({decidedIds.length})</button>
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "6px", fontSize: "0.72rem", color: C.inkLight, alignItems: "center" }}>
                held because:
                <span role="button" style={pill(why === 'any')} onClick={() => setWhy('any')}>any reason</span>
                {Object.entries(reasons).map(([k, n]) => <span key={k} role="button" style={pill(why === k)} onClick={() => setWhy(k)}>{k} ({n})</span>)}
              </div>
            </div>
            {out != null && (
              <div style={{ margin: "10px 0", border: `1px solid ${C.gold}`, borderRadius: "6px", background: "#fff", padding: "10px 12px" }}>
                <div style={{ fontSize: "0.8rem", color: C.inkMid, marginBottom: "6px" }}>
                  Copied. If it did not reach your clipboard, select the text below and copy it. Send it as it is.
                  {mail && <>{' '}<a href={mail} style={{ display: "inline-block", fontFamily: SERIF, fontSize: "0.8rem", fontWeight: 700, color: C.gold, border: `1px solid ${C.gold}`,
                                                       borderRadius: "4px", padding: "2px 10px", textDecoration: "none", background: "#fff" }}>E-mail them</a></>}
                  {' '}<span role="button" onClick={() => setOut(null)} style={{ color: C.gold, cursor: "pointer" }}>hide</span>
                  {' · '}<span role="button" onClick={() => { if (window.confirm('Forget every decision made in this browser?')) { setDec({}); setOut(null); } }} style={{ color: C.red, cursor: "pointer" }}>clear my decisions</span>
                </div>
                <textarea readOnly value={out} onFocus={(e) => e.target.select()} style={{ width: "100%", height: "140px", boxSizing: "border-box", fontFamily: "monospace", fontSize: "0.7rem" }} />
              </div>
            )}
            <div style={{ fontSize: "0.76rem", color: C.inkLight, margin: "10px 0 0" }}>{shown.length} shown, strongest wording first.</div>
            {shown.map((id) => <Card key={id} id={id} m={review[id]} d={dec[id]} set={set} />)}
          </>
        )}
      </div>
    </div>
  );
}
