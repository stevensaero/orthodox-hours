REVIEW DRAFT — Pointed Hymnography Marker convention propagation
(nothing written to repo files yet; this is for your approval)

═══════════════════════════════════════════════════════════════════════════════
A. encoding_rule_v2.md — NEW HEADER + CHANGELOG (replaces the v2.1 header block)
═══════════════════════════════════════════════════════════════════════════════

# ENCODING RULE v2.2 — Orthodox Hours Tool
**Authority:** Fekula & Williams (2009) · HTM Horologion · OCA calendar (oca.org)
**Updated:** June 2026 · **Supersedes:** v2.1 (and all prior)

**v2.2 changes — POINTED HYMNOGRAPHY MARKERS (canonical):** Every pointed text
field (stichera, troparia, kontakia, sessional hymns, exapostilaria, the Praises,
irmoi — any text the choir points and sings) stores ONE marked string as the
single source of truth, in the OCA marker dialect: `|` line end · `//` penultimate
line · `[brackets]` director emphasis. Convert other sources' markers at encode
time; never store them. Strip-at-render. Applies across menaion / pentecostarion /
octoechos / triodion. See §3. (v2.1 kontakion field-name unification retained.)

═══════════════════════════════════════════════════════════════════════════════
B. encoding_rule_v2.md — NEW §3 (inserted before old §3 "Session Workflow";
   old §3–§11 renumber to §4–§12)
═══════════════════════════════════════════════════════════════════════════════

## 3. POINTED HYMNOGRAPHY — TONE MARKERS (canonical for every text field)

Every text the choir points and sings — stichera, troparia, kontakia, sessional
hymns, exapostilaria, the Praises, irmoi — is stored as ONE marked string. That
marked string is the single source of truth. Nothing is stored twice; rendering
strips or transforms the markers per context.

### 3.1 The marker dialect (OCA)

| Marker | Meaning | Notes |
|---|---|---|
| `|`  | ordinary line end | one melodic line / phrase ends here |
| `//` | penultimate line end | the second-to-last line; exactly one per sticheron |
| `[brackets]` | director emphasis | the accented syllable(s) a choir director marks |

Spacing: markers are space-padded — ` | ` and ` // ` — sitting between the text of
two lines. Real hyphens inside words are left intact (e.g. `Life-bearing`).
Bracketed emphasis may sit mid-word: `A[mer]ica`, `Resur[rec]tion`.

### 3.2 Three tiers — capture what the source gives, never invent a mark

- **Tier 1 — plain.** Source prints solid prose with no line structure (canon
  troparia, an Ikos). Store one unmarked paragraph. The machine cannot point it;
  that is a property of the source, not an error.
- **Tier 2 — `|` (+ `//` if present).** Source breaks the text into lines.
  Convert line breaks to `|`. Mark `//` ONLY if the source marks a penultimate
  line; if it does not, do not add one (the Tone Trainer's "⚠ no //" QA flag is
  then the expected, correct signal — not a bug).
- **Tier 3 — `|` + `//` + `[brackets]`.** Source carries director pointing
  (underlines in a formatted docx, or explicit accents). Capture all three.

### 3.3 Normalizing source markers AT ENCODE TIME (store only the OCA dialect)

- **St. Sergius `*` / `**`** → `*` becomes `|`; `**` becomes `//`. Convert `**`
  FIRST, so a double asterisk never collapses to `||`.
- **Formatted-docx underlines** → the underlined span becomes `[brackets]`; merge
  adjacent underlined runs into one bracket (`A[mer]ica`, not `A[mer][ica]`).
- **`//` already in the text** (OCA docx penultimate marker) → keep it, whether
  at a line end or mid-line.

Never store `*`/`**` or raw underline markup. Never count or hand-assign phrase
roles (A/B/C/D) — the Tone Trainer derives roles from the line sequence. Record
the end-of-line marks faithfully; that is all.

### 3.4 Rendering (strip-at-render — store once, present per context)

