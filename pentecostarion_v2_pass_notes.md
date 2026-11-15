# Pentecostarion V2 — notes for a fresh pass

Written 14 Nov 2026 during the Menaion V2 wire-in, at Bill's request, so the
Pentecostarion gets the same fresh look when its turn comes. These are things
SEEN in the code and data, plus what the Menaion work taught. Nothing here has
been fixed. Measure before trusting any of it.

## 1. Where the Pentecostarion stands today

- Data: `src/data/pentecostarion.js`, V1 shape, 24 entries keyed by days after
  Pascha: P+19, P+35 through P+56, P+63. About 33 days of the season have no
  entry. Bright Week shows a placeholder ("Paschal Hours ... in development").
- Code: its logic was CARRIED OVER UNCHANGED in the V2 wire-in and is marked
  wherever it sits: `src/lib/hours-propers.js` (one block) and four blocks in
  `assembleVespers` (Lord I call, Litiya, Aposticha, troparia), each headed
  "PENTECOSTARION — unchanged ... not yet reworked".
- The rules: Fekula ODS 2nd ed. ch. 4 (project docs `fekula_chapter_4.txt`,
  `fekula_pascha_extract.txt`). ODS 3rd ed. vol. III covers the Menaion only,
  so it does not help here.

## 2. The kontakion at Vespers (the concern that prompted these notes)

No kontakion is sung at Vespers. In the Menaion work this was confirmed three
ways (every Vespers order in Fekula ch. 1 and ch. 2; none of 80 kontakion
headings in 45 OCA texts is under Vespers) and V1 was found putting the
saint's kontakion at Both now on every non-Sunday.

