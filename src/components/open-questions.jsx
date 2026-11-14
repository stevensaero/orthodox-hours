// open-questions.jsx — the Open Questions page (/questions).
//
// Reads src/data/open_questions.js and nothing else: no question text lives in
// this file. Groups by SOURCE WORK or by SUBJECT, filters by status, and gives
// each question a plain mailto link so a priest or liturgist can answer from
// any device. No script is involved in the link, so it works in iPhone Mail;
// the pre-filled body is kept short because iOS truncates long ones silently.
import React, { useMemo, useState } from 'react';
import QUESTIONS, { SOURCES, SUBJECTS, CONTACT_EMAIL, mailtoFor } from '../data/open_questions.js';

const C = {
  ink: "#1C1008", inkMid: "#3D3020", inkLight: "#9A8A70", gold: "#8B6914",
  border: "#E8DEC8", parchment: "#FBF7EE", goldFaint: "rgba(139,105,20,0.06)",
  green: "#2E6B3A", amber: "#A0650A",
};
const SERIF = "Georgia, 'Times New Roman', serif";
const STATUS_LABEL = { open: 'Open', provisional_web: 'Provisional', answered: 'Answered' };
const STATUS_HELP = {
  open: 'Nothing we consulted settles it.',
  provisional_web: 'Fekula and OCA are silent; another named source supports the value we stored.',
  answered: 'Settled. The resolution is recorded below.',
};

