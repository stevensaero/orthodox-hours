# The St. Sergius General Menaion — a measured analysis

**Written 15 August 2026, at v0.41.0.** Every figure here comes from one of two
places: the 26 PDFs in `Orthodox Hours/General_Menaion/`, extracted with
`pdfplumber`'s `dedupe_chars()`, or the live data in `src/data/menaion_v2/`.
**Nothing in this document was copied from `project_notes.md`, from a
next-session prompt, or from a spec.** Where those documents are quoted it is to
check them, and the check is stated.

That constraint is the point of the document. Three encoding sessions in a row,
a summary of this book was wrong where the book was right, and twice the wrong
summary was believed long enough to shape an encoding decision. §7 records each
case. §8 records one this document itself caught, in data committed four hours
before it was written.

---

## 1. What the book is

26 files, one per saint type or subject. Every one is a complete service running
**Vespers → Matins → Liturgy**, 12–18 pages.

| | measured |
|---|---|
| files | 26 |
| pages, total | 383 |
| shortest / longest | `Holy Fathers` 12pp / `St John Baptist` 18pp |
| `AT MATINS` heading | 26 / 26 |
| `AT (THE) LITURGY` heading | 26 / 26 |
| `AT VESPERS` or `AT GREAT VESPERS` heading | **0 / 26** |
| `AT LITTLE VESPERS` | **0 / 26** |
| `AT COMPLINE` | **0 / 26** |
| `AT THE LITIYA` | **1 / 26** — `Holy Fathers` only |
| Blessing of Loaves | **1 / 26** — `Holy Fathers` only |

**Vespers has no heading.** It is everything printed before `AT MATINS`. This is
a source fact, not a gap, and `general.js` keys the section `vespers` anyway.

**There is no Little Vespers and no Compline anywhere in the book.**
`menaion_v2_spec.md` §6.2 says these files "carry Little Vespers through
Liturgy". They do not. `encoding_rule_v2.md` §2.1 says "Vespers through
Liturgy", which is correct. Two project documents, one right and one wrong, on a
fact a single scan settles — the pattern §7 is about.

`GENERAL_PAGE_COUNTS` in `schema_menaion_v2.js` was checked against the PDFs
file by file: **all 26 agree.** The page-coverage tripwire is therefore
measuring against real counts.

---

## 2. Placeholders — the rule that was falsified twice

Case-sensitive scan of all 26 files:

```
(name)   445        (names)   31        (Names)    2
(N.)       0        (NAME)     0
```

**21 of the 26 print a placeholder. Five print none:** `Apostles`, `Cross`,
`Holy Fathers`, `St John Baptist`, `Theotokos`. Four of those are the subject
files; `Apostles` is a genuine plural that names nobody — **so plurality does
not predict this.**

Per-file, for the files that print more than one form or an unusual one:

| file | `(name)` | `(names)` | `(Names)` |
|---|---|---|---|
| `Heirarchs` | 0 | 1 | **2** |
| `Nuns` | 2 | 1 | 0 |
| `Unmercenaries` | 1 | 18 | 0 |
| `Heirarch` | **38** | 0 | **0** |

`GENERAL_TAKES_NAME` in `schema_menaion_v2.js` was checked against this scan in
both directions: **no file that prints none is listed, and no file that prints
one is missing.** The schema is correct. It is the prose summaries that were
not — see §7.1 and §7.4.

---

## 3. Structural census — where the files agree and where they do not

Counts are files, out of 26.

| element | files | absent in |
|---|---|---|
| `The Entrance` | 26 | — |
| `Exapostilarion` | 26 | — |
| `Ikos` | 26 | — |
| `great Doxology` rubric | 26 | — |
| `On the Praises` | **25** | **`Unmercenaries`** |
| `On “Lord, I have cried ...”` | 25 | `Apostles` |
| `Three Lessons` rubric | 25 | `Holy Fathers` |
| `Typika and Beatitudes` | 25 | `Angels` |
| `Song(s) of Ascent` | 25 | `Holy Fathers` |
| `Megalynarion` | 25 | `Holy Fathers` |
| `Communion Verse` | 25 | `Apostles` |
| `Let every breath` | 24 | `Nun`, `Nuns` |
| `Theotokion or Stavrotheotokion` | **21** | `Cross`, `Holy Fathers`, `St John Baptist`, `Theotokos`, `Unmercenaries` |
| bare `The Doxology:` | **3** | present only in `Heirarch`, `Martyrs`, `Unmercenaries` |
| `Selected Psalm verse` label | **0** | — |

