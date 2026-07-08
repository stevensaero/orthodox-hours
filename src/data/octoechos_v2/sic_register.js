// src/data/octoechos_v2/sic_register.js
// ─────────────────────────────────────────────────────────────────────────────
// THE SIC REGISTER — structured form of the spec's §9.12 running sic-list
// (amendment E, July 7 2026). Seeded from the full list as of spec
// completion. New sics discovered during encoding are added in the same
// commit as the data.
//
// Ruled behavior (Bill, July 7 2026): charset normalizes per §9.10 (logged);
// SPELLING stays STRICT VERBATIM — no silent correction, ever. The §6 gate
// verifies the stored data still matches each recorded sic byte-for-byte
// (substring match at the locus), guarding the ruling against well-meaning
// fixes during encoding.
//
// Entry shape:
//   file     — source file (schema_v2 SOURCE_FILES vocabulary)
//   locus    — the print location, prose (as the spec records it)
//   path     — V2 position path where the text will live; approx: true until
//              the position is encoded and the path pinned (same-commit rule)
//   verbatim — the sic fragment EXACTLY as printed (post-§9.10 charset
//              normalization: homoglyphs are extractor artifacts, not sics)
//   note     — classification
//
// Entries whose path is not yet encoded report as PENDING, never as pass.
// ─────────────────────────────────────────────────────────────────────────────

