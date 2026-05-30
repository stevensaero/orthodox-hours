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
  A:     { recite: "re", prep: "ti",  cad: ["do","ti"] },
  B:     { recite: "do", prep: null,  cad: ["do","re","ti"] },
  C:     { recite: "re", prep: null,  cad: ["do","ti"] },
  D:     { recite: "do", prep: null,  cad: ["ti","do","re","do","ti"] },
  Final: { recite: "re", prep: null,  cad: ["do","ti","la"] },
}
```
For future tones: this object is the single point of truth for phrase definitions.
Each tone needs its own equivalent object with its own reciting tones and cadence
figures.

---

## 3. The anchor rule (cadence placement)

### The rule as implemented
The cadence begins on the **last internal accent** of the phrase. "Internal" means:
if the final syllable of the phrase is an *accented monosyllable* (a single-syllable
content word that carries an accent), back off to the previous accent as the anchor.

Example: "hear me" — if "hear" and "me" are both accented monosyllables, the
anchor is "hear" (backs off from "me").

Example: "upon Thee" — the anchor is "pon" (the stressed syllable of "upon"),
not "Thee" (which is unaccented in practice even though it's a content word).

### Source of the rule
**Drillock & Ealy tutorial**, worked examples section. The tutorial explicitly
states the cadence "begins with an accented syllable" and the worked examples
show the backup rule for monosyllabic final words.

### What was tested
The rule was verified by hand against the worked examples in the tutorial text
and against the OCA docx materials (Lord I Call verses). The `[Hear] [me]` case
(two consecutive accented monosyllables on the Final Phrase) was specifically
verified — both carry accents, the anchor backs off to "Hear," and "me" rides
the cadence figure's second note (do).

### Honest uncertainty
The backup rule fires on single-syllable *accented* final words. The definition
of "accented" in this context is the OCA underline mark (from the docx), not
the lexicon's stress guess. When auto-accentuating (no docx underline), the
heuristic may misclassify a final word as accented or unaccented. This is a
known gap that Feature B's comparison harness will surface empirically.

---

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

### Current state (v0.4.0)
The `lineToNotes` function uses heuristic durations: ~0.45s per reciting tone
syllable, ~0.55s per cadence syllable, 1.0s for the final note. These are
**not** derived from the score's actual note values.

### What the tutorial and score say
**From Drillock & Ealy and verified from the LIC score:**

| Role | Note value | Duration relative to quarter |
|------|-----------|------------------------------|
| Reciting tone (unaccented) | quarter note | 1 beat |
| Reciting tone (accented, beat group) | effectively half note | 2 beats |
| Cadence notes | half notes | 2 beats |
| Final note | whole note | 4 beats |
| Intonation | half note | 2 beats |

The reciting tone groups unaccented syllables in pairs or triples under an
accent — the accented syllable "owns" the beat and the following unaccented
syllable(s) attach to it. This is the quarternote grouping rule.

Verified from the LIC score: Re(quarter)·ceive(half)·the(half)·voice(half)·
of(quarter)·my(quarter)·prayer(half). "Re" is an unaccented reciting-tone
syllable (quarter); "ceive" is the cadence anchor (half); "of" and "my" are
unaccented cadence syllables (quarter each); "prayer" is the phrase-final
cadence note (half). Note that "of" and "my" are cadence syllables carrying
do and re but notated as quarter notes — the cadence figure's notes are
all half notes in the *general* case but become quarter notes when there are
many cadence syllables and the line needs to fit a standard musical phrase length.

**Honest admission:** the quarter/half distinction within the cadence figure
(when to use quarters vs. halves for cadence syllables) is not fully resolved
from the score analysis alone. The general rule from the tutorial is half notes,
but the score shows quarter notes on "of" and "my." This may be a function of
the overall tempo and phrase length rather than a fixed rule. Needs further
investigation.

### Implementation path (backlog item #7)
Replace heuristic constants in `lineToNotes` with role-based duration multipliers
derived from the tutorial rules. The accent array and role assignments are already
computed by the pointing engine — no new data structures needed.

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
the docx underlines are not a complete truth set and the comparison harness (B)
needs to account for this.

**B1 — Physical marking convention in hand-outs:** for parish print materials
(not the OCA-distributed digital files), what convention does the director use?
Bold? Underline? Acute accent? This matters if the tool is ever extended to
ingest hand-marked materials.

**Quarter vs. half within cadence figure:** when a cadence figure has many
syllables, the score shows some cadence syllables as quarter notes rather than
half notes (see §5). The boundary condition — when does a cadence note become
a quarter vs. a half — is not fully resolved. May be a function of the total
phrase length in measures rather than a fixed rule.

**Phrase D final ti:** the fifth note of Phrase D's cadence figure (ti·do·re·do·ti)
appears when there are 5+ cadence syllables but is dropped for fewer. Whether the
final ti ever appears in common sticheron lines, or whether it is effectively always
dropped, was not systematically verified across the corpus.

---

*This document reflects what was actually discovered, what was assumed, and where
honest uncertainty remains. It is not a polished theory document — it is a working
record. Future sessions should update it as new evidence resolves the open questions
or as new tones are built.*
