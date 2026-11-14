# Next-session kickoff — Menaion V2 DAILY encoding (November, continued)

State at handoff: **v0.51.0**. The General Menaion is complete (26 files). The
daily book has begun: `november.js` holds 11-14 (two commemorations) and 11-15.
V1 still drives the Hours tool until the wire-in; **no V1 encoding is done any
more.** This prompt asserts nothing about unencoded files: measure them.

Paste the following (with the token filled in) to start the session:

---

I'm continuing the Orthodox Hours Tool (`stevensaero/orthodox-hours`). Token:
[BILL: paste]. Clone with the header method, confirm the `hours-tool.jsx` badge
matches the `project_notes.md` header, and run all eight gates on the clean tree.

**Read first:** the November 14 entry at the top of `project_notes.md`;
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

Remaining in November: 11-01 through 11-13 and 11-16 through 11-30, with the
variant files the folder lists. After November: `adapter.js` and the switch of
the Hours tool to V2 (no V1 fallback; "not encoded" where V2 has no entry).

Gates: the eight in `project_notes.md`. Commit by concern. Push by
`github_workflow_prompt.md` § "The push workflow"; scrub the remote after.
