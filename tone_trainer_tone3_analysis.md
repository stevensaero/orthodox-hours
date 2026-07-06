# Tone Trainer — Tone 3 Research & Implementation Notes

**Prepared:** May 2026
**Applies to:** `tone-trainer.jsx` v0.9.0 (Tone 3 implementation)
**Source authority:** Drillock & Ealy, *Tutorial for Learning the Church Tones — Common Chant* (OCA); verified against OCA service `.docx` fixtures and OCA Tone 3 Obikhod MP3 recordings.

---

## Purpose of this document

This document records every finding, assumption, correction, and open question
from the Tone 3 research process — the tutorial analysis, the `.docx` fixture
corpus study, and the audio analysis — so that:

1. Anyone building Tone 4–8 has a documented playbook for what to process and
   what to watch out for.
2. There is a clear look-back path for what was verified versus assumed.
3. The specific ways Tone 3 differs from Tones 1 and 2 are explicit, not implicit.

---

## 1. Source materials processed

### 1.1 Tutorial PDF

**File:** `Tutorial-Obikhod-Tone3-Explanation.pdf`
**Drive ID:** `1wuGATRbkxcUxjIzZTpCHfeoX90uXXFLS`
**What it contains:** Complete phrase-by-phrase description of Tone 3 Common Chant
including pitch names, note values, and a worked sticheron example (Dormition Litya,
4th sticheron) in 4-part SATB harmony.

**Critical structural difference from Tones 1 and 2:** Tone 3 has only **two**
rotating phrases (A and B), not four. This is the most important structural change
in the codebase: `ROT_DEFS` must be introduced, and `phraseForLine` made tone-aware.

### 1.2 OCA service `.docx` fixtures

**Fixture 1:** `2026-0215-texts-tt-.docx`
Sunday February 15, 2026 — Meatfare Sunday, Tone 3.
Tone 3 stichera extracted: LIC framing (2 blocks), 6 Resurrectional stichera,
Dogmatikon (11-line), Aposticha (4 stichera), Troparion (2×), Dismissal Theotokion.

**Fixture 2:** `2026-0503-texts-tt.docx`
Sunday May 3, 2026 — 4th Sunday of Pascha (Paralytic), Tone 3.
Tone 3 stichera extracted: same core Resurrectional set + Paralytic idiomela,
Dogmatikon, Aposticha, Troparion, Dismissal Theotokion.

**Combined corpus:** 164 phrase instances across 31 stichera blocks.

**How OCA accents are stored:** Same as Tones 1 and 2 — accented syllable
underlined at run level (`<w:u>`), extracting losslessly. No change to ingest pipeline.

### 1.3 OCA Tone 3 MP3 recordings

**Drive folder:** `15xfAyZ9NwElTZClL55GT2suhhDq9xhBv`
**File analyzed:** `Tone3_Common_SticheronExample_Unison.mp3` (803 KB)
**Drive ID:** `1vVN36vuCDpfAjvl6olT9lznbjnCqNnk5`

**Audio analysis method:** `librosa.pyin` pitch tracking + onset detection,
44.1 kHz, hop length 256, frame length 4096. Pitch-to-solfège mapping derived
from dominant reciting pitch cluster.

**Recording key:** Reciting tone fa ≈ 179 Hz (approximately F in a natural/flat key).
Absolute pitch is irrelevant for pointing; only solfège relationships matter.

Scale derived from fa = 179 Hz:
- `fa` = 179 Hz (reciting, dominant cluster — 33% of voiced frames)
- `mi` = 169 Hz (one semitone below fa — 14% of voiced frames) ✓
- `do` = 134 Hz (perfect 4th below fa — 11% of voiced frames) ✓
- `re` = 150 Hz (whole step above do — 4% of voiced frames) ✓
- `ti` = 127 Hz (half step below do — small presence) ✓

---

## 2. Phrase rotation — confirmed TWO phrases only

```
Line count   Phrase sequence
-----------  ---------------
3 lines      A  B  Final
4 lines      A  B  A  Final
5 lines      A  B  A  B  Final
6 lines      A  B  A  B  A  Final
8 lines      A  B  A  B  A  B  A  Final
11 lines     A  B  A  B  A  B  A  B  A  B  Final
```

**Confirmed:** No C or D phrases appear anywhere in the 164-instance corpus.
**No exceptions found.**

This requires `ROT_DEFS = { 1: ['A','B','C','D'], 2: ['A','B','C','D'], 3: ['A','B'] }` and
a tone-aware `phraseForLine` that accepts the active rotation as a parameter.

---

## 3. Phrase definitions (verified)

### Verified phrase table

```javascript
PH_DEFS[3] = {
  A:     { recite:'fa', inton:false, prep:null, cad:['fa','do','mi'] },
  B:     { recite:'fa', inton:false, prep:null, cad:['mi','re','do'] },
  Final: { recite:'fa', inton:false, prep:null, cad:['mi','do','re','mi','fa','re','do'] },
}
```

### 3.1 Phrase A

- **Reciting tone:** `fa`
- **Intonation:** none (`inton:false`) — confirmed from corpus: 73/74 instances have
  exactly one mark (anchor only); one two-mark anomaly is a director cue on a long
  phrase, same pattern as Tone 2 Phrase A (second mark is the anchor)
- **Prep:** none
- **Cadence:** `['fa','do','mi']` — anchor lands on `fa` (H), unaccented middle
  syllables fill on `do` (Q each), final syllable lands on `mi` (H)
- **Audio verification:** fa anchor at 2.8s, mi final at 1.6s confirmed.
  The `do` fill pitch was confirmed from tutorial prose: "Unaccented syllables
  that fall between the accented syllable and the final syllable are sung on do."

**Critical design note on `cad:['fa','do','mi']` vs `cad:['fa','mi']`:**
Using the 3-note figure `['fa','do','mi']` is essential. With `['fa','mi']`,
`distribute()` would repeat the penultimate note `fa` as the middle fill, which
is **wrong** — the tutorial explicitly prescribes `do`. With `['fa','do','mi']`,
`distribute()` correctly repeats `do` (the penultimate) for extra middle syllables:
- 2 cadence syllables: `[[fa],[mi]]` — anchor + final, no fill
- 3 cadence syllables: `[[fa],[do],[mi]]` — exact figure
- 4 cadence syllables: `[[fa],[do],[do],[mi]]` — correct, do fills

**Tone 1/2 difference:** Both Tone 1 and 2 Phrase A have intonation and/or prep.
Tone 3 Phrase A has neither — pure recite → anchor → descend.

**Tone 3 distinctive feature:** All three phrases (A, B, Final) share the same
reciting tone (`fa`). This is unusual — Tones 1 and 2 have different reciting tones
per phrase (re/do alternation). The homogeneity of Tone 3 means phrase identity
is determined entirely by the cadence, not the reciting pitch.

### 3.2 Phrase B

- **Reciting tone:** `fa`
- **Intonation:** none (`inton:false`) — confirmed: 59/59 instances have exactly
  one mark. The corpus is **perfectly clean** — no two-mark anomalies at all.
- **Prep:** none
- **Cadence:** `['mi','re','do']` — anchor lands on `mi` (dotted half, dH), then
  `re` (Q), then final syllable on `do` (H)
- **Audio verification:** Phrase B mi anchor instances: 1.37s and 1.20s.
  At Q_ref ≈ 0.38s, H_ref ≈ 0.76s, dH_ref ≈ 1.14s.
  Both measurements exceed dH_ref ✓. The dotted-half is real and audible.
- **Long-cadence rule:** Tutorial: "If there are more than three syllables in the
  cadence, then these additional unaccented syllables are sung on mi, and the
  dotted half is changed to a half note." `distribute()` handles this correctly —
  when count > n, it repeats the penultimate note (mi), and the anchor becomes H.

**The dotted-half is Tone 3's key new duration.** Neither Tone 1 nor Tone 2 had it.
`lineToNotes()` must add `const DH = H * 1.5` and apply it to the Phrase B anchor.
Implementation: add `anchorDH: true` flag to Phrase B definition, then check in
`lineToNotes()`: if `r.role === 'cad' && r.anchor && PH[line.phrase]?.anchorDH`
→ use DH instead of H.

### 3.3 Final Phrase — the two-part cadence

- **Reciting tone:** `fa`
- **Intonation:** none
- **Prep:** none
- **Cadence:** `['mi','do','re','mi','fa','re','do']` — 7-note figure

**The two-part structure (from tutorial):**
- Part 1: `mi(H)` → `do(Q)` → `re(Q)` — first internal accent on `mi`
- Part 2: `mi(Q)` → `fa(Q)` → `re(H)` → `do(W)` — second internal accent on `mi`

**Two-mark corpus data (31/31 instances = 100%):**
- First mark → first anchor (Part 1 mi, position 0 in cad array)
- Second mark → second anchor (Part 2 mi, position 3 in cad array)

