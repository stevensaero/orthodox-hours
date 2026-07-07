// tools/validate_octoechos_v2.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 drift gate — implements octoechos_v2_spec.md §6 against
// src/data/octoechos_v2/schema_v2.js (the single contract).
//
//   A · Vocabulary guard — every key blessed in schema_v2; typos fail loudly.
//   B · Required-per-claimed-section (`_encoded`, per-day granularity).
//   C · Structural counts (SECTION_RULES) + Shape A/B canon contracts.
//   D · Label vocabulary incl. compound labels (§4.11).
//   E · Devices (§2.7/§9.4): `repeat` only 2; `incipit_ref` prefix-matches its
//       referent; never both on one node; never silently resolved.
//   F · Typed closers from CLOSER_TYPES (§4.4).
//   G · Provenance + tier MANDATORY on every text node (amendment D) — hard
//       fail; absence of tier is not "unpointed".
//   H · Pointing per tier (encoding_rule_v2.md §3): Tier 2 sergius = `*` +
//       exactly one `**`, never `|`//`; Tier 1 = no markers; no `[` in
//       sergius-dialect fields.
//   I · CHARSET hard-fail: any non-Latin-script letter codepoint (§2.8/§9.10)
//       + the digit-zero-as-O pattern. EVERY hit is printed verbatim with
//       context for Bill's review — this tool NEVER normalizes or resolves
//       anything automatically (§9.10 as ruled).
//   J · Placeholder guard (§2.6 anti-pattern).
//   K · Recurrence-register check (§2.3a): identical ⇒ byte-match; variant ⇒
//       must differ; unencoded sides ⇒ PENDING (reported, not failed);
//       `family` ⇒ informational. Anti-dedup stance: this gate NEVER suggests
//       merging (§2.3).
//   L · Sic-register check (amendment E): stored text at each locus must still
//       contain the recorded sic byte-for-byte — silent "correction" of a
//       recorded sic is a hard fail.
//
// Run: node tools/validate_octoechos_v2.mjs   (exit 1 on any violation)
// With no V2 data files yet, structural checks pass trivially; the registers
// and the schema itself are still validated, so the gate is live from day one.
// ─────────────────────────────────────────────────────────────────────────────

import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import * as S from '../src/data/octoechos_v2/schema_v2.js';
import RECURRENCES from '../src/data/octoechos_v2/known_recurrences.js';
import SICS from '../src/data/octoechos_v2/sic_register.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const V2_DIR = join(HERE, '..', 'src', 'data', 'octoechos_v2');

const problems = [];
const pending = [];
const info = [];
const fail = (m) => problems.push(m);

// ── load whatever V2 data exists ─────────────────────────────────────────────
const data = {};            // { tone2: {...}, shared: {...}, theotokia: {...} }
const files = existsSync(V2_DIR) ? readdirSync(V2_DIR) : [];
for (const f of files) {
  const m = f.match(/^tone([1-8])\.js$/);
  if (m) data[`tone${m[1]}`] = (await import(pathToFileURL(join(V2_DIR, f)).href)).default;
}
if (files.includes('shared.js'))    data.shared    = (await import(pathToFileURL(join(V2_DIR, 'shared.js')).href)).default;
if (files.includes('theotokia.js')) data.theotokia = (await import(pathToFileURL(join(V2_DIR, 'theotokia.js')).href)).default;

// ── path resolution (schema_v2 path grammar) ─────────────────────────────────
// 'tone2.matins_weekday.tue.sessionals[0].closer' → walk data.tone2 …
function resolvePath(path) {
  if (!path) return { status: 'unresolvable' };
  if (path.includes(':')) return { status: 'external' };       // menaion:/v1: prefixes
  const segs = path.split('.');
  const rootKey = segs.shift();
  let node = data[rootKey];
  if (node === undefined) return { status: 'pending' };        // module not encoded yet
  for (const seg of segs) {
    const m = seg.match(/^([^[\]]+)((\[\d+\])*)$/);
    if (!m) return { status: 'unresolvable' };
    node = node?.[m[1]];
    for (const idx of (m[2].match(/\d+/g) ?? [])) node = node?.[Number(idx)];
    if (node === undefined) return { status: 'pending' };
  }
  return { status: 'found', node };
}
const nodeText = (n) => (typeof n === 'string') ? n : (n && typeof n === 'object' ? n.text : undefined);

