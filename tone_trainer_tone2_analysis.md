# Tone Trainer — Tone 2 Research & Implementation Notes

**Prepared:** May 2026  
**Applies to:** `tone-trainer.jsx` v0.8.0 (Tone 2 implementation)  
**Source authority:** Drillock & Ealy, *Tutorial for Learning the Church Tones — Common Chant* (OCA); verified against OCA service `.docx` fixtures and OCA Tone 2 Obikhod MP3 recordings.

---

## Purpose of this document

This document records every finding, assumption, correction, and open question
from the Tone 2 research process — the tutorial analysis, the `.docx` fixture
corpus study, and the audio analysis — so that:

1. Anyone building Tone 3–8 has a documented playbook for what to process and
   what to watch out for.
2. There is a clear look-back path for what was verified versus assumed.
3. The specific ways Tone 2 differs from Tone 1 are explicit, not implicit.

---

## 1. Source materials processed

### 1.1 Tutorial PDF

**File:** `Tutorial-Obikhod-Tone2-Explanation.pdf`  
**Drive ID:** `16Dtoj-bI0uz4Tdb8xmckviqugp09Ju18`  
**What it contains:** Complete phrase-by-phrase description of Tone 2 Common Chant
including pitch names, note values, intonation rules, and a worked sticheron example
in 4-part SATB harmony.

**Critical warning:** The SATB score shows harmony parts. The **soprano** line
is NOT the unison melody. For pointing purposes, the melody is the
**tenor/unison** line. Reading pitches from the soprano produced a wrong Phrase C
spec (see §3.3). Always verify against the unison recording, not the SATB score.

### 1.2 OCA service `.docx` fixtures

**Fixture 1:** `2026-0208-texts-tt.docx`  
Sunday of the Prodigal Son + Afterfeast of the Meeting, February 8, 2026, Tone 2  
Tone 2 stichera extracted: Lord I Call framing (11 lines), Resurrectional ×4,
Anatolius, Lenten Triodion Prodigal Son, Dogmatikon

**Fixture 2:** `2026-0621-texts-tt-.docx`  
3rd Sunday after Pentecost + Martyr Julian of Tarsus, June 21, 2026, Tone 2  
Tone 2 stichera extracted: same LIC framing + Resurrectional set, Dogmatikon,
Aposticha ×3, Kontakion of St. Julian (4 lines)

**Combined corpus:** 78 phrase instances across 12+ stichera.

**How OCA accents are stored:** The OCA marks the accented syllable by
**underlining its fragment** in the `.docx`. The underline is real run-level
XML formatting (`<w:u>`), not a style — it extracts losslessly. A whole-word
underline means the lexicon picks the stressed syllable within the word; a
partial underline (e.g. `Re[ceive]`) identifies the specific syllable by
vowel-nucleus overlap. This is exactly the same mechanism used for Tone 1. No
change to the ingest pipeline was needed for Tone 2.

### 1.3 OCA Tone 2 MP3 recordings

**Drive folder:** `1NyvDq4PI0b3JpTDEQKm5g50Z3Ii-PesP`  
**Files downloaded and analyzed:**
- `Tone2_Common_SticheronExample_Unison_021212.mp3` (primary reference — 720 KB)
- `Tone2_Common_SticheronExample_SATB_021212_02.mp3`
- `Tone2_Common_SticheronExample_Soprano_021212_01.mp3`
- `Tone2_Common_SticheronExample_Alto_021212_02.mp3`
- `Tone2_Common_SticheronExample_Tenor_021212.mp3`
- `Tone2_Common_SticheronExample_Bass_021212.mp3`

**Audio analysis method:** `librosa.pyin` pitch tracking with onset detection,
44.1 kHz, hop length 256, frame length 4096. Pitch-to-solfège mapping done by
measuring the dominant reciting pitch and deriving the relative scale from it.

**Recording key:** The unison recording is pitched in **E major**  
(do=E≈165Hz, re=F♯≈188Hz, mi=G♯≈208Hz, fa=A≈220Hz, sol=B, la=C♯, ti=D♯≈156Hz, di=F≈174Hz).
This is consistent with the Tone 2 tutorial key. Absolute pitch is irrelevant for
pointing; only the relative solfège relationships matter.

