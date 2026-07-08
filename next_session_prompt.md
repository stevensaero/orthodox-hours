# Next-session kickoff — Octoechos V2, tone-4 differential scan

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
State as of July 7, 2026 (v0.31.7, commit c0379a9+): Phase 1 §11 steps 1–5
are COMPLETE — infrastructure (schema_v2/validators/§12 viewer at
/octoechos-v2), shared.js, theotokia.js, tone2.js (reference derivation,
31 claims), and the TONE-3 VERIFICATION (PASSED — skeleton confirmed,
verdict block in spec §11; tone3.js encoded in the same pass). Registers:
141 recurrence pairs / 138 live-byte-checked; 33 sics / 27 live-checked.

Read IN FULL before anything else: `octoechos_v2_spec.md` (esp. §10, §11
incl. the TONE-3 VERIFICATION VERDICT, §12), the top entries of
`project_notes.md` (all July 7 sessions), `encoding_rule_v2.md` §3 live,
and `tools/encoding/README.md` (the committed generation pipeline — adapt
the tone-3 variants, do NOT rebuild from scratch, and do NOT hand-retype
any text, ever).

IMMEDIATE TASK — tone 4 DIFFERENTIAL scan per §11 (templates assumed,
texts and per-tone facts captured fresh; nothing textual ported between
tones):
1. Sources: private repo `stevensaero/orthodox-sources`
   (Octoechos/tone4/4-1…4-7.pdf) — clone with the token, scrub after.
2. §10 step 1 FIRST: pdftotext + `tools/scan_source.mjs` on all seven
   files → review files to me before encoding (expect the N-1-clean /
   rest-О-contaminated pattern; watch for new homoglyph classes like
   tone 3's М and о — every new class is flagged to me per §9.10).
3. Adapt `tools/encoding/gen_tone3_sun.py` + `gen_weekday3.py` → tone 4.
   Every parser assertion is a §4 template check; failures are FINDINGS
   presented to me, not bugs to paper over. Per-tone facts (closer
   censuses, device distributions, heading forms, counts the spec marks
   per-tone) are REPORTED, never assumed.
4. §5 verification per `verify_shared_t3.py`: byte-compare tone 4's
   prints of every shared-table site; divergent items stored per-tone
   (postpass pattern), matching items ref shared. Remember: apostrophe/
   quote GLYPHS and punctuation are per-print-site facts (the "O new
   wonder" and "ages," lessons).
5. Registers in the SAME COMMIT as data (§2.3a/§9.12): pin new pairs
   (incl. the tone-4 Part-3 "un-burnt bush" rows already seeded — the
   cross-tone trap becomes live-checkable when tone4 tue sessionals
   encode), refine any seeded entries the bytes contradict (surface each
   to me), new sics verbatim.
6. Gates after every piece: test_pointing_paths, test_sunday_vespers
   (71/71), validate_octoechos (V1), validate_octoechos_v2,
   validate_viewer_coverage, vite build. NOTE: vite crashes on
   mounted/virtual filesystems — build from a native-filesystem clone
   (e.g. /tmp), as recorded in project notes.

Version policy: data commits no bump; gate/viewer code changes take a
patch bump with RELEASE_NOTES (badge derives from RELEASE_NOTES[0]) and
the project_notes.md header updated in the docs commit. Commit by
concern; hold pushes to batch end; scrub the token from the remote URL
immediately after every clone/push.

Standing carry-forwards (do not act without my instruction): §9.11(b)
weekday daily exapostilaria await my Horologion source; §9.13 stands
encoded-as-printed (tone-3 evidence now recorded — the anomaly did not
recur — my optional physical-chapter check remains open); the 3 pending
recurrence externals (menaion july/june sites) resolve at OCA-backfill
phase; amendment-F legacy allowlist (hours-tool.jsx, octoechos-data.js)
MUST be emptied at Phase 5 cutover; Drive delivery is superseded by
orthodox-sources for Octoechos material (update the project custom
instructions if not yet done).

Plan → my "go" before any file changes. Token: [I will supply — PAT
rotation was overdue as of July 7; ask if I forget]