// ── I · charset + digit-zero (every text-bearing string, all modules) ────────
const nonLatinLetter = (ch) => /\p{L}/u.test(ch) && !/\p{Script=Latin}/u.test(ch);
function charsetCheck(where, s) {
  if (typeof s !== 'string') return;
  const hits = new Map();
  for (const ch of s) {
    if (nonLatinLetter(ch)) hits.set(ch, (hits.get(ch) ?? 0) + 1);
  }
  for (const [ch, count] of hits) {
    const cp = 'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
    const i = s.indexOf(ch);
    fail(`${where}: NON-LATIN LETTER ${cp} "${ch}" ×${count} — context: "…${s.slice(Math.max(0, i - 25), i + 25)}…"  [§9.10 — FOR BILL'S REVIEW; no automatic handling]`);
  }
  // digit-zero-as-O: standalone 0 adjacent to a capitalized word (§9.10 ext.)
  for (const m of s.matchAll(/(?:^|\s)0(?=\s+[A-Z])|[A-Z][a-z]*\s+0(?=\s|$|[.,;!?])/g)) {
    const i = m.index;
    fail(`${where}: DIGIT-ZERO-AS-O pattern — context: "…${s.slice(Math.max(0, i - 25), i + 30)}…"  [§9.10 — FOR BILL'S REVIEW]`);
  }
}

// ── J · placeholders ─────────────────────────────────────────────────────────
function placeholderCheck(where, s) {
  if (typeof s !== 'string') return;
  for (const re of S.PLACEHOLDER_PATTERNS) {
    if (re.test(s)) fail(`${where}: placeholder text (${re}) — rubric prose belongs in rubric fields only (§2.6).`);
  }
}

// ── G/H · text-node checks ───────────────────────────────────────────────────
function isTextNode(v) { return v && typeof v === 'object' && !Array.isArray(v) && 'text' in v; }

function checkTextNode(where, n) {
  // G · provenance + tier — MANDATORY (amendment D)
  if (!('tier' in n)) fail(`${where}: text node MISSING TIER — hard fail (amendment D: absence of a field is not verified absence).`);
  else if (!S.TIERS.includes(n.tier)) fail(`${where}: tier "${n.tier}" not in {1,2,3}.`);
  if (!n.src || typeof n.src !== 'object') fail(`${where}: text node MISSING src {file, locus} — hard fail (amendment D).`);
  else {
    if (!n.src.file) fail(`${where}: src.file missing.`);
    else if (!S.SOURCE_FILES.includes(n.src.file)) fail(`${where}: src.file "${n.src.file}" not in the SOURCE_FILES vocabulary (schema_v2).`);
    if (!n.src.locus) fail(`${where}: src.locus missing.`);
  }
  if (typeof n.text !== 'string' || (!n.text.trim() && !n.incipit_ref)) fail(`${where}: empty text.`);

  // vocabulary guard on the node itself
  for (const k of Object.keys(n)) {
    if (!S.TEXT_NODE.required.includes(k) && !S.TEXT_NODE.optional.includes(k)) {
      fail(`${where}: unknown text-node key "${k}" — typo, or add it to schema_v2.TEXT_NODE deliberately.`);
    }
  }

  // E · devices
  if ('repeat' in n && n.repeat !== 2) fail(`${where}: repeat=${n.repeat} — the "(Twice)" device is exactly 2 (§9.4).`);
  if ('repeat' in n && 'incipit_ref' in n) fail(`${where}: carries BOTH repeat and incipit_ref — never convert or combine devices (§2.7).`);
  if ('incipit_ref' in n) {
    const ref = resolvePath(n.incipit_ref);
    if (ref.status === 'found') {
      const full = nodeText(ref.node);
      if (typeof full !== 'string') fail(`${where}: incipit_ref "${n.incipit_ref}" resolves to a non-text node.`);
      else {
        // incipit prefix-match: case-insensitive, whitespace-normalized,
        // trailing ellipsis/punctuation stripped (2-4 Ode IX capital-B evidence)
        const norm = (t) => t.toLowerCase().replace(/[*]/g, ' ').replace(/\s+/g, ' ').trim();
        const incipit = norm(n.text.replace(/(\.\.\.|…)[\s,]*$/, ''));
        if (!incipit) fail(`${where}: incipit_ref with empty incipit text.`);
        else if (!norm(full).startsWith(incipit)) {
          fail(`${where}: incipit "${n.text}" does NOT prefix-match its referent ${n.incipit_ref} (§2.7 gate check).`);
        }
      }
    } else if (ref.status === 'pending') {
      pending.push(`${where}: incipit_ref "${n.incipit_ref}" — referent not yet encoded (PENDING).`);
    } else {
      fail(`${where}: incipit_ref "${n.incipit_ref}" is not a resolvable position path.`);
    }
  }

  // labels (may be compound)
  if ('label' in n) {
    const labels = Array.isArray(n.label) ? n.label : [n.label];
    if (labels.length === 0) fail(`${where}: empty label array.`);
    for (const l of labels) if (!S.LABELS.includes(l)) fail(`${where}: label "${l}" not in the §4.11 vocabulary.`);
  }

  // F · typed closers
  if ('type' in n && !S.CLOSER_TYPES.includes(n.type)) fail(`${where}: closer type "${n.type}" not in {${S.CLOSER_TYPES.join(', ')}}.`);

  // H · pointing per tier (sergius dialect unless marked oca)
  const dialect = n.dialect ?? 'sergius';
  const t = n.text ?? '';
  if (dialect === 'sergius' && typeof t === 'string' && !('incipit_ref' in n)) {
    if (t.includes('|') || t.includes('//')) fail(`${where}: sergius-dialect field contains |or// — store the source's own markers (§3.3).`);
    if (t.includes('[')) fail(`${where}: bracket in sergius-dialect field (§6).`);
    if (n.tier === 2) {
      const doubles = (t.match(/\*\*/g) ?? []).length;
      const singles = (t.match(/\*/g) ?? []).length - doubles * 2;
      if (doubles !== 1) fail(`${where}: Tier-2 sergius text must carry exactly one \`**\` (found ${doubles}).`);
      if (singles < 1) fail(`${where}: Tier-2 sergius text carries no \`*\` line marker.`);
    }
    if (n.tier === 1 && /[*]/.test(t)) fail(`${where}: Tier-1 text contains pointing markers — either the tier or the text is wrong (per-item source fact, §3.2).`);
  }
  if (n.tier === 3 && !n.director) info.push(`${where}: Tier-3 without director flag — check §3.5.`);

  charsetCheck(where, t);
  placeholderCheck(where, t);
  for (const k of ['sourceLabel', 'spec_mel', 'refrain', 'provenance_note']) charsetCheck(`${where}.${k}`, n[k]);
}

