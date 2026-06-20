# Field Coverage — Capture, Audit & Display Checks-and-Balances Spec

**Status: DRAFT for review. Spec-first — no mechanism code until approved.**
Supersedes the scoping notes in the §6 field-coverage handoff. Sequencing: lands after Check G
(validator) and §D (runtime), which are the proven single-field template this generalizes.

---

## 1. Intent — the data must tell the truth about itself

The aposticha_glory bug (06-21) was not a one-off. It exposed three holes that share one root: **at no
surface can a human (or a check) tell the difference between a field that is legitimately empty and a
field nobody has looked at yet.** Absence is silent, and silence reads as "fine."

The three holes, named:

1. **Capture.** A field that was never entered is indistinguishable from a field that has no value.
   Both are just absent. Encoding has no way to record "I looked at the PDF; there is nothing here."
2. **Audit.** The validator checks whether encoded data is well-*formed*, never whether it is
   *complete* against the source. A silently-absent field passes every check.
3. **Display.** The Menaion browser renders only fields with a hand-written `<TextBlock>` row. A stored
   field with no row (e.g. `stichera_both_now`) is invisible — present in the data, absent on screen.
   The audit panel shows what is *missing-and-required*, never what is *present-but-unrendered*.

The governing principle, applied at all three surfaces:

> A field absent because nobody verified it = **RED** (unverified, possibly wrong).
> A field absent because an encoder examined the PDF and confirmed nothing to encode = **GREEN**
> (verified-absent, a positive declaration). Green is earned by a human looking, never assumed from silence.

The target experience is the database-table one: for any entry, a reviewer holding the Menaion sees
**every field the schema knows about**, each marked *filled* / *null-by-declaration* / *genuinely missing*
/ *not-applicable* — and can reconcile storage against the printed page with nothing hidden.

This is the same pattern as `aposticha_glory` / `aposticha_glory_absent` (Check G + §D), generalized to
every field that can be silently missing, and extended from the validator out to the viewer.

---

## 2. Single source of truth — the Field Registry

All three surfaces read from one per-field registry. The registry is the only place a field's coverage
behaviour is defined; capture rules, the audit check, and the viewer's completeness layer all derive from
it mechanically. Change the registry, and all three surfaces follow.

### 2.1 Registry entry schema (per field)

| key | meaning |
|---|---|
| `field` | the data key (e.g. `aposticha_glory`) |
| `bucket` | 1–5 (see §3) |
| `slot_fill` | `stored` \| `derived` \| `either` — is the *value* held in the entry, or filled at runtime by rule? (see §3.6) |
| `gate` | bucket 3 only: the trigger that puts the field in play (a flag, or a rank predicate) |
| `mandatory_when` | a rank/condition that *promotes* a bucket-1 field to mandatory (e.g. doxasticon at Doxology+) |
| `absent_twin` | bucket 1 only: the declaration field name (e.g. `aposticha_glory_absent`) |
| `parent` | bucket 5 only: the field this sub-field validates with |
| `display` | how the viewer renders it: `hymn` (tone+text block) \| `list` \| `string` \| `flag` \| `meta` |
| `citation` | Fekula § / chapter + `encoding_rule_v2.md` § justifying the classification |
| `verified` | has Bill confirmed the classification by inspection? default `false` → surfaced for review |

`verified: false` is itself an honesty mechanism: an un-reviewed classification is flagged, never hardened.

---

## 3. The five buckets (load-bearing — misclassification floods false positives)

Each bucket implies one coverage rule. Getting this right is the whole point; if buckets 3/4/5 red-dot
like bucket 1, the calendar fills with noise and the signal is destroyed.

### 3.1 Bucket 1 — Source-conditional propers ("if there be one")
Only the PDF knows whether the field has a value. Absence is ambiguous → requires a positive `*_absent`
declaration. **RED until value-or-declaration.** This is the set the red-dot policy is *for*.
Rank-promotable via `mandatory_when` (see §3.5).
*Fekula grounding:* the recurring "if there be a doxasticon in the Menaion" / "if there be such, from the
Menaion" formula (Ch 2:84, 2:89; Ch 6; Ch 1:221–223). Seen examples: the doxasticon pair, the
Both-now/theotokia, `exapostilarion`, the Liturgy propers, `troparion` fallback targets, kontakia/ikos.

