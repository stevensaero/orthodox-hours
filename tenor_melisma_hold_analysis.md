# Tenor Melisma-Hold — Analysis (pre-implementation)

**Status:** investigation complete, implementation pending. Drafted June 9 2026, end of the
v0.14.0 session. Research-before-code: this document is committed before any implementation begins.

**Scope:** Tone 1 only. Per the PRIME DIRECTIVE, no logic here is assumed to apply to other tones.

---

## The problem

When the alto sings a melisma — one syllable across multiple notes — the tenor does **not** move
with it; it **holds** a single pitch (sol in Tone 1) for the full duration of the melisma span.
Concretely: where the alto melisma is two half-notes, the tenor should be **one whole-note** held
across both, not two repeated half-notes.

Current behaviour (all three render paths): the tenor emits one note per alto melisma note (two
sol half-notes), because every path derives the tenor by mapping each `rolesWD` entry **1:1** to a
tenor pitch and keeping that entry's duration. The held-note shape is not represented anywhere.

This must be corrected in **audio**, **chip rendering**, and **score print** — all three.

---

## How melisma is represented in `rolesWD`

`emitMelisma(baseRole, pitches, durs)` (tone-trainer.jsx ~line 3273) and `buildMelisma()` (~1788)
push **one `rolesWD` entry per pitch**, each with:
- `melisma: true`
- the **same `text`** (from the base syllable)
- the per-pitch duration (`dur` in seconds, `durKey` in {Q, H, H·, W})

So a **melisma span** = a maximal run of consecutive entries with `melisma === true` and the same
`text`. In Tone 1 the tenor `cadMap` sends every alto pitch in the span to **sol**, so the tenor
pitch is **constant** across the span → safe to collapse into one held note.

**General guard (for future tones):** only collapse a span when the mapped tenor pitch is constant
across it. If a future tone moves the tenor mid-melisma, keep the notes separate. Tone 1 always
holds, so Tone 1 always collapses.

---

## Duration math is clean

`durKey(sec)` (tone-trainer.jsx ~3263) maps summed seconds back to a key, and the sums land exactly
on existing keys:
- H + H = W (since W = 2·H)
- H + Q = H· (dotted half = 1.5·H)

So collapsing = **sum the span's durations**, then run `durKey` to get the score `durKey`. No
fractional-duration problem. Audio uses raw summed seconds directly.

---

## The three render paths (all share the 1:1 `rolesWD.map` shape)

### 1. Audio — `lineToNotes_tenor` (~line 3100)
```
tenorRolesWD = rolesWD.map(r => map pitch via rules)   // 1:1
tenorRolesWD.forEach(r => notes.push({ sol, dur: r.dur, ... }))
```
Fix: collapse melisma spans → one note with summed `dur`. Simplest of the three (audio only needs
the right total duration on one held pitch).

### 2. Chips — `tenorRolesWD` (~4929) → render forEach (~5218)
Already **groups** consecutive melisma entries (same text) into `groupedTenor`, but renders **one
chip per entry** within the group (just tighter `CHIP_MELISMA_GAP`). Fix: a collapsed span should
render as **one wider held chip**, not N chips.
- TODO confirm: does `renderChip` width key off `durKey` (so a W chip is naturally wider), or is
  width fixed? Determines whether "emit one collapsed entry" is sufficient for the chip to widen.

### 3. Score — `buildScorePayload` tenorEntries (~3960)
```
tenorEntries = rolesWD.map(r => ({ pitch, durKey: r.durKey, melisma, octaveDiv }))  // 1:1
```
Carries `melisma` and `octaveDiv` per entry. score-print renders each entry as its own note.
Fix: collapse spans before/at payload build, OR collapse in score-print. See alignment wrinkle.

---

## The hard part — score-print column alignment

The score-print (public/score-print.html) currently relies on **all four voices having identical
note counts**:
- After `joinVoices`, same-index notes across voices **share a TickContext** (proven by probe).
- `setVoiceX(tN, spacingT)` maps **tenor index → alto index** for text-driven X positioning.
- The text-driven spacing engine (`applyTextSpacing`) computes one `T[]` from the alto and every
  other voice mirrors it by index.

Collapsing a melisma **drops the tenor's note count**, breaking the 1:1 index↔column assumption:
- `setVoiceX(tN, spacingT)` would mis-map (tenor index i no longer = alto column i).
- The held tenor whole-note must **start** at the melisma span's **first** alto column and **span**
  across all columns the span covers.

So the score fix is not merely "emit a whole note" — it is **positioning** a collapsed note at the
span's starting column while the other three voices keep per-note columns. Likely needs a per-voice
**index → alto-column map** (each collapsed tenor note records the alto index where its span starts)
rather than the current positional 1:1 `setVoiceX`. VexFlow itself handles a whole-note voice
joined against half-note voices; the work is feeding the correct target X (the span's start column)
to the collapsed note's TickContext.

---

## Proposed fix shape (to confirm tomorrow)

1. **Shared derivation** — factor a single `deriveTenorRolesWD(rolesWD, rules)` that does the pitch
   map **and** the melisma-hold collapse (consecutive `melisma:true` + same `text` + constant tenor
   pitch → one entry, summed `dur`/`durKey`, retaining the **start index** of the span). Use it in
   all three paths so they cannot drift. (Matches the documented "matched pair" principle — now a
   matched *triple*.)
2. **Audio** — consume the collapsed list directly (held note = summed dur on sol).
3. **Chips** — render each collapsed entry as a single chip; confirm width follows `durKey`.
4. **Score** — anchor each collapsed tenor note to its span's **start** alto column; replace the
   positional `setVoiceX(tN, …)` with an index→column lookup for the tenor voice.

## Open questions to settle first

1. Collapse in the shared derivation vs. per-path → recommend **shared**.
2. Score-print: exact mechanism to anchor + span a collapsed note (index→column map).
3. Chips: confirm `renderChip` width is `durKey`-driven.
4. Generalize the "constant tenor pitch across span" guard now, or hard-scope to Tone 1.

## Files in play
- `src/components/tone-trainer.jsx` — `lineToNotes_tenor` (~3100); chip `tenorRolesWD` (~4929) +
  render forEach (~5218, ghost ~5257); `buildScorePayload` tenorEntries (~3960); `emitMelisma`
  (~3273), `buildMelisma` (~1788), `durKey` (~3263).
- `public/score-print.html` — tenor voice build/format/draw on the bass stave; `setVoiceX`,
  `applyTextSpacing`, shared-TickContext alignment.
