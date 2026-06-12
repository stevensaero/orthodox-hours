// src/data/octoechos/tone7.js
// Tone 7 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone7/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[7].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[7] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 7
    sat: {
      lic: [
        `O Come, let us rejoice in the Lord who hath destroyed the dominion of death and enlightened the race of mankind, as we cry aloud with the bodiless powers: "Our Creator and Savior, glory be to Thee!"`,
        `Thou didst endure the Cross and burial for our sake, O Christ, but as God by Thy death Thou hast slain death; wherefore we worship Thy Resurrection on the third day. O Lord, glory be to Thee!`,
        `The apostles were struck with amazement when they saw the Creator's arising and they cried aloud the angelic hymn of praise: "This is the glory of the Church, this is the wealth of the kingdom. O Lord, who hath suffered for us, glory be to Thee!"`,
        `Though Thou wast seized by lawless men, O Christ, yet Thou art my God, and I am not ashamed; Thy back was scourged, but I do not deny Thee; Thou wast nailed to a Cross, but I do not hide from Thee. I make my boast in Thine arising; for Thy death is my life. All-powerful Lord who lovest mankind, glory be to Thee!`,
        `Fulfilling David's prophecy Christ revealed His majesty to His disciples in Zion, showing that He was praised and ever glorified with the Father and the Holy Spirit; at first without flesh as the Word, afterwards for our sake incarnate and put to death as a man, and risen with authority as the Lover of mankind.`,
        `By willingly descending into Hades O Christ, Thou didst despoil death, and by arising on the third day as God and Lord, Thou didst raise together with Thyself from the bonds and corruption of Hades, those who cried aloud: "Glory to Thine all-powerful Resurrection. O Lord, glory be to Thee!"`,
        `Thou wast laid in a tomb, O Lord, as One who sleepeth and Who hast arisen on the third day as One mighty in strength, raising with Thyself Adam from the corruption of death, as One All-powerful.`
      ],
      aposticha: [
        `Thou didst arise from the tomb, O Savior of the world, and with Thy flesh Thou hast raised mankind. O Lord, glory be to Thee!`,
        `Come, let us worship Him Who hath arisen from the dead and enlightened all things; for He hath delivered us from the tyranny of Hades through His Resurrection on the third day, granting us life and great mercy.`,
        `Having descended into Hades O Christ, Thou hast despoiled death, and by rising on the third day, Thou hast raised us also together with Thyself, wherefore we glorify Thine all-powerful arising. O Lord, glory be to Thee!`,
        `Fearful didst Thou appear, O Lord, as Thou lay in the tomb as One sleeping; and having arisen on the third day as All-powerful Thou hast raised Adam together with Thyself, who cried aloud: "Glory to Thy Resurrection, O only Lover of mankind."`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Thou hast been known to have become a mother in a manner surpassing nature O Theotokos, and hast remained a virgin in a manner beyond all telling and understanding; no tongue can expound the wonder of thy birthgiving. For while thy conceiving O pure one, was most glorious, the manner of thy birthgiving transcends comprehension; for where God so willeth, the order of nature is overthrown. Wherefore, we all, knowing thee to be the Mother of God, do earnestly entreat thee: Pray thou that our souls be saved!`
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

  // ── SUNDAY MATINS ──────────────────────────────────────────────────────────
  // STUB — to be encoded in Phase 3 from Drive: Octoechos/tone7/N-1.pdf
  // (Saturday Evening + Sunday Matins PDF for Tone 7)
  matins: {},

};
