# Octoechos V2 Wire-In Spec — Phase 5 Cutover

**Status:** RULED (Bill, July 11 2026) — M2 scope approved; M3 prep proceeds with
V1 live as default; M4 cutover fires only on Bill's explicit go, after the
comparison report is clean and the side-by-side review (the human gate) closes.
**Relation to standing specs:** executes `octoechos_v2_spec.md` §1 "Phase 5
cutover" and folds in `octoechos_reading_view_spec.md` §7 Phase B.2
(assembled-service deep links) — the two are the same plumbing: an assembler
that knows each text's V2 path has its reading-view anchor for free.

## 0. Rulings captured this session (Bill, July 11 2026)

1. **Director-pointed materials RETIRE at cutover.** The V1 per-tone
   `lic_opening` (OCA director-pointed Kekragarion) is not migrated anywhere.
   It is OCA-tradition material, not St. Sergius chapter data, and cannot
   enter the V2 tone files without breaking encoding provenance. A later V2
   build (Phase D) will provide OCA override modules storing OCA material
   *alongside* the St. Sergius encoding with assembler precedence; the
   re-integration of the director-pointed works will be **re-imagined** under
   that architecture, not preserved as-is now. Until then the LIC opening
   renders from the invariable Horologion frame text (see §3 site 4).
2. **Comparison format:** script report (`tools/compare_v1_v2.mjs`,
   classified: identical / expected correction / unexplained variant) is the
   cutover evidence; the in-app v1/v2 source switch covers visual
   spot-checking. No dedicated diff UI unless later requested.
3. **Milestones:** M2 scope doc → M3 adapter + comparison + switch (V1
   default) → M4 cutover on explicit go.

## 1. Inventory summary

The assembler (`hours-tool.jsx`) consumes V1 Octoechos at **18 read-sites**
across three surfaces: the static `index.js` tables (eager import, lines
4–8), the dynamic per-tone cache (`_octoechosLoaders` / `loadOctoechosTone` /
`_octoechosCache`, lines 954–971, preloaded on date change ~13463), and two
local shared-material tables that duplicate Octoechos/Horologion data
(`WEEKLY_VESPERS_PROKEIMENON` ~2827, `TYPICA_WEEKDAY_PROKEIMENON` ~5408).
Two further local tables are UI explainers only (`WEEKLY_PROK_TABLE` ~11493,
`TYPICA_PROK_TABLE_DATA` ~11673) — display copies that must be re-pointed at
canonical data when the amendment-F legacy allowlist empties.

Only two runtime consumers of V1 exist: the assembler and the dev browser
(`octoechos-browser.jsx`, route `/octoechos`). `octoechos-data.js` (131 KB)
is imported by nothing — the pre-migration monolith; safe deletion
independent of cutover. The comment block at hours-tool.jsx ~2846–2866
("Inlined from octoechos-data.js — all 8 tones, 477 records") is stale —
that data already migrated to the V1 tone files; only the three cache
accessors under it are live.

Dead imports: `KATAVASIAE` and `RESURRECTION_GOSPEL_STICHERA` are `{}` stubs
in V1 `index.js`, imported but never referenced. Both are V2
`SHARED_EXCLUSIONS` (Katavasiae; Exapostilaria/Eothina future Gospel-keyed
table). They simply drop from the import list at cutover — no data loss, and
the Eothina 11-set remains future work exactly as before.

Pointing: the assembler already imports and uses `renderPointed`
(point-score-controls). V2's Tier-2 `* / **` marked bytes flow through
existing rendering; V1's unpointed texts get a pointing upgrade at cutover.

## 2. Adapter architecture (M3a)

`src/data/octoechos_v2/adapter.js`. Principles:

- **Dynamic loading preserved** (the architectural principle — nothing
  tone-keyed statically imported). The adapter owns its own
  `_v2Cache` mirroring the V1 pattern: `loadV2Tone(tone)` dynamic-imports
  `tone{N}.js`; `shared.js` and `theotokia.js` load once on first use
  (tone-independent — the same eager-vs-lazy split V1 drew between
  `index.js` and `toneN.js`).
