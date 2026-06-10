// ─── TONE TRAINER ─────────────────────────────────────────────────────────────
// Standalone Tone 1 (Common Chant / Obikhod) stichera pointing trainer.
//
// Sub-project of the Orthodox Hours Tool. NOT yet wired to the assembler's data;
// see tone_trainer_notes.md for scope, the resolved findings, open director
// questions, and the eventual hours-tool → tone-trainer data-contract goal.
//
// Component version is tracked independently of the hours-tool version.
// ──────────────────────────────────────────────────────────────────────────────
import React, { useState, useMemo, useRef, useEffect } from "react";
import JSZip from "jszip";

export const TONE_TRAINER_VERSION = "v0.17.3";

// Release notes for the trainer's clickable version badge (mirrors hours-tool).
// Newest entry first; the badge reads TRAINER_RELEASE_NOTES[0].version.
const TRAINER_RELEASE_NOTES = [
  {
    version: "v0.17.3",
    date: "June 2026",
    summary: "Printed score: system indent nudged 12px → 10px",
    items: [
      "tweak: uniform system indent reduced from 12px to 10px by eye.",
    ],
  },
  {
    version: "v0.17.2",
    date: "June 2026",
    summary: "Printed score: all systems share one indent (system 1 no longer juts right of the rest)",
    items: [
      "tweak: the first-system-only 24px choral indent is split into a uniform 12px indent on every system, so system 1 and systems 2..n line up at the same left edge (verified: all system starts land at the same X). Changed consistently in the packer's left-origin and the render anchor so justification is unaffected; the SATB margin labels are unchanged.",
    ],
  },
  {
    version: "v0.17.1",
    date: "June 2026",
    summary: "Printed score: wrapped reciting verses now anchored at BOTH ends (pre-break notehead)",
    items: [
      "fix: a wrapped reciting verse no longer ends a system on a long un-anchored ghost tail. The note just before each wrap is now surfaced as a visible notehead (the pre-break anchor), symmetric with the system-start re-anchor — so each wrapped reciting span is bracketed by a notehead at both ends, the truer Obikhod look. Verses that fit a system are unchanged; surfacing the pre-break note shifts no spacing, so break points stay identical.",
    ],
  },
  {
    version: "v0.17.0",
    date: "June 2026",
    summary: "Printed score Phase 2: a single long verse can now wrap across systems (intra-phrase wrap)",
    items: [
      "feat: mid-phrase system wrap. A verse wider than one system is broken at legal seams — within a reciting run or at a recite→cadence boundary — into open slices (one per system) plus a final slice that carries the barline. Verses that fit a system are placed whole exactly as before (your six example lines render byte-identically; nothing that fits gets split).",
      "feat: per-slice reciting ghosting with the re-anchor rule. Each system's first reciting column is surfaced as a real notehead, so a system never starts on a ghost; the run stays ghosted through the interior and re-anchors at each new system. Wrap points are open (no barline drawn mid-verse) — barlines remain semantic, only at phrase ends.",
      "guard: melisma groups and tenor held spans are never split across a wrap (unbreakable seams), so slurs and held notes always stay within one system.",
      "internal: phrase→slice refactor (a phrase is now one or more column-range slices). The whole-phrase path is geometry-identical to v0.16.8; renderScore._lastSystems exposes the computed slice ranges for headless validation.",
    ],
  },
  {
    version: "v0.16.8",
    date: "June 2026",
    summary: "Printed score: thin+thick final barline + a touch more room after the penultimate bar",
    items: [
      "feat: the final-verse close is now a proper thin+thick final barline (thin 1.2px, thick 3.5px) rather than two equal thin lines — the standard end-of-stichera convention.",
      "tweak: INTER_PHRASE_GAP 24→32px so the verse following a penultimate bar (e.g. 'hear') clears the bar with a little more breathing room.",
    ],
  },
  {
    version: "v0.16.7",
    date: "June 2026",
    summary: "Printed score: final-verse double bar + bar spacing (// clearance, next-verse clears the bar)",
    items: [
      "feat: the final verse of the stichera now closes with a DOUBLE bar (two thin lines) — the convention for the verse after the penultimate. The payload already tagged the last verse 'final'; Phase 1 deferred the double bar (mkVerseBar only drew a single line), so it had been rendering as a single. All other verses keep a single bar; wrap points stay open.",
      "fix: bar spacing. (1) The end-of-verse bar now sits BAR_PAD (12px) past the rightmost of the last note / last syllable / // penultimate marker, so // no longer crowds the bar. (2) phraseMetrics now folds the // marker's right edge and BAR_PAD into a penultimate phrase's measured width, so a following packed phrase clears the bar instead of breaking through it (previously the next verse's first syllable could overlap the bar, e.g. 'hear' sitting on the barline).",
    ],
  },
  {
    version: "v0.16.6",
    date: "June 2026",
    summary: "Printed score: white knockout behind SATB margin labels so they cut cleanly through the brace",
    items: [
      "fix: the first-system SATB labels (Soprano/Alto, Tenor/Bass) overprinted the brace/embellishment at the left of the system. Each label now draws an opaque white knockout box (2px padding) behind the text — same approach the lyric renderer uses — so the label visually cuts the brace instead of colliding with it. Pulling the labels left was rejected: they're already right-aligned near the page edge and 'Soprano' would clip.",
    ],
  },
  {
    version: "v0.16.5",
    date: "June 2026",
    summary: "Printed score: LEAD_GAP clearance on every system (notes no longer touch the glyphs) + cache-bust score-print.html by version",
    items: [
      "fix: systems 2..n placed notes flush against the clef+key (only system 1 cleared, via its indent). The old renderer got a small clef-to-note gap for free from the formatter's natural first-note padding; now that we position absolutely (v0.16.4) we add it explicitly. LEAD_GAP (16px) is applied on every system's anchor; the first system still gets INDENT (24px) on top for the first-system indent + SATB labels.",
      "fix: score-print.html is now opened with ?v=<trainer version> so a deployed update is never served stale from the browser cache. Previously the tab opened the bare URL, so the browser could run a cached old score-print.html while still showing the fresh version label (which comes from the postMessage payload, not the file) — making fixes look like no-ops until a manual hard refresh.",
    ],
  },
  {
    version: "v0.16.4",
    date: "June 2026",
    summary: "Fix (root cause): printed-score leading band was a DOUBLED clef+key offset — attach the stave before positioning",
    items: [
      "fix: found the real cause of the wide leading band. setVoiceX positions notes by absolute target X, but the notes had no stave attached when it ran (the stave was attached later, at voice.draw). With no stave, VexFlow's draw() then adds getNoteStartX() a SECOND time on top of our already-absolute T — so the first note landed at roughly 2x the clef+key offset (≈200px vs a ~40px glyph margin, i.e. the ~5x band observed). The old per-line renderer never hit this because it fed setVoiceX a RELATIVE first-note X (notes[0].getAbsoluteX() read while the notes were still stave-less), so draw() added getNoteStartX exactly once. Fix: attach the stave to every voice's notes BEFORE setVoiceX, so our absolute T is honored exactly once. Anchor is back to getNoteStartX() + first-system indent. This bug was invisible to the headless harness (getNoteStartX ≈ 5px without fonts, so doubling was negligible) and only doubled the real, font-driven width in a browser — which is why earlier anchor-tweaks couldn't move it.",
    ],
  },
  {
    version: "v0.16.3",
    date: "June 2026",
    summary: "Fix: printed-score leading band gone — anchor to the formatter's natural first-note placement (as the old renderer did)",
    items: [
      "fix: the wide leading band persisted because both getNoteStartX() (v0.16.1) and the clef/key modifier widths (v0.16.2) report VexFlow's note-start RESERVE, which in a real browser sits well right of where the formatter actually places the first note. The old per-line renderer never hit this: it anchored to notes[0].getAbsoluteX() — the formatter's own placement, tight against the glyphs. We now do the same: naturalStartX() formats a throwaway probe note on the (clef+key) stave and reads where VexFlow puts it, and that becomes the column origin (+ first-system indent). Confirmed against the pre-wrap screenshot where the single clef+key line was tight. (Headless inverts the natural-vs-getNoteStartX relationship only because it has no font glyph widths; the browser is the reverse, which is exactly the bug.)",
    ],
  },
  {
    version: "v0.16.2",
    date: "June 2026",
    summary: "Fix: tighten printed-score leading — anchor to the clef+key glyph edge, not VexFlow's note-start reserve",
    items: [
      "fix: v0.16.1 reduced the leading gap only slightly because it anchored to getNoteStartX(), which adds VexFlow's generous note-start reserve beyond the clef+key glyphs. The old per-line renderer only ever paid that reserve on its single clef+key line (lines 2-4 had no clef/key and sat flush left), so it was never noticeable; now that every system carries clef+key, the reserve shows as a wide band on every system. Notes now anchor to the actual RIGHT EDGE of the clef+key modifiers + a small LEAD_GAP (12px), giving a tight reference-style start. Falls back to getNoteStartX() only when glyph widths are unavailable (e.g. headless without fonts).",
    ],
  },
  {
    version: "v0.16.1",
    date: "June 2026",
    summary: "Fix: printed-score leading space — phrases now anchor to the real clef+key end (was an enormous left gap on every system)",
    items: [
      "fix: every system showed an enormous empty band between the key signature and the first note. Cause: the first-note position was built from a pre-measured clef+key width taken off a DETACHED, never-attached throwaway stave (plus a redundant EDGE_PAD and the first-system INDENT). An unattached-DOM stave returns an unreliable/inflated note-start in a real browser, so the computed left edge sat far right of the actual clef+key. Notes now anchor to each system's ACTUAL drawn getNoteStartX() (real clef+key end) + the indent on system 1 only; the throwaway measurement is used solely as a packing-width estimate, never for positioning. Leading space is now exactly clef+key, matching the printed reference. EDGE_PAD removed from the note position (kept only in the packing estimate).",
    ],
  },
  {
    version: "v0.16.0",
    date: "June 2026",
    summary: "Printed score — system wrap & phrase packing (Phase 1): phrases flow and pack across systems to save paper",
    items: [
      "feat: the printable score (public/score-print.html) is now a flowed, multi-system layout instead of one-phrase-per-system. Phrases of a stichera pack left-to-right into each system and wrap to the next system when the next phrase won't fit, minimizing systems (less paper in choir binders, less scrolling on a screen). Phase 1 breaks only at phrase boundaries (atomic phrases); mid-phrase wrap within reciting runs + the ghost re-anchor is Phase 2. Print-only — the trainer chip view is unchanged.",
      "arch: three-pass engine. (1) computeAdvances(alto, visible) — the relative note-spacing math extracted out of applyTextSpacing as a pure function (lyric widths via measW + the visible/ghost floor), so a phrase's width is computed draw-free; measW + reciteIntermediateFor hoisted to renderScore scope for the pre-draw pass. (2) packSystems() — greedy first-fit: a phrase opens a new system when it overruns the current one. (3) render — one treble (+bass) stave per system, clef + key signature on EVERY system (matches the printed Obikhod reference), the phrases drawn at justified offsets.",
      "feat: per-system justification — filled systems stretch so the last phrase's verse bar meets the right margin; the last system is left ragged (J=1) unless it overflows, in which case the same scale compresses it (this also absorbs the over-wide lone-phrase scale-to-fit fallback). Justification is a pure post-transform on the already-packed slice, so break decisions stay deterministic.",
      "feat: first-system indent + Soprano/Alto, Tenor/Bass margin labels (SHOW_SATB_LABELS toggle, default on, first system only), matching the reference. Clef + key signature now restate on every system (the reference does; movable-do contour reading means notes carry no per-note accidentals — the key signature is the sole accidental marker). Pagination now chunks the COMPUTED systems by SYSTEMS_PER_PAGE, not the input lines.",
      "note: barline behavior is preserved from the prior renderer (single verse bar drawn at the content end; // penultimate marker); wrap points are left open (no barline). Proper double-bar-at-final is a separate follow-up, not part of the wrap mechanics. Validated headless: a 5-phrase payload renders clean and packs to one page (vs two one-per-system).",
    ],
  },
  {
    version: "v0.15.1",
    date: "June 2026",
    summary: "Fix: held-tenor chip width now spans its melisma (chip view / SATB ghost alignment)",
    items: [
      "fix: a collapsed (held) tenor chip rendered at the nominal whole/dotted-whole width (90/120px), narrower than the 2- or 3-note alto melisma it covers, so the tenor column drifted left of the other SATB rows and the tenor ghost mis-registered over the bass. chipW() now widens a held chip (spanCount≥2) to the span it covers: sum of the underlying alto chip widths + the intra-melisma gaps — exactly the alto group's totalW — so a 2-note [H,H] hold is 101px (was 90) and a 3-note [H,H,H] hold is 152px (was 120). Guard is self-isolating: only collapsed tenor entries carry spanCount. Score render and audio were already correct; this is chip-view only.",
    ],
  },
  {
    version: "v0.15.0",
    date: "June 2026",
    summary: "Tenor melisma-hold — constant-pitch alto melisma collapses to one held tenor note (Tone 1); lexicon prophets fix",
    items: [
      "feat: tenor melisma-hold. When the alto sings a melisma (multiple notes on one syllable) and the tenor sits on a single constant pitch across it, the tenor renders as ONE held note rather than one note per alto note. Score-observed for Tone 1: a 2-note alto melisma (do·re = 2×H) → tenor holds one whole note. Wired identically through all three tenor consumers (audio, chips, score payload) via a shared deriveTenorRolesWD() so the paths cannot drift.",
      "arch: shared module-scope helpers — mapTenorPitch() (the per-role pitch map, previously duplicated in all three sites) and deriveTenorRolesWD() (pitch-map + collapse). The collapse fires only when (a) consecutive melisma entries share the same syllable text, (b) the tenor pitch is constant across the span, and (c) the summed duration maps to a single representable note value. The maximal constant-pitch run is the decision unit: it collapses whole or not at all (never a sub-span).",
      "decision: guard follows the choir director's two-question rule — the tenor sustains when neither its pitch nor the syllable changes, and rearticulates otherwise. Syllable change → new note even on the same pitch (handled by the same-syllable-text guard, so a held pitch across multiple syllables is NOT collapsed). Pitch change → the tenor's own melisma, never collapsed (Tone 1 Final do·ti·la → tenor la·si·mi stays three notes).",
      "decision: Tone 1 Phrase B 3-note do·re·ti melisma (cadCount=1) is one syllable with constant tenor pitch (sol), so by the director's rule it SUSTAINS — rendered as a dotted whole note (W· = 3H), not three separate half notes. The harmony caveat (rearticulate if harmony moves) does not apply: the tenor's position is fixed to sol by our cadMap logic, so the bass moving the harmony beneath it produces no articulation the tenor would make. durKey carries W·; sumDurKeys works in half-note units so 3H → W· (dotted whole). Confirmed in choir_director_review.md.",
      "feat: duration vocabulary extended with W· (dotted whole = 3H) — DURKEY_BEATS/BEATS_DURKEY (3), CHIP_W (120px), and score-print DUR ('wd', the duration that yields true 3H ticks; 'w'+Dot.buildAndAttach draws the dot but leaves ticks at a plain whole). Score-print renders W· as 'wd' + one dot glyph; verified headless to match a 3-note (3H) alto melisma in joinVoices/format.",
      "feat: score-print SATB alignment for collapsed tenor. The columnar renderer no longer requires tenor.length === bass.length; each tenor entry carries spanStart (the alto column it begins on) + spanCount, and a held note anchors at spacingT[spanStart] so the whole note sits under the first note of the melisma it spans. Reciting-intermediate ghost-hiding now keys off spanStart (the alto column) rather than the tenor array index, which the collapse shifts. Verified headless: W-vs-(H,H) joinVoices+format+setVoiceX renders clean and anchors the held note at the first melisma column.",
      "note: chips and audio needed no alignment work — chip rows are independent flex rows (a collapsed entry has melisma:false, so it renders as one chip at its durKey width, e.g. W → 90px), and audio simply plays fewer notes with summed durations.",
      "arch: Tone-1 scoped by construction — TENOR_RULES only has [1], so the collapse only ever touches Tone 1 tenor entries. Per the prime directive it is NOT ported to other tones; tenor hold behaviour must be re-verified from each tone's own score before relying on it.",
      "fix: lexicon — prophets/prophet syllabification corrected Prop·hets/Prop·het → Proph·ets/Proph·et (conventional boundary; same 2-syllable count and first-syllable stress, so pointing is unchanged). Build tool is additive (skips existing keys) so the hand-edit survives regeneration.",
    ],
  },
  {
    version: "v0.14.0",
    date: "June 2026",
    summary: "Score print — full SATB (soprano + tenor), version on page, GhostNote reciting fix",
    items: [
      "feat: soprano rendered on the treble stave (SATB closed score) — soprano stems up, alto stems down. New buildSopranoPitch(cfg): the alto octave map with la/ti raised to octave 5, because soprano la/ti derive from alto fa/sol (top of the alto range) and SOPRANO_MAP is all diatonic thirds, so 'a third above alto' pins every octave. Soprano always renders above alto by construction.",
      "feat: tenor rendered on the bass stave — tenor stems up, bass stems down. New tenorVFPitch(sol, div, cfg): octave derived from the verified BASS_NOTATION_OCT shifted by the audio ratio log2(BASS_OCTAVE_DIV / TENOR_OCTAVE_DIV) — sol ÷4 bass vs ÷2 tenor → tenor sol = C/4, one octave above bass C/3. Per-note octaveDiv then shifts by log2(2/div) so the Final phrase's ÷1 la/si rise an octave. Cross-checked against TENOR_RULES Final comments: sol=C/4, la=D/4 (step above sol), mi=A/3 (below sol).",
      "feat: melisma slurs — alto slur loop factored into drawMelismaSlurs(notes, altoEntries, invert), grouped by alto melisma/text and drawn on each moving voice: alto + soprano arc above; bass arcs below (invert false) as the bottom voice, clear of the tenor. Tenor intentionally unslurred (it holds a reciting pitch rather than melodically melisma-moving).",
      "fix: reciting intermediates now render as VF.GhostNote across all four voices instead of transparent-styled StaveNotes. The transparent approach left ledger-line stubs visible on the tenor reciting run (ledger paths carry their own stroke that ignores the group's transparent style); GhostNotes draw no glyph at all while still holding tick + X position for text-driven spacing.",
      "feat: tool version shown in the score-print toolbar header (on-screen cache check) and appended to the printed subtitle (so printed scores carry the producing version — the toolbar is stripped before printing). Both read payload.toolVersion, so they auto-follow the trainer badge.",
      "note: tenor 'si' (Final cadence only) renders from cfg.names[si]; the source data has OFF[si] and cfg.names[si] disagreeing on register — flagged for score verification.",
    ],
  },
  {
    version: "v0.13.0",
    date: "June 2026",
    summary: "Score print — text-driven note spacing + reciting-tone abbreviation",
    items: [
      "feat: reciting-tone abbreviation — a run of 4+ consecutive recitation notes now renders with only its first and last noteheads visible; the intermediate noteheads are transparent (OCA convention), with the recited text distributed across the run.",
      "feat: text-driven note spacing — notes are no longer fixed-width. After VexFlow formats, each note's TickContext X is overridden to a text-aware target: spacing between any adjacent pair is max(floor, halfW(prev) + TEXT_GAP + halfW(this)). Floor is NOTE_W (50px) between two visible noteheads, RECITE_FLOOR (30px) when a transparent reciting intermediate is involved. Wide cadence pairs (e.g. 'speaks through') get exactly the room they need; reciting runs compress to text width. Lyric collisions are impossible by construction.",
      "arch: VexFlow ignores per-note setWidth for equal-duration notes (proven by headless probe) — TickContext.setX is the only reliable per-note position override. The bass voice mirrors the alto's target-X array so grand-staff columns stay aligned.",
      "change: scale-to-fit guard — if a line's text-driven width would overflow the stave, all offsets compress proportionally so the system never runs off the page.",
      "cleanup: removed the interim xOv lyric-distribution workaround (~40 lines); syllables now ride their own text-spaced note positions directly via getAbsoluteX.",
    ],
  },
  {
    version: "v0.12.4",
    date: "June 2026",
    summary: "Tone 1 Phrase D — secondary-accent-aware n=5 distribution + example text fix",
    items: [
      "fix: PRESET_T1 Phrase D example text — 'spoke' was unaccented (flag 0), causing single-accent fallback → count=2 → phantom duplicate 'ets'. Corrected to accented (flag 1), matching the actual director text '[spoke] in the [Proph]ets'.",
      "fix: lineToRolesWithDuration + lineToNotes Phrase D n=5 branch — was positionally ti·do·re·do·ti (re on 'the', do on Proph, all-H, no melisma). Now secondary-accent-aware: locates the 're' pitch from pointLine's two-accent output. When secondary sits at n-2 (immediately before close, as in Proph-ets), fills are Q and secondary gets re·do melisma. When secondary at canonical pos 2, exact-fit all-H unchanged. Score-verified shape: ti(H)·do(Q)·do(Q)·re·do(H mel)·ti(H).",
      "arch: n=3/4/≤2/6/7 branches untouched — per-count verification required before any changes.",
    ],
  },
  {
    version: "v0.12.3",
    date: "June 2026",
    summary: "Score print — back-to-back melisma slurs, // bar clearance, masked-centreline hyphens",
    items: [
      "fix: melisma slur loop now closes (draws) an open group on any boundary — a non-melisma note, a different-text melisma note (back-to-back groups), or end of line. Previously a melisma immediately followed by another melisma (e.g. Proph then ets) silently dropped the first slur.",
      "fix: end-of-verse bar now clears the // penultimate marker too — // right edge folded into the bar's max(note, syllable, //) + 8px, so the bar no longer cuts through //. Solo and grand paths.",
      "change: syllable hyphens are now masked centrelines, not glyphs — a thin rule drawn centre-to-centre BEHIND the syllables' opaque white boxes, which clip both ends. Visible hyphen = exactly the gap between words: long across a melisma stretch, short when tight, gone if boxes touch. Lyric rendering refactored into a shared two-pass drawLyrics() helper (hyphens behind, boxes+text in front) used by both solo and grand paths.",
      "note: Tone 1 Phrase D count-2 cadence (e.g. 'Prophets' = Prop+ets) still emits a phantom duplicate close syllable — engine fix deferred pending a real score to verify the n=2 distribution (see tone_trainer_notes.md).",
    ],
  },
  {
    version: "v0.12.2",
    date: "June 2026",
    summary: "Score print — end-of-verse bar breathing room (clears last note or syllable + 8px)",
    items: [
      "fix: end-of-verse barline now placed at max(last-note-end, last-syllable-right-edge) + 8px, so it clears a long final word (e.g. 'trembling') instead of crowding it. prevDrawn now carries the syllable's rightEdge; applied to both solo and grand paths.",
    ],
  },
  {
    version: "v0.12.1",
    date: "June 2026",
    summary: "Score print refinements — edge buffers, syllable hyphenation, end-of-verse barlines",
    items: [
      "fix: lyric/note edge buffer (EDGE_PAD) — note start-X shifted right on every system so the first syllable clears the stave's left line (and clef on system 1); via Stave.setNoteStartX after draw, lyrics/bars follow automatically.",
      "feat: inter-syllable hyphenation — buildScorePayload tags each alto syllable with hyphenAfter (true when it is not the last syllable of its word), derived from line.words; renderer draws a centered hyphen to the next drawn syllable. No pointing-engine change.",
      "feat: hyphen doubles as a melisma extender — a non-final syllable held across a melisma gets its hyphen at the midpoint of the held span, extending after the melisma toward the next syllable.",
      "feat: end-of-verse barlines — a single vertical bar is drawn across the stave at each verse's content end (after its last note); grand staff spans treble-top to bass-bottom, solo spans the treble stave. Driven by the '|' verse delimiter (one payload line = one verse).",
      "change: suppressed the detached stave-edge end-barline (was SINGLE/END at the far right of the full-width stave) in favour of the content-position verse bar; final verse now ends with a single bar per request (no thick terminal bar).",
    ],
  },
  {
    version: "v0.12.0",
    date: "June 2026",
    summary: "Score print — Score button opens SATB printable score in new tab",
    items: [
      "feat: Score button in controls bar (visible when sticheron is pointed).",
      "feat: Score modal — editable title (auto-prefilled Tone N + first 4 words), director/machine source selector (shown when both available), Create Score button.",
      "feat: buildScorePayload() — assembles per-line SATB payload via existing lineToRolesWithDuration + SOPRANO_MAP + BASS_RULES + TENOR_RULES. No new pointing logic.",
      "feat: public/score-print.html — standalone VexFlow page. CDN-loaded (zero bundle impact). Grand staff: treble S+A, bass T+B. Inter-stave lyrics on alto BOTTOM annotation. Melisma slurs via VF.Curve.",
      "feat: Reduced score for tones without full SATB (Tone 3 renders alto only).",
      "arch: postMessage handshake — opener sends payload after score-print-ready signal.",
      "fix: page-chunked renderer (SYSTEMS_PER_PAGE=4) — each chunk its own .score-page SVG; clean print pagination via page-break-after + break-inside:avoid.",
      "fix: title/subtitle rendered as in-SVG text on page 1 — eliminates HTML/SVG page-break fighting.",
      "fix: bottom bass-stave clipping resolved via BOTTOM_PAD=90 (SVG-box clearance below stems); SVG height corrected in post-draw pass (VexFlow overwrites inline style during draw).",
      "fix: clef + key signature only on first system of first page; continuation systems plain.",
      "style: Inter font (Google Fonts, offline fallback), lyric weight 200 / accent 500; equal note spacing NOTE_W=47.",
      "style: print budget tuned to 8.5x11 letter (720x960px printable); 4 systems + title fit one page.",
    ],
  },
  {
    version: "v0.11.29",
    date: "June 2026",
    summary: "Tone 1 SATB complete — register fixes, unified chip heights, si detuning",
    items: [
      "fix: tenor si detuning (-100 cents) scoped to SATB only — tenor-solo plays true 220Hz so la→si step is clear; SATB detune suppresses beating vs alto ti 2nd harmonic.",
      "fix: soprano SATB ghost rendered as isGhostSoprano=true — solfège labels now correctly suppressed on soprano chips in SATB.",
      "fix: solfège label spacing tightened 10px→9px from stripe.",
      "arch: unified bass+tenor height map (buildUnifiedVoiceMap) — both voices normalised together so bass always renders deeper than tenor in SATB.",
      "fix: playNotes() tenor audio path — n.tenor notes now call freq_tenor(sol, phraseRules) instead of freq(sol).",
      "fix: tenor Final Phrase register — octaveDiv:{la:1,si:1}; si detuned -100c in SATB to eliminate near-octave beating with alto ti.",
      "fix: SATB container sized to maxBassH; tenor ghost at absolute top:0; bass extends below.",
      "fix: global tone-wide chip heights — buildGlobalVoiceMap collects all phrases per voice.",
    ],
  },
  {
    version: "v0.11.24",
    date: "June 2026",
    summary: "fix: tenor audio register + SATB solfège label cleanup",
    items: [
      "fix: playNotes() tenor audio path — n.tenor notes were calling freq(sol) with no octave division instead of freq_tenor(sol, phraseRules). Final Phrase now plays la(208Hz) one step above prior sol(185Hz), then la si mi as scored.",
      "fix: SATB view — solfège labels suppressed for ghost soprano and ghost tenor chips. Only alto and bass show labels. Standalone S and T views unaffected.",
    ],
  },
  {
    version: "v0.11.23",
    date: "June 2026",
    summary: "fix: tenor Final Phrase register — la/si lifted to div-1 to sit above sol",
    items: [
      "fix: TENOR_RULES[1].Final octaveDiv:{la:1,si:1}. At div-2, la(104Hz) and si(110Hz) fell an octave below sol(185Hz) — heard as a dramatic drop. With div-1, la(208Hz) sits one step above sol and si(220Hz) a half-step above la, matching the score. mi(Lord) stays div-2(156Hz), one step below sol. Chip heights follow automatically via buildVoiceHeightMap.",
    ],
  },
  {
    version: "v0.11.22",
    date: "June 2026",
    summary: "fix: Tone 1 Final Phrase bass cadence — mi_low distinguishes low and high mi",
    items: [
      "fix: BASS_RULES[1].Final cadMap updated: ti→mi_low (S4, lower octave) vs do→mi (L1, higher octave). Score shows two distinct mi positions.",
      "feat: mi_low added to OFF (offset 4, same semitone as mi) and BASS_OCTAVE_DIV (div-4). Frequency sort: mi_low(78Hz) < la(104Hz) < re(139Hz) < mi(156Hz) matches staff positions S4 < L3 < S1 < L1.",
    ],
  },
  {
    version: "v0.11.21",
    date: "June 2026",
    summary: "arch: per-phrase frequency-based chip heights for bass and tenor",
    items: [
      "arch: chipH_bass and chipH_tenor replaced by buildVoiceHeightMap() — collects unique sounding pitches per phrase, sorts by actual sounding frequency, assigns chip heights linearly from H_VOICE_MIN=24px to H_VOICE_MAX=72px.",
      "arch: chip heights now correctly reflect actual sounding pitch in all cases, including Tone 1 Final Phrase where re/mi octaveDiv overrides place them above la in the bass register.",
      "arch: BASS_CHIP_CEILING, BASS_MAX_IDX, TENOR_MAX_IDX, BASS_PITCH_ORDER, TENOR_PITCH_ORDER removed — no longer needed.",
      "arch: Tone 2 chip heights now scale correctly per phrase. Phrases with more unique pitches span the full 24-72px range.",
    ],
  },
  {
    version: "v0.11.20",
    date: "June 2026",
    summary: "fix: chipH_bass formula restored — Tone 2 chip heights correct, shifted pitches capped at minimum",
    items: [
      "fix: chipH_bass() was using (BASS_MAX_IDX*2+1)-idx after the octaveDiv extension, multiplying all chip heights globally. Restored original scale via BASS_CHIP_CEILING=4.",
      "fix: Pitches overridden to a higher register via phraseRules.octaveDiv now return CHIP_BASE_H (minimum) — they sound above la so render as shortest chips. Tone 2 unchanged.",
    ],
  },
  {
    version: "v0.11.19",
    date: "June 2026",
    summary: "feat: Tenor voice — Tone 1 fully wired, SATB ghost over bass, standalone tenor view",
    items: [
      "feat: si (raised 6th, B♮ in D minor) added to OFF table at offset -2. Sounding tenor pitch in Tone 1 Final Phrase (tenor cadMap ti→si).",
      "feat: TENOR_PITCH_ORDER, TENOR_MAX_IDX, TENOR_OCTAVE_DIV, chipH_tenor, TENOR_TONES, TENOR_RULES — mirror bass architecture exactly. Per-tone per-phrase logic; no cross-tone assumptions.",
      "feat: TENOR_RULES[1] — all 5 phrases verified against Drillock & Ealy tutorial. A-D: recite=sol, cadMap all→sol. Final: recite=la, cadMap do→la / ti→si / la→mi.",
      "feat: freq_tenor(), lineToNotes_tenor() — mirror freq_bass/lineToNotes_bass. phraseRules passed for per-phrase octaveDiv support.",
      "feat: Tenor standalone view — chip row below text, inverted scale (lower pitch = taller chip), stripe at bottom, solfège label.",
      "feat: SATB ghost tenor over bass — 50% opacity, flex-start, container height = max(bassChipH, tenorChipH). Mirrors soprano ghost over alto pattern.",
      "feat: Tenor enabled in voice selector dropdown for tones in TENOR_TONES. SATB label updated.",
      "arch: renderChip gains isTenor/isGhostTenor params; isDownward flag unifies bass+tenor stripe/label positioning.",
    ],
  },
  {
    version: "v0.11.18",
    date: "June 2026",
    summary: "fix: bass chip heights respect per-phrase octaveDiv — Tone 1 Final re/mi now render at correct visual height",
    items: [
      "fix: chipH_bass() now accepts phraseRules. When octaveDiv places a pitch in a higher register than global, its index is shifted up so it renders shorter (higher) than globally-placed pitches. Mirrors freq_bass per-phrase octave logic.",
      "fix: Tone 1 Final bass chips: la=tallest, re=medium, mi=shortest — correct. Tone 2 chip heights unchanged.",
    ],
  },
  {
    version: "v0.11.17",
    date: "June 2026",
    summary: "feat: Tone 1 soprano enabled — pure diatonic third above alto, verified against tutorial",
    items: [
      "feat: Added 1 to SOPRANO_TONES. Tone 1 soprano is a pure diatonic third above alto throughout all 5 phrases — 21/21 notes verified against Drillock & Ealy Four-Part Harmony tutorial. Existing SOPRANO_MAP covers Tone 1 without modification.",
    ],
  },
  {
    version: "v0.11.16",
    date: "June 2026",
    summary: "arch: per-tone per-phrase bass octave override (octaveDiv); fix Tone 1 Final re/mi register",
    items: [
      "arch: freq_bass() now accepts optional phraseRules arg. phraseRules.octaveDiv[pitch] takes precedence over global BASS_OCTAVE_DIV — per-tone per-phrase octave placement without cross-tone impact.",
      "fix: Tone 1 Final Phrase re and mi were playing two octaves below the staff (div-4, ~69-73 Hz). Score shows they sit on the bass staff. Added octaveDiv:{re:2,mi:2} to BASS_RULES[1].Final — now plays at correct register (~139-147 Hz). Tone 2 re/mi at div-4 untouched.",
    ],
  },
  {
    version: "v0.11.15",
    date: "June 2026",
    summary: "feat: BASS_RULES[1] complete — all five Tone 1 phrases score-verified against Drillock & Ealy Four-Part Harmony tutorial",
    items: [
      "feat: BASS_RULES[1].A — intonation/reciting sol, prep sol, cadence do→do. Verified with Bill.",
      "feat: BASS_RULES[1].B — reciting do, cadence do→do / re→sol / ti→sol. Verified with Bill.",
      "feat: BASS_RULES[1].C — intonation/reciting sol, cadence do→do / ti→sol. Verified with Bill.",
      "feat: BASS_RULES[1].D — reciting do, cadence ti→sol / do→do / re→ti. Verified with Bill.",
      "feat: BASS_RULES[1].Final — reciting re, cadence do→mi / ti→mi / la→la. Verified with Bill.",
      "arch: BASS_PITCH_ORDER extended to full 8-pitch set (re mi fa sol la ti do di). Previously only covered 5 pitches Tone 2 needed — any missing pitch fell back to index 0 (wrong chip height). Tone 1 introduces do and re as bass pitches not in the prior set.",
      "docs: tone_trainer_notes.md — documented BASS_PITCH_ORDER requirement: must cover every pitch any tone BASS_RULES may emit before encoding new tone bass rules.",
    ],
  },
  {
    version: "v0.11.14",
    date: "June 2026",
    summary: "arch: Tone 1 Phrases B and C get own direct duration handlers — cadDuration() fully excluded for all Tone 1 phrases",
    items: [
      "arch: Tone 1 Phrase B direct duration handler added to lineToNotes() and lineToRolesWithDuration(). anchor=H, fills re: H≤3/Q≥4, close ti=H.",
      "arch: Tone 1 Phrase C direct duration handler added. anchor=H, fills do: H≤3/Q≥4, close ti=H. Previously matched Tone 2 Phrase C branch (wrong fill threshold ≤2 vs ≤3, wrong whole-note trigger).",
      "arch: cadDuration() gate now excludes all Tone 1 phrases (A, B, C, Final) — prime directive. Tone 2 and Tone 3 behavior unchanged.",
    ],
  },
  {
    version: "v0.11.13",
    date: "June 2026",
    summary: "ux: rotation hint in textarea label now reflects active tone",
    items: [
      "ux: textarea label shows tone-specific phrase rotation — Tone 1: A·B·C·D·…·Final, Tone 2: A then B·C·D·…·Final, Tone 3: A·B·…·Final.",
    ],
  },
  {
    version: "v0.11.12",
    date: "June 2026",
    summary: "fix: Phrase A intonation/anchor disambiguation — director-only-marks-inton case",
    items: [
      "fix: Phrase A pointLine() now distinguishes between director marking the intonation vs. the cadence anchor.",
      "fix: When anchorIndex() returns the same syllable as the first accent (director only marked intonation), fall back to positional: last syllable = cad, second-to-last = prep.",
      "fix: 'Let my [prayer] arise' now renders correctly: prayer=inton(re/H·), a=prep(ti/Q), rise=cad(do/H).",
      "arch: Intonation (forward pass) and anchor (backward pass) are independent. When they agree on the same syllable, the director marked only the intonation — cadence position is determined structurally.",
    ],
  },
  {
    version: "v0.11.11",
    date: "June 2026",
    summary: "fix: Phrase A prep reverted to Q — score says up=ti/Q; on=do/H confirmed correct in code",
    items: [
      "fix: Phrase A prep duration reverted to Q — score: up=ti/Q (was incorrectly changed to H in v0.11.10).",
      "note: Phrase A cad anchor/fills=H, close=W logic is correct in code. If 'on' renders as Q, cache issue or upstream pointing problem.",
    ],
  },
  {
    version: "v0.11.10",
    date: "June 2026",
    summary: "fix: Tone 1 Phrase A duration corrections + lexicon upon fix",
    items: [
      "fix: Phrase A cadence duration — anchor and fills now H (not Q). Score: hear=do/H, on=do/H. Close remains W.",
      "fix: Phrase A prep duration — prep note now H (not Q). Score: up=ti/H, Thee=ti/H.",
      "fix: lexicon 'upon' syllabification changed from u·pon to up·on to match liturgical usage and director split up[on].",
    ],
  },
  {
    version: "v0.11.9",
    date: "June 2026",
    summary: "fix: Tone 1 Phrase A cadence boundary — anchor-driven, multi-syllable cad supported",
    items: [
      "fix: Tone 1 Phrase A pointLine() now uses anchorIndex() for cadence boundary. Prep = syllable immediately before anchor. Cadence = anchor + all remaining syllables, all on do.",
      "fix: previous assumption that prep=second-to-last was wrong for multi-syllable cadences (e.g. 'hear me!' = 2-syllable cad, 'Thee' = prep).",
      "fix: Tone 1 Phrase A direct duration rules added to lineToNotes() and lineToRolesWithDuration(), bypassing cadDuration() — prime directive.",
      "fix: score-verified: anchor=Q when multi-cad, close=W, fills=Q, single-cad=H.",
    ],
  },
  {
    version: "v0.11.8",
    date: "June 2026",
    summary: "fix: Tone 1 Final Phrase duration — direct rules, cadDuration() bypassed",
    items: [
      "fix: Tone 1 Final Phrase cad duration now uses direct score-verified rules in both lineToNotes() and lineToRolesWithDuration(), bypassing cadDuration() entirely.",
      "fix: cadDuration() was incorrectly matching Tone 1 Final Phrase cadDurs (fillPitch=do) to Tone 2 Phrase C branch, producing wrong Q fills and H close instead of H fills and W close.",
      "fix: 'Hear me, O Lord!' — me=do(H), O=ti(H), Lord=la(W) now correct. Previously O got Q.",
      "arch: cadDuration() is Tone 2 logic. Tone 1 Final Phrase must not route through it — prime directive.",
    ],
  },
  {
    version: "v0.11.7",
    date: "June 2026",
    summary: "fix: Tone 1 melisma chips now render correctly — lineToRolesWithDuration mirrors lineToNotes",
    items: [
      "fix: lineToRolesWithDuration() was missing Tone 1 Final Phrase, Phrase B, and Phrase D early-return paths. Chips fell through to generic handler — no melisma expansion, wrong widths.",
      "fix: Tone 1 Phrase B count=2 (e.g. 'in-cense') now shows do·re melisma chip on anchor.",
      "fix: Tone 1 Final Phrase count<3 now shows do·ti melisma chip on anchor.",
      "fix: Tone 1 Phrase D now shows correct pitch chips with melisma expansion at all counts.",
      "arch: lineToNotes() and lineToRolesWithDuration() are a matched pair — all early-return paths must exist in both.",
    ],
  },
  {
    version: "v0.11.6",
    date: "June 2026",
    summary: "fix: remove pre-slur from Tone 1 Phrase A — no score evidence, violated prime directive",
    items: [
      "fix: pre-slur removed from Tone 1 Phrase A dedicated path entirely. No score evidence exists for a pre-slur in Tone 1 Phrase A. It was incorrectly ported from Tone 2 logic.",
      "fix: pre-slur guard also removed from standard single-anchor path (was dead code after Phrase A got dedicated path, but retained incorrect assumption).",
      "arch: prime directive encoded — each tone and each tone/phrase gets only its own score-verified logic. No logic ported from another tone/phrase without evidence.",
    ],
  },
  {
    version: "v0.11.5",
    date: "June 2026",
    summary: "feat: Tone 1 Phrase A prep-position-driven cadence boundary",
    items: [
      "feat: pointLine() — Tone 1 Phrase A now uses prep-position-driven cadence boundary. Prep note (ti) is structurally always second-to-last syllable; cadence is always last syllable only. Intonation = last accented body syllable. Pre-slur fires if last body syllable is single accented monosyllable.",
      "fix: [prayer] in 'Let my [prayer] a-rise' was incorrectly treated as cadence anchor. Now correctly treated as intonation re(H·); 'a' = prep ti(Q); 'rise' = cadence do(H).",
      "note: fix is structurally invariant for all Phrase A lines — derived from Phrase A definition (prep:ti always present), not from specific verse content.",
    ],
  },
  {
    version: "v0.11.4",
    date: "June 2026",
    summary: "feat: Tone 1 Phrase D two-accent cadence — director marks drive correct pitch assignment",
    items: [
      "feat: pointLine() — Tone 1 Phrase D now uses two-accent path when two director marks present. First accent = cadence boundary (ti anchor); last internal accent = secondary anchor (re). Fills between = do. Close = ti. Falls through to distribute() when fewer than 2 marks.",
      "feat: autoAccentLine() — Tone 1 Phrase D now marks both primary anchor (first stressed syllable) and secondary anchor (last internal stressed) so machine sing path receives two marks and triggers two-accent path.",
      "feat: applyPhraseAccent() — same Tone 1 Phrase D two-accent marking added to machine comparison row path, keyed on cadDurs.twoAccent flag.",
      "fix: cadence boundary was incorrectly set at last internal accent ('voice') leaving 'Re ceive The' as reciting tone. Now correctly set at first director mark ('ceive').",
    ],
  },
  {
    version: "v0.11.3",
    date: "June 2026",
    summary: "fix: ReferenceError crash — isTone1Final/B/D declared in lineToRolesWithDuration",
    items: [
      "fix: isTone1Final, isTone1B, isTone1D were declared in lineToNotes() but missing from lineToRolesWithDuration() — caused ReferenceError crash (blank screen) when pointing any Tone 1 line from docx.",
    ],
  },
  {
    version: "v0.11.2",
    date: "June 2026",
    summary: "fix: chip width now always derived from durKey — CHIP_W_RECITE removed",
    items: [
      "fix: chipW() now always uses CHIP_W[r.durKey] — removed role=recite override that hardcoded CHIP_W_RECITE=26px regardless of duration.",
      "fix: lineToRolesWithDuration() — Tone 1 Final Phrase accented reciting tone now emits durKey='H' (mirrors lineToNotes fix in v0.11.1).",
      "refactor: CHIP_W_RECITE constant removed — was an artifact of reciting tone always being Q. Any future tone assigning non-Q duration to reciting tone syllables will automatically get correct chip width.",
      "note: reciting tone chips across all tones now 30px wide (was 26px) — minor visual change, architecturally correct.",
    ],
  },
  {
    version: "v0.11.1",
    date: "June 2026",
    summary: "fix: Tone 1 Final Phrase accented reciting tone now H",
    items: [
      "fix: Tone 1 Final Phrase — accented reciting tone syllables now emit H not Q. Score-verified: 'Hear me, O Lord!' shows Hear=re(H), me=do(H), O=ti(H), Lord!=la(W). Scoped to isTone1Final only — all other tones/phrases reciting tone remains Q per tutorial.",
    ],
  },
  {
    version: "v0.11.0",
    date: "June 2026",
    summary: "Tone 1 duration logic rewrite — score-verified cadDurs for all five phrases",
    items: [
      "feat: PH_DEFS[1] — cadDurs blocks for all five Tone 1 phrases (A/B/C/D/Final), score-verified June 2026.",
      "feat: Tone 1 Final Phrase — structural melisma at count<3 (do·ti); la close always W, tutorial-confirmed.",
      "feat: Tone 1 Phrase B — do·re melisma at count=2; re fills H≤3 / Q≥4; close ti(H) default.",
      "feat: Tone 1 Phrase C — do fills H≤3 / Q≥4; close ti(H) default; no melisma.",
      "feat: Tone 1 Phrase D — dedicated two-accent architecture. Five structural positions ti·do·re·do·ti always preserved. Melisma collapses positions when count<5. distribute() bypassed.",
      "feat: Tone 1 Phrase A — single-pitch cadence cadDurs (fills Q, close H); no melisma possible.",
      "fix: pre-slur scoped to Tone 1 Phrase A only — removed generic def.prep firing.",
      "feat: cadDuration() dispatch extended to Tone 1 alongside Tone 2.",
      "note: rhythmic balancing (H·, extended W) requires rhythmic grouping engine — TBD.",
    ],
  },
  {
    version: "v0.10.0",
    date: "May 2026",
    summary: "Architecture unification — audio and visual share one representation",
    items: [
      "refactor: lineToNotes_bass now consumes rolesWD — the same fully-expanded alto roles used by the visual path. One source of truth feeds both audio and visual bass. generateBass() removed.",
      "fix: bass Phrase A la·mi melisma now sounds correctly — mi was silent because the old audio path read single-pitch cad roles from pointLine() before melisma expansion.",
      "fix: bass Final sol·fa melisma and re(W) close now sound correctly for the same reason.",
      "fix: whole-note trigger (Phrases B/C/D) now correctly counts distinct words across the entire cadence using wordBoundary flags — previous check always returned the wrong value.",
      "fix: Final Phrase preslur re(H·)·ti(Q) when no reciting tone precedes — was always Q+Q.",
      "fix: bass volume raised to 1.1× in both solo and alto+bass modes.",
      "ui: intonation moved first in the legend pill row.",
    ],
  },
  {
    version: "v0.9.9",
    date: "May 2026",
    summary: "Algorithmic bass derivation engine — Tone 2 Obikhod",
    items: [
      "feat: Bass part algorithmically derived from alto pointing for Tone 2 (Russian Obikhod / L'vov-Bakhmetev). No separate encoding needed — bass stays in sync with alto automatically.",
      "feat: BASS_RULES[2] — score-verified interval map per phrase (A/B/C/D/Final). Alto pitches substituted to bass register pitches using cadMap, prepMap, preslurMap per phrase.",
      "feat: BASS_OCTAVE_DIV — per-pitch octave displacement: re/mi/fa/sol two octaves below soprano; la/ti/do/di one octave below. Score-verified against L'vov-Bakhmetev Obikhod.",
      "feat: generateBass() — pure function deriving bass roles from alto roles. Preserves all role types, durations, wordBoundary flags. Returns null for tones without bass rules (Tones 1, 3 — not yet researched).",
      "feat: lineToNotes_bass() — generates bass audio notes using same duration engine as alto. Handles Tone 2 anchor melisma cases.",
      "feat: playNotesWithBass() — schedules alto and bass simultaneously. Bass peaks at 0.7× alto volume to sit beneath the melody in the mix.",
      "note: Bass rules are setting-specific — BASS_RULES[2] is Obikhod only. Other settings/tones added as score evidence is gathered.",
    ],
  },
  {
    version: "v0.9.8",
    date: "May 2026",
    summary: "Tone 2 per-phrase cadence duration engine",
    items: [
      "feat: Tone 2 cadence durations are now score-verified and phrase-specific. Each of the five Tone 2 phrases (A, B, C, D, Final) has its own duration logic derived from Drillock & Ealy tutorial and L'vov-Bakhmetev Obikhod score analysis (session May 31 2026).",
      "feat: Phrase A — fa(H)·mi(H)·re(H·) at count≤3; fill mi drops to Q at count≥4; re close is dotted half at count≤3. Anchor melisma at count<3.",
      "feat: Phrase B — di(H) anchor, fills H≤3/Q≥4, whole note on re when single word fills entire cadence.",
      "feat: Phrase C — do(H) anchor, fills H≤2/Q≥3, whole note on do when cadence spans multiple words.",
      "feat: Phrase D — same figure as B, reciting on do, whole note fires on multi-word cadence.",
      "feat: Final Phrase — do(W) anchor always, ti(W) close always; anchor melisma at count<4.",
      "feat: cadDuration() — per-phrase duration function; falls through to generic handler for Tones 1 and 3 (unchanged).",
      "feat: buildMelisma() — emits multi-pitch melisma note arrays with explicit per-pitch durations.",
      "feat: wordBoundary flag added to pointLine() cad output — drives whole note triggers.",
      "note: Phrase A whole note and Final count≥5 fill behavior unconfirmed — flagged in source.",
    ],
  },
  {
    version: "v0.9.7",
    date: "May 2026",
    summary: "Remove machine edit feature from A/B comparison harness",
    items: [
      "removed: ✎ edit machine button and all edit mode infrastructure — editMode state, editOpen state, toggleAccent, toggleMachineAccent, applyEdit, applyMachineEdit functions all removed.",
      "removed: machine edit panel (syllable input field + apply button) from comparison harness machine row.",
      "removed: edit syllables button and director edit panel from sing view.",
      "removed: chip onClick/cursor editMode handlers from both director chips (sing view) and machine chips (comparison harness).",
    ],
  },
  {
    date: "May 2026",
    summary: "Lexicon merge collision fix — redeemer machine anchor and ??? source indicators resolved",
    items: [
      "fix: name-residue.json had stale 2-syllable Re/deemer entry that silently overwrote the correct 3-syllable entry in syllable-table.json on merge ({ ...table, ...residue }). Machine anchor was landing on Re (stressIdx=0) instead of deem (stressIdx=1), and machine chips showed ??? (residue source indicator) for all three syllables.",
      "fix: same collision removed for unwedded — residue entry was redundant, correct entry already in syllable-table.json.",
      "fix: zero overlapping keys between syllable-table.json and name-residue.json — merge is now collision-free.",
    ],
  },
  {
    date: "May 2026",
    summary: "Director-authoritative pointing — both paths unified, machine anchor accuracy improved",
    items: [
      "fix: mid-word brackets now derive syllable split directly from bracket boundaries — Re[deem]er gives Re/deem/er without needing the lexicon (parseBracketWord).",
      "fix: parseTruthLines was discarding the director syllable split — rawSylls from parseBracketWord now used directly for chip display instead of re-calling syllabifyWithSource.",
      "fix: paraToPointerLine (docx path) now derives syllable split from underline boundaries — same director-authoritative logic as the bracket path, no lexicon needed for mid-word underlines.",
      "fix: point ▸ button guarded until lexicon loads — prevents wordFromDisplay receiving null lexicon and falling to rule engine.",
      "refactor: both pointing paths (bracket textarea and docx underline) unified through shared syllabifyWithDirectorMark function — pointing bugs now have one location to fix.",
      "fix: machine column in autoEncodeLines reuses truth syllable boundaries (same word shape as director); stressIdx mapped by syllable text match not numeric index — fixes Resur[rec]tion machine anchoring on 'tion' instead of 'rec'.",
      "fix: preserve A/B comparison window on re-point — harness no longer closes when Point Verses is clicked while watching the comparison.",
      "fix: applyMachineEdit re-runs autoAccentLine after parsing — no-op apply no longer strips machine accent marks.",
      "fix: lexicon audit — added incarnate, almighty, endured, desired, incarnation, unwedded, habitation, appeared; fixed enlighten syllabification.",
      "fix: BPM slider step changed from 1 to 10.",
    ],
  },
  {
    version: "v0.9.3",
    date: "May 2026",
    summary: "STOP filter: whole-word guard — syllable fragments no longer filtered",
    items: [
      "fix: STOP filter now guards on s.single before matching. Previously, any stressed syllable whose text happened to spell a STOP word was filtered out as a function word — even when it was a syllable fragment inside a polysyllabic content word. Example: 'in' from 'incense' (in·cense, stress on 'in') was incorrectly blocked, causing the machine to anchor on 'sight' instead of 'in' for 'in Thy sight as incense'. The fix: STOP.has() is only applied when s.single===true, i.e. the syllable IS the whole word.",
      "note: other affected cases include any word whose first (stressed) syllable text happens to match a STOP entry — e.g. 'or' from 'glory', 'as' from 'Pascha', 'he' from 'heaven', 'by' from 'Byzantine'. All of these are now correctly passed through as anchor candidates.",
      "note: the fix is applied at both STOP filter sites — autoAccentLine (component-scoped) and applyPhraseAccent inside autoEncodeLines (module-scoped). Both now use !(s.single && STOP.has(s.text.toLowerCase())) instead of !STOP.has(s.text.toLowerCase()).",
    ],
  },
  {
    version: "v0.9.2",
    date: "May 2026",
    summary: "Tone 2 rotation bug fix — A fires once only, then B·C·D cycle",
    items: [
      "fix: Tone 2 phrase rotation corrected per Drillock & Ealy tutorial p.1: 'The first phrase (A) is only used for the first textual line of the sticheron. Phrases B, C, and D are then sung in rotation.' Previous implementation cycled A·B·C·D·A·B·C·D which is wrong for any sticheron longer than 5 lines.",
      "fix: ROT_DEFS[2] changed from a flat array to a function: i=0 → A, i≥1 → ['B','C','D'][(i-1)%3]. 9-line example: A B C D B C D B Final. Matches tutorial exactly.",
      "fix: phraseForLine() and blockLinePhrase() updated to accept either an array or a function as the rotation argument. Tones 1 and 3 continue using arrays; Tone 2 uses a function.",
      "fix: Tone 2 preset line 5 (index 4) relabeled from 'A' to 'B' — the hand-pointed 'Come let us worship' sticheron was also using the wrong phrase label on that line.",
      "note: the corpus anomalies previously documented as 'Phrase A two-mark long lines' and 'Phrase B two-mark anomalies' in the LIC framing are now correctly explained — those were Phrase C lines (inton:true) that were mislabeled under the wrong rotation. The corpus analysis in tone_trainer_tone2_analysis.md should be updated to reflect the corrected labels.",
    ],
  },
  {
    version: "v0.9.1",
    date: "May 2026",
    summary: "Tone 3 Final Phrase — cad1 two-part cadence fix",
    items: [
      "fix: Tone 3 Final Phrase first anchor (Part 1 cadence) now renders as cad1 role — mi(H)·do(Q)·re(Q) — instead of falling through as reciting fa(Q). Closes the known gap documented in v0.9.0.",
      "fix: pointLine() — new cad1 split path: scope-guarded to activeTone===3 && phrase==='Final' && two accent marks present. Finds anchor1 (second-to-last stressed syllable, same monosyllable backup as anchorIndex), splits body/cad1/cad, distributes Part 1 figure ['mi','do','re'] over cad1 syllables and Part 2 figure (def.cad) over cad syllables.",
      "fix: lineToNotes() — cad1 duration case: anchor (first cad1 syllable) = H (half note); all subsequent cad1 syllables = Q (quarter note). Matches Drillock & Ealy Part 1 figure mi·H do·Q re·Q.",
      "feat: cad1 chip color — rgba(122,36,24,.05), lighter burgundy distinct from cad (Part 2). Info bar legend conditionally shows 'cad. pt. 1' / 'cad. pt. 2' pills when Tone 3 is active; other tones show 'cadence' as before.",
      "feat: buildComparison() extended — now accepts phDefs and activeTone params; computes role/pitches/dur per syllable via pointLine() and includes them in comparison output. firstAnchorMatchCount added to summary stats.",
      "feat: Export JSON payload extended — role, pitches, dur (normalised), machineRole, machinePitches, machineDur added per syllable when phDefs present. truthFirstAnchorIdx, machineFirstAnchorIdx, firstAnchorMatch added per line.",
      "feat: tools/snapshot_comparison.mjs — programmatic pre/post diff tool. Reads a .docx, runs parseTruthLines+autoEncodeLines+buildComparison in Node (no browser), writes extended JSON. npm run snapshot entry added to package.json.",
      "test: pre-patch snapshots captured — pre_cad1_t3_feb.json (Meatfare Sunday, 71 lines, 14 blocks), pre_cad1_t3_may.json (4th Sunday of Pascha, 80 lines, 15 blocks). Scope guard verified: Tone 1/2 code path zero-blocks on same fixtures.",
    ],
  },
  {
    version: "v0.9.0",
    date: "May 2026",
    summary: "Tone 3 — Common Chant Obikhod, two-phrase rotation",
    items: [
      "feat: Tone 3 (Common Chant) fully implemented — two rotating phrases (A and B) plus Final, with correct Drillock & Ealy pitch figures and cadence distributions. Verified against tutorial PDF, OCA unison MP3 (librosa.pyin), and 164-instance corpus from two OCA service .docx fixtures.",
      "feat: PH_DEFS[3] — Phrase A: recite=fa, cad=[fa,do,mi] (3-note figure; do fills extra syllables per tutorial). Phrase B: recite=fa, cad=[mi,re,do] with dotted-half anchor. Final: recite=fa, two-part cadence [mi,do,re,mi,fa,re,do] using two internal accents.",
      "feat: ROT_DEFS — new module-level constant keying rotation arrays by tone number. Tones 1 and 2 keep [A,B,C,D]; Tone 3 uses [A,B]. phraseForLine() now accepts active rotation as parameter.",
      "feat: DH = H * 1.5 (dotted half note) added to lineToNotes(). Applied to Phrase B cadence anchor via anchorDH:true flag on PH_DEFS[3].B. Tutorial-confirmed; audio analysis shows ~1.3s at H_ref≈0.76s.",
      "feat: Final Phrase two-anchor support in autoAccentLine — when activeTone===3 and phrase==='Final', marks both the last internal accent (second anchor) and the second-to-last (first anchor), matching the 31/31 two-mark corpus pattern.",
      "feat: Tone 3 preset sticheron — 'By Thy Cross, O Christ our Savior' (Resurrectional 1, 5 lines: A B A B Final). Hand-verified against OCA corpus accents.",
      "note: First Final anchor (Part 1 cadence mi-do-re) not yet rendered as cad role — falls in body as reciting fa(Q). Known gap; full two-part cadence rendering requires new cad1 role type. Deferred to future session. Second anchor and trailing cadence render correctly.",
    ],
  },
  {
    version: "v0.8.0",
    date: "May 2026",
    summary: "Tone 2 — Common Chant Obikhod, full phrase support",
    items: [
      "feat: Tone 2 (Common Chant) fully implemented — all five phrases (A B C D Final) with correct Drillock & Ealy pitch figures, intonation rules, prep notes, and cadence distributions.",
      "feat: Tone selector — pill buttons 1–8 above the textarea. Tones 1 and 2 active; 3–8 disabled pending implementation.",
      "feat: PH → PH_DEFS keyed by tone number. Active phrase table derived from activeTone state: const PH = PH_DEFS[activeTone]. All downstream functions (pointLine, anchorIndex, distribute, lineToNotes) are tone-agnostic and required no changes.",
      "feat: Phrase A Tone 2 — reciting re, no intonation (inton:false), cadence fa→mi→re. Verified against OCA corpus (20 instances, all single-mark anchor only) and Tone 2 Obikhod unison recording (fa=H, mi=Q, re=H confirmed).",
      "feat: Phrases B and D — cadence di→re (di = chromatic raised do, new pitch). Both notes half notes. Verified from recording (di=H, re=H).",
      "feat: Phrase C — reciting re, intonation true, prep ti (NOT la — la is the soprano harmony note; unison melody descends to ti). Cadence lands on do. Critical correction from audio analysis: SATB score showed soprano 'la' which is a harmony note a third above the melody.",
      "feat: Final Phrase — prep ti, cadence do→re→do→ti (ti = whole note). Pre-slur rule: when the syllable immediately before the prep is a single accented monosyllable, it receives pitches [re,ti] as two quarter notes. Confirmed from OCA corpus: 'Hear me O Lord' and 'Pray to Christ God for us all!'",
      "feat: New solfège pitches di (semitone above do, offset +1), fa (perfect fourth, offset +5), sol (perfect fifth, offset +7) added to OFF table and PITCH_SCALE.",
      "feat: autoAccentLine intonation condition changed from hardcoded (phrase==='A'||phrase==='C') to PH_DEFS[activeTone][phrase].inton — so Tone 2 Phrase A correctly gets no intonation mark. Same fix applied to applyPhraseAccent in autoEncodeLines.",
      "feat: docx ingest 'point ▸' guard updated from block.tone!==1 to !PH_DEFS[block.tone] — Tone 2 blocks now pointable.",
      "feat: Tone 2 preset sticheron — 'Come, let us worship the Word of God' (Resurrectional 1, 6 lines). Hand-verified against OCA Feb 8 2026 service text.",
      "feat: Subtitle and info bar prep legend update dynamically with activeTone.",
    ],
  },
  {
    version: "v0.7.0",
    date: "May 2026",
    summary: "Info bar, UI polish, lexicon fixes, bug fixes",
    items: [
      "feat: persistent info bar — always visible above comparison harness. Color-coded legend pills match chip roleBg (reciting=blue-grey, prep=amber, cadence=burgundy). Mode badge reflects singWhich live in A/B mode.",
      "feat: Director vs. Machine toggle in info bar; pitch height hidden in A/B mode; info bar now renders above comparison harness (correct render order).",
      "feat: Point button renamed to 'Point Verses'; Point no longer auto-opens comparison window.",
      "feat: pitch selector extended — F (174.61 Hz) and G (196.00 Hz) added below A. Full range: F·G·A·B·C·D·E.",
      "feat: BPM slider greyed out and disabled while playing (playingLine !== null). Cursor becomes not-allowed; opacity 0.4.",
      "fix: applyEdit now re-runs autoAccentLine after syllabification change — previously zeroed all accents, causing anchor to fall back to last syllable even with no text changes.",
      "fix: 'edit syllables' button hidden in Director Pointing mode — edit panel would silently discard director bracket marks.",
      "fix: isPlaying ReferenceError (local variable only in harness map) replaced with playingLine !== null at component level.",
      "fix: incense lexicon stressIdx 1→0 (noun form IN-cense, not verb in-CENSE).",
      "fix: arise syllabification 3→2 (a·ri·se → a·rise, per CMU AH0 R AY1 Z).",
      "fix: thy and thine added to STOP list (archaic possessives = your/your — same category as my, his, our already in STOP).",
      "research: polysyllabic final word trap analyzed in depth using JSON fixture export. Director anchor on 'Da' (David) confirmed; 'announced' trailing behavior documented. Liturgical -ed syllabification discussion — only genuinely syllabic -ed words warrant lexicon changes. aloud/himself accepted as Director Pointing territory.",
    ],
  },
  {
    version: "v0.6.2",
    date: "May 2026",
    summary: "Pitch height mode — chip height and text position reflect solfege pitch",
    items: [
      "feat: pitch height toggle in legend row. Off by default. When on: chip height scales with pitch (la=36px base, +10px per scale degree → re=66px). Chips bottom-align so taller chips extend upward, creating a melody contour.",
      "feat: in pitch height mode, syllable text rises to the top of each chip (rises and falls with pitch). The solfege label stays pinned at the bottom.",
      "feat: in pitch height mode, accent mark (´) floats above the chip border via position:absolute on the chip container (overflow:visible). Phrase block top padding increases to 1.4rem to give accent marks headroom.",
    ],
  },
  {
    version: "v0.6.1",
    date: "May 2026",
    summary: "Edit mode toggle — clean singing view by default, editing gated",
    items: [
      "feat: global edit mode toggle (✎ edit button in controls bar). Off by default — singing view is clean. When on: chip click-to-accent, edit syllables, and machine row editing are all enabled.",
      "feat: comparison harness machine row is editable in edit mode — click a machine chip to toggle its accent, or use 'edit syllables' to re-break a line. Changes recompute the comparison immediately.",
    ],
  },
  {
    version: "v0.6.0",
    date: "May 2026",
    summary: "Tutorial-faithful rhythm — quarter/half/whole note durations + adjustable BPM",
    items: [
      "feat: lineToNotes now uses tutorial-specified note values. Reciting tone = quarter notes. Intonation accented syllable = half note; unaccented lead-ins = quarter. Prep = quarter. Cadence anchor = half note; middle cadence syllables = quarter; last cadence syllable = half (whole for Final Phrase). Verified against Drillock & Ealy.",
      "feat: adjustable tempo — range slider 40–120 BPM (default 80). Half note = 1 beat per tutorial. At 80 BPM: quarter = 0.375s, half = 0.75s, whole = 1.5s.",
      "feat: multi-pitch melisma durations divide the syllable's full note value evenly across pitches.",
      "feat: inter-phrase gap in Sing all scales with BPM (1 quarter note of silence).",
    ],
  },
  {
    version: "v0.5.5",
    date: "May 2026",
    summary: "Per-row sing buttons — director and machine rows each have their own ▶",
    items: [
      "feat: each row (director / machine) in the comparison harness now has its own ▶ play button, right-aligned. Clicking a row's ▶ plays that line in that version — no need to change the global toggle first.",
      "feat: Sing all in the harness header continues to use the Sing director / Sing machine toggle for batch playback.",
      "feat: playingWhich state tracks which version (director/machine) is currently sounding — amber row highlight follows the actual playing row, not the global toggle.",
      "change: per-line Sing button removed from line header (superseded by the per-row buttons).",
    ],
  },
  {
    version: "v0.5.4",
    date: "May 2026",
    summary: "Comparison mode becomes the full singing view — sung display hidden, per-line Sing added",
    items: [
      "feat: sung display (phrase blocks at bottom) hidden when comparison harness is active — eliminates scrolling and duplicate information.",
      "feat: 'Sing all' button added to comparison harness header — plays director or machine version per the sing toggle.",
      "feat: per-line '▶ Sing' button in each comparison line header.",
      "feat: playing line highlights gold with dark-red left bracket in comparison harness, matching the sung display behavior.",
      "feat: the singing row (director or machine) gets an amber highlight while playing so the singer knows which version they're hearing.",
    ],
  },
  {
    version: "v0.5.3",
    date: "May 2026",
    summary: "show source: uniform chip height, hover legend, comparison harness, auto-source fix",
    items: [
      "fix: 'auto' source tag (non-bracketed syllables in TRUTH mode) excluded from indicators — was causing false ~ flood after Analyze & point with encoded text.",
      "fix: chips now always reserve space for the source indicator row (uniform height). Previously chips grew taller when ? or ~ appeared, causing layout shift.",
      "feat: source indicators (? / ~) now appear on machine-row chips in the A/B comparison harness when 'show source' is on.",
      "feat: 'show source' toggle now has a hover legend explaining no-marker = CMU-confirmed, ? = unconfirmed best-guess, ~ = rule fallback.",
    ],
  },
  {
    version: "v0.5.2",
    date: "May 2026",
    summary: "STOP-filter on anchor candidates — 56% → ~88% projected anchor match",
    items: [
      "fix: autoAccentLine now filters STOP-list words from anchor candidates before applying the backup rule. The lexicon marks function words (the, from, or, as, this, he, our, etc.) as stressed, which previously caused the backup rule to land on them instead of stepping past. The STOP list is the correct filter: its membership is defined by grammatical function, not by test failures.",
      "note: me and thee are NOT in the STOP list and remain valid anchor candidates — the Final Phrase anchor on 'me' is unaffected.",
      "note: same filter applied to applyPhraseAccent inside autoEncodeLines, so the comparison harness machine column improves equally.",
      "note: 6 remaining non-STOP misses (polysyllabic final words: arise, aloud, announced, himself; lexicon data error: incense; thine not in STOP list) are separate concerns.",
    ],
  },
  {
    version: "v0.5.1",
    date: "May 2026",
    summary: "Phrase-structural AUTO accent engine — replaces word-stress heuristic",
    items: [
      "fix: AUTO mode now places exactly 1-2 accent marks per phrase using tutorial phrase logic, not word-stress marking. Anchor = last internally stressed syllable (existing rule). Intonation = first stressed syllable (Phrases A and C only). Everything else unaccented.",
      "fix: autoEncodeLines (machine column in comparison harness) uses the same phrase-structural engine — comparison now reflects the correct machine logic.",
      "note: accuracy ceiling is lexicon quality. Known cases: 'me' is lexicon-stressed so short Phrase B lines may anchor one syllable late; 'when' as a phrase opener may land the intonation one word early. These are lexicon improvement targets, not logic errors.",
    ],
  },
  {
    version: "v0.5.0",
    date: "May 2026",
    summary: "Feature B: encoding-aware text field + A/B comparison harness",
    items: [
      "feat: the 'your own text' textarea is now encoding-aware. Paste text with [accent] marks + | line-ends + // → TRUTH mode: brackets are authoritative over the lexicon. Plain text → AUTO mode: lexicon + heuristic unchanged.",
      "feat: both whole-word ([Lord], [hear]) and mid-word (Re[ceive], up[on]) bracket cases handled. Mid-word brackets map to syllables via vowel-nucleus overlap (SYLLABIFIER_SPEC §7).",
      "feat: 'point ▸' on an ingested sticheron now populates the textarea with the block's encoded text, making it the single channel for both ingested and hand-typed text.",
      "feat: comparison harness — after analyzing encoded text, a side-by-side director vs. machine view appears below the pointer. Anchor-level (headline) and syllable-level (detail) agreement metrics shown.",
      "feat: sing toggle in the harness — switch between truth and machine version to hear what the wrong accent sounds like.",
      "feat: JSON export — downloads per-line, per-syllable comparison detail (truth accents, machine accents, anchor-match bool) for the improvement loop.",
    ],
  },
  {
    version: "v0.4.0",
    date: "May 2026",
    summary: "Lexicon-driven syllabification + stress — replaces the first-syllable heuristic",
    items: [
      "feat: syllabification and accent placement now lookup-first from a generated lexicon (CMU Pronouncing Dictionary + TeX hyphenation, built at build-time from the OCA service corpus). 1,151 resolved words + 68 best-guess residue entries. Rules remain as a last-ditch fallback for off-table words.",
      "feat: 'show accent source' toggle in the pointing controls (off by default). When on, each syllable shows a small indicator: no marker = CMU-confirmed table entry; ? = unconfirmed residue (best-guess stress, director review pending); ~ = rule fallback (off-table).",
      "note: 68 residue words (proper names, liturgical-technical terms) carry best-guess stress marked confirmed:false. Used now; director corrections improve accuracy by updating name-residue.json — no re-wiring needed.",
      "note: lexicon served from public/lexicon/ (same pattern as psalter/scripture), fetched at component mount.",
    ],
  },
  {
    summary: "Per-sticheron encoding & context — simplified to [accent] only",
    items: [
      "change: dropped the *accent* option — encoding is now always [accent] (more readable, unambiguous to parse). Removed the marker toggle.",
      "feat: each sticheron now reveals its OWN encoding inline (Show encoding ▸) with a per-block Copy button, instead of one combined panel at the bottom.",
      "feat: expanding a block shows the paragraph immediately before and after it (the bracketing V. verses / Glory etc.), so a singer with the paper service can locate the sticheron in context.",
      "remove: bottom 'Show text encoding' / copy-all panel (the interleaved service made a single combined copy unhelpful).",
      "note: underlined text is sung to the tone (incl. the 'Lord, I call' framing, which is sung though not a movable sticheron); 'V.' verses are read, not sung — underline remains the reliable sung/read signal.",
    ],
  },
  {
    version: "v0.3.0",
    date: "May 2026",
    summary: "Group docx ingest by sticheron — collapsed picker, whole-block pointing with rotation",
    items: [
      "feat: ingest segments the document into stichera (runs of underlined paragraphs, closing on the line after //), not individual lines.",
      "feat: collapsed incipit picker; expand to see lines with phase labels; block-level 'point ▸' loads the whole sticheron with A·B·C·D·…·Final rotation and scrolls to the pointer.",
      "feat: blocks with no // flagged suspect (hidden unless 'show all'); non-underlined paragraphs shown as context under 'show all'.",
    ],
  },
  {
    version: "v0.2.0",
    date: "May 2026",
    summary: "Service .docx ingest — extract OCA underline-marked accents as copy-paste truth",
    items: [
      "feat: Open a day's OCA service .docx in the browser (JSZip, fully client-side — nothing uploads). Extracts underlined accents and reconstructs the verse with marks intact.",
      "feat: Per-verse tone detection — nearest heading, flagging inherited tones.",
    ],
  },
  {
    version: "v0.1.0",
    date: "May 2026",
    summary: "Initial Tone 1 Obikhod stichera pointing trainer",
    items: [
      "feat: syllabify a line, mark accents, map each syllable to its reciting-tone / prep / cadence pitch, and sing via Web Audio.",
      "feat: corrected pointing engine — cadence anchors on the last INTERNAL accent with one-syllable-final-word backup (Drillock & Ealy). Phrase B cadence do→re→ti; prep-on-ti specific to Phrase A.",
    ],
  },
];

