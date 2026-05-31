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

export const TONE_TRAINER_VERSION = "v0.9.4";

// Release notes for the trainer's clickable version badge (mirrors hours-tool).
// Newest entry first; the badge reads TRAINER_RELEASE_NOTES[0].version.
const TRAINER_RELEASE_NOTES = [
  {
    version: "v0.9.4",
    date: "May 2026",
    summary: "Machine pointing view in sing window — toggle between director and machine",
    items: [
      "feat: 'machine pointing' pill button in the info bar, visible whenever machine lines are available and the comparison harness is not open. Clicking switches the sing display between director pointing and machine auto-pointing. The Director Pointing ✓ badge updates to reflect the active view.",
      "feat: singView state ('director' | 'machine') drives which lines render in the sung display and which lines playLine/playAll use for audio. Pitch height chips apply equally to both — both paths go through the same pointLine() → chipH() pipeline.",
      "feat: singView resets to 'director' whenever new lines are analyzed (truth mode, auto mode, or block point from docx ingest), so the director view is always the default after a fresh Point Verses.",
      "note: in comparison harness mode the existing Sing director / Sing machine toggle continues to control playback as before. The new singView button is hidden in comparison mode.",
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
    version: "v0.3.1",
    date: "May 2026",
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
const OFF = { la: -3, ti: -1, do: 0, di: 1, re: 2, mi: 4, fa: 5, sol: 7 };
const DO_OPTIONS = [
  { label: "F", hz: 174.61 },
  { label: "G", hz: 196.00 },
  { label: "A", hz: 220.0 },
  { label: "B", hz: 246.94 },
  { label: "C", hz: 261.63 },
  { label: "D", hz: 293.66 },
  { label: "E", hz: 329.63 },
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
    A:     { recite: "re", inton: true,  prep: "ti", cad: ["do"] },
    B:     { recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"] },
    C:     { recite: "re", inton: true,  prep: null, cad: ["do", "ti"] },
    D:     { recite: "do", inton: false, prep: null, cad: ["ti", "do", "re", "do", "ti"] },
    Final: { recite: "re", inton: false, prep: null, cad: ["do", "ti", "la"] },
  },
  2: {
    A:     { recite: "re", inton: false, prep: null,  cad: ["fa", "mi", "re"]      },
    B:     { recite: "re", inton: false, prep: null,  cad: ["di", "re"]            },
    C:     { recite: "re", inton: true,  prep: "ti",  cad: ["do"]                  },
    D:     { recite: "do", inton: false, prep: null,  cad: ["di", "re"]            },
    Final: { recite: "re", inton: false, prep: "ti",  cad: ["do", "re", "do", "ti"] },
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
const ROT_DEFS = {
  1: ["A", "B", "C", "D"],
  2: (i, total) => i === total - 1 ? "Final" : i === 0 ? "A" : ["B","C","D"][(i - 1) % 3],
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

// ── LEXICON LOOKUP ────────────────────────────────────────────────────────────
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
  // Phrase C — Da = intonation; nounced = anchor
  ["C", [["This",[["This",0]]],["is",[["is",0]]],["He",[["He",0]]],["Whom",[["Whom",0]]],["David",[["Da",1],["vid",0]]],["announced;",[["an",0],["nounced",1]]]]],
  // Phrase D — no intonation; Proph = anchor (ets trails)
  ["D", [["this",[["this",0]]],["is",[["is",0]]],["He",[["He",0]]],["Who",[["Who",0]]],["spoke",[["spoke",0]]],["in",[["in",0]]],["the",[["the",0]]],["Prophets,",[["Proph",1],["ets",0]]]]],
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

  // ── Standard single-anchor logic (all other tones/phrases) ──────────────
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  // Pre-slur detection (Tone 2 Final Phrase rule, but structure-agnostic):
  // If the phrase has a prep note AND the syllable immediately before the prep
  // is a single accented monosyllable, that syllable gets role="preslur" with
  // pitches [recite, prep] as two quarter notes (re→ti for Tone 2 Final).
  // Confirmed from OCA corpus: "Hear me O Lord" (Hear→me), "Pray to Christ God for us all!" (Christ→God).
  // The preslur check applies to ANY tone/phrase with def.prep set — but only
  // fires when body.length >= 1 and the last body syllable is a single accented monosyllable.
  let preslurIdx = -1; // index within body where pre-slur fires (the syllable before prep)
  if (def.prep && body.length >= 1) {
    const candidate = body[body.length - 1];
    if (candidate.single && candidate.accent) {
      preslurIdx = body.length - 1;
    }
  }

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
function parseBracketWord(token, lexicon) {
  const hasBracket = /\[/.test(token);
  if (!hasBracket) {
    return { cleanWord: token, accentIdx: -1, bracketType: "none" };
  }

  // Strip brackets to get clean token, recording bracket span positions.
  // e.g. "up[on]" → clean="upon", bracketStart=2, bracketEnd=3
  // e.g. "[Lord]," → clean="Lord,", bracketStart=0, bracketEnd=3
  // e.g. "[Hear]" → clean="Hear", bracketStart=0, bracketEnd=3
  let clean = "";
  let bracketStart = -1, bracketEnd = -1;
  let inBracket = false;
  for (let i = 0; i < token.length; i++) {
    if (token[i] === "[") { inBracket = true; bracketStart = clean.length; continue; }
    if (token[i] === "]") { inBracket = false; bracketEnd = clean.length - 1; continue; }
    clean += token[i];
  }

  // Extract alpha core from clean token (strips leading punctuation like commas)
  const alphaMatch = clean.match(/[A-Za-z''-]+/);
  if (!alphaMatch) return { cleanWord: token.replace(/[\[\]]/g, ""), accentIdx: -1, bracketType: "none" };
  const core = alphaMatch[0];
  const coreOffset = alphaMatch.index;

  // Syllabify via lexicon (used as fallback and for whole-word stress).
  const entry = lookupWord(core, lexicon);
  const rawSylls = entry
    ? entry.sylls
    : syllabifyRules(core);
  const stressIdx = entry ? (entry.stressIdx ?? 0) : 0;

  // Adjust bracket positions to be relative to the alpha core.
  const adjStart = bracketStart - coreOffset;
  const adjEnd = bracketEnd - coreOffset;

  // Whole-word bracket: [Lord], [Hear], [Receive] (entire core is bracketed).
  // bracketStart..bracketEnd spans the whole core (adjusted positions cover 0..core.length-1)
  const wholeWord = adjStart <= 0 && adjEnd >= core.length - 1;

  if (wholeWord) {
    // Director marked the whole word — use lexicon stressIdx as tiebreaker.
    return {
      cleanWord: clean,
      accentIdx: stressIdx,
      bracketType: "whole",
      sylls: rawSylls,
    };
  }

  // Mid-word bracket: up[on], Re[deem]er, in[car]nate, Re[ceive]
  //
  // DIRECTOR-AUTHORITATIVE SPLIT: when the bracket has a non-empty prefix and/or
  // suffix, the bracket boundaries themselves define the syllable structure.
  // e.g. "Re[deem]er" → prefix="Re", bracketed="deem", suffix="er" → 3 syllables.
  // e.g. "up[on]" → prefix="up", bracketed="on", no suffix → 2 syllables.
  // e.g. "in[car]nate" → prefix="in", bracketed="car", suffix="nate" → 3 syllables.
  //
  // This is more reliable than the lexicon/rule-engine because the director has
  // explicitly shown where the syllable break is. We only fall back to the
  // lexicon-derived mapping when the bracket sits at the very start of the word
  // (no prefix) and there's ambiguity about how many syllables follow.
  const clampedStart = Math.max(0, adjStart);
  const clampedEnd   = Math.min(core.length - 1, adjEnd);
  const prefix   = core.slice(0, clampedStart);         // "" if bracket at word start
  const bracketed = core.slice(clampedStart, clampedEnd + 1);
  const suffix   = core.slice(clampedEnd + 1);          // "" if bracket at word end

  const hasPrefix = prefix.length > 0;
  const hasSuffix = suffix.length > 0;

  if (hasPrefix || hasSuffix) {
    // Build syllable array directly from the bracket-defined segments.
    // Segments with content become syllables; empty segments are omitted.
    const directorSylls = [prefix, bracketed, suffix].filter(s => s.length > 0);
    // Accent falls on the bracketed segment, which is always present (index depends
    // on whether prefix exists).
    const accentIdx = hasPrefix ? 1 : 0;
    return {
      cleanWord: clean,
      accentIdx,
      bracketType: "mid",
      sylls: directorSylls,
    };
  }

  // Fallback: bracket at word start with no prefix — map via vowel nucleus.
  const idx = bracketSpanToSyllIdx(core, clampedStart, clampedEnd, rawSylls);
  return {
    cleanWord: clean,
    accentIdx: Math.max(0, idx),
    bracketType: "mid",
    sylls: rawSylls,
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
  // Split into lines, strip trailing | markers.
  const rawLines = rawText
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/\s*\|\s*$/, "").trim())
    .filter(Boolean);

  if (!rawLines.length) return [];
  const total = rawLines.length;

  return rawLines.map((ln, i) => {
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

    return { phrase, words };
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
    const accentSet = new Set([anchorIdx]);
    if (intonIdx >= 0) accentSet.add(intonIdx);
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
      const stressIdx = entry ? (entry.stressIdx ?? 0) : 0;
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
  const tone = (f, t0, dur, peak = 0.22) => {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "triangle";
    o.frequency.value = f;
    o.connect(g);
    g.connect(c.destination);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + 0.035);
    g.gain.setValueAtTime(peak, t0 + dur - 0.07);
    g.gain.linearRampToValueAtTime(0, t0 + dur - 0.005);
    o.start(t0);
    o.stop(t0 + dur);
  };
  const stop = () => {
    if (ctxRef.current) {
      try { ctxRef.current.close(); } catch (_) {}
      ctxRef.current = null;
    }
  };
  return { ac, tone, stop };
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ToneTrainer() {
  const [doHz, setDoHz] = useState(261.63);
  const [bpm, setBpm] = useState(70); // half note = 1 beat per tutorial
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const [playingLine, setPlayingLine] = useState(null);
  const [playingWhich, setPlayingWhich] = useState(null); // "truth"|"machine" while a line plays
  const [editOpen, setEditOpen] = useState({});
  const [editMode, setEditMode] = useState(false); // gates all accent/syllable editing
  const [pitchHeight, setPitchHeight] = useState(false); // chip height reflects solfege pitch
  const [machineEditOpen, setMachineEditOpen] = useState({}); // comparison machine edit lines
  const [showReleaseNotes, setShowReleaseNotes] = useState(false);
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
  useEffect(() => {
    const base = "/orthodox-hours/lexicon/";
    Promise.all([
      fetch(base + "syllable-table.json").then((r) => r.json()),
      fetch(base + "name-residue.json").then((r) => r.json()),
    ])
      .then(([table, residue]) => setLexicon({ ...table, ...residue }))
      .catch(() => setLexiconError("Lexicon unavailable — using rules only"));
  }, []);

  // Auto-scroll the active block into view while singing — centers in the window.
  // Works for both the sung display (phrase-block-N) and the comparison harness
  // (compare-block-N). Using block:"center" keeps the active verse mid-screen
  // rather than just barely in view.
  useEffect(() => {
    if (playingLine === null) return;
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
  const { ac, tone, stop } = useAudio();

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
    const DH = H * 1.5;        // dotted half note — Tone 3 Phrase B anchor (audio-confirmed)

    // Whether the active phrase uses a dotted-half anchor (Tone 3 Phrase B).
    const phDef = PH[line.phrase];
    const useAnchorDH = !!(phDef && phDef.anchorDH);

    // Precompute cadence syllable positions for first/middle/last logic.
    const cadIdxs = roles.map((r, i) => r.role === "cad" ? i : -1).filter(i => i >= 0);

    roles.forEach((r, ri) => {
      // Syllable duration per tutorial:
      //   inton accented → H (half note intonation)
      //   inton unaccented → Q (quarter note lead-in on same pitch)
      //   recite / prep → Q (quarter note always)
      //   preslur → Q (two Q notes split across the two pitches via melisma logic)
      //   cad anchor (first) → H (or DH when anchorDH:true); cad middle → Q; cad last → H or W (Final only)
      //   cad1 → H·Q·Q (mi·do·re) emitted directly with per-pitch durations — see cad1 block below
      let syllDur;
      if (r.role === "inton") {
        syllDur = r.accent ? H : Q;
      } else if (r.role === "recite" || r.role === "prep") {
        syllDur = Q;
      } else if (r.role === "preslur") {
        // Pre-slur = two quarter notes (re + ti) as a pickup before the prep.
        // Assign H so the melisma division (syllDur / pitches.length = H/2) yields Q+Q.
        syllDur = H;
      } else if (r.role === "cad1") {
        // Part 1 cadence (Tone 3 Final Phrase only): mi(H) · do(Q) · re(Q).
        // Tutorial-explicit note values (Drillock & Ealy): half note on mi,
        // quarter on do, quarter on re. Emitted directly — bypasses syllDur/pitches.length
        // because the three pitches have unequal durations that cannot be derived
        // from a single syllable slot.
        // NOTE: score reading suggests Q·H·Q (half on do, not mi) — deferred for
        // further investigation. Tutorial text is H·Q·Q; implemented as such.
        const CAD1_DURS = [H, Q, Q];
        const peak1 = r.anchor ? 0.27 : 0.2;
        r.pitches.forEach((p, pi) => {
          notes.push({ sol: p, dur: CAD1_DURS[pi] ?? Q, peak: peak1 });
        });
        return; // note emission handled above — skip the standard pitchDur path
      } else if (r.role === "cad") {
        const cadPos = cadIdxs.indexOf(ri);
        const isFirst = cadPos === 0;
        const isLast  = cadPos === cadIdxs.length - 1;
        if (isFirst && isLast) {
          // Only one cadence syllable — serves as both anchor and final.
          syllDur = isFinal ? W : H;
        } else if (isFirst) {
          // Anchor: use DH (dotted half) when the phrase definition flags anchorDH.
          // The long-cadence rule (more syllables than figure notes) causes distribute()
          // to repeat the penultimate figure note for fill — in that case the anchor
          // still starts on the figure's first note, but we use H to avoid over-holding.
          syllDur = (useAnchorDH && cadIdxs.length <= (phDef?.cad?.length ?? 99)) ? DH : H;
        } else if (isLast) {
          syllDur = isFinal ? W : H; // whole note only for Final Phrase
        } else {
          syllDur = Q; // middle cadence syllables = quarter notes
        }
      } else {
        syllDur = Q;
      }

      // Multi-pitch melisma: divide syllable duration evenly across pitches.
      // Pre-slur has two pitches [recite, prep] → each gets Q/2 = eighth note.
      // This matches tutorial intent: the slur is a quick two-note pickup.
      const pitchDur = syllDur / r.pitches.length;
      const peak = (r.role === "cad" || r.role === "cad1") && r.anchor ? 0.27 : 0.2;

      r.pitches.forEach((p) => {
        notes.push({ sol: p, dur: pitchDur, peak });
      });
    });
    return notes;
  };

  const playNotes = (notes, onDone) => {
    const c = ac();
    let t = c.currentTime + 0.06;
    notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
    if (onDone) {
      const id = setTimeout(onDone, (t - c.currentTime) * 1000 + 40);
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
    setPlayingWhich(which);
    playNotes(lineToNotes(src[li]), () => { setPlayingLine(null); setPlayingWhich(null); });
  };

  const playLine = (li) => {
    setPlayingLine(li);
    setPlayingWhich(singWhich);
    playNotes(lineToNotes(activeLines()[li]), () => { setPlayingLine(null); setPlayingWhich(null); });
  };

  const playAll = () => {
    timerIdsRef.current.forEach(id => clearTimeout(id));
    timerIdsRef.current = [];
    const c = ac();
    let t = c.currentTime + 0.06;
    const which = compareMode && machineLines ? singWhich : "truth";
    setPlayingWhich(which);
    activeLines().forEach((line, li) => {
      const notes = lineToNotes(line);
      const start = t;
      const id1 = setTimeout(() => setPlayingLine(li), (start - c.currentTime) * 1000);
      timerIdsRef.current.push(id1);
      notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
      t += (60 / bpm) / 2; // one quarter note of silence between phrases
    });
    const id2 = setTimeout(() => { setPlayingLine(null); setPlayingWhich(null); }, (t - c.currentTime) * 1000 + 40);
    timerIdsRef.current.push(id2);
  };

  const stopAll = () => {
    timerIdsRef.current.forEach(id => clearTimeout(id));
    timerIdsRef.current = [];
    stop();
    setPlayingLine(null);
    setPlayingWhich(null);
  };

  const playScale = () =>
    playNotes(["la", "ti", "do", "re", "mi"].map((s) => ({ sol: s, dur: 0.4 })));

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

    let fi = 0;
    return words.map((w) => ({
      ...w,
      sylls: w.sylls.map((s) => ({ ...s, accent: accentSet.has(fi++) })),
    }));
  };

  const analyze = () => {
    if (!text.trim()) { setLines([]); return; }
    const { hasBrackets } = parseBracketedText(text);
    const activeRot = ROT_DEFS[activeTone] || ROT_DEFS[1];
    if (hasBrackets) {
      // TRUTH MODE: brackets are authoritative over the lexicon.
      const tLines = parseTruthLines(text, lexicon, activeRot);
      if (!tLines.length) { setLines([]); return; }
      const mLines = autoEncodeLines(tLines, lexicon, PH);
      const cmp = buildComparison(tLines, mLines, PH, activeTone);
      setLines(tLines);
      setMachineLines(mLines);
      setCompareData(cmp);
      setHasTruth(true);
      // Keep compareMode open if it was already open — user may be re-pointing
      // with edits while watching the A/B harness. Only close it on first point.
      if (!compareMode) setCompareMode(false);
      setSingView("director");
      setSingWhich("truth");
    } else {
      // AUTO MODE: syllabify via lexicon, then apply phrase-structural accent engine.
      const raw = text.split("\n").map((s) => s.trim()).filter(Boolean);
      const next = raw.map((ln, i) => {
        const phrase = phraseForLine(i, raw.length, activeRot);
        const rawWords = ln.split(/\s+/)
          .filter((w) => /[A-Za-z]/.test(w))   // skip pure-punctuation tokens (commas, etc.)
          .map((w) => wordFromDisplay(w, lexicon))
          .filter(Boolean);                      // drop null returns (whole-punctuation tokens)
        // Apply phrase-structural engine: anchor + intonation only, not all word stress.
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

  const toggleAccent = (li, fi) => {
    setLines((prev) => {
      const copy = prev.map((l) => ({ phrase: l.phrase, words: l.words.map((w) => ({ display: w.display, sylls: w.sylls.map((s) => ({ ...s })) })) }));
      let count = 0;
      for (const w of copy[li].words) {
        for (const s of w.sylls) { if (count === fi) s.accent = !s.accent; count++; }
      }
      return copy;
    });
  };

  const applyEdit = (li, val) => {
    // Re-accent via autoAccentLine after syllabification change —
    // otherwise anchorIndex gets all-false accents and falls back to last syllable.
    setLines((prev) => {
      const copy = prev.map((l) => ({ ...l, words: l.words.map((w) => ({ ...w, sylls: w.sylls.map((s) => ({ ...s })) })) }));
      const phrase = copy[li].phrase;
      const rawWords = val.trim().split(/\s+/).map((tok) => {
        const ss = tok.split(/[·\-]/).filter(Boolean);
        return { display: ss.join(""), sylls: ss.map((t) => ({ text: t, accent: false })) };
      });
      copy[li].words = autoAccentLine(rawWords, phrase);
      return copy;
    });
  };

  // Toggle accent on a machine syllable in the comparison harness.
  // Mutates machineLines and recomputes compareData immediately.
  const toggleMachineAccent = (li, si) => {
    if (!machineLines) return;
    const newML = machineLines.map((line, lineIdx) => {
      if (lineIdx !== li) return line;
      let count = 0;
      const words = line.words.map((w) => ({
        ...w,
        sylls: w.sylls.map((s) => {
          const result = { ...s, accent: count === si ? !s.accent : s.accent };
          count++;
          return result;
        }),
      }));
      return { ...line, words };
    });
    setMachineLines(newML);
    setCompareData(buildComparison(lines, newML, PH, activeTone));
  };

  // Re-syllabify a machine line from text (same format as applyEdit: syll·syll word).
  // Re-runs autoAccentLine so a no-op apply doesn't strip all machine accents.
  const applyMachineEdit = (li, val) => {
    if (!machineLines) return;
    const phrase = machineLines[li].phrase;
    const rawWords = val.trim().split(/\s+/).map((tok) => {
      const sylls = tok.split(/[·\-]/).filter(Boolean);
      return { display: sylls.join(""), sylls: sylls.map((t) => ({ text: t, accent: false, source: "rule" })) };
    });
    const words = autoAccentLine(rawWords, phrase);
    const newML = machineLines.map((line, lineIdx) =>
      lineIdx === li ? { ...line, words } : line
    );
    setMachineLines(newML);
    setCompareData(buildComparison(lines, newML, PH, activeTone));
  };

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

    // Step 3: syllabify via lexicon, then map underline spans to syllables.
    const isVowel = (c) => "aeiouy".includes(c.toLowerCase());
    const nucleusPositions = (s) => {
      const pos = []; let k = 0;
      while (k < s.length) {
        if (isVowel(s[k])) { pos.push(k); while (k < s.length && isVowel(s[k])) k++; }
        else k++;
      }
      return pos;
    };

    const words = wordTokens.map(({ display, core, coreStart, ulSlice }) => {
      const coreUl = ulSlice.slice(coreStart, coreStart + core.length);
      const anyUnderlined = coreUl.some(Boolean);

      // No underline → no director accent mark on this word.
      if (!anyUnderlined) {
        // Still need syllabification for display — use lexicon/rules.
        const wordObj = wordFromDisplay(core, lexicon);
        if (!wordObj) return null;
        return { display, sylls: wordObj.sylls.map(s => ({ ...s, accent: false })) };
      }

      // Find the contiguous underlined span within the core.
      const firstUl = coreUl.indexOf(true);
      const lastUl  = coreUl.lastIndexOf(true);
      const prefix    = core.slice(0, firstUl);
      const underlined = core.slice(firstUl, lastUl + 1);
      const suffix    = core.slice(lastUl + 1);

      const hasPrefix = prefix.length > 0;
      const hasSuffix = suffix.length > 0;

      // DIRECTOR-AUTHORITATIVE SPLIT: when the underlined span has a non-empty
      // prefix or suffix, the underline boundaries define the syllable structure —
      // same principle as mid-word brackets. No lexicon needed.
      // e.g. "Redeemer" with "deem" underlined → Re / deem / er, accent on deem.
      // e.g. "Archangels" with "an" underlined → Arch / an / gels, accent on an.
      if (hasPrefix || hasSuffix) {
        const dirSylls = [prefix, underlined, suffix].filter(s => s.length > 0);
        const accentIdx = hasPrefix ? 1 : 0;
        return {
          display,
          sylls: dirSylls.map((t, si) => ({
            text: t, accent: si === accentIdx, source: "truth",
          })),
        };
      }

      // Whole-word underlined OR underline at word start with no prefix:
      // fall back to lexicon syllabification + nucleus mapping.
      const wordObj = wordFromDisplay(core, lexicon);
      if (!wordObj) return null;
      const sylls = wordObj.sylls;

      const wholeWordUnderlined = coreUl.every(Boolean);
      if (wholeWordUnderlined) {
        const stressIdx = wordObj.sylls.findIndex(s => s.accent);
        const accentIdx = stressIdx >= 0 ? stressIdx : 0;
        return {
          display,
          sylls: sylls.map((s, si) => ({ ...s, accent: si === accentIdx, source: "truth" })),
        };
      }

      // Partial underline (mid-word bracket like up[on], Re[ceive]) — map
      // the underlined span to a syllable by vowel-nucleus overlap.
      let pos = 0;
      const syllRanges = sylls.map((s) => {
        const start = pos; pos += s.text.length; return { start, end: pos - 1 };
      });
      const ulPositions = new Set(
        coreUl.map((u, idx) => u ? idx : -1).filter(idx => idx >= 0)
      );
      const nuclei = nucleusPositions(core);
      let accentIdx = -1;
      for (let n = 0; n < nuclei.length; n++) {
        if (ulPositions.has(nuclei[n])) {
          accentIdx = syllRanges.findIndex(r => nuclei[n] >= r.start && nuclei[n] <= r.end);
          if (accentIdx >= 0) break;
        }
      }
      // Fallback: syllable with most overlapping underlined chars.
      if (accentIdx < 0) {
        let max = 0;
        syllRanges.forEach((r, si) => {
          let ov = 0;
          for (let c = r.start; c <= r.end; c++) { if (ulPositions.has(c)) ov++; }
          if (ov > max) { max = ov; accentIdx = si; }
        });
      }
      return {
        display,
        sylls: sylls.map((s, si) => ({
          ...s, accent: si === accentIdx, source: "truth",
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
              const pLines = presetToLines(activeTone);
              setLines(pLines);
              setHasTruth(false);
              setCompareData(null);
              setMachineLines(null);
              setCompareMode(false);
              setText("");
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
              Type or paste the sticheron — one line per line. Phrases rotate A·B·C·D; the last line is the Final Phrase.
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
          <button style={btn} onClick={playScale}>scale</button>
          <label style={{ fontSize: "0.82rem", color: playingLine !== null ? "#b0a080" : "#5b4a33",
                          display: "inline-flex", alignItems: "center", gap: "0.3rem",
                          transition: "color 0.2s" }}
            title={playingLine !== null ? "Stop playback to change tempo" : "Half note = 1 beat (Drillock & Ealy). Range: 40–120 BPM."}>
            tempo
            <input type="range" min={40} max={120} step={1} value={bpm}
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
          <button
            style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none",
                     fontSize: "1rem", padding: "5px 10px" }}
            onClick={playingLine !== null ? stopAll : playAll}
            title={playingLine !== null ? "Stop playback" : "Sing all lines"}>
            {playingLine !== null ? "◼" : "▶"}
          </button>
        </div>

      </div>


      {/* ── INFO BAR — always visible ──────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap",
                    fontSize: "0.78rem", color: "#6b5942", marginBottom: "1rem" }}>
        {/* Color-coded legend — pill backgrounds match chip roleBg colors */}
        <span style={{ flex: 1, display: "flex", gap: "0.6rem", justifyContent: "flex-start",
                       flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ background: "rgba(40,58,92,.08)", color: "#283a5c",
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
          <span>· ´ = accent</span>
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
        {/* Pitch height toggle — only in sing view, not A/B mode */}
        {!(compareMode && compareData) && (
        <button
          onClick={() => setPitchHeight(v => !v)}
          style={{ marginLeft: "0.5rem", fontSize: "0.72rem", flexShrink: 0,
                   background: pitchHeight ? "rgba(40,58,92,.12)" : "transparent",
                   border: `1px solid ${pitchHeight ? "rgba(40,58,92,.5)" : "#d6c79f"}`,
                   color: pitchHeight ? "#283a5c" : "#9A8A70",
                   borderRadius: 3, padding: "1px 8px", cursor: "pointer",
                   fontFamily: "Georgia, serif", whiteSpace: "nowrap" }}
          title="Show chip height and text position scaled to solfege pitch">
          {pitchHeight ? "pitch height ✓" : "pitch height"}
        </button>
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
          {/* Header row 2: Sing director/machine toggle | edit machine | spacer | show source */}
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
            {/* edit machine toggle — lives in the harness where it's used */}
            <button
              onClick={() => setEditMode(v => !v)}
              style={{ ...btn,
                       background: editMode ? gold : "transparent",
                       color: editMode ? "#fff" : gold,
                       fontSize: "0.75rem", padding: "4px 11px" }}
              title={editMode ? "Edit mode on — click machine chips or edit syllables" : "Enable to edit machine accent and syllable breakdown"}>
              ✎ edit machine
            </button>
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
                  // Machine edit vars — hoisted so they're available in JSX without an IIFE
                  const mLine = which === "machine" ? (machineLines || [])[li] : null;
                  const mDefaultVal = mLine
                    ? mLine.words.map(w => w.sylls.map(s => s.text).join("\u00b7")).join(" ")
                    : "";
                  const mInputId = `medit-${li}`;
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
                      const machineClickable = editMode && which === "machine";
                      return (
                        <span key={si}
                          onClick={machineClickable ? () => toggleMachineAccent(li, si) : undefined}
                          style={{ display: "inline-flex", flexDirection: "column", alignItems: "center",
                                   padding: "2px 5px 1px", borderRadius: 5, minWidth: "1.8em",
                                   cursor: machineClickable ? "pointer" : "default",
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
                      onClick={() => playLineAs(li, which)}
                      style={{ border: `1px solid ${rowSinging ? "#7a2418" : gold}`,
                               background: rowSinging ? "rgba(122,36,24,.08)" : "transparent",
                               color: rowSinging ? "#7a2418" : gold,
                               borderRadius: 3, padding: "2px 9px", cursor: "pointer",
                               fontFamily: "Georgia, serif", fontSize: "0.68rem",
                               flexShrink: 0, marginLeft: "0.5rem", alignSelf: "center" }}>
                      ▶
                    </button>
                    </div>{/* end chips row */}
                    {/* Machine edit panel — inside the machine row when editMode on */}
                    {which === "machine" && editMode && (
                      <div style={{ padding: "0.3rem 0.6rem 0.45rem", borderTop: "1px solid rgba(0,0,0,.08)",
                                     background: "rgba(235,235,235,.5)" }}>
                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                          <input id={mInputId} defaultValue={mDefaultVal}
                            style={{ flex: 1, minWidth: 200, fontFamily: "Georgia, serif", fontSize: "0.85rem",
                                     border: "1px solid #d6c79f", borderRadius: 6, padding: "3px 7px" }} />
                          <button style={btn}
                            onClick={() => applyMachineEdit(li, document.getElementById(mInputId).value)}>
                            apply
                          </button>
                          <span style={{ fontSize: "0.7rem", color: "#6b5942", fontStyle: "italic" }}>
                            · separates syllables, space separates words
                          </span>
                        </div>
                      </div>
                    )}
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
        const roles = pointLine(line, PH, activeTone);
        const isFin = line.phrase === "Final";
        let fi = -1;
        return (
          <div key={li} id={`phrase-block-${li}`} style={{ background: playingLine === li ? "rgba(255,250,238,.9)" : "rgba(255,255,255,.5)", border: "1px solid #d6c79f", borderLeft: `5px solid ${playingLine === li ? "#7a2418" : gold}`, borderRadius: 8, padding: pitchHeight ? "1.4rem 0.9rem 0.7rem" : "0.7rem 0.9rem", marginBottom: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <span style={{ background: isFin ? "#7a2418" : "#283a5c", color: "#fff", borderRadius: 5, padding: "2px 10px", fontSize: "0.78rem" }}>{PNAME[line.phrase]}</span>
              <span style={{ fontSize: "0.76rem", color: "#6b5942", fontStyle: "italic" }}>
                reciting on <b>{PH[line.phrase].recite}</b>{PH[line.phrase].prep ? <> · prep on <b>{PH[line.phrase].prep}</b></> : null}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 2px", alignItems: "flex-end" }}>
              {line.words.map((w, wi) => (
                <React.Fragment key={wi}>
                  {w.sylls.map((s, si) => {
                    fi += 1;
                    const r = roles[fi];
                    const myFi = fi;
                    const pis = r.pitches.join("-");
                    return (
                      <span key={si} onClick={editMode ? () => toggleAccent(li, myFi) : undefined}
                        style={{ position: "relative", display: "inline-flex", flexDirection: "column",
                                 alignItems: "center",
                                 justifyContent: pitchHeight ? "space-between" : "flex-end",
                                 height: pitchHeight ? chipH(r.pitches[0]) : undefined,
                                 overflow: "visible",
                                 padding: "3px 6px 2px", borderRadius: 6,
                                 cursor: editMode ? "pointer" : "default",
                                 background: roleBg[r.role],
                                 border: r.anchor ? "1px solid #7a2418" : "1px solid transparent",
                                 minWidth: "2em" }}>
                        <span style={{ fontSize: "1.1rem", fontWeight: s.accent ? 600 : 400, position: "relative" }}>
                          {s.text}
                        </span>
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "0.72rem", color: roleColor[r.role] }}>{pis}</span>
                      </span>
                    );
                  })}
                  <span style={{ width: 7 }} />
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.6rem", flexWrap: "wrap" }}>
              <button style={btn} onClick={() => playLine(li)}>▶ Sing this line</button>
              {editMode && !hasTruth && <button style={btn} onClick={() => setEditOpen((o) => ({ ...o, [li]: !o[li] }))}>edit syllables</button>}
            </div>
            {editMode && editOpen[li] && (
              <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                <input defaultValue={line.words.map((w) => w.sylls.map((s) => s.text).join("·")).join(" ")}
                  id={`edit-${li}`}
                  style={{ flex: 1, minWidth: 240, fontFamily: "Georgia, serif", fontSize: "0.9rem", border: "1px solid #d6c79f", borderRadius: 6, padding: "5px 8px" }} />
                <button style={btn} onClick={() => applyEdit(li, document.getElementById(`edit-${li}`).value)}>apply</button>
                <span style={{ fontSize: "0.74rem", color: "#6b5942", fontStyle: "italic" }}>separate syllables with · or - ; spaces separate words</span>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic", borderTop: "1px solid #d6c79f", paddingTop: "0.9rem" }}>
        Structural pointing (reciting run vs. cadence, anchored on the last internal accent, with the
        one-syllable-final-word backup) follows Drillock &amp; Ealy, <i>Tutorial for Learning the Church
        Tones — Common Chant</i> (OCA). The exact note-to-syllable distribution inside a cadence is the
        trainer's best reading; verify against the printed staves. Auto-syllabification of free text is
        heuristic — correct it with "edit syllables."
      </div>
    </div>
  );
}
