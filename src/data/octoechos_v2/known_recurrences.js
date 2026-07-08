// src/data/octoechos_v2/known_recurrences.js
// ─────────────────────────────────────────────────────────────────────────────
// THE RECURRENCE REGISTER — normative twin of the spec's §2.3 anti-dedup
// catalog (amendment A, §2.3a). Seeded from every pair in that catalog,
// July 7 2026. New pairs discovered during encoding are added in the SAME
// COMMIT as the data that reveals them.
//
// Gate rule (§6): every `identical` pair must BYTE-MATCH (text and pointing);
// every `variant` pair must NOT byte-match. This catches the two symmetric
// encoding failure modes: copy-paste of the wrong rendering into a slot where
// the source re-renders, and a typo in a slot where the source truly
// duplicates.
//
// Entry shape:
//   a, b     — position paths (schema_v2 path grammar, rooted at the data
//              module: 'tone2.', 'shared.', 'theotokia.'). External corpora
//              use a prefix: 'menaion:july...' / 'v1:tone2...' — checked only
//              when the V2 side exists AND the external module resolves.
//   relation — 'identical' | 'variant' | 'family' (see schema_v2 — 'family'
//              is informational: byte-status not pinned by the spec prose;
//              upgrade during encoding).
//   note     — the catalog evidence, condensed.
//   approx   — true where the exact array index/position awaits encoding;
//              the gate reports these as PENDING-REFINEMENT, and they must be
//              made exact in the same commit that encodes either side.
//
// Positions not yet encoded report as PENDING, never as pass.
// ─────────────────────────────────────────────────────────────────────────────

