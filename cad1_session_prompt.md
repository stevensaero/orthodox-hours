# Session Prompt: Final Phrase Two-Part Cadence — `cad1` Role Implementation

## What this session is for

Implement the `cad1` role in `pointLine()` so the **first anchor of the Tone 3 Final Phrase**
plays its correct Part 1 cadence figure (`mi H · do Q · re Q`) instead of falling through
as a reciting `fa(Q)`.

This is a **surgical change to the engine core**. The pre/post validation protocol
below is mandatory — capture JSON snapshots before writing any code, then confirm
they are byte-identical after, except for lines that are explicitly expected to change.

---

## Context

### The gap (from `tone_trainer_tone3_analysis.md §11.1`)

The Tone 3 Final Phrase has a **two-part cadence**:

```
Part 1:  mi(H)  do(Q)  re(Q)        ← launches at anchor1 (first director mark)
Part 2:  mi(Q)  fa(Q)  re(H)  do(W) ← launches at anchor2 (second director mark)
```

Current `pointLine()` finds only one anchor (`anchorIndex()` = last internal accent =
anchor2), splits there, and maps the 7-note figure from anchor2 onward. Correct for Part 2.

**anchor1 falls in `body`** and renders as `fa(Q)` — wrong pitch and duration.

### Current output for "always offers Thee a song" (Tone 3 Final)

```
al-ways    → fa Q   ✓  (reciting, correct)
of         → fa Q   ✗  (anchor1: should be mi H)
fers       → fa Q   ✗  (between anchor1 and anchor2: should be do Q)
Thee       → mi Q   ✓  (anchor2, Part 2 launches correctly from here)
a          → fa Q   ✓
song       → do W   ✓  (whole note, correct)
```

### What the fix produces

```
al-ways    → fa Q   ✓
of         → mi H   ✓  (anchor1, Part 1 figure)
fers       → do Q   ✓  (Part 1 middle)
Thee       → mi Q   ✓  (anchor2, Part 2)
a          → fa Q   ✓
song       → do W   ✓
```

---

## Pre/post validation protocol (MANDATORY)

The concern is that touching `pointLine()` — the engine core — could silently
break Tone 1 or Tone 2 output. The JSON export from the A/B comparison harness
is the regression gate.

### Step 1 — Extend the export to capture pitch output (do this first)

The current `Export JSON ↓` payload captures accent position
(`truthAccent`, `machineAccent`, `anchorMatch`) but NOT pitch names or durations.
The `cad1` fix changes pitch and duration at anchor1 — the existing export won't
show this change unless we add it.

**Before writing any `cad1` code**, add `pitches` and `dur` fields to the per-syllable
export. In the `lineToNotes()` output loop, each note already has `{ sol, dur }`.
The roles array from `pointLine()` already has `{ role, pitches }`. Adding to the
export is a one-liner in the payload construction — no logic change.

Extended export format (add to each syllable object):
```json
{
  "text": "of",
  "truthAccent": true,
  "machineAccent": true,
  "agree": true,
  "isAnchor": true,
  "role": "cad1",
  "pitches": ["mi"],
  "dur": 0.75
}
```

This makes the pre/post diff show the actual pitch and duration changes at anchor1.

### Step 2 — Generate PRE-patch JSON snapshots

With the extended export in place but `cad1` not yet implemented, load each fixture
through the deployed build (or a local `npm run dev`) and export:

**Required snapshots — Tone 3 (the lines being changed):**
- `pre_cad1_t3_feb.json` — from `2026-0215-texts-tt-.docx` (Meatfare Sunday)
- `pre_cad1_t3_may.json` — from `2026-0503-texts-tt.docx` (4th Sunday of Pascha)

**Required snapshots — regression guard (must not change):**
- `pre_cad1_t1.json` — from any Tone 1 fixture previously used
- `pre_cad1_t2.json` — from any Tone 2 fixture previously used
  (check `tone_trainer_notes.md` for which fixtures were used in v0.7–v0.8 sessions)

**For each fixture:**
1. Load the tool, set the correct tone selector
2. Upload the `.docx`
3. Click **Point ▸** on a block to open the comparison harness
4. Click **Export JSON ↓**
5. Save with the filename above

**Alternatively (faster):** Claude generates snapshots programmatically using a
Node script that exercises `autoEncodeLines()` + `buildComparison()` directly
against the `.docx` files — see §"Programmatic snapshot option" below. If taking
this route, verify the script reproduces the same `anchorMatchPct` shown in the
UI for a known fixture before using it for pre/post diffing.

### Step 3 — Identify the expected-change lines

From `pre_cad1_t3_feb.json` and `pre_cad1_t3_may.json`, extract all lines where
`phrase === "Final"`. For each, note the syllable(s) at anchor1 position that
currently show `role:"recite"` and `pitches:["fa"]`. These are the only lines
that should show a diff after the patch.

### Step 4 — Apply the `cad1` patch (see implementation plan below)

### Step 5 — Generate POST-patch JSON snapshots using identical inputs

Reload the exact same fixtures in the patched build and export:
`post_cad1_t3_feb.json`, `post_cad1_t3_may.json`, `post_cad1_t1.json`, `post_cad1_t2.json`

### Step 6 — Diff

```bash
# Regression gate — must be empty:
diff pre_cad1_t1.json post_cad1_t1.json
diff pre_cad1_t2.json post_cad1_t2.json

# Tone 3 — must show changes ONLY on Final Phrase lines,
# only at anchor1 position: role fa→mi, dur Q→H, and do fills between anchors.
# anchorMatchPct must be unchanged or improved (never decreased).
diff pre_cad1_t3_feb.json post_cad1_t3_feb.json
diff pre_cad1_t3_may.json post_cad1_t3_may.json
```

