# How the Orthodox Hours Tool Works
### A Plain-Language Guide for Readers and Laity
*Version 0.2.5 · May 2026*

---

## What This Tool Does

The Orthodox Hours Tool assembles the Daily Hours — the 1st, 3rd, 6th, and 9th Hours — for any given date in the calendar year. You select a date, and the tool produces the complete sequence of prayers, psalms, troparia, and kontakia in the correct order, with every movable element identified by its source.

It is designed for two purposes simultaneously: **practical use at the reader's stand**, and **education** — helping readers understand *why* the service looks the way it does on a given day.

The tool is built specifically for **OCA parishes using Russian liturgical practice**. If your parish follows a different jurisdiction or rubrical tradition, some details may differ.

---

## The Source Hierarchy

Every decision the tool makes is traced to a source. Sources are ranked in priority order. When sources conflict, the higher-ranked source wins — and the conflict is flagged in the tool's notes.

### 1. Fekula & Williams, *The Order of Divine Services* (2009)
**Saint John of Kronstadt Press · 2nd ed. revised**

This is the primary assembly authority. Every structural decision — which troparion governs, which kontakion is used at which Hour, when Menaion content overrides the Octoechos — is cited to a specific section of Fekula. When you see a badge like `Fekula §2C` or `§4A`, that is the section of this book that justifies the assembly choice.

### 2. OCA Calendar (oca.org)
**Authoritative for OCA parishes. Takes precedence over the Russian Menaion when they differ.**

The OCA calendar determines which saints are commemorated on which dates. It sometimes differs from the traditional Russian calendar (Old Style vs. New Style date conversions, different feast prioritizations, OCA-specific saints). When the OCA calendar and the Russian Menaion disagree, the OCA calendar governs — and the divergence is documented in the tool's encoding record for that date.

### 3. St. Sergius Menaion PDFs
**Primary source for service texts (troparion, kontakion, stichera, etc.)**

The St. Sergius Menaion is a complete set of daily service books. Each day's PDF contains the full texts for Vespers, Matins, and Liturgy. The tool reads these PDFs directly and extracts the troparion tone and text, kontakion tone and text, service rank indicators (number of stichera on *Lord I Call*), and the Matins ode assignments (which kontakion follows Ode III vs. Ode VI).

### 4. HTM Horologion (Unabbreviated Book of the Hours)
**Source for all invariable Hour skeleton texts**

The psalms, the Trisagion, *O Most Holy Trinity*, *Our Father*, *More Honourable than the Cherubim*, and all the other fixed texts that never change are drawn from the HTM Horologion. These form the skeleton of each Hour. The tool also draws the priest's short blessings, the hour-specific closing prayers, and the full 1st Hour dismissal directly from this source.

---

## The Anatomy of a Service

A Daily Hour has two kinds of content:

### Fixed Content (the skeleton)
These elements are identical every day of the year, regardless of season or saint. They come from the HTM Horologion and never change. Examples:
- The opening blessing (*Blessed is our God...*)
- The three psalms for each Hour
- *Holy God, Holy Mighty, Holy Immortal* (Trisagion)
- *Our Father*
- *More Honourable than the Cherubim*
- The hour-specific closing prayer (*O Master, Lord Jesus Christ...* at the 9th Hour)

### Movable Content (the variables)
These elements change based on the date, the saint, the liturgical season, and the service rank. Examples:
- The **troparion** — the hymn proper to the saint or feast of the day
- The **kontakion** — a shorter hymn; the specific kontakion used depends on *which Hour* you are at (the HTM rubric directs: *"If there be two kontakia, he saith the kontakion which was chanted after the 3rd Ode at Matins"* at the 1st and 6th Hours; after the 6th Ode at the 3rd and 9th Hours)
- The **theotokion** at the end of the troparion block
- Seasonal substitutions (e.g., *Christ is risen* replaces *O come let us worship* during the Paschal period)

---

## How a Date Gets Encoded

Before the tool can assemble a service for a given date, that date must be **encoded** — meaning a human has read the source PDF and extracted the key liturgical data into the tool's database. This is not automated. Every entry represents a deliberate act of reading, cross-referencing, and decision-making.

### Step 1: Read the Menaion PDF
The encoder opens the St. Sergius Menaion PDF for that date. The first things checked are:

