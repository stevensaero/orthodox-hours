// V1 against V2 on the dates both hold. Report, not a gate: it exits 0.
// HOURS only so far, by the weekday rule. V1's side is what its assembler read:
// `troparion` alone, and `kontakion_ode3` (else ode6) at the 1st and 6th Hours, ode6 at the 3rd and 9th.
//   node tools/compare_menaion_v1_v2.mjs
import { loadMenaionV2Month } from '../src/data/menaion_v2/index.js';
import { servicesOf, hoursPlan, ocaFor } from '../src/data/menaion_v2/adapter.js';
const V1 = { '09': '../src/data/menaion/september.js', '10': '../src/data/menaion/october.js' };
// Compare words only: the two datasets point the same text differently.
const words = (n) => (n?.text ?? '').replace(/\[|\]|\^/g, '').replace(/\*\*?|\/\/|\|/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const opening = (n) => words(n).split(' ').slice(0, 3).join(' ');
const cls = (a, b) => (!a && !b ? 'both none' : !a ? 'V1 ONLY' : !b ? 'V2 ONLY' : words(a) === words(b) ? 'same words'
  : a.tone === b.tone && opening(a) === opening(b) ? 'different wording' : 'DIFFERENT HYMN');
let n = 0, diff = 0;
for (const [mo, file] of Object.entries(V1)) {
  const v1m = (await import(file)).default; const v2m = await loadMenaionV2Month(mo);
  for (const key of Object.keys(v2m).filter((k) => /^\d\d-\d\d$/.test(k) && v1m[k]).sort()) {
    const v1s = [].concat(v1m[key]); const oca = await ocaFor(key);
    for (const { c, index, path } of servicesOf(v2m[key], key)) {
      const stem = (f) => String(f ?? '').replace(/\.pdf$/i, '').toLowerCase();
      const v1 = v1s.find((e) => stem(e.source_file) === stem(c.source_file)) ?? (v1s.length === 1 && v2m[key].commemorations.length === 1 ? v1s[0] : null);
      if (!v1) { console.log(`\n${path}: V1 held no such service (V2 ONLY)`); continue; }
      const v2 = hoursPlan(c, path, {});
      const first = v2.hours['1st_hour']; const third = v2.hours['3rd_hour'];
      console.log(`\n${path}  V1 rank ${v1.rank}/${v1.fekula_section_override ?? v1.fekula_section}  V2 rank ${v2.rank}/${v2.section}${v1.rank !== v2.rank ? '   RANK DIFFERS' : ''}`);
      for (const [label, a, b] of [
        ['troparion (first read)', first.troparia[0]?.node, v1.troparion],
        ['second troparion', first.troparia[1]?.node, null],
        ['kontakion, 1st and 6th Hours', first.kontakion?.node, v1.kontakion_ode3 ?? v1.kontakion_ode6],
        ['kontakion, 3rd and 9th Hours', third.kontakion?.node, v1.kontakion_ode6]]) {
        if (label === 'second troparion' && !a) continue;
        const k = cls(a, b); n++; if (k !== 'same words') diff++;
        console.log(`  ${label.padEnd(30)} ${k.padEnd(18)} V2: T${a?.tone ?? '-'} ${words(a).slice(0, 34).padEnd(34)} | V1: T${b?.tone ?? '-'} ${words(b).slice(0, 34)}`);
      }
      if (c.oca_primary && oca) {
        const o = hoursPlan(c, path, { oca }).hours['1st_hour'].troparia.find((t) => t.source === 'oca')?.node;
        const od = v1.troparion?.director ? cls(o, v1.troparion) : 'V1 held the St. Sergius text';
        console.log(`  with Prefer OCA: troparion T${o?.tone} ${words(o).slice(0, 34)} (${od})`);
      }
    }
  }
}
console.log(`\n${n} Hours fields compared on the overlap dates, ${diff} not the same words.`);
