# Octoechos Data Architecture Specification

**Status:** Proposed — not yet implemented  
**Supersedes:** Inlined tables in `hours-tool.jsx` (migration plan below)  
**Source PDFs:** St. Sergius Sunday Octoechos, Drive folder `1KNscbkPSWjHiIOqeM4v5ZkOJqFr8NBHV`  
  — Per-tone subfolders: `tone1/` through `tone8/`  
  — Per-tone files: `N-1.pdf` (Sat eve + Sun Matins), `N-2.pdf` through `N-7.pdf` (weekday services)  
**Existing encoded data:** `src/data/octoechos-vespers.txt` (Tone 1 vespers only, pipe-delimited)

---

## Problem Statement

Octoechos data is currently split across three locations:

1. **Inlined in `hours-tool.jsx`** (~1,200+ lines of component file):
   - `OCTOECHOS_VESPERS[tone][day]` — 477 records, Tone 1 only (847 lines)
   - `OCTOECHOS_LIC_THEOTOKIA[tone]` — all 8 tones
   - `OCTOECHOS_HYPAKOE[tone]` — all 8 tones (Sunday sessional/Typica)
   - `RESURRECTIONAL_TROPARIA[tone]` — all 8 tones
   - `SUNDAY_KONTAKIA[tone]` — all 8 tones
   - `SUNDAY_RESURRECTIONAL_PROKEIMENON[tone]` — all 8 tones
   - `SUNDAY_RESURRECTIONAL_ALLELUIA[tone]` — all 8 tones

2. **On Drive only** (not in codebase):
   - `octoechos_vespers.txt` — Tone 1 vespers source (pipe-delimited)
   - Tone folders 2–8 exist but not yet encoded

3. **Not encoded anywhere** (needed for Sunday Matins):
   - Sessional hymns after Kathisma II and III (8 tones)
   - Songs of Ascent (8 tones × 4 antiphons)
   - Three Octoechos canons: Resurrection, Cross/Resurrection, Theotokos (8 tones × 8 odes)
   - Katavasiae (by period or tone)
   - Exapostilaria (8 tones + Theotokion)
   - Stichera on the Praises — resurrection stichera (8 tones)
   - Resurrection Gospel stichera (11 gospels, tone-independent)

**The inlining problem:** `hours-tool.jsx` is already 10,159 lines. Adding tones 2–8 of
`OCTOECHOS_VESPERS` alone would add ~6,000 more lines. Adding full Matins canon data for 
all 8 tones would add ~10,000+ lines. The component file would become unmaintainable.

**The split-path problem:** Data currently in `hours-tool.jsx` and data that will live in
`src/data/` follow different import/access patterns. The assembler must use one consistent 
pattern for all Octoechos lookups.

---

## Solution: `src/data/octoechos.js`

A single file containing **all** Octoechos data, keyed by tone, covering all services.
The assembler imports it like any other data module. The component file contains no
inline data tables for Octoechos content.

### Structure

