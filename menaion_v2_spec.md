# Menaion V2 Data Specification

**Revision 2 — reconciled.** Supersedes revision 1 in full. Modeled
section-for-section on `octoechos_v2_spec.md`.

**Status: Phase 0 — ready for Bill's review.** All seven Phase 0 questions are
ruled (§13). All fourteen blocking defects from the revision-1 parity audit are
closed in this revision (§14). Two external blockers remain, neither of which
prevents Phase 1: the General Menaion is not yet visible in the mount (§6.2),
which gates Phase 2 only. The `08-23` gap is closed as a permanent source fact.

**Evidence basis.** Every structural claim carries a tag (§2.12). Claims tagged
`[A-attested]` were confirmed by machine scan of all 37 August files plus hand
verification against the source; the scans are §1. Claims tagged `[unattested]`
are asserted from general knowledge and **must not be built against** — they are
listed so they can be falsified, not trusted.

**What Phase 0 still owes:** the §2.3a recurrence evidence catalog. The Octoechos
equivalent took eight source files of close reading and is the load-bearing
justification for per-position storage. This document has the principle and the
register mechanism, but only a seed catalog. It is the first task of the August
encoding pass, not a blocker on infrastructure.

**Do not begin Phase 1 until Bill confirms this spec complete.**

---

## 1. Source inventory and scan results

### 1.1 Source delivery — Drive is retired

**Ruling R-7.** Beginning with August, the entire liturgical library moves from
Google Drive to mounted local folders. All Menaion entry PDFs land in:

```
Orthodox Hours/Menaion - St. Sergius/
```

`encoding_rule_v2.md` §2 ("DRIVE — SOURCE DELIVERY ONLY") is **rewritten, not
amended**, and every `orthodox_liturgics/...` Drive path in §1, §2, and §2.1 is
replaced with a folder-relative path. Drive retains no role in source delivery.

**Delivery state — RESOLVED.** The mount now holds 166 files in two folders:

```
Orthodox Hours/Menaion - St. Sergius/   140 files — May 16-31, June, July, August
Orthodox Hours/General_Menaion/          26 files — by saint type (§6.2)
```

Date coverage: **May 17 files** (the month begins at 05-16; 05-01…05-15 are not
supplied), **June 37**, **July 49**, **August 37**. Variant suffixes run to `B`
in June and `F` in July. `08-23` remains the one gap inside a supplied month
(§1.2).

Still on Drive and still to migrate: the Pentecostarion and the Fekula chapter
`.txt` files. Neither gates Phase 1 or Phase 2.

### 1.2 File census `[A-attested]`

37 files, 6–24 pages. Seven `A`-variant files (`08-01A`, `08-03A`, `08-08A`,
`08-18A`, `08-26A`, `08-28A`, `08-30A`); no `B`/`E`/`F` (July reached `F`, at
07-05).

**There is no `08-23` daily file** — the Apodosis of the Dormition. Verified
absent from the folder and confirmed by Bill: **it does not exist and cannot be
supplied.** This is a closed finding about the source, not a pending delivery.

Handled by the `no_daily_source` declaration (§7.3) at the date level. The date
is **not** reconstructed from 08-15's propers: an apodosis repeating the feast's
own hymns is an assembly rule Fekula settles at service time, and materializing
it into the data layer would invent a print site the book does not have. The
Menaion browser shows 08-23 as a date with a declared source gap; the assembler
resolves it from Fekula and 08-15, as it would any other apodosis.

**File count ≠ commemoration count.** A variant file is a second *file* for a
date, not a second date; and because afterfeast propers print as peer
commemorations inside each daily file (§1.5), a date inside an afterfeast cycle
that also has a variant file carries three or more commemorations. Six of the
seven variant files sit inside the Transfiguration or Dormition cycles. The data
model handles this at §5.2.

### 1.3 Text-layer quality `[A-attested]`

| check | result |
|---|---|
| non-Latin letter codepoints (Cyrillic homoglyphs) | **0 / 37 files** |
| ASCII digit-zero-as-O | **0 / 37 files** |
| marker dialect | **St. Sergius `*` / `**` throughout; zero `\|`, zero `//`** |

Six of seven Octoechos chapter files were homoglyph-contaminated. **No August
Menaion file is.** The checks still ship — they are cheap, and eleven months are
unscanned — but August will not exercise them.

### 1.4 Overprinted glyphs — an extraction setting, not an artifact class `[A-attested]`

Headings initially extracted double-struck — `AATT MMAATTIINNSS`,
`OODDEE VVIIIIII` — across all 37 files, 527 affected lines.

**This is not a source artifact and needs no normalizer.** The PDFs draw each
display character twice at near-identical positions for faux-bold; a naive
extractor emits both copies. `pdfplumber`'s `dedupe_chars()` resolves it at the
source:

| | naive extract | `dedupe_chars()` |
|---|---|---|
| doubled lines across 37 files | 527 | **3** |
| `*` markers preserved | — | 7,051 |
| `**` markers preserved | — | 643 |

Body text and pointing marks are untouched. **Three residual lines remain** —
`OODDEE II` and `OODDEE VVII` in `08-22`, `OODDEE VVIIIIII` in `08-28A` — where
the overprint offset exceeds the default tolerance. Those three are hand-checked;
they are ode headings, not hymn text.

**Rule:** `scan_source.mjs` and every encoding pass extract with `dedupe_chars()`.
The gate keeps a cheap doubled-run check as a tripwire in case a future file
defeats the tolerance, but there is **no `doubled_glyph_log`, no normalizer, no
threshold to calibrate, and no hand transcription of headings.**

**Recorded because the reasoning was nearly wrong.** Revision 1 diagnosed this as
a new artifact class parallel to the Octoechos homoglyphs and specified a
line-scoped normalizer, a per-node log, a gate hard-fail, and hand transcription
of every heading in the month. The tell that it was wrong: the same doubling
appears in the Octoechos Tone 2 chapter PDFs, which were encoded without anyone
reporting it — meaning the earlier sessions' extractor already handled it. A
"source finding" that the source's other books share, and that a prior pass never
saw, is a tooling difference. **Data pattern ≠ source truth cuts both ways: the
pattern was in my reader, not the book.**

### 1.5 Structural census `[A-attested]`

Section headings, by file count:

| section | files |
|---|---|
| `AT LITURGY` | 37 |
| `AT MATINS` | 36 |
| `AT VESPERS` | 27 |
| `AT GREAT VESPERS` | 10 |
| `AT LITTLE VESPERS` | 8 |
| `AT COMPLINE` | 2 — `08-05`, `08-07`, both in the Transfiguration cycle |
| Odes | 37 files print **I, III, IV, V, VI, VII, VIII, IX** — Ode II in none |

`AFTERFEAST OF THE TRANSFIGURATION` and `AFTERFEAST OF THE DORMITION` appear as
**titled bodies of propers inside the daily file**, alongside the day's saint.
The source treats an afterfeast as a peer commemoration. This settles §5.2.

Two absences are recorded as **heading-absent, not confirmed absent**: no
`Synaxarion` heading in any file, and no `AT COMPLINE` in `08-14` (the Dormition
forefeast). A heading scan cannot distinguish "not printed" from "printed
unheaded," and the project has been burned by exactly that inference before.
Both go to close reading (§13, open items).

### 1.6 Print-site comparison — troparion and kontakion `[A-attested]`

All 37 files parsed for every print site of every `Troparion:` / `Kontakion:`
heading; sites compared pairwise.

| | troparion | kontakion |
|---|---|---|
| files with ≥2 print sites | 35 | 30 |
| median minimum similarity | **98.9%** | 93.6% |
| files ≥90% | 34/35 (97%) | 19/30 (63%) |

Every outlier was hand-checked against the source. **All were measurement
artifacts, not source divergence:**

- `08-24` kontakion (2.0%) — prints identical; one carries a
  `Spec. Mel.: "Today the Virgin ...":` label the extractor swept into the body.
- `08-01` troparion (38.7%) — prints identical; one is trailed by the long
  `Be It Known:` rubric about transferring the Cross to the table of oblation.
- `08-19` troparion (98.8%) — **two different hymns sharing a label**:
  `Troparion of the holy martyr, in Tone V` and `Troparion of the feast, in
  Tone I` (Dormition afterfeast). Each hymn's own sites match exactly.

**Finding: within a single hymn, August print sites match.** Residual divergence
is entirely label/rubric bleed plus different hymns sharing a label.

**Consequence, and a trap.** The discriminator is not the hymn label but the
heading naming the commemoration — *of the holy martyr* vs *of the feast*. The
source's own typography carries the commemoration axis. **An extractor keying on
the bare label would have silently merged a martyr's troparion with the
Dormition's.** Keying on the full heading is a rule (§12 step 5), not a lesson.

### 1.7 Label vocabulary by service `[A-attested]`

Scanned across all 37 files; instance counts in parentheses. This is the
evidence base for §5's field lists — every field below traces to a label the
source actually prints.

