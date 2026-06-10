# Score System Wrap & Phrase Packing — Implementation Plan

**Scope:** the printable score output only (`public/score-print.html`). The trainer chip
view is unchanged. Status: planning / pre-implementation.

## 1. Goal

Flow the phrase-verses of a stichera across systems, packing each phrase into the
leftover space of the current system and wrapping to the next system when a phrase
overruns the system width. Motivation: minimize paper in choir binders, and reduce
scrolling when the score is read on a screen (iPad). The whole payload is one stichera;
its lines are successive phrase-verses that should read as one continuous flow.

## 2. Current behaviour (baseline)

- **One payload line (= one phrase-verse) → one system**, placed at `sy = li * SH`
  (`SH` = `GRAND_SH` 235 with bass, `SOLO_SH` 130 treble-only). `SYSTEMS_PER_PAGE = 4`.
- **Overflow is handled by scale-to-fit, not wrapping.** `applyTextSpacing` computes each
  note's natural X; if the last note passes `maxX = ML + SW − NOTE_W` (712px) the whole
  line is uniformly compressed to fit one system (lines 472–477).
- **Spacing is exact and predictive.** `T[i] = T[i-1] + max(floor, halfW[i-1] + TEXT_GAP +
  halfW[i])`, `halfW` from `measW` (canvas, font-accurate, available after `loadFonts`),
  `floor` = `NOTE_W` (50) between two visible noteheads or `RECITE_FLOOR` (30) when a ghost
  is adjacent. We can compute the width of any phrase or fragment to the pixel before drawing.
- **Reciting ghosting (`reciteIntermediate`)** is computed per line: for each maximal run of
  `role:'recite'` of length ≥ 4, ghost the interior (`rs+1 … k-2`); the run's first and last
  noteheads stay visible (OCA abbreviation). Reciting intermediates render as `VF.GhostNote`
  (no glyph) but still hold tick + X so lyrics ride their position.
- **Clef + key signature** are added only on `chunkIdx === 0 && li === 0` (the very first
  system today).
- **Voices:** alto is the source of truth; soprano and bass are 1:1 with alto; tenor is
  collapsed (melisma-hold) and maps back via `spanStart` / `spanCount`.

## 3. Confirmed conventions (from the printed reference)

From the printed Obikhod reference "Lord, I Call, Tone 1" (Common Chant, arr.
L'vov/Bakhmetev):

- **Clef + key signature on every system.** The reference restates both at the start of
  each system. Key is **F major (one flat, B♭)** for `do = F`. This is a Phase 1 requirement
  (overrides the earlier idea of establishing them once).
- **Wrap points are open** — no barline is drawn where a phrase wraps to the next system.
- **Barlines are semantic only:** single bars and double bars appear at phrase ends, from the
  payload's `barlineAfter`; the double bar falls on the verse after the penultimate verse /
  at the end of the full stichera. Never at a wrap point.
- **Filled systems are justified** (clean full-width right margin); the last / under-full
  system is left ragged.
- **First-system indent + SATB margin labels** ("Soprano/Alto", "Tenor/Bass"): the standard
  choral first-system indent. These labels are *not* consistent across all scores but are
  helpful for learning, so build as a **toggle** — default: indent + labels on system 1 only.
- **No phrase labels** on the printed score (phrase labels live only in the chip/learning view).
- **No per-note accidental glyphs.** Headless probe confirmed notes carry zero `Accidental`
  modifiers; the key signature is the sole accidental marker. (Movable-do contour reading —
  the choir reads intervals, the director sets pitch.) **Exception under review:** the
  reference shows a cadential accidental on a lower-staff note (the Tone 1 Final `si`); see
  `choir_director_review.md` item 2. Out of scope for wrapping.

## 4. Core model — columns

Flatten the stichera's payload lines into one sequence of **columns**, keyed off the alto
(full length). Each column carries:

- its voices: `alto[i]`, `soprano[i]`, `bass[i]` (all 1:1), and the tenor note whose span
  covers `i` (tenor is collapsed; a held note attaches at its `spanStart`);
- the **phrase index** it belongs to (phrase boundary = payload line boundary);
- `role` (`recite` / `prep` / `cad` / intonation), `melisma` flag, `durKey`;
- its **advance width** = `max(floor, halfW[i-1] + TEXT_GAP + halfW[i])`, precomputed with the
  existing spacing math.

The break pass and per-system render both operate on this column sequence.

## 5. Break pass — greedy first-fit

Walk columns left to right, accumulating X from the system's left start (`ML`, plus the
indent on system 1). When adding the next column would pass `maxX`, **back up to the latest
legal seam at or before that column**, emit the current slice as a system, and restart the
accumulator from `ML` for the remainder. Greedy first-fit is sufficient here — the reciting
runs are naturally elastic and phrases are short; Knuth-Plass (global optimisation) is overkill.

