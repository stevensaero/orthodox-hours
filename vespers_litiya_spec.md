# Vespers Litiya Assembler — Implementation Specification

## Overview

Amend `assembleVespers()` in `src/components/hours-tool.jsx` to insert the Litiya between the head-bowing sequence and the Aposticha when `has_litya: true`. Also implement the Vigil troparion repetition formula and Blessing of the Loaves at the end of Vespers.

## Source Material

All source material is on Google Drive:

- **OCA Litiya prayer text**: `vespers/oca/OCA_prayer_for_litiya.txt` — the authoritative fixed text for the petitions, concluding prayer, and blessing of loaves. OCA diptych (not ROCOR/HTM).
- **HTM Vespers markdown**: `vespers/htm/htm_vespers.md` — structural rules for Vigil opening, Litiya placement, troparion formula, Psalm 33.
- **June 24 PDF** (St. Sergius `06-24.pdf`): test case with full Litiya stichera. Already encoded in `src/data/menaion/june.js`.
- **May 25 PDF** (St. Sergius `05-25.pdf`): test case with empty Litiya stichera (Polyeleos, no dedicated stichera in Menaion). Already encoded in `src/data/menaion/may.js`.

## Test Cases

### June 24 — Nativity of the Baptist (great_feast, §2F)
- `has_litya: true`
- `litya_stichera`: 3 stichera, Tone 1
- `litya_glory`: Tone 5 (Andrew of Crete — "Today Elizabeth giveth birth...")
- `litya_both_now`: Tone 5 (Theotokion — "Thou art the temple and portal...")
- Full Aposticha encoded (3 stichera T2 with verses + Glory T8 + Both Now T8)
- Troparion formula per PDF: troparion ×2, then "O Theotokos and Virgin, rejoice!" ×1
- Blessing of the Loaves present per PDF

### May 25 — Third Finding of the Head (polyeleos, §2E)
- `has_litya: true`
- `litya_stichera: []` (empty array)
- `litya_glory: null`, `litya_both_now: null`
- Full Aposticha encoded
- No Vigil troparion formula (§2E, not §2F)
- No Blessing of the Loaves

## Implementation Plan

### Part 1 — Fixed Text Constants

Encode as constants near the existing litany text blocks in `hours-tool.jsx`. Source: `OCA_prayer_for_litiya.txt` from Drive.

#### 1a. OCA Litiya Petitions (`LITIYA_PETITIONS`)

Five-petition structure. Each petition is a deacon/priest part + choir response:

1. **First petition** (deacon): "O God, save Thy people and bless Thine inheritance..." through the saint diptych. Ends with "...And all of the Saints, Hear us sinners who pray unto Thee, and have mercy on us!"
   - **Choir**: Lord, have mercy. (40 times)
   - **Note**: Contains a `Saint(s) ___` placeholder — the assembler should insert `menaionEntry.saint` here.

2. **Second petition** (deacon): "Again we pray for... Metropolitan ___, ... Bishop ___..." — for the brotherhood, the sick, the departed, etc.
   - **Choir**: Lord, have mercy. (50 times)

3. **Third petition** (deacon): "Again we pray for the President of our country..."
   - **Choir**: Lord, have mercy. (30 times)

4. **Fourth petition** (deacon): "Again we pray that He will keep this city... from wrath, famine, pestilence..."
   - **Choir**: Lord, have mercy. (3 times)

5. **Fifth petition** (deacon): "Again we pray that the Lord God will hearken..."
   - **Choir**: Lord, have mercy. (3 times)

#### 1b. Concluding Prayer (`LITIYA_CONCLUDING_PRAYER`)

Priest: "Hear us, O God our Savior, the hope of all the ends of the earth..."

#### 1c. Peace and Head-Bowing (`LITIYA_PEACE_HEAD_BOWING`)

- Priest: "Peace be to all." / Choir: "And to thy spirit."
- Deacon: "Let us bow our heads unto the Lord." / Choir: "To thee, O Lord."
- Priest: "O Master, great in mercy, Lord Jesus Christ our God, through the intercessions of our all-immaculate Lady the Theotokos..."

