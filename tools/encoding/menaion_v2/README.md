# Menaion V2 daily encoding (first used 14 November 2026)

The daily months are built from **hand-assigned line maps**. A person reads the
extracted page and writes, for every element, its key and the line range it
occupies. The library lifts the bytes of that range from the PDF. Nothing is
retyped and nothing is classified: the only mechanical acts are joining lines,
reading tier off the `*` marks, lifting a trailing `(Twice)` into `repeat`, and
reading a tone number out of a printed label.

## Per file

1. `MENAION_PDF_DIR=<folder> python3 extract.py MM-DD` and read all of it.
2. Write `d_MM_DD.py` (copy the nearest existing map). One `build()` returning
   `(src, entry, claimed_services)`.
3. Add the module to `DATES` in `build_month.py`; a lettered variant file is a
   further commemoration of the same date.
4. `python3 build_month.py 11`. It fails if any printed line is neither stored,
   marked as a structural heading, nor declared skipped (reading bodies, R-4).
5. Add the file's page count to `DAILY_PAGE_COUNTS` in the schema, and a
   manifest row (`DAILY_KEYS`) for any key used for the first time.
6. Sic rows for what the page prints wrong (confirm against a second
   extraction, `pdftotext -layout`, first). Recurrence rows. Open questions go
   through the ladder in `src/data/open_questions.js`.
7. All gates, then commit by concern.

## Conventions the three November maps establish

- Vocabulary is general.js's (R-9). Sessional slots are positional lists (A-2).
- A canonical hymn (`troparion`, `kontakion`) is entry-level only when every
  print site byte-matches; the map asserts it. A divergent site is stored at its
  own position (11-14's Liturgy troparion) with a variant row.
- Reading bodies are never stored: heading and citation only. A heading with no
  printed reference takes `citation_basis: 'identified'` and lands on the gate's
  worklist until the page is checked.
- The month `.js` is generated. Change the map and rebuild.
