# ENCODING RULE — Complete Capture for All Tool Assemblers
**Orthodox Hours Tool · v0.3.5+**
**Created:** May 2026
**Authority:** Fekula & Williams (2009); HTM Horologion; OCA calendar (oca.org)

This rule governs every encoding session. Its purpose: capture every field the
tool currently uses *and* every field it will use when future assemblers are
built, so no date is ever re-encoded a third time for a missing gap.

---

## WHY THIS RULE EXISTS

Prior encoding passes captured troparion, kontakion, and rank — the minimum for
the four Hours. As Vespers, Typica, and Post-Communion were built, additional
fields appeared as gaps (stichera_lord_i_call, aposticha, feast_e/g, prokeimenon,
alleluia, paroemias, etc.) requiring re-encoding passes. This rule requires a
complete single-pass capture for both Menaion and Pentecostarion entries so that
all six assemblers — 1st, 3rd, 6th, 9th Hours · Vespers · Typica — are fully
served from a single read of each source PDF.

---

## SOURCES TO CONSULT FOR EVERY DATE

| Priority | Source | What It Provides |
|---|---|---|
| 1 | Fekula & Williams (2009) | All assembly decisions |
| 2 | OCA calendar — oca.org/saints/troparia/YYYY/MM/DD | Primary commemoration; OCA troparion text if it differs |
| 3 | St. Sergius Menaion PDF (daily) — Drive: Menaion/st-sergius-pdf/ | Full service text: rank, troparion, kontakion, stichera, aposticha, propers |
| 4 | General Menaion PDF (by saint type) — Drive: Menaion/general-menaion/ | Fallback when no daily PDF exists |

---

## PART A — MENAION ENCODING (fixed calendar dates: MM-DD)

Open the St. Sergius PDF for the date. Work top to bottom through the service.
Record every field below. Missing fields must be explicitly noted as ABSENT (do
not leave blank — blank is ambiguous).

---

### A1 — HEADER (always required)

```
DATE: MM-DD
SAINT: [full name as it appears in OCA calendar]
SOURCE FILE: [filename, e.g. 05-22.pdf]
OCA PRIMARY: [Yes / No / Diverges — explanation]
OCA_TROPARION_DIFFERS: [Yes / No — if yes, record both versions]
NOTE: [OCA divergences, calendar collisions, translation notes, anything unusual]
```

---

### A2 — SERVICE RANK (always required)

Count the stichera at Lord I Have Cried at Vespers. Do not assume.

```
STICHERA COUNT AT LORD I HAVE CRIED: [number]
RANK: [simple | six_stichera | doxology | polyeleos | vigil]
RANK EVIDENCE: [e.g. "§2C confirmed — 6 stichera on Lord I Call"]
FEKULA_SECTION: [§2A / §2B / §2C / §2D / §2E / §2F]
HAS_GREAT_DOXOLOGY: [true / false]  ← sung at Matins; true = doxology rank minimum
MAGNIFICAT_SUNG: [true / false]  ← sung at Matins for Polyeleos+
```

---

### A3 — HOURS PROPERS (always required — all four Hours)

The troparion and kontakion govern all four Hours. If two kontakia exist, record
both — the matins_ode field drives the 1st/6th vs 3rd/9th routing.

```
TROPARION:
  tone: [1–8]
  text: [full text]

KONTAKION (Matins Ode VI — governs 3rd & 9th Hours):
  tone: [1–8]
  text: [full text]
  matins_ode: 6

KONTAKION_3RD_ODE (Matins Ode III — governs 1st & 6th Hours):
  [ABSENT if only one kontakion — same kontakion used at all Hours]
  tone: [1–8]
  text: [full text]
  matins_ode: 3

THEOTOKION NOTE: [Theotokion at Hours is from HTM Horologion — no encoding needed]
```

**Double service (§2B) — two saints:** Record separately:
```
SAINT_1: [name]
TROPARION_1: tone / text
KONTAKION_1: tone / text / matins_ode   ← governs 1st & 6th Hours
SAINT_2: [name]
TROPARION_2: tone / text
KONTAKION_2: tone / text / matins_ode   ← governs 3rd & 9th Hours
JOINT_TROPARION: [Yes / No — some double services have one troparion for both]
```

