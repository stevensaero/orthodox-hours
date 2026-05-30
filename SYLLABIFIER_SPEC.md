# Syllabifier & Lexicon — Full Specification

*Tone Trainer sub-project · `src/components/tone-trainer.jsx`*
*Authored: May 2026 · Session: Sonnet 4.6 recovery session after Opus 4.8 crash*

This document captures the **complete design decisions** reached in the extended
session covering syllabification, the lexicon generator, and the auto-accenter
upgrade. It exists so a new session can reconstruct intent without re-litigating
the reasoning. Read alongside `tone_trainer_notes.md`.

---

## 1. Why this exists

The pointing engine's accuracy hangs on one thing: **the last internal accent of
each phrase**. That anchor drives the cadence. A wrong accent on a phrase-final
word makes the phrase sing wrong. The auto-accenter heuristic (stress first
syllable of polysyllabic words) is wrong on iambic and prefixed words (re-CEIVE,
di-VINE, sal-VA-tion) and knows nothing about Greek/Slavonic proper names.
This spec replaces that heuristic with a lookup-first system.

---

## 2. Architecture decision (final, after prototyping)

**Rejected: pure rule-based syllabification.** English syllable/stress isn't
rule-governable. Every rule that fixed one class broke two others. After multiple
iterations the residue stubbornly sat at ~15% wrong, and the failures were
unpredictable. Rules oscillate around ~85-90% and don't converge cleanly.

**Rejected: runtime CMU dictionary.** CMU Pronouncing Dictionary (~931 KB gzipped)
would make the trainer ~26× larger. Worse, CMU gives stress + phoneme count but
NOT letter-level syllable boundaries — it can't directly answer "where does Zion
split?" The weight cost buys an incomplete answer.

**Adopted: CMU as build-time oracle + TeX hyphenation + small verified lexicon.**

- CMU is used **at build time only** (in `tools/build_syllable_lexicon.mjs`) as an
  authoritative source of syllable COUNT and primary STRESS for ~94% of liturgical
  English words. It never ships to the browser.
- TeX hyphenation patterns (Knuth-Liang) place BOUNDARIES, reconciled to CMU's
  count where they disagree.
- A small hand-curated **lexicon** covers the ~6% not in CMU (proper names,
  liturgical-technical terms, archaic forms) with human-verified entries.
- Rules are a **last-ditch fallback only** for words genuinely off-table and
  off-lexicon (rare; flagged by the comparison harness when they cause errors).

**Why this works for liturgical text specifically:** the corpus is closed and
repetitive. Four varied services (Meeting of the Lord, Pentecost, Palm Sunday,
Holy Saturday) saturated the common vocabulary — Holy Saturday hit **zero new
words** despite 619 distinct words. The lexicon converges to a stable small set.

---

## 3. The generator (`tools/build_syllable_lexicon.mjs`)

Build-time Node script. **Not shipped.** Lives in `tools/` alongside
`parse_scripture.py`. Uses `devDependencies`: `hypher`, `hyphenation.en-us`,
`cmu-pronouncing-dictionary`, `@xmldom/xmldom`.

**Usage:**
```
node tools/build_syllable_lexicon.mjs <unpacked-dir|document.xml> [...]
```

**Accumulates across runs** — each invocation builds on the last, skipping
already-known words. This is the "build on the last" requirement: run it once per
new service docx, only new words are processed.

**Output (all in `tools/lexicon-out/`, committed to git as the accumulation record):**
- `syllable-table.json` — `{word: {word, sylls, stressIdx, src, lowConfidence?}}`
  where src ∈ {tex, reconciled, count-only, archaic}. `lowConfidence:true` means
  count and stress are known but boundary placement is uncertain.
- `name-residue.json` — not-in-CMU words: `{word, sylls, stressIdx, confirmed:false}`.
  Best-guess stress and boundaries. `confirmed:false` until human review.
- `name-review.md` — human-readable bulk-review sheet (see §5).

**Filtering:** words of length ≤ 3 with no vowels are dropped (abbreviations like
Lk, Ps, nd). Heading concatenations like "ExapostilarionTone" are split by a
regex before tokenization.

**Current state:** run on 4 services, 1,151 table entries, 68 residue entries.
Holy Saturday hit zero new words — common vocabulary is saturated.

---

## 4. Lexicon data format

### syllable-table.json
```json
{
  "salvation": { "word": "salvation", "sylls": ["sal","va","tion"], "stressIdx": 1, "src": "tex" },
  "rejoicing": { "word": "rejoicing", "sylls": ["re","joic","ing"], "stressIdx": 1, "src": "tex" },
  "worship":   { "word": "worship",   "sylls": ["wor","ship"],      "stressIdx": 0, "src": "tex" }
}
```
- `stressIdx` is 0-based index into `sylls`.
- `src`: "tex" = TeX placed boundaries, CMU confirmed count; "reconciled" = CMU
  count used to force TeX result; "count-only" = count+stress known, boundary
  uncertain; "archaic" = -est/-eth rule applied.

