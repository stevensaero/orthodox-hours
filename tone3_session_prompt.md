# Tone 3 Build Session — Start Here

**Goal:** Implement `PH_DEFS[3]` in `tone-trainer.jsx`, enabling Tone 3 (Common
Chant / Obikhod) stichera pointing and singing. Ship as v0.9.0.

---

## Step 1 — Clone the repo and orient

```bash
cd /home/claude
git clone https://TOKEN@github.com/stevensaero/orthodox-hours.git
cd orthodox-hours
git config user.email "bill@stevensaero.com"
git config user.name "Stevens Aero"
```

Read these files in order before doing anything else:

1. `tone_trainer_tone2_analysis.md` — the playbook. Read §10 (future tone
   checklist) and §13 (post-build assessment). This is the primary guide.
2. `tone_trainer_tone1_analysis.md` — read §8 (guide for next tone) and §11
   (cross-tone addendum). The §11.5 checklist is the pre-code gate.
3. `tone_trainer_notes.md` — current trainer state, backlog, known issues.
4. `src/components/tone-trainer.jsx` — read `PH_DEFS` (lines ~230–260) to
   understand the exact data structure you are adding to. Read `pointLine()`,
   `autoAccentLine()`, `autoEncodeLines()` to understand what PH drives.

---

## Step 2 — Read the Tone 3 tutorial PDF

**Drive file ID:** `1wuGATRbkxcUxjIzZTpCHfeoX90uXXFLS`  
**Title:** `Tutorial-Obikhod-Tone3-Explanation.pdf`

Use `Google Drive:read_file_content` with that file ID. Read it completely.

### Critical things to extract:

**Tone 3 is structurally different from Tones 1 and 2.** From the file snippet
already retrieved, the key facts are:

- **Only TWO phrase types in rotation: A and B** (not four). Plus a Final Phrase.
- Rotation: A · B · A · B · … Final. A 5-line sticheron = A B A B Final.
- **This means `phraseForLine()` and `ROT` must change for Tone 3** — they
  currently hardcode `["A","B","C","D"]`. Tone 3 uses `["A","B"]`.
- **Phrase A:** reciting tone = `fa`, no intonation, cadence = `fa → mi`
  (half note on last internal accent, then mi for final syllable)
- **Phrase B:** reciting tone = `fa`, no intonation, cadence = dotted-half `mi`,
  quarter `re`, then `do` for final syllable. Long version: if >3 cadence
  syllables, the dotted-half becomes a half and extras ride on `mi`.
- **Final Phrase:** reciting tone = `fa`, two-part cadence:
  `mi(H) → do(Q) → re(Q)` then `mi(Q) → fa(Q) → re(H) → do(W)`
  Two internal accents used.

**Read the full PDF to verify all of this** — the snippet may be incomplete.

### SATB trap warning (mandatory):
Do NOT read phrase pitches from the soprano line of the SATB score. The SATB
harmony is in the PDF. Verify every pitch against the unison recording (Step 3).

---

## Step 3 — Analyze the Tone 3 Unison MP3

**Drive folder ID:** `15xfAyZ9NwElTZClL55GT2suhhDq9xhBv`

MP3 files in that folder:

| File | Drive ID |
|------|----------|
| Tone3_Common_SticheronExample_Unison.mp3 | `1vVN36vuCDpfAjvl6olT9lznbjnCqNnk5` |
| Tone3_Common_SticheronExample_SATB.mp3   | `1T-b7W8VKANlchxA-AViNMX4HY-RBsLfw`  |
| Tone3_Common_SticheronExample_Soprano.mp3 | `1mYrhQfLz6fbNP6nUZ9QUZ1MQoB_Jd1Ol` |
| Tone3_Common_SticheronExample_Alto.mp3   | `1u_BJgJ807UNsGzLQjSQGFL1_g7vKvXR5`  |
| Tone3_Common_SticheronExample_Tenor.mp3  | `1zk3ixT76915Layh03sct_jmZMfXRTAgC`  |
| Tone3_Common_SticheronExample_Bass.mp3   | `1IB_z0zTrCvzcctZVTDSZIflfcI7MUOt3`  |

Download the **Unison** file using `Google Drive:download_file_content`. Save to
disk, run `librosa.pyin` pitch analysis exactly as done in Tone 2 (see
`tone_trainer_tone2_analysis.md §1.3` for the exact method).

**What to verify from the audio:**
1. Establish the recording key: what Hz is the main reciting pitch? Map to `fa`.
2. Phrase A cadence: confirm the descent from `fa` to `mi`. One step or two?
   Is `fa` a half note and `mi` a half note?
3. Phrase B cadence: confirm the dotted-half `mi → re(Q) → do`. Is the dotted
   half actually a dotted half in the recording, or simplified to a half?
4. Final Phrase: trace the full two-part cadence. How many notes? What are
   the durations of each?