---

### A4 — VESPERS PROPERS (always required)

#### A4a. Lord I Have Cried stichera (Vespers § Lord I Call)

Record ALL stichera in order. For Simple rank (§2A): 3 Menaion stichera.
For Six-Stichera (§2C+): 6 Menaion stichera. Do not skip any.

```
STICHERA_LORD_I_CALL:
  [1]: tone: [X]  text: [full sticheron text]
  [2]: tone: [X]  text: [full sticheron text]
  [3]: tone: [X]  text: [full sticheron text]
  [4–6 if present]: ...

STICHERA_GLORY (doxasticon after Lord I Call):
  tone: [X]  text: [full text]
  [ABSENT if none — some simple services have no separate doxasticon]

LIC_THEOTOKION (Both Now after Lord I Call):
  tone: [X]  text: [full text]
  [ABSENT if Octoechos theotokion governs — record which applies]
```

#### A4b. Aposticha stichera

The aposticha are the stichera sung later in Vespers (before the troparia).
They are INVERTED: sticheron precedes its verse. Record sticheron + verse together.
For Simple rank (§2A), aposticha come from Octoechos — note this, do not encode
Octoechos aposticha here. For §2C+, aposticha come from the Menaion.

```
APOSTICHA_SOURCE: [Menaion / Octoechos / Pentecostarion]
STICHERA_APOSTICHA:
  [1] (no preceding verse): tone: [X]  text: [full sticheron]
  [2] verse: [psalm verse before this sticheron]  tone: [X]  text: [full sticheron]
  [3] verse: [psalm verse before this sticheron]  tone: [X]  text: [full sticheron]

APOSTICHA_GLORY (doxasticon after aposticha):
  tone: [X]  text: [full text]
  [ABSENT if none]

APOSTICHA_THEOTOKION (Both Now after aposticha):
  tone: [X]  text: [full text]
  [ABSENT if Octoechos/invariable text governs]
```

#### A4c. Vespers prokeimenon (required at all ranks)

```
VESPERS_PROKEIMENON:
  tone: [X]
  text: [main prokeimenon verse]
  stichos: [the verse sung before the repeat]
  [ABSENT for simple weekdays — Octoechos weekly prokeimenon governs]
```

#### A4d. OT Paroemias / Vespers Lessons (required for §2E and §2F only)

At Great Vespers for Polyeleos and Vigil rank saints, three OT readings are
proclaimed. Record all three reference strings exactly as they appear in the
Menaion (in the AT VESPERS section). These strings feed the scripture tool.

```
PAROEMIA_1: [e.g. Isaiah 43:9-14]
PAROEMIA_2: [e.g. Wisdom 3:1-9]
PAROEMIA_3: [e.g. Wisdom 5:15-6:3]
[ABSENT for §2A–§2D — no paroemias]
```

---

### A5 — TYPICA PROPERS

#### A5a. Feast proper readings (Epistle and Gospel at Liturgy)

Required for all encoded dates. From the Menaion AT LITURGY section.

```
FEAST_EPISTLE: [e.g. 2 Corinthians 11:31-12:9]
FEAST_GOSPEL: [e.g. Matthew 25:14-30]
[ABSENT if no proper reading — cycle reading from lectionary governs]
```

#### A5b. Liturgy prokeimenon (required for §2E+; record for all if present)

```
PROKEIMENON_TONE: [X]
PROKEIMENON_TEXT: [main verse]
PROKEIMENON_STICHOS: [supporting verse]
[ABSENT for simple/six-stichera if not in PDF — weekday table governs]
```

#### A5c. Alleluia (required for §2E+; record for all if present)

```
ALLELUIA_TONE: [X]
ALLELUIA_VERSE: [main alleluia verse]
ALLELUIA_STICHOS: [supporting verse]
[ABSENT — weekday table governs on ordinary days]
```

#### A5d. Communion verse

```
COMMUNION_VERSE: [full text]
[ABSENT for simple services — weekday formula governs]
```

#### A5e. Special Liturgy substitutions (§2F Vigil feasts and major feasts only)

