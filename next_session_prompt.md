# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

Supersedes the Apostle/Apostles prompt this file briefly carried.

State at handoff: **v0.39.1**, deploy run #937 **green**. `general.js` holds
**556 stored strings · 532 text nodes · 0 errors** — `Monastic`, `Monastics`,
`Martyr`, `Martyrs` complete across all three services. **4 of 26.** V1 Menaion
still drives the Hours assembler; V2 is a parallel build until a Phase 5 cutover.

---

## Which file next, and why — measured, not guessed

Every remaining file was scanned for **structural rubrics absent from the
four-file fixture** (tone numbers, Spec. Mel. wording and inline text normalized
away, so this counts SHAPE and not wording). Novel-rubric count:

| file | novel | file | novel |
|---|---|---|---|
| **Holy Fathers** | **18** | Fools · NunMartyr | 7 |
| **Theotokos** | **15** | Heirarchs · Nuns · Prophet | 6 |
| **Unmercenaries** | **14** | Apostle · Hieromartyr · MonasticMartyr(s) · Nun | 5 |
| **St John Baptist** | **13** | Apostles | 4 |
| Angels · Cross · Heirarch · Heiromartyrs | 10 | HieroConfessor · Martyress(es) | 3 |

Three of the four SUBJECT files top the table, which confirms the standing
instinct to leave them for a session with room. But the scan found something the
instinct did not: **`Unmercenaries` is an ordinary saint-type file that is more
structurally divergent than two of the four subject files**, and it was sitting
unremarked in the middle of the batch.

**Order ruled: `Unmercenaries` first, then `Heirarch` / `Heirarchs`.** This
front-loads the three highest-divergence saint-type files while the schema is
still cheap to change. The alternative — `Apostle`/`Apostles`, at 5 and 4 novel
rubrics — banks two files fast but teaches almost nothing, and encoding a dozen
cheap files against a template that cannot express a conditional Doxology branch
means discovering that on file nineteen and re-encoding backwards.

**Accept that this may end in a schema change and no completed file.** That is
the trade, taken deliberately.

---

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
Token: [BILL: paste]. Clone, scrub the token from the remote immediately, and
confirm the `hours-tool.jsx` version badge matches the `project_notes.md` header
before anything else.

**Read IN FULL before touching anything:** the August 15 entry at the top of
`project_notes.md` — especially **THE HANDOFF WAS WRONG ABOUT MARTYR**, the two
gates that found it, and the **STANDING WARNING** list, now nine falsified
rules. Then `menaion_v2_spec.md` §§2, 5, 6.2, 7, and `encoding_rule_v2.md`
§§2, 2.1, 3 (live — it is **v2.12**; §2.1's placeholder rule was corrected on
15 Aug and any summary of it you hold is wrong).

**Run all EIGHT gates on the clean tree before editing anything.**

```
node tools/test_pointing_paths.mjs
node tools/test_sunday_vespers.mjs          # expect 78/78
node tools/validate_entries.mjs
node tools/validate_octoechos_v2.mjs
node tools/validate_menaion_v2.mjs          # expect 532 nodes · 0 errors
node tools/validate_viewer_coverage.mjs     # octoechos 92⋈92 · menaion 99⋈99
node tools/test_menaion_v2_render.mjs       # expect 556 strings · 0 missing
npm run build                               # DO NOT SKIP
```

**Task: `Unmercenaries.pdf` (14pp).** Read its fourteen novel rubrics BEFORE
encoding a line, and decide what the schema needs; do not bend them into the
nearest existing key. The ones that look load-bearing:

- **`If the service be with the Great Doxology, but not a Resurrection
  service:`** — a THIRD Doxology branch. The template has the great-Doxology
  rubric and the small-Doxology fallback; it has no way to express this.
- **`After the 1st Kathisma, the Sessional Hymn:` / `After the 2nd Kathisma,
  The Sessional Hymn`** — a different sessional naming scheme from the
  fixture's "After the 1st chanting of the Psalter". Probably the same slot;
  **verify rather than assume**, and store the label verbatim either way.
- **`If not a Resurrection Service, Sing the following:`** and **`If the
  Celebration be with a Polyeleos, sing the Theotokion of the Resurrection`**
  — more cross-book conditionals pointing at the Octoechos. Rubric stored,
  text NOT fetched (R-5), exclusion register updated.
- **Reading headings carry parenthesised citations here** (`THE READING IS FROM
  ISAIAH ()`, `THE EPISTLE TO THE ROMANS. ()`), unlike the martyr files. That
  means `citation_verbatim` is populated for the Vespers lessons for the first
  time — worth checking the reading renderer handles both branches, since it
  was only just fixed for the citationless case.
- **Placeholders: `(names)` ×18 AND `(name)` ×1.** One of only three files that
  mix both tokens. Store each verbatim as printed.

Then `Heirarch` (16pp, 10 novel) and `Heirarchs` (14pp, 6 novel). `Heirarch` is
the only file in the book printing **`(Names)` capitalised** — the case that
actually exercises the corrected placeholder rule, rather than its negative.

**Method, non-negotiable:**
- Transcribe against the printed page. **Do not build a classifier.**
- Extract with `pdfplumber`'s `dedupe_chars()`.
- Key the extractor on the **full printed heading**, never the bare label.
- Tier is a **per-item source fact**, never a property of a slot.
- **Never deduplicate** across print sites — Beatitudes now run two files
  identical (Monastic, Martyrs) and one variant (Monastics). The tally is the
  argument.
- Absence is **declared with a basis**, never inferred.
- A divergence in a reading **body** is unregistrable by design (R-4 stores no
  reading text). Put it in a `provenance_note`, not the recurrence register.
- The recurrence register records HYMN and READING pairs only — repeated rubric
  boilerplate is deliberately absent (~163 such pairs exist; they are not
  missing rows).
- Source is a mounted folder: `Orthodox Hours/General_Menaion/` and
  `Orthodox Hours/Menaion - St. Sergius/`.

**Two checks that exist because they were missing:**
- The **page-coverage tripwire** hard-fails if any page of a claimed file has no
  `src.locus` citing it. Do not silence it by inventing a locus — encode the
  page or declare the absence with a basis.
- The **render gate** SSR-renders every entry and asserts every stored string is
  visible. Its limit: `renderToString` does not run effects, so an
  effect-loaded section reads as absent; the harness passes data as props for
  that reason.

**Owed:**
1. **`shared.js`** — no file, no loader, no browser axis. Add all three in ONE
   change (warning 8).
2. **22 General Menaion files remain.** Subject files (`Cross`, `Holy Fathers`,
   `St John Baptist`, `Theotokos`) LAST, in a session with room — `Holy Fathers`
   at 18 novel rubrics and only 12 pages is largely cross-references into the
   Octoechos and will need its own ruling.

*(There is no PAT-rotation item. It was carried for four sessions as an
inherited obligation and struck on 15 Aug: the token is fresh every session.
The scrub-the-remote step stands on its own.)*

Present a plan and get my go-ahead before modifying files or running terminal
commands.