### name-residue.json
```json
{
  "theotokos": { "word": "Theotokos", "sylls": ["The","o","to","kos"], "stressIdx": 2, "confirmed": false }
}
```
- `confirmed: false` until director review. Entries are used by the trainer
  regardless — `confirmed` is a trust flag, not a gate.
- When corrections arrive, update `sylls`, `stressIdx`, set `confirmed: true`.

### Archaic -est/-eth rule (applied in generator AND trainer)
Words ending in consonant + `est`/`eth` (lovest, madest, proceedest, goeth) get
their suffix split as its own syllable: lov·est, mad·est, pro·ceed·est, go·eth.
This is a rule, not a lexicon entry — the whole class is handled by one regex.

---

## 5. Director review process

The generator produces `tools/lexicon-out/name-review.md`, a markdown table with
one row per residue word showing:
- Word
- Best-guess syllable split
- Stress number (1-based)
- The stressed syllable in CAPS
- An "OK?" column for the reviewer

**Both syllable boundaries AND stress need checking.** The liturgical-technical
terms (Troparion, Kontakion, Stichera, Theotokos, Katavasia, etc.) are the highest
priority — known correct forms exist and the boundaries are often wrong because TeX
under-splits words it doesn't recognize. Greek/Slavonic proper names are where
stress is most likely wrong.

**Known specific corrections needed (from session analysis):**
- Theotokos: should be the·o·TO·kos (stress 3), not THE·o·to·kos
- Kontakion: kon·TA·ki·on (stress 2)
- Troparion: tro·PA·ri·on (stress 2)
- Stichera: STI·khe·ra (stress 1) — boundary also wrong (Stic·he·ra → Sti·khe·ra)
- Katavasia: ka·ta·VA·si·a (stress 3)
- Exapostilarion: ex·a·pos·ti·LA·ri·on (stress 5)
- Theotokos boundary also likely under-split by TeX (4 syllables, not 2)

**Workflow:** review sheet → director confirms/corrects → corrections applied to
`name-residue.json` (update sylls, stressIdx, set confirmed:true) → commit →
trainer auto-improves on next build.

---

## 6. Wiring into the trainer (v0.4.0 — PENDING)

### How the table gets into the browser

**Decision: fetch from `public/` at runtime, matching the Psalter and Scripture
tool pattern.** Both the Psalter (`public/psalter/`) and Scripture (`public/bible/`)
serve their data as JSON files fetched at runtime when the component needs them.
The lexicon follows the same pattern for consistency.

**Deployment:** copy `tools/lexicon-out/syllable-table.json` and
`tools/lexicon-out/name-residue.json` to `public/lexicon/` as part of the build
process (or manually when the generator is re-run). These files are served
statically from GitHub Pages alongside the other public data assets.

**In the component:** fetch both files when the pointing view is first used
(lazy, not on mount), merge into a single `LEXICON` lookup, show a brief loading
state. A simple `useEffect` + `useState` pattern matching how scripture.jsx
handles its data loading.

```javascript
const [lexicon, setLexicon] = useState(null);

useEffect(() => {
  Promise.all([
    fetch('/orthodox-hours/lexicon/syllable-table.json').then(r => r.json()),
    fetch('/orthodox-hours/lexicon/name-residue.json').then(r => r.json()),
  ]).then(([table, residue]) => {
    setLexicon({ ...table, ...residue }); // residue entries override on key collision
  });
}, []);
```

Lookup is by `word.toLowerCase()` against the merged object.

**Why this is better than bundled import:** consistent with the established pattern
in the tool, keeps the component chunk clean, and means lexicon files can be
updated (new services run through generator, director corrections applied) without
touching component code or triggering a Vite rebuild of the component itself.
The lexicon files are data, not code — they belong in `public/` with the other
data assets.

### Replacing syllabify() and guessAccent()

Current functions are replaced with a lookup-first approach:

```javascript
function lookupWord(word) {
  const key = word.toLowerCase().replace(/[^a-z]/g, '');
  return LEXICON[key] || null;
}

function syllabifyWithStress(word) {
  const entry = lookupWord(word);
  if (entry) return { sylls: entry.sylls, stressIdx: entry.stressIdx,
                      confirmed: entry.confirmed !== false,  // true if from table or confirmed residue
                      src: entry.src || 'residue' };
  // archaic -est/-eth rule
  if (/[^aeiouy](est|eth)$/i.test(word)) {
    const stem = word.slice(0, -3), suf = word.slice(-3);
    return { sylls: [...ruleSyll(stem), suf], stressIdx: 0, confirmed: false, src: 'archaic-rule' };
  }
  // rule fallback for off-table words
  const sylls = ruleSyll(word);
  return { sylls, stressIdx: guessStressHeuristic(sylls, word), confirmed: false, src: 'rule' };
}
```

The existing `syllabify()` / `guessAccent()` functions remain as the rule fallback
(`ruleSyll` / `guessStressHeuristic`) but are no longer the primary path.

### Unconfirmed indicator with toggle

**Decision: silent by default, toggle to reveal source.**

A small toggle in the pointing controls area ("show accent source") when ON adds
a small indicator under each syllable in the pointing view showing its source:
- No indicator / clean = table (CMU-confirmed)
- `?` marker = residue (unconfirmed best-guess)
- `~` marker = rule fallback (off-table entirely)

