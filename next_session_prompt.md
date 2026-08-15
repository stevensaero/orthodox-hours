# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

State at handoff: **v0.41.0**. `general.js` holds **837 stored strings · 802
text nodes · 0 errors** — `Monastic`, `Monastics`, `Martyr`, `Martyrs`,
`Unmercenaries`, `Heirarch` complete across all three services. **6 of 26.**
`shared.js` exists, is loaded, is reachable in the browser, and is **empty by
measurement** (see its header). V1 Menaion still drives the Hours assembler; V2
is a parallel build until a Phase 5 cutover.

---

## THIS PROMPT DOES NOT ASSERT FACTS ABOUT UNENCODED FILES. MEASURE THEM.

Three sessions running, a summary of the source was wrong where the source was
right:

- The Unmercenaries prompt called two rubrics R-5 cross-book exclusions. Both
  print their text in full.
- The same prompt called a conditional a "third Doxology branch". It adds no
  Doxology form; it conditions where the *troparion* is sung.
- The Heirarch prompt — **written by the previous session, after both of those
  were found** — said `Heirarch` prints `(Names)` capitalised. It prints
  `(name)` 38 times and `(Names)` never; the `(Names)` are in `Heirarchs`.
  `encoding_rule_v2.md` §2.1 and `menaion_v2_spec.md` §6.2 had it right the
  whole time.

So: novel-rubric counts below are a **scan of SHAPES**, useful only for choosing
what to open. Everything else, measure before relying on it. The authoritative
placeholder list is `GENERAL_TAKES_NAME` in `schema_menaion_v2.js`, and the
authoritative anything-else is the PDF.

---

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
Token: [BILL: paste]. Clone, scrub the token from the remote immediately, and
confirm the `hours-tool.jsx` version badge matches the `project_notes.md` header
before anything else.

**Read IN FULL before touching anything:** the three August 15 entries at the top
of `project_notes.md`, newest first. Then `menaion_v2_spec.md` §§2, 5, 6.1, 6.2,
7, and `encoding_rule_v2.md` §§2, 2.1, 3 (live — it is **v2.12**).

**Run all EIGHT gates on the clean tree before editing anything.**

```
node tools/test_pointing_paths.mjs
node tools/test_sunday_vespers.mjs          # expect 78/78
node tools/validate_entries.mjs
node tools/validate_octoechos_v2.mjs
node tools/validate_menaion_v2.mjs          # expect 802 nodes · 0 errors
node tools/validate_viewer_coverage.mjs     # octoechos 92⋈92 · menaion 99⋈99
node tools/test_menaion_v2_render.mjs       # expect 837 strings · 0 missing
npm run build                               # DO NOT SKIP
```

**Task: `Heirarchs.pdf` (14pp).** The pair to the file just encoded, and the one
that actually prints `(Names)` capitalised — measure it yourself before relying
on that. Read its rubrics against the printed page BEFORE encoding a line and
decide what the schema needs; do not bend them into the nearest existing key.

Then the rest of the singular/plural pairs. Subject files (`Cross`,
`Holy Fathers`, `St John Baptist`, `Theotokos`) LAST, in a session with room.

**Method, non-negotiable:**
- Transcribe against the printed page. **Do not build a classifier.**
- Extract with `pdfplumber`'s `dedupe_chars()`, and **join lines ending in `-`
  WITHOUT a space** — the corpus carries only closed-up compounds. Expect
  roughly one doubled-heading residue per file that `dedupe_chars()` misses;
  transcribe it correctly and NOTE it, do not register it as a sic (the page
  prints it correctly — the doubling is the extractor's).
- **Verify the extraction before trusting it**: byte-match strings the new file
  shares with already-encoded ones. Unmercenaries matched ten across three
  files; Heirarch matched six. That, not the eye, is what proves the pipeline.
- Key the extractor on the **full printed heading**, never the bare label.
- Tier is a **per-item source fact**, never a property of a slot.
- **Never deduplicate.** Heirarch settles this without needing a second file:
  it prints three texts twice each within itself and two of the three diverge —
  at one capital letter and at one spelling. Beatitudes now run four files
  identical to one variant, and the variant is still real.
- Absence is **declared with a basis**, never inferred.
- A divergence in a reading **body** is unregistrable by design (R-4).
  `provenance_note`, not a register row.
- A **printed citation that does not match the printed body** has a home:
  `citation_disputed` (§2.11). Keep the reference verbatim, store NO resolvable
  citation, record the measurement, let the gate surface it. Do not pick a side.
- A sic may sit on a text node, a reading **heading**, or a printed
  **citation** — all three resolve.
- `verified_sites` entries are `{locus, tone?, repeat?}` and are key-checked.
- **Adding a row to `shared.js` requires clearing the bar in its header** —
  psalm-verse or prokeimenon class, byte-identical at EVERY site, Menaion-wide
  rather than merely common to one saint type. All three §6.1 candidates were
  measured against 140 files and falsified; do not re-propose them from the
  spec's candidate list without re-measuring.

**The three checks that exist because they were missing** — the page-coverage
tripwire, the render gate (its limit: `renderToString` does not run effects, so
the harness passes data as props), and the no-display-copies lint, which will
fail the build if a release note quotes a canonical string verbatim.

**Owed:**
1. **Re-verify the completed files against the render gate's limits.**
2. **Bill to confirm the Romans/1-Corinthians heading in `Unmercenaries.pdf`
   p13** against the physical book. The heading names Romans; the body is
   1 Corinthians 12:27-31, 13:1-8 (0.944 vs 0.262). Until confirmed the FINDING
   stands and the reading offers no link.
3. **Bill to confirm the two `Heirarch.pdf` paremia spans** (Proverbs and
   Wisdom). Both are composite readings stitched from non-contiguous spans, so
   neither derives from a contiguous match; both citations are `identified` and
   sit on the worklist.
4. **20 General Menaion files remain** after `Heirarchs`.

Present a plan and get my go-ahead before modifying files or running terminal
commands.
