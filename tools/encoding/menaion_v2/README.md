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
7. **The OCA intake** (`encoding_rule_v2.md` §3.7): `npm run oca:intake` (add the
   docx folder if Bill has given new OCA texts). If the date has an OCA text, add
   its slots to `src/data/oca_hymns/slots.js`; the validator fails until you do.
   Every difference it prints is a finding: a reason in the test's `KNOWN` list,
   and an open question where the two books appoint different things. Never
   decide a match for Bill.
8. All gates, then commit by concern.

## Conventions the three November maps establish

- Vocabulary is general.js's (R-9). Sessional slots are positional lists (A-2).
- One entry per printed service (ruled 14 Nov 2026): a double service in one file
  is one entry with `saint` on its items; each further FILE of a date is a
  further entry of that date.
- A canonical hymn (`troparion`, `kontakion`) is entry-level only when the
  service has exactly ONE of that type and every print site byte-matches; the
  map asserts it. More than one troparion or kontakion (double services with
  separate troparia, forefeasts, afterfeasts): each goes at its print site in
  `troparia` / `kontakia` / `kontakia_ode3` / `kontakia_ode6`, tagged `saint`
  (ruled 14 Nov 2026; see d_11_19.py and d_11_20.py). A divergent site is stored at its
  own position (11-14's Liturgy troparion) with a variant row.
- Reading bodies are never stored: heading and citation only. A heading with no
  printed reference takes `citation_basis: 'identified'` and lands on the gate's
  worklist until the page is checked.
- A page that prints ONLY second sites of a canonical hymn (12-02A p8: the Liturgy
  troparion and kontakion again) is cited by their `verified_sites`; the gate counts them.
- "in the same melody" under a set of stichera: the hymn takes their tone, set by hand
  (`tone=4`) with a comment saying so (12-02, 12-03).
- A NEW MONTH: add its block to `DATES`; its loader line in `src/data/menaion_v2/index.js`;
  `<MONTH>_DATES` in the schema, enumerated from the folder listing, and into
  `SOURCE_FILES`; and the month in the month lists of `tools/test_menaion_v2_vespers.mjs`
  and `tools/test_menaion_v2_liturgy.mjs`. Add the dates to `tools/test_hours_mount.mjs`.
- The month `.js` is generated. Change the map and rebuild.
