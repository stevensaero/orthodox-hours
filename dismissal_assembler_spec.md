# Dismissal Assembler — Unification Spec

**Status:** DRAFT — for review before code. Not committed.
**Author:** drafted with Claude, June 13, 2026 (tool v0.15.24)
**Scope:** Error 3 (malformed resurrectional dismissal) + consolidation of the two
divergent dismissal builders into one. Errors 1 (kathisma `dow`) and 2
(resurrectional troparion / dismissal Theotokion) are tracked separately; see
§9 Session Context.

---

## 1. Problem

### 1.1 The bug (error 3)
The current Vespers dismissal inserts the characteristic phrase
("Who rose from the dead") **into the intercession list**, right after
"His most pure Mother":

> May Christ our true God, through the intercessions of His most pure Mother;
> **Who rose from the dead;** of the holy … apostles; …

This reads as though the Mother (or the apostles) rose from the dead. The
resurrectional clause is not an intercession — it is the **Christological
opening** and must prefix "Christ our true God":

> **May He Who rose from the dead, Christ our true God,** through the
> intercessions of His all-immaculate … Mother; …

### 1.2 The duplication (latent drift)
Two builders carry the same buggy `open / middle / close` model:

- `_buildVespersDismissal` — inline in `assembleVespers` (≈ line 4598)
- `buildDismissal(liturgicalData, menaionEntry, pentEntry, readerMode, idPrefix)`
  — shared by Typica + Post-Communion (≈ line 5072)

The single `middle` slot conflates two genuinely independent things: the
**characteristic phrase** (an occasion property) and the **saint of the day**
(an intercession-list member). On a weekday the saint legitimately belongs in
the list, so the slot "looks right"; the same slot then wrongly hosts the
festal phrase. Fixing one builder leaves the other wrong. **They must become
one function.**

---

## 2. The axes

The dismissal is the product of independent variables. The current code has one
slot; the correct model has several:

| Axis | Values | Keyed on |
|---|---|---|
| **Form** | Great / Little | service rank + festal context (§4) |
| **Characteristic phrase** | resurrectional / Ascension / Pentecost / none | occasion (§5) |
| **Day-of-week intercession set** (Little only) | 6 sets (§6) | **opened (liturgical) day** dow |
| **Temple patron** | resolved name / placeholder | shared `templeDedication` state (§7) |
| **Saint(s) of the day** | from Menaion / overlay | `menaionEntry` (§7) |
| **Liturgy author** (Post-Communion only) | Chrysostom / Basil / — | existing Liturgy-type detection (§8) |
| **Reader mode** | priest form / Ch. 10 reader form | `readerMode` (§8) |

Key simplification: the day-of-week set keys on the **opened/liturgical day**,
which each service already holds in its own `liturgicalData`:

- **Vespers** receives the *next* (opened) day under FW-26 → `liturgicalData.dow`
  is the opened day directly.
- **Typica / Post-Communion** run on the civil date, which *is* the liturgical
  morning → `liturgicalData.dow`.

So no served-evening recomputation is needed for the dismissal. (The
served-evening `dow` used for Octoechos stichera / Friday dogmatikon is a
separate concern and is **not** touched here.)

---

## 3. Segment model

Build the dismissal as ordered segments. Great and Little share the prefix and
suffix; they differ only in the middle block.

```
[OPENING]   "May He Who {phrase}, Christ our true God,"   (phrase omitted → "May Christ our true God,")
[THEOTOKOS] "through the intercessions of His all-immaculate and all-blameless holy Mother,"
[MIDDLE]    Great → full fixed block (§4)   |   Little → day-set (§6)
[AUTHOR]    Post-Communion only: "of our father among the saints, {Author}, Archbishop of {See};"   (§8)
[TEMPLE]    "of {Patron} the patron and protector of this holy community;"   |   placeholder (§7)
[ANCESTORS] "of the holy and righteous Ancestors of God, Joachim and Anna;"
[SAINT]     "and of {saint(s) of the day} whose memory we celebrate,"        (omitted if none)
[CLOSING]   "and of all the Saints, have mercy upon us and save us, forasmuch as He is good and loveth mankind."
```

### 3.1 Wording source
Per decision: **build with the Antiochian recension now; flag for future OCA
verbiage migration.** Antiochian tokens to use throughout: "intercessions",
"all-immaculate and all-blameless holy Mother", "all-laudable Apostles",
"right-victorious Martyrs", "venerable and God-bearing Fathers", "loveth
mankind". OCA migration (→ "prayers", "all-pure Mother", "loves mankind", and
the shorter OCA list) is logged as a backlog item, not implemented here.
A `// TODO(OCA-migration)` marker tags every Antiochian-specific string.

