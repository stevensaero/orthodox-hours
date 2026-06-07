# Octoechos Build — Scope of Work

**Status:** Approved — ready to implement
**Recorded:** June 7, 2026 (v0.6.6)
**Supersedes:** `octoechos_data_spec.md` (architectural proposal — decisions now resolved)

All design decisions in this document have been explicitly confirmed in session.
This is the authoritative record of intent for the Octoechos build.

---

## Why This Build Exists

### Problem 1 — Fragmented data, growing file

Octoechos data currently lives in three places:

1. **Inlined in `hours-tool.jsx`** (~1,200 lines, 145KB of component file):
   - `OCTOECHOS_VESPERS` — 846 lines, 130KB; all 8 tones vespers stichera
   - `OCTOECHOS_LIC_THEOTOKIA` — 9 lines
   - `OCTOECHOS_HYPAKOE` — 38 lines
   - `RESURRECTIONAL_TROPARIA` — 33 lines
   - `SUNDAY_KONTAKIA` — 33 lines
   - `SUNDAY_RESURRECTIONAL_PROKEIMENON` — 25 lines
   - `SUNDAY_RESURRECTIONAL_ALLELUIA` — 25 lines

2. **On Drive only** (not in codebase):
   - `octoechos_vespers.txt` — pipe-delimited Tone 1 source; tones 2–8 folders
     exist in Drive but content not yet in codebase

3. **Not encoded anywhere** (needed for Sunday Matins):
   - Sessional hymns after Kathisma II and III (8 tones)
   - Songs of Ascent (8 tones × 4 antiphons × 3 stanzas)
   - Three Octoechos Matins canons — Resurrection, Cross/Resurrection, Theotokos
     (8 tones × 8 odes × ~8 troparia per ode)
   - Katavasiae (period-based)
   - Resurrection exapostilaria (8 tones)
   - Stichera on the Praises — resurrection stichera (8 tones)
   - 11 Resurrection Gospel stichera (tone-independent)

`hours-tool.jsx` is already 10,159 lines. Adding tones 2–8 vespers alone would
add ~6,000 more lines. Adding Matins canon data for all 8 tones would add
~10,000+ lines. The file is unmaintainable at that scale.

### Problem 2 — Sunday Matins unassembleable

The immediate trigger is P+56 (All Saints Sunday, June 7 2026) and the need to
display and eventually assemble Sunday Matins. The three Octoechos canons for
any Sunday Matins (Resurrection, Cross/Resurrection, Theotokos) must come from
a data source keyed by tone. No such source exists in the codebase.

### Problem 3 — Inconsistent architecture

The `OCTOECHOS_VESPERS` inlined data is already fully encoded for all 8 tones,
but the assembler cannot use tones 2–8 for vespers stichera because the data
structure is a flat JS object in the component file, not a lazy-loaded module.
Every other data source in the project (Menaion months, Pentecostarion) is
a separate file with lazy loading. Octoechos must follow the same pattern.

---

## Decisions Made

### D1 — File structure: separate per-tone files

**Decision:** One file per tone, matching the `_menaionLoaders` pattern exactly.

```
src/data/octoechos/
  index.js        — tone-independent data, static import, always small (~29KB)
  tone1.js        — Tone 1 all services, lazy-loaded (~168KB now, ~320KB with Matins)
  tone2.js
  tone3.js
  tone4.js
  tone5.js
  tone6.js
  tone7.js
  tone8.js
```

**Rationale confirmed in session:**
- Rapid loading — user on a Tone 3 Sunday loads only `tone3.js`; other files
  never touch the network until their week comes. Vite bundles each independently.
- Encoding changes don't touch the tool path — correcting a sticheron in Tone 5
  edits only `tone5.js`. Zero risk of touching assembler logic or other tones.
- Matches established project pattern — same discipline as editing `june.js`.
  One file is the unit of encoding work.
