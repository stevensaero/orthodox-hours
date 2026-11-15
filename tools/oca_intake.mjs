// THE OCA INTAKE, in one command (encoding_rule_v2.md §3.7). Run it
//   (A) when OCA service texts arrive:   npm run oca:intake -- "<folder of -tt docx>"
//   (B) after encoding any date or book:  npm run oca:intake
// It does the mechanical steps in order, stops at the first that fails, and ends
// with WHAT IS STILL OWED: the parts only a person can do.
//
// The docx files live on Bill's machine (never in the repo). Without a folder the
// capture step is skipped and everything else still runs.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
const dir = process.argv[2];
const run = (label, cmd, args) => {
  console.log(`\n── ${label}`);
  const r = spawnSync(cmd, args, { stdio: ['ignore', 'pipe', 'inherit'], encoding: 'utf8' });
  const out = (r.stdout || '').trim().split('\n'); console.log(out.slice(-3).join('\n'));
  if (r.status !== 0) { console.log(`\nSTOPPED at: ${label}. Fix this before going on.`); process.exit(1); }
};
if (dir) {
  if (!fs.existsSync(dir)) { console.log(`no such folder: ${dir}`); process.exit(1); }
  run('1. Capture every document whole (never a partial capture)', 'python3', ['-I', 'tools/encoding/oca_hymns/extract.py', dir]);
} else console.log('── 1. Capture: skipped (no docx folder given). Give the folder when new OCA texts have arrived.');
run('2. Match every OCA hymn against the Menaion and the Octoechos', 'node', ['tools/match_oca_hymns.mjs']);
run('3. Validate the OCA layer (documents rebuild; register sound; every encoded date with an OCA text has its slots)', 'node', ['tools/validate_oca_hymns.mjs']);
run('4. Compare our Hours with the OCA text, day by day', 'node', ['tools/test_menaion_v2_hours.mjs']);
run('5. Compare our Vespers with the OCA text, day by day, and check Prefer OCA hymn by hymn', 'node', ['tools/test_menaion_v2_vespers.mjs']);
run('6. Compare our Liturgy with the OCA text, day by day', 'node', ['tools/test_menaion_v2_liturgy.mjs']);

// ── What is still owed ───────────────────────────────────────────────────────
const { ocaStems, ocaDocInfo, loadOcaMatches, textsUnder, textKey } = await import('../src/data/oca_hymns/index.js');
const { OCA_MATCHES_REVIEW } = await import('../src/data/oca_hymns/matches_review.js');
const { OCA_REVIEW_INDEX } = await import('../src/data/oca_hymns/matches_review_index.js');
const { MONTH_LOADERS } = await import('../src/data/menaion_v2/index.js');
const { all } = await loadOcaMatches();
const held = {}; for (const mm of Object.keys(MONTH_LOADERS)) Object.assign(held, await MONTH_LOADERS[mm]());
const docsByKey = {}; for (const s of ocaStems()) (docsByKey[ocaDocInfo(s).key] ??= []).push(s);
const pending = fs.existsSync('tools/encoding/oca_hymns/suggestions.json') ? JSON.parse(fs.readFileSync('tools/encoding/oca_hymns/suggestions.json', 'utf8')) : [];
const auto = Object.values(all).filter((m) => m.by === 'auto').length, human = Object.values(all).filter((m) => m.by === 'human').length;
console.log('\n══ WHAT IS STILL OWED (a person\'s part) ══');
console.log(`Register: ${auto} matched automatically, ${human} decided by Bill, ${Object.keys(OCA_MATCHES_REVIEW).length} waiting on the review page.`);
const perDay = Object.keys(held).sort().map((k) => { const ids = new Set(); for (const t of new Set(textsUnder(held[k]).map(textKey))) for (const id of OCA_REVIEW_INDEX[t] || []) ids.add(id); return [k, ids.size]; }).filter(([, n]) => n);
console.log(`a. REVIEW: ${perDay.length} encoded dates have hymns waiting for Bill's decision: ${perDay.map(([k, n]) => `${k} (${n})`).join(', ') || 'none'}.`);
console.log('   Only Bill decides. /oca-matches, or the "Review items for this day" line in the Hours tool.');
console.log(`b. SUGGESTIONS from other people waiting for Bill's approval: ${pending.length}${pending.length ? ' (node tools/apply_match_decisions.mjs --pending)' : ''}.`);
const notHeld = Object.keys(docsByKey).filter((k) => !held[k]).sort();
console.log(`c. NOT YET COMPARABLE: ${notHeld.length} OCA texts are for dates the Menaion does not hold yet (${notHeld.join(' ')}).`);
console.log('   When one of those dates is encoded: add its slots (slots.js), run this again, and read the new differences.');
console.log('d. DIFFERENCES the comparisons print as "known difference": each new one is a FINDING. Give it a reason in the test\'s KNOWN list');
console.log('   and, where the OCA and our books appoint different things, an open question (src/data/open_questions.js) for Bill to rule on.');
console.log('   Never settle one by taking the OCA text for the date: the running tool uses OCA texts hymn by hymn only.');
