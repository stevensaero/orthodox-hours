// src/data/octoechos/tone8.js
// Tone 8 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone8/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[8].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[8] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 8
    sat: {
      lic: [
        `We offer unto Thee, O Christ, an evening hymn and spiritual worship; because Thou wast well-pleased to have mercy on us through the Resurrection.`,
        `O Lord, cast us not away from Thy presence; but be well-pleased to have mercy on us through the Resurrection.`,
        `Rejoice holy Zion, Mother of the Churches, dwelling-place of God; for it was thee who first received forgiveness of sins through the Resurrection.`,
        `The Word, begotten of God the Father before all ages, hath in the last times become incarnate of her who knew not wedlock, and willingly endured the crucifixion and death, and mankind, slain of old, hath thereby been saved through His own Resurrection.`,
        `We glorify Thy Resurrection from the dead, O Christ, through which Thou hast freed the race of Adam from the tyranny of Hades, and as God hast granted the world eternal life and great mercy.`,
        `Glory be to Thee, O Christ Savior, only-begotten Son of God, affixed by nails to the Cross and risen from the tomb on the third day.`,
        `We glorify Thee, O Lord, and we worship Thee, O all-powerful Savior, who willingly endured the Cross for our sake; cast us not away from Thy presence, but hearken unto us and save us through Thy Resurrection, O only Lover of mankind.`
      ],
      aposticha: [
        `O Christ, having descended from heaven, Thou didst ascend the Cross; O immortal Life, Thou didst descend into Hades; the true Light, unto those in darkness; the Resurrection unto all those who had fallen. Our illumination and our Savior, glory be to Thee.`,
        `Let us glorify Christ who hath risen from the dead: for having taken a body and a soul, He parted them one from another by the Passion. For His soul hath descended into Hades, which He despoiled, while the holy body of the Redeemer of our souls knew not corruption in the tomb.`,
        `O Christ, in psalms and hymns we glorify Thy Resurrection from the dead. For through it Thou hast freed us from the tyranny of Hades, and as God Thou hast granted us life eternal, and Thy great mercy.`,
        `Thou, O Master of all things, art the incomprehensible Creator of heaven and earth, by suffering the Cross Thou hast become for me the source of immortality. Submitting to burial and arising in glory, Thou hast raised Adam with Thyself by Thine all-powerful hand. Glory to Thine arising on the third day, through which Thou hast granted us eternal life and the forgiveness of sins, as Thou alone art lovingly compassionate.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `In His love for mankind, the King of heaven appeared on earth and dwelt among men; for He Who received flesh from the pure Virgin and cameth forth from her having received human nature, is the only Son of God, twofold in nature but not Hypostasis. Therefore, proclaiming Him to be truly perfect God and perfect man, we confess Christ our God. Him do thou beseech, O unwedded Mother, that our souls find mercy!`
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
  matins: {},

};