- A single big file was rejected: 1.3MB loaded at startup whether or not Matins
  is being used.

### D2 — index.js holds all tone-independent data

Everything needed by the assembler regardless of tone, always small:

```javascript
// src/data/octoechos/index.js

export const LIC_THEOTOKIA = { 1: "...", 2: "...", /* 8 tones */ };
export const HYPAKOE = { 1: "...", /* 8 tones */ };
export const RESURRECTIONAL_TROPARIA = { 1: "...", /* 8 tones */ };
export const SUNDAY_KONTAKIA = { 1: "...", /* 8 tones */ };
export const SUNDAY_PROKEIMENON = { 1: "...", /* 8 tones */ };
export const SUNDAY_ALLELUIA = { 1: "...", /* 8 tones */ };
export const KATAVASIAE = {
  theotokos_festal: { 1: "...", 3: "...", /* odes 1,3,4,5,6,7,8,9 */ },
  pascha: { /* ... */ },
  nativity: { /* ... */ },
  theophany: { /* ... */ },
  // etc — period-keyed, not tone-keyed
};
export const RESURRECTION_GOSPEL_STICHERA = {
  1: { tone: 1, text: "..." },
  /* 2 through 11 */
};
```

These replace the inlined `OCTOECHOS_LIC_THEOTOKIA`, `OCTOECHOS_HYPAKOE`,
`RESURRECTIONAL_TROPARIA`, `SUNDAY_KONTAKIA`, `SUNDAY_RESURRECTIONAL_PROKEIMENON`,
`SUNDAY_RESURRECTIONAL_ALLELUIA` tables in `hours-tool.jsx`.

### D3 — Per-tone file structure

Each tone file exports one default object:

```javascript
// src/data/octoechos/tone1.js  (example — same shape for all 8 tones)

export default {

  // ── VESPERS ────────────────────────────────────────────────────────────────
  vespers: {
    sat: {
      lic: [ "...", "...", /* 7 resurrection stichera */ ],
      aposticha: [ { text: "...", verse: "..." }, /* 3 */ ],
      aposticha_glory: null,   // Always null — supplied by Menaion at Great Vespers
      dogmatikon: "...",       // Saturday Both now (Theotokos)
    },
    sun_eve: {
      lic: [ "...", /* 3 */ ],
      aposticha: [ { text: "...", verse: "..." }, /* 3 */ ],
      lic_theotokion: "...",   // Both now at LIC (weekday use)
    },
    mon: { lic: [...], aposticha: [...], lic_theotokion: "..." },
    tue: { ... },
    wed: { ... },
    thu: { ... },
    fri: {
      lic: [ "...", /* 6 stichera — Friday rule per Fekula §2A */ ],
      lic_dogmatikon: "...",   // Friday evening theotokion at LIC
      aposticha: [ ... ],
    },
  },

  // ── SUNDAY MATINS ──────────────────────────────────────────────────────────
  // Stub present from Phase 1. Populated in Phase 3 (one tone at a time).
  matins: {

    // Sessional hymns after Kathisma II and III
    kathisma_2: {
      hymn_1: { text: "...", verse: "..." },
      hymn_2: { text: "...", verse: "..." },
      theotokion: "...",
    },
    kathisma_3: {
      hymn_1: { text: "...", verse: "..." },
      hymn_2: { text: "...", verse: "..." },
      theotokion: "...",
    },

    // Songs of Ascent — 4 antiphons × 3 stanzas each
    songs_of_ascent: {
      antiphon_1: [ "...", "...", "..." ],   // [stanza1, stanza2, Glory/BothNow]
      antiphon_2: [ "...", "...", "..." ],
      antiphon_3: [ "...", "...", "..." ],
      antiphon_4: [ "...", "...", "..." ],
    },

    // The three Octoechos canons
    // A fourth canon (feast or saint) is supplied per-entry by the
    // Pentecostarion or Menaion data, never re-encoded here.
    canons: {
      resurrection: {
        // 4 troparia + Theotokion per ode; Ode II omitted on Sundays
        odes: {
          1: {
            irmos: "...",
            refrain: "Glory to Thy holy Resurrection, O Lord",
            troparia: [ "...", "...", "...", "..." ],
            theotokion: "...",
          },
          3: { irmos: "...", troparia: [...], theotokion: "..." },
          4: { ... }, 5: { ... }, 6: { ... }, 7: { ... }, 8: { ... }, 9: { ... },
        },
      },
      cross_resurrection: {
        // 2 troparia per ode; no separate irmos (chanted to Resurrection irmos)
        refrain: "Glory to Thy precious Cross and Resurrection, O Lord",
        odes: {
          1: { troparia: [ "...", "..." ], theotokion: "..." },
          3: { ... }, /* through 9 */
        },
      },
      theotokos: {
        // 2 troparia per ode
        refrain: "Most holy Theotokos save us",
        odes: {
          1: { troparia: [ "...", "..." ] },
          3: { ... }, /* through 9 */
        },
      },
    },

    // Katavasiae pointer — actual texts in KATAVASIAE[period][ode] from index.js
    // Assembler resolves the period from date context; this field documents
    // which set applies for ordinary post-Pentecost use.
    katavasiae_period: "theotokos_festal",

    // Exapostilaria (after Ode IX)
    exapostilarion: "...",
    exapostilarion_theotokion: "...",

    // Stichera on the Praises — resurrection stichera (5: 4 main + 1 Anatolios)
    // Feast stichera (3) are supplied per-entry from Pentecostarion/Menaion.
    // Glory: pointer to RESURRECTION_GOSPEL_STICHERA[gospel_number] from index.js
    praises: {
      stichera: [
        { verse: "...", text: "..." },
        { verse: "...", text: "..." },
        { verse: "...", text: "..." },
        { verse: "...", text: "..." },
        { verse: "...", text: "..." },   // Anatolios sticheron
      ],
    },
  },
};
```