**Representative examples:**
| First mark | Second mark |
|---|---|
| `[Hear]` me, O Lord | Hear `[me]`, O Lord |
| always `[of]`fers | `[Thee]` a song |
| `[reigns]` for | `[ev]`er |
| `[wounds]` | `[all]` been healed |
| `[us]` great | `[mer]`cy |

**Implementation strategy for two anchors:**
`anchorIndex()` finds the *last* internal accent = the second anchor (Part 2, position 3).
This correctly maps to position 3 (`mi`) in the 7-note cad figure: the cadence
launches from there with `mi(Q) fa(Q) re(H) do(W)`.

For Part 1, the first mark (`acc[acc.length - 2]`) is the first anchor, which
maps to position 0 (`mi(H)`). The `pointLine()` body terminates at `a =
anchorIndex(flat)`, leaving `body = flat.slice(0, a)`. The cad array then runs
from the second anchor forward.

**The gap between the two anchors:** Syllables between the first and second marks
(i.e., between the two `mi` anchor positions in the 7-note figure) are distributed
across positions 1-2 in the cad array (`do(Q)`, `re(Q)`). The `distribute()` function
with `count < n` takes the first `count` notes of the figure sequentially — so if
only 2 syllables land in positions 1-2, they get `do` and `re`. If 1, it gets `do`.

**Unresolved: first anchor is in body, not cad.** Because `anchorIndex()` returns
the second anchor, the first anchor (with its `mi(H)` note) lands in `body`, not
in `cad`. This means the first `mi(H)` is currently rendered as a reciting `fa(Q)`
— **wrong**. See §11.1 for the implementation fix needed.

**SATB trap check:** Confirmed safe. The SATB score's soprano/alto show `la` and `sol`
over the reciting section and cadence. The **tenor** (= unison melody) confirms
`fa` reciting → `mi-do-re-mi-fa-re-do` cadence, as documented in the tutorial.

---

## 4. Note durations

### 4.1 New duration: DH (dotted half note)

`DH = H * 1.5` must be added to `lineToNotes()`. This is new for Tone 3 — neither
Tone 1 nor Tone 2 required it.

**Where it applies:** Phrase B cadence anchor only. The anchor syllable for Phrase B
gets DH; when the long-cadence rule fires (count > n), the anchor reverts to H.

**Implementation:** Add `anchorDH: true` to `PH_DEFS[3].B`. In `lineToNotes()`,
check this flag on the anchor syllable's phrase definition.

### 4.2 Full duration table for Tone 3

| Role | Duration | Source |
|---|---|---|
| Reciting syllable | Q | Tutorial prose; audio |
| Phrase B cadence anchor (≤3 cad syllables) | DH | Audio confirmed (1.2–1.4s at H_ref≈0.76s) |
| Phrase B cadence anchor (>3 cad syllables) | H | Tutorial long-cadence rule |
| Phrase A cadence anchor | H | Tutorial: "half note on last internal accented syllable" |
| Phrase A cadence middle (do fill) | Q | Tutorial: "sung on do" (implied quarter) |
| Phrase A cadence final (mi) | H | Tutorial prose; audio: 1.6s ≈ 2×H |
| Phrase B cadence re | Q | Audio onset confirmed ~0.40s |
| Phrase B cadence final (do) | H | Audio: ~1.7s; held phrase-final |
| Final Part 1 anchor (mi) | H | Tutorial explicit |
| Final Part 1 do | Q | Tutorial explicit |
| Final Part 1 re | Q | Tutorial explicit |
| Final Part 2 anchor (mi) | Q | Tutorial explicit |
| Final Part 2 fa | Q | Tutorial explicit |
| Final Part 2 re | H | Tutorial explicit |
| Final Part 2 do (last syllable) | W | Tutorial: "whole note on do for the final syllable" |

The existing H/Q/W logic in `lineToNotes()` covers everything except DH. No other
changes to the duration logic are needed.

---

## 5. Director workflow (mark counts — corpus statistics)

### 5.1 The anchor rule — unchanged

**Rule (identical to Tones 1 and 2):** cadence launches on the **last internally
accented syllable** of the phrase. `anchorIndex()`, STOP-list filter, and monosyllable
backup logic all carry over without change.

### 5.2 Mark count by phrase (164 instances, 31 blocks)

| Phrase | 1-mark | 2-mark | Notes |
|---|---|---|---|
| A | 73/74 | 1/74 | Anchor only (dominant); one director-cue anomaly on long phrase |
| B | 59/59 | 0/59 | **Perfectly clean** — always one mark |
| Final | 0/31 | 31/31 | **Always two marks** — both cadence anchors required |

### 5.3 Per-phrase nuances

**Phrase A one anomaly:** "By Thy di[vine] inter[ces]sion" — two stressed syllables
marked; `cesion` is the second (anchor). Engine takes the last mark as anchor per
standard rule. This is not a structural two-mark case; it is a director cue exactly
like the Tone 2 Phrase A long-line anomalies documented in §5.3 of the Tone 2 notes.

**Phrase B — no anomalies.** The 59-instance zero-anomaly rate is striking and
confirms the simplicity of Phrase B's structure: one anchor, no complications.

**Final Phrase — always two marks, always the two cadence anchors.** This is 100%
consistent across both services and all text content. The two-mark Final pattern
is structurally required by the two-part cadence — it is not a director cue.

**No pre-slur pattern found.** Unlike Tone 2 Final (where a stressed monosyllable
immediately before the prep triggered a two-note pickup), Tone 3 Final has no prep,
so no pre-slur condition exists. The two marks always map to the two cadence
anchors, never to a pre-slur + anchor pair.

### 5.4 `autoAccentLine()` change required

Tone 3 Final requires the engine to identify **two** accent marks — the first anchor
(Part 1 mi) and the second anchor (Part 2 mi). Current `autoAccentLine()` marks
only one accent (the anchor). For Tone 3 Final, the function must also mark
`acc[acc.length - 2]` as a structural intonation-like accent when the phrase is
Final and `activeTone === 3`.

This is additive — Tones 1 and 2 are unaffected.

---

## 6. New solfège pitches required

No new pitches needed. The `OFF` table from Tone 2 covers everything:
`{ la, ti, do, di, re, mi, fa, sol }`. Tone 3 uses `fa`, `do`, `re`, `mi` only —
all already present.

`di` (chromatic raised do) is not used in Tone 3. `PITCH_SCALE` order is unchanged.

---

## 7. Architecture changes (summary)

### 7.1 `ROT_DEFS` — new module-level constant

```javascript
const ROT_DEFS = {
  1: ['A','B','C','D'],
  2: ['A','B','C','D'],
  3: ['A','B'],
};
```

### 7.2 `phraseForLine` — becomes tone-aware

```javascript
// Before:
const ROT = ['A','B','C','D'];
const phraseForLine = (i, total) => i === total - 1 ? 'Final' : ROT[i % 4];

// After:
const phraseForLine = (i, total, rot) =>
  i === total - 1 ? 'Final' : rot[i % rot.length];
```

All callers pass the active rotation:
- `analyze()` inside component → passes `ROT_DEFS[activeTone] || ROT_DEFS[1]`
- `blockLinePhrase()` in docx ingest → passes `ROT_DEFS[block.tone] || ROT_DEFS[1]`
- Comparison harness render → same

### 7.3 `DH` in `lineToNotes()`

```javascript
const DH = H * 1.5;  // dotted half note — Tone 3 Phrase B anchor
```

Applied when: `r.role === 'cad' && r.anchor && PH[line.phrase]?.anchorDH === true`

`PH_DEFS[3].B` carries `anchorDH: true`. Tones 1 and 2 are unaffected (no `anchorDH` field).

### 7.4 `autoAccentLine()` — Final Phrase two-anchor support

When `activeTone === 3` and `phrase === 'Final'`, the function marks two accents:
the last internal accent (existing behavior = second anchor) AND the second-to-last
internal accent (new = first anchor). Condition: `acc.length >= 2`.

### 7.5 First anchor in `pointLine()` — open question (see §11.1)

The current architecture puts the first Final anchor in `body` (before `anchorIndex()`).
It renders as a reciting `fa(Q)` rather than `mi(H)`. This is a known gap; the
fix requires either a new role type (`cad1`) or extending `pointLine()` to detect
the two-anchor case. Deferred to a follow-up session; the current build renders the
second anchor and trailing cadence correctly.

---

## 8. What does NOT change

The following were explicitly verified to require zero changes for Tone 3:

- `anchorIndex()` — last-internal-accent rule is universal
- `distribute()` — figure distribution is universal
- `flatten()` — syllable structure is tone-independent
- `lineToNotes()` — H/Q/W assignments cover all Tone 3 needs (add DH only)
- Docx ingest pipeline — `<w:u>` underline extraction is identical
- Sticheron segmentation — `//` penultimate marker detection is identical
- Comparison harness and JSON export — fully tone-agnostic
- STOP-list filter — no Tone 3 corpus examples contradicted it
- Pre-slur logic — not applicable (Tone 3 Final has no prep, so no pre-slur exists)