- **Service rank** — determined by counting the stichera on *Lord I Call* at Vespers:
  - 3 stichera → **Simple** (§2A)
  - 6 stichera → **Six-Stichera** (§2C)
  - Great Doxology sung → **Doxology** (§2D)
  - Polyeleos sung → **Polyeleos** (§2E)
  - All-Night Vigil prescribed → **Vigil** (§2F)
- **Troparion** — tone number and full text
- **Kontakion(s)** — tone number, full text, and which Matins ode they follow (Ode III or Ode VI). If there are two kontakia, both are recorded with their ode assignments.

### Step 2: Cross-reference the OCA calendar
The encoder checks oca.org for the same date to confirm:
- Does the OCA calendar agree with the St. Sergius PDF on the primary commemoration?
- Does the OCA troparion text differ from the St. Sergius text? (Same theology, different translation — the OCA text governs.)
- Is this date a New Style / Old Style divergence? (E.g., a saint commemorated May 19 NS in the OCA may appear as June 1 in the St. Sergius book.)

### Step 3: Record the encoding
All fields are written to a plain-text record (`.txt` file) and saved to the project's Google Drive folder. The record includes:
- Source file name
- Fekula section
- Troparion tone and text
- Kontakion tone(s), text(s), and ode assignments
- Service rank with confirmation evidence (*"§2C confirmed — 6 stichera"*)
- All divergences from OCA noted explicitly

### Step 4: Enter the data into the tool
The encoded data is written into the tool's `SAMPLE_MENAION` object (for fixed calendar dates) or `PENTECOSTARION` object (for dates keyed to Pascha). The tool then uses this data to assemble the correct Hour on any day the user selects.

---

## Annotated Example: June 8 — Translation of the Relics of Greatmartyr Theodore Stratelates

Here is what the encoding record looks like for a specific date, with each part explained.

```
DATE: June 8
SAINT: Translation of the Relics of Greatmartyr Theodore Stratelates
SOURCE FILE: 06-08.pdf (St. Sergius Menaion)
OCA PRIMARY: Yes — OCA calendar agrees on this commemoration
```

**Service rank determination:**
> *"§2C confirmed — 6 stichera on Lord I Call at Vespers"*

The PDF shows exactly 6 stichera sung to *Lord I Call*, which places this service at Six-Stichera rank (§2C). This is not an assumption — the stichera are counted explicitly from the PDF.

**Troparion (what gets assembled at the Hours):**
> Tone 4: *"Through noetic recruitment thou didst become a most comely general of the heavenly King, O passion-bearer Theodore..."*

This is the St. Sergius text. The OCA renders this same troparion in more contemporary English. The tool currently uses the St. Sergius translation; the OCA text is flagged as a known divergence to be corrected in a future update.

**Kontakion (one kontakion, after Ode VI only):**
> Tone 2: *"Arrayed in faith with manliness of soul, and taking in hand the word of God as a spear..."*
> `matins_ode: 6`

The PDF contains only one kontakion, placed after Ode VI at Matins. Since there is only one kontakion, the HTM rule about two kontakia does not apply — the same kontakion is used at all four Hours.

**What this produces at the 9th Hour:**
The tool assembles:
1. *(fixed)* Full opening, psalms, Trisagion, Our Father...
2. *(fixed)* Priest: For Thine is the kingdom...
3. *(fixed)* Reader: Amen. Lord have mercy (12). Glory... Both now...
4. *(fixed)* O come let us worship (×3)
5. *(fixed)* Psalms 83, 84, 85
6. *(fixed)* Alleluia (×3). Lord have mercy (×3).
7. **🟡 MOVABLE** — Glory... **Troparion** Tone 4 (Theodore Stratelates)
8. *(fixed)* Both now and ever... **Theotokion** (ordinary tone 4 theotokion)
9. *(fixed)* Deliver us not up utterly... Holy God... Our Father...
10. *(fixed)* Priest: For Thine is the kingdom...
11. **🟡 MOVABLE** — Reader: Amen. **Kontakion** Tone 2 (with HTM ode rubric)
12. *(fixed)* Lord have mercy (×40). Prayer of the Hours...
13. *(fixed)* Lord have mercy (×3). Glory... Both now...
14. *(fixed)* More Honourable than the Cherubim...
15. *(fixed)* In the name of the Lord, father (master), bless.
16. *(fixed)* Priest: God be gracious unto us and bless us...
17. *(fixed)* Reader: Amen.
18. *(fixed)* O Master, Lord Jesus Christ... (closing prayer)
19. *(fixed)* **THE END OF THE NINTH HOUR**