export default [
  // ── 2-1 internal ───────────────────────────────────────────────────────────
  { a: 'tone2.matins.sessionals[1].closer',
    b: 'tone2.matins.praises.theotokion',
    relation: 'variant',
    note: 'Kathisma III closer "highly blessed … taken captive … with hymns" vs Praises theotokion "most blessed … captured … in praise" (2-1).' },

  { a: 'tone2.little_vespers.aposticha.resurrection[0]',
    b: 'tone2.great_vespers.aposticha[0]',
    relation: 'variant',
    note: 'LV "inhabited world; * and by it Thou hast called back" vs GV "universe; * and Thou hast called back" (§2.2, 2-1).' },

  // ── wellspring family ──────────────────────────────────────────────────────
  { a: 'tone2.compline.sun.after_ode6.sessional',
    b: 'tone2.matins_weekday.mon.sessionals[0].closer',
    relation: 'variant',
    note: '"As the wellspring of loving-kindness" vs "As the well-spring …" — hyphenation variance only (2-2).' },

  { a: 'tone2.matins_weekday.mon.sessionals[2].spec_mel',
    b: 'tone2.matins_weekday.tue.sessionals[2].spec_mel',
    relation: 'variant',
    note: 'Spec. Mel. label itself varies: Mon "As A wellspring …" vs Tue "As THE wellspring …" (2-3). Labels stored verbatim per site.' },

  // ── irmoi recurrences (suite-level; byte-status per pair not pinned) ───────
  { a: 'tone2.nocturns.canon.odes.3.irmos', b: 'tone2.compline.sun.canon.odes.3.irmos',
    relation: 'identical', note: 'Nocturns↔Sunday-night Compline shared irmos (family upgraded at encoding, byte-verified July 7 2026).' },
  { a: 'tone2.nocturns.canon.odes.4.irmos', b: 'tone2.compline.sun.canon.odes.4.irmos',
    relation: 'identical', note: 'Nocturns↔Sunday-night Compline shared irmos (family upgraded at encoding, byte-verified July 7 2026).' },
  { a: 'tone2.nocturns.canon.odes.5.irmos', b: 'tone2.compline.sun.canon.odes.5.irmos',
    relation: 'identical', note: 'Nocturns↔Sunday-night Compline shared irmos (family upgraded at encoding, byte-verified July 7 2026).' },
  { a: 'tone2.nocturns.canon.odes.8.irmos', b: 'tone2.compline.sun.canon.odes.8.irmos',
    relation: 'identical', note: 'Nocturns↔Sunday-night Compline shared irmos (family upgraded at encoding, byte-verified July 7 2026).' },
  { a: 'tone2.nocturns.canon.odes.9.irmos', b: 'tone2.compline.sun.canon.odes.9.irmos',
    relation: 'identical', note: 'Nocturns↔Sunday-night Compline shared irmos (family upgraded at encoding, byte-verified July 7 2026).' },
  { a: 'tone2.matins.canon.odes.1.irmos', b: 'tone2.compline.thu.canon.odes.1.irmos',
    relation: 'identical', note: '"In the deep of old" — Thursday-night Compline uses the Sunday-Matins suite (2-6); byte-verified at encoding.' },
  { a: 'tone2.matins_weekday.wed.canons[1].odes.1.irmos', b: 'tone2.compline.tue.canon.odes.1.irmos',
    relation: 'identical', note: 'Wed Matins Theotokos canon ↔ Tue-night Compline shared irmos (2-4; family upgraded, byte-verified).' },
  { a: 'tone2.matins_weekday.wed.canons[1].odes.3.irmos', b: 'tone2.compline.tue.canon.odes.3.irmos',
    relation: 'identical', note: 'Wed Matins Theotokos canon ↔ Tue-night Compline shared irmos (2-4; family upgraded, byte-verified).' },
  { a: 'tone2.matins_weekday.wed.canons[1].odes.5.irmos', b: 'tone2.compline.tue.canon.odes.5.irmos',
    relation: 'identical', note: 'Wed Matins Theotokos canon ↔ Tue-night Compline shared irmos (2-4; family upgraded, byte-verified).' },
  { a: 'tone2.matins_weekday.wed.canons[1].odes.6.irmos', b: 'tone2.compline.tue.canon.odes.6.irmos',
    relation: 'identical', note: 'Wed Matins Theotokos canon ↔ Tue-night Compline shared irmos (2-4; family upgraded, byte-verified).' },
  { a: 'tone2.compline.tue.canon.odes.8.irmos', b: 'tone2.compline.mon.canon.odes.8.irmos',
    relation: 'identical',
    note: 'Ode VIII "God Who descended into the fiery furnace" — Tue night = Mon night (2-4; byte-verified).' },
  { a: 'tone2.compline.wed.canon.odes.1.irmos', b: 'tone2.compline.tue.canon.odes.1.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.wed.canon.odes.3.irmos', b: 'tone2.compline.tue.canon.odes.3.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.wed.canon.odes.5.irmos', b: 'tone2.compline.tue.canon.odes.5.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.wed.canon.odes.6.irmos', b: 'tone2.compline.tue.canon.odes.6.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.wed.canon.odes.7.irmos', b: 'tone2.compline.tue.canon.odes.7.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.wed.canon.odes.8.irmos', b: 'tone2.compline.tue.canon.odes.8.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.wed.canon.odes.9.irmos', b: 'tone2.compline.tue.canon.odes.9.irmos',
    relation: 'identical', note: 'Wed↔Tue night Compline shared irmos — all but Ode IV (2-5; byte-verified; the Ode IV pair is the Habakkuk variant entry).' },
  { a: 'tone2.compline.fri.canon.odes.1.irmos', b: 'tone2.compline.wed.canon.odes.1.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.3.irmos', b: 'tone2.compline.wed.canon.odes.3.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.4.irmos', b: 'tone2.compline.wed.canon.odes.4.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.5.irmos', b: 'tone2.compline.wed.canon.odes.5.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.6.irmos', b: 'tone2.compline.wed.canon.odes.6.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.7.irmos', b: 'tone2.compline.wed.canon.odes.7.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.8.irmos', b: 'tone2.compline.wed.canon.odes.8.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },
  { a: 'tone2.compline.fri.canon.odes.9.irmos', b: 'tone2.compline.wed.canon.odes.9.irmos',
    relation: 'identical', note: 'Fri↔Wed night Compline shared irmos suite (2-7; byte-verified).' },

  // ── two DISTINCT texts that look like variants of one (must differ) ────────
  { a: 'tone2.matins.canon.odes[9].irmos',
    b: 'tone2.matins_weekday.tue.canons[1].odes[9].irmos',
    relation: 'variant',
    note: 'Ode 9: "The SON OF THE BEGINNINGLESS FATHER, God and Lord" (Sun Matins) vs "The BEGINNINGLESS SON OF GOD THE FATHER and the Lord" (Tue Forerunner canon, 2-3) — strongest dedup trap.' },
  { a: 'tone2.compline.wed.canon.odes[4].irmos',
    b: 'tone2.compline.tue.canon.odes[4].irmos',
    relation: 'variant',
    note: 'TWO DISTINCT Habakkuk irmoi: "I have heard report O Lord, of Thy glorious dispensation" (Wed night, 2-5) vs "I hymn Thee, O Lord, for I have heard report of Thee" (Tue night, 2-4). Not variants of one text.' },

  // ── weekday compunction / martyrs recurrences ──────────────────────────────
  { a: 'tone2.vespers_weekday.sun.aposticha.items[0]', b: 'tone2.vespers_weekday.mon.aposticha.items[0]',
    relation: 'variant',
    note: 'Recurring compunction aposticha vary per day: Sun-eve "Have mercy ON me" vs Mon-eve "Have mercy UPON me" (2-3).' },
  { a: 'tone2.vespers_weekday.sun.aposticha.items[2]', b: 'tone2.vespers_weekday.thu.aposticha.items[2]',
    relation: 'variant',
    note: 'Sun↔Thu evening martyrs pair: "pleasures of the earth … granted the good things … fellow citizens" vs "pleasures of life … deemed worthy … made their abode together" (2-2/2-6).' },

  // ── "We magnify thee, O Theotokos" family (2-2/2-3/2-4/2-5) ────────────────
  { a: 'tone2.matins_weekday.tue.sessionals[0].closer',
    b: 'tone2.compline.tue.after_ode6.sessional',
    relation: 'identical',
    note: '"We magnify thee … Thou art the un-burnt bush …" — Tue Matins set-1 closer recurs, POINTING INCLUDED, as Tue-night Compline after-Ode-VI sessional (2-3/2-4).' },
  { a: 'tone2.matins_weekday.wed.sessionals[0].closer',
    b: 'tone2.matins_weekday.tue.sessionals[0].closer',
    relation: 'variant',
    note: 'Same opening, DIFFERENT hymn: Wed continues "… Rejoice, thou cloud of the unwaning Light …" (2-4) vs Tue\'s un-burnt bush text.' },
  { a: 'tone2.matins_weekday.mon.sessionals[1].closer',
    b: 'tone2.matins_weekday.tue.sessionals[0].closer',
    relation: 'variant',
    note: 'Third distinct text in the family: Mon set-2 "… O cloud of the never-setting Sun …" (2-2).' },
  { a: 'tone2.matins_weekday.thu.sessionals[0].closer',
    b: 'tone2.matins_weekday.mon.sessionals[1].closer',
    relation: 'identical',
    note: 'Thu Matins set-1 closer = Mon set-2 closer, "… cloud of the never-setting Sun …" (2-5) — the family\'s Monday text recurring on a second day.' },

  // ── cross-print-site pointing variance (external Menaion sites) ────────────
  { a: 'tone2.vespers_weekday.tue.aposticha_theotokion',
    b: 'menaion:july.lic_stavrotheotokion(07-24)',
    relation: 'variant',
    note: '"Having endured many pangs" printed at Tue-eve aposticha (2-4) AND July 24 LIC (Menaion PDF) — same hymn, same dialect, DIFFERENT * line breaks (§2.3).' },

  // ── evening→morning reuse ──────────────────────────────────────────────────
  { a: 'tone2.vespers_weekday.wed.aposticha.items[0]', b: 'tone2.matins_weekday.thu.aposticha.items[0]',
    relation: 'variant',
    note: 'Thu Matins aposticha 1 = Wed-eve aposticha 1 with wording variance ("imparted" → "gave ineffable healings") (2-5).' },
  { a: 'tone2.vespers_weekday.wed.aposticha.items[1]', b: 'tone2.matins_weekday.thu.aposticha.items[1]',
    relation: 'variant',
    note: '"save from misfortunes those who have recourse to the supplications of" → "save them from misfortunes by the prayers of" (2-5).' },
  { a: 'tone2.matins_weekday.thu.aposticha_theotokion', b: 'tone2.vespers_weekday.mon.aposticha_theotokion',
    relation: 'variant',
    note: '"All of my hope I PLACE IN thee" (Thu Matins, 2-5) vs "All of my hope DO I PLACE ON thee" (Mon-eve, 2-3) — same hymn, micro-variance.' },

  // ── weekday beatitudes opener — invariant across all six days (§9.14) ──────
  { a: 'tone2.liturgy_weekday.mon.beatitudes.items[0]', b: 'tone2.liturgy_weekday.tue.beatitudes.items[0]',
    relation: 'identical',
    note: '"We offer Thee the cry of the thief …" opener IDENTICAL on all six non-Sunday days (§9.14, closed July 7 2026 from all six files). Per-position storage; invariance is a recorded fact, not a shared table.' },
  { a: 'tone2.liturgy_weekday.tue.beatitudes.items[0]', b: 'tone2.liturgy_weekday.wed.beatitudes.items[0]',
    relation: 'identical', note: '§9.14 chain — see mon/tue entry.' },
  { a: 'tone2.liturgy_weekday.wed.beatitudes.items[0]', b: 'tone2.liturgy_weekday.thu.beatitudes.items[0]',
    relation: 'identical', note: '§9.14 chain — see mon/tue entry.' },
  { a: 'tone2.liturgy_weekday.thu.beatitudes.items[0]', b: 'tone2.liturgy_weekday.fri.beatitudes.items[0]',
    relation: 'identical', note: '§9.14 chain — see mon/tue entry.' },
  { a: 'tone2.liturgy_weekday.fri.beatitudes.items[0]', b: 'tone2.liturgy_weekday.sat.beatitudes.items[0]',
    relation: 'variant', note: '§9.14 chain, refined at encoding (gate catch, July 7 2026): wording identical on all six days, but the SATURDAY print alone carries the §9.12 stray asterisk ("mercy* upon us") — the identity chain holds mon→fri and breaks at sat by exactly the recorded sic.' },

  // ── role-dependent micro-variance inside one day (2-5) ─────────────────────
  { a: 'tone2.matins_weekday.thu.sessionals[0].verses[0]', b: 'shared.daily_liturgy_propers.thu.prokeimenon.text',
    relation: 'variant',
    note: '"unto the END of the world" (Thu Matins sessional verse) vs "unto the ENDS of the world" (Thu Liturgy prokeimenon AND koinonikon — same psalm verse, one day) (2-5).' },
  { a: 'shared.daily_liturgy_propers.thu.prokeimenon.text', b: 'shared.daily_liturgy_propers.thu.communion',
    relation: 'variant',
    note: 'Thu koinonikon and prokeimenon share one psalm verse (2-5) but the PRINTS differ by role: prokeimenon pointed ("earth, * and"), koinonikon unpointed — byte-verified from the raw layer July 7 2026 (was seeded identical from the catalog prose; refined at encoding per §2.3a).' },

  // ── the Wednesday↔Friday sessional recombination web (2-6) ─────────────────
  { a: 'tone2.matins_weekday.fri.sessionals[0].items[0]', b: 'tone2.matins_weekday.wed.sessionals[0].items[0]',
    relation: 'variant',
    note: 'Fri set-1 items = Wed set-1\'s with micro-variances ("didst stretch out" vs "stretched out"; "who cry: Glory to Thee" vs "who cry aloud: Glory be to Thee"; "Thou camest as the Second Adam for this purpose: to seek out" vs "for, for this reason Thou didst come …, seeking out").' },
  { a: 'tone2.matins_weekday.fri.sessionals[1].items[0]', b: 'tone2.matins_weekday.wed.sessionals[1].items[0]',
    relation: 'variant',
    note: 'Fri set-2 item 1 = Wed set-2\'s ("given unto us" vs "bestowed upon us") (2-6).' },
  { a: 'tone2.matins_weekday.fri.sessionals[2].items[0]', b: 'tone2.matins_weekday.wed.sessionals[2].items[1]',
    relation: 'identical',
    note: 'Fri set-3 = Wed set-3 item 2 IDENTICAL (2-6).' },
  { a: 'tone2.matins_weekday.fri.sessionals[2].items[1]', b: 'tone2.matins_weekday.wed.sessionals[1].items[1]',
    relation: 'variant',
    note: 'Fri set-3 also recombines Wed set-2 item 2 with "flock"→"sheep" (2-6).' },
  { a: 'tone2.matins_weekday.fri.sessionals[0].closer', b: 'tone2.matins_weekday.wed.sessionals[1].closer',
    relation: 'identical',
    note: 'Fri set-1 closer = Wed set-2 closer IDENTICAL (pointed: "Beholding Thee, O Christ, stretched dead upon the tree … fearful mystery …") (2-4/2-6).' },
  { a: 'tone2.matins_weekday.fri.sessionals[2].closer', b: 'tone2.matins_weekday.wed.sessionals[2].closer',
    relation: 'identical',
    note: 'Fri set-3 closer = Wed set-3 closer IDENTICAL (2-6).' },
  { a: 'tone2.compline.thu.after_ode6.sessional', b: 'tone2.matins_weekday.wed.sessionals[1].closer',
    relation: 'variant',
    note: 'One hymn, three positions, TWO renderings: Thu-NIGHT Compline prints the Wed/Fri closer hymn in prose ("stretched out dead … strange mystery …", Spec. Mel. "As thou art full of loving-kindness …") (2-4/2-5/2-6).' },

  // ── near-duplicate ACROSTICS — metadata-level trap (2-4 vs 2-6) ────────────
  { a: 'tone2.matins_weekday.wed.canons[0].acrostic', b: 'tone2.matins_weekday.fri.canons[0].acrostic',
    relation: 'variant',
    note: '"The setting up of the Cross is the fall of the demons" vs "When the Cross was planted, the deception of the demons fell" — two DIFFERENT canons (disjoint irmoi), both Joseph. Acrostic similarity is NOT canon identity.' },

  // ── the ewe-lamb text (true duplication, shared typo) ──────────────────────
  { a: 'tone2.vespers_weekday.thu.lic_theotokion', b: 'tone2.matins_weekday.fri.aposticha_theotokion',
    relation: 'identical',
    note: '"When the unblemished ewe-lamb …" printed IDENTICALLY at both positions in 2-6, down to the same "O Christ,?" typo in both prints — the recurring typo is itself evidence of true duplication.' },
  { a: 'tone2.vespers_weekday.thu.lic_theotokion', b: 'menaion:july.ewe_lamb_site',
    relation: 'variant', approx: true,
    note: 'july.js (pointed) breaks after "ewe-lamb" where 2-6 does not — cross-print-site pointing-variance class. june.js aposticha_stavrotheotokion is a further site.' },

  // ── Tue↔Thu evening aposticha pair (V1 vindication) ────────────────────────
  { a: 'tone2.vespers_weekday.tue.aposticha.items[0]', b: 'tone2.vespers_weekday.thu.aposticha.items[0]',
    relation: 'identical',
    note: '"O Christ God my Savior, Who saved Peter in the sea …" IDENTICAL both evenings (2-4/2-6).' },
  { a: 'tone2.vespers_weekday.tue.aposticha.items[1]', b: 'tone2.vespers_weekday.thu.aposticha.items[1]',
    relation: 'variant',
    note: '"Those who ever enjoyed Thy gifts cried out … given to them" (Tue) vs "They who ever enjoyed … cried aloud … released unto them" (Thu) — source re-renders per evening; V1 carries both correctly (§8).' },

  // ── a whole canon in two renderings (2-4 vs 2-7) — crown jewel ─────────────
  { a: 'tone2.compline.fri.canon.odes.3.items[0]', b: 'tone2.matins_weekday.wed.canons[1].odes.3.items[0]',
    relation: 'variant',
    note: 'Fri-NIGHT Compline canon = Wed Matins Theotokos canon RE-RENDERED ode by ode (verified Odes III, V, VI, IX): "the jar of manna, the mountain of God and the divine and beauteous palace" ↔ "the jar of the Manna, the divine mountain, the all-comely palace".' },
  { a: 'tone2.compline.fri.canon.odes.6.items[0]', b: 'tone2.matins_weekday.wed.canons[1].odes.6.items[0]',
    relation: 'variant',
    note: '"those Sick with corruption" ↔ "those afflicted by corruption" (2-4/2-7).' },
  { a: 'tone2.compline.fri.canon.odes.9.items[0]', b: 'tone2.matins_weekday.wed.canons[1].odes.9.items[0]',
    relation: 'variant',
    note: '"Grant unto me the love of God for all … assumed flesh from thee" ↔ "Grant unto me God\'s love for mankind … borrowed flesh from thee" (2-4/2-7).' },

  // ── the dogmatikon multi-site family (2-1/2-7 + Theotokia.pdf + Menaion) ───
  { a: 'tone2.great_vespers.dogmatikon', b: 'tone2.vespers_weekday.fri.lic_theotokion',
    relation: 'identical',
    note: '§9.2 RESOLVED: Friday-evening LIC closer = Saturday GV dogmatikon — wording IDENTICAL, pointing IDENTICAL (2-7 `*`/`**` breaks map one-to-one onto the GV print), source label DIFFERENT per site (verbatim sourceLabel each).' },
  { a: 'theotokia.resurrectional_theotokia.2.dogmatikon', b: 'tone2.great_vespers.dogmatikon',
    relation: 'variant',
    note: 'Theotokia.pdf Part 1 dogmatikon is a THIRD print site of "The shadow of the law", capitalizing "Bush" and "Virgin" where the 2-1/2-7 chapter prints have lowercase — agreeing with july.js\'s two Menaion sites (two print-site families of one hymn, §4.12).' },
  { a: 'theotokia.resurrectional_theotokia.2.aposticha_theotokion', b: 'tone2.great_vespers.aposticha_theotokion',
    relation: 'variant',
    note: '"O new wonder …" — wording and pointing IDENTICAL line-for-line (the spec\'s §4.12 verification), but the prints differ by ONE GLYPH: Theotokia.pdf "mother\'s" (straight U+0027) vs 2-1 "mother’s" (curly U+2019). Both files mix apostrophe glyphs internally, so the glyph is a per-print-site fact; byte-caught by the gate July 7 2026. A third print site exists in may.js (Menaion).' },
  { a: 'theotokia.resurrectional_theotokia.2.dismissal_theotokion', b: 'tone2.dismissal_theotokion',
    relation: 'identical',
    note: '"All of thy most glorious mysteries" — Part 1 dismissal column = 2-1 post-troparion print (§4.12).' },

  // ── "Woe is me" — two positions in one file (2-7) ──────────────────────────
  { a: 'tone2.vespers_weekday.fri.aposticha.items[1]', b: 'tone2.matins_weekday.sat.praises.items[3]',
    relation: 'identical',
    note: '"Woe is me! How great a struggle the soul endureth …" printed at BOTH Fri-eve aposticha and Sat Matins praises — same text, two positions (2-7).' },

  // ── Saturday praises martyrs pairs (2-7) ───────────────────────────────────
  { a: 'tone2.matins_weekday.sat.praises.items[0]', b: 'tone2.matins_weekday.fri.aposticha.items[2]',
    relation: 'variant',
    note: 'Sat praises #1 re-renders Fri Matins aposticha martyrs: "Having suffered like Christ even unto death …" ↔ "Ye suffered for Christ\'s sake unto death …" (2-6/2-7).' },
  { a: 'tone2.matins_weekday.sat.praises.items[1]', b: 'tone2.matins_weekday.wed.aposticha.items[2]',
    relation: 'variant',
    note: 'Sat praises #2 re-renders Wed Matins\': "Every city and land honoreth your relics … majesty of the Churches" ↔ "… doth honor your relics … majesty of the Church" (2-4/2-7).' },
  { a: 'tone2.matins_weekday.sat.sessionals[1].items[1]', b: 'tone2.matins_weekday.thu.sessionals[1].items[2]',
    relation: 'variant',
    note: 'Sat sessional set-2 item 2 re-renders Thu Matins set-2 martyrs sessional: "blessed is the ground which was drenched in your blood" ↔ "… which drank your blood" (2-5/2-7).' },

  // ── "shine brighter than gold" — one hymn, three days, three renderings ────
  { a: 'tone2.matins_weekday.tue.sessionals[1].items[2]', b: 'tone2.matins_weekday.wed.sessionals[1].items[2]',
    relation: 'variant',
    note: 'Tue "shine with greater luster than gold … set their prayer before Thee like incense" vs Wed "shine more brightly than gold … set their supplication …" (2-3/2-4).' },
  { a: 'tone2.matins_weekday.wed.sessionals[1].items[2]', b: 'tone2.matins_weekday.sat.sessionals[1].items[0]',
    relation: 'variant',
    note: 'Wed vs Sat "Thou hast made Thy saints to shine brighter than gold, and in Thy love hast glorified Thy holy ones …" — third rendering (2-4/2-7).' },

  // ── trophy/ensign (2-3 vs 2-7) ─────────────────────────────────────────────
  { a: 'tone2.matins_weekday.tue.aposticha.items[2]', b: 'tone2.matins_weekday.sat.praises.items[2]',
    relation: 'variant',
    note: '"Taking up the Cross of Christ as a TROPHY of victory" (Tue Matins aposticha martyrs) ↔ "… as an ENSIGN of victory" (Sat praises) (2-3/2-7).' },

  // ── Theotokia.pdf ↔ chapter closers: identical prints (§2.3, source 8) ─────
  { a: 'theotokia.doxasticon_theotokia.2.wed_eve_aposticha', b: 'tone2.vespers_weekday.wed.aposticha_theotokion',
    relation: 'identical',
    note: '"Like a fruitful olive tree" = Wed-eve aposticha closer — identical print in Theotokia.pdf (table key to be pinned at encoding).' },
  { a: 'theotokia.doxasticon_theotokia.2.fri_eve_aposticha', b: 'tone2.vespers_weekday.fri.aposticha_theotokion',
    relation: 'identical',
    note: '"Save from misfortunes" = Fri-eve aposticha closer — identical print (2-7 / Theotokia.pdf).' },
  { a: 'theotokia.dismissal_theotokia_annual.2.mon_vespers_tue_matins', b: 'tone2.matins_weekday.thu.sessionals[1].closer',
    relation: 'identical',
    note: '"Through thee, O Ever-virgin Theotokos" = Thu Matins set-2 closer — identical print.' },
  { a: 'theotokia.doxasticon_theotokia.2.mon_eve_aposticha', b: 'tone2.matins_weekday.wed.sessionals[0].closer',
    relation: 'family', approx: true,
    note: '"cloud of the unwaning Light" = Wed Matins set-1 closer — identical print.' },

  // ── Theotokia.pdf ↔ chapter closers: re-renderings ─────────────────────────
  { a: 'theotokia.doxasticon_theotokia.2.thu_praises', b: 'tone2.vespers_weekday.mon.aposticha_theotokion',
    relation: 'variant',
    note: '"All of my hope do I SET on thee" (Part 2 Thu praises) — a THIRD rendering beside 2-3\'s "do I place on" and 2-5\'s "I place in".' },
  { a: 'theotokia.doxasticon_theotokia.2.mon_praises', b: 'tone2.matins_weekday.mon.aposticha_theotokion',
    relation: 'variant',
    note: '"In thee have we placed our trust … That we not fall way [sic]" (Part 2 Mon praises) vs 2-2\'s "We have placed our trust in thee … Let us not fall away".' },
  { a: 'theotokia.dismissal_theotokia_annual.2.sun_vespers_mon_matins', b: 'tone2.compline.sun.after_ode6.sessional',
    relation: 'variant',
    note: '"As thou art a well-spring of loving COMPASSION … a sinful people … bodiless hosts" (Part 3) vs 2-2\'s "loving-kindness … people who have sinned … incorporeal beings" — the wellspring family again.' },
  { a: 'theotokia.doxasticon_theotokia.2.sat_praises', b: 'tone2.matins_weekday.sat.praises.theotokion',
    relation: 'variant',
    note: '"Come all ye, and let us glorify the Mother of Light" (Part 2 Sat praises) vs 2-7\'s praises "Come, and with unceasing hymns let us all glorify the Mother of the Light".' },

  // ── Theotokia.pdf internal same-file variance ──────────────────────────────
  { a: 'theotokia.doxasticon_theotokia.2.sun_eve_aposticha', b: 'theotokia.doxasticon_theotokia.2.tue_praises',
    relation: 'variant',
    note: '"Rejoice, O Theotokos Mary" prints TWICE within Part 2 Tone II — Sun-eve POINTED ("surpassingly holy") vs Tue praises UNPOINTED ("surpassing holy"). One file, one hymn, two renderings and two tiers.' },

  // ── "Rejoice, O Theotokos Mary" across the chapters (§8) ───────────────────
  { a: 'tone2.vespers_weekday.sun.aposticha_theotokion', b: 'tone2.matins_weekday.tue.aposticha_theotokion',
    relation: 'identical',
    note: 'The §8 SUNDAY_APOSTICHA_THEOTOKIA text appears word-for-word, POINTING INCLUDED, at Sun-eve Vespers (2-2) and Tue-morning Matins (2-3) — a text that legitimately recurs at multiple weekday positions.' },

  // ── first CROSS-TONE trap ──────────────────────────────────────────────────
  { a: 'theotokia.dismissal_theotokia_annual.4.tue_lauds', b: 'tone2.matins_weekday.tue.sessionals[0].closer',
    relation: 'identical',
    note: 'CROSS-TONE: "We magnify thee … un-burnt bush …" sits in TONE IV\'s Part 3 rows (Tue Lauds; Sat Matins) while the Tone 2 chapters print it at two positions. Same hymn across tone tables; per-position storage only.' },


  // ── Theotokia.pdf internal recurrences — BYTE-VERIFIED at encoding
  // (July 7 2026, §2.3a same-commit rule): Part 1 dismissal column
  // reprints at Part 3's fri_vespers_sat_matins row in SEVEN of eight
  // tones (Tone IV diverges by one capital — see the variant entry);
  // Part 3 rows recombine heavily within each tone.
  { a: 'theotokia.resurrectional_theotokia.1.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.1.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.2.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.2.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.3.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.3.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.5.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.5.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.6.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.6.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.7.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.7.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.8.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.8.fri_vespers_sat_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.1.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.1.wed_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.1.mon_vespers_tue_matins', b: 'theotokia.dismissal_theotokia_annual.1.wed_vespers_thu_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.1.tue_lauds', b: 'theotokia.dismissal_theotokia_annual.1.thu_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.1.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.1.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.1.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.1.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.1.tue_lauds', b: 'theotokia.dismissal_theotokia_annual.1.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.2.mon_vespers_tue_matins', b: 'theotokia.dismissal_theotokia_annual.2.wed_vespers_thu_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.2.tue_lauds', b: 'theotokia.dismissal_theotokia_annual.2.thu_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.2.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.2.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.2.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.2.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.2.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.2.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.3.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.3.tue_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.3.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.3.thu_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.3.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.3.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.3.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.3.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.3.wed_vespers_thu_matins', b: 'theotokia.dismissal_theotokia_annual.3.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.4.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.4.thu_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.4.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.4.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.4.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.4.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.4.tue_lauds', b: 'theotokia.dismissal_theotokia_annual.4.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.5.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.5.wed_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.5.tue_lauds', b: 'theotokia.dismissal_theotokia_annual.5.thu_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.5.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.5.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.5.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.5.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.5.mon_lauds', b: 'theotokia.dismissal_theotokia_annual.5.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.6.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.6.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.6.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.6.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.6.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.6.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.7.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.7.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.7.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.7.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.8.tue_vespers_wed_matins', b: 'theotokia.dismissal_theotokia_annual.8.thu_vespers_fri_matins',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.8.wed_lauds', b: 'theotokia.dismissal_theotokia_annual.8.fri_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.dismissal_theotokia_annual.8.tue_lauds', b: 'theotokia.dismissal_theotokia_annual.8.sat_lauds',
    relation: 'identical', note: 'Byte-verified identical print at generation (Theotokia.pdf internal).' },
  { a: 'theotokia.resurrectional_theotokia.4.dismissal_theotokion', b: 'theotokia.dismissal_theotokia_annual.4.fri_vespers_sat_matins',
    relation: 'variant', note: 'Tone IV alone: Part 1 prints "ranks of angels", Part 3 "ranks of Angels" — one-capital micro-variance between the two print sites; every other tone byte-matches.' },

  // ── discovered at tone-2 Sunday-cycle encoding (byte-verified, §2.3a) ──────
  { a: 'tone2.nocturns.canon.odes.1.irmos', b: 'tone2.matins.canon.odes.1.irmos',
    relation: 'identical', note: '"In the deep of old" — Nocturns and the Matins Resurrection canon share Ode 1 byte-identically (2-1); third+ sites in the Compline canons per the §2.3 five-canon family.' },
  { a: 'tone2.nocturns.canon.odes.6.irmos', b: 'tone2.matins.canon.odes.6.irmos',
    relation: 'identical', note: '"Whirled about in the abyss of sin" — Nocturns Ode 6 = Matins canon Ode 6 byte-identically (2-1). The other six Nocturns irmoi are DISTINCT compositions from the Matins suite.' },

  // ── discovered at weekday encoding (July 7 2026, §2.3a same-commit) ────────
  { a: 'tone2.matins_weekday.fri.sessionals[0].items[1]', b: 'tone2.matins_weekday.wed.sessionals[0].items[1]',
    relation: 'variant', note: 'Second item of the Wed↔Fri set-1 recombination (§2.3 web).' },
  { a: 'tone2.matins_weekday.fri.sessionals[1].items[0]', b: 'tone2.matins_weekday.wed.sessionals[1].items[0]',
    relation: 'variant', note: 'Fri set-2 item 1 = Wed set-2 item 1 with "given unto us"/"bestowed upon us" (2-6).' },
  { a: 'tone2.matins_weekday.mon.aposticha.items[2]', b: 'tone2.matins_weekday.sat.praises.items[0]',
    relation: 'variant', note: 'NEW at encoding: Monday Matins aposticha martyrs ("Ye suffered for Christ even unto death …", 2-2) is a THIRD rendering beside Friday Matins\' martyrs and Saturday praises #1 (§2.3 family).' },
  { a: 'tone2.matins_weekday.sat.canons[1].odes.6.items[0]', b: 'tone2.matins_weekday.sat.canons[1].odes.6.items[1]',
    relation: 'identical', note: 'Saturday fallback canon Ode VI prints the SAME troparion twice in full under its two refrains (§2.7 full-double-print device; §4.8a) — byte-verified at encoding.' },
];
