# Orthodox Hours — Phase 3 Handoff: Reading-view element-level source links (Troparion/Kontakion pilot)

Written for a fresh session (dev/repo tools were unavailable when authored). This Drive copy is
TRANSPORT ONLY. Per project discipline, the first implementation action is to commit this spec into
the repo as `phase3_element_source_links_spec.md` (commit: `docs: phase 3 spec`) BEFORE any code.

---

## Where we are

- Phase 1: Library bookshelf (book-level), flip, return strips, PSB same-tab.
- Phase 2: deep-positioning — every book opens to the date (Menaion `?comm=MM-DD`, Octoechos
  `?tone=N`, Pentecostarion `?pascha=N`, Tone Trainer `?tone=N`, Scripture "Today's Readings"
  composed landing). The shelf now tells the truth at the BOOK level.
- Phase 3 (this pass): the ELEMENT level. In the Reading view, each assembled movable element
  carries a "↗ source" jump to the exact place in the source viewer it came from. The element-level
  counterpart to the shelf. **Pilot scope: Troparion + Kontakion only** (stichera, canon, etc. come
  later). This is the navigational complement to the per-element rubrical annotation (the `note` /
  Fekula citation) that every movable element already carries.

## The core idea (build on Phase 2, don't reinvent)

An element link is a Phase-2 deep-positioning link aimed at a specific element instead of the book
default, PLUS a new sub-element anchor. The assembler ALREADY resolves where each Troparion/
Kontakion comes from while walking the fallback chain — the Phase 3 work is to (a) ATTACH that
resolution to the emitted element as a `source` object, (b) render a small "↗ source" affordance in
the Reading view, (c) add an `&el=` sub-anchor to the viewers so they don't just scroll to the
date's entry but highlight the targeted field.

Fallback chain → provenance (from project rules):
daily Menaion proper → General Menaion by saint type (name-substituted) → OCA
(oca.org/saints/troparia/YYYY/MM/DD). On Sundays the resurrectional troparion/kontakion is
tone-based (Octoechos); the saint's is Menaion. So a single Troparion element can resolve to
Menaion, Octoechos, General Menaion, or OCA.

`source` object to attach per pilot element (shape suggestion):
- `{ kind: 'menaion-daily', comm: 'MM-DD', el: 'troparion'|'kontakion' }`  → in-app, Menaion
- `{ kind: 'octoechos',     tone: N,        el: ... }`                      → in-app, Octoechos
- `{ kind: 'pentecostarion',pascha: N,      el: ... }`                      → in-app, Pentecostarion
- `{ kind: 'general-menaion', generalType: '<saint type>', el: ... }`      → no in-app viewer
- `{ kind: 'oca', url: 'https://oca.org/saints/troparia/...' }`            → external

## Locked decision (Bill)

- Phase 3 = reading-view element-level source links, pilot scoped to Troparion + Kontakion.

## Open decisions to settle at the start (recommendations)

1. **Anchor granularity.** RECOMMEND: add `&el=troparion|kontakion`; the viewer scrolls to the
   date/tone entry (Phase 2) and then highlights the specific field (brief background flash). Without
   this it only lands on the entry, which is just Phase 2 again — the highlight is what makes it
   "element-level."
2. **Non-in-app provenance.** RECOMMEND for the pilot: `oca` → external link, new tab (the assembler
   already holds the URL from the fallback); `general-menaion` → render the provenance as a non-jump
   note (no in-app General Menaion viewer exists; its fallbacks are Drive PDFs). i.e. only emit a
   clickable "↗ source" when `kind` is menaion-daily / octoechos / pentecostarion / oca. Decide.