### D4 — Assembler loader table

Directly parallel to `_menaionLoaders`:

```javascript
// In hours-tool.jsx, replacing all 7 inlined table declarations:

import {
  LIC_THEOTOKIA, HYPAKOE, RESURRECTIONAL_TROPARIA,
  SUNDAY_KONTAKIA, SUNDAY_PROKEIMENON, SUNDAY_ALLELUIA,
  KATAVASIAE, RESURRECTION_GOSPEL_STICHERA,
} from '../data/octoechos/index.js';

const _octoechosLoaders = {
  1: () => import('../data/octoechos/tone1.js'),
  2: () => import('../data/octoechos/tone2.js'),
  3: () => import('../data/octoechos/tone3.js'),
  4: () => import('../data/octoechos/tone4.js'),
  5: () => import('../data/octoechos/tone5.js'),
  6: () => import('../data/octoechos/tone6.js'),
  7: () => import('../data/octoechos/tone7.js'),
  8: () => import('../data/octoechos/tone8.js'),
};
```

The existing tone-caching pattern used for Menaion months applies identically.

### D5 — What service entries supply (never re-encode Octoechos)

The Octoechos canon texts are never encoded in Pentecostarion or Menaion entries.
Those entries supply only feast-specific or saint-specific content:

**Pentecostarion Sunday entry (e.g., P+56 All Saints):**
```javascript
matins_canon_feast: {
  refrain: "All ye Saints of the Lord, pray to God for us",
  odes: {
    1: { troparia: [...], gloria: "...", both_now: "..." },
    3: { ... }, /* through 9 */
    6: { kontakion: { tone: 8, text: "..." }, ikos: "..." },
  },
},
matins_gospel_number: 1,              // which of 11 Sunday gospels
matins_sessional_post_polyeleos: { tone: 8, text: "..." },
matins_sessional_post_polyeleos_both_now: { tone: 8, text: "..." },
matins_exapostilarion_feast: { text: "..." },
matins_exapostilarion_theotokion: { text: "..." },
matins_praises_feast: [               // 3 feast stichera with verses
  { tone: 4, verse: "...", text: "..." }, /* × 3 */
],
matins_praises_glory: { source: "gospel_sticheron", gospel_number: 1 },
```