Three things worth pulling out.

**`Unmercenaries` is the only file in the book with no Praises.** It prints a
Matins **Aposticha** instead. Measured across all 26, not merely against the
files encoded before it — so this is a property of the book, not an artifact of
encoding order.

**`Holy Fathers` is the structural outlier.** It is the shortest file (12pp) and
the only one missing the Three Lessons rubric, the Songs of Ascent and the
Megalynarion — while being the only one that prints a **Litiya** and a
**Blessing of Loaves**. It is not a shorter version of the others. It is a
different shape.

**`Selected Psalm verse` never appears**, though 25 files print a Megalynarion
with a verse beneath it. The label belongs to the daily Menaion, not this book.
Anything keyed on that label will silently match nothing here.

---

## 4. The canon

Every one of the 26 prints **Odes I, III, IV, V, VI, VII, VIII, IX**.
**Ode II appears in none of them** — verified by scanning every `ODE` heading in
the book, not by sampling.

`CANON_ODES` in the schema is nonetheless `[1..9]` with Ode II optional and
source-conditional, on the grounds that the Menaion prints Ode II elsewhere in
the year. That claim is `[unattested]` against this book and remains so; the
General Menaion neither supports nor refutes it.

---

## 5. Readings — the set is not what the first four files suggested

Every file's Vespers lesson headings, by book:

| lesson set | files |
|---|---|
| Wisdom ×3 | 8 — `Fools`, `HieroConfessor`, `Monastic`, `MonasticMartyr`, `MonasticMartyrs`, `Monastics`, `Nun`, `Prophet` |
| Isaiah + Wisdom ×2 | 6 — `Heiromartyrs`, `Hieromartyr`, `Martyresses`, `Martyrs`, `NunMartyr`, `Nuns` |
| Proverbs ×2 + Wisdom | 2 — `Heirarch`, `Heirarchs` |
| Isaiah + Wisdom | 2 — `Martyr`, `Unmercenaries` |
| Joshua + Judges + Isaiah | 1 — `Angels` |
| Genesis + Deuteronomy ×2 | 1 — `Holy Fathers` |
| Genesis + Ezekiel + Proverbs | 1 — `Theotokos` |
| Exodus + Proverbs + Isaiah | 1 — `Cross` |
| Isaiah + Malachi | 1 — `St John Baptist` |
| Isaiah only | 1 — `Martyress` |
| **New Testament** (1 John ×3) | 1 — `Apostle` |
| **New Testament** (1 Peter ×3) | 1 — `Apostles` |

Eleven books appear: Genesis, Exodus, Deuteronomy, Joshua, Judges, Proverbs,
Wisdom, Isaiah, Ezekiel, Malachi, and the Catholic Epistles. **The
apostolic files take their Vespers lessons from the New Testament** — 1 John for
`Apostle`, 1 Peter for `Apostles` — which no rule derived from the monastic and
martyric files would predict.

**Heading vocabulary is not uniform and must not be keyed on.** The same slot is
introduced as `THE READING IS FROM …`, `THE READING FROM …`, `A READING FROM …`,
`THE PROPHECY OF …` (`St John Baptist`), and by a bare book name. `Martyrs`
prints `THE READING IS FROM FROM THE WISDOM OF SOLOMON`. `Heirarch` prints
`FROM BOOK OF PROVERBS` on p2 and `FROM THE BOOK OF PROVERBS` on p3 — the
article appears and disappears inside one file.

**Whether a reference is printed varies by file, not by slot.** `Heirarchs`,
`Heiromartyrs`, `Angels`, `Holy Fathers` and `Theotokos` print parenthesised
references on their Vespers lessons; `Monastic`, `Heirarch`, `Martyr` and others
print none. Both branches of the reading renderer are exercised by this book.

---

## 6. Rubrics are families, not strings

### 6.1 The Polyeleos/Dogmatic rubric

`menaion_v2_spec.md` §6.2 records this as "a cross-book rubric, 18 instances in
18 files: *If the service is a Resurrection service sing the Dogmatic of the
Tone for that service*".

Measured: **24 files carry a rubric of this kind, in at least 17 distinct
wordings.** `Cross` and `Theotokos` carry none at all. The variation is not
cosmetic:

