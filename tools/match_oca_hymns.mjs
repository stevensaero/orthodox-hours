// OCA hymn  →  its mate in the tool's own books (Menaion, Octoechos).
//
// The OCA's text and the St. Sergius text are two translations of one hymn, so
// they never agree letter for letter. This proposes the mate from EVIDENCE and
// writes what it found; it does not decide the doubtful ones.
//
//   wording  shared content words, weighted so that rare words (a saint's name,
//            "Edessa") count for more than "Christ" or "save"
//   margin   how far the best candidate stands above the next DIFFERENT hymn
//   tone     the OCA heading's tone against the tone of the candidate
//   melody   the special melody the OCA heading names against the candidate's
//   date     whether the candidate is printed in the Menaion service of the
//            OCA document's own date
//
//   auto     wording ≥ AUTO_SCORE, margin ≥ AUTO_MARGIN, and the tone does not
//            conflict  →  src/data/oca_hymns/matches_auto.js   (by: 'auto')
//   review   a plausible candidate that falls short of that
//                       →  src/data/oca_hymns/matches_review.js (awaiting a person)
//   none     nothing plausible: a hymn of a book or a date the tool does not
//            hold yet
//   not a hymn   psalm verses and fixed texts are not matched at all: the opening
//            of "Lord, I call", a prokeimenon, an Alleluia, a communion hymn,
//            a reading, "Glory to the Father"; and anything under 60 characters
//
// A person's decisions live in matches_human.js (hand-kept, by: 'human') and are
// NEVER overwritten: an id decided there is left out of both generated files.
//
//   node tools/match_oca_hymns.mjs            write the generated files, print the report
//   node tools/match_oca_hymns.mjs --check    fail if the generated files are stale
//   node tools/match_oca_hymns.mjs --sample   also write oca_match_sample.md (a spot-check sheet)
import fs from 'node:fs';
import { loadHymnPool, MIN_LEN } from './lib/hymn_pool.mjs';
import { loadOcaDoc, ocaStems, ocaTexts, ocaDocInfo } from '../src/data/oca_hymns/index.js';
import { OCA_MATCHES_HUMAN } from '../src/data/oca_hymns/matches_human.js';

export const AUTO_SCORE = 0.5;
export const AUTO_MARGIN = 0.15;
export const REVIEW_SCORE = 0.3;

