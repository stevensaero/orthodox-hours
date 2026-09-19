# Divine Liturgy Assembler — Integration Spec (v1.1)

**Status:** APPROVED with amendments (Bill, Sept 19 2026) — see §5. Phase 0 landed at v0.46.5; Phase 1 at v0.47.0; Phase 2 at v0.48.0; `built: true` at v0.48.1; Phase 3 at v0.49.0.
**Baseline:** orthodox-hours at `dd13dac`, tool v0.46.4 (badge and notes header agree).
**Data:** `src/data/liturgy/chrysostom.js` — 624 Chrysostom units, 628 Basil
(28 overrides, 4 inserts, 0 pending); encoding spec at v24 (repo root).
**Menaion:** wired to **V1** (`src/data/menaion/*.js`). Menaion V2 is untouched.

---

## 0. Where things stand

**The tool is already half-expecting this service.** `SERVICE_REGISTRY` has
`{ key: "liturgy", label: "Divine Liturgy", built: false }` (`hours-tool.jsx:6512`);
the outline component and the `▤ outline` toggle both whitelist `liturgy`;
`getLiturgyType()` (`:6273`) already answers chrysostom / basil / presanctified;
`buildDismissal()` already has a `liturgyAuthor` slot; and four V1 field families
are encoded on 45–61 dates and read by nothing: `prokeimenon_*`, `alleluia_*`,
`communion_verse`, `beatitudes_troparia[]`. The in-app help even says so
(`:14329`: "Liturgy-specific fields … encoded in the data but not yet surfaced").

**The encoding module is complete and self-contained.** It deliberately resolves
nothing calendar-dependent (spec v8): blanks like `___ Tone`, the entrance verse's
day-type clause (`le-10`/`le-11`) and the Sunday dismissal (`di-08`) are printed as-is
and left for the assembler. That is exactly the seam this integration fills.

**What does not exist yet:** an `assembleLiturgy()`, a rendering path for
speaker/mode/cue units, the Little Entrance troparia/kontakia order (Fekula ch.1/ch.2
tables are not in the repo at all), a Trisagion-substitute rule, a zadostoinik rule,
festal antiphons (no V1 field), and the Beatitudes accessor for Octoechos V2
(`liturgy.beatitudes` is encoded but unreachable).

---

## 1. Architecture

### 1.1 Data module lands in the repo, verbatim

```
src/data/liturgy/chrysostom.js     ← file copy of the encoding module (no transcription)
src/data/liturgy/registry.js       ← MOVEMENT_REGISTRY (id → label, part, movable, hook)
tools/validate_liturgy.mjs         ← closed vocabulary, order, ids, overrides, inserts
tools/liturgy_preview/             ← build_preview.mjs + liturgy_reassembly_test.html
```

The copy is a file operation, never a re-typing (spec v22 filter rule). After the
copy the **repo is the single point of truth** (project instructions), the local
folder becomes the scan archive, and future encoding (Proskomedia, appendices) edits
`src/data/liturgy/chrysostom.js` directly. The preview page keeps working from the
new location, so the review workflow Bill already has is preserved.

`registry.js` is the promotion spec v13 anticipated: `MOVEMENT_LABELS` and
`MOVABLE_MOVEMENTS` move out of the preview's `<script>` into data, each movable
movement gaining a `hook` name the assembler dispatches on (§3).

### 1.2 Assembler is a pure module, not more of `hours-tool.jsx`