**Great Vespers / Vespers:** `Glory ...` (31) · `Glory ..., Both now ...` (29) ·
`Entrance. Prokeimenon of the day. Three Lessons` (11) · `On the Aposticha, these
Stichera` (9) · `Both now ..., Theotokion` (5) · `Both now ..., of the feast` (9)
· `Glory ..., Both now ..., Theotokion` (8) · `Troparion of the {feast,
forefeast, holy martyr(s), venerable one/fathers, holy apostle}` · `Spec. Mel.:
"…"` (many distinct forms) · `Glory ..., the composition of Anatolius` (2).

**Little Vespers:** `Glory ...` (7) · `On the Aposticha, these Stichera` (5) ·
`Glory ..., Both now ..., Theotokion` (4) · `Glory ..., Both now ..., in the same
melody` (4) · `Both now ..., Theotokion` (3) · `Troparion of the feast` (2) ·
`Spec. Mel.` forms.

**Matins (517 label instances — by far the largest section):**
`Glory ..., Both now ..., Theotokion` (36) · `Kontakion of the {feast, venerable
one, holy martyr, venerable fathers}` (31) · `After the Polyeleos, the Sessional
Hymn` (12) · `Selected Psalm verse` (11) · `After Psalm 50, this Sticheron` (9) ·
`Exapostilarion of the {feast, venerable one}` (12) · `Glory ..., Both now ...,
Exapostilarion of the feast` (7) · `Sessional Hymn` and `Sessional Hymn of the
{holy martyr, venerable one}` (11) · `Song of Ascents, the first antiphon of
Tone IV` (4) · `The composition of {Joseph, Cosmas of Maiuma}` (10) ·
`Glory ..., Both now ..., in the same melody` (6) · ~20 distinct `Spec. Mel.`
forms.

**Liturgy (107 instances, and almost entirely propers):** `Troparion of the …`
(≈40) · `Kontakion of the …` (≈40). Nothing else clears two instances.

Notable absences from the label vocabulary: no `Synaxarion`, no `Katavasia`, no
`Magnification` label (it appears as a heading), no `Communion verse` label.

---

## 2. Scope and principles

### 2.1 Parallel build

Complete replacement for `src/data/menaion/` (may/june/july.js), built in parallel
under `src/data/menaion_v2/`. **V1 stays live and untouched until Phase 5
cutover.** This matters more than it did for the Octoechos: `hours-tool.jsx`'s
assembler reads V1 Menaion data on every date via `_menaionLoaders` /
`_loadMenaionMonth` / `getMenaionEntry`. Nothing here touches that path.

Known V1 errors are **not** patched in V1; they are corrected by V2 encoding from
source, and every divergence is a register row (§11).

Route `/menaion-v2` ships new; `/menaion` keeps serving V1. At Phase 5, `/menaion`
becomes a `MenaionRedirect` copied from `OctoechosRedirect` (`App.jsx:14–17`),
**preserving both query and hash** so `?comm=MM-DD&date=…&from=tool` deep links
survive.

### 2.2 Full capture at every rank

`encoding_rule_v2.md` §6 — "The tool assembles the Hours …, not a full Matins
service" — **is superseded for V2 at every rank**, and must be amended in the
commit that declares this spec complete.

> **Menaion V2 captures everything its source prints for a date.** The test is
> not "does the assembler consume it" but "would a reader holding the printed
> Menaion find it here." Rank governs what the *assembler* selects; it never
> governs what the *encoder* captures.

§6's `06-29` exception ("not a template") dissolves — that depth becomes the
floor. The 06-29 V1 entry is retained as the **V1 comparison surface** for full
Matins shape (§11), being the only place V1 encoded canons, sessionals,
magnification, and a Matins prokeimenon.

### 2.3 Verbatim per-position storage; no deduplication

Texts that look the same across positions are stored independently, each from its
own print site. The Octoechos §2.3 catalog runs ~90 lines of evidence; the Menaion
already supplies cross-book confirmation:

- The stavrotheotokion "Having endured many pangs" prints at the Octoechos
  Tuesday-evening aposticha (2-4) **and** at July 24's LIC (`july.js`
  `lic_stavrotheotokion`) with **different `*` line breaks**.
- "When the unblemished ewe-lamb" prints in `june.js`
  `aposticha_stavrotheotokion`, in `july.js` pointed, and twice in 2-6 — and
  `july.js` breaks after "ewe-lamb" where 2-6 does not.

Menaion print sites demonstrably vary from Octoechos print sites of the same
hymn. Per-position storage is the only shape that survives.

**Note the interaction with §2.4.** Per-position storage governs *hymns at
different positions*. R-1's canonical field governs *one hymn reprinted at
several positions within one commemoration, verified identical*. These are the
same rule the Octoechos applied (§2.2 principle plus its §4.1 exception), not two
competing ones.

**3a. The recurrence register.** `known_recurrences.js`, entries
`{ a, b, relation: 'identical' | 'variant' | 'family', note }`. Gate rule: every
`identical` pair byte-matches; every `variant` pair does not; `family` asserts
nothing and **must** be upgraded in the same commit that encodes either position.
Steady state is zero `family` entries. **Menaion extension: paths may cross
books** — an `a` in `menaion_v2` and a `b` in `octoechos_v2` is legal, and the
gate resolves both (§10.4 gives the grammar). The two bullets above seed it.

### 2.4 Canonical fields — one per (commemoration, hymn type)

**Ruling R-1**, measured at §1.6. One canonical field per *(commemoration, hymn
type)* — not per date. Octoechos §4.1 discipline applies unchanged: the encoder
verifies every print site matches before collapsing; any divergence is logged and
flagged to Bill, never silently picked; the field records which sites were
verified in `verified_sites: [locus, …]`.

### 2.5 Pointing

`encoding_rule_v2.md` §3 governs, read live each session. St. Sergius `*` / `**`
retained verbatim as source provenance, normalized only at render via
`normalizeSergius`. Tier is a **per-item** source fact, and one array may
legitimately mix tiers across `spec_mel` sub-groups (§3.2, case 07-08) — marker
consistency is checked per sub-group, never across a whole array.

**Tier 3 is defined but not produced in August** (R-2, §2.9).

### 2.6 Provenance

`src: {file, locus}` and an explicit `tier` are **mandatory on every text node**.
Absence of a tier is a hard-fail, not "unpointed." Plus `sourceLabel` where the
source's name differs from ours, `spec_mel` verbatim per print site, and
`composer` / `acrostic` where printed — the label scan found
`The composition of Joseph` and `of Cosmas of Maiuma` (10 instances), so composer
attribution is real August data, not an Octoechos-only field.

### 2.7 Rubrics are data

Printed rubrics stored verbatim in `rubric` / `*_rubric` fields on the section
they govern — never as bracketed placeholders inside hymn arrays. V1's
`aposticha_glory: "[Glory from Menaion if appointed]"` is the named anti-pattern
and the gate forbids it.

**Ruling R-5.** Every printed rubric is captured, including long ones — the
`08-01` `Be It Known:` block about transferring the Cross to the table of
oblation is the reference case. Where a rubric *names* a text without printing it
("Trisagion through Our Father," "It is truly meet," `Song of Ascents, the first
antiphon of Tone IV`), the **rubric** is Menaion content and is stored; the
**named text** belongs to another book and is not fetched in. This is the
Octoechos `frame_rubric` treatment, and each such class is recorded in the
exclusion register (§6.3) so the audit trail shows it was seen.

Assembly *decisions* trace to Fekula; the printed rubric is source evidence
beside them. **The data gate never adjudicates rank or assembly** (§9).

### 2.8 Repeat and reference devices

Mirror the source's own device, always: full double print → two positional
entries; "(Twice)" → `repeat: 2`; incipit-plus-ellipsis → verbatim incipit string
+ `incipit_ref` naming the referent, gate-checked by prefix match. **Never convert
one device into another, and never silently resolve an incipit into full text.**

V1's `repeatIndex: N` marker is a *fourth* device — a pointer, not a print record
— which `audit.js` currently reconciles against `stichera_lord_i_call_count` with
three alternative arithmetic tests. **V2 does not carry it.** Every V1
`repeatIndex` use maps to one of the three source-mirroring devices, and each
mapping is a register row (§11).

### 2.9 OCA — calendar live, texts and pointing deferred

**Ruling R-2.** August encodes **St. Sergius text only**, at Tier 1/2, exactly as
Octoechos V2 did. The OCA calendar remains live and governs which commemoration
is primary (`encoding_rule_v2.md` §1); divergences are logged in
`oca_register.js` — `{date, commemoration, field, sergius_reading, oca_reading,
resolution, note}` — the machine-checkable twin of V1's free-text `note`, exactly
as `known_recurrences.js` is the twin of the §2.3 catalog. The standing case
(Holy Fathers of the First Ecumenical Council is movable, Pascha+42, **not** fixed
June 8; June 8 fixed = Translation of the Relics of Theodore Stratelates) becomes
a row rather than a remembered fact.

Deferred to **Phase 6, after cutover**: OCA saint-specific troparia/kontakia, and
Tier 3 director-pointed docx. The schema defines Tier 3 and `director: true` so
the later pass adds data, not structure.

### 2.10 Absence is declared, never inferred

`field_coverage_spec.md`'s indictment of V1:

