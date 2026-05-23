// Pentecostarion data — Paschal season (Pascha through All Saints Sunday)
// Source: St. Sergius Pentecostarion (Russian usage) + OCA calendar  
// Encoding rule: v2.1 — see encoding_rule_v2_1.md
// Single point of truth — edit this file for Pentecostarion encoding updates

const PENTECOSTARION_DATA = {

  // ── P+19 — Monday of the Third Week (Myrrhbearers Week) ──────────────────
  // Source: St. Sergius 32.pdf | Fekula §2A (weekday, Tone II)
  // File: "Monday Evening in the Third Week" — covers Vespers + Tuesday Matins/Liturgy.
  // Ordinary weekday: 6 stichera (3 Pentecostarion + 3 Menaion), no Litya.
  // Aposticha: Pentecostarion stichera Tone II with weekday universal verses.
  // Prokeimenon: Monday Tone IV (weekly table).
  19: {
    name: "Monday of the Third Week — Myrrhbearers",
    source_file: "32.pdf",
    fekula_section: "2A",
    tone: 2,

    troparion: [
      { tone: 2,
        text: "The noble Joseph having taken down Thy most pure Body from the tree, " +
              "wrapped it in a fine linen shroud covering it with fragrant spices " +
              "and placed it in a new sepulcher; " +
              "but on the third day Thou didst arise, O Lord, " +
              "granting the world great mercy." },
      { tone: 2,
        text: "When Thou didst descend unto death, O Life Immortal, " +
              "then didst Thou slay Hades with the radiant brilliance of Thy divinity. " +
              "And when Thou didst also raise the dead out of the nethermost depths, " +
              "all the hosts of the heavens cried aloud: " +
              "O Life-giver, Christ our God, glory be to Thee." },
    ],
    troparion_bothnow: {
      tone: 2,
      text: "The angel standing by the tomb cried unto the myrrh-bearing women, " +
            "Myrrh is fitting for the dead, but Christ hath been revealed a stranger to corruption. " +
            "Rather cry aloud: The Lord is risen, granting the world great mercy!",
    },

    kontakion_ode6: {
      tone: 2,
      text: "When Thou didst cry, Rejoice, unto the myrrh-bearers, " +
            "Thou didst make the lamentation of Eve the first mother " +
            "to cease by Thy Resurrection, O Christ God. " +
            "And Thou didst bid Thine apostles to preach: " +
            "The Savior is risen from the grave.",
    },

    // ── AT VESPERS: LORD I HAVE CRIED ─────────────────────────────────────
    // 3 Pentecostarion + 3 Menaion = 6 total. §2A weekday structure.
    // Source: 32.pdf — "3 from the Pentecostarion, in Tone II"
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 2,
        text: "When the myrrh-bearing women, O Christ, came early in the morning " +
              "seeking after Thee the Life of all, carrying spices and myrrh. " +
              "Constrained by their love they wept inconsolably, " +
              "whereupon they heard a young man speak from within the tomb: " +
              "Leave off your weeping. Rather, be ye glad and rejoice now, " +
              "since ye have received your salvation, " +
              "and proclaim the Lord's arising unto all." },
      { tone: 2,
        text: "O noble Joseph, we know thee to be a cherubic chariot, " +
              "since thou didst bear Christ the King in thine arms " +
              "when thou didst take Him down from the Cross. " +
              "Wherefore we bless thy divine hands and eyes; " +
              "and thy palms do we now honor, " +
              "by which thou wast deemed worthy to carry the Sun, " +
              "and the Word to His tomb and place Him therein. " +
              "Therefore, with love we acclaim thy godly memory." },
      { tone: 2,
        text: "The feast of the myrrh-bearers and of the noble Joseph " +
              "hath now appeared unto us, as if another Paradise bearing a fount of life. " +
              "It doth well up for all the world with waters of grace, " +
              "and it poureth forth in strength the Resurrection's streams. " +
              "Thus, the faithful keep feast and cry aloud: " +
              "Glory be to Him that hath bestowed grace and Resurrection upon all the World." },
    ],
    // LIC Glory Both Now Tone II — appointed theotokion (not a doxasticon; §2A weekday)
    // "And 3 Stichera from the Menaion, Glory..., Both now..., in Tone II"
    // The Both Now is this appointed theotokion from the Pentecostarion week
    lic_theotokion: {
      tone: 2,
      text: "Rising up early and coming with earnestness unto Thy tomb, " +
            "the myrrh-bearers sought for Thee so as to anoint Thine immaculate Body, O Christ. " +
            "And having been told by the words of the angel, " +
            "they preached to the apostles the tokens of joy: " +
            "That the Author of our salvation hath arisen, having despoiled death, " +
            "and granting the world eternal life and great mercy.",
    },

    // ── AT VESPERS: APOSTICHA ─────────────────────────────────────────────
    // Source: 32.pdf — Tone II with universal weekday verses
    stichera_aposticha: [
      { tone: 2,
        text: "Christ our Savior by nailing the record against us to the Cross " +
              "hath blotted it out, and destroyed the might of death. " +
              "We worship His arising on the third day." },
      { tone: 2,
        verse: "Unto Thee have I lifted up mine eyes, O Thou that dwellest in the heavens. " +
               "Behold, as the eyes of servants look unto the hands of their masters, " +
               "as the eyes of the handmaid look unto the hands of her mistress, " +
               "so do our eyes look unto the Lord our God, until He take pity on us.",
        text: "I cry unto Thee, O Christ my Savior, with the voice of the publican: " +
              "Be gracious unto me, as Thou wast unto him, and have mercy on me, O God." },
      { tone: 2,
        verse: "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. " +
               "Greatly hath our soul been filled therewith; let reproach come upon them that prosper, " +
               "and abasement on the proud.",
        text: "In so far as the holy martyrs intercede for us and praise Christ, " +
              "every deception is brought to naught, " +
              "and the race of mankind is saved through faith." },
    ],
    aposticha_glory: {
      tone: 2,
      text: "Why mingle ye tears with the myrrh-oils, O ye women disciples? " +
            "The stone hath been rolled away, the sepulcher hath been emptied. " +
            "Behold corruption hath been trodden under by Life, " +
            "the seals clearly bearing witness, the guards of the disobedient ones are fast asleep. " +
            "Mortal nature hath been saved by the flesh of God, Hades is lamenting. " +
            "Hasten ye with joy, and say unto the apostles: " +
            "Christ, the Firstborn of the dead, Who caused death to die, " +
            "goeth before you into Galilee.",
    },

    note: "Monday of Myrrhbearers Week. Ordinary weekday §2A structure — 3 Pentecostarion + 3 Menaion at LIC. " +
          "Aposticha from Pentecostarion Tone II with universal weekday verses. " +
          "Prokeimenon: Monday Tone IV from weekly table. " +
          "Christ is risen replaces usual opening throughout Bright/Myrrhbearers weeks.",

    // ── AT TYPICA: BEATITUDES ─────────────────────────────────────────────
    // Source: 32.pdf TUESDAY AT LITURGY — "For the Beatitudes, 6 verses from Ode IV of the Canon."
    // When combined with a §2E/§2F Menaion saint (e.g. 05-21), the split is:
    //   4 from this Pentecostarion Ode IV + 4 from the Menaion Ode VI = 8 total.
    // Standalone (no Menaion saint or §2A): 6 Pentecostarion troparia used.
    beatitudes_ode: 4,  // Ode IV of the Pentecostarion canon
    beatitudes_count: 6, // 6 standalone; 4 when combined with §2E/§2F Menaion
    beatitudes_troparia: [
      { text: "By the Cross Thou didst bind the belly of Hades, " +
              "and didst raise up the dead together with Thyself, " +
              "and didst destroy the tyranny of death. " +
              "Wherefore, we who are of Adam worship and praise Thy burial and arising, O Christ." },
      { text: "O our Savior, Whose good pleasure it was, for the sake of Thy compassionate mercy " +
              "to be nailed to the Cross and redeem us from the paternal curse, " +
              "loose the bonds of my many transgressions, " +
              "for Thou art able to accomplish whatsoever Thou dost will." },
      { text: "O Thou Who didst nail to the Cross mine ancient curse, " +
              "and didst cause blessing to pour forth for me from Thy side by Thy blood, O Savior, " +
              "loose Thou the bonds of my many transgressions, " +
              "for Thou art able to accomplish whatsoever Thou dost will." },
      { text: "When hades met Thee in the nethermost regions, it was embittered, O Savior, " +
              "seeing that those whom it had the power to devour aforetime, " +
              "it now gave up involuntarily; " +
              "its depths are searched out, and it is stripped and despoiled of its dead." },
      { label: "Glory",
        text: "Who can tell of the immeasurable glory of the Godhead, transcendent in essence? " +
              "for being the Trinity by nature, He is praised as beginningless and consubstantial, " +
              "and is hymned as a Unity in Trinity, in simple hypostases." },
      { label: "Both now",
        text: "Do thou unceasingly entreat Him Who dwelt in thy womb, O pure Virgin Mother, " +
              "and Whom thou, the Theotokos, didst bear without knowing a man, " +
              "that He loose the bonds of my many transgressions; " +
              "for thou art able to help in whatsoever thou dost will." },
    ],
  },

  // ── P+35 — Sixth Sunday of Pascha: Sunday of the Blind Man ──────────────────
  // Source: St. Sergius 60.pdf | Fekula §4B11
  // This file covers Saturday evening Vespers through Sunday Liturgy.
  // Two canons at Matins: Canon of Pascha (chanted, Tone I) + Canon of Blind Man (read, Tone V)
  35: {
    name: "Sixth Sunday of Pascha — Sunday of the Blind Man",
    source_file: "60.pdf",
    fekula_section: "4B11",
    hours_format: "pentecostarion_sunday",
    tone: 5,

    // ── TROPARIA / KONTAKIA ──────────────────────────────────────────────────

    // Resurrection Troparion — at God is the Lord; used at Hours
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of the Virgin for our salvation; " +
            "for He was pleased to ascend the Cross in the flesh " +
            "and to endure death, " +
            "and to raise the dead by His glorious Resurrection.",
    },

    // Dismissal Theotokion (Glory/Both now after Resurrection Troparion at Matins)
    dismissal_theotokion: {
      tone: 5,
      text: "Rejoice, impassible portal of the Lord! " +
            "Rejoice, rampart and protection of those who have recourse unto thee! " +
            "Rejoice, haven untouched by storms, " +
            "and who knowing not wedlock, " +
            "didst bear in the flesh thy Creator and God. " +
            "Cease not to intercede for those " +
            "who praise and worship thine Offspring.",
    },

    // Kontakion after Ode III — used at 1st and 6th Hours (Fekula §4A)
    kontakion_ode3: {
      tone: 8,
      text: "Thou didst descend into the tomb, O Immortal, " +
            "Thou didst destroy the power of Hades. " +
            "In victory didst Thou arise, O Christ God, " +
            "proclaiming \"Rejoice!\" to the myrrh-bearing women; " +
            "granting peace to Thine apostles, " +
            "and bestowing resurrection on the fallen.",
      name: "Kontakion of Pascha",
    },

    // Ikos of Pascha (after Kontakion at Ode III)
    ikos_ode3: "The myrrh-bearing maidens forestalled the dawn, seeking, as it were day, " +
               "the Sun that was before the sun and Who had once set in the tomb, and they " +
               "cried out one to another: O friends! come, let us anoint with spices the " +
               "life-bringing and buried Body, the Flesh that raised up fallen Adam, that now " +
               "lieth in the tomb. Let us go, let us hasten, like the Magi, and let us worship " +
               "and offer myrrh as a gift to Him Who is wrapped now not in swaddling clothes " +
               "but in a shroud. And let us weep and cry aloud: O Master, arise, Thou Who dost " +
               "grant resurrection to the fallen.",

    // Kontakion after Ode VI — used at 3rd and 9th Hours (Fekula §4A)
    kontakion_ode6: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man",
    },

    // Ikos of the Blind Man (after Kontakion at Ode VI)
    ikos_ode6: "Grant me a stream of ineffable wisdom and knowledge from on high, O Christ, " +
               "Thou Light of them that are in darkness and Guide of all those who are gone " +
               "astray, that I may tell of those things that the divine book of the Gospel of " +
               "peace hath taught, to wit, the miracle that was wrought upon the blind man; " +
               "for though blind from birth, he receiveth the physical eyes as well as the eyes " +
               "of the soul, as he crieth out in faith: Of those in darkness art Thou the most " +
               "radiant Light.",

    // Sessional Hymn after Ode III
    sessional_hymn_ode3: {
      tone: 8,
      text: "As the Master and Fashioner of all things passed by, " +
            "He encountered along the way a blind man who was seated there " +
            "and who mourned aloud, saying: " +
            "All my life I have beheld neither the sun shining forth " +
            "nor laid eyes on the bright luminescence of the moon. " +
            "Yet since Thou wast born of an immaculate Virgin so as to fill all with light, " +
            "do Thou now fill me with Thy light, in that Thou art compassionate. " +
            "And thus I shall adore Thee and cry: " +
            "Sovereign Master, Christ my God, forgive me my sins, " +
            "in Thine abundant compassion, O Thou only Lover of mankind.",
    },

    // Resurrection Troparion at Great Doxology (end of Matins)
    troparion_great_doxology: {
      tone: 5,
      text: "Today is salvation come unto the world; " +
            "let us sing praises to Him that arose from the tomb, " +
            "and is the Author of our life. " +
            "For, having destroyed death by death, " +
            "He hath given us the victory and great mercy.",
    },

    // Exapostilarion
    exapostilarion: [
      {
        name: "Exapostilarion of Pascha",
        tone: 3,
        repeat: 2,
        text: "Having fallen asleep in the flesh, " +
              "as a mortal, " +
              "O King and Lord, " +
              "on the third day Thou didst rise again, " +
              "raising up Adam from corruption, " +
              "and abolishing death: " +
              "O Pascha of incorruption, " +
              "Salvation of the world!",
      },
      {
        name: "Exapostilarion of the Blind Man (Glory, Both now)",
        tone: null,
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. " +
              "And since Thou art compassionate, instill in me humility. " +
              "Cleanse Thou me by the tears of repentance and change of heart.",
      },
    ],

    // ── AT LITURGY ───────────────────────────────────────────────────────────

    // ── LORD I HAVE CRIED (Vespers) ─────────────────────────────────────────
    // 7 Octoechos Tone V (assembled) + 3 Blind Man Tone II feast stichera
    stichera_lord_i_call: [
      { tone: 2, verse: "For with the Lord there is mercy, and with Him is plenteous redemption; and He shall redeem Israel out of all his iniquities.",
        text: "He that was born blind thought to himself and said: " +
              "Was I born without eyes for the sins of my parents? " +
              "Was I born to be an example because of the unbelief of the nations? " +
              "I cease not from asking: When is it night, when is it day? " +
              "My feet cannot endure striking against the stones. " +
              "For I have neither seen the sun shining nor beheld in image Him Who fashioned me. " +
              "But I beseech Thee, O Christ God, look upon me and have mercy on me." },
      { tone: 2, verse: "O praise the Lord, all ye nations; praise Him, all ye peoples.", repeat: true },
      { tone: 2, verse: "For He hath made His mercy to prevail over us, and the truth of the Lord abideth forever.",
        text: "As Jesus passed by on His way from the temple, " +
              "He found a man who was blind from his birth; " +
              "and taking compassion on him, He put clay on his eyes and said unto him: " +
              "Go and wash in the pool of Siloam. " +
              "And he washed and gained his sight, and sent up praise to God. " +
              "But his kinsmen said unto him: " +
              "Who hath opened thine eyes, which none of those who see were able to heal? " +
              "And he cried out and said: " +
              "A man called Jesus; He told me: Wash in the pool of Siloam; and I gained my sight. " +
              "He is truly Christ the Messiah, of Whom Moses spake in the Law. " +
              "He is the Savior of our souls." },
    ],
    stichera_lord_i_call_count: 3,  // feast stichera; 7 Octoechos assembled separately

    stichera_glory: {
      tone: 5,
      text: "Passing by on the way, O Lord, " +
            "Thou didst find a man who was blind from his birth. " +
            "And the disciples, in astonishment, asked Thee and said: " +
            "Teacher, who did sin, this man or his parents, that he was born blind? " +
            "And Thou, O my Savior, didst cry unto them: Neither hath this man sinned, nor his parents, " +
            "but that the works of God should be made manifest in him. " +
            "I must work the works of Him that sent Me, which none else can work. " +
            "And when Thou hadst said this, Thou didst spit upon the ground " +
            "and make clay, and anoint his eyes, saying unto him: " +
            "Go, wash in the pool of Siloam. " +
            "And he washed and was made whole and cried unto Thee: " +
            "Lord, I believe; and he worshipped Thee. " +
            "Wherefore, we also cry out: Have mercy upon us.",
    },

    lic_theotokion: {
      tone: 5,
      text: "In the Red Sea of old " +
            "an image of the Bride who knew not wedlock was depicted. " +
            "There Moses was the one who parted the sea, " +
            "here Gabriel is the minister of the miracle. " +
            "At that time Israel marched dry-shod through the deep, " +
            "now the Virgin doth seedlessly give birth to Christ. " +
            "The sea after Israel's passage remained impassable; " +
            "the immaculate one after bearing Emmanuel remained incorrupt. " +
            "O God, Who doth exist and is pre-eternal, " +
            "and hath appeared as man, have mercy upon us.",
      type: "dogmatic",
    },

    // ── APOSTICHA (Saturday Vespers) ─────────────────────────────────────────
    // Resurrection sticheron Tone V + 4 Paschal stichera with "Let God arise" verses
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { tone: 5,
        text: "With voices of song we magnify Thee, O Christ, " +
              "the Savior incarnate, yet not separated from heaven, " +
              "for as the Lord who lovest mankind " +
              "Thou hast suffered the cross and death for the sake of our race, " +
              "overthrowing the gates of Hades, " +
              "and rising on the third day, thus saving our souls." },
      { verse: "Let God arise and let His enemies be scattered, and let them that hate Him flee from before His face.",
        tone: 5, name: "Paschal Sticheron 1",
        text: "A Pascha sacred today hath been shown unto us; " +
              "Pascha new and holy, a Pascha mystical, a Pascha all-venerable! " +
              "A Pascha that is Christ the Redeemer; " +
              "a Pascha immaculate, a great Pascha; a Pascha of the faithful; " +
              "a Pascha that hath opened the gates of Paradise to us; " +
              "a Pascha that doth sanctify all the faithful." },
      { verse: "As smoke vanisheth, so let them vanish.",
        tone: 5, name: "Paschal Sticheron 2",
        text: "Come from the vision, O ye women, bearers of good tidings, " +
              "and say ye unto Zion: " +
              "Receive from us the good tidings of the Resurrection of Christ; " +
              "adorn thyself, exult, and rejoice, O Jerusalem, " +
              "for thou hast seen Christ the King, like a bridegroom come forth from the tomb." },
      { verse: "So let sinners perish at the presence of God, and let the righteous be glad.",
        tone: 5, name: "Paschal Sticheron 3",
        text: "The myrrh-bearing women in the deep dawn " +
              "stood before the tomb of the Giver of life; " +
              "they found an angel sitting upon the stone, " +
              "and he, speaking to them, said thus: " +
              "Why seek ye the Living among the dead? " +
              "Why mourn ye the Incorruptible amid corruption? " +
              "Go, proclaim unto His disciples." },
      { verse: "This is the day which the Lord hath made, let us rejoice and be glad therein.",
        tone: 5, name: "Paschal Sticheron 4",
        text: "Pascha the beautiful, Pascha, the Lord's Pascha, " +
              "the Pascha all-venerable hath dawned upon us. " +
              "Pascha, with joy let us embrace one another. " +
              "O Pascha! Ransom from sorrow, " +
              "for from the tomb today, as from a bridal chamber, " +
              "hath Christ shone forth, " +
              "and hath filled the women with joy, saying: " +
              "Proclaim unto the apostles." },
    ],

    aposticha_glory: {
      tone: 8,
      text: "O Christ God, Thou spiritual Sun of Righteousness, " +
            "Who by Thy most pure touch didst bestow a twofold enlightenment " +
            "upon him who from his mother's womb was deprived of sight, " +
            "illumine Thou the eyes of our souls also, " +
            "and prove us to be sons of the day, that we may cry to Thee with faith: " +
            "Great and ineffable is Thy compassion toward us, O Lover of man; glory be to Thee.",
    },

    aposticha_both_now: {
      tone: 5,
      text: "It is the Day of Resurrection, let us be radiant for the feast, " +
            "and let us embrace one another. " +
            "Let us say, Brethren, even to them that hate us, " +
            "let us forgive all things on the Resurrection, and thus let us cry out: " +
            "Christ is risen from the dead, trampling down death by death, " +
            "and upon those in the tombs bestowing life.",
      note: "Paschal Both now replaces theotokion",
    },

    // ── AT LITURGY — BEATITUDES ───────────────────────────────────────────────
    // 4 Resurrection Tone V + 4 from Ode VI of Canon of the Blind Man (60.pdf)
    // ── MATINS PRAISES (On the Praises — Sunday Matins aposticha) ────────────
    // 7 Resurrection Tone V + 1 Blind Man Tone VIII (from 60.pdf)
    stichera_matins_aposticha: [
      { tone: 5, name: "Resurrection Sticheron 1",
        verse: "To do among them the judgment that is written, This glory shall be to all His saints.",
        text: "O Lord, while the grave was sealed by lawless men, " +
              "Thou didst come forth from the tomb " +
              "in a manner similar to Thy birth from the Theotokos. " +
              "Thy bodiless angels could not fathom the event of Thine incarnation, " +
              "likewise the soldiers guarding Thee could not know when Thou didst arise. " +
              "For the full knowledge of both events hath been sealed from those who would inquire, " +
              "but the wonder of these events hath been revealed to those who with faith " +
              "worship the mystery which we hymn; " +
              "grant unto us joy and great mercy." },
      { tone: 5, name: "Resurrection Sticheron 2",
        verse: "Praise ye God in His saints, praise Him in the firmament of His power.",
        text: "O Lord, having smashed the eternal bars and burst asunder the bonds of Hades, " +
              "Thou didst arise from the tomb, " +
              "leaving Thy grave clothes behind in testimony of Thy three day burial. " +
              "Whereupon Thou didst go forth into Galilee, while yet being guarded in a cave. " +
              "Great is Thy mercy, O Savior, and beyond understanding; have mercy on us." },
      { tone: 5, name: "Resurrection Sticheron 3",
        verse: "Praise Him for His mighty acts, praise Him according to the multitude of His greatness.",
        text: "O Lord, the women ran unto Thy tomb to see Thee, " +
              "the Christ who had suffered for our sakes. " +
              "Approaching the tomb they found an angel seated upon the stone, which had rolled back from fear, " +
              "and he cried unto them saying: " +
              "'The Lord hath arisen; go tell His disciples that He is risen, saving your souls.'" },
      { tone: 5, name: "Resurrection Sticheron 4",
        verse: "Praise Him with the sound of trumpet, praise Him with the psaltery and harp.",
        text: "O Lord, in a manner similar to that " +
              "by which Thou didst come forth from the sealed tomb, " +
              "Thou didst enter in unto Thy disciples when the doors were shut, " +
              "showing them Thy body's sufferings, O long-suffering Savior, " +
              "which Thou didst willingly endure. " +
              "As one who hath sprung forth from the seed of David, Thou didst endure wounds, " +
              "but as One who didst spring forth from God, even the Son of God " +
              "Thou hast delivered the world. " +
              "Incomprehensible and great is Thy mercy, O Savior, have mercy on us." },
      { tone: 5, name: "Resurrection Sticheron 5",
        verse: "Praise Him with timbrel and dance, praise Him with strings and flute.",
        text: "The Lord, and King of the ages, the Creator of all things, " +
              "Who for our sake willingly endured crucifixion and burial in the flesh, " +
              "in order to free us all from Hades, " +
              "Thou art our God and we know no other besides Thee." },
      { tone: 5, name: "Resurrection Sticheron 6",
        verse: "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. Let every breath praise the Lord.",
        text: "O Lord, who will recount Thine awe-inspiring wonders? " +
              "Who will confess Thy dread mysteries? " +
              "For, becoming incarnate for us, as Thou Thyself didst will, " +
              "Thou hast manifest the might of Thy power; " +
              "For on Thy Cross Thou didst open Paradise to the Thief, " +
              "and in Thy Burial Thou didst smash the bars of Hades, " +
              "and with Thy Resurrection Thou hast enriched all things. " +
              "O Compassionate Lord, glory be to Thee!" },
      { tone: 5, name: "Resurrection Sticheron 7",
        verse: "Arise, O Lord my God, let Thy hands be lifted high; forget not Thy paupers to the end.",
        text: "The myrrh-bearing women coming to Thy tomb in the deep of morning " +
              "seeking to anoint with spices the Immortal Word and God; " +
              "and being informed by the words of the angel, " +
              "returned with joy to tell the apostles " +
              "that Thou O Lord, the life of all, hast arisen, " +
              "granting the world forgiveness and great mercy." },
      { tone: 8, name: "Blind Man Sticheron",
        verse: "Look upon me, and have mercy on me.",
        text: "O Christ God, Who by Thy merciful compassion became incarnate, " +
              "with Thy fingers which hath fashioned all things " +
              "Thou didst touch clay to the eyes of him who from the womb was bereft of sight " +
              "and didst thereby deem him worthy of divine brilliance " +
              "by Thine ineffable compassion. " +
              "And now do Thou Thyself, O Bestower of light, " +
              "illumine also the senses of our souls, " +
              "since Thou alone art the bountiful Bestower of good gifts." },
    ],
    stichera_matins_aposticha_glory: {
      tone: 8,
      text: "Who can tell of Thy mighty acts, O Christ, " +
            "or who can number the multitudes of Thy wonders? " +
            "For even as Thou, in Thy goodness, didst appear on earth twofold of nature, " +
            "so didst Thou grant twofold healings to the sick; " +
            "for Thou didst open not only the bodily eyes of the man who was blind from the womb, " +
            "but those of his soul also. " +
            "Wherefore, he confessed Thee, the hidden God, Who grantest great mercy unto all.",
    },
    stichera_matins_aposticha_both_now: {
      tone: 2,
      text: "Thou art most blessed, O Virgin Theotokos, " +
            "for through Him who took flesh from thee, Hades hath been captured, " +
            "Adam recalled, the curse slain, Eve set free, " +
            "death put to death, and we have been given life. " +
            "Therefore in praise we cry: " +
            "Blessed art Thou, O Christ our God, who hast been thus well-pleased, glory be to Thee.",
    },


    beatitudes_source: "4 Resurrection Tone V + 4 from Ode VI of Canon of the Blind Man (60.pdf)",
    beatitudes_troparia: [
      { tone: 5, source: "resurrection",
        text: "Believing Thee to be God, O Christ, the thief on the cross " +
              "confessed Thee in a pure manner, crying out from the depths of his heart: " +
              "Remember me in Thy kingdom, O Lord!" },
      { tone: 5, source: "resurrection",
        text: "Together let us hymn as Savior and Creator, Him Who on the Cross " +
              "budded forth life for our race and caused the curse " +
              "which originated from the tree to wither up." },
      { tone: 5, source: "resurrection",
        text: "By Thy death hast Thou destroyed the power of death, O Christ, " +
              "and Thou didst raise up with Thyself the dead of ages past, " +
              "who now hymn Thee as our true God and Savior." },
      { tone: 5, source: "resurrection",
        text: "Arriving at Thy tomb, O Christ, the honorable women sought to anoint Thee with myrrh, " +
              "O Bestower of life; but an angel appeared to them, crying out: The Lord is risen!" },
      { source: "blind_man_ode6",
        text: "After Thine arising, O Christ, Thou didst say unto Thy friends: " +
              "Tarry ye in Jerusalem, until ye be endued with invincible power " +
              "and sure assistance from on high." },
      { source: "blind_man_ode6",
        text: "Thou didst make clay and didst anoint the eyes of the man who had been blind from his birth. " +
              "Thou didst grant him his sight, and he praised Thine immaculate might, " +
              "whereby Thou hast saved the world, O Word." },
      { source: "glory",
        text: "O Unity of three Hypostases, Unbegotten Father, Begotten Son, " +
              "and Thou Spirit Who proceedest, thrice-holy Lord, " +
              "one essence and might, save all Thy people." },
      { source: "theotokion",
        text: "Who can tell of thy mighty deeds, O pure One? " +
              "For, in a manner surpassing nature, thou didst give birth in the flesh unto God, " +
              "Who through thee doth deliver the world from all sin, O all-immaculate Virgin." },
    ],


    feast_e: "Acts 16:16-34",
    feast_g: "John 9:1-38",

    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",

    alleluia_tone: 8,
    alleluia_verse: "Look upon me and have mercy on me.",
    alleluia_stichos: "My steps do Thou direct according to Thy saying.",

    // Zadostoinik — replaces It is truly meet throughout Pentecostarion
    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality. " +
                     "Verse: Praise the Lord from the heavens, praise Him in the highest.",

    // ── AT VESPERS (Saturday Evening) ───────────────────────────────────────

    vespers_prokeimenon: {
      tone: 6,
      text: "The Lord is King, He is clothed with majesty.",
      verses: [
        "The Lord is clothed with strength and He hath girt Himself.",
        "For He established the universe which shall not be shaken.",
        "Holiness becometh Thy house, O Lord, unto length of days.",
      ],
      type: "saturday_great_prokeimenon",
    },

    has_litya: true,

    litya_stichera: [
      {
        label: "Glory",
        tone: 4,
        text: "The blind man, accounting all his life as though it were night, " +
              "cried unto Thee, O Lord: " +
              "Open mine eyes, O our Savior, " +
              "Thou Son of David, " +
              "that together with all mankind, " +
              "I also may praise Thy power.",
      },
      {
        label: "Both now",
        tone: 4,
        text: "Mercifully regard the supplications of thy servants, " +
              "O all-immaculate one, " +
              "quelling the cruel uprisings of the demons against us, " +
              "delivering us from every sorrow; " +
              "for thee alone do we have as a steadfast and sure confirmation, " +
              "and having acquired thine intercession; " +
              "let not us who call upon thee be put to shame, " +
              "O Sovereign Lady. " +
              "Hasten thou to answer the entreaties of those who cry out to thee with faith: " +
              "Rejoice, thou help, joy and protection of all, " +
              "and the salvation of our souls!",
      },
    ],

    has_paroemias: false,

    // ── AT MATINS ────────────────────────────────────────────────────────────

    matins_gospel: "Sunday Resurrection Gospel 5 (John 20:19-31) — FLAG: verify per Tone V rotation",

    matins_prokeimenon: {
      tone: 5,
      text: "Arise, O Lord my God, let Thy hand be lifted high; for Thou art King unto the ages.",
      stichos: "I will confess Thee, O Lord, with my whole heart, I will tell of all Thy wonders.",
    },

    has_great_doxology: true,
    magnificat_sung: false,  // rubric: No Magnificat — straightway irmos of Ode IX

    gospel_sticheron: {
      tone: 8,
      text: "The tears of Mary are not warmly shed in vain. " +
            "For behold, she was held worthy of the angels' teaching " +
            "and vouchsafed the sight of Thee, Thyself, O Christ. " +
            "But again her thoughts were earthly thoughts as those of a weak woman. " +
            "Therefore she was dismissed and told not to touch Thee, O Christ. " +
            "But she was also sent as herald to the disciples, " +
            "and she affirmed to them the good tidings proclaiming the Ascension to the portion of the Father. " +
            "With her do Thou also make us worthy of Thy manifestation, O Master and Lord.",
    },

    canons: [
      {
        name: "Canon of Pascha",
        tone: 1,
        mode: "chanted",
        refrain: "Christ is risen from the dead.",
        // Full canon odes in 60.txt — reference source PDF for complete texts
      },
      {
        name: "Canon of the Blind Man",
        tone: 5,
        mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.",
        // Full canon odes in 60.txt — reference source PDF for complete texts
      },
    ],

    // ── FLAGS ────────────────────────────────────────────────────────────────
    menaion_set_aside: false,
    has_great_doxology: true,  // Sunday — Great Doxology sung
    has_litya: true,   // Great Vespers with Litya on Saturday evening
    has_paroemias: false,  // Sunday of the Blind Man — no paroemias
    magnificat_sung: false,  // Zadostoinik replaces; Magnificat not sung
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,  // Zadostoinik replaces throughout Pentecostarion
    heavenly_king_omitted: true,
    note: "Saturday Vespers through Sunday Liturgy. Two canons at Matins: " +
          "Canon of Pascha (chanted, Tone I, refrain: Christ is risen) + " +
          "Canon of Blind Man (read, Tone V, refrain: Glory to Thee). " +
          "Matins Gospel number not in PDF — Gospel 5 (John 20:19-31) for Tone V; " +
          "verify against OCA practice. No paroemias — Sunday service, not feast with OT lessons. " +
          "Epistle/Gospel pericope numbers (Slavic): verify Acts §34 / John §34.",
  },

  // ── P+36 — Monday of the Sixth Week (Blind Man afterfeast) ──────────────────
  // Source: St. Sergius 61.pdf | Fekula §4A (weekday Pentecostarion)
  // File also contains Sunday evening Small Vespers (P+35 eve).
  // One canon at Matins: Canon of the Blind Man (8 troparia/ode) + 4 Menaion.
  // Magnificat IS sung at Ode VIII (weekday rule — differs from Sunday).
  // Small Doxology (read) at Matins — confirms weekday.
  // Troparia rotation: Period 3 (Weeks 4-6) — preceding Sunday troparion governs.
  36: {
    name: "Monday of the Sixth Week — Blind Man Afterfeast",
    source_file: "61.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 5,  // preceding Sunday tone

    // ── TROPARIA / KONTAKIA ──────────────────────────────────────────────────

    // Troparion at Hours — preceding Sunday (Tone V Resurrection) + Menaion if present
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of the Virgin for our salvation; " +
            "for He was pleased to ascend the Cross in the flesh " +
            "and to endure death, " +
            "and to raise the dead by His glorious Resurrection.",
      source: "preceding_sunday",
    },

    // Dismissal Theotokion
    dismissal_theotokion: {
      tone: 5,
      text: "Rejoice, impassible portal of the Lord! " +
            "Rejoice, rampart and protection of those who have recourse unto thee! " +
            "Rejoice, haven untouched by storms, " +
            "and who knowing not wedlock, " +
            "didst bear in the flesh thy Creator and God. " +
            "Cease not to intercede for those " +
            "who praise and worship thine Offspring.",
    },

    // AT THE HOURS (Fekula §4A Period 3):
    //   One kontakion at all Hours = preceding Sunday kontakion (Blind Man, Tone IV).
    //   Exception: if Menaion saint is Doxology/Polyeleos/Vigil rank,
    //   3rd and 9th Hours use Menaion kontakion instead.
    hours_kontakion: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man (preceding Sunday kontakion)",
      note: "All Hours. If Menaion is Doxology+ rank, substitute Menaion kontakion at 3rd/9th.",
    },

    // AT MATINS: Ode III = Menaion kontakion; Ode VI = Blind Man kontakion (Pentecostarion)

    // Sessional Hymn after Ode III (Blind Man — Glory, Both now)
    sessional_hymn_ode3: {
      tone: 8,
      text: "As the Master and Fashioner of all things passed by, " +
            "He encountered along the way a blind man who was seated there " +
            "and who mourned aloud, saying: " +
            "All my life I have beheld neither the sun shining forth " +
            "nor laid eyes on the bright luminescence of the moon. " +
            "Yet since Thou wast born of an immaculate Virgin so as to fill all with light, " +
            "do Thou now fill me with Thy light, in that Thou art compassionate. " +
            "And thus I shall adore Thee and cry: " +
            "Sovereign Master, Christ my God, forgive me my sins, " +
            "in Thine abundant compassion, O Thou only Lover of mankind.",
    },

    // Exapostilaria — same as P+35
    exapostilarion: [
      {
        name: "Exapostilarion of Pascha",
        tone: 3,
        repeat: 2,
        text: "Having fallen asleep in the flesh, " +
              "as a mortal, " +
              "O King and Lord, " +
              "on the third day Thou didst rise again, " +
              "raising up Adam from corruption, " +
              "and abolishing death: " +
              "O Pascha of incorruption, " +
              "Salvation of the world!",
      },
      {
        name: "Exapostilarion of the Blind Man (Glory, Both now)",
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. " +
              "And since Thou art compassionate, instill in me humility. " +
              "Cleanse Thou me by the tears of repentance and change of heart.",
      },
    ],

    // ── AT VESPERS (Sunday Evening — Small Vespers) ──────────────────────────

    vespers_prokeimenon: {
      tone: 8,
      text: "Behold now, bless ye the Lord, all ye servants of the Lord.",
      verses: ["Ye that stand in the house of the Lord, in the courts of the house of our God."],
      type: "weekday_ordinary",
    },

    has_litya: false,
    has_paroemias: false,

    // Stichera on Lord I Have Cried — 3 Pentecostarion (Tone V) + 3 Menaion
    stichera_lord_i_call: [
      {
        tone: 5,
        text: "Thou art the light of all mankind, " +
              "the fashioner of the eyes of our mortal flesh, " +
              "O God and Word, Thou Creator of all things. " +
              "And now by the mixture of spittle and clay, " +
              "Thou in a manner beyond telling hast granted sight to a man who was born blind, " +
              "Thou Who with Thy fingers didst fashion both dust and sight. " +
              "And when he who had never seen the sun received sight, " +
              "he beheld Thee, the sweet Sun, " +
              "and saw the image of Him Who ineffably fashioned us " +
              "in accordance with His compassionate mercy.",
      },
      {
        tone: 5,
        text: "Having, as an abundance of Wealth, " +
              "the form and members which comprise our mortal flesh, " +
              "the man who came forth blind from his mother's womb " +
              "could not fathom what the form of this world could be; " +
              "for he lacked eyes. " +
              "And because of this his feet and his body " +
              "were pained by frequent stumbling against stones. " +
              "Yet through Thee he gained that wealth he did not have, " +
              "and he beheld Thee, the Author of lights, " +
              "the only Light of the world, " +
              "and he proclaimed unto all " +
              "that Thou art God and the Lord of creation, " +
              "and the fashioner of all things in the world.",
      },
      {
        tone: 5,
        text: "He who in times past had been blind " +
              "confessed with his whole soul, mind and tongue, " +
              "the One Who had fashioned eyes for him out of spittle and clay, " +
              "granting him to see, " +
              "preached that He is the Lord and Creator of all things, " +
              "Who out of compassion for that which He had fashioned, " +
              "became a man, though He is God almighty. " +
              "The scribes could not bear to hear his words and see his zeal, " +
              "and in their jealousy they expelled him from the synagogue, " +
              "for the blindness which consumed their souls " +
              "surpassed that which once consumed his eyes.",
      },
    ],

    // Glory, Both now at Lord I Have Cried
    stichera_glory: {
      tone: 2,
      text: "He that was born blind thought to himself and said: " +
            "Was I born without eyes for the sins of my parents? " +
            "Was I born to be an example because of the unbelief of the nations? " +
            "I cease not from asking: When is it night, when is it day? " +
            "My feet cannot endure striking against the stones. " +
            "For I have neither seen the sun shining nor beheld in image Him Who fashioned me. " +
            "But I beseech Thee, O Christ God, " +
            "look upon me and have mercy on me.",
    },

    // ── VESPERS APOSTICHA (Sunday Evening) ───────────────────────────────────
    // Stichera of the Resurrection Tone V + Glory Tone VIII (from 61.pdf)
    stichera_aposticha: [
      { tone: 5,
        text: "By Thy precious Cross, O Christ, " +
              "Thou hast shamed the devil, " +
              "and by Thy Resurrection Thou hast blunted the sting of sin, " +
              "and saved us from the gates of death: " +
              "we glorify Thee, the Only-begotten One." },
      { verse: "Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. " +
               "Behold, as the eyes of servants look unto the hands of their masters...",
        tone: 5, name: "Hymn of Compunction",
        text: "O Lord, I cease not from sinning; " +
              "even though I have been deemed worthy of Thy love for mankind, " +
              "I have not acknowledged it. " +
              "Do Thou overcome my hardness of heart, " +
              "O only good One, and have mercy on me." },
      { verse: "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement.",
        tone: 5, name: "Martyricon",
        text: "Having disdained all earthly things, " +
              "and having courageously endured torments, " +
              "ye did not fall short of your blessed hopes, " +
              "but ye became heirs of the Kingdom of the heavens, " +
              "O all-famed martyrs. " +
              "Since ye have boldness before God the Lover of mankind, " +
              "pray that peace be granted unto the world, " +
              "and great mercy to our souls." },
    ],

    aposticha_glory: {
      tone: 8,
      text: "As Jesus passed by on His way from the temple, " +
            "He found a man who was blind from his birth; " +
            "and taking compassion on him, He put clay on his eyes and said unto him: " +
            "Go and wash in the pool of Siloam. " +
            "And he washed and gained his sight, and sent up praise to God. " +
            "But his kinsmen said unto him: " +
            "Who hath opened thine eyes, which none of those who see were able to heal? " +
            "And he cried out and said: " +
            "A man called Jesus; He told me: Wash in the pool of Siloam; and I gained my sight. " +
            "He is truly Christ the Messiah, of Whom Moses spake in the Law. " +
            "He is the Savior of our souls.",
      note: "Both now = same (rubric: Glory...Both now in Tone VIII)",
    },

    // ── MATINS APOSTICHA (Monday Morning) ────────────────────────────────────
    // From 61.pdf Matins Aposticha section
    stichera_matins_aposticha: [
      { tone: 5,
        text: "Blindness hath befallen those who could see, " +
              "and their minds and soul became darkened, " +
              "for having beheld the blind man regain sight, " +
              "in their wickedness they demanded of him: " +
              "'How dost thou now see like those who have sight? " +
              "For thou wast blind from Thy birth, and thou didst sit by the wayside, begging.' " +
              "Thereupon, the blind man revealed that it was He Who had bestowed light, " +
              "and created the world's luminaries, " +
              "thereby preaching God's pre-beginningless Son, " +
              "Who in His compassion hath appeared as a man in these latter days, " +
              "incarnate of the Spirit and the Virgin." },
      { verse: "Look upon me, and have mercy upon me.", tone: 5,
        text: "Like unto one bearing a great burden and earthen load, " +
              "the blind man wandered in this world, striking his feet against the stones. " +
              "Instead of sight he was endowed with a staff; " +
              "wherefore he fled for refuge unto the Light-bestower, " +
              "from Whom he was granted to see the light, " +
              "and behold the Creator with his own eyes, " +
              "Him Who fashioned from the earth " +
              "our human nature in His own image and likeness, " +
              "but now from spittle mixed with dust " +
              "He hath enlightened the blind man's eyes, " +
              "and in His love for mankind hath granted him to see the sun." },
      { verse: "My steps do Thou direct according to Thy saying.", tone: 5,
        text: "When he beheld the light, the blind man saw the Word of the Father, " +
              "Who had formed mankind in His image and likeness. " +
              "The wondrous vision filled him with gladness, " +
              "beholding the sun which ruleth the day, brilliant and effulgent, as it is seen by all mankind, " +
              "and walking free from all stumbling, he traversed paths with ease, " +
              "and he recognized Him that had enlightened him as the Son of God, " +
              "Who had become a man out of His extreme compassion. " +
              "For, being God, He took upon Himself that which He was not, " +
              "remaining God yet also a man, preserving His uncommingled union." },
    ],
    stichera_matins_aposticha_glory: {
      tone: 5,
      text: "Passing by on the way, O Lord, " +
            "Thou didst find a man who was blind from his birth. " +
            "And the disciples, in astonishment, asked Thee and said: " +
            "Teacher, who did sin, this man or his parents, that he was born blind? " +
            "And Thou, O my Savior, didst cry unto them: Neither hath this man sinned, nor his parents, " +
            "but that the works of God should be made manifest in him. " +
            "I must work the works of Him that sent Me, which none else can work. " +
            "And when Thou hadst said this, Thou didst spit upon the ground " +
            "and make clay, and anoint his eyes, saying unto him: " +
            "Go, wash in the pool of Siloam. " +
            "And he washed and was made whole and cried unto Thee: " +
            "Lord, I believe; and he worshipped Thee. " +
            "Wherefore, we also cry out: Have mercy upon us.",
      note: "Both now = same (rubric repeated)",
    },

    // Aposticha (Glory, Both now — unique to this file, Tone VIII)
    aposticha_glory: {
      tone: 8,
      text: "As Jesus passed by on His way from the temple, " +
            "He found a man who was blind from his birth; " +
            "and taking compassion on him, He put clay on his eyes and said unto him: " +
            "Go and wash in the pool of Siloam. " +
            "And he washed and gained his sight, and sent up praise to God. " +
            "But his kinsmen said unto him: " +
            "Who hath opened thine eyes, which none of those who see were able to heal? " +
            "And he cried out and said: " +
            "A man called Jesus; He told me: Wash in the pool of Siloam; and I gained my sight. " +
            "He is truly Christ the Messiah, of Whom Moses spake in the Law. " +
            "He is the Savior of our souls.",
    },

    // ── AT MATINS ────────────────────────────────────────────────────────────

    magnificat_sung: true,   // weekday rule — Magnificat IS sung (differs from P+35 Sunday)
    has_great_doxology: false,
    small_doxology_read: true,

    // Matins Aposticha stichera (unique to this file — 3 stichera + Glory, Both now)
    stichera_matins_aposticha: [
      {
        tone: 5,
        text: "Blindness hath befallen those who could see, " +
              "and their minds and soul became darkened, " +
              "for having beheld the blind man regain sight, " +
              "in their wickedness they demanded of him: " +
              "\"How dost thou now see like those who have sight? " +
              "For thou wast blind from Thy birth, " +
              "and thou didst sit by the wayside, begging.\" " +
              "Thereupon, the blind man revealed that it was He Who had bestowed light, " +
              "and created the world's luminaries, " +
              "thereby preaching God's pre-beginningless Son, " +
              "Who in His compassion hath appeared as a man in these latter days, " +
              "incarnate of the Spirit and the Virgin.",
      },
      {
        verse: "Look upon me, and have mercy upon me.",
        tone: 5,
        text: "Like unto one bearing a great burden and earthen load, " +
              "the blind man wandered in this world, " +
              "striking his feet against the stones. " +
              "Instead of sight he was endowed with a staff; " +
              "wherefore he fled for refuge unto the Light-bestower. " +
              "from Whom he was granted to see the light, " +
              "and behold the Creator with his own eyes, " +
              "Him Who fashioned from the earth " +
              "our human nature in His own image and likeness, " +
              "but now from spittle mixed with dust " +
              "He hath enlightened the blind man's eyes, " +
              "and in His love for mankind " +
              "hath granted him to see the sun.",
      },
      {
        verse: "My steps do Thou direct according to Thy saying.",
        tone: 5,
        text: "When he beheld the light, " +
              "the blind man saw the Word of the Father, " +
              "Who had formed mankind in His image and likeness. " +
              "The wondrous vision filled him with gladness, " +
              "beholding the sun which ruleth the day, " +
              "brilliant and effulgent, as it is seen by all mankind, " +
              "and walking free from all stumbling, he traversed paths with ease, " +
              "and he recognized Him that had enlightened him as the Son of God, " +
              "Who had become a man out of His extreme compassion. " +
              "For, being God, He took upon Himself that which He was not, " +
              "remaining God yet also a man, " +
              "preserving His uncommingled union.",
      },
    ],

    canons: [
      {
        name: "Canon of the Blind Man",
        tone: 5,
        mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.",
        troparia_per_ode: 8,
        menaion_troparia_per_ode: 4,
        note: "Full ode texts in 60.txt / source PDF",
      },
    ],

    // ── AT LITURGY ───────────────────────────────────────────────────────────

    feast_e: "Acts 17:1-15",
    feast_g: "John 11:47-57",
    aposticha_source: "pentecostarion",

    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",

    alleluia_tone: 8,
    alleluia_verse: "Look upon me and have mercy on me.",
    alleluia_stichos: "My steps do Thou direct according to Thy saying.",

    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality.",

    beatitudes_source: "6 verses from Ode I of Canon of the Blind Man",

    beatitudes_troparia: [
      { source: "blind_man_ode1",
        text: "Having accepted a voluntary crucifixion in the flesh, " +
              "Thou didst pour forth blessing and life unto the world, " +
              "O only most blessed Master and Creator of all. " +
              "Wherefore we bless and praise and glorify Thee, " +
              "singing and chanting a hymn of victory." },
      { source: "blind_man_ode1",
        text: "When Thou hadst died, O Christ, the noble Joseph laid Thee in a hollow, " +
              "even the lowest pit, and he rolled a stone against the entrance of the sepulcher, " +
              "O Long-suffering One. But Thou didst arise in glory " +
              "and didst raise up the world together with Thyself, " +
              "as it sang and chanted a hymn of victory." },
      { source: "blind_man_ode1",
        text: "Why bring ye myrrh with tears? said the angel who appeared unto the venerable women. " +
              "Christ is risen. Make haste and tell it to the disciples, " +
              "those seers of God who are lamenting and weeping, " +
              "so that they may radiantly leap and dance for joy." },
      { source: "blind_man_ode1",
        text: "The Redeemer performed strange wonders, in that He healed the man who had been blind from birth. " +
              "He anointed him with clay and said: Go and wash in Siloam, " +
              "that thou mightest know that I am God, " +
              "Who by the bowels of My compassion walk upon the earth while bearing flesh." },
      { source: "glory",
        text: "As we venerate one essence in three hypostases, O ye faithful, " +
              "let us glorify the Father, and Son, and Upright Spirit, " +
              "the Creator and Lord and Redeemer of all, one uncreated God, " +
              "and let us cry out with the Bodiless: Holy, Holy, Holy art Thou, O King." },
      { source: "theotokion",
        text: "Out of compassion, the Lord dwelt in thy womb, which knew not wedlock, O pure one, " +
              "for He wished to save man who, through the devices of the enemy, " +
              "had become subject to corruption. " +
              "Entreat Him, therefore, that this city be saved from every enemy assault and conquest." },
    ],

    // ── FLAGS ────────────────────────────────────────────────────────────────
    menaion_set_aside: false,
    matins_format: "god_is_the_lord",
    heavenly_king_omitted: true,
    it_is_truly_meet_suppressed: true,
    note: "File covers Sunday evening Small Vespers (P+35 eve) + Monday Matins/Liturgy (P+36). " +
          "Magnificat sung at Ode VIII — weekday rule, differs from P+35 Sunday. " +
          "Small Doxology read at Matins. " +
          "Vespers: 3 Pentecostarion stichera (Blind Man theme, Tone V) + 3 Menaion. " +
          "Full Matins Aposticha stichera unique to this file — captured above. " +
          "Kontakion at Ode III: Menaion if present, else Blind Man. " +
          "Kontakion at Ode VI: Blind Man (Tone IV) always.",
  },

  // ── P+37 — Tuesday of the Sixth Week (Blind Man afterfeast) ─────────────────
  // Source: St. Sergius 62.pdf | Fekula §4A (weekday Pentecostarion)
  // File covers Monday evening Small Vespers (P+36 eve) + Tuesday Matins/Liturgy.
  // Same weekday structure as P+36: Magnificat sung, Small Doxology read.
  // Beatitudes from Ode IV (Monday used Ode I — rotates each weekday).
  // Vespers prokeimenon Tone IV (Monday evening rotation).
  37: {
    name: "Tuesday of the Sixth Week — Blind Man Afterfeast",
    source_file: "62.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 5,

    // Troparion, Dismissal Theotokion, Kontakia — same as P+36
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of the Virgin for our salvation; " +
            "for He was pleased to ascend the Cross in the flesh " +
            "and to endure death, " +
            "and to raise the dead by His glorious Resurrection.",
      source: "preceding_sunday",
    },

    // AT THE HOURS (Fekula §4A Period 3): one kontakion = preceding Sunday kontakion.
    hours_kontakion: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man (preceding Sunday kontakion)",
      note: "All Hours. If Menaion is Doxology+ rank, substitute Menaion kontakion at 3rd/9th.",
    },

    sessional_hymn_ode3: {
      tone: 8,
      text: "As the Master and Fashioner of all things passed by, " +
            "He encountered along the way a blind man who was seated there " +
            "and who mourned aloud, saying: " +
            "All my life I have beheld neither the sun shining forth " +
            "nor laid eyes on the bright luminescence of the moon. " +
            "Yet since Thou wast born of an immaculate Virgin so as to fill all with light, " +
            "do Thou now fill me with Thy light, in that Thou art compassionate. " +
            "And thus I shall adore Thee and cry: " +
            "Sovereign Master, Christ my God, forgive me my sins, " +
            "in Thine abundant compassion, O Thou only Lover of mankind.",
      source: "pentecostarion",
    },

    exapostilarion: [
      { name: "Exapostilarion of Pascha", tone: 3, repeat: 2,
        text: "Having fallen asleep in the flesh, as a mortal, O King and Lord, " +
              "on the third day Thou didst rise again, raising up Adam from corruption, " +
              "and abolishing death: O Pascha of incorruption, Salvation of the world!" },
      { name: "Exapostilarion of the Blind Man (Glory, Both now)",
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. And since Thou art compassionate, " +
              "instill in me humility. Cleanse Thou me by the tears of repentance and change of heart." },
    ],

    // ── AT VESPERS (Monday Evening) ──────────────────────────────────────────

    vespers_prokeimenon: {
      tone: 4,
      text: "The Lord will hearken unto me when I cry unto Him.",
      verses: ["When I called upon Thee, O God of my righteousness, Thou didst hearken unto me."],
      type: "weekday_ordinary",
      note: "Monday evening prokeimenon — Tone IV",
    },

    has_litya: false,
    has_paroemias: false,

    stichera_lord_i_call: [
      {
        tone: 5,
        text: "He who in times past had been blind " +
              "confessed with his whole soul, mind and tongue, " +
              "the One Who had fashioned eyes for him out of spittle and clay, " +
              "granting him to see, " +
              "preaching that He is the Lord and Creator of all things, " +
              "Who out of compassion for that which He had fashioned, " +
              "became a man, though He is God almighty. " +
              "The scribes could not bear to hear his words and see his zeal, " +
              "and in their jealousy they expelled him from the synagogue, " +
              "for the blindness which consumed their souls " +
              "surpassed that which once consumed his eyes.",
      },
      {
        tone: 5,
        text: "The man who had been blind " +
              "brought to them that have sight a trophy of excellence, " +
              "for he recognized his Maker and the Creator of all, " +
              "seeing Him Who by His spittle granted him sight. " +
              "By means of this single deed, he knew the One Who had enlightened him, " +
              "was the Son of God and the Lord of all the world. " +
              "But when they who were blinded by jealousy, " +
              "beheld Him they did not recognize Him, " +
              "though He had done many wondrous marvels, " +
              "which He wrought gloriously by a single word.",
      },
      {
        tone: 5,
        text: "The truly blind scribes, looked upon the blind man with suspicion, " +
              "for they imagined that he had feigned not seeing, " +
              "in pretense showing the Savior to have given him sight. " +
              "They willingly were blinded by the dark letter of the Law " +
              "wherein shineth the truly resplendent Sun, " +
              "Who hath for my sake established the Sabbath rest, " +
              "having made bright the gloominess of the Law; " +
              "He took that light from them, and shed it upon those who were once blind. " +
              "and now beholding him, " +
              "they proclaim the light-bestower to all the world.",
      },
    ],

    stichera_glory: {
      tone: 8,
      text: "O Christ God, Thou noetic Sun of Righteousness, " +
            "Who by Thy most pure touch " +
            "didst bestow a twofold enlightenment " +
            "upon him who was blind from his mother's womb, " +
            "do Thou also illumine the eyes of our souls, " +
            "and show us to be sons of the day, " +
            "that we may cry out to Thee with faith: " +
            "Great and ineffable is Thy compassion toward us, " +
            "O Lover of mankind glory be to Thee.",
    },

    // ── VESPERS APOSTICHA (Monday Evening) ───────────────────────────────────
    // Stichera of the Resurrection Tone V + Glory Tone VIII (from 62.pdf)
    stichera_aposticha: [
      { tone: 5,
        text: "He who hath granted Resurrection to mankind, " +
              "was led as a sheep to the slaughter; " +
              "the princes of Hades trembled before Him " +
              "and the gates of lamentations were lifted up; " +
              "for Christ the King of glory entered therein, " +
              "saying to those in bondage: 'Come forth!' " +
              "and to those in darkness: 'Reveal yourselves!'" },
      { verse: "Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. " +
               "Behold, as the eyes of servants look unto the hands of their masters...",
        tone: 5, name: "Hymn of Compunction",
        text: "O Lord, though I am struck with the fear of Thee, " +
              "I cease not from doing evil. " +
              "What man under judgment feareth not the judge? " +
              "Or who wishing to be healed doth provoke the physician to anger as I do? " +
              "O longsuffering Lord, take pity on mine infirmity " +
              "and have mercy on me." },
      { verse: "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement.",
        tone: 5, name: "Martyricon",
        text: "Armed with the shield of faith, " +
              "and strengthened with the sign of the Cross, " +
              "Thy Saints, O Lord, of their own accord " +
              "went forth courageously unto torments " +
              "and destroyed the deception and audacity of the devil. " +
              "By their intercessions, " +
              "since Thou art the almighty God, " +
              "send down peace upon the World, " +
              "and great mercy to our souls." },
    ],

    aposticha_glory: {
      tone: 8,
      text: "O Christ God, Who by Thy merciful compassion became incarnate, " +
            "with Thy fingers which hath fashioned all things " +
            "Thou didst touch clay to the eyes of him who from the womb was bereft of sight " +
            "and didst thereby deem him worthy of divine brilliance " +
            "by Thine ineffable compassion. " +
            "And now do Thou Thyself, O Bestower of light, " +
            "illumine also the senses of our souls, " +
            "since Thou alone art the bountiful Bestower of good gifts.",
      note: "Both now = same (rubric: Glory...Both now in Tone VIII)",
    },

    // ── MATINS APOSTICHA (Tuesday Morning) ───────────────────────────────────
    // From 62.pdf Matins Aposticha section
    stichera_matins_aposticha: [
      { tone: 5,
        text: "Those who observed the Law of Moses, " +
              "upon seeing the effulgent and radiant light " +
              "which illumined the blind man on the Sabbath day, " +
              "themselves became noetically blind, " +
              "seeing shadows which obscured the Law " +
              "and hid from them Him Who by His Word " +
              "hath fashioned both the Sabbath and light, " +
              "and to the blind man who had washed himself, " +
              "He hath given eyes by a wondrous clay mixture of His pure spittle with dust. " +
              "Let us join with that man and so behold God; " +
              "and upon seeing that which is better, " +
              "may we censure the blindness which gripped the Pharisees." },
      { verse: "Look upon me, and have mercy on me.", tone: 5,
        text: "Morning hath dawned for him " +
              "who walked in the dark night of blindness, " +
              "the much suffering blind man, " +
              "who by divine command washed in the pool of Siloam, " +
              "and received his sight. " +
              "Wherefore he is seen as a new light-bearer, " +
              "rebuking the night-creating darkness " +
              "which had enveloped the scribes of the ancient Law, " +
              "illumining their blindness by His most luminous effulgence, " +
              "from which the blindness of the letter of the Law " +
              "hath now been granted sight, " +
              "by the brilliant radiant light granted us by the Word." },
      { verse: "My steps do Thou direct according to Thy saying.", tone: 5,
        text: "The blind man who endured blindness in body " +
              "and noetic darkness, " +
              "ascended to the heights of illumination " +
              "through divine knowledge, " +
              "by the wondrous and new outpourings of light from the Word. " +
              "Though in the past he was doubly blinded, " +
              "he came to know the Light-giver, " +
              "Who arose on the third day from the sepulcher, " +
              "and Who hath made the earth radiant by His Resurrection, " +
              "from Whom the light of our refashioning hath shone forth in the darkness gripping mankind " +
              "for the sake of His lovingkindness and great mercy." },
    ],
    stichera_matins_aposticha_glory: {
      tone: 8,
      text: "O Christ God, Thou spiritual Sun of Righteousness, " +
            "Who by Thy most pure touch didst bestow a twofold enlightenment " +
            "upon him who from his mother's womb was deprived of sight, " +
            "illumine Thou the eyes of our souls also, " +
            "and prove us to be sons of the day, that we may cry to Thee with faith: " +
            "Great and ineffable is Thy compassion toward us, O Lover of man; glory be to Thee.",
      note: "Both now = same",
    },

    // ── AT MATINS ────────────────────────────────────────────────────────────

    magnificat_sung: true,
    has_great_doxology: false,
    small_doxology_read: true,

    sessional_hymn_kathisma2: {
      tone: 5,
      text: "By the spittle of Him that had fashioned man, " +
            "The man blind from his birth, having never seen the sun, " +
            "was able to see with eyes. " +
            "Wherefore, he sent up heartfelt thanksgiving to God, " +
            "for he beheld the image of Him " +
            "which had been formed in the likeness " +
            "of the One Who had made and fashioned it.",
      repeat: "Glory, Both now: repeat",
    },

    // Praises Glory, Both now — unique to this file (Tone V)
    stichera_praises_glory: {
      tone: 5,
      text: "Who can tell of Thy mighty acts, O Christ, " +
            "or who can number the multitudes of Thy wonders? " +
            "For even as Thou, in Thy goodness, didst appear on earth twofold of nature, " +
            "so didst Thou grant twofold healings to the sick; " +
            "for Thou didst open not only the bodily eyes of the man who was blind from the womb, " +
            "but those of his soul also. " +
            "Wherefore, he confessed Thee, the hidden God, Who grantest great mercy unto all.",
    },

    // Matins Aposticha — 3 unique stichera + Glory, Both now
    stichera_matins_aposticha: [
      {
        tone: 5,
        text: "Those who observed the Law of Moses, " +
              "upon seeing the effulgent and radiant light " +
              "which illumined the blind man on the Sabbath day, " +
              "themselves became noetically blind, " +
              "seeing shadows which obscured the Law " +
              "and hid from them Him Who by His Word " +
              "hath fashioned both the Sabbath and light, " +
              "and to the blind man who had washed himself, " +
              "He hath given eyes by a wondrous clay mixture of His pure spittle with dust. " +
              "Let us join with that man and so behold God; " +
              "and upon seeing that which is better, " +
              "may we censure the blindness which gripped the Pharisees.",
      },
      {
        verse: "Look upon me, and have mercy on me.",
        tone: 5,
        text: "Morning hath dawned for him " +
              "who walked in the dark night of blindness, " +
              "the much suffering blind man, " +
              "who by divine command washed in the pool of Siloam, " +
              "and received his sight. " +
              "Wherefore he is seen as a new light-bearer, " +
              "rebuking the night-creating darkness " +
              "which had enveloped the scribes of the ancient Law, " +
              "illumining their blindness by His most luminous effulgence. " +
              "from which the blindness of the letter of the Law " +
              "hath now been granted sight, " +
              "by the brilliant radiant light granted us by the Word.",
      },
      {
        verse: "My steps do Thou direct according to Thy saying.",
        tone: 5,
        text: "The blind man who endured blindness in body " +
              "and noetic darkness, " +
              "ascended to the heights of illumination " +
              "through divine knowledge, " +
              "by the wondrous and new outpourings of light from the Word. " +
              "Though in the past he was doubly blinded, " +
              "he came to know the Light-giver, " +
              "Who arose on the third day from the sepulcher, " +
              "and Who hath made the earth radiant by His Resurrection, " +
              "from Whom the light of our refashioning hath shone forth in the darkness gripping mankind " +
              "for the sake of His lovingkindness and great mercy.",
      },
    ],

    canons: [
      {
        name: "Canon of the Blind Man",
        tone: 5,
        mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.",
        troparia_per_ode: 8,
        menaion_troparia_per_ode: 4,
      },
    ],

    // ── AT LITURGY ───────────────────────────────────────────────────────────

    feast_e: "Acts 17:19-28",
    feast_g: "John 12:19-36",
    aposticha_source: "pentecostarion",

    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",

    alleluia_tone: 8,
    alleluia_verse: "Look upon me and have mercy on me.",
    alleluia_stichos: "My steps do Thou direct according to Thy saying.",

    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality.",

    beatitudes_source: "6 verses from Ode IV of Canon of the Blind Man",

    beatitudes_troparia: [
      { source: "blind_man_ode4",
        text: "When Thou Who art Life wast hung upon the Tree, " +
              "by Thy great mercy Thou didst quicken me who had died because of the tree. " +
              "For this cause I glorify Thee, O Word." },
      { source: "blind_man_ode4",
        text: "Dwelling together with Thine initiates in a wondrous manner, O Lord, " +
              "Thou didst say unto them: Go, proclaim everywhere My Resurrection." },
      { source: "blind_man_ode4",
        text: "Thou didst confirm Thine arising from the grave, O Lord, " +
              "when Thou didst abide for many days with those who loved Thee, " +
              "thereby causing them to rejoice, O Christ." },
      { source: "blind_man_ode4",
        text: "When Thou didst give eyes unto the man who had been blind from the womb, " +
              "Thou didst say: Go, wash and receive thy sight, and glorify My Divinity." },
      { source: "glory",
        text: "O beginningless Trinity, one in honour, undivided in essence, divided in hypostases, " +
              "save all those who glorify Thee with faith and fear." },
      { source: "theotokion",
        text: "We glorify thy childbirth which is above nature, O immaculate One, " +
              "and with faith we bless thee as the Birthgiver of the God of all, O most immaculate One." },
    ],

    // ── FLAGS ────────────────────────────────────────────────────────────────
    menaion_set_aside: false,
    matins_format: "god_is_the_lord",
    heavenly_king_omitted: true,
    it_is_truly_meet_suppressed: true,
    note: "File covers Monday evening Small Vespers (P+36 eve) + Tuesday Matins/Liturgy (P+37). " +
          "Vespers prokeimenon Tone IV (Monday evening rotation). " +
          "Kathisma at Vespers: 6th Kathisma. " +
          "Beatitudes from Ode IV — rotates each weekday (Monday=Ode I, Tuesday=Ode IV). " +
          "Ikos not explicitly listed at Ode III — verify from source PDF. " +
          "All Pentecostarion stichera and Matins Aposticha unique to this file — captured in fields and 62.txt.",
  },

  // ── P+38 — Wednesday of the Sixth Week: Apodosis (Leavetaking) of Pascha ────
  // Source: St. Sergius 63.pdf | Fekula §4B11
  // File covers Tuesday evening Vespers (P+37 eve) + Wednesday Matins/Liturgy.
  // MAJOR TRANSITION: Full Paschal ceremony restored at Vespers and Matins.
  // Three canons at Matins: Pascha (6) + Blind Man (4) + Pre-festal Ascension (4) = 14.
  // Great Doxology CHANTED. No Magnificat — Ode IX uses Paschal Megalynarion refrains.
  // Prokeimenon/Alleluia at Liturgy are Paschal (Tone VIII / Tone IV).
  // After Liturgy: "thus the feast of Christ's Holy Resurrection is given up."
  38: {
    name: "Wednesday of the Sixth Week — Apodosis of Pascha",
    source_file: "63.pdf",
    fekula_section: "4B11",
    hours_format: "apodosis_pascha",
    tone: 5,

    // Troparion: Sunday troparion of the preceding Sunday (Blind Man, Tone V)
    // Source: "We sing the troparion of the preceding Sunday in the fifth tone,
    //  Let us worship..." — Fekula §4B11
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word, " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of a Virgin for our salvation; " +
            "for He was pleased to be lifted up in the flesh upon the Cross, " +
            "and to endure death, and to raise the dead " +
            "by His glorious Resurrection.",
      source: "preceding_sunday_blind_man",
      fekula: "§4B11",
    },

    // Kontakion assignment REVERSED on Apodosis vs. ordinary Sunday:
    // Ode III (1st/6th Hours) = Blind Man (Tone IV)
    // Ode VI (3rd/9th Hours) = Pascha (Tone VIII)
    kontakion_ode3: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man",
    },
    kontakion_ode6: {
      tone: 8,
      text: "Thou didst descend into the tomb, O Immortal, " +
            "Thou didst destroy the power of Hades. " +
            "In victory didst Thou arise, O Christ God, " +
            "proclaiming \"Rejoice!\" to the myrrh-bearing women; " +
            "granting peace to Thine apostles, " +
            "and bestowing resurrection on the fallen.",
      name: "Kontakion of Pascha",
    },

    sessional_hymn_ode3: {
      tone: 4,
      text: "Thou gavest eyes, O Christ, " +
            "to the man born without eyes, " +
            "thus showing to the Jews Thine ineffable glory " +
            "and making it clear that Thou, O my Lord, " +
            "art the Light of all mankind. " +
            "But through jealousy their minds were weakened and crippled; " +
            "so they lay in wait, " +
            "while being zealous and eager to slay Thee, Who givest life.",
      label: "Sessional Hymn of the Blind Man",
    },

    sessional_hymn_ode3_both_now: {
      tone: 4,
      text: "As Thou Thyself didst will, " +
            "Thou wast born, O my Savior; " +
            "again as Thou didst will, " +
            "Thou wast seen by us mortals. " +
            "Thou didst suffer as a man, but as " +
            "true God Thou didst arise. " +
            "Thou wast taken up into the heavens with glory; " +
            "with Thyself didst Thou lead up man's essence and nature, " +
            "adorning it with glory.",
      label: "Sessional Hymn of the Pre-festal (Both now)",
    },

    // Sessional Hymn after Kathisma II (unique)
    sessional_hymn_kathisma2: {
      tone: 5,
      text: "He Who as with a garment is wrapped about with light, " +
            "Who with the Father and Spirit is co-beginningless God, " +
            "hath put on our nature in His boundless love for mankind. " +
            "As God, He driveth out the illnesses of us mortal men. " +
            "And He it is Who enlightened the eyes of him that in blindness and utter darkness " +
            "came forth from the womb.",
      repeat: "Glory, Both now: repeat",
    },

    exapostilarion: [
      { name: "Exapostilarion of Pascha", tone: 3, repeat: 2,
        text: "Having fallen asleep in the flesh, as a mortal, O King and Lord, " +
              "on the third day Thou didst rise again, raising up Adam from corruption, " +
              "and abolishing death: O Pascha of incorruption, Salvation of the world!" },
      { name: "Exapostilarion of the Blind Man (Glory, Both now)",
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. And since Thou art compassionate, " +
              "instill in me humility. Cleanse Thou me by the tears of repentance and change of heart." },
    ],

    vespers_prokeimenon: {
      tone: 1,
      text: "Thy mercy, O Lord, shall pursue me all the days of my life.",
      verses: ["The Lord is my shepherd, and I shall not want. " +
               "In a place of green pasture, there hath He made me to dwell."],
      type: "weekday_ordinary",
      note: "Tuesday evening prokeimenon — Tone I",
    // ── LORD I HAVE CRIED — from 63.pdf (Apodosis of Pascha) ──────────────
    // 6 stichera all from Pentecostarion — Blind Man texts
    // Glory/Both now: Tone VIII doxasticon printed in PDF
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 2, text: "He that was born blind thought to himself and said: " +
              "Was I born without eyes for the sins of my parents? " +
              "Was I born to be an example because of the unbelief of the nations? " +
              "I cease not from asking: When is it night, when is it day? " +
              "My feet cannot endure striking against the stones. " +
              "For I have neither seen the sun shining nor beheld in image Him Who fashioned me. " +
              "But I beseech Thee, O Christ God, look upon me and have mercy on me." },
      { tone: 2, text: "As Jesus passed by on His way from the temple, " +
              "He found a man who was blind from his birth; " +
              "and taking compassion on him, He put clay on his eyes and said unto him: " +
              "Go and wash in the pool of Siloam. " +
              "And he washed and gained his sight, and sent up praise to God. " +
              "But his kinsmen said unto him: Who hath opened thine eyes, which none of them that see was able to heal? " +
              "And he cried out and said: A man called Jesus; He told me: Wash in the pool of Siloam; and I gained my sight. " +
              "He is truly Christ the Messiah, of Whom Moses spake in the Law. He is the Savior of our souls." },
      { tone: 4, text: "The blind man, accounting all his life as though it were night, " +
              "cried unto Thee, O Lord: " +
              "Open mine eyes, O our Savior, Thou Son of David, " +
              "that together with all mankind, I also may praise Thy power." },
      { tone: 5, text: "Passing by on the way, O Lord, Thou didst find a man who was blind from his birth. " +
              "And the disciples, in astonishment, asked Thee and said: " +
              "Teacher, who did sin, this man or his parents, that he was born blind? " +
              "And Thou, O my Savior, didst cry unto them: Neither hath this man sinned, nor his parents, " +
              "but that the works of God should be made manifest in him. " +
              "I must work the works of Him that sent Me, which none else can work. " +
              "And he washed and was made whole and cried unto Thee: Lord, I believe; and he worshipped Thee. " +
              "Wherefore, we also cry out: Have mercy on us." },
      { tone: 8, text: "O Christ God, Thou spiritual Sun of Righteousness, " +
              "Who by Thine immaculate touch didst bestow a twofold enlightenment " +
              "upon him who from his mother's womb was deprived of sight, " +
              "illumine Thou the eyes of our souls also, " +
              "and prove us to be sons of the day, that we may cry to Thee with faith: " +
              "Great and ineffable is Thy compassion toward us, O Lover of mankind; glory be to Thee." },
      { tone: 8, text: "O Christ God, Who by Thy merciful compassion became incarnate, " +
              "with Thy fingers which hath fashioned all things " +
              "Thou didst touch clay to the eyes of him who from the womb was bereft of sight " +
              "and didst thereby deem him worthy of divine brilliance by Thine ineffable compassion. " +
              "And now do Thou Thyself, O Bestower of light, " +
              "illumine also the senses of our souls, " +
              "since Thou alone art the bountiful Bestower of good gifts." },
    ],
    stichera_glory: { tone: 8, text: "Who can tell of Thy mighty acts, O Christ, " +
              "or who can number the multitudes of Thy wonders? " +
              "For even as Thou, in Thy goodness, didst appear on earth twofold of nature, " +
              "so didst Thou grant twofold healings to the sick; " +
              "for Thou didst open not only the bodily eyes of the man who was blind from the womb, " +
              "but those of his soul also. " +
              "Wherefore, he confessed Thee, the hidden God, Who grantest great mercy unto all." },
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { text: "With voices of song we magnify Thee, O Christ, the Savior incarnate, " +
              "yet not separated from heaven, for as the Lord who lovest mankind " +
              "Thou hast suffered the cross and death for the sake of our race, " +
              "overthrowing the gates of Hades, and rising on the third day, thus saving our souls.",
        tone: 5 },
    ],
    aposticha_glory: { tone: 5, text: "It is the Day of Resurrection, let us be radiant for the feast, " +
              "and let us embrace one another. " +
              "Let us say, Brethren, even to them that hate us, " +
              "let us forgive all things on the Resurrection, and thus let us cry out:" },
    aposticha_note: "Aposticha: 1 Resurrection sticheron (Tone V) + 3 Paschal stichera (Tone V). " +
              "Glory: Paschal doxasticon Tone V. The Paschal stichera texts come from the Paschal canon.",
    },

    has_litya: false,
    has_paroemias: false,
    menaion_set_aside: true,  // All 6 Vespers stichera from Pentecostarion; no Menaion at Vespers

    magnificat_sung: false,    // Ode IX uses Paschal Megalynarion refrains
    has_great_doxology: true,  // CHANTED — feast-level Matins
    matins_format: "god_is_the_lord",

    ode9_refrain: "Magnify, O my soul, Him Who willingly suffered, " +
                  "and was buried, and arose from the grave on the third day.",
    ode9_refrain_alt: "Magnify, O my soul, Christ the Giver of life, " +
                      "Who arose from the grave on the third day.",

    canons: [
      { name: "Canon of Pascha", tone: 1, mode: "chanted",
        refrain: "Christ is risen from the dead.", troparia_per_ode: 6 },
      { name: "Canon of the Blind Man", tone: 5, mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.", troparia_per_ode: 4 },
      { name: "Pre-festal Canon of the Ascension", tone: 5, mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.", troparia_per_ode: 4,
        irmos_ode1: "Christ, who with an upraised arm bringeth wars to naught, " +
                    "hath shaken horse and rider in the Red Sea; " +
                    "but Israel hath He saved as they chanted a song of victory." },
    ],

    feast_e: "Acts 1:1-12",
    feast_g: "Luke 24:36-53",

    // ── PROKEIMENON — encoding gap closed via Typica assembly (v0.3.x) ──────
    // Previous entry had Pascha prokeimenon (Tone 8 "This is the day…") — incorrect.
    // Ascension proper prokeimenon sourced from HTM_selected_material_from_pentecostarian.txt.
    // Note in P+39 encoding record: "Prokeimenon Tone VII and Alleluia Tone II govern
    // throughout entire Ascension afterfeast." (project_notes v0.3.19)
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",

    alleluia_tone: 4,
    alleluia_verse: "Thou, O Lord, shalt rise up and have pity upon Sion, " +
                    "for it is time to have compassion on her, yea, the time is come.",
    alleluia_stichos: "The Lord from heaven hath looked upon the earth, to hear the groaning of them " +
                      "that be in fetters, to loose the sons of the slain.",

    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality.",
    beatitudes_source: "8 verses from Odes III and VI of Canon of Pascha",

    it_is_truly_meet_suppressed: true,
    note: "Apodosis of Pascha — full Paschal ceremony restored at Vespers and Matins. " +
          "Three canons at Matins (14 troparia/ode). Great Doxology chanted. " +
          "Ode IX uses Paschal Megalynarion refrains throughout. " +
          "Prokeimenon/Alleluia are Paschal (Tone VIII / Tone IV). " +
          "Kontakion assignment reversed vs. Sunday: Blind Man at Ode III, Pascha at Ode VI. " +
          "After Liturgy: Pascha given up. 9th Hour begins with Trisagion (no O Heavenly King until Pentecost).",
  },

  // ── P+39 — Ascension of Our Lord God and Savior Jesus Christ ─────────────
  // Source: St. Sergius 64.pdf | Fekula §4B12
  // Great Feast — full Vigil: Great Vespers with Litya + Polyeleos Matins.
  // Troparion: Thou hast ascended in glory (Tone IV) governs Hours and all services.
  // No Magnificat — Megalynarion refrain at Ode IX.
  // Festal Antiphons at Liturgy (not Typika/Beatitudes).
  // Instead of It is truly meet: Irmos of Ode IX Canon 1 throughout afterfeast.
  39: {
    name: "The Ascension of Our Lord God and Savior Jesus Christ",
    source_file: "64.pdf",
    fekula_section: "4B12",
    hours_format: "ascension",

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, " +
            "the Redeemer of the world.",
    },

    kontakion_ode3: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      name: "Kontakion of the Ascension",
    },
    kontakion_ode6: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      name: "Kontakion of the Ascension",
      note: "Same kontakion at both Ode III and Ode VI — feast kontakion governs",
    },

    ikos: "Leaving the things of earth upon the earth, and surrendering to the earth " +
          "things of ashes, come, let us come to our senses and raise our eyes and thoughts " +
          "on high; let us, O mortals, turn our gaze together with our senses up unto the " +
          "heavenly gates. Let us consider ourselves present at the Mount of Olives, and gaze " +
          "intently at the Redeemer who is riding upon a cloud; for the Lord hath hastened up " +
          "from there into the heavens. And there the bountiful Giver of gifts distributed " +
          "gifts unto His apostles, calling to them as a Father, and strengthening them; He " +
          "guided them like Sons and said unto them: I am not separated from you; I am with " +
          "you, and no one can be against you.",

    sessional_hymn_polyeleos: {
      tone: 5,
      text: "Having come down from heaven unto the things of earth, " +
            "O Christ, as God, with Thyself, Thou didst resurrect Adam's form, " +
            "which lay prostrate in the nether holds of Hades' vault; " +
            "in Thine Ascension to the heights " +
            "Thou didst lead it up unto the heavens and Thou didst seat it " +
            "upon the throne of Thy Father, " +
            "since Thou, the Lover of mankind, art merciful.",
    },

    sessional_hymn_ode3: {
      tone: 8,
      text: "Having mounted upon heaven's clouds, O Christ, " +
            "Thou didst leave peace unto those upon the earth; " +
            "and Thou didst ascend and sit at the Father's right hand on high, " +
            "since Thou art one in essence with Him, and the Spirit, O Lord; " +
            "for though Thou hadst appeared in the flesh, without undergoing change. " +
            "Wherefore Thou dost now wait till the last consummation, " +
            "when Thou shalt return to judge all of mankind upon the earth. " +
            "O Thou most righteous Judge and Lord, " +
            "since Thou art a greatly merciful God, " +
            "do Thou spare our souls and do Thou grant to us, Thy lowly servants, " +
            "the pardon of our failings and our sins.",
      label: "Sessional Hymn of the Feast after Ode III",
    },

    exapostilarion: [
      {
        tone: 3,
        repeat: 3,
        text: "While Thy disciples looked on Thee, Thou didst ascend, " +
              "O Christ, unto the Father to sit beside Him. " +
              "Angels hastened, running on before, and cried: " +
              "Lift ye the gates up, lift them up; " +
              "for the King hath ascended " +
              "unto His bright primal glory.",
        note: "Thrice — Glory, Both now: same",
      },
    ],

    magnificat_sung: false,
    ode9_refrain: "Magnify, O my soul, Christ the giver of life, Who ascended from earth to heaven.",
    ode9_irmos_canon1: "O Thou who art God's Mother transcending mind and word, " +
                       "who ineffably in time hast given birth unto the Timeless One, " +
                       "Thee do we the faithful magnify with one accord.",

    matins_gospel: "Mark 16:9-20 (Resurrection appearances; received up into heaven)",
    matins_prokeimenon: {
      tone: 4,
      text: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
      stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    },
    has_great_doxology: true,
    has_litya: true,
    has_paroemias: true,
    paroemia_1: "Isaiah 2:2-3 (mountain of the Lord manifest; nations shall come)",
    paroemia_2: "Isaiah 62:10-63:9 (Who is this that cometh from Edom; red garments from Bozrah)",
    paroemia_3: "Zechariah 14:1,4,8,9,11 (feet on Mount of Olives; living water; Lord King of all earth)",

    megalynarion: "We magnify Thee, O Christ the Giver of life, " +
                  "and we honor Thy divine ascension " +
                  "with Thy most pure Flesh into heaven.",
    megalynarion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",

    feast_e: "Acts 1:1-12",
    feast_g: "Luke 24:36-53",
    aposticha_source: "pentecostarion",

    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",

    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",

    // Instead of It is truly meet — Irmos of Ode IX Canon 1 + refrain (through afterfeast)
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",

    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",

    canons: [
      { name: "Ascension Canon 1", tone: 5, troparia_per_ode: 8,
        irmos_ode1: "Unto God the Savior Who made His people pass dryshod through the sea, " +
                    "but drowned Pharaoh with all his host, " +
                    "unto Him alone let us sing: For He is glorified." },
      { name: "Ascension Canon 2", tone: 4, troparia_per_ode: 6,
        irmos_ode1: "I shall open my mouth, and be filled with the Spirit, " +
                    "and utter discourse to the Queen and Mother; " +
                    "and be seen radiantly keeping festival, joyfully praising her wonders.",
        katavasia_irmos: "Covered by the divine cloud, " +
                         "he that was slow of tongue proclaimed the Law written by God; " +
                         "for having shaken off the impurity from the eye of his mind, " +
                         "He beholdeth Him That is, and he is initiated into the knowledge of the Spirit, " +
                         "while giving praise with God-inspired songs." },
    ],

    it_is_truly_meet_suppressed: true,
    matins_format: "god_is_the_lord",
    heavenly_king_omitted: true,  // Paschal period — omitted from Ascension through Pentecost eve
    menaion_set_aside: true,  // Great Feast of the Lord — Menaion saint entirely set aside
    beatitudes_source: "Festal Antiphons (3 antiphons with Ps. 46, 47, 48 — not Beatitudes)",
    note: "Great Feast. Full Vigil structure with Polyeleos. " +
          "Festal Antiphons replace Typika/Beatitudes at Liturgy. " +
          "Introit: God is gone up in jubilation. " +
          "Prokeimenon Tone VII and Alleluia Tone II govern throughout entire Ascension afterfeast. " +
          "Instead of It is truly meet: Irmos of Ode IX Canon 1 chanted through afterfeast. " +
          "Dismissal: May Christ our true God Who didst ascend in Glory from us into heaven...",

    // Both Now at LIC: appointed Theotokion Tone II from the Pentecostarion/Menaion
    // Source: 64.pdf — "Both now…, from the Pentecostarion, or this Theotokion in Tone II"
    lic_theotokion: {
      tone: 2,
      text: "The shadow of the law hath passed now that grace hath come, " +
            "for as the Bush wrapped in flame was not consumed, " +
            "so didst thou bear a Child O Virgin and remained a Virgin; " +
            "in place of a pillar of fire, the Sun of righteousness hath dawned, " +
            "instead of Moses, Christ is come, the salvation of our souls.",
    },

    // ── AT GREAT VESPERS (source: 64.txt / 64.pdf) ──────────────────────────
    // Vespers prokeimenon: Wednesday weekly Tone 5 governs (no special feast prokeimenon
    // at Vespers for Ascension — the weekly table entry applies). Source: 64.txt.
    // LIC: 10 stichera §2F rank. Litya. Aposticha. Glory Both Now on each section.

    stichera_lord_i_call_count: 10,
    stichera_lord_i_call: [
      { tone: 6, verse: "Bring my soul out of prison that I may confess Thy name.",
        text: "The Lord was taken up into the heavens that He might send the Comforter unto the world. " +
              "The heavens made ready His throne, and the clouds His Ascension. " +
              "The angels marvel as they see a man more exalted than they. " +
              "The Father receiveth Him Whom He had with Him eternally in His bosom. " +
              "The Holy Spirit commandeth all His angels: Lift up your gates, O ye princes. " +
              "All ye nations, clap your hands; Christ hath ascended whither He was before." },
      { tone: 6, verse: "The righteous shall wait patiently for me until Thou shalt reward me.",
        text: "The Lord was taken up into the heavens that He might send the Comforter unto the world. " +
              "The heavens made ready His throne, and the clouds His Ascension. " +
              "The angels marvel as they see a man more exalted than they. " +
              "The Father receiveth Him Whom He had with Him eternally in His bosom. " +
              "The Holy Spirit commandeth all His angels: Lift up your gates, O ye princes. " +
              "All ye nations, clap your hands; Christ hath ascended whither He was before.",
        repeat: true },
      { tone: 6, verse: "Out of the depths have I cried unto Thee, O Lord; O Lord, hear my voice.",
        text: "O Lord, the cherubim were amazed at Thine Ascension, " +
              "when they beheld Thee, O God, Who sittest on them, ascending upon the clouds. " +
              "And we glorify Thee, for Thy mercy is good. Glory be to Thee." },
      { tone: 6, verse: "Let Thine ears be attentive to the voice of my supplication.",
        text: "O Lord, the cherubim were amazed at Thine Ascension, " +
              "when they beheld Thee, O God, Who sittest on them, ascending upon the clouds. " +
              "And we glorify Thee, for Thy mercy is good. Glory be to Thee.",
        repeat: true },
      { tone: 6, verse: "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? For with Thee there is forgiveness.",
        text: "Having beheld Thine ascents on the holy mountains, O Christ, " +
              "Thou effulgence of the Father's glory, we praise the radiant likeness of thy countenance. " +
              "We worship Thy passion, we honor Thy Resurrection, and we glorify Thy glorious Ascension. " +
              "Have mercy on us." },
      { tone: 6, verse: "For Thy name's sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, my soul hath hoped in the Lord.",
        text: "Having beheld Thine ascents on the holy mountains, O Christ, " +
              "Thou effulgence of the Father's glory, we praise the radiant likeness of thy countenance. " +
              "We worship Thy passion, we honor Thy Resurrection, and we glorify Thy glorious Ascension. " +
              "Have mercy on us.",
        repeat: true },
      { tone: 6, verse: "From the morning watch until night, from the morning watch let Israel hope in the Lord.",
        text: "O Lord, as the apostles saw Thee being lifted up in the clouds, O life-giving Christ, " +
              "they were filled with sorrow and wept with lamentation, saying with grief: " +
              "O Master, leave not as orphans us Thy servants whom Thou didst love in Thy mercy, since Thou art compassionate. " +
              "But as Thou didst promise, send us Thy most holy Spirit, to illumine our souls." },
      { tone: 6, verse: "For with the Lord there is mercy, and with Him is plenteous redemption; and He shall redeem Israel out of all his iniquities.",
        text: "O Lord, as the apostles saw Thee being lifted up in the clouds, O life-giving Christ, " +
              "they were filled with sorrow and wept with lamentation, saying with grief: " +
              "O Master, leave not as orphans us Thy servants whom Thou didst love in Thy mercy, since Thou art compassionate. " +
              "But as Thou didst promise, send us Thy most holy Spirit, to illumine our souls.",
        repeat: true },
      { tone: 6, verse: "O praise the Lord, all ye nations; praise Him, all ye peoples.",
        text: "O Lord, when Thou didst fulfill the mystery of Thy dispensation, " +
              "Thou didst take Thy disciples and ascend the Mount of Olives; " +
              "and behold, Thou didst pass through the firmament of heaven. " +
              "O Thou Who for my sake didst become poor like unto me, " +
              "and Who didst ascend thither whence Thou wast not separated, " +
              "send forth Thy most holy Spirit to enlighten our souls." },
      { tone: 6, verse: "For He hath made His mercy to prevail over us, and the truth of the Lord abideth forever.",
        text: "O Lord, when Thou didst fulfill the mystery of Thy dispensation, " +
              "Thou didst take Thy disciples and ascend the Mount of Olives; " +
              "and behold, Thou didst pass through the firmament of heaven. " +
              "O Thou Who for my sake didst become poor like unto me, " +
              "and Who didst ascend thither whence Thou wast not separated, " +
              "send forth Thy most holy Spirit to enlighten our souls.",
        repeat: true },
    ],
    stichera_glory: {
      tone: 6,
      text: "Not being separated from the bosom of the Father, O most sweet Jesus, " +
            "and having lived on earth as a man, Thou wast taken up in glory today from the Mount of Olives. " +
            "And having raised our fallen nature by Thy compassion, Thou didst seat it together with the Father. " +
            "Wherefore, the heavenly orders of the bodiless ones were amazed at the wonder " +
            "and stood in awe and astonishment. They were seized with trembling and magnified Thy love for mankind. " +
            "With them we on earth also glorify Thy condescension toward us, and Thine Ascension from us, " +
            "entreating and saying: O Thou Who by Thine Ascension didst fill with infinite joy " +
            "Thy disciples and the Theotokos who gave birth to Thee, " +
            "by their prayers count us also worthy of the joy of Thy chosen ones, for the sake of Thy great mercy.",
    },

    litya_stichera: [
      { tone: 1,
        text: "As Thou didst ascend into the heavens, from whence Thou didst also descend, " +
              "leave us not orphaned, O Lord; let Thy Spirit come, bringing peace unto the world; " +
              "show Thou unto the sons of men the works of Thy might, O Lord and Lover of mankind." },
      { tone: 1,
        text: "Though Thou wast not parted from His uncircumscribable bosom, " +
              "Thou didst ascend unto Thy beginningless Father, O Christ, " +
              "and the hosts on high accepted no addition to the thrice-holy praise. " +
              "But even after Thou didst become man they recognized Thee as the one Son, " +
              "only-begotten of the Father, O Lord. In the multitude of Thy compassions, have mercy on us." },
      { tone: 1,
        text: "Thine angels said unto the apostles, O Lord: Ye men of Galilee, " +
              "why stand ye looking up into heaven? " +
              "This is Christ God, Who hath been taken up from you into heaven. " +
              "He shall come again in the manner ye have seen Him going into heaven. " +
              "Worship Him in holiness and righteousness." },
      { tone: 4,
        text: "When Thou, O Christ, didst come unto the Mount of Olives to accomplish the good will of the Father, " +
              "the heavenly angels were amazed and the nethermost regions shuddered with fear. " +
              "The disciples stood by with joy and trembling as Thou spakest unto them, " +
              "and a cloud prepared as a throne awaited opposite them; " +
              "and heaven, throwing open the gates, shone with comeliness; " +
              "and the earth revealeth its hidden chambers, that the descent and immediate ascent might be made known unto Adam; " +
              "but his steps were led upwards as it were by a hand, and his mouth was heard blessing Thee greatly; " +
              "the cloud took Thee up and heaven received Thee within itself. " +
              "Thou hast wrought this great and strange deed, O Lord, for the salvation of our souls." },
      { tone: 4,
        text: "Thou hast renewed in Thyself Adam's nature, which had gone down into the lower parts of the earth, " +
              "and Thou didst raise it up above every principality and authority today. " +
              "For since Thou didst love it, Thou didst seat it together with Thyself; " +
              "since Thou hast taken compassion on it, Thou didst unite it to Thyself; " +
              "since Thou didst unite it to Thyself, Thou didst suffer with it; " +
              "and enduring the Passion, though Thou art impassable, Thou didst glorify it. " +
              "But the Bodiless ones said: Who is this comely man? " +
              "But not only is He man, but God and man; that which is manifest is twofold. " +
              "Wherefore, beside themselves, the angels, flying about clad in radiant vesture, " +
              "cried unto the disciples: Ye men of Galilee, He that is gone from you, " +
              "Jesus, Man and God, shall come again as the God-man to judge the living and the dead; " +
              "and He granteth unto the faithful the forgiveness of sins and great mercy." },
      { tone: 4,
        text: "When Thou didst ascend in glory, O Christ God, while the disciples were watching, " +
              "the clouds took Thee up with Thy flesh; the heavenly gates were lifted up; " +
              "the choir of the angels rejoiced with rejoicing; " +
              "the powers above cried aloud, saying: Lift up thy gates, O ye princes, " +
              "and the King of Glory shall enter therein. " +
              "And the disciples were astonished and said: Be Thou not parted from us, O Good Shepherd, " +
              "but send unto us Thy most holy Spirit to guide and establish our souls." },
      { label: "Glory, Both now", tone: 4,
        text: "O Lord, having fulfilled the mystery that was hidden from before the ages and from all generations, " +
              "as Thou art good Thou didst come with Thy disciples to the Mount of Olives, " +
              "having together with Thyself her that gave birth unto Thee, the Creator and Fashioner of all things; " +
              "for it was meet that she who, as Thy Mother, suffered at Thy Passion more than all, " +
              "should also enjoy the surpassing joy of the glorification of Thy flesh, O Master, " +
              "which we have attained by Thine Ascension to the heavens, " +
              "and we glorify Thy great mercy toward us." },
    ],

    stichera_aposticha: [
      { tone: 2, verse: null,
        text: "Thou wast born as Thou Thyself didst will; Thou didst appear of Thine own choice; " +
              "Thou didst suffer in the flesh, O our God. Thou didst arise from the dead, trampling down death; " +
              "and Thou didst ascend in glory, O Thou Who fillest all things, " +
              "and didst send unto us the divine Spirit, that we may praise and glorify Thy Divinity." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "Beholding Thee being taken up from the Mount of Olives, O Christ, " +
              "the Powers cried one to another: Who is this? And it was said unto them: " +
              "This is He that is strong and mighty. This is He that is mighty in war. " +
              "This is truly the King of Glory. And wherefore are His garments red? " +
              "Because He cometh from Bozrah, which is the flesh. " +
              "But Thou Thyself, being God, didst sit at the right hand of majesty " +
              "and didst send unto us the Holy Spirit, that He may guide and save our souls." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "Thou wast taken up in glory from the Mount of Olives, O Christ God, " +
              "in the presence of Thy disciples, and didst sit down at the right hand of the Father, " +
              "O Thou Who dost fill all things with Thy Divinity; " +
              "and Thou didst send unto them the Holy Spirit, " +
              "Who doth illumine and strengthen and sanctify our souls." },
    ],
    aposticha_glory: {
      tone: 6,
      text: "God is gone up in jubilation, the Lord with the voice of the trumpet, " +
            "to raise the fallen image of Adam, and to send the Comforting Spirit to sanctify our souls.",
    },
  },

  // ── P+40 — Friday of the Sixth Week: First Day of Ascension Afterfeast ─────
  // Source: St. Sergius 65.pdf | Fekula §4A (weekday, afterfeast of Ascension)
  // File covers Thursday evening Vespers (P+39 eve) + Friday Matins/Liturgy.
  // Ascension troparion replaces Resurrection troparion at all services.
  // Vespers: Great Prokeimenon Tone VII (Thursday evening afterfeast rule).
  // Magnificat sung, Small Doxology read — weekday confirmed.
  // Beatitudes from Ode I of Ascension Canon 1 including Irmos.
  40: {
    name: "Friday of the Sixth Week — First Day of Ascension Afterfeast",
    source_file: "65.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,  // Ascension troparion (Tone IV) governs

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, " +
            "the Redeemer of the world.",
      source: "ascension_feast",
    },

    kontakion_ode3: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      note: "Menaion kontakion if present; else Ascension kontakion",
    },
    kontakion_ode6: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      name: "Kontakion of the Ascension",
    },

    sessional_hymn_ode3: {
      tone: 8,
      text: "Having mounted upon heaven's clouds, O Christ, " +
            "Thou didst leave peace unto those upon the earth; " +
            "and Thou didst ascend and sit at the Father's right hand on high, " +
            "since Thou art one in essence with Him, and the Spirit, O Lord; " +
            "for though Thou hadst appeared in the flesh, without undergoing change. " +
            "Wherefore Thou dost now wait till the last consummation, " +
            "when Thou shalt return to judge all of mankind upon the earth. " +
            "O Thou most righteous Judge and Lord, " +
            "since Thou art a greatly merciful God, " +
            "do Thou spare our souls and do Thou grant to us, Thy lowly servants, " +
            "the pardon of our failings and our sins.",
      label: "Sessional Hymn of the Feast (Glory, Both now after Ode III)",
    },

    exapostilarion: [
      {
        tone: 3,
        text: "While Thy disciples looked on Thee, Thou didst ascend, " +
              "O Christ, unto the Father to sit beside Him. " +
              "Angels hastened, running on before, and cried: " +
              "Lift ye the gates up, lift them up; " +
              "for the King hath ascended " +
              "unto His bright primal glory.",
        note: "Glory: Menaion if present; Both now: feast exapostilarion",
      },
    ],

    vespers_prokeimenon: {
      tone: 7,
      text: "Our God is in heaven and on earth; all things whatsoever He hath willed He hath done.",
      verses: [
        "When Israel went out of Egypt, and the house of Jacob from among a barbarous people, " +
        "Judaea became His sanctuary, Israel His dominion.",
        "The sea beheld and fled, Jordan turned back.",
        "What aileth thee, O sea, that thou fleddest? And thou Jordan, that thou didst turn back?",
      ],
      type: "thursday_great_prokeimenon_afterfeast",
      note: "Great Prokeimenon on Thursday evening during Ascension afterfeast",
    },

    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    has_great_doxology: false,
    small_doxology_read: true,

    // ── VESPERS — LORD I HAVE CRIED (Thursday Evening) ──────────────────────
    // 3 Pentecostarion stichera Tone I (menaion_set_aside: false →
    // Menaion saint May 22 Basiliscus §2A contributes 3 slots at Glory per §2G1;
    // but §2G1 Simple rank: feast kontakion at ALL Hours, Menaion at Glory only).
    // Field renamed from stichera_lord_i_cried_pentecostarion → stichera_lord_i_call. // v0.3.7
    stichera_lord_i_call: [
      { tone: 1,
        text: "As Thou didst ascend into the heavens, " +
              "from whence Thou didst also descend, " +
              "leave us not orphaned, O Lord; " +
              "let Thy Spirit come, bringing peace unto the world; " +
              "show Thou unto the sons of men the works of Thy might, " +
              "O Lord and Lover of mankind." },
      { tone: 1,
        text: "Though Thou wast not parted from His uncircumscribable bosom, " +
              "Thou didst ascend unto Thy beginningless Father, O Christ, " +
              "and the hosts on high accepted no addition to the thrice-holy praise. " +
              "But even after Thou didst become man " +
              "they recognized Thee as the one Son, " +
              "only-begotten of the Father, O Lord. " +
              "In the multitude of Thy compassions, have mercy on us." },
      { tone: 1,
        text: "Thine angels said unto the apostles, O Lord: " +
              "Ye men of Galilee, " +
              "why stand ye looking up into heaven? " +
              "This is Christ God, Who hath been taken up from you into heaven. " +
              "He shall come again in the manner ye have seen Him going into heaven. " +
              "Worship Him in holiness and righteousness." },
      // Slots [3][4][5] = Menaion stichera (May 22 Basiliscus) per §2G1
      // (assembled from SAMPLE_MENAION["05-22"].stichera_lord_i_call by engine)
    ],

    // Glory — doxasticon Tone II (renamed from stichera_glory_both_now → stichera_glory)
    // Field renamed from stichera_glory_both_now → stichera_glory. // v0.3.7
    stichera_glory: {
      tone: 2,
      text: "Thou wast born as Thou Thyself didst will; " +
            "Thou didst appear of Thine own choice; " +
            "Thou didst suffer in the flesh, O our God. " +
            "Thou didst arise from the dead, trampling down death; " +
            "and Thou didst ascend in glory, O Thou Who fillest all things, " +
            "and didst send unto us the divine Spirit, " +
            "that we may praise and glorify Thy Divinity.",
    },

    // Both now — lic_theotokion from P+39 Ascension feast (same theotokion governs afterfeast)
    // Source: 64.pdf lic_theotokion Tone II (already encoded in P+39; same text applies). // v0.3.7
    lic_theotokion: {
      tone: 2,
      text: "The shadow of the law hath passed now that grace hath come, " +
            "for as the Bush wrapped in flame was not consumed, " +
            "so didst thou bear a Child O Virgin and remained a Virgin; " +
            "in place of a pillar of fire, the Sun of righteousness hath dawned, " +
            "instead of Moses, Christ is come, the salvation of our souls.",
    },

    // ── VESPERS — APOSTICHA (Thursday Evening) ───────────────────────────────
    // Ascension feast aposticha — same as P+41 aposticha (Tone II, "O House of Ephratha").
    // Source: 65.pdf. Added in v0.3.7 — was missing from original P+40 encode.
    stichera_aposticha: [
      { tone: 2, verse: null,
        text: "Having fulfilled His will, thus pleasing well the Father, " +
              "Thou didst ascend in glory. " +
              "The things of heaven didst Thou unite thus with the things of earth." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "O merciful One, Thou didst ascend unto Thy Father, " +
              "from Whom Thou wast not parted, and didst exalt " +
              "our nature thus which lay prostrate, O Lord." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "A brilliant cloud of light conveyed Thee to the heavens, " +
              "whilst with great fear and trembling " +
              "the angels came and ministered unto Thy divine Ascension." },
    ],

    matins_format: "god_is_the_lord",

    // Matins Aposticha — unique "O House of Ephratha" melody stichera
    stichera_matins_aposticha: [
      { tone: 2, melody: "O House of Ephratha",
        text: "O new and wondrous marvel! " +
              "as mortal human nature " +
              "ascendeth to the heavens; " +
              "for it is now made one with the Word, " +
              "Who is Al-mighty God." },
      { verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        tone: 2, melody: "O House of Ephratha",
        text: "There hath shone forth today " +
              "the bright day of the Master's " +
              "divine ascent " +
              "to the heavens. This radiant festival " +
              "doth shed its radiance upon all." },
      { verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        tone: 2, melody: "O House of Ephratha",
        text: "Even as Thou didst send to " +
              "Thy divine disciples " +
              "Thy consubstantial Spirit, " +
              "O Christ, so do Thou send down Thy grace " +
              "unto Thy people." },
    ],

    stichera_matins_aposticha_glory: {
      tone: 5,
      text: "O Lord, as Thou wast being taken up, " +
            "to there from whence Thou wast not separated, " +
            "the hosts of angels and all the Bodiless Ones " +
            "cried out rejoicing unto the Powers above: " +
            "Lift up the gates, O ye princes, " +
            "and the King of Glory shall enter therein. " +
            "For the cherubic throne took Thee up in the flesh. " +
            "O Lord, glory be to Thee.",
    },

    canons: [
      { name: "Ascension Canon 1", tone: 5, troparia_per_ode: 8,
        menaion_troparia_per_ode: 4,
        note: "8 feast troparia + 4 Menaion per ode" },
    ],

    feast_e: "Acts 19:1-8",
    feast_g: "John 14:1-11",
    aposticha_source: "pentecostarion",

    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",

    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",

    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",

    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    beatitudes_source: "6 verses from Ode I of Ascension Canon 1 including Irmos",

    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,
    menaion_set_aside: false,
    note: "Vespers opens P+40 week (Thursday evening). Great Prokeimenon Tone VII. " +
          "Ascension troparion replaces Resurrection troparion throughout. " +
          "Matins Aposticha uses 'O House of Ephratha' special melody (Tone II) — unique stichera captured. " +
          "Beatitudes from Ode I of Ascension Canon 1 (including Irmos = 6 verses). " +
          "Prokeimenon Tone VII and Alleluia Tone II govern throughout Ascension afterfeast. " +
          "Magnificat sung, Small Doxology read — weekday confirmed. " +
          "Having beheld the Resurrection NOT used (Pascha given up after P+38).",
  },

  // ── P+41 — Saturday of the Sixth Week — Ascension Afterfeast, Day 2 ──────
  // Source: 66.pdf. Drive record: 66.txt.
  // ── P+41 — Saturday of the Sixth Week — Ascension Afterfeast, Day 2 ──────
  // Source: 66.pdf. Drive record: P+41.txt. Fekula §4A.
  // 66.pdf covers Friday Evening (P+40 Vespers) + Saturday Matins/Liturgy (P+41).
  // §2G1: Menaion saint (May 22, Basiliscus §2A) participates at Glory only.
  // hours_kontakion = single Ascension kontakion governs all four Hours. // v0.3.6
  41: {
    name: "Saturday of the Sixth Week — Ascension Afterfeast, Day 2",
    source_file: "66.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    menaion_set_aside: false,  // §2G1: Menaion saint at Glory; feast governs Hours
    has_great_doxology: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },

    // ── VESPERS (Friday Evening / P+40 eve) — LORD I HAVE CRIED ─────────────
    // 3 Pentecostarion Tone IV + 3 Menaion (May 22, Basiliscus — see 05-22-v2.txt)
    // Source: 66.pdf. Spec. Mel.: "Thou hast given a sign"
    stichera_lord_i_call: [
      { tone: 4,
        text: "Thou didst suffer as a man, though as God Thou art unapproachable. " +
              "Thou didst arise on the third day despoiling death, " +
              "and didst raise up all those who had reposed in corruption. " +
              "And having ascended unto Thy Father, O Christ, " +
              "Thou didst promise that Thou wouldst send the Comforter " +
              "to Thy sacred apostles, O Almighty Jesus, Thou Savior of our souls." },
      { tone: 4,
        text: "Why stand ye gazing into the heavens? " +
              "said the angels in human form, unto the Word's initiates: " +
              "He Whom ye beheld ascending on a cloud of light, " +
              "shall in a like manner come again to judge the world, as He Himself told you. " +
              "Therefore, go ye forth and accomplish all that He hath said." },
      { tone: 4,
        text: "Having arisen from the tomb in a manner transcending thought, O almighty Lord, " +
              "Thou didst lead to Bethany Thy beloved ones. " +
              "And having arrived at the Mount of Olives, O Word, Thou didst bless them all. " +
              "And Thou wast taken up from thence whilst angels ministered unto Thee, " +
              "O Almighty Jesus, Thou Savior of our souls." },
      // Slots [4][5][6] = Menaion stichera (May 22 Basiliscus) — see SAMPLE_MENAION["05-22"]
    ],
    stichera_glory: {
      tone: 6,
      text: "Today the hosts on high, beholding our nature in the heavens, " +
            "marvel at the strange manner of its ascent, " +
            "and, being perplexed, they said one to another: Who is this that cometh? " +
            "And when they saw that it was their own Master, " +
            "they were commanded to lift up the heavenly gates, " +
            "Who again shalt come from thence in the flesh, " +
            "as the Judge of all and the Almighty God.",
    },

    // ── VESPERS PROKEIMENON (Friday Evening) ────────────────────────────────
    // Tone VII weekday prokeimenon (not the Great Prokeimenon — that was Thursday eve P+40)
    vespers_prokeimenon: {
      tone: 7,
      text: "O God, my helper art Thou, and Thy mercy shall go before me.",
      stichos: "Rescue me from mine enemies, O God, and from them that rise up against me redeem me.",
    },

    // ── VESPERS APOSTICHA (Friday Evening) ──────────────────────────────────
    // Ascension stichera Tone II. Spec. Mel.: "O House of Ephratha"
    stichera_aposticha: [
      { tone: 2, verse: null,
        text: "Having fulfilled His will, thus pleasing well the Father, " +
              "Thou didst ascend in glory. " +
              "The things of heaven didst Thou unite thus with the things of earth." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "O merciful One, Thou didst ascend unto Thy Father, " +
              "from Whom Thou wast not parted, and didst exalt " +
              "our nature thus which lay prostrate, O Lord." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "A brilliant cloud of light conveyed Thee to the heavens, " +
              "whilst with great fear and trembling " +
              "the angels came and ministered unto Thy divine Ascension." },
    ],
    aposticha_glory: {
      tone: 7,
      text: "Unto the Mount of Olives didst Thou come, Thou Who hast mercy on the race of mankind. " +
            "And a cloud took Thee up out of the sight of Thy disciples, " +
            "who, on one hand, trembled because of that which they beheld, " +
            "and, on the other hand, rejoiced at their expectation of the Holy Spirit, " +
            "wherein do Thou make us steadfast, O Savior, and have mercy on us.",
    },

    // ── MATINS APOSTICHA (Saturday Morning) ─────────────────────────────────
    // Ascension stichera Tone II. Spec. Mel.: "O House of Ephratha"
    stichera_matins_aposticha: [
      { tone: 2, verse: null,
        text: "The Lord said to His friends: I shall not leave as orphans " +
              "all you whom I have gathered; " +
              "but rather I shall send forth the Holy Spirit unto you." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "The angels cried and said unto the wise apostles: " +
              "O righteous Galileans, He shall return in like manner " +
              "as ye see Him now depart." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "As they descended from that hallowed Mount of Olives, " +
              "O Word, Thy blest disciples extolled Thy dread Ascension " +
              "while glorifying it with joy." },
    ],
    stichera_matins_aposticha_glory: {
      tone: 8,
      text: "Thou wast taken up in glory from earth into the heavens, " +
            "Thou Who dost fill all things with Thy Divinity; " +
            "and Thou didst sit down at the right hand of the Father, " +
            "Thou Who in the beginning wast God the Word. " +
            "Wherefore, as the heavenly powers beheld, they said unto the apostles with fear: " +
            "Why look ye, gazing up into the heavens? " +
            "He Whom ye have beheld, the Same shall come again with glory " +
            "to judge all the earth and to recompense each according to his works. " +
            "Let us cry unto Him: O incomprehensible Lord, glory be to Thee.",
    },

    // ── BEATITUDES (Saturday Liturgy) ───────────────────────────────────────
    // 6 verses from Ode III of Ascension Canon 2 (including Irmos). Source: 66.pdf AT LITURGY.
    beatitudes_source: "6 verses from Ode III of Ascension Canon 2 including Irmos (66.pdf)",
    beatitudes_troparia: [
      "By the power of Thy Cross, O Christ, do Thou make steadfast mine understanding, " +
      "that I may hymn and glorify Thy saving Ascension.",  // Irmos
      "Thou didst go up unto the Father, O Life-giving Christ, " +
      "and Thou didst exalt our race by Thine ineffable compassion, O Lover of mankind.",
      "The orders of angels, O Savior, on beholding man's nature going up together with Thee, " +
      "were amazed and ceaselessly praised Thee.",
      "The choirs of angels were amazed, O Christ, as they beheld thee taken up with Thy body, " +
      "and they praised Thy holy Ascension.",
      // Glory:
      "The earth doth celebrate and dance for joy, and heaven doth rejoice today " +
      "on the Ascension of the Maker of creation, Who by His volition clearly united " +
      "that which was separated.",
      // Both now:
      "Since thou hast given birth to God Who destroyed death and Who alone is immortal, " +
      "O all-pure Virgin Mother, do thou ever entreat Him to slay the passions " +
      "that slay me and to save me.",
    ],

    // ── LITURGY PROPERS ──────────────────────────────────────────────────────
    feast_e: "Acts 20:7-12",
    feast_g: "John 14:1-11",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
  },

  // ── P+42 — 7th Sunday of Pascha — Holy Fathers of the First Ecumenical Council ──
  // Source: 70.pdf. Drive record: P+42.txt. Fekula §4B13.
  // THREE troparia: Resurrection T6 (primary), Holy Fathers T8 (Glory), Ascension T4 (Both now).
  // NOTE: MOVABLE Sunday nearest June 8 (Pascha+42) — NOT fixed June 8 date.
  // In 2026: May 24. Fixed June 8 = Translation of Relics of GM Theodore Stratelates.
  // Menaion saint (May 24, Symeon Stylites §2E) fully set aside — Sunday governs. // v0.3.6
  42: {
    name: "Seventh Sunday of Pascha — Holy Fathers of the First Ecumenical Council",
    source_file: "70.pdf",
    fekula_section: "4B13",
    hours_format: "pentecostarion_sunday",
    tone: 6,
    menaion_set_aside: true,
    has_great_doxology: true,  // Great Doxology sung at Sunday Matins
    has_litya: true,
    has_paroemias: true,
    magnificat_sung: true,     // Magnificat sung at Ode IX per PDF rubric
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 6,
      text: "The angelic hosts were before Thy tomb, " +
            "the guards became as dead men, " +
            "and Mary stood in the sepulcher looking for Thy pure body. " +
            "Thou didst despoil Hades, for Thou wast not tempted by it. " +
            "Thou didst come and meet the Virgin to give life. " +
            "O Lord, Who didst rise from the dead, glory be to Thee.",
      source: "resurrection_tone_6",
    },
    troparion_2: {
      tone: 8,
      text: "Most glorious art Thou, O Christ our God, " +
            "Thou hast established our Holy Fathers as luminaries upon the earth " +
            "and through them hath instructed us all in the true faith. " +
            "O Most merciful One, glory be to Thee.",
      source: "holy_fathers",
      placement: "glory",
    },
    // troparion_3 (Both now): Ascension Tone IV — see hours_kontakion.source
    troparion_3: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
      source: "ascension",
      placement: "both_now",
    },
    kontakion_ode6: {
      tone: 8,
      text: "The preaching of the apostles and the doctrines of the Fathers " +
            "confirmed the one Faith in the Church. " +
            "And wearing the garment of truth woven from the theology on high, " +
            "she rightly divideth and glorifieth the great mystery of piety.",
      source: "holy_fathers",
      placement: "glory",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      source: "ascension",
      placement: "both_now",
    },

    // ── VESPERS — LORD I HAVE CRIED (Saturday Evening) ───────────────────────
    // 10 stichera: 3 Octoechos (T6) + 3 Ascension (T6) + 4 Holy Fathers (T6)
    stichera_lord_i_call: [
      // Octoechos Tone VI (3):
      { tone: 6, verse: "Bring my soul out of prison that I may confess Thy name.",
        text: "Victorious over Hades, O Christ, Thou didst ascend the Cross " +
              "that Thou mightest raise up with Thyself those who sat in the darkness of death; " +
              "free among the dead, Thou didst pour forth life from Thine own light. " +
              "O All-powerful Savior, have mercy on us." },
      { tone: 6, verse: "The righteous shall wait patiently for me until Thou shalt reward me.",
        text: "Today Christ, having trampled on death, hath arisen as He foretold, " +
              "granting joy to the world, that we may all cry aloud the hymn and say: " +
              "O Source of life, O unapproachable light, O All-powerful Savior, have mercy on us." },
      { tone: 6, verse: "Out of the depths have I cried unto Thee, O Lord; O Lord, hear my voice.",
        text: "Where shall we sinners escape Thee, O Lord, who art present in all creation? " +
              "In heaven? Thou dwellest there. In Hades? There Thou didst trample on death. " +
              "In the depths of the sea? Thy hand is also there O Master. " +
              "To Thee we flee and falling down before Thee we implore: " +
              "O Lord risen from the dead, have mercy on us." },
      // Ascension Tone VI (3):
      { tone: 6, verse: "Let Thine ears be attentive to the voice of my supplication.",
        text: "The Lord was taken up into the heavens that He might send the Comforter unto the world. " +
              "The heavens made ready His throne, and the clouds His Ascension. " +
              "The angels marvel as they see a man more exalted than they. " +
              "The Father receiveth Him Whom He had with Him eternally in His bosom. " +
              "The Holy Spirit commandeth all His angels: Lift up your gates, O ye princes. " +
              "All ye nations, clap your hands; Christ hath ascended whither He was before." },
      { tone: 6, verse: "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? For with Thee there is forgiveness.",
        text: "O Lord, the cherubim were amazed at Thine Ascension, " +
              "when they beheld Thee, O God, Who sittest on them, ascending upon the clouds. " +
              "And we glorify Thee, for Thy mercy is good. Glory be to Thee." },
      { tone: 6, verse: "For Thy name's sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, my soul hath hoped in the Lord.",
        text: "Having beheld Thine ascents on the holy mountains, O Christ, " +
              "Thou effulgence of the Father's glory, we praise the radiant likeness of thy countenance. " +
              "We worship Thy passion, we honor Thy Resurrection, " +
              "and we glorify Thy glorious Ascension. Have mercy on us." },
      // Holy Fathers Tone VI (4):
      { tone: 6, verse: "From the morning watch until night, from the morning watch let Israel hope in the Lord.",
        text: "Before the morning star from the womb Thou wast begotten from the Father " +
              "motherless before the ages, though Arius held Thou wast created and thus not God, " +
              "boldly and mindlessly identifying thee, the Creator, with things created, " +
              "thus storing up fuel for the eternal fire. " +
              "But the Council gathered in Nicaea proclaimed that Thou, O Lord, " +
              "art truly the Son of God, one in rank with the Father and the Spirit." },
      { tone: 6, verse: "For with the Lord there is mercy, and with Him is plenteous redemption; and He shall redeem Israel out of all his iniquities.",
        text: "O My Savior, Who hath rent Thy raiment? " +
              "Thou didst say: It was Arius who hath cut asunder the Trinity's headship, " +
              "which is one in rank and honour, disputing that Thou art One of the Most Holy Trinity; " +
              "thereby teaching Nestorius the godless one to not say Theotokos. " +
              "But the Council gathered in Nicaea proclaimed that Thou, O Lord, " +
              "art truly the Son of God, one in rank with the Father and the Spirit." },
      { tone: 6, verse: "O praise the Lord, all ye nations; praise Him, all ye peoples.",
        text: "Keeping his eyes shut, that he might not see light, " +
              "Arius fell headlong into the deep pit of sin. " +
              "His bowels were rent asunder by a divine hook, " +
              "such that he violently gave up all his substance and his soul " +
              "and in this manner became another Judas, through his most evil purpose and disposition. " +
              "But the Council gathered in Nicaea proclaimed that Thou, O Lord, " +
              "art truly the Son of God, one in rank with the Father and the Spirit." },
      { tone: 6, verse: "For He hath made His mercy to prevail over us, and the truth of the Lord abideth forever.",
        text: "Mindless, foolish Arius once divided the all-holy Trinity's sole dominion " +
              "thus making three essences, dissimilar and foreign. " +
              "Hence, the God-bearing Fathers fervently gathered together, " +
              "burning with zeal like Elias the Tishbite, " +
              "cutting down with the sharp sword of the Holy Spirit the vile blasphemer, " +
              "who taught blasphemous doctrines, as thus the Spirit revealed unto them." },
    ],
    stichera_glory: {
      tone: 6,
      text: "Let us acclaim today those mystical trumpets of the Spirit, the God-bearing Fathers, " +
            "who, in the midst of the Church, sang a harmonious song of theology, " +
            "teaching that the Trinity is one, unchanging in essence and Godhead; " +
            "they are the refuters of Arius, and the foremost warriors of the Orthodox. " +
            "And they ever intercede with the Lord that our souls find mercy.",
    },
    lic_theotokion: {
      tone: 6,
      text: "Who doth not call thee blessed, O most holy Virgin? " +
            "Who will not hymn thy most pure birthgiving? " +
            "For the only-begotten Son Who hath shone forth timelessly from the Father, " +
            "came forth, ineffably incarnate, from thee, O pure one; " +
            "By nature He is God, by nature for our sakes, He hath become a man, " +
            "not divided into two Hypostases, but known in two natures without commingling. " +
            "Him do thou beseech, O pure and all-blessed one, that our souls find mercy!",
    },

    // ── VESPERS — PROKEIMENON (Saturday Evening — Great Vespers) ─────────────
    vespers_prokeimenon: {
      tone: 6,
      text: "The Lord is King, He is clothed with majesty.",
      verses: [
        "The Lord is clothed with strength and He hath girt Himself.",
        "For He established the universe which shall not be shaken.",
        "Holiness becometh Thy house, O Lord, unto length of days.",
      ],
      type: "saturday_great_vespers",
    },

    // ── VESPERS — OT PAROEMIAS ────────────────────────────────────────────────
    paroemia_1: "Genesis 14:14-20",   // Abram rescues Lot; Melchizedek type of the priesthood
    paroemia_2: "Deuteronomy 1:8-11, 15-17",  // Moses appoints judges; judgment is God's
    paroemia_3: "Deuteronomy 10:14-21", // Heaven and earth are the Lord's; God of gods

    // ── LITIYA STICHERA ───────────────────────────────────────────────────────
    litya_stichera: [
      { tone: 1,
        text: "As Thou didst ascend into the heavens, from whence Thou didst also descend, " +
              "leave us not orphaned, O Lord; let Thy Spirit come, bringing peace unto the world; " +
              "show Thou unto the sons of mankind the works of Thy might, O Lord and Lover of mankind." },
    ],
    litya_glory: {
      tone: 3,
      text: "Ye have become exact keepers of the apostolic traditions, O Holy Fathers; " +
            "for in setting forth in council the dogma of the consubstantiality " +
            "of the Holy Trinity in Orthodox fashion, ye cast down the blasphemy of Arius. " +
            "Then, after censuring Macedonius, the enemy of the Holy Spirit, " +
            "ye condemned Nestorius, Eutyches, Dioscorus, Sabellius, and Severus the headless one. " +
            "Wherefore we pray, make supplication on our behalf, " +
            "that we be delivered from their error, " +
            "and that our life be preserved blameless in the Faith.",
    },
    litya_both_now: {
      tone: 7,
      text: "O Lord, when Thou didst fulfill the mystery of Thy dispensation, " +
            "Thou didst take Thy disciples and ascend the Mount of Olives; " +
            "and behold, Thou didst pass through the firmament of heaven. " +
            "O Thou Who for my sake didst become poor like unto me, " +
            "and Who didst ascend thither whence Thou wast not separated, " +
            "send forth Thy most holy Spirit to enlighten our souls.",
    },

    // ── VESPERS — APOSTICHA (Saturday Evening) ───────────────────────────────
    stichera_aposticha: [
      { tone: 6, verse: null,
        text: "Thy Resurrection O Christ our Savior, the angels in the heavens hymn; " +
              "grant also unto us who are here on earth to glorify Thee with pure hearts." },
      { tone: 6, verse: "The Lord is King: He is clothed with majesty. The Lord is clothed with strength and He hath girt Himself.",
        text: "Thou as God all-powerful, hast smashed the gates of brass and shattered the bars of Hades, " +
              "and Thou hast raised the fallen human race. " +
              "Therefore with one accord we also cry out to Thee: " +
              "O Lord, risen from the dead, glory be to Thee!" },
      { tone: 6, verse: "For He established the universe which shall not be shaken.",
        text: "Wishing to restore us from our ancient fall, Christ wast nailed to a Cross and placed in a tomb. " +
              "The myrrh-bearing Women, as they sought Him with tears, said, lamenting: " +
              "Alas, O Savior of all, how is it that Thou deigned to dwell in a tomb? " +
              "But as they lamented an angel cried unto them saying: " +
              "End your lament! Go and tell the apostles that the Lord hath risen, " +
              "granting the world remission and great mercy." },
    ],
    aposticha_glory: {
      tone: 4,
      text: "O ye assemblies of the Orthodox, let us celebrate today with faith and piety " +
            "the annual memorial of the God-bearing Fathers " +
            "who, in the illustrious city of Nicaea, came together from the whole inhabited world. " +
            "For with pious mind they refuted the godless dogma of the grievous Arius, " +
            "and by synodal decree banished him from the Orthodox Catholic Church. " +
            "And they instructed all to openly confess the consubstantial and co-eternal Son of God, " +
            "Who existed before the ages. This, in exactness and piety, did they set forth in the Symbol of Faith. " +
            "Wherefore, following their divine doctrines and believing with assurance, " +
            "we worship, in one Godhead, the Father, Son and all-holy Spirit, the Trinity one in essence.",
    },
    aposticha_theotokion: {
      tone: 4,
      text: "O Lord, having fulfilled the mystery that was hidden from before the ages and from all generations, " +
            "as Thou art good Thou didst come with Thy disciples to the Mount of Olives, " +
            "having together with Thyself her that gave birth unto Thee, the Creator and Fashioner of all things; " +
            "for it was meet that she who, as Thy Mother, suffered at Thy Passion more than all, " +
            "should also enjoy the surpassing joy of the glorification of Thy flesh, O Master, " +
            "which we have attained by Thine Ascension to the heavens, " +
            "and we glorify Thy great mercy toward us.",
    },

    // ── MATINS ────────────────────────────────────────────────────────────────
    matins_gospel: 10,  // 10th Resurrectional Gospel

    // ── BEATITUDES (Sunday Liturgy) ───────────────────────────────────────────
    // 12 troparia: 4 Octoechos + 4 Ascension Ode IV + 4 Holy Fathers Ode VI
    beatitudes_source: "4 Octoechos + 4 Ascension Ode IV + 4 Holy Fathers Ode VI (70.pdf)",

    // ── LITURGY PROPERS ───────────────────────────────────────────────────────
    feast_e: "Acts 20:16-18, 28-36",
    feast_g: "John 17:1-13",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 4,
    prokeimenon_text: "Blessed art Thou, O Lord, the God of our fathers, " +
      "and praised and glorified is Thy name unto the ages.",
    prokeimenon_stichos: "For righteous art Thou in all which Thou hast done for us.",
    alleluia_tone: 1,
    alleluia_verse: "The God of gods, the Lord hath spoken, and He hath called the earth.",
    alleluia_stichos: "Gather together unto Him his holy ones who have established His covenant upon sacrifices.",
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",
    communion_verse: "Praise the Lord in the heavens, praise Him in the highest! " +
      "Verse: Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
  },

  // ── P+43 — Monday of the Seventh Week — Ascension Afterfeast, Day 4 ──────
  // Source: 71.pdf. Drive record: 71.txt.
  // ── P+43 — Monday of the Seventh Week — Ascension Afterfeast, Day 4 ──────
  // Source: 71.pdf (Sunday Evening / Monday Matins+Liturgy). Drive record: P+43.txt.
  // Vespers stichera from 72.pdf (Monday Evening) — that PDF covers P+44 Vespers.
  // NOTE: P+43 Vespers = Sunday Evening in 7th Week (71.pdf) — content same as P+42 eve
  //   which we already have. The 3 Pentecostarion slots use the Holy Fathers stichera
  //   (from P+42 Sunday Vespers content in 71.pdf). Menaion slots: May 25 (St. John Baptist).
  // Beatitudes: from Ode VI of Ascension Canon 1 (71.pdf AT LITURGY not present; same pattern). // v0.3.7
  43: {
    name: "Monday of the Seventh Week — Ascension Afterfeast, Day 4",
    source_file: "71.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    menaion_set_aside: false,
    has_great_doxology: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },

    // ── VESPERS — LORD I HAVE CRIED (Sunday Evening) ─────────────────────────
    // Source: 71.pdf. 3 Pentecostarion Tone VI (Holy Fathers) + 3 Menaion (May 25 = St. John Baptist).
    // NOTE: Sunday evening Vespers for 7th Week uses Holy Fathers stichera (P+42 content).
    // These are the same 3 stichera as P+42's LIC slots [1-3] (Octoechos Resurrection T6).
    // The assembly engine will pull May 25 Menaion stichera for the remaining 3+2 slots
    // (8 total during Pentecostarion: 3 Pentecostarion + 5 Menaion per 05-25.pdf rubric).
    stichera_lord_i_call: [
      // Pentecostarion slots: Holy Fathers stichera (Tone VI) from 71.pdf Sunday Evening
      { tone: 6, text: "Before the morning star from the womb Thou wast begotten from the Father " +
                       "motherless before the ages, though Arius held Thou wast created and thus not God, " +
                       "boldly and mindlessly identifying thee, the Creator, with things created, " +
                       "thus storing up fuel for the eternal fire. " +
                       "But the Council gathered in Nicaea proclaimed that Thou, O Lord, " +
                       "art truly the Son of God, one in rank with the Father and the Spirit." },
      { tone: 6, text: "O My Savior, Who hath rent Thy raiment? " +
                       "Thou didst say: It was Arius who hath cut asunder the Trinity's headship, " +
                       "which is one in rank and honour, disputing that Thou art One of the Most Holy Trinity; " +
                       "thereby teaching Nestorius the godless one to not say Theotokos. " +
                       "But the Council gathered in Nicaea proclaimed that Thou, O Lord, " +
                       "art truly the Son of God, one in rank with the Father and the Spirit." },
      { tone: 6, text: "Keeping his eyes shut, that he might not see light, " +
                       "Arius fell headlong into the deep pit of sin. " +
                       "His bowels were rent asunder by a divine hook, " +
                       "such that he violently gave up all his substance and his soul " +
                       "and in this manner became another Judas, through his most evil purpose and disposition. " +
                       "But the Council gathered in Nicaea proclaimed that Thou, O Lord, " +
                       "art truly the Son of God, one in rank with the Father and the Spirit." },
      // Menaion slots [4-6+]: May 25 St. John Baptist stichera (assembled from SAMPLE_MENAION["05-25"])
    ],
    // Glory — Holy Fathers doxasticon Tone VI (from 71.pdf)
    stichera_glory: {
      tone: 6,
      text: "Let us acclaim today those mystical trumpets of the Spirit, the God-bearing Fathers, " +
            "who, in the midst of the Church, sang a harmonious song of theology, " +
            "teaching that the Trinity is one, unchanging in essence and Godhead; " +
            "they are the refuters of Arius, and the foremost warriors of the Orthodox. " +
            "And they ever intercede with the Lord that our souls find mercy.",
    },
    // Both now — Ascension sticheron Tone VI (from 71.pdf)
    lic_theotokion: {
      tone: 6,
      text: "Having beheld Thine ascents on the holy mountains, O Christ, " +
            "Thou effulgence of the Father's glory, we praise the radiant likeness of thy countenance. " +
            "We worship Thy passion, we honor Thy Resurrection, " +
            "and we glorify Thy glorious Ascension. Have mercy on us.",
      note: "Ascension sticheron used as Both now in 7th Week Sunday evening during afterfeast",
    },

    // ── VESPERS — PROKEIMENON (Sunday Evening) ────────────────────────────────
    // Sunday evening prokeimenon Tone VIII (regular Sunday evening)
    vespers_prokeimenon: {
      tone: 8,
      text: "Behold now, bless ye the Lord, all ye servants of the Lord.",
      stichos: "Ye that stand in the house of the Lord, in the courts of the house of our God.",
    },

    // ── VESPERS — APOSTICHA (Sunday Evening) ─────────────────────────────────
    // Holy Fathers aposticha (3 stichera) from 71.pdf
    stichera_aposticha: [
      { tone: 6, verse: null,
        text: "Having brought together all knowledge of things of the spirit " +
              "and made careful inquiry by the divine Spirit's grace, " +
              "lo, like godly scribes the august Fathers " +
              "wrote the celestial Symbol, the august Creed of our holy Faith, " +
              "wherein they clearly teach that, like God the Father, " +
              "the Word of God, is also beginningless and is consubstantial with Him in truth. " +
              "Thus did these all-blest, renowned and godly-minded ones " +
              "indeed follow in manifest manner in that which the apostles taught." },
      { tone: 6, verse: "Blessed art Thou, O Lord, the God of our Fathers.",
        text: "When those blest defenders of the Gospel's doctrines, Christ's heralds, " +
              "had received the fullness of noetic enlightenment through the Spirit's grace, " +
              "they proclaimed the august oracle to all mankind under inspiration from our God, " +
              "that most transcendent truth which, though few in words, is sublimely wise. " +
              "These champions of piety and pious traditions and teachings " +
              "thus received revelation of piety and dogma from on high " +
              "and were enlightened and then set forth that faith which was taught of God." },
      { tone: 6, verse: "Look upon me, and have mercy on me.",
        text: "Lo, the divine shepherds, as devoted servants of Christ God " +
              "and sacred initiates of the preaching inspired by God, " +
              "brought together their wisdom as shepherds and their pastoral knowledge. " +
              "Then most righteously did they stir up their righteous anger " +
              "and cast out from the plenitude of the Church the prowling and destructive wolves, " +
              "driving them far off with the Spirit's sling, " +
              "since those thus expelled had incurred a fall that leadeth unto death " +
              "and were diseased with an illness that could not be relieved or cured." },
    ],
    aposticha_glory: {
      tone: 3,
      text: "Ye have become exact keepers of the apostolic traditions, O Holy Fathers; " +
            "for in setting forth in council the dogma of the consubstantiality " +
            "of the Holy Trinity in Orthodox fashion, ye cast down the blasphemy of Arius. " +
            "Then, after censuring Macedonius, the enemy of the Holy Spirit, " +
            "ye condemned Nestorius, Eutyches, Dioscorus, Sabellius, and Severus the headless one. " +
            "Wherefore we pray, make supplication on our behalf, " +
            "that we be delivered from their error, " +
            "and that our life be preserved blameless in the Faith.",
    },
    aposticha_theotokion: {
      tone: 4,  // Ascension Both now from 71.pdf
      text: "O Lord, having fulfilled the mystery that was hidden from before the ages and from all generations, " +
            "as Thou art good Thou didst come with Thy disciples to the Mount of Olives, " +
            "having together with Thyself her that gave birth unto Thee, the Creator and Fashioner of all things; " +
            "for it was meet that she who, as Thy Mother, suffered at Thy Passion more than all, " +
            "should also enjoy the surpassing joy of the glorification of Thy flesh, O Master, " +
            "which we have attained by Thine Ascension to the heavens, " +
            "and we glorify Thy great mercy toward us.",
    },

    // ── BEATITUDES (Monday Liturgy) ───────────────────────────────────────────
    // Source: not separately printed in 71.pdf; pattern from afterfeast = Ode VI of Ascension Canon
    beatitudes_source: "6 verses from Ode VI of Ascension Canon (afterfeast pattern)",

    // ── LITURGY PROPERS ───────────────────────────────────────────────────────
    feast_e: "Acts 21:8-14",
    feast_g: "John 14:27-15:7",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
  },

  // ── P+44 — Tuesday of the Seventh Week — Ascension Afterfeast, Day 5 ─────
  // Source: 72.pdf (Monday Evening / Tuesday Matins+Liturgy). Drive record: P+44.txt.
  // Vespers stichera from 72.pdf. Beatitudes from Ode VI of Ascension Canon. // v0.3.7
  44: {
    name: "Tuesday of the Seventh Week — Ascension Afterfeast, Day 5",
    source_file: "72.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    menaion_set_aside: false,
    has_great_doxology: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },

    // ── VESPERS — LORD I HAVE CRIED (Monday Evening) ─────────────────────────
    // Source: 72.pdf. 3 Pentecostarion Tone IV + 3 Menaion (May 26 = Apostle Carpus).
    // Spec. Mel.: "Thou hast given a sign" — same stichera as P+40/P+41 afterfeast days.
    stichera_lord_i_call: [
      { tone: 4, text: "Thou didst suffer as a man, though as God Thou art unapproachable. " +
                       "Thou didst arise on the third day despoiling death, " +
                       "and didst raise up all those who had reposed in corruption. " +
                       "And having ascended unto Thy Father, O Christ, " +
                       "Thou didst promise that Thou wouldst send the Comforter " +
                       "to Thy sacred apostles, O Almighty Jesus, Thou Savior of our souls." },
      { tone: 4, text: "Why stand ye gazing into the heavens? " +
                       "said the angels in human form, unto the Word's initiates: " +
                       "He Whom ye beheld ascending on a cloud of light, " +
                       "shall in a like manner come again to judge the world, as He Himself told you. " +
                       "Therefore, go ye forth and accomplish all that He hath said." },
      { tone: 4, text: "Having arisen from the tomb in a manner transcending thought, O almighty Lord, " +
                       "Thou didst lead to Bethany Thy beloved ones. " +
                       "And having arrived at the Mount of Olives, O Word, Thou didst bless them all. " +
                       "And Thou wast taken up from thence whilst angels ministered unto Thee, " +
                       "O Almighty Jesus, Thou Savior of our souls." },
      // Menaion slots: May 26 Carpus stichera (assembled from SAMPLE_MENAION["05-26"])
    ],
    // Glory+Both now: Ascension doxasticon Tone IV (72.pdf)
    stichera_glory: {
      tone: 4,
      text: "When Thou, O Christ, didst come unto the Mount of Olives " +
            "to accomplish the good will of the Father, " +
            "the heavenly angels were amazed and the nethermost regions shuddered with fear. " +
            "The disciples stood by with joy and trembling as Thou spakest unto them, " +
            "and a cloud prepared as a throne awaited opposite them; " +
            "and heaven, throwing open the gates, shone with comeliness; " +
            "and the earth revealeth its hidden chambers, " +
            "that the descent and immediate ascent might be made known unto Adam; " +
            "but his steps were led upwards as it were by a hand, " +
            "and his mouth was heard blessing Thee greatly; " +
            "the cloud took Thee up and heaven received Thee within itself. " +
            "Thou hast wrought this great and strange deed, O Lord, for the salvation of our souls.",
    },
    lic_theotokion: null,  // Pentecostarion stichera_glory serves as Both now

    // ── VESPERS — PROKEIMENON (Monday Evening) ────────────────────────────────
    vespers_prokeimenon: {
      tone: 4,
      text: "The Lord will hearken unto me when I cry unto Him.",
      stichos: "When I called upon Thee, O God of my righteousness, Thou didst hearken unto me.",
    },

    // ── VESPERS — APOSTICHA (Monday Evening) ─────────────────────────────────
    // Ascension feast aposticha Tone II — same as P+40/P+41 (repeats through afterfeast)
    stichera_aposticha: [
      { tone: 2, verse: null,
        text: "Having fulfilled His will, thus pleasing well the Father, " +
              "Thou didst ascend in glory. " +
              "The things of heaven didst Thou unite thus with the things of earth." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "O merciful One, Thou didst ascend unto Thy Father, " +
              "from Whom Thou wast not parted, and didst exalt our nature thus which lay prostrate, O Lord." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "A brilliant cloud of light conveyed Thee to the heavens, " +
              "whilst with great fear and trembling " +
              "the angels came and ministered unto Thy divine command." },
    ],
    aposticha_glory: {
      tone: 4,
      text: "Thou hast renewed in Thyself Adam's nature, " +
            "which had gone down into the lower parts of the earth, " +
            "and Thou didst raise it up above every principality and authority today. " +
            "For since Thou didst love it, Thou didst seat it together with Thyself; " +
            "since Thou hast taken compassion on it, Thou didst unite it to Thyself; " +
            "since Thou didst unite it to Thyself, Thou didst suffer with it; " +
            "and enduring the Passion, though Thou art impassable, Thou didst glorify it. " +
            "But the Bodiless ones said: Who is this comely man? " +
            "But not only is He man, but God and man; that which is manifest is twofold. " +
            "Wherefore, beside themselves, the angels, flying about clad in radiant vesture, " +
            "cried unto the disciples: Ye men of Galilee, He that is gone from you, " +
            "Jesus, Man and God, shall come again as the God-man to judge the living and the dead; " +
            "and He granteth unto the faithful the forgiveness of sins and great mercy.",
    },

    // ── BEATITUDES (Tuesday Liturgy) ─────────────────────────────────────────
    // Source: 72.pdf AT LITURGY — 6 verses from Ode VI of Ascension Canon
    beatitudes_source: "6 verses from Ode VI of Ascension Canon (72.pdf)",
    beatitudes_troparia: [
      "The abyss hath encompassed me, the sea monster hath become my grave; " +
      "but I cried unto Thee, the Lover of mankind, and Thy right hand saved me, O Lord.",  // Irmos
      "In their hope for the coming of the Spirit, the apostles leapt for joy " +
      "as they beheld on high the Creator being lifted up, " +
      "and they cried out with fear: Glory be to Thine ascent.",
      "The angels came and cried unto Thy disciples, O Christ: " +
      "In like manner as ye see Christ going up, " +
      "so shall He, the righteous Judge of all, come in the flesh.",
      "As the hosts of heaven saw Thee, our Savior, " +
      "being taken up into the heights together with Thy body, " +
      "they cried out, saying: Great is Thy love for man, O Master.",
      // Glory:
      "Why are His garments red Who is united to the grossness of the flesh? " +
      "The holy angels, on seeing Christ, extolled Him " +
      "Who bare the divine symbols of the venerable Passion.",
      // Both now:
      "We praise thy conception, O maiden; we praise thine ineffable birthgiving, " +
      "whereby we were delivered from the destruction and misfortune " +
      "and gloomy confinement in Hades, O pure one.",
    ],

    // ── LITURGY PROPERS ───────────────────────────────────────────────────────
    feast_e: "Acts 21:26-32",
    feast_g: "John 16:2-13",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
  },

  // ── P+45 — Wednesday of the Seventh Week — Ascension Afterfeast, Day 6 ────
  // Source: 73.pdf (Tuesday Evening / Wednesday Matins+Liturgy). Drive record: P+45.txt.
  // Vespers stichera from 73.pdf — NEW Pentecostarion set Tone IV. // v0.3.7
  45: {
    name: "Wednesday of the Seventh Week — Ascension Afterfeast, Day 6",
    source_file: "73.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    menaion_set_aside: false,
    has_great_doxology: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },

    // ── VESPERS — LORD I HAVE CRIED (Tuesday Evening) ─────────────────────────
    // Source: 73.pdf. 3 NEW Pentecostarion Tone IV + 3 Menaion (May 27 = Therapont/John Russian).
    // These are a different set from P+40-44.
    stichera_lord_i_call: [
      { tone: 4, text: "As Thy divine disciples watched, Thou didst ascend into the heavens, " +
                       "and sit at the right hand of the Father, though Thou wast not separated from Him, " +
                       "as the transcendent Son: " +
                       "and as Thou didst promise, Thou didst send forth the Comforter, " +
                       "that He might fashion earthly heavens " +
                       "out of Thy wise and divinely-speaking sacred apostles." },
      { tone: 4, text: "O Jesus, Thou didst assume flesh out of the abundance of Thine inexpressible goodness; " +
                       "and Thou O immortal One, didst willingly endure death upon the Cross. " +
                       "But then, when three days had passed, Thou didst arise from the dead. " +
                       "And again, after forty days, Thou didst ascend to the place " +
                       "from whence Thou hadst before descended, " +
                       "to lead mankind to the Father and to bestow peace upon the World." },
      { tone: 4, text: "As they saw Thee taken up upon the clouds O Lord, " +
                       "the wise apostles lamented, and filled with sorrow, " +
                       "they cried aloud to Thee with tears: " +
                       "Leave us whom Thou hast loved not orphaned; " +
                       "Rather, send down to us as Thou didst promise O compassionate One, " +
                       "Thy divine and Holy Spirit, that He might shed His light upon our souls." },
      // Menaion slots: May 27 (Therapont §2A / John Russian §2F — primary governs)
    ],
    // Glory+Both now: Ascension doxasticon Tone V (73.pdf)
    stichera_glory: {
      tone: 5,
      text: "Come, O ye assemblies of the faithful, let us acquire the mind of Christ's disciples, " +
            "that we may sing an unceasing hymn upon the Mount of Olives, " +
            "and like the apostles let us cry out with David: God is gone up in jubilation, " +
            "the Lord with the voice of a trumpet, " +
            "that He might rescue the kindred of mortal mankind " +
            "from the stumbling-blocks of the wicked one and enlighten our souls.",
    },
    lic_theotokion: null,

    // ── VESPERS — PROKEIMENON (Tuesday Evening) ───────────────────────────────
    vespers_prokeimenon: {
      tone: 1,
      text: "Thy mercy, O Lord, shall pursue me all the days of my life.",
      stichos: "The Lord is my shepherd, and I shall not want. In a place of green pasture, there hath He made me to dwell.",
    },

    // ── VESPERS — APOSTICHA (Tuesday Evening) ────────────────────────────────
    // Source: 73.pdf. Ascension feast aposticha Tone II (repeating set from afterfeast)
    stichera_aposticha: [
      { tone: 2, verse: null,
        text: "O new and wondrous deed! Lo, mortal human nature ascendeth to the heavens; " +
              "for it is now made one with the Word, Who is Almighty God." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "There hath shone forth today the bright day of the Master's divine ascent to heaven. " +
              "This luminous feast sheddeth its radiance upon all the earth." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "Even as Thou didst send to Thy divine disciples Thy consubstantial Spirit, " +
              "O Christ, so do Thou send down Thy grace unto Thy people now." },
    ],
    aposticha_glory: {
      tone: 5,
      text: "O Lord, as Thou wast being taken up, to there from whence Thou wast not separated, " +
            "the hosts of angels and all the Bodiless Ones cried out rejoicing unto the Powers above: " +
            "Lift up the gates, O ye princes, and the King of Glory shall enter therein. " +
            "For the cherubic throne took Thee up in the flesh. O Lord, glory be to Thee.",
    },

    // ── BEATITUDES (Wednesday Liturgy) ───────────────────────────────────────
    // Source: 73.pdf AT LITURGY — 6 verses from Ode VII of Ascension Canon (including Irmos)
    beatitudes_source: "6 verses from Ode VII of Ascension Canon including Irmos (73.pdf)",
    beatitudes_troparia: [
      "The children were saved in the burning furnace, " +
      "chanting: Blessed art Thou O God of our fathers.",  // Irmos
      "O Thou Who wast taken up on a cloud of light didst save the world, " +
      "O God of our fathers, Blessed art Thou.",
      "O Christ, having taken upon Thy shoulders our nature, which had gone astray, " +
      "Thou didst ascend and bring it unto God the Father.",
      "O Thou Who didst ascend in the flesh unto the bodiless Father, " +
      "O God of our fathers, Blessed art Thou.",
      // Glory:
      "The great Moses of old, while chanting, cried out: " +
      "Let the angels of heaven worship Christ Who ariseth as King of all. " +
      "To Him let us cry: O Lord and God of our Fathers, blessed art Thou.",
      // Both now:
      "O Strange wonders! How didst thou, who art full of the grace of God, " +
      "contain the uncontainable God, Who hath become poor according to the flesh, " +
      "and was taken up with great glory unto the heavens today, and Who quickened man?",
    ],

    // ── LITURGY PROPERS ───────────────────────────────────────────────────────
    feast_e: "Acts 23:1-11",
    feast_g: "John 16:15-23",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
  },

  // ── P+46 — Thursday of the Seventh Week — Ascension Afterfeast, Day 7 ─────
  // Source: 74.pdf. Drive record: 74.txt.
  // ── P+46 — Thursday of the Seventh Week — Ascension Afterfeast, Day 7 ──────
  // Source: 74.pdf (Wednesday Evening / Thursday Matins+Liturgy). Drive record: P+46.txt.
  // NEW Pentecostarion stichera set Tone IV. Beatitudes from Ode VIII. // v0.3.7
  46: {
    name: "Thursday of the Seventh Week — Ascension Afterfeast, Day 7",
    source_file: "74.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    menaion_set_aside: false,
    has_great_doxology: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },

    // ── VESPERS — LORD I HAVE CRIED (Wednesday Evening) ─────────────────────
    // Source: 74.pdf. 3 NEW Pentecostarion Tone IV + 3 Menaion (May 28 = Nicetas §2A).
    // NOTE: These are yet another set of Ascension afterfeast stichera — different from P+40-45.
    stichera_lord_i_call: [
      { tone: 4, text: "Having achieved the salvation of all mankind, " +
                       "Thou didst go up to the Mount of Olives O Christ, " +
                       "from whence Thou wast taken to heaven before Thy disciples, " +
                       "being borne thither in glory. " +
                       "Wherefore, amazed by the mystery, " +
                       "the lower orders cried out unto the higher powers: " +
                       "Lift ye up the gates, that the sovereign God of all may enter therein " +
                       "from whence He had departed, as He had willed, " +
                       "to wondrously effect the salvation of the world." },
      { tone: 4, text: "As the choir of the disciples looked upon Thee ascending, they cried aloud: " +
                       "O Master, why dost Thou leave Thy servants behind? " +
                       "Whither dost Thou journey, Thou Who holdest all of creation in Thy hands? " +
                       "Behold, we have left all things to follow after Thee rejoicing, " +
                       "with the hope that we would ever abide and dwell with Thee: " +
                       "Leave us not orphaned, " +
                       "but as Thou didst promise O compassionate Savior, " +
                       "send Thou the Comforter and Savior of our souls." },
      { tone: 4, text: "As Thou didst grant a final blessing unto Thy friends O Master, " +
                       "Thou didst teach them the mystery: " +
                       "Behold O my Friends, I go to the Father, " +
                       "I shall send forth unto you the Comforter. " +
                       "I shall not leave my beloved sheep which I have gathered, " +
                       "I shall not forget those on whom I bestowed my love. " +
                       "Endowed with power of the Most High God, " +
                       "ye shall go forth and preach unto all the world the good tidings " +
                       "of the salvation of the race of mankind." },
    ],
    // Glory+Both now: Ascension doxasticon Tone VI (74.pdf)
    stichera_glory: {
      tone: 6,
      text: "God is gone up in jubilation, the Lord with the voice of the trumpet, " +
            "to raise the fallen image of Adam, " +
            "and to send the Comforting Spirit to sanctify our souls.",
    },
    lic_theotokion: null,

    // ── VESPERS — PROKEIMENON (Wednesday Evening) ────────────────────────────
    vespers_prokeimenon: {
      tone: 5,
      text: "O God, in Thy name save me, and in Thy strength do Thou judge me.",
      stichos: "O God, hearken unto my prayer, give ear unto the words of my mouth.",
    },

    // ── VESPERS — APOSTICHA (Wednesday Evening) ──────────────────────────────
    // Ascension feast aposticha Tone II — same melody "O House of Ephratha" (74.pdf)
    // NEW texts — different from P+40/44 aposticha sets
    stichera_aposticha: [
      { tone: 2, verse: null,
        text: "The Lord spake unto His friends saying, I will not leave you " +
              "whom I have gathered orphaned, " +
              "but I will send unto you the Most-holy Spirit." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "The angels cried aloud unto the most wise apostles saying: " +
              "O ye men of Galilee, in such a manner as ye see Him ascend, " +
              "so shall He come again." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "Descending from the Mount of Olives with great joy, " +
              "Thy disciples O Word, glorified and hymned Thy divine Ascension." },
    ],
    aposticha_glory: {
      tone: 1,
      text: "Having ascended into the heavens, from whence Thou didst also descend, " +
            "leave us not orphaned, O Lord; " +
            "let Thy Spirit come, bringing peace unto the world; " +
            "show Thou unto the sons of men the works of Thy might, " +
            "O Lord and Lover of mankind.",
    },

    // ── MATINS APOSTICHA (Thursday Morning) ─────────────────────────────────
    // Different from vespers — Tone II "O House of Ephratha" set (74.pdf matins)
    stichera_matins_aposticha: [
      { tone: 2, verse: null,
        text: "Having fulfilled His will, thus pleasing well the Father, " +
              "Thou didst ascend in glory. " +
              "The things of heaven didst Thou unite thus with the things of earth." },
      { tone: 2, verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        text: "A brilliant cloud of light conveyed Thee to the heavens, " +
              "whilst with great fear and trembling " +
              "the angels came and ministered unto Thy divine command." },
      { tone: 2, verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        text: "Let us, together with the apostles and the Theotokos, " +
              "chant a divinely-beauteous hymn of praise, " +
              "upon seeing the Lord taken up in the clouds." },
    ],
    stichera_matins_aposticha_glory: {
      tone: 7,
      text: "Unto the Mount of Olives didst Thou come, Thou Who hast mercy on the race of mankind. " +
            "And a cloud took Thee up out of the sight of Thy disciples, " +
            "who, on one hand, trembled because of that which they beheld, " +
            "and, on the other hand, rejoiced at their expectation of the Holy Spirit, " +
            "wherein do Thou make us steadfast, O Savior, and have mercy on us.",
    },

    // ── BEATITUDES (Thursday Liturgy) ────────────────────────────────────────
    // Source: 74.pdf AT LITURGY — 6 verses from Ode VIII of Ascension Canon (including Irmos)
    beatitudes_source: "6 verses from Ode VIII of Ascension Canon including Irmos (74.pdf)",
    beatitudes_troparia: [
      "The Son of God who before all ages wast born of the Father " +
      "hath in these last times become incarnate of the Virgin Mother; " +
      "O ye priests hymn, and ye peoples supremely exalt Him throughout all ages.",  // Irmos
      "Unto Christ, the Giver of life, Who in two essences hath risen into the heavens with glory " +
      "and sitteth together with the Father, O ye priests hymn, " +
      "and ye peoples supremely exalt throughout all ages.",
      "Unto Thee, O Savior, Who didst deliver creation from slavery to the idols, " +
      "and didst present it free unto Thine own Father, " +
      "do we give praise, and we supremely exalt Thee throughout all ages.",
      "Unto Him Who by His descent destroyed the adversary, and Who by His ascent raised up mankind " +
      "give praise; O ye priests, hymn, and ye peoples, supremely exalt Him throughout all ages.",
      // Glory:
      "The intelligences appeared unto the apostles at the Ascension and said: " +
      "Why stand ye gazing in astonishment? " +
      "He that goeth up into the heavens shall come again to judge men upon earth, " +
      "since He is the only Judge.",
      // Both now:
      "Thou hast proved to be more excellent than the cherubim, O pure Theotokos, " +
      "since thou hast carried in thy womb Him that rideth upon them. " +
      "Together with the bodiless ones, we mortals glorify Him throughout all ages.",
    ],

    // ── LITURGY PROPERS ───────────────────────────────────────────────────────
    feast_e: "Acts 25:13-19",
    feast_g: "John 16:23-33",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
  },

  // ── P+47 — Friday of the Seventh Week — Apodosis of the Ascension ──────────
  // Source: 75.pdf. Drive record: 75.txt. Fekula §4B14.
  // PDF rubric: "we chant everything as set forth on the Feast of the Ascension
  // except for the Readings and the Antiphons."
  // Feast texts govern exclusively — no Menaion. O Heavenly King still omitted.
  // ── P+47 — Friday of the Seventh Week — Apodosis of the Ascension ──────────
  // Source: 75.pdf. Drive record: P+47.txt. Fekula §4B14.
  // PDF rubric: "we chant everything as set forth on the Feast of the Ascension
  // except for the Readings and the Antiphons."
  // No Menaion. O Heavenly King still omitted. No separate Vespers stichera.
  // Beatitudes: 8 troparia from Ode IX of BOTH festal canons (PDF explicit). // v0.3.7
  47: {
    name: "Friday of the Seventh Week — Apodosis of the Ascension",
    source_file: "75.pdf",
    fekula_section: "4B14",
    hours_format: "apodosis_ascension",
    tone: 4,
    menaion_set_aside: true,
    has_great_doxology: false,
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    it_is_truly_meet_suppressed: true,
    heavenly_king_omitted: true,

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },

    stichera_lord_i_call: null,  // Feast stichera govern — apodosis_ascension assembler handles

    beatitudes_source: "8 troparia from Ode IX of both Ascension Festal Canons (75.pdf)",
    beatitudes_troparia: [
      "As the apostles beheld Thee, Christ God, the Redeemer of the world, " +
      "being exalted in a manner befitting God, they magnified Thee with awe as they leapt for joy.",
      "Beholding Thy deified flesh on high, O Christ, " +
      "the angels beckoned to one another: Truly this is our God.",
      "As the orders of the Bodiless saw Thee being lifted up in the clouds, O Christ God, " +
      "they cried: Lift up the gates for the King of Glory.",
      "Thee, Who didst descend unto the utmost depths of the earth, " +
      "and Who didst save man and exalt him by Thine Ascension, do we magnify.",
      "O what gifts that surpass understanding! O dread mystery! " +
      "For He Who reigneth over all hath risen from earth to the heavens, " +
      "and unto the disciples hath He sent the Holy Spirit, " +
      "Who enlightened their minds and made them fiery with grace.",
      "To the ranks of the disciples did the Lord say: Tarry ye in Jerusalem, " +
      "and I will send you another Comforter, Who is equal in rank to the Father, " +
      "and in honor to Me, Whom ye behold being taken up and riding upon a radiant cloud.",
      "The majesty of Him Who became poor in the flesh hath been manifestly taken up above the heavens; " +
      "and our fallen nature hath been honored by sitting with the Father. " +
      "Let us all make feast, and with one accord let us cry out with jubilation and clap our hands rejoicing.",
      "The Light Who shone forth from the Light hath dawned forth from thee, O all-immaculate one, " +
      "and He hath dispelled all the darkness of godlessness " +
      "and enlightened those who sleep in the night. " +
      "Wherefore, as is due, we all ever call thee blessed throughout the ages.",
    ],

    feast_e: "Acts 27:1-43",
    feast_g: "John 17:18-26",
    aposticha_source: "pentecostarion",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    zadostoinik_irmos: "O Thou who art God's Mother transcending mind and word, " +
      "who ineffably in time hast given birth unto the Timeless One, " +
      "Thee do we the faithful magnify with one accord.",
    zadostoinik_refrain: "Magnify, O my soul, Christ the giver of life, Who ascended from earth to heaven.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
  },

  // ── P+48 — Saturday of the Reposed — Before Pentecost ──────────────────────
  // Source: 76.pdf. Drive record: 76.txt. Fekula §4B14.
  // Ecumenical Memorial Saturday for all departed Orthodox Christians.
  // Entirely unique structure — replaces afterfeast content completely.
  // TWO epistles + TWO gospels at Liturgy (for the Day + for the Reposed).
  // O Heavenly King still omitted (pre-Pentecost).
  // ── P+48 — Saturday of the Reposed — Before Pentecost ──────────────────────
  // Source: 76.pdf. Drive record: P+48.txt. Fekula §4B14.
  // Ecumenical Memorial Saturday for all Orthodox Christians who have fallen asleep.
  // Entirely unique structure — no Ascension afterfeast content.
  // TWO epistles + TWO gospels at Liturgy (For the Day + For the Reposed).
  // Vespers: Alleluia replaces the daily Prokeimenon (PDF explicit rubric).
  // O Heavenly King still omitted (pre-Pentecost). // v0.3.7
  48: {
    name: "Saturday of the Reposed — Before Pentecost",
    source_file: "76.pdf",
    fekula_section: "4B14",
    hours_format: "pentecostarion_saturday_reposed",
    tone: 6,
    menaion_set_aside: true,
    has_great_doxology: false,  // Small Doxology read at Matins
    has_litya: false,
    has_paroemias: false,
    magnificat_sung: false,  // Saturday of Reposed — no Magnificat
    matins_format: "alleluia",  // Alleluia replaces God is the Lord at Matins
    it_is_truly_meet_suppressed: false,  // Pentecost zadostoinik not yet; It is Truly Meet sung
    heavenly_king_omitted: true,  // Pre-Pentecost

    troparion: {
      tone: 8,
      text: "O Thou Who by the depth of Thy wisdom " +
            "dost provide all things out of love for mankind, " +
            "and grantest unto all that which is profitable, O only Creator: " +
            "Grant rest, O Lord, to the souls of Thy servants; " +
            "for in Thee have they placed their hope, " +
            "O our Creator and Fashioner and God.",
      source: "reposed",
    },
    hours_kontakion: {
      tone: 8,
      text: "With the Saints grant rest, O Christ, " +
            "to the souls of Thy servants, " +
            "in a place where there is neither pain, nor sorrow, nor sighing, " +
            "but life everlasting.",
      source: "reposed",
    },

    // ── VESPERS — LORD I HAVE CRIED ────────────────────────────────────────────
    // Source: 76.pdf. 3 martyrs Tone VI + 3 reposed Tone VIII — each with preceding verse.
    // NOTE: Stichera have PRECEDING VERSES (unlike most Pentecostarion LIC stichera).
    stichera_lord_i_call: [
      // 3 of the martyrs, Tone VI:
      { tone: 6, verse: "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? For with Thee there is forgiveness.",
        text: "Thy martyrs, O Lord, did not deny Thee, " +
              "nor did they fall away from Thy commandments. " +
              "By their intercessions, have mercy on us." },
      { tone: 6, verse: "For Thy name's sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, my soul hath hoped in the Lord.",
        text: "They that bare witness to Thee through martyrdom, O Christ, " +
              "endured many torments. " +
              "By their intercessions and prayers, O Lord, preserve us all." },
      { tone: 6, verse: "From the morning watch until night, from the morning watch let Israel hope in the Lord.",
        text: "The passion-bearing martyrs and citizens of heaven " +
              "contested on earth and endured many torments, " +
              "and they received a perfect crown in the heavens, " +
              "that they might intercede for our souls." },
      // 3 for the reposed, Tone VIII:
      { tone: 8, verse: "For with the Lord there is mercy, and with Him is plenteous redemption; and He shall redeem Israel out of all his iniquities.",
        text: "Calling to remembrance by name today " +
              "all the dead from all the ages who with faith have lived piously. " +
              "O ye faithful, let us sing praises to the Savior and Lord, " +
              "asking Him fervently to grant them a good defense " +
              "in the hour of judgment before our God, who will judge all the earth. " +
              "May they receive a place at His right hand in joy; " +
              "may they dwell in glory with the righteous and the saints, " +
              "and be found worthy of His heavenly Kingdom." },
      { tone: 8, verse: "O praise the Lord, all ye nations; praise Him, all ye peoples.",
        text: "By Thine own Blood, O Savior, Thou hast ransomed mankind, " +
              "and by Thy death Thou hast delivered us from bitter death, " +
              "granting us life eternal by Thy Resurrection. " +
              "Grant rest then, O Lord, to all those who have fallen asleep in godliness, " +
              "whether in the wilderness or in the city, on the sea or on land, " +
              "in every place, sovereigns, rulers and hierarchs, " +
              "priests, monastics and those married, of every age and every race, " +
              "and grant them Thy heavenly Kingdom." },
      { tone: 8, verse: "For He hath made His mercy to prevail over us, and the truth of the Lord abideth forever.",
        text: "By Thine arising from the dead, O Christ, " +
              "no longer doth death rule over those who have died in piety. " +
              "Wherefore we pray fervently: " +
              "Grant rest in Thy courts and in the bosom of Abraham " +
              "to Thy servants from Adam to this present day " +
              "who have worshiped Thee in purity, " +
              "our fathers and brethren, friends and kin, " +
              "all who in this life have offered faithful service to Thee, " +
              "and who have now departed to be with Thee, O God, " +
              "and grant them to receive Thy heavenly Kingdom." },
    ],
    stichera_glory: {
      tone: 8,
      text: "I lament, and weep when I see death " +
            "and look upon our beauty, formed according to God's image, " +
            "lying in the grave disfigured, inglorious, and bereft of animate form. " +
            "O strange wonder! What mystery is this concerning us? " +
            "How have we been delivered unto corruption? " +
            "How have we been yoked to death? " +
            "All this, as is written, is by the command of God, " +
            "who granteth rest unto the departed.",
      source: "reposed",
    },
    lic_theotokion: {
      // Both now — Dogmatic Theotokion Tone VI (PDF: "Both now…Dogmatic Theotokion, in Tone VI")
      tone: 6,
      text: "Who doth not call thee blessed, O most holy Virgin? " +
            "Who will not hymn thy most pure birthgiving? " +
            "For the only-begotten Son Who hath shone forth timelessly from the Father, " +
            "came forth, ineffably incarnate, from thee, O pure one; " +
            "By nature He is God, by nature for our sakes, He hath become a man " +
            "not divided into two Hypostases, " +
            "but known in two natures without commingling. " +
            "Him do thou beseech, O pure and most blessed one, that our souls find mercy!",
      type: "dogmatic",
    },

    // ── VESPERS — PROKEIMENON replaced by ALLELUIA ────────────────────────────
    // PDF: "In place of the daily Prokeimenon, we chant: Alleluia in Tone VIII"
    vespers_alleluia_replaces_prokeimenon: true,
    vespers_alleluia: {
      tone: 8,
      verses: [
        "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord!",
        "Their memorial is unto generation and generation.",
      ],
    },

    // ── VESPERS — APOSTICHA ────────────────────────────────────────────────────
    // Source: 76.pdf. Stichera Tone VI.
    stichera_aposticha: [
      { tone: 6, verse: null,
        text: "Thy Cross, O Lord, became an invincible weapon for the martyrs; " +
              "for seeing death laying before them, and foreseeing the life to come, " +
              "they were strengthened by their hope in Thee. " +
              "By their supplications, have mercy on us.",
        source: "martyricon",
      },
      { tone: 6, verse: "Their souls shall dwell among good things.",
        text: "Thou didst honour with Thine image that which Thou hadst fashioned with Thy hands, O Savior, " +
              "and in material form didst Thou depict the likeness of the noetic nature, " +
              "whereof Thou didst make me a partaker, " +
              "and didst establish me here to rule by my free will over the things on earth, O Word. " +
              "Wherefore, O Savior grant rest unto Thy servants " +
              "in the land of the living, in the tabernacles of the righteous.",
        source: "reposed",
      },
      { tone: 6, verse: "Blessed are they whom Thou hast chosen and hast taken unto Thyself, O Lord.",
        text: "That the worth of my life might be distinguished from that of others, " +
              "Thou didst plant a garden in Eden, adorned with diverse plants, " +
              "where Thou didst establish me free of sorrows and care " +
              "as a partaker of Thy divine life, " +
              "as a creature equal to the angels on earth, distinctly mingled in nature. " +
              "Wherefore, O Savior, grant rest unto Thy servants " +
              "in the land of the living, in the tabernacles of the righteous.",
        source: "reposed",
      },
    ],
    aposticha_glory: {
      tone: 6,
      text: "My origin and foundation was accomplished by Thy creative will, " +
            "for Thou didst will to fashion me as a living creature " +
            "from visible and invisible natures; " +
            "having brought forth my body from the earth, " +
            "and given me a soul by Thy divine and quickening breath. " +
            "Wherefore, O Savior, grant rest unto Thy servants " +
            "in the land of the living, in the tabernacles of the righteous.",
      source: "reposed",
    },
    aposticha_theotokion: {
      tone: 6,
      text: "By the intercessions of her who gave birth to Thee, O Christ, " +
            "and of Thy martyrs and apostles, and of the prophets, and the holy-bishops, " +
            "and of the venerable monks, and of the righteous, and of all the saints, " +
            "grant rest to Thy servants that have fallen asleep.",
    },

    // ── BEATITUDES (Saturday Liturgy) ─────────────────────────────────────────
    // Source: 76.pdf AT LITURGY — 3 from Ode III + 3 from Ode VI of Reposed Canon
    beatitudes_source: "3 troparia from Ode III + 3 from Ode VI of Reposed Canon Tone VIII (76.pdf)",
    beatitudes_troparia: [
      // Ode III:
      "To those who have passed through the course of this life in the glory of piety, " +
      "do Thou O God, make worthy to be adorned with a crown of righteousness, " +
      "and may they enjoy eternal blessings.",
      "To those who have been suddenly snatched away, burnt by lightning, frozen by cold, " +
      "or struck down by any other calamity, " +
      "grant rest, O God, when Thou shalt try all things by fire.",
      "To those who have sailed across the ever-troubled sea of this life, " +
      "grant safe anchorage O Christ, in the harbor of immortal life with Thee, " +
      "nurtured by an Orthodox life.",
      // Ode VI:
      "To those whom, according to Thine inscrutable judgments, " +
      "Thou hast permitted to be slain by drugs or by poison, " +
      "or through choking on bones, grant rest, O Lord, with Thy saints.",
      // Glory (Ode III Triadicon):
      "Thrice-holy Godhead, One in throne, Father, Son and Spirit, " +
      "Thou art my God, holding all in unity by Thine almighty Power.",
      // Both now (Ode III Theotokion):
      "Leap for joy, O Jesse the forefather; for from thy root hath sprung forth " +
      "the Flower of Life that saveth the world, Christ God born from the pure maiden.",
    ],

    // ── LITURGY PROPERS ───────────────────────────────────────────────────────
    // For the Day:
    feast_e: "Acts 28:1-31",
    feast_g: "John 21:15-26",
    aposticha_source: "pentecostarion",
    // For the Reposed:
    reposed_e: "1 Thessalonians 4:13-17",
    reposed_g: "John 5:24-30",

    prokeimenon_tone: 6,
    prokeimenon_text: "Their souls shall dwell among good things.",
    prokeimenon_stichos: "Unto Thee, O Lord, have I lifted up my soul, O my God, in Thee have I trusted, " +
      "let me never be put to shame.",
    alleluia_tone: 6,
    alleluia_verse: "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord.",
    alleluia_stichos: "Their memorial is unto generation and generation.",
    communion_verse: "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord: " +
      "Their memorial is unto generation and generation.",
  },


  // ── P+49 — Holy Pentecost ───────────────────────────────────────────────────
  // Source: 80.pdf. Drive record: 80.txt. Fekula §4B15.
  // Great Feast. O Heavenly King RESTORED (first time since P+39).
  // Trisagion replaced at Liturgy. Magnificat not sung. Great Doxology. Polyeleos.
  // Three OT paroemias at Great Vespers: Numbers, Joel, Ezekiel.
  49: {
    name: "Holy Pentecost — Sunday",
    source_file: "80.pdf",
    fekula_section: "4B15",
    hours_format: "pentecost",
    tone: 8,

    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },

    feast_e: "Acts 2:1-11",
    feast_g: "John 7:37-52; 8:12",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    trisagion_replacement: "As many as have been baptized into Christ have put on Christ. Alleluia.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",

    paroemia_1: "Numbers 11:16-17, 24-29",
    paroemia_2: "Joel 2:23-32",
    paroemia_3: "Ezekiel 36:24-28",

    magnificat_sung: false,
    menaion_set_aside: true,
    heavenly_king_restored: true,
    has_great_doxology: true,
    matins_format: "god_is_the_lord",
    has_polyeleos: true,
    has_litya: true,
    stichera_lord_i_call_count: 10,
    stichera_lord_i_call: [
      { tone: 1, text: "We celebrate Pentecost and the coming of the Spirit, and the time appointed for the promise, and the fulfillment of hope. How great is this mystery: it is both exceeding great and most venerable. Wherefore, we cry unto Thee: O Creator of all, Lord, glory be to Thee." },
      { tone: 1, text: "We celebrate Pentecost and the coming of the Spirit, and the time appointed for the promise, and the fulfillment of hope. How great is this mystery: it is both exceeding great and most venerable. Wherefore, we cry unto Thee: O Creator of all, Lord, glory be to Thee." },
      { tone: 1, text: "Thou hast renewed Thy disciples with foreign tongues, O Christ, that they might therewith proclaim Thee, the immortal Word and God, Who granteth our souls great mercy." },
      { tone: 1, text: "The Holy Spirit provideth all things; He gusheth forth prophecy; He perfecteth the priesthood; He hath taught wisdom to the illiterate. He hath shown forth the fishermen as theologians. He holdeth together the whole institution of the Church. Wherefore, O Comforter, one in essence and throne with the Father and the Son, glory be to Thee." },
      { tone: 2, text: "We have seen the true Light; we have received the heavenly Spirit; we have found the true Faith, we worship the indivisible Trinity; for He hath saved us." },
      { tone: 2, text: "We have seen the true Light; we have received the heavenly Spirit; we have found the true Faith, we worship the indivisible Trinity; for He hath saved us." },
      { tone: 1, text: "In the prophets Thou didst proclaim unto us the way of salvation, and the grace of Thy Spirit hath shone in the apostles, O our Savior; Thou art God Who art from the beginning, and for time to come, and unto the ages, Thou art our God." },
      { tone: 1, text: "In Thy courts shall I praise Thee, the Savior of the world, and bending my knee I shall worship Thine invincible might. In the evening, in the morn, at midday, and at all times shall I bless Thee, O Lord." },
      { tone: 1, text: "In Thy courts, O Lord, as we the faithful bend the knee of the soul and the body, we praise Thee, the beginningless Father, the co-beginningless Son, and the co-eternal and Most holy Spirit, Who dost enlighten and sanctify our souls." },
      { tone: 1, text: "Let us praise the consubstantial Trinity: the Father and the Son, with the Holy Spirit; for thus did all the prophets and apostles preach, with the martyrs." },
    ],
    stichera_glory: { tone: 8, text: "Come, O ye peoples, let us worship the Godhead in three Hypostases: the Son in the Father, with the Holy Spirit; for the Father timelessly begat the Son, Who is co-eternal and of one throne; and the Holy Spirit was in the Father, glorified with the Son; one Might, one Essence, one Godhead, which we all worship, saying: Holy God, Who didst create all things through the Son, with the co-operation of the Holy Spirit. Holy Mighty, through Whom we have known the Father, and through Whom the Holy Spirit came to the world. Holy Immortal, the Comforting Spirit, Who proceedest from the Father and restest in the Son. O Holy Trinity, glory be to Thee." },
    aposticha_source: "pentecostarion",
    aposticha_note: "Great Vespers aposticha from Pentecostarion; kneeling prayers follow immediately.",

  },

  // ── P+50 — Monday of the Eighth Week — Holy Spirit Day ──────────────────────
  // Source: 81.pdf. Drive record: 81.txt. Fekula §4B15.
  // Feast in its own right — dedicated to the Holy Spirit.
  // Pentecost troparion/kontakion govern. Great Doxology. Magnificat NOT sung.
  // Kneeling Vespers celebrated on P+49 Sunday evening (restores kneeling prayer).
  50: {
    name: "Monday of the Eighth Week — Holy Spirit Day",
    source_file: "81.pdf",
    fekula_section: "4B15",
    hours_format: "holy_spirit_day",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Ephesians 5:9-19",
    feast_g: "Matthew 18:10-20",
    prokeimenon_tone: 6,
    prokeimenon_text: "Save, O Lord, Thy people, and bless Thine inheritance.",
    prokeimenon_stichos: "Unto Thee, O Lord, will I cry; O my God, be not silent unto me.",
    alleluia_tone: 2,
    alleluia_verse: "Have mercy on me, O God, according to Thy great mercy.",
    alleluia_stichos: "Turn not Thy face away from me, and take not Thy Holy Spirit from me.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    menaion_set_aside: false,
    has_great_doxology: true,
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 4, source: "pentecostarion", text: "Today all the nations beheld strange things in the city of David, when the Holy Spirit descended in fiery tongues, as Luke, the herald of divine things, declared; for he said: As the disciples of Christ were gathered together, there came a sound as of a mighty wind, and it filled the house where they were sitting; and all began to articulate strange and foreign words, doctrines strange and new, strange and new teachings of the Holy Trinity." },
      { tone: 4, source: "pentecostarion", text: "Today all the nations beheld strange things in the city of David, when the Holy Spirit descended in fiery tongues, as Luke, the herald of divine things, declared; for he said: As the disciples of Christ were gathered together, there came a sound as of a mighty wind, and it filled the house where they were sitting; and all began to articulate strange and foreign words, doctrines strange and new, strange and new teachings of the Holy Trinity." },
      { tone: 4, source: "pentecostarion", text: "The Holy Spirit hath ever been, and is, and shall be, neither beginning nor ending; but He is ever ranked and numbered together with the Father and the Son. He is Life, and life-creating; Light, and light-bestowing; by nature good, and the source of goodness; through Him the Father is known, and the Son is glorified; and thereby all acknowledge a single sovereignty, single covenant, one adoration of the Holy Trinity." },
      // 3 Menaion stichera supplied dynamically by assembler from daily Menaion entry
    ],
    stichera_glory: { tone: 6, text: "Heavenly King, Comforter, Spirit of Truth, Who art everywhere present and fillest all things, Treasury of good gifts and Giver of life: come and abide in us, and cleanse us of all impurity, and save our souls, O good One." },
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { tone: 3, text: "Now are the tongues manifestly become a sign unto all; for ailing with unbelief, the Jews, from whom Christ came according to the flesh, have fell away from the divine grace and the divine light, of which we, the nations, have been deemed worthy, made steadfast by the words of the disciples, who spake of the glory of God, the Benefactor of all. Together with them, as we bend our hearts and our knees, let us worship the Holy Spirit in faith, made steadfast by the Savior of our souls." },
      { tone: 3, verse: "Create in me a clean heart, O God, and renew a right spirit within me.", text: "Now the Comforting Spirit hath been poured out upon all flesh; for beginning with the assembly of the apostles, from them He hath extended grace to the believers by participation. And confirmeth His mighty descent by the distribution of tongues in the likeness of fire unto the disciples, to the praise and glory of God. Wherefore, noetically illumined in our hearts, and made steadfast in faith by the Holy Spirit, we beseech Thee that our souls be saved." },
      { tone: 3, verse: "Cast me not away from Thy presence and take not Thy Holy Spirit from me.", text: "Now the apostles of Christ are clothed with might from on high; for the Comforter doth renew them, working renewal in them with mystical newness of knowledge, which they proclaim to us by foreign voices and lofty words, and they teach us to reverence the eternal, simple, and tri-hypostatic nature of God, the Benefactor of all. Wherefore, illumined by their teachings, let us worship the Father with the Son and the Spirit, beseeching that our souls be saved." },
    ],
    aposticha_glory: { tone: 8, text: "Come, O ye peoples, let us worship the Godhead of three Hypostases: the Son in the Father, with the Holy Spirit; for the Father timelessly begat the Son, Who is co-eternal and of one throne; and the Holy Spirit was in the Father, glorified with the Son; one Might, one Essence, one Godhead, which we all worship, saying: Holy God, Who didst create all things through the Son, with the co-operation of the Holy Spirit. Holy Mighty, through Whom we have known the Father, and through Whom the Holy Spirit came into the world. Holy Immortal One, the Comforting Spirit, Who proceedest from the Father and restest in the Son. O Holy Trinity, glory be to Thee." },

  },

  // ── P+51 — Tuesday of the Eighth Week — Pentecost Afterfeast Day 2 ──────────
  // Source: 82.pdf. Drive record: 82.txt.
  // Pentecost afterfeast weekday. Feast troparion/kontakion govern.
  51: {
    name: "Tuesday of the Eighth Week — Pentecost Afterfeast, Day 2",
    source_file: "82.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:1-7, 13-17",
    feast_g: "Matthew 4:25-5:13",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    menaion_set_aside: false,
    has_great_doxology: false,
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 1, source: "pentecostarion", text: "Now all peoples have been renewed by God's exalted deeds, for by means of tongues in the likeness of fire, all those who dwell on earth have been brought to the faith, and that this sign unto the nations, hath declared that salvation is truly in our midst." },
      { tone: 1, source: "pentecostarion", text: "Having fulfilled Thy promise to send down power from on high unto Thy disciples, O Christ, Thou didst send Thy Holy Spirit, thereby showing us that Thou art Truth, and that those who hope in Thee O good One, shall in no wise ever be ashamed." },
      { tone: 1, source: "pentecostarion", text: "At the time that was appointed, Thou didst send into the world the Holy Spirit, Who came in the form of tongues of fire. All our sins are cleansed by this heavenly fire. Thereby Thou hast granted us a true communion with Him, for in pious faith we proclaim Him to be perfect God." },
      // 3 Menaion stichera supplied dynamically by assembler from daily Menaion entry
      // (source: daily Menaion PDF for the specific date in the given year)
    ],
    stichera_glory: { tone: 1, source: "pentecostarion", text: "We celebrate Pentecost and the coming of the Spirit, and the time appointed for the promise, and the fulfillment of hope. How great is this mystery: it is both exceeding great and most venerable. Wherefore, we cry unto Thee: O Creator of all, Lord, glory be to Thee." },
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { tone: 2, spec_mel: "O house of Ephratha", text: "O Word, Thou didst send forth, according to Thy promise, the Spirit, Who is true God, that He might dwell among Thy disciples and enlighten them." },
      { tone: 2, verse: "Create in me a clean heart, O God, and renew a right spirit within me.", text: "Suddenly, from on high, the Comforter's great power showed forth the Words of the apostles' as all-wise theologians who spake of things divine." },
      { tone: 2, verse: "Cast me not away from Thy presence, and take not Thy Holy Spirit from me.", text: "Foreigners stood amazed, upon hearing the apostles speak in every tongue, glorifying and magnifying God the Trinity." },
    ],
    aposticha_glory: { tone: 1, text: "Thou hast renewed Thy disciples with foreign tongues, O Christ, that they might therewith proclaim Thee, the immortal Word and God, Who granteth our souls great mercy." },

  },

  // ── P+52 — Wednesday of the Eighth Week — Pentecost Afterfeast Day 3 ────────
  // Source: 83.pdf. Drive record: 83.txt.
  // Magnificat NOT sung on Wednesday (PDF explicit: "No Magnificat").
  52: {
    name: "Wednesday of the Eighth Week — Pentecost Afterfeast, Day 3",
    source_file: "83.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:18-27",
    feast_g: "Matthew 5:20-26",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    matins_format: "god_is_the_lord",
    menaion_set_aside: false,
    has_great_doxology: false,
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 1, source: "pentecostarion", text: "It is proper and natural that the rational heavens proclaim with tongues of fire unto all the nations, the glory of God, Who hath adorned the heavens by means of fire; and Who, by the Son and the Spirit, hath rendered luminous the world which our senses know." },
      { tone: 1, source: "pentecostarion", text: "When Christ's disciples had gathered in Sion, as He said, then did the Spirit come down upon them, as was promised. Appearing as fire, showing the apostles to be teachers, who spoke of the hidden things of the Trinity while breathing forth fire." },
      { tone: 1, source: "pentecostarion", text: "The divine Spirit came upon the sacred apostles, making of them heavenly swords. Thus they consecrated all the earth unto God the Creator as they cut down the impious ones. By them the swords of the evil one have been destroyed, that our souls may be saved." },
      // 3 Menaion stichera supplied dynamically by assembler from daily Menaion entry
      // (source: daily Menaion PDF for the specific date in the given year)
    ],
    stichera_glory: { tone: 2, source: "pentecostarion", text: "We have seen the true Light; we have received the heavenly Spirit; we have found the true Faith, we worship the indivisible Trinity; for He hath saved us." },
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { tone: 4, text: "On this day the working of Thy Holy Spirit came down upon Thine apostles, showing them to be supremely wise, and seers of divine things, filling them with Thy blessed teaching. Wherefore, we glorify Thy saving dispensation, O Jesus Almighty, the Savior of our souls." },
      { tone: 4, verse: "Create in me a clean heart, O God, and renew a right spirit within me.", text: "On this day Thy Spirit O all-powerful Lord, hath been sent forth from the Father, He Who is consubstantial with Thee, was distributed among the apostles in the form of fiery tongues; thus He prepared them to preach Thy mighty deeds. Wherefore we glorify Thy saving dispensation, O Jesus, Almighty, the Savior of our souls." },
      { tone: 4, verse: "Cast me not away from Thy presence, and take not Thy Holy Spirit from me.", text: "On this day, O Savior, Thou hast poured forth the gifts of Thy Comforting Spirit, granting mortal-mankind to prophesy, as Thou didst once promise O Word, whereby Thou didst teach all to worship and adore the undivided Trinity. Wherefore we glorify Thy saving dispensation, O Jesus Almighty, the Savior of our souls." },
    ],
    aposticha_glory: { tone: 6, text: "O Lord, the descent of the Holy Spirit, which enveloped Thine apostles, made them to speak with other tongues. Hence, the strange wonder was thought to be drunkenness by the unbelievers, but to the believers it was a cause of salvation. Wherefore, we beseech Thee to grant us also His illumination, O Lover of mankind." },

  },

  // ── P+53 — Thursday of the Eighth Week — Pentecost Afterfeast, Day 4 ────────
  // Source: 84.pdf. Drive record: 84.txt. Magnificat NOT sung (PDF: "No Magnificat").
  53: {
    name: "Thursday of the Eighth Week — Pentecost Afterfeast, Day 4",
    source_file: "84.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:28-2:9",
    feast_g: "Matthew 5:27-32",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    matins_format: "god_is_the_lord",
    menaion_set_aside: false,
    has_great_doxology: false,
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 1, source: "pentecostarion", text: "Behold this is the day of joy and rejoicing, for today from on high the Holy Spirit hath appeared unto the sacred apostles, coming from the Father in the form of fire, and enlightening all: The fisherman have became orators of Wisdom, as Luke the divine Trumpet wrote, all things have been filled with the Spirit. Wherefore with faith we stand amazed, offering praise unto the abundance of mercy and self-emptying of Christ our God." },
      { tone: 1, source: "pentecostarion", text: "Let us celebrate the solemn festival of Holy Pentecost, and the power of the Spirit, and the truly joyous consummation of our divine hope, for the mystery from all ages hath been revealed unto us, wherefore we cry aloud unto Thee: O Creator of all things, take not Thy Holy Spirit from us O Word, rather send it down from the heavens O Savior, by the prayers of the Saints, and of Thine all-famed and glorious apostles, we beseech Thee to grant peace unto our souls." },
      { tone: 1, source: "pentecostarion", text: "Today heaven doth declare the vivifying power of the Savior, and the might of the divine Comforter, which hath clearly been preached throughout all the world, enlightening all of creation with its teachings, of the Unity of the undivided Trinity, in three uncommingled Hypostases. Wherefore let us celebrate in faith the coming of the Holy Spirit, which hath appeared from on high, enlightening the ends of the earth." },
      // 3 Menaion stichera supplied dynamically by assembler from daily Menaion entry
      // (source: daily Menaion PDF for the specific date in the given year)
    ],
    stichera_glory: { tone: 7, source: "pentecostarion", text: "The Comforter, having come from the Father through Christ God, hath come unto us on earth today, therefore with faith we worship the Holy Spirit." },
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { tone: 1, text: "The Holy Spirit, proceeding from the Father, and glorified in the Son, Which doth support and rule over all that is, maintaining life, and by Which we live and are saved, Thee do we bless: O unfailing Comforter, grant peace to Thy world." },
      { tone: 1, verse: "Create in me a clean heart, O God, and renew a right spirit within me.", text: "The Holy Spirit, the wellspring of every good thing, hath come unto all the ends of the earth, in its essential noetic power, filling the apostles with joy, and divine virtue. Wherefore we cry aloud, O ineffable Comforter, grant peace to Thy world." },
      { tone: 1, verse: "Cast me not away from Thy presence, and take not Thy Holy Spirit from me.", text: "The Holy Spirit is God, equal in sovereignty and co-enthroned with the Father, and manifest through the Son, most supremely pure light shining forth from the Light, of the beginningless perfect Father, and proceeding from the Son. Unto Him do we cry aloud: O Life-giving Comforter, grant peace to Thy world." },
    ],
    aposticha_glory: { tone: 8, text: "When Thou didst send down Thy Spirit, O Lord, while the apostles were seated, the children of the Jews beheld and were astonished with amazement; for they heard them speaking in other, foreign tongues, according as the Spirit bestowed on them; for though they were unlearned, they were made wise; and in catching and bringing the nations to the Faith, they preached of things divine. Wherefore, we also cry to Thee: O Thou Who wast seen on earth and didst save us from error, O Lord, glory be to Thee." },

  },

  // ── P+54 — Friday of the Eighth Week — Pentecost Afterfeast, Day 5 ──────────
  // Source: 85.pdf. Drive record: 85.txt. Magnificat NOT sung (PDF: "No Magnificat").
  // Alleluia shifts to Tone 2 (from Tone 1 on Thu).
  54: {
    name: "Friday of the Eighth Week — Pentecost Afterfeast, Day 5",
    source_file: "85.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 2:14-29",
    feast_g: "Matthew 5:33-41",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 2,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    matins_format: "god_is_the_lord",
    menaion_set_aside: false,
    has_great_doxology: false,
    stichera_lord_i_call_count: 6,
    stichera_lord_i_call: [
      { tone: 4, source: "pentecostarion", text: "On this day the working of Thy Holy Spirit came down upon Thine apostles, showing them to be supremely wise, and seers of divine things, filling them with Thy blessed teaching. Wherefore, we glorify Thy saving dispensation, O Jesus Almighty, the Savior of our souls." },
      { tone: 4, source: "pentecostarion", text: "On this day Thy Spirit O all-powerful Lord, hath been sent forth from the Father, He Who is consubstantial with Thee, was distributed among the apostles in the form of fiery tongues; thus He prepared them to preach Thy mighty deeds. Wherefore we glorify Thy saving dispensation, O Jesus, Almighty, the Savior of our souls." },
      { tone: 4, source: "pentecostarion", text: "On this day, O Savior, Thou hast poured forth the gifts of Thy Comforting Spirit, granting mortal-mankind to prophesy, as Thou didst once promise O Word, whereby Thou didst teach all to worship and adore the undivided Trinity. Wherefore we glorify Thy saving dispensation, O Jesus Almighty, the Savior of our souls." },
      // 3 Menaion stichera supplied dynamically by assembler from daily Menaion entry
      // (source: daily Menaion PDF for the specific date in the given year)
    ],
    stichera_glory: { tone: 2, source: "pentecostarion", text: "Let us praise in hymns the Trinity one in essence, the Father, and the Son, with the Holy Spirit: Who hath been declared by all the prophets, apostles, and martyrs." },
    aposticha_source: "pentecostarion",
    stichera_aposticha: [
      { tone: 1, text: "On the mountain, Moses beheld in the fire, He Who Is. And now the Spirit hath come in the form of fire to the wise apostles, the beholders of God. Thus clearly enlightening them, that it is one God Who spoke both then and now, of the same essence." },
      { tone: 1, verse: "Create in me a clean heart, O God, and renew a right spirit within me.", text: "With fiery tongues God's rhetoricians, call all to the waters of divine Baptism; and with the fire of the Spirit they burn the babblings of ungodly rhetoricians. But, do Thou O Comforter, come and enlighten us who faithfully proclaim Thee as God." },
      { tone: 1, verse: "Cast me not away from Thy presence, and take not Thy Holy Spirit from me.", text: "As Thou didst consecrate all the fiery bodiless ones, so with the Spirit's fire do Thou consecrate all who in material bodies now serve Thee, O God, Who ineffably assumed flesh. O how abundantly praised art Thou, and how wondrous art Thou in Thy works O Lover of mankind!" },
    ],
    aposticha_glory: { tone: 7, text: "The Comforter, having come from the Father through Christ God, hath come unto us on earth today, therefore with faith we worship the Holy Spirit." },

  },

  // ── P+55 — Saturday of the Eighth Week — Apodosis of Pentecost ──────────────
  // Source: 86.pdf. Drive record: 86.txt.
  // PDF rubric: "except for the Readings, the Polyeleos, and the Antiphons,
  // we chant everything as set forth on the Feast of Pentecost."
  // Feast texts govern exclusively. Same troparion/kontakion as Pentecost.
  55: {
    name: "Saturday of the Eighth Week — Apodosis of Pentecost",
    source_file: "86.pdf",
    fekula_section: "4B15",
    hours_format: "apodosis_pentecost",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:7-12",
    feast_g: "Matthew 5:42-48",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 2,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
    matins_format: "god_is_the_lord",
    menaion_set_aside: true,
    has_great_doxology: false,
    stichera_lord_i_call_count: 10,
    stichera_lord_i_call_note: "Apodosis of Pentecost: chant everything as on the Feast of Pentecost (86.pdf). Stichera identical to P+49.",
    stichera_lord_i_call: [
      { tone: 1, text: "We celebrate Pentecost and the coming of the Spirit, and the time appointed for the promise, and the fulfillment of hope. How great is this mystery: it is both exceeding great and most venerable. Wherefore, we cry unto Thee: O Creator of all, Lord, glory be to Thee." },
      { tone: 1, text: "We celebrate Pentecost and the coming of the Spirit, and the time appointed for the promise, and the fulfillment of hope. How great is this mystery: it is both exceeding great and most venerable. Wherefore, we cry unto Thee: O Creator of all, Lord, glory be to Thee." },
      { tone: 1, text: "Thou hast renewed Thy disciples with foreign tongues, O Christ, that they might therewith proclaim Thee, the immortal Word and God, Who granteth our souls great mercy." },
      { tone: 1, text: "The Holy Spirit provideth all things; He gusheth forth prophecy; He perfecteth the priesthood; He hath taught wisdom to the illiterate. He hath shown forth the fishermen as theologians. He holdeth together the whole institution of the Church. Wherefore, O Comforter, one in essence and throne with the Father and the Son, glory be to Thee." },
      { tone: 2, text: "We have seen the true Light; we have received the heavenly Spirit; we have found the true Faith, we worship the indivisible Trinity; for He hath saved us." },
      { tone: 2, text: "We have seen the true Light; we have received the heavenly Spirit; we have found the true Faith, we worship the indivisible Trinity; for He hath saved us." },
      { tone: 1, text: "In the prophets Thou didst proclaim unto us the way of salvation, and the grace of Thy Spirit hath shone in the apostles, O our Savior; Thou art God Who art from the beginning, and for time to come, and unto the ages, Thou art our God." },
      { tone: 1, text: "In Thy courts shall I praise Thee, the Savior of the world, and bending my knee I shall worship Thine invincible might. In the evening, in the morn, at midday, and at all times shall I bless Thee, O Lord." },
      { tone: 1, text: "In Thy courts, O Lord, as we the faithful bend the knee of the soul and the body, we praise Thee, the beginningless Father, the co-beginningless Son, and the co-eternal and Most holy Spirit, Who dost enlighten and sanctify our souls." },
      { tone: 1, text: "Let us praise the consubstantial Trinity: the Father and the Son, with the Holy Spirit; for thus did all the prophets and apostles preach, with the martyrs." },
    ],
    stichera_glory: { tone: 8, text: "Come, O ye peoples, let us worship the Godhead in three Hypostases: the Son in the Father, with the Holy Spirit; for the Father timelessly begat the Son, Who is co-eternal and of one throne; and the Holy Spirit was in the Father, glorified with the Son; one Might, one Essence, one Godhead, which we all worship, saying: Holy God, Who didst create all things through the Son, with the co-operation of the Holy Spirit. Holy Mighty, through Whom we have known the Father, and through Whom the Holy Spirit came to the world. Holy Immortal, the Comforting Spirit, Who proceedest from the Father and restest in the Son. O Holy Trinity, glory be to Thee." },
    aposticha_source: "pentecostarion",
    aposticha_note: "Apodosis: all Vespers/Matins texts same as Feast of Pentecost (P+49). Liturgy readings differ — see feast_e/feast_g.",

  },

  // ── P+56 — First Sunday After Pentecost — All Saints ────────────────────────
  // Source: 90.pdf. Drive record: 90.txt.
  // Octoechos Tone 8 cycle begins. TWO troparia: Resurrection T8 + All Saints T4.
  // Kontakion: All Saints T8. Great Doxology. Resurrection Gospel #1.
  // Three OT paroemias at Saturday Vespers. Magnificat sung.
  // ORDINARY TIME begins Monday after All Saints (P+57).
  56: {
    name: "First Sunday After Pentecost — All Saints",
    source_file: "90.pdf",
    fekula_section: "1A",
    hours_format: "all_saints_sunday",
    tone: 8,

    // Primary: Resurrection Tone 8
    troparion: {
      tone: 8,
      text: "From on high didst Thou descend, O compassionate One; " +
            "to burial of three days hast Thou submitted " +
            "that Thou mightest free us from our passions. " +
            "O our Life and Resurrection, O Lord, glory be to Thee.",
      source: "resurrection_tone_8",
    },

    // Under Glory: All Saints troparion Tone 4
    troparion_2: {
      tone: 4,
      text: "Adorned in the blood of Thy martyrs " +
            "throughout all the world as in purple and fine linen, " +
            "Thy church, through them, doth cry unto Thee, O Christ God: " +
            "Send down Thy compassions upon Thy people; " +
            "grant peace to Thy commonwealth, and great mercy to our souls.",
      source: "all_saints",
      placement: "glory",
    },

    // Kontakion: All Saints Tone 8 (Ode VI / 3rd + 9th Hours — Both now)
    hours_kontakion: {
      tone: 8,
      text: "To Thee, the Planter of creation, " +
            "the world doth offer the God-bearing martyrs as the first-fruits of nature. " +
            "By their supplications, preserve Thy Church in perfect peace, " +
            "through the Theotokos, O Greatly-Merciful One.",
      source: "all_saints",
    },

    feast_e: "Hebrews 11:33-12:2",
    feast_g: "Matthew 10:32,33,37-38; 19:27-30",

    // Two prokeimena at Liturgy
    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",
    prokeimenon_2_tone: 4,
    prokeimenon_2_text: "Wondrous is God in His saints, the God of Israel.",

    // Two alleluias at Liturgy
    alleluia_tone: 8,
    alleluia_verse: "Come, let us rejoice in the Lord; " +
      "let us shout with jubilation unto God our Savior.",
    alleluia_2_tone: 4,
    alleluia_2_verse: "The righteous cried, and the Lord heard them.",
    alleluia_2_stichos: "Many are the tribulations of the righteous, " +
      "and the Lord shall deliver them out of them all.",

    communion_verse: "Praise the Lord in the heavens, praise Him in the highest! " +
      "Verse: Rejoice in the Lord, O ye righteous; praise is meet for the upright.",

    paroemia_1: "Isaiah 43:9-14",
    paroemia_2: "Wisdom of Solomon 3:1-9",
    paroemia_3: "Wisdom of Solomon 5:15ff",

    magnificat_sung: true,
    matins_format: "god_is_the_lord",
    has_great_doxology: true,
    has_litya: true,
    matins_gospel: 1,
    stichera_lord_i_call_count: 10,
    stichera_lord_i_call: [
      { tone: 8, source: "octoechos", text: "We offer unto Thee, O Christ, an evening hymn and spiritual worship; because Thou wast well-pleased to have mercy on us through the Resurrection." },
      { tone: 8, source: "octoechos", text: "O Lord, cast us not away from Thy presence; but be well-pleased to have mercy on us through the Resurrection." },
      { tone: 8, source: "octoechos", text: "Rejoice holy Zion, Mother of the Churches, dwelling-place of God; for it was thee who first received forgiveness of sins through the Resurrection." },
      { tone: 8, source: "octoechos", text: "The Word, begotten of God the Father before all ages, hath in the last times become incarnate of her who knew not wedlock, and willingly endured the crucifixion and death, and mankind, slain of old, hath thereby been saved through His own Resurrection." },
      { tone: 8, source: "octoechos", text: "We glorify Thy Resurrection from the dead, O Christ, through which Thou hast freed the race of Adam from the tyranny of Hades, and as God hast granted the world eternal life and great mercy." },
      { tone: 8, source: "octoechos", text: "Glory be to Thee, O Christ Savior, only-begotten Son of God, affixed by nails to the cross and risen from the tomb on the third day." },
      { tone: 6, source: "menaion", text: "The Spirit-proclaiming Disciples of the Savior, having become, through faith, instruments of the Spirit, and being scattered to the ends of the earth, sowed the venerable proclamations of Orthodoxy: From their divine husbandry hath blossomed forth, an army of martyrs by grace, who inscribed the signs of their passion, by sundry kinds of tortures, scourging and fire. and with boldness they pray on behalf of our souls." },
      { tone: 6, source: "menaion", text: "Enflamed by the love of the Lord, despising fire; the venerable martyrs in Christ were consumed like divine coals, drying up the grass of the arrogance of falsehood: They bridled the mouths of beasts by their venerable supplications; and, being beheaded, They thereby beheaded all the hosts of the enemy, and having patiently shed their blood, they watered the Church with illumining faith." },
      { tone: 6, source: "menaion", text: "Having wrestled with beasts, and been struck with swords, their arms and limbs torn apart, the heroic martyrs were tormented, consumed by material fire, dismembered and pierced with lances. Enduring all this with firm patience, foreseeing their approaching end, the crowns of incorruption, and the glory of Christ, Whom, they implore with boldness on behalf of our souls." },
      { tone: 6, source: "menaion", text: "Let us praise with sacred hymns those who faithfully suffered throughout all the ends of the earth, the apostles, martyrs, Godly-minded Priests, and noble women, for being earthly, they united with those of heaven; and by their passion attained passionlessness by the grace of Christ. And now as luminaries they illumine us and with boldness, pray on behalf of our souls." },
    ],
    stichera_glory: { tone: 6, source: "menaion", text: "Ye are the pillars of the Church and the fulfillment of the Gospel, O divine ranks of martyrs. In deeds ye have fulfilled the sayings of the Savior; for through you the gates of Hades, which had been opened against the Church, have been closed; and the blood you shed hath dried up the oblation of idols. And having nourished the perfection of believers through your slaughter, ye astonished the bodiless ones, standing before Christ wearing your crowns. Wherefore, intercede ye ceaselessly with Him on behalf of our souls." },
    stichera_both_now: { tone: 8, source: "octoechos", text: "In His love for mankind, the King of heaven appeared on earth and dwelt among men; for He Who received flesh from the pure Virgin and cameth forth from her having received human nature, is the only Son of God, twofold in nature but not Hypostasis. Therefore, proclaiming Him to be truly perfect God and perfect man, we confess Christ our God. Him do thou beseech, O unwedded Mother, that our souls find mercy!" },
    aposticha_source: "octoechos",

  },

};

export default PENTECOSTARION_DATA;
