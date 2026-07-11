// tools/compare_v1_v2.mjs
// ─────────────────────────────────────────────────────────────────────────────
// The Phase 5 cutover comparison: V1 (src/data/octoechos/) vs V2 served
// through the assembler adapter (src/data/octoechos_v2/adapter.js).
// Spec: octoechos_wirein_spec.md §5 (M3b). Ruled format (Bill, July 11 2026):
// classified script report; the in-app v1/v2 switch covers visual checks.
//
// Every assembler slot × 8 tones is compared in two modes:
//   exact bytes, and READER-normalized (pointing markers stripped — both the
//   V2 Tier-2 " * / ** " family and the V1/OCA " | / // " + [bracket]
//   family — quotes/apostrophes unified, whitespace collapsed, case folded).
//
// Classification per cell (spec §5, refined after first run):
//   IDENTICAL                exact byte match
//   IDENTICAL_NORMALIZED     pointing/glyph-only difference
//   EXPECTED_CORRECTION      matches the §4 expected-diff register (cited)
//   RELOCATED                V1 text found VERBATIM (normalized) at a different
//                            V2 position — the §8 mis-slot class; the match
//                            path is cited as evidence
//   TRANSLATION_DIVERGENCE   same slot, different source translation — the
//                            documented "3 sources, 3 wordings" situation
//                            (§8 troparion row note). V1's static tables were
//                            not sourced from St. Sergius; at cutover the
//                            St. Sergius reading becomes authoritative
//                            (ruling: V2 replaces V1). Listed IN FULL for the
//                            human gate — Bill/priest review these, not code.
//   RETIRED                  ruling §0.1 / §4.9 — V1 surface retires
//   V1_EMPTY                 V2 fills a hole V1 never had (informational)
//   UNEXPLAINED_VARIANT      structural problem (V2 slot empty where the
//                            assembler needs it) ← cutover blocker
//
// Usage:  node tools/compare_v1_v2.mjs            (report mode, exit 0)
//         node tools/compare_v1_v2.mjs --gate     (exit 1 on any UNEXPLAINED_VARIANT)
// Output: tools/compare_v1_v2_report.md
// ─────────────────────────────────────────────────────────────────────────────

import path from 'path';
import { writeFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dir, '..');
const imp = (rel) => import(pathToFileURL(path.join(repoRoot, rel)).href);

const GATE = process.argv.includes('--gate');

// ── normalization (READER mode, both marker dialects) ────────────────────────
const norm = (s) =>
  String(s ?? '')
    .replace(/\s(\*\*|\*|\/\/|\|)\s/g, ' ')   // pointing markers, both families
    .replace(/[[\]]/g, '')                    // OCA syllable brackets
    .replace(/[“”«»]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/…/g, '...')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

// ── result collection ────────────────────────────────────────────────────────
// V1 array items may be strings OR {text} objects (tone 1 encoded richer) —
// unwrap uniformly.
const txt = (v) => (v == null ? null : typeof v === 'object' ? (v.text ?? null) : String(v));

// Corpus index: every V2 text node path→normalized text, for RELOCATED
// detection. Built lazily after tones load.
let _corpus = null;
function corpus() {
  if (_corpus) return _corpus;
  _corpus = [];
  const walk = (v, p) => {
    if (v == null) return;
    if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${p}[${i}]`));
    if (typeof v === 'object') {
      if (typeof v.text === 'string' && v.text.length >= 20) _corpus.push({ path: p, n: norm(v.text) });
      for (const [k, x] of Object.entries(v)) if (k !== 'text') walk(x, `${p}.${k}`);
    }
  };
  for (let t = 1; t <= 8; t++) walk(v2Raw[t], `tone${t}`);
  walk(theotokiaRoot, 'theotokia');
  walk(sharedRoot, 'shared');
  return _corpus;
}
const findInCorpus = (v1Text) => {
  const n = norm(v1Text);
  if (n.length < 20) return null;
  return corpus().find((c) => c.n === n) || null;
};
// Prefix match (40 normalized chars): catches near-verbatim relocations where
// later wording drifts (the V1 tables' unpointed re-transcriptions).
const findNearInCorpus = (v1Text) => {
  const n = norm(v1Text);
  if (n.length < 40) return null;
  const pre = n.slice(0, 40);
  return corpus().find((c) => c.n.startsWith(pre)) || null;
};

const rows = []; // {tone, slot, status, note, v1, v2}
function cell(tone, slot, v1Raw, v2Raw2, expected) {
  const v1 = txt(v1Raw);
  const v2 = txt(v2Raw2);
  let status, note = expected?.note ?? '';
  if (v1 == null && v2 == null) return;
  if (v1 == null) status = 'V1_EMPTY';
  else if (v2 == null) {
    const hit = findInCorpus(v1) || findNearInCorpus(v1);
    if (hit) { status = 'RELOCATED'; note = `V2 has no item at this index; the V1 text lives at \`${hit.path}\` (array alignment differs — V2 stores devices/verse-sets separately)`; }
    else { status = 'UNEXPLAINED_VARIANT'; note = note || 'V2 slot empty'; }
  }
  else if (v1 === v2) status = 'IDENTICAL';
  else if (norm(v1) === norm(v2)) status = 'IDENTICAL_NORMALIZED';
  else if (expected) status = 'EXPECTED_CORRECTION';
  else {
    const hit = findInCorpus(v1);
    if (hit) { status = 'RELOCATED'; note = `V1 text is stored VERBATIM at \`${hit.path}\` — §8 mis-slot class; this slot's proper text differs`; }
    else { status = 'TRANSLATION_DIVERGENCE'; note = 'source-translation difference (V1 not St. Sergius-sourced); St. Sergius authoritative at cutover — human-gate review item'; }
  }
  rows.push({ tone, slot, status, note, v1, v2 });
}
const retired = (tone, slot, note) => rows.push({ tone, slot, status: 'RETIRED', note, v1: null, v2: null });