```
TRISAGION_REPLACEMENT: [text if Trisagion is replaced, e.g. "As many as have been baptized..."]
ZADOSTOINIK: [text if "It Is Truly Meet" is replaced at Liturgy]
[ABSENT for ordinary services]
```

---

### A6 — POST-COMMUNION PRAYERS

The Post-Communion troparion and kontakion block is driven by liturgy type
(Chrysostom / Basil / Presanctified), which the tool auto-detects by date.
No encoding needed here unless this is an unusual feast that changes the
liturgy type unexpectedly.

```
LITURGY_TYPE: [chrysostom / basil / presanctified]
  [Note if non-standard for this date]
```

---

### A7 — MATINS PROPERS (encode now; Matins assembler not yet built)

Capturing these now prevents a future re-encoding pass.

```
MATINS_FORMAT: [alleluia / god_is_the_lord]
  ← alleluia = Simple rank; god_is_the_lord = §2C and above
BEATITUDES_TROPARIA: [record if present in PDF — some feasts have canon troparia at Beatitudes]
  [ABSENT for ordinary simple services]
HAS_POLYELEOS: [true / false]
POLYELEOS_NOTE: [any special instruction in the PDF]
MATINS_GOSPEL: [reference, e.g. "Luke 24:1-12" — present for Vigil feasts]
  [ABSENT for ranks below §2F]
```

---

### COMPLETE MENAION .TXT RECORD FORMAT

Use this template for every date's .txt output file. Save to Drive:
`Menaion/st-sergius-pdf/MM-DD.txt`  
(Corrections: `MM-DD-v2.txt` with header line stating reason; move old to deprecated/)

```
DATE: MM-DD
SAINT: 
SOURCE FILE: 
OCA PRIMARY: 
OCA_TROPARION_DIFFERS: 
NOTE: 

=== SERVICE RANK ===
STICHERA COUNT AT LORD I HAVE CRIED: 
RANK: 
RANK EVIDENCE: 
FEKULA_SECTION: 
HAS_GREAT_DOXOLOGY: 
MAGNIFICAT_SUNG: 

=== HOURS PROPERS ===
TROPARION tone:  text:
KONTAKION tone:  text:  matins_ode:
KONTAKION_3RD_ODE tone:  text:  matins_ode: 3
  [or ABSENT]

=== VESPERS — LORD I HAVE CRIED ===
STICHERA_LORD_I_CALL:
  [1] tone:  text:
  [2] tone:  text:
  [3] tone:  text:
  [4-6 if present]
STICHERA_GLORY tone:  text:
LIC_THEOTOKION tone:  text:

=== VESPERS — APOSTICHA ===
APOSTICHA_SOURCE: 
STICHERA_APOSTICHA:
  [1] tone:  text:
  [2] verse:  tone:  text:
  [3] verse:  tone:  text:
APOSTICHA_GLORY tone:  text:
APOSTICHA_THEOTOKION tone:  text:

=== VESPERS — PROKEIMENON ===
VESPERS_PROKEIMENON tone:  text:  stichos:

=== VESPERS — OT PAROEMIAS (§2E/§2F only) ===
PAROEMIA_1: 
PAROEMIA_2: 
PAROEMIA_3: 

=== TYPICA / LITURGY PROPERS ===
FEAST_EPISTLE: 
FEAST_GOSPEL: 
PROKEIMENON_TONE:  PROKEIMENON_TEXT:  PROKEIMENON_STICHOS:
ALLELUIA_TONE:  ALLELUIA_VERSE:  ALLELUIA_STICHOS:
COMMUNION_VERSE: 
TRISAGION_REPLACEMENT: [if applicable]
ZADOSTOINIK: [if applicable]

=== MATINS ===
MATINS_FORMAT: 
BEATITUDES_TROPARIA: [if present]
HAS_POLYELEOS: 
MATINS_GOSPEL: [§2F only]

=== POST-COMMUNION ===
LITURGY_TYPE: chrysostom [or basil/presanctified if different]
```

---

## PART B — PENTECOSTARION ENCODING (offsets: P+N)

The Pentecostarion replaces the Menaion structure during Pascha through All Saints.
Encoding follows the same completeness standard as the Menaion. Fields marked
[PENT-ONLY] have no Menaion equivalent.

