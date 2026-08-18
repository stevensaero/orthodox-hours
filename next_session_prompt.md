# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

State at handoff: **v0.41.3**. `general.js` holds **1402 stored strings · 1342
text nodes · 0 errors** — Monastic, Monastics, Martyr, Martyrs, Unmercenaries,
Heirarch, Heirarchs, Apostle, Apostles, Angels complete across all three
services. **10 of 26.** V1 Menaion still drives the Hours assembler; V2 is a parallel
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

**Run all EIGHT gates on the clean tree before editing anything.**

```
node tools/test_pointing_paths.mjs
node tools/test_sunday_vespers.mjs          # expect 78/78
node tools/validate_entries.mjs
node tools/validate_octoechos_v2.mjs
node tools/validate_menaion_v2.mjs          # expect 1342 nodes · 0 errors
node tools/validate_viewer_coverage.mjs     # octoechos 92⋈92 · menaion 99⋈99
node tools/test_menaion_v2_render.mjs       # expect 1402 strings · 0 missing
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

**Then the next file.** `MonasticMartyrs` or `St John Baptist` — the two
files whose Polyeleos/Dogmatic rubrics the analysis §6.1 measured as
STRUCTURALLY REWRITTEN rather than reworded (`MonasticMartyrs` folds two
conditions into one two-clause rubric; `St John Baptist` phrases the
condition NEGATIVELY). Re-measure both on the page before encoding a line.
Note `St John Baptist` is also a SUBJECT file (18pp, the longest) — if the
session lacks room, take `MonasticMartyrs` with the remaining
singular/plural pairs first. Subject files (`Cross`, `Holy Fathers`,
`Theotokos`) LAST — `Holy Fathers` is a different shape, not a shorter one.
Angels' census lesson stands: a reported absence may be a spelling; find the
label before believing it.

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