Elements marked 🟡 are the only parts that change. Everything else is identical every ordinary weekday.

---

## The Pentecostarion Period

The period from Pascha to All Saints Sunday (50+ days) follows different assembly rules governed by Fekula Chapter 4. The tool handles this period separately through a `PENTECOSTARION` database keyed by the number of days after Pascha.

Key structural changes during this period:
- **Bright Week (Pascha + 1–6):** The entire opening is replaced by *Christ is risen* (×3). No psalms. Full Paschal Hours format.
- **Thomas Sunday through Apodosis of Pascha (P+7–P+38):** After the opening blessing, the reader says *Amen* and **immediately** chants *Christ is risen* (×3) — *Glory to Thee our God* and *O Heavenly King* are both skipped per HTM.
- **Apodosis of Pascha through Pentecost (P+39–P+48):** Both *Glory to Thee* and *O Heavenly King* are omitted; the reader proceeds directly to *Holy God*.
- **Pentecost onward:** *O Heavenly King* is restored.

Each of these transitions is encoded and documented. The `hours_format` field in each Pentecostarion entry tells the assembly engine which skeleton to use.

**Encoding status (May 2026):** P+35 through P+56 are fully encoded. Earlier Pentecostarion entries (P+0 through P+34) are planned for a future encoding session.

---

## Known Limitations and Honest Disclosures

### What the tool currently assembles
The tool assembles the Daily Hours — 9th Hour, 6th Hour, 3rd Hour, and 1st Hour. It does not currently assemble Vespers, Matins, or the Divine Liturgy (though the lectionary data for Liturgy is encoded and displayed in the context card).

### What is not yet encoded
Dates in the Menaion that have not yet been read from the PDF are marked as **unresolved** (shown with a red border in the tool). When you see an unresolved entry, the tool displays the saint's name from the OCA calendar but cannot supply the troparion or kontakion text. Unresolved entries are a gap in the encoding work, not a gap in the liturgical tradition itself.

**Currently encoded Menaion dates:** May 18–31, and June (full month). Other months are in progress.

### Translation divergences
The tool primarily uses St. Sergius (Russian) Menaion texts. The OCA often uses a different English translation of the same troparion or kontakion. These are the same prayer in a different rendering — not different prayers. Known divergences are flagged in the encoding record and will be corrected to the OCA text in future updates.

### The "two kontakia" rule
The HTM is explicit: when a saint has two kontakia at Matins (one after Ode III, one after Ode VI), the 1st and 6th Hours use the Ode III kontakion, and the 3rd and 9th Hours use the Ode VI kontakion. The tool implements this rule. However, not all Menaion PDFs have been checked for a second kontakion — some entries may be encoded with only the Ode VI kontakion used as a fallback at all Hours. If you notice a kontakion at an Hour that does not match your book, this is the most likely cause.

### Collision resolution (Menaion saint + Pentecostarion feast)
When a fixed-calendar Menaion saint falls within the Pentecostarion period, the tool follows Fekula's hierarchy: the Pentecostarion feast governs the Hour structure, and the Menaion saint's troparion appears as the second troparion under *Glory* (if the Menaion service is Simple or Six-Stichera rank). Higher-ranking Menaion services may override the Pentecostarion in some cases — these are handled individually and documented.

### OCA-specific feasts
Certain feasts have no equivalent in the St. Sergius Menaion:
- **All Saints of North America (P+63)** — OCA-specific; the Russian Menaion has All Saints of Russia at this offset. The tool uses OCA texts and calendar.
- **St. John Maximovich (July 2)** — OCA-specific vigil feast. Encoded with OCA texts.

---

## The Complete Encoding Record — All Fields

Every date that has been encoded carries some or all of the following fields. This is the full data record stored for each date — far more than what the Hours surface uses today. The tool is being built from the ground up to support the full daily cycle of services, and the encoding work reflects that scope.

Fields marked **✓ Used now** are actively used in the assembled Hours. Fields marked **— Future** are stored in the database, waiting for the Vespers, Matins, and Liturgy assembly layers to be built.

### Identity & Provenance

