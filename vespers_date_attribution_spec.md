# Vespers Date Attribution Spec — "Vespers renders tomorrow" (FW-26)

**Status:** Draft — for review.
**Authority (model):** GOArch Digital Chant Stand, which renders a date's Vespers as the *next*
liturgical day's Vespers. Its own header is the canonical statement of the model (quoted below).
**Authority (composition):** unchanged — Fekula & Williams (Russian usage). GOArch settles only the
*date-attribution* question; what fills each slot stays Fekula-governed.
**Prerequisite for:** FW-25a (Friday-eve doubling) and FW-25b (§2G), both of which were mis-targeting
days because of the bug this spec fixes.

---

## 1. The model, in one sentence

A Vespers service is the **first service of the liturgical day it opens**, served on the **evening
before**. Therefore: when the reader selects civil date **D** and opens Vespers, the tool must render
**V(D+1)** — the Vespers served on the evening of D, which opens D+1.

GOArch states the split explicitly. Selecting Friday June 19 yields a PDF headed:

> The Service of Vespers on **Friday, June 19** for **June 20, 2026**
> Octoechos — Mode 1 **on Friday**
> Menaion — **June 20** — Memory of the Holy Hieromartyr Methodius of Patara
> Horologion — Apolytikia for Weekdays, **Saturday**

One service drawing on **two days at once**:

| Component | Keyed to | Why |
|---|---|---|
| Octoechos stichera + dogmatikon | the **evening served** (D = Friday) | which evening it is sung |
| Week **tone** | the **day opened** (D+1) | the new tone begins at Vespers |
| Menaion commemoration | the **day opened** (D+1 = June 20) | whose feast this Vespers is |
| Horologion (apolytikia/theotokia set) | the **day opened** (D+1, "Saturday" set) | the coming day governs |
| Heading / label | both (D *for* D+1) | the reader must see the jump |

---

## 2. What is right today, and what is wrong

The current `assembleVespers` is a **hybrid**, which is exactly why the behavior felt "out of step":

**Already correct (leave alone):**
- **Octoechos day-key.** `getVespersDayKey(dow_of_D)` already returns the *served-evening-of-D* key
  (Friday→`'fri'`/Martyrs, Saturday→`'sat'`/Resurrection). That is V(D+1)'s Octoechos. ✓
- **Dogmatikon trigger.** The Friday dogmatikon firing for the Friday-served Vespers is correct; it
  is carried inside the day-key object, so it travels with the (already-correct) key. ✓

**Wrong today (must advance to D+1):**
- **Menaion commemoration.** Uses D's saint. Select 6/19 → shows *Jude (6/19)*; should show
  *Methodius (6/20)*.
- **Week tone.** Uses D's tone. Select Saturday → resurrectional `'sat'` stichera rendered in the
  **outgoing** week's tone, because the tone advances on Sunday in `getLiturgicalData`. Should use
  D+1's (incoming) tone. *("Vespers sets the new tone.")*
- **Festal context (season / forefeast / afterfeast / great-feast).** Uses D's. The Vespers belongs
  to D+1, so D+1's festal status governs (this is what gives correct **First Vespers** of a feast).
- **Heading / label.** Says "Vespers of D"; should say "served D, for D+1."

### 2.1 Per-day before/after (week of the worked example)

| Select D (dow) | Octoechos key (served eve) | Theme | Vespers is | Menaion today → correct | Tone today → correct |
|---|---|---|---|---|---|
| Thu 6/18 (4) | `wed` | Apostles* | V(Fri 6/19) | 6/18 → **Jude 6/19** | same wk → same wk |
| Fri 6/19 (5) | `thu`→ see note | Cross | V(Fri 6/19)… | — | — |
| Fri 6/19 (5) | `fri` | Martyrs | V(Sat 6/20) | Jude 6/19 → **Methodius 6/20** | same wk → same wk |
| Sat 6/20 (6) | `sat` | Resurrection | V(Sun 6/21) | 6/20 → **Sun 6/21 commem.** | **outgoing → incoming** |
| Sun 6/21 (0) | `sun_eve` | Compunction | V(Mon 6/22) | 6/21 → **6/22 saint** | new wk → new wk |

\* Theme is the *served-evening* key's content (= the opened day's theme). The `getVespersDayKey`
array is unchanged; the table reads it as the function already returns it for `dow_of_D`.

The only place the **tone** actually changes is the Saturday→Sunday boundary (row Sat 6/20): the
resurrectional Vespers must carry the incoming tone. Everywhere else, D and D+1 share a week tone, so
"advance the tone" is a no-op.

---

## 3. The change set

