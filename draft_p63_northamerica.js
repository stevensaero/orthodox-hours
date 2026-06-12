// ════════════════════════════════════════════════════════════════════════════
// DRAFT — P+63 · All Saints of North America (OCA-PRIMARY on the 2nd Sunday
// after Pentecost). Two cited sources:
//   • OCA Dept. of Liturgical Music & Translations tone-trainer docx — pointed
//     Vespers + Liturgy texts. Director marks captured: [brackets]=emphasis,
//     | = line end, // = penultimate. (director:true fields.)
//   • oca.org/fs/commemoration-all-saints-north-america — Matins propers +
//     the full Saints-of-NA canon. No director marks (Tier-2 | from line
//     breaks; canon troparia Tier-1 plain).
// Marker string is the single source of truth; strip-at-render forward-facing.
// For review; not integrated into pentecostarion.js, not pushed.
// ════════════════════════════════════════════════════════════════════════════

const P63_ALL_SAINTS_NORTH_AMERICA = {
  "name": "Second Sunday After Pentecost — All Saints of North America",
  "source_file": "OCA docx (director-marked, Vespers+Liturgy) + oca.org/fs/commemoration-all-saints-north-america (Matins+canon)",
  "fekula_section": "1A",
  "hours_format": "all_saints_sunday",
  "tone": 1,
  "oca_primary": true,
  "note": "OCA calendar primary for the 2nd Sunday after Pentecost. Pointed Vespers/Liturgy texts from the OCA Dept. of Liturgical Music & Translations tone-trainer docx (director marks captured as [brackets]; |/// markers). Matins propers (sessional hymns, exapostilaria, Praises) and the full Saints-of-North-America canon from oca.org/fs/commemoration-all-saints-north-america (no director marks; Tier-2 |). DISCREPANCY: docx Epistle reads Heb 11:33-12:2; website reads Heb 11:33-12:1 — encoded as 12:2 per docx; confirm against book.",
  "troparion": {
    "tone": 1,
    "text": "When the [stone] had been sealed by the [Jews], | while the soldiers were guarding Thy most pure [bo]dy, | Thou didst [rise] on the third day, O [Sa]vior, | granting [life] to the world. | The [pow]ers of heaven therefore cried to Thee, O [Giv]er of Life: | \"Glory to Thy Resur[rec]tion, O Christ! | [Glo]ry to Thy [King]dom! // Glory to Thy dispensation, O Thou Who [lov]est mankind!\"",
    "source": "resurrection_tone_1",
    "director": true
  },
  "vespers_kontakion": false,
  "troparion_2": {
    "tone": 8,
    "text": "As the [boun]tiful [har]vest of Thy [sow]ing of sal[va]tion, | the lands of North A[mer]ica [of]fer to Thee, O Lord, all the saints who have [shone] in them. | By their [prayers] keep the [Church] and our [land] in a[bid]ing peace // through the Theo[to]kos, [O] most [Mer]ciful One!",
    "source": "saints_of_north_america",
    "placement": "glory",
    "director": true
  },
  "dismissal_theotokion": {
    "tone": 8,
    "text": "For our sake Thou wast [born] of [the] [Vir]gin | and didst en[dure] cruci[fix]ion, O Good One, destroying [death] by death. | Revealing the [Res]ur[rec]tion as God, do not despise the [work] of Thy hand! | Reveal Thy [love] for [man], O Merciful One, and accept the Theotokos [pray]ing for us, // and save the des[pair]ing [peo]ple, O our [Sav]ior!",
    "director": true
  },
  "theotokos_troparion": {
    "tone": 4,
    "text": "Rejoice, O Virgin Theo[to]kos, | Mary, full of grace, the [Lord] is with thee! | Blessed art thou among [wo]men, | and blessed is the [Fruit] of thy womb, // for thou hast borne the [Sav]ior of our souls.",
    "director": true
  },
  "resurrection_kontakion": {
    "tone": 1,
    "text": "As [God], Thou didst rise from the tomb in [glo]ry, | raising the [world] with Thyself. | Human [na]ture praises Thee as God, for death has [van]ished. | Adam exults, O [Mas]ter! | Eve re[joic]es, for she is freed from bondage and [cries] to Thee: // \"Thou art the Giver of Resurrection to [all], O Christ!\"",
    "source": "resurrection_tone_1",
    "director": true
  },
  "hours_kontakion": {
    "tone": 3,
    "text": "Today the [choir] of Saints who were pleasing to God in the lands of North A[mer]ica | now stands before us in the Church and invisibly prays to [God] for us. | With them the Angels [glo]rify Him, | and all the Saints of the Church of Christ keep [fes]tival with them; // and together they all pray for [us] to the Pre-e[ter]nal God.",
    "source": "saints_of_north_america",
    "director": true
  },
  "hours_kontakion_ikos": "The Saints are as the beautiful and fruitful trees of Eden, putting forth the fragrant flowers of their doctrines and the fruit of their labors. By them our souls are nourished and our spiritual hunger satisfied. Come, therefore, let us run to the protection of their guidance and bless them as the joy and adornment of our land, and as the image and example of our lives, for they have received incorruptible crowns from the Pre-eternal God.",
  "feast_e": "Hebrews 11:33-12:2",
  "feast_g": "Matthew 4:25-5:12",
  "resurrection_e": "Romans 2:10-16",
  "resurrection_g": "Matthew 4:18-23",
  "prokeimenon_tone": 1,
  "prokeimenon_text": "Let Thy mercy, O Lord, be upon us as we have set our hope on Thee.",
  "prokeimenon_stichos": "Rejoice in the Lord, O you righteous! Praise befits the just!",
  "prokeimenon_2_tone": 7,
  "prokeimenon_2_text": "Precious in the sight of the Lord is the death of His saints.",
  "alleluia_tone": 1,
  "alleluia_verse": "God gives vengeance unto me, and subdues people under me.",
  "alleluia_stichos": "He magnifies the salvation of the King and deals mercifully with David, His anointed, and his seed forever.",
  "alleluia_2_tone": 1,
  "alleluia_2_verse": "Rejoice in the Lord and be glad, O you righteous.",
  "alleluia_2_stichos": null,
  "communion_verse": "Praise the Lord from the heavens, praise Him in the highest! Another, for the saints: Rejoice in the Lord, O you righteous; praise befits the just!",
  "paroemia_1": "Isaiah 43:9-14",
  "paroemia_2": "Wisdom of Solomon 3:1-9",
  "paroemia_3": "Wisdom of Solomon 5:15-6:3",
  "litya_stichera": [
    {
      "tone": 5,
      "text": "Re[joice], O faithful Church in the North A[mer]ican lands! | Rejoice, O venerable Father Herman of A[las]ka, | for [thou] wast the first to intercede in our land, guiding our people to the [True] Faith! | Through thy [mir]acles and [won]ders | the light of Christ has illumined all the [ends] of our land. // We beseech thee to pray to Christ our God to grant our [souls] great [mer]cy!",
      "director": true
    },
    {
      "tone": 5,
      "text": "Rej[oice], all Saints of North A[mer]ica, | precious a[dorn]ments of our lands; | the un[shak]able [pil]lars of our Church; | the [glo]ry of the Orthodox, the fountains of [won]ders; | inexhaustible streams of love and [vir]tue; | brilliant [lights] and humble instruments of the Holy [Spir]it; | heavenly [men] and earthly [an]gels; | the true [friends] of Christ! // Fervently beseech Him to grant mercy to [those] who [hon]or you!",
      "director": true
    }
  ],
  "litya_glory_both_now": {
    "tone": 5,
    "text": "Most [glo]rious saints and guardians of the North A[mer]ican lands, | spiritual and heavenly City of [Zi]on on high; | [beac]ons for those who dwelt in the [dark]ness of despair; | sacred [coals] of repentance; precious pearls of [vir]tue; | defenders of widows and [orph]ans and the oppressed; | ex[em]plary followers of the [teach]ings of the Church, | and [joy]ful keepers of [ab]stinence: | Pray without [ceas]ing to Christ, | be[seech]ing Him to grant unity and sta[bil]ity to our Church, // and [peace] and great [mer]cy to our land!",
    "director": true
  },
  "magnificat_sung": true,
  "matins_format": "god_is_the_lord",
  "has_great_doxology": true,
  "has_litya": true,
  "matins_gospel": 2,
  "matins_gospel_number": 2,
  "stichera_lord_i_call_count": 10,
  "stichera_lord_i_call": [
    {
      "tone": 1,
      "source": "octoechos",
      "text": "Ac[cept] our evening prayers, O [ho]ly Lord! | Grant us re[mis]sion of sins, // for Thou alone hast manifested the Resur[rec]tion to the world.",
      "director": true
    },
    {
      "tone": 1,
      "source": "octoechos",
      "text": "En[cir]cle [Zi]on | and surround her, O [peo]ple! | Give [glo]ry in her to the One Who [rose] from the dead! | For [He] is [our] God, // Who has delivered us from our trans[gres]sions!",
      "director": true
    },
    {
      "tone": 1,
      "source": "octoechos",
      "text": "[Come], O [peo]ple, | let us hymn and fall [down] before Christ, | [glo]rifying His Resur[rec]tion from the dead! | For [He] is [our] God, // Who has delivered the world from the [En]emy's deceit!",
      "director": true
    },
    {
      "tone": 1,
      "source": "octoechos",
      "text": "Be [glad], O [heav]ens! | Sound trumpets, O foun[da]tions of the earth! | Sing in [glad]ness, O [moun]tains! | Behold Emmanuel has [nailed] our [sins] to the Cross! | Granting [life], He has [slain] death. // He has resurrected Adam as the [Lov]er of man.",
      "director": true
    },
    {
      "tone": 2,
      "source": "menaion",
      "text": "Come, let us praise the saints of North A[mer]ica, | holy hierarchs, venerable monastics, and glorious [mar]tyrs, | pious [men], women, and children, both [known] and unknown! | Through their words and deeds, in various [walks] of life, | by the grace of the Spirit they achieved true [hol]iness. | [Now] as they stand in the presence of Christ Who [glo]rified them, // they pray for us, who celebrate their [mem]ory with love.",
      "director": true
    },
    {
      "tone": 2,
      "source": "menaion",
      "text": "Come, let us as[sem]ble today | and glorify the luminaries of the North A[mer]ican lands, | the glorious [mar]tyrs and holy bishops who con[firmed] our faith, | the righteous dwellers in the wilderness and guides of the [spir]itual life! | Let us cry out to [them] in joy: // \"All Saints of North America, known and unknown, pray to [God] for us!\"",
      "director": true
    },
    {
      "tone": 2,
      "source": "menaion",
      "text": "As the [bright]est sun, | as the brilliance of the [Morn]ing Star, | the precious [feast] of the saints of North America has [dawned] for us, | to illumine us and to set our [hearts] on fire, | to imitate their [god]ly lives, // and to follow their example of [zeal] for God.",
      "director": true
    },
    {
      "tone": 2,
      "source": "menaion",
      "text": "Come, let us as[sem]ble today | and let us praise the elect of North A[mer]ica! | Having [fought] the good fight, you have perse[vered] in the faith, | receiving your crowns of [vic]tory from God. | Beseech Him to deliver from every calamity and [sor]row // all who keep your holy memory in [faith] and in love!",
      "director": true
    },
    {
      "tone": 6,
      "source": "menaion",
      "text": "The earth rejoices and the [heav]ens are glad, | O venerable Saints of A[mer]ica, | praising your labors and lives, your spiritual fortitude and [pur]ity of heart. | By driving away a multitude of [de]mons | and enlightening many people with the light of the [Orth]odox Faith, // you have con[firmed] our land.",
      "director": true
    },
    {
      "tone": 6,
      "source": "menaion",
      "text": "Rejoice, O mountains of Pennsyl[va]nia; | leap for joy, O waters of the [Great] Lakes; | rise up, O fertile plains of [Can]ada; | for the elect of Christ who dwelt in you are [glo]rified, | men and women who left their homes for a [new] land! | With faith, hope, and patience as their [ar]mor, | they courageously fought the [good] fight. | Comforted by the beauty of the [Orth]odox Faith, | they labored in mines and mills, they [tilled] the land, | they braved the challenges of the great [cit]ies, | enduring many hardships and [suf]ferings. | Never failing to worship God in [spir]it and truth | and unyielding in devotion to His most pure [Moth]er, | they erected many temples to His [glo]ry. | Come, O assembly of the [Orth]odox, | and with love let us praise the holy men, women, and [chil]dren, | those known to us and those known [on]ly to God, | and let us cry [out] to them: // \"Rejoice, all Saints of North America and pray to [God] for us!\"",
      "director": true
    }
  ],
  "stichera_glory": {
    "tone": 5,
    "source": "menaion",
    "text": "Re[joice], O continent of North America, illumined by the holy [Gos]pel! | Rejoice, every province, state, [cit]y, and town, | which raised [up] citizens of the heavenly [Kin]gdom! | Re[joice], our venerable Father Herman, first [saint] of our land! | Rejoice O Martyrs Juvenaly and [Pe]ter, | for your [blood] has watered the seed of faith planted in A[las]ka! | Re[joice], O holy Hierarchs: Innocent, Tikhon, Nicholas, [Ra]phael, and John! | Rejoice, O holy Fathers Alexis, John, and all you [right]eous priests! | Re[joice], all Saints of North A[mer]ica, | for your [light] has shone forth to the [ends] of the earth! // We beseech you to pray to Christ our [God] that our [souls] may be saved!",
    "director": true
  },
  "stichera_both_now": {
    "tone": 1,
    "source": "octoechos",
    "label": "Dogmatikon",
    "text": "Let us [praise] the Virgin [Ma]ry! | The gate of heaven, the [glo]ry of the world! | The [song] of the angels, the beauty of the [faith]ful! | She was born of [man], yet gave [birth] to God! | She was re[vealed] as the heaven, as the temple of the [God]head! | She destroyed the wall of [en]mity! | She com[menced] the peace; she opened the [King]dom! | Since she is [our] foun[da]tion of faith, | our de[fen]der is the [Lord] Whom she bore! | Courage! Courage! O [Peo]ple of God! | For [Christ] will destroy our [en]emies // since He is all [pow]erful.",
    "director": true
  },
  "aposticha_source": "octoechos",
  "stichera_aposticha": [
    {
      "tone": 1,
      "text": "We have been [freed] from [suf]ferings | by Thy [suf]fering, O Christ. | [We] have been delivered from cor[rup]tion | by Thy [Res]ur[rec]tion. // O Lord, [glo]ry to Thee!",
      "director": true
    },
    {
      "verse": "The Lord is King; He is robed in majesty!",
      "tone": 1,
      "text": "Let cre[a]tion re[joice]! | Let the [heav]ens be glad! | Let the [na]tions clap their hands with [glad]ness, | for Christ our Savior has [nailed] our [sins] to the Cross. | Slaying [death], He has given [life]. // He has resurrected fallen Adam as the [Lov]er of man.",
      "director": true
    },
    {
      "verse": "For He has established the world, so that it shall never be moved.",
      "tone": 1,
      "text": "As [King] of [heav]en and earth, | Thou wast voluntarily crucified in Thy [love] for man. | [Hell] was angered when it [met] Thee below. | Adam rose seeing Thee, the Cre[a]tor, [un]der the earth. | O [won]der! How has the Life of all [tast]ed death? | Thou didst enlighten the [world] which cries: // O Lord, Who didst rise from the dead, [glo]ry to Thee!",
      "director": true
    },
    {
      "verse": "Holiness befits Thy house, O Lord, forevermore!",
      "tone": 1,
      "text": "The [myrrh]bearing women came with [haste] to Thy tomb, | bearing myrrh and la[ment]ing. | Not [find]ing Thy most pure [bo]dy, | they learned from the angel of the new and [glo]rious [won]der. | They [told] the A[pos]tles: // \"The Lord is risen, granting the world great [mer]cy.\"",
      "director": true
    }
  ],
  "aposticha_glory": {
    "tone": 4,
    "text": "Today, as we celebrate the memory of all the Saints of North A[mer]ica, | let us praise them as is [fit]ting, | for they [lived] all of Christ's be[at]itudes. | Deprived of material wealth, they became rich in [spir]it; | meek, they in[her]it[ed] the earth; | mourning, they were [com]forted; | thirsting for righteousness, they were [sat]isfied; | merciful, they ob[tained] [mer]cy; | pure in heart, they beheld the [im]age of God; | as peacemakers, they became God's [chil]dren; | persecuted and tortured for righteousness' sake, they now re[joice] in [heav]en; // and they pray fervently to the Lord that He may have [mer]cy on our souls.",
    "director": true
  },
  "aposticha_both_now": {
    "tone": 5,
    "label": "Theotokion",
    "text": "Let us [sound] a hymn on the [trum]pet | and praise with one accord the Pro[tec]tress of our land, | our [Queen], the Theo[to]kos: | Re[joice], for thou hast crowned our land with thy [fav]or, | pouring abundant [grace] upon it! | [There]fore, the Church in America joyously celebrates thy precious pro[tec]tion | and com[mem]orates the multitude of thy [mir]acles. | And now deprive us not of thy mercies, O [La]dy! | Look with [fav]or upon us in our adversities and af[flic]tions // and raise us up by thy [pow]erful inter[ces]sion!",
    "director": true
  },
  "matins_sessional_post_polyeleos": {
    "tone": 8,
    "text": "Illumined by the brilliant rays of the Saints, | we are bathed in the warmth of their light, | as if entering into a fair paradise. | And beholding their valor in wonder, | let us strive to imitate their virtues, | calling out to the Savior: | Through their prayers, O God, | make us partakers of Your Kingdom.",
    "source": "website"
  },
  "matins_sessional_post_polyeleos_glory": {
    "tone": 8,
    "text": "The faithful of North America | join in the commemoration of Your Saints, O Lord. | The heavens rejoice and all our land is glad. | Through the prayers of Your Saints, grant our souls great mercy.",
    "source": "website"
  },
  "matins_sessional_post_polyeleos_both_now": {
    "tone": 8,
    "text": "Look down from on high, O all-merciful Master, | and attend to our infirmities. | Visit us who have been corrupted by sinfulness, | and through the prayers of the Theotokos, | and all the Saints of North America, grant our souls great mercy.",
    "source": "website"
  },
  "magnification": "We magnify you, All Saints who have shone forth in North America, and we honor your holy memory, for you pray to Christ our God for us.",
  "matins_prokeimenon_tone": 1,
  "matins_prokeimenon_text": "Hear this, all peoples; give ear, all you inhabitants of the world.",
  "matins_sessional_post_ode3": {
    "tone": 4,
    "text": "Christ the Sun of Righteousness, | has sent you forth as beams of light | to illuminate the North American lands, | O holy hierarchs, martyrs, monastics and the righteous. | O Blessed of God, enlighten then my darkened soul | by your fervent supplications to Him.",
    "source": "website"
  },
  "matins_sessional_post_ode3_both_now": {
    "tone": 4,
    "text": "Come, O faithful, | and let us hasten to the healing Cross of our God and Savior, | who willed to clothe Himself in our flesh | and pour out His sacred blood | through which He has redeemed us from bondage to the enemy. | Let us then cry out to Him in thanksgiving: | Save our Orthodox bishops and our communities. | Defend all Your people by Your holy Cross, | and save our souls, for You love mankind.",
    "source": "website"
  },
  "matins_canon_feast": {
    "refrain": "All Saints of North America, pray to God for us",
    "source": "oca.org (website)",
    "canon_tone": 2,
    "odes": {
      "1": {
        "irmos": "Come, O people, let us sing a song to Christ our God, who divided the sea and made a path for the nation which He had brought out of the bondage of Egypt; for He is glorified.",
        "troparia": [
          "Come, all Orthodox believers, and let us praise in song the Saints of our Church in America, and let us glorify Christ who has glorified them.",
          "Come, let us with one accord sing hymns of praise to all the Saints who have shone forth in virtue throughout our land, spiritually nourishing the Church on the North American continent.",
          "Come, all Orthodox believers, let us praise the wonderworker Herman, and the holy martyrs Juvenal and Peter, and all who labored in the Alaskan vineyard of Christ — these Northern Lights of the American Church and ever-shining beacons of piety.",
          "Come, all you who love the saints, let us remember our instructors in the Faith: the holy bishops Innocent and Tikhon, and the righteous priest Alexis, for by their teachings they have freed us from the bonds of ignorance."
        ],
        "both_now": "Accept our songs of thanksgiving, O Virgin, Full of grace, and deliver us from all tribulation, evil and distress, for we place our hope in you as the mighty protectress of the Orthodox Church in the New World.",
        "katavasia": "I shall open my mouth"
      },
      "3": {
        "irmos": "The Church of the Gentiles was like a desert, barren in its pagan ways, but now it has blossomed by Your coming, O Lord; in that same coming my heart is confirmed.",
        "troparia": [
          "Rejoice, land of Alaska, for the Orthodox Faith has been planted in you and now bears the fruit of salvation throughout North America.",
          "Let us praise in sacred hymns our Father Herman of Alaska, who has bestowed his blessing upon the New World and has left us his holy relics as a source of healing for many who honor his memory.",
          "Iliamna and Kenai rejoice, and all America is filled with gladness as we trust in the power of your intercession, O holy martyrs Juvenal and Peter.",
          "We entreat you to intercede for your people, Hieromartyr Juvenal and youth Peter, whose struggle for the Faith included the shedding of your blood. Teach us to confess with boldness the Orthodox Faith and to have no fear of the enemy."
        ],
        "both_now": "Grant us the help of your prayers, Most holy Lady, for our enemies have overwhelmed us. But through you, All pure One, can we be delivered. Intercede with Your Son that we may be saved.",
        "katavasia": "O Theotokos, plentiful and living fountain"
      },
      "4": {
        "irmos": "You have come from a Virgin not as an ambassador nor an angel, but as the Lord Himself incarnate; You have saved me the whole man, so I cry to You: Glory to your power, O Lord.",
        "troparia": [
          "Along with your monastic brethren, you traveled to Alaska to spread the word of the Word. Immediately upon your arrival, O Hieromartyr Juvenal, you zealously began your apostolic mission among the native peoples.",
          "Having proclaimed the Orthodox Faith to the heathen, you have taken up your abode in the eternal mansions, O martyrs Juvenal and Peter. Standing now before the King of Kings, you pray for us who honor your holy memory.",
          "Holy Father Herman, by deed and word you taught us to love God above all else and to do His holy will. Pray that we may heed your wise counsel.",
          "O Father Herman of Alaska, be an intercessor for our land for you have taught us to confess the Orthodox Faith with Boldness and without fear of the threats of the adversary."
        ],
        "both_now": "The holy mountain of Athos is illumined by your images, O blessed Theotokos, and the cities of America are likewise adorned and sanctified, receiving from you miraculous aid and finding in you a source of consolation. Open to us also, O Lady, the doors of paradise.",
        "katavasia": "He who is seated in glory"
      },
      "5": {
        "irmos": "Giver of light and sovereign Creator of the world, guide us in the light of Your commandments, for we know no other God than You.",
        "troparia": [
          "Let the holy enlighteners of North America, Innocent and Tikhon be praised in sacred hymns, along with the divinely-wise Archpastor Nicholas of Zhicha, and our Father and Teacher Alexis, for they are all sacred vessels of the Spirit.",
          "Although your sojourn in the New World was short, you accomplished much, for you baptized many in the name of the Triune God. Yet, O Hieromartyr Juvenal, your apostolic ministry and your earthly life were cut short by the hands of those whom you sought to lead to Christ's heavenly Kingdom.",
          "By the weapon of your prayers, O holy martyrs Juvenal and Peter, defend our land and its Orthodox people from all calamity and sorrow.",
          "Shine like a star in heaven, Holy Father Herman, North Star of Christ's Church, and guide us toward the Master and His heavenly Kingdom."
        ],
        "both_now": "Christ has shone forth from you, O virgin, to enlighten those in darkness and to reconcile God and man."
      },
      "6": {
        "irmos": "Encompassed in the depths of sin, I entreat the unfathomable depths of Your compassion: bring me out of corruption, O Lord.",
        "troparia": [
          "We praise you, O Holy Hierarch Innocent, for like the Apostles to the Slavs, Cyril and Methodius, you left your homeland to journey to a foreign land. Following their example, you enlightened your new people by translating the Holy Scriptures into their own language.",
          "O Holy Hierarch Tikhon, you provided for the spiritual well-being of the Church in the New World by establishing the monastic tradition. Through your prayers, may the monastery you founded in the mountains of Pennsylvania, named after your heavenly patron, St. Tikhon of Zadonsk, be a haven for many who give all in their love of Christ.",
          "O Holy Hierarch Nicholas, you inspired spiritual renewal in your native land. The Lord led you to the shores of America, where you continued your apostolic ministry, instructing in theology and preaching the beauty of the Kingdom of God.",
          "We beseech you, O Bishops of Christ, Innocent, Tikhon and Nicholas, to dissipate the soul-destroying tempests that assail us. Through your prayers, O holy hierarchs, may we be granted spiritual tranquillity."
        ],
        "both_now": "As you have continually interceded for our land, at the prayers of the North American Saints, look upon us now, O Most pure Theotokos, and, as the hope of the hopeless and helper of those in distress, grant us a sign of your compassion, O Lady.",
        "katavasia": "As we celebrate this sacred and solemn feast"
      },
      "7": {
        "irmos": "The wise children did not adore the golden idol, but went themselves into the flame and defied the pagan gods. They prayed in the midst of the flames and an angel bedewed them: The prayer of your lips has been heard.",
        "troparia": [
          "Knowing that the Lord guides a man safely in the way that he should go, you left your comfortable life in Irkutsk, O Holy Hierarch Innocent, to live a rigorous one in Unalaska among the Aleuts in order to spread the Gospel of Christ.",
          "Though your years were few in number, O Holy Martyr Peter, your wisdom was great, for you wisely chose to endure the tortures of those ungodly men who insisted you renounce your Faith. Intercede with Christ our God that we too may endure all assaults against us.",
          "Abhorring the exploitation of the Alaskan lands and its people, you sought to protect them for you had made them your own, Holy Father Herman. You unceasingly interceded before God and the civil authorities on their behalf. Now, as then, intercede before the Lord on our behalf.",
          "Having you as our sure anchor of hope and immovable rampart, O Holy Father Herman of Alaska, we are delivered from the hostile assaults of the enemy by your powerful intercession before the throne of God."
        ],
        "both_now": "By your all-honorable Icon in Sitka, which we have received as a divine gift from on high, O Theotokos, may we ever increase in love for your Son and our God, and may we be delivered from every hostile assault of the enemy.",
        "katavasia": "The holy children"
      },
      "8": {
        "irmos": "The three youths would not obey the decree of the tyrant; when cast into the furnace they sang: Bless the Lord, all works of the Lord.",
        "troparia": [
          "Through your prayers to the All-merciful Lord, O holy Hierarchs Innocent, Tikhon and Nicholas, may we be delivered from the tempestuous passions that assail us, and may we always cry: Bless the Lord, all works of the Lord.",
          "As archpastor of your North American flock, you led the procession to the site where the monastery dedicated to the memory of your heavenly patron now stands. O holy Hierarch Tikhon, we the faithful give thanks to you and joyfully accept this gift to us as we cry: Bless the Lord, all works of the Lord.",
          "As the three youths chose to defy the tyrant, you, O holy Martyr Peter, chose physical death over the spiritual death of apostasy. Pray that we also may give ourselves fully to the Lord as we cry: Bless the Lord, all works of the Lord.",
          "O holy Father Herman, glory of Alaska and all America, cease not to pray for us who cry: Bless the Lord, all works of the Lord."
        ],
        "gloria": "We praise, bless and worship the Lord, singing and exalting Him throughout all ages. Just as the three youths were not consumed by the flames, you were not consumed by the Divine Fire which dwelt in your virginal womb. Therefore, O Theotokos, we exalt you throughout all ages.",
        "katavasia": "The Offspring of the Theotokos"
      },
      "9": {
        "irmos": "The Son of the Eternal Father, God the Lord, incarnate of the Virgin, has appeared to us, to give light to those in darkness and to gather those who had gone astray; therefore, we magnify you, O Theotokos.",
        "troparia": [
          "Rejoice, O Saints of the New World, both revealed and hidden, known and unrecognized, who have been glorified by the Lord, entreat Him to grant us consolation in sorrow, and to confirm our land in piety and our people in the Orthodox Faith, and accept as our humble gift this hymn of praise and thanksgiving.",
          "Rejoice, O Saints of the New World on this day of your holy feast, for as flowers you have adorned the True Vine which has budded forth in our land.",
          "Rejoice, Saints of the New World, all of you who have reached the heavenly Zion and now stand before the throne of the King of Glory; intercede with our merciful God to grant unity to the Church so that with one mind and voice we may unceasingly witness to the Truth and praise the consubstantial Trinity."
        ],
        "gloria": "Most holy Trinity, accept the American Church which has been offered to You as choice incense. Through the prayers of those who have served and pleased You, confirm this land in peace and preserve her people from all assaults of the enemy.",
        "both_now": "We on earth together with the heavenly hosts magnify your Son and our God, O Theotokos, and we glorify you as the Protectress of the Church in America.",
        "katavasia": "Let every mortal born on earth"
      }
    }
  },
  "exapostilarion": "The myrrhbearing women rejoiced at beholding the stone rolled away, | for they saw a young man seated upon the tomb, and he said to them: | \"Tell the disciples with Peter that Christ has risen! | Hasten to the mountain of Galilee; | there he will appear to you as He promised His friends.\"",
  "exapostilarion_saints": "Christ, the Sun of Righteousness, sent you out as rays of light | to illumine those in darkness and shadow. | Therefore, through you, All Saints of North America, we have found the Truth.",
  "exapostilarion_theotokion": "An angel brought the Virgin the salutation before Your conception, O Christ; | and an angel also rolled away the stone from Your tomb. | The first, instead of sorrow, brought signs of ineffable joy, | and the other, instead of death, proclaimed and magnified You, the Bestower of life, | declaring the Resurrection to the women and to those who knew the mystery.",
  "stichera_praises": [
    {
      "tone": 8,
      "source": "website",
      "text": "What shall we call you, O Saints of North America? | Beloved servants of Christ our God? | Tireless workers in His vineyard? | True preachers of His Gospel? | Faithful friends, who love Him more than life itself? | Now that you stand before the throne of the King of Glory, | do not forget your spiritual children | and pray that our souls may be saved."
    },
    {
      "tone": 8,
      "source": "website",
      "text": "What shall we call you, O Saints of North America, | who were pleasing to God in our land? | Shepherds, who seek those who have gone astray? | Guides, who lead those blind in their spiritual eyes? | Wonderworkers, who heal both souls and bodies? | Now that you are numbered with the Chosen of God, | Remember us who glorify your memories, | and pray that our souls may be saved."
    },
    {
      "tone": 8,
      "source": "website",
      "text": "How shall we praise you, O Saints of North America, | who are favored by the Mother of God? | No hymns can tell of all your wonders; | no books can contain all you endured for the Master. | But you labored not for earthly gain or glory, | only to feed the hungry and provide for those in need, | visit the sick and teach those who were untaught | and to pray that our souls may be saved."
    },
    {
      "tone": 8,
      "source": "website",
      "text": "How shall we worthily give thanks to you, O Saints of North America, | who illumined us with the light of Christ? | For you led us from darkness and shadow, | guiding us toward the Uncreated Light, | along the way nourishing us with the Food of the Kingdom. | So today, we who have been enlightened | gather and celebrate your sacred memories | and we pray that our souls may be saved."
    }
  ],
  "praises_glory": {
    "tone": 2,
    "text": "The women who were with Mary came carrying sweet spices, | and wondering how they might accomplish their goal; | they saw that the stone had been rolled away. | A young man sent from God calmed the anxiety of their souls, | for he said, \"The Lord Jesus is risen! | Proclaim then to His disciples and preachers | that they should hasten to Galilee | and behold Him risen from the dead, | for He is the Lord and Giver of Life.\"",
    "source": "website"
  },
  "praises_both_now": {
    "tone": 2,
    "label": "Theotokion",
    "text": "You are most blessed, O Virgin Theotokos, | through the God-man who was born of you, | hell has been captured and Adam recalled. | The curse has been annulled and Eve set free. | Death has been slain, so we are given Life! | Blessed is Christ our God, whose good will it was. | Glory to you!",
    "source": "website"
  },
  "great_doxology_troparion": "Today is salvation come unto the world; let us sing praises to Him that arose from the tomb, and is the Author of our life. For, having destroyed death by death, He hath given us the victory and great mercy."
};

export default P63_ALL_SAINTS_NORTH_AMERICA;
