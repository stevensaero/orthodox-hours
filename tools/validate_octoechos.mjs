// tools/validate_octoechos.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Drift gate for the Octoechos data (the analogue of validate_entries.mjs for the
// flat Menaion/Pentecostarion entries). Interprets src/data/octoechos/schema.js.
//
//   A · Vocabulary guard (hard fail) — every key, at every level, must be blessed
//       in schema.js. A typo or drifted name fails loudly.
//   B · Required-per-section (gated by each tone's `_encoded` marker) — a section
//       is checked for completeness only once the tone claims it; stubbed sections
//       are exempt, so partial progress never blocks a push.
//   C · Cross-tone uniformity — among tones that claim a section, the section's
//       key set must match (belt-and-suspenders on top of the shared schema).
//   D · Placeholder guard — no "...", "TODO", "not yet encoded" in a claimed
//       section. (The `[Glory from Menaion if appointed]` rubric is intentionally
//       NOT treated as a placeholder.)
//
// Run: node tools/validate_octoechos.mjs   (exit 1 on any violation, 0 when clean)
// ─────────────────────────────────────────────────────────────────────────────

import * as S from '../src/data/octoechos/schema.js';
import * as INDEX from '../src/data/octoechos/index.js';

const tones = {};
for (const t of S.TONES) {
  tones[t] = (await import(`../src/data/octoechos/tone${t}.js`)).default;
}

const problems = [];
const add = (msg) => problems.push(msg);

// ── helpers ──────────────────────────────────────────────────────────────────
function checkVocab(label, obj, known) {
  if (!obj || typeof obj !== 'object') { add(`${label}: expected an object`); return; }
  for (const k of Object.keys(obj)) {
    if (!known.includes(k)) add(`${label}: unknown key "${k}" — typo, or add it to schema.js if genuinely new.`);
  }
}
function checkRequired(label, obj, required) {
  if (!obj || typeof obj !== 'object') return;
  for (const k of required) if (!(k in obj)) add(`${label}: required key "${k}" absent.`);
}
function isNonEmptyArrayOfStrings(v) {
  return Array.isArray(v) && v.length > 0 && v.every((s) => typeof s === 'string' && s.trim().length > 0);
}
function scanPlaceholders(label, value) {
  if (typeof value === 'string') {
    for (const re of S.PLACEHOLDER_PATTERNS) if (re.test(value)) add(`${label}: placeholder text (${re}).`);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => scanPlaceholders(`${label}[${i}]`, v));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) scanPlaceholders(`${label}.${k}`, v);
  }
}

