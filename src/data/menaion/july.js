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
    note: "OCA commemorates Jul 1 N.S. St. Sergius and OCA in agreement on date and texts.",
    feast_e: "1 Corinthians 12:27-13:8",
    feast_g: "Matthew 10:1, 5-8",
    prokeimenon_tone: 4,
    prokeimenon_text: "In the saints that are in His earth hath the Lord been wondrous; He hath wrought all His desires in them.",
    prokeimenon_stichos: "I beheld the Lord ever before me, for He is at my right hand, that I might not be shaken.",
    alleluia_tone: 4,
    alleluia_verse: "Behold, what is so good or so joyous as for brethren to dwell together in unity?",
    alleluia_stichos: "For there the Lord commanded the blessing, life for evermore.",
    communion_verse: "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
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
