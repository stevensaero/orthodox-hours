# Menaion Rubric Census — instruction sets distilled for the Fekula comparison

**Written 15 August 2026, at v0.41.4 (11 of 26 General Menaion files encoded).**
Commissioned by Bill: *"collect all rubrics, from this sweep and the month of
August, then do a comparison that distills the instructions down to common sets
that can be compared to Fekula."*

**Two instruments, two evidence grades.**

1. **The General Menaion inventory is settled data**: every rubric here is a
   stored, gated, per-position text node in `src/data/menaion_v2/general.js` —
   **314 rubric nodes across 11 files, 30 distinct slot keys** — read off the
   data, not the PDFs.
2. **The August sweep is a candidate-locator**, the heading-scan class of
   instrument: a conditional-opener scan of all 37 daily files returning 44
   blocks. It found six genuine rubric families and three false-positive
   classes (hymns open with "When the…", reading bodies wrap onto "should…",
   and the Dormition exapostilarion opens "If her unapproachable Fruit…").
   **Nothing below asserts a fact about an unencoded daily file; the sweep says
   where to measure.**

**The Fekula column is prepared, not filled.** The chapter `.txt` files are
still on Drive (R-7 incomplete), so each family below carries its hook into the
rule the assembler already encodes, and a `[FEKULA: verbatim comparison owed]`
flag where the printed text must eventually be set beside Fekula's own wording.

---

## 1. The finding that shapes everything else

**The Menaion's rubrics are conditionals over a SMALL, CLOSED set of decision
variables — and they are exactly Fekula's variables.** Across ~17 wordings of
the dogmatic rubric, three structural rewrites, and eight wordings of the
from-the-Typicon conditional, the *logic* never varies with the wording. Every
conditional rubric in eleven files and the August sweep resolves to a condition
built from:

| variable | values attested | printed as |
|---|---|---|
| **RANK** | Polyeleos+ · Doxology · (default) | "If the Celebration be with a Polyeleos", "If of Polyeleos rank", "If a small Doxology is read" |
| **COINCIDENCE** | Resurrection (Sunday) · Saturday evening · Sunday · feast-day | "If (not) a Resurrection Service", "But if it be Saturday evening" (08-05), "If the forefeast … falls on a Sunday" (08-14) |
| **DAY-OF-WEEK** | Wed/Fri vs. other | the textless "Theotokion or Stavrotheotokion:" closer (80 sites / 21 files) |
| **APPOINTMENT** | Typikon supplies a proper · an Idiomelon is appointed · a Doxasticon is appointed | "The Troparion from the Typicon; but if there be none…", "If an Idiomelon be appointed", "and a Doxasticon is appointed" |
| **NUMBER** | one · many | Angels: "For One Angel" / "Or for many" / "Another:" / "Refrain (for one)" |
| **IDENTITY** | a named commemoration | Martyrs: "If it be the Forty Martyrs, this Prokeimenon…" |
| **SERVICE-FORM** | vigil served or not · God-is-the-Lord vs. Alleluia | "But if a vigil is not served" (08-03A, 08-29, 08-30A), "But if Alleluia be chanted instead of 'God is the Lord…'" (08-03, 08-04) |
| **CYCLE** | afterfeast until apodosis | "…and we continue to do so until the leave-taking" (nine August files) |

And every action is one of five:

**SELECT** a printed alternative · **SUBSTITUTE** from another source (the
Typikon's proper; the Octoechos tone-of-the-week) · **REPLACE** a frame element
("It is truly meet" → Ode IX irmos) · **POSITION** an element (where the
troparion is sung after the Doxology) · **CEREMONIAL** action (the Be-It-Known
blocks).

**Consequence for the assembler: the rubrics never need parsing.** The
condition vocabulary above is the assembler's existing input vocabulary — rank
from the §1.1 waterfall, day and coincidence from the calendar, appointment
from the Typikon/OCA layer. The stored rubric is evidence beside the decision,
exactly as §2.7 rules. What this census adds is the measured confirmation that
the variable set is CLOSED across eleven files and the August candidates — no
rubric found requires a variable the assembler does not already have.

---

## 2. The families — General Menaion (settled data)

### F-1 · The Dogmatic at the LIC Both-now
- **Instruction set:** IF rank ≥ Polyeleos AND NOT Resurrection-coincidence →
  sing the printed Dogmatic in its stated tone. IF Resurrection-coincidence →
  sing the Dogmatic **of the tone of the week** (Octoechos; the §2.14
  cross-book lookup).
- **Variance:** 11 files, ≥17 wordings corpus-wide. Three structural outliers,
  all now measured on the page: **MonasticMartyrs** folds both branches into
  two primary clauses and writes "the Tone of the Week"; **Angels** inverts the
  parenthetical ("sing in the Tone of the Dogmatic"); **St John Baptist**
  states the condition negatively *(unencoded; analysis §6.1)*. The `service ):`
  defect travels with the parenthetical form (7 of 9 printing it).
- **Texts governed:** the Tone VI dogmatic (6 sites, 5 byte-identical, Apostle's
  "all-blessed" the lone divergence) and the Tone VIII dogmatic (3 sites, all
  byte-identical).
- **Fekula hook:** Saturday-evening/Resurrection dogmatic rule; the assembler's
  `octoechos:toneN.great_vespers.dogmatikon` path. `[FEKULA: verbatim comparison owed]`

### F-2 · The Idiomelon Glory
- **Instruction set:** IF an Idiomelon is APPOINTED → the printed Glory
  (its own tone); ELSE → the closer proceeds without it.
- **Variance:** 10 files; comma/stop/colon after "appointed"; Apostles prints
  "Idiomelion". Angels prints no idiomelon slot at all.
- **Fekula hook:** appointment source is the Typikon. `[FEKULA: owed]`

### F-3 · From-the-Typicon substitution (troparion · kontakion · both)
- **Instruction set:** IF the Typikon supplies the proper → use it; ELSE → the
  printed general text. This is `encoding_rule_v2.md` §1/§2.1's fallback chain
  seen from the book's own side: **the General Menaion knows it is a fallback.**
- **Variance:** eight wordings across 31 slots ("; but if there be none," /
  ", but if there be none," / ". If there be no Typicon," / "appointed by the
  Typicon. If there be none," / "; if there be none," / "but if there be none
  in the Typicon" / bare label with NO conditional — Apostles Vespers+Liturgy,
  Angels kontakion).
- **Fekula/OCA hook:** the daily proper resolution order (OCA overrides only
  with a saint-specific proper). `[FEKULA: owed]`

### F-4 · The aposticha closer (three-branch)
- **Instruction set:** IF rank ≥ Polyeleos → the printed **Resurrection
  Theotokion**; OTHERWISE → the printed ordinary Theotokion; [Wed/Fri] → the
  printed Stavrotheotokion.
- **Variance:** 10 files. The Resurrection Theotokion itself varies
  ("Rejoice!, O Lady" / "O Sovereign Lady"); the Otherwise-theotokia circulate
  between files and slots ("No one that fleeth": Apostle's dogmatic slot,
  MonasticMartyrs' aposticha slot). Angels prints NO alternatives — one
  combined Glory-Both-now.
- **Fekula hook:** rank + day rules. `[FEKULA: owed]`

### F-5 · The textless conditional closer
- **Instruction set:** "Glory…, Both now…, Theotokion or Stavrotheotokion:" —
  DAY-OF-WEEK decides (Wed/Fri → Stavrotheotokion); **the book declines to
  decide and so does the capture** (`theotokion_or_stavrotheotokion` in
  `CLOSER_TYPES`; absence nodes at the textless sites).
- **Variance:** 80 sites, 21 files; at the Doxology position one fixture-line
  stores it as a rubric text node (the preserved asymmetry).
- **Fekula hook:** the Wed/Fri stavrotheotokion rule — the assembler decides.

### F-6 · The Anabathmoi
- **Instruction set:** IF rank ≥ Polyeleos AND NOT Resurrection → the Tone IV
  first antiphon (printed IN FULL — the R-5-exclusion misreading Unmercenaries
  falsified); IF Resurrection → the tone-of-the-week antiphons (Octoechos).
- **Variance:** none in wording that matters; the antiphon text is the book's
  most stable hymnography — byte-identical in all ten files that print it.
- **Fekula hook:** §2.14 cross-book tone lookup. `[FEKULA: owed]`

### F-7 · Doxology grade and the Doxasticon
- **Instruction set:** IF rank supplies the great Doxology → sung; IF a small
  Doxology is read [AND a Doxasticon is appointed] → the printed Glory is
  chanted after the Aposticha. Unmercenaries adds the POSITION rule: where the
  troparion is sung after the Doxology.
- **Variance:** three forms (long, with the Doxasticon clause; short, without —
  Angels; plus the bare "The Doxology:" heading in three files only).
- **Fekula hook:** the Doxology-rank branch of the waterfall. `[FEKULA: owed]`

### F-8 · Identity- and number-conditionals
- Martyrs: "If it be the Forty Martyrs, this Prokeimenon should be sung:" —
  IDENTITY selects a printed alternative.
- Angels: the one/many axis at four positions (two megalynaria, two canon
  refrains, two post-Psalm-50 sessionals) — NUMBER selects; the singular
  variants carry `(name)`.
- **Fekula hook:** commemoration identity/count from the calendar layer.

### F-9 · R-5 pointers and frame markers (unconditional)
"Prokeimenon of the day." (byte-invariant at all 51 sites corpus-wide) ·
"Let every breath[.,]" · "Typika and [the] Beatitudes." · "The Dismissal:" ·
"The Entrance. [The] Prokeimenon of the day. [The] Three Lessons[, if
appointed][.:]" — pointers into the Horologion/other books, stored
per-position, never fetched (R-5, exclusion register). The Angels article
("and THE Beatitudes") and the Apostles comma-less "Lord I have cried" both
live in this class — **frame markers vary too**, which is why nothing may key
on them.

---

## 3. The families — August dailies (candidates; close reading owed)

| family | instruction set (candidate) | files |
|---|---|---|
| **A-1 · Alleluia-format Matins** | IF Alleluia is chanted instead of God-is-the-Lord → chant first the printed Stichera of the Theotokos (alternatives PRINTED) | 08-03, 08-04 — settles the §13.2 item-7 `matins_format` question with printed texts |
| **A-2 · Vigil not served** | IF no vigil → altered sequence after the Troparion | 08-03A, 08-29, 08-30A |
| **A-3 · Saturday evening** | IF Saturday evening → Both now = the Dogmatic Theotokion | 08-05 |
| **A-4 · Feast-on-Sunday combination** | IF forefeast falls on Sunday → combine whole forefeast service with the Sunday service | 08-14 |
| **A-5 · "It is truly meet" replacement** | DURING the afterfeast until leave-taking → replace with the Ode IX irmos, Tone I | nine files, 08-15 through 08-22 |
| **A-6 · Be-It-Known ceremonial** | ceremonial actions (Cross transfer, Lesser Blessing of Water) | 08-01, 08-01A |

These add exactly three variables the General Menaion did not exercise —
SERVICE-FORM, CYCLE, and the Sunday-combination case of COINCIDENCE — and no
action class beyond the five. **The variable set stays closed.**

---

## 4. What the census settles, and what it owes

**Settled:** the rubric corpus needs no parser and no wording-keyed rule,
because the wording varies freely while the logic draws on eight variables the
assembler already possesses. The families above ARE the "common sets" — each
one an instruction set the Fekula comparison can be run against family-by-
family rather than rubric-by-rubric: ~17 dogmatic wordings become ONE row.

**Owed:**
1. **Migrate the Fekula chapter files off Drive (R-7)** and fill the
   `[FEKULA: owed]` flags — family-by-family, printed rubric beside Fekula's
   rule, divergence rows where they disagree. This is the comparison Bill
   asked for, blocked only on source delivery.
2. **Close-read the six August families** (A-1 through A-6) when their dates
   are encoded — the sweep locates, it does not settle.
3. **St John Baptist's negative conditional** — the third structural rewrite,
   unencoded; measure on the page.
4. The census script's false-positive classes are documented above; any rerun
   must expect them.
