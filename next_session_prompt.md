# Next Session Prompt — Orthodox Hours Tool

## Session Startup

Follow the project instructions: clone `stevensaero/orthodox-hours` (ask for the token), read `project_notes.md`, and confirm the version badge in `hours-tool.jsx` matches. Current version: **v0.5.0**.

## Encoding Validation — Two Tools, One Rule Set

The tool has a two-tier validation system for encoding completeness. Both tiers enforce the same rule: **an entry is not complete until every required field is present AND no field contains placeholder text.**

### Tier 1: CLI Audit Script (`scripts/audit.js`)

Run from the terminal after any encoding session:

```bash
node scripts/audit.js all           # audit everything
node scripts/audit.js may           # audit just May
node scripts/audit.js pentecostarion  # audit just Pentecostarion
```

This is a **text-based** audit that parses the raw JS source files with regex. It checks for field-name strings (e.g. `troparion:`, `kontakion_ode6:`) in each entry's text block and scans for placeholder patterns (`[NYE]`, `not yet encoded`, `Phase 2`, etc.). Output is a per-file summary with complete/incomplete/placeholder counts, plus per-entry missing-field lists.

**Current state (as of v0.5.0):**
- May: 16 complete, 0 incomplete
- June: 0 complete, 30 incomplete (all missing matins-era fields like `fekula_section`, `matins_format`, `aposticha_source`, `stichera_lord_i_call` — these were encoded before the v2.1 spec added those fields)
- July: 0 complete, 5 incomplete (same pattern)
- Pentecostarion: 23 complete, 0 incomplete

The June/July incompleteness is expected — those entries predate the expanded field requirements. May was re-encoded to v2.1 spec. Bringing June and July up to spec is a backlog item.

### Tier 2: In-Browser Data Browsers (`/menaion`, `/pentecostarion`)

These are full-page data inspection tools accessible via URL only (not linked from the main tool UI):
- `/orthodox-hours/menaion` — 12 month tabs, day grid sidebar, entry cards with all fields
- `/orthodox-hours/pentecostarion` — period tabs (Bright Week, Thomas→Blind Man, etc.)

Both use the **shared audit module** at `src/lib/audit.js`, which exports:
- `auditMenaionEntry(entry)` — returns `{ status, missing, hasPlaceholder }`
- `auditPentecostarionEntry(entry)` — same shape
- `auditSummary(results[])` — aggregates complete/partial/structural counts
- `MENAION_REQUIRED` — 14 required fields
- `PENT_REQUIRED` — 7 required fields + kontakion check

Unlike the CLI script, the browser audit operates on **parsed JS objects** (not raw text), so it checks actual field presence and deep-searches for placeholder text in nested values. Each entry card shows a green/amber/red indicator.

### Required Fields

**Menaion** (14 fields): `source_file`, `rank`, `fekula_section`, `has_great_doxology`, `has_polyeleos`, `has_litya`, `has_paroemias`, `magnificat_sung`, `matins_format`, `feast_e`, `aposticha_source`, `stichera_lord_i_call`, `troparion`, `kontakion_ode6`

**Pentecostarion** (7 fields + kontakion): `hours_format`, `matins_format`, `has_great_doxology`, `feast_e`, `aposticha_source`, `stichera_lord_i_call`, `troparion`, plus either `hours_kontakion` or `kontakion_ode6`

### Placeholder Patterns Detected

Both tools flag these as incomplete: `[Menaion sticheron`, `[stichera not yet`, `[NYE]`, `not yet encoded`, `Track B`, `Phase 2`, `to be encoded`

### Encoding Spec

Full encoding rules are in `encoding_rule_v2.md` at repo root. Key principle: **no field is ever silently omitted** — every field must be either populated, explicitly `null`, or carry an `ABSENT`/`NOT IN PDF`/`NOT YET ENCODED` annotation.

## Current Priorities

1. **Debug and test** — the tool has grown substantially (9 services built). Navigate through dates and exercise all the services, especially the new Pre-Communion Prayers.
2. **Triodion/Lenten services** — the next major development horizon. Calendar engine already tracks Lent, but assembly rules and Triodion data don't exist yet. Requires:
   - Research how Lenten Hours differ from ordinary Hours (prostrations, special prayers, structural changes)
   - Design the Triodion data structure (keyed to pre-Lenten/Lenten offsets from Pascha, similar to Pentecostarion)
   - Build a Triodion data browser (same pattern as Menaion/Pentecostarion browsers)
   - Encode entries
3. **June/July backfill** — 35 entries missing v2.1 matins-era fields. Lower priority than Triodion but worth addressing incrementally.
4. **Encoding new months** — expand Menaion coverage beyond May–July.
