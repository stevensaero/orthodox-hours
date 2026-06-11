# Stichera Repetition Spec — "Lord I Have Cried"

**Status:** Phase 1 (§2C / §2D uniform doubling) — approved for implementation.
**Authority:** Fekula & Williams, *The Order of Divine Services*, 2nd ed. rev. (SJKP, 2009),
Chapters 1, 2, 4 (and Chapter 3 for the Triodion patterns cited as future work).
**Triggering bug:** 6/9/2026 (St. Cyril of Alexandria, six-stichera §2C weekday) rendered
slots 4–6 at "Lord I Have Cried" as `[Menaion sticheron N — not yet entered…]` even though
the Menaion supplies the required texts. The data was correct; the assembler had no
repeat-to-fill logic on the ordinary (non-Pentecostarion) path.

---

## 1. The problem in one sentence

At "Lord I Have Cried" the **number of stichera sung** (the *count*) and the **number of distinct
texts the source prints** are not the same thing. A six-stichera saint frequently prints **three**
texts, each **sung twice**. The assembler indexed six *distinct* array positions against a
three-entry array, so positions 4–6 came back `undefined` and fell through to a placeholder.

This is a **logic gap, not a data gap.** `src/data/menaion/june.js` already carries the correct
data:

```js
"06-09": {                               // St. Cyril of Alexandria
  rank: "six_stichera",
  fekula_section: "2C",
  stichera_lord_i_call_count: 6,         // 3 T4 (each ×2 per PDF)
  stichera_lord_i_call: [ /* 3 Tone-IV texts */ ],
  ...
}
"06-11": {                               // St. Bartholomew & St. Barnabas
  stichera_lord_i_call_count: 8,         // 4 stichera each ×2 per PDF
  stichera_lord_i_call: [ /* 4 texts */ ],
  ...
}
```

Count 6 against 3 texts (clean ×2), count 8 against 4 texts (clean ×2). Both are the same
operation: **repeat each text in order to reach the count.**

---

## 2. What Fekula actually says (research, June 11 2026)

The weekday "Lord I Have Cried" stichera count and composition are governed by **Chapter 2**
(Weekday Services). The Pentecostarion equivalents are in **Chapter 4**. Sunday (Chapter 1)
always sings **ten** and lets the Octoechos make up the count, so Sundays never need a
repeat-to-fill rule — the relevant cases are all weekday.

### 2.1 Weekday counts and composition (Chapter 2)

| Rank | § | Count | Composition |
|------|---|-------|-------------|
| Simple, Sun–Thu eve | 2A | 6 | 3 Octoechos + 3 Menaion |
| Simple, **Friday eve** | 2A | 6 | **all 6 Menaion, "doubling each"** |
| Double | 2B | 6 | 3 first saint + 3 second saint |
| Six-stichera | 2C | 6 | **6 from the Menaion** (source decides 6-distinct vs 3-doubled) |
| Doxology | 2D | 6 | 6 from the Menaion |
| Polyeleos | 2E | 6 *or* 8 | from the Menaion, *"as provided therein"* |
| Vigil | 2F | 8 *or* 10 | from the Menaion, *"as provided therein"* |
| Festal (forefeast/afterfeast) | 2G1 | 6 | 3 feast + 3 saint |
| Festal + Polyeleos/Vigil | 2G2 | 8 | 3 feast + 5 saint |
| Apodosis | 2G3 | 6 | 6 feast |
| Apodosis + Vigil | 2G4 | 10 | 6 feast + 4 saint |

Two findings carry the whole design:

1. **The doubling rule is real and explicit.** §2A Friday evening states the simple-rank service
   is sung as six stichera, all from the Menaion, **"doubling each sticheron."** That is the
   literal three-texts-each-sung-twice rule, in Fekula's own words. It is the citation for the
   uniform-doubling logic.

2. **§2C says only "six from the Menaion."** It does **not** prescribe doubling; it defers to what
   the Menaion prints. The St. Sergius 06-09.pdf prints three texts marked to be sung twice — the
   same mechanism. So for §2C the *count* is fixed at six, but whether that is six-distinct or
   three-doubled is **source-determined**, which is exactly why the count belongs in data
   (`stichera_lord_i_call_count`) while the doubling itself is logic.

3. **§2E / §2F make the count itself variable** ("six or eight" / "eight or ten … as provided").
   This is the explicit warrant for `stichera_lord_i_call_count` overriding any rank-derived
   default at the higher ranks — the Menaion, not the rank, sets the number.

### 2.2 Pentecostarion composition (Chapter 4)

The Pentecostarion weekday path is almost entirely **source-composition with fixed per-day
counts**, not repeat-to-fill:

- §4A1 simple/six/doxology: 3 Pentecostarion + 3 Menaion.
- §4A3 polyeleos/vigil: 3 Pentecostarion + 5 Menaion (Friday eve 4 + 4).
- §4B fixed feasts: e.g. Samaritan Woman 4 resurrection + 3 feast + 3 saint; Fathers of Nicaea
  3 + 3 + 4; All Saints 6 + 4. Each is an explicit split.