### 3.1 Service order — by aggregate, clock-anchored (RESOLVED, one sub-point flagged)
`SERVICE_REGISTRY` is reordered to the order of usage on the selected civil date D. In current
parish practice the cycle is served in three **aggregates** (OrthodoxWiki, *Daily Cycle*), which is
both well-sourced and good UX, and which makes the day-boundary legible: it falls *inside* the
Evening Aggregate, at Vespers.

**Dawn Aggregate — day D (before sunrise):**
1. Midnight Office (12:00 am)
2. Matins / Orthros (sunrise)
3. First Hour (6:00 am)

**Midday Aggregate — day D:**
4. Third Hour (9:00 am)
5. Sixth Hour (12:00 pm)
6. Divine Liturgy *(or Typika — see note)*

**Evening Aggregate — spans the day boundary (begins before sunset):**
7. Ninth Hour (3:00 pm) — **still day D**
— **day advances at sunset / Vespers** —
8. Vespers (sunset) — **day D+1**
9. Compline (after-dinner) — **day D+1**

— **divider** —

**Reference / standalone (no day-cycle position):**
Ordinary Beginning · Prayers Before Communion · Prayers After Communion · The Psalter

**Note — Typika placement (the one open sub-point).** Sources differ: OrthodoxWiki places Typika in
the **Midday Aggregate** (it substitutes for the Divine Liturgy, served after the Sixth Hour); the OCA
(*Hours, Compline and Nocturne*) reads the Typical Psalms **after the Ninth Hour**. Both are real
practice and it is partly day-dependent (the OCA placement reflects aliturgical/Lenten days). The spec
currently shows Typika in the Midday Aggregate with the Liturgy it replaces; **to be confirmed** with
the priest. This is a one-line ordering choice and does not affect any commemoration logic.

Note: the civil-date model splits a liturgical day across two date-pages (liturgical day D's
Vespers/Compline appear on date **D−1**'s page; its Midnight Office through Ninth Hour on date **D**'s
page). That is inherent to a date renderer and matches both GOArch and the physical stand — the reader
serves Vespers of D on the evening of D−1.

**References:** GOArch Digital Chant Stand (date-attribution model); OrthodoxWiki, *Daily Cycle*
(aggregates); OCA, *Hours, Compline and Nocturne* (Typica/Compline/Nocturne ordering); Fekula &
Williams (composition).

### 3.2 Which services advance, which stay
The day-advance applies to everything served **after sunset** on civil date D — i.e. **Vespers** (and
**Compline** when it is built). For Vespers, `assembleVespers` commemorates **D+1**: its Menaion
entry, festal context, week tone, and heading all come from D+1, while the **Octoechos day-key stays
computed from D** (the served evening).

Everything from the **Midnight Office (12 am) through Typica stays on D** — the selected date is its
liturgical day. In particular the **Ninth Hour is unchanged**: it renders the chosen day's saint (no
advance). The Midnight Office likewise stays on D (it is liturgical day D's own midnight service,
served in the small hours of civil D).

### 3.3 Dual-date heading
Render a GOArch-style header so the jump is explicit and never surprising:

> **Vespers** — served the evening of **[Fri, June 19]**, for **[Sat, June 20, 2026]**
> Octoechos: **Tone N** (Friday) · Menaion: **June 20 — [saint]**

This is the disclaimer you asked for: anyone landing on Vespers with D in the picker sees, in plain
language, that they have been delivered the following day's service.

---

## 4. Implementation approach

`getLiturgicalData(date)` and `getMenaionEntry(date)` are pure functions of a date and already
encapsulate the tone advance and month lazy-loading pattern. Two viable shapes:

- **Impl 1 — surgical (recommended).** Leave `getVespersDayKey` and the dogmatikon untouched (already
  correct for "served evening of D"). At the Vespers call site, compute `nextDay = D + 1` and pass
  `assembleVespers` the **next day's** `liturgicalData` (tone, season, festal, label) and
  `menaionEntry` (and `pentEntry`), while the Octoechos day-key continues to derive from the selected
  date D's day-of-week. Smallest diff; the day-key array never moves.
- **Impl 2 — fully reframe.** Pass D+1's `liturgicalData` into `assembleVespers` wholesale and
  redefine `getVespersDayKey` to "the key for the Vespers that *opens* this day" (rotated array
  `['sat','sun_eve','mon','tue','wed','thu','fri']`), called with D+1's dow. Conceptually cleaner
  (the assembler operates entirely on the day the Vespers belongs to) but redefines a shared helper
  and requires auditing every call site of `getVespersDayKey`.

**DECISION: Impl 1.** It keeps the proven Octoechos/dogmatikon path frozen and isolates the change to
"which day's commemoration/tone/festal does Vespers read."

---

## 5. Edge cases (these are why this is its own pass)