> "at no surface can a human (or a check) tell the difference between a field
> that is legitimately empty and a field nobody has looked at yet. Absence is
> silent, and silence reads as 'fine.'"

V1 has two declarations against ~40 fields in use. V2 generalizes to one node
kind: `{ absent: true, reason, basis, src? }`, with `reason` from the closed
vocabulary at §7.3 and `basis` from §7.3a. Every source-conditional field is a
text node **or** an absence node — a **missing key is a gate failure**.

**`basis` is what keeps "full capture" honest.** A capture that records "nothing
printed here" identically whether the encoder ran a heading scan or read the page
is not complete; it merely looks complete, and re-scanning it reproduces the gap
(§2.12 clause 4).

`encoding_rule_v2.md` §6's rank-based shortcut ("a field absent because of rank is
simply omitted; entries have `rank`, which already carries the information") does
**not** carry into V2. Under full capture, rank licenses no omission.

### 2.11 Readings — the scripture tool owns the text

**Ruling R-4.** Month files store the **citation only**, plus the printed heading;
the viewer renders a **link into the scripture tool** for the body. No paremia,
Epistle, or Gospel text is duplicated into month files.

The source's citation formats vary across files — `§ 320 (HEB. 9: 1-7)`,
`§330 (11 :33-40)`, `(MT. 5:14-19)`, `§ 43 (MT. 11: 27-30)`. So each reading
stores **both**: `citation_verbatim` exactly as printed, and a normalized
`{book, chapter, verses, pericope_number?}` the scripture tool can resolve. The
project's existing LXX remap applies to the normalized form.

### 2.12 Attestation is bidirectional; re-encoding is first-class

**Ruling R-6.** Bill: *"August proves it right now… but if something surfaces in
September we'll have no choice but to correct August. Design with flexibility in
mind."*

Stronger than the Octoechos convention, which promoted one-way and never came
back down. The Menaion needs **demotion as a normal operation**.

1. **Tag vocabulary.** `[A-attested]` (confirmed against August source, scan
   cited) · `[expected month-invariant]` (believed general, verified in one month
   only) · `[month-specific]` (demoted; holds for the named months and no others)
   · `[unattested]` (asserted from general knowledge, evidence pending). **An
   untagged structural claim is a defect, not a default.**
2. **Demotion is a normal commit.** When a later month falsifies an
   `[expected month-invariant]` claim, the claim is demoted in the same commit as
   the data revealing it — the discipline §2.3a already applies to recurrences.
3. **Re-derivation runs against the capture, not the PDF** (Bill's ruling, and
   the reason a rule-generation stamp is *not* carried — see §2.15). When a rule
   is demoted, the affected positions are found by querying the encoded data:
   "which dates carry `kind: 'afterfeast'`", "which canons have no Ode II",
   "which closers normalized to type X". A complete capture answers these; a
   provenance stamp would only restate what the data already holds.
4. **The one thing the capture cannot self-answer is absence** (§2.10, §7.3).
   Re-scanning faithfully reproduces an absence recorded without looking hard.
   Absence nodes therefore carry a `basis` — the verification standard behind the
   declaration — and that is the whole of the provenance machinery V2 needs.
5. **Re-encoding a completed month is supported, not a repair.** §12's protocol
   runs over a month that already has data, and the gate diffs old against new
   rather than assuming an empty target.

### 2.12a Why there is no rule-generation stamp

A per-date `encoded_under: {spec_rev, rules: []}` was designed and **rejected**.
Recorded so it is not re-proposed.

Against it: it is the only register in this design that **cannot be gate-checked**
— nothing can verify that the listed rules are the rules that actually applied, so
a query over it returns a confidently incomplete worklist. Every other register
here asserts something falsifiable. A bare `spec_rev` produces false positives
(a date looks stale against a revision whose changed rule never touched it), and
false positives in a re-encoding worklist cost exactly what the stamp was meant to
save. Git already records which spec revision a month was encoded against.

Decisively: **under full capture the data answers the question itself.** That is
the point of capturing the whole document rather than the pieces the assembler
currently wants — the capture, not the PDF, becomes the thing you re-read when a
rule moves.

### 2.13 Extractor-artifact hygiene

Three classes, one discipline — normalize at encode time with a per-node log,
hard-fail in the gate, surface every instance to Bill before resolution:

| class | log field | August status |
|---|---|---|
| Cyrillic homoglyphs | `homoglyph_log` | clean (0/37) |
| digit-zero-as-O | `homoglyph_log` | clean (0/37) |
| overprinted display glyphs | *none — extractor setting* | resolved by `dedupe_chars()` (§1.4) |

Verbatim storage does not extend to the extractor's character-set errors — but it
does extend to everything the extractor got right, so each normalizer is scoped
as narrowly as its artifact allows.

### 2.14 Dynamic loading

Nothing month-keyed is ever statically imported. `loadMenaionV2Month(mm)`,
`loadMenaionV2Shared()`, `loadMenaionV2General()`, mirroring
`loadOctoechosV2Tone` / `_v2Cache`. **The cache holds multiple months at once** —
forefeast/afterfeast cycles cross month edges (August→September for the
09-01 Indiction, December→January), and re-encoding diffs two generations of one
month.

**Cross-book loading is also required.** Octoechos §3's rule — the
God-is-the-Lord rubric needs *another tone's* `dismissal_theotokion` when the
Menaion troparion's tone differs — lands on the Menaion side: the Menaion supplies
the troparion whose tone drives that lookup. The Menaion adapter must be able to
request an Octoechos tone it does not itself own.

---

## 3. File layout

```
src/data/menaion_v2/
  index.js               — MONTH_LOADERS: the SINGLE point of truth (§3.1)
  schema_menaion_v2.js   — THE SINGLE CONTRACT (§7)
  presentation.js        — presentation registry + registryLookup() (§8, §10.3)
  adapter.js             — assembler-facing node() + path attachment (§10.5)
  shared.js              — Menaion-wide invariable tables (§6.1)
  general.js             — the St. Sergius General Menaion, by saint type (§6.2)
  sic_register.js        — §7.4
  known_recurrences.js   — §2.3a, cross-book pairs legal
  oca_register.js        — §2.9
  january.js … december.js
tools/
  validate_menaion_v2.mjs      — the §7 drift gate
  validate_viewer_coverage.mjs — EXTENDED to join the Menaion manifest
  scan_source.mjs              — EXTENDED for Menaion PDFs + the §1.4 scan
src/components/
  menaion-v2-browser.jsx   — audit + reading surfaces, month picker (§8)
  menaion-v2-reading.jsx   — typography atoms + MONTH_SLOTS nav model
menaion_v2_spec.md
```

### 3.1 One month map, not two

V1 duplicates its month map — `_menaionLoaders` in `hours-tool.jsx` and
`MONTHS_WITH_DATA` in `menaion-browser.jsx`, with a comment admitting the mirror.
Adding a month means editing both.

V2 exports **one** `MONTH_LOADERS` from `src/data/menaion_v2/index.js`; the tool
and the browser both import it. The gate asserts the loader map and the month
files on disk agree.

---

## 4. Month file shape

```js
// src/data/menaion_v2/august.js
const AUGUST = {
  "08-06": {
    _encoded: ['c0.identity', 'c0.little_vespers', 'c0.great_vespers',
               'c0.matins', 'c0.liturgy'],
    commemorations: [ { …entry… } ],
  },
};
export default AUGUST;
```

Four departures from V1:

- **Date keys sorted.** `june.js` keys are in encode-session order. The gate
  requires sorted `MM-DD`.
- **`commemorations` is always an array**, even for one. V1's object-or-array
  polymorphism forces `Array.isArray(raw) ? raw : [raw]` at every consumer.
- **`_encoded` claims are per-commemoration-per-service** — `c0.great_vespers`,
  not `great_vespers`. A date-level claim could not distinguish c0's Great
  Vespers from c1's, which is the whole point of the axis (§5.2).
- **No rule-generation stamp** — see §2.12a for why.

**Variant files.** `08-03A.pdf` is a second *file* for `08-03`, not a second
date. Its contents become additional entries in `AUGUST["08-03"].commemorations`,
and each text node's `src.file` records which file it came from. There is no
variant suffix anywhere in the key space or the path grammar.

---

## 5. The commemoration entry

### 5.1 Entry shape

```js
{
  // identity — claim: 'cN.identity'
  kind, title, feast_ref?, day_of?, rank, fekula_section, oca_primary,
  source_file, note,

  // canonical hymns (§2.4) — claim: 'cN.identity'
  troparion, kontakion, ikos,       // each: text node + verified_sites[]

  little_vespers: {…},   // §5.3
  great_vespers:  {…},   // §5.4
  vespers:        {…},   // §5.4 (the ordinary form; same shape, fewer sections)
  compline:       {…},   // §5.5
  matins:         {…},   // §5.6
  liturgy:        {…},   // §5.7
}
```

**Every service object carries `order: []`** — its element keys in the sequence
the page prints them. Named fields keep the data addressable so the Hours tool
consumes it by name; `order` preserves the page so the reading view reproduces
it. Without this, a date whose page order differs from the §5 template renders in
template order and the divergence is invisible. The gate checks that `order` names
exactly the keys present, no more and no fewer.

