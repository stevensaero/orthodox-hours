// src/data/octoechos/tone4.js
// Tone 4 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone4/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[4].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers', 'matins'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[4] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 4
    sat: {
      lic: [
        `Unceasingly worshiping Thy life-giving Cross, O Christ God, | we glorify Thy Resurrection on the third day, | for through it, O all-powerful One, | Thou hast renewed corrupted human nature | and shown us the way to heaven, // since Thou alone art good and the Lover of mankind.`,
        `By being willingly nailed to the tree of the Cross, O Savior, | Thou hast abolished the penalty of the tree of disobedience; | and by descending into Hades, O all-powerful One, | as God Thou hast torn asunder the bonds of death. | Wherefore we worship Thy Resurrection from the dead, and we cry out with joy: // O all-powerful Lord, glory be to Thee!`,
        `Thou hast shattered the gates of Hades, O Lord, | and by Thy death Thou hast destroyed the dominion of death; | delivering mankind from corruption, | granting the world life, incorruption, // and great mercy.`,
        `Come O ye peoples, let us hymn the Savior's rising on the third day, | whereby we were redeemed from the unbreakable bonds of Hades | obtaining incorruption and life, as we cry aloud: | "Thou, who wast crucified and buried and rose again, // save us by Thy Resurrection, O only Lover of mankind."`,
        `Angels and mortals hymn Thine arising on the third day, O Savior, | through which the ends of the inhabited world were filled with light, | and we were all redeemed from the slavery of the enemy, as we cry aloud: | "O life-giving, all-powerful Savior, // save us by Thy Resurrection, O only Lover of mankind."`,
        `Thou hath shattered the gates of brass and smashed their bars, O Christ God, | raising the fallen race of mankind; | wherefore with one accord we cry unto Thee: | "O Lord risen from the dead, // glory be to Thee!"`,
        `O Lord, begotten from Thy Father without time and eternal; | Thine incarnation from a virgin is inexpressible for man and beyond telling; | and Thy descent into Hades is fearful for the devil and his angels; | for having trampled upon death Thou didst arise on the third day, // granting mankind incorruption and great mercy.`
      ],
      aposticha: [
        `O Lord, by ascending the Cross | Thou hast wiped out our ancestral curse, | and by descending into Hades | Thou hast set free those enchained therein from all ages, | granting incorruption to mankind; | wherefore with hymns we glorify // Thy life-giving and saving arising.`,
        `Hung upon a Tree, O only mighty One, | Thou didst shake the whole of creation; | laid in a tomb Thou hast raised those who dwelt in the tombs, | granting the race of mankind incorruption and life; | wherefore with hymns we glorify // Thine arising on the third day.`,
        `A lawless people, O Christ, delivered Thee to Pilate, | and condemned Thee to be crucified, | showing themselves to be ungracious to their benefactor, | but voluntarily enduring burial, | by Thine own power Thou didst arise on the third day as God, // granting us life everlasting and great mercy.`,
        `Reaching Thy tomb in tears the women sought Thee; | and when they could not find Thee they cried aloud with grief and lamentation: | Woe unto us, our Savior, the King of all, how wast Thou stolen? | What place doth hold Thy life-bearing body? | But an angel answered them saying: | "Weep not, but go, and proclaim that the Lord hath arisen, // granting us joy, for He alone is compassionate."`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Prophet David, the ancestor of God, | spoke of thee in psalmody unto Him Who hath accomplished great things in thee. | For God was well pleased without father to become a man from thee, | the Queen who standeth at His right hand, | and He - the source of life - showed thee to be His mother, | that He might renew His own image, corrupted by the passions. | Having found the lost sheep wandering on the mountain | He hath laid it upon His shoulders, | that He may bring it to his Father; | and in accordance with His own will | unite it to the heavenly powers | and thus, O Theotokos, save the world, // Christ, Who is richly and abundantly merciful.`
    },
    sun_eve: {
      lic: [
        `I have sinned against Thee, O Lover of mankind, and not according to my human nature, for which I might ask forgiveness, but inhumanly, past my nature, beyond forgiveness. O my Savior Who didst become a man, transcending the laws of nature and comprehension by the human mind, since Thou hast a love for mankind surpassing understanding, have mercy on me that I may turn back to Thee.`,
        `Thou didst appoint repentance for those who sin, and not for the righteous, O Christ. I have as examples the thief and the prodigal, Manasseh and the harlot, the persecutor Paul, the publican and Peter who fell away, yet I am brought sorely to despair. Knowing Thy supremely good love for mankind, O Savior, I turn to Thee and weep, filled with the good hope that Thou wilt accept me.`,
        `Unto me who am now sunk in the passions of the body and am far removed from Thee, O King and God of all, grant compunction, the removal of evils and perfect amendment. In Thy great goodness, O omnipotent Jesus, Savior of our souls, save me, a prodigal, who otherwise have no hope.`
      ],
      aposticha: [
        `I desired to erase the record of my transgressions with tears, and to please Thee well by repentance for the rest of my life; but the enemy deceiveth me and wageth war on my soul. Before I utterly perish, O Lord, save me!`,
        `Who is tempest-tossed, yet fleeth to Thy haven, O Lord, and is not saved? Who is sick and, falling down before Thy healing power, is not cured? O Lord, Creator of all and Physician of the infirm: Before I utterly perish, save me!`,
        `O Christ God, Who art glorified in the memorials of Thy saints, be Thou entreated by them, and send down upon us great mercy.`
      ],
      aposticha_glory: `Rejoice, O cloud of Light! Rejoice, radiant candlestick! Rejoice, jar wherein the Manna was kept! Rejoice, staff of Aaron! Rejoice, bush un-burnt! Rejoice, bridal-chamber! Rejoice, thou throne! Rejoice, holy mountain! Rejoice, Mother of God and Virgin, thou unwedded Bride!`
    },
    mon: {
      lic: [
        `Emulating the Canaanite woman, O my soul, touch Christ from behind, and cry out repeatedly: Have mercy on me, O Master! My body, like her daughter, is possessed by evil spirits, and it flaileth about. Quench the burning of my flesh, I pray; and, causing the disorderly seizures to cease, mortify it by the fear of Thee, by the prayers of her who conceived and gave birth to Thee, and of all the saints, O greatly merciful Benefactor.`,
        `Thou didst once send Jonah to the sinful Ninevites to preach to them, O Christ, and, repenting, they transformed their anger into kindliness, having been delivered from pernicious wrath. Wherefore, send also Thy mighty help unto me, who am unworthy, O Lover of mankind, that I may turn away from my countless offenses and be guided to the path of repentance; for I weep, groaning bitterly, that I may be delivered by Thy mercy from my many transgressions.`,
        `O Compassionate One, Who camest into the world to save sinful men and call them to repentance: In that Thou art full of tender compassion, have pity on me who have angered Thee more than all others, save me in Thy goodness, guide me to the way of repentance, and grant me thought of compunction, in Thy goodness making my heart steadfastly humble, simple, meek and guileless, O my Savior, in that Thou art full of loving-kindness.`
      ],
      aposticha: [
        `I wish to wash away the record of my sins with tears, O Lord, and please Thee the rest of my life through repentance; but the enemy deceiveth me and fights against my soul. Before the end and I utterly perish, save me, O Lord.`,
        `Who, among the tempest-tossed, having taking refuge in Thy harbor, will not be saved O Lord? Or who, that aileth and falling down in Thine infirmary, will not be healed? O Maker of all that is, and Physician of the ailing, before the end, may I not utterly perish, save me, O Lord.`,
        `O Lover of mankind, as One Who hast accepted the patience of the holy martyrs, by their prayers grant us great mercy.`
      ],
      aposticha_glory: `Grant me tears from the depths of my heart, sighing from the depths of my soul, O maiden, and contrition and confession of the transgressions I have committed in this life, that by thy help, O all-pure one, I may pass my life in repentance and receive remission.`
    },
    tue: {
      lic: [
        `Lifted up upon the Cross, pierced by a spear, Thy fingers bloodied, O supremely good Master, Thou didst sign our emancipation; and tearing apart the record of the sins of Adam, our forefather, Thou didst free human nature. Wherefore, O Compassionate One, we hymn Thy goodness, which transcendeth understanding.`,
        `We hymn Thy sufferings, O Jesus our Master: the Cross, the spear and the reed, the sponge and the nails, the beatings, the purple robe and the crown of thorns, the spittings and mockery which Thou didst willingly endure. I magnify Thy long-suffering, O only Innocent One, Bestower of life, and I glorify Thee with faith, O Lover of mankind.`,
        `I bow down before Thy precious Cross, kissing it with love, O supremely good One, and I glorify Thy condescension, boundless mercy, ineffable compassions and rich goodness, which transcend understanding, for thereby Thou hast saved the race of mankind, which was held fast in the darkness of transgressions. Glory to Thy crucifixion, O Christ!`
      ],
      aposticha: [
        `Thou hast given Thy Cross to us as an invincible weapon, O Christ; and therewith we triumph over the assaults of the alien one.`,
        `Ever possessing Thy Cross as a help, O Christ, we easily trample underfoot the snares of the enemy.`,
        `As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.`
      ],
      aposticha_glory: `The most pure one, beholding Christ, the lover of mankind, crucified, His side pierced by a lance, cried out, lamenting: "What is this, O my Son? How have these thankless people rewarded Thee, O Master?"`
    },
    wed: {
      lic: [
        `O ye glorious ones, who with a most mighty understanding waged war, arraying yourselves against the wicked foe, for having valiantly armed yourselves with the weaponry of the Spirit, ye destroyed all the might of the demons, who seize men's souls like plunder; wherefore, we honor you throughout the ages, O apostles.`,
        `Spreading out the net of the Faith in the form of the Cross, Thy twelve divine apostles dragged all the nations to the knowledge of Thee, O Christ, and dried up the salty sea of the passions; wherefore, I beseech Thee: By their wholly well pleasing supplications recall me from the depths of transgressions.`,
        `With divine hymns let the divinely chosen and all-honorable twelve apostles be praised: Peter, Paul and James, Luke and John, Matthew and Thomas, Mark, Simon and Philip, the most glorious Andrew and Matthias, with the godly and most wise Bartholomew, and the seventy others.`
      ],
      aposticha: [
        `Thou didst enlighten the choir of the apostles with the Holy Spirit, O Christ God. By them wash away the defilement of our sin, and have mercy on us.`,
        `Thy Holy Spirit revealed the illiterate disciples to be teachers, O Christ God, and set at naught the deception of the pagans with their greatly eloquent harmony, in that He is almighty.`,
        `O martyrs of the Lord, ye animate sacrifices, noetic whole-burnt offerings, perfect offerings to God, ye lambs who know God and are known of Him, and to whose fold the wolves have no entry: Pray ye that with you we also may be tended by the water of peace.`
      ],
      aposticha_glory: `Deliver us from our needs, O Mother of Christ God, thou who hast given birth to the Creator of all, that we all may cry out to thee: Rejoice, O thou who alone art the intercessor for our souls!`
    },
    thu: {
      lic: [
        `When all creation beheld Thee crucified, it was changed and trembled: the whole earth shook, quaking, O long-suffering Word; in fear the veil of the temple rent in twain and in terror the rocks split asunder when Thou wast insulted; and the sun, knowing Thee to be its Creator, hid its rays.`,
        `How did the most iniquitous council dare to condemn Thee, O immortal Judge, Who of old in the desert gave the law to Moses, who beheld God? How could they fail to be filled with terror, beholding the Life of all dead upon the Cross? How could their mind not fathom that Thou art the one Lord and Master of creation?`,
        `With the piercing of Thy side, O greatly Merciful One, the ancient record of our forefather Adam was rent asunder; and by the shedding of Thy blood rejected human nature was sanctified, and cried aloud: Glory be to Thy loving-kindness! Glory be to Thy divine crucifixion, O almighty Jesus, Thou Savior of our souls!`
      ],
      aposticha: [
        `Thou hast given Thy Cross to us as an invincible weapon, O Christ; and with it we triumph over the assaults of the alien one.`,
        `Ever possessing Thy Cross as a help, O Christ, we easily trample underfoot the snares of the enemy.`,
        `O Christ God, Who art glorified in the memorials of Thy saints, entreated by them send down upon us great mercy.`
      ],
      aposticha_glory: `"Lament not for Me, O Mother, beholding Me thy Son and God hanging upon the Tree, Who hath suspended the earth upon the waters unsupported, and hath fashioned all creation; for I shall arise and be glorified, and shall crush the kingdoms of Hades with strength; destroying its power and delivering those in bondage from its wickedness, for I am compassionate; and I shall bring them to My Father, in that I am the Lover of mankind."`
    },
    fri: {
      lic: [
        `Emulating the sufferings of Christ, the Lover of mankind, O passion-bearers, ye gave your bodies over to wounds, and bitter torments, and innumerable pangs, ever looking forward to the divine delight of paradise, to ever-abundant sustenance and everlasting glory; and having received this, ye pray for those who hymn you.`,
        `Emulating the sufferings of Christ, the Lover of mankind, O passion-bearers, ye gave your bodies over to wounds, and bitter torments, and innumerable pangs, ever looking forward to the divine delight of paradise, to ever-abundant sustenance and everlasting glory; and having received this, ye pray for those who hymn you.`,
        `O most sacred pastors, as glorious emulators of Christ, the Chief Shepherd, the King of all, ye readily laid down your lives for the sheep, and endured grievous misfortunes, O right blessed ones; and as champions ye save the divinely chosen flock unharmed by cruel wolves.`,
        `O ye martyrs of the Lord, living sacrifices, noetic burnt-offerings, perfect offerings to God, lambs who knew God and are known by Him, whose fold no wolf can enter: Pray ye that with you we may also feed beside the waters of rest.`,
        `Precious is the death of Thy saints, O Lord. Slain by the sword, and by fire and freezing cold, they poured forth their blood, placing all their hope in Thee that from Thy hand they would receive the reward of their labors. They endured to the end and received from Thee O Savior, Thy great mercy.`,
        `O saints, since ye have boldness in the presence of the Savior, unceasingly entreat Him for us sinners, asking that remission of sins, and great mercy, be granted to our souls.`
      ],
      lic_dogmatikon: `Prophet David, the ancestor of God, spoke of thee in psalmody unto Him Who hath accomplished great things in thee. For God was well pleased without father to become a man from thee, the Queen who standeth at His right hand, and He - the source of life - showed thee to be His mother, that He might renew His own image, corrupted by the passions. Having found the lost sheep wandering on the mountain He hath laid it upon His shoulders, that He may bring it to his Father; and in accordance with His own will unite it to the heavenly powers and thus, O Theotokos, save the world, Christ, Who is richly and abundantly merciful.`,
      aposticha: [
        `Thou art glorified in the memorials of Thy saints, O Christ our God; by their intercessions send down upon us great mercy.`,
        `O Thou Who hast accepted the patient endurance of the holy martyrs; in Thy love for mankind do Thou accept our hymns of praise, and by their intercessions send down upon us great mercy.`,
        `With the souls of the righteous who have reposed, O Savior, grant rest to the souls of Thy departed servants, preserving them in the life of blessedness which is in Thee, O Lover of mankind.`
      ],
      aposticha_glory: `O thou inextinguishable lamp, and throne of righteousness most pure Sovereign Lady: pray thou that our souls be saved.`
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
  // Encoded from Drive 4-1.pdf. Tone-4 structural divergences (verified, NOT ported):
  //  • Trinitarians appear in ALL THREE canons (4 total): Resurrection Ode IX,
  //    Cross-Resurrection Odes VII & VIII, Theotokos Ode VII.
  //  • Resurrection canon: Theotokion on Odes I–VIII; Trinitarian on Ode IX.
  //  • Cross-Resurrection canon: Theotokion on Odes I, III, IV, V, VI (five — most
  //    of any tone so far); Trinitarian on VII & VIII; Ode IX = 3 troparia (bare).
  //  • Theotokos canon: troparia-only + Trinitarian on Ode VII; troparia counts
  //    IV/V/VIII/IX = 3, the rest 2.
  //  • Songs of Ascent: short 2-line stanzas, lightly/variably pointed — antiphon 2
  //    (s2, G/B) and antiphon 3 (s1, s2) carry only | ; antiphon 3 G/B has NO markers
  //    (solid prose in source). Captured as-is — do not invent a cadence.
  //  • Sessional K2 hymn_2 text: source gives only * (no penultimate) — kept.
  //  • GD troparion (even-tone form): the Tone 4 source shows only * (no **) before
  //    "O Thou Who alone art greatly merciful," whereas Tone 2's source gave ** there.
  //    Encoded per THIS source (no //). FLAG for choir-director review vs. Tone 2.
  // Pulled (not re-encoded): God-is-the-Lord troparion ← RESURRECTIONAL_TROPARIA[4],
  //   kontakion ← SUNDAY_KONTAKIA[4], Hypakoë ← HYPAKOE[4], Evlogitaria ← EVLOGITARIA.
  matins: {
    god_is_the_lord_theotokion: `The mystery hidden from all ages | and unknown to the ranks of angels, | hath been revealed to those on earth through thee, O Theotokos: | God incarnate in an uncommingled union, | Who willingly accepted the Cross for our sake, | and through it hath raised up the first-formed man, // and saved our souls from death.`,

    sessional_kathisma2: {
      hymn_1: { text: `Looking into the entrance of the tomb, the myrrh-bearing women | were unable to endure the bright radiance of the angel, | trembling in awe they said; | "How is it that He who hath opened paradise to the thief hath been stolen? | How is it that He who before His Passion proclaimed His arising hath been raised? // Truly Christ God hath arisen, granting those in Hades life and resurrection."` },
      hymn_2: {
        verse: `Arise, O Lord my God, let Thy hands be lifted on high; | forget not Thy paupers to the end.`,
        text: `Mortal men laid in a new tomb the One who through a word established the ends of earth, | for Thou O Savior, didst willingly endure the Cross, | whereby Thou didst conquer the adversary, and despoil death, | for which cause all those in Hades extol Thy life-giving arising saying | "Christ, the giver of life, hath arisen and abideth unto the ages."`,
      },
      theotokion: `As he contemplated that which was beyond nature | Joseph was struck with wonder O Theotokos, at thy conception without seed. | He contemplated the mysterious dew upon the fleece, | the bush unburnt by fire, | Aaron's rod which budded. | Thus thy betrothed and guardian bore witness and cried unto the priests saying: | A virgin beareth a child, // and after childbirth remaineth yet a virgin.`,
    },

    sessional_kathisma3: {
      hymn_1: { text: `O Savior, Thou didst rise from Hades as immortal, | raising the world together with Thee by Thy might O Christ our God. | With strength hast Thou overthrown the dominion of death, | revealing the Resurrection to all O merciful One. // Wherefore we also glorify Thee, O only Lover of mankind.` },
      hymn_2: {
        verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
        text: `Gabriel radiant in white vestments descended from the heights above, | and approaching the rock upon which the Rock of life was lying, | cried unto the weeping women saying: | "Cease your cries of lamentation; | for ye have now obtained merciful compassion. | Take courage, for the One you seek is truly risen. | Therefore cry unto the apostles telling them that the Lord hath arisen, | to worship the risen One; // and having received gladness, to take courage, together with Eve."`,
      },
      theotokion: `All the choirs of angels were struck with wonder, O pure Virgin, | at the awesome mystery of thy conception. | How can the One who doth hold all things in place with only a nod, | now be held in thy arms as a man? | How can the Eternal accept a beginning? | How can the One who nourishes everything that hath breath by His ineffable goodness, | be suckled at thy breast? | And upon seeing these things, with hymns they glorify thee // as truly the Mother of God.`,
    },

    // Songs of Ascent — 3 antiphons (Tone 4). Short 2-line stanzas; pointing is sparse
    // in the source (antiphon 3 G/B carries no markers). Captured exactly as given.
    songs_of_ascent: [
      [
        `From my youth | do many passions war against me; | but do Thou Thyself defend // and save me, O my Savior.`,
        `Ye haters of Zion | shall be shamed by the Lord; | for like grass, by the fire // shall ye be withered.`,
        `In the Holy Spirit, | every soul is quickened, | and, through cleansing, is exalted // and made radiant by the triple Unity in a hidden sacred manner.`,
      ],
      [
        `From the depths of my soul | I have cried unto Thee fervently, O Lord; // let Thy divine ears be attentive unto me.`,
        `Every one who hath set their hope in the Lord, | is higher than all those who mourn.`,
        `By the Holy Spirit the streams of grace swell up; | watering all creation engendering life.`,
      ],
      [
        `Let my heart be raised to Thee, O Lord; | and let none of the pleasures of the world lure me unto weakness.`,
        `As one that hath tender love for one's mother; | so should we have even more fervent love for the Lord.`,
        `By the Holy Spirit cometh an abundance of divine knowledge, contemplation and wisdom; for by Him the Word unveils all the Father's teachings.`,
      ],
    ],

    matins_prokeimenon: {
      tone: 4,
      text: `Arise, O Lord, help us | and redeem us, for Thy name's sake.`,
      verse: `O God, with our ears have we heard, for our fathers have told us: the work which Thou hast wrought in their days, in the days of old.`,
    },

    canons: {

      resurrection: {
        odes: {
          1: {
            irmos: `Through the deep of the Red Sea, | marched dry shod Israel of old, | and by Moses' outstretched hands, | raised in the form of a cross, | the power of Amalek was routed in the wilderness.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Master, Thou wast lifted upon the immaculate tree of the Cross, setting aright our fall and healing the total ruin wrought through a tree, as Thou art supremely good and All-powerful.`,
              `In the tomb bodily, in Hades with Thine own soul as God, in paradise with the thief, and on the throne with the Father and the Spirit, filling all things, O Christ, yet remaining uncircumscribed.`,
            ],
            theotokion: `Without seed, by the Father's will, thou hast conceived from the divine Spirit the Son of God, giving birth in the flesh to the One who for our sake came forth from His Father without mother and from thee without father.`,
          },
          3: {
            irmos: `Thy Church, O Christ, rejoiceth in Thee crying aloud: | Thou, O Lord, art my strength, | my refuge and foundation.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The Tree of life, the true noetic Vine, is seen hanging upon the Cross, pouring forth unto all incorruption.`,
              `As One great, as One to be feared, as One who hath subdued the rage of Hades, and as God incorruptible, Thou hast arisen in the flesh.`,
            ],
            theotokion: `O Theotokos, thou hast become the sole intermediary of supra-natural blessings for those on earth, wherefore we bring unto thee our salutation.`,
          },
          4: {
            irmos: `Beholding Thee, the Sun of righteousness, | lifted up upon the Cross, | the Church now standeth arrayed and doth worthily cry aloud: | Glory be to Thy power, O Lord!`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `To heal my passions, Thou didst willingly ascend the Cross and endure the Passion of Thine undefiled flesh; wherefore we cry unto Thee: "Glory to Thy power, O Lord."`,
              `When death had tasted of Thy sinless and life-giving body, O Master, it was rightly slain; and we cry out to Thee: "Glory to Thy power, O Lord."`,
            ],
            theotokion: `Without knowing wedlock thou didst bear a child, O Virgin, and after childbirth thou didst remain yet a virgin; wherefore with never silent voices, O Sovereign Lady, we cry unto thee with unwavering faith, "Rejoice!"`,
          },
          5: {
            irmos: `Thou hast come, O my Lord, | as a light into the world, | a holy Light turning from the gloom of ignorance | those who hymn Thee with faith.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Lord, in Thy compassion Thou didst descend to earth; and raise up fallen human nature when Thou wast hung upon the Tree.`,
              `By Thy divine Resurrection Thou hast abolished the pangs of death, O Christ, and taken away the accusation of my sins, O most compassionate One.`,
            ],
            theotokion: `We have gained thee as our anchor and the hope of our salvation, O Bride of God, for thee we set forth as an unconquerable weapon against our foes.`,
          },
          6: {
            irmos: `The church crieth out unto Thee O Lord, | "I will sacrifice unto Thee with a voice of praise | having been cleansed of the blood of the demons" | by the blood that for mercy's sake flowed from Thy side.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Thou hast ascended the Cross and, girded with power, wrestled with the tyrant, and as God hurled him down from on high; raising up Adam by Thine invincible might.`,
              `Thou didst arise from the tomb, O Christ, in radiant comeliness, scattering all the enemies by Thy divine might, and as God filling all things with joy.`,
            ],
            theotokion: `O new wonder, more wondrous than all wonders; for a Virgin, without knowing a man, hath conceived in her womb the One who upholdeth all things, in nowise constraining Him.`,
          },
          7: {
            irmos: `In the Persian furnace the youths and descendants of Abraham, | burning with a love of piety | rather than by a flame of fire, | cried aloud saying: | Blessed art Thou in the temple of Thy glory, O Lord.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Washed in the divine Blood of Christ, mankind hath been called back to incorruption, singing with thanksgiving: "Blessed art Thou in the temple of Thy glory, O Lord."`,
              `Thy tomb, O Christ, hath been revealed, as the life-bearing source of our resurrection, more lovely than paradise, and more resplendent than any royal bridal chamber.`,
            ],
            theotokion: `Rejoice! sanctified and divine dwelling of the Most High, for through thee, O Theotokos, joy hath been granted to those who cry: "Blessed art thou among women, O all-immaculate Lady."`,
          },
          8: {
            irmos: `Having spread his hands, Daniel closed the lions' jaws | in their den; | while the zealously pious youths, | girded with virtue, | quenched the power of the fire and cried aloud: | Bless ye the Lord, all ye works of the Lord.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Spreading Thine arms upon the Cross, O Master, Thou hast gathered into one all the nations, and revealed one Church which hymneth Thee, for both those on earth and those in heaven sing with one accord: "Bless ye the Lord, all ye works of the Lord, and supremely exalt Him unto the ages."`,
              `An angel white as snow, blazing with the unapproachable light of the Resurrection, appeared to the women crying out: "Why seek ye the living as a man in the tomb: Christ hath truly risen." To Him let us also cry: "Sing unto the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages."`,
            ],
            theotokion: `Thou alone in all generations, O most pure Virgin, wast revealed as the Theotokos; for Thou didst become the abode of the Godhead, O all-immaculate one, and remained unburnt by the fire of the unapproachable Light; wherefore we all bless thee, O Mary, Bride of God.`,
          },
          9: {
            irmos: `A cornerstone not cut by hand O Virgin, | was cut from thee the unhewn mountain: | even Christ, Who hath joined together the disparate natures; | therefore rejoicing we magnify thee, | O Theotokos.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O my God, through Thy passion which Thou didst endure in the flesh upon the Cross, the fullness of Thy nature assumed the fullness of my nature in a union without commingling, granting unto me, in Thy loving compassion, the fullness of salvation.`,
              `When Thy disciples saw Thine opened tomb and the grave clothes, that had once held God, lying emptied by Thy Resurrection, they rejoiced with the angel saying: "The Lord hath indeed arisen."`,
            ],
            trinitarion: `All we the faithful worship a Unity of divine essence, but a trinity of Hypostases without commingling, whom we magnify as equal in power and equal in honor.`,
          },
        },
      },

      cross_resurrection: {
        refrain: `Glory to Thy precious Cross and Resurrection O Lord.`,
        odes: {
          1: {
            troparia: [
              `O Lord by Thy precious Blood, Thou hast healed the ruined race of mankind, demolishing the dominion of the mighty one, who of old spoiled the creature that Thou didst fashion.`,
              `Through dying Thou hast become the Resurrection of the dead; for the power of death was done away with when it wrestled with Life-eternal, God incarnate and the Master of all things.`,
            ],
            theotokion: `Surpassingly fairer than the heavenly powers was Thy divine living temple, the Virgin, Thy holy mountain, who carried Thee, our God, in her womb.`,
          },
          3: {
            troparia: [
              `The serpent plunged its poison filled fangs into me; O Savior, but with the nails in Thy hands, O Master, Thou hast crushed them; for there is none among mankind holier than Thee, O Lover of mankind.`,
              `Thou wast revealed, O Lover of mankind, as voluntarily dead in a tomb, reopening the gates of Hades for the souls found therein from every age, O Life-giver; for there is none among the holy holier than Thee, O Lover of mankind.`,
            ],
            theotokion: `Thou hast appeared as an unplowed field, bringing forth the Life-giving Grain, the Mediator Who doth grant immortality to all who partake of Him — The Holy One Who dwelleth in holiness amongst the saints.`,
          },
          4: {
            troparia: [
              `Israel, which was subject to the law, did not recognize in Thee, O Christ, God Who had ordained the law; but transgressing the law by nailing Thee to the Cross as a lawless one, they proved themselves unworthy of the law-giving.`,
              `Thy deified soul, O Savior, captured the treasuries of Hades raising together with itself the souls kept therein from every age; while Thy life-giving body flowed forth incorruption unto all.`,
            ],
            theotokion: `As the ever Virgin and true Theotokos we all glorify thee, O most pure one, for Moses, the God-seer, saw thee prefigured in the bush consumed with fire, yet remaining unburnt.`,
          },
          5: {
            troparia: [
              `Mindlessly, Hades swallowed Thee whole in its mouth, for beholding Thee nailed to a Tree, and pierced by a lance, it reckoned Thee, the living God, to be a mere breathless man; but when put to the test it learned the strength of Thy divinity.`,
              `When the temple of Thy body was destroyed, O Lover of mankind, both the tomb which took possession of it, and Hades, unwillingly paid the price; the latter by giving up the souls of the saints, and the former their bodies, O immortal One.`,
            ],
            theotokion: `Behold!, that which was foretold by the prophet hath now come to pass; for the Virgin who knew not wedlock, hath carried in her womb the God of all, and given birth to the eternal Son, who granteth peace to all who hymn her praises.`,
          },
          6: {
            troparia: [
              `I have foolishly puffed up my soul and Hades, opening wide its throat, hath swallowed me whole, but Christ hath come down and raised up my life, for He is the Lover of mankind.`,
              `Death hath perished through death; for He that died hath arisen granting me incorruption; and appearing unto the women, the immortal One hath proclaimed joy.`,
            ],
            theotokion: `Thy pure womb, O Theotokos, hath proven itself to be a palace of the unapproachable Godhead; upon Whom the Heavenly Hosts fear to gaze.`,
          },
          7: {
            troparia: [
              `Hanging upon a Tree Thou hast humbled the eye of the haughty and cast down the arrogant brow, saving mankind, O supremely exalted Lord and God of our fathers, blessed art Thou.`,
              `By Thy power exalt the horn of us who serve Thee, O Master, who hath arisen from the dead and emptied Hades of its former wealth, the multitudes of peoples. O supremely exalted Lord and God of our fathers, blessed art Thou.`,
            ],
            trinitarion: `Following the divine teachings we glorify the one Godhead, as a flame of three Lights, without commingling and undivided, eternally enlightening the whole of creation which doth sing: "O supremely exalted Lord and God of our fathers, blessed art Thou."`,
          },
          8: {
            troparia: [
              `Upon seeing Thine unjust sacrifice, creation became darkened and grieved; for while the earth trembled, the sun clothed itself in darkness; but we without ceasing praise and supremely exalt Thee, O Christ, unto the ages.`,
              `Having come down to me, even into Hades, Thou didst open a pathway for mankind through the Resurrection, and ascending on high, bearing me upon Thy shoulders, Thou hast brought me unto the Father; wherefore I cry unto Thee: "Praise the Lord all ye His works, and supremely exalt him throughout all ages."`,
            ],
            trinitarion: `We glorify the first Mind and Cause of all, the Father Who alone is without cause, the beginningless Word, and the comforting Spirit, one God and Lord, Creator of all, as we worship the Trinity one in essence and supremely exalt Him throughout all ages.`,
          },
          9: { troparia: [
            `In Eden, the serpent crept up on me through guile and took me prisoner; but the almighty Lord hath dashed him against the mighty rock of Golgotha, like an infant, and through the Tree of the Cross opened up for me once again entrance to spiritual delight.`,
            `Thou hast laid waste to the fortified strongholds of the enemy and plundered his wealth by Thine own all-powerful hand, raising me with Thee from the ruins of Hades, exposing the ancient boaster to be impotent and an object of derision.`,
            `Come Thou, Who lovest mankind, and visit the torments of Thy humbled people; and with Thine own compassionate and mighty arm fortify the power of Thy Cross-bearing peoples against the blaspheming enemies and rescue Thine inheritance, O Christ.`,
          ] },
        },
      },

      theotokos: {
        refrain: `Most holy Theotokos save us.`,
        odes: {
          1: { troparia: [
            `O pure Virgin, from fear of thine Offspring peoples trembled, nations were troubled, mighty kingdoms faltered; for my King hath come and put down the tyrant, redeeming the world from corruption.`,
            `Living on high, but condescending to become a man, Thou O Christ hath sanctified Thine abode, showing it to be steadfast; for she who hath given birth to Thee the Creator, hath alone, after childbirth, remained a treasury of virginity.`,
          ] },
          3: { troparia: [
            `Human nature became purified when through thee it encountered the unendurable divine Fire; like a mysterious loaf baked within thee, most pure Virgin, by the Fire that preserved thee unharmed.`,
            `Who is this who is so truly near to God, that she doth excel all the ranks of angels? She who alone in the comeliness of virginity doth shine forth as the Mother of the almighty One.`,
          ] },
          4: { troparia: [
            `Living among mankind, the invisible One, who is the incomprehensible Godhead, became visible, taking a wondrous form from thee, O maiden, and saving those who acknowledge thee to be the pure Mother of God.`,
            `The Virgin hath received the immaterial One in corporeal form, becoming an infant from her by His participation in corporeal things; and is thus known in two natures, God bearing flesh and a supra-natural man.`,
            `The Word and God, Who dwelt in thee, O Virgin, and was incarnate without seed, preserved thee a virgin during thy childbirth, and kept thee a virgin after childbirth, for He alone is the Sovereign Lord and Fashioner of all creation.`,
          ] },
          5: { troparia: [
            `Having made His abode within thee, O pure Virgin, the Son of God rendered thee a house of glory, a holy mountain of God, a bride, a bridal chamber, and a temple of sanctification, O paradise of everlasting delight.`,
            `From virginal blood, O Christ, hast Thou seedlessly taken most pure Hypostatic flesh, endowed with reason and intelligence, and with a self-governing soul, energy, and will.`,
            `A virginal womb hath put the tyrant's understanding to shame; for with His hand the infant hath probed the soul-destroying lair of asps, overthrowing the boastful traitor, and making him subservient to the faithful.`,
          ] },
          6: { troparia: [
            `The serpent of old deceived me, and put me to death through my foremother Eve; but now, O pure one, through thee He who fashioned me hath called me back from corruption.`,
            `The depths of compassion declared thee, O maiden, to be the ineffably chosen deep of wonders; for from thee Christ the Pearl hath shone forth with the lightning flash of His divinity.`,
          ] },
          7: {
            troparia: [
              `The fire of love for the Virgin burning within my heart draweth me to hymn, and cry unto the Mother and Virgin: "O blessed one, the Lord of powers is with thee."`,
              `Thou wast revealed as higher than all creation, for thou hast given birth to the Creator and Lord of all; wherefore I cry unto thee O Theotokos: "O blessed one, the Lord of powers is with thee."`,
            ],
            trinitarion: `Honoring Thee as one indivisible Lordship, in three sacred Wellsprings, I hymn one Nature in three Hypostases, crying: "Blessed art Thou, Who hath brought order to all that is."`,
          },
          8: { troparia: [
            `Having fashioned thee from Adam's side, the Lord of all, became incarnate from thy virginity, hymning Him we cry out: "All ye His works, bless ye the Lord, and exalt Him above all unto the ages."`,
            `In his tent Abraham beheld the mystery which came to pass in thee, O Theotokos, for he mystically received thy Son, while not yet in the flesh, and sang: "Bless ye the Lord, all ye works of the Lord, and exalt Him above all unto the ages."`,
            `The prefiguring of thy virginity saved the holy youths equal in number to the Trinity; for in virginal bodies they trampled down the flame, O maiden, as they cried aloud: "Bless ye the Lord, all ye works of the Lord, and exalt Him above all unto the ages."`,
          ] },
          9: { troparia: [
            `We behold thee, O all-immaculate Virgin, as a lily dyed with the purple of the divine Spirit, shining forth in the midst of thorns and filling with sweet fragrance those who in truth magnify thee.`,
            `From thy womb, O all-immaculate one, the incorruptible One hath assumed our corrupt nature and by His compassion revealed it within Himself to be incorrupt; wherefore as the true Theotokos, we magnify thee.`,
            `As the Sovereign Lady of all created things, grant thou unto thy people trophies of victory, subduing the adversary to the Church, so that, as the Theotokos, we may magnify thee.`,
          ] },
        },
      },
    },

    ikos: `Let all of us, born of earth, hymn Christ the giver of life, who arose from the dead on the third day. For today, by His power He hath smashed the gates of death, slaughtering Hades and crushing the sting of death, setting Adam free with Eve. Therefore with thanksgiving we cry out aloud our fervent praises, for He alone, as almighty God and Master, hath risen on the third day.`,

    // Praises — 8 Resurrection stichera. Glory = Eothinon Gospel sticheron (by Gospel #,
    // tone-independent); Both-now = fixed "Thou art most blessed" theotokion (Tone II) —
    // neither stored here, per Tones 1–3.
    praises: {
      stichera: [
        { verse: `To do among them the judgment that is written, | This glory shall be to all His saints.`,
          text:  `O all-powerful Lord, | Who didst endure the Cross and death, | and arose from the dead, // we glorify Thy Holy Resurrection.` },
        { verse: `Praise ye God in His saints, | praise Him in the firmament of His power.`,
          text:  `By Thy Cross, O Christ, Thou hast delivered us from the ancient curse, | and by Thy death Thou hast conquered the devil who tyrannized our nature. | By Thine arising Thou hast filled all things with joy, | wherefore we cry unto Thee: // "O Lord risen from the dead, glory be to Thee!"` },
        { verse: `Praise Him for His mighty acts, | praise Him according to the multitude of His greatness.`,
          text:  `O Christ the Savior, | with Thy Cross, guide us to Thy truth, | and deliver us from the snares of the enemy; | O Thou who art risen from the dead | raise us also who have fallen through sin, | by the stretching out of Thy hand, | O Lord, at the behest of the prayers of Thy saints.` },
        { verse: `Praise Him with the sound of trumpet, | praise Him with the psaltery and harp.`,
          text:  `Without departing from Thy Father's bosom, | in Thy tender compassion, Thou didst descend to earth, | O Only-begotten Word of God, | without change becoming man. | Whilst Thou art impassible in Thy divinity, | Thou didst suffer the Cross and death in the flesh; | and rising from the dead Thou hast granted immortality to the race of mankind, // as Thou alone art all-powerful.` },
        { verse: `Praise Him with timbrel and dance, | praise Him with strings and flute.`,
          text:  `Thou didst endure death in the flesh | thereby ensuring us of immortality, | and thou didst abide within a tomb, | thereby freeing us from Hades, | and raising us up with together with Thyself, | suffering as a man, but rising as God, | wherefore we cry unto Thee the Lover of mankind: // "O Lord giver of life glory be to Thee."` },
        { verse: `Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. | Let every breath praise the Lord.`,
          text:  `The rocks were rent asunder, O Savior, | when Thy Cross was set upon Golgotha; | the gate-keepers of Hades were smitten with terror, | when Thou wast laid in the sepulcher as one dead; | for abolishing the stronghold of death, | Thou hast granted incorruption to all the dead by Thy Resurrection, | O Lord and Savior, // Giver of life, glory be to Thee!` },
        { verse: `Arise, O Lord my God, let Thy hands be lifted high; | forget not Thy paupers to the end.`,
          text:  `The women longed to see Thy Resurrection, O Christ God; | Mary Magdalene having come in anticipation | found the stone rolled away from the tomb, | with an angel seated upon it, saying: | "Why seek ye the living among the dead? // He hath arisen as God, that He may save all things."` },
        { verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
          text:  `Tell us, O ye Jews, | where is Jesus, whom ye have thought to guard? | Where is He whom you placed in the grave, | sealing it with the stone? | Give back the dead, ye who denied life; | give back the buried One or else believe in the risen One. | Though you keep silent about the Lord's rising, | the stones cry out aloud, | above all the one that was rolled away from the tomb. | Great is Thy mercy! | Great is the mystery of Thy dispensation! | Our Savior, glory be to Thee!` },
      ],
    },

    // Even-tone form. Tone 4 source shows only | (no //) before the final clause;
    // Tone 2's source gives // there. Kept per source — flagged for choir-director review.
    great_doxology_troparion: `Having risen from the tomb, and having burst the bonds of Hades, | Thou hast destroyed the sentence of death, O Lord, | delivering all from the snares of the enemy. | Manifesting Thyself to Thine apostles, Thou didst send them forth to preach; | and through them hast granted Thy peace to the world, | O Thou Who alone art greatly merciful.`,
  },

};