---

## 9. Validation fixture summary

### 9.1 Auto-accent accuracy expectations

**Phrases A and B (1-mark):** The same 92%+ anchor match established for Tones 1
and 2 should be achievable. The same STOP-list filter applies; the same polysyllabic
final-word trap exists. No new failure classes expected.

**Final Phrase (2-mark):** AUTO mode will find the last internal accent as the anchor
(second mark = correct). The first mark (first anchor) requires explicit Director
Pointing or the `autoAccentLine` two-anchor enhancement in §7.4.

### 9.2 Ground-truth Final Phrase examples

| First anchor | Second anchor | Text |
|---|---|---|
| `Hear` | `me` | "Hear me, O Lord." |
| `of`fers | `Thee` | "always offers Thee a song." |
| `reigns` | `ev`er | "Trinity which reigns forever." |
| `wounds` | `all` | "by Thy wounds we have all been healed." |
| `us` | `mer`cy | "granting us great mercy." |
| `shat`tered | `gates` | "I have shattered the gates of death!" |
| `hand` | `en`emies | "from the hand of Thine enemies!" |
| `great` | `mer`cy | "great mercy." |

---

## 10. Playbook for Tone 4

### New lessons learned from Tone 3

**Lesson 1: ROT_DEFS is now established.** Every future tone must declare its
rotation in `ROT_DEFS` before any code runs. Tone 4 tutorial scan shows 6 phrases
(A, B, C, D, E, F) with D/E/F in repeating rotation — check carefully.

**Lesson 2: Dotted-half DH is now in the system.** Tone 4+ tutorials should be
scanned for any dotted-half anchors. If present, `anchorDH: true` in PH_DEFS is
the mechanism.

**Lesson 3: Two-part cadence / two-anchor Final Phrase.** This pattern appeared in
Tone 3 and also appears in Tone 8 (tutorial read during session). Any tone with a
two-part Final must plan for the two-anchor mark pattern. The §11.1 architecture
question (first anchor in body vs cad) must be resolved before those tones ship.

**Lesson 4: All three Tone 3 phrases share reciting tone `fa`.** This is musically
coherent but means a singer can't use reciting tone as a phrase-type cue. The cadence
alone distinguishes A from B. This is fine for the engine but worth noting in the UI.

**Lesson 5: Phrase B corpus was perfectly clean (0/59 anomalies).** Simpler tones
may have cleaner corpora than Tones 1/2. Don't assume every phrase will have
anomalies — verify from corpus rather than expected based on prior tones.

### For Tone 4 specifically (from tutorial scan)

Tone 4 uses 6 phrases: A (intro only), B, C, D, E, F. After A, the rotation is
D/E/F repeating. This is a non-standard rotation with a one-time intro phrase —
will require `ROT_DEFS[4]` to handle the intro separately or to start rotation at
line 1 (after A). Read the Tone 4 tutorial fully before defining the rotation.

---

## 11. Open questions

### 11.1 First Final anchor rendering (known gap — v0.9.0)

The current `pointLine()` architecture places `body = flat.slice(0, anchorIndex)`,
where `anchorIndex` is the **second** anchor (the last internal accent). The first
anchor therefore falls in `body` and renders as a reciting `fa(Q)` rather than
`mi(H)` as the tutorial prescribes.

**Impact:** The Part 1 cadence (`mi(H) do(Q) re(Q)`) is not rendered in v0.9.0.
Audio output will play the correct pitch sequence from the second anchor onward
but will miss the Part 1 `mi(H)` for the first anchor syllable.

**Proposed fix (future session):** When `activeTone === 3 && phrase === 'Final'`
and `acc.length >= 2`, treat `acc[acc.length - 2]` as a new role `cad1` in
`pointLine()`. The `cad1` slot maps to the first 3 notes of the cad figure
(`mi(H) do(Q) re(Q)`), with `distribute()` applied to syllables between the first
and second anchors. The second anchor remains `role:'cad'` with position 3 onward.

### 11.2 Phrase B do final duration

Phrase B's final syllable (`do`) audio showed ~1.7s at H_ref ≈ 0.76s, which is
between H (0.76s) and W (1.52s). Held slightly long in practice but assigned `H`
per existing `isLast && !isFinal` → H rule. If singers report the final sounds
clipped, consider whether Phrase B final should be `DH` or `W`. No corpus evidence
to change; accept as-is.

### 11.3 Phrase A with very short cadence (2 syllables: anchor + final)

With only 2 cadence syllables, `distribute(['fa','do','mi'], 2)` returns
`[[fa],[mi]]` — the `do` middle note disappears, and anchor=fa, final=mi with
no fill. This is musically correct (direct fa→mi descent) and matches the
tutorial's short examples. Confirmed safe.

---

## 12. Assumptions checklist

| Assumption | Confidence | How to verify if wrong |
|---|---|---|
| Rotation is A·B only, no C or D | **Very high** | 164/164 instances in corpus confirm it |
| Phrase A: no intonation | **Very high** | 73/74 single-mark instances confirm it |
| Phrase B: no intonation | **Very high** | 59/59 single-mark instances confirm it |
| Phrase B anchor = dH | **High** | Audio: 1.2–1.4s at dH_ref=1.14s ✓ |
| Phrase A middle fill = do (not fa) | **High** | Tutorial prose explicit |
| Final Phrase: always two marks | **Very high** | 31/31 instances confirm it |
| First Final anchor renders as mi(H) | **High** | Tutorial explicit; audio structural |
| cad:['fa','do','mi'] correctly fills extra syllables on do | **High** | distribute() logic verified |
| No pre-slur condition (no prep on any Tone 3 phrase) | **High** | All three PH_DEFS have prep:null |
| `di` not needed for Tone 3 | **High** | No di-class pitch in any Tone 3 cadence |

---

*End of Tone 3 research notes.*

---

## 13. Post-build review — cad1 implementation session (v0.9.1, May 2026)

*Added after the cad1 session. Records what was built, what went wrong, what was
confirmed from primary sources, and what the next session needs to know.*

---

### 13.1 What was built (v0.9.1)

**§11.1 closed.** The `cad1` role was implemented in `pointLine()` exactly as
proposed. Scope guard: `activeTone === 3 && phrase === 'Final' && acc.length >= 2`.
anchor1 = `acc[acc.length - 2]`, anchor2 = `anchorIndex()` as before.
Body → recite, anchor1..anchor2 → `cad1`, anchor2.. → `cad`.

**Melisma duration fix (v0.9.1 hotfix).** `lineToNotes()` cad1 block now emits
`mi(H) · do(Q) · re(Q)` directly via `CAD1_DURS = [H, Q, Q]`, bypassing
`syllDur / pitches.length`. This is correct and permanent — the Part 1 figure
is a fixed musical definition, not a configurable variable. `distribute()` is
intentionally not used for `cad1` pitch assignment (it would melismatize a
single-syllable span incorrectly).

**Regression gate fully satisfied.** 129 Tone 1 lines and 66 Tone 2 lines
across four fixtures — all pre/post diffs empty. Scope guard confirmed airtight.

**Snapshot tooling.** `tools/snapshot_comparison.mjs` and `npm run snapshot`
added for future engine validation without a browser.

---

### 13.2 Confirmed from primary sources this session

**Tutorial text (Drillock & Ealy, read directly this session):**

> "The Final Phrase consists of a reciting tone on fa, and a **two-part cadence**,
> which can be used with two or more internal accented syllables. The cadence
> begins with a **half note on mi**, followed by a **quarter note on do** and a
> **quarter note on re**; then the **second part of the cadence** begins with a
> **quarter note on mi** and **quarter note on fa**, descending to a **half note
> on re**, and concluding with a **whole note on do** for the final syllable."

Tutorial terminology: **"two-part cadence"** and **"second part of the cadence."**
The tutorial does not give shorthand names to Part 1 and Part 2. `cad1`/`cad`
are implementation labels only.

**Part 1 figure is fixed:** `mi · do · re` always. Not configurable. `CAD1_DURS`
is a musical constant, same category as `W = H * 2`.

**Score (Tone 3 LIC, alto line):** The melisma on "Hear" in the long Final Phrase
shows **four noteheads** — three belonging to "Hear" (Part 1) and one to "me"
(Part 2 anchor). Score appears to show `Q · H · Q` (half on `do`), which would
contradict the tutorial's `H · Q · Q` (half on `mi`). **Deferred** — current
implementation follows the tutorial text. A choir director should arbitrate.

