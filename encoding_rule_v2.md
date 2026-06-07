# ENCODING RULE v2.1 — Orthodox Hours Tool
**Authority:** Fekula & Williams (2009) · HTM Horologion · OCA calendar (oca.org)
**Updated:** May 2026 · **Supersedes:** encoding_rule_v2.0, encoding_rule_complete_capture.md (v1.1 and all prior)

**v2.1 changes:** Kontakion field names unified across Menaion and Pentecostarion —
`kontakion_ode6` (3rd & 9th Hours) and `kontakion_ode3` (1st & 6th Hours) replace
the prior asymmetric `kontakion` / `kontakion_3rd_ode` (Menaion) naming.
`source_file` replaces `service_file` in Menaion entries. `hours_kontakion` retained
for single-kontakion Pentecostarion entries only.

---

## 0. THE GOVERNING PRINCIPLE

**Every encoded date has a complete record. No field is ever silently omitted.**

A missing field is ambiguous — it could mean "genuinely absent from the source,"
"not yet encoded," or "predates this field being defined." All three of those are
different states and must be distinguishable. This rule enforces that:

- **ABSENT** — the field does not exist for this date by rubrical design
  (e.g., `FEAST_E: ABSENT — §2A, no proper epistle`)
- **NOT IN PDF** — the field should exist but the source PDF does not contain it;
  flagged for future resolution (e.g., `PAROEMIA_1: NOT IN PDF — unusual for §2E, flagged`)
- **NOT YET ENCODED** — the data exists in the PDF but was not captured this session;
  reserved for matins-only fields when Matins assembler is not yet built

A blank field is never acceptable. Blank = encoding error.

---

## 1. SOURCE AUTHORITY (in order)

| Priority | Source | Role |
|---|---|---|
| 1 | **Fekula & Williams (2009)** | All assembly decisions; rank determination |
| 2 | **OCA calendar — oca.org** | Primary commemoration; OCA troparion/kontakion if differing |
| 3 | **St. Sergius Menaion PDF** — Drive: `orthodox_liturgics/Menaion/st-sergius-pdf/` | Full service texts for Menaion dates |
| 4 | **St. Sergius Pentecostarion PDF** — Drive: `orthodox_liturgics/Pentecostarian/st-sergius-pdf/` | Full service texts for Pentecostarion dates |
| 5 | **General Menaion PDF** — Drive: `orthodox_liturgics/Menaion/general-menaion/` | Fallback when no daily PDF exists |

**OCA primacy rule:** When OCA troparion, kontakion, or commemoration date differs from
St. Sergius, the OCA text and date govern. Record both versions, flag the divergence.

---

## 2. DRIVE FOLDER PATHS (canonical)

| Record type | Drive folder |
|---|---|
| Menaion .txt records | `orthodox_liturgics/Menaion/st-sergius-pdf/` |
| Pentecostarion .txt records | `orthodox_liturgics/Pentecostarian/st-sergius-pdf/` |
| General Menaion fallback PDFs | `orthodox_liturgics/Menaion/general-menaion/` |

**Protocol:** Claude produces .txt records as chat artifacts. User places them in Drive.
Claude does not write directly to Drive. Every tool update requires a corresponding
Drive .txt record before the session closes — updating the tool without the .txt is
a protocol violation.

**File naming:**
- Menaion: `MM-DD.txt` / `MM-DD-v2.txt` (re-encode)
- Pentecostarion: `P+NN.txt` (e.g. `P+41.txt`)
- Re-encode header: `SUPERSEDES: MM-DD.txt — reason`
- Tool entry comment: `// vN — reason` on the line with the changed field

---

## 3. SESSION WORKFLOW

Every encoding session follows these steps in order:

1. **Read project notes** — confirm version badge matches `project_notes_vX.X.X.md`
2. **Read this rule** — encoding_rule_v2.md is the single point of truth
3. **For each date:** read the PDF → fill the skeleton → write the .txt artifact →
   update the tool → commit (no push until 3 dates complete)
4. **Before closing:** confirm every .txt artifact is produced; note any NOT YET ENCODED
   fields explicitly; bump version if session adds meaningful content
5. **Run the skeleton gate — MANDATORY before every push:**
   ```
   node scripts/check-skeleton.mjs all
   ```
   This must exit 0 (no gaps reported) before any push is made.
   If it exits 1, resolve all gaps first. A push with skeleton gaps is a protocol violation.
   The gate uses the same `FIELD_REGISTRY` as the browser audit — they are identical.
