// Apply decisions made on the review page (/oca-matches) to matches_human.js.
//
// WHO DECIDES (ruled by Bill, 15 Nov 2026): only Bill's decisions are applied.
// Anything from anyone else, "even from priests", is a SUGGESTION: it is filed,
// presented to Bill, and applied only on his approval.
//
//   node tools/apply_match_decisions.mjs decisions.json      BILL'S OWN decisions (the text he pastes from "Copy decisions")
//   node tools/apply_match_decisions.mjs --suggest decisions.json --role "OCA priest"
//                                                            file an outside person's decisions as suggestions
//                                                            (--role: what they are, never a name or an address)
//   node tools/apply_match_decisions.mjs --pending           list the suggestions waiting for Bill
//   node tools/apply_match_decisions.mjs --approve all|<id,id,...>     apply suggestions Bill has approved
//   node tools/apply_match_decisions.mjs --decline <id,id,...>         drop suggestions Bill has declined
//   node tools/apply_match_decisions.mjs --rewrite           (only re-write the file in its standard form)
//
// Suggestions wait in tools/encoding/oca_hymns/suggestions.json. An e-mail to the
// project's mailbox with the subject "OCA match decisions" is ALWAYS a suggestion.
//
// A decision is one of:  confirm (this candidate is the mate) · none (the hymn has
// no mate) · reject only (these candidates are wrong; keep looking). Rejections
// add up across sessions; a confirmation or "no mate" replaces what was there.
// Afterwards run:  node tools/match_oca_hymns.mjs   (it drops decided hymns from
// the generated files and looks again for the rejected ones).
import fs from 'node:fs';
import { OCA_MATCHES_HUMAN } from '../src/data/oca_hymns/matches_human.js';