// ── expected-diff register (wire-in spec §4) ─────────────────────────────────
// Keyed `${slot}|${tone}` or a matcher function per slot family.
const REG = {
  'troparion|2':            { note: '§8: "lightning" → "radiant brilliance" (all 4 print sites)' },
  'kontakion|2':            { note: '§8: "terrified" → "struck with fear"' },
  'typica_prokeimenon|2':   { note: '§8 GENUINE ERROR: V1 text is a psalm-verse-table sourcing, matches neither moment; V2 serves the Liturgy prokeimenon' },
  'typica_prok_stichos|2':  { note: '§8: stichos follows the corrected prokeimenon' },
  'typica_alleluia|2':      { note: '§8 GENUINE ERROR: Ps 20 → Ps 19 (adjacent psalm)' },
  'typica_alleluia_st|2':   { note: '§8: stichoi follow the corrected Alleluia' },
  'sun_apost_theotokion|2': { note: '§8 MIS-SLOT fix: Sunday-evening weekday text → "O new wonder…" (GV proper, 3 print sites)' },
};

// ── load V1 + V2 ─────────────────────────────────────────────────────────────
const idx = await imp('src/data/octoechos/index.js');
const A = await imp('src/data/octoechos_v2/adapter.js');
const v1Tones = {};
for (let t = 1; t <= 8; t++) {
  v1Tones[t] = (await imp(`src/data/octoechos/tone${t}.js`)).default;
  await A.loadV2Tone(t);
}
const v2Raw = {};
for (let t = 1; t <= 8; t++) v2Raw[t] = (await imp(`src/data/octoechos_v2/tone${t}.js`)).default;
const theotokiaRoot = (await imp('src/data/octoechos_v2/theotokia.js')).default;
const sharedRoot = (await imp('src/data/octoechos_v2/shared.js')).default;

const EVES = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const V1_EVE = { sun: 'sun_eve', mon: 'mon', tue: 'tue', wed: 'wed', thu: 'thu', fri: 'fri' };

