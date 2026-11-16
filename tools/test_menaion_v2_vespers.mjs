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
import { loadOcaDoc, ocaStems, ocaVespersReadings, ocaMatesFor, textsUnder, ocaTexts, textKey, loadOcaMatches } from '../src/data/oca_hymns/index.js';
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
// The OCA's readings at Vespers: the references it heads them with (the layer's own reader).
const ocaReadings = (doc) => ocaVespersReadings(doc).map((x) => x.ref);
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

  '11-14 litiya Glory': 'the page prints stichera only; the OCA adds a Glory (Tone 2) the page does not print. Printed-only is the ruling.',
  '11-14 litiya Both now': 'as above: the OCA adds a Both now (Tone 2) the page does not print.',
  '11-16 litiya Glory': 'as 14 Nov: the OCA adds a Glory (Tone 2) the page does not print.',
  '11-16 litiya Both now': 'as 14 Nov: the OCA adds a Both now (Tone 2) the page does not print.',

  // FOR RULING (15 Nov 2026). Until that day the tool showed the OCA's hymn or reading here by date;
  // it now shows only its own, and each difference is a row in the open-question register (open_questions.js).
  '09-27 troparia': 'Q-0012 (open): different hymns. The Menaion prints the general troparion of martyrs (Tone 4); the OCA a troparion of St. Callistratus (Tone 3).',
  '10-04 troparia': 'Q-0013 (open): different hymns. The Menaion prints "Having learned goodness" (Tone 4); the OCA "We the faithful all praise Hierotheus" (Tone 1).',
  '11-14 readings': 'Q-0010 (open): the Menaion prints three lessons from 1 John; the OCA appoints three from 1 Peter.',
  '11-16 readings': 'Q-0010 (open): as 14 Nov: 1 John in the Menaion, 1 Peter in the OCA text.',

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
  { const oca = await ocaFor(M[key]); const hp = hoursPlan(svc.c, svc.path, { oca, general }).hours['1st_hour'];
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
  { const wr = ocaReadings(doc); const rd = resolveVespersReadings({ c: svc.c, base: svc.path, eveDow });  // the tool's own: the Menaion's (nothing is taken from the OCA text by its date)
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
// ── "Prefer OCA texts" at Vespers: hymn by hymn (15 Nov 2026) ────────────────
// Every encoded service, on every evening of the week, in every tone, with the OCA's
// words laid over what our books give. Each swapped hymn must
//   (a) still say which hymn of OURS it stands in the place of,
//   (b) be the register's mate of exactly that hymn, and
//   (c) pass the tone guard: the OCA's tone is the tone of the place, unless a person
//       confirmed the match across tones, and then the place carries the OCA's tone.
// And with no `oca` the resolvers must give exactly what they gave before.
{
  const octoMates = []; for (let t = 1; t <= 8; t++) octoMates.push(await ocaMatesFor(textsUnder(await OctoV2.loadV2Tone(t))));
  octoMates.push(await ocaMatesFor(textsUnder(OctoV2.v2Theotokia)));
  const { all } = await loadOcaMatches();
  const itemsOf = (a) => { const ap = resolveAposticha(a), lit = resolveLitiya(a), cl = resolveLicClosers(a);
    return [...resolveLicStichera(a).stichera.map((x) => ['Lord I have cried', x]), ['LIC Glory', cl.glory], ['LIC Both now', cl.bothNow],
      ...(ap.stichera.items ?? []).map((x) => ['Aposticha', x]), ['Aposticha Glory', ap.glory], ['Aposticha Both now', ap.bothNow],
      ...(lit ? [...lit.stichera.map((x) => ['Litiya', x]), ['Litiya Glory', lit.glory], ['Litiya Both now', lit.bothNow]] : []),
      ...resolveVespersTroparia(a).items.map((x) => ['Troparia', x])].filter(([, x]) => x && x.kind !== 'verse'); };
  let places = 0, swapped = 0; const byDate = {}; const stemOf = {}; for (const st of ocaStems()) stemOf[`${st.slice(5, 7)}-${st.slice(7, 9)}`] ??= st;
  for (const mm of ['09', '10', '11', '12']) { const M = await loadMenaionV2Month(mm); if (!M) continue;
    for (const key of Object.keys(M).sort()) {
      const oca = new Map([await ocaMatesFor(textsUnder(M[key])), ...octoMates].flatMap((m) => [...m]));
      // The evening this day's Vespers is sung on in 2026, and its tone: what a reader of the tool sees this year.
      const ms = Date.UTC(2026, Number(mm) - 1, Number(key.slice(3))); const eve2026 = (new Date(ms).getUTCDay() + 6) % 7; const tone2026 = toneOf(ms);
      const printedIds = stemOf[key] ? new Set(ocaTexts(await loadOcaDoc(stemOf[key])).map((t) => t.id)) : null;
      for (const svc of servicesOf(M[key], key)) for (let eveDow = 0; eveDow < 7; eveDow++) for (let tone = 1; tone <= 8; tone++) {
        const base = { c: svc.c, base: svc.path, eveDow, tone, octo };
        const plain = itemsOf(base), over = itemsOf({ ...base, oca });
        if (plain.length !== over.length) { fail(`${svc.path} eve ${eveDow} tone ${tone}: Prefer OCA changed HOW MANY hymns there are (${plain.length} -> ${over.length})`); continue; }
        if (plain.some(([, x]) => x.oca)) fail(`${svc.path}: a hymn is in OCA words with Prefer OCA off`);
        over.forEach(([where, x], i) => { places++; const [, was] = plain[i];
          const ours = x.ours ?? x.node?.ours; const wasText = was.text ?? was.node?.text;
          if (!x.oca) { if ((x.text ?? x.node?.text) !== wasText) fail(`${svc.path} ${where}: text changed with no OCA mark`); return; }
          swapped++; const at = `${svc.path} eve ${eveDow} tone ${tone} ${where}`;
          if (ours !== wasText) fail(`${at}: the OCA text does not stand over the hymn our books give there`);
          const m = all[x.oca.id]; const mate = oca.get(textKey(ours));
          if (!m || !mate || mate.id !== x.oca.id) fail(`${at}: ${x.oca.id} is not the register's mate of that hymn`);
          const placeTone = was.tone ?? was.node?.tone ?? null;
          if (mate && mate.tone != null && placeTone != null && mate.tone !== placeTone) {
            if (!mate.toneDiffers) fail(`${at}: OCA Tone ${mate.tone} over a Tone ${placeTone} hymn, and no person confirmed it`);
            else if (x.tone !== mate.tone) fail(`${at}: confirmed across tones, but the place does not carry the OCA's Tone ${mate.tone}`);
          }
          if (eveDow === eve2026 && tone === tone2026 && svc.path.endsWith('.c0')) { const d = (byDate[key] ??= { n: 0, oca: 0, same: 0, hasDoc: !!printedIds }); d.oca++; if (printedIds?.has(x.oca.id)) d.same++; }
        });
        if (eveDow === eve2026 && tone === tone2026 && svc.path.endsWith('.c0')) (byDate[key] ??= { n: 0, oca: 0, same: 0, hasDoc: !!printedIds }).n += over.length;
      }
    }
  }
  console.log(`Prefer OCA at Vespers: ${places} places over every evening and tone, ${swapped} in the OCA's words, each over its own mate and in tone`);
  if (table) { console.log('As a reader sees it in 2026 (the day\'s own evening and tone): hymns at Vespers / in OCA words / of those, the very hymn the OCA text for that day prints');
    for (const [k, d] of Object.entries(byDate)) console.log(`  ${k}: ${d.n} / ${d.oca} / ${d.hasDoc ? d.same : 'no OCA text for the day'}`); }
}
for (const id of Object.keys(KNOWN)) console.log(`  known difference — ${id}: ${KNOWN[id]}`);
if (table) { console.log('| Date | Day | Tone | Rank | Place | Tool | OCA | |\n|---|---|---|---|---|---|---|---|'); rows.forEach((r) => console.log(r)); }
console.log(`Menaion V2 Vespers vs OCA: ${checked} places on ${Object.keys(OCA_SLOTS).length} dates, ${bad} error(s)`);
process.exit(bad ? 1 : 0);
