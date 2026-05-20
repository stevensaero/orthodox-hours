# Orthodox Hours Tool — Release Notes
## v0.2.4 → v0.2.5
*May 2026*

---

## Summary

This release focuses on **rubrical accuracy**, **reader experience**, and **transparency**. The closing sequence of every Hour has been corrected directly against the HTM source. The tool now opens to the 1st Hour. The "How This Tool Works" panel has been completely rebuilt as an educational resource. And the Pentecostarion encoding is now complete through All Saints Sunday.

---

## What Changed

### 1. HTM Closing Sequence — Fully Corrected

The ending of every Hour was rebuilt by reading the actual HTM Horologion PDF for each Hour. The previous version had two problems: the long closing prayer appeared in the wrong position, and a dismissal text was inserted that does not exist in the HTM.

**Correct sequence per HTM (3rd, 6th, and 9th Hours):**

1. *More Honourable than the Cherubim...*
2. *In the name of the Lord, father (master), bless.* — reader cues priest
3. **Priest:** short blessing *(grey italic — not the reader's part)*
4. *Reader: Amen.*
5. Long closing prayer *(said by the reader)*
6. **THE END OF THE Nth HOUR**

**Priest's short blessing — correct text per Hour:**

| Hour | Priest says |
|---|---|
| 1st Hour | *God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.* |
| 3rd Hour | *Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.* |
| 6th Hour | *Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.* |
| 9th Hour | *God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.* |

**1st Hour special close (rebuilt in full):**

The 1st Hour has a richer ending than the other Hours. After the closing prayer — which is said by the **Priest** at the holy doors, not by the reader — the sequence continues:

- *To thee, the Champion Leader...* — chanters
- **Priest:** *Glory to Thee, O Christ God, our hope, glory to Thee.*
- *Glory to the Father... Lord, have mercy. (thrice) Father (Master), bless.* — chanters
- **Priest:** *May Christ our true God, through the intercessions of His most pure Mother...* — full dismissal
- *Amen. Lord, have mercy. (thrice)*

**What was removed:** A fabricated dismissal (*"May He Who rose from the dead..."*) had been incorrectly appended inside the 9th Hour body. This text does not appear in the HTM at the end of any individual Hour — it belongs to the Inter-Hour or post-Vespers dismissal. It has been removed.

---

### 2. End-of-Hour Markers

Each Hour now ends with a centered, bold, gold-ruled stop point:

> **THE END OF THE NINTH HOUR**

This matches the HTM exactly and gives the reader an unambiguous confirmed stopping point — particularly useful when reading the Hours consecutively.

---

### 3. Default Service Changed to 1st Hour

The tool previously opened to the 9th Hour — a carry-over from early beta testing when the 9th Hour was the only encoded service. The tool now opens to the **1st Hour**, which is the natural beginning of the Daily Hours service. The canonical order (1st → 3rd → 6th → 9th) is now consistent throughout the tool and documentation.

---

### 4. "How This Tool Works" — Rebuilt as Five-Section Accordion

The previous "How This Tool Works" dropdown was a flat block of three paragraphs. It has been completely rebuilt as a `HowItWorksPanel` component with five independent accordion sections — each collapses to a single line and expands on click.

**The five panels:**

**① The Calendar Engine**
The existing content about the Pascha algorithm, tone cycle, 35 named movable days, and the lectionary (including the Lukan Jump) — preserved and reorganized.

**② Source Hierarchy**
Explains the four source authorities in priority order: Fekula & Williams → OCA calendar → St. Sergius Menaion → HTM Horologion. Explains what each source contributes and how conflicts are resolved.

**③ Anatomy of a Service**
Includes an **interactive annotated specimen** of the 9th Hour — every row is colour-coded:
- 🔵 **Fixed** — same every day, from the HTM
- 🟡 **Movable** — changes daily, from the Menaion or Pentecostarion
- 🔴 **Unresolved** — not yet encoded

Only two rows of the entire Hour change from day to day. This is the clearest demonstration of what the tool actually does.

**④ How a Date Gets Encoded**
The four-step encoding workflow (read PDF → cross-reference OCA → record → enter into tool), plus a **complete 28-field inventory table** showing every field that is encoded for each date:

| Field | Used now | Future use |
|---|---|---|
| troparion (tone, text) | ✓ All four Hours | — |
| kontakion + matins_ode | ✓ 3rd & 9th Hours | — |
| kontakion_3rd_ode | ✓ 1st & 6th Hours | — |
| prokeimenon (tone, text, stichos) | — | Liturgy |
| alleluia (tone, verse, stichos) | — | Liturgy |
| communion_verse | — | Liturgy |
| paroemia_1/2/3 | — | Vespers |
| magnificat_sung | — | Matins |
| matins_gospel | — | Matins |
| zadostoinik_irmos | — | Matins/Liturgy |
| trisagion_replacement | — | Liturgy |
| ... and 17 more | | |

The closing note makes the key point: *"the tool stores the full data needed to assemble Vespers, Matins, and Liturgy for every encoded date. The Hours are the first surface — the underlying record is already built for the full daily cycle."*

**⑤ Known Limitations & How to Give Feedback**
Honest disclosures about unresolved dates, translation divergences, the two-kontakia rule, and lectionary gaps. A specific feedback checklist tells readers exactly what to look for and report.

---

### 5. Companion Document: `how-the-tool-works.md`

A standalone plain-language explainer for readers and laity. Suitable for publishing alongside the tool on the GitHub Pages site or distributing separately. Covers:

- What the tool does and who it is for
- Source hierarchy with full explanation of each source
- Anatomy of a service (fixed vs. movable)
- Encoding workflow with the June 8 annotated example
- Pentecostarion period structural changes (table)
- Known limitations and honest disclosures
- How to give feedback
- Glossary of all liturgical terms used

---

### 6. Pentecostarion Encoding Complete: P+35 through P+56

All 22 Pentecostarion entries from the 5th Sunday of Pascha through All Saints Sunday are now encoded. Every entry has been read from the St. Sergius PDF source.

| Offsets | Name | Format |
|---|---|---|
| P+41 | Saturday 6th Week — Ascension Afterfeast Day 2 | pentecostarion_weekday |
| P+42 | 7th Sunday — Holy Fathers 1st Ecumenical Council | pentecostarion_sunday |
| P+43–P+46 | Mon–Thu 7th Week — Ascension Afterfeast Days 4–7 | pentecostarion_weekday |
| P+47 | Friday 7th Week — **Apodosis of Ascension** | apodosis_ascension |
| P+48 | Saturday 7th Week — **Saturday of the Reposed** | pentecostarion_saturday_reposed |
| P+49 | **Holy Pentecost** | pentecost |
| P+50 | Monday — **Holy Spirit Day** | holy_spirit_day |
| P+51–P+54 | Tue–Fri 8th Week — Pentecost Afterfeast | pentecostarion_weekday |
| P+55 | Saturday 8th Week — **Apodosis of Pentecost** | apodosis_pentecost |
| P+56 | **All Saints Sunday** | all_saints_sunday |

Notable structural details encoded:
- **P+48 (Saturday of Reposed):** Two epistles + two gospels at Liturgy; troparion/kontakion entirely for the departed; unique prokeimenon/alleluia/communion
- **P+49 (Pentecost):** Trisagion replaced by *"As many as have been baptized..."*; O Heavenly King restored; zadostoinik irmos replaces *It is truly meet*; three OT paroemias
- **P+50 (Holy Spirit Day):** Distinct prokeimenon and alleluia from the rest of Pentecost week; Great Doxology at Matins
- **P+56 (All Saints Sunday):** Two troparia (Resurrection Tone 8 + All Saints Tone 4); two prokeimena; two alleluias; three OT paroemias; Resurrection Gospel #1

Drive `.txt` encoding records saved for all entries.

---

## What Remains

- Pentecostarion P+0 through P+34 (Pascha through 4th Sunday) — encoding in progress
- Menaion months beyond June — encoding in progress
- P+63 (All Saints of North America) — OCA-specific, planned
- Vespers, Matins, and Liturgy assembly — full data already encoded, awaiting assembly logic

---

*Tool version: v0.2.5 · Project notes: v0.3.14 · May 2026*