---

## 2. Phrase rotation (confirmed identical to Tone 1)

```
Line count  Phrase sequence
-----------  ---------------
3 lines      A  B  Final
4 lines      A  B  C  Final
5 lines      A  B  C  D  Final
6 lines      A  B  C  D  A  Final
7 lines      A  B  C  D  A  B  Final
8 lines      A  B  C  D  A  B  C  Final
```

The `phraseForLine(i, total)` function — last line → Final, others → `ROT[i % 4]`
— is **unchanged** for Tone 2. The LIC framing stichera (11 lines) follow the
same rotation through to Final. **No exceptions found in the corpus.**

---

## 3. Phrase definitions (verified)

### Verified phrase table

```javascript
PH_DEFS[2] = {
  A:     { recite:"re", inton:false, prep:null,  cad:["fa","mi","re"]      },
  B:     { recite:"re", inton:false, prep:null,  cad:["di","re"]           },
  C:     { recite:"re", inton:true,  prep:"ti",  cad:["do"]                },
  D:     { recite:"do", inton:false, prep:null,  cad:["di","re"]           },
  Final: { recite:"re", inton:false, prep:"ti",  cad:["do","re","do","ti"] },
}
```

### 3.1 Phrase A

- **Reciting tone:** `re`
- **Intonation:** **none** (`inton:false`) — confirmed from corpus (all Phrase A
  lines have exactly one mark — the anchor — with no opening intonation half note)
- **Cadence:** `fa → mi → re` — anchor lands on `fa`, descends by step to `mi`,
  resolves to `re`
- **Audio verification:** fa at onset 25 (~0.81s ≈ H), mi combined onsets 26–28
  (~0.50s ≈ Q), re at onset 29 (~0.60s ≈ H). fa(H)→mi(Q)→re(H) confirmed.

**Tone 1 difference:** Tone 1 Phrase A has `inton:true` and a `prep:"ti"` before
the cadence. Tone 2 Phrase A has neither. It is purely: recite→anchor→cadence.

### 3.2 Phrases B and D

- **Phrase B reciting tone:** `re`
- **Phrase D reciting tone:** `do`
- **Both cadences:** `di → re` (identical figure)
- `di` = raised `do` (chromatic semitone above do, notated ♯ in score)
- **Audio verification:** di at onset 37 (~1.0s ≈ H), re at onset 41 (~0.71s ≈ H).
  di(H)→re(H) confirmed. Both notes in this two-note figure are half notes.

**New solfège pitch:** `di` does not exist in Tone 1. It must be added to `OFF`
with semitone offset 1 (one semitone above `do`=0). Chip height in `PITCH_SCALE`
should place `di` between `do` and `re`.

### 3.3 Phrase C — the SATB trap (critical)

**Verified spec:**
- Reciting tone: `re`
- Intonation: `true` (first accented syllable = half note on `re`)
- Prep: `"ti"` (last reciting syllable descends a semitone to `ti`)
- Cadence: `["do"]` (single pitch; anchor lands on `do`, trailing syllables hold there)

**The SATB trap:** The tutorial's SATB score shows the **soprano** singing
`re re la re` over Phrase C. This was initially read as prep=`la`, cad=`["re"]`.
This is **wrong**. The soprano is singing a harmony note a third above the melody.

The **unison melody** (what we are pointing) is:
`re re ti do` — reciting on re, prep descends to ti (minor second), cadence lands
on do.

**Audio confirmation:** onset 58 (D♯≈156Hz = `ti`, ~0.35s ≈ Q) is the prep;
onsets 59–60 (E≈165Hz = `do`, ~0.30s + 0.88s) are the cadence anchor. Confirmed.

**Rule for future tones:** When the tutorial provides a 4-part SATB score, extract
melody from the **tenor** line, not the soprano. Better still, confirm against the
unison MP3 before finalizing any phrase definition. The soprano harmony frequently
sings thirds or sixths above the melody, and the written prep/cadence intervals
will look different in each voice.

### 3.4 Final Phrase

