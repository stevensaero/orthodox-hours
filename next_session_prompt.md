# Next Session Prompt — Tone Trainer v0.5.0 (Feature B)

## Project
Orthodox Hours Tool — `stevensaero/orthodox-hours` (GitHub, private)
**Hours tool version:** v0.6.0
**Tone Trainer version:** v0.4.0 (battle-tested) → building v0.5.0 (Feature B)
**Key files:**
- `src/components/tone-trainer.jsx` — the trainer component
- `tone_trainer_notes.md` — canonical trainer notes (READ THIS)
- `SYLLABIFIER_SPEC.md` — full architecture + Feature B spec (§7 is critical)
- `public/lexicon/` — syllable-table.json + name-residue.json (served at runtime)
- `tools/lexicon-out/` — source of truth for lexicon data (commit both when updated)

## Read before starting
1. `SYLLABIFIER_SPEC.md` §7 — the Feature B spec, including the bracket-parsing
   detail and the critical "current vs. intended behavior" distinction
2. `tone_trainer_notes.md` — full notes including the May 30 session summary
3. `project_notes.md` — companion tools section

## State of v0.4.0 (fully deployed and verified)
- Lexicon-driven syllabification fetched from `public/lexicon/` at mount
- "show source" toggle: ? = unconfirmed residue, ~ = rule fallback (suppressed
  on function words), no indicator for confirmed/truth sources
- paraToPointerLine fully rewritten: lexicon syllabification + vowel-nucleus
  underline mapping. Whole-word brackets use lexicon stressIdx; mid-word brackets
  (Re[ceive], up[on]) use first underlined vowel nucleus
- Non-underlined words in the docx path carry no accent (fixed)
- Punctuation phantom chips fixed in both wordFromDisplay and paraToPointerLine
- distribute() verified from OCA LIC sheet music: count < figure.length takes
  first N notes sequentially — voice=ti, of=do, my=re, prayer=do (4 half notes,
  no melisma). In moveable-do Obikhod absolute pitch is irrelevant; solfege
  relationships are fixed regardless of key

## CRITICAL distinction for Feature B
In v0.4.0, [accent] brackets are SILENTLY STRIPPED by the alpha-only regex —
the lexicon drives stress, not the bracket. This looks correct when they agree
but fails silently when the director's mark disagrees with the lexicon. Feature
B makes brackets authoritative over the lexicon.

## What to build: Feature B (v0.5.0)
Full spec in SYLLABIFIER_SPEC.md §7. Summary:

### Encoding-aware text field
- Detect `[accent]` marks + `|` line-ends + `//` in the textarea
- If marks present → TRUTH mode: parse brackets as accent authority,
  rebuild lines/rotation from `|`/`//` structure
- If no marks → AUTO mode: current lexicon+heuristic behavior unchanged
- "point ▸" on ingested sticheron populates this field with encoded text

### Bracket parsing (both cases occur in OCA materials)
- Whole-word `[Lord]`: entire word bracketed → lexicon stressIdx picks syllable
- Mid-word `Re[ceive]`, `up[on]`: bracket covers character span → vowel-nucleus
  mapping (first underlined nucleus = accented syllable)
- `[Hear] [me]` consecutive: both accented, anchor rule still applies (backs off
  final stressed monosyllable to [Hear])

### Comparison harness
1. Parse encoded text → truth accents (brackets authoritative)
2. Strip brackets, keep line positions → clean text
3. Auto-encode stripped text → machine version
4. Display side by side: anchor-level (headline) + syllable-level (detail)
5. Sing toggle: truth or machine
6. JSON export: per-line per-syllable detail (truth accents, machine accents,
   syllabification used, anchor-match bool, unconfirmed flags)

### Version: v0.5.0 (minor — new capability)
No hours-tool bump.

## Pending items (parallel, not blocking Feature B)
- Director review of `tools/lexicon-out/name-review.md` (68 residue words,
  especially Theotokos, Kontakion, Troparion, Stichera stress). When corrections
  arrive: update name-residue.json, copy to public/lexicon/, commit both.
- Corpus expansion: run generator on more services, copy outputs to public/lexicon/
- SATB mode (after B)
- Tone 2+ propagation (only after B proven on Tone 1)

## Token note
Bill provides the GitHub token at session start and rotates after. Never reuse
from history. Always ask fresh.