The Pentecostarion path still does it. After the troparia it falls through to
`else if (kont && !vespersKontakionSuppressed)` and shows "Kontakion (Both
now…)". The only thing that stops it is a data flag, `vespers_kontakion:
false`, and that flag is set on ONE entry of 24 (P+56, All Saints). Wherever no
third troparion or dismissal theotokion fills the place, the other 23 show a
kontakion. Check Fekula ch. 4's "For the troparia" lines for each kind of day
and an OCA text from the season. Expect it to be wrong.

Note the shape of the mistake: a wrong default, patched for one date by a flag
in the data. Look for the same shape elsewhere (section 4).

## 3. Errors found in V1's ordinary-time logic that may have twins here

Each was found by reading Fekula's own section for the case, not by testing.

- **Sunday kontakion at the Hours was reversed.** V1: Sunday kontakion at the
  1st and 6th Hours, the Menaion's at the 3rd and 9th. Fekula: simple and
  six-stichera Sundays read ONLY the Sunday kontakion; doxology and above read
  the Menaion's at the 1st and 6th. The Pentecostarion block has its own
  kontakion-by-Hour logic (`hours_kontakion`, `kontakion_ode3`,
  `kontakion_ode6`, and a "Doxology+ Menaion saint at the 3rd and 9th" override
  citing a "§4A footnote"). Re-derive all of it from ch. 4, section by section
  (4A, 4B6, 4B13, 4B17 at least).
- **Forefeast and afterfeast days had no rule.** The Pentecostarion season is
  full of them (afterfeasts of Pascha, Mid-Pentecost, Ascension, Pentecost).
- **Glory and Both now were calculated, not read.** The Pentecostarion blocks
  are now the only callers of `ch6WeekdayBothNow` / `pushCh6BothNow` (2 calls).
  Only 10 of 24 entries carry a typed `lic_theotokion`. Apply PRINTED FIRST:
  what the page prints; then a rubric's named tone; then the rule.
- **Counts were typed, not read.** `stichera_lord_i_call_count` is hand-entered
  on all 23 entries. In V2 the count is the page's own number and its repeats.
- **A rank word is not a count.** On 22 Nov the OCA sang 4 + 3 + 3 though our
  rank word implied 3 + 3 + 4. Read the page's numbers.
- **Note 25 (nothing of the feast at the 9th Hour of an apodosis)** was found
  to be the authors' inference, contradicted by all 8 apodosis entries in vol.
  III. The season has apodoses (Pascha, Ascension, Pentecost); do not apply the
  note without evidence that it is done.

## 4. Code-path switches stored as data

V1 lets the data steer the assembler. Each of these is a place where a rule
was not written down and a flag was added instead:

- `hours_format` — 9 values (`pentecostarion_weekday`, `pentecostarion_sunday`,
  `ascension`, `pentecost`, `holy_spirit_day`, `apodosis_pascha`,
  `apodosis_ascension`, `apodosis_pentecost`, `all_saints_sunday`, and
  `pentecostarion_saturday_reposed`); P+63 has none. The assembler branches on
  the string.
- `menaion_set_aside` — true on 8 entries. It decides whether the Menaion saint
  is heard at all. In V2 that is a rule about the day (Fekula), not a flag.
- `vespers_kontakion`, `heavenly_king_omitted` (15 entries, with an offset-range
  fallback in code), `heavenly_king_restored`, `it_is_truly_meet_suppressed`,
  `small_doxology_read`, `vespers_alleluia_replaces_prokeimenon`,
  `trisagion_replacement`, `has_litya`, `has_paroemias`, `has_polyeleos`,
  `has_great_doxology`, `magnificat_sung`.
- 41 of the 104 field names in the file are used on exactly ONE entry. That is
  a schema grown by exception. V2 needs named positional slots that hold what
  the page prints (as Menaion V2's `DAILY_KEYS` do), so a new day needs no new
  field.

## 5. What the Menaion V2 method requires here

1. **Whole days, every printed line** (never a partial capture). The V1
   entries were encoded field by field; assume they are partial until measured
   against the PDFs with a page-coverage check.
2. **Sources on Bill's machine**, as for the Menaion: the St. Sergius
   Pentecostarion PDFs (the project instructions still give a Drive path,
   `orthodox_liturgics/Pentecostarion/st-sergius-pdf/`; Drive is retired).
3. **Text lifted by script from the PDF**, with hand-assigned line maps and a
   build that fails on any unclaimed line.
4. **Readings: heading and citation only** (R-4). V1 holds `paroemia_1..3`
   text on 4 entries.
5. **An answer key.** The OCA texts gated Vespers for the Menaion (97 checks).
   The present OCA folder runs 23 Aug to 9 Dec 2026 and has NO document from the
   Pentecostarion season. Collect the season's OCA texts (2027, or back issues)
   BEFORE the rewrite, so the rules can be checked as they are written.
6. **Plans, not shims.** The adapter returns what each place takes; plain
   modules under `src/lib/` lay it in; gates run that same code and a mount
   test reads the page.

## 6. Things particular to this season

- **Three books at once.** Pentecostarion, Menaion and (for tones) the
  Octoechos interleave. The present blocks mix all three in one `if` chain,
  which is why they could not be cut cleanly. Decide the order of authority per
  kind of day first, from Fekula ch. 4.
- **Movable Sundays that displace the Menaion.** Holy Fathers of the First
  Council is P+42, not 8 June; All Saints is P+56; All Saints of North America
  and the like are `namedDay` overrides living in a third place. One mechanism,
  not three.
- **The tone of the week** in Paschaltide and how the Sunday Octoechos material
  enters; the Paschal hypakoe already moved into `pentecostarion.js`.
- **The Paschal frame.** "Christ is risen" replacing the usual beginning
  (P+7 to P+38), O Heavenly King omitted (P+39 to P+48), the Paschal Hours of
  Bright Week. These are FRAME rules by date; keep them out of the hymn data.
- **The Saturday of the Reposed** (P+48) and its Alleluia in place of the
  prokeimenon.
- **The temple** troparion and sticheron at the Litiya, and the dismissal, read
  Pentecostarion fields too.
- **Second use of the same hymn.** The Menaion capture stores a hymn once per
  print site and compares sites; expect the feast's troparion to be printed on
  many days of an afterfeast with small differences (it was, in November).

## 7. Order of work suggested

1. Collect sources and OCA texts for the season.
2. Read Fekula ch. 4 through and write the rules as a table by kind of day
   BEFORE looking at the code; list where V1's blocks disagree.
3. Capture one whole day (a plain afterfeast weekday), one Sunday and one great
   feast in V2 shape; settle the schema on those three.
4. Rewrite the five marked blocks against plans; delete the flags in section 4
   as each rule lands.
5. Gate against the OCA texts; mount test; then the rest of the season.