**Text-node shape is identical to Octoechos V2's `TEXT_NODE`** — `{text, tier,
src}` required; `sourceLabel, spec_mel, director, repeat, incipit_ref, refrain,
label, type, tone, dialect, provenance_note, homoglyph_log, composer, acrostic`
optional — plus four Menaion additions:

- `name_substituted: {placeholder, value}` — General Menaion substitution (§6.2)
- `saint` — which commemoration a text belongs to where a section interleaves two
- `verified_sites: [locus, …]` — the R-1 multi-site verification record

An **absence node** `{absent: true, reason, src?}` (§7.3) is mutually exclusive
with `text` and may stand wherever a text node may.

### 5.2 The commemoration axis `[A-attested]`

`commemorations` is an array of *commemorations*, not saints. A
forefeast/feast/afterfeast/apodosis is one:

```js
{ kind: 'saint' | 'forefeast' | 'feast' | 'afterfeast' | 'apodosis',
  title,        // verbatim heading as printed
  feast_ref,    // 'transfiguration' | 'dormition' — when kind is feast-cycle
  day_of,       // afterfeast day number where the book prints one  [unattested]
  rank, … }
```

**Attested (§1.5):** `AFTERFEAST OF THE TRANSFIGURATION` and `AFTERFEAST OF THE
DORMITION` print as titled bodies of propers inside the daily file, alongside the
saint. Independently confirmed by §1.6: the source's own hymn headings name the
commemoration (`Troparion of the feast` vs `Troparion of the holy martyr`), and
`08-19` prints both in one file.

`forefeast` is attested from the label scan (`Troparion of the forefeast`,
`Kontakion of the forefeast`). `feast`, `apodosis`, and `day_of` are
`[unattested]` and confirmed or dropped at close reading. **`temple` is not a
commemoration kind** — the temple sticheron is not Menaion content (§5.4).

### 5.3 `little_vespers` — new to V2 `[A-attested]`

Declined throughout V1 ("Little Vespers content itself not captured"), while §9's
rank waterfall depends on its *existence*. Printed in **8 of 37 files**:
`08-03A`, `08-06`, `08-08A`, `08-13`, `08-15`, `08-16`, `08-29`, `08-30A`.

Attested labels: `Glory ...`, `Glory ..., Both now ..., Theotokion`,
`Glory ..., Both now ..., in the same melody`, `Both now ..., Theotokion`,
`On the Aposticha, these Stichera`, `Troparion of the feast`, `Spec. Mel.` forms.

```js
little_vespers: {
  rubric?, lic, lic_verses?, lic_closer,       // closer typed — §5.8
  aposticha_rubric,                            // "On the Aposticha, these Stichera"
  aposticha: { items, verses? }, aposticha_closer,
  dismissal_troparion?, closing_rubric?,
}
```

### 5.4 `great_vespers` / `vespers` `[A-attested]`

`AT GREAT VESPERS` in 10 files, `AT VESPERS` in 27. Same shape; the ordinary form
simply carries fewer sections and declares the rest absent.

Attested labels: `Entrance. Prokeimenon of the day. Three Lessons` (11),
`On the Aposticha, these Stichera` (9), the Glory/Both-now closer family (≈70),
`Troparion of the {feast, forefeast, holy martyr(s), venerable one/fathers, holy
apostle}`, `Glory ..., the composition of Anatolius` (2), many `Spec. Mel.` forms.

```js
great_vespers: {
  rubric?, lic, lic_verses?, lic_glory?, lic_closer,   // closer typed — §5.8
  entrance_rubric,          // "Entrance. Prokeimenon of the day. Three Lessons"
  prokeimenon?,
  readings: [ { heading, citation_verbatim, citation } ],   // §2.11 — no text
  litiya?: { rubric?, temple_sticheron_rubric?, stichera, glory?, both_now? },
  aposticha_rubric, aposticha: { items, verses? },
  aposticha_glory?, aposticha_closer,
  blessing_of_loaves?: { rubric, troparion },
  dismissal_troparion?, closing_rubric?,
}
```

**The Litiya temple sticheron stays a rubric.** `encoding_rule_v2.md` §6: "The
first sticheron at the Litiya is always the Sticheron of the temple (parish
dedication). This is NOT in the Menaion — it will be supplied by a future parish
configuration setting." Stored as `temple_sticheron_rubric`, recorded in the
exclusion register (§6.3).

`litiya` and `blessing_of_loaves` are `[expected month-invariant]` in shape —
`AT (THE) LITIYA` is attested in 9 files, but its internal field list is not.

### 5.5 `compline` `[A-attested, narrow]`

`AT COMPLINE` in **exactly 2 files: `08-05` and `08-07`**, both Transfiguration
cycle. `08-14`, the Dormition forefeast, shows no such heading — recorded as
**heading-absent, not confirmed absent** (§1.5) pending close reading.

Shape follows Octoechos §4.5: `{ frame_rubric?, canon, after_ode6?,
closing_rubric }`, canon in Shape B (§7.6).

**Rule: Compline presence is a per-date source fact, never derived from feast
position.** The 08-14 finding is why.

### 5.6 `matins` — the largest section `[A-attested]`

517 label instances across 37 files, more than all other services combined. V1
has one entry (06-29) with canons and sessionals; every other date has at most a
gospel citation and beatitudes.

Attested labels drive the field list directly:

```js
matins: {
  matins_format,                    // 'alleluia' | 'god_is_the_lord'  [unattested vocab]
  god_is_lord_rubric?, troparion_rubric?,
  sessionals: [ { rubric?, spec_mel?, items, glory?, both_now? } ],
                                    // "Sessional Hymn", "Sessional Hymn of the …"
  polyeleos_rubric?,
  magnification?, selected_psalm_verse?,          // "Selected Psalm verse" (11)
  sessional_post_polyeleos?,                      // "After the Polyeleos, the Sessional Hymn" (12)
  anabathmoi_rubric?,                             // "Song of Ascents, the first antiphon of Tone IV" (4)
                                                  //  — rubric only, per R-5
  prokeimenon?,
  gospel?: { heading, citation_verbatim, citation },        // §2.11 — no text
  psalm50_sticheron?,                             // "After Psalm 50, this Sticheron" (9)
  canons: [ { title, composer?, acrostic?, tone?, odes } ],
                                    // "The composition of Joseph|Cosmas of Maiuma" (10)
  after_ode3?, after_ode6?,         // sessional insertions — §5.9
  kontakion_ode3?, kontakion_ode6?, // "Kontakion of the …" (31) — §5.9
  exapostilarion, exapostilarion_closer?,         // "Exapostilarion of the …" (12)
                                                  // + "Glory …, Both now …, Exapostilarion" (7)
  praises?: { rubric?, stichera, verses?, glory?, both_now? },
  great_doxology_rubric?, doxology_troparion?,
  aposticha?: { items, verses? }, aposticha_glory?, aposticha_closer?,
  synaxarion?,                      // [unattested] — no heading found (§1.5)
  katavasiae?,                      // [unattested] — no label found
  closing_rubric?,
}
```

- **Ode II** `[A-attested]`: all 37 files print I, III, IV, V, VI, VII, VIII, IX.
  Ode II appears in none. `CANON_ODES` for the Menaion is nonetheless
  `[1,2,3,4,5,6,7,8,9]` with **Ode 2 optional and source-conditional**, because
  the Menaion prints Ode II elsewhere in the year — a claim tagged
  `[unattested]`, held only until a Lenten month is scanned. It is *not* a copy
  of the Octoechos constant, even though August alone would justify copying it.
  August is precisely the month that would have let that copy pass unnoticed.
- **Exapostilaria are Menaion content** (R-3). The Octoechos exclusion covers the
  eleven *Evangelical* exapostilaria, keyed to the Matins gospel number and
  belonging to the Sunday resurrectional cycle. The saint's own exapostilarion,
  present in 37/37 files, is unrelated and carries no Horologion provenance.
- **Canons stored whole; the assembler interleaves.** Storage follows
  composition; print order is an assembly concern.
- `matins_format`'s two-value vocabulary is carried from V1 and is `[unattested]`
  against August.

### 5.7 `liturgy` `[A-attested, thin]`

107 label instances, almost entirely `Troparion of the …` and `Kontakion of the
…`. Nothing else clears two instances — no `Communion verse` label, no
`Antiphon` label outside `08-06`.

```js
liturgy: {
  antiphons?,                   // attested in 08-06 ONLY (1/37) — [month-specific]
  entrance_verse?,              // 08-06: "Entry Hymn (Introit)" [A-attested, 1 file]
  beatitudes?: { rubric?, troparia },
  troparia_rubric?, kontakion_rubric?,
  trisagion_replacement?,       // [unattested]
  prokeimenon?,
  epistle?: { heading, citation_verbatim, citation },   // §2.11 — no text
  alleluia?,
  gospel?:  { heading, citation_verbatim, citation },   // §2.11 — no text
  communion_verse?,
  megalynarion?,                // [unattested]
  closing_rubric?,
}
```

Every `?` field is source-conditional and therefore carries an absence node when
not printed (§2.10). Fields tagged `[unattested]` are in the schema so the
coverage gate can see them; **an encoder must not create one without a print
site.**

### 5.8 Typed closers — the source labels them, we do not rename them

**Closes D-02.** Octoechos §4.4 stores `{type, text, …}` precisely so the
source's own label is not flattened into a field name. Revision 1 flattened it
(`lic_theotokion` beside `lic_stavrotheotokion`); this revision does not.

The label scan is direct evidence: the source prints
`Glory ..., Both now ..., Theotokion` (36 in Matins alone),
`Both now ..., Theotokion`, `Both now ..., of the feast`,
`Glory ..., Both now ..., in the same melody`, and bare `Both now ...`. Those are
**different labels on one structural slot**, which is exactly what a `type` field
records and a field name cannot.

```js
lic_closer: { type, text, tier, src, sourceLabel, spec_mel?, … }
```

`CLOSER_TYPES = ['theotokion', 'stavrotheotokion', 'dogmatic_theotokion',
'of_the_feast', 'in_the_same_melody', 'plain']` — extended deliberately as new
printed labels are attested, never by inference. `sourceLabel` always stores the
label verbatim; `type` is the normalized form.

### 5.9 The kontakion has one home

**Closes D-28.** Revision 1 placed `kontakion_ode3` / `kontakion_ode6` at entry
level *and* described `after_ode3` / `after_ode6` as "kontakion+ikos insertions."
Under §2.3 they cannot both be the print site.

Resolution: **`after_ode3` / `after_ode6` are the print sites** — they are where
the Menaion prints the kontakion and ikos, and the label scan confirms
`Kontakion of the …` appears within the Matins canon region (31 instances). The
entry-level `troparion` / `kontakion` / `ikos` fields (§5.1) are the R-1
canonical fields, populated from those print sites after verification, and they
carry `verified_sites` naming them. No magic-string dereference — V1's
`kontakion_ode3: "same as kontakion_ode6"` is exactly what §2.4's verification
rule replaces.

---

## 6. Cross-date tables

### 6.1 `shared.js`

Menaion-wide invariable material printed in the daily files for convenience. Each
entry is a **hypothesis of date-invariance, re-verified against every date that
prints it**; any divergence is a finding and the item moves per-position.

The Octoechos history is the warning, not a footnote: `lic_verse_ladder` was
*removed* from that project's `shared.js` on 7 July 2026 when byte comparison
across two print sites falsified the hypothesis. Every entry here is tagged
`[expected month-invariant]` until two months confirm it.

**Nothing hymnographic goes here.** Octoechos §9.8, ruled: shared tables are for
psalm-verse and prokeimenon-class texts only. Stichera, closers, sessionals,
canons, and troparia are per-position, always. **This forbids the `anabathmoi`
ref** revision 1 proposed: the Song of Ascents is troparia plus a Gloria, i.e.
hymnographic, and the Menaion prints only a *rubric* naming it (`Song of Ascents,
the first antiphon of Tone IV`, 4 instances). Under R-5 we store that rubric and
nothing else — `matins.anabathmoi_rubric`, no ref, no text. **Closes D-27.**

Candidates, all `[unattested]` pending close reading: the LIC verse ladder as the
Menaion prints it, the praises verse ladder, aposticha verse sets.

### 6.2 `general.js` — the St. Sergius General Menaion

`encoding_rule_v2.md` §2.1 treats `general-menaion/*.pdf` as a substitution
source. V2 treats it as Octoechos V2 treated Theotokia.pdf: **a first-class table
whose every cell is a print site.** One sub-table per saint type.

A daily entry that falls back to it stores its **own per-position copy** (§2.3)
carrying `src: {file: 'Monastic.pdf', locus}` and
`name_substituted: {placeholder: '(Name)', value}`; the recurrence register links copy to
cell. A reader can then browse the General Menaion as its own book *and* see, at
any daily position, that the text came from it and what was substituted.

Placeholders (`(Name)`, `(N.)`) are stored **verbatim and unsubstituted** in the
table itself; substitution happens only in the daily copy.

**Folder listed, and §2.1's prose is wrong in two places `[A-attested]`.** The
26 files, verbatim:

```
Angels · Apostle · Apostles · Cross · Fools · Heirarch · Heirarchs ·
Heiromartyrs · HieroConfessor · Hieromartyr · Holy Fathers · Martyr ·
Martyress · Martyresses · Martyrs · Monastic · MonasticMartyr ·
MonasticMartyrs · Monastics · Nun · NunMartyr · Nuns · Prophet ·
St John Baptist · Theotokos · Unmercenaries
```

Two corrections, both of which would have become silent encoding errors:

1. **There is no `Venerable.pdf`.** `encoding_rule_v2.md` §2.1 says "plus
   Venerable (monastic), Prophet, Martyr, and others"; the actual files are
   `Monastic.pdf` / `Monastics.pdf`. Revision 1 of this spec used
   `src: {file: 'Venerable.pdf'}` as its worked example in §2.10 — an invented
   filename, caught only because the rule is *list the folder, do not assume*.
2. **The placeholder is `(Name)` only.** §2.1 says "the `(Name)` / `(N.)`
   placeholders"; a scan of all 26 files finds **`(Name)` 445 times and `(N.)`
   zero times.**

Three further structural facts from the scan:

- **These are full Vigil services, 12–18 pages each**, not proper-snippets.
  §2.1 describes them as supplying "troparion, kontakion, stichera"; they carry
  Little Vespers through Liturgy. The fallback is therefore capable of filling
  far more than §2.1 implies, and §6.2's table must model a whole service.
- **Plural files carry no placeholders at all** — `Apostles`, `Heirarchs`,
  `Heiromartyrs`, `Martyrs`, `Martyresses`, `Monastics`, `MonasticMartyrs` are
  generic to a group and name nobody. Singular files take a name. `name_substituted`
  is therefore expected on singular-type fallbacks and forbidden on plural ones.
- **Four files are not saint-types at all** — `Cross`, `Holy Fathers`,
  `St John Baptist`, `Theotokos` are general services to a specific subject.
  They key by subject, not by saint type, and the `general.js` table needs both
  axes.

Text layer is St. Sergius dialect throughout (`*` / `**` present in all 26).
**Closes D-40.**

### 6.3 The exclusion register

**Closes D-29.** Revision 1 declared this register empty on the strength of
"no exclusions," then recommended two exclusions in the same breath. It is not
empty. Every exclusion is *recorded*, with a reason, so the audit trail shows the
material was seen and deliberately not encoded:

| excluded | reason |
|---|---|
| Texts named-but-not-printed by a rubric ("Trisagion through Our Father", "It is truly meet", the Tone IV Anabathmoi antiphon) | R-5 — another book's content; the **rubric** is stored |
| The Litiya temple sticheron | Not in the Menaion; future parish configuration (`encoding_rule_v2.md` §6). The rubric is stored |
| Paremia / Epistle / Gospel bodies | R-4 — the scripture tool owns reading text; citation + link stored |

Nothing else is excluded. Adding a row requires a stated reason.

---

## 7. The contract — `schema_menaion_v2.js` + `validate_menaion_v2.mjs`

`schema_menaion_v2.js` is **the single contract**, with the same three consumers
as its Octoechos twin: the data validator, the presentation registry + browser,
and the coverage gate. Data cannot exist outside it; nothing inside it can be
invisible. **Closes D-10.**

### 7.1 Exported vocabulary

```js
MONTHS                // '01' … '12'
COMMEMORATION_KINDS   // saint | forefeast | feast | afterfeast | apodosis
RANKS                 // §9
SERVICES              // little_vespers | great_vespers | vespers | compline | matins | liturgy
CANON_ODES            // [1,2,3,4,5,6,7,8,9] — Ode 2 optional (§5.6)
LABELS                // plain | martyrs | glory | both_now | theotokion |
                      // stavrotheotokion | of_the_feast | forefeast | afterfeast
                      // — string OR array (labels compound), extended only on attestation
CLOSER_TYPES          // §5.8
TIERS                 // [1,2,3]
DIALECTS              // 'sergius' | 'oca'
ABSENCE_REASONS       // §7.3
ABSENCE_BASIS         // §7.3a
SOURCE_FILES          // enumerated: the 37 August files + Octoechos + General
                      //   Menaion names, for cross-book src and recurrence pairs
TEXT_NODE             // §5.1 required/optional field lists
FIELD_KINDS           // rubric | text | closer | text_array | labeled_items |
                      // sessional_sets | canon | canons | after_ode | prokeimenon |
                      // alleluia | reading | praises | aposticha | beatitudes | group
FIELD_MANIFEST        // §7.2
SECTION_RULES         // §7.5
CANON_B               // §7.6
PLACEHOLDER_PATTERNS  // V1's nine regexes from audit.js + the Octoechos set
RECURRENCE_RELATIONS  // identical | variant | family
MONTH_TOP             // {known, required} — the vocabulary guard (§7.7)
ENTRY_TOP             // {known, required} — per-commemoration vocabulary guard
```

### 7.2 `FIELD_MANIFEST`

Rows of `{ path, kind, service, required, label }`, exactly as Octoechos. Paths
are **commemoration-generic**, using a `<c>` wildcard:

```
<c>.troparion
<c>.great_vespers.lic
<c>.great_vespers.lic_closer
<c>.matins.sessionals
<c>.matins.canons
shared.<table>
general.<saint_type>
```

`required` is evaluated only when the owning claim is present in `_encoded`.
Counts live in `SECTION_RULES`, never here.

### 7.3 Absence declarations

Closed `ABSENCE_REASONS` vocabulary:

| reason | meaning |
|---|---|
| `not_printed_in_source` | The book prints nothing here. Settled. |
| `source_unavailable` | The book prints this and we lack the page. Revisitable — a delivery gap. |
| `no_daily_source` | The source produces no file for this date at all — **08-23**. Closed; not revisitable. |
| `governed_by_octoechos` | The Octoechos supplies this position. |
| `governed_by_pentecostarion` | The Pentecostarion supplies it. |
| `other_book` | Named-but-not-printed (§6.3). The book is named. |
| `source_illegible` | Present but unreadable. |

**`not_yet_encoded` is deliberately absent.** It would reintroduce exactly the
silence the mechanism exists to remove. Work in progress is expressed by not
claiming the section in `_encoded`.

### 7.3a Absence verification basis

Closed `ABSENCE_BASIS` vocabulary, required on every absence node:

| basis | meaning |
|---|---|
| `close_reading` | The encoder read the relevant span of the page. Default for encoded dates. |
| `heading_scan` | Inferred from a section-heading scan only. **Provisional** — the gate reports these as an outstanding worklist, never as settled. |
| `physical_book` | Checked against the printed book, beyond the PDF. |
| `structural` | The date has no source file at all (`no_daily_source`). |

The gate surfaces the count of `heading_scan` absences per month. Steady state
for a completed month is zero.

**`src` is required only where a locus exists** — `not_printed_in_source` and
`source_unavailable` carry no locus, and `other_book` names a file outside the
Menaion corpus. The gate enforces `src` per reason, not universally. **Closes
D-30.**

### 7.4 Gate checks

**Closes D-03, D-08.**

*Vocabulary and structure*
- **Vocabulary guard** — every key in a month file, date object, and entry object
  must appear in `MONTH_TOP` / `ENTRY_TOP` / `FIELD_MANIFEST`. An unknown key is
  a hard-fail. This is the claim "data cannot exist outside the contract";
  revision 1 asserted it without a check. **Closes D-04's sibling, D-24.**
- Sorted `MM-DD` keys; `commemorations` always an array; `_encoded` claims match
  `cN.<service>` grammar and the commemoration count.
- `MONTH_LOADERS` keys match the month files on disk (§3.1).
- **Array parallelism** — stichera arrays and their verse arrays agree in the
  relationship the source prints; declared per section in `SECTION_RULES`.
- **Canon contract** (§7.6): ode keys from `CANON_ODES`, non-empty labeled items,
  labels from `LABELS`, irmos either full text or `incipit_ref`.
- **Device checks** — `repeat` may only be `2` and only where the source device
  is "(Twice)"; `incipit_ref` must prefix-match its referent's text.
- **Typed closers** — every closer carries `type` from `CLOSER_TYPES` and
  `sourceLabel` verbatim.
- **Required/forbidden by section**, from `SECTION_RULES`.

*Provenance and text*
- `src {file, locus}` and `tier` mandatory on every text node; `src.file` from
  `SOURCE_FILES`.
- **Absence declarations** — every source-conditional field is a text node or an
  absence node; a missing key is a hard-fail; `reason` from `ABSENCE_REASONS`;
  `src` required per reason (§7.3).
- **Pointing by dialect** — Sergius Tier 2: contains `*`, exactly one `**`, never
  `|`/`//`, no `[`. Tier 1: no markers. Tier 3 (`dialect: 'oca'`): `|`, exactly
  one `//`, `[brackets]` allowed, `director: true` required. **Marker consistency
  checked per `spec_mel` sub-group**, never across a whole array (§2.5).
- **Artifact checks** — non-Latin codepoints; `\b0\b` before a capitalized word;
  a doubled-run tripwire (§1.4). All hard-fail and surface to Bill.
- **Verbatim discipline** — spelling is never silently corrected. The sic
  register check guards *recorded* sics; this check guards the rest by requiring
  that any encoder-side text change be logged in one of the three artifact logs.
  **Closes D-23.**
- **Register lint** — the `You/Your` vs `thee/thou/thy` translation-register
  check from `validate_entries.mjs` Check F, applied to **every** text node rather
  than a hand-listed set of 11 field names.
- **Placeholders** — no bracketed placeholder strings in hymn text; rubric prose
  only in rubric fields.

*Registers*
- **Recurrence** — `identical` pairs byte-match, `variant` pairs do not,
  cross-book pairs resolved against `octoechos_v2` (§10.4).
- **Sic** — every recorded sic still byte-matches the stored text at its locus.
- **OCA** — every row's `resolution` matches what is stored at that path.
- **Absence basis** — every absence node carries `basis` from `ABSENCE_BASIS`;
  the gate reports the per-month count of `heading_scan` absences as an
  outstanding worklist (§7.3a).
- **Print order** — every service's `order` names exactly its present keys.

*Cross-cutting*
- **No display copies** — a literal copy of canonical text inside a component is
  forbidden; the existing lint enforces it.
- **Prokeimena** — `matins.prokeimenon` and `liturgy.prokeimenon` are compared;
  **inequality is a surfaced finding, not a hard-fail.** Revision 1 made it a
  hard-fail on one V1 entry's evidence, which is a stricter standard than this
  spec applies anywhere else to an unattested cross-check. **Closes D-17.**

**The gate does not adjudicate rank** (§9). **Closes D-09's circularity.**

### 7.5 `SECTION_RULES`

Per-service counts and required/forbidden fields. **Deliberately thin for
August**: the only counts the source has attested are section *presence* counts,
not item counts, and the Octoechos precedent is explicit that per-ode and per-set
censuses are source facts, never gate constants. Rules are added as close reading
attests them. **Closes D-21** — the standing rule is *never hard-code a count the
source varies*, and `SECTION_RULES` starts nearly empty because of it.

### 7.6 Canon contract

One shape (`CANON_B` in Octoechos terms): per ode, `irmos` (full text node **or**
`incipit_ref` device) plus a non-empty array of labeled items. Which labels
appear and how many items is a **per-ode source fact**; the gate checks label
validity and non-emptiness, not a census.

Canon-level metadata: `title` (verbatim heading), `composer?`, `acrostic?`,
`tone?`, `condition?` (a conditional canon's own rubric). `composer` and
`acrostic` are **independent and both optional** — the Octoechos found all four
combinations. August attests `composer` directly (`The composition of Joseph`,
`of Cosmas of Maiuma`, 10 instances).

Octoechos Shape A (three sub-canons per ode) has **no Menaion analogue** and is
not carried; it is a resurrectional-cycle shape.

### 7.7 Coverage gate

`validate_viewer_coverage.mjs` is extended to join `FIELD_MANIFEST` against
`presentation.js`. Every manifest path is either registered or explicitly
`hidden: {reason}`. A field added without viewer coverage is a **same-session
build failure**. **Omission is a gate failure, not a hidden field.**

---

## 8. The browser — `/menaion-v2`

Split as the Octoechos is: `menaion-v2-browser.jsx` owns state and the audit
surface; `menaion-v2-reading.jsx` owns typography atoms and the navigation model.

**Navigation is data, not JSX.** `MONTH_SLOTS` → day → commemoration → service:

```js
{ id: '08', label: 'August', days: [
  { key: '08-06', label: '6 — Transfiguration', commemorations: [
    { idx: 0, label: 'The Holy Transfiguration', services: [
      { id: 'gv', label: 'Great Vespers', claim: 'c0.great_vespers',
        render: d => <SvcGreatVespers v={d.great_vespers} />,
        sections: [['sec-lic','Lord, I have cried'],
                   ['sec-lit','Litiya'], ['sec-apost','Aposticha']] },
    ]},
  ]},
]}
```

`claim` + `data._encoded` is the per-service encoding gate: an unencoded service
renders an honest "not yet encoded" panel, never a blank.

**Month picker** — a wrapping 12-button tab strip, each disabled when
`!MONTH_LOADERS[mm]`, above a sticky 7-column grid of day buttons with per-day
status dots. Two V1 behaviors kept deliberately: the month is **seeded
synchronously from `?comm=MM-DD`** (V1 does this on purpose, to avoid a
double-fetch race), and days **scroll** within a loaded month rather than
swapping the page. Where a date has more than one commemoration, a
commemoration selector sits between day and service.

Desktop = sticky left rail; mobile (<720px) = slide-over drawer with a native
`<select>` for the day axis. A **Today** button resolves the current date to
`MM-DD`.

**Two mutually exclusive surfaces.** `reading` (default) is book typography —
centered small-caps headings, italic rubrics with a gold rule, hanging-indent
verses, printed labels, a `printed`/`clean` pointing toggle persisted to
`localStorage`. `audit` is the generic schema walk (§8.1).

**A V1↔V2 side-by-side view is required, not optional.** Octoechos §7 demanded
it and Phase 5 gates cutover on it (§15). For any month present in both systems
it renders V1 and V2 for the same date in parallel columns with differences
highlighted. **Closes D-18.** Every field is greppable via the search index.

**Wrapped in `ErrorBoundary`**, like `/octoechos-v2` and unlike the V1 browsers —
data-browser routes are the primary audit path. **No `minWidth: 760px`.**
Sandwiched in `<HoursReturnStrip />` top and bottom.

**Point/Score controls are not wired.** The standing decision holds: all pointing
hand-offs to the Tone Trainer originate from the Hours Tool. The V1 Menaion
browser carries `PointScoreControls`; V2 does not restore them. Recorded so it is
not re-litigated as a bug.

**Reading citations render as links** into the scripture tool, resolved from the
normalized citation (§2.11).

### 8.1 Viewer Auditability Contract

Carried in force from Octoechos §12.

1. **Schema-driven; visible by default, hidden only by declaration.** The viewer
   never enumerates fields in component code. It walks validated data generically;
   the presentation registry supplies hints only. An unregistered field renders
   through a generic fallback badged **"unregistered field"**. This is the direct
   fix for V1's `EntryHymnography` — ~40 hand-written `FieldRow` call sites with
   no catch-all, the whitelist that made new data invisible by default.
2. **Coverage is gated** (§7.7).
3. **Audit mode** — every position carries a raw/rendered toggle exposing the
   stored object, plus badges: tier (red `TIER MISSING` when undefined), dialect,
   `src` (red `src MISSING`), sourceLabel, spec_mel, composer/acrostic,
   repeat/incipit_ref, sic, **homoglyph**, **absence with declared
   reason**, **`name_substituted` placeholder → value**, **OCA divergence linking
   its register row**, and the **absence `basis`**.
4. **Recurrence cross-links** — "⇄ also printed at … — identical / variant",
   **including cross-book links into `/octoechos-v2`** (§10.4).
5. **Canonical modules only** — no display copies.
6. **Ships in Phase 1 before bulk encoding.** Because rendering is generic the
   viewer is cheap to build first: it does not need to know the data to display
   it.

Every reading composer keeps a `consumed` Set plus a `Leftovers` catch-all, so a
key a composer forgot still surfaces.

---

## 9. Rank determination

**Closes D-09.** Revision 1 cited a "§1.1 waterfall" that did not exist in it.

Rank is **not defined here.** The authority is `encoding_rule_v2.md` §1.1 — the
ordered waterfall (Great Feast → Vigil → Polyeleos → Doxology → Six-Stichera →
Simple), read live each session, applied in strict order from the day's PDF
rubric and cross-checked against the OCA calendar's Typikon symbol. Disagreement
is a flagged divergence, never a silent pick.

The schema exports `RANKS` as the closed vocabulary those six names form, and
stores `rank` and `fekula_section` per commemoration. That is all.

**The gate does not adjudicate rank.** Deriving "not Vigil rank" from "no Little
Vespers printed" inverts the waterfall, and then gate-checking rank against that
same evidence is circular. Rank determination lives in §12 step 2, against the
live rule, by a human. The gate checks only that `rank` is in `RANKS`.

August's presence counts illustrate why the gate cannot do this: Little Vespers
8, Litiya 9, Great Vespers 10, Magnification 11 — four different counts across
what are supposed to be nested rank tiers. Whatever reconciles them is rubrical
judgment, not arithmetic.

---

## 10. Paths, anchors, and the wire-in

### 10.1 Anchor id scheme

`id = ${dateKey}.c${idx}.${schemaPath}` — e.g. `08-15.c0.great_vespers.lic[2]`.
Every commemoration carries `.c0` even when it is the only one, so the grammar
has no special case. `shared.…` and `general.…` carry no date prefix.

Emitted **identically in both surfaces.** The Octoechos comment records why: its
audit view originally set no ids, so a deep link broke the moment you toggled
views.

### 10.2 Encoding — the fix

**Closes D-14.** Anchor ids contain `[` and `]`, which `encodeURIComponent`
percent-encodes, so revision 1's link emitter could never match its own ids.

Rule: **the hash is written and read through one shared pair of functions**,
`encodeAnchor` / `decodeAnchor`, exported from `adapter.js` and used by both the
emitter in `hours-tool.jsx` and the consumer in the browser. They percent-encode
only characters illegal in a fragment, leaving `[`, `]`, and `.` intact. A test
asserts round-tripping over a sample of real manifest paths.

### 10.3 `navFromPath()` and `registryLookup()`

**Closes D-11, D-13.**

`navFromPath(id)` is the inverse mapping, and must exist before deep links work.
It branches on prefix:

```
^(\d{2}-\d{2})\.c(\d+)\.(.+)$   → month/day/commemoration + match remainder to svc.claim
^shared\.(.+)$                   → shared table view
^general\.(.+)$                  → General Menaion view
^(octoechos|pentecostarion):(.+) → external book (§10.4)
```

Deep-link consumption is the same two-effect sequence the Octoechos uses —
navigate so the element will exist, then scroll and highlight when the data has
loaded — because the month loads dynamically.

`registryLookup(path)` resolves a concrete data path onto its generic manifest
path by replacing the commemoration index with `<c>`. With 365 date keys and up
to four commemorations each, the Menaion needs this far more than the Octoechos
did.

### 10.4 Cross-book path grammar

**Closes D-13.** Recurrence pairs may cross books (§2.3a), so paths need a
book-qualified form:

```
menaion:08-15.c0.great_vespers.lic[2]
octoechos:tone2.vespers_weekday.tue.aposticha[1]
pentecostarion:…
```

An unqualified path means "this book." The gate resolves a qualified path by
loading the named book's module; the viewer renders it as an outbound link. This
is also what makes `governed_by_octoechos` / `governed_by_pentecostarion`
absence reasons checkable rather than decorative.

**The Pentecostarion is referenced, not specified.** It exists in V1
(`src/data/pentecostarion.js`) and has no V2. The grammar reserves its prefix;
nothing in this spec depends on a Pentecostarion V2 existing. **Closes D-31.**

### 10.5 Wire-in

`hours-tool.jsx`'s `sourceLinkFor()` gains:

```js
case "menaion-v2":
  return { href: "/orthodox-hours/menaion-v2?" + dateQ + "#" +
                 encodeAnchor(sourceRef.path), external: false };
```

The `/orthodox-hours` prefix is the router `basename`; `/menaion-v2` is the route
within it. Both are correct and they are not in conflict. **Closes D-34's route
item.**

`adapter.js` attaches `path` to every node it serves, returning the **ref
target's** path for a `{ref:…}` so an anchor points at the canonical print site
rather than the pointer. Given §2.3, §6.1, and §6.2, the only legitimate `ref`
kind in the Menaion is a shared-table reference; hymnographic refs do not exist.

The V1 `&el=…` + `data-el` + `flashElIn()` mechanism is **not** carried over.

---

## 11. V1 discrepancy register

Created empty, filled during encoding — the analogue of Octoechos §8, which found
six genuine V1 errors including two mis-slotted texts and a conflated
prokeimenon. Every V1↔source mismatch is a row, never a silent pick.

**August produces no rows: V1 has no August data.** That is an argument for
encoding a V1-covered month early (§15).

Structural V1 findings already identified, which become rows when the
corresponding month is re-encoded:

| V1 surface | Finding | Class |
|---|---|---|
| `troparion_2` (july) vs `troparion_second` (june) | two names, one concept | naming drift |
| `exapostilarion` vs `matins_exapostilarion_feast` | ditto | naming drift |
| `matins_prokeimenon` (object) vs `prokeimenon_tone/_text/_stichos` (flat) | two shapes, one concept | shape drift |
| `sessional_hymn_kathisma1` vs `matins_sessional_post_polyeleos` | inconsistent naming axis | naming drift |
| `repeatIndex` + `stichera_lord_i_call_count` | pointer device reconciled by three alternative arithmetic tests in `audit.js` | device conversion (§2.8) |
| `kontakion_ode3: "same as kontakion_ode6"` | a string sentinel in a field typed as an object | dereference-by-magic-string → §5.9 |
| `gospel_sticheron` retired (`field_coverage_spec` §7) | correct under V1 scope | restored as `matins.psalm50_sticheron` |
| ~115 unclassified `KNOWN_FIELDS` | "Pending classification" | resolved by the manifest being closed |

---

## 12. Per-file encoding protocol

Session startup (clone, badge check, live `encoding_rule_v2.md` §3, live spec) is
unchanged and precedes this.

1. **Source scan** — `scan_source.mjs`, extracting with `dedupe_chars()`:
   codepoint census, digit-zero pattern, doubled-run tripwire, sic candidates.
   Output is a review file;
   **every flagged item goes to Bill before encoding proceeds.**
2. **Rank determination** — the `encoding_rule_v2.md` §1.1 waterfall in strict
   order, cross-checked against the OCA calendar. Divergence flagged (§9).
3. **Commemoration inventory** — identify every commemoration the file prints,
   including forefeast/afterfeast bodies, and assign `c0…cN`. Variant files fold
   into the same date (§4).
4. **Structural pass** against the §5 templates; any break is a finding presented
   before encoding, with the §2.12 tag updated in the same commit.
5. **Per-item capture**, verbatim. **Key on the full printed heading, never the
   bare label** — `Troparion of the holy martyr` and `Troparion of the feast` are
   different hymns (§1.6), and label-keying silently merges them.
6. **Device inventory** — full double print / "(Twice)" / incipit reference —
   identified before capture, stored per §2.8, never converted.
7. **Closer typing** (§5.8) — `type` normalized, `sourceLabel` verbatim.
8. **Multi-site verification** (§2.4) — for each canonical field, confirm every
   print site matches; record `verified_sites`; flag any divergence to Bill.
9. **Absence sweep** — every unfilled source-conditional field gets an explicit
   absence node with a reason from §7.3. **This step is what makes the entry
   complete; skipping it is the §2.10 failure mode.**
10. **Fallback resolution** — daily PDF exhausted first ("I didn't see it where I
    expected" is *not* absence, per `encoding_rule_v2.md` §5.x), then General
    Menaion by saint type with `name_substituted` recorded. **OCA texts are out
    of scope until Phase 6** (R-2).
11. **V1 cross-check** where a comparison surface exists; every mismatch a row.
12. **Register updates** — recurrence, sic, OCA divergence — in the same commit
    as the data revealing them.
13. **Full gate**, then **commit by concern**. Data-only commits take no version
    bump. Token scrubbed after every push.

---

## 13. Rulings record and open items

### 13.1 Phase 0 rulings (Bill)

| | ruling | closes |
|---|---|---|
| **R-1** | Canonical field per *(commemoration, hymn type)*, with multi-site verification; divergence flagged, never silently picked. Measured at §1.6. | D-01, D-20 |
| **R-2** | OCA calendar live; OCA texts and Tier 3 pointing deferred to Phase 6, after cutover. | D-15 |
| **R-3** | Menaion exapostilaria are Menaion content; no conflict with the gospel-keyed Evangelical table. | D-22 |
| **R-4** | Scripture tool owns reading text; Menaion stores citation + link. | §9.3 (rev 1) |
| **R-5** | Printed rubrics captured verbatim; named-but-unprinted texts not fetched from other books. | §9.5 (rev 1) |
| **R-6** | Attestation is bidirectional; demotion and re-encoding are first-class. | D-05, D-06 |
| **R-7** | Whole library moves off Drive beginning with August. | §9.11 (rev 1) |

Plus, from the earlier session: full capture at every rank; no exclusions beyond
§6.3's recorded three; parallel build with V1 untouched; infrastructure before
August.

### 13.2 Open — needs close reading, not a ruling

1. **The §2.3a recurrence evidence catalog.** The largest remaining Phase 0
   deliverable. Two cross-book pairs seed it; the rest comes from reading hymn
   texts across dates and against the Octoechos and V1 corpora. First task of the
   August encoding pass.
2. **Sic register seed** — requires close reading, not a heading scan.
3. **Synaxarion** — no heading in any August file. Does the source print it
   unheaded, or not at all? Settled by 08-06 and 08-15.
4. **Katavasiae** — no label found; the Menaion prints them on feasts elsewhere.
   Menaion-side field or shared festal table?
5. **`08-14` Compline** — heading-absent; confirm truly absent.
6. **`08-15` antiphons** — `ANTIPHON I/II/III` appears only in `08-06`. Dormition
   printing no festal antiphons is surprising enough to want a check against the
   physical book before it is encoded as an absence.
7. **`matins_format` vocabulary** — V1's two values, unattested against August.
8. **Every `[unattested]` field in §5.6 and §5.7** — confirmed with a print site
   or dropped. An encoder must not create one without evidence.

### 13.3 Blocked externally

- **`08-23.pdf`** does not exist. Recorded as `source_unavailable`; the Dormition
  cycle cannot be completed until it is supplied.
- ~~**The General Menaion folder**~~ — **CLOSED.** Listed; see §6.2.

---

## 14. Defect closure record

The revision-1 parity audit found 40 defects. Disposition:

**Closed in revision 2 by Bill's rulings:** D-01, D-05, D-06, D-15, D-20, D-22.

**Closed in revision 2 by respecification:**

| # | was | now |
|---|---|---|
| D-02 | closer labels flattened into field names | typed closers, §5.8 — with new label-scan evidence |
| D-03 | no structural gate checks | §7.4 |
| D-04 | rev 1 §0.4 vs §0.5 evidence contradiction | §1.5/§1.7 state what a heading scan can and cannot show; readings claim moot under R-4 |
| D-07 | de-doubling threshold broken | **dissolved** — `dedupe_chars()`, §1.4; no normalizer needed |
| D-08 | `doubled_glyph_log` orphaned | **dissolved** — the field no longer exists (§1.4) |
| D-09 | rank had no home; circular gate check | §9 — gate does not adjudicate rank |
| D-10 | schema constants unspecified | §7.1 |
| D-11 | no `registryLookup()` analogue | §10.3 |
| D-12 | variant files unrepresented | §4 — fold into the date's `commemorations` |
| D-13 | no cross-book path grammar | §10.4 |
| D-14 | anchors broken by `encodeURIComponent` | §10.2 shared codec + round-trip test |
| D-16 | `_encoded` too coarse | per-commemoration-per-service claims, §4 |
| D-17 | prokeimenon inequality a hard-fail on thin evidence | surfaced finding, §7.4 |
| D-18 | V1↔V2 side-by-side dropped | §8, required |
| D-19 | cross-book loader unaddressed | §2.14 |
| D-21 | "never hard-code a varying count" rule dropped | §7.5 |
| D-23 | verbatim-spelling ruling reduced to the register check | §7.4 verbatim discipline |
| D-24 | vocabulary guard asserted, unenforced | §7.4 |
| D-25 | §9 cross-references systematically wrong | renumbered; external references now say `encoding_rule_v2.md §x` explicitly |
| D-26 | §9.3 misstated its evidence | claim removed under R-4 |
| D-27 | `anabathmoi` ref contradicted §5.1 | rubric only, §6.1 |
| D-28 | kontakion had two homes | §5.9 |
| D-29 | exclusion register declared empty while excluding | §6.3, three recorded rows |
| D-30 | absence node could not satisfy the `src` rule | `src` required per reason, §7.3 |
| D-31 | `pentecostarion` referenced from nowhere | prefix reserved, §10.4 |
| D-32 | one slot, sibling fields | single typed closer, §5.8 |
| D-33 | LV aposticha sub-keys undefined | §5.3 |
| D-34 | tag/dialect/route/index drift | §2.12 vocabulary; `DIALECTS`; §10.5; §3 |
| D-35–D-40 | §4.5/§4.7/§4.8 asserted ~60 unattested fields | §5.4/§5.6/§5.7 rebuilt from the §1.7 label scan; every remaining assertion tagged `[unattested]` |

**Open by design:** none. Every revision-1 defect is either closed or converted
into a §13.2 close-reading item.

---

## 15. Phase sequencing

**Phase 0 — this spec.** Awaiting Bill's confirmation. §13.2 item 1 (the
recurrence catalog) is owed but does not block infrastructure.

**Phase 1 — infrastructure.**
1. `schema_menaion_v2.js`, `validate_menaion_v2.mjs`, the three registers,
   `scan_source.mjs` extension (extracting with `dedupe_chars()`, §1.4).
2. `validate_viewer_coverage.mjs` extended to the Menaion manifest.
3. The generic browser with month picker, audit mode, and the V1↔V2 view.
   **Ships before bulk encoding** — because rendering is generic it is cheap to
   build first, and every encoding session is then visually auditable the day it
   is committed.

**Phase 2 — cross-date tables.** `general.js` first (clean, table-shaped, and it
unlocks fallback cross-checks everywhere else, as the Theotokia tables did for
the Octoechos) — **unblocked**; the folder is listed (§6.2). Then `shared.js`
candidates.

**Phase 3 — August.** `08-06` Transfiguration → `08-15` Dormition first: the two
Great Feasts exercise every template at maximum depth and are the most likely to
break it, and they are where §13.2's close-reading items get settled. Then their
forefeasts and afterfeasts, then `08-01` and `08-29`, then the remainder.
`08-23` carries its permanent `no_daily_source` declaration.

**Phase 4 — verification month, then the rest.** The next month is a **full
verification scan**, not a differential one: every `[expected month-invariant]`
claim is checked against it and demoted where it fails (§2.12). July is the
strong candidate — it is fully covered in V1, so it exercises the V1↔V2
comparison that caught six real errors in the Octoechos, *and* it tests the
re-encoding path. Only after a month confirms the skeleton do the remaining
months become differential scans. **Nothing textual is ever ported between
dates.**

**Phase 5 — cutover.** All months complete and verified; side-by-side V1↔V2
comparison passed; `/menaion` → `MenaionRedirect`; the assembler repointed at V2
in its own commit.

**Phase 6 — the OCA layer.** OCA saint-specific troparia and kontakia, and Tier 3
director pointing, layered over finished data (R-2).
