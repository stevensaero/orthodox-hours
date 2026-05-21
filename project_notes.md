# Orthodox Hours Tool — Project Notes
**Tool version: v0.3.1** | Last synced: May 2026 | Notes version: v0.3.21

## Project Summary
A liturgical assembly tool for OCA parishes (Russian usage). Given a date,
the tool computes the liturgical context and assembles the correct movable parts of
the Daily Hours (beginning with the 9th Hour), with every decision traceable to a
specific section of Fekula & Williams, *The Order of Divine Services* (2009).

**Primary audience:** Readers and laity — the tool is as much a teaching aid as
an assembly tool. Every movable element is annotated with its rubrical source.

**Versioning:** Project notes are versioned in sync with the tool. The version
number in the notes header must match the v0.x.x badge in the tool header.
When the tool version bumps, update both, then save a new Drive snapshot as
`project_notes_vX.X.X.md`. Previous snapshots remain as historical record.
The authoritative live copy is always `/mnt/user-data/outputs/project_notes.md`.

---

## VERSIONING PROTOCOL — READ BEFORE EVERY SESSION

### Step 1: Read Drive and confirm current version
Search Drive for the highest-numbered `project_notes_vX.X.X.md` file. Read it.
Echo its version number and file size back to the user before doing anything else:

> "I found **project_notes_vX.X.X.md** (N bytes) on Drive. The tool badge reads
> vX.X.X. They match — ready to proceed."

If the Drive version and tool badge differ, stop and flag the discrepancy.
If the local file size differs from the Drive file size, stop and resolve before
making any changes. Never work from the local file without first verifying it
matches the Drive snapshot.

### Step 2: Queue changes — write only on explicit confirmation
Do NOT write updates to the project notes piecemeal throughout a session.
Accumulate all changes in a queue. When a meaningful checkpoint is reached,
or when the user or Claude judges that significant new context should be captured,
present a summary of queued changes and ask:

> "I have the following queued changes to the project notes:
> - [change 1]
> - [change 2]
> - ...
> This will create **vX.X.X** (next version after the current vX.X.X).
> Shall I proceed?"

Wait for explicit confirmation before writing. A write always increments the
version number — never re-use the current version number on a new write.

### Step 3: Session close-out checklist
When the session has meaningful changes to capture:
1. Queue all pending changes and present them to the user
2. Get explicit confirmation to proceed
3. Decide the new version: patch (x.x.N) for encoding/fixes, minor (x.N.0) for features
4. Write the updated notes to `/mnt/user-data/outputs/project_notes.md`
5. Update the version header in the notes and the tool badge to match
6. Save a new Drive snapshot named `project_notes_vX.X.X.md`
7. Verify: read the new Drive snapshot back and confirm byte count matches local
8. Previous snapshots remain on Drive as historical record — do not delete them

### Notes file upload rule (STANDING — established v0.3.10)
**Never condense the project notes file for Drive upload.** If the file exceeds
tool call parameter limits, present it for manual upload instead. Condensing
destroys historical context and violates the integrity of the record.

