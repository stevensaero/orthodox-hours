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
| C | ✅ Structure fully resolved after two corrections during live research (8 examples, recategorized by which structural portion each snippet shows); fill-pitch and no-intonation "anomalies" both dissolved as misreadings, not genuine open items |
| D | ✅ Structure and fill/duration patterns confirmed (6 examples); 2-syllable floor unconfirmed but not urgent |
| E | 🔶 Structure confirmed (6 pitches); 7 worked examples covering full compression range; anchor rule differs from B/D (tracks multiple stress points, not single last-accent) |
| F | 🔶 In progress — intonation rule and no-intonation variant both confirmed with real examples; open question on when each fires |
| Final | 🔶 Core structure confirmed; 7 worked examples; anchor rule, close=W, fill duration, and the anchor+fill slur compression pattern all confirmed with repeat examples |
| Bass Harmony | 🔶 Research phase (§6) — full pitch-mapping chart confirmed for all 7 phrases via direct interview; hold-behavior principle found and confirmed for Phrase E, still open for Final Phrase; no code implementation yet |

**No audio or OCA docx corpus work has been done yet this session.** Everything
below comes from the tutorial text and Bill's direct sight-reading of the score
alongside it, in real time, worked example by worked example. This is an
important departure from the Tones 1–3 method, and is addressed directly in
§1.3 below.

---

## 1. Source materials

**Scope note, added mid-session:** this document is specifically about the
**sticheron melody** for Tone 4 (Phrases A–F plus the Final Phrase). A
Tone 4 Troparion example was checked against this research and set aside
deliberately, not overlooked: "Christ God is risen" recites on `re`, not
`do`, and doesn't map onto any of Phrases A–F. This is consistent with how
troparia and stichera commonly use entirely separate melodic formulas
within "the same tone" in this chant tradition — the tone number
identifies a modal/scalar family, not one unified tune shared across every
hymn genre. Every example used to build Phrases A–F has come from
stichera, aposticha, or LIC verses specifically; none from a troparion.
If a future session takes up Tone 4's troparion melody, it should be
treated as its own separate structure, not reconciled against this
document's PH_DEFS.

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

### 3.3 Phrase C — resolved (corrected model, second revision)

**Tutorial text (verbatim, both parts):**

> "The phrase begins with an intonation of a half note on mi, followed by a
> quarter note on re, leading to the reciting tone of do. Preparatory notes
> precede this half note if the phrase begins with unaccented syllables."

> "The cadence of Phrase C is the same as the cadence of Phrase B. (Note,
> however, that the reciting tone, is do for Phrase C, as opposed to re for
> Phrase B)"

**This section has been revised twice during live research, and the full
history is kept here rather than erased, because each revision corrected a
real error rather than just adding detail:**

1. **First draft:** treated the intonation's `mi(H)→re(Q)` as leading into
   a separate reciting-tone section, with a cadence (if any) after that.
2. **First revision:** concluded, from four short examples that seemed to
   go straight from intonation to a 1-note close, that the intonation's `re`
   and a cadence anchor `re` were the same note doing double duty — no real
   reciting section at all in short phrases.
3. **Second revision (this one):** a Phrase F score image showed the
   tutorial's dashed break-mark unambiguously separating *intonation* from
   *reciting tone* in that phrase's schematic — not reciting from cadence.
   Re-examining Phrase C's four short examples against that same convention,
   and applying Bill's own principle that **no chanted phrase ends without a
   cadence**, the correct reading is: **those four examples are partial
   snippets showing only the intonation-into-reciting portion of a longer
   verse. What this document had logged as their "cadence" was actually
   their reciting tone.** Separately, "and Anna" and "bestowed in its
   stead" — previously flagged as anomalies missing an intonation — are
   the mirror case: snippets showing only the reciting-into-cadence tail of
   a longer verse, with the intonation portion simply outside what was
   transcribed. Nothing was ever missing; different snippets were
   illustrating different parts of the same three-part structure.

**Why Phrases A and B never had this ambiguity:** neither has an intonation
step at all — just reciting and cadence, two parts, one possible boundary.
`|` could only ever mean one thing there, so every A and B example really
was a complete verse. Phrase C is the first phrase with three parts, and
introducing a third possible boundary is exactly where a single, undifferentiated
break-mark starts getting reused for different things depending on which
part of the structure a given snippet is illustrating.

**What this correction resolves, not just relabels:**
- **The "all-quarter-note cadence" puzzle in the four short examples** —
  dissolved. Those weren't cadences at all, so there's no puzzle about why
  they lacked an H-duration note; reciting tone is always `Q`, by definition.
- **The fill-pitch "conflict"** — dissolved, not just decided. "Righteousness"
  and "goodness" were never testing cadence fill behavior; they were
  reciting-tone runs, correctly shown as repeated `do/Q`. The only example
  that ever actually exercised real cadence fill was "bestowed in its
  stead," and it showed `re`-fill — matching Phrase B's own fill behavior
  exactly, and matching Phrase F's tutorial schematic (§3.6). There was
  only ever one real data point; it was just misfiled.
- **The "missing intonation" anomaly** — dissolved. "And Anna" and
  "bestowed in its stead" aren't structurally incomplete; they're excerpts
  that simply don't include the intonation portion of their (presumably
  longer) source lines.

**Structure, corrected:**
- `recite: "do"`
- `inton: true` — genuine two-pitch approach (`mi(H) → re(Q)`), unchanged
  from before.
