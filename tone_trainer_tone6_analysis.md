# Tone 6 Obikhod Common Chant — Findings & Build Record (RESEARCH — NOT YET IMPLEMENTED)

*Tone Trainer sub-project · `src/components/tone-trainer.jsx`*
*Compiled: July 18 2026, single research session — logic only, per Bill's
scoping. No code has been written or changed. Implementation follows Bill's
review of this document.*

This document is a **look-back record and forward guide**, in the same spirit
as the Tone 1–5 analysis documents. Per the prime directive, **no pitch,
duration, or rotation logic is ported from any prior tone without its own
independent verification for Tone 6.**

Voice being mapped first: **ALTO** (melody), consistent with Tones 1–5.

---

## 0. METHOD — READ THIS FIRST (this session differs from every prior tone)

Every prior tone's score data came from **Bill's direct sight-reading**,
because Claude's own PDF reads were unreliable for pitch. This session was
explicitly framed as a test of whether the current model can read the scores
itself. The method used, and its verification, so the results can be audited:

1. **Raw PDFs on local disk.** The tutorial PDF and all five `t6-*-tt.pdf`
   score files were transferred byte-exact from Drive (sizes verified to the
   byte against Drive metadata, render + text checks passed) and rasterized
   at 150 dpi.
2. **Pitch: pixel measurement, not eyeballing.** A measurement script locates
   the five staff lines of each treble staff, then finds every chord and
   computes the **bottom notehead's vertical center against the staff-line
   grid** (alto is always the lower voice of the S/A staff). Output is a
   staff-position integer per chord, mapped to solfège via the confirmed
   reference (§1.2). Eyeballing was only used for layout/lyric alignment and
   slur/dot spotting; every pitch claim below is pixel-measured.
3. **Durations from the PDF text layer.** These engravings carry the note
   glyphs (œ=Q, ˙=H, ˙−−/˙.=H·, ϖ=W) in the extractable text layer, line by
   line, which validated 100% against visual zooms wherever checked. Dots and
   slurs were additionally confirmed by zoomed visual reads at every
   structurally interesting spot.
4. **Validation before use.** The pipeline was validated blind against the
   tutorial's own worked sticheron (p. 50), whose content was already known
   from the labeled schematic pages: **16/16 alto pitches correct** across
   Phrases A, B, C and the cadences, including the si accidentals and the
   compressed slurs. Only then was it run on the five OCA score files.
5. **Known artifact classes** (excluded systematically): sharp glyphs adjacent
   to si noteheads register as spurious narrow events; barlines and clefs
   produce junk events at system edges; the dot detector has false positives
   near stems, so **all dot/H· claims were taken from the text-layer glyphs
   (˙−−), not from pixels.**
6. **Reciting-run abbreviation discovered:** the OCA `tt` engravings print a
   chord only on the **first and last syllable of each reciting run** (text
   strung beneath); every cadence syllable gets its own chord. The tutorial's
   own examples follow the same convention. Syllable→chord alignment below
   accounts for this.

**Corpus read this session (all lines, all files):** LIC psalm verses
(11 lines), Sunday LIC stichera 1–7 (33 lines), LIC Dogmatikon (8 lines),
Aposticha stichera 1–4 (25 lines), Aposticha Theotokion (7 lines) — **84
lines** plus the tutorial's schematics, snippets, and worked example. The
full line-by-line readings are in §8 (the review appendix).

---

## Status at time of writing