### Version history
| Version | Date | Summary |
|---|---|---|
| v0.1.0 | May 2026 | Initial release: all four Hours, June Menaion, lectionary, How It Works, versioning |
| v0.2.0 | May 2026 | Feast proper readings (Phase 1), movable Sunday collision resolution, P+56/P+63 lectionary |
| v0.3.0 | May 2026 | Versioning protocol rewrite; full offsets table; 19 Sunday keys; HIW panel docs; UI placement note |
| v0.3.1 | May 2026 | Fekula source workflow documented; chapter-by-chapter .txt file inventory added |
| v0.3.2 | May 2026 | HTM supplementary material inventory added; Drive structure updated; KEY FIELDS template expanded with full first-pass capture rules |
| v0.3.3 | May 2026 | Jul 1-3 test encoding; §2A AT LITURGY absent rule added; Jun back-fill debt (FW-22) queued; St. John Maximovich confirmed at 06-19.pdf |
| v0.3.4 | May 2026 | Jul 1-3 encoding records saved to Drive; OCA divergence pattern confirmed and documented; Nicodemus OCA check flagged; July progress table added |
| v0.3.5 | May 2026 | Nicodemus OCA troparion check resolved; 07-14-v2.txt saved; two OCA troparia documented; all Jul 1-3 flags cleared |
| v0.3.6 | May 2026 | St John Maximovich encoded (07-02-john-maximovich.txt); vigil §2F confirmed; OCA/St Sergius texts in full agreement; Jul 1-3 encoding complete |
| v0.3.7 | May 2026 | Tool v0.2.1: Jul 1/2/3/14/15 entries in SAMPLE_MENAION; new fields (prokeimenon, alleluia, communion_verse, paroemia_1-3, troparion_2, fekula_section) added as dormant data |
| v0.3.8 | May 2026 | May 18-31 encoding complete (14 dates); new rule: always encode fixed dates; OCA divergence patterns documented |
| v0.3.9 | May 2026 | Pentecostarion data architecture defined; St. Sergius PDF library inventoried (59 files, P+0–P+63); PENTECOSTARION object design; FW-06 upgraded |
| v0.3.10 | May 2026 | Tool v0.2.2: Pentecostarion Hours assembly implemented; P+35–P+40 encoded; skeleton rules confirmed from Fekula re-read; open questions captured; Math.floor bug fixed |
| v0.3.11 | May 2026 | Tool v0.2.3: Hours skeleton rebuilt from HTM source; all 12 psalm texts inserted; Typical Beginning collapsible component; tbOpen state lifts context to body assembler |
| v0.3.12 | May 2026 | P+38 troparion bug fixed (Sunday Tone 5 added); continuation button scroll fixed; 1st Hour body trimmed to O come opening; P+38/P+39 encoding confirmed correct |
| v0.3.13 | May 2026 | Tool v0.2.4: Unified single Hours assembler for all seasons; rendering fixes (Reader: Amen, priest text, psalm headings); RankExplainer ⓘ component; 3rd→6th scroll-to-heading |
| v0.3.14 | May 2026 | Tool v0.2.5: HTM closing sequence fully corrected; end-of-hour markers; default service changed to 1st Hour; HowItWorksPanel rebuilt as five-section accordion with annotated specimen and full field inventory; how-the-tool-works.md created; Pentecostarion P+35–P+56 fully encoded |
| v0.3.15 | May 2026 | Tool v0.2.6: FW-21 Vespers lessons complete; VespersLessonsExplainer ⓘ (8 cases); P+offset in context card; null guards throughout; paroemia collision resolution corrected; Drive housekeeping (fekula_ODS, archives) |
| v0.3.16 | May 2026 | FW-22 complete: full June back-fill |
| v0.3.17 | May 2026 | Tool v0.2.7: Vespers Phase 1 complete (VespersOpening, full litany renderers, kathisma schedule, petition-response formatting); Lent week/Sunday tracking in calendar engine; kathismaPeriod detection; VESPERS_KATHISMA + MATINS_KATHISMA tables from OCA source; getKathismaForVespers(); How It Works updated |
| v0.3.18 | May 2026 | LIC/Aposticha mechanics fully researched and documented; Octoechos gap identified as blocker; FW-23 extended with stichera schema; FW-OCTOECHOS-VESPERS added; encoding KEY FIELDS template expanded |
| v0.3.19 | May 2026 | FW-OCTOECHOS-VESPERS complete: octoechos_vespers.txt encoded (477 records, all 8 tones complete) |
| v0.3.20 | May 2026 | Tool v0.3.0-beta: FW-23 Track A complete; OCTOECHOS_LIC_THEOTOKIA (8 tones); Jun 10 stichera + doxasticon; tone display; dismissal assembled; Reader's Service (Fekula Ch.10) full implementation; UI improvements |
| v0.3.21 | May 2026 | Tool v0.3.1-beta: §4A3 mixed assembly end-to-end; P+19/P+39/05-21 Vespers encoding; menaion_set_aside flag; prokeimenon renderer; 9th Hour → Vespers button; test dates verified |

---

## CRITICAL: Long Text Protocol

**Any psalm, gospel, epistle, or other passage over ~400 words cannot be written
as an inline string to any tool call parameter.** This includes `create_file`,
`str_replace`, `bash_tool` heredocs, and Python `-c` arguments. They all share
the same parameter length limit and will silently truncate or fail.

### Known long passages in this project
- All three psalms of the 3rd Hour (16, 24, 50) — Psalm 24 and 50 are long
- All three psalms of the 6th Hour (53, 54, 90) — Psalm 90 is long
- Any gospel or epistle reading added in future (Matins, Liturgy assembly)
- Canon odes when Matins assembly is built

### The only method that works for long text
Write in chunks using `printf` append (max ~300 chars per call), inject via Python
reading from the temp file, and splice into the tool via Python read/replace.

### SAMPLE_MENAION insertion anchor
New entries must be inserted **before** `\n};\n\nfunction getMenaionEntry` —
NOT before `// --- FIXED TEXTS` which closes the glossary object. Always verify:
```python
sam_close = tool.find('\n};\n\nfunction getMenaionEntry')
```

### feast_e/feast_g insertion anchor
Always insert immediately **before** `troparion: {` — the most reliable anchor
in every Menaion entry. Never use note field end as anchor (multi-line strings fool it).

---

## CRITICAL: SAMPLE_MENAION Purity Rule (established 2026-05-20)

**feast_e and feast_g fields in SAMPLE_MENAION must contain only readings sourced
directly from the saint's Menaion PDF (or confirmed from oca.org/saints/troparia
for that date). They must never contain Pentecostarion Sunday propers, All Saints
Sunday readings, or any reading that belongs in the PENTECOSTARION object.**

If a fixed-calendar date in a given year happens to fall on a movable Sunday or
named feast day, that collision is documented only in the `note` field as a
human-readable annotation. The feast_e / feast_g fields always hold the
fixed-calendar Menaion readings. The calendar engine handles all runtime
collision resolution automatically.

### Rationale
The SAMPLE_MENAION and PENTECOSTARION objects are architecturally separate.
SAMPLE_MENAION is keyed by calendar date (e.g., "06-14") and holds fixed-calendar
data valid for any ordinary year. PENTECOSTARION is keyed by Pascha offset (integer)
and holds all movable data. At runtime, getLiturgicalData() determines which governs.
Contaminating SAMPLE_MENAION with movable data creates silent errors: the wrong
readings appear in ordinary years when no override is active.

### How to check at encoding time
Before saving any feast_e or feast_g value, verify it appears in the saint's
Menaion PDF AT LITURGY section. If the value came from a different source (e.g.,
copied from an OCA calendar page for a specific year), it must be rejected.

Cross-check: Pentecostarion readings are always from Acts, John, or the Sunday
cycle Epistles (Romans through Hebrews in sequence). If a candidate feast_e is
from Acts, John 7-21, or follows the Sunday Epistle rotation, treat it as
suspicious and verify against the PDF.

