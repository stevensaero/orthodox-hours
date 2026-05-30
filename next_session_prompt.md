# Next Session Prompt — Tone Trainer v0.5.0 (Feature B)

## Project
Orthodox Hours Tool — `stevensaero/orthodox-hours` (GitHub, private)
**Hours tool version:** v0.6.0
**Tone Trainer version:** v0.4.0 (wired lexicon) → building v0.5.0 (Feature B)
**Key files:**
- `src/components/tone-trainer.jsx` — the trainer component
- `tone_trainer_notes.md` — canonical trainer notes (READ THIS)
- `SYLLABIFIER_SPEC.md` — full syllabifier/lexicon architecture + Feature B spec
- `tools/build_syllable_lexicon.mjs` — build-time lexicon generator
- `tools/lexicon-out/` + `public/lexicon/` — the generated lexicon data

## Read before starting
1. `SYLLABIFIER_SPEC.md` §7 — the Feature B spec in full
2. `tone_trainer_notes.md` — full project notes, backlog, and open questions
3. `project_notes.md` — companion tools section explains the two-tool architecture

## What was just done (v0.4.0)
The syllabification lexicon (1,151 CMU+TeX resolved words + 68 best-guess residue)
is now wired into the trainer. Fetched from `public/lexicon/` at mount (same
pattern as psalter/scripture). Lookup-first syllabification replaces the first-
syllable heuristic. A "show source" toggle shows ? for unconfirmed residue entries
and ~ for rule fallback. The preset (Meeting of the Lord) is hand-pointed so
source indicators don't apply there; they surface in the "your own text" path.

## What to build: Feature B (v0.5.0)

### Core concept
The "your own text" field becomes **encoding-aware**, and a side-by-side
**A/B comparison view** shows director truth vs. machine auto-accent.

### The encoding-aware field
The textarea should detect `[accent]` marks + `|` line-ends + `//`:
- If `[accent]` marks present → TRUTH mode: rebuild lines/rotation from markers,
  use marked syllables as accent truth (no auto-guessing for marked syllables)
- If no marks → AUTO mode: run the lexicon + heuristic as before
"point ▸" on an ingested sticheron populates this field with the block's encoded
`[accent]`/`|`/`//` text.

### The comparison harness
1. Parse encoded (truth) text → syllables with accent positions
2. Strip the marks, keep line positions → clean text
3. Re-encode the stripped text with the auto-accenter → machine version
4. Show truth vs. machine side by side, per syllable, per line
5. Disagreements highlighted; anchor-level agreement as the headline metric

### Scoring (both levels shown)
- **Anchor-level (headline):** same cadence anchor per line? (what matters for singing)
- **Syllable-level (detail):** which specific syllables differ?

### Sing toggle
Sing from truth (default) OR machine version, so a singer can hear both.

### JSON export
Per-session JSON with per-line, per-syllable detail: truth accents, machine
accents, syllabification used, anchor-match bool, unconfirmed flags. This is the
artifact brought back for analysis and improvement decisions. NOT a CSV.

### Scope
One sticheron at a time interactively. Document-scale comparison (all stichera
in an ingested docx) is the eventual goal but deferred until single-sticheron
version is proven.

### Version
- Trainer bumps to **v0.5.0** (minor — new capability)
- No hours-tool version bump (assembler unchanged)

## What comes after v0.5.0 (do not build yet)
- SATB mode — real four-part notes from tutorial PDF
- Tone 2+ propagation (only after B is proven on Tone 1)
- hours-tool Menaion-update mode (separate session, own spec)

## Pending director items
- Review of `tools/lexicon-out/name-review.md` — 68 residue words need stress
  confirmation (especially Theotokos, Kontakion, Troparion, Stichera, Katavasia).
  When corrections arrive: update `name-residue.json`, copy to `public/lexicon/`,
  commit. No component re-wiring needed.
- Open director questions: A1 (spoken stress vs. singing accent), A3 (mark every
  phrase or only ambiguous?), B1 (physical marking convention in hand-outs).

## Corpus expansion (when more docx files available)
Run `node tools/build_syllable_lexicon.mjs <unpacked-dir>` to accumulate.
Currently covers: Meeting of the Lord (2/2), Pentecost (5/31), Palm Sunday (4/5),
Holy Saturday (4/11). Holy Saturday hit zero new words — common vocab saturated.
After running, copy updated JSON files to `public/lexicon/` and commit both.

## Token note
GitHub token is a personal access token for `stevensaero/orthodox-hours`.
Bill provides it at the start of each session and rotates it after. Never
reuse a token from chat history — always ask for a fresh one.
