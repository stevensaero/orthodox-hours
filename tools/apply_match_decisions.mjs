// Apply decisions made on the review page (/oca-matches) to matches_human.js.
//
//   node tools/apply_match_decisions.mjs decisions.json      (the text the page's "Copy decisions" gives)
//   node tools/apply_match_decisions.mjs --rewrite           (only re-write the file in its standard form)
//
// A decision is one of:  confirm (this candidate is the mate) · none (the hymn has
// no mate) · reject only (these candidates are wrong; keep looking). Rejections
// add up across sessions; a confirmation or "no mate" replaces what was there.
// Afterwards run:  node tools/match_oca_hymns.mjs   (it drops decided hymns from
// the generated files and looks again for the rejected ones).
import fs from 'node:fs';
import { OCA_MATCHES_HUMAN } from '../src/data/oca_hymns/matches_human.js';

const FILE = 'src/data/oca_hymns/matches_human.js';
const arg = process.argv[2];
if (!arg) { console.log('usage: node tools/apply_match_decisions.mjs <decisions.json> | --rewrite'); process.exit(1); }
const reg = { ...OCA_MATCHES_HUMAN };
let n = { confirm: 0, none: 0, reject: 0 };
if (arg !== '--rewrite') {
  const list = JSON.parse(fs.readFileSync(arg, 'utf8'));
  if (!Array.isArray(list)) throw new Error('expected a JSON array of decisions');
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
