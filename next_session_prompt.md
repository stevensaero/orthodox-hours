# Next-session kickoff — encoding the Menaion (v0.53.3 and after)

State at handoff: **v0.53.3**. `v2-wirein` is merged; the summarized Menaion is
deleted; the full capture in `src/data/menaion_v2/` drives the Hours, Vespers,
the Typica and the Divine Liturgy. The consolidated state, rulings and the owed
list are the FIRST blocks of `project_notes.md` (start with "v0.53.0 — THE
MERGE"). This prompt asserts nothing about unencoded files: measure them.

Paste the following (with the token filled in) to start the session:

---

I'm continuing the Orthodox Hours Tool (`stevensaero/orthodox-hours`). Token:
[BILL: paste]. Clone with the header method, confirm the `hours-tool.jsx` badge
matches the `project_notes.md` header, and run every gate on the clean tree.
**Run gates in their own step and check exit codes before any commit.**

**Read first:** the top blocks of `project_notes.md`;
`tools/encoding/menaion_v2/README.md`; `menaion_v2_spec.md` §§2, 5, 7, 12 and
the two rulings at the end of §16.5; `encoding_rule_v2.md` (live; v2.16) §§1.1,
1.4, 1.5 and 3; `src/data/open_questions.js`; `bill_review_ledger.md`.

**Sources on Bill's computer, never in the repo:** the St. Sergius Menaion PDFs;
`Orthodox Hours/OCA_service_texts/` (`2026-MMDD-texts-tt.docx`); and Fekula
volume III at `Orthodox Hours/Fekula_ODS_SOM_V3/intake/` (`ods_v3_index.json`,
`entries/ods3-MMDD-*.md`, `ods_v3_full_repaired.txt`). Fekula is a copyrighted
reference work: cite an entry by id and page, quote at most a short rubric
phrase, store an order as STRUCTURE ONLY. Check EVERY date against the index
before ranking: a printed rank is decisive, a deliberate blank means do not
infer one. If a folder is not reachable, say so; do not work from memory of it.

**The work: encode whole days**, one printed service at a time, by the README's
per-file steps. For each date: the line map, the dismissal `name` (hand-entered;
null on a feast itself), the vol. III order in `src/data/ods_v3/orders.js` if the
index has one, and the OCA text into `src/data/oca_hymns/` if there is one. Then
`node tools/build_temple_index.mjs`.

Order of work:
1. 11-01 through 11-13 (re-list the folder for variant files).
2. December onward as the calendar approaches.
3. The 86 dates the retired summarized data served: 16 May–31 July (77; wanted
   before next May), six in September, three in October.

Standing rules: every printed line accounted for; never a partial capture; a
canonical hymn only where every print site byte-matches; reading bodies never
stored; a liturgical question goes Fekula, then OCA, then a named web source,
then `open_questions.js`, and never stops the capture. A question that changes
the SHAPE of the capture goes to Bill before any data is written. No shims: fix
the logic.

**Also owed (ask Bill which first):**
- His read of the 29 dismissal names; open questions Q-0008 and Q-0009.
- The 6 September bulletin runs to 2 pages (14pt over one page): accept, or trim.
- The dev-only in-context editor has no screen using it: keep or delete.
- Festal antiphons for feasts of the Lord; the remaining 73 vol. III orders;
  Matins (and with it a "Vigil is served tonight" switch); the Pentecostarion's
  own full-capture pass (`pentecostarion_v2_pass_notes.md`), which is when the
  last summarized-shape branches in the assemblers go.
- Nothing has yet been checked in a real browser.

Gates: `npm run gate`, `npm run validate`, and `node tools/<name>.mjs` for
`validate_menaion_v2`, `validate_oca_hymns`, `validate_octoechos_v2`,
`test_menaion_v2_hours`, `test_menaion_v2_vespers`, `test_menaion_v2_liturgy`,
`test_ods_v3_orders`, `test_menaion_v2_render`, `test_menaion_v2_mount`,
`test_edit_engine`, `test_hours_mount`; then `npx vite build`. Commit by
concern. Push by `github_workflow_prompt.md` § "The push workflow"; scrub the
remote after.