5. Check whether the Tone 3 `fa` reciting tone is the same absolute pitch as
   Tone 2's `fa` (A3 ≈ 220 Hz) or a different key. Does not matter for pointing,
   but useful to confirm `fa` is in `OFF` correctly (`fa:5`).

---

## Step 4 — Get OCA docx fixture(s) in Tone 3

Ask the user for Tone 3 OCA service `.docx` files. Any Sunday in Tone 3 works.
Upload them and run the same Python extraction as used in Tone 2:

```python
import zipfile
from xml.etree import ElementTree as ET
# unpack, parse paragraphs, extract run-level underline data
```

**Minimum:** 40+ phrase instances across 4+ stichera.

**Key things to tabulate** (see `tone_trainer_tone2_analysis.md §5.2` for format):
- Mark count per phrase (1-mark vs 2-mark) for Phrases A, B, and Final
- Any pre-slur candidates in the Final Phrase (accented monosyllable before anchor)
- Verify rotation: A B A B ... Final — no C or D phrases should appear

---

## Step 5 — Reconcile and define `PH_DEFS[3]`

Before writing any code, write the phrase table based on tutorial + audio.
Anticipated structure (verify from sources):

```javascript
PH_DEFS[3] = {
  A:     { recite:"fa", inton:false, prep:null, cad:["fa","mi"]  },
  B:     { recite:"fa", inton:false, prep:null, cad:["mi","re","do"] },
  // NOTE: Phrase B has a dotted-half anchor — but lineToNotes() only knows H/Q/W.
  // A dotted-half (3 beats) has no current representation. Decide: simplify to H,
  // or add dH support to lineToNotes()? Document the decision.
  Final: { recite:"fa", inton:false, prep:null, cad:["mi","do","re","mi","fa","re","do"] },
  // NOTE: Final is a two-part cadence — verify exact note sequence from audio.
}
```

⚠️ **Critical new issue for Tone 3: the dotted-half note in Phrase B.**
The tutorial describes Phrase B's anchor as a **dotted half note** (3 beats),
not a half note (2 beats). The current `lineToNotes()` only has H (half) and W
(whole). Options:
1. **Simplify:** treat it as H. Listen to output and decide if the difference is
   audible/significant.
2. **Add dH:** add a `DH = H * 1.5` constant to `lineToNotes()` and a new role
   value or a flag on the phrase definition.

Do the audio analysis first. If the dotted-half is clearly 3 beats in the
recording, option 2 is needed. If it sounds like a held half note in practice,
option 1 is acceptable. Document the decision in the Tone 3 analysis doc.

---

## Step 6 — Architecture change: per-tone rotation

**This is the most significant structural change from Tone 2.**

Tone 3 rotates A·B only (2 phrases), not A·B·C·D (4 phrases). The current
`phraseForLine()` is:

```javascript
const ROT = ["A","B","C","D"];
const phraseForLine = (i, total) => (i === total - 1 ? "Final" : ROT[i % 4]);
```

This must become per-tone. Options:

**Option A — `ROT_DEFS` keyed by tone** (mirrors `PH_DEFS` pattern):
```javascript
const ROT_DEFS = {
  1: ["A","B","C","D"],
  2: ["A","B","C","D"],
  3: ["A","B"],
};
const phraseForLine = (i, total) =>
  i === total - 1 ? "Final" : (ROT_DEFS[activeTone] || ROT_DEFS[1])[i % (ROT_DEFS[activeTone] || ROT_DEFS[1]).length];
```

`ROT_DEFS` is a module-level constant; `activeTone` is component state — so
`phraseForLine` must either become a component-level function (like
`autoAccentLine` is) or accept `activeTone` as a parameter (like `pointLine`
accepts `PH`). The cleaner approach is to pass the active rotation as a
parameter alongside `PH`.

**Check all callers of `phraseForLine`** before making this change:
- `analyze()` in the component
- `blockLinePhrase()` in the docx ingest
- The comparison harness render

`blockLinePhrase()` needs to know which tone's rotation to use when "point ▸"
is clicked — it should use `block.tone`, same as `sendBlockToPointer` already
does for `PH`.

---

## Step 7 — Code the changes

In order:
1. Add `ROT_DEFS` (new, alongside `PH_DEFS`)
2. Add `PH_DEFS[3]` (with final verified phrase table)
3. Update `phraseForLine` to be tone-aware (pass active rotation)
4. Update all callers of `phraseForLine` to pass the rotation
5. If adding dH: add `DH = H * 1.5` to `lineToNotes()`, define when it fires
6. Add Tone 3 preset sticheron (hand-pointed from OCA docx fixture)
7. Bump version to v0.9.0, update `TRAINER_RELEASE_NOTES`
8. Update `tone_trainer_notes.md` with session summary

---

## Step 8 — Document

