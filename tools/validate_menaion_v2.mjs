#!/usr/bin/env node
// tools/validate_menaion_v2.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Menaion V2 drift gate — menaion_v2_spec.md §7.4.
//
// Keys off schema_menaion_v2.js and nothing else. Three outcome classes,
// deliberately distinguished (§7.4, §2.12):
//
//   ERROR    hard-fail. Exit 1. The data violates the contract.
//   FINDING  surfaced for Bill's judgment, never auto-resolved. Exit 0 unless
//            --strict. Covers every case the spec says "flag, do not pick":
//            artifact hits, multi-site divergence, prokeimenon equality.
//   WORKLIST outstanding verification, not a defect. Chiefly heading_scan
//            absences (§7.3a) — a completed month should show zero.
//
// Usage:  node tools/validate_menaion_v2.mjs [--strict] [--month 08] [--json]
// ─────────────────────────────────────────────────────────────────────────────

import * as S from '../src/data/menaion_v2/schema_menaion_v2.js';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(HERE, '..', 'src', 'data', 'menaion_v2');

const argv = process.argv.slice(2);
const STRICT = argv.includes('--strict');
const JSON_OUT = argv.includes('--json');
const ONLY_MONTH = (() => { const i = argv.indexOf('--month'); return i >= 0 ? argv[i + 1] : null; })();

const errors = [], findings = [], worklist = [];
const err = (path, msg) => errors.push({ path, msg });
const find = (path, msg) => findings.push({ path, msg });
const work = (path, msg) => worklist.push({ path, msg });

// ── manifest index ───────────────────────────────────────────────────────────
const MANIFEST = new Map(S.FIELD_MANIFEST.map(r => [r.path, r]));
const genericPath = p => p.replace(/^(\d{2}-\d{2})\.c\d+\./, '<c>.').replace(/\[\d+\]/g, '');
const manifestFor = p => MANIFEST.get(genericPath(p)) ?? null;

// ── node classification ──────────────────────────────────────────────────────
const isPlainObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const isAbsence = v => isPlainObj(v) && v.absent === true;
const isTextNode = v => isPlainObj(v) && typeof v.text === 'string';
const isReading = v => isPlainObj(v) && typeof v.heading === 'string';

