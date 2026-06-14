# Sunday Vespers — Unified Engine Spec

**Status:** DRAFT for review (spec-before-code). No implementation until approved.
**Author target:** ordinary Octoechos Sundays of the post-Pentecost period, with the
overlay / Pentecostarion Sundays migrated onto the same engine.
**Authoritative target:** the OCA Department of Liturgical Music & Translations service
docs in Drive `OCA_service_documents/YYYY-MMDD-texts-tt.{docx,json}`. Each assembled
Sunday MUST match its doc. Fekula & Williams supplies the rubric; the OCA doc supplies the
exact texts, counts, and tone assignments and is decisive where the two could be read
differently.

---

## 1. Why this exists (problem statement)

"Sunday" is currently implemented twice and the copies have diverged:

1. **Overlay / Pentecostarion Sundays** (`all_saints_sunday`, `pentecostarion_sunday`)
   run through the `isPentecostarion` branch of `assembleVespers`. This path *does* build
   a resurrectional skeleton.
2. **Ordinary Octoechos Sundays** (post-Pentecost, e.g. June 21 / 28, July 5) have **no
   Sunday driver at all**. They fall through to the rank-based *weekday* branches keyed on
   the Menaion saint's rank:
   - simple saint → `§2A` branch: 3 Octoechos LIC stichera + 3 Menaion (a *weekday*
     6-count, not the Sunday 10), but the "Both now" dogmatikon does come out right;
   - six-stichera+ saint → `§2C` branch: **all Menaion** stichera (the resurrection is
     dropped entirely) and `octoDay` is gated null, so the "Both now" falls to the
     weekday theotokion instead of the dogmatikon.

   Concrete break: **June 28, 2026** (4th Sunday after Pentecost, Tone 3, Cyrus & John —
   a §2C six-stichera saint) renders as a weekday six-stichera service.

This spec replaces both with one engine so the rule lives in exactly one place. This is the
"prevent drift" requirement: the same liturgical structure must not be expressed twice.

Relationship to the v0.15.30 fix: that fix special-cased `all_saints_sunday → dogmatikon`
at the LIC "Both now." Under this engine, "LIC Both now = tone-of-week Dogmatikon" is the
**default for every resurrectional Sunday**, and All Saints of NA is simply one instance.
v0.15.30 is *subsumed and generalized, not undone* — June 14's output stays byte-identical.

---

## 2. When the engine fires (detection)

The Sunday Vespers engine assembles a Vespers when **all** of:

- the service opens a Sunday (served Saturday evening; `dow === 6` under FW-26 / opened day
  is Sunday); and
- the day is governed by the **resurrectional Octoechos** (tone of the week), i.e. NOT a
  Great Feast of the Lord/Theotokos that *replaces* the resurrection (those keep their own
  assembler — see §8 open questions).

This single gate covers three commemoration sources, distinguished only by where the
non-resurrection propers come from:

| Commemoration source        | Examples                                  | `commemoration` =        |
|-----------------------------|-------------------------------------------|--------------------------|
| Menaion saint (ordinary)    | Jun 21 Julian, Jun 28 Cyrus & John        | Menaion entry            |
| Overlay                     | Jun 14 All Saints of NA / Russia (P+63)   | Pentecostarion overlay   |
| Pentecostarion Sunday       | Thomas … All Saints (P+7 … P+56)          | Pentecostarion entry     |

The engine is parameterized by `(toneOfWeek, commemoration, commemorationRank)`. Everything
resurrectional comes from the Octoechos at `toneOfWeek`; everything else comes from
`commemoration`.

---

## 3. "Lord I Call" (LIC) — stichera

Always **10 stichera**, split resurrection / commemoration by the commemoration's rank.
Verified against the OCA docs:

| Commemoration rank          | Resurrection (Octoechos) | Commemoration | Source dates           |
|-----------------------------|--------------------------|---------------|------------------------|
| Simple (§2A, 3 stichera)    | 7                        | 3             | Jun 21 (Julian) 7+3    |
| Six-stichera (§2C/§2B)      | 6                        | 4             | Jun 28 (C&J) 6+4       |
| Doxology (§2D)              | 6                        | 4             | Jul 8 2018 (Procopius, T5) 6+4 ✓ |
| Polyeleos / Vigil (§2E/§2F) | 4                        | 6             | Oct 9 2022 (Tikhon) / Oct 6 2019 (Innocent) / Nov 30 (Andrew) 4+6 ✓ |
| Overlay / great commem.     | per the overlay entry    | remainder     | Jun 14 (All Saints NA) |

Confirmed splits: simple 7+3 (Jun 21), six-stichera 6+4 (Jun 28), doxology 6+4 (Jul 8 2018,
Procopius, Tone 5), polyeleos 4+6 (Oct 9 2022, Tikhon; Oct 6 2019, Innocent), vigil 4+6
(Nov 30, Andrew). Polyeleos and vigil are now both **directly** confirmed at 4+6 from
single-commemoration docs; the earlier "polyeleos shares the vigil row by inference" language
is retired. The tell separating 6+4 from 4+6 in the OCA docs is the presence of a **Litya**
section: Litya present → polyeleos/vigil (4+6); Litya absent → simple/six-stichera/doxology.
Procopius (doxology) has no Litya and splits 6+4, which is what isolates doxology from the
4+6 ranks.

Rules:

- The **resurrection** stichera are the tone's Octoechos LIC set (3 "resurrection" + the
  "by Anatolius" group). Take the **first N** of the tone's resurrection sequence in source
  order (N = 7 or 6 or 4 per table). The Octoechos `sat.lic` array is that sequence.
- The **commemoration** stichera are the saint's `stichera_lord_i_call` from the Menaion
  (or the overlay/Pentecostarion entry). The Menaion provides M unique texts; fill the
  remaining slots by **repeating in source order** to reach the count (June 28: 3 unique →
  4 slots, first doubled). This is the existing `expandSticheraToCount` behavior; reuse it.
- **Glory** = the commemoration's `stichera_glory` (doxasticon), in its own tone (Jun 28:
  Tone 8). If the commemoration has **no** Glory (§8.2, RESOLVED Nov 9 2025): no resurrectional
  Glory is substituted — "Glory… now and ever" are sung together and resolve straight to the
  tone-of-week Dogmatikon (the Both-now below).
- **Both now** = the **Dogmatikon in the tone of the week** (`getOctoechosVespers(tone,
  'sat').dogmatikon`). Always, regardless of commemoration rank. Confirmed Jun 21 → Tone 2,
  Jun 28 → Tone 3, Jun 14 → Tone 1. This is the generalization of the v0.15.30 fix.

Kekragarion opening (Ps 140:1-2) stays as today: tone-of-week `lic_opening` (director
pointed where encoded), unchanged by this spec.

### 3.1 Multi-commemoration Sundays (more complex — later phase)

A Sunday can carry **more than one** non-resurrection commemoration. The base engine (§2)
assumes a single `commemoration`; this case generalizes it to an ordered *list* of
commemorations sharing the non-resurrection slots. Confirmed by **Oct 26, 2025** (Tone 3):
resurrection + the Great Earthquake (a "of the Lord/Theotokos" commemoration) + Greatmartyr
Demetrius (polyeleos). Observed behavior:

- **LIC** = 3 Resurrection + 3 Earthquake + 4 Demetrius = 10 (the saint takes the larger
  share; the secondary commemoration takes the middle slots). LIC "Both now" is still the
  **Tone 3 Dogmatikon**.
- **Aposticha** = Resurrection (4) + **Glory of Demetrius** (Tone 8) + **Both now = Theotokion
  in the tone of that Glory** (Tone 8). The Earthquake does **not** appear in the aposticha —
  only the primary saint does. So §4 is unchanged for the *primary* commemoration.
- **Troparia** = Resurrection / Glory of Demetrius (Tone 3) / **Now and ever = the Earthquake
  troparion** (Tone 8). The secondary "of the Lord/Theotokos" commemoration's troparion takes
  the Now-and-ever slot, **displacing the resurrectional dismissal theotokion** (contrast the
  single-saint rule in §5).
- Liturgy readings/troparia/kontakia are tripled (Resurrection + Earthquake + saint),
  combined per the doc's rubric ("read as one").