- **Ref resolution**: reuses the reading view's `resolveRef(refStr, roots)`
  grammar with `roots = { shared, theotokia, tone{N}: data }`.
- **Every accessor returns provenance**: `{ …slot shape…, path, src }`
  where `path` is the full anchor id (`tone2.great_vespers.dogmatikon`) and
  `src` the `{file, locus}` of the served node. `path` feeds the B.2 deep
  link (`/octoechos-v2#<path>`); `src` feeds the element source annotation.
- **Shape translation at the adapter boundary, never in data**: the adapter
  emits the shapes the assembler's slots expect today (see §3 map), so the
  assembler diff at M3c is a source swap, not a rewrite. Where V2 is richer
  (labeled items, typed closers, per-evening fields) the adapter surfaces
  the richness additively (extra fields), never lossily.
- **No cross-cycle fallbacks in the adapter.** V1's fallback chains existed
  because V1 data had holes (the §8 failure class: weekday-cycle texts
  mis-slotted into Resurrection-cycle roles). V2 has the proper text at
  every position; an absent V2 field is a data bug the validator would have
  caught, not a condition to paper over. Adapter returns null and the
  assembler's existing `unresolved` surfacing applies.

## 3. The slot map — 18 sites, V1 → V2

Line numbers are hours-tool.jsx at v0.34.3. "TN" = TEXT_NODE
(`{text, tier, src{file,locus}, …}`); adapter emits legacy shape + `path` + `src`.