- **Preparatory notes** — unchanged, still confirmed: the syllable
  immediately before the intonation accent is `re`; earlier syllables
  repeat `do` (1 prep → `re`; 2 preps → `do, re`; 3 preps → `do, do, re`).
- **Mi-extension** — unchanged, still confirmed: an extra unaccented
  syllable between the intonation accent and its closing `re` extends the
  `mi` rather than doubling the `re`.
- **Reciting body:** `do(Q)` per syllable — now directly confirmed, not
  just inferred, with a genuine range of lengths seen: 1 syllable ("arms,"
  "fruit"), 2 ("goodness"), 3 ("Righteousness"), up to 6–3 in the two full
  long verses. No confirmed example yet of a true *zero*-syllable reciting
  body (intonation immediately adjacent to the cadence anchor with nothing
  between) — every example so far has at least one reciting syllable, so
  that particular edge case remains untested rather than confirmed either
  way.
- `cad: ["re", "do"]` — **identical to Phrase B, including fill behavior.**
  Corrected from the prior claim that Phrase C used a different "fill
  toward close" rule — that claim rested entirely on the now-reclassified
  reciting-tone examples. The one genuine fill example ("bestowed in its
  stead") fills on `re` (the anchor), exactly like Phrase B's
  `distribute()`. Phrase C's cadence can reuse Phrase B's distribution
  logic directly; it does not need its own dedicated fill rule.
- **Cadence duration:** `H` at the anchor, `H` or `H·` at the close (open,
  same unresolved rhythmic-balancing question as every other phrase — see
  §4.2), `Q` for any fill syllables (matching Phrase B).

**Worked examples, recategorized:**

| # | Text | Shape |
|---|---|---|
| 1 | "held in your [arms]" (intonation→reciting snippet) | held(mi/H) in(mi/Q — extends mi) your(re/Q — intonation's closing re) \| arms(do/Q — RECITING, not cadence; cadence not shown in this snippet) |
| 2 | "the Sun of [Righteousness]" (intonation→reciting snippet) | the(re/Q — prep) Sun(mi/H) of(re/Q — intonation's closing re) \| Right(do/Q) eous(do/Q) ness(do/Q — RECITING, 3 syllables; cadence not shown) |
| 3 | "the most sacred [fruit]" (intonation→reciting snippet) | the(do/Q — prep) most(re/Q — prep) sa(mi/H) cred(re/Q — intonation's closing re) \| fruit(do/Q — RECITING; cadence not shown) |
| 4 | "through the abundance of [goodness]" (intonation→reciting snippet) | through(do/Q) the(do/Q) a(re/Q) — 3 preps: do,do,re — bun(mi/H) dance(mi/Q — extends mi) of(re/Q — intonation's closing re) \| good(do/Q) ness(do/Q — RECITING, 2 syllables; cadence not shown) |
| 5 | "and [when they saw you] [being taken from the earth to] heaven" — full verse | and(do/Q) when(do/Q) they(re/Q) — 3 preps: do,do,re — saw(mi/H) you(re/Q — intonation's closing re) \| being taken from the earth to (do/Q ×6 — RECITING) \| heav(re/H — CADENCE ANCHOR) en(do/H· — close) |
| 6 | "[Lord], I call upon Thee, [hear] me!" (LIC) — full verse | Lord,(mi/H· — intonation accent, director-marked) I(re/Q — intonation's closing re) \| call(do/Q) upon(do/Q) Thee,(do/Q) — RECITING \| hear(re/H — CADENCE ANCHOR, director-marked) me!(do/H· — close) |
| 7 | "[and] Anna" (reciting→cadence snippet, intonation not shown) | and(do/Q — RECITING, tail of a longer line) \| An(re/H — CADENCE ANCHOR) na(do/H — close) |
| 8 | "[be]stowed in its stead." (reciting→cadence snippet, intonation not shown) | be(do/Q — RECITING, tail of a longer line) \| stowed(re/H — CADENCE ANCHOR) in(re/Q — fill, repeats anchor) its(re/Q — fill, repeats anchor) stead.(do/H — close) |

Examples 1–4 now correctly read as intonation-plus-reciting evidence, not
cadence evidence. Examples 5 and 6 remain the only two examples that show
the complete three-part structure in one continuous verse, and both give
clean 2-syllable exact-fit cadences (`re(H) do(H·)`). Examples 7 and 8 are
reciting-plus-cadence evidence: 7 confirms a 2-syllable exact fit again
(matching 5 and 6); 8 is the one example that exercises the fill position,
and it fills on `re`, matching Phrase B exactly.

**Director-mark confirmation carried over from the prior draft:** in
example 6, the two bracketed accents (`[Lord]`, `[hear]`) land exactly on
the intonation accent and the cadence anchor — the two genuine structural
points — the same two-mark pattern Tones 1–3 used for their own two-anchor
Finals.

**Note on the `|` mark, corrected:** this document previously treated
Bill's `|` as marking one consistent boundary (the reciting/cadence split)
offset by one note from the tutorial's own typeset break. That was wrong in
the same way the rest of the section was wrong: the offset wasn't a
one-note quirk — `|` was marking *two different boundaries* across these
eight examples (intonation/reciting in 1–4, reciting/cadence in 7–8),
because each snippet was illustrating a different part of the structure.
The lesson for D, E, F, and the Final Phrase: don't assume a break-mark's
meaning transfers between examples of the same phrase without checking
what portion of the structure each example is actually showing.


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

### 3.6 Phrase F — IN PROGRESS

**Tutorial text (verbatim):**

> "Phrase F begins with an intonation, a half note sung on do, on the first
> accented syllable of the phrase. Unaccented syllables preceding are
> quarter notes, also sung on do and the reciting tone is also do. The
> cadence for Phrase F is identical with the cadence of Phrase C."
>
> "*In Bakhmetev's (Common Chant) arrangement Phrase F is considered a
> variation of Phrase C."

**Structure:**
- `recite: "do"`
- `inton: true` — but **single-pitch**, unlike Phrase C's two-pitch
  `mi(H)→re(Q)` approach. Phrase F's intonation is `do(H)` on the first
  accented syllable, with any preceding unaccented syllables also on `do`
  but at `Q`. Structurally closer to how Tones 1–3's intonations worked (a
  duration change on the reciting pitch itself) than to Phrase C's genuine
  pitch-change approach.
- `cad: ["re", "do"]` — **identical to Phrase C's cadence**, per the
  tutorial's explicit statement, which itself was identical to Phrase B's.

**Relationship to Phrase C:** the two phrases share both their reciting
tone (`do`) and their cadence figure; the only structural difference is the
intonation. The footnote confirms this isn't incidental — Bakhmetev's
Common Chant arrangement treats Phrase F as a variation of Phrase C rather
than a fully independent phrase.

**Relationship to Phrase C's now-resolved items:** Phrase C's fill-pitch
question and its two "missing intonation" examples both turned out to be
artifacts of misreading intonation/reciting and reciting/cadence snippets
as complete cadences (§3.3, second revision). With that correction, Phrase
C's real cadence fill (`re`, from "bestowed in its stead") already matches
Phrase F's own schematic below exactly — this isn't an open question to
re-test in Phrase F, it's already consistent. Worth remembering the
underlying lesson from that correction when reading Phrase F's own
examples, though: check what portion of the structure each snippet is
actually showing before treating a break-mark's position as fixed.

**Three tutorial schematics (not yet worked text examples):**

> Base case: intonation `do(H)` → reciting `do(Q)` → cadence `re(H) do(H)`
>
> With unaccented lead-ins: intonation `do(Q) do(Q) do(H)` → reciting
> `do(Q)` → cadence `re(H) do(H)` (matches the stated rule exactly:
> lead-ins at Q, same pitch, accent at H)
>
> Cadence fill case: `re(H)` anchor, then `re(Q)` filling extra space,
> then `do(H)` close

The third schematic fills on `re` (the anchor), consistent with Phrase C's
now-corrected fill behavior (§3.3) and with Phrase B's own `distribute()`.
Still worth a real Phrase F text example to confirm on its own terms rather
than resting on a generic schematic alone.

**Worked examples confirming the intonation side (from the tutorial's own
labeled image, not yet full verses):**

| # | Text | Shape |
|---|---|---|
| 1 | "O God \| made" | O(do/Q — 1 prep) God(do/H — accent) \| made(do/Q — RECITING) |
| 2 | "for from heav- \| en" | for(do/Q) from(do/Q) — 2 preps — heav(do/H — accent) \| en(do/Q — RECITING) |

Both confirm the intonation rule exactly as stated, with real text rather
than only the generic schematic: unaccented lead-ins at `Q`, same pitch
(`do`) as the accent, accent at `H`. Neither shows a cadence — consistent
with the labeled image itself, which explicitly marks these spans as
"intonation" and "reciting tone" only. Same situation as Phrase C's short
snippets: valuable confirming evidence for the intonation side, even though
they don't reach the cadence.

**A genuinely new, tutorial-acknowledged variant — no intonation at all:**

| Text | Shape |
|---|---|
| "since they were to be with you" | since they were to be with you (do/Q — all reciting, no intonation) |
| "Rejoice, for you alone by your \| childbearing" (Dormition, full verse) | Rejoice, for you alone by your (do/Q ×8 — all reciting, no intonation) \| child(re/H — ANCHOR) bear(re/H — fill, repeats anchor) ing(do/H· — close) |
| "since God was freely born of her without a \| [fa]ther." (Theotokian Dogmatikon, full verse) | since God was freely born of her without a (do/Q ×11 — all reciting, no intonation) \| fa(re/H — ANCHOR, director-marked) her.(do/H· — close) |
| "What place can hold Thy life-bearing \| [bod]y?" (Sunday Octoechos Aposticha, full verse) | What place can hold Thy life-bearing (do/Q ×8 — all reciting, no intonation) \| bod(re/H — ANCHOR, director-marked) y?(do/H· — close) |
| "and brought it to His \| [Fa]ther," (Theotokian Dogmatikon, full verse) | and brought it to His (do/Q ×5 — all reciting, no intonation) \| Fa(re/H — ANCHOR, director-marked) ther(do/H — close) |

Unlike Phrase C's earlier "missing intonation" cases (which turned out to
be ordinary snippets, not a real variant), the tutorial **explicitly states**
that a variant of Phrase F exists which skips the intonation and begins
directly on the reciting tone. What it does not state is when this variant
is used.

**Correction to the length hypothesis, and an honest re-assessment.** An
earlier version of this table compared "reciting length" across all
examples, but that comparison was flawed: for "O God \| made" and "for from
heaven \| en," the counts logged (2 and 3) were actually the *intonation*
portion's length, not the reciting portion's (which was only 1 syllable in
each — "made," "en"). Worse, both of those are partial schematic snippets
(per the tutorial's labeled image, showing only intonation-into-reciting),
so their true total length before any cadence isn't actually known — they
can't be fairly compared to a complete verse on this basis at all.

Once the comparison is restricted to genuine full verses, the picture is
more striking than "length correlates with the variant": **all four real,
complete verse examples now logged — at 8, 11, 8, and 5 syllables — use
the no-intonation variant. None of them show intonation.** The only
evidence that the intonation variant exists at all comes from the
tutorial's own generic illustrative schematic, not from any actual chanted
text seen so far. The new 5-syllable example, shorter than the previous
three, still skipping intonation, actually weakens rather than strengthens
a length-threshold story — if length alone were the deciding factor, a
threshold might be expected to show up somewhere in this range, and it
hasn't. **Open question, stated plainly rather than resolved:** is the
intonation variant a live option we simply haven't sampled yet in real
chant, or is it closer to a documented-but-rarely-used case? A real,
complete verse example that actually uses the intonation would settle this
properly.

**Cadence duration note:** "Father" (this example) closes on plain `H`,
not `H·` — a fourth data point in the ongoing, still-unresolved H-vs-H·
question tracked across every phrase (§4.2), not specific to Phrase F.

**Cadence confirmed, with a duration wrinkle worth flagging rather than
smoothing over:** the "childbearing" cadence maps cleanly onto
`cad:["re","do"]` (anchor `re`, fill repeating the anchor `re`, close `do`)
— consistent with Phrase C's corrected model. But the fill (`bear`) is `H`,
not `Q`. Phrase B's single-fill-at-count-3 example ("mankind on **earth**")
and Phrase C's corrected single-fill-at-count-4 example ("be**stowed** in
its stead") were both `Q`; Phrase D's single-fill-at-count-3 example
("pre-eternal **God**") was `H`. This example matches Phrase D's duration
pattern, not Phrase B/C's — despite Phrase F's cadence pitches being
identical to C's. One data point; logged as an open question rather than a
rule.

---

### 3.7 Final Phrase — IN PROGRESS

**Tutorial text (verbatim, as printed — contains a known error, see below):**

> "The Final Phrase for the sticheron begins directly with the reciting
> tone (re) and concludes with a final cadence, beginning on the last
> internal accented syllable. The cadence is prepared by two ascending
> quarter notes, do and ti."

**Corrected reading (Bill, confirmed against every example and score
check):**

> "...The cadence is prepared by two **descending** quarter notes, do and
> ti."

The printed pitches and their order (`do` then `ti`) are correct; only the
tutorial's own word "ascending" is wrong. This is the first confirmed
factual error in the tutorial's prose itself (as opposed to an ambiguity in
Claude's reading of it) — worth keeping both the original and corrected
text on record rather than silently replacing one with the other.

**Structure:**
- `recite: "re"` — same reciting pitch as Phrase B.
- Anchor rule stated as "the last internal accented syllable" — the same
  phrasing used for Phrases B and D, both of which turned out to follow the
  standard single-anchor search (with Phrase B's one open "Rejoice"
  exception). This is a different phrasing than Phrase E's tutorial text,
  which never states a last-accent rule at all and turned out to track
  multiple stress points instead. Worth watching whether the Final Phrase
  actually behaves like B/D here, or like E, rather than assuming from the
  phrasing alone.
- **Prep notes:** "prepared by two ascending quarter notes, do and ti" —
  the first two-note prep of any phrase in this tone (every other phrase's
  prep, where one exists, has been a single note or a stepwise run building
  toward an intonation, not a fixed two-note figure preparing a cadence
  directly).

**Prep note direction — corrected by Bill's direct score-checking, not
assumed:** the tutorial's own text is simply wrong here. "Prepared by two
ascending quarter notes, do and ti" states the pitches in the correct
performed order (`do` then `ti`) but mislabels the direction — every
example and score check confirms this is a **descent**, `do` down to `ti`,
not an ascent. This is a different resolution than an earlier draft of
this section proposed (which guessed the sequence itself might be reversed
— performed as `ti` then `do` — to make "ascending" literally true).
That guess is now known to be wrong: the sequence as written is correct;
the tutorial's direction label is the error. Confirmed directly against
the score, not inferred from pitch relationships elsewhere in the tone.

`prep: ["do", "ti"]`, descending, both `Q`.

**Cadence structure — confirmed by Bill:** `cad: ["do", "ti", "la"]` — a
three-pitch figure: `do(H)` anchor, `ti` as the stretchy fill position
(`H` when alone, expanding to repeated `ti(Q)` for extra syllables — the
same anchor/fill/close template already established everywhere else in
this tone), and `la(W)` as the close.

**Two things worth drawing out now that the shape is settled:**

1. **The prep previews the cadence's own opening motion.** `prep:["do","ti"]`
   and the cadence's own first two pitches (`do`, then `ti`) are the same
   descending pair, performed twice — quickly as the prep (`Q, Q`), then
   again more slowly as the cadence proper (`H`, then the stretchy `ti`
   fill) — before finally continuing down to `la`. No other phrase in this
   tone has a prep that echoes the cadence's own opening interval this
   directly.
2. **The close should be reliably `W`, not an open question like every
   other phrase's.** Every other phrase's H-vs-H·-vs-W question (§4.2) has
   been tied to whether a *given instance* happens to land on the true
   final line of a sticheron — which varies example to example. The Final
   Phrase, by definition and by the confirmed rotation rule (§2), is
   *always* the sticheron's actual last line. So its close isn't
   probabilistically final the way another phrase's instance might be —
   it's structurally guaranteed to be. Worth treating `la(W)` as the
   expected default here, not as one more open duration question to
   re-litigate the way A through F's closes have been.

**Worked example:**

| # | Text | Shape |
|---|---|---|
| 1 | "Chris-tians and save our souls." | Chris(re/Q — reciting) \| tians(do/Q — prep 1) and(ti/Q — prep 2) save(do/H — ANCHOR) our(ti/H — fill) souls(la/W — close) |
| 2 | "the \| Theotokos" | the(re/Q — reciting) \| The(do/Q — prep 1) o(ti/Q — prep 2) to(do/H + ti/H — 2-note slur: cadence ANCHOR + fill merged onto one syllable) kos(la/W — close) |
| 3 | "have joined together things on earth with those on high!" (Dormition) | have joined together things on (re/Q ×7 — reciting) \| earth(do/Q — prep 1) with(ti/Q — prep 2) those(do/H — ANCHOR) on(ti/H — fill) high!"(la/W — close) |
| 4 | "[Hear] [me], O Lord!" (LIC) | Hear(re/H + do/Q + ti/Q — 3-note slur: reciting + BOTH prep notes merged onto one syllable, director-marked) \| me(do/H — ANCHOR, director-marked) O(ti/H — fill) Lord!(la/W — close) |
| 5 | "for Thou art good and the [Lov]er of man." | for Thou art good (re/Q ×4 — reciting) \| and(do/Q — prep 1) the(ti/Q — prep 2) Lov(do/H — ANCHOR, director-marked) er(ti/Q — fill 1) of(ti/Q — fill 2) man.(la/W — close) |
| 6 | "Glory to Thee, O all-[pow]erful Lord!" | Glory to Thee, (re/Q ×4 — reciting) \| O(do/Q — prep 1) all(ti/Q — prep 2) power(do/H — ANCHOR, director-marked) er(ti/Q — fill 1) ful(ti/Q — fill 2) Lord!"(la/W — close) |
| 7 | "granting the world life, incorruption and great [mer]cy." | granting the world life, incorruption (re/Q ×9 — reciting) \| and(do/Q — prep 1) great(ti/Q — prep 2) mer(do/H + ti/H — 2-note slur: cadence ANCHOR + fill merged onto one syllable, director-marked) cy(la/W — close) |

**Implementation note, added after code was written:** example 4's
research-level record was always correct, but the first implementation of
`PH_DEFS[4]`'s Final Phrase logic (§ code, `pointing.js`) got this specific
case wrong — its guard only ever peeled the last 2 body syllables into the
fixed prep pair, and fell back to a lazy single-`ti` case whenever fewer
than 2 syllables existed before the anchor (as happens here, with only
"Hear" available before "me"). Bill caught this directly against the live
tool's actual rendering, not against this document — the tool was showing
a lone `ti` chip instead of the confirmed `re·do·ti` melisma. Fixed in
`v0.25.33` using the same melisma-compression principle Phrase E's
single-bracket case already uses. Recorded here as a reminder that a
correct research record doesn't guarantee a correct first implementation —
worth re-checking code against confirmed examples directly, not just
assuming a faithful port.

Example 7 repeats example 2's ("the Theotokos") exact compression shape —
one syllable short of the full 6-position figure, with the cadence's own
anchor and fill merging onto a single syllable via a slur, while the prep
and close each keep their own syllable. Now confirmed twice, independently,
which is meaningfully stronger evidence than one example alone that this is
a real, repeatable compression strategy for this phrase rather than a
one-off reading.

Example 6 is a second confirming instance of the 2-fill shape (both `Q`,
matching example 5), and the anchor rule again — "Lord!" is the true final
word, monosyllabic, backs off cleanly to "power(ful)." No new findings
here; a clean, straightforward reinforcement of what's already settled.

Example 5 is the first Final Phrase example with the fill position
appearing twice rather than once, and it confirms rather than complicates
the established pattern: two fills, both `Q` — matching the same
"single fill = H, multiple fills = Q each" shape already seen in Phrase D.
The Final Phrase's fill behavior is now consistent across every count
observed: one fill → `H` (examples 1, 3, 4), two fills → `Q` each (this
example). Anchor rule checks out the same way again — "man." is the true
final word, monosyllabic, backs off cleanly to "Lov(er)."

Example 4 is the same stock LIC closing line used as a worked example for
nearly every other phrase this session (A, B, D, and a variant for C) —
good to see it complete the set for the Final Phrase too. It shows the
figure's most compressed realization yet: the reciting tone and both prep
notes (`re, do, ti`) all merge onto the single syllable "Hear," with the
cadence proper (`do, ti, la`) playing out one note per syllable across
"me, O, Lord!" Confirms the cadence cleanly against the corrected pattern
(anchor `H`, fill `H`, close `W`) with no new wrinkle. The two director
marks — on "Hear" and "me" — land on the two genuinely salient points: where
the compressed opening material begins, and where the cadence itself
launches.

Example 2 is one syllable short of the full 5-position figure (`The-o-to-kos`
= 4 syllables, where prep+cadence ideally wants 5), and shows where the
compression lands: the cadence's own anchor and fill (`do`, `ti`) merge
onto a single syllable (`to`) as a 2-note slur, while the prep (`The`, `o`)
and the close (`kos`) each keep their own syllable. The anchor lands on
"to," matching the natural liturgical stress of "Theotokos"
(thee-oh-**TO**-kos) — consistent with the standard anchor search already
confirmed in example 1, not a new exception.

Example 3 repeats example 1's exact 5-position fit (prep, prep, anchor,
fill, close, no compression needed) and confirms the anchor rule the same
way — "high!" is the true final word, monosyllabic, and backs off cleanly
to "those" via the standard rule, same category as example 1's
"souls"→"save."

**Fill duration confirmed, not contradictory.** An earlier draft of this
section flagged an apparent contradiction here — example 1's fill
originally logged as `Q`, example 3's as `H`, same structural position in
the same phrase. That was a transcription typo in example 1 (corrected by
Bill: "our" is `ti(H)`, not `ti(Q)`), not a real inconsistency. With the
correction, both examples agree: the Final Phrase's single fill is `H`,
matching Phrase D's and Phrase F's "childbearing" pattern, not Phrase B/C's
`Q` pattern.

An exact 5-position fit against `prep:["do","ti"] + cad:["do","ti","la"]`,
no compression needed. Two things this confirms, one open item it settles,
and one new data point:

- **Anchor rule settled:** "souls" is the phrase's actual final word,
  monosyllabic, and would carry its own natural stress — but it backs off
  cleanly to "save" via the ordinary monosyllabic-backup rule (same
  category as Phrase B's "earth"/"Lord," Phrase D's "God"/"all"). This
  confirms the Final Phrase follows the standard B/D-style single-anchor
  search, not Phrase E's multi-stress tracking — resolves the open
  question raised when the tutorial text was first read.
- **Close confirmed at `W`**, exactly as predicted from the structural
  reasoning above (guaranteed finality, not a probabilistic question) —
  good to see the reasoning hold up in a real example, not just in theory.
- **Fill duration:** the fill (`our`) is `H` — matching Phrase D's and
  Phrase F's "childbearing" single-fill pattern, not Phrase B/C's `Q`
  pattern. (An earlier draft of this section had this logged as `Q` due to
  a transcription typo, later corrected by Bill — see the note after
  example 3's table entry.)

**Note for the record:** an early, unverified synthesis of this tutorial —
made before Bill began providing verified quotes, and already flagged
several times in this document as a source to treat cautiously — described
a two-note prep involving `do` and `ti` here, calling it "ascending." The
two pitches involved were right; the direction was wrong, same as the
tutorial's own text turned out to be. Worth stating plainly rather than
counting this as a win: an early guess that repeats the source text's own
error isn't independent confirmation of anything. The standing count
remains what it was — this document has done better trusting Bill's direct
score-checking over any of Claude's own early readings, whether from the
tutorial's prose or from Claude's synthesis of it.

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

- **The "Rejoice" anchor exception** (§3.2, Phrase B) — unresolved by agreement; may
  clarify with more corpus evidence.
- **H vs H· at cadence close** — no rule found across any phrase (A, B, C,
  D, E all show both); needs either more examples or audio confirmation.
  Tracked per-phrase in each section rather than restated here.
- **`inton:false` for Phrases A and B** — inferred by phrasing analogy to
  Tone 3, not yet independently corpus- or audio-verified for Tone 4.
- **No audio or OCA docx corpus work done yet** (§1.3) — the Tone 4 MP3 set
  and a Tone 4 docx fixture still need to be gathered before this document
  reaches the same evidentiary standard as Tones 1–3.
- **Phrase D's 2-syllable cadence floor** — the tutorial states "two or
  more syllables" for the 3-pitch cadence, but every example given so far
  has been either the 3-syllable exact fit or 4+-syllable expanded case.
  Not urgent (per Bill), but genuinely untested.
- **Phrase E's anchor-selection logic** — confirmed to differ from B/D:
  tracks however many genuinely stressed content syllables fall within the
  cadence's textual span (one melisma per stress point) rather than a
  single last-internal-accent search. Well-evidenced (two independent
  two-melisma examples, both triggered by "upon") but still worth treating
  as an active finding rather than fully closed, given how much Phrase C's
  own history in this document shows initial readings needing correction.
- **Phrase F** — in progress. Cadence and reciting-tone rules inherited from
  Phrase C should not be assumed identical in every particular (fill
  behavior already looks consistent from the tutorial's own schematic, but
  needs real text examples per the prime directive).
- **Final Phrase** — not yet started. An early, informal scan of the
  tutorial (before this document existed) suggested a two-note ascending
  prep (`do` then `ti`) — the first two-note prep of any tone so far. Given
  this document's own history of informal early reads needing correction
  (Phrase C twice, Phrase E's pitch count once), this should be treated as
  a hypothesis to check, not a finding to build on.

---

## 6. Bass Harmony (BASS_RULES[4])

**Method:** conducted as a direct interview, phrase by phrase, mirroring
exactly how the Tone 2 tenor voice was built (see that session's precedent:
prime directive applies to harmony voices just as much as to alto phrase
logic — no cross-tone assumption, and "hold" behavior specifically requires
its own independent verification per tone, never inherited just because a
tone has a `BASS_RULES` entry at all). Bill read every value directly off
the score (short tutorial snippets for the initial pass; the full LIC Tone 4
score for the hold-behavior questions specifically, since the tutorial only
gives snippets).

**Confirmed chart, all seven phrases:**

| Phrase | prepMap (→ inton) | inton | recite | prepMap (→ cad) / cadMap | preslurMap | hold |
|---|---|---|---|---|---|---|
| A | — | — | sol | do:do | — | n/a (no melisma in this phrase) |
| B | — | — | sol | re:sol, do:do | — | n/a |
| C | do:do, re:do | mi:do, re:ti | do | re:sol, do:do | — | n/a |
| D | — | — | do | ti:sol, do:sol, re:sol | — | n/a |
| E | — | — | sol | *positional* `do·do·do·ti·do·sol` under alto `do·re·mi·re·do·ti` | — | confirmed — see below |
| F | — | — | do | re:sol, do:do | — | n/a |
| Final | — | — | sol | **prep** `do:sol, ti:sol` → **cad** `do:do, ti:mi, la:la` | — | open (Theotokos case not yet checked) |

**Key structural findings:**

- **Phrase C's intonation needed splitting into two sub-mappings, not one.**
  Alto `re` appears twice in Phrase C (once as the immediate prep before the
  `mi` accent, once as the intonation's closing note after it), and bass
  gives it two *different* pitches (`do` before, `ti` after). A flat
  pitch-keyed map can't express this — confirmed the same "position matters,
  not just which alto pitch is sounding" lesson the alto research already
  learned the hard way.
- **Phrase E's cadence is positional, not pitch-keyed, for the same reason,
  more severely.** Alto `re` appears twice in the six-pitch figure (rising
  to the peak, then descending from it) and bass gives each occurrence a
  different pitch (`do` then `ti`). `cadMap` (a flat alto-pitch→bass-pitch
  lookup) cannot represent this at all; Phrase E's bass, like its alto,
  needs a positional sequence keyed to figure-position, not alto pitch
  identity.
- **Bass converges to unison with alto at both ends of the Final Phrase's
  cadence** (`do` at the anchor, `la` at the close), diverging only at the
  middle (`ti`→`mi`). Logged as an observation, not assumed to generalize.
- **The Phrase B/F cadence bass mapping is identical** (`re:sol, do:do`)
  despite the two phrases reciting on different pitches (`sol` vs `do`) —
  suggesting the cadence bass may be tied to the cadence figure itself
  rather than to the reciting pitch, though this is inference from two
  data points, not independently confirmed.

**Hold behavior — a real, confirmed principle, not a per-tone toggle:**

Tone 2's tenor session treated "hold" (whether a voice sustains one note
through an alto melisma rather than re-articulating) as needing its own
independent per-tone gate, since Tone 1's hold behavior could not be assumed
for Tone 2. Checking this directly against the Phrase E LIC score example
"when I [call] up[on] Thee!" produced a cleaner answer than expected:

> Under "call" (alto slur `do(H)·re(Q)`, positions 0–1 of the six-pitch
> figure): bass is `do` at **both** positions — confirmed as a single
> sustained dotted half, not two separate attacks.
>
> Under "on" (alto slur `re(Q)·do(Q)`, positions 3–4): bass moves
> `ti→do` — two genuinely different pitches, confirmed to re-articulate
> (slur with bass's own two notes), not hold.

**A third confirming data point, from the Final Phrase's own prep melisma**
("[Hear] [me], O Lord!" — the same case whose alto pointing needed a real
bug fix, see below): alto's `re(H)·do(Q)·ti(Q)` sums to 4 beats, exactly a
whole note's duration, and every one of those three alto pitches maps to
the identical bass pitch (`sol`, per the confirmed `recite` and `prepMap`
entries) — no pitch change anywhere in bass across the whole span, so bass
holds a single whole note, not three re-struck notes on the same pitch.

**Confirmed as a real, settled principle now, not just a hypothesis: hold
isn't an independent rule requiring its own gate at all — it's simply what
happens automatically when adjacent positions in bass's own line happen to
share a pitch.** Same bass pitch throughout → natural sustain. Different
bass pitch → bass has no choice but to move. Three consistent data points
across two different phrases (E's two cases, Final Phrase's one) is enough
to treat this as settled rather than still-open.

**A genuine prediction, not yet confirmed, follows for the one remaining
open case:** the Final Phrase's "Theotokos" cadence slur (alto `do+ti` as a
2-note slur on "to") has an already-confirmed bass mapping of `do→do,
ti→mi` — **two different bass pitches**. If the hold principle holds here
too, bass should **re-articulate** (`do→mi`) under that slur, not sustain —
the opposite of the "Hear" case just confirmed. This is a real prediction
from the principle, worth checking against the score directly rather than
assuming it holds just because the general principle now looks solid.


**Duration — bass appears to mirror alto's rhythmic value position-by-
position.** Confirmed directly: alto's "Thee!" closing the LIC clause "when
I call upon Thee!" is a whole note (`W`), and Bill flagged that the tool's
own duration engine was giving `H` there — checking, this was **not** a
bass-specific bug; it's the same open, tone-wide "H vs H·  vs W at cadence
close" question already logged throughout this document for every phrase's
alto line (§4.2 and per-phrase notes), inherited by bass simply because
bass's duration engine defaults every phrase's close the same conservative
way Tone 1's own Phrase B/C code already does ("close: H default, W by
rhythmic engine TBD"). Checked directly whether punctuation predicts it,
since "Thee!" ends in an exclamation mark: it does not — "Lord, I call upon
Thee, hear me!" (Phrase A) also ends in "!" and closes on plain `H`, while
"Hear me, O Lord!" (Phrase B, the very next clause of the same LIC framing)
also ends in "!" and closes on `W`. Same punctuation, opposite outcomes.
Whatever actually determines this (genuine liturgical/textual completion,
apparently, based on which clause is the true end of a larger unit) isn't
derivable from the bare text alone — logged as still open, not a new
problem specific to bass, per Bill's direction to note it and move on
rather than force a resolution now.

**Confirmed so far this session:** the full pitch-mapping chart above for
all seven phrases; the Phrase C and Phrase E positional-mapping findings;
the hold-behavior hypothesis (one confirmed phrase, Phrase E).

**Still open:**
- The hold principle is now confirmed (three data points), but its specific
  **prediction** for the Final Phrase's "Theotokos" 2-note slur (bass should
  re-articulate `do→mi`, not sustain) has not yet been checked against the
  score directly.
- The H-vs-H·-vs-W close-duration question, tone-wide, unresolved (as
  above) — affects bass identically to alto since bass's duration engine
  is designed to mirror alto's rhythmic value.

**Implementation — `BASS_RULES[4]` (added after the research above):**

Written directly from the confirmed chart, with two real design decisions
found only by tracing the code carefully rather than assumed safe:

1. **Phrase E's cadence is encoded as `cadPositional`, a plain array indexed
   by position within the six-pitch figure, not a pitch-keyed `cadMap`.**
   A flat map cannot express alto's `re` getting two different bass answers
   depending on where it falls in the figure — confirmed this was a real
   requirement, not just a convenience, when the standard map-based
   derivation was traced against the "call"/"on" example and gave the wrong
   answer for the second `re`.
2. **A real bug was caught while building this, not before:** the
   compressed Final Phrase prep-melisma (the "[Hear] [me], O Lord!" case,
   already a confirmed alto research example) labels all three of its notes
   `role:"prep"` on the alto side, including the reciting-transition `re`
   that got folded in when too few syllables were available. The generic
   bass substitution looks up `prep` roles in `prepMap`, which only has
   `do`/`ti` — so `re` fell through to an unmapped pass-through, giving the
   wrong bass pitch. Fixed with a Tone-4-Final-specific check
   (`role==="prep" && pitch==="re"` → use `recite` directly) rather than
   restructuring the alto role system.

**The hold question is resolved architecturally, not with a new rule.**
Tenor already has a proven mechanism for exactly this situation —
`deriveTenorRolesWD()` does a 1:1 pitch map, then collapses any run of
notes sharing the same syllable text *and* the same resulting pitch into
one held note, gated per tone (`TENOR_HOLD_TONES`) so it's never assumed
without verification. Building an analogous `deriveBassRolesWD()` +
`BASS_HOLD_TONES` (gated to Tone 4 only — bass hold has not been checked
for Tones 1/2 and must not inherit tenor's verification) reproduces both
confirmed hold cases automatically, with no special-casing beyond the
shared collapse logic: once "Hear"'s three notes correctly resolve to the
same bass pitch (`sol`), they collapse into one whole note on their own;
"call" (bass `do·do`, same pitch) collapses into a dotted half; "on" (bass
`ti·do`, different pitches) does not collapse, correctly re-articulating.
Verified directly via a standalone reproduction of the collapse logic
against both examples before wiring it into the component.

**Also found and fixed while wiring this in:** two *other* copies of the
same bass-substitution logic existed independently — one in the visual
chip-rendering path, one in the score-print payload builder (`buildScorePayload`)
— each a separate, manually-synced twin of the same mapping, exactly the
kind of drift risk already documented for tenor. Neither had any
hold-collapse logic at all, meaning even after fixing the audio path,
"Hear" would have kept rendering wrong visually and in print. Consolidated
all three consumers onto the single `deriveBassRolesWD()` function.

**Not yet done:**
- `TENOR_RULES[4]` and `SOPRANO_MAP` support — this session covered bass
  only, per the explicit scope set when Tone 4 alto pointing shipped.
- The score-print visual rendering of a held bass note (spanning multiple
  alto positions, via the new `spanStart`/`spanCount` fields mirroring
  tenor's own pattern) has not been visually verified end-to-end — only
  the underlying data structure was updated to match tenor's existing
  convention.
- Comparing the actual rendered tool output against Bill's printed LIC
  score, phrase by phrase — the explicit next step, not yet done.

## 7. Soprano Harmony

Much simpler than bass, and confirmed in one exchange: soprano uses a single
global `SOPRANO_MAP` (a fixed diatonic third above alto) shared across every
tone in this set, rather than a per-tone rule table like `BASS_RULES`/
`TENOR_RULES`. Bill confirmed three pairs directly (`ti→re`, `do→mi`,
`re→fa`), all matching the existing map exactly. The remaining pitches
Tone 4's alto uses (`mi→sol`, needed for Phrase C's intonation accent and
Phrase E's peak; `la→do`, needed for the Final Phrase's cadence close)
weren't individually re-named in that exchange — logged here as covered by
Bill's general characterization ("a clone of alto up two, follows all
holds/melismas") and by the map's existing Tone 1/2 verification, not
overstated as separately confirmed per-pitch.

Because `lineToNotes_soprano()` transposes alto's already-fully-computed
`rolesWD` directly through this map, soprano automatically inherits every
hold, melisma, and duration alto has — no separate soprano-specific
derivation or hold-collapse logic needed, unlike bass and tenor. Tone 4
added to `SOPRANO_TONES`; no new `SOPRANO_MAP` entries required.

**Not yet done:** `TENOR_RULES[4]` — the last remaining voice.

---

*Document in progress — compiled from a live working session. Sections will
be added as Phrases C–F and the Final Phrase are worked through with Bill.*
