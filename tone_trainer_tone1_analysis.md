# Tone 1 Obikhod Common Chant — Findings & Build Record

*Tone Trainer sub-project · `src/components/tone-trainer.jsx`*
*Compiled: May 2026 from extended build sessions*

This document is a **look-back record and forward guide** for anyone building
additional tones into the trainer. It captures what was assumed, what was
verified, what the primary sources actually showed, and where honest uncertainty
remains. Read alongside `tone_trainer_notes.md` and `SYLLABIFIER_SPEC.md`.

---

## 1. Primary sources used

### Tutorial text
**Drillock & Ealy, "An Approach to Singing the Tones of the Obikhod"** — the
authoritative prose description of Common Chant phrase structure, cadence figures,
and reciting-tone rules. All phrase definitions and rotation logic are traced here.
The tutorial is the *theory*; the score and recordings are the *practice*.

### Sheet music
**`LIC/t1-lic-obikhod-tt.pdf`** (Google Drive) — the full four-part score for
the Lord I Call psalm verses with inserted stichera, arranged from L'vov/Bakhmetev,
Tone 1 Obikhod. This is the **authoritative source for note values and pitch
assignments**. It resolved the critical cadence distribution question (see §4).
Note: the PDF text layer contains rhythm symbols (œ = quarter, ˙ = half,
ϖ = whole, −˙ = dotted half) but NOT pitches — pitch identity requires visual
staff reading, not text extraction.

### Audio recordings
**`LIC/Tone1a.mp3`** (Google Drive) — SATB recording of the Lord I Call psalm
verses with stichera, Tone 1. Used to attempt verification of note-to-syllable
mapping. Finding: **SATB recordings are unreliable for automated pitch extraction**
because multiple simultaneous voices blend and confuse monophonic pitch trackers
(pyin, spectral peak). The bass voice dominated the frequency analysis in the
150-500Hz range. The recording is useful for *hearing the rhythm and syllable
grouping* but not for automated pitch analysis.

**`tone1_unison.mp3`** (Google Drive, in a different folder) — a unison recording
of a different Tone 1 sticheron (Meeting of the Lord). This was analyzed early in
the project and gave usable pitch data for the reciting tone calibration, but it
covers a different sticheron text, not the Lord I Call psalm verses.

**Key lesson for future tones:** for automated pitch analysis, you need a
**monophonic/unison recording** of the specific text being analyzed. SATB
recordings cannot be reliably analyzed with standard pitch trackers. The OCA
website (media.oca.org) provides isolated recordings but the domain is not in
the network allowlist for this environment — Drive uploads are required.

**Important insight:** In moveable-do Obikhod chant, **absolute pitch is
irrelevant**. The solfege relationships (re is a whole step above do, ti is a
half step below do, la is a minor third below do) are fixed regardless of the
key the choir sings in. Pitch calibration from recordings is therefore unnecessary
for building the pointing engine — the tutorial's solfege labels are the authority.
This was a detour that was caught and corrected.

---

## 2. Phrase structure and rotation (Tone 1)

### What the tutorial says
Tone 1 Common Chant uses four phrase types in rotation, plus a Final Phrase for
the last line:

| Label | Reciting tone | Cadence figure |
|-------|--------------|----------------|
| Phrase A | re | ti → [back to re, prep on ti] |
| Phrase B | do | do → re → ti |
| Phrase C | re | do → ti |
| Phrase D | do | ti → do → re → do → [ti] |
| Final | re | do → ti → la |

**Rotation:** A · B · C · D · A · B · C · D · … with the last line always Final.
If the sticheron has 6 lines: A · B · C · D · A · Final.

### What was verified vs. assumed

**Verified from tutorial text:** the phrase labels, their reciting tones, and the
cadence figures as 5-note sequences. The rotation rule (A-B-C-D repeating,
last line = Final) is taken directly from the tutorial.

**Verified from the LIC score (t1-lic-obikhod-tt.pdf):** the note values — see §4.

**Assumed (not independently verified per phrase):** the specific prep note
assignments for each phrase. Phrase A's prep-on-ti was verified from the Drillock
& Ealy tutorial worked example. The other phrases' prep notes are taken from the
tutorial text and encoded in the `PHRASES` object in `tone-trainer.jsx`.

**The `PHRASES` object** (authoritative in the component) encodes:
```javascript
{
  A:     { recite: "re", prep: "ti",  cad: ["do"] },
  B:     { recite: "do", prep: null,  cad: ["do","re","ti"] },
  C:     { recite: "re", prep: null,  cad: ["do","ti"] },
  D:     { recite: "do", prep: null,  cad: ["ti","do","re","do","ti"] },
  Final: { recite: "re", prep: null,  cad: ["do","ti","la"] },
}
```

**Critical distinction: `prep` and `cad` are structurally separate and fire
through different timing paths in `lineToNotes`.** They must never be conflated:

- `prep` is a single pitch note that fires **before the anchor** — one quarter
  note on the prep pitch, immediately preceding the cadence. It belongs to no
  cadence syllable; it is a melodic approach note.
- `cad` is the array of pitches **distributed across the cadence syllables**
  starting from the anchor. The `distribute()` function assigns these pitches to
  syllables one-to-one.

Phrase A has `prep: "ti"` and `cad: ["do"]` — the ti is a quarter-note approach,
then the single cadence syllable (the anchor) gets do. An earlier version of this
document incorrectly showed `cad: ["do","ti"]` for Phrase A — that was a
documentation error, not a code error. The code was correct. If `ti` were placed
inside `cad`, `distribute()` would try to assign it to a cadence syllable and
produce wrong pitch distribution.

**For future tones: encode prep notes in `prep`, never in `cad`.**

For future tones: this object is the single point of truth for phrase definitions.
Each tone needs its own equivalent object with its own reciting tones and cadence
figures.

---

## 3. The anchor rule (cadence placement)

### The pointing pipeline — two distinct problems

Before getting into the anchor rule specifically, it helps to see the full
pointing pipeline and where the hard problems live:

```
syllabifier / lexicon
      ↓
  where is the stress in each word?          ← LOOKUP PROBLEM
  (answered by syllable-table.json +
   name-residue.json + CMU dictionary)
      ↓
  walk BACKWARD from phrase end —
  find the last internally stressed
  syllable (after STOP filtering)            ← STRUCTURAL PROBLEM
      ↓
  that is the ANCHOR — mark it
  (cadence figure begins here)
      ↓
  walk FORWARD from phrase start —
  find the first stressed syllable
  [ Phrases A and C only ]                   ← STRUCTURAL PROBLEM
      ↓
  that is the INTONATION — mark it
  (half-note on reciting pitch before
   the body resumes)
```

The **lookup problem** and the **structural problems** fail independently:
- A *lookup error* (wrong stress assignment in the lexicon) makes the wrong
  syllable visible to the structural pass — e.g. `incense` with stressIdx=1
  offered `cense` as a candidate when `in` was correct.
- A *structural error* (wrong decision about which candidate to pick) can occur
  even when every word's stress is correctly known — e.g. the polysyllabic
  trailing verb trap where `announced` is correctly stressed on `nounced` but the
  director backs off to `David` for phrase-structural reasons.

These two error classes surface differently in the comparison harness: lookup
errors show as a wrong syllable *within* the right word; structural errors show
as the anchor landing on an entirely different word.

The intonation pass is independent of the anchor pass — it runs forward while
the anchor runs backward, and applies only to Phrases A and C (in Tone 1). In
Tone 2, Phrase A has no intonation (`inton: false` in `PH_DEFS`) — the
intonation condition is per-tone, not global. This was a bug in early versions
(hardcoded `phrase==='A'||phrase==='C'`); fixed in v0.8.0 to use
`PH_DEFS[activeTone][phrase].inton`.

---



The **cadence anchor** is the syllable where the melody breaks away from the
reciting tone and begins the descending cadence figure. Everything before it
recites on one pitch; from the anchor onward the melody moves through the
cadence notes. Getting the anchor right is the most musically critical decision
in the entire pointing process — one syllable wrong shifts the entire melodic
shape of the phrase.