---

## 4. Form: Great vs Little, and the Great middle block

**Great middle block** (fixed, full):
```
"by the might of the precious and life-giving Cross;
 by the protection of the honorable Bodiless Powers of heaven;
 at the supplication of the honorable, glorious Prophet, Forerunner and Baptist John;
 of the holy, glorious, and all-laudable Apostles;
 of the holy, glorious and right-victorious Martyrs;
 of our venerable and God-bearing Fathers;"
```

**Great when (Q1 — RESOLVED from Fekula `.txt`):** Fekula frames the trigger as
**vigil served vs Vespers served alone**, not a flat rank list. Vigil is served
on Sundays (as usual in the Russian Church) and at Vigil/Polyeleos rank →
**Great**. Ordinary Simple/Double/Six-stichera weekday Vespers is served alone →
**daily/Little**. Doxology rank sits with the higher group for *theotokia*
(§15) but does not by itself imply a vigil. Post-Communion (after Liturgy) →
**Great**.
**Caveat (carried from the kathisma logic):** the tool cannot always detect
whether a vigil was actually served, so for ambiguous ranks it follows
"vigil served = yes" on Sundays/Vigil/Polyeleos and surfaces the same
"⚠ if no vigil was served…" note already used for the kathisma. The day-rotating
*intercession wording* remains Antiochian per the build decision; Fekula governs
only the Great-vs-daily switch.

---

## 5. Characteristic phrase (the front prefix)

Computed from occasion, rendered as `"May He Who {phrase}, Christ our true God,"`:

| Occasion | Phrase |
|---|---|
| Sunday / Paschal resurrectional (`isSunday`) | `rose from the dead` |
| Ascension (`hours_format` ascension / apodosis_ascension) | `ascended in glory into heaven` |
| Pentecost / Holy Spirit (pentecost / apodosis_pentecost / holy_spirit_day) | `sent down the Holy Spirit upon His holy apostles` |
| Ordinary | *(none — opening is "May Christ our true God,")* |

`isSunday` uses the same predicate already correct post-FW-26:
`season === "sunday" || hours_format ∈ {pentecostarion_sunday, all_saints_sunday}`.
Other great feasts of the Lord get feast-specific phrases → backlog (not in scope).

---

## 6. Day-of-week intercession set (Little)

Keyed by **opened/liturgical day** dow. Derived from the Antiochian Little
Dismissal table (evening N opens the morning of N+1):

| Opened day (dow) | Antiochian label | Set text |
|---|---|---|
| Mon (1) | Sun eve / Mon morn | `by the protection of the honorable Bodiless Powers of heaven;` |
| Tue (2) | Mon eve / Tue morn | `at the supplication of the honorable, glorious Prophet, Forerunner and Baptist John;` |
| Wed (3) | Tue eve / Wed morn | `by the might of the precious and life-giving Cross;` |
| Thu (4) | Wed eve / Thu morn | `of the holy, glorious, and all-laudable Apostles; at the supplication of our father among the saints, Nicholas the Wonder-worker, Archbishop of Myra in Lycia;` |
| Fri (5) | Thu eve / Fri morn | `by the might of the precious and life-giving Cross;` |
| Sat (6) | Fri eve / Sat morn | `at the supplication of the holy, glorious and right-victorious Martyrs; of our venerable and God-bearing Fathers;` |
| Sun (0) | Sat eve / Sun morn | *(Great — resurrectional, §4)* |

→ **OPEN QUESTION Q2** — Cross appears on both Wed (3) and Fri (5); confirm
this matches OCA/your usage (it follows the Antiochian grouping).

---

## 7. Temple patron + saint of the day

### 7.1 Temple patron — surfaced selector + inline text
`templeDedication` is shared component state already driving Litiya and Typica
(`TempleSelector` rendered inside `ServiceBlock`, resolvers
`resolveTempleTroparion` / `resolveTempleKontakion`). The assemblers do **not**
currently receive it.

Plan:
- Thread `templeDedication` into the unified builder (one shared state — no new
  authority, no drift).
- **Selected** → resolve the patron's display name; render
  `of {Patron} the patron and protector of this holy community;`.
- **None / "none"** → render the placeholder *(Temple Commemoration)* —
  **italic, in parentheses** — as a reader cue, **and** surface a
  `TempleSelector` adjacent to the dismissal element so it can be chosen in
  place, mirroring Litiya/Typica. (Q3 — RESOLVED.)

