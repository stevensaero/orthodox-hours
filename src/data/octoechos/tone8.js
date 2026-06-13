// src/data/octoechos/tone8.js
// Tone 8 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone8/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[8].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers', 'matins'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[8] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 8
    sat: {
      lic: [
        `We offer unto Thee, O Christ, | an evening hymn and spiritual worship; | because Thou wast well-pleased to have mercy on us // through the Resurrection.`,
        `O Lord, cast us not away | from Thy presence; | but be well-pleased to have mercy on us // through the Resurrection.`,
        `Rejoice holy Zion, | Mother of the Churches, | dwelling-place of God; | for it was thee who first received forgiveness of sins // through the Resurrection.`,
        `The Word, begotten of God the Father before all ages, | hath in the last times become incarnate of her who knew not wedlock, | and willingly endured the crucifixion and death, | and mankind, slain of old, hath thereby been saved // through His own Resurrection.`,
        `We glorify Thy Resurrection from the dead, O Christ, | through which Thou hast freed the race of Adam from the tyranny of Hades, | and as God hast granted the world eternal life // and great mercy.`,
        `Glory be to Thee, O Christ Savior, | only-begotten Son of God, | affixed by nails to the Cross and risen from the tomb // on the third day.`,
        `We glorify Thee, O Lord, | and we worship Thee, O all-powerful Savior, | who willingly endured the Cross for our sake; | cast us not away from Thy presence, | but hearken unto us and save us through Thy Resurrection, // O only Lover of mankind.`
      ],
      aposticha: [
        `O Christ, having descended from heaven, | Thou didst ascend the Cross; | O immortal Life, Thou didst descend into Hades; | the true Light, unto those in darkness; | the Resurrection unto all those who had fallen. // Our illumination and our Savior, glory be to Thee.`,
        `Let us glorify Christ who hath risen from the dead: | for having taken a body and a soul, | He parted them one from another by the Passion. | For His soul hath descended into Hades, | which He despoiled, while the holy body of the Redeemer of our souls // knew not corruption in the tomb.`,
        `O Christ, in psalms and hymns we glorify Thy Resurrection from the dead. | For through it Thou hast freed us from the tyranny of Hades, // and as God Thou hast granted us life eternal, // and Thy great mercy.`,
        `Thou, O Master of all things, | art the incomprehensible Creator of heaven and earth, | by suffering the Cross Thou hast become for me the source of immortality. | Submitting to burial and arising in glory, | Thou hast raised Adam with Thyself by Thine all-powerful hand. | Glory to Thine arising on the third day, | through which Thou hast granted us eternal life and the forgiveness of sins, // as Thou alone art lovingly compassionate.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `In His love for mankind, the King of heaven appeared on earth | and dwelt among men; | for He Who received flesh from the pure Virgin | and cameth forth from her having received human nature, | is the only Son of God, | twofold in nature but not Hypostasis. | Therefore, proclaiming Him to be truly perfect God and perfect man, | we confess Christ our God. | Him do thou beseech, O unwedded Mother, // that our souls find mercy!`
    },
    sun_eve: {
      lic: [
        `O Lord Who camest into the world to call sinners to Thee, and Who accepted the thief, the publican and the harlot: In Thy love for mankind, O my Christ, call me also to Thee, though I have sinned against Thee more than all others, and never repent.`,
        `O Lord, Who ordained publicans as pastors for Thy Church, and made a helper now of him who before was a persecutor: By their supplications show me to be Thy lamb, O Savior, and let me not, who am useless, fall prey to the alien one.`,
        `Weep before the end, O my wretched and most vile soul, and cleave unto God, crying out to him with groans from the depths of thy heart: I have sinned against Thee, O Christ! Revile me not, I pray, but turning me back to Thee, grant me forgiveness, in that Thou art merciful.`
      ],
      aposticha: [
        `The angels unceasingly hymn Thee, the King and Master; and I fall down before Thee, crying like the publican: Cleanse me, O God, and have mercy upon me!`,
        `As thou art immortal, O my soul, let not the waves of life cover thee, but rise up, crying out to thy Benefactor: Cleanse me, O God, and save me!`,
        `O martyrs of the Lord, ye sanctify every place and heal every infirmity. Pray ye now, that our souls be delivered from the snares of the enemy, we beseech you.`
      ],
      aposticha_glory: `Taking up the cry of the Archangel Gabriel, let us say: Rejoice, O Mother of God, who hast given birth unto Christ, the bestower of life upon the world!`
    },
    mon: {
      lic: [
        `I have acquired neither compunction, nor a wellspring of tears, nor fervent confession, nor weeping which washeth me clean, nor humility of heart; I have been neither an emulator of the publican, nor of the harlot, nor of the prodigal son. How, therefore, shall I find remission for my many sins? But in the judgments which Thou knowest, save me, O Christ.`,
        `I have made myself a stranger to every commandment of God; in every way I have neglected higher virtue; mindlessly wasting my whole life in slothfulness; and I have committed every unseemly and iniquitous act in fornication. Wherefore, since Thou art compassionate O Christ, have pity, and freely save me.`,
        `In Thine anger rebuke me not who am the work of Thy hands, and who with my foolish mind have torn myself away from goodness, O Lover of mankind, and Who in the abyss of Thine ineffable compassion wast for my sake well-pleased to become like unto me. But through the supplications of Thine Ever-virgin Mother, O Word, grant me divine conversion, in that Thou art God.`
      ],
      aposticha: [
        `The angels unceasingly hymn Thee, the King and Master; and I fall down before Thee, crying like the publican: Cleanse me, O God, and have mercy upon me!`,
        `As thou art immortal, O my soul, let not the waves of life engulf thee, but rise up, crying out to thy Benefactor: Cleanse me, O God, and save me!`,
        `O martyrs of the Lord, entreat ye our God, and ask for our souls a multitude of compassions and the cleansing of our many transgressions, we beseech you.`
      ],
      aposticha_glory: `Rejoice, thou praise of the universe! Rejoice, temple of the Lord! Rejoice, mountain overshadowed! Rejoice, refuge of all! Rejoice, golden candlestick! Rejoice, honored glory of the Orthodox! Rejoice, Mary, Mother of Christ God! Rejoice, paradise!`
    },
    tue: {
      lic: [
        `When Thou wast nailed to the Cross, Thy hands and feet run through, Thy holy side was pierced, pouring forth drops of blood and water, our divine salvation, O supremely good One, that Thou mightest wash away my defilement and pollution. Glory to Thy goodness, O all-Compassionate One!`,
        `Thou didst endure suffering, O Master, that Thou mightest bestow dispassion upon all who worship Thy sufferings and voluntary sacrifice: the spear, nails and reed, which Thou didst willingly endure with long-suffering: that for the sake of Thy sufferings, O Lord, Thou mightest win dispassion for me.`,
        `The unblemished heifer, beholding her Bullock willingly lifted up upon the Tree, cried out with compunction, lamenting: "Woe is me, O my most beloved Child! How hath the ungrateful assembly of the Jews rewarded Thee, desiring to leave me bereft of Thee, O all-Beloved!"`
      ],
      aposticha: [
        `O Christ God Who wast lifted up upon the Cross, Thou didst save the race of mankind. We glorify Thy sufferings!`,
        `Thou wast nailed to the Cross, O Christ God, and opened the gates of paradise. We glorify Thy divinity!`,
        `Thy martyrs, O Lord, putting aside the things of life, ignored their tortures for the sake of the life which is to come, and were shown to be inheritors thereof; wherefore, they rejoice with the angels. By their supplications grant great mercy to Thy people.`
      ],
      aposticha_glory: `O Lord, when the sun beheld Thee the Sun of righteousness, hanging upon the Tree, it hid its rays, and the light of the moon was changed to darkness; and Thine all-immaculate Mother was pierced in the depths of her soul.`
    },
    wed: {
      lic: [
        `O Lord, Thou didst enlighten Thine apostles with the beams of the Comforter, with the noetic radiance of the knowledge of Thee setting them as beacons unto the confirmation of the Faith, O Master; wherefore, we bow down before Thine ineffable love for mankind.`,
        `By the supplications of Thine apostles, O Lord, Thou hast protected this Thy flock, preserving it unharmed by the temptations of the enemy; for with Thy precious blood Thou didst redeem it from enslavement to the enemy, in that Thou art compassionate and the Lover of mankind.`,
        `Together ye were shown to be like precious stones set in the foundation of the Church, with radiant brilliance shining forth upon the whole world the knowledge of God, O divine apostles, who stand before the Trinity and pray for our souls.`
      ],
      aposticha: [
        `Fervently loving Thee on earth, O Lord, Thine apostles considered all to be but dung, that they might acquire Thee alone; and they gave their bodies over to wounds for Thee; wherefore, glorified, they pray for our souls.`,
        `O Lord, Thou didst magnify the memory of the apostles on earth, for assembling them together, we all glorify Thee; since by their prayers and for their sake, Thou dost grant healings, peace and great mercy to the whole world.`,
        `What virtue, what praise is due the saints? For they bowed their heads beneath the sword for the sake of Thee Who bowed down the heavens and descended; they shed their blood for Thee Who emptied Thyself and assumed the form of a servant; they humbled themselves even unto death, emulating Thy poverty. By their prayers, O God, have mercy upon us in the multitude of Thy compassions.`
      ],
      aposticha_glory: `I flee to thy protection, O holy Virgin Theotokos, for I know that through thee I shall obtain salvation; for thou art able to help me, O pure one.`
    },
    thu: {
      lic: [
        `O most glorious wonder! The Life-bearing Tree, the most holy Cross is revealed today, lifted up on high. All the ends of the earth glorify it, and the hordes of the demons are affrighted. O what a gift hath been given to mortals! Thereby, O Christ, save Thou our souls, in that Thou alone art compassionate.`,
        `O most glorious wonder! Like a vine full of life, bearing the Most High, the Cross is seen today uplifted from the earth. Thereby have we all been drawn to God, and death hath been utterly slaughtered. O most honored Tree, whereby, glorifying Christ, we have received the immortal sustenance which was in Eden!`,
        `O the great goodness which Thou hast for us, O good Jesus! How didst Thou abase Thyself, become a man, and will to suffer, enduring the Cross and violent death for Thy useless servants? We offer the Cross to Thee as a worthy and divinely fitting gift; and giving thanks, we, the faithful, glorify Thee.`
      ],
      aposticha: [
        `O Christ God Who wast lifted up upon the Cross, Thou didst save the race of mankind. We glorify Thy sufferings!`,
        `Thou wast nailed to the Cross, O Christ God, and didst open the gates of paradise. We glorify Thy divinity!`,
        `Ye sanctify every place, O martyrs of the Lord, and heal every infirmity. Pray ye now, that our souls be delivered from the nets of the enemy, we beseech you.`
      ],
      aposticha_glory: `The unblemished heifer, beholding her Bullock willingly nailed upon the Tree, cried out aloud, lamenting piteously: "Woe is me, O my most beloved Child! How hath the ungrateful assembly of the Jews rewarded Thee, desiring to leave me childless and bereft of Thee, O my most beloved Child?"`
    },
    fri: {
      lic: [
        `O martyrs of the Lord, ye sanctify every place and heal every manner of infirmities: and now we entreat you to intercede on our behalf, that our souls may be delivered from the snares of the enemy.`,
        `Thy martyrs, O Lord, no longer mindful of the temporal things of this life, despised not torture for the sake of the life to come, which they manifestly inherited, wherefore they rejoice with the angels. By their supplications grant great mercy to Thy people.`,
        `What virtue, what praise, are due the saints? For they bowed their heads beneath the sword for the sake of Thee Who bowed down the heavens and descended to us; they shed their blood for Thee Who abased Thyself and assumed the form of a servant; they humbled themselves even unto death, imitating Thy poverty. By their intercessions, O God, have mercy on us, in the multitude of Thy compassions!`,
        `I have become like the barren tree, as if clad with useless leaves; and I am afraid that if I am cut down, Thou wilt send me into unquenchable everlasting fire, O Master. But grant me time to convert, that I may offer Thee the goodly fruit of virtuous acts, and may be deemed worthy of Thy kingdom.`,
        `O Lord, O Lord, Who lovest mankind, turn not Thy face away from me, Thy servant, who angereth Thy goodness every day, neither punish me by Thy righteous wrath, O Christ. I confess that I have sinned, I have sinned against Thee like none other. But have pity and save me, by the prayers of Thy Mother.`,
        `When in Thy glory Thou shalt sit as the King of all upon Thy judgment-seat, and all the holy angels stand before Thee with fear, and all human nature will stand before Thee to be judged, O Christ; then, through the supplications of Thy Mother, O Lord, from all torments deliver those who have fallen asleep in faith.`
      ],
      lic_dogmatikon: `In His love for mankind, the King of heaven appeared on earth and dwelt among men; for He Who received flesh from the pure Virgin and cameth forth from her having received human nature, is the only Son of God, twofold in nature but not Hypostasis. Therefore, proclaiming Him to be truly perfect God and perfect man, we confess Christ our God. Him do thou beseech, O unwedded Mother, that our souls find mercy!`,
      aposticha: [
        `O ye martyrs of the Lord, we beseech you to intercede before our God: pray ye that abundant mercy be granted to our souls, and the cleansing of our many sins.`,
        `I weep and lament when I contemplate death and behold our beauty, which hath been created according to the image of God, lying in the grave, bereft of form, devoid of glory, unsightly. O the wonder! What is this mystery concerning us? How have we been given over to corruption? How have we been yoked together with death? Truly, as it is written, this is by the command of God, Who giveth rest unto the departed.`,
        `Thy death, O Lord, won immortality for us; for if Thou hadst not been laid in the tomb, paradise would not have been opened. Wherefore, grant rest to the departed, in that Thou lovest mankind.`
      ],
      aposticha_glory: `O pure Virgin, portal of the Word, Mother of our God: pray thou that we be saved.`
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
  // STUB — to be encoded in Phase 3 from Drive: Octoechos/tone8/N-1.pdf
  // (Saturday Evening + Sunday Matins PDF for Tone 8)
  matins: {
    god_is_the_lord_theotokion: `O good One, Who for our sake wast born of the Virgin | and, having endured crucifixion, cast down death by death, | and as God revealed the Resurrection: | disdain not that which Thou hast fashioned with Thine own hand. | Show forth Thy love for mankind, O merciful One; | Accept the supplications of the Theotokos who bore Thee, // and save Thy despairing people, O our Savior!`,

    sessional_kathisma2: {
      hymn_1: { text: `Thou the Life of all, | didst rise from the dead, | and an angel of light cried out to the women saying: | \"Cease your tears. Bring the good tidings unto the apostles.\" | Cry aloud in hymns that Christ the Lord hath arisen // who as God was well-pleased to save mankind.` },
      hymn_2: {
        verse: `Arise, O Lord my God, let Thy hands be lifted on high; | forget not Thy paupers to the end.`,
        text: `When Thou wast indeed risen from the tomb | Thou didst command the holy women to announce the Resurrection to the apostles, | as it is written; | and Peter, having arrived quickly, | stood by the grave and seeing the light in the tomb was affrightened. | observing the grave clothes lying therein, | without the divine body, | and believing he cried aloud: | \"Glory be to Thee O Christ God our Savior, | Who hast saved us all, // for Thou art the effulgence of the Father.\"`,
      },
      theotokion: `Let us hymn the heavenly gate and ark, | the all-holy mountain, the cloud of light, the heavenly ladder, | the spiritual paradise, the redemption of Eve, | the great treasure of the world; | because salvation for the world and forgiveness of ancient offences were wrought in her. | Therefore we cry unto her: | Intercede with thine own Son and God to grant forgiveness offences // to those who devoutly worship thy most holy Offspring.`,
    },

    sessional_kathisma3: {
      hymn_1: { text: `Mortals sealed Thy tomb, O Savior | and an angel rolled away the stone from the door, | and the women saw that Thou hadst arisen from the dead, | and announced the good tidings to Thy disciples in Zion: | \"The Life of all hath risen and the bonds of death are loosed. // O Lord, glory be to Thee.\"` },
      hymn_2: {
        verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
        text: `The women having brought sweet-smelling burial spices | heard an angel's voice coming from the tomb: | \"Cease thy tears, and bring joy instead of sorrow.\" | Wherefore cry ye aloud in hymns that Christ the Lord is risen, // who as God was well-pleased to save the race of mankind.`,
      },
      theotokion: `In Thee, O Full of grace, | doth all creation rejoice, | the ranks of angels and the race of mankind; | O all-hallowed temple and spiritual paradise, | boast of Virgins. | For from thee God became incarnate | and He who is our God before the ages became a child. | He hath made thy womb a throne and rendered it wider than the heavens. | In thee, O Full of grace, doth all creation rejoice; // glory be to thee.`,
    },

    songs_of_ascent: [
      [
        `From my youth the enemy doth tempt me, | enflaming me with the desire for pleasures; // but placing my trust in Thee O Lord, I put him to flight.`,
        `Let those that hate Zion, | become like grass before it is tilled; // for Christ severeth their necks with the sharp blade of torments.`,
        `By the Holy Spirit all things have life; | Light from Light, eminent God: // we hymn Him together with the Father and the Word.`,
      ],
      [
        `Let my humble heart be sheltered by the fear of Thee; | lest it fall away from Thee by being conceited, // O exceedingly compassionate One.`,
        `He who hath his hope in the Lord | will not be afraid when the Lord judgeth all things // with fire and torment.`,
        `Everyone inspired by the Holy Spirit seeth and foretelleth all, | working the greatest wonders, | singing of one God in three Hypostases; | for though the Divinity radiates with triune light, // it ruleth as One.`,
      ],
      [
        `I have cried unto Thee, O Lord, hearken unto me, | bend Thine ear to my supplications when I cry unto Thee, // and do thou cleanse me before taking me from this life.`,
        `Each and every one who returneth to mother earth | will depart to receive torments or rewards // in reward for their life's actions.`,
        `Contemplation of God by the Holy Spirit | is of a thrice-holy Unity; | for the Father is beginningless, | from Whom the Son was begotten before time, | and the Spirit equal in essence and majesty, // doth blaze forth equally from the Father.`,
      ],
      [
        `Behold, what is so good, what is so pleasant | as to see brothers dwelling together? | For by this the Lord hath promised eternal life.`,
        `The One who adorneth the lilies of the field | doth command us to be unconcerned // over temporal things.`,
        `By the Holy Spirit, | by one single cause all things gain the reward of peace; | for He is God perfectly consubstantial // with both the Father and the Son.`,
      ],
    ],

    matins_prokeimenon: {
      tone: 8,
      text: `The Lord shall be King unto eternity; | thy God, O Zion, unto generation and generation.`,
      verse: `Praise the Lord, O my soul. I will praise the Lord in my life.`,
    },

    canons: {
      resurrection: {
        odes: {
          1: {
            irmos: `The wonderworking staff of Moses, | striking and dividing the sea in the figure of a cross, | once drowned pharaoh the pursuing charioteer, | while it saved the fleeing people of Israel | as they fled on foot, | chanting a hymn unto God.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `How can we not but marvel at Christ's all-powerful divinity? To the faithful it poureth forth dispassion from his Passion, while from His holy side, it sheddeth forth a fount of incorruption, and from His tomb, eternal life.`,
              `How glorious the angel doth now appear to the women, wearing the luminous attributes of natural immaterial purity; for by his countenance he revealeth the radiance of the Resurrection as he crieth aloud, \"The Lord hath been raised!\"`,
            ],
            theotokion: `Glorious things have been spoken of thee in generation after generation, O Virgin Theotokos, who, while remaining pure, didst contain within thy womb God the Word. Wherefore, after God, we all honor thee as our protection.`,
          },
          3: {
            irmos: `O Christ fortify me on the rock of Thy commandments, | Thou Who in the beginning didst establish the heavens with understanding | and didst establish the earth upon the waters, | for there is none holy save Thee, O only Lover of mankind.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The salvific Passion of Thy flesh, O Christ, hath justified Adam, who had been condemned by the taste of sin; for Thou, who alone art without sin, hast revealed that Thou didst remain uncondemned by the trial of death.`,
              `O Jesus my God, Thou hast made the light of the Resurrection to shine forth upon those that sit in the darkness and shadow of death, and by Thy divinity Thou hast bound the strong one and scattered his spoils.`,
            ],
            theotokion: `Thou wast revealed to be higher than the cherubim and seraphim, O Theotokos, for thou alone hast received within thy womb, O undefiled one, God who is uncircumscribable; and so with hymns we believers ever call thee blessed.`,
          },
          4: {
            irmos: `Thou, O Lord, art my strength and Thou art my power, | Thou art my God and Thou art my joy, | Thou Who, while never leaving the bosom of Thy Father, | hast visited our poverty. | Therefore with the prophet Habbakuk I cry unto Thee, // \"Glory to Thy power, O Lover of mankind!\"`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `While I was hostile towards Thee, Thou didst love me exceedingly, for by a wondrous self-emptying, Thou didst descend to earth, O compassionate Savior, not spurning the indignity of the coarseness of my state, yet remaining in the height of Thine ineffable glory, whereby Thou hast glorified me who had hitherto existed in dishonor.`,
              `Who now doth not stand in awe, O Master, upon seeing death destroyed through Thy suffering, corruption taking flight through Thy Cross, and Hades emptied of its wealth through Thy death? These actions result from Thy lofty power, O Thou Crucified Lover of mankind.`,
            ],
            theotokion: `Thou art the boast of the faithful, O Mother unwedded, thou art the protection, thou art the refuge of Christians, their wall and safe harbor; for thou dost bring their supplications before thy Son, O all-immaculate one, and savest from dangers those who with faith and love acknowledge thee to be the pure Theotokos.`,
          },
          5: {
            irmos: `O Light never-waning, | why hast Thou turned Thy face from me | and why hath the alien darkness surrounded me, | wretched though I be? | But do Thou guide my steps I implore Thee | and turn me back towards the light of Thy commandments.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Savior, Thou didst endure being wrapped in a cloak as Thou wast mocked before Thy Passion, thus covering the unsightly nakedness of the first-formed Adam, and being nailed to the Cross naked, Thou didst strip from Thyself, O Christ, the tunic of death.`,
              `Rising out of the dust of death, O Christ, Thou hast refashioned my fallen nature and rendered it incorrupt, revealing it as once again a princely image, radiating with the light of incorruption.`,
            ],
            theotokion: `Having obtained a mother's freedom of speech before thy Son, O all-pure one, we beseech thee to neglect not thy maternal care for us, for thee alone do we Christians present to the Master as a compassionate means of atonement.`,
          },
          6: {
            irmos: `Cleanse me, O Savior, | for many are mine iniquities; | lead me up from the abyss of evils I pray Thee, | for unto Thee have I cried, | and Thou hast hearkened unto me, | O God of my salvation.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Through a tree the author of evil hath mightily overthrown me, but raised upon a Cross, O Christ, Thou didst more mightily cast him down, confounding him, whilst raising me the one who had fallen.`,
              `When Thou didst shine forth from the grave, then didst Thou take pity on Zion, and in Thy compassion didst renew it by Thy divine Blood, and now O Christ, Thou dost reign over it as King forever.`,
            ],
            theotokion: `May we be delivered from grievous faults by thine intercessions, O pure Birthgiver of God, and may we receive the divine radiance of the Son of God, who ineffably became incarnate from thee.`,
          },
          7: {
            irmos: `Once in Babylon the fire stood in awe | of God's condescension; | for which sake the youths in the furnace, | dancing with joyous steps as in a meadow, chanted: | O God of our fathers, blessed art Thou!`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Thy glorious self-emptying, constituting the divine wealth of Thy poverty, O Christ, amazed the angels when they saw Thee nailed to the Cross, saving those who with faith cry aloud; \"O God of our fathers, blessed art Thou!\"`,
              `Upon Thy divine descent the regions beneath the earth were filled with light, and the darkness which previously pursued those therein, was driven out. Therefore the prisoners from every age arose, crying aloud; \"O God of our fathers, blessed art Thou!\"`,
            ],
            trinitarion: `Speaking of God with Orthodox belief, we proclaim Thee O Lord of all, to be Father of the one only-begotten Son, and we know only one right Spirit Who proceedeth from Thee, consubstantial and co-eternal.`,
          },
          8: {
            irmos: `In his wrath the Chaldean tyrant made the furnace blaze, | with heat fanned sevenfold for the servants of God; | but when he perceived that they had been saved by a greater power | he cried aloud to the Creator and Redeemer; | \"Ye children bless, ye priests praise, | ye people, supremely exalt Him throughout all ages\".`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `In a manner befitting God, the supreme divine power of Jesus' divinity hath shone forth in our nature: for having tasted of death in the flesh upon the Cross for the sake of all, He hath abolished the strength of Hades. Without ceasing; Ye children bless, ye priests praise, ye people, supremely exalt Him throughout all ages.`,
              `The crucified One hath arisen, the boastful One hath fallen, the fallen and crushed have been set upright, corruption hath been banished and incorruption hath blossomed forth; for mortality hath been swallowed up by life; Ye children bless, ye priests praise, ye people, supremely exalt Him throughout all ages.`,
            ],
            trinitarion: `The Godhead of triune Light, the single radiance shining forth from one three-Hypostatic nature, the Begetter without beginning, the Word of the Father, one with Him in Nature and Kingship, and the consubstantial Spirit; Ye children bless, ye priests praise, ye people, supremely exalt Him throughout all ages.`,
          },
          9: {
            irmos: `Heaven was stricken with awe, | and the ends of the earth were filled with amazement, | for God hath appeared in the flesh, | and thy womb was rendered more spacious than the heavens. | Wherefore, the ranks of men and of angels | magnify thee as the Theotokos.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Begotten simply in Thy divine nature which is without beginning, Thou didst become compound in nature by assuming flesh, giving it essence in Thyself, O Word of God, and enduring the Passion as a man, Thou didst remain beyond suffering as God, wherefore we magnify Thee in two natures inseparable and uncommingled.`,
              `In accordance with Thy divine nature, O Most High, Thou didst address God as Thy Father when Thou didst descend to Thy servants and become man; and having risen from the dead Thou didst make Him who is by nature God and Master, Father by grace, of those born of earth, wherefore we magnify Thee together with Him.`,
            ],
            theotokion: `When thou didst give birth in the body in a manner surpassing nature to the good Word, Who came forth from the Father's own essence before all ages, as He alone is Good, thou O Virgin was revealed as the Mother of God. Him we now comprehend to be beyond the nature of flesh, even though He is clothed in a natural body.`,
          },
        },
      },

      cross_resurrection: {
        refrain: `Glory to Thy precious Cross and Resurrection O Lord.`,
        odes: {
          1: {
            troparia: [
              `The gates of the Hades of suffering have been destroyed, and its gatekeepers tremble in fear upon seeing in the lowest depths the One who on high supra-naturally surpasseth the nature of all things.`,
              `The ranks of angels stood amazed when they saw mankind's fallen nature, which had been held fast in the lowest depths, now seated upon the throne of the Father.`,
            ],
            theotokion: `O Mother without bridegroom, the ranks of angels and of mortal mankind sing thy praise without ceasing, for thou didst carry their Creator as an infant in thine arms.`,
          },
          3: {
            troparia: [
              `When of old I disobeyed Thy commandments, O Lord Who hath fashioned me, Thou didst reckon me a stranger; however having refashioned me and taught me obedience, Thou hast reconciled me to Thyself through the Crucifixion.`,
            ],
            theotokion: `Having made thine abode within a Virgin, Thou O Lord, didst appear in the flesh to mankind, as befitted Thee to be seen. And Thou didst reveal her to be truly the Mother of God and the succor of believers, O only Lover of mankind.`,
          },
          4: {
            troparia: [
              `The lawless and disobedient children nailed Thee to the Cross, O Lover of mankind, but in Thy compassion Thou hast, through it, saved those who glorify Thy sufferings.`,
              `By arising from the grave, Thou hast raised with Thee all the dead in Hades, and in Thy loving compassion Thou hast enlightened those who glorify Thy Resurrection.`,
            ],
            theotokion: `O Immaculate Mary, implore God whom thou didst bare to grant thy supplicants forgiveness of their offences.`,
          },
          5: {
            troparia: [
              `Guide us and grant us peace by the power of Thy Cross, O Christ, for by it we fall down before Thee, O Lover of mankind.`,
              `O our God, guide the lives of us who sing the praises of Thine arising, and grant us peace, O only Lover of mankind.`,
            ],
            theotokion: `O Mary, most pure and revered, who knew not wedlock, implore thy Son and our God to send down upon us the faithful, His great mercy.`,
          },
          6: {
            troparia: [
              `Thou didst stretch forth Thy hands upon the Cross, thus healing the hand of Adam the first-formed, which he so greedily stretched forth in Eden, and instead of the bitter tree, O Christ, Thou didst taste gall, and as All-powerful, Thou dost save those who glorify Thy sufferings.`,
              `The Redeemer tasted of the ancient sentence of death that He might abolish the palace of corruption, and when He had visited those in Hades, He saved, as one all-powerful, those who hymn the praises of His Resurrection.`,
            ],
            theotokion: `Cease not to intercede for us, O Most holy Virgin Theotokos, support of the faithful, for by our trust in thee we are made strong, therefore with love we glorify thee and Him who from thee ineffably assumed flesh.`,
          },
          7: {
            troparia: [
              `Thou hast wrought salvation in the midst of the inhabited world, O God, as the prophet said, for lifted up upon the Tree, Thou hast called back all those who cry out to Thee with faith; \"O God of our fathers, blessed art Thou!\"`,
              `Rising from the tomb as from sleep, O compassionate Lord, Thou hast raised the world with Thee, while creation, through the apostles' preaching of Thine arising, hath been persuaded to cry to Thee; \"Blessed art Thou O God of our fathers!\"`,
            ],
            theotokion: `Equal in action, and equal in power and co-eternal with His Begetter, the Word is fashioned in the womb of the Virgin by the good pleasure of the Father through the activity of the Spirit; \"Blessed art Thou O God of our fathers!\"`,
          },
          8: {
            troparia: [
              `Unto the Lord Who, stripped naked, hath stretched out His hands upon the Tree for me, unto Him who doth call me and warm me with his noble nakedness, do all ye works of the Lord bless, and supremely exalt throughout the ages.`,
              `The Lord Who hath raised me the fallen one, out of the lowest pits of Hades, and honored me with the high-throned glory of His Begetter, do all ye works of the Lord, bless, and supremely exalt throughout the ages.`,
            ],
            theotokion: `Thou didst appear as a daughter of fallen Adam, but also as the Mother of the God who hath renewed my nature. Therefore all we His works sing His praises as Lord and supremely exalt throughout the ages.`,
          },
          9: {
            troparia: [
              `We know that Thou art the Son of God by nature, conceived in the womb of the Theotokos, and that Thou didst become man for our sake, and, as we behold Thee hanging upon the Cross, we understand that Thou didst suffer in Thy human nature, yet as God Thou didst remain untouched by suffering.`,
              `Murky darkness hath been abolished, for from Hades Christ, the Sun of righteousness, hath dawned enlightening all the ends of the earth, radiant with the rays of his divinity, man from heaven, God on earth, whom we magnify in two natures.`,
            ],
            theotokion: `Bend Thy bow, prosper and reign, O Son of the Theotokos, subdue the people of Ishmael who war against us, and grant unto all Orthodox Christians the Cross as an invincible weapon, and trophy of peace.`,
          },
        },
      },

      theotokos: {
        refrain: `Most holy Theotokos save us.`,
        odes: {
          1: { troparia: [
            `Immaculate Mother of God, who hast given birth beyond nature to the incarnate and eternal Word, we sing thy praises.`,
            `The Virgin hath given birth unto Thee, O Christ, the cluster of grapes from whence drippeth the life-bearing sweetness of the world's salvation.`,
            `The race of Adam, having now been raised to blessedness beyond all telling, doth fittingly glorify thee, O Theotokos.`,
          ] },
          3: { troparia: [
            `Grant help unto me by thine intercessions, O all-pure one, by warding off the assaults of dreaded dangers.`,
            `When thou, O Theotokos, didst give birth to the Prince of life on behalf of all the world, Thou didst become the restoration of our foremother Eve.`,
            `By thy power grant me life, O all-pure one, who hath truly given birth to God in the flesh, the Hypostatic power of the Father.`,
          ] },
          4: { troparia: [
            `O Theotokos, thou art the un-ploughed land that brought forth the ear of corn which granteth life unto the world, do thou save those who sing thy praises.`,
            `All we who have been enlightened know thee, O all-pure one, to be the Mother of God, for thou, O ever-virgin, didst bear the Sun of righteousness.`,
            `Grant us the pardon of our offences, as thou alone art without sin, and grant peace unto thy world, O God, by the supplications of her who hath given birth to Thee.`,
          ] },
          5: { troparia: [
            `Calm the stormy tempest of my passions, O thou who hast given birth to God, my guide and my Lord.`,
            `The ranks of angels and the companies of mortals worship thine Offspring, O Immaculate Theotokos.`,
            `O Mary Theotokos thou who without bridegroom hast brought to naught the expectations of our enemies, bring joy to those who hymn thy praises.`,
          ] },
          6: { troparia: [
            `O Theotokos, we the faithful proclaim thee to be the temple and ark, the living Bridal Chamber of God, and the gate of heaven.`,
            `Mary, bride of God, thine Offspring, Who hath become the destroyer of wooden idols, is worshipped together with the Father and the Spirit.`,
            `The Word of God revealed thee to mortal mankind to be a heavenly ladder, for through thee He descended to us.`,
          ] },
          7: { troparia: [
            `For our salvation Thou didst appear incarnate from a virginal womb, and knowing Thy Mother to be the one who gave birth to God, we cry with thanksgiving; \"Blessed art Thou O God of our fathers!\"`,
            `O Virgin, thou art the most blessed rod from Jesse's root, blossoming with a salvific fruit for those who with faith cry to thy Son; \"Blessed art Thou O God of our fathers!\"`,
            `O Hypostatic Wisdom of the Most High, through the Theotokos fill with wisdom and divine power all those who sing to Thee in faith; \"Blessed art Thou O God of our fathers!\"`,
          ] },
          8: { troparia: [
            `Do thou quench the seductive and fiery darts of those who are our enemies, that we may hymn thee, O pure maiden, throughout the ages.`,
            `In a manner surpassing nature, O Virgin, thou hast given birth to God the Word, the Creator and Savior; therefore we hymn thee throughout the ages.`,
            `The unapproachable Light, Who made His abode within thee, O Virgin, hath shown thee to be a radiant golden lamp throughout the ages.`,
          ] },
          9: { troparia: [
            `We are filled with joy and gladness at the thought of thee, overflowing with healing for those who approach thee and devoutly proclaim thee to be the Mother of God.`,
            `With psalms we sing thy praises, O thou who art Full of grace, and never silent, we ceaselessly offer thee our praises; for thou art a fount of rejoicing for all.`,
            `Fair is thy Fruit, O Theotokos, for those who partake of it, it is incorruption, and for those who magnify thee with faith, it is life.`,
          ] },
        },
      },
    },

    ikos: `When Thou didst plunder the dominions of Hades and raise the dead, O longsuffering One, Thou didst meet the women bearing myrrh, bringing them joy instead of sorrow; and to Thine apostles Thou hast revealed the symbols of Thy victory, O my Savior and giver of life, Thou hast enlightened creation, O Lover of mankind. Therefore the world rejoiceth at Thine arising from the dead, O greatly merciful One.`,

    praises: {
      stichera: [
        { verse: `To do among them the judgment that is written, | This glory shall be to all His saints.`,
          text:  `O Lord, though Thou didst stand before the judgment seat | being judged by Pilate, | yet Thou wast seated with the Father | and was not absent from Thy throne. | And risen from the dead Thou hast freed the world from slavery to the stranger, // as Thou art full of compassionate pity and love for mankind.` },
        { verse: `Praise ye God in His saints, | praise Him in the firmament of His power.`,
          text:  `O Lord, the Jews laid Thee as a corpse in a grave, | and soldiers guarded Thee as a sleeping king | sealing Thee with a seal as if a treasury of life; | but Thou didst arise // and grant incorruption to our souls.` },
        { verse: `Praise Him for His mighty acts, | praise Him according to the multitude of His greatness.`,
          text:  `O Lord, Thou hast given us Thy Cross as a weapon against the devil; | for he doth quake and tremble, unable to contemplate Thy power; | for Thou didst raise the dead and abolish death: // Wherefore we worship Thy burial and Thy rising.` },
        { verse: `Praise Him with the sound of trumpet, | praise Him with the psaltery and harp.`,
          text:  `Thine angel, O Lord, having proclaimed Thy Resurrection, | filled the guards with fear, | but he cried unto the women saying: \"Why seek ye the living among the dead? | Being God He is risen // granting life to the whole world.\"` },
        { verse: `Praise Him with timbrel and dance, | praise Him with strings and flute.`,
          text:  `Thou didst endure the Cross, | O Thou who art impassible in Thy divinity, | to free us from slavery to the enemy | and Thou didst accept burial for three days, | making us immortal, | and granting life unto us through Thy Resurrection, // O Christ God, Lover of mankind.` },
        { verse: `Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. | Let every breath praise the Lord.`,
          text:  `O Christ, I worship, I glorify, and I praise Thy Resurrection from the tomb, | through which Thou hast delivered us from the unbreakable bonds of Hades // and as God hast granted the world eternal life and great mercy.` },
        { verse: `Arise, O Lord my God, let Thy hands be lifted high; | forget not Thy paupers to the end.`,
          text:  `The lawless men, watching over Thy grave | which had received Life, sealed it; | but Thou, as the immortal and all-powerful God, // arose on the third day.` },
        { verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
          text:  `When Thou didst enter the gates of Hades, O Lord, | and didst shatter them, the prisoners therein cried aloud: | \"Who is this?, for He hath not been condemned to the lowest parts of the earth, | but hath torn down the prisons of death as if a tent, | we received Him as One mortal, and we tremble before Him as God.\" // O all-powerful Savior have mercy on us.` },
      ],
    },

    great_doxology_troparion: `Having risen from the tomb, and having burst the bonds of Hades, | Thou hast destroyed the sentence of death, O Lord, | delivering all from the snares of the enemy. | Manifesting Thyself to Thine apostles, Thou didst send them forth to preach; | and through them hast granted Thy peace to the world, // O Thou Who alone art greatly merciful.`,
  },

};
