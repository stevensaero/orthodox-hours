# Next-session kickoff — Menaion V2 DAILY encoding (November, continued)

State at handoff: **v0.52.2**, nine gates green. The General Menaion is complete.
`november.js` holds 11-14 through 11-26 (fifteen files). The consolidated state,
rulings, patterns and the owed list are the FIRST block of `project_notes.md`
("WHERE THINGS STAND"). V1 still drives the Hours tool until the wire-in; **no
V1 encoding is done any more.** This prompt asserts nothing about unencoded
files: measure them.

Paste the following (with the token filled in) to start the session:

---

I'm continuing the Orthodox Hours Tool (`stevensaero/orthodox-hours`). Token:
[BILL: paste]. Clone with the header method, confirm the `hours-tool.jsx` badge
matches the `project_notes.md` header, and run all nine gates on the clean tree.

**Read first:** the "WHERE THINGS STAND" block at the top of `project_notes.md`;
`tools/encoding/menaion_v2/README.md`; `menaion_v2_spec.md` §§2, 5, 7, 12 and
the two rulings at the end of §16.5; `encoding_rule_v2.md` §§1.1 and 3 (live);
`src/data/open_questions.js` (the ladder is in its header);
`bill_review_ledger.md`.

**Then encode whole days**, one file at a time, by the README's per-file steps.
Standing rules: every printed line accounted for; a canonical hymn only where
every print site byte-matches; reading bodies never stored; sic rows confirmed
in a second extraction; a liturgical question goes Fekula, then OCA, then a
named web source, then the register, and never stops the capture. A question
that changes the SHAPE of the capture goes to Bill before any data is written.

Remaining in November: 11-01 through 11-13 and 11-21 through 11-30, with the
variant files the folder lists (27 files). After November: `adapter.js` and the
switch of the Hours tool to V2 (no V1 fallback; "not encoded" where V2 has no
entry).

Gates: the eight in `project_notes.md` PLUS `node tools/test_menaion_v2_mount.mjs` (mounts the real V2 browser for every encoded day; added after a crash shipped on 14 Nov). Commit by concern. Push by
`github_workflow_prompt.md` § "The push workflow"; scrub the remote after.