### Known contaminations found and fixed (2026-05-20)
1. **"06-07"** — A fully rogue entry (saint: "All Saints", rank: "great") had been
   inserted as a SAMPLE_MENAION key, containing All Saints Sunday propers
   (Hebrews 11:33-12:2 / Matthew 10:32). This data belongs exclusively in
   PENTECOSTARION[56]. The rogue entry was also structurally malformed (feast_e/feast_g
   nested inside the troparion block). A duplicate "06-07" key existed; JS silently
   resolved it in favor of the correct second entry. The rogue entry has been deleted.
2. **"06-14"** — feast_e: "Hebrews 11:33-12:2" and feast_g: "Matthew 4:25-5:12" were
   All Saints Sunday propers written into the Menaion record. Corrected to the actual
   PDF readings: James 5:10-20 (§57) / Luke 4:22-30 (§14).

Full audit run 2026-05-20 — no other contaminations found.

---

## Source Hierarchy
| Layer | Source | Role |
|---|---|---|
| Assembly rules | Fekula & Williams (2009) | Authoritative — all decisions traced here |
| OCA rank & practice | oca.org/liturgics/outlines | OCA-specific application |
| OCA calendar & hymnography | oca.org/saints/troparia/YYYY/MM/DD | Live troparion/kontakion texts |
| Full service texts (daily) | St. Sergius Menaion PDFs (Google Drive) | Complete services per day |
| Full service texts (fallback) | St. Sergius General Menaion (Google Drive) | By saint type when daily PDF incomplete |
| Fixed skeleton | HTM Horologion (Google Drive: Horologion/) | Invariable Hour texts |

---

## Google Drive Structure

```
orthodox_liturgics/
  fekula_order_of_divine_services_complete_sm_ocr.pdf
  fekula_chapter_1.txt <- Sunday Services §1A–§1F3 (51KB)
  fekula_chapter_2.txt <- Weekday Services §2A–§2G4 (66KB)
  fekula_chapter_3a.txt <- Triodion: Publican & Pharisee through Lazarus Saturday (130KB)
  fekula_chapter_3b.txt <- Triodion: Palm Sunday through Holy Week (65KB)
  fekula_chapter_4.txt <- Pentecostarion §4A–§4B17 (94KB) — PRIMARY ASSEMBLY RULES SOURCE
  fekula_chapter_5.txt <- Intentionally empty (replaced by 3rd ed. Vol. III)
  fekula_chapter_6.txt <- Theotokia usage (9KB)
  fekula_chapter_7.txt <- Kathismata (10KB)
  fekula_chapter_8.txt <- Canons at Matins (6KB)
  fekula_chapter_9.txt <- Liturgical Books (6KB)
  fekula_chapter_10.txt <- Services Without a Priest (3KB)
  fekula_pascha_extract.txt <- Legacy pre-extract; superseded by chapter files
  Daily/HTM/
    HTM_daily_troparia_kontakia_alleluia_prokimena.txt (8KB)
  Feasts/HTM/
    HTM_12_great_feasts_troparia_kontakia.txt (8KB)
  Triodian/HTM/
    HTM_selected_material_from_triodian.txt (23KB)
  Pentecostarion/
    HTM/
      HTM_selected_material_from_pentecostarion.txt (31KB) <- SECONDARY: summary texts only
    st-sergius-pdf/ <- PRIMARY TEXT SOURCE: 59 daily full-service PDFs
      10.pdf 10A.pdf 11.pdf ... 86.pdf 90.pdf 100.pdf 110.pdf
      [encoded .txt records also live here — see Pentecostarion Encoding section]
  Horologion/HTM/
    htm_1st_hour.pdf, htm_3rd_hour.pdf, htm_6th_hour.pdf, htm_9th_hour.pdf
  Menaion/
    st-sergius-pdf/ <- daily PDFs + encoded .txt files
    general-menaion/ <- 26 General Menaion PDFs by saint type (all uploaded)
  Octoechos/
    octoechos_vespers.txt <- pipe-delimited stichera data, all 8 tones (145KB)
    tone1/ <- 7-1.pdf through 7-7.pdf (Sat + 6 weekday files)
    tone2/ <- same structure
    ...tone8/
    common_theotokia/ <- (reserved; not yet encoded)
```

---

## Octoechos Vespers Data File — `octoechos_vespers.txt`

### What it is
A pipe-delimited flat file encoding all Vespers stichera from the St. Sergius
Octoechos for all 8 tones. This is the data source for the LIC and Aposticha
assembler (FW-23 Track A complete for §2A weekday).

### Location
`orthodox_liturgics/Octoechos/octoechos_vespers.txt`

### Format
```
tone|day|type|index|text
```
- `tone`: 0–8 (0 = universal fixed verses, same all tones)
- `day`: sat, sun_eve, mon, tue, wed, thu, fri
- `type`: lic, aposticha, aposticha_glory, lic_dogmatikon (Friday only),
  dogmatikon (Saturday Both Now), verse_weekday_1/2, verse_sat_1/2/3
- `index`: 1–N for numbered stichera; 0 for single texts (glory, dogmatikon, verses)

### Coverage
477 total records across all 8 tones. All 8 tones complete.

### Additional constants encoded in tool (v0.3.0)
`OCTOECHOS_LIC_THEOTOKIA` — 8-tone constant encoding weekday LIC Both Now
theotokia (Glory Both Now at Lord I Have Cried), sourced from N-3.pdf Monday
Evening files for each tone. Independent from Aposticha Both Now theotokia,
which live in `OCTOECHOS_VESPERS[tone][day].aposticha_glory`.

