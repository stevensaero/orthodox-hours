// Gate: the date-specific orders of ODS 3rd ed. vol. III (src/data/ods_v3/orders.js)
// as applied by the tool's own code. For every order:
//   - its service must exist in Menaion V2 and every name in it must bind to a hymn
//     the page prints (a name that binds to nothing fails);
//   - what the tool gives WITH the order must be exactly the order;
//   - and the general rule (ODS 2nd ed. ch. 1, 2) is run beside it, to report where
//     vol. III changes the result. A change is not an error: it is the override at work.
// OWED lists parts of an order the code does not yet drive; the gate fails if a part
// is neither driven nor listed there.
//   node tools/test_ods_v3_orders.mjs
import { loadMenaionV2Month, loadMenaionV2General } from '../src/data/menaion_v2/index.js';
import { servicesOf, hoursPlan, entrancePlan, liturgyPlan, HOURS } from '../src/data/menaion_v2/adapter.js';
import { resolveEntrance, resolveBeatitudes } from '../src/lib/liturgy-entrance.js';
import { resolveLiturgyPropers } from '../src/lib/liturgy-propers.js';
import { readingsForDay } from '../src/lib/readings.js';
import { ODS3_ORDERS } from '../src/data/ods_v3/orders.js';
import * as OctoV2 from '../src/data/octoechos_v2/adapter.js';

for (let t = 1; t <= 8; t++) await OctoV2.loadV2Tone(t);
const general = await loadMenaionV2General();
let bad = 0; const fail = (m) => { bad++; console.log('  ERROR', m); };
// Parts of an order recorded here but not yet driving the tool.
const OWED = {};
const DRIVEN = new Set(['page', 'beatitudes', 'entrance', 'prokeimenon', 'alleluia', 'communion', 'epistle', 'gospel', 'saturday']);

const TEMPLES = Object.fromEntries(['lord', 'theotokos', 'saint'].map((type) => [type, { type, label: type, troparion: { tone: 4, text: 'T' }, kontakion: { tone: 3, text: 'K' } }]));
const src = (temple) => ({ temple,
  sundayTroparion: (t) => OctoV2.getV2Troparion(t), sundayKontakion: (t) => OctoV2.getV2Kontakion(t),
  dowKontakia: () => [{ label: 'day', tone: 2, text: 'x' }], dowTroparia: () => [{ label: 'day', tone: 2, text: 'x' }],
  departedKontakion: { tone: 8, text: 'x' }, protectress: { tone: 6, text: 'x' },
  sunProkeimenon: (t) => OctoV2.getV2LiturgyProkeimenon(t), sunAlleluia: (t) => OctoV2.getV2LiturgyAlleluia(t),
  dailyPropers: (k) => OctoV2.getV2DailyLiturgyPropers(k),
  sundayBeatitudes: (t) => OctoV2.resolveV2Ref(`tone${t}.liturgy.beatitudes`, t) || null,
  weekdayBeatitudes: (t, d) => OctoV2.resolveV2Ref(`tone${t}.liturgy_weekday.${d}.beatitudes`, t) || null });
const slotsOf = (els) => els.filter((e) => /^lit-tk-\d+-/.test(e.id)).map((e) => (/^(Glory… Now and ever…|Glory…|Now and ever…)/.exec(e.label)?.[1] ?? '').replace('Glory… Now and ever…', 'GN:').replace('Glory…', 'G:').replace('Now and ever…', 'N:') + e.id.replace(/^lit-tk-\d+-/, '').replace(/-\d+$/, ''));
// A saint slot holds every hymn the page prints for the saints: fold repeats for comparison.
const fold = (list) => list.map((x) => x.replace(/^(G|N|GN):/, '')).filter((x, i, a) => x !== a[i - 1]).join(',');

