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
      note: "Also: Martyrs Kyriaka, Valeria & Maria (OCA secondary, Polyeleos service, 06-07.pdf).",
      troparion: {
        tone: 4,
        text: "Your holy martyr Theodotus and his companions, O Lord, through their sufferings have received incorruptible crowns from You, our God. For having Your strength, they laid low their adversaries, and shattered the powerless boldness of demons. Through their intercessions, save our souls!",
      },
      kontakion_ode6: {
        tone: 4,
        text: "You struggled well, O Theodotus, together with your fellow athletes and passion-bearing virgins. You have received crowns of honor. Therefore, unceasingly pray to Christ God for us all.",
      },
    },
    {
      saint: "Holy Martyrs Kyriaka, Valeria & Maria",
      oca_primary: false,
      source_file: "06-07.pdf",
      rank: "polyeleos",
      note: "The Holy Martyrs Kyriaka, Valeria and Maria appear on the OCA calendar as secondary commemorations on June 7. The OCA primary is HM Theodotus of Ancyra.",
      troparion: {
        tone: 1,
        text: "As reasonable lambs, you were guided by Christ, the Chief Shepherd, along the path of martyrdom. You finished your course and kept the faith; therefore, honored Kyra, Valerie, and Mary, with joyful hearts, we magnify Christ today, as we honor your holy memory!",
      },
      kontakion_ode6: {
        tone: 4,
        text: "Passion-bearers Kyra, Valerie and Mary, you loved the faithful promises of God; you clung to the faith of Christ, looking for eternal life and the blessedness of Paradise! You endured torture with steadfastness and bowed your necks beneath the sword. Therefore, you have been crowned by the hand of the Lord and glorious is your memory. Entreat Christ God, the Judge of the contest, on behalf of those who honor your struggles with faith!",
      },
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
  },

  // ── June 12 — Ven. Onuphrius the Great & Ven. Peter of Athos (Double §2B) ────
  // Source: St. Sergius 06-12.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3+3). Two separate kontakia.
  // Fekula §2B: Peter (first saint, Ode III) = 1st & 6th Hours;
  //             Onuphrius (second saint, Ode VI) = 3rd & 9th Hours.

  "06-12": {
    saint: "Ven. Onuphrius the Great & Ven. Peter of Athos",
    oca_primary: true,
    source_file: "06-12.pdf",
    rank: "six_stichera",
    fekula_section_override: "2B",
    note: "Double service: two venerable fathers in one compiled service. Joint troparion. " +
          "Per Fekula §2B: 9th Hour uses Onuphrius kontakion (second saint, Tone III).",
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
    fekula_section_override: "2B",
    note: "Double service: martyr and hierarch in one compiled service. Two separate troparia. " +
          "Per Fekula §2B: 9th Hour uses Triphyllius kontakion (second saint, Tone VIII). " +
          "AT LITURGY section in PDF names Troparion/Kontakion only — no Prokeimenon, Epistle, " +
          "Gospel, Alleluia, or Communion verse. §2B confirmed: readings from Oktoechos.",
    feast_e: "absent — §2B/§2C, readings from Oktoechos",
    feast_g: "absent — §2B/§2C, readings from Oktoechos",
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
    rank: "six_stichera",
    note: "Also: St Theodore, first Bishop of Rostov; Relics of Sts Basil & Constantine " +
          "of Yaroslavl; St Ephraim of Antioch; Ven Zosimus of Phoenicia; " +
          "Yaroslavl Icon; White Lake Icon; HM Theodore of Kvelta. " +
          "Note: Holy Fathers of the First Ecumenical Council falls on the Sunday " +
          "nearest June 8 (movable, Pascha+42) — not this fixed date.",
    feast_e: "2 Timothy 2:1-10",
    feast_g: "Matthew 10:16-22",
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
  },

  // ── June 9 — St Cyril of Alexandria, Archbishop ─────────────────────────
  // Source: St. Sergius (06-09.pdf) and OCA. Both agree on primary commemoration.
  // Service rank: Six-Stichera (§2C) — 6 stichera on Lord I Call.

  "06-09": {
    saint: "St Cyril of Alexandria, Archbishop",
    rank: "six_stichera",
    note: "Pillar of Orthodoxy and defender of the title Theotokos at the Council of " +
          "Ephesus (431 AD). Authored extensive commentaries and theological treatises. " +
          "Matins canon acrostic: 'Cyril is the harp of divine visions' (Theophanes, Tone IV). " +
          "Single kontakion — Ode VI only (same used at all four Hours).",
    feast_e: "Hebrews 13:7-16 (§334)",
    feast_g: "Matthew 5:14-19 (§11)",
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
    note: "Also: Sts Mary and Martha, sisters of St Lazarus. Two kontakia in PDF — " +
          "the Matins Ode VI kontakion (Tone II) governs the Hours.",
    troparion: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Metrophanes our father, entreat Christ God, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Thou didst manifestly preach the Faith of Christ, and preserving it, thou didst truly cause thy faithful flock to increase. Wherefore, thou dost rejoice with the angels, O Metrophanes, entreating Christ unceasingly for us all.",
    },
  },

  // ── June 5 — Holy Hieromartyr Dorotheus, Bishop of Tyre ─────────────────────
  // Source: St. Sergius 06-05.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera (§2C). 6 stichera on Lord I Call.
  // Note: Alleluia rubric present but this applies to fasting weekday alternate use;
  //       rank is determined by stichera count (6 = §2C), not Alleluia rubric alone.

  "06-05": {
    saint: "Holy Hieromartyr Dorotheus, Bishop of Tyre",
    oca_primary: true,
    source_file: "06-05.pdf",
    rank: "six_stichera",
    note: "Dorotheus served 107 years as a pastor before martyrdom under Julian the Apostate.",
    troparion: {
      tone: 4,
      text: "As thou didst share in the ways of the apostles and didst occupy their throne, thou didst find thine activity to be a passage to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, thou didst suffer for the Faith even to the shedding of thy blood, O Hieromartyr Dorotheus, entreat Christ God, that our souls be saved.",
    },
    kontakion_ode6: {
      tone: 5,
      text: "Resplendent with virtues brighter than the sun and with thy sufferings, O blessed Dorotheus, thou didst shine forth and illumine the land, dispelling the darkness of polytheism and putrid heresy. Wherefore, we radiantly celebrate thy memory.",
    },
  },

  // ── June 6 — Ven. Bessarion & Ven. Hilarion the New (Double Service §2B) ────
  // Source: St. Sergius 06-06.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera = 3 per saint.
  // Fekula §2B: 1st & 6th Hour = kontakion_ode3 (Bessarion T2, Matins Ode III);
  //             3rd & 9th Hour = kontakion (Hilarion T2, Matins Ode VI).
  // Joint troparion used at all Hours.

  "06-06": {
    saint: "Ven. Bessarion the Wonderworker & Ven. Hilarion the New",
    oca_primary: true,
    source_file: "06-06.pdf",
    rank: "six_stichera",
    fekula_section_override: "2B",  // Double service
    note: "Double service: two venerable fathers in one compiled service. Joint troparion. " +
          "Per Fekula §2B: 9th Hour uses the second saint's kontakion (Hilarion, Tone II).",
    troparion: {
      tone: 4,
      text: "O God of our fathers, ever deal with us according to Thy meekness. Take not Thy mercy from us, but by the prayers of these saints direct our life in peace.",
    },
    // kontakion = Matins 6th Ode → governs 3rd & 9th Hours (Fekula §2B second saint)
    kontakion_ode6: {
      tone: 2,
      text: "Like a shepherd didst thou preserve within thy fold the flock of thy life-bearing pasture, and wast shown to be great by the loftiness of thy works, O Hilarion the New, having undergone much suffering and sorrow in thy piety. Wherefore, thou hast made thine abode in the most joyful life in heavenly Sion. Pray for us, O venerable one!",
      saint: "Hilarion the New",
    },
    // kontakion_ode3 = Matins 3rd Ode → governs 1st & 6th Hours (Fekula §2B first saint)
    kontakion_ode3: {
      tone: 2,
      text: "Emulating the powers on high, by example thou didst live the life of the birds, O venerable one; putting transitory things far from thy mind, thou wast led to the heavenly beauties of Christ the King by thy constant desire, thou didst come even unto Him. O Bessarion, unceasingly entreat Him on behalf of us all!",
      saint: "Bessarion the Wonderworker",
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
    note: "Also: Blessed Agapitos the Unmercenary of Pechersk (not on OCA calendar).",
    troparion: {
      tone: 4,
      text: "In their sufferings, Thy martyrs O Lord, received imperishable crowns from Thee, our God; for, possessed of Thy might, they set at naught the tyrants and crushed the feeble audacity of the demons. By their supplications save Thou our souls.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Adorned with the wisdom of thy divine words, O Justin, the whole Church of God doth illumine the world with the radiance of thy life. Having received a crown because of the out-pouring of thy blood, standing with the angels before Christ, pray thou unceasingly on behalf of us all.",
    },
  },

  // ── June 2 — Multi-service: St Nicephorus / Greatmartyr John the New ────────
  // Source: St. Sergius 06-02.pdf (Nicephorus, Six-Stichera) + 06-02A.pdf (John, Polyeleos)
  // OCA primary: St Nicephorus the Confessor. John the New is secondary on OCA calendar.

  "06-02": [
    {
      saint: "St Nicephorus the Confessor, Patriarch of Constantinople",
      oca_primary: true,
      source_file: "06-02.pdf",
      rank: "six_stichera",
      note: "",
      troparion: {
        tone: 4,
        text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Nicephorus our father, entreat Christ God, that our souls be saved.",
      },
      kontakion_ode6: {
        tone: 2,
        text: "Through your inspired confession, you gained victory for the Church, holy Hierarch Nicephorus. You suffered unjust exile because of your reverence for the icon of God the Word. Righteous Father, entreat Christ our God to grant us His great mercy.",
      },
    },
    {
      saint: "Holy Greatmartyr John the New of Suceava",
      oca_primary: false,
      source_file: "06-02A.pdf",
      rank: "polyeleos",
      note: "St John the New of Suceava appears on the OCA calendar as a secondary commemoration on June 2. The OCA primary is St Nicephorus the Confessor.",
      troparion: {
        tone: 4,
        text: "Having sustained well thy life on earth with almsgiving, and frequent prayers and tears, O spiritual athlete, thou didst manfully hasten to suffering, and denounce the ungodliness of the Persians; wherefore, thou hast become a firm foundation for the Church and the boast of Christians, O ever-memorable John.",
      },
      kontakion_ode6: {
        tone: 4,
        text: "Plying the deep of the sea for trade, thou didst set out from the East for the North; but when God called thee, as He did Matthew the tax-collector, thou didst forsake thy trade and follow Him by the blood of martyrdom, exchanging transitory things for those which are eternal; thus receiving a crown of victory.",
      },
    },
  ],

  // ── June 3 — Holy Martyr Lucillian and those with him ───────────────────────
  // Source: St. Sergius 06-03.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call; Alleluia at Matins.
  // Troparion/kontakion: NOT in PDF — sourced from OCA troparia page.

  "06-03": {
    saint: "Holy Martyr Lucillian and those with him",
    oca_primary: true,
    source_file: "06-03.pdf",
    rank: "simple",
    note: "Companions: venerable Paula and four unnamed children martyrs.",
    troparion: {
      tone: 1,
      text: "By your faith, you shone like a radiant star in the dark night of error; you fought the good fight and slew the crafty enemy, O Lucillian. Together with venerable Paula and the four martyred children entreat Christ our God to save our souls.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "You attained the dignity of the martyrs of Christ through the torments that you courageously endured, O Lucillian. Together with Paula and the four martyred children, you sing to the Creator: 'Like sheep we are slaughtered for love of You, O Savior.'",
    },
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
    fekula_section_override: "2B",
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
    source_file: "06-10.pdf",
    rank: "simple",
    note: "Bishop of Prussia martyred for the faith. Also: St John of Tobolsk (separate service). " +
          "§2A confirmed — 3 stichera on Lord I Call; PDF has no AT LITURGY section (readings from Oktoechos). " +
          "Troparion absent from Vespers rubric in PDF — sourced from General Menaion (Hieromartyr). " +
          "Kontakion sourced from General Menaion.",
    feast_e: null,
    feast_g: null,
    // Vespers stichera — sourced from 06-10.pdf, AT VESPERS section. Tone 4.
    // Three stichera on Lord I Call (§2A). Glory and Both now from PDF (Menaion-supplied).
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 4, text: "Elevated above earthly things by thine active purifications like an animate cloud, O all-blessed one, thou didst cast down the perverse serpent with the thunder-claps of thy miracles and the awesome lightning flashes of thy words, and thou didst receive the grace to burn up the bowels of the adverse carnal serpents with the divine covering of the sacred Gifts." },
      { tone: 4, text: "O holy hierarch Timothy, boast of the people of Prussia, universal champion and beacon of the world, adornment of the Church, sacred sacrifice of faith, and precious and lustrous ornament of the martyrs: pray thou that those who celebrate thy most honored memory with faith may be delivered from corruption and misfortunes." },
      { tone: 4, text: "With thy pangs, O Timothy, thou didst weave a most comely garment dyed in thy blood, and ineffably received from on high a heavenly vesture of incorrupt purity and immutable life. Wearing this immaterial robe in the highest, pray thou on behalf of all who praise thee with piety, O spiritual athlete." },
    ],
    stichera_glory: {
      tone: 4,
      text: "Tens of thousands of times have I promised to repent of mine offenses, O most pure one, yet the cherished habits of mine evil ways will not depart from me; wherefore, I cry unto thee and fall down, praying: O Sovereign Lady, rescue me from such tyranny, guiding me to things that are higher, which are nigh unto salvation.",
    },
    // Both now at LIC: stavrotheotokion from PDF (Friday) or theotokion (other days).
    // The PDF provides a stavrotheotokion for use when this falls on Wed/Fri;
    // on other days the Octoechos theotokion governs (Track B — pending encoding).
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
    note: "Great Feast of the Nativity of John the Forerunner. One of the twelve Great " +
          "Feasts. Hours follow Feast rules (out of ordinary scope). Troparion and " +
          "kontakion encoded for reference.",
    feast_e: "Romans 13:11-14:4 (§112)",
    feast_g: "Luke 1:5-25, 57-68, 76, 80 (§1)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, " +
      "and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, " +
      "when I make supplication unto Thee.",
    alleluia_tone: 1,
    alleluia_verse: "Blessed be the Lord God of Israel, " +
      "for He hath visited and wrought redemption for His people.",
    alleluia_stichos: "And thou, O child, shalt be called " +
      "the prophet of the Most High.",
    communion_verse: "In everlasting remembrance shall the righteous be; " +
      "he shall not be afraid of evil tidings.",
    paroemia_1: "Genesis 17:15-17,19; 18:11-14; 21:1-8 — Sarah shall bear a son; " +
      "barren woman bears Isaac (barren-to-fruitful typology)",
    paroemia_2: "Judges 13:2-8, 13-14, 17-18, 21-24 — Manoah’s wife shall conceive " +
      "a son sanctified from birth (Samson typology)",
    paroemia_3: "Isaiah 40:1-3, 9; 41:17-18; 45:8; 54:1 — voice crying in wilderness; " +
      "Rejoice thou barren",
    matins_gospel: "Luke 1:24-25, 57-68, 76, 80 (§3)",
    has_litya: true,
    has_polyeleos: true,
    has_great_doxology: true,
    troparion: {
      tone: 4,
      text: "O prophet and forerunner of the coming of Christ, we who honor thee with love " +
            "are at a loss how to worthily praise thee; for by thy glorious and honored " +
            "nativity thou didst loose the barrenness of her who gave birth to thee and the " +
            "muteness of thy father, and proclaimed to the world the incarnation of the Son " +
            "of God.",
    },
    kontakion_ode6: {
      tone: 3,
      text: "Today she who before was barren giveth birth unto the forerunner of Christ, " +
            "he is the fulfillment of all prophecy; for, laying his hand in the Jordan upon " +
            "Him Whom the prophets foretold, he hath been shown to be the prophet, herald " +
            "and forerunner of the Word of God.",
    },
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
    fekula_section_override: "2G1",
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