6. **Push** — one push per session after version bump and gate passes

---

## 4. KONTAKION ODE ROUTING

The HTM rubric governs which kontakion is chanted at each Hour when two exist:

> "If there be two kontakia, he saith the kontakion chanted after the 3rd Ode at
> Matins [at the 1st and 6th Hours]; and that chanted after the 6th Ode [at the
> 3rd and 9th Hours]."

Field names carry the ode number in both Menaion and Pentecostarion entries.
`hours_kontakion` is used only when a single kontakion governs all four Hours
with no ode distinction needed — exclusively for Pentecostarion entries.

| Case | .txt label | Tool field(s) | Hours governed |
|---|---|---|---|
| Single kontakion — Menaion | `KONTAKION_ODE6` / `KONTAKION_ODE3: ABSENT` | `kontakion_ode6` | all four Hours |
| Single kontakion — Pentecostarion | `HOURS_KONTAKION` | `hours_kontakion` | all four Hours |
| Two kontakia — any (§2B, major Sunday, Pentecostarion feast+secondary) | `KONTAKION_ODE6` + `KONTAKION_ODE3` | `kontakion_ode6` + `kontakion_ode3` | ode6→3rd&9th; ode3→1st&6th |

**Single-kontakion Menaion:** encode only `kontakion_ode6`. The assembler finds no
`kontakion_ode3` and uses `kontakion_ode6` at all four Hours.

**Two-kontakion Menaion or Pentecostarion:** encode both fields. The assembler routes:
`kontakion_ode3` → 1st & 6th Hours; `kontakion_ode6` → 3rd & 9th Hours.

**Single-kontakion Pentecostarion:** encode only `hours_kontakion`. This short-circuits
all ode routing — the same kontakion appears at all four Hours without distinction.
Use this only when there is genuinely one kontakion and no routing is needed.
Do NOT use `hours_kontakion` when two kontakia exist — the routing will not fire.

**§2G2 flag:** When a Menaion saint is §2E (Polyeleos) or §2F (Vigil) and falls during
a Pentecostarion feast, the Menaion `kontakion_ode6` should appear at the 3rd & 9th
Hours per §2G2. Flag this in the note field — the assembler does not yet implement it.

---

## 5. MENAION SKELETON — ALL RANKS

The skeleton below is filled out for every Menaion date. Fields marked `[RANK]`
are only required at the specified rank or higher. Fill every field. Write ABSENT,
NOT IN PDF, or NOT YET ENCODED — never leave blank.