**Legal break seams, in priority order:**

1. **Phrase boundary** (between two payload lines) — always clean. *(Phase 1 uses only this.)*
2. **Reciting → cadence boundary** — keeps the whole cadence figure intact on the next system.
3. **Within a reciting run** — the elastic zone, and exactly where long verses overflow.

**Illegal seams (never break here):** inside a melisma group, inside a tenor held span (which
coincides with a melisma, so it is subsumed), or inside a cadence / prep / intonation figure.

**Fallback** when no legal seam exists before overflow (rare — a short phrase with no reciting
run that is still wider than `SW`): Phase 1 keeps today's scale-to-fit for that phrase; Phase 2
may force a break at a column boundary.

## 6. Per-slice reciting ghosting (the re-anchor rule)

Ghosting is recomputed **per system slice**, not per payload line. Within a slice, a reciting
column is **visible** iff it is:

- the reciting run's **true first** note, **or**
- the reciting run's **true last** note, **or**
- the **first column of a system** that falls within a reciting run (the *re-anchor*).

The third clause is the wrap-specific rule: when a break lands inside a ghosted reciting run,
the note at the start of the next system is **surfaced**, and the notes after it stay ghosted
until the run's true last note. Consequences: **a system never starts on a ghost** (the singer
always has a visible reciting anchor at the line start); a system **may end on ghosts** (the
visible reciting notehead earlier in the system covers the text that flows to the right edge —
the standard reciting-tone look). All three clauses are pure index math over the slice bounds.

## 7. Per-system rendering

For each emitted system slice:

- Create the treble stave (and bass stave if grand). **Add clef + key signature to every
  system.** On system 1 only: apply the indent and draw the SATB margin labels (toggle).
- Build alto / soprano / bass notes for the slice; build the tenor held notes whose span lies
  within the slice (anchored at `spacingT[spanStart]`; a held note never crosses a break
  because melismas — and therefore tenor spans — are unbreakable seams).
- Run `applyTextSpacing` on the slice. **Justify** filled systems (stretch the slice to fill
  `SW` — the inverse of the existing scale-to-fit guard); leave the last / under-full system
  ragged. Justification is a pure post-transform on the already-fixed slice and never feeds
  back into break decisions, so layout stays deterministic.
- Draw lyrics for the slice; draw melisma slurs (always within one slice); draw barlines from
  the payload `barlineAfter` only at phrase ends that fall within or at the end of the slice
  (open end at a wrap); draw the final double bar at the stichera end.
- **Pagination:** chunk the *resulting* systems by `SYSTEMS_PER_PAGE` (not the input lines).

## 8. Phasing

- **Phase 1 — flow engine + inter-phrase packing.** ✅ **Implemented in v0.16.0.** Column model; greedy fill with
  **phrase-boundary breaks only** (rule 1); clef + key signature on every system; first-system
  indent + SATB labels (toggle); justify-filled / ragged-last; pagination of computed systems.
  Atomic phrases — a phrase wider than `SW` keeps today's scale-to-fit as fallback. **No
  mid-phrase break, so no ghost re-anchor yet.** Delivers most of the paper-saving benefit and
  de-risks the flow engine in isolation.
- **Phase 2 — intra-phrase wrap.** Add break rules 2–3 (reciting/cadence boundary and within
  reciting run) and the per-slice ghosting with the re-anchor clause. The hard part; builds
  directly on Phase 1.
- **Phase 3 — polish.** Justification refinements (e.g. distribute slack across gaps vs.
  proportional scaling, so long reciting runs don't over-stretch), ragged-last tuning, and any
  edge cases surfaced by real stichera.

## 9. Validation

- Headless VexFlow harness rendering a multi-system stichera: assert no throw, that breaks land
  on legal seams, that justification fills `SW` on filled systems, and that per-slice ghosting
  surfaces the re-anchor (system-start reciting column visible) and never starts a system on a
  ghost.
- Visual confirmation against the printed reference (system breaks open, bars only at phrase
  ends, clef/key on each system, indent + labels on system 1).
- Regression gate (`tools/test_pointing_paths.mjs` 13/13) and `npm run build` remain green;
  the wrap engine is render-only and must not perturb pointing.

## 10. Open items / risks

- **Justification of reciting runs** — proportional scaling can over-stretch a long reciting
  passage; Phase 3 may switch to distributing slack across inter-syllable gaps.
- **Forced-break fallback** for pathological phrases with no legal seam before overflow.
- **Cadential `si` accidental** — the reference shows an accidental our renderer omits; tracked
  separately in `choir_director_review.md` item 2, not part of this work.
- **SATB-label toggle default** — default on (system 1 only) to match the reference; confirm
  whether some scores should suppress it.