| # | Line | V1 read | Slot | V2 source | Shape translation / notes |
|---|---|---|---|---|---|
| 1 | 2243 | `RESURRECTIONAL_TROPARIA[tone]` | Hours troparion (Sun, primary) | `tone{t}.troparion` | TN → `{tone, text}` |
| 2 | 2302 | `SUNDAY_KONTAKIA[tone]` | Hours kontakion (Sun) | `tone{t}.kontakion` | TN → `{tone, text}` |
| 3 | 3410 | `RESURRECTIONAL_TROPARIA[tone]` | Vespers dismissal troparion (Sun, primary) | `tone{t}.troparion` | as #1 |
| 4 | 3603/3606 | `getOctoechosLicOpening(tone)` → `LIC_OPENING_FALLBACK` | LIC opening (Ps 140:1–2 Kekragarion) | **RETIRED (ruling §0.1)** | Invariable Horologion frame text renders (the current fallback strings become a named frame constant in hours-tool — Horologion frame, not V2 canonical text, so amendment-F clean). Director pointing returns re-imagined at Phase D. |
| 5 | 3641+ | `getOctoechosVespers(tone, dayKey).lic / .lic_dogmatikon / .dogmatikon` | §2A weekday LIC + Both-now | `tone{t}.vespers_weekday.<eve>.lic.octoechos` (+ `.octoechos_verses`, `.menaion_fallback`) and `.lic_theotokion` | Day-key remap: V1 `sun_eve`→V2 `sun`, `mon`…`fri` same, `sat`→`great_vespers`. Friday Both-now is the typed `dogmatic_theotokion` closer — V1's Fri `lic_dogmatikon` special case becomes data, not code. |
| 6 | 3710 | `getOctoechosVespers(tone,'sat').lic` | Sunday LIC resurrection stichera (slice 0..resN) | `tone{t}.great_vespers.lic` (7 TN) | labeled items → text list; `lic_verses` available additively |
| 7 | 3765 | `sunSat.dogmatikon` | Sunday LIC Both-now Dogmatikon | `tone{t}.great_vespers.dogmatikon` | TN → string |
| 8 | 3771 | `LIC_THEOTOKIA[tone]` | Dogmatikon FALLBACK | **branch dies** | V2 always carries `great_vespers.dogmatikon`; the cross-cycle fallback (Monday-evening weekday text in the Saturday slot — the §8 failure class) is removed, not remapped. |
| 9 | 3814 | `octoSat.lic` | pent-Sunday LIC (slice 0..7) | `great_vespers.lic` | as #6 |
| 10 | 3920/3933 | `licSatDog.dogmatikon` / `LIC_THEOTOKIA[tone]` | overlay-Sunday LIC Both-now | `great_vespers.dogmatikon`; fallback branch dies | as #7/#8 |
| 11 | 4051–4065 | `octoDay.lic_dogmatikon/.dogmatikon` / `LIC_THEOTOKIA[tone]` | weekday LIC Both-now (Fri/Sat/Mon–Thu chain) | `vespers_weekday.<eve>.lic_theotokion` (typed closer) | The Fri→Sat→generic chain collapses to one per-evening proper field. 6-way day distinction restored (V1 collapsed it to one entry). |
| 12 | 4452+ | `getOctoechosVespers(tone, dayKey)` aposticha reads | §2A weekday aposticha + Both-now (4646–4658) | `vespers_weekday.<eve>.aposticha` + `.aposticha_theotokion` | labeled items + pointed verses; closer typed |
| 13 | 4456–4463 | `getOctoechosUniversal(tone)` fixed verses | aposticha fixed verses (weekday / Saturday) | `shared.weekday_aposticha_verses` / `shared.saturday_gv_aposticha_verses` | tone-independent shared tables; hardcoded literal fallbacks die |
| 14 | 4473+ | `sunSatA.aposticha / .aposticha_glory` | Sunday aposticha stichera + Glory rubric | `great_vespers.aposticha` (4 TN) + `.aposticha_glory_rubric` | V1 `aposticha_glory` is the placeholder rubric string "[Glory from Menaion if appointed]" — maps to the V2 **rubric** field (verified byte-equivalent in intent; V2: "Glory from the Menaion, if appointed, otherwise:"), NOT to a text slot. |
| 15 | 4534 | `SUNDAY_APOSTICHA_THEOTOKIA[gloryTone]` | Sunday aposticha Both-now (tone of the Glory) | `theotokia.resurrectional_theotokia[gloryTone].aposticha_theotokion` | §8 fix lands: tone-2 serves "O new wonder…" (the GV proper), not the mis-slotted Sunday-evening text. Also available at `great_vespers.aposticha_theotokion` when gloryTone == week tone — the table is the general case. |
| 16 | 4917 | `RESURRECTIONAL_DISMISSAL_THEOTOKIA[_lastTropTone]` | Vespers troparia Both-now dismissal theotokion | `tone{_lastTropTone}.dismissal_theotokion` | §4.1-verified identical to `theotokia.resurrectional_theotokia[t].dismissal_theotokion`; tone top-level field is canonical |
| 17 | 5754 | `SUNDAY_PROKEIMENON[tone]` | Typica prokeimenon (Sun) | `tone{t}.liturgy.prokeimenon` | **The §8 conflation fix.** V1 exposed ONE Sunday prokeimenon; V2 distinguishes `matins.prokeimenon` from `liturgy.prokeimenon` and the schema pins `prokeimenonNotEqual`. Typica serves the LITURGY prokeimenon, never the Matins text. Tone-2's V1 text (a genuine error matching neither moment) is corrected. Drop the `|| [1]` tone-1 hard fallback (all 8 encoded). |
| 18 | 5868 | `SUNDAY_ALLELUIA[tone]` | Typica Alleluia (Sun, first) | `tone{t}.liturgy.alleluia` | `{tone, verses[]}` → `{tone, verse, stichoi}` translation at adapter. Tone-2 genuine error (adjacent psalm) corrected. |
| 19 | 6061 | `HYPAKOE[toneKey]` | Sunday Typica Hypakoë | `tone{t}.matins.hypakoe` | TN (sourceLabel "The Sessional Hymn") → string. The `"pascha"` key is Pentecostarion material → moves to `pentecostarion.js` at M4; assembler reads it there during Pascha/Bright Week. |