// ── PITCH / SOLFEGE ───────────────────────────────────────────────────────────
// Semitone offset from moveable "do". Tone 1 home base is "re" (one step above do).
// di = chromatic raised do (one semitone above do) — used in Tone 2 Phrases B and D.
// fa = perfect fourth above do — used in Tone 2 Phrase A cadence.
// sol = perfect fifth above do — in scale for completeness; not yet used in cadences.
const OFF = { la: -3, si: -2, ti: -1, do: 0, di: 1, re: 2, mi: 4, mi_low: 4, fa: 5, sol: 7 };
const DO_OPTIONS = [
  { label: "Eb", hz: 311.13 },  // one step below canonical — lower option
  { label: "F",  hz: 349.23 },  // F4 — Tone 1 canonical (OCA score, F major)
  { label: "G",  hz: 392.00 },  // one step above canonical — higher option
];

// ── PHRASE DEFINITIONS (keyed by tone number) ────────────────────────────────
// recite : reciting-tone pitch
// inton  : phrase opens with an intonation note on the reciting pitch
// prep   : preparatory note before the cadence
// cad    : cadence pitch figure, hung on the last INTERNAL accent
//
// Tone 1 (Drillock & Ealy, corrected):
//  - Phrase B cadence is do → re → ti (hold do, up a tone to re, down a third to ti)
//  - prep on ti belongs to Phrase A specifically (not a general rule)
//  - anchor is the last INTERNAL accent (see pointLine), not merely the last accent
//
// Tone 2 (Obikhod Common Chant, verified against OCA corpus + unison recording):
//  - Phrase A: no intonation, cadence fa→mi→re (fa=H, mi=Q, re=H — audio confirmed)
//  - Phrases B+D: cadence di→re (di = chromatic #do; both half notes)
//  - Phrase C: inton true, prep TI (not la — la is soprano harmony; unison uses ti),
//              cadence lands on do. SATB soprano 'la' is a harmony note, not the melody.
//  - Final: prep ti, cadence do→re→do→ti (ti=whole note)
//  - Pre-slur rule: see pointLine() — a stressed monosyllable before the prep
//    receives [re,ti] two quarter notes. Confirmed: "Hear me O Lord", "Christ God".
const PH_DEFS = {
  1: {
    // Tone 1 Common Chant (Obikhod) — L'vov-Bakhmetev, verified from Drillock & Ealy
    // tutorial and OCA service scores. June 2026 deep-dive session.
    // cadDurs blocks encode per-phrase duration logic; cadDuration() reads these.
    // Rhythmic balancing (dotted halves, extended whole notes) requires the
    // rhythmic grouping engine (not yet built) — machine defaults to plain H.
    A: {
      recite: "re", inton: true, prep: "ti", cad: ["do"],
      cadDurs: {
        // Single pitch cadence — no melisma possible (only one pitch).
        // Anchor: H. Fills: Q. Close: H default.
        // H· and W driven by rhythmic balancing (rhythmic grouping engine, TBD).
        // Pre-slur: scoped to Tone 1 Phrase A only — see pointLine() guard.
        anchor:    "H",
        fillPitch: "do",
        fillDur:   "Q",
        closeDur:  "H",
        wholeNote: null,   // unconfirmed — rhythmic grouping engine needed
        melisma:   null,   // N/A — single pitch figure
      },
    },
    B: {
      recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"],
      cadDurs: {
        // Score-verified: anchor do(H), fills re(H at count=3 / Q at count≥4),
        // close ti(H) default. Melisma do·re on anchor at count=2.
        // Whole note / dotted half on close driven by rhythmic balancing (TBD).
        anchor:           "H",
        fillPitch:        "re",
        fillDur:          { lte3: "H", gte4: "Q" },
        closeDur:         "H",
        melismaThreshold: 3,   // count<3 → do·re melisma on anchor syllable
        wholeNote:        null, // rhythmic grouping engine needed
      },
    },
    C: {
      recite: "re", inton: true, prep: null, cad: ["do", "ti"],
      cadDurs: {
        // Score-verified: anchor do(H), fills do(H at count≤3 / Q at count≥4),
        // close ti(H) default. Fill pitch stays on do (same as anchor) throughout.
        // No melisma observed. Whole note / dotted half driven by rhythmic balancing (TBD).
        anchor:    "H",
        fillPitch: "do",
        fillDur:   { lte3: "H", gte4: "Q" },
        closeDur:  "H",
        melisma:   null,   // none observed — two-pitch figure distributes cleanly
        wholeNote: null,   // rhythmic grouping engine needed
      },
    },
    D: {
      recite: "do", inton: false, prep: null, cad: ["ti", "do", "re", "do", "ti"],
      // TWO-ACCENT architecture — anchor (ti, pos 1) + secondary accent (re, pos 3).
      // Generic distribute() is INCOMPATIBLE — dedicated per-phrase logic required.
      // Melisma collapses adjacent positions onto accented syllables when count<5.
      // Melisma placement is accent-driven (director/machine marks both positions).
      // Score-verified duration rules:
      //   count=3: ti·do(H mel) · re·do(H mel) · ti(H)
      //   count=4: ti(H) · do(H) · re·do(H mel) · ti(H or W)
      //   count=5: ti(H) · do(H) · re(H) · do(H) · ti(H or W) — exact fit
      //   count=6: ti(H) · do(H) · re(H) · do(Q) · do(Q) · ti(H or W)
      //   count=7: ti(H) · do(Q)×n · re·do(H mel) · ti(H)
      // Structural position notes always H; extra fills Q.
      // Provisional: period '.' and '//' marker on close → W (empirical, not tutorial-confirmed).
      cadDurs: {
        twoAccent:          true,
        structuralDur:      "H",   // all structural position notes
        fillDur:            "Q",   // extra fills beyond count=5
        melismaThreshold:   5,     // count<5 → collapse positions into melismas
        wholeNote:          "period_or_doubleslash", // provisional — see note above
      },
    },
    Final: {
      recite: "re", inton: false, prep: null, cad: ["do", "ti", "la"],
      // Score-verified: la close ALWAYS W (tutorial-stated, no exceptions observed).
      // Structural melisma at count<3 preserves full do·ti·la figure.
      // count=2: do·ti(H mel) · la(W)
      // count=3: do(H) · ti(H) · la(W) — exact fit
      // count≥5: do(Q) second position after anchor; ti fills remainder
      // Anchor duration (H/H·/W) and ti fill duration (H/Q) driven by rhythmic
      // balancing and available syllable count — rhythmic grouping engine needed.
      // Pre-slur: N/A — no prep note in Tone 1 Final Phrase.
      cadDurs: {
        closeDur:                "W",    // la always W — tutorial-confirmed
        melismaThreshold:        3,      // count<3 → do·ti melisma on anchor
        secondPositionThreshold: 5,      // count≥5 → do(Q) second position after anchor
        fillPitch:               "ti",   // remaining fills always on ti
        fillDur:                 { lte5: "H", gte6: "Q" }, // strong inference
        anchor:                  "H",   // default; H· or W via rhythmic grouping engine
        preslur:                 null,   // N/A — no prep note
      },
    },
  },
  2: {
    // Tone 2 cadence duration rules — score-verified from L'vov-Bakhmetev Obikhod
    // and Drillock & Ealy tutorial. Each phrase carries a cadDurs block encoding
    // per-phrase duration logic. cadDuration() reads these to produce correct note
    // values. Tones without cadDurs fall through to the generic lineToNotes handler.
    A: {
      recite: "re", inton: false, prep: null, cad: ["fa", "mi", "re"],
      cadDurs: {
        // fa(H) always on anchor. mi fills: H when count≤3, Q when count≥4.
        // re close: H· (dotted half) when count≤3, H when count≥4.
        // Anchor carries fa·mi melisma when count<3 (count=1: fa·mi·re; count=2: fa·mi).
        anchor:    "H",
        fillPitch: "mi",
        fillDur:   { lte3: "H",  gte4: "Q"  },
        closeDur:  { lte3: "H·", gte4: "H"  },
        melismaThreshold: 3,  // anchor carries melisma when count < threshold
        wholeNote: null,      // no whole note rule confirmed for Phrase A
      },
    },
    B: {
      recite: "re", inton: false, prep: null, cad: ["di", "re"],
      cadDurs: {
        // di(H) always on anchor. di fills: H when count=3, Q when count≥4.
        // re close: W when single word fills entire cadence, else H.
        anchor:    "H",
        fillPitch: "di",
        fillDur:   { lte3: "H", gte4: "Q" },
        closeDur:  "H",
        wholeNote: "single-word",  // fires when one word fills entire cadence
      },
    },
    C: {
      recite: "re", inton: true, prep: "ti", cad: ["do"],
      cadDurs: {
        // do(H) anchor. do fills: H when count=2 (single-word), Q when count≥3.
        // do close: W when cadence spans multiple words, else H.
        anchor:    "H",
        fillPitch: "do",
        fillDur:   { lte2: "H", gte3: "Q" },
        closeDur:  "H",
        wholeNote: "multi-word",   // fires when cadence spans more than one word
      },
    },
    D: {
      recite: "do", inton: false, prep: null, cad: ["di", "re"],
      cadDurs: {
        // Same figure as Phrase B but reciting on do. Same duration rules.
        // Whole note trigger: OPPOSITE to B — fires on multi-word cadence.
        anchor:    "H",
        fillPitch: "di",
        fillDur:   { lte3: "H", gte4: "Q" },
        closeDur:  "H",
        wholeNote: "multi-word",
      },
    },
    Final: {
      recite: "re", inton: false, prep: "ti", cad: ["do", "re", "do", "ti"],
      cadDurs: {
        // do anchor always W. ti close always W.
        // re and middle do: H when they have own syllable (count≥4).
        // Anchor melisma when count<4: count=2 → do·re·do on anchor; count=3 → do·re on anchor.
        // Pre-slur: re(H·)·ti(Q) when no reciting tone precedes; re(Q)·ti(Q) normally.
        // count≥5: unconfirmed — flag with rubric note, treat as count=4 pattern.
        anchor:    "W",
        closeDur:  "W",
        fillDur:   "H",  // re and middle do are H when separated
        melismaThreshold: 4,       // anchor carries melisma when count < 4
        unconfirmedAbove: 4,       // flag count > 4 as unconfirmed in rubric
      },
    },
  },
  3: {
    // Tone 3 Common Chant — two rotating phrases (A and B) only, no C or D.
    // All three phrases share reciting tone fa. Phrase identity is determined
    // solely by cadence, not reciting pitch.
    // Source: Drillock & Ealy tutorial + 164-instance OCA corpus (2 services).
    A: {
      recite: "fa", inton: false, prep: null,
      // 3-note figure: anchor=fa(H), middle fills=do(Q each), final=mi(H).
      // Tutorial explicit: "unaccented syllables between accented and final are sung on do."
      // Must be ['fa','do','mi'] not ['fa','mi'] — distribute() repeats penultimate (do),
      // giving correct do fill for extra syllables; ['fa','mi'] would repeat fa (wrong).
      cad: ["fa", "do", "mi"],
    },
    B: {
      recite: "fa", inton: false, prep: null,
      // anchorDH:true — cadence anchor is a DOTTED HALF NOTE (1.5×H), new for Tone 3.
      // Audio-confirmed: anchor ~1.3s at H_ref≈0.76s, dH_ref≈1.14s.
      // Long-cadence rule (>3 cad syllables): dH→H, extras ride on mi (distribute handles).
      cad: ["mi", "re", "do"], anchorDH: true,
    },
    Final: {
      recite: "fa", inton: false, prep: null,
      // Two-part cadence. Tutorial: mi(H) do(Q) re(Q) | mi(Q) fa(Q) re(H) do(W).
      // Director always marks two internal accents (31/31 corpus instances).
      // anchor (anchorIndex) = last internal accent = second mi (position 3 in figure).
      // First mi (position 0) currently falls in body as reciting fa(Q) — known gap v0.9.0.
      cad: ["mi", "do", "re", "mi", "fa", "re", "do"],
    },
  },
};
// Per-tone phrase rotation. Tones 1 and 2 use the standard 4-phrase rotation;
// Tone 3 uses only A and B (no C or D). Add entries here as tones are added.
// ROT_DEFS: keyed by tone number. Each entry is either:
//   - an array: simple cycle (e.g. Tone 1, 3)
//   - a function (i, total) => phrase: for tones with non-uniform rotation
//
// Tone 2 rule (Drillock & Ealy tutorial p.1):
//   "The first phrase (A) is only used for the first textual line of the sticheron.
//    Phrases B, C, and D are then sung in rotation."
//   9-line example: A B C D B C D B Final
//   i=0 → A; i≥1 → BCD cycle: ["B","C","D"][(i-1) % 3]
//
// CONTRACT for rotation functions: the caller (phraseForLine / blockLinePhrase)
// always handles the Final case before invoking the function, so rotation
// functions only ever receive non-final line indices. Do not add Final handling
// inside a rotation function — it would be dead code.
const ROT_DEFS = {
  1: ["A", "B", "C", "D"],
  2: (i, _total) => i === 0 ? "A" : ["B","C","D"][(i - 1) % 3],
  3: ["A", "B"],
};
// phraseForLine: accepts active rotation (array OR function) as third argument.
// Last line is always Final.
const phraseForLine = (i, total, rot) => {
  if (i === total - 1) return "Final";
  if (typeof rot === "function") return rot(i, total);
  return rot[i % rot.length];
};
const PNAME = { A: "Phrase A", B: "Phrase B", C: "Phrase C", D: "Phrase D", Final: "Final Phrase" };

