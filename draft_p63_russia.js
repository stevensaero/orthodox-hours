// ════════════════════════════════════════════════════════════════════════════
// DRAFT — P+63 · All Saints of Russia (the Russian-usage OPTION on the 2nd
// Sunday after Pentecost). For review only; not yet integrated into
// pentecostarion.js and not pushed.
//
// Source: 100.pdf (St. Sergius / Russian Pentecostarion) — "THE 2nd SUNDAY
// AFTER PENTECOST, COMMEMORATION OF ALL SAINTS WHO HAVE SHONE FORTH IN THE LAND
// OF RUSSIA." Schema mirrors the P+56 All Saints entry field-for-field.
//
// Surfacing model (to be wired on approval): P+63 becomes an ARRAY of two
// services — [ All Saints of North America {oca_primary:true}, All Saints of
// Russia {this} ] — fed through the same services/selectedServiceIndex control
// the Menaion path uses. Tone 1 Resurrection is shared from OCTOECHOS[1]; this
// entry supplies only the saint propers + the 4th (Saints-of-Russia) canon.
//
// OPEN SCHEMA DECISIONS flagged for confirmation:
//   • hours_format: reusing "all_saints_sunday" (combined Resurrection+Saints).
//   • matins_gospel: 2  — 100.pdf prints the 2nd Eothinon (Mark 16:1-8) +
//     Exapostilarion of the 2nd Resurrection Gospel (P+56 used Gospel 1).
//   • Liturgy readings: 100.pdf gives BOTH the day's resurrection reading
//     (Rom 2:10-16 / Mt 4:18-23) AND the saints' (Heb 11:33-12:2 / Mt 4:25-5:12).
//     Encoded feast_e/feast_g = the SAINTS' readings; resurrection_e/g hold the
//     day's. Confirm whether both should display or only the saints'.
//   • fekula_section: "1A" (resurrectional Sunday w/ polyeleos saint) — confirm.
// ════════════════════════════════════════════════════════════════════════════