| Field | What it contains | Used now |
|---|---|---|
| `saint` | Full name of the commemorated saint or feast | ✓ Context card |
| `rank` | Service rank: `simple` · `six_stichera` · `doxology` · `polyeleos` · `vigil` | ✓ Rank badge & RankExplainer |
| `fekula_section` | Fekula §2A–§2F or §4A–§4B15 governing the assembly | ✓ Citation badges |
| `fekula_section_override` | Overrides the default section for special cases (e.g. §2B double service) | ✓ Citation badges |
| `oca_primary` | Whether this is the OCA calendar's primary commemoration | ✓ OCA PRIMARY badge |
| `service_file` | Source PDF filename (e.g. `06-08.pdf`) | ✓ Encoding provenance |
| `note` | Encoding notes: OCA divergences, calendar collisions, rank evidence, secondary commemorations | ✓ Context card note field |
| `hours_format` | Assembly engine signal: `paschal` · `pentecostarion_sunday` · `ascension` · `pentecost` · `all_saints_sunday` · etc. | ✓ Skeleton selection |

### Hymnography (Troparia & Kontakia)

| Field | What it contains | Used now |
|---|---|---|
| `troparion.tone` | Tone number (1–8) of the primary troparion | ✓ All four Hours |
| `troparion.text` | Full text of the primary troparion | ✓ All four Hours |
| `troparion_2.tone` | Tone of the second troparion (when two govern — Glory placement) | ✓ All four Hours |
| `troparion_2.text` | Full text of the second troparion | ✓ All four Hours |
| `troparion_2.placement` | Where the second troparion appears (`glory` · `both_now`) | ✓ All four Hours |
| `kontakion.tone` | Tone number of the kontakion | ✓ 3rd & 9th Hours (Ode VI) |
| `kontakion.text` | Full text of the kontakion | ✓ 3rd & 9th Hours |
| `kontakion.matins_ode` | Which Matins ode this kontakion follows (3 or 6) | ✓ Hour routing logic |
| `kontakion_3rd_ode.tone` | Tone of the separate Ode III kontakion, when it differs from Ode VI | ✓ 1st & 6th Hours |
| `kontakion_3rd_ode.text` | Full text of the Ode III kontakion | ✓ 1st & 6th Hours |
| `hours_kontakion` | Pentecostarion: the feast kontakion governing *Both now* at the Hours | ✓ Pentecostarion Hours |

### Scripture (At the Divine Liturgy)

| Field | What it contains | Used now |
|---|---|---|
| `feast_e` | Feast proper Epistle reading reference (e.g. `2 Timothy 2:1-10`) | ✓ Context card |
| `feast_g` | Feast proper Gospel reading reference (e.g. `Matthew 10:16-22`) | ✓ Context card |
| `prokeimenon_tone` | Tone of the prokeimenon at Liturgy | — Liturgy (future) |
| `prokeimenon_text` | Full text of the prokeimenon verse | — Liturgy (future) |
| `prokeimenon_stichos` | The stichos verse sung with the prokeimenon | — Liturgy (future) |
| `prokeimenon_2_tone` | Tone of a second prokeimenon (e.g. All Saints Sunday — two prokeimena) | — Liturgy (future) |
| `prokeimenon_2_text` | Text of the second prokeimenon | — Liturgy (future) |
| `alleluia_tone` | Tone of the Alleluia at Liturgy | — Liturgy (future) |
| `alleluia_verse` | The Alleluia verse | — Liturgy (future) |
| `alleluia_stichos` | The second Alleluia verse | — Liturgy (future) |
| `alleluia_2_tone` | Tone of a second Alleluia (e.g. All Saints Sunday — two alleluias) | — Liturgy (future) |
| `alleluia_2_verse` | Text of the second Alleluia verse | — Liturgy (future) |
| `communion_verse` | The communion hymn sung during the distribution | — Liturgy (future) |
| `trisagion_replacement` | Text replacing the Trisagion on certain feasts (e.g. Pentecost: *"As many as have been baptized into Christ..."*) | — Liturgy (future) |
| `reposed_e` | Second Epistle for the Saturday of the Reposed (1 Thessalonians 4:13-17) | — Liturgy (future) |
| `reposed_g` | Second Gospel for the Saturday of the Reposed (John 5:24-30) | — Liturgy (future) |

### At Vespers

| Field | What it contains | Used now |
|---|---|---|
| `paroemia_1` | First Old Testament Vespers lesson (Polyeleos rank and above) | — Vespers (future) |
| `paroemia_2` | Second Old Testament Vespers lesson | — Vespers (future) |
| `paroemia_3` | Third Old Testament Vespers lesson | — Vespers (future) |
| `has_litya` | Whether the feast has a Litya at Vespers | — Vespers (future) |

### At Matins