```javascript
// src/data/octoechos.js

export const OCTOECHOS = {

  // ── TOP-LEVEL TONE KEY ──────────────────────────────────────────────────────
  // All entries keyed by tone (1–8). Tone 0 = universal/fixed elements.

  0: {
    // Universal elements independent of tone (same every week)
    vespers: {
      aposticha_verses: {
        weekday: [
          "Unto Thee have I lifted up mine eyes...",
          "Have mercy on us, O Lord, have mercy on us...",
        ],
        saturday: [
          "The Lord is King: He is clothed with majesty...",
          "For He established the universe which shall not be shaken.",
          "Holiness becometh Thy house, O Lord, unto length of days.",
        ],
      },
    },
  },

  1: {
    // ── VESPERS ────────────────────────────────────────────────────────────────
    vespers: {
      // Keyed by day: sat | sun_eve | mon | tue | wed | thu | fri
      sat: {
        lic: [...],               // 7 resurrection stichera
        aposticha: [...],         // 3 Saturday aposticha stichera
        aposticha_glory: "...",   // Saturday Glory sticheron (or null — Menaion supplied)
        dogmatikon: "...",        // Saturday Both now (Dogmatikon)
      },
      sun_eve: {
        lic: [...],               // 3 Sunday evening stichera
        aposticha: [...],
        lic_theotokion: "...",    // Lord I Have Cried theotokion (Both now)
      },
      mon: { lic: [...], aposticha: [...], lic_theotokion: "..." },
      tue: { ... },
      wed: { ... },
      thu: { ... },
      fri: { ... },
    },

    // ── HOURS / TYPICA ─────────────────────────────────────────────────────────
    troparion: "...",             // Resurrectional troparion (Sunday / Tone 1)
    kontakion: "...",             // Sunday resurrectional kontakion
    lic_theotokion: "...",        // LIC Both now theotokion (weekday use)

    // ── SUNDAY MATINS ──────────────────────────────────────────────────────────
    matins: {
      // God is the Lord block
      troparion: "...",           // same as hours troparion (Tone 1 resurrectional)

      // Sessional hymns
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

      // Hypakoë (sung after Evlogitaria at Sunday Matins; used at Typica too)
      hypakoe: "...",

      // Songs of Ascent (4 antiphons × 3 stanzas each)
      songs_of_ascent: {
        antiphon_1: ["...", "...", "..."],  // [stanza1, stanza2, Glory/BothNow]
        antiphon_2: ["...", "...", "..."],
        antiphon_3: ["...", "...", "..."],
        antiphon_4: ["...", "...", "..."],
      },

      // Prokeimenon and Alleluia (Matins, before Gospel)
      prokeimenon: { tone: 1, text: "...", verse: "..." },
      alleluia: { tone: 1, verse: "...", stichos: "..." },

      // The three Octoechos canons
      // Note: a fourth canon (feast or saint) is supplied per service entry
      canons: {
        resurrection: {
          // 4 troparia + Theotokion per ode
          // Ode II omitted on Sundays
          odes: {
            1: {
              irmos: "...",
              refrain: "Glory to Thy holy Resurrection, O Lord",
              troparia: ["...", "..."],
              theotokion: "...",
            },
            3: { irmos: "...", troparia: ["...", "..."], theotokion: "..." },
            4: { ... }, 5: { ... }, 6: { ... }, 7: { ... }, 8: { ... }, 9: { ... },
          },
        },
        cross_resurrection: {
          // 2 troparia per ode; no separate irmos (chanted to Resurrection irmos)
          refrain: "Glory to Thy precious Cross and Resurrection, O Lord",
          odes: {
            1: { troparia: ["...", "..."], theotokion: "..." },
            3: { ... }, /* ... */ 9: { ... },
          },
        },
        theotokos: {
          // 2 troparia per ode
          refrain: "Most holy Theotokos save us",
          odes: {
            1: { troparia: ["...", "..."] },
            3: { ... }, /* ... */ 9: { ... },
          },
        },
      },

      // Katavasiae (one irmos per ode, sung at end of each ode)
      // These rotate by liturgical period, not tone — see KATAVASIAE table below
      // Pointer field: which katavasiae set applies (filled at assembly time)
      katavasiae_set: "theotokos_festal",  // or "pascha", "nativity", etc.

      // Exapostilaria (after Ode IX)
      exapostilarion: "...",
      exapostilarion_theotokion: "...",

      // Stichera on the Praises (resurrection stichera, 5 for Tone 1)
      // Note: feast stichera added per service entry on top of these
      praises: {
        stichera: [
          { verse: "...", text: "..." },
          { verse: "...", text: "..." },
          { verse: "...", text: "..." },
          { verse: "...", text: "..." },
          // Anatolios stichera:
          { verse: "...", text: "..." },
        ],
        // Glory: drawn from the 11 Resurrection Gospel stichera (gospel_number → sticheron)
        // see RESURRECTION_GOSPEL_STICHERA table below
      },
    },
  },

  2: { /* same structure, Tone 2 */ },
  3: { /* ... */ },
  4: { /* ... */ },
  5: { /* ... */ },
  6: { /* ... */ },
  7: { /* ... */ },
  8: { /* ... */ },
};

// ── KATAVASIAE ──────────────────────────────────────────────────────────────
// Separate table: rotate by liturgical period, not by tone
// Assembler selects the correct set based on date/season
export const KATAVASIAE = {
  theotokos_festal: {
    // Used from Pentecost through Aug 1 (and other periods)
    // Source: HTM Horologion / St. Sergius
    1: "I shall open my mouth, and be filled with the Spirit...",
    3: "O Theotokos, thou living and plentiful fount...",
    4: "He who sitteth in glory upon the throne of the Godhead...",
    5: "All creation stands in awe of thy divine glory...",
    6: "Celebrating the divine and solemn feast...",
    7: "Refusing to worship created things...",
    8: "The Offspring of the Theotokos saved the holy children...",
    9: "Let every mortal born on earth, radiant with light...",
  },
  pascha: { /* Paschal katavasiae */ },
  nativity: { /* ... */ },
  theophany: { /* ... */ },
  // etc.
};

// ── RESURRECTION GOSPEL STICHERA ───────────────────────────────────────────
// 11 stichera (one per Sunday Gospel), tone-independent
// Sung as "Glory" at Stichera on the Praises; also sung after Psalm 50
// Source: HTM Horologion / St. Sergius
export const RESURRECTION_GOSPEL_STICHERA = {
  1: { tone: 1, text: "When the disciples were hastening to the mountain..." },
  2: { tone: 2, text: "..." },
  // ...
  11: { tone: 8, text: "..." },
};
```

