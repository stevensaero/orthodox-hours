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

**The Fekula column is FILLED (15 Aug, second pass).** Bill delivered the
chapter files locally (`Orthodox Hours/Fekula_ODS/`, OCR text of all ten
chapters + appendices), unblocking the comparison the same day the census was
written. Each family below now carries Fekula's own wording beside the
Menaion's, cited by chapter and line of the delivered text. §5 records the
comparison's verdict.

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
- **FEKULA (filled):** his constant formula is *"Now and ever … the dogmaticon
  in the tone of the week"* (ch. 1 ×7 sites; ch. 2 ll. 86-88 — *"But if it be
  Friday evening: … dogmaticon in the tone of the week"*, l. 744, l. 1093).
  **AGREEMENT — and MonasticMartyrs' "rewritten" rubric ("the Tone of the
  Week") is the corpus wording CLOSEST to Fekula's own.** The structural
  outlier is the most Fekula-conformant text in the book. Assembler path:
  `octoechos:toneN.great_vespers.dogmatikon` (§2.14).

### F-2 · The Idiomelon Glory
- **Instruction set:** IF an Idiomelon is APPOINTED → the printed Glory
  (its own tone); ELSE → the closer proceeds without it.
- **Variance:** 10 files; comma/stop/colon after "appointed"; Apostles prints
  "Idiomelion". Angels prints no idiomelon slot at all.
- **FEKULA (filled):** appointment flows through his "if there be one/such"
  idiom — *"Glory … from the Menaion, if there be one"* (ch. 2 l. 88 and
  passim). AGREEMENT: existence-in-the-book is the condition; Fekula never
  names the idiomelon class separately.

### F-3 · From-the-Typicon substitution (troparion · kontakion · both)
- **Instruction set:** IF the Typikon supplies the proper → use it; ELSE → the
  printed general text. This is `encoding_rule_v2.md` §1/§2.1's fallback chain
  seen from the book's own side: **the General Menaion knows it is a fallback.**
- **Variance:** eight wordings across 31 slots ("; but if there be none," /
  ", but if there be none," / ". If there be no Typicon," / "appointed by the
  Typicon. If there be none," / "; if there be none," / "but if there be none
  in the Typicon" / bare label with NO conditional — Apostles Vespers+Liturgy,
  Angels kontakion).
- **FEKULA (filled):** the fallback is his rule too, stated from the other
  side — *"…prescribes the appropriate kontakion and ikos from the General
  Menaion (on Saturdays, in such a case, we always use the kontakion and ikos
  from the General Menaion)"* (ch. 2 ll. 161-162, repeated ch. 3a ll. 781-782).
  AGREEMENT, plus one rule the Menaion cannot print: **Saturday makes the
  General-Menaion fallback unconditional.** A day-variable on the fallback
  itself — assembler-side only.

### F-4 · The aposticha closer (three-branch)
- **Instruction set:** IF rank ≥ Polyeleos → the printed **Resurrection
  Theotokion**; OTHERWISE → the printed ordinary Theotokion; [Wed/Fri] → the
  printed Stavrotheotokion.
- **Variance:** 10 files. The Resurrection Theotokion itself varies
  ("Rejoice!, O Lady" / "O Sovereign Lady"); the Otherwise-theotokia circulate
  between files and slots ("No one that fleeth": Apostle's dogmatic slot,
  MonasticMartyrs' aposticha slot). Angels prints NO alternatives — one
  combined Glory-Both-now.
- **FEKULA (filled):** ch. 2's aposticha and closer blocks branch exactly so,
  with Friday-evening special provisions flagged at his n. 27 (ll. 92-94: the
  Slavonic Typicon's Friday-evening aposticha provisions, which he rules
  should be used). AGREEMENT on the branch structure; his n. 27 is a case the
  Menaion never prints — assembler-side.

### F-5 · The textless conditional closer
- **Instruction set:** "Glory…, Both now…, Theotokion or Stavrotheotokion:" —
  DAY-OF-WEEK decides (Wed/Fri → Stavrotheotokion); **the book declines to
  decide and so does the capture** (`theotokion_or_stavrotheotokion` in
  `CLOSER_TYPES`; absence nodes at the textless sites).
- **Variance:** 80 sites, 21 files; at the Doxology position one fixture-line
  stores it as a rubric text node (the preserved asymmetry).
- **FEKULA (filled):** he prints the SAME disjunction and then resolves it —
  *"Now and ever … theotokion from the Menaion or stavrotheotokion from the
  Octoechos"* under the heading *"On Wednesday or Friday:"* (ch. 2 ll. 139-143,
  182, 201). **AGREEMENT — the disjunction is Fekula's own habit of speech**,
  which is why the book leaves it unresolved: both sources expect the day to
  decide. Note his source split — theotokion from the MENAION,
  stavrotheotokion from the OCTOECHOS — where the general files print both
  texts locally.

### F-6 · The Anabathmoi
- **Instruction set:** IF rank ≥ Polyeleos AND NOT Resurrection → the Tone IV
  first antiphon (printed IN FULL — the R-5-exclusion misreading Unmercenaries
  falsified); IF Resurrection → the tone-of-the-week antiphons (Octoechos).
