// Gate: the Little Entrance troparia and kontakia, and the Beatitude troparia,
// assembled from Menaion V2 by the tool's own code (entrancePlan in the adapter,
// src/lib/liturgy-entrance.js).
//
//  1. ANSWER KEY. For every date both hold, the order of troparia and kontakia the
//     tool gives must be the order the OCA service text prints "(at the Divine
//     Liturgy)", once the hymns the OCA text never prints are set aside (the
//     temple's, the day of the week's, "With the saints give rest", "Protection of
//     Christians"). With Prefer OCA off, each Menaion hymn must also be in the tone
//     the OCA heading prints. A disagreement fails unless listed in KNOWN.
//  2. BEATITUDES. Every printed Beatitudes rubric must read into parts, and the
//     troparia printed must be the number the rubric appoints from the Menaion.
//     A page that prints fewer is listed in KNOWN with the page checked.
//   node tools/test_menaion_v2_liturgy.mjs [--table]
import { loadMenaionV2Month, loadMenaionV2General } from '../src/data/menaion_v2/index.js';
import { servicesOf, entrancePlan, ocaFor } from '../src/data/menaion_v2/adapter.js';
import { resolveEntrance, resolveBeatitudes } from '../src/lib/liturgy-entrance.js';
import { loadOcaDoc, ocaTexts } from '../src/data/oca_hymns/index.js';
import { OCA_SLOTS } from '../src/data/oca_hymns/slots.js';
import * as OctoV2 from '../src/data/octoechos_v2/adapter.js';

const table = process.argv.includes('--table');
for (let t = 1; t <= 8; t++) await OctoV2.loadV2Tone(t);
const general = await loadMenaionV2General();
let bad = 0; const fail = (m) => { bad++; console.log('  ERROR', m); };
const known = [];

// key|what -> reason. Each was checked against the page or the OCA text.
const KNOWN = {
  '10-04|kontakion tone': 'Q-0011 (open). The OCA prints at the Liturgy its Tone 8 kontakion, which is the Menaion\'s kontakion after Ode III; the tool takes the Tone 4 kontakion after Ode VI (ODS Appendix A-V note, by the same reasoning). The two witnesses differ on which kontakion the Liturgy takes.',
  '09-27|troparion tone': 'Different hymns: the Menaion prints the general troparion of martyrs (Tone 4, "In their sufferings"); the OCA prints a troparion of St. Callistratus (Tone 3).',
  '10-04|troparion tone': 'Different hymns: the Menaion prints "Having learned goodness" (Tone 4); the OCA prints "We the faithful all praise Hierotheus" (Tone 1).',
  '11-29|kontakion tone': 'Different hymns: the page prints no kontakion, so the General Menaion\'s for a martyr is read (Tone 2); the OCA prints a kontakion of the martyrs (Tone 4).',
  '12-04|order': 'Q-0015 (open). The OCA adds a troparion and a kontakion of the Hieromartyr Alexander Hotovitzky after those of St. Barbara and St. John of Damascus; the St. Sergius Menaion has no hymn of his on this date.',
  '11-26.c1|beatitudes': 'The rubric appoints 8 (4 from Ode III, 4 from Ode VI); 11-26A.pdf prints 7 and marks none "Twice". Given as printed.',
};
const allow = (k, msg) => { if (KNOWN[k]) { known.push(`${k}: ${KNOWN[k]}`); return true; } fail(`${k}: ${msg}`); return false; };