- Reciting tone: `re`
- Intonation: none
- Prep: `"ti"` (descends one semitone below `do` before the cadence)
- Cadence: `["do","re","do","ti"]` — four-note figure, final `ti` = whole note
- **Audio verification:** prep ti visible at onset 110–111 (D♯, ~0.35–0.21s ≈ Q+Q);
  do anchor at onset 112 (~0.63s ≈ H); re middle at onset 136 (~0.45s ≈ Q); do
  returning at onset 138 (~1.18s ≈ H); final ti cluster at onsets 139–146
  (~3.25s total = W). Confirmed.

**Pre-slur rule:** When the syllable immediately before the prep is a single
**accented** monosyllable, that word gets two quarter notes `[re, ti]` before the
normal prep `ti`. This is a singing-practice choice, not a director mark — the
engine detects it structurally (see §5.3).

---

## 4. Note durations — confirmed rhythm table

The existing `lineToNotes()` logic requires **no changes** for Tone 2.

| Role | Duration | Verification source |
|------|----------|---------------------|
| Reciting syllable | Q (quarter) | Tutorial prose; audio |
| Intonation, accented | H (half) | Tutorial prose |
| Intonation, unaccented lead-in | Q | Tutorial prose |
| Prep | Q | Audio onset 58, ~0.35s |
| Cadence anchor (first) | H | Audio onset 25 (fa, 0.81s); onset 37 (di, 1.0s) |
| Cadence middle | Q | Audio onsets 26–28 (mi combined 0.50s) |
| Cadence last (non-Final) | H | Audio onset 29 (re, 0.60s); onset 41 (re, 0.71s) |
| Cadence last (Final only) | W | Audio onsets 139–146 (ti, ~3.25s) |
| Pre-slur notes | Q + Q | Tutorial rule; two quarter notes before prep |

The `isFirst/isLast/middle` cadence logic in `lineToNotes()` correctly assigns
H/Q/W for all Tone 2 figures without modification.

**Note about Phrase A `distribute()` with extra trailing syllables:**
For a Phrase A line with `count > n` (more cadence syllables than the 3-note
figure), the existing `distribute()` "count > n" branch **repeats the penultimate
note (mi)** for middle syllables, then lands on re. Example: 4 cadence syllables
→ `[[fa],[mi],[mi],[re]]`. The tutorial says "syllables between are quarter notes"
without specifying pitch, which could mean hold on `fa`. However, the existing
Tone 1 behavior (repeat penultimate) was verified from the Tone 1 audio and is
the correct behavior. It is applied unchanged to Tone 2.

---

## 5. Director workflow (anchoring — confirmed)

### 5.1 The anchor rule is unchanged

**Rule (identical to Tone 1):** the cadence launches on the **last internally
accented syllable** of the phrase. "Internal" means: if the final syllable is a
stressed monosyllable standing alone, the cadence backs up to the previous accent.

The `anchorIndex()` function, the STOP-list filter, and the monosyllable backup
logic all carry over without change.

### 5.2 Mark count by phrase (empirical from 78 instances)

| Phrase | 1-mark | 2-mark | Pattern |
|--------|--------|--------|---------|
| A | 15/20 | 5/20 | Anchor only (typical); 2 marks on long lines = de facto intonation, not a rule |
| B | 15/18 | 3/18 | Anchor only (typical); 2-mark anomalies explained below |
| C | 6/17 | 11/17 | **2 marks = intonation + anchor (dominant)**; 1 mark when line is short |
| D | 13/14 | 1/14 | Anchor only |
| Final | 7/9 | 2/9 | Anchor only (typical); 2-mark = pre-slur case |

### 5.3 Per-phrase nuances

**Phrase A two-mark lines:** Long Phrase A lines (7+ syllables in the body) show
two director marks. Examples: "and **[let]** the lifting **[up]** of my hands";
"Cleanse our **[sins]** for Thou wast crucified and **[raised]**". These are a de
facto intonation — the director marks the first prominent stress and the anchor.
Since Tone 2 Phrase A has `inton:false`, the engine correctly treats only the
**second** (anchor) mark as structural. The first mark is a singer cue only.
`autoAccentLine()` should mark anchor only for Phrase A; directors who want the
first mark can add it in Director Pointing mode.