- **Tone varies** — I, II, III, IV, V, VI, VIII, all printed inline in the rubric.
- **Verb varies** — `sing the following Dogmatic` / `chant the following Dogmatic`.
- **Preposition varies** — `in Tone VI` / `of Tone VI` / `In Tone VIII`.
- **`Angels`** inverts the parenthetical: *sing **in the Tone of** the Dogmatic*.
- **`MonasticMartyrs`** restructures it entirely: *If the Celebration be with a
  Polyeleos, chant the Tone VIII Dogmatic of the Resurrection, If a Resurrection
  service, chant the Dogmatic in the Tone of the Week:*
- **`St John Baptist`** phrases the condition negatively: *If the Celebration
  does not coincide with a Resurrection Service …*
- **`Holy Fathers`** prints something else again, naming the Saturday-evening
  Vigil.

The `service ):` sic — a stray space before the closing parenthesis — appears in
**18 files**; four files (`Heirarchs`, `HieroConfessor`, `Martyr`,
`Martyresses`) close it up as `service):`. So even the *defect* is not uniform.

**Consequence for encoding: this rubric must be stored verbatim per file and
never matched by equality.** A rule keyed on the §6.2 string would miss 24 of
the 24 files that have one, because none of them prints exactly that string.

### 6.2 The `from the Typicon` conditional

Present in 23 of 26 (absent in `Cross`, `Holy Fathers`, `St John Baptist`).
At least **nine distinct wordings**, varying in three independent dimensions —
*Troparion* / *Kontakion* / *Troparion and Kontakion* / *Troparion and the
Kontakion*; `;` or `,` before the conditional; `but if there be none` or `if
there be none`. The most common single form covers 14 instances.

### 6.3 The conditional closer

`Glory ..., Both now ..., Theotokion or Stavrotheotokion:` — **78 instances
across 21 files**, printed as a label with no text beneath it. (§6.2 gives 80;
the file count of 21 is right, the instance count is 78.) `CLOSER_TYPES` carries
`theotokion_or_stavrotheotokion` for exactly this, and the encoder must not
resolve it — which of the two is sung is Fekula's decision at assembly.

### 6.4 Printed counts

Two files print a **number** in a stichera rubric: `Heirarch` (`these 4
Stichera`) and `Holy Fathers` (`6`). In `Heirarch` three stichera are printed
and the first carries `(Twice)` — 3 + 1 = 4. **The count reconciles with the
repeat device rather than contradicting it**, and is not a sic.

---

## 7. Where the summaries were wrong, and where the truth already lived

Each row was checked against the PDFs for this document.

| claim, and where it was made | measured | where the correct statement already was |
|---|---|---|
| **7.1** "Plural files carry no `(name)` placeholder" — `encoding_rule_v2.md` §2.1 before v2.12 | False. 21 of 26 print one; `Nuns` and `Unmercenaries` print two forms | Nowhere — the scan that "confirmed" it had searched only the singular token |
| **7.2** "There is a `Venerable.pdf`" — `encoding_rule_v2.md` §2.1 before v2.11 | False. The files are `Monastic.pdf` / `Monastics.pdf` | Nowhere — an invented filename, caught by listing the folder |
| **7.3** "These files supply troparion, kontakion, stichera" — `encoding_rule_v2.md` §2.1 before v2.11 | False. They are complete services, 12–18pp | Nowhere |
| **7.4** "`Heirarch` is the only file printing `(Names)` capitalised" — two successive next-session prompts | False. `Heirarch` prints `(name)` ×38 and `(Names)` ×0; the two `(Names)` are in **`Heirarchs`** | **`encoding_rule_v2.md` §2.1 and `menaion_v2_spec.md` §6.2 both said `Heirarchs` correctly.** The error existed only in the prompts |
| **7.5** "`If not a Resurrection Service, Sing the following:` — rubric stored, text NOT fetched (R-5)" — Unmercenaries prompt | False. The Songs of Ascent are printed in full, and the fixture already encoded them | The four already-encoded files, which had `anabathmoi` populated with text |
| **7.6** "A THIRD Doxology branch" — Unmercenaries prompt | False. It adds no Doxology form; it conditions **where the troparion is sung** | The page |
| **7.7** "`Martyr` is complete across all three services" — August 14 handoff | False. Its Vespers stopped after the lessons; 12 order keys where the template has 23 | Nowhere — every gate passed, which is why the page-coverage tripwire exists |
| **7.8** "These files carry Little Vespers through Liturgy" — `menaion_v2_spec.md` §6.2 | False. `AT LITTLE VESPERS` appears 0 times in 26 files | **`encoding_rule_v2.md` §2.1: "Vespers through Liturgy"** |
| **7.9** "A cross-book rubric, 18 instances in 18 files" (one string) — `menaion_v2_spec.md` §6.2 | Understated. 24 files, ≥17 distinct wordings, 2 files with none | Nowhere |
| **7.10** "80 instances across 21 of 26 files" (conditional closer) — `menaion_v2_spec.md` §6.2 | File count right, instance count 78 | — |
| **7.11** §6.1's three `shared.js` candidates | All falsified. The two ladders print in 0 of 140 daily files; the psalm verses that recur are not byte-invariant | Nowhere — settled by measurement on 15 Aug |