---

## Fekula Source Material — Workflow and File Inventory

### Why the full PDF cannot be read directly
`fekula_order_of_divine_services_complete_sm_ocr.pdf` (8.6MB) always truncates
when read via the Drive API `read_file_content` tool — cuts off mid-Chapter Three
at ~157K chars. Do not attempt to read the full PDF directly in any session.

### Established workflow
The user copy-pastes chapter text from the PDF and uploads chapter-by-chapter `.txt`
files to the `orthodox_liturgics/` Drive folder. These are the authoritative Fekula
reference files for all coding sessions. Always read the relevant chapter `.txt`
file for the work at hand.

### Notes
- Chapter 3 split into 3a/3b because the combined file (~195KB) risks truncation
- Chapter 5 was removed from the 2nd edition; the 192-byte stub correctly records this
- `fekula_pascha_extract.txt` predates the chapter files and is kept for reference;
  the chapter files are now the canonical source

---

## HTM Unabridged Horologion — Supplementary Material

Four subfolders under `orthodox_liturgics/` contain selected material copy-pasted
from the HTM Unabridged Horologion. These provide full liturgical texts for
contexts beyond the ordinary Hours, and will be the primary text source as the
tool expands to Vespers, Matins, and Liturgy assembly.

**`Daily/HTM/HTM_daily_troparia_kontakia_alleluia_prokimena.txt`** (8KB)
Full weekday cycle Monday through Saturday.

**`Feasts/HTM/HTM_12_great_feasts_troparia_kontakia.txt`** (8KB)
All 12 Great Feasts with troparion and kontakion only.

**`Triodian/HTM/HTM_selected_material_from_triodian.txt`** (23KB)
Full pre-Lenten and Lenten Sunday cycle from Publican & Pharisee through Holy Saturday.

**`Pentecostarion/HTM/HTM_selected_material_from_pentecostarion.txt`** (31KB)
**SECONDARY SOURCE** — superseded by the St. Sergius Pentecostarion PDFs.

**FLAG — Russian usage divergence:** The Second Sunday after Pentecost entry
commemorates All Saints of Russia and All Saints of Mount Athos. OCA equivalent
at P+63 is All Saints of North America. Apply OCA primacy.

---

## Pentecostarion Data Architecture

### Overview
The Pentecostarion covers Pascha (P+0) through All Saints Sunday (P+56), with the
All Saints of North America Sunday (P+63) as the OCA extension. All liturgical texts
for this period are keyed by **Pascha offset** (integer), parallel to the LECTIONARY
table already in the tool.

### Primary Source: St. Sergius Pentecostarion PDFs
Located at: `orthodox_liturgics/Pentecostarion/st-sergius-pdf/`

### PDF File Inventory (59 encodable files)

| File(s) | Content | Pascha offsets |
|---|---|---|
| 10 | Pascha Sunday | P+0 |
| 11–16 | Bright Mon–Sat | P+1 to P+6 |
| 20 | Thomas Sunday (Antipascha) | P+7 |
| 21–26 | Thomas week Mon–Sat | P+8 to P+13 |
| 30 | Myrrhbearers Sunday | P+14 |
| 31–36 | Myrrhbearers week Mon–Sat | P+15 to P+20 |
| 40 | Paralytic Sunday | P+21 |
| 41–46 | Paralytic week Mon–Sat | P+22 to P+27 |
| 50 | Samaritan Sunday | P+28 |
| 51–56 | Samaritan week Mon–Sat | P+29 to P+34 |
| 60 | Blind Man Sunday | P+35 |
| 61–66 | Blind Man week Mon–Sat (Ascension P+39) | P+36 to P+41 |
| 70 | Holy Fathers Sunday | P+42 |
| 71–76 | Holy Fathers week Mon–Sat | P+43 to P+48 |
| 80 | Pentecost Sunday | P+49 |
| 81–86 | Pentecost week Mon–Sat | P+50 to P+55 |
| 90 | All Saints Sunday | P+56 |
| 100 | All Saints of Russia Sunday | P+63 — OCA DIVERGENCE |
| 110 | All Saints of Turkish Yoke Sunday | P+70 — Russian-specific, reference only |

### PENTECOSTARION Object Design

Keyed by Pascha offset integer. The `menaion_set_aside` field is the authoritative
signal for all Pentecostarion/Menaion routing decisions:

```javascript
// menaion_set_aside: true  → Great Feast of the Lord — all stichera from pentEntry
// menaion_set_aside absent → Ordinary weekday — Menaion stichera from menaionEntry
```

All assembler routing checks (`_stichSrc`, `licCount`, `allFromPent`,
`doxasticonEntry`, `pentDox`) use `pentEntry.menaion_set_aside` — never
`pentEntry.stichera_lord_i_call` presence, which is now also used for ordinary
weekday Pentecostarion stichera.

### Encoded PENTECOSTARION entries (as of v0.3.1)

| Offset | File | Name | Format | Drive record | Vespers fields |
|---|---|---|---|---|---|
| P+19 | 32.pdf | Myrrhbearers Monday | `pentecostarion_weekday` | 32.txt | stichera_lord_i_call (3), aposticha (3+glory), lic_theotokion |
| P+35 | 60.pdf | Blind Man Sunday | `pentecostarion_sunday` | 60.txt | — |
| P+36 | 61.pdf | Monday, 6th Week | `pentecostarion_weekday` | 61.txt | — |
| P+37 | 62.pdf | Tuesday, 6th Week | `pentecostarion_weekday` | 62.txt | — |
| P+38 | 63.pdf | Apodosis of Pascha | `apodosis_pascha` | 63.txt | — |
| P+39 | 64.pdf | Ascension | `ascension` | 64.txt | stichera_lord_i_call (10), litya (7), aposticha (3+glory), lic_theotokion, menaion_set_aside: true |
| P+40 | 65.pdf | Friday, Ascension afterfeast day 1 | `pentecostarion_weekday` | 65.txt | — |

