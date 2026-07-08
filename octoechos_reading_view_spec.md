# Octoechos Reading View — Specification

**Status:** DRAFT for Bill's review (July 8 2026) · **Target:** `octoechos-v2-browser.jsx` + `presentation.js` + edit-engine adapter
**Companion specs:** `octoechos_v2_spec.md` (§12 viewer contract), `local_editing_spec.md`, `encoding_rule_v2.md` §3

---

## 0. The bound-book principle

The V2 Octoechos data serves TWO consumers with equal standing: the
assembler (machine) and the reader (human). The product is a digital
Octoechos that reads like the printed St. Sergius book — a priest or
reader opens a tone and a day and sees THE PAGE, in liturgical order,
in familiar typography — while every text remains auditable to the byte
and correctable through a provenance-preserving pipeline.

The existing §12 viewer is an AUDIT surface built for encoding sessions.
It remains (the contract is unchanged); this spec adds the READING
surface on top of the same schema-driven walker, so the two views can
never disagree about what data exists.

**Acceptance test (the priest scenario):** a reader who notices a
suspect Theotokion in an assembled service can navigate from that text
to its Octoechos page, see it rendered as the book prints it, read the
source file + locus, open the PDF to the same page, and either verify
the bytes or file a correction — in under a minute, with no knowledge
of JSON, schemas, or this repo.

## 1. Navigation — tone → day → service (RULED, Bill July 8 2026)

The natural flow of Octoechos use: pick the tone, then the day of week
the service falls in, then the service. Example path: **Tone 4 →
Saturday Evening → Great Vespers.**

1. **Tone shelf.** Landing view: **Tone 1 … Tone 8** (Arabic numerals
   — no Roman numerals anywhere in navigation chrome; printed headings
   inside the page text keep whatever the book prints). Encoded tones
   open; unencoded tones (currently 1, 6, 7, 8) render a title page
   with "Not yet encoded — coming soon" and the encode-status list
   (from `_encoded` claims).
2. **Day-of-week picker.** Within a tone, days in liturgical sequence,
   evenings distinct from mornings because that is how the services
   fall: Saturday Evening · Sunday · Sunday Evening · Monday · Monday
   Evening · Tuesday · … · Friday Evening · Saturday. This maps
   one-to-one onto the data's own keying (Vespers by evening served,
   Compline by night, Matins/Liturgy by morning).
3. **Service picker.** Within the day slot, the services that fall
   there, in order: e.g. Saturday Evening → Little Vespers, Great
   Vespers, Compline; Sunday → Nocturns, Matins, Liturgy; Monday →
   Matins, Liturgy. One tap opens the page at that service.
4. **"Today" shortcut.** One control asks the tool's existing calendar
   engine for the current tone + day and opens the right page. The
   reader's daily entry point.
5. **Unencoded/partial sections** render an inline "not yet encoded"
   card (never a blank), driven by the `_encoded` claims — the same
   truth the validator uses.

## 2. Page rendering — typography of the printed book

All rendering reads canonical modules only (amendment F: the
presentation registry carries hints, never text). The registry grows a
`reading` hint vocabulary per manifest path; anything without a hint
still renders through a legible default (the §12 generic fallback,
restyled to be book-plausible rather than form-like).

1. **Headings** — centered small-caps for service headings (AT GREAT
   VESPERS) and ode headings (ODE III), exactly as the book sets them.
2. **Rubrics** — italic, subdued color, set off from hymnography.
   Printed rubric strings render verbatim (they are stored verbatim).
3. **Verses** — indented, italic, with the printed "Verse:" label.
4. **Stichera / troparia** — indented prose paragraphs in print order.
5. **Printed labels render as printed** — "Glory ..., Both now ...,
   Theotokion:", "To the martyrs:", "Spec. Mel.: “…”:", "Irmos:",
   compound labels — reconstructed from `label` / `sourceLabel` /
   `spec_mel` fields, which store the printed forms.
6. **Canons** — ode heading, irmos with its label, refrains where
   stored, items in order with their printed labels; Shape A
   sub-canon headings between groups.
7. **Devices render as printed** (§2.7): "(Twice)" after the text;
   incipit lines shown as printed (with their "Repeat:" label where
   the source has one) plus an unobtrusive "= sticheron N" link to
   the referent; full double prints just print twice.
8. **Refs resolve invisibly.** A `{ref}` renders its referent's text
   inline — the reader sees the Thursday prokeimenon, not a pointer.
   Audit mode shows the ref chain.
9. **Pointing modes.** Default **"as printed"**: the `*` / `**`
   markers visible, dialect true to source — this IS what the bound
   page shows. Toggle **"clean reading"**: strip-at-render per
   encoding_rule_v2 §3.4 (normalizeSergius → line breaks), for prayer-
   desk reading. The stored string is never touched; both modes are
   renderings.