// ── generic walk: find every text node + every string, everywhere ────────────
function walk(where, v, inRubric = false) {
  if (typeof v === 'string') {
    charsetCheck(where, v);
    if (!inRubric) placeholderCheck(where, v);
    return;
  }
  if (Array.isArray(v)) { v.forEach((x, i) => walk(`${where}[${i}]`, x, inRubric)); return; }
  if (v && typeof v === 'object') {
    if (isTextNode(v)) { checkTextNode(where, v); return; }
    for (const [k, x] of Object.entries(v)) walk(`${where}.${k}`, x, inRubric || /rubric/.test(k));
  }
}

// ── canon checks ─────────────────────────────────────────────────────────────
function checkCanonB(where, canon, { requireIrmos = true } = {}) {
  if (!canon || typeof canon !== 'object') { fail(`${where}: expected a canon object.`); return; }
  for (const k of Object.keys(canon)) {
    if (!S.CANON_B.known.includes(k)) fail(`${where}: unknown canon key "${k}".`);
  }
  if (!canon.title) fail(`${where}: canon missing verbatim title.`);
  const odes = canon.odes ?? {};
  for (const k of Object.keys(odes)) {
    if (!S.CANON_ODES.includes(Number(k))) fail(`${where}.odes: ode key "${k}" outside {${S.CANON_ODES.join(',')}} (Ode II omitted).`);
  }
  for (const [ode, o] of Object.entries(odes)) {
    const W = `${where}.odes[${ode}]`;
    if (requireIrmos && !o.irmos) fail(`${W}: missing irmos (full text or incipit_ref device — never empty or invented, §6).`);
    if (!Array.isArray(o.items) || o.items.length === 0) fail(`${W}: empty items — per-ode census is a source fact but never empty (§4.11).`);
  }
}
function checkCanonA(where, canon) {
  if (!canon || typeof canon !== 'object') { fail(`${where}: expected a Shape A canon.`); return; }
  const odes = canon.odes ?? {};
  for (const [ode, o] of Object.entries(odes)) {
    const W = `${where}.odes[${ode}]`;
    if (!S.CANON_ODES.includes(Number(ode))) fail(`${W}: bad ode key.`);
    if (!o.irmos) fail(`${W}: missing irmos.`);
    for (const sub of S.CANON_A.subCanons) {
      if (!o[sub]) { fail(`${W}: missing sub-canon "${sub}" (Shape A).`); continue; }
    }
    const closer = o.resurrection?.closer;
    const want = S.CANON_A.closerByOde[ode] ?? S.CANON_A.closerByOde.default;
    if (closer && closer.type !== want) fail(`${W}: resurrection closer type "${closer?.type}" — Shape A requires "${want}" at Ode ${ode} (§4.11).`);
  }
}