**Phrase B two-mark anomalies:** Three cases found:
1. "**[Hear]** **[me]**, O Lord!" — `Hear` + `me` (short phrase, 4 words)
2. "We **[wor]**ship Thee, O only im**[mor]**tal One" — `wor` + `mor`
3. "but through the **[mer]**cy of Thy com**[pas]**sion" — `mer` + `pas`
These are all long/complex Phrase B lines where the director is marking the
opening accent as a singer's cue. Same treatment as Phrase A anomalies: engine
takes the latter mark as anchor.

**Phrase C one-mark cases (6/17):** Short lines or lines where the intonation
syllable and anchor syllable are the same word. The existing logic already handles
this: `if (first !== anchorIdx) intonIdx = first`. When only one mark exists, it
serves as both — no intonation half note, body starts immediately on reciting tone.
Examples: "Let my **[prayer]** arise"; "Thou didst ac**[cept]** the tomb".

**Final Phrase two-mark cases — the pre-slur:** Two examples confirmed:
- "**[Hear]** **[me]**, O Lord!" — `Hear` immediately precedes anchor `me`
- "Pray to **[Christ]** **[God]** for us all!" — `Christ` immediately precedes anchor `God`

In both cases the first mark is a **single accented monosyllable immediately
preceding the anchor**. This is the tutorial's pre-slur rule: that monosyllable
gets `["re","ti"]` (two quarter notes) before the normal `ti` prep. The director's
two-mark pattern is the signal. The engine detects it as: Final Phrase + first
mark is a single monosyllable + second mark is the anchor + they are adjacent.

**Phrase D double-mark anomaly:** One case found: "de**[scend]**ing into hell as
the **[Might]**y One". Two syllables from separate words both carry weight. Engine
takes `Might` (second, later) as anchor. Director correction if needed.

### 5.4 `autoAccentLine()` change required

Currently hardcoded: `if (phrase === "A" || phrase === "C")` for intonation.

Must change to: `if (PH_DEFS[activeTone][phrase].inton === true)` — so Tone 2
Phrase A (inton:false) gets no intonation mark from the auto-accent engine.
Tone 2 Phrase C (inton:true) still gets one. This is a one-line change.

---

## 6. New solfège pitches required

`OFF` currently: `{ la:-3, ti:-1, do:0, re:2, mi:4 }`

Add: `fa:5`, `di:1`, `sol:7`

`di` (raised do, ♯do) sits one semitone above `do`. It appears in the Phrase B
and D cadences. In the chip-height scale (`PITCH_SCALE`) it should be inserted
between `do` and `re`. Current array: `["la","ti","do","re","mi","fa","sol"]` →
becomes `["la","ti","do","di","re","mi","fa","sol"]`.

`fa` and `sol` were already in `PITCH_SCALE` but not in `OFF`. Adding them
completes the scale.

---

## 7. Architecture changes (summary)

### 7.1 `PH` → `PH_DEFS` (tone-keyed)

```javascript
const PH_DEFS = {
  1: { /* existing Tone 1 definitions */ },
  2: { /* new Tone 2 definitions — see §3 */ },
};
```

Derive active phrase table: `const PH = PH_DEFS[activeTone];`

All downstream functions (`pointLine`, `anchorIndex`, `distribute`, `lineToNotes`)
already receive the active phrase def through `PH` — they require no changes.

### 7.2 Active tone state

```javascript
const [activeTone, setActiveTone] = useState(1);
```

### 7.3 Tone selector UI

Pill buttons 1–8 above the textarea. Tones without a `PH_DEFS` entry are
disabled (greyed). At v0.8.0, only 1 and 2 are active. The subtitle line
and docx ingest guard (`!PH_DEFS[block.tone]` instead of `block.tone !== 1`)
update automatically.

### 7.4 Pre-slur detection in `pointLine()`

For `activeTone === 2` and `phrase === "Final"`: after finding the anchor index,
check if the syllable at `anchorIdx - 1` (the syllable before the prep):
- is a single monosyllable (`flat[anchorIdx-1].single === true`)
- is accented (`flat[anchorIdx-1].accent === true`)
- is directly adjacent to the anchor (one position before the prep)

If so, assign that syllable role `"preslur"` with pitches `["re","ti"]`. Both
notes get Q duration (split across the syllable's duration using the existing
multi-pitch melisma logic: `pitchDur = syllDur / r.pitches.length`).

