# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

Supersedes the Octoechos reading-view prompt this file previously carried.

State at handoff: **v0.39.0**. Menaion V2 spec + Phase 1 infrastructure shipped;
Phase 2 encoding underway. `general.js` holds **379 text nodes, 0 errors** —
`Monastic`, `Monastics`, `Martyr` complete across all three services. 3 of 26
General Menaion files. V1 Menaion still drives the Hours assembler; V2 is a
parallel build until a Phase 5 cutover.

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
Token: [BILL: paste]. Clone, scrub the token from the remote immediately, and
confirm the `hours-tool.jsx` version badge matches the `project_notes.md` header
before anything else.

**Read IN FULL before touching anything:** the August 14 session entry at the top
of `project_notes.md` — especially **STANDING WARNING** (eight Octoechos rules
falsified by real Menaion data), **THE BEATITUDES COUNTER-EXAMPLE**, and
**RUN IT. DO NOT INSPECT IT.** Then `menaion_v2_spec.md` §§2, 5, 6.2, 7, and
`encoding_rule_v2.md` §§2, 2.1, 3 (live — it is v2.11 and §2/§2.1 were corrected
on 14 Aug; do not work from any summary of them).

**Task: continue the General Menaion encode, starting with `Martyrs.pdf`.**
Two divergences against `Martyr.pdf` are already known and want a side-by-side
read rather than rediscovery:
- Wisdom 5:15 lesson — Martyrs prints "The righteous live **unto the ages**"
  where Monastic prints "**for evermore**". `variant` pair.
- Isaiah lesson — Martyr prints "Ye **(are)** my witnesses" with a parenthesised
  copula; Martyrs prints "Ye **are**". Variant, and a sic candidate no automated
  check flagged.

Then the remaining singular/plural pairs. **Leave the four SUBJECT files last**
(`Cross`, `Holy Fathers`, `St John Baptist`, `Theotokos`) — services to a subject
rather than a saint type, no `(name)` placeholder, and the files most likely to
break the template. Batch order is at the head of `general.js`.

**Method, non-negotiable:**
- Transcribe against the printed page. **Do not build a classifier** — one was
  tried and abandoned; a misclassification landing text in a plausible-but-wrong
  slot never shows up in an "unclassified" count.
- Extract with `pdfplumber`'s `dedupe_chars()`.
- Key the extractor on the **full printed heading**, never the bare label:
  "Troparion of the holy martyr" and "Troparion of the feast" are different hymns.
- Tier is a **per-item source fact**, never a property of a slot.
- **Never deduplicate** across print sites, however identical they look — see the
  Beatitudes counter-example.
- Absence is **declared with a basis**, never inferred.
- Source is a **mounted folder**, not Drive: `Orthodox Hours/General_Menaion/`
  and `Orthodox Hours/Menaion - St. Sergius/`.

**Gate before every commit — all seven, including the build:**
```
node tools/test_pointing_paths.mjs
node tools/test_sunday_vespers.mjs      # expect 78/78
node tools/validate_entries.mjs
node tools/validate_octoechos_v2.mjs
node tools/validate_menaion_v2.mjs
node tools/validate_viewer_coverage.mjs # octoechos 92⋈92 · menaion 99⋈99
npm run build                           # DO NOT SKIP — deploys were red for a
                                        # whole session because this was skipped
```

**Two things owed, neither mine to close:**
1. **PAT rotation.** The classic `ghp_` token has been in plaintext across
   several sessions.
2. **Confirm a green deploy.** `deploy.yml` was moved to checkout@v5 /
   setup-node@v5 / node 22 on 14 Aug (Node 20 forced off the runners).
   `peaceiris/actions-gh-pages@v4` is the remaining third-party risk; if runs
   still fail, replace it with `actions/upload-pages-artifact` +
   `actions/deploy-pages`. Do not trust the live version badge until a run is
   green.

Present a plan and get my go-ahead before modifying files or running terminal
commands.