### hours_format Values and What They Trigger

| Value | Period | Fekula | Hours skeleton change |
|---|---|---|---|
| `paschal` | Pascha + Bright Week | §4B1–4B4 | Christ is risen thrice replaces entire beginning |
| `pentecostarion_sunday` | Sundays P+7 through P+42 | §4B5–4B13 | Standard Sunday with Pentecostarion troparia |
| `pentecostarion_weekday` | Weekdays P+8 through P+48 | §4A | Christ is risen at 1st/6th; Blessed is our God + Christ is risen at 3rd/9th |
| `apodosis_pascha` | Apodosis of Pascha P+38 | §4B11 | Full Paschal ceremony restored |
| `ascension` | Ascension P+39 | §4B12 | Feast troparion/kontakion govern |
| `pentecost` | Pentecost P+49 | §4B15 | O Heavenly King restored |
| `all_saints` | All Saints Sunday P+56 | §4B17 | Returns to Oktoechos cycle; tone 1 begins |

### Weekday Troparia Rotation (Fekula §4A)

| Period | Weeks | Troparion at Hours |
|---|---|---|
| 1 — Thomas week | P+8 to P+13 | Thomas Sunday troparion + Menaion |
| 2 — Myrrhbearers week | P+15 to P+20 | Rotating 4-way + Menaion |
| 3 — Weeks 4–6 | P+22 to P+41 | Preceding Sunday troparion + Menaion |
| 4 — Afterfeasts | During afterfeast periods | Feast troparion + Menaion |

---

## §4A3 Mixed LIC Assembly — Architecture (established v0.3.1)

For ordinary Pentecostarion weekdays with a Menaion saint of §2E/§2F rank:
- LIC stichera count = `menaionEntry.stichera_lord_i_call_count` (e.g. 8 for §2E)
- `pentLicSlots` = licCount − menaionStichera.length (e.g. 8 − 5 = 3)
- First `pentLicSlots` verses → rendered from `pentEntry.stichera_lord_i_call[slotIndex]`
- Remaining verses → rendered from `menaionEntry.stichera_lord_i_call[menaionIdx]`
- `licRendered = true` after the branch renders to prevent duplicate output

**Key principle:** `pentEntry.stichera_lord_i_call` on a weekday entry holds the
Pentecostarion's 3 contributed stichera (not all 8). `menaionLicStichera` always
sources from `menaionEntry` for ordinary weekdays (gated by `menaion_set_aside`).

**Verified test dates:**
- 5/21/2026 (P+39, Ascension): 10 feast stichera all from Pentecostarion ✓
- 5/21/2027 (P+19 + Constantine & Helena §2E): 3 Pentecostarion + 5 Menaion ✓

---

## Pentecostarion Hours Implementation (v0.2.2)

### Confirmed rubrical rules (from Fekula Chapter 4 re-read)

**Global skeleton — Christ is risen period (P+0 through P+38):**
- 3rd and 9th Hours: Blessed is our God → Christ is risen ×3 → Holy God → O come let us worship → psalms
- 1st and 6th Hours: Christ is risen ×3 replaces O come let us worship

**Global skeleton — Ascension period (P+39 through Apodosis of Ascension):**
- Christ is risen no longer sung; O Heavenly King omitted until Pentecost (Fekula §4B11)

**Pentecost:** O Heavenly King restored.

**Kontakion at the Hours — Fekula §4A (confirmed):**
- One kontakion governs all four Hours (NOT a separate ode-III/ode-VI split at Hours)
- The ode-III / ode-VI distinction is a **Matins** rubric only
- Exception: Doxology/Polyeleos/Vigil rank Menaion saint → 3rd/9th use Menaion kontakion
- Apodosis of Pascha (P+38): Blind Man kontakion (Fekula §4B11 explicit)

**Magnificat rule (confirmed):**
- OMITTED on Pentecostarion Sundays and Great Feasts
- SUNG on ordinary Pentecostarion weekdays

### Bug fixed: Math.round → Math.floor (paschaOffset)
`paschaOffset` was initially computed with `Math.round`. Because the App constructs
dates at noon (T12:00:00) and `computePascha` returns midnight UTC, `Math.round`
inflated every offset by 1. Fixed to `Math.floor`.

---

## Reading System Architecture

### Four Reading Types

**TYPE 1 — Paschal Cycle** (DONE)
Epistle + Gospel from the continuous NT sequence, keyed by Pascha offset.
298-entry LECTIONARY table, P-101 through P+263. Lukan Jump computed dynamically.

**TYPE 2 — Feast Proper NT Readings** (COMPLETE for all June)
Stored as `feast_e`/`feast_g` on SAMPLE_MENAION entries, keyed to fixed MM-DD date.
Currently encoded: all 30 June dates complete. July: Jul 1/2/3/14/15 complete.

**TYPE 3 — OT Paroemias / Vespers Lessons** ✅ BUILT (v0.2.6, FW-21)
Displayed in context card for §2E/§2F Menaion saints and Pentecostarion P+42/P+49/P+56.
VespersLessonsExplainer ⓘ always visible. Eight distinct cases handled.

