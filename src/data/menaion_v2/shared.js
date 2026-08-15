// src/data/menaion_v2/shared.js — menaion_v2_spec.md §6.1
// ─────────────────────────────────────────────────────────────────────────────
// MENAION-WIDE INVARIABLE TABLES. THE TABLE IS EMPTY, AND THAT IS A MEASURED
// RESULT RATHER THAN A PLACEHOLDER.
//
// §6.1 named three candidate classes, all tagged [unattested] pending close
// reading: the LIC verse ladder as the Menaion prints it, the praises verse
// ladder, and aposticha verse sets. All 140 delivered daily files (May 16-31,
// June, July, August) were extracted with dedupe_chars() and measured against
// them on 15 Aug 2026. Every one is falsified:
//
//   THE TWO LADDERS ARE NOT PRINTED AT ALL — 0 of 140 files.
//   They belong to the Horologion and the Octoechos. The Menaion never prints
//   them, so there is nothing here to hoist.
//
//   THE PSALM-VERSE TEXTS THAT DO RECUR ARE NOT BYTE-INVARIANT:
//
//     "Precious in the sight of the Lord …"      66 sites / 26 files /  4 forms
//     "Blessed is the man …"                    113 sites / 51 files / 14 forms
//     "In the saints that are in His earth …"     9 sites /  8 files /  2 forms
//     "Let every breath …"                       49 sites / 49 files /  6 forms
//
//   63 of the 66 "Precious in the sight" sites agree — 95.5%, which is exactly
//   the ratio that makes a shared table look proven. 07-19 prints two different
//   renderings of that one verse WITHIN A SINGLE FILE ("His saints’." and
//   "* is the death of his saints."). This is the Octoechos `lic_verse_ladder`
//   history repeating: removed from that project's shared.js on 7 July 2026
//   when byte comparison across print sites falsified the same hypothesis.
//
// AND THE RECURRENCE HAS A CAUSE THAT IS NOT INVARIANCE. The same verse text
// prints under DIFFERENT labels at different positions — "Precious in the
// sight" is a Prokeimenon in 19 files and an aposticha Verse in 15; "Blessed is
// the man" is an Alleluia in 18 and a Verse in 12. What recurs widely across the
// Menaion is (a) reading bodies, which R-4 stores nowhere, (b) rubrics, which
// §2.7 stores per-position on the section they govern, and (c) common-of-the-
// saints propers keyed to SAINT TYPE — which is precisely what general.js
// already models. Hoisting those here would record a saint-type fact as a
// book-wide one.
//
// ONE STRING IS BYTE-INVARIANT ACROSS ALL ITS SITES: `Prokeimenon of the day.`
// (51 sites, 48 files, 1 form). It is a RUBRIC naming another book's text under
// R-5, not a psalm-verse text, and hoisting repeated rubric boilerplate is what
// the 15 Aug recurrence-register ruling already declined to do in a different
// register. It stays per-position.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THE FILE EXISTS ANYWAY — STANDING WARNING 8.
//
// A coverage gate proves every FIELD is registered. It does NOT prove every
// TABLE is REACHABLE. general.js was validated, gated and completely invisible
// in the browser until an axis was added for it. An empty table with no file, no
// loader and no axis is indistinguishable from a table nobody has looked at —
// which is the §2.10 failure in table form. The file, the loader and the browser
// axis ship together so that if one of the eight unencoded months prints a text
// that IS invariant and IS psalm-verse class, it has somewhere visible to land.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE BAR FOR ADDING A ROW (§6.1, unchanged):
//   1. PSALM-VERSE OR PROKEIMENON CLASS ONLY. Nothing hymnographic, ever —
//      stichera, closers, sessionals, canons and troparia are per-position
//      without exception (Octoechos §9.8, ruled).
//   2. BYTE-IDENTICAL at EVERY site that prints it. Not 95%. Every site.
//   3. Tagged [expected month-invariant] until TWO months confirm it, and
//      demoted the moment a third falsifies it (§2.12 clause 2).
//   4. Menaion-wide — not merely common to the dates that share a saint type.
//      That distinction is what general.js exists to draw.
// ─────────────────────────────────────────────────────────────────────────────

const SHARED = {};

export default SHARED;