1. **Resurrectional Vespers relocates.** Select **Saturday** → V(Sunday): resurrectional `'sat'`
   Octoechos, **incoming** tone, Sunday's commemoration, 10 stichera (Octoechos makes up the count).
   Select **Sunday** → V(Monday): an *ordinary weekday* Vespers (`'sun_eve'`). Any `isSunday` branch
   inside `assembleVespers` must re-key to **"D+1 is Sunday"** (i.e. D is Saturday), not "D is
   Sunday." This is the single most likely place to hide a regression.
2. **Great-Feast First Vespers — a feature, not a hazard.** Selecting the eve of a Great Feast now
   yields that feast's First Vespers, because D+1's festal context governs. Desirable and free; just
   verify the festal branch fully reads D+1.
3. **Season boundary (Pentecostarion ↔ ordinary).** If D is Pentecostarion's last day and D+1 is
   ordinary (e.g. select All Saints Sunday → V(Monday) of ordinary time), Vespers must follow
   **D+1's** season: `isPentecostarion`, pentEntry-vs-menaionEntry selection, and the §4A/§2A routing
   all key off D+1, not D. Conversely entering Pentecostarion.
4. **Month / year boundary.** D = June 30 → D+1 = July; D = Dec 31 → D+1 = Jan. The Vespers path must
   ensure D+1's **menaion month is loaded** (lazy `_menaionLoaders`) before lookup, and that the
   Pascha/tone machinery is computed for D+1's date.
5. **Compline (built:false).** Served after Vespers, it also belongs to D+1. Out of scope to build,
   but note it so it's not later wired to D.
6. **Tone at the boundary.** Confirm `getLiturgicalData(D+1).tone` is the incoming tone for the
   Saturday→Sunday case and that the dogmatikon (carried in `'fri'`/`'sat'`) is rendered in that tone.

---

## 6. Regression matrix (implementation session)

- **Per-day Vespers audit, full week:** for each weekday selection, confirm the rendered Vespers
  commemoration = D+1's saint, Octoechos theme = the served-evening key, and heading shows both dates.
- **Saturday selection:** resurrectional Vespers, incoming tone, Sunday commemoration, 10 stichera.
- **Sunday selection:** ordinary `'sun_eve'` Vespers of Monday, Monday's saint.
- **Feast eve:** First Vespers of the feast renders.
- **Season boundary:** All Saints Sunday → ordinary Monday Vespers (and the inverse).
- **Month boundary:** June 30 selection renders July 1 Vespers with July menaion loaded.
- **Ninth Hour unchanged:** 9th Hour for D still commemorates D's saint (no advance).
- **Service order:** Vespers appears immediately after the 9th Hour; 9th→Vespers hand-off reads D → D+1.
- `node tools/test_pointing_paths.mjs` → 13/13; `npm run build` green.

---

## 7. Downstream: how this unblocks FW-25a and §2G

- **FW-25a (Friday-eve doubling).** "All six from the Menaion, doubling each" attaches to the Vespers
  served Friday evening = **V(Saturday)** = reached by selecting **Friday**, commemorating the
  **Saturday** saint. Jude's stichera (6/19) belong instead to **V(6/19)**, reached by selecting
  **Thursday 6/18**, as an ordinary Cross-Octoechos + Menaion Vespers — *not* the doubling case. The
  Aorist Press data attaches to the correctly-aligned days once FW-26 lands.
- **FW-25b (§2G).** Festal-Vespers composition now keys off D+1's festal status (incl. First Vespers),
  which is the correct anchor for the apportionment work — and a stable foundation, so §2G is no longer
  built over a shifting day model.

---

## 8. Decisions (resolved)

- **Q1 — service order: RESOLVED** (see §3.1), aggregate-grouped (Dawn/Midday/Evening, OrthodoxWiki);
  day-advance boundary at sunset/Vespers inside the Evening Aggregate; Midnight Office at the head of
  the Dawn Aggregate. *One open sub-point:* Typika placement (Midday-with-Liturgy per OrthodoxWiki vs
  after-the-Ninth-Hour per OCA) — to confirm with the priest; one-line ordering, no logic impact.
- **Q2 — implementation: RESOLVED → Impl 1** (surgical; Octoechos/dogmatikon frozen, Vespers reads
  D+1's commemoration/tone/festal).
- **Q3 — heading: RESOLVED.** Dual-date Vespers header confirmed (GOArch-style, §3.3).
- **Q4 — picker semantics: RESOLVED → (a).** The picker stays on D; Vespers renders D+1 internally.

---

## 9. Sequence

1. Implement §3 (service reorder; Vespers reads D+1; dual-date header) via Impl 1.
2. Walk the §6 regression matrix; gate 13/13; build green.
3. Commit (`docs:` spec → `vX.X.X:` code) and push per the standard workflow; version bump.
4. Re-derive FW-25a on the corrected model; then §2G.