// ── Matins sub-validator ─────────────────────────────────────────────────────
function validateMatins(L, m) {
  for (const key of ['sessional_kathisma2', 'sessional_kathisma3']) {
    const s = m[key]; if (!s) continue;
    checkVocab(`${L}.${key}`, s, S.SESSIONAL.known);
    checkRequired(`${L}.${key}`, s, S.SESSIONAL.required);
    for (const hk of ['hymn_1', 'hymn_2']) {
      const h = s[hk]; if (!h) continue;
      checkVocab(`${L}.${key}.${hk}`, h, S.SESSIONAL_HYMN.known);
      checkRequired(`${L}.${key}.${hk}`, h, S.SESSIONAL_HYMN.required);
    }
  }
  if (m.matins_prokeimenon) {
    checkVocab(`${L}.matins_prokeimenon`, m.matins_prokeimenon, S.MATINS_PROKEIMENON.known);
    checkRequired(`${L}.matins_prokeimenon`, m.matins_prokeimenon, S.MATINS_PROKEIMENON.required);
  }
  if (m.songs_of_ascent !== undefined) {
    const sa = m.songs_of_ascent;
    if (!Array.isArray(sa) || sa.length < 1) add(`${L}.songs_of_ascent: must be a non-empty array of antiphons.`);
    else sa.forEach((ant, i) => { if (!isNonEmptyArrayOfStrings(ant)) add(`${L}.songs_of_ascent[${i}]: must be a non-empty array of stanza strings.`); });
  }
  if (m.praises) {
    checkVocab(`${L}.praises`, m.praises, S.PRAISES.known);
    checkRequired(`${L}.praises`, m.praises, S.PRAISES.required);
    if (Array.isArray(m.praises.stichera)) {
      m.praises.stichera.forEach((st, i) => {
        checkVocab(`${L}.praises.stichera[${i}]`, st, S.PRAISES_STICHERON.known);
        checkRequired(`${L}.praises.stichera[${i}]`, st, S.PRAISES_STICHERON.required);
      });
    } else add(`${L}.praises.stichera: must be an array.`);
  }
  if (m.canons) {
    checkVocab(`${L}.canons`, m.canons, S.CANONS.known);
    checkRequired(`${L}.canons`, m.canons, S.CANONS.required);
    for (const ck of S.CANONS.known) {
      const c = m.canons[ck]; if (!c) continue;
      checkVocab(`${L}.canons.${ck}`, c, S.CANON.known);
      checkRequired(`${L}.canons.${ck}`, c, S.CANON.required);
      if (c.odes) {
        for (const ok of Object.keys(c.odes).map(Number)) {
          if (!S.CANON_ODES.includes(ok)) add(`${L}.canons.${ck}.odes: unexpected ode ${ok} (expected ${S.CANON_ODES.join(',')}; Ode II omitted on Sundays).`);
        }
        for (const ok of S.CANON_ODES) {
          const ode = c.odes[ok];
          if (!ode) { add(`${L}.canons.${ck}.odes.${ok}: absent.`); continue; }
          checkVocab(`${L}.canons.${ck}.odes.${ok}`, ode, S.CANON_ODE.known);
          checkRequired(`${L}.canons.${ck}.odes.${ok}`, ode, S.CANON_ODE.required);
          if (ode.troparia !== undefined && !isNonEmptyArrayOfStrings(ode.troparia)) add(`${L}.canons.${ck}.odes.${ok}.troparia: must be a non-empty array of strings.`);
        }
      }
    }
  }
}

