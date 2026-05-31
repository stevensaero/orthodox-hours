# Tone Trainer — Notes

**Trainer version: v0.9.0** | Component: `src/components/tone-trainer.jsx`

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