| Item | Status |
|---|---|
| Rotation incl. B′ trigger | ✅ Confirmed (tutorial verbatim + every corpus sticheron, incl. two B′ instances at 6-line and two at 3-line stichera) |
| A | ✅ Model confirmed (recite la; anchor si on last internal accent; si fills; la close) + duration templates; anchor-block realization variance open |
| B | ✅ Model confirmed (recite ti; anchor ti; la zone ≤2 sylls; ti-extension beyond; ti close) incl. 2-syll compression slur |
| B′ | ✅ Model confirmed (B with close continuing down to si) incl. compression |
| C | ✅ Model confirmed (recite do; anchor ti H·/H; ti fills; fixed la·si tail) incl. compression |
| Final | ✅ Model confirmed (recite la; anchor la; fixed 2-syll si zone before close; la-fills before it; la W close) incl. compression |
| Bass/Tenor/Soprano harmony | ✅ Chord tables read from the tutorial's fully-labeled harmony page (p. 49, E minor and G minor printings identical in solfège); registers partially pixel-confirmed; **needs Bill's confirmation before encoding** |
| Reference pitch / notation anchor | ✅ E minor, **la = E4 IS the notated tonic** — `do` is NOT the tonic (first melody tone where this is true since Tone 3's dominant-do); dedicated semitone/notation tables required |
| OCA docx corpus / MP3s | ❌ not gathered (same status Tone 5 shipped with) |

---

## 1. Source materials

### 1.1 Files

**Tutorial:** `Tutorial-Obikhod-Tone6-Explanation.pdf` (Drive
`1u4ykkb4wJBQVfMeJH8tSg-cXPHfLib2x`, 350487 bytes, 8 pp). Pages 45–48:
phrase-by-phrase prose + labeled schematics + snippets + per-phrase examples
(Nativity of the Theotokos, 4th sticheron at LIC). Page 49: "Melodic Phrases
in Four-Part Harmony" with **every voice labeled in solfège** (E minor,
la=E). Page 50: the full worked sticheron in SATB ("Today the gates of
barrenness…"). Pages 51–52: the identical harmony page and worked sticheron
transposed to G minor (la=G) — same solfège content, not separately used.

**Scores (Drive `Tone6/` folder, also placed in the claude.ai project):**

| File | Content | Lines |
|---|---|---|
| `t6-lic-obikhod-tt.pdf` | LIC psalm-verse framing ("Lord, I call…") | 11 |
| `t6-lic-stichera-obikhod-tt.pdf` | Sunday Octoechos LIC stichera 1–7 | 33 |
| `t6-lic-dogmatikon-obikhod-tt.pdf` | Dogmatikon "Who will not bless thee…" | 8 |
| `t6-aposticha-obikhod-tt.pdf` | Aposticha stichera 1–4 (+ verse rubrics) | 25 |
| `t6-aposticha-theotokion-obikhod-tt.pdf` | "My Maker and Redeemer…" | 7 |

All six are © 2021 OCA engravings, arr. from L'vov/Bakhmetev, one-sharp key,
same convention family as the tutorial's E-minor printing.

### 1.2 Key and reference pitch — la IS the notated tonic

Key signature: **one sharp** (G major / E minor family). The tutorial states
the harmony page explicitly: **"E minor: la = E."** Confirmed by measurement:
the alto reciting position for Phrase A sits on the treble staff's bottom
line = **E4**.

| Degree | Pitch | Staff position |
|---|---|---|
| sol | D4 | space below bottom line |
| **si** | **D#4** | space below bottom line, printed ♯ | 
| **la** | **E4 — the notated TONIC (E minor)** | bottom line |
| ti | F#4 | 1st space |
| do | G4 | 2nd line |
| re | A4 | 2nd space |
| mi | B4 | middle line |

**§27.2 warning applies in full force:** `do` is NOT the tonic for Tone 6 —
the tonal center is `la` (E), and `do`=G4 is the relative-major third. The
shared `OFF`/`ALTO_ANCHOR_OCT` tables assume do-is-tonic-F and would render
everything wrong, exactly as they did for Tone 3. Tone 6 needs its own
dedicated, non-transposing tables (a `TONE6_SEMI` anchored to la=E4, plus
`TONE6_*_PITCH` notation tables), built the way `TONE3_SEMI` was built —
from the confirmed notation, before any harmony work.

**`si` (raised sol, D#4) enters the ALTO MELODY for the first time in any
tone** — in Tones 1/4/5 it was a tenor-only leading tone. It is the signature
sound of Tone 6: every phrase except B touches it. The pitch already exists
in the codebase (`OFF`-class tables, chip scale); melody usage will need its
own height/notation verification at implementation.

---

## 2. Phrase rotation — CONFIRMED, including the B′ rule

Tutorial verbatim (p. 45):

> "The sticheron melody for Tone 6 consists of three melodic phrases (A, B,
> C,) which are sung in rotation up to the last line of the sticheron, and a
> final phrase. If the sticheron consists of more than two phrases, and if
> the next to last line of the sticheron follows Phrase A, then Phrase B′
> (with an adjusted cadence) is sung. If a sticheron is divided into 6
> textual phrases, the musical lines will consist of A, B, C, A, B′ and
> Final Phrase."

**Corpus confirmation — every sticheron read:**

| Sticheron | Lines | Sequence observed |
|---|---|---|
| LIC unit 1 ("Lord I call… Hear me, O Lord!") | 6 | A B C A **B′** Final |
| LIC unit 2 ("Let my prayer arise…") | 5 | A B C A Final |
| LIC sticheron 1 (5 ln), sticheron 3 (7 ln), stichera 4/5/6 + aposticha 1/2/4 (4 ln each), dogmatikon (8 ln), aposticha 3 (13 ln), theotokion (7 ln) | var. | pure A·B·C rotation + Final, no B′ |
| LIC sticheron 2 | 6 | A B C A **B′** Final |
| LIC sticheron 7 | 3 | A **B′** Final |

**The trigger, restated structurally:** "next-to-last line follows Phrase A"
is equivalent to "the penultimate line lands on the rotation's B slot" (B
always and only follows A). So:

```javascript
6: (i, total) =>
  i === total - 1 ? "Final"
  : (i === total - 2 && i % 3 === 1) ? "Bp"   // B′
  : ["A", "B", "C"][i % 3],
```

Fires for total ≡ 0 (mod 3), total ≥ 3 — matches the tutorial's 6-line
example and all four corpus B′ instances; produces plain B/C/A penultimates
everywhere else, as observed. Plain B never occurs penultimate in the corpus;
B′ never occurs anywhere else.

---

## 3. Phrase definitions

Notation: `word(pitch/dur)`; `|` marks cadence start (session notation);
"recite ×n" = syllables on the reciting pitch at Q each (score prints only
the first and last chord of each run, §0.6).

### 3.0 The cross-phrase architecture (read this before the phrases)

Tone 6's five phrases share one skeleton, confirmed independently for each
phrase below but stated once here:

1. **Reciting tone** (Q per syllable; no intonation anywhere in Tone 6 — no
   phrase has one; every phrase "begins directly with the reciting tone").
2. **Anchor on the last internal accent** (standard search: STOP filter +
   monosyllabic backup — verified across all 84 lines with the exceptions
   logged in §4.2).
3. **A fixed melodic TAIL occupying the last syllables before the close**,
   phrase-specific:
   - A: none (fills stay on the anchor pitch si; close la)
   - B: **la zone, max 2 syllables**, close ti
   - B′: **la zone, max 2 syllables**, close si
   - C: **fixed la(Q) · si(close)** pair
   - Final: **fixed si·si zone, max 2 syllables**, close la
4. **Elastic region between anchor and tail, on the ANCHOR's own pitch**
   (A: si·si…; B/B′: ti…; C: ti…; Final: la…) absorbing extra syllables at Q.
5. **Too few syllables → the tail compresses leftward onto the anchor as a
   slur** (2-note slur in B/B′/Final; ti+la slur in C), never dropping a
   structural pitch.
6. **Rhythmic balancing in whole-note spans:** anchor + its elastic block
   sums to 4Q in almost every instance, realized variably (H+H, H·+Q,
   H+Q+Q, …). See §4.3 — including the two 6Q B-cases and the one genuinely
   unbalanced tutorial example.

This is the same "fixed tail + anchor-pitch elastic + compression"
organization Tone 5's C and Final showed, but here it governs the whole
tone. Per the prime directive it was verified phrase by phrase; the summary
is a convenience, not an inference.

### 3.1 Phrase A — confirmed

**Tutorial verbatim:** "Phrase A includes a reciting tone, on la, and a
cadence which begins on the last internal accent, a half-tone lower than the
reciting pitch. The cadence is used to sing two or more syllables."

**Structure:**
- `recite: "la"`, `inton: false`, `prep: null`
- Cadence: anchor **si** (the half-tone below la) on the last internal
  accent; all intermediate syllables stay on **si**; final syllable closes
  on **la**. `cad: ["si", "la"]` with si-fills, in PH_DEFS terms — but a
  dedicated handler is required (see §6).

**Duration templates (all corpus-confirmed):**

| Cadence sylls | Shape | Instances |
|---|---|---|
| 2 | si(H) · la(H \| H· \| W) | tutorial schematic + "o-pened,", "Sav-ior," (×2), "Vir-gin?", "car-nate.", "cre-a-tion?", "prom-ise!", "ta-tions!", "ior," |
| 3 | si(H)·si(H) · la — or — si(H·)·si(Q) · la | see the variance note below |
| 4 | si(H)·si(Q)·si(Q) · la | "the form of a man", "voice of my prayer", "Moth-er of God.", "granted joy to the world:", "glo-ry O Christ.", "depths of the sea?", "Mo-ther of God!" |
| 5 | si(H)·si(Q)·si(Q)·si(Q) · la | tutorial schematic row 2 (no 5-syll corpus instance yet) |

**The 3-syllable anchor-block variance — OPEN, needs Bill's ruling.** Both
realizations sum the anchor block to 4Q, but the split differs:

| Instance | Shape |
|---|---|
| "O Christ our God" (tutorial snippet) | si(H)·si(H)·la(H) |
| "…hell, **O Christ,**" (LIC stich. 1) | si(H)·si(H)·la(H·) |
| "be an eve-ning **sac-ri-fice!**//" (LIC) | si(H)·si(H)·la(H·) |
| "bless the Lord" (LIC stich. 5) | si(H)·si(H)·la(H·) |
| "Glory to Thy **might, O Lord,**" (LIC stich. 6) | si(H)·si(H)·la(H·) |
| "Destroying the **gates of hell,**" (apost. 2) | si(H)·si(H)·la(H) |
| "as **Thou didst will,**" (apost. 4) | si(H)·si(H)·la(H) |
| "Let my **prayer a-rise**" (LIC) | si(**H·**)·si(**Q**)·la(H) |
| "bonds of **hell, O Lord.**" (LIC stich. 7) | si(**H·**)·si(**Q**)·la(W) |
| "to **Par-a-dise,**" (apost. 3) | si(**H·**)·si(**Q**)·la(H) |
| "Re-deem-er, **Christ the Lord,**" (theotokion) | si(**H·**)·si(**Q**)·la(H·) |

H+H dominates 7:4, but "hell, O Christ," (H+H) vs "hell, O Lord." (H·+Q) is
a near-minimal pair — same words but the close — so this is not
text-structural in any obvious way. No correlation found with word
boundaries, punctuation, or fill-word identity. **Proposed encoder default:
si(H)·si(H) (majority + tutorial); H·+Q logged as a legitimate variant.**

**Close duration:** H and H· both common mid-sticheron (no clean driver —
see §4.4); W at "death.//", "sea?", "God!", "Lord." (finality/exclamation
tendency, not a rule).

**Worked examples (selection; full corpus in §8):**

| Text | Shape |
|---|---|
| "Today the gates of barrenness are **o**-pened," (tutorial) | recite la ×8 \| o(si/H) pened,(la/H) |
| "Pos-sess-ing victory o-ver **hell**, O Christ," | recite la ×8 \| hell,(si/H) O(si/H) Christ,(la/H·) |
| "raising with Thyself those who sat in the **shades** of death.//" | recite la ×10 \| shades(si/H) of(si/H) death.(la/W) |
| "revealing to the world the **Moth**-er of God." (tutorial p50) | recite la ×6 \| Moth(si/H) er(si/Q) of(si/Q) God.(la/H·) |
| "Re-ceive the **voice** of my prayer," (LIC) | recite la ×3 \| voice(si/H) of(si/Q) my(si/Q) prayer,(la/H) |

### 3.2 Phrase B — confirmed

**Tutorial verbatim:** "Phrase B consists of a reciting tone on ti, and a
cadence. The cadence begins on the last internal accent, sung on the same
pitch as the reciting tone (ti), followed by a descending second (la), and
then a return to ti for the final syllable of the phrase."

**Structure:**
- `recite: "ti"`, `inton: false`, `prep: null`
- Anchor **ti** on the last internal accent (anchor-on-reciting-pitch — the
  Tone 1-B/4-B/5-B pattern, audible only as the Q→H shift).
- **la zone:** the following unaccented syllables sit on **la** — but at
  most TWO of them. One la-syllable → la(H); two → la(Q)·la(Q).
- **ti-extension:** with 3+ intermediate syllables, the extras (earliest
  ones) stay on **ti(Q)** after the anchor, and the anchor stretches to
  **H·**.
- Close **ti** on the final syllable.

**Duration templates:**

| Cadence sylls | Shape | Instances |
|---|---|---|
| 2 (compressed) | ti(H)+la(H) 2-note slur on anchor · ti(H·\|W) | "in___cense,", "dwell___est!", "Mas___ter!", "rec___tion." (×2), "pos___tles:", "Vir___gin."(W) |
| 3 | ti(H) · la(H) · ti(H\|H·\|W) | "Ja-cob saw"(tut), "God comes forth."(H·), "chains of death,"(H), "death, O Christ,"(H), "scend to death?"(W), "ce-les-tial Joy!"(W), "child-bear-ing?"(H·), "heav-en sing!"(H·) |
| 4 | ti(H) · la(Q)·la(Q) · ti(H\|H·\|W) | "Heav-en-ly Hosts"(tut), "Man for our sake,"(H), "placed in a tomb."(H·), "wail-ing and tears!"(W), "prince of death,"(W — la-zone as H see note) |
| 5+ | ti(**H·**) · ti(Q)… · la(Q)·la(Q) · ti(H\|W) | "**free** a-mong the dead,"(H), "**ris**-en as He said!"(W) |

Note: "prince of death," realized la-zone as a single la(H) with recite
carrying more syllables — 3-syllable cadence in practice.

**The two 5-syllable instances are the key new B finding:** anchor H·, first
intermediate stays on ti(Q), then the two-syllable la zone, then close. The
anchor block sums to 6Q (dotted-whole span) in both. The tutorial never
shows this case; both instances are real-score. **The la zone is a fixed
2-syllable pre-close region, not an unlimited fill** — same architecture as
the Final's si zone (§3.5).

**Anchor duration:** H everywhere except the two ti-extension cases (H·).

### 3.3 Phrase B′ — confirmed

**Tutorial verbatim:** "When the next to the last phrase of the sticheron
follows Phrase A, then Phrase B′ is used, the difference being the cadence,
which begins on the last internal accent of the phrase, and is sung as a
half note on the same pitch as the reciting tone (ti), followed by a
descending second, and concluding with a descending minor second."

**Structure:** identical to B in recite (ti), anchor (ti, H), and la zone —
but the close falls through to **si** instead of returning to ti. The B′
line therefore ends on the same si·(la) sound-world as A/C, setting up the
Final. `cad tail: la…si`.

**Corpus instances (all four penultimate-slot lines):**

| Text | Shape |
|---|---|
| "when I **call** up-on Thee!//" (LIC) | recite ti ×2 \| call(ti/H) up(la/Q) on(la/Q) Thee!(si/H·) |
| "O **Foun**-tain of life!//" (stich. 2) | recite \| Foun(ti/H) tain(la/Q) of(la/Q) life!(si/H·) |
| "en-**light**-ened the world.//" (stich. 7) | recite \| light(ti/H) ened(la/Q) the(la/Q) world.(si/W) |
| "are joined with the **heav**___ens //" (tutorial) | recite ×4 \| heav(ti/H + la/H slur) ens(si/H·) |
| "O **Mer**-ci-ful One. //" (tutorial snippet) | Mer(ti/H) ci(la/Q) ful(la/Q) One.(si/H) |
| "is **with**___ you. //" (tutorial snippet) | is(ti/Q) with(ti/H + la/H slur) you.(si/H) |

2-syllable compression identical to B's (slur anchor+la, close si). No
ti-extension B′ case seen (no 5-syllable B′ cadence in corpus) — expected to
mirror B; flagged as unexercised.

### 3.4 Phrase C — confirmed

**Tutorial verbatim:** "Phrase C consists of a reciting tone on do, and a
cadence. The cadence begins on the last internal accent, sung as a dotted
half note (or a half note, depending on the text) on ti, followed by a
descending second (la), and then a descending minor second (half-tone) for
the final syllable of the phrase."

**Structure:**
- `recite: "do"`, `inton: false`, `prep: null`
- Anchor **ti** on the last internal accent — **H· at exact fit, H when
  ti-fills are present** (the tutorial's own "depending on the text" is
  rhythmic balancing, same mechanism Bill ruled for Tone 5's A/C anchors).
- Elastic **ti(Q)** fills absorb extra syllables.
- **Fixed tail: la(Q) on the penultimate syllable, si on the close.**

**Duration templates:**

| Cadence sylls | Shape | Instances |
|---|---|---|
| 2 (compressed) | ti(H·)+la(Q) 2-note slur on anchor · si(H\|H·\|W) | "first___fruit,"(H·), "hear___me!"(H·), "Fa___ther,"(H), "na___tures."(H·), "cry___ing,"(W), "bod___y?"(W), "ris___en,//"(H·), "glo___ry,//"(H·), "La___dy://"(W), "pow___er"(H, tut) |
| 3 (exact fit) | ti(H·) · la(Q) · si | "be-lov-ed Son"(tut), "she cried a-loud"(tut), "as-cend the Cross,", "al-might-y God!//", "en-dured the Cross,//"(W), "an-cient curse.", "ap-peared to them:"(W) |
| 4 | ti(H) · ti(Q) · la(Q) · si | "un-search-a-ble depth"(tut), "lift-ing up of my hands", "tram-ple on death!"(W), "fore Thee, we pray://"(H·) |
| 3 (H+H variant) | ti(H) · la(H) · si(H·) | "sing this **song**," — see note |
| 4 (us-anchor) | ti(H) · la(H) · si(H·) | "En-a-ble **us** on earth//" — see §4.2 |

**"sing this song," vs "cend the Cross,":** both 3-syllable exact fits; the
anchor+la pair sums to 4Q in both, realized H·+Q vs H+H — the same free
variance as Phrase A's anchor block (§3.1). Encoder default: **H·+Q** (the
tutorial's printed schematic and 5 of 7 instances).

**Compressed-close si duration is genuinely variable** (H, H·, W all
attested, see table). No structural driver found; tutorial prints H in its
snippet and H· in its worked example — the same "tutorial plain / practice
elongated" split Tone 5 recorded. Default H·, variants logged (§4.4).

### 3.5 Final Phrase — confirmed; one tutorial-vs-score conflict resolved by the corpus

**Tutorial verbatim:** "The Final Phrase for the sticheron begins directly
with the reciting tone (la) and the cadence begins on the last internal
accent, sung on the same pitch as the reciting tone (la), followed by a
descending minor second and then a return to la for the final syllable of
the phrase."

**Structure:**
- `recite: "la"`, `inton: false`, `prep: null`
- Anchor **la** on the last internal accent (anchor-on-reciting-pitch).
- **Fixed si zone: the (up to) two syllables before the close sit on si** —
  1 intermediate → si(H); 2 intermediates → si(Q)·si(Q) *or* si(H)·si(H)
  (see duration note).
- **la-fills:** with 3+ intermediates, the earliest one(s) stay on **la(Q)**
  after the anchor, and the anchor stretches to **H·**.
- Close **la(W)** — every corpus instance is W without exception (9/9).

**Duration templates:**

| Cadence sylls | Shape | Instances |
|---|---|---|
| 2 (compressed) | la(H)+si(H) 2-note slur on anchor · la(W) | "is with___you."(tut), "rup___tion."(stich. 6), "mer___cy!'"(apost. 3), "mer___cy!"(apost. 4) |
| 3 | la(H) · si(H) · la(W) | tutorial schematic; "Hear me, O Lord!" (LIC ×2: me/O/Lord); "death by death."(stich. 5) |
| 4 | la(H) · si(Q)·si(Q) · la(W) | "mer-cy on us!" (stich. 1,2,3 refrains), "glo-ry to Thee!" (×2), "oth-er than Thee.", "Mo-ther of God!"† |
| 5 | la(**H·**) · la(Q) · si(H)·si(H) · la(W) | "**mer**-cy on our souls!" (dogmatikon), "**pur**-i-ty of heart!" (apost. 1), "sal-**va**-tion of our souls!" (theotokion) |

† = 4-syllable case from a mid-list line; see §8.

**The salvation conflict — resolved by the corpus, needs Bill's sign-off.**
The tutorial's own worked example (pp. 48/50) prints "for the sal-va-tion of
our souls." as va(la/H) tion(la/Q) of(si/Q) our(si/Q) souls(la/W) — a 5Q
anchor block, the only un-barable cadence in the entire corpus. The
**identical text** in the real Aposticha-Theotokion score prints
va(la/**H·**) tion(la/Q) of(si/**H**) our(si/**H**) souls(la/W) — i.e.
|H·+Q|H+H|W|, three clean whole-note spans, agreeing exactly with the other
two 5-syllable instances (dogmatikon, aposticha 1). **Pitch-wise all four
agree** (tion stays la — the la-fill; of/our take si). The generic tutorial
schematic (all three fills si) matches no worked instance and is read as
schematic simplification. **Proposed encoding: the corpus shape —
la-fill(s) at Q with anchor H·; si zone H·H at 2 syllables when la-fills
present, Q·Q otherwise; close always W.**

**si-zone duration correlation (consistent, 7/7):** with la-fills present →
si zone H·H and anchor H·; without → si zone Q·Q (or single si H) and
anchor H. Equivalently: every Final cadence bars into whole-note spans:
|H Q Q|W|, |H H|W|, |H·Q|H H|W|, |H+H slur|W|.

---

## 4. Cross-cutting findings

### 4.1 No intonation anywhere — and no prep

Tone 6 is the first tone with **zero intonation and zero prep notes across
all phrases**: every phrase "begins directly with the reciting tone"
(tutorial, confirmed in all 84 corpus lines — no opening H, no two-pitch
approach, no pre-cadence prep note; the cadences move by direct step from
the reciting pitch). Every mark a director would need is the anchor itself:
expect **one director mark per line** as the dominant encoding pattern
(cf. §5 mark-count expectations).

### 4.2 Anchor rule — standard machinery holds; three findings

The last-internal-accent search with STOP filtering and monosyllabic backup
explains **81 of 84 corpus lines** outright. Findings:

1. **"upon" and "among" behave as STOP prepositions.** "when I call up-on
   Thee!//" anchors on **call** (not "on"); "since Thou art free a-mong the
   dead," anchors on **free** (not "mong"). Both are ordinary STOP behavior
   if these prepositions are STOP-listed — worth confirming they are (the
   Tone 1 STOP list includes bare "on"/"upon"? — check at implementation;
   if not, these two lines are the evidence to add them).
2. **Nominative "Thou" anchors when it carries contrastive weight:** "For
   **Thou** art our God,//" and "as **Thou** didst will," both anchor Thou.
   Consistent with the standing rule that thee/Thou are not STOP; noted
   because possessive "Thy" never anchors anywhere in the corpus.
3. **One genuine semantic-weight case:** "En-a-ble **us** on earth//"
   (aposticha 1) anchors the pronoun **us** — normally STOP — against
   "enable"'s own accent. The contrast is deliberate: *the angels in
   heaven* sing / enable *us on earth*. Same class as Tone 4's "whole
   Godhead" semantic-weight cases: Director Pointing territory, not an
   algorithm change. Machine default would anchor "a" (of en-A-ble);
   encode this line with a director bracket.

### 4.3 Rhythmic balancing — whole-note spans

Anchor + elastic block sums to **4Q (one whole-note span) in 30 of 33
measurable cadences**, realized freely as H+H, H·+Q, or H+Q+Q. The
remaining three: the two B ti-extension cases sum to 6Q (a dotted-whole
span — still barable), and the tutorial's salvation Final (5Q) is
contradicted by its own real-score parallel (§3.5). This is the cleanest
statement yet of the "rhythmic balancing" mechanism Bill ruled for Tone 5 —
in Tone 6 it is near-exceptionless. The *distribution* of the 4Q inside the
block (H+H vs H·+Q) is the one free variable (§3.1, §3.4).

### 4.4 Close durations — the finality picture

| Position | Observed closes |
|---|---|
| True sticheron end (Final phrase) | **W — 9/9, no exceptions** |
| LIC refrain unit ends ("Hear me, O Lord!" as B) | W |
| `//` penultimate lines | H· ×8 (Thee!, fice!, heavens, pray:, ris-en,, glo-ry,, life!, God! [apost. 2]) — plain H ×1 (La-dy,// dogmatikon) — W ×6 (death., God, [stich. 4], Cross,, us,, world., La-dy:/ [theotokion]) |
| Mid-sticheron `!` or `?` lines | W frequent ("He said!", "trample on death!", "death?", "Joy!", "tears!", "God!", "sea?") but not universal ("dwell-est!" H·, "sing!" H·, "Mas-ter!" H·, "fice!//" H·) |
| Mid-sticheron `,` `.` `:` lines | H and H· freely mixed |

No punctuation rule survives the data (same conclusion as Tones 1–5, now
with the largest sample). **Proposed encoder defaults: Final phrase close
= W always; all other closes = the phrase's printed template value (H or
H·) with the corpus table (§8) as the per-line authority for the LIC
presets; W closes encoded per-line where the score prints them.**
Candidate soft rule kept on watch: `//`-line closes trend H· in the LIC
framing texts and W in the stichera proper — not yet explainable.

### 4.5 Compression slurs — uniform mechanism

Every phrase compresses identically when only the anchor syllable + close
remain: the anchor carries a 2-note slur (its own pitch + the first tail
pitch) and the close keeps its own note. B/B′: ti+la slur → close; Final:
la+si slur → la(W); C: ti(H·)+la(Q) slur → si. Twelve corpus instances, no
counterexample, matching the tutorial's own "man's pow-er" / "is with you"
snippets. (Tone 5's word-boundary tail-compression question does not arise:
Tone 6's tails never straddle word boundaries variably — the slur always
lands on the anchor syllable.)

---

## 5. Director-mark expectations (for docx ingest, when a Tone 6 corpus arrives)

No OCA docx corpus was processed this session (none gathered yet). From the
structure: expect **one mark per line** (the anchor) on all phrases —
Tone 6 has no intonation or second structural accent anywhere. Two-mark
lines would signal either a director cue on a long recite (Tone 2 §5.3
class) or a semantic-weight override ("us on earth" class). This is the
simplest mark profile of any tone so far.

---

## 6. Implementation sketch (for the build session — NOT built yet)

- `ROT_DEFS[6]`: the function in §2 (note: introduces a phrase key beyond
  the plain rotation — suggest `"Bp"` with display label "B′"; every
  consumer that switches on phrase names must handle it).
- `PH_DEFS[6]`:
  ```javascript
  6: {
    A:     { recite:"la", inton:false, prep:null, cad:["si","la"] },
    B:     { recite:"ti", inton:false, prep:null, cad:["ti","la","ti"] },
    Bp:    { recite:"ti", inton:false, prep:null, cad:["ti","la","si"] },
    C:     { recite:"do", inton:false, prep:null, cad:["ti","la","si"] },
    Final: { recite:"la", inton:false, prep:null, cad:["la","si","la"] },
  }
  ```
  …as *descriptors only*. Per the Tone 3 §22 / Tone 5 discipline, all five
  phrases need **dedicated pointLine() handlers with explicit durs** — the
  zone-capped fills (B/B′ la-zone, Final si-zone), ti-extensions, anchor
  H·-stretching, and compression slurs are exactly the class of logic
  `distribute()` mangles. No Tone 6 phrase should touch shared duration
  paths.
- **Frequency/notation anchor FIRST (§27.2 order):** dedicated
  `TONE6_SEMI` anchored la=E4 (do=G4 is NOT the tonic; suggested table
  `{sol:-5, si:-4, la:-3, ti:-1, do:0, re:2, mi:4}` relative to do=G4 =
  392 Hz), plus `TONE6_ALTO_PITCH = {sol:"D/4", si:"D/4♯", la:"E/4",
  ti:"F#/4", do:"G/4", re:"A/4", mi:"B/4"}`-class non-transposing notation
  tables for all four voices, and the fixed one-sharp key signature. Alto
  si needs an explicit ♯ (the key signature covers F only) — the existing
  chromatic-accidental path should handle `si`, verify at render.
- SATB per §7; Final's bass low `re` = **A2** (measured) will need the
  low-register handling (`re_low`-class pitch or octaveDiv), exactly like
  Tone 5's bass `mi_low` = A2.
- `AVAILABLE_TONES` gains 6 **in the same commit that builds the tone**
  (the July 11 Tone 5 lesson).
- `PRESET_T6`: the 11-line LIC set from §8.1 — it exercises A, B, B′, C,
  Final, both compressions, ti-extension… wait, no ti-extension (that lives
  in stichera 1–2); consider adding LIC sticheron 1 as a second example
  text if the preset should cover it.

---

## 7. SATB harmony (from the tutorial's labeled harmony page, p. 49)

**Status: read from the fully solfège-labeled tutorial page (E-minor and
G-minor printings agree), spot-confirmed against the p. 50 worked score
where measured, NOT yet interviewed with Bill. Treat as high-quality
candidate data requiring Bill's confirmation before encoding — this is the
one section where this session's evidence is a labeled table rather than
independent measurement of every value.**

| Phrase / position | Sopr | Alto | Tenor | Bass |
|---|---|---|---|---|
| A recite | do | la | mi | la |
| A cadence si | ti | si | mi | mi |
| A close la | do | la | mi | la |
| B recite / anchor / close ti | re | ti | sol | sol |
| B la-zone | do | la | sol | sol |
| B′ anchor | re | ti | sol | sol |
| B′ la-zone | do | la | **mi** | **la** |
| B′ close si | ti | si | mi | mi |
| C recite | mi | do | sol | do |
| C anchor ti (H·: bass prints ˙· too) | re | ti | sol | sol |
| C la | do | la | mi | la |
| C close si | ti | si | mi | mi |
| Final recite | do | la | mi | la |
| Final anchor la | do | la | **fa** | **re** |
| Final si zone | ti | si | mi | mi |
| Final close la | do | la | mi | la |

Readings and observations:

- **Soprano is a strict diatonic third above alto at every position**
  (do/la, ti/si, re/ti, mi/do — all +2 degrees). Expect `SOPRANO_MAP` +
  `SOPRANO_TONES` to cover it; note si→ti is a new map pair to verify.
- **The si chord is everywhere the same B-major sonority** (ti/si/mi/mi =
  F#/D#/B/B) — the dominant of E minor. Tenor and bass sit on mi (B) under
  every si.
- **B's cadence is harmonically static** — S/T/B hold re/sol/sol through
  anchor, la-zone, and close; only alto moves. (Tenor/bass sol = D4/D3.)
  B′ diverges from B exactly where its melody does: the la-zone takes the
  A-family chord (mi/la) before the si chord.
- **The Final's anchor chord is the one place tenor and bass genuinely
  move:** tenor fa (C4), bass re (A2 — measured low, see below) under
  alto la — an A-minor-7 color before the si (B major) → la (E minor)
  close. This is Tone 6's harmonic signature moment.
- **Registers (partially measured):** tenor mi=B3, sol=D4, fa=C4; bass
  la=E3, sol=D3, do=G3, mi=B2, and Final-anchor **re=A2** (pixel-measured
  on p. 50: the bass drops a seventh, not a second — same low-A2 device as
  Tone 5's Final bass). Full register table to be confirmed at
  implementation with the frequency-anchor-first order.
- **Hold behavior NOT yet verified for Tone 6** — no
  `TENOR_HOLD_TONES`/`BASS_HOLD_TONES` membership without its own score
  check (per standing rule). The compression slurs give natural test
  cases: under B/B′ "dwell___est" the tenor/bass hold sol/sol (pitch
  unchanged) while under Final "mer___cy" the bass moves re→mi. Expected
  from the tables; must be confirmed against printed tt-score bass/tenor
  staves before gating on.

---

## 8. Corpus appendix — every line read this session

Pixel-measured alto pitches; durations from the engraving's glyph layer;
anchor syllable **bolded**. (`recite ×n` = n syllables on the reciting
pitch, Q each.)

### 8.1 LIC psalm verses (`t6-lic-obikhod-tt.pdf`) — the PRESET_T6 candidate

| # | Phrase | Text and shape |
|---|---|---|
| 1 | A | Lord, I call upon Thee,(recite la ×6) **hear**(si/H) me!(la/H) |
| 2 | B | **Hear**(ti/H) me,(la/Q) O(la/Q) Lord!(ti/W) — no reciting body; anchor opens the line |
| 3 | C | Lord, I call upon Thee,(recite do ×6) **hear**(ti/H· + la/Q slur) me!(si/H·) |
| 4 | A | Receive the(recite la ×3) **voice**(si/H) of(si/Q) my(si/Q) prayer,(la/H) |
| 5 | B′ | when I(recite ti ×2) **call**(ti/H) up(la/Q) on(la/Q) Thee!//(si/H·) |
| 6 | Final | Hear(recite la) **me,**(la/H) O(si/H) Lord!(la/W) |
| 7 | A | Let my(recite la ×2) **prayer**(si/H·) a(si/Q) rise(la/H) |
| 8 | B | in Thy sight as(recite ti ×4) **in**(ti/H + la/H slur) cense,(ti/H·) |
| 9 | C | and let the lift-ing(recite do ×5) **up**(ti/H) of(ti/Q) my(la/Q) hands(si/H) |
| 10 | A | be an eve-ning(recite la ×4) **sac**(si/H) ri(si/H) fice!//(la/H·) |
| 11 | Final | Hear(recite la) **me,**(la/H) O(si/H) Lord!(la/W) |

(Encoding note: lines 2/3 are the LIC's classic "Hear me" doublet — line 2
closes W as the true end of the first invocation unit.)

### 8.2 Sunday LIC stichera (`t6-lic-stichera-obikhod-tt.pdf`)

**Sticheron 1** (5: A B C A Final)

| Phrase | Shape |
|---|---|
| A | Pos-sess-ing victory o-ver(recite la) **hell,**(si/H) O(si/H) Christ,(la/H·) |
| B | since Thou art(recite ti) **free**(ti/H·) a(ti/Q) mong(la/Q) the(la/Q) dead,(ti/H) |
| C | Thou didst as(recite do ×3) **cend**(ti/H·) the(la/Q) Cross,(si/H) |
| A | raising with Thyself those who sat in the(recite la) **shades**(si/H) of(si/H) death.//(la/W) |
| Final | Drawing life from Thy light, O almighty Savior, have(recite la) **mer**(la/H) cy(si/Q) on(si/Q) us!(la/W) |

**Sticheron 2** (6: A B C A B′ Final)

| Phrase | Shape |
|---|---|
| A | To-day Christ(recite la ×3) **tram**(si/H) ples(si/Q) on(si/Q) death,(la/H·) |
| B | for He is(recite ti ×3) **ris**(ti/H·) en(ti/Q) as(la/Q) He(la/Q) said!(ti/W) |
| C | Let us all(recite do ×3) **sing**(ti/H) this(la/H) song,(si/H·) |
| A | for He has grant-ed(recite la) **joy**(si/H) to(si/Q) the(si/Q) world:(la/H·) |
| B′ | O Light unapproachable, O(recite ti) **Foun**(ti/H) tain(la/Q) of(la/Q) life!//(si/H·) |
| Final | O Savior almighty, have(recite la) **mer**(la/H) cy(si/Q) on(si/Q) us!(la/W) |

**Sticheron 3** (7: A B C A B C Final)

| Phrase | Shape |
|---|---|
| A | Where shall we sinners flee from Thee, Who art in all cre(recite la) **a**(si/H) tion?(la/H·) |
| B | In heaven Thou(recite ti) **dwell**(ti/H + la/H slur) est!(ti/H·) |
| C | In hell Thou didst(recite do) **tram**(ti/H) ple(ti/Q) on(la/Q) death!(si/W) |
| A | In the(recite la ×2) **depths**(si/H) of(si/Q) the(si/Q) sea?(la/W) |
| B | Even there is Thy hand, O(recite ti) **Mas**(ti/H + la/H slur) ter!(ti/H·) |
| C | To Thee we flee, and falling be(recite do) **fore**(ti/H) Thee,(ti/Q) we(la/Q) pray://(si/H·) |
| Final | O Thou Who didst rise from the dead, have(recite la) **mer**(la/H) cy(si/Q) on(si/Q) us!(la/W) |

**Sticheron 4** (4: A B C Final)

| Phrase | Shape |
|---|---|
| A | In Thy Cross, we(recite la) **glo**(si/H) ry,(si/Q) O(si/Q) Christ.(la/H·) |
| B | We sing and glorify Thy Res-ur(recite ti) **rec**(ti/H + la/H slur) tion.(ti/H·) |
| C | For(recite do) **Thou**(ti/H) art(ti/Q) our(la/Q) God,//(si/W) |
| Final | and we know no(recite la) **oth**(la/H) er(si/Q) than(si/Q) Thee.(la/W) |

**Sticheron 5** (4: A B C Final)

| Phrase | Shape |
|---|---|
| A | We will al-ways(recite la) **bless**(si/H) the(si/H) Lord(la/H·) |
| B | by singing of His Res-ur(recite ti) **rec**(ti/H + la/H slur) tion!(ti/H·) |
| C | For He en(recite do ×3) **dured**(ti/H·) the(la/Q) Cross,//(si/W) |
| Final | tramp-ling down(recite la ×3) **death**(la/H) by(si/H) death.(la/W) |

**Sticheron 6** (4: A B C Final)

| Phrase | Shape |
|---|---|
| A | Glory to Thy(recite la) **might,**(si/H) O(si/H) Lord,(la/H·) |
| B | for Thou didst overthrow the(recite ti) **prince**(ti/H) of(la/H) death,(ti/W) |
| C | by Thy Cross re(recite do) **new**(ti/H·) ing(la/Q) us,//(si/W) |
| Final | granting us life and in-cor(recite la ×2+) **rup**(la/H + si/H slur) tion.(la/W) |

**Sticheron 7** (3: A B′ Final)

| Phrase | Shape |
|---|---|
| A | Thy burial destroyed the bonds of(recite la) **hell,**(si/H·) O(si/Q) Lord.(la/W) |
| B′ | Thy Res-ur-rec-tion from the dead en(recite ti) **light**(ti/H) ened(la/Q) the(la/Q) world.//(si/W) |
| Final | O Lord,(recite la ×2) **glo**(la/H) ry(si/Q) to(si/Q) Thee!(la/W) |

### 8.3 LIC Dogmatikon (`t6-lic-dogmatikon-obikhod-tt.pdf`) — 8: A B C A B C A Final

| Phrase | Shape |
|---|---|
| A | Who will not bless thee, O most ho-ly(recite la) **Vir**(si/H) gin?(la/H) |
| B | Who will not sing of thy most pure(recite ti) **child**(ti/H) bear(la/H) ing?(ti/H·) |
| C | The only-begotten Son shone timelessly from the(recite do) **Fa**(ti/H· + la/Q slur) ther,(si/H) |
| A | but from thee He was ineffably in(recite la) **car**(si/H) nate.(la/H) |
| B | God by nature, yet(recite ti) **Man**(ti/H) for(la/Q) our(la/Q) sake,(ti/H) |
| C | not two persons, but one known in two(recite do) **na**(ti/H· + la/Q slur) tures.(si/H·) |
| A | En-treat Him, O pure and all-bless-ed(recite la) **La**(si/H) dy,//(la/H) |
| Final | to have(recite la ×2) **mer**(la/H·) cy(la/Q) on(si/H) our(si/H) souls!(la/W) |

### 8.4 Aposticha (`t6-aposticha-obikhod-tt.pdf`)

**Sticheron 1** (4: A B C Final)

| Phrase | Shape |
|---|---|
| A | Thy Resurrection, O Christ our(recite la) **Sav**(si/H) ior,(la/H) |
| B | the Angels in(recite ti) **heav**(ti/H) en(la/H) sing!(ti/H·) |
| C | En-a-ble(recite do ×3) **us**(ti/H) on(la/H) earth//(si/H·) — semantic-weight anchor, §4.2 |
| Final | to glorify Thee in(recite la) **pur**(la/H·) i(la/Q) ty(si/H) of(si/H) heart!(la/W) |

**Sticheron 2** (4: A B C Final)

| Phrase | Shape |
|---|---|
| A | Destroying the(recite la) **gates**(si/H) of(si/H) hell,(la/H) |
| B | breaking the(recite ti) **chains**(ti/H) of(la/H) death,(ti/H) |
| C | Thou didst resurrect the fallen human race as al(recite do) **might**(ti/H·) y(la/Q) God!//(si/H·) |
| Final | O Lord, Who didst rise from the dead,(recite la) **glo**(la/H) ry(si/Q) to(si/Q) Thee!(la/W) |

**Sticheron 3** (13: A B C A B C A B C A B C Final)

| Phrase | Shape |
|---|---|
| A | Desiring to return us to(recite la) **Par**(si/H·) a(si/Q) dise,(la/H) |
| B | Christ was nailed to the Cross and(recite ti) **placed**(ti/H) in(la/Q) a(la/Q) tomb.(ti/H·) |
| C | The Myrrhbearing Women sought Him with tears(recite do) **cry**(ti/H· + la/Q slur) ing,(si/W) |
| A | "Woe to us, O(recite la) **Sav**(si/H) ior!(la/H) |
| B | How didst Thou deign to de(recite ti) **scend**(ti/H) to(la/H) death?(ti/W) |
| C | What place can hold Thy life-bear-ing(recite do) **bod**(ti/H· + la/Q slur) y?(si/W) |
| A | Come to us as Thou didst(recite la) **prom**(si/H) ise!(la/H) |
| B | Take away our(recite ti) **wail**(ti/H) ing(la/Q) and(la/Q) tears!"(ti/W) |
| C | Then the Angel ap(recite do ×2) **peared**(ti/H·) to(la/Q) them:(si/W) |
| A | "Stop your la-men(recite la) **ta**(si/H) tions!(la/H) |
| B | Go, proclaim to the A(recite ti) **pos**(ti/H + la/H slur) tles:(ti/H·) |
| C | 'The Lord is(recite do ×3) **ris**(ti/H· + la/Q slur) en,//(si/H·) |
| Final | granting us purification and great(recite la) **mer**(la/H + si/H slur) cy!'"(la/W) |

**Sticheron 4** (4: A B C Final)

| Phrase | Shape |
|---|---|
| A | Having been crucified as(recite la) **Thou**(si/H) didst(si/H) will,(la/H) |
| B | by Thy burial Thou didst cap-ture(recite ti) **death,**(ti/H) O(la/H) Christ,(ti/H) |
| C | rising on the third day as God in(recite do) **glo**(ti/H· + la/Q slur) ry,//(si/H·) |
| Final | granting the world unending life and great(recite la) **mer**(la/H + si/H slur) cy!(la/W) |

### 8.5 Aposticha Theotokion (`t6-aposticha-theotokion-obikhod-tt.pdf`) — 7: A B C A B C Final

| Phrase | Shape |
|---|---|
| A | My Maker and Redeemer,(recite la) **Christ**(si/H·) the(si/Q) Lord,(la/H·) |
| B | was born of thee, O most pure(recite ti ×7, printed per-syllable) **Vir**(ti/H + la/H slur) gin.(ti/W) |
| C | By accepting my nature, He freed Adam from His(recite do) **an**(ti/H·) cient(la/Q) curse.(si/H·) |
| A | Unceasingly we magnify thee as the(recite la) **Mo**(si/H) ther(si/Q) of(si/Q) God!(la/W) |
| B | Rejoice, O ce(recite ti ×2+) **les**(ti/H) tial(la/H) Joy!(ti/W) |
| C | Rejoice, O(recite do ×2) **La**(ti/H + la/Q slur) dy://(si/W) |
| Final | the Protection, Intercession, and Sal(recite la) **va**(la/H·) tion(la/Q) of(si/H) our(si/H) souls!(la/W) |

---

## 9. Open items / questions for Bill

1. **Final 5-syllable shape:** encode the corpus/real-score form
   (anchor H·, la-fill Q, si zone H·H, close W) over the tutorial's
   printed salvation durations (H, Q, Q·Q)? (§3.5 — pitch agrees
   everywhere; only durations differ, and only in the tutorial.)
2. **A/C anchor-block free variance** (H+H vs H·+Q at one fill): confirm
   default H+H for A (majority) and H·+Q for C (tutorial schematic), with
   the variant left to director pointing / per-line encoding?
3. **Close-duration defaults** (§4.4): Final=W always; others per template
   with per-line W where printed — acceptable? Any ruling on the
   `//`-line H· vs W split?
4. **B ti-extension** (2 instances, both 6Q blocks): accept as the ≥5-syll
   B rule? No B′ parallel seen — mirror it or leave unexercised?
5. **"En-a-ble us on earth//"** — confirm as director-bracket territory
   (machine would anchor "a" of enable).
6. **"upon"/"among" STOP membership** — confirm/add (two corpus lines
   depend on it).
7. **SATB tables (§7)** — please sight-confirm the p. 49 readings
   (especially B′'s la-zone chord mi/la vs B's sol/sol, the Final anchor
   fa/re, and bass Final re=A2) before I encode `BASS_RULES[6]` /
   `TENOR_RULES[6]`.
8. **Hold verification** for tenor/bass under the compression slurs — needs
   a direct read of the tt bass staves (or Bill) before
   `*_HOLD_TONES` membership.
9. **Presets:** LIC 11-liner alone, or LIC + sticheron 1 (to cover
   ti-extension and W-at-// cases)?
10. **Method acceptance:** the pixel-measurement pipeline (§0) — if the
    spot-checks Bill makes against his printed copies come back clean, do
    we accept this class of evidence as "score-confirmed" for future tones,
    or keep Bill's sight-reading as the required gate?

---

*Research session, July 18 2026. Implementation deliberately deferred to
Bill's review of this document.*