`src/lib/liturgy-assembler.js` exports `assembleLiturgy(ctx)` and returns the same
flat `elements[]` every other service returns. `hours-tool.jsx` gets one dispatch
branch (`:15581` block) and one lazy loader, nothing else. This follows the
`readings.js` precedent (`project_notes.md:573`: "everything that can be
liturgically wrong … is decided in one testable place") and keeps the 16.7k-line
component from growing by another 1.5k.

`ctx` is what `App()` already has in hand: `liturgicalData`, `menaionEntry`,
`pentEntry`, `dailyReading`/`feastReading`, `templeDedication`, plus the Octoechos
accessors and `getLiturgyType`, passed in as functions. `readerMode` is **not**
passed: the Liturgy has no reader-without-priest form; that is what the Typica is
for. If `readerMode` is on, the Liturgy shows one informational element pointing to
the Typica and assembles normally.

### 1.3 The walk

```
for unit in getLiturgy(variant):
    emit(toElement(unit))                      # fixed skeleton, 1:1, id preserved
    if unit.id is a hook point:                # e.g. after tk-01, after a3-01
        emit(...resolveHook(hook, ctx))        # movable elements from V1 / Octoechos / Pent
```

Hooks are keyed on **unit ids**, not movement ids, because the insertion point inside
a movement matters (the troparia go after the rubric `tk-01` and before the Prayer of
the Thrice-Holy `tk-02`; the Beatitude troparia interleave the verses `a3-03..a3-12`).
Some hooks *replace* a unit rather than insert after it (`tr-01` on Trisagion-replacement
days, `cm-07` on zadostoinik days, `ef-09` communion hymn, `di-08` dismissal). A
replaced unit is emitted as a `substitution` element that keeps the original id, so
scroll anchoring and Basil diff tags still work.

---

## 2. Rendering

### 2.1 Unit → element

| unit | element |
|---|---|
| `speaker:"heading"`, ALL CAPS | section header, `id: "mv-<movement>"` on the first unit of each movement; added to `MAJOR_SECTION_IDS` so the existing gold-rule header and `ServiceOutline` pick it up |
| `speaker:"heading"`, mixed case ("Exclamation:") | minor heading |
| `speaker:"rubric"` | `type:"rubric"` (existing faded-gold rule style) |
| priest / deacon / choir / reader / people | `type:"fixed"` with new fields `speaker`, `mode`, `cue` |
| `{{…}}` spans | inline rubric-red (new helper, mirrors `withInlineRed`) |
| `___` blanks | filled by the assembler where it can (tone, evangelist, epistle title, entrance clause); otherwise rendered as a printed blank, never as an empty string |
| Basil override / insert | `variantTag: "override" \| "insert"` → tag ("Basil" / "Basil only") + left rule, port of the preview's `.diff-tag` / `.basil-diff` |
| `source_page`, `basil_page` | **never emitted.** Provenance stays in the data for the preview tool and future encoding; the assembler drops it (decision, §5) |

`ServiceBlock` needs one small addition for `speaker`/`mode`/`cue` on the fixed
path (speaker label, italic body when `mode:"quiet"`, red cue chip) and one for
`variantTag`. Every element carries `data-id` so the toggle can hold position.

### 2.2 Chrysostom / Basil toggle

Port of the preview's toolbar, placed in the Liturgy service header:

- Two-button segmented control. **Chrysostom is always the default** (decision 4):
  Basil is served on a handful of dates and the reader chooses it. On a
  `getLiturgyType()` Basil day the Basil button carries a small "appointed today"
  hint, nothing more. Presanctified days show the control disabled with a note;
  nothing is assembled for Presanctified in this pass.
- "Mark Basil differences" checkbox, visible only in the Basil view (28 overrides
  tagged "Basil", 4 inserts tagged red "Basil only"). No page numbers (decision 6);
  the preview tool keeps them for encoding review.
- **Toggling holds your place**: the `topUnit()` / `restoreTo()` / `INSERT_ANCHOR`
  logic ports as-is against `[data-id]`.
- Selection is per visit, not persisted: Chrysostom on every load.

`getLiturgyType()` gets a Fekula citation attached (it has none) and the "ten times a
year" prose at `:6341` is reconciled with its own nine-item list.

### 2.3 Noise gating — recommendation

Bill's concern is right: 152 rubric units and 37 quiet prayers are a third of the
skeleton, and a reader following the service needs the choir's cue, not the
priest's private prayer. But hiding them outright breaks the teaching-aid purpose.

**Decided (1):** two view layers, off by default, each a toggle in the service
header and persisted like `readerMode`:

- **Rubrics** (`speaker:"rubric"` units) — **except the teaching rubrics**, the
  units that dictate a movable part ("The choir now sings the appointed Troparia
  and Kontakia…", "On Feast Days, special Antiphons are sung…"). Those are the
  educational content of the tool and are always shown. The set is
  `TEACHING_RUBRICS` in `src/data/liturgy/registry.js`, one id per movable
  movement, validated to exist and to be rubrics.
- **Priest's quiet prayers** (`mode:"quiet"` units)

When a layer is off, each hidden run collapses to one small inline chip in its
place ("⋯ 2 rubrics, 1 quiet prayer") that expands on click. Nothing is silently
dropped; the outline and page markers are unaffected; the movable inserts (the gold
left-border elements) are never hidden. This is "gate them with a click" without a
heuristic: the gate is the unit's own `speaker`/`mode` field, which the encoding
already captures from the source's typesetting (spec v3).

Not recommended: hiding by rubric length or content, and a third "deacon" layer
(the deacon's petitions are the people's cue lines).

### 2.4 Outline — two levels, tones on every movable row

Forty-one movements is too long for the outline panel to be useful, and Bill
asked for a second pass after generation. Two levels, from the registry's `core`
flag, toggled in the outline header and persisted:

- **Overview (default):** the 22 `core` movements — the spine a choir director or
  reader navigates by (Blessed is the Kingdom, Great Litany, the three Antiphons,
  Little Entrance, Troparia & Kontakia, Trisagion, Prokeimenon, Epistle, Alleluia,
  Gospel, Cherubic Hymn, Great Entrance, Creed, Anaphora, Commemorations, Lord's
  Prayer, Elevation & Communion Hymn, Communion of the Faithful, Prayer Behind the
  Ambo, Dismissal).
- **Expanded:** all 41, including the small litanies, the five Anaphora sub-movements
  and After the Dismissal.

Both levels are produced by the same `deriveOutline()` walk the preview uses
(group consecutive units by `movement`, look up the registry), filtered by `core`.
Nothing is inferred from text.

**Movable rows show their tone**, the way Vespers and Typica rows already do: the
assembler puts `toneNote: "Tone N"` on the resolved element (troparion, kontakion,
prokeimenon, alleluia) and the outline row for that movement carries the tag
through the existing `toneTag` / `· Tone N` path in `ServiceOutline`. A movable
row whose hook came back `unresolved` reads red, exactly as an unresolved
sticheron row does today. Where a movement carries several tones (troparia of
feast + saint), the row lists them in order ("Tone 4 · Tone 8").

---

## 3. Hooks — what each movable movement gets from where

All against V1. `readingsForDay()` from `src/lib/readings.js` is consumed, not
re-derived. Prokeimenon/Alleluia routing is **extracted from `assembleTypica`** into
shared helpers (`src/lib/liturgy-propers.js`) so the Typica and the Liturgy cannot
drift (`sunday_vespers_spec.md:33` rule).

| Movement (hook point) | Resolution | Source fields | Fekula | Phase |
|---|---|---|---|---|
| `antiphon_1`, `antiphon_2` | Typical psalms as encoded. Great Feast → `unresolved` element "Festal antiphons not yet encoded" | no V1 field (known gap, `project_notes.md:1062`) | ch.1 Liturgy order, `a1-footnote` | 2 (placeholder) / deferred (data) |
| `antiphon_3` (interleave `a3-03..a3-12`) | Insert troparia at the printed "(on 12 / on 10 / on 8)" marks; Sunday: Octoechos V2 `liturgy.beatitudes` (needs new `srcSunBeatitudes(tone)` accessor) + Menaion `beatitudes_troparia` per rank; weekday: Menaion only | `beatitudes_troparia[]`, `beatitudes_ode`, Octoechos V2 | ch.1 §1A–§1F, ch.2 §2C–§2G (counts per rank) | 3 |
| `little_entrance` (`le-10`) | Fill the `___` clause from `le-11`'s own table: Sunday / weekday / Theotokos feast / feast of the Lord (afterfeast of the Lord: 2nd-antiphon refrain, no V1 field → unresolved) | `liturgicalData`, `rank` | ch.2 p.58, p.63 | 2 |
| `troparia_kontakia` (after `tk-01`) | Ordered troparia/kontakia block: resurrectional / feast / temple / saint(s) / Glory / Both now, keyed by (Sunday or weekday, rank, forefeast/afterfeast, temple dedication) | `troparion`, `troparion_2`, `kontakion_ode6`, `kontakion_ode3`, `srcResTroparion`, `srcSunKontakion`, `resolveTempleTroparion/Kontakion`, `pentEntry` | **ch.1 and ch.2 tables** (project docs `fekula_chapter_1/2.txt`; ch.4 for Pentecostarion weeks) — encoded as `LITTLE_ENTRANCE_ORDER` with section cites, like the Vespers troparia block | 3 |
| `trisagion` (replace `tr-01`) | `trisagion_replacement` when present ("As many as have been baptized", "Before Thy Cross"), else fixed | `trisagion_replacement` (Menaion, Pent) | date-driven; rule cite from Fekula feast chapters | 2 |
| `prokeimenon` (fill `pk-06`, after `pk-07`) | Same routing as Typica: Pent → Sunday tone → weekday day → + Menaion for polyeleos/vigil; Saturday inversion | `prokeimenon_tone/_text/_stichos`, `_2_*`, Octoechos daily propers | §1x, §2E, §2A | 2 |
| `epistle` (fill `ep-02/03`, after `ep-05`) | `readingsForDay()` groups → reading elements with `scriptureHref` | `feast_e`, `LECTIONARY` | ch.1/ch.2 readings rule (settled v0.45.0) | 2 |
| `alleluia` (fill `al-02`, after `al-03`) | Same as Typica (`Sunday first, Menaion second` for polyeleos/vigil) | `alleluia_*`, `TYPICA_WEEKDAY_ALLELUIA` | §4A3 | 2 |
| `gospel` (fill `go-02/04/11`, after `go-14`) | `readingsForDay()`; evangelist name from the reference | `feast_g`, `LECTIONARY` | as epistle | 2 |
| `litany_departed` | Weekday: shown; Sunday/feast: `omission` element citing the book's own rubric `ld-01` | `isSunday`, `rank` | book rubric (not Fekula) | 2 |
| `commemorations` (replace `cm-07`) | Zadostoinik when suppressed: refrain + irmos of Ode IX | `it_is_truly_meet_suppressed`, `instead_of_it_is_truly_meet_refrain/_irmos` (and legacy `zadostoinik_*`, see §5) | ch.2 p.63 ("instead of It is truly meet…"), afterfeast rule A-5 | 2 |
| `elevation_and_fraction` (replace `ef-09`) | Sunday "Praise the Lord"; weekday from Octoechos daily propers; + Menaion `communion_verse` "of the feast and saint" | `communion_verse`, `shared.daily_liturgy_propers` | ch.2 p.63 | 2 |
| `dismissal` (replace `di-08`) | `buildDismissal(..., serviceContext:"liturgy", liturgyAuthor)`; new context value alongside vespers/typica/post_communion | existing engine | dismissal spec §8 | 2 |
| `after_the_dismissal` | Basil overrides already swap the hymns | — | — | 1 |

Every movable element carries `fekula: { section, note }` and `source`, as elsewhere.
Anything the data cannot supply on a given date renders as the existing `⚠︎ Unresolved`
chip with the reason, never as blank.

---

## 4. Phases and versions

**Phase 0 — spec + data + validator (no UI, patch bump). DONE, v0.46.5.** This
spec; `src/data/liturgy/chrysostom.js` (verbatim copy) and `registry.js`;
`tools/validate_liturgy.mjs` (in `npm run gate`); `tools/liturgy_preview/`;
encoding spec v24 at the repo root; `project_notes.md` section.

**Phase 1 — the fixed Liturgy is servable (minor bump). DONE, v0.47.0.**
`assembleLiturgy()` with no hooks; unit rendering; Chrysostom/Basil toggle with
diff marks and held scroll (in a sticky strip inside the service body);
rubric / quiet-prayer layers; two-level outline; subtitle arm. `built` stays
false (decision 5); review with `?preview=liturgy`. `getLiturgyType` cited and
the missing Eve of the Nativity added.

**Phase 2 — movables that V1 already carries. DONE, v0.48.0.** Readings,
prokeimenon, alleluia, communion hymn, Trisagion replacement, zadostoinik, entrance
clause, departed-litany gate, dismissal, festal-antiphon placeholder. The sung
propers live in `src/lib/liturgy-propers.js` (presence-gated, Fekula "and of the
saint, if there be such"); the Typica keeps its older routing until Bill decides
on the port (notes, thirty-fifth session). `built: true` followed at **v0.48.1** on Bill's
confirmation (Sept 19 2026).

**Phase 3 — the Little Entrance and the Beatitudes. DONE, v0.49.0** (ch.1 and
ch.2; ch.4 Pentecostarion is Phase 3b). `src/lib/liturgy-entrance.js` holds the
tables and the Beatitudes counts; the app injects temple, feast-day entry,
day-of-week kontakia and the Octoechos V2 Beatitudes. Data gap: the Horologion's
troparia of the day of the week (a §2A weekday slot reads Unresolved until encoded).

**Deferred, on record:** festal antiphons (needs V1 field vocabulary + encoding from
the book's Appendices VI–VII; transcription, so subject to the v22 method);
Proskomedia; Presanctified; Lent/Triodion (Liturgy follows the existing `inScope`
season gate, so Lenten Sundays, the Basil dates that matter most, are out of scope
until the Triodion is); §2G2 kontakion at 3rd/9th Hours (pre-existing, unrelated).

---

## 5. Decisions (Bill, Sept 19 2026)

1. **Noise gating** — rubrics and quiet prayers off by default behind two header
   toggles; teaching rubrics (`TEACHING_RUBRICS`) always shown. §2.3.
2. **Data home** — the repo is the single point of truth; the local folder is the
   scan archive. Landed in Phase 0 (encoding spec v24).
3. **Zadostoinik fields** — assembler reads `instead_of_it_is_truly_meet_*` first,
   `zadostoinik_*` as fallback; normalising the three legacy dates in V1 is a
   Phase 2 data item. Logged in `project_notes.md`.
4. **Basil default** — Chrysostom always; Basil is a manual choice with an
   "appointed today" hint on Basil dates. §2.2.
5. **First release** — hold `built: true` until Phase 2 lands (readings and
   propers). Phase 1 is developed behind the `soon` pill.
6. **Page numbers** — never rendered in the Hours tool; kept in the data as
   provenance. §2.1.
7. **Outline** — overview / expanded, tones on movable rows. §2.4.

## 6. Not a code question, but blocking release

The text is St. Tikhon's Seminary Press 2008, © (spec v14/v22). **Permission for use
in development is confirmed (Bill, Sept 19 2026), and Bill confirmed the public
release with Phase 2 (v0.48.1).**
