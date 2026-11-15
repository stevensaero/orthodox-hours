// Gate: Vespers places assembled from Menaion V2, checked against the OCA service
// texts as the ANSWER KEY. For every date both hold, the hymn the tool's own code
// (src/lib/vespers-propers.js) puts at a place must have the tone and kind the OCA
// heading prints there. A disagreement fails unless it is listed in KNOWN with its
// reason. Built so far: Lord I call — Glory and Both now.
//   node tools/test_menaion_v2_vespers.mjs [--table]
import { loadMenaionV2Month } from '../src/data/menaion_v2/index.js';
import { servicesOf } from '../src/data/menaion_v2/adapter.js';
import { resolveLicClosers, resolveLicStichera } from '../src/lib/vespers-propers.js';
import { loadOcaDoc, ocaStems } from '../src/data/oca_hymns/index.js';
import { OCA_SLOTS } from '../src/data/oca_hymns/slots.js';
import * as OctoV2 from '../src/data/octoechos_v2/adapter.js';
const table = process.argv.includes('--table');
for (let t = 1; t <= 8; t++) await OctoV2.loadV2Tone(t);
const octo = {
  sundayDogmatikon: (t) => OctoV2.getV2SundayVespers(t)?.dogmatikon ?? null,
  dogmatikon: (t) => OctoV2.getV2Dogmatikon(t),
  doxTheotokion: (t, eve) => OctoV2.getV2DoxasticonTheotokion(t, eve),
  evening: (t, eve) => OctoV2.getV2WeekdayVespers(t, eve)?.lic_theotokion ?? null,
  sundayLic: (t) => OctoV2.getV2SundayVespers(t)?.lic ?? [],
  eveningLic: (t, eve) => OctoV2.getV2WeekdayVespers(t, eve)?.lic ?? [],
};
// Tone of the week in 2026, anchored on a Sunday the OCA titles "TONE 7" and checked
// below against every Sunday title the OCA documents print.
const ANCHOR = Date.UTC(2026, 10, 15), ANCHOR_TONE = 7;
const sundayOf = (ms) => ms - new Date(ms).getUTCDay() * 864e5;
const toneOf = (ms) => (((ANCHOR_TONE - 1 + Math.round((sundayOf(ms) - ANCHOR) / (7 * 864e5))) % 8) + 8) % 8 + 1;
let bad = 0; const fail = (m) => { bad++; console.log('  ERROR', m); };
for (const stem of ocaStems()) {
  const d = await loadOcaDoc(stem); const m = d.blocks[0].text.match(/^SUNDAY, .* TONE (\d)/);
  if (m && toneOf(Date.parse(d.date + 'T00:00:00Z')) !== Number(m[1])) fail(`${stem}: the OCA title says Tone ${m[1]}, the tone table says ${toneOf(Date.parse(d.date + 'T00:00:00Z'))}`);
}
// What the OCA prints after Glory and after Both now at "Lord I Call".
function ocaLic(doc) {
  const out = {}; let inLic = false, after = null;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /Lord I Call/i.test(t)) { inLic = true; continue; }
    if (!inLic) continue;
    if (b.k === 'heading' && !/^Tone \d/.test(t) && !/^\(/.test(t)) break;         // next section
    if (b.k !== 'heading' && /^Glory to the Father/i.test(t)) after = 'glory';
    if (b.k !== 'heading' && /^now and ever/i.test(t)) after = after === 'glory' && !out.glory ? 'both' : 'bothNow';
    if (b.k !== 'heading' && /Glory to the Father.*now and ever/i.test(t)) after = 'both';
    const h = b.k === 'heading' && t.match(/^Tone (\d)\s*(.*)$/);
    if (h && after) {
      const kind = /Dogmatikon/i.test(h[2]) ? 'dogmatikon' : /Theotokion/i.test(h[2]) ? 'theotokion' : /Feast|Forefeast/i.test(h[2]) ? 'feast' : 'doxasticon';
      const slot = { tone: Number(h[1]), kind, head: t };
      if (after === 'glory') out.glory = slot; else { out.bothNow = slot; out.combined = after === 'both'; }
      after = null;
    }
  }
  return out;
}
// The OCA's stichera at "Lord I Call", verse by verse: whose and in what tone. A verse
// with no hymn heading of its own repeats the one before ("(Repeat: ...)").
function ocaLicStichera(doc) {
  const out = []; let inLic = false, cur = null, pending = null;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /Lord I Call/i.test(t)) { inLic = true; continue; }
    if (!inLic) continue;
    if (b.k === 'heading' && !/^Tone \d/.test(t) && !/^\(/.test(t)) break;
    if (b.k !== 'heading' && /^Glory to the Father/i.test(t)) break;
    const h = b.k === 'heading' && t.match(/^Tone (\d)\s*(.*)$/);
    if (h) cur = { tone: Number(h[1]), group: /Resurrection/i.test(h[2]) ? 'resurrection' : /Feast|Forefeast/i.test(h[2]) ? 'feast' : 'saint' };
    const vm = t.match(/^V\. \((\d+)\)/);
    if (vm) { if (pending) out.push({ n: pending, ...(cur ?? {}) }); pending = Number(vm[1]); }
  }
  if (pending) out.push({ n: pending, ...(cur ?? {}) });
  // A verse is recorded when the NEXT verse arrives, so its hymn heading has been seen.
  return out;
}
// Disagreements that are understood and accepted. Each needs a reason.
const KNOWN = {};
const rows = []; let checked = 0;
for (const key of Object.keys(OCA_SLOTS).sort()) {
  const doc = await loadOcaDoc(Object.values(OCA_SLOTS[key])[0].doc);
  const M = await loadMenaionV2Month(key.slice(0, 2));
  const svc = servicesOf(M[key], key)[0];
  const ms = Date.parse(doc.date + 'T00:00:00Z'); const dow = new Date(ms).getUTCDay();
  const eveDow = (dow + 6) % 7; const tone = toneOf(ms);
  const got = resolveLicClosers({ c: svc.c, base: svc.path, eveDow, tone, octo });
  const want = ocaLic(doc);
  const show = (s) => (s ? `T${s.tone} ${s.kind}` : 'none');
  // An OCA heading that names no kind ("Tone 8", "Tone 6 (by Patriarch Sergius)") is a
  // hymn of the day: the saint's doxasticon, or on the feast itself the feast's.
  const same = (a, b) => (!a && !b) || (a && b && a.tone === b.tone && (a.kind === b.kind
    || (a.kind === 'stavrotheotokion' && b.kind === 'theotokion') || (a.kind === 'feast' && b.kind === 'doxasticon')));
  const wantGlory = want.combined ? null : want.glory;
  for (const [place, g, w] of [['Glory', got.combined ? null : got.glory, wantGlory], ['Both now', got.bothNow, want.bothNow]]) {
    checked++; const ok = same(g, w); const id = `${key} lic ${place}`;
    if (!ok && !KNOWN[id]) fail(`${id}: tool ${show(g)}, OCA ${show(w)}${w ? ' ("' + w.head + '")' : ''}`);
    rows.push(`| ${key} | ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow]} | ${tone} | ${svc.c.rank} | ${place} | ${show(g)}${g ? ' (' + g.basis + ')' : ''} | ${show(w)} | ${ok ? 'agree' : KNOWN[id] ? 'KNOWN: ' + KNOWN[id] : 'DIFFER'} |`);
  }
  if (!got.bothNow?.node?.text) fail(`${key}: no Both now hymn resolved`);
  // The stichera: how many, whose, and in what tone, verse by verse.
  const st = resolveLicStichera({ c: svc.c, base: svc.path, eveDow, tone, octo });
  const ocaSt = ocaLicStichera(doc); checked++;
  const g = (x) => (x.group === 'octoechos' ? 'resurrection' : x.group === 'feast' && svc.c.kind === 'feast' ? 'saint' : x.group);
  const mine = st.stichera.map((x) => `T${x.tone}${g(x)[0]}`).join(' ');
  const theirs = ocaSt.map((x) => `T${x.tone}${(x.group ?? '?')[0]}`).join(' ');
  const id = `${key} lic stichera`;
  if (mine !== theirs && !KNOWN[id]) fail(`${id}:\n      tool ${st.stichera.length}: ${mine}\n      OCA  ${ocaSt.length}: ${theirs}`);
  if (st.stichera.some((x) => !x.text)) fail(`${id}: a sticheron with no text`);
  rows.push(`| ${key} | ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow]} | ${tone} | ${svc.c.rank} | Stichera | ${st.stichera.length}: ${mine} | ${ocaSt.length}: ${theirs} | ${mine === theirs ? 'agree' : KNOWN[id] ? 'KNOWN: ' + KNOWN[id] : 'DIFFER'} |`);
}
if (table) { console.log('| Date | Day | Tone | Rank | Place | Tool | OCA | |\n|---|---|---|---|---|---|---|---|'); rows.forEach((r) => console.log(r)); }
console.log(`Menaion V2 Vespers vs OCA: ${checked} places on ${Object.keys(OCA_SLOTS).length} dates, ${bad} error(s)`);
process.exit(bad ? 1 : 0);
