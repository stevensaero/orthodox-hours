// src/data/octoechos/tone5.js
// Tone 5 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone5/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[5].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {
  // Sections claimed complete for the drift gate (schema.js + validate_octoechos.mjs).
  _encoded: ['vespers', 'matins'],

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[5] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 5
    sat: {
      lic: [
        `By Thy precious Cross, O Christ, | Thou hast shamed the devil, | and by Thy Resurrection Thou hast blunted the sting of sin, | and saved us from the gates of death: // we glorify Thee, the only-begotten One.`,
        `He who hath granted Resurrection to mankind, | was led as a sheep to the slaughter; | the princes of Hades trembled before Him | and the gates of lamentations were lifted up; | for Christ the King of glory entered therein, | saying to those in bondage: "Come forth!" // and to those in darkness: "Reveal yourselves!"`,
        `O great wonder! | Having suffered in the flesh through His love for mankind, | the Creator of all things visible and invisible, | hath arisen as immortal. | Come O ye descendents of the nations, | let us worship Him; | for delivered from deception by His compassion, // we have learned to hymn one God in three Hypostases.`,
        `We offer unto Thee our evening worship, | O never-setting Light, | who in the flesh at the end of the ages, | as in a mirror, shone through upon the world, | and descended even into Hades, | dispersing the darkness therein | and showing unto the nations the light of the Resurrection. // O Lord, Giver of light, glory be to Thee!`,
        `Let us glorify Christ the Author of our salvation; | for by His arising from the dead, | the world hath been saved from delusion; | the choir of angels rejoiceth, | the deception of demons fleeth, | fallen Adam hath arisen, // and the devil hath been overthrown.`,
        `The watchmen were instructed by the lawless ones | to conceal Christ's Resurrection, | taking money to say that "while we slept | the corpse was stolen from the grave." | Who ever saw, or who ever heard of a corpse being stolen? | Especially one anointed yet naked, | and with its grave-clothes left in the tomb? | Be not deceived, O ye Jews, | learn from the sayings of the prophets, | and know that He is truly the Redeemer of the world // and All-powerful.`,
        `O Lord, our Savior, | Thou hast despoiled Hades and trampled upon death; | enlightening the world by the precious Cross, // have mercy upon us.`
      ],
      aposticha: [
        `With voices of song we magnify Thee, O Christ, | the Savior incarnate, | yet not separated from heaven, | for as the Lord who lovest mankind | Thou hast suffered the Cross and death for the sake of our race, | overthrowing the gates of Hades, | and rising on the third day, // thus saving our souls.`,
        `When Thy side was pierced, O Giver of life, | Thou didst pour forth streams of forgiveness, | of life and salvation for all; | Thou didst suffer death in the flesh, | granting unto us immortality, | and by dwelling in a grave Thou hast freed us, | gloriously raising us up with Thyself as God; | wherefore we cry out to Thee: // "O Lord, Lover of mankind, glory be to Thee!"`,
        `Wonderful is Thy crucifixion | and Thy descent into Hades, O Lover of mankind, | for having despoiled it and as God gloriously raising with Thyself | those who were captive therein, | Thou hast opened paradise and bidden them welcome. | So too grant unto us who glorify Thine arising on the third day, | the forgiveness of our sins, | making us worthy to be inhabitants of paradise, // as Thou alone art compassionate.`,
        `O Lover of mankind, | Who for our sake didst accept to suffer the Passion in the flesh, | and arise from the dead on the third day, | heal the passions of our flesh, | and raise us up from our grievous transgressions, // and save us.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `In the Red Sea of old | an image of the Bride who knew not wedlock was depicted. | There Moses was the one who parted the sea, | here Gabriel is the minister of the miracle. | At that time Israel marched dry-shod through the deep, | now the Virgin doth seedlessly give birth to Christ. | The sea after Israel's passage remained impassable; | the immaculate one after bearing Emmanuel remained incorrupt. | O God, Who doth exist and is pre-eternal, | and hath appeared as man, // have mercy upon us.`
    },
    sun_eve: {
      lic: [
        `I weep and am downcast, envisioning the dread sentence of the Word, for which I, a wretch, have not the least reply for my guilt. Wherefore, I pray: Before the unseemliness of mine end overtaketh me, before I am mowed down by death, before I must needs be condemned to the place where the fire is unquenchable and the darkness is absolute, where are the worm and gnashing of teeth, and sinners are consumed, O my Christ, grant me great mercy and deliverance from mine offenses.`,
        `Disdaining Thy laws and the Scriptures, wretch that I am, I have rejected Thy commandments, O God my Creator. How will I ever avoid the torment which is to come, O Savior! Wherefore, before mine end grant me forgiveness and a shower of tears, imparting true compunction to me, O Savior. As Thou art the supremely good God, drive far from me the hordes of the demons who seek to drag me down into the abyss of Hades, for I entreat Thee: Take not Thine almighty hand from me!`,
        `Woe is me! How have I been darkened in mind? How have I withdrawn from Thee and, wretch that I am, enslaved myself to sin; and, enslaved to the passions, given myself wholly over to carnal pleasure which liveth within me? Now I await my departure from this life and the coming reckoning. O supremely good Lord, grant me tearful repentance and release from my countless transgressions, for with faith I beseech Thee Who grantest the world great mercy.`
      ],
      aposticha: [
        `O Lord, I cease not to sin, nor do I perceive Thy love for mankind which Thou hast granted me. Vanquish my lack of discernment, O Thou Who alone art good, and have mercy on me.`,
        `O Lord, from reverent fear of Thee I tremble, yet I cease not from committing sins. Turn me and save me, as Thou alone art merciful.`,
        `O Christ God, Who art glorified in the memorials of Thy saints, be Thou entreated by them, and send down upon us great mercy.`
      ],
      aposticha_glory: `Thou art truly higher than the throne of the cherubim, for the divine Word made His abode within thee, O pure one, desiring to restore our image; and issuing forth from thee as mortal, in that He is full of tender compassion, He endured the Cross and suffering for our sake, and as God hath given us the resurrection. Wherefore, giving thanks to the Creator with faith, we beseech thee as the one who transformed our condemned nature, that we may receive forgiveness of transgressions and great mercy by your prayers.`
    },
    mon: {
      lic: [
        `Woe unto me who have angered Thee, my merciful God and Lord! How many times have I promised to repent, O Christ, and have been found to be a senseless liar? I have soiled my first baptismal raiment, and have forsaken my covenant with Thee, and this second commandment, which I confessed before Thee in the presence of men and angels, have I also abandoned, clad in a lamentable form. Setting this aside, O Savior, leave me not to perish utterly.`,
        `What answer shalt thou find on the day of judgment, O wretched soul? Who will deliver thee from condemnation to everlasting fire and other torments? No-one, if thou thyself dost not placate the Compassionate One, forsaking thine evil deeds and acquiring a right pleasing life, every day weeping over thy countless transgressions, which thou committest at every hour in deed, word and thought, and beseeching Christ to grant thee the complete forgiveness of them.`,
        `Let sinful habit not seize me, dragging me down, O Savior, nor let the demon, which ever wageth war on me and subjecteth me to his will, gain dominance over me; but rescue me from his dominion with Thy mighty hand, O Almighty One Who lovest mankind, and reign Thou within me. Grant that I may be wholly Thine, and living according to Thy will, O Word, may find rest in Thee, and cleansing, salvation and great mercy for myself.`
      ],
      aposticha: [
        `O Lord, I cease not to sin, nor do I perceive Thy love for mankind which Thou hast granted me. Vanquish my lack of discernment, O Thou Who alone art good, and have mercy upon me.`,
        `O Lord, from reverent fear of Thee I tremble, yet I cease not from committing sins. Turn me and save me, as Thou alone art merciful.`,
        `O Lover of mankind, as One Who hast accepted the patience of the holy martyrs, by their prayers grant us great mercy.`
      ],
      aposticha_glory: `From my childhood I have been revealed to be a tireless committer of sins, having been grievously wounded in mind and lovingly remained such by my many evil habits. O Lady, disdain me not who am perishing in evil, but, taking pity, deliver me from every assault of the passions by thine aid, that if only in old age I may repent before God.`
    },
    tue: {
      lic: [
        `Thou wast lifted up like a lamb upon the Cross, and didst lay low the uprisings of the deceiver; and when Thou wast slaughtered Thou didst sanctify the whole earth with Thy blood. Pierced by the spear, Thou didst command the flaming sword to turn away from me, that I might dwell in paradise and partake without fear of the tree of life. Wherefore, saved by Thy sufferings, I cry out, rejoicing: Glory be to Thy divine Cross, whereby we have been delivered from the ancient curse and receive from the Tree blessing and great mercy!`,
        `Desiring to bring an end to the pain and afflictions of all, O supremely good Lord my Savior, Thou didst endure vile crucifixion; Thou didst taste of gall, O Innocent One, removing the bitter taste of evil; and wounded, O Word, by the thrust of the spear, Thou healest our wounds, in that Thou art Master. Wherefore, we hymn Thy glorious will, and bowing down, we honor the spear, the sponge and the reed, whereby Thou hast imparted to Thy world peace and great mercy.`,
        `"How did the iniquitous multitude of the Jews condemn Thee to be crucified on the Cross, O Jesus, taking no pity on Thee, the Compassionate One?", exclaimed the Virgin, weeping, when she beheld lifted up upon the Cross Him Who was born from her womb without suffering; "and what hath the iniquitous council done to Thee, O my Child most desired, my most beloved Son? Haste Thou, and save those who glorify Thy crucifixion with faith, and those who magnify me, as Thou didst promise, in that Thou alone art supremely good!"`
      ],
      aposticha: [
        `O Lord, of old, in the time of Moses the prophet, the image of Thy Cross, having been precisely revealed, vanquished Thine enemies; and now, possessed of that same Cross, O Christ, we triumph over every adversary.`,
        `O Lord, by Thy Cross Thou hast delivered us from all sorrow; by it we ever trample upon the heads of the invisible enemies.`,
        `As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.`
      ],
      aposticha_glory: `Desiring that all receive salvation, O my sinless Christ, Thou wast pleased to pay a great price, Thy precious blood, for our deliverance. Wherefore, beholding Thee nailed, Thy Mother, lamenting, rent her hair, saying: "O Child, mine all-immaculate Lamb, Who desirest to deliver the world by Thy precious blood, how hast Thou set to whence I cannot see, O never-setting Sun, Who grantest unto all enlightenment, peace and great mercy?"`
    },
    wed: {
      lic: [
        `Traversing all the earth, ye sowed divine teachings, bearing the Word alone as a lamp and all riches, O disciples of the Lord; and thereby ye put emperors and torturers to shame, and rent asunder the vain arguments of the philosophers and rhetors as though they were spiders' webs, calling all to recognize the Creator, and abolishing the vain worship of demons. Wherefore, I pray that, by your prayers, ye deliver me from those who are irrational.`,
        `By your supplications unto God, deliver us all from the turmoil of temptations, the cruel deception of shameful heresies, the evil counsel of the demons, the fire which burneth in the absence of light, the everlasting worm, the gnashing of teeth, and all other torments; and beseech Him that, for the sake of your temperance and toils, we may receive the reward of the virtues, the inheritance of the kingdom of heaven, and great mercy.`,
        `Clearly receiving all the effulgence, and the reflected light of the ineffable dispensation of the Trinity, insofar as human nature can so do, the all-praised twelve perfectly manifested themselves, bringing with them the seventy-two, and enlightening the ends of the world, darkened by the darkness of wicked heresy, pray ye unto Christ that He grant the world great mercy.`
      ],
      aposticha: [
        `As eye-witnesses to the mysteries of the Savior, O disciples, ye preached the Invisible One Who hath no beginning, saying: In the beginning was the Word. Ye were not created before the angels, nor were ye taught of men, but by the wisdom of the Most High. Wherefore, as ye have boldness, pray ye on behalf of our souls.`,
        `Together let us praise the apostles of the Lord with hymns, for, having arrayed themselves in the armor of the Cross, they abolished the delusion of the demons and were revealed to be crown-bearers of Christ.`,
        `As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.`
      ],
      aposticha_glory: `O strange, awesome and great mystery! The Un-circumscribable One hath made His abode within a womb, and a Mother remaineth a Virgin even after birthgiving, for from her she gave birth to God Incarnate. To Him, then, let us cry aloud, to Him let us raise a hymn, chanting with the angels: Holy art Thou, O Christ God, Who wast incarnate for our sake! Glory be to Thee!`
    },
    thu: {
      lic: [
        `Let all the groves of trees rejoice, beholding the most precious Tree which was made joyous by the suffering of the Master, shining forth grace like a flame of fire, pouring forth gifts upon all like water, and enlightening the thoughts of our souls, washing away infirmities and driving away invisible passions, and manifestly vanquishing foreign nations, ever granting to the faithful victories, blessing and great mercy.`,
        `Worshipping with faith the place where the feet of the Lord stood, as the prophet said, let us glorify Christ Who was crucified, and with Himself crucified our transgressions, Who abolished the curse which originated with a tree, and reconciled with the Father those who had withdrawn far from Him through evil thoughts; and venerating the nails of his hands and feet, the spear and the reed, the sponge and the crown of thorns, the insults and mockery, and all else He endured, let us venerate them with honor, for by them we are saved.`,
        `Let us crucify all our members with Christ, and let us die unto the world; and desiring to walk in the footsteps of Christ, the Ruler of this world, let us take His divine Cross upon our shoulder by rejecting the uprisings of the flesh and the evil lusts which draw our souls into sin, thinking to stand before Him and to behold Him nailed to the Cross, breathing His last and surrendering His soul into the hands of the Father, that we may never be separated from Him.`
      ],
      aposticha: [
        `O Lord, of old, in the time of Moses the prophet, the image of Thy Cross, having been precisely revealed, vanquished Thine enemies; and now, possessed of that same Cross, O Christ, we triumph over every adversary.`,
        `O Lord, by Thy Cross Thou hast delivered us from all sorrow; by it we ever trample upon the heads of the invisible enemies.`,
        `O Christ God, Who art glorified in the memorials of Thy saints, entreated by them send down upon us great mercy.`
      ],
      aposticha_glory: `Desiring that all receive salvation, O my sinless Christ, Thou wast pleased to pay a great price, Thy precious blood, for our deliverance. Wherefore, beholding Thee nailed, Thy Mother, lamenting, rent her hair, saying: "O Child, mine all-immaculate Lamb, Who desirest to deliver the world by Thy precious blood, how hast Thou set to whence I cannot see, O never-setting Sun, Who grantest unto all enlightenment, peace and great mercy?"`
    },
    fri: {
      lic: [
        `With the streams of their blood the passion-bearers quenched the flame of grievous ungodliness; and enkindling the radiance of piety throughout the whole world, they utterly consumed the false gods and their fetid stench. They have shone forth the most pure light upon those on earth, and enlightened thereby, we elude the darkness of ungodliness and evade the delusion of idols, worshipping Christ, Who granteth the world great mercy.`,
        `Easily setting at naught the words of the ungodly heretics and their pursuit, ye became warriors of the beginningless Father, the Son Who is equally without beginning, and the Holy Spirit, the Unity of Divinity in three Hypostases, teaching the faithful with piety of mind and confirming the preaching of Orthodoxy. Wherefore, ye are called blessed, O most sacred pastors, for in life-bearing pastures ye tended the flock of Christ, for Whom ye endured all manner of pangs and many and varied trials.`,
        `Receiving mastery of mind through the doing of virtuous deeds, the company of the venerable, who struggled, with ease utterly trampled the carnal passions underfoot. Thereby they valiantly overcame all the wiles of the demons and were revealed to be conversers with the angels, since they lived as ones incorporeal. And they now rejoice in the mansions on high, living in splendor, and standing before Christ, beseech Him to grant our souls great mercy.`,
        `Girding themselves with the shield of faith, and arming themselves with the sign of the Cross, Thy saints O Lord, bravely gave themselves over to torments, casting down the pride and delusion of the devil. By their supplications, O God almighty, send down peace upon the world, and great mercy upon our souls.`,
        `Girding themselves with the shield of faith, and arming themselves with the sign of the Cross, Thy saints O Lord, bravely gave themselves over to torments, casting down the pride and delusion of the devil. By their supplications, O God almighty, send down peace upon the world, and great mercy upon our souls.`,
        `Despising all things earthly, and bravely withstanding torture, ye were not deprived of your goodly hope, but became heirs of the Kingdom of heaven. O ye all-famed martyrs, since ye have boldness before God the Lover of mankind, ask that peace be granted to the world, and great mercy to our souls.`
      ],
      lic_dogmatikon: `In the Red Sea of old an image of the Bride who knew not wedlock was depicted. There Moses was the one who parted the sea, here Gabriel is the minister of the miracle. At that time Israel marched dry-shod through the deep, now the Virgin doth seedlessly give birth to Christ. The sea after Israel's passage remained impassable; the immaculate one after bearing Emmanuel remained incorrupt. O God, Who doth exist and is pre-eternal, and hath appeared as man, have mercy upon us.`,
      aposticha: [
        `Intercede on our behalf, O holy martyrs, that we may be delivered from our iniquities: for unto you hath been given the grace to pray for us.`,
        `With your souls filled with insatiable love, O holy martyrs, ye did not deny Christ; and enduring divers wounds in sufferings, ye cast down the audacity of the tyrants, and keeping the faith unaltered and unharmed, ye were translated to the heavens. Wherefore, since ye have boldness before Him, ask that He grant us great mercy.`,
        `I called to mind the words of the prophet, "I am but dust and ashes." I went also to the tombs, and beheld the bones laid bare, and I said: Which is the king or which the warrior, which the rich man or which the beggar, which the righteous or which the sinner? But grant rest with the righteous, O Lord, to Thy servants, as the Lover of mankind.`
      ],
      aposticha_glory: `O thou who art full of joy, intercede by thy supplications, and beg that a multitude of compassions, and the cleansing of our many sins, be granted to our souls.`
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
  // Encoded from Drive 5-1.pdf. Tone-5 structural divergences (verified, NOT ported):
  //  • NO trinitarians anywhere in the Matins canons (the Trinity material lives in
  //    the Nocturns canon, which is not encoded here).
  //  • Resurrection canon: Theotokion on every ode (I–IX).
  //  • Cross-Resurrection canon: Theotokion on EVERY ode (all 8 — first tone to do
  //    so); Ode V carries 3 troparia, the rest 2.
  //  • Theotokos canon: troparia-only, 3–4 per ode (IV/VII/VIII/IX = 4, rest 3);
  //    no ode has only 2 troparia.
  //  • Sessional K2 theotokion: source gives only * (no penultimate) — kept as all |.
  //  • GD troparion: odd-tone form ("Today is salvation…"); source carries the **
  //    penultimate normally (no flag, unlike Tone 4).
  // Pulled (not re-encoded): God-is-the-Lord troparion ← RESURRECTIONAL_TROPARIA[5],
  //   kontakion ← SUNDAY_KONTAKIA[5], Hypakoë ← HYPAKOE[5], Evlogitaria ← EVLOGITARIA.
  matins: {
    god_is_the_lord_theotokion: `Rejoice, impassible portal of the Lord! | Rejoice, rampart and protection of those who have recourse unto thee! | Rejoice, haven untouched by storms, | and who knowing not wedlock, | didst bear in the flesh thy Creator and God. | Cease not to intercede for those // who praise and worship thine Offspring.`,

    sessional_kathisma2: {
      hymn_1: { text: `Let us celebrate the Cross of the Lord, | let us honor His holy burial with hymns, | and let us exulting, glorify His Resurrection. | For with Himself He hath raised the dead from their graves, | and as God having despoiled the dominion of death | and the might of the devil, // He hath shone forth light upon those in Hades.` },
      hymn_2: {
        verse: `Arise, O Lord my God, let Thy hands be lifted on high; | forget not Thy paupers to the end.`,
        text: `O Lord, Thou who hast put death to death, | was called dead; | Thou who hast emptied the tombs was placed in a tomb; | above, the soldiers stood guarding the grave, | below, Thou didst raise the dead from all ages. | O all-powerful and incomprehensible Lord, // glory be to Thee!`,
      },
      theotokion: `Rejoice holy mountain upon which God hath walked; | Rejoice! living bush unconsumed by fire; | Rejoice! O only bridge of creation to God, | who leadeth mortals to eternal life; | Rejoice! maiden undefiled, | who hath born without wedlock the salvation of our souls.`,
    },

    sessional_kathisma3: {
      hymn_1: { text: `O Lord, after Thy Resurrection on the third day, | and after the worship of the apostles, Peter cried unto Thee; | "The women had courage, and I was afraid; | the thief confessed Thee as God, and I denied Thee: | wilt Thou no longer call me a disciple, | or wilt Thou once again declare me a fisher of the deep? // Receive me in my penitence, O God, and save me!"` },
      hymn_2: {
        verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
        text: `O merciful Lord, the lawless ones | nailed Thee between two condemned thieves | and pierced Thy side with a lance, | but Thou, Who didst destroy the gates of Hades, | didst suffer burial and arise on the third day; | The women ran to see Thee | and announced the Resurrection to Thine apostles. | O supremely exalted Savior whom the angels hymn, // O blessed Lord, glory be to Thee.`,
      },
      theotokion: `The Bride who knew not wedlock, the Birthgiver of God, | who turned Eve's grief to joy, | do we the faithful hymn and worship, | for thou hast redeemed us from the ancient curse. | And now, O all-hymned most holy one, // cease not to make intercession for the salvation of our souls.`,
    },

    // Songs of Ascent — 3 antiphons (Tone 5), all fully pointed in the source.
    songs_of_ascent: [
      [
        `When I am troubled I sing to Thee like David, | O my Savior: // Deliver my soul from a deceitful tongue.`,
        `Blessed is the life of those | who dwell in the desert places, // divine love giveth them wings.`,
        `By the Holy Spirit all things are unshaken, | both visible and invisible; | for He hath sovereign power, // being undeniably one of the Trinity.`,
      ],
      [
        `Lift up thyself to the mountains, | O my soul; // go thither from whence cometh our help.`,
        `Let Thy right hand hover over me, | O Christ, // and guard me from every misfortune.`,
        `Let us sing to the Holy Spirit, | as we contemplate God: | Thou art God, Life, Love, Light, and Intellect, | Thou art Goodness, // and Thou reignest unto the ages.`,
      ],
      [
        `Filled with great joy | at the words of those who say unto me: | "Let us go into the courts of the Lord," // I offer up my prayers.`,
        `Fearful things are accomplished in the house of David; | for a fire is found there, // burning every shameful thought.`,
        `To the Holy Spirit belongeth the lordship of life, | for from Him every living being hath its breath, | as also from the Father // together with the Son.`,
      ],
    ],

    matins_prokeimenon: {
      tone: 5,
      text: `Arise, O Lord my God, let Thy hand be lifted high; | for Thou art King unto the ages.`,
      verse: `I will confess Thee, O Lord, with my whole heart, I will tell of all Thy wonders.`,
    },

    canons: {

      resurrection: {
        odes: {
          1: {
            irmos: `Christ, who with an upraised arm | bringeth wars to naught, | hath shaken horse and rider in the Red Sea; | but Israel hath He saved | as they chanted a song of victory.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Benefactor Christ, the assembly of the Jews showed no beneficent love for Thee, but bearing thorns they crowned Thee, the Author of our race, who hath abolished the punishment of tares.`,
              `O Giver of life, without falling Thou, O sinless One, didst descend into the pit and raise me up who had fallen. Thou didst endure the stench of my corruption unsullied, and hath made me sweet-smelling with the myrrh of Thy divine nature.`,
            ],
            theotokion: `The curse hath been abolished, and sorrow hath ceased, for the blessed one, Full of grace, hath made joy dawn upon the faithful, bringing forth a flower, Christ, as a blessing unto all the ends of the earth.`,
          },
          3: {
            irmos: `By Thy command Thou didst establish the earth upon nothing | and suspended it unsupported; | do Thou establish Thy Church on the unshakeable rock of Thy commandments, O Christ, | Who alone art good | and the Lover of mankind.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Unto Thee O Christ, Who didst work the wondrous miracle in the wilderness, did the ungrateful children of Israel, who had suckled honey from the rocks, offer gall, and in exchange for Thy deeds of goodness they offered Thee vinegar instead of manna.`,
              `They who of old were protected by a cloud of light, laid Christ, who is Life, in a tomb; but by Thine own power Thou didst arise and grant unto all the faithful the effulgence of the Spirit, which doth mystically overshadow them from above.`,
            ],
            theotokion: `Without wedlock and without the pain of childbirth thou hast become the Mother of Him Who shone forth from the incorrupt Father through thee; Since thou didst bear the Word made flesh, with Orthodox belief we proclaim thee to be the Theotokos.`,
          },
          4: {
            irmos: `Habbakuk, prophetically apprehending | Thy divine self-emptying, O Christ, | cried out to Thee with trembling: | Thou hast come for the salvation of Thy people; | to save Thine anointed ones.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O good One, Through wood Thou didst sweeten the bitter waters of Mara as if in an icon prefiguring Thine immaculate Cross, the wood which doth rectify the bitter taste of sin.`,
              `Thou didst accept, O my Savior, a Cross in place of the tree of knowledge of good and evil, and gall for sweet provender; while for the corruption of death Thou didst shed Thy divine blood.`,
            ],
            theotokion: `Without wedlock and without corruption didst thou conceive in thy womb, and in giving birth without the pangs of labor, thou didst bare God in the flesh, and after giving birth remained a virgin.`,
          },
          5: {
            irmos: `O Thou Who hast clothed Thyself in light as with a garment, | I rise early unto Thee and cry out to Thee: | Enlighten my darkened soul, O Christ, | in that Thou alone art compassionate!`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The Lord of glory in a form without glory, hath been voluntarily hung dishonored upon the Tree, and thus hath ineffably procured for me divine glory.`,
              `Thou, O Christ, hast clothed me with incorruption, having incorruptibly tasted the corruption of death in the flesh, and didst dawn forth from the grave on the third day.`,
            ],
            theotokion: `Having given birth without seed to Christ, who is our justice and redemption, O Theotokos, thou hast freed our forefather's nature from the curse.`,
          },
          6: {
            irmos: `Calm the raging sea of the passions, | O Master Christ, | with its soul-destroying tempest, | and lead me up from corruption | in that Thou art compassionate.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `The ancestor of mankind, O Master Christ, descended into corruption through tasting of the forbidden fruit, but was restored to life through Thy Passion.`,
              `Thou, who art Life, didst descend into Hades, O Master Christ, and by becoming corruption to the corrupter, through death Thou hast become the Source of the resurrection.`,
            ],
            theotokion: `The Virgin hath given birth to a Child and after child-birth remained pure, and as a truly virgin Mother, cradled Him Who holdeth all things in His hands.`,
          },
          7: {
            irmos: `The supremely exalted Lord of our fathers | quenched the flame, | and bedewed the youths | as they chanted in harmony: | O God, blessed art Thou!`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `Wrapped in flesh, like unto bait draping a hook, Thou didst hurl down the serpent by Thy divine power raising up those who cry: "O God, blessed art Thou!"`,
              `The uncircumscribed One, who hath brought into being the boundless creation of the universe, is hidden in the flesh in a tomb. To Him we all sing: "O God, blessed art Thou!"`,
            ],
            theotokion: `O all-immaculate one, thou hast borne in one Hypostasis two natures, God incarnate. To Him we all sing: "O God, blessed art Thou!"`,
          },
          8: {
            irmos: `Unto Thee the Fashioner of all, | the children in the furnace chanted a hymn: | All ye works of the Lord, | supremely exalt Him throughout all ages.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `As if it was not willed by Thee, Thou didst pray that the cup of Thy saving Passion might pass; revealing thereby that Thou dost bear two wills, O Christ, corresponding to Thy two natures, throughout the ages.`,
              `At Thy descent, O Christ, Hades became an object of derision disgorging all those who of old had been slain by the devil's deception and who now supremely exalt Thee throughout all ages.`,
            ],
            theotokion: `O Virgin, who beyond all understanding hath, by the Word, given birth to the Lord as both God and man, and yet remained a virgin, all we His works bless thee and supremely exalt thee throughout all ages.`,
          },
          9: {
            irmos: `O Isaiah, rejoice and be glad! | The Virgin hath conceived in her womb, | and hath borne a Son, Emmanuel, | Who is both God and man; | and Orient is His name; | Him we magnify, and the Virgin we call blessed.`,
            refrain: `Glory to Thy holy Resurrection O Lord.`,
            troparia: [
              `O Master Christ, Thou hast assumed the nature of fallen mankind, and become wholly joined to him from a virgin womb, but alone not sharing in sin, and Thou hast freed the whole of him from corruption by Thine undefiled Passion.`,
              `O Master Christ God, by the blood which flowed from Thine immaculate and life-giving side, sacrifice to idols hath ceased, and all the earth doth offer Thee the sacrifice of praise.`,
            ],
            theotokion: `The pure and holy maiden did not reveal God without a body, nor yet a mere man, but both a perfect man and in truth perfect God, Whom we magnify together with the Father and the Spirit.`,
          },
        },
      },

      cross_resurrection: {
        refrain: `Glory to Thy precious Cross and Resurrection O Lord.`,
        odes: {
          1: {
            troparia: [
              `Unto Him who hath been willingly nailed upon the Cross, and through the Cross freed the fallen one from the ancient curse, to Him alone let us sing, for He is glorified.`,
              `Unto Christ, the dead One, who hath risen from the tomb and raised together with Himself the fallen one and adorned him by seating him with the Father, to Him alone let us sing, for He is glorified.`,
            ],
            theotokion: `O Immaculate Mother of God, we beseech thee to unceasingly implore God who was incarnate from thee, yet never absent from His Father's bosom, to save those whom He hath fashioned from every besetting calamity.`,
          },
          3: {
            troparia: [
              `Thou hast arisen from the tomb, O Christ, giver of life, delivering from the corruption of death those who hymn Thy voluntary crucifixion.`,
              `The myrrh-bearing women were hastening to anoint Thy body, O Christ, and not finding it they returned hymning Thine arising.`,
            ],
            theotokion: `O pure one, without ceasing implore the One who became incarnate from thy loins that those who hymn thee, O pure Virgin, may be delivered from the snares of the devil.`,
          },
          4: {
            troparia: [
              `When the Cross was fixed upon the earth on Golgotha, the bars of Hades were smashed and the eternal gate-keepers cried aloud: "Glory to Thy power, O Lord!"`,
              `When the Savior descended to those in bonds as one dead, the dead from all ages arose with Him and cried aloud: "Glory to Thy power, O Lord!"`,
            ],
            theotokion: `The Virgin hath given birth without knowing the birth-pangs of a mother, but a mother hath she been shown to be and a virgin hath she remained; wherefore hymning her we cry: "Rejoice!, O Theotokos!"`,
          },
          5: {
            troparia: [
              `Thine hands outstretched upon the Tree, O our Savior, Thou didst call all to Thyself as Thou art the Lover of mankind.`,
              `Thou hast despoiled Hades, O my Savior, and by Thy burial and Thy Resurrection, Thou hast filled all things with joy.`,
              `Having arisen from tomb on the third day, Thou hast rendered all immortal and incorrupt.`,
            ],
            theotokion: `We sing thy praises as a Virgin after child-birth, O Theotokos; for thou hast borne unto all the world, God the Word in the flesh.`,
          },
          6: {
            troparia: [
              `Thou hast stretched out Thy hands, gathering together the nations, separated far from Thee, O Christ our God, by Thy life-bearing Cross, for Thou art the Lover of mankind.`,
              `Thou hast despoiled death and shattered the gates of Hades; while Adam, released from his chains, crieth out to Thee: "Thy right hand hath saved me, O Lord!"`,
            ],
            theotokion: `O Mary, thou praise of the Orthodox, we fittingly glorify thee as the bush that remained unburnt, the mountain and the living ladder, and the gate of heaven.`,
          },
          7: {
            troparia: [
              `Thou hast destroyed the deception of idols through the tree of the Cross; O God of our fathers, blessed art Thou.`,
              `Thou didst arise from the dead, and with Thee, Thou hast raised those in Hades; O God of our fathers, blessed art Thou.`,
            ],
            theotokion: `Thou wast born of a Virgin, and revealed her to be the Theotokos; O God of our fathers, blessed art Thou.`,
          },
          8: {
            troparia: [
              `Christ God, who willingly stretched forth His hands upon the Cross and thereby hath broken open the bonds of death; praise Him, ye priests, and ye peoples supremely exalt Him, throughout all ages.`,
              `Christ God, who didst dawn from the tomb like a bridegroom, appearing to the myrrh-bearing women and proclaiming unto them the tidings of great joy; praise Him, ye priests, and ye peoples supremely exalt Him, throughout all ages.`,
            ],
            theotokion: `Thou hast been revealed, O pure Theotokos, as higher than the cherubim, for within thy womb thou didst carry Him who rideth upon them. With the bodiless powers we mortals glorify Him, throughout all ages.`,
          },
          9: {
            troparia: [
              `Thou didst endure sufferings on the Cross and by Thy death Thou didst destroy the power of Hades; with Orthodox belief we the faithful magnify Thee.`,
              `Thou didst arise from the tomb on the third day, despoiling Hades and enlightening the world; we the faithful with one mind magnify Thee.`,
            ],
            theotokion: `Rejoice!, O God-bearer, Mother of Christ God; beseech Him Whom thou didst bear to grant remission of sins unto those who hymn thee with faith.`,
          },
        },
      },

      theotokos: {
        refrain: `Most holy Theotokos save us.`,
        odes: {
          1: { troparia: [
            `O all-immaculate one, implore Christ, the light who dwelt within thee and Who hath enlightened the world with the rays of His Godhead, to enlighten all those who hymn thee, O Virgin Theotokos.`,
            `O thou who art Full of grace, and art made fair by the beauty of the virtues, thou hast received by the overshadowing of the Spirit the comeliness that bestoweth beauty, O most pure one, and which maketh the universe radiant.`,
            `O Virgin, the bush on Sinai foreshadowing thee of old, was not consumed though mingled with fire; for beyond understanding as a Virgin thou didst bear a Child and yet remain a virgin, O Virgin Mother.`,
          ] },
          3: { troparia: [
            `Thou hast now most clearly been revealed, O honored Virgin, to be the ladder by which the Most High came down to restore corrupted nature. For through thee the supremely good One was well-pleased to be joined to the world.`,
            `God, Who of old prefigured the mystery of the Virgin, and Who knoweth all things, even from before the ages, hath in these last days sent His Offspring and revealed Him taking His dwelling within thy womb, O all-immaculate one.`,
            `The condemnation of the ancient curse hath been absolved through thee, O most pure Virgin, for in His exceeding goodness the Lord, having come forth from thee, hath poured forth His blessings upon all, O praise-worthy one.`,
          ] },
          4: { troparia: [
            `Devoutly confessing thee with heart, mind, soul and voice, as truly the Theotokos, O pure Virgin, I thereby gather the fruit of salvation and am saved by thine intercessions.`,
            `He that created the universe from nothing, hath been well-pleased as a Benefactor to be fashioned from thee, O pure one, for the salvation of those who with faith and love hymn thee, O all-immaculate one.`,
            `The choirs beyond this world hymn thine Offspring, O all-immaculate One, rejoicing at the salvation of those who believe thee to be the true Theotokos, O Virgin undefiled.`,
            `Isaiah named thee the staff from which, for our sakes, hath sprung forth a fair Flower, Christ God, for the salvation of those who with faith and love have recourse unto thy protection.`,
          ] },
          5: { troparia: [
            `All the prophets clearly announced thee beforehand, O all-honored Theotokos; for thou alone, O pure one, wast found to be wholly immaculate.`,
            `O most pure one, we acknowledge thee to be the illumined cloud of living Water which hath rained down upon us, thy despairing people, Christ the Shower of incorruption.`,
            `God, Who alone is compassionate dwelt within thee, and loved thee as one close to Him. O thou wholly good and immaculate one, sealing thy purity with virginity.`,
          ] },
          6: { troparia: [
            `When He who is the cause of all, by giving existence to all, took flesh like unto our flesh, He had thee as the cause of this wonder, O all-immaculate Theotokos.`,
            `We know thee, O all-immaculate one, to be a source brimming with life-giving healing for those who with faith have recourse to thy far-famed protection, O Sovereign Lady.`,
            `For us thou didst bring forth the Giver of life, the Source of our salvation, Who bestoweth eternal redemption upon those who proclaim thee to be the true Theotokos.`,
          ] },
          7: { troparia: [
            `The uncircumscribed One, who remaineth unchanged, was, since He is compassionate, hypostatically united to flesh within thee the most holy one. He Who is the only blessed God of our fathers.`,
            `O Sovereign Lady, Theotokos, with one voice we glorify thee, the all-immaculate Bride and throne of thy Creator; to Him we all sing: "Blessed art Thou, O God."`,
            `Made pure by the Spirit, O Virgin, thou didst become the Mother of the King of all, who hath fashioned thee; to Him we all sing: "Blessed art Thou, O God."`,
            `The Lord saved me, O all-immaculate Theotokos, having clothed Himself in the garment of the flesh He took from thee; to Him do we all chant: "Blessed art Thou, O God."`,
          ] },
          8: { troparia: [
            `The grief of the first-parents hath now ceased, since thou, God's Mother, hast given birth to joy; wherefore we unceasingly hymn thee, O Virgin, and supremely exalt thee throughout all ages.`,
            `The hosts of the bodiless powers sing the praises of thine incomprehensible child-bearing with us, O Virgin; with one voice and with love we, with them, supremely exalt thy child-bearing throughout all ages.`,
            `A translucent stream of immortality hath issued forth from thee, O maiden, the Lord of all, Who cleanseth away the filth of sin from those who hymn thee with faith, and who supremely exalt thee throughout all ages.`,
            `We confess thee, O Virgin, to be in truth, a divine and radiant throne, and a tabernacle of grace, for thou didst receive the Word of the Father; whom we supremely exalt throughout all ages.`,
          ] },
          9: { troparia: [
            `O Ever-virgin Theotokos, from thy pure blood the flesh of the Creator and only-begotten Son of the Father was nurtured in a manner beyond nature, not from a man, and without seed, yet possessing both a mind and a soul.`,
            `Thou didst halt the unrestrained stream of death, when beyond telling, thou didst in truth give birth in the flesh to life eternal; for Hades, consuming it with its bitter mouth, hath been destroyed.`,
            `Seated on His royal throne as Lord, thy Son hath placed thee on His right hand, shining radiantly in tasseled gold, and in divine virtues, bestowing upon thee the honor due His Mother, O all-immaculate one.`,
            `Thy childbirth is beyond telling, O Mother of God, for without a man hast thou conceived, and in a virginal manner hast thou delivered God; wherefore magnifying Him, we glorify thee, O Theotokos.`,
          ] },
        },
      },
    },

    ikos: `When the women heard the angel's words, they cast away their lamentation and became radiantly joyful, trembling as they beheld the Resurrection. Christ drew near to them saying "Come and see, Rejoice! take courage, I have overcome the world and set free the prisoners held in the bondage of Hades. Hurry then to the disciples, and take unto them this message: Lo, I go before you to preach in the cities of Galilee." Wherefore we all cry unto Thee: Save us, O Lord!`,

    // Praises — 8 Resurrection stichera. Glory = Eothinon Gospel sticheron (by Gospel #,
    // tone-independent); Both-now = fixed "Thou art most blessed" theotokion (Tone II) —
    // neither stored here, per Tones 1–4.
    praises: {
      stichera: [
        { verse: `To do among them the judgment that is written, | This glory shall be to all His saints.`,
          text:  `O Lord, while the grave was sealed by lawless men, | Thou didst come forth from the tomb | in a manner similar to Thy birth from the Theotokos. | Thy bodiless angels could not fathom the event of Thine incarnation, | likewise the soldiers guarding Thee could not know when Thou didst arise. | For the full knowledge of both events hath been sealed from those who would inquire, | but the wonder of these events hath been revealed to those who with faith | worship the mystery which we hymn; // grant unto us joy and great mercy.` },
        { verse: `Praise ye God in His saints, | praise Him in the firmament of His power.`,
          text:  `O Lord, having smashed the eternal bars and burst asunder the bonds of Hades, | Thou didst arise from the tomb, | leaving Thy grave clothes behind in testimony of Thy three day burial. | Whereupon Thou didst go forth into Galilee, | while yet being guarded in a cave. | Great is Thy mercy, O Savior, and beyond understanding; // have mercy upon us.` },
        { verse: `Praise Him for His mighty acts, | praise Him according to the multitude of His greatness.`,
          text:  `O Lord, the women ran unto Thy tomb to see Thee, | the Christ who had suffered for our sakes. | Approaching the tomb they found an angel seated upon the stone, which had rolled back from fear, | and he cried unto them saying. | "The Lord hath arisen; go tell His disciples that He is risen, saving your souls."` },
        { verse: `Praise Him with the sound of trumpet, | praise Him with the psaltery and harp.`,
          text:  `O Lord, in a manner similar to that | by which Thou didst come forth from the sealed tomb, | Thou didst enter in unto Thy disciples when the doors were shut, | showing them Thy body's sufferings, | O long-suffering Savior, | which Thou didst willingly endure. | As One who hath sprung forth from the seed of David, | Thou didst endure wounds, | but as One who didst spring forth from God, | even the Son of God | Thou hast delivered the world. | Incomprehensible and great is Thy mercy, // O Savior, have mercy on us.` },
        { verse: `Praise Him with timbrel and dance, | praise Him with strings and flute.`,
          text:  `O Lord, and King of the ages, | Creator of all things, | Who for our sake willingly endured crucifixion and burial in the flesh, | in order to free us all from Hades, | Thou art our God and we know no other besides Thee.` },
        { verse: `Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. | Let every breath praise the Lord.`,
          text:  `O Lord, who will recount Thine awe-inspiring wonders? | Who will confess Thy dread mysteries? | For, becoming incarnate for us, as Thou Thyself didst will, | Thou hast manifest the might of Thy power; | For on Thy Cross Thou didst open paradise to the thief, | and in Thy burial Thou didst smash the bars of Hades, | and with Thy Resurrection Thou hast enriched all things. | O compassionate Lord, glory be to Thee!` },
        { verse: `Arise, O Lord my God, let Thy hands be lifted high; | forget not Thy paupers to the end.`,
          text:  `The myrrh-bearing women coming to Thy tomb in the deep of morning | seeking to anoint with spices the Immortal Word and God; | and being informed by the words of the angel | returned with joy to tell the apostles | that Thou O Lord, the Life of all, hast arisen, // granting the world forgiveness and great mercy.` },
        { verse: `I will confess Thee, O Lord, with my whole heart, | I will tell of all Thy wonders.`,
          text:  `The guards of the tomb which received God said unto the Jews: | "O the folly of your plan! | In vain did ye labor when you thought to guard Him who cannot be circumscribed." | "Openly you appeared wishing to hide the Resurrection of the crucified One. | O the folly of your assembly!" | "Why do ye again wish to hide that which cannot be hidden?" | "Rather listen to us, | and be willing to believe the truth of what hath taken place." | "A radiant angel came down from heaven and rolled away the stone; | from fear of Him ye became as dead men," | and calling out to the brave myrrh-bearing women the angel said: | "Do ye not see the death of the guards, | the breaking of the seals and the emptying of Hades? | Why seek ye as a mortal man, | the One who hath destroyed Hades' victory | and smashed death's sting? | Go quickly and proclaim to the apostles | the good tidings of the Resurrection, crying fearlessly: | He hath risen indeed, // the Lord who hath great mercy!"` },
      ],
    },

    great_doxology_troparion: `Today is salvation come unto the world; | let us sing praises to Him that arose from the tomb, | and is the Author of our life. | For, having destroyed death by death, // He hath given us the victory and great mercy.`,
  },

};