---

### 3.2 The director's mental workflow — step by step

This is how a director actually locates the anchor when looking at a phrase of
text. It is a right-to-left scan with a series of filters.

**Step 1: Read the phrase aloud naturally.**
Let the natural English word-stress determine which syllables are stressed. Do
not try to force stress onto function words. "Come, let us also go to meet Christ
with divine songs" — the natural stresses land on *Come*, *go*, *meet*, *Christ*,
*di-VINE*, *songs*.

**Step 2: Build the candidate list — scan left to right, collect every accented
(stressed) syllable that is NOT a function word.**

The **function word filter** (STOP list) eliminates grammatical words that never
carry phrase accent in chant:
- Articles: *the, a, an*
- Prepositions: *of, to, in, on, for, with, by, at, from, as*
- Coordinating conjunctions: *and, but, or, nor, so, yet*
- Personal pronouns: *we, i, you, he, she, it, us, him, her, them*
- Possessives: *my, thy, thine, his, our, your* — critically: possessives never
  anchor because the noun they modify is always more significant
- Relative/demonstrative: *this, that, whose, whom, who, which*
- Auxiliary verbs: *is, am, are, be*
- Vocative particle: *o*

After filtering, the remaining accented syllables are the candidates. For
"Come, let us also go to meet Christ with divine songs":
> Come (candidate) · go (candidate) · meet (candidate) · Christ (candidate) ·
> di- (skip, unstressed) · **VINE** (candidate) · songs (candidate)

**Step 3: Take the last candidate — that is the provisional anchor.**

In the example above: **songs** is the last candidate → provisional anchor.

**Step 4: Apply the monosyllabic backup rule.**

If the provisional anchor is a *single-syllable* word AND it is the last word
of the phrase, back off to the previous candidate.

Why: a phrase-final monosyllabic content word (songs, God, Lord, Him, peace)
is trailing content — the theological or semantic weight has already been
expressed. The melody should begin descending on the last *internally significant*
accent, not on the closing tag.

"Come, let us also go to meet Christ with **divine** songs":
- provisional anchor = `songs` (monosyllable, phrase-final) → BACKUP
- previous candidate = `vine` (from *divine*)
- **Final anchor = `vine`** ✓

This matches the JSON fixture result: truthAnchorIdx=11, text=`vine`. Machine
also placed the anchor on `vine` — a correctly handled case.

**Step 5: For polysyllabic final words — the director uses judgment the machine
cannot.**

If the provisional anchor is a *polysyllabic* word at the end of the phrase,
the machine does NOT back up (the current backup rule requires `last.single`).
But the director often will — particularly when the final word is a trailing
verb whose semantic content has already been established by the subject or object
earlier in the phrase.

"This is He Whom David **an·nounced**":
- provisional anchor = `nounced` (stressed syllable of "announced," phrase-final)
- Machine: stays on `nounced`
- Director: backs off to `Da` (the first syllable of *David*)
- Reason: "David" is the theological identification; "announced" is the verb
  completing the thought. The director treats the entire word "announced" as
  trailing, not just the unstressed suffix.

This is the **polysyllabic trailing verb trap** — see §10.4 for full analysis.
The machine cannot resolve it without semantic context. Director Pointing
brackets handle it explicitly: `This is He Whom [Da]vid announced`.

---

### 3.3 The STOP list — what it is and why it matters

The STOP list is not just a list of "unimportant words." It is the formalization
of the observation that **certain grammatical categories never carry phrase accent
in Byzantine/Obikhod chant**:

- **Possessives** (my, thy, thine, his, our, your): the possessive determines
  whose something is; the noun it modifies carries the weight. "In Thy sight" →
  anchor is `sight`, not `Thy`.
- **Prepositions**: they connect; the noun phrases they introduce carry weight.
  "Through the Law" → anchor is upstream of `through`.
- **Articles and conjunctions**: purely syntactic, zero semantic weight in chant.
- **Personal pronouns**: in liturgical English pronouns usually follow the noun
  they refer to (antecedent earlier in the text) — they carry identification but
  the anchor almost never lands on them.

**`thee` is deliberately NOT in STOP.** It is the accusative of `thou` (object
case), and in liturgical chant it often appears as the phrase-final theological
object: "...praise *Thee*," "...upon *Thee*," "...glorify *Thee*." Object
pronouns at phrase-final position are anchor candidates. Contrast with `him`,
`her`, `them`, `us` — these ARE in STOP because in the liturgical corpus they
are rarely the semantic focus of the phrase.

---

### 3.4 The `anchorIndex()` function — implementation of the above

```javascript
// flat: array of {text, accent, wordLast, single} for all syllables in the line
// acc:  indices of all accented (non-STOP, stressed) syllables
// a:    current anchor candidate = acc[acc.length - 1] (last in list)

// Monosyllabic backup rule:
const last = flat[lastIdx];
if (a === lastIdx && last.single && last.accent && acc.length >= 2) {
  a = acc[acc.length - 2];  // back off to previous accent
}
```

The `acc` array is built by `autoAccentLine` (machine mode) or from the director's
brackets (Director Pointing mode). It contains only syllables that are:
1. Stressed per the lexicon (`stressIdx` matches) or director-marked, AND
2. Not in the STOP set

`last.single` = `true` when the syllable belongs to a single-syllable word
(i.e., the word has only one syllable in the lexicon). This is what limits the
backup to monosyllabic final words — see §10.4 for the polysyllabic trap.

---

### 3.5 What was verified vs. assumed

**Verified from Drillock & Ealy tutorial worked examples:**
- The general rule: cadence begins on last internal accent
- The monosyllabic backup: explicitly shown in worked examples
- The `[Hear] [me]` case: two consecutive accented monosyllables, anchor = `Hear`

**Verified from OCA docx fixtures (JSON fixture export, v0.7.0 session):**
- "Come let us also go to meet Christ with divine songs" → anchor = `vine` ✓
- "Let us receive Him Whose salvation Simeon saw" → anchor = `Si` ✓
- "This is He Whom David announced" → director anchor = `Da`, machine = `nounced` ✗
- "This is He Who spoke in the Prophets" → anchor = `Prop` ✓
- "Who for our sakes has taken flesh and Who speaks through the Law" →
  director = `speaks`, machine = `through` ✗
- "Let us worship Him" → anchor = `wor` ✓

Overall anchor accuracy against this corpus: **4/6 lines (67%)**. The two misses
are both polysyllabic trailing content cases not covered by the backup rule.

**Assumed (not independently verified):**
- That the backup rule applies identically across all Tone 1 phrase types (A-D)
  and the Final phrase. Only tested empirically on the Final phrase and Phrase A.
- That the same anchor rule applies to Tone 2 and other tones. Believed
  tone-independent; confirmed for Tone 2 in the tone2 analysis session.

---

### 3.6 Honest uncertainty (remaining)

**Is the anchor rule definitively "last stressed content syllable, back off from
monosyllabic trailing words"?** The Drillock & Ealy tutorial supports it and the
corpus supports it. But a director may occasionally place the anchor one syllable
earlier or later based on phrase phrasing, breath point, or semantic weight that
the rule does not capture. The comparison harness exists precisely to surface
these cases. **Director Pointing is always the override.**

**Does the backup rule apply to polysyllabic function words at phrase end?**
Function words are already filtered by STOP, so they never become the provisional
anchor in the first place. The backup rule only needs to handle monosyllabic
*content* words that slip through — which it does correctly.



## 4. Cadence note-to-syllable distribution

### The critical question
When a phrase has fewer cadence syllables than notes in the cadence figure, how
are the notes distributed? Does one syllable carry multiple notes (a melisma),
or are notes dropped?

### The answer (verified from the LIC score)
**Notes are taken sequentially from the beginning of the figure; trailing notes
are dropped when there aren't enough syllables.** No melisma is created.