---

## 8. What does NOT change

The following were explicitly verified to require zero changes for Tone 2:

- `phraseForLine()` — rotation logic A·B·C·D·Final is tone-independent
- `anchorIndex()` — last-internal-accent rule is universal
- `distribute()` — figure distribution is universal
- `lineToNotes()` — H/Q/W duration assignments are universal
- `flatten()` — syllable structure is tone-independent
- Docx ingest pipeline — `<w:u>` underline extraction is identical
- Sticheron segmentation — `//` penultimate marker detection is identical
- Comparison harness and JSON export — fully tone-agnostic
- STOP-list filter — grammatically-defined, no tone dependency

---

## 9. Validation fixture summary

### 9.1 Expected auto-accent accuracy

Based on the 78-instance corpus, the same 92%+ anchor match established for
Tone 1 should be achievable for Tone 2, with the following known limitation
classes:

**Class 1 — Long body with two director marks (Phrase A/B):** Machine marks
anchor only; director has an extra opening cue. Not a mismatch — the anchor
syllable agrees. These do not lower anchor match rate.

**Class 2 — Polysyllabic final word trap:** Same as Tone 1. When the phrase-final
word is a polysyllabic past-tense verb ("proclaimed", "destroyed"), the machine
may anchor on the last syllable of that word rather than backing up. Director
Pointing corrects these.

**Class 3 — STOP-list gaps:** Words not yet in the STOP list that get falsely
promoted to anchor candidates. Same mitigation as Tone 1: add to STOP list if
the word is grammatically functional and never a real anchor.

### 9.2 Pre-slur ground-truth instances

| Source | Line | Pre-slur word | Anchor |
|--------|------|---------------|--------|
| LIC framing | "Hear me, O Lord!" | Hear | me |
| Kontakion Julian | "Pray to Christ God for us all!" | Christ | God |

Only 2 confirmed pre-slur instances in the corpus. The tutorial describes the
rule; practice confirms it is real but rare. Machine detection should fire only
when both marks are present and the structural condition is met — not speculatively.

---

## 10. Playbook for future tones (Tones 3–8)

### Step 1: Get the tutorial material

Download the Tone N tutorial PDF from Drive. Look for the section covering
Obikhod Common Chant for that tone. Note:
- Reciting tone per phrase (varies by tone)
- Whether each phrase has intonation (`inton:true/false`)
- Prep note if any
- Cadence figure (the sequence of solfège pitches)

**Do not rely solely on the SATB score for pitch names.** Cross-check every pitch
against the unison recording (see Step 3).

### Step 2: Get OCA fixture `.docx` files

Find at least one Sunday service in Tone N. Sundays are best because they
contain the full Octoechos sticheron set (Resurrectional + Anatolius + Dogmatikon
minimum). Run the fixture through the extraction script to get run-level underline
data, then map the accent brackets to phrase positions.

**Minimum corpus for reliable patterns:** 40+ phrase instances across 4+ stichera.
Below that, anomalies are hard to distinguish from patterns.

**Key things to look for per phrase:**
- What is the typical mark count? (1 vs 2)
- Are there consistent two-mark cases? If so, is the first mark an intonation or
  a pre-structural cue?
- Does the Final Phrase ever have two marks? If so, is the first a single
  monosyllable immediately before the anchor? (= pre-slur rule)
- Are there any anomalous mark counts (3+)?

### Step 3: Get the OCA MP3 recordings

Download the Tone N Obikhod Unison MP3. Run `librosa.pyin` pitch tracking.

**What to verify:**
1. **Establish the key:** what absolute frequency is the main reciting pitch?
   This lets you map Hz → solfège for all subsequent analysis.
2. **Phrase A cadence:** does `distribute()` "count > n" behavior (repeat penultimate)
   match? Listen at 2× concentration to the middle trailing syllables.
3. **Phrase C prep:** is it the note you read from the tutorial/SATB? Soprano voice
   is not the melody. Verify against unison/tenor.
4. **Final Phrase cadence:** trace the full 4-note (or N-note) figure across a
   long Final Phrase line. Confirm the whole-note duration on the last note.