### 7.2 Saint(s) of the day
Source `menaionEntry.saint`. For overlay / named-day Sundays (e.g. All Saints of
NA), use the commemoration name. Multi-saint days list both.
→ **OPEN QUESTION Q4** — confirm phrasing for the named-day Sunday case
(use the commemoration as the "saint whose memory we celebrate", or omit on a
pure-resurrectional Sunday?).

---

## 8. Post-Communion (after-Liturgy) + Reader mode

### 8.1 Liturgy author clause (Post-Communion only)
After Liturgy the dismissal also names the author of the Liturgy served. The
tool already detects Liturgy type for the Post-Communion T/K block.
- Chrysostom → `of our father among the saints, John Chrysostom, Archbishop of Constantinople;`
- Basil → `of our father among the saints, Basil the Great, Archbishop of Caesarea in Cappadocia;`
- Presanctified → `of our father among the saints, Gregory the Dialogist, Pope of Rome;` (Q5 — IN SCOPE.)

Gated strictly to `serviceContext === "post_communion"`.
→ **OPEN QUESTION Q5** — confirm wording + exact slot (drafted here in
[AUTHOR], between the middle block and the temple).

### 8.2 Reader mode
`readerMode` keeps the Fekula Chapter 10 substitution (priest's full dismissal
replaced by "Through the prayers of our holy fathers, of {saints of the day and
of the temple}, and of all the saints, Lord Jesus Christ, Son of God, have
mercy on us. Amen."). The unified builder produces the reader form from the same
temple + saint-of-day inputs, so the two paths can never diverge.

---

## 9. Unified signature + call sites

Replace both builders with one:

```
buildDismissal({
  liturgicalData, menaionEntry, pentEntry,
  readerMode, idPrefix,
  serviceContext,      // 'vespers' | 'typica' | 'post_communion'
  templeDedication,    // shared state
  liturgyAuthor,       // post_communion only
}) → element(s)
```