// ── PITCH HEIGHT (sung display) ───────────────────────────────────────────────
// la is the lowest pitch in cadences. Each scale step adds CHIP_STEP_H px.
// di sits between do and re (chromatic); fa and sol extend the upper range for Tone 2.
const PITCH_SCALE = ["la", "ti", "do", "di", "re", "mi", "fa", "sol"];
const CHIP_BASE_H = 36;   // la = 36px
const CHIP_STEP_H = 10;   // +10px per scale degree → re = 66px
const chipH = (sol) => CHIP_BASE_H + Math.max(0, PITCH_SCALE.indexOf(sol)) * CHIP_STEP_H;

// Chip width per duration key — matches sandbox DUR_SEC pixel equivalents
// Widths are BPM-independent visual units (not seconds)
const CHIP_W = { Q: 30, H: 50, "H·": 68, W: 90, "W·": 120 };
// CHIP_W_RECITE removed — chip width always derived from durKey via CHIP_W.
const CHIP_GAP = 10;      // gap between chips in px
const CHIP_MELISMA_GAP = 1; // tight gap between melisma sub-chips

// Bass pitch order for chip height (ascending concert pitch with do=Bb)
// re(C3) < mi(D3) < fa(Eb3) < sol(F3) < la(G3)
// Bass pitch order — ascending by sounding frequency in the default register.
// ── BASS/TENOR CHIP HEIGHT — per-phrase frequency sort ───────────────────────
// Chip heights are computed per phrase from the unique sounding pitches in that
// phrase, sorted by actual sounding frequency. Lower frequency = taller chip.
// Fixed range: H_VOICE_MIN (shortest chip) to H_VOICE_MAX (tallest chip), linear.
// This correctly handles per-phrase octaveDiv overrides (e.g. Tone 1 Final bass)
// without any index arithmetic or global pitch ordering assumptions.
const H_VOICE_MIN = 24;   // shortest chip (highest sounding pitch in phrase)
const H_VOICE_MAX = 72;   // tallest chip  (lowest sounding pitch in phrase)

// TENOR_OCTAVE_DIV: all tenor pitches at div-2 (one octave below soprano).
// si = raised 6th (B♮ in D minor), offset -2 semitones from do.
const TENOR_OCTAVE_DIV = {
  la: 2, si: 2, ti: 2, do: 2, di: 2, re: 2, mi: 2, fa: 2, sol: 2,
};

// buildVoiceHeightMap: given the unique sounding pitches in a phrase and a
// frequency function, returns { pitch → chipHeight } sorted by frequency.
// Lowest frequency → H_VOICE_MAX; highest frequency → H_VOICE_MIN.
const buildVoiceHeightMap = (pitches, hzFn, phraseRules) => {
  const unique = [...new Set(pitches)];
  const sorted = unique.sort((a, b) => hzFn(a, phraseRules) - hzFn(b, phraseRules));
  const n = sorted.length;
  const map = {};
  sorted.forEach((p, i) => {
    const inv = (n - 1) - i;  // 0 = highest pitch, n-1 = lowest pitch
    const t = n > 1 ? inv / (n - 1) : 0;
    map[p] = Math.round(H_VOICE_MIN + t * (H_VOICE_MAX - H_VOICE_MIN));
  });
  return map;
};

// Tones with score-verified tenor rules. Tenor is suppressed for all other tones.
const TENOR_TONES = new Set([1]);

// Soprano chip height — always above the corresponding alto chip.
// Maps alto pitch through SOPRANO_MAP, then ensures the result sits
// above the alto in the display scale. When the mapped pitch would
// render at or below the alto (e.g. la→do where la=idx0, do=idx2
// but fa=idx6 so la<fa), shift up by one octave worth of steps.
// This mirrors freq_soprano's same-logic audio correction.
// Tones with score-verified soprano rules. Soprano is suppressed for all other tones.
// Add a tone here only after researching the Obikhod score for that tone.
// Tone 1: pure diatonic third above alto — verified against Drillock & Ealy
// Four-Part Harmony tutorial, all 5 phrases, 21/21 notes match SOPRANO_MAP.
const SOPRANO_TONES = new Set([1, 2]);

const chipH_soprano = (altoPitch) => {
  const mapped = SOPRANO_MAP[altoPitch] ?? altoPitch;
  const altoH  = chipH(altoPitch);
  const sopH0  = chipH(mapped);
  return sopH0 > altoH ? sopH0 : sopH0 + PITCH_SCALE.length * CHIP_STEP_H;
};
// The lexicon is fetched from public/lexicon/ at component mount (same pattern
// as psalter/scripture). It merges syllable-table.json (CMU+TeX resolved) and
// name-residue.json (best-guess, confirmed:false). Lookup is by lowercased
// alpha-only key. Falls back to rules when a word is not in the lexicon.
//
// entry.src values: "tex"|"reconciled"|"count-only"|"archaic" = CMU-confirmed
//                   missing src = residue entry (best-guess, confirmed:false)
//                   undefined = rule fallback (not in lexicon at all)
//
// Source indicators for the toggle (shown when showAccentSource is on):
//   (no marker) = CMU-confirmed table entry
//   ?           = unconfirmed residue (best-guess, director review pending)
//   ~           = rule fallback (word not in lexicon)