// ─────────────────────────────────────────────────────────────────────────────
// A. Text node — provenance, tier, pointing, artifacts, register
// ─────────────────────────────────────────────────────────────────────────────
function checkTextNode(node, path, ctx) {
  // amendment D: src{file,locus} + tier mandatory. Absence of tier is a
  // hard-fail, NOT "unpointed".
  for (const k of S.TEXT_NODE.required) {
    if (node[k] === undefined) err(path, `missing required '${k}' on text node`);
  }
  if (node.tier !== undefined && !S.TIERS.includes(node.tier))
    err(path, `tier ${JSON.stringify(node.tier)} not in TIERS`);

  if (node.src === undefined) { /* already reported */ }
  else if (!isPlainObj(node.src) || !node.src.file || !node.src.locus)
    err(path, `src must be {file, locus}`);
  else if (!S.SOURCE_FILES.includes(node.src.file) &&
           !S.GENERAL_MENAION_FILES.includes(node.src.file))
    err(path, `src.file '${node.src.file}' not in SOURCE_FILES`);

  const unknown = Object.keys(node).filter(
    k => !S.TEXT_NODE.required.includes(k) && !S.TEXT_NODE.optional.includes(k));
  if (unknown.length) err(path, `unknown key(s) on text node: ${unknown.join(', ')}`);

  const t = node.text ?? '';
  const dialect = node.dialect ?? 'sergius';
  if (!S.DIALECTS.includes(dialect)) err(path, `dialect '${dialect}' not in DIALECTS`);

  // ── pointing by tier × dialect (§2.5) ──
  const hasStar = /\*/.test(t), dbl = (t.match(/\*\*/g) || []).length;
  const hasPipe = /\|/.test(t), hasSlash = /\/\//.test(t), hasBracket = /\[/.test(t);
  if (node.tier === 1 && (hasStar || hasPipe || hasSlash || hasBracket))
    err(path, `Tier 1 must carry no markers`);
  if (node.tier === 2 && dialect === 'sergius') {
    if (!hasStar) err(path, `Tier 2 (sergius) must contain '*'`);
    // AT MOST one '**', not exactly one. encoding_rule_v2.md §3.2: mark the
    // penultimate line ONLY if the source marks it — "if it does not, do not add
    // one … the expected, correct signal, not a bug". The Octoechos happens to
    // point every sticheron; the General Menaion prints many irmoi and verses
    // with '*' and no '**'. Copying the Octoechos constraint made 11 correct
    // transcriptions look like errors.
    if (dbl > 1) err(path, `Tier 2 (sergius) may contain at most one '**' (found ${dbl})`);
    if (hasPipe || hasSlash) err(path, `Tier 2 (sergius) must not contain '|' or '//'`);
    if (hasBracket) err(path, `no '[' permitted in a St. Sergius-dialect field`);
  }
  if (node.tier === 3) {
    if (dialect !== 'oca') err(path, `Tier 3 requires dialect 'oca'`);
    if (node.director !== true) err(path, `Tier 3 requires director: true`);
    const sl = (t.match(/\/\//g) || []).length;
    if (sl !== 1) err(path, `Tier 3 must contain exactly one '//' (found ${sl})`);
  }

  // ── device checks (§2.8) ──
  if (node.repeat !== undefined && node.repeat !== 2)
    err(path, `repeat may only be 2 (the "(Twice)" device); found ${JSON.stringify(node.repeat)}`);
  if (node.incipit_ref !== undefined) ctx.incipits.push({ path, node });

  // ── artifact tripwires (§1.4, §2.13) ──
  const nonLatin = [...t].filter(c => /\p{L}/u.test(c) && !/[a-z]/i.test(c));
  if (nonLatin.length)
    find(path, `non-Latin letter codepoint(s): ${[...new Set(nonLatin)].map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase()).join(' ')} — surface to Bill before resolving`);
  if (S.DIGIT_ZERO_AS_O.test(t))
    find(path, `digit-zero-as-O pattern ("0 Lord") — surface to Bill`);
  if (S.DOUBLED_RUN_TRIPWIRE.test(t))
    find(path, `doubled-glyph run survived extraction — re-extract with dedupe_chars() (§1.4)`);

  // ── translation-register lint (§7.4) ──
  // Skipped for plural-address texts: "you/your" is the correct archaic plural
  // (thou singular / you plural), and flagging it buries the real hits.
  if (!S.REGISTER_PLURAL_ADDRESS.test(t)) {
    if (S.REGISTER_MODERN.test(t))
      find(path, `modern register: capitalized You/Your`);
    else if (S.REGISTER_MODERN_LC.test(t) && !S.REGISTER_ARCHAIC.test(t))
      find(path, `modern register: lowercase you/your with no thee/thou/thy/ye`);
  }

  // ── placeholders (§7.4) ──
  for (const re of S.PLACEHOLDER_PATTERNS)
    if (re.test(t)) { err(path, `placeholder text matches ${re}`); break; }

  ctx.textNodes.push({ path, node });
}

// ─────────────────────────────────────────────────────────────────────────────
// B. Absence node (§2.10, §7.3, §7.3a)
// ─────────────────────────────────────────────────────────────────────────────
function checkAbsence(node, path) {
  for (const k of S.ABSENCE_NODE.required)
    if (node[k] === undefined) err(path, `absence node missing required '${k}'`);
  if (node.text !== undefined)
    err(path, `absence node must not carry 'text' (mutually exclusive)`);
  if (node.reason && !S.ABSENCE_REASONS.includes(node.reason))
    err(path, `absence reason '${node.reason}' not in ABSENCE_REASONS`);
  if (node.basis && !S.ABSENCE_BASIS.includes(node.basis))
    err(path, `absence basis '${node.basis}' not in ABSENCE_BASIS`);
  if (S.ABSENCE_REASONS_REQUIRING_SRC.includes(node.reason) && !node.src)
    err(path, `reason '${node.reason}' requires src`);
  if (S.ABSENCE_REASONS_REQUIRING_BOOK.includes(node.reason) && !node.book)
    err(path, `reason '${node.reason}' must name the governing book`);
  // heading_scan is provisional, not a defect — it is outstanding verification.
  if (node.basis === 'heading_scan')
    work(path, `absence declared on a heading scan only — needs close reading (§7.3a)`);
}

// ─────────────────────────────────────────────────────────────────────────────
// C. Canon contract (§7.6)
// ─────────────────────────────────────────────────────────────────────────────
function checkCanon(canon, path, ctx) {
  const unknown = Object.keys(canon).filter(k => !S.CANON.known.includes(k));
  if (unknown.length) err(path, `unknown canon key(s): ${unknown.join(', ')}`);
  if (!isPlainObj(canon.odes)) { err(path, `canon.odes must be an object`); return; }

  for (const [k, ode] of Object.entries(canon.odes)) {
    const n = Number(k), op = `${path}.odes.${k}`;
    if (!S.CANON_ODES.includes(n)) { err(op, `ode key ${k} not in CANON_ODES`); continue; }
    if (!isPlainObj(ode)) { err(op, `ode must be an object`); continue; }
    if (ode.irmos === undefined) err(op, `ode missing irmos`);
    // WHICH labels appear and HOW MANY items is a per-ode SOURCE FACT. The gate
    // checks validity and non-emptiness, never a census (§7.5).
    if (!Array.isArray(ode.items) || ode.items.length === 0)
      err(op, `ode.items must be a non-empty array`);
    else ode.items.forEach((it, i) => {
      if (isPlainObj(it) && it.label !== undefined) {
        const labels = Array.isArray(it.label) ? it.label : [it.label];
        const bad = labels.filter(l => !S.LABELS.includes(l));
        if (bad.length) err(`${op}.items[${i}]`, `label(s) not in LABELS: ${bad.join(', ')}`);
      }
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// D. Recursive walk
// ─────────────────────────────────────────────────────────────────────────────
function walk(value, path, ctx, kindHint) {
  if (value === undefined || value === null) return;

  if (isAbsence(value)) { checkAbsence(value, path); return; }

  // Readings are matched BEFORE text nodes, deliberately. A reading that
  // wrongly carries a body satisfies isTextNode(), and matching it as one would
  // bury the R-4 violation under spurious tier/src errors.
  if (isReading(value)) {
    for (const k of S.READING_NODE.required)
      if (value[k] === undefined) err(path, `reading missing required '${k}' (§2.11)`);
    if (value.text !== undefined)
      err(path, `reading must NOT carry 'text' — the scripture tool owns reading bodies (R-4)`);
    // A reading with NEITHER a printed citation NOR a derived one is a silent
    // gap: the heading alone cannot identify the passage, and three headings
    // reading "A READING FROM THE WISDOM OF SOLOMON" are indistinguishable.
    // Absence must be declared (§2.10), not left implicit.
    if (value.citation === undefined && !value.derived)
      err(path, `reading identifies no passage — needs a printed citation, a verified derived one, or an explicit absence node (§2.10/§2.11)`);
    if (value.citation && value.citation_basis && !S.CITATION_BASIS.includes(value.citation_basis))
      err(path, `citation_basis '${value.citation_basis}' not in CITATION_BASIS`);
    if (value.citation && !value.citation_verbatim && !value.citation_basis)
      err(path, `a citation the source did not print must declare its citation_basis (derived | identified)`);
    if (value.citation_basis === 'identified')
      work(path, `citation IDENTIFIED by a human — corpus derivation refused (translation divergence). Not verified; confirm against the printed page.`);
    if (value.derived && value.derived.reconstruction < S.DERIVED_CITATION_FLOOR)
      err(path, `derived citation below the ${S.DERIVED_CITATION_FLOOR} reconstruction floor — store no citation rather than a guess`);
    if (isPlainObj(value.citation))
      for (const k of S.READING_NODE.citation.required)
        if (value.citation[k] === undefined) err(`${path}.citation`, `missing '${k}'`);
    return;
  }

  if (isTextNode(value)) {
    checkTextNode(value, path, ctx);
    if (kindHint === 'closer') {
      if (value.type === undefined) err(path, `closer must carry 'type' (§5.8)`);
      else if (!S.CLOSER_TYPES.includes(value.type)) err(path, `closer type '${value.type}' not in CLOSER_TYPES`);
      if (value.sourceLabel === undefined) find(path, `closer has no sourceLabel — the source's own label should be stored verbatim (§5.8)`);
    }
    return;
  }
  if (Array.isArray(value)) { value.forEach((v, i) => walk(v, `${path}[${i}]`, ctx, kindHint)); return; }
  if (!isPlainObj(value)) return;

  for (const [k, v] of Object.entries(value)) {
    if (k === 'order') continue;
    walk(v, `${path}.${k}`, ctx, manifestFor(`${path}.${k}`)?.kind);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// E. Service — print order (§5.1)
// ─────────────────────────────────────────────────────────────────────────────
function checkServiceOrder(svc, path, entry) {
  if (!S.SERVICE_REQUIRES_ORDER) return;
  const keys = Object.keys(svc).filter(k => k !== 'order');
  if (!Array.isArray(svc.order)) {
    err(path, `service must carry 'order' — the printed sequence of its keys (§5.1)`);
    return;
  }
  const inOrder = new Set(svc.order), present = new Set(keys);
  const missing = keys.filter(k => !inOrder.has(k));
  // `order` may name an ENTRY-level key: R-1 stores a multi-site hymn once and
  // the service recycles it at each position the book prints it (§2.4).
  const extra = svc.order.filter(k => !present.has(k) && !(entry && k in entry));
  if (missing.length) err(path, `'order' omits present key(s): ${missing.join(', ')}`);
  if (extra.length) err(path, `'order' names a key present neither on the service nor the entry: ${extra.join(', ')}`);
  // Duplicates are LEGITIMATE and were wrongly a hard-fail: Monastic's Matins
  // prints the troparion twice (God-is-the-Lord, and after Our Father), so the
  // same key appears twice in printed order. Flag only a key repeated ADJACENTLY,
  // which is a transcription slip rather than a reprint.
  for (let i = 1; i < svc.order.length; i++)
    if (svc.order[i] === svc.order[i - 1]) err(path, `'order' repeats '${svc.order[i]}' adjacently`);
}

// ─────────────────────────────────────────────────────────────────────────────
// F. Entry and date
// ─────────────────────────────────────────────────────────────────────────────
function checkEntry(entry, path, claimed, ctx) {
  const unknown = Object.keys(entry).filter(k => !S.ENTRY_TOP.known.includes(k));
  if (unknown.length) err(path, `unknown entry key(s): ${unknown.join(', ')} — add to the schema deliberately (§7.4)`);
  for (const k of S.ENTRY_TOP.required)
    if (entry[k] === undefined) err(path, `entry missing required '${k}'`);

  if (entry.kind && !S.COMMEMORATION_KINDS.includes(entry.kind))
    err(path, `kind '${entry.kind}' not in COMMEMORATION_KINDS`);
  // The gate checks that rank is in the vocabulary. It does NOT adjudicate rank
  // — deriving rank from section presence and then checking presence against
  // rank is circular (§9).
  if (entry.rank && !S.RANKS.includes(entry.rank))
    err(path, `rank '${entry.rank}' not in RANKS`);
  if (entry.source_file && !S.SOURCE_FILES.includes(entry.source_file))
    err(path, `source_file '${entry.source_file}' not in SOURCE_FILES`);

  for (const svc of S.SERVICES) {
    if (entry[svc] === undefined) continue;
    // Absence nodes are checked by walk() below — do not double-report.
    if (isAbsence(entry[svc])) continue;
    if (!claimed.has(svc)) find(`${path}.${svc}`, `service present in data but not claimed in _encoded`);
    checkServiceOrder(entry[svc], `${path}.${svc}`, entry);
    if (svc === 'compline' && entry[svc].canon) checkCanon(entry[svc].canon, `${path}.${svc}.canon`, ctx);
    if (svc === 'matins' && Array.isArray(entry[svc].canons))
      entry[svc].canons.forEach((c, i) => checkCanon(c, `${path}.${svc}.canons[${i}]`, ctx));
  }
  walk(entry, path, ctx, null);

  // §7.5 — surfaced FINDING, not a hard-fail. Evidence is one V1 entry.
  const r = S.SECTION_RULES.matins?.prokeimenonDiffersFrom;
  if (r && entry.matins?.prokeimenon && entry.liturgy?.prokeimenon) {
    const a = JSON.stringify(entry.matins.prokeimenon.text ?? entry.matins.prokeimenon);
    const b = JSON.stringify(entry.liturgy.prokeimenon.text ?? entry.liturgy.prokeimenon);
    if (a === b) find(`${path}`, `matins and liturgy prokeimena are identical — verify against the source`);
  }
}

function checkDate(dateKey, dateObj, ctx) {
  const path = dateKey;
  if (!S.MONTH_TOP.dateKey.test(dateKey)) { err(path, `date key does not match MM-DD`); return; }
  const unknown = Object.keys(dateObj).filter(k => !S.MONTH_TOP.date.known.includes(k));
  if (unknown.length) err(path, `unknown date key(s): ${unknown.join(', ')}`);
  for (const k of S.MONTH_TOP.date.required)
    if (dateObj[k] === undefined) err(path, `date missing required '${k}'`);

  if (!Array.isArray(dateObj.commemorations)) {
    err(path, `'commemorations' must ALWAYS be an array, even for one (§4)`);
    return;
  }
  const claims = new Map();
  for (const c of dateObj._encoded ?? []) {
    const m = S.CLAIM_RE.exec(c);
    if (!m) { err(path, `malformed claim '${c}' — expected cN.<service>`); continue; }
    const idx = Number(m[1]);
    if (idx >= dateObj.commemorations.length)
      err(path, `claim '${c}' references commemoration c${idx}, but only ${dateObj.commemorations.length} exist`);
    if (!claims.has(idx)) claims.set(idx, new Set());
    claims.get(idx).add(m[2]);
  }
  dateObj.commemorations.forEach((e, i) =>
    checkEntry(e, `${dateKey}.c${i}`, claims.get(i) ?? new Set(), ctx));
}

// ─────────────────────────────────────────────────────────────────────────────
// G. Cross-cutting: incipits, recurrence, sic, oca
// ─────────────────────────────────────────────────────────────────────────────
function resolvePath(roots, p) {
  const q = S.QUALIFIED_PATH_RE.exec(p);
  const book = q ? q[1] : 'menaion';
  const rest = q ? q[2] : p;
  const root = roots[book];
  if (!root) return { unresolved: true, book };
  let cur = root;
  for (const seg of rest.split('.')) {
    const m = /^(.+?)\[(\d+)\]$/.exec(seg);
    const key = m ? m[1] : seg;
    if (cur == null || typeof cur !== 'object') return { unresolved: true };
    cur = cur[key];
    if (m) cur = Array.isArray(cur) ? cur[Number(m[2])] : undefined;
  }
  return cur === undefined ? { unresolved: true } : { value: cur };
}

function checkIncipits(ctx, roots) {
  for (const { path, node } of ctx.incipits) {
    const r = resolvePath(roots, node.incipit_ref);
    if (r.unresolved) { err(path, `incipit_ref does not resolve: ${node.incipit_ref}`); continue; }
    const target = isTextNode(r.value) ? r.value.text : null;
    if (target == null) { err(path, `incipit_ref target is not a text node`); continue; }
    const incipit = node.text.replace(/\s*\.\.\.\s*,?\s*$/, '').trim();
    const norm = s => s.replace(/[*]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    if (!norm(target).startsWith(norm(incipit)))
      err(path, `incipit does not prefix-match its referent (never silently resolve an incipit — §2.8)`);
  }
}

function checkRecurrences(reg, roots) {
  for (const [i, e] of (reg ?? []).entries()) {
    const at = `known_recurrences[${i}]`;
    if (!S.RECURRENCE_RELATIONS.includes(e.relation)) { err(at, `relation '${e.relation}' invalid`); continue; }
    const A = resolvePath(roots, e.a), B = resolvePath(roots, e.b);
    if (A.unresolved || B.unresolved) {
      // A pair into a book not loaded this run is not an error.
      if (A.book && A.book !== 'menaion' || B.book && B.book !== 'menaion') continue;
      err(at, `pair does not resolve: ${A.unresolved ? e.a : e.b}`); continue;
    }
    const ta = isTextNode(A.value) ? A.value.text : null;
    const tb = isTextNode(B.value) ? B.value.text : null;
    if (ta == null || tb == null) { err(at, `pair does not point at text nodes`); continue; }
    if (e.relation === 'identical' && ta !== tb) err(at, `declared identical but texts differ`);
    if (e.relation === 'variant' && ta === tb) err(at, `declared variant but texts byte-match`);
    if (e.relation === 'family')
      work(at, `'family' asserts nothing — upgrade to identical|variant in the commit that encodes either position (§2.3a). Steady state is zero.`);
  }
}

function checkSics(reg, roots) {
  for (const [i, e] of (reg ?? []).entries()) {
    const at = `sic_register[${i}]`;
    const r = resolvePath(roots, e.path);
    if (r.unresolved) { err(at, `sic path does not resolve: ${e.path}`); continue; }
    const t = isTextNode(r.value) ? r.value.text
            : (isPlainObj(r.value) && typeof r.value.heading === 'string') ? r.value.heading
            : null;
    if (t == null) { err(at, `sic path is neither a text node nor a reading heading`); continue; }
    if (!t.includes(e.verbatim))
      err(at, `recorded sic no longer present — silent "correction" of a recorded sic is a hard-fail (§7.4): ${JSON.stringify(e.verbatim)}`);
  }
}

function checkOca(reg, roots) {
  for (const [i, e] of (reg ?? []).entries()) {
    const at = `oca_register[${i}]`;
    if (!e.resolution) { err(at, `row has no 'resolution'`); continue; }
    const r = resolvePath(roots, e.path ?? '');
    if (r.unresolved) { work(at, `row not yet encoded at ${e.path ?? '(no path)'}`); continue; }
    const t = isTextNode(r.value) ? r.value.text : null;
    const expect = e.resolution === 'oca' ? e.oca_reading : e.sergius_reading;
    if (expect != null && t !== expect)
      err(at, `stored text does not match declared resolution '${e.resolution}'`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// H. Run
// ─────────────────────────────────────────────────────────────────────────────
const MONTH_FILES = {
  '01': 'january.js', '02': 'february.js', '03': 'march.js', '04': 'april.js',
  '05': 'may.js', '06': 'june.js', '07': 'july.js', '08': 'august.js',
  '09': 'september.js', '10': 'october.js', '11': 'november.js', '12': 'december.js',
};

async function main() {
  const ctx = { textNodes: [], incipits: [] };
  const roots = { menaion: {} };

  let present = [];
  try {
    const files = await readdir(DATA_DIR);
    present = Object.entries(MONTH_FILES).filter(([, f]) => files.includes(f));
  } catch {
    console.error(`no data directory at ${DATA_DIR}`);
    process.exit(2);
  }
  if (ONLY_MONTH) present = present.filter(([mm]) => mm === ONLY_MONTH);

  // §3.1 — the loader map and the month files on disk must agree.
  try {
    const { MONTH_LOADERS } = await import(join(DATA_DIR, 'index.js'));
    const declared = new Set(Object.keys(MONTH_LOADERS));
    const onDisk = new Set(present.map(([mm]) => mm));
    for (const mm of declared) if (!onDisk.has(mm) && !ONLY_MONTH) err('index.js', `MONTH_LOADERS declares '${mm}' with no month file`);
    for (const mm of onDisk) if (!declared.has(mm)) err('index.js', `month file for '${mm}' is not in MONTH_LOADERS`);
  } catch { /* index.js not yet written — Phase 1 in progress */ }

  for (const [mm, file] of present) {
    const mod = (await import(join(DATA_DIR, file))).default;
    roots.menaion[mm] = mod;
    const keys = Object.keys(mod);
    const sorted = [...keys].sort();
    if (keys.join() !== sorted.join()) err(file, `date keys are not sorted (V1 stored them in encode-session order)`);
    for (const k of keys) {
      if (!k.startsWith(mm + '-')) err(`${file}:${k}`, `date key does not belong to month ${mm}`);
      checkDate(k, mod[k], ctx);
    }
  }

  // ── cross-date tables (§6): general.js / shared.js are DATA and are checked
  // like any other data. They are also mounted into the resolution roots so
  // register paths of the form `general.<type>.…` resolve.
  const flat = {};
  for (const mm of Object.keys(roots.menaion)) Object.assign(flat, remapDate(roots.menaion[mm]));
  for (const [name, key] of [['general.js', 'general'], ['shared.js', 'shared']]) {
    try {
      const mod = (await import(join(DATA_DIR, name))).default;
      if (!mod || typeof mod !== 'object') continue;
      flat[key] = mod;
      for (const [id, entry] of Object.entries(mod)) {
        for (const svc of S.SERVICES) {
          if (!entry?.[svc] || isAbsence(entry[svc])) continue;
          checkServiceOrder(entry[svc], `${key}.${id}.${svc}`, entry);
          for (const c of (Array.isArray(entry[svc].canons) ? entry[svc].canons : []))
            checkCanon(c, `${key}.${id}.${svc}.canons`, ctx);
        }
        walk(entry, `${key}.${id}`, ctx, null);
      }
    } catch { /* table not yet written */ }
  }
  const resolveRoots = { menaion: flat };

  checkIncipits(ctx, resolveRoots);
  for (const [name, fn] of [['known_recurrences.js', checkRecurrences],
                            ['sic_register.js', checkSics],
                            ['oca_register.js', checkOca]]) {
    try {
      const mod = (await import(join(DATA_DIR, name))).default;
      fn(mod, resolveRoots);
    } catch { /* register not yet written */ }
  }

  report(ctx);
}

// `08-15.c0.great_vespers` → nested lookup shape
function remapDate(monthObj) {
  const out = {};
  if (!isPlainObj(monthObj)) return out;
  for (const [dk, d] of Object.entries(monthObj)) {
    // Malformed data is REPORTED by the checks above, never crashed on here.
    // A gate that dies on bad input cannot report bad input.
    const node = {};
    const cs = isPlainObj(d) && Array.isArray(d.commemorations) ? d.commemorations : [];
    cs.forEach((e, i) => { node[`c${i}`] = e; });
    out[dk] = node;
  }
  return out;
}

function report(ctx) {
  if (JSON_OUT) {
    console.log(JSON.stringify({ errors, findings, worklist, textNodes: ctx.textNodes.length }, null, 2));
  } else {
    const show = (title, arr) => {
      if (!arr.length) return;
      console.log(`\n${title} (${arr.length})`);
      for (const { path, msg } of arr) console.log(`  ${path}\n      ${msg}`);
    };
    show('ERRORS — contract violations', errors);
    show('FINDINGS — for Bill, never auto-resolved', findings);
    show('WORKLIST — outstanding verification, not defects', worklist);
    console.log(`\n${ctx.textNodes.length} text nodes checked · ` +
      `${errors.length} error(s) · ${findings.length} finding(s) · ${worklist.length} worklist item(s)`);
    if (!errors.length && !findings.length && !worklist.length) console.log('PASS — clean');
  }
  const fail = errors.length > 0 || (STRICT && (findings.length > 0 || worklist.length > 0));
  process.exit(fail ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(2); });