**Syllable-to-note mapping confirmed:**
```
Hear              me      O       Lord
mi(H)·do(Q)·re(Q)  mi(Q)   fa(Q)   re(H)   do(W)
← cad1 melisma →  ←——— cad (Part 2) distributed ———→
```
Every syllable gets one note except "Hear" which gets three as a melisma.
`me` gets one note (mi·Q). `Lord` gets one note (do·W).

---

### 13.3 Wrong turns this session — read before touching cad1 again

**1. "Remove cad1" was wrong.** After misreading the score, a claim was made
that the two-anchor model should be removed entirely. This was retracted. The
score confirmed two anchors; the tutorial confirmed the two-part cadence. Do not
remove `cad1` based on score reading alone — always cross-check the tutorial.

**2. The melisma fix was reverted correctly.** The first melisma fix replaced
`distribute()` with `CAD1_FIGURE[i]` (one pitch per syllable, no melisma). This
was wrong — the score shows "Hear" carries all three Part 1 notes as a melisma
on one syllable. The revert was correct. The final fix (direct `CAD1_DURS`
emission) is correct because it preserves the melisma while giving each pitch
its own duration.

**3. Score vs. SATB voice confusion.** At one point a Kievan Chant Tone 2 score
was consulted — wrong tradition entirely. Always confirm: (a) correct tradition
(Obikhod/Common Chant), (b) correct voice (alto = melody), (c) correct tone.

**4. `distribute()` count≤1 behavior.** When a single syllable falls in the
`cad1` span, `distribute(["mi","do","re"], 1)` returns `[["mi","do","re"]]` —
the whole figure as a melisma. This is the correct behavior for `cad1` (one
syllable should carry all three Part 1 notes). The `syllDur / pitches.length`
path then compresses them equally — that was the problem, not `distribute()`.
The fix is `CAD1_DURS` emission, not bypassing `distribute()`.

---

### 13.4 Open question carried forward

**Score vs. tutorial duration order for Part 1:**
Tutorial says `mi(H) · do(Q) · re(Q)`. Score appears to show `mi(Q) · do(H) · re(Q)`.
Current implementation follows tutorial. If a choir director confirms the score
reading, the fix is one character: `CAD1_DURS = [H, Q, Q]` → `[Q, H, Q]`.
This is documented in `tone_trainer_notes.md` as a deferred item.

---

### 13.5 For the next session working on Final Phrase or cad1

1. **Read §13.3 first.** The wrong turns are documented so you don't repeat them.
2. **Read the tutorial text in §13.2.** It is quoted verbatim — no need to fetch
   from Drive again for the Part 1/Part 2 cadence description.
3. **The score question (H·Q·Q vs Q·H·Q)** is the one genuine open item. Get a
   choir director to sing "Hear me O Lord" in Tone 3 and listen for which note
   is held — the `mi` or the `do`.
4. **`cad1` is correct and complete for Tone 3.** Do not redesign it without
   evidence from a new tone that requires different behavior.
5. **Tone 8 also has a two-part Final** (noted in §10, Lesson 3). When building
   Tone 8, check whether its Part 1 figure matches Tone 3's `mi·do·re` or differs.
   If it differs, `CAD1_DURS` will need to become tone-keyed.

---

## 14. Harmony voices — Bass/Tenor/Soprano session (July 2026, in progress)

*Added at the start of a session building `BASS_RULES[3]`, `TENOR_RULES[3]`, and
`SOPRANO_TONES` entry for Tone 3. Data delivered by Bill directly from the tutorial
and physical scores, interview-style, all voices at once, phrase by phrase. Not
yet complete — bass has not been started. This section records what's confirmed
so far and will be extended as the session continues.*

### 14.1 Soprano — CLOSED, all phrases

Confirmed as a constant diatonic third above alto, applying uniformly across every
phrase (interval relationship, not phrase-specific harmony logic — same shape as
the Tone 4 soprano close in §7 of the Tone 4 doc).

| Alto | Soprano |
|---|---|
| fa | la |
| mi | sol |
| re | fa |
| do | mi |

