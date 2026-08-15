# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

Supersedes the Unmercenaries prompt this file carried.

State at handoff: **v0.40.0**. `general.js` holds **696 stored strings · 666
text nodes · 0 errors** — `Monastic`, `Monastics`, `Martyr`, `Martyrs`,
`Unmercenaries` complete across all three services. **5 of 26.** V1 Menaion
still drives the Hours assembler; V2 is a parallel build until a Phase 5
cutover.

---

## `shared.js` FIRST. It has now been deferred three sessions.

It was owed on 14 Aug, owed on 15 Aug, and owed again after Unmercenaries. Each
session it lost to a file that looked more interesting. It has **no file, no
loader, and no browser axis**, and warning 8 says the coverage gate cannot see
that third gap — `general.js` was validated, gated, and completely invisible in
the browser until an axis was added for it. **Add all three in ONE change**, and
do it before encoding anything else, or it will be owed a fourth time.

## Then `Heirarch` (16pp, 10 novel), then `Heirarchs` (14pp, 6 novel)

`Heirarch` is **the only file in the book printing `(Names)` capitalised** — the
case that actually exercises the corrected placeholder rule rather than its
negative. If `name_substituted` ever keys to `(name)` or `(names)` on a fallback
drawn from it, the v2.12 correction was mis-applied.

Subject files (`Cross`, `Holy Fathers`, `St John Baptist`, `Theotokos`) LAST,
in a session with room. `Holy Fathers` at 18 novel rubrics and only 12 pages is
largely cross-references into the Octoechos and will need its own ruling.

---

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
Token: [BILL: paste]. Clone, scrub the token from the remote immediately, and
confirm the `hours-tool.jsx` version badge matches the `project_notes.md` header
before anything else.

**Read IN FULL before touching anything:** the two August 15 entries at the top
of `project_notes.md` — the second one first. Note especially **THE HANDOFF
PREDICTED FOUR THINGS, TWO WERE WRONG, AND IT MISSED THE BIGGEST**, and the
**STANDING WARNING** list. Then `menaion_v2_spec.md` §§2, 5, 6.2, 7, and
`encoding_rule_v2.md` §§2, 2.1, 3 (live — it is **v2.12**).

**Run all EIGHT gates on the clean tree before editing anything.**

```
node tools/test_pointing_paths.mjs
node tools/test_sunday_vespers.mjs          # expect 78/78
node tools/validate_entries.mjs
node tools/validate_octoechos_v2.mjs
node tools/validate_menaion_v2.mjs          # expect 666 nodes · 0 errors
node tools/validate_viewer_coverage.mjs     # octoechos 92⋈92 · menaion 99⋈99
node tools/test_menaion_v2_render.mjs       # expect 696 strings · 0 missing
npm run build                               # DO NOT SKIP
```

**Task 1: `shared.js` — file, loader, browser axis, in one change.** See warning
8. A coverage gate proves every FIELD is registered; it does NOT prove every
TABLE is reachable.

**Task 2: `Heirarch.pdf` (16pp, 10 novel rubrics).** Read them BEFORE encoding a
line and decide what the schema needs; do not bend them into the nearest
existing key.

**Do not trust the novel-rubric summary over the page.** The Unmercenaries
session is the reason this line is here: of five rubrics the handoff called
load-bearing, two were misdescribed (both were said to be R-5 cross-book
exclusions; both print their text in full and the fixture already had slots for
them), one was misdiagnosed (the "third Doxology branch" adds no Doxology form —
it conditions where the TROPARION is sung), and the file's largest divergence —
a Matins that prints an APOSTICHA and no PRAISES — appeared in no summary at
all. The scan counts SHAPES. It does not read them.

**Method, non-negotiable:**
- Transcribe against the printed page. **Do not build a classifier.**
- Extract with `pdfplumber`'s `dedupe_chars()`. **Join lines ending in `-`
  WITHOUT a space** — the corpus carries only closed-up compounds
  ("soul-destroying", "wonder-workers"), and a space-join silently invents an
  artifact the gate does not check for.
- **Verify the extraction before trusting it**: byte-match a handful of strings
  the new file shares with already-encoded files. Unmercenaries matched ten
  across three files, which is what proved the pipeline rather than the eye.
- Key the extractor on the **full printed heading**, never the bare label.
- Tier is a **per-item source fact**, never a property of a slot.
- **Never deduplicate** across print sites. Beatitudes now run three files
  identical and one variant — three-to-one is the ratio that makes
  deduplication look proven, and it would silently rewrite Monastics.
- Absence is **declared with a basis**, never inferred.
- A divergence in a reading **body** is unregistrable by design (R-4 stores no
  reading text). Put it in a `provenance_note`.
- A **printed citation that does not match the printed body** now has a home:
  `citation_disputed` (§2.11). Keep the reference verbatim, store NO resolvable
  citation, record the measurement, let the gate surface it. Do not pick a side.
- A sic may sit on a text node, a reading **heading**, or a printed
  **citation** — all three resolve.
- The recurrence register records HYMN and READING pairs only; repeated rubric
  boilerplate is deliberately absent.
- Source is a mounted folder: `Orthodox Hours/General_Menaion/` and
  `Orthodox Hours/Menaion - St. Sergius/`.

**The two checks that exist because they were missing** — the page-coverage
tripwire (hard-fails if any page of a claimed file has no `src.locus` citing it;
do not silence it by inventing a locus) and the render gate (SSR-renders every
entry and asserts every stored string is visible; its limit is that
`renderToString` does not run effects, so the harness passes data as props).

**Owed:**
1. **Re-verify the completed files against the render gate's limits.**
2. **Bill to confirm the Romans/1-Corinthians heading in `Unmercenaries.pdf`
   p13 against the physical book.** The heading names Romans; the body is
   1 Corinthians 12:27-31, 13:1-8 (0.944 vs 0.262). Until confirmed the FINDING
   stands and the reading offers no link.
3. **21 General Menaion files remain** after `Heirarch`.

Present a plan and get my go-ahead before modifying files or running terminal
commands.