The **only** genuine "repeat to make N" in Chapter 4 is the **Paschal canon** ("repeated so as to
make twelve") — and that is *canon troparia*, not Lord-I-Have-Cried stichera. Consequently the
`repeat` / `repeatIndex` markers already present in `pentecostarion.js` are doing **per-sticheron
duplication inside an already-composed set** (e.g. one resurrection sticheron sung twice), which is
a *different operation* from the §2A/§2C **uniform whole-set doubling**.

### 2.3 Irregular fills (Chapter 3, Triodion — future work)

Chapter 3 (Lenten Triodion) shows that when a fill is **not** a clean multiple, Fekula names the
pattern per service: "repeating each" (3→6), "repeating the first" (3→4), "repeating the first
two" (5→7), "repeated to make N." These are *not* inferable from arithmetic; they are rubric, and
therefore belong in **data**, not logic.

---

## 3. The model

Three orthogonal decisions, in this order:

1. **Count** — from rank. The Menaion *should* be able to override it (warranted by §2E/§2F
   "as provided therein"), and **does** on the Pentecostarion path (which reads
   `pentEntry.stichera_lord_i_call_count`). On the **ordinary path the count is still
   rank-derived** (`isHighRank ? (vigil?10:8) : 6`); the `stichera_lord_i_call_count` field is
   *not yet authoritative there* and is in fact **semantically overloaded** — for §2A simple
   entries it records the *Menaion-only* count (3, which combines with 3 Octoechos), whereas for
   §2C+ it records the *total* count. Normalizing this is tracked as a gap (§6.5). For the two
   dates this pass fixes, the rank-derived count is already correct (six-stichera → 6,
   polyeleos → 8), so no change to `licCount` is required or made here.
2. **Composition** — which source(s) own which slots — from rank + festal context. Already
   branched in the assembler (§2A vs §2C/§2D vs Pentecostarion §4A/§4B).
3. **Fill** — how a source's printed texts expand to fill its slot allotment. **This spec adds the
   missing fill step.**

### 3.1 The fill rule

Given `items` (the printed texts for a single source) and `count` (slots that source must fill):

- **Exact** — `items.length === count`: use as printed (six-distinct case).
- **Uniform repeat** — `0 < items.length < count` **and** `count % items.length === 0`: repeat each
  item in order `count / items.length` times → `(A A B B C C)` for ×2, `(A A B B C C D D)` for the
  four-text ×2 case. **This is the §2A "doubling each" rule generalized.** Copies are tagged
  `repeatNote: "(Repeat)"` so the reader sees *why* a text appears twice.
- **Explicit markers** — if any item carries a `repeat` / `repeatIndex` marker (festal/Triodion
  data-as-rubric), honor the marker via the shared resolver (§3.3).
- **Mismatch** — `0 < items.length < count` **and** `count % items.length !== 0` and no markers:
  fill what exists, and flag the remainder with a **precise diagnostic** ("count N is not a
  multiple of M provided stichera — needs repeat markers or a corrected count"), *not* the generic
  "not yet entered" placeholder. This surfaces a real data error honestly instead of masquerading
  as missing data.
- **Empty** — `items.length === 0`: all slots unresolved with the ordinary "not yet entered"
  placeholder (genuinely un-encoded; no diagnostic).

### 3.2 Why doubling is inferred, not stored

For the **even single-source** case the doubling is unambiguous (§2A "doubling each") and purely a
function of `count ÷ length`. Storing a per-text `repeat:"each"` marker would duplicate information
already implied by the count, and would invite the data and the count to disagree. So:

> **Data carries the base texts and the count. Logic owns the expansion.**

This is the resolution of the standing "data is data / logic is logic" tension: the *even,
single-source* expansion is logic (one rule, one citation); the *irregular* expansion is rubric and
therefore data (per-service markers).

### 3.3 The source-owns-all-slots gate

Uniform doubling fires **only when a single source fills the entire count.** Whenever a feast is
present, Chapter 2 §2G apportions the slots across sources (3 + 3, 3 + 5, 6 + 4) and the saint is
given *fewer* slots, never doubled. A "single source owns all slots" gate therefore yields
structurally to every interleaved/apportioned day: those days never reach the uniform-repeat
branch because their composition step already hands each source a distinct slot count.

---

## 4. Implementation — shared logic between ordinary and Pentecostarion paths

To make the two paths legible to one another (so a reader of the Pentecostarion logic understands
the ordinary-day logic and vice-versa), the repeat vocabulary lives in **one** place and both paths
speak it:

- **`applyStichRepeat(stich, array, idx)`** — the per-item marker resolver. Given a sticheron with
  `repeat` (copy the immediately preceding item) or `repeatIndex: n` (copy item *n*) and no text of
  its own, return a resolved copy carrying the source text and `repeatNote: "(Repeat)"`. This is
  extracted verbatim from the existing inline Pentecostarion block so behavior is unchanged; the
  Pentecostarion interleave now *calls* it instead of inlining it.
- **`expandSticheraToCount(items, count, opts)`** — the whole-set expander (§3.1). Used by the
  ordinary §2C/§2D branch. Internally uses the same `repeatNote` convention and, for the
  explicit-marker case, the same `applyStichRepeat` atom.

Both helpers are module-scope, documented with the Fekula citations above, and produce sticheron
objects of the same shape (`{ text, tone, source, resolved, repeatNote?, unresolved?, diagnostic? }`)
so the render path treats ordinary and Pentecostarion output identically.

### 4.1 Wiring

- **§2C / §2D branch** — replace the bare `for i < licCount` index loop with
  `expandSticheraToCount(menaionLicStichera, licCount, { source: "Menaion" })`.
- **Pentecostarion interleave** — replace the inline `repeat` / `repeatIndex` block with a call to
  `applyStichRepeat`. No behavioral change; this is the legibility/DRY link.
- **Render** — the shared render branch must read `stich.source`, `stich.tone`, `stich.repeatNote`,
  and `stich.diagnostic` rather than hard-coding `"Octoechos"` / the week tone. (This also corrects
  a pre-existing latent mislabel where encoded §2A Menaion slots 4–6 were labeled "Octoechos.")

---

## 5. Scope of this pass

**In scope (Phase 1):** §2C and §2D uniform doubling via `expandSticheraToCount`; the shared
`applyStichRepeat` extraction; the precise mismatch diagnostic; render wiring for source/tone/
repeatNote. Fixes 06-09 (3→6) and 06-11 (4→8).

**Explicitly out of scope (this pass):** §2A Friday-evening all-Menaion-doubled composition (see
Gaps §6.1). Backlogged by decision so the §2C fix can be verified in isolation before the §2A
composition branch is touched.

---

## 6. Gaps, concerns, and future work

These are real and should surface in future sessions. Mirrored in `project_notes.md`.

### 6.1 §2A Friday evening is not implemented
Fekula §2A makes Friday-evening *simple* rank **all six from the Menaion, doubling each** — not the
3 Octoechos + 3 Menaion the assembler currently produces on every weekday. That is a **composition**
change (switch the source split on Friday), gated on day-of-week, distinct from the fill change in
this spec. Backlogged deliberately; the uniform-doubling engine built here is the mechanism it will
reuse once the Friday composition branch is added. Must be regression-checked against existing
Friday output.

### 6.2 No fixed-feast §2G Vespers interleaving on the non-Pentecostarion path
Chapter 2 §2G (forefeast/afterfeast/apodosis on ordinary, non-Paschal dates) apportions stichera
3 feast + 3 saint / 3 + 5 / 6 + 4. The assembler currently interleaves feast + saint only on the
**Pentecostarion** path; a fixed Menaion feast (e.g. an afterfeast in the fixed calendar) has no
equivalent composition branch. Out of scope here, but the doubling gate (§3.3) is written so it will
not mis-fire once §2G interleaving is added.

### 6.3 Repeat-marker vocabulary drift in `pentecostarion.js`
The existing data uses `repeat: true`, `repeat: 2`, and `repeat: "Glory…"` for different intents.
`applyStichRepeat` standardizes the *resolution* but the *data vocabulary* should be normalized into
one grammar (`repeat: true` = copy preceding; `repeatIndex: n` = copy item n) and the string-valued
`repeat` usages migrated. Tracked, not done here.

### 6.4 Count-mismatch diagnostic depends on honest data
The mismatch branch (§3.1) assumes that when `count % length !== 0` the data is *wrong* (bad count or
missing markers). That is true for ordinary §2A–§2D, but a genuine festal apportionment that reaches
this helper with mixed sources would also trip it. The gate (§3.3) prevents apportioned days from
reaching the helper; if §2G is later routed through it, the mismatch branch must learn the
apportionment before treating a non-multiple as an error.

### 6.5 `stichera_lord_i_call_count` is overloaded and non-authoritative on the ordinary path
On the ordinary (non-Pentecostarion) path `licCount` is derived from rank, not from the data
field. The field's meaning also differs by rank: for §2A simple entries it is the **Menaion-only**
count (e.g. 3, paired with 3 Octoechos); for §2C+ it is the **total** count. Making the field
authoritative everywhere (per §2E/§2F "as provided") therefore requires first normalizing its
semantics — likely a distinct field for the Menaion-portion count vs. the total count, or a
convention that the simple-rank field always means the Menaion portion. Until then, a §2E/§2F saint
whose Menaion prints a non-rank-default number (a polyeleos saint with six rather than eight) would
be mis-counted. Not in scope here; the rank default is correct for all currently-encoded §2C/§2D/§2E
dates.

---

## 7. Regression

`node tools/test_pointing_paths.mjs` must remain 13/13 (the pointing engine is untouched, but the
gate guards against accidental shared-scope breakage). `npm run build` must be green. Manual check:
06-09 renders six Tone-IV stichera (A A B B C C) all attributed to the Menaion, each repeat tagged;
06-11 renders eight (A A B B C C D D); a §2A day with no encoded Menaion stichera still shows the
ordinary "not yet entered" placeholder, not the diagnostic.