**The pattern is not that people were careless.** In 7.1, 7.4 and 7.9 the wrong
statement is a *compression* of a right one: a scan answered the question it was
asked, a file name lost its plural, a family of rubrics was named by one of its
members. Compression is what a summary is for, and it is exactly where the
information that would have falsified the claim gets dropped.

**Two practical rules follow, and both are now in the next-session prompt:**

1. A prompt should not assert facts about unencoded files. It should say where
   to measure them.
2. When a spec and a rule disagree, neither wins by seniority. Open the PDF.

---

## 8. What this document found

The cross-file heading census in §5 caught an encoding error committed the same
day, in `Heirarch`, and **every gate had passed on it.**

`Heirarch.pdf` prints **three** Vespers lessons — Proverbs, Proverbs, Wisdom.
Two were stored. The p2/p3 page break falls mid-word (`Blessed is the man who
sh|all keep my ways`), so the paragraph segmenter never started a new unit at the
p3 heading and lesson 2 was absorbed into lesson 1.

**The page-coverage tripwire did not catch it, and could not have.** p3 *was*
cited — by the locus of the reading that had swallowed the other. That check
proves a page was *read*; it does not prove everything on it was *encoded*.

This is 7.7 in a smaller register, found by a different instrument. The general
lesson: **a per-file check cannot find a missing element; only a cross-file
comparison can, because it has something to compare against.** The census that
found it took one scan of 26 files.

The correction also improved the data. `Heirarchs.pdf` prints the same three
lessons **with** references — `(3, 13-16; 8, 6)`, `(10, 31-32 ; 11, 1-10)`,
`(4, 7-15.)` — so the plural file supplies citations for the singular file's
citationless headings. Those are recorded as `identified` with the cross-file
evidence in each `provenance_note`, not silently promoted to `derived`.

---

## 9. The encoded data, as it stands

Read off `src/data/menaion_v2/` at v0.41.0, not from any note.

**6 of 26 files complete** across Vespers, Matins and Liturgy: `Monastic`,
`Monastics`, `Martyr`, `Martyrs`, `Unmercenaries`, `Heirarch`.

```
802 text nodes      Tier 1: 482      Tier 2: 320
838 stored strings (text nodes + reading headings), 0 missing at render
 20 absence nodes, all not_printed_in_source / close_reading
  0 heading_scan absences — nothing is declared absent without the page being read
```

Order keys per service, which is the closest thing to a shape fingerprint:

| file | Vespers | Matins | Liturgy | pages cited |
|---|---|---|---|---|
| `Monastic` | 23 | 46 | 12 | 1–15 |
| `Monastics` | 23 | 54 | 12 | 1–14 |
| `Martyr` | 23 | 50 | 12 | 1–15 |
| `Martyrs` | 23 | 59 | 13 | 1–14 |
| `Unmercenaries` | 23 | 54 | 12 | 1–14 |
| `Heirarch` | 24 | 55 | 12 | 1–16 |

Every page of every claimed file is cited. **Vespers is stable at 23–24 keys
across all six files; Matins ranges 46 to 59.** The variation is real — Matins
is where these files differ from each other — and it is the reason no
`SECTION_RULES` count has been added for it.

Registers: **79 recurrence rows** (68 `identical`, 11 `variant`, 0 `family`) and
**40 sic rows**.

| file | recurrence rows | sic rows |
|---|---|---|
| `Monastic` | 12 | 4 |
| `Monastics` | 12 | **0** |
| `Martyr` | 16 | 1 |
| `Martyrs` | 25 | 10 |
| `Unmercenaries` | 21 | 14 |
| `Heirarch` | 18 | 11 |

**`Monastics` has no sic rows.** It is not obviously a cleaner file than the
others, and it is the file whose Beatitudes diverge from its canon at three of
seven positions — so it is the one file where the transmission is known to be
imperfect and nothing has been registered. **Treat that zero as an unexamined
gap, not as a clean bill.** It is the same shape as 7.7: an absence that looks
like a result.