- **Data browsers** (Menaion / Pentecostarion / Octoechos viewers; the Tone
  Trainer pipe): show the marked string VERBATIM — `|`, `//`, `[brackets]`, every
  punctuation mark and syllable hyphen visible. This is the truthing view and the
  Tone Trainer's native input.
- **Hours-tool forward-facing verses:** `|` → line break (symbol hidden);
  bracketed words reassembled whole with the bracketed syllable underlined
  (`Resur[rec]tion` → Resur‹u›rec‹/u›tion); `//` kept visible; punctuation and
  real hyphens kept. A Tier-1 plain string passes through as one paragraph.

### 3.5 The `director: true` flag

A field whose text carries Tier-3 director marks sets `director: true` beside
`tone` / `text` / `source`, telling the Tone Trainer a director pointing exists
(vs. machine-only). Tier-1 / Tier-2 fields omit the flag.

═══════════════════════════════════════════════════════════════════════════════
C. encoding_rule_v2.md — pre-save checklist addition (new line under each block)
═══════════════════════════════════════════════════════════════════════════════

- [ ] Pointed text fields use the §3 marker dialect (`|` `//` `[brackets]`);
      source `*`/`**` and underlines converted; no invented `//`; `director: true`
      set where Tier-3 marks are present

═══════════════════════════════════════════════════════════════════════════════
D. project_notes.md — NEW BLOCK (under the header, before "Project Summary")
═══════════════════════════════════════════════════════════════════════════════

## Pointed Hymnography — Tone Markers (canonical — read before any encoding)

Every pointed text field stores ONE marked string (OCA dialect): `|` line end,
`//` penultimate line, `[brackets]` director emphasis. Convert St. Sergius
`*`/`**` (→ `|`/`//`, `**` first) and docx underlines (→ `[brackets]`) at encode
time; never store source markers. Capture what the source gives — Tier 1 plain /
Tier 2 `|` / Tier 3 director — and never invent a `//`. Strip-at-render: data
browsers show the string verbatim; the hours tool converts `|`→line break and
reassembles bracketed words (underlining the bracketed syllable). Full rule:
encoding_rule_v2.md §3. P+63 Russia + North America are the first entries encoded
this way (drafts complete, pending integration into pentecostarion.js).

═══════════════════════════════════════════════════════════════════════════════
E. PROJECT INSTRUCTIONS — paste-in snippet (Encoding Workflow section, Claude UI)
═══════════════════════════════════════════════════════════════════════════════

**Pointed hymnography — tone markers (canonical).** Every pointed text field
stores ONE marked string in the OCA dialect: `|` line end, `//` penultimate line,
`[brackets]` director emphasis. Convert St. Sergius `*`/`**` (→ `|`/`//`, `**`
first) and docx underlines (→ `[brackets]`) at encode time; never store source
markers. Capture what the source gives (Tier 1 plain / Tier 2 `|` / Tier 3
director); never invent a `//`. Strip-at-render. Full rule: `encoding_rule_v2.md` §3.

═══════════════════════════════════════════════════════════════════════════════
F. STALE-WORKFLOW CLEANUP (optional, same pass) — passages to replace
═══════════════════════════════════════════════════════════════════════════════

encoding_rule_v2.md §2 currently says Claude produces `.txt` records placed in
Drive and "every tool update requires a corresponding Drive .txt record." →
Replace with: Drive delivers source PDFs only; encode directly into the monthly
data files; git history is the record. (Matches current Project Instructions.)

project_notes.md header currently says to "save a new Drive snapshot as
project_notes_vX.X.X.md" and that "the authoritative live copy is always
/mnt/user-data/outputs/project_notes.md," and the VERSIONING PROTOCOL says to
search Drive for the highest-numbered snapshot. → Replace with: project_notes.md
is edited directly in the repo and committed (`docs:` prefix); no Drive snapshot;
no versioned filename; git history is the version record.
