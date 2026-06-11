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

**Status:** CONFIRMED / CHANGED (Jun 11 2026 — director read the score; audio corrected; v0.22.2)

**Resolution (Jun 11 2026).** The director read the four-part score: the tenor cadence note
`si` sits on **C#4** (C-line + sharp accidental) — i.e. **raised sol** (tenor sol = C4 → C#4),
the raised 7th / leading tone of D minor, a half-step **below** the tenor's `la` (D4). The
tenor descends **D4 → C#4 → A3**. (Note on mode: the page is F-major key signature, but Tone 1
closes on `la` = D, so the operative mode is **D minor**, its relative minor — hence the
harmonic-minor leading-tone color. The old comment's "raised 6th / B♮" label was wrong; B♮
is the raised 6th, whereas this note is the raised 7th, C#.)

- **Score: already correct.** The renderer spells `si` from `cfg.names.si` (= C#) at the Final's
  octave lift → C#4. No change was needed; output is unchanged.
- **Audio: corrected.** `OFF[si]` was `−2`, which sounded **Eb4** (a half-step *above* la — wrong
  direction), and a `−100¢` SATB "detune" hack had been dragging it down toward D to stop beating.
  Changed `OFF[si]` to **−4** so the tenor sounds **C#4**, and removed the detune (unnecessary at
  the correct pitch, and it would otherwise corrupt C#4 down to C4). Verified: D4 → C#4 → A3.
- **Blast radius:** `si` is used only in the Tone 1 Final tenor; nothing else is affected.

**Accidental glyphs — RESOLVED (Jun 11 2026, v0.22.3).** Per-note accidentals are now drawn under a
moveable-do rule: a written ♯/♭/♮ appears **only** on a chromatic-alteration degree (raised
di/ri/fi/si/li, lowered ra/me/se/le/te); diatonic degrees are spelled by the key signature and carry
no glyph. `mkNote` adds an explicit `Accidental` (glyph read from the note's spelling — si=C#→♯,
di=En→♮) for those degrees only; we deliberately do **not** use `Accidental.applyAccidentals` (it is
pitch-rule driven and would emit courtesy naturals / cancellations the convention doesn't want).
Verified headless: each chromatic note adds exactly one accidental glyph, diatonic notes add none,
across Eb/F/G. So the Tone 1 Final tenor `si` now shows its ♯, and Tone 2's `di` shows its accidental.