function Row({ label, children }) {
  return (
    <div style={{ margin: "7px 0" }}>
      <div style={{ fontSize: "0.66rem", letterSpacing: "0.1em", color: C.gold, textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontSize: "0.92rem", color: C.ink, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

export function QuestionCard({ q, email = CONTACT_EMAIL }) {
  const [open, setOpen] = useState(false);
  const href = SOURCES[q.source]?.href?.(q) ?? null;
  const mail = mailtoFor(q, email);
  const statusColor = q.status === 'answered' ? C.green : q.status === 'open' ? C.amber : C.gold;
  return (
    <div id={q.id} style={{ border: `1px solid ${C.border}`, borderRadius: "6px", background: "#fff",
                           padding: "12px 14px", margin: "10px 0" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "baseline", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.72rem", color: C.inkLight }}>{q.id}</span>
        <span title={STATUS_HELP[q.status]} style={{ fontSize: "0.68rem", color: statusColor,
              border: `1px solid ${statusColor}`, borderRadius: "10px", padding: "0 7px" }}>
          {STATUS_LABEL[q.status] ?? q.status}
        </span>
        <span style={{ fontSize: "0.72rem", color: C.inkLight }}>
          {SOURCES[q.source]?.label ?? q.source} · {SUBJECTS[q.subject] ?? q.subject}
        </span>
      </div>
      <div style={{ fontFamily: SERIF, fontSize: "1.02rem", fontWeight: 700, color: C.ink, margin: "5px 0 2px" }}>{q.question}</div>
      <Row label="What the book prints">{q.printed}</Row>
      <Row label="What changes with the answer">{q.impact}</Row>
      {open && (
        <>
          <Row label="Fekula, The Order of Divine Services">{q.consulted?.fekula}</Row>
          <Row label="OCA">{q.consulted?.oca}</Row>
          <Row label="Other sources">{q.consulted?.web}</Row>
          <Row label="Stored in the meantime">{q.provisional}</Row>
          {q.resolution && <Row label="Resolution">{q.resolution}</Row>}
          {(q.responses ?? []).length > 0 && (
            <Row label="Answers received">
              {q.responses.map((r, i) => (
                <div key={i} style={{ margin: "4px 0" }}>
                  <span style={{ color: C.inkLight, fontSize: "0.8rem" }}>{r.date} · {r.role}: </span>
                  {r.summary}{r.source ? <span style={{ color: C.inkMid }}> ({r.source})</span> : null}
                </div>
              ))}
            </Row>
          )}
        </>
      )}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", marginTop: "10px" }}>
        <button onClick={() => setOpen(o => !o)}
                style={{ fontFamily: SERIF, fontSize: "0.8rem", cursor: "pointer", padding: "5px 12px",
                         borderRadius: "4px", border: `1px solid ${C.border}`, background: "#fff", color: C.inkMid }}>
          {open ? 'Hide what we consulted' : 'Show what we consulted'}
        </button>
        {href && (
          <a href={href} style={{ fontFamily: SERIF, fontSize: "0.8rem", color: C.gold, textDecoration: "none",
                                  borderBottom: `1px dotted ${C.gold}` }}>See it in the book ↗</a>
        )}
        {mail && (
          <a href={mail} style={{ display: "inline-block", fontFamily: SERIF, fontSize: "0.85rem", fontWeight: 700,
                                  color: "#fff", background: C.gold, textDecoration: "none", padding: "6px 14px",
                                  borderRadius: "4px" }}>Send your answer by e-mail</a>
        )}
      </div>
    </div>
  );
}

export default function OpenQuestions({ questions = QUESTIONS, email = CONTACT_EMAIL }) {
  const [groupBy, setGroupBy] = useState('source');        // 'source' | 'subject'
  const [status, setStatus] = useState('unanswered');      // 'unanswered' | 'all' | 'answered'
  const shown = useMemo(() => questions.filter(q =>
    status === 'all' ? true : status === 'answered' ? q.status === 'answered' : q.status !== 'answered'),
    [questions, status]);
  const vocab = groupBy === 'source'
    ? Object.fromEntries(Object.entries(SOURCES).map(([k, v]) => [k, v.label]))
    : SUBJECTS;
  const groups = useMemo(() => Object.keys(vocab)
    .map(k => [k, shown.filter(q => q[groupBy] === k)])
    .filter(([, qs]) => qs.length > 0), [shown, groupBy]);    // eslint-disable-line react-hooks/exhaustive-deps
  const unanswered = questions.filter(q => q.status !== 'answered').length;
  const btn = active => ({
    fontFamily: SERIF, fontSize: "0.8rem", cursor: "pointer", padding: "4px 11px", borderRadius: "4px",
    border: `1px solid ${active ? C.gold : C.border}`, background: active ? C.goldFaint : "#fff",
    color: active ? C.gold : C.inkMid, fontWeight: active ? 700 : 400,
  });
  return (
    <div style={{ background: C.parchment, minHeight: "100vh", fontFamily: SERIF, padding: "18px 14px 40px" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.35rem", color: C.ink, margin: "0 0 6px" }}>Open Questions</h1>
        <p style={{ fontSize: "0.92rem", color: C.inkMid, lineHeight: 1.6, margin: "0 0 10px" }}>
          These are places where the service books and our rubrical sources left us unsure. Each one says what
          the book prints, what we consulted, and what we stored in the meantime. If you know the answer,
          and especially if you can name a source, we would be grateful to hear it.
        </p>
        {!email && (
          <p style={{ fontSize: "0.82rem", color: C.amber, fontStyle: "italic", margin: "0 0 10px" }}>
            An address for answers has not been set yet, so no e-mail button is shown.
          </p>
        )}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center", margin: "8px 0" }}>
          <span style={{ fontSize: "0.72rem", color: C.inkLight }}>Group by</span>
          <button style={btn(groupBy === 'source')} onClick={() => setGroupBy('source')}>Source work</button>
          <button style={btn(groupBy === 'subject')} onClick={() => setGroupBy('subject')}>Subject</button>
          <span style={{ fontSize: "0.72rem", color: C.inkLight, marginLeft: "10px" }}>Show</span>
          <button style={btn(status === 'unanswered')} onClick={() => setStatus('unanswered')}>Unanswered ({unanswered})</button>
          <button style={btn(status === 'answered')} onClick={() => setStatus('answered')}>Answered ({questions.length - unanswered})</button>
          <button style={btn(status === 'all')} onClick={() => setStatus('all')}>All ({questions.length})</button>
        </div>
        {groups.length === 0 && <p style={{ color: C.inkLight, fontStyle: "italic" }}>Nothing to show here.</p>}
        {groups.map(([k, qs]) => (
          <div key={k} style={{ marginTop: "16px" }}>
            <div style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: C.gold, textTransform: "uppercase",
                          borderBottom: `1px solid ${C.border}`, paddingBottom: "3px" }}>
              {vocab[k]} · {qs.length}
            </div>
            {qs.map(q => <QuestionCard key={q.id} q={q} email={email} />)}
          </div>
        ))}
      </div>
    </div>
  );
}