**Menaion §2E polyeleos saint (Sunday context only):**
```javascript
matins_canon_saint: {
  odes: {
    3: { irmos: "...", troparia: [...], sessional_hymn: { tone: N, text: "..." } },
    6: { irmos: "...", troparia: [...], kontakion: { ... }, ikos: "..." },
    // §2E: only Odes III and VI provided; Octoechos fills remaining odes
  },
},
```

**§2A/§2C saints on Sundays:** no Matins canon fields — Octoechos alone.

### D6 — Data browser

A new `octoechos-browser.jsx` at `/orthodox-hours/octoechos`:
- Tone picker (1–8)
- Loads selected tone file on demand
- Vespers section: day-by-day stichera with full text
- Matins section: per-ode canon display (same visual pattern as P+56 Matins
  section now live in the Pentecostarion browser)
- Stub sections show "not yet encoded" placeholder for unencoded tone/Matins data
- Same lazy-load + Suspense architecture as Menaion and Pentecostarion browsers

### D7 — Katavasiae are period-based, not tone-based

Katavasiae rotate by liturgical period, not by Octoechos tone. They live in
`KATAVASIAE` in `index.js`. The assembler will need a `getKatavasiaePeriod(date)`
function that maps a date to a katavasiae set name. That function lives in
`hours-tool.jsx`, not in the data file. Rubrical table TBD when Matins assembler
is built.

### D8 — Sunday Matins scope (confirmed)

Only Sunday Matins will be encoded. Rationale:
1. Sunday Matins is the most commonly served Matins in OCA parishes
2. When Matins is not served, the canon odes are chanted at Liturgy during
   Communion — the tool becomes a Communion canon reference
3. Weekday Matins is out of scope for this project phase

Canon sourcing principle: the three Octoechos canons (Resurrection,
Cross/Resurrection, Theotokos) are tone-keyed and repeat on an 8-week cycle.
They are encoded once per tone in the tone file and never duplicated in
Pentecostarion or Menaion entries.

---

## Encoding Sources

| Data | Source |
|---|---|
| Vespers stichera (tones 1–8) | Drive: `Octoechos/toneN/N-2.pdf` through `N-7.pdf`; Tone 1 already in `octoechos_vespers.txt` |
| Matins canons (tones 1–8) | Drive: `Octoechos/toneN/N-1.pdf` (Saturday Eve + Sunday Matins) |
| Sessional hymns, Songs of Ascent, Praises | Same `N-1.pdf` per tone |
| Katavasiae | HTM Horologion (Drive) |
| 11 Resurrection Gospel stichera | HTM Horologion / St. Sergius |
| All Saints NA matins canon (P+56) | `90.pdf` (Pentecostarion, already read; **already encoded** in `pentecostarion.js`) |

Drive folder: `Octoechos` root `1X6XzaFGA6J0NfZ6emYDEkF3ISKmEPHg1`
Tone subfolders: `tone1/` through `tone8/`
Tone 8 Saturday/Sunday Matins PDF: `8-1.pdf` fileId `1_j9TH1WVmZ7vDAGPbmBzFVAZb_KGu-JJ`

---

## Work Phases

### Phase 1 — Migration (zero functional change)

**Goal:** Move inlined data out of `hours-tool.jsx` into the new file structure.
No new encoding. No new features. Gate must pass before and after.

Steps:
1. Create `src/data/octoechos/` directory
2. Create `index.js` — move all 7 small tables out of `hours-tool.jsx`
   with canonical export names (see D2)
