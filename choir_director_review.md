# Choir Director Review — open questions

This file collects places where the Tone Trainer's rendering reflects a **deliberate
implementation decision** that has **not yet been confirmed against a four-part score**
or by the choir director. Each entry states what the tool currently does and what needs
confirming, so a reviewer can check the published score (Drillock & Ealy Four-Part
Harmony tutorial; L'vov–Bakhmetev Obikhod) and tell us whether to change anything.

Status legend: **OPEN** = needs review · **CONFIRMED** = verified, no change ·
**CHANGED** = review led to a code change (note the commit).

---

## 1. Tone 1 Phrase B — tenor over a 3-note `do·re·ti` melisma (cadCount = 1)

**Status:** CONFIRMED / CHANGED (Jun 9 2026 — director rule applied; v0.15.0)

**Context.** When a Tone 1 Phrase B cadence resolves onto a *single syllable* carrying
all three cadence notes (cadCount = 1), the alto sings a 3-note melisma `do·re·ti` with
durations `[H, H, H]` (total **3H**). The tenor `cadMap` for Phrase B is constant
(`do→sol, re→sol, ti→sol`), so the tenor sits on **sol** throughout.

**Director's rule (received Jun 9 2026).** Read the tenor with two questions:
(1) does the pitch change? — if no, sustain; (2) does the syllable change? — if yes,
rearticulate even on the same pitch; if no, continue the sustain. Three same-pitch half
notes in a tenor part usually indicate three *syllables*, a deliberate rearticulation by
the arranger, or a *harmonic* change. **If neither the harmony nor the syllable changes,
a skilled Obikhod editor prefers a sustained note (or tied values) over three separate
half notes.**

**Resolution.** The `do·re·ti` melisma is **one syllable** (constant) with **constant
tenor pitch** (sol), so the tenor **sustains**. The harmony caveat does not apply here:
the tenor's position is fixed to sol by our `cadMap` logic (we mapped the part by logic,
not by harmony), so although the bass moves the harmony beneath it, there is no
articulation the tenor itself would make. We render it as a **dotted whole note**
(`W·` = 3H) — more accurate than tied whole + half, since there is no articulation to be
voiced on the half. Tied whole + half is the fallback if the dotted whole ever fails to
render in the chip/score layers (it does not — verified headless).

**Reproduce.** Still requires a Tone 1 Phrase B line whose cadence lands on a stressed
final syllable (typically a stressed final monosyllable) so all three cadence notes pile
onto one syllable as a melisma; lines with syllables trailing the accent distribute the
figure one-note-per-syllable instead.

---

## 2. Tone 1 Final — tenor `si` register on `ti→si`

**Status:** OPEN

**Context.** In the Tone 1 Final phrase the tenor `cadMap` moves `do→la, ti→si, la→mi`.
The `si` is the raised 6th (B♮ in D minor), a harmonic-minor approach to the `la` close.

**What needs confirming.** The source data shows a register disagreement for `si` between
the `OFF` semitone table (`OFF[si] = −2`) and the configured note name (`cfg.names[si] = "C#"`).
The two imply different registers for `si`. Needs a score check of where the tenor `si`
actually sits relative to the surrounding `la`/`mi` in the Final cadence, to confirm which
of the two is correct.

(Tenor in the Final phrase *moves* — it is never collapsed into a hold — so this is purely
a pitch-register question, not a duration/hold question.)

**Reference-score finding (Jun 9 2026).** The printed Obikhod reference for "Lord, I Call,
Tone 1" (Common Chant, arr. L'vov/Bakhmetev) shows a **cadential accidental (a sharp) on a
lower-staff note near the cadence** in its third system — almost certainly this `si`. Our
score renderer currently draws **no per-note accidental glyphs at all** (confirmed by headless
probe: notes carry zero Accidental modifiers; the key signature is the only accidental marker).
So if this cadential `si` is meant to carry a written accidental, **our output is missing it.**
Two things to confirm together: (1) the correct register/pitch of `si` (the `OFF` vs `cfg.names`
disagreement above), and (2) whether `si` should render with an explicit accidental glyph in the
score — and if so, wire `Accidental.applyAccidentals` (or an explicit accidental) for that note.
This is independent of the system-wrap work.
