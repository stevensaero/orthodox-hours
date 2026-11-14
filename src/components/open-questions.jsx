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
        <h1 style={{ fontSize: "1.4rem", color: C.ink, margin: "0 0 6px" }}>Help improve the tool</h1>
        <p style={{ fontSize: "0.95rem", color: C.inkMid, lineHeight: 1.65, margin: "0 0 10px" }}>
          This tool assembles the daily services from the service books, following Fekula and Williams,
          <em> The Order of Divine Services</em>. It is built by a parish reader, not a liturgical scholar.
          Where the books and our sources leave us unsure, we do not guess in silence: we store the best-supported
          value, mark it provisional, and write the question down here.
        </p>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: "6px", padding: "10px 16px", margin: "0 0 12px" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: C.gold, textTransform: "uppercase", marginBottom: "4px" }}>
            How you can help
          </div>
          <ol style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.92rem", color: C.ink, lineHeight: 1.65 }}>
            <li>Find a question you can speak to. Group them by book or by subject below.</li>
            <li>Read what the book prints and what the answer would change. &ldquo;Show what we consulted&rdquo; lists what
                we already found, so you need not repeat it.</li>
            <li>Send your answer by e-mail from the button on the question. Say what you would do and, if you can,
                name your source: a Typikon, a rubrics book, your bishop&rsquo;s direction, or the practice you were taught.</li>
          </ol>
          <div style={{ fontSize: "0.85rem", color: C.inkMid, lineHeight: 1.6, marginTop: "8px" }}>
            Priests, deacons, choir directors, readers and students of the services are all welcome. A short answer
            helps. We record answers by role (for example &ldquo;OCA priest&rdquo;) and do not publish names or addresses
            without permission. Seen something wrong that is not listed?{' '}
            {email
              ? <a href={`mailto:${email}?subject=${encodeURIComponent('Orthodox Hours: something to correct')}`}
                   style={{ color: C.gold }}>Write to us about it.</a>
              : 'An address for that has not been set yet.'}
          </div>
        </div>
        {!email && (
          <p style={{ fontSize: "0.82rem", color: C.amber, fontStyle: "italic", margin: "0 0 10px" }}>
            An address for answers has not been set yet, so no e-mail button is shown.
          </p>
        )}
        <h2 style={{ fontSize: "1.05rem", color: C.ink, margin: "14px 0 2px" }}>Open questions</h2>
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