3. Create `tone1.js` through `tone8.js` — move `OCTOECHOS_VESPERS[N]`
   content into each file's `vespers` key; `matins` key present as empty
   stub `{}` (signals "not yet encoded" to the browser)
4. Update `hours-tool.jsx`:
   - Add static import of `index.js` (named imports)
   - Add `_octoechosLoaders` loader table (see D4)
   - Remove 7 inlined table declarations (~145KB of component file)
   - Update all ~26 reference sites to use new import paths
5. Regression gate: `node tools/test_pointing_paths.mjs` — **empty diff required**
6. Build must pass; Pentecostarion + May + June gates must still pass
7. Version bump: v0.7.0 (minor — structural refactor)

**What this achieves:** `hours-tool.jsx` shrinks by ~1,200 lines / ~145KB.
All existing assembler behavior is preserved identically. The file structure
is now correct for Phase 2 and 3 encoding work.

### Phase 2 — Octoechos data browser

**Goal:** A browsable viewer for Octoechos data at `/orthodox-hours/octoechos`.

Steps:
1. Create `src/components/octoechos-browser.jsx`
2. Tone picker (1–8) — loads selected tone file on demand
3. Two main sections:
   - **Vespers** — day tabs (Sat, Sun Eve, Mon–Fri); per-day stichera with
     full text, tone labels, verse inserts
   - **Matins** — per-canon display (same ode-by-ode pattern as the Matins
     section now live in the Pentecostarion browser); stub placeholder when
     not yet encoded
4. Register route in `hours-tool.jsx` alongside existing browser routes
5. No version bump required (browser is a dev tool, not a user-facing feature)

### Phase 3 — Matins encoding, one tone at a time

**Goal:** Encode Sunday Matins content for all 8 tones, starting with Tone 8
(unblocks P+56 All Saints Sunday immediately).

Per-tone encoding checklist from `N-1.pdf`:
- [ ] Sessional hymns after Kathisma II (hymn_1, hymn_2, theotokion)
- [ ] Sessional hymns after Kathisma III (hymn_1, hymn_2, theotokion)
- [ ] Songs of Ascent (4 antiphons × 3 stanzas each)
- [ ] Canon: Resurrection — odes 1, 3, 4, 5, 6, 7, 8, 9
      (irmos + 4 troparia + theotokion per ode)
- [ ] Canon: Cross/Resurrection — odes 1, 3, 4, 5, 6, 7, 8, 9
      (2 troparia per ode; no irmos — chanted to Resurrection irmos)
- [ ] Canon: Theotokos — odes 1, 3, 4, 5, 6, 7, 8, 9
      (2 troparia per ode)
- [ ] Exapostilarion + Theotokion
- [ ] Stichera on the Praises (5: 4 main + 1 Anatolios)

Encoding order: Tone 8 first, then 1–7 in order.
Each tone is a self-contained encoding session — no cross-tone dependencies.

### Phase 4 — Katavasiae and Gospel Stichera

**Goal:** Encode period-based katavasiae and the 11 Resurrection Gospel stichera.

- Katavasiae: encode from HTM Horologion; add `getKatavasiaePeriod()` function
  to the assembler (period → katavasiae set name)
- 11 Resurrection Gospel stichera: encode from HTM / St. Sergius; these are
  tone-independent and rotate with the Sunday Gospel cycle, not the Octoechos

### Phase 5 — Matins assembler (future — not yet in scope)

Assembling a full Sunday Matins service from the data is a separate milestone
that requires architectural decisions beyond data encoding. Phase 5 depends on
Phases 1–4 being complete. It is not part of this scope of work.

---

## Files Touched in Phase 1