**Verified example from the LIC score (t1-lic-obikhod-tt.pdf):**
"Re·ceive the voice of my prayer" — Phrase D, reciting tone on do.
The anchor is "voice" (last internal accent). Cadence syllables: voice·of·my·prayer
= 4 syllables. Cadence figure: ti·do·re·do·ti = 5 notes.

Score shows: Re(quarter)·ceive(half)·the(half)·voice(half)·of(quarter)·
my(quarter)·prayer(half)

- "Re" = quarter note on do (reciting tone, unaccented)
- "ceive" = half note on do (reciting tone continues, or cadence start — see below)
- "the" = half note on do (reciting tone)
- "voice" = half note on **ti** (cadence anchor, first cadence note)
- "of" = quarter note on **do**
- "my" = quarter note on **re**
- "prayer" = half note on **do**

Four cadence syllables get the first four notes of the figure: ti·do·re·do.
The fifth note (final ti) is simply unused — it belongs to the next phrase's
intonation when there is a next phrase, or is omitted entirely at the end.

### Important implication
The final **ti** in Phrase D's five-note figure (ti·do·re·do·**ti**) is NOT
part of the cadence proper for a four-syllable cadence. It is the resolving note
that only appears when there is a fifth cadence syllable to carry it. This means
the cadence "ends on do" for most practical sticheron lines. Future tone builders
should verify their tone's cadence figure against actual scores the same way —
the tutorial text describes the full figure but the score shows how it truncates
in practice.

### The distribute() function
The `distribute(figure, count)` function in `tone-trainer.jsx` implements this
rule:
- `count === n`: one note per syllable, exact fit
- `count > n`: first and last syllables get their notes; middle syllables repeat
  the penultimate note to fill gaps
- `count < n`: take the first `count` notes of the figure sequentially — one per
  syllable, trailing notes unused

The `count < n` case went through several wrong implementations (melisma on
anchor, melisma on middle syllable) before the score evidence settled it as
simple truncation. This history is worth knowing for future tones.

---

## 5. Note durations (rhythm)

### Current state (v0.6.0 — tutorial-faithful rhythm implemented)
`lineToNotes` was rewritten in v0.6.0 to use role-based durations derived directly
from Drillock & Ealy and verified against the LIC score. The heuristic constants
(~0.45s per syllable) were replaced entirely.

### What the tutorial and score say
**From Drillock & Ealy and verified from the LIC score:**

| Role | Note value | Duration at 70 BPM |
|------|-----------|------------------------------|
| Reciting tone (unaccented) | quarter note | 1 beat |
| Reciting tone (intonation, first accented syllable) | half note | 2 beats |
| Prep note (ti before cadence) | quarter note | 1 beat |
| Cadence anchor | half note | 2 beats |
| Cadence middle syllables | quarter note | 1 beat |
| Cadence last syllable | half note | 2 beats |
| Final note (last syllable of entire sticheron) | whole note | 4 beats |

The **intonation note** (Phrase A and C in Tone 1) receives a half note on the
first *accented* body syllable — not always the first syllable of the phrase.
This distinction was important: early implementations assigned intonation to
`body[0]` unconditionally, which mis-assigned duration when the phrase opened
with an unaccented syllable. Fixed in v0.6.2 by scanning for the first accented
body syllable: `intonIdx = body.findIndex(s => s.accent)`.

Verified from the LIC score: Re(quarter)·ceive(half)·the(half)·voice(half)·
of(quarter)·my(quarter)·prayer(half). "Re" is an unaccented reciting-tone
syllable (quarter); "ceive" is the cadence anchor (half); "of" and "my" are
unaccented cadence syllables (quarter each); "prayer" is the phrase-final
cadence note (half).

### Honest admission: quarter/half within cadence figure
When a cadence figure has many syllables, the score shows some cadence syllables
as quarter notes. The boundary condition — when does a cadence note become a
quarter vs. a half — is not fully resolved. The current implementation uses:
cadence anchor = half, middle syllables = quarter, final cadence syllable = half.
This matches the "voice·of·my·prayer" example from the LIC score but may not
generalize to all configurations. Needs further investigation with a wider corpus.

### BPM slider
Adjustable 40–120 BPM via slider, default 70. Slider is disabled and greyed
during playback (v0.7.0) — cannot change tempo mid-phrase. Dynamic BPM using
a Web Audio lookahead scheduler is a backlog item for a future audio engine session.

---

## 6. OCA docx ingest — what was learned

### Format
OCA-distributed service `.docx` files use **real `<w:u>` underline run
formatting** to mark accented syllables — not bold, not font changes, not
manual styling. This is losslessly extractable via JSZip client-side (no upload).

### What underlines mean
**Underlined text = the syllable(s) the cantor marks for tonic accent.** This
is the director's truth. Non-underlined words carry no director mark and ride
the reciting tone.

A crucial distinction: underlines mark **words or partial words**, not individual
syllables. The underline span in the XML runs may cover:
- A **whole word**: `[Lord]`, `[hear]` — the director marked the whole word as
  carrying an accent. The specific accented syllable within it is determined by
  the lexicon's `stressIdx`.
- A **mid-word span**: `Re[ceive]`, `up[on]` — the bracket covers only part of
  the word. The accented syllable is the one whose vowel nucleus falls within
  the underlined character span.

Both patterns occur in real OCA materials and are handled by the
`paraToPointerLine` vowel-nucleus mapping (see `SYLLABIFIER_SPEC.md §7`).

### Docx structure
Each `<w:p>` paragraph is one line of text. Runs (`<w:r>`) within a paragraph
concatenate to form the full line. The underline attribute is per-run, not per
character. A word like "Receive" where only "ceive" is underlined appears as
two runs: `{text:"Re", underline:false}` and `{text:"ceive", underline:true}`.

The `paraToPointerLine` function builds a char-level array of (text, underline)
pairs across all runs, then tokenizes into words, then maps underline spans to
syllables using vowel-nucleus overlap. This is the correct approach for handling
both whole-word and mid-word underlines.

