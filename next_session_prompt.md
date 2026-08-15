# Next-session kickoff — Menaion V2 Phase 2 (General Menaion encoding)

Supersedes the Martyrs prompt this file previously carried.

State at handoff: **v0.39.1**, deploy run #937 **green**. `general.js` holds
**556 stored strings · 532 text nodes · 0 errors** — `Monastic`, `Monastics`,
`Martyr`, `Martyrs` complete across all three services. **4 of 26.** V1 Menaion
still drives the Hours assembler; V2 is a parallel build until a Phase 5 cutover.

Paste the following (with the token filled in) to start the session:

---

I'm continuing work on the Orthodox Hours Tool (`stevensaero/orthodox-hours`).
Token: [BILL: paste — see the rotation note at the bottom]. Clone, scrub the
token from the remote immediately, and confirm the `hours-tool.jsx` version
badge matches the `project_notes.md` header before anything else.

**Read IN FULL before touching anything:** the August 15 entry at the top of
`project_notes.md` — especially **THE HANDOFF WAS WRONG ABOUT MARTYR**, the two
gates that found it, and the **STANDING WARNING** list, which now runs to nine
falsified rules. Then `menaion_v2_spec.md` §§2, 5, 6.2, 7, and
`encoding_rule_v2.md` §§2, 2.1, 3 (live — it is **v2.12**; §2.1's placeholder
rule was corrected on 15 Aug and any summary of it you have is wrong).

**Run all EIGHT gates on the clean tree before editing anything.** A green
baseline is what makes a later red yours.

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

**Task: `Apostle` and `Apostles`, in that order.**

`Apostles` is deliberately the second of the pair: it is the **one plural file
that prints no placeholder at all**, so it is the natural check on the corrected
`GENERAL_TAKES_NAME`. If `name_substituted` ever appears on a fallback drawn
from it, the correction was mis-applied. `Apostle` prints `(name)` 30 times.

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
- Source is a mounted folder: `Orthodox Hours/General_Menaion/` and
  `Orthodox Hours/Menaion - St. Sergius/`.

**Two checks that now exist because they were missing:**
- The **page-coverage tripwire** hard-fails if any page of a claimed file has no
  `src.locus` citing it. Do not silence it by inventing a locus — encode the
  page or declare the absence with a basis.
- The **render gate** SSR-renders every entry and asserts every stored string is
  visible. Its limit: `renderToString` does not run effects, so an effect-loaded
  section reads as absent. The harness passes data as props for that reason.

**Owed, and not mine to close:**
1. **PAT rotation. STILL OWED, now urgently.** The classic `ghp_` token has been
   pasted in plaintext across five sessions, most recently into a remote URL.
   Revoke it and issue a fine-grained token scoped to this repo.
2. **`shared.js`** — no file, no loader, no browser axis. Add all three in ONE
   change (warning 8).
3. **22 General Menaion files remain.** Subject files (`Cross`, `Holy Fathers`,
   `St John Baptist`, `Theotokos`) LAST — no `(name)` placeholder, services to a
   subject rather than a saint type, most likely to break the template.

Present a plan and get my go-ahead before modifying files or running terminal
commands.