| Field | What it contains | Used now |
|---|---|---|
| `matins_gospel` | Resurrection Gospel number (1–11) for Sunday Matins | — Matins (future) |
| `has_great_doxology` | Whether the Great Doxology is sung (not read) at Matins | — Matins (future) |
| `has_polyeleos` | Whether the Polyeleos is sung at Matins | — Matins (future) |
| `magnificat_sung` | Whether the Magnificat (Ode IX) is sung or replaced by the Irmos | — Matins (future) |
| `zadostoinik_irmos` | The Irmos of the 9th Ode that replaces *It is truly meet* on feast days | — Matins/Liturgy (future) |
| `zadostoinik_refrain` | The refrain sung with the Irmos on feast days | — Matins/Liturgy (future) |

### Pentecostarion-Specific Fields

These fields appear only in the `PENTECOSTARION` object (dates keyed to Pascha):

| Field | What it contains | Used now |
|---|---|---|
| `name` | Full liturgical name of the day (e.g. *"Holy Pentecost — Sunday"*) | ✓ Context card |
| `source_file` | Source PDF filename (e.g. `80.pdf`) | ✓ Encoding provenance |
| `tone` | The Octoechos tone number governing the week | ✓ Context card |
| `hours_format` | Assembly skeleton selector (see Source Hierarchy section) | ✓ Skeleton selection |
| `menaion_set_aside` | Whether the Menaion saint is entirely displaced by the feast | ✓ Assembly logic |
| `heavenly_king_restored` | Flags when *O Heavenly King* is restored after the Paschal period (Pentecost) | ✓ Opening sequence |
| `heavenly_king_omitted` | Flags when *O Heavenly King* is omitted (Apodosis of Pascha through Pentecost Eve) | ✓ Opening sequence |

---

### What this means in practice

On an ordinary June weekday, the tool uses about **6 fields** to assemble the four Hours: `troparion` (tone + text), `kontakion` (tone + text + matins_ode), and optionally `kontakion_3rd_ode`. 

But the encoding record for that same date may contain **20+ fields** — the full prokeimenon, alleluia, communion verse, and paroemia data needed to assemble the Liturgy and Vespers when those services are built.

The encoding work is not just for the Hours. It is building the complete liturgical database for the full daily cycle. The Hours are the first surface of a much deeper record.

## How to Give Feedback

This tool is a teaching aid as much as a practical resource. Errors in assembly are possible — and your knowledge as a practicing reader is the best check we have.

**Things worth reporting:**
- A troparion or kontakion that doesn't match your printed book or what your parish chants
- An incorrect service rank (e.g., the tool shows Simple but your Menaion has 6 stichera)
- A structural error in the Hour sequence (something out of order, missing, or misattributed)
- A date where the OCA calendar disagrees with what the tool shows
- A seasonal transition that doesn't match your understanding of the rubrics

**What helps us most:**
- The specific date and Hour
- What the tool shows vs. what you expected
- The source you're comparing against (which Menaion, which edition)

We are building this tool in public and in good faith. Every correction is welcomed — it makes the tool more trustworthy for every reader who uses it.

---

## Glossary of Terms Used in This Document

**Troparion** — The primary hymn for a saint or feast. Sung at multiple services; governs the "tone" (melodic mode) of the week.

**Kontakion** — A shorter hymn, theologically complementary to the troparion. Different kontakia are used at different Hours depending on their Matins ode assignment.

**Theotokion** — A hymn in honor of the Theotokos (the Mother of God), sung after the troparion at the Hours.

**Stichera** — Hymns sung between psalm verses at Vespers on *Lord I Call*. Their count determines service rank.

**Service rank** — The "weight" assigned to a commemoration, from Simple (§2A) to Vigil (§2F). Rank determines which elements of the Menaion appear at each service, and whether they override the Octoechos.

**Octoechos** — The Eight Tones book. Contains the rotating weekly cycle of hymns. On ordinary weekdays without a ranked Menaion saint, the Octoechos governs.

**Pentecostarion** — The liturgical book covering Pascha through All Saints Sunday (approximately 10 weeks). Its rules supersede the ordinary Menaion/Octoechos structure.

**Fekula §_** — A citation to *The Order of Divine Services* by Fekula & Williams, the primary assembly authority for this tool.

**HTM** — The Unabbreviated Horologion or Book of the Hours, the source for all fixed Hour skeleton texts.

---

*This document reflects the state of the tool as of May 2026 (v0.2.5). It will be updated as new dates are encoded and new features are added.*