// ── SYLLABIFIER (rule fallback — used only for words not in the lexicon) ─────
function syllabifyRules(word) {
  const m = word.match(/[A-Za-z']+/);
  if (!m) return [word];
  const core = m[0];
  const lead = word.slice(0, m.index);
  const trail = word.slice(m.index + core.length);
  const lower = core.toLowerCase();
  const isV = (c) => "aeiouy".includes(c);
  const groups = [];
  let i = 0;
  const n = lower.length;
  while (i < n) {
    if (isV(lower[i]) && !(lower[i] === "y" && i === 0)) {
      let j = i;
      while (j < n && isV(lower[j])) j++;
      groups.push([i, j - 1]);
      i = j;
    } else i++;
  }
  if (groups.length <= 1) return [word];
  const breaks = [];
  for (let g = 0; g < groups.length - 1; g++) {
    const vEnd = groups[g][1];
    const nextV = groups[g + 1][0];
    const cc = nextV - vEnd - 1;
    let s;
    if (cc <= 0) s = nextV;
    else if (cc === 1) s = nextV - 1;
    else s = vEnd + 1 + Math.floor(cc / 2);
    breaks.push(s);
  }
  let sylls = [];
  let prev = 0;
  breaks.forEach((b) => { sylls.push(core.slice(prev, b)); prev = b; });
  sylls.push(core.slice(prev));
  if (sylls.length > 1) {
    const last = sylls[sylls.length - 1].toLowerCase();
    if (/^[^aeiou]*e$/.test(last) && !/^[^aeiouy]*le$/.test(last)) {
      sylls[sylls.length - 2] += sylls.pop();
    }
  }
  sylls[0] = lead + sylls[0];
  sylls[sylls.length - 1] += trail;
  return sylls;
}

const STOP = new Set(
  ("the a an of to and in on for with is am are be by at from as us him her them we i you " +
   "he she it our your his my thy thine that this whose whom who which but or nor so yet o").split(/\s+/)
);

// Heuristic stress fallback — only used for words not in the lexicon.
function guessStressHeuristic(wordDisplay, sylls, idx) {
  const lw = wordDisplay.toLowerCase().replace(/[^a-z]/g, "");
  if (sylls.length === 1) return idx === 0 ? !STOP.has(lw) : false;
  return idx === 0;
}

// lookupWord: returns {sylls, stressIdx, src, confirmed} or null.
// lexicon is the merged table+residue object passed from component state.
function lookupWord(word, lexicon) {
  if (!lexicon) return null;
  const key = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!key) return null;
  const entry = lexicon[key];
  if (!entry) return null;
  return {
    sylls: entry.sylls,
    stressIdx: entry.stressIdx ?? 0,
    src: entry.src || "residue",
    confirmed: entry.confirmed !== false,
  };
}

// syllabifyWithSource: returns {sylls, stressIdx, source} where source ∈
// "table" (CMU-confirmed) | "residue" (unconfirmed) | "archaic" | "rule"
function syllabifyWithSource(wordDisplay, lexicon) {
  const m = wordDisplay.match(/[A-Za-z']+/);
  const core = m ? m[0] : wordDisplay;
  const lead = m ? wordDisplay.slice(0, m.index) : "";
  const trail = m ? wordDisplay.slice(m.index + core.length) : "";
  // 1. Lexicon lookup
  const entry = lookupWord(core, lexicon);
  if (entry) {
    const sylls = entry.sylls.map((s, i) => {
      if (i === 0) return lead + s;
      if (i === entry.sylls.length - 1) return s + trail;
      return s;
    });
    const src = (entry.src === "residue" || !entry.confirmed) ? "residue" : "table";
    return { sylls, stressIdx: entry.stressIdx, source: src };
  }
  // 2. Archaic -est/-eth rule
  if (/[^aeiouy](est|eth)$/i.test(core)) {
    const stem = core.slice(0, -3);
    const suf = core.slice(-3);
    const stemSylls = syllabifyRules(stem);
    const sylls = [...stemSylls, suf];
    if (sylls.length > 0) {
      sylls[0] = lead + sylls[0];
      sylls[sylls.length - 1] += trail;
    }
    return { sylls, stressIdx: 0, source: "archaic" };
  }
  // 3. Rule fallback
  const sylls = syllabifyRules(wordDisplay);
  return { sylls, stressIdx: null, source: "rule" };
}

// Build a word object from display text using the lexicon (or rules).
// Returns {display, sylls:[{text, accent}]} where accent comes from stressIdx.
function wordFromDisplay(wordDisplay, lexicon) {
  const { sylls, stressIdx, source } = syllabifyWithSource(wordDisplay, lexicon);
  const mappedSylls = sylls
    .map((t, i) => {
      const clean = t.replace(/[^A-Za-z''-]/g, "");
      if (!clean) return null;   // drop pure-punctuation fragments
      return {
        text: clean,
        accent: stressIdx !== null
          ? i === stressIdx
          : guessStressHeuristic(wordDisplay, sylls, i),
        source,
      };
    })
    .filter(Boolean);
  if (!mappedSylls.length) return null;  // whole token was punctuation
  return { display: wordDisplay, sylls: mappedSylls };
}

// ── PRESET: Meeting of the Lord, "Lord, I Call", 3rd sticheron (hand-pointed) ───
// Accents hand-verified against the printed score in the tutorial.
// Tutorial-faithful: intonation syllable + cadence anchor only (1–2 marks per phrase).
// Old v0.1.0 preset marked all natural word stresses — corrected per Drillock & Ealy.
const PRESET_T1 = [
  // Phrase A — Come = intonation (H); vine = cadence anchor (H); songs trails (H)
  ["A", [["Come,",[["Come",1]]],["let",[["let",0]]],["us",[["us",0]]],["also",[["al",0],["so",0]]],["go",[["go",0]]],["to",[["to",0]]],["meet",[["meet",0]]],["Christ",[["Christ",0]]],["with",[["with",0]]],["divine",[["di",0],["vine",1]]],["songs!",[["songs",0]]]]],
  // Phrase B — no intonation; Sim = anchor (backup from final monosyllable saw)
  ["B", [["Let",[["Let",0]]],["us",[["us",0]]],["receive",[["re",0],["ceive",0]]],["Him",[["Him",0]]],["Whose",[["Whose",0]]],["salvation",[["sal",0],["va",0],["tion",0]]],["Simeon",[["Sim",1],["e",0],["on",0]]],["saw!",[["saw",0]]]]],
  // Phrase C — He = intonation (H); Whom = reciting tone (Q); Da = cadence anchor (do/H);
  // vid = do/Q fill; an = do/Q fill; nounced = ti/H close. Score: tutorial p.7.
  ["C", [["This",[["This",0]]],["is",[["is",0]]],["He",[["He",1]]],["Whom",[["Whom",0]]],["David",[["Da",1],["vid",0]]],["announced;",[["an",0],["nounced",0]]]]],
  // Phrase D — no intonation; spoke = primary anchor (ti, cadence boundary);
  // Proph = secondary anchor (re, pos 3); two-accent path
  ["D", [["this",[["this",0]]],["is",[["is",0]]],["He",[["He",0]]],["Who",[["Who",0]]],["spoke",[["spoke",1]]],["in",[["in",0]]],["the",[["the",0]]],["Prophets,",[["Proph",1],["ets",0]]]]],
  // Phrase A — Who = intonation; speaks = anchor (backup from final monosyllable Law)
  ["A", [["Who,",[["Who",1]]],["for",[["for",0]]],["our",[["our",0]]],["sakes,",[["sakes",0]]],["has",[["has",0]]],["taken",[["tak",0],["en",0]]],["flesh",[["flesh",0]]],["and",[["and",0]]],["Who",[["Who",0]]],["speaks",[["speaks",1]]],["through",[["through",0]]],["the",[["the",0]]],["Law.",[["Law",0]]]]],
  // Final — wor = anchor; Him trails
  ["Final", [["Let",[["Let",0]]],["us",[["us",0]]],["worship",[["wor",1],["ship",0]]],["Him!",[["Him",0]]]]],
];

// ── PRESET: "Come, let us worship the Word of God" — Tone 2 Resurrectional 1 ──
// Accents hand-verified against OCA Feb 8 2026 service text (run-level underline).
// 6-line sticheron: A B C D A Final.
const PRESET_T2 = [
  // Phrase A — no intonation; Word = anchor (single mark)
  ["A", [["Come,",[["Come",0]]],["let",[["let",0]]],["us",[["us",0]]],["worship",[["wor",0],["ship",0]]],["the",[["the",0]]],["Word",[["Word",1]]],["of",[["of",0]]],["God",[["God",0]]]]],
  // Phrase B — a = anchor (backup from "ages", polysyllabic — 'a' is the stressed syllable)
  ["B", [["begotten",[["be",0],["got",0],["ten",0]]],["of",[["of",0]]],["the",[["the",0]]],["Father",[["Fa",0],["ther",0]]],["before",[["be",0],["fore",0]]],["all",[["all",0]]],["ages,",[["a",1],["ges",0]]]]],
  // Phrase C — car = intonation; Mar = anchor
  ["C", [["and",[["and",0]]],["incarnate",[["in",0],["car",1],["nate",0]]],["of",[["of",0]]],["the",[["the",0]]],["Virgin",[["Vir",0],["gin",0]]],["Mary!",[["Mar",1],["y",0]]]]],
  // Phrase D — dured = anchor (one mark)
  ["D", [["Having",[["Hav",0],["ing",0]]],["endured",[["en",0],["dured",1]]],["the",[["the",0]]],["Cross,",[["Cross",0]]]]],
  // Phrase B (line 5, index 4 — NOT Phrase A; A only appears once per tutorial)
  // self = anchor; desired trails
  ["B", [["He",[["He",0]]],["was",[["was",0]]],["buried",[["bur",0],["ied",0]]],["as",[["as",0]]],["He",[["He",0]]],["Himself",[["Him",0],["self",1]]],["desired.//",[["de",0],["sired",0]]]]],
  // Final — er = anchor (erring)
  ["Final", [["And",[["And",0]]],["having",[["hav",0],["ing",0]]],["risen",[["ris",0],["en",0]]],["from",[["from",0]]],["the",[["the",0]]],["dead,",[["dead",0]]],["He",[["He",0]]],["saved",[["saved",0]]],["me,",[["me",0]]],["an",[["an",0]]],["erring",[["er",1],["ring",0]]],["man.",[["man",0]]]]],
];

// ── PRESET: "By Thy Cross, O Christ our Savior" — Tone 3 Resurrectional 1 ──
// Accents hand-verified against OCA Feb 15 2026 and May 3 2026 service texts.
// 5-line sticheron: A B A B Final.
// Phrase A: anchor on [Sav]ior — one mark
// Phrase B: anchor on [shat]tered — one mark
// Phrase A: anchor on [lu]sion — one mark (mid-word: de·lu·sion)
// Phrase B: anchor on [saved] — one mark
// Final:    first anchor [of]fers, second anchor [Thee] — two marks
const PRESET_T3 = [
  // Phrase A — Sav = anchor (Savior)
  ["A", [["By",[["By",0]]],["Thy",   [["Thy",0]]],["Cross,", [["Cross",0]]],["O",    [["O",0]]],["Christ",[["Christ",0]]],["our",  [["our",0]]],["Savior,", [["Sav",1],["ior,",0]]]]],
  // Phrase B — shat = anchor (shattered); dotted-half on mi
  ["B", [["death's",[["death's",0]]],["dominion",[["dom",0],["in",0],["ion",0]]],["has",  [["has",0]]],["been",  [["been",0]]],["shattered;",[["shat",1],["tered;",0]]]]],
  // Phrase A — lu = anchor (delusion, mid-word)
  ["A", [["the",   [["the",0]]],["devil's",[["dev",0],["il's",0]]],["delusion",[["de",0],["lu",1],["sion",0]]],["destroyed.",[["de",0],["stroyed.",0]]]]],
  // Phrase B — saved = anchor; dotted-half on mi
  ["B", [["The",   [["The",0]]],["race",   [["race",0]]],["of",    [["of",0]]],["man,",  [["man,",0]]],["being", [["be",0],["ing",0]]],["saved",  [["saved",1]]],["by",    [["by",0]]],["faith,//",[["faith,//",0]]]]],
  // Final — two anchors: [of]fers (first, Part 1 mi) + [Thee] (second, Part 2 mi)
  ["Final", [["always",[["al",0],["ways",0]]],["offers",[["of",1],["fers",0]]],["Thee",  [["Thee",1]]],["a",     [["a",0]]],["song.",  [["song.",0]]]]],
];

const PRESETS = { 1: PRESET_T1, 2: PRESET_T2, 3: PRESET_T3 };

function presetToLines(toneNum) {
  const preset = PRESETS[toneNum] || PRESETS[1];
  return preset.map(([ph, ws]) => ({
    phrase: ph,
    words: ws.map(([d, ss]) => ({ display: d, sylls: ss.map(([t, a]) => ({ text: t, accent: !!a })) })),
  }));
}

// Reconstruct bracketed text from a pointed line (words array with accent flags).
// Accented syllables are wrapped in [brackets]; words joined with spaces.
// Used to show the encoding under each director/machine verse in compare mode.
function lineToBracketedText(line) {
  if (!line?.words) return "";
  return line.words.map(w => {
    const accentIdx = w.sylls.findIndex(s => s.accent);
    if (accentIdx < 0) return w.display || w.sylls.map(s => s.text).join("");
    const display = w.display || w.sylls.map(s => s.text).join("");
    const accentText = w.sylls[accentIdx].text;
    const idx = display.toLowerCase().indexOf(accentText.toLowerCase());
    if (idx < 0) return display;
    return display.slice(0, idx) + "[" + display.slice(idx, idx + accentText.length) + "]" + display.slice(idx + accentText.length);
  }).join(" ");
}

// Reconstruct plain bracketed text from a preset so the text field shows
// the example and the director pointing action runs on it in truth mode.
// Each word's accented syllable is wrapped in [brackets] per the director format.
// Words with no accent are output as plain display text.
// Phrase lines are joined with newlines.
function presetToText(toneNum) {
  const preset = PRESETS[toneNum] || PRESETS[1];
  return preset.map(([ph, ws]) => {
    return ws.map(([display, sylls]) => {
      const accentIdx = sylls.findIndex(([, a]) => a);
      if (accentIdx < 0) return display;
      // Find the accented syllable text within the display string and bracket it.
      const accentText = sylls[accentIdx][0];
      // Case-insensitive search within display to preserve punctuation.
      const idx = display.toLowerCase().indexOf(accentText.toLowerCase());
      if (idx < 0) return display;
      return display.slice(0, idx) + "[" + display.slice(idx, idx + accentText.length) + "]" + display.slice(idx + accentText.length);
    }).join(" ");
  }).join("\n");
}

// ── DOCX INGEST (client-side, via JSZip) ───────────────────────────────────────
// A .docx is a ZIP; word/document.xml holds the text. Each run (<w:r>) carries
// its own run-properties (<w:rPr>), where <w:u> marks underline. OCA service
// texts store each underlined fragment as its own run, so underline is extracted
// losslessly (verified against the Feb 2 Meeting of the Lord service text).
const W_NS = "w";
// Detect a tone heading line, e.g. "Tone 1", "Tone 6", "in Tone 5", "Tone V".
const TONE_HEADING = /\bTone\s+([1-8]|[IVX]+)\b/i;
const ROMAN = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };
function parseToneLabel(s) {
  const m = s.match(TONE_HEADING);
  if (!m) return null;
  const raw = m[1];
  const n = /^[0-9]$/.test(raw) ? parseInt(raw, 10) : (ROMAN[raw.toUpperCase()] || null);
  return n;
}

// Parse the docx XML string into an ordered list of paragraphs.
// Each paragraph => { text, runs:[{text,underline}], toneHeading:int|null }.
function parseDocxParagraphs(xmlString) {
  const doc = new DOMParser().parseFromString(xmlString, "application/xml");
  // namespace-agnostic: match local name "p"
  const allP = Array.from(doc.getElementsByTagName("*")).filter(
    (el) => el.localName === "p"
  );
  const paras = [];
  for (const p of allP) {
    const runs = [];
    const rEls = Array.from(p.getElementsByTagName("*")).filter((el) => el.localName === "r");
    for (const r of rEls) {
      // underline?
      let underline = false;
      const rpr = Array.from(r.children).find((c) => c.localName === "rPr");
      if (rpr) {
        const u = Array.from(rpr.children).find((c) => c.localName === "u");
        if (u) {
          const val = u.getAttribute("w:val") || u.getAttributeNS?.(null, "val") || u.getAttribute("val");
          underline = val !== "none";
        }
      }
      // text (concatenate all <w:t> descendants)
      const tEls = Array.from(r.getElementsByTagName("*")).filter((el) => el.localName === "t");
      const txt = tEls.map((t) => t.textContent || "").join("");
      if (txt) runs.push({ text: txt, underline });
    }
    const text = runs.map((x) => x.text).join("").trim();
    if (text) paras.push({ text, runs, toneHeading: parseToneLabel(text), idx: paras.length });
  }
  return paras;
}

// Determine effective tone per paragraph by carrying the last heading downward.
// A paragraph that IS a bare heading isn't a verse; verses inherit the tone above.
function assignTones(paras) {
  let current = null;
  let inherited = false;
  return paras.map((p) => {
    // a "bare heading" paragraph is short and matches the tone pattern with little else
    const isBareHeading =
      p.toneHeading != null && p.text.replace(TONE_HEADING, "").replace(/[^A-Za-z]/g, "").length <= 4;
    if (isBareHeading) {
      current = p.toneHeading;
      inherited = false;
      return { ...p, effectiveTone: current, isHeading: true, inheritedTone: false };
    }
    // inline tone on a content line still updates current
    if (p.toneHeading != null) {
      current = p.toneHeading;
      inherited = false;
      return { ...p, effectiveTone: current, isHeading: false, inheritedTone: false };
    }
    const wasInherited = current != null; // had to fall through from a previous block
    return { ...p, effectiveTone: current, isHeading: false, inheritedTone: wasInherited };
  });
}

// Segment paragraphs into stichera. A sticheron is a maximal run of consecutive
// underline-bearing paragraphs; the run closes on the line AFTER a //-terminated
// line (the // marks the penultimate line; the next line is the Final). Headings
// and non-underlined paragraphs (V. verses, Glory/Both now, blanks) separate runs.
// A run that never contains a // is flagged `suspect` (we still group it, last
// line → Final, but it should be verified — the UI hides suspect blocks unless
// "show all" is on).
const hasUnderline = (p) => p.runs.some((r) => r.underline);
function segmentStichera(paras) {
  const groups = [];
  let cur = null, sawSlash = false, closeNext = false;
  const finish = () => {
    if (!cur || !cur.length) { cur = null; return; }
    groups.push({
      lines: cur,
      tone: cur[0].effectiveTone,
      inherited: cur[0].inheritedTone,
      incipit: cur[0].text.split(/\s+/).slice(0, 4).join(" "),
      suspect: !sawSlash,
    });
    cur = null; sawSlash = false; closeNext = false;
  };
  for (const p of paras) {
    if (p.isHeading) { finish(); continue; }
    if (hasUnderline(p)) {
      if (!cur) { cur = []; sawSlash = false; closeNext = false; }
      cur.push(p);
      if (closeNext) { finish(); continue; }
      if (/\/\/\s*$/.test(p.text)) { sawSlash = true; closeNext = true; }
    } else {
      finish(); // non-underlined paragraph separates stichera
    }
  }
  finish();
  return groups;
}

// Encode a whole sticheron block (its lines) as copy-paste marked text.
function encodeBlock(block) {
  return encodeVerseBlock(block.lines);
}
// Phrase for line i within a block of n lines (A B C D rotating, Final last).
function blockLinePhrase(i, n, rot) {
  if (i === n - 1) return "Final";
  const r = rot || ["A", "B", "C", "D"];
  if (typeof r === "function") return r(i, n);
  return r[i % r.length];
}

// Encode one paragraph's runs as marked text. Accents wrapped in [brackets];
// everything else passes through verbatim. (Bracket format chosen for readability
// and unambiguous parsing.)
function encodeRuns(runs) {
  let out = "";
  for (const r of runs) {
    out += r.underline ? `[${r.text}]` : r.text;
  }
  return out.replace(/\s+/g, " ").trim();
}

// Build the copy-paste block for a set of verse paragraphs.
// Line ends: "|" for ordinary lines; the OCA "//" is already inside the text and
// is kept verbatim (we do NOT add "|" to a line that already ends with "//");
// the final line gets no marker.
function encodeVerseBlock(verses) {
  const lines = verses.map((v) => encodeRuns(v.runs));
  return lines
    .map((ln, i) => {
      const isLast = i === lines.length - 1;
      if (isLast) return ln;                 // verse end: no marker
      if (/\/\/\s*$/.test(ln)) return ln;    // OCA penultimate marker already present
      return ln + " |";                      // ordinary line end
    })
    .join("\n");
}

// Escape text for safe innerHTML use in the verse preview (underline rendering).
function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// ── POINTING ENGINE ─────────────────────────────────────────────────────────
// Flatten a line into a per-syllable list with word context.
function flatten(line) {
  const flat = [];
  line.words.forEach((w) =>
    w.sylls.forEach((s, si) =>
      flat.push({
        text: s.text,
        accent: s.accent,
        source: s.source,          // carries lexicon source for the toggle indicator
        single: w.sylls.length === 1,
        wordLast: si === w.sylls.length - 1,
      })
    )
  );
  return flat;
}

// CORRECTED ANCHOR RULE (Drillock & Ealy, Tone 1):
// The cadence begins on the last INTERNAL accent of the phrase. "Internal" means:
// if the final syllable is an accented one-syllable word (e.g. "Law", "saw",
// "Him", "Christ"), the cadence cannot launch on it, so it backs up to the
// previous accent. Trailing unaccented syllables after the anchor ride on the
// anchor's pitch until the final syllable.
function anchorIndex(flat) {
  const acc = [];
  flat.forEach((s, i) => { if (s.accent) acc.push(i); });
  if (!acc.length) return Math.max(0, flat.length - 1);

  const lastIdx = flat.length - 1;
  let a = acc[acc.length - 1];

  // One-syllable-final-word backup: if the very last syllable is an accented
  // standalone monosyllable, step back to the previous accent (the last internal
  // accent), when one exists.
  const last = flat[lastIdx];
  if (a === lastIdx && last.single && last.accent && acc.length >= 2) {
    a = acc[acc.length - 2];
  }
  return a;
}

// pointLine: maps a line's syllables to roles (recite/inton/prep/cad/cad1/preslur).
// phDefs: the active tone's phrase definition table (e.g. PH_DEFS[1] or PH_DEFS[2]).
// Pass PH (the component-derived active table) when calling from inside the component.
//
// Tone 3 Final Phrase two-part cadence:
//   Part 1 (cad1): mi(H) do(Q) re(Q) — launches at anchor1 (first director mark)
//   Part 2 (cad):  mi(Q) fa(Q) re(H) do(W) — launches at anchor2 (second director mark)
// anchor1 = second-to-last stressed syllable (findFirstFinalAnchor); anchor2 = anchorIndex().
// Scope guard: activeTone===3 && phrase==='Final' && two accented syllables present.
// When guard is false, falls through to existing single-anchor logic unchanged.
function pointLine(line, phDefs, activeTone) {
  const def = phDefs[line.phrase];
  const flat = flatten(line);

  // ── Tone 3 Final Phrase: two-part cadence (cad1 + cad) ──────────────────
  if (activeTone === 3 && line.phrase === "Final") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a2 = anchorIndex(flat); // anchor2 — unchanged, last internal accent
      // anchor1: second-to-last stressed syllable (same monosyllable backup as anchorIndex).
      const lastIdx = flat.length - 1;
      let a1 = acc[acc.length - 2];
      if (a1 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a1 = acc[acc.length - 3];
      if (a1 >= 0 && a1 < a2) {
        // Valid two-part split found.
        const body  = flat.slice(0, a1);
        const cad1  = flat.slice(a1, a2);
        const cad   = flat.slice(a2);
        const roles = [];
        // body → recite
        body.forEach((s) => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        // cad1 → distribute Part 1 figure [mi, do, re]
        const dist1 = distribute(["mi", "do", "re"], cad1.length);
        cad1.forEach((s, i) =>
          roles.push({ role: "cad1", pitches: dist1[i] || ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
        );
        // cad → distribute Part 2 figure (def.cad)
        const dist2 = distribute(def.cad, cad.length);
        cad.forEach((s, i) =>
          roles.push({ role: "cad", pitches: dist2[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
        );
        return roles;
      }
      // a1 not valid (same as a2, or >= a2) — fall through to single-anchor logic.
    }
  }

  // ── Tone 1 Phrase D: two-accent cadence (ti · do fills · re · do fills · ti) ──
  // Five structural positions driven by two director marks.
  // Primary anchor (ti, pos 1)   = first accented syllable in the line → cadence boundary.
  // Secondary anchor (re, pos 3) = last internal accented syllable (anchorIndex logic).
  // Fills between positions = do. Close = ti.
  // Fallback: if fewer than 2 accents, or secondary = close, fall through to distribute().
  if (activeTone === 1 && line.phrase === "D") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a1 = acc[0];                          // first accent → cadence boundary, ti
      const lastIdx = flat.length - 1;
      // secondary = last internal accent (not the close syllable)
      let a2 = acc[acc.length - 1];
      if (a2 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a2 = acc[acc.length - 2];
      // Valid split: a1 is before a2, and a2 is not the close
      if (a1 < a2 && a2 < lastIdx) {
        const body = flat.slice(0, a1);
        const cad  = flat.slice(a1);
        const roles = [];
        // body → recite
        body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        // secondary accent index within cad
        const secIdxInCad = a2 - a1;
        const cadLast = cad.length - 1;
        cad.forEach((s, i) => {
          let pitch;
          if (i === 0)               pitch = "ti"; // anchor pos 1
          else if (i < secIdxInCad)  pitch = "do"; // fills pos 2
          else if (i === secIdxInCad) pitch = "re"; // secondary pos 3
          else if (i < cadLast)      pitch = "do"; // fills pos 4
          else                       pitch = "ti"; // close pos 5
          roles.push({ role: "cad", pitches: [pitch], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 });
        });
        return roles;
      }
    }
    // Fallback: single accent or invalid split — distribute() as machine best-effort
  }

  // ── Tone 1 Phrase A: anchor-driven cadence boundary ─────────────────────
  // Phrase A: recite(re) · inton(re·H) · ... · prep(ti) · cad(do)+
  // Structure:
  //   - Intonation = first accented syllable (forward pass, body only)
  //   - Anchor     = anchorIndex() — last internal accent (backward pass)
  //   - IF anchor === intonation (director only marked the intonation, not the
  //     cadence): fall back to last syllable as cad, second-to-last as prep.
  //     Rationale: director marks intonation with bracket; cadence anchor is
  //     structurally always the last stressed word — but in TRUTH mode the
  //     director doesn't re-mark it. When both passes land on the same syllable,
  //     the anchor is unknowable from director marks alone; use positional fallback.
  //   - IF anchor ≠ intonation: anchor IS the cadence start (director marked both)
  //   - Prep  = syllable immediately before cadence start → ti
  //   - Cad   = cadence start + all remaining syllables → all do
  // Score examples:
  //   "Let my [prayer] arise" → 1 accent (prayer=inton); anchor falls back to
  //     last syll (rise); prep=a, cad=[rise] ✅
  //   "[Lord]..Thee,[hear]me!" → 2 accents (Lord=inton, hear=anchor≠inton);
  //     prep=Thee, cad=[hear,me!] ✅
  //   "when I [call] up[on] Thee!//" → 2 accents (call=inton, on=anchor≠inton);
  //     prep=up, cad=[on,Thee!] ✅
  if (activeTone === 1 && line.phrase === "A" && flat.length >= 2) {
    const a        = anchorIndex(flat);   // last internal accent (backward pass)
    const firstAcc = flat.findIndex(s => s.accent); // intonation candidate (forward pass)
    const roles    = [];

    // Determine cadence start:
    // If anchor === intonation (or no accent at all), director only marked the
    // intonation — fall back to positional: cad starts at last syllable,
    // prep at second-to-last.
    const cadStart = (firstAcc === -1 || a === firstAcc)
      ? flat.length - 1   // positional fallback
      : a;                // anchor is distinct from intonation — use it

    const prepIdx = cadStart - 1;

    if (prepIdx < 0) {
      // Degenerate: no room for prep — fall through to standard logic
    } else {
      const body  = flat.slice(0, prepIdx);
      const prepS = flat[prepIdx];
      const cad   = flat.slice(cadStart);

      // Intonation = last accented body syllable, fallback to body[0]
      const bodyAccIdxs = body.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
      const intonIdx = bodyAccIdxs.length > 0
        ? bodyAccIdxs[bodyAccIdxs.length - 1]
        : (body.length > 0 ? 0 : -1);

      body.forEach((s, i) => {
        const role = (i === intonIdx) ? "inton" : "recite";
        roles.push({ role, pitches: [def.recite], accent: s.accent, text: s.text, source: s.source });
      });

      // prep → ti (one syllable before cadence anchor)
      roles.push({ role: "prep", pitches: [def.prep], accent: prepS.accent, text: prepS.text, source: prepS.source });

      // cadence → all syllables from anchor onwards, all on do
      // First syllable is anchor; remaining syllables are fills/close, also do
      cad.forEach((s, i) =>
        roles.push({ role: "cad", pitches: ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
      );
      return roles;
    }
  }

  // ── Standard single-anchor logic (all other tones/phrases) ──────────────
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  // Pre-slur detection (Tone 2 Final Phrase rule, but structure-agnostic):
  // If the phrase has a prep note AND the syllable immediately before the prep
  // is a single accented monosyllable, that syllable gets role="preslur" with
  // pitches [recite, prep] as two quarter notes (re→ti for Tone 2 Final).
  // Pre-slur: Tone 1 Phrase A had a pre-slur guard here, removed — no score evidence.
  // Per prime directive: each tone/phrase gets only its own score-verified logic.
  // Tone 1 Phrase A now has a dedicated path above that returns before reaching here.
  // Tone 2 Final pre-slur is handled in its own dedicated block.
  let preslurIdx = -1; // retained for Tone 2 Final path compatibility — always -1 here

  // For phrases with intonation, find the first accented body syllable.
  // That syllable is the tutorial's intonation half note (role="inton", accent=true → H).
  // Unaccented syllables before it are lead-ins on the same pitch (role="recite" → Q).
  // Fallback: if no accented body syllable exists, body[0] gets the inton role.
  const intonIdx = def.inton
    ? (body.findIndex(s => s.accent) >= 0 ? body.findIndex(s => s.accent) : 0)
    : -1;

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (def.inton && i === intonIdx) role = "inton";
    // Pre-slur fires on the body syllable just before prep; its pitches are [recite, prep].
    if (preslurIdx >= 0 && i === preslurIdx) {
      role = "preslur";
      roles.push({ role, pitches: [def.recite, def.prep], accent: s.accent, text: s.text, source: s.source });
      return;
    }
    if (def.prep && i === body.length - 1 && preslurIdx < 0) { role = "prep"; pitch = def.prep; }
    roles.push({ role, pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
  });

  const dist = distribute(def.cad, cad.length);
  cad.forEach((s, i) =>
    roles.push({
      role: "cad",
      pitches: dist[i] || [def.cad[def.cad.length - 1]],
      accent: s.accent,
      text: s.text,
      source: s.source,
      anchor: i === 0,
      // wordBoundary: true when this syllable is the last syllable of its word.
      // Drives whole note triggers for Tone 2 Phrases B, C, D.
      // A syllable is a word boundary when the next cad syllable belongs to a
      // different word — detected by checking whether the current syllable ends
      // the word (no hyphen suffix) or the next begins a new word (capitalised
      // or preceded by space in source text).
      wordBoundary: (i === cad.length - 1) ||
        (!s.text.endsWith("-") && !s.source?.endsWith("-")),
    })
  );
  return roles;
}

// Distribute a cadence pitch figure across the cadence syllables.
// Per the tutorial score and OCA recording analysis:
// - The anchor always carries the first (held) note of the figure.
// - When count == n: one note per syllable.
// - When count > n: first and last syllables get their notes; middle syllables
//   repeat the penultimate note to fill gaps.
// - When count < n: take the first `count` notes of the figure sequentially —
//   the trailing notes of the figure simply don't appear. Verified from the OCA
//   Tone 1 unison recording: Phrase D "this·is·He·Who·spoke·in·the·Proph·ets"
//   shows cadence in·the·Proph·ets = ti·do·re·do (4 notes for 4 syllables,
//   the final ti of the 5-note figure belongs to the next phrase, not this one).
function distribute(figure, count) {
  const n = figure.length;
  if (count <= 1) return [figure.slice()];         // one syllable carries the whole figure
  if (count === n) return figure.map((f) => [f]);   // one note per syllable — exact fit
  if (count > n) {                                  // more syllables than notes
    const out = [[figure[0]]];
    const mid = figure.slice(1, n - 1);
    const ms = count - 2;
    for (let i = 0; i < ms; i++) out.push([mid[i] ?? figure[Math.max(0, n - 2)]]);
    out.push([figure[n - 1]]);
    return out;
  }
  // count < n: take the first `count` notes sequentially — one per syllable.
  // Trailing notes of the figure are unused (they belong to the next phrase).
  return figure.slice(0, count).map((f) => [f]);
}

// ── TONE 2 CADENCE DURATION ENGINE ───────────────────────────────────────────
//
// cadDuration(phDef, cadCount, cadPos, isWordBoundary, hasRecitingTone)
// Returns the correct duration for a single cadence syllable in Tone 2.
// cadCount    — total number of cadence syllables in this line
// cadPos      — 0-based position of this syllable within the cadence
// isWordBoundary — true if this syllable is the last syllable of its word
// hasRecitingTone — true if any reciting-tone syllables precede the cadence
//                   (used for pre-slur context in Final Phrase)
//
// Returns one of: "H", "Q", "W", "H·" — matched to the H/Q/W/DH constants
// in lineToNotes() via cadDurToSec().
//
// Falls through to generic handler (returns null) for tones without cadDurs.
//
// Source: Drillock & Ealy tutorial + L'vov-Bakhmetev Obikhod score verification.
// All rules documented in tone_trainer_notes.md session May 31 2026.

function cadDuration(phDef, cadCount, cadPos, isWordBoundary, hasRecitingTone) {
  const cd = phDef?.cadDurs;
  if (!cd) return null; // no cadDurs → caller uses generic handler

  const isFirst  = cadPos === 0;
  const isLast   = cadPos === cadCount - 1;
  const isMiddle = !isFirst && !isLast;
  const isOnly   = cadCount === 1;

  // ── Final Phrase ─────────────────────────────────────────────────────────
  if (cd.anchor === "W") {
    // do anchor always W, ti close always W.
    // Melisma cases (count<4) handled by buildMelisma() — cadDuration not called
    // for those sub-pitches; only called for separated syllables.
    if (isOnly || isFirst) return "W";   // anchor = do(W)
    if (isLast)            return "W";   // close  = ti(W)
    return "H";                          // re and middle do = H
  }

  // ── Phrase A: fa·mi·re ────────────────────────────────────────────────────
  if (cd.fillPitch === "mi" && cd.anchor === "H") {
    if (isFirst || isOnly) return "H";                       // fa always H
    if (isLast) return cadCount <= 3 ? "H·" : "H";          // re: H· ≤3, H ≥4
    // middle (mi fill):
    return cadCount <= 3 ? "H" : "Q";                       // mi: H ≤3, Q ≥4
  }

  // ── Phrase B/D: di·re ────────────────────────────────────────────────────
  if (cd.fillPitch === "di") {
    if (isFirst || isOnly) return "H";                       // di anchor always H
    if (isLast) {
      // whole note rule differs between B (single-word) and D (multi-word)
      const isMultiWord = !isWordBoundary;
      if (cd.wholeNote === "single-word" && !isMultiWord)  return "W";
      if (cd.wholeNote === "multi-word"  &&  isMultiWord)  return "W";
      return "H";
    }
    // di fills: H when count≤3, Q when count≥4
    return cadCount <= 3 ? "H" : "Q";
  }

  // ── Phrase C: do ─────────────────────────────────────────────────────────
  if (cd.fillPitch === "do") {
    if (isFirst || isOnly) return "H";                       // do anchor always H
    if (isLast) {
      // whole note fires on multi-word cadence
      const isMultiWord = !isWordBoundary;
      if (cd.wholeNote === "multi-word" && isMultiWord) return "W";
      return "H";
    }
    // do fills: H when count≤2 (single-word), Q when count≥3
    return cadCount <= 2 ? "H" : "Q";
  }

  return null; // unrecognised cadDurs shape — fall through to generic
}

// buildMelisma(pitches, durs, peak)
// Returns an array of note objects for a melisma (multiple pitches on one syllable).
// Used for Phrase A anchor melisma (count<3) and Final Phrase anchor melisma (count<4).
// pitches — array of solfège strings e.g. ["fa","mi"]
// durs    — array of duration strings e.g. ["H","H"] matching pitches length
// peak    — audio peak value (0.27 for cad anchor, 0.2 otherwise)
function buildMelisma(pitches, durs, H, Q, W, DH, peak) {
  const durMap = { "H": H, "Q": Q, "W": W, "H·": DH, "H·": H * 1.5 };
  return pitches.map((p, i) => ({ sol: p, dur: durMap[durs[i]] ?? Q, peak }));
}

// ── BASS DERIVATION ENGINE ────────────────────────────────────────────────────
//
// Bass is algorithmically derived from the alto pointing using BASS_RULES.
// Each tone/setting defines its own ruleset — no cross-tone generalization.
// Tones without a BASS_RULES entry return null (bass unavailable).
//
// Source: L'vov-Bakhmetev Obikhod, score-verified May 31 2026.
// Setting: Russian Obikhod (Tone 2 only currently).
// See tone_trainer_notes.md for full derivation and score evidence.
//
// Structure per phrase:
//   recite    — bass pitch on all reciting-tone syllables
//   cadMap    — maps alto cadence pitch → bass cadence pitch
//   prepMap   — maps alto prep pitch → bass prep pitch (empty if same as cadMap)
//   preslurMap— maps each alto preslur pitch → bass preslur pitch

const TENOR_RULES = {
  // ── Tone 1, Russian Obikhod (L'vov-Bakhmetev) ──────────────────────────
  // Verified phrase by phrase against Drillock & Ealy Four-Part Harmony tutorial.
  1: {
    A: {
      // Intonation and reciting alto=re → tenor=sol; prep alto=ti → tenor=sol
      recite: "sol",
      prepMap: { ti: "sol" },
      // Cadence: tenor holds sol throughout regardless of alto pitch
      cadMap: { do: "sol", re: "sol", ti: "sol" },
      preslurMap: {},
    },
    B: {
      recite: "sol",
      prepMap: {},
      cadMap: { do: "sol", re: "sol", ti: "sol" },
      preslurMap: {},
    },
    C: {
      recite: "sol",
      prepMap: {},
      cadMap: { do: "sol", ti: "sol" },
      preslurMap: {},
    },
    D: {
      recite: "sol",
      prepMap: {},
      // 5-syllable cadence: tenor holds sol throughout
      cadMap: { ti: "sol", do: "sol", re: "sol" },
      preslurMap: {},
    },
    Final: {
      // Reciting alto=re → tenor=la
      recite: "la",
      prepMap: {},
      // Cadence: alto do→ti→la → tenor la→si→mi
      // si = raised 6th (B♮ in D minor), harmonic minor approach to la close
      cadMap: { do: "la", ti: "si", la: "mi" },
      preslurMap: {},
      // la and si sit one step above sol (the A-D reciting pitch) — div-1 keeps them
      // in the correct register. mi (Lord) sits below sol — stays at global div-2.
      // la and si at div-1: la steps up from prior sol, si sits one step above la.
      // si detuned +15 cents in audio only to push beating above perceptual threshold.
      octaveDiv: { la: 1, si: 1 },
    },
  },
};

// ── Tenor derivation: shared pitch-map + melisma-hold collapse ───────────────
// Used by all three tenor consumers (audio lineToNotes_tenor, chip render,
// score payload) so the three paths cannot drift. Scoped naturally to Tone 1
// because TENOR_RULES only has [1]; the collapse only ever touches tenor entries.
//
// PRIME DIRECTIVE note: this is Tone-1 behaviour observed from score evidence
// (two-note alto melisma → tenor holds one whole note). It is NOT ported to other
// tones — when tenor rules are added for tones 2–8, re-verify hold behaviour from
// that tone's own score before relying on this collapse.

// Map one alto rolesWD entry's pitch to its tenor pitch per the phrase rules.
const mapTenorPitch = (r, rules) => {
  const orig = r.pitches[0];
  if (r.role === "recite" || r.role === "inton") return rules.recite;
  if (r.role === "prep")    return rules.prepMap?.[orig]    ?? orig;
  if (r.role === "preslur") return rules.preslurMap?.[orig] ?? orig;
  if (r.role === "cad" || r.role === "cad1") return rules.cadMap?.[orig] ?? orig;
  return orig;
};

// Duration arithmetic in half-note units, so the collapse is bpm-independent
// (every rolesWD entry already carries a durKey). sumDurKeys returns a single
// representable durKey when the sum lands exactly on one note value (incl. the
// dotted values H· = 1.5 and W· = dotted whole = 3), otherwise null. A sum with no
// single value (e.g. 4×H = 2 whole notes) is left as separate notes; for Tone 1 the
// only constant-pitch melisma sums are 2H → W and 3H → W·, so both collapse.
const DURKEY_BEATS = { Q: 0.5, H: 1, "H·": 1.5, W: 2, "W·": 3 };
const BEATS_DURKEY = { 0.5: "Q", 1: "H", 1.5: "H·", 2: "W", 3: "W·" };
const sumDurKeys = (keys) => {
  const total = keys.reduce((s, k) => s + (DURKEY_BEATS[k] ?? 0), 0);
  return BEATS_DURKEY[total] ?? null;
};

// Build tenor rolesWD from alto rolesWD: 1:1 pitch-map, then collapse a constant-
// pitch melisma span (same syllable text, same tenor pitch, ≥2 notes) into a single
// held note. This is the choir director's rule: the tenor sustains when neither its
// pitch nor the syllable changes; it rearticulates when the syllable changes (a new
// syllable = a new note, even on the same pitch — handled by the same-text guard) or
// when its pitch changes (the tenor's own melisma, e.g. Final la·si·mi — never
// collapsed). The held note's duration is the sum: 2H → whole, 3H → dotted whole (W·).
// Each returned entry carries spanStart (the alto column index where it begins) and
// spanCount (how many alto notes it spans) so the columnar score renderer can anchor
// a held note across the alto melisma. A sum with no single value (4H+, not present in
// Tone 1) falls back to separate notes. See choir_director_review.md.
const deriveTenorRolesWD = (rolesWD, rules) => {
  const mapped = rolesWD.map((r, i) => ({ ...r, pitches: [mapTenorPitch(r, rules)], _idx: i }));
  const out = [];
  let i = 0;
  while (i < mapped.length) {
    const e = mapped[i];
    if (e.melisma) {
      // maximal run of melisma entries with the same syllable text AND same tenor pitch
      let j = i;
      while (j + 1 < mapped.length &&
             mapped[j + 1].melisma &&
             mapped[j + 1].text === e.text &&
             mapped[j + 1].pitches[0] === e.pitches[0]) j++;
      const spanCount = j - i + 1;
      if (spanCount >= 2) {
        // The maximal run is the decision unit: collapse it whole when its summed
        // duration maps to a single representable value (incl. W· for 3H), otherwise
        // emit every note in the run separately. (Never collapse a sub-span.)
        const dk = sumDurKeys(mapped.slice(i, j + 1).map(x => x.durKey));
        if (dk) {
          const sumDur = mapped.slice(i, j + 1).reduce((s, x) => s + (x.dur || 0), 0);
          out.push({ ...e, dur: sumDur, durKey: dk, melisma: false,
                     spanStart: e._idx, spanCount });
        } else {
          for (let k = i; k <= j; k++) out.push({ ...mapped[k], spanStart: mapped[k]._idx, spanCount: 1 });
        }
        i = j + 1;
        continue;
      }
    }
    out.push({ ...e, spanStart: e._idx, spanCount: 1 });
    i++;
  }
  return out;
};

const BASS_RULES = {
  // ── Tone 1, Russian Obikhod (L'vov-Bakhmetev) ──────────────────────────
  // Verified phrase by phrase against Drillock & Ealy Four-Part Harmony tutorial.
  // Logic structure mirrors Tone 2: recite covers inton+recite roles; prepMap and
  // cadMap handle prep and cad roles; preslurMap handles preslur. Fallback ?? altoPitch
  // passes through any unmapped pitch unchanged.
  1: {
    A: {
      // Intonation alto=re → bass=sol; reciting alto=re → bass=sol
      recite: "sol",
      // Prep alto=ti → bass=sol
      prepMap: { ti: "sol" },
      // Cadence alto=do → bass=do
      cadMap: { do: "do" },
      preslurMap: {},
    },
    // B, C, D, Final — pending phrase-by-phrase verification with Bill
    B: {
      // No intonation in Phrase B
      // Reciting alto=do → bass=do
      recite: "do",
      prepMap: {},
      // Cadence: alto do→re→ti → bass do→sol→sol
      cadMap: { do: "do", re: "sol", ti: "sol" },
      preslurMap: {},
    },
    C: {
      // Intonation and reciting alto=re → bass=sol
      recite: "sol",
      prepMap: {},
      // Cadence: alto do→ti → bass do→sol
      cadMap: { do: "do", ti: "sol" },
      preslurMap: {},
    },
    D: {
      // No intonation, no prep in Phrase D
      // Reciting alto=do → bass=do
      recite: "do",
      prepMap: {},
      // Cadence (5 syllables): alto ti→do→re→do→ti → bass sol→do→ti→do→sol
      cadMap: { ti: "sol", do: "do", re: "ti" },
      preslurMap: {},
    },
    Final: {
      // No intonation, no prep in Final Phrase
      // Reciting alto=re → bass=re (at div-2 register, sits at S1 on bass staff)
      recite: "re",
      prepMap: {},
      // Cadence (3 syllables): alto do→ti→la → bass mi→mi_low→la
      // mi (high) = L1 on bass staff; mi_low = S4 (lower octave); la = L3
      // Tenor si (raised 6th) confirms harmonic minor approach to la
      cadMap: { do: "mi", ti: "mi_low", la: "la" },
      preslurMap: {},
      // re÷2=G3 (4th space), mi÷2=A3 (top line) — correct staff positions per score.
      // mi_low uses global ÷4 (A2, lower octave). No per-phrase override needed.
    },
  },
  // ── Tone 2, Russian Obikhod (L'vov-Bakhmetev) ──────────────────────────
  2: {
    // setting: "Obikhod (L'vov-Bakhmetev)" — flag if other settings are added
    A: {
      recite: "la",
      // Phrase A cadence: fa(soprano) → la(bass); mi → mi; re → la
      // Bass holds la on anchor (fa), drops to mi on fill, returns la on close
      cadMap: { fa: "la", mi: "mi", re: "la" },
      prepMap: {},
      preslurMap: {},
    },
    B: {
      recite: "la",
      // di(soprano) → mi(bass); re → la
      // Bass holds la through recite, dips to mi on di cadence, returns la
      cadMap: { di: "mi", re: "la" },
      prepMap: {},
      preslurMap: {},
    },
    C: {
      recite: "la",
      // Cadence do(soprano) → sol(bass)
      // Prep ti(soprano) → re(bass) — dominant approach to sol
      cadMap: { do: "sol" },
      prepMap: { ti: "re" },
      preslurMap: {},
    },
    D: {
      recite: "sol",  // bass drops to sol when soprano recites on do
      // di → mi; re → la (same cadence shape as Phrase B)
      cadMap: { di: "mi", re: "la" },
      prepMap: {},
      preslurMap: {},
    },
    Final: {
      recite: "la",
      // Score-verified (L'vov-Bakhmetev Obikhod):
      // "me," alto = do·re melisma → bass = sol·fa (W+H)
      // "O" alto = do → bass = sol (H)
      // "Lord!" alto = ti → bass = re (W) — open minor seventh close
      cadMap: { do: "sol", re: "fa", ti: "re" },
      prepMap: { ti: "re" },
      // Pre-slur "Hear": soprano [re,ti] → bass [la,re]
      preslurMap: { re: "la", ti: "re" },
    },
  },
  // Tones 1, 3, 4, 5, 6, 7, 8 — bass rules not yet researched.
  // Add entries here as score evidence is gathered per tone/setting.
};

// Bass octave displacement — each solfège pitch mapped to its correct bass register.
// Derived from score: bass concert pitches are 1–2 octaves below soprano.
// do=Bb4 reference: soprano re=C5, bass la=G3, bass mi=D3, bass re=C3 etc.
// Displacement factor: divide soprano FREQ by this value to get bass register.
const BASS_OCTAVE_DIV = {
  // do=F4 (349.23 Hz). sol stays ÷4 (C3, confirmed OCA score 2nd space bass clef).
  // All other pitches ÷2 — lands in D3–Bb3, solidly in bass vocal range.
  // mi_low ÷4 = intentionally lower register variant of mi.
  la:    2,   // D5 → D3  (147 Hz)
  ti:    2,   // E5 → E3  (165 Hz)
  do:    2,   // F5 → F3  (175 Hz)
  di:    2,   // F#5 → F#3 (185 Hz)
  re:    2,   // G5 → G3  (196 Hz)
  mi:    2,   // A5 → A3  (220 Hz)
  mi_low: 4,  // A5 → A2  (110 Hz) — lower octave mi, Tone 1 Final cadence
  fa:    2,   // Bb5 → Bb3 (233 Hz)
  sol:   4,   // C5 → C3  (131 Hz) — bass reciting tone, confirmed OCA score
};

// ── SOPRANO DERIVATION ────────────────────────────────────────────────────────
// Soprano is a pure diatonic third above alto throughout — one staff line up,
// mechanically, every note. No exceptions in Tone 2 Obikhod (score-verified).
// Duration is identical to alto for every syllable.
// Source: L'vov-Bakhmetev Obikhod score, read positionally off the staff.
const SOPRANO_MAP = {
  la:  "do",   // G → Bb (one line up)
  ti:  "re",   // Ab → C
  do:  "mi",   // Bb → D
  di:  "mi",   // B♮ → D (diatonic third, same line as mi)
  re:  "fa",   // C → Eb
  mi:  "sol",  // D → F
  fa:  "la",   // Eb → G
  sol: "ti",   // F → Ab
};

// ── FEATURE B: BRACKET-AWARE PARSING + COMPARISON HARNESS ───────────────────
// See SYLLABIFIER_SPEC.md §7 for full design decisions.
//
// Bracket formats that occur in OCA materials:
//   Whole-word:  [Lord], [hear], [Hear]  — entire word bracketed
//   Mid-word:    up[on], Re[ceive]       — bracket covers a character span
//
// In TRUTH mode (brackets present), brackets are authoritative over the lexicon.
// The lexicon still drives syllabification; accent position comes from the bracket.

// Detect whether a raw text block contains [accent] marks.
function parseBracketedText(rawText) {
  return { hasBrackets: /\[[A-Za-z''-]+\]/.test(rawText) };
}

// Map a bracket character span within `core` to a syllable index using
// vowel-nucleus overlap (SYLLABIFIER_SPEC §7 algorithm).
// Returns the syllable index that contains the first underlined vowel nucleus,
// or -1 if no match (caller should fallback to overlap count).
function bracketSpanToSyllIdx(core, bracketStart, bracketEnd, sylls) {
  const isVowel = (c) => "aeiouy".includes(c.toLowerCase());
  // Build syllable character ranges within `core`.
  const syllRanges = [];
  let pos = 0;
  for (const s of sylls) {
    syllRanges.push({ start: pos, end: pos + s.length - 1 });
    pos += s.length;
  }
  // Find nuclei (first char of each vowel run) in the bracket span.
  let k = bracketStart;
  while (k <= bracketEnd) {
    if (isVowel(core[k])) {
      // This is a nucleus — find which syllable it belongs to.
      const idx = syllRanges.findIndex((r) => k >= r.start && k <= r.end);
      if (idx >= 0) return idx;
      while (k <= bracketEnd && isVowel(core[k])) k++;
    } else k++;
  }
  // No nucleus in bracket span — fallback: syllable with most overlapping chars.
  let max = 0, best = 0;
  syllRanges.forEach((r, si) => {
    const lo = Math.max(r.start, bracketStart);
    const hi = Math.min(r.end, bracketEnd);
    const ov = Math.max(0, hi - lo + 1);
    if (ov > max) { max = ov; best = si; }
  });
  return best;
}

// Parse one word token that may contain [bracket] marks.
// Returns {cleanWord, accentIdx, bracketType} where:
//   bracketType: "none" | "whole" | "mid"
//   accentIdx:   syllable index (into lexicon-syllabified syllables), or -1 (no bracket)
// cleanWord is the alphabetic core with brackets stripped.
// syllabifyWithDirectorMark — shared core of both pointing paths.
//
// Both paths reduce to the same question:
//   "Given a word core and a marked span (start..end char offsets), what are
//    the syllables and which one carries the accent?"
//
// The bracket path derives markStart/markEnd from [ ] positions.
// The underline path derives markStart/markEnd from firstUl/lastUl positions.
// Both call this function with those offsets.
//
// Rules (same as both callers previously implemented independently):
//   1. If prefix (chars before mark) or suffix (chars after mark) is non-empty:
//      syllables = [prefix, marked, suffix].filter(Boolean), accent on marked.
//      → director's notation directly encodes the split, no lexicon needed.
//   2. If whole word marked (no prefix, no suffix):
//      syllables from lexicon, accent on lexicon stressIdx.
//   3. If mark at word start with no prefix but suffix exists:
//      covered by rule 1 (suffix non-empty).
//   4. Fallback — mark at word start, no suffix (shouldn't occur in practice):
//      use bracketSpanToSyllIdx on lexicon/rule sylls.
//
// Returns { sylls: string[], accentIdx: number }
function syllabifyWithDirectorMark(core, markStart, markEnd, lexicon) {
  const entry   = lookupWord(core, lexicon);
  const rawSylls = entry ? entry.sylls : syllabifyRules(core);
  const stressIdx = entry ? (entry.stressIdx ?? 0) : 0;

  const clampedStart = Math.max(0, markStart);
  const clampedEnd   = Math.min(core.length - 1, markEnd);

  const prefix    = core.slice(0, clampedStart);
  const marked    = core.slice(clampedStart, clampedEnd + 1);
  const suffix    = core.slice(clampedEnd + 1);
  const hasPrefix = prefix.length > 0;
  const hasSuffix = suffix.length > 0;
  const wholeWord = !hasPrefix && !hasSuffix;

  if (wholeWord) {
    // Whole word marked — lexicon knows best stress position.
    return { sylls: rawSylls, accentIdx: stressIdx };
  }

  if (hasPrefix || hasSuffix) {
    // Mid-word bracket. Use lexicon syllables when available — the director
    // mark boundary tells us WHICH syllable is accented, not where to split.
    // bracketSpanToSyllIdx maps the bracket character span to a syllable index.
    if (rawSylls.length > 1) {
      const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);
      return { sylls: rawSylls, accentIdx: Math.max(0, idx) };
    }
    // No lexicon entry and rule-based gave 1 syllable — fall back to character split.
    const dirSylls = [prefix, marked, suffix].filter(s => s.length > 0);
    const accentIdx = hasPrefix ? 1 : 0;
    return { sylls: dirSylls, accentIdx };
  }

  // Fallback: mark at word start with no suffix — nucleus mapping on lexicon sylls.
  const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);
  return { sylls: rawSylls, accentIdx: Math.max(0, idx) };
}

function parseBracketWord(token, lexicon) {
  const hasBracket = /\[/.test(token);
  if (!hasBracket) {
    return { cleanWord: token, accentIdx: -1, bracketType: "none" };
  }

  // Strip brackets, recording span positions in the clean string.
  // e.g. "up[on]" → clean="upon", bracketStart=2, bracketEnd=3
  let clean = "", bracketStart = -1, bracketEnd = -1, inBracket = false;
  for (let i = 0; i < token.length; i++) {
    if (token[i] === "[") { inBracket = true; bracketStart = clean.length; continue; }
    if (token[i] === "]") { inBracket = false; bracketEnd = clean.length - 1; continue; }
    clean += token[i];
  }

  // Extract alpha core (strips leading/trailing punctuation).
  const alphaMatch = clean.match(/[A-Za-z''-]+/);
  if (!alphaMatch) return { cleanWord: token.replace(/[\[\]]/g, ""), accentIdx: -1, bracketType: "none" };
  const core = alphaMatch[0];
  const coreOffset = alphaMatch.index;

  // Adjust bracket positions relative to the alpha core, then delegate.
  const adjStart = bracketStart - coreOffset;
  const adjEnd   = bracketEnd   - coreOffset;
  const wholeWord = adjStart <= 0 && adjEnd >= core.length - 1;

  const { sylls, accentIdx } = syllabifyWithDirectorMark(core, adjStart, adjEnd, lexicon);

  return {
    cleanWord: clean,
    accentIdx,
    bracketType: wholeWord ? "whole" : "mid",
    sylls,
  };
}

// Parse a [accent]-marked text block into the same [{phrase, words}] structure
// that analyze() produces, but with brackets as accent authority (TRUTH mode).
//
// Input format:
//   "[Lord], I call upon Thee, [hear] me! | [Hear] me, O Lord! | ... // [Hear] [me], O Lord!"
//   Lines separated by newlines. Trailing " |" marks ordinary line ends.
//   "//" is the OCA penultimate marker; the line containing it is penultimate,
//   the NEXT line (or the text after // on the same line) is the Final.
//
// Phrase rotation is rebuilt from the line structure (same as analyze()).
function parseTruthLines(rawText, lexicon, rot) {
  // Split into lines. Detect | and // markers BEFORE stripping — they carry
  // barline metadata for the score renderer.
  const rawLinesWithMarkers = rawText
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // Annotate each raw line with its barline type before stripping markers.
  const annotated = rawLinesWithMarkers.map((l) => {
    const isPenultimate = /\/\//.test(l);
    const clean = l.replace(/\/\//, "").replace(/\s*\|\s*$/, "").trim();
    return { clean, isPenultimate };
  }).filter(({ clean }) => clean.length > 0);

  if (!annotated.length) return [];
  const total = annotated.length;

  return annotated.map(({ clean: ln, isPenultimate }, i) => {
    const isLast = i === total - 1;
    const barlineAfter = isLast ? "final" : isPenultimate ? "penultimate" : "single";
    const phrase = phraseForLine(i, total, rot || ROT_DEFS[1]);
    // Tokenize on whitespace; each token may contain [bracket] marks.
    const tokens = ln.split(/\s+/).filter(Boolean);
    const words = tokens
      .map((tok) => {
        const { cleanWord, accentIdx, bracketType, sylls: rawSylls } = parseBracketWord(tok, lexicon);
        if (!cleanWord) return null;

        // Syllabify the clean word for chip display.
        // For mid-word brackets, parseBracketWord already derived the syllable split
        // directly from the bracket boundaries — use that authoritatively.
        // For whole-word brackets and unbracketed words, use the lexicon/rule engine.
        const displaySylls = (bracketType === "mid" && rawSylls && rawSylls.length > 0)
          ? rawSylls
          : syllabifyWithSource(
              cleanWord.replace(/[^A-Za-z''-]/g, "") || cleanWord,
              lexicon
            ).sylls;

        // Build syllable objects.
        // If bracket present: accentIdx (from bracket) is authoritative.
        // If no bracket: no accent (non-bracketed words in TRUTH mode are unaccented).
        const mappedSylls = displaySylls
          .map((t, si) => {
            const cleanT = t.replace(/[^A-Za-z''-]/g, "");
            if (!cleanT) return null;
            let accent = false;
            if (bracketType !== "none") {
              // Bracket is authoritative.
              if (bracketType === "whole") {
                // Whole-word: use lexicon stressIdx (passed through accentIdx)
                accent = si === accentIdx;
              } else {
                // Mid-word: bracket span → syllable index from parseBracketWord
                accent = si === accentIdx;
              }
            }
            // In TRUTH mode, non-bracketed words have no accent (silence = unaccented).
            return { text: cleanT, accent, source: bracketType !== "none" ? "truth" : "auto" };
          })
          .filter(Boolean);

        if (!mappedSylls.length) return null;
        return { display: cleanWord, sylls: mappedSylls };
      })
      .filter(Boolean);

    return { phrase, words, barlineAfter };
  });
}

// Strip accents from a line set and re-encode with the auto-accenter (lexicon+heuristic).
// activePH: the active tone's phrase definition table (PH_DEFS[activeTone]).
// Returns a parallel [{phrase, words}] array — the "machine" version for comparison.
function autoEncodeLines(truthLines, lexicon, activePH) {
  // NOTE: autoAccentLine is a component-scoped arrow function (it closes over
  // nothing from the component, but is defined inside it for co-location).
  // autoEncodeLines is a module-level pure function so we replicate the logic
  // inline here to avoid a dependency on the component scope.
  //
  // Phrase-structural accent engine (mirrors autoAccentLine inside the component):
  const applyPhraseAccent = (words, phrase) => {
    const flat = [];
    words.forEach((w, wi) => {
      w.sylls.forEach((s, si) => {
        flat.push({ text: s.text, stressed: s.accent, single: w.sylls.length === 1, wi, si });
      });
    });
    if (!flat.length) return words;
    const lastIdx = flat.length - 1;
    // Same STOP filter as autoAccentLine — function words are never anchor candidates.
    // Guard: s.single ensures we only filter monosyllabic words. A syllable whose text
    // happens to spell a STOP word but belongs to a polysyllabic word (e.g. "in" from
    // "incense", "or" from "glory") must NOT be filtered — it is a syllable fragment,
    // not a function word.
    const sIdxs = flat
      .map((s, i) => (s.stressed && !(s.single && STOP.has(s.text.toLowerCase())) ? i : -1))
      .filter((i) => i >= 0);
    let anchorIdx = lastIdx;
    if (sIdxs.length > 0) {
      let c = sIdxs[sIdxs.length - 1];
      if (c === lastIdx && flat[lastIdx].single && sIdxs.length >= 2)
        c = sIdxs[sIdxs.length - 2];
      anchorIdx = c;
    }
    let intonIdx = -1;
    // Use activePH to determine if this phrase has intonation — tone-agnostic.
    if (activePH && activePH[phrase] && activePH[phrase].inton && sIdxs.length > 0) {
      const first = sIdxs[0];
      if (first !== anchorIdx) intonIdx = first;
    }
    // ── Tone 1 Phrase D: mark primary anchor (first stressed) for two-accent path ──
    let phraseD1PrimaryIdxAE = -1;
    if (activePH && activePH[phrase]?.cadDurs?.twoAccent && sIdxs.length >= 2) {
      const c = sIdxs[0];
      if (c !== anchorIdx) phraseD1PrimaryIdxAE = c;
    }
    const accentSet = new Set([anchorIdx]);
    if (intonIdx >= 0) accentSet.add(intonIdx);
    if (phraseD1PrimaryIdxAE >= 0) accentSet.add(phraseD1PrimaryIdxAE);
    let fi = 0;
    return words.map((w) => ({
      ...w,
      sylls: w.sylls.map((s) => ({ ...s, accent: accentSet.has(fi++) })),
    }));
  };

  return truthLines.map((line) => {
    const rawWords = line.words.map((w) => {
      // Re-use the truth syllable boundaries — same word shape as the director.
      // Only re-apply stress marks via the lexicon (stressIdx); the syllable
      // text and count come from w.sylls which were already correctly split
      // by parseTruthLines (using director bracket boundaries for mid-word cases,
      // or the lexicon for whole-word/unbracketed words).
      // This ensures machine and director always operate on the same word shape
      // even for words missing from the lexicon.
      const display = w.display.replace(/[\[\]]/g, "");
      const entry = lookupWord(display.replace(/[^A-Za-z''-]/g, ""), lexicon);
      // Map lexicon stress to the director's syllable array by text match, not
      // numeric index. The director split may differ in length from the lexicon
      // split (e.g. Resur[rec]tion → 3 sylls vs lexicon's ['Res','ur','rec','tion']).
      // Applying stressIdx=2 blindly to a 3-syll array gives 'tion' not 'rec'.
      // Instead: find which director syllable contains the lexicon's stressed text.
      let stressIdx = 0;
      if (entry) {
        const lexStressedText = (entry.sylls[entry.stressIdx] || "").toLowerCase();
        const match = w.sylls.findIndex(s => s.text.toLowerCase() === lexStressedText);
        if (match >= 0) {
          stressIdx = match;
        } else {
          // Fallback: find director syll with most character overlap with stressed lex syll
          let best = 0, bestScore = -1;
          w.sylls.forEach((s, i) => {
            const score = [...lexStressedText].filter(c => s.text.toLowerCase().includes(c)).length;
            if (score > bestScore) { bestScore = score; best = i; }
          });
          stressIdx = best;
        }
      }
      const mappedSylls = w.sylls.map((s, i) => ({
        text: s.text,
        accent: i === stressIdx,
        source: entry ? (entry.src === "residue" ? "residue" : "table") : "rule",
      }));
      return { display, sylls: mappedSylls };
    }).filter(Boolean);
    // Apply phrase-structural engine to the machine column.
    const words = applyPhraseAccent(rawWords, line.phrase);
    return { phrase: line.phrase, words };
  });
}

// Build a per-line, per-syllable comparison between truth and machine encodings.
// Returns { lines: [...], anchorMatchCount, totalLines, syllMatchCount, totalSylls }
// Each line entry: { truthRoles, machineRoles, truthAnchor, machineAnchor, anchorMatch,
//                    syllables: [{text, truthAccent, machineAccent, agree}] }
// buildComparison: compare truth vs. machine per line.
// phDefs: optional — the active tone's PH_DEFS entry (e.g. PH_DEFS[activeTone]).
// When provided, role/pitches are computed via pointLine() and included in each
// syllable entry. This enables pre/post diff to show pitch changes (e.g. cad1 fix).
// When omitted, role/pitches are absent (legacy behaviour — UI still works fine).
function buildComparison(truthLines, machineLines, phDefs, activeTone) {
  let anchorMatchCount = 0;
  let firstAnchorMatchCount = 0;
  let syllMatchCount = 0;
  let totalSylls = 0;

  const lines = truthLines.map((tLine, li) => {
    const mLine = machineLines[li] || { phrase: tLine.phrase, words: [] };

    // Flatten syllables from each.
    const flatSylls = (words) => {
      const out = [];
      words.forEach((w) => w.sylls.forEach((s) => out.push({ text: s.text, accent: s.accent, source: s.source })));
      return out;
    };
    const tFlat = flatSylls(tLine.words);
    const mFlat = flatSylls(mLine.words);

    // Compute anchors.
    const truthAnchor = anchorIndex(tFlat);
    const machineAnchor = anchorIndex(mFlat);
    const anchorMatch = truthAnchor === machineAnchor;
    if (anchorMatch) anchorMatchCount++;

    // First-anchor match (Tone 3 Final Phrase — the cad1 anchor).
    // For non-Final or non-two-anchor phrases this stays null.
    let truthFirstAnchor = null;
    let machineFirstAnchor = null;
    let firstAnchorMatch = null;
    if (phDefs) {
      // Derive first anchor: second-to-last accented syllable (mirrors autoAccentLine logic).
      const firstAnchorOf = (flat) => {
        const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
        if (acc.length < 2) return null;
        const lastIdx = flat.length - 1;
        let c = acc[acc.length - 2];
        if (c === lastIdx && flat[lastIdx].single && acc.length >= 3)
          c = acc[acc.length - 3];
        const anchor2 = anchorIndex(flat);
        return c !== anchor2 ? c : null;
      };
      truthFirstAnchor = firstAnchorOf(tFlat);
      machineFirstAnchor = firstAnchorOf(mFlat);
      if (truthFirstAnchor !== null && machineFirstAnchor !== null) {
        firstAnchorMatch = truthFirstAnchor === machineFirstAnchor;
        if (firstAnchorMatch) firstAnchorMatchCount++;
      }
    }

    // Compute roles via pointLine() when phDefs provided.
    // H=1 (normalised), Q=0.5, W=2, DH=1.5 — snapshot script uses these to compare
    // relative durations; absolute values depend on BPM which belongs to the component.
    let tRoles = null, mRoles = null;
    if (phDefs) {
      const H = 1, Q = 0.5, W = 2, DH = 1.5;
      const computeRoles = (line) => {
        const roles = pointLine(line, phDefs, activeTone);
        const isFinal = line.phrase === "Final";
        const phDef = phDefs[line.phrase];
        const useAnchorDH = !!(phDef && phDef.anchorDH);
        const cadIdxs = roles.map((r, i) => r.role === "cad" ? i : -1).filter(i => i >= 0);
        const cad1Idxs = roles.map((r, i) => r.role === "cad1" ? i : -1).filter(i => i >= 0);
        return roles.map((r, ri) => {
          let dur;
          if (r.role === "inton")        { dur = r.accent ? H : Q; }
          else if (r.role === "recite" || r.role === "prep") { dur = Q; }
          else if (r.role === "preslur") { dur = H; }
          else if (r.role === "cad1") {
            const pos = cad1Idxs.indexOf(ri);
            dur = pos === 0 ? H : Q;
          } else if (r.role === "cad") {
            const cadPos = cadIdxs.indexOf(ri);
            const isFirst = cadPos === 0;
            const isLast  = cadPos === cadIdxs.length - 1;
            if (isFirst && isLast)   dur = isFinal ? W : H;
            else if (isFirst)        dur = (useAnchorDH && cadIdxs.length <= (phDef?.cad?.length ?? 99)) ? DH : H;
            else if (isLast)         dur = isFinal ? W : H;
            else                     dur = Q;
          } else { dur = Q; }
          return { role: r.role, pitches: r.pitches, dur };
        });
      };
      tRoles = computeRoles(tLine);
      mRoles = computeRoles(mLine);
    }

    // Per-syllable comparison (align by index — same text since same words).
    const maxLen = Math.max(tFlat.length, mFlat.length);
    const syllables = [];
    for (let si = 0; si < maxLen; si++) {
      const ts = tFlat[si];
      const ms = mFlat[si];
      const agree = ts && ms ? ts.accent === ms.accent : false;
      if (agree) syllMatchCount++;
      totalSylls++;
      const syl = {
        text: ts?.text || ms?.text || "?",
        truthAccent: ts?.accent ?? false,
        machineAccent: ms?.accent ?? false,
        machineSource: ms?.source || null,
        agree,
        isAnchor: si === truthAnchor,
        isMachineAnchor: si === machineAnchor,
      };
      // Extended fields — present only when phDefs supplied.
      if (tRoles && tRoles[si]) {
        syl.role    = tRoles[si].role;
        syl.pitches = tRoles[si].pitches;
        syl.dur     = tRoles[si].dur;
      }
      if (mRoles && mRoles[si]) {
        syl.machineRole    = mRoles[si].role;
        syl.machinePitches = mRoles[si].pitches;
        syl.machineDur     = mRoles[si].dur;
      }
      syllables.push(syl);
    }

    return {
      phrase: tLine.phrase,
      truthLine: tLine,
      machineLine: mLine,
      truthAnchor,
      machineAnchor,
      truthFirstAnchor,
      machineFirstAnchor,
      anchorMatch,
      firstAnchorMatch,
      syllables,
    };
  });

  return {
    lines,
    anchorMatchCount,
    firstAnchorMatchCount,
    totalLines: truthLines.length,
    syllMatchCount,
    totalSylls,
  };
}

// ── AUDIO ───────────────────────────────────────────────────────────────────
function useAudio() {
  const ctxRef = useRef(null);
  const ac = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AC();
    }
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  };

  // Multi-timbre tone synthesis — matches sandbox implementations
  const toneTimbre = (f, t0, dur, peak = 0.22, timbre = "piano") => {
    const c = ac();
    switch (timbre) {
      case "organ":     playOrganNote(c, f, t0, dur, peak); break;
      case "choir":     playChoirNote(c, f, t0, dur, peak); break;
      case "cello":     playCelloNote(c, f, t0, dur, peak); break;
      default:          playPianoNote(c, f, t0, dur, peak); break;
    }
  };

  function playPianoNote(c, f, t0, dur, peak) {
    const g = c.createGain();
    g.connect(c.destination);
    [[1,0.7],[2,0.15],[3,0.08],[4,0.04]].forEach(([h,a]) => {
      const o = c.createOscillator(); const hg = c.createGain();
      o.connect(hg); hg.connect(g); o.type="sine"; o.frequency.value=f*h; hg.gain.value=a;
      o.start(t0); o.stop(t0+dur+0.3);
    });
    g.gain.setValueAtTime(0,t0);
    g.gain.linearRampToValueAtTime(peak,t0+0.01);
    g.gain.exponentialRampToValueAtTime(peak*0.34,t0+0.08);
    g.gain.setValueAtTime(peak*0.34,t0+dur-0.05);
    g.gain.exponentialRampToValueAtTime(0.001,t0+dur+0.25);
  }

  function playOrganNote(c, f, t0, dur, peak) {
    const g = c.createGain();
    g.connect(c.destination);
    [[1,0.5],[2,0.25],[3,0.15],[4,0.08],[5,0.04],[6,0.02]].forEach(([h,a]) => {
      const o = c.createOscillator(); const hg = c.createGain();
      o.connect(hg); hg.connect(g); o.type="sine"; o.frequency.value=f*h; hg.gain.value=a;
      o.start(t0); o.stop(t0+dur+0.05);
    });
    g.gain.setValueAtTime(0,t0);
    g.gain.linearRampToValueAtTime(peak,t0+0.02);
    g.gain.setValueAtTime(peak,t0+dur-0.02);
    g.gain.linearRampToValueAtTime(0.001,t0+dur+0.04);
  }

  function playChoirNote(c, f, t0, dur, peak) {
    const g = c.createGain();
    g.connect(c.destination);
    const vib = c.createOscillator(); const vibG = c.createGain();
    vib.frequency.value=5.2; vibG.gain.value=f*0.012;
    vib.connect(vibG); vib.start(t0+0.12); vib.stop(t0+dur+0.2);
    [[1,0.6],[2,0.2],[3,0.1],[4,0.05]].forEach(([h,a]) => {
      const o = c.createOscillator(); const hg = c.createGain();
      o.connect(hg); hg.connect(g); o.type="sine"; o.frequency.value=f*h;
      vibG.connect(o.frequency); hg.gain.value=a;
      o.start(t0); o.stop(t0+dur+0.2);
    });
    g.gain.setValueAtTime(0,t0);
    g.gain.linearRampToValueAtTime(peak,t0+0.08);
    g.gain.setValueAtTime(peak,t0+dur-0.08);
    g.gain.exponentialRampToValueAtTime(0.001,t0+dur+0.18);
  }

  function playCelloNote(c, f, t0, dur, peak) {
    const g = c.createGain();
    g.connect(c.destination);
    const vib = c.createOscillator(); const vibG = c.createGain();
    vib.frequency.value=4.8; vibG.gain.value=f*0.008;
    vib.connect(vibG); vib.start(t0+0.15); vib.stop(t0+dur+0.2);
    [[1,0.55],[2,0.25],[3,0.12],[4,0.06],[5,0.03]].forEach(([h,a]) => {
      const o = c.createOscillator(); const hg = c.createGain();
      o.connect(hg); hg.connect(g); o.type="sine"; o.frequency.value=f*h;
      vibG.connect(o.frequency); hg.gain.value=a;
      o.start(t0); o.stop(t0+dur+0.2);
    });
    g.gain.setValueAtTime(0,t0);
    g.gain.linearRampToValueAtTime(peak,t0+0.09);
    g.gain.setValueAtTime(peak,t0+dur-0.06);
    g.gain.exponentialRampToValueAtTime(0.001,t0+dur+0.15);
  }

  // Legacy simple tone kept for backward compat — used by comparison harness
  const tone = (f, t0, dur, peak = 0.22) => playPianoNote(ac(), f, t0, dur, peak);

  const stop = () => {
    if (ctxRef.current) {
      try { ctxRef.current.close(); } catch (_) {}
      ctxRef.current = null;
    }
  };
  return { ac, tone, toneTimbre, stop };
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ToneTrainer() {
  const [doHz, setDoHz] = useState(349.23);  // F4 — Tone 1 canonical default
  const [bpm, setBpm] = useState(80); // half note = 1 beat per tutorial
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const [playingLine, setPlayingLine] = useState(null);
  const [playingWhich, setPlayingWhich] = useState(null); // "truth"|"machine" while a line plays
  const [playingAltoIdx, setPlayingAltoIdx] = useState(null); // currently playing alto chip index
  const [playingBassIdx, setPlayingBassIdx] = useState(null); // currently playing bass chip index
  const [playingTenorIdx, setPlayingTenorIdx] = useState(null); // currently playing tenor chip index
  const [pitchHeight, setPitchHeight] = useState(true); // always on in new sing view
  const [timbre, setTimbre] = useState("piano");         // audio timbre for sing view
  const [voicePart, setVoicePart] = useState("alto");    // alto | bass | alto-bass
  const [showReleaseNotes, setShowReleaseNotes] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [scoreTitle, setScoreTitle] = useState("");
  const [scoreSource, setScoreSource] = useState("director"); // "director" | "machine"
  // lexicon (fetched from public/lexicon/ at mount, same pattern as psalter/scripture)
  const [lexicon, setLexicon] = useState(null);
  const [lexiconError, setLexiconError] = useState(null);
  const [showAccentSource, setShowAccentSource] = useState(false);
  const [sourceTooltip, setSourceTooltip] = useState(false); // hover legend for show source
  // Feature B: encoding-aware field + comparison harness
  const [hasTruth, setHasTruth] = useState(false);      // textarea contains [accent] marks?
  const [compareMode, setCompareMode] = useState(false); // show comparison harness?
  const [compareData, setCompareData] = useState(null);  // buildComparison() result
  const [singView, setSingView] = useState("director");  // sing display: "director" | "machine"
  const [singWhich, setSingWhich] = useState("truth");   // harness sing toggle: "truth"|"machine"
  const [machineLines, setMachineLines] = useState(null);
  const [activeTone, setActiveTone] = useState(1);
  // Active phrase definition table — derived from activeTone.
  // All pointing functions receive PH; none read PH_DEFS directly.
  const PH = PH_DEFS[activeTone] || PH_DEFS[1]; // auto-encoded parallel lines

  // Fetch both lexicon files at mount and merge.
  // Cache-busted by version string so browser always fetches fresh after a version bump.
  useEffect(() => {
    const base = "/orthodox-hours/lexicon/";
    const v = `?v=${TONE_TRAINER_VERSION}`;
    Promise.all([
      fetch(base + "syllable-table.json" + v).then((r) => r.json()),
      fetch(base + "name-residue.json" + v).then((r) => r.json()),
    ])
      .then(([table, residue]) => setLexicon({ ...table, ...residue }))
      .catch(() => setLexiconError("Lexicon unavailable — using rules only"));
  }, []);

  const isPlayAllRef = useRef(false); // true only during playAll — drives auto-scroll

  // Auto-scroll the active block into view while singing all lines.
  // Single-line play does NOT scroll — card stays in place.
  useEffect(() => {
    if (playingLine === null) return;
    if (!isPlayAllRef.current) return; // only scroll during play all
    const id = (compareMode && compareData)
      ? `compare-block-${playingLine}`
      : `phrase-block-${playingLine}`;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [playingLine]);

  // docx ingest state
  const [docName, setDocName] = useState(null);
  const [docPanelOpen, setDocPanelOpen] = useState(true); // collapse/expand when docx loaded
  const [docParas, setDocParas] = useState([]);     // assignTones output
  const [docError, setDocError] = useState(null);
  const [showAllParas, setShowAllParas] = useState(false);
  const [encOpenBlocks, setEncOpenBlocks] = useState({}); // block index -> show encoding
  const [copiedBlock, setCopiedBlock] = useState(null);   // block index just copied
  const [expandedBlocks, setExpandedBlocks] = useState({}); // block index -> bool
  const pointerRef = useRef(null);
  const timerIdsRef = useRef([]); // all active setTimeout IDs — cleared by stopAll
  const { ac, tone, toneTimbre, stop } = useAudio();

  const freq = (sol) => doHz * Math.pow(2, OFF[sol] / 12);

  const lineToNotes = (line) => {
    const roles = pointLine(line, PH, activeTone);
    const notes = [];
    const isFinal = line.phrase === "Final";

    // Tutorial-faithful note values (Drillock & Ealy, Common Chant Introduction).
    // Half note = 1 beat (the predominant pulse). BPM = half notes per minute.
    const H = 60 / bpm;        // half note — intonation, cadence anchor, final cadence
    const Q = H / 2;           // quarter note — reciting tone, prep, middle cadence
    const W = H * 2;           // whole note — last syllable of Final Phrase only
    const DH = H * 1.5;        // dotted half note — Tone 3 Phrase B anchor / Tone 2 Phrase A close ≤3

    // Whether the active phrase uses a dotted-half anchor (Tone 3 Phrase B).
    const phDef = PH[line.phrase];
    const useAnchorDH = !!(phDef && phDef.anchorDH);

    // Precompute cadence syllable positions for first/middle/last logic.
    const cadIdxs = roles.map((r, i) => r.role === "cad" ? i : -1).filter(i => i >= 0);
    const cadCount = cadIdxs.length;

    // Detect whether any reciting-tone syllables precede the cadence
    // (used by Final Phrase pre-slur context rule).
    const hasRecitingTone = roles.some(r => r.role === "recite");

    // Word boundary analysis for the cadence:
    // cadenceWordCount = number of distinct words in the cadence
    // Used by: Phrase B (whole note when single word), Phrase C/D (whole note when multi-word)
    const cadRolesList = roles.filter(r => r.role === "cad");
    const cadenceWordCount = cadRolesList.reduce((count, r, i) => {
      // A new word starts after a word boundary (unless it's the first syllable)
      if (i === 0) return 1;
      return cadRolesList[i-1].wordBoundary ? count + 1 : count;
    }, 0);
    const cadenceIsSingleWord = cadenceWordCount <= 1;
    // Pass as isWordBoundary: true = single word (Phrase B whole note trigger)
    // false = multi-word (Phrase C/D whole note trigger)
    const lastCadIsWordBoundary = cadenceIsSingleWord;

    // Tone 2 Final Phrase anchor melisma: when cadCount < melismaThreshold,
    // the anchor syllable carries multiple pitches.
    // count=2: do·re·do melisma on anchor + ti(W) trailing
    // count=3: do·re melisma on anchor + do(H) + ti(W)
    // count≥4: clean one-per-syllable distribution
    const isTone1 = activeTone === 1;
    const isTone2 = activeTone === 2;
    const isTone1Final = isTone1 && line.phrase === "Final";
    const isTone1B     = isTone1 && line.phrase === "B";
    const isTone1D     = isTone1 && line.phrase === "D";
    const isTone2Final = isTone2 && line.phrase === "Final";
    const isTone2A     = isTone2 && line.phrase === "A";

    // ── Tone 1 Final Phrase: structural melisma when cadCount < 3 ────────
    // Preserves complete do·ti·la figure across available syllables.
    // count=1: do·ti melisma on anchor + la(W) — single syllable takes both pitches
    // count=2: do·ti melisma on anchor + la(W) — confirmed score-verified
    // count≥3: clean one-per-syllable distribution (handled by generic path)
    if (isTone1Final && cadCount < 3 && cadCount >= 1) {
      roles.forEach((r) => {
        if (r.role === "cad") return;
        const syllDur = r.role === "inton" ? (r.accent ? H : Q) : Q;
        const pitchDur = syllDur / r.pitches.length;
        r.pitches.forEach(p => notes.push({ sol: p, dur: pitchDur, peak: 0.2 }));
      });
      if (cadCount === 1) {
        // do·ti·la full melisma on single syllable
        buildMelisma(["do","ti","la"], ["H","H","W"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
      } else if (cadCount === 2) {
        // do·ti melisma on anchor, la(W) on close
        buildMelisma(["do","ti"], ["H","H"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
        notes.push({ sol: "la", dur: W, peak: 0.2 });
      }
      return notes;
    }

    // ── Tone 1 Phrase B: do·re melisma on anchor when cadCount < 3 ───────
    // Score-verified: count=2 → do·re(H mel) · ti(H)
    if (isTone1B && cadCount < 3 && cadCount >= 1) {
      roles.forEach((r) => {
        if (r.role === "cad") return;
        const syllDur = r.role === "inton" ? (r.accent ? H : Q) : Q;
        const pitchDur = syllDur / r.pitches.length;
        r.pitches.forEach(p => notes.push({ sol: p, dur: pitchDur, peak: 0.2 }));
      });
      if (cadCount === 1) {
        // do·re·ti full melisma on single syllable
        buildMelisma(["do","re","ti"], ["H","H","H"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
      } else if (cadCount === 2) {
        // do·re melisma on anchor, ti(H) on close
        buildMelisma(["do","re"], ["H","H"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
        notes.push({ sol: "ti", dur: H, peak: 0.2 });
      }
      return notes;
    }

    // ── Tone 1 Phrase D: two-accent architecture with melisma ─────────────
    // The five-position figure ti·do·re·do·ti is always preserved.
    // Two director/machine accent marks: anchor (ti, pos 1) + secondary (re, pos 3).
    // When count<5: positions collapse into melismas on accented syllables.
    // When count=5: exact fit, all H.
    // When count>5: extra do(Q) fills inserted between re and final do.
    // Generic distribute() is incompatible — dedicated logic here.
    // Score-verified duration rules (June 2026 session).
    if (isTone1D && cadCount >= 2) {
      // Emit non-cad roles first
      roles.forEach((r) => {
        if (r.role === "cad") return;
        const syllDur = r.role === "inton" ? (r.accent ? H : Q) : Q;
        const pitchDur = syllDur / r.pitches.length;
        r.pitches.forEach(p => notes.push({ sol: p, dur: pitchDur, peak: 0.2 }));
      });

      const cadSylls = roles.filter(r => r.role === "cad");
      const n = cadSylls.length;

      if (n <= 2) {
        // count=2: ti·do(H mel) · re·do(H mel) · ti(H) — all three positions melisma
        buildMelisma(["ti","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        buildMelisma(["re","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        notes.push({ sol: "ti", dur: H, peak: 0.2 });
      } else if (n === 3) {
        // count=3: ti·do(H mel) · re·do(H mel) · ti(H)
        buildMelisma(["ti","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        buildMelisma(["re","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        notes.push({ sol: "ti", dur: H, peak: 0.2 });
      } else if (n === 4) {
        // count=4: ti(H) · do(H) · re·do(H mel) · ti(H)
        notes.push({ sol: "ti", dur: H, peak: 0.27 }); // anchor
        notes.push({ sol: "do", dur: H, peak: 0.2 });
        buildMelisma(["re","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        notes.push({ sol: "ti", dur: H, peak: 0.2 }); // close
      } else if (n === 5) {
        // Mirror lineToRolesWithDuration: secondary-accent-aware.
        // When secondary (re) is at n-2, fills are Q and secondary gets re·do melisma.
        // When at canonical pos 2, exact fit all H.
        const _s5 = cadSylls.findIndex((r, i) => i > 0 && i < n - 1 && r.pitches[0] === "re");
        const s5n = _s5 >= 1 ? _s5 : 2;
        notes.push({ sol: "ti", dur: H, peak: 0.27 }); // anchor
        if (s5n === n - 2) {
          for (let fi = 1; fi < s5n; fi++) notes.push({ sol: "do", dur: Q, peak: 0.2 });
          buildMelisma(["re","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        } else {
          for (let fi = 1; fi < s5n; fi++) notes.push({ sol: "do", dur: H, peak: 0.2 });
          notes.push({ sol: "re", dur: H, peak: 0.2 });
          for (let fi = s5n + 1; fi < n - 1; fi++) notes.push({ sol: "do", dur: H, peak: 0.2 });
        }
        notes.push({ sol: "ti", dur: H, peak: 0.2 }); // close
      } else if (n === 6) {
        // count=6: ti(H)·do(H)·re(H)·do(Q)·do(Q)·ti(H)
        notes.push({ sol: "ti", dur: H, peak: 0.27 });
        notes.push({ sol: "do", dur: H, peak: 0.2 });
        notes.push({ sol: "re", dur: H, peak: 0.2 });
        // extra fills as Q
        for (let i = 0; i < n - 4; i++) notes.push({ sol: "do", dur: Q, peak: 0.2 });
        notes.push({ sol: "ti", dur: H, peak: 0.2 });
      } else {
        // count=7+: ti(H)·do(Q)×n·re·do(H mel)·ti(H)
        notes.push({ sol: "ti", dur: H, peak: 0.27 });
        // fills between anchor and re position
        for (let i = 0; i < n - 4; i++) notes.push({ sol: "do", dur: Q, peak: 0.2 });
        buildMelisma(["re","do"], ["H","H"], H, Q, W, DH, 0.27).forEach(x => notes.push(x));
        notes.push({ sol: "ti", dur: H, peak: 0.2 });
      }
      return notes;
    }

    // Tone 2 Final Phrase: if cadCount < 4, build melisma notes directly and return.
    if (isTone2Final && cadCount < 4 && cadCount >= 1) {
      // Emit reciting / inton / prep / preslur roles normally first
      roles.forEach((r, ri) => {
        if (r.role === "cad") return; // handled below
        let syllDur;
        if (r.role === "inton") syllDur = r.accent ? H : Q;
        else if (r.role === "preslur") {
          // Research notes: re(H·)·ti(Q) when no reciting tone precedes;
          // re(Q)·ti(Q) when normal reciting tone precedes.
          // ti is always Q; re fills the space where reciting tone would be.
          if (!hasRecitingTone) {
            // No reciting tone — re gets H· (dotted half), ti gets Q
            notes.push({ sol: r.pitches[0], dur: DH, peak: 0.2 }); // re(H·)
            notes.push({ sol: r.pitches[1] ?? "ti", dur: Q, peak: 0.2 }); // ti(Q)
          } else {
            // Normal: equal Q+Q
            r.pitches.forEach(p => notes.push({ sol: p, dur: Q, peak: 0.2 }));
          }
          return;
        } else syllDur = Q;
        const pitchDur = syllDur / r.pitches.length;
        r.pitches.forEach(p => notes.push({ sol: p, dur: pitchDur, peak: 0.2 }));
      });
      // Build melisma anchor + trailing notes
      if (cadCount === 1) {
        // full do·re·do·ti melisma on single syllable
        buildMelisma(["do","re","do","ti"], ["W","H","H","W"], H, Q, W, DH, 0.27)
          .forEach(n => notes.push(n));
      } else if (cadCount === 2) {
        // do·re·do melisma on anchor, ti(W) on trailing
        buildMelisma(["do","re","do"], ["W","H","H"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
        notes.push({ sol: "ti", dur: W, peak: 0.2 });
      } else if (cadCount === 3) {
        // do·re melisma on anchor, do(H), ti(W)
        buildMelisma(["do","re"], ["W","H"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
        notes.push({ sol: "do", dur: H, peak: 0.2 });
        notes.push({ sol: "ti", dur: W, peak: 0.2 });
      }
      return notes;
    }

    // Tone 2 Phrase A anchor melisma: when cadCount < 3, anchor carries fa·mi (or fa·mi·re).
    if (isTone2A && cadCount < 3 && cadCount >= 1) {
      roles.forEach((r) => {
        if (r.role === "cad") return;
        const syllDur = r.role === "inton" ? (r.accent ? H : Q) : Q;
        const pitchDur = syllDur / r.pitches.length;
        r.pitches.forEach(p => notes.push({ sol: p, dur: pitchDur, peak: 0.2 }));
      });
      if (cadCount === 1) {
        buildMelisma(["fa","mi","re"], ["H","H","H·"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
      } else if (cadCount === 2) {
        // fa·mi melisma on anchor, re(H·) trailing
        buildMelisma(["fa","mi"], ["H","H"], H, Q, W, DH, 0.27).forEach(n => notes.push(n));
        notes.push({ sol: "re", dur: DH, peak: 0.2 });
      }
      return notes;
    }

    roles.forEach((r, ri) => {
      let syllDur;
      if (r.role === "inton") {
        syllDur = r.accent ? H : Q;
      } else if (r.role === "recite" || r.role === "prep") {
        // Tone 1 Final Phrase: accented reciting tone syllables get H (score-verified).
        // Tone 1 Phrase A: prep note = H (score-verified: up=ti/H, Thee=ti/H).
        // All other tones/phrases: reciting tone always Q per tutorial.
        if (isTone1Final && r.role === "recite" && r.accent) syllDur = H;
        else syllDur = Q;  // reciting tone and prep always Q
      } else if (r.role === "preslur") {
        // Pre-slur = two quarter notes (re + ti) as a pickup before the prep.
        // Assign H so the melisma division (syllDur / pitches.length = H/2) yields Q+Q.
        syllDur = H;
      } else if (r.role === "cad1") {
        // Part 1 cadence (Tone 3 Final Phrase only): mi(H) · do(Q) · re(Q).
        const CAD1_DURS = [H, Q, Q];
        const peak1 = r.anchor ? 0.27 : 0.2;
        r.pitches.forEach((p, pi) => {
          notes.push({ sol: p, dur: CAD1_DURS[pi] ?? Q, peak: peak1 });
        });
        return;
      } else if (r.role === "cad") {
        const cadPos = cadIdxs.indexOf(ri);

        // ── Tone 1 Phrase A: direct duration rules (score-verified) ────────
        // Anchor H. Middle fills H. Close W.
        // Bypasses cadDuration() entirely — prime directive.
        if (isTone1 && line.phrase === "A") {
          const isLast = cadPos === cadCount - 1;
          syllDur = isLast ? W : H;
        }

        // ── Tone 1 Phrase B: direct duration rules (score-verified) ────────
        // do·re·ti figure. Anchor do(H). Fills re: H≤3, Q≥4. Close ti: H default.
        // Melisma cases (count<3) handled by early-return path above.
        // Bypasses cadDuration() entirely — prime directive.
        if (isTone1 && line.phrase === "B") {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isFirst)  syllDur = H;                          // anchor do always H
          else if (isLast) syllDur = H;                       // close ti always H (W by rhythmic engine TBD)
          else          syllDur = cadCount <= 3 ? H : Q;      // re fills: H≤3, Q≥4
        }

        // ── Tone 1 Phrase C: direct duration rules (score-verified) ────────
        // do·ti figure. Anchor do(H). Fills do: H≤3, Q≥4. Close ti: H default.
        // Bypasses cadDuration() entirely — prime directive.
        // Note: fillPitch=do caused Tone 1 C to incorrectly match Tone 2 C branch
        // in cadDuration(), which has wrong fill threshold (≤2 vs ≤3) and wrong
        // whole-note trigger. This direct handler corrects both.
        if (isTone1 && line.phrase === "C") {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isFirst)  syllDur = H;                          // anchor do always H
          else if (isLast) syllDur = H;                       // close ti always H (W by rhythmic engine TBD)
          else          syllDur = cadCount <= 3 ? H : Q;      // do fills: H≤3, Q≥4
        }

        // ── Tone 1 Final Phrase: direct duration rules (score-verified) ───
        // do·ti·la figure. Bypasses cadDuration() entirely — prime directive.
        // count=3 (exact fit): do(H) · ti(H) · la(W)
        // count≥4: do(H) · do(Q) second position at count≥5 · ti(H/Q fills) · la(W)
        // la close ALWAYS W. Anchor ALWAYS H (default; rhythmic engine TBD).
        if (isTone1Final) {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isLast)        syllDur = W;  // la always W
          else if (isFirst)  syllDur = H;  // do anchor always H
          else if (cadCount >= 5 && cadPos === 1) syllDur = Q; // do(Q) second position at count≥5
          else               syllDur = (cadCount <= 3) ? H : Q; // ti fills: H≤3, Q≥4
        }

        // ── Tone 2: use per-phrase cadDuration() ─────────────────────────
        if (!isTone1Final && !(isTone1 && line.phrase === "A") && !(isTone1 && line.phrase === "B") && !(isTone1 && line.phrase === "C") && (isTone1 || isTone2) && phDef?.cadDurs) {
          const durStr = cadDuration(phDef, cadCount, cadPos, lastCadIsWordBoundary, hasRecitingTone);
          if (durStr !== null) {
            const durMap = { "H": H, "Q": Q, "W": W, "H·": DH };
            syllDur = durMap[durStr] ?? H;
          }
          // if cadDuration returned null, fall through to generic below
        }

        // ── Generic handler (all other tones, or Tone 2 fallback) ────────
        if (syllDur === undefined) {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isFirst && isLast) {
            syllDur = isFinal ? W : H;
          } else if (isFirst) {
            syllDur = (useAnchorDH && cadCount <= (phDef?.cad?.length ?? 99)) ? DH : H;
          } else if (isLast) {
            syllDur = isFinal ? W : H;
          } else {
            syllDur = Q;
          }
        }
      } else {
        syllDur = Q;
      }

      // Multi-pitch melisma: divide syllable duration evenly across pitches.
      const pitchDur = syllDur / r.pitches.length;
      const peak = (r.role === "cad" || r.role === "cad1") && r.anchor ? 0.27 : 0.2;

      r.pitches.forEach((p) => {
        notes.push({ sol: p, dur: pitchDur, peak });
      });
    });
    return notes;
  };

  // Bass frequency — one soprano frequency divided by BASS_OCTAVE_DIV per pitch.
  // Keeps bass in the correct register regardless of starting pitch selection.
  // Optional phraseRules arg: if rules has an octaveDiv map, it takes precedence
  // over the global BASS_OCTAVE_DIV — per-tone per-phrase octave placement.
  const freq_bass = (sol, phraseRules) =>
    freq(sol) / (phraseRules?.octaveDiv?.[sol] ?? BASS_OCTAVE_DIV[sol] ?? 2);

  // Soprano frequency — diatonic third above alto, always in the octave
  // that places it just above the alto pitch (nearest third up on the staff).
  // Strategy: compute soprano mapped pitch at same octave reference as alto,
  // then if it's not higher than alto, shift up one octave.
  const freq_soprano = (sol) => {
    const mapped = SOPRANO_MAP[sol] ?? sol;
    const altoF  = freq(sol);
    const sopF0  = freq(mapped);          // soprano pitch at base octave
    // If soprano at base octave is already above alto, use it; else shift up one octave.
    return sopF0 > altoF ? sopF0 : sopF0 * 2;
  };

  // Tenor frequency — one octave below soprano reference (div-2 throughout).
  // Optional phraseRules arg for per-phrase octave override (same pattern as freq_bass).
  const freq_tenor = (sol, phraseRules) => {
    const base = freq(sol) / (phraseRules?.octaveDiv?.[sol] ?? TENOR_OCTAVE_DIV[sol] ?? 2);
    // si detuning — SATB only. In SATB the si (220Hz) beats against 2nd harmonic of
    // alto ti (233Hz) at ~13Hz — audible flutter. Flattening by 100 cents → ~208Hz
    // pushes beat rate to ~25Hz (inaudible). In tenor-solo mode the true pitch is used
    // so the la→si melodic step sounds clear and intentional.
    if (sol === "si" && phraseRules?.octaveDiv?.["si"] === 1 && voicePart === "satb") {
      return base * Math.pow(2, -100 / 1200);
    }
    return base;
  };

  // lineToNotes_soprano(line)
  // Derives soprano audio notes from rolesWD — same expanded representation as
  // alto and bass. Pitches mapped through SOPRANO_MAP; durations identical to alto.
  const lineToNotes_soprano = (line) => {
    if (!SOPRANO_TONES.has(activeTone)) return null;
    const rolesWD = lineToRolesWithDuration(line);
    const notes = [];
    rolesWD.forEach(r => {
      // Store the ALTO pitch — freq_soprano(altoPitch) does the mapping + octave correction.
      // Do NOT pre-map through SOPRANO_MAP here; freq_soprano expects the alto pitch.
      const altoPitch = r.pitches[0];
      const peak = (r.role === "cad" || r.role === "cad1") && r.anchor ? 0.27 : 0.2;
      notes.push({ sol: altoPitch, dur: r.dur, peak, soprano: true });
    });
    return notes;
  };

  // lineToNotes_bass(line)
  // Derives bass audio notes from rolesWD — the same expanded representation
  // used by the visual path. Each entry already has the correct duration (r.dur)
  // and a single pitch (r.pitches[0]) after the 1:1 bass pitch substitution.
  // This guarantees audio and visual are always structurally identical.
  const lineToNotes_bass = (line) => {
    const rules = BASS_RULES[activeTone]?.[line.phrase];
    if (!rules) return null;

    // Get the fully-expanded alto roles with durations
    const rolesWD = lineToRolesWithDuration(line);

    // Substitute pitches 1:1 using BASS_RULES — identical to bassRolesWD in render
    const bassRolesWD = rolesWD.map(r => {
      let bassPitch;
      if (r.role === "recite" || r.role === "inton") {
        bassPitch = rules.recite;
      } else if (r.role === "prep") {
        bassPitch = rules.prepMap?.[r.pitches[0]] ?? r.pitches[0];
      } else if (r.role === "preslur") {
        bassPitch = rules.preslurMap?.[r.pitches[0]] ?? r.pitches[0];
      } else if (r.role === "cad" || r.role === "cad1") {
        bassPitch = rules.cadMap?.[r.pitches[0]] ?? r.pitches[0];
      } else {
        bassPitch = r.pitches[0];
      }
      return { ...r, pitches: [bassPitch] };
    });

    // Emit audio notes directly from bassRolesWD — dur is already correct
    const notes = [];
    const peak = (r) => (r.role === "cad" || r.role === "cad1") && r.anchor ? 0.40 : 0.35;
    bassRolesWD.forEach(r => {
      notes.push({ sol: r.pitches[0], dur: r.dur, peak: peak(r), bass: true, phraseRules: rules });
    });
    return notes;
  };

  // lineToNotes_tenor(line)
  // Derives tenor audio notes from rolesWD — mirrors lineToNotes_bass exactly.
  const lineToNotes_tenor = (line) => {
    const rules = TENOR_RULES[activeTone]?.[line.phrase];
    if (!rules) return null;

    const rolesWD = lineToRolesWithDuration(line);

    // Shared pitch-map + melisma-hold collapse (constant-pitch span → one held note).
    const tenorRolesWD = deriveTenorRolesWD(rolesWD, rules);

    const notes = [];
    const peak = (r) => (r.role === "cad" || r.role === "cad1") && r.anchor ? 0.38 : 0.33;
    tenorRolesWD.forEach(r => {
      notes.push({ sol: r.pitches[0], dur: r.dur, peak: peak(r), tenor: true, phraseRules: rules });
    });
    return notes;
  };

  const playNotes = (notes, onDone) => {
    const c = ac();
    let t = c.currentTime + 0.06;
    notes.forEach((n) => {
      const f = n.bass ? freq_bass(n.sol, n.phraseRules) : n.tenor ? freq_tenor(n.sol, n.phraseRules) : freq(n.sol);
      toneTimbre(f, t, n.dur, n.peak, timbre);
      t += n.dur;
    });
    if (onDone) {
      const id = setTimeout(onDone, (t - c.currentTime) * 1000 + 40);
      timerIdsRef.current.push(id);
    }
  };

  const playNotesWithBass = (altoNotes, bassNotes, sopranoNotes, tenorNotes, onDone, li) => {
    const c = ac();
    const startT = c.currentTime + 0.06;
    let t = startT;
    let tb = startT;
    let ts = startT;
    let tt = startT;

    const playAlto    = voicePart === "alto" || voicePart === "alto-bass" || voicePart === "satb";
    const playBass    = (voicePart === "bass" || voicePart === "alto-bass" || voicePart === "satb") && bassNotes;
    const playSoprano = voicePart === "soprano" || voicePart === "satb";
    const playTenor   = (voicePart === "tenor" || voicePart === "satb") && tenorNotes;

    const scheduleAltoHighlights = (notes) => {
      let ht = startT;
      notes.forEach((n, ni) => {
        const delay = (ht - c.currentTime) * 1000;
        const capturedNi = ni; const capturedLi = li;
        timerIdsRef.current.push(setTimeout(() => {
          if (capturedLi !== null) setPlayingLine(capturedLi);
          setPlayingAltoIdx(capturedNi);
        }, delay));
        ht += n.dur;
      });
    };

    const scheduleBassHighlights = (notes) => {
      let ht = startT;
      notes.forEach((n, ni) => {
        const delay = (ht - c.currentTime) * 1000;
        const capturedNi = ni; const capturedLi = li;
        timerIdsRef.current.push(setTimeout(() => {
          if (capturedLi !== null) setPlayingLine(capturedLi);
          setPlayingBassIdx(capturedNi);
        }, delay));
        ht += n.dur;
      });
    };

    if (playAlto) {
      scheduleAltoHighlights(altoNotes);
      altoNotes.forEach((n) => { toneTimbre(freq(n.sol), t, n.dur, n.peak, timbre); t += n.dur; });
    }
    if (playBass) {
      scheduleBassHighlights(bassNotes);
      bassNotes.forEach((n) => { toneTimbre(freq_bass(n.sol, n.phraseRules), tb, n.dur, n.peak * 1.1, timbre); tb += n.dur; });
    }
    if (playSoprano && sopranoNotes) {
      scheduleAltoHighlights(sopranoNotes); // soprano uses alto chip row
      sopranoNotes.forEach((n) => { toneTimbre(freq_soprano(n.sol), ts, n.dur, n.peak, timbre); ts += n.dur; });
    }
    if (playTenor) {
      const scheduleTenorHighlights = (notes) => {
        let ht = tt;
        notes.forEach((n, ni) => {
          const delay = (ht - c.currentTime) * 1000;
          const capturedNi = ni; const capturedLi = li;
          timerIdsRef.current.push(setTimeout(() => {
            if (capturedLi !== null) setPlayingLine(capturedLi);
            setPlayingTenorIdx(capturedNi);
          }, delay));
          ht += n.dur;
        });
      };
      scheduleTenorHighlights(tenorNotes);
      tenorNotes.forEach((n) => { toneTimbre(freq_tenor(n.sol, n.phraseRules), tt, n.dur, n.peak, timbre); tt += n.dur; });
    }

    const totalDur = Math.max(t, tb, ts, tt) - startT;
    if (onDone) {
      const id = setTimeout(onDone, totalDur * 1000 + 40);
      timerIdsRef.current.push(id);
    }
  };

  // In TRUTH mode with a comparison harness open, singWhich controls whether
  // playLine/playAll sings the director truth or the machine version.
  // In sing view (no comparison), singView controls director vs. machine.
  const activeLines = () => {
    if (compareMode && singWhich === "machine" && machineLines) return machineLines;
    if (!compareMode && singView === "machine" && machineLines) return machineLines;
    return lines;
  };

  // playLineAs: play a specific line in a specific version (truth/machine)
  // without changing the global singWhich — used by per-row ▶ buttons.
  const playLineAs = (li, which) => {
    const src = which === "machine" && machineLines ? machineLines : lines;
    setPlayingLine(li);
    setPlayingAltoIdx(null); setPlayingBassIdx(null);
    setPlayingWhich(which);
    const altoNotes    = lineToNotes(src[li]);
    const bassNotes    = lineToNotes_bass(src[li]);
    const sopranoNotes = lineToNotes_soprano(src[li]);
    const tenorNotes   = lineToNotes_tenor(src[li]);
    playNotesWithBass(altoNotes, bassNotes, sopranoNotes, tenorNotes, () => { setPlayingLine(null); setPlayingAltoIdx(null); setPlayingBassIdx(null); setPlayingTenorIdx(null); setPlayingWhich(null); }, li);
  };

  // lineToRolesWithDuration(line)
  // Returns roles array annotated with `dur` (seconds) and `durKey` ("Q"|"H"|"H·"|"W")
  // per syllable — used by the chip render layer for duration-based chip widths.
  // Mirrors lineToNotes() duration logic exactly but emits role objects not audio notes.
  // For melisma syllables (multi-pitch), emits one entry per pitch with its own dur.
  const lineToRolesWithDuration = (line) => {
    const roles = pointLine(line, PH, activeTone);
    const H = 60 / bpm;
    const Q = H / 2;
    const W = H * 2;
    const DH = H * 1.5;
    const phDef = PH[line.phrase];
    const isFinal = line.phrase === "Final";
    const isTone1 = activeTone === 1;
    const isTone2 = activeTone === 2;
    const isTone1Final = isTone1 && line.phrase === "Final";
    const isTone1B     = isTone1 && line.phrase === "B";
    const isTone1D     = isTone1 && line.phrase === "D";
    const isTone2Final = isTone2 && line.phrase === "Final";
    const isTone2A     = isTone2 && line.phrase === "A";
    const cadIdxs = roles.map((r, i) => r.role === "cad" ? i : -1).filter(i => i >= 0);
    const cadCount = cadIdxs.length;
    const cadRolesListR = roles.filter(r => r.role === "cad");
    const cadenceWordCountR = cadRolesListR.reduce((count, r, i) =>
      i === 0 ? 1 : cadRolesListR[i-1].wordBoundary ? count + 1 : count, 0);
    const lastCadIsWordBoundary = cadenceWordCountR <= 1; // true = single word

    const durKey = (sec) => {
      if (Math.abs(sec - W)  < 0.01) return "W";
      if (Math.abs(sec - DH) < 0.01) return "H·";
      if (Math.abs(sec - H)  < 0.01) return "H";
      return "Q";
    };

    const result = [];

    // Tone 2 melisma anchor cases — emit multiple entries per syllable
    const emitMelisma = (baseRole, pitches, durs) => {
      pitches.forEach((p, i) => {
        result.push({ ...baseRole, pitches: [p], dur: durs[i], durKey: durKey(durs[i]), melisma: true });
      });
    };

    if (isTone2Final && cadCount < 4 && cadCount >= 1) {
      const hasRecitingToneR = roles.some(r => r.role === "recite");
      roles.forEach(r => {
        if (r.role === "cad") return;
        if (r.role === "preslur" && r.pitches.length > 1) {
          if (!hasRecitingToneR) {
            // re(H·)·ti(Q) — verse-opening, no reciting tone precedes
            result.push({ ...r, pitches: [r.pitches[0]], dur: DH, durKey: "H·", melisma: true });
            result.push({ ...r, pitches: [r.pitches[1] ?? "ti"], dur: Q, durKey: "Q", melisma: true });
          } else {
            // Normal: Q+Q
            r.pitches.forEach(p => result.push({ ...r, pitches: [p], dur: Q, durKey: "Q", melisma: true }));
          }
        } else {
          const d = r.role === "inton" ? (r.accent ? H : Q) : Q;
          result.push({ ...r, dur: d, durKey: durKey(d) });
        }
      });
      const cadRoles = roles.filter(r => r.role === "cad");
      if (cadCount === 1)      emitMelisma(cadRoles[0], ["do","re","do","ti"], [W,H,H,W]);
      else if (cadCount === 2) { emitMelisma(cadRoles[0], ["do","re","do"], [W,H,H]); result.push({...cadRoles[1], pitches:["ti"], dur:W, durKey:"W"}); }
      else if (cadCount === 3) { emitMelisma(cadRoles[0], ["do","re"], [W,H]); result.push({...cadRoles[1], pitches:["do"], dur:H, durKey:"H"}); result.push({...cadRoles[2], pitches:["ti"], dur:W, durKey:"W"}); }
      return result;
    }

    if (isTone2A && cadCount < 3 && cadCount >= 1) {
      roles.forEach(r => {
        if (r.role === "cad") return;
        const d = r.role === "inton" ? (r.accent ? H : Q) : Q;
        result.push({ ...r, dur: d, durKey: durKey(d) });
      });
      const cadRoles = roles.filter(r => r.role === "cad");
      if (cadCount === 1)      emitMelisma(cadRoles[0], ["fa","mi","re"], [H,H,DH]);
      else if (cadCount === 2) { emitMelisma(cadRoles[0], ["fa","mi"], [H,H]); result.push({...cadRoles[1], pitches:["re"], dur:DH, durKey:"H·"}); }
      return result;
    }

    // ── Tone 1 Final Phrase: structural melisma when cadCount < 3 ────────────
    // Mirrors lineToNotes() Tone 1 Final Phrase melisma path exactly.
    if (isTone1Final && cadCount < 3 && cadCount >= 1) {
      roles.forEach(r => {
        if (r.role === "cad") return;
        const d = (r.role === "recite" && r.accent) ? H : r.role === "inton" ? (r.accent ? H : Q) : Q;
        result.push({ ...r, dur: d, durKey: durKey(d) });
      });
      const cadRoles = roles.filter(r => r.role === "cad");
      if (cadCount === 1) {
        emitMelisma(cadRoles[0], ["do","ti","la"], [H,H,W]);
      } else if (cadCount === 2) {
        emitMelisma(cadRoles[0], ["do","ti"], [H,H]);
        result.push({ ...cadRoles[1], pitches: ["la"], dur: W, durKey: "W" });
      }
      return result;
    }

    // ── Tone 1 Phrase B: do·re melisma on anchor when cadCount < 3 ───────────
    // Mirrors lineToNotes() Tone 1 Phrase B melisma path exactly.
    if (isTone1B && cadCount < 3 && cadCount >= 1) {
      roles.forEach(r => {
        if (r.role === "cad") return;
        const d = r.role === "inton" ? (r.accent ? H : Q) : Q;
        result.push({ ...r, dur: d, durKey: durKey(d) });
      });
      const cadRoles = roles.filter(r => r.role === "cad");
      if (cadCount === 1) {
        emitMelisma(cadRoles[0], ["do","re","ti"], [H,H,H]);
      } else if (cadCount === 2) {
        emitMelisma(cadRoles[0], ["do","re"], [H,H]);
        result.push({ ...cadRoles[1], pitches: ["ti"], dur: H, durKey: "H" });
      }
      return result;
    }

    // ── Tone 1 Phrase D: two-accent architecture with melisma ─────────────────
    // Mirrors lineToNotes() Tone 1 Phrase D path exactly.
    if (isTone1D && cadCount >= 2) {
      roles.forEach(r => {
        if (r.role === "cad") return;
        const d = r.role === "inton" ? (r.accent ? H : Q) : Q;
        result.push({ ...r, dur: d, durKey: durKey(d) });
      });
      const cadRoles = roles.filter(r => r.role === "cad");
      const n = cadRoles.length;
      if (n <= 2) {
        emitMelisma(cadRoles[0], ["ti","do"], [H,H]);
        emitMelisma(cadRoles[1] ?? cadRoles[0], ["re","do"], [H,H]);
        result.push({ ...(cadRoles[2] ?? cadRoles[n-1]), pitches: ["ti"], dur: H, durKey: "H" });
      } else if (n === 3) {
        emitMelisma(cadRoles[0], ["ti","do"], [H,H]);
        emitMelisma(cadRoles[1], ["re","do"], [H,H]);
        result.push({ ...cadRoles[2], pitches: ["ti"], dur: H, durKey: "H" });
      } else if (n === 4) {
        result.push({ ...cadRoles[0], pitches: ["ti"], dur: H, durKey: "H" });
        result.push({ ...cadRoles[1], pitches: ["do"], dur: H, durKey: "H" });
        emitMelisma(cadRoles[2], ["re","do"], [H,H]);
        result.push({ ...cadRoles[3], pitches: ["ti"], dur: H, durKey: "H" });
      } else if (n === 5) {
        // Find where pointLine placed the secondary accent ("re").
        // When it sits at n-2 (immediately before the close), position-4 do has no separate
        // syllable — it collapses onto the secondary as a re·do melisma. Fills before it: Q.
        // Score-verified: "spoke in the Proph-ets" →
        //   ti(H) · do(Q) · do(Q) · re·do(H mel) · ti(H)   [secIdx=3, n-2=3]
        // When the secondary is at canonical position 2 (both fills have their own syllables),
        // all positions are exact fit — unchanged all-H behaviour.
        const secIdx5 = cadRoles.findIndex((r, i) => i > 0 && i < n - 1 && r.pitches[0] === "re");
        const s5 = secIdx5 >= 1 ? secIdx5 : 2; // fallback to canonical pos 2
        result.push({ ...cadRoles[0], pitches: ["ti"], dur: H, durKey: "H" }); // anchor
        if (s5 === n - 2) {
          // Secondary immediately before close → fills (Q) + re·do melisma
          for (let fi = 1; fi < s5; fi++) result.push({ ...cadRoles[fi], pitches: ["do"], dur: Q, durKey: "Q" });
          emitMelisma(cadRoles[s5], ["re", "do"], [H, H]);
        } else {
          // Exact fit — every position gets its own syllable, all H
          for (let fi = 1; fi < s5; fi++) result.push({ ...cadRoles[fi], pitches: ["do"], dur: H, durKey: "H" });
          result.push({ ...cadRoles[s5], pitches: ["re"], dur: H, durKey: "H" });
          for (let fi = s5 + 1; fi < n - 1; fi++) result.push({ ...cadRoles[fi], pitches: ["do"], dur: H, durKey: "H" });
        }
        result.push({ ...cadRoles[n - 1], pitches: ["ti"], dur: H, durKey: "H" }); // close
      } else if (n === 6) {
        result.push({ ...cadRoles[0], pitches: ["ti"], dur: H, durKey: "H" });
        result.push({ ...cadRoles[1], pitches: ["do"], dur: H, durKey: "H" });
        result.push({ ...cadRoles[2], pitches: ["re"], dur: H, durKey: "H" });
        for (let i = 3; i < n - 1; i++) result.push({ ...cadRoles[i], pitches: ["do"], dur: Q, durKey: "Q" });
        result.push({ ...cadRoles[n-1], pitches: ["ti"], dur: H, durKey: "H" });
      } else {
        result.push({ ...cadRoles[0], pitches: ["ti"], dur: H, durKey: "H" });
        for (let i = 1; i < n - 3; i++) result.push({ ...cadRoles[i], pitches: ["do"], dur: Q, durKey: "Q" });
        emitMelisma(cadRoles[n-3], ["re","do"], [H,H]);
        result.push({ ...cadRoles[n-1], pitches: ["ti"], dur: H, durKey: "H" });
      }
      return result;
    }

    roles.forEach((r, ri) => {
      let d;
      if (r.role === "inton")                             d = r.accent ? H : Q;
      else if (r.role === "recite" || r.role === "prep") {
        // Tone 1 Final Phrase: accented reciting tone → H (score-verified).
        // Tone 1 Phrase A: prep note → H (score-verified: up=ti/H, Thee=ti/H).
        if (isTone1Final && r.role === "recite" && r.accent) d = H;
        else d = Q;
      }
      else if (r.role === "preslur")                      d = H / r.pitches.length; // Q per pitch
      else if (r.role === "cad1")                         d = ri === cadIdxs[0] ? H : Q;
      else if (r.role === "cad") {
        const cadPos = cadIdxs.indexOf(ri);
        // ── Tone 1 Phrase A: direct duration rules — bypasses cadDuration() ────
        if (isTone1 && line.phrase === "A") {
          const isLast = cadPos === cadCount - 1;
          d = isLast ? W : H;
        }

        // ── Tone 1 Phrase B: direct duration rules — bypasses cadDuration() ────
        if (isTone1 && line.phrase === "B") {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isFirst)     d = H;
          else if (isLast) d = H;
          else             d = cadCount <= 3 ? H : Q;
        }

        // ── Tone 1 Phrase C: direct duration rules — bypasses cadDuration() ────
        if (isTone1 && line.phrase === "C") {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isFirst)     d = H;
          else if (isLast) d = H;
          else             d = cadCount <= 3 ? H : Q;
        }

        // ── Tone 1 Final Phrase: direct duration rules — bypasses cadDuration() ──
        if (isTone1Final) {
          const isFirst = cadPos === 0;
          const isLast  = cadPos === cadCount - 1;
          if (isLast)        d = W;
          else if (isFirst)  d = H;
          else if (cadCount >= 5 && cadPos === 1) d = Q;
          else               d = (cadCount <= 3) ? H : Q;
        }
        if (!isTone1Final && !(isTone1 && line.phrase === "A") && !(isTone1 && line.phrase === "B") && !(isTone1 && line.phrase === "C") && (isTone1 || isTone2) && phDef?.cadDurs) {
          const ds = cadDuration(phDef, cadCount, cadPos, lastCadIsWordBoundary, true);
          const dm = {"H":H,"Q":Q,"W":W,"H·":DH};
          d = ds ? (dm[ds] ?? H) : undefined;
        }
        if (d === undefined) {
          const isFirst = cadPos === 0; const isLast = cadPos === cadCount - 1;
          d = (isFirst && isLast) ? (isFinal ? W : H)
            : isFirst ? H : isLast ? (isFinal ? W : H) : Q;
        }
      } else d = Q;

      // For preslur with two pitches, emit one entry per pitch — mark melisma for grouping
      if (r.role === "preslur" && r.pitches.length > 1) {
        r.pitches.forEach(p => result.push({ ...r, pitches: [p], dur: H/2, durKey: "Q", melisma: true }));
      } else {
        result.push({ ...r, dur: d, durKey: durKey(d) });
      }
    });
    return result;
  };

  const playLine = (li) => {
    isPlayAllRef.current = false;
    setPlayingLine(li);
    setPlayingAltoIdx(null); setPlayingBassIdx(null);
    setPlayingWhich(singWhich);
    const altoNotes    = lineToNotes(activeLines()[li]);
    const bassNotes    = lineToNotes_bass(activeLines()[li]);
    const sopranoNotes = lineToNotes_soprano(activeLines()[li]);
    const tenorNotes   = lineToNotes_tenor(activeLines()[li]);
    playNotesWithBass(altoNotes, bassNotes, sopranoNotes, tenorNotes, () => { setPlayingLine(null); setPlayingAltoIdx(null); setPlayingBassIdx(null); setPlayingTenorIdx(null); setPlayingWhich(null); }, li);
  };

  const playAll = () => {
    timerIdsRef.current.forEach(id => clearTimeout(id));
    timerIdsRef.current = [];
    isPlayAllRef.current = true;
    const c = ac();
    const startT = c.currentTime + 0.06;
    let t = startT;
    let tb = startT;
    let ts = startT;
    let tt = startT;
    const which = compareMode && machineLines ? singWhich : "truth";
    const playAlto      = voicePart === "alto" || voicePart === "alto-bass" || voicePart === "satb";
    const playBassVoice = voicePart === "bass" || voicePart === "alto-bass" || voicePart === "satb";
    const playSoprano   = voicePart === "soprano" || voicePart === "satb";
    const playTenorVoice = voicePart === "tenor" || voicePart === "satb";
    setPlayingWhich(which);
    activeLines().forEach((line, li) => {
      const altoNotes    = lineToNotes(line);
      const bassNotes    = lineToNotes_bass(line);
      const sopranoNotes = lineToNotes_soprano(line);
      const tenorNotes   = lineToNotes_tenor(line);
      const start = t;
      const id1 = setTimeout(() => { setPlayingLine(li); setPlayingAltoIdx(null); setPlayingBassIdx(null); }, (start - c.currentTime) * 1000);
      timerIdsRef.current.push(id1);

      if (playAlto) {
        let ht = t;
        altoNotes.forEach((n, ni) => {
          const delay = (ht - c.currentTime) * 1000;
          const capturedNi = ni; const capturedLi = li;
          timerIdsRef.current.push(setTimeout(() => {
            setPlayingLine(capturedLi); setPlayingAltoIdx(capturedNi);
          }, delay));
          ht += n.dur;
        });
        altoNotes.forEach((n) => { toneTimbre(freq(n.sol), t, n.dur, n.peak, timbre); t += n.dur; });
      }

      if (playBassVoice && bassNotes) {
        if (!playAlto || voicePart === "alto-bass" || voicePart === "satb") {
          let ht = tb;
          bassNotes.forEach((n, ni) => {
            const delay = (ht - c.currentTime) * 1000;
            const capturedNi = ni; const capturedLi = li;
            timerIdsRef.current.push(setTimeout(() => {
              setPlayingLine(capturedLi); setPlayingBassIdx(capturedNi);
            }, delay));
            ht += n.dur;
          });
        }
        bassNotes.forEach((n) => { toneTimbre(freq_bass(n.sol, n.phraseRules), tb, n.dur, n.peak * 1.1, timbre); tb += n.dur; });
        tb += (60 / bpm) / 2;
      }

      if (playSoprano) {
        let ht = ts;
        sopranoNotes.forEach((n, ni) => {
          const delay = (ht - c.currentTime) * 1000;
          const capturedNi = ni; const capturedLi = li;
          timerIdsRef.current.push(setTimeout(() => {
            setPlayingLine(capturedLi); setPlayingAltoIdx(capturedNi);
          }, delay));
          ht += n.dur;
        });
        sopranoNotes.forEach((n) => { toneTimbre(freq_soprano(n.sol), ts, n.dur, n.peak, timbre); ts += n.dur; });
        ts += (60 / bpm) / 2;
      }

      if (playTenorVoice && tenorNotes) {
        let ht = tt;
        tenorNotes.forEach((n, ni) => {
          const delay = (ht - c.currentTime) * 1000;
          const capturedNi = ni; const capturedLi = li;
          timerIdsRef.current.push(setTimeout(() => {
            setPlayingLine(capturedLi); setPlayingTenorIdx(capturedNi);
          }, delay));
          ht += n.dur;
        });
        tenorNotes.forEach((n) => { toneTimbre(freq_tenor(n.sol, n.phraseRules), tt, n.dur, n.peak, timbre); tt += n.dur; });
        tt += (60 / bpm) / 2;
      }

      if (playAlto) t += (60 / bpm) / 2;
    });
    const totalDur = Math.max(t, tb, ts) - startT;
    const id2 = setTimeout(() => { setPlayingLine(null); setPlayingAltoIdx(null); setPlayingBassIdx(null); setPlayingTenorIdx(null); setPlayingWhich(null); }, totalDur * 1000 + 40);
    timerIdsRef.current.push(id2);
  };

  const stopAll = () => {
    timerIdsRef.current.forEach(id => clearTimeout(id));
    timerIdsRef.current = [];
    isPlayAllRef.current = false;
    stop();
    setPlayingLine(null);
    setPlayingAltoIdx(null); setPlayingBassIdx(null);
    setPlayingWhich(null);
  };

  // Pitch button — intones the reciting-tone pitch for each SATB part in sequence
  // (soprano → alto → tenor → bass), giving singers their reference note.
  // Tone 1 Phrase A reciting tones: alto=re, soprano=fa (SOPRANO_MAP[re]), tenor=sol, bass=sol.
  const playPitch = () => {
    const H = 0.7; // half-note feel — long enough to hear clearly
    playNotes([
      { sol: "fa",  dur: H, peak: 0.7 },                              // soprano
      { sol: "re",  dur: H, peak: 0.7 },                              // alto
      { sol: "sol", dur: H, peak: 0.7, tenor: true },                 // tenor (one octave above bass)
      { sol: "sol", dur: H, peak: 0.8, bass: true },                  // bass
    ]);
  };

  // ── PHRASE-STRUCTURAL AUTO ACCENT ENGINE (v0.5.1) ──────────────────────────
  // Takes a words array already syllabified by wordFromDisplay (lexicon has done
  // its job), and the phrase type. Reads the existing `accent` flag as a STRESS
  // CANDIDATE signal (is this syllable naturally stressed?), then applies the
  // tutorial's phrase structural rules to mark exactly the right 1-2 syllables:
  //
  //   Anchor    (all phrases)    : last internally stressed syllable
  //                                (with the existing monosyllable-final backup)
  //   Intonation (Phrases A + C) : first stressed syllable
  //
  // Everything else gets accent = false.
  // Accuracy ceiling = lexicon quality. Logic is phrase-structural, not word-level.
  const autoAccentLine = (words, phrase) => {
    // Build flat syllable list, reading accent as "stressed" candidate.
    const flat = [];
    words.forEach((w, wi) => {
      w.sylls.forEach((s, si) => {
        flat.push({ text: s.text, stressed: s.accent, single: w.sylls.length === 1, wi, si });
      });
    });
    if (!flat.length) return words;

    const lastIdx = flat.length - 1;
    // Filter STOP-list words from anchor candidates. The lexicon marks function
    // words (the, from, or, as, this, he, our, etc.) as stressed, which causes
    // the backup rule to land on them. The STOP list is defined by grammatical
    // function — not test fixtures — so it is the correct filter here.
    // Note: "me" and "thee" are NOT in STOP and remain valid anchor candidates.
    // Guard: s.single ensures we only filter monosyllabic words. A syllable whose
    // text happens to spell a STOP word but belongs to a polysyllabic word (e.g.
    // "in" from "incense", "or" from "glory", "as" from "Pascha") must NOT be
    // filtered — it is a syllable fragment, not a function word.
    const stressedIdxs = flat
      .map((s, i) => (s.stressed && !(s.single && STOP.has(s.text.toLowerCase())) ? i : -1))
      .filter((i) => i >= 0);

    // ── Anchor: last internally stressed syllable ──────────────────────────
    let anchorIdx = lastIdx; // fallback: use last syllable if nothing is stressed
    if (stressedIdxs.length > 0) {
      let c = stressedIdxs[stressedIdxs.length - 1];
      // Last-internal backup: final stressed monosyllable → step back one.
      if (c === lastIdx && flat[lastIdx].single && stressedIdxs.length >= 2) {
        c = stressedIdxs[stressedIdxs.length - 2];
      }
      anchorIdx = c;
    }

    // ── Intonation: first stressed syllable (only for phrases where inton:true) ──
    let intonIdx = -1;
    if (PH[phrase] && PH[phrase].inton && stressedIdxs.length > 0) {
      const first = stressedIdxs[0];
      // Don't double-mark: if only one stressed syllable in the phrase it serves
      // as the anchor; no separate intonation mark.
      if (first !== anchorIdx) intonIdx = first;
    }

    // ── Tone 1 Phrase D: two-accent cadence (primary anchor + secondary accent) ──
    // Primary anchor (ti) = first stressed syllable → drives cadence boundary.
    // Secondary accent (re) = last internal stressed syllable (already anchorIdx).
    // Both must be in accentSet so pointLine() sees two marks and uses two-accent path.
    let phraseD1PrimaryIdx = -1;
    if (activeTone === 1 && phrase === "D" && stressedIdxs.length >= 2) {
      const c = stressedIdxs[0]; // first stressed syllable = primary anchor
      if (c !== anchorIdx) phraseD1PrimaryIdx = c;
    }

    // ── Tone 3 Final Phrase: two-anchor cadence (first anchor + second anchor) ──
    // The two-part cadence requires two internal accent marks (31/31 corpus instances).
    // Mark the second-to-last stressed syllable as the first cadence anchor.
    let firstAnchorIdx = -1;
    if (activeTone === 3 && phrase === "Final" && stressedIdxs.length >= 2) {
      let c = stressedIdxs[stressedIdxs.length - 2];
      // Apply the same monosyllable backup: if this candidate is the very last syllable
      // and a standalone monosyllable, step back once more.
      if (c === lastIdx && flat[lastIdx].single && stressedIdxs.length >= 3) {
        c = stressedIdxs[stressedIdxs.length - 3];
      }
      if (c !== anchorIdx) firstAnchorIdx = c;
    }

    // ── Rebuild words: accent = true only at anchor + intonation + first Final anchor ──
    const accentSet = new Set([anchorIdx]);
    if (intonIdx >= 0) accentSet.add(intonIdx);
    if (firstAnchorIdx >= 0) accentSet.add(firstAnchorIdx);
    if (phraseD1PrimaryIdx >= 0) accentSet.add(phraseD1PrimaryIdx);

    let fi = 0;
    return words.map((w) => ({
      ...w,
      sylls: w.sylls.map((s) => ({ ...s, accent: accentSet.has(fi++) })),
    }));
  };

  // analyzeText(txt) — shared pointing logic used by both the Point button
  // and the try example button. Takes text explicitly so it works regardless
  // of React state update timing (setText is async; this is synchronous).
  const analyzeText = (txt) => {
    if (!txt.trim()) { setLines([]); return; }
    const { hasBrackets } = parseBracketedText(txt);
    const activeRot = ROT_DEFS[activeTone] || ROT_DEFS[1];
    if (hasBrackets) {
      // TRUTH MODE: brackets are authoritative over the lexicon.
      const tLines = parseTruthLines(txt, lexicon, activeRot);
      if (!tLines.length) { setLines([]); return; }
      const mLines = autoEncodeLines(tLines, lexicon, PH);
      const cmp = buildComparison(tLines, mLines, PH, activeTone);
      setLines(tLines);
      setMachineLines(mLines);
      setCompareData(cmp);
      setHasTruth(true);
      if (!compareMode) setCompareMode(false);
      setSingView("director");
      setSingWhich("truth");
    } else {
      // AUTO MODE: syllabify via lexicon, then apply phrase-structural accent engine.
      const raw = txt.split("\n").map((s) => s.trim()).filter(Boolean);
      const next = raw.map((ln, i) => {
        const phrase = phraseForLine(i, raw.length, activeRot);
        const rawWords = ln.split(/\s+/)
          .filter((w) => /[A-Za-z]/.test(w))
          .map((w) => wordFromDisplay(w, lexicon))
          .filter(Boolean);
        const words = autoAccentLine(rawWords, phrase);
        return { phrase, words };
      });
      setLines(next);
      setHasTruth(false);
      setCompareData(null);
      setMachineLines(null);
      setCompareMode(false);
      setSingView("director");
    }
  };

  const analyze = () => analyzeText(text);

  // ── docx ingest handlers ──────────────────────────────────────────────────
  const onDocxFile = async (file) => {
    if (!file) return;
    setDocError(null);
    setDocName(file.name);
    setDocParas([]);
    try {
      const buf = await file.arrayBuffer();
      const zip = await JSZip.loadAsync(buf);
      const docXml = zip.file("word/document.xml");
      if (!docXml) throw new Error("Not a Word .docx (no word/document.xml found).");
      const xml = await docXml.async("string");
      const paras = assignTones(parseDocxParagraphs(xml));
      setDocParas(paras);
      if (!paras.some((p) => p.runs.some((r) => r.underline))) {
        setDocError("No underlined (accented) text found in this document.");
      }
    } catch (e) {
      setDocError(e.message || String(e));
    }
  };

  // Segment the document into stichera blocks.
  const blocks = useMemo(() => segmentStichera(docParas), [docParas]);

  // Blocks shown in the picker: non-suspect by default; suspect ones only when
  // "show all" is ticked.
  const visibleBlocks = useMemo(
    () => blocks.filter((b) => showAllParas || !b.suspect),
    [blocks, showAllParas]
  );

  // Context: the paragraph immediately before the block's first line and
  // immediately after its last line, in original document order. Gives a singer
  // holding the paper service a place to anchor the sticheron.
  const blockContext = (block) => {
    const firstIdx = block.lines[0]?.idx;
    const lastIdx = block.lines[block.lines.length - 1]?.idx;
    const before = docParas.find((p) => p.idx === firstIdx - 1) || null;
    const after = docParas.find((p) => p.idx === lastIdx + 1) || null;
    return { before, after };
  };

  const copyBlock = async (block, i) => {
    try {
      await navigator.clipboard.writeText(encodeBlock(block));
      setCopiedBlock(i);
      setTimeout(() => setCopiedBlock((c) => (c === i ? null : c)), 1400);
    } catch {
      setCopiedBlock(null);
    }
  };

  const toggleEnc = (i) => setEncOpenBlocks((o) => ({ ...o, [i]: !o[i] }));

  // Convert one docx paragraph's runs into a pointer "line" {phrase, words}.
  // Uses lexicon syllabification (so "upon" → u·pon, not one chip), then maps
  // OCA underline spans onto syllables by vowel-nucleus overlap (SYLLABIFIER_SPEC §7).
  // Underline is authoritative over the lexicon stress guess when present.
  const paraToPointerLine = (para, phrase) => {
    // Step 1: build a char-level representation with per-char underline flags.
    let charText = "";
    const charUnderline = [];
    for (const r of para.runs) {
      for (const ch of r.text) {
        charText += ch;
        charUnderline.push(!!r.underline);
      }
    }

    // Step 2: tokenize into words on whitespace, preserving char offsets.
    const wordTokens = [];
    let i = 0;
    while (i < charText.length) {
      if (/\s/.test(charText[i])) { i++; continue; }
      let j = i;
      while (j < charText.length && !/\s/.test(charText[j])) j++;
      const raw = charText.slice(i, j);
      const ulSlice = charUnderline.slice(i, j);
      const alphaMatch = raw.match(/[A-Za-z]+/);
      if (alphaMatch) {
        wordTokens.push({ display: raw, core: alphaMatch[0],
                          coreStart: alphaMatch.index, ulSlice });
      }
      i = j;
    }

    // Step 3: for each word, derive syllables and accent from underline span.
    // Delegates to syllabifyWithDirectorMark — same logic as the bracket path.
    const words = wordTokens.map(({ display, core, coreStart, ulSlice }) => {
      const coreUl = ulSlice.slice(coreStart, coreStart + core.length);
      const anyUnderlined = coreUl.some(Boolean);

      // No underline → unaccented; syllabify for display only.
      if (!anyUnderlined) {
        const wordObj = wordFromDisplay(core, lexicon);
        if (!wordObj) return null;
        return { display, sylls: wordObj.sylls.map(s => ({ ...s, accent: false })) };
      }

      // Derive markStart/markEnd from underline flags, then delegate.
      const markStart = coreUl.indexOf(true);
      const markEnd   = coreUl.lastIndexOf(true);
      const { sylls, accentIdx } = syllabifyWithDirectorMark(core, markStart, markEnd, lexicon);

      return {
        display,
        sylls: sylls.map((t, si) => ({
          text: typeof t === "string" ? t : t.text,
          accent: si === accentIdx,
          source: "truth",
        })),
      };
    }).filter(Boolean);

    return { phrase, words };
  };

    // Load a whole sticheron block into the pointer with correct A-B-…-Final
  // rotation across its lines, then scroll to the pointer.
  const sendBlockToPointer = (block) => {
    if (!PH_DEFS[block.tone]) return; // guarded in UI; defensive here — only point tones we know
    const blockPH = PH_DEFS[block.tone];
    const blockRot = ROT_DEFS[block.tone] || ROT_DEFS[1];
    // Sync the active tone to match the block being pointed.
    setActiveTone(block.tone);
    const n = block.lines.length;
    const next = block.lines.map((p, i) => paraToPointerLine(p, blockLinePhrase(i, n, blockRot)));
    // Also populate the textarea with the encoded text (Feature B: [accent]/|// format).
    // When the user hits "Analyze & point" it will re-run in TRUTH mode.
    const encoded = encodeBlock(block);
    setText(encoded);
    setLines(next);
    // The block's OCA-underline accents ARE truth — set hasTruth and build comparison.
    const mLines = autoEncodeLines(next, lexicon, blockPH);
    const cmp = buildComparison(next, mLines, blockPH, block.tone);
    setMachineLines(mLines);
    setCompareData(cmp);
    setHasTruth(true);
    setCompareMode(false); // user must hit "Show Director vs. Machine ▸" explicitly
    setSingView("director");
    setSingWhich("truth");
    setTimeout(() => {
      if (pointerRef.current) pointerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const toggleBlock = (i) => setExpandedBlocks((o) => ({ ...o, [i]: !o[i] }));

  // shared styles
  const gold = "#8B6914";
  const ink = "#2a2118";
  const btn = {
    background: "transparent", border: `1px solid ${gold}`, color: gold,
    borderRadius: "3px", padding: "5px 14px", fontSize: "0.78rem",
    letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Georgia, serif",
  };
  const roleBg = {
    recite: "rgba(40,58,92,.06)", inton: "rgba(40,58,92,.10)",
    prep: "rgba(180,137,43,.16)", cad: "rgba(122,36,24,.10)",
    cad1: "rgba(122,36,24,.05)",  // Part 1 cadence — lighter burgundy (visually distinct from cad Part 2)
    preslur: "rgba(180,137,43,.22)",  // slightly stronger amber — two-note pickup before prep
  };
  const roleColor = { recite: "#283a5c", inton: "#283a5c", prep: "#8a6a14", cad: "#7a2418", cad1: "#9a3c2c", preslur: "#8a6a14" };

  // Global tone-wide height maps for bass and tenor.
  // Computed once across all phrases so chip heights are consistent across
  // phrase boundaries — e.g. sol (A–D reciting) and la/si/mi (Final Phrase)
  // share the same scale rather than each phrase being independently normalised.
  // Unified bass+tenor height map — both voices normalised together across all phrases.
  // ── SCORE PRINT ────────────────────────────────────────────────────────────
  // buildScorePayload(sourceLines, titleOverride)
  // Assembles the serializable payload sent to score-print.html via postMessage.
  // Uses existing voice derivation logic — no new pointing computations.
  const buildScorePayload = (sourceLines, title, source) => {
    const payload = {
      version: "1.0",
      toolVersion: TONE_TRAINER_VERSION,
      tone: activeTone,
      toneLabel: `Tone ${activeTone}`,
      title: title || `Tone ${activeTone} Sticheron`,
      subtitle: `Common Chant (Obikhod) · arr. from L'vov/Bakhmetev · Tone ${activeTone}`,
      source: source || "director",
      doHz,    // current do= pitch — score renderer uses this to set key signature
      lines: [],
    };

    sourceLines.forEach((line, li) => {
      const rolesWD = lineToRolesWithDuration(line);

      // Authoritative word boundaries come from line.words (each word's syllables,
      // in order). The non-melisma roles in rolesWD are exactly those syllables in
      // the same order; melisma expansion repeats a syllable across notes. Walk both
      // in lockstep to tag each drawn syllable with hyphenAfter: true when it is NOT
      // the last syllable of its word, so the renderer connects it to the next
      // syllable with a hyphen. Localized here — no pointing-engine change.
      const flatSylls = [];
      (line.words || []).forEach((w) => {
        const ss = w.sylls || [];
        ss.forEach((s, si) => flatSylls.push({ lastInWord: si === ss.length - 1 }));
      });
      let _sylPtr = 0;
      let _prevText = null;

      // Alto: flat per-note array — melisma already expanded by lineToRolesWithDuration
      const altoEntries = rolesWD.map(r => {
        // Mirror the renderer's melisma-repeat test: a melisma role whose text
        // matches the previous role is a held continuation, not a new syllable.
        const isMelismaRepeat = r.melisma === true && _prevText !== null && r.text === _prevText;
        let hyphenAfter = false;
        if (!isMelismaRepeat) {
          const syl = flatSylls[_sylPtr];
          hyphenAfter = syl ? !syl.lastInWord : false;
          _sylPtr++;
        }
        _prevText = r.text;
        return {
          text:    r.text,
          pitch:   r.pitches[0],
          durKey:  r.durKey,
          role:    r.role,
          melisma: r.melisma === true,
          accent:  r.accent === true,   // drives bold rendering in score
          hyphenAfter,                  // true → connect to next drawn syllable (same word)
        };
      });

      // Soprano: 1:1 index-aligned with alto; pitch = SOPRANO_MAP[alto.pitch]
      const sopranoEntries = SOPRANO_TONES.has(activeTone)
        ? altoEntries.map(r => ({
            pitch:  SOPRANO_MAP[r.pitch] ?? r.pitch,
            durKey: r.durKey,
          }))
        : null;

      // Bass: apply BASS_RULES substitution exactly as in lineToNotes_bass
      const bassRules = BASS_RULES[activeTone]?.[line.phrase];
      const bassEntries = bassRules ? rolesWD.map(r => {
        let p;
        const orig = r.pitches[0];
        if (r.role === "recite" || r.role === "inton") p = bassRules.recite;
        else if (r.role === "prep")    p = bassRules.prepMap?.[orig]   ?? orig;
        else if (r.role === "preslur") p = bassRules.preslurMap?.[orig] ?? orig;
        else                           p = bassRules.cadMap?.[orig]    ?? orig;
        // Per-phrase octaveDiv overrides the global BASS_OCTAVE_DIV
        const octaveDiv = bassRules.octaveDiv?.[p] ?? BASS_OCTAVE_DIV[p] ?? 2;
        return { pitch: p, durKey: r.durKey, melisma: r.melisma === true, octaveDiv };
      }) : null;

      // Tenor: same substitution pattern as bass using TENOR_RULES
      const tenorRules = TENOR_RULES[activeTone]?.[line.phrase];
      const TENOR_OCTAVE_DIV_LOCAL = { la:1, si:1, ti:2, do:2, di:2, re:2, mi:2, fa:2, sol:2 };
      // Shared pitch-map + melisma-hold collapse. Collapsed (held) entries carry
      // spanStart (alto column index) + spanCount so the columnar score renderer can
      // anchor a held tenor note across the alto melisma it covers.
      const tenorEntries = tenorRules ? deriveTenorRolesWD(rolesWD, tenorRules).map(r => {
        const p = r.pitches[0];
        const octaveDiv = tenorRules.octaveDiv?.[p] ?? TENOR_OCTAVE_DIV_LOCAL[p] ?? 2;
        return { pitch: p, durKey: r.durKey, melisma: r.melisma === true, octaveDiv,
                 spanStart: r.spanStart, spanCount: r.spanCount };
      }) : null;

      payload.lines.push({
        phrase: line.phrase,
        barlineAfter: line.barlineAfter ?? (li === sourceLines.length - 1 ? "final" : (sourceLines[li + 1]?.phrase === "Final" ? "penultimate" : "single")),
        alto:    altoEntries,
        soprano: sopranoEntries,
        bass:    bassEntries,
        tenor:   tenorEntries,
      });
    });

    return payload;
  };

  // Opens score-print.html in a new tab and sends the payload via postMessage.
  const openScorePrint = (title, source) => {
    // Choose source lines: director if available and requested, else machine
    const hasDirector = lines.length > 0;
    const hasMachine  = !!machineLines?.length;
    let sourceLines;
    if (source === "director" && hasDirector) sourceLines = lines;
    else if (source === "machine" && hasMachine)  sourceLines = machineLines;
    else if (hasDirector)  sourceLines = lines;
    else if (hasMachine)   sourceLines = machineLines;
    else return; // nothing to render

    const payload = buildScorePayload(sourceLines, title, source);

    // Cache-bust by trainer version so a deployed score-print.html update is never served
    // stale from the browser cache (the in-page version label comes from the payload, so a
    // cached old file would otherwise render old logic under a fresh version string).
    const win = window.open(
      "/orthodox-hours/score-print.html?v=" + encodeURIComponent(TONE_TRAINER_VERSION),
      "_blank"
    );
    if (!win) { alert("Popup blocked — please allow popups for this site."); return; }

    // Retry loop: post the payload every 200ms until the tab acknowledges
    // with "score-print-ack". This survives the race between window.open()
    // returning and the new tab finishing its script/CDN load.
    let ackReceived = false;
    const ackHandler = (e) => {
      if (e.source === win && e.data === "score-print-ack") {
        ackReceived = true;
        window.removeEventListener("message", ackHandler);
      }
    };
    window.addEventListener("message", ackHandler);

    let attempts = 0;
    const send = () => {
      if (ackReceived || win.closed || attempts > 30) return; // give up after 6s
      attempts++;
      try { win.postMessage({ type: "SCORE_DATA", payload }, "*"); } catch(_) {}
      setTimeout(send, 200);
    };
    setTimeout(send, 200); // first attempt after 200ms
  };

  // Derive the default title when the modal opens:
  //   "Tone N — [first 4 words of sticheron]"
  const defaultScoreTitle = () => {
    const src = lines.length > 0 ? lines : machineLines ?? [];
    if (!src.length) return `Tone ${activeTone} Sticheron`;
    // Flatten first line words to get the opening words
    const firstLine = src[0];
    const words = (firstLine.words ?? []).map(w =>
      w.display || (w.sylls ?? []).map(s => s.text).join("")
    ).filter(Boolean);
    const incipit = words.slice(0, 4).join(" ");
    return incipit ? `Tone ${activeTone} — ${incipit}` : `Tone ${activeTone} Sticheron`;
  };

  // Bass pitches (low register) sort to the tall end; tenor pitches (higher register)
  // sort to the short end. One shared scale means bass always renders deeper than tenor
  // in SATB without any per-voice offset or fighting between independent normalizations.
  const buildUnifiedVoiceMap = () => {
    const seen = new Map();
    const addPitches = (rules, hzFn) => {
      if (!rules) return;
      ["A","B","C","D","Final"].forEach(ph => {
        const pr = rules[ph];
        if (!pr) return;
        [pr.recite, ...Object.values(pr.cadMap||{}), ...Object.values(pr.prepMap||{})]
          .forEach(p => {
            if (!p) return;
            const hz = hzFn(p, pr);
            const key = p + "@" + Math.round(hz);
            if (!seen.has(key)) seen.set(key, { sol: p, hz, bassHzFn: null, tenorHzFn: null });
          });
      });
    };
    addPitches(BASS_RULES[activeTone],  freq_bass);
    addPitches(TENOR_RULES[activeTone], freq_tenor);
    const entries = [...seen.values()].sort((a, b) => a.hz - b.hz);
    const n = entries.length;
    const result = new Map();
    entries.forEach((e, i) => {
      const inv = (n - 1) - i;
      const t = n > 1 ? inv / (n - 1) : 0;
      result.set(e.sol + "@" + Math.round(e.hz), Math.round(H_VOICE_MIN + t * (H_VOICE_MAX - H_VOICE_MIN)));
    });
    return result;
  };
  const unifiedVoiceMap = buildUnifiedVoiceMap();
  const globalBassHeightMap  = unifiedVoiceMap; // kept for lookup API compatibility
  const globalTenorHeightMap = unifiedVoiceMap;
  const globalChipH = (_, sol, pr, hzFn) => {
    const key = sol + "@" + Math.round(hzFn(sol, pr));
    return unifiedVoiceMap.get(key) ?? H_VOICE_MIN;
  };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem", fontFamily: "Georgia, serif", color: ink }}>
      <div style={{ textAlign: "center", marginBottom: "0.4rem", letterSpacing: "0.28em", textTransform: "uppercase", fontSize: "0.7rem", color: gold }}>
        Common Chant · Obikhod · Tone {activeTone}
      </div>
      <h1 style={{ textAlign: "center", color: "#7a2418", fontWeight: 600, fontSize: "2rem", margin: "0.1em 0" }}>
        Tone Trainer — Pointing
      </h1>
      <div style={{ textAlign: "center", fontStyle: "italic", color: "#5b4a33", marginBottom: "0.3rem" }}>
        Syllables → accents → reciting tone &amp; cadence · then sing it
      </div>
      <div style={{ textAlign: "center", marginBottom: "1.4rem" }}>
        <button
          onClick={() => setShowReleaseNotes((v) => !v)}
          style={{ background: "transparent", border: `1px solid ${gold}`, color: gold,
                   borderRadius: 3, padding: "2px 10px", fontSize: "0.7rem", letterSpacing: "0.06em",
                   cursor: "pointer", fontFamily: "Georgia, serif" }}
          title="Release notes"
        >
          {TONE_TRAINER_VERSION} ▾
        </button>
        {showReleaseNotes && (
          <div style={{ maxWidth: 560, margin: "0.6rem auto 0", textAlign: "left",
                        border: "1px solid #d6c79f", borderRadius: 8, background: "rgba(255,255,255,.6)",
                        padding: "0.8rem 1rem" }}>
            {TRAINER_RELEASE_NOTES.map((rel) => (
              <div key={rel.version} style={{ marginBottom: "0.8rem" }}>
                <div style={{ fontWeight: 600, color: "#7a2418" }}>
                  {rel.version} <span style={{ color: "#9A8A70", fontWeight: 400, fontSize: "0.8rem" }}>· {rel.date}</span>
                </div>
                <div style={{ fontStyle: "italic", color: "#5b4a33", fontSize: "0.85rem", marginBottom: "0.3rem" }}>{rel.summary}</div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.8rem", color: ink }}>
                  {rel.items.map((it, i) => <li key={i} style={{ marginBottom: "0.2rem" }}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── DOCX INGEST ─────────────────────────────────────────────────── */}
      <div style={{ border: "1px solid #d6c79f", borderRadius: 8, padding: "0.8rem 0.9rem", marginBottom: "1.1rem", background: "rgba(40,58,92,.03)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center" }}>
          <label style={{ ...btn, display: "inline-block" }}>
            Open service .docx
            <input type="file" accept=".docx" style={{ display: "none" }}
              onChange={(e) => { onDocxFile(e.target.files && e.target.files[0]); setDocPanelOpen(true); }} />
          </label>
          {docName && (
            <>
              <span style={{ fontSize: "0.8rem", color: "#5b4a33", flex: 1 }}>{docName}</span>
              <button
                onClick={() => setDocPanelOpen(v => !v)}
                style={{ border: "1px solid #d6c79f", background: "transparent", borderRadius: 4,
                         padding: "2px 10px", cursor: "pointer", fontFamily: "Georgia, serif",
                         fontSize: "0.78rem", color: "#6b5942" }}
                title={docPanelOpen ? "Collapse service file panel" : "Expand service file panel"}>
                {docPanelOpen ? "▾ collapse" : "▸ expand"}
              </button>
            </>
          )}
          {blocks.some(b => b.suspect) && (
            <>
              <span style={{ flex: 1 }} />
              <label style={{ fontSize: "0.78rem", color: "#7a2418", display: "inline-flex", alignItems: "center", gap: 5 }}
                title="Show stichera blocks where no // penultimate marker was found — verify these groupings">
                <input type="checkbox" checked={showAllParas} onChange={(e) => setShowAllParas(e.target.checked)} />
                show suspect blocks
              </label>
            </>
          )}
        </div>
        {docError && <div style={{ marginTop: "0.5rem", color: "#7a2418", fontSize: "0.82rem" }}>{docError}</div>}
        {!docName && (
          <div style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic" }}>
            Extracts the OCA underline-marked accents from a day's service text, grouped by sticheron.
          </div>
        )}

        {docPanelOpen && blocks.length > 0 && (
          <>
            <div style={{ marginTop: "0.8rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {visibleBlocks.map((b, i) => {
                const canPoint = !!PH_DEFS[b.tone] && !!lexicon;
                const open = !!expandedBlocks[i];
                return (
                  <div key={i} style={{ border: "1px solid #d6c79f", borderRadius: 6, background: "rgba(255,255,255,.45)" }}>
                    {/* collapsed header row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.45rem 0.6rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.7rem", color: "#fff", background: b.tone ? "#283a5c" : "#9A8A70",
                                     borderRadius: 4, padding: "1px 7px", whiteSpace: "nowrap" }}>
                        {b.tone ? `Tone ${b.tone}` : "no tone"}{b.inherited ? "*" : ""}
                      </span>
                      {b.suspect && (
                        <span style={{ fontSize: "0.68rem", color: "#7a2418", border: "1px solid #7a2418",
                                       borderRadius: 4, padding: "1px 6px", whiteSpace: "nowrap" }} title="No // found — verify this grouping">
                          ⚠ no //
                        </span>
                      )}
                      <button onClick={() => toggleBlock(i)}
                        style={{ flex: 1, textAlign: "left", border: "none", background: "transparent", cursor: "pointer",
                                 fontFamily: "Georgia, serif", fontSize: "0.98rem", color: ink, padding: 0 }}>
                        {open ? "▾ " : "▸ "}{b.incipit}… <span style={{ color: "#9A8A70", fontSize: "0.8rem" }}>({b.lines.length} lines)</span>
                      </button>
                      {canPoint && (
                        <button style={{ ...btn, padding: "3px 11px", fontSize: "0.74rem" }}
                          onClick={() => sendBlockToPointer(b)}>point ▸</button>
                      )}
                    </div>
                    {/* expanded lines + context + per-block encoding */}
                    {open && (() => {
                      const ctx = blockContext(b);
                      const encShown = !!encOpenBlocks[i];
                      return (
                        <div style={{ padding: "0 0.6rem 0.5rem 0.6rem" }}>
                          {ctx.before && (
                            <div style={{ fontSize: "0.78rem", color: "#9A8A70", fontStyle: "italic", padding: "0.15rem 0" }}>
                              ↑ before: {ctx.before.text}
                            </div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                            {b.lines.map((l, j) => (
                              <div key={j} style={{ display: "flex", gap: "0.5rem", alignItems: "baseline", fontSize: "0.92rem",
                                                    borderTop: "1px dotted #e7dcc0", paddingTop: "0.2rem" }}>
                                <span style={{ fontSize: "0.66rem", color: "#283a5c", minWidth: "2.6em", fontStyle: "italic" }}>
                                  {blockLinePhrase(j, b.lines.length, ROT_DEFS[b.tone] || ROT_DEFS[1])}
                                </span>
                                <span style={{ flex: 1 }}
                                  dangerouslySetInnerHTML={{ __html: l.runs.map((r) => r.underline
                                    ? `<u style="text-decoration-color:#7a2418">${escapeHtml(r.text)}</u>` : escapeHtml(r.text)).join("") }} />
                              </div>
                            ))}
                          </div>
                          {ctx.after && (
                            <div style={{ fontSize: "0.78rem", color: "#9A8A70", fontStyle: "italic", padding: "0.15rem 0", marginTop: "0.15rem" }}>
                              ↓ after: {ctx.after.text}
                            </div>
                          )}
                          {/* per-block encoding reveal */}
                          <div style={{ marginTop: "0.5rem" }}>
                            <button style={{ ...btn, padding: "3px 10px", fontSize: "0.72rem" }} onClick={() => toggleEnc(i)}>
                              {encShown ? "Hide encoding ▾" : "Show encoding ▸"}
                            </button>
                            {encShown && (
                              <div style={{ marginTop: "0.4rem" }}>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "0.3rem" }}>
                                  <span style={{ fontSize: "0.72rem", color: "#6b5942", fontStyle: "italic", flex: 1 }}>
                                    [accent] · line ends <b>|</b> · OCA <b>//</b> verbatim · final line bare
                                  </span>
                                  <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none", padding: "3px 12px", fontSize: "0.74rem" }}
                                    onClick={() => copyBlock(b, i)}>
                                    {copiedBlock === i ? "Copied ✓" : "Copy"}
                                  </button>
                                </div>
                                <textarea readOnly value={encodeBlock(b)} rows={Math.min(12, b.lines.length + 1)}
                                  style={{ width: "100%", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "0.82rem",
                                           lineHeight: 1.5, border: "1px solid #d6c79f", borderRadius: 6, padding: "0.5rem",
                                           background: "#fbf6ea", color: ink, resize: "vertical" }} />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "#6b5942", fontStyle: "italic" }}>
              Each block is one sticheron (lines grouped, closing after the line that follows <b>//</b>).
              <b> *</b> = tone inherited from a preceding heading. <b>⚠ no //</b> = no penultimate marker found;
              verify the grouping (revealed by “show suspect blocks” above). Expand a block for its context, its
              lines, and its copy-paste encoding. “point ▸” loads a Tone 1 or Tone 2 sticheron into the pointer with full
              A·B·C·D·…·Final rotation and scrolls to it; Tones 3–8 convert but aren’t pointed yet.
            </div>
          </>
        )}
      </div>

      {/* ── TONE SELECTOR ────────────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.7rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.78rem", color: "#5b4a33" }}>Tone:</span>
        {[1,2,3,4,5,6,7,8].map((t) => {
          const available = !!PH_DEFS[t];
          const active = activeTone === t;
          return (
            <button key={t}
              disabled={!available}
              onClick={() => {
                setActiveTone(t);
                setLines([]);
                setText("");
                setHasTruth(false);
                setCompareData(null);
                setMachineLines(null);
                setCompareMode(false);
              }}
              title={available ? `Switch to Tone ${t}` : `Tone ${t} — coming soon`}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.82rem",
                padding: "3px 11px",
                borderRadius: 4,
                cursor: available ? "pointer" : "default",
                border: active ? `1px solid ${gold}` : "1px solid #d6c79f",
                background: active ? gold : available ? "transparent" : "rgba(0,0,0,.03)",
                color: active ? "#fff" : available ? gold : "#c0b090",
                opacity: available ? 1 : 0.5,
                transition: "all 0.15s",
              }}>
              {t}
            </button>
          );
        })}
        {PRESETS[activeTone] && (
          <button
            onClick={() => {
              // Populate text field with hand-pointed bracketed text, then
              // run the same analyzeText path as the Point button uses.
              const exText = presetToText(activeTone);
              setText(exText);
              analyzeText(exText);
              setTimeout(() => {
                if (pointerRef.current) pointerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 60);
            }}
            style={{ ...btn, marginLeft: "0.5rem", fontSize: "0.74rem", padding: "3px 11px" }}
            title={`Load the hand-pointed Tone ${activeTone} example sticheron`}>
            try example
          </button>
        )}
      </div>

      {/* ── POINTER (textarea + comparison) — above the play bar ────────── */}
      <div ref={pointerRef} style={{ marginBottom: "1.1rem" }}>
          {/* Label adapts to whether brackets are detected in the text. */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <label style={{ fontSize: "0.85rem", color: "#5b4a33", flex: 1 }}>
              {(() => {
                const rotDesc = {
                  1: "A·B·C·D·…·Final",
                  2: "A, then B·C·D·…·Final",
                  3: "A·B·…·Final",
                }[activeTone] ?? "A·B·C·D·…·Final";
                return `Type or paste the sticheron — one line per line. Tone ${activeTone} rotates ${rotDesc}.`;
              })()}
            </label>

          </div>
          <textarea value={text} onChange={(e) => { setText(e.target.value); setHasTruth(parseBracketedText(e.target.value).hasBrackets); }} rows={5}
            placeholder={"Machine Pointing (plain text):\nCome, let us also go to meet Christ with divine songs!\n\nDirector Pointing (with [accent] marks):\n[Lord], I call up[on] Thee, [hear] me! |\n[Hear] me, O Lord!"}
            style={{ width: "100%", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "0.88rem",
                     lineHeight: 1.6, border: `1px solid ${hasTruth ? "rgba(90,122,60,.6)" : "#d6c79f"}`,
                     borderRadius: 6, padding: "8px", resize: "vertical",
                     background: hasTruth ? "rgba(90,122,60,.03)" : "transparent" }} />
          <div style={{ marginTop: "0.45rem", fontSize: "0.75rem", color: "#9A8A70", fontStyle: "italic" }}>
            {hasTruth && <>Director Pointing mode — [accent] brackets override the machine. | = line end · // = penultimate line.</>}
          </div>
      </div>

      {/* ── PLAY BAR ─────────────────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center", gap: "0.5rem",
                    border: "1px solid #d6c79f", borderRadius: 8,
                    padding: "0.55rem 0.9rem", marginBottom: "1.1rem" }}>

        {/* Col 1 — left: Point */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center",
                      justifyContent: "flex-start" }}>
          <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none" }}
            onClick={analyze}
            title="Syllabify and point the sticheron — assigns reciting tone, prep, and cadence roles">
            Point Verses
          </button>
        </div>

        {/* Col 2 — center: audio controls bracketed by | dividers */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ color: "#d6c79f" }}>|</span>
          <label style={{ fontSize: "0.82rem", color: "#5b4a33" }}>
            do ={" "}
            <select value={doHz} onChange={(e) => setDoHz(parseFloat(e.target.value))}
              style={{ fontFamily: "Georgia, serif", border: "1px solid #d6c79f",
                       borderRadius: 6, padding: "3px 6px" }}>
              {DO_OPTIONS.map((o) => <option key={o.label} value={o.hz}>{o.label}</option>)}
            </select>
          </label>
          <button style={btn} onClick={playPitch}>pitch</button>
          <label style={{ fontSize: "0.82rem", color: playingLine !== null ? "#b0a080" : "#5b4a33",
                          display: "inline-flex", alignItems: "center", gap: "0.3rem",
                          transition: "color 0.2s" }}
            title={playingLine !== null ? "Stop playback to change tempo" : "Half note = 1 beat (Drillock & Ealy). Range: 40–120 BPM."}>
            tempo
            <input type="range" min={40} max={120} step={10} value={bpm}
              disabled={playingLine !== null}
              onChange={(e) => setBpm(parseInt(e.target.value, 10))}
              style={{ width: 64, cursor: playingLine !== null ? "not-allowed" : "pointer",
                       accentColor: gold, opacity: playingLine !== null ? 0.4 : 1,
                       transition: "opacity 0.2s" }} />
            <span style={{ minWidth: "3.5em", textAlign: "right" }}>{bpm} BPM</span>
          </label>
          <span style={{ color: "#d6c79f" }}>|</span>
        </div>

        {/* Col 3 — right: play/stop icon + lexicon status */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center",
                      justifyContent: "flex-end" }}>
          {lexiconError && <span style={{ fontSize: "0.72rem", color: "#7a2418",
                                          fontStyle: "italic" }}>{lexiconError}</span>}
          {!lexicon && !lexiconError && <span style={{ fontSize: "0.72rem", color: "#9A8A70",
                                                        fontStyle: "italic" }}>loading lexicon…</span>}
          {/* Print Score button — opens modal to set title/source then renders */}
          {(lines.length > 0 || !!machineLines?.length) && (
            <button
              style={{ ...btn, fontSize: "0.78rem", padding: "5px 12px",
                       display: "inline-flex", alignItems: "center", gap: "0.3em" }}
              onClick={() => {
                setScoreTitle(defaultScoreTitle());
                // Default source: director if available, else machine
                setScoreSource(lines.length > 0 ? "director" : "machine");
                setShowScoreModal(true);
              }}
              title="Open score in a new tab for printing">
              ♩ Score
            </button>
          )}
          <button
            style={{ ...btn,
                     background: playingLine !== null ? "#7a2418" : "#3a6e28",
                     color: "#f7ead0", border: "none",
                     fontSize: "1rem", padding: "5px 14px",
                     display: "inline-flex", alignItems: "center", gap: "0.35em" }}
            onClick={playingLine !== null ? stopAll : playAll}
            title={playingLine !== null ? "Stop playback" : "Sing all lines"}>
            {playingLine !== null ? <>◼ <span style={{ fontSize: "0.82rem" }}>Stop</span></> : <>Play <span>▶</span></>}
          </button>
        </div>

      </div>

      {/* ── SCORE MODAL ────────────────────────────────────────────────────── */}
      {showScoreModal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowScoreModal(false); }}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(30,22,14,.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
          <div style={{
            background: "#faf6ee",
            border: "1px solid #d6c79f",
            borderRadius: 8,
            padding: "1.6rem 1.8rem",
            width: "min(440px, 92vw)",
            boxShadow: "0 8px 32px rgba(0,0,0,.22)",
            fontFamily: "Georgia, serif",
          }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "baseline",
                          justifyContent: "space-between", marginBottom: "1.1rem" }}>
              <span style={{ fontSize: "0.95rem", color: "#2a2118",
                             letterSpacing: "0.04em" }}>Create Score</span>
              <button
                onClick={() => setShowScoreModal(false)}
                style={{ background: "none", border: "none", color: "#9a8a6a",
                         fontSize: "1rem", cursor: "pointer", lineHeight: 1 }}>✕</button>
            </div>

            {/* Title field */}
            <label style={{ display: "block", fontSize: "0.72rem", color: "#6b5942",
                            letterSpacing: "0.06em", textTransform: "uppercase",
                            marginBottom: "0.35rem" }}>
              Title
            </label>
            <input
              type="text"
              value={scoreTitle}
              onChange={e => setScoreTitle(e.target.value)}
              style={{
                width: "100%", boxSizing: "border-box",
                fontFamily: "Georgia, serif", fontSize: "0.9rem",
                border: "1px solid #d6c79f", borderRadius: 4,
                padding: "6px 10px", marginBottom: "1.1rem",
                background: "#fff8ef", color: "#2a2118",
                outline: "none",
              }} />

            {/* Source selector — only shown when both director and machine are available */}
            {lines.length > 0 && !!machineLines?.length && (
              <>
                <label style={{ display: "block", fontSize: "0.72rem", color: "#6b5942",
                                letterSpacing: "0.06em", textTransform: "uppercase",
                                marginBottom: "0.5rem" }}>
                  Pointing source
                </label>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.2rem" }}>
                  {[
                    { key: "director", label: "Director" },
                    { key: "machine",  label: "Machine"  },
                  ].map(({ key, label }) => {
                    const active = scoreSource === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setScoreSource(key)}
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "0.78rem",
                          letterSpacing: "0.06em",
                          border: `1px solid ${active ? "#5b7a3a" : "#d6c79f"}`,
                          borderRadius: 3,
                          padding: "4px 14px",
                          cursor: "pointer",
                          background: active ? "rgba(91,122,58,.12)" : "transparent",
                          color: active ? "#3a6218" : "#6b5942",
                          display: "inline-flex", alignItems: "center", gap: "0.4em",
                        }}>
                        {active && <span style={{ fontSize: "0.65rem" }}>✓</span>}
                        {label}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* Actions */}
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowScoreModal(false)}
                style={{ ...btn, fontSize: "0.78rem" }}>
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowScoreModal(false);
                  openScorePrint(scoreTitle, scoreSource);
                }}
                style={{
                  ...btn,
                  background: "#3a6e28", color: "#f7ead0",
                  border: "none", fontSize: "0.78rem",
                  padding: "5px 18px",
                }}>
                Open Score ♩
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ── INFO BAR — always visible ──────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap",
                    fontSize: "0.78rem", color: "#6b5942", marginBottom: "1rem" }}>
        {/* Color-coded legend — pill backgrounds match chip roleBg colors */}
        <span style={{ flex: 1, display: "flex", gap: "0.6rem", justifyContent: "flex-start",
                       flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ background: "rgba(40,120,60,.10)", color: "#1a6030",
                         borderRadius: 4, padding: "1px 7px" }}>intonation</span>
          <span style={{ background: "rgba(40,58,92,.06)", color: "#283a5c",
                         borderRadius: 4, padding: "1px 7px" }}>reciting tone</span>
          <span style={{ background: "rgba(180,137,43,.18)", color: "#8a6a14",
                         borderRadius: 4, padding: "1px 7px" }}>
            prep ({[...new Set(Object.values(PH).map(d => d.prep).filter(Boolean))].join("/") || "—"})
          </span>
          {activeTone === 3 && (
            <span style={{ background: "rgba(122,36,24,.05)", color: "#9a3c2c",
                           borderRadius: 4, padding: "1px 7px" }}>cad. pt. 1</span>
          )}
          <span style={{ background: "rgba(122,36,24,.11)", color: "#7a2418",
                         borderRadius: 4, padding: "1px 7px" }}>{activeTone === 3 ? "cad. pt. 2" : "cadence"}</span>
          {compareMode && compareData && <span>· ´ = accent</span>}
        </span>
        {/* Pointing mode — two toggle buttons: Director / Machine.
             In sing view: always show Director; show Machine only when machineLines available.
             In compare harness: neither shown (the harness has its own Sing director/machine toggle). */}
        {!(compareMode && compareData) && (() => {
          const dirActive = singView === "director";
          const machActive = singView === "machine";
          const btnBase = {
            fontSize: "0.72rem", flexShrink: 0, borderRadius: 3,
            padding: "1px 8px", cursor: "pointer",
            fontFamily: "Georgia, serif", whiteSpace: "nowrap",
          };
          return (
            <span style={{ display: "inline-flex", gap: "0.3rem", flexShrink: 0 }}>
              <button
                onClick={() => setSingView("director")}
                title="Show director-pointed verses"
                style={{ ...btnBase,
                  background: dirActive ? "rgba(90,122,60,.12)" : "transparent",
                  border: `1px solid ${dirActive ? "rgba(90,122,60,.45)" : "#d6c79f"}`,
                  color: dirActive ? "#3a6020" : "#9A8A70",
                }}>
                Director{dirActive ? " ✓" : ""}
              </button>
              {machineLines && (
                <button
                  onClick={() => setSingView("machine")}
                  title="Show machine auto-pointed verses"
                  style={{ ...btnBase,
                    background: machActive ? "rgba(139,105,20,.15)" : "transparent",
                    border: `1px solid ${machActive ? "rgba(139,105,20,.5)" : "#d6c79f"}`,
                    color: machActive ? "#5b4a33" : "#9A8A70",
                  }}>
                  Machine{machActive ? " ✓" : ""}
                </button>
              )}
            </span>
          );
        })()}
        {/* Show / Hide Director vs. Machine */}
        {compareData && (
          <button
            onClick={() => setCompareMode(v => !v)}
            style={{ marginLeft: "0.5rem", fontSize: "0.72rem", flexShrink: 0,
                     background: compareMode ? "rgba(90,122,60,.12)" : "transparent",
                     border: `1px solid ${compareMode ? "rgba(90,122,60,.45)" : "#d6c79f"}`,
                     color: compareMode ? "#3a6020" : "#9A8A70",
                     borderRadius: 3, padding: "1px 8px", cursor: "pointer",
                     fontFamily: "Georgia, serif", whiteSpace: "nowrap" }}
            title="Show or hide the Director vs. Machine comparison harness">
            {compareMode ? "Director vs. Machine ✓" : "Director vs. Machine"}
          </button>
        )}
        {/* Voice Part selector — only in sing view */}
        {!(compareMode && compareData) && (
          <select value={voicePart} onChange={e => setVoicePart(e.target.value)}
            style={{ marginLeft: "0.5rem", fontSize: "0.72rem", flexShrink: 0,
                     background: "transparent", border: "1px solid #d6c79f",
                     borderRadius: 3, padding: "1px 6px", cursor: "pointer",
                     fontFamily: "Georgia, serif", color: "#5b4a33" }}>
            <option value="soprano">Soprano</option>
            <option value="alto">Alto (Melody)</option>
            <option value="tenor" disabled={!TENOR_TONES.has(activeTone)} style={!TENOR_TONES.has(activeTone) ? { color: "#bbb" } : {}}>Tenor</option>
            <option value="bass">Bass</option>
            <option disabled>──────────</option>
            <option value="alto-bass">Alto + Bass</option>
            <option value="satb">SATB</option>
          </select>
        )}
        {/* Timbre selector — only in sing view */}
        {!(compareMode && compareData) && (
          <select value={timbre} onChange={e => setTimbre(e.target.value)}
            style={{ marginLeft: "0.4rem", fontSize: "0.72rem", flexShrink: 0,
                     background: "transparent", border: "1px solid #d6c79f",
                     borderRadius: 3, padding: "1px 6px", cursor: "pointer",
                     fontFamily: "Georgia, serif", color: "#5b4a33" }}>
            <option value="piano">Piano</option>
            <option value="organ">Organ</option>
            <option value="choir">Choir</option>
            <option value="cello">Cello</option>
          </select>
        )}
      </div>

      {/* ── COMPARISON HARNESS (Feature B) ───────────────────────────────── */}
      {compareMode && compareData && (
        <div style={{ border: "1px solid rgba(90,122,60,.5)", borderRadius: 8, padding: "0.8rem 0.9rem",
                      marginBottom: "1.1rem", background: "rgba(90,122,60,.04)" }}>
          {/* Header row 1: title | stats | spacer | Export JSON */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#3a6020" }}>
              Director vs. Machine
            </span>
            <span style={{ fontSize: "0.78rem", color: "#3a6020",
                           background: "rgba(90,122,60,.12)", border: "1px solid rgba(90,122,60,.3)",
                           borderRadius: 3, padding: "1px 8px" }}>
              anchor: {compareData.anchorMatchCount}/{compareData.totalLines} lines match
              {" "}({Math.round(compareData.anchorMatchCount / Math.max(1, compareData.totalLines) * 100)}%)
            </span>
            <span style={{ fontSize: "0.78rem", color: "#5b4a33",
                           background: "rgba(139,105,20,.08)", border: "1px solid rgba(139,105,20,.25)",
                           borderRadius: 3, padding: "1px 8px" }}>
              syllable: {compareData.syllMatchCount}/{compareData.totalSylls}
              {" "}({Math.round(compareData.syllMatchCount / Math.max(1, compareData.totalSylls) * 100)}%)
            </span>
            <span style={{ flex: 1 }} />
            {/* JSON export — top right */}
            <button
              onClick={() => {
                const payload = {
                  generated: new Date().toISOString(),
                  trainerVersion: TONE_TRAINER_VERSION,
                  anchorMatchPct: Math.round(compareData.anchorMatchCount / Math.max(1, compareData.totalLines) * 100),
                  firstAnchorMatchCount: compareData.firstAnchorMatchCount,
                  syllMatchPct: Math.round(compareData.syllMatchCount / Math.max(1, compareData.totalSylls) * 100),
                  lines: compareData.lines.map((l) => ({
                    phrase: l.phrase,
                    anchorMatch: l.anchorMatch,
                    truthAnchorIdx: l.truthAnchor,
                    machineAnchorIdx: l.machineAnchor,
                    truthFirstAnchorIdx: l.truthFirstAnchor ?? null,
                    machineFirstAnchorIdx: l.machineFirstAnchor ?? null,
                    firstAnchorMatch: l.firstAnchorMatch ?? null,
                    syllables: l.syllables.map((s) => {
                      const out = {
                        text: s.text,
                        truthAccent: s.truthAccent,
                        machineAccent: s.machineAccent,
                        agree: s.agree,
                        isAnchor: s.isAnchor,
                        isMachineAnchor: s.isMachineAnchor,
                      };
                      // Extended pitch/role fields — present when phDefs was passed to buildComparison.
                      if (s.role     !== undefined) { out.role    = s.role;    out.pitches = s.pitches;    out.dur = s.dur; }
                      if (s.machineRole !== undefined) { out.machineRole = s.machineRole; out.machinePitches = s.machinePitches; out.machineDur = s.machineDur; }
                      return out;
                    }),
                  })),
                };
                const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url; a.download = "tone-trainer-comparison.json"; a.click();
                URL.revokeObjectURL(url);
              }}
              style={{ ...btn, fontSize: "0.74rem", padding: "3px 11px" }}
            >
              Export JSON ↓
            </button>
          </div>
          {/* Header row 2: Sing director/machine toggle | spacer | show source */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.7rem" }}>
            {/* Sing director / machine toggle */}
            <div style={{ display: "inline-flex", border: "1.5px solid #8B6914", borderRadius: 5, overflow: "hidden" }}>
              {["truth", "machine"].map((w) => (
                <button key={w} onClick={() => setSingWhich(w)}
                  style={{ border: "none", background: singWhich === w ? "#8B6914" : "transparent",
                           color: singWhich === w ? "#fff" : "#8B6914",
                           padding: "4px 11px", cursor: "pointer", fontFamily: "Georgia, serif",
                           fontSize: "0.75rem", letterSpacing: "0.04em" }}>
                  {w === "truth" ? "Sing director" : "Sing machine"}
                </button>
              ))}
            </div>
            <span style={{ flex: 1 }} />
            {/* show source ⓘ — moved here from controls bar */}
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
              <label style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.78rem", color: "#5b4a33", cursor: "pointer" }}
                onMouseEnter={() => setSourceTooltip(true)} onMouseLeave={() => setSourceTooltip(false)}>
                <input type="checkbox" checked={showAccentSource} onChange={(e) => setShowAccentSource(e.target.checked)} />
                show source ⓘ
              </label>
              {sourceTooltip && (
                <div style={{ position: "absolute", bottom: "calc(100% + 8px)", right: 0, zIndex: 100,
                               background: "#FAF6EE", border: "1px solid #D4C49A", borderRadius: 5,
                               padding: "0.55rem 0.75rem", width: 220, boxShadow: "0 3px 12px rgba(0,0,0,.13)",
                               fontSize: "0.72rem", color: "#3D3020", lineHeight: 1.6,
                               pointerEvents: "none" }}>
                  <div style={{ fontWeight: 600, marginBottom: "0.3rem", color: "#5C4A1E" }}>Accent source legend</div>
                  <div><span style={{ fontFamily: "monospace" }}>no marker</span> — CMU-confirmed (table entry)</div>
                  <div><span style={{ fontFamily: "monospace", color: "#8a6a14" }}>?</span> — unconfirmed best-guess (word not in CMU; stress estimated)</div>
                  <div><span style={{ fontFamily: "monospace", color: "#9A8A70" }}>~</span> — rule fallback (word completely off-table)</div>
                </div>
              )}
            </div>
          </div>

          {/* Per-line side-by-side comparison */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {compareData.lines.map((cl, li) => {
              const isPlaying = playingLine === li;
              return (
              <div key={li} id={`compare-block-${li}`} style={{ borderRadius: 5, overflow: "hidden",
                                     background: isPlaying ? "rgba(255,250,238,.95)" : "transparent",
                                     borderTop: cl.anchorMatch ? "1px solid rgba(90,122,60,.35)" : "1px solid rgba(180,80,40,.35)",
                                     borderRight: cl.anchorMatch ? "1px solid rgba(90,122,60,.35)" : "1px solid rgba(180,80,40,.35)",
                                     borderBottom: cl.anchorMatch ? "1px solid rgba(90,122,60,.35)" : "1px solid rgba(180,80,40,.35)",
                                     borderLeft: isPlaying ? "4px solid #7a2418" : cl.anchorMatch ? "4px solid rgba(90,122,60,.45)" : "4px solid rgba(180,80,40,.35)" }}>
                {/* Line header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.6rem",
                              background: isPlaying ? "rgba(255,243,220,.8)" : cl.anchorMatch ? "rgba(90,122,60,.08)" : "rgba(180,80,40,.07)",
                              fontSize: "0.72rem" }}>
                  <span style={{ background: cl.phrase === "Final" ? "#7a2418" : "#283a5c", color: "#fff",
                                 borderRadius: 3, padding: "1px 7px" }}>{cl.phrase}</span>
                  <span style={{ color: cl.anchorMatch ? "#3a6020" : "#8a3010", fontWeight: 600 }}>
                    {cl.anchorMatch ? "anchor ✓" : "anchor ✗"}
                  </span>
                  <span style={{ color: "#9A8A70", fontStyle: "italic" }}>
                    {cl.syllables.filter(s => s.agree).length}/{cl.syllables.length} syllables agree
                  </span>
                </div>

                {/* Two-row chip display: director on top, machine below */}
                {["truth", "machine"].map((which) => {
                  // rowSinging follows playingWhich (set by playLineAs) not the global toggle
                  const rowSinging = isPlaying && playingWhich === which;
                  return (
                  <div key={which} style={{ background: rowSinging ? "rgba(255,236,180,.55)"
                                              : which === "truth" ? "rgba(255,255,255,.6)" : "rgba(245,245,245,.6)",
                                            borderTop: "1px solid rgba(0,0,0,.05)" }}>
                    {/* Chips + play button row */}
                    <div style={{ display: "flex", alignItems: "center", padding: "0.35rem 0.6rem" }}>
                    <span style={{ fontSize: "0.6rem", color: "#9A8A70", minWidth: "3.2em",
                                   flexShrink: 0, fontStyle: "italic" }}>
                      {which === "truth" ? "director" : "machine"}
                    </span>
                    {/* Inner chips container — wraps freely, grows to fill available space */}
                    <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "2px 2px",
                                  alignItems: "flex-end" }}>
                    {cl.syllables.map((s, si) => {
                      const accent = which === "truth" ? s.truthAccent : s.machineAccent;
                      const disagree = !s.agree;
                      const isAnchorThis = which === "truth" ? s.isAnchor : s.isMachineAnchor;
                      // Source indicator — only on machine row, only when showAccentSource on.
                      const NOSRC = ["table","archaic","truth","reconciled","count-only","auto"];
                      const mSrc = s.machineSource;
                      const mSrcChar = (which === "machine" && mSrc && !NOSRC.includes(mSrc))
                        ? (mSrc === "residue" ? "?" : "~") : null;
                      return (
                        <span key={si}
                          style={{ display: "inline-flex", flexDirection: "column", alignItems: "center",
                                   padding: "2px 5px 1px", borderRadius: 5, minWidth: "1.8em",
                                   background: disagree ? "rgba(200,100,40,.12)" : "rgba(40,58,92,.05)",
                                   border: isAnchorThis ? "1px solid #7a2418" : disagree ? "1px solid rgba(200,100,40,.4)" : "1px solid transparent" }}>
                          <span style={{ fontSize: "1rem", fontWeight: accent ? 600 : 400, position: "relative", color: accent ? "#1c1008" : "#9A8A70" }}>
                            {accent && <span style={{ position: "absolute", top: "-0.5em", left: "50%", transform: "translateX(-50%)", color: "#7a2418", fontSize: "0.9em" }}>´</span>}
                            {s.text}
                          </span>
                          {/* Uniform-height indicator row — always present */}
                          <span style={{ fontSize: "0.6rem", lineHeight: 1, marginTop: "1px",
                                         color: mSrcChar === "?" ? "#8a6a14" : "#9A8A70",
                                         visibility: (showAccentSource && mSrcChar) ? "visible" : "hidden" }}
                                title={mSrcChar === "?" ? "unconfirmed best-guess" : "rule fallback"}>
                            {mSrcChar || " "}
                          </span>
                        </span>
                      );
                    })}
                    </div>{/* end inner chips container */}
                    {/* Per-row play button — outside the chips container, anchored right */}
                    <button
                      disabled={playingLine !== null && !rowSinging}
                      onClick={() => playLineAs(li, which)}
                      style={{ border: `1px solid ${rowSinging ? "#7a2418" : gold}`,
                               background: rowSinging ? "rgba(122,36,24,.08)" : "transparent",
                               color: rowSinging ? "#7a2418" : gold,
                               borderRadius: 3, padding: "2px 9px",
                               cursor: playingLine !== null && !rowSinging ? "not-allowed" : "pointer",
                               opacity: playingLine !== null && !rowSinging ? 0.35 : 1,
                               fontFamily: "Georgia, serif", fontSize: "0.68rem",
                               flexShrink: 0, marginLeft: "0.5rem", alignSelf: "center" }}>
                      ▶
                    </button>
                    </div>{/* end chips row */}
                    {/* Bracketed encoding text — shows how this verse was pointed */}
                    {(() => {
                      const srcLine = which === "truth" ? lines[li] : machineLines?.[li];
                      const bt = lineToBracketedText(srcLine);
                      if (!bt) return null;
                      return (
                        <div style={{
                          padding: "0.15rem 0.6rem 0.35rem",
                          paddingLeft: "calc(0.6rem + 3.2em + 4px)",
                          fontFamily: "monospace", fontSize: "0.72rem",
                          color: "#9A8A70", letterSpacing: "0.01em",
                          lineHeight: 1.4,
                        }}>{bt}</div>
                      );
                    })()}
                  </div>
                  );
                })}
              </div>
              );
            })}
          </div>

          <div style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "#6b5942", fontStyle: "italic" }}>
            Amber chips = syllable-level disagreement. Boxed chip = cadence anchor. "Sing all" plays per the Sing director / machine toggle. Each row has its own ▶ to play that version directly. "Show source" reveals ? / ~ on machine chips.
          </div>
        </div>
      )}

      {/* legend + sung display — hidden in comparison mode */}
      {!(compareMode && compareData) && (singView === "machine" && machineLines ? machineLines : lines).map((line, li) => {
        const rolesWD = lineToRolesWithDuration(line);
        const bassRolesWD = (() => {
          const rules = BASS_RULES[activeTone]?.[line.phrase];
          if (!rules) return null;
          return rolesWD.map(r => {
            let bassPitch;
            if (r.role === "recite" || r.role === "inton") {
              bassPitch = rules.recite;
            } else if (r.role === "prep") {
              bassPitch = rules.prepMap?.[r.pitches[0]] ?? r.pitches[0];
            } else if (r.role === "preslur") {
              bassPitch = rules.preslurMap?.[r.pitches[0]] ?? r.pitches[0];
            } else if (r.role === "cad" || r.role === "cad1") {
              bassPitch = rules.cadMap?.[r.pitches[0]] ?? r.pitches[0];
            } else {
              bassPitch = r.pitches[0];
            }
            return { ...r, pitches: [bassPitch] };
          });
        })();
        const isFin = line.phrase === "Final";
        const sopranoAvailable = SOPRANO_TONES.has(activeTone);
        const tenorAvailable   = TENOR_TONES.has(activeTone);
        const showAlto       = voicePart === "alto" || voicePart === "alto-bass" || voicePart === "satb";
        const showBass       = (voicePart === "bass" || voicePart === "alto-bass" || voicePart === "satb") && bassRolesWD;
        const showSoprano    = sopranoAvailable && voicePart === "soprano";
        const showSopranoTab = sopranoAvailable && voicePart === "satb";
        const showTenor      = tenorAvailable && voicePart === "tenor";
        const showTenorGhost = tenorAvailable && voicePart === "satb";

        // Soprano rolesWD — same structure as alto, alto pitches retained.
        const sopranoRolesWD = (showSoprano || showSopranoTab) ? rolesWD : null;

        // Bass height map — unified bass+tenor map; bass pitches always deeper than tenor.
        const bassHeightMap = bassRolesWD ? (() => {
          const pr = BASS_RULES[activeTone]?.[line.phrase];
          const map = {};
          bassRolesWD.forEach(r => { map[r.pitches[0]] = globalChipH(null, r.pitches[0], pr, freq_bass); });
          return map;
        })() : null;

        // Tenor rolesWD — derived from rolesWD via TENOR_RULES, mirrors bassRolesWD pattern.
        const tenorRolesWD = (() => {
          if (!showTenor && !showTenorGhost) return null;
          const trules = TENOR_RULES[activeTone]?.[line.phrase];
          if (!trules) return null;
          // Shared pitch-map + melisma-hold collapse; tag phraseRules for chip height/audio.
          return deriveTenorRolesWD(rolesWD, trules).map(r => ({ ...r, phraseRules: trules }));
        })();

        // Tenor height map — unified bass+tenor map; tenor pitches always shallower than bass.
        const tenorHeightMap = tenorRolesWD ? (() => {
          const pr = TENOR_RULES[activeTone]?.[line.phrase];
          const map = {};
          tenorRolesWD.forEach(r => { map[r.pitches[0]] = globalChipH(null, r.pitches[0], pr, freq_tenor); });
          return map;
        })() : null;

        // Role colors matching roleBg/roleColor
        const chipBg = { recite:"rgba(40,58,92,.06)", inton:"rgba(40,120,60,.10)", prep:"rgba(180,137,43,.16)", cad:"rgba(122,36,24,.10)", cad1:"rgba(122,36,24,.05)", preslur:"rgba(180,137,43,.22)" };
        const chipBorderColor = { recite:"rgba(40,58,92,.18)", inton:"rgba(40,120,60,.30)", prep:"rgba(180,137,43,.35)", cad:"rgba(122,36,24,.30)", cad1:"rgba(122,36,24,.20)", preslur:"rgba(180,137,43,.35)" };
        const chipStripe = { recite:"rgba(40,58,92,.25)", inton:"rgba(40,120,60,.40)", prep:"rgba(180,137,43,.40)", cad:"rgba(122,36,24,.35)", cad1:"rgba(122,36,24,.25)", preslur:"rgba(180,137,43,.40)" };
        const solColor = "rgba(40,58,92,0.45)";
        const melismaBarColor = "#ddd0b8";
        const pageColor = "transparent"; // ink text sits on page bg naturally

        // Build chip entries — one per role entry (melisma = one per pitch)
        // chipW: width always derived from durKey — no role-based override.
        // CHIP_W_RECITE removed (was an artifact of reciting tone always being Q;
        // Tone 1 Final Phrase accented reciting tone is now H, and future tones
        // may differ further. durKey is the single source of truth for chip width).
        const chipW = (r) => {
          // A collapsed (held) tenor note covers a multi-note alto melisma. Its chip must be
          // as wide as that melisma group — the sum of the underlying alto chip widths plus the
          // intra-melisma gaps, i.e. exactly the alto group's totalW — so the held chip lines up
          // across the melisma in every SATB row and the tenor ghost registers over the bass.
          // Without this it renders at the nominal whole/dotted-whole width (90/120px) and is too
          // narrow for the 2- or 3-note span. Only collapsed tenor entries carry spanCount≥2.
          if (r.spanCount >= 2 && r.spanStart != null) {
            let total = 0;
            for (let k = r.spanStart; k < r.spanStart + r.spanCount; k++) {
              total += CHIP_W[rolesWD[k]?.durKey] ?? CHIP_W.Q;
            }
            return total + (r.spanCount - 1) * CHIP_MELISMA_GAP;
          }
          return CHIP_W[r.durKey] ?? CHIP_W.Q;
        };

        const renderChip = (r, i, isBass, isSoprano = false, isGhostSoprano = false, isTenor = false, isGhostTenor = false) => {
          const role = r.role === "preslur" ? "prep" : r.role;
          const h = isBass ? (bassHeightMap?.[r.pitches[0]] ?? H_VOICE_MIN)
                  : (isTenor || isGhostTenor) ? (tenorHeightMap?.[r.pitches[0]] ?? H_VOICE_MIN)
                  : (isSoprano || isGhostSoprano) ? chipH_soprano(r.pitches[0])
                  : chipH(r.pitches[0]);
          const w = chipW(r);
          const isAnchor = r.anchor || (r.role === "cad" && i === 0);
          const bg = chipBg[role] ?? chipBg.recite;
          const isDownward = isBass || isTenor || isGhostTenor;
          const isActive = playingLine === li && (
            isBass ? playingBassIdx === i
            : (isTenor || isGhostTenor) ? playingTenorIdx === i
            : playingAltoIdx === i
          );
          const borderC = isActive ? "#7a2418"
            : (chipBorderColor[role] ?? chipBorderColor.recite);
          const borderW = isActive ? "2px" : "1px";
          const stripe = chipStripe[role] ?? chipStripe.recite;
          const sol = (isSoprano || isGhostSoprano) ? (SOPRANO_MAP[r.pitches[0]] ?? r.pitches[0]) : r.pitches[0];

          // Ghost soprano: transparent body, stripe crown, solfège label
          if (isGhostSoprano) {
            return (
              <div key={i} style={{
                position: "relative", display: "inline-block", flexShrink: 0,
                width: w, height: h,
                background: isActive ? "rgba(40,58,92,.18)" : "transparent",
                border: isActive ? "2px solid #7a2418" : `1px solid ${chipBorderColor[role] ?? chipBorderColor.recite}`,
                borderRadius: 6,
                overflow: "hidden",
                opacity: isActive ? 1 : 0.5,
              }}>
                <div style={{
                  position: "absolute", left: 0, right: 0, top: 0,
                  height: 8, background: stripe,
                  borderRadius: "5px 5px 0 0",
                }} />
                <div style={{
                  position: "absolute", left: 0, right: 0, textAlign: "center",
                  top: 9, fontSize: 9, color: solColor, fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                }}>{sol}</div>
              </div>
            );
          }

          // Ghost tenor: transparent body, stripe at bottom, solfège label
          if (isGhostTenor) {
            return (
              <div key={i} style={{
                position: "relative", display: "inline-block", flexShrink: 0,
                width: w, height: h,
                background: isActive ? "rgba(122,36,24,.18)" : "transparent",
                border: isActive ? "2px solid #7a2418" : `1px solid ${chipBorderColor[role] ?? chipBorderColor.recite}`,
                borderRadius: 6,
                overflow: "hidden",
                opacity: isActive ? 1 : 0.5,
              }}>
                <div style={{
                  position: "absolute", left: 0, right: 0, bottom: 0,
                  height: 8, background: stripe,
                  borderRadius: "0 0 5px 5px",
                }} />
                <div style={{
                  position: "absolute", left: 0, right: 0, textAlign: "center",
                  bottom: 9, fontSize: 9, color: solColor, fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                }}>{sol}</div>
              </div>
            );
          }

          return (
            <div key={i} style={{
              position: "relative", display: "inline-block", flexShrink: 0,
              width: w, height: h,
              background: isActive ? (isDownward ? "rgba(122,36,24,.22)" : "rgba(40,58,92,.18)") : bg,
              border: `${borderW} solid ${borderC}`,
              borderRadius: 6,
              overflow: "hidden",
              transition: "background 0.05s",
            }}>
              {/* Role stripe bar */}
              <div style={{
                position: "absolute", left: 0, right: 0,
                ...(isDownward ? { bottom: 0 } : { top: 0 }),
                height: 8, background: stripe,
                borderRadius: isDownward ? "0 0 5px 5px" : "5px 5px 0 0",
              }} />
              {/* Solfège label — always shown so each singer can read their note */}
              <div style={{
                position: "absolute", left: 0, right: 0, textAlign: "center",
                ...(isDownward ? { bottom: 9 } : { top: 9 }),
                fontSize: 9, color: solColor, fontStyle: "italic",
                fontFamily: "Georgia, serif",
              }}>{sol}</div>
            </div>
          );
        };

        // Build syllable text labels with melisma bar
        const renderTextLabel = (r, w, isAnchor, isMelisma) => (
          <div style={{
            width: w, flexShrink: 0, textAlign: "center", position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
            lineHeight: 1.4, whiteSpace: "nowrap",
          }}>
            {isMelisma && (
              <div style={{
                position: "absolute", top: "50%", left: 0, width: "100%",
                height: 5, background: melismaBarColor, borderRadius: 2,
                transform: "translateY(-50%)", zIndex: 0, pointerEvents: "none",
              }} />
            )}
            <span style={{
              position: "relative", zIndex: 2,
              fontSize: "0.85rem", fontFamily: "Georgia, serif",
              fontWeight: isAnchor ? 600 : 400,
              color: ink,
              background: isMelisma ? "white" : "transparent",
              padding: isMelisma ? "0 3px" : 0,
            }}>{r.text}</span>
          </div>
        );

        // Group rolesWD by original syllable (melisma entries share same text)
        // We need to group consecutive entries with same text for the text label
        const groupedAlto = [];
        rolesWD.forEach((r, i) => {
          if (r.melisma && groupedAlto.length > 0 && groupedAlto[groupedAlto.length-1].text === r.text) {
            groupedAlto[groupedAlto.length-1].entries.push({ r, i });
          } else {
            groupedAlto.push({ text: r.text, entries: [{ r, i }] });
          }
        });

        return (
          <div key={li} id={`phrase-block-${li}`} style={{
            background: "rgba(255,255,255,.5)",
            border: `${playingLine === li ? "2px" : "1px"} solid ${playingLine === li ? "#7a2418" : "#d6c79f"}`,
            borderLeft: `5px solid ${playingLine === li ? "#7a2418" : gold}`,
            borderRadius: 8, padding: "0.9rem", marginBottom: "0.8rem",
            transition: "border 0.1s",
          }}>
            {/* Phrase label — badge + context line + trailing play button */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
              <span style={{ background: isFin ? "#7a2418" : "#283a5c", color: "#fff", borderRadius: 5, padding: "2px 10px", fontSize: "0.78rem", flexShrink: 0 }}>{PNAME[line.phrase]}</span>
              <span style={{ fontSize: "0.76rem", color: "#6b5942", fontStyle: "italic", flex: 1 }}>
                {voicePart === "bass" ? "Bass · " : voicePart === "soprano" ? "Soprano · " : voicePart === "tenor" ? "Tenor · " : "Alto · "}{PNAME[line.phrase]} · reciting on <b>{PH[line.phrase].recite}</b>{PH[line.phrase].prep ? <> · prep on <b>{PH[line.phrase].prep}</b></> : null}
              </span>
              <button
                disabled={playingLine !== null && playingLine !== li}
                style={{ ...btn, padding: "2px 10px", fontSize: "0.74rem",
                         opacity: playingLine !== null && playingLine !== li ? 0.35 : 1,
                         cursor: playingLine !== null && playingLine !== li ? "not-allowed" : "pointer" }}
                onClick={() => playingLine === li ? stopAll() : playLine(li)}>
                {playingLine === li ? "◼ Stop" : "▶ Play"}
              </button>
            </div>

            {/* Soprano chips — above text, same layout as alto but soprano heights/labels */}
            {showSoprano && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "flex-end", marginBottom: 6 }}>
                {groupedAlto.map((grp, gi) => {
                  if (grp.entries.length === 1) {
                    const {r, i} = grp.entries[0];
                    return renderChip(r, i, false, true);
                  }
                  return (
                    <div key={gi} style={{ display: "inline-flex", gap: CHIP_MELISMA_GAP, alignItems: "flex-end" }}>
                      {grp.entries.map(({r, i}) => renderChip(r, i, false, true))}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Alto chips — above text. In alto+bass mode, soprano chips render at same
                baseline behind alto chips (soprano sets container height, alto overlays). */}
            {showAlto && (() => {
              const altoRow = (
                <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "flex-end" }}>
                  {groupedAlto.map((grp, gi) => {
                    const entries = grp.entries;
                    if (entries.length === 1) {
                      return <React.Fragment key={gi}>{renderChip(entries[0].r, entries[0].i, false)}</React.Fragment>;
                    }
                    return (
                      <div key={gi} style={{ display: "inline-flex", gap: CHIP_MELISMA_GAP, alignItems: "flex-end" }}>
                        {entries.map(({r, i}) => renderChip(r, i, false))}
                      </div>
                    );
                  })}
                </div>
              );

              if (!showSopranoTab) return <div style={{ marginBottom: 6 }}>{altoRow}</div>;

              // Soprano row — full chips rendered behind alto, same widths/gaps, same baseline.
              // Soprano chips are always taller so their tops peek above alto naturally.
              // 50% opacity so soprano reads as a secondary layer behind the alto.
              const sopranoRow = (
                <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "flex-end",
                              position: "absolute", bottom: 0, left: 0, opacity: 0.5 }}>
                  {groupedAlto.map((grp, gi) => {
                    const entries = grp.entries;
                    if (entries.length === 1) {
                      return <React.Fragment key={gi}>{renderChip(entries[0].r, entries[0].i, false, false, true)}</React.Fragment>;
                    }
                    return (
                      <div key={gi} style={{ display: "inline-flex", gap: CHIP_MELISMA_GAP, alignItems: "flex-end" }}>
                        {entries.map(({r, i}) => renderChip(r, i, false, false, true))}
                      </div>
                    );
                  })}
                </div>
              );

              // Container height driven by soprano (tallest chips).
              // Alto row overlays absolutely at the bottom, always on top via zIndex.
              const maxSopH = Math.max(...groupedAlto.flatMap(grp =>
                grp.entries.map(({r}) => chipH_soprano(r.pitches[0]))
              ));
              return (
                <div style={{ position: "relative", height: maxSopH, marginBottom: 6 }}>
                  {sopranoRow}
                  <div style={{ position: "absolute", bottom: 0, left: 0, zIndex: 1 }}>
                    {altoRow}
                  </div>
                </div>
              );
            })()}

            {/* Text baseline — shared syllable labels with melisma bars */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "center", marginBottom: showBass ? 6 : 0 }}>
              {groupedAlto.map((grp, gi) => {
                const isMel = grp.entries.length > 1;
                const totalW = grp.entries.reduce((s, {r}) => s + chipW(r), 0) + (isMel ? CHIP_MELISMA_GAP * (grp.entries.length-1) : 0);
                const isAnchor = grp.entries.some(({r}) => r.anchor);
                return renderTextLabel(grp.entries[0].r, totalW, isAnchor, isMel);
              })}
            </div>

            {/* Standalone tenor chips — below text, same layout as bass */}
            {showTenor && tenorRolesWD && (() => {
              const groupedTenor = [];
              tenorRolesWD.forEach((r, i) => {
                if (r.melisma && groupedTenor.length > 0 && groupedTenor[groupedTenor.length-1].text === r.text) {
                  groupedTenor[groupedTenor.length-1].entries.push({ r, i });
                } else {
                  groupedTenor.push({ text: r.text, entries: [{ r, i }] });
                }
              });
              return (
                <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "flex-start" }}>
                  {groupedTenor.map((grp, gi) => {
                    if (grp.entries.length === 1) {
                      const {r, i} = grp.entries[0];
                      return renderChip(r, i, false, false, false, true, false);
                    }
                    return (
                      <div key={gi} style={{ display: "inline-flex", gap: CHIP_MELISMA_GAP, alignItems: "flex-start" }}>
                        {grp.entries.map(({r, i}) => renderChip(r, i, false, false, false, true, false))}
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Bass chips — below text, melisma groups tightly spaced */}
            {/* In SATB mode, tenor ghosts over bass at 50% opacity, flex-start aligned */}
            {showBass && (() => {
              const groupedBass = [];
              bassRolesWD.forEach((r, i) => {
                if (r.melisma && groupedBass.length > 0 && groupedBass[groupedBass.length-1].text === r.text) {
                  groupedBass[groupedBass.length-1].entries.push({ r, i });
                } else {
                  groupedBass.push({ text: r.text, entries: [{ r, i }] });
                }
              });

              // Build groupedTenor for ghost overlay in SATB
              const groupedTenorGhost = showTenorGhost && tenorRolesWD ? (() => {
                const g = [];
                tenorRolesWD.forEach((r, i) => {
                  if (r.melisma && g.length > 0 && g[g.length-1].text === r.text) {
                    g[g.length-1].entries.push({ r, i });
                  } else {
                    g.push({ text: r.text, entries: [{ r, i }] });
                  }
                });
                return g;
              })() : null;

              const bassRow = (
                <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "flex-start" }}>
                  {groupedBass.map((grp, gi) => {
                    if (grp.entries.length === 1) {
                      const {r, i} = grp.entries[0];
                      return renderChip(r, i, true);
                    }
                    return (
                      <div key={gi} style={{ display: "inline-flex", gap: CHIP_MELISMA_GAP, alignItems: "flex-start" }}>
                        {grp.entries.map(({r, i}) => renderChip(r, i, true))}
                      </div>
                    );
                  })}
                </div>
              );

              if (!groupedTenorGhost) return bassRow;

              // Mirror of soprano-over-alto pattern, inverted for below-text voices.
              // Container height = tallest bass chip (bass defines the depth).
              // Tenor ghost anchors at top:0 — shorter chips stay near text baseline.
              // Bass row anchors at top:0 behind tenor — taller chips hang further below.
              // Alto sits above text; tenor sits just below text; bass sinks below tenor.
              const maxBassH = Math.max(
                ...groupedBass.flatMap(grp => grp.entries.map(({r}) => bassHeightMap?.[r.pitches[0]] ?? H_VOICE_MIN))
              );
              const tenorGhostRow = (
                <div style={{ display: "flex", flexWrap: "wrap", gap: CHIP_GAP, alignItems: "flex-start",
                              position: "absolute", top: 0, left: 0, opacity: 0.5, zIndex: 1 }}>
                  {groupedTenorGhost.map((grp, gi) => {
                    if (grp.entries.length === 1) {
                      const {r, i} = grp.entries[0];
                      return renderChip(r, i, false, false, false, false, true);
                    }
                    return (
                      <div key={gi} style={{ display: "inline-flex", gap: CHIP_MELISMA_GAP, alignItems: "flex-start" }}>
                        {grp.entries.map(({r, i}) => renderChip(r, i, false, false, false, false, true))}
                      </div>
                    );
                  })}
                </div>
              );
              return (
                <div style={{ position: "relative", height: maxBassH }}>
                  {/* Bass behind — taller chips sink further below text */}
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    {bassRow}
                  </div>
                  {/* Tenor ghost on top — shorter chips stay near text baseline */}
                  {tenorGhostRow}
                </div>
              );
            })()}

          </div>
        );
      })}

      <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic", borderTop: "1px solid #d6c79f", paddingTop: "0.9rem" }}>
        Structural pointing (reciting run vs. cadence, anchored on the last internal accent, with the
        one-syllable-final-word backup) follows Drillock &amp; Ealy, <i>Tutorial for Learning the Church
        Tones — Common Chant</i> (OCA). The exact note-to-syllable distribution inside a cadence is the
        trainer's best reading; verify against the printed staves.
      </div>

      <div style={{ marginTop: "1rem", fontSize: "0.72rem", color: "#9A8A70", borderTop: "1px solid #e8dfc8", paddingTop: "0.7rem", display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "space-between" }}>
        <span>
          © 2026 William Stevens. All Rights Reserved.{" "}
          Tone Trainer and its distinctive visual representations of pitch and note duration are the intellectual property of the author.
          Any reproduction or use requires prior written permission.
        </span>
        <span style={{ whiteSpace: "nowrap" }}>v{TONE_TRAINER_VERSION}</span>
      </div>
    </div>
  );
}