const FILE = 'src/data/oca_hymns/matches_human.js';
const SUGGESTIONS = 'tools/encoding/oca_hymns/suggestions.json';
const arg = process.argv[2];
if (!arg) { console.log('usage: node tools/apply_match_decisions.mjs <decisions.json> | --suggest <file> --role "<role>" | --pending | --approve all|<ids> | --decline <ids> | --rewrite'); process.exit(1); }
// The file may be the copied text alone or a whole e-mail around it: take the JSON array out of it.
const readDecisions = (file) => {
  const raw = fs.readFileSync(file, 'utf8'); const a = raw.indexOf('['), z = raw.lastIndexOf(']');
  if (a < 0 || z < a) throw new Error('no decisions found in that file');
  const list = JSON.parse(raw.slice(a, z + 1));
  if (!Array.isArray(list)) throw new Error('expected a JSON array of decisions');
  return list;
};
const pending = fs.existsSync(SUGGESTIONS) ? JSON.parse(fs.readFileSync(SUGGESTIONS, 'utf8')) : [];
const savePending = (list) => fs.writeFileSync(SUGGESTIONS, JSON.stringify(list, null, 1) + '\n');
const today = new Date().toISOString().slice(0, 10);
const say = (x) => `${x.id}  ${x.decision === 'confirm' ? 'SAME HYMN as ' + x.mate : x.decision === 'none' ? 'NO MATE' : 'NOT ' + (x.reject || []).join(', ')}  (${x.suggestedBy}, ${x.received})${x.note ? '  note: ' + x.note : ''}`;
if (arg === '--suggest') {
  const file = process.argv[3]; const r = process.argv.indexOf('--role'); const role = r > 0 ? process.argv[r + 1] : null;
  if (!file || !role) throw new Error('--suggest needs a file and --role "<what the person is>"');
  if (/@|\bfr\.? [A-Z]|\bfather [A-Z]/i.test(role)) throw new Error('--role is what the person is ("OCA priest", "reader", "choir director"), never a name or an address');
  const list = readDecisions(file);
  for (const d of list) { if (!/^o[0-9a-f]{10}$/.test(d.id || '')) throw new Error(`bad id: ${JSON.stringify(d).slice(0, 80)}`);
    pending.push({ ...d, suggestedBy: role, received: today }); }
  savePending(pending);
  console.log(`${list.length} suggestion(s) filed from: ${role}. NOT applied. Present them to Bill:`); for (const x of pending.slice(-list.length)) console.log('  ' + say(x));
  process.exit(0);
}
if (arg === '--pending') { console.log(pending.length ? `${pending.length} suggestion(s) waiting for Bill:` : 'no suggestions waiting'); pending.forEach((x) => console.log('  ' + say(x))); process.exit(0); }
if (arg === '--decline') {
  const ids = new Set((process.argv[3] || '').split(',')); const keep = pending.filter((x) => !ids.has(x.id));
  savePending(keep); console.log(`${pending.length - keep.length} suggestion(s) declined and dropped; ${keep.length} still waiting`); process.exit(0);
}
const reg = { ...OCA_MATCHES_HUMAN };
let n = { confirm: 0, none: 0, reject: 0 };
let approved = null;
if (arg === '--approve') {
  const want = process.argv[3]; if (!want) throw new Error('--approve needs "all" or a list of ids');
  const ids = want === 'all' ? null : new Set(want.split(','));
  approved = pending.filter((x) => !ids || ids.has(x.id));
  if (!approved.length) throw new Error('no waiting suggestion has that id');
  savePending(pending.filter((x) => !approved.includes(x)));
}
if (arg !== '--rewrite') {
  // Bill's own decisions as they are; an approved suggestion says who suggested it and that Bill approved it.
  const list = approved ? approved.map(({ suggestedBy, received, ...d }) => ({ ...d, decided: today, note: [d.note, `suggested by: ${suggestedBy} (${received}); approved by Bill ${today}`].filter(Boolean).join(' | ') })) : readDecisions(arg);
  for (const d of list) {
    if (!/^o[0-9a-f]{10}$/.test(d.id || '')) throw new Error(`bad id: ${JSON.stringify(d).slice(0, 80)}`);
    if (!/^\d{4}-\d\d-\d\d$/.test(d.decided || '')) throw new Error(`${d.id}: decided date missing`);
    const reject = [...new Set([...(reg[d.id]?.reject ?? []), ...(d.reject ?? [])])];
    const base = { by: 'human', decided: d.decided, ...(d.note ? { note: d.note } : {}) };
    if (d.decision === 'confirm') {
      if (!d.mate || !d.mateHash || !d.first?.doc) throw new Error(`${d.id}: a confirmation needs mate, mateHash and first.doc`);
      reg[d.id] = { mate: d.mate, mateHash: d.mateHash, tone: d.tone ?? null, first: d.first, ...(reject.length ? { reject } : {}), ...base, ...(d.toneDiffers ? { toneDiffers: true } : {}) };
      n.confirm++;
    } else if (d.decision === 'none') {
      reg[d.id] = { mate: null, ...(reject.length ? { reject } : {}), ...base, note: d.note || 'no mate in the tool\'s books (decided on the review page)' };
      n.none++;
    } else if (d.decision === 'reject') {
      if (!reject.length) throw new Error(`${d.id}: nothing rejected`);
      if (reg[d.id] && 'mate' in reg[d.id]) reg[d.id] = { ...reg[d.id], reject };
      else reg[d.id] = { reject, ...base, note: [reg[d.id]?.note, d.note].filter(Boolean).join(' | ') || 'not this one (decided on the review page)' };
      n.reject++;
    } else throw new Error(`${d.id}: unknown decision ${d.decision}`);
  }
}
const head = `// A person's decisions about which hymn of the tool's own books an OCA hymn is.
// These are final: tools/match_oca_hymns.mjs never overwrites an id decided here,
// and leaves it out of the generated files.
//
// WRITTEN BY tools/apply_match_decisions.mjs from decisions made on the review page
// (/oca-matches). It may be edited by hand in the same form; run the tool with
// --rewrite afterwards.
//
//   CONFIRMED   { mate, mateHash, tone, first: { doc, head }, by: 'human', decided, note }
//               \`first\` = an OCA document the hymn is printed in and its heading there
//               (where its words are read from). \`tone\` is the OCA's tone: an OCA text
//               carries its own tone and pointing wherever it is shown (Bill, 15 Nov 2026).
//               \`toneDiffers: true\` = a person confirmed it although the mate is printed
//               in another tone (the two books disagree).
//   NO MATE     { mate: null, by: 'human', decided, note }      never offered again
//   NOT THIS    { reject: [mateHash], by: 'human', decided, note }   that candidate is wrong; the search goes on
export const OCA_MATCHES_HUMAN = {
`;
fs.writeFileSync(FILE, head + Object.keys(reg).sort().map((k) => `  ${k}: ${JSON.stringify(reg[k])},\n`).join('') + '};\n');
console.log(`matches_human.js: ${Object.keys(reg).length} entries` + (arg === '--rewrite' ? ' (rewritten)' : ` · applied ${n.confirm} confirmed, ${n.none} no mate, ${n.reject} rejections`));
console.log('Next: node tools/match_oca_hymns.mjs && node tools/validate_oca_hymns.mjs');