### 3.2 Bucket 2 — Always-required (structural identity)
Every entry must carry it regardless of source. Absence = error; no `*_absent` possible. **RED until
filled, never green-by-declaration.** Small set: `rank`, `saint`/`name`, `date`/`source_file`,
`fekula_section`. (`troparion` lives here — see §7.)

### 3.3 Bucket 3 — Structurally-gated
Required *only* when a gate flag/field puts it in play. Demanding `*_absent` when the gate is false is
noise. Each entry records its `gate`. **RED only when gate true and value absent.**
Examples: `gospel_sticheron` (gate: Sunday/resurrectional Matins gospel), `sessional_hymn_polyeleos`
(gate: `has_polyeleos`), the litya fields (gate: `has_litya`), `great_doxology_troparion`
(gate: `has_great_doxology`), `stichera_lord_i_call` (gate: rank — already Check C).

### 3.4 Bucket 4 — Control flags / metadata
Absence is a valid default. **Never red-dots.** Examples: `has_*`, `menaion_set_aside`,
`heavenly_king_*`, `*_note`, `*_source`, `*_count`, `fekula_section_override`, `note`, `hours_format`.

### 3.5 Bucket 5 — Dependent sub-fields
Meaningful only alongside a parent; validated as a group with it, never standalone. Examples:
`beatitudes_ode`/`_source` (parent `beatitudes_troparia`), `alleluia_verse`/`_stichos` (parent
`alleluia_tone`), `ikos_*` (parent the kontakion).

### 3.6 Cross-cutting refinement — slot-fill (discovered this session, must be in the model)
A **mandatory slot can be filled by derivation rather than by a stored field.** The Now-and-ever
theotokion slot is *always* filled, but by rule — the dogmaticon in the tone of the week, the daily
theotokion, the theotokion in the tone of the doxasticon from the Common Theotokia, or the
stavrotheotokion (Fekula Ch 6). A *stored* value exists only when the Menaion prints a proper festal
Now-and-ever (Ch 6: Nativity of the Forerunner, June 24). The Sunday exapostilarion (by gospel number)
and `gospel_sticheron` (the appointed eothinon) are the same shape: slot mandatory, stored value
conditional/derived.

**The registry classifies the *stored field's* coverage; the derived slot-fill is a separate runtime
concern.** A field with `slot_fill: derived` must never red-dot for an absent stored value — the slot is
correctly rule-filled. This is exactly the false-positive class §3 warns about, and the reason `slot_fill`
is a first-class registry column.

### 3.7 Rank-dependence is not flat
A field's bucket can change with rank. A doxasticon is bucket 1 "if there be one" at §2A/§2C but
effectively bucket 2 (mandatory) at Doxology/Polyeleos/Vigil (Fekula Ch 2:84–89; Ch 6; this is precisely
what Check G encodes). The registry expresses this with `mandatory_when`, not a second row.

---

## 4. Surface 1 — Capture (encoding discipline)

- Every bucket-1 field must end a session as either an encoded value **or** its `*_absent` declaration.
  Silence is not a valid state — it means "unverified."
- Introduce the `*_absent` twin for **every** bucket-1 field. Today only `stichera_glory_absent` and
  `aposticha_glory_absent` exist; the registry enumerates the rest.
- Each new `*_absent` field gets Check-D-style integrity: boolean `true`, mutually exclusive with its
  value, rank-scoped where `mandatory_when` applies, and added to `KNOWN_FIELDS`.
- Codified in `encoding_rule_v2.md` (new §) so the declaration discipline is part of the encoding rule,
  not just a validator behaviour.

---

## 5. Surface 2 — Audit (validator: completeness, not just well-formedness)

A registry-driven coverage check. Per entry, walk the registry and resolve each field to one of three
states — the database-table legibility Bill asked for:

- **GREEN** — encoded value present, **or** `*_absent: true` declared (verified-absent).
- **RED** — *in play* but neither value nor declaration. This is the genuine gap. "In play" =
  bucket 1 (subject to `mandatory_when`), bucket 2, or bucket 3 with gate true.
- **GREY / N-A** — bucket 4 default, gate false, `slot_fill: derived`, or a bucket-5 sub-field whose
  parent is absent. Not a gap; not flagged.

Mechanics:
- bucket 1 → RED if neither value nor `*_absent` (and not promoted-absent under `mandatory_when`).
- bucket 2 → RED if empty.
- bucket 3 → RED if `gate` true and value absent.
- bucket 4 / 5 / derived → never RED standalone.

Severity matches Check C/D/G: warnings by default, fatal under `--strict`, skipped under `--editor`.
The existing per-field checks (C: LIC stichera; D: LIC doxasticon; G: aposticha doxasticon) are the
proven instances of exactly this walk.

---

## 6. Surface 3 — Display (viewer: show everything, meaningfully)

The fix preserves the curated presentation and adds a completeness backstop, both registry-driven.

### 6.1 Keep the curated rows
Explicit `<TextBlock>` rows stay for known fields — tone rubrics, dialect badges, pointing render, edit
wiring. A raw key dump would lose all of that and surface meaningless internal keys. Curating the display
was never the mistake; having no completeness layer underneath it was.

### 6.2 Per-field state markers (the database-table feel)
For every field the registry knows about, the viewer shows its state, not just its value:
- **filled** → the curated value.
- **declared-absent** → "✓ verified absent" (null-by-declaration) — visibly distinct from missing.
- **missing / unverified** → RED "not encoded — unverified" (the real gap, on screen).
- **not applicable** → gate false / control default / derived slot — greyed, behind a "show N/A"
  toggle so the default view stays readable.

A reviewer holding the Menaion now sees, per entry, every schema field marked filled / null /
missing / N-A, and can reconcile against the printed page with nothing hidden.

### 6.3 Catch-all — nothing is ever invisible
A final section per entry diffs `Object.keys(entry)` against (registry fields ∪ keys the curated rows
consumed) and dumps any leftover as raw key/value, labeled by registry status:
- *stored, no display row* → wire up a curated row.
- *unknown field, not in registry* → the `stichera_both_now` smell — reclassify or retire.

This is the viewer-side twin of the audit, and it is what makes the viewer a faithful mirror rather than
a curated subset.

---

## 7. Worked classifications (Fekula-verified this session)

Each carries its citation; `verified` flips to true only on Bill's inspection.

| field | bucket | slot_fill | notes & citation |
|---|---|---|---|
| `troparion` | 2 | stored | Always-present at the Hours; every rank carries a troparion (Hours rules table; Ch 1/2). The daily→General Menaion→OCA chain is *sourcing*, not a coverage state; "substitution" still yields a present value. No `*_absent`. |
| `aposticha_glory`, `stichera_glory` | 1 → 2 | stored | "doxasticon from the Menaion, if there be one" (Ch 2:84, 2:89; Ch 6). `mandatory_when` = Doxology/Polyeleos/Vigil. Already Check G/§D. |
| `exapostilarion` | 1 | stored | "If there be no exapostilarion in the Menaion… / If there be an…" (Ch 1:181/184; Ch 2:138/141). Needs `exapostilarion_absent`. |
| `gospel_sticheron` | 3 | derived | "the *appointed* gospel sticheron" — eothinon by Matins-gospel number (Ch 1:391/664). Gate = Sunday/resurrectional Matins gospel. Data shows `{tone,text}` captured + selection via `matins_praises_glory:{source:'gospel_sticheron', gospel_number}`. Confirm derived → not a Menaion coverage field. |
| Liturgy propers: `prokeimenon_*`, `alleluia_*`, `communion_verse`, `feast_e`/`feast_g`, `hours_kontakion` | 1 | stored | "For Sunday (and, if there be such, from the Menaion)" / "Communion Hymn… if there be one, from the Menaion" (Ch 1:221–223). Rank-gated: at Polyeleos/Vigil/feast the saint's propers shift to expected (Ch 1:427–428, 720–721) → `mandatory_when` = feast rank. Confirms these are NOT always-required. |
| `lic_theotokion` | 1 | derived (Menaion) / stored (Pentecostarion) | Both-now slot always filled by rule (dogmaticon / daily theotokion / theotokion-in-tone-of-doxasticon / stavrotheotokion — Ch 6). In the Menaion it is **data-capture for the browser**; the §2A assembler renders the derived Octoechos Both-now (hours-tool.jsx ~3742; 06-17 note). In the Pentecostarion it is live assembler input. Canonical Both-now field. |
| `aposticha_both_now`, `stichera_both_now` | 1 / retire | — | Now-and-ever slot is derived (Ch 6); a stored value exists only for a festal proper. **But** `stichera_both_now` as used (07-01) is a bare descriptive string, not a hymn, and renders nowhere → reclassify as `meta` or retire. `aposticha_both_now` keeps bucket 1, `slot_fill: derived`. |

