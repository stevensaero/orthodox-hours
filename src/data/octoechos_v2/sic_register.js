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
    verbatim: "''Accept",
    note: 'Doubled quote opening the Nicholas acrostic.' },

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
    path: 'theotokia.doxasticon_theotokia.mon_praises', approx: true,
    verbatim: 'That we not fall way',
    note: 'Dropped "a" ("fall away").' },
];
