# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

State at handoff: **v0.42.0**. **THE GENERAL MENAION IS COMPLETE — all 26
files encoded.** `general.js` holds **3657 stored strings · 3502 text nodes ·
0 errors**; all eight gates green. The encoding sweep is OVER: the next
session's work is the LEDGER, not a PDF — A-2 (sessionals shape) blocks the
first daily month and should be ruled first; then the octoechos roots wiring
(five cross-book dogmatic rows waiting), the R-9 reconciliation table, and
the four physical-book checks. Read bill_review_ledger.md before anything.
The rubric census's Fekula column is FILLED from the locally delivered
`Fekula_ODS/` chapters. `menaion_rubric_census.md` now distills
the rubric corpus to instruction-set families; read it before touching any
rubric-bearing question. V1 Menaion still drives the Hours assembler; V2 is a parallel
build until a Phase 5 cutover.

---

## THIS PROMPT DOES NOT ASSERT FACTS ABOUT UNENCODED FILES. MEASURE THEM.

The Heirarchs prompt said that file was "the only file printing (Names)
capitalised" — measured true this time, but only because the session measured
before relying on it. Keep the discipline: the counts and orderings below are
a scan of SHAPES, useful only for choosing what to open. The authoritative
placeholder list is `GENERAL_TAKES_NAME` in `schema_menaion_v2.js`; the
authoritative anything-else is the PDF.

---

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
Token: [BILL: paste]. Clone, scrub the token from the remote immediately, and
confirm the `hours-tool.jsx` version badge matches the `project_notes.md` header
before anything else.

**Read IN FULL before touching anything:** the four August 15 entries at the top
of `project_notes.md`, newest first. Then `menaion_v2_spec.md` §§0, 2, 5, 6.1,
6.2, 7, 16 (§16.5 carries the R-8/R-9 rulings and the R-9 naming ruling), and
`encoding_rule_v2.md` §§2, 2.1, 3 (live — it is **v2.12**).

**Read `bill_review_ledger.md` and ADD A ROW for anything this session
produces that needs Bill's eyes — a ruling, a physical-book check, a document
erratum. Same commit as the work that produced it. Resolved rows are struck
and dated, never deleted.**

**Run all EIGHT gates on the clean tree before editing anything.**

```
node tools/test_pointing_paths.mjs
node tools/test_sunday_vespers.mjs          # expect 78/78
node tools/validate_entries.mjs
node tools/validate_octoechos_v2.mjs
node tools/validate_menaion_v2.mjs          # expect 1747 nodes · 0 errors
node tools/validate_viewer_coverage.mjs     # octoechos 92⋈92 · menaion 99⋈99
node tools/test_menaion_v2_render.mjs       # expect 1825 strings · 0 missing
npm run build                               # DO NOT SKIP
```

**Owed from the v0.41.1 session, take before or beside the next file:**

1. **The reconciliation table** (R-9 prerequisite, approved 15 Aug): every
   `general.js` key × every `<c>` spec field × every V1 field the assembler
   reads (`hours-tool.jsx` — grep `menaionEntry.`/`vMenaion.`), one canonical
   name per movement under the source-nearest ruling (§16.5). Dispositions to
   Bill before any rename executes.
2. **Octoechos roots in `validate_menaion_v2.mjs`** — the register now holds
   its first `octoechos:` row (the Tone VI dogmatic, two bytes off the
   Octoechos copy) and the gate currently SKIPS it as a book not loaded.
   Wire the roots so cross-book rows are byte-checked.

**Then the next file.** The remaining singular/plural pairs —
`Nun`/`Nuns` (census: no "Let every breath" —
measure what stands there), `Hieromartyr`/`Heiromartyrs`, `HieroConfessor`,
`MonasticMartyr`, `Fools`, `Prophet`. `St John Baptist` (the NEGATIVE
conditional, 18pp, a subject file) and the other subject files (`Cross`,
`Holy Fathers`, `Theotokos`) LAST — `Holy Fathers` is a different shape, not
a shorter one. Two lessons stand: a reported census absence may be a
SPELLING (find the label), and AFTER EVERY ENCODE grep the corpus for
"===== PAGE" — a page marker survived into two shipped nodes before the
register byte-check exposed the class.

**Method, non-negotiable:**
- Transcribe against the printed page. **Do not build a classifier.**
- Extract with `pdfplumber`'s `dedupe_chars()`; **join lines ending in `-`
  WITHOUT a space**.
- **Verify the extraction before trusting it**: byte-match strings the new file
  shares with already-encoded ones. Heirarchs matched eight; Apostle and Apostles nine each.
- Key on the **full printed heading**, never the bare label.
- Tier is a **per-item source fact**. Devices mirror the source (§2.8).
- **Never deduplicate.** Heirarchs' kontakion diverges from itself between two
  print sites; its Beatitudes diverge from its canon at two of seven while
  copying the canon's sic exactly. The book is not internally consistent, and
  that is the finding, not a problem to smooth.
- **A zero is not a result** — an empty register row-count for a file is an
  unexamined gap, not a clean bill (see Monastics).
- Sic rows for what the page prints; extraction residue is noted, never
  registered. Register updates in the SAME COMMIT as the data revealing them.
- Full gates, commit by concern, token scrubbed after every push.