10. **Sic footnotes.** A position whose path is pinned in
    `sic_register.js` renders a small footnote glyph in reading mode;
    hover/tap shows the register note ("printed thus in 4-4; stray
    period"). The reader learns the oddity is the BOOK's, not ours.
    Footnote text derives from the register at runtime — no copies.

## 3. Audit mode — unchanged contract, demoted chrome

The §12 obligations stand: per-position raw toggle, tier badge,
sourceLabel, src {file, locus}, homoglyph log, recurrence cross-links,
generic fallback, coverage gate. Audit becomes a quiet per-page toggle;
provenance surfaces as one line under a position ("4-3.pdf — Tuesday
Matins, sessional set 2 closer") with a copy button. Switching modes
preserves scroll position.

## 4. Deep links — the truthing loop

1. Every position has a stable anchor: its schema path
   (`#tone4.matins_weekday.wed.sessionals[0].closer`). Opening one
   scrolls to and highlights the position with its provenance line
   expanded.
2. **Phase-2 wiring (assembler side):** every Octoechos-sourced text
   in an assembled Hours/Vespers service links to its anchor. That is
   the priest's path from "this looks wrong" to the page and the PDF
   locus in one click.
3. Anchors are the same path grammar the validator, registers, and
   edit engine use — one vocabulary everywhere.

## 5. Corrections — three lanes, in place

The integrity boundary is the GATE, not a Claude session. Edits happen
locally in the viewer (dev mode, per local_editing_spec.md); git review
and the validator remain the enforcement points. The editor never runs
git.

**Lane 1 — transcription error (our bytes diverge from the print).**
   In-context edit via the existing recast engine, through a new
   **octoechos_v2 adapter**: `{ datasetId: 'octoechos_v2', files:
   src/data/octoechos_v2/*.js, pathGrammar: schema_v2 paths, validator:
   validate_octoechos_v2.mjs (block on exit ≠ 0) }`. Because the V2
   gate byte-checks register pairs and sic entries, a lane-1 edit that
   breaks a recurrence pair or "fixes" a registered sic FAILS the save
   — silent correction is structurally impossible; the failure message
   names the register entry so the editor either fixes both prints of
   a true duplicate or refines the pair to variant (session work if it
   ripples). **Attestation required:** the edit form requires a
   "verified against {file, locus}" statement; it is embedded in the
   suggested commit message returned by dryRun. Corrections come from
   the printed page, never from memory.
   **Dialect rule (diverges from local_editing_spec §8):** the V2
   Octoechos stores the SOURCE dialect verbatim (St. Sergius `*` /
   `**` retained per encoding_rule_v2 §3.3). The V2 adapter's lint
   enforces verbatim-doctrine, NOT OCA-dialect conversion. §8 remains
   correct for the Menaion adapter only.

**Lane 2 — source misprint (the book is wrong).** Never edited. The
   affordance on a suspect text offers "record as printed (sic)" —
   which, in v1 of this spec, produces a prefilled structured report
   (path, bytes, locus, note) for session-side register entry; a
   structured sic-register form is a follow-on once lane 1 proves out.

**Lane 3 — OCA divergence (the book is right; OCA appoints
   differently).** RULED (Bill, July 8 2026): the override layer is
   designed DATASET-WIDE from day one — OCA-appointed text or verse
   pointing can override the Menaion, Pentecostarion, Octoechos, and
   the future Triodion alike. One shared entry shape, one shared
   validator, one module per dataset:
   `src/data/overrides/oca_octoechos_v2.js` (first to build),
   `oca_menaion.js` / `oca_pentecostarion.js` / `oca_triodion.js`
   (same shape, built when needed). Entry: `{ path, kind:
   'text'|'pointing', text, source, date, note }` — position-keyed
   against each dataset's own path grammar, own provenance,
   gate-checked (path must resolve; source citation required). The assembler prefers an override where
   one exists; the reading view shows the OCA text in place with a
   marginal "OCA" badge and the St. Sergius reading one tap away —
   both readings always visible, canonical bytes never falsified.
   Override entry starts as a structured form in dev mode (it is
   additive — the safest possible edit) and is the recommended FIRST
   editable surface after lane 1.

**Propose-correction (production / non-dev).** The deployed site is
   static; no endpoint exists. The same affordance degrades to a
   prefilled report (copyable block: path, stored bytes, locus,
   proposed reading, reason) the reader can send to Bill. Nothing on
   the public site can mutate anything, structurally.

## 6. What this spec does NOT change

- Canonical data files, schema_v2, validators, registers — untouched.
- The §12 audit contract — intact, restyled only.
- encoding_rule_v2 §3 storage rules — rendering modes only.
- The Menaion/Pentecostarion editing adapters — untouched.

## 7. Build phases (each gate-green, independently committable)

- **Phase A — the page.** Reading view: tone shelf, chapter tabs,
  print-order rendering with the §2 typography, ref resolution,
  as-printed/clean toggle, sic footnotes, unencoded placeholders.
  Audit demoted to toggle. Registry gains `reading` hints (same-commit
  rule: new print variants get hints in the commit that encodes them).
- **Phase B — the loop.** Position anchors + highlight; assembled-
  service deep links from hours-tool; propose-correction report.
- **Phase C — lane 1 editing.** octoechos_v2 edit-engine adapter with
  attestation + register-aware failure surfacing.
- **Phase D — lanes 2/3 forms.** oca_overrides.js + assembler
  precedence + dual display; structured sic entry.

Version: minor bump at Phase A ship (v0.32.0), then per policy.
Tones 6–8/1 encoding resumes after Phase A, landing into the new page
(and gaining the reading view as a human error-surfacing gate).

## 8. Decisions

1. **Primary navigation — RULED:** tone → day of week → service
   (Tone 4 → Saturday Evening → Great Vespers); Arabic tone numbers
   in chrome. (§1 updated.)
2. **Default pointing mode — RULED (Bill, July 8 2026):** "as
   printed" (Option A) is the default — the reading view's identity
   is the bound page. "Clean reading" is a persistent per-user
   toggle.
3. **OCA override scope — RULED:** dataset-wide design from day one
   (Menaion, Pentecostarion, Octoechos, Triodion) — shared shape and
   validator, per-dataset modules. (§5 lane 3 updated.)