These four are the only alto pitches Tone 3 uses across Phrase A, B, and Final
(including the Final's cad1/cad split), so this single map closes soprano
completely. `do → mi` was confirmed explicitly by Bill after an initial exchange
where it had only been pattern-implied — flagged as unconfirmed until that
explicit confirmation came through, per the prime directive's evidence standard.

### 14.2 Tenor — CLOSED for Phrase A, B, and Final

**Phrase A** (alto: recite `fa`, cad `[fa, fa, mi]` — anchor/fill/final, see §14.4
for the fill correction):

| Role | Alto | Tenor |
|---|---|---|
| recite | fa | do |
| cad anchor | fa | do |
| cad fill | fa | do (resolved automatically by the §14.4 fix — same alto pitch as anchor/recite) |
| cad final | mi | do |

**Phrase B** (alto: recite `fa`, cad `[mi, re, do]`, anchor is dotted-half):

| Role | Alto | Tenor |
|---|---|---|
| recite | fa | do |
| cad anchor (dH) | mi | do |
| cad mid | re | ti |
| cad final | do | sol |

**Final Phrase** (alto: recite `fa`, cad1 `[mi, do, re]`, cad `[mi, fa, re, do]`):

| Role | Alto | Tenor |
|---|---|---|
| recite | fa | do |
| cad1 anchor | mi | do |
| cad1 mid | do | sol |
| cad1 final | re | sol |
| cad anchor (part 2) | mi | do |
| cad | fa | do |
| cad | re | ti |
| cad final | do | sol |

Cross-check: alto `re→ti` and `do→sol` recur identically between Phrase B and
the Final's cad (Part 2), same pitch pairs in both places, no conflict.

Tenor for Tone 3 is now a near-constant `do` drone (matching the general pattern
already seen in Tone 4's tenor — a constant reciting pitch through most phrases),
with `re→ti` and `do→sol` as the only departures from `do`, both confined to
cadence movement in Phrase B and the Final's second cadence part.

### 14.3 Bass — NOT STARTED

No data gathered yet for any phrase.

### 14.4 Correction — Phrase A cadence fill was wrong (do → fa)

**Finding:** While building the harmony tables above, no tutorial example or
score for tenor or soprano ever showed a fill note for Phrase A's cadence — every
example given landed only on the anchor and final pitches. This surfaced the
question of what the alto fill (previously documented as `do`, see §3.1) was
actually verified against.

**Root cause:** The original `do` value (§3.1, §12 assumptions checklist) came
from a single tutorial prose sentence — "unaccented syllables that fall between
the accented syllable and the final syllable are sung on do" — and was never
checked against a real example. The corpus statistics in §5.2 already show why:
73/74 Phrase A instances in the 164-instance corpus are 2-syllable cadences
(anchor + final only), so the fill note has never actually been sung in any
fixture processed to date. The assumption was carried as "High confidence" in
§12 on the strength of the tutorial prose alone, with no corpus or score
cross-check possible.

**Bill's correction:** Direct examination of physical scores confirms the fill
continues on `fa` (the reciting tone), not a jump to `do`. Bill's assessment:
the tutorial prose itself has a typo, "do" should read "fa." This is also the
more idiomatic reading musically, continuing the reciting tone for extra
unaccented syllables is the ordinary case for chant fill notes; introducing an
unrelated pitch for a couple of syllables and then leaving it is the unusual case.

**Fix applied:** `PH_DEFS[3].A.cad` changed from `["fa","do","mi"]` to
`["fa","fa","mi"]` (`src/lib/phrase-defs.js`, v0.25.48). `distribute()` still
repeats the penultimate note for any extra fill syllables, now correctly `fa`
instead of `do`.

**Side effect:** this closed two harmony-voice open items without new evidence
needed. Tenor and soprano Phrase A fill notes were both pending on this exact
ambiguity; since the fill pitch is alto `fa` (not `do`), and both tenor
(`fa→do`) and soprano (`fa→la`) already had confirmed mappings for alto `fa`
from the anchor/recite data, the fill resolves automatically — see §14.1–14.2.

**Regression check:** `npm run gate` — 71/71 Hours Tool checks + 18/18
pointing-role checks, no regressions (expected, since no existing fixture ever
exercised the old fill value). `vite build` clean.

**Lesson for future tones:** a value sourced from tutorial prose alone, with no
corpus example or score to check it against, should be logged as an open
verification item rather than "High confidence" — the confidence label in §12
undersold how thin the evidence actually was. Watch for this pattern in Tones
5–8: a prose-only claim with a corpus that happens to never test it is exactly
the gap that let this sit unnoticed since the original May 2026 build.

---

## 15. Final Phrase melisma bugs, and the decision to drop shared `distribute()` for Tone 3 entirely

*Added after Bill reported hearing a melisma in the alto audio for the Final
Phrase example "[Hear] [me], O Lord." that the chip display didn't reflect.
What started as one chip-rendering question surfaced three separate bugs, all
traced to the same root cause: shared logic (`distribute()`, and `PH_DEFS[3].Final.cad`
left over from before `cad1` was split out) silently drifting out of sync with
the phrases actually depending on it. This section documents all three, the
corrected rules Bill confirmed from the score and tutorial, and the resulting
architectural decision.*

### 15.1 Bug — chips never split a `cad1` melisma into separate notes

`lineToNotes()` (audio path) correctly emits one note per pitch for `cad1`:
```js
r.pitches.forEach((p, pi) => notes.push({ sol: p, dur: CAD1_DURS[pi] ?? Q, peak: peak1 }));
```
`lineToRolesWithDuration()` (chip path) has no equivalent split. Its own header
comment promises "for melisma syllables (multi-pitch), emits one entry per
pitch with its own dur" — true for `preslur` and Tone 4 Final's prep melisma,
each of which has an explicit `r.pitches.length > 1` branch, but `cad1` has no
such branch. It falls through to the generic `result.push({ ...r, dur: d,
durKey: durKey(d) })`, pushing all 3 pitches as one chip with one (also
wrong, see below) duration. This is why Bill heard the melisma in audio but
didn't see it described in the chips: the audio path handles it, the chip
path was never given the equivalent code when `cad1` was added (v0.9.1).

Also wrong even before the missing split: the duration computed for `cad1` at
the top of the loop, `d = ri === cadIdxs[0] ? H : Q`, compares this role's
absolute index against the index of the first **`cad`** role, not `cad1`. For
a line where `cad1` precedes any `cad` entries (the normal case), this
condition is essentially never true the way it's intended, so even the single
lumped chip gets the wrong duration.

**Fix needed:** add a `cad1`-specific split branch in `lineToRolesWithDuration()`
mirroring the audio path's `CAD1_DURS` handling exactly, same convention as the
existing preslur and Tone 4 Final prep branches.

### 15.2 Bug — `PH_DEFS[3].Final.cad` is a stale pre-split array

Still `["mi","do","re","mi","fa","re","do"]`, the full 7-note combined figure
from before Part 1 (`cad1`) and Part 2 (`cad`) were split apart in v0.9.1.
Part 2 alone should be `["mi","fa","re","do"]`. Confirmed by direct trace:
`distribute()` running against the stale 7-element array for a 3-syllable
Part 2 span (me/O/Lord) currently returns `[mi, do, re]` — coincidentally
right at position 0, wrong at position 1 (`do` instead of `fa`), and silently
dropping the tutorial-mandated final `do` at the whole-note conclusion of the
entire line.

### 15.3 Investigation — is `distribute()`'s undercount rule actually justified anywhere?

While explaining the `cad` (Part 2) undercount problem, `distribute()`'s own
"count < n: take the first `count` notes, trailing notes belong to the next
phrase" rule was cited as justified by a Tone 1 Phrase D example in the
function's doc comment. Bill asked directly what that Phrase D justification
actually was. On inspection: **Phrase D does not use `distribute()` at all.**
It has its own dedicated two-accent positional handler (`pointing.js` lines
106–138, added for the same reason we're adding dedicated Tone 3 handlers
now — generic `distribute()` couldn't represent its two-anchor shape). The
comment in `distribute()` citing Phrase D is very likely a leftover from
before that dedicated handler existed — the same class of problem as the
Phrase A tutorial typo (§14.4): an assumption baked into a comment, never
re-checked against the code that actually runs today.

That question prompted directly testing `distribute()`'s undercount behavior
against Tone 3's own phrases, which surfaced a much bigger problem:

```
distribute(["fa","fa","mi"], 2)   →  [[fa],[fa]]   — Tone 3 Phrase A, 2-syllable cadence
distribute(["mi","re","do"], 2)   →  [[mi],[re]]   — Tone 3 Phrase B, 2-syllable cadence
```

Phrase A's tutorial-mandated final pitch (`mi`) and Phrase B's (`do`) both
disappear entirely under `distribute()`'s "take the first `count` notes" rule
— the function keeps the anchor and drops the *tail*, but for these phrases
the tail contains the one note that must never be dropped, the phrase's
concluding pitch. This is not an edge case: Phrase A's corpus is 73/74
two-syllable cadences (§5.2), and Phrase B's is 59/59 single-mark instances
whose most common shape is also anchor+final with no fill. If this has been
live since the original build, most real Phrase A and Phrase B lines have
been singing the wrong final pitch, landing on the fill/anchor pitch instead
of the tutorial's specified descent.

### 15.4 Corrected rules, confirmed by Bill against tutorial and score

**Final Phrase, cad1 (Part 1) — recite-pickup addition.** When the cad1
anchor is the line's very first syllable (zero body/reciting syllables before
it), a reciting pickup note (`fa`, Q) compresses onto that same syllable as a
leading note in the melisma, joining the existing `mi(H)·do(Q)·re(Q)` figure
to give `fa(Q)·mi(H)·do(Q)·re(Q)`. Confirmed by Bill as a general rule: "it's
a rule provable by score example but the tutorial is silent here. Logically
and melodically we shouldn't be dropping that fa." Not inferred from one
example alone, an explicit general confirmation.

**Final Phrase, cad (Part 2) — no note ever drops.** Bill, quoting the
tutorial directly: "the second part of the cadence begins with a quarter note
on mi and quarter note on fa, descending to a half note on re, and concluding
with a whole note on do for the final syllable of text... Accented syllables
will fall on the half note mi in the first part of the cadence, and on the
quarter note mi in the second part of the cadence." The tutorial is explicit
that every note in the two-part cadence lands somewhere. For the 3-syllable
case (me/O/Lord) against the corrected 4-note figure `[mi,fa,re,do]`: `me`
absorbs the excess as a 2-note melisma (`mi,fa`), `O` gets `re`, `Lord` gets
the fixed final `do`. General rule: excess compresses onto the *earliest*
available syllable; the final note is always fixed and never drops.

**Phrase A — anchor and final both fixed.** Anchor `fa`, final `mi`, both
fixed regardless of cadence length. 2-syllable case = anchor + final only, no
fill (drop the *fill*, never the final). 3+ syllable case = fill repeats `fa`
(§14.4).

**Phrase B — same shape.** Anchor `mi` (dotted-half), final `do`, both fixed.
2-syllable case = anchor + final only. 3+ syllable case = fill on `re`, and
the existing >3-syllable long-cadence rule (dotted-half collapses to plain
half) is unaffected by this fix.

### 15.5 Architectural decision — no shared `distribute()` fallback for Tone 3, ever

Three separate bugs surfaced in a single session, all from the same root
cause: shared logic relied on by multiple phrases/tones, never re-verified
against each one individually as it was extended.

1. `distribute()`'s undercount rule, apparently fine for whatever it was
   originally built and tested against, silently broke Tone 3 Phrase A and B.
2. `PH_DEFS[3].Final.cad` never got rebuilt when `cad1` was split out from it.
3. `distribute()`'s own doc comment cited justifying evidence (Phrase D) that
   the current code doesn't even use anymore.

Bill's direction, stated plainly: every tone, every phrase, gets its own
dedicated logic. Shared logic is treated as a standing risk to stability
across what will eventually be 8 tones with many structurally distinct
phrases, not a convenience worth the risk. This has been raised in prior
sessions; today's chain of three bugs from one shared function is treated as
the confirming case, not an exception.

**Going forward for Tone 3, four dedicated handlers, replacing every call
into shared `distribute()` for this tone:**

1. **Phrase A** — own handler in `pointing.js`. Anchor/final fixed per §15.4,
   fill only appears with 3+ syllables.
2. **Phrase B** — own handler. Same shape as Phrase A, plus the existing
   dotted-half collapse rule for >3 syllables.
3. **Final Phrase, cad1 (Part 1)** — extend the existing dedicated cad1 split
   (already self-contained, not shared) with the recite-pickup compression.
4. **Final Phrase, cad (Part 2)** — new dedicated handler alongside cad1,
   not routed through `distribute(def.cad, ...)` at all.

Plus the independent chip-splitting fix (§15.1) in `lineToRolesWithDuration()`.

None of this touches shared `distribute()`, Tone 1, Tone 2, or Tone 4 — the
fixes are additive, scoped entirely to Tone 3's own dedicated code paths, per
the prime directive.

**Status: documented, not yet implemented.** Implementation, regression
testing, and gate/build come next.

---

## 16. Implementation — Tone 3 off shared `distribute()` entirely

*§15's plan, built. All four dedicated handlers plus the chip fix, described
below with what changed and why.*

### 16.1 Chip-split fix

Both `lineToNotes()` and `lineToRolesWithDuration()` now check for an explicit
`r.durs` array at the very top of their role-processing loop, before any
role-type dispatch. When present, it's authoritative: each pitch in `r.pitches`
is paired with its own duration from `r.durs` and pushed as its own note (audio)
or chip entry (display), bypassing every generic/shared duration path entirely.
This is a rendering pass-through, not domain logic, it doesn't decide what
duration any phrase's cadence should have, it just plays back whatever the
tone-specific `pointLine()` logic already decided. The old `cad1`-specific
branch (which had the wrong duration comparison, `ri === cadIdxs[0]`, and no
multi-pitch split at all) is gone, replaced by this one mechanism, used by all
four of the new Tone 3 handlers below.

### 16.2 `distributeTone3FinalCad1()` and `distributeTone3FinalCad2()`

Two new functions in `pointing.js`, self-contained to Tone 3's Final Phrase,
never calling shared `distribute()`. Each returns `{ pitches, durs }` pairs
directly, so no downstream lookup or position-matching is needed.

- **cad1 (Part 1):** fixed figure `mi(H)·do(Q)·re(Q)`. Excess syllables
  compress onto the first available syllable; anchor and final positions
  never drop. When the cad1 anchor is the line's first syllable (zero
  reciting syllables precede it), a leading `fa(Q)` recite-pickup is
  prepended to the melisma, per Bill's confirmation in §15.4.
- **cad2 (Part 2):** fixed figure `mi(Q)·fa(Q)·re(H)·do(W)`. Same
  excess-compresses-onto-first-syllable rule; the final `do(W)` is always
  fixed and never drops, per the tutorial quote in §15.4.

Verified directly against "[Hear] [me], O Lord.": `Hear` → `cad1`,
`fa·mi·do·re` (pickup fires, body is empty). `me` → `cad`, `mi·fa` (2-note
melisma, excess compression). `O` → `cad`, `re`. `Lord` → `cad`, `do` (fixed
final, never drops). Matches Bill's reported score reading exactly.

### 16.3 Dedicated Phrase A and Phrase B handlers

Both now have their own `pointLine()` branch, checked before the generic
single-anchor fallback, so neither ever reaches shared `distribute()` again.

- **Phrase A:** anchor `fa` and final `mi` both fixed. 2-syllable cadence
  (73/74 corpus instances) = anchor + final only, fill never appears. 3+
  syllables = fill repeats `fa` (the corrected value from §14.4).
- **Phrase B:** anchor `mi` (dotted-half unless the cadence is long) and
  final `do` both fixed. 2-syllable cadence = anchor + final only, same
  shape as Phrase A. 3+ syllables (exact fit) = fill on `re`. Long-cadence
  rule (>3 syllables) collapses the dotted-half to a plain half, unchanged
  from the original build.

Both confirmed against direct `distribute()` testing from §15.3: the old
shared-path behavior for a 2-syllable cadence dropped the fixed final pitch
entirely (`[fa,fa]` instead of `[fa,mi]` for A; `[mi,re]` instead of
`[mi,do]` for B). The dedicated handlers close this for both phrases.

**count===1 edge case (anchor and final syllable coincide):** never observed
in either phrase's corpus. Honest fallback in both handlers, melisma-
compresses anchor+final onto the one available syllable, flagged in code
comments as untested rather than silently picked one way or the other.

### 16.4 Open question surfaced during implementation — Phrase B's overcount fill

While writing Phrase B's dedicated handler, a fresh discrepancy surfaced that
wasn't caught in §15's planning: the original `phrase-defs.js` comment for
Phrase B explicitly stated *"extras ride on mi"* for the >3-syllable overcount
case, matching a literal reading of the tutorial's own prose. But the shared
`distribute()` code actually in use for that case computed the figure's own
middle note (`re`), not `mi`, and nobody had ever checked which was actually
correct, the comment's claim about what the code did was simply wrong,
another instance of the same pattern documented in §14.4 and §15.3.

**Not resolved either way.** The new dedicated handler implements `re`
(carrying forward what every prior session assumed was live), not `mi` (the
tutorial's literal text), and flags this explicitly in a code comment. This
is a genuinely open question for Bill: does the >3-syllable overcount fill
land on `re` or `mi`? Needs a real example or score check, not another
assumption either direction. Practically low-urgency, this case requires a
Phrase B cadence with 4+ syllables between the anchor and the end of the
line, likely rare, but flagged rather than silently buried.

### 16.5 Test results

- `tools/test_pointing_roles.mjs` — 5 new Tone 3 fixtures added (Phrase A
  2-syllable and 3-syllable, Phrase B 2-syllable and 3-syllable exact-fit,
  the Final Phrase two-part cadence with recite-pickup). 23/23 pointing-role
  checks pass.
- `npm run gate` — 71/71 Hours Tool checks, no regressions (pre-existing
  F-1a/F-1b warnings unrelated to this work).
- `vite build` — clean.
- Zero changes to Tone 1, Tone 2, or Tone 4 code paths. Nothing shared was
  touched, per the architectural decision in §15.5.

**Status: implemented, tested, gated, built.** Shipped as v0.25.49.

---

## 17. Resolution — Phrase B's overcount fill is `mi`, not `re`

*Closes the open question from §16.4, same session, Bill quoting the
tutorial directly.*

Tutorial, verbatim: "Phrase B also begins directly with the reciting tone
(fa) and concludes with the cadence, used to sing two or more syllables. The
cadence begins with the last internal accented syllable, sung as a dotted
half note on mi, followed by a quarter note on re, and concluding with the
final syllable sung on do. If there are more than three syllables in the
cadence, then these additional unaccented syllables are sung on mi, and the
dotted half is changed to a half note."

**Reading:** the base 3-note frame (`mi` anchor · `re` · `do` final) is the
exact-fit shape for exactly 3 cadence syllables. "These additional unaccented
syllables" (i.e. anything beyond that base frame, for cadences of 4+
syllables) extend the anchor's own `mi` pitch. The single `re` passing tone
stays fixed, always immediately preceding the final `do`, it doesn't
disappear or get repeated, it just moves later in the sequence as more `mi`
extensions get inserted before it.

**What this replaces:** the dedicated Phrase B handler (§16.3) had
implemented `re` for every middle syllable regardless of count, carried over
from what the shared `distribute()` code happened to produce before today
(it repeats the exact-fit figure's own middle note for overcount, a
mechanical side effect nobody had verified against the tutorial). Fixed:
only the syllable immediately before the final gets `re`; every other middle
syllable gets `mi`.

**Verified:** for a 5-syllable cadence (`call·up·on·Thee·now`), the corrected
sequence is `mi(anchor,H)·mi·mi·re·do(final)` — two extra `mi` extensions,
then the single fixed `re`, then `do`. New regression fixture locks this in.

**Test results:** `tools/test_pointing_roles.mjs` — 24/24 pointing-role
checks. `npm run gate` — 71/71 Hours Tool checks, zero regressions. `vite
build` clean. Shipped as v0.25.50.

**Pattern, once more:** this is the fourth instance in one session of the
same root cause, a comment or assumption describing what shared code was
believed to do, never checked against the code that actually ran or the
tutorial it was supposed to be sourced from. Phrase A's fill typo (§14.4),
`distribute()`'s undercount rule (§15.3), the stale `Final.cad` array (§15.2),
and now Phrase B's overcount fill (this section). Four for four, all
resolved by moving Tone 3 off anything shared and checking each phrase
directly against its own tutorial text and score.

---

## 18. Harmony voices — implemented, Tone 3 SATB complete

*Closes §14's in-progress harmony session. Bass finished, code written for
all three added voices (bass, tenor, soprano), gated, built, shipped as
v0.25.51.*

### 18.1 Bass — closed, all phrases

| Role | Alto | Bass |
|---|---|---|
| Phrase A recite | fa | fa |
| Phrase A cad anchor/fill | fa | fa |
| Phrase A cad final | mi | do |
| Phrase B recite | fa | fa |
| Phrase B cad anchor | mi | do |
| Phrase B cad fill | re | sol |
| Phrase B cad final | do | do |
| Final recite | fa | fa |
| Final cad1 anchor | mi | do |
| Final cad1 mid | do | do |
| Final cad1 final | re | do |
| Final cad (Part 2) anchor | mi | do |
| Final cad (Part 2) | fa | do |
| Final cad (Part 2) | re | sol |
| Final cad (Part 2) final | do | do |

Bass for Tone 3 is a near-constant `do`/`fa` drone (recite and Phrase A both
sit on `fa`, everything else settles to `do`), with `re → sol` as the one
real departure, confirmed identically in both Phrase B's fill and the
Final's cad Part 2, cross-checked, no conflict.

### 18.2 The cad1/cad `re` conflict — architecture decision

Alto's own `re` maps to **`do`** in the Final Phrase's cad1 (Part 1, final
position) but to **`sol`** in cad (Part 2, position 2). The existing
generic derivation code resolves both `cad` and `cad1` roles through one
shared `cadMap` keyed only by alto pitch name, which cannot represent two
different answers for the same key. This is structurally the same problem
Tone 4 Phrase E already solved with `cadPositional` (alto `re` appears twice
in that phrase's six-pitch figure with two different bass answers), but
Tone 3's cad1 figure is fixed-length (3 notes) rather than variable, so a
dedicated `cad1Map` field (checked before the generic `cadMap` fallback) was
simpler than adapting the positional-index approach. Added to
`mapBassPitch` and `mapTenorPitch` identically. The recite-pickup `fa`
(§15.4/§16.2) is covered by the same `cad1Map`, since it resolves to
whatever the phrase's own `recite` value already is, no separate case
needed.

### 18.3 Tenor — closed, all phrases

| Role | Alto | Tenor |
|---|---|---|
| Phrase A recite | fa | do |
| Phrase A cad anchor/fill | fa | do |
| Phrase A cad final | mi | do |
| Phrase B recite | fa | do |
| Phrase B cad anchor | mi | do |
| Phrase B cad fill | re | ti |
| Phrase B cad final | do | sol |
| Final recite | fa | do |
| Final cad1 anchor | mi | do |
| Final cad1 mid | do | sol |
| Final cad1 final | re | sol |
| Final cad (Part 2) anchor | mi | do |
| Final cad (Part 2) | fa | do |
| Final cad (Part 2) | re | ti |
| Final cad (Part 2) final | do | sol |

Same near-constant-drone shape as bass, on `do` instead. `re → ti`
(Phrase B fill and Final cad Part 2) is the one real departure, cross-
checked identical in both places.

### 18.4 Soprano — closed, all phrases

Confirmed pure diatonic third above alto, all four alto pitches Tone 3 uses:
`fa→la`, `mi→sol`, `re→fa`, `do→mi`. `SOPRANO_MAP` already covers all four
— no new map entries needed, `3` simply added to `SOPRANO_TONES`, same shape
as the Tone 4 soprano close.

### 18.5 Gating

`3` added to `TENOR_TONES`, `BASS_TONES`, `SOPRANO_TONES` — all three voices
now selectable in the UI for Tone 3, SATB genuinely available.

**Deliberately NOT added:** `TENOR_HOLD_TONES` / `BASS_HOLD_TONES`. Whether
Tone 3's bass or tenor sustain through a constant-pitch alto melisma (versus
re-articulating each note) has never been checked against its own score.
Both drones share the "mostly constant" shape that made hold trivial to
confirm for Tone 4, but per the prime directive that resemblance is not
evidence, hold is never inherited from another tone's confirmation. Open
item for a future session if it's worth checking.

### 18.6 Verification

No automated test exists for harmony-voice rules — `tools/test_pointing_roles.mjs`
is explicitly scoped to alto roles/pitches only (per its own header comment).
Verified by manually tracing the full derivation chain (`mapBassPitch`/
`mapTenorPitch` → `deriveBassRolesWD`/`deriveTenorRolesWD`) against the
flagship "[Hear] [me], O Lord." example for both bass and tenor:

- Bass: `fa(pickup)·do·do·do·do·do·sol·do` — matches Bill's given data exactly.
- Tenor: `do(pickup)·do·sol·sol·do·do·ti·sol` — matches exactly.

`npm run gate` — 71/71 Hours Tool checks, 24/24 pointing-role checks (alto
layer only, unaffected by this session's harmony work). `vite build` clean.
**Recommend live verification against the deployed tool** before considering
this fully closed — per standing practice, bugs are caught by testing the
real tool, not code review or manual tracing alone.

**Status: Tone 3 harmony voices (Bass, Tenor, Soprano) implemented and
shipped, v0.25.51. Tone 3 is now feature-complete for SATB, same as Tone 4.**

---

## 19. Printed-score notation bug — alto rendering a fourth too high

*A different layer entirely from everything in §14-18. Those sections are
all about which SOLFÈGE NAME (fa/mi/re/do) each voice sings, this section is
about which ACTUAL STAFF POSITION a solfège name renders at in the printed
score. Bill caught this by looking at the actual printed output for the
first time since bass/tenor/soprano landed.*

### 19.1 Symptom

Bill: "alto seems to be riding four positions too high in the score." Marked
up a screenshot showing where each note should fall versus where it actually
rendered.

### 19.2 Root cause

`score-print.html` has a single `ALTO_ANCHOR_OCT` table shared across every
tone, verified once against Tone 1's own score and silently reused for every
tone added since (Tone 2, Tone 4), without independent re-verification per
tone. That happened to be safe for Tones 2 and 4. It was wrong for Tone 3.

The table's implicit assumption: "do" anchors to the tonic of whatever key
the score is notated in (F, in the default one-flat key). True for Tones
1/2/4. Not true for Tone 3 — Bill confirmed directly against the printed
score that Tone 3's `do` sits on the **dominant** of the notated key (C, a
fifth above the tonic), not the tonic. Applying the shared table rendered
`fa` as Bb4 (correct for the other tones) when Tone 3's actual score has it
on F4 — not an octave discrepancy, a genuinely different letter.

Confirmed reference points, all natural, no accidentals, still inside the
same one-flat F-major gamut every other tone uses:

| Solfège | Was rendering | Actually is |
|---|---|---|
| do | F4 | **C4** |
| re | G4 | **D4** |
| mi | A4 | **E4** |
| fa | Bb4 | **F4** |

Exactly a fourth lower across the board, matching Bill's original "four
positions" call precisely.

### 19.3 A second, separate finding along the way — notation doesn't transpose with performance pitch

Raised and confirmed directly: Orthodox chant notation is not re-typeset
when a director picks a different starting/performance pitch (`doHz` in this
tool). The printed page a choir reads from is fixed, here, F major. Only
where the choir starts singing moves, a purely aural transposition with no
effect on note positions on the page. This meant Tone 3's new notation table
should NOT use the shared `spell()`/`KEY_MAP` transposition machinery at
all, it needed to be a flat, non-transposing table. (Whether Tones 1/2/4's
own transposing behavior is itself correct is a separate question, not
examined here, not touched.)

### 19.4 Fix — dedicated, non-transposing Tone 3 alto table

`TONE3_ALTO_PITCH = { do:"C/4", re:"D/4", mi:"E/4", fa:"F/4" }` in
`score-print.html`, populated only with the four pitches Tone 3's alto ever
uses (confirmed from `PH_DEFS[3]`). `renderScore()` picks this table when
`payload.tone === 3`; every other tone keeps the shared, transposition-aware
`buildAltoPitch(cfg)` untouched. Same "own logic per tone" principle as
every pointing-engine fix earlier this session, now extended to the
notation layer.

### 19.5 Scope — alto only, this ship

Bass and Tenor's printed notation almost certainly need the identical fix
(same shared-anchor-table mechanism, same never-independently-verified-per-
tone gap), but that requires two more score-confirmed reference points
(`sol`, `ti`) not yet given. **Deferred to a following session**, scoped to
alto only for now, per Bill's own direction ("let's target alto first").
Their AUDIO pitch (the solfège values from the harmony-voice interview,
§14-18) is entirely unaffected either way, this bug and fix are notation-
only, a completely separate layer from the pitch-mapping work already
closed.

### 19.6 Verification

`node --check` on the extracted inline script confirms valid syntax (no
browser available this session for a live render check). `npm run gate` —
71/71 Hours Tool checks, 24/24 pointing-role checks, neither exercises
`score-print.html` so both are unaffected either way. `vite build` clean.
**Recommend live verification against the deployed tool's printed score**
before considering this fully closed, per standing practice, this class of
bug (visual/notation) is caught by looking at the actual rendered page, not
by code review or syntax checking alone.

**Status: alto notation fix implemented and shipped, v0.25.52. Bass/Tenor
notation open, pending `sol`/`ti` score confirmation.**

---

## 20. Bass and Tenor notation — closed, same root cause as §19, opposite direction

*Closes the deferred item from §19.5. Bass and Tenor's printed notation had
the identical shared-table-never-verified-per-tone problem alto did, but
rendering the opposite way (too LOW, not too high).*

### 20.1 Confirmed reference points

| Solfège | Bass was | Bass now | Tenor was | Tenor now |
|---|---|---|---|---|
| do | F3 | **C3** | F3 | **C4** |
| sol | C3 | **G2** | C4 | **G3** |
| fa | Bb2 | **F3** | — | — |
| ti | — | — | E3 | **B3** (natural) |

All confirmed directly by Bill against the score, the same rigor as alto's
four points in §19.

### 20.2 Finding — all three voices share one tonal center

Bass's `do` (C3) and Tenor's `do` (C4) both land on the same letter as
Alto's already-confirmed `do` (C4), each simply at its own natural octave.
Not assumed, a genuine cross-check that fell out of three independently
confirmed tables landing on the same letter for the same solfège name. All
three voices center on C, the dominant of the printed F-major key, each
occupying its own register. This is what "SATB in one key" means in
practice, three separate confirmations converging is good evidence the
whole picture is internally consistent, not just three isolated fixes.

### 20.3 A third bug, found while building this — the ti-natural accidental

Tenor's `ti = B/3` is a diatonic degree (not one of the chromatic
di/ri/fi/si/li/ra/me/se/le/te names), but the printed key (F major) defaults
every `B` to `Bb` via its key signature. Without an explicit natural sign,
this note would silently render as `Bb`, not `B`. The existing
`accidentalFor()` function only emits an accidental for chromatic solfège
names, on the assumption that diatonic degrees are always correctly spelled
by the key signature alone, true for every case so far, not true for this
one.

