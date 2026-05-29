# Tone Trainer — Notes

**Trainer version: v0.1.0** | Component: `src/components/tone-trainer.jsx`

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
3. Marked-text paste mode (read bold/underline/acute directly).
4. SATB mode using the real four-part page + recorded isolated-voice MP3s.
5. Define the hours-tool → trainer data contract.
6. Only then: propagate the proven method to Tone 2 (note: rotation differs per
   tone — Tone 2 uses A once then B C D rotating; Tones 5/6 use A B C; Tone 6 adds
   B′; Tone 8 uses A′ — so phrase structure must be per-tone data).