const TEMPLE = { type: 'saint', label: 'a saint', troparion: { tone: 4, text: 'T' }, kontakion: { tone: 3, text: 'K' } };
const sources = {
  temple: TEMPLE,
  sundayTroparion: (t) => OctoV2.getV2Troparion(t), sundayKontakion: (t) => OctoV2.getV2Kontakion(t),
  dowKontakia: () => [{ label: 'day', tone: 2, text: 'x' }], dowTroparia: () => [{ label: 'day', tone: 2, text: 'x' }],
  departedKontakion: { tone: 8, text: 'x' }, protectress: { tone: 6, text: 'x' },
  sundayBeatitudes: (t) => OctoV2.resolveV2Ref(`tone${t}.liturgy.beatitudes`, t) || null,
  weekdayBeatitudes: (t, d) => OctoV2.resolveV2Ref(`tone${t}.liturgy_weekday.${d}.beatitudes`, t) || null,
};
// The liturgical day as the calendar would give it, from the date and the page's own kind.
const ANCHOR = Date.UTC(2026, 10, 15), ANCHOR_TONE = 7;
const toneOf = (ms) => { const sun = ms - new Date(ms).getUTCDay() * 864e5; return (((ANCHOR_TONE - 1 + Math.round((sun - ANCHOR) / (7 * 864e5))) % 8) + 8) % 8 + 1; };
const ldFor = (key, c, year = 2026) => {
  const ms = Date.UTC(year, Number(key.slice(0, 2)) - 1, Number(key.slice(3, 5))); const dow = new Date(ms).getUTCDay();
  const period = ['forefeast', 'afterfeast', 'apodosis'].includes(c.kind) ? c.kind : null;
  return { dow, isSunday: dow === 0, tone: toneOf(ms), season: period ?? (c.rank === 'great_feast' ? 'great_feast' : dow === 0 ? 'sunday' : 'ordinary'),
    feastPeriod: period ? { periodType: period, feast: { name: 'the feast', forLord: false } } : null };
};
const SKIP = /^(temple_|dow_|departed|steadfast)/;
const kindOf = (slot, own) => { const [who, what] = slot.split('_'); return (what === 'troparion' ? 'T' : 'K') + ':' + (who === 'sunday' ? 'res' : who === 'feast' && !own ? 'feast' : 'saint'); };
const seq = (els) => els.filter((e) => /^lit-tk-\d+-/.test(e.id)).map((e) => ({ slot: e.id.replace(/^lit-tk-\d+-/, '').replace(/-\d+$/, ''), e })).filter((x) => !SKIP.test(x.slot));

// ── 1. the OCA answer key ────────────────────────────────────────────────────
const data = {}; for (const mm of ['09', '10', '11', '12']) data[mm] = await loadMenaionV2Month(mm);
let checked = 0; const unmatched = [];
for (const [key, slots] of Object.entries(OCA_SLOTS)) {
  const day = data[key.slice(0, 2)]?.[key]; if (!day) continue;
  const svc = servicesOf(day, key)[0]; const c = svc.c; const own = c.kind === 'feast';
  const doc = await loadOcaDoc(Object.values(slots)[0].doc);
  const oca = ocaTexts(doc).filter((t) => /Divine Liturgy/i.test(t.section ?? '') && /^(Troparion|Kontakion)$/.test(t.label ?? '') && !/or this/i.test(t.head))
    .map((t) => ({ kind: (t.label === 'Troparion' ? 'T' : 'K') + ':' + (/Resurrection/i.test(t.subject ?? '') ? 'res' : /^Feast$/i.test(t.subject ?? '') ? 'feast' : 'saint'), tone: t.tone, head: t.head }));
  const ld = ldFor(key, c);
  for (const preferOca of [true, false]) {
    const plan = entrancePlan(c, svc.path, { oca: preferOca ? await ocaFor(day) : null, general });
    const r = resolveEntrance({ liturgicalData: ld, menaion: plan, sources });
    const ours = seq(r.elements).map((x) => ({ kind: kindOf(x.slot, own), tone: Number((x.e.toneNote ?? '').replace('Tone ', '')) || null, unresolved: !!x.e.unresolved, source: x.e.source }));
    const a = ours.map((x) => x.kind).join(' '); const b = oca.map((x) => x.kind).join(' ');
    if (a !== b) allow(`${key}|order`, `order ${preferOca ? '(Prefer OCA)' : '(Menaion only)'}\n      tool: ${a}\n      OCA:  ${b}`);
    else ours.forEach((x, i) => {
      checked++;
      if (x.unresolved) fail(`${key}: ${x.kind} is unresolved`);
      else if (x.kind.endsWith('res')) { if (x.tone !== oca[i].tone) fail(`${key}: Sunday ${x.kind} Tone ${x.tone}, OCA ${oca[i].head}`); }
      else if (x.tone !== oca[i].tone) allow(`${key}|${x.kind[0] === 'T' ? 'troparion' : 'kontakion'} tone`, `${preferOca ? 'Prefer OCA' : 'Menaion'} ${x.kind} Tone ${x.tone} (${x.source}); the OCA prints ${oca[i].head}`);
    });
    // Prefer OCA shows a hymn in the OCA's words only where the match register holds its
    // mate (ruled 15 Nov 2026). A hymn the OCA prints here whose place the tool still
    // fills from the Menaion has no confirmed match yet: counted, not an error.
    if (preferOca) for (const m of ours.filter((x) => !x.kind.endsWith('res') && !/^OCA/.test(x.source) && oca.find((o) => o.kind === x.kind))) unmatched.push(`${key} ${m.kind} (${m.source})`);
    if (table && preferOca) console.log(`${key} ${c.rank}/${c.kind} ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][ld.dow]} §${r.section}: ${ours.map((x) => x.kind + '/T' + x.tone).join('  ')}`);
  }
}

