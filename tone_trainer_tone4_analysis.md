# Tone 4 Obikhod Common Chant — Findings & Build Record (IN PROGRESS)

*Tone Trainer sub-project · `src/components/tone-trainer.jsx`*
*Compiled: July 2026, ongoing session — Phrases A and B complete at
tutorial-analysis level; C in progress; D, E, F, Final not yet started.*

This document is a **look-back record and forward guide**, in the same spirit as
`tone_trainer_tone1_analysis.md`, `tone_trainer_tone2_analysis.md`, and
`tone_trainer_tone3_analysis.md`. Read alongside those three — much of the
method here is inherited from them, but per the prime directive, no pitch,
duration, or rotation logic is ported from any prior tone without its own
independent verification for Tone 4.

Voice being mapped: **ALTO** (melody), consistent with Tones 1–3.

---

## Status at time of writing

| Phrase | Status |
|---|---|
| Rotation | ✅ Confirmed (verbatim tutorial quote, verified against the tutorial's own 9-line worked example) |
| A | ✅ Tutorial-analysis level complete — 5 worked examples |
| B | ✅ Tutorial-analysis level complete — 5 worked examples |
| C | 🔶 Structure and cadence duration resolved (6 examples); two genuine anomalies and one fill-rule conflict still open |
| D | ✅ Structure and fill/duration patterns confirmed (6 examples); 2-syllable floor unconfirmed but not urgent |
| E | 🔶 Structure confirmed (6 pitches); 7 worked examples covering full compression range; anchor rule differs from B/D (tracks multiple stress points, not single last-accent) |
| F, Final | ⬜ Not yet started |

**No audio or OCA docx corpus work has been done yet this session.** Everything
below comes from the tutorial text and Bill's direct sight-reading of the score
alongside it, in real time, worked example by worked example. This is an
important departure from the Tones 1–3 method, and is addressed directly in
§1.3 below.

---

## 1. Source materials

### 1.1 Tutorial PDF

**File:** `Tutorial-Obikhod-Tone4-Explanation.pdf`
**Drive ID:** `10eojo_PdITsL4JGBJne5CPaXGrycrbls`
**What it contains:** Complete phrase-by-phrase description of Tone 4 Common
Chant (Phrases A–F plus a Final Phrase), a four-part harmony reference table,
and a worked sticheron example (Dormition, second sticheron at "The Praises")
in four-part SATB harmony.

A companion **Kievan Chant Tone 4** tutorial also exists in Drive
(`Tutorial-Kievan-Tone4-Explanation.pdf`). Tone 3's source authority was Common
Chant/Obikhod, and this session is explicitly scoped to Obikhod — the Kievan
tutorial is a different chant tradition and is not used here.

### 1.2 Key

**F major, one flat (B♭), do=F.** Confirmed directly from a photograph of the
tutorial's key signature (one flat on the B line, no sharps) provided by Bill.
Diatonic scale in this key: do=F, re=G, mi=A, fa=B♭, sol=C, la=D, ti=E — so
`fa` is the only scale degree requiring the key signature's flat at all.

As with every prior tone: **absolute pitch is irrelevant to pointing.** This
matters only for reading the score correctly, not for any PH_DEFS pitch label.

One item flagged for later (not relevant to alto/melody pointing): the raw PDF
text extraction shows a stray sharp accidental next to a `si` (raised `sol`) in
the Final Phrase's harmony section, in what appears to be a tenor or bass row —
the same kind of chromatic raised-scale-degree Tone 2 had with `di` (raised
`do`). Held for the eventual SATB harmony pass; does not affect alto work.

### 1.3 Method note — why this document departs from Tones 1–3's process

Tones 1–3 each triangulated across three independent sources: tutorial prose,
an OCA `.docx` fixture corpus, and unison MP3 audio. **This session has used
only the tutorial text so far, read directly by Bill alongside the actual
score**, rather than Claude's own extraction of the PDF.

This is a deliberate, well-founded departure, not a shortcut: Claude's own
text-layer extraction of this PDF has already been shown to be unreliable for
note values and even for line ordering (see the "garment" example in §3.1 —
its text physically sat, in Claude's raw extraction, immediately after the
Phrase B heading, ahead of Phrase B's own captioned example, yet Bill's
pitch-reading unambiguously placed it in Phrase A). Given that, Bill's direct
sight-reading of the tutorial is being treated as the authoritative source for
all pitch and duration data in this document — not Claude's OCR, and not an
assumption ported from any prior tone.

The Tone 4 MP3 set (Alto/Bass/Tenor/Soprano/SATB/Unison,
Drive folder `1g7UnqfPpRYHDR4VE1scLJ8O56Fd-CZmr`) and an OCA docx corpus for
Tone 4 both still need to be gathered before this document reaches the same
evidentiary standard as Tones 1–3. Flagged in the open-items list at the end.

---

## 2. Phrase rotation — CONFIRMED

Verbatim tutorial quote (Bill-verified by direct sight-read):

> "The sticheron melody for Tone 4 consists of six (6) melodic phrases (A, B,
> C, D, E, F) and a Final Phrase for the last line of text.. The first three
> phrases, A, B, and C are used only once, at the beginning of a sticheron,
> then D, E, and F are sung in rotation up to the last line of the text for
> the Final Phrase. If a sticheron is divided into 9 textual phrases, the
> musical lines will consist of A, B, C, D, E, F, D, E and Final Phrase."