---

## Migration Plan

### Phase 1 — Create `src/data/octoechos.js`

Move existing inlined data from `hours-tool.jsx` into the new file. No new encoding,
no functional change — purely a structural refactor.

Tables to migrate:
- `OCTOECHOS_VESPERS` → `OCTOECHOS[tone].vespers`
- `OCTOECHOS_LIC_THEOTOKIA` → `OCTOECHOS[tone].lic_theotokion`
- `OCTOECHOS_HYPAKOE` → `OCTOECHOS[tone].matins.hypakoe`
- `RESURRECTIONAL_TROPARIA` → `OCTOECHOS[tone].troparion`
- `SUNDAY_KONTAKIA` → `OCTOECHOS[tone].kontakion`
- `SUNDAY_RESURRECTIONAL_PROKEIMENON` → `OCTOECHOS[tone].matins.prokeimenon`
- `SUNDAY_RESURRECTIONAL_ALLELUIA` → `OCTOECHOS[tone].matins.alleluia`

Assembler update: replace all direct references to the old table names with
`OCTOECHOS[tone].vespers`, `OCTOECHOS[tone].troparion`, etc.

**Gate:** All existing assembly tests pass after migration. Zero functional change.

### Phase 2 — Encode tones 2–8 for Vespers

Encode `octoechos_vespers.txt` for tones 2–8 from the Drive tone folders.
Add to `OCTOECHOS[2..8].vespers`.

### Phase 3 — Encode Sunday Matins (tone by tone)

Starting with Tone 8 (P+56 is the immediate use case):

Per-tone encoding pass from `N-1.pdf`:
- Sessional hymns after Kathisma II and III
- Songs of Ascent (4 antiphons)
- Three canons (Resurrection, Cross/Resurrection, Theotokos) — all 8 odes
- Exapostilaria
- Stichera on the Praises

One tone at a time. Tone 8 first (unblocks All Saints Sunday P+56).

### Phase 4 — Encode Katavasiae and Gospel Stichera

Period-based katavasiae from HTM.
11 Resurrection Gospel stichera (tone-independent).

---

## Assembler Access Pattern

