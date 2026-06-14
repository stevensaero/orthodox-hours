// Menaion data — July
// Source: St. Sergius Menaion (Russian usage) + OCA calendar
// Encoding rule: v2.1 — see encoding_rule_v2_1.md
// Single point of truth — edit this file for july encoding updates

const JULY_MENAION = {
  "07-01": {
    saint: "Holy Unmercenaries Cosmas & Damian of Rome",
    oca_primary: true,
    source_file: "07-01.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    aposticha_source: "octoechos",
    note: "OCA commemorates Jul 1 N.S. St. Sergius and OCA in agreement on date and texts. " +
          "§2C confirmed — 6 stichera on Lord I Call (3 T1 + 3 T4); 'God is the Lord' at Matins. " +
          "Aposticha from Octoechos (§2C); Glory/Both Now from Menaion. " +
          "Beatitudes: 4 Octoechos + 4 from Ode III. No paroemias, no Litiya, no Polyeleos.",
    feast_e: "1 Corinthians 12:27-13:8 (§153)",
    feast_g: "Matthew 10:1, 5-8 (§34)",
    prokeimenon_tone: 4,
    prokeimenon_text: "In the saints that are in His earth hath the Lord been wondrous; He hath wrought all His desires in them.",
    prokeimenon_stichos: "I beheld the Lord ever before me, for He is at my right hand, that I might not be shaken.",
    alleluia_tone: 4,
    alleluia_verse: "Behold, what is so good or so joyous as for brethren to dwell together in unity?",
    alleluia_stichos: "For there the Lord commanded the blessing, life for evermore.",
    communion_verse: "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",

    // ── AT VESPERS: LORD I HAVE CRIED ──────────────────────────────────────
    // 6 stichera: 3 in Tone I + 3 in Tone IV. §2C = all from Menaion.
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 1,
        text: "With rays of miracles dispel every infirmity of our sicknesses, " +
              "freely extending grace to us, and enrich us with the gifts of the Master " +
              "Who hath taken on His shoulders the afflictions of earthborn mortals." },
      { tone: 1,
        text: "Having first been trained well as physicians, ye cleansed away the illnesses of all with faith; " +
              "and in later times, having armed yourselves spiritually, ye divinely dispel " +
              "the symptoms of spiritual sicknesses." },
      { tone: 1,
        text: "Having received grace freely from Christ God, ye heal the ailments of all without fee, " +
              "O unmercenary ones, and cleanse not only our infirmities, but even reasonably treat cattle, " +
              "in that ye are merciful." },
      { tone: 4,
        text: "Like rivers in full flood and manifestly overflowing with spiritual waters, " +
              "ye irrigate creation with divine signs and the most glorious gifts of healing, " +
              "drying up soul-corrupting passions, healing infirmities, and expelling evil spirits, " +
              "O God-bearing unmercenaries, intercessors for our souls." },
      { tone: 4,
        text: "Having subdued the irrational passions, O holy ones, with spiritual powers, " +
              "ye impart well-being to men and cattle, having been enriched by Christ " +
              "with the gift of healings. Wherefore, celebrating your sacred and radiant solemnity, " +
              "we ask for the cleansing of our souls." },
      { tone: 4,
        text: "Your divine temple hath been shown to be like a splendid heaven of salvation, " +
              "which now displayeth salvific miracles like stars, and the divine working of healings " +
              "like a radiant sun, O most blessed Cosmas and most glorious Damian, " +
              "ye servants of the Lord and intercessors for our souls." },
    ],
    stichera_glory: {
      tone: 6,
      text: "Boundless is the grace of the saints, which they have received from Christ. " +
            "Wherefore, their relics continually work miracles by the power of God, " +
            "and their names, when invoked with faith, heal incurable sicknesses. " +
            "Through them, O Lord, free us also from the passions of soul and body, " +
            "in that Thou lovest mankind.",
    },
    // Both Now: Theotokion or Stavrotheotokion in Tone VI (tone of the Glory).
    // §2C: Both Now = Octoechos theotokion in tone of the Glory.
    stichera_both_now: "Octoechos (tone of glory — Tone 6)",

    // ── AT VESPERS: APOSTICHA ──────────────────────────────────────────────
    // §2C: stichera from Octoechos; Glory/Both Now from Menaion.
    // Glory doxasticon from PDF:
    aposticha_glory: {
      tone: 6,
      text: "Ever having Christ working within you, O holy unmercenaries, ye work wonders in the world " +
            "and heal the sick. For your healing is an inexhaustible well-spring, which when drawn from, " +
            "floweth in abundance every day, pouring and gushing forth in great quantities, " +
            "granting healing to all who draw forth from it, yet remaining ever full. " +
            "What, therefore, shall we call you? Healing physicians of souls and bodies? " +
            "Healers of incurable sufferings who heal all and have received this gift from Christ the Savior, " +
            "Who granteth great mercy unto us.",
    },
    // Both Now: Theotokion or Stavrotheotokion in Tone VI (tone of the Glory).
    aposticha_both_now: "Octoechos (tone of glory — Tone 6)",

    // ── AT MATINS ──────────────────────────────────────────────────────────
    // Kontakion after Ode VI = same as kontakion_ode6 (confirmed from PDF)
    // Kontakion after Ode III: not present in PDF — Ode III has only troparia and theotokion.
    // Therefore kontakion_ode3 = same as kontakion_ode6.
    kontakion_ode3: "same as kontakion_ode6",
    ikos: "The discourse of the wise physicians surpasseth all reason and wisdom, " +
          "imparting understanding unto all, for, having received grace from the Most High, " +
          "they grant health to all, from whence, even I have been granted the grace to sing " +
          "of the abundance of healings the God-bearing favorites and ministers of Christ bestow; " +
          "for they deliver multitudes from sickness, healing the world with miracles.",
    exapostilarion: "What utterances can rightly describe the unmercenaries' grace of healing? " +
                    "For, after God, they are the saving physicians of the whole world.",

    // ── Beatitudes (AT LITURGY) ────────────────────────────────────────────
    // 8 troparia: 4 from Octoechos + 4 from Ode III of saint's canon
    beatitudes_troparia: [
      { text: "Your divine temple doth sacredly pour forth in spiritual streams the fragrant myrrh of healings, ever washing away the fetid passions.",
        source: "Ode III", label: "Ode III, 1" },
      { text: "Ever dwelling in the mansions of heaven, O most wise ones, through the grace of the Almighty ye ever show your tabernacle to be a well-spring of healings.",
        source: "Ode III", label: "Ode III, 2" },
      { text: "Curbing the passions of the flesh with the reins of abstinence, ye have most abundantly received spiritual radiance, whereby, ye enrich the world with healings.",
        source: "Ode III", label: "Ode III, 3" },
      { text: "God chose thee as the most beautiful among women, O pure one, and He Who resteth in His saints was well pleased to be born in the flesh from thee.",
        source: "Ode III", label: "Ode III, Theotokion" },
    ],

    troparion: {
      tone: 8,
      text: "O holy unmercenaries and wonder-workers Cosmas and Damian, visit our infirmities. " +
            "Freely have ye received, freely give unto us.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Having received the grace of healings, ye extend health to those in need, " +
            "O most glorious physicians and wonder-workers. By your visitation cast down " +
            "the audacity of the enemy, healing the world with miracles.",
    },
  },

  // ── July 2 — St John Maximovich, Abp of Shanghai & San Francisco ─────────
  // Source: St. Sergius 06-19.pdf (Jun 19 O.S. = Jul 2 N.S.).
  // Service rank: Vigil (§2F). OCA and St. Sergius in full agreement on all texts.
  // Service composed at Holy Dormition Monastery, Sofia; pending full ROCOR service.

  "07-02": {
    saint: "St John Maximovich, Archbishop of Shanghai & San Francisco",
    oca_primary: true,
    source_file: "06-19.pdf",
    rank: "vigil",
    fekula_section: "2F",
    note: "Jun 19 O.S. = Jul 2 N.S. Vigil §2F confirmed — 8 stichera, Great Vespers with Litya, " +
          "Polyeleos, three paroemias. OCA and St. Sergius texts in full agreement. " +
          "Service composed at Holy Dormition Monastery, Sofia; full ROCOR service forthcoming.",
    feast_e: "Hebrews 13:17-21",
    feast_g: "Luke 6:17-23",
    prokeimenon_tone: 7,
    prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
    prokeimenon_stichos: "What shall I render unto the Lord, for all that He hath rendered unto me?",
    alleluia_tone: 4,
    alleluia_verse: "The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations.",
    alleluia_stichos: "Many are the tribulations of the righteous, but the Lord shall deliver them out of them all.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    paroemia_1: "Proverbs — The memory of the just is praised (Prov 10:7; 3:13-16; 8:6, 34-35)",
    paroemia_2: "Proverbs — The mouth of the righteous droppeth wisdom (Prov 10:31-32; 11:2-12)",
    paroemia_3: "Wisdom of Solomon — Though the righteous be prevented with death (Wis 4:7-15)",
    stichera_lord_i_call_count: 8,  // T6, 8 stichera (06-19.pdf = Bulgarian service); §2F vigil
    stichera_lord_i_call: [
      { tone: 6, text: "Thou wast a vessel filled to overflowing with grace, O John our most good master, wonderworker of all the world. Who then can say that there are now no grace-filled men in the world, that there are no longer any righteous men? O ye unbelievers, be ye sober of mind, and understand that God is with us who live in the darkness and deadly shadow of falsehoods. Beholding him who though in the tomb abideth in incorruption, be ye ashamed and turn to the true God, for God is with us and will remain inseparably with us until the end of the world.", repeatIndex: 0 },
      { tone: 6, text: "Join chorus, O ye east and west, ye north and the sea! Rejoice, receiving a new angel, the divinely inspired man of prayer, the unmercenary pastor, the gracious healer, the prophet and herald, the all-good John our helper, a mighty surety for us at the judgment.", repeatIndex: 2 },
      { tone: 6, text: "Shall not one who is beloved return that love? Wherefore, how can we not love thee who hast loved us utterly, O holy and guileless pastor, our true strengthener amid temptations and faithful mediator with the Theotokos before the throne of the most holy Trinity, who dost ask for the remission of sins of all of us who honor thee with love?" },
      { tone: 6, text: "O the mystery of thy divine love! Thou hast truly been shown to be a son of our Father in the heavens, O John, wondrous and righteous; for the Father causeth His sun to shine upon both the wicked and the good, and the rain to fall upon the righteous and the unrighteous; and thou didst pray for thine enemies, vanquishing the devil, the one primeval enemy of all, showing forth the perfection of the virtues." },
      { tone: 6, text: "Straightway after thy blessed repose thy sepulcher was revealed to be a fount of healings and an abundant wellspring of miracles. And how much more is it now, O most blessed father, when the Church Militant hath glorified thee, having uncovered thine incorrupt relics with compunction and enshrined them with honor in the church, where thou grantest joy to all who sorrow, in accordance with its name?" },
      { tone: 6, text: "As a protector of Orthodoxy in America, thou didst truly fulfill the words of the apostle; for where sin hath multiplied grace hath abounded. Wherefore we, the unworthy, now beseech thee, O blessed wonderworker John: grant abundant grace unto our wretched and hardened hearts, and teach us to love one another as thou thyself didst love all." },
    ],
    stichera_glory: { tone: 5, text: "Rejoice, O little and persecuted Orthodox flock, hated by all, for God hath given thee a great treasure: a wondrous comforter amid sorrow, an incorrupt fragrance amid the fetor of the present corruption of morals, a calm island of hope unashamed amid an ocean of storms." },
    // Note: 8 stichera = 6 unique; first two each marked ×2 (repeatIndex 0 and 2) per PDF rubric.
    // Both-now: Dogmatic Theotokion T5 "In the Red Sea of old..." (06-19.pdf at Great Vespers)
    lic_theotokion: null,  // §2F vigil — Both-now = tone-of-week Dogmatic Theotokion (T5 printed in PDF but runtime from Octoechos)
    troparion: {
      tone: 5,
      text: "Lo, thy care for thy flock in its sojourn prefigured the supplications which thou dost " +
            "ever offer up for the whole world. Thus do we believe, having come to know thy love, " +
            "O holy hierarch and wonderworker John. Wholly sanctified by God through the ministry " +
            "of the most pure Mysteries, and thyself ever strengthened thereby, thou didst hasten " +
            "to the suffering, O most gladsome healer. Hasten now also to the aid of us " +
            "who honor thee with all our heart.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "Thy heart hath gone out to all who entreat thee with love, O holy hierarch John, " +
            "and who remember the struggle of thy whole industrious life, and thy painless and " +
            "easy repose, O faithful servant of the most pure Directress.",
    },
  },

  // ── July 3 — Holy Martyr Hyacinth of Caesarea ────────────────────────────
  // Source: St. Sergius 07-03.pdf. Jul 3 O.S. = Jul 16 N.S. — DIVERGENCE.
  // OCA commemorates Jul 3 N.S.; encoded at 07-03 per OCA primacy.
  // OCA has composed proper troparia/kontakia; St. Sergius generic texts replaced.

  "07-03": {
    saint: "Holy Martyr Hyacinth of Caesarea",
    oca_primary: true,
    source_file: "07-03.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "Jul 3 O.S. = Jul 16 N.S. OCA commemorates Jul 3 N.S. — DIVERGENCE; OCA date governs. " +
          "OCA proper troparion and kontakion used; differ from St. Sergius generic martyr texts.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    stichera_lord_i_call_count: 3,  // T8, Spec. Mel. "O most glorious wonder" (07-03.pdf)
    stichera_lord_i_call: [
      { tone: 8, spec_mel: "O most glorious wonder", text: "The chosen Head Cornerstone * hath been set up in Sion, * the immovable Foundation * whereon the ranks of the martyrs have founded themselves. * With them doth the victorious Hyacinth * shine with heavenly luster. * O Thine ineffable loving-kindness, O Master! * Thereby, O Christ, save Thou our souls, ** in that Thou alone art merciful." },
      { tone: 8, spec_mel: "O most glorious wonder", text: "Thou didst pass through Jerusalem, * the splendid city of God, * like a stone dyed with blood, * clad in the purple robe of suffering, * and now manifestly praying, * dancing and rejoicing, * do thou, by thy supplications, * save those who celebrate ** thy most glorious and sacred memory, O most blessed one." },
      { tone: 8, spec_mel: "O most glorious wonder", text: "Possessed of right acceptable boldness * before Christ the Master, * as an invincible martyr, * and His well-given ear * as a lawful spiritual athlete, * cease not in thine entreaties, O right wondrous one, * to deliver from temptations and evil circumstances * those who keep thy memory, ** and hymn thee faithfully." },
    ],
    stichera_glory_absent: true,  // §2A — verified absent in 07-03.pdf; no saint doxasticon printed (Theotokion T8 follows for Alleluia-Matins option)
    lic_theotokion: null,   // §2A — Both-now = Octoechos theotokion (tone of week)
    troparion: {
      tone: 4,
      text: "Like a fragrant hyacinth of the Church of Christ, O all-blessed Hyacinth, " +
            "you radiate grace to the ends of the world. By the brilliance of your confession of faith, " +
            "you were illustrious in contest in emulation of God the Word " +
            "and you ever illumine those who acclaim you.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Come, you faithful, plait a crown of unfading hyacinths today for the Martyr Hyacinth, " +
            "and let us cry to Him: Rejoice, glory of martyrs.",
    },
  },

  // ── July 14 — St Nicodemus of the Holy Mountain ──────────────────────────
  // Source: St. Sergius 07-01A.pdf. Jul 1 O.S. = Jul 14 N.S. OCA agrees on date.
  // Service rank: Polyeleos (§2E). OCA has two proper troparia; both differ from St. Sergius.
  // troparion = OCA primary (Tone 3); troparion_2 = OCA secondary (Tone 8). // v1

  "07-14": {
    saint: "Venerable Nicodemus of the Holy Mountain",
    oca_primary: true,
    source_file: "07-01A.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    note: "Jul 1 O.S. = Jul 14 N.S. OCA and St. Sergius agree on date. Polyeleos §2E confirmed. " +
          "OCA has two proper troparia (Tone 3 primary, Tone 8 secondary); St. Sergius Tone 1 text set aside.",
    feast_e: "Hebrews 13:17-21",
    feast_g: "Luke 6:17-23",
    prokeimenon_tone: 7,
    prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
    prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
    alleluia_tone: 6,
    alleluia_verse: "Blessed is the man that feareth the Lord; in His commandments shall he greatly delight.",
    alleluia_stichos: "His seed shall be mighty upon the earth.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    paroemia_1: "Wisdom of Solomon — The souls of the righteous are in the hand of God (Wis 3:1-9)",
    paroemia_2: "Wisdom of Solomon — The righteous live for evermore (Wis 5:15-6:3)",
    paroemia_3: "Wisdom of Solomon — Though the righteous be prevented with death (Wis 4:7-15)",
    stichera_lord_i_call_count: 6,  // 3 T4 + 3 T8; §2E polyeleos Great Vespers (07-01A.pdf)
    stichera_lord_i_call: [
      { tone: 4, spec_mel: "As one valiant among the martyrs", text: "As is meet, let us hymn * the divinely eloquent Nicodemus, * the dwelling-place of grace, * the divinely inspired interpreter * who was guided by the Holy Spirit, * the trumpet blown by God, * announcing the word of grace in the world, * the ineffable glory of God ** and immaterial gifts of life." },
      { tone: 4, spec_mel: "As one valiant among the martyrs", text: "O Nicodemus, * whose heart was enlightened by the divine Spirit, * from thy mouth thou didst pour forth * a sea of doctrines upon the Church, * and thereby abundantly irrigate its meadows * with the discourse of the grace given thee, O father, * as David hath said, * bringing joy to the assemblies of the pious ** by thy wisdom." },
      { tone: 4, spec_mel: "As one valiant among the martyrs", text: "Celebrating * thy most holy memory, O Nicodemus, * we hymn thee as a new and radiant lamp * illumining the Church with thy divine words, * as a teacher of piety, * as a divinely wise mouth * of miraculous virtues, * as a preacher of the higher life ** and a harp of most sweet hymns." },
      { tone: 8, spec_mel: "O most glorious wonder", text: "The abundant grace of the most holy Spirit * dwelt within thy soul, O wise one; * and having first cleansed it * with the rewards of the virtues, * it made thee a divine vessel * and a divinely inspired word. * O thine all-wise teachings, * O Nicodemus, ** whereby we are all ever taught the loftier life!", repeatIndex: 3 },
      { tone: 8, spec_mel: "O most glorious wonder", text: "Like a noetic wellspring * thou hast poured forth torrents of doctrines, * sweetening the hearts of the faithful * more than honey, O Nicodemus; * and by thine understandings and works * thou hast been revealed to be * a divinely effulgent coffer and treasury of supreme wisdom, * imparting correction unto all ** who piously follow thy teaching, O Father." },
    ],
    // Note: stichera 4 (T8 first, marked repeatIndex:3) is sung twice per PDF ("Twice") = 6 slots total with 5 unique texts
    stichera_glory: { tone: 6, text: "Today the memorial of Nicodemus, the venerable and heavenly minded teacher, hath shone forth for us like a morning star, enlightening the Church. Come, therefore, ye who love his words, and in spirit and truth let us celebrate, crying out to him: Rejoice, thou who madest thy mind a habitation of the Holy Spirit by thy virtuous life! Rejoice, divinely inspired treasury of wisdom, wherein lieth an inexhaustible wealth of the most divers wisdom! Rejoice, godly scion of Naxos, adornment of the Holy Mountain, and divinely wise instructor of the whole Church! O father, intercede, we pray, on behalf of our souls!" },
    lic_theotokion: { tone: 6, text: "Who doth not call thee blessed, O most holy Virgin? Who will not hymn thy most pure birthgiving? For the only-begotten Son Who hath shone forth timelessly from the Father, came forth, ineffably incarnate, from thee, O pure one; By nature he is God, by nature for our sakes, he hath become a man not divided into two Hypostases, but known in two natures without commingling. Him do thou beseech, O pure and most blessed one, that our souls find mercy!" },
    // Both-now: Dogmatic Theotokion T6 "Who doth not call thee blessed..." printed explicitly in 07-01A.pdf at Great Vespers
    troparion: {
      tone: 3,
      text: "You were adorned with the charism of wisdom, O Father, and appeared as a trumpet of the Spirit, " +
            "and as a teacher of virtue, O Nikodemos who speaks of God, for you have offered to all " +
            "the teaching of salvation and purity of life, pouring forth enlightenment through your writings, " +
            "with which riches you have illumined the world.",
    },
    troparion_2: {
      tone: 8,
      text: "The Orthodox Church honors you as a virtuous member, its finest initiate, and a God-bearing " +
            "teacher of piety; for having received heavenly grace, you shone your inspirational writings " +
            "upon those who cry to you: Rejoice, O Father Nikodemos.",
    },
    kontakion_ode6: {
      tone: 8,
      text: "The Church doth celebrate thee as a most excellent initiate of the mysteries of the life of " +
            "virtue and piety, O God-bearing teacher of Orthodoxy; for receiving gifts from heaven, " +
            "with thy divine writings thou dost illumine those who cry to thee: Rejoice, O father Nicodemus!",
    },
  },

  // ── July 15 — St Juvenal, Patriarch of Jerusalem ─────────────────────────
  // Source: St. Sergius 07-02.pdf. Jul 2 O.S. = Jul 15 N.S. — DIVERGENCE.
  // OCA commemorates Jul 2 N.S.; encoded at 07-15 per OCA primacy.
  // OCA proper troparion used; St. Sergius generic hierarch text replaced.
  // No OCA kontakion provided; St. Sergius kontakion retained.

  "07-15": {
    saint: "St Juvenal, Patriarch of Jerusalem",
    oca_primary: true,
    source_file: "07-02.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "Jul 2 O.S. = Jul 15 N.S. OCA commemorates Jul 2 N.S. — DIVERGENCE; OCA date governs. " +
          "OCA proper troparion used; replaces St. Sergius generic hierarch text. " +
          "Kontakion from St. Sergius — no OCA kontakion provided.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    stichera_lord_i_call_count: 3,  // T1 (no Spec. Mel. in 07-02.pdf); §2A simple
    stichera_lord_i_call: [
      { tone: 1, text: "With hymns let us honor the all-praised Juvenal, who was young in soul, but an elder in understanding, a pastor and teacher, the impregnable rampart of Orthodoxy, the all radiant star of the Church, the father and patriarch of the mother of the Churches." },
      { tone: 1, text: "Thou didst proclaim unto the world the three-Sunned light of Orthodoxy, and thundering greatly against the heretics, thou didst suffer for the sake of the truth, O divinely wise Juvenal; wherefore, we praise thee as is meet." },
      { tone: 1, text: "Having honed the sword of the Word of God to sharpness, thou didst put to shame the impiety of Nestorius, didst denounce the false teaching of Eusebius, and didst make clear the dogmas of Orthodoxy, O most sacred father Juvenal; wherefore, make us steadfast in the apostolic Faith." },
    ],
    stichera_glory: { tone: 6, text: "When the winds of contrary doctrines blew and storms of heresies rose up against the Church, thou wast like an unshakable pillar, O wondrous Juvenal; for, rejecting the false teaching of Eutyches, thou didst confess Christ to be the true God-man, and putting the impiety of Nestorius to shame, thou didst declare unto the world that the Ever-virgin Mary is the true Theotokos. Wherefore, instructed by thee, we cry out unceasingly unto God: Through the Theotokos, have mercy upon us!" },
    lic_theotokion: null,   // §2A — Both-now = Octoechos theotokion (tone of week); Stavrotheotokion T6 in PDF is weekday Both-now option
    troparion: {
      tone: 4,
      text: "O successor of the Brother of the Lord on the archpastoral throne of the holy city of Jerusalem, " +
            "you are worthy of praise. With the divinely-wise Fathers of Chalcedon you expounded the " +
            "Incarnation of the Son of God, Who came to renew the world and to deify all men, united " +
            "with Him in His Church. O Hierarch Father Juvenal, now as you stand before the throne of " +
            "Father of Lights in the Kingdom, pray for those who lovingly honor you, and may the peace " +
            "and mercy of the Savior be with us.",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Assembling now, with hymns let us honor Juvenal, the boast of Jerusalem, the namesake of youth, " +
            "who today hast been translated to the life which waxeth not old, the heir of the apostles, " +
            "fellow initiate of the mysteries with the God-bearing fathers, expounder of the dogmas of " +
            "Orthodoxy, denouncer of false doctrines, the universal teacher of the Truth.",
    },
  },
};

export default JULY_MENAION;
