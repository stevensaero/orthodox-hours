# Orthodox Hours — Phase 3: Reading-view element-level source links

Reading-view "↗ source" links: every assembled proper sourced from an in-app data book
(Menaion / Pentecostarion / Octoechos) links to the exact place in that book's viewer it
came from. The element-level counterpart to the Phase-1 shelf and Phase-2 deep-positioning.

## Scope decision history

- The original Drive handoff scoped this pass to **Troparion + Kontakion only**.
- Widened by Bill (this session) to **every movable proper the assembler emits from the three
  in-app books**. T/K is no longer a pilot boundary, just the simplest case of the same rule.

## Scope (this pass)

Every movable element the Vespers / Hours / Typica assembler emits whose text resolves to
**Menaion, Pentecostarion, or Octoechos** gets a source link:

- Troparion, Kontakion (Hours + Vespers)
- Lord-I-Have-Cried: stichera, doxasticon (Glory), theotokion / dogmatikon (Both now)
- Aposticha: stichera, doxasticon, theotokion

These all already carry a single `source` ("Menaion" / "Octoechos" / "Pentecostarion") at the
emit site, plus the locator (tone / comm / pascha) in scope. Nothing new is resolved — Phase 3
captures what the assembler already knows and turns it into a link.

### Out of scope / nothing to do

- **Canons.** Not emitted by any assembled service. Canons live in Matins; the Matins assembler
  isn't built. (The Octoechos *data* browser renders canon data, but no service emits a canon
  proper.) When Matins lands, its canon elements inherit this mechanism for free.
- **General Menaion / OCA provenance.** The current T/K engine resolves only to Menaion /
  Octoechos / Pentecostarion; when nothing resolves it emits an `unresolved` placeholder rather
  than walking to General Menaion or OCA. So `general-menaion` / `oca` are defensive branches
  (guarded, correct when the fallback chain lands) but will not fire on current data.
- HTM invariables, fixed text, reader substitutions — not book propers, no link.
- Coverage-from-data vs. declared card strings; §8 connective tissue (persistent context strip,
  live re-page, PSB into React shell, Tone Trainer verse intake, Score Print return).

## Core idea (build on Phase 2, don't reinvent)

A source link is a Phase-2 deep-positioning link aimed at a specific proper instead of the book
default, plus a new `&el=` sub-anchor so the viewer scrolls to the entry AND highlights the
section the proper belongs to. Three steps:

1. **Attach `sourceRef`** to each emitted proper at assembly (resolve once, carry it).
2. **Render a quiet "↗ source" affordance** in the Reading view for any proper with a linkable
   `sourceRef`.
3. **Add `&el=` highlight** to the three in-app viewers so they land on the entry (Phase 2) then
   flash the targeted section.

## `sourceRef` shape

```
{ kind: 'menaion-daily',  comm: 'MM-DD', el: 'troparion'|'kontakion'|'lic'|'aposticha' }
{ kind: 'octoechos',      tone: N,       el: ... }
{ kind: 'pentecostarion', pascha: N,     el: ... }
{ kind: 'general-menaion', generalType: '<saint type>' }   // defensive, no in-app viewer → note only
{ kind: 'oca', url: 'https://oca.org/saints/troparia/...' } // defensive, external new tab
```

The existing element field `source` is a human-readable display **string** and is left intact.
The structured locator is a NEW sibling field, `sourceRef`, to avoid overloading it.

### Anchor granularity (`el`)

`&el=` targets the **viewer section** that contains the proper, not an individual line:

| el          | viewer section landed/highlighted                       |
| ----------- | ------------------------------------------------------- |
| `troparion` | the Troparion field                                     |
| `kontakion` | the Kontakion field                                     |
| `lic`       | the "Lord I Have Cried" section (stichera+Glory+Both now)|
| `aposticha` | the "Aposticha" section                                 |

Rationale: the viewers render stichera as a section, not per-numbered-sticheron. Each individual
proper in the Reading view still gets its own ↗; a doxasticon/theotokion inside Lord-I-Call lands
on the `lic` section. Where a given viewer does not render a section, the link still lands on the
entry (Phase 2 behavior) with no flash — additive, never worse than Phase 2.

### Mixed-source runs (the one non-obvious bit)

Within a single Lord-I-Call or Aposticha run, consecutive stichera can come from different books
(an Octoechos sticheron, then a Menaion one). This is already handled because the assembler emits
**each sticheron as its own element with its own single `source`** — so each just gets its own ↗
to its own book. No aggregation.

### Coverage tracks encoding

