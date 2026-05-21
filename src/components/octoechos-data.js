// Octoechos Vespers Stichera — all 8 tones
// Generated from octoechos_vespers.txt
// Source: St. Sergius Octoechos PDFs
//
// Structure: OCTOECHOS_VESPERS[tone][day]
// tone: 0 (universal verses) | 1–8
// day: sat | sun_eve | mon | tue | wed | thu | fri
// Fields per day:
//   lic: string[]           — Lord I Have Cried stichera (3 weekday, 7 Saturday)
//   aposticha: string[]     — Aposticha stichera
//   aposticha_glory: string — Glory sticheron (Saturday: Menaion-supplied)
//   dogmatikon: string      — Saturday Both Now (tone dogmatikon)
//   lic_dogmatikon: string  — Friday Both Now (tone dogmatikon)
//
// FW: Move to public/data/octoechos-data.js and fetch at runtime
//     when JSX file size becomes a concern.

export const OCTOECHOS_VESPERS = {
  0: {  // universal fixed verses
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
  1: {  // Tone 1
    sat: {
      lic: [
        `Receive our evening prayers, O Holy Lord, and grant us remission of sins; because Thou alone hast revealed the Resurrection to the world.`,
        `Go around Zion, O ye peoples, and encompass her, and give glory to him who in her midst hath arisen from the dead; for he is our God, and hath delivered us from our iniquities.`,
        `Come O ye peoples, let us hymn and worship Christ glorifying his Resurrection from the dead: for he is our God, who hath redeemed the world from the deception of the adversary.`,
        `Rejoice, O ye heavens! Sound the trumpets O ye foundations of the earth! O ye mountains thunder forth your joy! for behold, Emmanuel hath nailed our sins to the Cross, and the giver of life, hath slain death raising up Adam, as He alone is the Lover of mankind.`,
        `Let us sing the praise of him who was willingly crucified in the flesh for our sakes, suffered and was buried, and arose from the dead, as we cry: Establish Thy Church in Orthodox belief, O Christ, and grant peace unto our lives, as Thou alone art good and the Lover of mankind.`,
        `As we the unworthy ones stand before Thy life-bearing tomb we offer a hymn of glory to thine ineffable compassion, O Christ our God; because Thou didst accept the Cross and death, O sinless one, that Thou mightest grant resurrection to the world, as Thou alone lovest mankind.`,
        `Let us sing the praises of the Word, without beginning and co-eternal, with the Father, who came forth ineffably from a virgin womb, willingly accepting the Cross and Death for our sake and arose in glory, wherefore we cry aloud: Giver of life, O Lord, glory be to thee, the Savior of our souls.`
      ],
      aposticha: [
        `By Thy Passion, O Christ, we have been set free from passions, and by Thy Resurrection we have been delivered from corruption. O Lord, glory be to thee.`,
        `All ye His creation rejoice! let the heavens be glad, let the nations clap their hands with gladness; for Christ our Savior hath nailed our sins to the Cross and by slaying death hath granted us life eternal, raising all of the fallen race of Adam, as he alone is the Lover of mankind.`,
        `Being the King of heaven and earth, O Incomprehensible one, Thou wast willingly crucified through Thy love for mankind; when Hades met thee he was vexed, while the souls of the righteous receiving thee below rejoiced, and Adam, seeing thee his Creator in the nethermost regions, rose again. O the wonder! How did the life of all taste death? Except that he wished to enlighten the world, which crieth out saying: O Thou who didst arise from the dead, O Lord glory be to thee!`,
        `Carrying sweet spices the myrrh-bearing women reached Thy tomb with haste, lamenting; and not finding Thy most pure Body, but learning from the angel the new and marvelous wonder, spake unto the apostles saying: The Lord hath arisen, granting the world His great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Let us hymn the whole world's glory, who sprang forth from mankind and who gave birth to the Master, the Portal of heaven, Mary the Virgin, the hymn of the Bodiless Powers and adornment of the faithful; for she hath been revealed as the Heaven and Temple of the Godhead. By destroying the middle wall, she hath brought forth peace, and opened wide the Kingdom. Therefore, holding fast to her as a firm confirmation of the faith, we have as our champion the Lord born from her. Take courage therefore, take courage, O ye people of God; for as the Invincible one he shall conquer our adversaries.`
    },
    sun_eve: {
      lic: [
        `In Thy goodness, O Lord, Thou didst bring all things about by Thy Word and Spirit, and didst also create me a reason-endowed living thing, that I might glorify Thine omnipotent name. But, more than any, I ever act dishonorably by my shameful deeds; yet have pity on me, I pray.`,
        `I recognize thy divine nobility and the incorrupt homeland, O wretched soul, and I ever strive to attain them by goodly deeds. Let naught that is corrupt captivate me. Thou art my higher part, while the body is earth and corrupteth. Let not what is baser overcome that which is higher.`,
        `Go thou to the supremely good One, O all-accursed soul; approach Him with fervent tears; before thy condemnation confess all things that thou hast done; and render thy Creator merciful to thee, O wretched one. Beg forgiveness, lest the Lord shut the door to thee.`
      ],
      aposticha: [
        `Great is the abyss of my many transgressions, O Savior, and I sink grievously because of mine offenses. Grant me Thy hand, as Thou didst to Peter, O God. Save me, and have mercy upon me!`,
        `In that I have been condemned for wicked thoughts and deeds, O Savior, grant me the thought of returning to Thee, O God, that I may cry aloud: Save me, O good Benefactor, and have mercy upon me!`,
        `Through the prayers of all the saints and the Theotokos, O Lord, grant us Thy peace, and have mercy upon us, in that Thou alone art compassionate.`
      ],
      aposticha_glory: `Joy of the ranks of heaven, and mighty intercession for mankind on earth, O most pure Virgin: save us who have recourse unto thee, for in thee, after God, have we placed our hope, O Theotokos.`
    },
    mon: {
      lic: [
        `My whole life have I shamefully squandered with harlots, wretch that I am O Lord, but like the prodigal I cry out with compunction: O heavenly Father, I have sinned! Cleanse Thou and save me, and reject me not who have withdrawn far from Thee, and am now beggared because of my fruitless deeds.`,
        `O Christ Who art rich, in impoverishing Thyself Thou hast enriched mankind with immortality and radiance. Wherefore, with the virtues enrich me who have been impoverished by the pleasures of life, and number me with the pauper Lazarus, rescuing me from the torment of the rich man and Gehenna, which lie before me.`,
        `I have sorely enriched myself with evil, I have loved food, and preferred the good things of this life, and am condemned to Gehenna, O Lord. My starving mind have I disdained, as the rich man did Lazarus. Have pity on me, who have been cast away from the doors of Thy divine works, O Lord.`
      ],
      aposticha: [
        `Great is the abyss of my many transgressions, O Savior, and I am grievously engulfed because of mine offenses. Grant me Thy hand, as Thou didst to Peter, O God. Save me, and have mercy upon me!`,
        `In that I have been condemned for wicked thoughts and deeds, O Savior, grant me the thought of returning to Thee, O God, that I may cry aloud: Save me, O good Benefactor, and have mercy upon me!`,
        `The confession ye made before the tribunal reviled the power of the demons, and freed mankind from delusion, O saints. Wherefore, when ye were beheaded ye cried aloud: O Lord, may the sacrifice of our lives be well-pleasing to Thee, for having loved Thee, we have spurned this transitory life, O Lover of mankind.`
      ],
      aposticha_glory: `O all-hymned Virgin, in whom Moses beheld a mystery with prophetic eyes the bush that burned yet remained unconsumed; for the fire of the Godhead did not burn thy womb, O pure one. Wherefore, we beseech thee, as the Mother of our God: beg thou peace and great mercy for the world.`
    },
    tue: {
      lic: [
        `Nailed to the Cross as a man, O Christ God, Thou didst deify human nature and slay the serpent, the author of evil. Becoming accursed in that Thou art compassionate, Thou didst free us from the curse which hath its origin in the tree. And Thou didst come that Thou mightest give blessing and great mercy unto all.`,
        `Though Thou art exalted far above all honor, O Master, Thou didst deign to be dishonored, enduring a violent death upon the Tree, that when Thou didst die in the flesh, O Almighty, through it the race of mankind might embrace immortality and receive again its primal life.`,
        `O most precious Cross, purification of all the faithful, sanctify all who bow down before thee and glorify Christ, Who stretched out His most pure hands upon thee in His ineffable loving-kindness, and Who hath gathered together all the ends of the earth.`
      ],
      aposticha: [
        `The Cross was set up on Golgotha, and hath blossomed forth immortality for us from the ever-flowing fountain of the Savior's side.`,
        `The precious Cross of the Savior is for us an indestructible rampart; for, placing our trust therein, we all are saved.`,
        `O how good was your barter, O saints! For ye traded your blood and inherited heavenly things; and having undergone trials for a time, ye rejoice everlastingly. Of a truth your commerce was good! For, having forsaken corruptible things, ye received those things which were incorrupt; and joining chorus with the angels, ye unceasingly hymn the consubstantial Trinity.`
      ],
      aposticha_glory: `Upon beholding the Lamb lifted up upon the Cross, the immaculate Virgin cried aloud, weeping: O my Child most sweet, what is this new and most glorious sight? How is it that Thou Who holdest all things in Thy hand hast been nailed to the Tree in the flesh?`
    },
    wed: {
      lic: [
        `O glorious apostles, divinely chosen disciples of Christ, teachers of the whole world, who found the Lord God, Who is the Mediator between God and mankind: Unto Him did ye cleave in godliness, and throughout the world ye manifestly preached Him as God and as a supremely perfect man.`,
        `O most wise apostles, divinely chosen disciples of Christ, teachers of the whole world: By your prayers strengthen me, that I may obey the teachings of God; and ever help me to walk the narrow path, that I may achieve a most spacious rest in paradise.`,
        `I hymn as eyewitnesses and preachers of the Word Peter the first enthroned, Paul and James, Andrew and Philip, Simon, Bartholomew and Thomas, Matthew and John, and Mark and Luke who recorded the Gospels, who with the seventy others are the divinely chosen choir.`
      ],
      aposticha: [
        `The harmonious harp of the apostles, played by the Holy Spirit, abolished the abominable sacrifices of the demons; and, proclaiming the one Lord, it hath delivered the nations from the delusion of idolatry, and taught them to worship the consubstantial Trinity.`,
        `Together let us praise Peter and Paul, Luke and Matthew, Mark and John, Andrew and Thomas, Bartholomew and Simon the Canaite, James and Philip; and let us laud the whole choir of the disciples, as is meet.`,
        `O all-famed martyrs, the earth did not hide you, but heaven received you, and unto you were opened the gates of paradise. And since ye have entered therein, ye delight in the tree of life. Pray ye unto Christ, that He grant our souls peace and great mercy.`
      ],
      aposticha_glory: `Rejoice, O Virgin, thou joy of the forefathers, gladness of the apostles and martyrs, and protection of us thy servants!`
    },
    thu: {
      lic: [
        `Thou didst stretch forth Thy most pure hands upon the Cross, O Christ, summoning those who had departed far from Thee and settling them near Thyself; wherefore, I pray to Thee: Unite me to Thee, though I have been made captive by the passions, and grant unto me the repentance which washeth away all the defilement of the passions.`,
        `Thou didst uplift Thy most pure hands upon the Tree, O Christ, and didst bloody Thy fingers, desiring to deliver Adam, the work of Thy divine hands, who because of disobedience was held fast in the realm of death, O Lover of mankind; and Thou didst raise him up by Thine authority, O Almighty.`,
        `Thou didst endure suffering for our sake, O Savior Who art immutable by nature and dispassionate in Thy divinity; and Thou wast crucified with thieves, O sinless and beginningless Christ. The sun, unable to bear the audacity, dimmed its rays, and the whole earth quaked, acknowledging Thee to be the Creator of the world.`
      ],
      aposticha: [
        `The Cross was set up on Golgotha, and blossomed forth immortality for us from the ever-flowing fountain of the Savior's side.`,
        `The precious Cross of the Savior is for us an indestructible rampart; for, placing our trust in it, we all are saved.`,
        `By the supplications of all the saints and the Theotokos, O Lord, grant us peace, and have mercy upon us, in that Thou alone art compassionate.`
      ],
      aposticha_glory: `Upon beholding Thine unjust slaying, O Christ, the Virgin, cried out to Thee, weeping: O my sweetest Child! How is it that Thou diest unjustly? How is it that Thou Who hast suspended the whole earth upon the waters dost hang upon the Tree? Leave me not alone who am Thy Mother and handmaiden, I pray, O greatly merciful Benefactor!`
    },
    fri: {
      lic: [
        `The triumphal solemnity of the martyrs drowned a multitude of the demons in the streams of their blood, caused all the abominable sacrifices to cease, and set at naught the deception of the idols, for they suffered patiently. And they now entreat Christ to grant our souls peace and great mercy.`,
        `With wise words and doctrines the most sacred pastors taught all to glorify the threefold Godhead in Unity, divinely avoiding the commingling and division of Its Hypostases; and they now pray that peace and great mercy be granted our souls.`,
        `The company of the venerable lulled carnal desires to sleep and restrained their onslaughts, showing their life to be angelic; wherefore, they now join chorus in the habitations of heaven, entreating Christ to grant our souls peace and great mercy.`,
        `By the prayers, O Lord, of all the saints and of the Theotokos, grant us Thy peace and have mercy upon us, for Thou alone art compassionate.`,
        `The confession of faith that ye made at the tribunal, O ye saints, set at naught the strength of the demons, and set men free from error. As ye were beheaded ye cried aloud: May the sacrifice of our lives be acceptable in Thy sight, O Lord; for, desiring Thee the Lover of mankind, we have spurned this quickly passing life.`,
        `Wise was the trade that ye made, O saints! Giving your blood, and inheriting heaven as your reward; Having suffered tribulation for a time, ye now rejoice eternally. Truly wisely have ye traded: forsaking things corruptible, ye have received things incorruptible; and rejoicing with the choirs of angels ye now hymn eternally the praises of the consubstantial Trinity.`
      ],
      lic_dogmatikon: `Let us hymn the whole world's glory, who sprang forth from mankind and who gave birth to the Master, the Portal of heaven, Mary the Virgin, the hymn of the Bodiless Powers and adornment of the faithful; for she hath been revealed as the Heaven and Temple of the Godhead. By destroying the middle wall, she hath brought forth peace, and opened wide the Kingdom. Therefore, holding fast to her as a firm confirmation of the faith, we have as our champion the Lord born from her. Take courage therefore, take courage, O ye people of God; for as the Invincible one he shall conquer our adversaries.`,
      aposticha: [
        `O all-famed martyrs, the earth did not hide you, but heaven hath received you; the gates of Paradise were opened to you, and entering within ye have partaken of the tree of life. Pray ye to Christ that He grant peace and great mercy to our souls.`,
        `What sweet pleasure in this life remaineth untouched by grief? What glory endureth unchanged upon the earth? All is feebler than a shadow, more deceptive than a dream; for death in a single moment taketh away all these things. But in the light of Thy countenance, O Christ, and in the enjoyment of Thy beauty, grant rest to those whom Thou hast chosen, for Thou art the Lover of mankind.`,
        `There is none free from sin, save Thou, O immortal One. Wherefore, by Thy loving-kindness, in that Thou art a compassionate God, grant unto Thy servants a dwelling-place in the Light, with the choirs of Thine angels, and overlooking their transgressions, grant them forgiveness.`
      ],
      aposticha_glory: `Truly wondrous beyond understanding are the mighty works of thy birthgiving O Bride of God, which all the prophets proclaimed, and thy conception and birth giving are most glorious, O all-hymned one, whereby thine Offspring hath incomprehensibly and ineffably saved the world, in that He is full of loving-kindness.`
    }
  },
  2: {  // Tone 2
    sat: {
      lic: [
        `Come let us worship God the Word, begotten of the Father before all ages, incarnate of the Virgin Mary; for having endured the Cross, He was handed over for burial, as He Himself had willed, and having risen from the dead He hath saved me, the whole man, who hath gone astray.`,
        `Come let us worship God the Word, begotten of the Father before all ages, incarnate of the Virgin Mary; for having endured the Cross, He was handed over for burial, as He Himself had willed, and having risen from the dead He hath saved me, the whole man, who hath gone astray.`,
        `Christ our Savior, by nailing the record against us to the Cross hath blotted it out, and destroyed the might of death. We worship His arising on the third day.`,
        `With the archangels let us hymn the Resurrection of Christ; for He is the Redeemer and the Savior of our souls; and He is coming again with great glory and mighty power to judge the world which He hath fashioned.`,
        `An angel proclaimed Thee, the crucified and buried Master, saying to the women: Come, see where the Lord lay. For as He foretold, He hath arisen as all-powerful. Therefore we worship Thee, the only immortal One. O Christ, Giver of life, have mercy on us.`,
        `By Thy Cross Thou hast destroyed the curse of the tree; by Thy burial Thou didst slay the might of death; by Thine arising Thou hast enlightened mankind; wherefore we cry out to Thee: O Christ, our God and Benefactor, glory be to Thee!`,
        `The gates of death opened unto Thee in fear O Lord, and the gate-keepers of Hades were terrified at the sight of Thee, for Thou hast smashed the gates of brass, and crushed the bars of iron to powder, leading us out of the darkness and shadow of death rending asunder our bonds.`
      ],
      aposticha: [
        `Thy Resurrection, O Christ our Savior, hath enlightened the whole universe; and Thou hast called back Thine own creation. O all-powerful Lord, glory be to Thee!`,
        `Nullifying the curse of the tree through a Tree, O Savior, Thou didst slay the might of death by Thy burial, enlightening our race by Thine arising; wherefore we cry out to Thee: O Giver of life, Christ our God, glory be to Thee!`,
        `Appearing nailed to the Cross, O Christ, Thou hast altered the beauty of all created things; and while the soldiers showed their inhumanity by piercing Thy side with a lance, the Hebrews asked that Thy tomb be sealed, not understanding Thy power; but in Thy merciful compassion Thou didst accept burial and rise on the third day. O Lord, glory be to Thee!`,
        `For the sake of mortal mankind, O Christ Giver of life, Thou didst willingly endure the Passion; and as all-powerful Thou didst descend into Hades, snatching from the hand of the mighty one the souls of those who awaited Thy coming therein granting them to dwell in paradise instead of Hades, grant also unto us who glorify Thine arising on the third day the pardon of our iniquities and Thy great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `The shadow of the law hath passed now that grace hath come, for as the bush wrapped in flame was not consumed, so didst thou bear a Child O Virgin and remained a virgin; in place of a pillar of fire, the Sun of righteousness hath dawned, instead of Moses, Christ is come, the salvation of our souls.`
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
  3: {  // Tone 3
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
  4: {  // Tone 4
    sat: {
      lic: [
        `Unceasingly worshiping Thy life-giving Cross, O Christ God, we glorify Thy Resurrection on the third day, for through it, O all-powerful One, Thou hast renewed corrupted human nature and shown us the way to heaven, since Thou alone art good and the Lover of mankind.`,
        `By being willingly nailed to the tree of the Cross, O Savior, Thou hast abolished the penalty of the tree of disobedience; and by descending into Hades, O all-powerful One, as God Thou hast torn asunder the bonds of death. Wherefore we worship Thy Resurrection from the dead, and we cry out with joy: O all-powerful Lord, glory be to Thee!`,
        `Thou hast shattered the gates of Hades, O Lord, and by Thy death Thou hast destroyed the dominion of death; delivering mankind from corruption, granting the world life, incorruption, and great mercy.`,
        `Come O ye peoples, let us hymn the Savior's rising on the third day, whereby we were redeemed from the unbreakable bonds of Hades obtaining incorruption and life, as we cry aloud: "Thou, who wast crucified and buried and rose again, save us by Thy Resurrection, O only Lover of mankind."`,
        `Angels and mortals hymn Thine arising on the third day, O Savior, through which the ends of the inhabited world were filled with light, and we were all redeemed from the slavery of the enemy, as we cry aloud: "O life-giving, all-powerful Savior, save us by Thy Resurrection, O only Lover of mankind."`,
        `Thou hath shattered the gates of brass and smashed their bars, O Christ God, raising the fallen race of mankind; wherefore with one accord we cry unto Thee: "O Lord risen from the dead, glory be to Thee!"`,
        `O Lord, begotten from Thy Father without time and eternal; Thine incarnation from a virgin is inexpressible for man and beyond telling; and Thy descent into Hades is fearful for the devil and his angels; for having trampled upon death Thou didst arise on the third day, granting mankind incorruption and great mercy.`
      ],
      aposticha: [
        `O Lord, by ascending the Cross Thou hast wiped out our ancestral curse, and by descending into Hades Thou hast set free those enchained therein from all ages, granting incorruption to mankind; wherefore with hymns we glorify Thy life-giving and saving arising.`,
        `Hung upon a Tree, O only mighty One, Thou didst shake the whole of creation; laid in a tomb Thou hast raised those who dwelt in the tombs, granting the race of mankind incorruption and life; wherefore with hymns we glorify Thine arising on the third day.`,
        `A lawless people, O Christ, delivered Thee to Pilate, and condemned Thee to be crucified, showing themselves to be ungracious to their benefactor, but voluntarily enduring burial, by Thine own power Thou didst arise on the third day as God, granting us life everlasting and great mercy.`,
        `Reaching Thy tomb in tears the women sought Thee; and when they could not find Thee they cried aloud with grief and lamentation: Woe unto us, our Savior, the King of all, how wast Thou stolen? What place doth hold Thy life-bearing body? But an angel answered them saying: "Weep not, but go, and proclaim that the Lord hath arisen, granting us joy, for He alone is compassionate."`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Prophet David, the ancestor of God, spoke of thee in psalmody unto Him Who hath accomplished great things in thee. For God was well pleased without father to become a man from thee, the Queen who standeth at His right hand, and He - the source of life - showed thee to be His mother, that He might renew His own image, corrupted by the passions. Having found the lost sheep wandering on the mountain He hath laid it upon His shoulders, that He may bring it to his Father; and in accordance with His own will unite it to the heavenly powers and thus, O Theotokos, save the world, Christ, Who is richly and abundantly merciful.`
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
  5: {  // Tone 5
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
  6: {  // Tone 6
    sat: {
      lic: [
        `Victorious over Hades, O Christ, Thou didst ascend the Cross that Thou mightest raise up with Thyself those who sat in the darkness of death; free among the dead, Thou didst pour forth life from Thine own light. O all-powerful Savior, have mercy upon us.`,
        `Today Christ, having trampled on death, hath arisen as He foretold, granting joy to the world, that we may all shout aloud the hymn and say: O Source of life, O unapproachable Light, O all-powerful Savior, have mercy upon us.`,
        `Where shall we sinners escape Thee, O Lord, who art present in all creation? In heaven? Thou dwellest there. In Hades? There Thou didst trample on death. In the depths of the sea? Thy hand is also there O Master. To Thee we flee and falling down before Thee we implore: O Lord risen from the dead, have mercy upon us.`,
        `We boast in Thy Cross, O Christ, and we hymn and glorify Thy Resurrection; for Thou art our God; we know none other besides Thee.`,
        `Ever blessing the Lord we hymn His Resurrection; for having endured the Cross, He hath destroyed death by death.`,
        `Glory to Thy power, O Lord, for Thou hast destroyed the one that held the might of death; Thou hast renewed us through Thy Cross, granting us life and incorruption.`,
        `Thy burial, O Lord, smashed and rent asunder the bonds of Hades; Thy Resurrection from the dead hath enlightened the world. O Lord, glory be to Thee!`
      ],
      aposticha: [
        `Thy Resurrection O Christ our Savior, the angels in the heavens hymn; grant also unto us who are here on earth to glorify Thee with pure hearts.`,
        `Thou as all-powerful God hast smashed the gates of brass and shattered the bars of Hades, and Thou hast raised the fallen human race. Therefore with one accord we also cry out to Thee: O Lord, risen from the dead, glory be to Thee!`,
        `Wishing to restore us from our ancient fall, Christ wast nailed to a Cross and placed in a tomb. The myrrh-bearing women, as they sought Him with tears, said, lamenting: "Alas, O Savior of all, how is it that Thou deigned to dwell in a tomb? How is it, that Thou who willingly dwelt there, hast been stolen? How is it that Thou hast been moved? What place hath hidden Thy life-bearing body? O Master, as Thou hast promised, do Thou appear unto us, and bring to an end our grieving and our tears." But as they lamented an angel cried unto them saying: "End your lament! Go and tell the apostles that the Lord hath risen, granting the world pardon and great mercy."`,
        `Thou wast willingly crucified O Christ, and by Thy burial Thou hast despoiled death. On the third day Thou didst rise as God in glory, granting the world everlasting life and Thy great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Who doth not call thee blessed, O most holy Virgin? Who will not hymn thy most pure birthgiving? For the only-begotten Son Who hath shone forth timelessly from the Father, came forth, ineffably incarnate, from thee, O pure one; By nature He is God, by nature for our sakes, He hath become a man not divided into two Hypostases, but known in two natures without commingling. Him do thou beseech, O pure and most blessed one, that our souls find mercy!`
    },
    sun_eve: {
      lic: [
        `Through thought of contrition grant me tears of repentance, O Savior, that I may wash away the filth from my soul, which I have badly sullied, committing unrighteousness all the time, for it is for this that I have her who gave birth to Thee, and the angelic choirs, entreating Thy love for mankind.`,
        `Come, O my soul, and repent of the many sins thou hast committed in this life, and entreat the multitude of the heavenly armies with sighs and tears, that time be given thee for repentance, lest thou be sent into the most accursed fire of Gehenna like the barren fig-tree.`,
        `Not one of Thy commandments have I kept on earth. When Thou shalt sit upon Thy throne, how shall I give answer for myself, receiving condemnation for all that I have done in knowledge or in ignorance, O my Christ? Wherefore, I cry out to Thee: Through the supplications of Thy servants save me, the prodigal!`
      ],
      aposticha: [
        `At Thy dread coming, O Christ, let us not hear "I know you not." For we have set our hope upon Thee, O Savior. And even though in our neglect we have not kept Thy precepts, yet take pity on our souls, we pray.`,
        `Neither repentance nor tears have I acquired; wherefore, I beseech Thee, O Christ God: Convert me before the end, and grant me compunction, that I may be delivered from tortures.`,
        `Thy martyrs, O Lord, denied Thee not, nor did they forsake Thy commandments; by their intercessions have mercy upon us.`
      ],
      aposticha_glory: `Like the Archangel, let us the faithful hymn the bridal-chamber of heaven, the portal truly sealed: Rejoice, for whose sake hath budded forth unto us Christ the Savior of all, the Bestower of life and God! With thine arm O Lady cast down the tyrants, our godless foes, O most pure one, O thou hope of Christians!`
    },
    mon: {
      lic: [
        `Who doth not weep for me, who in intemperance have broken the commandment of the Most High? I have come to dwell in Hades instead of paradise through the sight of the sweet food which brought about death, and because of it I have become a stranger to life and the glory of God. Yet accept me the penitent, O Lord, for the sake of Thy great mercy, in that Thou art merciful and the Lover of mankind.`,
        `Behold my sorrow and pain, and the countless multitude of my transgressions, the affliction of my soul and the delusion of my mind. Attend unto the cry of one who is accursed and condemned, O Lord, and grant me a contrite spirit and a humble heart; and in Thy great mercy give me a wellspring of tears and forgiveness for my many transgressions.`,
        `O God, Who desirest that all should be saved: Look down and hearken unto my supplication, and reject not my tears as shed in vain. For who having come to Thee weeping hath not been saved straightway? Who having cried out fervently unto Thee hath not been hearkened to straightway? O Master, be Thou quick to save all who entreat Thee, for Thou art invincible in mercy.`
      ],
      aposticha: [
        `At Thy fearful Coming, O Christ, may we not hear the words: "I know you not." For though, O Savior, we have put our trust in Thee, from negligence we have not kept Thy commandments; yet we entreat Thee, do Thou spare our souls.`,
        `I have no repentance and I have no tears. Wherefore I entreat Thee, O Christ God: before the end is here turn me back and grant me compunction, that I may be delivered from the torments of Hades.`,
        `O martyred passion-bearers, citizens of heaven, who suffered on the earth, ye endured many torments. By their supplications and entreaty, O Lord, preserve us all.`
      ],
      aposticha_glory: `O most holy Virgin, show forth upon me, the wretched one, the depths of thy love for mankind, the abyss of thy tender compassion, and the countless compassions of thy goodness. Mow down the stubble of sin, granting me chastity, and preserve my body and soul undefiled, O thou who hast given birth to the Savior.`
    },
    tue: {
      lic: [
        `When Thou wast crucified, O long-suffering Lord, Thou didst shake the whole earth, making steadfast the hearts of the faithful; wherefore, we hymn Thee and with love worship Thine unapproachable power.`,
        `Spat upon and smitten on the cheek, O Savior, Thou didst smite the evil of the venomous foe, taking away the fall which Adam endured, who was abducted because of his transgression.`,
        `The sun was darkened, the whole earth quaked, and the stones split asunder, when they beheld Thee suspended unjustly upon the Tree, setting aside Thine own will, O Savior.`
      ],
      aposticha: [
        `Thy Cross is life and help for Thy people, O Lord; and trusting therein, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `Thy Cross, O Lord, hath opened paradise to the race of mankind; and delivered from corruption, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `They who suffered for Thy sake, O Christ, endured many torments and have received perfect crowns in the heavens. May they pray on behalf of our souls.`
      ],
      aposticha_glory: `Upon beholding our Life suspended upon the Tree, the all-immaculate Theotokos cried aloud, maternally lamenting: O my Son and my God, save those who with love hymn Thee!`
    },
    wed: {
      lic: [
        `Ye became ministers of the great mysteries of God, O theologians and God-beholding disciples, and having received the grace of healing, ye cure the diseases of all.`,
        `Ye are the great refuge and protection of our souls and the expulsion of evil spirits, O God-beholding apostles of the Lord, wherefore, we ever honor you.`,
        `From every evil circumstance, from harm wrought by the demons, from transgressions and wretched captivity, deliver those who honor you with faith, O divine and blessed apostles.`
      ],
      aposticha: [
        `Once, the apostles trolled the depths of the sea with nets, O Lord, and likewise the heights of the kingdom for the sake of their doctrines. In the first, they skillfully tested the unfathomable depths; and in the other they attained through faith Thine infinite bosom, and they proclaimed Thy timeless Son to the world. By their supplications and those of all the saints, have mercy on us.`,
        `Once, when Thy disciples were tempest-tossed in a boat, O Christ, they cried out: "O Master, save us! For we are perishing!" And we now cry aloud: We pray Thee O our Savior and Lover of mankind, deliver us from our tribulations!`,
        `Thy Cross was the invincible weapon of the martyrs, O Lord; for they looked upon imminent death, foreseeing the life which is to come, and they were strengthened by hope in Thee. By their prayers have mercy upon us!`
      ],
      aposticha_glory: `The eye of my heart longingly seeketh thee, O Lady; disdain not my feeble sigh. At the hour when thy Son shall judge the world, be thou my protection and helper.`
    },
    thu: {
      lic: [
        `O my long-suffering God and Lover of mankind, greatly merciful and compassionate, how didst Thou endure to be slain and put to death on the Tree for the race of mankind? I glorify Thy loving-kindness.`,
        `Thou didst endure smiting, crucifixion and mockery, O Long-suffering One, desiring to deliver all from the deceiver; and Thou didst bear them all, O only supremely good Bestower of life.`,
        `Thou didst ascend the Cross, O Shepherd, and stretch forth Thine arms, crying out: "Come unto me and be enlightened, O ye who have been darkened by deception, for I am the Light!" Glory be to Thee, O only Bestower of light!`
      ],
      aposticha: [
        `Thy Cross is the life and help of Thy people, O Lord; and trusting therein, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `Thy Cross, O Lord, hath opened paradise to the race of mankind; and delivered from corruption, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `Thy martyrs, O Lord, did not deny Thee nor depart from Thy commandments. By their supplications have mercy on us.`
      ],
      aposticha_glory: `Standing with the virginal disciple before the Tree during the crucifixion, the Virgin cried out, weeping: "Woe is me! How is it that Thou dost suffer, O Christ, since Thou art the dispassion of all?"`
    },
    fri: {
      lic: [
        `Walking in the footsteps of the sufferings of Christ, the whole company of the martyrs mightily went forth to many struggles. They confessed Him as God before ungodly tyrants and iniquitous kings, and endured many tortures, in the hope of receiving heavenly honors. These they now behold, rejoicing, and standing before the Lord with the choirs of all the incorporeal hosts.`,
        `O all-sacred shepherds, ye were emulators of the Christ, the Chief Shepherd, and preserved utterly unharmed the divinely chosen flock, the divine treasures of piety, driving away the wild wolves, and bringing them into the fold of heaven. As ye make your abode there, remember those who praise you with love, and pray ye with boldness unto Christ on behalf of our souls.`,
        `O all ye venerable fathers, who living in holiness, vanquished the demons; and extinguishing the torments of conscience, valiantly endured the burning of the passions, O blessed ones, and ye rejoice now with the heavenly hosts of incorporeal beings; for in the flesh ye emulated their life. With them entreat Christ, the supremely good God, that we who honor you may find deliverance from our falls.`,
        `Thy martyrs, O Lord, denied Thee not, nor did they forsake Thy commandments; by their intercessions have mercy upon us.`,
        `Thy martyrs, O Lord, denied Thee not, nor did they forsake Thy commandments; by their intercessions have mercy upon us.`,
        `O martyred passion-bearers, citizens of heaven, who suffered on the earth, ye endured many torments. By their prayers and intercessions, O Lord, preserve us all.`
      ],
      lic_dogmatikon: `Who doth not call thee blessed, O most holy Virgin? Who will not hymn thy most pure birthgiving? For the only-begotten Son Who hath shone forth timelessly from the Father, came forth, ineffably incarnate, from thee, O pure one; By nature He is God, by nature for our sakes, He hath become a man not divided into two Hypostases, but known in two natures without commingling. Him do thou beseech, O pure and most blessed one, that our souls find mercy!`,
      aposticha: [
        `Those who suffered martyrdom for Thee, O Christ, endured a multitude of torments, and have received perfect crowns in the heavens, may they ever intercede on behalf of our souls.`,
        `Thy Cross O Lord, was the invincible weapon of the martyrs. They beheld impending death before them; but, foreseeing the life that is to come, they became strengthened with hope in Thee. By their intercessions have mercy on us.`,
        `Thy command was to me my beginning and foundation. For desiring to fashion me into a living creature from natures visible and invisible: Thou didst form my body from the earth, and given me a soul by Thy divine and quickening breath. Wherefore, O Christ, grant rest to Thy servants in the land of the living, in the habitations of the righteous.`
      ],
      aposticha_glory: `By the prayers of her that gaveth birth to Thee O Christ, and of Thy martyrs and apostles, the prophets and holy hierarchs, the venerable, the righteous and of all the saints, grant rest to Thy departed servants.`
    }
  },
  7: {  // Tone 7
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
  8: {  // Tone 8
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
  }
};

// Helper: get Octoechos stichera for a given tone and day
// Returns the day object or null if not found
export function getOctoechosVespers(tone, day) {
  return OCTOECHOS_VESPERS?.[tone]?.[day] ?? null;
}

// Universal fixed aposticha verses (tone 0)
// Used for §2A/§2C services where Octoechos provides the aposticha stichera
export const OCTOECHOS_UNIVERSAL = OCTOECHOS_VESPERS[0];