Create `tone_trainer_tone3_analysis.md` following the structure of
`tone_trainer_tone2_analysis.md` exactly:
- §1 Source materials (with Drive IDs)
- §2 Phrase rotation (confirmed or corrected)
- §3 Phrase definitions (one subsection per phrase, with SATB trap note)
- §4 Note durations (including dotted-half decision)
- §5 Director workflow (mark count statistics from corpus)
- §6–7 Architecture changes
- §8 What does NOT change
- §9 Validation fixture summary
- §10 Playbook for Tone 4 (any new lessons learned)
- §11 Open questions
- §12 Assumptions checklist

Push this document **before** writing any code (same discipline as Tone 2).

---

## Key things the prior sessions learned that are most relevant to Tone 3

1. **Tone 3 has only 2 rotating phrases (A and B)** — confirmed from the
   tutorial snippet. The rotation change is the biggest structural difference
   from Tones 1 and 2.

2. **Do not read cadence pitches from the SATB soprano.** The Tone 2 Phrase C
   mistake (soprano `la` ≠ unison `ti`) will recur if not checked. Always verify
   from the unison MP3.

3. **The dotted-half note is a new duration.** Neither Tone 1 nor Tone 2 had
   one. Phrase B's anchor is described as dotted-half in the tutorial. Decide
   before coding: simplify to H, or add DH support.

4. **The Final Phrase is a two-part cadence.** It uses two internal accents (not
   one). The `anchorIndex()` function finds the last internal accent — but the
   first part of the two-part cadence needs the *second-to-last* internal accent
   as well. This may require either a new role type or using the director's
   two marks directly. Study the tutorial carefully on this point.

5. **The intonation condition is per-tone.** `autoAccentLine` checks
   `PH[phrase].inton`. If Tone 3 Phrase A or B has intonation, set `inton:true`
   in `PH_DEFS[3]`. From the tutorial snippet, it appears neither A nor B has
   intonation in Tone 3 — but verify.

6. **Absolute pitch is irrelevant** (moveable-do). `fa` in `OFF` is already
   defined as `fa:5` from the Tone 2 build. No new pitches are expected for
   Tone 3 unless the two-part Final cadence introduces something unusual.

---

## Drive resource index

| Resource | Drive ID |
|----------|----------|
| Tone 3 Obikhod tutorial PDF | `1wuGATRbkxcUxjIzZTpCHfeoX90uXXFLS` |
| Tone 3 MP3 folder | `15xfAyZ9NwElTZClL55GT2suhhDq9xhBv` |
| Tone 3 Unison MP3 | `1vVN36vuCDpfAjvl6olT9lznbjnCqNnk5` |
| Tone 3 SATB MP3 | `1T-b7W8VKANlchxA-AViNMX4HY-RBsLfw` |
| Tone 3 Soprano MP3 | `1mYrhQfLz6fbNP6nUZ9QUZ1MQoB_Jd1Ol` |
| Tone 3 Alto MP3 | `1u_BJgJ807UNsGzLQjSQGFL1_g7vKvXR5` |
| Tone 3 Tenor MP3 | `1zk3ixT76915Layh03sct_jmZMfXRTAgC` |
| Tone 3 Bass MP3 | `1IB_z0zTrCvzcctZVTDSZIflfcI7MUOt3` |
| Tone 1 Obikhod tutorial PDF | `1MCbcPSJMiZ43myLLEadQNWv8mY7SOFtJ` |
| Tone 2 Obikhod tutorial PDF | `16Dtoj-bI0uz4Tdb8xmckviqugp09Ju18` |
| LIC Tone 1 score PDF | `17UMP7ElYuCSBzsaQ-8erhR8AjJRLoICU` |
| tone_tutorial folder | `14IDckFZcBP9L8wz8qV6w7ILLIMxal5lR` |

---

## Pre-code checklist (from `tone_trainer_tone1_analysis.md §11.5`)

Do not write any code until all of these are checked:

- [ ] Tutorial PDF read and phrase table drafted
- [ ] Phrase pitches verified from unison MP3 (NOT from SATB soprano)
- [ ] Recording key established (dominant pitch Hz → solfège)
- [ ] Rotation confirmed from corpus: A B A B ... Final
- [ ] OCA docx fixture(s) processed — 40+ phrase instances tabulated
- [ ] Mark counts per phrase documented (1-mark vs 2-mark)
- [ ] Dotted-half decision made and documented (simplify to H, or add DH)
- [ ] Two-part Final cadence strategy documented (how to find both anchors)
- [ ] `tone_trainer_tone3_analysis.md` written and pushed to GitHub
- [ ] All callers of `phraseForLine` identified before changing its signature

---

*Prompt written May 2026 at end of Tone 2 build session (v0.8.0).*
*Session context: `tone_trainer_tone2_analysis.md` and `tone_trainer_tone1_analysis.md`*
*were just written and cross-reviewed. All Tone 2 open questions documented in §13.*
