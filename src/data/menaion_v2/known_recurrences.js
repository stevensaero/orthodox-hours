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
  // ── Heirarch.pdf ───────────────────────────────────────────────────────────
  // The Beatitudes reprint the canon troparia byte-identically at all seven
  // positions. FOUR files identical now against ONE variant. Four-to-one is a
  // stronger case for collapsing these than three-to-one was, and it is the same
  // wrong case: Monastics still diverges at three of seven.
  { a: 'general.Heirarch.matins.canons[0].odes.3.items[0]', b: 'general.Heirarch.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (Beatitude adds "(Twice)"). Carries the "By Shedding forth" sic at both sites.' },
  { a: 'general.Heirarch.matins.canons[0].odes.3.items[1]', b: 'general.Heirarch.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Heirarch.matins.canons[0].odes.3.items[2]', b: 'general.Heirarch.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Heirarch.matins.canons[0].odes.6.items[0]', b: 'general.Heirarch.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Heirarch.matins.canons[0].odes.6.items[1]', b: 'general.Heirarch.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Heirarch.matins.canons[0].odes.6.items[2]', b: 'general.Heirarch.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Heirarch.matins.canons[0].odes.6.items[3]', b: 'general.Heirarch.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7.' },

  // WITHIN THE FILE — and this is the file that makes the case for §2.3 without
  // needing a second file to compare against. Three texts print twice each; ONE
  // pair is identical and TWO diverge, at a capital letter and at a spelling.
  { a: 'general.Heirarch.vespers.aposticha_glory', b: 'general.Heirarch.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon. Printed in full at the Vespers aposticha (p4) and again after the Doxology (p14), byte for byte — which is what makes the two divergent pairs below evidence rather than noise.' },
  { a: 'general.Heirarch.matins.megalynarion_verse', b: 'general.Heirarch.liturgy.prokeimenon_verse', relation: 'variant',
    note: 'ONE CAPITAL LETTER. "give ear, all ye that inhabit the World" at the Megalynarion (p6); "the world" at the Liturgy prokeimenon (p15). Same psalm verse, same file, two settings.' },
  { a: 'general.Heirarch.matins.prokeimenon_verse', b: 'general.Heirarch.liturgy.alleluia', relation: 'variant',
    note: 'ONE SPELLING. "his tongue shall speak of judgement" at the Matins prokeimenon verse (p7); "judgment" as the Liturgy Alleluia (p16). Same text, two positions, two spellings.' },
  { a: 'general.Heirarch.matins.prokeimenon', b: 'general.Heirarch.liturgy.prokeimenon', relation: 'identical',
    note: 'IDENTICAL TEXT AT TWO DECLARED TONES — Tone IV at Matins, Tone I at Liturgy. §7.4 compares the two prokeimena and surfaces inequality as a finding; the texts agree, so nothing is surfaced, and the tone divergence is recorded per position rather than averaged. The R-1 tone-per-site problem in a second form.' },

  // ACROSS FILES.
  { a: 'general.Heirarch.matins.anabathmoi[0]', b: 'general.Martyrs.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — now identical in all SIX encoded files.' },
  { a: 'general.Heirarch.matins.anabathmoi[1]', b: 'general.Martyrs.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — identical in all six.' },
  { a: 'general.Heirarch.matins.anabathmoi_closer', b: 'general.Martyrs.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — identical in all six. The most stable text in the General Menaion so far.' },
  { a: 'general.Heirarch.matins.psalm50_closer', b: 'general.Martyrs.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Heirarch.matins.psalm50_verse', b: 'general.Martyrs.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.Heirarch.vespers.dogmatikon', b: 'general.Unmercenaries.vespers.dogmatikon', relation: 'identical',
    note: 'The Tone VIII dogmatic "In His love for mankind" — identical across two files that share nothing else. The dogmatikon is fixed by TONE, not by saint type, which is why it travels.' },
  { a: 'general.Heirarch.liturgy.communion_verse', b: 'general.Martyr.liturgy.communion_verse', relation: 'variant',
    note: 'A COMMA AND A CAPITAL. Martyr prints "shall the righteous be; He shall not be afraid"; Heirarch prints "be, he shall not". The same communion verse, and the third case in this one file of a text that recurs without recurring exactly.' },

  // ── Unmercenaries.pdf ──────────────────────────────────────────────────────
  // WITHIN THE FILE: the Beatitudes reprint the canon troparia BYTE-IDENTICALLY
  // at all seven positions — Ode III troparia 1-3, Ode VI troparia 1-3, and the
  // Ode VI Theotokion. That is the Monastic and Martyrs behaviour.
  //
  // THE TALLY IS NOW THREE IDENTICAL TO ONE VARIANT (Monastics diverges at three
  // of seven). Three-to-one is exactly the ratio that makes deduplication look
  // safe, and it is not: the one file that diverges would be silently rewritten.
  // Both positions keep their own copy (§2.3).
  { a: 'general.Unmercenaries.matins.canons[0].odes.3.items[0]',
    b: 'general.Unmercenaries.liturgy.beatitudes[0]', relation: 'identical',
    note: 'Ode III troparion 1 reprinted as Beatitude 1 (the Beatitude adds "(Twice)"; the DEVICE differs, the text does not).' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.3.items[1]',
    b: 'general.Unmercenaries.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.3.items[2]',
    b: 'general.Unmercenaries.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.6.items[0]',
    b: 'general.Unmercenaries.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.6.items[1]',
    b: 'general.Unmercenaries.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.6.items[2]',
    b: 'general.Unmercenaries.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.6.items[3]',
    b: 'general.Unmercenaries.liturgy.beatitudes[6]', relation: 'identical',
    note: 'Ode VI Theotokion = Beatitude 7 — carrying the "summit all creation" sic identically at both sites.' },

  // THE TROPARION, WITHIN THE FILE. Four print sites, two readings. The
  // entry-level canonical field is taken from the two `**` sites (p4, p5); these
  // two rows record that the other two are NOT the same string, which is the
  // whole reason R-1 could not collapse them.
  { a: 'general.Unmercenaries.troparion',
    b: 'general.Unmercenaries.matins.doxology_troparion', relation: 'variant',
    note: 'ONE ASTERISK, NOT TWO. p4 and p5 print "visit our infirmities. ** Freely ye have received"; p12 (after the Doxology) prints a single asterisk at the same position. A penultimate marker is a singable fact, not a typographic nicety, so the two are not interchangeable.' },
  { a: 'general.Unmercenaries.matins.doxology_troparion',
    b: 'general.Unmercenaries.liturgy.liturgy_troparion', relation: 'identical',
    note: 'The two single-asterisk sites (p12, p13) agree with each other exactly. The file is internally consistent about having two readings; it is not simply careless at one site.' },

  // ACROSS FILES. New identities the fifth file establishes. Each is registered
  // against ONE prior file; where a text is common to more, the note says so
  // rather than multiplying near-duplicate rows.
  { a: 'general.Unmercenaries.matins.anabathmoi[0]',
    b: 'general.Martyrs.matins.anabathmoi[0]', relation: 'identical',
    note: 'The Tone IV first antiphon, "From my youth". Identical in ALL FIVE encoded files — Monastic, Monastics, Martyr, Martyrs, Unmercenaries. The first General Menaion text verified identical across every file that prints it.' },
  { a: 'general.Unmercenaries.matins.anabathmoi[1]',
    b: 'general.Martyrs.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — likewise identical in all five.' },
  { a: 'general.Unmercenaries.matins.anabathmoi_closer',
    b: 'general.Martyrs.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — likewise identical in all five.' },
  { a: 'general.Unmercenaries.matins.psalm50_closer',
    b: 'general.Martyrs.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50. Also identical in Monastics and Martyr.' },
  { a: 'general.Unmercenaries.matins.psalm50_verse',
    b: 'general.Martyrs.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God". Also identical in Monastics and Martyr.' },
  { a: 'general.Unmercenaries.matins.megalynarion_verse',
    b: 'general.Martyrs.matins.megalynarion_verse', relation: 'identical', note: 'The selected-psalm verse "Our God is our refuge and strength".' },
  { a: 'general.Unmercenaries.liturgy.communion_verse',
    b: 'general.Martyrs.liturgy.communion_verse', relation: 'identical', note: '"Rejoice in the Lord, O ye Righteous" — the martyric communion verse, shared with Martyrs.' },
  { a: 'general.Unmercenaries.matins.canons[0].odes.5.irmos',
    b: 'general.Monastic.matins.canons[0].odes.5.irmos', relation: 'identical',
    note: 'Ode V irmos "Rising early we cry to Thee". Two files, two different canons, two different tones declared at the canon head — and the same irmos text. Worth knowing before assuming an irmos is canon-specific.' },
  { a: 'general.Unmercenaries.matins.aposticha_stavrotheotokion',
    b: 'general.Martyr.vespers.aposticha_stavrotheotokion', relation: 'identical',
    note: 'CROSS-FILE AND CROSS-SERVICE: identical text at Martyr\'s VESPERS aposticha and at Unmercenaries\' MATINS aposticha. Position is not a property of the text.' },
  { a: 'general.Unmercenaries.matins.sessional_ode3_closer',
    b: 'general.Martyr.matins.sessional_polyeleos_closer', relation: 'identical',
    note: 'CROSS-FILE AND CROSS-POSITION: "O Virgin Theotokos, thou art an invincible wall" closes Martyr\'s post-Polyeleos sessional and Unmercenaries\' post-Ode-III sessional.' },

  // THE ONE VARIANT — and the best cross-file evidence in the book so far.
  { a: 'general.Martyrs.vespers.lic_stavrotheotokion',
    b: 'general.Unmercenaries.vespers.aposticha_stavrotheotokion', relation: 'variant',
    note: 'ONE WORD. Martyrs prints "I stand in awe, O Compassionate One, AT Thy voluntary crucifixion"; Unmercenaries prints "OF Thy voluntary crucifixion". 431 characters, identical to the last comma and the last stray space before a question mark, diverging at a single preposition — and printed at different positions in the two files (LIC vs Vespers aposticha). This is what §2.3 is for: a deduplicating encoder would have matched 430 of 431 characters and called it the same hymn.' },

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
