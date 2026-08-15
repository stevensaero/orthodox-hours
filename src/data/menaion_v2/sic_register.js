// src/data/menaion_v2/sic_register.js — menaion_v2_spec.md §7.4 / §9.12
//
// Spelling and typography stay STRICT VERBATIM. This register is what guards
// that ruling against a well-meaning later "fix": the gate verifies each recorded
// sic still byte-matches the stored text at its locus, so silently correcting one
// is a hard failure rather than an invisible improvement.
export default [
  // ── Unmercenaries.pdf ──────────────────────────────────────────────────────
  // Fourteen rows from one file. As with Martyrs, not one of them would be
  // caught by an automated check: every entry is a well-formed English word, a
  // valid punctuation mark in the wrong place, or a correct book name attached
  // to the wrong text.
  { path: 'general.Unmercenaries.vespers.dogmatikon_rubric', file: 'Unmercenaries.pdf', locus: 'p1',
    verbatim: 'that service ):',
    note: 'The corpus-wide stray space and ) before the colon, fifth file. Monastic, Monastics and Martyrs print it the same way; Martyr.pdf closes it up. Still not uniform.' },

  { path: 'general.Unmercenaries.vespers.readings[0]', file: 'Unmercenaries.pdf', locus: 'p2 Lesson 1',
    verbatim: '(43, 9-14; )',
    note: 'A DANGLING SEMICOLON INSIDE THE PRINTED REFERENCE. The sic sits in `citation_verbatim` — not in the text and not in the heading — which is why checkSics now looks there as well. First sic of its class.' },

  { path: 'general.Unmercenaries.vespers.lic_glory', file: 'Unmercenaries.pdf', locus: 'p1 Glory idiomelon',
    verbatim: 'unmercinaries',
    note: 'For "unmercenaries". The SAME hymn spells it correctly four words earlier ("of the wise and most glorious unmercenaries"), so the file misspells its own subject inside a single sticheron.' },

  { path: 'general.Unmercenaries.matins.psalm50_sticheron', file: 'Unmercenaries.pdf', locus: 'p6 Psalm 50 Glory',
    verbatim: 'Unmercinaries',
    note: 'Same misspelling, capitalised, at a second print site.' },

  { path: 'general.Unmercenaries.matins.canons[0].odes.1.refrain', file: 'Unmercenaries.pdf', locus: 'p7 Ode I refrain',
    verbatim: 'Holy Unmercinaries (names) pray to God for us',
    note: 'Third instance of the misspelling, AND the refrain ends with no terminal punctuation where the other four files print a full stop. Two sics in eight words; stored exactly as printed.' },

  { path: 'general.Unmercenaries.vespers.aposticha_stavrotheotokion', file: 'Unmercenaries.pdf', locus: 'p4 Stavrotheotokion',
    verbatim: 'O my Son ?',
    note: 'Space before the question mark, twice in one hymn ("O my Son ?" and "rendered unto them ?"). Martyrs.pdf prints the same hymn with the same two spaces, so this travels with the text rather than with the file.' },

  { path: 'general.Unmercenaries.matins.canons[0].odes.3.items[3]', file: 'Unmercenaries.pdf', locus: 'p8 Ode III Theotokion',
    verbatim: 'praise thee ,',
    note: 'Space before the comma.' },

  { path: 'general.Unmercenaries.matins.canons[0].odes.8.items[0]', file: 'Unmercenaries.pdf', locus: 'p10 Ode VIII troparion 1',
    verbatim: 'throughout all ages ages.',
    note: 'DOUBLED WORD inside the refrain-like closing formula. It repeats at ALL FOUR troparia of Ode VIII (three troparia and the Theotokion) and nowhere else in the file — so it is a setting error in one ode, reproduced by whoever keyed the ode, not a one-off slip. Confirmed against a plain extraction as well as dedupe_chars(): the page prints it.' },
  { path: 'general.Unmercenaries.matins.canons[0].odes.8.items[1]', file: 'Unmercenaries.pdf', locus: 'p10 Ode VIII troparion 2',
    verbatim: 'throughout all ages ages.', note: 'Second of four — see the Ode VIII troparion 1 row.' },
  { path: 'general.Unmercenaries.matins.canons[0].odes.8.items[2]', file: 'Unmercenaries.pdf', locus: 'p10 Ode VIII troparion 3',
    verbatim: 'throughout all ages ages.', note: 'Third of four — see the Ode VIII troparion 1 row.' },
  { path: 'general.Unmercenaries.matins.canons[0].odes.8.items[3]', file: 'Unmercenaries.pdf', locus: 'p10 Ode VIII Theotokion',
    verbatim: 'throughout all ages ages.', note: 'Fourth of four — see the Ode VIII troparion 1 row.' },

  { path: 'general.Unmercenaries.matins.canons[0].odes.6.items[3]', file: 'Unmercenaries.pdf', locus: 'p9 Ode VI Theotokion',
    verbatim: 'the summit all creation',
    note: 'Missing "of" — "the summit of all creation". REPRINTED IDENTICALLY at the Beatitudes (p13), which is the same evidence Martyr.pdf gave with its unclosed quotation: the Beatitudes are set from the canon rather than proofread separately.' },
  { path: 'general.Unmercenaries.liturgy.beatitudes[6]', file: 'Unmercenaries.pdf', locus: 'p13 Beatitude 7',
    verbatim: 'the summit all creation',
    note: 'The reprint. Registered at BOTH sites, because §2.3 stores both and a reader at either one should see that it is the page and not the encoder.' },

  { path: 'general.Unmercenaries.liturgy.epistle', file: 'Unmercenaries.pdf', locus: 'p13 Epistle heading',
    verbatim: 'THE EPISTLE TO THE ROMANS.',
    note: 'THE HEADING NAMES THE WRONG BOOK. The body printed beneath it is 1 Corinthians 12:27-31 and 13:1-8 — 0.944 against 1 Corinthians, 0.262 against Romans 12:4-21. Not a spelling sic: a wrong attribution, registered here so the verbatim heading cannot be quietly "fixed" to 1 Corinthians. The reading node carries `citation_disputed` and offers no link; Bill to confirm against the physical book.' },

  { path: 'general.Monastic.vespers.dogmatikon_rubric', file: 'Monastic.pdf', locus: 'p1',
    verbatim: 'that service ):',
    note: 'Stray space and ) before the colon. Monastics/Martyrs print the same; Martyr.pdf closes it up as "service):" — the sic is not uniform across the corpus.' },

  { path: 'general.Monastic.matins.canons[0].odes.6.irmos', file: 'Monastic.pdf', locus: 'p9 Ode VI',
    verbatim: 'Raise me up from corruption, O',
    note: 'The printed irmos BREAKS OFF mid-phrase with no closing. Confirmed against both a plain and a dedupe_chars extraction, so it is the page and not the extractor. Almost certainly "O God" — which is exactly why it is not completed here.' },

  { path: 'general.Monastic.matins.doxology_glory', file: 'Monastic.pdf', locus: 'p12',
    verbatim: 'O Father Sergius',
    note: 'A SPECIFIC NAME left in a GENERAL service that elsewhere prints the (name) placeholder. Editorial slip in the source; stored as printed.' },

  { path: 'general.Monastic.liturgy.epistle', file: 'Monastic.pdf', locus: 'p15',
    verbatim: 'GALATIONS',
    note: 'For "Galatians". Also in Monastics.pdf. Missed by the high-precision sic checks — a misspelled proper noun trips none of them; the SCRIPTURE_BOOK_NAMES canon check exists for this class.' },
  { path: 'general.Martyr.vespers.lic_glory', file: 'Martyr.pdf', locus: 'p1 Glory idiomelon',
    verbatim: 'most fervent intercessor, ** cease not to pray',
    note: 'SOURCE PRINTS “* *cease” — a split penultimate marker. Encoded as ** per Bill\'s ruling, and CONFIRMED by the same file: the post-Psalm-50 sessional (p7) prints the identical position as “** cease”. The stored text carries the corrected marker; this row records what the page shows and why the correction is evidenced.' },

  // ── Martyrs.pdf ────────────────────────────────────────────────────────────
  // Nine rows from one file, none of which any automated check would have
  // flagged: every one is a well-formed English word or a valid punctuation
  // mark in the wrong place.
  { path: 'general.Martyrs.troparion', file: 'Martyrs.pdf', locus: 'p4 · also p5, p12, p13',
    verbatim: 'heal all or infirmities',
    note: '"or" for "our". Printed identically at all FOUR troparion sites, so it is the source\'s text and not a one-off slip. Stored as printed at every site.' },

  { path: 'general.Martyrs.vespers.readings[2]', file: 'Martyrs.pdf', locus: 'p3 Lesson 3',
    verbatim: 'IS FROM FROM THE WISDOM',
    note: 'Doubled "FROM" in the reading HEADING. A sic on a heading rather than a text node — the class the gate was widened for.' },

  { path: 'general.Martyrs.vespers.lic_glory', file: 'Martyrs.pdf', locus: 'p1 Glory idiomelon',
    verbatim: 'that the martyrs have for each another',
    note: '"for each another" — a blend of "for one another" and "for each other". Reads as correct English at speed, which is exactly why it needs a row.' },

  { path: 'general.Martyrs.vespers.dogmatikon_rubric', file: 'Martyrs.pdf', locus: 'p1',
    verbatim: 'that service ):',
    note: 'The same stray space-and-paren as Monastic and Monastics. Martyr.pdf closes it up. Four files, three agreeing — still not uniform, still per print site.' },

  { path: 'general.Martyrs.vespers.lic[1]', file: 'Martyrs.pdf', locus: 'p1 LIC 2',
    verbatim: 'wise confession. * like candles',
    note: 'A full stop mid-sticheron, followed by a lowercase continuation.' },

  { path: 'general.Martyrs.vespers.lic_stavrotheotokion', file: 'Martyrs.pdf', locus: 'p1 LIC Stavrotheotokion',
    verbatim: 'O my Son ?',
    note: 'Space before the question mark, twice in this hymn ("O my Son ?", "unto them ?").' },

  { path: 'general.Martyrs.matins.canons[0].odes.6.items[0]', file: 'Martyrs.pdf', locus: 'p9 Ode VI 1',
    verbatim: 'for we love Thee, Who alone art plenteous in mercy.',
    note: 'The quotation opened at "cried aloud: “O Master" is never closed. Reprinted with the same defect at the Beatitudes (p13), which is itself evidence that the Beatitudes are set from the canon rather than proofread separately.' },

  { path: 'general.Martyrs.liturgy.beatitudes[3]', file: 'Martyrs.pdf', locus: 'p13 Beatitude 4',
    verbatim: 'for we love Thee, Who alone art plenteous in mercy.',
    note: 'The unclosed quotation again, at the second print site. Recorded separately because the positions are stored separately (§2.3).' },

  { path: 'general.Martyrs.matins.canons[0].odes.7.items[3]', file: 'Martyrs.pdf', locus: 'p10 Ode VII Theotokion',
    verbatim: 'O Theotokos , to pray',
    note: 'Space before the comma.' },

  { path: 'general.Martyrs.matins.sessional_ode3_stavrotheotokion', file: 'Martyrs.pdf', locus: 'p8 Ode III sessional Stavrotheotokion',
    verbatim: 'was wounded and with grief and cried aloud',
    note: 'Doubled "and" — "was wounded and with grief and cried aloud". Grammatical-looking, so no lint catches it.' },
];