// ── walk the slot matrix ─────────────────────────────────────────────────────
for (let t = 1; t <= 8; t++) {
  const reg = (slot) => REG[`${slot}|${t}`];

  // §4.1 canonical fields
  cell(t, 'troparion', idx.RESURRECTIONAL_TROPARIA[t]?.text, A.getV2Troparion(t)?.text, reg('troparion'));
  cell(t, 'kontakion', idx.SUNDAY_KONTAKIA[t]?.text, A.getV2Kontakion(t)?.text, reg('kontakion'));
  cell(t, 'dismissal_theotokion', idx.RESURRECTIONAL_DISMISSAL_THEOTOKIA[t]?.text, A.getV2DismissalTheotokion(t)?.text, reg('dismissal_theotokion'));
  cell(t, 'hypakoe', idx.HYPAKOE[t], A.getV2Hypakoe(t)?.text, reg('hypakoe'));

  // Typica prokeimenon/Alleluia — with conflation detection (§4.8)
  {
    const v1p = idx.SUNDAY_PROKEIMENON[t];
    const v2p = A.getV2LiturgyProkeimenon(t);
    const matinsProk = v2Raw[t]?.matins?.prokeimenon;
    const matinsText = matinsProk?.text?.text ?? matinsProk?.text;
    let expected = reg('typica_prokeimenon');
    if (!expected && v1p && v2p && norm(v1p.text) !== norm(v2p.text) && matinsText && norm(v1p.text) === norm(matinsText)) {
      expected = { note: '§4.8 CONFLATION fix: V1 single Sunday prokeimenon carried the MATINS text; Typica serves the Liturgy prokeimenon' };
    }
    cell(t, 'typica_prokeimenon', v1p?.text, v2p?.text, expected);
    cell(t, 'typica_prok_stichos', v1p?.stichos, v2p?.stichos, reg('typica_prok_stichos') || (expected && { note: 'follows corrected prokeimenon' }));
    const v1a = idx.SUNDAY_ALLELUIA[t];
    const v2a = A.getV2LiturgyAlleluia(t);
    cell(t, 'typica_alleluia', v1a?.verse, v2a?.verse, reg('typica_alleluia'));
    cell(t, 'typica_alleluia_st', (v1a?.stichoi || []).join(' /// '), (v2a?.stichoi || []).join(' /// '), reg('typica_alleluia_st'));
  }

  // Sunday aposticha theotokion (tone of the Glory)
  cell(t, 'sun_apost_theotokion', idx.SUNDAY_APOSTICHA_THEOTOKIA[t]?.text, A.getV2ApostichaTheotokion(t)?.text, reg('sun_apost_theotokion'));

  // Saturday Great Vespers
  {
    const v1sat = v1Tones[t]?.vespers?.sat || {};
    const sv = A.getV2SundayVespers(t) || {};
    (v1sat.lic || []).slice(0, 7).forEach((s, i) => cell(t, `gv_lic[${i}]`, s, sv.lic?.[i]?.text, reg(`gv_lic[${i}]`)));
    cell(t, 'gv_dogmatikon', v1sat.dogmatikon, sv.dogmatikon?.text, reg('gv_dogmatikon'));
    (v1sat.aposticha || []).forEach((s, i) => cell(t, `gv_aposticha[${i}]`, s, sv.aposticha?.[i]?.text, reg(`gv_aposticha[${i}]`)));
    // V1 sat.aposticha_glory is a placeholder RUBRIC → V2 aposticha_glory_rubric
    cell(t, 'gv_aposticha_glory_rubric', v1sat.aposticha_glory, sv.aposticha_glory_rubric,
      { note: 'rubric-for-rubric: V1 placeholder "[Glory from Menaion if appointed]" ↔ V2 printed rubric; wording differs by design' });
  }

  // Weekday evenings
  for (const eve of EVES) {
    const v1d = v1Tones[t]?.vespers?.[V1_EVE[eve]] || {};
    const wv = A.getV2WeekdayVespers(t, eve) || {};
    (v1d.lic || []).forEach((s, i) => cell(t, `wk_${eve}_lic[${i}]`, s, wv.lic?.[i]?.text, reg(`wk_${eve}_lic[${i}]`)));
    (v1d.aposticha || []).forEach((s, i) => cell(t, `wk_${eve}_aposticha[${i}]`, s, wv.aposticha?.items?.[i]?.text, reg(`wk_${eve}_aposticha[${i}]`)));
    // V1 weekday aposticha_glory (a text) ↔ V2 typed aposticha_theotokion closer
    cell(t, `wk_${eve}_aposticha_closer`, v1d.aposticha_glory, wv.aposticha_theotokion?.text, reg(`wk_${eve}_aposticha_closer`));
    if (v1d.lic_dogmatikon) cell(t, `wk_${eve}_lic_dogmatikon`, v1d.lic_dogmatikon, wv.lic_theotokion?.text, reg(`wk_${eve}_lic_dogmatikon`));
  }

  // §4.6 — the collapsed LIC_THEOTOKIA entry vs the six per-evening propers
  {
    const v1lt = idx.LIC_THEOTOKIA[t];
    if (v1lt) {
      const exact = EVES.filter((e) => {
        const wv = A.getV2WeekdayVespers(t, e);
        return wv?.lic_theotokion?.text && norm(wv.lic_theotokion.text) === norm(v1lt);
      });
      const near = exact.length ? null : (findInCorpus(v1lt) || findNearInCorpus(v1lt));
      rows.push({
        tone: t, slot: 'lic_theotokia_collapsed', v1: v1lt,
        v2: exact.length ? `matches V2 ${exact.join(',')}.lic_theotokion` : near ? `near-verbatim at \`${near.path}\`` : null,
        status: exact.length || near ? 'EXPECTED_CORRECTION' : 'UNEXPLAINED_VARIANT',
        note: exact.length
          ? `§4.6: V1 collapsed 6-way distinction to one entry — it is the ${exact.join('/')} evening proper; per-evening fields restore the others (cross-cycle Saturday fallback role dies)`
          : near
          ? `§4.6: V1 collapsed entry is a near-verbatim (prefix-matched) re-transcription of \`${near.path}\` — Monday-evening-class weekday text mis-used as the Saturday fallback; per-evening fields replace it, later-wording drift is the V1 re-transcription`
          : 'V1 LIC_THEOTOKIA text matches NO V2 position — investigate',
      });
    }
  }

  // Universal aposticha verses vs shared tables
  {
    const u = v1Tones[t]?.vespers_universal;
    if (u) {
      const std = A.v2Shared.weekday_aposticha_verses?.sets?.standard_vespers || [];
      cell(t, 'univ_weekday_verse1', u.weekday?.verse_weekday_1?.[0], std[0]?.text ?? std[0], reg('univ_weekday_verse1'));
      cell(t, 'univ_weekday_verse2', u.weekday?.verse_weekday_2?.[0], std[1]?.text ?? std[1], reg('univ_weekday_verse2'));
      const satV = A.v2Shared.saturday_gv_aposticha_verses || [];
      ['verse_sat_1', 'verse_sat_2', 'verse_sat_3'].forEach((k, i) =>
        cell(t, `univ_${k}`, u.saturday?.[k]?.[0], satV[i]?.text ?? satV[i], reg(`univ_${k}`)));
    }
  }

  // Retired surfaces (ruling §0.1 / §4.9)
  if (v1Tones[t]?.lic_opening) retired(t, 'lic_opening', 'RULING July 11 2026: director-pointed (OCA) material retires at cutover; re-imagined under Phase D OCA overrides. Invariable Horologion frame text renders meanwhile.');
}
retired('—', 'HYPAKOE.pascha', 'Pentecostarion material parked in the V1 Octoechos table — moves to pentecostarion.js at M4.');
retired('—', 'KATAVASIAE / RESURRECTION_GOSPEL_STICHERA', 'Empty {} stubs, imported but never read. Eothina remain a future Gospel-keyed shared table (V2 SHARED_EXCLUSIONS).');
retired('—', 'LIC_OPENING_FALLBACK', 'Unpointed Ps 140:1-2 strings become a named Horologion frame constant in hours-tool (not V2 canonical text; amendment-F clean).');