---

## 10. The anti-deduplication evidence, restated from the data

`menaion_v2_spec.md` §2.3 forbids deduplicating texts across print sites. The
General Menaion has now produced four independent arguments for it, and they get
stronger as the sample grows:

1. **`Monastic` vs `Monastics`** — the Beatitudes reprint the canon troparia
   byte-identically in one file and diverge at three of seven in the other.
   Same press, same structure, same position, opposite behaviour.
2. **`Martyrs` vs `Unmercenaries`** — the same 431-character stavrotheotokion,
   printed at different positions in the two files, diverging at **one
   preposition**: `at Thy voluntary crucifixion` against `of Thy voluntary
   crucifixion`. A deduplicating encoder matches 430 of 431 characters.
3. **`Unmercenaries` alone** — its troparion prints at four sites, two with `**`
   and two with a single `*`. A penultimate marker is a singable fact.
4. **`Heirarch` alone, and this is the strongest** — it prints three texts twice
   each *within itself* and gets two of them wrong. The Doxasticon repeats byte
   for byte; the same psalm verse is `the World` at the Megalynarion and
   `the world` at the Liturgy; the same text is `judgement` at Matins and
   `judgment` at the Liturgy. **No second file is needed to make the argument.**

The Beatitudes tally is now **four files identical to one variant**. Four-to-one
is a stronger case for collapsing them than three-to-one was, and it is the same
wrong case: `Monastics` still diverges, and would still be silently rewritten.

---

## 11. Extraction, measured

`dedupe_chars()` is the correct setting and is not sufficient by itself.

Across the 26 files it leaves **10 residual doubled-glyph runs in 7 files**:

```
Apostle 1   Heirarch 1   Hieromartyr 3   Nun 1
Nuns 1      St John Baptist 2            Unmercenaries 1
```

Nine of the ten are `ODE` headings (`OODDEE`, `VVIIII`, `VVIIIIII`). **The
residue is concentrated in display headings, which is where a segmenter keyed on
headings is most vulnerable** — and §8 is an instance of a heading being missed,
though for an unrelated reason.

Two extraction rules follow, both learned by getting them wrong:

- **Join lines ending in `-` without a space.** The book carries only closed-up
  compounds (`soul-destroying`, `wonder-workers`); a space-join invents
  `soul- destroying`, which no gate checks for.
- **Do not trust a page break to fall between elements.** §8.

**Verify the extraction before trusting it.** The reliable method is to
byte-match strings the new file shares with already-encoded ones: the
`Unmercenaries` encode matched ten across three files, `Heirarch` matched six.
That, and not inspection, is what proves the pipeline on a given file.

Two texts are byte-identical in all six encoded files and are the natural
control: the Tone IV first antiphon (`From my youth`) and its pair
(`Ye haters of Zion`), with `In the Holy Spirit` as the Glory/Both-now.

---

## 12. What remains

20 files unencoded. On the measurements above, the order that front-loads risk:

**Take next, cheaply** — `Heirarchs` (14pp), the pair to `Heirarch` and the only
file printing `(Names)`. Its printed lesson references also settle three
`identified` citations in `Heirarch`.

**Take with room** — `Angels` (Joshua/Judges/Isaiah, no Beatitudes),
`Apostle` and `Apostles` (New Testament Vespers lessons, and `Apostles` prints
neither `Lord, I have cried` nor a Communion Verse), `MonasticMartyrs` and
`St John Baptist` (structurally rewritten Dogmatic rubrics), `Nun` and `Nuns`
(no `Let every breath`).

**Take last, and expect a ruling** — the four subject files. `Holy Fathers` is
the sharpest: 12 pages, no Three Lessons rubric, no Songs of Ascent, no
Megalynarion, and the **only** Litiya and Blessing of Loaves in the book. It is
not a short saint-type file and should not be encoded as one.

Two corrections are owed to the specs from §1, §6.1 and §6.3, and are not made
here because this document does not amend other documents:

- `menaion_v2_spec.md` §6.2 — "Little Vespers through Liturgy" → Vespers
  through Liturgy; the dogmatikon rubric is a family of ≥17 wordings across 24
  files, not one string in 18; the conditional closer count is 78, not 80.
- `menaion_v2_spec.md` §6.1 — the three `shared.js` candidates are falsified,
  which `shared.js`'s own header now records.
