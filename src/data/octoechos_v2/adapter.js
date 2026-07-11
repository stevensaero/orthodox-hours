// src/data/octoechos_v2/adapter.js
// ─────────────────────────────────────────────────────────────────────────────
// Assembler-facing adapter over the Octoechos V2 dataset.
// Spec: octoechos_wirein_spec.md §2 (M3a). Phase 5 cutover plumbing.
//
// Principles (from the wire-in spec):
//   • Dynamic loading preserved — nothing tone-keyed statically imported.
//     Mirrors the V1 _octoechosLoaders/_octoechosCache pattern exactly;
//     shared.js + theotokia.js are tone-independent and load once on first
//     tone load.
//   • Every accessor returns provenance: nodes carry { text, path, src }
//     where `path` is the reading-view anchor id (e.g.
//     "tone2.great_vespers.dogmatikon" → /octoechos-v2#<path>) and `src`
//     the { file, locus } of the served print site. This is what makes
//     Phase B.2 deep links free.
//   • Shape translation happens HERE, never in data. The assembler's slots
//     receive the shapes they consume today; V2 richness (typed closers,
//     labels, verses) is surfaced additively.
//   • No cross-cycle fallbacks. V2 has the proper text at every position;
//     an absent field returns null and the assembler's existing
//     `unresolved` surfacing applies. (The V1 LIC_THEOTOKIA chains were the
//     §8 failure class — they are not reproduced.)
//
// This module is plain ESM with no React/vite dependency so the node-run
// comparison harness (tools/compare_v1_v2.mjs) can import it directly.
// resolveRef is re-implemented here (same grammar as the reading view's)
// because octoechos-v2-reading.jsx is JSX and cannot be imported from node.
// ─────────────────────────────────────────────────────────────────────────────

import shared from './shared.js';
import theotokia from './theotokia.js';

// ── tone cache (V1 pattern) ──────────────────────────────────────────────────
const _v2Loaders = {
  1: () => import('./tone1.js'),
  2: () => import('./tone2.js'),
  3: () => import('./tone3.js'),
  4: () => import('./tone4.js'),
  5: () => import('./tone5.js'),
  6: () => import('./tone6.js'),
  7: () => import('./tone7.js'),
  8: () => import('./tone8.js'),
};
const _v2Cache = {};

export async function loadV2Tone(tone) {
  if (_v2Cache[tone]) return _v2Cache[tone];
  const loader = _v2Loaders[tone];
  if (!loader) return null;
  const mod = await loader();
  _v2Cache[tone] = mod.default;
  return _v2Cache[tone];
}
export const v2ToneReady = (tone) => !!_v2Cache[tone];