```
═══════════════════════════════════════════════════════════
ENCODING RECORD — [MM-DD] (v[N])
[SUPERSEDES: MM-DD.txt — reason]  (omit on first encode)
Saint: [full name per OCA calendar]
Source PDF: [filename]
Encoded: [Month Year] | Tool version: v[X.X.X]
═══════════════════════════════════════════════════════════

=== CALENDAR ===
O.S. date: [MM-DD]
N.S. date: [Month Day]
OCA commemoration: [date N.S.] — [MATCHES / DIVERGES; explanation]
Encoded at: [MM-DD]

=== SERVICE RANK ===
Stichera count at Lord I Have Cried: [N]
Rank: [simple | six_stichera | doxology | polyeleos | vigil]
Rank evidence: [e.g. "3 stichera confirmed §2A"]
Fekula section: §[2A/2B/2C/2D/2E/2F]
has_great_doxology: [true / false]
has_polyeleos: [true / false]            ← [§2E+]
has_litya: [true / false]               ← [§2F]
has_paroemias: [true / false]           ← [§2E+]
magnificat_sung: [true / false]         ← [§2E+]
matins_format: [god_is_the_lord / alleluia]

=== OCA vs ST. SERGIUS ===
OCA_TROPARION_DIFFERS: [Yes / No]
OCA_KONTAKION_DIFFERS: [Yes / No]
[If Yes on either: record both OCA and St. Sergius versions below]

=== HOURS PROPERS ===
TROPARION: tone [X]
  [full text]

KONTAKION_ODE6 (Ode VI — governs 3rd & 9th Hours): tone [X]
  [full text]

KONTAKION_ODE3 (Ode III — governs 1st & 6th Hours):
  [ABSENT — single kontakion; kontakion_ode6 used at all four Hours]
  OR: tone [X]
  [full text]

=== VESPERS — LORD I HAVE CRIED ===
[N] stichera, Tone [X]. [Spec. Mel.: "..." if applicable]
[During Pentecostarion: N Pentecostarion + N Menaion if applicable — note the split]

[1] Tone [X]:
  [full sticheron text]

[2] Tone [X]:
  [full sticheron text]

[3] Tone [X]:
  [full sticheron text]

[4-6 if §2C+]:
  [full sticheron text]

STICHERA_GLORY: [ABSENT — §2A, no separate doxasticon]
  OR: Tone [X]:
  [full doxasticon text]

LIC_THEOTOKION (Both now): [ABSENT — Pentecostarion / Octoechos governs]
  OR: Tone [X]:
  [full theotokion text]

=== VESPERS — PROKEIMENON ===
[ABSENT — §2A/§2C weekday; Octoechos governs]
OR: Tone [X]
  Text: [main verse]
  Stichos: [supporting verse]
  Type: [weekday_ordinary / great_vespers / etc.]

=== VESPERS — OT PAROEMIAS ===             ← [§2E/§2F only]
PAROEMIA_1: [reference — e.g. Isaiah 43:9-14]
PAROEMIA_2: [reference]
PAROEMIA_3: [reference]
[ABSENT for §2A–§2D]

=== VESPERS — LITYA STICHERA ===           ← [when has_litya: true, any rank]
[ABSENT if has_litya: false]
OR (when has_litya: true but Menaion PDF prints no dedicated Litya stichera):
  litya_stichera: []   ← empty array; note in encoding record
OR (when Menaion PDF prints Litya stichera):
  NOTE: The first sticheron at the Litiya is always the Sticheron of the temple
  (parish dedication). This is NOT in the Menaion — it will be supplied by a
  future parish configuration setting. Encode only the Menaion stichera that follow.

  [1] Tone [X]: [sticheron text]
  [2] Tone [X]: [sticheron text]
  [3] Tone [X]: [sticheron text]
  (count varies by feast)
LITYA_GLORY: Tone [X]: [text]
LITYA_BOTH_NOW: Tone [X]: [text]

=== VESPERS — APOSTICHA ===
APOSTICHA_SOURCE: [Octoechos / Menaion / Pentecostarion]

[If Octoechos: ABSENT — §2A/§2C; Octoechos aposticha governs]
[If Menaion §2C+: record all stichera with verses]

[1] (no preceding verse): Tone [X]:
  [sticheron text]

[2] Verse: [psalm verse]  Tone [X]:
  [sticheron text]

[3] Verse: [psalm verse]  Tone [X]:
  [sticheron text]

APOSTICHA_GLORY: Tone [X]:
  [doxasticon text]
  [ABSENT if none]

APOSTICHA_THEOTOKION (Both now): Tone [X]:
  [theotokion text]
  [ABSENT if invariable Octoechos text governs]

=== MATINS — GOSPEL ===                    ← [§2E/§2F]
[ABSENT for §2A–§2D]
OR: [reference — e.g. Matthew 4:25–5:12 (§10)]

=== MATINS — APOSTICHA ===
NOTE: Not assembled by current tool (Matins assembler not yet built).
      Record here for future use; mark NOT YET ENCODED if not captured.

[ABSENT for §2A — Octoechos aposticha governs]
[NOT YET ENCODED — if §2C+ and not captured this session]
OR: [record same skeleton as Vespers Aposticha above]

=== TYPICA / LITURGY PROPERS ===
FEAST_EPISTLE: [reference]
  [ABSENT — §2A/§2C; cycle reading governs]

FEAST_GOSPEL: [reference]
  [ABSENT — §2A/§2C; cycle reading governs]

PROKEIMENON_TONE: [X]
  [ABSENT — §2A/§2C weekday]

PROKEIMENON_TEXT: [main verse]
PROKEIMENON_STICHOS: [supporting verse]

ALLELUIA_TONE: [X]
  [ABSENT — §2A/§2C weekday]

ALLELUIA_VERSE: [main verse]
ALLELUIA_STICHOS: [supporting verse]

COMMUNION_VERSE: [full text]

IT_IS_TRULY_MEET_SUPPRESSED: [true / false]
  [If true: record refrain + irmos of the zadostoinik]

TRISAGION_REPLACEMENT: [ABSENT / text]    ← [rare; Pentecost, Royal Hours, etc.]

=== BEATITUDES ===                         ← [§2E/§2F]
[ABSENT — §2A/§2C]
BEATITUDES_SOURCE: [e.g. "6 troparia from Ode III and VI of the forerunner's canon"]
[1]: [troparion text]
[2]: [troparion text]
...
[N]: [troparion text]

=== POST-COMMUNION ===
LITURGY_TYPE: [chrysostom / basil / presanctified]

=== NOTES ===
[Any OCA divergences, calendar collisions, rubrical anomalies, flagged items,
 future resolution tasks, or corrections from prior encodes. Never blank.]
```