3. **Affordance placement.** RECOMMEND: a small "↗ source" control at the element's right edge,
   consistent with the existing per-verse ▶ Point / ♫ Score controls — same row pattern, not a new
   block. Keep it quiet (it's a study aid, not a primary action).

## Pre-work (standard session start)

1. Clone `stevensaero/orthodox-hours`, set git identity (bill@stevensaero.com / "Stevens Aero"),
   scrub remote to tokenless.
2. Read `project_notes.md`; confirm the `hours-tool.jsx` version badge (`RELEASE_NOTES[0]`) matches
   the header. Phase 2 should have landed it at ~v0.20.x. If mismatch, STOP and flag.
3. Confirm Phase 2 is actually in: the viewers read `?comm` / `?tone` / `?pascha`, and Scripture has
   the "Today's Readings" landing. Phase 3 depends on that param contract.
4. Read this spec, plus project files `scripture_tool_specification.md` and
   `pericope_layer_future_session.md` for context on source provenance.

## Implementation — assembler / Reading view (`hours-tool.jsx`)

1. **Find the resolution point.** Grep for where Troparion and Kontakion are resolved through the
   fallback chain (terms: `troparion`, `kontakion`, `General Menaion`, `oca.org/saints/troparia`,
   the fallback/substitute logic). This is where provenance is KNOWN.
2. **Attach `source`.** At that point, emit a `source` object (shape above) onto the assembled
   element alongside its text and its existing `note`/citation. Do not re-derive provenance in the
   renderer — resolve once, carry it.
3. **Build the link** from `source` (a helper `sourceLinkFor(source, selectedDate)`):
   - menaion-daily → `/menaion?date=<d>&from=tool&comm=<MM-DD>&el=<el>`
   - octoechos     → `/octoechos?date=<d>&from=tool&tone=<N>&el=<el>`
   - pentecostarion→ `/pentecostarion?date=<d>&from=tool&pascha=<N>&el=<el>`
   - oca           → the external URL (open new tab)
   - general-menaion → no link (render provenance note only), per decision 2
   Reuse Phase 2's `dateQ`/param construction; `&el=` is the only new param.
4. **Render the affordance** only for pilot elements (Troparion/Kontakion) that have a linkable
   `source`. In-app links use the SPA navigate (same tab, so Back/return-strip works); the OCA case
   opens a new tab. Keep it visually subordinate, at the element's right edge.

## Implementation — viewer side (the new `&el=` sub-anchor)

Extend the Phase 2 deep-positioning in each in-app viewer so that, AFTER it scrolls to the entry, it
highlights the targeted field:

1. **Menaion** (`menaion-browser.jsx`): after `scrollToEntry("MM-DD")`, if `?el=` present, scroll to
   and briefly highlight that field within the entry (troparion/kontakion). Extend `scrollToEntry`
   (or add a follow-on effect) to accept an optional field key; add a per-field ref or a derived
   anchor id; apply a short highlight class (e.g. background flash ~1.2s).
2. **Octoechos** (`octoechos-browser.jsx`): after setting the active tone, if `?el=` present,
   highlight the resurrectional troparion/kontakion of that tone.
3. **Pentecostarion** (`pentecostarion-browser.jsx`): after scrolling to the pascha-offset entry, if
   `&el=` present, highlight that field.
   Keep one shared highlight style/util across the three so it's consistent. A direct visit with no
   `&el=` is unchanged (still lands at the entry per Phase 2).

## Gate / build / version / commit

- Gate: `node tools/test_pointing_paths.mjs && node tools/test_sunday_vespers.mjs` (expect 71/71)
  then `node_modules/.bin/vite build`.
- Version: feature → MINOR bump (next minor after Phase 2; **v0.21.0** if Phase 2 is v0.20.x — read
  the badge and bump the next minor). Add a `RELEASE_NOTES[0]` entry; commit prefix `vX.Y.0:`.
- Commit order (separate concerns):
  1. `docs: phase 3 spec` — commit this spec as `phase3_element_source_links_spec.md`.
  2. `vX.Y.0: element-level source links — Troparion/Kontakion pilot` — assembler provenance + reading
     affordance + viewer `&el=` anchors.
  3. `docs: project notes — vX.Y.0` — update `project_notes.md` (move the Library "remaining" item
     (2) reading-view T/K source-link pilot to done).
- Push with the token inline, immediately scrub remote, verify `git remote -v | grep push` clean.

## Guards / gotchas

- Resolve provenance ONCE at assembly; never re-derive in the renderer.
- In-app links must use SPA navigation (same tab) so the Phase 1 return strip + Back work; only the
  OCA case is a new tab.
- `&el=` is additive — a no-`el` visit must behave exactly as Phase 2.
- Don't emit a clickable link for sources with no destination (general-menaion) — show the provenance
  note instead, per decision 2.
- Pilot is Troparion + Kontakion ONLY. Do not wire stichera/canon/aposticha this pass.
- Keep the highlight subtle; this is a teaching aid.

## Explicitly OUT of scope (future, do not start here)

- Other element types beyond Troparion/Kontakion (stichera, canon, sessional hymns, aposticha).
- Coverage computed from data vs. the declared card strings.
- §8 connective tissue: persistent in-viewer context strip, live re-page on date change with
  manual-nav override, PSB into the React shell, Tone Trainer verse-payload intake, Score Print
  conditional return.

## Files touched (expected)

- `src/components/hours-tool.jsx` (provenance attach + `sourceLinkFor` + reading affordance)
- `src/components/menaion-browser.jsx` (`&el=` highlight)
- `src/components/octoechos-browser.jsx` (`&el=` highlight)
- `src/components/pentecostarion-browser.jsx` (`&el=` highlight)
- `phase3_element_source_links_spec.md` (new, repo root)
- `project_notes.md`