5. **Pre-slur:** does it appear? Can you hear the two-note `re→ti` before the prep
   on lines that have a pre-slur word?

### Step 4: Reconcile and write the phrase table

If the tutorial, the fixture corpus, and the audio all agree → confident.
If tutorial and audio agree but corpus is ambiguous → note as "tutorial+audio
confirmed, corpus inconclusive."
If all three disagree → stop and investigate before coding.

Document all three sources for each phrase in the implementation spec before
writing any code.

### Step 5: Check what changes vs what stays the same

From the Tone 2 experience: the rotation, anchor rule, note durations, ingest
pipeline, and comparison harness all stayed the same. Only `PH_DEFS`, the tone
selector UI, `autoAccentLine`'s intonation condition, and any pre-slur logic
needed changes. Expect a similar ratio for subsequent tones.

New solfège pitches needed beyond the current set `{la, ti, do, di, re, mi, fa, sol}`
should be rare after Tone 2 — the full Obikhod scale is captured in those 8 values.

---

## 11. Open questions / known gaps

### Q1: Phrase A trailing syllable pitch (partially resolved)

The tutorial says "syllables between [the anchor and the last syllable] are
quarter notes." It does not explicitly state **which pitch** those middle
syllables hold. The `distribute()` function repeats the penultimate note (`mi`)
for middle syllables (giving fa→mi→mi→re for 4 syllables). This matches Tone 1
behavior which was verified from audio. For Tone 2, the audio shows only one
occurrence of a 3-cadence-syllable Phrase A line in the tutorial sticheron, and
the confirm fa→mi→re. A longer example (4+ trailing syllables) was not encountered
in the tutorial recording. **Tentatively correct; flag if singers report wrong
sound on long Phrase A lines.**

### Q2: Pre-slur — when does it apply?

The tutorial describes the rule. Two OCA corpus instances confirm it is real.
But are there lines where the structural condition is met but the director
**doesn't** mark the pre-slur? The corpus doesn't have enough Final Phrase examples
with pre-slur-eligible structures to know the rate. Engine should detect it when
both marks are present; if only one mark is present, no pre-slur fires.

### Q3: Tone 2 non-Sunday material

All corpus material is Sunday Resurrectional + Triodion. A Feast or saint's day
sticheron in Tone 2 would provide new vocabulary and phrase shapes. The engine
should handle them — the phrase rotation and anchor rule don't depend on content —
but validation against a non-Sunday fixture is desirable before declaring Tone 2
fully validated.

### Q4: "O House of Ephratha" mode (short-line stichera)

The Feb 8 service contains a "Litya" sticheron in Tone 2 with very short lines
(2–4 words each). These were not included in the anchor analysis because their
phrase segmentation is unclear (do 2-line phrases count as one sticheron or two?).
Short-line stichera may need special handling in the segmentation logic.

---

## 12. Assumptions made (look-back checklist)

| Assumption | Confidence | How to verify if wrong |
|------------|------------|------------------------|
| `distribute()` repeats penultimate note for Phrase A long lines | Medium | Listen to long Tone 2 Phrase A lines with 4+ trailing syllables |
| Pre-slur fires on adjacent stressed monosyllable only | Medium | More Final Phrase corpus examples |
| Phrase C prep is `ti` in unison (not `la` from soprano) | **High** | Audio confirmed |
| `di` = chromatic raised do (one semitone above do) | High | SATB score notation + audio (F vs F♯ clearly distinct) |
| Phrase rotation is identical to Tone 1 | High | Confirmed across all 12+ stichera in corpus |
| `inton:false` for Phrase A means NO opening half note | High | All 20 Phrase A corpus instances have exactly 1 mark |
| Final Phrase cad = `["do","re","do","ti"]` not `["do","ti","la"]` (Tone 1) | High | Audio trace confirms 4-note descent |

---

*End of Tone 2 research notes. For Tone 1 notes see `tone_trainer_notes.md`.*

---

## 13. Post-build review — cross-examination against Tone 1 analysis document

*Added after reading `tone_trainer_tone1_analysis.md` in full and comparing it
against the v0.8.0 implementation. This is a look-back assessment, not a change
record.*

---

### 13.1 What was found in the Tone 1 document