---

## 6. PENTECOSTARION SKELETON — WEEKDAY AFTERFEAST

```
═══════════════════════════════════════════════════════════
ENCODING RECORD — PENTECOSTARION P+[NN]
Day: [Day Name — Feast / Period description]
In [year]: [Month Day] (Menaion saint: [name] — [rank])
Source PDF: [NN.pdf]
Encoded: [Month Year] | Tool version: v[X.X.X]
MENAION_SET_ASIDE: [true / false — and §2G rule that applies]
═══════════════════════════════════════════════════════════

=== STRUCTURAL NOTE ===
[Which evening / which morning does the PDF cover?
 Which Menaion saint falls on this day and what rank?
 What §2G rule applies (§2G1 Simple, §2G2 Doxology+)?]

=== HOURS FORMAT ===
hours_format: [pentecostarion_weekday / pentecostarion_sunday / apodosis_ascension / etc.]
Fekula section: §[4A / 4B / etc.]
Tone: [X]

=== STRUCTURAL FLAGS ===
menaion_set_aside: [true / false]
has_great_doxology: [true / false]
has_litya: [true / false]
has_paroemias: [true / false]
magnificat_sung: [true / false]
matins_format: [god_is_the_lord / alleluia]
it_is_truly_meet_suppressed: [true / false]
heavenly_king_omitted: [true / false]   ← Paschal period through eve of Pentecost

=== HOURS PROPERS ===
TROPARION: tone [X]
  [full text]

HOURS_KONTAKION (single kontakion — all four Hours): tone [X]
  [full text]
KONTAKION_3RD_ODE: ABSENT — single kontakion; same used at all four Hours.
  OR: tone [X] (see §2G2 flag note)

=== VESPERS — LORD I HAVE CRIED ([Day of week] Evening) ===
[N] stichera: [N Pentecostarion Tone X] + [N Menaion (Month Day = Saint)]
[ABSENT if Apodosis — feast stichera govern directly]
Spec. Mel.: ["..." if applicable]

Pentecostarion stichera ([N]), Tone [X]:
[1]: [full sticheron text]
[2]: [full sticheron text]
[3]: [full sticheron text]

Menaion stichera ([N]): from SAMPLE_MENAION["MM-DD"] — see MM-DD[vN].txt

STICHERA_GLORY: Tone [X]:
  [full doxasticon text]

LIC_THEOTOKION (Both now): [ABSENT — stichera_glory serves as Both now]
  OR: Tone [X]:
  [full theotokion text]

=== VESPERS — PROKEIMENON ([Day of week] Evening) ===
[ABSENT — if replaced by Alleluia (Saturday of Reposed)]
TONE: [X]
TEXT: [main verse]
STICHOS: [supporting verse]
TYPE: [weekday_ordinary / great_prokeimenon / saturday_great_vespers]

OR if Alleluia replaces Prokeimenon (Saturday of Reposed only):
VESPERS_ALLELUIA_REPLACES_PROKEIMENON: true
VESPERS_ALLELUIA_TONE: [X]
VESPERS_ALLELUIA_VERSES:
  [1]: [verse]
  [2]: [verse]

=== VESPERS — OT PAROEMIAS ===
[ABSENT for afterfeast weekdays]
OR: [3 references for feast/major Sundays]

=== VESPERS — APOSTICHA ([Day of week] Evening) ===
[stichera + verses — same format as Menaion aposticha skeleton]

[1] (no preceding verse): Tone [X]:
  [text]

[2] Verse: [psalm verse]  Tone [X]:
  [text]

[3] Verse: [psalm verse]  Tone [X]:
  [text]

APOSTICHA_GLORY: Tone [X]:
  [text]

APOSTICHA_THEOTOKION (Both now): [ABSENT / text]

=== MATINS — APOSTICHA ([Feast day] Morning) ===
NOTE: Not assembled by current tool. Record for future Matins assembler.

[1] (no preceding verse): Tone [X]:
  [text]

[2] Verse: [psalm verse]  Tone [X]:
  [text]

[3] Verse: [psalm verse]  Tone [X]:
  [text]

MATINS_APOSTICHA_GLORY: Tone [X]:
  [text]

=== MATINS — GOSPEL ===
[ABSENT for most weekday afterfeast days]
OR: [reference] ← Sundays and Polyeleos feast days

=== BEATITUDES ([Feast day] Liturgy) ===
BEATITUDES_SOURCE: [e.g. "6 verses from Ode VI of Ascension Canon (NN.pdf)"]
[1]: [troparion text]  ← Irmos if source specifies "including Irmos"
[2]: [troparion text]
[3]: [troparion text]
[4]: [troparion text]
[Glory]: [text]
[Both now]: [text]

=== LITURGY PROPERS ===
FEAST_EPISTLE: [reference]
FEAST_GOSPEL: [reference]
PROKEIMENON_TONE: [X]
PROKEIMENON_TEXT: [main verse]
PROKEIMENON_STICHOS: [supporting verse]
ALLELUIA_TONE: [X]
ALLELUIA_VERSE: [main verse]
ALLELUIA_STICHOS: [supporting verse]
IT_IS_TRULY_MEET: [sung / suppressed — if suppressed, record refrain + irmos]
COMMUNION_VERSE: [full text]

=== NOTES ===
[OCA divergences, §2G flags, assembler gaps, rubrical notes. Never blank.]
```