Pending classification: the remaining ~115 `KNOWN_FIELDS` (the matins_*, sessional_*, canon, paroemia,
megalynarion, zadostoinik, magnification families, etc.). These are STEP 2–3 execution against
Fekula + `encoding_rule_v2.md`, to be classified and surfaced `verified:false` for inspection — *not*
guessed in this pass.

---

## 8. Sequencing / rollout (incremental; each phase independently committable)

- **Phase 0 — this spec.** Committed, reviewed. (`docs:` commit, no version bump.)
- **Phase 1 — registry data.** Encode the per-field registry from §7 + the full classification.
  Reviewed `verified:false` rows confirmed by Bill before any consumer reads them. (`tooling:` commit.)
- **Phase 2 — audit.** Registry-driven coverage check in `validate_entries.mjs`, alongside C/D/G
  (§9 decision). Warnings default, fatal under `--strict`. (`tooling:` commit.)
- **Phase 3 — capture.** Introduce `*_absent` twins for all bucket-1 fields; generalize the ~42-entry
  aposticha backlog into a registry-wide declaration backfill. (`data:` + `docs:` to `encoding_rule_v2`.)
- **Phase 4 — display.** Viewer per-field state markers + catch-all section. (`feature:` minor bump.)
- **Phase 5 — optional consolidation.** Fold C/D/G into the registry once the alongside path is proven.

---

## 9. Open decisions (Bill's to make)

1. **Registry vs C/D/G — alongside or replace.** Recommendation: **alongside** for the first landing —
   registry owns the long tail, C/D/G stay bespoke — but the audit walk written so each of C/D/G could be
   re-expressed as registry rows later, making the fold-in (Phase 5) a clean switch, not a rewrite.
   C/D/G work today; folding them in the same pass adds regression risk to an already-large change.
2. **`stichera_both_now` disposition.** Reclassify as `meta`/`note`, or retire the key. It is a bare
   string today, renders nowhere, and is the catch-all's first real catch.
3. **`gospel_sticheron` confirm derived.** If runtime-derived by gospel number (as the data suggests),
   it is `slot_fill: derived`, gated — and drops out of per-entry coverage entirely.
4. **Per-field classification review.** The ~115 pending fields will land `verified:false`; confirm the
   review cadence (batch by service section? by bucket?).

---

## 10. Guardrails

- Spec committed and reviewed **before** any mechanism code. This is large; do not let it sprawl into
  implementation in one pass.
- The five-bucket split + `slot_fill` is load-bearing. Misclassifying 3/4/5/derived as bucket 1 floods
  the calendar with false positives and destroys the signal.
- Separate commits per record type (spec/docs vs tooling vs data vs feature). Version bump only on
  feature/fix.
- Gate before every push (`test_pointing_paths` + `test_sunday_vespers`, then `vite build`); token-inline
  → scrub → verify tokenless.
- PAT rotation is overdue and the token has been in cleartext in chat — rotate after the next push.
