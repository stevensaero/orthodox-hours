# Tone 5 Obikhod Common Chant — Findings & Build Record

*Tone Trainer sub-project · `src/components/tone-trainer.jsx`*
*Compiled: July 2026, single live working session — research (rotation, all
four phrases, full SATB) AND implementation (shipped v0.26.0) — see §6 for
the implementation record.*

This document is a **look-back record and forward guide**, in the same spirit
as the Tone 1–4 analysis documents. Read alongside those — the method here is
inherited from them (especially Tone 4's tutorial-plus-Bill's-sight-reading
process and Tone 3's §22/§27 architecture and build-order findings), but per
the prime directive, **no pitch, duration, or rotation logic is ported from
any prior tone without its own independent verification for Tone 5.**

Voice being mapped first: **ALTO** (melody), consistent with Tones 1–4.

---

## Status at time of writing

| Item | Status |
|---|---|
| Rotation | ✅ Confirmed (verbatim tutorial quote, Bill-verified) |
| A | ✅ Model confirmed (intonation, reciting, cadence shape + fill rule + worked examples incl. LIC); close-duration finality pattern holding |
| B | ✅ Model confirmed (reciting, anchor-on-reciting-pitch cadence, fill rule + worked examples incl. LIC) |
| C | ✅ Model confirmed (intonation, prep incl. slurred-monosyllable rule, anchor balancing, fill rule, 2-syll compression + worked examples incl. LIC); close H-vs-H· nuance open |
| Final | ✅ Two-anchor model confirmed (re on 2nd-to-last accent, elastic do run, ti-melisma on last accent, la/W close + tutorial and LIC examples); S4 elastic rung + tail word-boundary hypothesis open |
| Bass Harmony | ✅ Confirmed, all phrases + registers (§4.1–4.5); Final requires positional mapping |
| Soprano Harmony | ✅ Confirmed — strict diatonic third above alto at every position, all phrases |
| Tenor Harmony | ✅ Confirmed — constant sol (C4) everywhere except phrase-C/Final closes (mi=A3) and Final's si (C♯4); hold behavior score-confirmed (§4.4) |
| Frequency/notation anchor (§27.2 build order) | ✅ Reference pitch confirmed (re=G4, F major → do=F4 IS the tonic); shared tables expected to apply, verify at implementation |

**No audio or OCA docx corpus work has been done yet this session.** Everything
comes from the tutorial PDF (read visually, page by page — not the text layer)
and Bill's direct verification, worked example by worked example, following
the Tone 4 method (see that document's §1.3 for why Bill's sight-reading is
authoritative over any extraction of the PDF).

---

## 1. Source materials

### 1.1 Tutorial PDF

**File:** `Tutorial-Obikhod-Tone5-Explanation.pdf`
**Drive ID:** `1LfPm7EeHiFHKrrL6tVr8nHwCzgStilkF`
**What it contains (pages 37–43 of the source volume):** phrase-by-phrase
description of Tone 5 Common Chant (Phrases A, B, C plus a Final Phrase),
a "Melodic Phrases in Four-Part Harmony" reference page (p. 41), and a worked
sticheron example in four-part SATB harmony — Stichera at the Litya, Holy
Transfiguration of Our Lord (August 6), "Come, let us go up to the mountain
of the Lord…", arr. from L'vov/Bakhmetev (pp. 42–43).

A companion **Kievan Chant Tone 5** tutorial also exists in Drive
(`Tutorial-Kievan-Tone5-Explanation.pdf`). As with Tone 4: this session is
explicitly scoped to **Obikhod/Common Chant**; the Kievan tutorial is a
different chant tradition and is not used here.

### 1.2 Key

Key signature shows **one flat** (F-major family), same gamut as Tones 1–4.

**Reference pitch — CONFIRMED by Bill (start of SATB session):** the scores
are written as if in **F major**, and **Phrase A's intonation `re` lands on
G4.** Derived absolute mapping for every alto degree Tone 5 uses:

| Degree | Pitch |
|---|---|
| la | D4 |
| ti | E4 |
| do | **F4 — the notated TONIC** |
| re | G4 (confirmed anchor) |
| mi | A4 |

**`do` IS the notated tonic for Tone 5** — unlike Tone 3 (whose do sat on
the dominant), and like Tones 1/2/4. Per §27.2 this means the shared
`OFF` semitone table and the shared F-anchored notation tables
(`ALTO_ANCHOR_OCT` etc., all octave-4 for la…mi) are *expected* to be
correct for Tone 5 — still to be verified against the rendered output at
implementation time, not assumed silently (the §27.4 discipline), but no
dedicated `TONE5_SEMI`/`TONE5_ALTO_PITCH` tables should be needed.

### 1.3 Method

Same as Tone 4 (see that document's §1.3): tutorial prose plus Bill's direct
sight-reading of the score, worked example by example. Claude's own PDF
extraction is not treated as reliable evidence for pitch, duration, or
example-to-phrase attribution. This session's one improvement: the tutorial
pages were read **visually** (rendered page images), which is better than the
text layer for structure and lyric alignment, but score pitch/duration values
still require Bill's confirmation before anything is logged as verified.

The Tone 5 MP3 set and an OCA docx corpus for Tone 5 have not been gathered;
flagged in the open-items list.

---

## 2. Phrase rotation — CONFIRMED

Verbatim tutorial quote (Bill-verified):

> "The sticheron melody for Tone 5 consists of three phrases (A, B, C,) which
> are sung in rotation up to the last line of the sticheron, which has its own
> independent phrase. If a sticheron is divided into 8 textual phrases, the
> musical lines will consist of A, B, C, A, B, C, A and Final Phrase."

**Structural comparison:** pure three-phrase rotation with no intro-only
phrases — the simplest rotation of Tones 1–5 after Tone 3's two-phrase
alternation. (Tone 2 had one intro phrase; Tone 4 had three.)

Proposed `ROT_DEFS[5]`:

```javascript
5: (i, total) =>
  i === total - 1 ? "Final" : ["A", "B", "C"][i % 3],
```

Check against the tutorial's own 8-line example (i = 0..7): produces
`A B C A B C A Final` — exact match.

---

## 3. Phrase definitions

### 3.1 Phrase A — model confirmed

**Tutorial text (verbatim):**

> "Phrase A begins with an intonation of a half note on re, followed by the
> reciting tone, sung on the same pitch. Preparatory notes precede this half
> note, sung on the same pitch, if the phrase begins with unaccented
> syllables."
>
> "The cadence begins with a half note on mi, sung on the last internal
> accent, and then descends an interval of a third for the concluding
> syllables of the phrase. The cadence is used to sing two or more syllables."

**Structure (confirmed by Bill):**
- `recite: "re"`
- `inton: true` — **same-pitch, duration-only intonation**: `re(H)` on the
  phrase's first accented syllable. Preceding unaccented syllables are preps
  at `re(Q)`, same pitch. Structurally like Tone 4's Phrase F intonation
  (duration change on one pitch), NOT like Tone 4 C's two-pitch approach.
- `prep: null` (no approach note into the cadence)
- `cad: ["mi", "do"]` — anchor `mi(H)` on the last internal accent, then a
  **direct descending third to `do`** — no passing `re` anywhere in the
  tutorial (confirmed). Fills and close all sit on `do`.

**Cadence duration template (confirmed):** fills are `do(Q)` **preceding**
the close; close is `do(H)`:

| Count | Shape |
|---|---|
| 2 | mi(H) · do(H) |
| 3 | mi(H) · do(Q) · do(H) |
| 4 | mi(H) · do(Q) · do(Q) · do(H) |

**Cross-tone flag (real per-tone difference, not an error):** the fill pitch
repeats the **close** pitch (`do`), not the anchor pitch. Tone 4's Phrases
B/C/F all filled on the *anchor*. Per the prime directive this is simply
Tone 5's own rule; do not "harmonize" it with Tone 4's behavior.

**Worked examples (Bill-verified):**

| # | Text | Shape |
|---|---|---|
| 1 | "Come, let us go up to the moun-tain of the Lord," (Transfiguration Litya, tutorial's own example) | Come,(re/H — intonation accent) let-us-go-up-to-the(re/Q ×6 — reciting) \| moun(mi/H — ANCHOR) tain(do/Q) of(do/Q) the(do/Q) Lord,(do/H — close) |
| 2 | "[Lord], I call upon Thee, [hear] me!" (LIC, encoded `[Lord], I call upon Thee, [hear] me! \|`) | Lord,(re/**H·** — intonation accent, director-marked) I-call-up-on-Thee,(re/Q ×5 — reciting) \| hear(mi/H — ANCHOR, director-marked) me!(do/**W** — close, exact 2-syllable fit) |
| 3 | "Re[ceive] the [voice] of my prayer," (LIC, encoded `Re[ceive] the [voice] of my prayer, \|`) | Re(re/Q — prep, unaccented lead-in) ceive(re/**H·** — intonation accent, director-marked) the(re/Q — reciting) \| voice(mi/H — ANCHOR, director-marked) of(do/Q — fill) my(do/Q — fill) prayer,(do/H — close) |
| 4 | "[Le]t my [prayer] arise" (LIC, encoded `[Le]t my [prayer] arise \|`) | Let(re/**H·** — intonation accent, director-marked) my(re/Q — reciting) \| prayer(mi/**H·** — ANCHOR, director-marked) a(do/Q — fill) rise(do/H — close) |
| 5 | "be an [eve]ning [sac]rifice!" (LIC, encoded `be an [eve]ning [sac]rifice!//`) | be(re/Q) an(re/Q) — preps, unaccented lead-ins — eve(re/**H·** — intonation accent, director-marked) ning(re/Q — reciting) \| sac(mi/**H·** — ANCHOR, director-marked) ri(do/Q — fill) fice!(do/**W** — close) |

**Anchor-rule check across the examples — all explained by the ordinary
algorithm, no exceptions:** ex 1 "Lord," and ex 2 "me!"/"hear" as noted;
ex 3 anchors "voice" ("prayer," is a phrase-final stressed monosyllable →
standard backup); ex 4 anchors "prayer" ("arise" carries its stress on the
phrase's final syllable — not an *internal* accent, so the search backs up);
ex 5 anchors "sac" directly ("rifice" trails unaccented).

**Intonation-accent duration — `H·` in every LIC instance (4/4), vs the
tutorial's own `H`:** examples 2–5 all set the intonation accent as a dotted
half ("Lord," "ceive," "Let," "eve"), where the tutorial's schematic and its
Transfiguration example ("Come,") show a plain half. The earlier
comma/punctuation hypothesis (raised when "Lord," was the only data point) is
**dead** — "ceive," "Let," and "eve" carry no comma and still take `H·`.
**Bill's ruling:** the `H·` is NOT the norm — it reads as special emphasis
on some of these LIC verses. Question left open deliberately; the tutorial's
plain `H` remains the presumptive default for implementation, with the LIC
`H·` instances kept on record here.

**Anchor duration — a real pattern candidate (logged as hypothesis, needs
Bill's confirmation):** the anchor is `mi(H·)` in exactly the two
**single-fill** cases (ex 4 "prayer" + 1 fill; ex 5 "sac" + 1 fill) and plain
`mi(H)` at zero fills (ex 2), two fills (ex 3), and three fills (ex 1).
Stated as a rule candidate: **one fill → anchor stretches to H·; otherwise
anchor H.** Note the arithmetic consequence: anchor+fills then sum to a
whole-note span in the 1-fill (H·+Q) and 2-fill (H+Q+Q) cases alike — this
may be the "rhythmic balancing" mechanism prior tones logged as Gap A,
finally showing its shape. The 3-fill case (ex 1, H+Q+Q+Q = 5 quarters)
breaks the strict whole-bar reading, so the fill-count statement, not the
bar-sum statement, is the one the data actually supports.

**Bill's ruling:** rhythmic balancing is the best explanation. Adopted as
the working rule for Phrase A: **anchor `mi(H·)` when exactly one fill
follows, `mi(H)` otherwise.**

**Close duration — finality pattern holding (4 H, 2 W):** mid-unit closes
are `H` ("Lord," ex 1; "prayer," ex 3; "rise" ex 4); true unit closes are
`W` ("me!" ex 2 — end of the invocation unit; "fice!" ex 5 — carries the
`//` penultimate marker). Consistent with the cross-tone finality-tracks-W
pattern; Tone 5 shows no H· closes so far.

**Director marks:** every Phrase A LIC example carries exactly two brackets —
intonation accent + cadence anchor — the same two-mark pattern Tone 4's
Phrase C showed for its own intonation+anchor structure. (Ex 5's brackets
render mid-word — `[eve]ning`, `[sac]rifice` — marking the accented
syllable.)

**Tutorial snippets consistent with the model (visual read, pitch values not
yet individually Bill-confirmed):** "Heav-en" (2-syllable cadence),
"The most ho-ly" (intonation/reciting), "con-tain God" (2-syllable cadence),
"the name-sake of grace" (fill case).

**Open items:**
- **Close duration H vs H· vs W** — deliberately left open; to be watched
  across the LIC examples and more worked examples rather than forced from
  one data point (same open finality question every tone has carried).
- The "two or more syllables" floor means no 1-syllable cadence — what
  happens when the last accent IS the final syllable has not been exercised.

---

### 3.2 Phrase B — model confirmed

**Tutorial text (verbatim):**

> "Phrase B consists of a reciting tone (on mi,) and a cadence beginning with
> a half note on the last internal accent, sung on the same pitch (mi). The
> last syllable is a half note sung on re. Unaccented syllables between the
> accented syllable and the last syllable are sung on mi."

**Structure (confirmed by Bill):**
- `recite: "mi"` (Q per syllable)
- `inton: false` — begins directly on the reciting tone.
- `prep: null`
- `cad: ["mi", "re"]` — anchor `mi(H)` on the last internal accent, **same
  pitch as the reciting tone** (the anchor-on-reciting-pitch pattern also
  seen in Tone 1 B and Tone 4 B — distinguished from reciting by the Q→H
  duration shift alone until the final descent). Fills `mi(Q)` precede the
  close; close `re(H)`.

**Cadence duration template (confirmed):**

| Count | Shape |
|---|---|
| 2 | mi(H) · re(H) |
| 3 | mi(H) · mi(Q) · re(H) |
| 4 | mi(H) · mi(Q) · mi(Q) · re(H) |

**Fill-rule contrast with Phrase A (both now confirmed):** B fills on the
**anchor** pitch (`mi`); A fills on the **close** pitch (`do`). Within one
tone, the two phrases use different fill rules — a concrete reminder that
fill behavior is per-phrase, not per-tone, and is never safe to port.

**Worked examples (Bill-verified):**

| # | Text | Shape |
|---|---|---|
| 1 | "to the house of our God," (Transfiguration Litya, tutorial's own example) | to(mi/Q) the(mi/Q) — reciting \| house(mi/H — ANCHOR) of(mi/Q — fill) our(mi/Q — fill) God,(re/H — close) |
| 2 | "[Hear] me, O Lord!" (LIC, encoded `[Hear] me, O Lord! \|`) | — (no reciting body; opens directly on the anchor) \| Hear(mi/H — ANCHOR, director-marked) me,(mi/Q — fill) O(mi/Q — fill) Lord!(re/**W** — close) |
| 3 | "when I call upon Thee!" (LIC, encoded `when I [cal]l upon Thee!//`) | when(mi/Q) I(mi/Q) — reciting \| call(mi/H — ANCHOR, director-marked) up(mi/Q — fill) on(mi/Q — fill) Thee!(re/**W** — close) |
| 4 | "in Thy sight as [in]cense," (LIC, encoded `in Thy sight as [in]cense, \|`) | in(mi/Q) Thy(mi/Q) sight(mi/Q) as(mi/Q) — reciting \| in(mi/H — ANCHOR, director-marked) cense,(re/**H·** — close, exact 2-syllable fit, NO fills) |

Example 2 matched the model's prediction exactly, including the direct
anchor opening with no reciting body (same shape as Tone 4's B LIC closer)
and the monosyllabic backup ("Lord!" → "Hear"). Example 3's anchor is the
same standard backup ("Thee!" is a phrase-final stressed monosyllable →
"call"); example 4's anchor is direct ("in" of "incense," last internal
accent, "cense," trails).

**Director marks:** one mark per line — B has no intonation, so only the
cadence anchor is marked, vs Phrase A's two marks (intonation accent +
anchor). Mark count tracks the phrase's structural accent count, consistent
with prior tones.

**Close duration:** examples 1 (mid-sticheron) closes `H`; examples 2 and 3
(true unit closes — ex 3 carries the `//`) close `W` — finality-tracks-W
holding. **Example 4 is Tone 5's first `H·` close**, on a mid-unit line
(`|`) — and it is also the only example with a bare exact-fit cadence
(anchor + close, zero fills). Hypothesis, one data point, NOT confirmed:
the same rhythmic-balancing mechanism Bill confirmed for Phrase A's anchor
(stretch in the single-fill case) may operate on B's **close** in the
zero-fill case — the minimal cadence gets its weight back by dotting the
close (`H+H·` = 5Q) rather than by dotting the anchor. Watch for another
mid-unit exact-fit B cadence: `H·` again supports the balancing rule;
plain `H` kills it.

### 3.3 Phrase C — core model confirmed; slur rule and 2-syllable compression open

**Tutorial text (verbatim):**

> "The phrase begins with an intonation that can be used with one, two or
> more syllables. The first accented syllable of the phrase is a half note
> on re. Unaccented syllables preceding this accented syllable are sung as
> quarter notes on the same pitch (re)."
>
> "The cadence begins on the last internal accent and is used to sing two or
> more syllables. A preparatory note on ti precedes the cadence. If the last
> note before the cadence is an accented one-syllable word, then it is
> slurred."

**Structure (core confirmed by Bill):**
- `inton: true` — same-pitch, duration-only: `re(H)` on the first accented
  syllable, preceding unaccented syllables `re(Q)` (identical mechanism to
  Phrase A's intonation).
- `recite: "re"` (Q per syllable)
- `prep: ["ti"]` — a single `ti(Q)`, stepping DOWN from the reciting `re`,
  immediately before the cadence.
- `cad: ["do", "ti", "la"]` — anchor `do` on the last internal accent, then
  `ti(Q)`, close `la(H)`. **Elastic fill: extra syllables are absorbed by
  `do(Q)` following the initial anchor** — anchor-pitch fill (like B),
  placed between anchor and the fixed `ti·la` tail.
- **Anchor duration (Bill's correction to his own first statement): the
  cadence starts on `do(H·)` — dotted — UNLESS `do(Q)` fills are doing work
  absorbing syllables, in which case the anchor is plain `do(H)`.** This is
  the same rhythmic-balancing mechanism already ruled for Phrase A, showing
  up at C's anchor: no fills → the anchor carries the extra length; fills
  present → they carry it.

**Cadence duration template (confirmed):**

| Count | Shape |
|---|---|
| 2 (compressed) | do(H·)+ti(Q) — 2-note slur on the anchor syllable · la(H) |
| 3 (exact fit) | do(H·) · ti(Q) · la(H) |
| 4 (1 fill) | do(H) · do(Q) · ti(Q) · la(H) |
| 5 (2 fills) | do(H) · do(Q) · do(Q) · ti(Q) · la(H) |

Balancing check: anchor+fills+ti sums to a whole-note span (4Q) in the
0-fill (H·+Q) and 1-fill (H+Q+Q) rows alike — consistent with the Phrase A
pattern and Bill's rhythmic-balancing ruling.

Note: `ti(Q)` is the first quarter-note structural (non-fill) cadence
position in this tone — A and B's non-fill cadence positions are all H/H·/W.

**Worked snippets (Bill-verified):**

| # | Text | Shape |
|---|---|---|
| 1 | "hab-i-ta-tions" (tutorial snippet, reciting/prep→cadence transition) | hab(re/Q — reciting) i(ti/Q — PREP) \| ta(do/H· + ti/Q — 2-note slur: dotted anchor absorbing the ti) tions(la/H — close) |
| 2 | "born___ God the Word" (tutorial snippet — the accented-monosyllable slur case) | born(re/Q + ti/Q — 2-note SLUR: reciting pitch + prep pitch merged on the accented one-syllable word) \| God(do/**H·** — dotted anchor, exact fit, no fills) the(ti/Q) Word(la/H — close) |
| 3 | "Ark of God goes to her rest" (tutorial snippet, reciting→cadence transition) | Ark(re/Q — reciting) of(ti/Q — PREP, plain: "of" is unaccented) \| God(do/**H** — anchor, NOT dotted: fills present) goes(do/Q — fill) to(do/Q — fill) her(ti/Q — cadence ti) rest(la/H — close) |
| 4 | "and be-hold the glory of His Transfig-u-ra-tion," (tutorial's own full Phrase C example, Transfiguration Litya; would encode as `and be[hold] the glory of His Transfig-u-[ra]tion, \|`) | and(re/Q) be(re/Q) — intonation lead-ins — hold(re/H — intonation accent) \| the-glo-ry-of-His-Trans-fig(re/Q ×7 — reciting) u(ti/Q — PREP, unaccented, plain) \| ra(do/H· + ti/Q — 2-note slur, dotted anchor, no fills) tion,(la/**H·** — close) |
| 5 | "[Lord], I call upon Thee, [hear] me!" (LIC, encoded `[Lord], I call upon Thee, [hear] me! \|` — same text as Phrase A ex 2, here sung to C) | Lord,(re/**H·** — intonation accent, director-marked, LIC emphasis again) I-call-up-on(re/Q ×4 — reciting) Thee,(ti/Q — PREP, weak pronoun, plain) \| hear(do/H· + ti/Q — 2-note slur, dotted anchor, director-marked) me!(la/**H·** — close) |
| 6 | "and [let] the lifting [up] of my hands" (LIC, encoded `and [let] the lifting [up] of my hands \|`) | and(re/Q — intonation lead-in) let(re/**H·** — intonation accent, director-marked, LIC emphasis) the(re/Q) lift(re/Q) — reciting — ing(ti/Q — PREP, plain) \| up(do/H — ANCHOR, director-marked, not dotted: fill present) of(do/Q — fill) my(ti/Q — cadence ti) hands(la/H — close) |

Example 6 is a clean uncompressed 1-fill instance of the template
(`do(H)·do(Q)·ti(Q)·la(H)`), with a standard backup anchor ("hands" →
"up"; "of"/"my" weak). Example 5 repeats the compressed shape and confirms
the plain (unslurred) prep on a weak pre-cadence monosyllable ("Thee," —
the slur rule requires an ACCENTED monosyllable, and pronouns read weak).

**Close duration in C — a rule candidate has emerged:** closes so far:

| Example | Cadence shape | Close |
|---|---|---|
| 2 "Word" | 3-syll exact fit | H |
| 3 "rest" | 2 fills | H |
| 6 "hands" | 1 fill | H |
| 4 "tion," | compressed 2-syll | **H·** |
| 5 "me!" | compressed 2-syll | **H·** |
| 1 "tions" | compressed 2-syll | H (?) |

Every uncompressed cadence closes plain `H` (3/3); compressed 2-syllable
cadences close `H·` (2/3) — the lone counterexample is example 1
("hab-i-ta-tions"). **Bill re-checked: "tions" reads `la/H` as printed in
the tutorial's own example — it is tutorial material, not a dug-up full
score.** So the split now aligns with SOURCE, not (only) shape: both `H·`
compressed closes are LIC score instances; the `H` compressed close is the
tutorial's snippet. This mirrors the intonation-accent situation exactly
(tutorial prints plain values; the LIC score elongates). Left open — the
compressed→H· candidate survives for score practice, with the tutorial
printing the plainer value. All six examples are mid-unit lines; no C close
at a `//` seen yet (W expected by finality).

**Intonation accent in LIC:** examples 5 and 6 continue the pattern — every
LIC intonation accent seen this session (A and C combined, now 6/6) is
`H·` where the tutorial's own examples show `H`. Consistent with Bill's
special-emphasis ruling; still open as a question of encoder default.

**The accented-monosyllable slur rule — RESOLVED (example 2):** when the
last note before the cadence falls on an accented one-syllable word, that
word takes a 2-note slur `re(Q)+ti(Q)` — the reciting pitch gliding down to
the prep pitch on the one syllable — instead of the bare `ti(Q)` prep an
unaccented syllable would get (example 3's "of").

**Examples 2 vs 3 together are a clean minimal pair for the anchor-duration
rule:** "God" is `H·` in example 2 (no fills) and plain `H` in example 3
(two fills) — the same word, dotted or not exactly as the balancing rule
predicts.

**Prep ti vs cadence ti are distinct positions, both live in one line:**
example 3 carries the prep `ti` on "of" AND the cadence's structural `ti`
on "her" — confirming the prep is not the cadence's own `ti` relocated.

**Anchor-selection observation — RESOLVED (Bill):** in example 3 the anchor
lands on "God," not "goes," because **"goes" is read as weak/unaccented
here** — not a semantic-weight exception. The ordinary last-internal-accent
search holds once the accent judgment is right. Lesson for the encoder: the
weak-word treatment extends beyond the classic STOP list (pronouns,
articles, prepositions) to some verbs of motion/copular character; director
marks remain the ground truth for which words count as accented. No
semantic-weight case has appeared in Tone 5 yet.

**Fill-rule tally across the tone so far:** A fills on the close pitch;
B and C fill on the anchor pitch. Per-phrase, confirmed individually.

**Open items:**
1. ~~2-syllable cadence compression~~ — RESOLVED: `do(H·)+ti(Q)` slurred on
   the anchor syllable, `la(H)` close ("hab-i-ta-tions", confirmed).
2. **The accented-monosyllable slur rule — STILL OPEN**: mechanics of "if
   the last note before the cadence is an accented one-syllable word, then
   it is slurred" (the tutorial's "born__ God the Word" snippet): what two
   notes slur on that word — `re+ti` (reciting + prep on one syllable)?
3. Whether the prep `ti` is ever absent (e.g. anchor very early in the
   phrase); whether the close `la` stretches at unit ends (W expected by the
   finality pattern; no C example at a `//` or unit close seen yet).

### 3.4 Final Phrase — structure confirmed; snippet distribution reads awaiting confirmation

**Tutorial text (verbatim):**

> "The Final Phrase for the sticheron begins directly with the reciting tone
> (mi) and concludes with a final cadence, beginning on the second to last
> internal accent of the text."
>
> "The cadence consists of six pitches, forming two descending sequences,
> re, do, ti, and do, ti, la."

**Structure (confirmed by Bill):**
- `recite: "mi"` (Q per syllable); begins directly, no intonation.
- `cad` (six positions, with confirmed durations):
  **`re(H) · do(H) · ti(H) · do(Q) · ti(Q) · la(W)`**
- **Anchor rule: the cadence's `re` lands on the SECOND-TO-LAST internal
  accent of the text** — a genuinely new anchor rule (Tones 1–4 Finals
  anchor on the last internal accent or use two director marks).
- **Elastic position: the `do` following the `re` lead-in.** With one
  syllable it is `do(H)`; with multiple syllables it becomes `do(Q)`
  repeated for as long as required to absorb the extra count.

Watch item (unchanged): a six-pitch figure with repeated pitches (`do` and
`ti` twice each) is exactly the shape that forced **positional** (not
pitch-keyed) handling in Tone 4's Phrase E and Tone 3's Final — expect the
same here for alto distribution and bass/tenor mapping.

**The three tutorial cadence snippets (Bill's corrected reads — these
superseded Claude's first positional attempt, which misplaced the `ti(H)`
one syllable early in every case; kept for the record in the method note
below):**

| # | Text | Shape |
|---|---|---|
| S1 | "all-ho-ly Dor-mi-tion." | all(mi/Q — reciting) \| ho(re/H — FIRST ANCHOR, 2nd-to-last internal accent) ly(do/Q — elastic) Dor(do/Q — elastic) mi(ti/H + do/Q + ti/Q — 3-note SLUR on the LAST internal accent) tion.(la/W — close) |
| S2 | "the world His great mer-cy." | the(mi/Q — reciting) \| world(re/H — FIRST ANCHOR) His(do/Q — elastic) great(do/Q — elastic) mer(ti/H + do/Q + ti/Q — 3-note SLUR on the LAST internal accent) cy.(la/W — close) |
| S3 | "A-dam ris-es as the Dev-il falls." | A(mi/Q) dam(mi/Q) — reciting \| ris(re/H — FIRST ANCHOR) es(do/Q) as(do/Q) the(do/Q) — elastic ×3 — Dev(ti/H + do/Q — 2-note SLUR on the LAST internal accent) il(ti/Q) falls.(la/W — close) |

**Worked example 4 — the tutorial's own full Final Phrase example
(Transfiguration Litya), Bill's score read:**

| # | Text | Shape |
|---|---|---|
| S4 | "and forever sing the praises of the consub-stan-tial Trin-i-ty!" | and-for-ev-er-sing-the-prais-es-of-the-con-sub(mi/Q ×12 — reciting) \| stan(re/H + do/Q — 2-note SLUR on the FIRST anchor) tial(do/Q — elastic) Trin(ti/H + do/Q — 2-note SLUR on the last internal accent) i(ti/Q) ty!(la/W — close) |

**The corrected model — a genuine two-anchor architecture:**

1. **First anchor:** `re(H)` on the **second-to-last** internal accent —
   and it can carry a slur (see elastic rule below).
2. **Elastic `do(Q)` run between the anchors.** Observed behavior across
   the four examples: 2 in-between syllables → `do(Q)·do(Q)` (S1, S2);
   3 → `do(Q)×3` (S3); **1 in-between syllable → one `do(Q)` folds onto the
   first anchor as a 2-note slur `re(H)+do(Q)`, and the in-between syllable
   takes the second `do(Q)`** (S4 "stan-tial"). The elastic run thus appears
   to carry a MINIMUM of two `do` notes, compressing leftward onto the
   first anchor when syllables run short — mirroring how the tail
   compresses onto the second anchor. NOTE: the plain `do(H)`
   single-syllable case stated in the initial rule summary has not appeared
   in any worked example; whether it exists (vs. the minimum-two-do reading)
   is an open question logged below.
3. **Second anchor:** `ti(H)` lands ON the **last** internal accent,
   opening a slur/melisma that absorbs as much of the remaining
   `do(Q) · ti(Q)` tail as the syllable count requires:
   - only the close syllable remains after the accent → 3-note slur
     `ti(H)+do(Q)+ti(Q)` on the accent (S1 "mi", S2 "mer");
   - one trailing unaccented syllable remains → 2-note slur `ti(H)+do(Q)`
     on the accent, `ti(Q)` on the trailing syllable (S3 "Dev-il",
     S4 "Trin-i");
   - two trailing syllables (uncompressed) → `ti(H)` alone on the accent,
     `do(Q)`, `ti(Q)` on the trailing syllables — the tutorial schematic's
     own 1:1 layout; not yet seen in a worked example.
4. **Close:** `la(W)` on the final syllable.

S2 also implicitly confirms "great" reading weak (it sits in the elastic
run) — consistent with the "goes" ruling in Phrase C. S4's encoding:
`and forever sing the praises of the consub[stan]tial [Trin]ity!//` — two
director marks, one per anchor, same two-mark pattern as Phrase A/C lines.

**LIC worked examples (Bill-verified):**

| # | Text | Shape |
|---|---|---|
| L1 | "[Hear] [me], O Lord!" (LIC; second LIC instance of the identical text confirms the identical shape) | Hear(mi/Q + re/H + do/**H** — 3-note SLUR: reciting pitch + first anchor + elastic do, no reciting body exists so the reciting pitch folds into the opening slur) me,(ti/H — second anchor, PLAIN, no slur) O(do/Q + ti/Q — 2-note SLUR on the trailing word) Lord!(la/W — close) |

**L1 revises the elastic picture — the minimum-two-`do` reading is DEAD:**
with ZERO syllables between the two accents ("Hear" → "me"), the elastic
region is a single `do(H)` folded into the first-anchor slur — the plain-H
elastic `do` from Bill's original rule statement, appearing exactly where
syllable pressure is lowest. Observed elastic behavior across in-between
counts is now: 0 → `do(H)` on the anchor slur (L1); 1 → `re(H)+do(Q)` slur
+ `do(Q)` on the syllable (S4); 2 → `do(Q)·do(Q)` (S1, S2); 3 → `do(Q)×3`
(S3). **Remaining anomaly: S4's 1-syllable case carries TWO do's (n+1)
where every other count carries exactly n (or the single H at n=0).** Open
— a second 1-in-between example would show whether S4's shape is the rule
for that count or that instance's reading.

**Tail compression has two observed variants at 1 trailing syllable — a
word-boundary hypothesis (open):**
- S3 "Dev-il falls." and S4 "Trin-i-ty!": the trailing unaccented syllable
  belongs to the accented word → compression on the ACCENT
  (`ti(H)+do(Q)` slur), trailing syllable takes `ti(Q)`.
- L1 "me, O Lord!": the accent is a standalone monosyllable (with a comma)
  and the trailing syllable is a separate word → the accent keeps a PLAIN
  `ti(H)` and the `do(Q)+ti(Q)` pair slurs together on the trailing word.

Candidate rule: slurs prefer to stay within word boundaries — the melisma
lands on whichever syllable keeps the compression word-internal. Two
examples on one side, one (plus its duplicate) on the other; logged as a
hypothesis, not a rule.

**Also unseen still:** the fully uncompressed tail (2+ trailing syllables:
`ti(H)` alone, `do(Q)`, `ti(Q)` each on their own syllable), and the
zero-in-between case WITH a reciting body (L1's opening slur also absorbed
the reciting pitch; with a reciting body present, presumably just
`re(H)+do(H)` on the first anchor, unconfirmed).

**Method note, kept honestly:** Claude's first positional read assigned the
elastic `do` as `H` when single and gave `ti(H)` its own syllable
("Dor"/"great"/"the"), effectively treating the figure as six fixed slots
filled left to right. The actual organization is accent-driven, not
slot-driven: the `ti(H)` belongs to the last internal accent, and the
figure compresses onto it from the right. Same lesson as Tone 4 Phrase E:
rich cadence figures organize around stress points, not around a 1:1
position-to-syllable mapping.

---

## 4. SATB harmony

**Method:** direct interview, phrase by phrase, mirroring the Tone 2/4
sessions — Bill reads every value off the harmony page (p. 41) and the full
Transfiguration SATB score (pp. 42–43); Claude's p. 41 initial read (kept in
§4.9 below) serves only as the question sheet, never as evidence. §27.2
steps 1–2 completed first (see §1.2: re=G4, do=F4=tonic).

### 4.1 Phrase A — CONFIRMED

| Position | Alto | Soprano | Tenor | Bass |
|---|---|---|---|---|
| Intonation + reciting | re | fa | sol | sol |
| Cadence anchor | mi | sol | sol | do |
| Cadence fills + close | do | mi | sol | do |

- Soprano: diatonic third above alto throughout (re→fa, mi→sol, do→mi).
- Tenor: constant `sol` through the entire phrase.
- Bass: recites `sol`, drops to `do` for the whole cadence (anchor, fills,
  and close alike).
- **Registers confirmed:** tenor `sol` = **C4**; bass `sol` = **C3**
  (alto re=G4, soprano fa=B♭4).

### 4.2 Phrase B — CONFIRMED

| Position | Alto | Soprano | Tenor | Bass |
|---|---|---|---|---|
| Reciting | mi | sol | sol | do |
| Cadence anchor | mi | sol | sol | do |
| Fills | mi | sol | sol | do |
| Close | re | fa | sol | sol |

- Soprano: diatonic third (mi→sol, re→fa). Tenor: constant `sol` again.
- Bass: recites on `do` — its first pitch change of the tone — static
  through anchor and fills (S/T/B all static until the close; the anchor is
  audible only as alto's Q→H duration shift), then `sol` under the close.
- **Registers confirmed:** bass `do` = **F3**; the closing `sol` is the
  same **C3** as Phrase A's reciting sol.

### 4.3 Phrase C — CONFIRMED

| Position | Alto | Soprano | Tenor | Bass |
|---|---|---|---|---|
| Intonation + reciting | re | fa | sol | sol |
| Prep (incl. slurred re+ti variant) | ti | re | sol | sol |
| Cadence anchor + fills | do | mi | sol | do |
| Cadence ti | ti | re | sol | sol |
| Close | la | do | mi | la |

- Soprano: strict diatonic third throughout (re→fa, ti→re, do→mi, la→do).
- Tenor: `sol` until the very last note — `mi` under alto's closing `la`.
- Bass: sol / sol / do / sol / la — first bass·alto same-degree close of
  the tone (both on `la`, octaves apart).
- **Registers confirmed:** tenor closing `mi` = **A3** (dropping from C4);
  bass closing `la` = **D3** (up from C3).

### 4.4 Melisma/slur handling in the harmony voices — CONFIRMED principle

**Harmony voices all follow alto's slurs; tenor collapses (holds) on them
wherever its own pitch doesn't change.** Bill's worked case — Phrase C LIC
"hear" (alto `do(H·)+ti(Q)` slur, 4Q total): **tenor sings a whole note on
`sol`** (its pitch is sol under both alto notes → natural sustain); **bass
slurs `do(H·)→sol(Q)`** in sync with alto (its pitches genuinely differ →
it articulates both). Soprano, as always, shadows alto's melisma a third up
(`mi→re`).

This is the identical mechanism already proven in Tones 1–4
(`deriveTenorRolesWD`/`deriveBassRolesWD` collapse: same-pitch run →
sustain, pitch change → articulate) — **score-confirmed for Tone 5
directly, not inherited**, satisfying the per-tone hold-verification gate
for adding 5 to `TENOR_HOLD_TONES`/`BASS_HOLD_TONES`.

### 4.5 Final Phrase — CONFIRMED (positional mapping required)

| Position | Alto | Soprano | Tenor | Bass |
|---|---|---|---|---|
| Reciting | mi | sol | sol | do |
| 1 — first anchor | re | fa | sol | sol |
| 2 — elastic do (×n) | do | mi | sol | do |
| 3 — ti | ti | re | sol | sol |
| 4 — do | do | mi | sol | do |
| 5 — ti | ti | re | **si** | **mi** |
| 6 — close | la | do | mi | la |

- **Positional mapping is REQUIRED**: alto `ti` at positions 3 vs 5 takes
  tenor `sol` vs `si` and bass `sol` vs `mi`; a flat pitch-keyed cadMap
  cannot express this. Same architecture as Tone 4 Phrase E's
  `cadPositional`.
- **Tenor `si`** — raised `sol`, the printed `#` on the page, functioning
  as the leading tone into the final chord. Same device as Tone 1's and
  Tone 4's Final tenor; the pitch already exists in the codebase.
- **Registers confirmed:** tenor `si` = **C♯4**; tenor close `mi` = **A3**
  (as in Phrase C); bass position-5 `mi` = **A2**, RISING to the D3 `la`
  close. Bass elastic run holds `do` = F3 for however many Q's.
- Soprano: strict diatonic third at every position including the close.

**Slur behavior in the Final (Bill's score read, LIC):**
- **"Hear___"** (alto `mi/Q + re/H + do/H`, 5Q span): bass slurs **note for
  note with alto/soprano — `do·sol·do`** (F3·C3·F3). **Tenor sustains `sol`**
  — printed as a quarter note slurred to a whole note ON THE SAME PITCH
  (Q~W, 5Q total, matching alto's span exactly); Bill characterizes it as
  "essentially a dotted whole fitting the tenor melisma collapse."
  **Implementation note:** 5Q has no single durKey (2.5 H-units), so the
  existing `sumDurKeys` collapse would decline to collapse this run —
  the printed score's own Q~W tied-pair notation is the correct rendering
  target here, not a single notehead. Worth handling deliberately when
  wiring (cf. the W·=3H extension Tone 1 needed for its 3H tenor case).
- **"O___ Lord!"** (alto `do/Q + ti/Q` slur on "O", positions 4→5): **no
  collapse anywhere — every voice has a note to move to** (tenor `sol→si`,
  bass `do→mi`, soprano `mi→re`). All four voices articulate both notes,
  slurred in sync.

### 4.9 Initial p. 41 read (question sheet used during the interview — superseded by §4.1–4.5)

| Phrase | Alto | Soprano | Tenor | Bass |
|---|---|---|---|---|
| A inton/recite | re | fa | sol | sol |
| A cadence | mi · do | sol · mi | sol · sol | do · do |
| B recite | mi | sol | sol | do |
| B cadence | mi · re | sol · fa | sol · sol | do · sol |
| C inton/recite | re | fa | sol | sol |
| C prep | ti | re | sol | sol |
| C cadence | do · ti · la | mi · re · do | sol(·?) · sol · mi | do · sol · la |
| Final recite | mi | sol | sol | do |
| Final cadence | re·do·ti·do·ti·la | fa·mi·re·mi·re·do | sol·sol·sol·sol·**si**·mi | sol·do·sol·do·mi·la |

Initial observations (all subject to verification):
- **Soprano** appears to be the standard diatonic third above alto throughout
  (re→fa, mi→sol, do→mi, ti→re, la→do) — consistent with the shared
  `SOPRANO_MAP`, pending Bill's confirmation of a few pairs.
- **Tenor** appears to be a near-constant `sol` drone, breaking only in the
  Final cadence's tail: `…sol, si, mi` — the `si` (raised sol, harmonic-minor
  leading tone) carries a visible `#` accidental on the page, same device as
  Tones 1 and 4's Final tenor. Octave/`octaveDiv` must be derived from
  confirmed notation per §27.2 step 4, never guessed.
- **Bass** recites `sol` under A/C but `do` under B and Final.
- **The Final cadence needs positional mapping**: alto's `ti` appears at
  positions 3 and 5 with different tenor answers (`sol` vs `si`) and different
  bass answers (`sol` vs `mi`). A flat cadMap cannot express this (same
  finding as Tone 4 Phrase E bass).

---

## 5. Open items

- LIC vs tutorial duration elongation (intonation accent `H·`, compressed-C
  close `H·`) — Bill-ruled as special emphasis / left open; encoder default
  = tutorial's plain values.
- C close H-vs-H· driver; no C or unit-end close at `//` seen for C yet.
- Final Phrase: S4's 1-in-between elastic rung (n+1 do's vs the pattern);
  tail word-boundary compression hypothesis; uncompressed tail unseen;
  zero-in-between WITH a reciting body unseen.
- Phrase A/B: no B anchor-stretch case seen (no 1-fill B cadence yet).
- SATB mapping — in progress (§4).
- Tone 5 MP3 set and OCA docx corpus — not yet gathered.

---

## 6. Implementation record (v0.26.0, same session)

Shipped in one pass after the research above was complete. Full change list
in `TRAINER_RELEASE_NOTES` (v0.26.0 entry); the architecture in brief:

- `ROT_DEFS[5] = ["A","B","C"]` (+ the snapshot tool's replica); tone
  selector, rotation hint, and Try-Example are gated on `PH_DEFS[5]` /
  `PRESETS[5]` and lit up automatically.
- `PH_DEFS[5]` (src/lib/phrase-defs.js) + **four dedicated pointLine()
  handlers** (src/lib/pointing.js) emitting explicit per-pitch `durs` — no
  Tone 5 phrase touches shared `distribute()` or the twin duration engines'
  generic branches (Tone 3 §22 discipline).
- **Anchor-search fix found during implementation:** the Final's a1 was
  initially computed as `acc[len-2]` (the Tone 3 pattern) — wrong whenever
  a2's own monosyllable backup fires ("A-dam ris-es as the Dev-il falls.":
  "falls" backs a2 up to "Dev", making `acc[len-2]` equal a2). Fixed by
  taking the accent immediately preceding a2's actual position. Gate
  fixture guards it.
- SATB: `BASS_RULES[5]` / `TENOR_RULES[5]`; Tone 5 added to
  `SOPRANO_TONES`, `BASS_TONES`, `TENOR_TONES`, `BASS_HOLD_TONES`,
  `TENOR_HOLD_TONES`. Final tail is **positional** for both voices
  (`cadPositional`, read via a new cad-only expanded-entry index — Tone 4
  E's combined counter would misindex past the variable-length cad1 run);
  cad1 reuses Tone 3's cad1Map dispatch, extended to tone 5. Bass's Final
  A2 is encoded as `mi_low` (existing ÷4 pitch — correct in audio, chips,
  and print; the default `mi` would land at A3). Tenor Final carries
  `octaveDiv:{si:1}` (same override + reason as Tones 1/4).
- **Tone-5-gated suffix-split** in `deriveTenorRolesWD`: the Final "Hear"
  slur (Q+H+H = 2.5H on constant sol) renders as the printed score's
  quarter-slurred-to-whole (prefix as-is + collapsed representable suffix);
  Tones 1–4's all-or-nothing collapse untouched. Verified by standalone
  trace against all confirmed cases (Final tenor/bass, C compressed
  tenor/bass, preslur holds) — all matched Bill's given data exactly.
- `PRESET_T5`: the 6-line LIC set (A B C A B Final), every line a
  score-confirmed worked example from this document.
- `cad1Map` added to `buildUnifiedVoiceMap`'s pitch collection
  (preventative, same closure class as preslurMap).
- Encoded PROVISIONAL rules (flagged in the UI's Tone 5 open-items note):
  "!"-close → W for A/B; C's compressed close la(H·) per the LIC score
  (tutorial snippet prints H). NOT encoded: LIC dotted intonation accents
  (Bill-ruled emphasis); B's once-observed 0-fill H· close.
- Gate 71/71 + 34/34 (10 new Tone 5 fixtures), vite build clean, eslint
  unchanged (38 pre-existing, +0). **Live verification against the deployed
  tool (chips, audio, printed score) is the remaining step, per standing
  practice.**

---

*Live working session, July 2026. Research and implementation completed in
one session; updated section by section as each phrase was verified.*