---

## 7. PENTECOSTARION SKELETON — SUNDAY

```
═══════════════════════════════════════════════════════════
ENCODING RECORD — PENTECOSTARION P+[NN] (Sunday)
[same header as weekday]
═══════════════════════════════════════════════════════════

[All weekday fields, PLUS:]

=== LITYA STICHERA ===
[ABSENT if has_litya: false]
OR (empty array if PDF prints no dedicated stichera):
  litya_stichera: []
OR (Menaion stichera — excluding temple sticheron):
  [1] Tone [X]: [sticheron text]
  [2] Tone [X]: [sticheron text]
  ...
LITYA_GLORY: Tone [X]: [text]
LITYA_BOTH_NOW: Tone [X]: [text]

=== MATINS — GOSPEL ===
Resurrectional Gospel #[N] (all Sundays have a Resurrectional Gospel)
OR: [feast-specific gospel reference]

=== VESPERS PROKEIMENON TYPE ===
TYPE: saturday_great_vespers
[Great Vespers has 3 stichos verses — record all three]
```

---

## 8. PENTECOSTARION SKELETON — SPECIAL DAYS

**Apodosis of a Feast** (e.g. P+47 Apodosis of Ascension):
```
[All flags as weekday]
STICHERA_LORD_I_CALL: ABSENT — feast stichera govern directly; assembler handles
VESPERS_PROKEIMENON: ABSENT — feast prokeimenon governs
BEATITUDES_SOURCE: [NN.pdf AT LITURGY rubric — e.g. "8 troparia from Ode IX of both canons"]
[beatitudes record as normal]
NOTE: "We chant everything as set forth on the Feast — except Readings and Antiphons."
```

**Saturday of the Reposed** (P+48, P+Saturday before Meatfare, etc.):
```
[All flags as weekday, PLUS:]
VESPERS_ALLELUIA_REPLACES_PROKEIMENON: true
VESPERS_ALLELUIA_TONE: [X]
VESPERS_ALLELUIA_VERSES: [1], [2]
REPOSED_EPISTLE: [reference]
REPOSED_GOSPEL: [reference]
[Stichera split: N of the martyrs + N for the reposed — note which are which]
```

---

## 9. TOOL SCHEMA MAPPING

After the .txt skeleton is complete, these fields map to the tool data objects:

### SAMPLE_MENAION["MM-DD"]

