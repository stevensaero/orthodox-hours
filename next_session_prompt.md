# Next-session kickoff — Tone 6 DIFFERENTIAL scan

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
State: v0.32.0. Octoechos V2: tones 2–5 encoded (§11 differential scans);
registers 194/191 live, sics 58/43; GREGORY RULED per-tone in every tone
(July 8 2026); the READING VIEW (Phase A, octoechos_reading_view_spec.md)
is live — encoded tones land on human-readable pages now. Reading-view
Phases B–D are PARKED pending my side-by-side review; do not touch viewer
code this session unless I say so.

Read IN FULL first: `octoechos_v2_spec.md` (§10, §11 incl. the TONE-3
VERDICT, §12), the July 7–8 entries of `project_notes.md`,
`encoding_rule_v2.md` §3 live, `tools/encoding/README.md`, and skim
`octoechos_reading_view_spec.md` for context. Adapt the committed TONE-5
generators (`gen_tone5_sun.py` / `gen_weekday5.py` / `verify_shared_t5.py`
/ `postpass_t5.py` — START FROM THESE per the README); never rebuild,
never hand-retype text.

IMMEDIATE TASK — tone 6 DIFFERENTIAL scan per §11:
(1) sources in private repo `stevensaero/orthodox-sources` Octoechos/tone6/
    (6-1.pdf … 6-7.pdf); clone with token, scrub after every use;
(2) §10 step 1 FIRST — scan all seven files (`tools/scan_source.mjs`),
    review files to me BEFORE encoding; flag any NEW homoglyph class
    per §9.10;
(3) parser assertions are §4 template checks — failures are FINDINGS to
    me, fixed with EXACT-variant guards, never loosened matchers;
(4) §5 byte-verification per the verify_shared_t5 pattern; CAUTION:
    extraction markers can be shadowed by earlier same-text sites
    (README note) — re-scope with search_after before calling a
    divergence; divergent items per-tone; glyphs/punctuation are
    per-print-site facts;
(5) GREGORY: standing ruling — the hymn is stored PER-TONE in every
    tone; extract from 6-1, per-stanza register pairs vs shared, note
    which side of the stanza-2 word-order split 6-1 takes
    (2-1+5-1: "the Might … the one Sovereignty" / 3-1+4-1: "the one
    Might … the Sovereignty");
(6) registers + sics pinned in the SAME commit as the data;
(7) full gate after every piece (pointing paths, sunday vespers 71/71,
    V1 validator, V2 gate, viewer coverage, vite build from a
    native-filesystem clone, not a mount);
(8) after the encode, OPEN THE READING VIEW pages for tone 6 mentally /
    via the data and sanity-check page order — the reading view is now
    a human error-surfacing gate; report anything that "reads wrong."

CROSS-TONE WATCH LIST (check each, report status):
- N-1 file clean / N-2…N-7 О-contaminated (held 4 tones);
- digit-zero "0 Lord" at the THURSDAY Liturgy Alleluia (held 4 tones);
- "Саnon" С+а homoglyph at the WEDNESDAY Cross canon-1 heading (4-4,
  5-4 — same word, same site);
- ewe-lamb/stavrotheotokion lament artifacts (every tone so far:
  "O Christ,?", "sweetest Light,?", ''Woe / ''Woe doubled quotes);
- §9.13 Thursday Matins verse anomaly — verify the normal pair prints
  (tone-2-only across 4 tones so far);
- fri-eve departed verse 1 final period (3-7/4-7/5-7 all diverged);
- thu Liturgy prokeimenon verse pointing * (4-5, 5-5);
- Saturday Matins departed aposticha TWO-verse set (4-7, 5-7 vs 2-7/3-7
  three);
- LV s1 repeat device form (tone 2/4 full double; tone 3 none; tone 5
  "Repeat:"-labeled incipit — per-tone device fact);
- Nocturns↔Matins irmos sharing pattern (1/6 · 1/3/9 · 1/7/8 · all —
  fully per-tone);
- troparion §9.5 quote-site pattern (LV-only / none / all-four / none).

Version policy: data no bump; gate/viewer code patch-bump with
RELEASE_NOTES + notes header (schema SOURCE_FILES + 6-x is the expected
bumping change → v0.32.1). Commit by concern, batch pushes, scrub token
each time. Carry-forwards untouched without my word: §9.11(b) Horologion,
§9.13 physical check, menaion-external register pendings, amendment-F
allowlist empties at Phase 5 cutover, reading-view Phases B–D parked.
Plan → my "go" before file changes. Token: (Bill supplies here)
