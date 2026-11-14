# Next-session kickoff — Menaion V2 DAILY encoding (November, continued)

State at handoff: **v0.52.2**, nine gates green. The General Menaion is complete.
`november.js` holds 11-14 through 11-30 (22 files). The consolidated state,
rulings, patterns and the owed list are the FIRST block of `project_notes.md`
("WHERE THINGS STAND"). V1 still drives the Hours tool until the wire-in; **no
V1 encoding is done any more.** This prompt asserts nothing about unencoded
files: measure them.

Paste the following (with the token filled in) to start the session:

---

I'm continuing the Orthodox Hours Tool (`stevensaero/orthodox-hours`). Token:
[BILL: paste]. Clone with the header method, confirm the `hours-tool.jsx` badge
matches the `project_notes.md` header, and run all nine gates on the clean tree.
**Run gates in their own step and check exit codes before any commit** (a broken
build reached main on 14 Nov because gates and push were chained).

**Read first:** the "WHERE THINGS STAND" block at the top of `project_notes.md`;
`tools/encoding/menaion_v2/README.md`; `menaion_v2_spec.md` §§2, 5, 7, 12 and
the two rulings at the end of §16.5; `encoding_rule_v2.md` §§1.1 and 3 (live);
`src/data/open_questions.js` (the ladder is in its header);
`bill_review_ledger.md`.

**Fekula volume III lives on Bill's computer, NOT in the repo.** It is a copyrighted
reference work and is never committed here, in whole or in part (Bill, 14 Nov):
cite an entry by id and page, quote at most a short rubric phrase. Folder
`Orthodox Hours/Fekula_ODS_SOM_V3/intake/`: `ods_v3_index.json` (which dates are
covered, printed rank, pages), `entries/ods3-MMDD-*.md` (the rubrics, quotable,
page-anchored), `ods_v3_full_repaired.txt` (searchable whole), plus
`HOURS_PILOT_NOTES.md` and `ods_v3_hours.pilot.json` (the Hours stated outright
for six entries; schema settled, 71 entries not yet run). Stage the index at the
start of the session and check EVERY date against it before ranking: a printed
rank there is decisive, and a deliberate blank means do not infer one. The
project_notes section "TWO FILES ON ONE DATE ARE TWO SERVICES" records what it
gave for November and how to use it. If the folder is not reachable, say so;
do not rank from memory of it.

**Then encode whole days**, one file at a time, by the README's per-file steps.
Standing rules: every printed line accounted for; a canonical hymn only where
every print site byte-matches; reading bodies never stored; sic rows confirmed
in a second extraction; a liturgical question goes Fekula, then OCA, then a
named web source, then the register, and never stops the capture. A question
that changes the SHAPE of the capture goes to Bill before any data is written.

Remaining in November: 11-01 through 11-13, with the variant files the folder
holds (11-1A, 11-09A, 11-09B were listed; re-list the folder to be sure). After November: `adapter.js` and the
switch of the Hours tool to V2 (no V1 fallback; "not encoded" where V2 has no
entry).

Gates: the eight in `project_notes.md` PLUS `node tools/test_menaion_v2_mount.mjs` (mounts the real V2 browser for every encoded day; added after a crash shipped on 14 Nov). Commit by concern. Push by
`github_workflow_prompt.md` § "The push workflow"; scrub the remote after.