// ── per-tone validation ──────────────────────────────────────────────────────
function sectionClaimed(tone, claim) { return (tone._encoded ?? []).includes(claim); }
function countAt(obj, dotted) {
  let n = obj; for (const s of dotted.split('.')) n = n?.[s];
  return Array.isArray(n) ? n.length : undefined;
}

for (const [key, tone] of Object.entries(data)) {
  if (!key.startsWith('tone')) continue;
  const T = key;

  // vocabulary + claims
  for (const k of Object.keys(tone)) {
    if (!S.TONE_TOP.known.includes(k)) fail(`${T}: unknown top-level key "${k}".`);
  }
  for (const k of S.TONE_TOP.required) if (!(k in tone)) fail(`${T}: required key "${k}" absent.`);
  for (const c of tone._encoded ?? []) {
    if (!S.ENCODABLE_SECTIONS.includes(c)) fail(`${T}._encoded: unknown claim "${c}".`);
  }

  walk(T, tone);   // provenance/tier/charset/pointing/devices/labels everywhere

  // structural rules, per claimed section
  if (sectionClaimed(tone, 'little_vespers') && tone.little_vespers) {
    for (const [p, want] of Object.entries(S.SECTION_RULES.little_vespers.counts)) {
      const got = countAt(tone.little_vespers, p);
      if (got !== want) fail(`${T}.little_vespers.${p}: expected ${want} items, found ${got}.`);
    }
  }
  if (sectionClaimed(tone, 'great_vespers') && tone.great_vespers) {
    for (const [p, want] of Object.entries(S.SECTION_RULES.great_vespers.counts)) {
      const got = countAt(tone.great_vespers, p);
      if (got !== want) fail(`${T}.great_vespers.${p}: expected ${want} items, found ${got}.`);
    }
  }
  if (sectionClaimed(tone, 'matins') && tone.matins) {
    const m = tone.matins;
    if ((m.sessionals?.length ?? 0) !== S.SECTION_RULES.matins.sessionalSets) {
      fail(`${T}.matins.sessionals: Sunday has exactly ${S.SECTION_RULES.matins.sessionalSets} sets (found ${m.sessionals?.length}).`);
    }
    if (m.praises) {
      const st = m.praises.stichera?.length, vs = m.praises.verses?.length;
      if (st !== 8 || vs !== 8) fail(`${T}.matins.praises: expected 8 stichera + 8 verses (found ${st}+${vs}).`);
    }
    if (m.anabathmoi && !Array.isArray(m.anabathmoi)) fail(`${T}.matins.anabathmoi: expected an array (count is per-tone — NOT gated, §9.7).`);
    if (m.canon) checkCanonA(`${T}.matins.canon`, m.canon);
    // prokeimenon conflation trap (§8)
    if (sectionClaimed(tone, 'liturgy') && tone.liturgy) {
      const a = nodeText(m.prokeimenon?.text), b = nodeText(tone.liturgy.prokeimenon?.text);
      if (a && b && a === b) fail(`${T}: matins.prokeimenon EQUALS liturgy.prokeimenon — V1 conflation trap (§8).`);
    }
  }
  if (tone.matins_weekday) {
    for (const [day, md] of Object.entries(tone.matins_weekday)) {
      if (!S.WEEKDAY_MORNINGS.includes(day)) { fail(`${T}.matins_weekday: unknown day "${day}".`); continue; }
      if (!sectionClaimed(tone, `matins_weekday.${day}`)) continue;
      const want = S.SECTION_RULES.matins_weekday.sessionalSets[day];
      if ((md.sessionals?.length ?? 0) !== want) fail(`${T}.matins_weekday.${day}.sessionals: expected ${want} sets (§4.8${day === 'sat' ? 'a' : ''}), found ${md.sessionals?.length}.`);
      if ((md.canons?.length ?? 0) !== 2) fail(`${T}.matins_weekday.${day}.canons: expected 2 canons stored whole, found ${md.canons?.length}.`);
      (md.canons ?? []).forEach((c, i) => checkCanonB(`${T}.matins_weekday.${day}.canons[${i}]`, c));
      (md.sessionals ?? []).forEach((set, i) => {
        if (set.closer && !set.closer.type) fail(`${T}.matins_weekday.${day}.sessionals[${i}].closer: missing type (§4.4 convention).`);
      });
      if (day !== 'sat' && md.praises) fail(`${T}.matins_weekday.${day}: praises present — Saturday-only field (§4.8a).`);
      if (md.aposticha_theotokion && !md.aposticha_theotokion.type) fail(`${T}.matins_weekday.${day}.aposticha_theotokion: closer missing type.`);
    }
  }
  if (tone.vespers_weekday) {
    for (const [eve, vd] of Object.entries(tone.vespers_weekday)) {
      if (!S.VESPERS_EVENINGS.includes(eve)) { fail(`${T}.vespers_weekday: unknown evening "${eve}".`); continue; }
      if (!sectionClaimed(tone, `vespers_weekday.${eve}`)) continue;
      for (const closerKey of ['lic_theotokion', 'aposticha_theotokion']) {
        const c = vd[closerKey];
        if (c && !c.type) fail(`${T}.vespers_weekday.${eve}.${closerKey}: missing type from {${S.CLOSER_TYPES.join(', ')}} (§4.4).`);
      }
      if (eve === 'fri') {
        if (vd.lic?.menaion_fallback) fail(`${T}.vespers_weekday.fri: menaion_fallback present — Friday is the no-fallback shape (§4.4 fri).`);
        if (vd.lic_theotokion && vd.lic_theotokion.type !== 'dogmatic_theotokion') fail(`${T}.vespers_weekday.fri.lic_theotokion: Friday closer is the dogmatikon (§9.2) — type dogmatic_theotokion.`);
      }
    }
  }
  if (tone.compline) {
    for (const [night, cd] of Object.entries(tone.compline)) {
      if (!S.COMPLINE_NIGHTS.includes(night)) { fail(`${T}.compline: unknown night "${night}".`); continue; }
      if (!sectionClaimed(tone, `compline.${night}`)) continue;
      if (cd.canon) checkCanonB(`${T}.compline.${night}.canon`, cd.canon);
      if (!cd.after_ode6) fail(`${T}.compline.${night}: missing after_ode6.`);
    }
  }
  if (sectionClaimed(tone, 'nocturns') && tone.nocturns?.canon) checkCanonB(`${T}.nocturns.canon`, tone.nocturns.canon);
  if (sectionClaimed(tone, 'liturgy') && tone.liturgy) {
    if ('communion' in tone.liturgy) fail(`${T}.liturgy: communion present — Sunday prints NO communion verse; do not invent one (§4.9).`);
    const bt = tone.liturgy.beatitudes?.troparia?.length;
    if (bt !== undefined && bt !== 6) fail(`${T}.liturgy.beatitudes: expected 6 troparia, found ${bt}.`);
  }
  if (tone.liturgy_weekday) {
    for (const [day, ld] of Object.entries(tone.liturgy_weekday)) {
      if (!S.WEEKDAY_MORNINGS.includes(day)) { fail(`${T}.liturgy_weekday: unknown day "${day}".`); continue; }
      if (!sectionClaimed(tone, `liturgy_weekday.${day}`)) continue;
      if (!ld.communion) fail(`${T}.liturgy_weekday.${day}: missing communion (koinonikon is a weekday field class, §4.10).`);
      const items = ld.beatitudes?.items ?? [];
      for (const one of S.SECTION_RULES.liturgy_weekday.beatitudesExactlyOne) {
        const n = items.filter(it => (Array.isArray(it.label) ? it.label : [it.label]).includes(one)).length;
        if (n !== 1) fail(`${T}.liturgy_weekday.${day}.beatitudes: expected exactly one "${one}" item, found ${n}.`);
      }
    }
  }
}
if (data.shared) {
  for (const k of Object.keys(data.shared)) {
    if (!S.SHARED_TABLES.includes(k)) fail(`shared: unknown table "${k}" — bless it in schema_v2.SHARED_TABLES deliberately (§5).`);
  }
  walk('shared', data.shared);
}
if (data.theotokia) {
  for (const k of Object.keys(data.theotokia)) {
    if (!S.THEOTOKIA_TABLES.includes(k)) fail(`theotokia: unknown table "${k}" (§4.12).`);
  }
  walk('theotokia', data.theotokia);
}

