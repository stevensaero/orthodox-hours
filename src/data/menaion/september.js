// Menaion data — September
// Source: St. Sergius Menaion (Russian usage) + OCA calendar + ODS 3rd ed. vol. III
// Encoding rule: encoding_rule_v2.md (read live from repo root; v2.13 at time of encode)
// Single point of truth — edit this file for september encoding updates

const SEPTEMBER_MENAION = {

  // ── September 5 — Holy Prophet Zacharias & Righteous Elizabeth (Polyeleos §2E) ──
  // RANK SOURCE: ODS 3rd ed. vol. III, Services of the Menaion, pp. 14-16
  // (`ods3-0905-wkd`), which PRINTS the rank outright: "A polyeleos-rank service on
  // Monday through Saturday". Per encoding_rule_v2.md §1.1 step 0 this is DECISIVE —
  // the waterfall (steps 1-6) was not run and must not be run for this date.
  //
  // SOURCE FILE — 09-05A.pdf, NOT 09-05.pdf. The two files are the SAME commemoration
  // at two service levels, not two commemorations:
  //   09-05.pdf  — Prophet Zacharias ALONE. 6 stichera, no paroemias, no Polyeleos,
  //                no Great Doxology. Would rank six_stichera §2C on its own.
  //   09-05A.pdf — Zacharias AND Elizabeth. 8 stichera (4+4), "Blessed is the man",
  //                3 lessons, Polyeleos + Megalynarion, Litiya, Great Doxology.
  // 09-05A matches ODS vol. III line for line (8 stichera 4+4 with first of each
  // repeated; Gen 18:1-14 / Judg 13:2-20 / 1 Kgs 1:9-20; Luke §2 Matins Gospel;
  // Heb §314; Matt §96) and OCA names BOTH saints in the primary commemoration.
  // Encoding these as an array of two services would emit Zacharias twice, so this
  // is ONE entry sourced from 09-05A. The A-file-as-second-commemoration convention
  // (cf. 06-07) does not apply to this pair.
  "09-05": {
    saint: "Holy Prophet Zacharias & Righteous Elizabeth, Parents of the Forerunner",
    oca_primary: true,
    source_file: "09-05A.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    has_great_doxology: true,   // PDF p.17: "Great Doxology, and the dismissal."
    has_polyeleos: true,        // PDF p.7: "Polyeleos, and this Megalynarion: We magnify you..."
    has_litya: true,            // PDF p.4: "At Litiya, the Sticheron of the temple, followed by these Stichera, in Tone VI"
    has_paroemias: true,        // PDF p.2: "Entrance. Prokeimenon of the day. Three Lessons"
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    matins_gospel: "Luke 1:5-25 (§2)",
    aposticha_source: "menaion",
    magnification: "We magnify you, O holy and righteous Zacharias and Elizabeth, and we honor your holy memory; for ye entreat Christ our God on our behalf.",
    magnification_selected_psalm: "Blessed be the Lord God of Israel; for He hath visited and wrought redemption for His people.",
    note: "RANK IS PRINTED, NOT INFERRED. ODS 3rd ed. vol. III (Services of the Menaion), " +
          "pp. 14-16, entry `ods3-0905-wkd`, states 'A polyeleos-rank service on Monday " +
          "through Saturday'. Per encoding_rule_v2.md §1.1 step 0 a printed rank is decisive " +
          "and short-circuits the waterfall; steps 1-6 were NOT run. Vol. III supersedes ODS " +
          "2nd ed. ch. V for this date (§1 priority 1). " +
          "SOURCE FILE IS 09-05A.pdf, not 09-05.pdf. 09-05.pdf prints the Zacharias-only " +
          "service (6 stichera, no paroemias, no Polyeleos, no Great Doxology — six_stichera " +
          "§2C on its own); 09-05A.pdf prints the combined Zacharias + Elizabeth polyeleos " +
          "service that vol. III prescribes and that OCA's primary commemoration names. The " +
          "two files are the same commemoration at two service levels, NOT two commemorations, " +
          "so this is a single entry rather than an array — an array would emit Zacharias twice. " +
          "KONTAKION ROUTING CORROBORATED INDEPENDENTLY: the PDF prints Zacharias' kontakion " +
          "after Ode III and Elizabeth's after Ode VI, which §5 routes to the 1st/6th and " +
          "3rd/9th Hours respectively. Vol. III p.16 states exactly that routing in words " +
          "('First Hour and Sixth Hour: kontakion of St. Zacharias. Third Hour and Ninth Hour: " +
          "kontakion of St. Elizabeth'). Two sources agreeing without being derived from each other. " +
          "LIC: 8 slots from 6 unique texts — 4 of Zacharias (Tone IV, first repeated) and 4 of " +
          "Elizabeth (Tone I, first repeated). Not uniform doubling (8/6 is not integral), so " +
          "positional repeatIndex markers are used per §6b. " +
          "MATINS APOSTICHA: ABSENT by rubric, not unencoded — the Praises are followed directly " +
          "by the Great Doxology (PDF p.17), which displaces the Matins Aposticha. " +
          "TWO DIVERGENCES FROM ODS vol. III, both flagged rather than reconciled: (1) vol. III " +
          "appoints the Litiya 'Now & ever' as the Aposticha theotokion OF THE RESURRECTION, " +
          "Tone VI, and the Vespers Aposticha 'Now & ever' likewise of the resurrection, Tone II " +
          "— i.e. routed to the Octoechos; the St. Sergius PDF instead prints proper Menaion " +
          "theotokia in those slots (both captured here). (2) vol. III notes the Litiya 'is " +
          "usually not an element of a polyeleos-rank commemoration; however, if the rector so " +
          "direct, it may be performed, but without the blessing of the loaves' — the PDF prints " +
          "the Litiya stichera unconditionally. has_litya is true on the PDF's authority; the " +
          "conditional is a rubrical note, not a data state. " +
          "OCA CHECK — no override applied. OCA's Troparion Tone 2 is the same hymn as the PDF's " +
          "'Troparion of the righteous ones, in Tone II' in contemporary register; per §11 #17 " +
          "the thou/thy PDF text governs. OCA's Kontakion Tone 3 is the same as the PDF's " +
          "Zacharias kontakion. OCA additionally lists a second, Zacharias-specific troparion in " +
          "Tone 4 ('Robed in the vestments of the priesthood...') which the St. Sergius PDF does " +
          "NOT print; recorded here as an OCA-only text, not encoded, since the PDF's proper " +
          "stands and §2.1 step 5 permits an OCA override only where the daily PDF lacks a proper. " +
          "IKOS — BOTH CAPTURED, NO SCHEMA CHANGE. The PDF prints TWO ikoi: Zacharias' after " +
          "Ode III, and a joint Zacharias-and-Elizabeth ikos after Ode VI ('As God once inscribed " +
          "His commandments upon two tablets of stone...'). `ikos_ode3` and `ikos_ode6` were " +
          "already in KNOWN_FIELDS and already in use in pentecostarion.js, so capturing both " +
          "required no vocabulary change. Placement is driven by the renderer: " +
          "menaion-browser.jsx hardcodes the label 'Ikos (after Ode VI)' for `entry.ikos`, so the " +
          "Ode VI ikos is stored there to keep that label truthful, and Zacharias' Ode III ikos " +
          "is stored in `ikos_ode3`. KNOWN DISPLAY GAP: the Menaion browser does not yet render " +
          "ikos_ode3 (it is a Pentecostarion-browser field today), so the Ode III ikos is in the " +
          "data but not on screen. Recorded rather than worked around. " +
          "SCOPE: full canon odes, sessional hymns and Praises stichera are out of scope at " +
          "polyeleos rank per §6 and are present in the PDF but deliberately not captured.",

    feast_e: "Hebrews 6:13-20 (§314)",
    feast_g: "Matthew 23:29-39 (§96)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, * and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
    alleluia_tone: 7,
    alleluia_verse: "A light hath dawned for the righteous man, and gladness for the upright of heart.",
    alleluia_stichos: "NOT IN PDF — the PDF prints the Alleluia verse without a second stichos.",
    communion_verse: "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
    matins_prokeimenon: "In the saints that are in His earth hath the Lord been wondrous; * He hath wrought all His desires in them. (Tone IV) Verse: Wondrous is God in His saints, the God of Israel.",

    paroemia_1: "Genesis — the Lord appears to Abraham at the oak of Mamre and promises Sarah a son (Genesis 18:1-14)",
    paroemia_2: "Judges — the angel announces the birth of Samson to the barren wife of Manoah (Judges 13:2-20)",
    paroemia_3: "First Kings (1 Samuel) — Hannah prays at Shiloh and conceives Samuel (First Kings 1:9-20)",

    // ── AT VESPERS: LORD I HAVE CRIED ──────────────────────────────────────
    // 8 slots from 6 unique texts. Zacharias: 3 texts Tone IV, first repeated (slots 0-3).
    // Elizabeth: 3 texts Tone I, first repeated (slots 4-7). Markers per §6b.
    stichera_lord_i_call_count: 8,
    stichera_lord_i_call: [
      { tone: 4, spec_mel: "Thou hast granted a sign",
        text: "With the oil of anointing and holy vesture upon thyself, * O ever-memorable " +
              "Zacharias, * thou didst minister unto God like an angel, * mediating, O blessed one, * " +
              "between the Creator and His creation, * and manifestly receiving the words of the " +
              "divine Spirit. * Wherefore, we call thee blessed, * and celebrate today thy holy festival, " +
              "** glorifying the Savior." },
      { repeatIndex: 0 },
      { tone: 4, spec_mel: "Thou hast granted a sign",
        text: "O divinely inspired Zacharias, * thou didst behold born of a maiden * a Babe Who " +
              "is co-beginningless with the Father; * and unto thine own child thou dost prophecy " +
              "manifestly beforehand: * “A prophet shalt thou truly be, * preparing His ways!” * " +
              "With him we call thee blessed * and in a sacred manner we celebrate thine honored " +
              "festival, ** O most noetically rich God-bearer." },
      { tone: 4, spec_mel: "Thou hast granted a sign",
        text: "Thou wast the living and animate temple * of the divine Spirit; * and, ministering " +
              "unto God * with a pure heart, O glorious one, * in the midst of the temple thou wast " +
              "unjustly slain, * finishing thy godly course in martyrdom, O right-glorious one. * " +
              "Wherefore, with thine own blood * thou hast entered into the temple of heaven, ** " +
              "entreating cleansing for our souls." },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "When thou didst call the Virgin who greeted thee * the Mother of thy Lord, * thou " +
              "didst behold in her virginal womb * Him, incarnate, Whose goings forth are from " +
              "before time began. * Pray with her, O righteous Elizabeth, ** that He save our souls." },
      { repeatIndex: 4 },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "“Blessed is the Fruit of the Virgin’s womb, * Who filleth all things!”, * thou didst " +
              "exclaim, O most blessed Elizabeth, * moved thus to speak by the Spirit of God. * " +
              "Wherefore, honoring thee in hymns, ** we magnify God Who is worshiped in Trinity." },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "That which was said by the Lord * became reality in the Virgin, * for she gave " +
              "birth to Jesus Who saveth His people from their sins. * “He shall be the fulfillment of " +
              "those things which were said to her,” * thou didst exclaim, inspired by the Holy Spirit, " +
              "O Elizabeth. ** Wherefore, we crown thee with wreaths of praise, as is meet." },
    ],
    stichera_glory: {
      tone: 8,
      text: "Truly arrayed in the vestments of the priesthood of the law, thou didst serve " +
            "according to the order of Aaron; and, standing in the temple, thou didst clearly " +
            "behold the countenance of the angel, O most blessed one. Wherefore, hymning thy " +
            "repose as is meet, O Zacharias, we all praise with songs thee who, in thine old age, " +
            "begat the glorious John. Entreat thou the merciful God for us, that we be saved.",
    },
    lic_theotokion: {
      tone: 8,
      text: "In His love for mankind, the King of heaven appeared on earth * and dwelt " +
            "among men; * for He Who received flesh from the pure Virgin * and cameth forth " +
            "from her having received human nature, * is the only Son of God, * twofold in nature " +
            "but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect " +
            "man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** " +
            "that our souls find mercy!",
    },

    // ── AT THE LITIYA ──────────────────────────────────────────────────────
    // PDF: "At Litiya, the Sticheron of the temple, followed by these Stichera, in Tone VI".
    // The temple sticheron is parish-variable and is not a Menaion text.
    litya_stichera: [
      { tone: 6, text: "Seeing Jesus, John cried aloud: “Behold the Lamb of God!” fulfilling the prophecy of Isaiah. Thy son was the last of the prophets, O Elizabeth. Wherefore, the people call thee blessed, as is meet." },
      { tone: 6, text: "Jesus, Who is the Lord of lords and Master of masters, bowed His head beneath the right hand of thy son. Great is thy glory, O right-laudable Elizabeth!" },
      { tone: 6, text: "The voice of one crying in the wilderness denounced the boastful Pharisees, saying unto them: “O generation of vipers, bring forth fruits worthy of repentance!” And he worshiped the Master. Of such a son art thou the mother, O holy Elizabeth!" },
    ],
    litya_glory: {
      tone: 6,
      text: "Keeping the commandments of God, thou didst bring forth the fruit of living faith " +
            "which dwelt within thee, O divinely wise Elizabeth. With what worthy hymns, with " +
            "what worthy praises can we, the faithful, crown thee?",
    },
    litya_both_now: {
      tone: 6,
      text: "Christ the Lord, my Creator and Redeemer, * Who came forth from thy womb, O " +
            "most pure one, * and clothed Himself in my nature, * hath freed Adam from the " +
            "primal curse. * Wherefore, like the angel * we unceasingly cry out to thee, * O all-pure " +
            "one, * who art truly the Mother of God and Virgin: * Rejoice!, O Sovereign Lady, ** " +
            "the intercession, protection and salvation of our souls!",
    },

    // ── AT VESPERS: APOSTICHA ──────────────────────────────────────────────
    // 3 stichera of Elizabeth, Tone I, with their psalm verses (verses stored on the
    // stichera they precede, per the PDF's layout).
    stichera_aposticha: [
      { tone: 1, text: "Thou art worthy of many praises, O divinely wise Elizabeth, who art called righteous by the word of God, thou didst walk blamelessly in the commandments of the Lord, moved so by the mercy of God." },
      { tone: 1, verse: "Precious in the sight of the Lord * is the death of His saints.",
        text: "Walking in the commandments of the Lord, O abundantly glorious Elizabeth, thou didst have unfeigned love for God and unfeigned love for thy neighbor. And, lo! the fruit of thy faith was made reality. Wherefore, holding festival, we call thee blessed." },
      { tone: 1, verse: "Blessed is the man that feareth the Lord; * in His commandments shall he greatly delight.",
        text: "A most glorious fruit of the womb was given by the most compassionate God to thee, a woman barren and past childbearing: the preacher of repentance. Wherefore, calling thee blessed, we magnify the almighty mercy of God." },
    ],
    aposticha_glory: {
      tone: 2,
      text: "As a pure priest thou didst enter into the holy of holies and, clad in sacred vesture, " +
            "blamelessly ministered unto God, observing the law like Aaron and leading the tribes " +
            "of Israel like Moses, in the pure signaling of the little bells. Wherefore, thou wast " +
            "slain. But thy righteous blood hath become for us a salvific healing, like fragrant " +
            "myrrh opening the ears of the deaf leading them to the way of everlasting life. O " +
            "thrice blessed Zacharias, father of John the Baptist and husband of Elizabeth: pray " +
            "thou earnestly on behalf of our souls.",
    },
    aposticha_both_now: {
      tone: 2,
      text: "O new wonder greater than all the wonders of old! * For who hath ever known a " +
            "mother to give birth without having known a man, * and to bear on her arm Him " +
            "Who sustaineth all creation? * Yet it was the will of God to be born. * O most pure " +
            "one, who carried Him as an infant in Thine embrace * and before Whom thou hast a " +
            "mother’s boldness: * cease not to pray on behalf of those who honor thee, ** that He " +
            "have compassion and save our souls.",
    },

    // ── TROPARION & KONTAKIA ───────────────────────────────────────────────
    troparion: {
      tone: 2,
      text: "Celebrating the memory of Thy righteous ones, * Zacharias and Elizabeth, O " +
            "Lord, * through them do we entreat Thee: ** Save Thou our souls!",
    },
    troparion_bothnow: {
      tone: 2,
      text: "All of thy most glorious mysteries are beyond comprehension, * O Theotokos; * " +
            "for, thy purity sealed and thy virginity intact, * thou art known to be a true Mother, " +
            "having given birth unto God. ** Him do thou entreat, that our souls be saved.",
    },
    // §5 routing: kontakion_ode3 (Zacharias) → 1st & 6th Hours;
    //             kontakion_ode6 (Elizabeth) → 3rd & 9th Hours.
    // Corroborated verbatim by ODS vol. III p.16.
    kontakion_ode3: {
      tone: 3,
      spec_mel: "Today the Virgin",
      text: "Today Zacharias, the prophet and high priest of the Most High, * the father of the " +
            "Forerunner, * setteth the table of his memorial, * feeding the faithful; * for he hath " +
            "distributed the food of righteousness unto all. * Wherefore, he hath reposed * as a " +
            "divine initiate ** of the mysteries of the grace of God.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "Like the full moon, * thou didst receive the light of righteousness from the " +
            "Messiah, * the noetic Sun, * O Elizabeth beloved of God, * and with Zacharias didst " +
            "walk in all the commandments of the Lord. * Wherefore, blessing thee with worthy " +
            "hymns, * we magnify the Lord, ** the most compassionate Light, Who illumineth all.",
    },
    // Zacharias' ikos, printed after Ode III — pairs with kontakion_ode3.
    // Not yet rendered by menaion-browser.jsx (see `note`).
    ikos_ode3: "The high priest of the law was bound to silence by the voice of an angel, for " +
          "within the barren and chaste Elizabeth, the angel of the coming of Christ, the prophet " +
          "and initiate of the mysteries was to come forth. By his nativity, the grace, deliverance, " +
          "universal reconciliation and renewal of our nature was to be revealed. By Him Who " +
          "giveth fruit from the barren womb, the Son Who hath appeared from the Virgin, the " +
          "divine initiate of the mysteries of the grace of God and his preaching of the Lamb " +
          "was to be made manifest.",
    // Joint ikos of both saints, printed after Ode VI — pairs with kontakion_ode6.
    // Stored in `ikos` because menaion-browser.jsx labels that field "Ikos (after Ode VI)".
    ikos: "As God once inscribed His commandments upon two tablets of stone, so " +
          "hath He illumined you with His grace, O blessed Zacharias and Elizabeth; for ye " +
          "walked blamelessly in His commandments. Therefore, worthily praising you, we " +
          "magnify the Lord of all, the most compassionate Light Who illumineth all.",

    // ── MATINS: GOSPEL STICHERON & EXAPOSTILARIA ───────────────────────────
    gospel_sticheron: {
      tone: 1,
      text: "That which was said by the Lord became reality in the Virgin, for she gave birth to " +
            "Jesus Who saveth His people from their sins. “He shall be the fulfillment of those " +
            "things which were said to her,” thou didst exclaim, inspired by the Holy Spirit, O " +
            "Elizabeth. Wherefore, we crown thee with wreaths of praise, as is meet.",
    },
    matins_exapostilarion_feast: {
      spec_mel: "O Light immutable",
      text: "At first, thou wast struck mute in the holy of holies, by the voice of the angel, for " +
            "the springing forth from thee of the voice of one crying in the wilderness; and now " +
            "thou art silent for his sake, slain, O Zacharias, before the holy of holies.",
    },
    exapostilarion: "Thou wast the glory of barren mothers, the model of virtues for sinners, O blessed " +
                    "Elizabeth, keeping the commandments of the Lord. We glorify the goodness of God " +
                    "which hath been made manifest in thee.",
    matins_exapostilarion_theotokion: {
      text: "Having shone forth eternally, Light from Light, before the morning star, O Word, " +
            "Thou didst come forth as Light, immutably, under time, from Thy Mother, illumining " +
            "the ends of the world with radiant effulgence, as Thou art the Light of the world.",
    },

    // ── AT LITURGY: BEATITUDES ─────────────────────────────────────────────
    // 8 troparia: 4 from Ode III of Zacharias' canon, 4 from Ode VI of Elizabeth's.
    beatitudes_source: "menaion",
    beatitudes_troparia: [
      { text: "When thou didst offer the incense of the covenant, O high priest, then didst thou receive the prophetic proclamation of the Forerunner.",
        source: "Ode III", label: "Ode III, 1", note: "(Twice) per PDF" },
      { text: "The priesthood anointed thee with oil to serve as a priest, like Aaron. Wherefore, thou wast deemed worthy to behold the angel.",
        source: "Ode III", label: "Ode III, 2" },
      { text: "Zacharias begat John, the dawn which announced to the whole world Thee, the noetic Sun, O Savior.",
        source: "Ode III", label: "Ode III, 3" },
      { text: "When John was in thy womb, O holy Elizabeth, seeing His Savior he, the babe, did leap. Blessed is thy womb which made manifest the babe who recognized Jesus as his salvation.",
        source: "Ode VI", label: "Ode VI, 1" },
      { text: "Strengthened by the Holy Spirit against the will of others, O most blessed Elizabeth, thou didst name thy son John. Let everyone praise thee, the instrument of the Holy Spirit.",
        source: "Ode VI", label: "Ode VI, 2" },
      { text: "O God, Thou didst show forth Elizabeth’s conceiving as an image of Thine own inconceivable birthgiving from the Virgin. Glory to Thy mighty wisdom!",
        source: "Ode VI", label: "Ode VI, 3" },
      { text: "When he was born of Rachel, Benjamin caused his own mother’s death; but the Word Who was born of thee is the true life of all. Him do thou beseech, that we who place our trust in Him may have everlasting life.",
        source: "Ode VI", label: "Ode VI, Theotokion" },
    ],
  },

  // ── September 6 — Miracle of the Archangel Michael at Colossae (Six-Stichera §2C) ──
  // NOT covered by ODS 3rd ed. vol. III — there is no `ods3-0906` entry, so §1.1 step 0
  // does not apply and the waterfall was run in full:
  //   1. Great Feast?  No — not on the closed enumerated list.
  //   2. Vigil?        No — 09-06.pdf prints no Small Vespers.
  //   3. Polyeleos?    No — Matins appoints no Polyeleos and no Magnification.
  //   4. Doxology?     No — no Great Doxology appointed at Matins.
  //   5. Six-Stichera? YES — 6 stichera at Lord I Have Cried for a single commemoration
  //                    (all "of the holy archangel"), none of the above applying.
  // Martyr Eudoxius has a full Compline canon but NO stichera at Lord I Have Cried, so
  // this is not a Double at Simple rank (§1.1 key disambiguation, third bullet).
  "09-06": {
    saint: "Commemoration of the Miracle of the Archangel Michael at Colossae (Chonae)",
    oca_primary: true,
    source_file: "09-06.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    aposticha_source: "octoechos",
    note: "Rank per encoding_rule_v2.md §1.1 waterfall, run in full because ODS 3rd ed. vol. III " +
          "does NOT cover 6 September (no `ods3-0906` entry among the 77) — so §1.1 step 0 does " +
          "not apply. Not a Great Feast; no Small Vespers in 09-06.pdf (not Vigil); no Polyeleos " +
          "or Magnification appointed at Matins (not Polyeleos); no Great Doxology appointed " +
          "(not Doxology); 6 stichera at Lord I Have Cried for a single commemoration, all 'of " +
          "the holy archangel' → Six-Stichera §2C. " +
          "NOT A DOUBLE: the Martyr Eudoxius is co-commemorated and the PDF gives him a full " +
          "canon at Compline, but he has NO stichera at Lord I Have Cried, so the 6 stichera are " +
          "not a 3+3 split and §1.1's Simple-rank double test does not fire. " +
          "IN 2026 THIS DATE FALLS ON A SUNDAY — the 14th Sunday after Pentecost, Tone 5. The " +
          "rank recorded here is the saint's own, as printed in the Menaion, per §1.1's governing " +
          "principle that rank does not depend on what weekday the fixed date happens to fall on. " +
          "Sunday layering is the assembler's job, not this entry's. Note that OCA lists ONLY the " +
          "Sunday readings for 6 September 2026 (Matins Gospel Mark 16:9-20; Liturgy 2 Cor " +
          "1:21-2:4 and Matt 22:1-14); the Hebrews 2:2-10 / Luke 10:16-21 propers recorded below " +
          "are the archangel's own weekday-service propers as printed in the PDF, and on a Sunday " +
          "they would be combined or displaced per Fekula ch. 1. Both are recorded; neither is " +
          "silently preferred. " +
          "APOSTICHA: 'On the Aposticha, the Stichera from the Oktoechos' — §2C, Octoechos " +
          "governs, so no stichera_aposticha array. The PDF prints ONE combined doxasticon " +
          "labelled 'Glory ..., Both now ..., the composition of John the Monk, in Tone VIII' " +
          "serving both slots; it is stored once in aposticha_glory and aposticha_both_now is " +
          "therefore omitted rather than duplicated. " +
          "BEATITUDES: the PDF appoints 8 troparia drawn entirely from the archangel's own canon " +
          "(four each from Odes III and VI). This is richer than the usual §2C pattern of 4 " +
          "Octoechos + 4 from Ode III (cf. 07-01) and is encoded as printed, not normalized. " +
          "OCR ARTIFACT, NOT A SOURCE DEFECT: the extracted Gospel heading reads 'ST. LUKE " +
          "(1O:16-21)' with a capital letter O in place of the zero. This is an extraction " +
          "artifact of the glyph, not an error in the printed book, and is corrected to Luke " +
          "10:16-21 here. Distinguished from the §1.3 errata class, which are defects in the " +
          "printed source itself. " +
          "SCOPE: full canon odes (both the archangel's at Matins and Eudoxius' at Compline), " +
          "sessional hymns and Praises stichera are out of scope at this rank per §6 and are " +
          "present in the PDF but deliberately not captured.",

    feast_e: "Hebrews 2:2-10",
    feast_g: "Luke 10:16-21",
    prokeimenon_tone: 4,
    prokeimenon_text: "He maketh His angels spirits, * and His ministers a flame of fire.",
    prokeimenon_stichos: "Bless the Lord, O my soul; O Lord my God, Thou hast been magnified exceedingly.",
    alleluia_tone: 5,
    alleluia_verse: "Praise Him, all ye His angels; praise Him, all ye His hosts.",
    alleluia_stichos: "For He spake, and they came to be; He commanded, and they were created.",
    communion_verse: "He maketh His angels spirits, and His ministers a flame of fire.",

    // ── AT VESPERS: LORD I HAVE CRIED ──────────────────────────────────────
    // 3 unique texts, each marked (Twice) — uniform doubling 3→6, no markers needed (§6b).
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 4, spec_mel: "As one valiant among the martyrs",
        text: "O Michael, supreme commander, * shown forth as a most radiant intercessor " +
              "before the three-Sunned Godhead, * thou dost cry out, rejoicing with the heavenly " +
              "hosts: * Holy art Thou, O Father! * Holy art Thou, O co-beginningless Son! * Holy " +
              "art Thou also, O Holy Spirit! * One glory, * one Kingdom and nature, ** one " +
              "Godhead and power!" },
      { tone: 4, spec_mel: "As one valiant among the martyrs",
        text: "Thine aspect is fiery, * and thy beauty wondrous, * O Michael, first among angels, " +
              "* for in thine immaterial nature * thou dost traverse the ends of the earth, * fulfilling " +
              "the commandments of the Creator of all, * known in the power of thy might, * " +
              "making thy church a wellspring of healings, ** revered in thy holy name." },
      { tone: 4, spec_mel: "As one valiant among the martyrs",
        text: "O Thou Who, as it is written, * doth make Thine angels spirits * and Thy ministers " +
              "a flame of fire: * amid the ranks of Thine archangels, O Lord, * Thou hast shown " +
              "forth as preeminent * Michael, the supreme commander, * who doth obey Thy " +
              "commands, O Word, * and with fear doth utter ** the thrice-holy hymn unto Thy " +
              "glory." },
    ],
    stichera_glory: {
      tone: 6,
      text: "Rejoice with us, all ye angelic legions, for the great supreme commander, your " +
            "superior and our intercessor, appearing most wondrously this day in his honored " +
            "temple, doth sanctify it. Wherefore, chanting as is meet, let us cry aloud to him: " +
            "Cover us with the shelter of thy wings, O Michael, thou greatest of the archangels!",
    },
    lic_theotokion: {
      tone: 6,
      text: "Rejoice with us, all ye choirs of virgins, for our intercessor, mediator, protection " +
            "and great refuge doth today on her divine and honored feast comfort the sorrowful. " +
            "Wherefore, hymning her at length as is meet, let us cry aloud: Protect us with thy " +
            "divine intercession, O most pure Lady Theotokos!",
    },

    // ── AT VESPERS: APOSTICHA ──────────────────────────────────────────────
    // Stichera from the Octoechos (§2C). The PDF prints one combined Glory/Both now.
    aposticha_glory: {
      tone: 8,
      text: "O supreme commander, as general, champion and chief of the angels, from all " +
            "want and grief, from afflictions and grievous sins do thou free those who hymn and " +
            "beseech thee with faith, O glorious one, for thou art manifestly immaterial, beholding " +
            "the Immaterial One, illumined with the unapproachable light of the Master’s glory. " +
            "For in His love for mankind He took flesh from the Virgin for our sake, wishing to " +
            "save the human race.",
    },

    // ── TROPARION & KONTAKION ──────────────────────────────────────────────
    troparion: {
      tone: 4,
      text: "O supreme commander of the heavenly hosts, * we entreat thee unworthy though " +
            "we be, * that by thy prayers, thou wilt encompass us * with the protection of the " +
            "wings of thine immaterial glory * preserving us who fall down before thee and " +
            "earnestly cry aloud: * deliver us from all misfortunes, ** for thou art the supreme " +
            "commander of the hosts on high.",
    },
    // Single kontakion — found at Ode VI AND at AT LITURGY (§5.x check performed at
    // all three positions: AT LITURGY, Ode VI, Ode III). Routes to all four Hours.
    kontakion_ode6: {
      tone: 2,
      text: "O chief commander of God, minister of divine glory, * captain of the angels and " +
            "instructor of all mankind: * beg thou great mercy and that which is profitable for us, * " +
            "for thou art the supreme commander ** of the bodiless hosts.",
    },
    ikos: "In Thy Scriptures, O immortal Lover of mankind, Thou didst say that a " +
          "multitude of angels rejoiceth in heaven over one man that repenteth. Wherefore, O " +
          "Sinless One, Who alone knowest the hearts of men, amid our transgressions we ever " +
          "make bold to beseech Thee to have compassion and to send down compunction " +
          "upon us, unworthy though we be, granting us forgiveness, O Master, in that Thou art " +
          "compassionate; for the supreme commander of the bodiless hosts doth entreat Thee " +
          "on behalf of us all.",

    // ── MATINS: EXAPOSTILARION ─────────────────────────────────────────────
    exapostilarion: "As of old thou didst subdue the raging flow and thundering of the river, O " +
                    "glorious supreme commander, so now destroy the pride of the heathen and the raging " +
                    "of the demons, that we may fittingly honor thee as is meet.",
    matins_exapostilarion_theotokion: {
      text: "The ranks of the bodiless hosts honor thy birthgiving, for thou alone " +
            "hast filled mortals with joy. Wherefore, we, the faithful, glorify thee the all-" +
            "immaculate one, singing the praises of thy glory in hymns, for thou hast shone forth " +
            "light upon those who are in darkness, like the dawn which shineth forth in the " +
            "morning.",
    },

    // ── AT LITURGY: BEATITUDES ─────────────────────────────────────────────
    // 8 troparia: four each from Odes III and VI of the archangel's canon.
    beatitudes_source: "menaion",
    beatitudes_troparia: [
      { text: "With divine might dost thou encircle all the earth, O all-praised chief among the angels, rescuing us that call upon thy divine name from the cruel enemy.",
        source: "Ode III", label: "Ode III, 1", note: "(Twice) per PDF" },
      { text: "O supreme commander of God, of aspect most divine, thou hast been a divine herald, an undaunted intercessor for the faithful, a guide to those who are astray and an instructor.",
        source: "Ode III", label: "Ode III, 2" },
      { text: "Thou wast a most pure mirror of the splendor of God, radiantly reflecting the manifestation of the honored Spirit, O right wondrous Michael, first among the angels.",
        source: "Ode III", label: "Ode III, 3" },
      { text: "The multitude of the faithful rejoiceth, praising thee, O Michael, and it doth glorify the most holy Word Who in His goodness hath united men and angels.",
        source: "Ode VI", label: "Ode VI, 1" },
      { text: "Thou didst save the armies of Israel, revealing thyself and transmitting the commands of God, O supreme commander; and thou didst cast down the enemy and didst utterly destroy them.",
        source: "Ode VI", label: "Ode VI, 2" },
      { text: "Seized with fear and reverence, Joshua, son of Nun, bowed down when he beheld, thee, O chief of the angels, asking thine honored and holy name.",
        source: "Ode VI", label: "Ode VI, 3" },
      { text: "Blessed are the people that ever bless thee, O blessed one, who hast given birth unto the blessed God, Who, in His tender compassion, hath deified mortal man by an ineffable union.",
        source: "Ode VI", label: "Ode VI, Theotokion" },
    ],
  },

};

export default SEPTEMBER_MENAION;