Unencoded stichera emit as a single "[not yet entered — Track B]" placeholder rather than
per-sticheron resolved elements, so there is nothing to link until the data lands. The ↗ appears
on **resolved** propers only; feature coverage follows encoding progress. Not a blocker.

## Implementation — assembler (`hours-tool.jsx`)

The proper emit sites already set a `source` string and have tone/comm/pascha in scope. Two
viable attach strategies — pick one at build:

- **(A) Single post-assembly pass** `attachSourceRefs(elements, ctx)` at the end of the assembler:
  for each `movable` element with a book `source`, derive `kind` from the leading book word of
  `source` ("Menaion"/"Octoechos"/"Pentecostarion"), derive `el` from the element id prefix
  (`*-troparion`, `*-kontakion`, `v-lic-*`, `v-apost-*`), stamp `sourceRef`. One place, DRY,
  renderer stays clean. Keys off the existing source-string convention.
- **(B) Per-site** `sourceRef:` literals next to each `source:` assignment. More edits, no string
  parsing.

Recommend (A). Either way provenance is resolved in the assembler, never in the renderer.

Helper `sourceLinkFor(sourceRef, selectedDate)` reuses Phase 2's `dateQ` (`date=<d>&from=tool`):

```
menaion-daily   → /menaion?<dateQ>&comm=<MM-DD>&el=<el>
octoechos       → /octoechos?<dateQ>&tone=<N>&el=<el>
pentecostarion  → /pentecostarion?<dateQ>&pascha=<N>&el=<el>
oca             → external URL (new tab)        // defensive
general-menaion → null (render provenance note) // defensive
```

`&el=` is the only new param; everything else is the Phase-2 construction.

## Implementation — Reading-view affordance (`hours-tool.jsx`)

Render a quiet "↗ source" control for any movable proper with a linkable `sourceRef`. Placement:
inline with the existing header provenance string (`— {source}`), turning the provenance label
into the affordance, rather than the per-verse ▶Point/♫Score row (source is element-scoped, the
Point/Score row is verse-scoped). Visually subordinate — it's a study aid.

In-app links use SPA `navigate` (same tab, so the Phase-1 return strip + Back work). The OCA
defensive case opens a new tab. `general-menaion` renders a non-jump provenance note.

## Implementation — viewer `&el=` highlight (3 viewers)

Each viewer already deep-positions (Phase 2): `menaion-browser` `scrollToEntry` + `[monthData]`
effect; `octoechos-browser` active-tone; `pentecostarion-browser` `scrollToEntry`. Extend each so
that AFTER the scroll, if `?el=` present, it scrolls to and briefly highlights that section:

- **Menaion** — sections: Troparion, Kontakion, "Vespers — Lord I Have Cried", "Vespers — Aposticha".
- **Octoechos** — sections: Resurrectional Troparion, Sunday Kontakion, LIC stichera/dogmatikon.
- **Pentecostarion** — sections: Troparion, Kontakion, stichera.

One shared highlight util across the three (background flash ~1.2s). A no-`el` visit is unchanged.
Where a viewer doesn't render the requested section, no flash — it stays at the entry per Phase 2.

## Gate / build / version / commit

- Gate: `node tools/test_pointing_paths.mjs && node tools/test_sunday_vespers.mjs` (expect 71/71)
  then `node_modules/.bin/vite build`.
- Version: feature → MINOR bump. Phase 2 badge is **v0.20.8**, so this is **v0.21.0**. Add a
  `RELEASE_NOTES[0]` entry; commit prefix `v0.21.0:`.
- Commit order (separate concerns):
  1. `docs: phase 3 spec` (this file) — already committed; widened-scope revision is a follow-on
     docs commit.
  2. `v0.21.0: element-level source links — Menaion/Pentecostarion/Octoechos propers` — assembler
     `sourceRef` + `sourceLinkFor` + reading affordance + viewer `&el=` highlights.
  3. `docs: project notes — v0.21.0` — update `project_notes.md` (Library "remaining" item (2)
     reading-view source-link pilot → done, noting widened scope).
- Push token inline → immediately scrub remote → verify `git remote -v | grep push` clean.

## Files touched (expected)

- `src/components/hours-tool.jsx` (sourceRef attach + `sourceLinkFor` + reading affordance)
- `src/components/menaion-browser.jsx` (`&el=` highlight)
- `src/components/octoechos-browser.jsx` (`&el=` highlight)
- `src/components/pentecostarion-browser.jsx` (`&el=` highlight)
- `phase3_element_source_links_spec.md` (this file)
- `project_notes.md`
