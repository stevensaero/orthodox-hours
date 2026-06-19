# Orthodox Hours — Phase 2 Handoff: Library Deep-Positioning (all five viewers)

Written for a fresh session because the dev/repo tools were unavailable when this was authored.
This Drive copy is TRANSPORT ONLY. Per project discipline, the first action next session is to
commit this spec into the repo as `phase2_deep_positioning_spec.md` (commit: `docs: phase 2 spec`)
BEFORE writing any implementation.

---

## Goal of this pass

Make the Library shelf honest. The shelf already prints "Each book opens to the page this date
calls for," but today only the Psalter actually positions; every other book opens at its default.
This pass adds **deep-positioning on entry** to all five remaining viewers so each opens to the
date's content. (This is "open to the right place on entry" — NOT live re-page on date change,
which is a parked §8 behavior and must NOT ride along.)

## Locked decisions (Bill)

1. **Scripture card = SINGLE click.** It opens a **"Today's Readings"** landing in the Scripture
   viewer that composes EVERY passage the date calls for (Epistle + Gospel, plus any extra
   commemoration readings) as ONE continuous reading, rendered with the viewer's EXISTING
   split-gospel render path, with the viewer's native navigation fully intact. No per-passage
   links on the card; from the landing, the browser/viewer UI handles any further navigation.
2. **The lectionary/pericope data already exists** — it is exactly what the Liturgical Context
   panel renders on every date change. REUSE that source; do not build a new lectionary.
   Background: project files `pericope_layer_future_session.md` and `scripture_tool_specification.md`.
3. **All five viewers in one pass.**

## Two params to settle at the very start (recommendations)

- **Scripture handoff shape.** RECOMMEND: shelf resolves the day's readings from the pericope
  source, stashes them in `sessionStorage` under `oht_scripture_readings`, and navigates
  `/scripture?from=tool&readings=today`. The viewer consumes-once (like the existing `oht_handoff`).
  This avoids URL bloat with multiple refs and keeps the viewer "dumb" (renders what it's handed).
  Alternative: encode refs in the URL. Decide before coding.
- **Multi-commemoration grouping.** RECOMMEND: group BY commemoration (Saint A: Epistle then
  Gospel; Saint B: …), each group with a heading; a simple day is just Epistle then Gospel
  (reading order Epistle → Gospel within a group).

---

## Pre-work (standard session start)

1. Clone `stevensaero/orthodox-hours` (token in the kickoff prompt), set `git config user.email
   bill@stevensaero.com` / `user.name "Stevens Aero"`, scrub remote to the tokenless URL.
2. Read `project_notes.md`; confirm the version badge in `hours-tool.jsx` (`RELEASE_NOTES[0]`)
   matches the header. As of writing it is **v0.19.1**. If mismatch, STOP and flag.
3. Read project files `pericope_layer_future_session.md` and `scripture_tool_specification.md`.
4. In `hours-tool.jsx`, locate where the Liturgical Context panel renders the day's readings
   (grep: `Epistle`, `Gospel`, `pericope`, `reading`). Identify the field/helper that yields the
   day's refs from the date. **That is the single source the Scripture card reuses** — do not
   re-derive readings anywhere else.

## Shelf side — `hours-tool.jsx`, `buildLibraryBooks(liturgicalData, selectedDate)`

`dateQ` is currently `"date=" + selectedDate + "&from=tool"`. Extend each book's `to`
(guard any param that can be null/undefined — omit the param rather than emit "null"):

- **Menaion**: `"/menaion?" + dateQ + "&comm=" + mm + "-" + dd` (liturgicalData.mm/.dd — the day's
  primary commemoration).
- **Octoechos**: `"/octoechos?" + dateQ + "&tone=" + tone` (liturgicalData.tone; tone can be null
  on fixed great feasts — omit when null).
- **Pentecostarion**: `"/pentecostarion?" + dateQ + "&pascha=" + paschaOffset`
  (liturgicalData.paschaOffset; meaningful only within the Pentecostarion season — omit when out
  of range/null).
- **Tone Trainer**: `"/tone-trainer?" + dateQ + "&tone=" + tone` (omit when null).
- **Scripture**: per the chosen handoff shape. If sessionStorage approach, special-case Scripture
  in `LiturgicalLibrary`'s `open()` (the `host === "app"` branch): resolve today's readings from
  the pericope source, `sessionStorage.setItem("oht_scripture_readings", JSON.stringify(readings))`,
  then `navigate("/scripture?from=tool&readings=today")`.

Also upgrade each card preview (`pv`) from the placeholder to the real destination: Menaion → the
commemoration title; Octoechos / Tone Trainer → "Tone N"; Pentecostarion → the named day;
Scripture → the readings summary (e.g. "Rom 5:1–10 · Matt 6:22–33").

## Viewer side (each reads its param on mount; a direct, no-param visit must stay unchanged)

1. **Menaion** (`menaion-browser.jsx`, default export `MenaionBrowser`): read `?comm=MM-DD`. On
   mount `setActiveMonth("MM")`. The month data loads via the dynamic `MONTHS_WITH_DATA["MM"]()`
   import — so the scroll must fire AFTER `monthData` resolves and `entryRefs` are populated, not
   on mount. Use an effect keyed on `[monthData]` that, while a pending comm target exists, calls
   the existing `scrollToEntry("MM-DD")` (it already offsets by header height) then clears the
   pending target.
2. **Octoechos** (`octoechos-browser.jsx`, default export `OctoechosBrowser`): read `?tone=N`
   (validate 1–8). On mount set the active tone to N; the lazy `TONE_LOADERS` already drive content.
3. **Pentecostarion** (`pentecostarion-browser.jsx`, default export `PentecostarionBrowser`): read
   `?pascha=N`. After data loads, scroll to the entry whose pascha offset == N. If no
   `scrollToEntry` exists here yet, add one mirroring Menaion's (a ref map keyed by offset, with
   the same header-height scroll offset).