**Structural novelty:** three one-time intro phrases (A, B, C) before rotation
begins — not seen in Tones 1–3. Tone 2 had one intro phrase (A) before B·C·D
rotated; Tone 3 had no intro phrase at all (pure A·B alternation). Tone 3's own
analysis document (§10) had flagged Tone 4's rotation as worth extra care, and
guessed a shape close to but not identical to this one ("A intro-only, then
D/E/F rotating") — the actual rule is more specific: **three** intro phrases,
not one.

Proposed `ROT_DEFS[4]`:

```javascript
4: (i, total) =>
  i === total - 1 ? "Final" :
  i === 0 ? "A" :
  i === 1 ? "B" :
  i === 2 ? "C" :
  ["D","E","F"][(i - 3) % 3],
```

Verified against the tutorial's own 9-line worked example (i = 0..8):
produces `A B C D E F D E Final` — exact match.

---

## 3. Phrase definitions

### 3.1 Phrase A

**Tutorial text (verbatim):**

> "Phrase A begins directly with the reciting tone (ti) and concludes with the
> cadence. The cadence, is used to sing one, two, or more syllables and
> begins on the final accent of the phrase, sung on do, as are any unaccented
> syllables that follows."

**Structure:**
- `recite: "ti"`
- `inton: false` — inferred by phrasing analogy to Tone 3 Phrase A ("begins
  directly with the reciting tone"), which used identical phrasing and was
  confirmed `inton:false`. Not yet independently corpus-verified for Tone 4.
- `prep: null` — no approach note; reciting tone leads straight to cadence.
- `cad: ["do"]` — single pitch. Anchor and all trailing unaccented syllables
  stay on `do`. Simplest cadence shape of any phrase seen so far, in the same
  family as Tone 1 Phrase A and Tone 2 Phrase C (both also `cad:["do"]`).

**Comparison note:** Tone 4 Phrase A's reciting tone (`ti`) is the same pitch
Tone 1 Phrase A used as its *prep* note. Tone 4 has no prep or intonation at
all here — leaner than Tone 1's equivalent phrase.

**Worked examples** (notation: `word(pitch/duration)`, `|` marks cadence
start — session-specific notation, not to be confused with the `|` end-of-line
marker used in the Hours Tool's stichera encoding):

| # | Text | Reciting | Cadence |
|---|---|---|---|
| 1 | "of Your Cross" | of(ti/Q) Your(ti/Q) | Cross(do/H) |
| 2 | "a garment[...]" | a(ti/Q) | gar(do/H) ment(do/H) |
| 3 | "...Angel's prophecy" | An(ti/Q) gel's(ti/Q) | proph(do/H) e(do/Q) cy(do/H) |
| 4 | "At a divine command" | At(ti/Q) a(ti/Q) di(ti/Q) | vine(do/H) com(do/Q) mand(do/H·) |
| 5 | "Lord, I call upon Thee, hear me!" (LIC) | Lord(ti/Q) I(ti/Q) call(ti/Q) upon(ti/Q) Thee(ti/Q) | hear(do/H) me!(do/H) |

**Duration template by cadence syllable count** (consistent, position-driven,
independent of the constant pitch):

| Count | Shape |
|---|---|
| 1 | do(H) |
| 2 | do(H) · do(H) |
| 3 | do(H) · do(Q) · do(H or H·, open — see §4) |

**Anchor rule finding — example 4 ("At a divine command"):** this example
surfaced a genuine exception to the standard `anchorIndex()` rule, confirmed
by Bill as a complete phrase (not a truncated snippet). "Command" is
polysyllabic and phrase-final, carrying its own natural English stress
(com-**MAND**) — under the plain rule it should be the anchor, but the
cadence anchors at "divine" instead, with "com-mand" riding the cadence
pitch as completing material. See §4 for the generalized principle this
produced, which is the single most important cross-phrase finding so far.

**Method note:** at least one worked example's text (example 2, "garment")
sat, in Claude's own raw OCR extraction of the PDF, immediately after the
Phrase B heading — ahead of Phrase B's own captioned example. Bill's `ti/do`
reading is unambiguous Phrase A pitch content, so this is logged as Phrase A;
Claude's extraction ordering is not treated as reliable evidence for phrase
attribution anywhere in this document.

**Open items:**
- Full H vs H· vs W rule at cadence close — no pattern found yet (§4).
- `inton:false` is an analogy to Tone 3's phrasing, not an explicit tutorial
  statement of absence — needs a long Phrase A example or corpus check.

---

### 3.2 Phrase B

**Tutorial text (verbatim):**

> "Phrase B begins directly with the reciting tone (re) and moves to the
> cadence, used to sing two or more syllables, beginning with a half note on
> the last internal accented syllable. This accented syllable is sung on re,
> the same pitch as the reciting tone. The last syllable of phrase is sung
> one tone lower, on do. Unaccented syllables before the last note are sung
> on re."

**Structure:**
- `recite: "re"`
- `inton: false` — inferred by phrasing analogy, same caveat as Phrase A.
- `prep: null`
- `cad: ["re", "do"]` — two-note figure. Anchor sits on the *same* pitch as
  the reciting tone (distinguished from reciting only by a duration shift,
  Q→H, until the final descent), then drops one whole step to `do` at the
  phrase's last syllable. Unaccented syllables between anchor and close stay
  on `re`.

**Cross-tone note:** anchor-on-reciting-pitch is not new to Tone 4 — Tone 1
Phrase B does the same thing (`recite:"do"`, `cad:["do","re","ti"]`, anchor
position = `do` = reciting pitch). Confirms this is a real recurring pattern.
Structurally `cad:["re","do"]` is in the same family as Tone 2's Phrases B/D
(`cad:["di","re"]`) — a two-pitch anchor-then-close figure.

**Worked examples:**

| # | Text | Reciting | Cadence |
|---|---|---|---|
| 1 | "of David" | of(re/Q) | Da(re/H) vid(do/H) |
| 2 | "...mankind on earth" | man(re/Q) | kind(re/H) on(re/Q) earth(do/H) |
| 3 | "...his greeting 'Rejoice.'" | his(re/Q) | greet(re/H) ing(re/Q) Re(re/Q) joice.(do/H) |
| 4 | "...the chief Apostles gathered from the ends of the earth to bury you," | (~15-syllable reciting run, all re/Q) | bur(re/H) y(re/Q) you,(do/H·) |
| 5 | "Hear me, O Lord!" (LIC closer) | — (no reciting body; opens directly on anchor) | Hear(re/H) me,(re/Q) O(re/Q) Lord!(do/W) |

**Duration by cadence syllable count:**

| Count | Shape |
|---|---|
| 2 | re(H) · do(H) |
| 3 | re(H) · re(Q) · do(H or H·, open) |
| 4 | re(H) · re(Q) · re(Q) · do(H or W, depending on finality — see below) |

**Tone-specific difference from Tone 1 (flagged, not an error):** Tone 1
Phrase B kept cadence fills at H through count=3, dropping to Q only at
count≥4 (a real threshold effect documented in
`tone_trainer_tone1_analysis.md §12.3`). Tone 4 Phrase B shows Q fills
starting at count=3 already (example 2) — no count=3 H-threshold. This is a
genuine per-tone/per-phrase difference, consistent with the prime directive
that nothing is assumed to port between tones.

**W vs H at close, count=4 (examples 3 and 5):** "his greeting 'Rejoice'" (a
mid-sticheron line, more text to follow) closed on H; "Hear me, O Lord!" (the
genuine close of its psalm-verse-and-refrain unit within the LIC framing)
closed on W. Read as *confirmation* of the cross-tone pattern already
documented in Tones 1–3 — W tracks genuine structural finality, not syllable
count — rather than a new anomaly.

**Anchor rule — two examples explained cleanly by the ordinary algorithm, one
genuinely open:**
- Example 2 ("earth") and example 5 ("Lord") are both explained by the
  **standard monosyllabic backup rule** already established since Tone 1: a
  stressed monosyllable alone at phrase-end backs off to the previous
  accented candidate. No override needed. Important methodological point:
  not every "anchor sits before the apparent last word" case is an exception —
  check the ordinary backup rule first.
- Example 3 ("...greeting 'Rejoice.'") is **not** explained by that rule.
  "Rejoice" is two syllables (Re-**joice**), non-monosyllabic, and the true
  final word (in quotes) — the standard algorithm would pick "joice," not
  "greet." Two candidate explanations were put to Bill (same semantic-weight
  pattern as "divine command"; or quoted material may not compete for anchor
  placement the way ordinary trailing words do). **Left open by agreement** —
  logged rather than forced, on the expectation that more evidence will
  clarify it.

**Open items:**
- The "Rejoice" anchor exception (above) — unresolved.
- H vs H· at cadence close — no pattern found across either phrase (§4).
- `inton:false` — same caveat as Phrase A.

---

### 3.3 Phrase C — resolved (unified model)

**Tutorial text (verbatim, both parts now reconciled):**

> "The phrase begins with an intonation of a half note on mi, followed by a
> quarter note on re, leading to the reciting tone of do. Preparatory notes
> precede this half note if the phrase begins with unaccented syllables."

> "The cadence of Phrase C is the same as the cadence of Phrase B. (Note,
> however, that the reciting tone, is do for Phrase C, as opposed to re for
> Phrase B)"

**Key correction from earlier in this research session:** an earlier draft of
this document treated the intonation's `mi(H)→re(Q)` as leading into a
separate "reciting tone `do`" section, with the cadence (if any) coming
*after* that. Working through four short score images and examples with
Bill directly, that model looked wrong — every short example seemed to go
straight from the intonation into a cadence with no reciting body at all,
and this document's next revision concluded the intonation's `re` and the
cadence's `re` anchor were literally the same note doing double duty.

**That revision was also incomplete.** A fifth, genuinely long example
("and when they saw you being taken from the earth to heaven," below)
shows all three parts distinctly and separately: intonation, then an actual
extended reciting body (`being taken from the earth to`, all `do/Q`), then a
cadence with its own separate `re` anchor (`heav-`) well after the
intonation's own `re` (`you`). **The correct model:** intonation and cadence
are two structurally real, separate slots, each with its own `re` note — but
the reciting body between them can be **zero syllables long**, in which case
the intonation's `re` and the cadence's `re` sit immediately adjacent at the
identical pitch and become audibly/structurally indistinguishable as "one
note." They're not one note serving two roles; they're two real slots that
happened to collapse to no distance apart in the four short examples.

**Why this wasn't obvious from the text alone:** in Phrase B, the cadence
anchor sits *on* the reciting pitch (both `re`) — duration change (Q→H) is
the only signal the cadence has begun. In Phrase C, the reciting pitch is
`do`, but the cadence anchor is `re` — a full step *above* the reciting
tone. So the melody has to rise back up into the cadence rather than simply
continuing at or below the reciting pitch. This is exactly the distinction
the tutorial's parenthetical is calling out.

**Structure:**
- `recite: "do"`
- `inton: true` — a genuine two-pitch approach (`mi(H) → re(Q)`), not a
  duration change on the reciting pitch itself, structurally distinct from
  Tones 1–3's intonations.
- **Preparatory notes** (before the intonation, when the phrase opens with
  unaccented lead-in syllables): the syllable immediately before the
  intonation accent is always `re`; any additional earlier syllables repeat
  `do`. Confirmed across three counts: 1 prep → `re`; 2 preps → `do, re`;
  3 preps → `do, do, re`.
- **Mi-extension:** an extra unaccented syllable falling between the
  intonation accent and the `re` that closes the intonation extends the
  `mi` rather than doubling the `re` (confirmed by Bill: "strange, but
  that's the tutorial verbatim").
- **Reciting body:** `do(Q)` per syllable, zero or more syllables, between
  the intonation's `re` and the cadence's own `re` anchor. Zero-length in
  every short example seen so far; genuinely present (6 syllables) in the
  one long example seen so far.
- `cad: ["re", "do"]` — **identical pitches to Phrase B**, per the tutorial's
  explicit statement, now confirmed by score evidence. Fill behavior is
  **not yet settled** — see the open conflict below.
- **Cadence duration — resolved:** short examples (0-length reciting body)
  are uniformly quarter notes; both long examples with a genuine reciting
  body (example 5 "heaven," example 6 "Lord...hear me" below) close
  `re(H) do(H·)` — identical shape in both. **Cadence duration tracks
  whether the reciting body is present, not some inherent quality of Phrase
  C's cadence figure.** When the reciting body collapses to zero (short
  phrases), the cadence stays on quarter notes; when a real reciting body
  exists, the cadence takes the same H-anchored template as Phrases A and B.

**Worked examples:**

| # | Text | Shape |
|---|---|---|
| 1 | "held in your arms" | held(mi/H) in(mi/Q — extends mi) \| your(re/Q — ANCHOR, 0-syllable reciting body) arms(do/Q — close) |
| 2 | "the Sun of Righteousness" | the(re/Q — prep) Sun(mi/H) \| of(re/Q — ANCHOR, 0-syllable reciting body) Right(do/Q) eous(do/Q) ness(do/Q — close, fill repeats do×2) |
| 3 | "the most sacred fruit" | the(do/Q — prep) most(re/Q — prep) sa(mi/H) \| cred(re/Q — ANCHOR, 0-syllable reciting body) fruit(do/Q — close) |
| 4 | "through the abundance of goodness" | through(do/Q) the(do/Q) a(re/Q) — 3 preps: do,do,re — bun(mi/H) dance(mi/Q — extends mi) \| of(re/Q — ANCHOR, 0-syllable reciting body) good(do/Q) ness(do/Q — close, fill repeats do×1) |
| 5 | "and when they saw you being taken from the earth to heaven" | and(do/Q) when(do/Q) they(re/Q) — 3 preps: do,do,re — saw(mi/H) you(re/Q — intonation's own re, NOT the anchor this time) \| being taken from the earth to (do/Q ×6 — genuine reciting body) \| heav(re/H — ANCHOR, separate from intonation's re) en(do/H· — close) |
| 6 | "[Lord], I call upon Thee, [hear] me!" (LIC) | Lord,(mi/H· — intonation accent, director-marked) I(re/Q — intonation's own re) \| call(do/Q) upon(do/Q) Thee,(do/Q) — genuine reciting body \| hear(re/H — ANCHOR, director-marked) me!(do/H· — close) |

**Example 6 independently confirms example 5's cadence duration finding**
(both close `re(H) do(H·)`, identical shape from two unrelated texts), and
adds a clean confirmation of the two-slot model from the director's own
markup: the two bracketed accents (`[Lord]`, `[hear]`) land exactly on the
intonation accent and the cadence anchor — the two real structural points —
the same two-mark pattern Tones 1–3 used for their own two-anchor Finals,
here showing up in a different phrase entirely.

**Note on the `|` mark itself:** Bill's original transcriptions placed `|`
one note *later* than the structural boundary in examples 1–4 (e.g. "cred |
fruit" rather than "\| cred fruit"). That's not a disagreement about where
the cadence starts — it faithfully reproduces where the **tutorial's own
printed score** marks its break/label, which is consistently one note after
the actual cadence anchor in examples 1–4. Example 5 was given with no `|`
marker at all by the tutorial, and its structure (with a real reciting body)
makes the intonation/cadence boundary unambiguous without one. Worth keeping
in mind for any future phrase: the tutorial's own typeset break position and
the true structural cadence boundary are not guaranteed to be the same
place, and the offset itself is a useful thing to check per phrase rather
than assume.

**Two genuine anomalies, not yet resolved — flagged by Bill directly ("I
don't follow this tutorial's logic very well for this phrase"):**

| Text | Shape |
|---|---|
| "and Anna" | and(do/Q) \| An(re/H) na(do/H) |
| "bestowed in its stead" | be(do/Q) \| stowed(re/H) in(re/Q) its(re/Q) stead.(do/H) |

Neither has a `mi(H)` intonation accent anywhere — the melody goes straight
from a plain `do` lead-in into what appears to be the cadence anchor
(`An`, `stowed`, both `re/H`). **Working hypothesis, not confirmed:** both
are short enough that the accented syllable sits close to the phrase's end,
possibly leaving no room for the full intonation figure before the cadence
has to launch — the same kind of "not enough room" compression already
established for the reciting body going to zero length, just applied to the
intonation itself this time. Needs Bill's confirmation against the score;
not treated as settled.

**Genuine open conflict, unresolved — the fill pitch:** "Righteousness" and
"goodness" (examples 2 and 4) both fill their extra cadence syllables on
`do` (the close pitch). "Bestowed in its stead" fills its extra syllables
(`in`, `its`) on `re` (the anchor pitch) instead — the opposite choice, with
the same cadence figure and a similar syllable count. Not yet explained.
Possibly connected to the missing-intonation anomaly above (i.e. whichever
mechanism removes the intonation in "bestowed" may also change the fill
rule), but this is speculation pending further examples or Bill's read of
the score.

---

### 3.4 Phrase D — structure and fill/duration patterns confirmed

**Tutorial text (verbatim):**

> "Phrase D begins with the reciting tone (do). The cadence consists of
> three pitches, beginning with the last internal accented syllable on ti,
> followed by do, and re, and is used for two or more syllables, beginning
> with an accented half note on ti."

**Structure:**
- `recite: "do"`
- `cad: ["ti", "do", "re"]` — three pitches, anchor `ti(H)` on the last
  internal accented syllable, then `do`, then `re`.
- Minimum cadence length is **two** syllables (matching Phrase B's "two or
  more" floor), not one — meaning a 3-pitch figure has to fit into as few as
  2 syllables at minimum. Not yet resolved how (melisma vs. some other
  compression) — see open item below.

**Structural novelty:** this is the first cadence in any Phrase so far (A,
B, or C) that **ascends past the reciting tone** rather than resolving down
to or at it. `ti → do → re` ends a full step above `do`, the reciting pitch.
Every other phrase's cadence has stayed at or below its reciting tone.

**Note for the record:** this matches an early, unverified guess from this
document's very first synthesis of the tutorial (made before Bill began
providing verified quotes), which is being logged as a coincidence worth
noting, not as evidence that any of Claude's own unverified readings should
be trusted going forward — Phrase C's early guess from the same source was
wrong in structure despite being right in spirit, so this is treated as one
correct guess out of two, not a pattern.

**Fill behavior — mostly resolved from two tutorial schematics (not yet a
worked text example):**

> Schematic 1 (exact 3-syllable fit): reciting `do(Q)` ... cadence
> `ti(H) do(H) re(H)`
>
> Schematic 2 (expanded, 4+ syllables): cadence
> `ti(H) do(Q)·do(Q)·do(Q)... re(H)`

Anchor (`ti`) and close (`re`) stay fixed at `H`; the middle `do` position
is the stretchy one, expanding to however many syllables are actually
present. Its duration follows the same pattern already confirmed elsewhere
in this document: a single middle fill takes `H` (schematic 1, exact fit),
multiple middle fills take `Q` each (schematic 2, expanded) — not a new
rule, the familiar "one fill = H, several fills = Q" behavior already seen
in Phrase B.

**Still open:** neither schematic shows the literal 2-syllable floor stated
in the tutorial text ("used for two or more syllables"). If the middle `do`
is genuinely optional down to zero occurrences, 2 syllables would be
`ti(H) re(?)` with nothing between — a reasonable inference from the
pattern, but not yet seen directly in a worked example. Not treated as
confirmed until it is.

**Method note:** every `ti` in the tutorial's two illustrative schematics
carries a small `>` mark under the half note. Confirmed by Bill: this mark
does **not** appear in the actual scored examples (the real SATB sticheron
excerpts) — only in the tutorial's own generic schematic diagrams. Read as
pedagogical shorthand pointing at the same accented syllable the prose
already names ("beginning with an accented half note on ti"), not a real
articulation/performance mark that would ever need encoding. Worth
remembering for E, F, and the Final Phrase's own schematics, in case similar
marks appear there.

**Worked examples:**

| # | Text | Shape |
|---|---|---|
| 1 | "pre-e-ternal God" | pre(do/Q) e(do/Q) \| ter(ti/H — ANCHOR) nal(do/H — single fill) God(re/H — close) |
| 2 | "creation of all." | cre(do/Q) \| a(ti/H — ANCHOR) tion(do/Q — fill) of(do/Q — fill) all.(re/H — close) |
| 3 | "they cried out with joy in Gabriel's words:" | they cried out with joy in (do/Q ×6 — reciting) \| Ga(ti/H — ANCHOR) bri(do/Q — fill) el's(do/Q — fill) words:(re/H· — close) |
| 4 | "Receive [voice] of my prayer" (verified score, LIC, director-marked) | Re ceive the (do/Q ×3 — reciting) \| voice(ti/H — ANCHOR, director-marked) of(do/Q — fill) my(do/Q — fill) prayer(re/H — close) |
| 5 | "be an evening [sac]rifice!" | be an eve ning (do/Q ×4 — reciting) \| sac(ti/H — ANCHOR, director-marked) ri(do/H — single fill) fice!(re/W — close) |
| 6 | "O al[might]y One." | O al (do/Q ×2 — reciting) \| might(ti/H — ANCHOR, director-marked) y(do/H — single fill) One.(re/W — close) |

Examples 1 and 3/4 confirm the exact-fit and expanded schematics
respectively; examples 3 and 4 both land on the 4-syllable/2-middle-fill
shape independently, reinforcing it. Examples 5 and 6 are both 3-syllable
exact-fit cases, not tests of the 2-syllable floor (checked and ruled out
before logging). All six anchors are explained cleanly by the ordinary rule
(monosyllabic backup or direct director mark on the phrase's own stress) —
no semantic-weight override needed anywhere in Phrase D so far.

**Close duration (H vs H· vs W) — pattern holding across two more examples:**
`God` = H, `all.` = H, `words:` = H·, `prayer` = H, `fice!` = W, `One.` = W.
Both `W` instances are vocative/exclamatory lines that clearly conclude
something ("an evening sacrifice!", "O Almighty One!"); every H/H· instance
is a mid-sticheron continuation. Clean confirmation of the same
finality-tracks-W pattern from Phrase B, now with two supporting examples
in Phrase D rather than one. The H vs H· split among non-final examples
remains unresolved.

Still open, not urgent: the literal 2-syllable floor. Two examples given as
candidates (this one and "O Almighty One") both turned out to be 3-syllable
exact-fit cases instead. Not worth chasing further unless one turns up
naturally.

---

### 3.5 Phrase E — structure confirmed

**Tutorial text (verbatim):**

> "Phrase E begins directly with the reciting tone (re) and concludes with
> an accented descending half note on do, followed by a five-note melodic
> pattern (re, mi, re, do, ti.)"

**Structure — six pitches, confirmed:**
- `recite: "re"`
- `cad: ["do", "re", "mi", "re", "do", "ti"]` — an anchor (`do`, accented,
  descending, half note) plus the described five-note pattern (`re, mi, re,
  do, ti`), six pitches in total. This matches the tutorial's own sentence
  exactly, word for word, once read against a fully-counted example.

**Corrected mid-session — logged honestly rather than smoothed over:** this
document briefly revised the figure down to five pitches
(`re, mi, re, do, ti`, dropping the leading `do` anchor) after an initial
reading of the "Apostles" example and its score image seemed to show only
four notes slurred across "pos" plus one on "tles." That reading undercounted
the slur by one note. A fully explicit, note-by-note tally from Bill
("that slur is five notes across 'pos'": `do, re, mi, re, do`, then `tles.`
as a separate sixth note, `ti`) corrected this back to six pitches — which,
satisfyingly, is exactly what the tutorial's prose said in the first place.
**The error was in the intermediate revision, not in the original reading or
the tutorial text.** Worth remembering: melismatic slurs are easy to
undercount by one, even when working carefully from a real example and a
score image — a full explicit tally settles it, a quick read of a slur
marking does not.

**Structural novelty:** still the richest cadence figure in Tone 4 so far —
six pitches, versus Phrase D's three. Shape: rises from the anchor `do` up
to a peak on `mi`, then descends back down through `re` and `do` to `ti`,
which sits a half-step *below* `do` in this key. The cadence resolves below
its own anchor — the mirror image of Phrase D, whose cadence resolved above
its own anchor.

**Worked examples:**

| # | Text | Shape |
|---|---|---|
| 1 | "Apostles." | A(re/Q — reciting) \| pos(do/H — anchor, slurred into a 5-note melisma) [re(Q) mi(Q) re(Q) do(Q) — same slur] tles.(ti/H — close, separate note) |
| 2 | "to you, all-praised Lady" | to(re/Q — reciting) \| you,(do/H — anchor) all(re/Q) praised(mi/Q) La(re/Q + do/Q — 2-note slur) dy(ti/H — close) |
| 3 | "we too, cry aloud to you:" | we(re/Q — reciting) \| too,(do/H — anchor) cry(re/Q) a(mi/Q) loud(re/Q) to(do/Q) you:(ti/H — close) |
| 4 | "Rejoice, chariot of the whole Godhead!" | Rejoice, chariot of the (re/Q ×7 — reciting) \| whole(do/H + re/Q + mi/Q — 3-note slur, ANCHOR) God-(re/Q + do/Q — 2-note slur) head!(ti/W — close) |
| 5 | "when I [call] up[on] Thee!" (LIC) | when(re/Q) I(re/Q) — reciting \| call(do/H + re/Q — 2-note slur, director-marked) up(mi/Q — single note) on(re/Q + do/Q — 2-note slur, director-marked) Thee!(ti/W — close) |
| 6 | "Thy Mother, the mediatrix of life," (Octoechos) | Thy Mo-ther, the me-di (re/Q ×6 — reciting) \| a(do/H + re/Q + mi/Q — 3-note slur, ANCHOR) trix(re/Q) of(do/Q) life,(ti/H· — close) |
| 7 | "so He took the lost sheep up[on] His [shoul]der" | so He took the lost sheep up (re/Q ×7 — reciting) \| on(do/H + re/Q — 2-note slur, director-marked) His(mi/Q — single note) shoul(re/Q + do/Q — 2-note slur, director-marked) der(ti/H· — close) |

**Example 7 confirms example 5's two-melisma pattern independently — and
with the same triggering word.** Both two-melisma examples so far have
"upon" in the cadence text, and in both cases its naturally-stressed second
syllable ("on"/"pon") launches the first melisma group. This is strong
enough evidence now to state with real confidence, not just flag as a
coincidence: **Phrase E's cadence does not appear to be organized around a
single "last internal accent" the way Phrases B and D explicitly are.**
Instead, once the cadence's textual span is established, the six-pitch
figure seems to divide according to however many genuinely stressed content
syllables actually occur within that span — each one launching its own
melisma group — with unstressed function words in between (`up`, `His`)
simply taking single notes. Single-stress cadence texts get one melisma
("Apostles," "Lady," "Rejoice...Godhead," "mediatrix"); texts with two
natural stress points get two ("call...upon," "upon...shoulder"). Both
director-mark pairs land exactly on these two stress points in both
examples, not on the figure's structural endpoints — consistent
confirmation, now twice over, that director marks here track natural word
stress rather than anchor/close position.

**Example 5 introduces a genuinely new compression pattern:** every prior
example had at most one melisma; this one has **two** (`call`, 2 notes;
`on`, 2 notes), with a single-note syllable (`up`) sitting between them.
It's also the first case where the anchor itself is folded into a melisma
rather than standing alone as its own syllable — consistent with
"Apostles," which already showed the anchor can be part of a slur, not
always isolated. The two director marks (`[call]`, `[on]`) land on the
anchor and on the entry point of the *second* melisma group, rather than on
the figure's two structural endpoints (anchor + close) the way earlier
two-mark examples did — a different but equally sensible place for a
director to flag where a new note-grouping begins.

**Example 6's anchor is explained cleanly by the ordinary rule:** "life,"
is a phrase-final monosyllable that backs off to the previous candidate
("a," the stressed syllable of "mediatrix") — same category as "earth,"
"Lord," "God," not a semantic-weight case.

**Close duration, two more data points:** `Thee!` = W (exclamatory,
consistent with the finality pattern), `life,` = H· (mid-sentence, comma
rather than a full stop — consistent with H/H· showing up on non-final
lines and W reserved for genuine conclusions).

Example 2 has only 5 syllables for the 6-pitch figure — one short. The
shortfall compresses onto a single syllable (`La`), absorbing two pitches
(`re, do`) as a small melisma, landing specifically on the figure's
"return" leg (after the peak `mi`, before the final resolution to `ti`)
rather than at the anchor, peak, or close — a sensible place to compress if
a director has to drop a syllable slot, since it preserves the figure's
structurally load-bearing points (start, peak, end).

Example 3 is a clean 1:1 fit — six syllables, six pitches, no melisma at
all. Example 4 packs the same six pitches across only 3 cadence syllables
(`whole`=3 notes, `God`=2 notes, `head`=1 note) — a middle case between the
other two. Together, the four examples now span a full compression range: 2
cadence syllables (max compression, "Apostles"), 3 ("Rejoice...Godhead"), 5
with one small melisma ("Lady"), 6 with none ("we...you:").

**Example 4 resolves the observation raised after example 3:** a
7-syllable reciting section here (`Rejoice, chariot of the`), versus 1
syllable in examples 1–3, confirms Phrase E's reciting body genuinely
varies with phrase length like every other phrase — the 1-syllable pattern
in the earlier examples was just what those particular texts happened to
need, not a structural rule specific to Phrase E.

**Example 4 is also a new, clean instance of the semantic-weight anchor
principle (§4.1):** the anchor lands on "whole," not "Godhead!" — the
phrase's actual grammatically final, exclamatory word. Unlike "earth" or
"Lord" (Phrase B), this is **not** explained by the ordinary
monosyllabic-backup rule — "Godhead" is two syllables, not a lone stressed
monosyllable, so that rule doesn't apply. This is a genuine semantic-weight
case: "whole" carries the real theological weight (asserting the entirety
of the Godhead she bore), and "Godhead" trails as the completing noun
despite its own natural stress — the same adjective-carries-weight,
noun-completes shape as "divine command" (Phrase A). Good cross-phrase
confirmation that the principle isn't specific to Phrases A/B.

Anchor note: "you," serving as the anchor is a mild departure from how
pronouns (me/him/her/them/us) have been consistently STOP-filtered
elsewhere in this tone — but this line is direct address to the Theotokos
("to you, all-praised Lady!"), where "you" carries the phrase's real
theological weight (the act of address itself). Read as consistent with the
semantic-weight anchor principle (§4.1) rather than a contradiction of the
usual pronoun treatment.

Duration shape confirmed from example 1: `H, Q, Q, Q, Q, H` — anchor and
close both `H`, the four middle notes each `Q`. Same "anchor H, fills Q,
close H" template already confirmed across every other phrase in this tone,
now applied to a six-note figure. Structurally close to Tone 1's Phrase D
(a five-pitch figure needing dedicated handling beyond the generic
`distribute()`), though this document is not assuming Tone 4's figure
compresses the same way without more examples across a wider range of
syllable counts.

**Note for the record:** the corrected six-pitch shape matches an early,
unverified guess from this document's first synthesis of the tutorial —
logged only as a coincidence, not as grounds to trust any of Claude's own
unverified readings going forward; the intermediate five-pitch "correction"
in this very section is a clear demonstration of why.

**Not yet worked:** how this figure behaves at syllable counts that don't
happen to pack neatly into one melisma plus one closing syllable — e.g. more
separated syllables, or fewer than the six pitches can comfortably fit.

---

## 4. Cross-cutting findings (both phrases)

### 4.1 The anchor rule — semantic weight, not part of speech

The single most important finding from this session so far. Restated as one
unified principle (refined mid-session from an initial "trailing verb vs.
trailing noun" framing that was too narrow):

> **The anchor lands on the word carrying the phrase's semantic or
> theological weight. Everything after it — regardless of its own part of
> speech or natural English word-stress — rides the cadence pitch as
> completing material, without re-anchoring.**

This reframes Tone 1's originally-documented "polysyllabic trailing word
trap" (§10.4 of that document, always illustrated with trailing verbs like
"announced") as a special case of something broader. "At a divine command"
(adjective-noun) shows the same mechanism as "David announced" (noun-verb):
"divine" and "David" both carry the phrase's theological focus; "command" and
"announced" both trail as completing material despite their own natural
stress.

A secondary, likely reinforcing factor was also observed (Bill's
observation): choosing the earlier semantic anchor tends to also produce a
**musically fuller cadence** (more syllables for the cadence figure to work
with) than anchoring at the true final word would. In "divine command,"
anchoring at "command" would leave only one bare cadence syllable; anchoring
at "divine" yields three. Semantic weight and musical fullness point the same
direction in the examples seen so far — plausibly not a coincidence, but not
yet tested against a case where they'd conflict.

**Methodological caution added mid-session:** before invoking this principle,
first check whether the *ordinary* monosyllabic backup rule (established since
Tone 1) already explains the anchor placement. Two Phrase B examples this
session ("mankind on earth," "Hear me, O Lord!") looked superficially similar
to the semantic-weight cases but were fully explained by the standard rule —
the true final word was a lone stressed monosyllable, not a polysyllabic word
that got skipped. Only the latter needs the semantic-weight explanation.

### 4.2 Cadence close duration (H vs H· vs W) — still an open empirical question

Same "rhythmic balancing" problem documented as Gap A in every prior tone's
analysis. Four data points at count=3 across both phrases, no pattern found:

| Example | Phrase | Close |
|---|---|---|
| "...Angel's prophecy" | A | H |
| "...mankind on earth" | B | H |
| "At a divine command" | A | H· |
| "...gathered...to bury you," | B | H· |

No correlation visible with syllable count, phrase identity, or reciting-run
length (the shortest reciting run and the longest reciting run in this table
both closed H·). At count=4, the picture is a little clearer: W appeared only
on a line that was the genuine close of its structural unit ("Hear me, O
Lord!"), while H appeared on a mid-sticheron line — consistent with, not
contradicting, the finality-driven pattern from Tones 1–3. Logged as open
rather than forcing a rule to fit a handful of points.

---

## 5. Open items carried forward

- **The "Rejoice" anchor exception** (§3.2) — unresolved by agreement; may
  clarify with more corpus evidence.
- **H vs H· at cadence close** — no rule found; needs either more examples or
  audio confirmation.
- **`inton:false` for both A and B** — inferred by phrasing analogy to Tone 3,
  not yet independently corpus- or audio-verified for Tone 4.
- **Phrase C's preparatory-note pitch** for unaccented lead-ins — not yet
  specified by the tutorial text quoted so far.
- **No audio or OCA docx corpus work done yet** (§1.3) — the Tone 4 MP3 set
  and a Tone 4 docx fixture still need to be gathered before this document
  reaches the same evidentiary standard as Tones 1–3.
- **D, E, F, and Final Phrase** — not yet started. The tutorial's prose for
  these (already scanned once, informally, before this document existed) —
  particularly the Final Phrase's two-note prep (`do` then `ti`, ascending,
  the first two-note prep of any tone so far) and Phrase E's six-pitch
  cadence figure — should not be assumed from that earlier informal read;
  they need the same example-by-example treatment as A and B.

---

*Document in progress — compiled from a live working session. Sections will
be added as Phrases C–F and the Final Phrase are worked through with Bill.*
