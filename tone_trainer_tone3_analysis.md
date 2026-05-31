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