---

### B1 — HEADER (always required)

```
OFFSET: P+[N]
DAY_NAME: [e.g. "Saturday of 6th Week — Ascension Afterfeast Day 2"]
HOURS_FORMAT: [paschal | pentecostarion_weekday | pentecostarion_sunday |
               pentecostarion_saturday_reposed | ascension | apodosis_ascension |
               pentecost | holy_spirit_day | apodosis_pentecost | all_saints_sunday]
SOURCE_FILE: [filename in Drive]
MENAION_SET_ASIDE: [true / false]  ← true = Pentecostarion fully governs the service
NOTE: [structural notes, OCA divergences, anything unusual]
```

---

### B2 — SERVICE RANK [PENT-ONLY]

```
RANK: [as above — determined by same stichera-count method]
FEKULA_SECTION: [§4A / §4B / §4C as applicable to Pentecostarion chapter]
```

---

### B3 — HOURS PROPERS

Same fields as Menaion A3. During afterfeast periods: the Pentecostarion feast
troparion governs (§2G1/§2G2 rules). Record both feast and saint troparia when
both appear.

```
TROPARION tone:  text:
HOURS_KONTAKION tone:  text:  [PENT-ONLY: the kontakion at the Hours, which
  may differ from the Matins kontakion sequence]
KONTAKION tone:  text:  matins_ode:
KONTAKION_3RD_ODE tone:  text:  matins_ode: 3  [or ABSENT]
```

---

### B4 — VESPERS PROPERS

Same structure as Menaion A4, with one addition:

```
LIC_STICHERA_COUNT: [number sung from Pentecostarion at Lord I Call]
STICHERA_LORD_I_CALL:
  [record each sticheron with its feast-specific verse if one is given]
  [1] verse: [feast verse if present]  tone: [X]  text: [sticheron text]
  ...
STICHERA_GLORY tone:  text:
LIC_THEOTOKION tone:  text:

STICHERA_APOSTICHA:
  [same inverted structure as Menaion — sticheron first, then verse]
APOSTICHA_GLORY tone:  text:
APOSTICHA_THEOTOKION tone:  text:

VESPERS_PROKEIMENON tone:  text:  stichos:

LITYA: [text of litya stichera if Great Vespers with Litya]  [or ABSENT]

PAROEMIA_1:  PAROEMIA_2:  PAROEMIA_3:  [for Pentecostarion Sundays with OT lessons]
```

---

### B5 — TYPICA / LITURGY PROPERS

```
FEAST_EPISTLE:  FEAST_GOSPEL:
PROKEIMENON_TONE:  PROKEIMENON_TEXT:  PROKEIMENON_STICHOS:
PROKEIMENON_2_TONE:  PROKEIMENON_2_TEXT:  [if two prokeimena, e.g. All Saints Sunday]
ALLELUIA_TONE:  ALLELUIA_VERSE:  ALLELUIA_STICHOS:
ALLELUIA_2_TONE:  ALLELUIA_2_VERSE:  [if two alleluias]
COMMUNION_VERSE:
TRISAGION_REPLACEMENT:  [e.g. Pentecost: "As many as have been baptized..."]
ZADOSTOINIK:  [if "It Is Truly Meet" is replaced]
```

---

### B6 — MATINS [PENT-ONLY fields]

```
MATINS_FORMAT: [alleluia / god_is_the_lord]
BEATITUDES_TROPARIA: [if any canon troparia appointed at Beatitudes — full text]
HAS_POLYELEOS: [true / false]
MATINS_GOSPEL: [reference if appointed]
```

---

### COMPLETE PENTECOSTARION .TXT RECORD FORMAT

Save to Drive: `Menaion/st-sergius-pdf/P+NN.txt`

