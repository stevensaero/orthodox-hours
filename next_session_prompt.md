# Next-session kickoff — Menaion V2 wire-in (Vespers next) and November encoding

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

**OCA service texts** for many 2026 dates are on Bill's computer in
`Orthodox Hours/OCA_service_texts/` (`2026-MMDD-texts-tt.docx`; reference only,
never in the repo). Check for the date before opening a liturgical question.

**The wire-in is a REWRITE on branch `v2-wirein`, and VESPERS IS NEXT.** Read the
"V2 WIRE-IN IS A REWRITE OF THE LOGIC, NOT A SHIM" block of `project_notes.md`
and `menaion_v2_wirein_spec.md` 6a-6b before touching anything. Bill's rule: no
shims, props or bandages; fix the logic. The assemblers lay in PLANS from
`src/data/menaion_v2/adapter.js`; selection logic lives in plain modules under
`src/lib/` so the gates run the tool's own code.

- After cloning: `git fetch origin v2-wirein && git checkout v2-wirein && git merge main`.
  Rewrite work is committed and pushed on the BRANCH (`... push <url> v2-wirein`);
  encoding and project notes go on `main`, then `main` is merged into the branch.
- Done on the branch: the Hours (`hoursPlan`, `src/lib/hours-propers.js`), the
  General Menaion fallback (`general_fallback` on an entry), the OCA overlay.
  Gates: `tools/test_menaion_v2_hours.mjs`, `tools/test_hours_mount.mjs`.
- DONE for Vespers: the Glory and Both now at Lord I call (`resolveLicClosers` in
  `src/lib/vespers-propers.js`; gate `tools/test_menaion_v2_vespers.mjs`, 24 of 24
  places agree with the OCA texts) AND its stichera (`resolveLicStichera`, verse by
  verse agreement on all 12 shared dates), AND the Aposticha (`resolveAposticha`; 34 of 36
  places agree, 2 known). NEXT: the Litiya, then the troparia at the end of Vespers.
- **Vespers, in service order, one section at a time:** Lord I call (~500 lines),
  Litiya (~190), Aposticha (~330), troparia (~200), in `assembleVespers`
  (hours-tool.jsx). Build `vespersPlan` in the adapter first; for each movable
  place it returns "printed here" (the node), "rubric only" (Octoechos, in the
  tone the rubric names), or "nothing printed" (the rule for the section). Put
  the Octoechos / Pentecostarion laying-in in a plain `src/lib/vespers-propers.js`.
  Carry the Pentecostarion logic over UNCHANGED and mark it not reworked.
- **Gate each section against the OCA texts before starting the next.** The OCA
  headings in `src/data/oca_hymns/docs/` name the tone and kind at every Glory
  and Both-now place: they are the answer key. A first comparison (10 dates)
  showed V2 agrees wherever the page prints the closer; one unexplained
  difference, 30 Nov aposticha Glory (Menaion Tone 2, OCA Tone 3).
- Read Fekula ch. 1 (Sundays), ch. 2 (weekdays) and ch. 6 (theotokia) from the
  project docs for each rule, and check ODS vol. III where it has an entry. How
  Bill decides a doubtful rule: did the source state it, and is there evidence
  it is done.
- The Sunday Vespers and bulletin gates pin today's output; list every change
  with the OCA text or Fekula section that justifies it, for Bill.
- OWED BEFORE THE MERGE (Bill): a full pass over "How the tool works" and the
  explainers so they describe the tool as built (list in project_notes.md).
- AFTER Vespers, raise with Bill: reading ODS vol. III's date-specific orders
  (77 entries; `ods_v3_hours.pilot.json`) as a layer in the adapter.
- Then: Typica and Liturgy propers, dismissal `name`, bulletin; the Prefer OCA
  toggle and service chooser; merge; retire V1; v0.53.0. Also owed: the three
  Menaion browser items (notes: "NEXT MENAION V2 BROWSER PASS").

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