```javascript
import { OCTOECHOS, KATAVASIAE, RESURRECTION_GOSPEL_STICHERA }
  from '../data/octoechos.js';

// Vespers stichera (already used today, currently from inlined table):
const vespers = OCTOECHOS[tone]?.vespers?.[dayKey];

// Sunday resurrectional troparion (currently from RESURRECTIONAL_TROPARIA):
const troparion = OCTOECHOS[tone]?.troparion;

// Sunday kontakion (currently from SUNDAY_KONTAKIA):
const kontakion = OCTOECHOS[tone]?.kontakion;

// Hypakoë at Typica / Sunday Matins (currently from OCTOECHOS_HYPAKOE):
const hypakoe = OCTOECHOS[tone]?.matins?.hypakoe;

// Sunday Matins canons (NEW — currently nowhere):
const resCanon = OCTOECHOS[tone]?.matins?.canons?.resurrection;
const ode1 = resCanon?.odes?.[1];

// Katavasiae (period-based, not tone-based):
const katavasia = KATAVASIAE[katavasiaePeriod]?.[odeNumber];

// Gospel sticheron at Praises:
const gospelSticheron = RESURRECTION_GOSPEL_STICHERA[sundayGospelNumber];
```

---

## What the Pentecostarion/Menaion Entry Supplies

With `octoechos.js` handling all Octoechos content, a service entry only needs to
supply what is feast-specific or saint-specific:

**Pentecostarion Sunday entry (e.g., P+56 All Saints):**
```javascript
matins_canon_feast: {
  refrain: "All ye Saints of the Lord, pray to God for us",
  odes: {
    1: { troparia: [...], gloria: "...", both_now: "..." },
    3: { ... }, 4: { ... }, /* ... */ 9: { ... },
  },
  kontakion: { tone: 8, text: "To Thee, the Planter of creation..." },
  ikos: "Those who have borne witness...",
},
matins_gospel_number: 1,          // which of the 11 Sunday gospels (governs Praises Glory)
matins_sessional_post_polyeleos: { tone: 8, text: "Keeping feast on the holy memorial..." },
matins_exapostilarion_feast: { text: "With hymns let us crown as is meet the Baptist..." },
matins_praises_feast: [           // feast stichera added to resurrection stichera at Praises
  { verse: "...", text: "..." },
  { verse: "...", text: "..." },
  { verse: "...", text: "..." },
],
praises_glory: { source: "gospel_sticheron", gospel_number: 1 },  // pointer, not re-encoded
```

**Menaion saint entry with canon (§2E polyeleos serving with Sunday Matins):**
```javascript
matins_canon_saint: {
  odes: {
    3: { irmos: "...", troparia: [...], sessional_hymn: { tone: N, text: "..." } },
    6: { irmos: "...", troparia: [...], kontakion: {...}, ikos: "..." },
    // §2E: only Odes III and VI typically provided
  },
},
```

For ordinary weekday saints (§2A/§2C), the Menaion supplies no canon — the assembler
uses only the Octoechos canons for that day of week.

---

## Open Questions Before Implementation

1. **`VESPERS_KATHISMA` / `MATINS_KATHISMA`** — currently inlined in hours-tool.jsx.
   These are tone-independent (keyed by `kathismaPeriod` and `dow`). They belong in
   `octoechos.js` as a separate export alongside `OCTOECHOS`, not nested under tone keys.

2. **Katavasiae period detection** — the assembler needs a function mapping
   `{paschaOffset, monthDay}` → katavasiae set name. This is a rubrical table that
   belongs in the assembler (a `getKatavasiaePeriod()` function), not in the data file.

3. **Phase 1 regression gate** — before migrating the inlined tables, run the full
   regression test suite (`node tools/test_pointing_paths.mjs`) to establish a baseline.
   After migration, all tests must pass with zero diff.

4. **File size** — the full `octoechos.js` with all 8 tones × all services will be
   large (~200–400KB depending on how much Matins canon data is encoded). Lazy loading
   via dynamic `import()` may be needed; the same strategy used for Menaion monthly
   modules (`_menaionLoaders`) applies here.
