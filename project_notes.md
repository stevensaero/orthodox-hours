# Orthodox Hours Tool — Project Notes
**Tool version: v0.21.2** | **Tone Trainer: v0.25.28** | Last synced: June 19, 2026

**Liturgical Library — Phase 1 shelf LANDED (v0.18.0).** `bookshelf_spec.md` (repo root).
A Reading ⇄ Library flip (single icon by SERVICE) toggles the Hours-tool body between the
assembled service and a date-aware bookshelf; header/date/context stay fixed. Six books on
three shelves (Hymnography / Order & Psalmody / Chant), each paged from the live
`liturgicalData` and linking to its own viewer with a `?date=…&tone/pascha/comm` query:
Menaion, Pentecostarion, Octoechos, Psalter, Tone Trainer (in-app routes) and the Priest's
Service Book (new window, `public/PriestsServiceBook.html`, palette unified to the viewer
theme). Horologion omitted (no viewer yet). Phase 1 is decoupled: viewers open at their
default position — per-viewer deep-positioning from the query is a fast-follow (only the
Psalter reads its param today). Next: Reading-view Troparion/Kontakion "source of truth"
links (the in-text element→source pilot), then extend element by element.

**Library follow-up fixes:** v0.18.1 — flip animation fixed (forced-reflow so the body
actually rotates instead of snapping; the icon had been flipping alone) and the tool now
remembers its view (reading vs library) in `sessionStorage`, so returning from a viewer
lands back on the Library if that's where you left it. v0.18.2 — control-bar date renders
compact `MM.DD.YYYY` on narrow screens (≤560px) to keep the bar on one line; medium
`Jun 19, 2026` on larger screens. Date is now a custom display over an invisible native
date input (tap still opens the OS picker; `showPicker()` on click for desktop).

**Library — completed / remaining (as of v0.20.0):**
- DONE: spec committed; PSB intaken to `public/` + palette unified; shelf built (flip toggle,
  date-aware previews from `liturgicalData`, links out with the context query). **7 books now**
  (Holy Scripture added in v0.19.0, Order & Psalmody). Fixes: flip animation (forced reflow),
  view-memory (sessionStorage), mobile compact date, narrow control-bar fit (v0.18.3),
  flip header-bleed/cross-browser via removing preserve-3d (v0.18.4), flip collapses an
  expanded context panel first (v0.19.0). Return strip: bookshelf links pass `from=tool`, and
  the **Menaion/Octoechos/Pentecostarion browsers now carry the sticky ← Hours Tool strip**
  (shared `hours-return-strip.jsx`, wrapped at the route in `App.jsx`); Psalter / Scripture /
  Tone Trainer already had their own.
- DONE (v0.20.0): **per-viewer deep-positioning — all five remaining viewers open to the date**
  (`phase2_deep_positioning_spec.md`, repo root). Menaion reads `?comm=MM-DD` → `setActiveMonth`
  + a `[monthData]`-keyed effect fires the existing `scrollToEntry` once the dynamic month
  import resolves; Octoechos `?tone=N` → `setSelectedTone`; Pentecostarion `?pascha=N` → a
  `[pentData]`-keyed scroll via its existing offset `scrollToEntry`; Tone Trainer `?tone=N` →
  `setActiveTone` gated on `!embeddedVerseView` (never touches the Point/Score handoff or its
  score-print redirect). **Scripture is the single-click "Today's Readings" landing**: the shelf
  resolves the day's E/G (cycle `getDailyReading` + menaion feast proper — the same source the
  context card uses), stashes them in `sessionStorage` `oht_scripture_readings`, and navigates
  `/scripture?from=tool&readings=today`; the viewer consumes-once and composes the passages
  through the existing split-gospel `ReadingView` (no forked renderer), grouped Epistle-then-
  Gospel, day reading first, native nav left live. null `tone`/`paschaOffset` omit the param.
- DONE (v0.21.0): **Reading-view element-level source links** (`phase3_element_source_links_spec.md`,
  repo root). Every assembled movable proper whose text comes from an in-app data book —
  Troparion, Kontakion, Lord-I-Have-Cried stichera/doxasticon/theotokion/dogmatikon, Aposticha
  stichera/doxasticon/theotokion — carries a quiet "↗ source" link to the Menaion/Octoechos/
  Pentecostarion viewer at that day/tone/offset, which flashes the targeted section. (Widened from
  the original Troparion+Kontakion pilot at Bill's call.) Provenance resolves ONCE at assembly
  (structured `sourceRef` + ready `sourceHref` stamped in the post-assembly map pass alongside
  psalter/scripture hrefs; helpers `buildSourceRef`/`sourceLinkFor`/`elFromId`/`kindFromSource` in
  `hours-tool.jsx`); the renderer never re-derives. Links reuse the Phase-2 deep-positioning
  contract and add an `&el=` sub-anchor (`troparion|kontakion|lic|aposticha`); the three viewers
  read it via the shared `src/lib/el-highlight.js` and flash the `[data-el=…]` section after the
  Phase-2 scroll. **Vespers propers resolve against the NEXT liturgical day** (the day Vespers
  opens). Mixed-source stichera runs link per-sticheron to their own book; unencoded placeholders
  carry no link (resolved propers only); `general-menaion`/`oca` are guarded (defensive) but the
  current T/K engine emits only Menaion/Octoechos/Pentecostarion. Next element types (canon, etc.)
  inherit this for free once Matins is assembled.
- REMAINING: coverage computed from data (Menaion/Pentecostarion ranges) vs declared strings.
- DONE (v0.20.1): shelves regrouped — **Hymnography · Scripture & Psalmody · Chant · Guides**
  ("Order & Psalmody" renamed; PSB pulled into its own "Guides" shelf; Scripture + Psalter
  together). **Pentecostarion out-of-scope chip**: the shelf advertises deep-positioning only
  when the day's Pascha offset is an *encoded* entry (`PENT_ENCODED_OFFSETS` = {19, 35–56, 63},
  mirrored in `hours-tool.jsx` to avoid pulling the 312 KB Pentecostarion chunk into the main
  bundle). Otherwise (e.g. P+68, past All Saints) the chip greys, reads "Out of scope · Opens at
  the start," and drops the `&pascha=` param so the viewer opens at its default. The Menaion is
  deliberately NOT treated this way — it governs every day; its partial coverage is unencoded
  data, not a seasonal book like the Pentecostarion/Triodion.
- DONE (v0.20.2): **flip preserves scroll position** — the Reading⇄Library flip no longer
  force-scrolls to just below the masthead (the v0.19.1 behavior). `runFlip` captures
  `window.scrollY` before the body swap and restores it after (both the animated and
  reduced-motion paths), so the masthead's visibility is unchanged: on screen → stays, scrolled
  past → not re-revealed (browser clamps if the new face is shorter; masthead still stays off).
  Also **retired the footer Scripture / Tone Trainer buttons** — both are reached from the
  Library shelf (Scripture also from the context card / in-text links); footer keeps only How
  This Tool Works + Glossary.
- DONE (v0.20.3): **data-browser return strips fixed across Menaion / Pentecostarion / Octoechos.**
  The shared `hours-return-strip.jsx` now (a) publishes its height to a CSS var
  `--hours-return-strip-h` (top strip only; `useLayoutEffect` + `ResizeObserver`, cleared on
  unmount), and (b) centers its content in the browsers' 960px / 1.5rem column so the "← Hours
  Tool" link aligns with the title and body left edge. Each browser's own sticky header changed
  `top: 0` → `top: var(--hours-return-strip-h, 0px)` so it pins *below* the strip instead of
  riding up over it (was: the strip disappeared on scroll). The redundant in-header
  `<a href="/orthodox-hours/">← Hours Tool</a>` (a fresh nav to home, not history.back()) was
  removed from all three. **Hours-tool service change** now scrolls to the top of the service
  (`mainHeaderRef.offsetHeight`, controls bar pinned) instead of page-top, so switching service
  no longer re-reveals the masthead.
- DONE (v0.20.4): How-It-Works "(open)" links for Psalter / Menaion / Pentecostarion / Octoechos
  now carry `?from=tool` so they open with the return strip (Scripture already did). **Tone
  Trainer adopted the unified `HoursReturnStrip`** — wrapped at its route in `App.jsx` (top +
  bottom), and its own in-header/footer `← Hours Tool` links + the `cameFromHours` memo removed.
  Safe because the Point/Score hand-off already navigates with `?from=tool`
  (`point-score-controls.jsx`), so the strip shows on that path too; the Tone Trainer has no
  sticky top bar, so no header offset was needed.
- DONE (v0.20.5): three fixes. (a) **Refresh no longer scrolls the masthead off** — the
  `[selectedServiceKey]` scroll effect was firing on initial mount too (regression from v0.20.3's
  scroll-to-service-top); now guarded with `if (from === selectedServiceKey) return;` so it only
  scrolls on an actual service change, not on load. (b) **Body flip ignores
  `prefers-reduced-motion`** — Win11 with "Animation effects" off makes Chrome/Edge report
  `reduce`, which snapped the JS body flip while the icon's CSS transition (ungated) kept
  flipping; the `reduce` skip was removed so the body matches the icon. (Accessibility note: this
  intentionally overrides the OS reduced-motion preference for this one ~0.44s transition, to
  match the icon — revisit if both flips should honor it together.) (c) Context-collapse flip
  delay trimmed 480ms → 250ms.
- DONE (v0.20.6): three fixes. (a) **Data browsers no longer reflow into a phone-width column**
  — each `/menaion`, `/pentecostarion`, `/octoechos` route is wrapped in a `min-width: 760px`
  div in `App.jsx` (wrapping the return strip + browser together so a `width:100%` strip stays
  aligned under horizontal scroll). Below 760 the page scrolls sideways as one piece; the month
  tabs never wrap, so the header can't oscillate and trigger the "Maximum update depth" white
  screen seen in portrait. 760 is a single tunable number. Tone Trainer stays fluid. (b)
  **Menaion sticky-cutoff fix** — `scrollToEntry`, the day sidebar's sticky `top`, the EntryCard
  date header's sticky `top`, and the sub-entry threshold now add the `--hours-return-strip-h`
  strip height (module-level `stripOffsetPx()` / `STRIP_VAR`), so opening a day lands it below
  the strip + month nav instead of behind them. (c) **Glossary tooltips render above the sticky
  bar** — `Tooltip` now portals its popup to `document.body` (position: fixed at the term,
  z 9999), escaping the service body's `will-change`/`perspective` stacking context that had
  trapped it (z100) below the z40 controls bar.
- KNOWN FRAGILITY / INSURANCE (noted v0.20.6, not yet implemented): the data-browser routes
  (`/menaion`, `/pentecostarion`, `/octoechos`, `/tone-trainer`) have **no React error
  boundary** — any render error white-screens with no message. The only `ErrorBoundary` in
  `App.jsx` is hardcoded to "Scripture Error" and wraps only the Scripture routes. v0.20.6's
  `min-width: 760px` fix targets the **known** crash trigger (narrow-width header oscillation →
  "Maximum update depth"), and should resolve the portrait blank screen at its source. If
  portrait still white-screens after this, the next step is a generic error boundary around
  these routes — it both prevents the blank screen and surfaces the error text for diagnosis,
  rather than masking it. Cheap to add; held back deliberately to keep v0.20.6 focused on the
  root-cause fix.
- DONE (v0.20.7): **service-select from the Library returns to the Reading.** Picking a service
  from the SERVICE selector while in Library view now flips back to the Reading for that service
  (icon turns with it) and lands at the top of the service. Implemented by wrapping the
  `ServiceSelector` `onChange` (capture `view === "library"` → `setSelectedServiceKey` →
  `toggleView(false)`) plus a new `keepScroll` param on `toggleView`: when false the flip skips
  its scroll-restore so the existing `[selectedServiceKey]` effect's scroll-to-service-top wins
  instead of pinning the Library's offset. (Edge: re-picking the *same* service while in Library
  flips to Reading but, since the service-change effect doesn't fire on an unchanged key, holds
  the current offset rather than re-topping — accepted as a minor case.)
- DONE (v0.20.8): **Pentecostarion browser sticky-cutoff fix** — mirrored the v0.20.6 Menaion
  fix into `pentecostarion-browser.jsx` (same `stripOffsetPx()` / `STRIP_VAR` helper): the
  `scrollToEntry` target, the offset-picker sidebar's sticky `top`, and the `PentEntryCard`
  day-heading's sticky `top` now add `--hours-return-strip-h`, so opening an offset lands below
  the season nav and nothing clips behind the sticky header. (Its header already pinned below the
  strip.) NOTE: the Octoechos browser shares the same pattern and may want the same treatment if
  the cutoff shows there too — not yet applied.
- PARKED (spec §8): persistent context strip across viewers, live re-page on date change,
  manual-nav-vs-date override, PSB into the React shell, Tone Trainer verse-payload intake,
  Score Print conditional return.

**Sunday Vespers — unified engine (P0 signed off; P1 engine LANDED in v0.16.0).** `sunday_vespers_spec.md`
(repo root) specs one engine for ALL resurrectional Sundays — ordinary Octoechos
(post-Pentecost), overlay (`all_saints_sunday`), and Pentecostarion — replacing the prior
split (Pentecostarion branch + rank-based weekday branches) that made ordinary Sundays with
a non-simple saint render as weekday services (concrete break: June 28, Tone 3, Cyrus & John
§2C). Grounded in the OCA `OCA_service_documents/*-tt` docs.
**P1 SHIPPED (v0.16.0):** `assembleVespers` now has a dedicated `isSunday && !isPentecostarion`
branch for LIC and aposticha. LIC = resurrection (Octoechos `sat.lic`, sliced 7/6/4 by rank) +
commemoration (Menaion `stichera_lord_i_call`, via `expandSticheraToCount`); Glory = saint
doxasticon or, if none, "Glory… now and ever" together (§8.2 no-Glory rule); Both-now = `sat.dogmatikon`
always. Aposticha = 4 resurrection (`sat.aposticha`) + Glory (saint or Octoechos resurrectional) +
Both-now = `SUNDAY_APOSTICHA_THEOTOKIA[gloryTone]` (NEW stub table in octoechos/index.js, blessed in
schema; all 8 null → flagged until P2). Troparia (§5) were already correct (dismissal theotokion in
saint-troparion tone). Resurrection renders fully from existing data; commemoration texts complete
as Menaion saints are encoded. Pentecostarion/overlay branches untouched (Jun 14 byte-identical).
Structural test: `tools/test_sunday_vespers.mjs`.
**Research basis (all confirmed from real OCA docs):**
- LIC split: simple 7+3 (Jun 21), six-stichera 6+4 (Jun 28), doxology 6+4 (Jul 8 2018 Procopius),
  polyeleos 4+6 (Oct 9 2022 Tikhon; Oct 6 2019 Innocent), vigil 4+6 (Nov 30 Andrew). Litya present =
  4+6; absent = 6+4/7+3.
- Three DISTINCT theotokia tables, never conflate: LIC Both-now = tone-of-week Dogmatikon; aposticha
  Both-now = theotokion in the aposticha-Glory tone (fixed per-tone 8-set, St. Sergius Octoechos
  appendix); troparia Now-and-ever = dismissal theotokion in saint-troparion tone (§I).
