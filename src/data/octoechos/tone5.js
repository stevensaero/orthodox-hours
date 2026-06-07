// src/data/octoechos/tone5.js
// Tone 5 Octoechos data — lazy-loaded on demand.
// Source: St. Sergius Sunday Octoechos, tone5/ Drive folder.
// Phase 1: vespers data migrated from hours-tool.jsx OCTOECHOS_VESPERS[5].
// Phase 3: matins data to be encoded from N-1.pdf (Saturday Eve + Sunday Matins).

export default {

  // ── VESPERS ────────────────────────────────────────────────────────────────
  // Migrated from OCTOECHOS_VESPERS[5] in hours-tool.jsx (Phase 1).
  // Days: sat, sun_eve, mon, tue, wed, thu, fri
  // Universal (tone-0) aposticha verses also included for assembler lookups.
  vespers: {  // Tone 5
    sat: {
      lic: [
        `By Thy precious Cross, O Christ, Thou hast shamed the devil, and by Thy Resurrection Thou hast blunted the sting of sin, and saved us from the gates of death: we glorify Thee, the only-begotten One.`,
        `He who hath granted Resurrection to mankind, was led as a sheep to the slaughter; the princes of Hades trembled before Him and the gates of lamentations were lifted up; for Christ the King of glory entered therein, saying to those in bondage: "Come forth!" and to those in darkness: "Reveal yourselves!"`,
        `O great wonder! Having suffered in the flesh through His love for mankind, the Creator of all things visible and invisible, hath arisen as immortal. Come O ye descendents of the nations, let us worship Him; for delivered from deception by His compassion, we have learned to hymn one God in three Hypostases.`,
        `We offer unto Thee our evening worship, O never-setting Light, who in the flesh at the end of the ages, as in a mirror, shone through upon the world, and descended even into Hades, dispersing the darkness therein and showing unto the nations the light of the Resurrection. O Lord, Giver of light, glory be to Thee!`,
        `Let us glorify Christ the Author of our salvation; for by His arising from the dead, the world hath been saved from delusion; the choir of angels rejoiceth, the deception of demons fleeth, fallen Adam hath arisen, and the devil hath been overthrown.`,
        `The watchmen were instructed by the lawless ones to conceal Christ's Resurrection, taking money to say that "while we slept the corpse was stolen from the grave." Who ever saw, or who ever heard of a corpse being stolen? Especially one anointed yet naked, and with its grave-clothes left in the tomb? Be not deceived, O ye Jews, learn from the sayings of the prophets, and know that He is truly the Redeemer of the world and All-powerful.`,
        `O Lord, our Savior, Thou hast despoiled Hades and trampled upon death; enlightening the world by the precious Cross, have mercy upon us.`
      ],
      aposticha: [
        `With voices of song we magnify Thee, O Christ, the Savior incarnate, yet not separated from heaven, for as the Lord who lovest mankind Thou hast suffered the Cross and death for the sake of our race, overthrowing the gates of Hades, and rising on the third day, thus saving our souls.`,
        `When Thy side was pierced, O Giver of life, Thou didst pour forth streams of forgiveness, of life and salvation for all; Thou didst suffer death in the flesh, granting unto us immortality, and by dwelling in a grave Thou hast freed us, gloriously raising us up with Thyself as God; wherefore we cry out to Thee: "O Lord, Lover of mankind, glory be to Thee!"`,
        `Wonderful is Thy crucifixion and Thy descent into Hades, O Lover of mankind, for having despoiled it and as God gloriously raising with Thyself those who were captive therein, Thou hast opened paradise and bidden them welcome. So too grant unto us who glorify Thine arising on the third day, the forgiveness of our sins, making us worthy to be inhabitants of paradise, as Thou alone art compassionate.`,
        `O Lover of mankind, Who for our sake didst accept to suffer the Passion in the flesh, and arise from the dead on the third day, heal the passions of our flesh, and raise us up from our grievous transgressions, and save us.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `In the Red Sea of old an image of the Bride who knew not wedlock was depicted. There Moses was the one who parted the sea, here Gabriel is the minister of the miracle. At that time Israel marched dry-shod through the deep, now the Virgin doth seedlessly give birth to Christ. The sea after Israel's passage remained impassable; the immaculate one after bearing Emmanuel remained incorrupt. O God, Who doth exist and is pre-eternal, and hath appeared as man, have mercy upon us.`
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
  // STUB — to be encoded in Phase 3 from Drive: Octoechos/tone5/N-1.pdf
  // (Saturday Evening + Sunday Matins PDF for Tone 5)
  matins: {},

};