4. **Tone Trainer** (`tone-trainer.jsx`, default export `ToneTrainer`): read `?tone=N` (validate
   1–8). Apply ONLY on a bare `from=tool` visit with NO verse handoff. It must NOT interfere with
   the Point/Score `oht_handoff` flow (that path already sets the tone and shows the embedded verse
   view, and may redirect to score-print.html). Gate on "no `oht_handoff` verse present"
   (`embeddedVerseView` false). Then `setActiveTone(N)`.
5. **Scripture** (`scripture.jsx`, default export `Scripture`): when arriving with the readings
   handoff (`sessionStorage.oht_scripture_readings`, consumed once like `oht_handoff`), render the
   "Today's Readings" landing — each passage stacked under a heading (Epistle / Gospel /
   per-commemoration) and composed as one continuous reading using the SAME split-gospel renderer
   the viewer already uses (do NOT fork a new renderer). The `from=tool` ← Hours Tool strip stays;
   the book/chapter selectors and all native nav remain functional. A normal (no-handoff) visit is
   unchanged.

## Gate / build / version / commit

- Gate: `node tools/test_pointing_paths.mjs && node tools/test_sunday_vespers.mjs` (expect 71/71)
  then `node_modules/.bin/vite build`.
- Version: feature → **MINOR bump to v0.20.0**. Add a `RELEASE_NOTES[0]` entry; commit prefix
  `v0.20.0:`.
- Commit order (separate concerns):
  1. `docs: phase 2 spec` — commit this spec as `phase2_deep_positioning_spec.md`.
  2. `v0.20.0: library deep-positioning — five viewers open to the date` — shelf + viewer changes.
  3. `docs: project notes — v0.20.0` — update `project_notes.md` (bump header, move the Library
     "remaining" item (1) deep-positioning to done).
- Push with the token inline in the push URL, immediately `git remote set-url origin` to the
  tokenless URL, verify `git remote -v | grep push` is clean.

## Guards / gotchas

- `tone` and `paschaOffset` are null on some dates — omit the param, never pass "null".
- Menaion scroll must wait for the dynamic month import (fire on data-ready).
- Do not regress the Tone Trainer Point/Score handoff or its score-print redirect.
- Scripture must reuse the split-gospel renderer; no new renderer.
- Keep the Phase 1 return strips and PSB same-tab behavior intact.
- This is "open to the right place on entry" only. Live re-page on date change, the persistent
  in-viewer context strip, PSB-into-React, Tone Trainer verse payload, and Score Print return all
  stay PARKED (§8) — do not start them in this pass.

## Files touched (expected)

- `src/components/hours-tool.jsx` (buildLibraryBooks + LiturgicalLibrary open())
- `src/components/menaion-browser.jsx`
- `src/components/octoechos-browser.jsx`
- `src/components/pentecostarion-browser.jsx`
- `src/components/tone-trainer.jsx`
- `src/components/scripture.jsx`
- `phase2_deep_positioning_spec.md` (new, repo root)
- `project_notes.md`