**Not fixed by widening `accidentalFor()`.** That function's chromatic-only
rule is exactly right for Tones 1/2/4 and for Tone 3's own alto/bass tables
(none of which need a diatonic accidental). Widening it risks a regression
everywhere else. Instead, `mkNote()` gained an optional `forceAcc` parameter,
`undefined` for every existing caller (no behavior change), explicitly `"n"`
only for this one Tone 3 tenor case via a small dedicated lookup
(`TONE3_TENOR_FORCE_NATURAL`).

### 20.4 Fix

`TONE3_BASS_PITCH` and `TONE3_TENOR_PITCH` added, identical dedicated,
non-transposing pattern as `TONE3_ALTO_PITCH` (§19.4), populated only with
the pitches each voice's own `BASS_RULES[3]`/`TENOR_RULES[3]` actually uses.
Wired in at the two bass/tenor note-construction call sites in
`score-print.html`, conditional on `payload.tone === 3`. Every other tone
keeps the shared, transposition-aware `bassVFPitch()`/`tenorVFPitch()`
completely untouched.

### 20.5 Verification

Same caveats as §19.6 — `node --check` confirms syntax validity, no browser
available this session for a live render check. `npm run gate` — 71/71
Hours Tool checks, 24/24 pointing-role checks, neither exercises
`score-print.html`. `vite build` clean. **Recommend live verification
against the deployed tool's printed score** before considering this fully
closed.

