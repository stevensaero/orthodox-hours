// Gate: every encoded Menaion V2 service yields a troparion and a kontakion for
// each of the four Hours (weekday rule), with and without "Prefer OCA".
//   node tools/test_menaion_v2_hours.mjs            gate
//   node tools/test_menaion_v2_hours.mjs --table    the per-date table, Markdown
import { MONTH_LOADERS, loadMenaionV2Month } from '../src/data/menaion_v2/index.js';
import { servicesOf, hoursPlan, ocaFor, shown, HOURS } from '../src/data/menaion_v2/adapter.js';
const table = process.argv.includes('--table');
const lead = (s) => (s ? shown(s).replace(/[[\]]/g, '').replace(/\s*(\*\*?|\||\/\/)\s*/g, ' ').slice(0, 34) : '');
const cell = (slot) => (slot?.node ? `${slot.source === 'oca' ? 'OCA' : 'Men.'} T${slot.node.tone ?? '?'} ${slot.role}: ${lead(slot.node)}` : 'NONE');
let services = 0, gaps = 0, bad = 0; const rows = [];
for (const mo of Object.keys(MONTH_LOADERS).sort()) {
  const M = await loadMenaionV2Month(mo);
  for (const key of Object.keys(M).filter((k) => /^\d\d-\d\d$/.test(k)).sort()) {
    const oca = await ocaFor(key);
    for (const { c, index, path } of servicesOf(M[key], key)) {
      services++;
      for (const [mode, o] of [['menaion', null], ['oca', c.oca_primary ? oca : null]]) {
        if (mode === 'oca' && !o) continue;
        const p = hoursPlan(c, path, o);
        const ks = HOURS.map((h) => p.kontakion[h]);
        const distinct = [...new Set(ks.map(cell))];
        const missing = [...p.troparia, ...ks].filter((s) => !s.node).length;
        if (missing) gaps++;
        for (const s of [...p.troparia, ...ks]) if (s.node && (!s.node.text || /\^/.test(shown(s.node)))) { bad++; console.log('BAD', path, mode); }
        if (mode === 'oca' && !p.troparia.some((s) => s.source === 'oca') && !ks.some((s) => s.source === 'oca')) { bad++; console.log('OCA hymns mapped but none used', path); }
        rows.push({ path, mode, rank: c.rank, section: p.section, trop: p.troparia.map(cell).join('<br>Glory: '),
          kont: distinct.length === 1 ? distinct[0] : `1st, 6th: ${cell(p.kontakion['1st_hour'])}<br>3rd, 9th: ${cell(p.kontakion['3rd_hour'])}`,
          notes: p.notes.join(' '), def: index === 0 || c.oca_primary });
      }
    }
  }
}
if (table) {
  console.log('| Service | Text | Rank, section | Troparia | Kontakion | Notes |\n|---|---|---|---|---|---|');
  for (const r of rows) console.log(`| ${r.path}${r.def ? '' : ' (2nd)'} | ${r.mode === 'oca' ? 'OCA' : 'Menaion'} | ${r.rank}, ${r.section} | ${r.trop} | ${r.kont} | ${r.notes} |`);
}
console.log(`Menaion V2 Hours: ${services} services, ${rows.length} plans, ${gaps} with a hymn still to be supplied, ${bad} error(s)`);
process.exit(bad ? 1 : 0);
