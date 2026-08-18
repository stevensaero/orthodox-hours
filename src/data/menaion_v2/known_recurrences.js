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

  // ── Heirarchs.pdf ──────────────────────────────────────────────────────────
  // THE BEATITUDES ARE NOT BYTE-IDENTICAL TO THE CANON: five of seven agree,
  // two diverge. Heirarchs joins Monastics as the SECOND variant file — four
  // identical to two variant across six files, and the divergences are a
  // spelling and a preposition, exactly the grain a deduplicating encoder
  // cannot see.
  { a: 'general.Heirarchs.matins.canons[0].odes.3.items[0]', b: 'general.Heirarchs.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (Beatitude adds "(Twice)").' },
  { a: 'general.Heirarchs.matins.canons[0].odes.3.items[1]', b: 'general.Heirarchs.liturgy.beatitudes[1]', relation: 'variant', note: 'ONE WORD. "hymn your sacred memory" in the canon (p8); "hymn your sacred memorial" at the Beatitudes (p13).' },
  { a: 'general.Heirarchs.matins.canons[0].odes.3.items[2]', b: 'general.Heirarchs.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Heirarchs.matins.canons[0].odes.6.items[0]', b: 'general.Heirarchs.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Heirarchs.matins.canons[0].odes.6.items[1]', b: 'general.Heirarchs.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Heirarchs.matins.canons[0].odes.6.items[2]', b: 'general.Heirarchs.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Heirarchs.matins.canons[0].odes.6.items[3]', b: 'general.Heirarchs.liturgy.beatitudes[6]', relation: 'variant', note: 'ONE PREPOSITION. "Born from the Virgin" in the canon (p9); "Born of the Virgin" at the Beatitudes (p13) — while BOTH sites print the "Thou hast, enlightened" comma (sic register, both rows).' },

  // WITHIN THE FILE
  { a: 'general.Heirarchs.vespers.aposticha_glory', b: 'general.Heirarchs.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the Vespers aposticha Glory byte for byte — the Heirarch pattern, in the plural file.' },
  { a: 'general.Heirarchs.kontakion', b: 'general.Heirarchs.liturgy.liturgy_kontakion', relation: 'variant',
    note: 'ONE PHRASE. "us who with love honor you" after Ode VI (p9); "us who lovingly honor you" at the Liturgy (p13). R-1 at the Unmercenaries boundary, now on a kontakion: the canonical field claims p9 only.' },
  { a: 'general.Heirarchs.vespers.aposticha_alternate', b: 'general.Heirarchs.matins.praises_closer', relation: 'variant',
    note: 'ONE BREAK. The "true vine" theotokion without a break after "O Lady," at p4, with one at p11. Same file, same hymn, two pointings.' },
  { a: 'general.Heirarchs.matins.prokeimenon', b: 'general.Heirarchs.liturgy.prokeimenon', relation: 'identical',
    note: 'Identical text at two DECLARED TONES — IV at Matins, VII at the Liturgy. Heirarch\'s IV-against-I pattern at new tones; §7.4 compares the texts and stays silent because they agree.' },
  { a: 'general.Heirarchs.matins.prokeimenon_verse', b: 'general.Heirarchs.liturgy.prokeimenon_verse', relation: 'variant',
    note: 'ONE CAPITAL. "all that he hath rendered" at Matins (p6); "He" at the Liturgy (p13). Monastic prints the same divergence between the same two positions.' },
  { a: 'general.Heirarchs.vespers.aposticha[3]', b: 'general.Heirarchs.liturgy.alleluia', relation: 'variant',
    note: 'POINTED AGAINST PLAIN. "Thy priests shall be clothed" carries the * as an aposticha verse (p4) and no markers as the Alleluia (p14) — the judgement/judgment class from Heirarch, as pointing rather than spelling.' },

  // ACROSS FILES
  { a: 'general.Heirarchs.troparion', b: 'general.Monastics.troparion', relation: 'identical',
    note: '"O God of our fathers" — ONE GENERAL TROPARION SERVING TWO SAINT TYPES, byte-identical at all four Heirarchs sites and at Monastics. The strongest cross-file recurrence in the book so far: not a theotokion or a psalm verse but the proper troparion itself.' },
  { a: 'general.Heirarchs.vespers.lic_stavrotheotokion', b: 'general.Martyrs.vespers.lic_stavrotheotokion', relation: 'identical',
    note: 'All 444 characters, including both spaces before question marks — the THIRD print site of the "at Thy voluntary crucifixion" form, which Unmercenaries prints as "of Thy" (that variant pair is already registered).' },
  { a: 'general.Heirarchs.vespers.dogmatikon', b: 'general.Martyr.vespers.dogmatikon', relation: 'identical',
    note: '"Who doth not call thee blessed" — the Tone VI dogmatic, byte-identical also in Monastic and Monastics.' },
  { a: 'general.Heirarchs.vespers.dogmatikon', b: 'octoechos:tone6.great_vespers.dogmatikon', relation: 'variant',
    note: 'FIRST CROSS-BOOK PAIR (§10.4). TWO BYTES: the Menaion prints "By nature he is God" and "for our sakes, he hath become" lowercase, in all four of its copies; the Octoechos Tone 6 Great Vespers copy capitalises both. The gate skips pairs into books not loaded this run — this row is checked by eye until octoechos roots are wired in.' },
  { a: 'general.Heirarchs.vespers.dogmatikon_alternate', b: 'general.Heirarch.matins.praises_closer', relation: 'identical',
    note: '"We have come to know God" — printed at four positions across four files (also Martyrs ×2, Martyr); chained to the sibling file.' },
  { a: 'general.Heirarchs.vespers.aposticha_closer', b: 'general.Martyrs.vespers.aposticha_closer', relation: 'identical',
    note: '"Christ the Lord, my Creator and Redeemer" — the Resurrection Theotokion, byte-identical also in Martyr, "Rejoice!," setting included.' },
  { a: 'general.Heirarchs.matins.anabathmoi[0]', b: 'general.Heirarch.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — six files, one text.' },
  { a: 'general.Heirarchs.matins.anabathmoi[1]', b: 'general.Heirarch.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — six files, one text.' },
  { a: 'general.Heirarchs.matins.anabathmoi_closer', b: 'general.Heirarch.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — six files, one text.' },
  { a: 'general.Heirarchs.matins.psalm50_closer', b: 'general.Heirarch.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Heirarchs.matins.psalm50_verse', b: 'general.Heirarch.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.Heirarchs.matins.megalynarion_verse', b: 'general.Heirarch.matins.megalynarion_verse', relation: 'identical',
    note: '"inhabit the World" — the CAPITAL travels with the verse at the Megalynarion position: identical in both files here, lowercase at Heirarch\'s own Liturgy site (that variant pair is already registered).' },
  { a: 'general.Heirarchs.matins.praises_stavrotheotokion', b: 'general.Martyr.vespers.aposticha_stavrotheotokion', relation: 'identical',
    note: '"The most pure one seeing Thee hanging" — a VESPERS aposticha stavrotheotokion in Martyr and Unmercenaries, printed at the PRAISES here. Same text, different service, third file.' },
  { a: 'general.Heirarchs.liturgy.communion_verse', b: 'general.Martyr.liturgy.communion_verse', relation: 'identical',
    note: 'The semicolon-and-capital setting — against Heirarch\'s comma-and-lowercase (that variant pair is already registered).' },
  { a: 'general.Heirarchs.matins.canons[0].odes.4.irmos', b: 'general.Monastic.matins.canons[0].odes.4.irmos', relation: 'identical', note: 'Ode IV irmos "O Lord, I have heard the mystery".' },
  { a: 'general.Heirarchs.matins.canons[0].odes.5.irmos', b: 'general.Monastic.matins.canons[0].odes.5.irmos', relation: 'identical', note: 'Ode V irmos "Rising early we cry to Thee" — third file on this irmos.' },
  { a: 'general.Heirarchs.matins.canons[0].odes.7.irmos', b: 'general.Unmercenaries.matins.canons[0].odes.7.irmos', relation: 'identical', note: 'Ode VII irmos "O Thou who in the beginning founded the earth".' },
  { a: 'general.Heirarchs.matins.canons[0].odes.8.irmos', b: 'general.Unmercenaries.matins.canons[0].odes.8.irmos', relation: 'identical', note: 'Ode VIII irmos "Glorified in the holy mountain".' },

  // ── Apostle.pdf ────────────────────────────────────────────────────────────
  // BEATITUDES BYTE-IDENTICAL AT ALL SEVEN — five files identical, two variant.
  { a: 'general.Apostle.matins.canons[0].odes.3.items[0]', b: 'general.Apostle.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (Beatitude adds "(Twice)").' },
  { a: 'general.Apostle.matins.canons[0].odes.3.items[1]', b: 'general.Apostle.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Apostle.matins.canons[0].odes.3.items[2]', b: 'general.Apostle.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Apostle.matins.canons[0].odes.6.items[0]', b: 'general.Apostle.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Apostle.matins.canons[0].odes.6.items[1]', b: 'general.Apostle.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Apostle.matins.canons[0].odes.6.items[2]', b: 'general.Apostle.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Apostle.matins.canons[0].odes.6.items[3]', b: 'general.Apostle.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7 — including the "one; to be" semicolon at both sites (sic register, both rows).' },

  // WITHIN THE FILE — the four-site troparion split and the two-translation hymn.
  { a: 'general.Apostle.troparion', b: 'general.Apostle.matins.doxology_troparion', relation: 'variant',
    note: 'THE UNMERCENARIES SPLIT, SECOND FILE: p4/p5 print `sins ** unto`, p12/p13 a single `*`. Canonical claims the two ** sites; the * sites are per-position. A penultimate marker is a singable fact.' },
  { a: 'general.Apostle.matins.doxology_troparion', b: 'general.Apostle.liturgy.liturgy_troparion', relation: 'identical',
    note: 'The two single-asterisk sites agree with each other.' },
  { a: 'general.Apostle.vespers.aposticha_glory', b: 'general.Apostle.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the Vespers aposticha Glory byte for byte — third file with this pattern.' },
  { a: 'general.Apostle.vespers.aposticha_glory', b: 'general.Apostle.matins.praises_glory', relation: 'variant',
    note: 'ONE HYMN, TWO TRANSLATIONS, ONE FILE. "Leaving earthly cares O Apostle (name), * and having followed Christ" against "O Apostle (name); * having given up earthly things * thou hast followed Christ" — tortures/torments, mankind/men, differing throughout. Three print sites; two renderings. The strongest single-file argument yet that a hymn-keyed deduplication would rewrite the book.' },

  // ACROSS FILES
  { a: 'general.Apostle.vespers.dogmatikon', b: 'general.Heirarchs.vespers.dogmatikon', relation: 'variant',
    note: 'THE FIFTH PRINT SITE OF THE TONE VI DOGMATIC AND THE FIRST TO DIVERGE: "O pure and all-blessed one" against the four files\' "most blessed". The cross-book octoechos row sits on Heirarchs\' copy.' },
  { a: 'general.Apostle.vespers.dogmatikon_stavrotheotokion', b: 'general.Heirarchs.vespers.dogmatikon_stavrotheotokion', relation: 'variant',
    note: 'ONE PREPOSITION — "gaveth birth unto Thee" against Heirarchs\' "to Thee" — while BOTH print "O my Son How is it that Thou diest?," letter for letter. The defect travels with the hymn; the wording does not quite.' },
  { a: 'general.Apostle.matins.sessional_polyeleos_closer', b: 'general.Heirarch.matins.sessional_polyeleos_closer', relation: 'variant',
    note: 'TWO INTENSIFIERS, SWAPPED: "the most holy mountain … thine all-holy Offspring" here; "the all-holy mountain … thy most holy Offspring" in Heirarch. Same theotokion, same positions, exchanged epithets.' },
  { a: 'general.Apostle.matins.sessional_ode3_closer', b: 'general.Heirarchs.matins.sessional_ode3_closer', relation: 'identical',
    note: '"Whither doth each one who is saved" — the post-Ode-III closer travels intact.' },
  { a: 'general.Apostle.matins.sessional_ode3_stavrotheotokion', b: 'general.Heirarchs.matins.sessional_ode3_stavrotheotokion', relation: 'identical',
    note: '"Having obtained the Cross of thy Son" — with its closer, a travelling pair.' },
  { a: 'general.Apostle.matins.canons[0].odes.6.irmos', b: 'general.Heirarchs.matins.canons[0].odes.6.irmos', relation: 'identical',
    note: 'Ode VI irmos "O Thou that puttest on light as a garment" — third canon on this irmos (also Compline-class in the Octoechos corpus; in-book pair chained here).' },
  { a: 'general.Apostle.matins.anabathmoi[0]', b: 'general.Heirarchs.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — seven files, one text.' },
  { a: 'general.Apostle.matins.anabathmoi[1]', b: 'general.Heirarchs.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — seven files, one text.' },
  { a: 'general.Apostle.matins.anabathmoi_closer', b: 'general.Heirarchs.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — seven files, one text.' },
  { a: 'general.Apostle.matins.psalm50_closer', b: 'general.Heirarchs.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50 — here its label carries a tone, the text does not change.' },
  { a: 'general.Apostle.matins.psalm50_verse', b: 'general.Heirarchs.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },

  // ── Apostles.pdf ───────────────────────────────────────────────────────────
  // BEATITUDES BYTE-IDENTICAL AT ALL SEVEN — six files identical, two variant.
  { a: 'general.Apostles.matins.canons[0].odes.3.items[0]', b: 'general.Apostles.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (Beatitude adds "(Twice)").' },
  { a: 'general.Apostles.matins.canons[0].odes.3.items[1]', b: 'general.Apostles.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Apostles.matins.canons[0].odes.3.items[2]', b: 'general.Apostles.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Apostles.matins.canons[0].odes.6.items[0]', b: 'general.Apostles.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Apostles.matins.canons[0].odes.6.items[1]', b: 'general.Apostles.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Apostles.matins.canons[0].odes.6.items[2]', b: 'general.Apostles.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Apostles.matins.canons[0].odes.6.items[3]', b: 'general.Apostles.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7.' },

  // WITHIN THE FILE
  { a: 'general.Apostles.troparion', b: 'general.Apostles.vespers.dismissal_troparion', relation: 'variant',
    note: 'THE FOUR-SITE SPLIT, INVERTED: God-is-the-Lord, after-Our-Father and the Liturgy print `sins ** unto`; the VESPERS DISMISSAL prints a single `*`. In Apostle the Vespers site was canonical and the tail sites diverged; here the Vespers site is the odd one out. Third file with a four-site two-form troparion.' },
  { a: 'general.Apostles.kontakion', b: 'general.Apostles.liturgy.liturgy_kontakion', relation: 'variant',
    note: 'TWO DIVERGENCES: "O wise Apostles" with `* that we may` at p10; "O MOST wise Apostles" with `** that we may` at p13. The kontakion self-divergence, third file — a wording AND a pointing at once.' },
  { a: 'general.Apostles.vespers.aposticha_glory', b: 'general.Apostles.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the Vespers aposticha Glory byte for byte — fourth file, "Like Vessels" capital included.' },
  { a: 'general.Apostles.vespers.aposticha_alternate', b: 'general.Apostles.matins.praises_closer', relation: 'identical',
    note: '"Having thee O Theotokos" — the Otherwise-Theotokion reprinted as the Praises Both-now, byte-identical.' },
  { a: 'general.Apostles.vespers.lic_stavrotheotokion', b: 'general.Apostles.matins.praises_stavrotheotokion', relation: 'variant',
    note: 'ONE POINTING BREAK: the Praises reprint drops the `*` after "lance," — otherwise byte-identical. Same file, same hymn, two pointings.' },
  { a: 'general.Apostles.matins.prokeimenon', b: 'general.Apostles.liturgy.prokeimenon', relation: 'identical',
    note: 'Identical text at tones IV and VIII — the per-site tone pattern, fourth file.' },

  // ACROSS FILES
  { a: 'general.Apostles.vespers.dogmatikon', b: 'general.Heirarch.vespers.dogmatikon', relation: 'identical',
    note: 'The Tone VIII dogmatic "In His love for mankind" — byte-identical across the two files that print it, while the Tone VI family just produced its first divergence. Two dogmatic families, two behaviours.' },
  { a: 'general.Apostles.vespers.lic_stavrotheotokion', b: 'general.Heirarchs.vespers.lic_stavrotheotokion', relation: 'variant',
    note: 'THE 444-CHARACTER FAMILY IN A THIRD RENDERING: "I marvel, O Compassionate One, at Thy voluntary crucifixion!" against "I stand in awe … at Thy" (Martyrs/Heirarchs) and "of Thy" (Unmercenaries). Five print sites, four forms.' },
  { a: 'general.Apostles.matins.sessional_polyeleos_closer', b: 'general.Heirarchs.matins.sessional_2_closer', relation: 'identical',
    note: '"Without separating Himself" — byte-identical INCLUDING "He had became a man" (sic register, third site) — and it travels between DIFFERENT sessional positions: sessional-2 closer there, post-Polyeleos closer here.' },
  { a: 'general.Apostles.matins.sessional_ode3', b: 'general.Apostle.matins.sessional_polyeleos', relation: 'variant',
    note: 'ONE HYMN, TWO RENDERINGS, TWO POSITIONS, TWO FILES: "With a net of divine words * thou hast caught the spiritual fish" (Apostle, post-Polyeleos) against "With the net of divine words * you caught the rational fish" (here, post-Ode-III). The Spec. Mel. is cited "Of the wisdom ..." there and "Of the Wisdom ..." here.' },
  { a: 'general.Apostles.liturgy.alleluia', b: 'general.Apostle.liturgy.alleluia', relation: 'identical',
    note: '"The heavens shall confess thy wonders" — the apostolic Alleluia, shared by the pair.' },
  { a: 'general.Apostles.liturgy.alleluia_verse', b: 'general.Apostle.liturgy.alleluia_verse', relation: 'identical',
    note: 'Its verse likewise.' },
  { a: 'general.Apostles.matins.anabathmoi[0]', b: 'general.Apostle.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — eight files, one text.' },
  { a: 'general.Apostles.matins.anabathmoi[1]', b: 'general.Apostle.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — eight files, one text.' },
  { a: 'general.Apostles.matins.anabathmoi_closer', b: 'general.Apostle.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — eight files, one text.' },
  { a: 'general.Apostles.matins.psalm50_closer', b: 'general.Apostle.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Apostles.matins.psalm50_verse', b: 'general.Apostle.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },

  // ── Angels.pdf ─────────────────────────────────────────────────────────────
  // BEATITUDES: a NEW SHAPE (six items — Ode III ×3, Ode VI 1-2, Ode VI
  // Theotokion; Ode VI troparion 3 NOT taken; (Twice) on items 1 AND 4) and
  // every item byte-identical to its canon site. SEVEN files identical, two
  // variant.
  { a: 'general.Angels.matins.canons[0].odes.3.items[0]', b: 'general.Angels.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (Beatitude adds "(Twice)").' },
  { a: 'general.Angels.matins.canons[0].odes.3.items[1]', b: 'general.Angels.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Angels.matins.canons[0].odes.3.items[2]', b: 'general.Angels.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Angels.matins.canons[0].odes.6.items[0]', b: 'general.Angels.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4 (Beatitude adds "(Twice)" — the first mid-array repeat).' },
  { a: 'general.Angels.matins.canons[0].odes.6.items[1]', b: 'general.Angels.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Angels.matins.canons[0].odes.6.items[3]', b: 'general.Angels.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 6 — "siteth" spelling at both sites (sic register, both rows). Ode VI troparion 3 is not taken into the Beatitudes at all.' },

  // WITHIN THE FILE
  { a: 'general.Angels.troparion', b: 'general.Angels.matins.doxology_glory', relation: 'variant',
    note: 'THE TROPARION IN TWO TRANSLATIONS: "O supreme commanders of the heavenly hosts, * we entreat you … encompass us … from all misfortunes, ** for ye are the commanders of the hosts on high" at four sites; "Supreme Leaders of the Heavenly Hosts, * we implore you … encircle us … from dangers, ** for you are the commanders of the powers above" as the Doxasticon. Apostle\'s two-rendering Glory, now on the proper troparion itself — and the register lint independently flags the second rendering\'s modern "you".' },
  { a: 'general.Angels.vespers.aposticha_closer', b: 'general.Angels.matins.sessional_post50', relation: 'variant',
    note: 'ONE HYMN, TWO NUMBERS: "As the defenders and commanders of the Angels, O Supreme Leaders …" (plural, Glory-Both-now at the aposticha) against "As the chief defender and leader of Angels, do thou, O Supreme Commander (name) …" (singular, the For-One post-Psalm-50 sessional). The one/many axis as a recurrence.' },
  { a: 'general.Angels.vespers.lic_glory', b: 'general.Angels.vespers.dogmatikon_alternate', relation: 'variant',
    note: '"Rejoice with us, all ye angelic orders …" re-set as "Rejoice with us, all ye choirs of virgins …" — one opening, two subjects, facing pages.' },
  { a: 'general.Angels.matins.prokeimenon', b: 'general.Angels.liturgy.prokeimenon', relation: 'identical',
    note: 'Identical text at the SAME tone (IV) — first file whose two prokeimena agree in tone as well as text.' },

  // ACROSS FILES
  { a: 'general.Angels.vespers.dogmatikon', b: 'general.Heirarchs.vespers.dogmatikon', relation: 'identical',
    note: 'SIXTH print site of the Tone VI dogmatic — five byte-identical sites (Monastic, Monastics, Martyr, Heirarchs, Angels) against Apostle\'s lone "all-blessed".' },
  { a: 'general.Angels.matins.doxology_stavrotheotokion', b: 'general.Apostles.vespers.lic_stavrotheotokion', relation: 'identical',
    note: 'The "I marvel" rendering of the 444-family, byte-identical — printed at the DOXOLOGY here, at the LIC there. Sixth print site of the family.' },
  { a: 'general.Angels.matins.canons[0].odes.1.irmos', b: 'general.Apostle.matins.canons[0].odes.1.irmos', relation: 'identical', note: 'Ode I irmos "Let us, O ye people" — shared by the apostolic canon.' },
  { a: 'general.Angels.matins.canons[0].odes.5.irmos', b: 'general.Apostle.matins.canons[0].odes.5.irmos', relation: 'identical', note: 'Ode V irmos "Thou hast enlightened".' },
  { a: 'general.Angels.matins.canons[0].odes.7.irmos', b: 'general.Apostle.matins.canons[0].odes.7.irmos', relation: 'identical', note: 'Ode VII irmos "The Hebrew children in the furnace".' },
  { a: 'general.Angels.matins.canons[0].odes.8.irmos', b: 'general.Heirarchs.matins.canons[0].odes.8.irmos', relation: 'identical', note: 'Ode VIII irmos "Glorified in the holy mountain".' },
  { a: 'general.Angels.matins.anabathmoi[0]', b: 'general.Apostles.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — nine files, one text.' },
  { a: 'general.Angels.matins.anabathmoi[1]', b: 'general.Apostles.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — nine files, one text.' },
  { a: 'general.Angels.matins.anabathmoi_closer', b: 'general.Apostles.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — nine files, one text.' },
  { a: 'general.Angels.matins.psalm50_closer', b: 'general.Apostles.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Angels.matins.psalm50_verse', b: 'general.Apostles.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },

  // ── MonasticMartyrs.pdf ────────────────────────────────────────────────────
  // BEATITUDES: all seven byte-identical — EIGHT files identical, two variant —
  // and NO (Twice) anywhere, the first file that does not double a Beatitude.
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.3.items[0]', b: 'general.MonasticMartyrs.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (no repeat device).' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.3.items[1]', b: 'general.MonasticMartyrs.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.3.items[2]', b: 'general.MonasticMartyrs.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.6.items[0]', b: 'general.MonasticMartyrs.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.6.items[1]', b: 'general.MonasticMartyrs.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.6.items[2]', b: 'general.MonasticMartyrs.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.6.items[3]', b: 'general.MonasticMartyrs.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7.' },
  { a: 'general.MonasticMartyrs.vespers.aposticha_glory', b: 'general.MonasticMartyrs.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the aposticha Glory byte for byte — fifth file with the pattern.' },
  { a: 'general.MonasticMartyrs.vespers.aposticha[3]', b: 'general.MonasticMartyrs.liturgy.alleluia', relation: 'variant',
    note: 'POINTED AGAINST PLAIN — "Blessed is the man that feareth the Lord" with the * as an aposticha verse, without as the Alleluia. The Heirarchs class, third file.' },

  // ACROSS FILES
  { a: 'general.MonasticMartyrs.troparion', b: 'general.Heirarchs.troparion', relation: 'identical',
    note: '"O God of our fathers" — THIRD file on one general troparion (Monastics, Heirarchs, MonasticMartyrs), byte-identical at all four sites here.' },
  { a: 'general.MonasticMartyrs.vespers.dogmatikon', b: 'general.Apostles.vespers.dogmatikon', relation: 'identical',
    note: 'THIRD byte-identical site of the Tone VIII dogmatic — the second dogmatic family still travelling intact while the Tone VI family carries one divergence in six.' },
  { a: 'general.MonasticMartyrs.vespers.dogmatikon_alternate', b: 'general.Heirarch.vespers.dogmatikon_alternate', relation: 'identical',
    note: '"Thy shelter, O Virgin Theotokos" — the Otherwise-Theotokia circulate independently of their hosts.' },
  { a: 'general.MonasticMartyrs.vespers.aposticha_alternate', b: 'general.Apostle.vespers.dogmatikon_alternate', relation: 'identical',
    note: '"No one that fleeth" — printed as a DOGMATIKON alternate in Apostle and an APOSTICHA alternate here: same text, different slots, different files.' },
  { a: 'general.MonasticMartyrs.vespers.aposticha_closer', b: 'general.Heirarchs.vespers.aposticha_closer', relation: 'variant',
    note: 'ONE WORD DROPPED from ~460 characters: "Rejoice!, O Lady" here against "Rejoice!, O Sovereign Lady" in Heirarchs. The Resurrection Theotokion, third file, second form.' },
  { a: 'general.MonasticMartyrs.matins.sessional_2_closer', b: 'general.Apostles.matins.sessional_ode3_closer', relation: 'identical',
    note: '"All we, the generations" — at the SESSIONAL-2 slot here, post-Ode-III in Apostles, sessional-2 in Heirarchs: one theotokion, three slots, three files.' },
  { a: 'general.MonasticMartyrs.matins.sessional_ode3_closer', b: 'general.Apostle.vespers.lic_closer', relation: 'identical',
    note: '"To the Theotokos we the sinful" — LIC closer in Apostle, post-Ode-III closer here. Third migrating theotokion.' },
  { a: 'general.MonasticMartyrs.matins.praises_closer', b: 'general.Heirarch.matins.sessional_ode3_closer', relation: 'variant',
    note: 'ONE PREPOSITION — "incarnate FROM thee" against Heirarch\'s "incarnate of thee". Same hymn, different slots, one word.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.1.irmos', b: 'general.Apostles.matins.canons[0].odes.1.irmos', relation: 'identical',
    note: 'Ode I irmos byte-identical INCLUDING the Moses” curly-quote defect — the defect travels with the irmos (sic register, both files).' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.4.irmos', b: 'general.Apostles.matins.canons[0].odes.4.irmos', relation: 'variant',
    note: 'ONE COMMA AND ONE CAPITAL — "righteousness, * lifted up upon the Cross" against "righteousness * lifted up upon the cross". Same irmos, two settings.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.5.irmos', b: 'general.Apostles.matins.canons[0].odes.5.irmos', relation: 'identical', note: 'Ode V irmos "Thou, O Lord, who camest".' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.6.irmos', b: 'general.Apostles.matins.canons[0].odes.6.irmos', relation: 'identical',
    note: 'Ode VI irmos byte-identical INCLUDING the stray demons” quote — the second defect travelling with an irmos.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.7.irmos', b: 'general.Apostles.matins.canons[0].odes.7.irmos', relation: 'variant',
    note: '"rather than by a flame of fire, * cried aloud saying" against "rather than by the flame of a fire, * cried out aloud saying". Same irmos, two settings.' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.8.irmos', b: 'general.Apostles.matins.canons[0].odes.8.irmos', relation: 'identical', note: 'Ode VIII irmos "Having spread his hands, Daniel".' },
  { a: 'general.MonasticMartyrs.matins.canons[0].odes.9.irmos', b: 'general.Apostles.matins.canons[0].odes.9.irmos', relation: 'identical', note: 'Ode IX irmos "A cornerstone not cut by hand".' },
  { a: 'general.MonasticMartyrs.matins.anabathmoi[0]', b: 'general.Angels.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — ten files, one text.' },
  { a: 'general.MonasticMartyrs.matins.anabathmoi[1]', b: 'general.Angels.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — ten files, one text.' },
  { a: 'general.MonasticMartyrs.matins.anabathmoi_closer', b: 'general.Angels.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — ten files, one text.' },
  { a: 'general.MonasticMartyrs.matins.psalm50_closer', b: 'general.Angels.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.MonasticMartyrs.matins.psalm50_verse', b: 'general.Angels.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.MonasticMartyrs.liturgy.communion_verse', b: 'general.Martyrs.liturgy.communion_verse', relation: 'variant',
    note: 'ONE CAPITAL — "O ye righteous" against Martyrs/Unmercenaries\' "O ye Righteous". The martyric communion verse, third file, second form.' },

  // ── Martyress.pdf ──────────────────────────────────────────────────────────
  // BEATITUDES: seven of seven byte-identical, no (Twice) — NINE files
  // identical, two variant.
  { a: 'general.Martyress.matins.canons[0].odes.3.items[0]', b: 'general.Martyress.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1.' },
  { a: 'general.Martyress.matins.canons[0].odes.3.items[1]', b: 'general.Martyress.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Martyress.matins.canons[0].odes.3.items[2]', b: 'general.Martyress.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Martyress.matins.canons[0].odes.6.items[0]', b: 'general.Martyress.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Martyress.matins.canons[0].odes.6.items[1]', b: 'general.Martyress.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Martyress.matins.canons[0].odes.6.items[2]', b: 'general.Martyress.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Martyress.matins.canons[0].odes.6.items[3]', b: 'general.Martyress.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7.' },
  { a: 'general.Martyress.vespers.aposticha_glory', b: 'general.Martyress.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the aposticha Glory byte for byte — sixth file with the pattern.' },
  { a: 'general.Martyress.vespers.lic_glory', b: 'general.Martyress.matins.sessional_post50', relation: 'variant',
    note: 'ONE HYMN, TWO SETTINGS, ONE FILE: the Idiomelon Glory ("At the right hand of the Savior") reprinted as the post-Psalm-50 sessional with martyr→Martyr, all-powerful→All-powerful, and the final break demoted ** → *. The Apostle two-rendering class in miniature.' },
  { a: 'general.Martyress.vespers.dogmatikon_stavrotheotokion', b: 'general.Martyress.matins.praises_stavrotheotokion', relation: 'variant',
    note: 'ONE HYMN, TWO RENDERINGS, ONE FILE: "how is it that Thou sufferest such a shameful death" at the dogmatic slot; "how dost Thou endure this shameful suffering" at the Praises.' },

  // ACROSS FILES
  { a: 'general.Martyress.vespers.dogmatikon', b: 'general.Angels.vespers.dogmatikon', relation: 'identical',
    note: 'SEVENTH print site of the Tone VI dogmatic — six byte-identical against Apostle\'s lone "all-blessed".' },
  { a: 'general.Martyress.vespers.dogmatikon_alternate', b: 'general.MonasticMartyrs.vespers.aposticha_alternate', relation: 'identical',
    note: '"No one that fleeth" — third file, third slot (dogmatic alternate here, aposticha alternate there, dogmatic alternate in Apostle).' },
  { a: 'general.Martyress.vespers.dogmatikon_stavrotheotokion', b: 'general.Heirarchs.matins.praises_stavrotheotokion', relation: 'identical',
    note: 'Byte-identical ACROSS SLOTS: Heirarchs prints this hymn at the PRAISES, Martyress at the dogmatic slot. Fourth migrating text between position classes.' },
  { a: 'general.Martyress.vespers.lic_stavrotheotokion', b: 'general.Apostle.vespers.lic_stavrotheotokion', relation: 'variant',
    note: 'A THIRD RENDERING of the "Lamb and Shepherd" family: "the ewe-lamb who gave birth to Thee lamented and maternally cried aloud" against Apostle\'s "who bore Thee lamented, and maternally exclaimed". Its closing quote is never printed (sic).' },
  { a: 'general.Martyress.vespers.aposticha_alternate', b: 'general.Angels.matins.praises_closer', relation: 'identical',
    note: '"We bless thee, O Virgin Theotokos" — Angels\' Praises Both-now printed as the aposticha Otherwise here. Fifth migrating theotokion.' },
  { a: 'general.Martyress.matins.canons[0].odes.1.irmos', b: 'general.Heirarchs.matins.canons[0].odes.1.irmos', relation: 'identical', note: 'Ode I irmos "Let us sing unto the Lord" — the Tone VIII canon opener, second file.' },
  { a: 'general.Martyress.matins.canons[0].odes.4.irmos', b: 'general.Heirarchs.matins.canons[0].odes.4.irmos', relation: 'identical', note: 'Ode IV irmos "O Lord, I have heard the mystery" — third file.' },
  { a: 'general.Martyress.matins.canons[0].odes.5.irmos', b: 'general.Heirarchs.matins.canons[0].odes.5.irmos', relation: 'identical', note: 'Ode V irmos "Rising early we cry to Thee" — fourth file.' },
  { a: 'general.Martyress.matins.canons[0].odes.6.irmos', b: 'general.Heirarchs.matins.canons[0].odes.6.irmos', relation: 'identical', note: 'Ode VI irmos "O Thou that puttest on light" — fourth file.' },
  { a: 'general.Martyress.matins.anabathmoi[0]', b: 'general.MonasticMartyrs.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — eleven files, one text.' },
  { a: 'general.Martyress.matins.anabathmoi[1]', b: 'general.MonasticMartyrs.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — eleven files, one text.' },
  { a: 'general.Martyress.matins.anabathmoi_closer', b: 'general.MonasticMartyrs.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — eleven files, one text.' },
  { a: 'general.Martyress.matins.psalm50_closer', b: 'general.MonasticMartyrs.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Martyress.matins.psalm50_verse', b: 'general.MonasticMartyrs.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.Martyress.matins.sessional_ode3_closer', b: 'general.MonasticMartyrs.matins.sessional_2_closer', relation: 'identical',
    note: '"All we, the generations" — FIFTH site, third slot class (sessional-2 / post-Ode-III both attested twice).' },
  { a: 'general.Martyress.matins.sessional_ode3_stavrotheotokion', b: 'general.Apostles.matins.sessional_ode3_stavrotheotokion', relation: 'identical',
    note: '"Upon beholding the Lamb, Shepherd and Redeemer" — the post-Ode-III closer+stav pair travels again, third file.' },
  { a: 'general.Martyress.matins.praises_closer', b: 'general.Heirarchs.vespers.dogmatikon_alternate', relation: 'identical',
    note: '"We have come to know God" — FIFTH site across five files.' },
  { a: 'general.Martyress.liturgy.communion_verse', b: 'general.MonasticMartyrs.liturgy.communion_verse', relation: 'variant',
    note: 'THE MARTYRIC COMMUNION VERSE, THIRD FORM: comma for the semicolon and NO final stop — the page ends at "upright". Martyrs/Unmercenaries: "Righteous;"; MonasticMartyrs: "righteous;"; here "righteous," unpunctuated end (sic).' },

  // ── Martyresses.pdf ────────────────────────────────────────────────────────
  // BEATITUDES: seven of seven byte-identical — TEN files identical, two
  // variant — with "now call the blessed" copied defect-for-defect (sic at
  // both sites).
  { a: 'general.Martyresses.matins.canons[0].odes.3.items[0]', b: 'general.Martyresses.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1 (Beatitude adds "(Twice)").' },
  { a: 'general.Martyresses.matins.canons[0].odes.3.items[1]', b: 'general.Martyresses.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Martyresses.matins.canons[0].odes.3.items[2]', b: 'general.Martyresses.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Martyresses.matins.canons[0].odes.6.items[0]', b: 'general.Martyresses.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Martyresses.matins.canons[0].odes.6.items[1]', b: 'general.Martyresses.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Martyresses.matins.canons[0].odes.6.items[2]', b: 'general.Martyresses.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Martyresses.matins.canons[0].odes.6.items[3]', b: 'general.Martyresses.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7 — "now call the blessed" at BOTH sites (sic register, both rows).' },

  // WITHIN THE FILE — one Glory, three sites, two forms; and two other reprints.
  { a: 'general.Martyresses.vespers.aposticha_glory', b: 'general.Martyresses.matins.doxology_glory', relation: 'identical',
    note: '"Setting aside as transient" — the Doxasticon reprints the aposticha Glory byte for byte. Seventh file with the pattern.' },
  { a: 'general.Martyresses.vespers.aposticha_glory', b: 'general.Martyresses.matins.sessional_post50', relation: 'variant',
    note: 'THE THIRD SITE IS A SECOND FORM: the post-Psalm-50 sessional REORDERS the Glory\'s clauses ("you were moved by the fairness of His beauty, * to devote" → "by the fairness of His beauty, * you were moved to devote") and reduces "passion-bearers" to "ones". One hymn, three sites, two forms.' },
  { a: 'general.Martyresses.vespers.aposticha_alternate', b: 'general.Martyresses.matins.doxology_alternate', relation: 'identical',
    note: '"O thou inextinguishable lamp" — printed with FULL TEXT at both the aposticha and the Doxology (a new doxology shape: Otherwise-with-text, no conditional label).' },
  { a: 'general.Martyresses.matins.sessional_ode3', b: 'general.Martyresses.ikos', relation: 'variant',
    note: 'THE IKOS IS THE SESSIONAL RE-RENDERED: "valiant endeavors … wondrous memorial" against "valiant feats … wondrous memory crying out …". One text, two functions, two renderings.' },

  // ACROSS FILES — the pair shares its stock, and the stock circulates wider.
  { a: 'general.Martyresses.vespers.lic_closer', b: 'general.Martyress.vespers.lic_closer', relation: 'identical',
    note: '"Thy supplications unto the Lord" — the singular/plural pair share their LIC theotokion byte for byte.' },
  { a: 'general.Martyresses.vespers.lic_stavrotheotokion', b: 'general.Apostle.vespers.lic_stavrotheotokion', relation: 'identical',
    note: 'Byte-identical to APOSTLE\'s copy, closure and all — while the singular Martyress prints a third rendering with the quote left open. The plural file and the apostolic file share a setting the singular does not.' },
  { a: 'general.Martyresses.vespers.dogmatikon', b: 'general.MonasticMartyrs.vespers.dogmatikon', relation: 'identical',
    note: 'FOURTH byte-identical site of the Tone VIII dogmatic.' },
  { a: 'general.Martyresses.vespers.dogmatikon_alternate', b: 'general.Heirarch.vespers.aposticha_alternate', relation: 'identical',
    note: '"O Sovereign lady, accept the supplications" — aposticha alternate in Heirarch, dogmatic alternate here. Sixth migrating theotokion.' },
  { a: 'general.Martyresses.vespers.aposticha_closer', b: 'general.Apostles.vespers.aposticha_closer', relation: 'identical',
    note: '"Mercifully regard the supplications" — the Resurrection Theotokion shared with Apostles. Seventh migrating theotokion.' },
  { a: 'general.Martyresses.vespers.aposticha_stavrotheotokion', b: 'general.Heirarchs.vespers.lic_stavrotheotokion', relation: 'identical',
    note: 'THE 444-FAMILY "at Thy" FORM AT A FOURTH SITE — LIC in Martyrs/Heirarchs, the APOSTICHA here. Byte-identical including both spaces before question marks.' },
  { a: 'general.Martyresses.matins.megalynarion_verse', b: 'general.Martyress.matins.megalynarion_verse', relation: 'identical',
    note: '"Our God is refuge and strength" — the pair share their megalynarion verse.' },
  { a: 'general.Martyresses.matins.sessional_ode3_closer', b: 'general.Martyress.matins.sessional_2_closer', relation: 'identical',
    note: '"Do thou accept, O Theotokos" — sessional-2 closer in the singular, post-Ode-III closer in the plural. The pair\'s theotokia migrate between slots.' },
  { a: 'general.Martyresses.matins.canons[0].odes.6.irmos', b: 'general.MonasticMartyrs.matins.canons[0].odes.6.irmos', relation: 'identical',
    note: 'Ode VI irmos "The church crieth out" — with the travelling demons” defect, THIRD file (sic register).' },
  { a: 'general.Martyresses.matins.anabathmoi[0]', b: 'general.Martyress.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — twelve files, one text.' },
  { a: 'general.Martyresses.matins.anabathmoi[1]', b: 'general.Martyress.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — twelve files, one text.' },
  { a: 'general.Martyresses.matins.anabathmoi_closer', b: 'general.Martyress.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — twelve files, one text.' },
  { a: 'general.Martyresses.matins.psalm50_closer', b: 'general.Martyress.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Martyresses.matins.psalm50_verse', b: 'general.Martyress.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.Martyresses.matins.praises_closer', b: 'general.Apostle.matins.praises_closer', relation: 'variant',
    note: '"All OF my hope DO I place ON thee" against Apostle\'s "All my hope I place IN thee" — one theotokion, two renderings, same slot, two files.' },
  { a: 'general.Martyresses.matins.praises_stavrotheotokion', b: 'general.Apostle.matins.praises_stavrotheotokion', relation: 'variant',
    note: '"beheld her Lamb willingly led as a man to the slaughter" against "saw her offspring as a man willingly dragged to the slaughter" — the same hymn re-rendered at the same slot in the pair-file of a different pair.' },
  { a: 'general.Martyresses.liturgy.alleluia', b: 'general.Martyress.liturgy.alleluia', relation: 'identical',
    note: 'The pair share their Alleluia, pointed identically.' },
  { a: 'general.Martyresses.liturgy.alleluia_verse', b: 'general.Martyress.liturgy.alleluia_verse', relation: 'identical', note: 'And its verse.' },
  { a: 'general.Martyresses.liturgy.communion_verse', b: 'general.Martyress.liturgy.communion_verse', relation: 'identical',
    note: 'Byte-identical INCLUDING THE MISSING FINAL STOP — "upright" ends the verse, the page and the file in both. The defect travels with the pair (sic register, both files).' },

  // ── Nun.pdf ────────────────────────────────────────────────────────────────
  { a: 'general.Nun.matins.canons[0].odes.3.items[0]', b: 'general.Nun.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1.' },
  { a: 'general.Nun.matins.canons[0].odes.3.items[1]', b: 'general.Nun.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Nun.matins.canons[0].odes.3.items[2]', b: 'general.Nun.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Nun.matins.canons[0].odes.6.items[0]', b: 'general.Nun.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Nun.matins.canons[0].odes.6.items[1]', b: 'general.Nun.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Nun.matins.canons[0].odes.6.items[2]', b: 'general.Nun.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Nun.matins.canons[0].odes.6.items[3]', b: 'general.Nun.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7 — "comliest" at BOTH sites (sic register, both rows). ELEVEN files identical, two variant.' },
  { a: 'general.Nun.vespers.lic_glory', b: 'general.Nun.matins.sessional_post50', relation: 'identical',
    note: 'The idiomelon Glory reprinted BYTE-FOR-BYTE as the post-Psalm-50 sessional — "thou dist water" included at both sites. The Martyress pattern, exact instead of re-set.' },
  { a: 'general.Nun.vespers.aposticha_glory', b: 'general.Nun.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the aposticha Glory — eighth file with the pattern.' },
  { a: 'general.Nun.vespers.dogmatikon', b: 'octoechos:tone2.great_vespers.dogmatikon', relation: 'variant',
    note: 'THE SECOND CROSS-BOOK PAIR: the Tone II dogmatic, TWO BYTES off the Octoechos copy (a capitalised Bush and one more at offset 168) — the Tone VI class exactly. Checked by eye until octoechos roots are wired into the gate.' },
  { a: 'general.Nun.vespers.lic_stavrotheotokion', b: 'general.Heirarch.vespers.aposticha_stavrotheotokion', relation: 'variant',
    note: 'ONE WORD INSERTED: "Thou hast redeemed OF all from corruption" against Heirarch\'s "redeemed all". The insertion is itself a sic; the hymn otherwise travels intact.' },
  { a: 'general.Nun.vespers.aposticha_stavrotheotokion', b: 'general.Heirarchs.vespers.dogmatikon_stavrotheotokion', relation: 'identical',
    note: 'Heirarchs\' dogmatic stav byte-for-byte — "O my Son How is it that Thou diest?," included: the defect\'s THIRD file, and the hymn migrates dogmatic-slot → aposticha.' },
  { a: 'general.Nun.vespers.aposticha_closer', b: 'general.Heirarchs.vespers.aposticha_alternate', relation: 'variant',
    note: 'THE TRUE VINE, FOURTH FORM — "Pray thou, O Lady, with the venerable (name)" for "with the holy apostles": the general theotokion ADAPTED to its saint type, with (name) inside a theotokion for the first time.' },
  { a: 'general.Nun.vespers.dogmatikon_stavrotheotokion', b: 'general.Martyresses.matins.praises_stavrotheotokion', relation: 'variant',
    note: '"Upon beholding her Lamb led of His own will to the slaughter as a man" against "beheld her Lamb willingly led as a man to the slaughter" — a third rendering of the family, and the first stavrotheotokion printed WITH a Spec. Mel.' },
  { a: 'general.Nun.matins.praises_stavrotheotokion', b: 'general.Martyresses.vespers.dogmatikon_stavrotheotokion', relation: 'variant',
    note: '"When the most pure one beheld Thee * hanging upon the Cross in the flesh, * with a broken heart she cried aloud in tears" — third rendering of that family too.' },
  { a: 'general.Nun.matins.megalynarion_verse', b: 'general.MonasticMartyrs.matins.megalynarion_verse', relation: 'identical',
    note: '"With patience I waited patiently" — the We-bless megalynarion formula and its verse shared with MonasticMartyrs.' },
  { a: 'general.Nun.matins.canons[0].odes.4.irmos', b: 'general.Martyress.matins.canons[0].odes.4.irmos', relation: 'identical', note: 'Ode IV irmos, fourth file.' },
  { a: 'general.Nun.matins.canons[0].odes.5.irmos', b: 'general.Martyress.matins.canons[0].odes.5.irmos', relation: 'identical', note: 'Ode V irmos, fifth file.' },
  { a: 'general.Nun.matins.canons[0].odes.6.irmos', b: 'general.Martyress.matins.canons[0].odes.6.irmos', relation: 'identical', note: 'Ode VI irmos, fifth file.' },
  { a: 'general.Nun.matins.canons[0].odes.7.irmos', b: 'general.Apostle.matins.canons[0].odes.7.irmos', relation: 'identical', note: 'Ode VII irmos "The Hebrew children" — the Apostle form exactly (MonasticMartyrs prints the variant).' },
  { a: 'general.Nun.matins.anabathmoi[0]', b: 'general.Martyresses.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — thirteen files, one text.' },
  { a: 'general.Nun.matins.anabathmoi[1]', b: 'general.Martyresses.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — thirteen files, one text.' },
  { a: 'general.Nun.matins.anabathmoi_closer', b: 'general.Martyresses.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — thirteen files, one text.' },
  { a: 'general.Nun.matins.psalm50_closer', b: 'general.Martyresses.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Nun.matins.psalm50_verse', b: 'general.Martyresses.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.Nun.liturgy.alleluia', b: 'general.Martyress.liturgy.alleluia', relation: 'identical', note: '"I waited patiently" — the female-saint Alleluia, third file.' },
  { a: 'general.Nun.liturgy.alleluia_verse', b: 'general.Martyress.liturgy.alleluia_verse', relation: 'identical', note: 'And its verse.' },
  { a: 'general.Nun.liturgy.communion_verse', b: 'general.Martyress.liturgy.communion_verse', relation: 'variant',
    note: 'A FOURTH form of the martyric-class communion verse — the Martyress comma form WITH its final stop restored.' },

  // ── Nuns.pdf ───────────────────────────────────────────────────────────────
  { a: 'general.Nuns.matins.canons[0].odes.3.items[0]', b: 'general.Nuns.liturgy.beatitudes[0]', relation: 'identical', note: 'Ode III troparion 1 = Beatitude 1.' },
  { a: 'general.Nuns.matins.canons[0].odes.3.items[1]', b: 'general.Nuns.liturgy.beatitudes[1]', relation: 'identical', note: 'Ode III troparion 2 = Beatitude 2.' },
  { a: 'general.Nuns.matins.canons[0].odes.3.items[2]', b: 'general.Nuns.liturgy.beatitudes[2]', relation: 'identical', note: 'Ode III troparion 3 = Beatitude 3.' },
  { a: 'general.Nuns.matins.canons[0].odes.6.items[0]', b: 'general.Nuns.liturgy.beatitudes[3]', relation: 'identical', note: 'Ode VI troparion 1 = Beatitude 4.' },
  { a: 'general.Nuns.matins.canons[0].odes.6.items[1]', b: 'general.Nuns.liturgy.beatitudes[4]', relation: 'identical', note: 'Ode VI troparion 2 = Beatitude 5.' },
  { a: 'general.Nuns.matins.canons[0].odes.6.items[2]', b: 'general.Nuns.liturgy.beatitudes[5]', relation: 'identical', note: 'Ode VI troparion 3 = Beatitude 6.' },
  { a: 'general.Nuns.matins.canons[0].odes.6.items[3]', b: 'general.Nuns.liturgy.beatitudes[6]', relation: 'identical', note: 'Ode VI Theotokion = Beatitude 7. TWELVE files identical, two variant.' },
  { a: 'general.Nuns.vespers.lic_glory', b: 'general.Nuns.matins.sessional_post50', relation: 'identical',
    note: 'The idiomelon Glory reprinted byte-for-byte as the post-Psalm-50 sessional — "who honour you" included (sic both sites). The Nun pattern, in the pair.' },
  { a: 'general.Nuns.vespers.aposticha_glory', b: 'general.Nuns.matins.doxology_glory', relation: 'identical',
    note: 'The Doxasticon reprints the aposticha Glory — ninth file with the pattern.' },
  { a: 'general.Nuns.vespers.dogmatikon', b: 'general.Martyresses.vespers.dogmatikon', relation: 'identical',
    note: 'FIFTH site of the Tone VIII dogmatic — printed under a rubric that announces TONE II (sic register).' },
  { a: 'general.Nuns.vespers.dogmatikon_alternate', b: 'general.Martyresses.vespers.dogmatikon_alternate', relation: 'identical',
    note: '"O Sovereign lady" — third file.' },
  { a: 'general.Nuns.vespers.aposticha_closer', b: 'general.Martyresses.vespers.aposticha_alternate', relation: 'identical',
    note: 'The "inextinguishable lamp" — FOUR byte-identical sites across two files now.' },
  { a: 'general.Nuns.matins.megalynarion_verse', b: 'general.Nun.matins.megalynarion_verse', relation: 'identical',
    note: '"With patience I waited patiently" — the We-bless formula pair.' },
  { a: 'general.Nuns.matins.canons[0].odes.1.irmos', b: 'general.Nun.matins.canons[0].odes.1.irmos', relation: 'identical', note: 'Ode I irmos "The wonderworking staff of Moses" — the pair share their canon opener.' },
  { a: 'general.Nuns.matins.canons[0].odes.3.irmos', b: 'general.Nun.matins.canons[0].odes.3.irmos', relation: 'identical', note: 'Ode III irmos "O Lord, Creator of the vault".' },
  { a: 'general.Nuns.matins.canons[0].odes.4.irmos', b: 'general.Nun.matins.canons[0].odes.4.irmos', relation: 'identical', note: 'Ode IV irmos, sixth file.' },
  { a: 'general.Nuns.matins.canons[0].odes.7.irmos', b: 'general.Martyress.matins.canons[0].odes.7.irmos', relation: 'identical', note: 'Ode VII irmos "The Children of Judaea", third file.' },
  { a: 'general.Nuns.matins.canons[0].odes.9.irmos', b: 'general.Apostle.matins.canons[0].odes.9.irmos', relation: 'identical', note: 'Ode IX irmos "Saved by thee, O pure Virgin", third file.' },
  { a: 'general.Nuns.matins.sessional_ode3_closer', b: 'general.Heirarch.matins.sessional_ode3_closer', relation: 'identical',
    note: '"The Word of the Father" in the "incarnate OF thee" form — SIXTH site of the family (MonasticMartyrs\' praises print the "from" variant).' },
  { a: 'general.Nuns.matins.anabathmoi[0]', b: 'general.Nun.matins.anabathmoi[0]', relation: 'identical', note: '"From my youth" — fourteen files, one text.' },
  { a: 'general.Nuns.matins.anabathmoi[1]', b: 'general.Nun.matins.anabathmoi[1]', relation: 'identical', note: '"Ye haters of Zion" — fourteen files, one text.' },
  { a: 'general.Nuns.matins.anabathmoi_closer', b: 'general.Nun.matins.anabathmoi_closer', relation: 'identical', note: '"In the Holy Spirit" — fourteen files, one text.' },
  { a: 'general.Nuns.matins.psalm50_closer', b: 'general.Nun.matins.psalm50_closer', relation: 'identical', note: 'The Both-now after Psalm 50.' },
  { a: 'general.Nuns.matins.psalm50_verse', b: 'general.Nun.matins.psalm50_verse', relation: 'identical', note: '"Have mercy on me, O God".' },
  { a: 'general.Nuns.liturgy.alleluia', b: 'general.Nun.liturgy.alleluia', relation: 'identical', note: 'The female-saint Alleluia, fourth file.' },
  { a: 'general.Nuns.liturgy.alleluia_verse', b: 'general.Nun.liturgy.alleluia_verse', relation: 'identical', note: 'And its verse.' },
  { a: 'general.Nuns.liturgy.communion_verse', b: 'general.Martyr.liturgy.communion_verse', relation: 'identical',
    note: 'Back to the semicolon-and-capital "In everlasting remembrance" — the hierarch/martyr-class verse, not the female-martyric one: the communion verse follows the FILE, not the pair.' },
];