**Status: Tone 3's printed SATB notation (alto §19, bass/tenor this
section) is now fully closed, shipped as v0.25.53. Combined with §14-18's
harmony-voice pitch work, Tone 3 is complete: correct solfège mapping for
every voice, correct printed notation for every voice, all dedicated,
nothing shared with Tones 1, 2, or 4.**

---

## 21. Soprano notation — closed, same bug as alto, same direction

*Closes the last voice. Bill: soprano rendering too high "by the same
factor as the original incorrect alto rendering" — a fourth, same direction
as §19's original alto bug, not §20's bass/tenor (which were too low).*

### 21.1 Derivation, not independent score confirmation

Unlike alto/bass/tenor, this table was **derived**, not read directly off
the score. Soprano is a confirmed constant diatonic third above alto
(§18.4), so alto's own already-confirmed table (`do=C/4, re=D/4, mi=E/4,
fa=F/4`) shifts up a third through `SOPRANO_MAP`'s alto→soprano solfège
renaming (`do→mi, re→fa, mi→sol, fa→la`):

| Alto (confirmed) | Soprano solfège | Soprano notation |
|---|---|---|
| do = C4 | mi | **E4** |
| re = D4 | fa | **F4** |
| mi = E4 | sol | **G4** |
| fa = F4 | la | **A4** |

All four are a plain third, no octave change, no accidentals. Cross-check:
each value sits exactly a fourth below where the shared `SOPRANO_ANCHOR_OCT`
table currently renders it, the same magnitude and direction as the
original alto bug, matching Bill's description precisely.

**Flagged, not treated as equal-confidence to the directly-read values.**
Recommend a live check against the actual printed page before this is fully
trusted the same way alto/bass/tenor's hand-confirmed points are.

### 21.2 Fix

`TONE3_SOPRANO_PITCH = { mi:"E/4", fa:"F/4", sol:"G/4", la:"A/4" }` in
`score-print.html`, same dedicated non-transposing pattern as the other
three voices. `renderScore()` picks it via `payload.tone === 3`; every
other tone keeps the shared `buildSopranoPitch(cfg)` untouched.

### 21.3 Verification

`node --check` confirms syntax validity. `npm run gate` — 71/71 Hours Tool
checks, 24/24 pointing-role checks, neither exercises `score-print.html`.
`vite build` clean. **Recommend live verification against the deployed
tool's printed score.**

**Status: all four Tone 3 voices' printed notation (alto §19, bass/tenor
§20, soprano this section) closed, shipped as v0.25.54. Tone 3 is complete:
correct solfège for every voice, correct printed notation for every voice,
all dedicated, nothing shared with Tones 1, 2, or 4.**

---

## 22. Architecture — what "isolated logic" actually means here

*Written to be pointed to directly when justifying dedicated per-tone logic
on future tones. States plainly what is fully isolated, what is not, and
why the distinction still delivers on the isolation principle.*

### 22.1 The principle, stated plainly

Every bug found and fixed for Tone 3 in this session, the Phrase A fill
typo, `distribute()`'s undercount rule, the stale `Final.cad` array, the
Phrase B overcount fill, and all four voices' printed notation, traced back
to one root cause: a value or a piece of logic built and verified for one
tone, then silently reused by another tone that was never independently
checked against it. Four separate instances of that exact pattern, in one
session, on one tone. The fix in every case was the same: give the tone its
own dedicated logic and its own dedicated data, verified from its own
tutorial, its own score, nothing carried over from another tone or another
voice on the strength of resemblance alone.

### 22.2 What is fully isolated for Tone 3 — cannot be touched by any other tone's changes

**Pointing (solfège pitch/role assignment), `src/lib/pointing.js`:**
- Dedicated `pointLine()` branches for Phrase A, Phrase B, and the Final
  Phrase (`cad1`/`cad`), none of them call shared `distribute()`.
- Dedicated `distributeTone3FinalCad1()` / `distributeTone3FinalCad2()`
  functions, used nowhere else.

**Harmony voices, `src/components/tone-trainer.jsx`:**
- `BASS_RULES[3]` / `TENOR_RULES[3]` — their own phrase-by-phrase maps,
  including the dedicated `cad1Map` field that only Tone 3's Final Phrase
  uses (§18.2).

**Printed notation, `public/score-print.html`:**
- `TONE3_ALTO_PITCH`, `TONE3_SOPRANO_PITCH`, `TONE3_BASS_PITCH`,
  `TONE3_TENOR_PITCH` — four flat, non-transposing tables. No other tone
  reads them, and Tone 3 no longer reads any of the shared anchor tables
  (`ALTO_ANCHOR_OCT`, `SOPRANO_ANCHOR_OCT`, `BASS_NOTATION_OCT`,
  `TENOR_NOTATION_OCT`) for anything.

A change to any of the above, for any reason, on any other tone, cannot
reach Tone 3. A change to Tone 3's own tables cannot reach any other tone.

### 22.3 What is NOT isolated — the dispatch points, and why that's still sound

The functions that DECIDE which table or branch to use are shared, because
every tone has to pass through some common entry point (`pointLine()`,
`mapBassPitch()`, `mapTenorPitch()`, `renderScore()`). What each of those
functions contains for Tone 3 is a single, early, explicit check:

```js
if (activeTone === 3 && line.phrase === "Final") { /* Tone 3's own logic, return */ }
// ...
if (tone === 3 && phrase === "Final" && r.role === "cad1") { return rules.cad1Map?.[orig] ?? orig; }
// ...
var ALTO_PITCH = (payload.tone === 3) ? TONE3_ALTO_PITCH : buildAltoPitch(cfg);
```

This is the same shape `PH_DEFS[activeTone]` already had for every tone
before today, a per-tone dispatch, not a per-tone file. One additional
shared touch-point from this session: `mkNote()` gained an optional
`forceAcc` parameter (§20.3), `undefined` for every existing caller, used
only by Tone 3's tenor `ti`.

**Why this still delivers the isolation principle, not just its appearance:**
the failure mode that caused every bug this session was a tone *silently
falling through* to another tone's already-built logic or data, with nobody
re-checking that the fallthrough was actually correct. Once a tone has its
own explicit branch and its own table, there is no fallthrough left for it
to silently inherit from, it either matches its own `tone === N` check and
hits its own dedicated logic, or it doesn't match and hits whatever tone
that logic actually belongs to. The dispatch line has to exist somewhere;
what matters is that nothing on either side of it is shared.

**What this does NOT do automatically:** a future Tone 5 does not
inherit any protection by default. Someone has to deliberately add its own
`tone === 5` branch and its own dedicated table or function, the same
discipline demonstrated across Tones 1-4, not a structural guarantee that
fires on its own. This document is the reference for why that discipline is
worth the extra code, not a claim that the discipline is now enforced by
the architecture itself.