**Two minor commemorations (3+3 share).** Two minor saints can instead share the
non-resurrection slots evenly: 4 Resurrection + 3 + 3 = 10. Confirmed by **Nov 3, 2019**
(Tone 3, Martyr Akepsimas et al. + the dedication of the church of St. George — LIC Glory to
the *senior* commemoration, George) and **Nov 9, 2025** (Tone 5, Martyrs Onesiphorus &
Porphyrius + St. Matrona — *no* commemoration Glory; "Glory… now and ever" sung together,
resolving straight to the tone-of-week Dogmatikon; see §8.2). So when two minor commemorations
co-occur, the saint slots split 3+3 and the LIC Glory attaches to the senior commemoration or
is absent.

Single-commemoration polyeleos is, separately, **directly** confirmed at 4+6 by **Oct 9, 2022**
(Tikhon) and **Oct 6, 2019** (Innocent) — neither has a co-commemoration, so unlike Oct 26 they
isolate the polyeleos split cleanly.

Scope: the multi-commemoration variant is **out of P1**. P1 targets single-commemoration
ordinary Sundays. This subsection is captured so the data model (commemoration as a list, not
a scalar) and the troparia Now-and-ever exception are designed in from the start rather than
retrofitted. Implement in a later phase with Oct 26 as its acceptance case.

### 3.2 OCA calendar primacy (commemoration selection)

*Which* commemoration(s) feed the engine is an **OCA-calendar** decision, upstream of the
split logic, and OCA overrides the St. Sergius Menaion when they differ. Worked example —
**Oct 9, 2022** (Tone 8): OCA elevated the Glorification of **St. Tikhon of Moscow,
Enlightener of North America**, over the Menaion's Apostle James (demoted to "served whenever
the Superior wishes") **and** transferred the Holy Fathers of the 7th Ecumenical Council to
the following Sunday (Oct 16). The engine takes its `commemoration` from the OCA calendar;
divergences from St. Sergius are flagged in the `note` field. This is the standing
OCA-over-St.-Sergius behavior.

---

## 4. Aposticha

- **Resurrection aposticha** of the tone (Octoechos): 4 stichera — 1 leading (no verse) +
  3 carrying the Sunday aposticha verses ("The Lord is King…", "For He has established…",
  "Holiness befits…"). The tone's `sat` aposticha set supplies these.
- **Glory** = the commemoration's aposticha doxasticon (Jun 28: Tone 2 "Come, O assembly of
  the faithful").