```
OFFSET: P+[N]
DAY_NAME: 
HOURS_FORMAT: 
SOURCE_FILE: 
MENAION_SET_ASIDE: 
NOTE: 

=== SERVICE RANK ===
RANK: 
FEKULA_SECTION: 

=== HOURS PROPERS ===
TROPARION tone:  text:
HOURS_KONTAKION tone:  text:
KONTAKION tone:  text:  matins_ode:
KONTAKION_3RD_ODE tone:  text:  matins_ode: 3  [or ABSENT]

=== VESPERS — LORD I HAVE CRIED ===
LIC_STICHERA_COUNT: 
STICHERA_LORD_I_CALL:
  [1] verse:  tone:  text:
  ... (all stichera with feast verses where given)
STICHERA_GLORY tone:  text:
LIC_THEOTOKION tone:  text:

=== VESPERS — APOSTICHA ===
STICHERA_APOSTICHA:
  [1] tone:  text:
  [2] verse:  tone:  text:
  [3] verse:  tone:  text:
APOSTICHA_GLORY tone:  text:
APOSTICHA_THEOTOKION tone:  text:

=== VESPERS — OTHER ===
VESPERS_PROKEIMENON tone:  text:  stichos:
LITYA: [text or ABSENT]
PAROEMIA_1:  PAROEMIA_2:  PAROEMIA_3:  [or ABSENT]

=== TYPICA / LITURGY PROPERS ===
FEAST_EPISTLE: 
FEAST_GOSPEL: 
PROKEIMENON_TONE:  PROKEIMENON_TEXT:  PROKEIMENON_STICHOS:
PROKEIMENON_2_TONE:  PROKEIMENON_2_TEXT:  [or ABSENT]
ALLELUIA_TONE:  ALLELUIA_VERSE:  ALLELUIA_STICHOS:
ALLELUIA_2_TONE:  ALLELUIA_2_VERSE:  [or ABSENT]
COMMUNION_VERSE: 
TRISAGION_REPLACEMENT: [or ABSENT]
ZADOSTOINIK: [or ABSENT]

=== MATINS ===
MATINS_FORMAT: 
BEATITUDES_TROPARIA: [or ABSENT]
HAS_POLYELEOS: 
MATINS_GOSPEL: [or ABSENT]
```

---

## PART C — RANK-BY-RANK CHECKLIST

Use this to confirm completeness before saving any .txt file.

### §2A / §2C — Simple or Six-Stichera (most weekday saints)
- [x] Header fields (saint, source, OCA check)
- [x] Rank + stichera count evidence
- [x] Troparion (tone + text)
- [x] Kontakion (tone + text + matins_ode; note if only one = all Hours)
- [x] LIC stichera: 3 for §2A, 6 for §2C
- [x] LIC doxasticon (if present)
- [x] LIC theotokion (if in Menaion; else note Octoechos governs)
- [x] Aposticha: note if from Octoechos (§2A); record all 3 if from Menaion (§2C+)
- [x] Aposticha doxasticon and theotokion
- [x] Feast epistle + gospel (from AT LITURGY)
- [x] Matins format (alleluia = §2A/§2C)

### §2D — Doxology
All of the above, PLUS:
- [x] HAS_GREAT_DOXOLOGY: true
- [x] Vespers prokeimenon
- [x] Alleluia verse (if given in PDF)
- [x] Communion verse (if given)

### §2E — Polyeleos
All of the above, PLUS:
- [x] MAGNIFICAT_SUNG: true
- [x] All 3 paroemias (AT VESPERS section)
- [x] Liturgy prokeimenon (tone + text + stichos)
- [x] Liturgy alleluia (tone + verse + stichos)
- [x] Communion verse
- [x] Matins gospel (if present)

### §2F — Vigil
All §2E fields, PLUS:
- [x] Litya stichera (if Great Vespers with Litya)
- [x] Matins gospel
- [x] Zadostoinik (if "It Is Truly Meet" is replaced)
- [x] Trisagion replacement (if applicable)

---

## PART D — COMMON ENCODING MISTAKES TO AVOID

1. **Kontakion routing confusion** — always record matins_ode (3 or 6).
   The tool routes: ode_3 kontakion → 1st & 6th Hours; ode_6 kontakion → 3rd & 9th.
   If only one kontakion is present, all Hours use it — record matins_ode: 6.

2. **Aposticha inversion** — sticheron comes FIRST, then its verse.
   The LIC structure is: verse → sticheron. Aposticha is: sticheron → verse.
   Do not encode aposticha in the same order as Lord I Call.