#### 1d. "O Theotokos and Virgin, rejoice!" (`THEOTOKOS_VIRGIN_REJOICE`)

Full text needed for the Vigil troparion repetition formula:

> O Theotokos and Virgin, rejoice! Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb; for thou hast borne the Savior of our souls.

Source: HTM Vespers / standard text.

#### 1e. Blessing of the Loaves (`LITIYA_BLESSING_LOAVES`)

- Deacon: "Let us pray to the Lord." / Choir: "Lord, have mercy."
- Priest: "O Lord Jesus Christ our God, who didst bless the five breads in the wilderness..."
- Choir: "Amen."

#### 1f. Post-Blessing Sequence

- "Blessed be the name of the Lord, from henceforth and forevermore." (×3)
- Psalm 33 (first 10 verses only): "I will bless the Lord at all times..." through "...but they that seek the Lord shall not want any good thing."
- Priest: "The blessing of the Lord be upon you, through His grace and love for mankind, always, now and ever, and unto the ages of ages."

### Part 2 — Assembler Branching Logic

#### 2a. Litiya Insertion Point

Currently the flow is:
```
§14 Head-bowing → §15 Aposticha → §16 Nunc Dimittis → ...
```

With Litiya, the flow becomes:
```
§14 Head-bowing → [LITIYA] → §15 Aposticha → §16 Nunc Dimittis → ...
```

Insert between the existing head-bowing sequence (elements `v-peace` through `v-bow-exc`) and the Aposticha section (comment "15. APOSTICHA").

Condition: `menaionEntry && menaionEntry.has_litya === true`

#### 2b. Litiya Elements (in order)

1. **Section header** — rubric: "The clergy process to the narthex for the Litiya."

2. **Temple sticheron placeholder** — type: `unresolved`, note: "The first sticheron at the Litiya is always the Sticheron of the temple (parish dedication). This will be supplied by a future parish configuration setting."

3. **Litiya stichera** — if `litya_stichera.length > 0`, iterate and push TextBlock elements. If empty array, push informational note: "The Menaion does not appoint separate Litiya stichera for this feast. The Litiya petitions are served with the temple sticheron alone."

4. **Glory** — if `litya_glory` is not null, push as movable element with tone/text. Otherwise skip (no Glory if no dedicated stichera).

5. **Both Now** — if `litya_both_now` is not null, push as movable element with tone/text. Otherwise skip.

6. **Litiya Petitions** — fixed text from `LITIYA_PETITIONS`. The saint placeholder `Saint(s) ___` should be replaced with `menaionEntry.saint` at runtime. In reader mode (Fekula Ch. 10), replace entire petition block with Lord, have mercy (40 times) + Lord, have mercy (50 times) + Lord, have mercy (30 times) + Lord, have mercy (3 times) + Lord, have mercy (3 times) — or simplify to a single reader substitution element.

7. **Concluding prayer** — `LITIYA_CONCLUDING_PRAYER`, fixed.

8. **Peace / Head-bowing** — `LITIYA_PEACE_HEAD_BOWING`, fixed. (Note: this is a SECOND peace/head-bowing at the Litiya, separate from the one already in the Vespers flow at §14. The §14 sequence should remain — the Litiya adds its own.)

#### 2c. Vigil Troparion Formula

After Trisagion/Our Father (§17–§18), replace the current single-troparion insertion with a rank-aware formula.

Current logic (all ranks):
```
troparion → Glory → second troparion (if any) → Both Now → kontakion/theotokion
```

New logic when `rank === "vigil" || rank === "great_feast"` AND `has_litya`:

**Non-Sunday, non-Great-Feast-of-the-Lord:**
```
Saint's troparion → (×2) → "O Theotokos and Virgin, rejoice!" → (×1)
→ Blessing of Loaves
```