// ── ref resolution (reading-view grammar, spec §2.8) ─────────────────────────
function rootsFor(tone) {
  const r = { shared, theotokia };
  if (tone && _v2Cache[tone]) r[`tone${tone}`] = _v2Cache[tone];
  return r;
}
export function resolveV2Ref(refStr, tone) {
  const roots = rootsFor(tone);
  const segs = refStr.split('.');
  let cur = roots[segs[0]];
  for (let i = 1; i < segs.length && cur != null; i++) {
    const m = segs[i].match(/^([^[]+)((\[\d+\])*)$/);
    if (!m) return undefined;
    cur = cur[m[1]];
    if (m[2]) for (const idx of m[2].match(/\d+/g)) cur = cur?.[Number(idx)];
  }
  return cur;
}
const isRef = (v) => v && typeof v === 'object' && typeof v.ref === 'string';

// ── node normalization ───────────────────────────────────────────────────────
// A V2 TEXT_NODE ({text, tier, src, …}) or plain string → assembler node
// { text, path, src?, tier?, label?, type?, spec_mel? }. Text bytes pass
// through VERBATIM (canonical bytes only — amendment F).
function node(v, path, tone) {
  if (v == null) return null;
  if (isRef(v)) {
    const target = resolveV2Ref(v.ref, tone);
    return node(target, v.ref, tone); // path of the ref TARGET (its anchor)
  }
  if (typeof v === 'string') return { text: v, path };
  if (typeof v.text === 'string' || typeof v.text === 'object') {
    // prokeimenon-style composites keep their own shape; handled by callers.
    const out = { text: v.text, path };
    for (const k of ['src', 'tier', 'label', 'type', 'spec_mel', 'sourceLabel']) {
      if (v[k] !== undefined) out[k] = v[k];
    }
    return out;
  }
  return null;
}
const nodeList = (arr, basePath, tone) =>
  Array.isArray(arr) ? arr.map((v, i) => node(v, `${basePath}[${i}]`, tone)) : null;

// ── day-key mapping ──────────────────────────────────────────────────────────
// V1 getVespersDayKey(dow): ['sun_eve','mon','tue','wed','thu','fri','sat'].
// V2 vespers_weekday is keyed by evening served sun..fri; Saturday evening is
// great_vespers. dow here = day of week of the evening being served.
const V2_EVE_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', null]; // dow 6 → GV
export const v2EveKey = (dow) => V2_EVE_KEYS[dow] ?? null;

// ── §4.1 canonical tone-level fields ────────────────────────────────────────
const topField = (tone, field) => {
  const d = _v2Cache[tone];
  if (!d || !d[field]) return null;
  const n = node(d[field], `tone${tone}.${field}`, tone);
  return n ? { tone, ...n } : null;
};
export const getV2Troparion = (tone) => topField(tone, 'troparion');            // ← RESURRECTIONAL_TROPARIA
export const getV2Kontakion = (tone) => topField(tone, 'kontakion');            // ← SUNDAY_KONTAKIA
export const getV2DismissalTheotokion = (tone) =>
  topField(tone, 'dismissal_theotokion');                                       // ← RESURRECTIONAL_DISMISSAL_THEOTOKIA

// ── Sunday Matins / Liturgy ──────────────────────────────────────────────────
export function getV2Hypakoe(tone) {                                            // ← HYPAKOE (tone keys; "pascha" → Pentecostarion at M4)
  const d = _v2Cache[tone];
  if (!d?.matins?.hypakoe) return null;
  return { tone, ...node(d.matins.hypakoe, `tone${tone}.matins.hypakoe`, tone) };
}

export function getV2LiturgyProkeimenon(tone) {                                 // ← SUNDAY_PROKEIMENON (the §8 conflation fix:
  const d = _v2Cache[tone];                                                     //   Typica serves the LITURGY prokeimenon)
  const p = d?.liturgy?.prokeimenon;
  if (!p) return null;
  return {
    tone: p.tone ?? tone,
    text: p.text?.text ?? p.text,
    stichos: p.verse?.text ?? p.verse ?? null,
    path: `tone${tone}.liturgy.prokeimenon`,
    src: p.text?.src ?? null,
  };
}

export function getV2LiturgyAlleluia(tone) {                                    // ← SUNDAY_ALLELUIA
  const d = _v2Cache[tone];
  const a = d?.liturgy?.alleluia;
  if (!a?.verses?.length) return null;
  return {
    tone: a.tone ?? tone,
    verse: a.verses[0]?.text ?? null,
    stichoi: a.verses.slice(1).map((v) => v.text),
    path: `tone${tone}.liturgy.alleluia`,
    src: a.verses[0]?.src ?? null,
  };
}

// ── Saturday Great Vespers (the Sunday cycle's evening) ─────────────────────
export function getV2SundayVespers(tone) {                                      // ← getOctoechosVespers(tone,'sat')
  const d = _v2Cache[tone];
  const gv = d?.great_vespers;
  if (!gv) return null;
  const base = `tone${tone}.great_vespers`;
  return {
    lic: nodeList(gv.lic, `${base}.lic`, tone),                                 // 7 stichera
    lic_verses: nodeList(gv.lic_verses, `${base}.lic_verses`, tone),
    dogmatikon: node(gv.dogmatikon, `${base}.dogmatikon`, tone),                // ALWAYS present in V2 — the LIC_THEOTOKIA fallback dies
    dogmatikon_rubric: gv.dogmatikon_rubric ?? null,
    aposticha: nodeList(gv.aposticha, `${base}.aposticha`, tone),               // 4 stichera
    aposticha_verses: nodeList(
      isRef(gv.aposticha_verses) ? resolveV2Ref(gv.aposticha_verses.ref, tone) : gv.aposticha_verses,
      isRef(gv.aposticha_verses) ? gv.aposticha_verses.ref : `${base}.aposticha_verses`,
      tone
    ),
    aposticha_glory_rubric: gv.aposticha_glory_rubric ?? null,                  // ← V1 sat.aposticha_glory (placeholder rubric)
    aposticha_theotokion: node(gv.aposticha_theotokion, `${base}.aposticha_theotokion`, tone),
    prokeimenon: getV2DailyVespersProkeimenon(6),                               // ref → shared.saturday_vespers_prokeimenon
  };
}

// ── weekday Vespers (evening served: sun..fri) ───────────────────────────────
export function getV2WeekdayVespers(tone, eve) {                                // ← getOctoechosVespers(tone, weekday key)
  const d = _v2Cache[tone];
  const w = d?.vespers_weekday?.[eve];
  if (!w) return null;
  const base = `tone${tone}.vespers_weekday.${eve}`;
  const ap = w.aposticha || {};
  const apVerses = isRef(ap.verses) ? resolveV2Ref(ap.verses.ref, tone) : ap.verses;
  return {
    lic: nodeList(w.lic?.octoechos, `${base}.lic.octoechos`, tone),             // 3 (Fri: 6, incipit device §2.7)
    lic_verses: nodeList(w.lic?.octoechos_verses, `${base}.lic.octoechos_verses`, tone),
    menaion_rubric: w.lic?.menaion_rubric ?? null,
    menaion_fallback: nodeList(w.lic?.menaion_fallback, `${base}.lic.menaion_fallback`, tone),
    menaion_verses: nodeList(w.lic?.menaion_verses, `${base}.lic.menaion_verses`, tone),
    lic_theotokion: node(w.lic_theotokion, `${base}.lic_theotokion`, tone),     // typed closer; Fri = dogmatic_theotokion (§9.2)
    aposticha: {
      rubric: ap.rubric ?? null,
      items: nodeList(ap.items, `${base}.aposticha.items`, tone),
      verses: nodeList(apVerses, isRef(ap.verses) ? ap.verses.ref : `${base}.aposticha.verses`, tone),
    },
    aposticha_theotokion: node(w.aposticha_theotokion, `${base}.aposticha_theotokion`, tone),
    prokeimenon: (() => {
      const p = isRef(w.prokeimenon) ? resolveV2Ref(w.prokeimenon.ref, tone) : w.prokeimenon;
      if (!p) return null;
      return {
        tone: p.tone ?? null,
        text: p.text?.text ?? p.text,
        verse: p.verse?.text ?? p.verse ?? null,
        path: isRef(w.prokeimenon) ? w.prokeimenon.ref : `${base}.prokeimenon`,
        src: p.text?.src ?? null,
      };
    })(),
  };
}

// ── theotokia tables ─────────────────────────────────────────────────────────
export function getV2ApostichaTheotokion(gloryTone) {                           // ← SUNDAY_APOSTICHA_THEOTOKIA[gloryTone]
  const t = theotokia.resurrectional_theotokia?.[String(gloryTone)];            //   (§8 fix: the GV proper, keyed by tone of the Glory)
  if (!t?.aposticha_theotokion) return null;
  return {
    tone: Number(gloryTone),
    ...node(t.aposticha_theotokion, `theotokia.resurrectional_theotokia.${gloryTone}.aposticha_theotokion`, null),
  };
}

// §I dogmatikon in an ARBITRARY tone — the Fekula Ch.6 tone-of-the-Glory
// appointments (LIC Both-now at resurrectional-class weekday services chants
// the dogmaticon in the tone of the doxasticon, §III; Friday: tone of week).
export function getV2Dogmatikon(tone) {
  const t = theotokia.resurrectional_theotokia?.[String(tone)];
  if (!t?.dogmatikon) return null;
  return {
    tone: Number(tone),
    ...node(t.dogmatikon, `theotokia.resurrectional_theotokia.${tone}.dogmatikon`, null),
  };
}

// §II — "Theotokia Following Doxastica" (Common Theotokia Part 2): the
// Both-now theotokion IN THE TONE OF THE DOXASTICON, keyed (evening ×
// tone-of-Glory). The print provides evening positions for Sun/Mon/Wed/Fri
// only — Tuesday/Thursday evenings take the STAVROTHEOTOKION from the
// Menaion instead (Fekula Ch.6 §II), so those keys intentionally have no
// table entry.
const DOX_SLOT_BY_EVE = {
  sun: 'sun_eve_aposticha', mon: 'mon_eve_aposticha',
  wed: 'wed_eve_aposticha', fri: 'fri_eve_aposticha',
};
export function getV2DoxasticonTheotokion(gloryTone, eve) {
  const slot = DOX_SLOT_BY_EVE[eve];
  const t = slot ? theotokia.doxasticon_theotokia?.[String(gloryTone)]?.[slot] : null;
  if (!t) return null;
  return {
    tone: Number(gloryTone),
    slot,
    ...node(t, `theotokia.doxasticon_theotokia.${gloryTone}.${slot}`, null),
  };
}

// ── shared day-keyed tables ──────────────────────────────────────────────────
const DVP_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
export function getV2DailyVespersProkeimenon(dow) {                             // ← WEEKLY_VESPERS_PROKEIMENON[dow]
  if (dow === 6) {
    const p = shared.saturday_vespers_prokeimenon;
    if (!p) return null;
    return {
      tone: p.tone, text: p.text?.text ?? p.text,
      verses: (p.verses || []).map((v) => v.text ?? v),
      path: 'shared.saturday_vespers_prokeimenon', src: p.text?.src ?? null, great: true,
    };
  }
  const key = DVP_KEYS[dow];
  const p = key ? shared.daily_vespers_prokeimena?.[key] : null;
  if (!p) return null;
  return {
    tone: p.tone, text: p.text?.text ?? p.text,
    verses: p.verse ? [p.verse.text ?? p.verse] : [],
    path: `shared.daily_vespers_prokeimena.${key}`, src: p.text?.src ?? null,
  };
}

export function getV2DailyLiturgyPropers(dayKey) {                              // ← TYPICA_WEEKDAY_PROKEIMENON (+ alleluia/communion additively)
  const p = shared.daily_liturgy_propers?.[dayKey];
  if (!p) return null;
  const base = `shared.daily_liturgy_propers.${dayKey}`;
  const unwrapProk = (pk, path) => pk && {
    tone: pk.tone ?? null,
    text: pk.text?.text ?? pk.text,
    stichos: pk.verse?.text ?? pk.verse ?? null,
    label: pk.label ?? null,
    path, src: pk.text?.src ?? null,
  };
  return {
    prokeimenon: unwrapProk(p.prokeimenon, `${base}.prokeimenon`),
    prokeimenon_departed: unwrapProk(p.prokeimenon_departed, `${base}.prokeimenon_departed`),
    alleluia: p.alleluia ?? null,
    communion: p.communion ?? null,
    path: base,
  };
}

// Raw roots for consumers that need direct table access (Explainer UIs read
// canonical tables through here — amendment F).
export const v2Shared = shared;
export const v2Theotokia = theotokia;