This lets a singer toggle on when something sounds wrong to immediately see
whether the culprit is an unconfirmed word, then toggle off for clean reading.
Default is OFF — no visual noise during normal practice.

---

## 7. Feature B — Encoding-aware text field + A/B comparison harness (NEXT MAJOR)

*(Spec from session discussion, documented here for recovery purposes.)*

**What it is:** the "your own text" input becomes encoding-aware, and adds a
side-by-side comparison view of director truth vs. machine auto-accent.

### The encoding-aware field

Accepts text containing `[accent]` marks + `|` line-ends + `//`:
- If `[accent]` marks are present → treat as TRUTH, rebuild lines/rotation from
  markers, no auto-guessing for marked syllables
- If no marks → run auto-accent draft as before

"point ▸" on an ingested sticheron populates this field with the block's encoded
text (`[accent]` / `|` / `//`), making it the single channel through which both
ingested and hand-typed text flow.

### The comparison harness

1. **Parse** the encoded (truth) text into syllables with accent positions
2. **Strip** the marks while preserving line positions → clean text
3. **Re-encode** the stripped text using the auto-accenter → machine version
4. **Compare** truth vs. machine, per syllable, per line
5. **Display** side by side: director vs. machine, with disagreements highlighted

**Two levels of comparison (both shown):**
- **Anchor-level (headline):** does the machine pick the same cadence anchor per
  line? This is what matters for singing — two encodings that disagree on an
  interior syllable but agree on the anchor sing identically.
- **Syllable-level (detail):** which specific syllables disagree? Feeds the
  improvement loop.

**Sing toggle:** truth or machine version, so you can hear what the wrong accent
sounds like alongside the correct one. Pedagogically useful.

**JSON export:** per-comparison JSON (one per session or per sticheron) with
per-line, per-syllable detail: truth accents, machine accents, syllabification
used, anchor-match bool, unconfirmed flags. This is the artifact brought back to
a session for analysis and improvement decisions. NOT a CSV — JSON is richer for
pattern analysis. The on-screen diff is the visual metric; the JSON is for the
improvement loop.

**Scope:** one sticheron at a time interactively. Document-scale comparison
(all stichera in an ingested docx) is the eventual goal — it produces the bulk
data needed to measure improvement over time and identify systematic heuristic
failures.

**Version:** v0.4.0 is the lexicon wiring. B is v0.5.0 (new capability).

---

## 8. Pending work priority order

1. **Wire lexicon into trainer (v0.4.0)** — bundled import, lookup-first
   syllabify/accent, unconfirmed toggle. Use unconfirmed entries now; director
   corrections improve accuracy later without re-wiring. ← NEXT SESSION
2. **Director review of name-review.md** — corrections folded into name-residue.json,
   `confirmed:true` set, committed. Can happen in parallel with or after #1.
3. **Feature B: encoding-aware field + A/B comparison harness (v0.5.0)**
4. **SATB mode** — real S/A/T/B notes from tutorial PDF four-part page +
   recorded OCA isolated-part MP3s as audio reference. SATB preview mockup
   approved; wiring real note data is the build step.
5. **Tone 2+ propagation** — only after B is proven on Tone 1. Each tone has
   different phrase rotation (per-tone data, not a global rule).
6. **hours-tool Menaion-update mode** — paste `[accent]`-encoded verses from
   converter into Menaion data; replaces St. Sergius text with OCA text + accents.
   Separate session, own spec.

---

## 9. Open questions for the choir director

(From `tone_trainer_notes.md` — still unresolved)

- **A1:** does a director's accent mark mean *spoken word-stress* or a *singing
  accent* (which can differ)? Empirical evidence from docx analysis suggests
  spoken stress, but not confirmed.
- **A3:** accent marked in every phrase, or only ambiguous ones?
- **B1:** physical marking convention in parish hand-outs (bold / underline / etc).
  Empirically confirmed as underline for OCA-distributed texts; unclear for
  hand-marked or choir-director-generated materials.

---

## 10. Corpus expansion

Run `tools/build_syllable_lexicon.mjs` on additional services to grow the table.
Each new service adds diminishing residue (Holy Saturday = 0 new words).
Recommended corpus: one service from each of the 12 Great Feasts, Pascha,
each week of Lent, each week of the Pentecostarion. Currently have: Meeting of
the Lord (2/2), Pentecost (5/31), Palm Sunday (4/5), Holy Saturday (4/11).
Two additional files were processed under Opus 4.8 before a session crash;
those files should be re-run when available.

Generator command for a new file (from repo root, after unpacking the docx):
```
python3 /path/to/unpack_skill.py file.docx unpacked_dir/
node tools/build_syllable_lexicon.mjs unpacked_dir/
```
Commit the updated `tools/lexicon-out/` after each accumulation run.

---

*This spec supersedes the scattered discussion in the session chat. The canonical
living reference is `tone_trainer_notes.md`; this spec captures the reasoning and
decisions that led to the current architecture for recovery and review purposes.*
