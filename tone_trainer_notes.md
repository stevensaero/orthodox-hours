# Tone Trainer — Notes

**Trainer version: v0.11.0** | Component: `src/components/tone-trainer.jsx`

---

## Session summary (Jun 2026 — v0.11.0 — Tone 1 duration logic rewrite)

### Overview

A deep research and implementation session for Tone 1 Obikhod. The session consisted of:

1. **Full phrase-by-phrase tutorial walkthrough** against Drillock & Ealy, confirming or correcting all five phrase definitions
2. **Score walkthrough** against OCA service texts, establishing score-verified duration rules for all five phrases
3. **Analysis document** written to `tone_trainer_tone1_analysis.md` (§12) — full research record with logic charts, open questions, and architectural findings
4. **Code rewrite** implementing confirmed findings as `cadDurs` blocks and dedicated phrase logic

### Key findings

**Alto pointing (PH_DEFS[1]) — all five phrase definitions confirmed correct.** No pitch figure changes needed.

**Architectural principle confirmed:** Each tone/phrase requires its own self-contained logic. Generic `distribute()` is incompatible with Phrase D's two-accent architecture. This principle now governs all future tone implementation.

**Rhythmic grouping engine identified as a cross-cutting gap** affecting all tones. The tutorial introduction describes word-level rhythmic grouping (two-grouping / three-grouping) that drives dotted half notes and extended whole notes. This cannot be computed from role alone — requires a phrase-level pre-pass. Flagged for future implementation as a separate architectural layer above the current base defaults.

**Pre-slur scoped to Tone 1 Phrase A only.** The generic `def.prep` gate was incorrectly firing for any phrase with a prep note. Pre-slur is now explicitly gated on `activeTone === 1 && phrase === "A"`.

### Per-phrase summary

| Phrase | Key finding | Status |
|---|---|---|
| A | Single pitch cadence; fills Q; prep positional; pre-slur scoped | ✅ cadDurs added |
| B | do·re melisma at count=2; re fills H≤3/Q≥4; close ti(H) | ✅ cadDurs + melisma |
| C | do fills H≤3/Q≥4; close ti(H); no melisma | ✅ cadDurs added |
| D | Two-accent architecture; five positions always preserved; melisma when count<5 | ✅ dedicated logic |
| Final | la always W; structural melisma at count<3; do(Q) second position at count≥5 | ✅ cadDurs + melisma |

### Open questions carried forward

1. Rhythmic grouping engine (dotted halves / whole notes) — all tones affected
2. Tone 1 Phrase A pre-slur duration — currently Q·Q, unverified from score
3. Phrase D whole note trigger — period/`//` pattern provisional, needs more score evidence
4. Anchor detection backup rule in Phrase A — prep always separates body from cadence
5. Count=4 Final Phrase `do(W)` — only "Lover of man" observed, needs independent evidence

---

## Session summary (Jun 2 2026 — v0.9.8 through v0.10.0 — SATB architecture, Tone 2 full voice verification)

### Overview

A deep verification and build-out session for Tone 2 Obikhod. Alto pointing was already implemented; this session established score-verified bass and soprano rules, built the full SATB voice architecture, wired all four voices into a unified audio/visual pipeline, and fixed several structural bugs. The session also added the copyright footer to both tools, the lexicon cache-busting mechanism, and multiple lexicon entries.

**Key discipline established:** Alto is the single source of truth. Bass and soprano derive from `rolesWD` via 1:1 pitch substitution. No voice re-derives independently from `pointLine()`.

---

### Architecture: single source-of-truth pipeline (non-negotiable)

```
pointLine(line) → lineToRolesWithDuration(line) → rolesWD  ← alto source of truth
                                                       │
                              ┌────────────────────────┼─────────────────────┐
                              ↓                        ↓                     ↓
                        alto chips              soprano chips           bass chips
                        alto audio              soprano audio           bass audio
                    (rolesWD as-is)       (SOPRANO_MAP on altoPitch)  (BASS_RULES on role)
```

**Rule:** No voice re-derives from `pointLine()` independently. All three voices consume `rolesWD`. Durations in `rolesWD` are already correct — never recompute them downstream.

- `lineToNotes_bass(line)` — consumes `rolesWD`, 1:1 pitch substitution via `BASS_RULES[tone][phrase][role]`, emits notes with `r.dur` directly.
- `lineToNotes_soprano(line)` — consumes `rolesWD`, stores **alto pitch** in `n.sol`. `freq_soprano(altoPitch)` and `chipH_soprano(altoPitch)` handle the SOPRANO_MAP substitution internally. **Never pre-map the pitch before storing it.**
- `generateBass()` was removed entirely. Dead code. Do not re-introduce it.

**Critical soprano anti-pattern:**
```js
// WRONG — double maps: SOPRANO_MAP applied in lineToNotes_soprano AND again in freq_soprano
notes.push({ sol: SOPRANO_MAP[altoPitch], ... });
freq_soprano(n.sol); // n.sol is already soprano pitch — maps again → wrong note

// CORRECT — alto pitch stored; freq_soprano maps once internally
notes.push({ sol: altoPitch, ... });
freq_soprano(n.sol); // n.sol is alto pitch → SOPRANO_MAP → octave correction → correct freq
```

---

### Tone 2 Obikhod — score-verified

**Alto phrases (Drillock & Ealy tutorial verified):**
- Phrase A: recite `re`, cadence `fa·mi·re` (fa·mi melisma on anchor, re dotted-half close)
- Phrase B: recite `re`, cadence `di·re`
- Phrase C: inton `re`, recite `re`, prep `ti`, cadence `do`
- Phrase D: recite `do`, cadence `di·re`
- Final: recite `re`, preslur `re·ti`, cadence `do·re·do·ti`