export default [
  // ── 2-4 (§9.12 original list) ────────────────────────────────────────────
  { file: '2-4.pdf', locus: 'Wednesday chapter', path: null, approx: true,
    verbatim: 'exeedingly',
    note: 'OCR spelling artifact — "exceedingly" misprinted.' },
  { file: '2-4.pdf', locus: 'Wednesday chapter', path: null, approx: true,
    verbatim: 'Wondrous art. Thou',
    note: 'Stray period mid-phrase.' },
  { file: '2-4.pdf', locus: 'Wednesday chapter (also 2-7 Fri-night Compline rendering site)', path: null, approx: true,
    verbatim: 'those Sick with corruption',
    note: 'Mid-sentence capital.' },

  // ── 2-5 additions ────────────────────────────────────────────────────────
  { file: '2-5.pdf', locus: 'closing rubric', path: null, approx: true,
    verbatim: 'It is truly meet . ...,',
    note: 'Stray spaced period.' },
  { file: '2-5.pdf', locus: 'Thursday chapter', path: null, approx: true,
    verbatim: 'forgiveness offenses',
    note: 'Dropped "of".' },
  { file: '2-5.pdf', locus: 'Nicholas canon acrostic heading', path: 'tone2.matins_weekday.thu.canons[1].acrostic', approx: true,
    verbatim: "‘‘Accept",
    note: 'Doubled curly quote (U+2018 x2) opening the Nicholas acrostic - true bytes pinned from the raw text layer, July 7 2026 scan.' },

  // ── 2-6 additions ────────────────────────────────────────────────────────
  { file: '2-6.pdf', locus: 'Thursday-evening LIC closer (ewe-lamb text, first print)',
    path: 'tone2.vespers_weekday.thu.lic_theotokion', approx: false,
    verbatim: 'O Christ,?',
    note: 'Comma+question mark — recurs IDENTICALLY in both prints of the ewe-lamb text (evidence of true duplication, §2.3).' },
  { file: '2-6.pdf', locus: 'Friday Matins aposticha closer (ewe-lamb text, second print)',
    path: 'tone2.matins_weekday.fri.aposticha_theotokion', approx: false,
    verbatim: 'O Christ,?',
    note: 'Second print of the same typo — see the recurrence register.' },
  { file: '2-6.pdf', locus: 'Thursday-night Compline Ode IX',
    path: 'tone2.compline.thu.canon.odes[9]', approx: true,
    verbatim: 'we praise thee*',
    note: 'Stray asterisk (word-attached — not a pointing marker).' },
  { file: '2-6.pdf', locus: 'Friday Matins sessional set-2 closer "Standing beside Thy Cross"',
    path: 'tone2.matins_weekday.fri.sessionals[1].closer', approx: true,
    verbatim: 'Standing beside Thy Cross',
    note: 'UNCLOSED QUOTE in this closer — the fragment anchors the locus; the sic is the missing close-quote.' },
  { file: '2-6.pdf', locus: 'Thursday-night Compline closing rubric',
    path: 'tone2.compline.thu.closing_rubric', approx: true,
    verbatim: '',
    note: 'Closing rubric prints WITHOUT its final "Dismissal." — suspected page-boundary truncation; recorded verbatim (absence sic: gate checks the stored rubric does NOT end with "Dismissal.").' },

  // ── 2-7 additions ────────────────────────────────────────────────────────
  { file: '2-7.pdf', locus: 'Saturday beatitudes', path: 'tone2.liturgy_weekday.sat.beatitudes', approx: true,
    verbatim: 'mercy*',
    note: 'Stray asterisk.' },
  { file: '2-7.pdf', locus: 'Saturday praises Glory/Both-now Theotokion',
    path: 'tone2.matins_weekday.sat.praises.theotokion', approx: true,
    verbatim: 'Even who gave birth',
    note: '"Even" for "Eve".' },
  { file: '2-7.pdf', locus: 'Saturday chapter', path: null, approx: true,
    verbatim: 'Thou art. wholly the desire',
    note: 'Stray period.' },
  { file: '2-7.pdf', locus: 'Saturday chapter', path: null, approx: true,
    verbatim: 'O Word. Who of old',
    note: 'Period for comma. (Charset note: the source prints Cyrillic О here — normalized per §9.10 with log; the period-for-comma is the sic.)' },
  { file: '2-7.pdf', locus: 'Saturday chapter', path: null, approx: true,
    verbatim: 'for They cry out',
    note: 'Mid-sentence capital.' },
  { file: '2-7.pdf', locus: 'Saturday canon-1 heading',
    path: 'tone2.matins_weekday.sat.canons[0].title', approx: true,
    verbatim: 'the departed., the acrostic',
    note: 'Stray period in the canon-1 heading.' },
  { file: '2-7.pdf', locus: 'Friday-night(?) Compline Ode IV — spec records it under 2-7 Compline',
    path: 'tone2.compline.fri.canon.odes[4]', approx: true,
    verbatim: 'We Christians acquired thee have as',
    note: 'Word-order garble.' },
  { file: '2-7.pdf', locus: 'Saturday sessional set-2 item 2',
    path: 'tone2.matins_weekday.sat.sessionals[1].items[1]', approx: true,
    verbatim: '*',
    note: 'Stray mid-item asterisk (§9.12 / §4.8a). Fragment is the bare marker; exact in-context form to be pinned at encoding.' },

  // ── Theotokia.pdf addition ───────────────────────────────────────────────
  { file: 'Theotokia.pdf', locus: 'Part 2, Monday praises, Tone II',
    path: 'theotokia.doxasticon_theotokia.2.mon_praises', approx: false,
    verbatim: 'That we not fall way',
    note: 'Dropped "a" ("fall away").' },

  // ── Theotokia.pdf additions (July 7 2026 encoding session) ──────────────
  { file: 'Theotokia.pdf', locus: 'Part 3 header usage note',
    path: 'theotokia.dismissal_theotokia_annual.usage_note', approx: false,
    verbatim: '[Note: the Theotokion identified',
    note: 'The bracket opened by "[Note:" is NEVER CLOSED in the print — stored verbatim, no closing bracket supplied.' },
  { file: 'Theotokia.pdf', locus: 'Part 3, Tone I, Monday Vespers and Tuesday Matins (also its Wed/Thu duplicate)',
    path: 'theotokia.dismissal_theotokia_annual.1.mon_vespers_tue_matins', approx: false,
    verbatim: 'dist give birth',
    note: '"dist" for "didst" — recurs identically in the wed_vespers_thu_matins duplicate print.' },
  { file: 'Theotokia.pdf', locus: 'Part 3, Tone VI row heading',
    path: 'theotokia.dismissal_theotokia_annual.6.tue_vespers_wed_matins.sourceLabel', approx: false,
    verbatim: 'Tuesday-Vespers',
    note: 'Hyphen for space in the printed heading ("Tuesday-Vespers and Wednesday Matins").' },
  { file: 'Theotokia.pdf', locus: 'Part 3, Tone IV final row heading',
    path: 'theotokia.dismissal_theotokia_annual.4.sat_lauds.sourceLabel', approx: false,
    verbatim: 'Saturday Matins',
    note: 'Tone IV alone heads its Lauds-position row "Saturday Matins" where all other tones print "Saturday Lauds" — keyed positionally (sat_lauds), printed heading preserved here.' },
  { file: 'Theotokia.pdf', locus: 'Part 1, Tone VII, Dismissal Theotokion',
    path: 'theotokia.resurrectional_theotokia.7.dismissal_theotokion', approx: false,
    pointing_anomaly: true,
    verbatim: 'child-bearing, ** and thou didst remain a Virgin ** even after birthgiving',
    note: 'The source prints TWO ** markers in one hymn — a pointing anomaly kept verbatim; the gate exempts register-flagged pointing anomalies from the one-** rule instead of correcting them.' },
  { file: 'Theotokia.pdf', locus: 'Part 3, Tone VII, Friday Vespers and Saturday Matins (second print site)',
    path: 'theotokia.dismissal_theotokia_annual.7.fri_vespers_sat_matins', approx: false,
    pointing_anomaly: true,
    verbatim: 'child-bearing, ** and thou didst remain a Virgin ** even after birthgiving',
    note: 'Same doubled ** recurs IDENTICALLY at the second print site — the shared anomaly is itself evidence of true duplication (the ewe-lamb "O Christ,?" class).' },
  { file: '2-1.pdf', locus: 'Ode-heading typography: Compline "OD E I", Nocturns "OD E I" and "OD E V", Matins "OD E I"', path: null, approx: true,
    verbatim: 'OD E',
    note: 'The ODE heading prints with an intruded space at several sites — structural headings, not stored text; generator matches de-spaced forms. Recorded for the audit trail.' },
];
