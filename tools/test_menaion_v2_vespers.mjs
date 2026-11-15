// Gate: Vespers places assembled from Menaion V2, checked against the OCA service
// texts as the ANSWER KEY. For every date both hold, the hymn the tool's own code
// (src/lib/vespers-propers.js) puts at a place must have the tone and kind the OCA
// heading prints there. A disagreement fails unless it is listed in KNOWN with its
// reason. Built so far: Lord I call — Glory and Both now.
//   node tools/test_menaion_v2_vespers.mjs [--table]
import { loadMenaionV2Month } from '../src/data/menaion_v2/index.js';
import { servicesOf } from '../src/data/menaion_v2/adapter.js';
import { resolveLicClosers, resolveLicStichera, resolveAposticha, resolveLitiya, resolveVespersTroparia, resolveVespersReadings } from '../src/lib/vespers-propers.js';
import { hoursPlan, ocaFor } from '../src/data/menaion_v2/adapter.js';
import { loadMenaionV2General } from '../src/data/menaion_v2/index.js';
import { loadOcaDoc, ocaStems } from '../src/data/oca_hymns/index.js';
import { OCA_SLOTS } from '../src/data/oca_hymns/slots.js';
import * as OctoV2 from '../src/data/octoechos_v2/adapter.js';
const table = process.argv.includes('--table');
for (let t = 1; t <= 8; t++) await OctoV2.loadV2Tone(t);
const general = await loadMenaionV2General();
const octo = {
  sundayDogmatikon: (t) => OctoV2.getV2SundayVespers(t)?.dogmatikon ?? null,
  dogmatikon: (t) => OctoV2.getV2Dogmatikon(t),
  doxTheotokion: (t, eve) => OctoV2.getV2DoxasticonTheotokion(t, eve),
  evening: (t, eve) => OctoV2.getV2WeekdayVespers(t, eve)?.lic_theotokion ?? null,
  sundayLic: (t) => OctoV2.getV2SundayVespers(t)?.lic ?? [],
  eveningLic: (t, eve) => OctoV2.getV2WeekdayVespers(t, eve)?.lic ?? [],
  apostichaTheotokion: (t) => OctoV2.getV2ApostichaTheotokion(t),
  sundayApostichaTheotokion: (t) => OctoV2.getV2SundayVespers(t)?.aposticha_theotokion ?? null,
  eveningApostichaTheotokion: (t, eve) => OctoV2.getV2WeekdayVespers(t, eve)?.aposticha_theotokion ?? null,
  resTroparion: (t) => OctoV2.getV2Troparion(t),
  resDismissalTheotokion: (t) => OctoV2.getV2ResDismissalTheotokion(t),
  dailyDismissalTheotokion: (t, eve) => OctoV2.getV2DailyDismissalTheotokion(t, eve),
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
// The OCA's Aposticha: whose stichera (the first hymn heading), then Glory and Both now.
function ocaAposticha(doc) {
  const out = {}; let inAp = false, after = null;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /^Aposticha/i.test(t)) { inAp = true; continue; }
    if (!inAp) continue;
    if (b.k === 'heading' && !/^Tone \d/.test(t)) break;                            // "(at Great Vespers)", the troparia
    if (b.k !== 'heading' && /Glory to the Father.*now and ever/i.test(t)) after = 'both';
    else if (b.k !== 'heading' && /^Glory to the Father/i.test(t)) after = 'glory';
    else if (b.k !== 'heading' && /^now and ever/i.test(t)) after = after === 'glory' && !out.glory ? 'both' : 'bothNow';
    const h = b.k === 'heading' && t.match(/^Tone (\d)\s*(.*)$/);
    if (!h) continue;
    if (/Troparion|Kontakion/i.test(h[2])) break;
    const kind = /Theotokion/i.test(h[2]) ? 'theotokion' : /Feast|Forefeast/i.test(h[2]) ? 'feast' : 'doxasticon';
    const slot = { tone: Number(h[1]), kind, head: t };
    if (!after) { if (!out.first) out.first = { tone: slot.tone, source: /Resurrection/i.test(h[2]) ? 'octoechos' : 'menaion' }; }
    else if (after === 'glory') out.glory = slot; else { out.bothNow = slot; out.combined = after === 'both'; }
    after = null;
  }
  return out;
}
// The OCA's troparia at Vespers: each hymn's tone and kind, in order. An alternative
// ("or this Troparion") is left out; so is a second printing under "(at Vigil)".
function ocaTroparia(doc) {
  const out = []; let on = false;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /^\(at (Great )?Vespers\)/i.test(t)) { on = true; continue; }
    if (!on) continue;
    if (b.k === 'heading' && !/^Tone \d/.test(t)) break;
    const h = b.k === 'heading' && t.match(/^Tone (\d)\*?\s*(.*)$/);
    if (!h || /or this/i.test(h[2])) continue;
    out.push({ tone: Number(h[1]), kind: /Kontakion/i.test(h[2]) ? 'KONTAKION' : /Theotokion/i.test(h[2]) ? 'theotokion' : /Resurrection/i.test(h[2]) ? 'sunday' : /Feast|Forefeast/i.test(h[2]) ? 'feast' : 'saint' });
  }
  return out;
}
// The OCA's readings at Vespers: the references it heads them with.
function ocaReadings(doc) {
  const out = []; let on = false;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /^(Old Testament )?Readings/i.test(t)) { on = true; continue; }
    if (!on) continue;
    // "Genesis 28:10-17", or "Composite 17 (Exod. 40:1–5, 9, 10, 16, 34–35)".
    const m = t.replace(/[–—]/g, '-').replace(/^Composite \d+ \((.*)\)$/, '$1').match(/^(?:\(\d+\)\s*)?((?:[1-4] )?[A-Z][A-Za-z.]+(?: [a-z]+ [A-Z][a-z]+)? \d+:\d[\d:,;\- ]*)/);
    if (b.k === 'heading' && m) { out.push(m[1].trim()); continue; }
    if (b.k === 'heading' && /^(Litya|Aposticha|Tone \d)/.test(t)) break;
  }
  return out;
}
// Book and opening verse, so "Genesis 28:10-17" and "Genesis 28:10-17a" compare equal.
// The Greek 3 and 4 Kings are the Hebrew 1 and 2 Kings: the OCA uses the Hebrew numbering.
const BOOK = { 'exod.': 'exodus', '3kings': '1kings', '4kings': '2kings' };
const refKey = (r) => r.replace(/^(\d) /, '$1').replace(/^([A-Za-z0-9. ]+?) (\d+):(\d+).*$/, (_, b, c, v) => { const k = b.toLowerCase().replace(/ of solomon/, ''); return `${BOOK[k] ?? k} ${c}:${v}`; });
// The OCA's Litya: the tones of its stichera, then Glory and Both now.
function ocaLitya(doc) {
  const out = { stichera: [] }; let inL = false, after = null, seen = false;
  for (const b of doc.blocks) {
    const t = b.text.replace(/[[\]]/g, '');
    if (b.k === 'heading' && /^Litya/i.test(t)) { inL = true; seen = true; continue; }
    if (!inL) continue;
    if (b.k === 'heading' && !/^Tone \d/.test(t) && !/^\(/.test(t)) break;
    if (b.k !== 'heading' && /Glory to the Father.*now and ever/i.test(t)) after = 'both';
    else if (b.k !== 'heading' && /^Glory to the Father/i.test(t)) after = 'glory';
    else if (b.k !== 'heading' && /^now and ever/i.test(t)) after = after === 'glory' && !out.glory ? 'both' : 'bothNow';
    const h = b.k === 'heading' && t.match(/^Tone (\d)\s*(.*)$/);
    if (!h) continue;
    const slot = { tone: Number(h[1]), kind: /Theotokion/i.test(h[2]) ? 'theotokion' : /Feast|Forefeast/i.test(h[2]) ? 'feast' : 'doxasticon', head: t };
    if (!after) out.stichera.push(slot.tone); else if (after === 'glory') out.glory = slot; else { out.bothNow = slot; out.combined = after === 'both'; }
    after = null;
  }
  return seen ? out : null;
}
// Disagreements that are understood and accepted. Each needs a reason.
const KNOWN = {
  '09-08 readings': 'the OCA text heads the second lesson "Ezekiel 43:2-44:4"; on 21 Nov it heads the same lesson "Ezekiel 43:27-44:4", as the Menaion has it. Taken as a slip in the OCA text.',
  '11-14 readings': 'A REAL DIVERGENCE: the Menaion prints three lessons from 1 John for the Apostle Philip; the OCA reads three from 1 Peter (the same three it reads for St. Andrew). For the OCA layer.',
  '11-16 readings': 'as 14 Nov: the Menaion prints 1 John for the Apostle Matthew; the OCA reads the three lessons from 1 Peter.',
  '11-14 litiya Glory': 'the page prints stichera only; the OCA adds a Glory (Tone 2) the page does not print. Printed-only is the ruling.',
  '11-14 litiya Both now': 'as above: the OCA adds a Both now (Tone 2) the page does not print.',
  '11-16 litiya Glory': 'as 14 Nov: the OCA adds a Glory (Tone 2) the page does not print.',
  '11-16 litiya Both now': 'as 14 Nov: the OCA adds a Both now (Tone 2) the page does not print.',

  '11-30 aposticha Glory': 'the OCA sings a different doxasticon here (Tone 3, "by Germanos"); the Menaion prints one in Tone 2. An OCA-layer matter, not a rule.',
  '11-30 aposticha Both now': 'follows from the Glory above: the OCA\'s Both now is in Tone 3, the Menaion\'s in Tone 2; both are of the forefeast.',
};
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
  // The troparia at the end. Text as the tool will show it: Prefer OCA on, General Menaion where the page is silent.
  { const oca = await ocaFor(key); const hp = hoursPlan(svc.c, svc.path, { oca, general }).hours['1st_hour'];
    const own = { saint: hp.troparia.find((x) => x.role !== 'feast' || svc.c.kind === 'feast'), feast: svc.c.kind === 'feast' ? null : hp.troparia.find((x) => x.role === 'feast') };
    const tr = resolveVespersTroparia({ c: svc.c, base: svc.path, eveDow, tone, octo, own }); const wt = ocaTroparia(doc);
    const kk = (x) => (x.kind === 'feast' && svc.c.kind === 'feast' ? 'saint' : x.kind);
    const mineT = tr.items.map((x) => `T${x.tone}${kk(x)[0]}`).join(' '); const theirsT = wt.map((x) => `T${x.tone}${x.kind[0]}`).join(' ');
    if (tr.items.some((x) => !x.node?.text)) fail(`${key} troparia: a place with no hymn (${tr.items.filter((x) => !x.node?.text).map((x) => x.kind + ' T' + x.tone).join(', ')})`);
    if (wt.some((x) => x.kind === 'KONTAKION')) fail(`${key} troparia: the OCA prints a kontakion at Vespers — the "no kontakion at Vespers" rule needs review`);
    if (wt.length) { checked++; const id = `${key} troparia`;
      if (mineT !== theirsT && !KNOWN[id]) fail(`${id}: tool ${mineT} | OCA ${theirsT}`);
      rows.push(`| ${key} | ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow]} | ${tone} | ${svc.c.rank} | Troparia | ${mineT} | ${theirsT} | ${mineT === theirsT ? 'agree' : KNOWN[id] ? 'KNOWN' : 'DIFFER'} |`); } }
  // The entrance and the readings.
  { const rd = resolveVespersReadings({ c: svc.c, base: svc.path, eveDow }); const wr = ocaReadings(doc);
    if (rd.readings.length || wr.length) { checked++; const id = `${key} readings`;
      const mineR = rd.readings.map((x) => refKey(x.ref)).join(' ; '); const theirsR = wr.map(refKey).join(' ; ');
      if (mineR !== theirsR && !KNOWN[id]) fail(`${id}: tool ${rd.readings.map((x) => x.ref).join(' ; ') || 'none'} | OCA ${wr.join(' ; ') || 'none'}`);
      rows.push(`| ${key} | ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow]} | ${tone} | ${svc.c.rank} | Readings | ${rd.readings.map((x) => x.ref).join(' ; ') || 'none'} | ${wr.join(' ; ') || 'none'} | ${mineR === theirsR ? 'agree' : KNOWN[id] ? 'KNOWN' : 'DIFFER'} |`); }
    if (rd.readings.length && !rd.entrance) fail(`${key}: readings without an entrance`); }
  // The Litiya: printed only.
  { const li = resolveLitiya({ c: svc.c, base: svc.path, eveDow }); const wl = ocaLitya(doc); const D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow];
    if (!!li !== !!wl) { checked++; const id = `${key} litiya`; if (!KNOWN[id]) fail(`${id}: tool ${li ? 'has one' : 'none'}, OCA ${wl ? 'has one' : 'none'}`); rows.push(`| ${key} | ${D} | ${tone} | ${svc.c.rank} | Litiya | ${li ? 'printed' : 'none'} | ${wl ? 'has one' : 'none'} | ${KNOWN[id] ? 'KNOWN' : 'DIFFER'} |`); }
    else if (li) {
      checked++; const mineL = [...new Set(li.stichera.map((x) => x.tone))].join(','); const theirsL = [...new Set(wl.stichera)].join(',');
      if (mineL !== theirsL && !KNOWN[`${key} litiya stichera`]) fail(`${key} litiya stichera: tool tones ${mineL}, OCA tones ${theirsL}`);
      rows.push(`| ${key} | ${D} | ${tone} | ${svc.c.rank} | Litiya stichera, tones | ${mineL} | ${theirsL} | ${mineL === theirsL ? 'agree' : 'DIFFER'} |`);
      for (const [place, gg, w] of [['Glory', li.combined ? null : li.glory, wl.combined ? null : wl.glory], ['Both now', li.bothNow, wl.bothNow]]) {
        checked++; const okL = same(gg, w) || (gg && w && gg.tone === w.tone && gg.kind === 'doxasticon' && w.kind === 'doxasticon'); const id = `${key} litiya ${place}`;
        if (!okL && !KNOWN[id]) fail(`${id}: tool ${show(gg)}, OCA ${show(w)}${w ? ' ("' + w.head + '")' : ''}`);
        rows.push(`| ${key} | ${D} | ${tone} | ${svc.c.rank} | Litiya ${place} | ${show(gg)} | ${show(w)} | ${okL ? 'agree' : KNOWN[id] ? 'KNOWN' : 'DIFFER'} |`);
      }
    } }
  // The Aposticha: whose stichera, the Glory, the Both now.
  const ap = resolveAposticha({ c: svc.c, base: svc.path, eveDow, tone, octo }); const wa = ocaAposticha(doc);
  const apFirst = ap.stichera.source === 'menaion' ? ap.stichera.items.find((x) => x.kind === 'sticheron')?.tone : tone;
  checked++;
  { const id = `${key} aposticha stichera`; const mineA = `${ap.stichera.source} T${apFirst}`; const theirsA = wa.first ? `${wa.first.source} T${wa.first.tone}` : 'none';
    if (mineA !== theirsA && !KNOWN[id]) fail(`${id}: tool ${mineA}, OCA ${theirsA}`);
    rows.push(`| ${key} | ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow]} | ${tone} | ${svc.c.rank} | Aposticha stichera | ${mineA} | ${theirsA} | ${mineA === theirsA ? 'agree' : 'DIFFER'} |`); }
  for (const [place, gg, w] of [['Glory', ap.combined ? null : ap.glory, wa.combined ? null : wa.glory], ['Both now', ap.bothNow, wa.bothNow]]) {
    checked++; const okA = same(gg, w) || (gg && w && gg.tone === w.tone && gg.kind === 'doxasticon' && w.kind === 'doxasticon'); const id = `${key} aposticha ${place}`;
    if (!okA && !KNOWN[id]) fail(`${id}: tool ${show(gg)}, OCA ${show(w)}${w ? ' ("' + w.head + '")' : ''}`);
    rows.push(`| ${key} | ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow]} | ${tone} | ${svc.c.rank} | Aposticha ${place} | ${show(gg)}${gg ? ' (' + gg.basis + ')' : ''} | ${show(w)} | ${okA ? 'agree' : KNOWN[id] ? 'KNOWN' : 'DIFFER'} |`);
  }
  if (!ap.bothNow?.node?.text) fail(`${key}: no Aposticha Both now resolved`);
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
for (const id of Object.keys(KNOWN)) console.log(`  known difference — ${id}: ${KNOWN[id]}`);
if (table) { console.log('| Date | Day | Tone | Rank | Place | Tool | OCA | |\n|---|---|---|---|---|---|---|---|'); rows.forEach((r) => console.log(r)); }
console.log(`Menaion V2 Vespers vs OCA: ${checked} places on ${Object.keys(OCA_SLOTS).length} dates, ${bad} error(s)`);
process.exit(bad ? 1 : 0);