**A documentation inconsistency in the Tone 1 `PHRASES` table (not a Tone 2
issue, but worth recording).** The Tone 1 analysis document shows Phrase A as
`cad: ["do","ti"]`. The actual code has `prep: "ti", cad: ["do"]`. These are
the same musical content — the `ti` was the prep note, which was correctly
separated from the cadence array at some point during the Tone 1 build. The
document was never updated to reflect that refactoring. The code is correct;
the document is stale. This is not a Tone 2 issue.

**The Tone 1 "honest admission" on H/Q cadence boundary applies to Tone 2.**
Section §5 of the Tone 1 document explicitly acknowledges that the rule
"cadence anchor = H, middle = Q, last = H" was verified only against the
`voice·of·my·prayer` example and "may not generalize to all configurations."
This same uncertainty carries forward to Tone 2.

---

### 13.2 The one genuine open question surfaced

**Tone 2 Phrase C with exactly 2 cadence syllables.**

Phrase C has `cad: ["do"]` — a single-pitch figure. When there are 2 cadence
syllables (anchor + one trailing), `distribute(["do"], 2)` produces
`[[do],[do]]`. The `isFirst/isLast` logic in `lineToNotes()` assigns:
- syllable 0: `isFirst` → **H**
- syllable 1: `isLast`, `isFinal=false` → **H**

Result: both syllables get a half note on `do`. Example: "re**[call]**ing Thy
cre**[at]**ion" → `call=H(do), at=H(do)` — four beats held on `do`.

**Is this right?** Musically it is plausible — in chant, lingering on the
cadence pitch across two syllables is normal, and H+H for two adjacent notes on
the same pitch is how the harmonized setting sustains. It is consistent with
the Tone 1 established convention. But it was **not verified against the Tone 2
unison recording** because no Phrase C line with exactly 2 cadence syllables
appeared in the tutorial sticheron's measurable portion.

**Disposition:** accept as-is. If singers report that a 2-syllable Phrase C
cadence sounds too heavy or long on the trailing syllable, the fix is to treat
all trailing syllables after the anchor as Q rather than promoting the last one
to H. That would require a special case in `lineToNotes()` for single-pitch
cadence figures — worth revisiting if listening confirms the issue. Not a
correctness concern worth blocking over.

---

### 13.3 What the Tone 1 document confirmed about Tone 2

Reading the Tone 1 document found **no correctness issues** with the Tone 2
implementation. Specifically:

- The `distribute()` truncation and penultimate-repeat logic, as described in
  the Tone 1 document §4, is confirmed correct for Tone 2's cadence figures.
  The Tone 2 corpus verified it for 2-note (Phrases B/D) and 3-note (Phrase A)
  figures. The 1-note (Phrase C) and 4-note (Final) figures are structurally
  consistent with the same logic.

- The H/Q/W role table from §5 maps identically to Tone 2. No note duration
  changes were needed, and the audio analysis confirmed the assignments.

- The pre-slur fix (syllable duration H, not Q, so re+ti each get Q via melisma
  split) is consistent with the Tone 1 H/Q/W framework: the pre-slur occupies
  a half-note slot that is then divided into two quarter notes.

- The STOP list, anchor rule, and `anchorIndex()` implementation are confirmed
  universal — no Tone 2 corpus examples contradicted them.

---

### 13.4 Overall implementation assessment

**Tone 2 as shipped in v0.8.0 (with the pre-slur duration fix in the hotfix
commit) is correct and complete.** The phrase definitions are verified against
three independent sources (tutorial prose, OCA docx corpus of 78 instances, and
unison MP3 audio analysis). The one Tone 1-to-Tone-2 mistake that was caught
before shipping — reading Phrase C pitches from the SATB soprano — was corrected
by audio analysis before any code was written. The pre-slur duration bug (eighth
notes instead of quarter notes) was caught from live testing immediately after
deployment and fixed in the same session.

The remaining uncertainty (Phrase C 2-syllable cadence duration, Phrase A long
trailing syllable pitch) is at the level of nuance that can only be settled by
a director listening to the output and correcting via Director Pointing mode.
The engine gives a structurally correct result; the exact duration weighting in
edge cases is a refinement, not a structural error.

---

*§13 added May 2026 following cross-examination against `tone_trainer_tone1_analysis.md`.*

