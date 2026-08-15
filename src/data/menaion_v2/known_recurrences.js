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
// SCOPE, ruled 15 Aug: this register records HYMN and READING recurrences. It
// does NOT enumerate repeated RUBRIC boilerplate — "The Dismissal:", "Typika and
// Beatitudes.", "After the 50th Psalm:" and the like recur by the dozen across
// files and carry no information when paired. A byte-identity sweep over
// general.js reports ~150 such pairs; they are deliberately absent, not
// overlooked. If that sweep is ever run again, expect them.
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

  // ── Martyr.pdf, INTERNAL — and the entry that settles the `* *cease` ruling
  // by evidence rather than inference. The same hymn is printed twice in this
  // file: at the Vespers Glory idiomelon (p1) and as the post-Psalm-50 sessional
  // (p7). The Vespers print reads "* *cease"; the Matins print reads "** cease"
  // — a PROPER penultimate marker at exactly the same position. That is
  // independent, same-file confirmation that the Vespers form is a broken `**`
  // and not a stray asterisk. Wording also differs, so: variant.
  { a: 'general.Martyr.vespers.lic_glory', b: 'general.Martyr.matins.sessional_post50',
    relation: 'variant',
    note: '“Today the universe is illumined …”. Vespers: “adorned with flowers”, “doth cry aloud”, and the split “* *cease”. Matins: “decorated with flowers”, “cries aloud”, and a proper “** cease”. The Matins print is why the Vespers ** reading is evidenced, not assumed.' },

  // ── Monastics.pdf, INTERNAL — and the counter-example to Monastic's ─────────
  // Monastic's Beatitudes reprint its canon troparia BYTE-IDENTICALLY. Monastics'
  // do NOT: three of the seven differ. Same book, same structure, same position,
  // opposite behaviour. A design that deduplicated the Beatitudes against the
  // canon would have been "correct" on the first file encoded and silently wrong
  // on the second.
  { a: 'general.Monastics.matins.canons[0].odes.3.items[0]', b: 'general.Monastics.liturgy.beatitudes[0]',
    relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1.' },
  { a: 'general.Monastics.matins.canons[0].odes.3.items[1]', b: 'general.Monastics.liturgy.beatitudes[1]',
    relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Monastics.matins.canons[0].odes.3.items[2]', b: 'general.Monastics.liturgy.beatitudes[2]',
    relation: 'variant', note: 'Ode III troparion 3: canon prints “you subdue the raging”, Beatitude prints “ye subdue the raging”.' },
  { a: 'general.Monastics.matins.canons[0].odes.6.items[0]', b: 'general.Monastics.liturgy.beatitudes[3]',
    relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Monastics.matins.canons[0].odes.6.items[1]', b: 'general.Monastics.liturgy.beatitudes[4]',
    relation: 'variant', note: 'Ode VI troparion 2: canon “bestowing them upon those in need”, Beatitude “unto those in need”.' },
  { a: 'general.Monastics.matins.canons[0].odes.6.items[2]', b: 'general.Monastics.liturgy.beatitudes[5]',
    relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Monastics.matins.canons[0].odes.6.items[3]', b: 'general.Monastics.liturgy.beatitudes[6]',
    relation: 'variant', note: 'Ode VI Theotokion: canon “a source of dispassion”, Beatitude “a Source of dispassion”.' },

  // Martyr INTERNAL — the same pairing Monastics shows, in the file whose
  // Vespers half was missing until the page-coverage tripwire found it. The
  // Vespers aposticha Glory (p4) and the Doxology Glory (p12) are byte-identical.
  { a: 'general.Martyr.vespers.aposticha_glory', b: 'general.Martyr.matins.doxology_glory',
    relation: 'identical', note: '“O come all ye lovers of the Martyrs …” — Vespers aposticha Glory (p4) and Doxology Glory (p12).' },

  // Monastics INTERNAL — one hymn, two print sites in one file.
  { a: 'general.Monastics.vespers.aposticha_glory', b: 'general.Monastics.matins.doxology_glory',
    relation: 'identical', note: '“O venerable fathers! * loathing the sweetness of this world …” — Vespers aposticha Glory and the Doxology Glory.' },

  // Cross-file, from the 2c batch scan. Not yet encodable — Martyrs.pdf is not
  // transcribed — but recorded so the pair is not rediscovered later.
  // { a: 'general.Monastic.vespers.readings[1]', b: 'general.Martyrs...',
  //   relation: 'variant', note: '"The righteous live FOR EVERMORE" (Monastic) vs
  //   "UNTO THE AGES" (Martyrs) — same Wisdom 5:15 lesson, two renderings.' },

  // ── Martyr.pdf Beatitudes — a gap, closed. Monastic and Monastics both had
  // their seven pairs recorded from the day they were encoded; Martyr's were
  // never registered, so the one file whose Beatitudes nobody had checked was
  // the one with a half-missing Vespers. All seven are byte-identical.
  { a: 'general.Martyr.matins.canons[0].odes.3.items[0]', b: 'general.Martyr.liturgy.beatitudes[0]',
    relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1.' },
  { a: 'general.Martyr.matins.canons[0].odes.3.items[1]', b: 'general.Martyr.liturgy.beatitudes[1]',
    relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Martyr.matins.canons[0].odes.3.items[2]', b: 'general.Martyr.liturgy.beatitudes[2]',
    relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Martyr.matins.canons[0].odes.6.items[0]', b: 'general.Martyr.liturgy.beatitudes[3]',
    relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Martyr.matins.canons[0].odes.6.items[1]', b: 'general.Martyr.liturgy.beatitudes[4]',
    relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Martyr.matins.canons[0].odes.6.items[2]', b: 'general.Martyr.liturgy.beatitudes[5]',
    relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Martyr.matins.canons[0].odes.6.items[3]', b: 'general.Martyr.liturgy.beatitudes[6]',
    relation: 'identical', note: 'Ode VI Theotokion = Beatitudes Theotokion.' },

  // Martyr INTERNAL — one stavrotheotokion, two print sites.
  { a: 'general.Martyr.vespers.lic_stavrotheotokion', b: 'general.Martyr.matins.praises_stavrotheotokion',
    relation: 'identical', note: '“The Sovereign Lady, the unblemished ewe-lamb …” — LIC (p1) and Praises (p12).' },

  // ── Martyrs.pdf — the fourth file. Its Beatitudes reprint the canon troparia
  // BYTE-IDENTICALLY at all seven positions: the Monastic behaviour. Two files
  // now do this and one does not, from the same press. The tally is the point.
  { a: 'general.Martyrs.matins.canons[0].odes.3.items[0]', b: 'general.Martyrs.liturgy.beatitudes[0]',
    relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1.' },
  { a: 'general.Martyrs.matins.canons[0].odes.3.items[1]', b: 'general.Martyrs.liturgy.beatitudes[1]',
    relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Martyrs.matins.canons[0].odes.3.items[2]', b: 'general.Martyrs.liturgy.beatitudes[2]',
    relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Martyrs.matins.canons[0].odes.6.items[0]', b: 'general.Martyrs.liturgy.beatitudes[3]',
    relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4 — including the unclosed quotation mark, which both sic rows record.' },
  { a: 'general.Martyrs.matins.canons[0].odes.6.items[1]', b: 'general.Martyrs.liturgy.beatitudes[4]',
    relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Martyrs.matins.canons[0].odes.6.items[2]', b: 'general.Martyrs.liturgy.beatitudes[5]',
    relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Martyrs.matins.canons[0].odes.6.items[3]', b: 'general.Martyrs.liturgy.beatitudes[6]',
    relation: 'identical', note: 'Ode VI Theotokion = Beatitudes Theotokion.' },

  // Martyrs INTERNAL.
  { a: 'general.Martyrs.vespers.aposticha_glory', b: 'general.Martyrs.matins.doxology_glory',
    relation: 'identical', note: '“O come, all ye who adore the martyrs …” — Vespers aposticha Glory (p4) and Doxology Glory (p12). The same pairing Monastics and Martyr both show.' },
  { a: 'general.Martyrs.vespers.aposticha_alternate', b: 'general.Martyrs.matins.doxology_closer',
    relation: 'identical', note: '“We have come to know God …” — the alternative Theotokion, printed at the Vespers aposticha and again after the Doxology.' },

  // Cross-file, Martyrs ⟷ Martyr. The two files share Theotokia while sharing
  // almost no proper text — and they share them at DIFFERENT slots, which is
  // why the pair is keyed by path and not by slot name.
  { a: 'general.Martyrs.vespers.aposticha_closer', b: 'general.Martyr.vespers.aposticha_closer',
    relation: 'identical', note: '“Christ the Lord, my Creator and Redeemer …” — the Resurrection Theotokion, same slot in both files.' },
  { a: 'general.Martyrs.vespers.aposticha_alternate', b: 'general.Martyr.vespers.dogmatikon_alternate',
    relation: 'identical', note: '“We have come to know God …” — Martyrs prints it at the aposticha, Martyr at the dogmatikon. Same text, different position: stored twice, per §2.3.' },
  { a: 'general.Martyrs.vespers.dogmatikon', b: 'general.Martyr.vespers.dogmatikon',
    relation: 'variant', note: 'Both files print a "Both now" dogmatikon in this slot and they are DIFFERENT hymns — Martyrs the Tone III “How can we, O all-honored one”, Martyr the Tone VI “Who doth not call thee blessed”. Recorded so the slot is never treated as carrying one shared text.' },
];
