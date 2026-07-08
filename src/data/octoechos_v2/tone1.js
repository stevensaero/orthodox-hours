// src/data/octoechos_v2/tone1.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — Tone 1, DIFFERENTIAL scan (spec §11: templates assumed after
// the tone-3 verification, texts and per-tone facts captured fresh from the
// tone-1 chapters). THIS STEP: core §4.1 + Little Vespers + Great Vespers +
// Nocturns + Sunday Matins + Sunday Liturgy from 1-1.pdf (text layer CLEAN,
// scan July 8 2026); weekday sections merge in next.
//
// GENERATED from the raw pdftotext -layout text by paragraph-grammar walking
// (adapted tone-8 generators, July 8 2026) — nothing hand-retyped. Canonical
// §4.1 fields verified across ALL their print sites at generation. Psalm-verse
// fields whose print site is already encoded in shared.js are stored as {ref}
// — one print site, one encoding. Dynamically loaded only (§2.1).
// ─────────────────────────────────────────────────────────────────────────────

export default {
  "tone": 1,
  "_encoded": [
    "core",
    "little_vespers",
    "great_vespers",
    "nocturns",
    "matins",
    "liturgy",
    "vespers_weekday.sun",
    "vespers_weekday.mon",
    "vespers_weekday.tue",
    "vespers_weekday.wed",
    "vespers_weekday.thu",
    "vespers_weekday.fri",
    "compline.sun",
    "compline.mon",
    "compline.tue",
    "compline.wed",
    "compline.thu",
    "compline.fri",
    "compline.sat",
    "matins_weekday.mon",
    "matins_weekday.tue",
    "matins_weekday.wed",
    "matins_weekday.thu",
    "matins_weekday.fri",
    "matins_weekday.sat",
    "liturgy_weekday.mon",
    "liturgy_weekday.tue",
    "liturgy_weekday.wed",
    "liturgy_weekday.thu",
    "liturgy_weekday.fri",
    "liturgy_weekday.sat"
  ],
  "troparion": {
    "text": "When the stone had been sealed by the Jews, * And the soldiers were guarding Thine immaculate Body, * Thou didst arise on the third day, O Savior, * granting life unto the world. * Wherefore, the Hosts of the Heavens cried out to Thee, O Life-giver: * Glory to Thy Resurrection, O Christ. * Glory to Thy kingdom. ** Glory to Thy dispensation, O only Lover of mankind.",
    "tier": 2,
    "src": {
      "file": "1-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (CANONICAL print, §9.5 convention)"
    },
    "provenance_note": "Verified WORD-identical at all four print sites (LV dismissal, GV no-vigil, Matins God-is-the-Lord, Liturgy); quotation-mark variance at: none; pointing (*/**): identical; word-level divergence: none. Canonical field stores the GV print per the §9.5 ruling."
  },
  "dismissal_theotokion": {
    "text": "When Gabriel announced to thee, “Rejoice!”, O Virgin, * the Master of all became incarnate within thee, the holy tabernacle, * at his cry, as the righteous David said. Thou wast shown to be more spacious than the heavens, * having borne thy Creator. * Glory to Him Who made His abode within thee! * Glory to Him Who came forth from thee! ** Glory to Him Who hath set us free by thy birthgiving.",
    "tier": 2,
    "src": {
      "file": "1-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (Matins God-is-the-Lord site verified identical mod trailing punctuation)"
    }
  },
  "kontakion": {
    "text": "Thou didst arise from the grave in glory as God * and thus raised up the world with Thee; * and mortal nature singeth Thy praises as God, * and death hath disappeared; * Adam danceth, O Master, * and now Eve, freed from her chains, * rejoiceth as she cries aloud: ** It is Thee, O Christ, who grantest the Resurrection to all.",
    "tier": 2,
    "src": {
      "file": "1-1.pdf",
      "locus": "Sunday Matins after Ode VI (verified identical at the Liturgy site)"
    }
  },
  "ikos": {
    "text": "Let us praise as God all-powerful the One who hath risen on the third day, smashing the gates of Hades and rousing the age-long dead from the grave, who hath appeared to the myrrh-bearers, as it was His good pleasure to say to them first: Rejoice! and thus revealing joy to the apostles, as alone the Giver of life. Therefore with faith the Women proclaim the tokens of victory to the Disciples; Hades groaneth, Death lamenteth, the world exulteth and all rejoice together; for Thou, O Christ, hast granted the Resurrection to all.",
    "tier": 1,
    "src": {
      "file": "1-1.pdf",
      "locus": "Sunday Matins, after Ode VI"
    },
    "sourceLabel": "Ikos"
  },
  "little_vespers": {
    "rubric": "On “Lord, I have cried ...,” 4 Stichera:",
    "lic": [
      {
        "text": "Receive our evening prayers, * O Holy Lord, * and grant us remission of sins; * because Thou alone hast revealed ** the Resurrection to the world.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 1"
        }
      },
      {
        "text": "Receive our evening prayers, * O Holy Lord, * and grant us remission of sins; * because Thou alone hast revealed ** the Resurrection to the world.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 2"
        }
      },
      {
        "text": "Go around Zion, O ye peoples, * and encompass her, * and give glory to him who in her midst hath arisen from the dead; * for he is our God, ** and hath delivered us from our iniquities.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 3"
        }
      },
      {
        "text": "Come O ye peoples, * let us hymn and worship Christ * glorifying his Resurrection from the dead: * for he is our God, ** who hath redeemed the world from the deception of the adversary.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 4"
        }
      }
    ],
    "lic_verses": [
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC verse 1"
        }
      },
      {
        "text": "For with the Lord there is mercy, and with Him is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC verse 2"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC verse 3"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Little Vespers, LIC verse 4"
        }
      }
    ],
    "lic_theotokion": {
      "text": "O my brethren! * let us celebrate today a pure festival, * Let creation leap for joy, * let mankind dance, for the holy Theotokos hath called us together, * the unsullied treasury of virginity, * the rational Paradise of the second Adam, * the temple of the union of the two natures, * the solemn festival of the salvific reconciliation, * the bridal chamber in which the Word hath wedded the flesh, * the illumined cloud which truly carried incarnate Him who rideth upon the cherubim. * By her intercessions, O Christ God, ** do Thou save our souls.",
      "tier": 2,
      "src": {
        "file": "1-1.pdf",
        "locus": "Little Vespers, LIC Glory/Both-now Theotokion"
      }
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon",
      "rubric": "The Prokeimenon: “The Lord is King ...,” with its verses."
    },
    "aposticha": {
      "resurrection": [
        {
          "text": "By thy Passion, O Christ, * we have been set free from passions, * and by thy Resurrection we have been delivered from corruption. ** O Lord, glory be to thee.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Little Vespers, aposticha Resurrection sticheron (as printed here — differs from the GV print, §2.2)"
          }
        }
      ],
      "theotokos": [
        {
          "text": "Thou hast been glorified in generations and generations, * O Mary, maiden, virgin mother and Theotokos, * the protection of the world, * who hast given birth in the flesh to the Son of the Father * who hath no beginning; * the Son who is truly co-eternal with the Spirit. ** Implore Him that we may be saved.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 1"
          }
        },
        {
          "text": "We who are held fast by unseen afflictions * and have gained thee as our only protection, * O pure Virgin, * cry aloud to thee with thanksgiving: * Save us, all- holy Bride of God; ** for thou art the refuge of the world and the assistance of our race.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 2"
          }
        },
        {
          "text": "The world hath been renewed by thy childbearing, * O most pure maiden Birthgiver of God, * salvation of the faithful and unsleeping protector * of those who devoutly ask thee: * Cease not to intercede unceasingly ** on behalf of those who sing thy praises.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 3"
          }
        }
      ],
      "theotokos_verses": {
        "ref": "shared.lv_theotokos_aposticha_verses"
      }
    },
    "aposticha_theotokion": {
      "text": "The prophet named thee O Virgin, a Cloud of everlasting light, * for the Word of the Father, Christ our God, * came forth from thee like dew upon the fleece * and dawning from thee, * He hath enlightened the world and destroyed deception. * Cease not to intercede we pray thee, * O most holy Lady, ** for us who confess thee to be the true Theotokos.",
      "tier": 2,
      "src": {
        "file": "1-1.pdf",
        "locus": "Little Vespers, aposticha Theotokion"
      }
    },
    "closing_rubric": "“Now lettest Thou Thy servant depart ...,” Trisagion. Then:",
    "dismissal_rubric": "Glory ..., Both now ..., Theotokion: [marked WITHOUT a printed text — §9.6: resolution is an assembly question (Fekula/Theotokia tables), not a data gap]"
  },
  "great_vespers": {
    "rubric": "On “Lord I have cried ...,” 10 Stichera: 7 Resurrection Stichera and 3 of the Saint of the day, or 4 and 6 if the Menaion service is of Polyeleos rank.",
    "lic": [
      {
        "text": "Receive our evening prayers, * O Holy Lord, * and grant us remission of sins; * because Thou alone hast revealed ** the Resurrection to the world.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 1"
        }
      },
      {
        "text": "Go around Zion, O ye peoples, * and encompass her, * and give glory to him who in her midst hath arisen from the dead; * for he is our God, ** and hath delivered us from our iniquities.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 2"
        }
      },
      {
        "text": "Come O ye peoples, * let us hymn and worship Christ * glorifying his Resurrection from the dead: * for he is our God, ** who hath redeemed the world from the deception of the adversary.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 3"
        }
      },
      {
        "text": "Rejoice, O ye heavens! * Sound the trumpets O ye foundations of the earth! * O ye mountains thunder forth your joy! * for behold, Emmanuel hath nailed our sins to the Cross, * and the giver of life, hath slain death * raising up Adam, ** as He alone is the Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 4"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Let us sing the praise of him * who was willingly crucified in the flesh for our sakes, * suffered and was buried, and arose from the dead, * as we cry: * “Establish Thy Church in Orthodox belief, O Christ, * and grant peace unto our lives, ** as Thou alone art good and the Lover of mankind.”",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 5"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "As we the unworthy ones stand before Thy life-bearing tomb * we offer a hymn of glory * to thine ineffable compassion, O Christ our God; * because Thou didst accept the Cross and death, * O sinless one, * that Thou mightest grant resurrection to the world, ** as Thou alone lovest mankind.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 6"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Let us sing the praises of the Word, * without beginning and co-eternal, with the Father, * who came forth ineffably from a virgin womb, * willingly accepting the Cross and Death for our sake * and arose in glory, * wherefore we cry aloud: * “Giver of life, O Lord, glory be to thee, ** the Savior of our souls.”",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC sticheron 7"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      }
    ],
    "lic_verses": [
      {
        "text": "Bring my soul out of prison * that I may confess Thy name.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 1"
        }
      },
      {
        "text": "The righteous shall wait patiently for me * until Thou shalt reward me.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 2"
        }
      },
      {
        "text": "Out of the depths have I cried unto Thee, O Lord; * O Lord, hear my voice.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 3"
        }
      },
      {
        "text": "Let Thine ears be attentive * to the voice of my supplication.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 4"
        }
      },
      {
        "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 5"
        }
      },
      {
        "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, * my soul hath hoped in the Lord.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 6"
        }
      },
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 7"
        }
      }
    ],
    "lic_menaion_rubric": "Then the Stichera from the Menaion, with the following Verses:",
    "lic_menaion_verses": [
      {
        "text": "For with the Lord there is mercy, and with Him is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 1"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 2"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 3"
        }
      }
    ],
    "dogmatikon_rubric": "Glory from the Menaion, if appointed. Otherwise: Glory ..., Both now ..., the Dogmatic Theotokion:",
    "dogmatikon": {
      "text": "Let us hymn the whole world’s glory, * who sprang forth from mankind and who gave birth to the Master, * the Portal of heaven, Mary the Virgin, * the hymn of the Bodiless Powers and adornment of the faithful; * for she hath been revealed as the Heaven and Temple of the Godhead. * By destroying the middle wall, she hath brought forth peace, * and opened wide the Kingdom. * Therefore, holding fast to her as a firm confirmation of the faith, * we have as our champion the Lord born from her. * Take courage therefore, take courage, O ye people of God; ** for as the Invincible one he shall conquer our adversaries.",
      "tier": 2,
      "src": {
        "file": "1-1.pdf",
        "locus": "Great Vespers, Glory/Both-now — Dogmatic Theotokion"
      },
      "sourceLabel": "Glory ..., Both now ..., the Dogmatic Theotokion"
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon"
    },
    "aposticha": [
      {
        "text": "By Thy Passion, O Christ, * we have been set free from passions, * and by Thy Resurrection we have been delivered from corruption. ** O Lord, glory be to thee.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 1 (unversed)"
        }
      },
      {
        "text": "All ye His creation rejoice! * let the heavens be glad, * let the nations clap their hands with gladness; * for Christ our Savior hath nailed our sins to the Cross * and by slaying death hath granted us life eternal, * raising all of the fallen race of Adam, ** as he alone is the Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 2"
        }
      },
      {
        "text": "Being the King of heaven and earth, * O Incomprehensible one, * Thou wast willingly crucified through Thy love for mankind; * when Hades met thee he was vexed, * while the souls of the righteous receiving thee below rejoiced, * and Adam, seeing thee his Creator in the nethermost regions, rose again. * O the wonder! * How did the life of all taste death? * Except that he wished to enlighten the world, * which crieth out saying: * “O Thou who didst arise from the dead, ** O Lord glory be to thee!”",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 3"
        }
      },
      {
        "text": "Carrying sweet spices the myrrh-bearing women * reached Thy tomb with haste, lamenting; * and not finding Thy most pure Body, * but learning from the angel the new and marvelous wonder, * spake unto the apostles saying: * The Lord hath arisen, ** granting the world His great mercy.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 4"
        }
      }
    ],
    "aposticha_verses": {
      "ref": "shared.saturday_gv_aposticha_verses"
    },
    "aposticha_glory_rubric": "Glory from the Menaion, if appointed, otherwise:",
    "aposticha_theotokion": {
      "text": "Behold, the prophecy of Isaiah hath been fulfilled, * for a Virgin hath given birth, * and after giving birth hath remained a Virgin as before. * For it was God who was born from her; * therefore He began nature anew. * O Mother of God, disdain not the supplications of Thy servants, * which are offered unto thee in Thy temple; * since thou didst bear the Compassionate one in thine embrace, ** have pity on Thy servants, and beseech Him that our souls be saved.",
      "tier": 2,
      "src": {
        "file": "1-1.pdf",
        "locus": "Great Vespers, aposticha Theotokion — the REAL Saturday fallback (§4.3/§8)"
      }
    },
    "vigil_rubric": {
      "ref": "shared.theotokos_virgin_rejoice"
    },
    "no_vigil_rubric": "If a Vigil is not served, we chant (Once):"
  },
  "nocturns": {
    "frame_rubric": "The priest saith: “Blessed is our God ...,” and we say: Amen. Glory to Thee, our God, glory to Thee. O heavenly King... Trisagion through Our Father... Priest: For Thine is the kingdom ..., And we say: Amen. Lord, have mercy (12 times), Glory..., Both now..., O come, let us worship (Thrice). Psalm 50 (Have mercy on me, O God...)",
    "canon": {
      "title": "Canon to the Holy & Life-creating Trinity",
      "composer": "Metrophanes of Smyrna",
      "acrostic": "I hymn Thee, the one three-Sunned Essence",
      "heading_rubric": "And then, the Canon to the Holy & Life-creating Trinity, the acrostic whereof is “I hymn Thee, the one three-Sunned Essence,” the composition of Metrophanes of Smyrna, in Tone I:",
      "odes": {
        "1": {
          "irmos": {
            "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 1 irmos"
            }
          },
          "items": [
            {
              "text": "Refrain: O most holy Trinity, our God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Never silent, the seraphim glorify the one Cause in three Hypostases, beginningless, eternal, all-creating, unapproachable: Whom every tongue faithfully honoreth with hymns.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 2"
              },
              "label": "plain"
            },
            {
              "text": "That Thou mightest reveal to men Thy single, Thrice-effulgent divinity to men, creating man of old Thou didst form him according to Thine image, bestowing upon him mind, word and spirit, in that Thou lovest mankind.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Showing forth from on high one dominion in three divine hypostases, O Father, Thou didst say to Thy Son, Who is equal to Thee in activity, and to the Spirit: Come ye and, descending, let us confuse their tongues.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 4"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            },
            {
              "text": "The Father is the beginningless Mind Who in times past was spoken of by the most wise ones in images; the Word is equally without beginning and consubstantial; and the Holy Spirit is He Who wrought the incarnation of the Word within the Virgin.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 5"
              },
              "label": "both_now"
            }
          ]
        },
        "3": {
          "irmos": {
            "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 3 irmos"
            }
          },
          "items": [
            {
              "text": "Of old thou didst clearly manifest Thyself unto Abraham in three Hypostases, one in the essence of divinity; and in images thou didst reveal the utter truth of theology. Thee do we hymn with faith, the three-Sunned God Who alone hath dominion.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 1"
              },
              "label": "plain"
            },
            {
              "text": "O Father, the immutable Son, Who as God was begotten of Thee, without corruption, shone forth, Light from Light; and the divine Spirit proceeded as Light. We faithfully worship and glorify the effulgence of the three Hypostases of the one Godhead.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "The unity of the Trinity is supra-naturally, ineffably and in a manner past understanding glorified by the noetic beings, who unceasingly utter praise with thrice-holy voices; and with them the Lord in three Hypostases is also hymned by us with one accord.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 3"
              },
              "label": "glory"
            },
            {
              "text": "From thee, He Who transcendeth time issued forth within time without seed: the Invisible One made Himself like unto us, teaching us the single Essence and Dominion of the Father, the Son and the Spirit, O Theotokos; wherefore, we glorify thee.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 4"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            },
            {
              "text": "Lord, have mercy. (Thrice)",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 5"
              },
              "label": "plain"
            }
          ]
        },
        "4": {
          "irmos": {
            "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 4 irmos"
            }
          },
          "items": [
            {
              "text": "Shine upon me the splendors of Thy deifying effulgence, O three-Sunned Godhead, that the beauty of Thy divine radiance, which passeth understanding, and the sweet and light-giving communion thereof, may be perceived by the eyes of my heart.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Of old, Thou didst establish the heavens and all their power by Thine all- accomplishing Word and the consubstantial Spirit of Thy mouth, O Lord, with Whom Thou hast dominion over all things in the thrice-effulgent sole dominion of the Godhead.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "In that Thou hast created me according to Thine image and likeness, O divine and all-accomplishing Trinity, Thou uncommingled Unity, give me understanding and enlighten me, that I may do Thy holy will, which is good and perfect in strength.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            },
            {
              "text": "Thou hast given birth. O most pure one, to the supremely divine Son, One of the Trinity, Who became incarnate from thee for our sake, illumining mortals with the never-waning light and radiance of the three-Sunned Godhead.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 4"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            }
          ]
        },
        "5": {
          "irmos": {
            "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 5 irmos"
            }
          },
          "items": [
            {
              "text": "O Trinity Who hast sole dominion, Who wast well pleased that the pristine array of the angels be made resplendent by the unapproachable rays of Thy beauty, with Thine effulgence enlighten those who hymn Thee in an Orthodox manner.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Now nature which, in Thy goodness Thou didst bring into existence, hymneth Thee, the only three-Sunned Godhead, asking deliverance from transgressions and perils, from misfortunes and tribulations.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 2"
              },
              "label": "plain"
            },
            {
              "text": "With faith we glorify the Father, the Son and the Holy Spirit, the one Essence and Godhead, indivisibly separate, the one God of creation visible and invisible.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 3"
              },
              "label": "glory"
            },
            {
              "text": "All the sayings of the prophets described beforehand thine Offspring, Whom, ineffable and not easily described, we have come to know as our Initiator into the mystery of the one, three-Sunned Godhead, O most pure one.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 4"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            }
          ]
        },
        "6": {
          "irmos": {
            "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 6 irmos"
            }
          },
          "items": [
            {
              "text": "Being equal in power and identical in will, O transcendent Trinity, Thou art a simple and indivisible Unity; wherefore, preserve us by Thy power.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "By thy will, in that Thou art good, Thou didst form everything from all the ages out of nothing, O unapproachable Trinity, and Thou didst likewise create man. Deliver me now from every evil circumstance.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            },
            {
              "text": "Thou wast the dwelling-place of the never-setting Sun Who omnipotently created the great luminaries and set them in their ranks, O most pure Virgin Bride of God; deliver me now from the darkness of the passions.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            },
            {
              "text": "Lord, have mercy. (Thrice)",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 4"
              },
              "label": "plain"
            }
          ]
        },
        "7": {
          "irmos": {
            "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 7 irmos"
            }
          },
          "items": [
            {
              "text": "O Word of God, consubstantial Effulgence of the omnipotent God: As Thou hast promised, in that Thou art compassionate, with Thy Father and Spirit accomplish the deifying indwelling which is in Thee; and show me forth as repug- nant to the demons and the passions.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "That Thou mightest show us the depth of Thy compassion, O Master, Thou didst send Thy Son unto our lowliness, and restored it to its pristine splendor. And now bring me understanding through the divine Spirit.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            },
            {
              "text": "The King of all, Who is up-borne upon the throne of the cherubim, made His abode within thy virginal womb, O most pure one, to deliver all from corruption, in that He is the Lover of mankind. Preserve us now by thy supplications.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            }
          ]
        },
        "8": {
          "irmos": {
            "text": "The furnace moist with dew * was an image and prefiguring of a wonder past nature, * burning not the children whom it had received, * so the fire of the Godhead consumed not the Virgin's womb * into which it had descended. * Therefore in song let us sing: * Let the whole creation bless the Lord * and supremely exalt Him throughout all ages.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 8 irmos"
            }
          },
          "items": [
            {
              "text": "By a deifying command, O Lord of all, Almighty One in three Hypostases, Thou didst stretch out the heavens like a skin; and suspended the mass of the earth with Thine omnipotent hand. Wherefore, strengthen Thy servants with faith and Thy love, O Lover of mankind, that with longing we may glorify Thee forever.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "O three-Sunned light of Hypostases, Who art one in essence, with divine light illumine those who hymn thee, that they may ever gaze upon Thy light-creating rays, by which am I filled with Thy sweet, light-giving and most rich glory, and with faith supremely exalt Thee throughout all ages.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            },
            {
              "text": "Having assumed human nature without change, thy Son ascended into the heavens, O most pure Theotokos, delivering mankind from the ancient corruption by the excellence of His goodness. To Him do we sing in thanksgiving: Let all creation bless the Lord and supremely exalt Him throughout all ages!",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            }
          ]
        },
        "9": {
          "irmos": {
            "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 9 irmos"
            }
          },
          "items": [
            {
              "text": "O most holy and consubstantial Trinity, Thou Savior of creation, material and noetic, save Thy servants from the attack and oppression of the enemy, and ever preserve Thy flock unharmed.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "That Thou mightest show forth the incalculable depths of Thy goodness, Thou didst make us promises of salvation. O three-Sunned and omnipotent God Who hast sole dominion, grant that Thy servants may do them.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            },
            {
              "text": "Look down upon our supplications, O Thou one God Who in truth art believed to be in three divine Hypostases, and grant consolation to Thy servants, through the supplications of the most pure and all-hymned Mother of God.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "both_now"
            }
          ]
        }
      }
    },
    "after_ode3": {
      "sessional": {
        "text": "Let us all worship the Father and the Son, and the upright Spirit Who is equal to them. Glory to the uncreated Trinity, the supremely divine Power, Whom the ranks of the incorporeal beings glorify! This day let us who are born on earth praise Him faithfully with fear.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode III"
        },
        "spec_mel": "Thy tomb, O Savior",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "To the path of repentance guide us who ever stray into the trackless wastes of evil and anger the supremely good Lord, O blessed Mary who knewest not wedlock, thou refuge of those who despair, and the dwelling-place of God.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode III"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "theotokion"
      }
    },
    "after_ode6": {
      "sessional": {
        "text": "O ye mortals, with fear let us worship the Holy Trinity, the indivisible Essence, Who is distinct in three Hypostases without being separated, and abideth indivisibly in the essence of the Godhead; and let us glorify the supremely good God as Creator and Master.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode VI"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "spec_mel": "Thy tomb, O Savior",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "Guide aright my wretched soul, O pure one, and have pity on it which, for the multitude of my transgressions, hath stumbled headlong into the pit of destruction, O all-immaculate one; and at the dread hour of my death rescue it from the accusing demons and from every torment.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode VI"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "theotokion"
      }
    },
    "gregory_rubric": {
      "rubric": "Then, the hymn of Gregory the Sinaite. (which, is chanted every Sunday after the canon)",
      "stanzas": [
        {
          "text": "It is truly meet to glorify Thee, the Word of God, before Whom the cherubim tremble and quake, and Whom the hosts of heaven glorify. And with fear we glorify Christ, the Bestower of life, Who rose from the tomb on the third day.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 1"
          }
        },
        {
          "text": "With divine songs let us all in godly manner hymn the Father, the Son and the Spirit divine, the Might in three Hypostases, the one Sovereignty and Dominion,",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 2 — \"in godly manner\" (no article); \"the one Sovereignty and Dominion\" (NOT tone-7/8 \"Kingship\"); 2-1/5-1 word-order side (§5 per-tone)"
          }
        },
        {
          "text": "Whom all mortals hymn and the hosts of heaven glorify, the essential Unity in three Hypostases, Who is worshipped with faith by all.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 3"
          }
        },
        {
          "text": "We magnify Thee, the Godhead, the Lord of the cherubim, the incomparable divine Origin of the seraphim, the indivisible Trinity in Unity.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 4"
          }
        },
        {
          "text": "I worship God: the beginningless Father, the Son Who is equally without beginning, and the Spirit. With hymns let us honor the one indivisible and unified Essence, the threefold Unity.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 5"
          }
        },
        {
          "text": "Shine forth Thy dazzling lightning flashes upon me, O my God in three Hypostases, Creator of all, and show me to be a splendid, luminous and unshakable habitation of Thine unapproachable glory.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 6 — \"unshakable\" (shared \"immutable\"; §5 per-tone, as tones 5/6)"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ]
        },
        {
          "text": "With fear let us glorify Christ the Bestower of life, Who ineffably became incarnate from the Virgin, for the cherubim tremble and quake before Him, and the angelic armies glorify Him.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 7 — \"incarnate from the Virgin\" (shared \"of the Virgin\"; §5 per-tone, as tones 5/6)"
          }
        }
      ],
      "provenance_note": "RULED (Bill, July 8 2026): Gregory stored PER-TONE. 1-1 tracks the tone-5/6 byte-state — \"Sovereignty\" (not the tone-7/8 \"Kingship\"), \"in godly manner\" (no article), \"unshakable\", \"from the Virgin\"; stanza 5 matches shared. Divergences at stanzas 2, 6, 7. Shared table remains the 2-1 print."
    },
    "closing_rubric": "The rest of Nocturnes, and the dismissal."
  },
  "matins": {
    "god_is_lord_rubric": "On “God is The Lord ...,” the Resurrection Troparion, in Tone I: [troparion printed \"(Twice)\"] Glory ..., the Troparion from the Menaion, otherwise; Glory ..., Both now ..., The Theotokion, in Tone I, (or in the Tone of that from the Menaion):",
    "sessionals": [
      {
        "rubric": "After the 1st chanting of the Psalter (Kathisma II), the Sessional Hymns of the Resurrection, in Tone I:",
        "items": [
          {
            "text": "While watching Thy grave, the soldiers * became as dead men from the lightning flash of the angel * who appeared and proclaimed to the Women the Resurrection. * We glorify Thee, the destroyer of corruption; * we fall down before Thee, * who hath risen from the grave ** and who alone art our God.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "Thou wast willingly nailed to the Cross, * O Compassionate one, * and laid in a tomb as a mortal, * O Giver of life. * By Thy death, O Powerful one, * Thou hast smashed its might; * for Hades’ gatekeepers trembled before Thee; * Thou hast raised with Thee the dead from every age, ** for Thou alone lovest mankind.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional 2"
            },
            "label": "plain"
          }
        ],
        "verses": [
          {
            "text": "Arise, O Lord my God, let Thy hands be lifted on high; * forget not Thy paupers to the end.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "All we who with love flee for refuge to thy goodness * know thee to be the Mother of God * and after childbirth still truly Virgin; * for we sinners have thee as our protection; * we have thee as our salvation in misfortunes, ** as the only All-immaculate one.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Kathisma II, Glory/Both-now closer"
          },
          "type": "theotokion"
        }
      },
      {
        "rubric": "After the 2nd chanting of the Psalter (Kathisma III), The Sessional Hymns of the Resurrection, in Tone I:",
        "items": [
          {
            "text": "The women came to Thy tomb at dawn * and seeing a vision of an angel they trembled; * the tomb became resplendent with life; * and amazed by the miracle, * they returned to the disciples and proclaimed the Resurrection: * for Christ hath despoiled Hades, * as alone almighty and all powerful, * raising up those in corruption, * dispelling the fear of condemnation ** by the power of the Cross.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "O Life of all, Thou wast nailed to the Cross; * O immortal Lord, Thou wast numbered among the dead, * arising on the third day, O Savior, * raising Adam from corruption; * wherefore the heavenly Powers cried out to Thee: * “O Giver of life, * Glory to Thy sufferings, O Christ; * glory to Thy Resurrection; * glory to Thy condescension, ** O only Lover of mankind.”",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional 2"
            },
            "label": "plain"
          }
        ],
        "verses": [
          {
            "text": "I will confess Thee, O Lord, with my whole heart, * I will tell of all Thy wonders.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "O Mary, holy tabernacle of the Master, * raise us up who have fallen into the pit of wicked despair, * of transgressions and afflictions; * for thou art the salvation, * the help and the mighty protection of sinners, ** and thou dost save thy servants.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Kathisma III, Glory/Both-now closer"
          },
          "type": "theotokion"
        }
      }
    ],
    "polyeleos_rubric": {
      "ref": "shared.polyeleos"
    },
    "evlogitaria_rubric": {
      "ref": "shared.evlogitaria"
    },
    "hypakoe": {
      "text": "The women came to Thy tomb at dawn * and seeing a vision of an angel they trembled; * the tomb became resplendent with life; * and amazed by the miracle, * they returned to the disciples and proclaimed the Resurrection: * for Christ hath despoiled Hades, * as alone almighty and all powerful, * raising up those in corruption, * dispelling the fear of condemnation ** by the power of the Cross.",
      "tier": 2,
      "src": {
        "file": "1-1.pdf",
        "locus": "Sunday Matins, after the Evlogitaria"
      },
      "sourceLabel": "The Sessional Hymn"
    },
    "anabathmoi": [
      {
        "troparia": [
          {
            "text": "When I am afflicted, * I cry unto Thee, O Lord, ** hearken unto my pains.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 1"
            }
          },
          {
            "text": "For those who dwell in the desert * the longing for God never ceases, ** for they are far from the vanity of this world.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "To the Holy Spirit, as to the Father and the Son, * are due honor and glory; ** thus let us sing to the Trinity, a single power.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 1, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Having lifted me up to the summit of Thy laws, * make me shine with virtues, O God, ** that I may sing Thy praises.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 1"
            }
          },
          {
            "text": "Take me with Thy right hand, O Word, * guard me and keep me, ** lest the fire of sin scorch me.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "In the Holy Spirit all creation is made new * and hastens back to its original condition; ** for He is equal in strength to the Father and the Word.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 2, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "With those who said unto me: * “Let us journey to the courts of the Lord,” ** my Spirit was gladdened and my heart rejoiceth.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 1"
            }
          },
          {
            "text": "In the house of David is great fear; * for when the thrones are set therein, ** all the tribes and nations of the earth will be judged.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "To the Holy Spirit must be offered honor, adoration, glory and power, * as befits also the Father and the Son; ** for the Trinity is a Unity, one in essence, but not in Hypostases.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 3, Glory/Both-now"
          }
        }
      }
    ],
    "prokeimenon": {
      "tone": 1,
      "text": {
        "text": "Now will I arise, saith the Lord; I will establish them in salvation, * I will be manifest therein.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Matins prokeimenon"
        }
      },
      "verse": {
        "text": "The words of the Lord are pure words, silver that is fired, tried in the earth, brought to sevenfold purity.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Matins prokeimenon verse"
        }
      }
    },
    "canon": {
      "title": "Resurrection Canon Tone I",
      "heading_rubric": "After which: “O God, save Thy people ...,” Then the Canons: Resurrection Canon Tone I.",
      "odes": {
        "1": {
          "irmos": {
            "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 1 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "As God, working with immaculate hands, Thou hast fashioned me in the beginning from dust, and now stretching out those hands on the Cross, Thou didst recall from the earth my corruptible body, which Thou hast taken from the Virgin.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 1"
                }
              },
              {
                "text": "He, who by divinely breathing upon me placed a soul in me, hath willingly submitted to be slain for me and thus delivering his soul to death hath freed my soul from the eternal bonds, raising it with Himself, and glorifying it with incorruption.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Rejoice! source of grace, Rejoice! ladder and gate of heaven, Rejoice! lamp-stand and golden jar, the un-hewn mountain, that bore unto the world, Christ the Giver of life.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 1, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Christ’s incarnation maketh me divine, Christ’s humility exalteth me, and by suffering the passion in the flesh, Christ the Giver of life maketh me dispassionate, wherefore I sing a hymn of thanksgiving, for He hath been glorified.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Having endured crucifixion, Christ exalteth me, having put death to death, Christ hath raised me up with himself, granting me life, wherefore I clap my hands in gladness singing a song of victory to the Savior, for gloriously hath He been glorified.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Most pure Virgin, thou hast conceived God, and in virginity, thou hast given birth to Christ incarnate from thee, in person the one and only- begotten Son, known in two natures, for He is glorified.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 1, cross_resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "What hymn worthy of thee can our weakness offer unto thee? If not only the joyful one Gabriel revealed unto us: “Rejoice! O Theotokos, Virgin Mother who knewest not wedlock!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 1"
                }
              },
              {
                "text": "Unto the Ever-virgin and Mother of the King of the highest Powers, let us the faithful cry in spirit from hearts most pure: “Rejoice! O Theotokos, Virgin Mother who knewest not wedlock!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 2"
                }
              },
              {
                "text": "Immeasurable is the abyss of thine incomprehensible child-bearing, O all-pure one; therefore with undoubting faith we offer thee our song: “Rejoice! O Theotokos, Virgin Mother who knewest not wedlock!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "3": {
          "irmos": {
            "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 3 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "As Thou art my God, O Good one, Thou hast taken compassion upon me, fallen as I was, deigning to come down to me, and exalting me through Thy crucifixion that I may cry unto Thee: “Holy art Thou the Lord of glory, in goodness beyond compare!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 1"
                }
              },
              {
                "text": "O Christ, as the hypostatic Life and as compassionate God, Thou hast clothed Thyself with me, the corrupted one, descending, O Master, unto the dust of death, destroying the power of death, and arising on the third day, whereby Thou hast clothed me with incorruption.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Having conceived God in thy womb, O Virgin, by the Most holy Spirit, thou hast remained unburned, like the bush that burnt before Moses the lawgiver yet remained unburned, clearly foretelling of thee who received the unendurable fire.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 3, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "To Christ God, who took the wandering sheep upon his shoulders and through a tree destroyed his sin, let us cry aloud: “Thou Who hast exalted the horn of Thy faithful, Holy art thou, O Lord!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Unto Him who brought up from Hades Christ the great shepherd and by his priestly power, through the apostles, shepherded in wisdom all the nations, let us in truth by the divine Spirit give adoration.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Unto the Son who without seed wast willingly incarnate from a Virgin, and who by his divine power kept her a pure Virgin after child-bearing, to the God of all, let us cry aloud: “Holy art thou, O Lord!”",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 3, cross_resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Truthfully, O Virgin, following the words of the prophet, we name thee the light cloud; for from thee the Lord hath come to overthrow the idols of Egypt, made by men, and to enlighten those who served them.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 1"
                }
              },
              {
                "text": "The choir of prophets hath truly named thee the sealed fountain and the shut gate, clearly depicting for us the symbols of thy virginity, O All-praised one, which Thou didst preserve even after childbirth.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 2"
                }
              },
              {
                "text": "O all-immaculate Virgin, Gabriel, enabled as far as is possible to know the mind of God, brought thee a message of great gladness, plainly disclosing the conception of the Word, and proclaiming thine ineffable childbirth.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "4": {
          "irmos": {
            "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 4 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Who is this Savior that cometh from Edom, wearing a crown of thorns, His garments reddened, and hanging on a tree? He is the Holy one of Israel, who hath come for our salvation and restoration.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 1"
                }
              },
              {
                "text": "Behold, O ye disobedient people, and be ashamed! For He whom ye in your madness begged Pilate to hang upon a cross as a malefactor hath abolished the power of death, and in a manner befitting God, arisen from the tomb.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "We know thee to be the tree of life, O Virgin; for it was not the fruit which bringeth death that budded from thee, but rather the delight of eternal life and the salvation of us who hymn thee.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 4, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Who is this fair one from Edom, His garments dyed scarlet with the grapes of Bosor? He is as comely as God and as a mortal He hath reddened his robe with the blood of His flesh. To Him we the faithful sing: “Glory to Thy power, O Lord!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Christ, appearing as a high priest of the blessings to come, hath destroyed our sin, and showing a strange way by His blood, hath hastened unto a greater and more perfect tabernacle, and is thus our guide into that Holy Place.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou didst pay the ancient debt of Eve, O All-praised one, by the new Adam who hath come forth for our sake. For uniting to himself from a pure conception rational and living flesh, Christ came forth from thee, as one Lord in both natures.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 4, cross_resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Hear wonders, O heaven, take note, O earth, for a daughter of the earthly, fallen Adam hath been declared the Mother of God and of her Creator, for our salvation and restoration.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 1"
                }
              },
              {
                "text": "We praise Thy great and awesome mystery; for unknown to the Commanders of the armies beyond this world, the One Who hath descended upon thee, like dew upon the fleece, O All-praised one, hath done so for our salvation and restoration.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 2"
                }
              },
              {
                "text": "O All-praised Theotokos, Holy of Holies, expectation of the nations, and the salvation of the faithful, from thee hath dawned the Redeemer and Giver of life and our Lord. Entreat him that thy servants may be saved.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "5": {
          "irmos": {
            "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 5 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The Jews put to death on the Tree of the Cross the great shepherd and Lord; but from death’s might He hath rescued like sheep the dead buried in Hades.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 1"
                }
              },
              {
                "text": "When Thou didst announce the glad tidings of peace by Thy cross and proclaimed deliverance for captives, O my Savior, then didst Thou, O Christ, put to shame him who held them captive revealing him as naked and destitute by Thy divine arising.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O All-praised one, despise not the prayers of those who faithfully entreat thee, but accept them, O Pure one, and convey them to thy Son, our God and only benefactor; for in thee we have acquired a protectress.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 5, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "O the riches and depth of the wisdom of God! The Lord who snareth the wise hath ransomed us from their trickery; for having suffered willingly in the feebleness of the flesh, He hath been raised from the dead by His own life-giving strength.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Being God, Christ united Himself to flesh for our sake, and hath been crucified, and died, and hath been buried, and arisen again, ascending up to the Father with His own flesh, with which He will come again to save those who devoutly serve Him.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Pure Virgin, Holy of Holies, Thou hast given birth to the Holy one of the Holy, who sanctifieth all, Christ the Redeemer, wherefore we proclaim thee as the Queen and Sovereign Lady of all, as the Mother of the Creator of all that is.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 5, cross_resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Beholding thee, the Powers of heaven are made glad, and with them rejoiceth the assemblies of mortals; for they have been united, O Virgin Theotokos, by thine offspring; whom we worthily glorify.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 1"
                }
              },
              {
                "text": "Let every mortal tongue and mind be roused to the praise of mortal man’s true adornment; the Virgin clearly standeth by the Lord, glorifying those who with faith sing the praises of her wonders.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 2"
                }
              },
              {
                "text": "Every song and every praise of the wise offered to the Virgin and Theotokos is worthy of praise, for she hath become the temple of the most high glory of God; whom as is fitting, we glorify.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "6": {
          "irmos": {
            "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 6 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Through the transgression of the first-formed man, O Lord, we were grievously wounded; but by Thy wounds, by which Thou wast afflicted for our sakes, O Christ, we have been healed; for Thou art the strength and restoration of the feeble.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 1"
                }
              },
              {
                "text": "Thou hast led us up from Hades, O Lord, by destroying the all-devouring whale of the deep, O All-powerful one, and destroying his power by Thy might; for Thou art the life and the light and the resurrection.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "The Forefathers of mankind rejoice in thee, immaculate Virgin, for through thee they regain Eden, which they had lost through transgression; for thou art pure both before child-bearing and after giving birth.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 6, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Christ God, being dispassionate in mind and immaterial, Thou dost mingle with the human mind by the means of the divine nature and the coarseness of the flesh; and wast wholly united to the whole of me without change, that by being crucified Thou mightest hand salvation to the whole of me, who had fallen.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Having tripped, Adam hath fallen and been crushed, cheated of his hope of deification, but the new Adam hath arisen, deified by the union of the Word, and by the Passion gaining dispassion, He is glorified as the Son enthroned with the Father and the Spirit.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Not leaving the bosom of His Begetter, Who is without beginning, He lodgeth and cometh to rest in the womb of a pure maiden, He that is without a mother hath become incarnate without a father, the God of righteousness who reigneth as king, His fearful and ineffable generation is without genealogy.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 6, cross_resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "The heavenly Ranks stand beside thine Offspring like servants, fittingly struck with amazement at thy seedless child-bearing, O Ever-virgin; for thou art pure both before bearing child and after giving birth.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 1"
                }
              },
              {
                "text": "The Word, who before was without flesh, and who made the universe by His will, who brought the armies of the Bodiless ones into being out of nothing, as All-powerful, became incarnate from thee, O Most pure one.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 2"
                }
              },
              {
                "text": "The foe hath been slain by thy life-bearing fruit, and Hades hath been trampled under foot, O thou who art Full of God’s grace, and we who were chained have been freed; wherefore I cry out: “Deliver me from the passions of my heart!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "7": {
          "irmos": {
            "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 7 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The earth did shudder, the sun was hidden, and light was enveloped in darkness, the sacred veil of the Temple was rent in twain and the rocks were rent asunder; for the Just One hath tasted death upon the cross; O Thou praised and supremely glorified God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 1"
                }
              },
              {
                "text": "When Thou, the highly exalted one, didst willingly become as one helpless and slain among the dead for our sakes, Thou didst set us all free, and with a lofty arm, didst raise us up together with Thee, O Thou praised and supremely glorified God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Rejoice, spring of eternal water! Rejoice, Paradise of delight! Rejoice, wall of the faithful! Rejoice, Bride who kneweth not wedlock! Rejoice, joy of all the world! through whom the God of our fathers hath dawned unto us, praised and glorified above all.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 7, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Of old the earth was cursed, made crimson with the blood of Abel by the murdering hand of a brother; but bedewed by Thy divine blood it is blessed and leaping for joy crieth out: “O God of our Fathers, blessed art Thou!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Let the people of the Jews, opposed to God, lament the reckless deed of putting Christ to death; but let the gentiles be glad and clap their hands and cry aloud: “O God of our Fathers, blessed art Thou!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 2"
                }
              },
              {
                "text": "Lo, the dazzling angel crieth out to the myrrh-bearing Women, “Come, see the tokens of Christ’s Resurrection, the graves clothes and the tomb, and cry aloud: O God of our Fathers, blessed art Thou!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 3"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Jacob prophetically discerned thee in the ladder, O Theotokos; for through thee the Highly Exalted was well-pleased to appear and make His abode among mankind: O Thou praised and supremely glorified God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 1"
                }
              },
              {
                "text": "Rejoice, Adam’s most revered fleece! The Shepherd, the highly exalted One, came forth from thee, truly clothed in my whole nature, through His ineffable compassion: O Thou praised and supremely glorified God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 2"
                }
              },
              {
                "text": "God Who is before all ages hath truly become the new Adam from thy pure blood; beseech him now to make me, who am old and worn out, renewed as I cry: “O Thou praised and supremely glorified God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "8": {
          "irmos": {
            "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye his works, * hymn and exalt him supremely throughout all ages.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 8 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Word of God, Thou Who by Thy will maketh and transformeth all things, by Thy Passion Thou hast transformed the shadow of death into everlasting life, wherefore we and all Thy works unceasingly praise Thee as Lord, and supremely exalt Thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 1"
                }
              },
              {
                "text": "By rising on the third day, O Christ, Thou hast destroyed the misery and destruction within the gates and strongholds of Hades. Unceasingly all Thy works praise Thee as Lord, and supremely exalt Thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Let us praise her who without seed and beyond nature brought forth Christ the precious pearl from the divine flesh crying: “All ye His works bless the Lord, praise and supremely exalt Him throughout all ages.”",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 8, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Come, O ye peoples, let us worship the place upon which stood Christ’s immaculate feet, and where His divine, life-giving palms were stretched out on the Tree for the salvation of all mortals; and let us circle the tomb of life, singing, “Let all creation bless the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 1"
                }
              },
              {
                "text": "The lawless slander of the Jews who slew God hath been refuted; for He Whom they called a deceiver, hath been raised as all-powerful, making a mockery of the seals of the lawless ones. Wherefore rejoicing let us sing: “Let all creation bless the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 2"
                }
              },
              {
                "text": "The most pure seraphim, as they praise the glory of the one lordship in thrice- holy hymns, like free slaves glorify with fear the three-hypostatic Godhead. With them we also devoutly sing, “Let all creation bless the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 3"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Let us all hymn the praise of the resplendent Bridal Chamber, from which Christ, the Master of all, came forth as a bridegroom, as we sing: “All ye His works bless the Lord, praise and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 1"
                }
              },
              {
                "text": "Rejoice!, glorious throne of God! Rejoice! wall of the faithful, through whom Christ, the light, hath dawned for those in darkness, who call Thee blest and cry: “All ye His works bless the Lord, praise and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 2"
                }
              },
              {
                "text": "Cause of our salvation, who bore the Lord, Virgin all-praised, intercede for all who devoutly cry: “All ye His works bless the Lord, praise and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "After the Troparia from the Menaion for ODE VIII, we chant:"
        },
        "9": {
          "irmos": {
            "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
            "tier": 2,
            "src": {
              "file": "1-1.pdf",
              "locus": "Sunday Matins canon, Ode 9 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O how the lawless and disobedient people, having plotted evil, justified the ungodly malefactor, but condemned the Just Lord of glory to the Tree! Him we fittingly magnify.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 1"
                }
              },
              {
                "text": "We glorify Thee O Savior, the blameless Lamb who taketh away the sins of the world, risen on the third day, and Who with the Father and the divine Spirit we acknowledge as God, and the Lord of glory, Thee do we magnify.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Save Thy people, O Lord, whom Thou hast purchased with Thine own precious blood, strengthening all Orthodox Christians against enemies, and bestowing peace upon Thy Churches, O Lover of mankind, through the supplications of the Theotokos.",
              "tier": 1,
              "src": {
                "file": "1-1.pdf",
                "locus": "Sunday Matins canon, Ode 9, resurrection closer"
              },
              "type": "theotokion",
              "refrain": "Most holy Theotokos save us.",
              "sourceLabel": "Theotokion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Thy Cross, O Lord, hath been glorified with ineffable power; for Thy weakness was revealed as transcending all power. Through it the powerful have been cast down to the earth, while paupers have been raised safely to heaven.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Our froward death hath been slain, for when Thou didst appear to those in Hades, O Christ, Thou didst grant unto them resurrection from the dead, wherefore as the life, resurrection and hypostatic light, we magnify Thee in hymns.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 2"
                }
              },
              {
                "text": "The nature that is beginningless and infinite is acknowledged in three single divine Hypostases; as one Godhead in Father, Son and Spirit, trusting in which the wise in God are saved.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 3"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "O Virgin, fulfilling prophecy, thou didst spring from David’s root; yet in giving birth to the Lord of glory Who hath been foretold by the prophet David, and Whom we fittingly magnify, thou hast also glorified him.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 1"
                }
              },
              {
                "text": "O most pure one, every law of praise is defeated by the majesty of thy glory; yet, O Lady, graciously accept from us Thine unworthy suppliants, O Theotokos, the praise we offer thee with love.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 2"
                }
              },
              {
                "text": "O what wonders are Thy passing all understanding! For thou, O Virgin, alone brighter than the sun, hast granted unto all to contemplate the newest wonder of thine incomprehensible birth-giving O all-pure one, wherefore we all magnify thee.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        }
      }
    },
    "exapostilarion_rubric": "Exapostilarion (Svetilen). Note: The Exapostilarion is taken from the prescribed Eothinon according to the Resurrection Gospel, however, If the Menaion service is ‘feasted’ the Exapostilarion, with the appointed Theotokion, are taken from the Menaion.",
    "praises": {
      "rubric": "On the Aposticha: “Let every breath ...,” 8 Stichera of the Resurrection, however, if the service from the Menaion is ‘feasted’ sing the first 4 Stichera from the Resurrection, and the last 4 from the Menaion, with the appointed verses.",
      "stichera": [
        {
          "text": "We sing the praise of Thy saving Passion, * O Christ, ** and we glorify Thy Resurrection.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 1"
          }
        },
        {
          "text": "Having endured the Cross, * and destroyed death * and risen from the dead, * grant peace to our lives, O Lord, ** as Thou alone art All-powerful.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 2"
          }
        },
        {
          "text": "Having despoiled Hades * and raised mankind by Thy Resurrection, O Christ, ** grant that with pure hearts we may praise and glorify Thee.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 3"
          }
        },
        {
          "text": "As we glorify Thy divine condescension, * we praise Thee, O Christ: * For Thou wast born of a Virgin, * yet Thou wast not separated from the Father; * as man Thou didst suffer and willingly endure the Cross; * arising from the grave, * as though coming forth from Thy bridal chamber, * that Thou mightest save the world. ** O Lord, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 4"
          }
        },
        {
          "text": "When Thou wast nailed to the Tree of the Cross, * then the might of the enemy was slain; * creation shook in fear of Thee, * and Hades was despoiled by Thy might. * Thou hast raised the dead from their tombs * and opened Paradise unto the Thief. ** O Christ our God, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 5"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "Lamenting, the holy women came with haste to Thy grave; * but finding the tomb opened and learning from the angel * the new and marvelous wonder, * they announced to the apostles, ** “The Lord hath arisen, granting the world His great mercy.”",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 6"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "We bow down before the divine stripes of Thy passion, * O Christ God, * and the royal sacrifice that took place divinely revealed in Zion at the end of the ages; * for Thou, the Sun of righteousness, * hast enlightened those who slept in darkness, * leading them to the never-setting radiance, ** O Lord, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 7"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "O Tumultuous race of the Jews, give ear. * Where are those who approached Pilate? * Let the soldiers who kept watch say, * where are the seals of the grave? * To where hath the one who was buried been moved? * Where hath the One who is not for sale been sold? * How hath the treasure been burgled? * O Lawless Jews, why do ye slander the Rising of the Crucified? * He hath arisen, as one free among the dead, ** and granteth unto the world His great mercy.",
          "tier": 2,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 8"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        }
      ],
      "verses": {
        "ref": "shared.praises_verse_ladder"
      },
      "gloria_rubric": "Glory ..., The Eothinon of the Resurrection Gospel Note: If the service from the Menaion is ‘feasted’ the Eothinon is taken from the Menaion, and the Eothinon of the Gospel is read at the end of Matins.",
      "theotokion": {
        "text": "Thou art most blessed, O Virgin Theotokos, * for through Him who took flesh from thee, Hades hath been captured, * Adam recalled, the curse slain, Eve set free, * death put to death, and we have been given life. * Therefore in praise we cry: ** Blessed art thou, O Christ our God, who hast been thus well-pleased, glory be to thee.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Matins, Praises Both-now Theotokion"
        }
      }
    },
    "doxology_troparion": {
      "text": "Today is salvation come unto the world; * let us sing praises to Him that arose from the tomb, * and is the Author of our life. * For, having destroyed death by death, ** He hath given us the victory and great mercy.",
      "tier": 2,
      "src": {
        "file": "1-1.pdf",
        "locus": "Sunday Matins, troparion after the Great Doxology"
      }
    }
  },
  "liturgy": {
    "beatitudes": {
      "rubric": "Typika and Beatitudes.",
      "troparia": [
        {
          "text": "Through food the foe led Adam out of Paradise; but through the Cross Christ led back the Thief as he cried: Remember me when Thou comest in Thy kingdom.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 1"
          }
        },
        {
          "text": "I venerate Thy sufferings and I glorify Thy Resurrection; with Adam and with the Thief I cry aloud with radiant voice: Remember me, O Lord, when Thou comest in Thy Kingdom.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 2"
          }
        },
        {
          "text": "Thou wast crucified, O sinless one, and willingly laid in a grave, but Thou didst arise as God; raising Adam with Thyself as he cried: Remember me when Thou comest in Thy Kingdom.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 3"
          }
        },
        {
          "text": "Raising the temple of Thy body after Thy burial for three days, O Christ God, Thou hast raised with Adam those who came from Adam as they cried: Remember me when Thou comest in Thy Kingdom.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 4"
          }
        },
        {
          "text": "The myrrh-bearers came weeping to Thy grave, O Christ God, very early in the morning, and found an angel sitting clothed in white, who cried: What do ye seek? Christ hath arisen, mourn no longer.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 5"
          }
        },
        {
          "text": "Thine apostles, O Lord, coming to the mountain that Thou, O Savior, hadst appointed them, saw Thee and worshipped Thee. And Thou didst send them out to teach the nations and baptize the inhabitants therein.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 6"
          }
        }
      ],
      "gloria": {
        "text": "Let us all worship the Father and glorify the Son, and with them praise the most holy Spirit, as we cry and say: O all-holy Trinity, save us all.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Gloria (Triadicon — final pre-Theotokion item)"
        }
      },
      "theotokion": {
        "text": "Thy people, O Christ, bring unto Thee Thy Mother to intercede on their behalf; at her supplications, O good One, grant us Thy compassion, that we may glorify Thee, who dawned for us from the tomb.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Theotokion"
        },
        "sourceLabel": "Theotokion"
      }
    },
    "prokeimenon": {
      "tone": 1,
      "text": {
        "text": "Let Thy mercy, O Lord, be upon us, * according as we have hoped in Thee.",
        "tier": 2,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Liturgy prokeimenon"
        }
      },
      "verse": {
        "text": "Rejoice in the Lord, ye righteous; praise is meet for the upright.",
        "tier": 1,
        "src": {
          "file": "1-1.pdf",
          "locus": "Sunday Liturgy prokeimenon verse"
        }
      }
    },
    "alleluia": {
      "tone": 1,
      "verses": [
        {
          "text": "O God who givest avengement unto me, and hast subdued peoples under me.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy Alleluia"
          }
        },
        {
          "text": "Who magnifieth the salvation of His king, and worketh mercy for His anointed, for David, and for his seed unto eternity.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Sunday Liturgy Alleluia verse 2"
          }
        }
      ]
    }
  },
  "vespers_weekday": {
    "sun": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone I: Spec. Mel.: “O all-praised martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "In Thy goodness, O Lord, Thou didst bring all things about by Thy Word and Spirit, and didst also create me a reason-endowed living thing, that I might glorify Thine omnipotent name. But, more than any, I ever act dishonorably by my shameful deeds; yet have pity on me, I pray.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "I recognize thy divine nobility and the incorrupt homeland, O wretched soul, and I ever strive to attain them by goodly deeds. Let naught that is corrupt captivate me. Thou art my higher part, while the body is earth and corrupteth. Let not what is baser overcome that which is higher.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "Go thou to the supremely good One, O all-accursed soul; approach Him with fervent tears; before thy condemnation confess all things that thou hast done; and render thy Creator merciful to thee, O wretched one. Beg forgiveness, lest the Lord shut the door to thee.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the bodiless hosts, in the same melody:",
        "menaion_fallback": [
          {
            "text": "O incorporeal angels, who stand before the throne of God, illumined by the splendors thereof, O ye secondary luminaries who shine forth eternally with outpourings of light: Entreat Christ, that He grant our souls peace and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "O immortal angels who are most noetically rich, who receive truly indestructible life from the primal Life: Ye have become holy seers of eternal glory and wisdom, are filled with light, and have excellently been revealed to be beacons sharing therein.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O archangels, angels, principalities, thrones, dominions, six-winged seraphim and divine and many-eyed cherubim, ye organs of wisdom, powers and most divine authorities: Pray ye unto Christ, that He grant our souls peace and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O immaculate Mary who surpassest every mind, most exceedingly pure chariot: By thine all-powerful intercessions guide me who am beset and hemmed in by many sins, to the broad expanse of repentance; for as the Mother of the Mighty One thou canst accomplish all things.",
        "tier": 1,
        "src": {
          "file": "1-2.pdf",
          "locus": "Sunday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.sun",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VIII:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone I:",
        "items": [
          {
            "text": "Great is the abyss of my many transgressions, O Savior, and I sink grievously because of mine offenses. Grant me Thy hand, as Thou didst to Peter, O God. Save me, and have mercy upon me!",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "In that I have been condemned for wicked thoughts and deeds, O Savior, grant me the thought of returning to Thee, O God, that I may cry aloud: Save me, O good Benefactor, and have mercy upon me!",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain"
          },
          {
            "text": "Through the prayers of all the saints and the Theotokos, O Lord, grant us Thy peace, and have mercy upon us, in that Thou alone art compassionate.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "Joy of the ranks of heaven, * and mighty intercession for mankind on earth, * O most pure Virgin: * save us who have recourse unto thee, * for in thee, after God, have we placed our hope, ** O Theotokos.",
        "tier": 2,
        "src": {
          "file": "1-2.pdf",
          "locus": "Sunday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. SUNDAY NIGHT: TONE I AT COMPLINE Canon of supplication to the most holy Theotokos"
    },
    "mon": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone I: Spec. Mel.: “O all-praised martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "My whole life have I shamefully squandered with harlots, wretch that I am O Lord, but like the prodigal I cry out with compunction: O heavenly Father, I have sinned! Cleanse Thou and save me, and reject me not who have withdrawn far from Thee, and am now beggared because of my fruitless deeds.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "O Christ Who art rich, in impoverishing Thyself Thou hast enriched mankind with immortality and radiance. Wherefore, with the virtues enrich me who have been impoverished by the pleasures of life, and number me with the pauper Lazarus, rescuing me from the torment of the rich man and Gehenna, which lie before me.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "I have sorely enriched myself with evil, I have loved food, and preferred the good things of this life, and am condemned to Gehenna, O Lord. My starving mind have I disdained, as the rich man did Lazarus. Have pity on me, who have been cast away from the doors of Thy divine works, O Lord.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy forerunner, in the same melody:",
        "menaion_fallback": [
          {
            "text": "O wondrous prophet, Baptist and Forerunner of Christ, by thy prayers cause thou my heart, which hath been desiccated by unseemly deeds, to pour forth rivers of ever-flowing tears, I beseech thee, that, saved, I who am greatly ailing may magnify Him Who hath glorified thee.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O blessed prophet who baptized Christ, the Abyss Who taketh away the transgressions of the world, in thee is all my hope, and on thee do set mine expectation of life. Him do thou entreat, I pray thee, O John, that He cleanse my heart and save me.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "O divine Forerunner, wise preacher of grace, who proclaimed repentance beforehand to all nations, be thou well-pleased to grant my most accursed and blind soul to abide in repentance and always do the will of the Lord, that I may glorify thee with faith and love.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O Virgin, entreat the Lamb Whom the all-great Forerunner proclaimed unto all, and Who taketh away the sins of the whole world, and pray that I, who am unworthy, may escape the lot of the goats on the day of judgment, and may be reckoned among the sheep on His right hand.",
        "tier": 1,
        "src": {
          "file": "1-3.pdf",
          "locus": "Monday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.mon",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone IV:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone I:",
        "items": [
          {
            "text": "Great is the abyss of my many transgressions, O Savior, and I am grievously engulfed because of mine offenses. Grant me Thy hand, as Thou didst to Peter, O God. Save me, and have mercy upon me!",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "In that I have been condemned for wicked thoughts and deeds, O Savior, grant me the thought of returning to Thee, O God, that I may cry aloud: Save me, O good Benefactor, and have mercy upon me!",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain"
          },
          {
            "text": "The confession ye made before the tribunal reviled the power of the demons, and freed mankind from delusion, O saints. Wherefore, when ye were beheaded ye cried aloud: O Lord, may the sacrifice of our lives be well- pleasing to Thee, for having loved Thee, we have spurned this transitory life, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "O all-hymned Virgin, * in whom Moses beheld a mystery with prophetic eyes * the bush that burned yet remained unconsumed; * for the fire of the Godhead did not burn thy womb, O pure one. * Wherefore, we beseech thee, as the Mother of our God: ** beg thou peace and great mercy for the world",
        "tier": 2,
        "src": {
          "file": "1-3.pdf",
          "locus": "Monday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "tue": {
      "rubric": "On ‘‘Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone I: Spec. Mel.: “O all-praised martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Nailed to the Cross as a man, O Christ God, Thou didst deify human nature and slay the serpent, the author of evil. Becoming accursed in that Thou art compassionate, Thou didst free us from the curse which hath its origin in the tree. And Thou didst come that Thou mightest give blessing and great mercy unto all.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "Though Thou art exalted far above all honor, O Master, Thou didst deign to be dishonored, enduring a violent death upon the Tree, that when Thou didst die in the flesh, O Almighty, through it the race of mankind might embrace immortality and receive again its primal life.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "O most precious Cross, purification of all the faithful, sanctify all who bow down before thee and glorify Christ, Who stretched out His most pure hands upon thee in His ineffable loving-kindness, and Who hath gathered together all the ends of the earth.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in Tone I: Spec. Mel.: “Joy of the ranks of heaven ...”:",
        "menaion_fallback": [
          {
            "text": "Standing before the Cross of thy Son and God, and perceiving His long- suffering, the pure Mother said, weeping: “Woe is me, O my Child most sweet! What things are these that Thou sufferest unjustly, that Thou mightest save mankind, O Word of God?”",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Joy of the ranks of heaven"
          },
          {
            "text": "Standing by the Cross, O Bride who knewest not wedlock, and undergoing pain, thou didst cry aloud: “Show me not to be childless, who gave birth to Thee, O my Child! Leave me not alone, O Only-begotten One Who with the Father art equally eternal!”",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "Joy of the ranks of heaven"
          },
          {
            "text": "“When I gave Thee birth, I felt no pain. How now do I experience pangs when Thou art unjustly crucified, O Word?”, the pure one cried out, weeping. “Woe is me! I cannot bear to see Thee uplifted upon the Cross, O Lover of mankind!”",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Joy of the ranks of heaven"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Of old, when thou didst behold thy Son and Master stretching forth His hands upon the Cross, His side pierced by the spear, O pure Mother, thou didst cry out, lamenting: “Woe is me! How is it that Thou sufferest, ridding men of their suffering, O Lover of mankind?”",
        "tier": 1,
        "src": {
          "file": "1-4.pdf",
          "locus": "Tuesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "stavrotheotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.tue",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone I:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone I:",
        "items": [
          {
            "text": "The Cross was set up on Golgotha, and hath blossomed forth immortality for us from the ever-flowing fountain of the Savior’s side.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "The precious Cross of the Savior is for us an indestructible rampart; for, placing our trust therein, we all are saved.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "O how good was your barter, O saints! For ye traded your blood and inherited heavenly things; and having undergone trials for a time, ye rejoice everlastingly. Of a truth your commerce was good! For, having forsaken corruptible things, ye received those things which were incorrupt; and joining chorus with the angels, ye unceasingly hymn the consubstantial Trinity.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "Upon beholding the Lamb * lifted up upon the Cross, * the immaculate Virgin cried aloud, weeping: * “O my Child most sweet, * what is this new and most glorious sight? * How is it that Thou Who holdest all things in Thy hand ** hast been nailed to the Tree in the flesh?”",
        "tier": 2,
        "src": {
          "file": "1-4.pdf",
          "locus": "Tuesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "Joy of the ranks of heaven",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "wed": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the holy apostles, in Tone I: Spec. Mel.: “O all-praised martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O glorious apostles, divinely chosen disciples of Christ, teachers of the whole world, who found the Lord God, Who is the Mediator between God and mankind: Unto Him did ye cleave in godliness, and throughout the world ye manifestly preached Him as God and as a supremely perfect man.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "O most wise apostles, divinely chosen disciples of Christ, teachers of the whole world: By your prayers strengthen me, that I may obey the teachings of God; and ever help me to walk the narrow path, that I may achieve a most spacious rest in paradise.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          },
          {
            "text": "I hymn as eyewitnesses and preachers of the Word Peter the first enthroned, Paul and James, Andrew and Philip, Simon, Bartholomew and Thomas, Matthew and John, and Mark and Luke who recorded the Gospels, who with the seventy others are the divinely chosen choir.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "label": "plain",
            "spec_mel": "O all-praised martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy hierarch Nicholas, the wonderworker , in the same melody:",
        "menaion_fallback": [
          {
            "text": "Soaring aloft above the flowers of the Church, O thrice-blessed Nicholas, as a fledgling from the angelic nest of the Most High thou ever callest unto God on behalf of all the people who find themselves in the midst of violent tribulations and temptations, delivering them by thy prayers.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Ascending through the beauties of heaven, thou didst gaze upon the awesome glory of the Holy of holies. Wherefore, thou dost ever disclose unto us heavenly words of the vivifying sight thereof, O most sacred father.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "The adornment of priestly vestments didst thou render more splendid by thine active virtues, O God-bearing father; wherefore, for us thou performest sacred acts of wondrous miracles for the sake of Christ, delivering us from evils.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Tempest-tossed on the abyss of transgressions, * fleeing to the calm haven * of thy most pure supplication, * I cry out to thee, O Birthgiver of God: ** Save me, O all-immaculate one, extending thy mighty right hand unto thy servant!",
        "tier": 2,
        "src": {
          "file": "1-5.pdf",
          "locus": "Wednesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.wed",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone V:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the holy apostles, in Tone I:",
        "items": [
          {
            "text": "The harmonious harp of the apostles, played by the Holy Spirit, abolished the abominable sacrifices of the demons; and, proclaiming the one Lord, it hath delivered the nations from the delusion of idolatry, and taught them to worship the consubstantial Trinity.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "Together let us praise Peter and Paul, Luke and Matthew, Mark and John, Andrew and Thomas, Bartholomew and Simon the Canaite, James and Philip; and let us laud the whole choir of the disciples, as is meet.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "O all-famed martyrs, the earth did not hide you, but heaven received you, and unto you were opened the gates of paradise. And since ye have entered therein, ye delight in the tree of life. Pray ye unto Christ, that He grant our souls peace and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "Rejoice, O Virgin, * thou joy of the forefathers, * gladness of the apostles and martyrs, ** and protection of us thy servants!",
        "tier": 2,
        "src": {
          "file": "1-5.pdf",
          "locus": "Wednesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "thu": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone I: Spec. Mel.: “O all-praised, martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Thou didst stretch forth Thy most pure hands upon the Cross, O Christ, summoning those who had departed far from Thee and settling them near Thyself; wherefore, I pray to Thee: Unite me to Thee, though I have been made captive by the passions, and grant unto me the repentance which washeth away all the defilement of the passions.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised, martyrs"
          },
          {
            "text": "Thou didst uplift Thy most pure hands upon the Tree, O Christ, and didst bloody Thy fingers, desiring to deliver Adam, the work of Thy divine hands, who because of disobedience was held fast in the realm of death, O Lover of mankind; and Thou didst raise him up by Thine authority, O Almighty.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised, martyrs"
          },
          {
            "text": "Thou didst endure suffering for our sake, O Savior Who art immutable by nature and dispassionate in Thy divinity; and Thou wast crucified with thieves, O sinless and beginningless Christ. The sun, unable to bear the audacity, dimmed its rays, and the whole earth quaked, acknowledging Thee to be the Creator of the world.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O all-praised, martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the precious Cross and the Theotokos, in the same melody:",
        "menaion_fallback": [
          {
            "text": "Once, beholding on the Tree Him to Whom she had given birth from her seedless womb, the immaculate Virgin, unable to bear the wounding of her womb, said, tearing her hair: “O Thou Who holdest all creation in Thy hand, how hast Thou been lifted up upon the Cross as one condemned, desiring to save mankind in every way?”",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "label": "plain"
          },
          {
            "text": "Once, beholding on the Tree Him to Whom she had given birth from her seedless womb, the immaculate Virgin, unable to bear the wound­ing of her womb, said, tearing her hair: “O Thou Who holdest all creation in Thy hand, how hast Thou been lifted up upon the Cross as one condemned, desiring to save man in every way?”",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "label": "plain"
          },
          {
            "text": "“O ineffable Son of the beginningless Father,” said the most pure one, “When I behold my Child upon the Cross, how can I not understand for what deeds the ungrateful people have thus rewarded Thee? Yet as Thou dost desire to save Thy creation, Thou dost endure all with long-suffering, O Compassionate One.”",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "“Lifted up upon the Tree, O my most sweet Child, and having tasted gall and vinegar, Thou didst sweeten the bitter taste of Adam of old; wherefore, as the righteous Judge, O Master Who arose as Almighty, sweeten me with Thy healing Passion,” said the Virgin, weeping.",
        "tier": 1,
        "src": {
          "file": "1-6.pdf",
          "locus": "Thursday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "stavrotheotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.thu",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VI:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone I:",
        "items": [
          {
            "text": "The Cross was set up on Golgotha, and blossomed forth immortality for us from the ever-flowing fountain of the Savior’s side.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "The precious Cross of the Savior is for us an indestructible rampart; for, placing our trust in it, we all are saved.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "By the supplications of all the saints and the Theotokos, O Lord, grant us peace, and have mercy upon us, in that Thou alone art compassionate.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": [
          {
            "text": "Unto Thee have I lifted up mine eyes, unto Thee that dwellest. in heaven. Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, * until He take pity on us.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers aposticha verse 1 — stray period \"dwellest. in heaven\" (shared: \"dwellest in heaven\"); §5 per-tone"
            }
          },
          {
            "text": "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. Greatly hath our soul been filled therewith; let reproach come upon them that prosper, * and abasement on the proud.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Thursday-evening Vespers aposticha verse 2 (byte-matches shared; stored with its per-tone partner)"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "Upon beholding Thine unjust slaying, O Christ, * the Virgin, cried out to Thee, weeping: * “O my sweetest Child! * How is it that Thou diest unjustly? * How is it that Thou Who hast suspended the whole earth upon the waters * dost hang upon the Tree? * Leave me not alone * who am Thy Mother and handmaiden, ** I pray, O greatly merciful Benefactor!”",
        "tier": 2,
        "src": {
          "file": "1-6.pdf",
          "locus": "Thursday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. THURSDAY NIGHT: TONE I AT COMPLINE Canon of supplication to the most holy Theotokos"
    },
    "fri": {
      "rubric": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone I: Spec. Mel.: “O all-praised, martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "The triumphal solemnity of the martyrs drowned a multitude of the demons in the streams of their blood, caused all the abominable sacrifices to cease, and set at naught the deception of the idols, for they suffered patiently. And they now entreat Christ to grant our souls peace and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 1"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone I: Spec. Mel.: “O all-praised, martyrs ...”:"
          },
          {
            "text": "With wise words and doctrines the most sacred pastors taught all to glorify the threefold Godhead in Unity, divinely avoiding the commingling and division of Its Hypostases; and they now pray that peace and great mercy be granted our souls.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 2"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone I: Spec. Mel.: “O all-praised, martyrs ...”:"
          },
          {
            "text": "The company of the venerable lulled carnal desires to sleep and restrained their onslaughts, showing their life to be angelic; wherefore, they now join chorus in the habitations of heaven, entreating Christ to grant our souls peace and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 3"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone I: Spec. Mel.: “O all-praised, martyrs ...”:"
          },
          {
            "text": "By the prayers, O Lord, of all the saints and of the Theotokos, grant us. Thy peace and have mercy upon us, for Thou alone art compassionate.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 4"
            },
            "label": "plain",
            "provenance_note": "Then these other Stichera, of the martyrs, in the same tone:"
          },
          {
            "text": "The confession of faith that ye made at the tribunal, O ye saints, set at naught the strength of the demons, and set men free from error. As ye were beheaded ye cried aloud: “May the sacrifice of our lives be acceptable in Thy sight, O Lord; for, desiring Thee the Lover of mankind, we have spurned this quickly passing life.”",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 5"
            },
            "label": "plain",
            "provenance_note": "Then these other Stichera, of the martyrs, in the same tone:"
          },
          {
            "text": "Wise was the trade that ye made, O saints! Giving your blood, and inheriting heaven as your reward; Having suffered tribulation for a time, ye now rejoice eternally. Truly wisely have ye traded: forsaking things corruptible, ye have received things incorruptible; and rejoicing with the choirs of angels ye now hymn eternally the praises of the consubstantial Trinity.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 6"
            },
            "label": "plain",
            "provenance_note": "Then these other Stichera, of the martyrs, in the same tone:"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 3"
            }
          },
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 4"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 6"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Let us hymn the whole world’s glory, * who sprang forth from mankind and who gave birth to the Master, * the Portal of heaven, Mary the Virgin, * the hymn of the Bodiless Powers and adornment of the faithful; * for she hath been revealed as the Heaven and Temple of the Godhead. * By destroying the middle wall, she hath brought forth peace, * and opened wide the Kingdom. * Therefore, holding fast to her as a firm confirmation of the faith, * we have as our champion the Lord born from her. * Take courage therefore, take courage, O ye people of God; ** for as the Invincible one he shall conquer our adversaries.",
        "tier": 2,
        "src": {
          "file": "1-7.pdf",
          "locus": "Friday-evening Vespers, LIC Glory/Both-now closer — the dogmatikon printed IN FULL as its own site (§9.2)"
        },
        "type": "dogmatic_theotokion",
        "sourceLabel": "Glory ..., Both now ..., Dogmatic Theotokion, in the same tone:"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.fri",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VII:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the holy martyrs, in Tone I:",
        "items": [
          {
            "text": "O all-famed martyrs, the earth did not hide you, but heaven hath received you; the gates of Paradise were opened to you, and entering within ye have partaken of the tree of life. Pray ye to Christ that He grant peace and great mercy to our souls.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "What sweet-pleasure in this life remaineth untouched by grief? What glory endureth unchanged upon the earth? All is feebler than a shadow, more deceptive than a dream; for death in a single moment taketh away all these things. But in the light of Thy countenance, O Christ, and in the enjoyment of Thy beauty, grant rest to those whom Thou hast chosen, for Thou art the Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 2"
            },
            "label": "for_the_reposed"
          },
          {
            "text": "There is none free from sin, save Thou, O immortal One. Wherefore, by Thy loving-kindness, in that Thou art a compassionate God, grant unto Thy servants a dwelling-place in the Light, with the choirs of Thine angels, and overlooking their transgressions, grant them forgiveness.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 3"
            },
            "label": "for_the_reposed"
          }
        ],
        "verses": [
          {
            "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 1 (final period; §5 per-tone; 3-7..8-7 class)"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "Their souls * shall dwell among good things.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 2"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "Truly wondrous beyond understanding * are the mighty works of thy birthgiving O Bride of God, * which all the prophets proclaimed, * and thy conception and birth giving are most glorious, * O all-hymned one, * whereby thine Offspring hath incomprehensibly and ineffably saved the world, ** in that He is full of loving-kindness.",
        "tier": 2,
        "src": {
          "file": "1-7.pdf",
          "locus": "Friday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. FRIDAY NIGHT: TONE I AT COMPLINE Canon of supplication to the most holy Theotokos"
    }
  },
  "compline": {
    "sun": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Ineffably didst thou conceive God, O most pure Lady, and supra-naturally didst thou give birth to Him Who hath set mortals free from their transgressions. Wherefore, I entreat thee: Deliver me from my manifold transgressions!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Though I am engulfed by tribulations and the abyss of countless sins and sorrows, yet through thy mighty guidance and supplication, O all-immaculate one, do thou direct me to the divine stillness of repentance.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "From the manifold misfortunes of my whole life do thou deliver me, O intercessor, that I may raise my voice in thanksgiving to thee: O pure Theotokos, rescue me from the torment which is to come!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Still thou the assaults of evil circumstances and perils, O all- immaculate Mother of our Redeemer, Creator and God, granting me the grace of salvation and purification.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "The sight of thy pure face delights the angels, and is salvific to mortals, but it is terrible to the spirits of wickedness! And, honoring and venerating it with faith, O Theotokos, we illumine our souls!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With virginal blood from thee, the Creator and Lord wrapped Himself in flesh. O all-immaculate one, entreat Him, that, in His ineffable mercy, He take pity on me who am become corrupt through mine unseemly deeds.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having acquired thee as a preserver of our life and an unassailable rampart, may I also find thee after mine end to be a protection and an invincible helper, leading me to God and granting me glory and life everlasting, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Seedless was thy conception, and incorrupt thy birthgiving, O pure one; for God was manifestly born, setting aright the fall of human nature. Wherefore, we hymn thee, who art the true Theotokos.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "An unrestrainable urge for evil doth seize me through the activity of the enemy and mine own wicked habits. Help me, O Lady, that the most pernicious one not fall upon me utterly, depriving me of repentance through death.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "All the time of my life have I squandered in the prodigality of wickedness; and now the servants thereof lead my lowly soul into cruel woundings. Help me, O Virgin Birthgiver of God!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O all-immaculate one, hearken to my cry of pain, which I bring forth in groans from the depths of my soul; and grant me release from the debts which, wretch that I am, I have incurred through my mindless thoughts and character.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Sovereign Lady of the world, O Theotokos, help me! The most wicked enemy seeketh evilly to devour me through my grievous imaginings and thoughts, which separate me from God. Wherefore, forsake me not, neither disdain me.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Behold, I have acquired a ready assistance toward salvation! Wherefore, I fall down before thee and cry out with tears: O Theotokos, deliver me from the darts of the alien and from the difficult tests that are to come!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art my strength, thou art my boast and joy! Thou art my preserver, my help, refuge and mine invincible intercessor, O most holy Virgin Theotokos. Wherefore, save thou thy servant!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With the sprinkling of thy divine supplication, O most pure Theotokos, cleanse my wretched soul which hath been defiled by the passions, granting it the splendid vesture of thy salvation.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Thou art the steady guidance of my life, delivering it from the threefold billows of many evil circumstances even at the time of my departure. I beseech thee: Stand thou forth, saving me, O Mother of Christ God!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure Birthgiver of God who knewest not wedlock, extend thy hand unto me and rescue me from the abyss of the evils which, wretch that I am, I have brought upon my passion-plagued soul through mindlessness.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Arise thou, O pure one, to aid thy servant who, placing my hope in thee and God, hastens to thine invincible aid, that the enemy be not able to seize and destroy me.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Theotokos, I beseech thee, the healer of the sick, raising of the fallen and cleansing of the sinful, and with tears I fall down and cry out to thee: As thou art mighty, save me who am perishing!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Have mercy upon my lowly soul, O pure one, go thou before it and rescue it, snatching it from the talons of the evil one; for he seeketh to send it into the abyss because of the evils which my great slothfulness hath wrought.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Thou wast a divine tabernacle for the Master, having conceived Him in thy womb and given birth to Him in the flesh, O only immaculate one. Wherefore, deliver us from sufferings, pain, tribulations and debts, for thou hast might and great power.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure Lady, put an end to the unbearable pain of my most wretched soul, giving me true joy and freeing me from the raging billows of my many transgressions. For thou art my refuge and deliverance.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "On thee have I set all my hope of salvation; for I have acquired thee as an invincible tower and foundation, a token of steadfastness, and through thee I hope to receive the kingdom, O Lady.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Thou wast the dawning of the Sun of glory, O pure Lady; for through thee hath He, appearing, freed all from darkness and ignorance, and from fetid transgressions. Wherefore, I cry to thee: Free me from the outer darkness!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye works of the Lord, * hymn and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "The turmoil of the passions cruelly afflict my soul, O Theotokos. As thou hast given birth to the Author and Bestower of peace and tranquility, O pure one, fill me with serene joy and gladness, preserving me in peace.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast been revealed to us as the mediatress of salvation who hast given birth to the Savior and Master of all, O Theotokos. Wherefore, I entreat thee: Grant salvation to my lowly soul, that with faith I may sing hymns to thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having ineffably conceived the God and Creator of all, save me from corruption and from every temptation, and grant that I may ever cry: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O Virgin, thou hast given birth to the God and Creator of all. Him do thou beseech, that He grant cleansing from transgressions and deliverance from tribulations, perils, from everlasting fire and condemnation, to those who unceasingly glorify thy glory.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "O all-immaculate Mother of God, open unto me the depths of thy mercy, and deliver me from the mouth of the noetic wolf, who seeketh to devour and ruin me. Have mercy, I pray thee, and turn not away from me, thy shameful servant.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Be thou the intercessor for my whole life and my steadfast aid, O all-pure one, and deliver me from manifold perils and grief, and from the blasphemy of mine enemies, and deliver me from everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou alone art the visitation of the sick. Thou alone art the setting aright of the fallen. Thou alone art our guide and entry unto God. Thou alone art the mediatress of everlasting good things. Have mercy upon me, who alone have sinned more than all others!",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Accept thou my tearful supplication, and grant me remission of the offenses and many evils which I have committed, O Theotokos, all-hymned Lady; for I perish utterly in my boundless despair.",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "O pure one, we have all acquired thee as our supplicant before the Lord, and we hasten to thy holy church, asking help of thee, O Ever-virgin. Wherefore, deliver us who bless thee from the malice of the demons, from torment and dread condemnation.",
          "tier": 1,
          "src": {
            "file": "1-2.pdf",
            "locus": "Sunday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 2
            },
            {
              "from": "U+041E O (Cyrillic), in spec_mel",
              "to": "O",
              "count": 1
            }
          ],
          "spec_mel": "Thy tomb, O Savior"
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and the rest as usual. Dismissal."
    },
    "mon": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos.",
        "heading_rubric": "Canon of supplication to the most holy Theotokos.",
        "odes": {
          "1": {
            "irmos": {
              "text": "Let us all chant a triumphant hymn unto God * Who wrought wondrous miracles * with His upraised arm, * and saved Israel, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Rejoice, O most pure sanctuary, O Virgin, adornment of the angels and receptacle of the Spirit, O immaculate Bride of the beginningless Father and Mother of God the Word!",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 3
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art a Queen, in that thou art the daughter of the King, O Lady Theotokos, having produced and given birth to God the King in the flesh; and thou reignest with Him.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "David the psalmist hymneth thy nativity, and Isaiah singeth surpassingly of thy most pure womb, O all-pure Mary. And the Christian people glorify thy birthgiving.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "The Church proclaimeth thy birthgiving with Orthodox doctrines and divine hymnody, O Virgin Bride of God, for it venerateth the signs of the incarnation of thy Son.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "The stone which the builders have rejected, * the same hath become the cornerstone: * this is the rock upon which Christ hath established the Church, * which He hath redeemed from among the nations.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "As thou hast the glory of virginity, thou hast been invested with the grace of the Holy Spirit, O most pure Mary, who hast been shown to be the Theotokos. O new and hidden mystery! For how dost thou remain a virgin, having given birth to God in the flesh?",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Who can recount what Thou hast done, O Lord? For Thou hast shown Thyself to be the Son of one who should have been cursed to give birth to children amid grief. Yea, the fallen nature of women rejoiceth in Thee our God, because of the Theotokos.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Through thee, O most pure Mary, who alone art the Theotokos, hath the world been freed from the tempest of transgressions. Wherefore, having thee as a haven of salvation, we the faithful praise thy mighty works with hymnody.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "The prophets of old hymned thy virginity, saying that thou wouldst give birth within time to the Timeless One, to the Word Who is beyond words, Christ our God, One of the Trinity. Him doth the Church honor with images, O pure Mary.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Foreseeing in the Spirit O prophet Habbakuk, * the incarnation of the Word, * thou didst proclaim, crying aloud: * When the years draw nigh, Thou shalt be known; * when the season cometh, Thou shalt be shown forth! * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "In many ways the mirror of the divine prophets, sevenfold in radiance, hymneth thy prefigurations; and we, receiving the signs of thy departure in deed, believe thee to be the true Theotokos, beholding thee in matter.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Honoring thee as the true Mother of God as is meet, O pure Virgin, we offer our own cry to thee, who wast proclaimed in the law and the prophets: Rejoice, O joyous one! The Lord is with thee!",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Behold! the Theotokos, the divine mountain, which Habbakuk saw manifestly overshadowed with the virtues, hath shone forth in the world. And through her we who of old fell away through disobedience have straightway drawn nigh again to God.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Blessed is the tongue which hath been deemed worthy to honor thy birthgiving with Orthodox faith and doctrine and works, O most pure and pure one, truly showing forth all the images of the incarnation of thy Son.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Seeking Thee early in the morn, * we sing Thy praises, O Christ God, * who for our sake became poor * and in Thy flesh * endured the Cross and death.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "In a secret and hidden manner Moses revealed thee as the bush which burned without being consumed, O Lady Theotokos; for thy material womb was not consumed by the Godhead.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Hymning thee as the Mother of the Word of God, O pure Theotokos, we offer a flourishing gift of words to thee, in whom we believe and rejoice.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Turn not away from the praise of our defiled lips, O most pure Theotokos; for there is no one on earth who dare hymn thee as is meet.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "He Who was born from the Virgin is One Being in two natures: Invisible God and visible Man, Who for our sake assumed the likeness of men.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "Emulating the prophet Jonah, I cry aloud: * Free Thou my life from corruption, O good One; * and save me who crieth out: * O Savior of the world, Glory be to Thee!",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "The seven-branched candlestand of the prophets perceived thee to be the noetic lamp-stand, O Virgin, manifestly showing forth the activity of the Spirit Who shineth forth within thee.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Virgin, thou wast, truly shown to be the tree of Life which hath slain the deceiving serpent with thy fruit, having given birth to Christ God, our Life.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Beauteous praises should not be offered to thee from defiled lips, O pure Mother of our God; rather, behold thou the desire of my soul, and accept it.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "The iniquitous rage in tumult of bitter unbelief when they behold the assemblies of the Orthodox venerating thine image, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Thy children who were in the furnace O Savior, * were neither touched nor troubled by The fire. * Whereupon the three sang, as with a single mouth * Thy praises and blessed Thee, saying: * 'O God of our fathers, Blessed art Thou.'",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Thou hast been revealed to be all-adorned with the virtues, with glory and the honor of virginity, O Bride of God; for thy comeliness is truly most beautiful in magnificence, and the Lord Who loveth thee hath brought Thee, His divine Mother, to Himself.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast manifestly become a staff of uprightness, a most precious staff of royalty; wherefore, thou didst bring forth as fruit, the Word of God, which the miracle of Aaron’s rod clearly prefigured of old.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Having defiled my body, mind and soul with many carnal passions, O pure one, how can I hymn the beauty of thy virtues? I am at a loss and am afraid. Yet be thou thyself my helper through thy supplications.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "I honor the union of Thine incarnation, O Christ, and I reverently venerate the image thereof, for, though Thou art the pre-eternal God, yet didst Thou become an immutable man, being perfect in both natures.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Let the divine sanctity of God be hymned, whereby the world hath been delivered from corruption! Let all who have fallen then rise up, for Mary hath given birth to Christ, our salvation!",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 1"
                },
                "label": "plain"
              },
              {
                "text": "We hymn thee, O most pure Mother of God. Who will not glorify thee, who art truly good, the hope of our souls? Wherefore, O most holy one, accept thou our cries.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Adorn yourselves today with hymns, O ye faithful! Ye angels and men, give glory together; for the devil and despair are fallen! Mary hath for us given birth to our hope of salvation!",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O ye who are blind, describe not the Godhead, and tell no falsehoods! For He is simply invisible and un-seeable. Yet, depicting the image of the flesh, I venerate it, and with faith I glorify the Virgin who gave birth to the Lord.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "The light-bearing cloud upon whom * the beginningless Master of all descended from heaven, * like the dew upon the fleece, * and of whom He was incarnate, * becoming a man for our sake, * let us all magnify as the pure Mother of God.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Monday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Rejoice, O Mary, thou great wonder of all creation! Rejoice, O daughter of David and Mother of the Lord! Rejoice, subject of Gabriel’s hymnody! Rejoice, O pure one, thou refuge, confirmation and help of all sinners on earth!",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 3
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The wondrous Joachim and the godly Anna, beholding on earth Mary, the Mother of the Creator, to whom they gave birth as a daughter, hymn her through the divine Spirit and chant songs of thanksgiving. By her supplications save us all, in that Thou art God.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O most holy Virgin Mother of God Most High, thy birthgiving on earth hath been shown to be the salvation of sinners and the lowly; for in thee have we been saved who have faith. Yet save me also, now and throughout all the living ages.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "I know the Word to be incarnate, yet immutable. Wherefore, I hymn Thee with faith, Who art in two natures but one hypostasis. And proclaiming Thee to be truly God and man, I end my hymnody.",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 4"
                },
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "Guide thou my wretched life, O pure one, and take pity on my soul, which hath stumbled into the abyss of perdition through many transgressions, O all- immaculate one; and at the hour of my death free me from the accusing demons and from the terrible sentence.",
          "tier": 1,
          "src": {
            "file": "1-3.pdf",
            "locus": "Monday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 2
            },
            {
              "from": "U+041E O (Cyrillic), in spec_mel",
              "to": "O",
              "count": 1
            }
          ],
          "spec_mel": "Thy tomb, O Savior"
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion, and the rest, as usual. Dismissal."
    },
    "tue": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "He Who is incomprehensible to the armies of heaven received flesh of thy flesh, O all-immaculate maiden, and hath restored her who became corrupt through the first sin of disobedience.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O ye faithful, with hymns let us bless her who gave birth to the Word of God in a manner past all telling; for she, the most immaculate one, hath been revealed to be the adornment of mortals, becoming the intercessor for all who sin.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast been shown to be more spacious than the heavens, for thou didst contain the Creator of all things, O Ever-virgin Mother. Wherefore, I cry to thee: Deliver me from all deadly straits, O divinely joyous one.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O pure one, grant help to us who are tempest-tossed by the turmoil of tribulations; cast down the wicked uprisings of our enemies; and grant salvation to all who glorify thee with piety.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "He Who is full hath emptied Himself for our sake, and He Who is beginningless hath received a beginning through thee, O most immaculate Virgin; the Invisible One is seen, and He Who sustaineth all things is fed with milk, intending thus to restore mankind.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Heal thou our broken state, O Virgin who knewest not wedlock, who hast given birth to the Lord and Healer Who through grace hath shown us the entry to life. Him do thou unceasingly beseech, that He have pity and save thy servants.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure one, who alone hast deified human nature in a manner transcending nature, pray thou to Him Who was born of thee, that He grant us forgiveness offenses and everlasting joy, O all-hymned and most holy Virgin.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Having wasted my life in slothfulness, I fall down before thee, O most pure one: by thy constant supplications to God move thou my mind and with the radiance of repentance enlighten me who am wholly darkened, that I may glorify thee with faith and love.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "We know thee as the divine palace of the Word, wherein He made His abode in the flesh and hath restored us who had been corrupted by the passions. Wherefore, O pure one, we honor thee as the Mother of God, and we glorify Him Who was born from thee.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The incarnate Word made His abode within thy womb, O Virgin. He hath dispelled the curse which before resided in human nature, and by His divine union He hath in a godly manner deified it. Wherefore, we hymn thee.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Mortality seized Adam because he tasted of the fruit of corruption, O all-immaculate one; but now, by thy birthgiving, he hath been restored to life and dwelleth in the mansions of paradise. Wherefore, we hymn thee as is meet.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Having given birth to Christ God, the Wellspring of immortality, thou hast caused the torrent of death to cease. Him do thou therefore entreat, O thou who art full of the grace of God, that He heal the deadly passions of my soul and save me.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "The never-setting Sun shone forth from thy womb, O most immaculate one, and hath utterly destroyed the darkness, and illumined the earth with divine understanding. Wherefore, we hymn thee with faith.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "We cry out to thee with the voice of the angel: “Rejoice, O most pure one!” For thou hast given birth to the angel of great Counsel, Who with the Father is beginningless, O Virgin, and Who assumed flesh that He might save mankind.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Making His abode within thy womb, O pure one, the Lord delivered those who piously believe in Him from the dominion of the enemy; wherefore, we all hymn thee aloud, O most pure one.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Clothing Himself in me, the Master issued forth from thee, O all- immaculate one, deifying human nature. Him do thou entreat, O Birthgiver of God, that He strip me bare of every sin.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Without seed thou didst conceive God in thy womb, and after thy strange birthgiving thou didst remain a virgin, O all-immaculate one; wherefore, we who have been delivered from the curse by thee glorify thee with praises, O most pure one.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art the ladder which Jacob saw, the mountain overshadowed, the most radiant cloud of the divine Light, the door through which God alone hath passed. Blessed art Thou among women, O most immaculate one!",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "In a manner transcending the laws of nature, O Virgin who knewest not wedlock, thou hast given birth to the hypostatic Word of God Who healeth our broken state. Him do thou earnestly beseech, that He save us all.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Bearing my soul which is sick with transgressions, I cry to thee, O most holy, most glorious and pure one: Heal and save me by thy mediation, that I may hymn and magnify thine aid.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "The shadows of the law and the former indistinct images of the divinely eloquent prophets manifestly proclaimed thy seedless birthgiving, O most pure and all-immaculate one. And we cry out, hymning the hymned and most glorious God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure one full of the grace of God, thou hast given birth to the Sun of the East, Who hath illumined the fullness of all the faithful and caused the night of impiety to fade. Wherefore, we honor the hymned and most glorious God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Once, O all-immaculate one, the bush which burned yet was not consumed prefigured thy womb, for the fire of the Godhead in nowise consumed thee. Wherefore, I entreat thee: Deliver me from the unquenchable fire, that I may unceasingly hymn thy mighty works, O pure one!",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Mother of God, help of the faithful, cleansing of the sinful, giver of all good things: in thy compassion accept me, who fall down and approach thee with weeping, begging release from mine offenses.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye works of the Lord, * hymn and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "The images of the law and the formerly unclear images clearly foretold that thou wouldst become the pure Mother of the Lord, O Virgin; and we, beholding now the fulfillment of these things, hymn thee together and glorify thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast indisputably been adorned with divine beauties among beauties, O all-immaculate one, having given birth to the Word of God, Who illumineth with divine beauties the hearts of all who hymn Him with faith throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With sacred voices the prophets said of old that thou wouldst become the all-immaculate Mother of God the Master. To Him do we cry aloud: Bless the Lord, all ye works! Hymn and supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 3"
                },
                "label": "glory"
              },
              {
                "text": "In that thou art beauteous and all-comely, O Virgin, thou gavest, birth blamelessly to Christ Who is comely in beauties. To Him do we cry aloud: Bless the Lord, all ye works! Hymn and supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "The nature of mortals, which before was condemned, O Virgin, hath received immortality through thy supra-natural and divine birthgiving; and they have received their former beauty, praising thee together with joyous hymns.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou bearest Him Who beareth all things, and thou feedest with milk Him Who giveth food unto all. Great and awesome and past understanding is thy mystery, O Virgin Theotokos, thou ark of the honored priesthood! Wherefore, we all call thee blessed.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure one, shine light now upon me who lie in the darkness of slothfulness, freeing me from the thoughts of the passions which blind me, O all-immaculate one, and ever imparting profound peace to my soul, that I may glorify thee.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "I fear the implacable judgment seat and the impartial Judge, O most immaculate one; for the multitude of mine offenses is beyond number, in that I live in slothfulness, wholly consumed by the passions. Wherefore, moved to pity, have mercy on me, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "Possessing thine intercession, O most pure one, * and delivered from evils by thy supplications, * protected wholly by the Cross of thy Son, ** we all reverently magnify thee as is meet.",
          "tier": 2,
          "src": {
            "file": "1-4.pdf",
            "locus": "Tuesday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., and the rest as usual. Dismissal."
    },
    "wed": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Let us all chant a triumphant hymn unto God * Who wrought wondrous miracles * with His upraised arm, * and saved Israel, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "The bush prefigured thee, O Birthgiver of God; for, remaining unconsumed, thou didst truly hold the unbearable Fire. Wherefore, with faithful voices we ever hymn thee.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "God the Word, clothing Himself in human nature, became incarnate from thee in a manner transcending understanding, O most pure one. Wherefore, every breath doth glorify thee and renders thee homage, and honor, as is meet.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure one, thou didst conceive the ineffable Word Who upholdeth all the ends of the earth, and thou hast given birth to Him. Him do thou earnestly beseech, that He have mercy on us.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In that thou alone hast given birth within time to the timeless God incarnate, O most pure Lady, heal thou the immemorial sufferings of my passion-plagued soul.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "Let my heart be established in Thy will O Christ God, * Who hath established a second heaven over the waters, * and founded the earth upon the waters, * O all-powerful One.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "That He might deify humanity, God became man through thee, O pure Virgin, in a manner past all telling and understanding. Wherefore together we, the faithful, call thee blessed.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "He Who by nature is uncircumscribable became circumscribed, incarnate from thee, O pure one who art full of the grace of God. Him do thou unceasingly entreat, that He take pity and enlighten the souls of those who bless thee.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Dispel all the fruitlessness of mine unfruitful thoughts, and show forth my soul as fruitful in the virtues, O most holy Theotokos, thou helper of the faithful.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Deliver me from every evil circumstance, from the many temptations of the serpent, and from eternal fire and darkness, O most immaculate one who for us hast given birth to the never-waning Light.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Foreseeing in the Spirit O prophet Habbakuk, * the incarnation of the Word, * thou didst proclaim, crying aloud: * When the years draw nigh, Thou shalt be known; * when the season cometh, Thou shalt be shown forth! * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Christ made His abode within thy most pure womb, O all-holy Lady, and deified us, assuming animate flesh. Wherefore O pure Mother, we hymn thee in an Orthodox manner, O Lady, thou helper of the world.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Sanctify us, O holy Theotokos who hast given birth in the flesh to the Most holy One Who desired to become like unto men; and by thy supplications, O most pure one, show us all to be partakers of the heavenly kingdom.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Virgin Theotokos, undefiled tabernacle, with the pure beams of thy compassions cleanse me who have defiled myself with transgressions, and grant me a helping hand, that I may cry: Glory to Thy power, O Lord!",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Thou wast revealed to be a temple sanctified for God, O Virgin, and He made His abode in thee in a manner transcending understanding. Him do thou beseech, that He wash away the defilement of our sins, that we may be shown to be temples and habitations of the Spirit.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Grant us Thy peace, O Son of God, * for we know no other God than Thee, * and we call upon Thy Name, * for Thou art the God of the living and the dead.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "The wicked eating which once was done in Eden made me mortal; but do thou, O pure one who hast given birth to Life, restore me to life who have been slain by the tree of old, that I may lift up my voice in hymns, glorifying thee.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O all-pure one, save me from cruel tribulations! Raise me up from the vile passions, and from the captivity and oppression of the evil demons deliver me who honor thee with love.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure Virgin Mother, we know thee to be the cloud and garden of paradise, the portal of the Light, the table and fleece, and the jar holding within thee the Manna which is the delight of the world.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O most immaculate one who hast given birth to God, Emmanuel, Who in His loving-kindness manifestly became a man: Him do thou beseech, that He have pity on sinful people, in that He is the Lover of mankind, O pure one.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "Lead my life up from corruption O Christ God, * as didst Thou the prophet Jonah, * I cry to Thee O Lover of mankind, * for with Thee is life, incorruption and might.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "I entreat thee who art the good and undefiled tabernacle: By thy mediation wash away all defilement from me who have been defiled by many sins.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 1"
                },
                "label": "plain"
              },
              {
                "text": "O pure one, be thou guidance for me who am tempest-tossed upon the cruel abyss of the perils of life; direct me to the harbor of salvation, and save me.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The threefold billows of evil thoughts, the assaults of the passions and the abyss of sins bestorm my wretched soul. Heal me, O holy Lady!",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Mary who art called the tabernacle of sanctification, sanctify my wretched soul which hath been defiled by pleasures, and make me a partaker of divine glory.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Thy children who were in the furnace O Savior, * were neither touched nor troubled by The fire. * Whereupon the three sang, as with a single mouth * Thy praises and blessed Thee, saying: * 'O God of our fathers, Blessed art Thou.'",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "The Son of the beginningless Father made His abode within thy womb, receiving a beginning, that He might deliver us who worship Him from the evil princes of darkness, in that He is God, O pure Birthgiver of God.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Arrayed in divine virtues, O pure Virgin, thou hast given birth to the Word Who with the Father is beginningless, and hath truly covered the heavens with virtues. Him do thou ever entreat, that He have pity on us.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Sanctify our thoughts, make steadfast the souls of all, O Mother of God, that we may execute well the judgments of the Word of the beginningless Father Who, in His ineffable loving-kindness, became incarnate from thee, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Revive my mind which hath been slain by many passions, O most immaculate one, and strengthen me to do God-pleasing works, that I may magnify thee ever as the helper and hope of Christians.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "By thy vigilant supplications to God, O most immaculate one, we who acknowledge thee to be the blessed and all-joyous Theotokos are delivered from all manner of temptations.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "In a godly manner the Incorporeal One became incarnate from thee. Him do thou entreat, O most pure one, that He mortify the passions of my flesh and revive my soul, which hath been slain by sins.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure one who hast given birth to God the Savior, Who hath healed the abasement of Adam: Him do thou beseech, that He heal the incurably painful wounds of my soul.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Raise me up who lie in the abyss of evils, and vanquish the enemies who now assail me, the unseemly pleasures which eat away my soul. Disdain me not, O pure one, but have pity and save me!",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "The light-bearing cloud upon whom * the beginningless Master of all descended from heaven, * like the dew upon the fleece, * and of whom He was incarnate, * becoming a man for our sake, * let us all magnify as the pure Mother of God.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "O most immaculate one who hast given birth to the divine Light Who shone forth from the Father, have pity on my soul, which hath become darkened by the deceptions of life and is become an object of mockery to mine enemies; and grant unto me the light of saving repentance, O pure one.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most immaculate one, Isaiah beheld thee as a luminous cloud from whence the Sun of righteousness hath shone forth upon us, mystically to enlighten creation. Wherefore, with faith we hymn thee who art beautiful among women.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Loving sin, I live in slothfulness, O pure one. I tremble before the unfailing judgment, at which do thou preserve me uncondemned by thy holy prayers, O Virgin Bride of God, that I may ever bless thee as my helper.",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "I tremble before the judg­ment and the inescapable eye of thy Son, having committed many sins on earth. Wherefore, I cry to thee: O all- merciful Lady, help me! O pure one, rescue me uncondemned from my need at that time!",
                "tier": 1,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "O Virgin who gavest nourishment to One of the Trinity, O beauteous garden of paradise, salvation of mortals: by thy protection save those who piously hymn thee, for thou hast given birth to Him Who spake in the prophets, and didst bear Him Who upholdeth all things, in that thou art the Mother of Christ God.",
          "tier": 1,
          "src": {
            "file": "1-5.pdf",
            "locus": "Wednesday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 2
            },
            {
              "from": "U+041E O (Cyrillic), in spec_mel",
              "to": "O",
              "count": 1
            }
          ],
          "spec_mel": "Thy tomb, O Savior"
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., and the rest as usual. Dismissal."
    },
    "thu": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Having been delivered from bitter slavery, * Israel traversed the impassable as though dry land; * and beholding the enemy drowned, * they chanted unto God as to their Redeemer, * Who worketh wonders with His upraised arm, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "I am held fast in despondency as I consider the multitude of my transgressions and the answer I must make to the Judge, O Lady Theotokos. Yet be thou for me a divine mediator, placating Him by thy loving-kindness.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure one, thou refuge of Christians, setting aright of the fallen and cleansing offenses; at the hour of the dread judgment deliver me from the ever- burning fire, granting me life everlasting.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thee, O Virgin, have we all, the faithful, acquired as our only sure helper; for thou hast given birth unto God. Wherefore, all of us, all the generations of the earth, bless thee, as thou didst foretell, O pure one.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Beholding thy Creator and Son upon the Cross, O pure and all- immaculate one, thou wast filled with awe and didst say: “What is this, O my Child? How have the wicked repaid Thee with evil for the good which Thou didst show them?”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "To the Son who was begotten of the Father * without change before all ages, * and in the last times, without seed, was made flesh of the Virgin, * to Christ our God let us cry aloud: * Thou hast raised up our horn, holy art Thou, O Lord.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "All the prophets proclaimed thee the Mother of God in most glorious images; and we, clearly beholding their fulfillment, also believe, and ask that through thee we may receive divine serenity.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 1"
                },
                "label": "plain"
              },
              {
                "text": "O Sovereign Lady of the world, salvation and help of the faithful; accepting the signs which issue forth from the depths of my heart and the streams of my tears, deliver me who am bound by many transgressions, and save me, O pure one.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Possessed of boldness before Christ God, in that thou art His Mother, O pure one, pray thou ever that we be delivered from the children of Hagar and from all harm, and make us steadfast, that we may glorify Him with thanksgiving, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Beholding her Son lifted up upon the Cross, the most pure one exclaimed, and, crying out, gave utterance from the depths of her heart: “What have the wicked and iniquitous ones, who were filled to repletion with Thy gifts, done to Thee, O my Son?”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Rod of the root of Jesse, * and flower that blossomed from his stem, * O Christ, Thou hast sprung from the Virgin. * From the Mountain overshadowed by the forest * Thou hast come, made flesh from her that knew not wedlock, * O God who art not formed from matter. * Glory to Thy power, O Lord.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Cast down the savagery of the wicked foe and the machinations they direct against me, and invest me with thy might, O all-immaculate one, ever preserving me unharmed, whole and unvanquished, who radiantly hymn thee.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Vanquished by the law of the flesh, full of the passions, I do unseemly and iniquitous things. And I dare not in anywise lift up mine eyes to thee, O pure Lady. But do thou save me, wretch that I am, by the law of thy tender compassions. Do thou save me!",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Lady, we the faithful have thee and God alone as our hope unashamed and our help. By thy supplications deliver us from all enemies, visible and invisible, from harm and temptations, that we may unceasingly glorify thee.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Beholding the Son to Whom thou hast given birth without seed nailed to the Cross, O all-immaculate one, thou didst cry out maternally and, lamenting, didst say: “What is this new, most glorious and incomprehensible wonder which I behold in Thee, O my Son?”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "As Thou art the God of peace and Father of compassions, * Thou hast sent unto us Thine angel of great counsel, * granting us peace. * Wherefore guided towards the light of the knowledge of God, * and watching by night we glorify Thee, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "As thy supplication is tireless and thy helping of thy servants fervent, O Virgin, rescue and save us, anticipating our needs amid all the perilous misfortunes of life, that we not fall victim to grief and become corrupt.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Mary, dwelling-place of God, show me forth through repentance to be a habitation for God, for I have become the haunt of wicked demons through my vile deeds, mindlessly carrying out their will.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As thou art the compassionate Mother of God, heal us, who are cruelly afflicted in body and soul with sinful passions; for thou truly hast given birth to Christ, the Physician of souls and bodies, the abundant Wellspring of life.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Beholding her Son upon the tree of the Cross, the most immaculate one was stricken with pain in her womb, and with tears she cried out: I am in awe to see Thy long-suffering, O my Son, beholding this new wonder! How is it that Thou, Who art sinless, dost endure an unjust death?”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "The sea monster spat forth Jonah as it had received him, * like a babe from the womb: * while the Word, having dwelt in the Virgin and taken flesh, * came forth from her yet kept her incorrupt. * For being Himself not subject to decay. * He preserved His Mother free from all harm.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Thou wast the receptacle of the noetic Myrrh Who hath perfumed the whole earth with the sweet fragrance of His divinity, O most holy Bride of God. Wherefore, with the fragrance of thy supplication dispel all the stench of my transgressions from my soul.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The fire of pleasures doth utterly consume me, afflicting my lowly heart, and iniquitously moving me to commit unseemly deeds. Hasten thou to extinguish it, in that thou hast given birth to the divine Fire, my salvation, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Deliver us from the temptations of enemies visible and invisible, O all-hymned Virgin, and preserve those who with Orthodox Faith truly confess thee to be the Theotokos, O Mother of God; for thou dost ever possess might, in that thou hast given birth to Him Who hath created all things.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Standing before the Cross and beholding her Son hanging thereon in the flesh, the most immaculate one felt her womb burn with grief, and, shedding tears, she cried: “O my Child, truly ineffable is Thy compassion for all men!”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Scorning the impious decree of the godless one, * the Children brought up together in godliness * feared not the threat of fire, * but standing in the midst of the flames, they sang: * “O God of our fathers, blessed art Thou.”",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "I cannot bear the assaults and tumult of the demons, for the flame of carnal passions darkens my mind. Yet disdain me not, O holy Theotokos, for I set all my hope on thee.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Virgin who knewest not wedlock, O all-holy Bride and Lady of God, through thy prayers loose thou the bonds of my transgressions, and bind me to Christ with bonds of love, that I may bring forth the virtues as fruit.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art the helper, the bulwark and sure refuge of all Orthodox Christians, O pure Mary. Wherefore, honoring thee with faith, we cry out to Christ: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "The most holy virgin, beholding her Son suspended upon the Cross, was stricken with awe, and marveling, said: “How can I bear the sight of Thee slain, Who art the Author and Bestower of life?”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "The furnace moist with dew * was an image and prefiguring of a wonder past nature, * burning not the children whom it had received, * so the fire of the Godhead consumed not the Virgin's womb * into which it had descended. * Therefore in song let us sing: * Let the whole creation bless the Lord * and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "O Theotokos, Sovereign Lady of the world, do thou alone, by thy loving- kindness, lead me up, who by my wicked mind have been plunged into the abyss of perdition and evils by carnal pleasures and my passionate attachment to the things of life. For I in nowise have any hope of salvation, being wholly despondent, O pure one.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art the salvation of all, having given birth ineffably to God. Thou art the savior of the faithful, O Theotokos, the guide of the blind and the setting aright of the fallen. Wherefore, praising thee, we cry out to Christ: Bless the Lord, all ye works! Hymn and supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having acquired thee as a most firm bulwark, we have placed in thee our hope of salvation, O Mother of God. Be thou for thy servants a haven and an unshakable rampart, and guide us continually, that we may chant: Let all creation bless the Lord and supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Her womb was rent maternally, and filled with a multitude of tears, when she who gave birth to Thee in purity beheld Thee on the Cross, she cried out with inconsolable groaning: “Having escaped pain in Thy birth, O my Son, I am now held fast by pain, beholding Thy countenance dishonored.”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "Ineffable is the mystery of the Virgin: * for she is heaven and the throne of the cherubim, * and hath been revealed as the radiant bridal- chamber * of Christ God Almighty. * Wherefore we piously magnify her as the Theotokos.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "I have besmirched my soul with dishonorable passions, wretch that I am, and have defiled all my flesh with soul-corrupting passions; yet as thou art pure and undefiled, cleanse me by the magnitude of thy mercy.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 1"
                },
                "label": "plain"
              },
              {
                "text": "I have not acquired any other refuge than thee, O pure Lady, neither do I know any other steadfast helper and protection on earth. Wherefore, I have fled with fervor to thee, asking that through thee I might receive deliverance from offenses.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "From on high thou dost now look mercifully upon thy servants, O all-hymned one, preserving us with pious faith and delivering from every evil circumstance by thy prayers those who honor thee as the true and honored Theotokos.",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "When she who knew a seedless birthgiving saw Thee suspended upon the tree of the Cross, O Thou Who lovest mankind, she cried aloud: “O my Son and almighty God, in Thy desire to save mankind how hast Thou now accepted crucifixion?”",
                "tier": 1,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "Upon seeing the Lamb and Shepherd hanging dead upon the Tree, * the unblemished ewe-lamb, cried aloud, weeping * and exclaiming maternally: * “How is it that Thou dost willingly endure abasement and sufferings * which surpass all telling, ** O my Son, and supremely good God?”",
          "tier": 2,
          "src": {
            "file": "1-6.pdf",
            "locus": "Thursday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic), in spec_mel",
              "to": "O",
              "count": 1
            }
          ],
          "spec_mel": "Thy tomb, O Savior"
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., and the rest as usual. Dismissal."
    },
    "fri": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Let us all chant a triumphant hymn unto God * Who wrought wondrous miracles * with His upraised arm, * and saved Israel, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Thou art a haven of salvation and protection for those who call upon thee, O most pure Theotokos. Wherefore, I fervently cry out to thee from the depths of my soul: O Lady, save me!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure Mary, Mother of the Creator, in that thou art good and easy to reconcile, heal thou my lowly soul which hath been corrupted by the passions and transgressions.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O Lady unwedded, cease thou never to entreat my Creator and God on behalf of one who ever flees to thy protection, that I may receive mercy.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O animate palace and fiery throne of the King, with the holy martyrs and apostles do thou ever entreat Christ, that He deliver us from perils.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "The stone which the builders have rejected, * the same hath become the cornerstone: * this is the rock upon which Christ hath established the Church, * which He hath redeemed from among the nations.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "The darkness of transgressions surroundeth my heart, O Lady, and I dare not lift up mine eyes to heaven. Wherefore, I cry: Enlighten my mind, soul and heart with the precepts of Christ!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I gaze upon thy divine image, and I honor thee, the seal of the Master, the most pure Mother, as the prototype. And I kiss it, and bow down, and praise it, knowing thine honor and His alone.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Halt the cruel assaults of the body, and quench thou the flame of the passions, O Virgin, wherewith the cruel serpent weaves greatly tangled bonds offenses round about me, desiring to drag me down to destruction.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Issuing forth bodily, the Word clothed Himself wholly in Adam through thee. Him do thou therefore beseech, that He deliver us from the passions, from divers perils and everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Foreseeing in the Spirit O prophet Habbakuk, * the incarnation of the Word, * thou didst proclaim, crying aloud: * When the years draw nigh, Thou shalt be known; * when the season cometh, Thou shalt be shown forth! * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Having given birth to the Creator and Fashioner of all, O Virgin, thou hast ineffable power and invincible might, and savest those who approach thee with faith. Wherefore, I cry to thee: O Sovereign Lady of the world, help me!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Set at naught the battles of the invisible and noetic foe who assail in vain my wretched heart, O Lady, and grant me divine serenity and peace, that I may hymn thee in gladness.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art the hope of the hopeless, helper of the poor, consolation of those who weep, cleansing of the sinful, guide of the lost, healer of the sick and righting of the fallen.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O pure and blessed Virgin Mary, who alone hast done away with the curse of all; with the apostles, martyrs and prophets entreat Him Who issued forth from thy womb, that He save the souls of those who hymn thee.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Grant us Thy peace, O Son of God, * for we know no other God than Thee, * and we call upon Thy Name, * for Thou art the God of the living and the dead.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Save me from the abyss of perils, tribulations, griefs and bodily passions, O Lady, and preserve my soul in divine tranquility.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art my fervent and steadfast preservation all throughout my life, O most immaculate one. Wherefore, I beseech thee; even after my death, extend unto me thy rich loving-kindness.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O thou who hast given birth to the Creator and Redeemer of all, deliver me from the bodily passions which consume my heart and drag me into unseemly deeds.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In that thou hast been revealed to be a place of noetic sanctity, O Virgin Lady, wholly sanctify me, and with the holy and wise apostles pray that I be saved.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "Emulating the prophet Jonah, I cry aloud: * Free Thou my life from corruption, O good One; * and save me who crieth out: * O Savior of the world, Glory be to Thee!",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Thou preservest me alive, delivering me from dangers. In thy loving-kindness do thou also stand before me when I depart this earth for life everlasting, O Virgin Mother.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art an indestructible rampart, thou art a firm wall of protection, thou art a mighty intercessor for thy servant, O good Theotokos; wherefore, I ever call upon thee.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having acquired powerful supplications before God, O good Theotokos, disdain not me who fervently flee to thy protection and cry aloud: Have mercy on me, O Mother of the God of all!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Reject me not, neither spurn me, O Savior, for the ewe-lamb who gave Thee birth in the flesh entreateth Thee with Thine apostles, prophets and passion-bearers.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Thy children who were in the furnace O Savior, * were neither touched nor troubled by The fire. * Whereupon the three sang, as with a single mouth * Thy praises and blessed Thee, saying: * 'O God of our fathers, Blessed art Thou.'",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Hastening in thy loving-kindness, O most pure Lady, deliver me, who am brought to despondency by transgressions and the pleasures of the flesh and who am thrust into the abyss of destruction, O pure one.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Theotokos, thou art the refuge and mighty protection of all the faithful. Be thou for me a guide to the Creator, granting me deliverance from transgressions in thy compassion.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast destroyed the curse, O pure one who hast given birth to Christ our joy. By thy power, O most immaculate one, break thou also the curse which I have incurred through sin, and grant me joy.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O most holy and pure one, thy servants ever entreat thee day and night, praying with contrite thoughts. Grant us deliverance from our offenses by thy supplications.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Arise, go forth and do battle against the enemies who trouble and oppress us in vain, delivering us by thy power, O holy virgin, thou helper of the world!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast saved the world from death and corruption by thy divine birthgiving, O good Virgin; and now, by thy supplications, rescue from the passions and save us who praise thee.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Great and ineffable is thy might, O Virgin, and many and invincible are thy divine compassions and loving-kindness. Wherefore, save us who call upon thee in truth.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "As an animate vine, O Virgin, thou didst put forth for us the ripe Cluster, Who hath poured forth the wine of remission and dried up the drunkenness of sin.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "The light-bearing cloud upon whom * the beginningless Master of all descended from heaven, * like the dew upon the fleece, * and of whom He was incarnate, * becoming a man for our sake, * let us all magnify as the pure Mother of God.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Friday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Greatly tempest-tossed upon the sea of life by carnal pleasures, I fall down before thee and cry aloud: Have mercy on me, who flee unto thee, O Lady, and extend to me a hand of salvation, delivering me from the abyss of destruction!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "To thee do I confess my sins, O Virgin; before thy face do I disclose my shame; and I cry to thee from the depths of my soul “Have mercy and take pity, O most pure one, for on thee and God have I set my firm hope”!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With all my soul I call upon thee who hast given birth without seed to the Creator and Master, and I cry out earnestly: Save me from the corruption of manifold transgressions, and deliver me from the unquenchable fire, O most holy and good Theotokos!",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O pure one, thou impassable door, gate of paradise, path of the saved, way of salvation: with the martyrs and prophets, the righteous and venerable, and the divine apostles, pray thou, that our souls be saved.",
                "tier": 1,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "O most pure maiden, the prophets foretold thee as the cloud of the eternal light of God, the ark, the candlestand and jar, and the unquarried mountain; for in the latter times Christ our God came forth from thee without seed, as was the Father’s good pleasure.",
          "tier": 1,
          "src": {
            "file": "1-7.pdf",
            "locus": "Friday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and the rest as usual. Dismissal."
    },
    "sat": {
      "frame_rubric": "The priest saith: Blessed is our God..., and we respond: Amen. Glory to Thee, our God, glory to Thee. O heavenly King ..., Trisagion through Our Father. Lord, have mercy (12 times). Glory ..., Both now ..., O come, let us worship ..., (Thrice). Psalm 50 (Have mercy on me, O God...); Psalm 69 (O God, be attentive unto helping me...); and Psalm 142 (O Lord, hear my prayer...). Then, Glory to God in the highest..., and the Symbol of Faith (I believe in one God...).",
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos, in Tone I",
        "heading_rubric": "Canon of supplication to the most holy Theotokos, in Tone I",
        "odes": {
          "1": {
            "irmos": {
              "text": "Having been delivered from bitter slavery, * Israel traversed the impassable as though dry land; * and beholding the enemy drowned, * they chanted unto God as to their Redeemer, * Who worketh wonders with His upraised arm, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Praising thee, O Queen of all, the captains of the angelic ranks were filled with awe and fear, and every mind, because of thy goodness, hymneth thee as the Mot her of the Creator; for thou hast surpassed every form of laudation, having given birth to Christ.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Troubled by grievous temptations and afflicted by mine enemies, wretch that I am, I cry out, weeping: Stretch forth thy hand to me from on high, O thou who art exceeding rich, delivering me; and by thy supplications grant that I may live free from danger.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With the balm of thy tender compassion heal thou the secret transgressions of my soul, and calm the assaults of my flesh, O Theotokos; and, turning back the spears and darts of the enemy upon them, do thou mightily pierce their hearts.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Thy virginal womb which gave birth to Christ hath destroyed the ancient pasture of the slayer of mankind; wherefore, all creation now rejoiceth, O most pure one, having been restored to life, with one accord hymning thy Son and God.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "Let no mortal boast in his wisdom or wealth, * but rather in his faith in the Lord, * crying out to Christ God in an Orthodox manner, * ever chanting: do Thou Establish me O Master, * upon the rock of Thy commandments!",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Once, the great Jacob, sleeping on the way, and beholding angels descending from on high to the earth by a ladder, marveled, O Virgin; and, having awakened, he clearly described thee beforehand as the portal of heaven.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Cast into misfortune by temporal restraint, wretch that I am, and beset by perilous tempests, I cry aloud: Woe is me! O thou who gavest birth to God and hast lifted up our horn, save me by thy supplications!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Stretching forth thy mighty hand from heaven, O Christ, King of all, put Thou the heads of the enemies, perceptible and noetic, under the feet of those who with faith proclaim Thy Mother to be the Theotokos, O my Jesus.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Isaiah, of old, purified by the burning coal of the Spirit, cried out that a Son would manifestly be born of thy womb, O Virgin who art exceeding rich, and to Whom in latter times thou hast given birth without a man for my sake.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Of old, Habbakuk heard wondrous report of Thee O Christ, * and cried aloud in fear: * God shall come forth from Theman, * the Holy One from the mountain overshadowed and densely wooded, * to save His anointed ones! * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Thee, O Mother of God, hath the ruler of the world described beforehand as comely and all-honored among women, as coming up from the wilderness, and bearing Christ, thine Offspring, in thine arms; and he cried: Glory to Thy power, O Lord!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Incline thine ear unto me, O good one, behold mine oppression and the increase of my tribulations! For, lifting up the eyes of my soul to thee, O Lady, and bending my knees as I weep, I now pray, crying: Bring an end to the turmoil of my temptations!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Knowing thee to be an unassailable rampart, moved to entreaty, I, thy servant, now flee to thee, and I reckon the missiles of the enemy as impotent as the darts of children, O thou who art exceeding rich. Wherefore, rejoicing, I cry: Glory to thy birthgiving, O Mother of God!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "The power of the Most High overshadowed thee with the visitation of the divine Spirit, O Virgin, and then, beyond nature, the Lord of all, having endowed flesh and soul with life, united them to Himself, bringing life thereto and remaining in the same nature.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Do Thou shine forth O Christ Thy never-waning light * upon the hearts of those who hymn Thee with faith, * granting us peace beyond understanding; * Wherefore by Thy light we flee the night of ignorance * coming unto the day, * glorifying Thee O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Once, foreseeing thee, O all-hymned one, as a divine, unquarried mountain, Daniel manifestly cried aloud: From thee let the Stone of divine generation be cut: Christ, the Savior of the world! Honoring Him now, we the faithful praise thee, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I have fallen under many dangers, wretch that I am, and, praying with pain of heart and weeping, I, thy servant, cry out unashamedly: O Birthgiver of God, deliver my lowliness from besetting pains, and fill me with gladness!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Calm the raging sea of my passions by thy mighty supplication, O good one who hast given birth to Christ without suffering, that, living now in tranquility of soul, I may praise thee in hymns for the rest of my life.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Tell me: how bearest thou God in thine arms; and how dost thou give suck to Him Who holdeth all things in His hand, O all-blessed Virgin? And she said: “Having given birth unto Christ God, I remain pure, taking away the debt of Adam and our first mother!”",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "I am held fast in boundless passions, * and have fallen into the sea- monster of evil; * but do Thou lead me up from corruption O God, * as once Thou didst Jonah, * and by faith grant me dispassion, * that I may offer a noetic sacrifice of praise and salvation * unto Thee.",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Without departing from His place in the bosom of the Father, the pre-eternal Son rested in the bosom of His Mother. He, Who with the Father is before the ages, hath in latter times issued forth from the womb of the Virgin, leading all up to life immortal in His ineffable goodness.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Bound through malice by the chains of the enemy, I have been cast down to the bars of hell. Woe is me! Yet, appearing from heaven, O pure divine maiden, stand thou before me, thy servant, raising me up by thy supplications, and grant a helping hand to me who hymn thy divine birthgiving.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Wretch that I am, I have fallen into the pit of destruction, and many wild beasts surround me; yet, deflect their assaults by thy supplications, as with stones, O Lady, and keep thy servant unharmed; for thou didst bear in thy womb Christ, the Chief Cornerstone.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Of old, the choir of the divine prophets proclaimed the images of thy birthgiving, O Virgin, calling thee the radiant cloud, the lampstand, the jar, the table, the dew of heaven, the bread, the manna and the door, the throne and the palace, the rod and paradise, in that thou hast given birth to Christ.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Having passed through the unbearable flame of the furnace * as though it were a bridal-chamber, * the children who for the sake of piety, * were revealed as holy * chanted together, singing the hymn: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "The Pre-eternal One, passing through thine impassable doors, O Queen of all, preserved the tokens of thy virginity pure and intact, even after giving birth. Wherefore, we cry aloud: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Cast into the furnace, I am consumed by the sevenfold flames of soul-slaying perils; yet do thou thyself rain down dew upon me by thine entreaties, O good Lady, that I may cry: Blessed is the God of our fathers!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having grown old through the passions, through unremitting misfortunes and tribulations, and having reached the sunset of my life devoid of the virtues and devoured by slothfulness, I cry to thee, O Lady: O consolation of mortals, have mercy on me!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Worshipping the Trinity in Unity in an Orthodox manner, and proclaiming thee, O pure Virgin Mother, to be the one who gave birth to God in the flesh, in a godly manner we mortals chant: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "The furnace moist with dew * was an image and prefiguring of a wonder past nature, * burning not the children whom it had received, * so the fire of the Godhead consumed not the Virgin's womb * into which it had descended. * Therefore in song let us sing: * Let the whole creation bless the Lord * and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "The supremely true word of the priest prefigured thy birthgiving, O Virgin; for thou didst truly give birth to the Word of God, and thy womb, through which God passed, He did not rend apart. Wherefore, rejoicing as is meet, with one accord we hymn thee, the Theotokos, as is due, and exalt thee, the pure one, throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With divine fire burn up the uncultivated thorns which have grown up in my soul, O most pure one, and by thy supplications raise me up to the virtues, that I may bear fruit for Christ; for the ever-living Flower, having sprung forth from thee, hath adorned all creation. Wherefore, we honor thee, the pure Theotokos, throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Quickly and painlessly grant me healing amid evils, O Birthgiver of God; for, having fallen into afflictions and perils, wretch that I am, I invoke thy quickness to help, lamenting. Wherefore, O most pure one, hasten thou to rescue me and save me from every torment, that, blessing thee, I may hymn thy birthgiving.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Of old, the rod of Aaron that budded forth prefigured thee, O Virgin; for, budding forth, thou alone hast given birth without a man, having now received the Rain of heaven in thy womb. Wherefore, in gladness we hymn thee, the Theotokos, as is due, and supremely exalt thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "Ineffable is the mystery of the Virgin: * for she is heaven and the throne of the cherubim, * and hath been revealed as the radiant bridal- chamber * of Christ God Almighty. * Wherefore we piously magnify her as the Theotokos.",
              "tier": 2,
              "src": {
                "file": "1-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Most glorious is the mystery of the Virgin! For Him Whom the vast spaces above the heavens could not contain was contained within her womb. Wherefore, assembling, we call her blessed, and in gladness we magnify her with faith.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Seeing thee alone as higher than the heavens, the radiance of God, the throne of the cherubim and the bridal chamber, the holy couch, O undefiled one, we mortals, praising Christ our God, magnify Him to Whom thou hast given birth through thy pure loins.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Round about me are many afflictions; and evil misfortunes, sickness and grievous sins, now assailing me, have cast me into the pit. Wherefore, in the bitterness of my soul, I pray: O most holy Theotokos, find deliverance for me!",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Through the entreaties of the pure divine maiden, O Christ, bring peace to the world, casting the power of the enemy down beneath the feet of the faithful and, establishing unutterable tranquility thereby, preserve it throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "1-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E O (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone I:",
        "sessional": {
          "text": "Fleeing with love for thy goodness, we all know thee to be the Mother of God, who wast truly revealed as a virgin even after giving birth; for we sinners have thee as our intercessor, and we have acquired thee as our salvation amid misfortunes, the only all-immaculate one.",
          "tier": 1,
          "src": {
            "file": "1-1.pdf",
            "locus": "Saturday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and the rest as usual. Dismissal."
    }
  },
  "matins_weekday": {
    "mon": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "I, the prodigal, conceived in iniquities, dare not gaze upon the heights of heaven; but risking offense to Thy love for mankind, I cry: Cleanse me, O God, and save me!",
              "tier": 1,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "If the righteous man is barely saved, where shall I, a sinner, find myself, for I have not borne the burden and heat of the day. Yet number me among the hired workers of the eleventh hour, and save me.",
              "tier": 1,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 2"
              },
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 1 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "O most pure Theotokos, * thou who art blessed in the heavens * and glorified upon the earth ** Rejoice, thou Bride unwedded!",
            "tier": 2,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": "Thy tomb, O Savior",
          "items": [
            {
              "text": "Hasten Thou to open unto me Thy fatherly arms, though I have wasted my life in prodigality. Disdain not now mine impoverished heart, O Savior, Who hast before Thine eyes the inexhaustible riches of Thy compassions. For unto Thee, O Lord, do I cry out in compunction: O Father, I have sinned against heaven and be­fore Thee!",
              "tier": 1,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            },
            {
              "text": "Thy tribunal is awesome, Thy judgment righteous, and my deeds are evil. Yet do Thou, O Merciful One, go before me and save me. Free me from torment, O Master, and deliver me from the lot of those on Thy left hand; yea, grant that I may stand at Thy right hand, O most just Judge.",
              "tier": 1,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Lord, the glorious passion-bearers were invested by Thee with the boast of suffering and the dignity of crowns; for by enduring wounds they vanquished the iniquitous, and by divine power received victory from heaven. Through their supplications free me also from the invisible foe, O Savior, and save me.",
              "tier": 1,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            },
            {
              "text": "Wondrous is God in His saints, * the God of lsrael.",
              "tier": 2,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Set aright my wretched soul, O pure one, and have pity on it which, through the multitude of my transgressions hath fallen headlong into the pit of destruction, O all-immaculate one; and at the dread hour of death rescue me from the interrogating demons and from all torment.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Matins, sessional set 2 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": "Thy Tomb, O Savior",
          "items": [
            {
              "text": "Having mindlessly withdrawn from Thee, O all-Compassionate One, I have wasted my life in prodigality, ever laboring for the irrational passions; but at the supplications of the angels, O loving Father, accept me as Thou didst the prodigal son, and save me.",
              "tier": 1,
              "src": {
                "file": "1-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "O all-pure maiden who alone art higher than the immaterial armies and surpassest the ranks of heaven, thou receivest fitting praise from them; but with the angels beseech thy Son, that I who alone am condemned may be delivered from the tyranny of the passions.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance, the acrostic whereof is “Wash away the defilement of my transgressions, O Word'', the composition of Joseph, in Tone I",
          "heading_rubric": "Canon of repentance, the acrostic whereof is “Wash away the defilement of my transgressions, O Word'', the composition of Joseph, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "According to the magnitude of Thy mercy, O Christ, do away with the multitude of my sins, I pray Thee, and grant me the thought of returning to Thee, that I may glorify Thy goodness, which is past understanding.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In the loving-kindness of Thy compassions Thou didst appear on earth as an incarnate man; wherefore, accept me who have sinned more than any other man, O Word of God, and who now fall down before Thy compassions in repentance.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Emulating the death of Christ Who of His own will suffered death, O all-praised and right glorious ones, ye endured multifarious sufferings and death; wherefore, ye have received immortal life, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Most gloriously bearing the fire of divine love within you, O martyrs, ye did not fear the fire, but by the ardent excess of pain ye utterly consumed all the tinder of polytheism.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "With us the ranks of the incorporeal beings hymn thee, O all- hymned Virgin; for unto the Infinite One, Who became incarnate within thy womb, thou hast given birth, remaining a virgin as thou wast before giving birth, O Bride of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Arise and step forth, O my soul, and cry out to thy Creator, Who knoweth all thy hidden things; and show forth fruits of repentance, that the compassionate Lord may have mercy on thee and deliver thee from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O only good One, purify, cleanse and save me, for like the publican I cry out to thee with fear: I am drawn along by a multitude of sins, am crushed beneath the weight of my transgressions, and am filled with immeasurable shame!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Filled with wisdom and true understanding, the martyrs revealed the wisdom of the pagans to be foolishness; they destroyed the evil of their philosophies, and suffering mightily, as is meet have received crowns of victory, rejoicing.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Confessing the Trinity of Persons, the Unity in essence, O spiritual athletes, ye destroyed the falsehood of polytheism with divine Faith, and were revealed to be luminaries, enlightening the hearts of all with rays of grace.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O pure and holy Bride of God, in holiness thou hast given birth to the Son and Word, Who with the Father is equally without beginning, Who resteth in the saints, and in the Holy Spirit sanctifieth those who piously call Him holy.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Unto what can I liken thee, O my wretched soul, who commits wickedness and fails to do good? Turn thou, and cry out to Him Who of His own will beggared Himself for thy sake: O Thou Who knowest the hearts of all, have pity and save me!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Savior Who hast appointed repentance for those who turn away, bestow it upon me, O good One, granting me compunction and sighs before the end of my life, as Thou didst to the harlot of old who clasped Thy feet, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Brimming with the waters of the Spirit, the martyrs were revealed by God to be rivers of living water; drying up the torrents of turbid delusion by the Spirit, and giving drink to the minds of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The divine martyrs struggled greatly, for they endured fire and the sword, and the infliction of all manner of evils. By their supplications, O Word of God, deliver from great and everlasting torment those who hymn Thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The compassionate Son, Who transcendeth times and seasons, Who in the beginning was begotten of the unbegotten Father, and Who became incarnate from thee, O Virgin, was born within time, desiring to abolish the temporal warfare of mortals.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "I have fallen into the corruption of the passions, and fear Thy just judgment, O righteous Lord; wherefore, I pray Thee: Strengthen me to do good works that I may be justified.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou knowest the hidden and secret things of my heart, O my God, Creator and Lord; wherefore, condemn me not at the hour of judgment, when Thou shalt come to judge all mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In tasting of fire, the saints showed forth the burning of their divine love; wherefore, bedewed, the God-bearers rejoiced in the expectation of things to come.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Fortified by the hope of good things, the martyrs most patiently endured dismemberment, and with the cords of their mighty endurance they strangled the greatly crafty one.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The mouths of orators are unable to convey the ineffable wonder of thy birthgiving, O Bride of God; for thou hast given birth to the Ineffable One, and in thine arms didst hold Him Who upholdest all things in His hand.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "As a physician, O Christ, heal the sufferings of my heart, and cleanse me from every defilement with streams of compunction, O my Jesus, that I may hymn and magnify Thy compassion.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Turn me back, who am gone astray among the ways of destruction and fallen into the pit offenses, O Christ, and lead me to the straight paths of Thine honorable justifications, that I may glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As true jewels of great price strewn forth by the Stone, ye did not reject the Rock of life, nor did ye sacrifice to graven stones, as glorious martyrs crowned by the Lord.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having tilled their souls with the plough of faith, by the divine Spirit the martyrs brought forth the grain of suffering a hundredfold, and have been deemed worthy of blessed food.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Giving birth to the Fire of the fiery ministers, in a primal manner thou wast shown to excel them and all creation, O most pure and all-immaculate Virgin, and divinely joyous one, who art blessed among women.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With virtue as his companion, Daniel tamed the lions of old. Emulate him, O my soul, and ever lifting thine eyes up to God, render impotent him who ever roareth like a lion, desiring to seize thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have grievously defiled my soul with an excess of fornication. O Christ Who hast exalted virtue, accept me as the prodigal, and have pity on me who chant: All- hymned and most glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Right mightily strengthened by the law of Christ, the invincible martyrs rendered impotent the counsels of the iniquitous; and having lawfully reached the end of their life, they chanted: O all-hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O divinely illumined martyrs of the Lord, set afire by the light of the Trinity, ye manifestly destroyed the darkness of torment and the gloom of delusion, chanting: All-hymned and most glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "In thee the laws of nature are restored, for, beyond the laws of the flesh, thou hast given birth, O all-immaculate one, to Christ, the Bestower of the law, Who proclaimeth deliverance for all who chant: All-hymned and most glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye works of the Lord, * hymn and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ my compassionate Redeemer, from the gloom of sin which besets me and from all temptations deliver me who cry: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When Thou shalt come in glory to judge the world, O Christ, cause me to stand with Thine elect, who cry out and say: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye have passed over to the land of Christ, O holy martyrs; for having struggled greatly on earth, ye have received the life of heaven, chanting: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Having put off the corrupt body, as victorious martyrs ye clothed yourselves for Christ in the vesture of immortality, and ye cry down from the heavens: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "From afar sacred voices proclaimed thee to be the Mother of God Who created all things, O most pure one. Unto Him do we chant: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
                "tier": 2,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Like the Canaanite woman I cry unto Thee: Have mercy on me, O Word! For I have a soul which is prey to the assaults of the demons, which mindlessly committeth iniquities and which lacketh all godly fear of Thee, O Long-suffering One.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lord, set Thou the feet of my soul upon the rock of Thy precepts; tread down the serpent, who shamelessly desires to trip me, and deliver me from his malice, in that Thou art good and greatly merciful.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having first withstood the roiling waters of temptations and the storm of grievous wounds, O martyrs, ye manifestly attained unto the harbor of the heavenly kingdom, finding delight in divine tranquility.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "To the holy martyrs: Ye were deemed worthy to become radiant martyrs for the never-setting Light, and have made your abode in the Church of the firstborn; and ye rejoice with the angelic choirs, and with them entreat the Bestower of life on our behalf.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thou bearest Him Who sustaineth all things, and givest suck unto Him Who giveth food unto all. Great and awesome beyond understanding is the mystery of thee, O Virgin Theotokos, who art adored in holiness. Wherefore, we bless thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the incorporeal hosts, the acrostic whereof is “The first hymn to the angels,” the composition of Theophanes, in Tone I",
          "heading_rubric": "Another canon, of the incorporeal hosts, the acrostic whereof is “The first hymn to the angels,” the composition of Theophanes, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Thy victorious right arm ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 1 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.1.irmos"
              },
              "items": [
                {
                  "text": "Standing in splendor before the throne of the Master, Who is equally eternal with the Father, and is His angel of great Counsel, O all-holy angels, pray for me who hymn you, that He may inspire my words.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Considering of old, the divine Mind created the ranks of the angels, who receive the reflection of the light of the Godhead and the radiance of the three- Sunned Effulgence, as far as they are able.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "He Who as God adorned the ranks of the hosts on high made His abode within thy womb, which knew not wedlock and is more exalted than the seraphim, O Theotokos; and He became immutable flesh.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Thou alone knowest the weakness ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 3 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.3.irmos"
              },
              "items": [
                {
                  "text": "Directly approaching the deifying Light, and filled therewith in multifarious ways, the seraphim were manifestly the first to be enlightened by the primal radiances, and became like secondary luminaries, deified by the Godhead.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Earnestly desiring to hymn the radiance of the angels who thereby impart help from God, O ye faithful, in purity of mind and with most pure mouths let us beg to receive their effulgence.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Deemed worthy to behold the transcendent Mind as is meet, Gabriel brought thee a cry of joy, O all-immaculate Virgin, manifestly declaring to thee the conception of the Word, and proclaiming thy birthgiving.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Perceiving thee with prophetic eyes ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 4 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.4.irmos"
              },
              "items": [
                {
                  "text": "As the first adornments of the universe! the thrones, and cherubim and seraphim shone forth directly with divine rays; and ordering themselves now in their deifying sacred ranks, they chant: Glory to Thy power, O Lord!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "With unceasing threefold hymns to the Trinity the sacred seraphim praise the three­fold Unity of the Godhead, revealing the most pure mystery of theology, and teaching the Orthodox Faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "He Who is understood to transcend all creation in His life-giving creative power, truly working miracles on earth by virginal splendors, made His abode within thy pure womb, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou hast shone upon us with the radiance ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 5 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.5.irmos"
              },
              "items": [
                {
                  "text": "Set afire by divine love, the dominions, principalities and powers, the secondary ranks, hymn the one Essence and Power of the Godhead with unceasing voices.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "The angelic ranks, the angels and principalities, and the countless armies of heaven are guided by the Spirit: they are taught to worship with splendor the illumining Essence in three Hypostases.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thou wast adorned more greatly than the majesty of the angels; for, having given birth to the Creator and Lord of the angels, O most pure Mother of God, of thine own blood thou hast ineffably given birth to Him in the flesh.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "The deepest abyss hath surrounded us ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 6 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.6.irmos"
              },
              "items": [
                {
                  "text": "The ranks of the incorporeal beings, standing before the throne of Thy glory, O Lord Who lovest mankind, worship Thee with unceasing angelic voices, for thou art their strength, O Christ, and their hymn.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Gazing upon Thy countenance, the inconceivable beauty and supremely divine magnificence of Thy divine radiance, the angels are enlightened; for Thou art their light and joy.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The Word Who before was the incorporeal, Who accomplisheth all things by His will, and brought the armies of the incorporeal beings out of non-existence, became incarnate from thee, O most pure one, in that He is Almighty.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "We the faithful perceive thee, O Theotokos ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 7 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.7.irmos"
              },
              "items": [
                {
                  "text": "Thou art Light without beginning, Who shone forth from the Father of light, O Master, and didst make the armies of the angels mirrors reflecting Thy never- waning radiance. All-hymned and most glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lord of all, Thou dost manifestly save the race of mankind through the supplications of the angels, for Thou hast assigned them to all believers who in an Orthodox manner hymn Thee, the all-hymned and most glorious God of our fathers.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Tongue and mind are unable to recount Thy wonders and the majesty of Thy works, O Master; for Thou hast enlightened all the beauty of the heavenly hosts. All-hymned and most glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The Son, Who before was begotten of the Father without mother, became incarnate from thee, O pure one, for our sake becoming like us. Him do the regiments of the incorporeal beings now serve as the praised and most glorious God of our fathers.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "In the furnace as in a fiery smelter ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 8 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.8.irmos"
              },
              "items": [
                {
                  "text": "Emulating the armies of the angels, which are enlightened and fully illumined by the rays of the beauty of the threefold Sun, O ye faithful, let us chant: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As the source of all good things, the divine power of the Godhead brought forth the divine hosts as secondary luminaries which receive the primal Light and cry out: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The primal Mind and Creator trans-essentially made celestial the angelic intelligences, who clearly draw nigh unto Him and cry: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Unto Him Who was begotten by the Father before time in a manner past describing thou didst ineffably give birth for us, O all-immaculate Virgin. Unto Him do we cry: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                },
                {
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Bush, which burnt without being consumed ...,",
                "tier": 1,
                "src": {
                  "file": "1-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 9 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.mon.canons[0].odes.9.irmos"
              },
              "items": [
                {
                  "text": "O Savior, Thou didst create the incorporeal intelligences to share in Thine ineffable glory. By them do Thou preserve now Thy people, who flee unto Thee with faith and love, that we may magnify Thee directly, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Send Thou an angel of peace to preserve Thy flock, O Almighty; for Thou art the Cause of peace and love, preserving the divinely wise Faith, and destroying all heresies by Thy power.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "All the delight of which we sing, the radiance of heavenly delight, do Thou plant in Thy Churches, O Master; and grant us the state wherein with piety we may unceasingly magnify Thee, the Savior.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The ranks of angels now unceasingly hymn thy birthgiving, O most pure one, for they stand in rank, gazing upon and sharing in His gladness; and they unceasingly magnify thee, the Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "1-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "The first hymn to the angels",
          "composer": "Theophanes"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone I:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone I:",
        "items": [
          {
            "text": "The next world awaiteth thee, O soul, and the Judge will rebuke thy hidden and evil deeds. Wherefore, tarry not amid the things that are here, but step forth beforetime, crying out to the Judge: Cleanse me, O God, and save me!",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Overlook me not who am beset by sinful sloth, O my Savior, but lift my mind up to repentance, and show me to be a skillful laborer in Thy vineyard. Grant unto me the reward of the eleventh hour, and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Come, O ye people, and with hymns and spiritual songs let us all honor the passion-bearers of Christ, for they are the luminaries of the world and the preachers of the Faith, the ever-flowing fountain from whence healings pour forth upon the faithful. By their supplications, O Christ our God, grant peace to Thy world and great mercy to our souls.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_matins"
        }
      },
      "aposticha_theotokion": {
        "text": "O thou who art more holy than all the holy powers * and more honorable than all creation, * O Theotokos, thou Sovereign Lady of the world, * who didst give birth to the Savior, * by thy supplications save us from countless transgressions and difficulties, ** in that thou art good.",
        "tier": 2,
        "src": {
          "file": "1-2.pdf",
          "locus": "Monday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparion."
    },
    "tue": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "I, the prodigal, conceived in iniquities, dare not gaze upon the heights of heaven; but risking offense to Thy love for mankind, I cry: Cleanse me, O God, and save me!",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "If the righteous man is barely saved, where shall I, a sinner, find myself, for I have not borne the burden and heat of the day. Yet number me among the hired workers of the eleventh hour, and save me.",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 2"
              },
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 1 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "Having been begotten in heaven without mother, on earth Thou wast born without father in a manner past understanding and all telling. Him do thou beseech, O Theotokos, that our souls may be saved.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": "Thy tomb, O Savior",
          "items": [
            {
              "text": "Hasten Thou to open unto me Thy fatherly embrace, though I have wasted my life in prodigality. Disdain not now mine impoverished heart, O Savior Who hast before Thine eyes the inexhaustible riches of Thy compassions. For unto Thee, O Lord, do I cry out in compunction: O Father, I have sinned against heaven and before Thee!",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            },
            {
              "text": "Seeing the wealth of the virtues of Job, the enemy of the righteous plotted to ruin and rob him of them; but though the enemy broke the tower of his body, he could not steal the treasure of his spirit, for he found the soul of the blameless one to be fortified. Yet he hath stripped me naked and exiled me. Wherefore, going before me before the end, O Savior, deliver me from the deceiver, and save me.",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "As valiant warriors, believing with oneness of mind, ye were undaunted by the threats of the tyrants, O holy ones. Ye came eagerly to Christ, taking up the precious Cross; and having finished the race ye received victory from heaven. Glory be to Him Who strengthened you! Glory be to Him Who crowned you! Glory be to Him Who through you worketh healings for all!",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Thou didst anticipate the despair of the Ninevites, setting aside the punishment decreed for them, O Lord, and Thy mercy overcame Thy wrath. Have pity now upon Thy people and flock; cast down our enemies with Thy mighty hand, and through the prayers of the Theotokos grant us Thy mercy.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Matins, sessional set 2 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": "Thy tomb, O Savior",
          "items": [
            {
              "text": "In my thoughts I have fallen among thieves and been robbed in mind. I have wounded my soul with sins, and lie bruised, O greatly merciful Jesus. Yet through the supplications of the Forerunner pour forth Thy mercy, and heal the grievous wounds of my soul.",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O John who of old baptized the Cleansing of the whole world in the streams of the Jordan, raise me up who have been brought low by many transgressions, and wash away all my defilement, as a right acceptable mediator ever entreating Him Who is the Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "1-3.pdf",
                "locus": "Tuesday Matins, sessional set 3 Glory sticheron"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "glory"
            }
          ],
          "verses": [],
          "closer": {
            "text": "O pure Virgin Theotokos who knewest not wedlock, thou sole intercessor and protection of the faithful: from tribulations, sorrows and cruel circumstances deliver all who place their trust in thee, O maiden, and save our souls by thy divine supplications.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Matins, sessional set 3 closer (Both-now Theotokion, split from its Glory)"
            },
            "type": "theotokion",
            "sourceLabel": "Theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance, the acrostic whereof is “Accept the supplication of my words, O Christ” the composition of Joseph, in Tone I",
          "heading_rubric": "Canon of repentance, the acrostic whereof is “Accept the supplication of my words, O Christ” the composition of Joseph, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us all chant a triumphant hymn unto God * Who wrought wondrous miracles * with His upraised arm, * and saved Israel, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Enslaved by the passions of sin, I fall down before Thee, O Lord, that Thou mightest show me to be free of them, for I ardently glorify Thy goodness.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Wretch that I am, I have been wounded by the spear of sin and am done to death. And the enemy, seeing me lying there, is gladdened. O Thou Who dost raise up the dead, give me life and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The choirs of the passion-bearers rendered glory, with their members glorifying Christ Who bore our flesh and brought an end to corruption by His sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The glorious martyrs, the towers and ramparts of piety, remained unshaken by the assaults of the enemy. By their prayers, O God, have pity on us all.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Like a fiery throne thou bearest the Creator, O Virgin, and like an animate bridal-chamber and beauteous palace thou containest the King Who became like us, though without change or confusion.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "The stone which the builders have rejected, * the same hath become the cornerstone: * this is the rock upon which Christ hath established the Church, * which He hath redeemed from among the nations.",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Behold my weakness, O greatly merciful Christ Who clothed Thyself therein! Behold the exceeding ugliness of my soul! Hearken to my voice, O Savior, and transform its lack of beauty into comeliness.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Jesus Who saved the prodigal, save me who alone have transgressed Thy laws of salvation, though I have mindlessly committed every sin, and estranged myself from Thee by thoughts which make me alien to Thee, O good One.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The ranks of the incorporeal ones truly marveled at your courage, O saints: how, suffering most gloriously before the tribunal, and falling in body, ye cast down all the incorporeal foes by divine power.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Still stained with the blood of your wounds, still soaked with drops of your blood, O passion-bearers, crowned as victors ye stood, rejoicing, before the Lord, the immortal King.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Thou hast given birth unto Him Whom the Father begat before all ages. And without having known a man thou didst feed the Nourisher. Behold an all-wondrous miracle, a new mystery, O thou who art full of the grace of God! For this cause the soul of each of the faithful doth glorify thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Foreseeing in the Spirit O prophet Habbakuk, * the incarnation of the Word, * thou didst proclaim, crying aloud: * When the years draw nigh, Thou shalt be known; * when the season cometh, Thou shalt be shown forth! * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "The riches Thou gavest me have I squandered, O Christ, wickedly committing unseemly deeds; and being naked, I clothed myself in works of ungodliness. Wherefore, I cry to Thee: Taking pity on me in Thy divine goodness, clothe me again in my primal vesture.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have been brought low by mindlessness, have fallen grievously, and lie on the ground, incurably sick. Raise me up, O Christ, Thou restoration of the fallen, and establish my heart on the rock of saving repentance.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Emulating Christ Who was lifted up upon the Cross, and accepting wounds, the passion-bearers rejoiced together, and with the showers of their blood caused the showers of polytheism to cease, pouring forth streams of healing.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Navigating with the hope of salvation as your rudder, O divine spiritual athletes, ye traversed the violence of tortures and waves of bitterness dryshod, and hastened to the harbor on high, full of all gladness.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Beholding thee, the angelic armies were amazed at how He Whose visage is invisible through thee took on visible form like unto ours, O Virgin Birthgiver of God. Him do thou beseech, that He grant salvation unto all who glorify thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Grant us Thy peace, O Son of God, * for we know no other God than Thee, * and we call upon Thy Name, * for Thou art the God of the living and the dead.",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "I am satiated with many and grievous falls into sin, O compassionate and long- suffering Master. Have pity on me who have condemned myself, and turn not Thy face away from me.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou didst justify the publican who sighed, O Christ. And I, emulating him, beat my breast and cry out to Thee: Cleanse me, O Thou Who alone art compassionate and full of tender compassion!",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thy saints, O Lord, have been shown to be steadfast luminaries who dispel the deep night of delusion and enlighten the whole world with wondrous radiance.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Cherishing Thee, the Rock of life, like an all-precious stone, the martyrs, whirled about amid tortures, brought down the whole edifice of delusion.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O all-immaculate one, thou hast given birth to One of the most holy Trinity in two wills but bearing a single hypostasis. Him do thou earnestly beseech, that we all may be saved.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Emulating the prophet Jonah, I cry aloud: * Free Thou my life from corruption, O good One; * and save me who crieth out: * O Savior of the world, Glory be to Thee!",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "The bones of mine accursed soul have been broken, and I have been crushed beneath the weight of many pleasures. But help me, O Christ, Thou only help of all.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have fallen into the deep of evils and the tempest of the passions, but I cry to Thee, O almighty Christ: Lead me up with Thy mighty hand, and save me!",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With tens of thousands of the elect the multitude of the holy passion-bearers trampled underfoot the myriads of the noetic foe, uniting themselves to the myriads of the noetic intelligences.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having caused the depths of ungodliness to dry up, O spiritual athletes, ye have inherited a torrent of delight; wherefore, dry up the odor of my sin.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O Mary, revealed tabernacle of sanctification, sanctify my wretched soul which alone hath been defiled by pleasures, and cause me to share in glory divine.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "Thy children who were in the furnace O Savior, * were neither touched nor troubled by The fire. * Whereupon the three sang, as with a single mouth * Thy praises and blessed Thee, saying: * 'O God of our fathers, Blessed art Thou.'",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Job mastered patience, and as a tower of courage remained unshaken by all the attacks of the wicked one. Him do thou emulate, O my soul, and in nowise be disheartened amid evils.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have been overcome by the pleasures of the body, and though a rational being, have become irrational. O Word of God Who saved the harlot by Thy word, save me, the wretched one, that I may sing, blessing Thy goodness.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Delivered by the blood of Him Who suffered in the flesh for our sake, O wise martyrs, it was your good will to ardently shed your blood for Him. Wherefore, ye reign unceasingly with Him.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "By the upbuilding of your sacred sufferings, O wise ones, ye showed yourselves to be a palace wherein Christ, the only King and Lord, joyfully rested, Who led you all into the mansions of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O all-hymned one, Christ desired thee alone out of all generations, as one pure and honorable, to be His habitation; and shining forth from thee like the sun, He hath enlightened all the earth.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "By his wicked counsel the lying serpent hath stripped me bare of all the virtues. O my Savior Who hath stripped away his evil, array me now in the robe of the virtues.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O righteous Judge Who shalt come to judge the race of mankind at the dread hour, send me not condemned into the fire of Gehenna, but have pity and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Neither tribulation, nor misfortune, nor the sword, nor fire were able to separate you from the love of Christ, O all-praised spiritual athletes of the Lord, because of the loving-kindness of Him Who loved you.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Wrestling in the flesh against the bodiless foe, ye cast him down, O valiant spiritual athletes; and ye now join chorus with the incorporeal beings, curing the passions of our souls and bodies.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The Husbandman of all, finding thee to be like a flower in the vales of life, made His abode within thee, O Birthgiver of God; and He now perfumeth us with the sweet scents of the virtues and purity.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The light-bearing cloud upon whom * the beginningless Master of all descended from heaven, * like the dew upon the fleece, * and of whom He was incarnate, * becoming a man for our sake, * let us all magnify as the pure Mother of God.",
                "tier": 2,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Now is the time for repentance and works of purity! This is the day for us to do the works of light! Flee the darkness of the passions, and cast off the sleep of evil despondency, O my soul, that thou mayest share in the divine light.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I sigh like the publican, and I shed tears like the harlot; like the thief I cry out to Thee: Remember me, O Compassionate One; and like the prodigal son I exclaim: I have sinned! And I fall down before Thee as did the Canaanite woman. O merciful Christ, disdain me not!",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having patiently surrendered bodies over to wounds and a violent death, ye have truly been shown to be physicians who heal the passions of men’s body and the broken state of their souls, O all-famed spiritual athletes of the Lord; wherefore, ye are ever called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The patience of the most wise passion-bearers of Christ hath shone forth far more brightly than the radiance of the sun; wherefore, by grace it hath manifestly felled the prince of darkness, destroyed the might of ungodliness, and illumined the hearts of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With the enlightening splendors of the Word Who shone forth from thy holy womb illumining the ends of the earth, O Virgin Theotokos, enlighten my soul, which hath been darkened by the blackness of pleasures and the apathy of the passions, that I may hymn thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "Accept the supplication of my words, O Christ",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy forerunner, the acrostic whereof is “Thou hearest the voice of those who cry out to thee, O blessed one,” in Tone I",
          "heading_rubric": "Another canon, of the holy forerunner, the acrostic whereof is “Thou hearest the voice of those who cry out to thee, O blessed one,” in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us all chant a triumphant hymn ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 1 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.1.irmos"
              },
              "items": [
                {
                  "text": "Thou wast the voice of the Word, O blessed one; wherefore, accept the cries we make unto thee, O Forerunner, freeing us from evils by thy mediation.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Shining forth like the dawn, like the sun, thou enlightenest the ends of the earth, casting the evil spirits into darkness; wherefore, dispel gloom from our souls.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Forerunner, unto mortals thou didst preach that our Life is come; wherefore, slay thou the passions which do me to death, O blessed one, and show me forth as one who shareth in the effulgence of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure Lady, who within time hast given birth to the only timeless Son incarnate, heal mine all-accursed soul of the passions which ever afflict me.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "The stone which the builders have rejected ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 3 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.3.irmos"
              },
              "items": [
                {
                  "text": "O Forerunner who sprang forth in a sacred manner from a barren and childless woman, thou wast revealed to be fruitful in divine deeds; wherefore, my heart, which is in all ways unfruitful, do thou render fruitful in good works, that I may ever faithfully glorify thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the bread of heaven, O blessed one, fortify my heart which is paralyzed by wicked thoughts; and grant that I may earnestly do the will of the all- compassionate God, that I may ever glorify thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou didst preach the Lamb Who taketh away the sins of the world, O blessed prophet. Ease thou the heavy burden of my sins, I pray, granting me compunction, which washeth away the defilements of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The Word Who issued forth bearing flesh from thee, O Theotokos, clothed Himself wholly in Adam. Him do thou entreat, O Theotokos, that He deliver us from all temptations and from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Foreseeing in the Spirit O prophet Habbakuk ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 4 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.4.irmos"
              },
              "items": [
                {
                  "text": "Having woven a garment of salvation for thyself in the nakedness of thy body, O thou who didst baptize the Lord, with the vesture of righteousness and gladness do thou clothe me, who am stripped bare of all good works, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Let a drop of salvation fall upon me who am withering away through the burning of the passions, O Forerunner, who submerged in the streams of the Jordan Jesus the Bestower of life, the Torrent of sweetness, that I may glorify thee as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "It is neither an angel nor a mediator who hath saved us, but the Lord Himself, Who came to earth, and for Whom thou didst make the ways straight, O blessed one. Him do thou now entreat, that He show me the path which leadeth to the kingdom.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou hast been shown to be a sanctified temple of God, Who dwelt within thee in a manner past understanding, O Virgin. Him do thou beseech, that He cleanse us of the defilements of sin, that we may be shown to be temples and habitations of the divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Grant us Thy peace, O Son of God ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 5 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.5.irmos"
              },
              "items": [
                {
                  "text": "Thou didst make thine abode in the desert like Elijah of old, O Forerunner of Christ; wherefore, with divine care make steadfast my heart, which hath been laid waste by transgressions, O all-blessed one.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As thou wast an immovable tower and rampart of the faithful, O great forerunner of Christ, show forth my thoughts to be unshaken by the wiles of the deceiver.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With thy voice thou didst announce to the dead the glad tidings of the Light, Who from Light shone forth on the earth, O blessed one, and we who were in darkness were enlightened. Wherefore, enlighten me who am sorely darkened.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Virgin, David proclaimeth thee to be the pure Queen and Virgin; wherefore, I implore thee: Make me an heir to the kingdom of heaven, that I may call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Emulating the prophet Jonah, I cry aloud ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 6 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.6.irmos"
              },
              "items": [
                {
                  "text": "O Baptist who preached repentance on the earth, show me the paths of repentance which lead to the light, and deliver me out of the chasm of falsehood.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O thou who immersed the Abyss of mercy in the streams of the river, dry up the abyss of my passions, giving me a wellspring of tears, O Forerunner and Herald of Christ.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Forerunner of the Lord, save me from sickness of spirit, the passions of the flesh, the perils of life, and all temptations and tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "I earnestly entreat thee, the Mother of God who art good among women: Disdain me not, O pure one, but have pity and keep me untouched by any harm.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "Thy children who were in the furnace ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 7 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.7.irmos"
              },
              "items": [
                {
                  "text": "As thou wast the preeminent and glorious mediator between the old and the new covenants, O Baptist, intercede for me, entreating Jesus, the Renewer of all things, that He restore me who have wholly grown old through sins.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Baptist and Forerunner of Christ, thou didst appear on earth laying down the law of repentance. By thy supplications do thou strengthen all to keep this law, that we may be delivered from the countless evils we ever commit.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Pursuing all mastery, O wise one, thou didst tread the narrow path, being wholly illumined by the breadth of splendid divine visions. And beseeching Christ, grant that we also may de­light therein.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Triadicon: O ye faithful, let us straightway glorify the Trinity, the one Essence: The beginningless Father, the Son and the Spirit: the one reigning Being, the one Dominion, the one Cause, the Life which createth life for us.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Bring thou entreaty unto God, O most pure one, that He overlook our transgressions and boundless sins and free us from the everlasting tormenting fire.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "Him of whom the angels ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 8 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.8.irmos"
              },
              "items": [
                {
                  "text": "I alone have sinned more than others born on earth; I alone have been a breaker of Thy laws, O Lord. Wherefore, for the sake of the Forerunner have pity and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "An angel in a manner of life wast thou revealed to be, O John the Baptist, who preached the angel of great Counsel to the ends of the earth; wherefore, with hymns we glorify thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast unjustly beheaded, O blessed one who immersed the head of Christ in the waters. By thy supplications strengthen all of us, that we may truly crush the pernicious head of the deceiver underfoot.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Deliver me from unseemly sins, fiery retribution, tormenting darkness, the gnashing of teeth, and the worm, O Virgin, thou only intercessor for the race of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                },
                {
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The light-bearing cloud upon whom ...,",
                "tier": 1,
                "src": {
                  "file": "1-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 9 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone1.matins_weekday.tue.canons[0].odes.9.irmos"
              },
              "items": [
                {
                  "text": "Behold, the beacon shining forth upon those in the darkness of life! Behold, the melodiously singing swallow, the harbinger of spring for all, the great Forerunner of Christ, the mediator between the old and the new! By his prayers may we ever be preserved.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I, who have a multitude of sins, now send thee, the friend of the Bridegroom, unto Him as an advocate, and I cry out to thee, O thou who didst baptize Him: Grant that my debts may be repaid, O most blessed one, and light thou the lamp of my soul, which through my carelessness hath utterly gone out.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the incorporeal angels, with the honored apostles, with the sacred passion-bearers, and with the prophets, O Forerunner, ever entreat the supremely good God, that we who are ever enriched by thee, our good intercessor, may receive everlasting good things.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O beauteous swallow, precious nightingale, supremely good dove, turtledove who lovest the wilderness, offspring of the desert, who didst baptize the Lord: Show forth my soul, which hath become barren through unfruitfulness, to bear good deeds as fruit.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Like the throne of the cherubim thou holdest Him Who upholds all things, and thou feedest Him Who feeds us. Him do thou unceasingly entreat, O divinely joyous and pure one, that thy flock may ever be delivered from earthquake, calamity, exile and every need.",
                  "tier": 1,
                  "src": {
                    "file": "1-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "Thou hearest the voice of those who cry out to thee, O blessed one"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone I:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone I:",
        "items": [
          {
            "text": "The next world awaiteth thee, O soul, and the Judge will rebuke thy hidden and evil deeds. Wherefore, tarry not amid the things that are here, but go forth beforetime, crying out to the Judge: Cleanse me, O God, and save me!",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Overlook me not, who am beset by sinful sloth, O my Savior, but lift my mind up to repentance, and show me to be a skillful laborer in Thy vineyard. Grant me the reward of the eleventh hour, and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "The warriors of the great King opposed the edicts of the tyrants, and bravely paying no heed to tortures, trampled underfoot all delusion, and have been crowned as is meet. And they ask of the Savior peace and great mercy for our souls.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Matins, aposticha item 3"
            },
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_matins"
        }
      },
      "aposticha_theotokion": {
        "text": "I have surpassed The harlot, the prodigal, and the thief, * and in transgressions I have excelled the publican and the Ninevites. * Woe is me! What shall I do? * How shall I escape torment, wretch that I am? * O pure one, I fall down before thee: * have compassion upon me according to thy mercy, ** as thy Son hath saved others!",
        "tier": 2,
        "src": {
          "file": "1-3.pdf",
          "locus": "Tuesday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "wed": {
      "sessionals": [
        {
          "rubric": "st After the 1 chanting of the Psalter, the Sessional Hymns of the holy and precious Cross, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "When Thou wast crucified, O Christ, tyranny perished and the power of the enemy was trampled down; for it was neither an angel nor a man, but Thou Thyself, O Lord, Who saved us. Glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "We bow down before the tree of Thy Cross, O Lover of mankind, for Thou wast nailed to it, O Life of all, opening paradise to the thief who came to Thee with faith, and granting food unto him when he confessed Thee, saying: Remember me, O Lord! As Thou didst accept him, so do Thou also accept us who cry: We have all sinned! In Thy tender compassion disdain us not!",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Exalt ye the Lord our God, and worship the footstool of His feet; * for He is holy.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Beholding Thee, the Lamb, crucified on the Cross with two thieves, Thy side pierced by a spear, the Ewe-lamb exclaimed, crying out maternally, O long-suffering Word: “What is this strange and awesome mystery which is ineffa­bly being wrought, O my Jesus? How is it that Thou coverest Thyself with a tomb, O infinite God. Forsake me not who gave Thee birth, O my Son most sweet!”",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 4
              }
            ],
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "Save O Lord, Thy people, and bless Thine inheritance, grant now unto the faithful victory over adversaries, and by Thy power of Thy Cross, do Thou preserve Thy commonwealth.",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Once, the weapon of the Cross appeared to the pious Emperor Constantine as an invincible victory over his enemies, because of his faith; for the adverse powers tremble before it. It was the salvation of the faithful and the boast of Paul.",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Be Thou entreated by the pangs of the saints, which they suffered for Thee, O Lord; and heal all our pangs, we pray Thee, O Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Possessing thine intercession, O most pure one, * and delivered from evils by thy supplications, * protected wholly by the Cross of thy Son, ** we all reverently magnify thee as is meet.",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Matins, sessional set 2 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": "Thy tomb, O Savior",
          "items": [
            {
              "text": "When the sun beheld Thee willingly suspended in the flesh upon the tree of the Cross, in the tender compassion of Thy mercy, O Word, it was unable to bear the blasphemy and hid its rays. Enlighten my darkened soul with Thine unapproachable light, and save me, I pray Thee.",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Compassionate One Who stretched out Thy hands upon the Cross, Thou didst gather together the nations which before were far from Thee, that they might glorify Thy great goodness. Look upon Thine inheritance, and by Thy precious Cross cast down those who wage war against it.",
              "tier": 1,
              "src": {
                "file": "1-4.pdf",
                "locus": "Wednesday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "Upon seeing the Lamb and Shepherd hanging dead upon the Tree, * the unblemished ewe-lamb, cried aloud, weeping * and exclaiming maternally: * “How is it that Thou dost willingly endure abasement and sufferings * which surpass all telling, ** O my Son, and supremely good God?”",
            "tier": 2,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Matins, sessional set 3 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the precious & life-creating Cross, the acrostic whereof is “I am saved by the Cross of the Master Who suffered,” the composition of Joseph, in Tone I",
          "heading_rubric": "Canon of the precious & life-creating Cross, the acrostic whereof is “I am saved by the Cross of the Master Who suffered,” the composition of Joseph, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Having been delivered from bitter slavery, * Israel traversed the impassable as though dry land; * and beholding the enemy drowned, * they chanted unto God as to their Redeemer, * Who worketh wonders with His upraised arm, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Lifted up upon the Cross, O Christ, with Thyself Thou didst raise up fallen mankind and didst cast down all the power of the enemy, O Word. Wherefore, I hymn the sufferings of Thee Who suffered and hast delivered me from the passions.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou art the Lord of glory, O Thou Who hast crowned mankind with glory; and Thou wast crowned with thorns, that Thou mightest make fruitful our thorny nature, O Planter of divine deeds.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The most holy assembly of the saints who suffered lawfully sanctified all creation with the outpouring of their blood and in God the Father abolished the abominable sacrifices offered to the demons.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O most holy martyrs, clouds of tortures did not obscure your patient struggles; wherefore, ye were revealed to be brighter than the beams of the sun, O glorious ones, manifestly emitting rays of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O most pure one, thou wast consumed by the sword of the sufferings of thy Son, for thou didst see pierced by a spear Him Who hath withdrawn the sword which barred the way into paradise, and which forbade divine entry even to the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Let no mortal boast in his wisdom or wealth, * but rather in his faith in the Lord, * crying out to Christ God in an Orthodox manner, * ever chanting: do Thou Establish me O Master, * upon the rock of Thy commandments!",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "The iniquitous made holes in Thy hands and feet, O my Jesus, Who of old ineffably fashioned man by Thy hand, and Who by suffering Thy passion hast freed all from corruption, O Christ God.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "“Let the moon and the sun stand still!” cried Joshua, prefiguring the dimming of the heavenly lights when the Master suffered in the flesh upon the Cross, whereby the evil princes of darkness have been put to shame.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The glorious martyrs earnestly endured wounds; and, wounded, they mightily wounded the serpent Belial. Wherefore, they ever heal the wounds of our souls at the command of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Ye demolished the temples and alters of the demons, O martyrs, and by your courage and pangs most gloriously raised yourselves up through grace as temples in which the Father, the Son and the Holy Spirit dwelt.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Beholding at the time of the Passion Him Who is fair in beauty bereft of comeliness and beauty, thou didst bitterly cry aloud, O pure Virgin, exclaiming: “Woe is me! How is it that Thou sufferest, O my Son, desiring to deliver all from the passions?”",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Of old, Habbakuk heard wondrous report of Thee O Christ, * and cried aloud in fear: * God shall come forth from Theman, * the Holy One from the mountain overshadowed and densely wooded, * to save His anointed ones! * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Stripes and wounds didst Thou endure, O Christ, healing the wounds of our hearts; and tasting bitter gall, Thou didst remove the curse of the sweet taste of corruption; and, nailed to the Tree, thou didst lift the ancient curse.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Uplifted upon the Cross, Thou didst bring nigh the nations who had rejected Thee, and didst reconcile us to the Father, O Long-suffering One; and as Mediator Thou didst set Thyself between us, and in the midst of the earth didst endure a violent death.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Overwhelmed by the sea of your blood, O divinely blessed ones, the noetic Pharaoh and all his armies drowned; wherefore, saved, ye came with joy to the promised land and became citizens of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Given life by the suffering of Christ, the blessed ones were able to withstand all manner of sufferings in their honored flesh; wherefore, they cause the sufferings of souls and bodies to cease for those who ever praise and call them blessed.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Beholding Thee unjustly sacrificed, O Christ, she who gave Thee birth cried out to Thee, lamenting: “O my Son, Thou righteous Judge, how hast Thou been unjustly condemned, desiring to justify those who of old were condemned and stumbled headlong into corruption?”",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Do Thou shine forth O Christ Thy never-waning light * upon the hearts of those who hymn Thee with faith, * granting us peace beyond understanding; * Wherefore by Thy light we flee the night of ignorance * coming unto the day, * glorifying Thee O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Beholding Thee, Who suspended the earth upon the waters, hanging naked on the Tree, O Savior, the sun stripped away its light; and when the stones felt Thee lifted up upon the rock of Golgotha, they split asunder in fear; and the foundations of the earth quaked.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Uplifted upon the Tree, and run through with nails, Thou didst stain Thy fingers with blood, O Long-suffering One; and pierced by a spear in Thy side, Thou didst heal the wound of Adam, which he received when he listened to Eve, his rib, and disobeyed the One Who created her.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The multitude of the martyrs was shown to be paradise, with Christ as the Tree of life in its midst. For enduring a violent death for Him with brave resolve, they slew the serpent with divine power, who through food had brought death upon the first of our race.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With drops of blood ye dried up the abyss of ungodliness, O spiritual athletes of Christ; and with divine outpourings of sacred miracles ye overwhelm the torrents of the passions of soul and body. Wherefore, ye are rightly called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Beholding Christ uplifted of His own will, the immaculate one marveled and cried aloud, weeping: “O my Son and God, though I escaped pain in giving birth unto Thee, I now suffer pangs as Thou art crucified unjustly by the iniquitous!”",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "I am held fast in boundless passions, * and have fallen into the sea- monster of evil; * but do Thou lead me up from corruption O God, * as once Thou didst Jonah, * and by faith grant me dispassion, * that I may offer a noetic sacrifice of praise and salvation * unto Thee.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "When Moses raised up his arms, he provided an image of the Passion of Thee Who stretched out Thy hands on the Tree and destroyed the pernicious dominion of the evil one; wherefore, we hymn Thee, knowing Thee to be our Redeemer and Savior, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Uplifted upon the Tree, Thou didst endure death and didst put to death him who brought death upon us; and having brought life again to the work of Thy hands, O Christ, pierced in the side with a spear Thou didst pour forth remission with both hands, O Thou Who art hymned as having two wills.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Precious in the sight of the Lord hath your memory become, O ye saints, who have honored all by your honored sufferings, and have put to shame Belial, who employeth every wile and every form of torment to cast us all down.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "With all your soul ye surrendered yourselves to multifarious tortures, O all-wise ones, and ye found all the helping aid of Him Who clothed Himself in all humanity. Wherefore, as your members were severed and ye felt the fire, ye rejoiced.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Beholding Thy crucifixion, the most pure one cried aloud: “O my Son, what strange sight is this that I see? How is it that Thou, O Christ, Who healest the sufferings of the sick, dost endure new sufferings? How have Thine enemies rewarded Thee, O Benefactor, for the grace they have received?”",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "Having passed through the unbearable flame of the furnace * as though it were a bridal-chamber, * the children who for the sake of piety, * were revealed as holy * chanted together, singing the hymn: * O God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Though Thou art Master, O my Jesus, a servant smote Thee, for Thou didst desire to free me who am held in thrall by the enemy; and, nailed to the Cross, Thou savest me who chant: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "All creation trembled, O compassionate Lord, when Thou wast crucified; and when Thy side was pierced by a spear, the enemy was wholly wounded; and Thou didst heal wounded Adam, who cried: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Protected by the Cross, the glorious army of passion-bearers destroyed the hordes of the enemy by grace, and received crowns of victory, crying aloud: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having acquired a will stronger than fire, O spiritual athletes, ye were cast into fire but were not consumed, utterly consuming the evil tinder of ungodliness, and crying aloud: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Thine Offspring, O Virgin, most gloriously gave rise unto the ages; and, uplifted upon the Cross, with Himself He raised up the fallen and showed them to be dwellers in heaven, who cry: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "The furnace moist with dew * was an image and prefiguring of a wonder past nature, * burning not the children whom it had received, * so the fire of the Godhead consumed not the Virgin's womb * into which it had descended. * Therefore in song let us sing: * Let the whole creation bless the Lord * and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Of Thine own will Thou wast crucified on the Cross, O Thou Who with Thy hand unfurled the sky; and Thou wast pierced by nails, desiring to set aright the terrible stumbling of first-created Adam. Wherefore, chanting, we sing: Let all creation bless the Lord and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When the hard-hearted assembly lifted Thee, the Rock, up upon the rock of Golgotha, the mountains quaked and the earth shook, O Word of God; but timid souls were made steadfast in divine life, and ever cry: Let all creation bless the Lord and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The holy passion-bearers manifestly wove the vesture of salvation for themselves, suffering patiently in bodily nakedness, and withstanding a heavy onslaught of wounds; wherefore, chanting, they sing: Let all creation bless the Lord and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Though their nails were mercilessly torn out and their members pitilessly severed, though they were subjected to all manner of wounds, the passion-bearers did not offer sacrifice to graven images, but showed themselves to be towers of courage for the faithful, crying: Let all creation bless the Lord and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "“The mindless assembly, desiring to provoke Thee, considered how to remove Thee from the earth. I have become childless and am troubled, and my maternal heart is filled with pain!” she who knew not a man once cried out, as she beheld Thee nailed to the Cross. And with her creation glorifies Thee, the Redeemer of all, O Jesus, throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Ineffable is the mystery of the Virgin: * for she is heaven and the throne of the cherubim, * and hath been revealed as the radiant bridal- chamber * of Christ God Almighty. * Wherefore we piously magnify her as the Theotokos.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "When of old the wise thief beheld Thee, Who unfathomably suspended the earth upon the waters, hanging upon the Tree, O Savior, he cried out to Thee with faith: Remember me! And with him we piously glorify Thy sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Crucified, Thou didst shake the foundations of the earth; and when Thou wast pierced by the spear, Thou didst pour forth drops of immortality: Thy Blood and water; whereby Thou didst cleanse mankind of the passions, O Jesus. Wherefore, chanting, we magnify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The valiant saints rejoiced amid their tortures, encouraging themselves as for something delightful, and crying aloud: “Let us stand firm! Behold! Christ hath opened the contest, and will now bestow wreaths upon those whom He hath loved!”",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The whole united assembly of the faithful is enlightened, honoring the sufferings of all the invincible martyrs and their myriad pangs. For, for their sake they have been granted sweetness and life without pain, and everlasting delight.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The maiden who ineffably gave birth to the Word, the Lover of mankind, beholding Him voluntarily suffering at the hands of men, cried aloud: ‘What is this? God Who is beyond suffering doth undergo suffering, that He might deliver from suffering those who worship Him with faith!”",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "I am saved by the Cross of the Master Who suffered",
          "composer": "Joseph"
        },
        {
          "title": "Another canon of the most holy Theotokos, in Tone I",
          "heading_rubric": "Another canon of the most holy Theotokos, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Grant me streams of spiritual tears, O all-immaculate one who gavest rise to the Wellspring of remission Who washeth away the defilement of sin and bringeth forth my life in humility.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In conceiving God, thou didst become more exalted than creation, O pure one; wherefore, I beseech thee: Raise me up out of the mire of the passions, and lead me up to the divine heights of dispassion.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "On the day of judgment show thyself to be merciful unto me, I pray, O pure one, delivering me from the dreadful standing on the left hand of Christ, and from grievous torment, for I flee beneath thy protection, O most pure Lady.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Raise me up who am beset by the darkness of sin and have fallen, O most pure one, and grant me a shower of tears whereby I may wash away my vile deeds; for thee alone do we have as a helper, O Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O most pure one, thou didst become a temple for Him Who reigneth over all. From the oppression of the soul-destroying thieves rescue me who have become a den for them, and show me to be the pure abode of the divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Send me a shower of tears which drieth up the torrents of my wicked deeds, I pray, O thou who hast given birth to Christ our God, the tranquil deep of loving- kindness, O all-hymned Virgin Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O divinely joyous and most pure Theotokos, be thou for us strength and an unshakable pillar, a shield and invincible sword, repelling the hordes of the noetic foe from us who honor thee with faith and love.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O good one, disdain me not who am sorely diverted from the commandments of God by the lies of the demon; but have pity, I pray, and show me to be immune to his deception, O most pure one, for I flee to thy mercy.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O Christ God Who alone art merciful, through the supplications of her who gave Thee birth have mercy and take pity on those who set their hope on Thee, and guide them to the light of Thy commandments, and grant them life everlasting.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By thy tireless prayers, O most pure one, rouse me who have fallen into the sleep of death, and who, weighted down by the chains of my transgressions, languish in the tomb of despair; and show me the way to repentance, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The torrents of my many transgressions have engulfed me and brought down the temple of my soul, O most pure one; but as thou art the restoration of our first parents, O Theotokos, raise me thy servant up.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Extending thy hand, O Lady, raise me up who am sinking in the mire of the passions, wretch that I am, and am foundering amid the storm of my many offenses; and guide me to the haven of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Grant me cleansing of the defilements of my soul, heal the pangs of my flesh, I pray, and by thy supplications lift the grievous despondency which besets me.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 3"
                  },
                  "label": "plain"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O most pure one, with the spear rend asunder the record of my transgressions, for the sake of Him Who was born of thy seedless womb, and grant that I may be entered in the book of the elect, for I flee to thy divine protection.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Through the supplications of her who gave birth to Thee, cleanse Thy servants, O Christ, in that Thou art good, and send down forgiveness offenses upon them, for Thou art the Savior and Redeemer of all who set their hope on Thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure Virgin who hast given birth to the Bestower of life, by thy supplications bring life now to me who have been slain by the passions, and show me to be victorious over the evil foe; for thee alone do we have as a helper in the sight of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "In that thou hast given birth to the Wellspring of life, O most pure one, with thy life-bearing right hand resurrect my dead soul, and grant that I may cry out in compunction of heart: O supremely praised God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "God Who existeth from before all ages deigned to become the new Adam through thy pure blood. Him do thou now entreat, that He renew me who have grown old, but who cry: O supremely praised God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Descending upon me in wrath, the enemy pitilessly desireth to carry away my lowly soul, O most pure one; but foil his intent, and have pity on me who chant: O praised God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye works of the Lord, * hymn and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Enlighten the eyes of my heart, O pure one who art the portal of the Light, dispelling the deep darkness and cloud of the passions, that I may chant: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O pure, all-immaculate Lady, never cease to pray for all who call upon thee as the Mother of God and cry out: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-hymned Virgin, who hast ineffably given birth to Christ, the Source of salvation, pray for all who fervently cry aloud: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
                "tier": 2,
                "src": {
                  "file": "1-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Take away the heavy burden of mine offenses, O all-hymned Theotokos, and grant that I may bear the yoke of thy Son and God, which is most light, and may tread the path which leadeth to perfection on high.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "I tremble, O all-immaculate one, when I think of the dread day of the coming of Christ; for all my life hath ended in sins, and my soul is full of the passions. But have pity on me, and deliver me then from all damnation.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure Lady, accept the prayers of thine unprofitable servant, and transform the turmoil of my soul and body into profound serenity, that, saved, I may magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            }
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone I:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone I:",
        "items": [
          {
            "text": "We unceasingly hymn Thee as Savior and Master, Who wast nailed to the Tree and hast given us life.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Matins, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "By Thy Cross have angels and mankind been united into one flock, O Christ, and in a single assemblage heaven and earth rejoice, crying: Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Neither tribulation, nor oppression, nor starvation, nor persecution, nor wounds, nor the raging of wild beasts, nor the sword, nor the threatening fire were able to separate you from God, O all-praised martyrs; and ye forgot your own nature, struggling as in others’ bodies, and spurning death out of great love for Him. Wherefore, as is meet ye have received reward for your pangs, and have become inheritors of the kingdom of heaven. Pray ye unceasingly on behalf of our souls.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_matins"
        }
      },
      "aposticha_theotokion": {
        "text": "Standing by Thy Cross, O Word of God, the unblemished Ewe-lamb, Thy Mother, cried out, lamenting: “Woe is me, O my Son! How is it that Thou diest upon the Cross? Woe is me, O my sweet Light! Where now hath the visage of Thy beauty gone, O Thou Who art more comely than all men?”",
        "tier": 1,
        "src": {
          "file": "1-4.pdf",
          "locus": "Wednesday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 4
          }
        ],
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "thu": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, these Sessional Hymns of the holy apostles, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "O most wise fishers of the whole world, having received compassion from God, pray ye now also for us who cry out: Save Thy people, O Lord, and for the sake of the apostles free our souls from the evils which beset us.",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "O ye faithful, in hymns let us honor the all-wise apostles: the melodious trumpets of Christ, the steeds which by grace roil the sea of ungodliness and draw all forth from the abyss unto the divine haven of salvation.",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Their sound hath gone forth into all the earth, * and their words unto the end of the world.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Having acquired Mary the Theotokos as an unassailable bulwark, come, ye faithful, let us bow down and fall prostrate before her; for she hath boldness before Him Who was born of her, and entreateth Him, and saveth our souls from wrath and death.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "Destroying the webs of the rhetors with the net of the word and the reed of the Cross, the fishermen enlightened the nations, that in piety they might glorify Thee, the true God; wherefore, we cry out a hymn unto Thee Who strengthened them: Glory be to the Father and to the Son! Glory be to the Holy Spirit Who is of the same essence! Glory be to Thee Who through them hast enlightened the world!",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Shining forth timelessly, the Light Who is from Light entered time and appeared on earth in the flesh; and through you, O all-blessed ones, He enlightened the earth. Wherefore, illumined by your divine teachings, we honor your sacred memory, O apostles.",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "We all pray to the martyrs of Christ, approaching them with love, for they pray for our salvation, pouring forth the grace of healings and repelling hordes of the demons, in that they kept the Faith.",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 3"
              },
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "The heavens * shall confess Thy wonders, O Lord.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O most holy Virgin, hope of Christians, with the hosts on high do thou unceasingly beseech God to Whom, in a manner surpassing understanding and all telling, thou hast given birth, that He grant forgiveness of all our sins and correction of life unto those who with faith and love ever glorify thee.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "O radiant disciples of the Savior, ye noetic luminaries, having illumined the whole world as with fire, I pray that by your brilliant rays, O most blessed ones, my soul, which is in darkness, may be illumined.",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "O holy hierarch father Nicholas, who dwelt bodily in Myra, thou wast revealed to be anointed noetically with the myrrh of the Spirit, and with thy miracles emitting sweet fragrances, and pouring forth ever-flowing myrrh upon Myra, which is perfumed by thy myrrh-like hymns and thy memory.",
              "tier": 1,
              "src": {
                "file": "1-5.pdf",
                "locus": "Thursday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "The prophets clearly proclaimed thee beforehand as the Mother of God, O maiden. The divine apostles proclaimed thee in the midst of the world, and we have believed on thee. Wherefore, we all right reverently hymn thee and ever call thee the true Theotokos.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy apostles, the composition of Theophanes, in Tone I",
          "heading_rubric": "Canon of the holy apostles, the composition of Theophanes, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Illumined by the divine rays of the effulgence of the threefold Sun, O glorious and radiant apostles, ye truly became gods by adoption; wherefore, as is meet, we honor you with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Ye became faithful ministers of the Word Who in His tender compassion appeared on earth in the coarseness of the flesh, and being fulfillers of all His precepts by faith, O apostles, ye are ever honored.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O ever-blessed ones, with the radiant beams of the most holy Spirit enlighten the whole of me, who am enshrouded in the darkness of sins; and manifestly guide me to the path of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-immaculate Birthgiver of God and Lady, who art the joy of the apostles: In that thou art Mother to Him Who hath divinely spoken in them, pray with them, that He deliver me from the fire of Gehenna.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "God, Who alone is invisible, became visible when He became incarnate; and He chose you as disciples for the whole world, to proclaim His name and surpassing glory, O most blessed, divine apostles.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Against Thee only have I sinned, O Christ, against Thee only have I committed iniquity; and I have defiled my soul with evils. By Thy mercy cleanse and save me, for I have Thy most wise apostles entreating Thee, O Jesus Who alone art readily appeased.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O merciful apostles, deliver me from the bitterness of the defilements of passions and sins, sweetening my thoughts with repentance, in that ye have divine sweetness in your hearts, O all-praised ones.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the immaterial ministers, with all the hosts on high, with the martyrs and the apostles, O Virgin who knew not wedlock, entreat Christ, to Whom thou gavest flesh from thy pure blood, that thy servants may be saved.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Roiling the sea of ungodliness and unbelief by your riding forth like horses, O divinely chosen apostles of Christ, ye drowned the noetic foe and drew those drowning unto salvation.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O apostles, ye receptacles of the divine effulgence of the Spirit, with the light of repentance enlighten my darkened soul, which hath become a receptacle of all manner of passions, O divinely blessed and godly apostles.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O clouds who let fall the water of life, divinely give drink unto my soul, which is desiccated by the drought of the passions, and grant it to produce the grain of salvation and the virtues, O all-praised apostles.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-famed apostles, with the prophets and martyrs, and the Mother of the Redeemer, earnestly pray that we may be delivered from sins, from everlasting torment, from temptations, misfortunes and tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Ye were shown to be mountains giving rise to sweetness and beauteous gladness, O all-glorious apostles, washing away all the bitterness of the enemy and delighting the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Ye understood that Christ had come to His own people as a sojourner, and ye cleaved unto Him sincerely. Wherefore, deliver me from the harm of the alien one, O divine apostles of the Word.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Heal Thou the hidden wounds of my soul through the supplications of those who in a sacred manner preached in the world Thy divine coming, Thy sufferings and rising from the tomb, O Compassionate One.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With all the incorporeal ones entreat God the Word, to Whom thou gavest flesh in a manner past all telling, O Virgin Theotokos, that thy servants may be freed from irrational acts and the carnal passions.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "With noetic nets ye fished for the nations, drawing them forth to the understanding of Him Who doth edify us, O divinely blessed apostles. Him do ye earnestly entreat on behalf of the world.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O lowly soul, O wretched soul, O unrepentant soul: Repent, and cry out unto Christ: I have sinned! By the supplications of Thine apostles cleanse me, O Master Who lovest mankind, in that Thou art supremely good.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 4
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Almighty Christ, Who of old didst pour forth water from a rock for Israel, by the supplications of Thine apostles dispel my gloom and cause me to produce torrents of tears, in that Thou art greatly merciful, that I may hymn and magnify Thy tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Virgin, entreat as our Creator and God, Him Who in His goodness was well-pleased to be born from thee, that He may save from temptations and perils those who ever hope in thee, O most holy one.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The Lord Jesus, the Wellspring of life, left you, His disciples, as rivers imparting the waters of the knowledge of God as drink to the whole world, for ye chant: Praised and supremely glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Bearing in your hearts the noetic Fire, the divine grace of Christ, 0 disciples, ye burned up the tinder of ungodliness; wherefore, utterly consume the flammable passions of me who cry out: Praised and supremely glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Deliver me from fiery torment, O God, through the supplications of Thy glorious dis­ciples; and turn not Thy face away from me, O Lord, for I cry out in repentance: Praised and supremely glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lord, Who wast born of the Virgin Mother of God without corruption, rescue me from corrupting sins and the passions, granting incorruption unto all who chant in hymns: Praised and supremely glorious is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye works of the Lord, * hymn and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The great Sun shone you forth like rays upon the whole world, O apostles, illumining those who sing with faith: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "As reason-endowed shepherds, as sheep of the Shepherd, as lambs of Christ the Lamb, our Redeemer, O apostles who beheld God, unceasingly pray that He deliver me from the noetic wolf and grant me the portion of the saved.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-accursed soul, groan and cry out to the Lord: I have sinned more than any other, and have wickedly committed iniquity! Cleanse and save me as Thou didst the harlot, the publican and the thief, O Compassionate One, through the right acceptable prayers of the apostles.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the angels, the apostles, the martyrs and prophets, O Mother of God, entreat Christ, that He save those who cry aloud: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Ye were shown to be divine and radiant lamps of the Holy Spirit, O blessed ones, and by the splendor of your honorable and most wise preaching ye illumined the whole world, driving away the darkness of the idols.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "As branches of the divine, noetic vine, ye produced the divine grapes which pour forth the wine of salvation, O glorious apostles. Wherefore, deliver me from the drunkenness of pleasures.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I tremble, wretch that I am, when I consider Thy dread judgment, O Christ; for I am now clad in shameful and foul deeds, and am condemned even before trial. Wherefore, through the supplications of Thine apostles have pity on me.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou alone didst deify mankind when thou didst give birth to the incarnate Word. Him do thou entreat with the apostles and martyrs, O most pure and all-immaculate Virgin, on behalf of us who bless and honor thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "composer": "Theophanes"
        },
        {
          "title": "Another canon, of our father among the saints Nicholas the wonderworker, the acrostic whereof is “Unto thee, O Nicholas, do I offer a first hymn,” the composition of Joseph, in Tone I",
          "heading_rubric": "Another canon, of our father among the saints Nicholas the wonderworker, the acrostic whereof is “Unto thee, O Nicholas, do I offer a first hymn,” the composition of Joseph, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us all chant a triumphant hymn unto God * Who wrought wondrous miracles * with His upraised arm, * and saved Israel, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Adorned with crowns of righteousness, and standing before the throne of grace, O Nicholas, by thy supplications ever save those who in hymns now crown thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-blessed Nicholas, who hast been granted the grace of healings, by thy supplications heal the wounds of my soul, and deliver me from the temptations which beset me, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By thy mighty supplication, O Nicholas, heal my soul, which is wholly paralyzed by my transgressions, and deliver me from the cruelties of life, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With thy light dispel the gloom from my mind, O all-immaculate one, and deliver me from everlasting darkness, that I may ever hymn thy mighty works.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Let my heart be established in Thy will O Christ God, * Who hath established a second heaven over the waters, * and founded the earth upon the waters, * O all-powerful One.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O wise Nicholas, adornment of high priests, sweet savor of the divine Spirit: By thy prayers, redolent of myrrh, drive away the fetid passions from my heart, I pray thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I have reached the end of my life in slothfulness, wretch that I am, and fear thy dread tribunal, O Christ. Put me not to shame, but be Thou entreated by the sacred mediations of Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O holy hierarch Nicholas our father, who art adorned with divine grace, from divers temptations and misfortunes save those who ever flee to thy protection, O all-blessed one.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Deliver me from all perils, from the many temptations of the serpent, and from everlasting fire and darkness, O all-immaculate one, who for us hast given birth to the never- waning Light.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Foreseeing in the Spirit O prophet Habbakuk, * the incarnation of the Word, * thou didst proclaim, crying aloud: * When the years draw nigh, Thou shalt be known; * when the season cometh, Thou shalt be shown forth! * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "As the fulfiller of all the precepts of God, O holy hierarch Nicholas our father, by thy supplications enable us on earth to keep the laws which lead to salvation; and deliver us from all the temptations which assail us.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having finished thy course for Christ in holiness, direct thou our ways unto Him, O God­bearing father Nicholas, that, having escaped from wandering in trackless wastes, we may attain unto thy saving protection.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most wise father Nicholas, who set at naught all the wiles of the enemy, through thy divine watchfulness fill all of us with grace who keep vigil, hymn God, and set thee before Him as an advocate.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enlightened in mind by the Spirit of God, the prophet described thee beforehand, O pure one, as the mountain overshadowed. By grace and thy right acceptable mediations, O Theotokos, cool now those who are burning up with the heat of many transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Shine forth thy radiant and everlasting light * upon us who rise early at dawn, * unto the judgments of Thy commandments, * O Master, Lover of mankind, * Christ our God.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Planted in the courts of the Lord, O holy hierarch Nicholas our father, like a fruitful olive-tree, by grace thou now anointest the faces of all with the oil of thy labors.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Make entreaty now on behalf of thy servants, O father Nicholas, that we may receive remission offenses and may be delivered from the tribulations which surround us and from all oppression.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thee do we beseech, O Nicholas, our good mediator before the Lord: Leave us not without help, O holy one, but save us by the prayers, that thou art wont to make.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O maiden full of the grace of God, splendid temple of Christ: By thy prayers to the Father, the Son and the Spirit, make temples of us who accomplish holy things.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Emulating the prophet Jonah, I cry aloud: * Free Thou my life from corruption, O good One; * and save me who crieth out: * O Savior of the world, Glory be to Thee!",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ, possessing a multitude of compassions, through the supplications of Nicholas dispel the multitude of mine evils, and ever guide my life, which is battered by waves of sin.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou hast trampled mightily the enemy underfoot, O wise Nicholas. By thy prayers strengthen us also to crush him, for we have been enriched by thy divine intercession.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Nicholas, who wast the true primate of the people of Myra, perfume the senses of our souls, and ever drive away the fetid passions which war against us.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Christ hath accomplished mighty works in thee, O pure one. Him do thou ever beseech, that He magnify in us His rich mercy, O thou who art full of the grace of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "Thy children who were in the furnace O Savior, * were neither touched nor troubled by The fire. * Whereupon the three sang, as with a single mouth * Thy praises and blessed Thee, saying: * 'O God of our fathers, Blessed art Thou.'",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "By thy loving supplication, O wise Nicholas, keep the feet of my soul from stumbling, setting them firmly upon the rock of God’s all-radiant commandments, and keeping me un­affected by the pernicious wiles of the enemy, the author of evil.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ask for us release from our many sins, from the snares of life and necessity, and from all the temptations which assail us, O sacred Nicholas, helper of all the faithful and foundation of holy hierarchs.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I am the wicked servant who hid the talent which I right readily received to invest, and I fear the coming trial. But through the supplications of the holy Nicholas, may God, the Judge of all, not condemn me there.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thee, O all-holy, most holy one, do we, thy servants, ever beseech, day and night, with contrite mind, asking that deliverance from our sins be granted us through thy supplications, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Standing on the mountain of the godly virtues, by the showing forth of exalted miracles thou didst become known unto the ends of the earth, O Nicholas; wherefore, every tongue honoreth thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having tasted of divine sweetness, O venerable one, thou didst hate the bitterness of passions and pleasures. Deliver us from them, entreating Christ to put down the misfortunes that assail us.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As the unshakable pillar and confirmation of the faithful, O all-blessed Nicholas, by thy supplications strengthen me who am ever shaken by the evils of life and the inspirations of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure one who hast given birth to the Physician of all, cure thou the passions of my heart, and, entreating Christ, O Virgin, show me to share in the lot of the righteous.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                },
                {
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The light-bearing cloud upon whom * the beginningless Master of all descended from heaven, * like the dew upon the fleece, * and of whom He was incarnate, * becoming a man for our sake, * let us all magnify as the pure Mother of God.",
                "tier": 2,
                "src": {
                  "file": "1-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "With sacred hymns, O father, we praise thee as a holy hierarch of Christ, the radiant star, the performer of miracles, the well-spring of healings, the helper of those amid sorrows, the most fervent deliverer of those who call upon thee in troubles.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "We earnestly beseech thee, O Nicholas, the great shepherd and emulator of Christ, the Chief Shepherd, in all things: From the sacred heights shepherd thy servants, and deliver them ever from all the perils of life.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The end is already nigh! Wherefore art thou slothful, O my soul? Why dost thou not strive to live a life pleasing unto God? Hasten thou, and arise henceforth, and cry aloud: Have mercy upon me, O Lover of mankind, directing my life through the supplications of Nicholas, in that Thou art good!",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-immaculate one, who hast given birth to the divine Light, enlighten me who am darkened by all the assaults of the evil one, for I dwell in despondency, and anger God; and guide me to good works, in that thou art the cause of all good things.",
                  "tier": 1,
                  "src": {
                    "file": "1-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "Unto thee, O Nicholas, do I offer a first hymn",
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the apostles, in Tone I:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the apostles, in Tone I:",
        "items": [
          {
            "text": "O glorious apostles, who enlightened the whole world, ever entreat God, that our souls may be saved.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Together let us praise Peter and Paul, Luke and Matthew, Mark and John, Andrew and Thomas, Bartholomew and Simon the Canaanite, James and Philip; and let us laud the whole choir of the disciples, as is meet.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Matins, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "Rejoice in the Lord, O ye martyrs, for ye fought the good fight: ye opposed emperors and vanquished tyrants; ye were not daunted by fire and the sword, nor by the wild beasts who devoured your bodies, but, sending up hymnody to Christ with the angels, ye received crowns from heaven. Ask that He grant peace to the world and great mercy to our souls.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.thursday_matins_as_printed"
        }
      },
      "aposticha_theotokion": {
        "text": "Rejoice, O Virgin Theotokos! Rejoice, boast of the whole world! Rejoice, O most pure and blessed Mother of God!",
        "tier": 1,
        "src": {
          "file": "1-5.pdf",
          "locus": "Thursday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "fri": {
      "sessionals": [
        {
          "rubric": "st After the 1 chanting of the Psalter, these Sessional Hymns of the holy and precious Cross, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "When Thou wast crucified, O Christ, tyranny perished and the power of the enemy was trampled down; for it was neither an angel nor a man, but Thou Thyself, O Lord, Who saved us. Glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "We bow down before the tree of Thy Cross, O Lover of mankind, for Thou wast nailed to it, O Life of all, opening paradise to the thief who came to Thee with faith, and granting food unto him when he confessed Thee, saying: Remember me, O Lord! As Thou didst accept him, so do Thou also accept us who cry aloud: We have all sinned! In Thy loving-kindness disdain us not!",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Exalt ye the Lord our God, and worship the footstool of His feet; * for He is holy.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Upon seeing the Lamb and Shepherd hanging dead upon the Tree, * the unblemished ewe-lamb, cried aloud, weeping * and exclaiming maternally: * “How is it that Thou dost willingly endure abasement and sufferings * which surpass all telling, ** O my Son, and supremely good God?”",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Matins, sessional set 1 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns of the holy and precious Cross, In Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "Once, the weapon of the Cross was revealed to the pious Emperor Constantine as an invincible victory over his enemies, because of his faith; for the adverse powers tremble before it. It was the salvation of the faithful and the boast of Paul.",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "O Compassionate One Who of old fashioned Adam from dust, a hand of clay smote Thee, and Thou didst endure crucifixion, mockery and wounding. O the wonder! O Thy great long-suffering! Glory, O Lord, to Thy life-bearing sufferings, whereby Thou hast saved us!",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 4
                }
              ],
              "label": "plain"
            },
            {
              "text": "Invested by Thee with the boast of suffering and the crown of honor, O Lord, the glorious passion-bearers patiently endured the wounds inflicted by the iniquitous, and with divine power received victory from the heavens. By their supplications free us also from the invisible foe, O Savior, and save us.",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Beholding Thee stretched out dead upon the Cross, O Christ, Thy all-immaculate Mother cried aloud: “O my Son, Who with the Father and the Spirit, art beginningless, what is this ineffable dispensation, wherewith Thou hast saved the work of Thy most pure hands, O Compassionate One?”",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Matins, sessional set 2 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns of the holy and precious Cross; in Tone I:",
          "spec_mel": "Thy tomb, O Savior",
          "items": [
            {
              "text": "When the sun beheld Thee suspended in the flesh of Thine own will upon the tree of the Cross in the tender compassion of Thy mercy, O Word, unable to abide the blasphemy, it hid its rays. Enlighten my darkened soul with Thine unapproachable light, and save me, I pray Thee.",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Thou wast willingly nailed to the Cross, O Compassionate One, deifying our corrupted essence, and killing the serpent, the slayer of mankind. By Thy precious Cross establish Orthodoxy in peace, and put down the uprisings of heretics.",
              "tier": 1,
              "src": {
                "file": "1-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "Having acquired thine aid, O most pure one, by thy supplications we are delivered from misfortunes; for, preserved everywhere by the Cross of thy Son, we all piously magnify thee as is meet.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the precious & life-creating Cross, the acrostic whereof is “I praise the honorable Passion of the Master,” the composition of Joseph, in Tone I",
          "heading_rubric": "Canon of the precious & life-creating Cross, the acrostic whereof is “I praise the honorable Passion of the Master,” the composition of Joseph, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us sing a triumphant hymn unto God, * who came to Moses’ aid in Egypt, * and drowned Pharaoh with all his host: * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Word Who art dispassionate by nature, yet didst endure sufferings for our sake and wast crucified with thieves, Thou didst slay the serpent, the author of evil, saving those who worship Thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Though Thou art the dawning of the East, O Jesus, Thou didst come to the parts of the West, our rejected nature; and the sun, seeing Thee crucified, hid its light.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Trading well a temporal death for life everlasting, O glorious spiritual athletes, ye were deemed worthy of the kingdom of heaven; wherefore, ye are glorified and called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O ye who valiantly emulated the sufferings of Christ, ye cure the sufferings of those on earth with a mystic therapy, O holy martyrs, and drive away evil spirits by your words.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "When the Ewe-lamb beheld Christ the Lamb lifted up upon the Cross, she exclaimed, crying aloud: “Whither hath Thy beauty set, O long- suffering Son Who art without beginning?”",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Let my heart be established in Thy will O Christ God, * Who hath established a second heaven over the waters, * and founded the earth upon the waters, * O all-powerful One.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst stretch out Thy hands upon the Cross, staining Thy divine fingers with blood, and delivering Adam, the work of Thy hands, O Master, from the hands of the slayer, in that Thou alone art good and the Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast lifted up upon the Tree and wast pierced in the side by a spear, O Master, setting aright the fall caused by Eve, Adam’s rib, whom of old misfortune befell through the fruit of the tree; and thou didst lead them into paradise with the honest thief.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With pure minds and chanting let us hymn the martyrs of the Lord: the confirmation of the Church, the rampart and towers of piety, the destroyers of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "As divine branches of the noetic Vine, the martyrs manifestly produced for us the grapes which pour forth the wine which gladdeneth the hearts of all the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Through His Cross, the blessed Fruit of thy womb O all-hymned Virgin, hath made those corrupted by the fruit of the tree partakers of incorruption, for the sake of His Cross.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "I have heard report of Thee, O Lord * and I am afraid. * Having understood Thy works, * I have glorified Thy might, * thus said the prophet.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Though Thou art the righteous Bestower of the law, Thou wast reckoned among the lawless, and wast lifted up upon the Tree, desiring to justify all, O Lord our Benefactor.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "All the angelic hosts marveled, beholding Thee, the Sun, uplifted upon the Cross; and the hordes of the prince of darkness were vanquished.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having drawn forth the grace of healings from the gifts of the Spirit, by the grace of God the martyrs wash away soul-corrupting passions for all.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having shaken off the slumber of indifference, with godly vigilance and faith the passion-bearers tamed the savagery of the wild beasts and suffered, rejoicing.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "“Woe is me, O my Child! What shall I do? How can I bear to see Thee, Who givest life, suspended upon the Tree, unjustly put to death?” said the Virgin, weeping.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Shine forth thy radiant and everlasting light * upon us who rise early at dawn, * unto the judgments of Thy commandments, * O Master, Lover of mankind, * Christ our God.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Uplifted upon the Cross in the flesh, Thou didst call to the knowledge of Thee the nations who knew Thee not, O Judge of all, O only merciful Christ our God.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When Thou didst stand before the unjust tribunal, O righteous Lord, Adam, who before was condemned, was justified; and he crieth out: Glory to Thy crucifixion, O long-suffering Lord!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye were shown to be like a divinely planted garden of paradise, O martyrs, having your honored sufferings as fragrant flowers, whereby the soul of each of the faithful is filled with sweet fragrance.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Let us hymn the martyrs of the Lord, the blossom-laden and right fruitful trees which put forth the fruit of faith in immortality, and pulled up the roots of evil.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "When the precious rod who produced the never-fading Bloom beheld Him uplifted upon the Tree, she cried: “O Master, leave me not childless!”",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Thou didst save the prophet from the sea monster, O Lover of mankind; * lead me up also I pray, * from the abyss of transgressions.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ Who dost surpass all honor, lifted up upon the Cross Thou didst endure dishonor, desiring to honor mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O supremely good Christ our God, Who wast beaten with a reed, Thou hast signed an emancipation edict for me who have been enslaved to delusion.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Through painful sufferings ye passed over to the end which is devoid of pain, O holy ones, and have been deemed worthy of ineffable joy.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Ye were set afire by the burning coals of the love of Christ, O most wise ones; wherefore, cast into the fire ye remained unconsumed.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "After giving birth, O all-immaculate one, thou didst remain as thou wast before birthgiving; for thou hast given birth unto God Who saved mankind by the Tree.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "The furnace became bedewed, O Savior, * and the children dancing, chanted: * O God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "When Thou wast crucified, Thou didst shake creation; and when Thou didst die, Thou didst slay the serpent. Blessed art Thou, O Christ, God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou didst taste gall, O Long-suffering One, pouring forth the sweetness of salvation upon me who was deprived of the food of paradise through pleasurable eating.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having their nails torn out, and having set aside the coarseness of mortality, the martyrs received divine beauty from God.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Emulating the most pure sufferings of Christ by your own sufferings, O valiant martyrs, ye easily bore the wounds inflicted by the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Seeing Thee, the Lord, crucified, the immaculate Theotokos said: “Woe is me, O my Son! How is it that Thou diest, O Life and Hope of the faithful?”",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "Unto Christ who saved the children * that sang His praises * and who bedewed the raging furnace, * let us hymn and supremely exalt throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "When Thou wast nailed to the Cross, O Savior, creation was shaken, the sun stopped its shining, and the rocks split asunder; and Hades was soon emptied, unable to withstand Thy might.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Compassionate One, Thou didst hang naked on the Tree, suffering condemnation for the condemnation of him who was cast out, receiving nakedness. Great is Thy might and long-suffering!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Armed with the Cross as with a breast-plate, the warriors of Christ, who dwell with the incorporeal ones, arrayed themselves against the adversary and trampled him beneath their beautiful feet.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Their members broken, the valiant ones stood with hammers in the midst of the tribunal, demolishing the edifice of deception and razing the temples of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Beholding Him Who alone is most high uplifted upon the Tree and putting down the uprisings of the enemy, she who is more exalted than the heavens hymned Him aloud.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Moses saw thee as the bush * unconsumed by fire, * and Jacob beheld thee as the living ladder * and the gate of heaven, * through which Christ our God hath passed. * In our hymns, O pure Mother, thee do we magnify.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O how the disobedient people gave over to the Cross Thee, the only Long- suffering One, Who didst willingly impoverish Thyself, accepted sufferings, and by dispassion became a Mediator for all who had stumbled, from Adam on.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thou didst undergo a shameful crucifixion in the flesh, O Christ, desiring to honor man who was dishonored by irrational passions and had marred his ancient beauty. Glory be to Thy tender compassion, which transcendeth understanding!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "To the light of Thine ineffable glory and radiance didst Thou guide those who rose at dawn unto Thee, and who, led by Thy hand, traversed the darkness of sufferings, O Christ, Thou never-setting Sun. Wherefore, by their supplications enlighten us.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The company of the sacred martyrs vanquished the myriads of the noetic foe; they enrolled among the myriads of the holy powers, and at the command of the Creator of all ever heal the myriad passions of our souls.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With the light of the Light Who shone forth from thee in the flesh, O Virgin, illumine my mind and enlighten my heart, driving away the darkness of sin and dispelling all the gloom of my despondency.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "I praise the honorable Passion of the Master",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos, in Tone I",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us all chant a triumphant hymn unto God * Who wrought wondrous miracles * with His upraised arm, * and saved Israel, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "In that thou hast given birth in time to the only timeless God, Who became incarnate, O all-holy and most pure one, heal thou the chronic passions of mine all-accursed soul.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As thou art merciful, O most pure one, by thy supplications do away with the wounds of my soul, the perversity of my heart, the darkening of my thoughts and the turning away of my mind.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure one, who hast given birth to the Light, my Redeemer, deliver me from everlasting torments, that, saved, I may hymn thy tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I am engulfed in the abyss of evils and the tumult of the passions, yet I call upon thy tranquility, O most pure one: Save me, for thou art the haven of the faithful!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Let my heart be established in Thy will O Christ God, * Who hath established a second heaven over the waters, * and founded the earth upon the waters, * O all-powerful One.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Do away with all the barrenness of mine unfruitful thoughts, and show my soul to be fruitful through the virtues, O most pure Theotokos, helper of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-immaculate one who hast given birth to the paternal Light, deliver me from every evil circumstance, from the many temptations of the serpent, and from eternal fire and darkness.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Wholly condemned am I by the dread tribunal, the unquenchable fire and the stern sentence, O most pure one. Hasten thou, O most pure Lady, to save me, thy servant.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "To deify mankind, God became a man through thee, in a manner past all telling and understanding, O pure Virgin; wherefore, all of us the faithful together call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Foreseeing in the Spirit O prophet Habbakuk, * the incarnation of the Word, * thou didst proclaim, crying aloud: * When the years draw nigh, Thou shalt be known; * when the season cometh, Thou shalt be shown forth! * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O Virgin Theotokos, thou undefiled tabernacle, by thy compassions, as with outpourings of great purity, cleanse me who am defiled by transgressions, and grant me a helping-hand, that I may cry: Glory to thee, O pure Bride of God!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast shown to be a temple dedicated to God Who made His abode within thee in a manner transcending understanding. Him do thou entreat, that He cleanse us of the defilements of sin, that we may be known to be the temples and habitations of the Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Have mercy on me, O Theotokos, who alone hast given birth to the Wellspring of mercies; and do away with the grievous illness of my soul and the perplexity of my heart. Before the end grant me compunction, a stream of tears, and deliverance from evils.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O holy Theotokos who hast given birth to the Most Holy One in the flesh, sanctify us, that we may emulate Him Whose desire it was to become like men; and by thy supplications show us all to share in the kingdom of heaven, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Grant us Thy peace, O Son of God, * for we know no other God than Thee, * and we call upon Thy Name, * for Thou art the God of the living and the dead.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The wicked tasting in Eden once made me subject to mortality, but do thou, O most pure one who hast given birth unto Life, enliven me now who of old was slain by the tree, and grant me compunction.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Save me from cruel misfortunes, O most pure one, raise me up out of the mire of the passions, and deliver me, Thine useless servant, from the captivity and oppression of the evil demons.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enlighten the eyes of my soul, that I may ever gaze upon thy divine radiance and glory, O pure and all-immaculate one, and may receive mercy and everlasting glory.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O pure Virgin Mother, we know thee to be the cloud and garden of paradise, the portal of the Light, the table, the fleece, the jar containing manna, the sweetness of the world.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Emulating the prophet Jonah, I cry aloud: * Free Thou my life from corruption, O good One; * and save me who crieth out: * O Savior of the world, Glory be to Thee!",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "I pray to thee, the only good one, the undefiled tabernacle: By your mediation wash away all defilement from me who have been defiled by many sins.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Be thou a guide for me who am tossed about on the deep of evils by the needs of life, O pure one; steer me to the true harbor, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Threefold billows of wicked thoughts, assaults of the passions and the abyss of sin overwhelm my wretched soul. Help me, O holy Lady!",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Mary, thou sacred tabernacle which hath been revealed, sanctify my wretched soul, which hath been defiled by pleasures.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "When Thy children were in the furnace O savior, * and remained untouched by the flame, * with one voice the three chanted * and blessed Thee saying: * O God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Sanctify my soul, which hath been defiled by the passions, O most pure Bride of God, and quickly bring an end to the grievous captivity of my mind, the perplexity of my heart and the onslaughts of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enliven my mind, which hath been driven to death by carnal passions, O all- immaculate one, and strengthen me to do works pleasing unto God, that I may magnify thee and ever glorify thy compassion.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Virgin Mother, who alone hast given birth unto God, mortify my carnal pleasures and quickly remove the defilement of my soul. Deliver me from the inquisition of the demons, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Arrayed in godly virtues, thou hast given birth to the Word Who with the Father is equally without beginning, and Who hath truly covered the heavens with virtues, O pure Virgin. Him do thou ever entreat, that He have pity on us.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "In a godly manner He Who is incorporeal became incarnate from thee. Him do thou beseech, O most pure one, that He slay my carnal passions and give life to my soul, which hath been slain by my sins.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure one, thou hast given birth to God the Savior, Who healeth the contrition of Adam, who had been fashioned from dust. Him do thou entreat, that He heal the incurably painful wounds of my soul.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Raise me up who lie in the depths of evils, vanquish now him who wageth war against me, O pure one, and disdain not my soul, which hath been wounded by unseemly pleasures. Have pity, O most pure one, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By thy vigilant prayers unto God we, who know thee to be the blessed and joyous Theotokos, are delivered from all manner of temptations, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The light-bearing cloud upon whom * the beginningless Master of all descended from heaven, * like the dew upon the fleece, * and of whom He was incarnate, * becoming a man for our sake, * let us all magnify as the pure Mother of God.",
                "tier": 2,
                "src": {
                  "file": "1-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Loving sin, I abide in slothfulness, O pure one, and I tremble before the inescapable tribunal. Keep me uncondemned thereat by thy holy supplications, O most pure Bride of God, that I may bless thee as mine intercessor.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I am terrified of the tribunal and the unforgettable eye of thy Son, O Virgin, for I have committed many sins on earth; wherefore, I cry unto thee: O most loving Lady, help me, deliver me from tribulations then, O pure one, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "How terrible is the day of trial, O maiden! How horrible the sentence! How bitter the misfortune! How can I endure more, O most pure Lady? Have mercy upon my passion-fraught soul, and before the end grant me remission, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O thou who hast given birth to the divine Light Who shone forth from the Father, have pity on my soul, which hath been darkened by the deceptions of life and hath become an object of the mockery of the demons, O all-immaculate one; and grant unto me the light of saving repentance, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "plain"
                }
              ]
            }
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone I:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone I:",
        "items": [
          {
            "text": "We unceasingly hymn Thee as Savior and Master, Who wast nailed to the Tree and hast given us life.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Matins, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "By Thy Cross have angels and mortals been united into one flock, O Christ, and in a single assemblage heaven and earth rejoice, crying: Glory to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "O ye people, come, let us all honor the passion-bearers of Christ with hymns and spiritual songs: the luminaries of the world, the preachers of the Faith, the ever-flowing wellsprings from whence healings pour forth upon all peoples. By their supplications, O Christ our God, grant peace to Thy world and great mercy to our souls.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_matins"
        }
      },
      "aposticha_theotokion": {
        "text": "When she beheld the Lamb upon the Cross * bereft of form and beauty, * the all-immaculate ewe-lamb and Lady * said weeping: “Woe is me! * Where hath Thy comeliness gone, O Thou Who art most sweet? * Where is the shining grace * of Thine image, ** O my Son most beloved?”",
        "tier": 2,
        "src": {
          "file": "1-6.pdf",
          "locus": "Friday Matins, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic), in spec_mel",
            "to": "O",
            "count": 1
          }
        ],
        "spec_mel": "O all-praised martyrs",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "sat": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns of the holy martyrs, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Lord, the glorious passion-bearers were invested by Thee with the boast of suffering and the dignity of crowns; for by enduring wounds they vanquished the iniquitous, and by divine power they received victory from heaven. Through their supplications free me also from the invisible foe, O Savior, and save me.",
              "tier": 1,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "As valiant warriors, believing with oneness of mind, ye were undaunted by the threats of the tyrants, O holy ones. Eagerly coming to Christ, and taking up the precious Cross, ye finished the race and received victory from heaven. Glory be to Him Who strengthened you! Glory be to Him Who crowned you! Glory be to Him Who through you worketh healings for all!",
              "tier": 1,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "In a place of light, among the choir of the righteous, do Thou grant rest unto those who have passed over to Thee, O Savior; for they placed their trust in Thee, O Lover of mankind. Accept our supplication for our fathers and children, whose memory we keep, and grant them justification, in that Thou art abundantly merciful.",
              "tier": 1,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                },
                {
                  "from": "U+041E O (Cyrillic), in spec_mel",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "for_the_reposed",
              "spec_mel": "Thy tomb, O Savior"
            }
          ],
          "verses": [
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 1"
              }
            },
            {
              "text": "Their souls * shall dwell among good things.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 2"
              }
            }
          ],
          "closer": {
            "text": "When Gabriel announced to thee, “Rejoice!”, O Virgin, * the Master of all became incarnate within thee, the holy tabernacle, * at his cry, as the righteous David said. Thou wast shown to be more spacious than the heavens, * having borne thy Creator. * Glory be to Him Who made His abode within thee! * Glory be to Him Who came forth from thee! ** Glory be to Him Who hath set us free by thy birthgiving.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone I:",
          "spec_mel": null,
          "items": [
            {
              "text": "Accept in supplication, O Lord and Lover of mankind, the sufferings that the saints endured for Thee; and, we beseech Thee, heal all our suffering.",
              "tier": 1,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Let us all pray to the martyrs of Christ, for they intercede for our salvation. Let us all draw near to them with love, for they pour forth the grace of healing, and as guardians of the faith they drive away the hosts of demons.",
              "tier": 1,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Abolishing the dominion of death, O Christ, Thou didst pour forth incorruption upon mortals; for those who believe on Thee do not die, but abide continually in Thee. Wherefore, grant rest to the souls of Thy servants, O Lord, and number them among Thy saints, granting them forgiveness and resur- rection by the prayers of the Theotokos.",
              "tier": 1,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "for_the_reposed"
            }
          ],
          "verses": [
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
              "tier": 2,
              "src": {
                "file": "1-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "O Virgin Theotokos, who alone art the mighty and fervent intercessor for the human race, with the prophets, martyrs and holy hierarchs, the fasters and the venerable, unceasingly entreat God the Word, to Whom thou hast given birth in a manner transcending nature, that He save us all.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy martyrs, hierarchs, the venerable, and the departed, the acrostic whereof is “I sing a divine hymn unto those beloved, of God,” the composition of Joseph, in Tone I",
          "heading_rubric": "Canon of the holy martyrs, hierarchs, the venerable, and the departed, the acrostic whereof is “I sing a divine hymn unto those beloved, of God,” the composition of Joseph, in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Guiding Israel with a pillar of fire and cloud, * as God He divided the sea * and engulfed the chariots of Pharaoh in the deep. * Let us chant a hymn of victory, * for He alone hath been glorified!",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Protected by the shield of piety, the godly spiritual athletes went forth to do battle; and they destroyed all the power of the enemy, chanting a hymn of victory unto Christ, Who strengthened them.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Ye tended the flock of God on the mystical pasture, O divine shepherds, driving away the wolves with the staff of your sacred words; and ye made your abode, rejoicing, in the fold of heaven, where the great Shepherd is.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O ye who by fasting and pangs mortified the flesh, at the behest of God ye live even after death, O venerable ones. Ever entreat Christ, Who died for our souls, that He have compassion upon us.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When Thou didst die, Thou gavest unto the dead Thy divine and immortal life. Give those who with faith have passed from this corrupt life a share in Thy kingdom, in that Thou art compassionate and alone art greatly merciful.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "for_the_reposed"
                },
                {
                  "text": "The martyrs who were wounded with the love of Christ, the women who were crowned by God, and all the venerable honor thee, who art good and all-immaculate among women, as the all-honored Queen; and they rejoice with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Let my heart be established in Thy will O Christ God, * Who hath established a second heaven over the waters, * and founded the earth upon the waters, * O all-powerful One.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Having endured many torments, ye have been deemed worthy of many good things, O sacred multitude of martyrs; wherefore, by your supplications cleanse me of the incalculable multitude of mine evils.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The sacred ones, having been clothed in the grace of righteousness, and the council of the venerable, having acquired gladness and beauty, made themselves like unto the immaterial ministers.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O ye prophets of Christ, ye divine martyrs, ye company of sacred women who suffered manfully, ye have been glorified in asceticism. By their supplications, O Savior, grant Thy mercies unto all.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Christ Who of Thine own will and with Thine own hand fashioned man out of the earth, grant the good things of heaven unto all Thy servants who have departed from us with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "O Birthgiver of God who knewest not wedlock, bear the petitions of all unto God our Creator, Who was born from thy womb, that we may obtain complete deliverance from our evils.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "I have heard report of Thee, O Lord * and I am afraid. * Having understood Thy works, * I have glorified Thy might, * thus said the prophet.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O martyrs who withstood every wound with valiant resolve, ye brought yourselves as un­blemished lambs unto Christ, the Life Who was sacrificed for all.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Taught by the word of God, the holy hierarchs became divine mouths, and delivered men’s souls from the mouth of the deceiver. And we honor them with pious intent.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Mighty in the divine Spirit, O godly fathers, by grace ye mightily vanquished the spirits of evil, O venerable ones.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having willingly died upon the Tree, O Lover of mankind, grant life everlasting unto those who have passed on to Thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "The choir of women who suffered manfully did not deny the Lord, nor were the saints overwhelmed by the pleasures of the body, for they had thee as an ally, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Shine forth thy radiant and everlasting light * upon us who rise early at dawn, * unto the judgments of Thy commandments, * O Master, Lover of mankind, * Christ our God.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Armed with piety, ye were revealed to be un-wounded by the arrows of the foe, O martyrs, and having become victors through grace, ye have received crowns.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The Lord hath anointed with divine oil His priests who have shepherded multitudes of the faithful in holiness and have led them to the fold of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O most sacred hieromartyrs, all ye venerable, who kept the laws of the Spirit and came to share in the kingdom, ye have been divinely glorified.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Master and Lord, unto those whom Thou hast taken to Thyself at Thy command, grant Thy kingdom with the saints, overlooking their ancient offenses.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "The women who found glory through asceticism and suffering destroyed the dominion of the serpent, having thee as an intercessor, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Emulating the prophet Jonah, I cry aloud: * Free Thou my life from corruption, O good One; * and save me who crieth out: * O Savior of the world, Glory be to Thee!",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Slain through the infliction of many wounds, ye have inherited true life together, praying that all of us may be saved, O holy martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Known on earth as radiant morning-stars, ye illumined the faithful with the light of piety, O most glorious sword-bearers of Christ, ye most wise and holy hierarchs.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye were shown to be sojourners on the earth and citizens of heaven, O God- bearing fasters, who mortified carnal-mindedness by asceticism and humility.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lover of mankind, show forth the faithful, whom Thou hast taken to Thyself, as sharers in Thy never-waning light and in true delight; and reckon them among the council of the saints.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "Those who suffered mightily and fasted ardently have been led to Christ, the King of all by thee, in thy entourage, as saith the psalm, O all-hymned Birthgiver of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "Thy children who were in the furnace O Savior, * were neither touched nor troubled by The fire. * Whereupon the three sang, as with a single mouth * Thy praises and blessed Thee, saying: * 'O God of our fathers, Blessed art Thou.'",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Tried by all manner of tortures like gold in the fire, in the love of God the martyrs were shown to be more lustrous than any gold, and were deposited in the treasuries of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "As priests, as ministers of God, O all ye sacred hierarchs, ye offered un-bloody sacrifices unto God; and having shepherded the people, ye have made your abode where the great Shepherd dwelleth.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Refusing to submit to the passions of the flesh, and having clothed yourselves in dispassion as in a mystic robe, O venerable ones, ye were shown to dwell with the angels. By their supplications, O Christ, deliver us from temptations.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Where there is mystical food, where the light of Thy countenance shines, O Christ, there through grace cause those who have departed from us in faith to dwell, that with piety they may glorify Thy goodness.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "The holy women, having thee, O all-holy and most pure one, as their adornment, joyfully join chorus with the angels and glorify God the Word Who in the flesh was born from thee in His great loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "Him of whom the angels and all the hosts of heaven are in awe * as their Lord and Creator, * ye priests hymn, ye children praise, * ye peoples bless and supremely exalt * throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Most gloriously cooled by the fire of the divine Spirit, all the martyrs passed the mouths of the lions and the boiling of cauldrons unharmed.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having granted Thy prophets to foresee things afar off, in a sacred manner Thou didst make wise Thy holy hierarchs. Through their supplications, O Christ God, enlighten the hearts of those who hymn Thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O venerable ascetics, who crucified yourselves to the world, ye have inherited heavenly life with those who from all the ages pleased God in holiness and righteousness.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Thou Who as God didst fashion man from the earth, in that Thou art good Thou hast taken the faithful from the earth. Grant them the food of paradise, overlooking all things they have committed.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "Knowing thee to be manifestly good and immaculate among women, the women who suffered make entreaty with thee unto God, O pure Virgin, that thy servants may be saved from misfortunes.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The ever-flowing wellspring of life, * light-bearing candlestick of grace, * the animate temple, and most pure cloud, * wider than the heavens and the earth, * the Theotokos do we the faithful magnify.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Rejoicing, let us honor the sacred contests of the sacred martyrs, the sufferings and wounds, nailings and banishments, and blessed sacrifice, whereby they were shown to be heirs of Christ.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "As priests of God the divine favorites were clothed in righteousness; for having lived in holiness those who manifestly reached the end of their life in fasting rejoice, magnifying Christ.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "As divine mouths of the Lord, all the prophets proclaimed beforehand His light unto all; and with them now rejoice the women who struggled mightily and pleased God by fasting.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Power Who reignest over all, those whom Thou hast taken from the earth do Thou show to share with Thy saints in Thy kingdom; and in Thine all-great goodness, O God of all, overlook the things they have committed.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "O thou who hast given birth to the divine and timeless Light, remit all my transgressions in time by thy prayers; and enlighten my mind, which is ever darkened by slothfulness, that I may hymn and magnify thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "I sing a divine hymn unto those beloved, of God",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the departed, we chant when there is no Menaion, the acrostic whereof is “With faith I offer a first hymnody unto those who have fallen asleep,” in Tone I",
          "heading_rubric": "Another canon, of the departed, we chant when there is no Menaion, the acrostic whereof is “With faith I offer a first hymnody unto those who have fallen asleep,” in Tone I:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Thy victorious right arm, * in a manner befitting God, * hath been glorified in strength, O Immortal One; * for in its infinite strength it shattered the enemy, * fashioning anew a path for the Israelites through the deep.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "By Thy death thou didst break the gates and bars of death, O Immortal One. Open the gates of immortality which transcend understanding, O Master, unto those who have fallen asleep, through the supplications of Thy passion-bearers.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "That we might be granted divine life, Thou didst descend unto death, and having looted its strongholds, Thou didst lead us up there-from; and now, O Bestower of life, give rest to those who have departed unto Thee.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Assuming my corrupt and dead body, Thou didst invest it with incorruption, and didst bear it unto endless and blessed life. There do Thou grant rest unto those whom Thou hast taken to Thyself, in that Thou art compassionate.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 3"
                  },
                  "label": [
                    "glory",
                    "for_the_reposed"
                  ],
                  "sourceLabel": "Glory ..., For the reposed:"
                },
                {
                  "text": "O ye faithful, let us hymn her who through God gave birth to God the Word, for she, the all-pure one, hath become the path of life for those who have died. Let us glorify her as the God-receiver and Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Thou alone knowest the weakness of human nature * and in compassion hast assumed its form; * do Thou gird me with power from on high, * that I may cry unto Thee: * Holy is the animate temple of Thine ineffable glory, O Lover of mankind!",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "In that Thou alone art good, in that Thou alone art greatly merciful, unto those who in piety have departed unto Thee grant rest in the mansions of heaven, where gladness and delight abide, and where the council of the martyrs rejoiceth.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Thou alone hast appeared on the earth, O my sinless Savior Who takest away the sins of the world, in that Thou art full of loving-kindness. In the courts of Thy saints, in the sweetness of paradise, grant rest unto the souls of those who have departed this world in faith, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Casting down the dominion of death, O Master, Thou didst pour forth endless life unto all the faithful; therein do Thou number those who have departed, overlooking their immeasurable transgressions, and forgiving their sins, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "Conceived without seed, O pure one, the eternal Word came to us in the flesh, destroying the might of death, and granting resurrection and everlasting life unto the dead in His tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Perceiving thee with prophetic eyes * as the mountain overshadowed by the grace of God, * Habbakuk proclaimed that the Holy One of Israel * would come forth from thee, * for our salvation and restoration.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Slaying Hades with Thine invincible power, Thou wast reckoned among the dead, O Christ Who alone art free among the dead. Through the entreaties of the holy martyrs, free the souls of the pious from damnation there.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "As Master of all, Thou didst offer Thy sacrifice as a deliverance and ransom to annul the curse of Adam; wherefore, we beseech Thy compassions: Give rest unto those who have departed, granting them remission offenses.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 2"
                  },
                  "label": "for_the_reposed",
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thou didst receive a place in the grave, O my Savior, and as God didst raise up the dead condemned to abide in the graves. grant eternal life now unto the departed, in that Thou alone lovest mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "glory",
                    "for_the_reposed"
                  ],
                  "sourceLabel": "Glory ..., For the reposed:"
                },
                {
                  "text": "The race of mankind was saved by thy birthgiving; for unto us thou hast given birth to hypostatic Life, the destruction of death, Who giveth access unto life, O most immaculate Lady, Birthgiver of God.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou hast shone upon us with the radiance * of Thy coming O Christ, * and illumined the ends of the world with Thy Cross, * enlighten with the light of thine understanding * the hearts of those who with right worship hymn Thee.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst accept death, countering the venom of death, and breaking the sting of mortality. Do Thou Thyself grant rest unto those Thou hast taken to Thyself, O Bestower of life, through the prayers of the martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "O Thou Who didst free mankind from mortality and corruption, the souls of those who have departed in faith do Thou cause to dwell in the courts of Thy saints, from whence all sorrow hath fled, and where gladness abideth.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thou didst open paradise unto him who was suspended with Thee, O Master. Accept now the souls who have departed unto Thee with faith, granting that they may dwell in the Church of the firstborn.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "glory",
                    "for_the_reposed"
                  ],
                  "sourceLabel": "Glory ..., For the reposed:"
                },
                {
                  "text": "Delivering the dominion of those who trust in thee, steer them calmly into the harbor of the will of God by thy maternal boldness toward thy Son, O blessed and all-immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "The deepest abyss hath surrounded us, * and there is none to deliver us, * yea we have been counted as sheep for the slaughter; * save Thy people O our God, * for Thou art the strength and restoration of the weak.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "In that Thou art full of tender compassion, grant forgiveness of transgressions unto the departed, bestowing upon them the everlasting delight where the radiance of Thy countenance shines, illumining Thy passion-bearers.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "O Christ Who hast redeemed the world by the Blood which flowed from Thy side, by Thy precious sufferings deliver those who have fallen asleep in faith, for Thou didst offer Thyself as a ransom for all mankind.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O Thou Who of old fashioned me with Thy most pure hands and gave me a spirit, and most beautifully restored me who had grievously fallen: Do Thou Thyself grant rest unto the souls of the departed.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "Grant, O Lord, that those who have fallen asleep in faith in Thee may dwell in Thy radiant bridal-chamber, and overlook their transgressions, in that Thou art good, and full of loving-kindness, and greatly merciful.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "glory",
                    "for_the_reposed"
                  ],
                  "sourceLabel": "Glory ..., For the reposed:"
                },
                {
                  "text": "We hymn thee, O blessed and pure one, for because of thee the never-setting Sun of righteousness hath shone forth upon us who are in darkness and the shadow of death; for thou hast become the mediatress of our salvation.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "We the faithful perceive thee, O Theotokos, * to be a noetic furnace; * for as He, the supremely exalted One, * saved the three children, * so hath He wholly refashioned fallen humanity, in thy womb, * O Thou praised and supremely glorified God of our fathers.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ, grant that those who have gone to Thee out of the tempest of the world may be illumined by the splendors of Thy most pure glory; and grant that with the martyrs they may cry unto Thee: Blessed art Thou, O praised God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Thou wast truly the new Adam, O Creator of Adam, for Thou alone didst annul the curse of Adam. Wherefore, we pray to Thee: In the sweetness of paradise grant rest unto the departed, O Christ, in that Thou alone art full of loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O Christ Who, as the good and merciful God, alone knowest the weakness of our nature, cause all whom Thou hast taken to Thyself to dwell where the never-waning light of Thy countenance shines, O praised and most glorious God of our fathers.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": [
                    "glory",
                    "for_the_reposed"
                  ],
                  "sourceLabel": "Glory ..., For the reposed:"
                },
                {
                  "text": "Through thy birthgiving the tabernacle of the law and the ancient foreshadowings have passed away; for thou didst shine forth upon us the light of divine grace, whereby we have been delivered from our ancient debts, O pure one, hymning God Who is supremely glorious.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "In the furnace as in a fiery smelter * the Israelite children shone more brightly than gold * with the beauty of godliness, * as they exclaimed: Bless the Lord all ye works of the Lord, * hymn and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Having washed away all defilement from Thy departed servants with the dew of Thy love for mankind, grant them to hymn Thee with songs: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Show forth the faithful whom Thou hast translated, O Savior, to be intercessors at Thy right hand, justifying them by the supplications of the passion-bearers, that they may chant: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "For the reposed: O Thou Who hast all authority over death and life, be Thou well-pleased that those who have fallen asleep in faith may receive Thine effulgence, and may cry: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "Thou wast for us the mediatress of salvation, O all- immaculate one, and our sojourn in radiance for eons untold. Thee, O pure Virgin, do all of the works of the Lord, ever bless and supremely exalt throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                },
                {
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Bush, which burnt without being consumed, * prefigured thy pure birthgiving, O Theotokos. * Wherefore we now entreat Thee: * quench the raging furnace of temptations that beset us, * that we may unceasingly magnify Thee.",
                "tier": 2,
                "src": {
                  "file": "1-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "In that Thou art a merciful God Who lovest mankind, have pity on Thy creation, and grant rest in the habitations of Thy saints unto those who have departed, where all the martyrs rejoice, O greatly Merciful One.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "O Lover of mankind, as Thou art possessed of an abyss of mercies which overwhelmeth the transgressions of Thy servants, receive those whom Thou hast chosen, giving rest to them in the bosom of Abraham, and granting them to dwell with Lazarus in Thy light.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E O (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "As the Redeemer and Savior of the race of mankind, for the sake of Thy crucifixion grant divine sweetness, life incorruptible, gladness and radiance unto those whom Thou hast now taken from among us, as our Benefactor.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 3"
                  },
                  "label": [
                    "glory",
                    "for_the_reposed"
                  ],
                  "sourceLabel": "Glory ..., For the reposed:"
                },
                {
                  "text": "O thy wonders which transcend understanding! For thou alone, O Virgin, hast granted all under the heavens to understand the newest miracle of thine incomprehensible birthgiving. Wherefore, we all magnify thee, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "1-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            }
          },
          "condition": "which we chant when there is no Menaion",
          "acrostic": "With faith I offer a first hymnody unto those who have fallen asleep"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. On the Praises, these Stichera of the martyrs, in Tone I:",
      "praises": {
        "rubric": "On the Praises, these Stichera of the martyrs, in Tone I:",
        "items": [
          {
            "text": "Come, all ye peoples, and with hymns and spiritual odes let us honour the passion-bearers of Christ, the luminaries of the world and preachers of the faith, the ever-flowing fountain from whence poureth forth healing upon the faithful. By their prayers, O Christ our God, grant peace to Thy world, and to our souls great mercy.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises item 1"
            },
            "label": "martyrs"
          },
          {
            "text": "These are the warriors of the mighty King, who opposed the edicts of the tyrants and bravely scorned all tortures. Trampling every delusion underfoot, they have been crowned as is meet: and they entreat Thee O Savior that peace be granted to Thy world, and great mercy upon our souls.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises item 2"
            },
            "label": "plain"
          },
          {
            "text": "O all-famed martyrs, neither tribulation nor oppression, nor hunger, neither scourging, nor the fury of wild beasts nor the sword, nor the threat of fire, could separate you from God. But suffering out of love for Him, as though in others’ bodies, ye forgot your own nature and spurned death. Wherefore as is meet, ye received the reward of your pangs, inheriting the heavenly Kingdom. Pray ye on behalf of our souls.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises item 3"
            },
            "label": "plain"
          },
          {
            "text": "Rejoice in the Lord, O ye martyrs, for ye have fought the good fight. Ye resisted emperors and vanquished tyrants; ye feared neither fire nor the sword, nor the wild beasts that devoured your bodies. But, sending up hymnody with the angels to Christ, ye received crowns from heaven. Pray ye that peace be granted to the world, and great mercy to our souls.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises item 4"
            },
            "label": "plain"
          },
          {
            "text": "In very deed O my Savior, Thou hast revealed Thyself to be the resurrection of all; for by Thy word Thou didst raise Lazarus from the dead, O Word. And when the dead arose from the graves, and the gates of Hades were shattered, Thou didst reveal the death of man, to be but sleep. O Thou Who came to save, and not judge, Thy creature: grant rest in Thy loving compassion to those whom Thou hast chosen.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises item 5"
            },
            "label": [
              "glory",
              "for_the_reposed"
            ],
            "sourceLabel": "Glory ..., For the reposed:"
          }
        ],
        "verses": [
          {
            "text": "Praise Him for His mighty acts, * praise Him according to the multitude of His greatness.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises verse 1"
            }
          },
          {
            "text": "Praise Him with the sound of trumpet, * praise Him with the psaltery and harp.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises verse 2"
            }
          },
          {
            "text": "Praise Him with timbrel and dance, * praise Him with strings and flute.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises verse 3"
            }
          },
          {
            "text": "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. * Let every breath praise the Lord.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, Praises verse 4"
            }
          }
        ],
        "theotokion": {
          "text": "Rejoice, O holy Virgin Theotokos * who art one of us, * thou pure vessel of all the world, * inextinguishable lamp, * dwelling-place of the Boundless One, * indestructible temple! * Rejoice, thou from whom the Lamb of God was born, ** who taketh away the sins of all the world.",
          "tier": 2,
          "src": {
            "file": "1-7.pdf",
            "locus": "Saturday Matins, Praises Both-now Theotokion (separate print site from the Glory — per-print closer device)"
          },
          "type": "theotokion",
          "sourceLabel": "Both now ..., Theotokion:"
        },
        "doxology_rubric": "Small Doxology (Read), Litany: Let us complete ...,"
      },
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the departed, the composition of",
        "items": [
          {
            "text": "Theophanes, in Tone I:",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 1"
            },
            "label": "plain"
          },
          {
            "text": "Spec. Mel.: “O all-praised martyrs ...”:",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 2"
            },
            "label": "plain"
          },
          {
            "text": "We entreat Thee, O Savior: Grant Thy sweet fellowship unto those who have fallen asleep, and by Thy loving-kindness cause them to dwell with Thy saints in the habitations of the righteous and the abodes of heaven, overlooking their iniquities and granting them rest.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Transcending things visible, O Savior, are Thy promises, which eye hath not seen, nor ear heard, and which have never entered the heart of man. We beseech Thee, O Master: Grant that those who have passed over to Thee may receive Thy sweet fellowship; and life everlasting.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Rejoicing in Thy Cross and setting their hope thereon, Thy servants have passed over to Thee, O Thou Lover of mankind. Grant them now deliverance from their transgressions, by Thy Cross, and the Blood which Thou didst shed for the life of the world, forgiving them their offenses in Thy kindheartedness, and illumining them with the light of Thy countenance.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "There is none free from sin, save Thou, O immortal One. Wherefore, by Thy loving-kindness, in that Thou art a compassionate God, grant unto Thy servants a dwelling-place in the Light, with the choirs of Thine angels, and overlooking their transgressions, grant them forgiveness.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 6"
            },
            "label": "plain"
          }
        ],
        "verses": [
          {
            "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins departed aposticha verse 1 — \"they\" (shared \"those\"); §5 per-tone"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "Their souls * shall dwell among good things.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins departed aposticha verse 2 (byte-matches shared)"
            }
          },
          {
            "text": "Their memorial * is from generation to generation.",
            "tier": 2,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Matins departed aposticha verse 3 — \"from generation to generation\" (shared \"unto...and\"); THREE-verse set (as tone 8; §5 per-tone)"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "Pray to Christ Thy Child, O Virgin Mother, * that He may grant to Thy servants forgiveness of sins, * who with a proper faith in the dogmas of the Church * proclaim thee to be the Theotokos; * and may He deem them worthy ** of the radiance and glory of the saints in His Kingdom.",
        "tier": 2,
        "src": {
          "file": "1-7.pdf",
          "locus": "Saturday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    }
  },
  "liturgy_weekday": {
    "mon": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone I:",
        "items": [
          {
            "text": "By food the enemy led Adam out of paradise, but by the Cross Christ led back into it the thief who cried out: Remember me, O Lord, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "By Thy loving-kindness, O Christ God, grant me a well-spring of compunction to cleanse me of all the defilement of countless evils, and cause me to share in Thy kingdom, O Benefactor.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "We bring the ranks of Thine angels before Thee to make supplications, O Christ. Have pity on us through them, in that Thou art supremely good, overlooking all our transgressions, whether committed in knowledge or in ignorance.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "To the holy martyrs: With the outpourings of your blood ye manifestly drowned the noetic pharaoh, O saints; and ye now pour forth torrents of miracles which dry up the abyss of infirmities. Wherefore, ye are called blessed.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Let all of us, the faithful, worship the Father, glorify the Son, and hymn the all-holy Spirit, crying out and saying: O all-holy Trinity, save us all!",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "glory"
          },
          {
            "text": "O most immaculate one, who hast given birth to the timeless Light, with light guide my soul which hath ever been darkened by the assaults of the demons, and by thy mediations free it from the fire which is to come.",
            "tier": 1,
            "src": {
              "file": "1-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.mon.prokeimenon"
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.mon.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.mon.communion"
      }
    },
    "tue": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone I:",
        "items": [
          {
            "text": "By food the enemy led Adam oat of paradise, but by the Cross Christ led back into it the thief who cried out: Remember me, O Lord, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O God, turn me around, who every day commit sin and break Thy commandments, and rescue me from torment, that I may glorify Thine ineffable loving-kindness, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thou wast shown to be the torch of God, O Forerunner, going before the never-waning Light, Who ineffably shone forth upon us from the cloud of light. Wherefore, ever entreat Him, that He have pity and save our souls.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having endured subtle tortures, O all-praised martyrs, ye were deemed worthy of the good things of heaven above; wherefore, ye are ever called blessed by all.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "We all know the one Godhead in three Hypostases: the Father, the Son and the Spirit of life, to be indivisible, remaining always and forever beginningless and uncommingled.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "O pure one, in giving birth to God in the flesh thou wast preserved ever-virgin even after giving birth, as thou wast before birthgiving. Him do thou entreat, that He deliver us from the passions of the soul, we pray.",
            "tier": 1,
            "src": {
              "file": "1-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.tue.prokeimenon"
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.tue.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.tue.communion"
      }
    },
    "wed": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone I:",
        "items": [
          {
            "text": "By food the enemy led Adam out of paradise, but by the Cross Christ led back into it the thief who cried out: Remember me, O Lord, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thou didst endure violent suffering, O Christ, and didst remove from us our reproach, O good One. And Thou hast shown us to be sharers in the kingdom on high, who worship Thy condescension.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "O Christ Who coverest the nakedness of Adam, Thou wast stripped naked in the flesh; and when Thou wast uplifted upon the Cross, Thou didst raise us up from the abyss of evils. Wherefore, we glorify Thy holy condescension, O Word.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "O all-famed martyrs, who with your stripes lashed a multitude of the demons, with grace ever truly heal all the wounds and stripes of men.",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "The Trinity enlighteneth all who offer It pure worship, and acknowledge that It possesseth indestructible dominion. Wherefore, let us cry out thereto: O Trinity, save those who hymn Thee!",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "glory"
          },
          {
            "text": "Standing by the Cross and beholding Christ nailed in the flesh, the most immaculate one cried aloud, exclaiming: “Where now hath the beauty of Thy glory gone, O loving Lord?”",
            "tier": 1,
            "src": {
              "file": "1-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.wed.prokeimenon"
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.wed.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.wed.communion"
      }
    },
    "thu": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone I:",
        "items": [
          {
            "text": "By food the enemy led Adam out of paradise, but by the Cross Christ led back into it the thief who cried out: Remember me, O Lord, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Enlightening the ends of the earth with the divine rays of your teachings, ye destroyed the darkness of cruel ungodliness; and having come to the never-waning Light, ye are ever called blessed.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 2"
            },
            "label": "plain"
          },
          {
            "text": "Possessed of the hypostatic Wisdom of the Father, Who maketh all of you wise, O disciples of Christ, with the foolishness of your preaching ye made the world wise and brought it to the knowledge of God.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Enduring tortures as though ye were bodiless, O spiritual athletes of Christ, ye mightily vanquished all the incorporeal foe; wherefore, ye are rightly called blessed forever, O all-praised ones.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "O ye faithful, let us worship the Trinity; the Father, the Son and the upright Spirit, the indivisible, undivided and co-enthroned Unity; and let us cry out: Holy, Holy, Holy art Thou, O most adored Trinity!",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "glory"
          },
          {
            "text": "We bless thee, O most pure one, as thou didst foretell, for thou hast given birth to God in the flesh, whom the choir of the apostles preached. With them ask for us release from our transgressions, O all-hymned one.",
            "tier": 1,
            "src": {
              "file": "1-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.thu.prokeimenon"
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.thu.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.thu.communion"
      }
    },
    "fri": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone I:",
        "items": [
          {
            "text": "By food did enemy led Adam out of paradise, but by the Cross Christ led back into it the thief who cried out: Remember me, O Lord, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "When Thou wast crucified, O sinless Christ, Thou didst take the sins of all upon Thyself; and when Thou wast pierced in the side, Thou didst pour forth blood and water; torrents of salvation, rebuilding that which had been broken down by corruption.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O compassionate Jesus our God, Who wast nailed to the Tree of Thine own will, Thou didst take away all the passion-fraught understanding of Adam; and by Thy precious wounds didst wound the multitude of the demons.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having emulated the sufferings of Him Who suffered willingly in the flesh, O glorious martyrs, ye ever heal incurable sufferings and drive ailments away from all by the power of the Spirit.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "Thee do we glorify, the Trinity equal in power and one in honor, the beginningless God; and with faith we magnify the Father, the Son and the Holy Spirit, the single Godhead in three Hypostases.",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "When she who gave Thee birth in the flesh saw Thee nailed to the Cross, O Christ God, she exclaimed, weeping: “How hath the iniquitous assembly of the Jews rewarded Thee, O my Son?”",
            "tier": 1,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.fri.prokeimenon"
      },
      "alleluia": {
        "tone": 4,
        "text": {
          "text": "Remember Thy congregation which Thou hast purchased from the beginning.",
          "tier": 1,
          "src": {
            "file": "1-6.pdf",
            "locus": "Friday Liturgy Alleluia (text byte-matches shared; per-tone beside its divergent verse)"
          }
        },
        "verses": [
          {
            "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
            "tier": 2,
            "src": {
              "file": "1-6.pdf",
              "locus": "Friday Liturgy Alleluia verse — \"before the ages,\" (comma) where shared prints \";\" (semicolon); §5 per-tone"
            }
          }
        ]
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.fri.communion"
      }
    },
    "sat": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone I:",
        "items": [
          {
            "text": "By food the enemy led Adam out of paradise, but by the Cross Christ led back into it the thief who cried out: Remember me, O Lord, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "The countless multitude of Thy spiritual athletes: the holy hierarchs, the most wise women and the most glorious prophets; entreat Thee, O Jesus our God: Grant us remission of transgressions, and great mercy.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O most sacred spiritual athletes of Christ, who have finished your race, with the sacred hierarchs and prophets ye have been deemed worthy to dwell in the heavenly city, rejoicing with the angels.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O Christ, in never-waning light settle those whom Thou hast taken to Thyself, overlooking their transgressions, in that Thou art the compassionate God, that we may glorify Thine incalculable mercy, O Benefactor.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "We worship the Father, we glorify the Son, and all of us, the faithful, hymn the most holy Spirit. Remember us who cry to Thee, O God the consubstantial Trinity and Unity.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "glory"
          },
          {
            "text": "We hymn thee, O pure one, as the spacious palace, the throne of glory and the cloud of light; and we pray: Dispel the gloomy cloud from our souls by thy divine supplications.",
            "tier": 1,
            "src": {
              "file": "1-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.sat.prokeimenon"
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.sat.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.sat.communion"
      }
    }
  }
};
