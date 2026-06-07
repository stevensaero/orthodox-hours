// Menaion data — June
// Source: St. Sergius Menaion (Russian usage) + OCA calendar
// Encoding rule: v2.1 — see encoding_rule_v2_1.md
// Single point of truth — edit this file for june encoding updates

const JUNE_MENAION = {
  "06-07": [
    {
      saint: "Holy Hieromartyr Theodotus, Bishop of Ancyra",
      oca_primary: true,
      source_file: "06-07A.pdf",
      rank: "simple",
      fekula_section: "2A",
      has_great_doxology: false,
      has_polyeleos: false,
      has_litya: false,
      has_paroemias: false,
      magnificat_sung: false,
      matins_format: "god_is_the_lord", // PDF: "if Alleluia is to be chanted instead of God is the Lord" — god_is_the_lord is the norm
      feast_e: null,
    feast_g: null,
      feast_g: null,
      aposticha_source: "octoechos", // §2A — no Menaion aposticha in PDF
      note: "Also: Martyrs Kyriaka, Valeria & Maria (OCA secondary, Polyeleos service, 06-07.pdf). " +
            "3 stichera Tone I confirmed §2A.",
      troparion: {
        tone: 4,
        text: "Your holy martyr Theodotus and his companions, O Lord, through their sufferings have received incorruptible crowns from You, our God. For having Your strength, they laid low their adversaries, and shattered the powerless boldness of demons. Through their intercessions, save our souls!",
      },
      kontakion_ode6: {
        tone: 4,
        text: "You struggled well, O Theodotus, together with your fellow athletes and passion-bearing virgins. You have received crowns of honor. Therefore, unceasingly pray to Christ God for us all.",
      },
      stichera_lord_i_call: [
        { tone: 1, text: "With joyful heart and steadfast resolve, O martyr, thou didst truly brave the torments, undaunted by the pangs of the torturers or a violent death; wherefore, having contended lawfully, thou hast been crowned with splendor, O Theodotus." },
        { tone: 1, text: "By the testing of thy flesh thou didst wound the adversary, O blessed one, piercing their hearts with thy rebukes; and with the drops of thy blood which thou didst shed thou didst utterly dry up torrents of ungodliness, O most blessed one." },
        { tone: 1, text: "Burned steadily with torches and thy back lacerated with stripes, thou didst endure, O martyr, crying aloud: \"Nothing shall ever separate me from the love of Christ, neither death, nor life, nor any other torment!\"" },
      ],
      stichera_glory: null, // §2A — no separate doxasticon
    },
    {
      saint: "Holy Martyrs Kyriaka, Valeria & Maria",
      oca_primary: false,
      source_file: "06-07.pdf",
      rank: "polyeleos",
      fekula_section: "2E",
      has_great_doxology: false, // Not explicitly stated in PDF — AT LITURGY has troparion/kontakion only
      has_polyeleos: false, // Not explicitly stated in PDF despite "AT GREAT VESPERS" with 8 stichera
      has_litya: false, // No Litya section in PDF
      has_paroemias: false, // No OT lessons in PDF
      magnificat_sung: false,
      matins_format: "god_is_the_lord", // Implied by Great Vespers structure
      feast_e: null, // AT LITURGY: troparion and kontakion only, no proper epistle/gospel in PDF
      feast_g: null,
      aposticha_source: "octoechos", // "Stichera from the Oktoechos; Glory..., of the holy martyrs"
      note: "The Holy Martyrs Kyriaka, Valeria and Maria appear on the OCA calendar as secondary " +
            "commemorations on June 7. The OCA primary is HM Theodotus of Ancyra. " +
            "PDF has 'AT GREAT VESPERS' with 8 stichera and Glory doxasticon Tone VI, suggesting " +
            "polyeleos rank, but no explicit Polyeleos, Litya, or paroemia rubrics in the PDF. " +
            "No AT LITURGY proper readings. Rank requires verification against a fuller source.",
      troparion: {
        tone: 1,
        text: "As reasonable lambs, you were guided by Christ, the Chief Shepherd, along the path of martyrdom. You finished your course and kept the faith; therefore, honored Kyra, Valerie, and Mary, with joyful hearts, we magnify Christ today, as we honor your holy memory!",
      },
      kontakion_ode6: {
        tone: 4,
        text: "Passion-bearers Kyra, Valerie and Mary, you loved the faithful promises of God; you clung to the faith of Christ, looking for eternal life and the blessedness of Paradise! You endured torture with steadfastness and bowed your necks beneath the sword. Therefore, you have been crowned by the hand of the Lord and glorious is your memory. Entreat Christ God, the Judge of the contest, on behalf of those who honor your struggles with faith!",
      },
      stichera_lord_i_call: [
        { tone: 8, text: "Wed to the pre-eternal Word, and having utterly forsaken the folly of idolatry, in the silence of your lips did ye abide, that ye might hear the word of God in your hearts; and like rational ewe-lambs ye were sacrificed unto God in your innocence. Wherefore, we cry out to you: Rejoice, ye partakers of the ineffable glory of Paradise!" },
        { tone: 8, text: "Like the wise virgins ye went forth to meet Christ, the Bridegroom that cometh at midnight, O martyrs; and having woven wedding garments for yourselves from the blood of your suffering, as a dowry unto Him ye offered your lives. Wherefore, we cry unto you: Rejoice, ye that have been crowned in the heavenly mansions!" },
        { tone: 8, text: "O martyr Valeria, as thy name signifieth strength, stronger than adamantine didst thou remain in the endurance of martyrdom. Wounding the proud prince of darkness by the power of the Cross, and entering the heavenly mansions with honor, thou dost look down from the heavens upon those who struggle for the faith, granting them strength. Wherefore, we cry to thee: Rejoice, thou mighty champion of the faithful!" },
      ],
      stichera_glory: { tone: 6, text: "The most pure and precious lips of Christ have said: Blessed are they that are persecuted for righteousness' sake, for theirs is the Kingdom of Heaven; fear not those who kill the body, but are not able to kill the soul. Keeping these words of the Lord in your hearts, O all-praised martyrs Kyriaka, Valeria and Maria, ye bowed your necks beneath the sword in expectation of a crown from God and life eternal. Wherefore, your hope did not put you to shame; and now, delighting in the mansions of paradise, forget not us who with love hymn your sufferings, that by your bold mediation and fervent supplications we may find great mercy with Christ." },
      // 8 total = (Thrice)+(Thrice)+(Twice) per PDF rubric; 3 Pentecostarion not encoded separately
      stichera_lord_i_call_count: 8,  // 06-07.pdf: 8 stichera (Pentecostarion period) or 8 Menaion outside it
      // ── VESPERS — APOSTICHA ──────────────────────────────────────────────────
      // PDF: "Stichera from the Oktoechos; Glory..., of the holy martyrs, in Tone III"
      // Aposticha body stichera from Octoechos; only the Glory is Menaion
      stichera_aposticha: [],  // Octoechos governs body stichera; no dedicated Menaion stichera
      aposticha_glory: { tone: 3,
        text: "Come, ye that love the martyrs, let us hymn those who have been crowned with the diadem of suffering! " +
              "Come, ye lovers of silence, let us glorify those who set a watch before their mouths! " +
              "Come, ye virgins, with gladness let us praise those who preserved their virginity undefiled! " +
              "Come, all ye faithful, let us honor the holy memory of those who endured suffering, " +
              "crying out to them with heartfelt love: Rejoice, O Kyriaka, Valeria and Maria, ye brides of Christ!",
      },
      aposticha_both_now: { source: "octoechos",
        note: "06-07.pdf: aposticha stichera from Oktoechos; Both now from Octoechos at runtime",
      },
      // ── MATINS / LITURGY — NOT IN PDF ────────────────────────────────────────
      // 06-07.pdf has AT LITURGY with troparion and kontakion only — no gospel, beatitudes,
      // prokeimenon, alleluia, or communion verse printed. Rank and flag fields require
      // verification against a fuller rubrical source (e.g. OCA typikon for this date).
      matins_gospel: null,  // NOT IN PDF — 06-07.pdf does not print a matins gospel
      beatitudes_source: "NOT IN PDF — 06-07.pdf has no beatitudes section",
      beatitudes_troparia: [],  // NOT IN PDF — empty array; requires future verification
    },
  ],

  // ── June 11 — "It Is Truly Meet" Icon of the Theotokos ───────────────────────
  // Source: St. Sergius 06-11.pdf. OCA primary: this icon (also lists Unbreakable Wall and
  // Seven Arrows icons as separate commemorations without full compiled services here).
  // Service rank: Polyeleos (§2E) — Great Vespers, 8 stichera, 3 lessons, Matins Gospel.
  // Two kontakia in PDF: Theotokos T8 (Ode VI — governs Hours) + Icon T4 (separate).

  "06-11": {
    saint: "Icon of the Most Holy Theotokos “It Is Truly Meet”",
    oca_primary: true,
    source_file: "06-11.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    has_great_doxology: true,
    has_polyeleos: true,
    has_litya: true,
    has_paroemias: true,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    aposticha_source: "menaion",
    note: "Commemoration of the miracle on Mt. Athos when the Archangel Gabriel taught a monk the " +
          "“It is truly meet” hymn (Axion Estin). Also: icons “Unbreakable Wall” and “Seven Arrows” (OCA calendar); " +
          "those icons do not have compiled services in this library.",
    feast_e: "Philippians 2:5-11 (§240)",
    feast_g: "Luke 10:38-42; 11:27-28 (§54)",
    prokeimenon_tone: 3,
    prokeimenon_text: "My soul doth magnify the Lord, " +
      "and my spirit hath rejoiced in God my Savior.",
    prokeimenon_stichos: "For He hath looked upon the lowliness of His handmaiden; " +
      "for behold, from henceforth all generations shall call me blessed.",
    alleluia_tone: 8,
    alleluia_verse: "Hearken, O daughter, and see, and incline thine ear.",
    alleluia_stichos: "The rich among the people shall entreat thy countenance.",
    communion_verse: "I will take the cup of salvation, " +
      "and I will call upon the name of the Lord.",
    paroemia_1: "Genesis 28:10-17 (Jacob\'s ladder — This is none other than the house of God)",
    paroemia_2: "Ezekiel 43:27; 44:1-4 (the shut gate — the Lord God of Israel shall enter by it)",
    paroemia_3: "Proverbs 9:1-11 (Wisdom hath built a house for herself)",
    matins_gospel: "Luke 1:39-49, 56 (§4)",
    has_litya: true,
    has_polyeleos: true,
    troparion: {
      tone: 4,
      text: "O ye faithful, with boldness let us hasten to the Theotokos, our merciful Queen, and with compunction let us cry out to her: Send down upon us thy rich mercies; preserve our Church; and maintain the people in prosperity; and deliver our land from every evil circumstance; and grant peace to the world and salvation to our souls.",
    },
    kontakion_ode6: {
      tone: 8,
      text: "O Queen of all, we cry aloud to thee the words of the archangel: It is truly meet to bless thee, the Theotokos, ever-blessed and all-immaculate, and the Mother of our God!",
    },
    stichera_lord_i_call: [
      { tone: 1, text: "O wondrous miracle! God Who became incarnate of thee hath now been well-pleased to magnify thy hymn, O pure one. Wherefore, He sent His archangel in fitting guise to the novice, to teach him thy hymn; for Gabriel before cried out to thee: \"Rejoice, O thou who art full of grace! The Lord is with thee, through thee granting the world great mercy!\"" },
      { tone: 1, text: "O thy miracles, O pure one! Thou hast been shown to be the Mother of the Most High, O Lady! And now, by thy forethought, O all-immaculate one, the Archangel Gabriel hath been sent from heaven in the guise of a stranger, to teach thy hymnody in a most perfect manner; for he before cried out to thee: \"Rejoice, O thou who art full of grace! The Lord is with thee, through thee granting the world great mercy!\"" },
      { tone: 1, text: "We glorify thy forethought, O Virgin Mother of God, for by the strange arrival of the divine Gabriel, O all-immaculate one, thou hast now taught us the truly wondrous beginning to thy hymn. Wherefore, falling down with faith, we call out to thee, crying aloud with him: \"Rejoice, O thou who art full of grace! The Lord is with thee, through thee granting the world great mercy!\"" },
      { tone: 1, text: "O wondrous miracle! The radiant Gabriel, in the guise of a monk, appeared to the monk who remained behind in his cell and miraculously received the amplification of thy hymnody, O all-immaculate one. And straightway with his finger he engraved what he had chanted upon a tablet of stone, and then vanished, leaving the astonished monk to glorify thee, O most hymned one." },
    ],
    stichera_lord_i_call_count: 8,  // 4 stichera each ×2 per PDF (06-11.pdf)
    stichera_glory: { tone: 4, text: "Fitting was it that on Mount Athos, which hath thee as its intercessor, O Mother of God, that this, the hymn of the archangel to thee, was first chanted unto thee, O most hymned Virgin, and that from hence it hath passed to all the ends of the world, as the crown of the hymns of the Mother of God. Wherefore, we cry out to thee: O most glorious Theotokos, beseech thy Son, that our souls be saved!" },

    // ── VESPERS — LITIYA ──────────────────────────────────────────────────────
    // 06-11.pdf: "At Litiya, the Sticheron of the temple, and these Stichera"
    litya_stichera: [
      { tone: 1,
        text: "Today is the triumph of the Virgin! Let Athos leap up, and let the Church join chorus! " +
              "For the holy Theotokos hath summoned us to the annual feast of her wondrous hymnody, " +
              "which the Archangel Gabriel hath taught us, the strange beginning of her divine hymn. " +
              "For having thus appeared to the monk in like raiment, " +
              "he magnified the Theotokos as the one who in the flesh bore Him Who is seated upon the cherubim. " +
              "Through her supplications, O Christ God, save Thou our souls." },
      { tone: 2,
        text: "She who is more exalted than the heavens, who is more glorious than the cherubim " +
              "and more honorable than all creation, who because of her great purity " +
              "became the receptacle of the eternal Essence, " +
              "is today magnified in her kellion by the angel with hymns. " +
              "Thus all things are filled with joy, and great mercy hath been bestowed upon us. " +
              "The all-immaculate Bride and Mother of the good pleasure of the Father, " +
              "foreordained by God as a dwelling-place for Him, " +
              "whom the incorporeal hosts unceasingly glorify, " +
              "and whom we bless as the Theotokos, the truly ever-blessed and all-immaculate Mother of our God, " +
              "today, through the archangel, giveth us hymnody strange to the ear." },
    ],
    litya_glory: { tone: 5,
      text: "Ye people, hymn, O hymn the Mother of our God! " +
            "For today the archangel sang to the solitary monk the new hymn of the all-immaculate Virgin, " +
            "who is our helper, and whom it is incumbent on all to honor unceasingly.",
    },
    litya_both_now: { source: "pentecostarion",
      note: "06-11.pdf: 'Both now... from the Pentecostarion, or this Theotokion in Tone V' — Pentecostarion governs when in season",
    },

    // ── VESPERS — APOSTICHA (GREAT VESPERS) ───────────────────────────────────
    // 06-11.pdf: 3 stichera Tone I + feast-specific verses + Glory/Both now T4
    stichera_aposticha: [
      { tone: 1,
        text: "Of old, God sent to thee the divine Gabriel, the prince of the ranks of heaven, " +
              "O Virgin Maiden, to bear thee tidings of thine ineffable conception; " +
              "and now he is first to teach us thy new hymnody." },
      { tone: 1,
        verse: "I shall commemorate thy name in every generation and generation.",
        text: "O Virgin Maiden, who can worthily recount this strange miracle, which took place to thy glory? " +
              "For the angel hath now appeared in the guise of a monk, " +
              "providing a new beginning for thy hymn with wondrous praises unto thee, " +
              "and telling all to chant thus." },
      { tone: 1,
        verse: "The rich among the people shall entreat thy countenance.",
        text: "Meet it is, O Virgin, as the divine Gabriel truly chanted, " +
              "to bless thee, the pure Theotokos, blessed and all-immaculate, " +
              "who art in truth the Mother of God, and whom we magnify in hymns." },
    ],
    aposticha_glory: { tone: 4,
      text: "The monk now heard a hymn which he had never known; " +
            "for the archangel taught him the beginning of thy hymn, O Virgin. " +
            "Wherefore, marveling, the monk asked him to set it down in writing. " +
            "He therefore engraved it with his finger upon a tablet of stone, and then vanished, " +
            "having ensured that in joy thou wouldst ever be hymned as the Theotokos.",
    },
    aposticha_both_now: { tone: 4,
      text: "The monk now heard a hymn which he had never known; " +
            "for the archangel taught him the beginning of thy hymn, O Virgin. " +
            "Wherefore, marveling, the monk asked him to set it down in writing. " +
            "He therefore engraved it with his finger upon a tablet of stone, and then vanished, " +
            "having ensured that in joy thou wouldst ever be hymned as the Theotokos.",
      note: "06-11.pdf: 'Glory…Both now…in the same melody' — Both now = Glory text repeated in T4",
    },

    // ── BEATITUDES ────────────────────────────────────────────────────────────
    // 06-11.pdf: "8 Troparia: 4 from ODE III and 4 from ODE VI of the canon of the Theotokos"
    beatitudes_source: "4 from Ode III + 4 from Ode VI of the Theotokos canon (06-11.pdf, AT LITURGY)",
    beatitudes_troparia: [
      // From Ode III:
      { text: "When the time came for all the fathers to assemble in the Church of the Protaton, " +
              "to celebrate praise throughout the night, then did the archangel chant thy divine hymn, O pure one." },
      { text: "The elder of that novice went with the others; " +
              "and to the one left behind the Archangel Gabriel appeared in similar guise, " +
              "providing a beginning for thy hymn." },
      { text: "Adding a phrase to the beginning of that hymn which Cosmas sang to thee of old, " +
              "thy divine servant said that it was his habit to begin thy hymn thus." },
      { text: "O thine awesome wonders, O divine Archangel Gabriel: " +
              "how in the guise of a monk didst thou chant to the Mother of God on this day " +
              "and didst magnify her as is fitting!" },
      // From Ode VI:
      { text: "With ineffable joy and gladness the priests and monastics, " +
              "all the multitudes of the Holy Mountain, " +
              "hastened to take up thine icon, O most pure one." },
      { text: "Holding this thy divine icon with all reverence, all the fathers, weaving hymnody, " +
              "bore it into thy divine temple with hymns and songs, O most pure one." },
      { text: "O Virgin, they celebrated an all-night vigil, lovingly honoring thee " +
              "and the archangel who proclaimed thy hymn; and we now likewise honor you together." },
      { text: "After the celebration of the Mysteries, the godly fathers, chanting, " +
              "took up thy divine icon, and with great reverence placed it within the sanctuary of thy temple." },
    ],
  },

  // ── June 12 — Ven. Onuphrius the Great & Ven. Peter of Athos (Double §2B) ────
  // Source: St. Sergius 06-12.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3 Onuphrius Tone VIII + 3 Peter same mel.).
  // Fekula §2B: Peter (Ode III) → 1st & 6th Hours; Onuphrius (Ode VI) → 3rd & 9th Hours.

  "06-12": {
    saint: "Ven. Onuphrius the Great & Ven. Peter of Athos",
    oca_primary: true,
    source_file: "06-12.pdf",
    rank: "six_stichera",
    fekula_section: "2B",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // AT MATINS: "One canon from the Octoechos, and two canons..." — no Alleluia conditional
    feast_e: "Galatians 5:22-6:2 (§213)",
    feast_g: "Matthew 11:27-30 (§43)",
    aposticha_source: "octoechos", // "Stichera from the Octoechos, and Glory..., Tone VI"
    stichera_lord_i_call_count: 6,  // 3 Onuphrius T8 + 3 Peter T8 (06-12.pdf)
    note: "Double service: two venerable fathers in one compiled service. Joint troparion. " +
          "Per Fekula §2B: 3rd & 9th Hours use Onuphrius kontakion (Ode VI, Tone III). " +
          "6 stichera (3 Onuphrius Tone VIII + 3 Peter Tone VIII same melody) confirmed §2B. " +
          "Glory doxasticon Tone VI. AT LITURGY: full readings with Beatitudes (4 from Peter Ode III + 4 from Onuphrius Ode VI).",
    feast_e: "Galatians 5:22-6:2 (§213)",
    feast_g: "Matthew 11:27-30 (§43)",
    prokeimenon_tone: 7,
    prokeimenon_text: "Precious in the sight of the Lord " +
      "is the death of His saints.",
    prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
    alleluia_tone: 6,
    alleluia_verse: "Blessed is the man that feareth the Lord; " +
      "in His commandments shall he greatly delight.",
    alleluia_stichos: "His seed shall be mighty upon the earth.",
    communion_verse: "Rejoice in the Lord, O ye righteous; " +
      "praise is meet for the upright.",
    troparion: {
      tone: 4,
      text: "O God of our fathers, ever deal with us according to Thy meekness. Take not Thy mercy from us, but by the prayers of these saints direct our life in peace.",
    },
    // kontakion = Matins Ode VI (Onuphrius, second saint) → 3rd & 9th Hours
    kontakion_ode6: {
      tone: 3,
      text: "Illumined by the radiance of the most holy Spirit, O divinely wise one, thou didst forsake all the tumults of life; and upon reaching the desert, O venerable father, thou didst gladden God the Creator, Who is over all things. Wherefore, Christ, the great Bestower of gifts doth glorify thee, O blessed one.",
      saint: "Onuphrius the Great",
    },
    // kontakion_ode3 = Matins Ode III (Peter, first saint) → 1st & 6th Hours
    kontakion_ode3: {
      tone: 2,
      text: "Having withdrawn thyself from human companionship, out of divine desire and love for thy Lord, O Peter, thou didst dwell in caves of stone and deep ravines, receiving from Him a crown. Pray thou unceasingly, that we be saved.",
      saint: "Peter of Athos",
    },
    stichera_lord_i_call: [
      { tone: 8, text: "O divinely wise father Onuphrius, thou didst cut thyself off from the tumult of the world and ascended to celestial perfection, having desired Him Who is the Well-spring of good things; and there thou didst attain true love, O blessed one. Illumined with the effulgence thereof, by thy supplications rescue us from the darkness of sin.", saint: "Onuphrius" },
      { tone: 8, text: "O divinely wise father Onuphrius, the cold of night and the burning heat of day didst thou endure, O venerable one, in the hope of things to come, and having mortified thy members on earth, thou hast received the life of heaven and entered joyously into the bridal-chamber, O holy one, to behold the infinite beauty of thy Creator.", saint: "Onuphrius" },
      { tone: 8, text: "O divinely wise father Onuphrius, the glorious Paphnutius found thee in the desert hidden like a treasure, and clearly proclaimed to those in the world the corrections of thy struggles, enriching the faithful with his account of thy God-pleasing life, O all-famed one. By thy supplications, O glorious one, show us to be emulators thereof.", saint: "Onuphrius" },
      { tone: 8, text: "We have recognized thee, O venerable one, as the namesake of the divine Peter, and one who truly followed him and who piously shared in his zeal for the Faith; for thou didst love the good law, and desire the divine precepts thereof, O father, adorning thy soul with the virtues. Wherefore, we honor and bless thee.", saint: "Peter" },
      { tone: 8, text: "O spiritually rich and venerable father, having in compunction of soul acquired true patience, love unfeigned, steadfast hope and perfect humility, thou didst become a temple of the divine Spirit, and having received His effulgence in purity, thou wast seen by mortals to be a secondary luminary through the purity of thy life.", saint: "Peter" },
      { tone: 8, text: "O venerable and divinely inspired father, though thou didst hide unseen for many years on earth, yet thou didst become known through the Spirit in signs and wonders, and by the sweet savor of myrrh; for thou didst pour forth a living radiance and holiness, truly showing the grace of the divine Spirit to those who love thee.", saint: "Peter" },
    ],
    stichera_glory: { tone: 6, text: "O venerable fathers, the sound of your corrections hath gone forth into all the earth; wherefore, ye have found the reward of your labors in the heavens, having destroyed hordes of the demons, and attained unto the ranks of the angels, whose lives ye blamelessly emulated. As ye have boldness before the Lord, ask ye peace for our souls." },
  },

  // ── June 13 — Martyr Aquilina & Hierarch Triphyllius (Double §2B) ──────────
  // Source: St. Sergius 06-13.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3+3). Two separate troparia and kontakia.
  // Fekula §2B: Aquilina (first saint, Ode III) = 1st & 6th Hours;
  //             Triphyllius (second saint, Ode VI) = 3rd & 9th Hours.

  "06-13": {
    saint: "Holy Martyr Aquilina & Holy Hierarch Triphyllius",
    oca_primary: true,
    source_file: "06-13.pdf",
    rank: "six_stichera",
    fekula_section: "2B",  // Double service: two saints, §2B (renamed from fekula_section_override)
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    aposticha_source: "octoechos",  // §2B/§2C — no Menaion aposticha in PDF
    stichera_lord_i_call_count: 6,  // 3 Aquilina T4 + 3 Triphyllius T8 (06-13.pdf)
    note: "Double service: martyr and hierarch in one compiled service. Two separate troparia. " +
          "Per Fekula §2B: 9th Hour uses Triphyllius kontakion (second saint, Tone VIII). " +
          "AT LITURGY section in PDF names Troparion/Kontakion only — §2B, readings from Oktoechos.",
    feast_e: null,  // §2B — no proper epistle/gospel; readings from Octoechos
    feast_g: null,
    troparion: {
      tone: 4,
      text: "Thy ewe-lamb Aquilina, O Jesus crieth out with a loud voice: Thee do I love, O my Bridegroom, and, seeking Thee, I endure suffering. In Thy baptism I am crucified and buried with Thee. I suffer for Thy sake, that I may reign with Thee; I die for Thee, that I may live with Thee. Accept me, who with love sacrifice myself for Thee, as an unblemished offering! By her supplications, in that Thou art merciful, save Thou our souls.",
      saint: "Aquilina",
    },
    troparion_second: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Triphyllius our father, entreat Christ God, that our souls be saved.",
      saint: "Triphyllius",
    },
    // kontakion = Matins Ode VI (Triphyllius, second saint) → 3rd & 9th Hours
    kontakion_ode6: {
      tone: 8,
      text: "Receiving the purity of virginity through the excellency of thy life, O Triphyllius, thou wast the first hierarch of Leucosia and wast revealed to be its evangelizer and instructor in the knowledge of God. Wherefore, with joy we cry out to thee: Rejoice, O adornment of hierarchs!",
      saint: "Triphyllius",
    },
    // kontakion_ode3 = Matins Ode III (Aquilina, first saint) → 1st & 6th Hours
    kontakion_ode3: {
      tone: 2,
      text: "Having utterly purified thy soul with the beauties of thy virginity and attained the heights by martyrdom, O most honored Aquilina, wounded with the love of Christ Thy Bridegroom, thou standest before Him with the angels in gladness. With them cease thou never to pray on behalf of us all.",
      saint: "Aquilina",
    },
    // ── VESPERS — LORD I HAVE CRIED ─────────────────────────────────────────
    // 06-13.pdf: 6 stichera — 3 Aquilina Tone IV + 3 Triphyllius Tone VIII
    stichera_lord_i_call: [
      { tone: 4, saint: "Aquilina",
        text: "Knowing thee to be an incorrupt bride adorned by the Holy Spirit, " +
              "we celebrate thy holy memory, O passion-bearing martyr. " +
              "We piously bow down before thy relics and holy shrine, " +
              "and ever draw forth healing for our passions, " +
              "honoring thee with faith, O all-praised Aquilina." },
      { tone: 4, saint: "Aquilina",
        text: "To thy Bridegroom, O most honored one, thou didst offer as a gift " +
              "the dismemberment of thy limbs. Wherefore, having deemed thee worthy " +
              "of the most radiant bridal chambers, the Transcendent One doth illumine thee " +
              "with the light of divine glory. Before Him dost thou stand, rejoicing, " +
              "O Aquilina, do thou earnestly entreat Him on behalf of us who with faith glorify thy suffering." },
      { tone: 4, saint: "Aquilina",
        text: "Held fast, O all-praised one, by the desire of thy Creator, " +
              "thou didst depict His sufferings with thine own flesh, " +
              "enduring each threefold wave of pain. And now thou livest in the heavens, " +
              "wearing an imperishable crown and glory immune to pain, " +
              "and beholding what the ranks of angels see, O divinely inspired Aquilina." },
      { tone: 8, saint: "Triphyllius",
        text: "O glorious father Triphyllius, excellently enlightened with many tears, " +
              "thou didst take wing to the first Cause of the good, " +
              "and wast shown to be a pillar of light, illumining with thy words and miracles " +
              "all who with divinely dutiful thought ever approach thee. " +
              "Wherefore, we honor thee and call thee blessed." },
      { tone: 8, saint: "Triphyllius",
        text: "O sacred father Triphyllius, honorably adorned like a second Aaron " +
              "with the plumage of vestments, thou now beholdest the Holy of holies " +
              "being within the second veil. O thine honored radiance which surpasseth the mind! " +
              "O divine adornment of holy hierarchs! Thou hast partaken thereof." },
      { tone: 8, saint: "Triphyllius",
        text: "Possessed of a merciful soul, of pure thought, of a straightforward heart, " +
              "an undefiled faith, an unfeigned love and the dignity of hierarchal rank, O father, " +
              "thou art enrolled with honor in the choirs of the fathers. " +
              "Wherefore, we all honor thee with sacred hymns and piously praise and call thee blessed." },
    ],
    stichera_glory: null,  // PDF: "Glory…Both now…Theotokion in Tone VIII" — no separate doxasticon
  },

    // ── June 8 — Translation of the Relics of Greatmartyr Theodore Stratelates
  // Source: OCA (oca.org/saints/lives/2026/06/08) and St. Sergius (06-08.pdf)
  // OCA and St. Sergius AGREE — both give Theodore Stratelates as primary.
  // Note: "Holy Fathers of the First Ecumenical Council" is a MOVABLE commemoration
  // falling on the Sunday nearest June 8 (Pascha+42), NOT a fixed June 8 date.
  // In 2026 that Sunday is June 14 — handled by the named days system.
  // Service rank: Six-Stichera (§2C) — 6 stichera on Lord I Call at Vespers.
  // Per Fekula §2C: "The Hours: Troparion and kontakion from the Menaion."
  // (Same Hours assembly rule as §2A Simple.)

  "06-08": {
    saint: "Translation of the Relics of Greatmartyr Theodore Stratelates",
    oca_primary: true,
    source_file: "06-08.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // AT MATINS: "Both canons from the Oktoechos" — no Alleluia conditional
    feast_e: "2 Timothy 2:1-10",
    feast_g: "Matthew 10:16-22 (§36)",
    aposticha_source: "octoechos", // "Stichera from the Oktoechos, and Glory..., Idiomelon Tone VIII"
    stichera_lord_i_call_count: 6,  // 3 T2 + 3 T4 (06-08.pdf)
    note: "Also: St Theodore, first Bishop of Rostov; Relics of Sts Basil & Constantine " +
          "of Yaroslavl; St Ephraim of Antioch; Ven Zosimus of Phoenicia; " +
          "Yaroslavl Icon; White Lake Icon; HM Theodore of Kvelta. " +
          "Note: Holy Fathers of the First Ecumenical Council falls on the Sunday " +
          "nearest June 8 (movable, Pascha+42) — not this fixed date. " +
          "6 stichera (3 Tone II + 3 Tone IV) confirmed §2C. Glory doxasticon Tone V. " +
          "AT LITURGY: full readings with Beatitudes (8 troparia from Odes III and VI).",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
    alleluia_tone: 4,
    alleluia_verse: "The righteous man shall flourish like a palm tree, " +
      "and like a cedar in Lebanon shall he be multiplied.",
    alleluia_stichos: "They that are planted in the house of the Lord, " +
      "in the courts of our God shall they blossom forth.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 4,
      text: "Through noetic recruitment thou didst become a most comely general of the heavenly King, O passion-bearer Theodore; for wisely arraying thyself with the weaponry of faith thou didst vanquish legions of demons, revealing thyself to be a victorious spiritual athlete. Wherefore, with faith we ever bless thee.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Arrayed in faith with manliness of soul, and taking in hand the word of God as a spear, thou didst conquer the enemy, O Theodore, great among the martyrs. With them unceasingly entreat Christ God on behalf of us all.",
    },
    stichera_lord_i_call: [
      { tone: 2, text: "Wholly didst thou bring thyself to Him Who gaveth thee perfect life, O most blessed one, as a living and animate whole-burnt offering, a sacrifice most pure and well-pleasing. Wherefore, thou hast become a right acceptable intercessor, rescuing from the tempest all who hymn thee with faith and call upon thee, O martyr Theodore." },
      { tone: 2, text: "Diligently didst thou cultivate the seed of the Word which was sown in thy soul, and increasing it through the pangs of thy suffering; and wisely storing it in the granaries of heaven, thou didst find incorruptible delight, wherein now reveling, O blessed one, by thy mediations before Christ save those who hymn thee with faith." },
      { tone: 2, text: "O martyr and passion-bearer of Christ, by thine entreaties save those who are in divers needs, repelling every evil circumstance, driving away soul-destroying grief, and beseeching mercy and grace for us, that, saved by thine intercessions, we may hymn thine honored struggles rejoicing, O Theodore." },
      { tone: 4, text: "A courageous spiritual athlete, an invincible warrior wast thou shown to be by the Holy Spirit, having cast down the aggressor by the wisdom of thy words and by the wise and patient manifestations of thy deeds. Wherefore, thou hast received crowns of victory and been joined to the choirs on high, O great martyr Theodore." },
      { tone: 4, text: "Thou wast a pillar of godly piety, O most noetically rich martyr, detesting the temples of the impious, brought as a most perfect lamb and most acceptable immolation unto Him who was blamelessly sacrificed for thy sake, Who glorified thy holy memory, and bestowed thee as a treasury of miracles upon those who are in the world, O Theodore." },
      { tone: 4, text: "Lifted up upon a cross, thy flesh lacerated, wounded with sharp arrows, beset with pain by means of all manner of the tormentors' skills, thou wast shown to be unbowed and invincible by the power of Him who was nailed to the Cross, O Theodore, the glory of the martyrs." },
    ],
    stichera_glory: { tone: 5, text: "Today the honored memory of Christ's passion-bearer hath shone forth more brightly than the morning star, invisibly illumining the hearts of the faithful, and dispelling the clouds from their souls through the activity of the grace of the Spirit. To Him let us cry aloud, O ye that love the martyrs: thou divinely bestowed grace which hath been revealed to the faithful, and which hath shed a multitude of miracles upon those who flee unto thee, O blessed Theodore! Unceasingly entreating Christ, that those who honor thy memory with faith, fail not to obtain eternal blessings." },
  },

  // ── June 9 — St Cyril of Alexandria, Archbishop ─────────────────────────
  // Source: St. Sergius (06-09.pdf) and OCA. Both agree on primary commemoration.
  // Service rank: Six-Stichera (§2C) — 6 stichera on Lord I Call (3 texts, each doubled).

  "06-09": {
    saint: "St Cyril of Alexandria, Archbishop",
    oca_primary: true,
    source_file: "06-09.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // AT MATINS: "Both canons from the Oktoechos, without the Martyria" — standard format
    feast_e: "Hebrews 13:7-16 (§334)",
    feast_g: "Matthew 5:14-19 (§11)",
    aposticha_source: "octoechos", // "Stichera from the Oktoechos; and Glory..., Tone VI"
    stichera_lord_i_call_count: 6,  // 3 T4 (each ×2 per PDF) (06-09.pdf)
    note: "Pillar of Orthodoxy and defender of the title Theotokos at the Council of " +
          "Ephesus (431 AD). Authored extensive commentaries and theological treatises. " +
          "Matins canon acrostic: 'Cyril is the harp of divine visions' (Theophanes, Tone IV). " +
          "Single kontakion — Ode VI only (same used at all four Hours). " +
          "6 stichera (3 texts, each doubled) Tone IV confirmed §2C. Glory doxasticon Tone VI.",
    prokeimenon_tone: 1,
    prokeimenon_text: "My mouth shall speak wisdom, " +
      "and the meditation of my heart shall be of understanding.",
    prokeimenon_stichos: "Hear this, all ye nations; give ear, all ye that inhabit the world.",
    alleluia_tone: 2,
    alleluia_verse: "The mouth of the righteous shall meditate wisdom " +
      "and his tongue shall speak of judgment.",
    alleluia_stichos: "The law of his God is in his heart, " +
      "and his steps shall not be tripped.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 8,
      text: "Teacher of Orthodoxy, instructor of piety and chastity, luminary of the Church, God-inspired instructor of Hierarchs, O supremely wise Cyril, thou hast illumined all by thy teaching; O harp of the Spirit entreat Christ God that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 6,
      text: "Thou hast manifestly poured forth upon us an abyss of the doctrines of theology from the wellsprings of the Savior, drowning heresies and saving thy flock unharmed from the threefold waves, O blessed Cyril, as a guide for all lands, revealing things divine, O venerable one.",
    },
    stichera_lord_i_call: [
      { tone: 4, text: "Having illumined thy mind with the effulgence of the Spirit, thou didst become a radiant sun, for, extending the beams of thy teachings to all the ends of the earth, thou hast enlightened the fullness of the faithful, O most blessed God-bearer, driving away the darkness of heresies by the power of Him Who shone forth from the Virgin." },
      { tone: 4, text: "With the goodly utterance of thy discourses, O sacred Cyril, the whole Church hath been adorned and piously ornamented with comely beauties, honoring in a sacred manner thy holy and right excellent memory, O boast of the Orthodox, summit of the fathers, champion of the all-holy Virgin at the council." },
      { tone: 4, text: "With thy fiery teachings all the tinder of heresies have been consumed, O most wise one, the armies of the impious who would not submit to the Truth have been drowned in the depths of thine understanding, O sacred Cyril, and the Church of the faithful is thereby ever adorned with thy doctrines, honoring thee with mighty voices." },
    ],
    stichera_glory: { tone: 6, text: "O good and faithful servant, laborer in the vineyard of Christ, thou didst bear the burden of the day, and increase the talant entrusted to thee; and thou didst not envy those who came after thee. Wherefore, the portals of heaven have been opened unto thee: enter thou into the joy of thy Lord, and pray for us, O Cyril our father." },
  },

  // ── June 4 — St Metrophanes, first Patriarch of Constantinople ─────────────
  // Source: St. Sergius 06-04.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call.
  // Two kontakia in PDF — Matins Ode VI Tone II governs the Hours (not Liturgy Tone IV).

  "06-04": {
    saint: "St Metrophanes, first Patriarch of Constantinople",
    oca_primary: true,
    source_file: "06-04.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // §2A — standard format; no Alleluia conditional in PDF
    feast_e: null, // AT LITURGY: troparion and kontakia only, no proper epistle/gospel
    feast_g: null,
    aposticha_source: "octoechos", // §2A — no Menaion aposticha in PDF
    note: "Also: Sts Mary and Martha, sisters of St Lazarus. Two kontakia in PDF: " +
          "Ode III Tone II governs 1st & 6th Hours; Ode VI Tone IV governs 3rd & 9th Hours. " +
          "3 stichera Tone VI confirmed §2A.",
    troparion: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Metrophanes our father, entreat Christ God, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 4, // PDF: Kontakion after Ode VI, Tone IV, Spec. Mel. "Thou hast appeared today"
      text: "From childhood thou wast shown to be a precious vessel, becoming a chosen hierarch of God; and to Him hast thou cried aloud with gladness: O Christ, Thou art equal to the Father and the Spirit!",
    },
    kontakion_ode3: {
      tone: 2, // PDF: Kontakion after Ode III, Tone II, Spec. Mel. "Seeking the highest"
      text: "Thou didst manifestly preach the Faith of Christ, and preserving it, thou didst truly cause thy faithful flock to increase. Wherefore, thou dost rejoice with the angels, O Metrophanes, entreating Christ unceasingly for us all.",
    },
    stichera_lord_i_call: [
      { tone: 6, text: "Thou wast shown to be a God-bearer wholly consecrated, the holy anointed of God, clad in the Holy Spirit, ever entering with splendor into the holy of holies, illumined with godly radiance, partaking of the grace of the holy mysteries as a true and most glorious hierarch, praying with boldness on behalf of our souls." },
      { tone: 6, text: "Thy life was illumined with the radiance of the virtues, and thou hast enlightened the faithful and driven away the darkness of delusion; for thou wast shown to be the bright sun of the truth, O most blessed and holy hierarch Metrophanes. And now thou hast made thine abode where shineth never-waning light, and become a child of the day through the grace of the Holy Spirit. Wherefore, honorably celebrating thy divine and luminous memory, we honor thee with love, O ever-memorable one." },
      { tone: 6, text: "Thy mind made beautiful by faith and through yearning for God, O divinely wise one, thou wast shown to be radiant; and having learned incorruption in thy mortal and corruptible body, O most wise one, thou didst acquire the splendors of the incorporeal ones, becoming a stranger to pleasures, adorned with dispassion, O most wise father and hierarch Metrophanes, thou radiant lamp and intercessor for those who honor thy memory with love." },
    ],
    stichera_glory: null, // §2A — no separate doxasticon
  },

  // ── June 5 — Holy Hieromartyr Dorotheus, Bishop of Tyre ─────────────────────
  // Source: St. Sergius 06-05.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera (§2C). "6 Stichera" in heading, 3 texts printed (each doubled).
  // Matins: "if Alleluia is to be chanted instead of God is the Lord" — god_is_the_lord is the norm.

  "06-05": {
    saint: "Holy Hieromartyr Dorotheus, Bishop of Tyre",
    oca_primary: true,
    source_file: "06-05.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // PDF: "if Alleluia is to be chanted instead of God is the Lord" — god_is_the_lord is the norm
    feast_e: null, // AT LITURGY: troparion and kontakion only, no proper epistle/gospel
    feast_g: null,
    aposticha_source: "octoechos", // §2C — no Menaion aposticha in PDF
    stichera_lord_i_call_count: 6,  // 3 stichera each doubled = 6 total (06-05.pdf)
    note: "Dorotheus served 107 years as a pastor before martyrdom under Julian the Apostate. " +
          "6 stichera (3 texts, each doubled) Tone VIII confirmed §2C.",
    troparion: {
      tone: 4,
      text: "As thou didst share in the ways of the apostles and didst occupy their throne, thou didst find thine activity to be a passage to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, thou didst suffer for the Faith even to the shedding of thy blood, O Hieromartyr Dorotheus, entreat Christ God, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 5,
      text: "Resplendent with virtues brighter than the sun and with thy sufferings, O blessed Dorotheus, thou didst shine forth and illumine the land, dispelling the darkness of polytheism and putrid heresy. Wherefore, we radiantly celebrate thy memory.",
    },
    stichera_lord_i_call: [
      { tone: 8, text: "Thou wast revealed to be a tablet of the Spirit of God, O divinely blessed father, bearing the doctrines of God engraved upon thy divine mind; and in disclosing them thou didst illumine those languishing in ignorance. Wherefore, by thy supplications, O father, ask thou great mercy for us all." },
      { tone: 8, text: "Having dyed thy priestly raiment in the streams of thy divine blood, O Dorotheus, thou hast now entered, rejoicing, into the temple of heaven, to appear before our God, Who bestoweth crowns upon those who have suffered. Him do thou earnestly entreat, that He send down great mercy upon all." },
      { tone: 8, text: "Angelic was thy life and splendid thy martyrdom, for which thou was deemed worthy to rejoice with the angels, O father Dorotheus, illumining the land with divine miracles and teachings. Wherefore, in thine entreaties ask God to grant great mercy unto all." },
    ],
    stichera_glory: null, // §2C — Glory/Both now goes to Theotokion, no separate doxasticon
  },

  // ── June 6 — Ven. Bessarion & Ven. Hilarion the New (Double Service §2B) ────
  // Source: St. Sergius 06-06.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera = 3 per saint.
  // Fekula §2B: kontakion_ode3 (Hilarion T2, Matins Ode III) → 1st & 6th Hours;
  //             kontakion_ode6 (Bessarion T2, Matins Ode VI) → 3rd & 9th Hours.
  // Joint troparion used at all Hours.
  // AT LITURGY: no proper Epistle/Gospel/prokeimenon — §2B, feast_e: null confirmed.
  // LIC Glory/Both now: Menaion Theotokion T4 ("Rejoice, O beam of solar radiance…")
  //   PDF rubric: "from the Pentecostarion, or this Theotokion in Tone IV".
  // Aposticha: Octoechos (§2B — no Menaion aposticha in PDF). Session: May 29 2026.

  "06-06": {
    saint: "Ven. Bessarion the Wonderworker & Ven. Hilarion the New",
    oca_primary: true,
    source_file: "06-06.pdf",
    rank: "six_stichera",
    fekula_section: "2B", // Double service — two saints
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // No Alleluia conditional in PDF; standard double service format
    feast_e: null, // AT LITURGY: troparion and both kontakia only, no proper epistle/gospel
    feast_g: null, // §2B confirmed — no AT LITURGY section in PDF
    aposticha_source: "octoechos", // §2B — no Menaion aposticha in PDF
    note: "Double service: two venerable fathers in one compiled service. Joint troparion. " +
          "Per Fekula §2B: 3rd & 9th Hours use second saint's kontakion (Bessarion, Ode VI). " +
          "6 stichera (3 Bessarion Tone VIII + 3 Hilarion Tone IV) confirmed §2B.",
    troparion: {
      tone: 4,
      text: "O God of our fathers, ever deal with us according to Thy meekness. Take not Thy mercy from us, but by the prayers of these saints direct our life in peace.",
    },
    // kontakion_ode6 = Bessarion (Matins Ode VI) → governs 3rd & 9th Hours
    kontakion_ode6: {
      tone: 2,
      text: "Emulating the powers on high, by example thou didst live the life of the birds, O venerable one; putting transitory things far from thy mind, thou wast led to the heavenly beauties of Christ the King by thy constant desire, thou didst come even unto Him. O Bessarion, unceasingly entreat Him on behalf of us all!",
      saint: "Bessarion the Wonderworker",
    },
    // kontakion_ode3 = Hilarion (Matins Ode III) → governs 1st & 6th Hours
    kontakion_ode3: {
      tone: 2,
      text: "Like a shepherd didst thou preserve within thy fold the flock of thy life-bearing pasture, and wast shown to be great by the loftiness of thy works, O Hilarion the New, having undergone much suffering and sorrow in thy piety. Wherefore, thou hast made thine abode in the most joyful life in heavenly Sion. Pray for us, O venerable one!",
      saint: "Hilarion the New",
    },
    stichera_lord_i_call: [
      { tone: 8, text: "Thou wast the light of monastics, O wise Bessarion, and by the rays of thy virtues and the effulgence of grace thou wast like a most radiant lamp unto the desert. From the gloom of the passions and the darkness of the wicked, from all sorrow and temptation, deliver those who fervently honor thee and hymn with faith thy divine repose.", saint: "Bessarion" },
      { tone: 8, text: "Enduring to stand amid thorns in thy divine love of ineffable struggles, thou didst show forth an effort equal to that of the martyrs. Thou dost sweeten the bitter waters of the sea and givest drink to souls in thirst, O most wise one. Thou didst traverse the rushing torrents of the Nile, making thy passage over its waters dryshod, O all-famed one.", saint: "Bessarion" },
      { tone: 8, text: "Knowing thee to be like unto the wise Elijah, we all manifestly praise thee, O Bessarion, for thou didst cause torrents of water to fall as rain from the sky through God's mercy unto thee, and by thine honored supplications thou bestowest fountains of rain and divine dew from on high upon all the faithful as well as grace and power and invincible protection.", saint: "Bessarion" },
      { tone: 4, text: "Having attained a life undefiled, patience, meekness and love unfeigned, boundless abstinence, standing all night, divine compunction, faith, true hope and mercy, thou didst live on earth like an angel in the body, O blessed father Hilarion, intercessor for our souls.", saint: "Hilarion" },
      { tone: 4, text: "Thou wast an earthly angel and a heavenly man, O venerable one, a well-spring of compunction, a torrent of mercy, an abyss of miracles, a surety for sinners, a truly fruitful olive-tree of God, anointing with the oil of thy works the faces of those who praise thee with faith, O wondrous Hilarion.", saint: "Hilarion" },
      { tone: 4, text: "Thy mind shining with divine understanding, thou didst transcend the passions of the flesh, unconfused by things below, bearing the lineaments and depicting the beauty of God within thyself, and known as wholly luminous through the activity of the Spirit, O Hilarion our father, thou adornment of monastics.", saint: "Hilarion" },
    ],
    stichera_lord_i_call_count: 6, // 3 Bessarion T8 + 3 Hilarion T4
    // LIC Glory…Both now…: Menaion Theotokion T4 (or from the Pentecostarion per PDF rubric)
    // Source: 06-06.pdf — "Glory…Both now…, from the Pentecostarion, or this Theotokion in Tone IV"
    stichera_glory: null, // §2B: no doxasticon; Glory/Both now → lic_theotokion below
    lic_theotokion: {
      tone: 4,
      text: "Rejoice, O beam of solar radiance, " +
            "throne of the never-setting Sun, " +
            "having shone forth the ineffable Sun! " +
            "Rejoice, O mind shining with divine splendor, " +
            "flash of lightning illumining the ends of the earth, " +
            "true luster of gold. " +
            "O most comely and most immaculate one " +
            "who hath caused the unwaning Light to shine upon the faithful!",
    },
  },

  // ── June 1 — Holy Martyr Justin the Philosopher & those with him ──────────
  // Source: St. Sergius 06-01.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call; Alleluia at Matins.

  "06-01": {
    saint: "Holy Martyr Justin the Philosopher & those with him",
    oca_primary: true,
    source_file: "06-01.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // PDF: "if Alleluia is to be chanted instead of God is the Lord" — confirming god_is_the_lord is the norm
    feast_e: null,
    feast_g: null,
    aposticha_source: "octoechos", // PDF: "On the Aposticha, the Stichera from the Oktoechos"
    note: "Also: Blessed Agapitos the Unmercenary of Pechersk (not on OCA calendar). " +
          "3 stichera Tone II confirmed §2A.",
    troparion: {
      tone: 4,
      text: "In their sufferings, Thy martyrs O Lord, received imperishable crowns from Thee, our God; for, possessed of Thy might, they set at naught the tyrants and crushed the feeble audacity of the demons. By their supplications save Thou our souls.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Adorned with the wisdom of thy divine words, O Justin, the whole Church of God doth illumine the world with the radiance of thy life. Having received a crown because of the out-pouring of thy blood, standing with the angels before Christ, pray thou unceasingly on behalf of us all.",
    },
    stichera_lord_i_call: [
      { tone: 2, text: "When the ice of ignorance assaulted all creation with hostility and a multitude of idols were worshipped, then did ye, O glorious martyrs, abolish this with a zealous heart and the fervor of divine faith, manifestly shedding your blood with love for Him Who shed His blood on the Cross." },
      { tone: 2, text: "When, at God's behest, ye set yourselves apart for supra-natural struggles, ignoring your corruptible bodies, and strengthened by the power of the Most High, ye were undaunted by the fire or the cutting sword. Wherefore, bending your necks before God, O blessed ones, ye accepted death with joy." },
      { tone: 2, text: "The valiant spiritual athletes Peon, Valerian, Chariton and Charita, the godly Justin, Euelpistus and the glorious Hierax, ye who dyed your vesture in your divine blood and arrayed yourselves therein together, with the angels ye now stand before Christ the King and Master of all in the heavens." },
    ],
    stichera_glory: null, // §2A — no separate doxasticon
  },

  // ── June 2 — Multi-service: St Nicephorus / Greatmartyr John the New ────────
  // Source: St. Sergius 06-02.pdf (Nicephorus, Six-Stichera §2C) + 06-02A.pdf (John, Polyeleos §2E)
  // OCA primary: St Nicephorus the Confessor. John the New is secondary on OCA calendar.

  "06-02": [
    {
      saint: "St Nicephorus the Confessor, Patriarch of Constantinople",
      oca_primary: true,
      source_file: "06-02.pdf",
      rank: "six_stichera",
      fekula_section: "2C",
      has_great_doxology: false,
      has_polyeleos: false,
      has_litya: false,
      has_paroemias: false,
      magnificat_sung: false,
      matins_format: "god_is_the_lord", // §2C — no Alleluia conditional in PDF; Kontakion after Ode VI confirms God is the Lord
      feast_e: null, // AT LITURGY: troparion and kontakion only, no proper epistle/gospel
      feast_g: null,
      stichera_lord_i_call_count: 6,  // 3 Tone IV + 3 Tone VIII (06-02.pdf)
      aposticha_source: "octoechos", // §2C — no Menaion aposticha printed in PDF
      note: "6 stichera (3 Tone IV + 3 Tone VIII) confirmed §2C. AT LITURGY has troparion and kontakion only.",
      troparion: {
        tone: 4,
        text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Nicephorus our father, entreat Christ God, that our souls be saved.",
      },
      kontakion_ode6: {
        tone: 4, // PDF: Kontakion after Ode VI, Tone IV, Spec. Mel. "Thou hast appeared today"
        text: "As thou hast received a crown of victory from God in heaven, O Nicephorus, save those who with faith honor thee as a hierarch of Christ and a teacher.",
      },
      stichera_lord_i_call: [
        { tone: 4, text: "O divinely inspired one, manifest in sanctity, we know thee to be the ground of the Truth, the confirmation of the Faith, the expounder of dogmas, the advocate of piety, the abode of purity, the chosen receptacle, the sweet savor of the Spirit, the great treasury of doctrines, the foundation of the Church of Christ." },
        { tone: 4, text: "O all-wise, blessed and holy hierarch, we praise thee, the successor of the apostles, who shared in the ways of the martyrs, the emulator of the fasters, the seal of teachers, the model of godliness, the initiate of the mysteries of Christ, the divinely flowing river of understanding, drowning the thoughts of the iniquitous and blasphemous." },
        { tone: 4, text: "Having increased the talant of wisdom, O most noetically rich confessor, thou wast deemed worthy of the joy of thy Lord. Adorned with the grace of divine radiance, and shining with the effulgence of the Spirit, thou dost now stand at the right hand of the Bestower of life, ever illumined, O glorious one, with the rays emanating therefrom." },
        { tone: 8, text: "O venerable father, as a priest of the law of God thou didst enter within the divine and impassable tabernacle of the truth, which the Lord erected, not with another's blood, but with thine own, and emulating Christ by not submitting to the vengeance of the council, thou didst thereby utterly please God, O father." },
        { tone: 8, text: "Adorned with thy words and deeds, with thy priestly vesture and the rightness of thy doctrine, O all-wise Nicephorus, who nurturest with wisdom, wasted away by imprisonment thou didst receive them through thy confession, and didst zealously endure all the evils which beset thee with strength of mind, O blessed one." },
        { tone: 8, text: "Thou wast shown to be an instrument of the Spirit, sounded from on high by divinely inspired voices and trumpeting forth the ineffable mystery of the Savior, as a divine trumpet truly renowned, proclaiming aloud the incarnation of the Word to us, which is beyond comprehension and transcendeth all minds and thoughts, O thou who art most honorable." },
      ],
      stichera_glory: null, // §2C — Glory/Both now goes to Theotokion, no separate doxasticon
    },
    {
      saint: "Holy Greatmartyr John the New of Suceava",
      oca_primary: false,
      source_file: "06-02A.pdf",
      rank: "polyeleos",
      fekula_section: "2E",
      has_great_doxology: true, // PDF: "Great Doxology. Troparia. Litanies. Dismissal. First Hour."
      has_polyeleos: true, // PDF: Polyeleos with magnification
      has_litya: true, // PDF: "At Litiya, these Stichera..."
      has_paroemias: true, // PDF: Entrance + 3 OT Lessons (Isaiah, Wisdom of Solomon ×2)
      magnificat_sung: true, // §2E — Magnificat sung
      matins_format: "god_is_the_lord", // PDF: "On 'God is the Lord...,' Troparion of the holy great-martyr"
      feast_e: "Ephesians 6:10-17 (§233)",
      feast_g: "Matthew 10:16-22 (§36)",
      aposticha_source: "menaion", // PDF: Menaion aposticha with proper verses at Great Vespers
      note: "St John the New of Suceava appears on the OCA calendar as a secondary commemoration " +
            "on June 2. The OCA primary is St Nicephorus the Confessor. Little Vespers + Great Vespers " +
            "with Entrance, 3 OT Lessons, Litya, Polyeleos, Great Doxology confirmed §2E.",
      troparion: {
        tone: 4,
        text: "Having sustained well thy life on earth with almsgiving, and frequent prayers and tears, O spiritual athlete, thou didst manfully hasten to suffering, and denounce the ungodliness of the Persians; wherefore, thou hast become a firm foundation for the Church and the boast of Christians, O ever-memorable John.",
      },
      kontakion_ode6: {
        tone: 4,
        text: "Plying the deep of the sea for trade, thou didst set out from the East for the North; but when God called thee, as He did Matthew the tax-collector, thou didst forsake thy trade and follow Him by the blood of martyrdom, exchanging transitory things for those which are eternal; thus receiving a crown of victory.",
      },
      prokeimenon_tone: 7,
      prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
      prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
      alleluia_tone: 4,
      alleluia_verse: "The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations.",
      alleluia_stichos: "Many are the tribulations of the righteous, and the Lord shall deliver them out of them all.",
      communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
      paroemia_1: "Isaiah 43:9-14 (Be My witnesses — the Holy One of Israel)",
      paroemia_2: "Wisdom of Solomon 5:15-6:3 (The righteous live for evermore — a beautiful crown from the Lord's hand)",
      paroemia_3: "Wisdom of Solomon 4:7-15 (Though the righteous be prevented with death — His grace and mercy is with His saints)",
      matins_gospel: "Luke 21:12-19 (§106)",
      stichera_lord_i_call_count: 8,  // Pentecostarion: 3 Pent + 5 Menaion (each repeated per PDF); outside: 4×2=8
      stichera_lord_i_call: [
        { tone: 2, text: "With what good songs of praise shall we hymn John: the true warrior of the great King, the splendid champion, the most excellent spiritual athlete of Christ, who made the Faith steadfast, casting down deception, who was patient amid temptations and undaunted amid tortures the awesome denouncer of the ungodly and ardent helper of the pious, through whom Christ granteth us great mercy?" },
        { tone: 2, text: "With what wreaths of praise shall we crown John: the restoration of the martyrs, the skilled opponent, the champion of piety, who humbled the enemy, who sanctified the ground with his blood, who terrified the princes of the air and hath been reckoned with the angels of heaven, the pillar of gold which upholdeth all the lands of the north and by whom Christ, Who hath great mercy, doth vanquish all their enemies?" },
        { tone: 2, text: "With what right harmonious voices shall we glorify John: the eagle who soareth aloft on the wisdom of words, the pinions of whose wings are golden; the trumpet of piety, who hath thundered forth the mysteries of the Word of God, the sword honed sharp by the sayings of the prophets, by whom Christ, Who hath great mercy, hath humbled the uprisings of the Persians?" },
        { tone: 2, text: "With what hymn and beauties shall we crown the wondrous John: who gave his flesh over to flogging for the sake of Him Who for our sake gave His shoulders over to wounds, and who unsparingly shed his blood for Him Who abased Himself even to assuming the form of a servant, astonishing the tyrant by his supra-natural endurance, putting him to shame by his mighty opposition, whom Christ God, Who hath great mercy, hath crowned with wreaths of immortality?" },
      ],
      stichera_glory: { tone: 8, text: "Today, the denizens of heaven celebrate an honorable festival, calling those on earth to gladness for the memorial of John the valiant struggler, the hard diamond; for the arms of those who flogged him became exhausted, and the judge became weary even considering his tortures; but he remained above them all standing like a lion in the midst of the arena and filling the tyrant with fear by his confession of Christ, for he right boldly cried out to him: \"Touch not my flesh, lest retribution overtake thee, O governor! For though thou hast inflicted many wounds, I shall be given crowns of incorruption by Christ; Whom I preach with the Father and the Holy Spirit!\"" },

      // ── VESPERS — LITIYA ──────────────────────────────────────────────────────
      // PDF: "At Litiya, these Stichera of the holy great martyr, in Tone I"
      litya_stichera: [
        { tone: 1, text: "Rejoice, all ye people of the north, and leap up in gladness, having in your midst the never-setting and greatly radiant star whose rays surpass those of the sun: John of great renown, the martyred branch of the root of piety, laden with choice fruit, who loved Christ greatly and was greatly loved of Him, and who asketh great mercy for us all!" },
        { tone: 1, text: "O all ye generations of the pious, joining chorus in spirit, praise ye our common good on the designated day of this feast, having among you, like a right fragrant rose, the holy and much suffering body, now glorified with the glory of incorruption, of him who imparteth healings of the sufferings of men's souls and bodies." },
        { tone: 1, text: "O ye people of the East, join chorus with those of the North, and think not over highly of yourselves, for another sun hath been shown forth here, making not his circuit toward the lands of the West and setting beyond the western horizon, but passing into the heavens from the earth, and making his abode with the immaterial intelligences; and from thence shining down, protecting and sanctifying us, and beseeching great mercy from Christ." },
      ],
      litya_glory: { tone: 5,
        text: "Let us blow loudly upon the flute of the Spirit on the festive memorial of John, the warrior of valiant resolve, " +
              "and gathering everyone around us with exalted preaching, let us say: " +
              "Behold, he who suffered on earth doth now reign in the heavens! " +
              "Come, brethren, and let us emulate him, and in imitation let us follow his zeal, becoming martyrs by volition! " +
              "Come, ye kings and princes, and emulate him, the abundantly rich treasury of alms, that ye may acquire crowns like his! " +
              "Ye rich and poor, ye healthy and infirm, draw forth healings in abundance from the sacred coffer, as from a wellspring of incorruption, " +
              "unto the glory of God the Savior Who hath glorified the one who hath glorified Him.",
      },
      litya_both_now: { tone: 5,
        text: "Thou art the temple and portal, the palace and throne of the King, O most honored Virgin, " +
              "through whom Christ the Lord, my Redeemer, Who is the Sun of righteousness, " +
              "hath revealed Himself unto those who sleep in darkness, " +
              "deigning to enlighten those whom He hath fashioned in His image by His own hand. " +
              "Wherefore, O all-hymned one, as thou hast acquired a mother's boldness before Him, " +
              "entreat Him without ceasing, that our souls be saved.",
      },

      // ── VESPERS — APOSTICHA ────────────────────────────────────────────────────
      // PDF: 3 stichera Tone IV with feast-specific verses + Glory T3 + Both now T3
      stichera_aposticha: [
        { tone: 4,
          text: "Thou didst traverse the deep of the sea like a goodly sheep, " +
                "offering thyself as a living and animate sacrifice unto the Lamb of God, Who was slain for our sake, O glorious one. " +
                "Receiving from Him honors for thy labors, pray that those who celebrate " +
                "thy most honorable memory with love may be delivered from corruption and misfortunes." },
        { tone: 4,
          verse: "The righteous man shall flourish like a palm-tree, and like a cedar in Lebanon shall he be multiplied.",
          text: "Neither the savagery of the tyrant, nor beating with iron rods, nor the maiming of thy flesh, nor the torrents of thy blood, " +
                "were able to turn thy steadfastness away from Christ; " +
                "and thou didst cry out to those who tortured thee: " +
                "'Try me by torments as in a crucible, that I may appear before my Creator like gold purified by fire!'" },
        { tone: 4,
          verse: "Those who are planted in the house of the Lord, in the courts of our God they shall blossom forth.",
          text: "Neither the weight of chains, nor the stench of prison, nor the inhumanity of those who flayed thee, " +
                "were able to shake thy constant loyalty to thy Master, O blessed one; " +
                "for Christ's sake thou didst consider thy prison cell to be a splendid bridal-chamber, " +
                "thy chains to be coins of gold, and thy bitter flaying to be a robe of royal purple." },
      ],
      aposticha_glory: { tone: 3,
        text: "Hastening hither, O brethren, let us delight in the rays of the passion-bearer, which have shone forth; " +
              "for John, the chosen warrior of Christ, having descended invisibly to us from the heavens " +
              "hath set forth a spiritual banquet for us, satisfying in abundance every want. " +
              "Let us fall down with faith, embracing his relics and crying out in supplication: " +
              "O thrice-blessed and much suffering one, who hast been well-pleased to place thy precious relics in the church which thou hast loved, " +
              "with thy boldness before God preserve and protect our leaders, who love thee.",
      },
      // Both now at aposticha: Pentecostarion or Theotokion T3
      aposticha_both_now: { source: "pentecostarion",
        note: "06-02A.pdf: 'Both now... from the Pentecostarion. Or this Theotokion, in Tone III' — Pentecostarion governs when in season",
      },

      // ── BEATITUDES ────────────────────────────────────────────────────────────
      // Pentecostarion period: 4 from Pentecostarion + 4 from Ode VI
      // Outside Pentecostarion: 4 from Ode III + 4 from Ode VI
      beatitudes_source: "4 from Pentecostarion Ode + 4 from Ode VI of saint's canon (06-02A.pdf, AT LITURGY)",
      beatitudes_troparia: [
        // From Ode VI of saint's canon (06-02A.pdf):
        { text: "In nowise could the savagery of him who issued the command, nor the beating with staves, nor wounds, " +
                "nor a most violent death, shake the pillars of thy piety." },
        { text: "The purity of thy mind was likened to the eyes of a cherub, for thou didst manfully endure tortures below, " +
                "but on high hast come to stand before the Master, Who sent down upon thee a crown of victory." },
        { text: "The choirs of the martyrs leapt up in splendor when they beheld thy boldness; " +
                "and, descending with the angels, they invisibly strengthened thee for the contest." },
        { label: "Theotokion",
          text: "Gideon accepted the dewy fleece as an image prefiguring thy wonder, O Theotokos, " +
                "for One of the Trinity, assuming flesh, descended into thy womb, like the dew upon the fleece." },
      ],
    },
  ],
  // Source: St. Sergius 06-03.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call, Tone I.
  // Troparion/kontakion: NOT in PDF — sourced from OCA troparia page.

  "06-03": {
    saint: "Holy Martyr Lucillian and those with him",
    oca_primary: true,
    source_file: "06-03.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // PDF: "if Alleluia is to be chanted instead of God is the Lord" — god_is_the_lord is the norm
    feast_e: null,
    feast_g: null,
    aposticha_source: "octoechos", // §2A — no Menaion aposticha in PDF
    note: "Companions: venerable Paula and four unnamed children martyrs. " +
          "3 stichera Tone I confirmed §2A. Troparion/kontakion from OCA troparia page (not in St. Sergius PDF).",
    troparion: {
      tone: 1,
      text: "By your faith, you shone like a radiant star in the dark night of error; you fought the good fight and slew the crafty enemy, O Lucillian. Together with venerable Paula and the four martyred children entreat Christ our God to save our souls.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "You attained the dignity of the martyrs of Christ through the torments that you courageously endured, O Lucillian. Together with Paula and the four martyred children, you sing to the Creator: 'Like sheep we are slaughtered for love of You, O Savior.'",
    },
    stichera_lord_i_call: [
      { tone: 1, text: "The cruel children of those who put the Lord to death, consumed with envy, betrayed thee, O glorious one; but, invincibly brave, thou hast received the delight of paradise, O Lucillian. Wherefore, pray thou, that Christ grant unto our souls peace and great mercy." },
      { tone: 1, text: "The most sacred children and the glorious and holy Paula, the right wondrous martyr, who submitted to thee as to their father, suffered steadfastly with thee; and with them thou now dwellest in the heavens. Entreat Christ, that He grant unto our souls peace and great mercy." },
      { tone: 1, text: "Thy shrine ever poureth forth the waters of healing upon those who have recourse thereto, O much-suffering martyr, washing away sufferings and drowning hordes of the demons through the activity of the Holy Spirit. Wherefore, pray thou, that He grant unto our souls peace and great mercy." },
    ],
    stichera_glory: null, // §2A — no separate doxasticon
  },

  // ── June 14 — Prophet Elisha & Patriarch Methodius of Constantinople (§2B Double) ─
  // Source: St. Sergius 06-14.pdf. OCA and St. Sergius agree on both saints.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3+3). Two troparia. Two kontakia.
  // Fekula §2B: Elisha (first saint, Ode III) = 1st & 6th Hours;
  //             Methodius (second saint, Ode VI) = 3rd & 9th Hours.
  // Note: In 2026 Holy Fathers Sunday (Pascha+42) falls on June 14 — Sunday rules take precedence.

  "06-14": {
    saint: "Holy Prophet Elisha & St. Methodius, Patriarch of Constantinople",
    oca_primary: true,
    source_file: "06-14.pdf",
    rank: "six_stichera",
    fekula_section: "2B",  // Double service: two saints, §2B (renamed from fekula_section_override)
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    aposticha_source: "octoechos",  // PDF: "Aposticha from the Pentecostarion, or from the Octoechos"
    stichera_lord_i_call_count: 6,  // 3 Elisha T8 + 3 Methodius T8 (06-14.pdf)
    note: "Double service. In 2026 this date falls on All Saints of North America " +
          "Sunday (Pascha+63); Sunday propers and the NA Saints synaxis take precedence. " +
          "Holy Fathers of the First Ecumenical Council = Pascha+42 = May 24 in 2026.",
    feast_e: "James 5:10-20 (§57)",
    feast_g: "Luke 4:22-30 (§14)",
    prokeimenon_tone: 4,
    prokeimenon_text: "Thou art a priest forever, " +
      "after the order of Melchisedek.",
    prokeimenon_stichos: "The Lord said unto my Lord: Sit Thou at My right hand, " +
      "until I make Thine enemies the footstool of Thy feet.",
    alleluia_tone: 4,
    alleluia_verse: "Moses and Aaron among His priests, " +
      "and Samuel is among them that call upon His name.",
    alleluia_stichos: "A light hath dawned forth for the righteous man, " +
      "and gladness for the upright of heart.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 4,
      text: "The angel in the flesh, the foundation of the prophets, the second forerunner " +
            "of the coming of Christ, the glorious Elijah sent down grace from on high upon " +
            "Elisha to dispel infirmities and to cleanse lepers. Wherefore, he poureth forth " +
            "healings upon those who honor him.",
      saint: "Elisha",
    },
    troparion_second: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of " +
            "meekness, and teacher of temperance; wherefore, thou hast attained the heights " +
            "through humility and riches through poverty; O hierarch Methodius our father, " +
            "entreat Christ God, that our souls be saved.",
      saint: "Methodius",
    },
    // kontakion = Matins Ode VI (Methodius, second saint) → 3rd & 9th Hours
    kontakion_ode6: {
      tone: 2,
      text: "Thou didst struggle on earth like an incorporeal being, O Methodius, and hast " +
            "inherited the heavens, as one who explained the veneration of icons to the ends " +
            "of the earth; for subjected all the more to labors and pangs, thou didst not " +
            "cease to boldly denounce those who cast aside the icons of Christ.",
      saint: "Methodius",
    },
    // kontakion_ode3 = Matins Ode III (Elisha, first saint) → 1st & 6th Hours
    kontakion_ode3: {
      tone: 2,
      text: "Thou wast shown to be a prophet of God, receiving a twofold measure of grace, " +
            "which truly befitted thee, O blessed Elisha; for thou wast the companion of " +
            "Elijah, and with him dost unceasingly entreat Christ God on behalf of us all.",
      saint: "Elisha",
    },
    // ── VESPERS — LORD I HAVE CRIED ─────────────────────────────────────────
    // 06-14.pdf: 6 stichera — 3 Elisha T8 + 3 Methodius T8
    stichera_lord_i_call: [
      { tone: 8, saint: "Elisha",
        text: "Rejoice, O most wise Elisha, for, having purified thy mind of the passions of the body, " +
              "thou didst receive rays of the Spirit, O glorious one, " +
              "which thou didst transmit unto all the rest, and wast revealed to be wholly radiant; " +
              "wherefore, thou hast made thine abode amid never-waning light. " +
              "Pray thou ever on behalf of us who praise thee." },
      { tone: 8, saint: "Elisha",
        text: "Elijah the zealot left thee resplendent in a twofold measure of grace, " +
              "O blessed Elisha, when he was shown to be a truly airborne warrior. " +
              "And emulating him, by grace thou didst halt the rushing torrent of the river, " +
              "and didst pass over, O glorious one, joyfully adorning thyself and magnifying Christ." },
      { tone: 8, saint: "Elisha",
        text: "Of old, the prayer of the Shulamite woman's faith entrusted her child unto thee, " +
              "and thou didst raise him up from the dead, as a divine prophet marvelous in sanctity; " +
              "and again, through salt thou didst manifestly transform undrinkable water into potable. " +
              "Thou workest countless miracles through the grace of the all-accomplishing Spirit, " +
              "wherefore, we hymn thee, O blessed one." },
      { tone: 8, saint: "Methodius",
        text: "O divinely wise father Methodius, like a lion, by the roaring of thy most wise teachings " +
              "thou didst terrify the sly fox John the Grammarian, " +
              "for he could not endure thy denunciation, " +
              "and the wicked wretch, was felled by a blow from thy noetic sword; " +
              "wherefore, as a champion of the Orthodox people, thou didst not leave the flock of Christ to perish." },
      { tone: 8, saint: "Methodius",
        text: "O Methodius, thou art the confirmation of Orthodoxy, the shepherd of the Church, " +
              "adornment of monks, a river full to overflowing with the waters of the Spirit, " +
              "a cup pouring forth a drink of surpassing sweetness, " +
              "a beacon illumining the ends of the world, " +
              "a two-edged sword honed to sharpness by grace, which cutteth down hordes of the ungodly." },
      { tone: 8, saint: "Methodius",
        text: "O glorious Methodius, thou art a model of confession, the foundation of holy hierarchs, " +
              "an instrument inspired by God, playing the melody of doctrine, full of piety, " +
              "a dwelling-place of wisdom, and an abyss of love, " +
              "an ever-flowing stream of mercy, like a bowl pouring forth the drink of compunction, " +
              "a right flourishing garden of paradise." },
    ],
    stichera_glory: { tone: 2,
      text: "Today the divine coming of the prophets hath shone forth, " +
            "mystically calling out to the souls of those who love the feasts of the Church. " +
            "He who mounted the chariot which traverseth the heavens, the star of the never-waning East, " +
            "with Elisha, the wondrous man, doth broaden the streams of the new Jordan, " +
            "making clear the proclamation of piety, and manifestly portraying by a double image " +
            "the twofold blessing of the harmonious glory of the Old and the New " +
            "for those who with faith celebrate their most festive memorial.",
    },
  },

  // ── June 16 — Multi-service: HM Tichon of Amathus (OCA primary) + Ven. Tikhon of Kaluga ─
  // Source: 06-16.pdf (Tichon of Amathus, Simple §2A) + 06-16A.pdf (Tikhon of Kaluga, Polyeleos §2E)
  // OCA primary: Tichon of Amathus (OCA and St. Sergius both list Tichon of Amathus as primary).
  // Note: OCA troparion for Tichon differs from St. Sergius text; St. Sergius text used here.

  "06-16": [
    {
      saint: "Holy Hieromartyr Tichon, Bishop of Amathus in Cyprus",
      oca_primary: true,
      source_file: "06-16.pdf",
      rank: "simple",
      note: "OCA also lists Ven. Tikhon of Kaluga on June 16 (Polyeleos, 06-16A.pdf — OCA secondary). " +
            "§2A confirmed — 3 stichera; PDF has no AT LITURGY Epistle/Gospel section. " +
            "OCA troparion and kontakion (both Tone 3) corrected from oca.org — differ from St. Sergius.",
      feast_e: "absent — §2A, readings from Oktoechos",
      feast_g: "absent — §2A, readings from Oktoechos",
      troparion: {
        tone: 3,
        text: "God called you to the sacred priesthood " +
              "as a worthy servant of the Holy Trinity. " +
              "You shone forth with the grace of godliness " +
              "strengthening the Church by many miracles. " +
              "Righteous Tikhon, entreat Christ our God to grant us His great mercy.",
        source: "OCA — oca.org/saints/troparia/2024/06/16",
      },
      kontakion_ode6: {
        tone: 3,
        text: "Through your ascetic labors, you shone forth, O beloved of God, " +
              "and received from on high the power of the Comforter " +
              "to destroy the idols of delusion, and to save people, " +
              "to cast out demons and to heal the sick. " +
              "Therefore, venerable Tikhon, we honor you as a friend of God.",
        source: "OCA — oca.org/saints/troparia/2024/06/16",
      },
    },
    {
      saint: "Venerable Tikhon, Wonderworker of Kaluga",
      oca_primary: false,
      source_file: "06-16A.pdf",
      rank: "polyeleos",
      note: "Ven. Tikhon of Kaluga appears on the OCA calendar as a secondary commemoration " +
            "on June 16. The OCA primary is HM Tichon of Amathus. " +
            "§2E Polyeleos confirmed — 8 stichera, Great Vespers, Litya, Polyeleos.",
      feast_e: "Galatians 5:22-6:2 (§213)",
      feast_g: "Matthew 4:25-5:12 (§10)",
      prokeimenon_tone: 7,
      prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
      prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
      alleluia_tone: 6,
      alleluia_verse: "Blessed is the man that feareth the Lord; " +
        "in His commandments shall he greatly delight.",
      alleluia_stichos: "His seed shall be mighty upon the earth.",
      communion_verse: "In everlasting remembrance shall the righteous be; " +
        "he shall not be afraid of evil tidings.",
      paroemia_1: "Proverbs — The memory of the just is praised (Prov 10:7; 3:13-16; 8:6, 34-35)",
      paroemia_2: "Proverbs — The mouth of the righteous droppeth wisdom (Prov 10:31-32; 11:2-12)",
      paroemia_3: "Wisdom of Solomon 3:1-9 — souls of the righteous are in the hand of God",
      matins_gospel: "Matthew 11:27-30 (§43)",
      has_litya: true,
      has_polyeleos: true,
      troparion: {
        tone: 4,
        text: "O Tikhon our venerable father, thou wast shown to be a most radiant beacon in " +
              "the midst of the Russian land; for, having made thine abode in the wilderness and " +
              "led a strict way of life therein, thou didst live like an incorporeal being, for " +
              "which cause God hath enriched thee with the gift of miracles. Wherefore, hastening " +
              "to the shrine of thy relics, we say with compunction: O venerable father, entreat " +
              "Christ God, that our souls be saved.",
      },
      kontakion_ode6: {
        tone: 8,
        text: "Forsaking thy homeland, O venerable one, thou didst make thine abode in the " +
              "wilderness, where thou didst show thy manner of life to be strict; and amazing " +
              "many by thy virtues, thou didst receive from Christ the gift of miracles. " +
              "Wherefore, remember us who honor thy memory, that we may cry out to thee: " +
              "Rejoice, O venerable Tikhon our father!",
        source: "St. Sergius 06-16A.pdf",
      },
    },
  ],

  // ── June 17 — Holy Martyrs Manuel, Sabel & Ismael ───────────────────────────
  // Source: St. Sergius 06-17.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera; both Oktoechos canons at Matins.

  "06-17": {
    saint: "Holy Martyrs Manuel, Sabel & Ismael",
    oca_primary: true,
    source_file: "06-17.pdf",
    rank: "simple",
    note: "Three Persian brothers martyred under Julian the Apostate (362). " +
          "§2A by stichera count (3); PDF includes full AT LITURGY section — " +
          "compiled martyrs' service with proper Epistle and Gospel.",
    feast_e: "Ephesians 6:10-17 (§233)",
    feast_g: "Luke 21:12-19 (§106)",
    prokeimenon_tone: 4,
    prokeimenon_text: "Wondrous is God in His saints, " +
      "the God of Israel.",
    prokeimenon_stichos: "In congregations bless ye God, " +
      "the Lord from the well-springs of Israel.",
    alleluia_tone: 4,
    alleluia_verse: "The righteous cried, and the Lord heard them, " +
      "and He delivered them out of all their tribulations.",
    alleluia_stichos: "Many are the tribulations of the righteous, " +
      "and the Lord shall deliver them out of them all.",
    communion_verse: "Rejoice in the Lord, O ye righteous; " +
      "praise is meet for the upright.",
    troparion: {
      tone: 4,
      text: "In their sufferings, Thy martyrs O Lord, received imperishable crowns from " +
            "Thee, our God; for, possessed of Thy might, they set at naught the tyrants " +
            "and crushed the feeble audacity of the demons. By their supplications save " +
            "Thou our souls.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Wounded by the Faith of Christ, O most blessed one, and having faithfully " +
            "drained the cup thereof, ye cast the worship and audacity of the Persians " +
            "down to the ground, making supplications on behalf of us all, O ye who are " +
            "equal in number to the Trinity.",
    },
  },

  // ── June 18 — Holy Martyr Leontius ──────────────────────────────────────────
  // Source: St. Sergius 06-18.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera; one canon of the martyr at Matins.

  "06-18": {
    saint: "Holy Martyr Leontius",
    oca_primary: true,
    source_file: "06-18.pdf",
    rank: "simple",
    note: "Roman soldier martyred at Tripoli in Phoenicia under Vespasian (c. 70 AD). " +
          "§2A by stichera count (3); PDF includes full AT LITURGY section — " +
          "compiled martyr service with proper Epistle and Gospel.",
    feast_e: "Acts 12:1-11 (§29)",
    feast_g: "John 15:17-16:2 (§52)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, " +
      "and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, " +
      "when I make supplications unto Thee.",
    alleluia_tone: 4,
    alleluia_verse: "The righteous man shall flourish like a palm tree, " +
      "and like a cedar in Lebanon shall he be multiplied.",
    alleluia_stichos: "They that are planted in the house of the Lord, " +
      "in the courts of our God they shall blossom forth.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 4,
      text: "In his sufferings, Thy martyr Leontius O Lord, received an imperishable " +
            "crown from Thee, our God; for, possessed of Thy might, he set at naught " +
            "the tyrants and crushed the feeble audacity of the demons. By his " +
            "supplications save Thou our souls.",
    },
    kontakion_ode6: {
      tone: 3,
      text: "Thou didst confound the wicked plots of the tyrants, denouncing the ungodly " +
            "religion of the Greeks, and didst shine forth the knowledge of God upon all " +
            "mankind in thy doctrines of piety, O divinely wise martyr. Wherefore, with " +
            "love we honor thy memory, O most wise Leontius.",
    },
  },

  // ── June 19 — St. John Maximovich (two compiled versions) ───────────────────
  // Source: 06-19.pdf (Bulgarian version) + 06-19A.pdf (ROCOR version).
  // IMPORTANT: St. John reposed June 19 (O.S.) = July 2 (N.S.).
  // OCA commemorates him on JULY 2, not June 19.
  // These St. Sergius PDFs use the Julian calendar (June 19 O.S.).
  // For OCA parishes on the New Calendar, this entry applies to JULY 2.
  // The two PDFs are different translations of the same service, not different saints.
  // OCA primary: Yes (canonized by ROCOR 1994, recognized by Moscow 2008, on OCA calendar Jul 2).
  // Service rank: Polyeleos (§2E) — Great Vespers, 8 stichera, 3 lessons, Matins Gospel.
  // ── June 19 — Apostle Jude, Brother of the Lord ────────────────────────────
  // OCA primary: Apostle Jude (confirmed oca.org/saints/lives/2026/06/19).
  // No St. Sergius compiled PDF for June 19 OCA saints; troparion/kontakion from OCA.
  // IMPORTANT: St. John Maximovich (06-19.pdf, 06-19A.pdf) = July 2 N.S.
  // Encode at "07-02" when July is processed.

  "06-19": {
    saint: "Holy Apostle Jude, Brother of the Lord",
    oca_primary: true,
    source_file: null,
    rank: "simple",
    note: "No St. Sergius PDF for OCA June 19. Troparion/kontakion from OCA. " +
          "Also June 19 OCA: Ven. Barlaam of Shenkursk, Martyr Zosimus the Soldier, " +
          "Ven. Paisius the Great, St. John the Solitary of Jerusalem, " +
          "Ven. Paisius of Hilandar, Repose of St. Job Patriarch of Moscow. " +
          "St. John Maximovich (06-19.pdf/06-19A.pdf) belongs at July 2 N.S.",
    feast_e: "Jude 1-10",
    feast_g: "John 14:21-24",
    troparion: {
      tone: 1,
      text: "Divinely we praise you, O Jude, as a faithful witness, knowing you to be " +
            "the brother of Christ. You trampled on delusion, and so preserved the faith. " +
            "Today as we celebrate your holy memory, by your intercessions we receive " +
            "remission of sins.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "You were chosen as a disciple for your firmness of mind: an unshakable " +
            "pillar of the Church of Christ, you proclaimed His word to the Gentiles, " +
            "telling them to believe in one Godhead. You were glorified by Him, receiving " +
            "the grace of healing, healing the ills of all who came to you, O most " +
            "praised Apostle Jude!",
    },
  },

    // Demonstrates multi-service selector. OCA primary: Prophet Amos.
  // Source: St. Sergius 06-15.pdf (Amos), 06-15A.pdf (Jerome), 06-15B.pdf (Jonah)
  // OCA calendar verified: oca.org/saints/lives/2026/06/15 — Amos listed as primary.

  "06-15": [
    {
      saint: "Holy Prophet Amos",
      oca_primary: true,
      source_file: "06-15.pdf",
      rank: "simple",
      note: "§2A confirmed — 3 stichera; PDF has no AT LITURGY Epistle/Gospel section. " +
           "Troparion absent from PDF Vespers rubric — T2 generic prophet text sourced from OCA. " +
           "Kontakion T4 matches PDF exactly.",
      feast_e: "absent — §2A, readings from Oktoechos",
      feast_g: "absent — §2A, readings from Oktoechos",
      troparion: {
        tone: 2,
        text: "We celebrate the memory of Thy prophet Amos, O Lord, and through him we beseech Thee: save our souls.",
        source: "OCA (generic prophet troparion — not printed in St. Sergius PDF)",
      },
      kontakion_ode6: {
        tone: 4,
        text: "Enlightened by the Spirit, O blessed one, thou wast made radiant with divine utterances, proclaiming the word of righteousness unto all; wherefore we honor thee, O glorious Amos.",
      },
    },
    {
      saint: "St Jerome of Stridon",
      oca_primary: false,
      source_file: "06-15A.pdf",
      rank: "polyeleos",
      note: "St Jerome of Stridon appears on the OCA calendar as a secondary commemoration on this date. " +
           "The OCA primary is Prophet Amos. §2E Polyeleos confirmed — 6 stichera, Great Vespers, Litya, Polyeleos.",
      feast_e: "Galatians 5:22-6:2 (§213)",
      feast_g: "Matthew 4:25-5:12 (§10)",
      prokeimenon_tone: 7,
      prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
      prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
      alleluia_tone: 6,
      alleluia_verse: "Blessed is the man that feareth the Lord; " +
        "in His commandments shall he greatly delight.",
      alleluia_stichos: "His seed shall be mighty upon the earth.",
      communion_verse: "In everlasting remembrance shall the righteous be; " +
        "he shall not be afraid of evil tidings.",
      paroemia_1: "Wisdom 5:15ff; 6:1-3 — the righteous live for evermore; their reward with the Lord",
      paroemia_2: "Wisdom 3:1-9 — souls of the righteous are in the hand of God",
      paroemia_3: "Wisdom 4:7-15 — though the righteous be prevented with death",
      matins_gospel: "Matthew 11:27-30 (§43)",
      has_litya: true,
      has_polyeleos: true,
      troparion: {
        tone: 3,
        text: "The assembly of the Orthodox hath thee as a great intercessor, O divinely wise one, " +
              "for as thou art a converser with the venerable and a partaker of divine wisdom, " +
              "so, O most wondrous Jerome, entreat Christ God that He grant us great mercy.",
        source: "St. Sergius 06-15A.pdf",
      },
      kontakion_ode6: {
        tone: 8,
        text: "With hymns let us praise the right praiseworthy Jerome, the most venerable among the " +
              "venerable and most blessed among the blessed, the instructor and helper of the faithful, " +
              "crying out to him with love: Rejoice, O divinely wise father!",
        source: "St. Sergius 06-15A.pdf",
      },
    },
    {
      saint: "St Jonah, Metropolitan of Moscow",
      oca_primary: false,
      source_file: "06-15B.pdf",
      rank: "polyeleos",
      note: "St Jonah of Moscow is NOT listed on the OCA calendar for this date. " +
           "This service is from the Russian Menaion only. Verify with your priest before serving. " +
           "§2E Polyeleos confirmed — 8 stichera (4+4), Great Vespers, Litya, Polyeleos.",
      feast_e: "Hebrews 13:17-21 (§335)",
      feast_g: "Matthew 5:14-19 (§11)",
      prokeimenon_tone: 1,
      prokeimenon_text: "My mouth shall speak wisdom, " +
        "and the meditation of my heart shall be of understanding.",
      prokeimenon_stichos: "Hear this, all ye nations; give ear, " +
        "all ye that inhabit the earth.",
      alleluia_tone: 2,
      alleluia_verse: "The mouth of the righteous shall meditate wisdom " +
        "and his tongue shall speak of judgment.",
      alleluia_stichos: "The law of his God is in his heart, " +
        "and his steps shall not be tripped.",
      communion_verse: "In everlasting remembrance shall the righteous be; " +
        "he shall not be afraid of evil tidings.",
      paroemia_1: "Proverbs — The memory of the just is praised (Prov 10:7; 3:13-16; 8:6, 34-35)",
      paroemia_2: "Proverbs — The mouth of the righteous droppeth wisdom (Prov 10:31-32; 11:2-12)",
      paroemia_3: "Wisdom of Solomon 4:7-15 — though the righteous be prevented with death",
      matins_gospel: "Matthew 11:27-30 (§43)",
      has_litya: true,
      has_polyeleos: true,
      troparion: {
        tone: 4,
        text: "Having dedicated thyself wholly to the Lord from thy youth, thou didst become a model " +
              "of virtue in prayers, labors and fasting; wherefore, beholding thy goodly intent, God " +
              "appointed thee a hierarch and pastor of His Church: wherefore, thy precious body hath " +
              "been preserved whole and incorrupt after thy repose. O holy hierarch Jonah, entreat " +
              "Christ God, that He save our souls.",
        source: "St. Sergius 06-15B.pdf",
      },
      kontakion_ode6: {
        tone: 8,
        text: "O wise one from childhood thou didst give thyself over wholly to the Lord, laying waste " +
              "to thy body through fasting and the keeping of vigils; wherefore, thou wast revealed to " +
              "be a pure vessel and abode of the most holy Spirit. For this cause He ordained thee as " +
              "hierarch and pastor for His Church, and having tended it well, thou didst depart unto the " +
              "Lord Whom thou didst love. We therefore beseech thee: Be thou mindful of us who honor " +
              "thy holy memory with faith, that we may all cry aloud unto thee: Rejoice, O father Jonah, " +
              "most honored and holy hierarch!",
        source: "St. Sergius 06-15B.pdf",
      },
    },
  ],

  // ── June 10 — Holy Hieromartyr Timothy, Bishop of Prussia ───────────────
  // Source: St. Sergius (06-10.pdf) and OCA. Both agree on primary commemoration.
  // Service rank: Simple (§2A) — 3 stichera on Lord I Call; Alleluia at Matins.
  // Troparion/kontakion: NOT in the full Menaion PDF for this saint.
  // Resolved from: General Menaion, Hieromartyr.pdf (general Hieromartyr service).
  // The General Menaion provides fallback troparia for saints without compiled services.

  "06-10": {
    saint: "Holy Hieromartyr Timothy, Bishop of Prussia",
    oca_primary: true,
    source_file: "06-10.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // PDF: "if Alleluia is to be chanted instead of God is the Lord" — god_is_the_lord is the norm
    feast_e: null,
    feast_g: null,
    feast_g: null,
    aposticha_source: "octoechos", // §2A — no Menaion aposticha in PDF
    note: "Bishop of Prussia martyred for the faith. Also: St John of Tobolsk (separate service). " +
          "3 stichera Tone IV confirmed §2A. PDF has no AT LITURGY section (readings from Oktoechos). " +
          "Troparion absent from Vespers rubric in PDF — sourced from General Menaion (Hieromartyr). " +
          "Kontakion sourced from General Menaion.",
    stichera_lord_i_call: [
      { tone: 4, text: "Elevated above earthly things by thine active purifications like an animate cloud, O all-blessed one, thou didst cast down the perverse serpent with the thunder-claps of thy miracles and the awesome lightning flashes of thy words, and thou didst receive the grace to burn up the bowels of the adverse carnal serpents with the divine covering of the sacred Gifts." },
      { tone: 4, text: "O holy hierarch Timothy, boast of the people of Prussia, universal champion and beacon of the world, adornment of the Church, sacred sacrifice of faith, and precious and lustrous ornament of the martyrs: pray thou that those who celebrate thy most honored memory with faith may be delivered from corruption and misfortunes." },
      { tone: 4, text: "With thy pangs, O Timothy, thou didst weave a most comely garment dyed in thy blood, and ineffably received from on high a heavenly vesture of incorrupt purity and immutable life. Wearing this immaterial robe in the highest, pray thou on behalf of all who praise thee with piety, O spiritual athlete." },
    ],
    stichera_glory: null, // §2A — no separate doxasticon; Glory/Both now goes to Theotokion from Pentecostarion or Octoechos
    troparion: {
      tone: 4,
      text: "As thou didst share in the ways of the apostles and didst occupy their throne, thou didst find thine activity to be a passage to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, thou didst suffer for the Faith even to the shedding of thy blood, O Hieromartyr Timothy, entreat Christ God, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "As one who lived piously among hierarchs and who underwent martyrdom, thou, O divinely-wise one, hast extinguished the sacrifices of idolatry and shown thyself to be a protector of thy flock. Wherefore, in honor we fervently cry out unto thee: Do thou, through thine intercessions, ever deliver us from all misfortunes, O Timothy, our Father.",
    },
  },

  "06-20": {
    saint: "Holy Hieromartyr Methodius, Bishop of Patara",
    oca_primary: true,
    source_file: "06-20.pdf",
    rank: "simple",
    note: "Bishop of Patara in Lycia; refuted Origen. Martyred c. 311. " +
          "Distinct from Patriarch Methodius of Constantinople (June 14). " +
          "§2A confirmed — 3 stichera; PDF has no AT LITURGY Epistle/Gospel section.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 2,
      text: "Thy blood mystically crieth out to God from the earth, like that of Abel, " +
            "O divinely wise and holy hierarch Methodius, who manifestly preached that God " +
            "became a man. Wherefore, thou hast put the deception of Origen to shame and " +
            "hast passed over to the heavenly bridal chamber. Entreat Christ God, that He " +
            "save our souls.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "Thou wast a priest of the mysteries of the Holy Trinity, a proclaimer of the " +
            "commandments of God, passing all understanding, and the confirmation of the " +
            "Orthodox, O Methodius thou didst denounce the thoughts of the heretics for the " +
            "sake of Orthodoxy, shown by thy blood to be a hieromartyr. Standing before " +
            "Christ with the angels, entreat Him that we be saved.",
    },
  },

  // ── June 21 — Holy Martyr Julian of Tarsus ──────────────────────────────────
  // Source: St. Sergius 06-21.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, both Oktoechos canons at Matins.

  "06-21": {
    saint: "Holy Martyr Julian of Tarsus",
    oca_primary: true,
    source_file: "06-21.pdf",
    rank: "simple",
    note: "Youth martyred c. 305 under Diocletian; cast into the sea in a sack with " +
          "sand and serpents. St. John Chrysostom composed an encomium in his honor. " +
          "§2A by stichera count (3); PDF includes full AT LITURGY section — " +
          "compiled martyr service with proper Epistle and Gospel.",
    feast_e: "Ephesians 6:10-17 (§233)",
    feast_g: "Luke 21:12-19 (§106)",
    prokeimenon_tone: 4,
    prokeimenon_text: "In the saints that are in His earth hath the Lord been wondrous; " +
      "He hath wrought all His desires in them.",
    prokeimenon_stichos: "I beheld the Lord ever before me, for He is at my right hand, " +
      "that I might not be shaken.",
    alleluia_tone: 4,
    alleluia_verse: "The righteous cried, and the Lord heard them, " +
      "and He delivered them out of all their tribulations.",
    alleluia_stichos: "Many are the tribulations of the righteous, " +
      "and the Lord shall deliver them out of them all.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 4,
      text: "In his sufferings, Thy martyr Julian O Lord, received an imperishable crown " +
            "from Thee, our God; for, possessed of Thy might, he set at naught the tyrants " +
            "and crushed the feeble audacity of the demons. By his supplications save Thou " +
            "our souls.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "As is meet, let us all praise Julian today, the invincible warrior of piety, " +
            "the true counselor and soldier of the Truth, and let us cry aloud unto him: " +
            "Entreat Christ God on behalf of us all!",
    },
  },

  // ── June 22 — HM Eusebius, Bishop of Samosata ───────────────────────────────
  // Source: St. Sergius 06-22.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, Alleluia rubric, one canon at Matins.
  // Troparion: NOT printed in PDF — sourced from OCA (general hieromartyr troparion T4).

  "06-22": {
    saint: "Holy Hieromartyr Eusebius, Bishop of Samosata",
    oca_primary: true,
    source_file: "06-22.pdf",
    rank: "simple",
    note: "Defender of Nicene Orthodoxy against Arianism. Martyred 380 when an Arian " +
          "woman struck him with a roof tile. Troparion not printed in PDF; sourced from OCA. " +
          "§2A confirmed — 3 stichera; PDF AT LITURGY has kontakion only, no Epistle/Gospel.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "By sharing in the ways of the apostles, thou didst occupy their throne. " +
            "Through the practice of virtue, thou didst find thine activity to be a passage " +
            "to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, " +
            "thou didst suffer for the Faith even to the shedding of thy blood. " +
            "O Hieromartyr Eusebius, entreat Christ God, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "Having lived piously in the rank of hierarch and traversed the path of " +
            "martyrdom, thou didst extinguish the burnt offerings of the idolaters, O holy " +
            "hierarch Eusebius. But as thou hast boldness before Christ God, entreat Him, " +
            "that our souls be saved.",
    },
  },

  // ── June 23 — Multi-service: Martyr Agrippina (OCA primary) + Vladimir Icon ─
  // Source: 06-23.pdf (Agrippina, Simple §2A, OCA primary) +
  //         06-23A.pdf (Vladimir Icon, Polyeleos §2E, OCA listed but secondary to Agrippina)
  // OCA agreement: Both Agrippina AND Vladimir Icon are on OCA calendar June 23.
  // Agrippina listed as primary (first); Vladimir Icon is also full OCA — not Russian-only.
  // Vladimir Icon also celebrated May 21 and August 26.

  "06-23": [
    {
      saint: "Holy Martyr Agrippina",
      oca_primary: true,
      source_file: "06-23.pdf",
      rank: "simple",
      note: "Vladimir Icon of the Theotokos is also a full OCA commemoration on June 23 " +
            "(also May 21 & Aug 26). Agrippina listed first/primary by OCA. " +
            "§2A confirmed — 3 stichera; PDF AT LITURGY has troparion and kontakion only.",
      feast_e: "absent — §2A, readings from Oktoechos",
      feast_g: "absent — §2A, readings from Oktoechos",
      troparion: {
        tone: 4,
        text: "Thy ewe-lamb Agrippina, O Jesus crieth out with a loud voice: Thee do I love, " +
              "O my Bridegroom, and, seeking Thee, I endure suffering. In Thy baptism I am " +
              "crucified and buried with Thee. I suffer for Thy sake, that I may reign with " +
              "Thee; I die for Thee, that I may live with Thee. Accept me, who with love " +
              "sacrifice myself for Thee, as an unblemished offering! By her supplications, " +
              "in that Thou art merciful, save Thou our souls.",      },
      kontakion_ode6: {
        tone: 4,
        text: "The radiant day of thy splendid struggles hath dawned, whereon the divine " +
              "Church, honoring them, doth call all together with gladness to cry out to thee: " +
              "Rejoice, O virgin and martyr, most honored Agrippina!",
      },
    },
    {
      saint: "Vladimir Icon of the Most Holy Theotokos",
      oca_primary: false,
      source_file: "06-23A.pdf",
      rank: "polyeleos",
      note: "The Vladimir Icon is commemorated on the OCA calendar on June 23 " +
            "(also May 21 and August 26). This is a full OCA commemoration, not Russian-only. " +
            "The June 23 celebration commemorates the deliverance of Moscow from Khan Achmed (1480).",
      feast_e: "Hebrews 9:1-7 (§320)",
      feast_g: "Luke 10:38-42; 11:27-28 (§54)",
      prokeimenon_tone: 3,
      prokeimenon_text: "My soul doth magnify the Lord, " +
        "and my spirit hath rejoiced in God my Savior.",
      prokeimenon_stichos: "For He hath looked upon the lowliness of His handmaiden; " +
        "for behold, from henceforth all generations shall call me blessed.",
      prokeimenon_note: "Song of the Theotokos (Magnificat) — Tone III",
      alleluia_tone: 2,
      alleluia_verse: "Arise, O Lord, into Thy rest, " +
        "Thou and the ark of Thy holiness.",
      alleluia_stichos: "The Lord hath sworn in truth unto David, " +
        "and He will not annul it.",
      communion_verse: "I will take the cup of salvation, " +
        "and I will call upon the name of the Lord.",
      paroemia_1: "Genesis 28:10-17 — Jacob’s ladder; gate of heaven " +
        "(Theotokos as ladder and gate typology)",
      paroemia_2: "Ezekiel 43:27-44:4 — the shut gate through which the Lord enters " +
        "(Theotokos as the sealed gate typology)",
      paroemia_3: "Proverbs 9:1-11 — Wisdom hath built a house for herself " +
        "(Theotokos as house of Wisdom)",
      matins_gospel: "Luke 1:39-49, 56 (§4) — the Visitation; " +
        "My soul doth magnify the Lord",
      has_litya: true,
      has_polyeleos: true,
      has_great_doxology: true,
      troparion: {
        tone: 4,
        text: "Today the most glorious city of Moscow is adorned, having received thy " +
              "wonder-working icon like the radiance of the sun; and we, hastening to it and " +
              "entreating thee, O Sovereign Lady, do thus cry aloud: O most wondrous Lady " +
              "Theotokos, entreat Christ our God, Who became incarnate through thee, that He " +
              "deliver this city, and all cities and lands where Christians dwell, unharmed by " +
              "all the assaults of the enemy, and save thou our souls, in that thou art " +
              "compassionate.",
      },
      kontakion_ode6: {
        tone: 8,
        text: "To thee the champion leader, we thy flock chant hymns of victory, as ones " +
              "rescued out of sufferings O Lady Theotokos, wherefore on the feast of thy " +
              "meeting we radiantly celebrate the arrival of thy precious image, and cry to " +
              "thee: Rejoice thou bride unwedded.",
      },
    },
  ],

  // ── June 24 — Nativity of St John the Forerunner (Great Feast) ───────────────
  // Source: St. Sergius 06-24.pdf. OCA and St. Sergius agree fully.
  // Service rank: GREAT FEAST — special rules apply (§2G3 and Typicon of the Feast).
  // Hours assembly: outside ordinary scope (flagged in UI as "Out of scope — Great Feast").
  // Troparion and kontakion encoded for reference.

  "06-24": {
      saint: "Nativity of the Holy Prophet & Forerunner John the Baptist",
      oca_primary: true,
      source_file: "06-24.pdf",
      rank: "great_feast",
      fekula_section: "2F",
      has_great_doxology: true,
      has_polyeleos: true,
      has_litya: true,
      has_paroemias: true,
      aposticha_source: "menaion",
      magnificat_sung: true,
      matins_format: "god_is_the_lord",
      note: "Great Feast of the Nativity of John the Forerunner. Vigil-rank service. v2.1: full encode — LIC stichera (8: Great Vespers), Litiya stichera, Aposticha, all Glory/Both Now, beatitudes. The kontakion in the Menaion (Tone 3) differs from OCA troparia page which uses a Tone 6 kontakion beginning 'A splendid and divine pillar' — that is the kontakion chanted after Ode VI at Matins. The Tone 3 kontakion is the one printed in the Menaion for the Little Entrance at Liturgy. PDF prints both; Tone 3 is primary per §2F rubric. Troparion formula at blessing of loaves: troparion ×2, then 'O Theotokos and Virgin, rejoice' ×1.",
      feast_e: "Romans 13:11-14:4 (§112)",
      feast_g: "Luke 1:5-25, 57-68, 76, 80 (§1)",
      prokeimenon_tone: 7,
      prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
      prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
      alleluia_tone: 1,
      alleluia_verse: "Blessed be the Lord God of Israel, for He hath visited and wrought redemption for His people.",
      alleluia_stichos: "And thou, O child, shalt be called the prophet of the Most High.",
      communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
      paroemia_1: "Genesis 17:15-17,19; 18:11-14; 21:1-8 — Sarah shall bear a son; barren woman bears Isaac (barren-to-fruitful typology)",
      paroemia_2: "Judges 13:2-8, 13-14, 17-18, 21-24 — Manoah’s wife shall conceive a son sanctified from birth (Samson typology)",
      paroemia_3: "Isaiah 40:1-3, 9; 41:17-18; 45:8; 54:1 — voice crying in wilderness; Rejoice thou barren",
      matins_gospel: "Luke 1:24-25, 57-68, 76, 80 (§3)",
      troparion: {
          tone: 4,
          text: "O prophet and forerunner of the coming of Christ, we who honor thee with love are at a loss how to worthily praise thee; for by thy glorious and honored nativity thou didst loose the barrenness of her who gave birth to thee and the muteness of thy father, and proclaimed to the world the incarnation of the Son of God."
      },
      kontakion_ode6: {
          tone: 3,
          text: "Today she who before was barren giveth birth unto the forerunner of Christ, he is the fulfillment of all prophecy; for, laying his hand in the Jordan upon Him Whom the prophets foretold, he hath been shown to be the prophet, herald and forerunner of the Word of God."
      },
      stichera_lord_i_call: [
          {
              tone: 4,
              text: "When John was born, he loosed the muteness of Zacharias, for it was not fitting for the father to be silent when the voice of the Word arrived. But since, when the priest had not believed in the beginning, his tongue was bound, so, when John appeared, he set his father free. To him was announced and born the voice of the Word, the forerunner of the Light, praying for our souls."
          },
          {
              tone: 4,
              repeatIndex: 0
          },
          {
              tone: 4,
              text: "Today the voice of the Word looseth the voice of his father, which was restrained because of his unbelief, and showeth forth fruitfulness to the Church, loosing the bonds of his mother’s barrenness. The lamp of the Light cometh forth; the splendor of the Sun of righteousness announceth His coming, for the edification of all and the salvation of our souls."
          },
          {
              tone: 4,
              text: "When the Word of God wished to be born of the Virgin, His angel, the highest of the prophets and greatest born of women, issued forth from elderly loins; for it was meet that he be the most glorious beginning of things divine: an offspring produced past the age of fertility, a conception accomplished without seed. O Thou Who workest miracles for our salvation, glory be to Thee!"
          },
          {
              tone: 4,
              text: "Today the great forerunner, the greatest of all the prophets, hath appeared, issuing forth from the barren womb of Elizabeth, and there is none like unto him, nor hath any other such arisen; for the most luminous Light followed the lamp of the forerunner, the Word followed the voice, the Bridegroom followed the bridal attendant, who maketh ready an excellent people for the Lord, cleansing them beforehand with water in the Spirit. He is the offspring of Zacharias, the good child of the wilderness, the preacher of repentance, the cleanser of sins, who announceth to those in Hades the resurrection of the dead, and prayeth for our souls."
          },
          {
              tone: 4,
              text: "Thou wast shown to be a prophet and forerunner from thy mother’s womb, O John, baptizer of Christ, leaping up and rejoicing within her belly when thou didst behold the Queen, bearing the Timeless One Who was begotten of the Father without mother, coming to her handmaid and to thee, who shone forth from a barren woman and an elderly man according to God’s promise."
          },
          {
              tone: 4,
              text: "O most glorious wonder! He who did not believe the word of the angel, who said that Elizabeth would conceive and bear a son, saying: “How can such a one give birth? For I am stricken with age, and her womb is withered up”, and was condemned to muteness for his unbelief, today beholdeth the promise fulfilled. His silence is broken, and he entereth into gladness, crying: “Blessed art Thou, O Lord God of Israel, for Thou hast visited and wrought deliverance for Thy people, granting the world great mercy!”"
          },
          {
              tone: 4,
              text: "O all-famed John, apostle to the whole world, glad tiding of Gabriel, offspring of the barren woman, good child of the wilderness and true friend of Christ the Bridegroom: beseech Him, that He have mercy upon our souls."
          }
      ],
      stichera_glory: {
          tone: 6,
          text: "Today the lamp of the Light, like a radiant star, doth precede the coming of the Word of God. Today the tongue of Zacharias is loosed, which the angel had commanded to keep silent. For it was thus fitting for the father to hold his tongue in silence for him who issued forth from the barren womb and with great boldness proclaimed the deliverance of all the world."
      },
      lic_theotokion: {
          tone: 6,
          text: "Elizabeth conceived the forerunner of grace, and the Virgin conceived the Lord of glory. Both mothers kissed each other, and the babe leapt up, for within her womb the servant praised the Master. And the mother of the forerunner marveled and cried aloud: “Whence is this to me, that the Mother of my Lord should come to me? May He Who hath great mercy save a despairing people!”"
      },
      litya_stichera: [
          {
              tone: 1,
              text: "Ye mountains, put forth sweetness! Ye hills, leap up like lambs! For the forerunner of the Lord, who loosed the muteness of his father at his birth, hath been born of Elizabeth, desiring to make his abode with us. Wherefore, we cry aloud to him: O thou who baptized Christ, entreat Him, that our souls be saved!"
          },
          {
              tone: 1,
              text: "O voice who art a sign from God, candle-stand of the Light, forerunner of the Lord, thou to whom witness is borne by Christ, thou foremost of the prophets: make supplication on behalf of the world, and be thou especially mindful of thy flock, that it be saved unharmed."
          },
          {
              tone: 1,
              text: "Thou wast a preacher of the Word and Lamb of God, O prophet and forerunner John, foretelling things to come, and prophesying unto the ends of the earth: Behold, the Lamb of God Who taketh away the sins of the world, and shall grant great mercy unto all!"
          }
      ],
      litya_glory: {
          tone: 5,
          text: "Today Elizabeth giveth birth to the ultimate prophet, the first of the apostles, the earthly angel and heavenly man, the voice of the Word, the soldier and forerunner of Christ, who leapt up beforehand as a sign of the promise, and before his birth proclaimed the Sun of righteousness. And she rejoiceth. Zacharias is astonished in his old age, putting aside his silence like a bond imposed upon him; and as the father of the voice he doth manifestly prophesy: “For thou, O child, shalt be called the prophet of the Most High and shalt go forth to prepare the way for Him.” Wherefore, O angel, prophet, apostle, warrior, forerunner, baptizer, preacher and instructor of repentance: as the voice of the Light and Word, pray thou unceasingly for us who keep thy memory with faith."
      },
      litya_both_now: {
          tone: 5,
          text: "Thou art the temple and portal, the palace and throne of the King, O most honored Virgin, through whom Christ the Lord, my Redeemer, Who is the Sun of righteousness, hath revealed Himself unto those who sleep in darkness, deigning to enlighten those whom He hath fashioned in His image by His own hand. Wherefore, O all-hymned one, as thou hast acquired a mother’s boldness before Him, entreat Him without ceasing, that our souls be saved."
      },
      stichera_aposticha: [
          {
              tone: 2,
              verse: null,
              text: "With psalms, hymns and spiritual songs let us praise the glorious John, the prophet of prophets, offspring of Elizabeth, greatest of all born of women, citizen of the desert; and let us cry out to him: O baptizer and forerunner of the Savior, as thou hast boldness before Him because of thine honored nativity, entreat Christ, that He grant peace to the world and great mercy to our souls."
          },
          {
              tone: 2,
              verse: "Blessed is the Lord God of Israel, for He hath visited and wrought deliverance for His people.",
              text: "John the forerunner hath come: the voice of the grace of the Word, the herald of the Sun, who was born on this day of a barren and childless woman, according to God’s promise. Rejoice, O ye people! He is come to prepare for us the way of salvation. Leaping up, he paid homage, while yet in his mother’s womb, to the Lamb Who taketh away the sins of the world and doth grant us great mercy."
          },
          {
              tone: 2,
              verse: "And thou, O child, shalt be called the prophet of the Most High.",
              text: "He who was sanctified from his mother’s womb and was the fulfillment of the prophecy, is born today of a barren woman, manifestly proclaiming the coming of the Lord, saying: Repent, for the kingdom of heaven is at hand!"
          }
      ],
      aposticha_glory: {
          tone: 8,
          text: "Today hath been fulfilled the saying of Isaiah the prophet concerning the birth of the greatest of the prophets; for he said: “Behold, I shall send mine angel before thy face, who shall make ready thy path before thee.” This warrior of the King of heaven, running ahead, truly made the paths straight for our God, being a man by nature, but an angel in his life: for, having utterly preserved his purity and chastity, he possessed them by nature; and avoiding that which is unnatural, he struggled supra-naturally. Emulating him in his virtues, O ye faithful, let us all pray, that he make entreaty for our souls to be saved."
      },
      aposticha_both_now: {
          tone: 8,
          text: "Behold Elizabeth, who said to the Virgin Mary: “Whence is this to me, O Mother of my Lord? Thou bearest the King, I the warrior; thou the Law-giver, I the upholder of the law; thou the Word, I the voice which proclaimeth the kingdom of heaven!”"
      },
      beatitudes_source: "8 troparia from Odes III and VI of the canons of the forerunner (06-24.pdf)",
      beatitudes_troparia: [
          "The birthgiving of the Master is accomplished through the Virgin, while that of His beloved servant is through an elderly and barren mother; wherefore, splendidly hath he proceeded the Wonder of wonders.",
          {
              repeat: true,
              note: "Repeat of previous troparion"
          },
          "The elderly and barren woman kisseth the Virgin Mother, truly recognizing her birthgiving, for the bond of her barrenness hath been loosed by the will of God.",
          {
              repeat: true,
              note: "Repeat of previous troparion"
          },
          "Today John is born: the citizen of the desert, the preacher of repentance, the true witness of grace, the forerunner of the Word, the star which shineth before the Light.",
          "Today, the axe which hath been forged, hath portended the hewing of barren souls, and planting the fruits of the virtues, hath surely come forth in thy nativity, O forerunner.",
          "Coming forth, the candle-stand of the Light preached the coming of the Savior, the Lamb of God, Who hath shone forth light upon the earth, offered spiritually for all nature.",
          "O all-immaculate Birthgiver of God, who hast given birth to the Abyss of mercy: drowning the abyss of my passions in the depths of thy compassions, grant me a torrent of tears from my soul."
      ]
  },

  // ── June 25 — Afterfeast of the Nativity of the Forerunner + Nun-Martyr Febronia
  // Source: St. Sergius 06-25.pdf. OCA and St. Sergius agree.
  // Service rank: §2G1 — Afterfeast with saint (Febronia at Six-Stichera level, 6 stichera 3+3)
  // Per Fekula §2G1: troparion of feast, Glory... of saint; kontakion of feast only
  // (unless Doxology, in which case saint kontakion at 3rd & 9th Hours — Febronia is §2C level
  // so feast kontakion governs at all Hours).
  // Two troparia and kontakion of forerunner encoded; Febronia kontakion also present.

  "06-25": {
    saint: "Afterfeast of the Nativity of the Forerunner & Nun-Martyr Febronia",
    oca_primary: true,
    source_file: "06-25.pdf",
    rank: "six_stichera",
    fekula_section: "2G1",            // registry + data browser — §2G1 afterfeast with saint
    fekula_section_override: "2G1",   // assembler override path (hours-tool.jsx checks this first)
    note: "Afterfeast of the Nativity of John the Forerunner. Per Fekula §2G1: troparion " +
          "of the feast at the Hours, Glory... of the saint; kontakion of the feast only " +
          "at all Hours (Febronia is not Doxology rank). Hours assembly out of ordinary " +
          "scope until §2G1–§2G4 is built.",
    feast_e: "2 Corinthians 6:1-10 (§181)",
    feast_g: "Luke 7:36-50 (§33)",
    prokeimenon_tone: 4,
    prokeimenon_text: "Wondrous is God in His saints, the God of Israel.",
    prokeimenon_stichos: "In congregations bless ye God, " +
      "the Lord from the well-springs of Israel.",
    alleluia_tone: 1,
    alleluia_verse: "With patience I waited patiently for the Lord, " +
      "and He was attentive unto me, and He hearkened unto my supplication.",
    alleluia_stichos: "And He brought me up out of the pit of misery, " +
      "and from the mire of clay.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 4,
      text: "O prophet and forerunner of the coming of Christ, we who honor thee with love " +
            "are at a loss how to worthily praise thee; for by thy glorious and honored " +
            "nativity thou didst loose the barrenness of her who gave birth to thee and the " +
            "muteness of thy father, and proclaimed to the world the incarnation of the Son " +
            "of God.",
      saint: "Forerunner (feast troparion — governs Hours per §2G1)",
    },
    troparion_second: {
      tone: 4,
      text: "Thy ewe-lamb Febronia, O Jesus crieth out with a loud voice: Thee do I love, " +
            "O my Bridegroom, and, seeking Thee, I endure suffering. In Thy baptism I am " +
            "crucified and buried with Thee. I suffer for Thy sake, that I may reign with " +
            "Thee; I die for Thee, that I may live with Thee. Accept me, who with love " +
            "sacrifice myself for Thee, as an unblemished offering! By her supplications, " +
            "in that Thou art merciful, save Thou our souls.",
      saint: "Febronia (Glory... at Hours per §2G1)",
    },
    kontakion_ode6: {
      tone: 3,
      text: "Today she who before was barren giveth birth unto the forerunner of Christ, " +
            "he is the fulfillment of all prophecy; for, laying his hand in the Jordan upon " +
            "Him Whom the prophets foretold, he hath been shown to be the prophet, herald " +
            "and forerunner of the Word of God.",
      saint: "Forerunner (feast kontakion — governs all Hours per §2G1)",
    },
  },
  // ── June 26 — Venerable David of Thessalonica ───────────────────────────────
  // Source: St. Sergius 06-26.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, one canon at Matins.
  // Note: June 26 is also the 2nd day of the Afterfeast of the Forerunner; the
  // St. Sergius Menaion treats David as primary; OCA agrees.
  // All Saints of North America synaxis falls on 2nd Sunday after Pentecost —
  // in 2026 that is July 7, not in June.

  "06-26": {
    saint: "Venerable David of Thessalonica",
    oca_primary: true,
    source_file: "06-26.pdf",
    rank: "simple",
    note: "5th-century ascetic who lived in an almond tree for 3 years near Thessalonica, " +
          "emulating the Stylites. Known for holding burning embers before the emperor " +
          "without being burned. §2A confirmed — 3 stichera; PDF AT LITURGY " +
          "has troparion and kontakion only, no Epistle/Gospel.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 8,
      text: "In thee, O father, the image of God was preserved, for taking up thy cross, " +
            "thou didst follow after Christ; by activity thou didst learn to disdain the " +
            "flesh, as something transient, but to care for thy soul as something immortal. " +
            "Wherefore, with the angels thy spirit doth rejoice, O venerable David.",
    },
    kontakion_ode6: {
      tone: 1,
      text: "An ever-blossoming garden, bearing the fruits of the virtues, thou didst appear " +
            "in the tree of a grove, like a right melodious harp, and receiving the Lord, the " +
            "Tree of life, in thy heart all the more, and cultivating it like a garden, O " +
            "divinely wise one, thou hast thereby nurtured us with grace. Pray thou ever on " +
            "our behalf, O all-blessed David.",
    },
  },

  // ── June 27 — Venerable Sampson the Hospitable ──────────────────────────────
  // Source: St. Sergius 06-27.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, one canon at Matins.

  "06-27": {
    saint: "Venerable Sampson the Hospitable of Constantinople",
    oca_primary: true,
    source_file: "06-27.pdf",
    rank: "simple",
    note: "Roman-born physician and monastic who founded a renowned hospital in " +
          "Constantinople. Healed Emperor Justinian of a grave illness. Reposed c. 530. " +
          "§2A by stichera count (3); PDF includes full AT LITURGY section — " +
          "venerable saint service with proper Epistle and Gospel.",
    feast_e: "Galatians 5:22-6:2 (§213)",
    feast_g: "Luke 12:32-40 (§67)",
    prokeimenon_tone: 7,
    prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
    prokeimenon_stichos: "What shall I render unto God for all that He hath rendered unto me?",
    alleluia_tone: 6,
    alleluia_verse: "Blessed is the man that feareth the Lord; " +
      "in His commandments shall he greatly delight.",
    alleluia_stichos: "His seed shall be mighty upon the earth.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    troparion: {
      tone: 8,
      text: "In thy patience, O venerable father, thou didst acquire thy reward, having " +
            "endured in prayer without ceasing, and loved the poor and provided for them. " +
            "Beseech Christ God, O merciful and blessed Sampson, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 8,
      text: "Rejoicing with psalms and hymns, O divinely wise and venerable Sampson, and " +
            "hastening to thy divine shrine, as to that of an excellent physician and a right " +
            "acceptable intercessor, we glorify Christ Who hath bestowed upon thee such grace " +
            "of healing.",
    },
  },

  // ── June 28 — Translation of Relics of Holy Unmercenaries Cyrus & John ──────
  // Source: St. Sergius 06-28.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera (§2C) — 6 stichera, both Oktoechos canons +
  //   6-troparion canon of the saints at Matins.

  "06-28": {
    saint: "Translation of the Relics of the Holy Unmercenary Physicians Cyrus and John",
    oca_primary: true,
    source_file: "06-28.pdf",
    rank: "six_stichera",
    note: "The translation of the relics of the Holy Unmercenaries Cyrus and John from " +
          "Canopus to Menouthis near Alexandria in the 5th century. Their primary feast " +
          "is January 31. Both were physician-martyrs: Cyrus a monk, John a soldier, " +
          "who suffered under Diocletian. §2C confirmed — 6 stichera.",
    feast_e: "1 Corinthians 12:27-13:8 (§153)",
    feast_g: "Matthew 10:1, 5-8 (§34 from midpoint)",
    prokeimenon_tone: 4,
    prokeimenon_text: "In the saints that are in His earth hath the Lord been wondrous; " +
      "He hath wrought all His desires in them.",
    prokeimenon_stichos: "I beheld the Lord ever before me, " +
      "for He is at my right hand, that I might not be shaken.",
    alleluia_tone: 2,
    alleluia_verse: "Behold now, what is so good or so joyous " +
      "as for brethren to dwell together in unity?",
    alleluia_stichos: "For there the Lord commanded the blessing, " +
      "life for evermore.",
    communion_verse: "Rejoice in the Lord, O ye righteous; " +
      "praise is meet for the upright.",
    troparion: {
      tone: 5,
      text: "O Christ God Who hast given us the miracles of Thy holy martyrs as an " +
            "invincible rampart, through their supplications set at naught the counsels " +
            "of the heathen and strengthen right believing rulers, in that Thou alone art " +
            "good and the Lover of mankind.",
    },
    kontakion_ode6: {
      tone: 3,
      text: "Receiving the gift of miracles from divine grace, O saints, ye work wonders " +
            "unceasingly, cutting down all our passions with invisible skill, O divinely " +
            "wise Cyrus and glorious John; for ye are divine physicians.",
    },
  },
  // ── June 29 — Holy Apostles Peter & Paul (Great Feast) ──────────────────────
  // Source: St. Sergius 06-29.pdf. OCA and St. Sergius agree fully.
  // Service rank: VIGIL (§2F) — Great Feast with Little and Great Vespers, Polyeleos Matins.
  // Hours assembly: outside ordinary scope (Great Feast). Propers encoded for reference.

  "06-29": {
    saint: "Holy, Glorious, All-Praised and Preeminent Apostles Peter and Paul",
    oca_primary: true,
    source_file: "06-29.pdf",
    rank: "vigil",
    note: "Great Feast of the Holy Apostles Peter and Paul. One of the most solemn " +
          "apostolic feasts. Full Vigil service. Peter martyred by crucifixion (inverted), " +
          "Paul by beheading, both in Rome under Nero c. 67 AD. Troparion and kontakion " +
          "encoded for reference; Hours assembly outside ordinary scope.",
    troparion: {
      tone: 4,
      text: "O first enthroned among the apostles and teachers of the whole world: " +
            "entreat the Master of all, that He grant peace to the world " +
            "and great mercy to our souls.",
    feast_e: "2 Corinthians 11:21-30 (§193)",
    feast_g: "Matthew 16:13-19 (§67)",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "The heavens shall confess Thy wonders, O Lord, " +
      "and Thy truth in the congregation of saints.",
    alleluia_stichos: "God Who is glorified in the council of the saints.",
    communion_verse: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    paroemia_1: "1 Peter 1:1-9 — begotten again unto a lively hope; " +
      "trial of faith more precious than gold",
    paroemia_2: "1 Peter 1:10-16 — be ye holy for I am holy; " +
      "redeemed with the precious blood of Christ",
    paroemia_3: "1 Peter 2:11-24 — abstain from fleshly lusts; " +
      "Christ also suffered for us, leaving us an example",
    matins_gospel: "John 21:15-23 (§67) — Feed my lambs; " +
      "signifying by what death he should glorify God",
    has_litya: true,
    has_polyeleos: true,
    has_great_doxology: true,
    },
    kontakion_ode6: {
      tone: 2,
      text: "The steadfast and divinely eloquent preachers, the foremost of Thine apostles, " +
            "O Lord, hast Thou received into the rest and delight of Thy good things; " +
            "for Thou hast accepted their pangs and death as greater than any wholeburnt " +
            "offering, O Thou Who alone knowest the hearts of all mankind.",
    },
  },

  // ── June 30 — Synaxis of the Holy, Glorious & All-Praised Twelve Apostles ───
  // Source: St. Sergius 06-30.pdf. OCA and St. Sergius agree fully.
  // Service rank: Six-Stichera (§2C) — 6 stichera (3 Peter & Paul + 3 twelve apostles).
  // The troparion is the same as June 29 per OCA and St. Sergius.
  // The kontakion is the Synaxis' own (T2) — distinct from June 29.
  // Note: June 30 in 2026 falls during Pentecostarion (Pascha+79) — out of ordinary scope.

  "06-30": {
    saint: "Synaxis of the Holy, Glorious and All-Praised Twelve Apostles",
    oca_primary: true,
    source_file: "06-30.pdf",
    rank: "six_stichera",
    note: "The day after Peter & Paul, honoring all Twelve Apostles together. " +
          "Troparion is the same as June 29. The Synaxis has its own kontakion (T2). " +
          "In 2026 this date falls in the Pentecostarion (ordinary assembly rules do not apply).",
    troparion: {
      tone: 4,
      text: "O first enthroned among the apostles and teachers of the whole world: " +
            "entreat the Master of all, that He grant peace to the world " +
            "and great mercy to our souls.",
      note: "Same troparion as June 29 (Feast of Peter & Paul) — confirmed by OCA and St. Sergius.",
    feast_e: "1 Corinthians 4:9-16 (§131)",
    feast_g: "Mark 3:13-19 (§12)",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "The heavens shall confess Thy wonders, O Lord, " +
      "and Thy truth in the congregation of saints.",
    alleluia_stichos: "God Who is glorified in the council of the saints.",
    communion_verse: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Christ the Rock hath radiantly glorified the rock of Faith, " +
            "the most excellent of His disciples, as He doth Paul and the assembly " +
            "of the twelve today; and, faithfully celebrating their memory, " +
            "we glorify Him Who glorified them.",
    },
  },

  // ── July 1 — Holy Unmercenaries Cosmas & Damian of Rome ──────────────────
  // Source: St. Sergius 07-01.pdf. OCA and St. Sergius in agreement.
  // Service rank: Six-Stichera (§2C). Jul 1 O.S. = Jul 1 N.S. (Roman feast, no offset).
};

export default JUNE_MENAION;
