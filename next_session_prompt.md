# Next Session Prompt — Orthodox Hours Tool

## Session Startup

Follow the project instructions: clone `stevensaero/orthodox-hours` (ask for the token), read `project_notes.md`, and confirm the version badge in `hours-tool.jsx` matches. Current version: **v0.5.1**.

## Primary Task: Vespers Litiya Assembler

A detailed implementation specification is at **`vespers_litiya_spec.md`** in the repo root. Read it before starting. It covers:

- Fixed text constants to encode (OCA Litiya petitions, blessing of loaves, "O Theotokos and Virgin, rejoice!", Psalm 33 first 10 verses)
- Assembler branching logic (insertion point, Vigil troparion formula, dismissal changes)
- Reader mode adaptations (Fekula Ch. 10)
- Element IDs and validation checklist

### Source Material (Google Drive)

- **OCA Litiya prayer**: `vespers/oca/OCA_prayer_for_litiya.txt` — complete OCA diptych (5 petitions: ×40/×50/×30/×3/×3), concluding prayer, peace/head-bowing, blessing of loaves prayer. This is the authoritative source — NOT the ROCOR/HTM version.
- **HTM Vespers**: `vespers/htm/htm_vespers.md` — structural rules for Litiya placement, Vigil troparion formula, Psalm 33, transition to Matins.

### Test Cases

- **June 24** (Nativity of the Baptist, `great_feast` §2F): full Litiya stichera (3 T1 + Glory T5 + Both Now T5), Vigil troparion formula (×2 + O Theotokos ×1), Blessing of Loaves. 39-field entry, fully encoded.
- **May 25** (Third Finding of the Head, `polyeleos` §2E): `has_litya: true` but empty `litya_stichera: []`, null Glory/Both Now. Litiya petitions still served. Standard troparion (not Vigil formula). No Blessing of Loaves.
- **May 16** (simple rank, `has_litya: false`): no Litiya — verify flow unchanged.

### Implementation Approach

Inline constants in `hours-tool.jsx` (not a separate file — see discussion in project_notes.md). The Litiya text is structurally part of Vespers, ~8-10KB of fixed text, comparable to the existing litany constants already inline.

## Encoding Validation — Two Tools, One Rule Set

Two-tier system: **an entry is not complete until every required field is present AND no field contains placeholder text.**

### Tier 1: CLI Audit (`scripts/audit.js`)

```bash
node scripts/audit.js all           # everything
node scripts/audit.js may           # just May
node scripts/audit.js pentecostarion
```

Text-based, parses raw JS with regex. Per-file summary + per-entry missing-field lists.

### Tier 2: In-Browser Data Browsers

- **Menaion**: `/orthodox-hours/menaion` — also linked from How It Works panel
- **Pentecostarion**: `/orthodox-hours/pentecostarion` — same

Both use the shared audit module (`src/lib/audit.js`). Parsed-object audit with green/amber/red indicators. Missing fields shown as individual monospace tags. Both have "← Hours Tool" back links.

### Conditional Litiya Audit

When `has_litya === true`, the audit also requires `litya_stichera` (array, may be empty), `litya_glory`, and `litya_both_now`. Null values pass (field present but no dedicated text in PDF). Dates with `has_litya: false` are unaffected.

### Current Audit State (v0.5.1)

- May: 16/16 complete
- June: 1/30 complete (June 24 is the one complete entry — full v2.1 with Litiya)
- July: 0/5 complete (pre-v2.1 entries)
- Pentecostarion: 23/23 complete (21 complete + 2 partial per browser — the CLI counts differ because it uses regex)

## Architecture Notes

### Fekula Rules Drive Branch Logic

Every assembly decision traces to a specific Fekula section. The `fekulaSection` constant (computed from rank + season) drives citation badges on every movable element. The `FekulaBadge` component renders clickable badges that expand to show the full Fekula quote.

### Great Feast Dates Now In Scope

`great_feast`, `forefeast`, `afterfeast`, `apodosis` are all in `inScope`. Services render with a gold informational banner noting what's working vs. in development. `great_feast` is recognized in `isHighRank` (8-stichera count, Entrance shown, Menaion aposticha used).

### Key Files

```
src/components/hours-tool.jsx     — main tool + all assemblers
src/components/menaion-browser.jsx — Menaion data browser
src/components/pentecostarion-browser.jsx — Pentecostarion data browser
src/lib/audit.js                  — shared audit module
src/data/menaion/may.js           — May entries (16, all complete)
src/data/menaion/june.js          — June entries (30, 1 complete)
src/data/menaion/july.js          — July entries (5, 0 complete)
src/data/pentecostarion.js        — Pentecostarion (23 entries)
src/data/pre-communion.js         — Pre-Communion prayers (35 sections)
encoding_rule_v2.md               — encoding spec (v2.1 with Litiya amendments)
vespers_litiya_spec.md            — Litiya assembler implementation spec
project_notes.md                  — canonical project notes
```

## Backlog (after Litiya)

- **June/July backfill** — 34 entries missing v2.1 fields
- **Pentecostarion P+20–P+34** — 15 weekday entries
- **Triodion/Lenten services** — next major development horizon
- **Temple kontakion/sticheron** — future user setting
- **Encoding new months** — expand beyond May–July