const P63_ALL_SAINTS_RUSSIA = {
  name: "Second Sunday After Pentecost — All Saints of Russia",
  source_file: "100.pdf",
  fekula_section: "1A",
  hours_format: "all_saints_sunday",
  tone: 1,
  oca_primary: false,            // Russian-usage option; North America is primary
  note: "Russian usage (St. Sergius). On the OCA calendar this Sunday is All Saints of North America; this entry is offered as the alternate Russian commemoration.",

  // Primary: Resurrection Tone 1
  troparion: {
    tone: 1,
    text: "When the stone had been sealed by the Jews, and the soldiers were guarding Thine immaculate Body, Thou didst arise on the third day, O Savior, granting life unto the world. Wherefore, the Hosts of the heavens cried out to Thee, O Life-giver: Glory to Thy Resurrection, O Christ. Glory to Thy kingdom. Glory to Thy dispensation, O only Lover of mankind.",
    source: "resurrection_tone_1",
  },

  vespers_kontakion: false,      // dismissal = Sunday + Saints troparia; kontakion not sung at Vespers

  // Under Glory: Saints of Russia troparion Tone 8
  troparion_2: {
    tone: 8,
    text: "The land of Russia doth offer Thee, O Lord, all the saints who have shone forth in it, as the beauteous fruit of Thy salvific splendor. By their supplications and through the Theotokos preserve Thou the Church and our land in profound peace, O greatly Merciful One.",
    source: "saints_of_russia",
    placement: "glory",
  },

  // Kontakion: Saints of Russia Tone 3 (Matins after Ode VI / Hours)
  hours_kontakion: {
    tone: 3,
    text: "Today the choir of the saints who have pleased God in our land standeth forth in the Church and invisibly prayeth to God for us. With them the angels give glory, and all the saints of the Church of Christ celebrate with them; for all together they entreat the pre-eternal God for us.",
    source: "saints_of_russia",
  },
  hours_kontakion_ikos: "Fruitful trees of the Garden of Eden, laden with goodly fruit, have the saints been shown to be, producing the sweet-smelling blossoms of doctrine and the fruits of good works: whereby our souls are fed, and our spiritual hunger is assuaged. Come ye, therefore, let us hasten beneath their shadow and bless them as the delight and adornment of our land, and as a model and pattern for our life; for they have received imperishable crowns from the pre-eternal God.",

  // ── LITURGY READINGS ──────────────────────────────────────────────────────
  // Saints' readings (primary display); day's resurrection readings retained.
  feast_e: "Hebrews 11:33-12:2",
  feast_g: "Matthew 4:25-5:12",
  resurrection_e: "Romans 2:10-16",
  resurrection_g: "Matthew 4:18-23",

  // Two prokeimena at Liturgy
  prokeimenon_tone: 1,
  prokeimenon_text: "Let Thy mercy be upon us, O Lord, according as we have hoped in Thee.",
  prokeimenon_stichos: "Rejoice in the Lord, ye righteous; praise is meet for the upright.",
  prokeimenon_2_tone: 4,
  prokeimenon_2_text: "Blessed art Thou, O Lord, the God of our Fathers, and praised and glorified is Thy name unto the ages.",

  // Two alleluias at Liturgy
  alleluia_tone: 1,
  alleluia_verse: "O God who givest avengement unto me, and hast subdued peoples under me.",
  alleluia_stichos: "Who magnifieth the salvation of His king, and worketh mercy for His anointed, for David, and for his seed unto eternity.",
  alleluia_2_tone: 4,
  alleluia_2_verse: "The righteous cried, and the Lord hearkened unto them.",
  alleluia_2_stichos: null,

  communion_verse: "Praise the Lord in the heavens, praise Him in the highest! Another, for the saints: The Lord taketh pleasure in His people, and He shall exalt the meek with salvation.",

  // ── GREAT VESPERS — OT LESSONS (3 paroemias) ──────────────────────────────
  paroemia_1: "Isaiah 49:8-15",
  paroemia_2: "Wisdom of Solomon 3:1-9",       // "The souls of the righteous are in the hand of God..."
  paroemia_3: "Wisdom of Solomon 5:15-23",      // "The righteous live for evermore..."

  // ── LITIYA ────────────────────────────────────────────────────────────────
  // Temple sticheron first (supplied at runtime), then these Saints stichera.
  litya_stichera: [
    { tone: 8, text: "Rejoice with us, all ye choirs of saints and ranks of angels, spiritually gathered together; and let us come and chant a hymn of thanksgiving unto Christ our God. For, lo! the countless assembly of our kinsmen, who have been well-pleasing unto God, standeth before the King of glory, and with entreaty mediateth for us. They are the pillars and beauty of the Orthodox Faith; they have glorified the Church of God with their ascetic feats and the shedding of their blood, with their teachings and deeds; they have confirmed the Faith of Christ with miracles and signs; they have shone forth from all the regions of our land, have established the Orthodox Faith therein, and with apostolic zeal have brought it even unto other lands. Others have adorned the wilderness and the cities with holy monasteries, manifesting an angelic life. Many have been subjected to trials through mockery, wounding and cruel death by the children of this age. And many have struggled in other ways, in every class. And all pray to the Lord, that He deliver our homeland from tribulations, and that we all may be saved." },
  ],
  litya_glory_both_now: { tone: 8, text: "All the noetic ranks rejoice with us, joining in spiritual chorus. They have seen the Queen and Sovereign Lady of all, glorified by the faithful with many names. And all the souls of the righteous, beholders of the sight, rejoice to see her in the air stretching forth her most precious hands in supplication, entreating peace for the world, confirmation for the land of Russia, and salvation for our souls." },

  magnificat_sung: true,
  matins_format: "god_is_the_lord",
  has_great_doxology: true,
  has_litya: true,
  matins_gospel: 2,              // Mark 16:1-8 (2nd Eothinon)
  matins_gospel_number: 2,

  // ── LORD I CALL — 10 stichera (4 Resurrection T1 + 3 Russia T3 + 3 Russia T8)
  stichera_lord_i_call_count: 10,
  stichera_lord_i_call: [
    { tone: 1, source: "octoechos", text: "Receive our evening prayers, O Holy Lord, and grant us remission of sins; because Thou alone hast revealed the Resurrection to the world." },
    { tone: 1, source: "octoechos", text: "Go around Zion, O ye peoples, and encompass her, and give glory to him who in her midst hath arisen from the dead; for he is our God, and hath delivered us from our iniquities." },
    { tone: 1, source: "octoechos", text: "Come O ye peoples, let us hymn and worship Christ glorifying his Resurrection from the dead: for he is our God, who hath redeemed the world from the deception of the adversary." },
    { tone: 1, source: "octoechos", label: "by Anatolius", text: "Rejoice, O ye heavens! Sound the trumpets O ye foundations of the earth! O ye mountains thunder forth your joy! for behold, Emmanuel hath nailed our sins to the Cross, and the giver of life, hath slain death raising up Adam, for He alone is the Lover of mankind." },
    { tone: 3, source: "menaion", text: "Come, ye assemblies of Russia, let us praise the saints that are in our land. The venerable, the holy hierarchs, the right-believing princes, the martyrs, hieromartyrs, the fools for Christ's sake, and the company of holy women. Both those known by name and those unknown; for truly by their deeds and words, and their manifold ways of life, and through the gifts of God, they became saints, and God hath glorified even their graves with miracles. And now, standing directly before Christ Who hath glorified them, they pray fervently on behalf of us who celebrate their radiant festival with love." },
    { tone: 3, source: "menaion", text: "With what beauties of hymnody shall we praise the divinely wise hierarchs of Russia, the splendid adornments of the Church of Christ, the crowns of the priesthood, the rule of piety, the inexhaustible well-springs of divine healing, the outpouring of the gifts of the Spirit, the rivers of manifold miracles which gladden the land of Russia with their flow, the fervent helpers of pious peoples, for whose sake Christ, Who hath great mercy, hath cast down the uprisings of the enemy." },
    { tone: 3, source: "menaion", text: "Earth is glad and heaven rejoiceth, O venerable fathers, praising your feats and labors, your spiritual fortitude and purity of mind; for ye were not overcome by the law of nature. O holy company and divine assembly, ye are truly the confirmation of our land." },
    { tone: 8, source: "menaion", text: "O blessed and divinely wise princes of Russia, who shine forth with Orthodox wisdom, and are resplendent with the brilliance of the virtues: Ye illumine all the faithful, driving away the darkness of the demons. Wherefore, we honor you as partakers of never-waning grace and unashamed preservers of your heritage, O right wondrous ones." },
    { tone: 8, source: "menaion", text: "O most blessed martyrs of Christ, ye gave yourselves over to voluntary sacrifice, have sanctified the land of Russia with your blood, and have brought splendor even unto the air by your repose; and now ye dwell in the heavens amid never-waning light, ever praying on our behalf, O ye beholders of God." },
    { tone: 8, source: "menaion", text: "The corrections of your virtues have enlightened the hearts of the faithful, O fools for Christ's sake and ye righteous, who have shone forth in Russia; for who hath heard of your boundless humility and forbearance, and not marveled? The needs of all did ye anticipate, O right-wondrous ones: ye were an example of meekness and guilelessness for all, of pity for the sorrowful, of speedy aid to those in misfortune, an untroubled haven for those at sea, and good speed for travelers. And now ye have been crowned with unfading wreaths by the hand of the omnipotent God. Him do ye entreat, that our souls be saved." },
  ],
  stichera_glory: { tone: 8, source: "menaion", text: "Rejoice in the Lord O thou Orthodox Russia, dance now and be glad, for thou art radiantly adorned with the faith, having within thy loins, like a precious dowry, venerable ascetics who struggled for the faith, and witnessed to the truth, take pleasure in the miracles that flow forth from them, and beholding such a multitude of saints, who encompass and protect thee from enemies visible and invisible, cry out with thanksgiving unto the Savior: O Lord glory be to Thee." },
  stichera_both_now: { tone: 2, source: "octoechos", label: "Dogmaticon", text: "Let us hymn the whole world's glory, who sprang forth from mankind and who gave birth to the Master, the Portal of heaven, Mary the Virgin, the hymn of the Bodiless Powers and adornment of the faithful; for she hath been revealed as the heaven and Temple of the Godhead. By destroying the middle wall, she hath brought forth peace, and opened wide the Kingdom. Therefore, holding fast to her as a firm confirmation of the faith, we have as our champion the Lord born from her. Take courage therefore, take courage, O ye people of God; for as the Invincible one He shall conquer our adversaries." },

  // ── APOSTICHA (Resurrection T1 + Glory T4 + Both Now T5) ──────────────────
  aposticha_source: "octoechos",
  stichera_aposticha: [
    { tone: 1, text: "By thy Passion, O Christ, we have been set free from passions, and by thy Resurrection we have been delivered from corruption. O Lord, glory be to thee." },
    { verse: "The Lord is King: He is clothed with majesty. The Lord is clothed with strength and He hath girt Himself.",
      tone: 1, text: "All ye His creation rejoice! let the heavens be glad, let the nations clap their hands with gladness; for Christ our Savior hath nailed our sins to the Cross and by slaying death hath granted us life eternal, raising all of the fallen race of Adam, as he alone is the Lover of mankind." },
    { verse: "For He established the universe which shall not be shaken.",
      tone: 1, text: "Being the King of heaven and earth, O Incomprehensible one, Thou wast willingly crucified through Thy love for mankind; when Hades met thee he was vexed, while the souls of the righteous receiving thee below rejoiced, and Adam, seeing thee his Creator in the nethermost regions, rose again. O the wonder! How did the life of all taste death? Except that he wished to enlighten the world, which crieth out saying: O Thou who didst arise from the dead, O Lord glory be to thee!" },
    { verse: "Holiness becometh Thy house, O Lord, unto length of days.",
      tone: 1, text: "Carrying sweet spices the myrrh-bearing women reached thy tomb with haste, lamenting; and not finding thy most pure Body, but learning from the angel the new and marvelous wonder, spake unto the apostles saying: The Lord hath arisen, granting the world His great mercy." },
  ],
  aposticha_glory: { tone: 4, source: "Lambertson", text: "Celebrating the yearly commemoration of our holy kinsmen, let us call them blessed, as is meet; for they have truly passed through all the beatitudes of the Lord: impoverished, they have become rich in spirit; being meek, they have inherited the land of the meek; having wept, they have found comfort; having thirsted after righteousness, they have been filled; having had mercy upon others, they have found mercy themselves; pure of heart, they have seen God, as far as such is possible; peace-makers, they have been counted worthy of adoption by God; and persecuted and tormented for piety and righteousness' sake, they now rejoice and are glad in the heavens; and they earnestly entreat the Lord, that He take pity on our homeland." },
  aposticha_both_now: { tone: 5, source: "Lambertson", text: "Let us sound the clarion of hymns! Together let us chant unto the Theotokos and Queen, the helper of our land: Rejoice, O thou who from ages past hast crowned our homeland with thy benevolence and pourest forth thy grace thereon! Wherefore, our Church of Russia doth celebrate with splendor thine all-honored protecting veil and the memory of thy miracles wrought thereby. Take not thy mercy away from us now, O Sovereign Lady; but look down upon our sorrows and oppression, and raise us up by thy mighty assistance." },

  // ── MATINS — sessional hymns for the Saints (after Polyeleos / Kath.) ──────
  matins_sessional_post_polyeleos: { tone: 5, source: "Lambertson", text: "Having been illumined with the lightning-flashes of the saints, as though entering a beautiful paradise we have found delight in a torrent of sweetness; and gazing in wonder at their valorous feats, let us come to love their virtues, crying out to the Savior: Through their supplications, O God, grant us a share in Thy kingdom!" },
  matins_sessional_post_polyeleos_2: { tone: 5, source: "Lambertson", text: "Like the radiant sun, like the brilliant morning-star, the honored day of the memorial of the saints who have shone forth in the land of Russia hath dawned, illumining all of us and rousing our hearts to emulate their godly life and their zeal for the Faith." },
  matins_sessional_post_polyeleos_glory: { tone: 3, text: "All the faithful people of Russia celebrate on the day of the commemoration of Thy saints, O Lord. The heavens rejoice and the ends of our earth are glad. Through their supplications grant our souls great mercy." },
  matins_sessional_post_polyeleos_both_now: { tone: 4, text: "Looking down from the highest, O most merciful Master, visit us who have been afflicted by sin, taking unto Thyself the wretched; and through the supplications of the Theotokos and all the saints of Russia, grant unto our souls great mercy." },

  // Polyeleos Magnification
  magnification: "We magnify you, O all ye saints who have shone forth in the land of Russia, and we honor your holy memory; for ye entreat Christ our God on our behalf.",
  magnification_selected_psalm: "Our God is our refuge and strength, a helper in afflictions which mightily befall us.",

  // Prokeimenon at Matins (before the Gospel)
  matins_prokeimenon_tone: 1,
  matins_prokeimenon_text: "Now will I arise, saith the Lord; I will establish them in salvation, I will be manifest therein.",
  matins_prokeimenon_stichos: "The words of the Lord are pure words, silver that is fired, tried in the earth, brought to sevenfold purity.",

  // Sessional Hymn after Ode III (for the Saints)
  matins_sessional_post_ode3: { tone: 7, text: "Christ, the Sun of righteousness, set you forth as rays illumining the land of Russia, O favored ones of God, enlightening our race. Wherefore, with your divine entreaties, O blessed ones of God, make radiant my darkened soul." },
  matins_sessional_post_ode3_both_now: { tone: 7, text: "O ye faithful, let us make haste to the divine and healing robe of God our Savior, Whose good pleasure it was to assume this flesh and to shed His own holy Blood upon the Cross, and thereby redeemed us from slavery to the enemy. Wherefore, we cry out to Him in thanksgiving: Save Thou our Orthodox episcopate and this city, and with Thy precious robe defend all the people and save our souls, in that Thou lovest mankind." },

  // ── MATINS — 4th CANON: All Saints of Russia (8 troparia per ode) ─────────
  // Octoechos canons 1-3 (Resurrection 4 / Theotokos 2) come from OCTOECHOS[1].
  // Refrain pattern: 6 saint troparia, then Glory, then Both Now per ode.
  matins_canon_feast: {
    refrain: "All ye Saints who have shone forth in the Russian Land, pray to God for us",
    source: "100.pdf",
    odes: {
      1: {
        troparia: [
          "In spiritual songs let us all hymn together our godly fathers who have shone forth in piety, whom every place and region of the land of Russia hath brought forth, and whom the Church of Russia hath nurtured.",
          "Come all ye faithful who love the martyrs, and with hymns let us honor the martyrs of Russia, Theodore, and the youth John, who refused to worship the idols, shedding their blood for Christ.",
          "Rejoice, O ye seven holy hierarchs — Basil, Ephraim, Eugene, Elpidius, Agathadorus, Eutherius and Capito — who were bishops in Cherson and hallowed our land with your blood!",
          "Thou art our greatness and boast, O divinely wise Olga; for by thee were we freed from the deception of idolatry. Pray thou now for the people whom thou hast led to God.",
          "Rejoice and be glad, O servant of Christ, great and wise Prince Vladimir, intercessor for our souls, for by thee have we all been delivered from the deception of the demons. Wherefore, we cry to thee: Rejoice!",
          "Michael, the hierarch of God, shineth like a star in heaven, who illumined the land of Russia with the light of the knowledge of the divine Faith and led to the Master a new people, reborn in the font of baptism.",
        ],
        gloria: "O blessed passion-bearers of Christ, Boris and Gleb: forget not thy homeland. Dispel from it famine and affliction, and deliver us, who set our hope on you, from civil strife and every sinful fall.",
        both_now: "With the ranks of the angels, O Sovereign Lady, with the honorable and glorious prophets, the pre-eminent apostles and hieromartyrs, and with the archangels, pray thou to God on behalf of us sinners, who in the land of Russia have glorified the feast of thy protecting veil.",
      },
      3: {
        troparia: [
          "The sacred and great Lavra, which was founded by thee, O venerable father Anthony, first of all the monks of Russia, most gloriously preacheth and soundeth forth more loudly than a trumpet; and the house of the Mother of God doth glory in splendor, chanting unto God: by Thee have I been established, O Lord.",
          "Let us radiantly hymn the blessed Theodosius, eminent in miracles and great in the virtues, the founder of the coenobitic monastic life in Russia, the glorious favorite of Christ and the Theotokos; and with him Nestor, the recorder of memorable events, and Alypius, the first iconographer in Russia.",
          "Thou art a noetic paradise, O holy Mountain of the Caves, who produced a multitude of spiritual trees — the blessed fathers, whose number it is not possible to reckon individually. We therefore offer praise and hymnody to the one Master for all of them together.",
          "O martyr Anthony and steadfast Eustathius, together with John, ye adornment of the Lithuanian land, who set at naught the arrogance of Olgerd: Quench ye the passions which mortify me!",
          "Be ye intercessors for your earthly homeland and for the city wherein ye struggled in martyrdom, O venerable-martyr Athanasius, and thou, O young Gabriel. And teach us also to confess Orthodoxy with boldness and not to fear the enemy.",
          "Let the venerable Job be honored, the adornment of the Lavra of Pochaev, together with all the wonderworkers and saints of Volyn, who have illumined the ends of our land with their deeds and miracles.",
        ],
        gloria: "With sacred hymns let us praise Athanasius, the holy bishop of Constantinople, who brought his own precious relics, as an earnest of unity with the universal Church, to be a blessing for the land of Russia, and hath left them to us.",
        both_now: "Lo! the time for the assistance of the most holy Theotokos is come, for temptations have multiplied. Behold! now is the time for us to sigh unto her, O brethren! Let us therefore say with our whole heart: O Sovereign Lady, O Sovereign Lady, help thou thy people.",
      },
      4: {
        troparia: [
          "O divinely blessed prince Daniel, the Lord showed thee forth as the founder and first prince of the city of Moscow. Praying unceasingly to him, save thou the city of Moscow and all the land of Russia from tribulation, and in thy mercy visit its Orthodox people.",
          "We entreat you, O holy hierarchs of Christ — Peter, Alexis, Jonah and Philip — and all the rest of the wonderworkers of Moscow, to still the turmoil of our spirit and the tempest of grief, and by your supplications to God grant us serenity.",
          "A primate of the apostolic Church, a confessor of the Orthodox Faith, a second Chrysostom in denouncing the sin-loving and seditious, and a builder of the Orthodox kingdom wast thou, O holy hierarch Hermogenes; and for this thou wast tormented with imprisonment and starvation and hast received from God an imperishable crown.",
          "Today the glorious city of Moscow rejoiceth, and all Russia is filled with gladness; and thine honored monastery, O divinely blessed Sergius, boasting, is adorned, possessed of thy precious relics as an inexhaustible and all-wondrous treasure.",
          "With sacred hymns let us praise the venerable Nikon, the lover of obedience; and with him let us also hymn Stephen, Sabbas, Andronicus, and all the venerable disciples and companions of the great Sergius, by whose supplications the children of Russia are saved.",
          "We entreat you, O blessed and most wise ones — Basil, Maximus and John of Moscow, and all the fools for Christ's sake in Russia, who were wondrous in the manner of your life and understanding: Beseech Christ our God on behalf of your earthly homeland, and beg salvation for all the faithful.",
        ],
        gloria: "The venerable Tichon showed himself to be a new pillar-dweller in the regions of Kaluga, with his faithful and fervent disciple Pathanutius, and the blessed Laurence revealed the difficult path of faith to those of his country, saving them, and us, by his holy prayers.",
        both_now: "The likeness of the image of the Iveron Icon not only illumineth sacred Athos, but it also adorneth the city of Moscow, and other towns and villages with its effulgence, being a fount of healing to all those who turn to it entreating miraculous aid, and a good gatekeeper, opening unto us the gates of heaven.",
      },
      5: {
        troparia: [
          "O first pastors of Novgorod the Great — Nicetas, John and Gregory, Theoctistus, Euthymius and Serapion — in the house of the Wisdom of God ye flourished like palm-trees in your right-fruitful words and blameless lives.",
          "With splendor let the princes of Novgorod be praised: Vladimir, who erected the most marvelous Cathedral of the Holy Wisdom, and his mother Anna, and Mstislav and Theodore; and with them let all who shone forth in their God-pleasing life from the generation of the princes of Russia be hymned with divine songs.",
          "Who among mortals can glorify as is meet the wondrous Barlaam, the adornment of Novgorod, the beacon of all Russia, and Anthony, who traveled from Rome on a stone, over the waves of the sea? And Savva, and Ephraim, and Michael, worthily praised among the earthborn.",
          "Come ye, let us behold the ever-living and divinely-blossoming flowers of the Garden of Eden: the struggles of the fathers who shone forth in the region of Novgorod, whose husbandman is the Lord alone.",
          "With songs let us hymn the meek Vsevolod and Dovmont, the unassailable ramparts of Pskov, and Nicholas the Blessed, and Cornelius, who enlightened the land of Latvia with holy baptism.",
          "Isidore the priest, and with him the assembly of martyrs in Yuriev, the city of Estonia, who confessed the Orthodox Faith in the face of the Latins, have passed over to the eternal mansions; and standing in splendor before the king of hosts, they pray for us who honor their memory.",
        ],
        gloria: "The god-bearing Avraam, the adornment of Smolensk, Euphrosynia, the joy of Polotsk and splendor of virgins, do we bring before Thee, O my Christ, as intercessors. For their sake do Thou save us.",
        both_now: "O thou who art a fervent helper for those who have recourse to thee and the hope of the hopeless, as thou wast once to those dwelling in Novgorod the great, look now upon the affliction of thy people and reveal to us a sign of thy mercy, O most pure one.",
      },
      6: {
        troparia: [
          "O venerable Zosimas, Sabbatius and Germanus, who loved Christ: Ye turned away from the world in accordance with the Gospel, crossing over to the impassable and barren islands of Solovki. And ye accustomed yourselves to all the virtues, emulating the wise bee, and became eminent receptacles of the Holy Spirit, O most wise ones.",
          "Let us hymn the venerable Tryphon, great in wonders, the enlightener of Kola, who shone forth in the uttermost ends of the lands of the north, delivered the people from bitter slavery to the demons, and illumined them with holy baptism.",
          "Rejoice, O wilderness which before wast barren and uninhabited, but now dost blossom like a lily and is filled with a multitude of monks! Leap up, ye mountains of Valaam and all ye groves, praising Sergius and Germanus, together with Arsenius of Konev and Alexander of Svir, the all-praised fathers.",
          "Thou didst pass over the rolling deep of this life, having the Mother of God as pilot, O venerable Cyril. And thou, O Joseph, boast of Volotsk, and Nilus the un-acquisitive, who wisely pastured the flocks of your disciples by the still waters and on the meadow of abstinence, and dwell now with them invisibly: Pray ye for us who keep your memory.",
          "Anthony of Sisk, and Triphon of Vyatsk, like great luminaries illumine the assembly of monastics, as does Dimitrius of Priluk, and Amphilochios, and Dionysius the boasts of Glinsk, Gregory of Pelshemski, and Paul, Sergius and Cornelius of Vologodsk, whose lives radiated the virtues like beams of light.",
          "O venerable Macarius, Barnabas, and Tichon, Abramius and Genadius, and all the other fathers of Yaroslavl, having lived in a god-pleasing manner, ye made the fastness of the wilderness useful and spiritually profitable, like cities, pouring forth a wellspring of healings upon those who with faith honor you, wherefore we bless and entreat you to beseech the Lord that we be not deprived of the vision of God which ye now eternally enjoy in the kingdom of heaven.",
        ],
        gloria: "Join chorus, O Russian Thebaid! Adorn yourselves, O wilderness and forests of Olonetz, Belozersk and Vologda, which produced a holy and glorious multitude of fathers, who by their wondrous life instruct all not to cleave unto the world, but to take their cross upon their shoulders and follow after Christ.",
        both_now: "Of old, the Creator of all wrought a wonder through thy most precious icon, O Virgin, and saved the Imperial City from the incursion of aliens. Thus be thou now also a protection and aid for the land of Russia, O Lady and Queen, saving it from all the assaults of the enemy.",
      },
      7: {
        troparia: [
          "Let Leontius, Isaiah and Ignatius, James and Theodore, the precious vessels of the Spirit and honored adornment of Rostov, Abramius, the valiant scourge of the demons, and the other Joasaph, who shone forth in Russia, Peter, the scion of royalty, and Heirinarchus, the voluntary sufferer, be hymned with the other godly wonderworkers of Rostov.",
          "After God, ye are the helpers and protectors of the city of Vladimir: O valorous Alexander, conqueror of the Swedes; George, who laid down thy life in battle for the Church of God and the people; Andrew, builder of the Russian nation, with the chaste Gleb, and thou, O venerable Abramius, who like the merchant of the Gospel purchased the kingdom of heaven with thy sufferings. Guide us to the haven of salvation, for ye are the bulwark of the faithful.",
          "Glory be to John and Theodore, the luminaries of Suzdal! And with them let Euthymius also be hymned, who was great in ascetic struggles, the companion of the great Sergius, and also Euphrosynia, the all-radiant star of Suzdal, with them Cosmas who struggled on the banks of the Acheron river.",
          "Let Nicetas be honored, the model of repentance, who struggled ascetically on a pillar and received death at the hands of his kinsmen; and Daniel, the burier of the dead; and with them also Andrew, who forsook the glory of the princely rank and finished his life in poverty: the wonderworkers of Pereyaslavl.",
          "O Constantine, apostle and enlightener of the land of Murom, together with thy noble offspring Theodore and Michael; and thou, O valiant and pious Peter, vanquisher of the serpent of pride, with thy wise spouse Fevronia and the righteous and merciful Juliana: Entreat Christ on our behalf.",
          "O holy hierarch Arsenius, boast of Tver; Michael, prince and martyr, and Anna, treasure of the city of Kashin; venerable Nilus and Macarius, Ephraim, enlightener of the city of Torzhok, with Arcadius and Juliana: O blossoms of chastity: Entreat Christ on our behalf!",
        ],
        gloria: "With the sword of your supplications, O right-believing and venerable princes Theodore, David and Constantine, ye vanquished the demons and received from heaven the grace to heal illnesses and to expel evil spirits from those who cry out: O God of our fathers, Blessed art Thou!",
        both_now: "Likened to a grace-filled treasury, thou hast granted us thy holy Vladimir Icon, which our venerable fathers have often, and in many ways, turned to for aid. Turn not away from us now O Mother of God, but assuage and save the land of Russia from all those who treat us wickedly.",
      },
      8: {
        // Ode VIII: "We bless the Father, the Son, and the Holy Spirit" precedes
        // the 7th troparion (the trinitarian verse); encoded as gloria slot.
        troparia: [
          "Adorn thyself O city of Kazan, having as thine intercessors the venerable hierarch Gurius, Barsanuphius, and Herman, who expelled the darkness of falsehood from your realm, and John the martyr, with Stephen and Peter, who by martyrdom left their earthly homeland for the heavenly.",
          "Having studied the sacred Scriptures from thy youth, O God-bearing Stephen, thou didst cultivate the stony hearts of the people of Perm with the plough of thy words; and having sown the divine seed therein, didst bring forth beautiful fruit for Christ, as also did those who followed thee; Gerasimus, Pitirim, and John, whose prayers overshadow all the land of Russia.",
          "Be glad, O land of Siberia; for in thee the Lord hath revealed His favored ones: the righteous Symeon of Verkhoturya, and the holy hierarchs of Irkutsk: Innocent, Sophronius and John, the new and wondrous luminaries and wonderworkers. (Twice)",
          "Rejoice O land of Iberia, and all the lands of Georgia, be festive Armenia, hymning the equal-to-the-apostles Nina, and Tamara, Gregory the Enlightener, and many others who confessed the Orthodox faith in the Caucuses, and who now entreat Christ God on behalf of our earthly fatherland.",
          "O divinely wise hierarch Demetrius, recorder of the lives of the saints and good lover thereof: by thy supplications show us to be partakers of their glory.",
          "O holy hierarch Metrophanes, first pastor of Voronezh, who showed great courage, fearing neither the threats of the Emperor nor death, and who saved thy soul in simplicity: Entreat God on our behalf.",
        ],
        gloria: "We bless the Father, the Son, and the Holy Spirit, the Lord. Thou didst gather spiritual treasure from the corrupt world, as a bee gathereth sweet honey from ephemeral blooms, O father Tikhon; and therewith thou dost sweeten us all.",
        both_now: "We praise thee our fervent intercessor, and we fall down before thy precious Icon, by which the newly enlightened have been established in the true faith, and the city of Peter, the mother of the cities of Russia, hath been saved; O thou great treasury, and most glorious wealth of all our land.",
      },
      9: {
        troparia: [
          "O Tikhon, thou righteous enlightener, and joyous angel of the church of Tambov, and thou holy hierarch Pitirim, rejoice over your flock and all Russia, for within her a new and eternal joy hath blossomed forth, the venerable seraphim, the wondrous struggler for our salvation.",
          "O holy hierarchs Theodosius, and Joasaph of Belgorod, ye have been glorified by the Lord because of your wondrous lives, wherefore we also glorify you, being children of the Orthodox church, in which even till now, the Lord manifests miracles upon those servants who glorify them.",
          "O holy hierarch and martyr Joseph, the city of Astrakhan and all the lands of the Volga honor and boast in thee, who suffered cruelly for righteousness at the hands of godless rebels.",
          "O beyond speech, and transcending all praise, are the struggles of the passion-bearers, for enduring all manner of wickedness and cruelty from transgressors, they bore their faith in Christ like a shield, opposing the teachings of this world, wherefore we worthily set them forth as examples of patient endurance.",
          "O the firmness, and the manliness, of the legions of martyrs of Christ, who were slaughtered by the godless ones for Christ's sake! Ye adorn the Orthodox church in our land with the blood ye shed, like seeds of the faith freely given to us, wherefore ye are now worthily honored with all the saints.",
          "O all ye great ancestors of ours, known and unknown, named and unnamed, manifest and hidden, having reached the heavenly Zion, and received from God an abundance of glory, be ye our comforters, for we are all in distress, entreat Him, to establish us who have fallen in the faith, and to gather into one, the dispersed, and accept from us as a gift, these hymns of praise which we offer unto you.",
        ],
        gloria: "O most precious Trinity, accept as first-fruits, as choice incense, all the saints which Russia hath offered Thee, like the chosen golden crucibles of old, and in recent times, those known and unknown; and by their supplications preserve it from all harm.",
        both_now: "O Virgin Full of grace, who hast enriched our cities and villages with the images of thy precious countenance, as with traces of sweet fragrance: Accept our thanks, and deliver our homeland from cruel misfortunes; for we all magnify thee as the almighty protection of our land.",
      },
    },
  },

  // ── EXAPOSTILARIA (after Ode IX) ──────────────────────────────────────────
  exapostilarion: "The myrrh-bearing women rejoiced when they beheld the great stone rolled away from the tomb, and a young man seated therein on the right side, addressing them and saying: \u201CLo, Christ is risen from the dead. Go and tell His disciples and Peter, that He goeth before you into Galilee unto the mountain, for there He shall appear unto you His friends, as He hath foretold you.\u201D",
  exapostilarion_saints: "In hymns let us praise the never-waning luminaries of the land of Russia, the initiates of the mysteries of the Word, glorifying Christ Who hath enlightened and loveth them, and hath given them to us as helpers amid sorrows.",
  exapostilarion_theotokion: "Prior to thy conception an angel conveyed unto the Virgin the salutation, \u201CRejoice,\u201D and now, O Christ, an angel hath rolled away the stone from Thy tomb. The one, instead of sorrow, brought tokens of ineffable joy; the other instead of death, heralded Thee the Giver of life, magnifying Thee and telling of the resurrection unto the women and unto Thine apostles.",

  // ── PRAISES — 4 Resurrection T1 + 4 Saints of Russia (T5 ×3 + T4) ─────────
  stichera_praises: [
    { verse: "To do among them the judgment that is written, This glory shall be to all His saints.",
      tone: 1, source: "octoechos", text: "We sing the praise of Thy saving Passion, O Christ, and we glorify Thy Resurrection." },
    { verse: "Praise ye God in His saints, praise Him in the firmament of His power.",
      tone: 1, source: "octoechos", text: "Having endured the Cross, and destroyed death and risen from the dead, grant peace to our lives, O Lord, as Thou alone art All-powerful." },
    { verse: "Praise Him for His mighty acts, praise Him according to the multitude of His greatness.",
      tone: 1, source: "octoechos", text: "Having despoiled Hades and raised mankind by Thy Resurrection, O Christ, grant that with pure hearts we may praise and glorify Thee." },
    { verse: "Praise Him with the sound of trumpet, praise Him with the psaltery and harp.",
      tone: 1, source: "octoechos", text: "As we glorify Thy divine condescension, we praise Thee, O Christ: For Thou wast born of a Virgin, yet Thou wast not separated from the Father; as man Thou didst suffer and willingly endure the Cross; arising from the grave, as though coming forth from Thy bridal chamber, that Thou mightest save the world. O Lord, glory be to Thee!" },
    { verse: "Praise Him with timbrel and dance, praise Him with strings and flute.",
      tone: 5, source: "menaion", label: "Spec. Mel.: Rejoice O Life-bearing Cross", text: "Rejoice thou faithful Church of Russia, Rejoice most glorious right-believing Prince Vladimir, Rejoice Olga thou chosen one, for ye are our intercessors before the Lord most high, and our foundation in Orthodoxy, and our establishment in the true faith. Rejoice every place and country and city, for as citizens which have been brought up in the heavenly kingdom, they have been revealed to be holy luminaries shining upon our souls, emitting rays of miracles, and deeds, and noetic signs throughout all the world, and now pray ye unto Christ God that our souls be granted great mercy." },
    { verse: "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. Let every breath praise the Lord.",
      tone: 5, source: "menaion", text: "Rejoice O ye adornments of the land of Russia, ye unshaken foundations of our church, the glory of the Orthodox, fount of miracles, never silent harps of loving-kindness, many faceted luminaries, instruments of the Holy Spirit, meek and guileless, adorned with a multitude of virtues, heavenly men, and earthly angels, true friends of Christ God, to Whom pray ye, that we who honor you, be granted great mercy." },
    { verse: "Our God is refuge and strength, a helper in afflictions which mightily befall us.",
      tone: 5, source: "menaion", text: "Come ye unto us, O our heavenly intercessors, for we are in need of your prayerful assistance, that we be delivered from the wicked tormenting and evil intentions of the unbelievers, from whom we are hounded like prisoners, often moving from place to place, and becoming lost in the precipices and mountains, wherefore take pity on us O all-famed ones, and grant us refreshment, calm the tempest, and extinguish those who wish us evil, pray ye unto God, that by your prayers, our land be granted great mercy." },
    { verse: "The Lord of hosts is with us, our helper is the God of Jacob.",
      tone: 4, source: "menaion", text: "Having listened to the voice of the Gospel and become enflamed with apostolic zeal, ye made haste to teach the unbelieving heathen, O divinely blessed Kuksha, Leontius, Stephen and Gurius, equals of the apostles, and thou, O right-wondrous Innocent, apostle of the great land of Siberia and initiator of the enlightenment of the new lands beyond the sea. Wherefore, as is meet, with all the others who have labored in preaching the Gospel of Christ, ye are called blessed." },
  ],
  praises_glory: { tone: 2, text: "With their spices the women attending Mary made haste unto the tomb, wondering among themselves how they could accomplish their desire. There they beheld the stone rolled away, and a divine young man calmed the confusion within their soul, saying; \u201CJesus the Lord is risen. go therefore unto His disciples and tell them to make haste unto Galilee; there they will see Him resurrected from the dead as the Lord and the Giver of life.\u201D" },
  praises_both_now: { tone: 2, label: "Theotokion", text: "Thou art most blessed, O Virgin Theotokos, for through Him who took flesh from thee, Hades hath been captured, Adam recalled, the curse slain, Eve set free, death put to death, and we have been given life. Therefore in praise we cry: Blessed art thou, O Christ our God, who hast been thus well-pleased, glory be to thee." },

  great_doxology_troparion: "Today is salvation come unto the world; let us sing praises to Him that arose from the tomb, and is the Author of our life. For, having destroyed death by death, He hath given us the victory and great mercy.",

  // ── BEATITUDES — 6 Resurrection + 4 Saints of Russia (Ode III) ────────────
  beatitudes_source: "6 Resurrection + 4 All Saints of Russia (Ode III) — 100.pdf",
  beatitudes_troparia: [
    { text: "Through food the foe led Adam out of Paradise; but through the Cross Christ led back the Thief as he cried: Remember me when Thou comest in Thy kingdom.", source: "resurrection" },
    { text: "I venerate Thy sufferings and I glorify Thy Resurrection; with Adam and with the Thief I cry aloud with radiant voice: Remember me, O Lord, when Thou comest in Thy Kingdom.", source: "resurrection" },
    { text: "Thou wast crucified, O sinless one, and willingly laid in a grave, but Thou didst arise as God; raising Adam with Thyself as he cried: Remember me when Thou comest in Thy Kingdom.", source: "resurrection" },
    { text: "Raising the temple of Thy body after Thy burial for three days, O Christ God, Thou hast raised with Adam those who came from Adam as they cried: Remember me when Thou comest in Thy Kingdom.", source: "resurrection" },
    { text: "The myrrh-bearers came weeping to Thy grave, O Christ God, very early in the morning, and found an angel sitting clothed in white, who cried: What seek ye? Christ hath arisen, mourn no longer.", source: "resurrection" },
    { text: "Thine apostles, O Lord, coming to the mountain that Thou, O Savior, hadst appointed them, saw Thee and worshipped Thee. And Thou didst send them out to teach the nations and baptize the inhabitants therein.", source: "resurrection" },
    { text: "The sacred and great Lavra, which was founded by thee, O venerable father Anthony, first of all the monks of Russia, most gloriously preacheth and soundeth forth more loudly than a trumpet; and the house of the Mother of God doth glory in splendor, chanting unto God: by Thee have I been established, O Lord.", source: "saints_of_russia_ode3" },
    { text: "Let us radiantly hymn the blessed Theodosius, eminent in miracles and great in the virtues, the founder of the coenobitic monastic life in Russia, the glorious favorite of Christ and the Theotokos; and with him Nestor, the recorder of memorable events, and Alypius, the first iconographer in Russia.", source: "saints_of_russia_ode3" },
    { text: "With sacred hymns let us praise Athanasius, the holy bishop of Constantinople, who brought his own precious relics, as an earnest of unity with the universal Church, to be a blessing for the land of Russia, and hath left them to us.", label: "Glory", source: "saints_of_russia_ode3" },
    { text: "Lo! the time for the assistance of the most holy Theotokos is come, for temptations have multiplied. Behold! now is the time for us to sigh unto her, O brethren! Let us therefore say with our whole heart: O Sovereign Lady, O Sovereign Lady, help thou thy people.", label: "Both now", source: "saints_of_russia_ode3" },
  ],
};

export default P63_ALL_SAINTS_RUSSIA;