| .txt field | Tool key | Notes |
|---|---|---|
| SAINT | `saint` | |
| SOURCE FILE | `source_file` | |
| OCA PRIMARY | `oca_primary` | true/false |
| NOTE | `note` | All divergences, version history |
| RANK | `rank` | simple/six_stichera/doxology/polyeleos/vigil |
| HAS_GREAT_DOXOLOGY | `has_great_doxology` | |
| HAS_POLYELEOS | `has_polyeleos` | |
| HAS_LITYA | `has_litya` | |
| HAS_PAROEMIAS | `has_paroemias` | |
| MAGNIFICAT_SUNG | `magnificat_sung` | |
| MATINS_FORMAT | `matins_format` | god_is_the_lord / alleluia |
| TROPARION | `troparion.tone` + `.text` | |
| KONTAKION_ODE6 | `kontakion_ode6.tone` + `.text` | Primary kontakion — 3rd & 9th Hours |
| KONTAKION_ODE3 | `kontakion_ode3` | null if single kontakion — 1st & 6th Hours |
| STICHERA_LORD_I_CALL | `stichera_lord_i_call[]` | `{tone, text}` per sticheron |
| STICHERA_GLORY | `stichera_glory` | null if §2A |
| LIC_THEOTOKION | `lic_theotokion` | null if Pentecostarion governs |
| VESPERS_PROKEIMENON | `vespers_prokeimenon` | null if Octoechos governs |
| APOSTICHA_SOURCE | `aposticha_source` | "octoechos" / "menaion" |
| STICHERA_APOSTICHA | `stichera_aposticha[]` | `{tone, text, verse?}` |
| APOSTICHA_GLORY | `aposticha_glory` | |
| APOSTICHA_THEOTOKION | `aposticha_theotokion` | |
| PAROEMIA_1/2/3 | `paroemia_1/2/3` | §2E/§2F only; null for §2A–§2D |
| LITYA_STICHERA | `litya_stichera[]` | `{tone, text}` — when has_litya: true (any rank). Empty array if PDF has no dedicated stichera |
| LITYA_GLORY | `litya_glory` | `{tone, text}` — Glory sticheron at the Litiya |
| LITYA_BOTH_NOW | `litya_both_now` | `{tone, text}` — Both Now theotokion at the Litiya |
| MATINS_GOSPEL | `matins_gospel` | §2E/§2F only |
| FEAST_EPISTLE | `feast_e` | null if §2A/§2C |
| FEAST_GOSPEL | `feast_g` | null if §2A/§2C |
| PROKEIMENON_TONE/TEXT/STICHOS | `prokeimenon_tone` / `_text` / `_stichos` | |
| ALLELUIA_TONE/VERSE/STICHOS | `alleluia_tone` / `_verse` / `_stichos` | |
| COMMUNION_VERSE | `communion_verse` | |
| BEATITUDES_SOURCE | `beatitudes_source` | |
| BEATITUDES_TROPARIA | `beatitudes_troparia[]` | §2E/§2F only |
| IT_IS_TRULY_MEET_SUPPRESSED | `it_is_truly_meet_suppressed` | |
| ZADOSTOINIK refrain/irmos | `instead_of_it_is_truly_meet_refrain/irmos` | |

### PENTECOSTARION[offset] — same as above, plus:

| .txt field | Tool key | Notes |
|---|---|---|
| HOURS_FORMAT | `hours_format` | |
| MENAION_SET_ASIDE | `menaion_set_aside` | |
| IT_IS_TRULY_MEET_SUPPRESSED | `it_is_truly_meet_suppressed` | |
| HEAVENLY_KING_OMITTED | `heavenly_king_omitted` | |
| HOURS_KONTAKION | `hours_kontakion.tone` + `.text` | Single-kontakion entries only |
| KONTAKION_ODE6 | `kontakion_ode6.tone` + `.text` | Two-kontakion entries: 3rd & 9th Hours |
| KONTAKION_ODE3 | `kontakion_ode3.tone` + `.text` | Two-kontakion entries: 1st & 6th Hours |
| STICHERA_MATINS_APOSTICHA | `stichera_matins_aposticha[]` | |
| MATINS_APOSTICHA_GLORY | `stichera_matins_aposticha_glory` | |
| VESPERS_ALLELUIA_REPLACES_PROKEIMENON | `vespers_alleluia_replaces_prokeimenon` | Saturday of Reposed only |
| VESPERS_ALLELUIA | `vespers_alleluia` | |
| REPOSED_EPISTLE/GOSPEL | `reposed_e` / `reposed_g` | |

---

## 10. COMMON MISTAKES TO AVOID

1. **Blank ≠ Absent** — ABSENT is deliberate; blank is an error. Always write one.

2. **Aposticha direction** — Vespers aposticha: sticheron first, then its verse.
   Lord I Call stichera: verse first, then sticheron. Opposite directions.