**TYPE 4 — Lenten Lectionary** (FW-05, OUT OF SCOPE until Lenten Hours built)

### Movable Sunday Collision Resolution (v0.2.0)
All 19 Sunday named day entries carry `isSunday: true`. When a named Sunday
falls on a fixed Menaion date, `namedDayIsSunday` suppresses the fixed
`feast_e`/`feast_g` display.

---

## Paschal Calendar — Verified Dates

### Algorithm
Meeus/Jones/Butcher algorithm, Julian calendar, +13 days to Gregorian.
**Verified correct against OCA desk calendar for 2026, 2027, and 2028.**
Do not modify the algorithm.

### Pascha dates
| Year | Pascha | Lent begins (Clean Monday) | Ascension | Pentecost |
|---|---|---|---|---|
| 2026 | April 12 | February 23 | May 21 | May 31 |
| 2027 | May 2 | March 15 | June 10 | June 20 |
| 2028 | April 16 | February 28 | May 25 | June 4 |

### Key Pascha offsets (all verified — do not modify)
| Offset | Feast | Day of week |
|---|---|---|
| -70 | Sunday of the Publican & Pharisee | Sunday |
| -56 | Meatfare Sunday | Sunday |
| -49 | Cheesefare Sunday (Forgiveness Sunday) | Sunday |
| -48 | Clean Monday — Lent begins | Monday |
| -42 | 1st Sunday of Lent (Orthodoxy Sunday) | Sunday |
| -35 | 2nd Sunday of Lent (St Gregory Palamas) | Sunday |
| -28 | 3rd Sunday of Lent (Veneration of the Cross) | Sunday |
| -21 | 4th Sunday of Lent (St John Climacus) | Sunday |
| -15 | Akathist Saturday | Saturday |
| -14 | 5th Sunday of Lent (St Mary of Egypt) | Sunday |
| -8 | Lazarus Saturday | Saturday |
| -7 | Palm Sunday | Sunday |
| 0 | **PASCHA** | Sunday |
| +7 | Thomas Sunday | Sunday |
| +14 | Sunday of the Myrrhbearers | Sunday |
| +21 | Sunday of the Paralytic | Sunday |
| +28 | Sunday of the Samaritan Woman | Sunday |
| +35 | Sunday of the Blind Man | Sunday |
| +38 | Apodosis of Pascha | Wednesday |
| +39 | Ascension | Thursday |
| +42 | Holy Fathers of the First Ecumenical Council | Sunday |
| +49 | Pentecost | Sunday |
| +56 | All Saints Sunday | Sunday |
| +63 | All Saints of North America | Sunday |

---

## Menaion Encoding Workflow

### Step-by-step: PDF -> Tool
1. User uploads PDF to Drive: orthodox_liturgics/Menaion/st-sergius-pdf/
2. Fetch OCA calendar page first (oca.org/saints/lives/YYYY/MM/DD) — Julian/Gregorian sanity check
3. Claude reads PDF via Google Drive API (read_file_content)
4. Claude extracts KEY FIELDS into raw .txt file saved to same Drive folder
5. Claude updates SAMPLE_MENAION in the tool JSX

### KEY FIELDS Template
```
date: MM-DD
service_file: [MM-DD.pdf]
service_rank: [simple | six_stichera | doxology | polyeleos | vigil]
fekula_section: [2A | 2B | 2C | 2D | 2E | 2F]

--- TROPARIA ---
troparion_tone: [1-8]
troparion_text: [full text]

--- KONTAKIA ---
kontakion_tone: [1-8]
kontakion_text: [full text]
kontakion_3rd_ode_tone: [1-8]
kontakion_3rd_ode_text: [full text]

--- AT LITURGY ---
feast_epistle: [e.g. "2 Tim 2:1-10"]
feast_gospel: [e.g. "Matt 10:16-22"]
prokeimenon_tone / prokeimenon_text / prokeimenon_stichos
alleluia_tone / alleluia_verse / alleluia_stichos
communion_verse

--- AT VESPERS: PAROEMIAS ---
paroemia_1 / paroemia_2 / paroemia_3

--- AT VESPERS: LORD I HAVE CRIED STICHERA (§2D+) ---
stichera_lord_i_call_count: [6 | 8 | 10]
stichera_lord_i_call: [array: tone + text per sticheron]
stichera_glory: tone + text (doxasticon)
stichera_both_now: [theotokion or "Octoechos (tone of glory)"]

--- AT VESPERS: APOSTICHA (§2D+) ---
aposticha: [array: verse + tone + text per sticheron]
aposticha_glory: tone + text (doxasticon)
aposticha_both_now: [theotokion or "Octoechos (tone of glory)"]

--- MATINS (§2D+) ---
has_great_doxology / magnificat_sung / matins_gospel / has_litya / ikos / exapostilarion

note: [OCA/Russian differences, fallback source, flags, anything unusual]
```

### Julian/Gregorian Calendar Sanity Check
St. Sergius Menaion is Julian; OCA is Revised Julian (= Gregorian), differ by 13 days.
Always fetch oca.org/saints/lives/YYYY/MM/DD before encoding any date.

### Service Rank Detection
| Evidence | Rank | Fekula |
|---|---|---|
| 3 stichera on Lord I Call | Simple | §2A |
| 6 stichera on Lord I Call | Six-Stichera | §2C |
| Great Doxology at Matins | Doxology | §2D |
| Polyeleos (Ps 134-135) at Matins | Polyeleos | §2E |
| Vigil | Vigil | §2F |