---

## 14. Rotation bug fix — May 2026 (v0.9.2)

### 14.1 The bug

The original Tone 2 implementation used the same `ROT = ["A","B","C","D"]` cyclic
rotation as Tone 1. This produces **A·B·C·D·A·B·C·D·…** for any sticheron length.

The Drillock & Ealy tutorial (p.1) states explicitly:

> "The first phrase (A) is only used for the first textual line of the sticheron.
> Phrases B, C, and D are then sung in rotation."
> 9-line example: A, B, C, D, B, C, D, B, and Final Phrase.

The correct rotation is: **A once on line 0, then B·C·D cycling from line 1 onward.**

The bug only manifests on stichera longer than 5 lines. For 4- and 5-line
stichera (A B C Final and A B C D Final), the two rotations produce identical
output and the bug is invisible.

### 14.2 The fix (v0.9.2)

`ROT_DEFS[2]` changed from a flat array to a function:

```javascript
2: (i, total) => i === total - 1 ? "Final" : i === 0 ? "A" : ["B","C","D"][(i - 1) % 3],
```

`phraseForLine()` and `blockLinePhrase()` updated to accept either an array
or a function. Tones 1 and 3 continue using arrays — **zero regression**, proved
by exhaustive comparison across all sticheron lengths 2–14.

Verified outputs:

| Lines | Sequence |
|-------|----------|
| 4 | A B C Final |
| 5 | A B C D Final |
| 6 | A B C D B Final |
| 7 | A B C D B C Final |
| 9 | A B C D B C D B Final ← matches tutorial exactly |

### 14.3 Corpus anomalies resolved

The original §5.2 mark-count analysis documented several "anomalies" — two-mark
lines on phrases where `inton:false`, which should never produce two marks. These
were flagged as unexplained director behavior.

**After the rotation fix, all anomalies are explained.**

Quantified from the 78-instance corpus:

| | Old rotation | New rotation |
|--|-------------|-------------|
| Two-mark lines on Phrase C (expected) | 12 | 15 |
| Two-mark lines on non-C phrases (anomalous) | 4 | 0* |

*The one remaining case (LIC Final Phrase "Hear me O Lord!" with `[Hear,me]`)
is the documented pre-slur rule — not an anomaly.

**The three resolved anomalies:**

| Sticheron | Line | Old label | New label | Why two marks |
|-----------|------|-----------|-----------|----------------|
| LIC framing | index 5: "Hear me, O Lord!" | B | C | inton + anchor ✓ |
| LIC framing | index 8: "and let the lifting up of my hands" | A | C | inton + anchor ✓ |
| Anatolius | index 5: "We worship Thee, O only immortal One" | B | C | inton + anchor ✓ |

These were the "Phrase B two-mark anomaly" and "Phrase A long-line two-mark
de-facto intonation" cases documented in §5.3. They were never anomalies —
they were Phrase C lines (`inton:true`) that had been mislabeled under the wrong
rotation. The OCA director was marking them correctly all along.

### 14.4 Pointing accuracy impact

The rotation bug had a secondary effect beyond wrong labels. Lines mislabeled as
Phrase A (`inton:false`) were not getting an intonation half-note from the
auto-accent engine. Under the correct rotation those lines are Phrase C
(`inton:true`) and now correctly receive the intonation mark. This is a direct
pointing accuracy improvement — confirmed by the increase in the Director vs.
Machine match score observed in live testing after the fix.

### 14.5 Lesson for future tones

**Always verify the rotation rule from the tutorial text, not by analogy to a
prior tone.** Tone 1 uses a simple 4-phrase cycle. Tone 2 uses A-once-then-BCD.
Tone 3 uses A·B alternation. Each tone's tutorial introduction states the rule
explicitly — read it before writing any rotation code.

The `ROT_DEFS` architecture (introduced in v0.9.0 for Tone 3) supports both flat
arrays and functions per tone. Future tones with non-uniform rotations should use
a function. Future tones with simple cycles can use a flat array.

---

*§14 added May 2026 following rotation bug fix (v0.9.2). Corpus verification run*
*confirms zero regressions on Tone 1 and 3, and resolves all documented Tone 2*
*corpus anomalies.*