| File | Change |
|---|---|
| `src/data/octoechos/index.js` | **CREATE** — 7 small tables |
| `src/data/octoechos/tone1.js` | **CREATE** — vespers data from `OCTOECHOS_VESPERS[1]`; matins stub |
| `src/data/octoechos/tone2.js` | **CREATE** — same pattern |
| `src/data/octoechos/tone3.js` | **CREATE** |
| `src/data/octoechos/tone4.js` | **CREATE** |
| `src/data/octoechos/tone5.js` | **CREATE** |
| `src/data/octoechos/tone6.js` | **CREATE** |
| `src/data/octoechos/tone7.js` | **CREATE** |
| `src/data/octoechos/tone8.js` | **CREATE** |
| `src/components/hours-tool.jsx` | **EDIT** — remove 7 inlined tables, add import + loader table, update ~26 reference sites |
| `src/components/octoechos-browser.jsx` | **CREATE** (Phase 2) |

**Files not touched in Phase 1:**
- `src/data/pentecostarion.js` — no changes
- `src/data/menaion/*.js` — no changes
- `src/lib/audit.js` — no changes
- All other component files — no changes

---

## Gate Requirements

Before any Phase 1 code is written:
1. Run `node tools/test_pointing_paths.mjs` — record baseline
2. Commit baseline result to `tools/pointing_baseline.json` if not already current

After Phase 1 migration:
1. `node tools/test_pointing_paths.mjs` — **must match baseline exactly**
2. `node scripts/check-skeleton.mjs pentecostarion` — must pass ✅
3. `node scripts/check-skeleton.mjs may` — must pass ✅
4. `node scripts/check-skeleton.mjs june` — must pass ✅
5. `npm run build` — must pass with no errors
6. Manual spot check: open tool on June 7, 2026 — all four Hours must render
   identically to pre-migration behavior

---

## Size Estimates

| File | Current | After Phase 1 | After Phase 3 (full Matins) |
|---|---|---|---|
| `hours-tool.jsx` | 676KB | ~531KB | ~531KB (no change) |
| `index.js` | — | ~29KB | ~39KB (+ katavasiae + gospel stichera) |
| `toneN.js` (×8) | — | ~16KB each | ~166KB each |
| Total Octoechos data | 130KB (inline) | 130KB (external) | ~1,357KB (all tones, full Matins) |
| Network cost, typical Sunday | 130KB (all inline) | 16KB (1 tone) | 166KB (1 tone) |

---

## Open Questions (not blocking Phase 1)

1. **`VESPERS_KATHISMA` / `MATINS_KATHISMA`** — currently inlined in
   `hours-tool.jsx`. These are tone-independent but not Octoechos content
   per se. They could move to `index.js` or stay in the assembler. Decision
   deferred to Phase 1 implementation.

2. **Katavasiae period detection** — `getKatavasiaePeriod({paschaOffset, monthDay})`
   function belongs in the assembler. Rubrical table to be defined at Phase 4.

3. **P+63 All Saints of North America** — `PENTECOSTARION[63]` is unencoded.
   The St. Sergius source is All Saints of Russia (`100.pdf`), not North America.
   OCA propers need sourcing from oca.org. This is a separate gap documented
   in `project_notes.md` and is not part of this Octoechos scope.

4. **Vespers tones 2–8** — `OCTOECHOS_VESPERS` already has all 8 tones fully
   encoded. Phase 1 migrates that data directly. No new encoding for vespers.

---

## Relationship to Other Open Work

This build does not block and is not blocked by:
- July Menaion gate validation (can proceed independently)
- Tone Trainer Tone 1 verification (separate subsystem)
- Tone 3 cadence open question (choir director arbitration pending)
- Pericope number infrastructure (dormant, separate)
- Search bar for temple dedication selector (separate)

This build does enable:
- Sunday Matins browsing in the Pentecostarion browser (P+56 data already
  encoded — Phase 2 browser will display it)
- Future Sunday Matins assembler (Phase 5, not in this scope)
- Ordinary Sunday Matins for any Menaion date (depends on all 8 tones, Phase 3)
