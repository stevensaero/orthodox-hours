// src/data/octoechos/tone2.js
// Tone 2 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone2/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[2].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers', 'matins'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[2] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 2
    sat: {
      // Great Vespers — 7 Resurrection stichera (v0.15.3: deduplicated — old item 2
      // was a verbatim copy of item 1; the genuine 7th "Singing a hymn of salvation"
      // (Anatolius) was restored from 2-1.pdf). Markers added per §3 (* → |, ** → //);
      // strip(pointed) === prior plain for items 1-6, === source plain for item 7.
      lic: [
        `Come let us worship God the Word, | begotten of the Father before all ages, | incarnate of the Virgin Mary; | for having endured the Cross, He was handed over for burial, | as He Himself had willed, | and having risen from the dead He hath saved me, | the whole man, // who hath gone astray.`,
        `Christ our Savior, by nailing the record against us to the Cross | hath blotted it out, | and destroyed the might of death. // We worship His arising on the third day.`,
        `With the archangels let us hymn the Resurrection of Christ; | for He is the Redeemer and the Savior of our souls; | and He is coming again | with great glory and mighty power // to judge the world which He hath fashioned.`,
        `An angel proclaimed Thee, the crucified and buried Master, | saying to the women: | Come, see where the Lord lay. | For as He foretold, He hath arisen as all-powerful. | Therefore we worship Thee, the only immortal One. // O Christ, Giver of life, have mercy on us.`,
        `By Thy Cross Thou hast destroyed the curse of the tree; | by Thy burial Thou didst slay the might of death; | by Thine arising Thou hast enlightened mankind; | wherefore we cry out to Thee: | O Christ, our God and Benefactor, // glory be to Thee!`,
        `The gates of death opened unto Thee in fear O Lord, | and the gate-keepers of Hades were terrified at the sight of Thee, | for Thou hast smashed the gates of brass, | and crushed the bars of iron to powder, | leading us out of the darkness and shadow of death // rending asunder our bonds.`,
        `Singing a hymn of salvation, | let this song rise from our lips; | O Come all ye people into the house of the Lord, | let us fall down in worship saying; | O Thou who wast crucified upon the Tree, | and didst rise from the dead and abidest in the bosom of the Father, | have mercy upon us // and cleanse us of our iniquities!`
      ],
      aposticha: [
        `Thy Resurrection, O Christ our Savior, | hath enlightened the whole universe; | and Thou hast called back Thine own creation. // O all-powerful Lord, glory be to Thee!`,
        `Nullifying the curse of the tree through a Tree, O Savior, | Thou didst slay the might of death by Thy burial, | enlightening our race by Thine arising; | wherefore we cry out to Thee: | O Giver of life, Christ our God, // glory be to Thee!`,
        `Appearing nailed to the Cross, O Christ, | Thou hast altered the beauty of all created things; | and while the soldiers showed their inhumanity by piercing Thy side with a lance, | the Hebrews asked that Thy tomb be sealed, | not understanding Thy power; | but in Thy merciful compassion Thou didst accept burial and rise on the third day. // O Lord, glory be to Thee!`,
        `For the sake of mortal mankind, | O Christ Giver of life, | Thou didst willingly endure the Passion; | and as all-powerful Thou didst descend into Hades, | snatching from the hand of the mighty one | the souls of those who awaited Thy coming therein | granting them to dwell in paradise instead of Hades, | grant also unto us who glorify Thine arising on the third day // the pardon of our iniquities and Thy great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `The shadow of the law hath passed now that grace hath come, | for as the bush wrapped in flame was not consumed, | so didst thou bear a Child O Virgin | and remained a virgin; | in place of a pillar of fire, the Sun of righteousness hath dawned, | instead of Moses, Christ is come, // the salvation of our souls.`
    },
    sun_eve: {
      lic: [
        `Possessing a wellspring of loving-kindness, and ever pouring forth Thy mercy from the depths thereof, O supremely good Father, Son and Word of the Father, and Holy Spirit, Thou uncreated Essence: Accept our supplication and prayer, and grant forgiveness unto all who abide in transgressions, in that Thou art a compassionate God and lovest mankind.`,
        `Having by nature unfathomable depths of compassion, mercy and goodness; we beseech Thee, O Christ our Savior, falling down before Thee, crying, and ever calling out to Thee: Grant unto Thy servants remission of their many transgressions and forgiveness of all things wherein they have offended, in that Thou art a compassionate God and lovest mankind.`,
        `As God and the Savior of all, desiring to save us for whose sake Thou didst assume flesh, and manifest Thyself as a man. Do Thou save us who bow down before Thy commandments, O Lover of mankind, for Thou didst not come to save the righteous, but through the grace of divine baptism, Thou didst come to loose us who are bound by the chains of the multitude of our sins and transgressions, in that Thou art a compassionate God and lovest mankind.`
      ],
      aposticha: [
        `Like the prodigal son I have sinned against Thee, O Savior. Accept me who am penitent, O Father. Have mercy on me, O God!`,
        `With the cry of the publican I cry out to Thee, O Christ my Savior: Cleanse me as Thou didst him, and have mercy on me, O God!`,
        `Having hated the pleasures of the earth, the passion-bearers were granted the good things of heaven and became fellow citizens with the angels. By their supplications, O Lord, have mercy and save us.`
      ],
      aposticha_glory: `Rejoice, O Theotokos Mary, thou indestructible and surpassingly holy temple; rejoice thou joy of the angels and intercessor for mankind; rejoice thou haven of those that sail, and deliverance of those in tribulation.`
    },
    mon: {
      lic: [
        `O Christ, Who alone art without sin, Who alone art without guile, Who alone art the Wellspring of goodness: Behold mine oppression, behold my tribulation. Wash all the wounds of my stripes, and in Thy mercy save Thy servant, that, having driven the clouds of slothfulness far from me, I may glorify Thee, my supremely good Savior.`,
        `Look, O my lowly soul! Behold thy works, which are all-defiled! Behold thy nakedness and, alas, thine isolation! For thou shalt be separated from God and the angels, and cast into endless torment. Come to thy senses, arise, make haste and cry aloud: I have sinned, O Savior! Grant me forgiveness, and save me!`,
        `I have grievously defiled my body and brought corruption upon my soul and heart by my vile thoughts; I have wounded all my senses, and blinded mine eyes, have stopped up mine ears with filth, and have defiled my tongue; and all that I have is shameful. Wherefore, falling down before Thee, I cry aloud: O Master Christ, I have sinned against Thee! I have sinned; forgive and save me!`
      ],
      aposticha: [
        `Like the prodigal son I have sinned against Thee, O Savior. Accept me who am penitent, O Father. Have mercy upon me, O God!`,
        `With the cry of the publican I cry out to Thee, O Christ my Savior: Cleanse me as Thou didst him, and have mercy on me, O God!`,
        `When the holy martyrs pray for us and hymn Christ, all delusion ceaseth, and the race of mankind is saved by faith.`
      ],
      aposticha_glory: `All of my hope do I place on thee, O Mother of God; keep me under thy protection.`
    },
    tue: {
      lic: [
        `When Thou didst set upon the Cross, O Word, the luminaries, not bearing to shine, dimmed their rays; the earth quaked, and the rocks split asunder; the majesty of the temple was rent in twain; the graves opened, and the dead arose; Hades released all who were below, and the demons were vanquished; and death was reckoned by all to be but sleep.`,
        `When the good-hearted thief beheld Thee, the fruitful Vine, O Christ, he became a better thief and yet more skilled, for with a few words he quite simply stole the forgiveness of ancient offenses. Let us all, then, make haste to emulate him, crying aloud: Remember us also, O Lover of mankind!`,
        `Truly Thy divine Cross shineth like a star in the sky, O Christ, burning up the demons, shedding light upon the faithful, and casting shame upon the faces of those who crucified Thee. By it Thou didst lead our first parents forth from the slavery caused by the tree which was the image of the Cross, and in the desert didst cause Thy people to suck forth honey from the rock.`
      ],
      aposticha: [
        `O Christ God my Savior, Who saved Peter in the sea, save me by the power of the Cross, and have mercy on me.`,
        `Those who ever enjoyed Thy gifts cried out, "Crucify Him!"; those who slew the righteous ones asked that a malefactor be given to them in place of the Benefactor. But Thou didst keep silence, O Christ, enduring their savagery, desiring to suffer and thus save us, in that Thou lovest mankind.`,
        `The choirs of the martyrs opposed the tyrants, saying: "We fight on behalf of the King of the powers on high; though ye give us up to fire and torment, we shall not deny the power of the Trinity."`
      ],
      aposticha_glory: `The light of the sun and moon dimmed, obscured by the noetic Light Who hung naked upon the Cross; for that which is lesser is ever vanquished by the greater, and the lower giveth place to the higher. How then can it not be fitting for perceptible radiance to hide itself before the radiant Christ? the most pure one asked the worthy bodies of light, when she gazed upon Thee.`
    },
    wed: {
      lic: [
        `Like spiritual rivers issuing forth separately from Eden, O wise ones, ye have watered the whole earth and, having ploughed it, and sown the preaching of salvation, ye have reaped right fruitful grain, the souls of the saved, laying them up in the noetic granaries like riches of great price, O disciples of the Lord.`,
        `O ye luminaries of the noetic East, free my heart, which is sorely distressed by the passions, from the darkness of passionate pleasures, O most radiant heralds of the Sun, for ye announced unto all Him Who hath banished the night of unbelief. Wherefore entreat Him, that He enlighten also our minds, in that ye were eyewitnesses unto Him.`,
        `Bearing the saving Word which was written by the Spirit by the finger of the Father, ye were truly shown to be divinely inscribed tablets of the new grace, animate scrolls and initiates of His mysteries; wherefore, ye traversed all the ends of the earth, manifesting the Orthodox Faith to all mankind and revealing the path which leadeth to the heavens.`
      ],
      aposticha: [
        `Throughout the whole world Thou didst magnify the names of Thy preeminent apostles, O Savior, for they learned heavenly things and imparted ineffable healings unto mortals. They who were fishermen healed diseases by their handkerchiefs alone; they who were Jews theologized the doctrines of grace. For their sake, O Thou Who art full of loving-kindness, grant us great mercy.`,
        `We, who are ever assailed by the actions of the unrighteous, yet truly find refuge in Thee, Who art God, offer unto Thee the voice of Thy disciples, saying: Save us, O our Instructor, for we are perishing! And we pray: Show now to our enemies that Thou dost protect and save from misfortunes those who have recourse to the supplications of the apostles, overlooking their sins in Thy great goodness. O Lord, glory be to Thee!`,
        `O all-famed martyrs, the earth did not hide you, but heaven received you, and unto you were opened the gates of paradise. And since ye have entered therein, ye delight in the tree of life. Pray ye unto Christ, that He grant our souls peace and great mercy.`
      ],
      aposticha_glory: `Like a great Sun, the Word, Who is equal in honor with the Father and the Spirit, and Who in latter times shone forth upon the earth through the divine Virgin maiden, emitted you, O ye glorious apostles, like rays illumining with the light of Faith all mankind which languishes in the darkness of delusion, leading them unto Him with divine teachings.`
    },
    thu: {
      lic: [
        `When Thou wast nailed to the Cross, O Savior, the sun beheld and dimmed its rays in fear of Thee, and the veil of the temple was rent in twain; the earth quaked, and the stones likewise split asunder with trembling, unable to bear the sight of their Creator and God willingly suffering unjustly upon the Tree, and reviled by men.`,
        `Wholly cast down to the ground, wholly wounded, the most wicked serpent was brought low by a strange fall when Thou, O Lover of mankind, wast uplifted upon the Tree. And Adam who before was condemned was loosed from the curse and became saved. Wherefore, we also pray: Save us all, O Compassionate One, and grant us Thy kingdom!`,
        `When the Cross was set up and Thou wast pierced in the side with the spear, O Sinless Savior, the sun hid itself, unable to bear the sight; and when Thou wast reviled, the earth trembled, and the rocks split asunder in fear; and all creation cried out to Thee: Glory be to Thy crucifixion whereby Thou hast saved all, O Word and Lover of mankind!`
      ],
      aposticha: [
        `O Christ God my Savior, Who saved Peter in the sea, save me by the power of the Cross, and have mercy on me.`,
        `They who ever enjoyed Thy gifts cried aloud, "Crucify Him!"; they who slew the righteous ones asked that a malefactor be released unto them in place of the Benefactor. But Thou didst keep silence, O Christ, enduring their savagery, desiring to suffer and thus save us, in that Thou lovest mankind.`,
        `Having hated the pleasures of life, the passion-bearers were deemed worthy of the good things of heaven and have made their abode together with the angels. By their prayers, O Lord, have mercy and save us.`
      ],
      aposticha_glory: `When the unblemished ewe-lamb beheld her Lamb willingly led as a man to the slaughter, she said, weeping: Dost Thou now hasten to leave me childless who gave Thee birth O Christ? What is this that Thou hast done, O Redeemer of all? Even so I will hymn and glorify Thine extreme goodness, which is beyond understanding and all telling, O Lover of mankind!`
    },
    fri: {
      lic: [
        `Giving your flesh over to wounds and enduring the most bitter torments and a violent death, O all-praised martyrs, ye put the tyrants to shame and truly abolished the worship of idols, preaching Christ, the one God and Master, before Whom ye stand crowned, O glorious ones, together with the angelic hosts.`,
        `Giving your flesh over to wounds and enduring the most bitter torments and a violent death, O all-praised martyrs, ye put the tyrants to shame and truly abolished the worship of idols, preaching Christ, the one God and Master, before Whom ye stand crowned, O glorious ones, together with the angelic hosts.`,
        `Ye revealed yourselves to be divine preachers of the Word Who appeared on earth, and taught piety to all, setting forth Orthodoxy in divine words, whereby ye drove heresy far from the Church of Christ. Wherefore O blessed ones, ye ever dwell in the habitations of God, as sacred ministers of the Trinity, ye lead thereto all mankind.`,
        `Having no desire for earthly pleasure, O ye passion-bearers, ye were granted heavenly blessings, and became fellow-citizens with the angels. By their prayers, O Lord, have mercy on us, and save us.`,
        `When the holy martyrs pray for us and hymn Christ, all deception ceaseth, and the human race is saved by faith.`,
        `The choir of martyrs resisted the tyrants, saying: "We war on behalf of the King of the powers on high; though ye give us up to fire and torment, we shall not deny the power of the Trinity."`
      ],
      lic_dogmatikon: `The shadow of the law hath passed now that grace hath come, for as the bush wrapped in flame was not consumed, so didst thou bear a Child O Virgin and remained a virgin; in place of a pillar of fire, the Sun of righteousness hath dawned, instead of Moses, Christ is come, the salvation of our souls.`,
      aposticha: [
        `O ye saints, great is the glory ye have acquired through Faith. For by your sufferings ye not only vanquished the enemy; but even in death, O physicians of body and soul, ye drive out evil spirits and heal the infirm; Pray ye to the Lord, that our souls find mercy.`,
        `Every man fadeth like a flower and passeth by like a shadow, and is no more; but when the trumpet shall sound, in the midst of an earthquake all the dead shall arise to meet Thee, O Christ God. Then, O Master, do Thou settle in the abodes of the saints the souls of Thy servants whom Thou hast taken from among us.`,
        `Woe is me! How great a struggle the soul endureth at its parting from the body. Alas! How many tears will it then shed? Yet there will be none to have mercy on it. Raising its eyes to the angels, it supplicates in vain; stretching forth its hands to men, it finds none to help. Wherefore, my beloved brethren, reflecting on the shortness of our life, let us ask of Christ rest for the departed and great mercy for our souls.`
      ],
      aposticha_glory: `Save from misfortunes thy servants O Virgin Theotokos, for after God it is to thee that we flee, as to an impregnable rampart and protection.`
    }
  },

  // ── UNIVERSAL APOSTICHA VERSES ─────────────────────────────────────────────
  // Tone-independent; same every week. Migrated from OCTOECHOS_VESPERS[0].
  vespers_universal: {  // universal fixed verses
    weekday: {
      verse_weekday_1: [
        `Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, until He take pity on us.`
      ],
      verse_weekday_2: [
        `Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. Greatly hath our soul been filled therewith; let reproach come upon them that prosper, and abasement on the proud.`
      ]
    },
    saturday: {
      verse_sat_1: [
        `The Lord is King: He is clothed with majesty. The Lord is clothed with strength and He hath girt Himself.`
      ],
      verse_sat_2: [
        `For He established the universe which shall not be shaken.`
      ],
      verse_sat_3: [
        `Holiness becometh Thy house, O Lord, unto length of days.`
      ]
    }
  },

  // ── SUNDAY MATINS ──────────────────────────────────────────────────────────
  // STUB — to be encoded in Phase 3 from Drive: Octoechos/tone2/N-1.pdf
  // (Saturday Evening + Sunday Matins PDF for Tone 2)
  matins: {
    // Sunday Matins — Tone 2. Source: 2-1.pdf (St. Sergius). Markers per §3 (* → |,
    // ** → //). Canon troparia, canon theotokia/trinitarion and the ikos are Tier-1
    // plain (solid prose in the source); irmoi/sessionals/songs/prokeimenon/praises/
    // god-is-the-Lord theotokion/doxology carry | and //. God-is-the-Lord troparion,
    // Hypakoë and Matins kontakion are pulled from RESURRECTIONAL_TROPARIA / HYPAKOE /
    // SUNDAY_KONTAKIA (index.js). Evlogitaria are the tone-independent index.js table.
    // TONE-2 DIVERGENCES (verified from 2-1.pdf, NOT ported): Resurrection Ode IX closes
    // with a Trinitarion (no Theotokion); Cross-Resurrection canon is troparia-only with
    // a canon-level refrain (no per-ode theotokia — unlike Tone 1); Theotokos canon is
    // troparia-only (Odes I & VII carry 3 troparia, the rest 2).
    god_is_the_lord_theotokion: `All of thy most glorious mysteries are beyond comprehension, | O Theotokos; | for, thy purity sealed and thy virginity intact, | thou art known to be a true Mother, having given birth unto God. // Him do thou entreat, that our souls be saved.`,

    sessional_kathisma2: {
      hymn_1: { text: `The noble Joseph having taken down Thy most pure body from the tree, | wrapped it in a fine linen shroud | covering it with fragrant spices | and placed it in a new sepulcher; | but on the third day Thou didst arise, O Lord, // granting the world great mercy.` },
      hymn_2: {
        verse: `Arise, O Lord my God, let Thy hands be lifted on high; | forget not Thy paupers to the end.`,
        text: `The angel standing by the tomb cried unto the myrrh-bearing women, | "Myrrh is fitting for the dead, | but Christ hath been revealed a stranger to corruption. | rather cry aloud: The Lord is risen, // granting the world great mercy!"`,
      },
      theotokion: `Thou art highly glorified, O Virgin Theotokos, | and we sing thy praise, | for through the Cross of thy Son Hades hath been overthrown, | Death hath been slain, | and we who were dead have arisen and been granted life. | We have received paradise, our ancient delight, | therefore with thanksgiving we glorify Christ our God // as mighty and alone greatly merciful.`,
    },

    sessional_kathisma3: {
      hymn_1: { text: `Thou didst not prevent the grave stone from being sealed, | and having arisen Thou didst grant unto all | the rock of the Faith. // O Lord, glory be to Thee!` },
      hymn_2: {
        verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
        text: `The choir of Thy disciples rejoices in harmony with the myrrh-bearing women; | for with them we celebrate a common feast | to the glory and honor of Thy Resurrection. | Through them, O Lord who lovest mankind, // grant Thy people Thy great mercy.`,
      },
      theotokion: `Thou art highly blessed, O Virgin Theotokos, | for through Him who was incarnate of thee | Hades hath been taken captive, Adam recalled, the curse slain, and Eve set free, | death hath been put to death and we have been given life; | therefore with hymns we cry unto Thee: // Blessed art Thou O Christ our God who hath been thus well-pleased, glory be to Thee!`,
    },

    // Songs of Ascent — 3 antiphons (Tone 2). Each: [stanza1, stanza2, Glory/Both-now].
    songs_of_ascent: [
      [
        `I raise the eyes of my heart to Thee in heaven, O Savior. // Save me by Thy radiance.`,
        `Have mercy, O my Christ, on us who fail Thee every hour | and in many ways, | and grant unto us the means to return unto Thee // in repentance before the end.`,
        `To the Holy Spirit belongeth sovereignty, | sanctification and the quickening of creation, | for He is God, One in essence with the Father // and the Word.`,
      ],
      [
        `If the Lord was not amongst us, | who could be kept safe | from the one who is both our foe // and a manslayer?`,
        `Do not hand Thy servant over to destruction, | O my Savior. | For like a lion they come up against me, // they who are my foes.`,
        `To the Holy Spirit belongeth the source of life and its honor, | for, being God, He preserveth all creation | by His power // in the Father through the Son.`,
      ],
      [
        `Those who trust in the Lord | are like unto the holy mountain: | they are utterly unshaken // by the assaults of the enemy.`,
        `Let not those who live for God | stretch out their hands in iniquity; | for with the rod of His word // Christ forbideth such things.`,
        `By the Holy Spirit all wisdom doth flow forth, | grace unto the apostles, | crowns unto the martyrs, // and unto the prophets, prophetic vision.`,
      ],
    ],

    matins_prokeimenon: {
      tone: 2,
      text: `Arouse Thyself, O Lord my God, in the commandment which Thou hast enjoined, | and a congregation of peoples shall surround Thee.`,
      verse: `O Lord my God, in Thee have I put my hope. Save me from all them that pursue me and do Thou deliver me.`,
    },

    canons: {
      // Resurrection canon — irmos (pointed) + refrain + 2 troparia + Theotokion per ode,
      // EXCEPT Ode IX which closes with a Trinitarion instead of a Theotokion.
      resurrection: {
        odes: {
          1: {
            irmos: `In the deep of old the infinite Power overwhelmed Pharaoh's whole army. | But the Incarnate Word annihilated pernicious sin. | Exceedingly glorious is the Lord, | for gloriously hath He been glorified.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The ruler of the world, O good One, to whom we were enslaved by not obeying Thy commandments, hath been condemned by Thy Cross; for having attacked Thee as a mortal He hath fallen by the might of Thine authority, exposing his feebleness.`,
              `Thou camest into the world as the Redeemer of the race of mortals and Prince of the life without corruption; for Thou didst tear apart death's winding sheets by Thy Resurrection, which we all glorify; for gloriously hath It been glorified.`,
            ],
            theotokion: `Thou hast appeared higher than all creation, visible and invisible, O pure Ever-virgin; for thou hast given birth to the Creator, since He was well pleased to become incarnate within thy womb; by thy boldness of supplication implore Him that our souls be saved.`,
          },
          3: {
            irmos: `The desert of the barren Church of the nations | blossomed like a lily | at Thy coming, O Lord, | therein hath my heart been established`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `At Thy passion creation was changed when it saw Thee, who doest all things by Thy divine bidding, humbled in form and derided by lawless men.`,
              `Thou didst fashion me from dust by Thine own hand in accordance with Thine image, and when I through sin, was crushed back to the dust of death from whence I came Thou didst descend with me into Hades, O Christ, and raise me up again with Thyself.`,
            ],
            theotokion: `The angelic orders were astonished, and the hearts of mortals trembled at thy birth-giving, O most pure one; wherefore in faith we honor thee as the Mother of God.`,
          },
          4: {
            irmos: `From a Virgin didst Thou come forth, not as an ambassador, | nor as an angel, | but the very Lord Himself incarnate, | and didst save me, the whole man; | wherefore I cry unto Thee: | Glory to Thy power, O Lord!`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `As one condemned, O my God, Thou didst stand before the tribunal but did not cry out, O Master, with a pronouncement of judgment upon the nations. Rather Thou hast wrought salvation for the world through Thy Passion, O Christ.`,
              `The swords of the enemy failed at Thy Passion; and by Thy descent into Hades the cities of Thine adversaries were destroyed and the arrogance of the tyrant was brought to naught.`,
            ],
            theotokion: `All we believers know thee to be a safe haven of salvation and an unshakeable rampart, O Sovereign Lady Theotokos, for by thine intercessions thou dost deliver our souls from all dangers.`,
          },
          5: {
            irmos: `O Christ God Thou art a mediator between God and man; | for by Thee, O Master, | we have been led from the night of ignorance, | to Thy Father, the Source of light.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Like a cedar, O Christ, Thou didst crush the insolence of the nations, since of Thine own will Thou wast well-pleased, O Master, to be raised up in the flesh, on cypress, pine and cedar.`,
              `They laid Thee, O Christ, as a lifeless corpse in the nethermost pit, but by Thine own stripes, O Savior, Thou hast raised with Thyself the slain who slept forgotten in the tombs.`,
            ],
            theotokion: `Beseech Thy Son and Lord, O pure Virgin, to grant deliverance from hostile circumstances to prisoners, and peace to those who put their trust in Thee.`,
          },
          6: {
            irmos: `Whirled about in the abyss of sin, | I appeal to the unfathomable abyss of Thy compassion: | Raise me up from corruption, O God.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The just One is judged as a malefactor and nailed with the lawless ones to the Tree, by His own blood granting remission of sins to the guilty.`,
              `Of old, through one man, the first Adam, death entered the world; and through one Man, the Son of God, Resurrection hath been revealed.`,
            ],
            theotokion: `Without knowing a man thou didst bring forth a child, O Virgin, yet thou remainest ever-virgin, revealing thereby, proof of the divinity of thy Son and God.`,
          },
          7: {
            irmos: `The godless order of the lawless tyrant | fanned the roaring flame; | but Christ bedewed the God-fearing children with the Spirit, | therefore He is blessed and supremely exalted.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Master through Thy compassion Thou couldest not bear to see mankind tyrannized by death, but, becoming man, Thou hast come and saved it by Thine own blood; O all-powerful One, Who art the blessed and supremely glorious God of our fathers.`,
              `O Christ, the gate-keepers of Hades, beholding Thee clothed in the robe of vengeance, trembled; for Thou didst come, O Master, to destroy the foolish tyrant; O all-powerful One, Who art the blessed and supremely glorious God of our fathers.`,
            ],
            theotokion: `We acknowledge thee as the Holy of Holies, O Virgin undefiled, Mother without bridegroom, as her who alone hath given birth to the immutable God; for by thy divine child-bearing thou hast become the source of incorruption for all the faithful.`,
          },
          8: {
            irmos: `In Babylon, the activity of the fire was once divided, | for, by the command of God it consumed the Chaldeans, | but bedewed the faithful, who chant: | Bless ye the Lord, all ye works of the Lord!`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `When they saw the robe of Thy flesh, O Christ, made scarlet with Thine own blood, the ranks of angels stood trembling with awe as they beheld Thy great long-suffering and cried aloud: "Bless ye the Lord all ye works of the Lord."`,
              `O merciful One, by Thine arising Thou hast clothed my mortality in immortality; therefore O Christ, Thy chosen people rejoicing sing to Thee, and cry: "Death is truly swallowed up by Thy victory."`,
            ],
            theotokion: `Without seed didst thou conceive and ineffably bear Him who though inseparable from the Father, dwelt in thy womb as both God and man, O most pure Birthgiver of God; therefore we all acknowledge thee as the salvation of us all.`,
          },
          9: {
            irmos: `The Son of the beginningless Father, God and Lord, | hath appeared to us incarnate of a virgin, | to enlighten those in darkness, | and to gather the dispersed; | therefore the all-hymned Theotokos do we magnify`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Savior, the thrice-blessed Tree of Thine immaculate Cross was planted on Calvary as if in paradise, and watered by the divine blood and water which flowed from Thy divine side, O Christ, it hath blossomed forth for us with life.`,
              `Being crucified, O all-powerful One, Thou hast laid low the mighty, exalting human nature which lay below in the strongholds of Hades, and placed it upon Thy Father's throne: since Thou art coming again in that nature, we worship and magnify Thee.`,
            ],
            trinitarion: `With a right Orthodox belief we the faithful hymn the triune Unity, the consubstantial Trinity, glorifying the inseparable nature, supremely divine triple Light, never-setting Radiance and only incorruptible One, that doth shed forth light upon us all.`,
          },
        },
      },

      // Cross-Resurrection canon — troparia-only, canon-level refrain. NO per-ode
      // theotokia (Tone-2 divergence from Tone 1). Ode VII carries 3 troparia.
      cross_resurrection: {
        refrain: `Glory to Thy precious Cross and Resurrection O Lord.`,
        odes: {
          1: { troparia: [
            `O Christ Thou hast become the strength of the infirm, the Resurrection of the fallen and the incorruption of the dead, by the suffering of Thy flesh: for gloriously hast Thou been glorified.`,
            `God the Creator and Refashioner hath taken pity upon His fallen image and hath raised it up from whence it was crushed, having Himself been put to death; for gloriously hath He been glorified.`,
          ] },
          3: { troparia: [
            `Christ, who is above all, hath become a little lower than the angels by His suffering in the flesh.`,
            `As one dead Thou wast numbered with the lawless, O Christ, but Thou didst appear to the women shining with the crown of the glory of Thy Resurrection.`,
          ] },
          4: { troparia: [
            `Beholding Thee nailed to the Cross, O Christ, the Virgin who didst bear Thee without pain, endured the anguish of a mother.`,
            `Death hath been vanquished, and one dead hath despoiled the gates of Hades; for now that the all-devouring one hath been rent apart, all that is above nature hath been bestowed upon me.`,
          ] },
          5: { troparia: [
            `The former Adam, refusing to fast, tasted of the tree that brought death; but the Second, by being crucified, hath blotted out the former's sin.`,
            `O Christ, impassible in Thine immaterial Godhead, Thou hast become passable and mortal in nature. Granting incorruption to those dead, raising them from the vaults of Hades.`,
          ] },
          6: { troparia: [
            `Thou didst place the cherubim as guards of the Tree of life against fallen mankind; but upon seeing Thee they opened the gates; for Thou didst appear guiding the thief into paradise.`,
            `By the death of one man Hades hath been despoiled and overthrown, for the great wealth that Hades had amassed, Christ hath emptied on behalf of us all.`,
          ] },
          7: { troparia: [
            `Of old disobedience condemned the forefather in Eden; but willingly Christ was condemned, absolving the charge against the transgressor: "O supremely divine and supremely glorious God of our fathers."`,
            `Thou hast saved him who was wounded by the envious tongue of the manslayer in Eden; for Thou didst cure the bite by willingly incurring Thy Passion: "O supremely divine and supremely glorious God of our fathers."`,
            `Thou hast called me back to the light as once I walked in the shadow of death when Thou didst strike the shadowy darkness of Hades with the splendor of Thy Divinity: "O supremely divine and supremely glorious God of our fathers."`,
          ] },
          8: { troparia: [
            `O Lover of mankind, who art rich in mercy, Thou wast seen nailed to the Cross, and willingly buried and didst arise on the third day, redeeming all mortal mankind who singeth unto Thee in faith: "Let all creation hymn the Lord, and supremely exalt him throughout all ages."`,
            `O Word of God, Thou didst descend to the nethermost regions of the earth to deliver from corruption him whom Thou didst fashion by Thy power, O my Christ, and when Thou didst make him incorruptible Thou didst make him a partaker in Thine eternal glory, that he may cry aloud: "Let all creation hymn the Lord and supremely exalt him throughout all ages."`,
          ] },
          9: { troparia: [
            `Thou wast hung like a lamb, O Christ, In the midst of those condemned on the Cross on Calvary, Thy side pierced by a lance. In Thy goodness Thou hast granted life unto us who are fashioned of dust but who in faith honor Thy divine Resurrection.`,
            `Let us the faithful all worship God, who by His own death hath destroyed with might the power of death; for He hath raised with Him the dead of all ages, and to all doth He grant life and Resurrection.`,
          ] },
        },
      },

      // Theotokos canon — troparia-only, canon-level refrain. Odes I & VII carry 3 troparia.
      theotokos: {
        refrain: `Most holy Theotokos save us.`,
        odes: {
          1: { troparia: [
            `Of old an immaterial ladder and a path in the sea wondrously made dry revealed thy birth-giving, O pure one. Wherefore we all sing its praise, for gloriously hath it been glorified.`,
            `The Power of the Most High, the supreme essence and Wisdom of God, became incarnate from thee, O immaculate one, and conversed with mortals; for gloriously hath He been glorified.`,
            `The Sun of righteousness came through the sealed and untrodden gateway of thy womb, O pure one, and hath thus shone upon the world: for gloriously hath He been glorified.`,
          ] },
          3: { troparia: [
            `The One who is beyond all time, as the Creator of time, was fashioned of His own will as a babe from thee, O Virgin.`,
            `Let us, the faithful, hymn the womb that is wider than the heavens; for through it Adam, rejoicing, hath become a citizen of heaven.`,
          ] },
          4: { troparia: [
            `Come and see, for the Theotokos, the divine mountain, is now made the dwelling-place of the Lord, and is exceedingly exalted above all the powers of the heavens.`,
            `O Virgin, who alone surpassing the laws of nature hath borne the Master of creation, and been made worthy of a divine appellation.`,
          ] },
          5: { troparia: [
            `O Ye clouds, rain down the sweetness of joy upon us here on earth, for a Child hath been given, who is our God before all ages, incarnate from the Virgin Mary.`,
            `In the last times, the Most High hath become incarnate without seed from the Virgin, shining light upon my life and my flesh, vanquishing the gloominess of sin.`,
          ] },
          6: { troparia: [
            `Human nature enslaved through sin found freedom through thee, O pure Lady; for like a lamb thy Son was sacrificed on behalf of all.`,
            `We all call upon thee the true Mother of God, to deliver thy servants who ever provoke thy Son to anger; for thou alone hast acquired great boldness towards Him.`,
          ] },
          7: { troparia: [
            `Jacob in the night, as if in a riddle, saw God incarnate from thee; and He hath clearly appeared from thee unto those who sing: "O supremely divine and supremely glorious God of our fathers."`,
            `He wrestleth with Jacob, foreshadowing the signs of the ineffable mingling that took place within thee, O pure one, through which the supremely divine and supremely glorious God of our fathers hath been willingly united with mankind.`,
            `Profane is he who doth not proclaim Thee, the Virgin's Son, as one of the Trinity, nor crieth with unwavering mind and tongue: "O supremely divine and supremely glorious God of our fathers."`,
          ] },
          8: { troparia: [
            `Through thee, He who is incomparable in goodness and power was seen on earth and lived amongst mortal mankind, to whom all we faithful sing as we cry: Let all creation, to whom life hath been granted, hymn the Lord, and supremely exalt Him throughout all ages.`,
            `Rightly proclaiming thee O pure one, we glorify thee O Theotokos, for thou didst bring forth incarnate, one of the Trinity, to whom together with the Father and the Spirit we sing: Let all creation hymn the Lord, and supremely exalt Him throughout all ages.`,
          ] },
          9: { troparia: [
            `A staff of strength hath been given to our corrupt nature: the Word of God in thy womb, O pure one, and He hath raised it up after it had slid into the depths of Hades; therefore, O all-pure one, as the Mother of God we magnify thee.`,
            `O Master receive with compassion as an ambassador on our behalf, Thy Mother whom Thou hast chosen, and all things will be filled with Thine own goodness, that we may all magnify Thee as our Benefactor.`,
          ] },
        },
      },
    },

    ikos: `O Savior, Thou art the light of those lying in darkness, and the Resurrection and the life of all mortals. Since Thou hast raised up all mankind with Thyself, despoiling the might of death, and smashing the gates of Hades, O Word, all creation, marveling at the wonder, rejoiceth in Thy Resurrection. O Lover of mankind, we therefore glorify and hymn Thy condescension, and the world ever praiseth Thee, O my Savior.`,

    // Praises — 8 Resurrection stichera. The Glory is the Eothinon Gospel sticheron
    // (RESURRECTION_GOSPEL_STICHERA, by Gospel #, tone-independent) and the Both-now is
    // the fixed "Thou art most blessed" theotokion — neither stored here, per Tone 1.
    praises: {
      stichera: [
        { verse: `To do among them the judgment that is written, | This glory shall be to all His saints.`,
          text:  `Everything that hath breath and every creature doth glorify Thee, O Lord, | for through Thy Cross Thou hast destroyed death | and thus shown the multitude of peoples Thy Resurrection from the dead, // as Thou alone lovest mankind.` },
        { verse: `Praise ye God in His saints, | praise Him in the firmament of His power.`,
          text:  `Let the Jews tell how the soldiers lost the King they were guarding. | Why then did the stone not guard the Rock of life? | Either let them give up the One who was buried or adore Him as risen, | exclaiming together with us: | "Glory to the multitude of Thy mercies: // O Savior, glory be to Thee!"` },
        { verse: `Praise Him for His mighty acts, | praise Him according to the multitude of His greatness.`,
          text:  `Rejoice O ye peoples and be glad! | for an angel sat upon the grave stone | and hath given us good tidings saying: | "Christ is risen from the dead | and hath filled the universe with sweet fragrance. // Rejoice O ye peoples and be glad!"` },
        { verse: `Praise Him with the sound of trumpet, | praise Him with the psaltery and harp.`,
          text:  `Before Thy conception, O Lord, | an angel brought the greeting "Rejoice" to the one full of grace: | at Thy Resurrection an angel rolled away the stone from Thy glorious grave. | The one revealed the signs of joy instead of sorrow; | the other instead of death hath proclaimed to us the Master, and Giver of life. | Wherefore we cry unto Thee, | "O Benefactor of all mankind, // Lord, glory be to Thee!"` },
        { verse: `Praise Him with timbrel and dance, | praise Him with strings and flute.`,
          text:  `The women sprinkled sweet spices | mingled with their tears upon Thy grave, | but their mouths were filled with joy as they exclaimed, // "The Lord hath arisen!"` },
        { verse: `Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. | Let every breath praise the Lord.`,
          text:  `Let the nations and the peoples praise Christ our God, | who willingly endured the Cross for us and suffered three days in Hades; | let them worship His Resurrection from the dead, // through which all the ends of the world have been enlightened.` },
        { verse: `Arise, O Lord my God, let Thy hands be lifted high; | forget not Thy paupers to the end.`,
          text:  `Thou wast crucified, and Thou wast buried, O Christ, | as Thou didst will; | Thou hast despoiled death as God and Master, // granting the world eternal life and Thy great mercy.` },
        { verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
          text:  `In truth, O wicked ones, | by sealing the tomb you have granted us a greater wonder; | for the guards having complete knowledge of that which took place were compelled by you to say | "while we slept the disciples came and stole him." | And who would steal a corpse, especially one that is naked? | But He hath arisen by His own authority as God, | leaving behind His grave-clothes in the tomb. | Come, O ye Jews, | see that He did not burst the seals, | the One who hath trampled on death | and granted mankind life without end // and His great mercy.` },
      ],
    },

    great_doxology_troparion: `Having risen from the tomb, and having burst the bonds of Hades, | Thou hast destroyed the sentence of death, O Lord, | delivering all from the snares of the enemy. | Manifesting Thyself to Thine apostles, Thou didst send them forth to preach; | and through them hast granted Thy peace to the world, // O Thou Who alone art greatly merciful.`,
  },

};