let orders = 0; let changes = 0;
for (const [id, o] of Object.entries(ODS3_ORDERS)) {
  orders++; const order = { id, ...o }; const key = o.service.slice(0, 5);
  const svc = servicesOf((await loadMenaionV2Month(key.slice(0, 2)))?.[key], key).find((x) => x.path === o.service);
  if (!svc) { fail(`${id}: ${o.service} is not in Menaion V2`); continue; }
  const c = svc.c; const sunday = o.day === 'sunday'; const dow = sunday ? 0 : 3;
  if (o.rank !== c.rank) fail(`${id}: vol. III prints ${o.rank}; Menaion V2 stores ${c.rank}`);
  const period = ['forefeast', 'afterfeast', 'apodosis'].includes(c.kind) ? c.kind : null;
  const ld = { dow, isSunday: sunday, tone: 3, season: period ?? (sunday ? 'sunday' : 'ordinary'), feastPeriod: period ? { periodType: period, feast: { name: 'the feast', forLord: false } } : null };
  const report = [];

  // Hours
  if (o.hours) {
    const g = hoursPlan(c, svc.path, { general, sunday }); const w = hoursPlan(c, svc.path, { general, sunday, order });
    if (!w.ods3) fail(`${id}: Hours order did not bind: ${w.notes.filter((n) => /ODS/.test(n)).join(' ')}`);
    else {
      if (!w.rule.startsWith('ODS 3rd ed. vol. III, p. ' + o.hours.page)) fail(`${id}: the Hours rule does not cite vol. III: ${w.rule}`);
      for (const hr of HOURS) {
        const got = w.hours[hr]; const want = o.hours;
        if (got.troparia.length !== want.troparia[hr].length) fail(`${id}: ${hr} has ${got.troparia.length} troparia, the order ${want.troparia[hr].length}`);
        const kw = want.kontakion[hr]; const k = got.kontakion;
        const ok = kw === 'sunday' ? k.role === 'sunday' : kw === 'feast' ? k.role === 'feast' : kw === 'saint' ? k.role === 'saint' : (k.node?.saint ?? '').includes(kw.slice(6));
        if (!ok) fail(`${id}: ${hr} kontakion is not ${kw}`);
      }
      report.push(`Hours: ${w.ods3.changed.length ? 'CHANGES ' + w.ods3.changed.join(', ') + ' (general rule §' + g.cited + ')' : 'the general rule (§' + g.cited + ') already agrees'}`);
      if (w.ods3.changed.length) changes++;
    }
  }
  // Liturgy
  if (o.liturgy) {
    for (const part of Object.keys(o.liturgy)) if (!DRIVEN.has(part) && !OWED[part]) fail(`${id}: liturgy.${part} is neither driven nor listed as owed`);
    const plan = entrancePlan(c, svc.path, { general, order }); const bare = { ...plan, order: null };
    for (const [type, temple] of Object.entries(TEMPLES)) {
      const want = Array.isArray(o.liturgy.entrance) ? o.liturgy.entrance : o.liturgy.entrance[type];
      const w = resolveEntrance({ liturgicalData: ld, menaion: plan, sources: src(temple) }); const g = resolveEntrance({ liturgicalData: ld, menaion: bare, sources: src(temple) });
      if (w.unresolved) fail(`${id}: entrance (${type} temple) has an unresolved hymn`);
      if (fold(slotsOf(w.elements)) !== fold(want)) fail(`${id}: entrance (${type} temple)\n      tool:  ${fold(slotsOf(w.elements))}\n      order: ${fold(want)}`);
      // Glory and Both now must stand where the order puts them.
      const marks = (l) => l.filter((x) => /^(G|N|GN):/.test(x)).filter((x, i, a) => x !== a[i - 1]).join(',');
      if (marks(slotsOf(w.elements)) !== marks(want)) fail(`${id}: entrance (${type} temple) Glory / Both now: tool ${marks(slotsOf(w.elements))}, order ${marks(want)}`);
      const same = slotsOf(w.elements).join() === slotsOf(g.elements).join();
      if (!same) { changes++; report.push(`Entrance, ${type} temple: CHANGES the general rule (${g.section}): ${slotsOf(g.elements).join(' ')}  ->  ${slotsOf(w.elements).join(' ')}`); }
      else if (type === 'saint') report.push(`Entrance: the general rule (${g.section}) already agrees in all temples it was run for`);
    }
    const wb = resolveBeatitudes({ liturgicalData: ld, menaion: plan, sources: src(TEMPLES.saint) }); const gb = resolveBeatitudes({ liturgicalData: ld, menaion: bare, sources: src(TEMPLES.saint) });
    if (wb.unresolved) fail(`${id}: Beatitudes ${wb.troparia.length} of ${wb.count}`);
    const bt = (b) => b.troparia.map((x) => x.text.slice(0, 24)).join('|');
    if (bt(wb) !== bt(gb)) { changes++; report.push(`Beatitudes: CHANGES the general rule (${gb.section}, ${gb.troparia.length}) to ${wb.troparia.length}: ${o.liturgy.beatitudes.map((p) => p[0] === 'menaion' ? `${p[2] - p[1]} Menaion` : `${p[1]} ${p[0]}`).join(' + ')}`); }
    else report.push(`Beatitudes: the general rule (${gb.section}) already agrees`);
    const lp = liturgyPlan(c, svc.path);
    const wp = resolveLiturgyPropers({ liturgicalData: ld, menaionPlan: lp, order, sources: src(TEMPLES.saint) });
    if (!wp.ods3) fail(`${id}: the sung propers did not take the order`);
    else for (const [k, part] of [['prokeimena', 'prokeimenon'], ['alleluia', 'alleluia'], ['communion', 'communion']]) {
      const who = (x) => (x.origin === 'menaion' ? (x.feast ? 'feast' : 'saint') : 'day');
      const got = wp[k].map(who).filter((x, i, a) => x !== a[i - 1]); const want = o.liturgy[part];
      // On a Sunday the communion verse of the day is the book's own printed text, not an element.
      const wantHere = k === 'communion' && sunday ? want.filter((x) => x !== 'day') : want;
      if (got.join() !== wantHere.join()) fail(`${id}: ${part}: tool ${got.join('+') || 'none'}, order ${wantHere.join('+')}`);
      const gen = wp.ods3.general[k].map(who).filter((x, i, a) => x !== a[i - 1]);
      if (gen.join() !== got.join()) { changes++; report.push(`${part}: CHANGES the general rule (${gen.join(' + ')}) to ${got.join(' + ')}`); }
    }
    // Epistle and Gospel, on the day and (where the order prints one) on a Saturday.
    const refs = { e: lp.epistles, g: lp.gospels }; const daily = { e: 'Romans 5:1-10 (§88)', g: 'Matthew 6:22-33 (§18)' };
    for (const sat of (o.liturgy.saturday ? [false, true] : [false])) {
      const l2 = sat ? { ...ld, dow: 6 } : ld;
      const first = lp.epistles[0] || lp.gospels[0] ? { e: lp.epistles[0]?.display ?? null, g: lp.gospels[0]?.display ?? null } : null;
      const w = readingsForDay({ liturgicalData: l2, rank: c.rank, kind: c.kind, dailyReading: daily, feastReading: first, menaionRefs: refs, order });
      const g = readingsForDay({ liturgicalData: l2, rank: c.rank, kind: c.kind, dailyReading: daily, feastReading: first, menaionRefs: refs });
      if (!w.ods3) { fail(`${id}: the readings did not take the order`); continue; }
      if (w.ods3.unbound.length) fail(`${id}: the order names readings the page does not print: ${w.ods3.unbound.join(', ')}`);
      for (const [slot, part] of [['e', 'epistle'], ['g', 'gospel']]) {
        const want = (sat && o.liturgy.saturday[part]) || o.liturgy[part];
        const seq = (r) => (r.groups.find((x) => x.slot === slot)?.items ?? []).map((x) => (x.source === 'day' ? 'day' : x.who ?? 'menaion'));
        if (seq(w).join() !== want.join()) fail(`${id}: ${part}${sat ? ' (Saturday)' : ''}: tool ${seq(w).join('+')}, order ${want.join('+')}`);
        const gs = (g.groups.find((x) => x.slot === slot)?.items ?? []).map((x) => x.ref).join(' ; '); const ws = (w.groups.find((x) => x.slot === slot)?.items ?? []).map((x) => x.ref).join(' ; ');
        if (gs !== ws) { changes++; report.push(`${part}${sat ? ' (Saturday)' : ''}: CHANGES the general rule (${gs})  ->  ${ws}`); }
      }
    }
    for (const part of Object.keys(o.liturgy)) if (OWED[part] && part !== 'saturday') report.push(`${part}: recorded (${o.liturgy[part].join(' + ')}); NOT YET DRIVEN: ${OWED[part]}`);
  }
  console.log(`${id}  ${o.service}  ${o.day}  pp. ${o.pages.join('-')}`); for (const r of report) console.log('    ' + r);
}
console.log(`ODS vol. III orders: ${orders} orders, ${changes} places where the order changes the general rule, ${bad} errors`);
process.exit(bad ? 1 : 0);