### Hours Kontakion Assignment
| Hour | Matins kontakion reference | Field |
|---|---|---|
| 1st Hour | after the **3rd Ode** | `kontakion_3rd_ode` |
| 3rd Hour | after the **6th Ode** | `kontakion` |
| 6th Hour | after the **3rd Ode** | `kontakion_3rd_ode` |
| 9th Hour | after the **6th Ode** | `kontakion` |

---

## Vespers Assembly — Development Log (v0.3.1)

### Status: Phase 1 complete + FW-23 Track A complete + §4A3 mixed assembly verified

The Vespers assembler (`assembleVespers()`) is built and wired. The full HTM
invariable spine is in place. FW-23 Track A is complete for ordinary §2A weekday
services and §4A3 mixed Pentecostarion+Menaion assembly.

**Fully resolved (as of v0.3.1):**
- §2A weekday: 3 Octoechos + 3 Menaion stichera + doxasticon + theotokion ✓
- §4A3 mixed (Polyeleos/Vigil Menaion saint during Pentecostarion): 3 Pentecostarion + N Menaion ✓
- P+39 Great Feast (Ascension): all 10 stichera from feast, menaion_set_aside governs ✓
- Aposticha: from Pentecostarion when encoded, Octoechos fallback for §2A ✓
- Prokeimenon: Deacon announces with "Wisdom!"; responsorial Chanters/Deacon exchange ✓
- Dismissal: assembled with saint insertion and seasonal variants ✓
- Reader's Service: Fekula Ch.10 fully implemented ✓

**Still unresolved (by design — Track B):**
- LIC stichera for §2C/§2D+ dates without encoded stichera_lord_i_call
- Pentecostarion weekday stichera for weeks not yet encoded (P+15–P+18, P+20+)
- Saturday Aposticha doxasticon — always Menaion-supplied

### Prokeimenon Renderer
Dedicated `prokeimenon` element type. Structure per OCA Office of Vespers (2021):
- Deacon/Priest: "Wisdom! The [Great] Prokeimenon in Tone X: [text]" — grey italic
- Chanters: sing prokeimenon text — black
- Deacon: reads each verse — grey italic
- Chanters: repeat prokeimenon after each verse
- Great Prokeimenon detection: 3 verses = Saturday/Great Feast
- Reader's Service: "Wisdom!" dropped; announcement and verses relabel to "Reader:"

### Reader's Service (Fekula Chapter 10) — complete
`readerMode` toggle in controls bar. Two new element types:
- `substitution` — teal left border; Reader's Service badge; Fekula §10 citation
- `omission` — collapsed grey stub; always visible for transparency

**Vespers substitutions:** opening blessing, Great/Small/Augmented/Evening litanies,
head-bowing sequence (omitted), priest exclamation after Our Father, full dismissal sequence.

**Hours substitutions:** opening blessing at 3rd/9th, both "For Thine is the Kingdom"
exclamations, closing "Lord, bless!", 1st Hour priest glory/dismissal.

### Reader dismissals
Saint name from `menaionEntry.saint` auto-inserted; temple patron in parentheses:
"(and of the patron of this temple,)"

### Vespers dismissal
`_buildVespersDismissal()` — full HTM formula with saint inserted. Seasonal
variants: Sunday ("Who rose from the dead"), Ascension, Pentecost, ordinary weekday.

### Navigation
- 3rd Hour → 6th Hour continuation button (scrolls to `service-heading`) ✓
- 9th Hour → Vespers continuation button (same pattern) ✓

---

## Kathisma Schedule — Implementation (v0.2.7)

Three constants encoded in the tool above the assembler functions:

**`KATHISMA_PSALMS`** — maps kathisma number (1–20) to psalm range string

**`VESPERS_KATHISMA`** — keyed by `kathismaPeriod` then `dow`:
- `summer_winter`: Mon=6, Tue=9, Wed=12, Thu=15, Fri=18, Sat=1, Sun=—
- `autumn_spring` / `lent_1_4_6`: Mon–Fri=18, Sat=1, Sun=—
- `lent_5`: Mon=10, Tue=19, Wed=7, Thu=12, Fri=18, Sat=1, Sun=—
- `passion_week`: Mon–Wed=18, Thu/Fri/Sat=—, Sun=—
- `bright_week`: all=—

**`getKathismaForVespers(liturgicalData, rank, hadVigil)`** — priority-ordered
override logic.

---

## What Is Working (as of May 2026 — v0.3.1)

### Calendar Engine
- Paschal calculation verified correct for 2026, 2027, 2028
- Tone cycle, full season detection, 35 movable named days
- All 12 Great Feasts + forefeasts, afterfeasts, apodoses

### Lectionary
- 298-entry Pascha-offset table, P-101 through P+263
- P+56 and P+63 added (All Saints, All Saints NA proper readings)
- Lukan Jump computed dynamically

### Hours Assembly — all four Hours built
§2A, §2C, §1A, §1B assembly rules; all 8 tones of resurrectional troparia.
Reader's Service fully implemented for Hours (Fekula Chapter 10).

### Vespers Assembly
Full invariable spine + FW-23 Track A stichera assembler.
§4A3 mixed Pentecostarion+Menaion assembly verified end-to-end.
Reader's Service fully implemented (Fekula Chapter 10).
Dismissal assembled with saint insertion and seasonal variants.

### Menaion Library
All June (Jun 1-30) and May 18-31 encoded with full fields.
July: Jul 1/2/3/14/15 complete.
May 21 (Constantine & Helena): full Vespers stichera encoded.

---

