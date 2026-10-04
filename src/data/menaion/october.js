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

  // ── October 11 — 2026 ONLY: Sunday of the Holy Fathers of the Seventh Ecumenical Council ──
  // KEYED AT 10-11 FOR 2026 ONLY (Bill, 2026-10-03). 11 October 2026 is the Sunday on or
  // after 11 October, so the Fathers' service (10-11A.pdf) governs; V1 has no Sunday-in-a-
  // window mechanism. In other years this first element is wrong for 10-11 — see its note.
  // [0] Fathers (OCA primary) · [1] Philip & Theophanes (10-11.pdf, §2B double)
  // [2] Zinaida & Philonilla (10-11B.pdf, §2A). [1] and [2] are not served in 2026.
  "10-11": [
    {
      saint: "Holy Fathers of the Seventh Ecumenical Council",
      oca_primary: true,
      source_file: "10-11A.pdf",
      rank: "vigil",
      fekula_section: "1E",
      has_great_doxology: true,
      has_polyeleos: true,
      has_litya: true,
      has_paroemias: true,
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      aposticha_source: "octoechos",
      matins_gospel: null,
      paroemia_1: "Genesis — Abram rescues Lot; Melchizedek brings forth bread and wine (Genesis 14:14-20)",
      paroemia_2: "Deuteronomy — Moses appoints wise men as heads over the tribes (Deuteronomy 1:8-11, 15-17)",
      paroemia_3: "Deuteronomy — the Lord God of gods, Who regardeth not persons (Deuteronomy 10:14-21)",
      feast_e: "Hebrews 13:7-16 (§334)",
      feast_g: "John 17:1-13 (§56)",
      prokeimenon_tone: 4,
      prokeimenon_text: "Blessed art Thou, O Lord God of our fathers, and praised and glorified is Thy name unto the ages.",
      prokeimenon_stichos: "For righteous art Thou in all which Thou hast done for us.",
      alleluia_tone: 1,
      alleluia_verse: "The God of gods, the Lord, hath spoken, and He hath called the earth from the rising of the sun and unto the setting thereof.",
      alleluia_stichos: "Gather together unto Him His holy ones who have established His covenant upon sacrifices.",
      communion_verse: "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
      note: "2026-ONLY KEYING — READ THIS FIRST. This is the service of the Sunday on or after 11 October (St. Sergius 10-11A.pdf heading: 'THE SUNDAY ON OR AFTER THE 11th DAY OF THE MONTH OF OCTOBER'). V1 keys the Menaion by fixed date and has no Sunday-in-a-window mechanism, so on Bill's ruling (2026-10-03) it is stored under 10-11 because 11 October 2026 IS that Sunday. In any year where 11 October is not a Sunday this element is WRONG for 10-11 and must not be selected; the window Sunday (11-17 October, St. Sergius/OCA — Bill's ruling over ODS vol. III's 8-14 October) needs a window mechanism or Menaion V2. The fixed 11 October saints (10-11.pdf, 10-11B.pdf) follow as the other elements of this array; per 10-11A.pdf 'the service of the saint appointed for that Sunday is omitted and is chanted whenever the ecclesiarch shall decide.' RANK: ODS 3rd ed. vol. III, entry `ods3-1008x1014-sun` (pp. 38-40), prints NO rank — one of the 27 deliberately unranked entries (§1.1 step 0). Per §1.1 no rank is inferred. `rank: \"vigil\"` and `fekula_section: \"1E\"` are the V1 SCHEMA TOKENS that make the assembler and gate treat this as the service shape vol. III actually prints (Little Vespers; Great Vespers with 10 stichera 4+6, three readings, Litia; Polyeleos; Great Doxology; Hours kontakia split resurrection 1st/6th, Fathers 3rd/9th) — they are NOT a claim about the Fathers' festal class. FLAG for V2. SOURCES: OCA service text 2026-1011-texts-tt.docx (OCA_service_texts/) supplies, Tier-3 director-pointed (director: true): the 5 unique LIC stichera of the Fathers (Tone 6, 'Given up as lost' = St. Sergius 'The despairing'), the LIC Glory, the Litia Glory and Both-now (Tone 3), the Aposticha Glory and Both-now (Tone 4), the troparion (Tone 8) and the kontakion (Tone 6). OCA prints the first LIC sticheron with '(Repeat)' and St. Sergius marks it '(Twice)' — repeatIndex marker, 6 slots. REGISTER: the OCA stichera address the Fathers in contemporary 'you'; stored VERBATIM on Bill's ruling (2026-10-03, 06-17 precedent); Check F-1b warnings on those stichera are expected. OCA's Litia/Aposticha texts are the same hymns as 10-11A.pdf in OCA's translation. St. Sergius 10-11A.pdf supplies what OCA does not print: ikos, exapostilarion (Glory) and its theotokion, the 4 Beatitude troparia from Ode III, and the Liturgy propers. St. Sergius troparion (set aside for OCA's, same hymn): 'Most glorious art Thou, O Christ our God, * Thou hast established our Holy Fathers as luminaries upon the earth * and through them hath instructed us all in the true faith. * O Most merciful One, glory be to Thee.' LORD I HAVE CRIED Both-now is the Dogmatic Theotokion of the tone — Octoechos governs; no lic_theotokion. Litia: 'the Stichera of the temple, and then: Glory' — no Menaion Litia stichera, so litya_stichera is []. Aposticha stichera are of the resurrection (Octoechos); only Glory and Both-now are of the Fathers. MATINS GOSPEL: the resurrectional (eothinon) Gospel of the Sunday — the Fathers' service appoints none of its own, so matins_gospel is null. No Magnification is printed. LITURGY: Beatitudes 10 = 6 of the resurrection + 4 from Ode III of the Fathers; prokeimenon, Epistle, Alleluia, Gospel and communion are 'of the day, and then of the fathers' — the Fathers' are encoded (Heb §334, John §56); the Sunday's come from the cycle. The OCA docx confirms both pairs. The canon (Odes I-IX), sessional hymn and Praises are out of scope (§6).",
      stichera_lord_i_call_count: 6,
      stichera_lord_i_call: [
        { tone: 6, spec_mel: "The despairing", director: true, text: "The seven honorable councils of the Fathers, held at [var]ious times, | were brought together under one canon in good [or]der | by Patriarch Ger[man]us the New. | He established and recorded their [teach]ings; | he also presented these [Fa]thers to the Lord | as watchful intercessors for our sal[va]tion, // and as fellow-[shep]herds of the fold." },
        { repeatIndex: 0 },
        { tone: 6, spec_mel: "The despairing", director: true, text: "The book of the Law instructed the sons of [Is]rael | that the seventh day was to be [hon]ored, | and they devoted themselves to a shadow and [rev]erenced it. | But, O Fathers, who came together in the Seventh [Coun]cil, | at the be[hest] of God, | Who fashioned the universe in six days and blessed the [sev]enth day, // you have made the seventh more honorable by laying down a defi[ni]tion of the Faith." },
        { tone: 6, spec_mel: "The despairing", director: true, text: "You have enabled all men, O thrice-blessed [Fa]thers, | to come to the knowledge of the [Trin]ity | as the Cause of the world’s gener[at]ion; | for by your mystical [rea]soning | you established three and four [Coun]cils, | and you appeared as champions of [Or]thodoxy, | for you showed that, while there are four [el]ements, // it is the Trinity Who created them and [made] the world." },
        { tone: 6, spec_mel: "The despairing", director: true, text: "It would have been enough for Elisha the [Proph]et | to have bent down only once to give life to the dead son of the [wom]an; | but he knelt and bent [sev]en times. | And in his foresight he prophesied your [gath]ering, | by which you breathed life into the slaying of [God] the Word, // by condemning Arius and his profane com[pan]ions." },
        { tone: 6, spec_mel: "The despairing", director: true, text: "In your wisdom, O venerable [Fa]thers, | you mended the garment of Christ, rent by [howl]ing dogs; | for you could not bear looking upon the nakedness of His [Bod]y, | but as Shem and Japheth of old who hid their father’s [na]kedness, | you put to shame that slayer of his father, the wretched [Ar]ius, // and those who foolishly follow his [teach]ings." },
      ],
      stichera_glory: { tone: 6, director: true, text: "Today let us praise the mystical trumpets of the [Spir]it, | the God-bearing [Fa]thers, | who stand in the midst of the Church, singing true the[ol]ogy, | praising the changeless [Trin]ity! | They laid low the errors of [Ar]ius | and upheld the [Orth]odox Faith. // They always entreat the Lord to have [mer]cy on our souls." },
      litya_stichera: [],
      litya_glory: { tone: 3, director: true, text: "The holy Fathers are the renowned [keep]ers | of the Apostles’ tra[dit]ion; | They rightly taught that the Trinity was undi[vid]ed, | and their assembly dethroned Arius and [those] with him: | the Macedonians who rejected the authority of the Church were con[vict]ed; | Nestórius, Eutýchius, Dióscorus, Sabéllius, and [Sev]erus were judged. | O Lord, deliver us from their [er]ror, we pray, // and pre[serve] our [lives] in peace!" },
      litya_both_now: { tone: 3, director: true, text: "By the will of the [Fa]ther, | without seed, of the Holy Spirit thou didst conceive the [Son] of God. | He was born of the Father before eternity without a [moth]er, | but now for our sake He didst come from thee without a [fa]ther! // Do not cease entreating Him to de[liv]er our [souls] from harm!" },
      stichera_aposticha: [],
      aposticha_note: "Body stichera are of the resurrection from the Octoechos (4, with their psalm verses — ODS vol. III p. 38; 10-11A.pdf: 'On the Aposticha: Glory ..., of the fathers'). Only the Glory and Both-now are of the Fathers.",
      aposticha_glory: { tone: 4, director: true, text: "Come, all Orthodox [Church]es, | let us celebrate today in faith and true [wor]ship | the [year]ly commemoration of the divinely-arrayed [Fa]thers | who gathered at Nicea from through[out] the world! | There they refuted the godless [teach]ing of [Ar]ius, | banishing him from the catholic Church by a decree of the [coun]cil. | They taught all to confess openly the [Son] of God, | consubstantial and co-e[ter]nal with the [Fa]ther, | proclaiming this with precision and true worship in the [Sym]bol of Faith. | Therefore, as we faithfully follow their divine [doc]trines, | let us worship the Father, the Son, and the most [Ho]ly [Spir]it, // the consubstantial Trinity in one [God]head!" },
      aposticha_both_now: { tone: 4, director: true, text: "Look on the entreaties of thy servants, O [Blame]less One! | Stop all the terrible attacks a[gainst] us, | [free]ing us from every af[flic]tion, | for we have only thee as our sure and firm [an]chor! | Do not let us be put to [shame], O [La]dy, | for we call on thee for our inter[ces]sion! | Hasten to pray for those who [call] in faith: | “Rejoice, O [La]dy, [Help] of all: // the Joy and Shelter and Sal[va]tion of our souls!”" },
      troparion: { tone: 8, director: true, text: "Thou art most [glo]rious, O [Christ] our God, | Who hast es[tab]lished the [Ho]ly Fathers as [lights] on the earth. | Through them Thou hast [guid]ed us to the [True] Faith. // O greatly com[pas]sionate [One], [glo]ry to Thee!" },
      kontakion_ode6: { tone: 6, director: true, text: "The Son Who shone forth from the [Fa]ther | was ineffably born, two-fold in nature, of a [wom]an. | Having beheld Him, we do not deny the [im]age of His form, | but depict it piously and revere it [faith]fully. | Thus, keeping the [True] Faith, // the Church venerates the icon of Christ In[car]nate." },
      ikos: "Ikos: The all-compassionate God, Who doth ever desire to rouse us to the perfect memory of His incarnation, gifted the notion to mankind, that His precious form be depicted with pigments upon icons; that, beholding these in visible objects, we may believe that which we have heard spoken, clearly comprehending the activity, the names, features and sufferings of holy men and Christ, the Bestower of crowns, Who presenteth these crowns to holy athletes and martyrs. And the Church, most diligently holding fast to the true faith for their sake, venerates the icon of the incarnation of Christ.",
      exapostilarion: "O ye fathers of heavenly mind, who assembled at the Seventh Council, ever bring your earnest prayers unto the Trinity, that we who hymn your divine Council may be delivered from all heresy and eternal judgment, and may receive the Kingdom of heaven.",
      matins_exapostilarion_theotokion: { text: "Through the supplications of Thy Mother, O supremely good Lord, and of the fathers who assembled at the seven Councils, establish Thou the Church and strengthen the Faith; and when Thou comest to earth to judge all creation, show us all to be heirs of the Kingdom of heaven." },
      beatitudes_source: "menaion",
      beatitudes_count: 10,
      beatitudes_troparia: [
        { text: "Initiated into the mysteries of Christ; the divine chief shepherds drove the cohorts of Antichrist, who wished to trouble the Church of Christ, far from the pious, that it not be shaken.", source: "Ode III", label: "Ode III, 1" },
        { text: "The company of the fathers, drawing forth streams of teaching from the wellsprings of salvation, gave the thirsting people of Christ to drink thereof, and washed away the turbid streams of filth.", source: "Ode III", label: "Ode III, 2" },
        { text: "The Seventh Council of the Christ-loving fathers, whose defenders were the imperial Irene and Constantine, was held in the splendid city of Nicaea against those who in truth despise Christians and prosecuted them.", source: "Ode III", label: "Ode III, 3" },
        { text: "Theotokion: Let all those who do not honor the precious icon of the Theotokos the impious depart, for they do not proclaim her to be the one that hath given birth to Christ as a man; wherefore let them be sent into the fire, to burn without being consumed.", source: "Ode III", label: "Ode III, Theotokion" },
      ],
    },
    {
      saint: "Holy Apostle Philip of the Seventy, One of the Seven Deacons; Venerable Theophanes the Confessor, the Hymnographer, Bishop of Nicaea",
      oca_primary: false,
      source_file: "10-11.pdf",
      rank: "simple",
      fekula_section: "2B",
      has_great_doxology: false,
      has_polyeleos: false,
      has_litya: false,
      has_paroemias: false,
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      aposticha_source: "octoechos",
      feast_e: "Acts 8:26-39",
      feast_g: "Luke 10:1-15",
      prokeimenon_tone: 8,
      prokeimenon_text: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
      prokeimenon_stichos: "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.",
      alleluia_tone: 1,
      alleluia_verse: "The heavens shall confess Thy wonders, O Lord, and Thy truth in the congregation of saints.",
      alleluia_stichos: "God Who is glorified in the council of the saints.",
      communion_verse: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
      note: "NOT SERVED IN 2026 — on 11 October 2026 the Fathers of the Seventh Council (first element) displace it. Encoded so the date is complete for years when 11 October is not the Fathers' Sunday. RANK: ODS vol. III has no 1011 entry; waterfall run. Not Great Feast; plain 'AT VESPERS' (no Small Vespers); no Polyeleos; no Great Doxology; 6 stichera at LIC split 3 + 3 between TWO saints → §1.1 Double commemoration, Simple rank, fekula_section 2B (07-04 precedent). LIC: 3 of the apostle (Tone IV, 'Called from on high') + 3 of the venerable one (Tone VI, 'Having set all aside'); each item carries `saint`. 'Glory ..., Both now ..., Theotokion, in the same melody' — a THEOTOKION under the combined heading, followed by a Stavrotheotokion: stored as lic_theotokion and lic_stavrotheotokion; no separate doxasticon (stichera_glory_absent). No Aposticha printed (Octoechos governs; aposticha_glory_absent). TROPARIA: Philip (Tone III) as troparion, Theophanes (Tone VIII, at Glory) as troparion_second. KONTAKIA (§5): Theophanes' kontakion (Tone II) is printed after ODE III → kontakion_ode3 (1st & 6th Hours); Philip's (Tone IV) after ODE VI with the ikos → kontakion_ode6 (3rd & 9th Hours). AT LITURGY prints both. EXAPOSTILARIA: Philip's, then 'Glory ..., that of the venerable one' (exapostilarion_2), then the theotokion. LITURGY: Beatitudes '4 from the Oktoechos, and 4 from ODE III of the holy apostle' (beatitudes_count 8); prokeimenon of the apostles, Acts 8:26-39, Luke 10:1-15 — the PDF prints no § numbers for either. OCA: OCA lists Philip and Theophanes on 11 October as secondary to the Fathers in 2026; no live OCA troparion lookup was possible this session (oca.org fetch not permitted), so the St. Sergius texts stand. The canons and sessional hymns are out of scope (§6).",
      stichera_lord_i_call_count: 6,
      stichera_lord_i_call: [
        { tone: 4, spec_mel: "Called from on high", saint: "Philip", text: "O blessed Philip, * who as one full of wisdom and divine grace * wast numbered among the seven deacons, * thou wast chosen with Stephen * to minister to the needs of the saints. * Wherefore, beholding him slain, * thou didst hasten to Samaria * at the command of God, O glorious one, * preaching the word of God * and enlightening those who before were in darkness, O all-wise one, * whom thou didst make children of the day ** through the Spirit of God." },
        { tone: 4, spec_mel: "Called from on high", saint: "Philip", text: "Beholding the divine signs wrought by thy hand: * the recovery of sight by the blind, * the healing of the paralyzed, * the expulsion of unclean spirits * where they lived, * the people marveled, O Philip, * and came to thee for spiritual cleansing, * brought suddenly from unbelief to faith. * Wherefore, when they heard of this, * the divine choir of the apostles were gladdened, ** for multitudes of Samaritans were led to God." },
        { tone: 4, spec_mel: "Called from on high", saint: "Philip", text: "Being thyself a chariot of the Word, * O divinely eloquent one, * beholding the right wondrous eunuch of Candace * riding upon a chariot, * questioning and in doubt, * thou didst overtake him * and didst reveal to him * the discourse and manifestation * of things desired, O blessed one; * and, believing, he asked of thee divine cleansing. * And when he had received it, * the Creator of all made him a divine preacher, ** the first among the martyrs of all Ethiopia." },
        { tone: 6, spec_mel: "Having set all aside", saint: "Theophanes", text: "Radiantly didst thou shine forth, * O glorious Theophanes, * in the firmament of faith * like a star most bright, * dispelling all the darkness * of the heretics * with the rays of thy light * and illumining with thy divine teaching * those who turn to thee with faith and love. * Wherefore, with love * we celebrate thy radiant feast: ** Pray thou with boldness on behalf of our souls." },
        { tone: 6, spec_mel: "Having set all aside", saint: "Theophanes", text: "Having armed thy soul * with labors of fasting, * thou didst put an end to the cavorting of the flesh, * O most sacred father, * and made thy mind a dwelling of the divine Trinity, O glorious one. * Thou wast raised aloft * to where the armies of the martyrs, * the assemblies of hierarchs * and ineffable beauty are, * and with them dost thou now rejoice, * standing in glory before Christ, ** praying with boldness on behalf of our souls." },
        { tone: 6, spec_mel: "Having set all aside", saint: "Theophanes", text: "With the divine streams of thy tears, O hierarch, * thou didst drown the encampments of the demons * as though they were helpless; * and by thy continual beseeching of God * and thy mighty ascents * thou didst cast down to the earth * prideful exaltation * and didst ascend * to the splendid mansion of heaven, * wherein thou dost abide with the angels, * standing before Christ, ** praying with all the company of the blessed ones." },
      ],
      stichera_glory_absent: true,
      lic_theotokion: { tone: 6, spec_mel: "Having set all aside", text: "Having stumbled * because of mine evil disposition, * and been enslaved to wicked deception, O Bride of God, * wretch that I am, I flee to thine all-wondrous loving-kindness * and thy fervent aid, * O most holy maiden. * Deliver me from the bonds of temptations and grief, * O most immaculate one, * and save me from the assaults of the demons, * that I may glorify thee, * and hymn and bow down before thee with love, ** magnifying thee, O Sovereign Lady, as ever-blessed." },
      lic_stavrotheotokion: { tone: 6, spec_mel: "Having set all aside", text: "When, of old, the unblemished ewe-lamb * and immaculate Sovereign Lady, * beheld her Lamb * upon the tree of the Cross, * she exclaimed maternally, and marveling cried aloud: * “O my Child most sweet, * what is this new and most strange sight I see? * How hath the thankless synagogue * betrayed Thee to the judgment-seat of Pilate * and condemned Thee to death, * Who art the Life of all? ** Yet do I hymn Thine ineffable condescension, O Word!”" },
      aposticha_glory_absent: true,
      troparion: { tone: 3, text: "O holy apostle Phillip, * entreat the Merciful God * that He grant remission of sins ** unto our souls" },
      troparion_second: { tone: 8, text: "Teacher of Orthodoxy, instructor of piety and chastity, * luminary of the Church, God-inspired instructor of hierarchs, * O supremely wise Theophanes thou hast illumined all by thy teaching; ** entreat Christ God that our souls be saved." },
      kontakion_ode3: { tone: 2, spec_mel: "Seeking the Highest", text: "Thundering forth the divine incarnation of Christ, * thou didst utterly denounce the incorporeal foe, * O wondrous Theophanes. * Wherefore, we all piously cry out to thee with faith: ** Pray thou unceasingly on behalf of us all!" },
      kontakion_ode6: { tone: 4, spec_mel: "Having been lifted up", text: "The most wondrous fisher of nations, * converser with the disciples of Christ, * Philip, forechosen from among the apostles, * doth today bestow a wealth of healing upon the world, * protecting those who praise him from evil circumstances. * Wherefore, together we cry aloud to him: ** Save us all by thy prayers, O apostle!" },
      ikos: "Ikos: Declaring the glory of God like the heavens, O thou who wast an eyewitness of Christ, thou didst draw far-off nations to the faith, that they might draw close to God. Wherefore, like Moses the giver of the Law, thou hast enriched thy flock, O all-famed one; for of old he divided the sea and led his people across, and afterwards in the desert fed them with heavenly bread; but thou, delivering all creation in Christ from a cold and cruel lack of faith, hast led up to the heavenly mansions on high those who cry: Save us all by thy prayers, O apostle!",
      exapostilarion: "O apostle of Christ, throughout all the world have thy proclamations gone, whereby thou didst preach God to us. Him do thou entreat on our behalf, that He shine upon us His noetic light.",
      exapostilarion_2: "Thou hast been revealed to the Church to be a divine light, O Theophanes, illumining it with the splendor of thy hymns and with the light of thy face whereon thou didst bear the wounds of Christ as an adornment. Cease thou never to pray to Him on behalf of thy flock, O father.",
      matins_exapostilarion_theotokion: { text: "The garment given me of old in the font of baptism have I defiled with the wantonness of the passions, and, wretch that I am, I am afraid, mindful of the hour of the divine and truly dread Judgment. O all-immaculate Virgin, intercede for me and deliver me from the awful threat." },
      beatitudes_source: "menaion",
      beatitudes_count: 8,
      beatitudes_troparia: [
        { text: "Sons of light didst thou make of those who were in the darkness of unbelief, O blessed one, declaring the glory of the Word in awesome signs, like a lofty heaven.", source: "Ode III", label: "Ode III, 1" },
        { text: "Proclaiming in sacred manner Christ Who shone forth from the tribe of Judah, O blessed one, with the light of grace thou didst show Him forth Whom Moses and the prophets foretold of old.", source: "Ode III", label: "Ode III, 2" },
        { text: "With words flowing with sweetness dost thou prevail upon those long cast off through ignorance to reject soul-destroying poison and accept the grace of salvation, O divinely inspired Philip.", source: "Ode III", label: "Ode III, 3" },
        { text: "Theotokion: O maiden, thou wast shown to be a mystic candlestick truly bearing the Light which, in His extreme goodness, doth enlighten those who before were held fast in the night of ignorance.", source: "Ode III", label: "Ode III, Theotokion" },
      ],
    },
    {
      saint: "Holy Martyrs Zinaida & Philonilla",
      oca_primary: false,
      source_file: "10-11B.pdf",
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
      note: "NOT SERVED IN 2026 (see the Fathers element). RANK: waterfall — plain 'AT VESPERS', no Polyeleos, no Great Doxology, 3 stichera at LIC for a single commemoration (two martyrs under one heading) → Simple §2A. LIC Tone VIII 'O most glorious wonder'; Glory Tone VI; 'Both now ..., Theotokion, or this Stavrotheotokion, in Tone VI' — only the Stavrotheotokion printed (lic_stavrotheotokion). Aposticha: 'the Stichera from the Oktoechos; and Glory ..., in Tone IV' → aposticha_glory, and 'Both now ..., Theotokion, or this Stavrotheotokion' → aposticha_stavrotheotokion. One kontakion (Tone II) after ODE VI and AT LITURGY → kontakion_ode6, with its ikos. AT LITURGY prints only the troparion and kontakion — feast_e/feast_g null, other propers absent by the source. Zinaida & Philonilla are a Russian-Menaion commemoration; oca_primary false. Canon out of scope (§6).",
      stichera_lord_i_call_count: 3,
      stichera_lord_i_call: [
        { tone: 8, spec_mel: "O most glorious wonder", text: "O wondrous feast! * O sacred memorial! * For the godly ones, full of zeal for God, * have been taken together into the mansions of paradise. * Above, God calleth them to His kingdom, * and below, those who have received healings bless them; * the angels escort them with gladness, * and we cry out with compunction: ** Remember us, O glorious ones, before the throne of the Almighty!" },
        { tone: 8, spec_mel: "O most glorious wonder", text: "O blessed is the sleep * from which ye have awakened unto life everlasting, * O mighty martyrs of Christ, * ye innocent ewe-lambs! * For the sake of Christ, the Chief Cornerstone, ye were slain by stoning. * Having received the most radiant crown of Stephen, * delighting in the sight of the undimmed glory, * remember us, O martyrs, ** before the throne of the Almighty." },
        { tone: 8, spec_mel: "O most glorious wonder", text: "O your blessed hands! * O your most excellent fingers * which pour forth grace, * bestowing healings! * Extend them toward us in your mercy, * for we are cruelly afflicted, ailing in soul and body. * Yet we unceasingly cry aloud: * Remember us, O martyrs, ** before the throne of the Almighty." },
      ],
      stichera_glory: { tone: 6, text: "Thy heart afire with pity for the people, O glorious Zinaida, calling down divine grace, thou didst stretch forth thy hands to heal, freely curing every sore and every sickness, anointing spiritual wounds with the oil of love. Wherefore, O passion-bearer, heal us also, who have fallen among thieves and have been wounded by the darts of the enemy; for thou hast great boldness before the Savior of our souls." },
      lic_stavrotheotokion: { tone: 6, spec_mel: "Having set aside", text: "A sword pierced thy heart, * O most pure Lady, * as Symeon said, * when thou didst behold Him Who shone forth from thee ineffably, * condemned by the iniquitous * and lifted up upon the Cross, * tasting vinegar and gall, * His side pierced, * His hands and feet run through with nails; * and, lamenting, thou didst exclaim, crying out maternally: * “What is this new mystery, ** O my Child most sweet?”" },
      aposticha_glory: { tone: 4, text: "O godly Zinaida, thou emulator of Paul thine all-great kinsman, the apostle of the nations, of Luke the beloved physician, and of John, the chief of theologians, most fervent in his love for God the Savior, as an earnest disciple of the Savior thou dwellest now with His disciples. With them pray that our souls be saved." },
      aposticha_stavrotheotokion: { tone: 4, spec_mel: "As one valiant among the martyrs", text: "Beholding Christ crucified, * Who is the Lover of mankind, * His side pierced by the spear, * the most pure one wept, crying aloud: * “What is this, O my Son? * How have the thankless people rewarded Thee * for the good things Thou didst do for them? * And dost Thou hasten to leave me childless, O most Beloved? ** I marvel, O compassionate One, at Thy voluntary crucifixion!”" },
      troparion: { tone: 4, text: "Having finished the race and kept the Faith, * through martyrdom ye were led to Christ, the Lamb and Shepherd, * as reason-endowed ewe-lambs. * Wherefore, with joyous soul we celebrate your holy memory today, ** magnifying Christ, O right wondrous Zinaida and Philonilla." },
      kontakion_ode6: { tone: 2, text: "O emulators of Stephen, the first among spiritual athletes, * and fellow laborers with the unmercinary physicians: * for the sake of Christ, the Chief Cornerstone, * ye were persecuted by hardhearted people and stoned to death; * and having acquired boldness before the Holy Trinity, * ye drive away the ailments of the suffering. * O martyrs, beseech the merciful God, * that we who honor your sufferings with faith ** may be saved." },
      ikos: "Ikos: Hearing the people say, “Physician, heal thyself!”, thou didst strive first of all to cure thine own passions, O Zinaida, to keep every commandment of the Lord, and then to preach Christ the Savior, the Life and Light of the world, and to heal those suffering in body and spirit. For which cause, as one who labored and taught, great things have been spoken of thee in the kingdom of God, wherein, with the glorious Philonilla who struggled with thee, you find consolation together. Wherefore, pray thou with her, that we who honor your sufferings with faith may be saved.",
      exapostilarion: "Blessed are ye, O martyrs of Christ who have received the most glorious crown of Stephen; for every stone with which the temples of your bodies were broken hath been set in the foundation of the most radiant bridal-chamber which hath been prepared for you in heaven. And dwelling therein now in blessedness, cease not to pray for those who honor you.",
      matins_exapostilarion_theotokion: { text: "With the apostles entreat thy Son and Lord, O Theotokos, that He have mercy upon all who hymn and glorify thee, and who venerate thee in icons, bowing down and kissing them with love as is meet." },
    },
  ],

  // ── October 18 — Holy Apostle and Evangelist Luke (Polyeleos §2E) ──
  // Waterfall run (no ODS vol. III entry). OCA director-pointed texts from
  // 2026-1018-texts-tt.docx where OCA prints them; St. Sergius 10-18.pdf otherwise.
  "10-18": {
    saint: "Holy Apostle and Evangelist Luke",
    oca_primary: true,
    source_file: "10-18.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    has_great_doxology: false,
    has_polyeleos: true,
    has_litya: false,
    has_paroemias: true,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    aposticha_source: "menaion",
    matins_gospel: "John 21:15-25 (§67)",
    magnification: "We magnify thee, O apostle of Christ and evangelist Luke, and we honor thy pangs and labors wherewith thou didst struggle in the proclamation of the Gospel of Christ.",
    magnification_selected_psalm: "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.",
    paroemia_1: "1 John — that which was from the beginning; God is light (1 John 1:1-7)",
    paroemia_2: "James — count it all joy when ye fall into divers trials (James 1:1-12)",
    paroemia_3: "Jude — contend for the Faith once delivered unto the saints (Jude 1:1-7, 17-25)",
    feast_e: "Colossians 4:5-9, 14, 18 (§260)",
    feast_g: "Luke 10:16-21 (§51)",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "The heavens shall confess Thy wonders, O Lord, and Thy truth in the congregation of saints.",
    alleluia_stichos: "God Who is glorified in the council of the saints.",
    communion_verse: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
    note: "RANK per §1.1 WATERFALL (ODS vol. III has no 1018 entry). Not a Great Feast. No Small Vespers (heading 'AT GREAT VESPERS', no Little Vespers printed) → not Vigil. Polyeleos YES: 'Polyeleos, and this magnification: We magnify thee, O apostle of Christ and evangelist Luke' → Polyeleos §2E. Also 'Blessed is the man', 8 stichera at LIC, three lessons, Matins Gospel John §67. has_great_doxology false — NOT PRINTED: the Matins outline ends with the Praises Both-now and no Great Doxology/dismissal line (09-08A precedent; Fekula §2E appoints it, and on a Sunday it is sung regardless). has_litya false: St. Sergius prints no Litiya. The OCA docx prints optional Litya stichera for St. Luke ('If the rector desires the Litya') — 3 stichera Tone 4, Glory Tone 2, Theotokion Tone 2 — NOT encoded, since the Menaion service has none; flagged. SOURCES: OCA 2026-1018-texts-tt.docx supplies, Tier-3 (director: true): the 6 unique LIC stichera (Tone 8, 'What shall we call thee'), the LIC Glory (Tone 6, Anatolius), the Aposticha Glory and Theotokion (Tone 6), the troparion (Tone 5) and the kontakion (Tone 2). LIC is 8 slots: St. Sergius marks the first two stichera '(Twice)' → repeatIndex markers. TROPARION: St. Sergius prints two — Tone III 'O holy apostle Luke, * entreat the Merciful God * that He grant remission of sins * unto our souls' (at Vespers and AT LITURGY), and 'Or this Troparion ... in Tone V'. OCA uses the Tone V hymn ('Let us praise with sacred songs the holy Apostle Luke') — OCA governs (§1), so troparion = OCA Tone 5; the Tone III text is recorded here. St. Sergius supplies the 3 Aposticha stichera (Tone V, 'Rejoice, boast of fasters', with their verses; unpointed prose, Tier-1), the LIC Dogmatic Theotokion (Tone VI — weekday; on a Sunday the dogmatikon of the tone governs), the magnification, ikos, both exapostilaria and theotokion, Beatitudes (4 from Ode III, the first Twice, + 4 from Ode VI) and the Liturgy propers. Paroemias identified from the printed text (headings give book only). The OCA docx's own Liturgy readings list Col 4:5-9,14,18 and Luke 10:16-21 for St. Luke, agreeing with the PDF. Canon, sessional hymns and Praises out of scope (§6).",
    stichera_lord_i_call_count: 8,
    stichera_lord_i_call: [
      { tone: 8, spec_mel: "What shall we call you", director: true, text: "[What] shall we call thee, O A[pos]tle? | Heaven, for thou hast made an account of the glory of [God] for us? | Lightning, for thou hast illumined the [world] with [ra]diance? | A cloud, for thou rainest down in a torrent the [know]ledge of God? | A chalice pouring the rich wine of wisdom to [glad]den our hearts? // Pray to the Lord that He may [save] our souls!" },
      { repeatIndex: 0 },
      { tone: 8, spec_mel: "What shall we call you", director: true, text: "[How] shall we address thee, O [cho]sen of God? | Golden ark of the covenant that [Christ] laid down? | River flowing forth to [us] from [Par]adise? | Beacon made radiant by [spiri]tual light? | Lamp that en[light]ens the Church? | Bread of life, divine table, [cup] of [spir]itual drink? // Pray to the Lord that He may [save] our souls!" },
      { repeatIndex: 2 },
      { tone: 8, spec_mel: "What shall we call you", director: true, text: "[What] shall we call thee, O God-inspired [speak]er? | A faithful steward of the [mys]teries of Christ? | A servant of the divine tent not [made] with [hu]man hands, | perfected in the fullness of time by the Builder of [wis]dom? | He entrusted to thee the new [Law] of grace, | inscribed in Zion on tablets [hewn] from the [rock] of love. // O faithful witness, pray to Him that our [souls] may be saved!" },
      { tone: 8, spec_mel: "What shall we call you", director: true, text: "[What] shall we call thee, O [glo]rious one? | Treasury of [heav]enly gifts? | Steadfast physician of our [souls] and [bod]ies? | Fellow-laborer of Paul and his companion in travel and [hard]ship, | who set down the Acts of the A[pos]tles? | O Luke, thine exceeding goodness has [won] thee [man]y names. // Pray to the Lord that He may [save] our souls!" },
      { tone: 8, spec_mel: "What shall we call you", director: true, text: "[How] shall I address thee, O divinely-[speak]ing one, | for thou didst bring us the good [tid]ings of Christ? | Doctor, for thou dost [cure] the [pas]sions of souls? | Candlestick shining with a light of the [in]tellect? | Base and foun[da]tion of the Faith, | for thou didst write down for us the most [sa]cred [Gos]pel? // Pray that our [souls] may be saved!" },
      { tone: 8, spec_mel: "What shall we call you", director: true, text: "[What] shall I now call thee, O [won]drous one? | Trustworthy witness of the teachings of [wis]dom? | Able recorder of the A[pos]tles’ [teach]ing? | Unshakeable pillar of [pi]ety? | Indestructible [ram]part of the Church? | Many are thy strengths, and greater in [num]ber are thy s[pir]itual gifts. // Pray that our [souls] may be saved!" },
    ],
    stichera_glory: { tone: 6, director: true, text: "O A[pos]tle of Christ, | compiler of divine dogmas and foun[da]tion of the Church, | thou wast the attendant and imitator of Paul, the chosen [ves]sel. | By wisdom thou hast rescued us from the turmoil of [ig]norance, | for our hearts were in the depths of de[struc]tion. | Therefore we be[seech] thee: | “Most admirable Luke, thou pride of [An]tioch, | pray to our [Sav]ior and God // for those who celebrate thy most honorable [mem]ory in faith!”" },
    lic_theotokion: { tone: 6, text: "Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature He is God, by nature for our sakes, He hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!" },
    stichera_aposticha: [
      { tone: 5, spec_mel: "Rejoice, boast of fasters", text: "Grace was poured forth from thy lips in tongues of fire, O apostle Luke, and thou wast shown to be a tongue of fire, emitting words of light like burning arrows against those who desire darkness, writing and teaching the precious Gospel with preaching worthy of the Light; and thou wast revealed to be a living fragrance unto those who truly desire life, as said Paul, whom thou didst have as thy teacher, but the smell of death for those who loved not life. Yet grant unto us peace, life, light and great mercy." },
      { tone: 5, spec_mel: "Rejoice, boast of fasters", verse: "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.", text: "Through thy words, as thou didst say, we have come to recognize the confirmation of the words which thou didst utter in a most godly manner, O initiate of the mysteries, for, for our sake, thou didst put into writing those things which thou didst assuredly know from those who witnessed them and transmitted them to thee, as their peer and a servant of the Word incarnate, Whom thou didst behold in Emmaus after His arising, and Whose bread thou didst eat with Cleopas with burning heart. Fill thou also the souls of us who honor thee with His divine warmth." },
      { tone: 5, spec_mel: "Rejoice, boast of fasters", verse: "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.", text: "Rejoice, thou who alone, rejoicing, hast recorded for us the archangel’s greeting to the pure one: Rejoice!, and the Baptist calling her, from his mother’s womb, the bearer of the Lord, and his conception and the incarnation of the Word, His temptations and miracles, words and sufferings, His Cross, death and arising, and His issuing forth, which thou didst behold; and the descent of the Spirit, the account of the acts, especially those of Paul, whose companion thou wast, as well as a physician and initiate of the mysteries and a luminary of the Church, which do thou preserve always." },
    ],
    aposticha_glory: { tone: 6, director: true, text: "All-wise A[pos]tle, | faithful laborer of the [Sav]ior, | witness of the triumph of His [Pas]sion, | thou hast completed the race, thou hast [kept] the faith, | harvesting the peoples from the darkness of [er]ror, | offering us as a sweet-smelling oblation to the [heav]enly King. | Now as thou dost stand before the [Judge] of all, | pray that He may [res]cue us from our sins | and deliver us from e[ter]nal death, // when He comes in glory on the Day of [Judg]ment!" },
    aposticha_both_now: { tone: 6, director: true, text: "My Maker and Redeemer, [Christ] the Lord, | was born of thee, O most pure [Vir]gin. | By accepting my nature, He freed Adam from his [an]cient curse. | Unceasingly we magnify thee as the [Moth]er of God! | Rejoice, O ce[les]tial Joy! | Rejoice, O [La]dy: // the protection, intercession and sal[va]tion of our souls!" },
    troparion: { tone: 5, director: true, text: "Let us [praise] with sacred songs the holy A[pos]tle Luke, | the recorder of the joyous [Gos]pel of Christ | and the [scribe] of the Acts of the A[pos]tles; | for his [writ]ings are a testimony of the [Church] of Christ. | He is the physician of human weaknesses and in[fir]mities. | He [heals] the [wounds] of our souls, // and constantly inter[cedes] for our sal[va]tion." },
    kontakion_ode6: { tone: 2, spec_mel: "The steadfast", director: true, text: "Let us [praise] the [god]ly Luke; | he is the true preacher of [pi]ety, | the [or]ator of ineffable [mys]teries | and the [star] of the Church, | for the [Word], Who alone knows the [hearts] of men, // chose him, with the wise Paul, to be a [teach]er of the [Gen]tiles!" },
    ikos: "Ikos: Enriched with heavenly knowledge by the hand of the Master, thou wast entrusted with the portion of the gentiles, O all-praised one. Wherefore, setting thy life afire with discourse, O Luke, thou wast revealed to be a transmitter of the law to the nations greater than Moses. Through the Spirit thou didst explain the divine Faith, likening thyself to the divine tablets graven by the finger of God. Wherefore, Christ, Who alone knoweth our hearts, hath glorified thee.",
    exapostilarion: "O Luke, apostle of Christ, initiate of ineffable mysteries and teacher of the gentiles: with the godly Paul and the most pure Theotokos, whose divine icon thou didst lovingly depict, pray thou, O seer of God, on behalf of us who bless thee and celebrate thy sacred repose, O all-wise preacher of the mysteries.",
    exapostilarion_2: "We praise thee, the most excellent recorder of the divine Gospel, as the disciple of grace and follower of Paul; for thou didst proclaim the incarnation of the Word and His becoming a man, and His sufferings, O blessed one. Wherefore, assembling with faith, O Luke, we honor thee as is meet.",
    matins_exapostilarion_theotokion: { text: "Ineffable was the birthgiving of the all-immaculate Bride, for, as thou wast a most pure temple, O Theotokos, thou hast given birth unto God the Word, Who by pre-eternal counsel made His abode within thee. Wherefore, hymning thy birthgiving, we magnify thee as is meet, O all-immaculate one." },
    beatitudes_source: "menaion",
    beatitudes_count: 8,
    beatitudes_troparia: [
      { text: "Shining forth like the sun in thy preaching, O all-blessed Luke, thou didst adorn the foundation of the Church, causing the gloom of deception to vanish with the fervor of faith.", source: "Ode III", label: "Ode III, 1", note: "(Twice) per PDF" },
      { text: "Thou didst cut divinely beauteous tablets from the stone of the incarnation of God, O most noetically rich apostle, possessing a mason’s hammer in thy godly tongue and divinely inspired mouth.", source: "Ode III", label: "Ode III, 2" },
      { text: "Entering into the all-luminous cloud, and being covered thereby, O most wise one, thou didst receive the new law inscribed upon thy heart by the finger of the Spirit.", source: "Ode III", label: "Ode III, 3" },
      { text: "Having drained the cup of wisdom of the knowledge of Christ God, thou gavest drink unto all, O Luke all-wise.", source: "Ode VI", label: "Ode VI, 1" },
      { text: "Chosen as the companion of Paul, O all-blessed and divinely eloquent Luke, thou didst fish for the nations with the net of thy dogmas.", source: "Ode VI", label: "Ode VI, 2" },
      { text: "Thou wast shown to be a cloud raining down upon us showers of life, O apostle, flowing forth from the well-springs of salvation.", source: "Ode VI", label: "Ode VI, 3" },
      { text: "Thine Offspring, the Destroyer of idols, O Mary Bride of God, is worshipped with the Father and the Spirit.", source: "Ode VI", label: "Ode VI, Theotokion" },
    ],
  },

  // ── October 25 — Martyrs Marcian & Martyrius (Simple §2A) + Righteous Tabitha (Polyeleos §2E) ──
  // [0] Marcian & Martyrius (10-25.pdf, OCA primary; OCA director-pointed texts from
  //     2026-1025-texts-tt.docx) · [1] Tabitha (10-25A.pdf, all St. Sergius).
  "10-25": [
    {
      saint: "Holy Martyrs Marcian & Martyrius the Notaries, of Constantinople",
      oca_primary: true,
      source_file: "10-25.pdf",
      rank: "simple",
      fekula_section: "2A",
      has_great_doxology: false,
      has_polyeleos: false,
      has_litya: false,
      has_paroemias: false,
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      aposticha_source: "octoechos",
      feast_e: "Ephesians 4:7-13 (§224B)",
      feast_g: "Matthew 10:1, 5-8 (§34)",
      prokeimenon_tone: 4,
      prokeimenon_text: "Wondrous is God in His saints, the God of Israel.",
      prokeimenon_stichos: "In congregations bless ye God, the Lord from the well-springs of Israel.",
      alleluia_tone: 4,
      alleluia_verse: "The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations.",
      alleluia_stichos: "Many are the tribulations of the righteous, and the Lord shall deliver them out of them all.",
      communion_verse: "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
      note: "RANK per §1.1 WATERFALL (ODS vol. III has no 1025 entry): plain 'AT VESPERS', no Polyeleos, no Great Doxology, 3 stichera at LIC for one commemoration (the two notaries under one heading) → Simple §2A. OCA's 2026-10-25 service text names them as the day's commemoration → oca_primary. SOURCES: OCA 2026-1025-texts-tt.docx supplies, Tier-3 (director: true): the 3 LIC stichera (Tone 4, 'As one valiant among the martyrs'), LIC Glory (Tone 1, Germanos), Aposticha Glory (Tone 3) and Theotokion (Tone 3), troparion (Tone 3) and kontakion (Tone 4). REGISTER: all OCA texts address the martyrs in contemporary 'you'; stored VERBATIM on Bill's ruling (2026-10-03); Check F-1b warnings expected. TROPARION DIVERGES (§1 OCA primacy): OCA's Tone 3 'In holy zeal you dispelled the error of Arius' is saint-specific and overrides St. Sergius's Tone IV general troparion of martyrs ('In their sufferings, Thy martyrs O Lord, * received imperishable crowns from Thee, our God; * for, possessed of Thy might, * they set at naught the tyrants and crushed the feeble audacity of the demons. ** By their supplications save Thou our souls.'). OCA's kontakion is the same hymn as St. Sergius's Ode VI kontakion. St. Sergius 10-25.pdf supplies: the LIC Stavrotheotokion (Tone I; 'Theotokion, or this Stavrotheotokion' — only the stavro printed), the Aposticha Stavrotheotokion (Tone III; OCA prints the alternative Theotokion, stored as aposticha_both_now), ikos, exapostilarion and theotokion, and the Liturgy propers. No Aposticha stichera are of the martyrs (Octoechos). The PDF prints Liturgy propers (Eph §224B, Matt §34) at Simple rank; encoded as printed — whether they are read on a Sunday is the open readings-concurrence question in project_notes.md, not an encoding decision. NOTE: the PDF spells 'martyrius' in lower case throughout; OCA's 'Martyrius' is used in the OCA-sourced fields. Canon and sessional hymn out of scope (§6).",
      stichera_lord_i_call_count: 3,
      stichera_lord_i_call: [
        { tone: 4, spec_mel: "As one valiant among the martyrs", director: true, text: "Having completed the course and [kept] the Faith, | O Marcian and Mar[tyr]ius, | you have been [wreathed] with a crown of [mar]tyrdom. | You are unshakable [pil]lars of the Church, | breasts flowing with the [milk] of truth, | beacons and [shin]ing pearls, // who have enlightened creation with the splendor of [pi]ety." },
        { tone: 4, spec_mel: "As one valiant among the martyrs", director: true, text: "You were [god]ly twins, | sharing a single [heart] and mind. | You de[stroyed] the division of [Ar]ius, | by teaching all to worship the Son as consubstantial with the [Fa]ther, | and equally uno[ri]ginate with the [Spir]it: | the Trinity in Unity and Unity in [Trin]ity, // one Essence in three undivided [Per]sons." },
        { tone: 4, spec_mel: "As one valiant among the martyrs", director: true, text: "You showed yourselves to be followers of the holy [preach]er Paul, | like him in zeal and one with him in [mind] and heart: | you [drowned] the adversaries with the [blood] you poured out, | drying up the torrent of wicked [her]esies. | O Marcian and Martyrius, revealed as [riv]ers of [pi]ety // watering the [Church] of Christ." },
      ],
      stichera_glory: { tone: 1, director: true, text: "You were dis[ci]ples and [fol]lowers | of the one who preached and confessed the consubstantial [Trin]ity. | [Per]secuted with him, O [bless]ed ones, | you preferred death by the sword to [blas]phemous [her]esy. | [There]fore, God has adorned you with crowns of [mar]tyrdom, | and you have received boldness be[fore] Him, | [pray] that those who honor your [mem]ory // may be delivered from mis[for]tunes!" },
      lic_stavrotheotokion: { tone: 1, spec_mel: "O all-praised martyrs", text: "When she beheld the Lamb upon the Cross * bereft of form and beauty, * the all-immaculate ewe-lamb and Lady * said weeping: “Woe is me! * Where hath Thy comeliness gone, O Thou Who art most sweet? * Where is the shining grace * of Thine image, ** O my Son most beloved?”" },
      aposticha_glory: { tone: 3, director: true, text: "Marcian and Mar[tyr]ius | conquered heresies with the [shield] of Faith | and enlightened the world with the light of [Orth]odoxy. | They are champions of the Trinity and spiritual [bea]cons of the Church. | Obedient to Paul, the equal of the A[pos]tles, | they cast down the teachings of Arius and Nes[tor]ius, | refuting also the confusions of Sabellius and [Sev]erus. | They theologized about the Unity in [Trin]ity, | the God Who was incarnate of the [Vir]gin. | The most blessed ones preached to all one Christ in two [na]tures. | Now that they have received crowns of victory from [heav]en, // these heralds of God intercede on our be[half] for great [mer]cy." },
      aposticha_both_now: { tone: 3, director: true, text: "By the will of the [Fa]ther, | without seed, of the Holy Spirit thou didst conceive the [Son] of God. | He was born of the Father before eternity without a [moth]er, | but now for our sake He didst come from thee without a [fa]ther! // Do not cease entreating Him to de[liv]er our [souls] from harm!" },
      aposticha_stavrotheotokion: { tone: 3, text: "A sword pierced thy heart, O most pure one, * when thou didst behold thy Son upon the Cross; * whereupon thou didst cry aloud: * “Show me not to be childless, O my Son and my God, ** Thou Who hast kept me a Virgin even after I gave birth!”" },
      troparion: { tone: 3, director: true, text: "In holy [zeal] you dispelled the [er]ror of [Ar]ius | and proclaimed the Trinity, one in [es]sence. | Holy martyrs Marcian and Mar[tyr]ius, | unshaken bulwarks of [Or]thodoxy, | entreat Christ our God to [grant] us His great [mer]cy!" },
      kontakion_ode6: { tone: 4, spec_mel: "Having been lifted up", director: true, text: "From your youth you were good athletes, wise Marcian and Mar[tyr]ius, | vanquishing the Arian [her]etics; | you kept the faith perfect by following in the footsteps of your bishop and [teach]er Paul, | therefore, you are worthy to be with him in e[ter]nal life, // as respected defenders of the Holy [Trin]ity." },
      ikos: "Ikos: As servants of the piety of God, the Lover of mankind, O blessed twain, go ye quickly before me and deliver me from evils, bestowing upon me words of wisdom, that I may praise your suffering for the Faith, O holy ones who suffered with constant integrity and have received heavenly crowns. And ye rejoice with the choirs of spiritual athletes and apostles, teachers and honored hierarchs, as preachers of the Word of God and most excellent champions of the Trinity.",
      exapostilarion: "As followers of the all-blessed Paul, ye finished your course and with him have received the kingdom of Christ and immortal glory; and ye stand together with all the saints before the adored Trinity, glorifying the Godhead as is meet.",
      matins_exapostilarion_theotokion: { text: "The ranks of the incorporeal ones praise thy birthgiving; for thou alone hast filled those on earth with joy. Wherefore, we the faithful glorify thee who art all-immaculate, praising thee with hymns. For upon those in darkness thou hast shone forth the Light Which shineth forth today like the dawn." },
    },
    {
      saint: "Holy and Righteous Tabitha",
      oca_primary: false,
      source_file: "10-25A.pdf",
      rank: "polyeleos",
      fekula_section: "2E",
      has_great_doxology: true,
      has_polyeleos: true,
      has_litya: true,
      has_paroemias: true,
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      aposticha_source: "menaion",
      matins_gospel: "Mark 5:24-34 (§21)",
      magnification: "We bless thee, O holy and righteous Tabitha, and we honor thy holy memory, for thou dost entreat Christ our God on our behalf.",
      magnification_selected_psalm: "With patience I waited patiently for the Lord, and He was attentive unto me, and He hearkened unto my supplication.",
      paroemia_1: "Wisdom of Solomon — The righteous live for evermore (Wisdom 5:15-6:3)",
      paroemia_2: "Wisdom of Solomon — The souls of the righteous are in the hand of God (Wisdom 3:1-9)",
      paroemia_3: "Wisdom of Solomon — Though the righteous be prevented with death (Wisdom 4:7-15)",
      feast_e: "Acts 9:32-42 (§23)",
      feast_g: "Matthew 25:1-13 (§104)",
      prokeimenon_tone: 4,
      prokeimenon_text: "Wondrous is God in His saints, the God of Israel.",
      prokeimenon_stichos: "In congregations bless ye God, the Lord from the well-springs of Israel.",
      alleluia_tone: 1,
      alleluia_verse: "With patience I waited patiently for the Lord, and He was attentive unto me.",
      alleluia_stichos: "And He brought me up out of the pit of misery, and from the mire of clay.",
      communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
      note: "RANK per §1.1 WATERFALL (ODS vol. III has no 1025 entry). No Small Vespers ('AT GREAT VESPERS') → not Vigil. Polyeleos YES: 'Polyeleos, and this magnification: We bless thee, O holy and righteous Tabitha' → Polyeleos §2E. Also 'Blessed is the man', 6 stichera, three lessons, Litiya with stichera, Matins Gospel Mark §21, 'Great Doxology. Troparion. Litanies. Dismissal.' oca_primary false: OCA's 2026-10-25 service text keeps Marcian & Martyrius; the OCA docx carries nothing for Tabitha, so every text here is St. Sergius 10-25A.pdf, '*'/'**' verbatim where pointed. LIC: 3 unique (Tone I, 'Of the heavenly powers'), each '(Twice)' → uniform 3→6 doubling, no markers (§6b). Paroemias: three Wisdom lessons, identified from the printed text. Litiya: after the temple sticheron, 2 in Tone I and 1 in Tone II, Glory and Both-now Tone VIII. Aposticha: 3 stichera (Tone II) with verses, Glory and Both-now Tone II. One kontakion (Tone IV) after Ode VI with ikos. Beatitudes 8: Ode III (first Twice) + Ode VI with theotokion. Liturgy propers as printed. Canon, sessional hymns and Praises out of scope (§6).",
      stichera_lord_i_call_count: 6,
      stichera_lord_i_call: [
        { tone: 1, spec_mel: "Of the heavenly powers", text: "Today the Church of Christ doth glorify a strange wonder: one of the daughters of Adam is received by the grave, as earth returning to the earth, fulfilling the command of the Creator; yet as the Destroyer of death, He giveth utterance through his apostle, saying: “O Tabitha, I say unto thee, arise! And thou shalt live again, that for thy sake all may understand that I am the Resurrection and the Life, and everyone who believeth in Me shall not die forever!”" },
        { tone: 1, spec_mel: "Of the heavenly powers", text: "When word of thy resurrection spread throughout the parts of Joppa, belief in Christ was established among many; for all understood the dominion of the Lord Who hath the power to raise up the dead. For this is a fulfillment of prophetic images, in that death hath been slain by the victory of the Son of God, and He is the Master and Bestower of life, Who restoreth and enlighteneth our souls." },
        { tone: 1, spec_mel: "Of the heavenly powers", text: "He Who is the salvation of all mankind sent His disciples throughout the whole world, that they might preach His resurrection; and if the Lord had not arisen, hope in life eternal would be in vain. He who was preeminent among the apostles arrived in Joppa and commanded Tabitha to rise up from the dead, that all the faithful might truly understand that she received life through the resurrection of Christ. And we, believing in miracles and the resurrection without doubt, fall down in supplication before the Almighty, crying: O Thou Who art full of mercy and kindness, through the prayers of Thy holy one save Thou our souls!" },
      ],
      stichera_glory: { tone: 8, text: "O Tabitha who wast called “the doe”, thou wast truly like unto one when thou didst zealously strive to avoid all impiety, and loving thy neighbor didst abundantly adorn thyself with tender compassion. Wherefore this queen of the virtues led thee up to the celestial life, and Christ, the King of glory, seeing thee to be a wise virgin holding a splendid lamp in thy right hand, raised thee up again to this transitory life, that, showing forth a manner of life in the flesh worthy of our calling, we may be instructed by thee to walk in the light, and become truly perfect, and deemed worthy of the sweetness of paradise, the Jerusalem on high, through thy supplications to our Savior." },
      lic_theotokion: { tone: 8, text: "In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!" },
      litya_stichera: [
        { tone: 1, text: "Blessed is the righteous one who abideth in grace, for he hath been like unto a tree by streams of waters, whose leaf shall not fall. In thee, O Tabitha, do we see these words of David fulfilled, for thou didst establish thy salvation upon the firm rock which is the trampling down of falls into sin, didst set thy feet upon the path of the virtues, hastening to the mansions of heaven, where thou sittest in never-waning glory. Thither do thou bear supplication unto the throne of the triune Immortal One, that He loose the bonds of sin wherewith we have caused His image to become corrupt, and that, dwelling within us, He may also establish us in piety." },
        { tone: 1, text: "The saying of the most wise one, that a good woman shall have glory and honor, hath been fulfilled: word of thee, O Tabitha, hath gone forth into all the earth; for all have thee as a model of piety which we ought to emulate, that the greatest of the commandments might be fulfilled. Thy love extended to all, in accordance with the commandment of God; wherefore, the Lord also loved thee and raised thee up from the grave. Forget us not who celebrate thy memory, and entreat Christ our God, the Master of all, Who is perfect Love, that His peace may reign within us and all throughout the world, and that we may ever abide in His love." },
        { tone: 2, text: "“We have no other consolation such as Tabitha hath shown us,” the widows cried aloud to the holy apostle Peter, “for she devoted her hands to serving us, sheltered many from burning heat and the cold, and brought many of the indigent into her own house, giving the sick all that was necessary for their cure; wherefore, do thou, the preeminent herald of the Almighty, command her to rise from the dead, for our joy and unto the glory of God!”" },
      ],
      litya_glory: { tone: 8, text: "Today widows sing glory unto God with voices of praise, and with them all mortals rejoice; for they have received from the dead an exalted woman of virtue, who hath been and continueth to be for them a refuge amid sorrows and needs; and they rejoice at the most glorious wonder, for dry bones and human flesh shall arise on the day of judgment, to receive the glory or condemnation of the Bestower of all rewards. Wherefore, let us hasten to join those at His right hand, and let us emulate not sacrifice, but mercy, setting the righteous Tabitha as intercessor before the Lord, for the salvation of our souls." },
      litya_both_now: { tone: 8, text: "O Lady and Mother of the Redeemer of the human race: we fall down before thee, and unto thee do we pray: Intercede, O most pure one, before thy Son, the God of all, that He raise up His people, who have been slain by sins, unto life and spiritual fruitfulness, as of old, He raised up Tabitha at the command of the apostle, that in thanksgiving we may cry unto Him: Glory to Thy power, O Lord!" },
      stichera_aposticha: [
        { tone: 2, text: "The Son and Word of the beginningless Father, Who appeared on earth to restore those who had fallen, setteth forth the way to salvation, saying: “Let him who wisheth to be saved be charitable!” And desiring exalted mercy, O Tabitha, thou didst feed the hungry with bread, didst assuage the thirst of those in need, didst become the consolation of widows and orphans, and wast the refuge of the sick and homeless. Wherefore, teach us all to emulate thee, and pray thou that our souls be saved." },
        { tone: 2, verse: "Wondrous is God in His saints, * the God of Israel.", text: "When our first father thought himself higher than God, death was shown to be the wages of sin. But committing thy heart unto the Creator, O Tabitha, thou didst love those who were created in the image of the Creator. Wherefore thou didst fulfill the commandment of the New Adam Who hath annulled the curse of our first parent, and didst receive a taste of death; yet thou didst arise from the dead through the power of the Immortal One, that the glory of God might be made manifest unto the faithful, and that all people might see that even in this life the Lord crowneth the righteous and glorifieth those who please Him." },
        { tone: 2, verse: "The Lord brought me up out of the pit of misery, * and from the mire of clay.", text: "The joy of the widows turned into lamentation at the time of thy repose, O Tabitha, for no one who came to thee departed empty away, but in the name of the Lord thou didst satisfy every human need, didst dry the tears of the sorrowful with thy heartfelt discourse, didst add thereto the work of thine own hands, and thereby, as with wings, didst soar aloft to the throne of the Lord of the hosts on high. Him do thou entreat, that we be saved." },
      ],
      aposticha_glory: { tone: 2, text: "“Even though ye see Tabitha in the grave, do ye not lament, neither weep ye,” the son of Jonah said with boldness; “In sending us forth to proclaim His glad tidings, our divine Teacher gave us authority over all flesh: to heal the sick and infirm, to drive out demons and cleanse lepers, and also to resurrect the dead, that the confession of Him Who rose from the dead might be confirmed. For with God all things are possible for the faithful. Wherefore, seeing your faith, I cry aloud, exclaiming: Tabitha, arise from the dead!”" },
      aposticha_both_now: { tone: 2, text: "O new wonder greater than all the wonders of old! * For who hath ever known a mother to give birth without having known a man, * and to bear on her arm Him Who sustaineth all creation? * Yet it was the will of God to be born. * O most pure one, who carried Him as an infant in Thine embrace * and before Whom thou hast a mother’s boldness: * cease not to pray on behalf of those who honor thee, ** that He have compassion and save our souls." },
      troparion: { tone: 4, text: "Today the Faith of Christ is confirmed by Peter, * and the faithful who behold the great wonder which hath been wrought in Joppa * join chorus in gladness and glorify with psalms the Son of God, the Bestower of life. * The preeminent apostle speaketh, and she who had died riseth from the grave. * Her doth He Who hath cast down death give to Christ, * that the people may adorn themselves in emulation of her virtues. * Wherefore come, ye Christians, let us bear our supplications to the saint: * O blessed and loving Tabitha, bear thou our sighs unto the most holy Trinity, * and pray thou with boldness, that we may be children of the pre-eternal Light, * and may be deemed worthy of the mercy of God, and abide in divine love; ** and that peace may reign throughout all the world." },
      kontakion_ode6: { tone: 4, text: "The people of Joppa were filled with awe, * and the angels of God were amazed, * when he who healed Eneas called forth from the dead * her who was called Dorcas, * who was wholly adorned with loving-kindness, * and for whom the poor widows cried aloud. * And now, O blessed Tabitha, hearken to our prayers which are offered unto thee, * and beseech the Bestower of all good things * that He grant mercy and compassions unto His faithful, * that, blessing thee, we may cry aloud: ** Rejoice, O thou who teachest us the virtues!" },
      ikos: "Ikos: Thou art the refuge of the orphans and widows, O Tabitha, handmaid of the Lord. Thou didst do good to the people, fulfilling the commandments of the Gospel, and teaching all to not live for themselves, but to do good unto their neighbors. Wherefore, thou hast been shown to be an heir to the kingdom of heaven, and didst abide on the earth, possessed of heavenly love. Therein by thy supplications do thou cause us to share, who honor thee with faith and cry aloud: Rejoice, O thou who teachest us the virtues!",
      exapostilarion: "The light which hath shone forth from the tomb of the pre-eternal and incarnate Word hath illumined the whole world with the effulgence of the resurrection, whereby death hath been trampled down. And the apostle, bearing the effulgence of this life-bearing light, called forth Tabitha from the dead, in Joppa, confirming the confession of Him Who arose, to Whom we cry aloud: Enlighten us by Thy truth!",
      exapostilarion_2: "O thrice-radiant Trinity, with the beams of Thy light illumine us who are darkened by transgressions, and raise us up who have been cast down and lie prostrate on the ground, that we may not die eternally, but may arise from the corruption of sin, like Tabitha from the grave. For even though we all sin, yet we confess without hesitation the Father, the Son and the Holy Spirit, in an Orthodox manner.",
      matins_exapostilarion_theotokion: { text: "O most pure and most blessed Virgin, Mother of the Effulgence of the glory of the beginningless Father, thou who received the light of the Sun of righteousness: Like the all-luminous moon enlighten thy people, that all darkness may be driven from their hearts, for they all have thee as their helper, protection and refuge." },
      beatitudes_source: "menaion",
      beatitudes_count: 8,
      beatitudes_troparia: [
        { text: "The Author of all creation, abasing Himself for our sake, condescended even to endure the Cross and burial; yet He arose as God in glory, raising up those in the graves. And now He hath also raised up Tabitha from the dead, at the word of the preeminent apostle. Wherefore, gloriously hath He been glorified!", source: "Ode III", label: "Ode III, 1", note: "(Twice) per PDF" },
        { text: "Fulfilling His whole dispensation concerning us, the Master of life and death sent forth His apostles, the initiates of the mysteries of heaven, to all the nations, to proclaim the salvation of all mortals; and at the utterance of the rock of faith He raiseth up Tabitha who had died. Wherefore, gloriously hath He been glorified!", source: "Ode III", label: "Ode III, 2" },
        { text: "He Who imparteth life unto all raiseth up from corruption the merciful Tabitha who had tasted of death; confirming the faith of His disciples by the miracle of His evangelist. Therein hath He gloriously been glorified.", source: "Ode III", label: "Ode III, 3" },
        { text: "All creation is now filled with awe and joy, beholding death laid low by the resurrection of Tabitha by a man who received the command of the God-man, the Destroyer of Hades and death. To Him do we cry aloud: Grant us Thy peace, O almighty One!", source: "Ode VI", label: "Ode VI, 1" },
        { text: "O blessed Tabitha who arose from the dead at the sound of the voice of the apostle whom the Lord had sent to perform miracles for the increase of men’s faith: cry aloud unto Him before Whom thou standest and upon Whom thou dost gaze continually in thy second repose: Grant Thou Thy peace unto Thy people, O almighty One!", source: "Ode VI", label: "Ode VI, 2" },
        { text: "When the voice of the apostle entered thine ear, O blessed one, thou didst arise from thy death-bier, and, having lived piously, passed over again to heavenly glory, where do thou beseech the Lord of all, O Tabitha, that He grant peace to us all, in that He is almighty.", source: "Ode VI", label: "Ode VI, 3" },
        { text: "O Mother of God, our joy and refuge of salvation! We are tempest-tossed by transgressions and the perils of life, and we fall down before thee, offering thee contrite hearts, and call upon thee for help: Grant peace to the world through thy supplications!", source: "Ode VI", label: "Ode VI, Theotokion" },
      ],
    },
  ],
};

export default OCTOBER_MENAION;
