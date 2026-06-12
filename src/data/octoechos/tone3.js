// src/data/octoechos/tone3.js
// Tone 3 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone3/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[3].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[3] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 3
    sat: {
      lic: [
        `By Thy Cross, O Christ our Savior, the dominion of death hath been abolished, the devil's deception hath been dispelled, while mankind, saved by faith, each evening offers hymns unto Thee.`,
        `By Thy Resurrection, O Lord, the universe hath been filled with light and paradise hath been opened again, while all creation, singing Thy praise, each evening offers hymns unto Thee.`,
        `I glorify the power of the Father and the Son, and I praise the authority of the Holy Spirit, undivided, uncreated Godhead, consubstantial Trinity, that reigneth from ages to ages.`,
        `We worship Thy precious Cross, O Christ, and we praise and glorify Thy Resurrection, for by Thy wounds we have all been healed.`,
        `We praise the Savior who took flesh from the Virgin; for he was crucified for us and arose on the third day, granting unto us His great mercy.`,
        `Descending down unto those in Hades, Christ proclaimed the good tidings, exclaiming, "Be of good cheer; for now I have conquered! I am the Resurrection; I shall raise you up, abolishing the gates of death."`,
        `We who stand unworthily in Thy most pure house chant an evening hymn, crying from the depths, "O Christ God, who hath enlightened the world by Thy Resurrection on the third day, deliver Thy people from the hand of Thine enemies, O Lover of mankind."`
      ],
      aposticha: [
        `By Thy Passion, O Christ, Thou didst darken the sun, and by the light of Thy Resurrection Thou hast made the whole universe radiant. We beseech Thee to accept our evening hymn, O Lover of mankind.`,
        `O Gracious Lord, Thy life-bearing rising hath enlightened the world, and reclaimed Thine own fashioned after Thine image, which had become corrupt. And so, delivered from the curse of Adam, we cry aloud, "O all-powerful Lord, glory be to Thee!"`,
        `Howbeit, as God Thou art unchangeable, yet by Thy suffering Thou hast undergone change in the flesh, and creation, unable to bear seeing Thee hanging upon a Cross, was shaken with fear, groaning as it sang the praise of Thy long-suffering; and having descended into Hades, Thou didst arise on the third day, granting to the world life and great mercy.`,
        `In order to ransom our race from death, O Christ, Thou didst suffer death; and arising on the third day from the dead Thou hast raised with Thyself those who acknowledged Thee as God, and Thou hast enlightened the world. O Lord, glory be to Thee!`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `How can we, O all-honored one, not marvel at thine Offspring? Who is both God and man. For without knowing a man, O all-immaculate one, without a father thou hast given birth to a Son in the flesh, who without a mother was begotten from the Father before all ages, yet in no way undergoing change, fusion or separation, but preserving fully the characteristics of both natures. Wherefore, O Sovereign Lady, and Virgin Mother, beseech Him to save the souls of those who with Orthodox faith confess thee to be the true Theotokos.`
    },
    sun_eve: {
      lic: [
        `O heavenly Father, accept me as Thou didst the repentant prodigal son, though I sin exceedingly and embitter Thee, the good Master Who art merciful by nature; and make me one of Thy hirelings.`,
        `I have passed the time of my life in slothfulness and have drawn nigh to the end, wretch that I am. I give no thought to the judgment which awaiteth me, nor to my falling away from God. But, having turned me back to Thee, O Savior, rescue me from them.`,
        `From Gehenna, from the gnashing of teeth, and every other eternal retribution do Thou deliver my lowly soul, O supremely good Lord; that with faith I may hymn the merciful God, Who art by nature the Lover of mankind.`
      ],
      aposticha: [
        `Our evening hymnody do we bring to Thee, O Christ, with incense and spiritual odes, Have mercy and save our souls.`,
        `Save me, O Lord my God, in so far as Thou art the salvation of all. For the storm of the passions disquieteneth me, and the yoke of my transgressions weigheth heavily upon me. Stretch out Thy helping hand and lead me up to the light of compunction, for Thou alone art compassionate and the Lover of mankind.`,
        `Great is the power of Thy Cross, O Lord! For though it was planted in one place, it worketh throughout the whole world, making apostles of fishermen and martyrs of the heathen, that they might pray for our souls.`
      ],
      aposticha_glory: `O Lady, intercessor for all who pray to thee: In thee we find boldness, of thee do we boast, and in thee have we placed all our hope. Entreat Him Who was born of thee on behalf of thine unprofitable servants.`
    },
    mon: {
      lic: [
        `Perceiving in me a slothfulness toward profitable works, the multifarious formed serpent transforms itself, luring me towards ever more bitter evils. By displaying for me the sweetness of sin, through his own bitter activity which is opposed to the commandments of God, he taketh advantage of my wicked character, O Christ, and seduceth me to accept evils as good.`,
        `Having eagerly trodden the whole path of iniquity and sin, and utterly departed from that which is straight, I have now drawn nigh to the gates of death; and, thereby trapped, I cry aloud: O my supremely good Jesus, Thou Path of our life, turn me to the broad expanse of true repentance; save and grant me correction; and before my death, grant me divine forgiveness!`,
        `I have been slain by divers sins, by multitudes of transgressions and great misdeeds; and I lie dead, truly helpless. Only my hope in Thy loving-kindness remaineth alive, O Christ, Who dost grant both breath and life unto the dead and ever slayeth the passions which kill us. Wherefore, going before me, rescue me from everlasting death.`
      ],
      aposticha: [
        `Our evening hymn do we bring unto Thee, O Christ, with incense and spiritual odes, Have mercy on us and save our souls.`,
        `Save me, O Lord my God, insofar as Thou art the salvation of all. For the storm of the passions disquieteneth me, and the yoke of my transgressions weigheth heavily upon me. Stretch out Thy helping hand and lead me up to the light of compunction, for Thou alone art compassionate and the Lover of mankind.`,
        `Great is the power of Thy martyrs, O Christ; for while lying in their graves they drive evil spirits away; and, having struggled for piety with their faith in the Trinity, they abolished the authority of the enemy.`
      ],
      aposticha_glory: `O blessed Mary, divinely joyous maiden, cloud of the never-waning Light: Shine the light of repentance upon me who am mindlessly stuck fast in the darkness of sin; and by thy supplications deliver me from the fire of Gehenna and the unremitting darkness, O most pure Virgin, and show me to share in the never-setting day, for I flee beneath thy protection.`
    },
    tue: {
      lic: [
        `Creation was transformed by Thy crucifixion, O Word: the sun withdrew its rays in fear and the veil of the temple was rent in twain; and every one of the faithful is saved. Wherefore, we glorify Thine immeasurably abundant noetic riches.`,
        `God the Master, Who in His compassion assumed our flesh, having been well-pleased to be nailed to the Tree, and lifted up thereon bodily, hath thereby, in the tender compassion of His mercy, raised us up who were cast down.`,
        `The world was renewed by the drops of divinely shed blood and water which flowed from Thy side, O Lord; for Thou dost wash away all sins with water, and as Thou art compassionate, dost grant us to partake of forgiveness by Thy blood.`
      ],
      aposticha: [
        `I bow down, O Christ, before Thy precious Cross: the guardian of the world, the salvation of us sinners, the great purification and boast of the whole world.`,
        `The tree of disobedience put forth death for the world; but the Tree of the Cross hath put forth life and incorruption. Wherefore, we worship the crucified Lord, crying: Let the light of Thy countenance be signed upon us!`,
        `The prophets, the apostles of Christ and the martyrs enlightened and taught the erring nations to hymn the consubstantial Trinity, and made the children of mankind companions of the angels.`
      ],
      aposticha_glory: `When Thy Mother, the unblemished Ewe-lamb who gave birth to Thee, saw Thee lifted up upon the Cross, O my Christ, she lamented and cried out, weeping: "Show me not to be childless, whom Thou didst preserve pure even after giving birth!"`
    },
    wed: {
      lic: [
        `Through the supplications of Thine honored and divine apostles, O only Merciful and Compassionate Lover of mankind, grant Thy humility to Thy servants, and save from misfortunes those who hymn and worship Thee with faith.`,
        `When with the Judge of all ye shall sit on twelve thrones to judge all creation, show me not to be condemned, but deliver me from darkness and all affliction, O divine apostles, my benefactors.`,
        `As ye were eyewitnesses to God, deliver me from the arrows of the ungodly one, foiling his machinations; and bedew me with the dew of the Spirit, I pray you, O divine apostles, my wise benefactors.`
      ],
      aposticha: [
        `Your sound went forth into all the earth, O holy apostles, destroying the deception of the idols, and preaching the knowledge of God. Behold, your struggle is good, O blessed ones; wherefore, we hymn and glorify your memory.`,
        `As branches of the life-bearing Vine, O glorious apostles, ye brought yourselves to God as the fruit of piety; wherefore, as ye have boldness before Him, ask that He grant peace and great mercy to our souls.`,
        `Rendered steadfast by faith, strengthened by hope, and spiritually united by the love of Thy Cross, O Lord, Thy martyrs abolished the tyranny of the enemy; and having received crowns, with the incorporeal ones they pray for our souls.`
      ],
      aposticha_glory: `O maiden, I have sinned exceedingly, do thou rescue me from the flame of want by thy great supplications, and set me aright O pure one by thine entreaties, and guide me to the paths of salvation by thy maternal supplications.`
    },
    thu: {
      lic: [
        `O Lord, Who in Thy divine nature dost transcend suffering, but endured suffering in Thy human nature. Thou wast nailed to the Cross and pierced in the side by a spear, pouring forth upon me a pair of rivers, from whence flow ineffable mysteries.`,
        `With mockery Thou wast wounded by the plaited crown of thorns, O King and Savior of all, tearing apart the proscription of thorny sin; And having taken the reed in Thy hands, Thou hast recorded in the book of heaven all of us who believe in Thee.`,
        `The undeserved envy of the Jews who crucified Thee did not cease even when Thou wast dead, O innocent Christ; but the wicked ones slandered Thee as a liar and asked Pilate to guard Thy tomb. O what incurable wrath!`
      ],
      aposticha: [
        `I bow down, O Christ, before Thy precious Cross: the guardian of the world, the salvation of us sinners, the great purification and boast of the whole world.`,
        `Lifting up his arms in the form of the Cross on the mountain, Moses vanquished Amalek; and Thou, O Savior, stretched out upon the precious Cross, embraced me, saving me from slavery to the enemy, and didst give it to me as the sign of life, enabling me to evade the arrows of mine adversaries. Wherefore, O Word, I bow down before Thy precious Cross.`,
        `Great is the power of Thy Cross, O Lord! For though it was planted in one place, it worketh throughout the whole world, making apostles of fishermen and martyrs of the heathen, that they might pray for our souls.`
      ],
      aposticha_glory: `The all-immaculate one, beholding Thee lifted up upon the Tree, cried out, weeping maternally: "O my supremely good Christ, my most beloved Son! How hath the iniquitous assembly lifted Thee up upon the Cross?"`
    },
    fri: {
      lic: [
        `Having endured wounds, fetters and divers tortures, suffering mightily, the valiant martyrs were brought to their divine inheritance which is truly devoid of pain, the heritage of their pangs.`,
        `O holy hierarchs of the Lord, who piously uttered divine discourse, and thereby set at naught all the arguments of the heretics, showing yourselves to be exceedingly sure paragons for all the faithful; wherefore ye are honored.`,
        `While in your material bodies, ye emulated the ranks of the immaterial and incorporeal beings, O God-bearing fathers, most gloriously exhibiting their manner of life; wherefore, ye dwell in their habitations.`,
        `Great is the power of Thy Cross, O Lord! For though it was planted in one place, it worketh throughout the whole world, making apostles of fishermen and martyrs of the heathen, that they might pray for our souls.`,
        `Great is the power of Thy martyrs, O Christ; for while lying in their graves they drive evil spirits away; and, having struggled for piety with their faith in the Trinity, they abolished the authority of the enemy.`,
        `The prophets, the apostles of Christ and the martyrs enlightened and taught the erring nations to hymn the consubstantial Trinity, and made the children of mankind companions of the angels.`
      ],
      lic_dogmatikon: `How can we, O all-honored one, not marvel at thine Offspring? Who is both God and man. For without knowing a man, O all-immaculate one, without a father thou hast given birth to a Son in the flesh, who without a mother was begotten from the Father before all ages, yet in no way undergoing change, fusion or separation, but preserving fully the characteristics of both natures. Wherefore, O Sovereign Lady, and Virgin Mother, beseech Him to save the souls of those who with Orthodox faith confess thee to be the true Theotokos.`,
      aposticha: [
        `Made steadfast by faith, strengthened by hope, and spiritually united by the love of Thy Cross, O Lord, Thy martyrs put an end to the tyranny of the enemy and have received crowns; and with the incorporeal ones they pray on behalf of our souls.`,
        `All things human, which endure not after death, are vain. Our wealth will not remain, our glory will not go with us upon the way: for when death cometh, all these things will fade away. Wherefore let us cry out to Christ the immortal King: Grant rest to our departed brethren, where all who rejoice have their abode with Thee.`,
        `O race of mankind, why are ye rebellious in vain? Short is the course on which we run. Life is but smoke, vapor, ashes and dust; No sooner doth it appear, than it quickly vanisheth. Wherefore let us cry unto Christ the immortal King: Grant rest to our departed brethren, where all who rejoice have their abode with Thee.`
      ],
      aposticha_glory: `O Theotokos, holy among women, thou Mother unwedded: entreat the King and God Whom thou didst bear, that He save us, insofar as He is the Lover of mankind.`
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
  // STUB — to be encoded in Phase 3 from Drive: Octoechos/tone3/N-1.pdf
  // (Saturday Evening + Sunday Matins PDF for Tone 3)
  matins: {},

};