**Pass criteria:**
- Tone 1 and Tone 2 diffs are empty
- Tone 3 diff shows changes only on `phrase === "Final"` lines
- On those lines, changes are only at the anchor1-to-anchor2 syllable range
- `anchorMatchPct` is equal or higher in post files

**If Tone 1 or Tone 2 diff is non-empty: stop, revert the patch, diagnose before continuing.**

### Programmatic snapshot option

Claude can write a standalone Node script (`tools/snapshot_comparison.mjs`) that:
1. Reads a `.docx` file (JSZip, same extraction as the UI)
2. Loads the lexicon JSON
3. Calls `parseTruthLines()`, `autoEncodeLines()`, `buildComparison()`
4. Writes `compareData` + extended syllable pitch/dur data to JSON

This script runs in the container without a browser, is faster than clicking through
the UI, and produces a deterministic snapshot for diffing. Write and validate it
before pre-patch snapshots are captured.

---

## Implementation plan

### What changes in `pointLine()`

Current flow:
```
flat = syllables with accents
a    = anchorIndex(flat)           ← finds anchor2 (last internal accent)
body = flat[0..a-1]  → role:'recite'
cad  = flat[a..]     → distribute(PH[phrase].cad, count) → role:'cad'
```

New flow when `activeTone === 3 && phrase === 'Final' && acc.length >= 2`:
```
a2 = anchorIndex(flat)             ← anchor2 (unchanged)
a1 = findFirstFinalAnchor(flat)    ← anchor1 (new helper — see below)

if a1 found and a1 < a2:
  body  = flat[0..a1-1]   → role:'recite'
  cad1  = flat[a1..a2-1]  → distribute(['mi','do','re'], count) → role:'cad1'
  cad   = flat[a2..]      → distribute(['mi','fa','re','do'], count) → role:'cad'
else:
  fall through to existing logic (current behavior, unchanged)
```

`findFirstFinalAnchor(flat)` — new helper (or inline logic):
- Same STOP-filter as `anchorIndex()`
- Takes `stressedIdxs[stressedIdxs.length - 2]` (second-to-last stressed syllable)
- Applies monosyllable backup: if that candidate is a standalone monosyllable at
  the last position, step back one more
- Returns the index, or -1 if not found or if the result >= a2

**The scope guard is critical.** The condition `activeTone === 3 && phrase === 'Final'`
must be the first thing checked. When false, zero lines of new code execute.

### What changes in `lineToNotes()`

Add `cad1` case alongside the existing `cad` case:

```javascript
} else if (r.role === 'cad1') {
  const cad1Idxs = roles.map((r, i) => r.role === 'cad1' ? i : -1).filter(i => i >= 0);
  const cad1Pos  = cad1Idxs.indexOf(ri);
  const isFirst  = cad1Pos === 0;
  // All notes in Part 1 figure are Q except the anchor (first = H).
  syllDur = isFirst ? H : Q;
}
```

Part 1 figure: `mi(H) · do(Q) · re(Q)` — only the anchor gets H; all subsequent
Part 1 notes are Q. No W, no DH.

### What changes in the UI (chip color)

`cad1` chips should be visually distinct from `cad` (Part 2) so the director can
see the two-part structure. Recommended: use the same burgundy as `cad` but at
60% opacity, or a warm amber-burgundy. Decide at session start and add to `roleBg`
map and the info bar legend.

### What does NOT change

- `anchorIndex()` — zero changes
- `distribute()` — zero changes
- All Tone 1 logic — zero changes (scope guard)
- All Tone 2 logic — zero changes (scope guard)
- Tone 3 Phrases A and B — zero changes (scope guard: `phrase === 'Final'` only)
- `autoAccentLine()` — already marks both anchors from v0.9.0, no change needed
- `autoEncodeLines()` — calls `autoAccentLine()` then `pointLine()`, benefits
  automatically from the `pointLine()` fix, no direct change needed
- Data files, hours-tool.jsx, Psalter, Scripture — untouched

---

## Files to touch

```
src/components/tone-trainer.jsx   — pointLine(), lineToNotes(), export payload, chip color, v0.9.1
tone_trainer_tone3_analysis.md    — close §11.1 open question, add "resolved in v0.9.1"
tone_trainer_notes.md             — session summary
tools/snapshot_comparison.mjs     — new programmatic snapshot script (optional but recommended)
```

---

## Version

`v0.9.1` — patch increment. Correctness fix to engine, no new phrases or tones.

---

## Open questions to resolve at session start

1. **Chip color for `cad1`** — same burgundy as `cad`, or a distinct lighter variant?
   The info bar legend would need a new entry: "Cad. Part 1" alongside "Cadence".

2. **Does the programmatic snapshot script need to be added to `package.json` scripts?**
   Useful for future tone implementations (run pre/post diff without a browser).
   If yes, add `"snapshot": "node tools/snapshot_comparison.mjs"` to `scripts`.

3. **Does `buildComparison()` need to track the `cad1` anchor separately?**
   Currently `anchorMatchPct` measures only anchor2 (the last-accent anchor).
   anchor1 is structurally required but not currently scored. We could add a
   `firstAnchorMatchCount` field to `buildComparison()` output for completeness.
   Not strictly required for the fix; decide based on time.
