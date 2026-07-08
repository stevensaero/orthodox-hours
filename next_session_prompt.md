# Next-session kickoff — Reading view Phase B remainder / C / D

The eight-tone Octoechos cycle is COMPLETE (v0.32.4) and the reading view
has shipped through Phase A.1 + search (v0.33.0). The tone-6 prompt this
file previously carried is retired.

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
State: v0.33.0. Octoechos V2 complete (tones 1-8; registers 258, sics 68);
reading view live with rail navigation + corpus search
(`octoechos_reading_view_spec.md` — Phase A, A.1, and B.1 SHIPPED).
My side-by-side review notes are attached below [BILL: paste notes here].

Read IN FULL first: `octoechos_reading_view_spec.md`, `local_editing_spec.md`,
the July 8 entries of `project_notes.md`, and skim `octoechos_v2_spec.md`
§12. The §12 audit contract and encoding_rule_v2 §3 storage rules are
UNTOUCHABLE; the reading view renders canonical bytes only (amendment F).

TASK — spec §7 Phase B remainder, then C on my go:
(1) address my review notes first (they may re-order everything below);
(2) B.2: assembled-service deep links — every Octoechos-sourced text in
    the hours-tool's assembled services links to its reading-view anchor
    (#toneN.<path>); propose-correction report (prefilled path / stored
    bytes / file+locus / proposed reading / reason) from audit mode;
(3) B.3: sic glyphs on ref-resolved shared nodes and rubric strings
    (thread the path prop; register paths already exist);
(4) Phase C (separate commit, my go): octoechos_v2 adapter for the edit
    engine per local_editing_spec — validator validate_octoechos_v2.mjs
    (block on exit != 0), schema_v2 path grammar, VERBATIM-doctrine lint
    (KEEP St. Sergius * / ** — the Menaion adapter's OCA-dialect rule
    does NOT apply), required verified-against-{file,locus} attestation
    embedded in the dryRun-suggested commit message; register-aware
    failure surfacing (a save that breaks a recurrence pair or sic
    byte-check must name the register entry).
Version policy: feature ships minor-bump with RELEASE_NOTES + notes
header; commit by concern; batch pushes; scrub the token after every
use; full gate before each commit (pointing, sunday vespers 71/71, V1,
V2, coverage, vite build). Plan → my "go" before file changes.
Carry-forwards untouched: §9.11(b) Horologion, §9.13 physical check,
menaion-external register pendings, amendment-F allowlist empties at
Phase 5 cutover. Token: (Bill supplies here)