- **Both now** = a **Theotokion in the tone of the aposticha Glory** — *NOT* the dogmatikon
  and *NOT* necessarily the tone of the week (Jun 28: Tone 2 "A new miracle surpasses…",
  matching the Tone 2 Glory). This is the "theotokion to the tone of the Glory" rule and is
  distinct from the LIC "Both now."
  - Data need: a **fixed per-tone table of 8 Sunday aposticha theotokia** (the resurrectional
    theotokia appended to the Glory, keyed by the **Glory's** tone). RESOLVED (§8.3): this set
    is fixed and per-tone, **not** per-saint — confirmed because four different Sundays whose
    aposticha Glory fell in Tone 8 (Jul 5, Oct 26, Oct 9 2022, Jul 8 2018) all print the
    identical T8 theotokion ("O unwedded Virgin, who ineffably didst conceive God in the
    flesh…"). Source: the St. Sergius Octoechos records already in Drive (the Octoechos
    appendix); encode the fixed 8-set, do **not** scrape per-Sunday. Until a tone's entry
    exists, fall back to the weekday theotokion and flag.

---

## 5. Troparia (end of Vespers)

- **Troparion** = resurrectional troparion in the tone of the week (Jun 28: Tone 3 "Let the
  heavens rejoice").
- **Glory** = the commemoration's troparion, in its own tone (Jun 28: Tone 5).
- **Now and ever** = the **resurrectional Dismissal Theotokion in the tone of the
  commemoration's troparion** (Jun 28: Tone 5 "Rejoice, Impassable Gate…"). This is already
  handled by the §I `RESURRECTIONAL_DISMISSAL_THEOTOKIA` mechanism (project_notes §I); the
  engine wires the tone = troparion-Glory tone and lets that table resolve it. CONFIRMED keyed
  by the *saint-troparion* tone (not the tone of the week): Jul 5 T8→T8, Oct 9 2022 T1→T1,
  Jul 8 2018 T4→T4.

(Vigil and Liturgy troparia/kontakia in the doc are out of Vespers scope but are the same
commemoration/resurrection pairs; capture when the Liturgy assembler is touched.)

---

## 6. Prokeimenon / Entrance / readings

- Saturday-evening Great Vespers: **Entrance** and the **Saturday Great Prokeimenon** ("The
  Lord is King," tone of the week) as today (`dow === 6` already triggers the entrance).
- **OT paroemias** only when the commemoration is Polyeleos/Vigil (or a feast) and supplies
  them — unchanged from current rank handling.

---

## 7. Data requirements & encoding pipeline

Per tone, the Octoechos `sat` entry must carry, as director-pointed objects
(`{ text, director, tradition, pointing_source }`, read through `hymn-entry.js`):

1. `lic` — the resurrection LIC sequence (≥7 stichera, so any split 4/6/7 can slice).
2. aposticha resurrection set (4) + the Sunday aposticha verses.
3. `dogmatikon` — LIC "Both now."
4. Sunday **aposticha theotokion** (tone-of-Glory table; see §4).
5. resurrectional **dismissal theotokion** (already in §I table).

**Three distinct theotokia tables — never conflate.** Items 3–5 above are three *different*
per-tone tables, keyed differently:
- LIC "Both now" dogmatika (8) — keyed by **week tone** (already in octoechos data).
- Aposticha theotokia (8) — keyed by **aposticha-Glory tone** (the fixed set from the
  St. Sergius Octoechos appendix; see §4).
- Resurrectional dismissal theotokia (8) — keyed by **saint-troparion tone** (§I mechanism,
  already built).

For a single tone these are three different texts (e.g. Tone 8: LIC "The King of heaven";
aposticha "O unwedded Virgin"; dismissal "When Gabriel announced" / "For our sake Thou wast
born"). Never reuse one set for another.

Tone 1 was backfilled from `2026-0614-texts-tt` in v0.15.15. The remaining tones are
backfilled the same way, tone by tone, from the OCA service-doc JSONs:

- **Pipeline (established, project_notes "OCA service-docx → JSON pipeline"):** load
  `OCA_service_documents/YYYY-MMDD-texts-tt.docx` in the Tone Trainer → **Download parsed
  JSON** → the JSON's `sticheron` blocks carry tone, incipit, and the inline pointed string
  (`|` line / `//` penultimate / `[ ]` emphasis). Paste those pointed strings into the
  octoechos data files (and the Menaion saint stichera), verifying byte-for-byte against the
  data browsers. **Director-pointed JSON is the canonical encoding source; St. Sergius is the
  text it replaces.**
- Tone coverage from the available docs: T2 ← Jun 21, T3 ← Jun 28, T4 ← Jul 5. T5–T8 from
  their Sundays (request docs or keep St. Sergius interim, flagged).

The commemoration (Menaion saint) stichera/Glory/troparion/kontakion are encoded in the
monthly Menaion data files per `encoding_rule_v2.md`, pointed from the same JSON.

---

## 8. Open questions (resolve in spec review, before code)

(§8.1–§8.3 are now RESOLVED from real OCA service docs; §8.4–§8.5 remain open and are both
out of P1.)

1. **§8.1 Polyeleos / Vigil split** — RESOLVED: 4 resurrection + 6 saint. Confirmed by Nov 30,
   2025 (Tone 8, St. Andrew, vigil) — 4 res + 6 Andrew (3 texts doubled), Glory of Andrew,
   Tone 8 Dogmatikon at Both now. Polyeleos is now **directly** confirmed single-commemoration
   at 4+6 by Oct 9, 2022 (Tikhon) and Oct 6, 2019 (Innocent) — no longer inferred from the
   vigil row. (Oct 26 / Demetrius could not isolate it because the Earthquake co-commemoration
   shares the slots; §3.1.)
2. **§8.2 No-Glory Sunday** — RESOLVED (Nov 9, 2025): when the commemoration provides no Glory
   doxasticon, no resurrectional Glory is inserted; "Glory… now and ever" are sung together and
   resolve straight to the **tone-of-week Dogmatikon**.
3. **§8.3 Aposticha "Both now" source** — RESOLVED: the per-tone Sunday aposticha theotokion is
   a **fixed 8-set keyed by the Glory's tone**, sourced from the St. Sergius Octoechos appendix
   (not per-saint, not per-Sunday). Four T8 docs print the identical text. See §4 and the
   three-tables note in §7.
4. **§8.4 Great Feast on a Sunday** (feast that supersedes the resurrection) — explicitly OUT of
   this engine; keep the feast assembler. Define the precedence test. **Out of P1.**
5. **§8.5 Pentecostarion Sundays** (Thomas → All Saints) — these already carry their own
   `lic_theotokion` etc.; confirm migrating them onto the engine reproduces their docs before
   retiring their branch (regression guard). **P4; docs exist.**

---

## 9. Migration plan (phased, each phase gated by the regression suite 13/13 + build)

- **P0 — Spec sign-off.** This document reviewed and the §8 questions answered.
- **P1 — Engine, ordinary Sundays only.** Add the Sunday gate (§2) and the LIC + aposticha
  + troparia assembly (§§3–5) for `commemoration = Menaion saint`. Acceptance (single-
  commemoration, per the set below): Jun 21 (7+3), Jun 28 (6+4), Jul 8 2018 (doxology 6+4),
  Jul 5 / Nov 30 (vigil 4+6), Oct 6 2019 / Oct 9 2022 (polyeleos 4+6); Jun 14 overlay stays
  byte-identical. Pentecostarion/overlay branches untouched.
- **P2 — Data backfill.** Encode T2/T3/T4 resurrection sets + dogmatika + aposticha
  theotokia from the Jun 21 / Jun 28 / Jul 5 JSONs. Acceptance: those Sundays render fully
  director-pointed.
- **P3 — Fold in overlays.** Route `all_saints_sunday` / overlay Sundays through the engine
  (`commemoration = overlay`); confirm June 14 output is byte-identical to v0.15.30; retire
  the duplicate LIC "Both now" logic in the Pentecostarion branch.
- **P4 — Fold in Pentecostarion Sundays.** Route Thomas…All Saints through the engine;
  confirm each against its doc; retire the remaining duplicated Sunday logic.

**Acceptance set (must match docs):**
- single-commemoration (P1): June 21 (Tone 2, simple, 7+3), June 28 (Tone 3, six-stichera,
  6+4), **Jul 8 2018 (Tone 5, Procopius, doxology, 6+4)**, July 5 (Tone 4, with the alt
  Sergius/Athanasius docs), **Nov 30 (Tone 8, St. Andrew, vigil, 4+6)**, **Oct 6 2019 (Tone 7,
  Innocent, polyeleos, 4+6)**, **Oct 9 2022 (Tone 8, Tikhon, polyeleos, 4+6; OCA-primacy
  example, §3.2)**;
- overlay (P3): June 14 (Tone 1, All Saints of NA) — must stay byte-identical;
- multi-commemoration (later phase, §3.1): **Oct 26 (Tone 3, Demetrius polyeleos + Earthquake,
  3+3+4)**, **Nov 3 2019 (Tone 3, Akepsimas + George dedication, 4+3+3)**, **Nov 9 2025 (Tone 5,
  Onesiphorus & Porphyrius + Matrona, 4+3+3, no-Glory)**.

Note: the four weekday reference docs (Jan 11 Theodosius / Apr 30 James / Aug 9 Herman /
Jul 31 Eudocimus) carry afterfeast/paschal entanglement and are **not** Sunday acceptance
tests; they were research references only.

---

## 10. Non-goals

- Matins / Liturgy assembly (separate specs); this is Vespers only.
- Changing the Kekragarion, the fixed Vespers ordinary, or the dismissal engine.
- Great-Feast-on-Sunday precedence (flagged §8.4; separate work).