**§8.1/§8.2/§8.3 RESOLVED. §3.1 generalized** (multi-commem: Oct 26 3+3+4 with secondary
"of-the-Lord" troparion displacing the dismissal theotokion; two-minor-commem 3+3 — Nov 3 2019 Glory
to senior, Nov 9 2025 no-Glory) — out of P1, commemoration-as-a-list later. **OCA-primacy** logged
(§3.2, Oct 9 2022 Tikhon over James + 7th-Council transfer).
**Remaining (both out of P1):** §8.4 Great-Feast-on-Sunday precedence; §8.5 Pentecostarion-Sunday
regression guard (P4). **P2 data backfill status (v0.16.3–v0.16.4 session, June 14 2026):**
- Check C (LIC stichera completeness) now passes with **zero warnings** across all encoded June and July entries.
- June simples encoded (v0.16.4): 06-15 Amos T2, 06-16 Tichon T8, 06-17 Manuel/Sabel/Ismael T4+Glory T8, 06-18 Leontius T8+Glory T1, 06-19 Jude (no-PDF note), 06-20 Methodius T4, 06-21 Julian T4+Glory T6, 06-22 Eusebius T8, 06-23 Agrippina T4, 06-26 David T8+Glory T6, 06-27 Sampson T1+Glory T1. 06-28 Cyrus & John repeat marker added (first sticheron repeatIndex:0 for Sunday 4-slot fill).
- July entries encoded (v0.16.4): 07-02 St John Maximovich vigil 8 stichera T6 (from 06-19.pdf), 07-03 Hyacinth T8, 07-14 Nicodemus polyeleos 6 stichera T4+T8 + Glory T6 + Both-now Dogmatic T6, 07-15 Juvenal T1+Glory T6.
- Menaion browser (v0.16.3): secondary commemorations now render full hymnography via shared `EntryHymnography` component.
- **RLE pilot (v0.16.12):** 06-17 Manuel, Sabel & Ismael texts swapped from St. Sergius to the RLE
  (Lambertsen / Monk Joseph) translation — a test of leaning on RLE sources. First Menaion entry stored
  in the native OCA pointing dialect (`| // [..]`) instead of St. Sergius `* /**`, with Tier-3 director
  pointing on every pointed field (`director: true`; spans verified at 300 dpi). Added the RLE Now-and-ever
  Stavrotheotokion (T8, mel. "O most glorious wonder") as `lic_theotokion` — note this is data capture shown
  in the Menaion browser; the §2A assembler still renders the Octoechos tone-of-week Both-now, because no
  Menaion `lic_theotokion` is read on the §2A weekday path. Rank/tones/Matins format unchanged; RLE confirms
  them. **Open follow-up (rubrical, Bill's call):** whether the §2A Both-now path should prefer a Menaion-
  supplied (Stavro)theotokion when present so it surfaces in the assembled service.
- **Still open — SUNDAY_APOSTICHA_THEOTOKIA (8 stubs, tones 1–8):** sourced from St. Sergius Octoechos appendix. Texts not found in `octoechos_vespers.txt` (which covers weekday data only) or `octoechos-data.js`. Require the actual Sunday Vespers PDF appendix section. T8 text confirmed by spec ("O unwedded Virgin, who ineffably didst conceive God in the flesh…") — needs all 8. Stubbed null; engine falls back gracefully and flags.
- **RESOLVED (v0.16.5):** `SUNDAY_APOSTICHA_THEOTOKIA` all 8 tones filled from `common_theotokia/Theotokia.pdf` (St. Sergius Common Theotokia). Source section: "Theotokia in the Eight Tones, chanted when there is a Doxasticon for the Saint in the Menaion: Both Now and Ever..., On Sunday evening at Vespers Aposticha, in Tone N." Note: the spec's T8 quote ("O unwedded Virgin…") is the Resurrectional Theotokion ("At the Aposticha", used when NO saint doxasticon) — a distinct text from the saint-doxasticon table now encoded. Sunday Vespers now renders fully with no unresolved placeholders.

**Outline + Evening Litany fixes (v0.15.31).** (1) `isPlaceholder` in ServiceOutline no
longer uses `text.startsWith('[')` — that collided with OCA director-pointed text (the Tone 1
Kekragarion begins "[Lord], I call upon Thee…"), falsely reddening the "Lord I Have Cried"
row. It now keys on `el.unresolved === true` / `type==='placeholder'` (+ "not yet"), which
every real stub already carries. (2) The outline IntersectionObserver now observes every row
(mirroring the row dedup) instead of only `OUTLINE_MAJOR_IDS`, so label-derived rows (Litiya
Stichera/Doxasticon/Petitions) highlight on scroll, not just on click. (3) Evening Litany
head-bowing now renders the Chanters' "And to thy spirit." after "Peace be unto all."
NOTE: dialect — used "thy" to match the existing LITIYA_PEACE_RESPONSE constant and the
adjacent "To Thee, O Lord". DECISION (this session): keep the thy/thou Slavonic-traditional
dialect throughout; no global switch to "your". Settled — not an open question.

**LIC Both Now = resurrectional Dogmatikon on the All Saints Sundays (v0.15.30).**
The Second Sunday after Pentecost (P+63, All Saints of NA/Russia) is classified
`season="pentecostarion"` so its overlay governs, hence `isPentecostarion===true` and the
"Lord I Have Cried" Both Now renders through the Pentecostarion branch. That branch had no
dogmatikon path: with no `pentEntry.lic_theotokion` encoded it fell to `LIC_THEOTOKIA[tone]`
(the weekday theotokion — Tone 1 surfaced "O all-hymned Virgin… Moses… the bush…" instead of
the Tone 1 Dogmatikon "Let us praise the Virgin Mary!"). Fix: when `hours_format ===
'all_saints_sunday'` and no appointed `lic_theotokion`, the Both Now now reads the tone's
resurrectional Dogmatikon from `getOctoechosVespers(tone,'sat').dogmatikon`. Scoped to
`all_saints_sunday` (covers P+56 and P+63 in any tone). NOT yet applied to: (a) the Paschal-
season `pentecostarion_sunday` Both Now — verify vs Fekula §4B; (b) the parallel non-overlay
case where `octoDay` is gated null by a six-stichera+ Saturday saint on an ordinary-season
Sunday (lines ~3766–3795 use the gated `octoDay`; should use an ungated
`getOctoechosVespers(tone, licDayKey)` like the fix above) — that path also takes all-Menaion
LIC stichera for such Sundays, hinting at a broader Sunday-with-saint issue to verify first.

**Kathisma spacing (v0.15.28).** "Blessed is the Man" now renders each verse as its own
paragraph (margin ~0.5rem, line-height 1.6) instead of pre-wrap `\n\n` blank lines (~1.7rem).
Contained to the `blessedIsMan`-flagged element; nothing else changed.

**Dismissal — reader form SHIPPED (v0.15.29); Great/Little superseded by Hieratikon migration (§17).**
The Reader's Service dismissal (Fekula Ch. 10) now flows through the unified
`buildDismissalText` (reader-aware) across Vespers / First Hour / Typica / Post-Communion —
fixes the ad-hoc Sunday "of our Lord, God, and Savior Jesus Christ" divergence (Ch. 10 has
only the saint+temple slot) and the hardcoded `(and of the patron of this temple,)` that
ignored the dedication selector (`templeDedication` now threaded into `assembleHour`).
Probe `tools/probe_dismissal.mjs` 5/5; gate 13/13; build clean.
Items 2/4 resolved against sources: festal afterfeast phrases fold into the Hieratikon
migration; Saturday departed **CLOSED** (neither Hieratikon nor the churchmotherofgod OCA
reference has a departed clause in the отпуст — it's the Octoechos/Liturgy kontakion).
**Next pass = §17 Hieratikon dismissal migration:** adopt the Priest's Service Book model
(per-day daily forms with Apostles every day + theme positioned by rank-order; festal
overrides gated to feast-and-afterfeast; lesser dismissal for Compline/Midnight/First Hour;
celebrant clause moved to right-after-Apostles), retiring the rank-driven Great/Little axis.
Source files in Drive `Hieratikon/`. See `dismissal_assembler_spec.md` §16–§17.

--- superseded plan below (historical) ---

**Weekday dismissal — findings & plan (next session).**
Source review (Fekula Ch.6 + Ch.10, OCA 2021 Vespers, HTM Horologion) for the weekday отпуст:
- **Q2 RESOLVED:** Fekula Ch.6 — stavrotheotokia (Cross) are used on **both Wed and Fri**.
  So Cross-on-Wed-and-Fri in the Little day-sets is correct for Russian/OCA usage, not an
  Antiochian artifact. The day-of-week *themes* (Mon Bodiless Powers, Tue Forerunner, Wed/Fri
  Cross, Thu Apostles + St. Nicholas, Sat Martyrs/Fathers) are the universal Octoechos weekly
  cycle — **the set is sound; only the *wording* differs by recension.**
- **Reader-mode weekday form is fully specified (Fekula Ch.10):** "More honorable… / Glory…
  Now and ever… Lord, have mercy (thrice), Lord, bless! / Through the prayers of our holy
  fathers, *of (the saints of the day and of the temple)*, and of all the saints, Lord Jesus
  Christ, Son of God, have mercy on us. Amen." Our current reader branch omits the saint+temple
  insertion and the lead-in — concrete sourced fix.
- **OCA wording migration is BLOCKED on a source:** the OCA 2021 Vespers text confirms the
  dismissal *structure* but defers the variable text ("the priest pronounces *the appropriate
  Dismissal*") — it does not print the day-of-week отпуст wording. Need an OCA Liturgikon /
  priest's Service Book / dedicated OCA dismissals reference on Drive before migrating strings.
  Antiochian wording stays until then (already flagged in-code).

Planned work items (sourced; spec → code → probe → push), none blocked on the OCA source:
1. Fold reader-mode weekday dismissal into the unified engine (Fekula Ch.10 — saint+temple+lead-in).
2. Weekday afterfeast characteristic phrase: feast→phrase table (Theophany/Transfiguration/
   Nativity/Meeting/Elevation etc.) keyed on the active feast period; front-prefix currently
   only fires Sunday/Ascension/Pentecost.
3. Great vs Little weekday edges: decide Doxology-rank weekday (Great or Little; `isHighRank`
   currently = polyeleos/vigil only); confirm vigil-served trigger. `rank` field is present in
   Menaion data (simple/six_stichera/doxology/polyeleos/vigil).
4. Saturday set: verify inclusion of the departed / "all saints."
Open questions for Bill: Doxology weekday Great-or-Little?; Saturday include the departed?;
can he source an OCA Liturgikon/dismissals text for the wording migration?


assembler (`buildDismissalText`) for Vespers + Typica + Post-Communion; the two old
divergent builders are gone. Characteristic phrase is a true front prefix on "Christ our
true God" (fixes the malformed Sunday/festal dismissal); Great vs Little keyed on
vigil-vs-Vespers-alone (Fekula) with the Little day-of-week intercession set keyed on the
opened/liturgical day; temple patron from the dedication selector (italic *(Temple
Commemoration)* when unset); saint(s) of the day; Post-Communion celebrant clause
(Chrysostom / Basil / Gregory via `getLiturgyType`). Wording is Antiochian — flagged for
OCA migration. Spec: `dismissal_assembler_spec.md`. Verified with a source-extracted probe
(Sunday/All-Saints-NA, weekday Little day-set, Post-Communion Basil).
**Follow-ups (not in v0.15.27):** (a) surface a *name-only* temple selector at the dismissal
itself — the existing `TempleSelector` previews a troparion, wrong in the dismissal context,
so it needs a lightweight variant; the temple remains settable via Litiya/Typica meanwhile.
(b) Vespers reader-mode dismissal still uses its own `_buildReaderDismissal` (unchanged);
fold into the unified engine later. (c) Q4 (saint-of-day phrasing
on named-day Sundays) proceeded on default, flagged for review. (Q2 — Cross on Wed+Fri — now
RESOLVED via Fekula Ch.6; see weekday-dismissal findings above.) (d) OCA-migration
of dismissal wording. (e) full Fekula Ch.6 Theotokion engine (§II/§III), spec §14.

**Tool version (prior): v0.15.26**

**Two pickups on the v0.15.25 work (v0.15.26).**
- The resurrectional **Dismissal Theotokion** now fires at the Sunday Vespers troparia for
  the Pentecostarion/overlay Sundays. The overlay entries (All Saints of NA / Russia, Blind
  Man, etc.) already carry an OCA-pointed `dismissal_theotokion`; the assembler now reads it
  at Both now… (precedence), with the §I `RESURRECTIONAL_DISMISSAL_THEOTOKIA` table as the
  fallback for ordinary non-Pentecostarion Sundays. The v0.15.25 §I gate (`!isPentecostarion`)
  had excluded the overlay Sundays, which run through the Pentecostarion branch, so nothing
  filled Both now… (the kontakion is suppressed there via `vespers_kontakion: false`).
- "Blessed is the Man" no longer renders its last line as a stray psalter hyperlink. The
  inline link treatment (for short kathisma *references*) was wrapping the final line of the
  full kathisma; it is now gated off the full block via a `blessedIsMan` element flag. The
  "Read in Psalter ↗" badge is retained.

**Saturday-evening Vespers fixes + Sunday resurrectional troparion/Theotokion (v0.15.25).**
Three errors were reported for Saturday-evening Great Vespers (the service that opens
Sunday). Two are fixed in v0.15.25; the third (the priest's dismissal) is specced and
pending implementation.
- **Error 1 — "Blessed is the Man" missing.** `getKathismaForVespers` keyed
  isSaturday/isSundayEve on `liturgicalData.dow`, but post-FW-26 Vespers receives the
  OPENED day, so a Vespers opening Sunday read as Sunday-evening (no kathisma). Now it
  receives the SERVED-evening `dow` that the stichera already compute. One-line fix; the
  kathisma helper was the lone consumer still reading the day-level dow.
- **Error 2 — resurrectional Theotokion missing at the troparia.** Sunday Vespers
  concluding troparia now follow Fekula §1A / Ch.6: resurrectional troparion leads,
  commemoration → Glory…, Both now… = §I resurrectional Dismissal Theotokion in the tone
  of the last troparion chanted. Eight §I theotokia encoded in `src/data/octoechos/index.js`
  (`RESURRECTIONAL_DISMISSAL_THEOTOKIA`). Source: Common Theotokia (SJKP),
  Drive `orthodox_liturgics/Octoechos/common_theotokia/Theotokia.pdf`.
- **Error 3 — malformed priest's dismissal (NEXT).** "Who rose from the dead" is being
  inserted into the intercession list instead of as the front prefix on "Christ our true
  God." Fix = the unified dismissal assembler in `dismissal_assembler_spec.md` (committed):
  one `buildDismissal` for Vespers + Typica + Post-Communion, characteristic phrase as a
  true prefix, Great/Little (vigil vs Vespers-alone, per Fekula), day-of-week intercession
  sets (Antiochian wording, flagged for OCA migration), temple patron threaded from
  `templeDedication` with an italic *(Temple Commemoration)* placeholder, saint-of-day, and
  the Post-Communion celebrant clause (Chrysostom / Basil / Gregory).
- **Backlog — full Ch.6 Theotokion engine.** v0.15.25 wires only §I for the Sunday case.
  The full engine (§II following-doxastica, §III daily-dismissal by day-of-week incl.
  stavrotheotokia, the Friday/Saturday tone-of-week exceptions, Matins slots) is to be
  spec'd separately. Data already located in `Theotokia.pdf`.


## MAY ENCODING AUDIT — GATE MONITORING (ongoing)

**STANDING MANDATE:** Every encoding session monitors for new failure modes while encoding.
Each new class of error must be codified into `encoding_rule_v2.md` AND a
`tools/validate_entries.mjs` check AND logged here, before moving on. This role is
continuous — it does not end with May.

**GATE-IMPROVEMENT LOG:**
- v2.4 provenance gates (§2.1 General Menaion fallback order; §5.x kontakion search Ode III/VI/
  Liturgy; §11 #11–13 provenance honesty) — commit `0e1b1f0`.
- v2.5 pointing fidelity (#14), no-troparion fallback (#15), resolution order & register (#16)
  + §12 gates — commit `df8a8c5`.
- v2.6 Check F register + provenance lint (#17–18) — commit `be81fc6`.

**DEFECT TAXONOMY (May 16–22, recurring):**
1. Pointing flattened to prose though the PDF points it — universal.
2. False "No PDF" / "No AT LITURGY" provenance comments.
3. OCA-contemporary "You/Your" register bleed in troparia/kontakia.
4. A generic used where a daily-PDF or General-Menaion proper exists.
5. Troparion synthesized by rewording the kontakion (05-19).
6. Saint name diverging from St. Sergius (e.g. Thalaleus, not Thallelaios).

**STANDING RESOLVED DECISIONS:**
- Alleluia-service days print no troparion in the daily PDF → source from the St. Sergius General
  Menaion by saint type, name-substituted: Martyr Tone IV "In his sufferings, Thy martyr (name)
  …"; Hieromartyr Tone IV "As thou didst share in the ways of the apostles …".
- OCA overrides St. Sergius only with a saint-SPECIFIC proper, never a generic over a printed
  proper. Resolution order: daily-PDF proper > St. Sergius General Menaion > OCA.
- Saint names follow St. Sergius.

**BATCH STATUS:**
- 05-16/17/18 — re-encoded under gates, pushed (`df8a8c5`).
- 05-19/20/21 — researched and decided, NOT yet written (tool-drop). See the Batch 2 handoff:
  05-19 troparion → General Menaion Hieromartyr Tone IV (name Patrick); 05-20 troparion →
  General Menaion Martyr Tone IV (name Thalaleus), kontakion → PDF proper Tone III spec_mel
  "Today the Virgin", rename to Thalaleus; 05-21 selective pointing only. Point all PDF-pointed
  hymnography; leave prose idiomela Tier-1.
- 05-22 — profiled (§2A Alleluia, Basiliscus; kontakion Tone VIII spec_mel "To thee, the
  champion leader"; PDF prints no troparion → General Menaion Martyr Tone IV).
- 05-23 → 05-31 — audit pending. Verify rank from source per day; do NOT assume. Known: 05-24
  Symeon Stylites the Younger (likely higher rank); 05-25 Third Finding of the Forerunner's Head
  (feast, expect Polyeleos + Pentecostarion split like 05-21); 05-27 + 05-27A (secondary —
  confirm key vs overlay); 05-31 Hermias (kontakion OCA-contemporary vs PDF proper Tone VI;
  troparion proper Tone IV — verify/point).


## Pointed Hymnography — Tone Markers (canonical — read before any encoding)

Every pointed text field stores ONE marked string in the source's dialect: `|` line
end, `//` penultimate line, `[brackets]` director emphasis (RLE/OCA), or `*`/`**`
(St. Sergius). **St. Sergius `*`/`**` are RETAINED verbatim as a source-provenance
signal** — browsing the Menaion, the dialect itself tells you the text came from
St. Sergius (vs. RLE/OCA `|`/`//`) without checking another field; the browser shows a
`[St. Sergius]`/`[RLE/OCA]` badge. They are normalized to `|`/`//` only at render and
Tone-Trainer handoff via `normalizeSergius`. Docx underlines DO convert to `[brackets]`
at encode time. Capture what the source gives — Tier 1 plain / Tier 2 `|` / Tier 3
director — and never invent a `//`. Strip-at-render: data browsers show the string
verbatim; the hours tool normalizes `*`/`**`→`|`/`//`, converts `|`→line break, and
reassembles bracketed words (underlining the bracketed syllable). Full rule:
encoding_rule_v2.md §3 (v2.3 corrects the earlier convert-at-encode wording). Drive
delivers PDF + director-pointed docx sources only; more pointed docx will be added over
time. P+63 Russia + North America are the first entries encoded this way (drafts
complete, pending integration into `src/data/pentecostarion.js`).

**OCA service-docx → JSON pipeline (Tone Trainer v0.25.0).** The OCA propers
live in Drive as director-pointed `.docx` (`OCA_service_documents/`, named
`YYYY-MMDD-texts-tt.docx`). The Tone Trainer's "Download parsed JSON" button (next
to "Open service .docx") exports the whole loaded service in document order as
`<same-root>.json`, fully client-side. Underlined paragraph runs collapse into
director-pointed `sticheron` blocks carrying tone, incipit, and an inline pointed
string (`|` line / `//` penultimate / `[brackets]` emphasis) built from the
trainer's own `encodeVerseBlock` (no second parser — `snapshot_comparison.mjs`'s
Node twin stays in step). Every other paragraph is emitted as its own block with
exact text and a best-effort type label (review aid only). This JSON is the intended
review/encoding vehicle for backfilling data-file verses with OCA-pointed works,
gradually replacing the St. Sergius texts. Non-underlined hymns are kept per-line
(never auto-merged), so hymn grouping for troparia/kontakia is a possible follow-up.

**NEXT SESSION (data) — OCA director-pointed backfill: the JSON/diff loop.** The standing
job is replacing bare St. Sergius hymn strings in the data files with OCA authoritative
director-pointed verses, tone by tone, each change proven behaviour-preserving. The loop:

1. **Source → JSON.** Load the OCA director-pointed `.docx` (Drive `OCA_service_documents/
   YYYY-MMDD-texts-tt.docx`) in the Tone Trainer and hit **Download parsed JSON** — emits the
   service in document order, each underlined work collapsed into a director-pointed block with
   tone + incipit + the inline pointed string (`|` line, `//` penultimate, `[ ]` emphasis), built
   from the trainer's own `encodeVerseBlock` (no second parser). This JSON is the *encoding
   vehicle* (how we read the OCA pointing to hand-encode a slot), not a direct import.
2. **Slot conversion.** In the data file (`octoechos/toneN.js` etc.), turn the target bare-string
   slot into an OCA Tier-3 object `{ text, director:true, tradition:"OCA", pointing_source:…,
   verse? }`. One slot = one unit of work. `src/lib/hymn-entry.js` (`normalizeHymn`/`hymnText`/
   `hymnProvenance`) is the single string-or-object read path shared by the assembler and every
   browser, so converted objects render with provenance while untouched string slots stay
   byte-identical. Tone 1 Sat-Vespers `lic[0–3]`/`aposticha[0–3]`/`dogmatikon` is the worked
   example (v0.15.15).
3. **Audition.** Open the slot in its data browser (octoechos/menaion/pentecostarion) and fire it
   into the Tone Trainer via the Point/Score handoff (`oht_handoff`, embedded view) to see/hear the
   pointing. Browser = entry point; trainer = audition surface.
4. **Diff / gate (every change), in `tools/`:** `test_pointing_paths.mjs` → ALL PASS + "No
   regressions vs baseline ✓" (vs `pointing_baseline.json`) + entry-schema conformance;
   `snapshot_comparison.mjs` → the Node twin of the browser ingest (shares `src/lib/docx-text.js`,
   so the encode path can't drift between browser and Node); `validate_entries.mjs` /
   `validate_octoechos.mjs` for schema/data; `npm run build` clean. A pure string→object conversion
   of already-correct text should be a **zero-diff render** for the affected dates — treat any diff
   as a regression to explain before committing.
5. **De-dup follow-on (FW-24).** Once a tone is backfilled, feast embeds can pull from source
   instead of carrying their own copy (pentecostarion P+63 `all_saints_sunday`'s seven tone-1
   Resurrection fields → dereference to the Octoechos `vespers.sat.lic[i]`/`aposticha[i]`/
   `dogmatikon`, `RESURRECTIONAL_TROPARIA`/`SUNDAY_KONTAKIA`). Resolver must be tone-scoped (only
   de-dup pointed tones, else St. Sergius surfaces). Proof: zero-diff render for 2026-06-14. **Open
   before speccing: confirm the §4B17 Lord-I-call composition (4 Resurrection + 6 feast) against
   Fekula.**

Next concrete targets: finish/verify tone 1 (incl. the FW-24 zero-diff de-dup), then carry the same
loop into tone 2+.

**docx tone-tag fix (v0.25.2).** The docx parser now reads tab/br/cr as whitespace
and the tone-heading pattern reads a digit followed by a letter, fixing stale tone
tags on tab-separated troparion/kontakion labels; tone + run helpers shared in
`src/lib/docx-text.js` (one source of truth for the browser ingest and the Node
snapshot twin).

**Embedded view (v0.25.3).** A verse fired in from the Hours tool or a data browser
(▶ Point / ♫ Score, via `point-score-controls.jsx` → `oht_handoff`) renders the
trainer in a streamlined "embedded" view: the authoring chrome is hidden — docx
ingest panel, tone picker + try-example, paste box + its captions, Point Verses,
the Director/Machine pills, Director-vs-Machine toggle, and the timbre selector.
Kept: header + version + "← Hours Tool" link, the do/pitch/tempo/Score/Play
transport, the role chips, the **SATB voice-part picker**, and the Phrase cards.
Gated on `embeddedVerseView` (true only when the handoff carries a `.verse`), so a
bare `?from=tool` visit (e.g. the Hours footer link) still shows the full UI.
Playback rides the default timbre (Piano).

**Play-bar reorder + copy refresh (v0.25.4).** Play moved to the left of the play
bar; Point Verses moved to the right ahead of ♩ Score (right group: "Point Verses ·
♩ Score"). All four play-bar buttons share a fixed 32px `box-sizing:border-box`
height so borderless/larger-font buttons match the bordered ones. Header: eyebrow
"Orthodox Daily Hours · Tone Trainer", H1 "Common Chant · Obikhod · Tone N" (dynamic
tone), subtitle removed. Paste-box instruction now leads with "Load a Service .docx
| Paste in a sticheron — one verse per line." then the dynamic rotation hint; ingest
button "Load Service .docx".

**Progressive disclosure + inline version (v0.25.5).** Version badge is now an
inline borderless clickable label on the eyebrow ("… · Tone Trainer · vN") that
toggles the release notes. "Point Verses" moved to the tone row right of
"try example", greyed until the textarea has content (covers typed text and a
.docx block, which fills the textarea via `setText`). The play bar and the info
bar (legend + Director/Machine + voice-part + timbre) are gated on `hasPointed`
(`lines.length > 0 || machineLines?.length`) — hidden until a verse is pointed,
then they appear with the Phrase cards. Footer note + copyright stay visible.

**Phrase chips scroll, don't wrap (v0.25.6).** The chip display broke on long
verses and in Alto+Bass / SATB: the per-voice strips + syllable row were
independent `flex-wrap` rows (wrapping desynced the columns) and the
soprano-over-alto / tenor-over-bass overlays were fixed-height single-line
containers, so a wrap spilled chips out of the phrase box (onto the footer in
SATB). Fix: strips are now `nowrap` and share one `overflow-x:auto` viewport per
phrase (`PhraseScroller`, module scope) with a single inline-flex column track —
columns stay aligned, the box never overflows, and it's responsive for free. Soft
left/right edge fades cue more content; the phrase label + Play stay fixed above
the scroller; playback auto-centers the active chip (queried via
`data-active="true"`, rect-based scroll). Decision: forced horizontal scroll was
chosen over CSS wrapping — lower risk to the tuned chip rendering, musically
truer (unbroken contour), and inherently responsive. FOLLOW-UP: a smaller chip
render for phone-width screens (chip width / label size shrink below a
breakpoint) — to be evaluated separately.

**Compare-mode scroll (v0.25.8).** The Director vs. Machine harness has its own simpler
chip layout (two rows per line, `[label][chips][▶]`, no per-syllable active highlight —
playback is row-level). Same wrap→scroll fix: the chips container is now `nowrap` +
`overflow-x:auto` with `min-width:0` (so the `flex:1` item bounds and scrolls instead of
overrunning the block). The paired director/machine rows scroll in lockstep
(`syncCompareScroll` matches `scrollLeft` across elements sharing `data-compare-line`) so
syllables stay column-aligned across both rows. No `PhraseScroller` reuse — its
stacked-strip structure doesn't fit the label+chips+button row.

**Sing-view declutter (v0.25.9).** Removed the Director / Machine sing-view pills from the
info bar — the normal sing view is always director (`singView` is reset to director on every
point; no toggle remains to set machine). Machine pointing is viewed through the Director vs.
Machine comparison harness (which inherently shows both rows). The "Director vs. Machine"
toggle moved out of the info bar onto the "Director Pointing mode — …" note line under the
paste box, far-right justified (note text `flex:1`, button `flex-shrink:0`); shown only when
`compareData` exists, and hidden in embedded view because the pointer block is.

**Piano-only (v0.25.10).** Deprecated the timbre selector and the organ/choir/cello voices.
`playOrganNote`/`playChoirNote`/`playCelloNote` removed; `toneTimbre` always plays piano; the
`timbre` state is now a `"piano"` constant (the 8 `toneTimbre(...)` call sites are unchanged).
Piano is the only playback voice.

**Pitch UX + note dwell (v0.25.11).** Removed the standalone 'pitch' button: selecting a
pitch in the do-selector sounds it (guarded `useEffect` on `doHz` — skips mount, fires only on
a deliberate change), and the 'do ♪' readout is click-to-replay (`onClick={playPitch}`) so the
same pitch can be re-sounded without changing it. The pickup chord is held 0.5s longer
(`playPitch` H 0.7 → 1.2). Note-dwell fix: the "Director Pointing mode — …" note was gated on
the live `hasTruth` (textarea brackets) so it vanished the instant the `[ ]` marks were
stripped, while the Director vs. Machine button (gated on `compareData`, set at point time)
lingered. Note is now gated on `hasTruth || compareData`, so the note, the button, and the
still-director chips all dwell until the stripped text is re-pointed, then clear together
(`analyzeText` sets `compareData` on a director point, nulls it on a non-director one).

**Mobile info-bar polish + pitch selector popover + shared PopoverSelect (Trainer v0.25.16).**
Generalized `VoicePartSelector` into a reusable module-scope `PopoverSelect({value,onChange,options,
ariaLabel,fullWidth,triggerStyle})` (options = `[{value,label,disabled?,divider?}]`; `fullWidth` →
wrapper+trigger `width:100%` with `justify-content:space-between`). Used for BOTH the SATB picker and
the pitch (do) picker (the do control was still a native `<select>` — converted for iOS consistency;
`onChange={setDoHz}` receives the hz number directly, the `[doHz]` effect still sounds the pitch). At
≤600px (`isNarrow`): the legend row centers (`justifyContent:center`), the selector row gets more
bottom margin (0.4rem→0.75rem), and the SATB selector goes full-width (`fullWidth={isNarrow}`). Desktop
unchanged.

**Mobile control-bar + popover SATB + info-bar + textarea (Trainer v0.25.15).** Added an
`isNarrow` hook (`matchMedia (max-width:600px)` + listener). At ≤600px the control-bar Play/Stop
renders as a bare ►/× glyph (transparent, no frame, green/burgundy color cue) and Score as a bare
♫ glyph (gold, like point-score-controls); desktop keeps the full `playBtn` buttons. New module-scope
`VoicePartSelector` popover (mirrors the Hours `ServiceSelector`: trigger + caret, options popover,
Tenor greyed/non-selectable when `!TENOR_TONES.has(activeTone)`, divider before Alto+Bass/SATB) replaces
the native `<select>`. Info bar restructured into two rows: row 1 = selector right-justified, row 2 =
the legend (so the legend stops stacking against the selector on mobile). Paste textarea background →
`rgba(255,255,255,.5)` (the phrase/chip-card white), border still greens in director mode.

**Tone Trainer restyle + header/BPM/buttons + outline tap-close (Trainer v0.25.14 / Hours v0.15.24).**
Trainer now matches the data browsers: outer wrapper `minHeight:100vh; background:#FAF6EE`, a
white header band (`borderBottom:2px solid #E8DEC8`, non-sticky to avoid eating mobile vertical
space) holding the (centered, option-a) ← link + eyebrow + H1; content moved into an inner
`maxWidth:820` div (extra closing div added at component end). Eyebrow "Orthodox Daily Hours ·
Tone Trainer" → "Common Chant · Trainer"; H1 "Common Chant · Obikhod · Tone N" → "Obikhod · Tone N"
(2rem→1.6rem). Tempo control relabeled "BPM" + number-only after the slider. `playBtn` height
32→24 / padding 0 14px→0 12px to match the per-verse `btn` buttons; Play button lost its 0.95rem
override and now reads "► Play" (glyph-first, mirroring "× Stop"); per-verse buttons read "► Verse".
ServiceOutline open-header div got `onClick=setOutlineOpen(false)` + `cursor:pointer` so the whole
title bar dismisses it (× retained as the cue).

**Cross-platform play/stop glyphs (Hours v0.15.23 / Trainer v0.25.13).** U+25B6 ▶ (play)
and U+25FC ◼ (stop) are emoji-capable, so iOS rendered them as a blue triangle and a square.
Play → ► (U+25BA, no emoji presentation, monochrome everywhere); stop → × (U+00D7). Render
sites: `point-score-controls.jsx` Point glyph (Hours tool + data browsers); tone-trainer
Play-all (5176), per-row sing button (5627), per-line button (5907). Caret/expander glyphs
(▸ U+25B8, ▼/▲) were already safe and untouched. Note: U+25BA/U+25B8 have no emoji form, so
no variation selector is needed.

**Close glyph + collapsed Tone follows Vespers (v0.15.22).** U+1F5D9 rendered as tofu on
iOS → replaced the panel close control with `×` (U+00D7, fontSize 1.5rem). Collapsed-header
Tone now reads `(currentService.key === 'vespers' || 'compline') ? vespersNext.vLit.tone :
liturgicalData.tone` — advances to the opened day's tone for next-day services (vespersNext
is computed unconditionally at component scope, so safe for compline once built), civil-date
tone otherwise. Mirrors the expanded body's `isVesp ? vespersNext.vLit : liturgicalData`.

**Title, desktop scroll-lock, Date move, expand/collapse tags (v0.15.21).** H1 →
"Orthodox Daily Hours". The v0.15.20 panel cap caused a desktop scroll-lock (the panel
became a scroll region with `overscroll-behavior:contain`, so the wheel didn't pass through
to the page); fixed by moving the cap from inline style to class `.lit-context-body` and
scoping it to `@media (max-width:768px)` in `index.css` — desktop is uncapped/natural height.
Date line moved from the top flex row to below the `cLit.namedDay` card and above Tone; the
top-left slot now holds a close glyph (U+1F5D9 🗙, `setContextOpen(false)`), Reader's Service
stays top-right. Collapsed center tag "Liturgical Context" → "Expand"; expanded footer tag
→ "Collapse".

**Expand-lockout (final) + header overflow fix (v0.15.20).** v0.15.19's drop-sticky was
the wrong call (reverted). Controls bar is `position:"sticky"` again; the expand-lockout is
now solved by capping the expanded context body: `maxHeight: calc(100dvh - 100px)` +
`overflowY:auto` + `overscrollBehavior:contain` + `WebkitOverflowScrolling:touch`, so the
sticky bar never exceeds the screen and the bottom collapse control is reachable via the
panel's own scroll. Also fixed: the collapsed-header Day/Tone cells used `flexShrink:0` +
`minWidth:120px`, which on narrow iPhones summed wider than the viewport and forced
horizontal scroll. Side cells are now `flex:"1 1 0"` + `minWidth:0` (+ nowrap/ellipsis) and
the center is `flex:"0 1 auto"` + `minWidth:0`, so they shrink to fit while keeping the label centered.

**Day/Tone split, Vespers-note move, expand-lockout fix (v0.15.19).** Collapsed
Liturgical Context header: day name left, tone right (both side spans `minWidth:120`,
tone span `textAlign:right`) flanking the centered label. The conditional `isVesp`
Vespers banner moved from the top of the expanded body to between the Date row and the
`cLit.namedDay` card. Expand-lockout fix (Option B): the controls bar's `position` is now
`contextOpen ? "static" : "sticky"` — dropping sticky while expanded lets the page scroll
normally so the bottom collapse control is reachable on short screens; it re-pins when
collapsed. (Option A, cap+internal-scroll, was considered but B was chosen for simplicity.)

**Header + service selector + Dismissal (v0.15.18).** Header masthead simplified
(eyebrow "A Liturgical Study Tool"; subheader "A Service Assembler | OCA Russian Usage";
version badge now discrete inline text, far right on the eyebrow row — `VersionBadge`
lost its border/background/caret). Fixed/Movable/Unresolved legend removed. "Day · Tone"
left-padding zeroed to align with the DATE control. New `ServiceSelector` popover component
(module scope, after `SERVICE_REGISTRY`) replaces the native `<select>`: built services
tappable, unbuilt ones greyed+italic with a "soon" tag and non-selectable (fixes iOS Safari
ignoring `<option disabled>` styling), faint divider before the reference block
(`SERVICE_REF_KEYS`), closes on outside-tap/Esc. Controls row one is now `flexWrap`+
`space-between`; the DATE/SERVICE word-labels carry class `hours-ctl-label`, hidden at
≤480px via a rule in `src/index.css` (stepper + selector are self-describing; aria-labels kept).
Dismissal dedupe: `v-diss-wisdom` relabeled "Dismissal" → "Conclusion of Vespers" (served
Vespers had two "Dismissal"-labeled elements — outline + body both double-headed); the
ServiceOutline row loop also gained `if (!el.label) continue;` so a blank-labeled major-by-id
continuation line can't emit an empty row.

**Pickup spacing + footer + print credit (v0.25.12).** `playNotes` gained an optional
between-note `gap` (default 0); `playPitch` passes `0.25` so the four sequential intonation
pitches have 0.25s of silence between them. Footer "← Hours Tool" link left-justified (header
link unchanged). score-print.html `copyrightLine()` reworded to
`© <year> Orthodox Tone Trainer • Liturgical texts © their respective sources` (year dynamic).

**Irmos is pointed but NOT trainer-singable (v0.15.11).** A canon ode's Irmos
has its own proper melody — it is never sung to the standard tone formula the
Tone Trainer knows. Irmos text is still pointed (`|`/`//`) for line breaks at
render, but the ▶ Point / ♫ Score controls must never appear on it. This is
enforced centrally: `PointScoreControls` (point-score-controls.jsx) returns null
when its `label` matches `isIrmosLabel()` (`/\birmos\b/i`); every browser block
passes its render `label` through. The three data browsers are covered. When the
**Matins assembler** is eventually built in hours-tool.jsx, its irmos elements
must likewise carry an "Irmos" label (or otherwise be flagged) so the same guard
suppresses the controls there.

## Project Summary
A liturgical assembly tool for OCA parishes (Russian usage). Given a date,
the tool computes the liturgical context and assembles the correct movable parts of
the Daily Hours (beginning with the 9th Hour), with every decision traceable to a
specific section of Fekula & Williams, *The Order of Divine Services* (2009).

**Primary audience:** Readers and laity — the tool is as much a teaching aid as
an assembly tool. Every movable element is annotated with its rubrical source.

## Companion Tools — read before starting a session

This repo now contains **two distinct tools**. A new session should ask:
**"Which tool are we working on today — the Hours assembler or the Tone Trainer?"**

1. **Hours assembler** (this document) — `src/components/hours-tool.jsx` + the
   Menaion/Pentecostarion data. Version badge = `RELEASE_NOTES[0].version`.
2. **Tone Trainer** — `src/components/tone-trainer.jsx`, notes in
   `tone_trainer_notes.md`. A **standalone sub-project**: a Tone 1 Obikhod
   stichera pointing trainer that renders a verse singable (reciting tone +
   cadence) with audio. It is **not** wired to the assembler's data yet; it is
   reachable from the footer nav ("Tone Trainer") and at `/orthodox-hours/tone-trainer`.
   - **Score print** (`public/score-print.html`) uses a **self-hosted, frozen VexFlow 5.0.0**
     (`public/vexflow.js`, committed to git, not an npm dependency — upstream releases cannot
     reach the tool). Note positioning is **text-width-driven** via `TickContext.setX` (the only
     reliable per-note override — `setWidth` and `setXShift` are dead ends for equal-duration
     notes). Full mechanism, probe evidence, tuning constants, and a "re-probe on any VexFlow
     upgrade" caveat live in `tone_trainer_notes.md` → *Architecture note — score-print note
     positioning*.

   It carries its **own independent version line** (see its notes) so its churn
   does not bump the hours-tool version. **Eventual integration goal:** the
   hours-tool emits pointed, tone-tagged verses that the trainer consumes so a
   chanter can rehearse their SATB or unison part for a given day's Hours.

**Versioning:** Project notes are versioned in sync with the tool. The version
number in the notes header must match the v0.x.x badge in the tool header.
`project_notes.md` is edited directly in the cloned repo and committed (`docs:`
prefix). No Drive snapshot, no versioned filename — git history is the version
record. The authoritative live copy is the repo file at the root.

**Data-integrity gate (added v0.12.1):** `tools/validate_entries.mjs` is a
schema-conformance check that runs inside both the pointing gate
(`node tools/test_pointing_paths.mjs`) and the skeleton gate
(`node scripts/check-skeleton.mjs all`). It enforces two things the
`FIELD_REGISTRY` coverage audit cannot: (1) an **unknown-field guard** — every
entry key must be in the blessed `KNOWN_FIELDS` vocabulary, so a mis-named field
fails loudly instead of reading as "canonical field absent"; (2) a
**Sunday-overlay flag block** — `all_saints_sunday`/`pentecostarion_sunday`
entries must carry `menaion_set_aside`, `has_paroemias`, `has_polyeleos`,
`heavenly_king_omitted`, `it_is_truly_meet_suppressed`.

> **Learning (v0.12.1):** the P+63 All Saints entries first shipped with
> non-canonical field names (`litya_glory_both_now`, `exapostilarion_saints`,
> `stichera_praises`, `praises_glory`) and a missing flag block. They were caught
> by a manual diff against the P+56 exemplar, not by the gate, because the
> coverage audit tolerates absent fields by design. **For any Sunday-overlay
> entry, clone the field names and flag block from the P+56 All Saints entry
> rather than naming fields fresh.** The conformance gate now enforces this.

**Octoechos drift gate (added v0.15.1):** the Menaion/Pentecostarion skeleton above
covers only the flat, date-keyed entries — the Octoechos (nested
`tone → service → day → element-arrays`) had no enforcement. A canonical schema
now lives in `src/data/octoechos/schema.js` and is enforced by
`tools/validate_octoechos.mjs`, wired into `scripts/check-skeleton.mjs all`. Four
checks: (A) **vocabulary guard** — every key at every level must be blessed in
schema.js, so a typo/drifted name fails loudly; (B) **required-per-section**,
**gated by each tone's `_encoded` marker** (`['vespers']` or
`['vespers','matins']`) so partial progress never blocks a push — a section is
only checked for completeness once the tone claims it; (C) **cross-tone
uniformity** among claimed sections; (D) **placeholder guard** (the
`[Glory from Menaion if appointed]` rubric is intentionally exempt). To add a new
field, add it to the relevant `known` list in schema.js — that deliberate edit IS
the gate.

> **Placement decisions locked (v0.15.1)** — the drift-prone judgment calls for
> the Matins encode, now fixed in schema.js: (1) **exapostilarion is
> tone-independent** (taken from the Eothinon by Gospel #) → `index.js
> EXAPOSTILARIA[1..11]`, NOT per-tone; (2) **evlogitaria** are the same every
> Sunday → `index.js EVLOGITARIA`, tone-independent; (3) **songs of ascent**
> antiphon count varies by tone (3 or 4) → validate SHAPE (array of antiphons,
> each an array of stanza strings), never a fixed count; (4) **matins prokeimenon**
> ("Now will I arise…") is stored as `matins.matins_prokeimenon`, distinct from the
> existing `SUNDAY_PROKEIMENON` (Liturgy) table.

> **Octoechos encoded status (v0.15.14 — Sunday-Matins cycle COMPLETE):** all eight
> tones `_encoded: ['vespers','matins']`. Every tone's Sunday Resurrectional Matins is
> fully encoded from its own `N-1.pdf` (God-is-the-Lord theotokion, two sessional sets,
> Songs of Ascent — 3 antiphons for Tones 1–7, 4 for Tone 8 — matins prokeimenon, all
> three canons odes 1/3-9, ikos, 8 Praises stichera, Great Doxology troparion). Each
> tone's canon shape (which odes carry trinitarians vs. theotokia, troparia counts) was
> read from that tone's source and never ported. Canon troparia + ikos are Tier-1 plain;
> irmoi/hymns/praises are pointed. The matins kontakion comes from `SUNDAY_KONTAKIA[tone]`,
> the God-is-the-Lord troparion from `RESURRECTIONAL_TROPARIA[tone]`, and the Hypakoë from
> `HYPAKOE[tone]` (no re-encoding). The Evlogitaria are encoded once, tone-independent, in
> `index.js EVLOGITARIA`. (Browser fix v0.15.14: Songs of Ascent now index the antiphon
> array positionally, so the section renders for every tone — it had been blank.)
>
> **Still tone-independent + still empty (need a non-`N-1.pdf` source):**
> `EXAPOSTILARIA` (11 Eothina) and `RESURRECTION_GOSPEL_STICHERA` (11 Gospel
> stichera, sung as the Praises Glory). Both are taken by Resurrection Gospel
> number, not by tone, so `1-1.pdf` gives only the rubric. **Next: surface an
> Eothina source for these 11+11, then fill the two index.js tables; then Tone 2
> Matins from `2-1.pdf`.** St. Sergius prints quotation marks around the embedded
> cries in Tone 1 Vespers LIC 5 & 7 and aposticha 3 which the current data omits —
> still flagged as a separate fidelity item.

---

## VERSIONING PROTOCOL — READ BEFORE EVERY SESSION

Project notes live ONLY in the repo (`project_notes.md` at the root). Git history
is the version record — there is no Drive snapshot and no versioned filename.

### Step 1: Clone the repo and confirm current version
Clone `stevensaero/orthodox-hours` (token required — ask the user) and read
`project_notes.md` from the root. Confirm its version header matches the tool badge
in `hours-tool.jsx`. Echo the version back before doing anything else:

> "project_notes.md reads vX.X.X and the tool badge reads vX.X.X. They match —
> ready to proceed."

If they differ, stop and flag the discrepancy before making any changes.

### Step 2: Queue changes — write only on explicit confirmation
Do NOT edit the project notes piecemeal throughout a session. Accumulate changes,
and at a meaningful checkpoint present a summary and ask:

> "I have the following queued changes to the project notes:
> - [change 1]
> - [change 2]
> This will bump the notes/tool to **vX.X.X**. Shall I commit these?"

Wait for explicit confirmation before writing. A write always increments the
version — never re-use the current version number.

### Step 3: Session close-out
When the session has meaningful changes to capture:
1. Queue all pending changes and present them to the user
2. Get explicit confirmation to proceed
3. Decide the new version: patch (x.x.N) for encoding/fixes, minor (x.N.0) for features
4. Edit `project_notes.md` in the repo; update its version header and the tool badge to match
5. Commit with a `docs:` prefix (e.g. `docs: project notes — [session summary]`); push
6. Git history is the record — no Drive snapshot, no versioned filename

### Notes file rule (STANDING — established v0.3.10)
**Never condense the project notes.** The file is the historical record; a long
section is acceptable. Do not strip context to save space.

### Deploy & cache propagation (STANDING — confirmed v0.20.8)
Push to `main` auto-deploys. `.github/workflows/deploy.yml` triggers on every push
to `main`: it runs `npm ci` → `npm run build` → copies `dist/index.html` to
`404.html` (SPA routing) → publishes `dist/` to the `gh-pages` branch via
`peaceiris/actions-gh-pages`. No manual `npm run deploy` is needed. Allow ~1–2 min
for the Action plus CDN propagation.
**The catch:** GitHub Pages serves `index.html` with a short cache (~10 min), and
that HTML points at the hashed JS bundle. So for a few minutes after a push a
browser can load the *old* `index.html` → *old* bundle, showing pre-fix behavior
even though the fix is already live. Before concluding a just-shipped fix "didn't
work," **hard-refresh** (Ctrl/Cmd-Shift-R) and/or wait out the cache.
**Verifying a deploy from the container** (network allows `api.github.com` and
`raw.githubusercontent.com`, NOT `*.github.io`): check the latest Action run via
`api.github.com/repos/stevensaero/orthodox-hours/actions/runs`, and confirm the
shipped code is actually in the deployed artifact by fetching
`raw.githubusercontent.com/stevensaero/orthodox-hours/gh-pages/index.html`, reading
the `assets/index-*.js` name, then grepping that bundle on the `gh-pages` branch for
the fix. (Used this session to confirm the v0.20.6 tooltip-portal fix was live and
the user was simply seeing cached HTML — no code change was warranted.)

### Version history
| Version | Date | Summary |
|---|---|---|
| v0.1.0 | May 2026 | Initial release: all four Hours, June Menaion, lectionary, How It Works, versioning |
| v0.2.0 | May 2026 | Feast proper readings (Phase 1), movable Sunday collision resolution, P+56/P+63 lectionary |
| v0.3.0 | May 2026 | Versioning protocol rewrite; full offsets table; 19 Sunday keys; HIW panel docs; UI placement note |
| v0.3.1 | May 2026 | Fekula source workflow documented; chapter-by-chapter .txt file inventory added |
| v0.3.2 | May 2026 | HTM supplementary material inventory added; Drive structure updated; KEY FIELDS template expanded with full first-pass capture rules |
| v0.3.3 | May 2026 | Jul 1-3 test encoding; §2A AT LITURGY absent rule added; Jun back-fill debt (FW-22) queued; St. John Maximovich confirmed at 06-19.pdf |
| v0.3.4 | May 2026 | Jul 1-3 encoding records saved to Drive; OCA divergence pattern confirmed and documented; Nicodemus OCA check flagged; July progress table added |
| v0.3.5 | May 2026 | Nicodemus OCA troparion check resolved; 07-14-v2.txt saved; two OCA troparia documented; all Jul 1-3 flags cleared |
| v0.3.6 | May 2026 | St John Maximovich encoded (07-02-john-maximovich.txt); vigil §2F confirmed; OCA/St Sergius texts in full agreement; Jul 1-3 encoding complete |
| v0.3.7 | May 2026 | Tool v0.2.1: Jul 1/2/3/14/15 entries in SAMPLE_MENAION; new fields (prokeimenon, alleluia, communion_verse, paroemia_1-3, troparion_2, fekula_section) added as dormant data |
| v0.3.8 | May 2026 | Schema normalization (v2.1): kontakion_ode6/ode3, source_file, aposticha_glory; Priority 1/2 cleanup; Priority 3 encoding set 1 (05-16–05-18) |
| v0.3.9 | May 2026 | Dynamic monthly data modules (may.js, june.js, july.js, pentecostarion.js); main bundle 20% smaller; Priority 3 complete (05-16–05-21, 05-31); context card collapsed by default |
| v0.3.10 | May 2026 | Tool v0.2.2: Pentecostarion Hours assembly implemented; P+35–P+40 encoded; skeleton rules confirmed from Fekula re-read; open questions captured; Math.floor bug fixed |
| v0.3.11 | May 2026 | Tool v0.2.3: Hours skeleton rebuilt from HTM source; all 12 psalm texts inserted; Typical Beginning collapsible component; tbOpen state lifts context to body assembler |
| v0.3.12 | May 2026 | P+38 troparion bug fixed (Sunday Tone 5 added); continuation button scroll fixed; 1st Hour body trimmed to O come opening; P+38/P+39 encoding confirmed correct |
| v0.3.13 | May 2026 | Tool v0.2.4: Unified single Hours assembler for all seasons; rendering fixes (Reader: Amen, priest text, psalm headings); RankExplainer ⓘ component; 3rd→6th scroll-to-heading |
| v0.3.14 | May 2026 | Tool v0.2.5: HTM closing sequence fully corrected; end-of-hour markers; default service changed to 1st Hour; HowItWorksPanel rebuilt as five-section accordion with annotated specimen and full field inventory; how-the-tool-works.md created; Pentecostarion P+35–P+56 fully encoded |
| v0.3.15 | May 2026 | Tool v0.2.6: FW-21 Vespers lessons complete; VespersLessonsExplainer ⓘ (8 cases); P+offset in context card; null guards throughout; paroemia collision resolution corrected; Drive housekeeping (fekula_ODS, archives) |
| v0.3.16 | May 2026 | FW-22 complete: full June back-fill |
| v0.3.17 | May 2026 | Tool v0.2.7: Vespers Phase 1 complete (VespersOpening, full litany renderers, kathisma schedule, petition-response formatting); Lent week/Sunday tracking in calendar engine; kathismaPeriod detection; VESPERS_KATHISMA + MATINS_KATHISMA tables from OCA source; getKathismaForVespers(); How It Works updated (encoding gap audit, Lent week explainer, Kathisma Schedule section); encoding .txt-vs-tool gap documented |
| v0.3.18 | May 2026 | LIC/Aposticha mechanics fully researched and documented; Octoechos gap identified as blocker; FW-23 extended with stichera schema; FW-OCTOECHOS-VESPERS added; encoding KEY FIELDS template expanded with stichera/aposticha fields; How It Works LIC/Aposticha explainer added; Vespers psalm texts (Ps 140, 141, 129, 116) with stichera verses encoded |
| v0.3.19 | May 2026 | FW-OCTOECHOS-VESPERS complete: octoechos_vespers.txt encoded (477 records, all 8 tones, tones 1–6 fully complete, tones 7–8 complete); Drive structure updated with Octoechos/ folder; data file schema documented |
| v0.3.20 | May 2026 | Tool v0.3.2: Typica assembler complete (FW-17 Phase 1); prokeimenon/alleluia tables; Ch.10 reader toggle; encoding gaps closed via Typica discovery pass |
| v0.3.21 | May 2026 | Tool v0.3.3: Prayers After Holy Communion assembler; getLiturgyType() Basil/Presanctified/Chrysostom detection; shared buildDismissal() helper; mm/dd added to liturgicalData; post_communion bypasses seasonal inScope gate |
| v0.3.22 | May 2026 | Tool v0.3.4: Orthodox Psalter (all 20 kathismata, Brenton LXX embedded); Vespers kathisma link; context strip banner; history.back() scroll restoration; same-tab navigation |
| v0.3.23 | May 2026 | Tool v0.4.0: Menaion & Pentecostarion data browsers (/menaion, /pentecostarion); shared audit module (src/lib/audit.js); lazy-loaded routes, URL-only access; beatitudes_troparia object-shape fix |
| … | … | (v0.4.x–v0.12.x detail lives in the in-code RELEASE_NOTES / TRAINER_RELEASE_NOTES — Octoechos browser, P+63 All Saints of NA/Russia, schema-conformance gate, pointed-hymnography render, etc.) |
| v0.13.0 | Jun 2026 | ▶ Point control — pointable Hours verses hand off to the Tone Trainer (sessionStorage + ?from=tool full-nav); trainer v0.23.2 back-link, v0.23.3 receiver (translate \| // → lines, keep [brackets], analyzeText) |
| v0.13.1 | Jun 2026 | Point gating reads the tone from the verse's "Tone N:" rubric / toneNote / label (stichera carry no structured .tone) — elementTone() helper |
| v0.13.2 | Jun 2026 | All Saints of NA/Russia usage selector now appears at the Sunday-opening Vespers (alternate usages, not co-commemorations); selected usage drives the Vespers assembly; trainer v0.23.4 lexicon corrections (glorifying 4 / pious 2 / nailed 1) |
| v0.14.0 | Jun 2026 | ♫ Score control (Phase 2) — verse → printed SATB score, skipping the trainer UI; routes through the trainer headlessly (buildScorePayload → sessionStorage → location.replace to score-print.html, Back returns to Hours); trainer v0.24.0; score-print.html accepts a sessionStorage payload |
| v0.14.1 | Jun 2026 | Psalter footer button removed (Psalter reached via the service dropdown); kathisma links open the Psalter focused on just that kathisma (selector + prev/next stripped, back strip kept), like Scripture pericopes |
| v0.14.2 | Jun 2026 | ♫ glyph sizing; trainer v0.24.1: score hand-off uses the default title; print toolbar Close becomes "← Hours Tool" (browser-back) when from=tool |
| v0.14.3 | Jun 2026 | ♫ larger + spacing; trainer v0.24.2: score title = "Tone N — [first 4 words]…" (defaultScoreTitle reused from the pointed lines) |
| v0.15.0 | Jun 2026 | Point/Score controls added to the Menaion, Pentecostarion & Octoechos browsers; controls + hand-off factored into one shared component (point-score-controls.jsx) used by the Hours tool and all three browsers; browsers stay lazy, no trainer in the main bundle |
| v0.15.1–.2 | Jun 2026 | Octoechos schema/validator groundwork; Tone 1 Sunday Matins |
| v0.15.3 | Jun 2026 | Octoechos Tone 2 Sunday Matins + Saturday Vespers pointing; `trinitarion` added to canon-ode schema + browser |
| v0.15.4 | Jun 2026 | Octoechos browser restyle (white sticky header, 960px, palette C); Sunday surfaced in Matins view |
| v0.15.5–.6 | Jun 2026 | How It Works: 800px width fences; new Pointing/Chant/Score section; status refresh |
| v0.15.7 | Jun 2026 | How It Works: Order of the Psalter service, Service outline, Vespers next-day rendering, Psalter/Scripture open links (10-of-14) |
| v0.15.8 | Jun 2026 | Octoechos Tone 3 Matins (two trinitarians Res VII/VIII; cross-res theotokia IV/VII + own irmos Ode V) |
| v0.15.9 | Jun 2026 | Octoechos Tone 4 Matins (trinitarians in all three canons; cross-res five theotokia) |
| v0.15.10 | Jun 2026 | Octoechos Tone 5 Matins (no trinitarians; cross-res theotokion every ode; theotokos 3–4 trop/ode) |
| v0.15.11 | Jun 2026 | Irmos render fix — Point/Score controls suppressed on irmos across all three browsers (label-gated in PointScoreControls) |
| v0.15.12 | Jun 2026 | Octoechos Tone 6 Sunday Matins (single Res-IX trinitarian like Tone 2; cross-res Ode VIII bare 3-trop; theotokos 4/ode except V,VI=3) |
| v0.15.13 | Jun 2026 | Octoechos Tone 7 Sunday Matins (single Res-IX trinitarian; cross-res theotokion every ode; theotokos uniform 3/ode; god-is-the-Lord theotokion double-cadence flagged) |
| v0.15.14 | Jun 2026 | Octoechos Tone 8 Sunday Matins — **Sunday-Matins cycle COMPLETE (all 8 tones)** (Res VII/VIII trinitarians but theotokion kept on IX; cross-res III single-trop, theotokion every ode; theotokos uniform 3/ode; 4 Songs of Ascent — antiphon-4 stanza-1 no penult; even-tone GD troparion) + songs_of_ascent browser render fix |
| v0.15.15 | Jun 2026 | OCA director-pointed backfill begins — Octoechos Tone 1 Sunday Vespers Resurrection set (lic[0–3], 4 aposticha, dogmatikon) swapped from St. Sergius to OCA Tier-3 [brackets] from the 2026-0614 service docx (`pointing_source` + `tradition: "OCA"` + `director: true`); changes these verses for every Tone 1 Sunday. New shared `src/lib/hymn-entry.js` normalizer lets Octoechos slots be string-or-object (one read path for assembler + browser; still-string slots byte-identical) |
| v0.15.16 | Jun 2026 | "Lord I Have Cried" opening (Ps 140:1-2 Kekragarion) is now tone-of-week propers: renders the tone's OCA director-pointed `lic_opening` when encoded (Tone 1) else the unpointed OCA `LIC_OPENING_FALLBACK` (index.js, single source); two elements so Point/Score attaches per verse. Replaces the St. Sergius "Lord, I have cried…hearken unto me" with OCA "Lord, I call upon…hear me" on every Vespers. Octoechos browser shows the opening above the LIC stichera |
| v0.15.17 | Jun 2026 | LIC opening renders as movable propers (shaded card + gold left border + "Tone N:" marker) matching the stichera, instead of plain fixed text; Point/Score still per verse |

---

### Session — June 12, 2026 (Hours ↔ Tone Trainer Point/Score cross-tool feature)

Built the full **Point/Score pathway** that links the Hours tool (and the data
browsers) to the Tone Trainer and the printed score. Spec committed first
(`hours_trainer_handoff_spec.md`).

- **▶ Point** — every pointable verse (text with `|` / `//` marks) shows a control
  at the right of the verse window. Active when the verse's tone is built in the
  trainer (1–3 today), light grey + inert otherwise. Hands the verse off via
  `sessionStorage['oht_handoff']` + a full-page nav to `…/tone-trainer?from=tool`;
  the trainer applies the tone, translates the marks to lines (keeping
  `[brackets]` so director verses point as truth), and points it via `analyzeText`.
  Tone is read from the verse's rubric/toneNote/label (`elementTone`), since
  stichera carry no structured `.tone`.
- **♫ Score** — same gating; routes through the trainer headlessly (a brief
  "Preparing…" screen), builds the score payload with the trainer's own
  `buildScorePayload`, stashes it, and `location.replace`s to `score-print.html`
  (which now also reads a sessionStorage payload). Same-tab, so a popup is never
  opened and **Back returns to the Hours tool**. The print toolbar's Close becomes
  "← Hours Tool" when `from=tool`. Title is the trainer's default,
  "Tone N — [first four words]…".
- **Back-link** — "← Hours Tool" surfaces in the trainer header + footer when
  arrived from the tool (`?from=tool`).
- **Shared component** — `src/components/point-score-controls.jsx` is the single
  source of truth for the controls + hand-off; the Hours tool and all three data
  browsers consume it (octoechos supplies the tone via a `ToneContext`). Gating
  reads `AVAILABLE_TONES` from the lightweight `src/lib/available-tones.js`, so the
  lazy trainer is never pulled into a viewer's bundle.

Also this session: the **All Saints NA/Russia usage selector at Vespers** fix
(alternate usages, not co-commemorations — the selected usage drives the Vespers
assembly); director **lexicon corrections** (glorifying 4 / pious 2 / nailed 1;
delivered already correct), applied to the served lexicon and the build
accumulator with a version cache-bust; and the **Psalter** changes (footer button
removed, kathisma links open focused like Scripture pericopes).

Versions at close: **Hours tool v0.15.0 · Tone Trainer v0.24.2.**

---

### Session — June 13, 2026 (OCA backfill + LIC opening; Tone Trainer UX overhaul)

**Hours data / assembler**
- **v0.25.2** docx tone-tag fix: run extraction renders `<w:tab>/<w:br>/<w:cr>` as a
  space and the tone-heading pattern uses `(?![0-9])` instead of a trailing `\b`, fixing
  stale tones on tab-glued labels (e.g. "Tone 8Troparion"). Tone/run helpers consolidated
  into `src/lib/docx-text.js` (shared by the browser ingest and the Node snapshot twin).
- **v0.15.15** Octoechos OCA backfill: `octoechos/tone1.js` Saturday-Vespers
  `lic[0–3]` / `aposticha[0–3]` / `dogmatikon` converted from bare St. Sergius strings to
  OCA Tier-3 director-pointed objects (`pointing_source` + `tradition:"OCA"` + `director`).
  New `src/lib/hymn-entry.js` (`normalizeHymn`/`hymnText`/`hymnProvenance`) gives one
  string-or-object read path used by the assembler and the octoechos browser.
- **FW-24** documented: pentecostarion P+63 (`all_saints_sunday`) embeds its own OCA copies
  of seven tone-1 Resurrection fields; the de-dup refactor (pull-from-source, zero-diff
  render proof on 6/14) is now possible since the Octoechos carries the same OCA text.
- **v0.15.16 / v0.15.17** LIC opening ("Lord I Have Cried", Ps 140:1-2 Kekragarion): was a
  single hardcoded St. Sergius string emitted on every Vespers; now tone-of-week propers —
  renders the tone's OCA `lic_opening` when encoded (tone 1) else the unpointed OCA
  `LIC_OPENING_FALLBACK` (octoechos/index.js, single source), as two Point/Score-able
  elements rendered as movable propers (shaded card + gold border + "Tone N:" marker).

**Tone Trainer UX (v0.25.3 → v0.25.7)**
- **v0.25.3** embedded view: a verse fired in from the Hours tool / a data browser
  (`oht_handoff` carrying a `.verse`) hides the authoring chrome (ingest, tone picker,
  paste box, Point Verses, Director/Machine toggles, timbre). Gated on `embeddedVerseView`,
  NOT `cameFromHours` — a bare `?from=tool` footer visit still shows the full UI.
- **v0.25.4** play-bar reorder (Play left; Point Verses + Score right) and uniform 32px
  `box-sizing` button heights; header copy: eyebrow "Orthodox Daily Hours · Tone Trainer",
  H1 "Common Chant · Obikhod · Tone N", subtitle removed; ingest button "Load Service .docx".
- **v0.25.5** version is now an inline borderless clickable label on the eyebrow; Point
  Verses moved to the tone row right of "try example", greyed until the textarea has
  content; play bar + info-bar legend/controls gated on `hasPointed` (progressive disclosure).
- **v0.25.6** phrase chips scroll horizontally instead of wrapping — the structural fix for
  long-verse / Alto+Bass / SATB / small-screen breakage. The per-voice strips were
  independent `flex-wrap` rows and the soprano-over-alto / tenor-over-bass overlays were
  fixed-height single-line containers, so a wrap desynced columns and spilled chips out of
  the box. Strips are now `nowrap` inside one `overflow-x:auto` viewport per phrase (new
  `PhraseScroller`, inline-flex column track); edge fades cue overflow; playback auto-centers
  the active chip (`data-active` + rect-based scroll). Decision: forced scroll over CSS wrap —
  lower risk to the tuned chip render, musically truer, responsive for free.
- **v0.25.7** scroller polish: bottom padding so chips don't sit flush against the scrollbar;
  thin lighter warm-grey scrollbar (`scrollbar-color`/`scrollbar-width`).
- **FW-25** logged: small-screen (phone ~375–430px) chip sizing still **under investigation**
  — candidate is a chip-width/label scale-down below a breakpoint; needs real-device
  measurement before any code.

**Tone Trainer + Hours UI overhaul (second June-13 session, v0.25.8 → v0.25.16 / v0.15.18 →
v0.15.24)** — full detail in the dated prose notes at the top of this file. In brief: Hours masthead
+ iOS-safe `ServiceSelector` popover + Dismissal de-dup + responsive controls/context header +
desktop scroll-lock fix + cross-platform play/stop glyphs; Tone Trainer restyled to match the data
browsers, then a mobile pass — `isNarrow` (≤600px) bare-glyph transport, a reusable `PopoverSelect`
now driving BOTH the SATB and pitch (do) pickers, two-row info bar (centered legend + full-width
selector on mobile), chip-white textarea. **Next session is expected to be data work — see the
"NEXT SESSION (data) — OCA director-pointed backfill" recipe near the top of this file.**

Versions at close: **Hours tool v0.15.24 · Tone Trainer v0.25.16.**

---

### Session — June 15, 2026 (Tone Trainer iOS playback sync fix — v0.25.17)

**Investigation: audio/visual chip highlight lag on iPhone (intermittent)**

Reported symptom: occasional visible lag between audio and chip highlight during
playback on iPhone. Desktop playback has reliable sync. Intermittent on mobile only.

Root cause confirmed from code inspection: all per-chip visual updates were registered
as bulk `setTimeout` calls at play-start. iOS Safari throttles timers with long delays
(>1s), causing the visual highlight to drift behind audio. The audio clock
(`audioCtx.currentTime`) runs on a dedicated hardware thread and is immune to this
throttling.

**Fix (v0.25.17):** Replace all per-chip `setTimeout` highlight scheduling with a single
`requestAnimationFrame` polling loop keyed to `audioCtx.currentTime`. The rAF loop
reads the hardware audio clock every frame and advances the active chip index exactly
when the audio clock says it is due — immune to timer throttling. Audio scheduling
unchanged; only the visual sync mechanism changed. `stopAll()` cancels the rAF loop via
`cancelAnimationFrame`.

**Status: deployed. Monitoring in actual parish usage to confirm the iOS lag bug is resolved.**

---

### Session — June 15, 2026 (Cross-platform audio fixes — v0.25.18 through v0.25.27)

**Investigation: Android Galaxy S6 Lite (Exynos 9611, One UI 6.1, Chrome) audio crackle
and iOS iPhone audio/visual regressions introduced during Android work.**

This was an extended multi-iteration investigation. The final solution required
understanding three distinct root causes at different layers of the Web Audio stack.
Full diagnostic log below for future sessions.

---

**Root cause 1 — Scheduling burst overrun (fixed v0.25.18)**

At play-start, `playAll` created all AudioNodes for all phrases and voices in one
synchronous JS burst (~2160 nodes at 4 harmonics, ~1200 after harmonic reduction).
On Exynos 9611 (~0.07ms/node), this burst took 120–200ms, exceeding the 60ms
`startT` lookahead. Notes were scheduled in the past; the Android audio buffer (~85ms)
committed the first buffer mid-burst, producing verse-1 silence and garbled audio.

Fix: two-part. (A) Reduce harmonics from 4 to 2 in `playPianoNote` — partials 3+4
carry 1.5% of signal energy (0.07dB level difference, inaudible), cutting nodes/note
from 9 to 5. (B) `AUDIO_LOOKAHEAD` constant: `0.25s` on Android (via
`/Android/i.test(navigator.userAgent)`), `0.06s` on iOS/desktop. The 250ms covers the
~110ms post-harmonic-reduction burst with 2.3× margin. iOS/desktop use 60ms, identical
to pre-v0.25.18 behaviour. All four `AUDIO_LOOKAHEAD` uses (two `startT`, two `onDone`
offsets) adapt automatically from the single constant.

**Root cause 2 — GainNode default-gain race condition (fixed v0.25.20/v0.25.23)**

`GainNode` default `gain.value` is 1.0 per the Web Audio spec. The previous code
zeroed it via a *scheduled* `setValueAtTime(0, t0)`, but on Android Chrome the audio
thread may process `o.start(t0)` before that event, emitting full-gain audio for one
2.67ms quantum before the gain drops — producing a click at every note onset.

Fix: `g.gain.value = 0` synchronously in JS at construction time, before any audio
thread processing. Guarded by `/Android/i.test(navigator.userAgent)` because WebKit's
`AudioParam.value` assignment with pending scheduled automation differs from Chrome's
implementation: on iOS it cancels pending automation and causes a pop and start delay.
iOS uses the original path (no `g.gain.value = 0`).

**Root cause 3 — Audio graph traversal overrun (fixed v0.25.24 → v0.25.27)**

The Web Audio thread traverses the entire connected node graph every 128-sample quantum
(2.67ms at 48kHz). With all ~1200 nodes pre-created and simultaneously connected,
traversal took ~6ms — overrunning the 2.67ms quantum budget and causing buffer
underruns (crackle). Confirmed by the diagnostic observation that the last phrase
always played cleanly: by phrase 4, earlier phrases' oscillators had stopped and were
skipped by Chrome's traversal, reducing effective graph size enough to fit within the
quantum.

Fix evolution:

- **v0.25.24**: Phrase-level JIT — deferred each phrase's node creation to a second
  rAF loop (`jitRafRef`) that created phrase N's nodes ~500ms before phrase N played.
  Reduced max live nodes from ~1200 to ~300. Chip-highlight schedule built completely
  at play-start (visual sync unchanged). Partially successful but crackle persisted on
  long recitations.

- **v0.25.26**: Phrase 0 forced synchronous (intermediate fix, superseded). Identified
  that `JIT_WINDOW (0.5s) > AUDIO_LOOKAHEAD (0.25s)` meant phrase 0 always triggered
  on the first rAF tick, placing a ~21ms burst inside a 16ms frame budget. Moved phrase
  0 to synchronous creation. Still crackled on long recitations because entire phrases
  were still burst-created.

- **v0.25.27**: Note-level JIT — final and correct fix. `playAll` Phase 1 builds a
  flat `noteQueue[]` of all notes (all phrases, all voices) sorted by `t0`, with `freq`
  pre-computed and **zero `toneTimbre` calls**. Phase 3 JIT rAF loop uses
  `NOTE_WINDOW = AUDIO_LOOKAHEAD × 0.6` (150ms Android, 36ms iOS/desktop) — each
  frame creates only notes whose `t0 ≤ now + NOTE_WINDOW`. Steady-state per-frame
  cost: ~4 nodes (<1ms). A 10-syllable recitation creates ~1 note/voice/frame —
  never a burst regardless of recitation length. `phraseTimings[]`, `noteQueues[]`,
  and the `li === 0` synchronous branch are removed.

**Additional envelope fix (v0.25.25)**

The linear attack ramp (`linearRampToValueAtTime(peak, t0+0.01)`) has maximum slope at
t0 — the most aggressive possible onset. Replaced with exponential ramp from a
near-zero starting value: `setValueAtTime(0.0001, t0)` + `exponentialRampToValueAtTime
(peak, t0+0.015)`. Exponential ramp has zero initial slope, eliminating the attack
transient click. 0.0001 = -80dB (inaudible). 15ms ramp is 2% of H at 80 BPM.

**iOS regressions introduced and fixed during Android investigation:**

Several Android fixes caused iOS regressions before being made platform-specific:

- `g.disconnect()` (attempted in v0.25.19, v0.25.21): caused iOS double-note and sync
  issues. Root cause not fully isolated; approach abandoned. `g.disconnect()` does NOT
  appear in the final codebase.
- `scrollIntoView({ block:"nearest", inline:"center" })` (v0.25.19): iOS Safari walked
  the scroll ancestor chain and triggered unwanted page-level vertical scroll on chip
  advance, corrupting visual sync. Reverted; `getBoundingClientRect + el.scrollTo`
  path restored.
- `g.gain.value = 0` (v0.25.20): on iOS, WebKit's `AudioParam.value` assignment with
  pending automation differs from Chrome — caused pop and start delay. Made
  Android-only via UA detection (v0.25.23).
- `AUDIO_LOOKAHEAD = 0.25s` (v0.25.18): introduced 250ms start delay and async
  resume popping on iOS. Made platform-adaptive (v0.25.22): Android 0.25s, iOS/desktop
  0.06s.

**Final state (v0.25.27): confirmed clean on Android Galaxy S6 Lite, iPhone, and**
**Windows 11 desktop Chrome.**

**Architecture of current `playAll` (v0.25.27):**
- Phase 1 (synchronous): builds `schedule[]` (chip highlights, all audioT complete)
  and `noteQueue[]` (flat sorted note list, freq pre-computed). Zero audio nodes.
- Phase 2: chip-highlight rAF (`rafRef`) — identical to v0.25.17.
- Phase 3: note-level JIT rAF (`jitRafRef`) — creates notes as they enter
  `NOTE_WINDOW`. `stopAll()` cancels both rAF handles; `try/catch` handles
  `ctx.close()` race.

---

### Session — June 15, 2026 (Tone Trainer iOS playback sync fix — v0.25.17)

**Investigation: audio/visual chip highlight lag on iPhone (intermittent)**

Reported symptom: occasional visible lag between audio and chip highlight during
playback on iPhone. Desktop playback has reliable sync. Intermittent on mobile only.

Root cause confirmed from code inspection: all chip highlight updates were driven by
`setTimeout` calls registered in bulk at play-start. For a 4-phrase SATB Sing All,
~200–250 `setTimeout` calls were queued simultaneously, with delays ranging from
near-zero up to 15–20 seconds. iOS Safari throttles timers with long delays (>1s),
causing the visual highlight to drift behind the audio. The audio clock
(`audioCtx.currentTime`) runs on a dedicated hardware thread and is immune to this
throttling. The mismatch is intermittent because it depends on GC pauses, touch-event
handling, and compositor load at the moment each timer fires.

**Confirmed not a cache issue.** The behavior is runtime scheduling, not a code-version
artifact. Smooth chip-follow scroll (`behavior: "smooth"` in `PhraseScroller`) was
identified as a contributing stressor on mobile but retained by decision — it will only
be revisited if the rAF fix alone proves insufficient.

**Fix: rAF polling loop keyed to `audioCtx.currentTime` (v0.25.17)**

Replaced all per-chip `setTimeout` highlight scheduling with a single
`requestAnimationFrame` polling loop that reads the hardware audio clock each frame
and fires highlight state updates exactly when due.

Changes in `src/components/tone-trainer.jsx`:

- **`rafRef`** added alongside `timerIdsRef` — holds the rAF handle, cancelled by `stopAll()`.
- **`playNotesWithBass()`** — `scheduleAltoHighlights()`, `scheduleBassHighlights()`, and the inline tenor scheduling block replaced. All per-chip state updates now push `{ audioT, action }` entries into a local `schedule[]` array (absolute `audioCtx` timestamps, not wall-clock milliseconds). After all voices are scheduled, the array is sorted ascending by `audioT` and a single `tick()` rAF loop is launched that advances a cursor through the schedule as `c.currentTime` catches up.
- **`playAll()`** — same treatment for the multi-line Sing All path. The per-chip and line-start `setTimeout` calls replaced by schedule-table pushes + a shared rAF tick loop.
- **`stopAll()`** — `cancelAnimationFrame(rafRef.current)` added as the first line before the existing `timerIdsRef` clear.
- **`onDone` cleanup `setTimeout`** (end-of-playback state reset) — unchanged in both `playNotesWithBass` and `playAll`. Single timer, 40ms grace buffer, already pushed to `timerIdsRef` and cancelled by `stopAll()` — not subject to the multi-timer throttle problem.

Scope confirmed unchanged: audio scheduling (`toneTimbre` calls, note timing math),
chip geometry (`chipW`, `chipH`, solfège labels), `PhraseScroller`, smooth follow-scroll,
all React state shapes, and `timerIdsRef` (still used for `onDone`).

Regression gate: 13/13 pass + `npm run build` clean before push.

**Status: deployed. Monitoring in actual parish usage to confirm the iOS lag bug is resolved.**

---

## CRITICAL: Long Text Protocol

**Any psalm, gospel, epistle, or other passage over ~400 words cannot be written
as an inline string to any tool call parameter.** This includes `create_file`,
`str_replace`, `bash_tool` heredocs, and Python `-c` arguments. They all share
the same parameter length limit and will silently truncate or fail.

### Known long passages in this project
- All three psalms of the 3rd Hour (16, 24, 50) — Psalm 24 and 50 are long
- All three psalms of the 6th Hour (53, 54, 90) — Psalm 90 is long
- Any gospel or epistle reading added in future (Matins, Liturgy assembly)
- Canon odes when Matins assembly is built

### The only method that works for long text
Write in chunks using `printf` append (max ~300 chars per call), inject via Python
reading from the temp file, and splice into the tool via Python read/replace.

### SAMPLE_MENAION insertion anchor
New entries must be inserted **before** `\n};\n\nfunction getMenaionEntry` —
NOT before `// --- FIXED TEXTS` which closes the glossary object. Always verify:
```python
sam_close = tool.find('\n};\n\nfunction getMenaionEntry')
```

### feast_e/feast_g insertion anchor
Always insert immediately **before** `troparion: {` — the most reliable anchor
in every Menaion entry. Never use note field end as anchor (multi-line strings fool it).

---

## CRITICAL: SAMPLE_MENAION Purity Rule (established 2026-05-20)

**feast_e and feast_g fields in SAMPLE_MENAION must contain only readings sourced
directly from the saint's Menaion PDF (or confirmed from oca.org/saints/troparia
for that date). They must never contain Pentecostarion Sunday propers, All Saints
Sunday readings, or any reading that belongs in the PENTECOSTARION object.**

If a fixed-calendar date in a given year happens to fall on a movable Sunday or
named feast day, that collision is documented only in the `note` field as a
human-readable annotation. The feast_e / feast_g fields always hold the
fixed-calendar Menaion readings. The calendar engine handles all runtime
collision resolution automatically.

### Rationale
The SAMPLE_MENAION and PENTECOSTARION objects are architecturally separate.
SAMPLE_MENAION is keyed by calendar date (e.g., "06-14") and holds fixed-calendar
data valid for any ordinary year. PENTECOSTARION is keyed by Pascha offset (integer)
and holds all movable data. At runtime, getLiturgicalData() determines which governs.
Contaminating SAMPLE_MENAION with movable data creates silent errors: the wrong
readings appear in ordinary years when no override is active.

### How to check at encoding time
Before saving any feast_e or feast_g value, verify it appears in the saint's
Menaion PDF AT LITURGY section. If the value came from a different source (e.g.,
copied from an OCA calendar page for a specific year), it must be rejected.

Cross-check: Pentecostarion readings are always from Acts, John, or the Sunday
cycle Epistles (Romans through Hebrews in sequence). If a candidate feast_e is
from Acts, John 7-21, or follows the Sunday Epistle rotation, treat it as
suspicious and verify against the PDF.

### Known contaminations found and fixed (2026-05-20)
1. **"06-07"** — A fully rogue entry (saint: "All Saints", rank: "great") had been
 inserted as a SAMPLE_MENAION key, containing All Saints Sunday propers
 (Hebrews 11:33-12:2 / Matthew 10:32). This data belongs exclusively in
 PENTECOSTARION[56]. The rogue entry was also structurally malformed (feast_e/feast_g
 nested inside the troparion block). A duplicate "06-07" key existed; JS silently
 resolved it in favor of the correct second entry. The rogue entry has been deleted.
2. **"06-14"** — feast_e: "Hebrews 11:33-12:2" and feast_g: "Matthew 4:25-5:12" were
 All Saints Sunday propers written into the Menaion record. Corrected to the actual
 PDF readings: James 5:10-20 (§57) / Luke 4:22-30 (§14).

Full audit run 2026-05-20 — no other contaminations found.

---

## Source Hierarchy
| Layer | Source | Role |
|---|---|---|
| Assembly rules | Fekula & Williams (2009) | Authoritative — all decisions traced here |
| OCA rank & practice | oca.org/liturgics/outlines | OCA-specific application |
| OCA calendar & hymnography | oca.org/saints/troparia/YYYY/MM/DD | Live troparion/kontakion texts |
| Full service texts (daily) | St. Sergius Menaion PDFs (Google Drive) | Complete services per day |
| Full service texts (fallback) | St. Sergius General Menaion (Google Drive) | By saint type when daily PDF incomplete |
| Fixed skeleton | HTM Horologion (Google Drive: Horologion/) | Invariable Hour texts |

---

## Google Drive Structure

```
orthodox_liturgics/
  fekula_order_of_divine_services_complete_sm_ocr.pdf
  fekula_chapter_1.txt <- Sunday Services §1A–§1F3 (51KB)
  fekula_chapter_2.txt <- Weekday Services §2A–§2G4 (66KB)
  fekula_chapter_3a.txt <- Triodion: Publican & Pharisee through Lazarus Saturday (130KB)
  fekula_chapter_3b.txt <- Triodion: Palm Sunday through Holy Week (65KB)
  fekula_chapter_4.txt <- Pentecostarion §4A–§4B17 (94KB) — PRIMARY ASSEMBLY RULES SOURCE
  fekula_chapter_5.txt <- Intentionally empty (replaced by 3rd ed. Vol. III)
  fekula_chapter_6.txt <- Theotokia usage (9KB)
  fekula_chapter_7.txt <- Kathismata (10KB)
  fekula_chapter_8.txt <- Canons at Matins (6KB)
  fekula_chapter_9.txt <- Liturgical Books (6KB)
  fekula_chapter_10.txt <- Services Without a Priest (3KB)
  fekula_pascha_extract.txt <- Legacy pre-extract; superseded by chapter files
  Daily/HTM/
    HTM_daily_troparia_kontakia_alleluia_prokimena.txt (8KB)
  Feasts/HTM/
    HTM_12_great_feasts_troparia_kontakia.txt (8KB)
  Triodian/HTM/
    HTM_selected_material_from_triodian.txt (23KB)
  Pentecostarion/
    HTM/
      HTM_selected_material_from_pentecostarion.txt (31KB) <- SECONDARY: summary texts only
    st-sergius-pdf/ <- PRIMARY TEXT SOURCE: 59 daily full-service PDFs
      10.pdf 10A.pdf 11.pdf ... 86.pdf 90.pdf 100.pdf 110.pdf
      [encoded .txt records also live here — see Pentecostarion Encoding section]
  Horologion/HTM/
    htm_1st_hour.pdf, htm_3rd_hour.pdf, htm_6th_hour.pdf, htm_9th_hour.pdf
  Menaion/
    st-sergius-pdf/ <- daily PDFs + encoded .txt files
    general-menaion/ <- 26 General Menaion PDFs by saint type (all uploaded)
  Octoechos/
    octoechos_vespers.txt <- pipe-delimited stichera data, all 8 tones (145KB)
    tone1/ <- 7-1.pdf through 7-7.pdf (Sat + 6 weekday files)
    tone2/ <- same structure
    tone3/ <- same structure
    tone4/ <- same structure
    tone5/ <- same structure
    tone6/ <- same structure
    tone7/ <- same structure
    tone8/ <- same structure
    common_theotokia/ <- (reserved; not yet encoded)
```

---

## Octoechos Vespers Data File — `octoechos_vespers.txt`

### What it is
A pipe-delimited flat file encoding all Vespers stichera from the St. Sergius
Octoechos for all 8 tones. This is the data source for the LIC and Aposticha
assembler once FW-23 is built.

### Location
`orthodox_liturgics/Octoechos/octoechos_vespers.txt`

### Format
```
tone|day|type|index|text
```
- `tone`: 0–8 (0 = universal fixed verses, same all tones)
- `day`: sat, sun_eve, mon, tue, wed, thu, fri
- `type`: lic, aposticha, aposticha_glory, lic_dogmatikon (Friday only),
          dogmatikon (Saturday Both Now), verse_weekday_1/2, verse_sat_1/2/3
- `index`: 1–N for numbered stichera; 0 for single texts (glory, dogmatikon, verses)

### Coverage
477 total records across all 8 tones.

| Tone | Records | Status |
|---|---|---|
| 0 (universal) | 5 | Complete — fixed weekday + Saturday aposticha verses |
| 1 | 59 | Complete |
| 2 | 59 | Complete |
| 3 | 59 | Complete |
| 4 | 59 | Complete |
| 5 | 59 | Complete |
| 6 | 59 | Complete |
| 7 | 59 | Complete |
| 8 | 59 | Complete |

### Intentional stubs
Saturday `aposticha_glory` (8 records, one per tone) are marked
`[Glory from Menaion if appointed]` — this is correct rubrical behavior.
At Great Vespers the Glory is always supplied by the Menaion; the Octoechos
provides no text for that slot.

### Per-tone structure (59 records each)
Each tone covers 7 days × ~8 record types:
- **sat**: 7 lic + 4 aposticha + 1 aposticha_glory (Menaion stub) + 1 dogmatikon = 13
- **sun_eve**: 3 lic + 3 aposticha + 1 aposticha_glory = 7
- **mon/tue/wed/thu**: 3 lic + 3 aposticha + 1 aposticha_glory = 7 each
- **fri**: 6 lic + 1 lic_dogmatikon + 3 aposticha + 1 aposticha_glory = 11
  (6 LIC stichera because on Friday evening all 6 come from Octoechos if no Menaion;
  fallback only per Fekula §2A Friday rule)

### Source PDFs
Each tone's data was read from 7 PDFs (files named N-1.pdf through N-7.pdf)
in the corresponding tone folder on Drive. File IDs are in the session transcript
if needed for re-reading.

### Next step (FW-23)
Load this file in the tool and build the LIC + Aposticha interleave assembler.
See FW-23 and FW-OCTOECHOS-VESPERS sections below.

---

## Typica Assembler — v0.3.2 (FW-17 Phase 1)

### What was built
`assembleTypica()` function delivering a complete Order of the Typica for ordinary
Octoechos time (Sundays + Mon–Sat outside Lent and Bright Week). The Typica is
served in place of the Divine Liturgy when no Liturgy is celebrated, following the
6th Hour.

### Source authority
- **HTM Order of the Typica** (`htm_typica.pdf`) — primary assembly source
- **OCA outline** — structural confirmation and Beatitudes text
- **Fekula Ch.10** — reader service substitution rules (Ch.10 toggle)

### Fixed skeleton (invariable elements)
| Element | Source |
|---|---|
| Opening | HTM |
| Psalm 102 | HTM (full text) |
| Psalm 145 | HTM (full text) |
| Only-Begotten Son | HTM |
| The Beatitudes | OCA translation (replaces HTM version); Glory/Both now as final verse |
| Remember Us (×3) | HTM |
| The Heavenly Choir | HTM |
| The Creed | HTM |
| Forgiveness Prayer | HTM |
| Our Father | HTM |
| Lord Have Mercy ×40 | Rubric notation — "Lord, have mercy. (forty times)" |
| Psalm 33 | HTM (full text) |

### Movable elements
| Element | Routing |
|---|---|
| Prokeimenon | pentEntry.prokeimenon_text > SUNDAY_RESURRECTIONAL_PROKEIMENON[tone] > TYPICA_WEEKDAY_PROKEIMENON[dow] |
| Epistle | OCA lectionary cycle (getDailyReading); separate from Gospel |
| Alleluia | pentEntry.alleluia_verse > menaionEntry.alleluia_verse > TYPICA_WEEKDAY_ALLELUIA[dow] > SUNDAY_RESURRECTIONAL_ALLELUIA[tone] |
| Gospel | OCA lectionary cycle; separate from Epistle |
| Kontakia | Sunday → Hypakoë of tone (OCTOECHOS_HYPAKOE); weekday → TYPICA_KONTAKIA[dow] + saint prepended |
| Dismissal | Built dynamically: Sunday/Pentecostarion feast/weekday saint formula |

### New data tables encoded
- `TYPICA_WEEKDAY_PROKEIMENON` — Mon–Sat, from HTM daily file; Saturday carries two prokeimena
- `SUNDAY_RESURRECTIONAL_PROKEIMENON` — 8-tone table, St. Sergius Octoechos
- `TYPICA_WEEKDAY_ALLELUIA` — Mon–Sat, from HTM daily file
- `SUNDAY_RESURRECTIONAL_ALLELUIA` — 8-tone table, St. Sergius Octoechos (gap closed)
- `TYPICA_KONTAKIA` — Mon–Sat daily sequences, HTM pp.5–6
- `OCTOECHOS_HYPAKOE` — all 8 tones + Pascha, St. Sergius Sunday Octoechos PDFs

### Prokeimenon routing rules
1. `pentEntry.prokeimenon_text` governs — Menaion suppressed
2. Sunday resurrectional by tone — Menaion suppressed
3. Weekday daily — feast-proper (`menaionEntry.prokeimenon_text`) appended only for §2E/§2F rank

### Ch.10 reader service toggle
- **Our Father ending:** served → gold `Priest:` + "For Thine is the kingdom…"; reader → §10 substitution
- **Prokeimenon:** served → gold `Priest (or Deacon):` + "Wisdom! The Prokeimenon…"; reader → strips "Wisdom!", `Reader:` label
- **Dismissal:** served → gold `Priest:` + built formula; reader → §10 substitution "Through the prayers of our holy fathers…"

### Beatitudes note
The `beatitudes_troparia` fields in SAMPLE_MENAION and PENTECOSTARION are for the
**Divine Liturgy** Beatitudes antiphon only — NOT used in the Typica. The HTM Typica
reads all Beatitude verses as a fixed sequence with no troparia insertion. Do not
add troparia insertion logic to `assembleTypica()`.

### Reading introductions
Epistle and Gospel render as separate movable blocks. Full NT book coverage for
"The reading is from…" introductions: Acts, Revelation, Hebrews, James, Jude,
numbered Petrine (1/2), numbered Johannine (1/2/3), numbered Pauline (1/2 Cor,
1/2 Thess, 1/2 Tim), and all remaining Pauline epistles by name.

### Phase 1 scope and future work
Phase 1 covers ordinary Octoechos time. Not yet built:
- **Lenten Typica** — different skeleton per HTM (separate structure)
- **Prokeimenon for Liturgy** — distinct from the Typica prokeimenon table; FW-19
- **Sunday Alleluia-by-tone from Octoechos** — encoded as SUNDAY_RESURRECTIONAL_ALLELUIA
  from standard table; should be verified against each Sunday Octoechos PDF when
  those are read for Matins assembly

### ServiceBlock global fix (v0.3.2)
The render order for `type: 'fixed'` elements was corrected: **label** (section title)
now renders before **rubric** (Priest:/Deacon:) globally throughout the tool.
Previously rubric appeared above label, making "PRIEST:" appear above "DISMISSAL" etc.

### Encoding gaps closed via Typica discovery pass
The Typica assembly work surfaced two P+39 encoding errors:
1. **P+39 `prokeimenon_tone/text/stichos`** — was missing entirely; added Tone 7,
   "Be Thou exalted above the heavens, O God" (HTM Pentecostarion file)
2. **P+39 `feast_e/feast_g`** — were wrong; had Pentecost readings (Acts 18:22-28 /
   John 12:36-47). Corrected to Acts 1:1-12 / Luke 24:36-53 per lectionary table.

---

---

## Fekula Source Material — Workflow and File Inventory

### Why the full PDF cannot be read directly
`fekula_order_of_divine_services_complete_sm_ocr.pdf` (8.6MB) always truncates
when read via the Drive API `read_file_content` tool — cuts off mid-Chapter Three
at ~157K chars. Do not attempt to read the full PDF directly in any session.

### Established workflow
The user copy-pastes chapter text from the PDF and uploads chapter-by-chapter `.txt`
files to the `orthodox_liturgics/` Drive folder. These are the authoritative Fekula
reference files for all coding sessions. As the tool expands beyond Hours to cover
full service assembly (Vespers, Matins, Liturgy), the full chapter text is needed —
not just Hours excerpts. Always read the relevant chapter `.txt` file for the work
at hand.

### Notes
- Chapter 3 split into 3a/3b because the combined file (~195KB) risks truncation
- Chapter 5 was removed from the 2nd edition; the 192-byte stub correctly records this
- If a future chapter file risks truncation (>~130KB), split into Xa/Xb at a natural section boundary
- `fekula_pascha_extract.txt` predates the chapter files and is kept for reference;
 the chapter files are now the canonical source — do not create new extracts from the PDF

---

## HTM Unabridged Horologion — Supplementary Material

Four subfolders under `orthodox_liturgics/` contain selected material copy-pasted
from the HTM Unabridged Horologion. These provide full liturgical texts —
troparia, kontakia, prokeimenon, alleluia, communion verses, antiphons — for
contexts beyond the ordinary Hours, and will be the primary text source as the
tool expands to Vespers, Matins, and Liturgy assembly.

### File inventory

**`Daily/HTM/HTM_daily_troparia_kontakia_alleluia_prokimena.txt`** (8KB)
Full weekday cycle Monday through Saturday. Each day includes: troparion with
tone, kontakion with tone, prokeimenon with tone and stichos, alleluia with tone
and stichos, communion verse. Saturday includes both the All Saints set and the
Departed set. This is the authoritative source for ordinary weekday liturgical
content beyond the Menaion saint — covers the daily commemorations (Bodiless
Hosts, Forerunner, Cross, Apostles/Nicholas, Cross, All Saints/Departed).

**`Feasts/HTM/HTM_12_great_feasts_troparia_kontakia.txt`** (8KB)
All 12 Great Feasts with troparion and kontakion only. No prokeimenon or alleluia
in this file. Covers Nativity of the Theotokos through the Dormition in calendar
order, plus Palm Sunday. Use in conjunction with the Pentecostarion and Triodion
files for feasts that fall within those periods.

**`Triodian/HTM/HTM_selected_material_from_triodian.txt`** (23KB)
Full pre-Lenten and Lenten Sunday cycle from Publican & Pharisee through Holy
Saturday. Each entry includes troparion, kontakion, prokeimenon + stichos,
alleluia + stichos, communion verse. Covers: both Saturdays of the Departed,
all five Lenten Sundays (with saint-specific propers where applicable), Akathist
Saturday, Lazarus Saturday, Palm Sunday (with full three antiphons and stichos),
Holy Thursday (with the Mystical Supper troparion used as Cherubic Hymn and
Communion Verse), Holy Saturday. File ends at "THE END OF THE TRIODION".

**`Pentecostarion/HTM/HTM_selected_material_from_pentecostarion.txt`** (31KB)
**SECONDARY SOURCE** — superseded by the St. Sergius Pentecostarion PDFs as the
primary encoding source. Useful for quick-reference troparia, kontakia, prokeimenon,
alleluia, and communion verse for Sundays and feasts, but does not contain full
stichera, canon odes, or aposticha. When encoding PENTECOSTARION entries, always
read the St. Sergius PDF first; consult this file only for cross-reference or when
a PDF is unavailable. See Pentecostarion Data Architecture section for full details.

**FLAG — Russian usage divergence:** The Second Sunday after Pentecost entry
commemorates All Saints of Russia and All Saints of Mount Athos. This is
Russian-Menaion-specific. The OCA equivalent at P+63 is All Saints of North
America. Apply OCA primacy when implementing — do not use the Russian entry
for OCA assembly without flagging the divergence.

---

## Pentecostarion Data Architecture

### Overview
The Pentecostarion covers Pascha (P+0) through All Saints Sunday (P+56), with the
All Saints of North America Sunday (P+63) as the OCA extension. All liturgical texts
for this period are keyed by **Pascha offset** (integer), parallel to the LECTIONARY
table already in the tool.

The data lives in a `PENTECOSTARION` object — the direct counterpart of `SAMPLE_MENAION`
for the Pentecostarion period. Assembly functions look up the offset, select the
appropriate fields, and render. This keeps texts out of assembly logic entirely.

### Primary Source: St. Sergius Pentecostarion PDFs
Located at: `orthodox_liturgics/Pentecostarion/st-sergius-pdf/`

These are daily full-service books — each PDF covers one day of the Pentecostarion
and contains complete texts for every service (Vespers through Liturgy). They are
the same quality and completeness as the Menaion PDFs. **These are the authoritative
encoding source.** The HTM summary file is secondary and useful for quick reference only.

### PDF File Inventory (59 encodable files)

Naming convention: tens digit = week number (1=Bright Week, 2=Thomas week, etc.),
units digit = day of week (0=Sunday, 1=Monday ... 6=Saturday). Sequence is strictly
sequential P+0 through P+63 with no gaps in the actual day count.

| File(s) | Content | Pascha offsets |
|---|---|---|
| 10 | Pascha Sunday — full Liturgy | P+0 |
| 11–16 | Bright Mon–Sat | P+1 to P+6 |
| 20 | Thomas Sunday (Antipascha) | P+7 |
| 21–26 | Thomas week Mon–Sat | P+8 to P+13 |
| 30 | Myrrhbearers Sunday | P+14 |
| 31–36 | Myrrhbearers week Mon–Sat | P+15 to P+20 |
| 40 | Paralytic Sunday | P+21 |
| 41–46 | Paralytic week Mon–Sat (Mid-Pentecost ~P+25) | P+22 to P+27 |
| 50 | Samaritan Sunday | P+28 |
| 51–56 | Samaritan week Mon–Sat | P+29 to P+34 |
| 60 | Blind Man Sunday | P+35 |
| 61–66 | Blind Man week Mon–Sat (Apodosis P+38, Ascension P+39) | P+36 to P+41 |
| 70 | Holy Fathers Sunday (Ascension afterfeast) | P+42 |
| 71–76 | Holy Fathers week Mon–Sat | P+43 to P+48 |
| 80 | Pentecost Sunday | P+49 |
| 81–86 | Pentecost week Mon–Sat (Holy Spirit Day P+50) | P+50 to P+55 |
| 90 | All Saints Sunday | P+56 |
| 100 | All Saints of Russia Sunday | P+63 — OCA DIVERGENCE (see below) |
| 110 | All Saints of Turkish Yoke Sunday | P+70 — Russian-specific, reference only |

**10A.pdf** — dual-language Paschal canon edition; not a separate liturgical day.
Reference item only; not encoded into PENTECOSTARION.

**OCA flags:**
- **File 100 (P+63):** St. Sergius has All Saints of Russia. OCA observes All Saints
 of North America. Assembly rules and structure fully usable; saint-specific texts
 (troparia, kontakia, stichera) replaced with OCA All Saints NA texts. Lectionary
 already has correct OCA readings for P+63.
- **File 110 (P+70):** Russian-specific commemoration with no OCA equivalent.
 Pentecostarion proper ends at P+56; P+70 is Ordinary Time. Keep as structural
 reference; do not encode into PENTECOSTARION.

### PENTECOSTARION Object Design

Keyed by Pascha offset integer. Mirrors SAMPLE_MENAION field structure exactly.
The `hours_format` field signals the assembly engine which skeleton and troparia
rotation rules to apply per Fekula Chapter 4.

```javascript
const PENTECOSTARION = {
  0: { // P+0 = Pascha Sunday
    name: "Holy and Glorious Pascha",
    source_file: "10.pdf",
    fekula_section: "4B1",
    hours_format: "paschal", // Christ is risen replaces O come let us worship
    troparion: { tone: 5, text: "Christ is risen from the dead..." },
    kontakion: { tone: 8, text: "Though Thou didst descend into the tomb..." },
    // ...
  },
  35: {
    name: "Sixth Sunday of Pascha — Sunday of the Blind Man",
    source_file: "60.pdf",
    fekula_section: "4B11",
    hours_format: "pentecostarion_sunday",
    // ...
  },
}
```

### hours_format Values and What They Trigger

| Value | Period | Fekula | Hours skeleton change |
|---|---|---|---|
| `paschal` | Pascha + Bright Week | §4B1–4B4 | Christ is risen thrice replaces entire beginning; special Paschal Hours format |
| `pentecostarion_sunday` | Sundays P+7 through P+42 | §4B5–4B13 | Standard Sunday with Pentecostarion troparia |
| `pentecostarion_weekday` | Weekdays P+8 through P+48 | §4A | Christ is risen at 1st/6th; Blessed is our God + Christ is risen at 3rd/9th |
| `apodosis_pascha` | Apodosis of Pascha P+38 | §4B11 | Full Paschal ceremony restored; Pascha kontakion at Ode VI; Blind Man at Ode III |
| `ascension` | Ascension P+39 | §4B12 | Feast troparion/kontakion govern; Ascension troparion replaces Christ is risen (see Open Questions) |
| `pentecost` | Pentecost P+49 | §4B15 | Feast troparion/kontakion govern; O Heavenly King restored |
| `all_saints` | All Saints Sunday P+56 | §4B17 | Returns to Oktoechos cycle; tone 1 begins |

### Weekday Troparia Rotation (Fekula §4A — no per-day encoding needed)

Weekdays don't need 42 individual entries for troparia. Fekula §4A defines 4 period
blocks; the assembly engine computes which block applies from the offset:

| Period | Weeks | Troparion at Hours | Kontakion |
|---|---|---|---|
| 1 — Thomas week | P+8 to P+13 | Thomas Sunday troparion + Menaion troparion | Thomas Sunday kontakion |
| 2 — Myrrhbearers week | P+15 to P+20 | Rotating 4-way by hour: Noble Joseph (1st/9th) / When Thou didst descend (3rd) / Unto the Myrrhbearers (6th) + Menaion | Myrrhbearers kontakion |
| 3 — Weeks 4–6 | P+22 to P+41 | Preceding Sunday troparion + Menaion troparion | Preceding Sunday kontakion |
| 4 — Afterfeasts | During afterfeast periods | Feast troparion + Menaion troparion | Feast kontakion |

**Kontakion exception:** If Menaion saint is Doxology/Polyeleos/Vigil rank, the 3rd
and 9th Hours use the Menaion kontakion instead of the period kontakion (Fekula §4A fn.).

**Apodosis exception:** On apodosis days, the feast troparion/kontakion are NOT read
at the 9th Hour — use the Menaion saint instead (Fekula §4A fn. 145).

Sunday troparia for each week are encoded in PENTECOSTARION at their offset. Weekday
assembly logic reads `getPrecedingSunday(offset)` and pulls from there. No duplication.

### Encoded PENTECOSTARION entries (as of v0.3.10)

Drive .txt records live alongside PDFs in `orthodox_liturgics/Pentecostarion/st-sergius-pdf/`

| Offset | File | Name | Format | Drive record |
|---|---|---|---|---|
| P+35 | 60.pdf | Blind Man Sunday | `pentecostarion_sunday` | 60.txt |
| P+36 | 61.pdf | Monday, 6th Week | `pentecostarion_weekday` | 61.txt |
| P+37 | 62.pdf | Tuesday, 6th Week | `pentecostarion_weekday` | 62.txt |
| P+38 | 63.pdf | Apodosis of Pascha | `apodosis_pascha` | 63.txt |
| P+39 | 64.pdf | Ascension | `ascension` | 64.txt |
| P+40 | 65.pdf | Friday, 6th Week (Ascension afterfeast day 1) | `pentecostarion_weekday` | 65.txt |

### Encoding Workflow

**MANDATORY: run the skeleton gate before every push that touches encoding data:**
```
node scripts/check-skeleton.mjs all
```
This must exit 0 (no gaps) before committing. If it exits 1, resolve all gaps first.
A push with skeleton gaps is a protocol violation. The gate uses `FIELD_REGISTRY`
in `src/lib/audit.js` — the same registry the browser data browser uses.

**Why a Menaion simple rank entry shows "complete" with many fields absent:**
This is correct, not a bug. `FIELD_REGISTRY` gates each field's `required()` on rank.
For simple (§2A) entries, aposticha, prokeimenon, alleluia, matins aposticha, and
beatitudes are absent because the Octoechos/weekly cycle governs those sections at
runtime — the Menaion does not supply them. `null` is NOT used for these absent-by-rank
fields; field absence on a simple entry means "Octoechos governs." The `rank` field
itself carries this information for the assembler. Full rationale: `encoding_rule_v2.md` §5.

**Pentecostarion uses `null` differently:** Pentecostarion entries have uniform
structure with no `rank` signal. `null` = confirmed absent by a specific rubric
(e.g. Festal Antiphons replace Beatitudes). This distinguishes confirmed-absent
from not-yet-encoded. Do not apply this pattern to Menaion entries.

The encoding spec is `encoding_rule_v2.md` in repo root — read it before encoding any date.

Same as Menaion encoding — PDF → KEY FIELDS → .txt record on Drive → PENTECOSTARION entry.

**KEY FIELDS template for Pentecostarion entries:**
```
offset: [integer P+0 to P+63]
name: [feast/day name]
source_file: [NN.pdf]
fekula_section: [4A | 4B1 ... 4B17]
hours_format: [paschal | pentecostarion_weekday | pentecostarion_sunday | apodosis_pascha | ascension | pentecost | all_saints]

--- TROPARIA/KONTAKIA ---
troparion_tone / troparion_text
hours_kontakion_tone / hours_kontakion_text (single kontakion governs all Hours — §4A)
kontakion_ode3 / kontakion_ode6 (see encoding_rule_v2.md for routing table)
ikos_text (if present)

--- AT LITURGY ---
feast_e / feast_g (epistle/gospel references)
prokeimenon_tone / prokeimenon_text / prokeimenon_stichos
alleluia_tone / alleluia_verse / alleluia_stichos
communion_verse
zadostoinik_refrain / zadostoinik_irmos (replaces It is truly meet during Pascha period)

--- AT VESPERS ---
stichera_lord_i_cried (full texts with tones and verses — array)
stichera_aposticha (full texts)
litya_stichera (if present)
has_paroemias / paroemia_1 / paroemia_2 / paroemia_3 (for feast Vespers)
dismissal_troparion_note (if differs from Sunday troparion)

--- AT MATINS ---
sessional_hymns (array — after each kathisma)
canon_1 / canon_2 (full ode texts — array of odes, each with irmos + troparia)
exapostilarion_text
stichera_praises (full texts)
matins_gospel_ref (on Sundays)
has_great_doxology (boolean)

--- FLAGS ---
menaion_set_aside (boolean — true for Bright Week, Great Feasts)
has_litya (boolean)
magnificat_sung (boolean)
```

**Capture rule:** Same as Menaion — encode everything on first read, no exceptions.
The cost of re-reading a PDF is high; the cost of capturing an extra field is zero.

### Encoding Priority Order

Phase 1 — Skeleton + Paschal Hours (unblocks the largest scope gap immediately):
  Files 10–16 (P+0 to P+6): Pascha + Bright Week

Phase 2 — Pentecostarion Sundays (enables Sunday assembly for the full season):
  Files 20,30,40,50,60,70,80,90 (all 8 Sundays P+7 to P+56)

Phase 3 — Great Feasts within season:
  Ascension (~64, P+39) ✓ DONE, Pentecost (80, P+49), Mid-Pentecost (~45)

Phase 4 — Weekday fill-in:
  All remaining weekday files (P+8 through P+55)

Phase 5 — P+63:
  File 100 with OCA All Saints NA text substitution

---

## Pentecostarion Hours Implementation (v0.2.2)

### What was built
- `paschaOffset` added to `getLiturgicalData()` return — integer days since Pascha (**Math.floor**, not Math.round — see Bug Fixed below)
- `inScope` expanded to include `pentecostarion` and `brightweek` seasons
- `assemblePentecostarionHour()` function handles all four Hours for all five `hours_format` types
- Dispatch block routes Pentecostarion/Bright Week dates to the new assembler
- Unencoded dates show a "data not yet encoded for P+N" placeholder with week info
- Bright Week shows a placeholder (Paschal Hours assembly in development)

### Confirmed rubrical rules (from Fekula Chapter 4 re-read — May 2026)

**Global skeleton — Christ is risen period (P+0 through P+38, Pascha through Apodosis):**
- 3rd and 9th Hours: Blessed is our God → Christ is risen ×3 → Holy God → O come let us worship → psalms
- 1st and 6th Hours: Christ is risen ×3 replaces O come let us worship
- Sunday dismissal used at all services throughout

**Global skeleton — Ascension period (P+39 through Apodosis of Ascension):**
- 3rd and 9th Hours: Blessed is our God → **Ascension troparion** (replaces Christ is risen) → Holy God → O come let us worship → psalms
- 1st and 6th Hours: **Ascension troparion** replaces O come let us worship
- Source: Fekula §4B1 Liturgy note — "on Ascension and until Pentecost he reads the troparion of Ascension"
- ⚠️ **OPEN QUESTION:** HTM Horologion texts for the 1st, 3rd, 6th, and 9th Hours make no explicit mention of this substitution. Fekula's note is in the Liturgy section. This needs investigation before the Ascension skeleton can be marked correct. See Open Questions below.

**Pentecost:** O Heavenly King restored.

**Kontakion at the Hours — Fekula §4A (confirmed):**
- One kontakion governs all four Hours (NOT a separate ode-III/ode-VI split at the Hours level)
- The ode-III / ode-VI distinction is a **Matins** rubric only, not a Hours rubric
- Period 3 (Weeks 4–6): preceding Sunday kontakion at all Hours
- Exception: Doxology/Polyeleos/Vigil rank Menaion saint → 3rd/9th use Menaion kontakion
- Apodosis of Pascha (P+38): Sunday troparion + Blind Man kontakion (Fekula §4B11 explicit)
- Afterfeasts (Period 4): feast kontakion at all Hours; Menaion at 3rd/9th if Doxology+ rank

**Magnificat rule (confirmed from P+35 vs P+36):**
- OMITTED on Pentecostarion Sundays and Great Feasts
- SUNG on ordinary Pentecostarion weekdays

**Beatitudes ode rotation (weekdays):**
- Monday: Ode I | Tuesday: Ode IV (remaining days — verify from PDFs)

**Vespers prokeimenon rotation:**
- Sunday evening: Tone VI (Great Prokeimenon, 3 verses)
- Monday evening: Tone VIII (ordinary, 1 verse)
- Tuesday evening: Tone I (ordinary, 1 verse)
- Thursday evening (during Ascension afterfeast): Tone VII (Great Prokeimenon)

### Bug fixed: Math.round → Math.floor (paschaOffset)
`paschaOffset` was initially computed with `Math.round`. Because the App constructs
dates at noon (T12:00:00) and `computePascha` returns midnight UTC, `Math.round`
inflated every offset by 1 — every Pentecostarion date was serving the wrong entry.
Fixed to `Math.floor`, consistent with all other offset calculations in the codebase.

### Bug fixed: literal newlines in JS double-quoted strings
Python's line-range replacement wrote literal newlines into double-quoted JS string
literals. Fixed by scanning the assembler function and replacing all 27 literal
newlines inside double-quoted strings with `\n` escape sequences.

### Open questions — must resolve before Hours assembly marked stable

**1. HTM Horologion full psalm texts** ✅ RESOLVED v0.2.3
All four HTM Hour PDFs read. All 12 psalm texts inserted verbatim. All four theotokions,
appointed verses, and closing prayers inserted from HTM source. Skeleton rebuilt entirely
from HTM. Citation on every element.

**2. Ascension troparion at Hours** ✅ RESOLVED v0.2.3
HTM is authoritative and explicit: Christ is risen substitution runs "From Thomas Sunday
through the Apodosis of Pascha" only. After Apodosis: O Heavenly King omitted (Fekula §4B11),
not replaced by Ascension troparion. Fekula's Ascension troparion note is in the Liturgy
section only — it does not govern the Hours. The incorrect Ascension troparion substitution
has been removed from the assembler.

**3. Full testing of all six encoded dates across all four Hours**
Testing was interrupted after the Math.round bug fix. Dates to verify:
- May 17 (P+35, Sunday): Christ is risen, Blind Man kontakion
- May 18 (P+36, Monday): Christ is risen, preceding Sunday troparion/kontakion
- May 19 (P+37, Tuesday): same structure as Monday
- May 20 (P+38, Wednesday, Apodosis): last day of Christ is risen; special Liturgy
- May 21 (P+39, Thursday, Ascension): pending question #2 re: opening
- May 22 (P+40, Friday, afterfeast): Ascension troparion structure
- May 23 (P+41, Saturday): unencoded placeholder
- Test all four Hours for each date; verify Fekula citations are correct

---

## Reading System Architecture

### Four Reading Types

**TYPE 1 — Paschal Cycle** (DONE)
Epistle + Gospel from the continuous NT sequence, keyed by Pascha offset.
298-entry LECTIONARY table, P-101 through P+263. Lukan Jump computed dynamically.
Displayed as "Readings:" in context card (or "Sunday proper:" on named Sundays).

**TYPE 2 — Feast Proper NT Readings** (COMPLETE for all June)
Epistle + Gospel specific to the saint/feast, from Menaion AT LITURGY section.
Stored as `feast_e`/`feast_g` on SAMPLE_MENAION entries, keyed to fixed MM-DD date.
Also includes prokeimenon_tone/text/stichos, alleluia_tone/verse/stichos, and
communion_verse for all §2C+ saints.
Displayed as "Feast readings: (proper for this commemoration)".
Suppressed when a movable Sunday governs (namedDayIsSunday = true).
Source: Menaion PDFs AT LITURGY section; OCA where PDF absent.
Currently encoded: all 30 June dates complete. July: Jul 1/2/3/14/15 complete.

**TYPE 3 — OT Paroemias / Vespers Lessons** ✅ BUILT (v0.2.6, FW-21)
Displayed in context card for §2E/§2F Menaion saints and Pentecostarion P+42/P+49/P+56.
VespersLessonsExplainer ⓘ always visible — teaches governing rule (Fekula §2A–§2G),
verbatim Fekula citation, and suppression disclosure. Eight distinct cases handled.
Collision resolution: §2G3 suppresses Great Feast paroemias at afterfeast; §2G2
retains Polyeleos/Vigil paroemias within feast periods.
All June paroemias now encoded in SAMPLE_MENAION — gap fully closed for June.

**TYPE 4 — Lenten Lectionary** (FW-05, OUT OF SCOPE until Lenten Hours built)
OT weekday readings (Isaiah/Genesis/Proverbs) during Lent.
NT Epistle+Gospel on Lenten Saturdays and Sundays.

### Movable Sunday Collision Resolution (v0.2.0)
All 19 Sunday named day entries carry `isSunday: true`. When a named Sunday
falls on a fixed Menaion date, `namedDayIsSunday` suppresses the fixed
`feast_e`/`feast_g` display — the Paschal cycle reading at that offset IS the
Sunday proper reading. Label changes from "Readings:" to "Sunday proper:"
with a "(proper for [named day])" annotation.

Confirmed collision cases:
- Jun 14 2026: All Saints NA Sunday over Prophet Elisha/Methodius
- Jun 11 2028: All Saints Sunday over It Is Truly Meet Icon
- Jun 9 2030: Holy Fathers Sunday over St Cyril of Alexandria
- Jun 8 2031: All Saints Sunday over GM Theodore Stratelates

### Lectionary Architecture
LECTIONARY object: keyed by Pascha offset (integer). Negative offsets stored as
string keys ("-101" etc.) due to JS object literal constraints.
getDailyReading() handles both: `LECTIONARY[offset < 0 ? String(offset) : offset]`.
P+56 (All Saints Sunday) and P+63 (All Saints NA) in LECTIONARY table.
getLukanJumpOffset(year): Monday after Sunday on/after Sep 14. Dynamic per year.
Uses Math.floor (not Math.round) to avoid noon/midnight rounding error.

---

## Paschal Calendar — Verified Dates

### Algorithm
Meeus/Jones/Butcher algorithm, Julian calendar, +13 days to Gregorian.
**Verified correct against OCA desk calendar for 2026, 2027, and 2028.**
Do not modify the algorithm.

### Pascha dates
| Year | Pascha | Lent begins (Clean Monday) | Ascension | Pentecost |
|---|---|---|---|---|
| 2026 | April 12 | February 23 | May 21 | May 31 |
| 2027 | May 2 | March 15 | June 10 | June 20 |
| 2028 | April 16 | February 28 | May 25 | June 4 |

### Key Pascha offsets (all verified — do not modify)
| Offset | Feast | Day of week |
|---|---|---|
| -70 | Sunday of the Publican & Pharisee | Sunday |
| -63 | Sunday of the Prodigal Son | Sunday |
| -57 | Meatfare Saturday | Saturday |
| -56 | Meatfare Sunday | Sunday |
| -50 | Cheesefare Saturday | Saturday |
| -49 | Cheesefare Sunday (Forgiveness Sunday) | Sunday |
| -48 | Clean Monday — Lent begins | Monday |
| -42 | 1st Sunday of Lent (Orthodoxy Sunday) | Sunday |
| -35 | 2nd Sunday of Lent (St Gregory Palamas) | Sunday |
| -28 | 3rd Sunday of Lent (Veneration of the Cross) | Sunday |
| -21 | 4th Sunday of Lent (St John Climacus) | Sunday |
| -15 | Akathist Saturday | Saturday |
| -14 | 5th Sunday of Lent (St Mary of Egypt) | Sunday |
| -8 | Lazarus Saturday | Saturday |
| -7 | Palm Sunday | Sunday |
| 0 | **PASCHA** | Sunday |
| +7 | Thomas Sunday | Sunday |
| +14 | Sunday of the Myrrhbearers | Sunday |
| +21 | Sunday of the Paralytic | Sunday |
| +28 | Sunday of the Samaritan Woman | Sunday |
| +35 | Sunday of the Blind Man | Sunday |
| +38 | Apodosis of Pascha | Wednesday |
| +39 | Ascension | Thursday |
| +42 | Holy Fathers of the First Ecumenical Council | Sunday |
| +49 | Pentecost | Sunday |
| +56 | All Saints Sunday | Sunday |
| +63 | All Saints of North America | Sunday |

### Movable dates by year
**2026:** Pascha Apr 12 · Holy Fathers May 24 · Pentecost May 31 · All Saints Jun 7 · All Saints NA Jun 14
**2027:** Pascha May 2 · Lent begins Mar 15 · Holy Fathers Jun 13 · Pentecost Jun 20 · All Saints Jun 27 · All Saints NA Jul 4
**2028:** Pascha Apr 16 · Lent begins Feb 28 · Holy Fathers May 28 · Pentecost Jun 4 · All Saints Jun 11 · All Saints NA Jun 18

---

## Menaion Encoding Workflow

### Step-by-step: PDF -> Tool
1. User uploads PDF to Drive: orthodox_liturgics/Menaion/st-sergius-pdf/
2. Fetch OCA calendar page first (oca.org/saints/lives/YYYY/MM/DD) — Julian/Gregorian sanity check
3. Claude reads PDF via Google Drive API (read_file_content)
4. Claude extracts KEY FIELDS into raw .txt file saved to same Drive folder
5. Claude updates SAMPLE_MENAION in the tool JSX

### KEY FIELDS Template
```
date: MM-DD
service_file: [MM-DD.pdf]
service_rank: [simple | six_stichera | doxology | polyeleos | vigil]
fekula_section: [2A | 2B | 2C | 2D | 2E | 2F]

--- TROPARIA ---
troparion_tone: [1-8]
troparion_text: [full text]
troparion_2_tone: [1-8] (if second troparion present — e.g. double commemoration)
troparion_2_text: [full text] (capture even if tool does not yet display it)

--- KONTAKIA ---
kontakion_tone: [1-8]
kontakion_text: [full text] (kontakion after the 6th Ode of canon at Matins —
  used at the 3rd and 9th Hours)
kontakion_3rd_ode_tone: [1-8] (kontakion after the 3rd Ode of canon at Matins —
  used at the 1st and 6th Hours; often identical to
  kontakion but NOT always — check the PDF explicitly)
kontakion_3rd_ode_text: [full text] (if identical to kontakion, write "same as kontakion")

--- AT LITURGY (capture ALL of the following every time, no exceptions) ---
feast_epistle: [e.g. "2 Tim 2:1-10"]
feast_gospel: [e.g. "Matt 10:16-22"]
prokeimenon_tone: [1-8]
prokeimenon_text: [full text]
prokeimenon_stichos: [full text]
alleluia_tone: [1-8]
alleluia_verse: [full text]
alleluia_stichos: [full text]
communion_verse: [full text]

--- AT VESPERS: PAROEMIAS (capture all three if present; required for §2E+) ---
paroemia_1: [e.g. "Genesis 28:10-17"]
paroemia_2: [e.g. "Ezekiel 43:27; 44:1-4"]
paroemia_3: [e.g. "Proverbs 9:1-11"]

--- AT VESPERS: LORD I HAVE CRIED STICHERA (§2D Doxology and above ONLY) ---
stichera_lord_i_call_count: [6 | 8 | 10]
stichera_lord_i_call:
  [1] tone: [1-8], text: [full sticheron text as printed in PDF]
  [2] tone: [1-8], text: [full sticheron text]
  ... (continue for all stichera in order)
stichera_glory: tone: [1-8], text: [doxasticon text — "Glory..." sticheron]
stichera_both_now: [theotokion text from Menaion, OR write "Octoechos (tone of glory)"
  if Menaion says to use Octoechos theotokion]

Note: For §2A/§2C (Simple/Six-Stichera), stichera come partly from the Octoechos.
Do NOT capture LIC stichera for §2A/§2C yet — these depend on FW-OCTOECHOS-VESPERS.
For §2B Double, capture stichera for each saint separately.

--- AT VESPERS: APOSTICHA (§2D Doxology and above ONLY) ---
aposticha:
  [1] verse: [psalm verse text AS PRINTED IN PDF between stichera],
      tone: [1-8], text: [full sticheron text]
  [2] verse: [psalm verse text], tone: [1-8], text: [sticheron text]
  [3] verse: [psalm verse text], tone: [1-8], text: [sticheron text]
  (§2F Vigil may have 4 stichera — include if present)
aposticha_glory: tone: [1-8], text: [doxasticon text — "Glory..." sticheron]
aposticha_both_now: [theotokion text from Menaion, OR "Octoechos (tone of glory)"]

Note: The verse text printed in the Menaion between aposticha stichera is specific
to the feast — capture it verbatim. For §2A/§2C, fixed universal verses are used
("To Thee I lift up mine eyes...") — these are NOT captured per-entry.

--- MATINS: ADDITIONAL FIELDS (§2D+) ---
has_great_doxology: [true | false]
magnificat_sung: [true | false]
matins_gospel: [Gospel reference, e.g. "Mark 16:9-20"] (§2E/§2F only)
has_litya: [true | false] (§2F Vigil only)
ikos: [ikos text if provided in Menaion — follows kontakion at Matins Ode III/VI]
exapostilarion: [full text] (§2D+)

note: [OCA/Russian differences, fallback source, flags, anything unusual]
```

### CRITICAL: Capture everything on the first pass — no exceptions

The June encoding required a costly re-read of every PDF because feast_epistle/
feast_gospel were skipped on the first pass. Do not repeat this. The rule is:

EVERY field in the KEY FIELDS template must be populated on the first and only
read of each Menaion PDF. Even if the tool does not yet display a field, capture
it. The cost of re-reading a PDF later is high; the cost of capturing an extra
field now is zero.

**PDF reading order:** Read AT VESPERS first (rank detection + paroemias), then
AT MATINS (kontakion ode assignments), then AT LITURGY (all readings).

**Specific fields that are easy to miss and must not be skipped:**

1. **prokeimenon + stichos** (AT LITURGY) — always present, always capture
2. **alleluia verse + stichos** (AT LITURGY) — always present, always capture
3. **communion verse** (AT LITURGY) — always present, always capture
4. **kontakion_3rd_ode** — after the 3rd Ode of the canon at Matins. Explicitly
 check whether it differs from the main kontakion (after the 6th Ode). If
 different, capture both in full. If identical, write "same as kontakion".
 Do not assume they are the same without checking.
5. **troparion_2** — if the Menaion provides two troparia (double commemoration,
 or a feast with both a Lord's troparion and a saint's troparion), capture both
 with their tones. Note which is primary.
6. **paroemia_1/2/3** (AT VESPERS) — required for §2E and above. Scan the AT
 VESPERS section even on a §2C day in case rank was misread. If absent, note
 explicitly: "no paroemias — confirmed §2C".
7. **feast_epistle / feast_gospel** — always present in AT LITURGY, always
 capture. Never skip even for simple saints.

If any section is absent or the PDF is unclear, note it explicitly in the note
field. Do not leave fields blank without a written explanation.

**§2A saints: AT LITURGY section will be absent from the Menaion PDF.** For
simple saints the Menaion carries only Vespers and Matins — the Liturgy readings
come from the Oktoechos/Typikon, not the Menaion. When AT LITURGY is absent,
record all AT LITURGY fields explicitly as:
  feast_epistle: absent — §2A, readings from Oktoechos
  feast_gospel: absent — §2A, readings from Oktoechos
  prokeimenon_text: absent — §2A
  alleluia_verse: absent — §2A
  communion_verse: absent — §2A
Do NOT leave these fields blank. A blank field is ambiguous — it may mean "not
yet captured" rather than "confirmed absent". The explicit note removes ambiguity
for future sessions.

**§2A-with-propers pattern:** Some §2A saints (3 stichera at Vespers) nonetheless
have a full AT LITURGY section in their Menaion PDF with proper Epistle, Gospel,
prokeimenon, alleluia, and communion verse. This occurs when a compiled service
for a significant saint has been included in the Menaion regardless of stichera rank.
Confirmed instances in June: Jun 17 (Manuel/Sabel/Ismael), Jun 18 (Leontius),
Jun 21 (Julian of Tarsus), Jun 27 (Sampson the Hospitable). Always read the full
PDF before assuming absent — stichera count alone does not determine whether AT
LITURGY propers are present.

Insert `feast_e`/`feast_g` immediately before `troparion: {` in SAMPLE_MENAION.

### Julian/Gregorian Calendar Sanity Check
St. Sergius Menaion is Julian; OCA is Revised Julian (= Gregorian), differ by 13 days.
Always fetch oca.org/saints/lives/YYYY/MM/DD before encoding any date.
Example: 06-19.pdf = St John Maximovich (June 19 O.S. = July 2 N.S.) → encode at "07-02".

### Service Rank Detection
Stichera count at Vespers is definitive. "Alleluia" at Matins appears in BOTH §2A and §2C.
| Evidence | Rank | Fekula |
|---|---|---|
| 3 stichera on Lord I Call | Simple | §2A |
| 6 stichera on Lord I Call | Six-Stichera | §2C |
| Great Doxology at Matins | Doxology | §2D |
| Polyeleos (Ps 134-135) at Matins | Polyeleos | §2E |
| Vigil | Vigil | §2F |

### Hours Kontakion Assignment
| Hour | Matins kontakion reference | Field |
|---|---|---|
| 1st Hour | after the **3rd Ode** | `kontakion_3rd_ode` |
| 3rd Hour | after the **6th Ode** | `kontakion` |
| 6th Hour | after the **3rd Ode** | `kontakion_3rd_ode` |
| 9th Hour | after the **6th Ode** | `kontakion` |

---

## Vespers Assembly — Development Log (v0.2.7)

### Status: Phase 1 complete — invariable skeleton built

The Vespers assembler (`assembleVespers()`) is built and wired into the
SERVICE_REGISTRY. The full HTM invariable spine is in place. The following
are complete and displaying correctly:

- **VespersOpening** collapsible component (parallel to TypicalBeginning on Hours)
  - Three seasonal cases: ordinary, Christ is risen active (P+7–P+38), O Heavenly King omitted (P+39–Pentecost)
  - Blessing + O Come shown inline when collapsed; hidden when expanded (avoids duplication)
- **Psalm 103** with AND AGAIN rubric splitting refrain as separate element
- **Great Litany, Small Litany, Augmented Litany, Evening Litany** — full
  petition-by-petition text with responses on separate lines; litany renderer
  distinguishes petition (grey italic) from congregational response (black)
- **Kathisma** — schedule-driven per `getKathismaForVespers()` (see below)
- **Lord I Have Cried stichera** — placeholder with count rule (FW-23)
- **Gladsome Light, Prokeimenon, OT Lessons, Augmented Litany, Vouchsafe O Lord**
- **Evening Litany, Head-Bowing** — Deacon/Chanters split correctly
- **Aposticha** — placeholder (FW-23)
- **St. Symeon's Prayer, Trisagion through Our Father, Troparia/Kontakia**
- **Dismissal** — full sequence with correct Deacon/Chanters/Priest formatting
- All clergy parts (Priest/Deacon) render in grey italic; Chanters in black

### Phase 2 backlog (FW-23)
The stichera fields captured in .txt encoding records need to be:
1. Added to SAMPLE_MENAION entries: `stichera_lord_i_call`, `glory/doxasticon`, `aposticha`
2. A stichera assembler built to render them with tones, melodies, and verse insertions

---

## Kathisma Schedule — Implementation (v0.2.7)

### Source
OCA Liturgics:
- oca.org/liturgics/outlines/kathisma-readings-at-vespers
- oca.org/liturgics/outlines/kathisma-readings-at-matins
- oca.org/liturgics/outlines/the-division-of-the-psalter-into-kathismas

### Architecture
Three constants encoded in the tool above the assembler functions:

**`KATHISMA_PSALMS`** — maps kathisma number (1–20) to psalm range string

**`VESPERS_KATHISMA`** — keyed by `kathismaPeriod` then `dow`:
- `summer_winter`: Mon=6, Tue=9, Wed=12, Thu=15, Fri=18, Sat=1, Sun=—
- `autumn_spring` / `lent_1_4_6`: Mon–Fri=18, Sat=1, Sun=—
- `lent_5`: Mon=10, Tue=19, Wed=7, Thu=12, Fri=18, Sat=1, Sun=—
- `passion_week`: Mon–Wed=18, Thu/Fri/Sat=—, Sun=—
- `bright_week`: all=—

**`MATINS_KATHISMA`** — same key structure, arrays of kathisma numbers per day.
Saturday is 16,17 for all periods (OCA table blank = universal Saturday rule).
Passion Week Saturday = 17 only (explicit in OCA table).
Data-ready for when Matins assembler is built.

**`getKathismaForVespers(liturgicalData, rank, hadVigil)`** — priority-ordered
override logic: Bright Week → Passion Week Thu/Fri/Sat → Great feast of Lord →
hadVigil flag (FW placeholder) → Saturday or Polyeleos/Vigil rank → Sunday eve →
table lookup. Returns `{ num, psalms, label, rule, source, hadVigilNote }` or
`{ omitted: true, ... }` or `{ blessedIsMan: true, ... }`.

**FW known limitation:** The tool cannot detect whether a vigil was served the
previous night. The flag is always `false`. Affected dates will show an orange ⚠
note in the Fekula badge.

**FW-B:** Full psalm texts to be loaded from a Drive Psalter reference document
on demand — not bundled into the tool. Architecture: same pattern as Menaion PDFs.

### kathismaPeriod detection
New field returned from `getLiturgicalData()`. Six values:
- `summer_winter` — Thomas Sun (P+7) → Sep 21; Dec 20 → Jan 14;
  Prodigal Son Sun (Meatfare−7) → Forgiveness Sun (Meatfare+7).
  Pentecostarion (P+7 → P+55) maps here — same psalm assignments;
  what changes in the Pentecostarion are the sessional hymns after each stasis,
  not the kathisma itself. Confirmed from OCA source.
- `autumn_spring` — Sep 22 → Dec 19; Jan 15 → Sat before Prodigal Son Sun.
  Also Great Lent Weeks 1–4 and 6 (same table).
- `lent_5` — Great Lent Week 5 only (distinct table)
- `passion_week` — P−7 through P−1
- `bright_week` — P+0 through P+6

---

## Lent Week / Sunday Tracking — Implementation (v0.2.7)

New fields returned from `getLiturgicalData()`:
- `lentWeek` (1–6, null outside Lent or in Passion Week)
- `lentSunday` (1–5, null on weekdays or outside Lent)
- `passionWeek` (boolean — P−7 through P−1)
- `lentInfo` object: `{ week, weekName, isPassionWeek, dayOfLent, sundayName, sundayNum }`

**Week numbering:** Clean Monday = day 1 of week 1. Week = ⌈dayOfLent ÷ 7⌉.
Sunday of week N = day (7×N) of Lent = lentSunday N.
Verified: March 22, 2026 = day 28 = week 4 = lentSunday 4 = Sunday of St. John Climacus ✓

**Five named Lenten Sundays:**
1. Sunday of Orthodoxy
2. Sunday of St. Gregory Palamas
3. Sunday of the Holy Cross
4. Sunday of St. John Climacus
5. Sunday of St. Mary of Egypt

**Context card display:** "Great Lent — Week 3 of Great Lent · Wednesday"
or on a named Sunday: "Great Lent — Sunday of Orthodoxy · Week 1 of Great Lent"

---

## What Is Working (as of May 2026 — v0.3.4)

### Calendar Engine
- Paschal calculation verified correct for 2026, 2027, 2028
- Tone cycle, full season detection, 35 movable named days
- All 12 Great Feasts + forefeasts, afterfeasts, apodoses

### Lectionary
- 298-entry Pascha-offset table, P-101 through P+263
- P+56 and P+63 added (All Saints, All Saints NA proper readings)
- Lukan Jump computed dynamically; Luke series badge
- Verified cross-year; OCA sanity check passed

### Reading Display (v0.2.6)
- TYPE 1 (cycle): always shown as "Readings:" or "Sunday proper:"
- TYPE 2 (feast proper): shown as "Feast readings:" when available;
  all 30 June dates and Jul 1/2/3/14/15 fully encoded with feast_e/feast_g,
  prokeimenon, alleluia, communion_verse; suppressed on named Sundays
- TYPE 3 (paroemias): displayed for §2E/§2F Menaion saints; all June paroemias encoded
- Collision resolution: namedDayIsSunday suppresses feast_e/feast_g

### How It Works Panel (v0.2.0)
Button appears unconditionally below all content on every date (moved outside
conditional rendering). Panel currently covers:
- **The Calendar Engine**: Pascha computation, Pascha-offset system, tone cycle,
  35 named days, feast period tracking; honest about what is not yet assembled
- **The Lectionary**: 298-entry table, Pascha-offset verification, Gospel series
  structure (John → Matthew → Luke), Lukan Jump mechanism; explains that TYPE 2
  feast proper readings appear as a second line when available; names paroemias
  (TYPE 3) as a known gap with lay-readable explanation: "If you see Genesis,
  Ezekiel, Proverbs readings on the OCA site that aren't here, those are Vespers
  paroemias — coming in a future update"; notes OCA daily page may show more
  readings than the tool currently surfaces
- **Assembly Rules**: Fekula citation system, HTM skeleton, St. Sergius provenance,
  OCA primacy, current Menaion library coverage

### Hours Assembly — all four Hours built
§2A, §2C, §1A, §1B assembly rules; all 8 tones of resurrectional troparia.
Pentecostarion assembly (v0.2.2): P+35–P+40 encoded; skeleton implemented;
see "Pentecostarion Hours Implementation" section and Open Questions.

### Menaion Library — all June (Jun 1-30) and May 18-31 encoded
All 30 June dates have complete encoding: feast_e/feast_g with section numbers,
prokeimenon, alleluia, communion_verse. §2E/§2F dates also have paroemias,
matins_gospel, has_litya, has_polyeleos, has_great_doxology.

| Date | Saint | Rank | Notes |
|---|---|---|---|
| May 18 | Theodotus + Seven Virgins + Peter/Dionysius | §2C | absent sentinels |
| May 19 | HM Patrick of Prusa | §2A | absent sentinels |
| May 20 | Thallelaios | §2A | absent sentinels |
| May 21 | Constantine & Helena | §2E | Gal 1:11-19 / John 10:1-9 |
| May 22 | Martyr Basiliscus | §2A | absent sentinels |
| May 23 | Michael the Confessor | §2C | absent sentinels |
| May 24 | Symeon of Wondrous Mountain | §2E | Col 3:12-16 / Matt 11:27-30 |
| May 25 | Third Finding, Head of Forerunner | §2E | 2 Cor 4:6-15 / Matt 11:2-15 |
| May 26 | Apostle Carpus | §2A | absent sentinels |
| May 27 | HM Therapont (§2A) + John the Russian (§2F vigil) | array | John: Gal 5:22-6:2 / Luke 6:17-23 |
| May 28 | St Nicetas of Chalcedon | §2A | absent sentinels |
| May 29 | Holy Martyred Virgin Theodosia | §2A | absent sentinels |
| May 30 | Ven. Isaacius of Dalmatulus | §2A | absent sentinels |
| May 31 | Holy Martyr Hermias | §2A | absent sentinels |
| Jun 1 | Martyr Justin the Philosopher | §2A | absent sentinels |
| Jun 2 | Nicephorus of Constantinople | §2E | Heb 13:17-21 / Matt 5:14-19 |
| Jun 3 | Equal-to-Apostles Constantine & Helena | §2C | 2 Tim 2:1-10 / John 15:17-16:2 |
| Jun 4 | Metrophanes of Constantinople | §2E | Heb 13:17-21 / Matt 5:14-19 |
| Jun 5 | Dorotheos of Tyre | §2A | absent sentinels |
| Jun 6 | Hilarion the New | §2A | absent sentinels |
| Jun 7 | HM Theodotus of Ancyra | §2A | absent sentinels |
| Jun 8 | GM Theodore Stratelates | §2C | 2 Tim 2:1-10 / Matt 10:16-22 |
| Jun 9 | St Cyril of Alexandria | §2C | Heb 13:7-16 / John 10:9-16 |
| Jun 10 | Alexander/Antonina | §2A | absent sentinels |
| Jun 11 | It Is Truly Meet Icon | §2E | Phil 2:5-11 / Luke 10:38-42; 11:27-28 |
| Jun 12 | Onuphrius + Peter of Athos | §2B double | absent sentinels |
| Jun 13 | Aquilina + Triphyllius | §2B double | absent sentinels |
| Jun 14 | Elisha + Methodius | §2B double | James 5:10-20 / Luke 4:22-30 |
| Jun 15 | Prophet Amos (§2A) + Jerome (§2E) + Jonah of Moscow (§2E, Russian-only) | array | Jerome: Gal 5:22-6:2 / Matt 4:25-5:12; Jonah: Heb 13:17-21 / Matt 5:14-19 |
| Jun 16 | Tichon of Amathus (§2A) + Tikhon of Kaluga (§2E) | array | Tikhon: Gal 5:22-6:2 / Matt 4:25-5:12; Tichon OCA troparion/kontakion T3 corrected 2026-05-20 |
| Jun 17 | Manuel, Sabel & Ismael | §2A + propers | Eph 6:10-17 / Luke 21:12-19 |
| Jun 18 | Leontius of Tripolis | §2A + propers | 2 Tim 2:1-10 / John 15:17-16:2 |
| Jun 19 | Holy Apostle Jude | §2A | absent sentinels |
| Jun 20 | Holy Martyr Methodius of Patara | §2A | absent sentinels |
| Jun 21 | Julian of Tarsus | §2A + propers | Eph 6:10-17 / Luke 21:12-19 |
| Jun 22 | HM Eusebius of Samosata | §2A | absent sentinels; troparion from OCA |
| Jun 23 | Agrippina (§2A) + Vladimir Icon (§2E) | array | Vladimir: Heb 9:1-7 (§320) / Luke 10:38-42; 11:27-28 (§54); prok T3 Magnificat; alleluia T2 |
| Jun 24 | Nativity of Forerunner | Great Feast | Romans 13:11-14:4 (§112) / Luke 1:5-25,57-68,76,80 (§1) |
| Jun 25 | Afterfeast + Nun-Martyr Febronia | §2C / §2G1 | 2 Cor 6:1-10 (§181) / Luke 7:36-50 (§33) |
| Jun 26 | Ven. David of Thessalonica | §2A | absent sentinels |
| Jun 27 | Ven. Sampson the Hospitable | §2A + propers | Gal 5:22-6:2 (§213) / Luke 12:32-40 (§67) |
| Jun 28 | Translation, Relics of Cyrus & John | §2C | 1 Cor 12:27-13:8 (§153) / Matt 10:1,5-8 (§34 from midpoint) |
| Jun 29 | Peter & Paul | §2F Vigil | 2 Cor 11:21-30 (§193) / Matt 16:13-19 (§67) |
| Jun 30 | Synaxis of Twelve Apostles | §2C | 1 Cor 4:9-16 (§131) / Mark 3:13-19 (§12) |

---


### Prayers After Holy Communion (v0.3.3)
Full HTM order (htm_post_comunion_prayers.pdf) assembled as a standalone service.
Five prayers (Thanksgiving, Of Basil the Great, Verses of Metaphrastes, Another Prayer,
Prayer to the Theotokos), Nunc Dimittis, Trisagion/Our Father block, movable T/K
block (3 variants by Liturgy served), fixed Theotokion, computed dismissal.
- getLiturgyType(): Basil (Jan 1, Jan 5, Lenten Sundays 1–5, Great Thursday, Great Saturday);
  Presanctified (Lenten Wed/Fri — stubbed); Chrysostom (all else)
- buildDismissal() extracted as shared helper used by both Typica and post-communion
- Reader mode: priest exclamation → blue-grey substitution; "In the name of the Lord,
  father (master), bless!" drops; dismissal → reader formula
- post_communion always inScope — prayers are season-independent
- mm/dd added to liturgicalData return object


### Orthodox Psalter (v0.3.4)
Standalone Psalter at /psalter — all 20 kathismata, Psalms 1–150, Brenton LXX fully
embedded with no external fetch dependencies. Psalm 118 (K17) split across three stases
at correct verse boundaries. Psalm 151 shown as supplementary section outside kathisma
structure. Vespers kathisma movable element links to /psalter?kathisma=N&service=vespers&date=.
Context strip banner (sticky top and bottom) shows service/date context and uses
window.history.back() to return user to exact scroll position in Hours tool.
Same-tab navigation eliminates tab accumulation on mobile.

## Important Discoveries and Corrections

### RULE: Always encode all fixed Menaion dates — no exceptions
**Never skip a date because it conflicts with a movable feast (Ascension, Pentecost,
etc.).** The calendar engine handles deconfliction automatically — if a movable feast
governs that date in a given year, the `OUT_OF_SCOPE_NOTES` message displays instead
of the Menaion entry. A skipped encoding is invisible in the current year but becomes
a permanent gap in all other years. When a PDF is present, encode it.

This rule was established after May 20 (Thallelaios) was initially skipped because
Ascension fell on May 20 in 2026. Thallelaios will correctly appear in all years
when Ascension does not fall on May 20; the calendar engine suppresses it
automatically in 2026 without any special logic in the Menaion entry.

### OCA Divergence Patterns (documented across May encoding)
Three recurring patterns of St. Sergius vs. OCA divergence observed:

**1. Troparion absent from St. Sergius PDF** (no Vespers troparion rubric):
Seen at 05-23 (Michael of Synada), 05-27 Therapont, 05-30 (Isaacius).
OCA proper troparion used to fill the gap.

**2. Troparion text diverges** (different wording, same saint):
Seen at 05-19 (Patrick, proper hieromartyr text), 05-20 (Thallelaios),
05-21 (Constantine & Helena — same in substance), 05-26 (Carpus adds Alphaeus),
05-29 (Theodosia — completely different text and tone).
OCA text governs per source hierarchy.

**3. Kontakion diverges** (different tone or text):
Seen at 05-25 (Third Finding — Tone 4 OCA vs. Tone 6 St. Sergius),
05-29 (Theodosia — Tone 4 OCA vs. Tone 2 St. Sergius),
05-31 (Hermias — Tone 2 OCA generic vs. Tone 6 St. Sergius proper).
OCA text governs per source hierarchy.

### OCA Correction — Tichon of Amathus (Jun 16) — 2026-05-20
St. Sergius PDF contained the generic venerable wonderworker troparion (T1,
"A desert dweller, an angel in the flesh...") — completely wrong saint type for
a bishop/hierarch. OCA has a proper hierarch troparion (T3, "God called you to
the sacred priesthood..."). Both troparion AND kontakion replaced with OCA texts.
Drive record: 06-16.txt (previously 06-16-v2.txt, renamed by user).
Source: https://www.oca.org/saints/troparia/2024/06/16/101738-saint-tikhon-bishop-of-amathus-in-cyprus

### Kontakion missing — Therapont (May 27)
HM Therapont kontakion is absent from both OCA (May 25 troparia page) and the
St. Sergius PDF for 05-27. Flagged in the encoding record. Flagged for future
resolution — check OCA May 27 page directly when next encoding that area.

### Holy Fathers of the 1st Ecumenical Council is MOVABLE (Pascha+42)
Not fixed June 8. June 8 fixed = Translation of Relics of GM Theodore Stratelates.
In 2026: May 24. In 2027: June 13. In 2028: May 28.

### Lectionary offset uses Math.floor not Math.round
date object at noon (T12:00:00); computePascha returns midnight.
Math.round(57.5) = 58 (wrong). Math.floor(57.5) = 57 (correct).

### feast_e/feast_g insertion anchor
Always insert before `troparion: {` — never use note: field end as anchor.
Multi-line string concatenations in note fields fool position-based scripts.

### St John Maximovich encodes at July 2, not June 19
Reposed June 19 O.S. = July 2 N.S.

### All Saints of North America propers in named day entry
Stored on `all_saints_na_sunday` in MOVABLE_NAMED_DAYS; assembly checks namedDay.key.

### Drive Housekeeping — June 19 files (resolved 2026-05-20)
Three text files existed for June 19:
- `06-19.txt` (2382 bytes, older) — **incorrect** early encoding of St. John Maximovich
  under 06-19 key; user deleted/deprecated.
- `06-19.txt` (2022 bytes, newer) — **correct**: Holy Apostle Jude at 06-19 N.S.
- `06-19-source-note.txt` — provenance note documenting 06-19.pdf as source for
  07-02 entry; documents confirmed AT LITURGY data from that PDF.

---

## Current Limitations / Out of Scope

Not yet assembled (flagged in UI):
- Lenten Hours (§3A), Bright Week, Pentecostarion weekdays not yet encoded (P+0–P+34, P+41+)
- Great Feast days, forefeasts, afterfeasts, apodoses (§2G1–§2G4)
- Saturday rules, Vespers, Typica

Reading gaps:
- TYPE 2 feast proper readings: July encoding in progress (Jul 1/2/3/14/15 complete; remaining July dates pending)
- Scripture tool deployed (v0.3.5) — browse and reading mode; LXX versification divergences added to LXX_REMAP as discovered

---

## Lord I Have Cried (LIC) and Aposticha — Mechanics and Assembler Architecture

### Source authority
- Fekula & Williams, Chapter 2 (§2A–§2G) — all rank-specific stichera rules
- Fekula Chapter 4 (§4A–§4B) — Pentecostarion overrides
- OCA office-vespers.md — HTM source text for fixed aposticha verses
- Wikipedia/OrthodoxWiki: Aposticha article confirmed structural distinction

### Lord I Have Cried — how the interleave works

The verse countdown V.10 → V.1 is the *insertion scaffold*. Each verse is sung
**first**, then its sticheron follows — the sticheron is a response to the verse.
The stichera count determines where insertion begins:

| Stichera count | Insertion starts | Plain verses first |
|---|---|---|
| 6 (§2A/§2C/§2D) | V.6 | V.10, V.9, V.8, V.7 plain |
| 8 (§2E Polyeleos) | V.8 | V.10, V.9 plain |
| 10 (§2F Vigil) | V.10 | None — all verses paired |

After V.1: **Glory → doxasticon → Now and ever → theotokion**

**Sources of stichera by rank (Fekula Chapter 2):**

| Rank | Lord I Have Cried sources |
|---|---|
| §2A Simple (Sun–Thu) | 3 Octoechos + 3 Menaion |
| §2A Simple (Fri evening) | 6 Menaion (each doubled) |
| §2B Double | 3 first saint + 3 second saint (Menaion) |
| §2C Six-Stichera | 6 Menaion |
| §2D Doxology | 6 Menaion |
| §2E Polyeleos | 6 or 8 Menaion (as provided) |
| §2F Vigil | 8 or 10 Menaion (as provided) |
| §4A1 Pentecostarion ordinary | 3 Pentecostarion + 3 Menaion |
| §4A3 Pentecostarion Polyeleos | 3 Pentecostarion + 5 Menaion |

**Glory / Now and ever assignment:**
- §2A/§2B/§2C: Glory = Menaion doxasticon (if any); Now and ever = Octoechos theotokion
- §2D/§2E/§2F: same, but theotokion from Menaion if provided
- Friday evening §2A: Now and ever = **dogmaticon in tone of week** (not theotokion)
- Feast of Theotokos §2F: Glory Now and ever = doxasticon of feast

### Aposticha — how it works (key structural difference)

**The Aposticha is structurally inverted from LIC.** Each sticheron *precedes* its
verse (not follows it). The pattern is:

  sticheron 1 → verse → sticheron 2 → verse → sticheron 3 → verse → [sticheron 4 →]
  Glory → doxasticon → Now and ever → theotokion

**Two types of verses used between Aposticha stichera:**

1. **Fixed universal verses (§2A/§2B/§2C, Octoechos aposticha):**
 - "To Thee I lift up mine eyes, O Thou Who art enthroned in the heavens!..."
 - "Have mercy upon us, O Lord, have mercy upon us..."
 - Saturday (Great Vespers): "The Lord is King: He is robed in majesty" /
   "For He hath made the world so sure..." / "Holiness becometh Thine house..."
 These verses are fixed — the same every applicable day. The Octoechos
 stichera do NOT carry their own verses; the universal verses are always used.

2. **Feast-specific verses (§2D Doxology and above, Menaion aposticha):**
 The Menaion provides both the stichera texts AND their own specific psalm
 verses. These are embedded in the Menaion PDF alongside each sticheron.
 They must be captured during encoding.

**Sources of Aposticha stichera by rank:**

| Rank | Aposticha sources |
|---|---|
| §2A/§2B/§2C | Octoechos stichera; universal fixed verses between them |
| §2D Doxology | Menaion stichera with Menaion-provided verses |
| §2E/§2F | Menaion stichera with Menaion-provided verses |
| §2G1 Forefeast/Afterfeast | Feast stichera with feast verses; Glory = Menaion doxasticon |
| §4A1 Pentecostarion ordinary | Octoechos stichera (or Pentecostarion on Fri eve) |
| §4A3 Pentecostarion Polyeleos | Menaion stichera with Menaion verses |

### The Octoechos gap — now resolved

For §2A and §2C (the majority of weekday services), both the LIC stichera AND
the Aposticha stichera come from the **Octoechos** — 8 different sets, one per
tone. The `octoechos_vespers.txt` file (see Octoechos section above) now provides
all 8 tones of this data. FW-OCTOECHOS-VESPERS is **complete**.

### Assembler architecture — when built

**Lord I Have Cried assembler:**
1. Determine stichera count and sources (Fekula rule by rank)
2. Render V.10 through V.(count+1) as plain verses
3. From V.(count) downward: verse → sticheron (interleaved)
4. After V.1: Glory → doxasticon → Now and ever → theotokion

**Aposticha assembler:**
1. Determine sources (Fekula rule by rank)
2. Render: sticheron 1 → verse 1 → sticheron 2 → verse 2 → sticheron 3 → verse 3
3. For §2D+: verses come from Menaion alongside stichera
4. For §2A/§2C: use fixed universal verses from tone 0 records in octoechos_vespers.txt
5. After final sticheron: Glory → doxasticon → Now and ever → theotokion

### Encoding schema needed (extend FW-23)

For SAMPLE_MENAION entries §2D and above (Doxology, Polyeleos, Vigil):

```
--- AT VESPERS: LORD I HAVE CRIED STICHERA ---
stichera_lord_i_call_count: [6 | 8 | 10] (governs insertion point)
stichera_lord_i_call:
  [1] tone: [1-8], text: [full sticheron text]
  [2] tone: [1-8], text: [full sticheron text]
  ... (all stichera in order as they appear in the PDF)
stichera_glory: tone: [1-8], text: [doxasticon text]
stichera_both_now: [theotokion from Menaion, or "Octoechos (tone of glory)"]

--- AT VESPERS: APOSTICHA ---
aposticha:
  [1] verse: [psalm verse text as printed in PDF], tone: [1-8], text: [sticheron text]
  [2] verse: [psalm verse text as printed in PDF], tone: [1-8], text: [sticheron text]
  [3] verse: [psalm verse text as printed in PDF], tone: [1-8], text: [sticheron text]
aposticha_glory: tone: [1-8], text: [doxasticon text]
aposticha_both_now: [theotokion text, or "Octoechos (tone of glory)"]
```

**Note on aposticha verses:** For §2A/§2C the verses are always the fixed
universal verses — do NOT attempt to capture them per-entry. They will be
encoded once globally. Only capture aposticha verses for §2D+.

---

## Future Work Backlog

### COMPLETED
- ~~FW-01~~ ✓ 35 named days validated
- ~~FW-07~~ ✓ All four Hours built
- ~~FW-10~~ ✓ Multi-Service Selector and OCA Disclosure
- ~~FW-04~~ ✓ Correct Fekula §2C badge
- ~~FW-09~~ ✓ How This Works panel (updated v0.2.0 — four reading types, paroemias gap)
- ~~FW-03~~ ✓ June Menaion all 30 days encoded
- ~~Lectionary~~ ✓ 298-entry table, Lukan Jump, P+56/P+63
- ~~Versioning~~ ✓ v0.1.0 badge and protocol; v0.3.0 protocol rewrite
- ~~Feast proper readings Phase 1~~ ✓ feast_e/feast_g on 9 June entries
- ~~Movable Sunday collision resolution~~ ✓ isSunday on 19 named days,
  namedDayIsSunday suppression, "Sunday proper:" label
- ~~May Menaion encoding~~ ✓ May 18-31 (14 dates) complete
- ~~FW-21~~ ✓ OT Paroemias complete (v0.2.6); all June paroemias encoded
- ~~FW-22~~ ✓ June Menaion full back-fill complete (2026-05-20): all 30 dates have
  feast_e/feast_g with section numbers, prokeimenon, alleluia, communion_verse;
  all §2E/§2F dates have paroemias, matins_gospel, has_litya, has_polyeleos,
  has_great_doxology; Jun 16 OCA troparion/kontakion corrected; Jun 23A Vladimir
  Icon full §2E encoding complete
- ~~FW-OCTOECHOS-VESPERS~~ ✓ Complete (v0.3.19): octoechos_vespers.txt encoded,
  all 8 tones, 477 records, pipe-delimited, Drive location:
  orthodox_liturgics/Octoechos/octoechos_vespers.txt

### ACTIVE
**FW-24: Pentecostarion → Octoechos de-duplication (pull tone-of-week content from source)**
The assembler should pull tone-of-week Resurrection content from its canonical source,
not have feast entries carry their own copies. P+63 (All Saints of North America,
`hours_format: "all_saints_sunday"`) currently EMBEDS OCA copies of seven tone-1
Resurrection fields, each already tagged with its true origin:
- `troparion`, `resurrection_kontakion` — `source:"resurrection_tone_1"`
- `stichera_lord_i_call[0–3]` (the four Resurrection LIC stichera) and the LIC Both-Now
  dogmatikon — `source:"octoechos"`
- `stichera_aposticha` (Resurrection aposticha) — `aposticha_source:"octoechos"`

Why it exists: sequencing. P+63 was encoded before the Octoechos was OCA director-pointed
(Octoechos was all St. Sergius, zero `[brackets]`), so the only way to get OCA-pointed
Resurrection text into the feast was to paste copies from the docx. The `source:` tags are
the breadcrumb left for this cleanup. As of **v0.15.15** the Octoechos `tone1.js` carries
the OCA Resurrection set (`vespers.sat.lic[0–3]`, the 4 aposticha, the dogmatikon), so the
same text now lives in two places and the pull-from-source refactor is finally possible
for tone 1.

The fix:
- Assembler resolver: a slot tagged `source:"octoechos"`/`"resurrection_tone_1"` with no
  `text` is dereferenced to its canonical Octoechos location (`vespers.sat.lic[i]`,
  `aposticha[i]`, `dogmatikon`; `RESURRECTIONAL_TROPARIA`/`SUNDAY_KONTAKIA` for the
  troparion/kontakion). The mapping is positional; tags already exist.
- Strip the embedded `text` from those seven P+63 slots, leaving references; keep
  feast-proper slots as-is.
- Make the `§4B17` Lord-I-call composition explicit (the data implies 4 Resurrection +
  6 feast = 10) instead of relying on a hardcoded array. **Open question: confirm the
  §4B17 LIC composition against Fekula before speccing.**

Gate / proof: because the Octoechos text is byte-identical to the embedded copies today,
switching `all_saints_sunday` to pull-from-source must produce a **zero-diff render for
2026-06-14** — a clean behavior-preserving check.

Caveat: pulling only renders OCA where the source tone is already backfilled; an
all-saints-type feast in a not-yet-pointed tone would surface St. Sergius. So the resolver
must be tone-scoped (tone 1 first) or guard on "is this source slot pointed." This ties the
de-dup rollout to the tone-by-tone OCA backfill, which is acceptable.

**FW-25: Tone Trainer small-screen (phone) chip rendering — UNDER INVESTIGATION**
Phrase chips now scroll horizontally per phrase (v0.25.6) instead of wrapping, which fixed
the long-verse / multi-voice / overflow breakage and is responsive in that narrow screens
simply scroll. Open question: on phone-width viewports (~375–430px) a long phrase scrolls a
lot, and the fixed chip widths (`CHIP_W`: Q30 / H50 / H·68 / W90 / W·120) plus the 0.85rem
syllable labels may be larger than ideal. Candidate fix: a modest scale-down of chip width +
label/solfège font (and possibly a tighter `CHIP_GAP`) below a breakpoint, so phrases need
less scrolling on a phone without harming the desktop contour. Must be evaluated on a real
device first — measure how aggressively phrases scroll at 375/390/430px and decide whether
the shrink is worth the added complexity. Status: under investigation; no code yet.

**FW-MENAION-BACKFILL: SAMPLE_MENAION data-entry backlog**
Several fields captured in Drive .txt encoding records have not been entered into
SAMPLE_MENAION entries. This is distinct from FW-23 (stichera) — these fields are
already supported by the tool but were not entered during the original encoding passes.

Fields to back-fill across all SAMPLE_MENAION entries (May 18–Jun 30):
- `oca_primary: true/false` — present in all .txt files
- `service_file: "MM-DD.pdf"` — present in all .txt files
- `has_great_doxology: true/false` — present in .txt files for §2C+ entries
- `magnificat_sung: true/false` — present in .txt files for §2C+ entries

Priority: Low — these fields are informational; no assembly logic depends on them yet.
Can be done incrementally during future encoding sessions or as a dedicated pass.

**FW-16: Menaion Encoding — July**
Note: St John Maximovich encodes at July 2 (not June 19) — PDF is 06-19.pdf confirmed present.
Capture all KEY FIELDS on first pass per the v0.3.2 template.

July encoding progress:
| Date | Saint | Rank | Status |
|---|---|---|---|
| Jul 1 | Cosmas & Damian of Rome | §2C | ✓ 07-01.txt |
| Jul 2 | St John Maximovich | §2F vigil | ✓ 07-02-john-maximovich.txt |
| Jul 3 | Holy Martyr Hyacinth | §2A | ✓ 07-03.txt |
| Jul 14 | St Nicodemus of Holy Mountain | §2E | ✓ 07-14-v2.txt |
| Jul 15 | St Juvenal of Jerusalem | §2A | ✓ 07-15.txt |

KEY DIVERGENCES CONFIRMED (Jul 1-3 test encoding):
- Jul 2 O.S. (Juvenal) = Jul 15 N.S. but OCA commemorates Jul 2 N.S. — encoded at 07-02
- Jul 3 O.S. (Hyacinth) = Jul 16 N.S. but OCA commemorates Jul 3 N.S. — encoded at 07-03
- Jul 1 O.S. (Nicodemus) = Jul 14 N.S. — OCA agrees, no divergence
- For Juvenal and Hyacinth, OCA has composed proper troparia/kontakia differing from
  St. Sergius generic texts; OCA texts used per source hierarchy
- For Nicodemus, OCA has TWO proper troparia (Tone 3 primary, Tone 8 secondary); both
  differ from St. Sergius Tone 1 text; OCA texts used; kontakion matches in substance

**FW-06: Pentecostarion Assembly (ACTIVE — v0.2.2)**
Skeleton implemented. Open questions outstanding (see Pentecostarion Implementation section).
Next steps: resolve HTM cross-check questions; test all six encoded dates; continue encoding
remaining weeks in priority order.

**FW-24: Service of the Psalter — reading + "For the Departed" mode (ACTIVE — design)**
Specs written (repo root): `psalter_departed_spec.md` (Phase 1) and
`psalter_typikon_kathisma_rule_spec.md` (Phase 2). Built as a service **in the
hours-tool**, not the standalone — the standalone `psalter.jsx` stays a pure data viewer.
Source authority: *A Psalter for Prayer* (Jordanville); psalm verses keep Brenton LXX.
- **Phase 0 (prerequisite):** extract `PSALMS` + `KATHISMA_MAP` to `src/data/psalter.js`
  (match menaion/pentecostarion/octoechos convention); standalone viewer unchanged.
- **Phase 1:** normal + departed modes. Beginning reuses the tool's encoded ordinary
  beginning (same prayer / different wording → reuse) and appends the three new Jordanville
  parts (Tone VI troparia, LHM ×40, "Most Holy Trinity" pre-reading prayer). Departed-rite
  dividers/conclusion from pp. 320–323. Four params: name, gender, Orthodox/non-Orthodox,
  priest/reader (reuse §10 toggle). Per-kathisma paged rendering + kathisma tracker
  (structurally required — 20 kathismata).
- **Phase 2:** Typicon Ch. 17 kathisma distribution (date-driven; governs normal-mode
  distribution). Uses the existing `computePascha` engine.
- **OPEN (blocks encoding, not design):** non-Orthodox footnote scope — replace only the
  long prayer (footnote 1) or also its accompanying Tone IV troparia (footnote 2)? And
  whether the conclusion's dismissal prayers change for non-Orthodox. Confirm against the
  printed book.

### HIGH PRIORITY

**FW-23: Vespers Stichera — LIC and Aposticha Assembly (Phase 2)**

Depends on FW-OCTOECHOS-VESPERS being complete ✅. Two sub-tracks:

**Track A — Octoechos-dependent (§2A/§2C):**
FW-OCTOECHOS-VESPERS is now complete. The octoechos_vespers.txt data file is
available. Next: load it in the tool as a constant or fetch it from Drive, then
build the LIC assembler for simple and six-stichera services.

**Track B — Menaion-only (§2D+):**
Does not require Octoechos. Requires SAMPLE_MENAION entries to have:
- `stichera_lord_i_call` array — tone + text per sticheron
- `stichera_lord_i_call_count` — governs insertion point (6/8/10)
- `stichera_glory` — doxasticon tone + text
- `stichera_both_now` — theotokion tone + text (or Octoechos reference)
- `aposticha` array — verse + tone + text per sticheron
- `aposticha_glory` — doxasticon tone + text
- `aposticha_both_now` — theotokion tone + text

Current status: None of these fields are in any SAMPLE_MENAION entry.
All fields exist in Drive .txt encoding records for §2E/§2F entries —
they were captured but not yet entered (see data-entry backlog).

**FW-26: Vespers Date Attribution — "Vespers renders the next day" (IMPLEMENTED v0.9.0; prerequisite for FW-25a/§2G)**

*Implemented (v0.9.0):* Vespers branch advances commemoration/tone/season/festal/paroemias to D+1 (OCA-primary
saint); served-evening `dow` recomputed inside `assembleVespers` as `(openedDow+6)%7` ≡ D's dow, so the
Octoechos day-key, Friday dogmatikon, weekly prokeimenon, and Saturday Great-Vespers checks are provably
byte-identical to pre-FW-26. Dual-date `rubric` header pushed at top of Vespers. `computeVespersParoemias()`
factored to module scope (used by both the day-summary context card on D and the Vespers service on D+1).
`SERVICE_REGISTRY` reordered to clock order (Vespers/Compline after the selected-day services). D+1's
Octoechos tone now also preloaded (fixes the Sat→Sun new-tone resurrectional case); month/year boundary
already covered by the existing prev/m/next menaion preload. Gate 13/13, build green. **Open sub-point still
unresolved:** Typika placement — implemented after the Ninth Hour per the reader's clock-order; OrthodoxWiki's
Midday-with-Liturgy alternative remains flagged for the priest (one array position, zero logic impact).
**Presentation pass (v0.10.0):** the context card now whole-swaps to D+1 when Vespers is displayed
(commemoration/tone/season/readings/feast/saint advance; banner "Vespers, as served this evening for
tomorrow — [next day]"; interactive multi-service saint selector suppressed under Vespers, shown read-only
with co-commemorations listed). The dual-date note moved up under the Vespers subtitle (was an in-body
`rubric` element), highlighted with a left bar + soft background tint; its ⓘ opens a styled parchment popover
(`VespersDayInfo`, CSS matched to `RankExplainer`) instead of a browser tooltip. Default landing service
changed to First Hour so daily scrolling lands on today's context. All consumers share one component-scope
`vespersNext` bundle. (A collapsed-top-strip "[day] Vespers · For [next day]" framing was tried and reverted
as too wordy — the strip stays plain day·tone.) This reconciles the card's Vespers references with the
opened-day model (the earlier follow-up is now resolved).

Full design in `vespers_date_attribution_spec.md` (repo root). Validated against the GOArch Digital
Chant Stand (pick June 19 → it renders June 20 Vespers), OrthodoxWiki *Daily Cycle* (aggregates), and
OCA *Hours, Compline and Nocturne*.

The problem: a Vespers served on the evening of day D opens **D+1**, so the tool must render **V(D+1)**
when the reader selects D. Today the assembler is a hybrid — the Octoechos day-key and the Friday
dogmatikon already key off the *served evening* (correct), but the **Menaion commemoration, week tone,
festal context, and heading stay on D** (wrong). The fix advances those four to **D+1** while leaving
the Octoechos/dogmatikon frozen (Impl 1, surgical). The day-advance boundary is sunset/Vespers: the
Ninth Hour and everything earlier stay on D; Vespers and Compline advance to D+1.

Decisions (resolved): aggregate-grouped service order (Dawn / Midday / Evening), day-boundary inside
the Evening Aggregate at Vespers; Impl 1; dual-date Vespers header (GOArch-style); picker stays on D
and Vespers renders D+1. One open sub-point: Typika placement (Midday-with-Liturgy per OrthodoxWiki vs
after-the-Ninth-Hour per OCA) — to confirm with the priest.

Load-bearing: changes every date's Vespers commemoration; needs the full per-day regression matrix in
the spec (weekdays + Saturday→Sunday tone boundary + season boundary + month boundary). Riskiest edge
case: the resurrectional Great Vespers relocates from "select Saturday" to V(Sunday), so any `isSunday`
branch in `assembleVespers` must re-key to "D+1 is Sunday." Implementation is its own focused pass.



Full rationale and Fekula research in `stichera_repeat_spec.md` (repo root).

Phase 1 (DONE — see release notes): §2C/§2D "six from the Menaion" where the Menaion
prints fewer texts than the count (3 texts → 6, 4 → 8). The count lives in
`stichera_lord_i_call_count`; the array stays the base texts; logic repeats each in order
when one source owns all slots and `count % length === 0`. Cited to Fekula §2A Friday eve
("doubling each sticheron"). Shared `applyStichRepeat` / `expandSticheraToCount` helpers
unify the repeat vocabulary across the ordinary and Pentecostarion paths. Fixed 06-09, 06-11.

**Open gaps / future work (carry forward):**

- **FW-25a — §2A Friday evening composition.** Fekula §2A makes Friday-eve *simple* rank
  all six from the Menaion, **doubling each** — NOT the 3 Octoechos + 3 Menaion the assembler
  produces on every weekday. This is a *composition* change gated on day-of-week, distinct
  from the Phase-1 fill change. Backlogged by decision so the §2C fix could be verified in
  isolation. Reuses the uniform-doubling engine; must be regression-checked against current
  Friday output. **Next pass after §2C/§2D is verified.**
- **FW-25b — fixed-feast §2G Vespers interleaving (non-Pentecostarion).** §2G apportions
  3 feast + 3 saint / 3 + 5 / 6 + 4. The tool interleaves feast + saint only on the
  Pentecostarion path; a fixed-calendar afterfeast has no equivalent branch. The doubling
  gate is written so it won't mis-fire once this is added.
- **FW-25c — repeat-marker vocabulary drift in `pentecostarion.js`.** Data uses
  `repeat: true`, `repeat: 2`, and `repeat: "Glory…"` for different intents. `applyStichRepeat`
  standardizes *resolution*; the *data vocabulary* should be normalized to one grammar
  (`repeat: true` = copy preceding, `repeatIndex: n` = copy item n) and string-valued
  `repeat` usages migrated.
- **FW-25d — count-mismatch diagnostic assumes honest data.** When `count % length !== 0`
  the helper treats it as a data error (bad count / missing markers). True for ordinary
  §2A–§2D; a genuine festal apportionment reaching the helper with mixed sources would also
  trip it. The gate prevents that today; if §2G (FW-25b) is later routed through the helper,
  the mismatch branch must learn the apportionment first.
- **FW-25e — `stichera_lord_i_call_count` overloaded / non-authoritative on the ordinary
  path.** Ordinary-path `licCount` is rank-derived, not data-driven. The field also means
  different things by rank: for §2A simple it's the *Menaion-only* count (3, + 3 Octoechos);
  for §2C+ it's the *total*. Making it authoritative everywhere (§2E/§2F "as provided")
  needs the semantics normalized first (separate Menaion-portion vs. total, or a fixed
  convention). Until then a §2E/§2F saint with a non-rank-default count would be mis-counted.
  Rank default is correct for all currently-encoded §2C/§2D/§2E dates, so deferred.

**FW-02: Daily Commemorations Display**
Show all saints for the day. Source: oca.org/saints/lives/YYYY/MM/DD

### MEDIUM PRIORITY

**FW-05: Lenten Hours Assembly**
Deadline: Lent 2027 begins **March 15, 2027**

**FW-08: Great Feast Assembly (§2G1–§2G4)**
**FW-17: Typica Assembly**
**FW-18: Pericope Number Mapping (Slavic numbering)**
**FW-19: Scripture Text Rendering**
**FW-15: 9th Hour -> Vespers navigation**

### LOWER PRIORITY
**FW-11: Saturday Rules**
**FW-12: Print/Export**
**FW-13: Website Deployment**

---

## Architectural Notes

### Movable Named Days and Fixed Menaion
When a movable named day falls on a fixed Menaion date, check
`liturgicalData.namedDay.key` in assembly functions before resolving propers.
Pattern established for All Saints NA and collision resolution.

### Movable Sunday Collision Resolution
19 Sunday named day entries carry `isSunday: true`. `namedDayIsSunday` computed
in render. feast_e/feast_g suppressed when namedDayIsSunday — cycle reading at
that offset IS the Sunday proper. "Sunday proper:" label shown with named day name.

The 19 keys that carry `isSunday: true` (with Pascha offsets):
```
sunday_publican_pharisee (P-70)
sunday_prodigal_son (P-63)
sunday_meatfare (P-56)
sunday_cheesefare (P-49)
sunday_lent_1 (P-42)
sunday_lent_2 (P-35)
sunday_lent_3 (P-28)
sunday_lent_4 (P-21)
sunday_lent_5 (P-14)
palm_sunday (P-7)
pascha (P+0)
thomas_sunday (P+7)
myrrhbearers_sunday (P+14)
paralytic_sunday (P+21)
samaritan_sunday (P+28)
blind_man_sunday (P+35)
fathers_sunday (P+42)
all_saints_sunday (P+56)
all_saints_na_sunday (P+63)
```

When encoding a new saint whose fixed date could coincide with any of these offsets
in some years, verify collision behavior against the key test dates.

### How It Works Panel — Placement
The button and panel live **outside all conditional rendering**, in their own `<div>`
at the bottom of the page wrapper. This was moved out of the service assembly block
(where it only showed on ordinary assembled days) so it appears on every date type —
feast periods, out-of-scope days, Lenten days, non-ordinary Sundays. Button is
centered; panel content is left-aligned.

### OCA Calendar Primacy
OCA is authoritative. St. Sergius provides texts. Non-OCA saints flagged.

### Fekula §2A and §2C Hours Rules Are Identical
Badge must correctly identify section even though assembly is the same.

---

## Key Test Dates
- **Jun 8 2026** — Ordinary weekday: cycle + feast readings shown (2 Tim 2:1-10) ✓
- **Jun 14 2026** — All Saints NA Sunday: feast reading suppressed, Sunday proper shown ✓
- **Jun 11 2028** — All Saints Sunday: It Is Truly Meet Icon feast suppressed ✓
- **Jun 9 2030** — Holy Fathers Sunday: Cyril of Alexandria feast suppressed ✓
- **Jun 8 2031** — All Saints Sunday: Theodore Stratelates feast suppressed ✓
- **Jun 24 any year** — Forerunner Nativity feast readings: Romans 13:11-14:4 (§112) / Luke 1:5-25,57-68,76,80 (§1)
- **Jun 19 any year** — Apostle Jude feast readings: Jude 1-10 / John 14:21-24
- **Jun 29 any year** — Peter & Paul: 2 Cor 11:21-30 (§193) / Matt 16:13-19 (§67)
- **Aug 6** — Transfiguration (Great Feast)
- **Mar 25, 2027** — Annunciation (in Lent; Lent begins Mar 15, Pascha May 2)
- **May 17–23 2026** — Pentecostarion P+35–P+41: full Hours assembly test range (see Open Questions)

---

---

## ~~OPEN ARCHITECTURAL ISSUE~~ RESOLVED — `aposticha_theotokion` → `aposticha_both_now`

**Status: RESOLVED June 2026 — Option B (clean rename everywhere)**

### Origin of the inconsistency

`aposticha_theotokion` was the original field name coined when P+42 (Holy Fathers Sunday) was first encoded. At that time, the Both now at the aposticha was the Ascension troparion — technically not a theotokion at all. The name was chosen because the aposticha Both now slot is *usually* a theotokion, and no registry existed yet to enforce naming.

The bug fix in the May 23 session (v0.3.11) added a render block to `assembleVespers()` for `pentEntry.aposticha_theotokion` — this is the moment the field name became load-bearing in the assembler.

When `FIELD_REGISTRY` was built in the May 29 session (v0.6.1), the field was named `aposticha_both_now` — semantically correct, but the assembler was never updated to match.

### Current state (as of June 2026)

**Assembler (`src/components/hours-tool.jsx`):**
- Line ~4828: Pentecostarion branch reads `pentEntry.aposticha_theotokion`
- Line ~4942: Higher-rank Menaion branch reads `menaionEntry.aposticha_theotokion`
- `aposticha_both_now` is **never read** by the assembler

**Registry (`src/lib/audit.js`):**
- `FIELD_REGISTRY` requires `aposticha_both_now` for polyeleos+ Menaion and all Pentecostarion entries
- `aposticha_theotokion` is **not known** to the registry

**Data:**
- P+42: has `aposticha_theotokion` — read by assembler, invisible to registry
- May 21 (`05-21`): has `aposticha_both_now` (added June 2026) — seen by registry, **never read by assembler**
- May 24 (`05-24`): has `aposticha_theotokion` — read by assembler, invisible to registry

### What this means

The registry gate and the assembler are tracking two different fields. An entry can pass the gate (`aposticha_both_now` present) while the assembler silently reads nothing (`aposticha_theotokion` absent). Conversely, May 24 renders correctly in the tool but fails the registry gate.

### Why it was not renamed earlier

The May 23 session notes document the bug fix but note: *"The field name `aposticha_theotokion` is doing the work of the 'Both now' after the aposticha doxasticon — which is actually the Ascension troparion, not a strict theotokion. That's a naming issue in the data but the text is right."* The renaming was deferred without an explicit decision.

### Reconciliation options

**Option A — Update assembler to read `aposticha_both_now`, fall back to `aposticha_theotokion`:**
- Forward-compatible: new entries use the correct name
- Backward-compatible: existing `aposticha_theotokion` entries still render
- Requires: one assembler change at lines ~4828 and ~4942
- Requires: May 24 updated to add `aposticha_both_now` (or leave as fallback)

**Option B — Rename `aposticha_theotokion` → `aposticha_both_now` everywhere:**
- Clean and consistent
- Requires: data rename on every entry that currently has `aposticha_theotokion`
- Requires: assembler rename at both read sites
- Risk: must audit all entries — any missed will silently break rendering

**Recommended: Option A.** Minimal assembler change, no data migration needed, correct going forward.

**Do not encode additional `aposticha_both_now` fields in new Menaion entries** until the assembler is updated to read that field name. Currently those fields are invisible to the assembler.

---

## Session Notes — May 29, 2026 (v0.6.1)

### P+49 Vespers encoding completed

All missing Vespers fields added to P+49 (Holy Pentecost) from 80.pdf:

- **Litiya**: 3 stichera Tone II ("In the prophets...", "In Thy courts shall I praise Thee...", "In Thy courts, O Lord...") + Glory Tone VIII ("When Thou didst send down Thy Spirit...") + Both Now (same text per PDF).
- **Aposticha**: 3 stichera Tone VI with Psalm 50 verses ("Being ignorant...", "O Lord, the descent of the Holy Spirit...", "Heavenly King, Comforter...") + Glory Tone VIII ("Of old the tongues were confounded...") + Both Now (same text per PDF).

P+55 (Apodosis of Pentecost) updated with same aposticha fields (inherited from P+49 per apodosis rubric in 86.pdf). Comment and `aposticha_note` updated to cite the rubric explicitly. No Litiya on P+55 — apodosis, not feast.

### Unified audit registry

`src/lib/audit.js` rebuilt with a `FIELD_REGISTRY` — single array of field descriptors covering both Menaion and Pentecostarion entries. Each entry has: `field`, `category`, `appliesTo` ('both'|'menaion_only'|'pentecostarion_only'), `required(entry, type)` predicate, `description`, and optional `check(entry)`. Categories: identity | hours | liturgy | vespers_lic | vespers_litya | vespers_aposticha | matins | flags.

`auditEntry(entry, type)` is the new canonical function. `auditMenaionEntry()` and `auditPentecostarionEntry()` remain as backward-compatible wrappers. Added `FIELD_CATEGORIES` and `fieldsByCategory()` exports for future gap-report UI.

`scripts/audit.js` (CLI) updated with conditional field groups replacing the old flat lists. Now surfaces real gaps.

### Audit results (post-fix)

Previous state: 23/23 complete (false positive — Vespers fields not checked).
New state: **36 complete / 38 incomplete** — real gaps now visible.

Key gaps surfaced:
- **May**: 05-24, 05-25, 05-27 missing `stichera_lord_i_call_count` and aposticha fields
- **June**: 20 of 30 entries incomplete — most missing `fekula_section`, `matins_format`, `magnificat_sung`, `has_litya`, `has_paroemias` (pre-v2.1 encoding era); §2E/§2F entries also missing vespers stichera fields
- **July**: 4 of 5 entries incomplete — same v2.1 gaps
- **Pentecostarion**: 11 entries with gaps — P+19 missing `menaion_set_aside` and liturgy propers; P+35/P+39 missing `litya_glory`/`litya_both_now`; P+47 missing aposticha fields; P+50–P+55 missing `has_litya`; P+52–P+54 missing `magnificat_sung`; P+56 missing `menaion_set_aside`, `alleluia_stichos`, litya fields

These gaps are the backlog for future encoding sessions. The audit will now catch them correctly.

*Last updated: May 29, 2026 · Tool v0.6.1*


---

## Data Architecture — Dynamic Monthly Modules (v0.3.9)

Menaion and Pentecostarion data extracted from `hours-tool.jsx` into separate files:

```
src/data/menaion/may.js        — 16 entries
src/data/menaion/june.js       — 30 entries
src/data/menaion/july.js       — 5 entries
src/data/pentecostarion.js     — full Pentecostarion
```

Vite dynamic imports with module-level caching. Main bundle: 1,165 KB → 929 KB (20%).
Monthly `.js` files are the **single point of truth** for encoding — git tracks all changes.
Adding a new month: create `src/data/menaion/{month}.js` + one line in `_menaionLoaders`.

Drive `.txt` files are no longer the primary record. They remain useful for human review
but are derived artifacts. The `.txt` step was omitted this session; records for
05-16–05-21, 05-31, P+35-37, P+40-47, 05-24, 05-25 can be generated from the `.js` files.

---

## Menaion & Pentecostarion Data Browsers (v0.4.0)

### What they are
Full-page dev/truthing tools for proofing encoded Menaion and Pentecostarion
entries. Every field from the data objects is displayed with full text (no
truncation), with inline audit indicators showing encoding completeness.

### Routes (URL-only — not linked from main tool UI)
- **Menaion:** `/orthodox-hours/menaion`
- **Pentecostarion:** `/orthodox-hours/pentecostarion`

### Architecture
- Lazy-loaded via `React.lazy` + `Suspense` — zero main bundle impact
- Import monthly data files directly using the same dynamic import pattern
  as the main tool — no coupling to `hours-tool.jsx` assembler logic
- Shared audit module: `src/lib/audit.js` — encoding completeness checks
  (field presence + placeholder detection) extracted into importable ES module

### Files
```
src/components/menaion-browser.jsx        — Menaion browser component
src/components/pentecostarion-browser.jsx  — Pentecostarion browser component
src/lib/audit.js                          — shared audit module
```

### Menaion browser features
- 12 month tabs (Jan–Dec); months with data files in dark gold, rest greyed
- Day grid sidebar (1–31); days with entries highlighted with audit-status dot
- Month summary: "16/31 days encoded · 16 complete · 0 partial"
- Entry cards grouped: header/metadata, troparion, kontakia, LIC stichera,
  aposticha, liturgy propers, paroemias, matins, flags, notes
- Double commemorations (array entries like 05-27) rendered with primary +
  secondary sections

### Pentecostarion browser features
- Period tabs: All, Bright Week, Thomas→Blind Man, Ascension, Pentecost
- Offset grid sidebar grouped by period; offsets with entries highlighted
- Overall summary: "23/57 offsets encoded · 23 complete · 0 partial"
- Same field display as Menaion plus Pentecostarion-specific fields:
  hours_format, menaion_set_aside, hours_kontakion, zadostoinik,
  matins aposticha, beatitudes with source/label metadata

### Audit module (src/lib/audit.js)
Exports: `auditMenaionEntry(entry)`, `auditPentecostarionEntry(entry)`,
`auditSummary(results)`. Returns `{ status, missing, hasPlaceholder }` where
status is 'complete', 'partial', or 'structural'. Field requirements match
`scripts/audit.js` (CLI version uses text-based parsing; shared module uses
object property checks).

### Bug fixed during build
`beatitudes_troparia` items in Pentecostarion entries (P+19, P+35–P+37) are
objects with `{text, tone?, source?, label?}` fields, not plain strings.
Browser initially crashed trying to render objects as React children. Fixed
to destructure and display source/label metadata alongside text.

---

## Schema Normalization — encoding_rule v2.1 (v0.3.8)

Canonical spec: `encoding_rule_v2.md` in repo root.

| Old field | New field | Scope |
|---|---|---|
| `kontakion:` | `kontakion_ode6:` | All Menaion entries + NAMED_DAYS + P+42 |
| `kontakion_3rd_ode:` | `kontakion_ode3:` | 4 Menaion entries |
| `service_file:` | `source_file:` | 53 entries |
| `stichera_aposticha_glory:` | `aposticha_glory:` | 1 entry (bug fix) |
| `matins_gospel_ref:` | `matins_gospel:` | 2 entries |
| `matins_ode:` | *(removed)* | 60 entries — redundant |

`kontakion_ode6` → 3rd & 9th Hours; `kontakion_ode3` → 1st & 6th Hours;
`hours_kontakion` → single-kontakion Pentecostarion weekday entries only.

**`fekula_section` vs `fekula_section_override`:**
Both may be present on the same entry. `fekula_section` is the canonical data field — the registry, gate, and data browser all read it. `fekula_section_override` is an assembler escape hatch — the assembler reads it first and uses it instead of deriving the section from `rank`. Use it only when the Fekula section cannot be derived from rank alone, specifically §2G entries (afterfeast with saint). For §2G entries, both fields must be set to the same value (e.g. `"2G1"`). Never use `fekula_section_override` alone — the registry won't see it. Never use it for §2B double services — rank is sufficient. Full rules in `encoding_rule_v2.md`.

---

## Encoding Status — May 23, 2026 Session

### Priority 1 (complete)
- `heavenly_king_omitted: true` P+39–P+47; `matins_format` P+39
- `kontakion_ode6` renamed in all multi-service Menaion entries (12) + All Saints NA
- `matins_ode:` removed from 60 Menaion entries
- 06-10: `source_file` added, `feast_e/g` string→null

### Priority 2 (complete)
- **P+35** (Blind Man Sunday): full encode — LIC stichera, vespers aposticha (Paschal), matins praises (7+1), beatitudes (4 Resurrection + 4 Ode VI), flags
- **P+36** (Monday): aposticha Tone V, matins aposticha, beatitudes Ode I, flags
- **P+37** (Tuesday): aposticha Tone V, matins aposticha, beatitudes Ode IV, flags
- **05-24** (Symeon Stylites): `has_polyeleos`, `has_litya`, `has_paroemias`, `matins_gospel`
- **05-25** (3rd Finding): `aposticha_source`, `has_paroemias`

### Priority 3 (complete)

| Date | Saint | Rank | Source |
|---|---|---|---|
| 05-16 | Theodore the Sanctified | §2A | General Menaion fallback — no PDF |
| 05-17 | Andronicus & Junia | §2A | General Menaion fallback — no PDF |
| 05-18 | Theodotus/Virgins/Peter+Dionysius | §2C | 05-18.pdf — 3+3 stichera |
| 05-19 | Hieromartyr Patrick of Prusa | §2A | 05-19.pdf |
| 05-20 | Martyr Thalaleus | §2A | 05-20.pdf |
| 05-21 | Constantine & Helena | §2E | 05-21.pdf — flags added to existing encode |
| 05-31 | Martyr Hermias | §2A | 05-31.pdf |

### Re-encoding backlog (from automated schema audit)

**Menaion** — 37 entries still need re-encode (Priority 4):
- Severity A (full): 06-01–06-30, 07-01–07-15 (stichera + flags missing)
- Severity C (cleanup): feast_e string→null on several June entries

**Pentecostarion** — P+49–P+56 (post-Pentecost) need full encode;
P+0–P+34, P+38 are stubs only.

---

## Project Notes Workflow Change (v0.3.9)

**Drive snapshots retired.** `project_notes.md` in the repo root is now the single
canonical file. Git history replaces versioned filenames. Update protocol:

1. Edit `project_notes.md` directly in the repo
2. Commit with a descriptive message: `docs: project notes — [summary of session]`
3. No Drive upload needed. No version in the filename.

Drive addendums (v0.3.22, v0.3.23) have been incorporated into this file.
Drive snapshots are historical record only — do not create new ones.

---

*Last updated: May 24, 2026 · Tool v0.4.0*

---

## Session Notes — May 23, 2026 (v0.3.11)

### Bugs fixed this session (all Fekula/PDF-traced)

**1. Aposticha Both now missing (P+42)**
`pentEntry.aposticha_theotokion` was encoded but `assembleVespers()` never rendered it. After the aposticha doxasticon (Holy Fathers T4), "Now and ever…" appeared with nothing following. Fixed by adding render block for `aposticha_theotokion` in the Pentecostarion aposticha branch.

**2. OT paroemia links missing in Vespers**
`paroemiaToScriptureHref()` was called in the context card but not in `assembleVespers()`. OT lessons showed as plain text without the "Read in Scripture ↗" badge. Fixed by calling the function per paroemia element in the assembler.

**3. P+42 LIC verse interleave broken**
`stichera_lord_i_call_count` was missing from P+42, P+48. `licCount` defaulted to 6 instead of 10. V(10) and V(9) floated above the block as uninterleaved verses; Holy Fathers stichera (slots 7–10) never rendered. Fixed by adding count field to affected entries.

**4. Three troparia at Vespers (P+42, P+56)**
Assembler only read `pentEntry.troparion`; ignored `troparion_2` (Glory) and `troparion_3` (Both now). Added support for both fields. Affects P+42 (Resurrection T6 / Fathers T8 / Ascension T4) and P+56 (Resurrection T8 / All Saints T4).

**5. Vespers kontakion suppression — now explicit**
Previously suppressed implicitly when `thirdTrop` was present. Now driven by `vespers_kontakion: false` on pentEntry. P+42 (§4B13) and P+56 (§4B17) both set. Assembler reads flag directly.

### §4B13 research — fully resolved

Vetted against `fekula_chapter_4.txt` and St. Sergius 70.pdf.

**No-Vigil Vespers (what our tool shows):**
Sunday troparion → Glory: Holy Fathers → Both now: Ascension troparion
✅ Confirmed correct per Fekula §4B13 and 70.pdf explicit rubric.

**Vigil Vespers (published parish schedule):**
Holy Fathers (×2) → Ascension (×1) — no Resurrection troparion
Both are correct; they apply to different service forms.

**OCA vs Russian translation divergence:**
Tool uses St. Sergius/HTM translations. OCA printed guides use OCA translations of the same prayers. Not a bug — expected and documented. Worth noting when comparing tool output with OCA service sheets.

**Chapter 6 theotokion vs §4B13 specific override:**
Chapter 6 general Sunday rule: Both now = dismissal theotokion in tone of last troparion.
§4B13 specific override: Both now = troparion of the feast (Ascension).
St. Sergius and Fekula §4B13 both prescribe the Ascension troparion explicitly.
OCA may follow the Chapter 6 general rule instead. Worth discussing with the parish priest.

---

## Session Notes — May 23, 2026 (v0.3.12)

### Bug fixed

**Hours troparion + kontakion hour-differentiation (P+42, P+56)**

Root cause: `assembleHour()` troparion resolution always used `effectiveMenaionTrop`
(the Menaion saint — Simeon Stylites on May 24) as the secondary troparion, and
always used `hours_kontakion` as the kontakion, regardless of which hour was being
assembled. Both wrong for `menaion_set_aside` Pentecostarion Sundays.

Fekula §4B13 prescribes hour-differentiated selection:

| Hour | Troparion | Kontakion |
|------|-----------|-----------|
| 1st & 6th | Sunday + feast (Ascension T4) | feast (Ascension T6) |
| 3rd & 9th | Sunday + saint (Holy Fathers T8) | saint (Holy Fathers T8) |

Fix: when `menaion_set_aside: true` and `troparion_2` present on pentEntry,
secondary and kontakion are selected by `is3rdOr9th` flag from pentEntry fields
rather than from the Menaion. Affects P+42 and P+56 only.

---

## Session Notes — May 23, 2026 (v0.3.14)

### Fixes and features

**Rubric type styling**
Instructional notes (e.g. "[Glory to Thee... and O Heavenly King are both omitted...]") were rendering in black service text. Added `type: 'rubric'` handler to ServiceBlock — bracketed content renders in faded gold italic (#9A8A70), visually distinct from text to be read aloud.

**LIC "Stichera on N" convention**
Psalm 141 header now shows "PSALM 141 — Stichera on 8" (or 6, 10) per standard liturgical convention. Inline transition note after last plain verse reads "[Stichera begin at V.(8) — 8 appointed for this day]" in faded gold italic. Belt-and-suspenders approach ensures readers know plain verses before the insertion point are intentional.

**May 25 Forerunner encoding complete**
Third Finding of the Head (§2E Polyeleos): 5 Menaion stichera slots filled (3 distinct + 2 via repeatIndex). Added repeatIndex field for non-adjacent repeats — entry [3] copies text from [0], entry [4] from [1], matching "repeating as necessary" rubric from 05-25.pdf.

**LIC assembler fixes**
- menaion_set_aside gates removed from licCount and Sunday LIC merge — all pentecostarion_sunday entries now get Octoechos merge regardless of flag
- menaion_set_aside gate added to high-rank Menaion kontakion override at Hours — Symeon Stylites §2E was overriding §4B13 Holy Fathers kontakion
- licCount variable ordering fix — was referenced before definition in Psalm 141 label, causing blank page

### Session totals: v0.3.11 → v0.3.14

- 11 bug fixes
- 3 new features (§4A1 weekday LIC, §4B6 Sunday LIC, repeat/repeatIndex)
- 2 styling improvements
- 1 encoding completion (May 25)
- §4B13 fully researched and resolved against Fekula chapter_4.txt

---

## Session Notes — May 24, 2026 (v0.3.15)

### Typica kontakia overhaul

Complete restructuring of the Typica kontakia section to match OCA and HTM rubrics.

**Three branches now govern the Kontakia section:**

1. **Sunday with a Feast** (e.g. P+42 Holy Fathers + Ascension):
   Saint kontakion first → Glory…Now and ever… → Feast kontakion.
   Source: OCA Typica rubric + HTM Horologion (both agree).
   Fekula §4B13 confirms: "Glory… kontakion of the Fathers / Now and ever… kontakion of the feast."

2. **Ordinary Sunday** (no feast):
   Hypakoë of the tone only — no kontakia.
   Source: OCA Typica rubric. Note: HTM Horologion does NOT prescribe the Hypakoë here — it uses
   the standard weekday kontakia sequence even on Sundays. This is an OCA vs Russian divergence.

3. **Weekday** (no feast):
   Transfiguration kontakion (always first) → Kontakion of the day → (Saint of the date, if desired).
   Source: OCA Typica + HTM Horologion (both agree on Transfiguration opener).
   Previously: Transfiguration was missing; saint was rendered before daily kontakia.

**Known gap:** Kontakion of the church/temple is parish-specific — the tool cannot know which
temple the reader serves in. This could become a user setting in a future version.

**OCA vs HTM divergence documented:**
- OCA: "On Sundays, if there is no Feast, only the Hypakoë in the appointed tone is sung."
- HTM: No mention of Hypakoë at Typica; standard kontakia sequence used even on Sundays.
- Tool follows OCA practice with HTM divergence noted in the source badge.

---

## Session Notes — May 24, 2026 (v0.3.16)

### Typica kontakia overhaul

Complete restructuring of the Typica kontakia section to match OCA and HTM rubrics.

**Three branches govern the Kontakia section:**

1. **Sunday with a Feast** (e.g. P+42 Holy Fathers + Ascension):
   Saint kontakion first → Glory…Both now… → Feast kontakion.
   Each rendered as individual styled block. Source: OCA Typica + HTM + Fekula §4B13.

2. **Ordinary Sunday** (no feast): Hypakoë of the tone only.
   OCA Typica: "On Sundays, if there is no Feast, only the Hypakoë in the appointed tone is sung."
   HTM does NOT prescribe Hypakoë here — uses standard kontakia. OCA vs Russian divergence documented.

3. **Weekday** (no feast): Transfiguration → day → temple (rubric note) → saint → Glory…With the saints… → Both now…Protectress (or Martyrs on Saturday).

### Bugs fixed
- Typica isSunday was always false — `dow` vs `dowNumber` destructuring mismatch
- Hypakoë tone key matched all "of Pascha" pentEntry names — now checks fekula_section
- "both now and ever" — HTM convention, was missing "Both" prefix in feast Sunday closer
- menaion_set_aside gate on Hours kontakion override

### Styling improvements
- Vespers dismissal troparia — Glory/Both now extracted as standalone fixed elements between troparion boxes
- Typica kontakia — individual styled blocks matching Vespers pattern (was single text blob)
- Temple rubric note — styled movable box with isRubricNote faded gold body text
- Orthodox three-bar budded cross (user SVG) at end of every service
- End markers added to Typica and Post-Communion (were missing)

### Backlog for next session
- **Pentecostarion P+20–P+34** — 15 weekday entries
- **June Menaion** — 30 entries
- **Transfiguration kontakion on weekdays during Pentecostarion** — verify whether it should still lead when an Ascension/Pentecost feast kontakion takes precedence
- **Temple kontakion** — future user setting ("My parish is dedicated to…")

## Session Notes — May 25, 2026 (v0.4.0–v0.5.0)

### Data browsers (v0.4.0)
- **Menaion browser** (`/menaion`): 12 month tabs, day grid sidebar, entry cards with all fields, per-entry audit indicators (green/amber/red). Lazy-loaded via React.lazy + Suspense.
- **Pentecostarion browser** (`/pentecostarion`): period tabs (Bright Week, Thomas→Blind Man, Post-Pascha/Ascension, Pentecost). Same audit indicators.
- **Shared audit module** (`src/lib/audit.js`): exports `auditMenaionEntry()`, `auditPentecostarionEntry()`, `auditSummary()`, plus the `MENAION_REQUIRED` (14 fields) and `PENT_REQUIRED` (7 fields) constants. Operates on parsed JS objects — checks actual field presence and deep-searches nested values for placeholder text. Used by both data browsers for per-entry green/amber/red indicators.

### Encoding validation architecture

Two-tier system, same rule set: **an entry is not complete until every required field is present AND no field contains placeholder text.**

**Tier 1 — CLI audit script** (`scripts/audit.js`): text-based, parses raw JS source files with regex. Run after encoding sessions:
```
node scripts/audit.js all           # everything
node scripts/audit.js may           # just May
node scripts/audit.js pentecostarion
```

**Tier 2 — In-browser data browsers** (`/menaion`, `/pentecostarion`): use the shared audit module at `src/lib/audit.js`. Operate on parsed objects, not raw text. Each entry card shows completeness indicator.

**Menaion required fields** (14): `source_file`, `rank`, `fekula_section`, `has_great_doxology`, `has_polyeleos`, `has_litya`, `has_paroemias`, `magnificat_sung`, `matins_format`, `feast_e`, `aposticha_source`, `stichera_lord_i_call`, `troparion`, `kontakion_ode6`

**Pentecostarion required fields** (7 + kontakion): `hours_format`, `matins_format`, `has_great_doxology`, `feast_e`, `aposticha_source`, `stichera_lord_i_call`, `troparion`, plus either `hours_kontakion` or `kontakion_ode6`

**Placeholder patterns detected**: `[Menaion sticheron`, `[stichera not yet`, `[NYE]`, `not yet encoded`, `Track B`, `Phase 2`, `to be encoded`

**Current state (v0.5.0)**: May 16/16 complete. June 0/30 complete (all missing v2.1 matins-era fields — pre-date expanded spec). July 0/5 complete (same). Pentecostarion 23/23 complete.

### Bug fixes (v0.4.1)
- Vespers OT paroemia Scripture links: `assembleVespers()` referenced nonexistent `liturgicalData.dateStr`. Fixed by adding `selectedDate` parameter.
- Pentecostarion browser crash: `beatitudes_troparia` items are objects `{text, tone?, source?, label?}`, not strings. Fixed destructuring.
- Sticky entry headers: ResizeObserver with `[]` deps, passed as `stickyTop` prop.

### OrdinaryBeginning refactor (v0.4.2)
- Consolidated `TypicalBeginning` and `VespersOpening` into single `OrdinaryBeginning` component. Props: `liturgicalData`, `readerMode`, `open/setOpen`, `collapsible`, `title`, `contextNote`. Three seasonal variants handled internally.
- Used by: Vespers, 1st Hour, 6th Hour, Typica. Also registered as standalone service at position 0.
- Net: 185 insertions, 456 deletions (271-line reduction).

### Pre-Communion Prayers (v0.5.0)
- **New service**: `pre_communion` — "Prayers Before Holy Communion" (Jordanville Prayer Book).
- **Data file**: `src/data/pre-communion.js` — 35 sections, ~36K chars of prayer text. Lazy-loaded (39KB chunk, 12KB gzipped).
- **35 sections**: Opening prayers, Psalms 22/23/115, after-psalms doxology, Troparia T8, Lenten troparion, Psalm 50, Canon for Holy Communion (Odes I–IX with Kontakion after Ode VI), It is truly meet + Trisagion/Our Father, Troparia after Canon, LHM 40x + verses, Prayers 1–10 (Basil the Great, Chrysostom ×4, Symeon Metaphrastes, Damascene ×2, Symeon the New Theologian), I Believe, Communion verses (Metaphrastes + Of Thy Mystical Supper), Final troparia, Final prayer, Of Thy Mystical Supper (repeated).
- **Assembler**: `assemblePreCommunion(data)` — iterates data array, pushes fixed elements + end marker. All fixed text, no movable parts.
- **SERVICE_REGISTRY**: positioned before `post_communion`. Season-independent (`inScope` bypass). Legend strip hidden (no movable/unresolved items).
- End marker: "THE END OF THE PRAYERS BEFORE HOLY COMMUNION" + Orthodox cross.

### How It Works panel rewrite (v0.5.0)
- Complete overhaul of the `HowItWorksPanel` — from 5 stale sections to 6 current sections.
- **New sections**: "What This Tool Does" (service inventory table — 9 built / 4 planned, plus additional features list), "Sources & Texts" (expanded from 4 to 7 sources including Jordanville Prayer Book, General Menaion, Pentecostarion).
- **Revised sections**: Calendar Engine (added Triodion horizon note), How Services Are Assembled (updated daily cycle, kept Lord I Have Cried teaching content), Encoding Status (removed incorrect `.txt` Drive references, updated counts to actual 58 Menaion + 23 Pentecostarion, updated field table), "What's Here, What's Coming & How to Help" (honest inventory of built vs. planned, Triodion as next horizon).
- Fixed 443 double-escaped Unicode sequences (`\\u2014` → `—` etc.) caused by Python raw strings.

### Litiya encoding support + Great Feast scope (v0.5.1)

#### Encoding spec amendments
- `litya_stichera[]`, `litya_glory`, `litya_both_now` — added `{tone, text}` object shape
- Changed "§2F only" → "when has_litya: true, any rank" — Polyeleos feasts can also have Litiya
- Empty `litya_stichera: []` documented as valid (Polyeleos feasts where PDF has no dedicated stichera)
- Temple sticheron note added (first sticheron at Litiya = parish dedication, future config setting)

#### Audit module
- Conditional Litiya check: when `has_litya === true`, requires `litya_stichera` (array, may be empty), `litya_glory`, `litya_both_now`. Null values pass (field present but no dedicated text). Dates with `has_litya: false` unaffected.
  - `litya_glory: null` and `litya_both_now: null` are valid at any rank when the PDF prints no dedicated text. The assembler's `if (menaionEntry.litya_glory)` check skips the render block — no placeholder rendered in the service.
  - Registry uses `'litya_glory' in entry` (key presence) rather than `isPresent()` to allow null.
  - Confirmed case: 05-27A.pdf (John the Russian, §2F Vigil) — PDF only says "At the Litiya, the Sticheron of the temple." No Glory or Both now printed.
  - **encoding_rule_v2.md §2F statement "always present in PDF for Vigil rank" was wrong** — corrected to reflect that null is valid and PDF must be read.

#### Encoding — three dates updated
- **June 24** (Nativity of the Baptist, great_feast §2F): full v2.1 encode, 39 fields. 3 Litiya stichera T1 + Glory T5 (Andrew of Crete) + Both Now T5 (Theotokion). All Glory/Both Now confirmed unique across LIC, Litiya, and Aposticha positions.
- **May 21** (Sts. Constantine & Helena, §2E): 5 Litiya stichera (T1/T2/T2/T3/T4) + Glory T5 + Both Now T5. All from 05-21.pdf.
- **May 25** (Third Finding of the Head, §2E): `litya_stichera: []`, `litya_glory: null`, `litya_both_now: null`. Neither St. Sergius nor RLE PDF prints dedicated Litiya stichera.

#### Great Feast and feast-period dates now in scope
- Added `great_feast`, `forefeast`, `afterfeast`, `apodosis` to `inScope` list
- Services render with feast troparion/kontakion from Menaion data instead of blank screen
- Gold informational banner explains what's working vs. in development
- `great_feast` rank added to `isHighRank` in Vespers assembler — correct 8-stichera count, Entrance shown, Menaion aposticha used
- Fekula citation correctly shows §2F (from `menaionEntry.fekula_section`) instead of defaulting to §2A

#### Source material discovered
- **RLE Menaion** (`Menaion/rle/may/`): same work as St. Sergius in different English translation. Less complete for our purposes (Matins incomplete). Useful as cross-reference.
- **OCA Litiya prayer** (`vespers/oca/OCA_prayer_for_litiya.txt`): complete OCA-specific diptych. 5-petition structure (×40/×50/×30/×3/×3) differs from HTM/ROCOR (×40/×30/×3/×3). Includes blessing of loaves prayer. This is the primary source for the Litiya fixed-text constants.

#### Menaion + Pentecostarion browser improvements
- Menaion browser: new Litiya section (stichera, Glory, Both Now), Beatitudes troparia display, improved audit indicator with individual monospace field tags
- Pentecostarion browser: matching improved audit indicator
- Both browsers: "← Hours Tool" back link added to sticky header
- How It Works panel: data browser entries now have clickable "open" links (not just code references)
- Scroll fix: clicking a partial entry now lands above the audit box (accounts for sticky header height) instead of scrolling past it

### Backlog for next session
- **Vespers Litiya assembler** — specification written (`vespers_litiya_spec.md` in repo root). Test cases: May 25 (§2E, no dedicated stichera) and June 24 (great_feast, full Litiya stichera). OCA prayer text on Drive.
- **Pentecostarion P+20–P+34** — 15 weekday entries
- **June/July backfill** — 34 entries missing v2.1 matins-era fields
- **Triodion/Lenten services** — next major development horizon
- **Temple kontakion/sticheron** — future user setting ("My parish is dedicated to…")

### Vespers Litiya assembler (v0.5.2)

#### Fixed text constants encoded
All Litiya fixed texts encoded as inline constants in `hours-tool.jsx` (near existing litany blocks, ~150 lines total):
- `LITIYA_PETITION_1` through `LITIYA_PETITION_5` — OCA 5-petition diptych (×40/×50/×30/×3/×3). Petition 1 contains `Saint(s) ___` placeholder replaced at runtime with `menaionEntry.saint`.
- `LITIYA_CONCLUDING_PRAYER` — priest's concluding prayer
- `LITIYA_PEACE` / `LITIYA_BOW` / `LITIYA_BOW_PRAYER` — peace and head-bowing at the Litiya (separate from §14 sequence)
- `THEOTOKOS_VIRGIN_REJOICE` — full text for Vigil troparion formula
- `LITIYA_BLESSING_LOAVES_PRAYER` — priest's blessing of the loaves
- `LITIYA_PS33_FIRST_10` — Psalm 33, first 10 verses
- `LITIYA_PRIESTLY_BLESSING` — "The blessing of the Lord be upon you…"
- Source: `OCA_prayer_for_litiya.txt` (Drive: `vespers/oca/`) — authoritative OCA text, not ROCOR/HTM.

#### Litiya insertion (§14b)
- Condition: `menaionEntry.has_litya === true`
- Inserted between §14 head-bowing and §15 Aposticha
- Elements: processional rubric → temple sticheron placeholder (unresolved, future parish config) → Menaion Litiya stichera (or informational note when empty array) → Glory → Both Now → petitions with saint insertion → concluding prayer → peace/head-bowing → return-to-temple rubric
- Reader mode (Fekula Ch. 10): petitions replaced with LHM counts; priestly parts → omission stubs

#### Menaion aposticha assembler
- New branch: when `menaionEntry.stichera_aposticha` is a non-empty array, assembles stichera interleaved with their verses, plus Glory and Both Now. Previously all §2D+ entries showed an "unresolved" placeholder.
- June 24 (3 aposticha T2 with verses + Glory T8 + Both Now T8) and May 25 now render properly.

#### Vigil troparion formula (§18)
- When `hasLitya && (rank === "vigil" || rank === "great_feast")`:
  - Non-Sunday, non-Great-Feast-of-Lord: saint troparion ×2 + O Theotokos Virgin ×1
  - Sunday: O Theotokos ×2 + saint troparion ×1
  - Great Feast of the Lord: troparion ×3 (placeholder flag — no Lord-feast dates yet encoded to test)
- Followed by Blessing of Loaves: deacon prompt → priest prayer → Amen → "Blessed be the name…" (×3) → Psalm 33 first 10 verses → priestly blessing → Matins transition note
- Reader mode: Blessing of Loaves omitted with stub; troparion repetition still reads

#### Dismissal changes
- Vigil with Litiya: standard dismissal sequence suppressed entirely — service continues into Matins
- End-of-Vespers marker text: "END OF GREAT VESPERS — SERVICE CONTINUES WITH MATINS" (vs. standard "THE END OF VESPERS")

#### New element type: informational
- Renderer added for `type:"informational"` — light gold background, italic text
- Used for rubrical notes, empty-stichera messages, Matins transition note

### Backlog (updated v0.5.2)
- **Polyeleos Litiya test** — May 25 (§2E) should show empty stichera note, petitions, standard troparion (not Vigil formula), no Blessing of Loaves, standard dismissal. ✅ Verified — working correctly.
- **Great Feast of the Lord** — `isGreatFeastOfLordForVigil` flag is a placeholder (always false). Needs refinement when Lord-feast dates (Nativity, Theophany, Transfiguration, etc.) are encoded. These use troparion ×3 instead of ×2+×1.
- **Temple sticheron** — ✅ DONE (v0.5.3). See session notes below.
- **Pentecostarion P+20–P+34** — 15 weekday entries
- **June/July backfill** — 34 entries missing v2.1 fields
- **Triodion/Lenten services** — next major development horizon

### Temple dedication selector + Typica integration + sung/read explainers (v0.5.3)

#### Temple dedication selector (Litiya)
- **TEMPLE_DEDICATIONS constant** — 40 common OCA parish dedications in 4 categories (The Lord & Holy Trinity, The Theotokos, Saints & Archangels, Feasts & Sacred Events). Each maps to a Menaion date key or Pentecostarion offset.
- **Hybrid UI** — compact `<select>` dropdown with `<optgroup>` categories, plus visible "No dedication / serving at home" row with home icon, plus "More dedications..." expander for less common entries. Only dedications with encoded and audit-passing troparion data appear in the dropdown. List grows automatically as more months are encoded.
- **localStorage persistence** — `localStorage.setItem('parish_dedication', id)`. Persists across sessions, per-device, no login required. Read on mount, written on selection.
- **Three rendering states**: (1) unselected — picker card with dropdown; (2) selected saint — standard movable element with troparion text, tone, source, "(change)" link; (3) "no dedication" — informational note with home icon and left bar explaining omission.
- **Great Feast suppression** — temple sticheron element omitted entirely on `great_feast` rank per HTM rubric. Verified: June 24 (Great Feast) shows no picker; May 25 (Polyeleos) shows picker correctly.
- **resolveTempleTroparion()** — resolves any dedication ID to `{ tone, text, saint, source }` from module-level Menaion/Pentecostarion caches.

#### Temple kontakion at the Typica
- **resolveTempleKontakion()** — parallel function resolving kontakion from `kontakion_ode6` (Menaion) or `hours_kontakion`/`kontakion_ode6` (Pentecostarion).
- **Typica kontakia section** — position 3 (after Transfiguration and daily kontakion) now resolves from the same `localStorage` parish dedication setting. Three states: kontakion rendered, troparion as fallback (when kontakion not yet encoded), or instructional note (when no dedication set). "Serving at home" omits silently.
- **Lord-feast ordering note** — OCA rubric says feast-of-the-Lord temple kontakion goes first (before Transfiguration). Not yet implemented; noted in code comment for when Lord-feast dates are encoded.

#### Litiya choir response styling
- Each Litiya petition split into two elements: deacon petition (gold/italic) + choir response (standard dark text). Previously responses inherited priestly styling.
- Rubric label color now context-aware globally: Priest/Deacon → gold (#8B6914), Choir/Chanters/Reader → dark brown (#5A4A2A).

#### Sung/read explainers
- **Psalm 103** — annotated with "Sung by the choir" (Great Vespers: Saturday evening, Doxology+ rank) or "Read by the reader" (Daily Vespers: ordinary weekdays). FekulaBadge ⓘ explainer describes the distinction: Royal Doors open + censing at Great Vespers; Royal Doors closed at Daily Vespers.
- **Kathisma** — "Blessed is the Man" annotated "Sung by the choir" with explainer distinguishing Saturday evening (entire kathisma, often abbreviated) from feast days (first stasis only). Ordinary numbered kathismas annotated "Read by the reader" with explainer about weekly rotation. Omitted kathismas show no annotation.
- **`showFekula` flag** — opt-in for fixed elements that need the ⓘ badge (Psalm 103). Previously badges only rendered on movable elements.

#### Icons
- All Tabler icon font references (`ti ti-*`) replaced with inline SVGs throughout the temple selector — Tabler webfont was never loaded in the project. Church icon replaced with scaled-down budded cross matching service end markers.

### Backlog (updated v0.5.3)
- **HTM 12 Great Feasts encoding** — one session would unlock 12 more temple dedications (Transfiguration, Nativity, Theophany, Annunciation, Dormition, etc.) from the existing Drive file
- **Common saints encoding** — St. Nicholas (Dec 6), Archangel Michael (Nov 8), St. Herman (Aug 9), St. Innocent (Mar 31) would cover the most popular OCA dedications not yet available
- **Lord-feast temple ordering** — when Lord-feast dates are encoded, temple kontakion at Typica should move to position 1 (before Transfiguration)
- **Great Feast of the Lord Vigil formula** — `isGreatFeastOfLordForVigil` placeholder needs real detection
- **Pentecostarion P+20–P+34** — 15 weekday entries
- **June/July backfill** — 33 entries missing v2.1 fields (was 34; Jul 1 completed this session)
- **Triodion/Lenten services** — next major development horizon

### Encoding session — July 1 (v0.5.3)

**July 1 — Holy Unmercenaries Cosmas & Damian of Rome (§2C Six-Stichera)**

Full v2.1 encoding from 07-01.pdf. Previously had basic fields only (troparion, kontakion, liturgy propers). Now complete:

- **LIC stichera**: 6 stichera (3 × Tone I + 3 × Tone IV). Glory T6 doxasticon. Both Now = Octoechos theotokion (tone of glory).
- **Aposticha**: §2C = Octoechos stichera. Glory T6 doxasticon from Menaion. Both Now = Octoechos.
- **Kontakion Ode III**: confirmed same as Ode VI (no separate kontakion at Ode III in PDF).
- **Ikos**: full text ("The discourse of the wise physicians surpasseth all reason and wisdom...")
- **Exapostilarion**: "What utterances can rightly describe the unmercenaries' grace of healing?"
- **Beatitudes**: 4 troparia from Ode III (+ 4 from Octoechos per rubric)
- **Matins flags**: god_is_the_lord, no great doxology, no polyeleos, no litya, no paroemias, magnificat not sung
- **Section numbers**: feast_e updated to §153, feast_g to §34
- **Audit**: ✅ complete — passes all 14 required fields

**Audit totals after session**: May 16/16 complete. June 0/30 (pre-v2.1). July 1/5 complete. Pentecostarion 23/23 complete.

---

## Session notes — June 7, 2026 (v0.11.23 → v0.11.29+)

### Tone 1 SATB — completed this session

**Bass/tenor register fixes:**
- Tenor Final Phrase: `octaveDiv:{la:1,si:1}` — la/si lifted to div-1 to sit above prior sol
- playNotes() tenor audio path fixed — was calling `freq()` instead of `freq_tenor()`, bypassing octave division entirely
- si detuning: -100 cents in SATB only (`voicePart==='satb'`) to push beating vs alto ti 2nd harmonic above perceptual threshold. Tenor-solo plays true 220Hz.

**Unified chip height map (v0.11.27):**
- Bass and tenor now normalized together in `buildUnifiedVoiceMap`. Bass pitches (low register) always sort taller than tenor pitches — physics guarantees separation with no fighting between independent normalizations.

**SATB visual fixes:**
- Soprano ghost flag corrected: `isGhostSoprano=true` in SATB row (was `isSoprano=true`)
- Solfège labels added back to ghost soprano and tenor chips (were accidentally suppressed)
- Ghost soprano and tenor chips now highlight correctly during playback (active bg + border)
- Container sized to maxBassH; tenor ghost overlays at top; bass extends below

**UX / pedagogical improvements:**
- Try example: now populates text field with bracketed stichera text and runs `analyzeText()` — same single pointing path as the Point button. Director vs. Machine fully available on examples.
- `analyzeText(txt)` extracted as shared helper; `analyze()` is a one-liner wrapper.
- Director vs. Machine: bracketed encoding shown under each verse row in monospace — director encoding above, machine encoding below. Teaching moment made explicit.
- Play All button: green background, "Play ▶" label at rest; red "◼ Stop" during playback.

**Noted for future sessions:**
- Portrait tablet wrap bug: chip rows wrap independently — fix requires per-syllable column layout (S chip + text + B chip as one unit). Non-trivial render restructure.
- SA chip height consistency: soprano/alto should use unified normalization like bass/tenor for proportional chip height relationship.

---

## Session addendum — June 7, 2026 (late session)

### Additional fixes after v0.11.29

**Tone 1 Phrase C preset — accent marks corrected (tutorial p.7):**
- Previous preset had `Da(accent:true)` as anchor, leaving only `nounced` in the
  cadence slice. `distribute(["do","ti"], 1)` crammed both pitches onto one syllable,
  producing a phantom second audio note under "nounced" with no corresponding chip.
- Correct reading per score: intonation bracket = `This is He` (He=H); reciting tone
  bracket = `Whom`; cadence bracket = `Da-vid an-nounced` (Da=do/H, vid=do/Q,
  an=do/Q, nounced=ti/H).
- Fix: `He(accent:1)`, `Da(accent:1)`, `vid/an/nounced` all accent:0.
- **Root cause was data, not logic.** `pointLine`, `distribute`, `lineToNotes` all
  behaved correctly. Wrong bracket = wrong anchor = wrong syllable count = phantom note.
  This validates the engine — errors reduce to text input stress mark placement.

**Additional UX/pedagogical features this session:**
- Try example: populates text field with bracketed stichera + runs `analyzeText()` —
  Director vs. Machine now fully available on examples.
- `analyzeText(txt)` extracted as shared helper; `analyze()` is a one-liner wrapper.
- Director vs. Machine: bracketed encoding shown under each verse in monospace.
- Play All button: green "Play ▶" at rest, red "◼ Stop" during playback.
- Ghost soprano/tenor chips: labels restored, active highlight during playback.
- Portrait tablet wrap bug noted for future session (chip rows wrap independently).
- SA chip height consistency noted for future session.

---

## Session Notes — June 8, 2026 (v0.7.x → v0.8.0)

### UI Overhaul

**Sticky control bar** — DATE/SERVICE row and the liturgical context header row are now `position: sticky, top: 0`. Row two is a full-width clickable header: `[Day · Tone N] — LITURGICAL CONTEXT ▼ — [Reader's Service]`. Day·Tone hides via `visibility: hidden` when context is expanded (preserves centering). Context body expands inside the sticky bar's `maxWidth: 720px` inner wrapper so it aligns with the control rows.

**ServiceOutline** — sticky OUTLINE pill (left, 28px collapsed / 178px expanded). Shown only for `vespers`, `typica`, `matins`, `liturgy` keys. Derives rows from assembled `elements` array via `OUTLINE_MAJOR_IDS` and `OUTLINE_LABEL_PREFIXES`. Green dot = encoded, red dot = placeholder. `IntersectionObserver` in component's own `useEffect` with 80ms settle delay. Scroll offset: `getBoundingClientRect().top + window.scrollY - 128`. Panel closes first, 50ms delay, then scroll. Sticky `top: 120px` (clears sticky control bar).

**Major section headers** — `MAJOR_SECTION_IDS` set + `MAJOR_LABEL_PREFIXES` array in `ServiceBlock` classify elements as major service movements. Major labels render at 0.82rem with gold underline. Sub-element labels unchanged at 0.7rem.

**Nav buttons removed** — top and bottom prev/next service buttons removed. Service dropdown is sufficient.

**Scripture/kathisma inline links** — when `element.scriptureHref` or `element.kathismaNum` is present, the last line of element.text renders as a gold underline `<a>` tag (same target as the badge button). Card body stays inert — no hover effects, no background changes.

### Data Gap Fixes

**Vespers prokeimenon (Fekula §2E–§2F)** — `menaionEntry.prokeimenon_text` was never consulted in `assembleVespers`. Now: `menaionProk` built from menaionEntry when rank is polyeleos/vigil; overrides both weekday table and Saturday Great Prokeimenon. `prokSource` field: `'weekly' | 'saturday_great' | 'menaion_festal' | 'pentecostarion'`. `isGreatFeast` extended to include `hours_format` checks (ascension, pentecost) so temple sticheron correctly suppressed.

**Typica alleluia Sunday gap (Fekula §4A3)** — on Sunday + polyeleos/vigil Menaion saint, resurrectional Alleluia (Octoechos tone) now renders first, festal Alleluia second. Previously `menaionEntry.alleluia_verse` check preceded Sunday branch, dropping the resurrectional. Fixed by restructuring the `isSunday` branch first. `alleluiaSource` field: `'weekly' | 'sunday_resurrectional' | 'menaion_festal' | 'menaion_festal_sunday' | 'pentecostarion'`.

**Pentecostarion Litiya gap** — Litiya gate was `menaionEntry.has_litya === true` only. Five Pentecostarion entries (P+35, P+39, P+42, P+49, P+56) had fully encoded litiya data never rendered. Fix: `hasLitya = menaionHasLitya || pentHasLitya`; `litEntry` selects pent or menaion. `isGreatFeast` extended for Pentecostarion Great Feasts via `hours_format`.

### Explainer Badges

Three new explainer components, all following the same pill-badge pattern as `FekulaBadge`:

- **`ProkeimenonExplainer`** (`Tone source ▾`) — Vespers prokeimenon. Priority chain, active source box, weekly Vespers table (HTM Horologion) with active row highlighted. Festal override row appended when active.
- **`TypicaProkeimenonExplainer`** (`Tone source ▾`) — Typica prokeimenon. Separate because: different weekday table (different tones/texts), Sunday uses Octoechos tone not DOW, Saturday has two prokeimena (All Saints T8 + Departed T6), §2E/§2F appends festal after daily. `typicaMode: true` on elements routes to this explainer.
- **`AlleluiaExplainer`** (`Verse source ▾`) — all Typica alleluia elements. Priority chain including Sunday dual-alleluia rule, weekday table with festal override row.

All three tables: active row highlights in gold when daily table governs; no highlight when festal overrides — only the festal row at the bottom highlights.

### Octoechos Browser (Phase 2)

`src/components/octoechos-browser.jsx` at `/orthodox-hours/octoechos`. Tone picker (1–8) lazy-loads per-tone files. Vespers: day tabs, LIC stichera, aposticha, dogmatikon. Matins: full Sunday Resurrectional Matins for all eight tones (sessional hymns, Songs of Ascent, all three canons, ikos, Praises, Great Doxology troparion). Index Tables: tone-independent data from index.js. Fixed crash: `RESURRECTIONAL_TROPARIA[tone]` is `{tone, text}` object — was passed directly as React child. Fixed `SUNDAY_ALLELUIA[tone].stichoi` (array, plural key).

### Architecture Notes

- `ServiceOutline` is a proper standalone module-scope React component — no closures over main component. `useEffect` for `IntersectionObserver` lives inside it. State (`outlineOpen`, `activeSection`) passed as props from main component's `useState` hooks (declared in hooks section, no forward refs — previous attempts caused TDZ crash in minified bundle).
- `rank` is not declared in `assembleTypica` — new code must use `menaionEntry?.rank` not a bare `rank` reference.


---

## Open Encoding Issue — Dual LIC Stichera Counts (Seasonal Conditional)

### Pattern
Some high-rank Menaion feasts carry **two distinct LIC stichera appointments** depending on liturgical season. The Menaion PDF explicitly addresses both cases. The current schema supports only one `stichera_lord_i_call_count` and one `stichera_lord_i_call` array, which cannot cleanly express both paths simultaneously.

### Proposed resolution (deferred pending evidence)
Two new fields:
```js
stichera_lord_i_call_count_ordinary: N,   // Ordinary time / Apostles' Fast slot count
stichera_lord_i_call_ordinary: [...],     // Ordinary-time array when repeat rules differ
```
`stichera_lord_i_call_count` and `stichera_lord_i_call` continue to hold the **Pentecostarion** appointment (since that is the path the assembler reads first). The assembler reads `_ordinary` fields when `!isPentecostarion && isHighRank`.

Do not implement until the evidence log below contains enough cases to confirm the schema is worth the complexity.

### Evidence log

| Date | Saint | Rank | Pent path | Ordinary path | Notes |
|------|-------|------|-----------|---------------|-------|
| 05-21 | Holy Equals-of-Apostles Constantine the Great & Helena | polyeleos | 8 (3 Pent + 5 Menaion, first two stichera each ×2) | Ordinary time — PDF not yet verified | Previously encoded with literal text duplicates + `repeat: true` (old convention); corrected to no-text `repeatIndex` markers at positions 1 and 3. stichera_lord_i_call_note added. **Calendar note:** when Pascha = April 12 (2026), May 21 = P+39 (Ascension, `manaion_set_aside: true`) — entire Menaion entry displaced; neither Pent nor ordinary path fires. Pent path fires only when May 21 falls on a non-`manaion_set_aside` afterfeast weekday. |
| 05-25 | Third Finding of the Head of St John the Forerunner | polyeleos | 8 (3 Pent + 5 Menaion, "repeating as necessary" → items 0,1,2,0,1) | 6 Menaion (3 unique × 2, uniform doubling) | Pentecostarion path now handled correctly via licCount override. Ordinary path open — assembler reads count=8, produces 3 resolved + 5 unresolved instead of 6 clean. Next occurrence ~2067. |
| 05-27 | Righteous Confessor John the Russian | vigil | 8 (3 Pent + 5 Menaion, first sticheron ×2) | 6 Menaion (4 unique? — PDF not yet read for fast path) | Pentecostarion path handled. Ordinary-time path not yet verified from PDF. |
| 06-02A | Holy Greatmartyr John the New of Suceava | polyeleos | 8 (3 Pent + 5 Menaion, "repeating the first Sticheron") | 8 Menaion ("each of the 4 Stichera is repeated" = uniform doubling 4×2) | Ordinary-time path works via uniform doubling (no `_ordinary` field needed for count; only the array differs — Pent needs first-repeat marker, ordinary needs none). Pentecostarion 5th Menaion slot still unresolved. |

### Current mitigations
- `stichera_lord_i_call_note` on affected entries documents both paths and suppresses false audit errors.
- `licCount` assembler fix (v0.16.9): when `isPentecostarion && isHighRank` and Menaion count exceeds pentEntry count, Menaion count governs. This correctly fires the 8-slot path for all three entries above.
- Ordinary-time path for 05-25 and 05-27 remains open (wrong licCount used; unresolved slots emitted).

### Action threshold
Implement `_ordinary` fields when **5 or more** confirmed entries appear in this log, or when an ordinary-time date is within 12 months of the current deployment date.

---

## Session Notes — June 15, 2026 (v0.16.6 → v0.16.11)

### Vespers assembler fixes
- **v0.16.6:** Vespers service selector radio buttons now re-assemble for the selected saint on multi-commemoration days (was always locked to OCA primary). `stichera_glory_absent: true` sentinel added — verified-absent doxasticons render "Glory… now and ever" combined per Fekula "if there be one." Check D added to `validate_entries.mjs`.
- **licCount Menaion override (v0.16.8/v0.16.9):** High-rank Menaion feasts (polyeleos/vigil) whose PDF explicitly appoints more stichera than the Pentecostarion afterfeast default now have their count respected. Three-tier priority: Great Feast Pent → Menaion count when higher → afterfeast Pent → rank default. Affects 05-21, 05-25, 05-27, 06-02A.
- **§4A3 repeat marker fix (v0.16.11):** Menaion `repeatIndex` markers in the combined `effectiveLicStichera` array were resolving against the wrong array — Pentecostarion stichera bled into Menaion repeat slots (e.g. Myrrhbearers appearing in Constantine & Helena positions on 05/20/2027). Fixed by resolving Menaion markers against `menaionLicStichera` only. Gate section 5 added to catch this class of bug (71/71).

### Data corrections
- **Repeat marker sweep:** 05-21 Constantine, 05-24 Symeon, 05-27 John the Russian, 06-28 Cyrus & John, 07-02 Maximovich, 07-14 Nicodemus — all had `repeat:true` text duplicates or `repeatIndex` on text-bearing items. Converted to canonical no-text `{ repeatIndex: N }` markers. `encoding_rule_v2.md §6b` documents the convention for future sessions.
- **`stichera_lord_i_call_note` pattern established** for Pentecostarion seasonal conditionals (05-21, 05-25, 05-27, 06-02A). Dual LIC count evidence log in project_notes.md — threshold 5 entries before implementing `_ordinary` schema fields.
- **Multi-commemoration audit bug fixed:** `auditMenaionEntry` previously only audited `entry[0]` for array days. Now audits all sub-entries and returns worst status. Calendar badge and summary now reflect any gap in any sub-entry.

### Pointing dialect system (v0.16.10–v0.16.11)
- **`normalizeSergius` helper:** converts `*`/`**` (St. Sergius) to `|`/`//` (OCA) at render/handoff time only. Stored data never mutated — `*`/`**` serves as source provenance signal. Three call sites: `isPointable`, `handoffVerse`, `renderPointed`.
- **Three tiers:** Tier 1 = no markers (prose); Tier 2 = `*`/`**` or `|`/`//` (structural line breaks); Tier 3 = `|`/`//` + `[]` (OCA director emphasis). Assembled service shows `⚑ verse not pointed (source: St. Sergius)` on Tier 2 verses.
- **Menaion browser:** `[St. Sergius]` / `[RLE/OCA]` dialect badge inline with tone. Raw text displayed (not normalized). Gold `⚑ review pointing` badge on entries with no pointing markers in LIC/aposticha stichera. Separate `needsReview` state in audit — amber dot/badge, not red error.
- **Check E (validate_entries.mjs):** intra-array marker consistency — if any item has markers, all must. Malformed unspaced markers fail hard.

### Open backlog from this session
- **39 unpointed `spec_mel` stichera** (May 05-16–05-31, Tikhon of Kaluga, Jonah) — show gold review badge in browser. Require PDF review to add `*`/`**`. Not encoding errors; source markers simply not applied at encode time.
- **P+35 Sunday of Blind Man stichera** — n=3, count=10, markers=1, `repeat:true` on item with text. Pre-existing broken encoding; needs reshaping to match Jonah/Constantine pattern.
- **SUNDAY_APOSTICHA_THEOTOKIA no-saint-doxasticon set** (Resurrectional Theotokion "At the Aposticha") — distinct from the saint-doxasticon table encoded in v0.16.5. Not yet encoded.
- **Token rotation** — overdue across multiple sessions.