**Local shared-material tables (not V1 imports, same cutover):**

| Table | Line | V2 source |
|---|---|---|
| `WEEKLY_VESPERS_PROKEIMENON` (dow 0–6) | 2827 | `shared.daily_vespers_prokeimena` (sun–fri, `{tone,text,verse}`) + `shared.saturday_vespers_prokeimenon` (dow 6, Tone VI + 3 verses) |
| `TYPICA_WEEKDAY_PROKEIMENON` (dow 1–6) | 5408 | `shared.daily_liturgy_propers.<day>.prokeimenon` (Sat: two, incl. departed) |
| `WEEKLY_PROK_TABLE` (Explainer UI) | 11493 | reads canonical `shared.daily_vespers_prokeimena` via adapter (amendment-F: display copies hard-fail post-cutover) |
| `TYPICA_PROK_TABLE_DATA` (Explainer UI) | 11673 | reads canonical `shared.daily_liturgy_propers` via adapter |

## 4. Expected-diff register

The comparison harness classifies every V1≠V2 result against this register.
Anything NOT here is an **unexplained variant** and blocks cutover until
resolved (investigated → either added here with evidence, or fixed).

From `octoechos_v2_spec.md` §8 (tone 2, source-verified):

1. Troparion T2: "lightning of Thy Divinity" → "radiant brilliance of Thy
   divinity" (all 4 print sites).
2. Kontakion T2: "Hades was terrified" → "Hades was struck with fear".
3. Sunday prokeimenon T2: V1 text (Kathisma-II sessional verse — genuine
   error) → Liturgy "The Lord is my strength and my song…".
4. Sunday Alleluia T2: Ps 20 (genuine error, adjacent psalm) → Ps 19 verses.
5. Sunday aposticha theotokion T2: Sunday-evening weekday text (mis-slotted)
   → "O new wonder…" (GV proper).