**Sunday:**
```
"O Theotokos and Virgin, rejoice!" → (×2) → Saint's troparion → (×1)
→ Blessing of Loaves
```

**Twelve Great Feasts (Great Feast of the Lord):**
```
Troparion of the feast → (×3) → Blessing of Loaves
```

The June 24 PDF confirms: "After the blessing of the loaves, the Troparion of the holy forerunner, in Tone IV: ... (Twice) And 'Virgin Theotokos, rejoice...' (Once)"

#### 2d. Blessing of Loaves Sequence

After the Vigil troparion formula:
1. `LITIYA_BLESSING_LOAVES` (deacon prompt + priest prayer + Amen)
2. "Blessed be the name of the Lord..." (×3)
3. Psalm 33, first 10 verses
4. Priest: "The blessing of the Lord be upon you..."
5. Note: "And the reader beginneth Matins with the Six Psalms" (informational only — Matins not yet assembled)

#### 2e. Dismissal Changes at Vigil

At Vigil with Litiya, the standard dismissal sequence (Wisdom / Father bless / He that is... / Establish O God / Most Holy Theotokos / More Honourable / Glory to Thee / Glory... Lord have mercy ×3 / Full dismissal) is **not** used. Instead, the service transitions directly from the Blessing of Loaves into Matins. The end marker should reflect this:

- If `has_litya` and (`rank === "vigil"` or `rank === "great_feast"`): replace the dismissal with an informational note: "At an All-Night Vigil, the service continues directly into Matins. The dismissal is given at the end of the First Hour."
- Otherwise: keep the existing dismissal.

### Part 3 — Reader Mode (Fekula Chapter 10)

For reader mode (`readerMode === true`):

- **Litiya petitions**: Replace entire petition block with a single reader substitution: "Lord, have mercy. (forty times) / Lord, have mercy. (fifty times) / Lord, have mercy. (thirty times) / Lord, have mercy. (thrice) / Lord, have mercy. (thrice)" — or use the existing `CH10_LHM_40` pattern with appropriate counts.
- **Concluding prayer**: Omit (priest's prayer) — use readerOmit stub.
- **Peace/head-bowing at Litiya**: Omit — use readerOmit stub.
- **Blessing of Loaves**: Omit entirely (priestly function) — use readerOmit stub with note.
- **Vigil troparion formula**: The troparion repetition (×2/×1) still applies in reader mode. "O Theotokos and Virgin, rejoice!" is read by the reader.

### Part 4 — Element IDs

Use the prefix `v-litiya-` for all Litiya elements:
- `v-litiya-rubric` — processional rubric
- `v-litiya-temple` — temple sticheron placeholder
- `v-litiya-stich-N` — Litiya stichera
- `v-litiya-glory` — Glory doxasticon
- `v-litiya-bothnow` — Both Now theotokion
- `v-litiya-petitions` — full petition block
- `v-litiya-prayer` — concluding prayer
- `v-litiya-peace` — peace/head-bowing
- `v-litiya-blessing` — blessing of loaves prayer
- `v-litiya-blessed-name` — "Blessed be the name..."
- `v-litiya-ps33` — Psalm 33 (first 10 verses)
- `v-litiya-priestly-blessing` — final blessing

### Validation

After implementation, verify:
1. **June 24**: All 3 Litiya stichera render with tones, Glory T5 and Both Now T5 display, petitions show with saint name inserted, Vigil troparion formula (×2 + O Theotokos ×1) renders, Blessing of Loaves appears, no standard dismissal.
2. **May 25**: Empty stichera message shows, petitions still appear (fixed text), standard troparion (not Vigil formula — §2E, not §2F), no Blessing of Loaves, standard dismissal retained.
3. **Reader mode** for both dates: petitions replaced with LHM counts, priestly parts omitted with stubs.
4. **Ordinary dates** (e.g. May 16, simple rank): no Litiya section appears, flow unchanged.
5. **Fekula badges**: all Litiya elements cite the correct section (§2F for June 24, §2E for May 25).