3. **§2A aposticha** — come from Octoechos, not the Menaion. Write
   `APOSTICHA_SOURCE: Octoechos` and move on. Do not encode them.

4. **feast_e / feast_g for §2A** — always `null`, never the string `"absent"`.
   The assembler checks for null; the string bypasses that check silently.

5. **Kontakion field names carry the ode number** — `kontakion_ode6` governs 3rd & 9th
   Hours; `kontakion_ode3` governs 1st & 6th Hours. These names apply to both Menaion
   and Pentecostarion two-kontakion entries. `hours_kontakion` is for single-kontakion
   Pentecostarion entries only — it short-circuits all routing. Never put two different
   kontakia into `hours_kontakion`; the assembler will not distinguish them by Hour.

6. **OCA check** — always verify oca.org before writing troparion/kontakion.
   Do not assume St. Sergius matches OCA. Record both if they differ.

7. **Rank evidence** — always state what you counted. "3 stichera — §2A confirmed."
   Never assume rank from the saint's category; count stichera in the PDF.

8. **Pentecostarion PDF boundaries** — each PDF covers an evening (previous day's
   Vespers) plus the following Matins and Liturgy. Always note which day's Vespers
   is in which PDF — the mapping is not always obvious.

9. **§2G2 oversight** — when a Menaion saint is §2E or §2F during a feast period,
   flag it. The Menaion kontakion should appear at 3rd & 9th Hours but the
   assembler does not yet implement this. Flag always; do not silently omit.

10. **NOT YET ENCODED vs ABSENT** — matins aposticha for afterfeast weekdays exist
    in the PDFs but the Matins assembler is not yet built. Write NOT YET ENCODED
    with a source reference, not ABSENT. ABSENT means it genuinely does not exist.

---

## 11. PRE-SAVE CHECKLIST

Before saving any .txt artifact, confirm every section heading is present and
every field under it has an explicit value (not blank):

**Menaion §2A:**
- [ ] Calendar section complete
- [ ] Service rank — all flags present
- [ ] OCA vs St. Sergius check documented
- [ ] Troparion + kontakion_ode6 (+ KONTAKION_ODE3: ABSENT if single)
- [ ] LIC stichera ×3 with tones
- [ ] STICHERA_GLORY: null or text
- [ ] LIC_THEOTOKION: null or text
- [ ] VESPERS_PROKEIMENON: ABSENT (§2A) or text
- [ ] VESPERS_PAROEMIAS: ABSENT (§2A)
- [ ] VESPERS_APOSTICHA: APOSTICHA_SOURCE: Octoechos (§2A)
- [ ] MATINS_APOSTICHA: ABSENT (§2A, Octoechos governs)
- [ ] FEAST_EPISTLE: null | FEAST_GOSPEL: null
- [ ] COMMUNION_VERSE
- [ ] NOTES (never blank)

**Add for §2E (Polyeleos):** all 3 paroemias, litya flag, matins gospel, beatitudes,
prokeimenon, alleluia, matins aposticha (or NOT YET ENCODED with source ref).
If has_litya: true AND Menaion prints Litya stichera → encode litya_stichera[],
litya_glory, litya_both_now. If has_litya: true but no dedicated stichera in
PDF → litya_stichera: [] (empty array) with note.

**Add for §2F (Vigil):** all §2E fields + litya stichera (always present in PDF
for Vigil rank). Encode litya_stichera[], litya_glory, litya_both_now.

**Pentecostarion weekday afterfeast:**
- [ ] Structural note and PDF boundary documented
- [ ] All flags present (menaion_set_aside through heavenly_king_omitted)
- [ ] Troparion + hours_kontakion (single) OR kontakion_ode6 + kontakion_ode3 (two kontakia) + ABSENT notes
- [ ] LIC stichera (or ABSENT with reason for Apodosis)
- [ ] Stichera Glory + LIC theotokion
- [ ] Vespers prokeimenon (or Alleluia-replaces noted)
- [ ] Vespers aposticha ×3 + glory
- [ ] Matins aposticha ×3 + glory (or NOT YET ENCODED with source ref)
- [ ] Beatitudes source + troparia ×6
- [ ] All liturgy propers
- [ ] NOTES

---

*This document is the single encoding authority for the Orthodox Hours Tool.
It supersedes all prior encoding rule documents and addenda.
Project notes (project_notes_vX.X.X.md) govern session workflow and backlog;
this document governs what is captured and how.*