- `assembleVespers`: delete `_buildVespersDismissal`; call the shared builder
  with `serviceContext:'vespers'`, passing `templeDedication` (newly threaded
  into `assembleVespers`' signature and its call site).
- `assembleTypica`, `assemblePostCommunion`: switch to the new signature;
  thread `templeDedication`; Post-Communion also passes `liturgyAuthor`.
- Component: `templeDedication` already in scope (line 10528) and passed to
  `ServiceBlock`; thread it into the three assembler calls. Element assembly
  already re-runs on `templeDedication` change, so the dismissal updates
  reactively.

---

## 10. Verification examples

**A. Tonight — 6/13 selected → Vespers opens 6/14 (Sun, All Saints NA), temple = none:**
> May He Who rose from the dead, Christ our true God, through the intercessions
> of His all-immaculate and all-blameless holy Mother, by the might of the
> precious and life-giving Cross; by the protection of the honorable Bodiless
> Powers of heaven; at the supplication of the honorable, glorious Prophet,
> Forerunner and Baptist John; of the holy, glorious, and all-laudable
> Apostles; of the holy, glorious and right-victorious Martyrs; of our
> venerable and God-bearing Fathers; **[Temple Commemoration]**; of the holy
> and righteous Ancestors of God, Joachim and Anna; and of all the Saints of
> North America whose memory we celebrate, and of all the Saints, have mercy
> upon us and save us, forasmuch as He is good and loveth mankind.

**B. Ordinary Tuesday-evening daily Vespers (opens Wed, Cross), temple set:**
> May Christ our true God, through the intercessions of His all-immaculate and
> all-blameless holy Mother, by the might of the precious and life-giving Cross;
> of {Patron} the patron and protector of this holy community; of the holy and
> righteous Ancestors of God, Joachim and Anna; and of {saint} whose memory we
> celebrate, and of all the Saints, …

**C. Post-Communion, Liturgy of Chrysostom, ordinary weekday:**
> …of our venerable and God-bearing Fathers; **of our father among the saints,
> John Chrysostom, Archbishop of Constantinople;** of {Patron} …

---

## 11. Test plan

- `node tools/test_pointing_paths.mjs` → must stay **13/13**.
- `npm run build` → clean.
- New probe assertions (proposed `tools/probe_dismissal.mjs`): Great Sunday
  (resurrectional prefix present, phrase NOT in the list); each Little day-set
  (1–6) emits the correct middle; Post-Communion Chrysostom + Basil; reader
  mode; temple selected vs placeholder; Ascension + Pentecost prefixes.

---

## 12. OCA migration flag (backlog, not in scope)

Antiochian wording stored now; every Antiochian-specific string tagged
`// TODO(OCA-migration)`. Future pass swaps to OCA tokens and the (shorter) OCA
intercession list once an authoritative OCA full-text source is in hand.

---

## 13. Open questions

- **Q1 — RESOLVED** (§4): Fekula = vigil-served (Great) vs Vespers-alone (daily);
  Sundays/Vigil/Polyeleos → Great, with the vigil-detection caveat.
- **Q2 — still open**: Cross on both Wed and Fri (§6) — follows the Antiochian
  grouping; not contradicted by Fekula, but unconfirmed against your usage.
- **Q3 — RESOLVED** (§7.1): *(Temple Commemoration)*, italic in parentheses.
- **Q4 — still open**: saint-of-day phrasing on named-day / pure-resurrectional
  Sundays (§7.2).
- **Q5 — RESOLVED** (§8.1): Chrysostom / Basil / Gregory (Presanctified) all in.
- **Q6 — DATA LOCATED**: `common_theotokia/Theotokia.pdf` (§15). Structure
  confirmed: §I Resurrectional (Dogmaticon / Aposticha / Dismissal Theotokion per
  tone), §II Following Doxastica, §III Daily Dismissal. Encoding pending.

---

## 14. Error 2 — Dismissal Theotokion engine (Fekula Chapter 6)

**Critical distinction discovered while reading Fekula:** the "Now and ever"
**Theotokion at the troparia** (error 2) is a *different slot* from the priest's
отпуст intercession dismissal (error 3, §1–§13). They are governed by different
sources and must not be merged. The priest's отпуст is the Antiochian-modeled
intercession formula. The Theotokion at the troparia is governed by **Fekula
Chapter 6** and drawn from **The Common Theotokia** (`Theotokia.pdf`).

This section is the spec for error 2. It is its own selection engine; the
"one assembler to rule them all" (§9) is the отпуст only.

### 14.1 Common Theotokia data (`common_theotokia/Theotokia.pdf`)
Three sections, eight tones each:
- **§I Resurrectional** — per tone: *Dogmaticon*, *At the Aposticha*, *Dismissal Theotokion*.
- **§II Following Doxastica** — theotokia keyed to the tone of a *doxasticon*.
- **§III Daily Dismissal** — day-of-week × tone (incl. stavrotheotokia for Wed/Fri).

Encode into a new data module (e.g. `src/data/common-theotokia.js`); resolvers
mirror the existing hymn-entry normalizer.

### 14.2 Selection rule at the Vespers troparia (Fekula Ch 6)
| Service category | "Both now" theotokion at the troparia |
|---|---|
| **Sunday** (Vespers alone) | **§I Dismissal Theotokion**, in the **tone of the last troparion chanted**. If vigil served → troparia per Chapter 1 (resurrectional troparion + theotokion). |
| **Weekday Simple/Double/Six-stichera** | **§III** daily theotokion/stavrotheotokion for the day of week, in the tone of the **last Menaion troparion**. **Friday evening → §I** dismissal theotokion in the **tone of the week**. |
| **Weekday Doxology/Polyeleos/Vigil** | If Vespers alone → **§I** in the tone of the last troparion; **Friday evening → tone of the week**. If vigil served → troparia per Chapter 2. |

Rank → theotokia family (Fekula): Simple/Double/Six-stichera → **daily (§III)**;
Doxology/Polyeleos/Vigil → **resurrectional (§I)**. This is the same rank split
that informs Q1, but applied to the *theotokion*, not the отпуст.

### 14.3 Tonight (6/14, All Saints of NA, Sunday)
"Both now" at the troparia = the **§I Dismissal Theotokion** in the tone of the
last troparion chanted. Today the concluding troparia currently fill that slot
with the **kontakion** — that is the bug. The resurrectional *troparion* should
also lead (currently the commemoration leads); see §15 item 2.

### 14.4 Scope note
The full engine (all three sections, day-of-week, stavrotheotokia, the
Friday/Saturday tone-of-week exceptions, the doxasticon-tone logic) is a
**larger build** than error 3. Minimum to clear tonight's reported error 2:
encode **§I (8 dismissal theotokia)** and wire the Sunday case. §II/§III and the
weekday matrix can stage as a follow-on without blocking tonight.



## 15. Session context (the three reported errors)

1. **Kathisma "Blessed is the Man" missing** — `getKathismaForVespers` reads the
   *opened*-day `dow` (Sunday → `isSundayEve` → omitted). Fix = feed it the
   served-evening `dow` `assembleVespers` already computes. Independent of this
   spec; small.
2. **Resurrectional Theotokion missing** — Vespers concluding-troparia never
   wired `RESURRECTIONAL_TROPARIA` (primary) or a §I dismissal-Theotokion (Both
   now); the slot is filled by the kontakion. Now unblocked: data is in
   `Theotokia.pdf`; selection rule in §14.2. Troparion + §I Sunday theotokion can
   land tonight.
3. **Malformed dismissal** — this spec (§1–§13).


## 16. Weekday dismissal — reader form (shipped v0.15.29)

**Status:** §16.1 IMPLEMENTED. §16.0 / §16.2 superseded or folded into §17. §16.3 closed.

### 16.1 Reader-aware buildDismissalText — DONE (v0.15.29)
Fulfils the §8.2 intent (reader form from the unified builder). `buildDismissalText`
takes `readerMode`; when set it reuses the same `_dismissalSaintName` + `resolveTempleName`
resolution and early-returns the Fekula Ch. 10 short form:

> Through the prayers of our holy fathers, of (the saints of the day and of the
> temple), and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.

All three reader sites route through it — Vespers, the First Hour (with
`templeDedication` newly threaded into `assembleHour`), and the Typica/Post-Communion
wrapper. Two bugs eliminated: the ad-hoc Sunday "of our Lord, God, and Savior Jesus
Christ" (Q8 — Ch. 10 has no Christological phrase, only the saint+temple slot), and
the hardcoded `(and of the patron of this temple,)` that ignored the dedication
selector. Probe: `tools/probe_dismissal.mjs` (5/5).

### 16.0 Great/Little correction — SUPERSEDED by §17
Investigation: Fekula Ch. 2 General Outline keys the dismissal on whether the Great
Doxology is sung (simple → First Hour; otherwise → the rest of the dismissal), and the
decision was Little = §2A simple only. But adopting the Hieratikon structure (§17)
retires the rank-driven Great/Little axis entirely — the book keys the dismissal on
day-of-week + festal period, never on saint rank. So no Great/Little code change ships;
the work moves into §17.

### 16.2 Afterfeast phrase — FOLDED into §17
The festal characteristic phrases are part of the Hieratikon festal block (sourced) and
land with the §17 migration.

### 16.3 Saturday departed — CLOSED, no change
Neither the Hieratikon nor the churchmotherofgod OCA reference carries a departed clause
in the Saturday dismissal ("With the saints give rest" is the Octoechos/Liturgy
kontakion, not the отпуст). The engine's Saturday set (Martyrs + Fathers) already matches.

---

## 17. Hieratikon dismissal migration (next pass — source: Drive `Hieratikon/`)

**Decision:** adopt the Priest's Service Book (Hieratikon) dismissal model as authoritative,
replacing the current rank-driven Great/Little engine. The Hieratikon has no combined
"Great middle"; it gives:

1. **Daily forms, one per day-of-week** (Sat-eve/Sun-morn … Fri-eve/Sat-morn). Each:
   Mother → that day's theme → **Apostles (every day)** → day-appropriate saints →
   temple/day saint → Forebears (Joachim & Anna) → all saints → "have mercy … loveth man."
   Theme is positioned **before** the Apostles for the heavenly intercessions (Bodiless
   Powers, Forerunner, Cross) and **after** for the saintly ones (Nicholas Thu, Martyrs +
   Fathers Sat). Our current `DISMISSAL_LITTLE_DAYSETS` omit the Apostles on all but Thu —
   a real bug this fixes.
2. **Festal overrides** on feasts of the Lord and **through their afterfeast/apodosis**
   ("only on that festival and during the post-feast"). Phrases sourced verbatim
   (Nativity, Circumcision, Theophany, Meeting, Transfiguration, Palm Sunday, Pascha,
   Ascension, Pentecost, + Pentecost-Vespers long form). Elevation absent → likely the
   Cross intercession, not a "Who…" prefix (verify).
3. **Lesser dismissal** for Compline / Midnight Office / First Hour (short form; on Sunday
   prefixed "May He who is risen from the dead…").
4. **Celebrant clause position:** Hieratikon (and churchmotherogod) place it **right after
   the Apostles** — current engine appends it after the whole middle. Reposition.

**Retires:** the rank-driven `isGreat`/`isHighRank` Great/Little switch in `buildDismissalText`.
**Register note:** the Hieratikon daily/festal register ("most pure"/"all-immaculate",
"loveth man") differs from our current near-OCA Great form; settle one register during the
migration. Read the full daily forms (Mon/Tue/Wed-evening are abbreviated with "…" in the
source convention) from the Drive `Hieratikon/` folder before encoding.
