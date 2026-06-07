// Menaion data — May
// Source: St. Sergius Menaion (Russian usage) + OCA calendar
// Encoding rule: v2.1 — see encoding_rule_v2_1.md
// Single point of truth — edit this file for may encoding updates

const MAY_MENAION = {
  "05-16": {
    // ── May 16 — St. Theodore the Sanctified, Disciple of St. Pachomius ────
    // No PDF in Drive — General Menaion fallback for Venerable (monastic) type.
    // Troparion: General troparion for a venerable father (below — from OCA).
    // Kontakion: General kontakion for a venerable father (below — from OCA).
    // Stichera: General Menaion for a Venerable (O Glorious Wonder / desert-dweller type).
    // Rank: §2A confirmed — OCA calendar lists Simple rank; no AT LITURGY section expected.
    // Note: May 16 O.S. = May 29 N.S. OCA commemorates May 16 N.S. — DIVERGENCE; OCA governs.
    saint: "St. Theodore the Sanctified, Disciple of St. Pachomius the Great",
    source_file: "05-16.pdf",
    oca_primary: true,
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "alleluia",
    note: "Source: 05-16.pdf. May 16 O.S. = May 29 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A confirmed — 3 Menaion stichera (+ 3 from Pentecostarion = 6 total per §4A Pentecostarion pattern). " +
          "Troparion Tone I from PDF (proper text); replaces OCA Tone VIII generic used in prior encoding. " +
          "No AT LITURGY section — readings from Octoechos. " +
          "Disciple of St. Pachomius; abbot of Tabennisi monastery in Egypt; d. 368.",
    feast_e: null,  // §2A — readings from Octoechos
    feast_g: null,
    // ── LORD I HAVE CRIED — from 05-16.pdf ──────────────────────────────────
    // 3 Menaion stichera Tone VI (Spec. Mel.: "Having set all aside")
    // + 3 from Pentecostarion = 6 total per §4A Pentecostarion pattern
    // Glory/Both now: Doxasticon from Pentecostarion (per PDF rubric)
    aposticha_source: "octoechos",
    stichera_lord_i_call: [
      { tone: 6, spec_mel: "Having set all aside",
        text: "The Master Who of old appointed " +
              "the ascent of the clouds, " +
              "later, having come down into Egypt on the light cloud, " +
              "foretold that His chosen ones would shine forth, " +
              "caught up on the clouds, in that they are divinely wise. " +
              "And with them our father Theodore the sanctified, " +
              "the unshakable pillar, steadfast in virtue, " +
              "shining with the most radiant effulgence of Christ, " +
              "doth pray with boldness on behalf of our souls." },
      { tone: 6, spec_mel: "Having set all aside",
        text: "Egypt, which before was driven insane " +
              "by demonic sacrifices and passions, " +
              "is now adorned with ranks of fasters " +
              "and revealed to be adorned with divers beauties and divine virtues. " +
              "Among them hath shone forth the namesake of divine gifts, " +
              "the venerable Theodore, " +
              "who beheld and pleased God, " +
              "and who, emulating Christ in wondrous humility, " +
              "prayeth with boldness on behalf of our souls." },
      { tone: 6, spec_mel: "Having set all aside",
        text: "From his youth, the wise Theodore, " +
              "the great faster, the divinely wise one, " +
              "showed forth asceticism, abstinence, " +
              "humility, patience, the avoidance of evil " +
              "and the acquisition of the virtues, " +
              "in that he is a lover of divine love, " +
              "and the wondrous one, rejoicing, hath transcended all things visible, " +
              "being exalted by his manner of life; " +
              "and, conversing with God, " +
              "he now prayeth with boldness on behalf of our souls." },
    ],
    stichera_lord_i_call_count: 3,
    stichera_glory: null,  // Glory/Both now from Pentecostarion (per PDF rubric)
    lic_theotokion: null,
    troparion: {
      tone: 1,
      text: "A desert dweller, an angel in the flesh and a wonder-worker " +
            "wast thou revealed to be, O our God-bearing father Theodore. " +
            "Receiving heavenly gifts through fasting, vigils and prayers, " +
            "thou healest the infirm and the souls of those who with faith have recourse unto thee. " +
            "Glory to Him Who hath given thee strength! " +
            "Glory to Him Who hath crowned thee! " +
            "Glory to Him Who through thee worketh healings for all!",
      note: "From 05-16.pdf AT LITURGY — proper Tone I text",
    },
    kontakion_ode6: {
      tone: 2,
      text: "Having abandoned the tumult of life and subdued the passions of the flesh, " +
            "thou didst take up thy cross and hasten to Christ. " +
            "Thou wast a true disciple of the Master: a model for all who seek perfection. " +
            "Therefore we cry to thee: Rejoice, O father Theodore, adornment of monastics!",
    },
  },

  // ── May 17 — Sts Andronicus and Junia the Apostles ──────────────────────
  // Retained from original sample data

  "05-17": {
    // ── May 17 — Holy Apostles Andronicus and Junia (of the Seventy) ────────
    // No PDF in Drive — General Menaion fallback for Holy Apostles type.
    // Note: May 17 O.S. = May 30 N.S. OCA commemorates May 17 N.S. — DIVERGENCE; OCA governs.
    // Rank: §2A confirmed — OCA calendar lists Simple rank.
    saint: "Holy Apostles Andronicus and Junia of the Seventy",
    source_file: "05-17.pdf",
    oca_primary: true,
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "alleluia",
    note: "Source: 05-17.pdf. May 17 O.S. = May 30 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A confirmed — 3 stichera Tone VIII. Glory/Both now from Pentecostarion (per PDF rubric). " +
          "Kontakion from PDF Tone II (proper text naming both Andronicus and Junia). " +
          "Troparion Tone III matches OCA and PDF. No AT LITURGY section — readings from Octoechos. " +
          "Andronicus: kinsman of St. Paul (Romans 16:7). Junia: his fellow laborer, named as apostle.",
    feast_e: null,  // §2A — readings from Octoechos
    feast_g: null,
    // ── LORD I HAVE CRIED — from 05-17.pdf ──────────────────────────────────
    // 3 stichera Tone VIII (Spec. Mel.: "O most glorious wonder")
    // Glory/Both now from Pentecostarion (per PDF rubric)
    aposticha_source: "octoechos",
    stichera_lord_i_call: [
      { tone: 8, spec_mel: "O most glorious wonder",
        text: "As a servant of the Word, " +
              "a glorious minister, " +
              "and most radiant luminary of the whole world, O divinely blessed one, " +
              "thou didst bring an end " +
              "to the irrational corruption of ungodliness by thy word; " +
              "wherefore, with divine words we joyfully glorify and celebrate " +
              "thy holy memory, offering praise to the Almighty." },
      { tone: 8, spec_mel: "O most glorious wonder",
        text: "The divine Apostle Paul, " +
              "splendidly praising you all with divine laudations, " +
              "setting forth your valor before the faithful, " +
              "speaking first of all to show that ye " +
              "are divinely wise disciples of the Word of God and His true kinsmen, " +
              "O glorious Junia and blessed Andronicus, ye favorites of God." },
      { tone: 8, spec_mel: "O most glorious wonder",
        text: "Illumining the whole earth " +
              "with sacred preaching, " +
              "ye dispelled the gloom of vainglory " +
              "and have directed to the light of divine knowledge " +
              "those who from of old were sunk in the darkness of ungodliness, " +
              "O divine apostles, " +
              "ye guides to salvation " +
              "and intercessors for all who ever honor you with faith." },
    ],
    stichera_lord_i_call_count: 3,
    stichera_glory: null,  // Glory/Both now from Pentecostarion (per PDF rubric)
    lic_theotokion: null,
    troparion: {
      tone: 3,
      text: "O holy apostle Andronicus, " +
            "entreat the merciful God " +
            "to grant our souls forgiveness of transgressions.",
    },
    kontakion_ode6: {
      tone: 2,
      spec_mel: "Seeking the highest",
      text: "Let us praise Andronicus, the apostle of Christ, " +
            "the most radiant star who hath illumined the nations " +
            "with the light of divine knowledge, " +
            "and with him the most wise Junia, who shone forth in piety; " +
            "and let us cry aloud: " +
            "Entreat Christ God without ceasing on behalf of our souls!",
      note: "From 05-17.pdf — proper text naming both Andronicus and Junia",
    },
  },

  // ── May 18 — Martyr Theodotus of Ancyra + Seven Holy Virgins + Martyrs Peter, Dionysius et al ──
  // Source: St. Sergius 05-18.pdf. May 18 O.S. = May 31 N.S. — DIVERGENCE.
  // OCA commemorates May 18 N.S.; encoded at 05-18 per OCA primacy.
  // Six-stichera (§2C): 3 stichera Theodotus/Virgins + 3 stichera Peter/Dionysius group.
  // Note: 06-07 Theodotus is a different saint (Hieromartyr Bishop); this is Theodotus the innkeeper.

  "05-18": {
    // ── May 18 — Martyr Theodotus + Seven Holy Virgins + Peter/Dionysius group ──
    // Source: 05-18.pdf. May 18 O.S. = May 31 N.S. — DIVERGENCE; OCA date governs.
    // Six stichera §2C: 3 Theodotus/Virgins Tone I + 3 Peter/Dionysius Tone IV.
    // Glory/Both now from Pentecostarion (rubric in PDF; texts not printed).
    // No AT LITURGY section → readings from Octoechos. Kontakion from Liturgy section.
    saint: "Martyr Theodotus of Ancyra, the Seven Holy Virgins, and Martyrs Peter, Dionysius & companions",
    source_file: "05-18.pdf",
    oca_primary: true,
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "alleluia",
    note: "May 18 O.S. = May 31 N.S. OCA commemorates May 18 N.S. — DIVERGENCE; OCA date governs. " +
          "§2C Six-stichera confirmed from PDF. Primary: Martyr Theodotus of Ancyra (innkeeper) with Seven Virgins. " +
          "Secondary: Martyrs Peter, Dionysius & companions. OCA and St. Sergius texts agree. " +
          "Glory/Both now rubric: 'from the Pentecostarion' — texts assembled from Pentecostarion entry.",
    feast_e: null,  // §2C — readings from Octoechos
    feast_g: null,
    // ── LORD I HAVE CRIED — from 05-18.pdf ──────────────────────────────────
    // 3 stichera Theodotus + Holy Virgins, Tone I (Spec. Mel.: "Joy of the ranks of heaven")
    // + 3 stichera Peter/Dionysius group, Tone IV (Spec. Mel.: "Thou hast given a sign")
    aposticha_source: "octoechos",
    stichera_lord_i_call: [
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "Adorned with a peaceful disposition, " +
              "thou wast chosen in holiness to minister unto all, O most blessed Theodotus, " +
              "and illumined with the crown of suffering, " +
              "thou hast joined chorus in the heavens " +
              "with those who suffered with thee. " +
              "With them pray thou, that we be saved." },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "Having offered thyself to the Lord " +
              "as a sacred vessel, submitting to His words, O divinely blessed one, " +
              "thou didst generously give to the poor, O wise martyr, " +
              "noetically laying up for thyself " +
              "the riches of martyrdom, which cannot be taken away." },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "Behold the river of salvation! Behold the living well-spring, " +
              "which the company of holy virgins hath been shown to be! " +
              "Wherefore, come ye fervently: " +
              "Let us who are sick now draw forth healing, " +
              "and let those in sorrow draw forth joy, " +
              "through the supplications of the holy brides of Christ!" },
      { tone: 4, spec_mel: "Thou hast given a sign",
        text: "Illumined with the radiance " +
              "of the three-Sunned Godhead, " +
              "ye passed through the darkness of tortures " +
              "and have been revealed to be brilliant stars, " +
              "the divine confirmation of the Church, " +
              "ever shedding light, O holy martyrs. " +
              "Wherefore, bowing down before your relics " +
              "and the dust of your bodies, " +
              "we celebrate your resplendent festival." },
      { tone: 4, spec_mel: "Thou hast given a sign",
        text: "O ye faithful, with joy let us all now bless " +
              "Peter and Dionysius, " +
              "Paul, Andrew and Benedimus, " +
              "who were valiant and firm, " +
              "Christina, Heraclius and Paulinus, " +
              "who suffered steadfastly, the three together, " +
              "trampled underfoot all the wiles of the serpent " +
              "and dispelled the darkness of idolatry with grace." },
      { tone: 4, spec_mel: "Thou hast given a sign",
        text: "With your blood, O blessed ones, " +
              "ye purchased the unshakable kingdom of God, " +
              "and ye attained unto the calm havens, " +
              "having endured all the threefold waves of evils " +
              "with manly mind, O ye divinely sanctified ones. " +
              "Wherefore, ye are called blessed " +
              "and are glorified by all, " +
              "pray ye always, that we find mercy " +
              "on the day of judgment." },
    ],
    stichera_lord_i_call_count: 6,
    stichera_glory: null,  // §2C — Glory/Both now from Pentecostarion (per PDF rubric)
    lic_theotokion: null,  // Pentecostarion supplies Both now
    troparion: {
      tone: 4,
      text: "Your holy martyr Theodotus and his companions, O Lord, " +
            "through their sufferings have received incorruptible crowns from You, our God. " +
            "For having Your strength, they laid low their adversaries, " +
            "and shattered the powerless boldness of demons. " +
            "Through their intercessions, save our souls!",
    },
    kontakion_ode6: {
      tone: 2,
      spec_mel: "Seeking the highest",
      text: "Having struggled well as a spiritual athlete, O Theodotus, " +
            "with the spiritual athletes and the passion-bearing virgins " +
            "thou hast received crowns of honor. " +
            "Wherefore, unceasingly entreat Christ God on behalf of us all.",
    },
  },

  // ── May 19 — Hieromartyr Patrick, Bishop of Prusa & companions ───────────
  // Source: St. Sergius 05-19.pdf. May 19 O.S. = June 1 N.S. — DIVERGENCE.
  // OCA commemorates May 19 N.S.; encoded at 05-19 per OCA primacy.
  // Service rank: Simple (§2A). OCA has two troparia; proper hieromartyr text is primary.

  "05-19": {
    saint: "Hieromartyr Patrick, Bishop of Prusa, and his companions",
    oca_primary: true,
    source_file: "05-19.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 19 O.S. = June 1 N.S. OCA commemorates May 19 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple confirmed — 3 stichera Tone VI. OCA primary troparion is the proper hieromartyr text. " +
          "Kontakion matches St. Sergius. Glory/Both now: theotokion Tone VI printed in PDF.",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "alleluia",
    feast_e: null,  // §2A — readings from Octoechos
    feast_g: null,
    aposticha_source: "octoechos",
    // ── LORD I HAVE CRIED — from 05-19.pdf ──────────────────────────────────
    // 3 stichera of the holy hieromartyrs, Tone VI, Spec. Mel.: "Having set all aside"
    stichera_lord_i_call: [
      { tone: 6, spec_mel: "Having set all aside",
        text: "Steered by the Word " +
              "the blessed hieromartyrs " +
              "sailed easily across the threefold waves of the passions, " +
              "and were entrusted with the task " +
              "of healing the sufferings of mortals " +
              "with the waters of fervor. " +
              "Their relics were given sacred burial, " +
              "and richly pour forth healings upon those in need. " +
              "O ye faithful, let us unceasingly honor them as is meet, " +
              "for they pray with boldness on behalf of our souls." },
      { tone: 6, spec_mel: "Having set all aside",
        text: "Wearing purple robes " +
              "dyed in the blood of martyrdom " +
              "and wielding the precious Cross as a scepter, " +
              "the godly martyrs reign with Christ rejoicing, " +
              "having desired willingly to suffer for Him: " +
              "Polyenus manifest in holiness, " +
              "Acacius and Menander, and the divinely wise Patrick. " +
              "And, rejoicing now, " +
              "they stand before the throne of Christ, " +
              "praying with boldness on behalf of our souls." },
      { tone: 6, spec_mel: "Having set all aside",
        text: "Desiring the kingdom of Christ, " +
              "the blessed and valiant ones " +
              "preferred a temporary death as though it were food, " +
              "manfully enduring starvation and the pain of wounds. " +
              "Wherefore, they have become the helpers of all the faithful, " +
              "imparting health in abundance to their souls and bodies. " +
              "O ye faithful, as is meet " +
              "let us now joyfully hymn them, " +
              "for they pray to the Lord on behalf of our souls." },
    ],
    stichera_lord_i_call_count: 3,
    stichera_glory: null,  // §2A — Glory: theotokion from Menaion (Tone VI) printed in PDF
    lic_theotokion: {
      tone: 6,
      text: "From the sea-monster's belly of wicked sin " +
            "do thou lead me up, O Lady, " +
            "who contained the Infinite One in thy womb. " +
            "Deliver me from the cruel waves of temptations, " +
            "and rescue me from the tempest of falls, O Maiden, " +
            "drying up the abyss of mine iniquities, " +
            "and repelling the present hordes of the demons " +
            "by thy divine assistance, O pure one, " +
            "that I may unceasingly glorify thee, the ever-blessed one.",
      note: "Glory and Both now — printed in 05-19.pdf as LIC theotokion (§2A, no separate Glory sticheron)",
    },
    troparion: {
      tone: 4,
      text: "You were arrayed in the beauty of the priesthood, O Patrick, and adorned with the blood " +
            "of martyrdom. As you stand before Christ with those who suffered with you, remember us, " +
            "for you are an honored passion-bearer.",
    },
    troparion_2: {
      tone: 4,
      text: "Your holy martyr Patrick and his companions, O Lord, through their sufferings have " +
            "received incorruptible crowns from You, our God. For having Your strength, they laid low " +
            "their adversaries, and shattered the powerless boldness of demons. " +
            "Through their intercessions, save our souls!",
    },
    kontakion_ode6: {
      tone: 4,
      text: "As one resplendent in the beauty of the priesthood and supremely adorned with the blood " +
            "of martyrdom, standing before Christ with those who suffered with thee, O Patrick, " +
            "be thou mindful of us, in that thou art an honored passion-bearer.",
    },
  },

  // ── May 20 — Holy Martyr Thallelaios (Unmercenary Physician) ─────────────
  // Source: St. Sergius 05-20.pdf. May 20 O.S. = June 2 N.S. — DIVERGENCE.
  // OCA commemorates May 20 N.S.; encoded at 05-20 per OCA primacy.
  // Service rank: Simple (§2A). OCA has proper troparion; differs from St. Sergius.
  // Note: in years when Ascension falls May 20, movable feast takes precedence automatically.

  "05-20": {
    saint: "Holy Martyr Thallelaios, Unmercenary Physician of Aegae",
    oca_primary: true,
    source_file: "05-20.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 20 O.S. = June 2 N.S. OCA commemorates May 20 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple confirmed. OCA proper troparion used; differs from St. Sergius generic martyr text. " +
          "Movable feast deconfliction (e.g. Ascension) handled automatically by the calendar engine. " +
          "3 stichera Tone IV + Glory/Both now theotokion Tone IV from PDF.",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "alleluia",
    feast_e: null,  // §2A — readings from Octoechos
    feast_g: null,
    aposticha_source: "octoechos",
    // ── LORD I HAVE CRIED — from 05-20.pdf ──────────────────────────────────
    // 3 stichera of the holy martyr, Tone IV, Spec. Mel.: "As one valiant among the martyrs"
    stichera_lord_i_call: [
      { tone: 4, spec_mel: "As one valiant among the martyrs",
        text: "When the great turbulence of the lands under heaven " +
              "laid hold of thee, " +
              "and a storm smote thy soul, O all-glorious one, " +
              "steered by thine exalted name as with a rudder " +
              "thou didst traverse unharmed " +
              "the abyss of greatly painful tortures; " +
              "and having attained unto the harbors of the Most High, " +
              "thou wast filled with everlasting calm, O martyr Thalaleus." },
      { tone: 4, spec_mel: "As one valiant among the martyrs",
        text: "Lifted up upon a tree, " +
              "thy side lacerated by the savagery of the torturers, " +
              "thou didst emulate the suffering of the Master of creation, O glorious one; " +
              "and denounce their erroneous thought, " +
              "reviling the delusion of idolatry " +
              "and manifestly strengthening piety, O great-martyr Thalaleus." },
      { tone: 4, spec_mel: "As one valiant among the martyrs",
        text: "At the command of the tyrant " +
              "thou wast committed to the depths of the sea, " +
              "yet through divine grace remained un-drowned, O most wise one; " +
              "and with the torrents of thy blood " +
              "drowned the noetic Pharaoh and his army, O divinely wise one, " +
              "wherefore, strengthened greatly by Christ, " +
              "thou didst commit him to utter destruction." },
    ],
    stichera_lord_i_call_count: 3,
    stichera_glory: null,  // §2A — Glory: theotokion Tone IV from PDF
    lic_theotokion: {
      tone: 4,
      text: "Tens of thousands of times have I promised " +
            "to repent of mine offenses, O most pure one, " +
            "yet the cherished habits of mine evil ways " +
            "will not depart from me; " +
            "wherefore, I cry unto thee and fall down, praying: " +
            "O Sovereign Lady, rescue me from such tyranny, " +
            "guiding me to things that are higher, which are nigh unto salvation.",
      note: "Glory and Both now — theotokion Tone IV printed in 05-20.pdf (§2A pattern)",
    },
    troparion: {
      tone: 4,
      text: "O holy prize-winner and healer Thallelaios, intercede with the merciful God " +
            "that He grant to our souls the forgiveness of our faults.",
    },
    kontakion_ode6: {
      tone: 3,
      text: "Revealed as a fellow contestant with the Martyrs, you were an excellent soldier " +
            "of the King of Glory. Through your trials and torments you humbled the arrogance " +
            "of the idolators. Therefore, we praise your august memory, O wise Thallelaios.",
    },
  },


  // ── May 21 — Holy Equals-of-Apostles Constantine & Helena ────────────────
  // Source: St. Sergius 05-21.pdf. May 21 O.S. = June 3 N.S. — DIVERGENCE.
  // OCA commemorates May 21 N.S.; encoded at 05-21 per OCA primacy.
  // Service rank: Polyeleos (§2E). OCA and St. Sergius texts in full agreement.
  // Dual epistle: Gal 1:11-19 normally; Acts 26:1-5,12-20 during Pentecostarion.
  // Note: in years when Ascension falls on May 21, movable feast overrides this entry.

  "05-21": {
    saint: "Holy Equals-of-Apostles Constantine the Great & Helena",
    oca_primary: true,
    source_file: "05-21.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    note: "May 21 O.S. = June 3 N.S. OCA commemorates May 21 N.S. — DIVERGENCE; OCA date governs. " +
          "§2E Polyeleos confirmed — Great Vespers, Litya, 3 paroemias, Polyeleos, Matins Gospel. " +
          "OCA and St. Sergius texts agree. Dual epistle: Gal 1:11-19 (primary); Acts 26:1-5,12-20 during Pentecostarion. " +
          "Matins Gospel: John 10:9-16 (§36). In years when Ascension falls May 21, movable feast takes precedence. " +
          "v2.1: litya stichera encoded (5 stichera T1/T2/T2/T3/T4 + Glory T5 + Both Now T5). // v0.5.0",
    has_great_doxology: true,   // §2E Polyeleos — Great Doxology sung; printed in PDF
    has_polyeleos: true,
    has_litya: true,             // Litya stichera printed in PDF
    has_paroemias: true,         // 3 paroemias confirmed: 3 Kings 8, Isaiah 61, Isaiah 60
    magnificat_sung: true,       // §2E — Magnificat sung
    matins_format: "god_is_the_lord",
    matins_gospel: "John 10:9-16 (§36) — I am the door; the good shepherd giveth his life",
    feast_e_pentecostarion: "Acts 26:1-5, 12-20 (§49) — Paul before Agrippa; I am Jesus whom thou persecutest",
    aposticha_source: "menaion",  // Vespers aposticha from Menaion (already encoded above)
    feast_e: "Galatians 1:11-19",
    feast_g: "John 10:1-9",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "I have raised up one chosen out of My people; I have found David My servant.",
    alleluia_stichos: "O Lord, in Thy strength the king shall be glad, and in Thy salvation shall he rejoice exceedingly.",
    communion_verse: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
    paroemia_1: "3 Kings 8:22-23, 27-30 — Solomon's prayer at temple dedication",
    paroemia_2: "Isaiah 61:10-62:5 — robe of salvation; Zion's righteousness as a lamp",
    paroemia_3: "Isaiah 60:1-14 — Be enlightened O Jerusalem; kings shall walk in thy light",
    troparion: {
      tone: 8,
      text: "Beholding the image of Thy Cross in the sky, and like Paul receiving a call not from men, " +
            "Thine apostle among kings placed the imperial city in Thy hands, O Lord. " +
            "Do Thou ever preserve it in peace, through the supplications of the Theotokos, " +
            "O Thou Who alone lovest mankind.",
    },
    kontakion_ode6: {
      tone: 3,
      text: "Today Constantine and his mother Helena have revealed the Cross, the most precious Tree, " +
            "which putteth to shame all the Jews and is the weapon of faithful kings against the adversary. " +
            "For our sake the great standard hath appeared, terrible in battle.",
    },

    // ── AT VESPERS: LORD I HAVE CRIED ──────────────────────────────────────
    // Structure: 3 from Pentecostarion + 5 from Menaion. §2E = 8 stichera total.
    // The 3 Pentecostarion stichera come from the Octoechos/Pentecostarion path.
    // The 5 Menaion stichera are encoded here (slots 4-8 in the interleave).
    // Texts: PDF gives 3 distinct texts; first two sung twice each = 5 total.
    // Source: 05-21.pdf
    stichera_lord_i_call_count: 8,
    stichera_lord_i_call: [
      { tone: 4,
        text: "Thou didst give a most mighty weapon to our emperor: Thy precious Cross, " +
              "whereby he reigned all the earth in righteousness, shining forth in piety, " +
              "and hath been deemed worthy of the kingdom of heaven by Thy loving-kindness. " +
              "And with him do we glorify Thy loving dispensation, O almighty Jesus, " +
              "Thou Savior of our souls." },
      { tone: 4,
        text: "Thou didst give a most mighty weapon to our emperor: Thy precious Cross, " +
              "whereby he reigned all the earth in righteousness, shining forth in piety, " +
              "and hath been deemed worthy of the kingdom of heaven by Thy loving-kindness. " +
              "And with him do we glorify Thy loving dispensation, O almighty Jesus, " +
              "Thou Savior of our souls.",
        repeat: true },
      { tone: 4,
        text: "Thou didst give to thy pious favorite, O Lover of mankind, " +
              "the wisdom of Solomon, the meekness of David and the Orthodoxy of the apostles, " +
              "in that Thou art the King of kings and Lord of lords. " +
              "Wherefore, we glorify Thy loving dispensation, O almighty Jesus, " +
              "Thou Savior of our souls." },
      { tone: 4,
        text: "Thou didst give to thy pious favorite, O Lover of mankind, " +
              "the wisdom of Solomon, the meekness of David and the Orthodoxy of the apostles, " +
              "in that Thou art the King of kings and Lord of lords. " +
              "Wherefore, we glorify Thy loving dispensation, O almighty Jesus, " +
              "Thou Savior of our souls.",
        repeat: true },
      { tone: 4,
        text: "Thou wast the first to subject the royal purple willingly to Christ, " +
              "O ever-memorable emperor, acknowledging Him as God, " +
              "the Benefactor of all Who reigneth over all, " +
              "the Victor over every principality, transcending all dominion. " +
              "Wherefore, O thou who lovest Christ, " +
              "Jesus Who is the Lover of mankind, the Savior of our souls, " +
              "hath appointed thee as ruler." },
    ],
    stichera_glory: {
      tone: 2,
      text: "Receiving from God the highest of rich gifts, O most mighty and all-great Constantine, " +
            "thou didst prosper well therein; for, having been illumined through baptism " +
            "with the rays of the most holy Spirit by the holy hierarch Sylvester, " +
            "thou wast shown to be invincible among kings, " +
            "and as a gift didst give to thy Creator thine empire and the pious imperial city. " +
            "Wherefore, as thou hast boldness, cease thou never to pray to Christ God, " +
            "that He grant forgiveness of sins and great mercy unto all who keep thy memory.",
    },
    // Both Now: from Pentecostarion (handled at runtime by assembler)

    // ── AT VESPERS: LITIYA ──────────────────────────────────────────────────
    // Source: 05-21.pdf — "At Litiya, the Sticheron of the temple, and these Stichera"
    // 5 stichera in Tones I, II, II, III, IV + Glory T5 + Both Now T5
    litya_stichera: [
      { tone: 1,
        text: "As is meet, we celebrate thy memory, O Constantine, equal of the apostles, " +
              "thou foundation and boast of all kings; for, illumined by the rays of the Spirit, " +
              "thou didst enlighten the whole Church of Christ, gathering together assemblies " +
              "of the faithful from everywhere in the city of Nicaea, where the audacity of the " +
              "impious was extinguished and the tongues of the heretics grew weak and foolish, " +
              "while the crown of the Orthodox was exalted when the Faith was revealed. Hence, " +
              "thou hast been glorified, as one supreme in Orthodoxy, and proclaimed to be the " +
              "father of all kings, being the first to receive thy robe of royal purple from God. " +
              "Wherefore, we who celebrate thy memory entreat thee with faith: " +
              "ask thou cleansing of transgressions for our souls." },
      { tone: 2,
        text: "Thou didst not receive thy name from men, but, like the divine Paul, " +
              "obtained it from Christ God on high, O most glorious Constantine. For, beholding " +
              "the sign of the Cross in the sky, thou wast thereby caught as goodly prey, " +
              "and therein hast thou been shown to be an invincible victor over enemies " +
              "visible and invisible. Wherefore, we on earth entreat thee as a fervent advocate, " +
              "that in thy boldness thou ask for us enlightenment, forgiveness and great mercy." },
      { tone: 2,
        text: "The memory of the pious Constantine hath shone forth today, poured forth " +
              "like myrrh; for, desiring Christ, he spurned the idols, raising up a temple " +
              "on the earth to Him Who was crucified for our sake; and in the heavens " +
              "receiving the crown of hope." },
      { tone: 3,
        text: "Passing through the age of thy youth, like the godly Paul thou didst " +
              "receive a divine gift from on high, and with the full armor of the Cross " +
              "didst set at naught the warring of the cruel adversary. O apostle Constantine, " +
              "thou boast of kings, pray thou to the Lord on our behalf, " +
              "that our souls may be saved." },
      { tone: 4,
        text: "Praise is sung to God by lips of clay on the day of thy divine memorial, " +
              "O all-praised Constantine; for thou wast shown to be a most excellent warrior " +
              "of the word of faith, reviling the carven faces of the idols. And now thou hast " +
              "found rest in the effulgence of the Trinity, illumining our thoughts " +
              "by thine entreaties." },
    ],
    litya_glory: {
      tone: 5,
      text: "Adorned by thy might, O emperor, the Church mystically rejoiceth today, " +
            "and honoreth thy most precious memory as is meet with all praise, crying aloud: " +
            "Rejoice, O thou who didst emulate Paul, taking up the Cross of Christ " +
            "and crushing the snares of the adversary! Rejoice, O most excellent among emperors, " +
            "equal in honor to the apostles! Rejoice, thou confirmation of the faithful " +
            "and mighty bulwark of kings! O blessed Constantine, thou adornment of kings, " +
            "cease thou never to pray to the Lord on our behalf, in that thou hast boldness.",
    },
    litya_both_now: {
      tone: 5,
      text: "Rejoice holy mountain upon which God hath walked; " +
            "Rejoice! living bush unconsumed by fire; " +
            "Rejoice! O only bridge of creation to God, " +
            "who leadeth mortals to eternal life; " +
            "Rejoice! Maiden undefiled, " +
            "who hath born without wedlock the salvation of our souls.",
      note: "Theotokion — from Pentecostarion during Pentecostarion season",
    },

    // ── AT VESPERS: APOSTICHA ─────────────────────────────────────────────
    // Source: 05-21.pdf — Tone II Spec. Mel. "When from the Tree..."
    stichera_aposticha: [
      { tone: 2,
        text: "O Constantine, thou wast the first emperor among Christians " +
              "to receive thy scepter from God; " +
              "for the sign of salvation, which was hidden in the earth, " +
              "was revealed to thee, whereby thou didst subdue all nations " +
              "beneath the feet of the Romans, " +
              "in that thou didst have the life-creating Cross " +
              "as thine invincible weapon, O blessed one, " +
              "whereby thou wast brought to our God." },
      { tone: 2,
        verse: "I have raised up one chosen out of My people; I have found David My servant.",
        text: "Truly blessed and hallowed is the womb which bore thee, " +
              "O peace-loving emperor, divinely crowned Constantine, " +
              "thou joy of Christians, glory of the Romans, " +
              "wealth and champion of orphans and widows, " +
              "protection of the lowly, correction of those who are in confusion and sorrow, " +
              "and true deliverance of captives." },
      { tone: 2,
        verse: "Wherefore God, thy God, hath anointed Thee with the oil of gladness.",
        text: "Wounded by desire and love for Christ, the mother of the all-sweet offspring " +
              "arrived with haste in holy Sion, at the holy place " +
              "wherein our Savior was voluntarily crucified for our salvation; " +
              "and there, taking up the Cross, she cried aloud, rejoicing: " +
              "Glory to Him Who hath given me that for which I hoped!" },
    ],
    aposticha_glory: {
      tone: 8,
      text: "The most radiant light, the royal and never-waning star, " +
            "passing from unbelief to faith in the Godhead, " +
            "was led to sanctify his people and city; " +
            "and, beholding the image of the Cross in the sky, " +
            "he heard a voice therefrom say: By this conquer thine enemies! " +
            "Wherefore, receiving the understanding of the Spirit as a renowned priest and king, " +
            "with oil thou hast established the Church of God, O father, " +
            "thou glory of Orthodox kings, whose shrine poureth forth healing. " +
            "O Constantine, equal of the apostles, pray thou for our souls.",
    },
    // Both now at aposticha — from Pentecostarion: appointed Theotokion T2
    // (Ascension-period theotokion per 05-21.pdf rubric; same text as P+39/P+40/P+41/P+42)
    aposticha_both_now: { tone: 2,
      text: "The shadow of the law hath passed now that grace hath come, " +
            "for as the Bush wrapped in flame was not consumed, " +
            "so didst thou bear a Child O Virgin and remained a Virgin; " +
            "in place of a pillar of fire, the Sun of righteousness hath dawned, " +
            "instead of Moses, Christ is come, the salvation of our souls.",
    },

    // ── AT TYPICA: BEATITUDES ─────────────────────────────────────────────
    // Source: 05-21.pdf AT LITURGY — "8 Troparia: 4 from the appointed Ode of the
    // Pentecostarion canon, and 4 from Ode VI of the canon of the righteous ones."
    // The 4 Pentecostarion troparia come from the governing week's canon (P+19 = Ode IV).
    // The 4 Menaion troparia (Ode VI) are printed in the PDF and encoded here.
    beatitudes_source: "4 from Pentecostarion Ode IV + 4 from Ode VI of Constantine & Helena canon (05-21.pdf)",
    beatitudes_ode: 6,  // Ode VI of the Menaion canon
    beatitudes_count: 4, // 4 from Menaion + 4 from Pentecostarion = 8 total
    beatitudes_troparia: [
      { text: "Most gloriously didst thou assemble the divine choir of the God-bearing fathers, " +
              "O Constantine, and through them make steadfast the storm-tossed hearts of all, " +
              "that they might glorify the Word as equal in honor " +
              "and co-enthroned with the One Who begat Him." },
      { text: "Having believed on the living Lord Who giveth life unto all, O Helena, " +
              "thou didst spurn the abominable worship of vain idols " +
              "and joyously received the kingdom of heaven." },
      { text: "Guided by Thy hand, O Word, through Thee the sovereigns " +
              "thrust aside the most profound darkness of ignorance " +
              "and the tempest of cruel godlessness, " +
              "and arrived, rejoicing, at the calm havens of piety." },
      { label: "Theotokion",
        text: "Heal thou my heart, which hath grown incurably sick " +
              "and hath been grievously wounded by the sting of the evil one, O Maiden, " +
              "and by thine entreaties grant healing unto me, " +
              "and save me who trust in thee, O most pure one." },
    ],
  },


  // ── May 22 — Holy Martyr Basiliscus ──────────────────────────────────────────
  // Source: St. Sergius 05-22.pdf. May 22 O.S. = June 4 N.S. — DIVERGENCE.
  // OCA commemorates May 22 N.S.; encoded at 05-22 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. OCA and St. Sergius texts agree.

  "05-22": {
    saint: "Holy Martyr Basiliscus of Comana",
    oca_primary: true,
    source_file: "05-22.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // PDF rubric: "if Alleluia is sung INSTEAD of God is the Lord" — confirming God is the Lord is the norm
    note: "May 22 O.S. = June 4 N.S. OCA commemorates May 22 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple confirmed — 3 stichera on Lord I Call. Nephew of Greatmartyr Theodore the Recruit (Feb 17). " +
          "OCA and St. Sergius texts agree on both troparion and kontakion. " +
          "No AT LITURGY section in PDF — §2A; cycle readings govern. " +
          "Aposticha from Octoechos (§2A weekday); only Menaion Glory sticheron provided but during " +
          "Pentecostarion the Pentecostarion doxasticon governs — no Menaion aposticha doxasticon used. " +
          "v2: complete encoding per new encoding rule — stichera, doxasticon, theotokion added. // v0.3.5",
    // §2A — no feast proper readings; cycle lectionary governs
    feast_e: null,
    feast_g: null,
    troparion: {
      tone: 4,
      text: "Your holy martyr Basiliscus, O Lord, through his suffering has received an incorruptible " +
            "crown from You, our God. For having Your strength, he laid low his adversaries, " +
            "and shattered the powerless boldness of demons. " +
            "Through his intercessions, save our souls!",
    },
    kontakion_ode6: {
      tone: 8,
      text: "You were shown to be strong and courageous in suffering; " +
            "you were revealed to be a wonder-worker in miracles! " +
            "You openly bore the name of Christ, putting the tyrant to shame! " +
            "Therefore we honor you, most honored Basiliscus, " +
            "ever crying: \"Rejoice, splendid adornment of the martyrs!\"",
    },
    // ── VESPERS — LORD I HAVE CRIED ──────────────────────────────────────────
    // Source: 05-22.pdf. 3 stichera, Tone IV. Spec. Mel.: "As one valiant among the martyrs"
    stichera_lord_i_call: [
      { tone: 4, text: "Reigning like a king, thou didst receive the kingdom which abideth forever, " +
                       "O glorious Basiliscus, and standing before the King of hosts, " +
                       "thou dost rejoice with all the ranks of angels. " +
                       "And with them, O blessed one, thou dost unceasingly chant divine hymnody, " +
                       "radiantly illumined by splendors and divine communion." },
      { tone: 4, text: "When, rejoicing, thou didst walk the path of martyrdom, O most praised one, " +
                       "they pierced thy feet with nails, binding them fast; " +
                       "and therewith thou didst trample upon the head of the enemy " +
                       "and utterly crushing it, O glorious one, thou didst tread mightily " +
                       "the paths of heaven, revealing thyself to the Master as victorious." },
      { tone: 4, text: "Thy supplication first caused a barren tree to put forth fruit, " +
                       "and a spring put forth living water; " +
                       "by the fountain of thy blood the earth was sanctified, " +
                       "and the air was hallowed by the passage of thy soul, O most noetically rich martyr. " +
                       "Wherefore, with faith, O Basiliscus, we celebrate thy holy and most festive feast-day, " +
                       "whereon thou didst struggle lawfully." },
    ],
    // Glory…Both now…Theotokion — Tone IV (PDF: "Glory…Both now…Theotokion in Tone IV")
    // During Pentecostarion the doxasticon at Lord I Call is supplied by the Pentecostarion (lic_theotokion),
    // not from the Menaion; this theotokion serves ordinary time (Apostles' Fast and beyond).
    stichera_glory: null, // §2A: no separate doxasticon in the Menaion; Glory goes to Both now
    lic_theotokion: {
      tone: 4,
      text: "Tens of thousands of times have I promised to repent of mine offenses, O most pure one, " +
            "yet the cherished habits of mine evil ways will not depart from me; " +
            "wherefore, I cry unto thee and fall down, praying: " +
            "O Sovereign Lady, rescue me from such tyranny, " +
            "guiding me to things that are higher, which are nigh unto salvation.",
    },
    // ── VESPERS — APOSTICHA ───────────────────────────────────────────────────
    // §2A: aposticha from Octoechos. No Menaion aposticha stichera.
    // Menaion provides no aposticha stichera text. Octoechos weekday aposticha govern.
    aposticha_source: "octoechos",
    // ── MATINS ───────────────────────────────────────────────────────────────
    // Canon in Tone VIII. No beatitudes troparia specified for §2A.
  },

  // ── May 23 — Venerable Father Michael the Confessor, Bishop of Synada ────────
  // Source: St. Sergius 05-23.pdf. May 23 O.S. = June 5 N.S. — DIVERGENCE.
  // OCA commemorates May 23 N.S.; encoded at 05-23 per OCA primacy.
  // Service rank: Six-stichera (§2C) — 3 from Pentecostarion + 3 Menaion = 6 total.
  // OCA troparion (Tone 4 proper) differs from St. Sergius PDF which has no Vespers troparion rubric.
  // OCA kontakion matches St. Sergius exactly.

  "05-23": {
    saint: "Venerable Father Michael the Confessor, Bishop of Synada",
    oca_primary: true,
    source_file: "05-23.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord", // PDF rubric: "if this day fall during the fast and Alleluia is sung instead" — confirming norm
    note: "May 23 O.S. = June 5 N.S. OCA commemorates May 23 N.S. — DIVERGENCE; OCA date governs. " +
          "§2C six-stichera confirmed: 3 Menaion + 3 Pentecostarion stichera at Lord I Call. " +
          "OCA proper troparion (Tone 4) used — St. Sergius PDF has no troparion at Vespers rubric. " +
          "Kontakion matches. Exiled by Leo the Armenian for venerating icons; reposed c. 821. " +
          "Glory…Both now at Lord I Call = Doxasticon from Pentecostarion (PDF explicit). " +
          "No AT LITURGY section — §2C; cycle readings govern. " +
          "Aposticha from Octoechos (§2C weekday); no Menaion aposticha. " +
          "v2: complete encoding per new encoding rule — stichera added. // v0.3.5",
    feast_e: null,
    feast_g: null,
    troparion: {
      tone: 4,
      text: "From your youth you dedicated your life to God, " +
            "and you were proclaimed shepherd and hierarch of Christ, holy Michael. " +
            "You endured afflictions and exile because you honored the icon of Christ; " +
            "now you pour forth healings for us all.",
    },
    kontakion_ode6: {
      tone: 8,
      text: "As a most honorable hierarch and champion of true piety, " +
            "undaunted by fear of the notorious tyrant, " +
            "you conquered his heretical opposition, freely proclaiming in a loud voice: " +
            "\"I venerate the icon of Christ and of His all-pure Mother!\" " +
            "Therefore, we honor you, O Michael!",
    },
    // ── VESPERS — LORD I HAVE CRIED ───────────────────────────────────────────
    // Source: 05-23.pdf. 3 Menaion stichera Tone VIII. Spec. Mel.: "O most glorious wonder"
    // The other 3 slots come from the Pentecostarion (handled by assembly engine, §4A3 rule).
    stichera_lord_i_call: [
      { tone: 8, text: "O blessed and divinely inspired father Michael, as is meet, thou hast been deemed worthy " +
                       "to behold the Well-spring of blessings, the Fulfillment of the desire for the uttermost desires, " +
                       "the true Blessedness which all nature truly desireth. " +
                       "O thy beauteous comeliness, O glorious one! " +
                       "Rejoicing therein, thou standest now before Christ as a radiant hierarch." },
      { tone: 8, text: "Arrayed in priestly vesture, O God-pleasing father Michael, thou didst hasten to the tribunal " +
                       "of the tyrant and offer thyself to Christ; and, adorned with twofold crowns, O blessed one, " +
                       "thou didst look upon the ranks of the hierarchy. " +
                       "O thine ineffable gladness, O most wise one, " +
                       "in which thou wast truly deemed worthy to share, O divinely blessed one." },
      { tone: 8, text: "Bedewed from on high, O divinely wise father Michael, thou didst divinely quench " +
                       "the fire of temptations and pass through it unharmed; " +
                       "and, rejoicing, O blessed hieromartyr, thou wast splendidly added to the holy hierarchs " +
                       "who went before thee. O thine ineffable and radiant habitation " +
                       "wherein Christ hath now caused thee to dwell as an honored hierarch!" },
    ],
    // Glory…Both now = Doxasticon from Pentecostarion (PDF explicit: "Glory…Both now…Doxasticon from the Pentecostarion")
    // The Pentecostarion entry supplies this — no Menaion doxasticon here.
    stichera_glory: null, // Pentecostarion doxasticon governs; see note
    lic_theotokion: {
      // Fallback theotokion if Pentecostarion does not supply one (ordinary time / Apostles' Fast):
      tone: 8,
      text: "That I may magnify thee with joyful voice, O pure one, " +
            "and glorify the depth of thy love for mankind, " +
            "save me from misfortunes and rescue me from the soul-destroying darts " +
            "of the invisible and most wicked foe; " +
            "for I set thee against him as a firm and invincible weapon, " +
            "O divine Bride, Mother of Christ God.",
    },
    // ── VESPERS — APOSTICHA ────────────────────────────────────────────────────
    // §2C: aposticha from Octoechos. No Menaion aposticha stichera for §2C.
    aposticha_source: "octoechos",
  },

  // ── May 24 — Venerable Symeon of the Wondrous Mountain (Stylites the Younger) ─
  // Source: St. Sergius 05-24.pdf. May 24 O.S. = June 6 N.S. — DIVERGENCE.
  // OCA commemorates May 24 N.S.; encoded at 05-24 per OCA primacy.
  // Service rank: Polyeleos (§2E) — 6 stichera, full AT LITURGY section present in PDF.
  // OCA and St. Sergius texts agree on troparion and kontakion.
  // PAROEMIAS NOTE: No OT paroemias section found in 05-24.pdf — unusual for §2E.
  //   The PDF goes directly from Vespers to Matins with no "AT VESPERS LESSONS" block.
  //   Possibly a shorthand edition variant or this saint's office omits them.
  //   FLAGGED: check General Menaion / full text edition. Leaving paroemia fields absent.

  "05-24": {
    saint: "Venerable Symeon Stylites the Younger of the Wondrous Mountain",
    oca_primary: true,
    source_file: "05-24.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    has_great_doxology: false,
    has_polyeleos: true,
    has_litya: false,  // §2E — no Litya in 05-24.pdf
    has_paroemias: false,  // NOT IN PDF — unusual for §2E; absent from 05-24.pdf; flagged
    magnificat_sung: true,  // §2E Polyeleos
    matins_format: "god_is_the_lord",
    matins_gospel: "Matthew 11:27-30 (§43) — all things delivered unto Me of My Father",
    note: "May 24 O.S. = June 6 N.S. OCA commemorates May 24 N.S. — DIVERGENCE; OCA date governs. " +
          "Polyeleos §2E confirmed — 6 stichera (×2 each of 3 stichera), Aposticha, full AT LITURGY. " +
          "OCA and St. Sergius texts agree on troparion and kontakion. " +
          "Born 521 in Antioch; stylite for 68 years on the Wondrous Mountain near Antioch. " +
          "PAROEMIAS: No OT paroemias found in 05-24.pdf — unusual for §2E. Flagged for verification. " +
          "Beatitudes: 8 troparia (4 from Pentecostarion Ode + 4 from Ode III of saint's canon). " +
          "Aposticha: Octoechos stichera with one Menaion Glory sticheron (Tone VI, Germanus). " +
          "v2: complete encoding per new encoding rule. // v0.3.5",
    feast_e: "Colossians 3:12-16 (§258)",
    feast_g: "Matthew 11:27-30 (§43)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
    alleluia_tone: 6,
    alleluia_verse: "Blessed is the man that feareth the Lord; in His commandments shall he greatly delight.",
    alleluia_stichos: "His seed shall be mighty upon the earth.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    // §2E — paroemias absent from PDF; flagged for verification
    paroemia_1: null,
    paroemia_2: null,
    paroemia_3: null,
    troparion: {
      tone: 1,
      text: "Dweller of the desert and angel in the body, " +
            "you were shown to be a wonder-worker, our God-bearing Father Simeon. " +
            "You received heavenly gifts through fasting, vigil, and prayer: " +
            "healing the sick and the souls of those drawn to you by faith. " +
            "Glory to Him who gave you strength! " +
            "Glory to Him who granted you a crown! " +
            "Glory to Him who through you grants healing to all!",
    },
    kontakion_ode6: {
      tone: 2,
      text: "You longed for the things on high, turning away from those below. " +
            "You built a pillar on which you lived as if in heaven, " +
            "shining with the splendor of miracles, venerable Simeon, " +
            "and unceasingly praying for us all to Christ, the God of all.",
    },
    // ── VESPERS — LORD I HAVE CRIED ───────────────────────────────────────────
    // Source: 05-24.pdf. 6 stichera Tone VIII. Spec. Mel.: "O most glorious wonder"
    // PDF rubric: first and second stichera each sung twice (×2), third sung twice = 6 total.
    stichera_lord_i_call: [
      { tone: 8, text: "Like an inscribed pillar, O most noetically rich Symeon, " +
                       "by visions and thine activity, thou didst give birth in thy soul to the fullness of the virtues; " +
                       "and having vanquished the uprisings of the flesh " +
                       "and arrayed thyself in life-bearing mortality, O venerable one; " +
                       "thou didst become a luminary ever shining forth, " +
                       "enlightening with grace all the ends of the earth." },
      { tone: 8, text: "Like an inscribed pillar, O most noetically rich Symeon, " +
                       "by visions and thine activity, thou didst give birth in thy soul to the fullness of the virtues; " +
                       "and having vanquished the uprisings of the flesh " +
                       "and arrayed thyself in life-bearing mortality, O venerable one; " +
                       "thou didst become a luminary ever shining forth, " +
                       "enlightening with grace all the ends of the earth." },
      { tone: 8, text: "Taking wing with divine desire, while yet bearing the flesh and clad in dust, " +
                       "thou didst manifestly become a dweller with the angels, " +
                       "having forsaken earthly things and ascended to the heavenly, O father, " +
                       "ever mounting to God on thy lofty pillar, and shining forth in thine ascents." },
      { tone: 8, text: "Taking wing with divine desire, while yet bearing the flesh and clad in dust, " +
                       "thou didst manifestly become a dweller with the angels, " +
                       "having forsaken earthly things and ascended to the heavenly, O father, " +
                       "ever mounting to God on thy lofty pillar, and shining forth in thine ascents." },
      { tone: 8, text: "Having broken down the flesh by abstinence, O Symeon, " +
                       "thou didst show forth thy soul as a receptacle of the Spirit, " +
                       "mounting on high and drawing nigh unto God; " +
                       "and by His power thou wast deemed worthy to work miracles transcending nature. " +
                       "Wherefore, thy most divine activity hath surpassed all understanding and thought." },
      { tone: 8, text: "Having broken down the flesh by abstinence, O Symeon, " +
                       "thou didst show forth thy soul as a receptacle of the Spirit, " +
                       "mounting on high and drawing nigh unto God; " +
                       "and by His power thou wast deemed worthy to work miracles transcending nature. " +
                       "Wherefore, thy most divine activity hath surpassed all understanding and thought." },
    ],
    // Glory — Doxasticon, Tone VI (PDF: "Glory…in Tone VI")
    stichera_glory: {
      tone: 6,
      text: "O right wondrous father, thou hast been shown to be a goodly offspring of the desert and our ally; " +
            "for therein thou didst find thy desire, the heights of heaven, " +
            "and wast deemed worthy of the grace of healing from the treasuries of the Spirit which cannot be stolen. " +
            "Wherefore, Christ hath enriched thee with both, and shown thee to be a worker of wonders. " +
            "O venerable Symeon, pray thou that our souls be saved.",
    },
    // Both now — Theotokion (PDF: "Both now…Theotokion, or this Stavrotheotokion")
    // The Theotokion is the standard; the Stavrotheotokion is alternate for weekdays of the Cross.
    // During the Pentecostarion the Pentecostarion supplies the Both Now.
    lic_theotokion: null, // PDF gives only Stavrotheotokion; Both Now during Pentecostarion from Pentecostarion
    // ── VESPERS — APOSTICHA ───────────────────────────────────────────────────
    // PDF: "On the Aposticha, the Stichera of the day [one Menaion sticheron], and Glory…[Germanus, Tone II]"
    // Structure: Octoechos aposticha stichera (not encoded here) + one Menaion Glory sticheron.
    aposticha_source: "octoechos_with_menaion_glory",
    stichera_aposticha: [
      // Octoechos supplies the 3 aposticha stichera — not captured here (Octoechos table governs)
      // PDF provides only the Glory sticheron:
    ],
    aposticha_glory: {
      tone: 2,
      text: "Having ascended the lofty wondrous mountain and entered into the impenetrable as an honored tabernacle, " +
            "through excellent activity thou didst show forth the ascent of vision. " +
            "Wherefore, having illumined thy life, adorned with iron chains as with golden coins, " +
            "beholding God and being seen by Him, and conversing in solitude with Him alone, " +
            "entreat Him, O honored Symeon, on behalf of our souls.",
      attribution: "Germanus",
    },
    // Both now after aposticha: Stavrotheotokion Tone II (from PDF)
    aposticha_both_now: {
      tone: 2,
      text: "The Ember which the glorious Isaiah foresaw of old hath become incarnate of the Mother " +
            "who knew not a man, springing forth at the behest of the Father, " +
            "and having been born, was slain of His own will, " +
            "taking away the transgressions of the world, like an unblemished Lamb. " +
            "Wherefore, the ewe-lamb and Virgin, beholding Him upon the Cross, was pierced with the sword of grief.",
      note: "Stavrotheotokion (Cross-Theotokion) — used on weekdays; plain Theotokion on other days",
    },
    // ── MATINS ────────────────────────────────────────────────────────────────
    // Beatitudes: 8 troparia — 4 from Pentecostarion Ode + 4 from Ode III of saint's canon
    beatitudes_source: "4 from Pentecostarion Ode + 4 from Ode III of saint's canon (05-24.pdf, AT LITURGY)",
    beatitudes_troparia: [
      // From Ode III of the saint's canon (05-24.pdf):
      "From earliest infancy thou didst grow to be an excellent ascetic and an ardent lover of divine beauty; " +
      "wherefore, the Master, foreknowing thee from thy mother's womb, sanctified thee, O most glorious father Symeon.",
      "Growing in wisdom from childhood with true understanding, O venerable father and wonderworker, " +
      "thou wast thyself deemed worthy to behold the unapproachable Spirit surrounded by the heavenly hosts.",
      "Having illumined the senses of thy soul with awesome vision, O venerable father Symeon, " +
      "thou didst acquire a wondrous understanding of that which is good, " +
      "and didst show forth a blameless life to those who did not possess one.",
      // Theotokion of Ode III:
      "Having made Thine abode within the Virgin, O Lord, Thou didst appear unto men, " +
      "in that it was fitting that they behold Thee; " +
      "and Thou didst show her to be the true Theotokos and helper of the faithful, O Thou Who alone lovest mankind.",
    ],
  },

  // ── May 25 — Third Finding of the Head of the Holy Forerunner John ───────────
  // Source: St. Sergius 05-25.pdf. May 25 O.S. = June 7 N.S. — DIVERGENCE.
  // OCA commemorates May 25 N.S.; encoded at 05-25 per OCA primacy.
  // Service rank: Polyeleos (§2E) — Great Vespers, Litya, 3 paroemias, Polyeleos, Matins Gospel.
  // OCA troparion (Tone 4) matches St. Sergius.
  // OCA kontakion (Tone 4) DIVERGES from St. Sergius (Tone 6). OCA text governs.
  // Stichera note: 8 during Pentecostarion (3+5), 6 in Apostles' Fast — rank §2E regardless.
  // ── May 25 — Third Finding of the Head of St. John the Baptist ───────────────
  // Source: St. Sergius 05-25.pdf. May 25 O.S. = June 7 N.S. — DIVERGENCE.
  // OCA commemorates May 25 N.S.; encoded at 05-25 per OCA primacy.
  // Service rank: Polyeleos (§2E) — Great Vespers, Blessed is the Man, Entrance,
  //   3 paroemias, Litya, Polyeleos, Matins Gospel (Lk §31 / 7:17-30).
  // STICHERA COUNT: 8 during Pentecostarion (3+5), 6 during Apostles' Fast (all Menaion).
  // KONTAKION NOTE: PDF kontakion = Tone VI (finding kontakion, St. Sergius);
  //   OCA kontakion = Tone IV (different text); OCA governs → Tone IV used. // v0.3.7

  "05-25": {
    saint: "Third Finding of the Precious Head of the Holy Prophet, Forerunner and Baptist John",
    oca_primary: true,
    source_file: "05-25.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    has_great_doxology: true,
    has_polyeleos: true,
    has_litya: true,
    has_paroemias: true,  // §2E — 3 paroemias confirmed in 05-25.pdf
    aposticha_source: "menaion",  // Aposticha from Menaion (finding stichera)
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    note: "May 25 O.S. = June 7 N.S. OCA commemorates May 25 N.S. — DIVERGENCE; OCA date governs. " +
          "§2E Polyeleos: Great Vespers, Blessed is the Man, Entrance, 3 paroemias, Litya, Polyeleos, Matins Gospel. " +
          "OCA kontakion (Tone 4) differs from St. Sergius finding kontakion (Tone 6); OCA text governs. " +
          "Stichera count varies: 8 (3+5) in Pentecostarion, 6 in Apostles' Fast (all from Menaion, repeating as needed). " +
          "v2: complete re-encode — stichera, aposticha, beatitudes, flags added. " +
          "v2.1: litya fields added (empty — no dedicated Litiya stichera in PDF). // v0.5.0",
    feast_e: "2 Corinthians 4:6-15 (§176)",
    feast_g: "Matthew 11:2-15 (§40)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
    alleluia_tone: 5,
    alleluia_verse: "A light hath dawned for the righteous man, and gladness for the upright of heart.",
    alleluia_stichos: "Truth is sprung up out of the earth, and righteousness hath looked down from heaven.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    paroemia_1: "Isaiah 40:1-8, 10-11 — voice crying in wilderness; Comfort my people",
    paroemia_2: "Malachi 3:1-3, 5-7, 12; 4:4-6 — Behold I send my messenger; Elijah before the great day",
    paroemia_3: "Wisdom 4:7, 16-17; 5:1-7, 15 — the righteous shall stand in boldness",
    matins_gospel: "Luke 7:17-30 (§31) — the report of Jesus went forth; John's disciples sent to ask",
    troparion: {
      tone: 4,
      text: "As a divine treasure hidden in the ground " +
            "was your head revealed to us by Christ, O prophet and forerunner. " +
            "We have gathered in commemoration of this finding " +
            "with inspired hymns of praise to the Savior, " +
            "Who saves us from corruption through your prayers!",
    },
    // OCA kontakion Tone IV governs (differs from St. Sergius Tone VI finding kontakion)
    kontakion_ode6: {
      tone: 4,
      text: "By giving your venerable head to a sinful woman, " +
            "Herod broke the law of God. " +
            "But we behold it and cry out for joy, " +
            "and say to you, O forerunner: " +
            "Pray to the Lord that He may grant mercy to us all!",
    },
    // ── VESPERS — LORD I HAVE CRIED ────────────────────────────────────────────
    // Source: 05-25.pdf. 5 Menaion stichera Tone VIII. Spec. Mel.: "O most glorious wonder"
    // During Pentecostarion: 3 Pentecostarion + 5 Menaion = 8 total (PDF explicit).
    // During Apostles' Fast: 6 Menaion stichera (repeating as needed).
    stichera_lord_i_call: [
      { tone: 8, text: "O blessed forerunner John, shedding rays brighter than those of the sun, " +
                       "thy head hath shone forth from the ground and illumined the faithful. " +
                       "Possessing it as a divine treasure, we draw forth rich grace therefrom, " +
                       "hallowing our souls, bodies and thoughts; and celebrating, we call thee blessed." },
      { tone: 8, text: "Pouring forth abundant grace, O blessed forerunner, " +
                       "thy sacred head was shown to the divinely wise priest all unaware; " +
                       "and he, hastening with faith and grace, manifestly accomplished its arrival, " +
                       "sanctified with the emperor and the divinely wise people, " +
                       "who fervently maintain the Orthodox Faith." },
      { tone: 8, text: "We celebrate the third revelation of thy precious head, " +
                       "which, when it was severed, O glorious one, was crowned by the Trinity " +
                       "because of thy godly zeal. " +
                       "The ranks of the angels, the company of martyrs, the divine apostles and all the prophets " +
                       "rejoice in its discovery. With them be thou ever mindful of us, O thou forerunner of the Lord!" },
      // §4A3: 5 stichera needed; PDF lists 3 with rubric "repeating as necessary"
      // Standard repeat order: 1,2,3,1,2 — repeat from the beginning
      { tone: 8, repeatIndex: 0 },  // repeat of sticheron 1 ("O blessed forerunner John...")
      { tone: 8, repeatIndex: 1 },  // repeat of sticheron 2 ("Pouring forth abundant grace...")
    ],
    // Glory — doxasticon Tone VI (Menaion)
    stichera_glory: {
      tone: 6,
      text: "The divinely preserved head, a treasury of divine gifts, O forerunner, " +
            "hath shone forth from the bosom of the earth; " +
            "and we, faithfully receiving and bowing down before it, O glorious one, " +
            "are enriched by thee with most glorious miracles and the forgiveness of our sins, " +
            "O Baptist of Christ.",
    },
    // Both now — Pentecostarion doxasticon during Pentecostarion; Dogmaticon Tone VI in Apostles' Fast
    lic_theotokion: null, // Pentecostarion doxasticon governs during Pentecostarion
    // ── VESPERS — LITIYA ───────────────────────────────────────────────────────
    // has_litya: true (Polyeleos §2E), but neither St. Sergius nor RLE PDF prints
    // dedicated Litiya stichera for this date. The Litiya petitions (fixed text) are
    // served; stichera at the Litiya reuse Lord I Have Cried hymns or temple sticheron.
    litya_stichera: [],  // empty — no dedicated stichera in Menaion PDF
    litya_glory: null,   // no dedicated Glory at Litiya in PDF
    litya_both_now: null, // no dedicated Both Now at Litiya in PDF
    // ── VESPERS — APOSTICHA ─────────────────────────────────────────────────────
    // Source: 05-25.pdf. Aposticha stichera of the finding Tone I. Spec. Mel.: "Joy of the ranks..."
    stichera_aposticha: [
      { tone: 1, verse: null,
        text: "Come ye, and with splendor let us celebrate the divine feast; " +
              "for the baptizer of the Lord, the lampstand of the Light, " +
              "the voice of the Word, the friend of the Bridegroom, " +
              "the great beacon of the Truth, hath appeared, showing us his holy head." },
      { tone: 1, verse: "There will I make to spring forth a horn for David, I have prepared a lamp for My Christ.",
        text: "Because of Herod's commission of the abomination of incest " +
              "and his adulterous impurity, thou didst denounce the iniquitous one, " +
              "in that thou art a preacher of purity, O forerunner, " +
              "and thy head was cut off, which, through the grace of thy miraculous deeds " +
              "hath now been revealed to the faithful." },
      { tone: 1, verse: "Remember, O Lord, David and all his meekness.",
        text: "O ye who love the feasts of the Church, let us joyfully utter praise, " +
              "receiving the head of the forerunner which hath been revealed by God, " +
              "as a treasury of gifts pouring forth miracles " +
              "like a divinely-flowing well-spring of grace arising from the bosom of the earth." },
    ],
    aposticha_glory: {
      tone: 2,
      text: "Like a most precious abode of divine thoughts, thy head, O all-praised John, " +
            "hath shone forth today from the secret places of the earth, as from thy mother's womb, " +
            "for it clearly foresaw the mystery of the ineffable Being; " +
            "and it hath rendered the whole earth fragrant, emitting the myrrh of sanctification, " +
            "noetically proclaiming the way of repentance " +
            "and entreating the Savior of all on behalf of our souls.",
    },
    // Both now after aposticha: Pentecostarion doxasticon during Pentecostarion;
    // Theotokion Tone II in Apostles' Fast (from PDF)
    aposticha_both_now: {
      tone: 2,
      text: "O new wonder greater than all the wonders of old! " +
            "For who hath ever known a mother to give birth without having known a man, " +
            "and to bear on her arm Him Who sustaineth all creation? " +
            "Yet it was the will of God to be born. O most pure one, " +
            "who carried Him as an infant in Thine embrace " +
            "and before Whom thou hast a mother's boldness: " +
            "cease not to pray on behalf of those who honor thee, " +
            "that He have compassion and save our souls.",
      note: "Used in Apostles' Fast; during Pentecostarion, Pentecostarion doxasticon governs Both now",
    },
    // ── BEATITUDES ──────────────────────────────────────────────────────────────
    // Source: 05-25.pdf AT LITURGY: "8 Troparia from Odes III & VI of the canon"
    beatitudes_source: "8 troparia from Odes III and VI of the canon of the forerunner (05-25.pdf)",
    beatitudes_troparia: [
      // Ode III:
      "Given to the wanton woman because of her voluptuous dancing, thy sacred head was carried in her hands; " +
      "but now it is borne chastely and with reverence into the holy church in the hands of a priest.",
      "The concourse of the faithful, the emperor and the priest, greet thee piously, O glorious forerunner, " +
      "chanting with joy, and they go before thee with love, sanctified by thy coming.",
      "Thy most sacred head, shining forth like the radiant sun out of the sacred precincts, " +
      "hath illumined the whole world with divine splendors, O prophet and forerunner of Christ.",
      // Ode VI:
      "In truth, the head of him who baptized Thee, O Christ, shining forth from the earth, " +
      "hath dispelled the bitter winter of heresy and illumined the world. " +
      "Draw ye forth enlightenment, divine grace and mercy.",
      "And sanctify your heads and souls, touching the head of the forerunner of grace, " +
      "who touched the head of God in the waters of the Jordan.",
      "Pray thou, O forerunner, that the heads of our enemies be crushed beneath the feet " +
      "of all Orthodox Christians who lovingly honor thy precious head which denounced Herod.",
      // Theotokion Ode VI:
      "Thou didst proclaim to those in hell the light of Him Who came forth from the Virgin's womb " +
      "and clothed Himself in flesh, becoming a man for the benefit of men, O blessed forerunner.",
    ],
  },

  // ── May 26 — Holy Apostle Carpus of the Seventy ───────────────────────────────
  // Source: St. Sergius 05-26.pdf. May 26 O.S. = June 8 N.S. — DIVERGENCE.
  // OCA commemorates May 26 N.S.; encoded at 05-26 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera, no AT LITURGY section.
  // OCA troparion adds Alphaeus as co-commemorated; St. Sergius addresses Carpus alone.
  // OCA kontakion matches St. Sergius in substance.
  // ── May 26 — Holy Apostle Carpus of the Seventy ──────────────────────────────
  // Source: St. Sergius 05-26.pdf. May 26 O.S. = June 8 N.S. — DIVERGENCE.
  // OCA commemorates May 26 N.S.; encoded at 05-26 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera, no AT LITURGY section.
  // v2: complete re-encode — stichera, flags, kontakion corrected. // v0.3.7

  "05-26": {
    saint: "Holy Apostle Carpus of the Seventy",
    oca_primary: true,
    source_file: "05-26.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    note: "May 26 O.S. = June 8 N.S. OCA commemorates May 26 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA troparion names Carpus and Alphaeus together; " +
          "St. Sergius troparion (Tone III) names Carpus only. OCA text governs. " +
          "Bishop of Verria in Macedonia; one of the Seventy Apostles. " +
          "Glory+Both now at LIC = Pentecostarion doxasticon (PDF explicit). " +
          "v2: complete re-encode — stichera added, kontakion corrected to St. Sergius text. // v0.3.7",
    feast_e: null,
    feast_g: null,
    troparion: {
      tone: 3,
      text: "Holy Apostles Carpus and Alphaeus, " +
            "entreat the merciful God " +
            "to grant our souls forgiveness of transgressions.",
    },
    kontakion_ode6: {
      tone: 4,
      text: "Illumined by the great outpouring of thy miracles, " +
            "the Church hath ever acquired thee, O Apostle Carpus, " +
            "as a most radiant star. " +
            "Save those who with faith honor thy memory.",
    },
    stichera_lord_i_call: [
      { tone: 1, text: "Making thy mind divine with pleasing effulgence, " +
                       "thou wast enlightened, O most noetically rich apostle, " +
                       "and didst go forth to preach Christ, teaching the people to worship Him " +
                       "as the Lover of mankind. " +
                       "And now, do thou make supplication, " +
                       "that He grant unto our souls peace and great mercy." },
      { tone: 1, text: "Revealed as a most radiant star, with divine splendors and doctrines " +
                       "thou dost ever illumine the ends of the whole world, O blessed one, " +
                       "and by grace dost dispel the gloom of affliction from everyone. " +
                       "And now, do thou make supplication, " +
                       "that He grant unto our souls peace and great mercy." },
      { tone: 1, text: "Making the perfect and un-bloody sacrifice unto God, " +
                       "thou wast slain for Him, O martyr, " +
                       "and didst offer thyself upon the noetic altar " +
                       "as a sacrifice of sweet savor, O most noetically rich Apostle Carpus. " +
                       "And now, do thou make supplication, " +
                       "that He grant unto our souls peace and great mercy." },
    ],
    stichera_glory: null,   // Pentecostarion doxasticon governs (PDF explicit)
    lic_theotokion: null,   // Pentecostarion governs
    aposticha_source: "octoechos",
  },

  // ── May 27 — Holy Hieromartyr Therapont + Righteous John the Russian (multi-service) ─
  // Source: St. Sergius 05-27.pdf (Therapont) + 05-27A.pdf (John the Russian).
  // May 27 O.S. = June 9 N.S. OCA commemorates both on May 27 N.S. — DIVERGENCE; OCA date governs.
  // Multi-service array: [Therapont §2A, John the Russian §2F vigil].
  // John the Russian is the primary/superior service.

  "05-27": [
    {
      // ── Service 1: Holy Hieromartyr Therapont ──────────────────────────────────
      // Source: 05-27.pdf. Rank: Simple (§2A) — 3 stichera, no AT LITURGY section.
      // OCA troparion (Tone 4 hieromartyr) — no troparion rubric in St. Sergius PDF.
      // Kontakion: absent from both OCA page and St. Sergius PDF. Flagged. Secondary service.
      // v2: stichera, flags added. // v0.3.7
      saint: "Holy Hieromartyr Therapont, Bishop of Cyprus",
      oca_primary: true,
      source_file: "05-27.pdf",
      rank: "simple",
      fekula_section: "2A",
      has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
      magnificat_sung: false,
      matins_format: "god_is_the_lord",
      note: "May 27 O.S. = June 9 N.S. OCA commemorates May 27 N.S. — DIVERGENCE; OCA date governs. " +
            "§2A simple — 3 stichera. OCA proper troparion (Tone 4) used; St. Sergius PDF has no troparion rubric. " +
            "Kontakion absent from both OCA and St. Sergius — flagged for future resolution. " +
            "Secondary service; John the Russian §2F is primary. " +
            "v2: stichera added. // v0.3.7",
      feast_e: null,
      feast_g: null,
      troparion: {
        tone: 4,
        text: "By sharing in the ways of the Apostles, " +
              "you became a successor to their throne. " +
              "Through the practice of virtue, you found the way to divine contemplation, O inspired one of God; " +
              "by teaching the word of truth without error, you defended the Faith, " +
              "even to the shedding of your blood. " +
              "Hieromartyr Therapon, entreat Christ God to save our souls.",
      },
      kontakion_ode6: {
        tone: null,
        text: "absent — not found in OCA or St. Sergius for this date; flagged for future resolution.",
      },
      // ── VESPERS — LORD I HAVE CRIED ──────────────────────────────────────────
      // Source: 05-27.pdf. 3 stichera Tone VIII. Spec. Mel.: "Thy martyrs, O Lord"
      stichera_lord_i_call: [
        { tone: 8, text: "The all-glorious Therapont, illumined by divine acts, " +
                         "was deemed worthy to behold the beauty of Christ with the eyes of his heart, " +
                         "having pleased Him by his suffering. " +
                         "Wherefore, by grace he ever healeth sufferings of soul and body " +
                         "for those who have recourse unto him with faith." },
        { tone: 8, text: "As a well-spring of living water the most noetically rich Therapont " +
                         "poureth forth streams of healings and utterly washeth away " +
                         "the defilement of grievous ailments from all who have recourse to him with faith. " +
                         "By his entreaties, O Lord, grant unto all great mercy." },
        { tone: 8, text: "The wondrous Therapont, soaked in the dye of his blood, " +
                         "fashioned a truly most splendid garment of sanctity; " +
                         "and arraying himself magnificently therein, " +
                         "he hath entered the Holy of holies. " +
                         "Through his supplications, O Lord, grant great mercy unto all." },
      ],
      // Glory+Both now: Theotokion Tone VIII (PDF: "Glory…Both now…Theotokion in Tone VIII")
      stichera_glory: null,  // §2A — no separate doxasticon; Glory goes to Both now
      lic_theotokion: {
        tone: 8,
        text: "My thoughts are impure, and my lips are false, all my works are defiled. " +
              "What, then, shall I do? How shall I meet the Judge? " +
              "O Virgin Sovereign Lady, entreat the Lord, thy Son and Creator, " +
              "that He accept my soul in repentance, in that He alone is compassionate.",
      },
      aposticha_source: "octoechos",
    },
    {
      // ── Service 2: Righteous Confessor John the Russian ──────────────────────
      // Source: 05-27A.pdf. Rank: Vigil (§2F) — Great Vespers, 8 stichera, Litya, 3 paroemias,
      // Great Doxology, Polyeleos, Matins Gospel (Lk 12:8-12 §64), full AT LITURGY.
      // OCA troparion (shorter form, Tone 4) matches St. Sergius shorter troparion.
      // OCA kontakion (Tone 4, Ode 3) matches St. Sergius primary kontakion.
      // St. Sergius also has a Tone 8 kontakion (Ode 6) — stored as dormant data.
      saint: "Righteous Confessor John the Russian",
      oca_primary: true,
      source_file: "05-27A.pdf",
      rank: "vigil",
      fekula_section: "2F",
      note: "May 27 O.S. = June 9 N.S. OCA commemorates May 27 N.S. — DIVERGENCE; OCA date governs. " +
            "§2F Vigil: Great Vespers, 8 stichera (3 Pentecostarion + 5), Litya, 3 paroemias, " +
            "Great Doxology, Polyeleos, Matins Gospel. Primary service on this date. " +
            "Captured by Turks c. 1711; lived as a slave in Asia Minor; reposed c. 1730. " +
            "Relics at Neon Prokopion, Euboea, Greece. OCA and St. Sergius texts agree.",
      feast_e: "Galatians 5:22-6:2 (§213)",
      feast_g: "Luke 6:17-23 (§24)",
      prokeimenon_tone: 7,
      prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
      prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
      alleluia_tone: 6,
      alleluia_verse: "Blessed is the man that feareth the Lord; in His commandments shall he greatly delight.",
      alleluia_stichos: "His seed shall be mighty upon the earth.",
      communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
      paroemia_1: "Wisdom 3:1-9 — souls of the righteous are in the hand of God",
      paroemia_2: "Wisdom 5:15-6:3 — the righteous live for evermore; their reward is with the Lord",
      paroemia_3: "Wisdom 4:7-15 — though the righteous be prevented with death, yet shall he be in rest",
      troparion: {
        tone: 4,
        text: "He Who called you from earth into the heavenly abodes " +
              "keeps your body incorrupt even after your death, O righteous John; " +
              "for you were taken as a prisoner into Asia " +
              "where you also won Christ as your friend. " +
              "Therefore, entreat Him that our souls may be saved.",
      },
      kontakion_ode6: {
        tone: 4,
        text: "O Righteous Father John, " +
              "the holy memory of your illustrious contests has come today, " +
              "gladdening the souls of those who honor you with reverence and faith.",
      },
    },
  ],

  // ── May 28 — St. Nicetas, Bishop of Chalcedon ────────────────────────────────
  // Source: St. Sergius 05-28.pdf. May 28 O.S. = June 10 N.S. — DIVERGENCE.
  // OCA commemorates May 28 N.S.; encoded at 05-28 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. OCA and St. Sergius texts agree.
  // ── May 28 — Saint Nicetas, Bishop of Chalcedon ─────────────────────────────
  // Source: St. Sergius 05-28.pdf. May 28 O.S. = June 10 N.S. — DIVERGENCE.
  // OCA commemorates May 28 N.S.; encoded at 05-28 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. No AT LITURGY epistle/gospel.
  // Kontakion: St. Sergius Tone VIII full text; OCA paraphrase in substance agrees.
  //   OCA text governs per encoding rule; St. Sergius full text noted in Drive record.
  // Canon also commemorates his kinsman St. Ignatius (mentioned in Ode VI).
  // v2: stichera, flags, feast_e→null added. // v0.3.7

  "05-28": {
    saint: "Saint Nicetas, Bishop of Chalcedon",
    oca_primary: true,
    source_file: "05-28.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    note: "May 28 O.S. = June 10 N.S. OCA commemorates May 28 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA and St. Sergius texts agree in substance on troparion and kontakion. " +
          "Confessor under Leo the Armenian; exiled for venerating icons. " +
          "Canon also commemorates his kinsman St. Ignatius. " +
          "v2: stichera added, feast_e/g corrected to null. // v0.3.7",
    feast_e: null,
    feast_g: null,
    troparion: {
      tone: 4,
      text: "In truth you were revealed to your flock as a rule of faith, " +
            "an image of humility and a teacher of abstinence; " +
            "your humility exalted you; your poverty enriched you. " +
            "Hierarch Father Nicetas, " +
            "entreat Christ our God that our souls may be saved.",
    },
    kontakion_ode6: {
      tone: 8,
      text: "You shone with the splendor of your deeds, venerable Nicetas. " +
            "You became an heir to the throne of the apostles. " +
            "Completely filled, O Father, with the teachings of God, you shone like the sun upon your flock. " +
            "Therefore we cry out to you: \"Rejoice, beauty of Chalcedon.\"",
    },
    // ── VESPERS — LORD I HAVE CRIED ────────────────────────────────────────────
    // Source: 05-28.pdf. 3 stichera Tone IV. Spec. Mel.: "As one valiant among the martyrs"
    // Glory+Both now: theotokion Tone IV (PDF — "Glory…Both now…Theotokion, in Tone IV")
    stichera_lord_i_call: [
      { tone: 4, text: "Emulating the hospitality of Abraham, Isaac's love for God " +
                       "and the guilelessness of Jacob, " +
                       "thou didst emulate also the suffering of Job of Uz, " +
                       "the meekness of David and the innocence of Moses, " +
                       "and having been anointed with holy chrism as Aaron was of old, " +
                       "O God-bearing hierarch, thou wast manifest as a sacred wonder-worker." },
      { tone: 4, text: "Thy great innocence dispelled the malice of the demons " +
                       "with the grace of the divine Spirit, " +
                       "gladdening with thy suffering God, Whom thou didst desire, " +
                       "and thy spirit was illumined by the indwelling of prayer. " +
                       "Wherefore, thou hast received the grace of miracles, " +
                       "to heal the infirmities, O Nicetas, " +
                       "of those who piously have recourse unto thee." },
      { tone: 4, text: "Bound by kinship, ye kept the laws of the Holy Spirit, O ye priests, " +
                       "and, following the steps of the divinely wise Shepherd " +
                       "Who emitted rays of most glorious healings, " +
                       "ye were adorned similarly with the power of healing, " +
                       "O most glorious Nicetas and divinely wise Ignatius." },
    ],
    stichera_glory: null,  // §2A — no separate doxasticon
    lic_theotokion: {
      tone: 4,
      text: "Tens of thousands of times have I promised to repent of mine offenses, O most pure one, " +
            "yet the cherished habits of mine evil ways will not depart from me; " +
            "wherefore, I cry unto thee and fall down, praying: " +
            "O Sovereign Lady, rescue me from such tyranny, " +
            "guiding me to things that are higher, which are nigh unto salvation.",
    },
    aposticha_source: "octoechos",
  },

  // ── May 29 — Holy Martyred Virgin Theodosia ──────────────────────────────────
  // Source: St. Sergius 05-29.pdf. May 29 O.S. = June 11 N.S. — DIVERGENCE.
  // OCA commemorates May 29 N.S.; encoded at 05-29 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. No AT LITURGY section.
  // OCA troparion and kontakion both differ from St. Sergius. OCA texts govern.
  // OCA carries Theodosia on Apr 3 and May 29 — same saint; OCA Apr 3 texts used for May 29 N.S.
  // v2: stichera, flags, feast_e→null added. // v0.3.7

  "05-29": {
    saint: "Holy Martyred Virgin Theodosia of Tyre",
    oca_primary: true,
    source_file: "05-29.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    note: "May 29 O.S. = June 11 N.S. OCA commemorates May 29 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA troparion (Tone 4) and kontakion (Tone 4) " +
          "both differ from St. Sergius texts; OCA texts govern. " +
          "OCA also commemorates Theodosia on Apr 3 with the same texts. " +
          "Martyred at Constantinople under Constantine Copronymus for defending holy icons. " +
          "v2: stichera added, feast_e/g corrected to null. // v0.3.7",
    feast_e: null,
    feast_g: null,
    troparion: {
      tone: 4,
      text: "Through your struggles in the contest, " +
            "you offered the God-given gift of your virginity to the Word; " +
            "therefore, He brought you to the heavenly Bridal Chamber. " +
            "O prize-winner, intercede with the Master of all, " +
            "that He may deliver us from all manner of misfortunes.",
    },
    // OCA kontakion Tone IV governs; St. Sergius Tone II text is different (see Drive record).
    kontakion_ode6: {
      tone: 4,
      text: "As a pure virgin and prize-winner, " +
            "you were spiritually betrothed to the King of Heaven, " +
            "O all-praised Theodosia, entreat Him for the salvation of our souls.",
    },
    // ── VESPERS — LORD I HAVE CRIED ────────────────────────────────────────────
    // Source: 05-29.pdf. 3 stichera Tone VIII. Spec. Mel.: "O most glorious wonder"
    // Glory+Both now: theotokion Tone VIII (PDF — "Glory…Both now…Theotokion, in Tone VIII")
    stichera_lord_i_call: [
      { tone: 8, text: "Shining with the radiance of virginity, O honored Theodosia, " +
                       "and splendidly adorned with a royal robe dyed in the blood of martyrdom, " +
                       "O all-wise one, thou didst make thine abode in the heavenly bridal-chamber of Christ, " +
                       "rejoicing with the angelic ranks in perpetual chorus, " +
                       "O glorious and all-immaculate maiden." },
      { tone: 8, text: "O virgin martyr, all-praised Theodosia, " +
                       "desiring Christ with all thy soul, thou didst endure the wounds of martyrdom, " +
                       "courageously enduring lacerations for Him Whom thou didst love, " +
                       "thy sides raked with iron claws. " +
                       "O the steadfast opposition of thy struggles, " +
                       "whereby thou didst truly cast the prideful one down to the ground!" },
      { tone: 8, text: "Splendidly adorned with beauty of body and soul, " +
                       "thou didst bring thyself to Christ, " +
                       "desiring to be crowned by Him with a wreath of glory, " +
                       "O all-glorious martyr Theodosia, " +
                       "manifestly receiving upon thy brow, as is meet, " +
                       "the truly priceless diadem of the kingdom, " +
                       "having been shown to be an incorrupt bride, O thou who art divinely wise." },
    ],
    stichera_glory: null,  // §2A — no separate doxasticon
    lic_theotokion: {
      tone: 8,
      text: "Let me magnify thee with joyful cries, O pure one, " +
            "and glorify the abyss of thy love for mankind. " +
            "Save me from misfortunes, " +
            "and rescue me from the soul-destroying darts " +
            "of the invisible and most evil foe; " +
            "for I wield thee against him as a firm and invincible weapon, " +
            "O divine Bride, Mother of Christ God.",
    },
    aposticha_source: "octoechos",
  },

  // ── May 30 — Venerable Isaacius, Abbot of the Monastery of Dalmatus ──────────
  // Source: St. Sergius 05-30.pdf. May 30 O.S. = June 12 N.S. — DIVERGENCE.
  // OCA commemorates May 30 N.S.; encoded at 05-30 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. AT LITURGY: kontakion only (no epistle/gospel).
  // St. Sergius PDF has no troparion rubric at Vespers; OCA standard venerable Tone 8 text used.
  // OCA kontakion matches St. Sergius exactly.
  // v2: stichera, flags, feast_e→null added. // v0.3.7

  "05-30": {
    saint: "Venerable Isaacius, Abbot of the Monastery of Dalmatus",
    oca_primary: true,
    source_file: "05-30.pdf",
    rank: "simple",
    fekula_section: "2A",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    note: "May 30 O.S. = June 12 N.S. OCA commemorates May 30 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. St. Sergius PDF has no troparion rubric; " +
          "OCA standard venerable Tone 8 troparion used. Kontakion matches St. Sergius. " +
          "Confronted Emperor Valens over Arianism; prophesied his defeat at Adrianople (378). " +
          "Also commemorated Aug 3 with Dalmatus and Faustus. " +
          "v2: stichera added, feast_e/g corrected to null. // v0.3.7",
    feast_e: null,
    feast_g: null,
    troparion: {
      tone: 8,
      text: "The image of God was truly preserved in you, O Father, " +
            "for you took up the Cross and followed Christ. " +
            "By so doing you taught us to disregard the flesh for it passes away " +
            "but to care instead for the soul, since it is immortal. " +
            "Therefore your spirit, venerable Isaac, rejoices with the angels.",
    },
    kontakion_ode6: {
      tone: 8,
      text: "As a faithful favorite of God you became enflamed with zeal for the Church of Christ " +
            "and drew in the reins of the emperor Valens, O venerable one; " +
            "you prophetically foretold to him the captivity of the Church and of his own wretched death. " +
            "Therefore, venerable Isaac, ceaselessly pray for us who honor you.",
    },
    // ── VESPERS — LORD I HAVE CRIED ────────────────────────────────────────────
    // Source: 05-30.pdf. 3 stichera Tone I. Spec. Mel.: "Joy of the ranks of heaven"
    // Glory+Both now: theotokion Tone I (PDF — "Glory…Both now…Theotokion, in Tone I")
    stichera_lord_i_call: [
      { tone: 1, text: "Beholding the beauties of paradise, " +
                       "and richly delighting in the flowers of incorruption, " +
                       "thou didst pour forth for the world the knowledge of God, " +
                       "partaking whereof with spiritual love, " +
                       "O venerable Isaacius, we cause our souls to grow." },
      { tone: 1, text: "Protecting thy body with abstinence, O father, " +
                       "with thy prayers and vigils thou didst mortify the uprisings of the passions. " +
                       "Wherefore, the power of the Spirit within thee, covering thee, " +
                       "showed thee to be a noetic and universal luminary." },
      { tone: 1, text: "Shining forth upon the city from the desert like unto the sun, O father, " +
                       "thou didst adorn the monastic life; " +
                       "wherefore, with thy teachings thou hast enlightened the faithful " +
                       "to bless the Father and the Son, and the consubstantial Spirit." },
    ],
    stichera_glory: null,  // §2A — no separate doxasticon
    lic_theotokion: {
      tone: 1,
      text: "Having stumbled through my corrupt character, I lie prostrate, " +
            "yet do I hasten to thy tranquility, O Virgin. " +
            "Deliver me from the adverse tempest and multifarious temptations, " +
            "that I may unceasingly hymn thy grace, O Ever-virgin Mother and Theotokos.",
    },
    aposticha_source: "octoechos",
  },

  // ── May 31 — Holy Martyr Hermias ──────────────────────────────────────────────
  // Source: St. Sergius 05-31.pdf. May 31 O.S. = June 13 N.S. — DIVERGENCE.
  // OCA commemorates May 31 N.S.; encoded at 05-31 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. AT LITURGY: troparion and kontakion only.
  // OCA troparion matches St. Sergius. OCA kontakion (Tone 2 generic) differs from St. Sergius (Tone 6 proper).

  "05-31": {
    saint: "Holy Martyr Hermias of Comana",
    oca_primary: true,
    source_file: "05-31.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 31 O.S. = June 13 N.S. OCA commemorates May 31 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera Tone I (Spec. Mel. Joy of the ranks of heaven). " +
          "OCA troparion matches St. Sergius (Tone 4 generic martyr). " +
          "OCA kontakion (Tone 2 generic) differs from St. Sergius proper Tone 6; OCA governs. " +
          "Martyred at Comana, Cappadocia under Antoninus Pius (138-161); an aged veteran soldier. " +
          "Glory/Both now: Theotokion Tone I printed in PDF (§2A pattern).",
    has_great_doxology: false,
    has_polyeleos: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,
    matins_format: "alleluia",
    feast_e: null,  // §2A — readings from Octoechos
    feast_g: null,
    aposticha_source: "octoechos",
    // ── LORD I HAVE CRIED — from 05-31.pdf ──────────────────────────────────
    // 3 stichera of the holy martyr, Tone I, Spec. Mel.: "Joy of the ranks of heaven"
    stichera_lord_i_call: [
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "Having extinguished the fire of ungodliness " +
              "with the drops of thy blood, O great martyr, " +
              "thou hast richly given drink to the Church of Christ " +
              "and illumined the hearts of the faithful " +
              "who piously honor thy sacred and precious memory." },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "Like an impregnable tower " +
              "thou wast in nowise shaken by the assaults of the enemy, " +
              "whose hearts thou didst pierce as with arrows, O Hermias, " +
              "casting down all their wiles like an undefeatable rampart " +
              "with the pain of thy valiant struggles." },
      { tone: 1, spec_mel: "Joy of the ranks of heaven",
        text: "Raising up with the word of God " +
              "those who had stumbled into the abyss of unbelief, " +
              "thou didst endure the great threefold billows of torments, " +
              "O most praised passion-bearer Hermias, " +
              "until thou didst joyously enter with them " +
              "into the harbor of heaven." },
    ],
    stichera_lord_i_call_count: 3,
    stichera_glory: null,  // §2A — Glory: theotokion Tone I printed in PDF
    lic_theotokion: {
      tone: 1,
      text: "Having fallen headlong because of my corrupt character, I lie prostrate, " +
            "yet I flee from the adverse storm to thy tranquility, O Virgin: " +
            "deliver me from multifarious temptations, " +
            "that I may unceasingly hymn thy grace, O Ever-virgin Mother of God.",
      note: "Glory and Both now — theotokion Tone I printed in 05-31.pdf (§2A pattern)",
    },
    troparion: {
      tone: 4,
      text: "Your holy martyr Hermias, O Lord, " +
            "through his sufferings has received an incorruptible crown from You, our God. " +
            "For having Your strength, he laid low his adversaries, " +
            "and shattered the powerless boldness of demons. " +
            "Through his intercessions, save our souls!",
    },
    kontakion_ode6: {
      tone: 2,
      text: "You appeared as a bright star announcing Christ with your radiance, " +
            "which is repulsive to this world, O Martyr Hermias; " +
            "extinguishing the allure of false gods, " +
            "you enlighten the faithful, " +
            "always interceding for us all.",
    },
  },

  // ── June 20 — HM Methodius, Bishop of Patara ───────────────────────────────
  // Source: St. Sergius 06-20.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, Alleluia rubric, one canon at Matins.
};

export default MAY_MENAION;