## Important Discoveries and Corrections

### RULE: Always encode all fixed Menaion dates — no exceptions
Never skip a date because it conflicts with a movable feast. The calendar engine
handles deconfliction automatically.

### menaion_set_aside is the authoritative routing flag (established v0.3.1)
`menaion_set_aside: true` on a PENTECOSTARION entry means the feast is a Great
Feast of the Lord and the Menaion saint is entirely set aside. All assembler
routing decisions (`_stichSrc`, `licCount`, `allFromPent`, `doxasticonEntry`,
`pentDox`) gate on this flag — NOT on `pentEntry.stichera_lord_i_call` presence.
This distinction matters because ordinary weekday Pentecostarion entries now also
carry `stichera_lord_i_call` for their 3 contributed stichera.

### OCA Divergence Patterns (documented across May encoding)
Three recurring patterns: troparion absent, troparion text diverges, kontakion diverges.
OCA text governs per source hierarchy in all cases.

### Holy Fathers of the 1st Ecumenical Council is MOVABLE (Pascha+42)
Not fixed June 8. June 8 fixed = Translation of Relics of GM Theodore Stratelates.

### Lectionary offset uses Math.floor not Math.round

### St John Maximovich encodes at July 2, not June 19
Reposed June 19 O.S. = July 2 N.S.

---

## Current Limitations / Out of Scope

Not yet assembled (flagged in UI):
- Lenten Hours (§3A), Bright Week, Pentecostarion weekdays not yet encoded (P+0–P+18, P+20–P+34, P+41+)
- Great Feast days, forefeasts, afterfeasts, apodoses (§2G1–§2G4)
- Saturday rules, Matins, Typica

Reading gaps:
- TYPE 2 feast proper readings: July encoding in progress
- Scripture text not yet displayed (references only)

---

## Lord I Have Cried (LIC) and Aposticha — Mechanics

### Lord I Have Cried — how the interleave works

| Stichera count | Insertion starts | Plain verses first |
|---|---|---|
| 6 (§2A/§2C/§2D) | V.6 | V.10, V.9, V.8, V.7 plain |
| 8 (§2E Polyeleos) | V.8 | V.10, V.9 plain |
| 10 (§2F Vigil) | V.10 | None — all verses paired |

After V.1: **Glory → doxasticon → Now and ever → theotokion**

### Sources of stichera by rank
| Rank | Lord I Have Cried sources |
|---|---|
| §2A Simple (Sun–Thu) | 3 Octoechos + 3 Menaion |
| §2C Six-Stichera | 6 Menaion |
| §2D Doxology | 6 Menaion |
| §2E Polyeleos | 8 Menaion (3 Pentecostarion + 5 Menaion during Pentecostarion) |
| §2F Vigil | 10 Menaion (or all feast during Great Feast) |

---

## Future Work Backlog

### COMPLETED
- ~~FW-01~~ ✓ 35 named days validated
- ~~FW-07~~ ✓ All four Hours built
- ~~FW-10~~ ✓ Multi-Service Selector and OCA Disclosure
- ~~FW-04~~ ✓ Correct Fekula §2C badge
- ~~FW-09~~ ✓ How This Works panel
- ~~FW-03~~ ✓ June Menaion all 30 days encoded
- ~~Lectionary~~ ✓ 298-entry table, Lukan Jump, P+56/P+63
- ~~FW-21~~ ✓ OT Paroemias complete (v0.2.6)
- ~~FW-22~~ ✓ June Menaion full back-fill complete
- ~~FW-OCTOECHOS-VESPERS~~ ✓ Complete (v0.3.19): 477 records, all 8 tones
- ~~FW-23 Track A~~ ✓ Complete (v0.3.0): LIC + Aposticha assembler for §2A weekday
- ~~Reader's Service~~ ✓ Complete (v0.3.0): Fekula Ch.10 full implementation
- ~~§4A3 mixed assembly~~ ✓ Complete (v0.3.1): verified end-to-end

### ACTIVE
**FW-16: Menaion Encoding — July**
Jul 1/2/3/14/15 complete. Remaining July dates pending.

**FW-06: Pentecostarion Assembly (ACTIVE)**
Skeleton implemented. Continue encoding remaining weeks.
Next priority: P+15–P+18, P+20–P+34 (Myrrhbearers through Samaritan weeks).

### HIGH PRIORITY
**FW-23 Track B — Menaion stichera data entry (§2D+)**
Stichera fields exist in Drive .txt files but not yet entered into SAMPLE_MENAION.
Fields: `stichera_lord_i_call`, `stichera_glory`, `aposticha`, `aposticha_glory`.

### MEDIUM PRIORITY
- FW-05 Lenten Hours (deadline: Lent 2027, March 15)
- FW-08 Great Feast Assembly
- FW-17 Typica
- FW-02 Daily Commemorations

---

## Key Test Dates
- **Jun 8 2026** — Ordinary weekday: cycle + feast readings shown ✓
- **Jun 10 2026** — §2A Wednesday Tone 1: Vespers fully resolved end-to-end ✓
- **Jun 14 2026** — All Saints NA Sunday: feast reading suppressed ✓
- **May 21 2026** — P+39 Ascension: 10 feast stichera all from Pentecostarion ✓
- **May 21 2027** — P+19 + Constantine & Helena §2E: 3 Pentecostarion + 5 Menaion ✓
- **Jun 17–23 2026** — Pentecostarion P+35–P+41: Hours assembly test range ✓

---

*Last updated: May 2026 · Notes v0.3.21 · Synced to tool v0.3.1-beta*
