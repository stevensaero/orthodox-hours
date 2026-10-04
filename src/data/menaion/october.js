// Menaion data — October
// Source: St. Sergius Menaion (Russian usage) + OCA calendar + OCA Dept. of Liturgical
//         Music service texts (director-pointed docx) + ODS 3rd ed. vol. III
// Encoding rule: encoding_rule_v2.md (read live from repo root; v2.13 at time of encode)
// Single point of truth — edit this file for october encoding updates

const OCTOBER_MENAION = {

  // ── October 4 — Hieromartyr Hierotheus, Bishop of Athens (Simple §2A) ──
  //    + Venerable Paul the Simple (Simple §2A), second array element
  // Two INDEPENDENT commemorations, two source files (10-04.pdf, 10-04A.pdf) — the
  // A-file-as-second-commemoration convention (06-07, 09-08, 09-19) holds here.
  //
  // ODS 3rd ed. vol. III does NOT cover 4 October: its index (ods_v3_index.json, 77
  // entries) has only 1001-sun/wkd, 1008x1014-sun(+combined) and 1026-sun/wkd in
  // October, no window spans the 4th, and neither saint's name occurs anywhere in
  // ods_v3_full_repaired.txt. §1.1 step 0 does not apply; the waterfall was run.
  //
  // In 2026, 4 October is a SUNDAY (18th after Pentecost, Tone 1). Per §1.1 the rank
  // recorded is the saint's own; Sunday layering is the assembler's job.
  "10-04": [
    {
      saint: "Hieromartyr Hierotheus, Bishop of Athens",
      oca_primary: true,
      source_file: "10-04.pdf",
      rank: "simple",
      fekula_section: "2A",
      has_great_doxology: false,
      has_polyeleos: false,
      has_litya: false,
      has_paroemias: false,
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      aposticha_source: "octoechos",
      feast_e: null,
      feast_g: null,
      note: "RANK per encoding_rule_v2.md §1.1 WATERFALL, RUN IN FULL. ODS 3rd ed. vol. III " +
            "does not cover 4 October (verified against ods_v3_index.json and the full repaired " +
            "text: no 1004 entry, no window spanning the date, neither saint named), so step 0 " +
            "does not apply. Step 1 Great Feast — NO. Step 2 Vigil — NO: plain 'AT VESPERS', no " +
            "Small Vespers. Step 3 Polyeleos — NO: no Polyeleos or Magnification; Matins is 'Both " +
            "canons from the Oktoechos; and the canon of the holy hieromartyr, with 4 Troparia'. " +
            "Step 4 Doxology — NO: no Great Doxology appointed. Step 5 Six-Stichera — NO: 'On " +
            "\"Lord, I have cried ...,\" 3 Stichera of the holy hieromartyr, in Tone IV'. Step 6 " +
            "Simple — YES, single saint. OCA lists Hierotheus first on 4 October → oca_primary. " +
            "SOURCE SPLIT — OCA DIRECTOR-POINTED TEXTS GOVERN WHERE OCA PRINTS THEM (Bill, " +
            "2026-10-03; 06-17 precedent). The OCA Dept. of Liturgical Music service text " +
            "2026-1004-texts-tt.docx (Orthodox Hours/OCA_service_texts/) prints, for Hierotheus, " +
            "the 3 LIC stichera (Tone 4, 'Thou hast given a sign'), the Glory (Tone 2), the " +
            "troparion (Tone 1) and one kontakion (Tone 8), all Tier-3: underlines converted to " +
            "[brackets], OCA '//' kept, line breaks → ' | ', director: true. Those six fields are " +
            "OCA. Everything OCA does not print stays St. Sergius 10-04.pdf, '*'/'**' verbatim: " +
            "kontakion_ode6, ikos, lic_stavrotheotokion, exapostilarion and its theotokion. " +
            "TROPARION DIVERGES (§1 OCA primacy, §11 #16): OCA's Tone 1 'We the faithful all " +
            "praise Hierotheus, the disciple of Paul' is a saint-SPECIFIC proper and overrides " +
            "St. Sergius's Tone IV 'Having learned goodness and been watchful in all things, * " +
            "arrayed, as befitteth a priest, in a good conscience, * thou didst draw forth " +
            "ineffable things from the chosen vessel; * and, having kept the Faith, thou didst " +
            "complete a course like unto his. ** O hieromartyr Hierotheus, entreat Christ God, " +
            "that our souls be saved.' (10-04.pdf, Vespers and AT LITURGY) — recorded here, set " +
            "aside. CARET STRIPPED: the OCA docx prints '^' before two bracketed syllables of the " +
            "troparion — 'Hierarch of ^[Ath]ens' and 'godly ^[doc]trine.//' (also on two lines " +
            "of the day's dismissal theotokion). The marker is undefined in encoding_rule_v2.md " +
            "§3; per Bill it is stripped from the stored text and its positions are recorded " +
            "here so nothing is lost. FLAG for §3 when its meaning is settled. " +
            "KONTAKIA (§5): 10-04.pdf prints TWO kontakia and AT LITURGY labels them: 'ODE III: " +
            "Kontakion ... in Tone VIII' ('Taught by thee things strange and ineffable') and " +
            "'ODE VI: Kontakion ... in Tone IV' ('In that thou wast an unshakable pillar'). OCA's " +
            "single Tone 8 kontakion is the SAME hymn as the Ode III one in OCA's translation, so " +
            "kontakion_ode3 = OCA Tone 8 (1st & 6th Hours); kontakion_ode6 = St. Sergius Tone IV " +
            "(3rd & 9th Hours). The ikos follows the Ode VI kontakion and pairs with it. " +
            "LIC: 3 slots, 3 unique, no '(Twice)' → no markers (§6b). Both now: 'Theotokion, or " +
            "this Stavrotheotokion, in Tone II' — only the Stavrotheotokion is printed → " +
            "lic_stavrotheotokion; lic_theotokion absent by source. Printed as-is including the " +
            "source typo 'O Christ,?' — not silently corrected. " +
            "NO VESPERS APOSTICHA in 10-04.pdf — Octoechos governs at §2A; aposticha_glory_absent " +
            "declares it. AT LITURGY prints only the troparion and the two kontakia: no readings, " +
            "prokeimenon, alleluia or communion verse, so feast_e/feast_g are null and the rest " +
            "absent by the source. (The OCA docx's Liturgy propers — 2 Cor 9:6-11, Luke 6:31-36, " +
            "Tone 1 prokeimenon, Ps 148:1 communion — are the Sunday's, not the saint's.) " +
            "MATINS FORMAT / MAGNIFICAT: not printed in the PDF; god_is_the_lord and " +
            "magnificat_sung are inferred from the calendar position (a commemorated saint, no " +
            "fore/afterfeast), flagged as inference. " +
            "SCOPE (§6): the canon (Odes I, III-IX), the Ode III sessional hymn with its theotokion " +
            "and stavrotheotokion are printed and deliberately NOT captured. " +
            "ALSO ON 4 OCTOBER (OCA): Sts. Gurias of Kazan and Barsanuphius of Tver (OCA #2) — no " +
            "St. Sergius file in Menaion_St_Sergius for this date; not encoded.",

      // ── AT VESPERS: LORD I HAVE CRIED ──────────────────────────────────────
      // OCA 2026-1004-texts-tt.docx, Tier-3 director pointing. Same three hymns as
      // 10-04.pdf (Tone IV, Spec. Mel. "Thou hast given a sign"), OCA translation.
      stichera_lord_i_call_count: 3,
      stichera_lord_i_call: [
        { tone: 4, spec_mel: "Thou hast given a sign", director: true,
          text: "Having received the grace of the Holy [Spir]it, | thou didst pass through all the " +
                "world, O most glorious Hie[ro]theus, | [teach]ing all to honor the Unity in three " +
                "hy[pos]tases: | the Father without beginning, the Source of the [God]head, | and " +
                "with Him the Son Who is co-enthroned and consub[stan]tial with the [Fa]ther, // " +
                "Who was born of a Virgin as a man en[dowed] with flesh." },
        { tone: 4, spec_mel: "Thou hast given a sign", director: true,
          text: "Thou didst offer thy soul as a well-pleasing and divinely [sanc]tified gift, | and " +
                "didst deliver thy body as a divine and sacred [of]fering, | which also " +
                "[sanc]tifies the souls of those who believe in Al[might]y God, | and pours out " +
                "salvation to the [faith]ful. | For this reason we bless thy memory and thy " +
                "[bur]ial, // and we love thy miracles and proclaim thy [teach]ings." },
        { tone: 4, spec_mel: "Thou hast given a sign", director: true,
          text: "Thou didst behold the twelve A[pos]tles | at the most glorious Dormition of the " +
                "Ever-[Vir]gin, | the most [pure] Theotokos, the [Moth]er of the Lord, | and with " +
                "thee was Dionysius, who described the divine [hi]erarchies. | With them we the " +
                "faithful bless thine all-festive and most holy com[mem]o[ra]tion, // O glorious " +
                "Hie[ro]theus." },
      ],
      // OCA, Tone 2 (10-04.pdf prints the same hymn as unpointed prose, Tone II).
      stichera_glory: {
        tone: 2, director: true,
        text: "When thou wast present at the Mother of God’s divine Dor[mi]tion, | O blessed " +
              "[her]ald of God, | thou didst [glad]den the hearts of the faithful by thy di[vine] " +
              "accounts. | Delighting the assembly of the Apostles who [preached] God, | thou " +
              "didst sing with divine ecstasy of the [mys]teries of God. | [There]fore, as thou " +
              "hast acquired [bold]ness towards Christ, // pray on behalf of our souls, O hierarch " +
              "Hie[ro]theus!",
      },
      // 10-04.pdf: "Both now ..., Theotokion, or this Stavrotheotokion, in Tone II" —
      // only the Stavrotheotokion is printed. Source typo "O Christ,?" kept as printed.
      lic_stavrotheotokion: {
        tone: 2,
        spec_mel: "When from the Tree",
        text: "When the unblemished ewe-lamb * beheld her Lamb * willingly led as a man to the " +
              "slaughter, * she said, weeping: * “Dost Thou now hasten to leave me childless who " +
              "gave Thee birth O Christ,? * What is this that Thou hast done, O Redeemer of all? * " +
              "Even so I will hymn and glorify Thine extreme goodness, * which is beyond " +
              "understanding and all telling, ** O Lover of mankind!”",
      },

      // ── AT VESPERS: APOSTICHA ──────────────────────────────────────────────
      // None printed in 10-04.pdf — Octoechos governs at §2A.
      aposticha_glory_absent: true,

      // ── TROPARION & KONTAKIA ───────────────────────────────────────────────
      // OCA saint-specific proper (overrides St. Sergius Tone IV — text in note).
      // Two '^' carets stripped before [Ath] and [doc] — see note.
      troparion: {
        tone: 1, director: true,
        text: "We the [faith]ful all praise Hierotheus, the dis[ci]ple of Paul, | Hierarch of " +
              "[Ath]ens, | the world’s teacher and a [preach]er of the Faith, | who re[vealed] to " +
              "us Christ’s [Mys]teries | and poured forth streams of godly [doc]trine. // His life " +
              "was well-pleasing to God, Who is greatly [mer]ciful.",
      },
      // §5: kontakion_ode3 → 1st & 6th Hours (OCA, same hymn as 10-04.pdf Ode III Tone VIII);
      //     kontakion_ode6 → 3rd & 9th Hours (10-04.pdf Ode VI Tone IV; OCA prints none).
      kontakion_ode3: {
        tone: 8, spec_mel: "To thee, the champion leader", director: true,
        text: "Hierarch of [Ath]ens, we [praise] thee for thou hast instructed us in awesome and " +
              "in[ef]fable things, | and thou wast re[vealed] to [be] a divinely-inspired [writ]er " +
              "of hymns. | Pray that we be de[liv]ered from [ev]ery kind of sin, so that we may " +
              "[cry] to thee: // Rejoice, di[vine]ly-wise [Fa]ther Hie[ro]theus!",
      },
      kontakion_ode6: {
        tone: 4,
        spec_mel: "Having been lifted up",
        text: "In that thou wast an unshakable pillar, O Hierotheus, * thou wast not afraid of the " +
              "threats of the enemy, * but, hurled like a precious stone, * didst destroy the " +
              "fortress of delusion, O father. * Wherefore, with His life-giving and divine right " +
              "hand * the Master crowneth thee who hadst battled well. ** Him do thou entreat on " +
              "behalf of us all.",
      },
      ikos: "Submitting to Thy law, O Christ, Thy disciples, proclaiming the word of Thy divine " +
            "coming to all the nations, and ordained for all the Churches faithful pastors and " +
            "preachers. Wherefore, Thou didst ordain also this pastor, whom Thou didst choose from " +
            "childhood; and having enlightened him for Thyself as one blameless, Thou didst appoint " +
            "him for this and assigned to him Thy flock, revealing him who prayeth for us all as a " +
            "witness to Thy kingdom.",

      // ── MATINS: EXAPOSTILARION ─────────────────────────────────────────────
      // 10-04.pdf: "Exapostilarion of the holy hieromartyr: Spec. Mel.: 'Hearken, ye women'".
      exapostilarion: "Thou didst make that which is worse subject to that which is higher, O " +
                      "God-pleaser, all-wisely setting thy mind to oversee the passions. Wherefore, " +
                      "O Hierotheus, thou wast an instrument of theology and an apostle of Christ. " +
                      "O wise hierarch, pray thou for the world.",
      matins_exapostilarion_theotokion: {
        text: "Arriving at thy most pure dormition with the rest of the apostles, Hierotheus " +
              "chanted a hymn to thee, the maiden, divinely beholding in ecstasy what is strange " +
              "and ineffable, in that He is truly pleasing to God. O Virgin Mother of God, show us " +
              "also to be emulators of him.",
      },
    },

    // ── October 4 (A) — Venerable Paul the Simple, Disciple of St. Anthony (Simple §2A) ──
    {
      saint: "Venerable Paul the Simple, Disciple of St. Anthony the Great",
      oca_primary: false,
      source_file: "10-04A.pdf",
      rank: "simple",
      fekula_section: "2A",
      has_great_doxology: false,
      has_polyeleos: false,
      has_litya: false,
      has_paroemias: false,
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      aposticha_source: "octoechos",
      feast_e: null,
      feast_g: null,
      note: "RANK per encoding_rule_v2.md §1.1 WATERFALL, RUN IN FULL (ODS vol. III does not cover " +
            "4 October — see the Hierotheus entry). Step 2 Vigil — NO: plain 'AT VESPERS'. Step 3 " +
            "Polyeleos — NO. Step 4 Doxology — NO: no Great Doxology appointed. Step 5 " +
            "Six-Stichera — NO: 'On \"Lord, I have cried ...,\" 3 Stichera of the venerable one, in " +
            "Tone I'. Step 6 Simple — YES, single saint. " +
            "OCA lists Paul the Simple of Egypt 11th of 14 on 4 October → oca_primary false. OCA's " +
            "troparion (Tone 8, 'In you, O venerable Father Paul, the image of God shone forth') is " +
            "the same general monastic hymn as the PDF's, so no override; the St. Sergius " +
            "thou/thy text governs. OCA prints no kontakion and the OCA service-text docx for " +
            "2026-10-04 carries nothing for Paul. All texts are 10-04A.pdf, '*'/'**' verbatim. " +
            "LIC: 3 slots, 3 unique, Tone I, Spec. Mel. 'O marvelous wonder', no '(Twice)'. " +
            "Glory: Tone VI, Spec. Mel. 'Having set all aside'. Both now: 'Theotokion, or " +
            "Stavrotheotokion, in Tone VI' — neither text printed, so lic_theotokion and " +
            "lic_stavrotheotokion are absent by source (Octoechos appendix). " +
            "APOSTICHA: no stichera printed (Octoechos governs at §2A), but the PDF prints 'On the " +
            "Aposticha, Glory ..., in Tone III' — encoded as aposticha_glory (unpointed in source, " +
            "Tier-1). " +
            "KONTAKION: one, Tone II, after Ode VI and again AT LITURGY → kontakion_ode6, all four " +
            "Hours; its ikos follows it. No Ode III kontakion (the Ode III slot prints a sessional " +
            "hymn). " +
            "AT LITURGY prints only troparion and kontakion: feast_e/feast_g null, other propers " +
            "absent by the source. Matins format and Magnificat inferred as for Hierotheus. " +
            "SCOPE (§6): canon, Ode III sessional hymn, and the 'After the Exapostilarion. Glory " +
            "..., and this of the venerable one, in Tone VIII' ('Come, ye who have forsaken the " +
            "tumult of cities') are printed and not captured; the PDF prints no exapostilarion " +
            "text of its own.",

      // ── AT VESPERS: LORD I HAVE CRIED ──────────────────────────────────────
      stichera_lord_i_call_count: 3,
      stichera_lord_i_call: [
        { tone: 1, spec_mel: "O marvelous wonder",
          text: "O wondrous Paul, * how like unto the angels thou didst live; * how thou didst " +
                "humble thy soul like a babe; * how thou didst discomfit all the powers of Hades! * " +
                "Thy patience was ineffable * and thy struggles glorious. * Entreat Christ God, O " +
                "venerable one, ** on behalf of those who honor thy holy memory with love." },
        { tone: 1, spec_mel: "O marvelous wonder",
          text: "Wondrous was thine obedience, O wise Paul, * whereby, borne aloft as on wings, * " +
                "thou didst take flight in thy spirit, * attaining even unto the heavens, * where " +
                "thou dost now abide in blessedness. * Pray thou unceasingly to Christ God * on " +
                "behalf of those ** who honor thy holy memory with love." },
        { tone: 1, spec_mel: "O marvelous wonder",
          text: "Having Christ dwelling within thy soul, O venerable one, * boldly didst thou say " +
                "to Him: * On this place shall I remain immovable * until Thou dost obey me, O " +
                "Jesus my Savior. * Wherefore, thou didst receive the fulfillment of thy petition " +
                "in an instant, * and didst drive out an unclean spirit with authority. * Pray " +
                "thou, O most marvelous wonderworker, ** for us who honor thy holy memory with " +
                "love." },
      ],
      stichera_glory: {
        tone: 6,
        spec_mel: "Having set all aside",
        text: "Heeding the Master’s voice * within thy soul * and having forsaken the world, * " +
              "thou didst run after Him, * and emulated the angels, O blessed one, * abiding in the " +
              "desert as one of the bodiless host * and emulating Christ Himself in obedience. * " +
              "Wherefore, thou didst find, O most wise one, * recompense an hundredfold and " +
              "eternal life. ** Pray thou on behalf of our souls.",
      },

      // ── AT VESPERS: APOSTICHA ──────────────────────────────────────────────
      // Stichera from the Octoechos (§2A); only the Glory is Menaion.
      aposticha_glory: {
        tone: 3,
        text: "Be glad, ye desert dwellers! Rejoice, ye venerable! Sing with the angels, ye " +
              "righteous! Hold festival, ye monks and laymen! And leap-up in spirit, O great " +
              "Anthony, beholding thy disciple exalted by God; Paul, wondrous in boldness, a " +
              "mighty intercessor for the world.",
      },

      // ── TROPARION & KONTAKION ──────────────────────────────────────────────
      troparion: {
        tone: 8,
        text: "In thee, O father, the image of God was preserved, * for taking up thy cross, thou " +
              "didst follow after Christ; * by activity thou didst learn to disdain the flesh, as " +
              "something transient, * but to care for thy soul as something immortal. ** " +
              "Wherefore, with the angels thy spirit doth rejoice, O venerable Paul.",
      },
      kontakion_ode6: {
        tone: 2,
        text: "Forsaking the crooked paths of the sin-loving world, * thou didst run with steps of " +
              "obedience after Christ; * being an elder thou didst humble thyself as an infant; * " +
              "wherefore, thou hast entered into the kingdom of heaven * in accordance with the " +
              "Master’s word; * for which cause we cry aloud to thee: * Rejoice, O faithful " +
              "servant of the Lord! * Rejoice, beacon of the virtues! ** Rejoice, O Paul, our " +
              "venerable father!",
      },
      ikos: "Making thyself a disciple of Anthony, the wise instructor of monks, thou hast become " +
            "an instructor for all who wish to live in sanctity; taught genuine simplicity by " +
            "babes, thou dost show thyself to young and old as an image of transcendent wisdom; " +
            "emulating the angels in thy life, thou hast received from God great power over the " +
            "demons. Wherefore, hymning thy memory with love, we cry out: Rejoice, O faithful " +
            "servant of the Lord! Rejoice, beacon of the virtues! Rejoice, O Paul, our venerable " +
            "father!",
    },
  ],
};

export default OCTOBER_MENAION;