3. **Feast verses in Pentecostarion LIC stichera** — the Pentecostarion often
   provides its own psalm verses to be sung between stichera at Lord I Call.
   These replace the standard V.10–V.1 sequence. Record the verse alongside
   each sticheron. If no feast verse is given, note that the standard sequence applies.

4. **§2A aposticha are from Octoechos** — do not encode them from the Menaion
   for Simple rank services. Just note "APOSTICHA_SOURCE: Octoechos" and move on.

5. **Blank ≠ Absent** — always write ABSENT explicitly. A blank field is ambiguous
   and will be treated as an encoding gap in future sessions.

6. **Feast epistle/gospel** — always look in the AT LITURGY section of the PDF.
   This section is sometimes very short (just references). Do not skip it.

7. **OCA troparion vs St. Sergius troparion** — check oca.org for every date.
   If the OCA text differs, record BOTH and flag with OCA_TROPARION_DIFFERS: Yes.
   The tool will use the OCA text when it diverges.

8. **LXX versification** — paroemia references in liturgical books use Hebrew
   numbering. The scripture tool uses Brenton LXX numbering. These can diverge
   (confirmed in Malachi and Psalms). Record references exactly as they appear
   in the PDF; versification reconciliation happens at the scripture tool level.

---

## PART E — TOOL SCHEMA MAPPING

After the .txt record is complete, enter these fields into the tool's data objects.

### SAMPLE_MENAION["MM-DD"] fields

| .txt Field | SAMPLE_MENAION Key | Notes |
|---|---|---|
| SAINT | saint | |
| OCA PRIMARY | oca_primary | true/false |
| SOURCE FILE | service_file | |
| NOTE | note | |
| RANK | rank | simple/six_stichera/doxology/polyeleos/vigil |
| FEKULA_SECTION | fekula_section_override | only if non-standard |
| HAS_GREAT_DOXOLOGY | has_great_doxology | |
| MAGNIFICAT_SUNG | magnificat_sung | |
| TROPARION | troparion.tone + .text | |
| KONTAKION | kontakion.tone + .text + .matins_ode | |
| KONTAKION_3RD_ODE | kontakion_3rd_ode.tone + .text | |
| STICHERA_LORD_I_CALL | stichera_lord_i_call[] | array of {tone, text} |
| STICHERA_GLORY | stichera_glory.tone + .text | |
| LIC_THEOTOKION | lic_theotokion.tone + .text | |
| STICHERA_APOSTICHA | stichera_aposticha[] | array of {tone, text, verse?} |
| APOSTICHA_GLORY | aposticha_glory.tone + .text | |
| APOSTICHA_THEOTOKION | aposticha_theotokion | |
| VESPERS_PROKEIMENON | vespers_prokeimenon_tone/text/stichos | |
| PAROEMIA_1/2/3 | paroemia_1/2/3 | §2E/§2F only |
| FEAST_EPISTLE | feast_e | |
| FEAST_GOSPEL | feast_g | |
| PROKEIMENON_TONE/TEXT/STICHOS | prokeimenon_tone/text/stichos | |
| ALLELUIA_TONE/VERSE/STICHOS | alleluia_tone/verse/stichos | |
| COMMUNION_VERSE | communion_verse | |
| TRISAGION_REPLACEMENT | trisagion_replacement | |
| ZADOSTOINIK | zadostoinik | |

### PENTECOSTARION[offset] fields — same schema plus:

| .txt Field | PENTECOSTARION Key |
|---|---|
| HOURS_FORMAT | hours_format |
| MENAION_SET_ASIDE | menaion_set_aside |
| HOURS_KONTAKION | hours_kontakion.tone + .text |
| LITYA | litya[] |
| PROKEIMENON_2 | prokeimenon_2_tone/text |
| ALLELUIA_2 | alleluia_2_tone/verse |
| BEATITUDES_TROPARIA | beatitudes_troparia[] |

---

*This rule supersedes the encoding workflow described in project_notes_v0.3.22 for
the purposes of completeness. The project_notes workflow (Steps 1–4) remains the
procedure; this rule defines the complete field set to be captured at Step 3.*