// ── K · recurrence register ──────────────────────────────────────────────────
let recChecked = 0, recPending = 0;
for (const [i, r] of RECURRENCES.entries()) {
  const W = `known_recurrences[${i}]`;
  if (!S.RECURRENCE_RELATIONS.includes(r.relation)) { fail(`${W}: bad relation "${r.relation}".`); continue; }
  if (!r.a || !r.b || !r.note) fail(`${W}: entries need a, b, note.`);
  if (r.relation === 'family') { info.push(`${W}: family (informational) — ${r.note.slice(0, 60)}…`); continue; }
  if (r.approx) { recPending++; pending.push(`${W}: approx position — refine in the commit that encodes either side.`); continue; }
  const A = resolvePath(r.a), B = resolvePath(r.b);
  if (A.status === 'external' || B.status === 'external') { recPending++; pending.push(`${W}: external corpus side — checked when both resolve.`); continue; }
  if (A.status !== 'found' || B.status !== 'found') { recPending++; pending.push(`${W}: ${r.a} ↔ ${r.b} — one or both positions not yet encoded (PENDING).`); continue; }
  const ta = nodeText(A.node), tb = nodeText(B.node);
  if (typeof ta !== 'string' || typeof tb !== 'string') { fail(`${W}: position does not resolve to text.`); continue; }
  recChecked++;
  if (r.relation === 'identical' && ta !== tb) {
    fail(`${W}: IDENTICAL pair does NOT byte-match — a typo in a true-duplicate slot, or wrong text at one site (§2.3a). ${r.a} ↔ ${r.b}`);
  }
  if (r.relation === 'variant' && ta === tb) {
    fail(`${W}: VARIANT pair BYTE-MATCHES — wrong rendering copy-pasted into a slot where the source re-renders (§2.3a). ${r.a} ↔ ${r.b}`);
  }
}

