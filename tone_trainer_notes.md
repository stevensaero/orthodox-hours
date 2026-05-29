# Tone Trainer — Notes

**Trainer version: v0.3.1** | Component: `src/components/tone-trainer.jsx`

*Independent version line, decoupled from the Orthodox Hours Tool version. This
sub-project iterates on its own cadence; its churn does not bump the hours-tool
version. The hours-tool `RELEASE_NOTES` records only the integration milestones
(e.g. the v0.6.0 commit that added this component and its footer link).*

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

**Status:** generator built and run on 2/2 + Pentecost (892 table entries, 51 residue
awaiting verification). Residue stress is best-guess/unconfirmed until the director
review pass (a future session).

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

1. Verify the corrected anchor rule against director-supplied marked samples.
2. Decide auto-accent philosophy after A1 is answered (dictionary-driven vs.
   marked-text-primary).
3. ~~Marked-text paste mode (read bold/underline/acute directly).~~ **Done in
   v0.2.0** via docx ingest (reads underline directly from the OCA `.docx`).
   Possible follow-on: also accept paste of already-encoded `[accent]`/`*accent*`
   text, and read OCA-supplied accents into a Tone 1 verse for direct practice.
4. SATB mode using the real four-part page + recorded isolated-voice MP3s.
5. Define the hours-tool → trainer data contract (format now drafted: see the
   converter contract above).
5b. **Encoding-aware "your own text" field + A/B comparison harness (next major).**
   Make the pointer's text input understand `[accent]` + `|` + `//`: if marks are
   present, trust them as truth and rebuild lines/rotation from the markers (no
   guessing); if absent, run the auto-draft. "point ▸" would populate this field
   with the encoded sticheron. The deeper purpose (Bill's intent): use it as a
   **comparison harness** — take the director's `[accent]` encoding as ground
   truth, strip the marks while keeping line positions, run the fallback
   auto-encoder over the stripped text, and show **director vs. machine accents
   side by side, line by line**. This (a) lets us vet pre-encoded texts from any
   source, and (b) turns every director-marked docx into a labeled test case that
   measures auto-accent accuracy empirically — telling us where the heuristic
   fails and whether a pronouncing dictionary is worth it. Verification to nail:
   an ingested block pushed through the field must re-parse to the identical
   pointing as the direct block→pointer path.
6. Only then: propagate the proven method to Tone 2 (note: rotation differs per
   tone — Tone 2 uses A once then B C D rotating; Tones 5/6 use A B C; Tone 6 adds
   B′; Tone 8 uses A′ — so phrase structure must be per-tone data).