6. Weekday LIC Both-now, all tones: single collapsed V1 entry → six
   per-evening propers (V1's one text will match at most one evening).
7. Pointing, dataset-wide: V1 unpointed vs V2 Tier-2 pointed — the
   normalized mode strips ` * ` / ` ** ` before comparing; a
   pointing-only diff classifies as identical (normalized).
8. Typica prokeimenon/alleluia, other tones: V1's single table may carry the
   Matins-cycle text for tones beyond 2 (same conflation) — the harness
   reports per-tone; matches against `matins.prokeimenon` are classified
   "expected correction (conflation)" with the evidence printed.
9. Retired at cutover (report as RETIRED, not variant): `lic_opening`
   (ruling §0.1), `HYPAKOE["pascha"]` (moved to Pentecostarion),
   `KATAVASIAE` / `RESURRECTION_GOSPEL_STICHERA` (empty stubs),
   `LIC_THEOTOKIA` fallback role (chain removed), hardcoded aposticha verse
   literals (shared tables now authoritative).

## 5. Comparison harness (M3b) — `tools/compare_v1_v2.mjs`

- Loads V1 (`index.js` + 8 tone files) and V2 (via the adapter — testing the
  adapter itself, not raw data) and walks the §3 slot matrix × 8 tones ×
  (weekday evenings where applicable).
- Two modes per cell: **normalized** (strip pointing markers, collapse
  whitespace, normalize quotes/apostrophes/case — the reading view's READER
  normalization) and **exact bytes**.
- Classification: `IDENTICAL` (exact) / `IDENTICAL_NORMALIZED`
  (pointing/glyph only) / `EXPECTED_CORRECTION` (matches §4 register, entry
  cited) / `RETIRED` (§4.9) / `UNEXPLAINED_VARIANT` (blocker) /
  `V1_EMPTY` (V2 fills a hole — informational).
- Output: `tools/compare_v1_v2_report.md` — per-tone sections, per-slot
  rows, byte diffs for every non-identical cell. Exit 0 in report mode;
  `--gate` mode exits 1 on any `UNEXPLAINED_VARIANT` and joins the M4
  pre-cutover checklist (not the standing gate — it dies with V1).

## 6. Source switch (M3c)

`OCTOECHOS_SOURCE` resolved in hours-tool: default `'v1'`; URL param
`?octoechos=v2` overrides for preview (no rebuild needed to spot-check).
Every §3 site routes through one accessor layer keyed on the flag, so M4's
flip is a one-line default change plus dead-branch removal. While the flag
exists, BOTH datasets stay in the bundle-split (dynamic imports — no size
regression for users on the default path).

## 7. Gate re-baseline plan (M4)

- `test_sunday_vespers.mjs`: §2 data-contract checks re-point at the adapter
  — `great_vespers.lic` length 7 (V2 count is exactly 7, tighter than V1's
  `>=7`), `aposticha` length 4, `dogmatikon` present,
  `aposticha_theotokion` present; §3 re-points at
  `theotokia.resurrectional_theotokia` 8-keyed. Split arithmetic and
  Menaion/Pentecostarion sections unchanged.
- `validate_octoechos.mjs` (V1): removed from the standing gate and deleted
  with the V1 data folder.
- `validate_viewer_coverage.mjs`: `LEGACY_V1_SURFACES` → empty set. From
  then on any literal canonical text inside a component hard-fails — the
  built-in enforcement that the cutover actually completed.
- `package.json` `gate` script updated accordingly; standing sequence
  becomes: pointing paths, sunday vespers, pointing roles, V2 validator,
  viewer coverage, vite build.

## 8. Retirement checklist (M4, on Bill's go)

1. Flip `OCTOECHOS_SOURCE` default → `'v2'`; remove the v1 branch.
2. B.2 deep links live: every Octoechos-sourced element renders its
   `/octoechos-v2#<path>` link + `src {file, locus}` provenance.
3. Move `HYPAKOE["pascha"]` text into `pentecostarion.js`; assembler reads
   it there.
4. Retire `lic_opening` (ruling §0.1); LIC opening renders from the
   invariable frame constant.
5. Delete `src/data/octoechos/` (index.js, schema.js, tone1–8.js).
6. Delete `src/components/octoechos-browser.jsx`; remove the `/octoechos`
   route from `App.jsx`.
7. Delete `src/components/octoechos-data.js` (already dead).
8. Remove the V1 static import block (hours-tool.jsx 4–8), the V1 loader/
   cache (954–971), the three V1 accessors (~2869–2897), the stale comment
   block (~2846–2866), and the dead `LIC_THEOTOKIA` fallback branches.
9. Re-point the two Explainer tables at canonical shared tables.
10. §7 gate re-baseline; empty `LEGACY_V1_SURFACES`.
11. Full gate + `compare_v1_v2.mjs --gate` green.
12. Version v0.35.0 (minor — new functionality: V2 assembly + deep links);
    RELEASE_NOTES entry; project_notes.md header + session entry;
    commit `v0.35.0: Octoechos V2 wire-in — assembler cutover, V1 retired`.

## 9. Out of scope (unchanged carry-forwards)

- OCA override modules / dialect precedence (Phase D) — including the
  re-imagined home for the director-pointed materials (§0.1).
- Eothina/Exapostilaria Gospel-keyed 11-set (future shared table).
- Phase C edit-engine adapter for octoechos_v2 (separate commit, Bill's go,
  per `next_session_prompt.md`).
- Propose-correction report and remaining Phase B.3 sic-glyph edges (can
  ride M4 or follow; B.3 is independent of the wire-in).
- Weekday Matins / Compline / Nocturns assembly — V2 has the data; the
  assembler doesn't build those services yet. The wire-in swaps sources for
  what the assembler serves today; new services are future features.
