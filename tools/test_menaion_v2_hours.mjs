// Gate: the Hours as the tool assembles their troparia and kontakion from Menaion
// V2. Runs the tool's own code (adapter hoursPlan + src/lib/hours-propers.js) for
// every encoded service, as a weekday and as a Sunday, with and without the OCA layer.
//   node tools/test_menaion_v2_hours.mjs            gate
//   node tools/test_menaion_v2_hours.mjs --table    per-date table (Markdown)
import { MONTH_LOADERS, loadMenaionV2Month, loadMenaionV2General } from '../src/data/menaion_v2/index.js';
import { servicesOf, hoursPlan, ocaFor, HOURS } from '../src/data/menaion_v2/adapter.js';
import { resolveHoursPropers } from '../src/lib/hours-propers.js';
import * as OctoV2 from '../src/data/octoechos_v2/adapter.js';
const table = process.argv.includes('--table');
const TONE = 1; await OctoV2.loadV2Tone(TONE);
const general = await loadMenaionV2General();
const octo = { resTroparion: (t) => OctoV2.getV2Troparion(t), sunKontakion: (t) => OctoV2.getV2Kontakion(t) };
const lead = (n) => String(n.text).replace(/[[\]]/g, '').replace(/\s*(\*\*?|\||\/\/)\s*/g, ' ').slice(0, 30);
const who = (src) => (/^Octoechos/.test(src) ? 'Sunday' : /^OCA/.test(src) ? 'OCA' : /^General/.test(src) ? 'Gen.' : 'Men.') + (/of the feast$/.test(src) ? ' feast' : /^Octoechos/.test(src) ? '' : ' saint');
const cell = (n, src) => (n ? `${who(src)} T${n.tone ?? '?'}: ${lead(n)}` : 'NONE');
const squash = (cells) => { const u = [...new Set(cells)]; if (u.length === 1) return u[0];
  const a = cells[0] === cells[2] && cells[1] === cells[3]; return a ? `1st, 6th: ${cells[0]}<br>3rd, 9th: ${cells[1]}` : cells.map((c, i) => `${['1st', '3rd', '6th', '9th'][i]}: ${c}`).join('<br>'); };
let services = 0, plans = 0, gaps = 0, bad = 0; const rows = [];
const fail = (m) => { bad++; console.log('  ERROR', m); };
for (const mo of Object.keys(MONTH_LOADERS).sort()) {
  const M = await loadMenaionV2Month(mo);
  for (const key of Object.keys(M).filter((k) => /^\d\d-\d\d$/.test(k)).sort()) {
    const oca = await ocaFor(key);
    for (const { c, index, path } of servicesOf(M[key], key)) {
      services++;
      for (const sunday of [false, true]) for (const useOca of [false, true]) {
        const o = useOca && c.oca_primary ? oca : null;
        if (useOca && !o) continue;
        plans++;
        const plan = hoursPlan(c, path, { oca: o, general, sunday }); const weekdayPlan = hoursPlan(c, path, { oca: o, general, sunday: false });
        const at = `${path} ${sunday ? 'Sunday' : 'weekday'}${o ? ' OCA' : ''}`;
        const per = HOURS.map((hourKey) => resolveHoursPropers({ hourKey, plan, weekdayPlan, tone: TONE, isOrdinarySunday: sunday, isPentecostarion: false, pentEntry: null, namedDay: null, octo }));
        let missing = false;
        per.forEach((p, i) => {
          if (!p.primaryTrop || !p.kontakion) missing = true;
          for (const n of [p.primaryTrop, p.secondaryTrop, p.kontakion]) if (n && (!n.text || /\^/.test(n.text))) fail(`${at} ${HOURS[i]}: empty text or a caret shown`);
          for (const n of [p.primaryTrop, p.secondaryTrop, p.kontakion]) if (n && /\((name|names|Names)\)/.test(n.text)) fail(`${at} ${HOURS[i]}: a General Menaion placeholder was left unfilled`);
          for (const n of [p.primaryTrop, p.secondaryTrop, p.kontakion]) if (n && n.tone == null && !plan.notes.some((x) => /no tone/.test(x))) fail(`${at} ${HOURS[i]}: a hymn with no tone`);
          if (sunday && p.primaryTrop && !/^Octoechos/.test(p.primaryTropSource) && c.rank !== 'great_feast') fail(`${at} ${HOURS[i]}: a Sunday must begin with the Sunday troparion`);
          if (!sunday && [p.primaryTropSource, p.secondaryTropSource, p.kontakionSource].some((s) => /^Octoechos/.test(s))) fail(`${at} ${HOURS[i]}: an Octoechos hymn on a weekday`);
          if (p.primaryTrop && p.secondaryTrop && p.primaryTrop.text === p.secondaryTrop.text) fail(`${at} ${HOURS[i]}: the same troparion twice`);
        });
        if (!plan.rule || !/^§\d/.test(plan.rule)) fail(`${at}: no Fekula section cited`);
        if (plan.notes.some((x) => /does not say which one/.test(x))) fail(`${at}: two kontakia are printed; the OCA kontakion slot needs 'replaces'`);
        if (o && !per.some((p) => /(^|\|)OCA/.test(p.primaryTropSource + '|' + p.secondaryTropSource + '|' + p.kontakionSource))) fail(`${at}: OCA hymns are mapped but none is read`);
        if (missing) gaps++;
        rows.push({ path: path + (c.oca_primary || M[key].commemorations.length === 1 ? '' : ' (2nd)'), day: sunday ? 'Sunday' : 'Weekday', text: o ? 'OCA' : 'Menaion', sec: `${c.rank}, §${plan.cited}`,
          trop: squash(per.map((p) => [cell(p.primaryTrop, p.primaryTropSource), ...(p.secondaryTrop ? ['Glory: ' + cell(p.secondaryTrop, p.secondaryTropSource)] : [])].join('; '))),
          kont: squash(per.map((p) => cell(p.kontakion, p.kontakionSource))), notes: plan.notes.join(' ') });
      }
    }
  }
}
// A date the Menaion does not hold: a weekday shows nothing, a Sunday its own hymns.
for (const sunday of [false, true]) {
  const p = resolveHoursPropers({ hourKey: '3rd_hour', plan: null, weekdayPlan: null, tone: TONE, isOrdinarySunday: sunday, isPentecostarion: false, pentEntry: null, namedDay: null, octo });
  if (p.encoded || !!p.primaryTrop !== sunday) fail(`not-encoded ${sunday ? 'Sunday' : 'weekday'} behaves wrongly`);
}
if (table) {
  console.log('| Service | Day | Text | Rank, rule | Troparia | Kontakion | Notes |\n|---|---|---|---|---|---|---|');
  for (const r of rows) console.log(`| ${r.path} | ${r.day} | ${r.text} | ${r.sec} | ${r.trop} | ${r.kont} | ${r.notes} |`);
}
console.log(`Menaion V2 Hours: ${services} services, ${plans} plans, ${gaps} with a hymn still to be supplied, ${bad} error(s)`);
process.exit(bad ? 1 : 0);