// ── report ───────────────────────────────────────────────────────────────────
const counts = {};
for (const r of rows) counts[r.status] = (counts[r.status] || 0) + 1;
const order = ['IDENTICAL', 'IDENTICAL_NORMALIZED', 'EXPECTED_CORRECTION', 'RELOCATED', 'TRANSLATION_DIVERGENCE', 'RETIRED', 'V1_EMPTY', 'UNEXPLAINED_VARIANT'];

let md = `# V1 ↔ V2 Octoechos comparison report\n\nGenerated by \`tools/compare_v1_v2.mjs\` — the Phase 5 cutover evidence (octoechos_wirein_spec.md §5).\n\n## Summary\n\n| Status | Count |\n|---|---|\n`;
for (const s of order) md += `| ${s} | ${counts[s] || 0} |\n`;
md += `| **total cells** | **${rows.length}** |\n`;

const blockers = rows.filter((r) => r.status === 'UNEXPLAINED_VARIANT');
md += `\n**Cutover gate: ${blockers.length === 0 ? 'CLEAN — no unexplained variants' : `${blockers.length} UNEXPLAINED VARIANT(S) — blockers`}.**\n`;

const trunc = (s, n = 220) => (s && s.length > n ? s.slice(0, n) + ' …' : s ?? '—');
for (const status of ['UNEXPLAINED_VARIANT', 'EXPECTED_CORRECTION', 'RELOCATED', 'TRANSLATION_DIVERGENCE', 'IDENTICAL_NORMALIZED', 'V1_EMPTY', 'RETIRED']) {
  const group = rows.filter((r) => r.status === status);
  if (!group.length) continue;
  md += `\n## ${status} (${group.length})\n\n`;
  for (const r of group) {
    md += `### T${r.tone} · \`${r.slot}\`\n\n`;
    if (r.note) md += `${r.note}\n\n`;
    if (r.v1 != null) md += `- **V1:** ${trunc(r.v1)}\n`;
    if (r.v2 != null) md += `- **V2:** ${trunc(r.v2)}\n`;
    md += `\n`;
  }
}
md += `\n## IDENTICAL (${counts.IDENTICAL || 0})\n\nExact byte matches — not itemized. Re-run the script to inspect.\n`;

const out = path.join(repoRoot, 'tools/compare_v1_v2_report.md');
writeFileSync(out, md);

console.log('V1 ↔ V2 comparison —', rows.length, 'cells');
for (const s of order) if (counts[s]) console.log(`  ${s}: ${counts[s]}`);
console.log('Report:', path.relative(repoRoot, out));
if (blockers.length) {
  console.log(`\n${blockers.length} UNEXPLAINED VARIANT(S):`);
  for (const b of blockers.slice(0, 12)) console.log(`  ✗ T${b.tone} ${b.slot}${b.note ? ' — ' + b.note : ''}`);
  if (GATE) process.exit(1);
} else {
  console.log('\nCLEAN — no unexplained variants.');
}
