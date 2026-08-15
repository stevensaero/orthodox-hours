// src/data/menaion_v2/known_recurrences.js — menaion_v2_spec.md §2.3a
//
// The machine-checkable twin of the evidence catalog. Gate rule: every
// `identical` pair must BYTE-MATCH; every `variant` pair must NOT; `family`
// asserts nothing and must be upgraded in the commit that encodes either side.
// Steady state is zero `family` entries.
//
// Paths may cross books (§10.4): `octoechos:` and `pentecostarion:` prefixes are
// reserved; an unqualified path means this book.
//
// SEEDED FROM THE Monastic.pdf HAND-ENCODE. The General Menaion prints its
// canon troparia a SECOND time under Typika and Beatitudes at Liturgy — the same
// pattern V1 recorded by hand at 06-29 ("4 from Ode III … 4 from Ode VI"). Both
// positions store their own copy (§2.3, no dereferencing); these rows are what
// make the duplication a checked fact rather than an invitation to collapse it.
export default [
  { a: 'general.Monastic.matins.canons[0].odes.3.items[0]',
    b: 'general.Monastic.liturgy.beatitudes[0]', relation: 'identical',
    note: 'Ode III troparion 1 reprinted as Beatitude 1 (Beatitude adds "(Twice)").' },
  { a: 'general.Monastic.matins.canons[0].odes.3.items[1]',
    b: 'general.Monastic.liturgy.beatitudes[1]', relation: 'identical',
    note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Monastic.matins.canons[0].odes.3.items[2]',
    b: 'general.Monastic.liturgy.beatitudes[2]', relation: 'identical',
    note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Monastic.matins.canons[0].odes.6.items[0]',
    b: 'general.Monastic.liturgy.beatitudes[3]', relation: 'identical',
    note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Monastic.matins.canons[0].odes.6.items[1]',
    b: 'general.Monastic.liturgy.beatitudes[4]', relation: 'identical',
    note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Monastic.matins.canons[0].odes.6.items[2]',
    b: 'general.Monastic.liturgy.beatitudes[5]', relation: 'identical',
    note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Monastic.matins.canons[0].odes.6.items[3]',
    b: 'general.Monastic.liturgy.beatitudes[6]', relation: 'identical',
    note: 'Ode VI Theotokion = Beatitudes Theotokion.' },

  // ── CROSS-FILE, Monastic ⟷ Monastics (the 2d fixture test) ────────────────
  // The plural twin shares four hymns with the singular file. Two are BYTE
  // IDENTICAL; one differs only in capitalization — precisely the micro-variance
  // class the Octoechos catalog warns about, and the reason these are stored
  // per position rather than shared.
  { a: 'general.Monastic.vespers.lic_closer', b: 'general.Monastics.vespers.lic_closer',
    relation: 'identical', note: '“My thoughts are impure …” — same Theotokion, both files.' },
  { a: 'general.Monastic.vespers.lic_stavrotheotokion', b: 'general.Monastics.vespers.lic_stavrotheotokion',
    relation: 'identical', note: '“The unblemished ewe-lamb …” — also printed twice in Octoechos 2-6 and at two V1 Menaion sites.' },
  { a: 'general.Monastic.vespers.dogmatikon', b: 'general.Monastics.vespers.dogmatikon',
    relation: 'identical', note: '“Who doth not call thee blessed …” — the Tone VI dogmatikon, both files.' },
  { a: 'general.Monastic.vespers.aposticha_closer', b: 'general.Monastics.vespers.aposticha_closer',
    relation: 'variant',
    note: '“O unwedded Virgin …” — Monastic prints “Mother of God Most High: * accept”; Monastics prints “mother of God most high: * Accept”. Capitalization only, and it is a real per-print-site fact.' },

  // Cross-file, from the 2c batch scan. Not yet encodable — Martyrs.pdf is not
  // transcribed — but recorded so the pair is not rediscovered later.
  // { a: 'general.Monastic.vespers.readings[1]', b: 'general.Martyrs...',
  //   relation: 'variant', note: '"The righteous live FOR EVERMORE" (Monastic) vs
  //   "UNTO THE AGES" (Martyrs) — same Wisdom 5:15 lesson, two renderings.' },
];