// ── 2. Beatitudes: every rubric reads, and the count agrees ──────────────────
let rubrics = 0;
for (const mm of Object.keys(data)) for (const key of Object.keys(data[mm]).sort()) for (const svc of servicesOf(data[mm][key], key)) {
  const plan = entrancePlan(svc.c, svc.path, { general }); const b = plan.beatitudes;
  if (!b.rubric) { if (b.items.length) fail(`${svc.path}: Beatitude troparia with no rubric`); continue; }
  rubrics++;
  if (!b.parts.length) { fail(`${svc.path}: rubric not read: ${b.rubric}`); continue; }
  if (!b.complete) allow(`${svc.path.replace(/^(\d\d-\d\d)\.c0$/, '$1')}|beatitudes`, b.note);
  // weekday (the date's own day in 2026 unless that is a Sunday, then Monday) and Sunday
  const ld = ldFor(key, svc.c); const wk = ld.dow === 0 ? { ...ld, dow: 1, isSunday: false, season: ld.season === 'sunday' ? 'ordinary' : ld.season } : ld;
  const w = resolveBeatitudes({ liturgicalData: wk, menaion: plan, sources });
  if (!w.festalAntiphons && (w.unresolved || !w.troparia.length)) fail(`${svc.path}: weekday Beatitudes unresolved (${w.troparia.length} of ${w.count})`);
  if (b.complete && !w.festalAntiphons && w.troparia.length !== b.total) fail(`${svc.path}: weekday gives ${w.troparia.length}, the rubric appoints ${b.total}`);
  const su = resolveBeatitudes({ liturgicalData: { ...ld, dow: 0, isSunday: true, season: ld.season === 'ordinary' ? 'sunday' : ld.season }, menaion: plan, sources });
  if (!plan.lordsFeast && (su.unresolved || ![8, 10, 12].includes(su.troparia.length))) fail(`${svc.path}: Sunday Beatitudes ${su.troparia.length} of ${su.count} (${su.section})`);
  if (table) console.log(`${svc.path} ${svc.c.rank}/${svc.c.kind}: weekday ${w.troparia.length} (${w.section})  Sunday ${su.troparia.length} (${su.section})  | ${b.rubric}`);
}

for (const k of [...new Set(known)]) console.log('  KNOWN', k);
if (table) for (const u of new Set(unmatched)) console.log('  no matched OCA text yet: ' + u);
console.log(`menaion v2 liturgy: ${checked} entrance hymns checked against the OCA on ${Object.keys(OCA_SLOTS).length} dates, ${rubrics} Beatitudes rubrics read, ${new Set(known).size} known differences, ${new Set(unmatched).size} places where the OCA prints a hymn the register has no match for yet, ${bad} errors`);
process.exit(bad ? 1 : 0);
