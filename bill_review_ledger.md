# Bill's Review Ledger — everything awaiting your eyes, in one place

**Created 15 August 2026 at v0.41.6 (13 of 26), in answer to: "Are you
capturing a list of items that you need my eyes on to verify?"** The honest
answer was: partially — the items lived in four places (the gate's FINDINGS
block, the sic register, the project-notes "Owed" lists, session summaries)
with no single ledger. That dispersal is the same failure class as facts
scattered across prompts. This document is the fix.

**Maintenance rule:** every encoding session that adds a finding, a ruling
request, or a physical-book check ADDS A ROW HERE in the same commit. A
resolved row is struck with the date and the resolution, never deleted. The
gate's FINDINGS/WORKLIST output remains the machine-checked source; this
ledger adds the items no gate emits (rulings, book checks, document errata)
and the disposition column.

---

## A. RULINGS NEEDED — decisions only you can make

| # | item | question | where it lives |
|---|---|---|---|
| A-1 | **Line-break hyphens** | The join rule (built for closed-up compounds) met true typesetter hyphenation: `pas-sions` (MonasticMartyrs p6) and `cru-cified` (Martyress — inside the PROPER TROPARION at all four sites). Currently stored as extracted, hyphen kept. Should line-break hyphens instead close up ("passions", "crucified")? If yes, both nodes + sic rows change, and the flatten rule gains a case. **Update (Hieromartyr, Aug 18):** the join rule silently CLOSED UP four true compounds broken at line ends (all-honored, all-immaculate, godly-spoken ×2) — those hyphens belong to the words (corpus prints them hyphenated 30/35/3 times) and were restored at encode. So the open half of the ruling is now only the true-hyphenation cases (pas-sions, cru-cified); compound hyphens at line breaks are restored as a standing rule. | sic rows on `general.MonasticMartyrs.matins.sessional_polyeleos_closer` and `general.Martyress.troparion` |
| A-2 | **R-8 — sessionals shape** | `<c>` spec says `sessionals[]` (array of sets); all 13 `<g>` files use flat named slots (`sessional_1`, `sessional_2`, `sessional_polyeleos`, `sessional_ode3`, `sessional_post50` — plus Angels' `_alternate` pair). Options: adopt flat and amend §5.6; adopt array and migrate; or scan the 140 daily files first. **Blocks the first daily month.** | spec §16.5 |
| A-3 | **R-9 — reconciliation timing** | The naming ruling (source-nearest wins) is recorded; the reconciliation TABLE + adapter.js + per-key manifest rows + gate granularity fix remain unbuilt. Thirteen files is more expensive than six was; every further file raises the price. Say when. | spec §16.5; census |

## B. PHYSICAL-BOOK CHECKS — the PDF may be faithful to a misprint

| # | item | what the page prints | what the body is | status |
|---|---|---|---|---|
| B-1 | Unmercenaries Liturgy Epistle | `THE EPISTLE TO THE ROMANS. (12:4-5, 15-21)` | 1 Corinthians 12:27-31, 13:1-8 (0.944) | `citation_disputed`; no link offered; **confirm against the physical book** |
| B-2 | MonasticMartyrs Liturgy Epistle | `(5: 4-10)` under ROMANS | Romans 8:28-39 (1.000) | `citation_disputed`; no link offered; **confirm against the physical book** |
| B-4 | Nuns dogmatic rubric | rubric announces "Dogmatic in Tone II"; the page prints the Tone VIII dogmatic under a Tone VIII label | first rubric-tone/printed-tone mismatch | sic row on `general.Nuns.vespers.dogmatikon_rubric`; **check the physical book — the PDF may faithfully print a misprint** |
| B-5 | Heiromartyrs prokeimenon tones | Matins announces "Prokeimenon, in Tone IV", Liturgy "Prokeimenon, in Tone VII" — over BYTE-IDENTICAL text ("Precious in the sight of the Lord") and byte-identical verses | first tone-mismatch on identical prokeimenon text; VII may be a misprint for IV, or a real Grave-Tone appointment | register row + node comments; **check the physical book** |
| B-3 | 08-15 festal antiphons | census finds `ANTIPHON I/II/III` only in 08-06 | Dormition printing no festal antiphons is surprising | carried from spec §13.2-6; check before 08-15 is encoded |

## C. GATE FINDINGS — surfaced, standing, wanting your judgment once

Current machine-checked totals: **21 findings · 14 worklist items** (run
`node tools/validate_menaion_v2.mjs` for the live list). By class:

- **Prokeimena differ, Matins vs Liturgy (3):** Monastics, Martyrs,
  MonasticMartyrs. §7.4 surfaces these by design; two were invisible until
  the inverted check was fixed. If differing prokeimena are simply normal for
  martyric files, say so and these three become a settled class (the finding
  text can note it); they will keep printing until then.
- **Register lint — modern "you" without thee/thou/ye (16):** plural
  vocatives across seven files, including Angels' doxology_glory where the
  modern register is itself evidence of a second translation. Almost
  certainly all legitimate plural address; one pass of your eye over the 16
  loci would let the lint's plural-widening be extended and the class
  retired.
- **Tone divergence, one text (1):** Martyr's troparion printed at Tones IV
  and III across its sites — recorded per site per R-1; nothing to fix,
  flagged for awareness.
- **Identified citations (14 worklist):** every Vespers-lesson citation the
  corpus round-trip refused (translation divergence — Isaiah at 0.11,
  Wisdom renderings). Each is `identified` from cross-file correspondence
  with a provenance note. **Verification = open the printed page once per
  lesson and confirm the pericope.** Files: Martyrs, Martyr, Heirarch ×3,
  MonasticMartyrs ×3, Martyress ×3, Martyresses ×3.

## D. DOCUMENT ERRATA — measured claims in project documents falsified since

| # | document | claim | measured | fix owed |
|---|---|---|---|---|
| D-1 | `menaion_v2_general_menaion_analysis.md` §5 | Martyress lesson set = "Isaiah only" (1 lesson) | THREE lessons — Isaiah + Wisdom ×2 under bare-name headings the census could not see | one-line erratum in the analysis (it rules itself "this document does not amend other documents" — so the fix is a dated erratum note, on your approval) |
| D-2 | same, §5 | lesson-set census generally | now known to be a HEADING census; eight census-absences-that-were-spellings across the corpus (Typika-and-THE-Beatitudes, comma-less Lord-I-have-cried, Communion HYMN, bare-name WISDOM headings…) | same erratum; the census's method caveat should say "headings, not lessons" |

## E. ARCHITECTURE — carried items (not verification, but yours to schedule)

1. **Octoechos roots in `validate_menaion_v2.mjs`** — the register's one
   cross-book row (Tone VI dogmatic, two bytes off the Octoechos copy) is
   skipped, not byte-checked, until the roots are wired.
2. **Pentecostarion off Drive** — the last R-7 remnant.
3. **August close-reading items** (census §3, A-1…A-6) — settled only when
   their dates are encoded.
4. **St John Baptist's negative conditional** — measure on the page when
   that file is taken (18pp, subject file, LAST per standing order).

---

*Sections A, B, D need your decision or your book. Section C needs one pass
of your judgment to retire two classes. Section E is scheduling. Everything
here also exists at its source (gate output, sic register, spec, notes) —
this ledger only ensures nothing waits in four places at once.*