// ── L · sic register ─────────────────────────────────────────────────────────
let sicChecked = 0, sicPending = 0;
for (const [i, s] of SICS.entries()) {
  const W = `sic_register[${i}] (${s.file}: ${String(s.verbatim).slice(0, 30)})`;
  if (!s.file || !('verbatim' in s) || !s.note) fail(`${W}: entries need file, verbatim, note.`);
  if (!S.SOURCE_FILES.includes(s.file)) fail(`${W}: file "${s.file}" not in SOURCE_FILES.`);
  if (!s.path || s.approx) { sicPending++; pending.push(`${W}: locus not yet encoded/pinned (PENDING — pin in the commit that encodes it).`); continue; }
  const R = resolvePath(s.path);
  if (R.status !== 'found') { sicPending++; pending.push(`${W}: ${s.path} not yet encoded (PENDING).`); continue; }
  const t = nodeText(R.node) ?? (typeof R.node === 'string' ? R.node : undefined);
  if (typeof t !== 'string') { fail(`${W}: path does not resolve to text.`); continue; }
  sicChecked++;
  if (s.verbatim && !t.includes(s.verbatim)) {
    fail(`${W}: stored text no longer contains the recorded sic byte-for-byte — silent correction is a HARD FAIL (amendment E, §9.12). Path: ${s.path}`);
  }
}

// ── report ───────────────────────────────────────────────────────────────────
const tonesFound = Object.keys(data).filter(k => k.startsWith('tone'));
console.log(`Octoechos V2 gate — modules found: ${[...tonesFound, data.shared && 'shared', data.theotokia && 'theotokia'].filter(Boolean).join(', ') || 'none (infrastructure phase — no V2 data yet)'}`);
if (info.length) { console.log(`\n${info.length} informational:`); for (const m of info) console.log(`  ℹ ${m}`); }
if (pending.length) {
  console.log(`\n${pending.length} PENDING (not failures — positions await encoding):`);
  for (const m of pending.slice(0, 12)) console.log(`  ◌ ${m}`);
  if (pending.length > 12) console.log(`  … and ${pending.length - 12} more.`);
}
console.log(`\nRegisters: ${RECURRENCES.length} recurrence pairs (${recChecked} checked, ${recPending + (RECURRENCES.filter(r => r.relation === 'family').length)} pending/informational); ${SICS.length} sics (${sicChecked} checked, ${sicPending} pending).`);
if (problems.length) {
  console.error(`\n✗ ${problems.length} VIOLATION(S) — every §9.10 item below goes to Bill before resolution:\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(1);
}
console.log('\n✓ Octoechos V2 gate: PASS');
