// ═══════════════════════════════════════════════════════════════════════════
//  REVIEW MARKS — what is open about the page a reader is looking at
// ═══════════════════════════════════════════════════════════════════════════
//  Shared by the Menaion and Octoechos viewers. Two registers are read, and
//  nothing is stored here:
//    • src/data/open_questions.js       a question's `path` is the stored path
//                                       of the element it is about, which is
//                                       that element's id in the viewer.
//    • oca_hymns/matches_review_index   text key of a hymn of our books -> the
//                                       OCA hymns waiting for Bill's decision
//                                       that have it as a candidate.
//  A mark is a small link at the element; the line counts what is open on the
//  whole page. Both link to the review pages, filtered. They never show an
//  answer: only that something is open here.
// ═══════════════════════════════════════════════════════════════════════════
import React, { createContext, useContext, useEffect, useState } from 'react';   // eslint-disable-line no-unused-vars
import { textKey } from '../data/oca_hymns/index.js';

const SERIF = "Georgia, 'Times New Roman', serif";
const GOLD = "#8B6914";

// { questions: open questions (array), index: review index, from: '&from=tool' | '' }
export const ReviewContext = createContext(null);

// Both registers, loaded once and only when a viewer is open.
let _reg = null;
export function useReviewRegisters() {
  const [reg, setReg] = useState(_reg);
  useEffect(() => {
    if (_reg) return undefined;
    let live = true;
    Promise.all([import('../data/oca_hymns/matches_review_index.js'), import('../data/open_questions.js')])
      .then(([i, q]) => {
        _reg = { index: i.OCA_REVIEW_INDEX, questions: q.default.filter((x) => x.status !== 'answered' && typeof x.path === 'string') };
        if (live) setReg(_reg);
      }).catch(() => { /* the registers are a help, never a requirement */ });
    return () => { live = false; };
  }, []);
  return reg;
}

// The open questions about one element. A question about a list ("…liturgy.kontakia")
// is marked on the list's first item.
export const questionsAt = (questions, path) =>
  (questions || []).filter((q) => q.path === path || `${q.path}[0]` === path);

// What is open under a set of hymn texts and a path prefix: the page's count.
export function reviewUnder(reg, texts, pathPrefix) {
  if (!reg) return null;
  const ids = new Set(), on = new Set();
  for (const k of new Set((texts || []).map(textKey))) for (const id of reg.index[k] || []) { ids.add(id); on.add(k); }
  const questions = pathPrefix ? reg.questions.filter((q) => q.path === pathPrefix.replace(/\.$/, '') || q.path.startsWith(pathPrefix)) : [];
  return { ids: [...ids].sort(), on: [...on].sort(), questions };
}

const markStyle = {
  fontFamily: SERIF, fontSize: "0.62rem", fontStyle: "normal", letterSpacing: "0.04em", color: GOLD,
  border: `1px dotted ${GOLD}`, borderRadius: "3px", padding: "0 4px", marginLeft: "6px",
  textDecoration: "none", textIndent: 0, whiteSpace: "nowrap", display: "inline-block", lineHeight: 1.5,
};

// At one element: a mark for each open question about it and, for a hymn, one
// for the OCA matches waiting on it. `text` is the hymn as OUR book prints it.
export function ReviewMark({ path, text = null, extraPaths = [] }) {
  const ctx = useContext(ReviewContext);
  if (!ctx) return null;
  const qs = [path, ...extraPaths].flatMap((p) => questionsAt(ctx.questions, p));
  const key = typeof text === 'string' ? textKey(text) : null;
  const ids = key ? (ctx.index[key] || []) : [];
  if (!qs.length && !ids.length) return null;
  return (
    <>
      {qs.map((q) => (
        <a key={q.id} data-review-mark="question" data-q={q.id} href={`/orthodox-hours/questions?q=${q.id}${ctx.from}`}
           title={`Open question ${q.id}: ${q.title}. Can you help answer it?`} style={markStyle}>
          ? open question
        </a>
      ))}
      {ids.length > 0 && (
        <a data-review-mark="match" data-ids={ids.join(',')} data-on={key} href={`/orthodox-hours/oca-matches?ids=${ids.join(',')}&on=${key}${ctx.of ? `&of=${encodeURIComponent(ctx.of)}` : ''}${ctx.from}`}
           title={`${ids.length === 1 ? 'An OCA hymn is' : `${ids.length} OCA hymns are`} waiting for a decision on whether ${ids.length === 1 ? 'it is' : 'they are'} this hymn.`}
           style={markStyle}>
          ? OCA match
        </a>
      )}
    </>
  );
}

// The line at the head of the page, in the Hours tool's words.
export function ReviewLine({ review, what, matchesHref, questionsHref }) {
  if (!review || (!review.ids.length && !review.questions.length)) return null;
  const a = { color: GOLD, textDecoration: "none", borderBottom: `1px dotted ${GOLD}` };
  const nq = review.questions.length, nm = review.ids.length;
  return (
    <div data-review-line="1" style={{ textAlign: "center", fontFamily: SERIF, fontSize: "0.72rem", color: "#8B7040", margin: "2px 0 8px" }}
         title="Places on this page where the tool is not yet sure, or where two sources differ. Your answer helps settle them.">
      Help us improve this tool. Review items for {what}:{" "}
      {nm > 0 && <a style={a} href={matchesHref}>{nm} OCA {nm === 1 ? "match" : "matches"}</a>}
      {nm > 0 && nq > 0 && " · "}
      {nq > 0 && <a style={a} href={questionsHref}>{nq} open {nq === 1 ? "question" : "questions"}</a>}
    </div>
  );
}

// The same line for a page whose content is chosen on screen (one service of one day
// of a tone, in the Octoechos): it counts the marks that are actually drawn inside
// `containerRef`, so the line and the marks can never disagree.
export function ScreenReviewLine({ containerRef, what }) {
  const ctx = useContext(ReviewContext);
  const [seen, setSeen] = useState(null);
  useEffect(() => {          // after every render; the state changes only when the marks do
    const el = containerRef.current; if (!el) return;
    const ids = new Set(), on = new Set(), qs = new Set();
    el.querySelectorAll('[data-review-mark]').forEach((m) => {
      (m.getAttribute('data-ids') || '').split(',').filter(Boolean).forEach((i) => ids.add(i));
      if (m.getAttribute('data-on')) on.add(m.getAttribute('data-on'));
      if (m.getAttribute('data-q')) qs.add(m.getAttribute('data-q'));
    });
    const next = { ids: [...ids].sort(), on: [...on].sort(), questions: [...qs].sort() };
    const sig = JSON.stringify(next);
    setSeen((p) => (p && p.sig === sig ? p : { ...next, sig }));
  });
  if (!ctx || !seen) return null;
  return (
    <ReviewLine review={seen} what={what}
      matchesHref={`/orthodox-hours/oca-matches?ids=${seen.ids.join(',')}&on=${seen.on.join(',')}${ctx.of ? `&of=${encodeURIComponent(ctx.of)}` : ''}${ctx.from}`}
      questionsHref={`/orthodox-hours/questions?q=${seen.questions.join(',')}${ctx.from}`} />
  );
}