### Sticheron segmentation
Stichera are identified as **maximal runs of underline-bearing paragraphs**,
closed on the line after a `//`-terminated line. `//` is the OCA penultimate-line
marker (the monk's own convention in these files, kept verbatim in the encoding).
Blocks lacking `//` are flagged ⚠ suspect. Non-underlined paragraphs (V. verses,
Glory/Both now headings) are display-only context, not part of the sticheron.

### Confirmed corpus
Four OCA service `.docx` files processed:
- Meeting of the Lord (2/2) — 474 table entries, 31 residue
- Pentecost (5/31) — +420 table, +23 residue
- Palm Sunday (4/5, Divine Liturgy) — +43 table, +4 residue
- Holy Saturday (4/11) — **+0 new words** (full saturation of common vocabulary)

The convergence to zero on Holy Saturday, a rich 619-word service, confirms that
**the common liturgical vocabulary is finite and closed**. A generously-seeded
lexicon from a handful of varied services covers the real corpus.

---

## 7. Syllabification and stress — architecture decisions

*(Full detail in `SYLLABIFIER_SPEC.md`. Summary here for the tone builder.)*

### What was tried and rejected
- **Pure rule-based syllabification**: tried extensively. English syllable/stress
  is not rule-governable. Every rule fixed one class and broke two others.
  Abandoned after demonstrating oscillation around ~85% accuracy with no path
  to convergence.
- **Runtime CMU dictionary**: 931 KB gzipped, does NOT provide letter-level
  syllable boundaries (only phoneme stress), would add ~26× to the bundle weight.
  Rejected on both weight and fitness grounds.

### What was adopted
- **CMU Pronouncing Dictionary as a build-time oracle** (count + stress only,
  never ships to the browser) combined with **TeX Knuth-Liang hyphenation** for
  boundaries, reconciled to CMU's count.
- **~94% of liturgical words are in CMU** — resolved authoritatively.
- **~6% residue** (proper names, liturgical-technical terms, archaic forms) — held
  in `name-residue.json` with best-guess stress, `confirmed:false`, pending
  director/choir-director review.
- **Archaic -est/-eth endings** (givest, lovest, proceedest) — handled by a rule,
  not the lexicon: the suffix is always its own final syllable.

### For future tones
The syllabification architecture is **tone-independent** — it handles the text
before the tone is applied. No changes needed for additional tones. The lexicon
will grow as corpus files from new service types are processed.

---

## 8. Guide for building the next tone

### What to gather before starting
1. **The tutorial text** for that tone (Drillock & Ealy, or equivalent). Identify:
   - Phrase labels and their names (may differ from Tone 1's A-B-C-D)
   - Reciting tone for each phrase (which solfege pitch?)
   - Cadence figure for each phrase (list of solfege pitches)
   - Prep note if any (what pitch immediately before the cadence?)
   - Rotation sequence (which order do the phrases rotate?)
   - Whether the Final Phrase is structurally different from the other phrases

2. **The sheet music** (score PDF) for a complete Lord I Call service in that tone.
   The score is needed to verify:
   - Note values (quarter, half, whole) for reciting tone and cadence syllables
   - Whether the cadence figure truncates (drops trailing notes) or creates melismas
     when there are fewer syllables than figure notes. Tone 1 truncates; verify
     for each new tone — do not assume they all behave the same.
   - The specific note that receives the cadence anchor (first cadence note)

3. **An OCA service `.docx` in that tone** for ingest testing and corpus expansion.
   Any OCA feast celebrated in that tone works. The docx ingest architecture is
   tone-independent; the tone label is read from the heading in the file.

4. **A unison or single-voice audio recording** if pitch verification is needed.
   SATB recordings cannot be reliably analyzed automatically. If Drive-hosted,
   use the Drive download tool. Note: media.oca.org is not in the network
   allowlist for this environment — upload to Drive first.

### What to encode in the component

Add a new entry to the `PHRASES` object (or its equivalent for the new tone):
```javascript
// Example structure — values are placeholders, read from the tutorial
Tone2: {
  A:     { recite: "???", prep: "???", cad: ["???", "???", "???"] },
  B:     { recite: "???", prep: null,  cad: ["???", "???"] },
  // ... etc.
  Final: { recite: "???", prep: null,  cad: ["???", "???", "???"] },
}
```

**⚠ prep and cad must never overlap.** `prep` is a single approach-note pitch
that fires before the anchor via its own timing path (quarter note). `cad` is
the array of pitches distributed across cadence syllables by `distribute()`.
If a prep pitch appears inside `cad`, the engine will try to assign it to a
cadence syllable, producing wrong note-to-syllable distribution. See §2 for the
full structural explanation.

Add the rotation sequence — Tone 2 is NOT the same as Tone 1. Known rotations:
- Tone 1: A · B · C · D (repeating), Final last
- Tone 2: A (once only) · B · C · D (repeating), Final last
- Tones 5/6: A · B · C (repeating), Final last
- Tone 6 adds a B′ variant
- Tone 8 uses A′
These are from the tutorial text; verify before implementing.

### What to test
1. **The distribute() function** with the new tone's cadence figure lengths and
   typical sticheron line syllable counts. Verify the output matches the score.
   Do not assume Tone 1's truncation behavior applies — check the score.

2. **The anchor rule** — verify it produces the correct cadence start against
   at least two director-marked docx files in the new tone. The anchor rule itself
   (last internal accent, back off from final monosyllable) is believed to be
   tone-independent, but this has only been verified for Tone 1.

3. **The phrase rotation** — manually verify at least one full sticheron from a
   real OCA service docx in the new tone against the expected rotation.

### Known tone-independent components (no changes needed)
- Syllabification and lexicon system
- Docx ingest (`parseDocxParagraphs`, `paraToPointerLine`)
- The `distribute()` function (once verified against the new tone's figures)
- The accent source toggle and indicator system
- The encoding format (`[accent]` / `|` / `//`)
- Feature B comparison harness (once built)

### Known tone-specific components (must be added/extended per tone)
- `PHRASES` object entries
- Phrase rotation sequence
- The reciting-tone pitch used in audio synthesis
- Any tone-specific prep note logic

---

## 9. Open questions as of May 2026

These were not resolved during the Tone 1 build and remain open for future
sessions or director consultation:

**A1 — Spoken stress vs. singing accent:** does the OCA underline mark indicate
*spoken word-stress* (where English phonology would place it) or a *singing accent*
(which can differ, e.g. a word stress falling on a weak beat)? The empirical
evidence from the docx analysis strongly suggests spoken stress — the underlines
consistently land on the phonologically stressed syllable. But this has not been
confirmed by the director.

**A3 — Completeness of marking:** are all phrase-final accents marked in the OCA
docx files, or only the ambiguous ones? If some accents are omitted as "obvious,"
the docx underlines are not a complete truth set and the comparison harness
needs to account for this.

**B1 — Physical marking convention in hand-outs:** for parish print materials
(not the OCA-distributed digital files), what convention does the director use?
Bold? Underline? Acute accent? This matters if the tool is ever extended to
ingest hand-marked materials.

**Quarter vs. half within cadence figure:** when a cadence figure has many
syllables, the score shows some cadence syllables as quarter notes rather than
half notes (see §5). The boundary condition is not fully resolved. Current
implementation (anchor=half, middle=quarter, final=half) matches the LIC score
example but may not generalize.

**Phrase D final ti:** the fifth note of Phrase D's cadence figure (ti·do·re·do·ti)
appears when there are 5+ cadence syllables but is dropped for fewer. Whether the
final ti ever appears in common sticheron lines, or whether it is effectively always
dropped, was not systematically verified across the corpus.

~~**Polysyllabic final word trap (aloud, himself):**~~ **Closed — see §10.4.**
Disposition: accept as Director Pointing territory. No algorithmic fix planned.

---

## 10. Session addendum — May 30 2026 (v0.7.0)

This section records the specific corrections, confirmations, and new findings
from the v0.7.0 session — a focused testing, refinement, and bug-fix session
that included extensive A/B comparison harness work against real docx and JSON
fixtures.

---

### 10.1 Note on what this session was

This was the first session with the full A/B comparison harness operational
and actively used to test the machine engine against director-marked text.
Several engine assumptions from prior sessions were validated or corrected.
The JSON fixture export tool was first used here, enabling systematic
phrase-by-phrase analysis rather than visual inspection alone.

---

### 10.2 Corpus tested — Simeon sticheron (Meeting of the Lord, Tone 1)

**Fixture file:** `2026-0202-texts-tt.docx`
**Exported JSON:** `tone-trainer-comparison(8).json`

The sticheron tested was:

> Come, let us also go to meet Christ with divine songs, |
> Let us receive Him Whose salvation Simeon saw, |
> This is He Whom David announced, |
> This is He Who spoke in the Prophets, |
> Who for our sakes has taken flesh and Who speaks through the Law, //
> Let us worship Him!

**Results from JSON fixture (v0.6.2 engine):**
- Anchor match: 4/6 lines (67%)
- Syllable accent match: 73/82 (89%)

**Line-by-line findings:**

| Phrase | Result | Director anchor | Machine anchor | Notes |
|--------|--------|----------------|----------------|-------|
| A | ✓ match | `vine` (divine) | `vine` | Perfect agreement |
| B | ✓ match | `Si` (Simeon) | `Si` | Perfect agreement |
| C | ✗ miss | `Da` (David) | `nounced` | Machine picks last stressed syllable of "announced"; director backs off to subject |
| D | ✓ match | `Prop` (Prophets) | `Prop` | Perfect agreement |
| A (2nd) | ✗ miss | `speaks` | `through` | Machine picks wrong syllable after "through the Law" |
| Final | ✓ match | `wor` (worship) | `wor` | Perfect agreement |

---

### 10.3 Lexicon corrections confirmed this session

**`incense` — stressIdx 1→0**
- Error: lexicon had `stressIdx:1` (in-CENSE, verb form)
- Correct: `stressIdx:0` (IN-cense, noun form)
- In liturgical texts "incense" always appears as a noun ("as incense before Thee")
- Fix: `public/lexicon/syllable-table.json`, one-character change

**`arise` — 3→2 syllables**
- Error: lexicon had `["a","ri","se"]` (3 syllables), source: `count-only`, `lowConfidence:true`
- Correct: `["a","rise"]` (2 syllables), per CMU Pronouncing Dictionary: `AH0 R AY1 Z`
- The 3-syllable form was a bad parse artifact from the count-only heuristic
- Fix: `public/lexicon/syllable-table.json`, corrected entry

**`thy` and `thine` — added to STOP list**
- Missing: archaic second-person possessives were not in the STOP list
- Correct: `thy` = archaic `your` (possessive determiner before consonant)
  and `thine` = archaic `your/yours` (before vowels, or standalone) are pure
  grammatical function words, same class as `my`, `his`, `our`, `your`
- Possessive modifiers never carry phrase accent — the noun they modify is
  always the anchor
- Fix: STOP constant in `tone-trainer.jsx`
- Note: `thee` was deliberately left OUT of STOP — it is the accusative object
  of `thou` and frequently appears as the phrase-final theological focus
  ("...praise Thee," "...upon Thee"). Direct objects can be cadence anchors.

---

### 10.4 Polysyllabic final word trap — full analysis and disposition

#### The problem
The anchor backup rule fires on single-syllable accented final words:
```javascript
if (a === lastIdx && last.single && last.accent && acc.length >= 2)
```
The `last.single` check means the backup never fires for polysyllabic final words.
Machine picks the last *stressed* syllable even when the director treats the final
word as trailing content.

#### What the JSON fixture confirmed
For "This is He Whom David **a**n**nounced**":
- Director (truth): anchor = `Da` (index 4, David)
- Machine: anchor = `nounced` (index 7, last stressed syllable)
- JSON shows `"nounced": { truthAccent: false, machineAccent: true }` — the
  director explicitly did NOT underline "nounced" at all.

This is not a syllabification problem. The director treats "announced" as
entirely trailing after "David." The machine correctly syllabifies the word
(2 syllables: `an·nounced`) and correctly identifies `nounced` as stressed —
but wrong in context.

#### The attempted fix and why it doesn't work cleanly
Extending the backup rule to all polysyllabic final words would fix "announced"
— but would break phrases like "This is He Who spoke in the **Prophets**" where
`Prop` IS correctly the machine's anchor and should remain so. Both "announced"
and "Prophets" are polysyllabic final words; one is trailing, one is the anchor.
The distinction is semantic, not structural.

#### The -ed syllabification hypothesis
During this session a hypothesis was raised that the director may have sung
"announced" as 3 syllables (a-noun-ced) due to liturgical -ed convention.
The JSON fixture disproved this: the director underlines were absent from
"nounced" entirely, and the corpus edit-machine tool confirmed `an-noun-ced`
as a 3-syllable edit did produce anchor match — but only because the unstressed
`an` prefix happened to be in STOP, removing the word from candidacy by accident.

**Conclusion on liturgical -ed:**
Two distinct classes exist:
1. **Genuinely syllabic -ed** (bless·ed, learn·ed, belov·ed): the stem ends in
   a way that makes `-ed` a natural extra syllable. Hymn books mark these with
   a grave accent (blessèd). These warrant a 3-syllable lexicon entry.
2. **Non-syllabic -ed** (announced, proclaimed, revealed, confirmed): the `-ed`
   is phonologically fused to the final consonant cluster. Not spoken as a
   separate syllable even in liturgical English. These remain 2-syllable.

**Disposition on the polysyllabic trap:**
- `arise` — closed by lexicon fix (was misparsed as 3 syllables)
- `announced` — closed as Director Pointing territory
- `aloud`, `himself` — accepted as Director Pointing territory
- No algorithmic rule change planned; the semantic distinction cannot be made
  from syllabification alone
- **When you encounter a phrase with a polysyllabic trailing verb at the end
  (announced, proclaimed, fulfilled, revealed) use Director Pointing brackets
  on the actual anchor word.**

---

### 10.5 Critical bug: applyEdit silent re-pointer

**Bug found:** in the sung display "edit syllables" panel, hitting **Apply**
without making any text changes reset the pointing. The anchor moved to the
last syllable of the phrase regardless of director marks.

**Root cause:** `applyEdit()` set `accent: false` on every syllable when
rebuilding words from the edit box text, then stored the all-false array
without re-running the accent heuristic. `anchorIndex()` received an empty
`acc` array and fell back to `flat.length - 1` (last syllable) every time.

**Discovery:** found during live testing with the Simeon sticheron. A phrase
that was correctly pointed by Director marks became wrong after a no-op Apply.
The before/after screenshots via A/B harness made the regression immediately visible.

**Fix (v0.7.0):** `applyEdit` now calls `autoAccentLine(rawWords, phrase)` after
rebuilding the word array, restoring correct accent marks from the lexicon.

**Additional protection:** the "edit syllables" button is now hidden in Director
Pointing mode entirely. The edit panel could silently discard director bracket
marks (which live in the textarea, not the chip display). In Director mode, the
textarea is the correct edit path.

---

### 10.6 A/B comparison harness — operational findings

The comparison harness (Feature B) proved its value this session as a diagnostic
tool, not just a training aid. Key behavioral findings:

**JSON fixture export** provides the most reliable evidence for anchor analysis —
it records exact syllable indices and accent flags without any visual ambiguity.
The export button in the comparison harness produces this JSON. Use it for any
systematic evaluation of anchor accuracy.

**Anchor match vs. syllable match:** anchor match rate (67% in this corpus) and
syllable accent match rate (89%) measure different things. High syllable match
with lower anchor match means the machine is getting individual word stresses
right but missing the phrase-level accent hierarchy. This is the expected failure
mode: the engine knows English stress but not chant phrase structure.

**The comparison harness's "Director vs. Machine" toggle** updates the mode badge
in the info bar live (shows "Director Pointing ✓" or "Machine Pointing" based
on `singWhich`). This was a bug fix in v0.7.0 — the badge was static and did not
reflect which voice was currently singing.

---

### 10.7 For the next tone builder — what this session adds to the guide

The §8 guide was written before the A/B harness was fully operational. Add these
to the testing workflow:

1. **Export a JSON fixture** from the comparison harness for at least 3 stichera
   in the new tone. Compute anchor match rate. Target ≥ 75% before considering
   Tone N complete for AUTO mode.

2. **Watch for the polysyllabic final word trap.** Any phrase ending in a
   polysyllabic content word where the director consistently anchors on the
   prior word is this trap. No fix is planned in the engine — document them in
   the tone's findings file and mark as Director Pointing territory.

3. **Test the edit panel** (Machine mode only). Hit Apply on an unmodified line
   and verify the pointing does not change. The v0.7.0 `autoAccentLine` fix
   should hold for new tones, but verify.

4. **The STOP list is tone-independent.** The archaic vocabulary additions (thy,
   thine) apply to all tones. No per-tone STOP configuration is needed.

5. **Lexicon errors surface through A/B testing.** The `incense` and `arise`
   errors were invisible until the JSON fixture revealed exactly which syllables
   the machine was placing accents on. Run the fixture export early in testing.

---

*§10 added May 30 2026 following v0.7.0 session.*


---

## 11. Addendum — May 2026 (post Tone 2 build, v0.8.0)

This section records what the Tone 2 build revealed about the Tone 1 document —
what was missing, what was underspecified, and what cross-tone findings will
help the Tone 3 builder orient faster. Read this alongside
`tone_trainer_tone2_analysis.md`.

---

### 11.1 What the Tone 1 document got right that helped

The following sections transferred cleanly to Tone 2 with no correction needed:

- **§4 (`distribute()`)** — the truncation rule (take first N notes, drop
  trailing) and the `count > n` penultimate-repeat rule both carried over
  unchanged. The Tone 2 corpus confirmed them.
- **§5 note durations** — the H/Q/W role table is universal. Every role for
  every Tone 2 phrase verified against the unison recording matched the Tone 1
  table exactly. No changes to `lineToNotes()` were needed.
- **§3.3 STOP list** — transferred unchanged. No new STOP words were needed for
  Tone 2 liturgical vocabulary.
- **§6 docx ingest** — the `<w:u>` underline mechanism, vowel-nucleus overlap
  mapping, and sticheron segmentation all carried over without modification. The
  architecture is genuinely tone-independent.
- **§3.4 `anchorIndex()` implementation** — the monosyllabic backup rule is
  confirmed universal across Tone 1 and Tone 2.

---

### 11.2 What the Tone 1 document was missing that would have helped Tone 2

**Missing: the SATB soprano trap warning.**

The Tone 1 document notes that the SATB recording was unreliable for *automated
pitch extraction* (§1, key lesson) but does not warn that reading pitches
directly from the SATB *score* is also unreliable. For Tone 2 Phrase C, reading
the SATB soprano line from the tutorial score gave prep=`la`, cad=`["re"]` —
both wrong. The unison melody actually uses prep=`ti`, cad=`["do"]`. The soprano
sings a third above the melody throughout.

**Rule to add to §8 for future tone builders:**
> When the tutorial provides a 4-part SATB score, do NOT read phrase pitches from
> the soprano line. Always extract melody from the **tenor/unison** line. Better
> still, confirm against the unison MP3 before finalizing any phrase definition.
> The soprano harmony frequently sings a third or sixth above the melody, and
> every prep and cadence pitch will look different in each voice.

This is now the first warning in `tone_trainer_tone2_analysis.md §1.1` and
should be the first warning in any future tone's analysis doc.

---

**Missing: the `inton` flag per phrase, and its interaction with `autoAccentLine`.**

The Tone 1 document describes intonation at the phrase level (§2, §5) but
doesn't document that the `autoAccentLine` function had the intonation condition
hardcoded as `phrase === "A" || phrase === "C"`. This was a latent bug that only
became visible in Tone 2, where Phrase A has no intonation at all. The fix was
a one-line change: replace the hardcoded phrase names with `PH[phrase].inton`.

For future tone builders: **verify whether each phrase has intonation
independently per tone.** Do not assume the Tone 1 pattern (A and C have
intonation, B and D do not) applies to other tones. The `PH_DEFS` structure
now captures this as a per-tone flag. The same fix applies to `applyPhraseAccent`
inside `autoEncodeLines` (the module-level function — also had the hardcoded
check and needed the same correction).

---

**Missing: explicit documentation of the pre-slur rule.**

The Tone 1 document covers note durations and cadence distribution in detail but
never mentions the pre-slur. The pre-slur is present in Tone 1's Final Phrase
data — "Hear me, O Lord!" has two director marks on the Final Phrase in the LIC
framing — but it was not identified as a structural rule during the Tone 1 build.
It was rediscovered empirically from the Tone 2 corpus (78 instances, 2 confirmed
pre-slur Finals) and then found to also exist in the Tone 1 corpus data.

The pre-slur rule: **when the syllable immediately before the prep note is a
single accented monosyllable, that syllable receives pitches `[recite, prep]`
as two quarter notes** before the normal prep. In practice this is role `preslur`
with `syllDur = H` so the melisma split yields Q + Q. Confirmed corpus examples:
- "**[Hear]** **[me]**, O Lord!" — `Hear` is the pre-slur word (Tone 1 and 2 Final)
- "Pray to **[Christ]** **[God]** for us all!" — `Christ` is the pre-slur word (Tone 2)

The `pointLine()` function in v0.8.0 detects this structurally and is
tone-agnostic: it fires on any phrase with `def.prep` set when the pre-anchor
body syllable is an accented monosyllable. It is already active for both Tone 1
and Tone 2 Final Phrases.

---

**Missing: explicit phrase rotation confirmation per tone.**

The Tone 1 document describes the rotation (A·B·C·D repeating, Final last) but
also lists different rotations for other tones in §8:
> "Tone 2: A (once only) · B · C · D (repeating), Final last"

**This is incorrect.** The Tone 2 corpus — 78 phrase instances across 12+
stichera — confirms that Tone 2 uses **the same A·B·C·D rotation as Tone 1**,
not "A once only." The `phraseForLine(i, total)` function is unchanged between
tones, and no corpus exception was found. The Tone 1 document's §8 rotation
table for non-Tone-1 tones was a guess and should not be trusted.

**For Tone 3 and beyond:** verify the rotation empirically from the docx corpus
before assuming anything. Do not rely on the §8 table.

---

**Missing: quantitative corpus methodology.**

The Tone 1 document describes a corpus of 4 OCA service files and mentions
anchor accuracy (67% on 6 lines in §10.2) but does not describe the systematic
phrase-by-phrase counting methodology that produced the 92%+ figure cited in
`tone_trainer_notes.md`. The Tone 2 build used a structured approach: 78 phrase
instances counted by phrase label, mark count per instance (1-mark vs 2-mark),
and per-class anomaly analysis.

For future tones, the minimum corpus standard is: **40+ phrase instances across
4+ stichera**, with mark count tabulated per phrase label. Below 40 instances,
anomalies and patterns are indistinguishable. The table format from
`tone_trainer_tone2_analysis.md §5.2` should be reproduced for each new tone.

---

### 11.3 What Tone 2 confirmed that Tone 1 had assumed

The following Tone 1 assumptions were **confirmed by the Tone 2 build**:

- **Anchor rule is tone-independent.** Verified across 78 Tone 2 instances. The
  last-internally-accented-syllable rule with monosyllabic backup is universal.
- **STOP list is tone-independent.** No new STOP words were needed. The same
  grammatically-defined filter works for Tone 2 liturgical vocabulary.
- **`distribute()` truncation is correct.** The Tone 2 cadence figures (2-note
  B/D, 3-note A, 1-note C, 4-note Final) all work correctly with the existing
  truncation and penultimate-repeat logic.
- **Note duration roles are universal.** H/Q/W assignments verified from the
  Tone 2 unison recording — identical to Tone 1.
- **Docx ingest is tone-independent.** The `<w:u>` extraction and sticheron
  segmentation work identically for Tone 2 OCA files.

---

### 11.4 New open questions surfaced by Tone 2

**Q: Does the pre-slur fire on phrases other than Final?**

The pre-slur was implemented in `pointLine()` for any phrase with `def.prep`
set — not just Final. This means it could theoretically fire on Tone 1 Phrase A
(which has `prep:"ti"`) or Tone 2 Phrase C (which has `prep:"ti"`). No corpus
examples of pre-slur on non-Final phrases have been observed. But the structural
condition (accented monosyllable immediately before the last body syllable) could
occur. Monitor in AUTO mode testing. If it fires incorrectly on a non-Final
phrase, the detection condition may need to be narrowed to `phrase === "Final"`.

**Q: Does Tone 2 Phrase A `distribute()` hold on `fa` or descend to `mi` for
extra middle syllables?**

For Phrase A with more cadence syllables than the 3-note figure `[fa,mi,re]`,
`distribute()` repeats `mi` (the penultimate note) for middle syllables. The
tutorial says "syllables between are quarter notes" without specifying the pitch.
Only one 3-syllable Phrase A cadence was observed in the tutorial sticheron
(exact fit, no surplus). A longer example is needed to confirm whether `mi`
repeat or `fa` hold is correct. This is worth a listening test against the OCA
recording if a longer Phrase A line can be located.

**Q: What is the correct `distribute()` behavior for Tone 2 Phrase B/D with
more than 2 cadence syllables?**

Phrases B and D use `[di, re]` — a 2-note figure. When there are 3+ cadence
syllables (`count > n`), `distribute()` repeats the penultimate note (`di`) for
all middle syllables and then lands on `re`. Example: anchor + 2 trailing =
`[[di],[di],[re]]`. This was not verified against the recording because no
3+-syllable B/D cadence occurred in the tutorial sticheron. Verify from corpus
if a Phrase B/D line with a polysyllabic anchor word occurs.

---

### 11.5 Checklist for the Tone 3 builder

Use this as a starting checklist alongside `tone_trainer_tone2_analysis.md §10`:

**Before writing any code:**
- [ ] Download the Tone 3 tutorial PDF from Drive. Read the phrase descriptions.
- [ ] Identify reciting tone, `inton` flag, prep note, and cadence figure for
      each of the 5 phrase types (A, B, C, D, Final).
- [ ] Do NOT read phrase pitches from the SATB soprano line.
- [ ] Download the Tone 3 Obikhod Unison MP3. Run `librosa.pyin`.
- [ ] Establish the recording key (dominant reciting pitch in Hz → map to solfège).
- [ ] Verify each phrase's cadence end notes from the audio.
- [ ] Get at least one OCA Sunday service `.docx` in Tone 3. Extract phrase instances.
- [ ] Tabulate mark counts by phrase (1-mark vs 2-mark, minimum 40 instances).
- [ ] Verify phrase rotation from the corpus (do NOT assume A·B·C·D — check it).

**During coding:**
- [ ] Add `PH_DEFS[3]` with verified phrase table (no guesses).
- [ ] The `inton` flag per phrase — look this up per tone, do NOT copy from Tone 1.
- [ ] Check whether any new solfège pitches are needed beyond
      `{la, ti, do, di, re, mi, fa, sol}`. After Tone 2 the full scale is
      represented; further tones likely need no additions.
- [ ] Test `distribute()` against the new tone's cadence figures with both
      `count < n` and `count > n` cases.
- [ ] Verify the pre-slur detection is not firing falsely on non-Final phrases.

**Validation:**
- [ ] Run the JSON fixture export on 3+ stichera. Target ≥ 75% anchor match.
- [ ] Check the edit panel (apply on unmodified line → pointing unchanged).
- [ ] Listen to the played output on the Tone 3 preset and verify it sounds right.

---

*§11 added May 2026 following Tone 2 build (v0.8.0).*

---

## 12. Deep-Dive Analysis — June 2026 (Tone 1 Logic Rewrite Session)

This section documents a systematic phrase-by-phrase walkthrough of Tone 1 against
the tutorial and real OCA scores, conducted June 2026. The goal is to bring Tone 1
up to the same level of duration awareness as the Tone 2 rewrite — i.e. verified
`cadDurs` blocks, score-confirmed duration rules, and explicit handling of all edge
cases. **No code changes have been made yet.** This is the research record that
must precede implementation.

Sources used:
- Drillock & Ealy tutorial PDF (Drive `1MCbcPSJMiZ43myLLEadQNWv8mY7SOFtJ`)
- Tutorial SATB harmony table (rasterized pages 12–13)
- St. Sergius Sunday Octoechos Tone 1 score, 1-1.pdf (rasterized, 38 pages)
- OCA service scores walked through interactively with Bill

---

### 12.1 Cross-Cutting Architectural Gaps (All Tones)

These issues were surfaced during Tone 1 analysis and affect all tones.

#### Gap A — Rhythmic Grouping Engine (MISSING — High Priority)

The tutorial introduction states: *"there is no time signature... The half note is
the predominant pulse... The recitative section consists of quarter notes grouped
in two's or three's depending upon the location of the accents... a two-syllable
word with an accent on the first syllable will receive a full beat, while a
three-syllable word with the accent on the first syllable will receive a full beat
and a half."*

This paragraph is in the **Introduction** — it applies to **all tones** of
Common Chant. It describes a word-level rhythmic grouping system where:
- Groups of two quarter notes = one beat
- Groups of three quarter notes = one and a half beats (→ dotted half when
  falling on a single syllable)

Dotted halves and whole notes observed in real scores are driven by this rhythmic
balancing principle. **Shorter phrases stretch note values to fill musical space;
longer phrases do not.** The machine currently assigns durations role-by-role
without phrase-level rhythmic context.

**Three-layer architecture for duration assignment:**
1. **Base layer** — tutorial rules as fallback: anchor=`H`, fills=`Q` at 4+, close=`H`
2. **Rhythmic grouping engine** — approximates director judgment using phrase-level
   context to determine when `H→H·` or `H→W`. Goal: machine aspires to match
   director decisions as closely as possible, not just output mechanical defaults.
3. **Director pointing layer** — overrides everything when director has explicitly
   marked the text.

**What we lack for the engine:**
- Word boundary reconstruction from syllable array
- Phrase-level rhythmic accounting (total beats per phrase)
- Word-level duration units (two-grouping vs three-grouping detection)

**Suggested architecture:** A `computeWordRhythm(words)` pre-pass that runs before
role assignment, groups syllables by word, computes beat-unit counts, identifies
three-groupings falling on single syllables (→ `H·`), and returns a duration map
consumed by `lineToNotes()`.

**Impact:** Duration modeling for reciting tone and cadence positions across all
tones is incomplete without this engine. Per-phrase `cadDurs` blocks capture pitch
figures correctly but are provisional on durations until the rhythmic engine is built.

#### Gap B — Pre-Slur Logic Not Scoped Per Phrase

Current pre-slur detection in `pointLine()` is generic — fires for any phrase with
`def.prep` set, gated on `candidate.single && candidate.accent`. Originally built
for Tone 2 Final Phrase.

Issues:
- Trigger condition (`single && accent`) may differ between Tone 1 Phrase A and
  Tone 2 Final
- Prep is **positional** in Tone 1 Phrase A (see §12.2) — the prep syllable need
  not be accented or monosyllabic. The `single && accent` gate is therefore
  too restrictive and may miss valid pre-slur candidates in Phrase A.
- Pre-slur duration for Tone 1 Phrase A unverified (currently always `Q·Q`)
- Future tones/phrases with prep inherit unverified behavior

**Resolution:** Encode pre-slur as an explicit flag or rule in `PH_DEFS` per
phrase so each phrase opts in with its own verified trigger condition.

#### Gap C — Anchor Detection Backup Rule Needs Per-Phrase Verification

`anchorIndex()` steps back from a single accented monosyllable at phrase end to
find the last internal accent. Tutorial explicitly states this rule for Phrase B.
For Phrase A, the prep always occupies the position before the cadence anchor,
meaning the cadence anchor is never truly the final syllable of `flat` — the
backup rule's interaction with Phrase A needs score verification.

---

### 12.2 Phrase A — Deep Walkthrough

**Current code:**
```js
A: { recite: "re", inton: true, prep: "ti", cad: ["do"] }
```

#### Rotation and Intonation — Confirmed Correct
- `inton: true` ✅ — first accented syllable gets `re(H)`, unaccented lead-ins get `re(Q)`
- Fallback to `body[0]` when no accented syllable — flag for monitoring

**Intonation examples confirmed from scores:**
- "Lord," → `re(H)` — zero lead-ins
- "Come," → `re(H)` — zero lead-ins
- "To-day let" → "To"=`re(Q)`, "day"=`re(H)`
- "The first fruit of" → "The"=`re(Q)`, "first"=`re(Q)`, "fruit"=`re(H)`, "of"=`re(Q)`
- "Let my prayer a-rise" → "Let"=`re(Q)`, "my"=`re(Q)`, "prayer"=`re(H·)` (rhythmic balancing)
- "Ac-cept our..." → "Ac"=`re(Q)`, "cept"=`re(H·)` (rhythmic balancing)
- "En-cir-cle..." → "En"=`re(Q)`, "cir"=`re(H·)` (rhythmic balancing)
- "Come, O peo-ple" → "Come"=`re(H·)` (rhythmic balancing — short phrase)

Dotted halves on intonation note are **not** driven by lead-in count or any simple
rule. They are rhythmic balancing (Gap A). Machine default = plain `H`.

#### Prep — Confirmed Positional

The prep is **positional** — the last body syllable before the cadence anchor always
takes `ti(Q)` regardless of its stress or word identity. This has direct implications
for Gap B (pre-slur logic).

**Evidence:**
- "of" (unaccented) → `ti(Q)` in "glory of Christ"
- "O" (unaccented) → `ti(Q)` in "dance, O faith-ful"
- "gin" (second syllable of "Virgin") → `ti(Q)` in "Vir-gin..."
- "di" (accented first syllable of "divine") → `ti(Q)` in "di-vine songs!"

Note: "di" is accented but takes the prep positionally. The pre-slur detection
logic requiring `single && accent` would correctly fire on "di" (it IS accented)
but would miss cases where the prep syllable is unaccented (e.g. "of", "O").
Since the pre-slur should only fire on specific accented monosyllables, not all
prep positions, this needs careful per-phrase specification.

#### Cadence — Confirmed Pitch, Provisional Durations

**Pitch:** `do` throughout — all syllables stay on `do`. Confirmed ✅.
**Melisma:** N/A — single pitch cadence, no melisma possible. Confirmed ✅.

**Anchor:** begins on the last accented syllable (tutorial default). Option to
begin on last internal accent — director's choice driven by musical judgment
(e.g. "Mother of God" where director chose "Moth" as anchor across 4 syllables).

**Duration model — provisional (pending rhythmic grouping engine):**

| Count | Anchor | Fills | Close |
|---|---|---|---|
| 1 | `do(H)` | — | — |
| 2 | `do(H)` | — | `do(H)` or `do(W)` |
| 3+ | `do(H)` | `do(Q)` | `do(H)` or `do(W)` |

Close duration (`H` vs `H·` vs `W`) driven by rhythmic balancing at phrase level.
No tutorial authority for specific trigger rules. Machine default = `H`.

**Score examples:**
- "glo-ry of Christ" → "Christ"=`do(H)` — single syllable
- "dance, O faith-ful" → "faith"=`do(H)`, "ful"=`do(H)`
- "Vir-gin Moth-er of God" → director choice (last internal accent): `do(H)·do(Q)·do(Q)·do(H)`
- "Come...di-vine songs!" → "vine"=`do(H)`, "songs!"=`do(W)`
- "Lord, I call...hear me!" → "hear"=`do(H)`, "me!"=`do(W)`
- "Let my prayer a-rise" → "rise"=`do(H)` — single syllable
- "We...suf-fer-ings" → "suf"=`do(H·)`, "fer"=`do(Q)`, "ings"=`do(W)`
- "Ac-cept...O ho-ly Lord!" → "ho"=`do(H·)`, "ly"=`do(Q)`, "Lord!"=`do(W)`
- "En-cir-cle...Zi-on" → "Zi"=`do(H)`, "on"=`do(H)`
- "Come, O peo-ple," → "peo"=`do(H)`, "ple"=`do(W)`

#### Phrase A Logic Chart

| Element | Status | Finding |
|---|---|---|
| Pitch figure | ✅ confirmed | `cad: ["do"]` correct |
| Reciting tone | ✅ confirmed | `re(Q)` |
| Intonation | ✅ confirmed | first accented syllable `re(H)`, unaccented lead-ins `re(Q)` |
| Prep | ✅ confirmed | positional, always `ti(Q)`, not accent-driven |
| Anchor detection | ⚠️ flagged | backup rule interaction with prep needs per-phrase scoping |
| Anchor duration | 📋 provisional | `H` default, `H·` via rhythmic balancing |
| Fill duration | 📋 provisional | `Q` default |
| Close duration | 📋 provisional | `H` default, `H·` or `W` via rhythmic balancing |
| Whole note trigger | 📋 unresolved | rhythmic balancing, no tutorial authority |
| Melisma | ✅ N/A | single pitch cadence, no melisma possible |
| Pre-slur | ⚠️ flagged | needs per-phrase scoping; `single && accent` gate too narrow for positional prep |
| Rhythmic grouping engine | 🔴 missing | drives dotted halves and whole notes |

---

### 12.3 Phrase B — Deep Walkthrough

**Current code:**
```js
B: { recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"] }
```

All three pitch values confirmed correct ✅. No intonation, no prep ✅.

#### Cadence Duration Model — Score Verified

**Tutorial statement:** anchor = half note on `do`; middle syllables on `re` =
quarter notes ("half pulse"); close = half note on `ti`.

**Score-verified duration table:**

| Count | Shape |
|---|---|
| 2 | `do·re(H melisma) · ti(H)` |
| 3 | `do(H) · re(H) · ti(H)` |
| 4+ | `do(H) · re(Q)×n · ti(H)` |

Key findings:
- At count=2: `do` and `re` collapse into a **two-pitch melisma** on the anchor
- Fill `re` is `H` at count=3, drops to `Q` at count≥4
- Close `ti` defaults to `H`
- Dotted halves and whole notes on close driven by rhythmic balancing (Gap A)

#### Whole Note / Dotted Half on Close — Empirical (No Tutorial Authority)

Investigated extensively through score examples. The punctuation hypothesis
(`,`→`H·`, `!`→`W`) was **ruled out** — "let us hymn and fall down before Christ,"
showed `W` despite comma, breaking the pattern.

**Confirmed pattern:** longer reciting sections correlate with shorter close
(`H·`); shorter reciting sections correlate with longer close (`W`). The cadence
close extends to compensate for a short reciting section.

| Verse | Reciting syllables | Close |
|---|---|---|
| "Hear me, O Lord!" | ~0 | `W` |
| "and surround her, O peo-ple!" | ~5 | `W` |
| "let us hymn and fall down be-fore Christ," | ~5 | `W` |
| "Grant us re-mis-sion of sins," | ~3 | `H·` |
| "Who vol-un-tar-i-ly...for our sake." | ~11 | `H·` |

This is rhythmic balancing (Gap A) — cannot be computed from cadence syllables
or punctuation alone. Machine default = `H`. Director pointing is authoritative.

#### Anchor Backup Rule

Tutorial explicitly states for Phrase B: *"If the last word of the text has only
one syllable, then, as in Phrase A, the cadence begins on the last internal
accented syllable."* Since Phrase B has no prep, the backup rule is directly
relevant — the cadence anchor can genuinely be the final syllable of the phrase.
Score verification of this rule in Phrase B context still pending.

#### Phrase B Logic Chart

| Element | Status | Finding |
|---|---|---|
| Pitch figure | ✅ confirmed | `cad: ["do", "re", "ti"]` correct |
| Reciting tone | ✅ confirmed | `do(Q)` |
| Intonation | ✅ N/A | none |
| Prep | ✅ N/A | none |
| Anchor detection | ⚠️ needs verification | backup rule tutorial-confirmed, score verification pending |
| Anchor duration | ✅ confirmed | `H` |
| Fill pitch | ✅ confirmed | `re` |
| Fill duration | ✅ confirmed | `H` at count=3, `Q` at count≥4 |
| Close duration | ✅ confirmed | `ti(H)` default |
| Whole note trigger | 📋 empirical | shorter reciting → `W`; no tutorial authority |
| Dotted half trigger | 📋 empirical | longer reciting → `H·`; no tutorial authority |
| Melisma | ✅ confirmed | `do·re` two-pitch melisma on anchor at count=2 |
| Pre-slur | ✅ N/A | no prep |
| Rhythmic grouping engine | 🔴 missing | drives `H·` and `W` on close |

---

### 12.4 Phrases C, D, Final — PENDING

Analysis continues in subsequent sessions. To be appended here.

---

### 12.5 Open Questions (June 2026)

1. Does the whole note rule for Phrase A close follow the same rhythmic balancing
   pattern as Phrase B? (insufficient score evidence yet)
2. Does the pre-slur in Phrase A fire on accented prep syllables (like "di" in
   "divine")? Currently `single && accent` would fire — but does it fire on
   unaccented positional prep syllables too?
3. What is the correct pre-slur duration for Tone 1 Phrase A? Currently `Q·Q` unverified.
4. Does the anchor backup rule ever correctly fire in Phrase A given prep always
   separates body from cadence anchor?
5. Do Phrases C, D, and Final have melisma behavior? To be determined from scores.

---

*§12 added June 2026 — Phrases A and B complete, C/D/Final pending.*