const STOP = new Set(('the a an and of to in for with by on at from as is are was were be been o oh who whom which that this these those it its he him his she her we us our you your ye thou thee thy thine they them their i me my not but or so all also then now therefore wherefore do did didst dost doth hath hast has have had art wast shall will let may unto upon into').split(' '));
export const words = (t) => [...new Set(t.toLowerCase().replace(/[\[\]^|*]/g, '').replace(/\/\//g, ' ')
  .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']s\b/g, '').replace(/[^a-z\s-]/g, ' ').split(/[\s-]+/).filter(Boolean)
  .map((w) => w.replace(/(eth|est)$/, '').replace(/(ing|ed|es|s)$/, '')).filter((w) => w.length > 2 && !STOP.has(w)).map((w) => w.slice(0, 6)))];

const args = new Set(process.argv.slice(2));
const pool = await loadHymnPool();
const cands = [...pool.hymns.values()].map((h) => ({ ...h, w: words(h.text) }));

// The OCA hymns, one per distinct id, with every place each is printed.
const oca = new Map();
for (const stem of ocaStems()) {
  const doc = await loadOcaDoc(stem); const info = ocaDocInfo(stem);
  for (const t of ocaTexts(doc)) {
    if (!oca.has(t.id)) oca.set(t.id, { id: t.id, text: t.text, prints: [] });
    oca.get(t.id).prints.push({ doc: stem, key: info.key, head: t.head ?? null, section: t.section ?? null, tone: t.tone ?? null, subject: t.subject ?? null });
  }
}

// Weights: a word found in few hymns says more than one found in many.
const df = new Map();
for (const c of cands) for (const w of c.w) df.set(w, (df.get(w) || 0) + 1);
for (const o of oca.values()) { o.w = words(o.text); for (const w of o.w) df.set(w, (df.get(w) || 0) + 1); }
const N = cands.length + oca.size;
const idf = (w) => Math.log(1 + N / (df.get(w) || 1));
const norm = (ws) => Math.sqrt(ws.reduce((a, w) => a + idf(w) ** 2, 0));
const index = new Map();
cands.forEach((c, i) => { c.norm = norm(c.w); for (const w of c.w) (index.get(w) ?? index.set(w, []).get(w)).push(i); });

const melodyOf = (head) => { const m = /\(([^()]*)\)\s*$/.exec(head || ''); return m && !/^for |Theotokion|Resurrection|Feast|St\.|Sts\.|Martyr|Apostle|Archangel|Cross|Hierarch|Dogmatikon/i.test(m[1]) ? m[1] : null; };
const round = (x) => Math.round(x * 100) / 100;

// Not hymnography: psalm verses and fixed texts, known by the heading they stand under.
const NOT_HYMN_HEAD = /^"Lord I Call|Prokeimenon|Communion Hymn|Epistle|Gospel|Alleluia|^Tone \d\*?$/i;
const notAHymn = (o) => o.text.length < MIN_LEN || /^Glory to the Father/i.test(o.text.replace(/[\[\]]/g, '')) || o.prints.every((p) => !p.head || NOT_HYMN_HEAD.test(p.head));
// Two candidates that are one hymn printed twice with small differences are not
// rivals: the margin is taken to the next hymn that is really another.
const sameHymn = (a, b) => { const B = new Set(b.w); const n = a.w.filter((w) => B.has(w)).length; return n / Math.sqrt((a.w.length || 1) * (b.w.length || 1)) >= 0.8; };

const auto = {}; const review = {}; const stats = { hymns: oca.size, short: 0, human: 0, auto: 0, review: 0, none: 0 };
const rows = [];
for (const o of [...oca.values()].sort((a, b) => a.id.localeCompare(b.id))) {
  if (OCA_MATCHES_HUMAN[o.id]) { stats.human++; continue; }
  if (notAHymn(o)) { stats.short++; continue; }
  const acc = new Map(); const on = norm(o.w);
  for (const w of o.w) for (const i of index.get(w) || []) acc.set(i, (acc.get(i) || 0) + idf(w) ** 2);
  const ranked = [...acc].map(([i, dot]) => ({ c: cands[i], score: dot / (on * cands[i].norm) })).sort((a, b) => b.score - a.score).slice(0, 8);
  const best = ranked[0];
  if (!best || best.score < REVIEW_SCORE) { stats.none++; continue; }
  const c = best.c;
  const rivals = ranked.slice(1).filter((r) => !sameHymn(r.c, c));
  const next = rivals[0] ? rivals[0].score : 0;
  const tones = [...new Set(o.prints.map((p) => p.tone).filter((t) => t != null))];
  const toneAgrees = c.tone != null && tones.includes(c.tone);
  const toneConflict = c.tone != null && tones.length > 0 && !toneAgrees;
  const sameDate = c.paths.some((p) => p.book === 'menaion' && o.prints.some((pr) => p.path.startsWith(pr.key + '.')));
  const melodies = [...new Set(o.prints.map((p) => melodyOf(p.head)).filter(Boolean))];
  const melodyAgrees = !!c.melody && melodies.some((m) => { const a = words(m), b = new Set(words(c.melody)); return a.length && a.filter((w) => b.has(w)).length / a.length >= 0.5; });
  const evidence = [`wording ${round(best.score)} (next ${round(next)})`];
  if (toneAgrees) evidence.push(`tone ${c.tone}`); else if (toneConflict) evidence.push(`TONE DIFFERS: OCA ${tones.join('/')}, mate ${c.tone}`); else evidence.push('tone not printed on one side');
  if (melodyAgrees) evidence.push(`melody “${c.melody}”`);
  if (sameDate) evidence.push('same date');
  const mate = c.paths[0];
  const entry = { mate: `${mate.book}:${mate.path}`, mateHash: c.hash, score: round(best.score), next: round(next), evidence,
    first: { doc: o.prints[0].doc, head: o.prints[0].head } };
  const isAuto = best.score >= AUTO_SCORE && best.score - next >= AUTO_MARGIN && !toneConflict;
  if (isAuto) { auto[o.id] = { ...entry, by: 'auto' }; stats.auto++; }
  else {
    review[o.id] = { ...entry, why: [best.score < AUTO_SCORE ? 'wording below the bar' : null, best.score - next < AUTO_MARGIN ? 'a second hymn is close' : null, toneConflict ? 'tone differs' : null].filter(Boolean),
      others: rivals.slice(0, 2).map((r) => ({ mate: `${r.c.paths[0].book}:${r.c.paths[0].path}`, mateHash: r.c.hash, score: round(r.score) })) };
    stats.review++;
  }
  rows.push({ o, c, score: best.score, next, isAuto, evidence });
}

const dump = (name, banner, obj) => `${banner}\nexport const ${name} = {\n` + Object.keys(obj).sort().map((k) => `  ${k}: ${JSON.stringify(obj[k])},\n`).join('') + '};\n';
const files = {
  'src/data/oca_hymns/matches_auto.js': dump('OCA_MATCHES_AUTO',
    `// GENERATED by tools/match_oca_hymns.mjs. Do not edit by hand: a decision of your own goes in matches_human.js.\n// OCA hymn id -> its mate in the tool's books, confirmed automatically (by: 'auto') on the evidence listed.\n// Bar: wording >= ${AUTO_SCORE}, margin over the next different hymn >= ${AUTO_MARGIN}, tone not in conflict.`, auto),
  'src/data/oca_hymns/matches_review.js': dump('OCA_MATCHES_REVIEW',
    '// GENERATED by tools/match_oca_hymns.mjs. OCA hymns with a plausible mate that fell short of the automatic bar.\n// NOT matches: nothing here is used until a person records the decision in matches_human.js.', review),
};
let stale = 0;
for (const [f, body] of Object.entries(files)) {
  if (args.has('--check')) { if (!fs.existsSync(f) || fs.readFileSync(f, 'utf8') !== body) { stale++; console.log('STALE', f); } }
  else fs.writeFileSync(f, body);
}

console.log(`OCA hymns: ${stats.hymns} distinct · matched automatically ${stats.auto} · awaiting review ${stats.review} · decided by a person ${stats.human} · no plausible mate ${stats.none} · not a hymn (verse, fixed text, or under ${MIN_LEN} characters) ${stats.short}`);
console.log(`pool: ${cands.length} distinct hymns (Menaion and Octoechos)`);
// Per document: how much of what it prints now has a mate.
const held = new Set([...pool.byPath.keys()].filter((k) => k.startsWith('menaion:')).map((k) => k.slice(8, 13)));
const outcome = (id) => (OCA_MATCHES_HUMAN[id] ? 'human' : auto[id] ? 'auto' : review[id] ? 'review' : notAHymn(oca.get(id)) ? 'skip' : 'none');
const perDoc = [];
for (const stem of ocaStems()) {
  const ids = [...new Set(ocaTexts(await loadOcaDoc(stem)).map((t) => t.id))]; const n = { auto: 0, human: 0, review: 0, none: 0, skip: 0 };
  for (const id of ids) n[outcome(id)]++;
  perDoc.push({ stem, inMenaion: held.has(ocaDocInfo(stem).key), ...n });
}
const sum = (rows, k) => rows.reduce((a, r) => a + r[k], 0);
for (const [label, rows] of [['documents on a date the Menaion holds', perDoc.filter((d) => d.inMenaion)], ['documents on a date it does not hold yet', perDoc.filter((d) => !d.inMenaion)]]) {
  const hymns = sum(rows, 'auto') + sum(rows, 'human') + sum(rows, 'review') + sum(rows, 'none');
  console.log(`${rows.length} ${label}: ${hymns} hymns · matched ${sum(rows, 'auto') + sum(rows, 'human')} (${Math.round(100 * (sum(rows, 'auto') + sum(rows, 'human')) / hymns)}%) · for review ${sum(rows, 'review')} · no mate found ${sum(rows, 'none')}`);
}
if (args.has('--docs')) for (const d of perDoc) console.log(`  ${d.stem.padEnd(40)} ${d.inMenaion ? 'held' : '    '}  matched ${String(d.auto + d.human).padStart(3)}  review ${String(d.review).padStart(3)}  none ${String(d.none).padStart(3)}  not hymns ${String(d.skip).padStart(3)}`);
if (args.has('--sample')) {
  const clean = (t) => t.replace(/[\[\]^]/g, '');
  const show = (r) => `**OCA** (${r.o.prints[0].doc.slice(0, 9)}, ${r.o.prints[0].head ?? 'no heading'}; printed ${r.o.prints.length}×)\n> ${clean(r.o.text)}\n\n**Mate** \`${r.c.paths[0].book}:${r.c.paths[0].path}\`${r.c.paths.length > 1 ? ` (and ${r.c.paths.length - 1} more place${r.c.paths.length > 2 ? 's' : ''})` : ''}\n> ${r.c.text}\n\n_${r.evidence.join(' · ')}_\n`;
  const autos = rows.filter((r) => r.isAuto).sort((a, b) => a.score - b.score);
  const pick = (list, n) => list.filter((_, i) => i % Math.max(1, Math.floor(list.length / n)) === 0).slice(0, n);
  const revs = rows.filter((r) => !r.isAuto).sort((a, b) => b.score - a.score);
  const md = [`# OCA match spot-check\n`, `${stats.auto} matched automatically, ${stats.review} awaiting review, ${stats.none} with no plausible mate, ${stats.short} not hymns (verses and fixed texts), not attempted. Bar for automatic: wording ≥ ${AUTO_SCORE}, margin ≥ ${AUTO_MARGIN}, tone not in conflict.\n`,
    `## A. The ten automatic matches CLOSEST to the bar\n\nIf any of these is wrong, the bar is too low.\n`, ...autos.slice(0, 10).map(show),
    `## B. Ten automatic matches spread across the rest\n`, ...pick(autos.slice(10), 10).map(show),
    `## C. The fifteen strongest candidates held for review\n\nIf these are all right, the bar could come down.\n`, ...revs.slice(0, 15).map((r) => show(r) + `\nHeld because: ${review[r.o.id].why.join('; ')}\n`)];
  fs.writeFileSync('oca_match_sample.md', md.join('\n'));
  console.log('wrote oca_match_sample.md');
}
if (stale) { console.log('Run: node tools/match_oca_hymns.mjs'); process.exit(1); }