// ── Per-tone validation ──────────────────────────────────────────────────────
for (const t of S.TONES) {
  const d = tones[t];
  const L = `tone${t}`;
  if (!d || typeof d !== 'object') { add(`${L}: no default export object.`); continue; }

  checkVocab(L, d, S.TOP.known);
  checkRequired(L, d, S.TOP.required);

  const enc = Array.isArray(d._encoded) ? d._encoded : [];
  if (!Array.isArray(d._encoded)) add(`${L}: _encoded must be an array of ${JSON.stringify(S.ENCODABLE_SECTIONS)}.`);
  for (const sec of enc) if (!S.ENCODABLE_SECTIONS.includes(sec)) add(`${L}: _encoded has unknown section "${sec}".`);

  const claimsVespers = enc.includes('vespers');
  const claimsMatins = enc.includes('matins');

  // vespers
  if (d.vespers) {
    checkVocab(`${L}.vespers`, d.vespers, S.VESPERS_DAYS);
    if (claimsVespers) checkRequired(`${L}.vespers`, d.vespers, S.VESPERS_DAYS);
    for (const day of S.VESPERS_DAYS) {
      const o = d.vespers[day];
      if (!o) { if (claimsVespers) add(`${L}.vespers.${day}: absent.`); continue; }
      const ds = S.VESPERS_DAY[day];
      checkVocab(`${L}.vespers.${day}`, o, ds.known);
      if (claimsVespers) {
        checkRequired(`${L}.vespers.${day}`, o, ds.required);
        if (o.lic !== undefined && !isNonEmptyArrayOfStrings(o.lic)) add(`${L}.vespers.${day}.lic: must be a non-empty array of strings.`);
        if (o.aposticha !== undefined && !isNonEmptyArrayOfStrings(o.aposticha)) add(`${L}.vespers.${day}.aposticha: must be a non-empty array of strings.`);
        scanPlaceholders(`${L}.vespers.${day}.lic`, o.lic);
        scanPlaceholders(`${L}.vespers.${day}.aposticha`, o.aposticha);
        scanPlaceholders(`${L}.vespers.${day}.dogmatikon`, o.dogmatikon);
        scanPlaceholders(`${L}.vespers.${day}.lic_dogmatikon`, o.lic_dogmatikon);
      }
    }
  } else if (claimsVespers) add(`${L}.vespers: absent but claimed in _encoded.`);

  // vespers_universal
  if (d.vespers_universal) {
    checkVocab(`${L}.vespers_universal`, d.vespers_universal, S.VESPERS_UNIVERSAL.known);
    if (claimsVespers) {
      checkRequired(`${L}.vespers_universal`, d.vespers_universal, S.VESPERS_UNIVERSAL.required);
      for (const k of S.VESPERS_UNIVERSAL.required) {
        const grp = d.vespers_universal[k];
        if (grp === undefined) continue;
        if (!grp || typeof grp !== 'object' || Array.isArray(grp)) {
          add(`${L}.vespers_universal.${k}: must be an object of verse-keyed string arrays.`);
          continue;
        }
        for (const [vk, vv] of Object.entries(grp)) {
          if (!S.VESPERS_UNIVERSAL.verseKey.test(vk)) add(`${L}.vespers_universal.${k}: unknown verse key "${vk}".`);
          if (!isNonEmptyArrayOfStrings(vv)) add(`${L}.vespers_universal.${k}.${vk}: must be a non-empty array of strings.`);
        }
      }
    }
  }

  // matins
  if (d.matins && typeof d.matins === 'object') {
    checkVocab(`${L}.matins`, d.matins, S.MATINS.known);
    if (claimsMatins) {
      checkRequired(`${L}.matins`, d.matins, S.MATINS.required);
      validateMatins(`${L}.matins`, d.matins);
      scanPlaceholders(`${L}.matins`, d.matins);
    }
  } else if (claimsMatins) add(`${L}.matins: absent but claimed in _encoded.`);
}

// ── Cross-tone uniformity (claimed sections) ─────────────────────────────────
function crossTone(section, getKeys) {
  const claimers = S.TONES.filter((t) => (tones[t]?._encoded || []).includes(section));
  if (claimers.length < 2) return;
  const ref = getKeys(tones[claimers[0]]);
  for (const t of claimers.slice(1)) {
    const k = getKeys(tones[t]);
    if (k.join(',') !== ref.join(',')) add(`cross-tone(${section}): tone${t} keys [${k}] differ from tone${claimers[0]} [${ref}].`);
  }
}
crossTone('vespers', (d) => Object.keys(d.vespers || {}).sort());
crossTone('matins', (d) => Object.keys(d.matins || {}).sort());

// ── index.js tone-independent tables ─────────────────────────────────────────
for (const name of S.INDEX.toneKeyed) {
  const tbl = INDEX[name];
  if (!tbl || typeof tbl !== 'object') { add(`index.js: tone-keyed table ${name} missing.`); continue; }
  for (const t of S.TONES) if (!(t in tbl)) add(`index.js: ${name} missing tone ${t}.`);
}
for (const name of S.INDEX.stubs) {
  if (!(name in INDEX)) add(`index.js: stub table ${name} missing (expected at least an empty export).`);
}

// ── Report ───────────────────────────────────────────────────────────────────
if (problems.length === 0) {
  const status = S.TONES.map((t) => `T${t}:[${(tones[t]?._encoded || []).join('|') || '—'}]`).join('  ');
  console.log('✓ Octoechos schema conformance: all 8 tones pass (vocabulary + required + cross-tone + placeholder).');
  console.log('  encoded status — ' + status);
  process.exit(0);
} else {
  console.error(`✗ Octoechos schema conformance: ${problems.length} issue(s):\n`);
  for (const p of problems) console.error('  • ' + p);
  console.error('\nFix the data (or extend schema.js deliberately) before pushing.');
  process.exit(1);
}