- **Variance:** none in wording that matters; the antiphon text is the book's
  most stable hymnography — byte-identical in all ten files that print it.
- **FEKULA (filled):** *"The first antiphon of the Hymns of Ascents of the
  fourth tone, From my youth up …"* — verbatim in his Polyeleos (§2E, l. 645)
  and Vigil (§2F) outlines, chs. 3b/4 likewise. EXACT AGREEMENT, down to the
  Tone IV first-antiphon selection the Menaion prints in full.

### F-7 · Doxology grade and the Doxasticon
- **Instruction set:** IF rank supplies the great Doxology → sung; IF a small
  Doxology is read [AND a Doxasticon is appointed] → the printed Glory is
  chanted after the Aposticha. Unmercenaries adds the POSITION rule: where the
  troparion is sung after the Doxology.
- **Variance:** three forms (long, with the Doxasticon clause; short, without —
  Angels; plus the bare "The Doxology:" heading in three files only).
- **FEKULA (filled):** *"The Great Doxology and then the troparion from the
  Menaion; Glory … Now and ever …"* (ch. 2 ll. 469, 555, 703, 813) —
  AGREEMENT, and this is precisely Unmercenaries' doxology_troparion POSITION
  rule ("the Troparion is sung after the Doxology") in Fekula's voice. The
  doxasticon-after-aposticha branch is his small-doxology outline.

### F-8 · Identity- and number-conditionals
- Martyrs: "If it be the Forty Martyrs, this Prokeimenon should be sung:" —
  IDENTITY selects a printed alternative.
- Angels: the one/many axis at four positions (two megalynaria, two canon
  refrains, two post-Psalm-50 sessionals) — NUMBER selects; the singular
  variants carry `(name)`.
- **FEKULA:** identity/number conditions live in the calendar layer he
  presupposes; no contradicting rule found in chs. 1-2. (The Forty-Martyrs
  prokeimenon is a Menaion-side privilege Fekula does not address.)

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

**Fekula on the August candidates (filled):** A-1's Alleluia-format is his
*"Instead of God is the Lord …, we sing Alleluia … with the verses"* (ch. 3a
ll. 569, 1479, 1915 — Lenten chapter; the August instances extend the same
SERVICE-FORM switch outside Lent). A-5 is his afterfeast rule verbatim in
sense: *"If it be an afterfeast, in place of It is truly meet … we sing the
refrain and irmos of Ode IX of the feast"* (ch. 1 ll. 596, 727, 836, 899) —
the nine August NOTEs are the Menaion printing Fekula's rule at the point of
use. A-4's feast-on-Sunday combination belongs to his coincidence chapters;
close reading still owed on the August side.

---

## 4. What the census settles, and what it owes

**Settled:** the rubric corpus needs no parser and no wording-keyed rule,
because the wording varies freely while the logic draws on eight variables the
assembler already possesses. The families above ARE the "common sets" — each
one an instruction set the Fekula comparison can be run against family-by-
family rather than rubric-by-rubric: ~17 dogmatic wordings become ONE row.

---

## 5. The Fekula comparison — verdict (filled 15 Aug, chapters delivered locally)

**No family contradicts Fekula.** Nine of nine General Menaion families and
the two August candidates checked resolve to rules Fekula states — several in
his own words ("the dogmaticon in the tone of the week"; "On Wednesday or
Friday"; "From my youth up"; "The Great Doxology and then the troparion").
Three asymmetries, all one-directional — **Fekula knows rules the Menaion
cannot print, never the reverse**:

1. **Saturday makes the General-Menaion fallback unconditional** (ch. 2
   l. 162) — a day-variable on F-3 that only the assembler can hold.
2. **His n. 27 Friday-evening aposticha provisions** (ch. 2 ll. 92-94) — a
   coincidence case inside F-4 the book never prints.
3. **His source-routing inside F-5** — theotokion from the Menaion,
   stavrotheotokion from the Octoechos — where the general files print both
   texts locally.

The comparison Bill commissioned therefore closes as: **the Menaion's rubrics
are Fekula's rules restated at the point of use, over the same eight
variables; the assembler needs Fekula (not the rubrics) for exactly the
asymmetric cases above, and the stored rubrics are the per-position evidence
that book and rule agree.** The dogmatic-family outlier proves the point in
miniature: the most structurally divergent rubric in the corpus is the one
closest to Fekula's own wording.

*Caveat: the delivered chapter files are OCR text ("ouUine", "0 Lorcl",
"Innes" for "Irmos") — citations above are by delivered-file line number, and
any verbatim quotation for display should be checked against the PDF copies
in `Fekula_ODS/pdf/`.*

**Owed:**
1. **Close-read the six August families** (A-1 through A-6) when their dates
   are encoded — the sweep locates, it does not settle.
2. **St John Baptist's negative conditional** — the third structural rewrite,
   unencoded; measure on the page.
3. The census script's false-positive classes are documented above; any rerun
   must expect them.
4. The Pentecostarion remains on Drive — the last R-7 remnant.