**Bass rules (score-verified, L'vov-Bakhmetev Obikhod):**
```js
BASS_RULES[2] = {
  A:     { recite:"la", cadMap:{ fa:"la", mi:"mi", re:"la" } },
  B:     { recite:"la", cadMap:{ di:"mi", re:"la" } },
  C:     { recite:"la", cadMap:{ do:"sol" }, prepMap:{ ti:"re" } },
  D:     { recite:"sol", cadMap:{ di:"mi", re:"la" } },
  Final: { recite:"la", cadMap:{ do:"sol", re:"fa", ti:"re" },
           preslurMap:{ re:"la", ti:"re" } },
}
```

**Bass octave placement (`BASS_OCTAVE_DIV`):**
- `la/ti/do/di` → divide by 2 (1 octave down from reference)
- `re/mi/fa/sol` → divide by 4 (2 octaves down from reference)

**Soprano rules (score-verified, Tone 2 only):**
```js
SOPRANO_MAP = {
  la:"do", ti:"re", do:"mi", di:"mi",
  re:"fa", mi:"sol", fa:"la", sol:"ti"
}
```
Pure diatonic third above every alto pitch — one staff line up, mechanically, **no exceptions in Tone 2**. Duration identical to alto throughout. `di→mi` (not `di→fa`) because it is a positional third on the staff, not a chromatic third.

**Soprano octave correction (`freq_soprano` / `chipH_soprano`):**
```js
// Soprano at same octave reference as alto; shift up one octave only when needed
const freq_soprano = (sol) => {
  const mapped = SOPRANO_MAP[sol] ?? sol;
  const altoF  = freq(sol);
  const sopF0  = freq(mapped);
  return sopF0 > altoF ? sopF0 : sopF0 * 2;
};
```
Pitches `re/mi/fa/sol` are already above their alto counterparts → no shift. Pitches `la/ti/do/di` sit below their mapped targets at base octave → shift up. **`la→do`**: alto `fa`(Eb5) → soprano `la`(G4) at base = below alto → shifts to G5 ✓.

---

### Voice part selector

Dropdown order: `Soprano | Alto (Melody) | Tenor (coming, disabled) | Bass | ── | Alto + Bass | SATB`

- **Soprano:** standalone soprano chips (full opaque, solfège labels, `chipH_soprano` heights)
- **Alto (Melody):** alto only
- **Tenor:** disabled, greyed — no rules established for any tone
- **Bass:** standalone bass chips
- **Alto+Bass:** alto + bass audio/visual only — **no soprano**
- **SATB:** alto + bass + soprano. Soprano at 50% opacity, rendered behind alto at same baseline. Soprano chip tops protrude above alto by the interval height — this IS the pitch encoding, not a decoration.

**Soprano gating:** `SOPRANO_TONES = new Set([2])` — soprano is fully suppressed (audio + visual) for all tones not in this set. Add a tone only after score verification of the Obikhod score for that tone.

**Bass gating:** `BASS_RULES[tone][phrase]` returns `null` for unverified tones — bass suppressed automatically.

---

### Chip visual architecture

- Alto chips: `chipH(altoPitch)` = `CHIP_BASE_H + PITCH_SCALE.indexOf(pitch) * CHIP_STEP_H`
- Bass chips: `chipH_bass(bassPitch)` — inverted scale, grows downward
- Soprano chips: `chipH_soprano(altoPitch)` — always above alto, octave-corrected; takes alto pitch as input (not soprano-mapped pitch)
- Role stripe: 8px at top (alto/soprano), 8px at bottom (bass)
- SATB soprano rendering: soprano row `position:absolute; bottom:0` behind alto row (`zIndex:1`). Container height = max soprano chip height in line. Soprano at 50% opacity.
- In Alto+Bass mode: no soprano chips or tabs at all

**Highlight state:** `playingAltoIdx` and `playingBassIdx` are **separate state variables** — never a single shared index. This was a deliberate fix to prevent React batching from racing when both fire simultaneously in SATB/Alto+Bass playback.

---

### Lexicon improvements this session

- `evening` → `eve·ning` (2 sylls, stressIdx:0, reconciled) — was `e·ve·ning` (3 sylls, lowConfidence)
- `universe` → `u·ni·verse` (3 sylls, stressIdx:0, reconciled)
- `sacrifice` — was getting `sac·rifice` (2 sylls) despite lexicon having `sac·ri·fice` (3 sylls). Root cause: mid-word bracket path (`[sac]rifice`) was using bracket character boundaries as the syllable split, ignoring the lexicon. Fixed: when lexicon has >1 syllable, use lexicon syllables and map bracket span to accent index via `bracketSpanToSyllIdx`. Character-split fallback retained only when lexicon gives 1 syllable.

**Lexicon cache-busting:** both lexicon files now fetch with `?v=${TONE_TRAINER_VERSION}`. Browser always fetches fresh after a version bump. **Always bump version when lexicon files change.**

---

### Other fixes this session

**`lineToNotes_bass` refactor (v0.9.8 → architecture commit):**
Replaced 130-line function (with separate melisma expansion, cadence-count branching, hardcoded pitch sequences) with a 32-line pure derivation from `rolesWD`. Audio and visual bass paths now both start from the same expanded representation.

**Chip highlight racing fixed:**
Split `playingChipIdx` into `playingAltoIdx` and `playingBassIdx`. In alto+bass mode both chips now highlight simultaneously without flickering.

**Play button lockout:**
All play buttons disabled (opacity 0.35, `not-allowed`, `disabled` attribute) while any audio is playing. Only the active line shows ◼ Stop.

**Alto+Bass chip highlight fix:**
Bass highlight scheduling was gated on `!playAlto` — in Alto+Bass mode bass chips never highlighted. Fixed to schedule bass highlights whenever bass is playing, regardless of alto.

**Mid-word bracket lexicon fix (`[sac]rifice` → 3 sylls):**
See lexicon section above.

---

### Copyright footers

Both tools now have expandable copyright footers. Short form inline; "more" expands to full five-paragraph notice covering personal use grant, IP ownership, redistribution restrictions, and third-party materials.

---

### Sandbox status

`tone_trainer_sandbox.html` in repo root is **no longer the reference implementation**. The live component (`tone-trainer.jsx`) diverged significantly during this session. The sandbox is a historical artifact; do not use it as ground truth for anything.

---

## Session summary (May 31 2026 — v0.9.7 edit machine removal)

Removed the machine edit feature entirely from the A/B comparison harness. The feature
was unreliable — syllable edits and accent placement were both lost on apply due to
two compounding bugs in the apply pipeline. Rather than continue patching, the decision
was made to remove cleanly.

**Removed:** `editMode` and `editOpen` state; `toggleAccent`, `toggleMachineAccent`,
`applyEdit`, `applyMachineEdit` functions; `✎ edit machine` button; machine edit panel
(input field + apply button) in the harness machine row; `edit syllables` button and
director edit panel in the sing view; all `onClick`/`cursor` editMode conditionals on
chips in both views. 137 lines removed, zero dead references remaining.

The A/B harness is now read-only — director and machine side by side, play buttons,
show source, export JSON.

---

## Session summary (May 31 2026 — v0.9.2 through v0.9.6 pointing overhaul)

### Overview

A sustained debugging session on the Director vs. Machine comparison harness, driven
by live JSON exports from the deployed tool. The session produced six patch releases,
each fixing a specific verified failure. Key discipline lesson: JSON exports are only
reliable diagnostics when the version badge is bumped with every push — starting this
session, that discipline is enforced.

---

### v0.9.2 — Tone 2 rotation bug fix

**Bug:** Tone 2 rotation was cycling A·B·C·D·A·B·C·D (wrong). Tutorial says: Phrase A
fires once only for the first line, then B·C·D repeat.

**Fix:** `ROT_DEFS[2]` changed from a flat array to a function:
`(i, total) => i === total-1 ? "Final" : i === 0 ? "A" : ["B","C","D"][(i-1) % 3]`
`phraseForLine()` and `blockLinePhrase()` updated to accept array OR function.

**Validation:** Exhaustive simulation across all sticheron lengths 2–14. Zero regressions
on Tones 1 and 3. Three previously-anomalous "Phrase B two-mark" corpus lines turned out
to be mislabeled Phrase C lines under the wrong rotation — after fix, zero genuine corpus
anomalies across 78-instance corpus. Documented in `tone_trainer_tone2_analysis.md` §14.

---

### v0.9.3 — STOP filter whole-word guard

**Bug:** STOP filter was matching syllable text fragments (e.g. `in` from `in·cense`,
`or` from `glo·ry`) as function words, causing wrong anchor selection.

**Fix:** Both STOP filter call sites changed from `!STOP.has(s.text.toLowerCase())` to
`!(s.single && STOP.has(s.text.toLowerCase()))`. `s.single` is true only when the
syllable IS the whole word. Standalone function words still blocked; polysyllabic
fragments pass through correctly. Applied in both `autoAccentLine` (component-scoped)
and `applyPhraseAccent` inside `autoEncodeLines` (module-scoped).

---

### v0.9.4 — Machine pointing view in sing window

Director and Machine toggle buttons replace the old badge+button pattern in the sing
display. `singView` state drives which lines render and which audio path fires.
`singView` resets to `"director"` on fresh Point Verses.

---

### v0.9.5 — Director-authoritative pointing, both paths unified

**Root problem:** The bracket path (textarea) and underline path (docx "point ▸") were
two separate implementations of the same mark-to-syllable logic. Any fix to one didn't
propagate to the other — this was the source of the `Re[deem]er` rendering as `Re·deemer`
on the docx path even after the bracket path was fixed.

**Fixes applied:**

1. **`parseBracketWord`** — mid-word brackets now derive syllable split directly from
   bracket boundaries. `Re[deem]er` → prefix=`Re`, bracketed=`deem`, suffix=`er` →
   3 syllables. No lexicon needed for the split.

2. **`parseTruthLines`** — was discarding `rawSylls` returned by `parseBracketWord` and
   calling `syllabifyWithSource` again independently. Fixed to use `rawSylls` directly
   for mid-word bracket display.

3. **`paraToPointerLine`** — docx underline path now derives syllable split from underline
   boundaries using the same prefix/marked/suffix logic as the bracket path.

4. **`syllabifyWithDirectorMark` refactor** — extracted as a module-level pure function
   containing the single implementation of the mark-to-syllable logic. Both
   `parseBracketWord` and `paraToPointerLine` are now thin adapters that derive
   `(markStart, markEnd)` from their input format and delegate to this function.
   Future pointing bugs have exactly one location to fix.

5. **`autoEncodeLines` stressIdx by text match** — machine column was applying
   `entry.stressIdx` as a numeric index into the director's syllable array. When the
   director split has different length than the lexicon split (e.g. `Resur[rec]tion` →
   3 sylls vs lexicon's 4), the index was wrong (`tion` instead of `rec`). Fixed to find
   the director syllable whose text matches the lexicon's stressed syllable text.

6. **Lexicon audit** — added `incarnate`, `almighty`, `endured`, `desired`, `incarnation`,
   `unwedded`, `habitation`, `appeared`; fixed `enlighten` syllabification.

7. **A/B window preserved on re-point** — `setCompareMode(false)` was unconditional.
   Changed to only close if the harness was already closed.

8. **`applyMachineEdit` accent strip** — no-op apply was setting all accents to `false`.
   Fixed to re-run `autoAccentLine` after parsing.

9. **`point ▸` button guarded until lexicon loads** — `canPoint = !!PH_DEFS[b.tone] && !!lexicon`
   prevents pointing before the async lexicon fetch resolves.

10. **BPM slider step 1→10.**

**Regression testing:** `tools/test_pointing_paths.mjs` + `tools/pointing_baseline.json`
committed to repo. Exercises both bracket and underline paths against 13 known corpus
cases. Run with `node tools/test_pointing_paths.mjs` before and after any pointing change.

---

### v0.9.6 — Lexicon merge collision fix

**Bug:** `redeemer` and `unwedded` were present in both `syllable-table.json` (correct,
fixed entries) and `name-residue.json` (stale, wrong entries). The component merges as
`{ ...table, ...residue }` — **residue always wins for shared keys**. This meant:

- `redeemer` was silently served as `['Re','deemer']` / `stressIdx=0` (residue) instead
  of `['re','deem','er']` / `stressIdx=1` (table). Machine anchor landed on `Re`, not
  `deem`. Machine chips showed `???` (residue source indicator) for all three syllables.
- Every lexicon fix pushed to `syllable-table.json` was overwritten at merge time by the
  stale residue entry — the bug survived multiple sessions of "fixes."

**Fix:** Removed both stale keys from `name-residue.json`. Zero overlapping keys between
the two files. The merge is now collision-free.

**Lesson — lexicon merge order:** `{ ...table, ...residue }` means residue always
overwrites table. When adding a word to `syllable-table.json`, **always check
`name-residue.json` for a conflicting entry and remove it.** The `name-residue.json`
file exists for proper names and specialist terms not in the CMU dictionary — if a word
graduates to a confirmed entry in `syllable-table.json`, its residue entry must be deleted.

**Lesson — version discipline:** JSON comparison exports include `trainerVersion` in the
header. That field is only useful if the version is bumped with every push. Starting this
session: every push that touches user-visible behavior gets a version bump. This makes
exports genuinely useful as diagnostics — you can tell exactly which build an export came
from.

**Lesson — trust the data:** When a user reports a bug with a fresh-refresh export and
the code simulation says it should work, the correct response is to ask questions and
investigate further — not to attribute the discrepancy to CDN caching. The export was
accurate both times.

---

## Session summary (May 31 2026 — v0.9.1 cad1 Final Phrase fix)

### What was done

**Closed the known v0.9.0 gap:** Tone 3 Final Phrase first anchor (anchor1) now renders
as `cad1` role with `mi(H)·do(Q)·re(Q)` instead of falling through as reciting `fa(Q)`.

### Changes made

**`pointLine()` — new `cad1` split path (scope-guarded)**
Signature updated to `pointLine(line, phDefs, activeTone)`.
When `activeTone===3 && phrase==='Final' && acc.length >= 2`:
- anchor1 = `acc[acc.length-2]` (same monosyllable backup as `anchorIndex()`)
- `body` → recite; `cad1` → distribute(`['mi','do','re']`, count) with `role:'cad1'`;
  `cad` → distribute(def.cad, count) with `role:'cad'`
- Else: falls through to unchanged single-anchor logic

**`lineToNotes()` — cad1 duration case added**
`cad1` anchor (first) = `H`; subsequent `cad1` syllables = `Q`.
Peak amplitude rule extended to `(role==='cad' || role==='cad1') && anchor`.

**`buildComparison()` — extended**
New signature: `buildComparison(truthLines, machineLines, phDefs, activeTone)`.
Passes `activeTone` to `pointLine()` inside `computeRoles`. Adds `firstAnchorMatchCount`
to summary stats. All four component call-sites updated.

**Export payload extended** — `role`, `pitches`, `dur`, `machineRole`, `machinePitches`,
`machineDur` per syllable; `truthFirstAnchorIdx`, `machineFirstAnchorIdx`,
`firstAnchorMatch` per line; `firstAnchorMatchCount` in header.

**UI — `cad1` chip color** `rgba(122,36,24,.05)` / `#9a3c2c` — lighter burgundy distinct
from `cad` (Part 2). Info bar legend conditionally shows "cad. pt. 1" / "cad. pt. 2"
pills when Tone 3 active; other tones show "cadence" as before.

**`tools/snapshot_comparison.mjs` — new programmatic snapshot tool**
Node script: reads `.docx`, runs `parseTruthLines + autoEncodeLines + buildComparison`
without a browser. Includes the `cad1` fix. `npm run snapshot` entry in `package.json`.
Scope guard verified: `--tone 1` and `--tone 2` on Tone 3 fixtures → 0 blocks, 0 lines.

### Validation protocol results

Pre-patch snapshots generated (before the fix was written):
- `pre_cad1_t3_feb.json` — Meatfare Sunday, 14 blocks, 71 lines, 58% anchor match
- `pre_cad1_t3_may.json` — 4th Sunday of Pascha, 15 blocks, 80 lines, 56% anchor match

Post-patch snapshots generated:
- `post_cad1_t3_feb.json` — 58% anchor match (unchanged — patch doesn't affect accent positions)
- `post_cad1_t3_may.json` — 56% anchor match (unchanged)

**Diff result — PASS:**
- Feb: 12 Final-phrase lines changed, 0 non-Final changes
- May: 11 Final-phrase lines changed, 0 non-Final changes
- All changes: `recite fa Q` → `cad1 mi H` at anchor1; `recite fa Q` → `cad1 do Q`
  for fill syllables between anchor1 and anchor2; everything else byte-identical
- Tone 1/2 guard: both fixtures are pure Tone 3 services (0 Tone 1/2 blocks);
  scope guard in `pointLine()` structurally prevents any Tone 1/2 code path execution

---


## Session summary (May 30 2026 — v0.9.0 Tone 3 build-out)

### Source materials processed
- Tutorial PDF: `Tutorial-Obikhod-Tone3-Explanation.pdf` (Drive ID `1wuGATRbkxcUxjIzZTpCHfeoX90uXXFLS`)
- OCA Unison MP3: analyzed with `librosa.pyin`; reciting tone fa ≈ 179 Hz confirmed
- OCA `.docx` fixtures: `2026-0215-texts-tt-.docx` (Meatfare Sunday) and `2026-0503-texts-tt.docx` (4th Sunday of Pascha / Paralytic), uploaded to chat
- Combined corpus: **164 phrase instances across 31 stichera blocks**

### Key findings

**Tone 3 rotates A·B only (2 phrases).** No C or D anywhere in corpus. This required introducing `ROT_DEFS` keyed by tone number, and making `phraseForLine()`, `parseTruthLines()`, `blockLinePhrase()`, and the comparison harness render all accept an active rotation array instead of assuming 4 phrases.

**Mark counts:** Phrase A = 73/74 one mark (1 director-cue anomaly on long phrase). Phrase B = 59/59 one mark — perfectly clean. Final = 31/31 **two marks** (both cadence anchors, 100% consistent).

**Phrase A cadence uses `do` fill**, not `fa` repeat. Tutorial explicit: "unaccented syllables between the accented syllable and the final syllable are sung on do." `cad:['fa','do','mi']` ensures `distribute()` repeats `do` as the penultimate fill. Using `['fa','mi']` would have been wrong.

**Dotted-half anchor on Phrase B.** Audio confirmed ~1.3s vs H_ref≈0.76s and dH_ref≈1.14s. `DH = H * 1.5` added to `lineToNotes()`; applied via `anchorDH: true` flag on `PH_DEFS[3].B`. Long-cadence rule (>3 cad syllables → dH→H, extras ride on mi) handled by existing `distribute()` logic.

**Final Phrase two-part cadence.** Two internal accents always marked: first anchor (Part 1: `mi H do Q re Q`) and second anchor (Part 2: `mi Q fa Q re H do W`). `autoAccentLine()` extended for `activeTone===3 && phrase==='Final'` to mark both `acc[acc.length-2]` and `acc[acc.length-1]`.

**Known gap — first Final anchor not yet rendered as cad role.** `anchorIndex()` returns the second anchor (last internal accent), so the first anchor falls in `body` and plays as reciting `fa(Q)` rather than `mi(H)`. The Part 2 cadence and whole-note final render correctly. Fix requires a new `cad1` role type in `pointLine()`; deferred to future session.

### Architecture changes
- `ROT_DEFS = { 1: ['A','B','C','D'], 2: ['A','B','C','D'], 3: ['A','B'] }` — new module-level constant
- `phraseForLine(i, total, rot)` — now accepts rotation array as third param
- `parseTruthLines(rawText, lexicon, rot)` — rot param added
- `blockLinePhrase(i, n, rot)` — rot param added
- `lineToNotes()` — `const DH = H * 1.5` added; anchor logic checks `useAnchorDH`
- `autoAccentLine()` — two-anchor support for Tone 3 Final Phrase
- `PRESETS[3]` — hand-pointed "By Thy Cross, O Christ our Savior" (5 lines)

### Analysis document
`tone_trainer_tone3_analysis.md` pushed to repo root before any code was written.

---

## Session summary (May 30 2026 — v0.8.0 Tone 2 build-out)

### UI restructuring
- **Info bar** made permanently visible — renders above the comparison harness regardless of mode. Contains color-coded legend pills (matching chip `roleBg`), live mode badge (reflects `singWhich` in A/B mode), Director vs. Machine toggle, pitch height toggle (hidden in A/B mode).
- **Director vs. Machine** toggle moved from helper-text row to info bar, styled as pill button matching legend buttons.
- **Point → "Point Verses"**; no longer auto-opens comparison window on click.
- **Duplicate Director Pointing badge** in textarea header removed; ✓ added to info bar badge instead.
- **Pitch selector** extended: F (174.61 Hz) and G (196.00 Hz) added below A. Full range F·G·A·B·C·D·E.
- **BPM slider** disabled and greyed during playback (`playingLine !== null`). Tooltip updates to "Stop playback to change tempo."

### Bug fixes
- **`applyEdit` silent re-pointer**: was setting all accents to `false` then leaving them, so hitting apply without changes reset pointing to last-syllable fallback. Fixed: now re-runs `autoAccentLine` after syllabification change.
- **`edit syllables` in Director mode**: button now hidden when `hasTruth` — edit panel would discard director bracket marks.
- **`isPlaying` ReferenceError**: used a loop-local variable at component scope → React crash (blank screen). Fixed: `playingLine !== null`.

### Lexicon fixes
- `incense`: `stressIdx` 1→0 (noun form IN-cense).
- `arise`: syllabification `["a","ri","se"]` → `["a","rise"]` (CMU: AH0 R AY1 Z, 2 syllables).
- `thy`, `thine`: added to STOP list (archaic possessives, same category as `my`, `his`, `our`).

### Polysyllabic final word trap — research and disposition
Examined using JSON fixture export (`tone-trainer-comparison(8).json`). Confirmed: for "This is He Whom David announced," director anchor = `Da` (idx 4), machine anchor = `nounced` (idx 7). The machine picks the last stressed syllable; the director treats the entire final verb as trailing.

**Conclusion:** the one-syllable backup rule cannot be extended to polysyllabic finals without breaking correctly-handled cases (e.g. `announced` is genuinely the anchor in other phrases). The class of trailing polysyllabic past-tense verbs is a known AUTO mode limitation. Director Pointing handles them cleanly. **Not worth a rule change; document and accept.**

Liturgical `-ed` syllabification discussion: only genuinely phonological `-ed` words (bless·ed, learn·ed) warrant lexicon extension. Non-syllabic `-ed` (announced, proclaimed, revealed) are 2-syllable in actual pronunciation even in chant.

---

## Session summary (May 30 2026 — v0.5.2 STOP-filter on anchor candidates)

**56% → 92% anchor match across 6 stichera fixtures (48 lines).**

The core finding from the fixture corpus: 15 of 21 misses (71%) were cases
where the machine anchored on a STOP-list word — `the`, `from`, `or`, `as`,
`this`, `he`, `our`, etc. The lexicon marks these as stressed (CMU records some
stress for them in isolation), which caused the backup rule to land on them
instead of stepping past to the real anchor.

**The fix:** one line in both `autoAccentLine` and `applyPhraseAccent` — filter
STOP-list words from stressed anchor candidates before applying the backup rule:

```javascript
const stressedIdxs = flat
  .map((s, i) => (s.stressed && !STOP.has(s.text.toLowerCase()) ? i : -1))
  .filter(i => i >= 0);
```

**Why STOP list and not ANCHOR_EXCLUDE:** the STOP list is defined by grammatical
function (words that are never phrase-structurally significant in English), not
by test failures. This is the key distinction from the ANCHOR_EXCLUDE approach
we previously rejected. Critically: `me` and `thee` are NOT in the STOP list,
so the Final Phrase anchor on `me` is unaffected.

**Remaining 4 misses (separate concerns):**
- `ri` (arise) — polysyllabic final word, backup rule doesn't fire (single=false)
- `cense` (incense) — lexicon has verb-form stress (second syllable), should be noun-form (first)
- `thine` — archaic possessive, not in STOP list; could add it
- `God` (file 7 PhA) — requires further analysis

**Key principle confirmed by corpus:** the STOP list is the correct filter for
anchor candidacy. Not one of the 48 director-chosen anchors was a STOP word.
The machine's wrong choices were almost exclusively STOP words that the lexicon
falsely promoted to stressed status.

---

## Session summary (May 30 2026 — v0.5.1 phrase-structural accent engine)

**Root cause identified and fixed.** The v0.4.0/v0.5.0 AUTO mode marked every
lexicon-stressed syllable as an accent chip and then found the last one as the
anchor. More accurate stress (from the lexicon) just produced a more accurately
wrong answer — the pipeline was wrong, not the data.

**The correct pipeline** (from reading the Drillock & Ealy tutorial):
1. Syllabifier/lexicon answers: *where is the natural stress in each word?* (lookup)
2. Phrase-structural engine answers: *where does the cadence launch?* (structure)

These are two different questions. The lexicon feeds #1. #2 was always being skipped.

**`autoAccentLine(words, phrase)`** — new function, ~25 lines, the whole change:
- Reads existing `accent` flags from `wordFromDisplay` as stress candidates
- Applies tutorial rules: anchor = last internally stressed syllable (existing
  backup rule); intonation = first stressed syllable (Phrases A and C only)
- Returns words with accent=true on exactly those 1-2 syllables, false everywhere else

**`autoEncodeLines`** updated with the same logic (`applyPhraseAccent` inline) so
the machine column in the comparison harness reflects the correct engine.

**Verified against "Lord I Call" fixture (node-level):**

| Line | Phrase | Machine | Director | Anchor ✓? |
|------|--------|---------|----------|-----------|
| Lord, I call upon Thee, hear me! | A | Lord / hear | Lord / hear | ✓ |
| Hear me, O Lord! | B | me | hear | ✗ |
| Lord, I call upon Thee, hear me! | C | Lord / hear | Lord / hear | ✓ |
| Receive the voice of my prayer, | D | voice | ceive / voice | ✓ |
| when I call upon Thee! | A | when / pon | call / pon | ✓ anchor |
| Hear me, O Lord! | Final | me | hear / me | ✓ |

5/6 anchor matches vs 0/6 before. The one miss (Phrase B, line 2) is a known
lexicon limitation: `me` is stressed in the lexicon so the backup rule steps
back from `Lord` to `me` instead of `hear`. Not a logic error — a data quality
target for the lexicon improvement loop.

The intonation misses (line 4: `when` vs `call`; line 5: machine marks no
intermediate reciting accents) are also lexicon targets, not logic errors.

**Key principle established:** the STOP list is the wrong tool — `me` is
genuinely accented in the Final Phrase but unaccented in Phrase B. Word identity
cannot determine accent; phrase position and cadence structure must. The engine
now reflects this correctly.

---

## Session summary (May 30 2026 — v0.5.0 Feature B)

**Feature B shipped.** The "your own text" textarea is now encoding-aware. Three
interlocking pieces:

**1. TRUTH mode vs AUTO mode detection.** `parseBracketedText()` scans for `[accent]`
marks on every keystroke and after every "Analyze & point". If brackets present →
TRUTH mode (green badge visible); if absent → AUTO mode (v0.4.0 behavior, unchanged).

**2. Bracket-authoritative parsing (`parseTruthLines`).** Handles both cases from
OCA materials:
- *Whole-word:* `[Lord]`, `[hear]`, `[Hear]` — entire word bracketed. Lexicon
  `stressIdx` picks the specific syllable within it (on single-syllable words this
  is always idx 0).
- *Mid-word:* `up[on]`, `Re[ceive]` — bracket covers a character span. Vowel-nucleus
  mapping (SYLLABIFIER_SPEC §7 algorithm): find the first vowel nucleus within the
  bracket span, map it to its syllable. Falls back to max-overlap if no nucleus found.
- Non-bracketed words carry no accent in TRUTH mode (absence of bracket = unaccented).

**3. Comparison harness.** After TRUTH mode analysis, a side-by-side director vs.
machine panel appears:
- Headline: anchor agreement N/M lines (%) — anchor is what matters for singing
- Per-line: two rows of chips (director / machine); amber = syllable disagreement;
  boxed chip = cadence anchor
- Sing toggle: "Sing director" / "Sing machine" — plays the selected version
  via the existing audio engine (playAll/playLine both respect `singWhich`)
- JSON export: per-line, per-syllable detail for the improvement loop

**"point ▸" now populates the textarea.** `sendBlockToPointer` now calls
`setText(encodeBlock(block))` before `setLines(next)`, making the textarea the
single channel for both ingested and hand-typed text. The block's OCA underline
accents are already truth, so the comparison harness opens immediately with the
correct director vs. machine contrast.

**Test fixture verified (node-level):**
`[Lord], I call upon Thee, [hear] me! | [Hear] me, O Lord! | [Lord], I call upon Thee, [hear] me! | Re[ceive] the [voice] of my prayer, | when I [call] up[on] Thee!// [Hear] [me], O Lord!`
- `[Lord]` → whole-word, single syllable, accent idx 0 ✓
- `up[on]` → mid-word, `upon` → `[u, pon]`, bracket span `on` (chars 2-3), nucleus `o` → syllable 1 `pon` ✓
- `Re[ceive]` → mid-word, `Receive` → `[Re, ceive]` (lexicon), bracket span `ceive`, nucleus `ei` → syllable 1 ✓
- `[Hear] [me]` final line → both accented; anchor backs off from final monosyllable `me` → `Hear` is cadence anchor ✓

**Build clean.** `vite build` passes; tone-trainer chunk 135 KB gzipped (41 KB).

---

## Session summary (May 30 2026 — v0.4.0 + post-deploy fixes)

*Independent version line, decoupled from the Orthodox Hours Tool version. This
sub-project iterates on its own cadence; its churn does not bump the hours-tool
version. The hours-tool `RELEASE_NOTES` records only the integration milestones
(e.g. the v0.6.0 commit that added this component and its footer link).*

---

## Session summary (May 30 2026 — v0.4.0 + post-deploy fixes)

**Lexicon wired (v0.4.0):** syllabification and stress now lookup-first from the
generated CMU+TeX lexicon (1,151 table entries + 68 residue). Fetched from
`public/lexicon/` at mount, matching the psalter/scripture pattern. Rules remain
as last-ditch fallback.

**"show source" toggle:** `?` = unconfirmed residue, `~` = rule fallback (suppressed
on single-syllable function words — I, O, the, of, etc.). No indicator for table,
reconciled, count-only, archaic, or truth (OCA underline).

**paraToPointerLine rewrite:** the docx "point ▸" path now uses lexicon
syllabification (so "upon" → u·pon instead of one chip), then maps OCA underline
spans to syllables by vowel-nucleus overlap (SYLLABIFIER_SPEC §7). Two cases:
whole-word bracket → lexicon stressIdx picks the specific syllable;
mid-word bracket (Re[ceive], up[on]) → first underlined vowel nucleus is the
accent. Non-underlined words carry no accent (lexicon stress was wrongly leaking
through — fixed). Source tagged "truth" for all underline-driven accents.

**Punctuation phantom chips fixed:** the `|| part` fallback in both
`wordFromDisplay` and `paraToPointerLine` was keeping pure-punctuation fragments
(commas, etc.) as syllable chips. Both paths now drop empty-after-strip fragments.

**distribute() fix — verified from score:** the `count < figure.length` case now
takes the first N notes of the figure sequentially (one per syllable, no melisma).
Verified from the OCA LIC sheet music (t1-lic-obikhod-tt.pdf): "Re·ceive the
voice·of·my·prayer" shows four half notes, one per cadence syllable — voice=ti,
of=do, my=re, prayer=do. The final ti of the 5-note Phrase D figure belongs to
the *next* phrase's intonation, not this cadence. Pitch calibration from audio
was a detour — in moveable-do Obikhod, absolute pitch is irrelevant; the solfege
relationships are fixed regardless of key.

**Key insight captured in SYLLABIFIER_SPEC §7:** brackets currently carry no
accent weight in v0.4.0 (they're stripped and lexicon stress drives the result).
Feature B makes brackets authoritative. The current behavior looks correct when
lexicon agrees with the director but fails silently when they disagree.

---

## What this is

A standalone trainer that takes a sticheron text + tone and renders it singable:
it syllabifies each line, marks accents, maps every syllable onto its reciting
tone / prep / cadence pitch, and plays the result. Intended for a singer
rehearsing at home from text alone, without a choir director present.

**Current scope: Tone 1, Common Chant (Obikhod), stichera only.** We are holding
to one tone until the accent method is proven, then propagating.

Reachable from the hours-tool footer ("Tone Trainer") and at
`/orthodox-hours/tone-trainer`. Not imported into the assembler; no shared data
yet.

---

## The end-game (data contract with the hours-tool)

The hours-tool already assembles and (in future) will point/tone-tag movable
verses. The goal is for it to emit a verse in a small structured form — text,
tone, and ideally the resolved accents — that the trainer consumes directly, so
a chanter can practice their **individual SATB part or the unison line** for the
exact verses appearing in a given day's Hours. Until that contract is defined,
the trainer stands alone with its own preset + free-text entry.

---

## Source authority

- **Music:** L'vov–Bakhmetev Obikhod (1848, rev. Bakhmetev 1869), as presented in
  Drillock & Ealy, *Tutorial for Learning the Church Tones — Common Chant* (OCA).
- **Ground-truth audio:** OCA recorded demonstrations. Tone 1 Obikhod MP3s are in
  Drive under the tone1 obikhod mp3 folder: SATB, isolated Soprano / Alto / Tenor
  / Bass, and Unison. These exist for all 8 tones in both Obikhod and Kievan; only
  Tone 1 Obikhod is in scope now. Analyzable (verified: valid 128 kbps / 44.1 kHz
  MP3; pitch-trackable with librosa pyin). The recorded Tone 1 sticheron example
  is pitched in **D major** (re = E, so do = D), reciting tones sit on do/re as
  expected.

---

## Resolved findings (Tone 1)

- **Phrase rotation:** A B C D in rotation, Final Phrase always last. (5 lines →
  A B C D Final; 8 → A B C D A B C Final; 3 → A B Final.) Confirmed verbatim.
- **Melody voicing:** in this tutorial's closed harmony the melody is the **alto**;
  in the original Bakhmetev it is the **soprano**, doubled by top basses. Unison
  example = tutorial alto.
- **Phrase pitches:** A reciting re, prep ti, cadence to do. B reciting do, cadence
  do→re→ti. C reciting re, cadence do→ti. D reciting do, cadence ti-do-re-do-ti.
  Final reciting re, cadence do-ti-la (la = whole note, last syllable).
- **Cadence distribution:** cadence begins on the (internal) accented syllable held
  as a half note; trailing unaccented syllables ride that pitch until the final
  syllable takes the cadence's last pitch.

## Corrected anchor rule (the v0.1.0 fix)

Prior heuristic anchored the cadence on the *last accent*. The tutorial's rule is
the **last INTERNAL accent**: if the final syllable is an accented one-syllable
word ("Law", "saw", "Him", "Christ"), the cadence cannot launch on it, so it backs
up to the previous accent. The two rules agree except when a phrase ends on a
stressed monosyllable — which several stichera lines do. Now implemented as the
default in `anchorIndex()`, not an optional toggle.

---

## Open questions for the choir director

- **A1 (key):** does a director's accent mark mean *spoken word-stress* or the
  *singing accent they want* (which can differ to fit the melody)? Determines
  whether a pronouncing-dictionary auto-accenter can ever match parish marking, or
  whether the manual/marked-text path must be primary.
- **A3:** is an accent marked in *every* phrase, or only where ambiguous?
- **B1:** how is accent physically marked in parish hand-outs (bold / underline /
  acute over the vowel / caps)? If we support pasting already-marked text and read
  the marks directly, that path is exact by construction.

External corroboration that A1 is a real tension: St. Anthony's Monastery notes
that fitting a melody to an English translation often leaves naturally-stressed
syllables un-emphasized by the melody, forcing a choice.

---

## docx ingest & the converter format contract (v0.2.0)

OCA distributes the day's service text as a formatted `.docx` with accented
syllables **underlined** (the OCA does not publish a Menaion; these daily service
texts are where pre-accented English is released over time). Underline in a docx
is real run-level formatting (`<w:u>`), so it extracts **losslessly** — no OCR,
no guessing. Verified against the Feb 2 2026 Meeting of the Lord service text:
the third "Lord, I call" sticheron round-trips exactly.

The trainer now ingests such a file entirely **client-side** (JSZip unzips in the
browser; nothing uploads). It lists every underlined verse, detects each verse's
**tone** (scanning upward to the nearest heading; OCA marks tone above the first
paragraph of a group and the rest inherit it — inherited tones are flagged with
`*`), and emits a copy-paste **encoding** through a collapsible truthing panel.

**Converter output format — the contract for the future hours-tool Menaion-update
tool that will consume these verses:**
- Accents: `[accent]` or `*accent*` (user toggle).
- Ordinary line end: ` |` (pipe). Chosen because it never occurs in liturgical
  English and is visually distinct from `//`, so an encoder can split on it with
  zero false positives and it survives paste-mangling.
- Penultimate-line marker: `//` kept **verbatim** — it is the OCA monk's own
  marker meaning "the final line follows" (i.e. the next line takes the Final
  Phrase). We do not add `|` to a line already ending in `//`.
- Final line: **no marker** (verse ends; nothing follows).

Tone 1 verses can be sent into the pointer to sing from these real OCA accents
(tier-1 truth, bypassing auto-accent). Non-Tone-1 verses convert fully but are
not pointed/sung yet (pointing is Tone 1 only).

### Sticheron segmentation (v0.3.0)

The ingest groups the document into **stichera**, not individual lines (the v0.2.0
behavior of one button per line was wrong — a line only knows its rotational
phrase from its position within its sticheron). Rules, verified against the Feb 2
service text (23 blocks, all closed by `//`):

- A sticheron = a maximal run of consecutive **underline-bearing** paragraphs.
  (Underline presence is the signal; the opening "Lord, I call / Hear me, O Lord"
  framing refrains ARE underlined in OCA files and so segment as their own blocks
  — recognizable by incipit. The `V.`-prefixed psalm verses are NOT underlined and
  stay out as context.)
- Within a run, the line ending in `//` is the penultimate line; the **next** line
  is the Final and closes the block.
- Headings and non-underlined paragraphs (V. verses, Glory/Both now — confirmed
  NOT underlined — blanks) separate stichera.
- A run with **no `//`** is flagged `suspect`: still grouped (last line → Final),
  but hidden unless "show all paragraphs" is ticked, so a missing marker surfaces
  rather than silently mis-rendering.
- Picker shows each block collapsed (incipit + tone once); expand to see lines
  with their phase labels; block-level "point ▸" loads the whole sticheron with
  A·B·C·D·…·Final rotation and scrolls to the pointer.

### Sung vs. read (clarified)

**Underlined = sung to the tone** (reciting-tone + cadence); **not underlined =
read** (recto tono / spoken, no tonal phrase sequence). This is why the "Lord, I
call" framing is pointed even though it is not a movable sticheron — it is *sung*
like one. The `V.` psalm verses are read, not sung, and stay out of the picker.
Underline is therefore the reliable sung/read discriminator.

### v0.3.1 UI refinements

- Encoding is **`[accent]` only** (dropped `*accent*`; brackets are readable and
  parse cleanly). No marker toggle.
- **Per-sticheron encoding**: each block reveals its own encoding inline with its
  own Copy button (no combined bottom panel — the interleaved service made a
  copy-all unhelpful).
- **Context**: expanding a block shows the paragraph immediately before and after
  it (the bracketing `V.` verses / Glory), to orient a singer holding the paper
  service. Verified: the Meeting sticheron sits between "V. (2) Praise the Lord…"
  and "V. (1) For His mercy…".

## Three-tier accent truth hierarchy (design direction)

1. **OCA-provided accents** — extracted from service `.docx` files. Ground truth.
2. **Encoded accents** — stored once in the hours-tool Menaion data (entered from
   OCA docx via a future Menaion-update tool) and passed to the trainer as truth.
3. **Auto-predicted accents** — fallback for text never seen via tiers 1–2.

The eventual hours-tool **Menaion-update / edit mode** is the downstream consumer
of this converter's `|` / `//` / `[accent]` output: paste pre-accented verses to
correct the St. Sergius-sourced text toward OCA renders and to store real accents.
That work is a separate, later session with its own spec; the format contract is
documented here and in the trainer's release notes so both ends agree before it
is built.

## Syllabifier & lexicon generator (build-time)

**Decision (after extensive prototyping): syllable count + stress come from the CMU
Pronouncing Dictionary by lookup; boundaries from TeX hyphenation reconciled to
CMU's count; rules are only a last-ditch fallback.** Pure rule-based syllabification
was tried and abandoned — English syllable/stress isn't rule-governable (voice=1 but
rejoice=2; Savior=2 but Creator=3), and every rule that fixed one class broke two
others. CMU is authoritative and is a **build-time** resource only — it never ships
to the browser (verified: trainer bundle stays ~37 KB gzipped; dict packages are in
devDependencies).

Measured coverage on two varied services (Meeting of the Lord 2/2, Pentecost 5/31):
**~94% of words are in CMU** (count+stress by lookup), leaving a **~6% residue** of
proper names, liturgical-technical terms, and archaic forms that need human stress
verification. The residue converges fast (Pentecost added only ~23 new residue words
over 2/2's ~31) — the liturgical corpus is closed and repetitive, as expected.

**Generator:** `tools/build_syllable_lexicon.mjs` (build-time, not shipped). Takes
unpacked OCA service `.docx` dirs, accumulates across runs (builds on the last), and
writes to `tools/lexicon-out/`:
- `syllable-table.json` — resolved words: `{word, sylls, stressIdx, src}` where src ∈
  {tex, reconciled, count-only, archaic}. `count-only` = count+stress known but
  boundary placement uncertain (flagged lowConfidence).
- `name-residue.json` — not-in-CMU words with **best-guess** sylls/stress,
  `confirmed:false`, awaiting human review.
- `name-review.md` — human-readable bulk-review sheet (check boundaries AND stress).

**Workflow:** generate → review `name-review.md` (with choir director for the
Greek/Slavonic name stress) → corrections folded back into a confirmed lexicon →
that confirmed lexicon (small) gets wired into the trainer. The dictionary stays
server-side; only the lean table + confirmed lexicon ship. Archaic `-est/-eth`
endings are handled by rule (their own final syllable).

**Status:** generator built and run on 4 services (2/2, Pentecost, Palm Sunday,
Holy Saturday). 1,151 table entries, 68 residue words. Holy Saturday hit zero
new words — common vocabulary is saturated. Lexicon now **wired into the trainer
(v0.4.0)**: fetched from `public/lexicon/` at component mount, replaces the
first-syllable heuristic for all in-lexicon words. Residue entries used as
best-guess; `confirmed:false` entries surfaced by the "show source" toggle with
`?` indicator. Director corrections to `name-review.md` can be folded into
`name-residue.json` and redeployed without any component re-wiring.

## Known limitations / honest caveats

- **Auto-accent is a draft.** The heuristic stresses the first syllable of
  polysyllabic words and content monosyllables; it is wrong on iambic / prefixed
  words (re-CEIVE, di-VINE, sal-VA-tion). The phrase-final accent is the one that
  matters most and should be verified by the singer. The preset (Meeting of the
  Lord) is hand-pointed against the score and is reliable.
- **Cadence note-to-syllable distribution** inside multi-note figures is the
  trainer's best reading, not deterministically pinned by the prose.
- **Audio** is synthesized (triangle-wave Web Audio), a contour aid only. The
  recorded OCA MP3s are the real reference.

## Backlog

1. ~~Verify the corrected anchor rule against director-supplied marked samples.~~ **Done v0.5.2–v0.7.0** — 92%+ anchor match confirmed across fixture corpus.
2. ~~Decide auto-accent philosophy.~~ **Resolved: Director Pointing primary; AUTO mode is a draft starting point.**
3. ~~Marked-text paste mode.~~ **Done v0.2.0.**
4. ~~Rhythm durations.~~ **Done v0.6.0** — tutorial-faithful quarter/half/whole note values.
5. ~~A/B comparison harness.~~ **Done v0.5.0.**
6. ~~**Tone 2–8 propagation** — Tone 2 complete (v0.8.0).~~ **Tone 3 complete (v0.9.0).** Next: Tone 4. Tone 4 has 6 phrases (A, B, C, D, E, F) with a one-time intro phrase A and D/E/F repeating rotation — read tutorial carefully before coding. Tone selector (1–8 pill buttons) already in place; tones without `PH_DEFS` entry are automatically greyed.
7. **Moving dot chip highlight** — designed (per-chip setTimeout + `playingChip` state + gold dot `position:absolute; top:-0.7em`), not yet built. Off by default, opt-in toggle. Deferred to audio engine session.
8. **Dynamic BPM during playback** — requires lookahead scheduler (Web Audio API pattern). Currently BPM is locked during playback (greyed slider). Deferred to audio engine session.
9. **SATB mode** — real four-part notes + OCA isolated-voice MP3s.
10. **Hours tool → Trainer pass-in** — data contract drafted; implementation not built.
11. **aloud, himself anchor misses** — accepted as AUTO mode limitations; Director Pointing resolves them. No rule change planned.


### Melisma duration fix (post-session, same deploy)

`cad1` note emission in `lineToNotes()` now bypasses `syllDur / pitches.length`
and emits `mi(H) · do(Q) · re(Q)` directly with per-pitch durations. Tutorial
text (Drillock & Ealy) is explicit: half note on mi, quarter on do, quarter on re.

**Open question — score vs. tutorial duration order:**
The Tone 3 LIC score (alto line, Final Phrase melisma on "Hear") appears to show
`Q · H · Q` — half note on `do`, not `mi`. This contradicts the tutorial's `H · Q · Q`.
Deferred for future investigation with a choir director or more careful score reading.
Current implementation follows the tutorial text (H·Q·Q). If the score reading
is confirmed correct, the fix is a one-line swap in `CAD1_DURS = [H, Q, Q]` →
`CAD1_DURS = [Q, H, Q]`.



Tone 1 and Tone 2 regression diffs completed after session close using
`2026-0202-texts-tt.docx` (Meeting of the Lord — Tone 1×7 blocks/54 lines,
Tone 2×5 blocks/34 lines) and `2026-0329-texts-tt.docx` (Tone 1×13/75,
Tone 2×5/32).

Pre-patch snapshots generated with `cad1` scope guard disabled (`if false &&...`),
post-patch with guard enabled. All four diffs:

| Fixture | Tone | Lines | Anchor match | Diff |
|---|---|---|---|---|
| 0202 | 1 | 54 | 67% | **EMPTY** |
| 0202 | 2 | 34 | 53% | **EMPTY** |
| 0329 | 1 | 75 | 71% | **EMPTY** |
| 0329 | 2 | 32 | 66% | **EMPTY** |

Hard gate satisfied. Scope guard `activeTone === 3 && phrase === "Final"`
confirmed to produce zero output changes on all Tone 1 and Tone 2 lines.

---

## Research session — Tone 2 Phrase A cadence (May 31 2026)

### Finding: Phrase A cadence duration model is incomplete

The current implementation uses `distribute(["fa","mi","re"], count)` for pitch
assignment and the generic `lineToNotes()` cad duration logic (first=H, middle=Q,
last=H). This is wrong for count=1/2/3 cases. The correct model, reverse-engineered
from the tutorial scores, is:

| Count | Anchor syllable | Trailing syllables | Total duration |
|---|---|---|---|
| 1 | `fa(H)·mi(H)·re(H·)` melisma | — | H+H+H· |
| 2 | `fa(H)·mi(H)` melisma | `re(H·)` | H+H + H· |
| 3 | `fa(H)` · `mi(H)` · `re(H·)` | — | H + H + H· |
| 4+ | `fa(H)` · `mi(Q)`×n fills · `re(H)` | — | H + Q×n + H |

### Key observations

1. `re` is always a **dotted half note** in the 1/2/3 syllable cases — currently
   coded as plain `H` (wrong).
2. `fa` and `mi` are always **half notes** on the anchor until count reaches 4+,
   at which point `mi` becomes the fill pitch at quarter note value.
3. The **anchor syllable duration is not fixed** — it stretches to hold however
   many half notes are assigned to it (count=1 gets three half notes, count=2 gets two).
4. Count=3 is **not a special case** — it's the natural result of the same rule
   with exactly enough syllables to separate all three pitches.
5. There is **no explicit fa·mi binding rule in the tutorial prose** — this
   behavior surfaces only in the scores and must be reverse-engineered from them.

### Consequence for the code

`distribute()` as currently written cannot model this — it has no concept of:
- Stretching the anchor syllable to hold multiple half notes (melisma)
- Dotted rhythms
- Pitch-specific durations within a figure

Phrase A needs its own duration logic, separate from the generic cadence handler
in `lineToNotes()`. This is a known gap — fix deferred until all Tone 2 phrase
cadence rules are confirmed from scores.

### Source
Tutorial scores: Drillock & Ealy, *Tutorial for Learning the Church Tones —
Common Chant* (OCA). Score evidence:
- Count=3: Annunciation Post-Gospel Sticheron at Matins ("Today Gabriel announces
  the good tidings to her who is full of grace:")
- Count=2: Tone 2 Lord I Call score ("Lord, I call u-pon thee [hear] me!")
  — `hear` carries `fa(H)·mi(H)` melisma; `me` carries `re(H·)`

---

## Research session — Tone 2 Phrase B cadence (May 31 2026)

### Phrase B cadence duration model

Cadence figure: `[di, re]`. Tutorial explicitly states "two or more syllables."

| Count | Shape | Notes |
|---|---|---|
| 2 | `di(H) · re(H)` | minimum case, one note per syllable |
| 3 | `di(H) · di(H) · re(H)` | di fills at half note value |
| 4+ | `di(H) · di(Q)×n · re(H)` | di fills at quarter note value |

Example from tutorial: "pu-ri-ty" (count=3) → `pur(di/H) · ri(di/H) · ty(re/H)`
Example (4+): 5 syllables → `di(H) · di(Q) · di(Q) · di(Q) · re(H)`

### Critical edge case: final-word two-syllable cadence

From Annunciation Post-Gospel Sticheron at Matins:
"Re-joice, un-wed-ded Maid-en!"
- Reciting tone: "Re-joice, un-wed-ded"
- Cadence: "Maid-en!" (single two-syllable word, phrase-final)
- Rendered: `Maid(di/H) · en!(re/W)` — **whole note on re**

The final syllable of a phrase-ending word gets a **whole note**, not a half note.
This is distinct from the count=2 case above where `re` is a half note — the
difference appears to be whether the cadence word is **phrase-final** (last word
of the sticheron line ends on a strong close).

### Architectural conclusion

Each phrase has its own logic scope. There is no universal cadence duration rule
that can be applied across tones or even across phrase pairings within a tone.
The generic `lineToNotes()` cad duration handler (first=H, middle=Q, last=H) is
a rough approximation that fails in specific and predictable ways for each phrase.

The correct architecture is **per-phrase cadence duration functions** — each
phrase's cadence logic is self-contained and encodes its own count-dependent
duration rules, informed directly by the tutorial scores.

### Known gaps still to investigate
- Phrase C cadence duration rules
- Phrase D cadence duration rules  
- Final Phrase cadence duration rules
- Whether the whole-note final rule for phrase-ending words applies to other
  phrases or is specific to Phrase B

---

## Research session — Tone 2 Phrase C cadence (May 31 2026)

### Phrase C structure (four segments — score shows four, tutorial prose names three)

The tutorial prose names intonation, reciting tone, and cadence — but the score
bracket explicitly labels **prep** as its own fourth segment. The code's four-segment
model (`inton:true, prep:"ti", cad:["do"]`) is more faithful to the score than
the prose.

| Segment | Pitch | Duration rule |
|---|---|---|
| intonation (unaccented lead-ins) | `re` | Q each |
| intonation (first accented syllable) | `re` | H |
| reciting tone | `re` | Q each |
| prep | `ti` | Q |
| cadence | `do` | see table below |

### Phrase C cadence duration model

Single pitch throughout — entire cadence stays on `do`.

| Count | Context | Shape |
|---|---|---|
| 2 | single word fills cadence | `do(H) · do(H)` |
| 3 | single word fills cadence | `do(H) · do(Q) · do(H)` |
| 3 | final word in multi-word cadence | `do(H) · do(Q) · do(W)` |
| 4+ | single word fills cadence | `do(H) · do(Q)×n · do(H)` |
| 4+ | final word in multi-word cadence | `do(H) · do(Q)×n · do(W)` |

**Whole note rule (Phrase C):** the whole note on the final syllable is triggered
when the final word of the cadence is **not** the only word in the cadence —
i.e. cadence syllables from a preceding word are present. This is a word-boundary
rule, not a syllable-count rule.

Score evidence:
- "An-na" (single word, full cadence) → `do(H) · do(H)` — no whole note
- "mys-ter-y" (single word, full cadence) → `do(H) · do(Q) · do(H)` — no whole note
- "be a-fraid" (multi-word cadence, "be" + "a-fraid") → `do(Q) · do(W)` — whole note on "fraid"
- "hands of her Son" (multi-word) → `do(H) · do(Q) · do(Q) · do(H)` — confirms fill rule

Source: Drillock & Ealy tutorial scores including Annunciation Post-Gospel
Sticheron at Matins ("Be not amazed at my strange appearance, nor be a-fraid.")

### Current code status for Phrase C
The generic `lineToNotes()` cad handler (first=H, middle=Q, last=H) **accidentally
matches** the single-word cadence cases correctly. The multi-word whole note case
is not implemented — `isFinal` in the current code is scoped to Final Phrase only
and does not capture the Phrase C word-boundary trigger.

---

## Consolidated summary — Tone 2 Phrases A, B, C cadence rules (May 31 2026)

### Phrase A — `cad: ["fa", "mi", "re"]`

| Count | Anchor syllable | Trailing syllables | re duration |
|---|---|---|---|
| 1 | `fa(H)·mi(H)·re(H·)` melisma | — | H· |
| 2 | `fa(H)·mi(H)` melisma | `re(H·)` | H· |
| 3 | `fa(H)` · `mi(H)` · `re(H·)` | — | H· |
| 4+ | `fa(H)` · `mi(Q)×n fills` · `re(H)` | — | H |

Key: `re` is dotted half in count 1/2/3; plain half in count 4+.
`fa·mi` binding to anchor is score-derived, not stated in tutorial prose.
No whole note rule identified yet for Phrase A.

### Phrase B — `cad: ["di", "re"]`

| Count | Shape |
|---|---|
| 2 | `di(H) · re(H)` — unless single word fills cadence |
| 2 (single word) | `di(H) · re(W)` — whole note on final syllable |
| 3 | `di(H) · di(H) · re(H)` |
| 4+ | `di(H) · di(Q)×n · re(H)` |

Key: whole note rule fires when a **single word fills the entire cadence**.
This is the opposite trigger from Phrase C.
Score evidence: "Maid-en!" → `di(H) · re(W)`
Tutorial explicit: "two or more syllables" minimum for Phrase B.

### Phrase C — `cad: ["do"]`, `prep: "ti"`, `inton: true`

| Count | Context | Shape |
|---|---|---|
| 2 | single word | `do(H) · do(H)` |
| 3 | single word | `do(H) · do(Q) · do(H)` |
| 3+ | multi-word | `do(H) · do(Q)×n · do(W)` |

Key: whole note rule fires when cadence spans **multiple words**.
Opposite trigger from Phrase B.

### Architectural note
Phrase B and Phrase C have **opposite whole note triggers**:
- Phrase B: whole note when single word fills cadence
- Phrase C: whole note when cadence spans multiple words

This confirms that whole note logic is **phrase-specific** and cannot be
generalized. Each tone/phrase pairing owns its own closing logic, documented
from its own score evidence. Common patterns should only be refactored upward
after confirmed evidence across multiple phrases.

### What the current code gets wrong
1. `re` in Phrase A cadence — coded H, should be H· for count 1/2/3
2. `mi` in Phrase A count=2/3 — coded Q, should be H
3. Phrase A anchor melisma for count=1/2 — not implemented
4. Phrase B whole note for single-word cadence — not implemented
5. Phrase C whole note for multi-word cadence — not implemented
6. `isFinal` (whole note trigger) scoped to Final Phrase only — too narrow

### Implementation requirement
Per-phrase cadence duration functions with meaningful variable names that
match the method (noted for implementation). Generic `lineToNotes()` cad
handler is insufficient for correct duration modeling across phrases.

---

## Research session — Tone 2 Phrase D cadence (May 31 2026)

### Phrase D structure
Tutorial states explicitly: "reciting tone on do and a cadence, identical to the
cadence of Phrase B." Code correctly reflects this:
- `D: { recite: "do", inton: false, prep: null, cad: ["di", "re"] }`
- `B: { recite: "re", inton: false, prep: null, cad: ["di", "re"] }`

Only difference is reciting pitch (`do` vs `re`). Cadence figure identical.

### Phrase D cadence duration model

| Count | Context | Shape |
|---|---|---|
| 2 | single word fills cadence | `di(H) · re(H)` |
| 3 | single word fills cadence | `di(H) · di(H) · re(H)` |
| 3 | multi-word cadence | `di(H) · di(H) · re(W)` |
| 4+ | single word fills cadence | `di(H) · di(Q)×n · re(H)` |
| 4+ | multi-word cadence | `di(H) · di(Q)×n · re(W)` |

### Whole note trigger for Phrase D
Fires when the final word of the cadence is **not** the only word in the cadence
— i.e. cadence spans multiple words. **Same trigger as Phrase C**, not Phrase B.

Score evidence:
- "Arch-an-gel" (single word, full cadence) → `di(H) · re(H)` — no whole note
- "Re-ceive the voice of my prayer," (multi-word, 4 syllables) → `di(H) · di(Q) · di(Q) · re(H)` — no whole note (prayer is single-syllable closer, not phrase-final line)
- "be an eve-ning sac-ri-fice!" (multi-word, 3 syllables in cadence) → `di(H) · di(H) · re(W)` — whole note confirmed

### Fill duration rule
- Count=3 with whole note: fill stays at **half note** (`di(H) · di(H) · re(W)`)
- Count=4+ with whole note: fill drops to **quarter note** (`di(H) · di(Q)×n · re(W)`)
- Threshold between H-fill and Q-fill is count=3 vs count=4+, consistent with
  non-whole-note cases

### Comparison: Phrase B vs Phrase D whole note triggers
Despite sharing the same cadence figure `[di, re]`:
- **Phrase B**: whole note fires when **single word fills entire cadence**
- **Phrase D**: whole note fires when **cadence spans multiple words**
- These are opposite triggers — confirms cadence logic is phrase-specific,
  not figure-specific

### Current code status
Same gaps as Phrase B — generic handler does not implement whole note trigger
or correct fill durations. Per-phrase cadence duration function required.

---

## Research session — Tone 2 Final Phrase cadence (May 31 2026)

### Final Phrase structure
`Final: { recite: "re", inton: false, prep: "ti", cad: ["do", "re", "do", "ti"] }`

Four segments: reciting tone (`re`), prep (`ti`), cadence (`do·re·do·ti`).
No intonation. Pre-slur rule applies (see below).

### Final Phrase cadence duration model — score confirmed

| Count | Anchor syllable | Middle syllables | Final |
|---|---|---|---|
| 2 | `do(W)·re(H)·do(H)` melisma | — | `ti(W)` |
| 3 | `do(W)·re(H)` melisma | `do(H)` | `ti(W)` |
| 4 | `do(W)` | `re(H) · do(H)` | `ti(W)` |
| 5+ | `do(W)` | `re(H) · do(H) · fills(?)` | `ti(W)` |

**5+ case: UNCONFIRMED** — no score evidence available. Fill pitch and duration
unknown. Do not implement assumed behavior; flag for future score investigation.

Key observations:
- `do` anchor is always a **whole note** regardless of count
- `ti` final is always a **whole note** regardless of count
- `re` and middle `do` are **half notes** when they have their own syllable (count=4)
- Melisma peels off the anchor one pitch at a time as syllable count increases:
  count=2 → three-pitch melisma; count=3 → two-pitch melisma; count=4 → no melisma
- This is architecturally identical to Phrase A's anchor melisma behavior

Score evidence:
- "of the Fa-ther" (count=2) → `do(W)·re(H)·do(H)` melisma on "Fa" + `ti(W)` on "ther"
- "Hear me, O Lord!" (count=3) → `do(W)·re(H)` melisma on "me" + `do(H)` on "O" + `ti(W)` on "Lord!"
- "en-light-end the world" (count=4) → `do(W)` on "light" + `re(H)` on "end" + `do(H)` on "the" + `ti(W)` on "world"

### Pre-slur rule
When the syllable immediately before the cadence anchor is a **single accented
monosyllable**, that syllable absorbs the prep — instead of a plain `re(Q)`
reciting tone syllable it carries `re·ti` as a two-note melisma, effectively
replacing the prep syllable entirely. "God," in "God, glo-ry to You!" is the
canonical example.

**Duration variation by position:**
- Normal pre-slur: `re(Q)·ti(Q)` — equal quarters
- Verse-opening pre-slur: `re(H)·ti(Q)` — re stretches to half note
  Evidence: "Hear" in "Hear me, O Lord!" opens the verse → `re(H)·ti(Q)`

Current code assigns `syllDur=H` divided evenly → always `Q+Q`. The
verse-opening `re(H)·ti(Q)` case is **not implemented**.

### Current code status
`cad: ["do", "re", "do", "ti"]` — figure is correct.
Release notes confirm `ti=W` was previously implemented. However:
1. Anchor melisma for count=2 and count=3 — **not implemented**
2. `do` anchor as whole note — needs verification against current code
3. Verse-opening pre-slur duration `re(H)·ti(Q)` — **not implemented**
4. 5+ fill behavior — **unconfirmed, do not implement**

---

## Consolidated summary — all five Tone 2 phrases (May 31 2026)

### Architectural findings

1. **Per-phrase cadence duration functions required** — the generic
   `lineToNotes()` handler (first=H, middle=Q, last=H) is insufficient.
   Each phrase has its own count-dependent duration logic.

2. **Anchor melisma** — Phrase A (count=1/2) and Final Phrase (count=2/3)
   both require multi-pitch melismas on the anchor syllable. Current code
   has no mechanism for this.

3. **Whole note triggers are phrase-specific and opposite in some cases:**
   - Phrase B: whole note when single word fills entire cadence
   - Phrase C: whole note when cadence spans multiple words
   - Phrase D: whole note when cadence spans multiple words (same as C)
   - Phrase A: whole note behavior unconfirmed
   - Final: `ti` is always whole note regardless of context

4. **Fill pitch and duration thresholds vary by phrase:**
   - Phrase A: fill on `mi`, H-fill at count=3, Q-fill at count=4+
   - Phrase B: fill on `di`, H-fill at count=3, Q-fill at count=4+
   - Phrase C: fill on `do`, H-fill at count=2(?), Q-fill at count=3+
   - Phrase D: fill on `di`, H-fill at count=3, Q-fill at count=4+
   - Final: fill on `re·do`, H-fill confirmed at count=4, 5+ unconfirmed

5. **Word boundary awareness required** — the pointing engine must track
   word boundaries within the cadence to correctly apply whole note triggers
   for Phrases C and D.

6. **Variable naming** — implementation should use meaningful names matching
   the method (e.g. `anchorMelisma`, `fillPitch`, `fillDur`, `closingDur`).

### Known gaps in current code
| Gap | Phrases affected |
|---|---|
| Anchor melisma | A (count 1/2), Final (count 2/3) |
| `re` dotted half (count 1/2/3) | A |
| `mi` half note (count 2/3) | A |
| Whole note — single word trigger | B |
| Whole note — multi-word trigger | C, D |
| `isFinal` scoped too narrow | C, D (currently Final only) |
| Verse-opening pre-slur `re(H)·ti(Q)` | Final |
| 5+ fill behavior | Final (unconfirmed) |

---

## Correction — Final Phrase pre-slur duration (May 31 2026)

### Pre-slur rule (corrected)

The pre-slur fires when the syllable immediately before the cadence anchor is a
**single accented monosyllable**. That syllable absorbs the prep, carrying
`re·ti` as a two-note melisma instead of a plain reciting tone quarter note.

**`ti` is always `Q` in both confirmed examples.**

**`re` duration is context-dependent — fills the space where reciting tone would be:**

| Example | Reciting tone before pre-slur | `re` dur | `ti` dur |
|---|---|---|---|
| "God, glo-ry to You!" | present (normal length) | `Q` | `Q` |
| "Hear me, O Lord!" | absent (Hear is first syllable) | `H·` | `Q` |

**Rule:** `re` on the pre-slur stretches to fill the space where reciting tone
would otherwise have been. When no reciting tone precedes the pre-slur syllable,
`re` gets `H·` (dotted half). When normal reciting tone precedes it, `re` gets `Q`.

### Correction to earlier notes
Previous entry stated "verse-opening pre-slur: `re(H)·ti(Q)`" — this was
incorrect on two counts:
1. The `re` value is `H·` (dotted half), not `H` (half)
2. The trigger is not "verse-opening position" but "no reciting tone precedes
   the pre-slur syllable" — duration-by-context, not position-by-rule

### Current code status
Current code assigns `syllDur=H` divided evenly → always `re(Q)·ti(Q)`.
The dotted half case (`re(H·)·ti(Q)` when no reciting tone precedes) is
**not implemented**. Flag for future implementation once word-boundary and
reciting-tone-presence detection is in place.

---

## Architecture note — melisma audio precision (May 31 2026)

### Melisma data encoding standard

Chips carrying multiple pitches on a single syllable (melisma) must encode
per-pitch durations explicitly using a `melismaDurs` array alongside the
`melisma` pitch array. Equal-split of total duration is insufficient because
melisma pitch durations are almost never equal in the score.

**Data pattern:**
```js
{ syl:"Hear", sol:"re", role:"preslur", dur:"H·",
  melisma: ["re","ti"], melismaDurs: ["H·","Q"] }

{ syl:"me,",  sol:"do", role:"cad",    dur:"W",
  melisma: ["do","re"], melismaDurs: ["W","H"] }

{ syl:"hear", sol:"fa", role:"cad",    dur:"H",
  melisma: ["fa","mi"], melismaDurs: ["H","H"] }
```

**Rationale:** audio precision is critical to the teaching purpose of the tool.
A cantor learning a verse must hear exactly the right rhythm on melisma syllables,
not an approximation. `melismaDurs` drives audio timing; `melisma` drives the
visual solfège label. Both must be present on any melisma chip.

**Audio engine rule:** when `melismaDurs` is present, `playRow()` splits the
chip's time slot into sequential notes using `DUR_SEC[melismaDurs[i]]` for each
pitch, not the chip's top-level `dur`.

---

## Bass part derivation — Tone 2 Lord I Call (May 31 2026)

### Source authority
Bass part derived from first principles using the St. Tikhon's harmonization
framework documented at https://sainttikhonsmusic.com/how-to-harmonize/
(taken from *A Common Book of Church Hymns: Divine Liturgy*, ed. B. Sheehan,
STM Press, 2016). Cross-referenced against Reddit/Google search summary of
L'vov-Bakhmetev Obikhod SATB conventions.

### St. Tikhon's four-voice framework
The Slavic Orthodox harmonization system has four voices:

1. **Melody** (soprano) — always the primary voice, upper staff
2. **Bass** — moves with melody, drone-like on reciting tone, shifts at cadences.
   Provides the harmonic skeleton using basic triad structures.
3. **Descant** — parallel third above or below melody (above most common).
   Mostly parallel but with occasional cadence exceptions marked by courtesy notes.
4. **Filler** — static inner voice completing the chord. Relatively immobile,
   anchors the other voices. Sung by alto when soprano has melody and tenor
   has descant; by tenor when alto has melody and soprano has descant.

Simplest viable texture: melody + bass only.
Three-part: melody + descant + bass (filler omitted — common in small ensembles).

### Bass conventions applied
- **Reciting tone:** `do` (tonic root, Bb3) throughout all lines — drone-like,
  only shifts at cadence points or phrase endings
- **Cadence voicing:** root→fifth→root triad support (parallel tenths, thirds,
  and fifths between bass and soprano per L'vov-Bakhmetev convention)
- **Register:** one octave below melody (do=Bb3 when soprano do=Bb4)
- **Chromatic di:** bass holds `do` tonic through soprano's `di` (B natural)
  creating tension, resolves to `re` root at cadence close
- **Dominant approach:** bass moves to `sol` (fifth/F3) before `do` cadences
  (Phrase C prep, Phrase D fills) — dominant-flavored approach
- **Final close:** bass on `sol(W)` (open fifth) under soprano `ti(W)` —
  characteristic Russian Orthodox open-fifth cadence close

### Bass line summary per phrase

| Line | Phrase | Reciting | Cadence bass | Close |
|---|---|---|---|---|
| 1 | A | `do(Q)×6` | `do·sol` melisma under fa·mi | `re(H·)` |
| 2 | B | `do(Q)` | `do·do` holds through di | `re(W)` |
| 3 | C | `do(Q)×5` | `sol` prep → `do·do` | `do(W)` |
| 4 | D | `do(Q)×3` | `do·sol·sol` | `re(W)` |
| 5 | B | `do(Q)×2` | `do·sol·sol` | `re(H)` |
| 6 | Final | `do` throughout | `do·do·do` | `sol(W)` open fifth |

### Status
**Unverified against score** — first-principles derivation only. Needs
comparison against OCA Tone 2 Lord I Call SATB score
(https://www.oca.org/files/PDF/Music/Tone2/t2-lic-obikhod-tt.pdf) before
encoding as authoritative. Encoded in sandbox as `DATA_BASS` for comparison.

### Future voice parts
- **Descant (Alto/Tenor):** largely algorithmic — `PITCH_SCALE[idx - 2]`
  (parallel third below melody) with cadence exceptions where parallel third
  creates awkward intervals. Exceptions need score verification.
- **Filler:** most static part. Holds missing chord tone to complete triad.
  Derivable from bass line + melody once bass is verified.
  Changes only at cadence points.

---

## Bass part — score verification (May 31 2026)

### Source
L'vov-Bakhmetev Obikhod, arr. from OCA PDF (t2-lic-obikhod-tt.pdf).
Bass notes read directly from bass clef staff positions — lines and spaces
identified by position, mapped to concert pitch, then to solfège (do=Bb).

### Bass clef reference (do=Bb)
| Position | Concert | Solfège |
|---|---|---|
| Space 4 | G3 | `la` |
| Line 4 | F3 | `sol` |
| Space 3 | Eb3 | `fa` |
| Line 3 | D3 | `mi` |
| Space 2 | C3 | `re` |
| Line 2 | B2 | `ti` |
| Line 1 | G2 | `la` (lower octave) |

### Corrected score-verified bass line

| Line | Phrase | Reciting | Cadence | Close |
|---|---|---|---|---|
| 1 | A | `la(Q)×6` | `la·mi` melisma (H+H) | `la(H·)` |
| 2 | B | `la(Q)` | `mi(H)·mi(H)` | `la(W)` |
| 3 | C | `la(Q)×5` (inton la/H) | `re(Q)` prep → `sol(H)` | `sol(W)` |
| 4 | D | `sol(Q)×3` | `mi(H)·mi(Q)·mi(Q)` | `la(W)` |
| 5 | B | `la(Q)×2` | `mi(H)·mi(Q)·mi(Q)` | `la(H)` |
| 6 | Final | preslur `la·re` melisma (H·+Q) | `sol·fa` melisma (W+H) · `sol(H)` | `re(W)` |

### Key findings vs first-principles estimate
- Bass home pitch is `la(G3)` — not `do(Bb)` or `ti` as initially guessed
- Cadence dip pitch is `mi(D3)` — not `sol` as estimated
- Phrase D reciting tone drops to `sol(F3)` — bass follows the melody down
- Phrase C prep drops to `re(C3)` before rising to `sol(F3)` cadence
- Final closes on `re(C3)` — open minor seventh against soprano `ti(Ab4)`
  This is the characteristic Russian Orthodox unresolved modal close, not
  a Western perfect cadence

### Voice assignment correction
The chant melody is carried by the **alto**, not the soprano:
- Alto: chant melody (our DATA — reciting on Bb/re)
- Soprano: descant (parallel third above melody)
- Bass: harmonic foundation as documented above
- Tenor: filler (inner voice completing the chord)

Our DATA label should read "Alto (Melody)" not "Soprano (Melody)".

---

## Bass derivation logic validated — Sticheron 2 (May 31 2026)

### Test sticheron
"Let my prayer arise / in Thy sight as incense, / and let the lifting up of my hands /
be an evening sacrifice!// / Hear me, O Lord!"

Phrase sequence: A B C D Final (5 lines)

### Result
Bass line derived algorithmically from the verified ruleset and confirmed
correct against the L'vov-Bakhmetev Obikhod score by the user.

### Validated bass derivation rules (Tone 2 Obikhod)

**Reciting tone:**
- Phrases A, B, C, Final → bass holds `la(G3)`
- Phrase D → bass holds `sol(F3)`

**Cadence rules by phrase:**
- Phrase A: anchor=`la(H)`, fills=`mi(H or Q)`, close=`la(H·)`
- Phrase B: anchor=`mi(H)`, close=`la(W)` single-word or `la(H)` non-final
- Phrase C: prep=`re(Q)`, cad=`sol(H)`, fills=`sol(Q)`, close=`sol(W)`
- Phrase D: anchor=`mi(H)`, fills=`mi(H or Q)`, close=`la(W or H)`
- Final: preslur=`la·re(H·+Q)`, cad=`sol·fa(W+H)`, `sol(H)`, close=`re(W)`

**Fill duration threshold (matches soprano):**
- Count=3 → fills at H
- Count=4+ → fills at Q

**Whole note triggers (mirrors soprano rules):**
- Phrase B: single word fills cadence → `la(W)`
- Phrase D: multi-word cadence → `la(W)`
- Phrase C: multi-word cadence → `sol(W)`

### Practical encoding workflow
1. Point soprano/alto text using phrase rules (tool already does this)
2. Apply bass reciting tone per phrase
3. Map cadence pitches using BASS_CADENCE_MAP
4. Match note count and duration to soprano exactly
5. Spot-check Final Phrase against score (most complex)

### Architecture note
`DATA_BASS` can be computed algorithmically from `DATA` (alto) using the
validated ruleset. A `generateBass(DATA, phrase_sequence)` function is
the natural next step — encoding bass becomes a derivation, not a manual
transcription.
