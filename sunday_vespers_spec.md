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
| Doxology (§2D)              | 6                        | 4 *(verify)*  | —                      |
| Polyeleos / Vigil (§2E/§2F) | 4                        | 6 *(verify)*  | verify vs a doc        |
| Overlay / great commem.     | per the overlay entry    | remainder     | Jun 14 (All Saints NA) |

Rules:

- The **resurrection** stichera are the tone's Octoechos LIC set (3 "resurrection" + the
  "by Anatolius" group). Take the **first N** of the tone's resurrection sequence in source
  order (N = 7 or 6 or 4 per table). The Octoechos `sat.lic` array is that sequence.
- The **commemoration** stichera are the saint's `stichera_lord_i_call` from the Menaion
  (or the overlay/Pentecostarion entry). The Menaion provides M unique texts; fill the
  remaining slots by **repeating in source order** to reach the count (June 28: 3 unique →
  4 slots, first doubled). This is the existing `expandSticheraToCount` behavior; reuse it.
- **Glory** = the commemoration's `stichera_glory` (doxasticon), in its own tone (Jun 28:
  Tone 8). If the commemoration has no Glory, the resurrectional Glory is used *(verify the
  no-Glory Sunday case)*.
- **Both now** = the **Dogmatikon in the tone of the week** (`getOctoechosVespers(tone,
  'sat').dogmatikon`). Always, regardless of commemoration rank. Confirmed Jun 21 → Tone 2,
  Jun 28 → Tone 3, Jun 14 → Tone 1. This is the generalization of the v0.15.30 fix.

Kekragarion opening (Ps 140:1-2) stays as today: tone-of-week `lic_opening` (director
pointed where encoded), unchanged by this spec.

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
  - Data need: a per-tone table of the **Sunday aposticha theotokia** (the resurrectional
    theotokia appended to the Glory by tone). Sourced from the OCA docs as each tone's
    Sunday is encoded. Until a tone's entry exists, fall back to the weekday theotokion and
    flag.

---

## 5. Troparia (end of Vespers)

- **Troparion** = resurrectional troparion in the tone of the week (Jun 28: Tone 3 "Let the
  heavens rejoice").
- **Glory** = the commemoration's troparion, in its own tone (Jun 28: Tone 5).
- **Now and ever** = the **resurrectional Dismissal Theotokion in the tone of the
  commemoration's troparion** (Jun 28: Tone 5 "Rejoice, Impassable Gate…"). This is already
  handled by the §I `RESURRECTIONAL_DISMISSAL_THEOTOKIA` mechanism (project_notes §I); the
  engine wires the tone = troparion-Glory tone and lets that table resolve it. Verify the
  table is keyed by the *Glory troparion* tone, not the tone of the week.

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

1. **Polyeleos / Vigil split** (4+6?) — confirm against a doc (e.g. a Sunday with a
   polyeleos saint) before encoding; do not assume.
2. **No-Glory Sunday** (commemoration without an LIC/aposticha Glory) — does the
   resurrectional Glory take that slot? Confirm.
3. **Aposticha "Both now" source** — confirm the per-tone Sunday aposticha theotokion set
   (tone-of-Glory) and where it lives in data.
4. **Great Feast on a Sunday** (feast that supersedes the resurrection) — explicitly OUT of
   this engine; keep the feast assembler. Define the precedence test.
5. **Pentecostarion Sundays** (Thomas → All Saints) — these already carry their own
   `lic_theotokion` etc.; confirm migrating them onto the engine reproduces their docs
   before retiring their branch (regression guard).

---

## 9. Migration plan (phased, each phase gated by the regression suite 13/13 + build)

- **P0 — Spec sign-off.** This document reviewed and the §8 questions answered.
- **P1 — Engine, ordinary Sundays only.** Add the Sunday gate (§2) and the LIC + aposticha
  + troparia assembly (§§3–5) for `commemoration = Menaion saint`. Acceptance: June 21
  (7+3) and June 28 (6+4) match their docs. Pentecostarion/overlay branches untouched.
- **P2 — Data backfill.** Encode T2/T3/T4 resurrection sets + dogmatika + aposticha
  theotokia from the Jun 21 / Jun 28 / Jul 5 JSONs. Acceptance: those Sundays render fully
  director-pointed.
- **P3 — Fold in overlays.** Route `all_saints_sunday` / overlay Sundays through the engine
  (`commemoration = overlay`); confirm June 14 output is byte-identical to v0.15.30; retire
  the duplicate LIC "Both now" logic in the Pentecostarion branch.
- **P4 — Fold in Pentecostarion Sundays.** Route Thomas…All Saints through the engine;
  confirm each against its doc; retire the remaining duplicated Sunday logic.

**Acceptance set (must match docs):** June 14 (Tone 1, overlay), June 21 (Tone 2, simple),
June 28 (Tone 3, six-stichera), July 5 (Tone 4, with the alt Sergius/Athanasius docs).

---

## 10. Non-goals

- Matins / Liturgy assembly (separate specs); this is Vespers only.
- Changing the Kekragarion, the fixed Vespers ordinary, or the dismissal engine.
- Great-Feast-on-Sunday precedence (flagged §8.4; separate work).
