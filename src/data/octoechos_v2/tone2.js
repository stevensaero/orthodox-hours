// src/data/octoechos_v2/tone2.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — Tone 2, the reference derivation (spec §11). THIS STEP (§11
// step 4): core §4.1 + Little Vespers + Great Vespers + Nocturns + Sunday
// Matins + Sunday Liturgy, from 2-1.pdf (canonical provision; text layer
// CLEAN). Weekday sections and Compline land in §11 step 5.
//
// GENERATED from the raw pdftotext -layout text by paragraph-grammar walking
// (July 7 2026) — nothing hand-retyped. Canonical §4.1 fields verified across
// ALL their print sites at generation (troparion ×4 with the §9.5 LV
// quotation variance asserted exactly; kontakion ×2 byte-identical;
// dismissal theotokion ×2 byte-identical). Psalm-verse fields whose print
// site is already encoded in shared.js are stored as {ref} — one print site,
// one encoding. Dynamically loaded only (§2.1).
// ─────────────────────────────────────────────────────────────────────────────

export default {
  "tone": 2,
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
    "text": "When Thou didst descend unto death, O Life Immortal, * then didst Thou slay Hades with the radiant brilliance of Thy divinity. * And when Thou didst also raise the dead out of the nethermost depths, * all the hosts of the heavens cried aloud: ** O Life-giver, Christ our God, glory be to Thee.",
    "tier": 2,
    "src": {
      "file": "2-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (CANONICAL print, §9.5)"
    },
    "provenance_note": "Verified word- and pointing-identical at all four print sites (LV dismissal, GV no-vigil, Matins God-is-the-Lord [printed \"(Twice)\"], Liturgy). Little Vespers alone wraps the final line in quotation marks — the §9.5 recorded variance; the canonical field stores the unquoted GV reading."
  },
  "dismissal_theotokion": {
    "text": "All of thy most glorious mysteries are beyond comprehension, * O Theotokos; * for, thy purity sealed and thy virginity intact, * thou art known to be a true Mother, having given birth unto God. ** Him do thou entreat, that our souls be saved.",
    "tier": 2,
    "src": {
      "file": "2-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (verified identical at the Matins God-is-the-Lord site)"
    }
  },
  "kontakion": {
    "text": "Thou didst arise from the tomb, * O all-powerful Savior, * and seeing the marvel Hades was struck with fear, * the dead arose, and creation with Adam seeing this rejoiceth with Thee, ** therefore the world doth glorify Thee, my Savior.",
    "tier": 2,
    "src": {
      "file": "2-1.pdf",
      "locus": "Sunday Matins after Ode VI (verified identical at the Liturgy site)"
    }
  },
  "ikos": {
    "text": "O Savior, Thou art the light of those lying in darkness, and the Resurrection and the life of all mortals. Since Thou hast raised up all mankind with Thyself, despoiling the might of death, and smashing the gates of Hades, O Word, all creation, marveling at the wonder, rejoiceth in Thy Resurrection. O Lover of mankind, we therefore glorify and hymn Thy condescension, and the world ever praiseth Thee, O my Savior.",
    "tier": 1,
    "src": {
      "file": "2-1.pdf",
      "locus": "Sunday Matins, after Ode VI"
    },
    "sourceLabel": "Ikos"
  },
  "little_vespers": {
    "rubric": "On “Lord, I have cried ...,” 4 Stichera:",
    "lic": [
      {
        "text": "Come let us worship God the Word, * begotten of the Father before all ages, * incarnate of the Virgin Mary; * for having endured the Cross, He was handed over for burial, * as He Himself had willed, * and having risen from the dead He hath saved me, * the whole man, ** who hath gone astray.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 1"
        }
      },
      {
        "text": "Come let us worship God the Word, * begotten of the Father before all ages, * incarnate of the Virgin Mary; * for having endured the Cross, He was handed over for burial, * as He Himself had willed, * and having risen from the dead He hath saved me, * the whole man, ** who hath gone astray.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 2"
        }
      },
      {
        "text": "Christ our Savior by nailing the record against us to the Cross * hath blotted it out, * and destroyed the might of death. ** We worship His arising on the third day.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 3"
        }
      },
      {
        "text": "With the archangels let us hymn the Resurrection of Christ; * for He is the Redeemer and the Savior of our souls; * and He is coming again * with great glory and mighty power ** to judge the world which He hath fashioned.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 4"
        }
      }
    ],
    "lic_verses": [
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC verse 1"
        }
      },
      {
        "text": "For with the Lord there is mercy, and with Him is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC verse 2"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC verse 3"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Little Vespers, LIC verse 4"
        }
      }
    ],
    "lic_theotokion": {
      "text": "Contemplating the wonder of the great mystery! * I confess Thy Godhead. * For as the Lover of mankind Emmanuel hath opened the gate, yet as God hath not broken the seal of virginity, * rather He hath come forth from the womb in a manner similar to which He had entered, * becoming incarnate in a manner similar to His conception. * Impassibly hath He entered, and ineffably hath He come forth, * in accordance with the saying of the prophet, * “This gate shall remain shut; that none may enter through it, * but only the Lord God of Israel, ** who hath great mercy.”",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
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
          "text": "Thy Resurrection, O Christ our Savior, * hath enlightened the whole inhabited world; * and by it Thou hast called back Thine own creation. ** O all-powerful Lord, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Little Vespers, aposticha Resurrection sticheron (as printed here — differs from the GV print, §2.2)"
          }
        }
      ],
      "theotokos": [
        {
          "text": "O most pure one, * thou who art the joy of all who are afflicted, * the protector of the wronged, the sustenance of those in need, * the staff of the blind, the visitation of the sick, * the shelter and assistance of the oppressed, the helper of orphans * and the Mother of the Most High. * Hasten, we beseech thee, ** to deliver thy servants.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 1"
          }
        },
        {
          "text": "Without restraint I have committed every iniquity, * without limit every sin, * O wretch that I am; * I have become worthy of every condemnation. * Grant me, O Virgin, the means of repentance, * that I may appear uncondemned. * For I have appointed thee as my intercessor, * and I call thee my protectress. ** Do thou not put me to shame, * O Bride of God.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 2"
          }
        },
        {
          "text": "We have no other refuge unto our Creator and Master but thee, * O pure Bride of God. * With thy fervent protection cast us not away; * do not put us to shame ** who with love hasten under thy shelter.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 3"
          }
        }
      ],
      "theotokos_verses": {
        "ref": "shared.lv_theotokos_aposticha_verses"
      }
    },
    "aposticha_theotokion": {
      "text": "Who can worthily praise thee, and call thee blessed as is meet, * O maiden Bride of God, * for through thee redemption hath come into the world? * Wherefore with thanksgiving we cry unto thee and say, * “Rejoice, thou who hast made Adam divine and brought together that which was separated. * Rejoice!, thou who hast enlightened mankind * by the radiant Resurrection of thy Son and our God” ** Wherefore we, the race of Christians, unceasingly magnify thee.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Little Vespers, aposticha Theotokion"
      }
    },
    "closing_rubric": "“Now lettest Thou Thy servant depart ...,” Trisagion. Then:",
    "dismissal_rubric": "Glory ..., Both now ..., Theotokion: [marked WITHOUT a printed text — §9.6: resolution is an assembly question (Fekula/Theotokia tables), not a data gap]"
  },
  "great_vespers": {
    "rubric": "On “Lord I have cried ...,” 10 Stichera: 7 Resurrection Stichera and 3 of the saint of the day, or 4 and 6 if the Menaion service is of Polyeleos rank.",
    "lic": [
      {
        "text": "Come let us worship God the Word, * begotten of the Father before all ages, * incarnate of the Virgin Mary; * for having endured the Cross, He was handed over for burial, * as He Himself had willed, * and having risen from the dead He hath saved me, * the whole man, ** who hath gone astray.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC sticheron 1"
        }
      },
      {
        "text": "Christ our Savior, by nailing the record against us to the Cross * hath blotted it out, * and destroyed the might of death. ** We worship His arising on the third day.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC sticheron 2"
        }
      },
      {
        "text": "With the archangels let us hymn the Resurrection of Christ; * for He is the Redeemer and the Savior of our souls; * and He is coming again * with great glory and mighty power ** to judge the world which He hath fashioned.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC sticheron 3"
        }
      },
      {
        "text": "An angel proclaimed Thee, the crucified and buried Master, * saying to the women; * “Come, see where the Lord lay. * For as He foretold, He hath arisen as all-powerful.” * Therefore we worship Thee, the only immortal One. ** O Christ, Giver of life, have mercy on us.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC sticheron 4"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "By Thy Cross Thou hast destroyed the curse of the tree; * by Thy burial Thou didst slay the might of death; * by Thine arising Thou hast enlightened mankind; * wherefore we cry out to Thee; * “O Christ, our God and Benefactor, ** glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC sticheron 5"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "The gates of death opened unto Thee in fear O Lord, * and the gate-keepers of Hades were terrified at the sight of Thee, * for Thou hast smashed the gates of brass, * and crushed the bars of iron to powder, * leading us out of the darkness and shadow of death ** rending asunder our bonds.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC sticheron 6"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Singing a hymn of salvation, * let this song rise from our lips; * “O Come all ye people into the house of the Lord,” * let us fall down in worship saying; * “O Thou who wast crucified upon the Tree, * and didst rise from the dead and abidest in the bosom of the Father, * have mercy upon us ** and cleanse us of our iniquities!”",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
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
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 1"
        }
      },
      {
        "text": "The righteous shall wait patiently for me * until Thou shalt reward me.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 2"
        }
      },
      {
        "text": "Out of the depths have I cried unto Thee, O Lord; * O Lord, hear my voice.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 3"
        }
      },
      {
        "text": "Let Thine ears be attentive * to the voice of my supplication.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 4"
        }
      },
      {
        "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 5"
        }
      },
      {
        "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, * my soul hath hoped in the Lord.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 6"
        }
      },
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
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
          "file": "2-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 1"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 2"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 3"
        }
      }
    ],
    "dogmatikon_rubric": "Glory from the Menaion, if appointed. Otherwise: Glory ..., Both now ..., Theotokion Dogmatic:",
    "dogmatikon": {
      "text": "The shadow of the law hath passed now that grace hath come, * for as the bush wrapped in flame was not consumed, * so didst thou bear a Child O Virgin * and remained a virgin; * in place of a pillar of fire, the Sun of righteousness hath dawned, * instead of Moses, Christ is come, ** the salvation of our souls.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Great Vespers, Glory/Both-now — Theotokion Dogmatic"
      },
      "sourceLabel": "Glory ..., Both now ..., Theotokion Dogmatic"
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon"
    },
    "aposticha": [
      {
        "text": "Thy Resurrection, O Christ our Savior, * hath enlightened the whole universe; * and Thou hast called back Thine own creation. ** O all-powerful Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 1 (unversed)"
        }
      },
      {
        "text": "Nullifying the curse of the tree through a Tree, O Savior, * Thou didst slay the might of death by Thy burial, * enlightening our race by Thine arising; * wherefore we cry out to Thee; * “O Giver of life, Christ our God, ** glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 2"
        }
      },
      {
        "text": "Appearing nailed to the Cross, O Christ, * Thou hast altered the beauty of all created things; * and while the soldiers showed their inhumanity by piercing Thy side with a lance, * the Hebrews asked that Thy tomb be sealed, * not understanding Thy power; * but in Thy merciful compassion Thou didst accept burial and rise on the third day. ** O Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 3"
        }
      },
      {
        "text": "For the sake of mortal mankind, * O Christ Giver of life, * Thou didst willingly endure the Passion; * and as all-powerful Thou didst descend into Hades, * snatching from the hand of the mighty one * the souls of those who awaited Thy coming therein * granting them to dwell in paradise instead of Hades, * grant also unto us who glorify Thine arising on the third day ** the pardon of our iniquities and Thy great mercy.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 4"
        }
      }
    ],
    "aposticha_verses": {
      "ref": "shared.saturday_gv_aposticha_verses"
    },
    "aposticha_glory_rubric": "Glory from the Menaion, if appointed, otherwise:",
    "aposticha_theotokion": {
      "text": "O new wonder greater than all the wonders of old! * For who hath ever known a mother to give birth without having known a man, * and to bear on her arm Him Who sustaineth all creation? * Yet it was the will of God to be born, * O most pure one, * who carried Him as an infant in thine embrace * and before Whom thou hast a mother’s boldness: * cease not to pray on behalf of those who honor thee, ** that He have compassion and save our souls.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Great Vespers, aposticha Theotokion — the REAL Saturday fallback (§4.3/§8)"
      }
    },
    "vigil_rubric": {
      "ref": "shared.theotokos_virgin_rejoice"
    },
    "no_vigil_rubric": "If a Vigil is not served, we chant (Once):"
  },
  "nocturns": {
    "frame_rubric": "The priest saith: “Blessed is our God ...,” and we say: Amen. Glory to Thee, our God, glory to Thee. O heavenly King... Trisagion through Our Father... Priest: For Thine is the kingdom ..., And we say: Amen. Lord, have mercy (12 times), Glory..., Both now..., O come, let us worship (Thrice). Psalm 50 (Have mercy on me, O God ...,)",
    "canon": {
      "title": "Canon to the Holy & Life-creating Trinity",
      "composer": "Metrophanes of Smyrna",
      "acrostic": "I hymn Thee, the threefold light of the Godhead",
      "heading_rubric": "And then, the Canon to the Holy & Life-creating Trinity, the acrostic whereof is “I hymn Thee, the threefold light of the Godhead,” the composition of Metrophanes of Smyrna, in Tone II:",
      "odes": {
        "1": {
          "irmos": {
            "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 1 irmos"
            }
          },
          "items": [
            {
              "text": "With songs let us hymn the essence of the Godhead which is threefold yet One in rule, saying: As Thou hast an essential and inexhaustible depth of mercy, preserve and save those who worship Thee, in that Thou lovest mankind.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 1"
              },
              "label": "plain"
            },
            {
              "text": "O Thou Who as the Father art the Source and Root, and the Origin of the unified Godhead in the Son and Thy Holy Spirit: Pour forth upon my heart the three-sunned Light, and illumine me through participation in deifying effulgence.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O thrice-radiant and divine Unity, dispel all the darkness of my sins and passions by the most sweet partaking of Thy brilliant rays, and make me a temple and most pure tabernacle of Thine unapproachable glory.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 3"
              },
              "label": "glory"
            },
            {
              "text": "The ancient course of our nature, which suffered because of evil and fell headlong into corruption, hath the Word of God, Who became incarnate within thy womb, O most pure one, illumined in His love for mankind, mystically teaching us of the thrice-radiant Godhead.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "3": {
          "irmos": {
            "text": "Thou hast established me on the rock of faith, * and my mouth hath been emboldened against mine enemies. * For my spirit rejoiceth when I sing: * There is none as holy as our God * and none more righteous than Thee, O Lord.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 3 irmos"
            }
          },
          "items": [
            {
              "text": "I glorify Thee, O Godhead One in honor and equal in essence as to Thy Hypostases; for Thou art our one God: Life Who issued forth incorruptibly from Life: and there is none holier than Thee, O Lord.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Thou didst create the immaterial ranks of heaven as reflections of Thy goodness, O only indivisible trinitarian Godhead, that they may hymn Thee unceasingly. Accept now also the praise which we offer Thee with mouths of clay.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O three-sunned Unity, establish the hearts and minds of Thy servants upon the rock of faith, and enlarge them by the depth of Thy love; for Thou art our God, in Whom we set our hope. Let us not be put to shame.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 3"
              },
              "label": "glory"
            },
            {
              "text": "He Who in the beginning brought every form of creature into being, in His boundless goodness took our form within thy womb, O Theotokos, and hath shone forth upon all the three-sunned Light of the one Godhead and Dominion.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "4": {
          "irmos": {
            "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 4 irmos"
            }
          },
          "items": [
            {
              "text": "Even the ranks of the immaterial angels are unable to comprehend Thee, O beginningless Unity and Trinity; wherefore, with faith we hymn and glorify Thine essential goodness with tongues of clay.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 1"
              },
              "label": "plain"
            },
            {
              "text": "As the Maker of human nature, as the Seer of all, O Almighty, Thou now beholdest all mine infirmity; wherefore, have pity on Thy servant and lead me up again to the higher life.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Let us hymn the three uncommingled Hypostases of the primal Unity as possessing individual and separate Hypostases, yet unified and indivisible in counsel, glory and divinity.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 3"
              },
              "label": "glory"
            },
            {
              "text": "The Maker of all found thee alone, from among all the ages, to be a pure and immaculate temple, O Ever-virgin Theotokos; and having made His abode within Thee, He formed human nature anew, in that He is the Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "5": {
          "irmos": {
            "text": "O Christ my Savior, the enlightenment of those lying in the darkness of sin. * I rise early to hymn Thee O King of Peace, * enlighten me with Thy radiance, * for I know no other God than Thee.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 5 irmos"
            }
          },
          "items": [
            {
              "text": "In that Thou dost in every way extend the pacifying and salvific rays of Thy providence upon all, O King of peace, maintain me in Thy peace, for Thou art the life and peace of every creature.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 1"
              },
              "label": "plain"
            },
            {
              "text": "When Thou didst appear unto Moses in a vision of fire in the bush, Thou didst call Thyself an angel, O Word of the Father, revealing beforehand Thy coming unto us, whereby Thou hast openly proclaimed unto all the might of the one Godhead in three Hypostases.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O Holy Trinity one in rule, Thou settest forth essential and equally eternal glory. Grant that those who hymn Thee with Orthodox faith may behold the one beginningless and three-sunned Radiance of Thy glory.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 3"
              },
              "label": "glory"
            },
            {
              "text": "God the Word, Who in His essence governs all the ages, was ineffably contained within thy womb, O Virgin Mother, calling all to the oneness of the sole Dominion.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "6": {
          "irmos": {
            "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 6 irmos"
            }
          },
          "items": [
            {
              "text": "O three-sunned God Who willest mercy, have mercy upon those who believe on Thee, and deliver Thy servants from transgressions, sufferings and perils.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "In the ineffable abyss of goodness grant unto me the incomprehensible and light-giving radiance of the effulgence of Thy thrice-radiant Divinity.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 2"
              },
              "label": "glory"
            },
            {
              "text": "The Most High ineffably became man through thee, O Virgin, clothing Himself wholly in our nature, and illumining me with the light of the threefold Sun.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 3"
              },
              "label": "both_now"
            }
          ]
        },
        "7": {
          "irmos": {
            "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 7 irmos"
            }
          },
          "items": [
            {
              "text": "Thou dost ever appoint the angelic armies to be immutable, O Lord Who alone art immutable and of three Hypostases. Wherefore, show forth my heart as ever immutable, that I may fervently glorify Thee and hymn Thee with piety.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "The noetic choirs of the immaterial beings are illumined by Thy rays, O three-sunned God, Thou sole Ruler, and by their position they become secondary luminaries. Through their effulgence and fellowship show me forth as light, in that Thou art the thrice-radiant Giver of light.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 2"
              },
              "label": "glory"
            },
            {
              "text": "Fail not to guide and lift us who love Thee up to the heavens, O Thou Who, in thine ineffable love for mankind, didst become man in the Virgin’s womb and, having deified man, sittest with the Father on the throne of glory.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 3"
              },
              "label": "both_now"
            }
          ]
        },
        "8": {
          "irmos": {
            "text": "Disdaining the golden image, the thrice-blessed children, * beholding the immutable and living image of God, * chanted in the midst of the flame: * Let all existing creation hymn the Lord * and supremely exalt Him throughout all ages!",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 8 irmos"
            }
          },
          "items": [
            {
              "text": "O Lord of all, unapproachable, equally eternal Trinity, equally without beginning, divine, immutable in all things, except for Thy light-bearing characteristics: Set at naught every evil counsel of the adversaries and the vexations of the demons, ever preserving me unharmed.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "O uncircumscribable, three-sunned sole Ruler, Who most wisely and omnipotently fashioned the world and preservest it in perfect, intact order: Abide in my heart, that with the angelic choirs I may hymn and glorify Thee unceasingly throughout all ages.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 2"
              },
              "label": "glory"
            },
            {
              "text": "O Wisdom of the Father, unapproachable, ineffable Word of God, without changing Thine immutable nature Thou didst mercifully assume",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 3"
              },
              "label": "both_now"
            },
            {
              "text": "human nature; and as the Lord of all ages, Thou hast taught all to worship the single Trinity.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 4"
              },
              "label": "plain"
            }
          ]
        },
        "9": {
          "irmos": {
            "text": "Thee do we magnify, O blessed and all-pure Theotokos, * who through thy virginal womb ineffably brought forth * God incarnate, * the Luminary Who shone forth before the sun * and hath come to us in the flesh.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 9 irmos"
            }
          },
          "items": [
            {
              "text": "The Son Who is equally without beginning shone forth as Light from the beginningless Light, and the Spirit issued forth as consubstantial Light ineffably and divinely, assuring us of Their incorrupt generation and ineffable procession.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Thy thrice-radiant light, O three-sunned Godhead, do Thou shine forth in the hearts of those who hymn Thee, and grant them the intelligence to understand and do Thy good and perfect will in all things, and to magnify and glorify Thee.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 2"
              },
              "label": "plain"
            },
            {
              "text": "As God Who art incomprehensible in nature, possessing an incalculable depth of compassions, O Trinity, Thou didst have pity in the beginning. Wherefore, have pity now upon Thy servants, and deliver them from transgressions, perils and evil circumstances.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 3"
              },
              "label": "glory"
            },
            {
              "text": "O my God, Who art ineffably hymned in three Hypostases, and Who alone art God almighty, save me from all temptation and oppression, and preserve Thy flock through the supplications of the Theotokos.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 4"
              },
              "label": "both_now"
            }
          ]
        }
      }
    },
    "after_ode3": {
      "sessional": {
        "text": "When Thou didst form Adam in the beginning, O loving Lord, Thou didst exclaim to Thy hypostatic Word: “Let Us create him according to Our likeness.” And the Holy Spirit was also present as Creator. Wherefore, we cry unto Thee: O God our Creator, glory be to Thee!",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode III"
        },
        "spec_mel": "Of the loving-kindness ...",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "When God was well pleased to come unto us, He made His abode within thy most precious womb, O most pure one, and through thee saved humanity, granting the kingdom of heaven unto all. Wherefore, we cry unto thee, O pure Theotokos: Rejoice, O Lady!",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode III"
        },
        "type": "theotokion"
      }
    },
    "after_ode6": {
      "sessional": {
        "text": "O merciful One, beginningless Trinity and Unity, Who hast extended unto us the depth of Thy loving-kindness, accept us, look upon the people who glorify Thee, and accept the hymnody of those who petition Thee; for on Thee, the God of all, do we set our hope, that Thou mayest grant us forgiveness of transgressions.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode VI"
        },
        "spec_mel": "Of the loving-kindness ...",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "Thou art merciful, O good Theotokos, having given birth to the Wellspring of loving-kindness; for thou art the only help of the faithful and consolation of the sorrowful. Wherefore, we all now fall down before thee with faith, that, enriched by thy help alone, we may find remission of evils.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode VI"
        },
        "type": "theotokion"
      }
    },
    "gregory_rubric": {
      "ref": "shared.gregory_sinaite_hymn",
      "rubric": "Then, the hymn of Gregory the Sinaite. (which is chanted every Sunday after the canon)"
    },
    "closing_rubric": "The rest of Nocturns, and the Dismissal."
  },
  "matins": {
    "god_is_lord_rubric": "On “God is The Lord ...,” the Resurrection Troparion, in Tone II: [troparion printed \"(Twice)\"] Glory ..., the Troparion from the Menaion, otherwise Glory ..., Both now ..., the Theotokion, in Tone II, (or in the Tone of that from the Menaion):",
    "sessionals": [
      {
        "rubric": "After the 1st chanting of the Psalter (Kathisma II), the Sessional Hymns of the Resurrection, in Tone II:",
        "items": [
          {
            "text": "The noble Joseph having taken down Thy most pure body from the tree, * wrapped it in a fine linen shroud * covering it with fragrant spices * and placed it in a new sepulcher; * but on the third day Thou didst arise, O Lord, ** granting the world great mercy.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "The angel standing by the tomb cried unto the myrrh-bearing women, * “Myrrh is fitting for the dead, * but Christ hath been revealed a stranger to corruption. * rather cry aloud: The Lord is risen, ** granting the world great mercy!”",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
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
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "Thou art highly glorified, O Virgin Theotokos, * and we sing thy praise, * for through the Cross of thy Son Hades hath been overthrown, * Death hath been slain, * and we who were dead have arisen and been granted life. * We have received paradise, our ancient delight, * therefore with thanksgiving we glorify Christ our God ** as mighty and alone greatly merciful.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Kathisma II, Glory/Both-now closer"
          },
          "type": "stavrotheotokion"
        }
      },
      {
        "rubric": "After the 2nd chanting of the Psalter (Kathisma III), the Sessional Hymns of the Resurrection, in Tone II:",
        "items": [
          {
            "text": "Thou didst not prevent the grave stone from being sealed, * and having arisen Thou didst grant unto all * the rock of the Faith. ** O Lord, glory be to Thee!",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "The choir of Thy disciples rejoices in harmony with the myrrh-bearing women; * for with them we celebrate a common feast * to the glory and honor of Thy Resurrection. * Through them, O Lord who lovest mankind, ** grant Thy people Thy great mercy.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
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
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "Thou art highly blessed, O Virgin Theotokos, * for through Him who was incarnate of thee * Hades hath been taken captive, Adam recalled, the curse slain, and Eve set free, * death hath been put to death and we have been given life; * therefore with hymns we cry unto Thee: ** Blessed art Thou O Christ our God who hath been thus well-pleased, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
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
      "text": "The women coming to Thy grave after the Passion * to anoint Thy body, O Christ God, * saw angels in the tomb and were affrightened, * for they heard a message from them, ** “The Lord hath arisen, granting the world His great mercy.”",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins, after the Evlogitaria"
      },
      "sourceLabel": "The Sessional Hymn"
    },
    "anabathmoi": [
      {
        "troparia": [
          {
            "text": "I raise the eyes of my heart to Thee in heaven, O Savior. ** Save me by Thy radiance.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 1"
            }
          },
          {
            "text": "Have mercy, O my Christ, on us who fail Thee every hour * and in many ways, * and grant unto us the means to return unto Thee ** in repentance before the end.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "To the Holy Spirit belongeth sovereignty, * sanctification and the quickening of creation, * for He is God, One in essence with the Father ** and the Word.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 1, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "If the Lord was not amongst us, * who could be kept safe * from the one who is both our foe ** and a manslayer?",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 1"
            }
          },
          {
            "text": "Do not hand Thy servant over to destruction, * O my Savior. * For like a lion they come up against me, ** they who are my foes.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "To the Holy Spirit belongeth the source of life and its honor, * for, being God, He preserveth all creation * by His power ** in the Father through the Son.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 2, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Those who trust in the Lord * are like unto the holy mountain: * they are utterly unshaken ** by the assaults of the enemy.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 1"
            }
          },
          {
            "text": "Let not those who live for God * stretch out their hands in iniquity; * for with the rod of His word ** Christ forbideth such things.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "By the Holy Spirit all wisdom doth flow forth, * grace unto the apostles, * crowns unto the martyrs, ** and unto the prophets, prophetic vision.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 3, Glory/Both-now"
          }
        }
      }
    ],
    "prokeimenon": {
      "tone": 2,
      "text": {
        "text": "Arouse Thyself, O Lord my God, in the commandment which Thou hast enjoined, * and a congregation of peoples shall surround Thee.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Matins prokeimenon"
        }
      },
      "verse": {
        "text": "O Lord my God, in Thee have I put my hope. Save me from all them that pursue me and do Thou deliver me.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Matins prokeimenon verse"
        }
      }
    },
    "canon": {
      "title": "Resurrection canon",
      "heading_rubric": "After which: “O God, save Thy people ...,” Then the Canons: Resurrection canon, in Tone II:",
      "odes": {
        "1": {
          "irmos": {
            "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 1 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The ruler of the world, O good One, to whom we were enslaved by not obeying Thy commandments, hath been condemned by Thy Cross; for having attacked Thee as a mortal He hath fallen by the might of Thine authority, exposing his feebleness.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 1"
                }
              },
              {
                "text": "Thou camest into the world as the Redeemer of the race of mortals and Prince of the life without corruption; for Thou didst tear apart death’s winding sheets by Thy Resurrection, which we all glorify; for gloriously hath It been glorified.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou hast appeared higher than all creation, visible and invisible, O pure Ever-virgin; for thou hast given birth to the Creator, since He was well pleased to become incarnate within thy womb; by thy boldness of supplication implore Him that our souls be saved.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "O Christ Thou hast become the strength of the infirm, the Resurrection of the fallen and the incorruption of the dead, by the suffering of Thy flesh: for gloriously hast Thou been glorified.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 1"
                }
              },
              {
                "text": "God the Creator and Refashioner hath taken pity upon His fallen image and hath raised it up from whence it was crushed, having Himself been put to death; for gloriously hath He been glorified.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Of old an immaterial ladder and a path in the sea wondrously made dry revealed thy birth-giving, O pure one. Wherefore we all sing its praise, for gloriously hath it been glorified.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 1"
                }
              },
              {
                "text": "The Power of the Most High, the supreme essence and Wisdom of God, became incarnate from thee, O immaculate one, and conversed with mortals; for gloriously hath He been glorified.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 2"
                }
              },
              {
                "text": "The Sun of righteousness came through the sealed and untrodden gateway of thy womb, O pure one, and hath thus shone upon the world: for gloriously hath He been glorified.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "3": {
          "irmos": {
            "text": "The desert of the barren Church of the nations * blossomed like a lily * at Thy coming, O Lord, * therein hath my heart been established",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 3 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "At Thy passion creation was changed when it saw Thee, who doest all things by Thy divine bidding, humbled in form and derided by lawless men.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 1"
                }
              },
              {
                "text": "Thou didst fashion me from dust by Thine own hand in accordance with Thine image, and when I through sin, was crushed back to the dust of death from whence I came Thou didst descend with me into Hades, O Christ, and raise me up again with Thyself.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "The angelic orders were astonished, and the hearts of mortals trembled at thy birth-giving, O most pure one; wherefore in faith we honor thee as the Mother of God.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "Christ, who is above all, hath become a little lower than the angels by His suffering in the flesh.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 1"
                }
              },
              {
                "text": "As one dead Thou wast numbered with the lawless, O Christ, but Thou didst appear to the women shining with the crown of the glory of Thy Resurrection.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "The One who is beyond all time, as the Creator of time, was fashioned of His own will as a babe from thee, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 1"
                }
              },
              {
                "text": "Let us, the faithful, hymn the womb that is wider than the heavens; for through it Adam, rejoicing, hath become a citizen of heaven.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "4": {
          "irmos": {
            "text": "From a Virgin didst Thou come forth, not as an ambassador, * nor as an angel, * but the very Lord Himself incarnate, * and didst save me, the whole man; * wherefore I cry unto Thee: * Glory to Thy power, O Lord!",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 4 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "As one condemned, O my God, Thou didst stand before the tribunal but did not cry out, O Master, with a pronouncement of judgment upon the nations. Rather Thou hast wrought salvation for the world through Thy Passion, O Christ.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 1"
                }
              },
              {
                "text": "The swords of the enemy failed at Thy Passion; and by Thy descent into Hades the cities of Thine adversaries were destroyed and the arrogance of the tyrant was brought to naught.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "All we believers know thee to be a safe haven of salvation and an unshakeable rampart, O Sovereign Lady Theotokos, for by thine intercessions thou dost deliver our souls from all dangers.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "Beholding Thee nailed to the Cross, O Christ, the Virgin who didst bear Thee without pain, endured the anguish of a mother.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Death hath been vanquished, and one dead hath despoiled the gates of Hades; for now that the all-devouring one hath been rent apart, all that is above nature hath been bestowed upon me.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Come and see, for the Theotokos, the divine mountain, is now made the dwelling-place of the Lord, and is exceedingly exalted above all the powers of the heavens.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 1"
                }
              },
              {
                "text": "O Virgin, who alone surpassing the laws of nature hath borne the Master of creation, and been made worthy of a divine appellation.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "5": {
          "irmos": {
            "text": "O Christ God Thou art a mediator between God and man; * for by Thee, O Master, * we have been led from the night of ignorance, * to Thy Father, the Source of light.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 5 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Like a cedar, O Christ, Thou didst crush the insolence of the nations, since of Thine own will Thou wast well-pleased, O Master, to be raised up in the flesh, on cypress, pine and cedar.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 1"
                }
              },
              {
                "text": "They laid Thee, O Christ, as a lifeless corpse in the nethermost pit, but by Thine own stripes, O Savior, Thou hast raised with Thyself the slain who slept forgotten in the tombs.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Beseech Thy Son and Lord, O pure Virgin, to grant deliverance from hostile circumstances to prisoners, and peace to those who put their trust in Thee.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "The former Adam, refusing to fast, tasted of the tree that brought death; but the Second, by being crucified, hath blotted out the former’s sin.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 1"
                }
              },
              {
                "text": "O Christ, impassible in Thine immaterial Godhead, Thou hast become passable and mortal in nature. Granting incorruption to those dead, raising them from the vaults of Hades.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "O Ye clouds, rain down the sweetness of joy upon us here on earth, for a Child hath been given, who is our God before all ages, incarnate from the Virgin Mary.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 1"
                }
              },
              {
                "text": "In the last times, the Most High hath become incarnate without seed from the Virgin, shining light upon my life and my flesh, vanquishing the gloominess of sin.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "6": {
          "irmos": {
            "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 6 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The just One is judged as a malefactor and nailed with the lawless ones to the Tree, by His own blood granting remission of sins to the guilty.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 1"
                }
              },
              {
                "text": "Of old, through one man, the first Adam, death entered the world; and through one Man, the Son of God, Resurrection hath been revealed.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Without knowing a man thou didst bring forth a child, O Virgin, yet thou remainest ever-virgin, revealing thereby, proof of the divinity of thy Son and God.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "Thou didst place the cherubim as guards of the Tree of life against fallen mankind; but upon seeing Thee they opened the gates; for Thou didst appear guiding the thief into paradise.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 1"
                }
              },
              {
                "text": "By the death of one man Hades hath been despoiled and overthrown, for the great wealth that Hades had amassed, Christ hath emptied on behalf of us all.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Human nature enslaved through sin found freedom through thee, O pure Lady; for like a lamb thy Son was sacrificed on behalf of all.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 1"
                }
              },
              {
                "text": "We all call upon thee the true Mother of God, to deliver thy servants who ever provoke thy Son to anger; for thou alone hast acquired great boldness towards Him.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "7": {
          "irmos": {
            "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 7 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Master through Thy compassion Thou couldest not bear to see mankind tyrannized by death, but, becoming man, Thou hast come and saved it by Thine own blood; O all-powerful One, Who art the blessed and supremely glorious God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 1"
                }
              },
              {
                "text": "O Christ, the gate-keepers of Hades, beholding Thee clothed in the robe of vengeance, trembled; for Thou didst come, O Master, to destroy the foolish tyrant; O all-powerful One, Who art the blessed and supremely glorious God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "We acknowledge thee as the Holy of Holies, O Virgin undefiled, Mother without bridegroom, as her who alone hath given birth to the immutable God; for by thy divine child-bearing thou hast become the source of incorruption for all the faithful.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "Of old disobedience condemned the forefather in Eden; but willingly Christ was condemned, absolving the charge against the transgressor: “O supremely divine and supremely glorious God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thou hast saved him who was wounded by the envious tongue of the manslayer in Eden; for Thou didst cure the bite by willingly incurring Thy Passion: “O supremely divine and supremely glorious God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 2"
                }
              },
              {
                "text": "Thou hast called me back to the light as once I walked in the shadow of death when Thou didst strike the shadowy darkness of Hades with the splendor of Thy Divinity: “O supremely divine and supremely glorious God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 3"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Jacob in the night, as if in a riddle, saw God incarnate from thee; and He hath clearly appeared from thee unto those who sing: “O supremely divine and supremely glorious God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 1"
                }
              },
              {
                "text": "He wrestleth with Jacob, foreshadowing the signs of the ineffable mingling that took place within thee, O pure one, through which the supremely divine and supremely glorious God of our fathers hath been willingly united with mankind.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 2"
                }
              },
              {
                "text": "Profane is he who doth not proclaim Thee, the Virgin’s Son, as one of the Trinity, nor crieth with unwavering mind and tongue: “O supremely divine and supremely glorious God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "8": {
          "irmos": {
            "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 8 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "When they saw the robe of Thy flesh, O Christ, made scarlet with Thine own blood, the ranks of angels stood trembling with awe as they beheld Thy great long-suffering and cried aloud: “Bless ye the Lord all ye works of the Lord.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 1"
                }
              },
              {
                "text": "O merciful One, by Thine arising Thou hast clothed my mortality in immortality; therefore O Christ, Thy chosen people rejoicing sing to Thee, and cry: “Death is truly swallowed up by Thy victory.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Without seed didst thou conceive and ineffably bear Him who though inseparable from the Father, dwelt in thy womb as both God and man, O most pure Birthgiver of God; therefore we all acknowledge thee as the salvation of us all.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
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
                "text": "O Lover of mankind, who art rich in mercy, Thou wast seen nailed to the Cross, and willingly buried and didst arise on the third day, redeeming all mortal mankind who singeth unto Thee in faith: “Let all creation hymn the Lord, and supremely exalt him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 1"
                }
              },
              {
                "text": "O Word of God, Thou didst descend to the nethermost regions of the earth to deliver from corruption him whom Thou didst fashion by Thy power, O my Christ, and when Thou didst make him incorruptible Thou didst make him a partaker in Thine eternal glory, that he may cry aloud: “Let all creation hymn the Lord and supremely exalt him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Through thee, He who is incomparable in goodness and power was seen on earth and lived amongst mortal mankind, to whom all we faithful sing as we cry: Let all creation, to whom life hath been granted, hymn the Lord, and supremely exalt Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 1"
                }
              },
              {
                "text": "Rightly proclaiming thee O pure one, we glorify thee O Theotokos, for thou didst bring forth incarnate, one of the Trinity, to whom together with the Father and the Spirit we sing: Let all creation hymn the Lord, and supremely exalt Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "After the Troparia from the Menaion for ODE VIII, we chant:"
        },
        "9": {
          "irmos": {
            "text": "The Son of the beginningless Father, God and Lord, * hath appeared to us incarnate of a virgin, * to enlighten those in darkness, * and to gather the dispersed; * therefore the all-hymned Theotokos do we magnify",
            "tier": 2,
            "src": {
              "file": "2-1.pdf",
              "locus": "Sunday Matins canon, Ode 9 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Savior, the thrice-blessed Tree of Thine immaculate Cross was planted on Calvary as if in paradise, and watered by the divine blood and water which flowed from Thy divine side, O Christ, it hath blossomed forth for us with life.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 1"
                }
              },
              {
                "text": "Being crucified, O all-powerful One, Thou hast laid low the mighty, exalting human nature which lay below in the strongholds of Hades, and placed it upon Thy Father’s throne: since Thou art coming again in that nature, we worship and magnify Thee.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "With a right Orthodox belief we the faithful hymn the triune Unity, the consubstantial Trinity, glorifying the inseparable nature, supremely divine triple Light, never-setting Radiance and only incorruptible One, that doth shed forth light upon us all.",
              "tier": 1,
              "src": {
                "file": "2-1.pdf",
                "locus": "Sunday Matins canon, Ode 9, resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "We bless the Father, Son and Holy Spirit, the Lord.",
              "sourceLabel": "Trinitarion"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Thou wast hung like a lamb, O Christ, In the midst of those condemned on the Cross on Calvary, Thy side pierced by a lance. In Thy goodness Thou hast granted life unto us who are fashioned of dust but who in faith honor Thy divine Resurrection.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Let us the faithful all worship God, who by His own death hath destroyed with might the power of death; for He hath raised with Him the dead of all ages, and to all doth He grant life and Resurrection.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 2"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "A staff of strength hath been given to our corrupt nature: the Word of God in thy womb, O pure one, and He hath raised it up after it had slid into the depths of Hades; therefore, O all-pure one, as the Mother of God we magnify thee.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 1"
                }
              },
              {
                "text": "O Master receive with compassion as an ambassador on our behalf, Thy Mother whom Thou hast chosen, and all things will be filled with Thine own goodness, that we may all magnify Thee as our Benefactor.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 2"
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
      "rubric": "On the Praises: “Let every breath ...,” 8 Stichera of the Resurrection, however, if the service from the Menaion is ‘feasted’ sing the first 4 Stichera from the Resurrection, and the last 4 from the Menaion, with the appointed verses.",
      "stichera": [
        {
          "text": "Everything that hath breath and every creature doth glorify Thee, O Lord, * for through Thy Cross Thou hast destroyed death * and thus shown the multitude of peoples Thy Resurrection from the dead, ** as Thou alone lovest mankind.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 1"
          }
        },
        {
          "text": "Let the Jews tell how the soldiers lost the King they were guarding. * Why then did the stone not guard the Rock of life? * Either let them give up the One who was buried or adore Him as risen, * exclaiming together with us: * “Glory to the multitude of Thy mercies: ** O Savior, glory be to Thee!”",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 2"
          }
        },
        {
          "text": "Rejoice O ye peoples and be glad! * for an angel sat upon the grave stone * and hath given us good tidings saying: * “Christ is risen from the dead * and hath filled the universe with sweet fragrance. ** Rejoice O ye peoples and be glad!”",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 3"
          }
        },
        {
          "text": "Before Thy conception, O Lord, * an angel brought the greeting “Rejoice” to the one full of grace: * at Thy Resurrection an angel rolled away the stone from Thy glorious grave. * The one revealed the signs of joy instead of sorrow; * the other instead of death hath proclaimed to us the Master, and Giver of life. * Wherefore we cry unto Thee, * “O Benefactor of all mankind, ** Lord, glory be to Thee!”",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 4"
          }
        },
        {
          "text": "The women sprinkled sweet spices * mingled with their tears upon Thy grave, * but their mouths were filled with joy as they exclaimed, ** “The Lord hath arisen!”",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 5"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "Let the nations and the peoples praise Christ our God, * who willingly endured the Cross for us and suffered three days in Hades; * let them worship His Resurrection from the dead, ** through which all the ends of the world have been enlightened.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 6"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "Thou wast crucified, and Thou wast buried, O Christ, * as Thou didst will; * Thou hast despoiled death as God and Master, ** granting the world eternal life and Thy great mercy.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 7"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "In truth, O wicked ones, * by sealing the tomb you have granted us a greater wonder; * for the guards having complete knowledge of that which took place were compelled by you to say * “while we slept the disciples came and stole him.” * And who would steal a corpse, especially one that is naked? * But He hath arisen by His own authority as God, * leaving behind His grave-clothes in the tomb. * Come, O ye Jews, * see that He did not burst the seals, * the One who hath trampled on death * and granted mankind life without end ** and His great mercy.",
          "tier": 2,
          "src": {
            "file": "2-1.pdf",
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
        "text": "Thou art most blessed, O Virgin Theotokos, * for through Him who took flesh from thee, Hades hath been captured, * Adam recalled, the curse slain, Eve set free, * death put to death, and we have been given life. * Therefore in praise we cry: ** Blessed art thou, O Christ our God, who hast been thus well-pleased, glory be to Thee.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Matins, Praises Both-now Theotokion"
        }
      }
    },
    "doxology_troparion": {
      "text": "Having risen from the tomb, and having burst the bonds of Hades, * Thou hast destroyed the sentence of death, O Lord, * delivering all from the snares of the enemy. * Manifesting Thyself to Thine apostles, Thou didst send them forth to preach; * and through them hast granted Thy peace to the world, ** O Thou Who alone art greatly merciful.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins, troparion after the Great Doxology"
      }
    }
  },
  "liturgy": {
    "beatitudes": {
      "rubric": "Typika and Beatitudes.",
      "troparia": [
        {
          "text": "We bring unto Thee the prayer of the thief, and we cry: Remember us, O Savior, in Thy kingdom.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 1"
          }
        },
        {
          "text": "We bring unto Thee, for the pardon of our offences, the Cross, which Thou didst accept for our sake, O Lover of mankind.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 2"
          }
        },
        {
          "text": "We worship Thy burial and Thine arising, O Master, through which Thou didst redeem the world from corruption, O Lover of mankind.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 3"
          }
        },
        {
          "text": "By Thy death, O Lord, death hath been swallowed up, and by Thy Resurrection, O Savior, Thou hast saved the world.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 4"
          }
        },
        {
          "text": "Those who slept in darkness, O Christ, seeing Thee the Light in the lowest depths of Hades, did arise.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 5"
          }
        },
        {
          "text": "On rising from the grave Thou didst meet the myrrh-bearers and ordered them to tell Thy disciples of Thine arising.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 6"
          }
        }
      ],
      "gloria": {
        "text": "Let us all now glorify the Father, worship the Son and praise with faith the Holy Spirit.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Gloria (Triadicon)"
        }
      },
      "theotokion": {
        "text": "Rejoice throne formed of fire; Rejoice Thou bride without bridegroom; Rejoice O Virgin who hath born God for mankind!",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Theotokion"
        },
        "sourceLabel": "Theotokion"
      }
    },
    "prokeimenon": {
      "tone": 2,
      "text": {
        "text": "The Lord is my strength and my song, * and He is become my salvation.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Liturgy prokeimenon"
        }
      },
      "verse": {
        "text": "With chastisement hath The Lord chastened me; but He hath not given me over unto death.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Sunday Liturgy prokeimenon verse"
        }
      }
    },
    "alleluia": {
      "tone": 2,
      "verses": [
        {
          "text": "The Lord hear thee in the day of affliction; the name of the God of Jacob defend thee.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy Alleluia"
          }
        },
        {
          "text": "O Lord, save the king and hearken unto us, in what day whatsoever we shall call upon Thee.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
            "locus": "Sunday Liturgy Alleluia verse 2"
          }
        }
      ]
    }
  },
  "vespers_weekday": {
    "sun": {
      "rubric": "On “Lord, I have, cried ...,” 3 Stichera of repentance, in Tone II: Spec. Mel.: “When from the Tree ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Possessing a wellspring of loving-kindness, * and ever pouring forth Thy mercy from the depths thereof, * O supremely good Father, * Son and Word of the Father, and Holy Spirit, * Thou uncreated Essence: * Accept our supplication and prayer, * and grant forgiveness unto all who abide in transgressions, * in that Thou art a compassionate God ** and lovest mankind.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "Having by nature unfathomable depths of compassion, * mercy and goodness; * we beseech Thee, O Christ our Savior, * falling down before Thee, crying, and ever calling out to Thee: * Grant unto Thy servants * remission of their many transgressions * and forgiveness of all things wherein they have offended, * in that Thou art a compassionate God ** and lovest mankind.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "As God and the Savior of all, * desiring to save us for whose sake Thou didst assume flesh, * and manifest Thyself as a man. * Do Thou Save us who bow down before Thy commandments, O Lover of mankind, * for Thou didst not come to save the righteous, * but through the grace of divine baptism, * Thou didst come to loose us who are bound by the chains * of the multitude of our sins and transgressions, ** in that Thou art a compassionate God and lovest mankind.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the incorporeal hosts, in the same melody:",
        "menaion_fallback": [
          {
            "text": "The thrones, cherubim and seraphim, * the dominions and powers, * and the honorable authorities, * and with them the angels, archangels and principalities, * together chant unceasing hymns unto Him * Who fashioned their incorruptible essence, * teaching all to worship in Trinity * the One Being Who is conjoined, equal in honor, ** and co-enthroned.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "label": "plain"
          },
          {
            "text": "The primary choirs * of the immaterial beings, * directly emitting the effulgent rays of the Godhead, * proclaim in their ranks * the divine radiance unto the rest; * and impart these to us through the law of love, * and likewise by dignity, * unto each according to his yearning ** for purity of heart.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "label": "plain"
          },
          {
            "text": "Lifting up the heart’s eye of our soul * within our souls, * we ever stretch forth the yearnings of our mind with divine love, * that, illumined by the rays emitted thereby, * we may escape the darkness of the passions, * hoping that we may stand with the angels * before the dread throne of the Creator, ** and be transformed from light to light.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "label": "plain"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "With thrice-holy voices, O most pure one, * the multitude of thy Son's angels hymn thee, * who art ever His fiery throne, * animate palace, and divine bridge * leading to Him from the earth. * And together with the Archangel Gabriel * they cry out to thee: * Rejoice, O joyous one, ** for thou hast given birth to the Source of joy!",
        "tier": 2,
        "src": {
          "file": "2-2.pdf",
          "locus": "Sunday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.sun",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VIII:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of compunction, in Tone II:",
        "items": [
          {
            "text": "Like the prodigal son I have sinned against Thee, O Savior. Accept me who am penitent, O Father. Have mercy on me, O God!",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain"
          },
          {
            "text": "With the cry of the publican I cry out to Thee, O Christ my Savior: Cleanse me as Thou didst him, and have mercy on me, O God!",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having hated the pleasures of the earth, the passion-bearers were granted the good things of heaven and became fellow citizens with the angels. By their supplications, O Lord, have mercy and save us.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "Rejoice, O Theotokos Mary, * thou indestructible and surpassingly holy temple; * as the prophet crieth out: ** Holy is thy temple, wondrous in righteousness!",
        "tier": 2,
        "src": {
          "file": "2-2.pdf",
          "locus": "Sunday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "mon": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone II: Spec. Mel.: “When from the Tree ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O Christ, Who alone art without sin. * Who alone art without guile, * Who alone art the Wellspring of goodness: * Behold mine oppression, behold my tribulation. * Wash all the wounds of my stripes, * and in Thy mercy save Thy servant, * that, having driven the clouds of slothfulness far from me, * I may glorify Thee, ** my supremely good Savior.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "Look, O my lowly soul! * Behold thy works, which are all-defiled! * Behold thy nakedness * and, alas, thine isolation! * For thou shalt be separated from God and the angels, * and cast into endless torment. * Come to thy senses, arise, make haste and cry aloud: * I have sinned, O Savior! ** Grant me forgiveness, and save me!",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "I have grievously defiled my body * and brought corruption upon my soul and heart * by my vile thoughts; * I have wounded all my senses, and blinded mine eyes, * have stopped up mine ears with filth, * and have defiled my tongue; and all that I have is shameful. * Wherefore, falling down before Thee, I cry aloud: * O Master Christ, I have sinned against Thee! ** I have sinned; forgive and save me!",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy forerunner, in the same melody:",
        "menaion_fallback": [
          {
            "text": "Hasten thou, I pray thee, * and rescue me from temptations, * O glorious Forerunner of the Lord; * for the bitter demons who wage war on me, * vainly hurl themselves against me, * seeking to capture the soul of thy servant like a helpless bird. * Leave me not utterly alone, O all-blessed one, * but let them understand ** that thou art my refuge.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "O all-holy offspring of a barren woman, * wondrous scion of the desert, * beauteous swallow, * right melodious nightingale, * golden dove: * Ever show forth my wretched soul * to be fruitful in good works, * that, bearing grain an hundredfold, O blessed one, ** it may bring divine praise unto thee.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Deliver me I pray thee, O Forerunner; * from everlasting fire, * from the darkness which is utterly devoid of light, * from necessity and tribulation, * from all affliction, and all oppression, * and by thy supplications show unto me, * who am condemned by my transgressions, * the portion of the saved, ** where the delight and joy of the saints is ineffable, O good one.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
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
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Tribulation, cruel assaults, and divers passions * bestorm my lowly soul, * O maiden who knewest not wedlock, * Mother of Christ God. * Show thyself to be my pilot on the sea of life, * and still the tempest that assails me, * steering me to the calm harbors * of repentance and coolness, ** for I have made recourse to thy divine protection.",
        "tier": 2,
        "src": {
          "file": "2-3.pdf",
          "locus": "Monday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of compunction, in Tone II:",
        "items": [
          {
            "text": "Like the prodigal son I have sinned against Thee, O Savior. Accept me who am penitent, O Father. Have mercy upon me, O God!",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain"
          },
          {
            "text": "With the cry of the publican I cry out to Thee, O Christ my Savior: Cleanse me as Thou didst him, and have mercy on me, O God!",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "When the holy martyrs pray for us and hymn Christ, all delusion ceaseth, and the race of mankind is saved by faith.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 3"
            },
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "All of my hope do I place on thee, * O Mother of God; ** keep me under thy protection.",
        "tier": 2,
        "src": {
          "file": "2-3.pdf",
          "locus": "Monday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "tue": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone II: Spec. Mel.: “When from the Tree ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "When Thou didst set upon the Cross, O Word, * the luminaries, not bearing to shine, dimmed their rays; * the earth quaked, and the rocks split asunder; * the majesty of the temple was rent in twain; * the graves opened, and the dead arose; * Hades released all who were below, * and the demons were vanquished; * and death was reckoned by all ** to be but sleep.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "When the good-hearted thief beheld Thee, * the fruitful Vine, O Christ, * he became a better thief * and yet more skilled, * for with a few words * he quite simply * stole the forgiveness of ancient offenses. * Let us all, then, make haste to emulate him, crying aloud: ** Remember us also, O Lover of mankind!",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "Truly Thy divine Cross * shineth like a star in the sky, O Christ, * burning up the demons, shedding light upon the faithful, * and casting shame upon the faces of those who crucified Thee. * By it Thou didst lead our first parents forth * from the slavery caused by the tree * which was the image of the Cross, * and in the desert didst cause Thy people ** to suck forth honey from the rock.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord: my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in the same melody:",
        "menaion_fallback": [
          {
            "text": "He Who in His loving-kindness * clothed Himself in our nature through thee * and underwent crucifixion and death for our sake, O Lady, * hath shown thee to be the intercessor for all mankind, * the great refuge of all, * the helper of all Christians. * Wherefore, unceasingly entreat Him, * that He send down upon all the cleansing of transgressions, ** O Bride of God.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Of old, beholding Him * Who was born from her womb * hanging upon the Tree as one condemned, * between two thieves, * the Virgin and Ewe-lamb said, exclaiming: * “O my Son and God, * strange is this awesome mystery to behold, * and none is able to fathom the depths of Thy wisdom. ** wherefore I hymn Thy long-suffering!”",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "label": "plain"
          },
          {
            "text": "“Where is the majesty of Thy countenance? * Where hath the beauty of Thy comeliness hidden itself, O my Son? * How is it that Thou, O God * Who in Thy goodness hast wrought ineffable things * and art beauteous in good things, * dost hang suspended upon the Tree, * inglorious and dishonored, bereft of form and beauty * for the sake of all mankind, O my Son?” ** thus cried out the most virtuous Virgin, groaning and weeping.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
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
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "The light of the sun and moon dimmed, * obscured by the noetic Light * Who hung naked upon the Cross; * for that which is lesser is ever vanquished by the greater, * and the lower giveth place to the higher. * “How then can it not be fitting * for perceptible radiance to hide itself before the radiant Christ?” * the most pure one asked the worthy bodies of light, ** when she gazed upon Thee.",
        "tier": 2,
        "src": {
          "file": "2-4.pdf",
          "locus": "Tuesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.tue",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone I:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone II:",
        "items": [
          {
            "text": "O Christ God my Savior, Who saved Peter in the sea, save me by the power of the Cross, and have mercy on me.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Those who ever enjoyed Thy gifts cried out, “Crucify Him!”; those who slew the righteous ones asked that a malefactor be given to them in place of the Benefactor. But Thou didst keep silence, O Christ, enduring their savagery, de- siring to suffer and thus save us, in that Thou lovest mankind.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "The choirs of the martyrs opposed the tyrants, saying: “We fight for the King of hosts! And even if ye have subjected us to fire and tortures, we will not reject the power of the Trinity!”",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 3"
            },
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "Having endured many pangs during the crucifixion of thy Son and God, * O most pure one, * thou didst groan, weeping and crying aloud: * “Woe is me, O my sweet Child! * How is it that thou sufferest unjustly, * desiring to deliver the mortal descendents of Adam?” * Wherefore, O most pure Virgin, * we entreat thee with faith: ** Render Him merciful unto us!",
        "tier": 2,
        "src": {
          "file": "2-4.pdf",
          "locus": "Tuesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "When from the Tree",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "wed": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the holy apostles, in Tone II: Spec. Mel.: “When from the Tree ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Like spiritual rivers * issuing forth separately from Eden, O wise ones, * ye have watered the whole earth * and, having ploughed it, and sown the preaching of salvation, * ye have reaped right fruitful grain, * the souls of the saved, * laying them up in the noetic granaries * like riches of great price, ** O disciples of the Lord.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "O ye luminaries of the noetic East, * free my heart, which is sorely distressed by the passions, * from the darkness of passionate pleasures, * O most radiant heralds of the Sun, * for ye announced unto all * Him Who hath banished the night of unbelief. * Wherefore entreat Him, * that He enlighten also our minds, ** in that ye were eyewitnesses unto Him.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "Bearing the saving Word * which was written by the Spirit * by the finger of the Father, * ye were truly shown to be * divinely inscribed tablets of the new grace, * animate scrolls and initiates of His mysteries; * wherefore, ye traversed all the ends of the earth, * manifesting the Orthodox Faith to all mankind ** and revealing the path which leadeth to the heavens.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "label": "plain",
            "spec_mel": "When from the Tree"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy hierarch Nicholas, the wonderworker, in the same melody:",
        "menaion_fallback": [
          {
            "text": "Having lived bodily in Myra, * thou wast truly revealed to be myrrh; * and, anointed with noetic myrrh, * O holy Nicholas, hierarch of Christ, * thou didst spread the sweet-smelling fragrance of immortality * upon those who with faith have recourse to thy protection, * releasing them from perils, * misfortunes and tribulations ** by thy supplications to the Lord, O father.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Held fast by a multitude of temptations, * surrounded by the threefold billows of life, * engulfed by the waves of evil circumstances, * and beset by griefs, * I place all my hope in thee, * O father Nicholas. * By thy prayers unto God our Master, * O blessed one, grant me remission ** of all mine evils.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Come, and with the light of grace * illumine me who am beset by the darkness * and the gloom of wicked thoughts * and the delusions of the demons, * for tempest-tossed by carnal passions, * I have been overcome by the law of sin; * for, thou art illumined with divine effulgence, * O right blessed Nicholas, ** and a light amid the world.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Like a great Sun, the Word, * Who is equal in honor * with the Father and the Spirit, * and Who in latter times shone forth upon the earth * through the divine Virgin maiden, * emitted you, O ye glorious apostles, * like rays illumining with the light of Faith all mankind * which languishes in the darkness of delusion, ** leading them unto Him with divine teachings.",
        "tier": 2,
        "src": {
          "file": "2-5.pdf",
          "locus": "Wednesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.wed",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone V:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the apostles, in Tone II:",
        "items": [
          {
            "text": "Throughout the whole world Thou didst magnify the names of Thy preeminent apostles, O Savior, for they learned heavenly things and imparted ineffable healings unto mortals. They who were fishermen healed diseases by their handkerchiefs alone; they who were Jews theologized the doctrines of grace. For their sake, O Thou Who art full of loving-kindness, grant us great mercy.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "We, who are ever assailed by the actions of the unrighteous, yet truly find refuge in Thee, Who art God, offer unto Thee the voice of Thy disciples, saying: Save us, O our Instructor, for we are perishing! And we pray: Show now to our enemies that Thou dost protect and save from misfortunes those who have recourse to the supplications of the apostles, overlooking their sins in Thy great goodness. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Great is the glory ye have acquired by faith; for ye not only vanquished the enemy in your sufferings, but in death ye drive away evil spirits and heal the infirm, O physicians of souls and bodies. Pray ye to the Lord, that our souls may find mercy.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "Like a fruitful olive tree, * the Virgin brought Thee forth as the Fruit of life, * bearing unto the world, ** the fruit of rich and great mercy.",
        "tier": 2,
        "src": {
          "file": "2-5.pdf",
          "locus": "Wednesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "thu": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone II: Spec. Mel.: “When from the Tree ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "When Thou wast nailed to the Cross, O Savior, * the sun beheld and dimmed its rays in fear of Thee, * and the veil of the temple * was rent in twain; * the earth quaked, and the stones likewise * split asunder with trembling, * unable to bear the sight of their Creator and God * willingly suffering unjustly upon the Tree, ** and reviled by men.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "Wholly cast down to the ground, * wholly wounded, * the most wicked serpent was brought low by a strange fall * when Thou, O Lover of mankind, * wast uplifted upon the Tree. * And Adam who before was condemned * was loosed from the curse and became saved. * Wherefore, we also pray: ** Save us all, O Compassionate One, and grant us Thy kingdom!",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "When the Cross was set up * and Thou wast pierced in the side with the spear, * O Sinless Savior, * the sun hid itself, unable to bear the sight; * and when Thou wast reviled, * the earth trembled, and the rocks split asunder in fear; * and all creation cried out to Thee: * Glory be to Thy crucifixion whereby Thou hast saved all, ** O Word and Lover of mankind!",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "When from the Tree"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in the same melody:",
        "menaion_fallback": [
          {
            "text": "Beholding Thee O Jesus, * lifted up upon the tree of the Cross, * she who knew not wedlock wept and said: * “O my sweet Child, wherefore hast Thou forsaken me * who alone gave Thee birth? * O unapproachable Light of the beginningless Father, * hasten Thou and glorify Thyself, * that those who glorify Thy divine sufferings ** may receive divine glory!”",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "When the Virgin beheld Life dying upon the Tree, * His side painfully pierced by a spear, * she exclaimed, weeping: * “O my Son and God, * how hath the ungrateful assembly rewarded Thee? * Woe is me! * My womb, which did not suffer the pangs of childbirth, * is wracked with pain, ** beholding Thee suffering for them, O Master!”",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "When the maiden who knew not a man * beheld her Son taken down from the Tree, * plainly laid upon the ground, * as a man bereft of breath, * she clasped Him to her bosom * and, kissing His mouth and eyes, * exclaimed to Him in wonder: * “How can I be unmoved when I see Thee now, ** bereft of voice, Who givest life unto all?”",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "label": "plain"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "When the unblemished ewe-lamb beheld her Lamb * willingly led as a man to the slaughter, * she said, weeping: * “Dost Thou now hasten to leave me childless who gave Thee birth O Christ,? * What is this that Thou hast done, O Redeemer of all? * Even so I will hymn and glorify Thine extreme goodness, * which is beyond understanding and all telling, ** O Lover of mankind!”",
        "tier": 2,
        "src": {
          "file": "2-6.pdf",
          "locus": "Thursday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.thu",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VI:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone II:",
        "items": [
          {
            "text": "O Christ God my Savior, Who saved Peter in the sea, save me by the power of the Cross, and have mercy on me.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "They who ever enjoyed Thy gifts cried aloud, “Crucify Him!”; they who slew the righteous ones asked that a malefactor be released unto them in place of the Benefactor. But Thou didst keep silence, O Christ, enduring their savagery, desiring to suffer and thus save us, in that Thou lovest mankind.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having hated the pleasures of life, the passion-bearers were deemed worthy of the good things of heaven and have made their abode together with the angels. By their prayers, O Lord, have mercy and save us.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "When iniquitous men raised Thee, the Life of all, up upon the Tree, O Savior, Thy pure and most immaculate Mother, standing forth and lamenting, exclaimed: “O my sweet Child, light of mine eyes, woe is me! How hast Thou suffered to be nailed to the Cross between two evildoers, O Thou Who hast suspended the earth upon the waters?”",
        "tier": 1,
        "src": {
          "file": "2-6.pdf",
          "locus": "Thursday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "fri": {
      "rubric": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone II: Spec. Mel.: “When from the Tree ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Giving your flesh over to wounds * and enduring the most bitter torments and a violent death, * O all-praised martyrs, * ye put the tyrants to shame * and truly abolished the worship of idols, * preaching Christ, the one God and Master, * before Whom ye stand crowned, * O glorious ones, ** together with the angelic hosts.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone II: Spec. Mel.: “When from the Tree ...”:"
          },
          {
            "text": "Giving your flesh over to wounds ...,",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 2 (incipit repeat of sticheron 1, §2.7)"
            },
            "label": "plain",
            "incipit_ref": "tone2.vespers_weekday.fri.lic.octoechos[0]",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone II: Spec. Mel.: “When from the Tree ...”:"
          },
          {
            "text": "Ye revealed yourselves to be * divine preachers of the Word * Who appeared on earth, and taught piety to all, * setting forth Orthodoxy in divine words, * whereby ye drove heresy far from the Church of Christ. * Wherefore O blessed ones, * ye ever dwell in the habitations of God, * as sacred ministers of the Trinity, ** ye lead thereto all mankind.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone II: Spec. Mel.: “When from the Tree ...”:"
          },
          {
            "text": "Having no desire * for earthly pleasure, * O ye passion-bearers, * ye were granted heavenly blessings, * and became fellow-citizens with the angels. * By their prayers, O Lord, * have mercy on us, ** and save us.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 4"
            },
            "label": "plain",
            "provenance_note": "Then these other Stichera, of the martyrs, in the same tone:"
          },
          {
            "text": "When the holy martyrs * pray for us and hymn Christ, * all deception ceaseth, * and the human race ** is saved by faith.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 5"
            },
            "label": "plain",
            "provenance_note": "Then these other Stichera, of the martyrs, in the same tone:"
          },
          {
            "text": "The choir of martyrs resisted the tyrants, saying: * “We war on behalf of the King of the powers on high; * though ye give us up to fire and torment, * we shall not deny ** the power of the Trinity.”",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
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
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ]
          },
          {
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 3"
            }
          },
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 4"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ]
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 6"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "The shadow of the law hath passed now that grace hath come, * for as the bush wrapped in flame was not consumed, * so didst thou bear a Child O Virgin * and remained a virgin; * in place of a pillar of fire, the Sun of righteousness hath dawned, * instead of Moses, Christ is come, ** the salvation of our souls.",
        "tier": 2,
        "src": {
          "file": "2-7.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera, in Tone II:",
        "items": [
          {
            "text": "O ye saints, great is the glory, ye have acquired through Faith. For by your sufferings ye not only vanquished the enemy; but even in death, O physicians of body and soul, ye drive out evil spirits and heal the infirm; Pray ye to the Lord, that our souls find mercy.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 1"
            },
            "label": "martyrs"
          },
          {
            "text": "Woe is me! How great a struggle the soul endureth at its parting from the body. Alas! How many tears will it then shed? Yet there will be none to have mercy on it. Raising its eyes to the angels, it supplicates in vain; stretching forth its hands to men, it finds none to help. Wherefore, my beloved brethren, reflecting on the shortness of our life, let us ask of Christ rest for the departed and great mercy for our souls.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 2"
            },
            "label": "for_the_reposed"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.departed_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "Save from misfortunes, * thy servants O Virgin Theotokos, * for after God * it is to thee that we flee, ** as to an impregnable rampart and protection.",
        "tier": 2,
        "src": {
          "file": "2-7.pdf",
          "locus": "Friday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
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
              "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Having taken our form from thee, the never-setting Sun manifestly showed thee forth as a noetic and most splendid heaven. Wherefore, deliver me from the stench of the passions, that with love I may hymn thee, the only Virgin Mother.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 1"
                },
                "label": "plain"
              },
              {
                "text": "I beseech thee, O Lady, who art the tongs which held the noetic Ember which hath purified human nature: Wash away the defilement of my manifold transgressions, and by thy supplications deliver me from defiling passions.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure Theotokos, who hast given birth to Christ, the Wellspring of mercy, and hast opened Eden to mankind: open unto me the portals of thy mercy, and grant me forgiveness offenses, O Sovereign Lady of the world.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Rend asunder the bonds of my transgressions, O Ever-virgin Lady, entreating thy Son and God; and cast down sin which oppresseth me, that, saved, I may ever hymn thee, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Thou hast established me on the rock of faith, * and my mouth hath been emboldened against mine enemies. * For my spirit rejoiceth when I sing: * There is none as holy as our God * and none more righteous than Thee, O Lord.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Dispel the gloom and darkness of my passions with the rays of thy supplications, and enlighten me, O most pure Lady who hast given birth to Christ, the never-setting Sun Who shone forth from the Sun before the morning-star.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "By thy birthgiving, O most pure one, thou hast restored the fallen and broken tabernacle of David thy father; wherefore, O Theotokos, raise me up, thy servant, who am crushed by transgressions and the passions.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Be thou a sword, O Virgin, driving away the sins and passions of my soul, and show me to be another garden of paradise, preserved by thee un- assailed, offering thee the flowers of the Spirit.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Stretching forth the hand of compassions, receive me, O Birthgiver of God, and from all condemnation rescue me who flee to thee, and falling down before thee, call upon thine aid.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Taking the leaven of human nature like dough, the Creator made it undefiled and holy; and washing me clean of the defilement of the passions, He hath cleansed me of the mire of my transgressions.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 1"
                },
                "label": "plain"
              },
              {
                "text": "With the remedy of thy prayers, as with bandages and oil, O pure Lady, heal now the stripes of my soul and the wounds of sin, in that thou hast given birth to the divine Healing of nature.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Loose thou the bonds of my passions, O Lady, and cleave asunder the chains of my sins with the sword of thy prayers, O thou who hast given birth to Christ Who granteth deliverance to those bound in Hades.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Cure thou the passions of my soul which most wretchedly shroud me in gloom, and enlighten my thoughts, O pure one, driving far away the darkness of the demons who oppress me and who lay traps for me all the day long.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Christ my Savior, the enlightenment of those lying in the darkness of sin. * I rise early to hymn Thee O King of Peace, * enlighten me with Thy radiance, * for I know no other God than Thee.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Thou hast delivered the world from the ancient curse, O Lady who hast given birth to Christ, the Blessing of the world. Deliver me from unseemly thoughts and from all grief, for thou alone art the joy of the faithful.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "A horde of demons surroundeth the city of my soul, striving mightily to take it captive. O most glorious Lady, thou city of the King of all, defend me by thy supplications as with entowered ramparts, and save me.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The cruel storm of the sedition of the spirits of evil doth trouble my mind. Quickly anticipate my need, and still it, O thou who hast given birth to Christ, the only almighty Helmsman of all creation.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Birthgiver of God, shine the light of repentance upon me who am enclosed in the darkness of perdition. Give a helping hand to me who lie prostrate, and by thy supplications raise me up, O pure one, that I may accomplish the judgments of God.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "As thou hast given birth to Life everlasting, O most pure one, when my soul departeth from my body, slay death by thy supplications.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The serpent who hates mankind pursues me, subjecting me to trials. O Lady, set him at naught, for thou hast given birth to Him Who crushed the heads of the serpents.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O thou who hast given birth to Christ our God, the Way of life, to the straight path direct me who walk with faltering steps.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Heal the sufferings of my soul and vanquish the perplexity of grief, O most pure one who hast given birth to God, for our salvation.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "The wise children did not adore the golden idol, * but went themselves into the flame and defied the pagan gods. * They prayed in the midst of the flame, * and an angel bedewed them saying: * ‘The prayer of your lips hath been heard’.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "The waves of the passions trouble my mind and shake my soul; yet, O Virgin who hast given birth to Him Who by His divine command restrained the raging sea, transport me to the tranquility of dispassion and halt the turmoil of my flesh.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Knowing thee to be the gate of the noetic East who hast appeared from heaven, O Virgin. I, thy servant, pray that through thee I might enter into the heavens. Wherefore, accept me, O Lady, and guide me by thy light.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Crucified on the Cross of His own will, Christ thy Son put the princes of darkness to shame and destroyed the corrupting power of death. Thereby, O most pure Lady, do thou slay the passion-plagued understanding of my flesh.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Cease not, O pure one, to pray to God Who was born from thee, on behalf of those who approach thee with faith and ask deliverance, O only helper of the world, for thou art the hope and help of the despairing and the aid of those who are ever tempest-tossed amid evils.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Disdaining the golden image, the thrice-blessed children, * beholding the immutable and living image of God, * chanted in the midst of the flame: * Let all existing creation hymn the Lord * and supremely exalt Him throughout all ages!",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "O Virgin, thou divinely made tabernacle of the Holy of holies, of Him Who set thee forth as the image of the ancient tabernacle, having the great High Priest in thy midst: Show my heart to be a holy tabernacle of the Most High: Christ, the King of all.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having borne, O Virgin, the divine ark and the tablets of the law: the most pure Word of God, Christ, thine uncircumscribable Son: by thy prayers, as with the finger of God, inscribe Him upon the surface of my soul.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As from a mountain the precious Stone hath been cut from thy womb, O most immaculate Lady, and as the only Almighty One He hath broken the pillars of all falsehood. Thereby do thou now destroy the images of the passions of my soul, having broken the jaws of the noetic foe.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "With the waters of life, O Virgin Theotokos, water thou my heart which hath been seared by the flame of sin, ever preserving me in compunction, who chant with fear: Let all existing creation hymn the Lord and supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Thee do we magnify, O blessed and all-pure Theotokos, * who through thy virginal womb ineffably brought forth * God incarnate, * the Luminary Who shone forth before the sun * and hath come to us in the flesh.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Thou didst shine forth Christ, the Sun of righteousness, O pure one, showing thyself to be a most radiant heaven. By thy supplications destroy the night of my passions, illumine my soul, and enlighten and make bright my heart.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Condemn and trample underfoot mine adversary, O Theotokos, and deliver me from his oppression; for thou hast given birth to the Good and Righteous One Who resteth in the bosom of the Godhead and hath condemned death.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "He Who as God formed the essence of the incorporeal ones became incarnate from thee, O Virgin maiden. Wherefore, by thy supplications deliver me, thy servant, from the evil circumstances and the carnal understanding of the passions of the flesh.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Thou hast done away with the grief of Eve, having given birth to the new Adam Who created the nature of the first Adam. Wherefore, erase also with the record of my transgressions, freeing me from perils, sorrows and the passions.",
                "tier": 1,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 4"
                },
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "As the wellspring of loving-kindness, O Theotokos, grant mercy unto us. Look upon the people who have sinned, and show forth, as ever, thy power; for, trusting in thee, we cry out to thee: Rejoice!’’, as once did Gabriel, the supreme commander of the incorporeal beings.",
          "tier": 1,
          "src": {
            "file": "2-2.pdf",
            "locus": "Sunday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., And the rest as usual. Dismissal."
    },
    "mon": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "With the Archangel Gabriel the Church offereth in hymnody an ever- flowering wreath of praise, which sprang forth through the Spirit unto thee, the Bride of God, O pure one, chanting “Rejoice!” and crowning thee with honor.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having cultivated Christ God, the life-bearing vine, O all-hymned Mother of God, thou wast revealed to be the holy ground of the Father in a manner transcending understanding, watering the whole world with life-bearing drink, O pure one, full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure one, thou hast given birth to the God of the whole world which is cruelly battered and engulfed by the waves of transgressions, the Lord of us all, Christ the Helmsman, Who faithfully pilots us to the haven of salvation.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "We all faithfully entreat thee, O Mary, Mother of God, thou refuge and city of salvation, and we fervently make supplication unto thee: Accept the entreaties of us thy servants, and release us all from the condemnation of transgressions.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "The beguilement of Eve was the beginning of the estrangement between God and mortals; but the holy Theotokos hath led us back to God.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 1"
                },
                "label": "plain"
              },
              {
                "text": "The glorious Joachim begat thee, the treasury of Life, for the world, O all- hymned one, and he rejoiceth in thee, his goodly offspring, for thou didst come as the expectation of thy barren parents.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "From Anna hath joy blossomed forth for our race. Thou hast given birth to the King as a Virgin. And women, released from the curse by thee, rejoice in thy birthgiving.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 3"
                },
                "label": "glory"
              },
              {
                "text": "The bush on Sinai prefigured Thy most glorious birthgiving, O Virgin; for, receiving the fire of the Godhead within thy womb, O pure one, thou wast not consumed.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "I have heard report O Lord, * of Thy glorious dispensation, * and I have glorified, Thine unapproachable power, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "In a godly manner Jacob foresaw thee as a ladder, O Virgin, upon whose summit God established Himself.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Through thee, O most pure one, was the descent of the angels revealed beforehand to signify the advent of the Word to us.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Blessed is thy womb and thy breasts, O all-hymned Virgin; for, for their sake, we have all found Life.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "With Orthodox voices we mystically hymn thee, O Mother of God, for by thy supplications the Church is preserved.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Christ my Savior, the enlightenment of those lying in the darkness of sin. * I rise early to hymn Thee O King of Peace, * enlighten me with Thy radiance, * for I know no other God than Thee.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "We hymn thee, O Mary Theotokos, as one more honorable than the ark of the law, for thou, O all-hymned one, didst bear the Creator and God of all like the tablets of the law.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "We glorify thee as the throne of God the Word, sitting upon which, God hath revealed Himself as a man; and thou hast become more exalted than the cherubim.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Thou hast released the whole race of mankind from bitter bondage, O Virgin, and hast honored the nature of women with the freedom of Christ in thy divine birthgiving.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Thou hast given birth to the Son, O Virgin, and women manifestly vanquish the enemy; wherefore, holding fast to virginity, they hasten to thee, O maiden.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "With the angel we faithfully cry out to thee: Rejoice, O pure virgin, thou joy of the world! Grant us thy joy, and do away with our grief!",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Unto us who with faith praise thee, the dwelling-place of joy which cannot be taken away, O Ever-virgin Mother, grant thy joy and do away with our grief.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "In thy divine glory thou hast been revealed to be a heaven more exalted than the heavens, O Bride of God; for making His abode within thee, our God hath appeared unto me.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Now doth the nature of women rejoice! Now doth grief cease to be and joy hath blossomed forth! For Mary hath given birth to joy: Christ, our God and Savior.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "The fleece of Gideon prefigured the descent of the Word of God upon thee, O pure one, for thou didst accept conception like dew, O incorrupt Virgin. Wherefore, we all cry out to thee: Blessed is the Fruit of thy womb, O pure one.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 3
                  }
                ],
                "label": "plain"
              },
              {
                "text": "New and awesome, full of faith and wondrous are thy mysteries, O Mary, Mother of Christ our God; for through thee have we all been reconciled with God the Master; and we chant now with the angels: Blessed is the Fruit of thy womb, O pure one.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Of old Gideon manifestly foretold thy divine birthgiving, O pure one, setting forth a bowl full of water from the wringing out of the fleece; for God dwelt wholly within thee, O most pure one. Blessed is the Fruit of thy womb.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In giving birth to the God and Savior of all, O Mary, thou didst become the correction of the despairing, the restoration of sinners, the hope of the hopeless and the help of those who chant: Blessed is the Fruit of thy womb, O pure one.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "God Who descended into the fiery furnace * with the Hebrew children, * and transformed the flame into dew, * do ye works hymn, * and supremely exalt as Lord throughout all ages.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Thou hast been revealed to be a new garden of paradise, containing the tree of Life, not that of death, O most holy Theotokos; for like a garden thou didst seedlessly produce the Lord, through Whom we all partake of immortal life.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The whole Church of Christ doth hymn thy birthgiving, O Theotokos, for all who flee to thee with love, sinners and poor folk alike, are saved; for Christ hath come to earth to save mankind.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Through thee, O Virgin Theotokos, thy first mother hath been freed from condemnation. And, lo! women now suffer for Christ, and female nature rejoiceth, as Thecla, the first martyred woman, doth exclaim.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "No one hath perished who in an Orthodox manner hath acquired the hope of faith in thee, O pure Virgin Mother of God; but he is cast aside who with jealousy refuses to venerate thy depicted image.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Thee do we magnify, O blessed and all-pure Theotokos, * who through thy virginal womb ineffably brought forth * God incarnate, * the Luminary Who shone forth before the sun * and hath come to us in the flesh.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Monday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "O most holy Virgin, incline thine ear unto me who with faith hymn thy birthgiving with words of praise; and, accepting the hymnody of my lips like the widow’s gift, ask for the forgiveness of my sins.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thy beauty shineth forth, emitting the radiance of purity, O pure one; and thy birthgiving shineth even more than these, for God, the Creator of the sun and all creation, hath been born from thee. Wherefore, we all magnify thee.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Divinely chanting in hymns with a voice of praise, O Theotokos, we beseech thee, the light of purity, the staff of virginity and Mother of God: establish us in virginity and preserve us in purity.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In that thou hadst preserved thy body and soul undefiled for God, O pure one, Christ the King desired thy beauty and showed thee to be the Mother of His incarnation, accomplishing my salvation, O most glorious Mary.",
                "tier": 1,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "Looking upon the grievous slothfulness of my soul and the utter weakness of my heart, O Mother of God, heal me by thy supplications and grant me the portion of the saved, delivering me from darkness and torment, in that thou alone art my hope and consolation.",
          "tier": 1,
          "src": {
            "file": "2-3.pdf",
            "locus": "Monday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., And the rest as usual. Dismissal."
    },
    "tue": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "The discourse granted me is in nowise capable of hymnody, O all-pure one, for the darkness of my sins doth cover me; yet accept my limitations, O Birthgiver of God.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I finally flee from my countless sins to thy protection, O most pure one. Render our God and Master easily reconciled with me, and save me, O pure one.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art my fervent mercy-seat, Lady, and, fleeing to thee, I am saved and obtain salvation of soul; for thou canst do all things, in that thou art the Mother of the God of all.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 3"
                },
                "label": "glory"
              },
              {
                "text": "The deceiver of souls hath lured me into the pit of destruction; but stretch forth to me thy mighty hand, O Virgin Theotokos, and quickly lead me up to the light.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having fallen among many thieves, wretch that I am, I have been stripped naked, wounded and left for dead; but disdain me not, O pure Theotokos.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The serpent who wrought deception through the tree stripped Adam naked, and hath now easily made my soul captive. Yet I entreat thee, O Lady: Have pity on me!",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I now bring my secret deeds before thee, my true intercessor and protection, that thy Son may not denounce me with them at His righteous judgment.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Have mercy, O pure one, have mercy, for we derive no salvation from our deeds. Wherefore, with ardent faith we cry out to thee: Have mercy upon thy servants!",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Disdain me not who am incurably ill and infirm, O Lady; but grant unto me the oil of thy goodness, O Virgin, and enrich me with thoughts of thee, as with incorruptible gold from God.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I have been stripped bare of all good works and lie arrayed in evils more than all who fell of old; but do thou now adorn me with good deeds and deliver me from wickedness, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "In word and with my will, I have surpassed the harlot in fornication and the publican in usury; yet before the end grant that I may acquire the repentance of both, O Lady.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "I have dwelt in the desert of grief and have withdrawn from thee, O Birthgiver of God. Who shall give me wings, that I may fly and go to thee, my hope, who dost save me from faintheartedness, wretch that I am?",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "In that the never-waning Light shone forth from thy womb upon those on earth, O Lady, illumine my fetid soul, and drive all darkness from my heart, O pure one.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The cruel night of my wicked and evil deeds covereth me, O Lady; yet I cry out to thee: Guide me to the divine light of thy Son and Master, O all-hymned one.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure one, accept me as thy Son, the Creator of all, accepted the prodigal son, for I cry out with him: I have truly sinned! Save me, O Lady!",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In that thou art merciful, O most pure one, heal thou my heart, which hath been wounded by the assaults of the evil one, for thou hast ineffably given birth to Him Who was wounded in the flesh upon the Cross.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "I have fallen into the pit of sin and, held fast by fear, I cannot lift my gaze to our unforgettable God; yet I cast myself down before thee, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "By thine omnipotent supplication, O Virgin Theotokos, pilot my heart, which hath been grievously covered by the waves of mine incomprehensible transgressions.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "In that thou art my confirmation, O Lady, grant that I may behold the beauty of thy glory when my soul shall be separated from my flesh, that I may thus know remission.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "By thy prayers to God deliver thy servants, who have recourse to thee with faith, from perils, misfortunes and sorrows, O holy Lady.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Gaping wide, the enemy now strives to devour me, for from every quarter he brings temptations and snares to bear upon me, wholly cutting off my progress; yet anticipating my need, O Virgin Mother, deliver me from his wicked assaults.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The adversary defiles and vexes my senses and mind, striving to drag me down into the pit of despair; wherefore, I cry out to thee alone: O Bride of God, my refuge, deliver me from the hands of the evil one!",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O my Christ Who art Thyself the Word, Who of old delivered the three youths from the furnace, by the supplications of Thy Mother who knew not wedlock, bedew me and deliver me from the flame which I have enkindled by my boundless evil deeds.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Coming upon my material heart, the corrupter hath slain it; but by thy divine power cause rain to fall upon me, O Mother who knewest not wedlock, and grant that I may vanquish him, that I may cry out to thee with faith: Blessed art thou who hast given birth to God in the flesh.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "God Who descended into the fiery furnace * with the Hebrew children, * and transformed the flame into dew, * do ye works hymn, * and supremely exalt as Lord throughout all ages.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Cruelly buried beneath my many evils and weighed down by the multitude of sins, I dare not in anywise lift up mine eyes to heaven, but cry out to thee: Have mercy upon me who have fallen, O only Theotokos!",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I have fallen under the wrath of thy Son and God, O pure one. Deliver me, and in the hour when He shall conduct the trial, be thou my helper, O most pure one, and deliver me from standing with the goats on the left side.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O maiden Bride of God, raise me up who have been spiritually slain by my countless sins, and by thy supplication deliver me from all the deception of the soul-corrupting enemy and murderer.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "How hast thou besmirched thy pristine beauty with evil, O my incorrigible and wicked soul? How hast thou broken all thy promises to thy Creator and accepted evils? Yet go thou and hasten with piety to the Theotokos.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "God the Word, God of God, * Who by ineffable wisdom came to create Adam anew * after his grievous fall to corruption through eating * and Who took flesh beyond all telling from the Holy Virgin for our sake, * Him we faithful with one accord magnify in song.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "I have truly defiled my senses with grievous actions and am wholly filled with shameful deeds; but cleanse me, O most pure one, asking that I be granted time for goodly compunction, that I may unceasingly magnify thee.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "When the hidden deeds of everyone shall be revealed, O Theotokos, be my justification, since thou truly hast the power to do so, and deliver me from darkness, that by thy prayers I may dwell in the land of light, where there is ineffable joy.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I beseech Thee, O Word: Before Thy final coming grant me fervent repentance, tearful compunction, chastity and humility, divine love, and a place in Thy flock, through the prayers of her who gave birth to Thee.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Virgin who dost surpass all noetic and material beings in glory and honor, except for God, disdain me not who have surpassed in transgressions all people, past and present, who have sinned on the earth; and by thy prayer save me.",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "We magnify thee, O Theotokos, crying aloud: * Thou art the un-burnt bush, * wherein Moses beheld as a flame ** the Fire of the Divinity.",
          "tier": 2,
          "src": {
            "file": "2-4.pdf",
            "locus": "Tuesday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and prostration. Trisagion through Our Father ..., And the rest as usual. Dismissal."
    },
    "wed": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "From cruel misfortunes, infirmities and transgressions, O most pure one, do thou now save me who with my soul and mouth piously confess thee to be the Theotokos.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "We have come to know the whole depth of the grace which lieth within thee; wherefore, fleeing earnestly to thy divine protection, O Theotokos, we are saved.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Entreat Him Who became incarnate from thy most pure and precious blood, O most pure one, on behalf of us who hymn thee, that we may be delivered from transgressions and bitter pain.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "All of us, the faithful, have acquired thee as our refuge, confirmation and joy, the salvation of our souls, our hope and bulwark, O thou who art full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "By thy supplications, O pure one, render God, to Whom thou hast given birth, easily reconciled with thy servants, who have recourse to thy protection and worship thy birthgiving with faith.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O all-hymned Virgin, hearken unto my prayers, which issue forth from the depths of my heart, and which I offer unto thee; and save me from sufferings and perils.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Direct my whole life, O Virgin, my hope and intercessor, delivering me from temptations and the visitation of the needs of life, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In that thou didst bear the hypostatic Wisdom of God in thine arms, O Mother of God, pray thou that we be delivered from ignorance and error.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "I have heard report O Lord, * of Thy glorious dispensation, * and I have glorified, Thine unapproachable power, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O Lady who hast given birth to God, grant me release from the wounds of my soul and the defilements of the flesh.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With faith and hope, O Virgin, make me steadfast, who have been defiled by the passions, evil thoughts and the threefold waves of life.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "By thy supplications deliver me from the visitation of tempest and tribulations, O only all-hymned Mother of God.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Rescue me who am battered by the waves of life, O Virgin, guiding me to thy harbor.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Having thee as an invincible weapon against the divers temptations of the enemy, we who acknowledge thee to be the pure Theotokos are manifestly delivered from all affliction.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 1"
                },
                "label": "plain"
              },
              {
                "text": "More exalted than the cherubim, thou gavest birth to the fullness of the law: the only-begotten Son, God the Word incarnate. Him do thou beseech on behalf of thy servants.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 2"
                },
                "label": "plain"
              },
              {
                "text": "As thou didst bear the Creator of all in thine arms, O pure one, by thine intercessions render Him easily reconciled with us who now flee to thee with all our heart.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "In oppression and pain of soul I offer my supplication unto thee, wretch that I am: O thou who alone hast given birth to the Word, the Source of compassions, take pity, and save me!",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "I know thee to be the haven of salvation, O Lady, and sailing the sea of life, which is full of great grief, I cry out to thee: Be thou the helmsman of my soul!",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "I have been stripped bare of the vesture of chastity and am greatly afflicted; yet grant me a robe of joy, O Ever-virgin Mother who hast given birth to God.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Glory..., I have fallen away from a pure life and live in slothfulness, beguiled by the passions; yet raise me up, O blessed Lady, bringing me back to the precepts of thy Son.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Grant unto me thy mercy, O Theotokos who hast given birth to the supremely merciful Word Who by His own blood hath delivered mankind from corruption.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "He Who became incarnate from thee, O Birthgiver of God, and was nailed to the Cross hath rent asunder the record of Adam. Him do thou now beseech, O Virgin, that they may be delivered from all evil who cry out with faith: Blessed art thou who hast given birth to God in the flesh!",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Lady, thou art the goodly hope and helper of the faithful; and we now pray to thee, that thou grant an abyss of mercy unto all who set their hope on thee and cry out to thee: Blessed art thou who hast given birth to God in the flesh!",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Beset by the cruel darkness of life, I have found no-one to share my suffering and pain. O Virgin, by thy radiance loose thou the darkness of transgressions and illumine me, that I may hymn thee: Blessed art thou who hast given birth to God in the flesh!",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Having been clothed through baptism in the beautiful robe of the saving commandments, I have sullied it with slothfulness, wretch that I am; and I now flee to thee, O Virgin, asking that through thee I may be clothed again in the vesture of salvation.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "God Who descended into the fiery furnace * with the Hebrew children, * and transformed the flame into dew, * do ye works hymn, * and supremely exalt as Lord throughout all ages.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "My mind now faileth, having fallen into the abyss of dishonor, for I have been beset from every quarter by divers evils; yet do thou, O Virgin, heal me, clothing me in the light of dispassion.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having acquired thee through faith as a steadfast tower and foundation of strength, a protector and helper, O most pure one, we are now saved, hymning thine Offspring and supremely exalting Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Theotokos, we know thee as a ray and wellspring of immortality, for thou hast given birth to the Word of the immortal Father, Who delivereth from death all who supremely exalt Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O pure one, thou dost ever pour forth streams of healings upon us, the faithful, and taking abundant grace there-from, O pure one, we hymn thine Offspring and supremely exalt Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "God the Word, God of God, * Who by ineffable wisdom came to create Adam anew * after his grievous fall to corruption through eating * and Who took flesh beyond all telling from the Holy Virgin for our sake, * Him we faithful with one accord magnify in song.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "O maiden blessed by God, I have earnestly placed all my hope in thee: Save me, O Mother of the true Life, and pray thou, O pure one, that I who with faith and love magnify thee with hymns may be filled with everlasting sustenance.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 3
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Virgin who wast revealed to be the portal of the divine Light, by thine immaterial light and radiance illumine the darkness of my soul, and by thy mediations grant that I may be delivered from eternal fire, that I may unceasingly magnify thee.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Looking upon those sick in soul and body and cast into cruel sufferings, O Lady, and healing them in thy compassion, grant release to those who are now troubled by grief, that they may magnify thee with faith and love.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "The Son Whom the paternal Father begat from Himself made His abode within thy womb, becoming a perfect man, O Mother of God, and hath shown thee forth as a wellspring of grace for us who worship thine ineffable birthgiving with faith.",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "By thy prayers, O pure Ever-virgin, grant me divine entry, and, having broken asunder the bonds of my cruel passions, free me from the flame which is to come.",
          "tier": 1,
          "src": {
            "file": "2-5.pdf",
            "locus": "Wednesday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet . ...,” and a prostration. Trisagion through Our Father ..., And the rest as usual. Dismissal."
    },
    "thu": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "God chose thee as beauteous, all-comely, immaculate among women, and made His abode within thine immaculate womb. Him do thou beseech, O all- immaculate one, that He deliver all who hymn thee from the disgrace of sins.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "According to the psalm, thou dost stand as Queen at the right hand of the King Who shone forth from thy womb, O pure one. Him do thou beseech, O all- immaculate one, that on the day of retribution He sets me to stand on the right side.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O thou who hast given birth to the Rain of heaven, thou hast renewed the nature of man which hath become dry because of unseemly deeds; wherefore, I pray thee: Show forth the dry furrows of my soul to be fertile, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "We who were slain by the tree of knowledge have been called to life everlasting by Christ God, the Tree of life, Who blossomed forth from thee, O pure one, in a manner transcending understanding. Entreat Him with boldness, that our souls be saved.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "The desert of the barren Church of the nations * blossomed like a lily * at Thy coming, O Lord, * therein hath my heart been established.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Issuing forth from thy womb, O most pure one, the Creator clothed Himself in me, a man, granting the raiment of incorruption to me who have been stripped naked by my manifold evil deeds.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast given birth to the supremely honored Word of God, O Lady. Him do thou earnestly beseech, that He have pity on my lowly soul, which is beset by the indignity of pleasures.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Heal thou the wounds of my soul, O most pure one, and with thine effective therapy cure my lowly heart, which hath been afflicted by the venom of the serpent.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "As thou hast boldness before thy Son, O Lady and Mother, beg help for thine oppressed people and cast down the arrogance of the iniquitous.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "From a Virgin didst Thou come forth, not as an ambassador, * nor as an angel, * but the very Lord Himself incarnate, * and didst save me, the whole man; * wherefore I cry unto Thee: * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Let fall upon me a drop of compunction, O Lady, easing all the burning heat of my heart and dispelling my grief and the buffeting assaults.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Disdain me not, who has been pierced by the sword of pleasure and lie in my wounds, O most pure one, but heal me with the spear and blood of thy crucified Son and our God.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O thou who hast been enriched by all the edification of the Master, grant divine grace unto me who am grievously impoverished, that I may magnify thee as my good helper, O all-immaculate one.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Christ, the Effulgence of the Father, shone forth from thy womb, O maiden who knewest not wedlock, and, crucified, hath enlightened the whole world, destroying the darkness of the demons.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Christ God Thou art a mediator between God and man; * for by Thee, O Master, * we have been led from the night of ignorance, * to Thy Father, the Source of light.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure one who hast given birth to the Way of life, direct me not to the narrow path, for unknowingly I have stumbled headlong into a trackless waste and the brink of grievous falls.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having mindlessly estranged myself from the understanding of God, I have lived prodigally, lost in the far country of the passions; yet, having brought me back, O pure Virgin, save me by thy consolation.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With thy living waters give drink to thy servant who burns with the flame of sin and am consumed by the assaults of the demons, O most pure Virgin Mother.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Lo! thou didst have Christ God in thy womb in a manner past all telling, O most pure Theotokos, as Isaiah proclaimed, and thou hast given birth to Him supra-naturally, O Birthgiver of God.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Let me not be shown to be a delight for the demons at the judgment which is to come, O Lady, but directing upon me a gaze of reconciliation, entreat the Judge, thy Son.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having driven Thee away with my wicked thoughts and mine impure acts, O Lord, I bring before Thee Thy Mother to make supplication. Have pity and save me!",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "From condemnation, O Lady, deliver me who have condemned myself through my transgressions, for thou hast given birth to the Judge and God of all, O all-hymned one.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Beseech Jesus the Savior to Whom thou hast given birth supra- naturally in the flesh, O most pure Virgin Mother, that thy servants be delivered from misfortunes.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "As thou art my strength and song, my salvation, firm help and invincible bulwark, O Lady, vanquish the demons which war against me, ever seeking to slay me.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Giving flesh to God from thy virginal blood, O Virgin, thou hast deified mankind; wherefore, I pray thee: by thy prayers deliver me, who have been defiled by the passions and corrupted by the wiles of the enemy.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The furnace prefigured thy birthgiving, O all-immaculate one, for it did not consume the children, just as the unbearable Fire did not consume thy womb. Wherefore, we entreat thee: Deliver thy servants from eternal fire.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Remaining a virgin, thou alone didst show forth a most pure conception and an incorrupt birthgiving, for thou didst conceive Christ, Who is God over all and Who became a man, O pure one, for the salvation and deliverance of the faithful.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful,",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "who chant: * Bless ye the Lord, all ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Be zealous for good works, O my soul, withdrawing from evils with care for godly acts, having the Theotokos praying for thee, the unashamed helper of all, in that she is merciful and loving.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou hast broken the bonds of men’s ancient condemnation; wherefore, I beseech thee, O Birthgiver of God: Loose thou all the evil bonds of my heart, binding me with the divine love of the Creator, O most pure one.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having given birth to the Effulgence of the Father’s glory, O Theotokos, illumine my heart, which hath become downcast because of the infamy of my transgressions, and show me forth to share in everlasting glory, that I may glorify thee with faith.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Through thee, O Birthgiver of God, hath the true Sun of righteousness been revealed to us, illumining all things with rays of divinity. Him, the Most High incarnate, do we hymn.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 5"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "The Son of the beginningless Father, God and Lord, * hath appeared to us incarnate of a virgin, * to enlighten those in darkness, * and to gather the dispersed; * therefore the all-hymned Theotokos do we magnify",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Having tasted of the food mingled with death, Adam was seized by bitterness through the tree; but thy Son Who was nailed to the Tree, O most pure one, hath poured forth the sweetness of immortality. Wherefore, we praise thee*",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art the Queen, having in a manner past all telling given birth to Christ, the King and Lord, Who hath destroyed the realm of death. Him do thou earnestly entreat, O maiden, that He grant the kingdom on high unto all who honor thee.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As thou art the Mother of the good One and art wholly good, bless thou my lowly heart, which is oppressed by attacks of pleasure, and lead me through the portals of good unto repentance.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Thou Who wast suspended aloft, dead, upon the Cross hast therewith slain the serpent. Wherefore, I cry out to Thee: Have mercy, O Word, upon my soul which hath been slain by my wicked deeds, and give life to it by the prayers of her who gave birth to Thee.",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "Thy Virgin Mother, beholding Thee, O Christ, stretched out dead upon the Tree, said, weeping bitterly: “O my Son, what is this strange mystery? How is it that Thou Who grantest life everlasting unto all dost of Thine own will die a shameful death upon the Cross?”",
          "tier": 1,
          "src": {
            "file": "2-6.pdf",
            "locus": "Thursday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ],
          "spec_mel": "As thou art full of loving-kindness"
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., And the rest as usual."
    },
    "fri": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Thou art the well-spring of Life, O pure Virgin Mother, having given birth to the Source, Lord and Life of all, bedewing those who glorify thee with faith.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "We who confess thee to be the Theotokos, O most pure one, have thee as an intercessor and a firm foundation which enricheth us, and we are saved from the threefold billows of life, O all-immaculate Virgin.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As thou hast given birth to the Wellspring of life, O maiden, heal me who am wounded by the passions, and rescue me from the eternal fire, O thou who alone art full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "glory"
              },
              {
                "text": "As the refuge of the faithful and the mighty help of those who have recourse unto thee, O Ever-virgin, save us from all want, and the harm of the adversary.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "O Virgin, we truly call thee the golden censer, the jar of the Manna, the divine mountain, the all-comely palace.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As thou art the temple and sacred dwelling-place of the Word, O Theotokos, be thou ever the cleansing of my transgressions, O most holy Virgin.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Neither the tongue of mortal man nor the mind of the incorporeal beings can describe thy birthgiving; for in a manner transcending nature and understanding, O Theotokos, thou hast given birth to the Creator.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Virgin Birthgiver of God, be thou the confirmation, refuge and protection of those who have recourse to thee with faith and confess thee to be the Mother of God.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "I have heard report O Lord, * of Thy glorious dispensation, * and I have glorified, Thine unapproachable power, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "We Christians acquired thee have as our great help, O Theotokos. Rescue us from cruel misfortunes.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Lady who knewest not wedlock, having conceived God in thy womb, deliver us all from perils and grief.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "We, the faithful, have acquired thee as an invincible rampart and a mighty hope amid dangers, O pure one.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Having acquired thy supplication as a firm foundation, O Lady, we are delivered from divers sorrows.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O Birthgiver of God, we, the faithful, know the Son Who was incarnate and born from thee without seed to be truly God and man by nature. Wherefore, we glorify thee.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Ever fleeing with faith beneath thy protection and help. O most pure Theotokos, we, the faithful, are delivered by thee from every grievous invasion.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most pure Virgin, deliver us from perils, the tempest of evil thoughts, from all wrath and every sin, from famine and plague, and from everlasting torment.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "As thou art our helper and salvation, the hope of Christians, O Lady, save those who ever hymn thee with love and faith, O all-hymned Virgin.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "He Who made all things by His will, having willingly made His abode within the womb of her who knew not wedlock, hath enriched with incorruption those afflicted by corruption, in that He is full of tender compassion.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Thou art more exalted and holy than the hosts on high, O all-immaculate one, having supra-naturally contained the infinite Word within thy womb.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Lady, to the paths of repentance guide me who am lost on the path of life and have often wandered into sins as into trackless wastes.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Disdain not the entreaties of thy servants who place their hope in thee, O pure one, for thou art the refuge and cleansing of our souls, O Lady.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ],
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "By the power of the Most Holy Spirit thou hast given flesh to the noetic Son Who is of the same nature as the Father, O Lady full of the grace of God. Wherefore, unceasingly entreat Him, that He have pity on those who chant: Blessed art thou who hast given birth to God in the flesh!",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure Virgin who knewest not wedlock, O holy and blessed one, thou setting aright of the fallen and deliverance of sinners: Save me, O save me, prodigal though I am, for I cry out to thy Son: Blessed art thou who hast given birth to God in the flesh!",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 3
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As thou art a sure haven, an awesome intercessor, an impregnable bulwark for those who languish in want and are tempest-tossed in grief, O Theotokos, by thy supplications to thy Son save thy servants from the many and varied temptations.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Birthgiver of God, who art the sole hope and help of the faithful, hasten thou to help thy servants who are overwhelmed by sorrows, who are thus at a loss amid their pain, and flee to thee with love of soul.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "God Who descended into the fiery furnace * with the Hebrew children, * and transformed the flame into dew, * do ye works hymn, * and supremely exalt as Lord throughout all ages.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "As thou hast given birth to the Wellspring of life, the Water of life, O Virgin Theotokos, bedew my soul, which is being laid waste by the flame of sin, that I may glorify thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having given birth to Christ our God, the Author of life, O pure and blessed Virgin Lady, thou alone hast raised up those slain and cast down into the dust of death and corruption.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure Lady, deliver me from everlasting fire and condemnation, and rescue me from corrupt men who seek to trip my heels, that I may ever bless thee whom all creation calls blessed in a divine manner.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "Through thee, O pure Virgin, did the Supremely divine One become visible in the likeness of the flesh. Him do thou unceasingly beseech, that He have mercy upon us who live in evil and tremble in the expectation of ever- lasting torment.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
              "text": "God the Word, God of God, * Who by ineffable wisdom came to create Adam anew * after his grievous fall to corruption through eating * and Who took flesh beyond all telling from the Holy Virgin for our sake, * Him we faithful with one accord magnify in song.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Friday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Grant unto me God’s love for mankind, O maiden who alone hast ineffably given birth to God the Lover of mankind, Who borrowed flesh from thee, and deliver me from the coming flame and all torment, for I glorify thee with love.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having acquired thee as a mighty helper, our hope and bulwark, our foundation and steadfast protection, an invincible confirmation, a harbor unbeset by storms and a refuge of strength, O all-hymned one, we are all saved.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O all-hymned Virgin, Mother of the Light, drive away the clouds from my soul, and grant that I may gaze in purity upon the saving beauty which shone forth ineffably from thy most holy womb to enlighten the nations.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 3"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "glory"
              },
              {
                "text": "O Virgin maiden Who hast given birth to the divine Light, illumine my heart, which hath been darkened by many passions and the assaults of alien thoughts, ever granting me teardrops which cleanse away the defilement of sin.",
                "tier": 1,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 4"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "Thou didst conceive the Word without seed, and hast given birth to the one Christ; for thou didst bear a new Child, thy Creator. Wherefore, we magnify thee, O Theotokos.",
          "tier": 1,
          "src": {
            "file": "2-7.pdf",
            "locus": "Friday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., And the rest as usual. Dismissal."
    },
    "sat": {
      "frame_rubric": "The priest saith: Blessed is our God..., and we respond: Amen. Glory to Thee, our God, glory to Thee. O heavenly King..., Trisagion through Our Father. Lord, have mercy (12 times). Glory..., Both now ..., O come, let us worship ..., (Thrice). Psalm 50 (Have mercy on me, O God...); Psalm 69 (O God, be attentive unto helping me...); and Psalm 142 (O Lord, hear my prayer...). Then, Glory to God in the highest..., and the Symbol of Faith (I believe in one God...).",
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos, in Tone II",
        "heading_rubric": "Canon of supplication to the most holy Theotokos, in Tone II:",
        "odes": {
          "1": {
            "irmos": {
              "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "O good Theotokos, who dost readily hear all in tribulation and helpest those in grief: grant grace unto those who make bold to hymn thee, O Lady, thou joy of those who sorrow.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Having acquired an abundance of rich grace, O Lady, by thy bold supplication most gloriously rescue me, thy poor servant, from temptations, O joy of those who sorrow.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 2"
                },
                "label": "plain"
              },
              {
                "text": "From enemies visible and invisible deliver us who have recourse to thee, we pray, O Theotokos, and confound every counsel of those who war against us.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Take from me the reproach of men and the false accusations of the traitorous, I pray thee, O Theotokos, that I may eagerly glorify the Lord Whom thou didst nourish.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Scatter the vain plots of the enemy, O all-hymned Theotokos, and by thy supplications fail not to keep us safe who praise thee.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 1"
                },
                "label": "plain"
              },
              {
                "text": "With thy merciful eye, O pure one, look upon me, and deliver me from every plot of enemies, visible and invisible, blinding their eyes.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 2"
                },
                "label": "plain"
              },
              {
                "text": "With the dew of thy prayers, O Virgin, quench the evil assault, burning like fire, of the enemies who ever seek to destroy us.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O inextinguishable lamp, ever-shining ray, who hast given birth to Christ, the Sun of glory: By thy supplications illumine me who am beset by the night of afflictions.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "I heard, O Lord, Thy voice, * which Thou didst call the voice of one crying in the wilderness, * for Thou didst thunder over the multitude of waters, * bearing witness to Thy Son. * And, wholly filled with the Spirit which had descended, * He cried aloud: * Thou art Christ, the Wisdom and Power of God!",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "We entreat thee, thou bridge of salvation, tireless entreaty and steadfast help: Have pity and behold our unbearable grief, our pangs, afflictions and sufferings, O Mother of God, and visit us for the better, granting us speedy joy.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 1"
                },
                "label": "plain"
              },
              {
                "text": "We are not without a share of thine aid amid afflictions, O Lady; wherefore, quickly help us now, who are grievously tempest-tossed, stretching forth thy hand, O pure one. Be thou merciful to our pain, O Mother of God, granting us speedy joy.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 2"
                },
                "label": "plain"
              },
              {
                "text": "They who are iniquitous, who roar to shed unjustly the blood of their neighbor, have not set their hope on thee, O Lady, but have trusted in a boastful tongue, the tongue of man, which ever poureth forth jealously; but do thou, O pure one, break their jaws.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O Lady, humble thou the haughty neck of the boastful enemy, their counsels and wicked ways, and their hearts which daily meditate evils against me; and give strength and victory to those who call upon thee, O Mother of God, granting us speedy joy.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "The burning Ember was revealed to Isaiah, * and the Sun hath shone forth from the Virgin's womb, * granting the enlightenment of the knowledge of God * to those who in darkness have gone astray.",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O true supplicant, hope of Christians, O joyous one, accept the entreaties of us who earnestly call upon and pray to thee.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Acknowledging thee to be the well spring of Life, pouring forth the waters of immortality, O pure one, we, the earthborn, call thee blessed.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 2"
                },
                "label": "plain"
              },
              {
                "text": "The enemy hath wickedly armed himself against us, desiring to destroy us with his tongue, as with a sword; but go before us, O Birthgiver of God, in thy might.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Who can measure the abyss of the assistance of thy power, O pure one? Wherefore, quickly go before us who are in need.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "As the mediatress of chastity, reveal thyself now to those who call upon thee, and deliver them from all misfortunes and perils, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Destroy the evil works of the enemy and scatter the false accusations of the unjust, O most pure and blessed one, delivering the innocent from tribulation.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Surrounded by grievous sins and drowning in perilous misfortunes, O Mother of Christ God, we flee beneath thy divine protection.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Having given birth to the Lord without knowing a man, thou wast revealed to remain a virgin, even after giving birth. O the most glorious wonder that was wrought within thee, O Bride of God!",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "That Thou mightest prefigure * Thy most glorious nativity from a virgin, O Christ, * Thou didst preserve unconsumed in the furnace * the youths who chanted to Thee with hymns: * Blessed art Thou O God of our fathers!",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "O thy compassion, O pure Virgin! For thou dost loose immeasurable griefs and misfortunes for those who cry out in need and adverse circumstances. Wherefore, O blessed one, even now help those who praise thee.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Show forth thy speedy assistance; show it forth, as thou art able, in that thou art the Mother of God. We call upon thee with all our heart, falling down in tears: Quickly ease the affliction and pain of thy servants.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 2"
                },
                "label": "plain"
              },
              {
                "text": "The mouths of men, like those of ferocious lions, have opened wide more terribly than the grave, to bitterly swallow me; but as thou hast been revealed to be the hope of the hopeless, O blessed Theotokos, cast down their strength.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Let the enemy behold and be ashamed, and let them understand and see thy power, which warreth for us against them. Cast them down into the nethermost depths, O blessed one, thou hope of the hopeless.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "O Birthgiver of God, our refuge, joy of the world: hasten thou to take pity, and quickly grant thy grace unto us who are afflicted, O good one, and help thy servants.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 1"
                },
                "label": "plain"
              },
              {
                "text": "The vain council of the assembly of the ungodly took counsel wickedly against us, like Ahitophel of old. Yet we cry aloud: Scatter it by thy supplications, O Theotokos, casting down their strength!",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Quickly hearken, O Theotokos, to those who truly call upon thee from their soul amid every tribulation and divers pangs and grievous perils, ever delivering them by thy supplications, O Lady.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 3"
                },
                "label": "glory"
              },
              {
                "text": "That thy name might be glorified on the earth, O Theotokos, He Who shone forth from thee hath given thee to sinners as a mighty hope and rampart; for through thee doth everything that hath breath hasten to God.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "Every tongue is at a loss to praise thee as is due: * even a spirit from the world above is filled with dizziness, * when it seeketh to sing thy praises, O Theotokos. * But since thou art good, accept our faith: * Thou knowest well our love inspired by God, * for thou art the Protector of Christians and we magnify thee.",
              "tier": 2,
              "src": {
                "file": "2-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Let every tongue which meditates evils be stopped; and let false lips and mouths, which unjustly speak iniquity against the righteous man with pride and hostile envy, fall silent, through the supplications of the Theotokos and the saints of Christ.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Afflicted with pain and sorrow, we all call upon the pure Theotokos, who is vigilant in prayer, crying: O pure Lady, ever deliver thy servants quickly from besetting pain, for, after God, we have none other helper.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O Theotokos, thou art a great refuge for the despairing, a calm haven for the tempest-tossed; wherefore, we have recourse unto thee, crying: Let us not be put to shame, O Mother of the true Life, but let us magnify thee, giving thanks with fervor.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O most pure maiden, accept our divine hymn, imparting grace unto those who trust in thee, and ask that peace ever be sent upon the churches of God and victory and triumph to the Orthodox, that the tongue of every Christian may magnify thee.",
                "tier": 1,
                "src": {
                  "file": "2-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 4"
                },
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone II:",
        "sessional": {
          "text": "We earnestly cry out to thee, O Lady Theotokos, thou fervent supplication, unassailable rampart, wellspring of mercy and refuge for the world: Go before us, and deliver us from perils, O thou who alone dost speedily intercede.",
          "tier": 1,
          "src": {
            "file": "2-1.pdf",
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
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of compunction, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Like the waves of the sea, mine iniquities have risen up against me, and I alone am floundering like a ship upon the deep, under the weight of many offenses; but steer me to the calm harbor of repentance, O God, and save me.",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "I am a barren tree, in nowise producing the fruit of repentance, O Lord; and I fear lest I be cut down, and am terrified of that unquenchable fire which is to come. Wherefore, I entreat Thee: Before those misfortunes, do Thou turn and save me!",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 1 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "As the well-spring of loving-kindness, O Theotokos, grant mercy unto us. Look upon the people who have sinned, and show forth, as ever, thy power; for, trusting in thee, we cry out to thee: Rejoice!’’, as once did Gabriel, the supreme commander of the incorporeal beings.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd, chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "“Have mercy on me,” said David; and I cry unto Thee: “I have sinned, O Savior! Cleanse me of my sins through repentance, and have mercy upon me!”",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "“Have mercy on me, O God, have mercy on me!” David wept over his two sins; and I cry out to Thee over my tens of thousands of transgressions. He made his bed moist with tears, but I shed nary a one. I am in despair, and pray: “Have mercy on me, O God, according to Thy great mercy!”",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "Having as their vesture Thee Who dost clothe the sky with clouds, the saints endured torments in the world at the hands of the iniquitous, and set at naught the falsehood of the idols. By their supplications, O Savior, free us from the invisible foe, and save us.",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
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
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "We magnify thee, O Theotokos, crying aloud: Rejoice, O cloud of the never- setting Sun, who didst bear the Lord of glory within thy womb!",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Matins, sessional set 2 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": "As a wellspring of loving-kindness ...",
          "items": [
            {
              "text": "Sinning in ignorance and in knowledge, night and day, I, alone on the earth, anger Thee by mine iniquities, O Christ. O good One, Who alone art sinless, and Who in Thy tender compassion hast come to call sinners to repentance, save me by the prayers of Thine angels.",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "The most holy choirs of the incorporeal ones beseech Thee, the good Master, to have pity at the hour of judgment, that; from bitter torment, the malice of the demons, the darkness of the passions and every threat, Thou wilt deliver us who with love have recourse to their protection.",
              "tier": 1,
              "src": {
                "file": "2-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 2"
              },
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "O pure, unwedded Theotokos, who without seed hast given birth to the Master of all, with the angels entreat Him, that we may be delivered from all doubt, and that He grant compunction and light unto our souls, and the cleansing offenses, O thou who alone art quick to help.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance to our Lord Jesus Christ and His holy martyrs, the acrostic whereof is “Grant me an outpouring of tears, O Word of God,” the composition of Joseph, in Tone II",
          "heading_rubric": "Canon of repentance to our Lord Jesus Christ and His holy martyrs, the acrostic whereof is “Grant me an outpouring of tears, O Word of God,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Word Who didst become incarnate, and camest not to call the righteous, but sinners to repentance: Accept me, who have greatly sinned, and save me!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I alone have been enslaved to sins; I alone have opened the door to the passions! O Thou Who alone art easy to appease, turning me back to Thee, save me in Thy loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Wearing crowns, the passion-bearers stand before Thy judgment-seat, O Lord, having triumphed over the audacity of the evil one and been enriched with immortality.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Pouring forth streams of healings upon us, the passion-bearers ever dry up the torrents of our carnal passions by the power of the divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O maiden who hast given birth to the Wellspring of dispassion, heal me, who have been wounded by the passions, and rescue me from everlasting fire, O thou who alone art full of the grace of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Christ Who didst enter into an incorrupt womb, through repentance restore my soul, which hath been corrupted by the passions, and reveal it to be full of everlasting light.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I have been obedient to the enraging enemy, having committed every sin, and have mindlessly angered Thee, the only Long-suffering One, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Protected by the Cross, in God the invincible warriors and martyrs of the Savior valiantly demolished the fortresses of falsehood as though they were ramparts.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Your weakness strengthened by divine power, O valiant passion-bearers, ye gave the might of the adversary over to utter destruction.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O Mary, thou golden censer, dispel the stench of my passions, and make me steadfast, who am shaken by the assaults of the lying enemy.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Falling into the mire of sin, I destroyed my higher comeliness, O Lord, and I fear torment. Wherefore, with the beauty of repentance enlighten my humbled soul.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With lying words the deceiver who stole me away from Thee hath made me food for him to devour. O God of all, rescue me from his malice, and call me to Thee through examples of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having Christ as your helper when ye were cast forth to be devoured by the wild beasts, burned with fire, maimed and dismembered, O martyrs, ye did not deny Him. Earnestly beseech Him on behalf of me, the wretched one.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Worshipping the Unity in essence, the Trinity of Hypostases, the uncreated Godhead, and in nowise worshipping any created thing, ye were known as martyrs of Christ; wherefore, ye endured all manner of tortures.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Of His own will, the Lord took flesh of thy pure blood and united Himself to mankind, O pure and most pure one; and, ever appeased by thine entreaties, He receiveth those who repent, who from of old have been immersed in sin.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Thou Who gave light to the eyes of the blind man, enlighten my blinded soul, and strengthen it to keep awake for the doing of good, and utterly to hate the sleep of slothfulness.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O only Savior, Who of old healed the wounds of him who fell among thieves, heal Thou my soul, which hath truly sustained a grievous wound.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enduring multifarious torments, the company of honored spiritual athletes put the council of iniquitous tyrants to shame; and it now ever rejoiceth with the sacred bands of the angels.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The most radiant martyrs have been revealed to be stars of great brilliance, emitting rays of patience and enlightening the souls of the faithful with the divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Unto us hast thou given birth to the paternal God as a little babe, having two wills and two activities, in that He is both man and God, O all- hymned one.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "I have fallen headlong through the malice of the serpent, and lie upon the bed of despair. O Christ Who by Thy word raised up paralytics, raise me up also.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Save me, as Thou didst Peter, O Lord, for I am buffeted by the winds of the serpent and am ever engulfed by the billows of sin.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Far exceeding the limits of nature, ye supra-naturally endured tortures, O martyrs; wherefore, ye have been deemed worthy of good things transcending understanding.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "As ones good, comely, and honorable, O most glorious martyrs, ye have united yourselves to the Beautiful One, the Creator of the good; and ye ever pray for us.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O all-immaculate one, the Creator chose thee from among all generations, as the beauty of Jacob, whom He hath loved; and, shining forth from thee, He revealed Himself.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With a dissolute mind and by the attacks of demons I am filled with all manner of shame; and like the prodigal I find myself far removed from Thy commandments. But turning now, I cry: “I have sinned like him, but despise me not, O Jesus Who didst become incarnate for my sake!”",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O God of all, of old Thou didst save the repentant Ninevites from the chastisement which would have brought death upon them. Thus also, O only Lover of mankind, deliver from grievous torments my heart which hath been defiled by gross fornication, yet returneth now to Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O divine martyrs blessed by God, the malicious one who desired to wound you was cruelly wounded, remaining unhealed; but your wounds have been shown to be healing for all the faithful, who have been wounded by the assault of him who of old caused us to stumble.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Ye feared neither savage beasts, nor tyrants’ threats, nor fire, nor stripes, nor the severing sword, nor red-hot instruments, O great martyrs, but endured them all as though in others’ bodies; wherefore, ye have been crowned.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O most pure maiden, Bride of God, thy womb became the abode of the immaterial Light, Who hath dispelled ungodliness with the radiance of divine understanding; and, hymning Him, we cry aloud: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "I have fallen to the evil one, and been held captive by his wiles; and, seeing me stuck fast in utter hopelessness, the deceiver boasts greatly; wherefore, rescue me, O Compassionate One, Who art the conversion of those in error.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Loose me, who am held fast by the unbreakable bonds of carnal passions, O Christ, Thou Savior of the world, Who didst loose those fettered with everlasting chains; and guide me to seek the ways of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Those who are the cause of the passions have truly brought all their malice to bear upon me, the lowly one; but, O blessed martyrs, who truly emulated the sufferings of Christ, deliver me from the harm they cause.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Refusing to bend their knees before graven images, the all- famed martyrs were cast, like the children of old, into the furnace of wounds; yet through divine dew they were shown to be unburned, hymning Christ throughout the ages.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "By thy healing entreaties, O Virgin Birthgiver of God, show forth as whole my wretched soul, which hath been weakened by the many assaults of the evil one, that I may glorify thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "God the Word, God of God, * Who by ineffable wisdom came to create Adam anew * after his grievous fall to corruption through eating * and Who took flesh beyond all telling from the Holy Virgin for our sake, * Him we faithful with one accord magnify in song.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Now is the time to act! Why dost thou mindlessly sleep in deep despondency? Arise, and replenish thy lamp with tears! Hasten thou, for the Bridegroom draweth night unto our souls! Tarry not, lest thou remain outside the divine doors.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "O how awesome is Thy tribunal, which layeth bare before the angels the deeds of all! O how grievous is the sentence which Thou shalt pronounce upon sinners! Before the end, O Christ, deliver me therefore, granting me tears of conversion.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Marked with the divine blood of the Lamb and Shepherd, the glorious and divine spiritual athletes rejoiced as they were slain like innocent lambs; and in the heavens they now truly enlighten all the holy Church of the first- born.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "As ye were shown to be beacons of the radiance of the Sun, O valiant spiritual athletes, ye illumine every soul with the beams of your sufferings, dispelling all the darkness of deception; wherefore as is meet, with faith we call you blessed.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Spare me, spare me, O Lord, when Thou shalt render judgment! Condemn me not to the fire, neither rebuke me in Thine anger. The Virgin who gave Thee birth entreats Thee, O Christ, as doth the multitude of the angels and the company of martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "Grant me an outpouring of tears, O Word of God",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy, incorporeal angelic hosts of heaven, the acrostic whereof is: “I sing praise to the angelic choir,” of Theophanes, in Tone II.",
          "heading_rubric": "Another canon, of the holy, incorporeal angelic hosts of heaven, the acrostic whereof is: “I sing praise to the angelic choir,” of Theophanes, in Tone II.",
          "odes": {
            "1": {
              "irmos": {
                "text": "Traversing dryshod the impassible, peculiar path in the sea, * Israel the chosen cried aloud: * Let us chant unto the Lord, * for He hath been glorified!",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "The choirs of the incorporeal beings who glorify Thee as almighty, O Christ, didst Thou reveal to be God-bearing coals set afire by the radiance of Thine essence.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having acquired the power of incorruption and been given the glory of immortality, the angels are enlightened by drawing nigh unto Thee, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As perceptible images of purity, the angels were revealed as light-bearers, showing forth the immaterial nature of their essence in their forms, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Rejoicing, O pure Virgin, the ranks of the angels ministered at thy birthgiving, which transcendeth nature; for thou hast given birth to their God and Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The bow of the mighty hath been broken * by Thy might, O Christ, * and the enfeebled * have girded themselves with power.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "God Who by nature is deathless, most wisely acting through grace, revealeth the immortal armies.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Standing now in your uttermost desire before Christ, O angels, pray ye that all of us may be saved.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The Creator of the ages is known to have accepted a beginning under time through thee, O Ever-virgin.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "I have heard report O Lord, * of Thy glorious dispensation, * and I have glorified, Thine unapproachable power, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "I bring before Thee the incorporeal ones as advocates, O Compassionate One. Accepting them, in that Thou art full of loving-kindness, deliver me from sins.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Purified, the divine intelligences draw nigh to the all-accomplishing Mind, and are enlightened with transcendent understanding.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Adorned by the divine Spirit, the divine adornments of the heavenly ranks are immutably preserved.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Perceiving thee from afar, Isaiah foretold thee as the one who would bear God incarnate in thine arms, O Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The burning Ember was revealed to Isaiah, * and the Sun hath shone forth from the Virgin's womb, * granting the enlightenment of the knowledge of God * to those who in darkness have gone astray.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The cherubim and seraphim, shining forth in splendor with the supremely exalted thrones near the divine Godhead, divinely illumine all other beings.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O Word of God, Bestower of all effulgence, Thou didst bring into being the luminous reflections, who receive Thy radiance with gladness and sure understanding.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The sacred Archangel Gabriel, having flown down from heaven, O pure Bride of God, declared unto thee that “Rejoice!” which hath released our first parents from grief.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Master, hearkening unto the sound of entreaties * from a soul in pain, * do Thou deliver me from my grievous sins, * for Thou alone art the Cause of our salvation.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "The divine points of the glory of Thy primary light, glowing with the effulgence of Thy splendor, O Master Christ, remain eternally brilliant in radiance.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Strengthened by divine power, and crying out the thrice-holy hymn with unceasing voices, the seraphim lead in worshipping the Essence in three Hypostases.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The Lord swore in truth unto David, as He said of old; and in issuing forth from thy womb He fulfilled His word, for thou hast given birth unto Him Who reigneth over heaven and earth, O maiden.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Of old the youths revealed themselves to be rhetors * with a supreme love for wisdom, * for from the depths of their God-pleasing souls, * they theologized with their lips as they sang: * O supremely divine God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Ever joining chorus round about the throne of Thine ineffable glory, the celestial intelligences sing with unceasing voices: O supremely divine God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "When the angelic ranks beheld Thee borne aloft in the flesh into the heavens, they opened wide the celestial gates unto Thee, saying: O supremely divine God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Showing thee to be the beginning of the law and the prophets, Gabriel cried out, O maiden: “Lo! thou who alone art all-hymned shalt give birth to the supremely divine and blessed God of the fathers and of us!”",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Disdaining the golden image, the thrice-blessed children, * beholding the immutable and living image of God, * chanted in the midst of the flame: * Let all existing creation hymn the Lord * and supremely exalt Him throughout all ages!",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst create the angels who carry out Thy commandments with might, to be likenesses of Thy goodness, O Word; and they help all the faithful to cry aloud: Let all existing creation hymn the Lord and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The life of heaven, the ranks of the holy angels, didst Thou adorn with divine virtues, O Christ, enlightening them; and they cry unto Thee: Let all existing creation hymn the Lord and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Rejoicing in splendor, without fail let us unfailingly chant the divine hymn of the incorporeal ones; and, theologizing concerning the Master, let us cry out with them in hymnody: Let all existing creation hymn the Lord and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "The Righteous One, Who in wisdom setteth all things aright, loved thee, as is meet, the immaculate and most pure Virgin, ineffably making His abode within thee, O most holy Theotokos, and we glorify thee, saying: Let all existing creation hymn the Lord and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Thou art all desire, Thou art all sweetness, * O Word of God, Son of the Virgin, * God of gods, most holy Lord of the saints. * Wherefore, we magnify Thee * and her who hath given birth to Thee.",
                "tier": 2,
                "src": {
                  "file": "2-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "The angels, appearing in garments of dazzling white, told Thy godly disciples of Thy second coming, O Christ. With them, we all magnify Thee in theology.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "As the Benefactor of all rational nature, in Thy surpassing goodness Thou didst first create for Thyself a secondary radiance; wherefore, giving thanks, we all magnify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Perceiving thy luminous virginity, and stricken with awe, the divine supreme commander offered thee his salutation, O most pure one; wherefore, we all magnify thee, the Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "2-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "I sing praise to the angelic choir",
          "composer": "Theophanes"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of compunction, in Tone II:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of compunction, in Tone II:",
        "items": [
          {
            "text": "Mindful of the unseemly sins I have committed, I flee to Thy compassions, emulating the publican, the harlot who wept, and the prodigal son; wherefore, I fall down before Thee, O Merciful One, and say: Before Thou condemnest me, O God, have pity and mercy upon me!",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Overlook mine iniquities, O Lord Who wast born from the Virgin; and purify my heart, making it a temple for Thy Holy Spirit. Turn not Thy face away from me, O Thou Who art possessed of great and boundless mercy.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Ye suffered for Christ even unto death, O passion-bearers and martyrs. And though your souls are in the heavens, in the hand of God, your relics are venerated throughout the whole world. The priests and all the people bow down, and cry aloud, rejoicing: Precious in the sight of the Lord is the death of His saints.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "We have placed our trust in thee, O Theotokos. Let us not fall away from hope, but save us from misfortunes, O helper of the perplexed, and set at naught the counsels of the adversary. For thou art our salvation, O blessed one.",
        "tier": 1,
        "src": {
          "file": "2-2.pdf",
          "locus": "Monday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 3
          }
        ],
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "tue": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, these Sessional Hymns of compunction, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Mindful of the dread day of trial, O my soul, tremble at the sentence to everlasting torment, and in repentance cry aloud, weeping: I have sinned, O God! Have mercy on me!",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "Testing my condemned conscience, I am in fear of Thy dread tribunal, O Lord; for in me there are no works of salvation. Yet as Thou art possessed of a wealth of loving-kindness, O Christ God, have pity on me, and save me.",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 1 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "We magnify thee, O Theotokos, crying aloud: * Thou art the un-burnt bush, * wherein Moses beheld as a flame ** the Fire of the Divinity.",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, The Sessional Hymns of compunction, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "“Have mercy on me,” said David; and I cry unto Thee: “I have sinned, O Savior! Cleanse me of my sins through repentance, and have mercy on me!”",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "“Have mercy on me, O God, have mercy on me!” David wept over his two sins; and I cry out to Thee over my tens of thousands of transgressions; he made his bed moist with tears, but I shed nary a one. Wherefore, I am in despair, and pray: “Have mercy on me, O God, according to Thy great mercy!”",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Christ God Who, in that Thou art good, hast made Thy saints to shine with greater luster than gold, and hast glorified Thy holy ones, entreated by them grant peace to our lives, in that Thou lovest mankind, and set their prayer before Thee like incense, O Thou Who alone restest in the saints.",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
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
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O Theotokos turn not away from me * who am in need of thy help! * for my soul trusteth in thee: ** do thou have mercy upon me!",
            "tier": 2,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": "As the wellspring of loving-kindness ...",
          "items": [
            {
              "text": "In the streams of the Jordan thou didst immerse the abundant Wellspring of loving-kindness, O John; wherefore, I earnestly beseech thee: Guide me by thy right acceptable prayers to the haven of life, for every day I am cruelly engulfed by many passions and the abyss of life.",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "In the tender compassion of Thy mercy, O Good Christ, Thou didst come to save Thy creature, bowing down the heavens in Thy condescension; wherefore, hymning Thine awesome dispensation, we cry unto Thee: By the prayers of Thy forerunner, grant us cleansing of sins, in that Thou alone art full of loving- kindness.",
              "tier": 1,
              "src": {
                "file": "2-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "Who hath seen, who hath heard of a mother giving birth to her own Creator, without knowing a man, and giving suck unto Him Who gives nourishment to all flesh? O the wonder! Thy womb hath been revealed to be the throne of the cherubim, O gracious Theotokos. Pray for our souls.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance, to our Lord Jesus Christ and the holy martyrs, the acrostic whereof is: “Thou accedest to my lamentations, O Savior,” the composition of Joseph, in Tone II",
          "heading_rubric": "Canon of repentance, to our Lord Jesus Christ and the holy martyrs, the acrostic whereof is: “Thou accedest to my lamentations, O Savior,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Taking up the Song of Moses, O my soul, * cry aloud: * 'A helper and a protector hath become unto me salvation. * My God, * whom I will glorify'.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Before our departure let us weep bitterly, O brethren, that by goodly tears we, who are devoid of anything that is profitable, may avoid torment at that time.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ten thousands of times I vowed to repent, O Christ, but my soul is numb, and I fall into transgressions. Have pity on my weakness, O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O passion-bearers of Christ, who endured the fire of torment, with divine dew deliver from the fire of Gehenna, me who wallow in grievous passions.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Shown to be mighty in divine power over the enemy, O right praiseworthy martyrs of Christ, ye cast down their feeble force.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O fire-bearing tongs, which Isaiah once beheld, burn up the base passions of my heart, and destroy them utterly, O Birthgiver of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "My mind hath not brought forth good fruit, * but do Thou show me to be fruitful * in Thy compassion O God, * Thou husbandman of all good things.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "I have weighed my soul down with the slumber of slothfulness. But rouse me, O Christ unto the wakefulness of repentance, that I may do Thy commandments.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Let me not be seen as desperate on the dread day, O Jesus, but, converting me before the end, deliver me from cruel torments.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O passion-bearers of Christ, who emulated well His sufferings, heal the grievous passions of my soul.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "That ye might be deemed worthy of eternal good things in the heavens, O passion-bearers, ye steadfastly endured every trial of the cruel ones here on earth.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "As a mother thou givest suck to the Nourisher of all, and in thine arms didst bear Him Who ever holdeth all things in His hand.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "The prophet foreseeing Thy birth from a virgin, * prophesied crying aloud: * ‘I have heard report of Thee, and I was afraid; * For from the South, from the Overshadowed mountain * shalt thou come forth O Christ’",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Seeing me everywhere robbed and reduced to penury, the enemy, the crafty deceiver, rejoices, O Word. But deliver me from his wickedness, O Lord of glory, and Enrichment of the poor.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have defiled my hands and eyes, having done those things which I ought not to have done, O Lord; and I have turned Thy compassions to wrath, squandering Thy longsuffering. But look down, O good One, and have pity on me.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "How wondrous is our God in the saints who heeded Him, who overturned the graven images unto their destruction, and have inherited the broad expanse of paradise, from whence Adam was expelled of old.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With the streams of your blood, O blessed ones, ye put an end to the blood once offered to the demons, which was the destructive ruination for all those who offered it up in sacrifice; wherefore, ye are ever called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Taught by the Spirit, in sacred images and divers ways the most glorious choir of the prophets depicted beforehand the mystery of thee, which passeth understanding, O Theotokos, the end whereof we splendidly behold.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Having dispelled the gloom of my soul, * O my Savior, do Thou illumine me * with the light of Thy commandments * for Thou alone art the King of peace.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Mindlessly I heap sins upon sins, and there can be no uplifting in my death. Woe is me! How shall I appear before Christ?",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Misfortune hath smitten me like a ship, and I have cast overboard the freight Thou gavest me, O Compassionate One; and, now impoverished, I cry: Disdain me not, O Christ!",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having disdained base glory as worthy to be trampled underfoot, O passion-bearers, abiding with Christ ye have been deemed worthy of the glory of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Having cut your mind off from the love of the flesh, O passion-bearers, with faith ye lovingly embraced tortures, becoming Christ’s.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "In the Spirit, O Theotokos, Daniel beheld thee as the great mountain from whence the Stone was quarried Who crusheth the graven images of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "I am held fast in the depths of sin O Savior, * and am overwhelmed by the sea of life, * but as Jonah was delivered from the sea-monster, * so also deliver me from the passions, * and save me.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Like the Canaanite woman of old I cry unto Thee: O Son of God, have mercy and pity on me! For my soul suffereth in its grievous deeds, and desireth not to come to its senses.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The tempest of countless passions vexeth me. As once Thou didst rebuke the sea and save Thy holy disciples, O Jesus Christ, so raise me up and save me.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The incorporeal angelic choirs marveled at your bodily endurance, O honored spiritual athletes, and they praised Him Who granteth you power and the reward for your toils.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Soaked by the streams of your own blood, your eyes plucked out, chilled by the perishing cold, O martyrs, ye passed over to the warmth of life, hymning Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Like a table, O all-hymned one, thou didst hold the mystical Bread, of Whom those who eat will no longer hunger, knowing thee to be truly the Mother and Nourisher of Christ, the God of all.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Like unto the cherubim, the Children rejoicing in the furnace sang: * 'Blessed art Thou O God, * for in truth Thou hast brought this judgment upon us * because of our sins, * Thou art supremely praised and glorified throughout all ages'.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "I have rejected Thy laws and made myself subject to irrational lusts, doing unseemly things, O Christ, for I have become vain in my mindlessness more than any other men on earth. But in Thy loving-kindness leave me not to perish, O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Behold, I have been conceived in iniquities, O Lord: like David I cry out, like the harlot I weep, for like an offensive servant I have offended Thee, the only good God. But in Thy tender compassion leave me not to perish, O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The martyric assembly of the passion-bearers struggled and were crowned as martyrs by the life-bearing right hand of God; for they truly loved God, Who created all things by His word. And rejoicing now in the heavens, they enjoy a divine inheritance.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Their eyes plucked out, their hands and feet severed, the right glorious ones ran right speedily to the heavenly course, treading on the feet of the one enemy. By their supplications, O Word, save all who glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The cherubim, the seraphim, the thrones, authorities and dominions ever glorify and hymn thy birthgiving, which transcends understanding, O all-hymned Mary, for thou alone hast given birth to God in the flesh. Him do thou entreat, O pure one, that we who honor thee with love may be saved.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Unto Him Who of old prefigured the miracle of the Virgin, * unto Moses in the burning bush * on Mount Sinai, * let us sing, bless and supremely exult throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "That Thou mightest deify us, in Thy mercy Thou didst become incarnate. This I have failed to understood, slave that I am to pleasures. But in Thy goodness convert me, O Christ, Thou salvation of all.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Word, good Shepherd, turn Thou and save my wretched soul, which hath become lost in the mountains of transgression, and let not the deceiving foe utterly slay me.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "“Let us stand manfully together!” the comely spiritual athletes cried one to another as they were cruelly wounded. “Behold, Christ extendeth crowns of victory to us throughout all ages!”",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With your mighty pangs, as with strong cords, ye choked the serpent who desired to deceive you with evil machinations; and ye have been revealed to be inheritors of the food of paradise.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "That God might deify us, He took flesh from thy pure blood and became a man, O Virgin Theotokos. Him do thou ever entreat on behalf of those who honor thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Who born on Earth hath ever heard of, or beheld, * a Virgin miraculously conceiving in her womb, * and painlessly giving birth to a child, * wherefore we magnify thee O pure Virgin.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O how awesome is the tribunal at which I shall await judgment, O Christ; yet I in nowise feel terror thereof, spending all my time in idleness. But convert me, O only Creator, Who converted the sinful Manasseh.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Staunch the torrents of my boundless evils, I cry unto Thee, O Christ, granting me outpourings of tears which wash away the defilement in which I wallowed in mine insanity; and in Thy mercy save me, O Thou Who didst save the harlot who repented with all her soul.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Shining forth upon us like the sun, the splendid memory of the divine passion-bearers sheddeth light upon all the ends of the earth, and with the divine Spirit dispels the gloom of the madness of idolatry and the darkness of the soul-corrupting passions.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The honored regiment, the victorious army, the chosen company, the assembly of the holy martyrs, the divine choir have united themselves to the choirs of the incorporeal ones. By their prayers, O Christ, grant us all to share in Thy kingdom.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "With the radiant effulgence of Him Who shone forth upon us from thy womb, destroying the night of ungodliness, O Mary, Virgin Mother, enlighten all who honor thee with faith; and at the hour of condemnation, deliver them from the darkness which is devoid of light.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "Thou accedest to my lamentations, O Savior",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy and most honorable prophet, John the Forerunner, the acrostic whereof is “O Baptist, accept this entreaty,” the composition of Joseph, in Tone II",
          "heading_rubric": "Another canon, of the holy and most honorable prophet, John the Forerunner, the acrostic whereof is “O Baptist, accept this entreaty,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "The Lord mighty in battle * uncovered the foundation of the deep * and led His servants on dry ground; * but He covered their adversaries with the waters, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Baptist and Forerunner of Christ, pilot my mind, which is ever overwhelmed by bodily pleasures, and still the waves of the passions, that I may hymn thee in divine serenity.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Illumined with inconceivable enlightenment, like a star of great radiance thou didst go forth before the noetic Dawn. Thereby, O Baptist, I pray: Let my heart be enlightened, for it hath been darkened by the assaults of demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In the river, O most wise one, thou didst once immerse the Abyss Who by grace hath brought about the drowning of all transgression. And I pray, O blessed one: By thy divine mediation dry up the torrents of my sins.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast the kinsman of the pure Virgin who gave flesh unto God; and we who now dwell in thy divine temple honor thee with her, and we pray: Make us also temples of the Holy Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 4"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "Thou hast established me on the rock of faith, * and my mouth hath been emboldened against mine enemies. * For my spirit rejoiceth when I sing: * There is none as holy as our God * and none more righteous than Thee, O Lord.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Heal the stripes of my soul, O Forerunner of the Lord, and with thy divine mediation illumine my mind, which hath been obscured by indifference; and deliver me from every machination of the adversary, I pray.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Born in accordance with the providence of God, O most wise prophet, thou didst free thy mother from barrenness; wherefore, by thy prayers make my barren heart now fruitful, O Forerunner of the Lord, that it may put forth the virtues as shoots.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In thy love pray that those who with faith serve thy temple may receive the heavenly life of Him Who createth the divine abodes; and by thy prayers, O Baptist and Forerunner, make them temples of the divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Carried in the womb of thy mother, O Forerunner, thou didst rejoice and pay homage to the Lord, Who was borne in the womb of her who is full of grace. Him do thou entreat, that He deliver me from all tribulation.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "From a Virgin didst Thou come forth, not as an ambassador, * nor as an angel, * but the very Lord Himself incarnate, * and didst save me, the whole man; * wherefore I cry unto Thee: * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "With thy right hand, thou didst bow the head of Him Who bowed down the heavens and conversed with us, O thou who art most noetically rich. Preserve me also thereby, maintaining my heart in humility.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The trackless desert had thee dwelling within it, O blessed Forerunner; wherefore, I cry unto thee: Keep safe my soul, which is devoid of any divine activity.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Observing the law of God, thou wast iniquitously slain; wherefore, I pray to thee: Set me aright, who ever commit iniquity and am led astray by the delusions of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having made thyself a temple for the King and Master, O Forerunner, thou hast now passed over to the divine habitations. Pray thou that those who have raised up a divine house unto thee may receive it.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Look down upon me who am ailing, O all-immaculate one, and free me from my grievous and nigh incurable passions, that I may magnify thee who hast magnified all humanity.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Christ my Savior, the enlightenment of those lying in the darkness of sin. * I rise early to hymn Thee O King of Peace, * enlighten me with Thy radiance, * for I know no other God than Thee.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Forerunner, who baptized Christ, the Stream of incorruption, in the torrents of the Jordan: Beseech Him to dry up the stench of my passions, that I may inherit torrents of sweetness and the beautiful joy of the righteous.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Already I lament, and am constrained by fear, and am ever perplexed, contemplating the things I have done and the terrible judgment which is to come. O compassionate Lord, have pity on me, by the prayers of Thy Forerunner.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Forerunner, who didst tell the people that the law of salvation lieth in repentance for their transgressions, thou didst stand before the law and grace; wherefore, we entreat thee: Enlighten us with examples of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Grant unto me the time to repent, for I have wasted all the time given me despondently, O Benefactor and Word, in that Thou hast John, the great Forerunner and universal preacher of repentance, entreating Thee for this.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have been slain by the assaults and pursuit of the deceiver, O all-immaculate Lady. Enliven me, O Theotokos who hast given birth to the hypostatic Life of all, that with piety I may hymn thee, the all-immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O voice who proclaimed the Word, accepting the cries of us all, ask that He grant forgiveness of sins unto those who hymn Him with faith.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Heal the broken state of my soul, loose the burden of my sins, and by thy supplications save me who am beyond hope, O blessed Forerunner.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Entreat Jesus, Whom thou didst baptize with thy hand, O most glorious Forerunner, that from the hand of sin He deliver me who ever lift up my hands unto Him.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I am stuck fast in the slumber of slothfulness, and the sleep of sin weigheth heavily upon my heart. But by thy vigilant mediation raise me up, O most pure one, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Having hewn down the wounds of my passion-plagued heart with thine axe of repentance, O Forerunner, plant in their stead divine dispassion and the most pure fear of God, which remove me from all evil.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As thou didst baptize in the streams of the Jordan the Lord Who covereth His chambers with the waters, beseech Him ever to give the water of divine compunction to mine eyes, O glorious Forerunner.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having preached the Lamb of God, Who taketh away the sin of the world, O glorious Forerunner, beseech Him to deliver me from the lot of the goats, and to number me among the lambs at His right hand.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "A barren womb bore thee, O Virgin, who didst bear in thy womb the Word incarnate, Whom the great Forerunner, rejoicing, acknowledged with godly leaps as the all-holy and seedless Fruit, bowing down before Him.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Extend thy right hand unto me who lie on the ground, O Forerunner who, extending thy right hand, didst wash the Undefiled One in the waters. Deliver me from bodily corruption, cleansing me wholly with repentance; and save me.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As thou hast time to repent, O my soul, shake off the heavy sleep of slothfulness, and hasten to keep watch, crying out to thy Master:",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Have pity on me, O Thou Who art full of loving-kindness, by the prayers of him who baptized Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The torrents of the passions and the waters of evil have entered in unto my soul, O blessed Forerunner. Hasten thou to quickly rescue me, O thou who in the river’s streams washed the most tranquil Deep of dispassion.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Alas for me who have done much evil! Woe is me, who alone have angered the supremely good God! O thou who didst baptize Christ, help me, and by thy mediations grant me the remission of my transgressions and the annulment of my debts.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O thou who gavest. birth in the flesh unto the Most High God, raise me up from the mire of the passions which sorely trouble me, O most pure one, and enrich me with divine virtues, for I am grievously and wholly impoverished, that, saved, I may hymn thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 6"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 7"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The beginningless Son of God the Father and the Lord, * became flesh from the Virgin, * to give light to those in darkness, * and to gather the dispersed. * Wherefore we magnify the all-hymned Theotokos!",
                "tier": 2,
                "src": {
                  "file": "2-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Deliver me from the mire of sin, O only sinless and greatly merciful Lord, through the prayers of the Baptist who proclaimed Thee, the Lamb of God, to the whole world, as He Who taketh away the sins of all.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having thee as a fragrant rose, as a right redolent cypress tree, as a never- fading lily, as precious myrrh, O Forerunner of the Lord, running to thy protection I am delivered from the stench of my deeds by thy supplications.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-blessed one, make me who have become barren through my fruitless deeds, ever fruitful in the virtues, and a child of the Lord, a sharer in the divine kingdom and a dweller with the council of the saints.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "From heaven grant remission of evils, correction of life and deliverance from transgressions unto us who love thee, who honor thee with love and join chorus in thy divine temple, O Forerunner of the Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou didst pay homage unto Him Who was borne in the womb of the Mother of God and holdeth all things in His hand, O prophet. With her pray that my lowly soul may be saved, for every day it falleth into many offenses.",
                  "tier": 1,
                  "src": {
                    "file": "2-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "O Baptist, accept this entreaty",
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of compunction, in Tone II:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of compunction, in Tone II:",
        "items": [
          {
            "text": "I have surpassed all in sin! From whom shall I learn repentance? If I sigh like the publican, I only burden the heavens; if I weep like the harlot, I defile the earth with my tears. But grant me remission of sins, O God, and have mercy on me.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Overlook mine iniquities, O Lord Who wast born from the Virgin; and purify my heart, making it a temple for Thy Holy Spirit. Turn not Thy face away from me, O Thou Who art possessed of great and boundless mercy.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Taking up the Cross of Christ as a trophy of victory, O holy martyrs, ye set at naught all the power of the devil; and receiving heavenly crowns, ye have become bulwarks for us, praying to the Lord on our behalf.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_matins"
        }
      },
      "aposticha_theotokion": {
        "text": "Rejoice, O Theotokos Mary, * thou indestructible and surpassingly holy temple; * as the prophet crieth out: ** Holy is thy temple, wondrous in righteousness!",
        "tier": 2,
        "src": {
          "file": "2-3.pdf",
          "locus": "Tuesday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "wed": {
      "sessionals": [
        {
          "rubric": "st",
          "spec_mel": null,
          "items": [
            {
              "text": "After the 1 , chanting of the Psalter, the Sessional Hymns of the holy and",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Thou didst work salvation in the midst of the earth, O Christ God, and on the Cross, stretched out Thy most pure hands, gathering to Thee all the nations, who cry aloud: Glory be to Thee, O Lord!",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "Just as the enemy made Adam captive by the fruit of the tree, so didst Thou Thyself make the enemy captive by the tree of the Cross and Thy suffering, O Lord; for, for this reason Thou didst come as the Second Adam, seeking out the lost and bringing life to the dead. Glory be to Thee, O Lord!",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Exalt ye the Lord our God, and worship the footstool of His feet, * for He is holy.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "We magnify thee, O Theotokos, * crying aloud: * Rejoice, thou cloud of the unwaning Light, * who bore, within thy womb, ** the Lord of glory.",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Matins, sessional set 1 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "The life-creating Cross of Thy goodness, which Thou hast bestowed upon us, the unworthy, O Lord, do we offer unto Thee in supplication: Save Thy city, granting it peace for the sake of the Theotokos, O Thou Who alone lovest mankind.",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "O good Shepherd, Who hast enlightened mortals and summoned sinners by the Cross, cut me not off from Thy flock, but seek me out who am lost, O Master, and number me among Thy flock, O Thou Who alone art good and the Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Christ God Who, in that Thou art good, hast made Thy saints shine more brightly than gold and hast glorified Thy holy ones: Entreated by them grant peace to our lives, in that Thou lovest mankind, and set their supplication before Thee like incense, O Thou Who alone restest in the saints.",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "God is our King before the ages; * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Beholding Thee, O Christ, stretched dead upon the tree, * Thy virgin Mother cried out with bitter tears: * O my son, what is this fearful mystery? * How dost Thou give eternal life to all, ** and yet suffer willingly a shameful death upon the Cross?",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Matins, sessional set 2 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": "As the wellspring of loving-kindness ...",
          "items": [
            {
              "text": "For our sake Thou didst endure crucifixion and death, O Jesus, Bestower of life, that in the multitude of Thy compassions Thou mightest deliver the creation of Thy hands from condemnation to death, in that Thou art the compassionate God and Lover of mankind, and alone art sinless.",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Like the thief do I confess and cry out to Thee, O good One: Remember me, O Lord, in Thy kingdom! Reckon me with him, O Thou Who didst willingly accept sufferings for our sake.",
              "tier": 1,
              "src": {
                "file": "2-4.pdf",
                "locus": "Wednesday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "Guarded by the precious Cross of thy son, * O pure Lady Theotokos, * we easily turn away all the assaults of the enemy! * Therefore we rightly call thee blessed, * for thou art the mother of light ** and the only hope of our souls!",
            "tier": 2,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Matins, sessional set 3 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon to the precious and life-creating Cross of the Lord, the acrostic whereof is: “The setting up of the Cross is the fall of the demons,” the composition of Joseph, in Tone II",
          "heading_rubric": "Canon to the precious and life-creating Cross of the Lord, the acrostic whereof is: “The setting up of the Cross is the fall of the demons,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Of old, through the tree death befell the first-formed man, when he broke the first commandment; but the Immortal One, Who was lifted up upon the Tree and tasted death, hath given immortality to all mankind.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "When the Cross was planted in the earth the arrogance of the enemy fell and was thus destroyed; and man, who before was cast out, entereth again into paradise. Glory be to Thee, our only God, Whose good pleasure this was!",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Slaughtered like lambs, as reason-endowed sheep, your members pitilessly severed, O all-famed martyrs, ye offered yourselves as sheep unto Him Who was slain, and now illumine the Holy Church of the firstborn.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Ever making a mighty stand, O wise ones, hewn down by the sword and cast into fire and water, ye brought low the wicked enemy; wherefore, ye were deemed worthy to receive a good end, O passion-bearers.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The sacred choir of the prophets called thee the impassable gate, the chosen land and the unquarried mountain, O most pure Lady; for thou hast given birth to the Master of all, Who of His own will deigned to be crucified in the flesh.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The desert of the barren Church of the nations * blossomed like a lily * at Thy coming, O Lord, * therein hath my heart been established.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "When Thou wast crucified, Thou didst shake all creation, O Lord, but hast made steadfast the faithful, who hymn Thy power and Thine ineffable condescension, O Word.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By Thy Cross Thou didst open paradise, O Master, and lead therein the thief who acknowledged Thy kingship and the richness of Thy divine loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In the noetic vales the martyrs blossomed forth like fragrant roses: having dispelled the fetor of delusion and perfumed the hearts of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O beacons for the whole world, ye holy saviors of the faithful, with the radiant beams of the Spirit enlighten all who bless you as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "When she beheld the Bestower of life lifted up upon the Tree, of His own will dying and granting life unto all, the womb of the all-immaculate one was engulfed in pain.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "From a Virgin didst Thou come forth, not as an ambassador, * nor as an angel, * but the very Lord Himself incarnate, * and didst save me, the whole man; * wherefore I cry unto Thee: * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "When Thou wast lifted up upon the Tree Thou didst abolish the rule of the cruel prince of this world, annulling the curse. Wherefore, saved by Thee, O only Lord, we glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Beholding Thee stretched out upon the Tree, the sun hid its light, the mountains and rocks split asunder, and the veil of the temple was rent in twain, O Almighty One.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Slain, ye utterly slew the enemy; and lacerated with implements of iron, ye stripped away the grossness of mortality as it were a skin, O martyrs of the Lord, and were thereby clothed in glory.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "With their severed heads the martyrs beheaded the evil powers in an awesome manner; and, rejoicing, they have inherited lasting glory.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Christ, the Effulgence of the Father, shone forth from thy womb, O maiden who knewest not wedlock; and, crucified, He hath enlightened the whole world, and destroyed the darkness of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Christ God Thou art a mediator between God and man; * for by Thee, O Master, * we have been led from the night of ignorance, * to Thy Father, the Source of light.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Nailed to the Cross, Thou didst shake the foundations of the earth; and pierced by the spear, Thou didst slay the serpent, the author of evil, pouring forth streams of salvation upon all, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou couldst not bear to see that which Thou didst create with Thine own hands be lost and slain, wherefore Thou didst stretch out Thy hands upon the Tree, O Word; and by the Tree bring life unto him who died of old.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O friends of Christ, fervent helpers of all, precious flowers, exeedingly adorned vessels of the Spirit, wise passion-bearers: ye are worthily called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The choir of Thy holy spiritual athletes suffered lawfully, O only Bestower of the law; putting the iniquitous to shame by Thy power and, having finished their race, as martyrs, they received crowns.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Thou wast revealed to be incorrupt even after giving birth, O pure one, for from thee God was born in the flesh. Yet upon seeing Him crucified, thou didst cry out in pain from thy womb, unable to bear the sight.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "From within the sea monster Jonah cried unto the Lord: * “Lead me up from the abyss of Hades, I pray Thee; * for with a voice of praise as to my Redeemer, * in the spirit of truth * I offer myself to Thee.”",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Jacob once laid his hands upon the heads of his grandsons, prefiguring the Cross on which Thou, O Word, didst stretch out Thy hands; and Thou didst deliver mankind from the hand of the lying adversary, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When Thou wast willingly crucified, O Christ our King, reigning sin was over- thrown; and Adam, who once, of old, was driven out of paradise, was brought to dwell therein again, hymning Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With unwavering hearts let us hymn the truly beloved martyrs of the Lord, sacred and beautiful in their wounds, who are adorned with celestial majesty.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Keeping their lamps burning continuously, the divine martyrs filled them abundantly with their own blood, and, rejoicing, have obtained entry into the bridal-chamber of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O all-hymned one, we hymn thee as the one who gave birth to the all-hymned God, Who on the Tree destroyed the adverse foe, delivering from corruption those who hymn His sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The sword which before was unsheathed hath now been withdrawn for me since Thou, O compassionate Lord, wast lifted up upon the Cross and pierced with a spear; wherefore, finding dispassion through thy precious suffering, I magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The serpent who was lifted up by Moses on a tree prefigured the divine lifting up of Christ, Who slew the lying serpent granting life unto all mankind, who became dead through disobedience.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "By divine communion ye became children of the beginningless Father, O saints, emulating the most pure sufferings of the Son Who is equally without beginning; wherefore, He calleth you brethren and heirs to His kingdom.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Hung upon crosses like their Master, pierced by spears, run through with swords, cast into fire and water, and broken on the wheel, the God- bearing martyrs rejoiced.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "As the pure one beheld hanging on the Tree the ripe Grapes which she had produced without being cultivated, the pure one cried aloud: O my sweet child, pour forth the juice which removes the drunkenness of the passions!”",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "By the blood which flowed from Thine incorrupt side creation hath been sanctified, O Long-suffering One, the rivers of polytheism have been dried up, and showers of piety have appeared ending the drought of delusions.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The sun was appalled by Thy crucifixion and hid its rays; the rocks split asunder, and Hades, below, was terrified; and the souls of the righteous leapt up, trusting in their ultimate deliverance, O Word.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The remains of the passion-bearers pour forth healings upon the faithful, ever healing the ill affects of all but incurable diseases; for “Wondrous art. Thou in Thy holy martyrs!” we cry, O Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O passion-bearers, ye steadfastly braved the mouths of wild beasts, the boiling of cauldrons, freezing cold and ice, the burden of the heat of day, and violent death; wherefore, ye are glorified with Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Thy Son, the Invisible One, desiring to receive flesh from thy womb, O divinely joyous one, became visible, and accepted crucifixion, and though He was called accursed, He hath delivered all from the curse.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The Son of the beginningless Father, God and Lord, * hath appeared to us incarnate of a virgin, * to enlighten those in darkness, * and to gather the dispersed; * therefore the all-hymned Theotokos do we magnify",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "By Thy wounds mend my broken and contrite state, O unfathomable Word, and by Thy suffering, O Lord God of my salvation, cleanse mine image, which hath been buried under wicked passions.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In Thy goodness Thou wast seen to be uplifted upon the cypress, the pine and the cedar, that Thou mightest save mankind, O Master, Who art One of the Holy Trinity, possessed of a single Hypostasis in two natures.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Armed with the Cross as with a shield, O martyrs, ye were shown to be unharmed by all the arrows of the author of evil; wherefore, ye now trample him underfoot, ever mocking him as a bird of ill omen.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Gaping wide, the earth received your blood, but heaven received your divine spirits, and ye stand before the throne of God with the fiery ranks, O passion-bearing martyrs, unshakable pillars of the Church.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Having supra-naturally given birth to the Author of all creation, yet remaining a virgin, thou didst restore the corrupted nature of our first father. And, beholding Him suspended on the Cross of old, thou didst cry aloud in exclamation, O most pure Virgin Mother.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "The setting up of the Cross is the fall of the demons",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos, in Tone II",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Come, all ye faithful, and together let us chant unto the Theotokos; for she gave birth to Christ in a manner transcending all human understanding, and unceasingly prayeth that He save us all.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "He Who is the image of the Hypostasis of the Father took on matter from thee, O Birthgiver of God, and hath glorified our corrupted nature and restored it.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As one higher in honor than the cherubim, thou hast exceeded the circles of heaven; for in a manner transcending understanding thou didst contain God within thy womb without suffering.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thou hast given birth unto the Lord and Benefactor, the deliverance from our sins, changing the mortality of our forefather Adam, and lifting up our nature to the heavens.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Virgin, we all truly call thee the golden censer, the jar of manna, the mountain of God and the divine and beauteous palace.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In that thou art the temple and sacred dwelling-place of the Word, O most pure and Ever-virgin Theotokos, be thou for me the cleansing offenses.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Neither the tongue of mortals nor the mind of the incorporeal beings are able to describe thy birthgiving, O Theotokos, for thou hast given birth to the Creator in a manner transcending nature and comprehension.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Virgin Birthgiver of God, be thou the confirmation and refuge of those who have recourse unto thee with faith and declare thee to be the Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "From a Virgin didst Thou come forth ...,",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 4 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.wed.canons[0].odes.4.irmos"
              },
              "items": [
                {
                  "text": "Rain down upon me drops of compunction, O Lady, removing all corruption from my heart and staunching the turbid torrents of my mind.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure one, disdain me not who have been stabbed by the sword of pleasures and lie wounded; and heal me with the spear and Blood of thy crucified Son and our God.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-immaculate one, who hast been enriched by dominion over all creation, with divine grace have pity on me who have been sorely impoverished, that I may magnify thee as my good intercessor.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Cool me with repentance, O Virgin, and send down rain to bedew my heart, which hath dried up under the burning heat of the passions, pouring out upon me the oil and healing of thy mercy.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Birthgiver of God, we, the faithful, have come to know the Son Who was born, incarnate, from thee without seed: true God and man by nature. Wherefore, we glorify thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ever fleeing with faith beneath thy protection and help, O most pure Virgin, because of thee we are delivered from every grievous circumstance.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Deliver us from temptations, from the tempest of thoughts, from all wrath and every sin, from famine and plague, and from everlasting torment, O most pure Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As thou art our intercessor, salvation and the hope of Christians, O Lady, save those who ever hymn thee with faith and love, O all-hymned Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "He Who of His own will created all things deigned to make His abode within the womb of her who knew not wedlock; and, in that He is full of loving- kindness, He enriched with incorruption those Sick with corruption.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "O most immaculate One, who art more exalted and holy than the hosts on high, in a supra-natural manner thou didst contain within thy womb the uncontainable Word.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lady, guide me who have strayed from the path of life unto the ways of repentance, for I often wander lost amid the trackless wilderness of sin.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Disdain not the entreaties of us, thy servants, who place our hope in thee, O pure one; for thou art the refuge and cleansing of the souls of all, O Lady.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "The godless order of the lawless tyrant ...,",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 7 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.wed.canons[0].odes.7.irmos"
              },
              "items": [
                {
                  "text": "O Lady, thou who art my might, hymn and salvation, famous aid and unassailable bulwark; vanquish the demons who war against me and who ever seek to slay me.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "From Thy virginal blood thou hast given flesh unto God Who hath deified mankind, O Virgin; wherefore, by thy supplications deliver me who have been defiled by the passions and made corrupt by the wiles of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The furnace, O all-immaculate one, prefigured thy birthgiving; for the flickering fire did not consume the youths, just as the Fire of the Godhead did not consume thy womb. Wherefore, we beseech thee: Deliver thy servants from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "In Babylon, the activity of the fire ...,",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 8 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.wed.canons[0].odes.8.irmos"
              },
              "items": [
                {
                  "text": "O unblemished Ewe-lamb, who hast given birth unto the Lamb of God, the living and abundant salvation of us mortals: Spurn me not who cry out: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure one, thy divine Offspring hath renewed us and shown us all to be sons and children of the day and light; and, saved, we cry aloud: Bless the Lord all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O pure one, from thy virginal womb thou hast given birth to the living Water, and poured forth remission upon the faithful from thy well-spring of healings; wherefore, we all cry aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou gavest rise to the ripe Grapes of life, O pure one; for thou art the vine which sweeteneth the earth with good things, and hymning thee, we cry aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Son of the Beginningless Father ...,",
                "tier": 1,
                "src": {
                  "file": "2-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 9 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.wed.canons[0].odes.9.irmos"
              },
              "items": [
                {
                  "text": "Grant unto me the love of God for all, O maiden, who alone ineffably gave birth unto God the Lover of mankind, and Who assumed flesh from thee. And from the flame which is to come, and from all torment deliver me who glorify thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Having acquired thee alone as a sure intercessor, our hope, bulwark and trust, steadfast protection, an unassailable foundation, a haven safe from storms, and a mighty refuge, O all-hymned one, we are all saved.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O maiden who hast given birth to the divine Light, enlighten my heart, which hath been darkened by the many assaults of the passions and the plots of the alien one, and ever let fall upon me the drops which cleanse me from the defilements of sin, O Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "2-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
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
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone II:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone II:",
        "items": [
          {
            "text": "O Christ God, Thou hast shown the tree of Thy Cross to be a tree of life for us who believe on Thee; and thereby Thou hast abolished the dominion of death and brought life unto us who have been slain by sin. Wherefore, we cry out to Thee: O Lord, Benefactor of all, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having willingly impoverished Thyself for the sake of Adam’s poverty, O Christ God, Thou didst come to earth and became incarnate from the Virgin, and accepted crucifixion, that Thou mightest free us from slavery to the enemy. Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Every city and land honoreth your relics, O passion-bearers and martyrs; for, having contended lawfully, ye have received heavenly crowns: wherefore, ye are the boast of hierarchs and the majesty of the Churches.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "Upon beholding the ripe Cluster, * Whom thou didst bear in thy womb without being tilled, * hanging upon the Tree, O pure one, * thou didst exclaim lamenting and crying aloud: * 'I beseech Thee O my Child, * pour forth that sweetness * by which the drunkenness of the passions is taken away, * for my sake, O Benefactor, ** who didst bear Thee in Thy tender compassion!",
        "tier": 2,
        "src": {
          "file": "2-4.pdf",
          "locus": "Wednesday Matins, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "When from the Tree",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "thu": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy apostles, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Christ God, Who in Thine ineffable love for mankind didst make fishermen wiser than rhetors, and send them forth as preachers throughout the whole world, for their sake make steadfast Thy Church, and send down Thy blessing upon the faithful, O Thou Who alone restest in the saints.",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "As disciples and eye-witnesses to the Wisdom of God, the divine apostles exposed the foolish wisdom of even the wisest rhetors as foolish, by the simplicity of their preaching making the nations wise, that they might hymn the only Creator and Lord in an Orthodox manner.",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 2"
              },
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Their sound hath gone forth into all the earth, * and their words unto the end of the world.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "We magnify thee, O Theotokos, crying aloud: Rejoice, O cloud of the never- setting Sun, who didst bear the Lord of glory within thy womb!",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Fishing for the nations with the net of the Spirit, the fishermen taught the ends of the earth to worship Thee, and the Father and the Spirit, O Christ God. For their sake make steadfast Thy Church, and send down Thy blessing upon the faithful, O only Merciful Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "Fishing for the nations with the net of the Spirit ...,",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 2 (incipit repeat, §2.7)"
              },
              "label": "plain",
              "incipit_ref": "tone2.matins_weekday.thu.sessionals[1].items[0]"
            },
            {
              "text": "O passion-bearers of the Lord, blessed is the ground which was drenched in your blood, and holy the temples which have received your bodies; for ye rebuked the enemy at your trials, and preached Christ with bold- ness. Entreat Him, in that He is good, we pray, that our souls may be saved.",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "The heavens declare Thy wonders, * O Lord.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Through thee, O Ever-virgin Theotokos, * we have become partakers of the divine nature; * for thou hast given birth to God incarnate for our sake. ** Wherefore, as is meet we all reverently magnify thee.",
            "tier": 2,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": "The wellspring of thy loving-kindness ...",
          "items": [
            {
              "text": "Having sent Thy disciples into the world as radiant beacons, O Word, Thou didst enlighten all the earth, delivering all mankind from the darkness of ignorance. Ever entreated by their supplications, O Lover of mankind, illumine my soul, which is in darkness, and save me.",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "With rays of miracles, thou dost enlighten the whole world, dispelling the gloom of tribulations and repelling the attacks of misfortunes, O Nicholas, in that thou art a most fervent intercessor.",
              "tier": 1,
              "src": {
                "file": "2-5.pdf",
                "locus": "Thursday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "O most pure, holy and unwedded Theotokos, who knewest not wedlock, with the apostles ever beseech thy Son, to Whom thou hast given birth in the flesh in a manner transcending nature, that He grant unto all who hymn thee forgiveness offenses, correction of life and release from the passions.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
          "title": "Canon of the holy apostles, the composition of Theophanes, in Tone II",
          "heading_rubric": "Canon of the holy apostles, the composition of Theophanes, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "In the deep of old the infinite Power overwhelmed Pharaoh's whole army. * But the Incarnate Word annihilated pernicious sin. * Exceedingly glorious is the Lord, * for gloriously hath He been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O radiant apostles of the Savior, who through faith became the lightning-bolts of the divine Light, enlighten me, who have wholly become darkened by the darkness of pleasures and have passed all my life in slothfulness.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O disciples and friends of Christ, deliver me who, because of mine affinity for evils, am become a friend of the enemy, and impel my soul toward the love of Him Who, in His goodness, hath loved the race of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O my lowly soul, before my death hasten thou to repent, and weep for thyself, who hast been mortally slain, that He Who in His loving-kindness raised up Lazarus who was four days dead might raise thee up also, by the entreaties of the apostles.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure and immaculate one, who hast given birth to the good God Who doeth good unto all who are held fast by corruption: Entreat Him with the prophets, martyrs and apostles, that He deliver all from perils.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The desert of the barren Church of the nations * blossomed like a lily * at Thy coming, O Lord, * therein hath my heart been established.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Having acquired the Wisdom of God as your Teacher through the Spirit, O saints, ye rendered foolish the wisdom of the pagans, O right wondrous beholders of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Loose ye the barrenness of my soul, O all-praised ones, and cause it to produce fruitful acts in the virtues, in that ye are right blessed eye-witnesses of the Word.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By the supplications of Thine apostles, O greatly merciful Benefactor of all, heal me, who have now been grievously wounded by the venomous sting of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With all the apostles entreat the supremely good God, O most pure one, that we who honor thee may be delivered from every harm, evil circumstance and misfortune.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "From a Virgin didst Thou come forth, not as an ambassador, * nor as an angel, * but the very Lord Himself incarnate, * and didst save me, the whole man; * wherefore I cry unto Thee: * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O Thou Who alone lovest mankind, by the divine intercessions of the apostles who preached Thee throughout the world, nourish with the food of salvation me who am ever starving and famished by hunger.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Into the turbid seas of the world Thou didst ride all Thy glorious apostles like steeds, O Lover of mankind, roiling its salty waters of bitter unbelief.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-famed apostles, who announced Christ the Sun to those in darkness, enlighten me who lie in the darkness of sin, and restrain the wicked thoughts of my heart.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O all-hymned one who hast given birth to the all-hymned God, with the apostles pray for those who hymn thee, that we may be delivered from sins, misfortunes and afflictions.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Christ God Thou art a mediator between God and man; * for by Thee, O Master, * we have been led from the night of ignorance, * to Thy Father, the Source of light.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The great Shepherd sent you forth, His godly apostles, like sheep among wolves, transforming them by the divine grace of baptism and the goodness of your words.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "With divine light ye illumined the hearts of those who languished in the darkness of delusion, O apostles; wherefore, I beseech you: Enlighten me who have been darkened by dark pleasures, O divinely blessed ones.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O my wretched soul, before the end make haste and repent, crying out to the Lord: I have sinned against Thee, O Master! For the sake of the apostles forgive and save me, in that Thou art full of tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With thy light illumine me who lie in darkness, O abode of the Light, and with the apostles pray that by thy supplications He may deliver me from all need, O most immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "In that ye bear the Water of life, O disciples of the Savior, give drink to my soul, which withereth away under the burning heat of sin, I pray.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "As noetic heavens, O divinely radiant apostles, ye declared the ineffable glory of God. Pray ye that all of us may also receive it.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Tempest-tossed on the cruel deep, I come to Thee Who art the Helmsman of all, O Christ. For the sake of Thine apostles pilot me to the harbor of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With all the hosts on high, with the prophets, apostles and martyrs, entreat thy Son on our behalf, O Bride of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Having first been ignited by the fire of the divine Spirit, O apostles, ye quenched the burning coals of delusion and enkindled the love of God in the minds of all the faithful; wherefore, we honor you out loud.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Ye hated the world and those things in the world, and ye loved Christ, Who in the world united Himself to the flesh of men. Him do ye beseech, O divine apostles, that He free me from all evils in this life.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O righteous Judge Who knowest the hearts of all, Who alone knowest my secret offenses: At the hour of judgment condemn me not, neither send me into the fire, by the prayers of Thine apostles.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ineffably giving birth without knowing wedlock, thou wast not consumed by the fire of the Godhead, O Virgin; wherefore, O pure one, pray with the apostles that He free me, who glorify thee, from the everlasting flames.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The Most Holy Spirit, in material form descending upon you in the guise of fire, made you torches burning up ungodliness and enlightening all the pious, O divine apostles of the Word.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O Compassionate One, I pray Thee: Heal my heart, which is tempest-tossed by the passions and is not set aright. And at the entreaties of Thine apostles, enlighten my soul, and direct my mind, which hath inclined unto evil.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Sigh, O my soul, and shed tears in earnest, weeping for thyself before the end, lest inconsolable lamentation overtake thee; and cry out to the Lord: Save me, O Merciful One, by the prayers of Thine apostles!",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The furnace which once failed to burn the children prefigured thy birthgiving, O all-immaculate Virgin; wherefore, I beseech thee: With the apostles and all the prophets, pray that I be delivered from the fire of Gehenna.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The Son of the beginningless Father, God and Lord, * hath appeared to us incarnate of a virgin, * to enlighten those in darkness, * and to gather the dispersed; * therefore the all-hymned Theotokos do we magnify",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O glorious apostles, blessed apostles, disciples of the Savior, all-wise preachers: Deliver me from all harm, from all wrath, from all sin, from every evil circumstance, and from divers perils.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "By the prayers of Thine apostles, O Lord, return me who am condemned, who am incorrigible, who have ignored Thy precepts and, sick of mind, have followed the beguilements of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I possess a soul which is incorrigible, a conscience buried under transgressions, a heart defiled and a sullied mind, O Lover of mankind, yet I cry unto Thee: For the sake of the apostles have pity on me in Thy mercy!",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most pure one, the apostles preached thy Son: God and man: throughout the whole world; wherefore, with them make supplication, that those who magnify thee with faith may be delivered from torments on the dread day of judgment.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
          "title": "Another canon, of the holy hierarch Nicholas, the wonderworker, the acrostic whereof is ‘‘Accept my loving entreaty, O Nicholas,” the composition of Joseph, in Tone II",
          "heading_rubric": "Another canon, of the holy hierarch Nicholas, the wonderworker, the acrostic whereof is ‘‘Accept my loving entreaty, O Nicholas,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Ever standing before the divine throne of grace, O Nicholas, pray that grace and mercy be given to thy servants, who call upon thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "On earth, God hath shown thee to be a great intercessor for the afflicted; wherefore, stand up for me day and night, preserving me from the temptations of the adversary.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Knowing thee to be a daystar, O father Nicholas, let me be delivered by thy radiant beams from the darkness of temptations, from misfortunes and every sin.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Deliver me from bodily pains; heal the indescribable sores of my soul; and rescue me from everlasting fire, O thou who alone art full of the grace of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Lord, who didst slay sin upon the Tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "As thou art a wellspring of healings, O holy one, cure thou the passions of my soul and preserve my life, keeping me, thy servant, free from harm.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Granting my mind recovery from defeat, O great Nicholas, as mine intercessor save me from the harm wrought by the enemies, visible and invisible, who wage war on me.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "He Who alone is good hath given thee to us as a good helper; wherefore, I beseech thee: Free me from all evils!",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O all-immaculate one, thou art my might, joy and gladness, a steadfast bulwark and intercessor, delivering me from temptations and misfortunes.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Adorning thy cathedra with the virtues, O Nicholas, thou wast revealed to be a precious ornament of hierarchs; wherefore, I entreat thee: Make beautiful the ugliness of my soul, and save me from the temptations of the world.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Smooth thou the way which leadeth to heaven, O most blessed one; let me ride lightly upon the waves of life; and steer me into the harbor of life, for I have been made rich by thee, the great intercessor, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O great Nicholas, who hearest words divine, hearkening unto my words deliver me from the temptations of the enemy, from iniquitous men, and from evil circumstances which beset me.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O holy Lady Theotokos, sanctify me night and day, and preserve and guide me to salvation, for I have fallen into many sins and am brought low by the assaults of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O fulfiller of the law of God, entreat the good God, that I may observe the laws of God; and rescue me from the iniquitous foe and the harm wrought by the demons, O all-blessed Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As of old thou didst stand forth, delivering the three youths, O holy one, so now by thy supplications deliver me from every sin, O divinely wise Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O great wonderworker, sacred minister of Christ, surety of sinners: Entreat God, the Bestower of good things, that He not put me to shame at the hour of judgment.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O pure one who hast given birth to the Lord, in that thou art good stand forth and deliver me who am beset by many passions, that, saved, I may hymn thee with soul, heart and tongue.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Whirled about in the abyss of sin ...,",
                "tier": 1,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 6 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.thu.canons[0].odes.6.irmos"
              },
              "items": [
                {
                  "text": "O Nicholas, primate of the people of Myra, with thy good works thou didst perfume the assemblies of the faithful. Deliver me from fetid transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having acquired a heart more brilliant than the sun, O father Nicholas, wholly enlighten me, dispelling the darkness of temptations and tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As one possessed of the broad expanse of mercy, O Nicholas, deliver me from all straits, and strengthen me that I may walk the narrow path which leads to the Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Every hour I call upon thee, O most pure one, that I may find thee to be a helper rescuing me from all affliction and dreadful torments.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Every day I experience the fire of temptations, O father Nicholas; I pass among snares like a bird, and hasten under thy compassionate protection. Preserve me untouched by harm, entreating the good God and Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Swiftly hearkening to my words, O father Nicholas, hasten thou to come to the aid of me who am tempest-tossed by the tribulations and necessities of life and the affliction of the demons, that, saved, I may hymn thine intercession.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O father Nicholas, who of old appeared in a dream to the emperor, delivering the innocent ones who were set to be executed, ever deliver me from the assaults which beset me, from sickness of body and pain of soul.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thee alone do I have as a helper, O most pure one; thee do I declare to be the preserver of the life of all. Disdain me not, thy servant, O thou who alone art the intercessor for the whole world, but save me who chant: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "God Who descended into the fiery furnace * with the Hebrew children, * and transformed the flame into dew, * do ye works hymn, * and supremely exalt as Lord throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O divinely wise father Nicholas, who received from God the authority to loose and to bind, by thy supplications loose the bonds of mine evils, and bind me to the divine love of the Master Who desired to become a man.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Visit me day and night with thy divine presence, smoothing the way for my lowly soul, O holy Nicholas; and preserve me unwounded by the temptations of the evil one, which assail me.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Grant me a hand to stretch forth for the help of God, and preserve me from the cruel expectation of the enemy, O Nicholas who once delivered the youths from a bitter death, that I may honor thee as my good intercessor.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When Thou shalt sit on Thy dread throne to judge the world, O God, enter not into judgment with Thy servant, but, by the prayers of Nicholas, grant unto me the portion of the saved.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By thy birthgiving, O Birthgiver of God, thou didst supra- naturally magnify us who have been brought low by great and unimaginable evils. Wherefore, we pray to thee, O most pure one: Magnify thy rich mercies within us.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 6"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "God the Word, God of God, * Who by ineffable wisdom came to create Adam anew * after his grievous fall to corruption through eating * and Who took flesh beyond all telling from the Holy Virgin for our sake, * Him we faithful with one accord magnify in song.",
                "tier": 2,
                "src": {
                  "file": "2-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "I know thee to be a standard for the priesthood and model of meekness, O wise Nicholas. By thy supplications still thou the storm of passions and misfortunes which assail me all the days of my life, and keep me unharmed, O most sacred father.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As a most sacred vessel deemed worthy of the divine Myrrh which is mercifully poured forth upon the earth, perfume the hearts of us all, O wise one who wast the chief hierarch of the people of Myra, dispelling the stench of temptation by thy supplications.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Bring peace to my soul, which is sorely troubled by the invisible horde; and allay for me the countless temptations which the deceiver hurls at me day and night, and show thyself to be my good intercessor, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The dread day of the Master approacheth and draweth nigh. What then shalt thou do, O my soul, being possessed of a multitude of sins. Hasten thou before it is too late, and cry out earnestly to the Lord: Through the supplications of Thy holy hierarch Nicholas, save me!",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Spare me O Lord, spare me, when Thou shalt come to render judgment, and condemn me not to the fire, neither rebuke me in Thine anger; for the Virgin who gave Thee birth, the multitude of the apostles, and the glorious Nicholas entreat Thee, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "Accept my loving entreaty, O Nicholas",
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the apostles, in Tone II:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the apostles, in Tone II:",
        "items": [
          {
            "text": "Throughout the whole world Thou didst magnify the names of Thy preeminent apostles, O Savior, for they learned heavenly things and gave ineffable healings unto mortals. They who were fishermen healed diseases by their hand- kerchiefs alone; they who were Jews theologized the doctrines of grace. For their sake, O Thou Who art full of loving-kindness, grant us great mercy.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "We, who are ever assailed by the actions of the unrighteous, yet truly find refuge in Thee, Who art God, offer unto Thee the voice of Thy disciples, saying: Save us, O our Instructor, for we are perishing! And we pray: Show now to our enemies that Thou dost protect and save them from misfortunes by the prayers of the apostles, overlooking their sins in Thy great goodness. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "The multitude of Thy saints entreateth Thee, O Christ: Have mercy and save us, in that Thou lovest mankind!",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "All of my hope I place in thee, O Mother of God; keep me under thy protection.",
        "tier": 1,
        "src": {
          "file": "2-5.pdf",
          "locus": "Thursday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "fri": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns of the holy and precious Cross, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Thou didst work salvation in the midst of the earth, O Christ God, and on the Cross didst stretch out Thy most pure hands, gathering to Thee all the nations, who cry: Glory to Thee, O Lord!",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "Just as the enemy made Adam captive by the fruit of the tree, so didst Thou Thyself make the enemy captive by the tree of the Cross and Thy suffering, O Lord; for Thou camest as the Second Adam for this purpose: to seek out the lost and bring life to the dead. Glory be to Thee, O Lord!",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Exalt ye the Lord our God, and worship the footstool of His feet, * for He is holy.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Beholding Thee, O Christ, stretched dead upon the tree, * Thy virgin Mother cried out with bitter tears: * O my son, what is this fearful mystery? * How dost Thou give eternal life to all, ** and yet suffer willingly a shameful death upon the Cross?",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Matins, sessional set 1 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "The life-creating Cross of Thy goodness, which Thou hast given unto us, the unworthy, O Lord, do we offer unto Thee in supplication: Save Thy city, granting it peace for the sake of the Theotokos, O Thou Who alone lovest mankind.",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "We bow down before Thy most pure image, O good One, asking forgiveness for our transgressions, O Christ God; for of Thine own will Thou wast well- pleased to ascend the Cross in the flesh, that Thou mightest deliver that which Thou didst create from slavery to the enemy. Wherefore, we cry out to Thee in thanksgiving: O our Savior, Thou hast filled all with joy when Thou camest to save the world!",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            },
            {
              "text": "Having Thee Who clothed the sky in clouds as their vesture in the world, the saints endured torments at the hands of the iniquitous, and abolished the deception of idolatry. By their supplications free us also from the invisible foe, O Savior, and save us.",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "God is our King before the ages; * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Standing beside Thy Cross, * she who gave birth to thee without seed * could not endure seeing Thee unjustly suffering, * and cried aloud to Thee, * weeping and lamenting: * ‘O my sweetest son, how dost Thou suffer, * though Thou art dispassionate by nature? * I sing the praises of Thine extreme and compassionate goodness.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Matins, sessional set 2 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Like the thief do I confess and cry out to Thee, O good One: Remember me, O Lord, in Thy kingdom! Reckon me with him, O Thou Who didst willingly accept sufferings for our sake.",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain"
            },
            {
              "text": "O good Shepherd, Who hast enlightened mortals and summoned sinners by the Cross, cut me not off from Thy flock, but seek me out who am lost, O Master, and number me among Thy sheep, O Thou Who alone art good and the Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "2-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 3
                }
              ],
              "label": "plain"
            }
          ],
          "verses": [],
          "closer": {
            "text": "Guarded by the precious Cross of thy son, * O pure Lady Theotokos, * we easily turn away all the assaults of the enemy! * Therefore we rightly call thee blessed, * for thou art the mother of light ** and the only hope of our souls!",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Matins, sessional set 3 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy and precious Cross, the acrostic whereof is “When the Cross was planted, the deception of the demons fell,” the composition of Joseph, in Tone II",
          "heading_rubric": "Canon of the holy and precious Cross, the acrostic whereof is “When the Cross was planted, the deception of the demons fell,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Traversing dryshod the impassible, peculiar path in the sea, * Israel the chosen cried aloud: * Let us chant unto the Lord, * for He hath been glorified!",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst accept crucifixion, being ignominiously pierced with nails, O Word, desiring to honor all those who glorify Thy voluntary sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou didst stretch out Thy hands upon the Cross, O Savior Who stretched out the sky like a skin, and didst thereby embrace the nations and those who glorify Thy voluntary sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Shouldering their cross, the passion-bearers earnestly followed the crucified Christ, conforming themselves to His divine sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Beholding your sufferings, the angelic hosts sang, but the multitude of the demons lamented, O victorious martyrs who gaze upon God.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The word of the honorable prophet hath been fulfilled, for a sword pierced thy heart, O Lady, when thou didst see thy Son nailed to the Cross.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Thou hast established me on the rock of faith, * and my mouth hath been emboldened against mine enemies. * For my spirit rejoiceth when I sing: * There is none as holy as our God * and none more righteous than Thee, O Lord.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Hanging upon the Tree, the incorrupt Grapes: Jesus, the Redeemer of our souls: exuded the divine sweetness which gladdeneth the hearts of all and which by grace taketh away the drunkenness of evil.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Of Thine own will Thou wast raised up upon the Tree, O Jesus, and didst foil all the wicked schemes of the devil; and didst raise up mankind who had fallen into destruction through their depraved minds, O greatly Merciful One.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enkindled by the fire of divine love, the valiant ones were undaunted by the fire and unafraid of death, trusting that they would receive gifts of immortality, endless joy and never-waning light.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having dyed a most splendid robe in their own blood and clothed themselves therein, and holding the divine Cross in their hands like a scepter, the passion-bearers ever reign with the Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The ranks of incorporeal beings honor thee, for thou, O maiden Bride of God, hast given birth to the incarnate Master Who by the Tree hath released all who were bound, and thereby bound the faithful to His love.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "From a Virgin didst Thou come forth, not as an ambassador, * nor as an angel, * but the very Lord Himself incarnate, * and didst save me, the whole man; * wherefore I cry unto Thee: * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou wast suspended upon the Tree, O Almighty, Who suspended the earth upon the waters; and, pierced in the side by a spear, Thou didst pour forth blood and water for the salvation of all.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When Thy side was pierced, it healed my sickness; when thou wast smitten on the cheek by the hand of man, I received freedom; and by Thy tasting of gall, O Christ, we have been delivered from the sweet taste of the fruit in Eden.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having been lashed by the whips of the deceiving serpent, ye heal the stripes of our hearts, ever pouring forth grace from the wellsprings of the Savior, O divine martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Bloodied by your wounds, stretched out upon crosses, and maimed, ye dealt a blow to the whole body of the enemy, O all-honored God- seeing passion-bearers.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The Most High became incarnate from thy most pure blood; and beholding Him, unjustly suspended upon the Tree, O most pure one, thou didst groan, weeping, and magnifying His tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The burning Ember was revealed to Isaiah, * and the Sun hath shone forth from the Virgin's womb, * granting the enlightenment of the knowledge of God * to those who in darkness have gone astray.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Having accepted the Cross in Thy tender compassion, O Master, Thou didst draw me forth from the abyss of evils, and by sitting with the Father Thou didst honor me, who of mine own will have become dishonored.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Crowned with thorns, O Word who dost crown the whole world with fauna, Thou dost hew down the thorns of my passions at the root, planting the understanding of Thee within me.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Arrayed of your own will in the strength of your weakness, O holy martyrs, fortified, ye thereby destroyed the might of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Having struggled greatly upon the earth, O saints, ye have found great glory in the heavens, and deliver from great misfortunes us who honor you.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "He Who in the heavens is divinely borne upon the shoulders of the cherubim, and Who sat upon thine arm, O most pure one, truly delivered all from corruption when He was crucified.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Master, hearkening unto the sound of entreaties * from a soul in pain, * do Thou deliver me from my grievous sins, * for Thou alone art the Cause of our salvation.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Having given Thy shoulders over to stripes, Thy cheek to buffeting, and Thy face to spitting, O Savior, Thou didst save me who have sinned greatly against Thee in knowledge and in ignorance.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast led like a lamb to the slaughter, O Christ my God, leading back to life those who had been slain by the poisonous bite of the noetic wolf. Glory to Thy crucifixion!",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Observing the laws of the Master, the martyrs utterly rejected the iniquitous counsel of the violators of the law; and, dying, they received the life which is to come.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having arrayed yourselves, rejoicing, against the adverse princes, O saints, ye vanquished them with the weaponry of God, and have received from Him crowns of victory.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "That He might deify mankind, O Virgin, God was born from thee, and crucified, and tasted death, by His Cross slaying him who of old brought death upon me.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "When Thou wast lifted up upon the Cross, O Word Who art the resurrection and uplifting of all, Thou didst raise me up who had fallen through disobedience; casting down the adversary who caused me to fall, and showing him to be wholly impotent and dead. Glory to Thy dominion!",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By Thy nails Thou didst transfix the sins of our forefather; and, beaten with the reed, thou didst sign a writ of emancipation for all mankind. Glory be to Thy suffering, whereby we have been delivered from the darkness of the passions!",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The right victorious great martyrs of Christ were dismembered by the hands of vile murderers, yet in spirit they remained inseparable from God, felling and slaying the deceiving enemy with the sword of valor.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Possessed of the invincible might of the crucified Christ, the invincible army utterly destroyed the army of perdition; and, having suffered, they received crowns of victory and a blessed life which cannot be destroyed.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O Virgin, thou wast shown to be the animate palace of the King and the fiery throne, on which, having sat, He raised all up from the primal fall and honored them by sitting with the Father.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Disdaining the golden image, the thrice-blessed children, * beholding the immutable and living image of God, * chanted in the midst of the flame: * Let all existing creation hymn the Lord * and supremely exalt Him throughout all ages!",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Disobedient men, who lacking compunction wrought all manner of iniquities, raised up upon the Tree between two malefactors Thee, Who dost justify sinners, crucifying Thee, O Compassionate One; but all creation glorifieth Thee as Lord and Master, hymning Thy long-suffering.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Nailed to the Tree, Thou didst bloody Thy fingers, O Christ, and Thou didst bring an end to the blood sacrificed of old to the demons unto the damnation of those who offered it up. Wherefore, all creation glorifieth Thee, hymning Thy love for mankind, O God of all.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The immeasurable quantity of your blood quenched the fire of ungodliness and did away with the delusion of pagan polytheism, O saints; illumining all the faithful, who chant: Let all creation hymn the Lord and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The unblemished Ewe-lamb, the adornment of the prophets and martyrs, beholding Thee lifted up upon the Tree like a lamb, O Word Who art without beginning, wept bitterly and said: “Let all existing creation hymn the Lord and supremely exalt Him throughout all ages!”",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Every tongue is at a loss to praise thee as is due: * even a spirit from the world above is filled with dizziness, * when it seeketh to sing thy praises, O Theotokos. * But since thou art good, accept our faith: * Thou knowest well our love inspired by God, * for thou art the Protector of Christians and we magnify thee.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Of old, Isaac was bound, that he might provide an image of Thy suffering; and as a symbol of remission Abraham freed the lamb who was caught in the thicket, releasing a truly involuntary sacrifice. But Thou wast willingly sacrificed, Thou didst thereby free us from evils.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Glory to Thy loving-kindness, O only loving Lord Christ, Who art comely in beauty more than the sons of men, yet wast bereft of form and beauty when Thou wast hung upon the tree of the Cross, transforming the ugliness of the whole race of mankind into beauty!",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye were shown to be divine inhabitants of the heavenly Sion and fellow citizens equal in honor with the angels, O martyrs; and ye illumine with splendor the Church of the firstborn, O saints, shining with divine light, and wearing your torments as crowns.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "O holy martyrs and beloved friends of the Lord Who most gloriously loved you: Deliver me from the friendship of the deceiver, which is of the flesh; and ask that sanctification, enlightenment and the remission of transgressions be given to all who keep your memory.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "The beauty of the heavenly spheres left their usual course when they beheld Thee, the Sun of righteousness, willingly lifted up upon the Cross; and with the virginal disciple the Virgin exclaimed, weeping and crying aloud: “Woe is me! What is this strange sight?”",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "When the Cross was planted, the deception of the demons fell",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos, in Tone II",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O maiden, who hast given birth to the Source of dispassion, heal me who am wounded by the passions, and rescue me from the everlasting fire, O thou who alone art full of divine joy.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Deliver me from bodily illness, and cure the unseemly passions of my soul, and rescue me from everlasting fire, O thou who alone art full of the grace of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I flee now beneath thy goodness, O most pure Virgin Mother: Deliver thy servant from pain of soul, from spiritually corrupting passions and everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lady, thou art my fervent sanctuary: unto thee do I flee and am saved, and acquire salvation of soul. For thou canst save all, in that thou art the Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Thou hast established me on the rock of faith ...,",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 3 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.fri.canons[0].odes.3.irmos"
              },
              "items": [
                {
                  "text": "Unto the King, Who is without beginning and Who had received flesh from thee, O Virgin Mother, thou hast given birth. Entreat Him as the Lover of mankind, that He save thy servant from all the tribulations and damnation which is to come.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Resolve the perplexity of my heart, heal my wounds and rid me of festering corruption by thy divine power; and grant me a stream of compunction, O thou who hast given birth to the Source of everlasting life.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Birthgiver of God, heal my soul, which hath become sick through despondency and the assaults of the demons; grant tears of repentance to my heart, and plant therein the fear of my Master, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having wasted my life in slothfulness and defiled my heart with the passions, I come to thee in compunction of soul, O Lady, and pray: Have pity and save me, making me steadfast by models of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "I truly hymn thee, O all-hymned one, who hast supra-naturally given birth to the all-hymned Word of God; and I pray: Heal the pangs of my lowly soul, and deliver me from grievous condemnation.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Rain down upon us the riches of thy mercy, O Virgin, ending our infirmities and loosing the divers passions of our souls; and free my heart from the bonds of sin and from many pangs.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "I have defiled my soul with the passions; but do thou, who didst become the most pure dwelling-place of the Most pure One, O Birthgiver of God, cleanse me, guiding me to the light of repentance and rescuing me from the fire which is to come.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enlighten my mind, O most pure Lady, I pray thee; and still the waves of my passion-plagued heart, putting down carnal desires and leading me to the divine haven.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Christ my Savior, the enlightenment of those lying in the darkness of sin. * I rise early to hymn Thee O King of Peace, * enlighten me with Thy radiance, * for I know no other God than Thee.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O all-immaculate Lady Theotokos, who hast given birth to the hypostatic Life of all, enliven me who have been slain by the assaults and pursuit of the deceiver, that I may piously hymn thee, the all-hymned one.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As the Virgin Mother of the Lamb and Shepherd, shepherd me whose conduct is unlawful, and grant that on the day of judgment I may be reckoned with the lambs on the right hand of God, that I may hymn thy saving grace.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "By thy supplications, O maiden, deliver me, I pray, from the darkness of the passions, from temptations caused by the assaults of the alien one, and from the everlasting torments which await sinners.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Bride of God, in whom dwelt the one divine Word Who enlighteneth the whole world: Shine upon me the radiance of true repentance, and illumine me with beams of salvation, dispelling the darkness of my passions by thine intercessions, I pray.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "I flee now unto thee, O all-hymned one. Save and preserve me by thy supplications; for whatsoever thou desirest, thou canst do, in that thou art the Mother of Him Who strengtheneth all.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Virgin Theotokos, save thy servant, who am tempest-tossed by the storm of griefs, and am overwhelmed by the battering of threefold waves.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Grant thy loving-kindness unto me who am an object of pitilessness and malice; and rescue me from the retribution which lieth before me and from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O all-immaculate one who having conceived, hast given birth to the most pure Lamb Who taketh away the sins of the world, cease not to pray to Him, that He grant me the forgiveness of my sins.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The godless order of the lawless tyrant ...,",
                "tier": 1,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 7 irmos (incipit device, §2.7)"
                },
                "incipit_ref": "tone2.matins_weekday.fri.canons[0].odes.7.irmos"
              },
              "items": [
                {
                  "text": "O pure one, who for us hast given birth to the hypostatic Life Who clearly destroyed death by His death, slay thou the passions of my soul, and grant me a fountain of tears, that I may ever glorify thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Hope unashamed, a certain trust, an unassailable rampart, protection and helper, O all-immaculate one, be thou unto me who set my hope on thee; and guide me to the light of repentance and compunction, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "That thy servant may be delivered from all the evil of the demons, from grief and damnation, and from everlasting fire, entreat thy Son, that I may ever glorify thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thou alone hast been shown to be the one whose conception was most pure and whose birthgiving was incorrupt, such that thou didst remain a virgin; for thou didst conceive Christ, the God of all, Who became a man, O pure one, for the salvation and deliverance of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "God Who descended into the fiery furnace * with the Hebrew children, * and transformed the flame into dew, * do ye works hymn, * and supremely exalt as Lord throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O most pure Virgin, refuge and helper of Christians, disdain me not who am surrounded by evils and am ever beset by misfortunes and the many onslaughts of the wicked demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Forget not the cry of those who pray to thee, O awesome intercessor, but by thine intercessions rescue them from all pain and every threat; for thy maternal supplications incline God to mercy.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Still now the tempest of my passions, O pure and blessed maiden, and vanquish all the incorporeal foes who pitilessly assail my poverty, that I may hymn thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "At the hour of mine end, O only Birthgiver of God, intercessor for the faithful, rescue me from the furnace of temptations, the flame of sins and the fire of the passions, from Gehenna and the assaults of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The Son of the beginningless Father, God and Lord, * hath appeared to us incarnate of a virgin, * to enlighten those in darkness, * and to gather the dispersed; * therefore the all-hymned Theotokos do we magnify",
                "tier": 2,
                "src": {
                  "file": "2-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "In a manner transcending understanding and all telling thou hast given birth to the only greatly merciful Lord and Lover of mankind. Him do thou beseech, O Virgin, that at the dread hour of judgment He deliver thy servant from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Bride of God, from heaven grant remission of evil unto us who hymn thee, who glorify thee with faith, and ever hasten to thy divine protection; and deliver us from the despotic passions, from torments and judgment.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The fruit of sin which brought death upon me was beautiful to behold, yet most bitter to taste; yet because I ate of it to satiety, I await the dread judgment. But rescue me therefore, O most holy Virgin Mother.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In that thou didst bear the good One and art wholly good, O most pure one, bless my lowly heart, which hath been restrained by the bars of pleasures; and lead me through the beautiful doors of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "2-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone II:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone II:",
        "items": [
          {
            "text": "O Christ God, Thou hast shown the tree of Thy Cross to be a tree of life for us who believe on Thee; and thereby hast Thou abolished the dominion of death and brought life unto us who have been slain by sin. Wherefore, we cry out to Thee: O Lord, Benefactor of all, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having willingly impoverished Thyself for the sake of Adam’s poverty, O Christ God, Thou didst come to earth and become incarnate from the Virgin; and accepted crucifixion, that Thou mightest free us from slavery to the enemy. Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having suffered like Christ even unto death, O passion- bearing martyrs, your souls are in heaven, in the hand of God, and your relics are venerated throughout the world. The priests bow down, and all of us, the people, cry aloud, rejoicing: Precious in the sight of the Lord is the death of His saints!",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Matins, aposticha item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "text": "When the unblemished ewe-lamb beheld her Lamb * willingly led as a man to the slaughter, * she said, weeping: * “Dost Thou now hasten to leave me childless who gave Thee birth O Christ,? * What is this that Thou hast done, O Redeemer of all? * Even so I will hymn and glorify Thine extreme goodness, * which is beyond understanding and all telling, ** O Lover of mankind!”",
        "tier": 2,
        "src": {
          "file": "2-6.pdf",
          "locus": "Friday Matins, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "sat": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy martyrs, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Having as their vesture Thee Who dost clothe the sky with clouds, in the world the saints endured torments at the hands of the iniquitous, and set at naught the falsehood of the idols. By their prayers, O Savior, free us from the invisible foe, and save us.",
              "tier": 1,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O ye apostles, martyrs and prophets, hierarchs, holy monks and righteous men, ye who have fought the good fight, and kept the faith to the end: since ye have boldness in the presence of the Savior, we entreat you, pray to Him on our behalf that in His compassionate love He may grant salvation to our souls.",
              "tier": 1,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O Bestower of life, Who as God hast dominion and authority over all the living and the dead: Accept the prayers of Thy servants; show forth Thy mercy, O Lover of mankind, and in Thy loving-kindness grant remission of sins unto the souls of those whom Thou hast taken to Thyself, for the sake of their hope in Thee, in that Thou art good.",
              "tier": 1,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 2
                }
              ],
              "label": "plain",
              "spec_mel": "As the wellspring of tender compassion"
            }
          ],
          "verses": [
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 1"
              }
            },
            {
              "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "All of thy most glorious mysteries are beyond comprehension, * O Theotokos; * for, thy purity sealed and thy virginity intact, * thou art known to be a true Mother, having given birth unto God. ** Him do thou entreat, that our souls be saved.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone II:",
          "spec_mel": null,
          "items": [
            {
              "text": "Thou hast made Thy saints to shine brighter than gold, and in Thy love hast glorified Thy holy ones. By their intercessions, set their supplications before Thee as incense, O Christ God, and grant peace to our lives, O Thou who alone restest in the saints.",
              "tier": 1,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "O passion-bearers of the Lord, blessed is the ground which drank your blood, and holy are the temples that have received your bodies. For in the arena ye openly rebuked the enemy, and with boldness preached Christ. * We entreat you, pray to Him, in that He is good, to grant salvation to our souls.",
              "tier": 1,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Remember the souls of Thy servants, O Lord, in that Thou art good, and insofar as they have sinned in this life, forgive them; for no-one is sinless save Thee, Who alone art able to give rest to those who have reposed.",
              "tier": 1,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 3"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
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
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
              "tier": 2,
              "src": {
                "file": "2-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ]
            }
          ],
          "closer": {
            "text": "O Virgin Mary, Theotokos, who hast given birth to Christ, the Redeemer and Savior, with the apostles, martyrs and prophets, the venerable and the hieromartyrs, entreat His goodness, that He grant us cleansing of sins and great mercy",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, sessional set 2 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
          "title": "Canon of the holy martyrs, hierarchs, the venerable, and the departed., the acrostic whereof is “I bear praise unto the close servants of God,” the composition of Joseph, in Tone II",
          "heading_rubric": "Canon of the holy martyrs, hierarchs, the venerable, and the departed., the acrostic whereof is “I bear praise unto the close servants of God,” the composition of Joseph, in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Taking up the Song of Moses, O my soul, * cry aloud: * 'A helper and a protector hath become unto me salvation. * My God, * whom I will glorify'.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Ye patiently endured cruel banishments and grievous wounds, O spiritual athletes, and by divine power ye drove all delusion from the ends of the earth.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The ministers and holy hierarchs of God, shining clearly with noetic light, guided the fullness of all the pious to the light of piety.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Humbling the prideful mind, O venerable ones, ye passed over to the good land; and having been exalted by your godly ideals, ye ever help all the lowly.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thy faithful servants whom Thou hast transported from transitory things, O our supremely good God, do Thou show forth as sharers in the all-radiant light and everlasting gladness, in that Thou art God.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "The honored women, who struggled mightily in asceticism, cast down the enemy by their patience; and, rejoicing, they stand before thee, O Birthgiver of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "My mind hath not brought forth good fruit, * but do Thou show me to be fruitful * in Thy compassion O God, * Thou husbandman of all good things.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Aflame with the fire of the love of Christ, O passion-bearers, ye quenched the burning of torments with the dew of the all-accomplishing Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most holy hierarchs of Christ, and ye honored assemblies of the venerable, on behalf of us all entreat God the Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The most sacred choir of the divine prophets was magnified, and the multitude of the women who suffered manfully hath received glory.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Dying on the Cross, O Christ, Thou didst grant immortality unto the dead. Grant that they who have departed unto Thee in faith may also receive it.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "With all the prophets and the sacred women do thou now earnestly entreat Him Who was born from thee, O Virgin, that He have pity on us.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The prophet foreseeing Thy birth from a virgin, * prophesied crying aloud: * ‘I have heard report of Thee, and I was afraid; * For from the South, from the Overshadowed mountain * shalt thou come forth O Christ’",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "The right glorious passion-bearers, who emulated well the sufferings of Christ, rejoiced when they were racked by many tortures, looking forward to their heavenly rewards; and having received them, they are ever called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Keeping the laws of the Spirit, O ye primates of the Churches, like most excellent pilots ye most wisely guided the people into the divine harbor; and having turned away from the tumults of life, ye have passed over to the tranquility of Life.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye showed yourselves to be sojourners on the earth, O fathers, with a pious mind turning your life toward heaven, and by the power of Christ, taming the pas- sions of the flesh with the pangs of asceticism.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The honorable women, desiring a godly death, and truly asking thee to pray for endless life, O most pure Lady, Birthgiver of God, have through thee been deemed worthy of it; and they pray to thy Son and God on our behalf.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "plain"
                },
                {
                  "text": "Grant everlasting life, O Master, to the great multitude of those who worshipped Thee in the Orthodox Faith, and whom Thou hast taken away from this transitory life, reckoning them among the multitude of the saved.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "The prophet Habbakuk saw thee as a mountain overshadowed by the virtues, from whence God ineffably appeared, Who covered the heavens with virtue and saved the race of mankind from corruption, O Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 6"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Having dispelled the gloom of my soul, * O my Savior, do Thou illumine me * with the light of Thy commandments * for Thou alone art the King of peace.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Loving Thee, O Compassionate One, the valiant passion-bearers, subjected to tortures, spurned all earthly things by rejecting the flesh.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O holy hierarchs, prophets, and ye Godbearing venerable ones, ye enlighten the world with the rays of the Spirit, dispelling the darkness of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The venerable fathers, prophets and hierarchs, and the ever-glorious women earnestly pray to Thee, the Master of all, on our behalf.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "We beseech Thee, O Word: Enrolling those whom Thou hast taken from among us in the choir of Thine elect, show them to be sharers in the higher life.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "O most pure Virgin Mother, thou boast of the martyrs, the venerable and the righteous, free us from all the tyranny of the evil one.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "I am held fast in the depths of sin O Savior, * and am overwhelmed by the sea of life, * but as Jonah was delivered from the sea-monster, * so also deliver me from the passions, * and save me.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Arrayed in strength of heart against the enemy, the spiritual athletes cast him down and have received crowns of victory from God; and they now pray earnestly on behalf of all mortals.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Saved from all wrath, tribulation and the assault of the enemy by their supplications, with faith let us honor the holy hierarchs of God and bless His venerable ones.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The godly choir of women suffered, and pleased God in fasting, and received the heavenly kingdom. By their prayers have pity on Thy world, O God.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Christ, Bestower of life, Who fashioned man out of earth, give rest unto those whom Thou hast taken from us, granting them remission of evils, in that Thou art full of loving-kindness and the Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "O holy Theotokos, sanctify our thoughts, strengthen our mind, and preserve unharmed by the arrows of the enemy us who glorify thy mighty works, O all-hymned one.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Like unto the cherubim, the Children rejoicing in the furnace sang: * 'Blessed art Thou O God, * for in truth Thou hast brought this judgment upon us * because of our sins, * Thou art supremely praised and glorified throughout all ages'.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The saints cast down the enemy by their patience, enduring every temptation of cruel tortures, for they truly loved God Who suffered for our sins. By their prayers, O Word, from perils and misfortunes save all of us who glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O radiant hierarchs, ye venerable and righteous, O right glorious multitude of hieromartyrs, and sacred company of holy women who shone forth in suffering and asceticism: Ever supplicate unto God, that He have mercy on us.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The multitude of the martyrs beseech Thee, O Christ our Benefactor. From all woes, tribulations, grievous perils, all transgressions, and from harm, do Thou save me who am perishing, O Word.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Where the light of Thy countenance shines, O Christ, from whence all sickness, sighing and grief have fled, and where the assemblies of the saints now join chorus, do Thou number the souls of all who have departed unto Thee, overlooking all their transgressions, in that Thou alone art merciful, O Thou Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "With the martyrs and the venerable fathers, with all the prophets and holy women, O most pure one, entreat Him Who alone resteth in the saints, that He sanctify all of us who forever glorify thee with holy voices, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Unto Him Who of old prefigured the miracle of the Virgin, * unto Moses in the burning-bush * on Mount Sinai, * let us sing, bless and supremely exult throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The streams of your blood sanctified all creation and manifestly dried up the stench of delusion, O passion-bearers of the Lord; giving drink in abundance to the souls of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the assembly of holy hierarchs and women, and the glorious prophets, the choir of ascetics hath appeared, which is equal to that of the angels; for on earth they lived the life of the angels through the Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O passion-bearers of the Lord, ye primates and prophets, ye multitude of the venerable, and holy women: From the arrows of the enemy deliver all of us who praise you.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Those whom Thou hast taken from us, O Savior, do Thou cause to dwell in the bosom of Abraham, and grant them rest with all the elect, and the remission of sins unto all, in that Thou art most compassionate.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "O pure Birthgiver of God, with all the holy prophets and martyrs, with the venerable, the hieromartyrs and the holy women, beseech the Savior to have pity on us.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "In a manner surpassing nature, * the Word who timelessly shone forth from the Father, * hath been conceived within a womb, * according to the flesh, * O ye faithful with never silent hymns let us magnify Him.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Shown to be mighty against the passions and powerful against the enemy, O passion-bearers, having contended lawfully ye took the prize and were crowned by God.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As godly sacred ministers and emulators of the good Shepherd, O divinely glorious primates, ye tended His sheep in holiness.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the venerable, the ascetics and the sacred prophets let us honor the multitude of women who suffered and cast down the enemy by fasting.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "The most glorious multitude of Thy saints unceasingly entreat Thee, O Lord: Show forth as sharers in everlasting life those in the Faith, whom Thou hast brought over to Thyself, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "for_the_reposed"
                },
                {
                  "text": "O pure Virgin Mother, who hast given birth in the flesh to the compassionately loving God, with all the saints ever entreat Him, that He save us from misfortunes.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "I bear praise unto the close servants of God",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the departed, which we chant when there is no Menaion, the acrostic whereof is “I weave a second hymn for the reposed,” in Tone II",
          "heading_rubric": "Another canon, of the departed, which we chant when there is no Menaion, the acrostic whereof is “I weave a second hymn for the reposed,” in Tone II:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us sing a song unto the Lord, * Who by His divine command * dried up the billowing and impassable sea, * and through it led the Israelite people on foot: * for gloriously hath He been glorified.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Trampling down death by Thy death, Thou didst pour forth the eternity of divine life, which do Thou bestow upon the souls of the departed, O good One, by the supplications of Thy martyrs, granting them remission of transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "O Christ, Who ever pourest forth rich mercy, in that Thou art full of loving- kindness grant a place of ease in Thy dwelling-place, in Thy wondrous tabernacle, unto Thy servants who ever piously accept Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thou wast stronger than death, O Christ; wherefore, binding it, Thou didst deliver us, and hast now, as God, delivered the departed from its prison. Grant that they may share in Thine effulgence.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "Making my wavering mind steadfast, O Mother of God, strengthen me with the divine precepts of Him Who was born from thy sanctified womb, and abolished the dark kingdom of Hades, O Lady.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
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
                "text": "Thou hast established me on the rock of faith, * and my mouth hath been emboldened against mine enemies. * For my spirit rejoiceth when I sing: * There is none as holy as our God * and none more righteous than Thee, O Lord.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Be Thou well-pleased that those who have fallen asleep in the Faith may with Thy martyrs be illumined by the splendor of Thy beauty, O Thou Who art rich in mercy, for Thou art our God, and there is none more righteous than Thee, O Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "In that Thou art compassionate, grant Thy servants to dwell in a place of coolness, in the bosom of Abraham Thy chosen one, for They cry out to Thee: Thou art our God, and there is none more righteous than Thee, O Lord.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thy lamp-bearing servants, who by Thy will Thou didst translate from among fleeting things, O Master and Lover of mankind, do Thou cause to dwell in the bridal-chamber of heaven, entering therein with the wise virgins.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "In giving birth to the Bestower of life, thou didst raise me up, who was slain and given back to the earth; and from the uttermost depths of Hades thou didst lead me forth, who glorify thee, the Theotokos, with faith and who honor thee, the all-hymned and most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 4"
                  },
                  "label": [
                    "both_now",
                    "theotokion"
                  ],
                  "sourceLabel": "Both now ..., Theotokion:"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "I hymn Thee, O Lord, for I have heard report of Thee, * and I was afraid; * for Thou comest to me, seeking me who am lost. * Wherefore, I glorify Thy great condescension towards me, * O greatly merciful One.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "In Thy great love for mankind, and by the supplications of the chosen martyrs, O Christ, grant Thy glory, which is past understanding, unto Thy servants, who live by hope, love and an Orthodox understanding.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "In that Thou art possessed of an ever-flowing torrent of sweetness, O Lord, ever give drink unto the elect; and in Thine ineffable loving-kindness, O Christ, with them Thou dost feed by the rivers of remission those who have now departed unto Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thou art the Lord of the living and hast dominion over the dead, O Master, and by Thy power Thou dost raise up the dust in the earth; wherefore, those who have passed over to Thee, O Savior, do Thou cause to dwell in Thy courts.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "Thou didst mend the broken state of Eve and annul the ancient curse; for thou hast given birth to the Creator, Who is able to set aright us who have been cast down by transgressions, O only Birthgiver and Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "From the dark chambers of Hades Thou didst lead forth and rescue us who had been given over to death and corruption, O good One, enrolling us in the armies of the holy angels.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "As Thou didst come to save us with Lazarus, O Christ, in the bosom of Abraham, receive now those who have passed over to Thee in piety, in that Thou art good.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thou didst first bring an end to my long and lengthy battle for Thee, the Mediator and Advocate of reconciliation, O Master. In Thy pity grant rest now to Thy servants.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "They who trust in thee find safety beneath thy protection, O Mother of God; for thou hast given birth for us to the Bestower of life, Who by His will imparteth life unto us.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Unto those whom Thou hast taken from the earth by Thine all-accomplishing will, O Lover of mankind, do Thou grant ineffable and divine radiance where the choirs of the martyrs are.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Unto those whom Thou hast taken from the earth by Thine all-accomplishing will, O Lover of mankind, do Thou grant ineffable and divine radiance where the choirs of the martyrs are.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O Master, grant that those who have departed this life, and have passed over to Thine ineffable light, may be illumined with the beauty of Thy glory.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "Thou didst show thyself to be the deliverer of those who call upon thee, O most pure Lady who hast given birth to God, Who hath dominion over life and death.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                "text": "The godless order of the lawless tyrant * fanned the roaring flame; * but Christ bedewed the God-fearing children with the Spirit, * therefore He is blessed and supremely exalted.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O Lord Who art everywhere present, Thou didst come down to save the race of mankind, which was led astray of old; wherefore, the martyrs entreat Thee: Unto those whom Thou hast translated from the earth, O Savior, grant rest in the land of the meek.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Only Thou art free among the dead, O Christ, shaking off the mortality of death. Deliver Thou Thy servants now from the mortality of sin, O Master, showing them to be heirs of Thy kingdom.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "In Thy great and ineffable tender compassion and the unfathomable depths of Thy love for mankind, O Christ, grant remission of transgressions unto the departed, and show them to be cleansed by Thy grace.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "Thou wast a lamp of divine glory, O Virgin, for through the Spirit thou didst bear Effulgence: Him Who appeared to us in the flesh and with the radiance of His divinity destroyed the gloom of Hades, O divinely joyous one.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
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
                "text": "In Babylon, the activity of the fire was once divided, * for, by the command of God it consumed the Chaldeans, * but bedewed the faithful, who chant: * Bless ye the Lord, all ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "By Thy condescension Thou didst show us the death of our enemies, in that Thou art immortal; and by Thy divine power thou didst reveal to us entry into life, which Thy martyrs have now received as is meet, O Immortal One.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Grant that the departed may delight in Thy noetic beauty, cleansing them of the dishonor of shameful sin, in that Thou lovest. mankind; for Thou alone wast revealed as foreign to sin, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Thou hast set us aright who had fallen into the dust of death, O Christ, by Thy death granting life, the food of immortality, and everlasting joy, which Thou dost grant unto those who have now fallen asleep, in that Thou art merciful.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                  "text": "Great and awesome is the mystery of thy birthgiving, O Mother of God, for thou hast given birth unto God Whom death could not endure and the grave could not corrupt; wherefore, all of us, the nations of the earth, glorify thee, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
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
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Thee do we magnify, O blessed and all-pure Theotokos, * who through thy virginal womb ineffably brought forth * God incarnate, * the Luminary Who shone forth before the sun * and hath come to us in the flesh.",
                "tier": 2,
                "src": {
                  "file": "2-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O Ruler Who hast authority over the living and the dead: Unto those who have passed over to Thee from life do Thou grant the inheritance of heaven and the splendor of the saints and Thy most glorious passion-bearers, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
                    }
                  ],
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "O Word. Who of old bestowed upon me most essential life, and now givest it to me again: In that Thou art merciful, cause Thy departed servants to dwell in the longed-for bosom of Abraham our ancestor.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    },
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O my Savior, Thou art wholly the most splendid delight, Thou art. wholly the desire which cannot be satisfied! Give the torrents of Thy sustenance and the water of remission as drink to those who have fallen asleep, and who unceasingly glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "glory"
                },
                {
                  "text": "We, the faithful, now bless thee as is meet, O Theotokos, following thy divinely inspired words; for unto mortals thou alone hast given birth to God, Who destroyed the power of death, O Virgin Mother.",
                  "tier": 1,
                  "src": {
                    "file": "2-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 2
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
          "acrostic": "I weave a second hymn for the reposed"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. On the Praises, these Stichera of the martyrs, in Tone II:",
      "praises": {
        "rubric": "On the Praises, these Stichera of the martyrs, in Tone II:",
        "items": [
          {
            "text": "Ye suffered for Christ’s sake unto death, O passion-bearers, and though your souls dwell in the hand of God in the heavens, your relics are venerated throughout the whole world; Priests and all the people venerate them, and rejoicing with them we cry aloud: precious in the sight of the Lord is the death of His saints.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises item 1"
            },
            "label": "martyrs"
          },
          {
            "text": "Every city and land doth honor your relics, O passion-bearers. For, striving lawfully for the prize, ye have received crowns from heaven; wherefore ye are the boast of hierarchs, and the majesty of the Church.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises item 2"
            },
            "label": "plain"
          },
          {
            "text": "O holy martyrs, taking up the Cross of Christ as an ensign of victory, ye set at naught all the power of the devil; and receiving heavenly crowns, ye have become bulwarks for us, praying to the Lord on our behalf.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Woe is me! How great a struggle the soul endureth at its parting from the body. Alas! How many tears will it then shed? Yet there will be none to have mercy on it. Raising its eyes to the angels, it supplicates in vain; stretching forth its hands to men, it finds none to help. Wherefore, my beloved brethren, reflecting on the shortness of our life, let us ask of Christ rest for the departed and great mercy for our souls.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises item 4"
            },
            "label": "for_the_reposed"
          },
          {
            "text": "From the earth hast Thou formed me, * and because of the transgression Thou hast condemned me to return to earth once more. * Thou hast appointed a day of examination, * when each man’s hidden deeds shall stand revealed before Thee. * Spare me then, O sinless Lord, * and grant me the forgiveness of my sins, ** and shut me not out from Thy Kingdom.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
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
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises verse 1"
            }
          },
          {
            "text": "Praise Him with the sound of trumpet, * praise Him with the psaltery and harp.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises verse 2"
            }
          },
          {
            "text": "Praise Him with timbrel and dance, * praise Him with strings and flute.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises verse 3"
            }
          },
          {
            "text": "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. * Let every breath praise the Lord.",
            "tier": 2,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, Praises verse 4"
            }
          }
        ],
        "theotokion": {
          "text": "Come, and with unceasing hymns let us all glorify the Mother of the Light, for she hath given birth to our salvation; wherefore let us cry out “Re- joice!” to her who alone gave birth to the chief Cause of all: God Who is before time. Rejoice, thou who hast restored Even who gave birth! Rejoice, all-pure Virgin, who knewest not wedlock!",
          "tier": 1,
          "src": {
            "file": "2-7.pdf",
            "locus": "Saturday Matins, Praises Glory/Both-now Theotokion (§9.12 sic \"Even who gave birth\" kept verbatim)"
          },
          "type": "theotokion",
          "sourceLabel": "Glory ..., Both now ..., Theotokion:"
        },
        "doxology_rubric": "Small Doxology (Read), Litany: Let us complete ...,"
      },
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the departed, in Tone II:",
        "items": [
          {
            "text": "By Thy life-bearing death, O Master, Thou didst stem the violence and corruption of death, pouring forth everlasting life upon all, and granting resurrection unto mortals who have reposed. Wherefore we entreat Thee O Savior: grant rest to those who have departed unto Thee with faith, and deem them worthy of Thine incorruptible glory, O Thou Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 1"
            },
            "label": "plain",
            "spec_mel": "When from the Tree"
          },
          {
            "text": "That Thou mightest enable men to share in Thy divine kingdom, O Christ, Thou didst endure crucifixion, and willingly accepted death. Wherefore, in Thy tender compassion, show forth as sharers in Thy kingdom those who with faith have passed over to Thee; and grant them Thy sweet beauty.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Desiring to save Thy creation, rejoicing Thou didst work the truly awesome mystery of Thy dispensation, in that Thou art supremely good; and with Thy precious blood as a ransom Thou didst redeem the whole world. Wherefore, we pray: With all the saints grant deliverance unto those who have passed on to Thee with faith.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 3"
            },
            "label": "plain"
          },
          {
            "text": "Standing before Thy dread, terrible and awesome judgment seat, O Christ, those who have died from the beginning of time will await Thy just sentence and receive divine justice. Grant rest then, O Savior, unto Thy servants who have passed on to Thee in faith, in a place where the choirs of the saints are, and the joy is ineffable.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.departed_matins_saturday"
        }
      },
      "aposticha_theotokion": {
        "text": "When my soul must needs sever its fleshly bond and depart this life, then stand before me, O Lady. Set at naught the counsels of the incorporeal foe, and crush the jaws of those who seek to slaughter me pitilessly, that, unhindered, I may elude the myriad princes of darkness who inhabit the air, O Bride of God.",
        "tier": 1,
        "src": {
          "file": "2-7.pdf",
          "locus": "Saturday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia. Litany: Have mercy on us ..., First Hour, and Dismissal. ON SATURDAY MORNING: TONE II AT THE LITURGY On the Beatitudes, these Troparia, in Tone II:"
    }
  },
  "liturgy_weekday": {
    "mon": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone II:",
        "items": [
          {
            "text": "We offer Thee the cry of the thief, and we pray: In Thy kingdom have mercy upon us, O Savior!",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Save me, O Lord my God, and cause me to share in the portion of those who loved Thee with all their soul.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "With fear all the armies of heaven serve Thee as God. By their supplications save us.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 3"
            },
            "label": "plain"
          },
          {
            "text": "With the sword of the Faith ye vanquished the hordes of the enemy, O spiritual athletes, and were brought before God.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "With the race of mankind the noetic ranks worship the simple Trinity, the Godhead one in essence.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "O most pure Lady who hast given birth unto God without seed: Beseech Him, that we be saved.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "rubric": "On the Beatitudes, these Troparia, in Tone II:",
        "items": [
          {
            "text": "We offer Thee the cry of the thief, and we pray: In Thy kingdom have mercy upon us, O Savior!",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "I have surpassed the thief and the harlot in my passions. O Savior, have pity on me who am self-condemned!",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O Forerunner who immersed the Abyss of loving-kindness in the waters, by thy supplications decrease my passions.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O passion-bearers of Christ, who dried up the torrents of deception with the torrents of your blood, ye are glorified as is meet.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "As it is written, even the rhetorical mind of man is unable to hymn the one Principle of the Godhead in three Hypostases.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "With songs of praise let us all unceasingly hymn her who, without being consumed, gave birth to the beginningless God.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 6"
            },
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
        "rubric": "On the Beatitudes, these Troparia, in Tone II:",
        "items": [
          {
            "text": "We offer Thee the cry of the thief, and we pray: In Thy kingdom have mercy upon us, O Savior!",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "When Thou wast lifted up upon the Cross, O Savior, Thou didst lift human nature up with Thyself, and it unceasingly hymneth Thee.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "With Thy spear Thou didst rend asunder the record of Adam’s sin, entering him in the book of the living, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "As emulators of Him Who endured crucifixion, O martyrs, ye were shown to share also in His glory.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "Let the beginningless Father, the Son Who is equally without beginning, and the Holy Spirit, be hymned in one worship and glory.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "When thou didst behold on the Cross the One to Whom thou hadst given birth without seed, O maiden, weeping, thou didst hymn His long- suffering.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
        "rubric": "On the Beatitudes, these Troparia, in Tone II:",
        "items": [
          {
            "text": "We offer Thee the cry of the thief, and we pray: In Thy kingdom have mercy upon us, O Savior!",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Passing over the ends of the world, O most wise apostles, ye delivered all people from the darkness of delusion and impiety.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "With the net of grace ye wisely drew all mankind forth from the depths of vanity, O disciples of the Savior.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O ye faithful, together let us hymn the passion-bearers of the Lord, who finished the race and kept the Faith.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "Let us hymn the uncreated Trinity, preaching the Son, Who in activity is equal with the Father, and the Spirit.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "O most pure Virgin, thou art the boast of the apostles, the adornment of spiritual athletes and the salvation of the world.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
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
        "rubric": "On the Beatitudes, these Troparia, in Tone II:",
        "items": [
          {
            "text": "We offer Thee the cry of the thief, and we pray: In Thy kingdom have mercy upon us, O Savior!",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thou didst uproot the thorns of evil when of Thine own will Thou didst wear the crown of thorns, O long-suffering Master.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "When Thou wast crucified on Golgotha, O Sinless One, Thou didst crush the head of the serpent and save all mankind.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Broken, O martyrs, ye broke all the power of the enemy and have received crowns of victory.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "martyrs"
          },
          {
            "text": "Enlightened by the sprinkling of the divine Blood, we, the faithful, honor the one Godhead in three Hypostases.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "Beholding Christ hanging like a lamb upon the Tree, the all- immaculate one, lamenting and weeping, magnified Him.",
            "tier": 1,
            "src": {
              "file": "2-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 6"
            },
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "ref": "shared.daily_liturgy_propers.fri.prokeimenon"
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.fri.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.fri.communion"
      }
    },
    "sat": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone II:",
        "items": [
          {
            "text": "We offer Thee the cry of the thief, and we pray: In Thy kingdom have mercy* upon us, O Savior!",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Having emulated the sufferings of Christ, O martyrs, ye ever heal the divers sufferings of men.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "The apostles, prophets and righteous teachers were well-pleasing to the Creator of all.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 3"
            },
            "label": "plain"
          },
          {
            "text": "In that Thou lovest mankind, O Lord, we pray: Number among all Thy saints all Thy servants who have departed in the Faith.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O transcendent Trinity, have pity on those who worship Thee, ever delivering them all from the deceit and wiles of the enemy.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "glory"
          },
          {
            "text": "Disdain not the entreaties of Thy servants, O all-immaculate one, saving us from all misfortunes and tribulations.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
