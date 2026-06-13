// src/data/octoechos/tone7.js
// Tone 7 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone7/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[7].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers', 'matins'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[7] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 7
    sat: {
      lic: [
        `O Come, let us rejoice in the Lord | who hath destroyed the dominion of death | and enlightened the race of mankind, | as we cry aloud with the bodiless powers: // "Our Creator and Savior, glory be to Thee!"`,
        `Thou didst endure the Cross and burial | for our sake, O Christ, | but as God by Thy death Thou hast slain death; | wherefore we worship Thy Resurrection on the third day. // O Lord, glory be to Thee!`,
        `The apostles were struck with amazement when they saw the Creator's arising | and they cried aloud the angelic hymn of praise: | "This is the glory of the Church, this is the wealth of the kingdom. // O Lord, who hath suffered for us, glory be to Thee!"`,
        `Though Thou wast seized by lawless men, O Christ, | yet Thou art my God, and I am not ashamed; | Thy back was scourged, but I do not deny Thee; | Thou wast nailed to a Cross, but I do not hide from Thee. | I make my boast in Thine arising; | for Thy death is my life. // All-powerful Lord who lovest mankind, glory be to Thee!`,
        `Fulfilling David's prophecy Christ revealed His majesty | to His disciples in Zion, | showing that He was praised and ever glorified with the Father and the Holy Spirit; | at first without flesh as the Word, | afterwards for our sake incarnate and put to death as a man, | and risen with authority // as the Lover of mankind.`,
        `By willingly descending into Hades O Christ, | Thou didst despoil death, | and by arising on the third day as God and Lord, | Thou didst raise together with Thyself from the bonds and corruption of Hades, | those who cried aloud: "Glory to Thine all-powerful Resurrection. // O Lord, glory be to Thee!"`,
        `Thou wast laid in a tomb, O Lord, as One who sleepeth | and Who hast arisen on the third day as One mighty in strength, | raising with Thyself Adam from the corruption of death, // as One All-powerful.`
      ],
      aposticha: [
        `Thou didst arise from the tomb, O Savior of the world, | and with Thy flesh Thou hast raised mankind. // O Lord, glory be to Thee!`,
        `Come, let us worship Him Who hath arisen from the dead | and enlightened all things; | for He hath delivered us from the tyranny of Hades | through His Resurrection on the third day, | granting us life and great mercy.`,
        `Having descended into Hades O Christ, Thou hast despoiled death, | and by rising on the third day, Thou hast raised us also together with Thyself, | wherefore we glorify Thine all-powerful arising. // O Lord, glory be to Thee!`,
        `Fearful didst Thou appear, O Lord, as Thou lay in the tomb as One sleeping; | and having arisen on the third day as All-powerful | Thou hast raised Adam together with Thyself, who cried aloud: // "Glory to Thy Resurrection, O only Lover of mankind."`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Thou hast been known to have become a mother | in a manner surpassing nature O Theotokos, | and hast remained a virgin in a manner beyond all telling and understanding; | no tongue can expound the wonder of thy birthgiving. | For while thy conceiving O pure one, was most glorious, | the manner of thy birthgiving transcends comprehension; | for where God so willeth, the order of nature is overthrown. | Wherefore, we all, knowing thee to be the Mother of God, | do earnestly entreat thee: // Pray thou that our souls be saved!`
    },
    sun_eve: {
      lic: [
        `Lift up thine eyes, O my soul, and behold the dispensation and tender compassion of God: how having bowed down the heavens, He descended to the earth, that He might raise thee up from the wretched state of thy passions, and set thee upon the rock of faith. O the wonder of this awesome miracle! Glory to Thine abasement, O Lover of mankind!`,
        `Behold thine exceedingly iniquitous works, O my soul, and marvel that the earth still beareth thee, that it hath not been driven asunder, that the wild beasts do not devour thee, that the ever-shining Sun hath not ceased to shine upon thee. Arise, repent, and cry out to the Lord: I have sinned against Thee, I have sinned! Have mercy on me!`,
        `Trusting in thee, O omnipotent Lord, we beseech Thee, that we be delivered from all tribulations, sufferings and turmoil; that we may pass our life in peace; and, having lived in purity, may find Thee, our Master, merciful on the day of judgment.`
      ],
      aposticha: [
        `I have come, O Compassionate One, like the prodigal son. As one of Thy hirelings do Thou accept me who fall down before Thee, O God, and have mercy on me, O Thou Who lovest mankind.`,
        `Like the one who fell among thieves and was wounded, so have I fallen through many sins, and my soul hath been wounded. To whom shall I who am guilty flee? To Thee alone, the Physician of men's souls. O God, pour forth upon me Thy great mercy.`,
        `Glory to Thee, O Christ God, Thou boast of the apostles and joy of the martyrs, who preached the consubstantial Trinity!`
      ],
      aposticha_glory: `With the angel we cry out to thee, Rejoice! O Bride of God, calling thee the bridal-chamber and portal, the fiery throne and unquarried mountain, and bush unconsumed.`
    },
    mon: {
      lic: [
        `O most compassionate Master and God, by the judgments which Thou knowest grant that I may have the fear of Thee in my heart, that I may spurn the works of the evil one, love Thee with all my soul, and do Thy saving will; for Thou art our God, Who said: Ask, and ye shall receive.`,
        `I have become a mockery for the demons and contemptible for men, lamentation for the righteous and weeping for the angels, polluting the air, the earth and the waters; for I have defiled my body and sullied my soul and mind with countless evil acts, and have become an enemy to God. Woe is me, O Lord! I have sinned, I have sinned against Thee! Forgive me!`,
        `I pray Thee: Be Thou patient with me, who am devoid of fruits, O Master, and cut me not down like the barren tree with the axe of death, dispatching me to the fire; but be Thou entreated to make me fruitful, giving me time for repentance, in that Thou lovest mankind, that I may wash away my many sins, O Christ my Savior.`
      ],
      aposticha: [
        `I have come, O Compassionate One, like the prodigal son. As one of Thy hirelings do Thou accept me who fall down before Thee, O God, and have mercy on me, O Lover of mankind.`,
        `Like the one who fell among thieves and was wounded, so have I fallen through many sins, and my soul hath been wounded. To whom shall I who am guilty flee? If not to Thee alone, the Physician of our souls. O God, pour forth upon me Thy great mercy!`,
        `O holy martyrs, ye who have fought the good fight and received crowns: Entreat the Lord, that He have mercy upon our souls.`
      ],
      aposticha_glory: `Rejoice, O Sovereign Lady, thou cloud of the noetic and ineffable Sun! Rejoice, all-luminous lantern: Rejoice all-golden candle-stand. Through thee, O most holy one, hath Eve been delivered from the curse. But as thou dost possess boldness before thy Son and God Who is readily moved to compassion, fail not to entreat Him by thy maternal supplication, O most pure one.`
    },
    tue: {
      lic: [
        `Of old, a tree drove me from paradise, but now a tree hath restored me to paradise when Thou wast crucified, O Christ.`,
        `O awesome wonder! How can the Creator, standing before a created being, be condemned and crucified for the salvation of mankind?`,
        `O Cross of Christ, the amazement of the holy angels and the great wounding of the demons: Save thy servants!`
      ],
      aposticha: [
        `No longer are we forbidden the Tree of life, for we have Thy Cross as our hope. O Lord, glory be to Thee!`,
        `Suspended upon the Tree, O Immortal One, Thou didst break the snares of the devil. O Lord, glory be to Thee!`,
        `Caring naught for all the things of earth, O holy martyrs, and having manfully preached Christ at the tribunal, ye received from Him rewards for your torments; but as ye have boldness, beseech Him, as the almighty God, that He save the souls of us who flee to you, we pray.`
      ],
      aposticha_glory: `Once thou didst behold thy son upon the Tree, thy heart was pierced by a lance of sadness, O most-pure One.`
    },
    wed: {
      lic: [
        `Having tilled the whole earth with the plough of the knowledge of God, O glorious apostles, ye caused a multitude of the faithful to spring forth.`,
        `Set at naught the winter of my passions, O blessed apostles, and shine forth upon me the pure spring of peace.`,
        `As disciples of the Word ye brought the assemblies of the nations over from senselessness to the knowledge of God.`
      ],
      aposticha: [
        `O glorious apostles, pillars of the Church, preachers of the Truth, radiant beacons: With the fire of the Spirit ye consumed all delusion and illumined the race of mankind with faith. Wherefore, we beseech you: Entreat our Savior and God, that He grant peace to the world and save our souls.`,
        `O apostles of Christ, husbandmen of the Savior, bearing the Cross upon your shoulders as a plough, and having cleared the earth made hard by the delusion of idolatry, ye sowed the word of faith. And ye are fittingly honored, O holy apostles of Christ.`,
        `O all-praised martyrs, spiritual lambs, reason-endowed holocausts, acceptable sacrifices well-pleasing to God: the earth could not hide you, but heaven received you, and ye have become communicants with the angels. With them entreat our Savior and God, we pray you, that He grant peace to the world and save our souls.`
      ],
      aposticha_glory: `Let us hymn as the Mother of God the Word, her who alone was an all-pure virgin after giving birth, saying: Glory be to thee!`
    },
    thu: {
      lic: [
        `That Thou mightest make man a god, Thou didst become a man and wast crucified, O supremely good Christ. Glory be to Thy power!`,
        `When the assembly of the Jews condemned Thee to die on the Cross, O Jesus, the earth quaked and the sun hid its light.`,
        `The iniquitous assembly crowned Thee with thorns, O Immortal and holy King, Who cuttest off the thorns of delusion at the root.`
      ],
      aposticha: [
        `No longer are we forbidden the Tree of life, for we have Thy Cross as our hope. O Lord, glory be to Thee!`,
        `Suspended upon the Tree, O Immortal One, Thou didst break the snares of the devil. O Lord, glory be to Thee!`,
        `Glory be to Thee, O Christ God, Thou boast of the apostles and joy of the martyrs, who preached the consubstantial Trinity!`
      ],
      aposticha_glory: `When the all-immaculate one beheld Thee willingly nailed to the Tree, weeping, she hymned Thy dominion.`
    },
    fri: {
      lic: [
        `The martyrs dispelled the darkness of ungodliness, showing forth the light of divine knowledge unto all mankind.`,
        `With Orthodox teachings as with divine rays ye enlightened the Church of the Lord, O most wise pastors.`,
        `Ever dwelling in trackless wastes, ye broke the nets of the demons, O venerable fathers.`,
        `O Savior, when Thou comest to judge the whole world put me not to shame, for I have committed shameful acts.`,
        `Glory be to Thee, O Christ God, Thou boast of the apostles, joy of the martyrs; whose preaching was of the consubstantial Trinity.`,
        `O holy martyrs, ye who have fought the good fight and received your crowns, pray to the Lord, that our souls be saved.`
      ],
      lic_dogmatikon: `Thou hast been known to have become a mother in a manner surpassing nature O Theotokos, and hast remained a virgin in a manner beyond all telling and understanding; no tongue can expound the wonder of thy birthgiving. For while thy conceiving O pure one, was most glorious, the manner of thy birthgiving transcends comprehension; for where God so willeth, the order of nature is overthrown. Wherefore, we all, knowing thee to be the Mother of God, do earnestly entreat thee: Pray thou that our souls be saved!`,
      aposticha: [
        `Despising every earthly thing, O holy martyrs, and having bravely preached Christ at the tribunal, ye received your reward from Him for your torments. Since ye have boldness before God, we beseech you to pray to Him as one almighty, that He save the souls of us who flee unto you.`,
        `O all-praised martyrs, spiritual lambs, reason-endowed whole-burnt offerings and sacrifices acceptable and well-pleasing to God. Ye were not hidden by the earth, but heaven hath received you; and ye have become companions of the angels; we entreat you to pray with them unto our God and Savior, that He grant peace to the world, and save our souls.`,
        `O Thou Who in the beginning fashioned man in Thine image and in accordance with Thy likeness, in paradise Thou didst appoint him to rule over Thy creatures; but, led astray by the malice of the devil, he partook of the fruit, breaking Thy commandment. Wherefore, Thou didst condemn him to return to the earth from whence he had been taken, O Lord, and to beg for repose.`
      ],
      aposticha_glory: `O thou who alone didst receive the uncontainable Word of God, and hast given birth to Him incarnate: Pray that our souls be saved.`
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

  // ── SUNDAY MATINS ─────────────────────────────────────────────────────────
  //  Verified against 7-1.pdf (St. Sergius). Tone-7 shape (NOT ported):
  //   • Resurrection canon: irmos + 2 trop + theotokion on Odes I,III–VIII;
  //     Ode IX swaps the theotokion for a single TRINITARIAN (source refrain
  //     "We bless the Lord; Father, Son, and Holy Spirit") — as in Tones 2 & 6.
  //   • Cross-resurrection canon: 2 trop + theotokion on EVERY ode (incl. IX).
  //   • Theotokos canon (troparia-only): a uniform 3 troparia on every ode.
  //   • god-is-the-Lord troparion ← RESURRECTIONAL_TROPARIA[7]; kontakion ←
  //     SUNDAY_KONTAKIA[7] (index wording differs from source — same prayer,
  //     use existing entry); Hypakoë ← HYPAKOE[7]. Not re-encoded here.
  //   • GD troparion: odd-tone form (same text as Tone 5); source ** → //.
  //   • FLAG: the god-is-the-Lord theotokion (= Resurrection Theotokion) carries
  //     a DOUBLE ** in the source ("...child-bearing, ** ...remain a virgin **
  //     ...after birthgiving") → two // cadences in one string. Encoded as the
  //     source gives; flagged for choir-director review.
  matins: {
    god_is_the_lord_theotokion: `As thou art the treasury of our resurrection, | O all-hymned one, | lead up from the pit and abyss of transgression | those who place their trust in thee, | for thou who hast given birth to our Salvation | hast saved those who are subject to sin. | Thou wast a virgin before giving birth, | and a virgin during child-bearing, // and thou didst remain a virgin // even after birthgiving.`,

    sessional_kathisma2: {
      hymn_1: { text: `When Life was laying in the tomb | and a seal laid upon the stone, | the soldiers guarded Christ as a sleeping King | and the angels glorified Him as immortal God; | while the women cried aloud: // "The Lord is risen, granting the world great mercy."` },
      hymn_2: {
        verse: `Arise, O Lord my God, let Thy hands be lifted on high; | forget not Thy paupers to the end.`,
        text: `By Thy burial for three days Thou didst despoil death, | and by Thy life-bearing arising Thou didst raise corrupted mankind, O Christ Lord, // as the Lover of mankind. Glory be to Thee!`,
      },
      theotokion: `O Virgin Theotokos | unceasingly entreat Christ our God, | who wast crucified for us | and arose again destroying the dominion of death, // that He save our souls.`,
    },

    sessional_kathisma3: {
      hymn_1: { text: `While the grave was sealed, O Christ God, | Thou, the Life, didst shine forth from the tomb; | and while the doors were shut, Thou, the Resurrection of all, | didst appear unto Thy disciples, and through them renewed a right Spirit within us, // according to Thy great mercy.` },
      hymn_2: {
        verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
        text: `Bringing sweet spices with their tears, | the women ran to the tomb, | and while the soldiers guarded Thee, the King of all, | they spake one to another: | "Who will roll away the stone for us? | The angel of great Counsel hath risen, trampling down death." // O All-powerful Lord, glory be to Thee!`,
      },
      theotokion: `Rejoice Virgin Theotokos, full of grace, | haven and protection of the race of mankind, | for from Thee the Redeemer of the world hath taken flesh, | for thou alone art a Mother and Virgin, | ever blessed and exceedingly glorified; | intercede with Christ God // to grant peace unto all the world.`,
    },

    songs_of_ascent: [
      [
        `Having turned back the captivity of Zion from error, | quicken me also O Savior, // and deliver me from slavery to the passions.`,
        `He who soweth tribulations in the south with tears of fasting, | will reap with joy the sheaves of nourishment // of eternal life.`,
        `In the Holy Spirit is the source of divine treasures, | from Him cometh wisdom, intelligence, and fear; // and to Him belongeth praise, glory, honor and worship.`,
      ],
      [
        `Unless the Lord buildeth the house of the soul, | in vain do we labor; // for without Him no deed or word can be perfected.`,
        `Of the fruit of the womb the saints, | moved by the Spirit, // sprout forth the Father's teachings of filial adoption.`,
        `By the Holy Spirit all things have their being; | in the presence of all He is God, | the Sovereign of the universe, | Light unapproachable, // Life of all.`,
      ],
      [
        `Those who fear the Lord and find the ways of life, | now and always are blessed // with immortal glory.`,
        `As thou beholdest thine offspring like shoots around thy table, | rejoice, and be glad, bringing them to Christ // the Chief Shepherd of all.`,
        `In the Holy Spirit there be an abundance of grace, | riches of glory and a great depth of judgments; | for He is to be served | as identical in glory and honor // with the Father and the Son.`,
      ],
    ],

    matins_prokeimenon: {
      tone: 7,
      text: `Arise, O Lord my God, let Thy hand be lifted high; | forget not Thy paupers to the end.`,
      verse: `I will confess Thee, O Lord, with my whole heart; I will tell of all Thy wonders.`,
    },

    canons: {
      resurrection: {
        odes: {
          1: {
            irmos: `At thy command O Lord, | the nature of the waters that beforehand flowed freely was transformed | and became like the earth; | whereby Israel having traversed them dryshod | chanted unto Thee a hymn of victory.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The tyranny of death was judged through a tree, O Lord, when Thou wast condemned to an unjust death; and so the prince of darkness having no power over Thee was rightfully cast out.`,
              `Hades drew nigh to Thee and in vain strove to crush Thy body with its teeth, breaking its jaws upon Thee; wherefore, O Savior, putting aside the pangs of death, Thou didst arise on the third day.`,
            ],
            theotokion: `The sorrows of the foremother Eve have been done away with, for having escaped those sorrows, thou hast given birth without wedlock; and so knowing thee to be truly the Theotokos we all glorify thee.`,
          },
          3: {
            irmos: `O Lord and Savior, | Who in the beginning established the heavens | by Thine all-powerful Word, | and by the divine and all-accomplishing Spirit | hath granted them all their strength, | do Thou establish me on the unshakeable rock of Thy confession.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Ascending the Tree, O compassionate Savior, and willingly suffering pangs for our sake, Thou didst endure Thy wounds, O cause of peace and through them bring the faithful to salvation, O merciful One, whereby we all have been reconciled to Thy Begetter.`,
              `My soul having been wounded by the bite of the serpent, hath been cleansed of its wounds by Thee O Christ, Who hath revealed Thy light to me, who of old lay in darkness and corruption; for through the Cross Thou didst descend into Hades and hast raised me up together with Thyself.`,
            ],
            theotokion: `By the supplications of Thy Mother who knew not a man, bestow peace upon the world, O Savior; and grant victory over their adversaries to all Orthodox Christians, deeming them who glorify Thee, worthy of Thine ineffable glory.`,
          },
          4: {
            irmos: `Having never left the bosom of the Father, | Thou didst descend to earth O Christ God, | I have heard of the mystery of Thy dispensation, | and I have glorified Thee, | O only Lover of mankind.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The innocent Master, incarnate of the Virgin, having delivered His own back to the scourges of a fallen slave, and enduring maltreatment, hath thereby done away with the charges laid against me.`,
              `Standing before the judgment seat of lawless judges, He who as God fashioned mankind and justly judgeth the whole universe, is examined as a lawbreaker and struck by a hand of clay.`,
            ],
            theotokion: `As truly the Mother of God, implore thy Creator and Son to direct me, O all-immaculate one, to the saving haven of His glorious will.`,
          },
          5: {
            irmos: `Night is bereft of light | for those without faith, O Christ, | but for the faithful there is enlightenment | in the sweetness of Thy words; | wherefore, I rise early unto Thee | and hymn Thy divinity.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Thou art sold on behalf of Thy slaves, O Christ, and endurest blows, O Cause of freedom for those who sing to Thee. I rise to Thee at dawn and sing the praises of Thy divinity.`,
              `By Thy divine power, O Christ, through the infirmity of the flesh Thou hast overpowered the strong one and through Thy Resurrection declared me a victor over death, O Savior.`,
            ],
            theotokion: `In a manner befitting God, O all-hymned Mother, thou hast given birth to God who become incarnate from thee, since thou hast not known union in wedlock, the conception was by the Holy Spirit.`,
          },
          6: {
            irmos: `Sailing in the tempest of the cares of life, | together with the ship I have been submerged by sins, | and cast to the soul-corrupting beast, | wherefore like Jonah I cry to Thee, O Christ: | Lead me up from the deadly abyss.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The souls of the righteous, who were held in bondage and forsaken in Hades, remembered Thee and prayed for salvation from Thee, which Thou didst grant unto them through Thy Cross, O Christ, when in Thy compassion Thou didst descend into the nether regions of the earth.`,
              `The choir of apostles despaired of ever gazing again upon Thy living temple not made with hands, which had been destroyed by the Passion, but praying beyond hope they were granted to proclaim everywhere that Thou art risen.`,
            ],
            theotokion: `Who can explain the manner of thine ineffable child-bearing for our sake, O most immaculate Virgin, Bride of God? For God the Word, who is uncircumscribable, uniting with thee, became flesh from thee.`,
          },
          7: {
            irmos: `Of old the Children were shown to be | bedewed in the fiery furnace, | chanting and praising the one God saying, | "supremely exalted and exceedingly glorified is the God of our fathers".`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Adam having by his own will committed disobedience was slain by a tree, but by Christ's obedience he was renewed. Because for my sake the most glorious Son of God hath been crucified.`,
              `When Thou, O Christ, didst arise from the tomb, all creation sang Thy praises; for Thou hast blossomed forth with life; the resurrection of the dead unto those in Hades, and the most glorious light unto those lying in darkness.`,
            ],
            theotokion: `Rejoice!, O daughter of Adam, who hath fallen into corruption! Rejoice!, O only Bride of God! Rejoice!, for thou hast given birth to God the Word and through Him banished corruption! Entreat Him, O most pure Virgin that we all may be saved.`,
          },
          8: {
            irmos: `Unconsumed by fire, the bush on Sinai spake unto Moses, | slow of speech and stammering, | and revealed God unto him; | and zeal for God showed forth the three children who chanted hymns | to be unvanquished by the fire. | O all ye His works, praise ye the Lord | and supremely exalt Him throughout all ages.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The most-pure spiritual Lamb, slaughtered for the sake of the world, brought to an end offerings made in accordance with the law, and as God Who alone is without transgression, purified the world which ever crieth aloud, "All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages."`,
              `The Creator assumed our flesh, which was not incorruptible before the Passion, but after His Passion and His rising was rendered inaccessible to corruption, and thus reneweth mortals as they cry, "All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages."`,
            ],
            theotokion: `Thy total purity and lack of blemish, O Virgin, hath purified the inhabited world from all filth and pollution, and thou hast become, O most pure one, the means by which we have been reconciled with God. Wherefore, O Virgin, we bless and supremely exalt thee throughout all ages.`,
          },
          9: {
            irmos: `Conceiving without knowing corruption, | and lending thy flesh to the Word, | O Mother unwedded and Virgin Theotokos, | thou art the vessel of the uncircumscribable One, | and dwelling place of thy Creator, | thee do we magnify.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Cease your babblings, all ye who with errant minds put forward the notion that the Godhead endured the Passion, for the Lord of glory, crucified in the flesh, could not be crucified in His divine nature, wherefore we magnify Him as one Hypostasis in two natures.`,
              `All ye that do not believe the Resurrection of the flesh hasten now to the grave of Christ, and there learn that the flesh of the Giver of life was slain and arose again, in confirmation of the final resurrection, in which we have placed our hope.`,
            ],
            // Ode IX: trinitarian in place of the theotokion (source refrain
            // "We bless the Lord; Father, Son, and Holy Spirit").
            trinitarion: `As we honor not a Trinity of deities but of Hypostases, not a Unity of persons but of the Godhead, we cut off those who divide It, and confound those who dare to confuse the true understanding of the Trinity, Whom we magnify.`,
          },
        },
      },

      cross_resurrection: {
        refrain: `Glory to Thy precious Cross and Resurrection O Lord.`,
        odes: {
          1: {
            troparia: [
              `From His pierced side on the Cross the Savior hath poured forth two life-bearing fountains from Himself unto us. Let us sing unto Him, for He hath been glorified.`,
              `By dwelling in a tomb and arising on the third day Christ hath granted mortals a pledge of incorruption. Let us hymn Him, for He hath been glorified.`,
            ],
            theotokion: `Alone thou wast revealed a Virgin even after child-birth; for thou hast given birth to the Creator of the world in the flesh. Wherefore we all cry to thee, "Rejoice!"`,
          },
          3: {
            troparia: [
              `Thou didst endure sufferings on the Cross and thus opened paradise to the thief, as Benefactor and God; establish my mind to do Thy will, O only Lover of mankind.`,
              `Thou didst arise from the tomb on the third day making life dawn forth upon all the world, as the giver of life and as God; do Thou establish my mind to do Thy will, O only Lover of mankind.`,
            ],
            theotokion: `O Virgin-mother Mary, having conceived God without seed and delivered Eve from the curse, entreat God who became incarnate from Thee, to save thy flock.`,
          },
          4: {
            troparia: [
              `Not knowing sin, and becoming what Thou wast not, O Lord, by assuming the form of what was another's, Thou hast saved the world, for by luring the tyrant (to slay Thee) Thou hast thereby slain him.`,
              `Thou wast hung upon the Cross, O Lord, and, having done away with the sin of our forefather Adam, Thou hast filled our foremother Eve with joy; for Thou art come to save all of Thine anointed ones.`,
            ],
            theotokion: `Born from a virgin, Thou didst suffer death, but granted life to Adam, who by His own will hath been led astray, for death trembled at thy strength, seeing Thee saving those who had suffered corruption.`,
          },
          5: {
            troparia: [
              `When Thou wast lifted upon Calvary, and numbered with the malefactors, the lights of the firmament hid themselves, the earth trembled, and the splendor of the temple was rent in twain, thereby revealing the apostasy of the Jews.`,
              `With hymns we glorify Thee Who hath destroyed the entire dominion of the tyrant through the incomprehensible strength of Thy divinity and thus raised the dead by Thy Resurrection.`,
            ],
            theotokion: `O all-praised Theotokos, Mother of the King and God, by thine intercessions send down the pardon offences, to those who with faith and love ever glorify thee in hymns.`,
          },
          6: {
            troparia: [
              `Willingly lifted up upon the Cross, O Savior, Thou didst take prisoner the dominion of the enemy. For upon it, O loving Lord, Thou hast nailed the record of our sins.`,
              `Having risen from the dead with authority, O Savior, Thou hast raised up together with Thyself the race of mankind, granting us life and incorruption, O Lover of mankind.`,
            ],
            theotokion: `O Theotokos, cease not to entreat our God, to whom thou hast ineffably given birth, that those who hymn thee, O pure ever-Virgin, may be delivered from all dangers.`,
          },
          7: {
            troparia: [
              `On the Tree of the Cross Thou hast blunted the sting of sin, and by the lance in Thy side Thou hast abolished the record of Adam's transgressions; Blessed art Thou, O Lord, the God of our fathers.`,
              `Thou wast pierced in Thy side and with the sprinkling of Thy divine Blood Thou hast cleansed the earth which was polluted with the bloodshed of the folly of idolatry; Blessed art Thou, O Lord, the God of our fathers.`,
            ],
            theotokion: `O Birthgiver of God, thou hast dawned forth upon world the illumination that existed before the sun, Christ, Who hath delivered us from darkness and illumined with the knowledge of God, all who cry: "Blessed art thou, O Lord, the God of our fathers."`,
          },
          8: {
            troparia: [
              `Unto Him Who hath willingly endured the Passion and of His own will was nailed to a Cross, thereby abolishing the powers of Hades, hymn, O ye priests, and supremely exalt Him, O ye peoples, throughout all ages.`,
              `Unto Him Who hath abolished the dominion of death and arisen from the tomb in glory, saving mankind, hymn, O ye priests, and supremely exalt Him, O ye peoples, throughout all ages.`,
            ],
            theotokion: `Unto the Word, Who is alone compassionate and pre-eternal, and Who became incarnate in the latter times from the Virgin, abolishing the ancient curse, hymn, O ye priests, and supremely exalt Him, O ye peoples, throughout all ages.`,
          },
          9: {
            troparia: [
              `Light from light, the radiance of the Father's glory, illumining agelessly, Christ hath shone forth for the life of mortal mankind lying in gloom, dispelling the persecuting darkness, wherefore we the faithful unceasingly magnify Him.`,
              `Let those who contemplate the sufferings of Christ in the flesh, and the strength of the Godhead in Christ, as accomplished in one compound nature, be confounded; for Christ died as a man, but rose again as the Creator of the universe.`,
            ],
            theotokion: `"Besides Thee I know no other God," The holy Church crieth out to Thee O Word, "Who chose me as Thine own Bride from among the unbelieving nations." by the prayers of her who gave birth to Thee grant salvation to the faithful, for thou art compassionate and lovest mankind.`,
          },
        },
      },

      theotokos: {
        refrain: `Most holy Theotokos save us.`,
        odes: {
          1: { troparia: [
            `Thou who hast brought forth the depths of divine compassion, O Virgin, illumine my soul with thine effulgent radiance, that I may worthily hymn the depths of thy wonders.`,
            `Seeing that we have been wounded by the arrow of sin, the Word, our Benefactor, hath taken pity on us. Wherefore the most divine One, ineffably united Himself to flesh from thee, O all-pure one.`,
            `The corrupt and mortal nature of mankind hath become subject to death, O Sovereign Lady. But having conceived Life, O most pure one, thou hast led it back from corruption to life.`,
          ] },
          3: { troparia: [
            `The serpent crawling out of Eden hath enticed me with the desire to be Godlike and hurled me down to the earth, but He who is by nature compassionate and merciful, hath taken pity upon me, and having dwelt in thy womb, became like me O Virgin-Mother, making me divine.`,
            `Blessed is the Fruit of thy womb, O Virgin Theotokos, the joy of all; for thou hast brought forth unto all the world the Wellspring of joy and gladness, Who scattereth the sorrow of sin, O Bride of God.`,
            `O Virgin Birthgiver of God, thou hast given birth to Peace for our sake, calming the ancient enmity between mankind and God his Father, and through faith granting us to know grace.`,
          ] },
          4: { troparia: [
            `Thou hast appeared before God to be above all creation, wholly chosen and fair, by the splendor of the light that doth pour forth from thee, wherefore we beseech thee to enlighten those who sing thy praises.`,
            `From thy pure blood, O pure Virgin Mother, thou hast given birth to God in the flesh, Who hath redeemed us from our many sins, wherefore with love we glorify thee, hymning thy praises.`,
            `Rational nature, now initiated into the ineffable mystery of thy child-bearing, ministers as priest to the One who dawned from thee, O all-praised one.`,
          ] },
          5: { troparia: [
            `When Jacob saw the ladder reaching up to the heavens he fathomed an image of thy virginity; for through thee, O all-pure Sovereign Lady, God hath been united with mankind.`,
            `Having found eternal redemption through thee, O Virgin, we cry unto thee with fervor, "Rejoice, O Bride of God!" And rejoicing in thy light we praise thee in song, O all-hymned one.`,
            `The Bridegroom found thee, O Virgin, as an only lily among the thorns, effulgent with the brightness of purity and the light of virginity, O all-immaculate one, wherefore He hath made thee His Bride.`,
          ] },
          6: { troparia: [
            `Prototypes in the law and the sayings of the prophets clearly foretold that thou, O most pure Virgin, would give birth to the Benefactor of all creation, Who hath in many and varied ways bestowed wondrous benefits upon those who with faith hymn thee.`,
            `Adam, the first-formed, was of old exiled from the delights of paradise by the wiles of the man-slayer, but thou, O Virgin who knew not wedlock, hast led him back again, by giving birth to Him who hath delivered us from transgression.`,
            `He who by His divine will and creative power hath brought the universe into being from nothing hath come forth from thy womb, O most pure Virgin, shining with the effulgence of divine lightning upon all those in the shadow of death.`,
          ] },
          7: { troparia: [
            `Thou O Virgin, doth possess like an adornment of many colors wrought in gold, love for thy Creator and Lord; the supremely exalted and exceedingly glorified God of our fathers.`,
            `When Isaiah of old received the coal and was cleansed, He saw in it the symbol of the birth of thine Offspring, O maiden, the supremely exalted and exceedingly glorified God of our fathers.`,
            `When the divine prophets of old saw the symbols of thy divine child-bearing they raised their voices in harmony O Virgin, praising thee and crying: "O supremely exalted and exceedingly glorified God of our fathers."`,
          ] },
          8: { troparia: [
            `By the splendor of thy child-bearing, O Birthgiver of God, thou hast wondrously enlightened all the inhabited world. For in thine arms thou didst carry the true God, Who hath rendered radiant the faithful who ever cry: "All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages."`,
            `O pure Virgin, we devoutly sing the praises of thy womb, which ineffably contained our God in the flesh, Who hath bestowed the illumination of the knowledge of God upon all the faithful who ever cry: "All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages."`,
            `With the brilliance of thy light, O pure Theotokos, thou who hast borne the light, rendered resplendent those who sing thy praises; for thou hast appeared as a tabernacle of light, enlightening those who ever cry: "All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages."`,
          ] },
          9: { troparia: [
            `Ever-virgin maiden, for our sake thou wast revealed to be the cause of eternal joy and gladness, having carried in thy womb the Redeemer, who delivereth those who in truth and by the inspiration of the divine Spirit honor Him as God.`,
            `David, Thy forefather, in a psalm names Thee the ark of divine holiness, O most pure one, who didst contain in a manner surpassing nature, God seated in the bosom of the Father, Whom without ceasing we the faithful magnify.`,
            `Thou art truly higher than all creation, O maiden; since for our sake thou hast given birth in the flesh to the Creator of all things; therefore, as Mother of the only Master, thou hast majestically brought about victory for us against all adversaries.`,
          ] },
        },
      },
    },

    ikos: `All that is beneath the earth, Hades and death, today doth tremble before one of the Trinity; the earth quaked, the gate-keepers of Hades, upon seeing Thee, trembled; all creation, rejoicing with the prophets, doth sing to Thee a song of victory, O our Redeemer and God. Thou hast destroyed the power of death, Let us therefore shout with joy and cry aloud unto Adam and his descendants, "Come out, O ye faithful, to the adoration of the Resurrection!"`,

    // Praises — 8 Resurrection stichera (last 4 by Anatolius). Glory = Eothinon
    // Gospel sticheron (tone-independent); Both-now = fixed "Thou art most blessed"
    // theotokion (Tone II) — neither stored here, per Tones 1–6.
    praises: {
      stichera: [
        { verse: `To do among them the judgment that is written, | This glory shall be to all His saints.`,
          text:  `Christ is risen from the dead, loosing the bonds of death; | O earth! proclaim the good tidings of great joy; // and ye heavens praise the glory of God.` },
        { verse: `Praise ye God in His saints, | praise Him in the firmament of His power.`,
          text:  `Having seen the Resurrection of Christ, | let us worship the holy Lord Jesus, // the only sinless One.` },
        { verse: `Praise Him for His mighty acts, | praise Him according to the multitude of His greatness.`,
          text:  `We cease not to worship the Holy Resurrection of Christ, | for He hath saved us from our iniquities, // Holy is the Lord Jesus who hath shown us the Resurrection.` },
        { verse: `Praise Him with the sound of trumpet, | praise Him with the psaltery and harp.`,
          text:  `What shall we render unto the Lord for all that He hath rendered unto us? | For our sake God dwelt among us; | for our corrupted nature the Word became flesh and dwelt within us; | unto the ungrateful He is the Benefactor; | unto prisoners He is the Liberator; | unto those in darkness He is the Sun of justice; | the path unto the Cross; | the Light unto Hades; Life unto death; | Resurrection for the fallen: | to Him we cry aloud: // "Our God, glory be to Thee!"` },
        { verse: `Praise Him with timbrel and dance, | praise Him with strings and flute.`,
          text:  `By Thy mighty power, O Lord, | Thou hast destroyed the gates of Hades and abolished the dominion of death; | raising with Thyself the dead who slept therein from eternity in darkness, | by Thy divine and glorious Resurrection, // as King of the universe and as God All-powerful.` },
        { verse: `Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. | Let every breath praise the Lord.`,
          text:  `Come, let us rejoice in the Lord | and be glad in His Resurrection; | for He hath raised the dead with Himself | from the indestructible bonds of Hades, // and as God hath bestowed upon the world eternal life and great mercy.` },
        { verse: `Arise, O Lord my God, let Thy hands be lifted high; | forget not Thy paupers to the end.`,
          text:  `A radiant angel sat on the stone of the grave that held Life, | and announced the good tidings to the myrrh-bearing women saying: | "The Lord is risen, as He foretold to you; | announce to His disciples that He goeth before you into Galilee; // while to the world He granteth eternal life and great mercy."` },
        { verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
          text:  `O ye exceedingly wicked Jews, why did you reject the Cornerstone? | This is the stone which God hath placed in Zion, | God Who in the wilderness made water spring forth from the rock, | and for us poured forth immortality from His side; | this is the stone which was hewn from the virginal mountain, by the will of the Son of man, | who cometh again on the clouds of heaven | before the Ancient of days, as Daniel hath said, // and His kingdom is everlasting.` },
      ],
    },

    great_doxology_troparion: `Today is salvation come unto the world; | let us sing praises to Him that arose from the tomb, | and is the Author of our life. | For, having destroyed death by death, // He hath given us the victory and great mercy.`,
  },

};
