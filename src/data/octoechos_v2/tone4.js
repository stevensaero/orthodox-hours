// src/data/octoechos_v2/tone4.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — Tone 4, DIFFERENTIAL scan (spec §11: templates assumed after
// the tone-3 verification, texts and per-tone facts captured fresh from the
// tone-4 chapters). THIS STEP: core §4.1 + Little Vespers + Great Vespers +
// Nocturns + Sunday Matins + Sunday Liturgy from 4-1.pdf (text layer CLEAN,
// scan July 7 2026); weekday sections merge in next.
//
// GENERATED from the raw pdftotext -layout text by paragraph-grammar walking
// (adapted tone-3 generators, July 7 2026) — nothing hand-retyped. Canonical
// §4.1 fields verified across ALL their print sites at generation. Psalm-verse
// fields whose print site is already encoded in shared.js are stored as {ref}
// — one print site, one encoding. Dynamically loaded only (§2.1).
// ─────────────────────────────────────────────────────────────────────────────

export default {
  "tone": 4,
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
    "text": "Having learned the joyful proclamation of the Resurrection from the angel, * and having cast off the ancestral condemnation, * the women disciples of the Lord spake exultantly to the apostles: * “Death is despoiled and Christ God is risen, ** granting the world great mercy.",
    "tier": 2,
    "src": {
      "file": "4-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (CANONICAL print, §9.5 convention)"
    },
    "provenance_note": "Verified word- and pointing-identical at all four print sites (LV dismissal, GV no-vigil, Matins God-is-the-Lord, Liturgy); quotation-mark variance at: LV, GV, Matins, Liturgy. Canonical field stores the GV print per the §9.5 ruling."
  },
  "dismissal_theotokion": {
    "text": "The mystery hidden from all ages * and unknown to the ranks of angels, * hath been revealed to those on earth through thee, O Theotokos: * God incarnate in an uncommingled union, * Who willingly accepted the Cross for our sake, * and through it hath raised up the first-formed man, ** and saved our souls from death.",
    "tier": 2,
    "src": {
      "file": "4-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (verified identical at the Matins God-is-the-Lord site)"
    }
  },
  "kontakion": {
    "text": "My Savior and Redeemer * from the grave, as God, * hath raised those born on earth from their chains, * and shattered the gates of Hades; ** and as Lord arisen on the third day.",
    "tier": 2,
    "src": {
      "file": "4-1.pdf",
      "locus": "Sunday Matins after Ode VI (verified identical at the Liturgy site)"
    }
  },
  "ikos": {
    "text": "Let all of us, born of earth, hymn Christ the giver of life, who arose from the dead on the third day. For today, by His power He hath smashed the gates of death, slaughtering Hades and crushing the sting of death, setting Adam free with Eve. Therefore with thanksgiving we cry out aloud our fervent praises, for He alone, as almighty God and Master, hath risen on the third day.",
    "tier": 1,
    "src": {
      "file": "4-1.pdf",
      "locus": "Sunday Matins, after Ode VI"
    },
    "sourceLabel": "Ikos"
  },
  "little_vespers": {
    "rubric": "On “Lord, I have cried ...,” 4 Stichera:",
    "lic": [
      {
        "text": "Unceasingly worshiping Thy life-giving Cross, O Christ God, * we glorify Thy Resurrection on the third day, * for through it, O all-powerful One, * Thou hast renewed corrupted human nature * and shown us the way to heaven, ** since Thou alone art good and the Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 1"
        }
      },
      {
        "text": "Unceasingly worshiping Thy life-giving Cross, O Christ God, * we glorify Thy Resurrection on the third day, * for through it, O all-powerful One, * Thou hast renewed corrupted human nature * and shown us the way to heaven, ** since Thou alone art good and the Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 2"
        }
      },
      {
        "text": "By being willingly nailed to the tree of the Cross, O Savior, * Thou hast abolished the penalty of the tree of disobedience; * and by descending into Hades, O all- powerful One, * as God Thou hast torn asunder the bonds of death. * Wherefore we worship Thy Resurrection from the dead, and we cry out with joy: ** O all- powerful Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 3"
        }
      },
      {
        "text": "Thou hast shattered the gates of Hades, O Lord, * and by Thy death Thou hast destroyed the dominion of death; * delivering mankind from corruption, * granting the world life, incorruption, ** and great mercy.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 4"
        }
      }
    ],
    "lic_verses": [
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC verse 1"
        }
      },
      {
        "text": "For with the Lord there is mercy, and with Him is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC verse 2"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC verse 3"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Little Vespers, LIC verse 4"
        }
      }
    ],
    "lic_theotokion": {
      "text": "Thou didst conceive without seed, * and ineffably didst thou bear the One who hath cast down the mighty from their thrones * and hath exalted the humble raising the horn of His faithful, * who glorify the Cross, the tomb and the glorious Resurrection of Christ. * Wherefore, O Theotokos, with never silent hymns we call thee blessed, * the source of such a great wealth of goodness, ** do thou ever intercede that our souls be saved.",
      "tier": 2,
      "src": {
        "file": "4-1.pdf",
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
          "text": "O Lord, by ascending the Cross * Thou hast wiped out our ancestral curse, * and by descending into Hades * Thou hast set free those enchained therein from all ages, * granting incorruption to mankind; * wherefore with hymns we glorify ** Thy life-giving and saving arising.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Little Vespers, aposticha Resurrection sticheron (as printed here — differs from the GV print, §2.2)"
          }
        }
      ],
      "theotokos": [
        {
          "text": "God, the Son begotten timelessly from the Father * who hath no beginning, * hath through condescension become a man for the salvation of mankind, * that He might now grant paradise to the first-formed man. * At the same time Thou, O Lord, hast redeemed all nature from the deception of the serpent * and thus saved the fallen image. * As thou art One who is good and easily placated, * Thou hast made Thy Mother the pure undefiled Mother of the Bridegroom, ** and whom we have all gained as the anchor of our souls.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 1"
          }
        },
        {
          "text": "Thou didst hold in thy womb, O divinely blessed one, * the incarnate Creator of all things * as He refashioned mankind, * which through the serpent had once fallen by the transgression. * For thou hast given birth ineffably to our God in the flesh, * and through thy birthgiving thou hast freed from corruption, * the nature of that which had become corrupt. * Therefore we praise and glorify thy grace, * O Virgin unwedded, ** cease not to intercede that our souls may be saved.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 2"
          }
        },
        {
          "text": "Reveal unto us all the abundance of thy mercy * and the limitless abyss of thy loving-kindness, * by wiping away the sins of thy servants. * For as thou art the Theotokos, O all-immaculate one, * thou hast authority over creation, * and by thy power thou canst order all things as thou dost will; * for the grace of the Holy Spirit clearly doth dwell in thee * and with thee eternally dwelleth in all things, ** O most blessed one.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 3"
          }
        }
      ],
      "theotokos_verses": {
        "ref": "shared.lv_theotokos_aposticha_verses"
      }
    },
    "aposticha_theotokion": {
      "text": "The Son who together with the Father and the Spirit * is glorified in the highest by the seraphim, * wishing to refashion the first-formed man, * ineffably emptied His entire being into thy womb, * O all-praised Theotokos. * Dawning forth from thee * He hath enlightened the whole world by His Godhead, * delivering it from the deception of idolatry, * and by this He hath rendered the race of mankind divine, * having raising it on high to the heavens; ** Christ God the Savior of our souls.",
      "tier": 2,
      "src": {
        "file": "4-1.pdf",
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
        "text": "Unceasingly worshiping Thy life-giving Cross, O Christ God, * we glorify Thy Resurrection on the third day, * for through it, O all-powerful One, * Thou hast renewed corrupted human nature * and shown us the way to heaven, ** since Thou alone art good and the Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC sticheron 1"
        }
      },
      {
        "text": "By being willingly nailed to the tree of the Cross, O Savior, * Thou hast abolished the penalty of the tree of disobedience; * and by descending into Hades, O all-powerful One, * as God Thou hast torn asunder the bonds of death. * Wherefore we worship Thy Resurrection from the dead, and we cry out with joy: ** O all-powerful Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC sticheron 2"
        }
      },
      {
        "text": "Thou hast shattered the gates of Hades, O Lord, * and by Thy death Thou hast destroyed the dominion of death; * delivering mankind from corruption, * granting the world life, incorruption, ** and great mercy.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC sticheron 3"
        }
      },
      {
        "text": "Come O ye peoples, let us hymn the Savior’s rising on the third day, * whereby we were redeemed from the unbreakable bonds of Hades * obtaining incorruption and life, as we cry aloud: * “Thou, who wast crucified and buried and rose again, ** save us by Thy Resurrection, O only Lover of mankind.”",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC sticheron 4"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Angels and mortals hymn Thine arising on the third day, O Savior, * through which the ends of the inhabited world were filled with light, * and we were all redeemed from the slavery of the enemy, as we cry aloud: * “O life-giving, all- powerful Savior, ** save us by Thy Resurrection, O only Lover of mankind.”",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC sticheron 5"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Thou hath shattered the gates of brass and smashed their bars, O Christ God, * raising the fallen race of mankind; * wherefore with one accord we cry unto Thee: * “O Lord risen from the dead, ** glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC sticheron 6"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "O Lord, begotten from Thy Father without time and eternal; * Thine incarnation from a virgin is inexpressible for man and beyond telling; * and Thy descent into Hades is fearful for the devil and his angels; * for having trampled upon death Thou hast arisen on the third day, ** granting mankind incorruption and great mercy.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
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
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 1"
        }
      },
      {
        "text": "The righteous shall wait patiently for me * until Thou shalt reward me.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 2"
        }
      },
      {
        "text": "Out of the depths have I cried unto Thee, O Lord; * O Lord, hear my voice.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 3"
        }
      },
      {
        "text": "Let Thine ears be attentive * to the voice of my supplication.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 4"
        }
      },
      {
        "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 5"
        }
      },
      {
        "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, * my soul hath hoped in the Lord.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 6"
        }
      },
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
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
          "file": "4-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 1"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 2"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 3"
        }
      }
    ],
    "dogmatikon_rubric": "Glory from the Menaion, if appointed. Otherwise: Glory ..., Both now ..., Theotokion Dogmatic:",
    "dogmatikon": {
      "text": "Prophet David, the ancestor of God, * spoke of thee in psalmody unto Him Who hath accomplished great things in thee. * For God was well pleased without father to become a man from thee, * the Queen who standeth at His right hand, * and He - the source of life - showed thee to be His mother, * that He might renew His own image, corrupted by the passions. * Having found the lost sheep wandering on the mountain * He hath laid it upon His shoulders, * that He may bring it to his Father; * and in accordance with His own will * unite it to the heavenly powers * and thus, O Theotokos, save the world, ** Christ, Who is richly and abundantly merciful.",
      "tier": 2,
      "src": {
        "file": "4-1.pdf",
        "locus": "Great Vespers, Glory/Both-now — Theotokion Dogmatic"
      },
      "sourceLabel": "Glory ..., Both now ..., Theotokion Dogmatic"
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon"
    },
    "aposticha": [
      {
        "text": "O Lord, by ascending the Cross * Thou hast wiped out our ancestral curse, * and by descending into Hades * Thou hast set free those enchained therein from all ages, * granting incorruption to mankind; * wherefore with hymns we glorify ** Thy life-giving and saving arising.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 1 (unversed)"
        }
      },
      {
        "text": "Hung upon a Tree, O only mighty One, * Thou didst shake the whole of creation; * laid in a tomb Thou hast raised those who dwelt in the tombs, * granting the race of mankind incorruption and life; * wherefore with hymns we glorify ** thine arising on the third day.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 2"
        }
      },
      {
        "text": "A lawless people, O Christ, delivered Thee to Pilate, * and condemned Thee to be crucified, * showing themselves to be ungracious to their benefactor, * but voluntarily enduring burial, * by Thine own power Thou didst arise on the third day as God, **granting us life everlasting and great mercy.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 3"
        }
      },
      {
        "text": "Reaching Thy tomb in tears the women sought Thee; * and when they could not find Thee they cried aloud with grief and lamentation: * Woe unto us, our Savior, the King of all, how wast Thou stolen? * What place doth hold Thy life- bearing body? * But an angel answered them saying: * “Weep not, but go, and proclaim that the Lord hath arisen, ** granting us joy, for He alone is compassionate.”",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 4"
        }
      }
    ],
    "aposticha_verses": {
      "ref": "shared.saturday_gv_aposticha_verses"
    },
    "aposticha_glory_rubric": "Glory from the Menaion, if appointed, otherwise:",
    "aposticha_theotokion": {
      "text": "Mercifully regard the supplications of thy servants, * O all-immaculate one, * quelling the cruel uprisings of the demons against us, * delivering us from every sorrow; * for thee alone do we have as a steadfast and sure confirmation, * and having acquired thine intercession; * let not us who call upon thee be put to shame, * O Sovereign Lady. * Hasten thou to answer the entreaties of those who cry out to thee with faith: * Rejoice, thou help, joy and protection of all, ** and the salvation of our souls!",
      "tier": 2,
      "src": {
        "file": "4-1.pdf",
        "locus": "Great Vespers, aposticha Theotokion — the REAL Saturday fallback (§4.3/§8)"
      }
    },
    "vigil_rubric": {
      "ref": "shared.theotokos_virgin_rejoice"
    },
    "no_vigil_rubric": "If a Vigil is not served, we chant (Once):"
  },
  "nocturns": {
    "frame_rubric": "The priest saith: “Blessed is our God ...,” and we say: Amen. Glory to Thee, our God, glory to Thee. O heavenly King ..., Trisagion through Our Father... Priest: For Thine is the kingdom ..., And we say: Amen. Lord, have mercy (12 times), Glory..., Both now..., O come, let us worship (Thrice). Psalm 50 (Have mercy on me, O God...)",
    "canon": {
      "title": "Canon to the Holy & Life-creating Trinity",
      "composer": "Metrophanes",
      "acrostic": "The fourth hymn unto God",
      "heading_rubric": "And then, the Canon to the Holy & Life-creating Trinity, the acrostic whereof is “The fourth hymn unto God,” the composition of Metrophanes, in Tone IV:",
      "odes": {
        "1": {
          "irmos": {
            "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 1 irmos"
            }
          },
          "items": [
            {
              "text": "Let us glorify the divine trinity of Hypostases, the single nature of the Three, which is co-eternal and co-enthroned; and entreating Him, let us say: Save those who glorify Thee with faith!",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Anointed with deifying oil by the Father through the Spirit, the Son became a man and taught him that the singular Godhead exists in three Hypostases.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Unable to gaze upon the beauty of Thine unapproachable glory, O three-sunned Unity, the seraphim cover themselves with their wings and unceasingly glorify Thee with thrice-holy hymns.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 3"
              },
              "label": "glory"
            },
            {
              "text": "Thou didst ineffably give birth to the Creator of all, Who delivereth us from the ancient curse and the corruption of death. Through thee, O most pure one, have we come to know God in three Hypostases.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "3": {
          "irmos": {
            "text": "Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 3 irmos"
            }
          },
          "items": [
            {
              "text": "In that of old, O Christ, Thou didst send the Comforter, the power from on high, from the Father unto Thy holy apostles, Thou didst reveal the one three- sunned Essence.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 1"
              },
              "label": "plain"
            },
            {
              "text": "When Thou didst appear to the Patriarch Abraham in human guise, O triune Unity, Thou didst show forth the immutability of Thy goodness and dominion.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O only God, Who art believed in as in three Hypostases, Who art manifestly uncircumscribable and incomprehensible to all: deliver our souls from every tribulation.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 3"
              },
              "label": "glory"
            },
            {
              "text": "Guided by the most wise precepts of thy Son, we glorify the only thrice-radiant Godhead and bless thee, the Ever-virgin.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "4": {
          "irmos": {
            "text": "He who sitteth in glory upon the throne of the Godhead, * Jesus the true God, * is come in a swift cloud * and with His sinless hands he hath saved those who cry: * Glory to Thy power, O Christ.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 4 irmos"
            }
          },
          "items": [
            {
              "text": "With the seraphim we glorify Thee, the transcendent Trinity, the dominion in the unity of the Godhead, for Thou art the inseparable Essence, unapproachable, though equal in glory, O unattainable God.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 1"
              },
              "label": "plain"
            },
            {
              "text": "As Thou art ineffably separate Persons of the Godhead, united in might and a single Dominion, and alone infinite and uncircumscribable, we hymn Thee, the Creator of all creation.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 2"
              },
              "label": "plain"
            },
            {
              "text": "The beginningless Mind ineffably begat the Word and sent forth the divine Spirit, Who is equal in might; wherefore, we proclaim the consubstantial Trinity to be God, the Master of all.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 3"
              },
              "label": "glory"
            },
            {
              "text": "Seen by the ancients in images, the Word announced His incarnation of thee, and having appeared unto us in the later times, He truly revealed the one Principle in three Hypostases.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "5": {
          "irmos": {
            "text": "All creation stands in awe of thy divine glory; * for thou, O Virgin who hast not known wedlock, * didst contain within thy womb the God of all, * and gave birth to the timeless Son, * bestowing peace, upon all who hymn thee.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 5 irmos"
            }
          },
          "items": [
            {
              "text": "Knowing through faith the all-accomplishing Godhead, the one unapproachable Essence, and the three life-creating Hypostases, we worship them equally - the Father, the Son and the Holy Spirit - the equally eternal Being.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 1"
              },
              "label": "plain"
            },
            {
              "text": "O three-sunned Light, shine upon me Thy singular Divinity, the uncreated Essence, of Thine essential Light. O light-creating Wellspring, illumine me with everything that is luminous, that I may contemplate Thine ineffable beauty.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Thou alone art truly the Creator and Sustainer of all that is, the most wise Pilot, the Bestower of life; wherefore, we cry out to Thee with faith: O three- sunned Master, preserve those who hymn Thee!",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 3"
              },
              "label": "glory"
            },
            {
              "text": "Upon beholding him who of old had become corrupt, He Who created us in His image, and revealed the divine form therein, desired to deify us, and through thee became a man, proclaiming the one, triune Godhead.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "6": {
          "irmos": {
            "text": "Prefiguring Thy three-day burial * prophet Jonah praying in the belly of the sea-monster cried aloud: * Deliver me from corruption * O Jesus Thou King of hosts.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 6 irmos"
            }
          },
          "items": [
            {
              "text": "When Christ was baptized, the Father, speaking, revealed His Sonship, and the Spirit became visible; wherefore, we glorify the one, triune Godhead.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 1"
              },
              "label": "plain"
            },
            {
              "text": "When Isaiah beheld Thee seated upon an exalted throne, hymned by thrice- holy voices, he recognized the trinitarian Hypostasis of the one Godhead.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Show Thou the hearts of us, Thy servants, to be uplifted, O exalted King in three Hypostases, that we may clearly behold the effulgence of Thy glory.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 3"
              },
              "label": "glory"
            },
            {
              "text": "In that he is the Lover of mankind, the Son of God desired to become visible through the Virgin in our form, enabling mankind to share in divine glory.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 4"
              },
              "label": "both_now"
            }
          ]
        },
        "7": {
          "irmos": {
            "text": "In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 7 irmos"
            }
          },
          "items": [
            {
              "text": "Emulating in an Orthodox manner the celestial essences and the noetic ranks, all of us mortals glorify the one Godhead in three equally active Hypostases.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "The sayings of the holy prophets of old revealed Thee in images to be the one Creator of all the ages, the ineffable God and Lord in three divine Hypostases.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 2"
              },
              "label": "glory"
            },
            {
              "text": "O Thou Who art in essence the invisible and all-accomplishing Word, Thou didst reveal Thyself to us as a man through the pure Mother of God, calling mankind to share in Thy divinity.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 3"
              },
              "label": "both_now"
            }
          ]
        },
        "8": {
          "irmos": {
            "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 8 irmos"
            }
          },
          "items": [
            {
              "text": "O thrice-radiant and singular Light, beginningless Essence, incomprehensible Beauty: Make Thine abode within my heart, and show forth as a temple of Thy divinity, splendid and pure, me who cry: Bless the Lord, all ye works of the Lord! Hymn and supremely exalt Him throughout the ages!",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "O indivisible Trinity, unconfused Union, deliver me from the divers passions and the darkness of transgressions, and illumine me with Thy divine rays, that I may embody Thy glory and hymn Thee, the Lord of glory.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 2"
              },
              "label": "glory"
            },
            {
              "text": "As Thou art Mind, Essence, Power and Being, the unbegotten Father, the Word of like form with Him, and the co-enthroned Spirit O transcendent and ineffable Trinity and Unity Who doest mighty works, preserve Thy flock through the supplications of the Theotokos, for Thou art in essence He Who is the Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 3"
              },
              "label": "both_now"
            }
          ]
        },
        "9": {
          "irmos": {
            "text": "Let every mortal born on earth, * radiant with light, in spirit leap for joy; * and let the host of the angelic powers * celebrate and honor the holy feast of the Mother of God, * and let them cry aloud: * Rejoice! O all- blessed Theotokos, * thou pure Ever-virgin.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 9 irmos"
            }
          },
          "items": [
            {
              "text": "I now direct my whole heart and mind, and the inclinations of my whole soul and body, unto Thee, my Creator and Redeemer; and I cry unto Thee, O thrice- radiant sole Dominion: Save me, Thy servant, from all manner of temptations and tribulations.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "Elevate our mind and thought unto Thee, the Most High, and illumine me with Thy most pure radiance, O Father, Word and Comforter, Who dwellest in light unapproachable, O Sun of glory, Ruler of light, that I may ever glorify Thee, the one God in three Hypostases.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 2"
              },
              "label": "glory"
            },
            {
              "text": "Save those who believe in Thee, O Lord, and who proclaim the one, eternal, beginningless Essence, the three Hypostases of Thy divine and identical Dominion; and by the supplications of the pure Mother of God, grant us Thy divine glory.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 3"
              },
              "label": "both_now"
            }
          ]
        }
      }
    },
    "after_ode3": {
      "sessional": {
        "text": "O three-sunned, uncreated and consubstantial Unity, unapproachable and in three Hypostases: Take pity on Thy servants, and as Thou art our merciful God, save us from misfortunes; for Thee, O Lord, do we have as our only Redeemer and Master, and we cry aloud: Be Thou merciful unto us!",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode III"
        },
        "spec_mel": "Go thou quickly before",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "Beset by many evil circumstances and the assaults of the wicked, and ever falling into despair, O Virgin Theotokos, we have thee alone as our salvation, hope and bulwark; and we now entreat thee as is meet with faith: Save thy servants!",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode III"
        },
        "type": "theotokion"
      }
    },
    "after_ode6": {
      "sessional": {
        "text": "Pondering the unbegotten Father, the begotten Son and the Holy Spirit Who proceedeth from the Father, we proclaim the one beginningless Kingship and Divinity; and rendering glory, with one mind we cry: O consubstantial Trinity our God, save us!",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode VI"
        },
        "spec_mel": "Go Thou quickly before",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "O most pure one, thou didst give birth in the flesh supra-naturally, within time, unto the God-man, Who transcendeth time, existing from before the ages. Wherefore, confessing thee to be truly and rightly the Theotokos, we all earnestly cry out to thee: Grant unto us everlasting glory!",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode VI"
        },
        "type": "theotokion"
      }
    },
    "gregory_rubric": {
      "rubric": "Then, the hymn of Gregory the Sinaite: (which is chanted every Sunday after the canon)",
      "stanzas": [
        {
          "text": "It is truly meet to glorify Thee, the Word of God, before Whom the cherubim tremble and quake, and Whom the hosts of heaven glorify. And with fear we glorify Christ, the Bestower of life, Who rose from the tomb on the third day.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 1"
          }
        },
        {
          "text": "With divine songs let us all in a godly manner hymn the Father, the Son and the Spirit divine, the one Might in three Hypostases, the Sovereignty and Dominion.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 2 — THIS stanza diverges from shared at bytes (§5 per-tone; 3-1 prints the same variant)"
          }
        },
        {
          "text": "Whom all mortals hymn and the hosts of heaven glorify, the essential Unity in three Hypostases, Who is worshipped with faith by all.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 3"
          }
        },
        {
          "text": "We magnify Thee, the Godhead, the Lord of the cherubim, the incomparable divine Origin of the seraphim, the indivisible Trinity in Unity.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 4"
          }
        },
        {
          "text": "I worship God: the beginningless Father, the Son Who is equally without beginning, and the Spirit. With hymns let us honor the one indivisible and unified Essence, the threefold Unity.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 5"
          }
        },
        {
          "text": "Shine forth Thy dazzling lightning flashes upon me, O my God in three Hypostases, Creator of all, and show me to be a splendid, luminous and immutable habitation of Thine unapproachable glory.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 6"
          }
        },
        {
          "text": "With fear let us glorify Christ the Bestower of life, Who ineffably became incarnate of the Virgin, for the cherubim tremble and quake before Him, and the angelic armies glorify Him.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 7"
          }
        }
      ],
      "provenance_note": "§5: stanza 1 of the 4-1 print diverges at bytes from shared.gregory_sinaite_hymn (\"the one Might … the Sovereignty\" vs \"the Might … the one Sovereignty\"); the tone-4 print site is stored whole, per-tone. NOTE: 3-1 prints the SAME variant — two tones now agree against the shared (2-1) reading; tone3.js still refs shared (flagged to Bill). The remaining six stanzas byte-match the shared table (register pairs)."
    },
    "closing_rubric": "The rest of Nocturns, and the Dismissal."
  },
  "matins": {
    "god_is_lord_rubric": "On “God is The Lord ...,” the Resurrection Troparion, in Tone IV: [troparion printed \"(Twice)\"] Glory ..., the Troparion from the Menaion, otherwise Glory ..., Both now ..., The Theotokion, in Tone IV, (or in the Tone of that from the Menaion):",
    "sessionals": [
      {
        "rubric": "After the 1st chanting of the Psalter (Kathisma II), the Sessional Hymns of the Resurrection, in Tone IV:",
        "items": [
          {
            "text": "Looking into the entrance of the tomb, the myrrh-bearing women * were unable to endure the bright radiance of the angel, * trembling in awe they said; * “How is it that He who hath opened paradise to the thief hath been stolen? * How is it that He who before His Passion proclaimed His arising hath been raised? ** Truly Christ God hath arisen, granting those in Hades life and resurrection.”",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "Mortal men laid in a new tomb the One who through a word established the ends of earth, * for Thou O Savior, didst willingly endure the Cross, * whereby Thou didst conquer the adversary, and despoil death, * for which cause all those in Hades extol Thy life-giving arising saying * “Christ, the giver of life, hath arisen and abideth unto the ages.”",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
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
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "As he contemplated that which was beyond nature * Joseph was struck with wonder O Theotokos, at thy conception without seed. * He contemplated the mysterious dew upon the fleece, * the bush unburnt by fire, * Aaron’s rod which budded. * Thus thy betrothed and guardian bore witness and cried unto the priests saying: * A virgin beareth a child, ** and after childbirth remaineth yet a virgin.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Kathisma II, Glory/Both-now closer"
          },
          "type": "theotokion"
        }
      },
      {
        "rubric": "After the 2nd chanting of the Psalter (Kathisma III), the Sessional Hymns of the Resurrection, in Tone IV:",
        "items": [
          {
            "text": "O Savior, Thou didst rise from Hades as immortal, * raising the world together with Thee by Thy might O Christ our God. * With strength hast Thou overthrown the dominion of death, * revealing the Resurrection to all O merciful One. ** Wherefore we also glorify Thee, O only Lover of mankind.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "Gabriel radiant in white vestments descended from the heights above, * and approaching the rock upon which the Rock of life was lying, * cried unto the weeping women saying: * “Cease your cries of lamentation; * for ye have now obtained merciful compassion. * Take courage, for the One you seek is truly risen. * Therefore cry unto the apostles telling them that the Lord hath arisen, * to worship the risen One; ** and having received gladness, to take courage, together with Eve.”",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
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
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "All the choirs of angels were struck with wonder, O pure Virgin, * at the awesome mystery of thy conception. * How can the One who doth hold all things in place with only a nod, * now be held in thy arms as a man? * How can the Eternal accept a beginning? * How can the One who nourishes everything that hath breath by His ineffable goodness, * be suckled at thy breast? * And upon seeing these things, with hymns they glorify thee ** as truly the Mother of God.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
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
      "text": "The myrrh-bearing women hastened to proclaim to the apostles * the news of Thy wondrous rising, O Christ: * that as God Thou hast arisen, ** granting the world great mercy.",
      "tier": 2,
      "src": {
        "file": "4-1.pdf",
        "locus": "Sunday Matins, after the Evlogitaria"
      },
      "sourceLabel": "The Sessional Hymn"
    },
    "anabathmoi": [
      {
        "troparia": [
          {
            "text": "From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 1"
            }
          },
          {
            "text": "Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the triple Unity in a hidden sacred manner.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 1, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "From the depths of my soul * I have cried unto Thee fervently, O Lord; ** let Thy divine ears be attentive unto me.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 1"
            }
          },
          {
            "text": "Every one who hath set their hope in the Lord, * is higher than all those who mourn.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "By the Holy Spirit the streams of grace swell up; * watering all creation engendering life.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 2, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Let my heart be raised to Thee, O Lord; * and let none of the pleasures of the world lure me unto weakness.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 1"
            }
          },
          {
            "text": "As one that hath tender love for one’s mother; * so should we have even more fervent love for the Lord.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "By the Holy Spirit cometh an abundance of divine knowledge, contemplation and wisdom; for by Him the Word unveils all the Father’s teachings.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 3, Glory/Both-now"
          }
        }
      }
    ],
    "prokeimenon": {
      "tone": 4,
      "text": {
        "text": "Arise, O Lord, help us * and redeem us, for Thy name’s sake.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Matins prokeimenon"
        }
      },
      "verse": {
        "text": "O God, with our ears have we heard, for our fathers have told us: the work which Thou hast wrought in their days, in the days of old.",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Matins prokeimenon verse"
        }
      }
    },
    "canon": {
      "title": "Tone IV: A composition of St. John of Damascus",
      "heading_rubric": "After which: “O God, save Thy people ...,” Then the Canons: Tone IV: A composition of St. John of Damascus.",
      "odes": {
        "1": {
          "irmos": {
            "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 1 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Master, Thou wast lifted upon the immaculate tree of the Cross, setting aright our fall and healing the total ruin wrought through a tree, as Thou art supremely good and All-powerful.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 1"
                }
              },
              {
                "text": "In the tomb bodily, in Hades with Thine own soul as God, in paradise with the thief, and on the throne with the Father and the Spirit, filling all things, O Christ, yet remaining uncircumscribed.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Without seed, by the Father’s will, thou hast conceived from the divine Spirit the Son of God, giving birth in the flesh to the One who for our sake came forth from His Father without mother and from thee without father.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "O Lord by Thy precious Blood, Thou hast healed the ruined race of mankind, demolishing the dominion of the mighty one, who of old spoiled the creature that Thou didst fashion.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Through dying Thou hast become the Resurrection of the dead; for the power of death was done away with when it wrestled with Life-eternal, God incarnate and the Master of all things.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Surpassingly fairer than the heavenly powers was Thy divine living temple, the Virgin, Thy holy mountain, who carried Thee, our God, in her womb.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "O pure Virgin, from fear of thine Offspring peoples trembled, nations were troubled, mighty kingdoms faltered; for my King hath come and put down the tyrant, redeeming the world from corruption.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 1"
                }
              },
              {
                "text": "Living on high, but condescending to become a man, Thou O Christ hath sanctified Thine abode, showing it to be steadfast; for she who hath given birth to Thee the Creator, hath alone, after childbirth, remained a treasury of virginity.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "3": {
          "irmos": {
            "text": "Thy Church, O Christ, rejoiceth in Thee crying aloud: * Thou, O Lord, art my strength, * my refuge and foundation.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 3 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The Tree of life, the true noetic Vine, is seen hanging upon the Cross, pouring forth unto all incorruption.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 1"
                }
              },
              {
                "text": "As One great, as One to be feared, as One who hath subdued the rage of Hades, and as God incorruptible, Thou hast arisen in the flesh.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Theotokos, thou hast become the sole intermediary of supra- natural blessings for those on earth, wherefore we bring unto thee our salutation.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "The serpent plunged its poison filled fangs into me; O Savior, but with the nails in Thy hands, O Master, Thou hast crushed them; for there is none among mankind holier than Thee, O Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thou wast revealed, O Lover of mankind, as voluntarily dead in a tomb, reopening the gates of Hades for the souls found therein from every age, O Life- giver; for there is none among the holy holier than Thee, O Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou hast appeared as an unplowed field, bringing forth the Life‑giving Grain, the Mediator Who doth grant immortality to all who partake of Him — The Holy One Who dwelleth in holiness amongst the saints.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Human nature became purified when through thee it encountered the unendurable divine Fire; like a mysterious loaf baked within thee, most pure Virgin, by the Fire that preserved thee unharmed.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 1"
                }
              },
              {
                "text": "Who is this who is so truly near to God, that she doth excel all the ranks of angels? She who alone in the comeliness of virginity doth shine forth as the Mother of the almighty One.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "4": {
          "irmos": {
            "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 4 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "To heal my passions, Thou didst willingly ascend the Cross and endure the Passion of Thine undefiled flesh; wherefore we cry unto Thee: “Glory to Thy power, O Lord.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 1"
                }
              },
              {
                "text": "When death had tasted of Thy sinless and life-giving body, O Master, it was rightly slain; and we cry out to Thee: “Glory to Thy power, O Lord.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Without knowing wedlock thou didst bear a child, O Virgin, and after childbirth thou didst remain yet a virgin; wherefore with never silent voices, O Sovereign Lady, we cry unto thee with unwavering faith, “Rejoice!”",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Israel, which was subject to the law, did not recognize in Thee, O Christ, God Who had ordained the law; but transgressing the law by nailing Thee to the Cross as a lawless one, they proved themselves unworthy of the law-giving.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thy deified soul, O Savior, captured the treasuries of Hades raising together with itself the souls kept therein from every age; while Thy life-giving body flowed forth incorruption unto all.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "As the ever Virgin and true Theotokos we all glorify thee, O most pure one, for Moses, the God-seer, saw thee prefigured in the bush consumed with fire, yet remaining unburnt.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Living among mankind, the invisible One, who is the incomprehensible Godhead, became visible, taking a wondrous form from thee, O maiden, and saving those who acknowledge thee to be the pure Mother of God.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 1"
                }
              },
              {
                "text": "The Virgin hath received the immaterial One in corporeal form, becoming an infant from her by His participation in corporeal things; and is thus known in two natures, God bearing flesh and a supra-natural man.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 2"
                }
              },
              {
                "text": "The Word and God, Who dwelt in thee, O Virgin, and was incarnate without seed, preserved thee a virgin during thy childbirth, and kept thee a virgin after childbirth, for He alone is the Sovereign Lord and Fashioner of all creation.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "5": {
          "irmos": {
            "text": "Thou hast come, O my Lord, * as a light into the world, * a holy Light turning from the gloom of ignorance * those who hymn Thee with faith.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 5 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Lord, in Thy compassion Thou didst descend to earth; and raise up fallen human nature when Thou wast hung upon the Tree.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 1"
                }
              },
              {
                "text": "By Thy divine Resurrection Thou hast abolished the pangs of death, O Christ, and taken away the accusation of my sins, O most compassionate One",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "We have gained thee as our anchor and the hope of our salvation, O Bride of God, for thee we set forth as an unconquerable weapon against our foes.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Mindlessly, Hades swallowed Thee whole in its mouth, for beholding Thee nailed to a Tree, and pierced by a lance, it reckoned Thee, the living God, to be a mere breathless man; but when put to the test it learned the strength of Thy divinity.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 1"
                }
              },
              {
                "text": "When the temple of Thy body was destroyed, O Lover of mankind, both the tomb which took possession of it, and Hades, unwillingly paid the price; the latter by giving up the souls of the saints, and the former their bodies, O immortal One.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Behold!, that which was foretold by the prophet hath now come to pass; for the Virgin who knew not wedlock, hath carried in her womb the God of all, and given birth to the eternal Son, who granteth peace to all who hymn her praises.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Having made His abode within thee, O pure Virgin, the Son of God rendered thee a house of glory, a holy mountain of God, a bride, a bridal chamber, and a temple of sanctification, O paradise of everlasting delight.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 1"
                }
              },
              {
                "text": "From virginal blood, O Christ, hast Thou seedlessly taken most pure Hypostatic flesh, endowed with reason and intelligence, and with a self-governing soul, energy, and will.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 2"
                }
              },
              {
                "text": "A virginal womb hath put the tyrant’s understanding to shame; for with His hand the infant hath probed the soul-destroying lair of asps, overthrowing the boastful traitor, and making him subservient to the faithful.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "6": {
          "irmos": {
            "text": "The church crieth out unto Thee O Lord, * “I will sacrifice unto Thee with a voice of praise” * having been cleansed of the blood of the demons” * by the blood that for mercy’s sake flowed from Thy side.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 6 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Thou hast ascended the Cross and, girded with power, wrestled with the tyrant, and as God hurled him down from on high; raising up Adam by Thine invincible might.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 1"
                }
              },
              {
                "text": "Thou didst arise from the tomb, O Christ, in radiant comeliness, scattering all the enemies by Thy divine might, and as God filling all things with joy.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O new wonder, more wondrous than all wonders; for a Virgin, without knowing a man, hath conceived in her womb the One who upholdeth all things, in nowise constraining Him.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "I have foolishly puffed up my soul and Hades, opening wide its throat, hath swallowed me whole, but Christ hath come down and raised up my life, for He is the Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Death hath perished through death; for He that died hath arisen granting me incorruption; and appearing unto the women, the immortal One hath proclaimed joy.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thy pure womb, O Theotokos, hath proven itself to be a palace of the unapproachable Godhead; upon Whom the Heavenly Hosts fear to gaze.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "The serpent of old deceived me, and put me to death through my foremother Eve; but now, O pure one, through thee He who fashioned me hath called me back from corruption.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 1"
                }
              },
              {
                "text": "The depths of compassion declared thee, O maiden, to be the ineffably chosen deep of wonders; for from thee Christ the Pearl hath shone forth with the lightning flash of His divinity.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 2"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "7": {
          "irmos": {
            "text": "In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 7 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Washed in the divine Blood of Christ, mankind hath been called back to incorruption, singing with thanksgiving: Blessed art Thou in the temple of Thy glory, O Lord.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 1"
                }
              },
              {
                "text": "Thy tomb, O Christ, hath been revealed, as the life-bearing source of our resurrection, more lovely than paradise, and more resplendent than any royal bridal chamber.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Rejoice! sanctified and divine dwelling of the Most High, for through thee, O Theotokos, joy hath been granted to those who cry: “Blessed art thou among women, O all-immaculate Lady.”",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Hanging upon a Tree Thou hast humbled the eye of the haughty and cast down the arrogant brow, saving mankind, O supremely exalted Lord and God of our fathers, blessed art Thou.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 1"
                }
              },
              {
                "text": "By Thy power exalt the horn of us who serve Thee, O Master, who hath arisen from the dead and emptied Hades of its former wealth, the multitudes of peoples. O supremely exalted Lord and God of our fathers, blessed art Thou.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Following the divine teachings we glorify the one Godhead, as a flame of three Lights, without commingling and undivided, eternally enlightening the whole of creation which doth sing: “O supremely exalted Lord and God of our fathers, blessed art Thou.”",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Sunday Matins canon, Ode 7, cross_resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "We bless the Lord; Father, Son, and Holy Spirit.",
              "sourceLabel": "Trinitarian"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "The fire of love for the Virgin burning within my heart draweth me to hymn, and cry unto the Mother and Virgin: “O blessed one, the Lord of powers is with thee.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 1"
                }
              },
              {
                "text": "Thou wast revealed as higher than all creation, for thou hast given birth to the Creator and Lord of all; wherefore I cry unto thee O Theotokos: “O blessed one, the Lord of powers is with thee.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Honoring Thee as one indivisible Lordship, in three sacred Wellsprings, I hymn one Nature in three Hypostases, crying: “Blessed art Thou, Who hath brought order to all that is.”",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Sunday Matins canon, Ode 7, theotokos closer"
              },
              "type": "trinitarion",
              "refrain": "We bless the Lord; Father, Son, and Holy Spirit.",
              "sourceLabel": "Trinitarian"
            }
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "8": {
          "irmos": {
            "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 8 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Spreading Thine arms upon the Cross, O Master, Thou hast gathered into one all the nations, and revealed one Church which hymneth Thee, for both those on earth and those in heaven sing with one accord: “Bless ye the Lord, all ye works of the Lord, and supremely exalt Him unto the ages”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 1"
                }
              },
              {
                "text": "An angel white as snow, blazing with the unapproachable light of the Resurrection, appeared to the women crying out: “Why seek ye the living as a man in the tomb: Christ hath truly risen.” To Him let us also cry: “Sing unto the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou alone in all generations, O most pure Virgin, wast revealed as the Theotokos; for Thou didst become the abode of the Godhead, O all- immaculate one, and remained unburnt by the fire of the unapproachable Light; wherefore we all bless thee, O Mary, Bride of God.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
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
                "text": "Upon seeing Thine unjust sacrifice, creation became darkened and grieved; for while the earth trembled, the sun clothed itself in darkness; but we without ceasing praise and supremely exalt Thee, O Christ, unto the ages.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Having come down to me, even into Hades, Thou didst open a pathway for mankind through the Resurrection, and ascending on high, bearing me upon Thy shoulders, Thou hast brought me unto the Father; wherefore I cry unto Thee: “Praise the Lord all ye His works, and supremely exalt him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "We glorify the first Mind and Cause of all, the Father Who alone is without cause, the beginningless Word, and the comforting Spirit, one God and Lord, Creator of all, as we worship the Trinity one in essence and supremely exalt Him throughout all ages.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Sunday Matins canon, Ode 8, cross_resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "We bless the Lord; Father, Son, and Holy Spirit.",
              "sourceLabel": "Trinitarian"
            }
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "Having fashioned thee from Adam’s side, the Lord of all, became incarnate from thy virginity, hymning Him we cry out: “All ye His works, bless ye the Lord, and exalt Him above all unto the ages.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 1"
                }
              },
              {
                "text": "In his tent Abraham beheld the mystery which came to pass in thee, O Theotokos, for he mystically received thy Son, while not yet in the flesh, and sang: “Bless ye the Lord, all ye works of the Lord, and exalt Him above all unto the ages.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 2"
                }
              },
              {
                "text": "The prefiguring of thy virginity saved the holy youths equal in number to the Trinity; for in virginal bodies they trampled down the flame, O maiden, as they cried aloud: “Bless ye the Lord, all ye works of the Lord, and exalt Him above all unto the ages.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "After the Troparia from the Menaion for ODE VIII, we chant:"
        },
        "9": {
          "irmos": {
            "text": "A cornerstone not cut by hand O Virgin, * was cut from thee the unhewn mountain: * even Christ, Who hath joined together the disparate natures; * therefore rejoicing we magnify thee, * O Theotokos.",
            "tier": 2,
            "src": {
              "file": "4-1.pdf",
              "locus": "Sunday Matins canon, Ode 9 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O my God, through Thy passion which Thou didst endure in the flesh upon the Cross, the fullness of Thy nature assumed the fullness of my nature in a union without commingling, granting unto me, in Thy loving compassion, the fullness of salvation.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 1"
                }
              },
              {
                "text": "When Thy disciples saw Thine opened tomb and the grave clothes, that had once held God, lying emptied by Thy Resurrection, they rejoiced with the angel saying: “The Lord hath indeed arisen.”",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "All we the faithful worship a Unity of divine essence, but a trinity of Hypostases without commingling, whom we magnify as equal in power and equal in honor.",
              "tier": 1,
              "src": {
                "file": "4-1.pdf",
                "locus": "Sunday Matins canon, Ode 9, resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "We bless the Lord; Father, Son, and Holy Spirit.",
              "sourceLabel": "Trinitarian"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "In Eden, the serpent crept up on me through guile and took me prisoner; but the almighty Lord hath dashed him against the mighty rock of Golgotha, like an infant, and through the Tree of the Cross opened up for me once again entrance to spiritual delight.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thou hast laid waste to the fortified strongholds of the enemy and plundered his wealth by Thine own all-powerful hand, raising me with Thee from the ruins of Hades, exposing the ancient boaster to be impotent and an object of derision.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 2"
                }
              },
              {
                "text": "Come Thou, Who lovest mankind, and visit the torments of Thy humbled people; and with Thine own compassionate and mighty arm fortify the power of Thy Cross-bearing peoples against the blaspheming enemies and rescue Thine inheritance, O Christ.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 3"
                }
              }
            ]
          },
          "theotokos": {
            "refrain": "Most holy Theotokos save us.",
            "troparia": [
              {
                "text": "We behold thee, O all-immaculate Virgin, as a lily dyed with the purple of the divine Spirit, shining forth in the midst of thorns and filling with sweet fragrance those who in truth magnify thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 1"
                }
              },
              {
                "text": "From thy womb, O all-immaculate one, the incorruptible One hath assumed our corrupt nature and by His compassion revealed it within Himself to be incorrupt; wherefore as the true Theotokos, we magnify thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 2"
                }
              },
              {
                "text": "As the Sovereign Lady of all created things, grant thou unto thy people trophies of victory, subduing the adversary to the Church, so that, as the Theotokos, we may magnify thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        }
      }
    },
    "exapostilarion_rubric": "Exapostilarion (Svetilen). Note: The Exapostilarion is taken from the prescribed Eothinon according to the Resurrection Gospel, however, If the Menaion service is “feasted” the Exapostilarion, with the appointed Theotokion, are taken from the Menaion.",
    "praises": {
      "rubric": "On the Praises: “Let every breath ...,” 8 Stichera of the Resurrection, however, if the service from the Menaion is “feasted” sing the first 4 Stichera from the Resurrection, and the last 4 from the Menaion, with the appointed verses.",
      "stichera": [
        {
          "text": "O all-powerful Lord, * Who didst endure the Cross and death, * and arose from the dead, ** we glorify Thy Holy Resurrection.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 1"
          }
        },
        {
          "text": "By Thy Cross, O Christ, Thou hast delivered us from the ancient curse, * and by Thy death Thou hast conquered the devil who tyrannized our nature. * By Thine arising Thou hast filled all things with joy, * wherefore we cry unto Thee: ** “O Lord risen from the dead, glory be to Thee!”",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 2"
          }
        },
        {
          "text": "O Christ the Savior, * with Thy Cross, guide us to Thy truth, * and deliver us from the snares of the enemy; * O Thou who art risen from the dead * raise us also who have fallen through sin, * by the stretching out of Thy hand, * O Lord, at the behest of the prayers of Thy saints.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 3"
          }
        },
        {
          "text": "Without departing from Thy Father’s bosom, * in Thy tender compassion, Thou didst descend to earth, * O Only-begotten Word of God, * without change becoming man. * Whilst Thou art impassible in Thy divinity, * Thou didst suffer the Cross and death in the flesh; * and rising from the dead Thou hast granted immortality to the race of mankind, ** as Thou alone art all-powerful.",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 4"
          }
        },
        {
          "text": "Thou didst endure death in the flesh * thereby ensuring us of immortality, * and thou didst abide within a tomb, * thereby freeing us from Hades, * and raising us up with together with Thyself, * suffering as a man, but rising as God, * wherefore we cry unto Thee the Lover of mankind: ** “O Lord giver of life glory be to Thee.”",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 5"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "The rocks were rent asunder, O Savior, * when Thy Cross was set upon Golgotha; * the gate-keepers of Hades were smitten with terror, * when Thou wast laid in the sepulcher as one dead; * for abolishing the stronghold of death, * Thou hast granted incorruption to all the dead by Thy Resurrection, * O Lord and Savior, ** Giver of life, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 6"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "The women longed to see Thy Resurrection, O Christ God; * Mary Magdalene having come in anticipation * found the stone rolled away from the tomb, * with an angel seated upon it, saying: * “Why seek ye the living among the dead? ** He hath arisen as God, that He may save all things.”",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 7"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "Tell us, O ye Jews, * where is Jesus, whom ye have thought to guard? * Where is He whom you placed in the grave, * sealing it with the stone? * Give back the dead, ye who denied life; * give back the buried One or else believe in the risen One. * Though you keep silent about the Lord’s rising, * the stones cry out aloud, * above all the one that was rolled away from the tomb. * Great is Thy mercy! * Great is the mystery of Thy dispensation! * Our Savior, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 8"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        }
      ],
      "verses": {
        "ref": "shared.praises_verse_ladder"
      },
      "gloria_rubric": "Glory ..., The Eothinon of the Resurrection Gospel Note: If the service from the Menaion is “feasted” the Eothinon is taken from the Menaion, and the Eothinon of the Gospel is read at the end of Matins.",
      "theotokion": {
        "text": "Thou art most blessed, O Virgin Theotokos, * for through Him who took flesh from thee, Hades hath been captured, * Adam recalled, the curse slain, Eve set free, * death put to death, and we have been given life. * Therefore in praise we cry: ** Blessed art thou, O Christ our God, who hast been thus well-pleased, glory be to thee.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Matins, Praises Both-now Theotokion"
        }
      }
    },
    "doxology_troparion": {
      "text": "Having risen from the tomb, and having burst the bonds of Hades, * Thou hast destroyed the sentence of death, O Lord, * delivering all from the snares of the enemy. * Manifesting Thyself to Thine apostles, Thou didst send them forth to preach; * and through them hast granted Thy peace to the world, * O Thou Who alone art greatly merciful.",
      "tier": 2,
      "src": {
        "file": "4-1.pdf",
        "locus": "Sunday Matins, troparion after the Great Doxology"
      }
    }
  },
  "liturgy": {
    "beatitudes": {
      "rubric": "Typica and Beatitudes",
      "troparia": [
        {
          "text": "Through a tree Adam became an exile from paradise; but through the tree of the Cross the thief made his home in paradise, for the former through tasting set aside his Creator’s commandment, while the latter, crucified with Him, confessed the hidden God, as he cried, “Remember me in Thy kingdom.”",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 1"
          }
        },
        {
          "text": "Thou wast lifted upon the Cross, O Lord, and Thou hast abolished the power of death, and as God Thou hast expunged the record held against us. O only Lover of mankind, grant the thief’s repentance to us also, who serve Thee with faith, O Christ our God, and cry unto Thee, “Remember us also in Thy kingdom.”",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 2"
          }
        },
        {
          "text": "On the Cross Thou didst tear up our record with the lance, and numbered among the dead Thou didst bind the tyrant there, thus delivering all from the bonds of Hades by Thy Resurrection; through which, O Lord who lovest mankind, we have been enlightened and we cry unto Thee, “Remember us also in Thy kingdom.”",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 3"
          }
        },
        {
          "text": "Thou wast crucified and arose from the tomb on the third day as conqueror, and Thou hast raised Adam the first-formed again, O only Immortal, grant me also, O Lord, to turn again to repentance from my whole heart, and ever cry unto Thee with fervent faith, “Remember me, O Savior, in Thy kingdom.”",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 4"
          }
        },
        {
          "text": "For our sakes the Impassible became a man, subject to suffering, and willingly nailed on the Cross He hath raised us with Himself; therefore with the Cross we also glorify the Passion and Resurrection, through which we have been refashioned, and through which we are saved, as we cry, “Remember us also in Thy kingdom.”",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 5"
          }
        },
        {
          "text": "Let us the faithful implore him who rose from the dead, despoiled the might of Hades, and appeared to the women as He cried “Rejoice!”; free our souls from corruption, as we ever cry unto him in the words of the good thief, “Remember us also in Thy kingdom.”",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 6"
          }
        }
      ],
      "gloria": {
        "text": "Let us the faithful with one mind vow to glorify the Father and the Son and the most holy Spirit, Unity of Godhead in three Hypostases, remaining unconfused, simple, undivided and unapproachable, through which we are delivered from the fire of eternal punishment.",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Gloria (Triadicon — final pre-Theotokion item)"
        }
      },
      "theotokion": {
        "text": "O Christ, greatly merciful Master, we bring to Thee Thy Mother, who bore Thee in the flesh without seed and truly remained a Virgin incorrupt after childbirth, to intercede: ever grant pardon offences to those who cry unto Thee: Remember us also in Thy kingdom.",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Theotokion"
        },
        "sourceLabel": "Theotokion"
      }
    },
    "prokeimenon": {
      "tone": 4,
      "text": {
        "text": "How magnified are Thy works O Lord, * In wisdom hast Thou made them all.",
        "tier": 2,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Liturgy prokeimenon"
        }
      },
      "verse": {
        "text": "Bless the Lord O my soul, O Lord my God Thou hast been magnified exceedingly.",
        "tier": 1,
        "src": {
          "file": "4-1.pdf",
          "locus": "Sunday Liturgy prokeimenon verse"
        }
      }
    },
    "alleluia": {
      "tone": 4,
      "verses": [
        {
          "text": "Bend Thy bow and proceed prosperously, and be King, because of truth and meekness and righteousness.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy Alleluia"
          }
        },
        {
          "text": "Thou hast loved righteousness and hated iniquity.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
            "locus": "Sunday Liturgy Alleluia verse 2"
          }
        }
      ]
    }
  },
  "vespers_weekday": {
    "sun": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone IV: Spec. Mel.: “Thou hast given a sign ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "I have sinned against Thee, O Lover of mankind, and not according to my human nature, for which I might ask forgiveness, but inhumanly, past my nature, beyond forgiveness. O my Savior Who didst become a man, transcending the laws of nature and comprehension by the human mind, since Thou hast a love for mankind surpassing understanding, have mercy on me that I may turn back to Thee.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Thou hast given a sign"
          },
          {
            "text": "Thou didst appoint repentance for those who sin, and not for the righteous, O Christ. I have as examples the thief and the prodigal, Manasseh and the harlot, the persecutor Paul, the publican and Peter who fell away, yet I am brought sorely to despair. Knowing Thy supremely good love for mankind, O Savior, I turn to Thee and weep, filled with the good hope that Thou wilt accept me.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Thou hast given a sign"
          },
          {
            "text": "Unto me who am now sunk in the passions of the body and am far removed from Thee, O King and God of all, grant compunction, the removal of evils and perfect amendment. In Thy great goodness, O omnipotent Jesus, Savior of our souls, save me, a prodigal, who otherwise have no hope.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Thou hast given a sign"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness,",
            "tier": 2,
            "src": {
              "file": "4-2.pdf",
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
              "file": "4-2.pdf",
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
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy, incorporeal angels, in the same tone: Spec. Mel.: “As one valiant among the martyrs ...”:",
        "menaion_fallback": [
          {
            "text": "Thou didst establish the angelic armies as pleasing habitations and most honored receptacles of divine light, O Immortal One; setting them in godly ranks as beholders and ministers of Thy glory, to carry out Thy word and fulfill Thine all-accomplishing and most holy will.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "Desiring as God to reveal an abyss of goodness, O Thou Who art without beginning, Thou didst first create the angelic choirs and the ranks of the hosts by Thine almighty hand and divine command; for it was truly fitting that goodness be poured out and go forth, that it might be given unto many, O Master.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "The six-winged seraphim, the many-eyed cherubim and the exceedingly exalted thrones, the dominions, the principalities, authorities, archangels, angels and divine powers surround Thee, partaking directly of Thine all-accomplishing radiance, praising Thy glory, O Almighty; praying to Thee on our behalf.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "4-2.pdf",
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
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O all-immaculate one, who hast surpassed the ranks of angels: With the angels ever beseech Him Who hath dominion over the angels and all of creation, that He grant us remission of sins, deliverance from the passions, and make us, who hymn His glory, worthy inheritors of incorrupt sustenance.",
        "tier": 1,
        "src": {
          "file": "4-2.pdf",
          "locus": "Sunday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.sun",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VIII:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone IV:",
        "items": [
          {
            "text": "I desired to erase the record of my transgressions with tears, and to please Thee well by repentance for the rest of my life; but the enemy deceiveth me and wageth war on my soul. Before I utterly perish, O Lord, save me!",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Who is tempest-tossed, yet fleeth to Thy haven, O Lord, and is not saved? Who is sick and, falling down before Thy healing power, is not cured? O Lord, Creator of all and Physician of the infirm: Before I utterly perish, save me!",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
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
            "text": "O Christ God, Who art glorified in the memorials of Thy saints, be Thou entreated by them, and send down upon us great mercy.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
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
        "text": "Rejoice, O cloud of Light! * Rejoice, radiant candlestick! * Rejoice, jar wherein the Manna was kept! * Rejoice, staff of Aaron! * Rejoice, bush un-burnt! * Rejoice, bridal-chamber! * Rejoice, thou throne! * Rejoice, holy mountain! * Rejoice, refuge! Rejoice, divine table! * Rejoice, mystic portal! ** Rejoice, thou joy of all!",
        "tier": 2,
        "src": {
          "file": "4-2.pdf",
          "locus": "Sunday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "mon": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone IV: Spec. Mel.: “Called from on high ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Emulating the Canaanite woman, O my soul, touch Christ from behind, and cry out repeatedly: Have mercy on me, O Master! My body, like her daughter, is possessed by evil spirits, and it flaileth about. Quench the burning of my flesh, I pray; and, causing the disorderly seizures to cease, mortify it by the fear of Thee, by the prayers of her who conceived and gave birth to Thee, and of all the saints, O greatly merciful Benefactor.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "Called from on high"
          },
          {
            "text": "Thou didst once send Jonah to the sinful Ninevites to preach to them, O Christ, and, repenting, they transformed their anger into kindliness, having been delivered from pernicious wrath. Wherefore, send also Thy mighty help unto me, who am unworthy, O Lover of mankind, that I may turn away from my countless offenses and be guided to the path of repentance; for I weep, groaning bitterly, that I may be delivered by Thy mercy from my many transgressions.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
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
            "spec_mel": "Called from on high"
          },
          {
            "text": "O Compassionate One, Who camest into the world to save sinful men and call them to repentance: In that Thou art full of tender compassion, have pity on me who have angered Thee more than all others, save me in Thy goodness, guide me to the way of repentance, and grant me thought of compunction, in Thy goodness making my heart steadfastly humble, simple, meek and guileless, O my Savior, in that Thou art full of loving-kindness.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Called from on high"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
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
              "file": "4-3.pdf",
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
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion, or if there is no Menaion, these Stichera of the holy forerunner, in Tone IV:",
        "menaion_fallback": [
          {
            "text": "O Forerunner, who hast boldness before the Lord, and who dost surpass all born from women: Unceasingly entreat Him on behalf of those who pray to thee with faith, that He grant us conversion and a beginning to repentance, that, saved, we may ever hymn thee.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "label": "plain"
          },
          {
            "text": "Thou wast called a prophet from thy mother’s womb and a preacher from her belly, O Forerunner and apostle of the coming of the Lord. I have given myself over to the demons and am become an industrious slave to sin. As a mighty warrior cure me of both these sins, that I may proclaim thy speedy help.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "As the winnowing-fan of the divine Spirit, winnow away like weeds the ways of my heart, gathering divine deeds from me, to store like grain in the granary of God, that, enriched by thee, my mediator, I may become food fit for the Master, O blessed one who baptized Christ,",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 3"
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
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
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
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Grant me tears from the depths of my heart, sighing from the depths of my soul, O maiden, and contrition and confession of the transgressions I have committed in this life, that by thy help, O all-pure one, I may pass my life in repentance and receive remission.",
        "tier": 1,
        "src": {
          "file": "4-3.pdf",
          "locus": "Monday-evening Vespers, LIC Glory/Both-now closer"
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
        "ref": "shared.daily_vespers_prokeimena.mon",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone IV:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone IV:",
        "items": [
          {
            "text": "I wish to wash away the record of my sins with tears, O Lord, * and please Thee the rest of my life through repentance; * but the enemy deceiveth me and fights against my soul. * Before the end and I utterly perish, ** save me, O Lord.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "Who, among the tempest-tossed, * having taking refuge in Thy harbor, * will not be saved O Lord? * Or who, that aileth and falling down in Thine infirmary, * will not be healed? * O Maker of all that is, and Physician of the ailing, * before the end, may I not utterly perish, ** save me, O Lord.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "O Lover of mankind, * as One Who hast accepted the patience of the holy martyrs, * by their prayers ** grant us great mercy.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 3"
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
        "text": "Deliver us from our needs, * O Mother of Christ God, * thou who hast given birth to the Creator of all, * that we all may cry out to thee: ** Rejoice, O thou who alone art the intercessor for our souls!",
        "tier": 2,
        "src": {
          "file": "4-3.pdf",
          "locus": "Monday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "tue": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone IV: Spec. Mel.: “As one valiant among the martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Lifted up upon the Cross, pierced by a spear, Thy fingers bloodied, O supremely good Master, Thou didst sign our emancipation; and tearing apart the record of the sins of Adam, our forefather, Thou didst free human nature. Wherefore, O Compassionate One, we hymn Thy goodness, which transcendeth understanding.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "We hymn Thy sufferings, O Jesus our Master: the Cross, the spear and the reed, the sponge and the nails, the beatings, the purple robe and the crown of thorns, the spittings and mockery which Thou didst willingly endure. I magnify Thy long-suffering, O only Innocent One, Bestower of life, and I glorify Thee with faith, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "I bow down before Thy precious Cross, kissing it with love, O supremely good One, and I glorify Thy condescension, boundless mercy, ineffable compassions and rich goodness, which transcend understanding, for thereby Thou hast saved the race of mankind, which was held fast in the darkness of transgressions. Glory to Thy crucifixion, O Christ!",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "4-4.pdf",
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
            "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath waited patiently for Thy word, * my soul hath hoped in the Lord.",
            "tier": 2,
            "src": {
              "file": "4-4.pdf",
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
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in the same melody:",
        "menaion_fallback": [
          {
            "text": "When she beheld Thee nailed to the Cross, O Lord, the Ewe-lamb, Thy Mother, marveled and cried out: “What is this that I see, O my most desired Son? Thus hast Thou been repaid by the disobedient and iniquitous assembly, which enjoyed Thy many miracles. But glory be to Thine ineffable condescension, O Master!”",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 1"
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
            "text": "When she beheld Thee, the Lamb and Shepherd., upon the Tree, the Ewe- lamb who gave Thee birth lamented and exclaimed to Thee maternally: “O my Son most beloved, how hast Thou been lifted up upon the tree of the Cross, O Long-suffering One? How have Thy hands and feet been pierced with nails by the iniquitous, O Word? How hast Thou shed Thy blood, O Master?”",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 2"
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
            "text": "When she beheld Thee hanging upon the Cross, the Virgin Thy Mother marveled, O Lord, and, lifting up her eyes, said: “How have they who enjoyed Thy many gifts rewarded Thee, O Master? Yet I pray: Leave me not alone in the world, but hasten Thou to arise, raising up our forefather together with Thee!”",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 3"
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
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 2"
            }
          },
          {
            "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
            "tier": 2,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "“Lament not for Me, O Mother, * beholding Me thy Son and God hanging upon the Tree, * Who hath suspended the earth upon the waters unsupported, * and hath fashioned all creation; * for I shall arise and be glorified, * and shall crush the kingdoms of Hades with strength; * destroying its power * and delivering those in bondage * from its wickedness, * for I am compassionate; * and I shall bring them to My Father, ** in that I am the Lover of mankind.”",
        "tier": 2,
        "src": {
          "file": "4-4.pdf",
          "locus": "Tuesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "Called from on high",
        "sourceLabel": "Stavrotheotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.tue",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone I:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone IV:",
        "items": [
          {
            "text": "Thou hast given Thy Cross to us as an invincible weapon, O Christ; and with it we triumph over the assaults of the alien one.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
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
            "text": "Ever possessing Thy Cross as a help, O Christ, we easily trample underfoot the snares of the enemy.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
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
            "text": "As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 3"
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
        "text": "The most pure one, * beholding Christ, the lover of mankind, crucified, * His side pierced by a lance, * cried out, lamenting: * “What is this, O my Son? * How have these thankless people rewarded Thee * for the good things Thou hast done for them? * Dost Thou hasten to leave me childless, O most Beloved? ** I marvel, O Compassionate One, at Thy voluntary cruci- fixion!”",
        "tier": 2,
        "src": {
          "file": "4-4.pdf",
          "locus": "Tuesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "wed": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the holy apostles, in Tone IV: Spec. Mel.: “As one valiant among the martyrs ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O ye glorious ones, who with a most mighty understanding waged war, arraying yourselves against the wicked foe, for having valiantly armed yourselves with the weaponry of the Spirit, ye destroyed all the might of the demons, who seize men’s souls like plunder; wherefore, we honor you throughout the ages, O apostles.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
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
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "Spreading out the net of the Faith in the form of the Cross, Thy twelve divine apostles dragged all the nations to the knowledge of Thee, O Christ, and dried up the salty sea of the passions; wherefore, I beseech Thee: By their wholly well pleasing supplications recall me from the depths of transgressions.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
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
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "With divine hymns let the divinely chosen and all-honorable twelve apostles be praised: Peter, Paul and James, Luke and John, Matthew and Thomas, Mark, Simon and Philip, the most glorious Andrew and Matthias, with the godly and most wise Bartholomew, and the seventy others.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "4-5.pdf",
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
              "file": "4-5.pdf",
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
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy hierarch Nicholas, the wonderworker, in Tone IV:",
        "menaion_fallback": [
          {
            "text": "With divine myrrh, the divine grace of the Spirit anointed thee the chief hierarch of the people of Myra, for with most sacred virtues as with myrrh thou hast perfumed the ends of the earth, and with thy sweet-smelling supplications thou dost ever dispel the fetid passions; wherefore, we glorify thee with faith and keep thine all-holy memory, O Nicholas.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "As is meet, we bless thee, O Nicholas, as an ever-shining lamp, a universal luminary who hath shone forth in the firmament of the Church and enlightened the world, driving away the gloom of grievous misfortunes, dispelling the winter of griefs, and creating profound serenity.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "As one compassionate, and right loving, as a most fervent deliverer, and a true intercessor for the faithful who ask thine aid, O most sacred father Nicholas, appearing and manifesting thyself in dreams, thou didst save those who were about to die unjustly, O fellow citizen with the angels, who standest with the venerable and the righteous.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, Menaion-fallback sticheron 3"
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
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "4-5.pdf",
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
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O all-pure one, * who hath contained the infinite God in thy womb * Who, in His love for mankind, hath become a man, * and hath received our substance from thee, * deifying it: * disdain me not who am now sorrowing, * but quickly take pity * and free me from divers enemies ** and the malice of the evil one.",
        "tier": 2,
        "src": {
          "file": "4-5.pdf",
          "locus": "Wednesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.wed",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone V:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the holy apostles, in Tone IV:",
        "items": [
          {
            "text": "Thou didst enlighten the choir of the apostles with the Holy Spirit, O Christ God. By them wash away the defilement of our sin, and have mercy on us.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thy Holy Spirit revealed the illiterate disciples to be teachers, O Christ God, and set at naught the deception of the pagans with their greatly eloquent harmony, in that He is almighty.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O martyrs of the Lord, ye animate sacrifices, noetic whole- burnt offerings, perfect offerings to God, ye lambs who know God and are known of Him, and to whose fold the wolves have no entry: Pray ye that with you we also may be tended by the water of peace.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
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
        "text": "Deliver us from our needs, * O Mother of Christ God, * thou who hast given birth to the Creator of all, * that we all may cry out to thee: ** Rejoice, O thou who alone art the intercessor for our souls!",
        "tier": 2,
        "src": {
          "file": "4-5.pdf",
          "locus": "Wednesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "thu": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone IV: Spec. Mel.: “Thou hast, given a sign ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "When all creation beheld Thee crucified, it was changed and trembled: the whole earth shook, quaking, O long-suffering Word; in fear the veil of the temple rent in twain and in terror the rocks split asunder when Thou wast insulted; and the sun, knowing Thee to be its Creator, hid its rays.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
            "spec_mel": "Thou hast, given a sign"
          },
          {
            "text": "How did the most iniquitous council dare to condemn Thee, O immortal Judge, Who of old in the desert gave the law to Moses, who beheld God? How could they fail to be filled with terror, beholding the Life of all dead upon the Cross? How could their mind not fathom that Thou art the one Lord and Master of creation?",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Thou hast, given a sign"
          },
          {
            "text": "With the piercing of Thy side, O greatly Merciful One, the ancient record of our forefather Adam was rent asunder; and by the shedding of Thy blood rejected human nature was sanctified, and cried aloud: Glory be to Thy loving-kindness! Glory be to Thy divine crucifixion, O almighty Jesus, Thou Savior of our souls!",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
            "spec_mel": "Thou hast, given a sign"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "4-6.pdf",
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
              "file": "4-6.pdf",
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
            "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord,",
            "tier": 2,
            "src": {
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in Tone IV: Spec. Mel.: “As one valiant among the martyrs ...”:",
        "menaion_fallback": [
          {
            "text": "When she beheld Thee nailed to the Cross, O Lord, the Ewe-lamb, Thy Mother, marveled and cried aloud: “What is this that I see, O my sweetest Son? Thus art Thou repaid by the disobedient and iniquitous assembly, which enjoyed Thy many miracles. But glory to Thine ineffable condescension, O Master!”",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "The foregoing Sticheron is repeated.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          },
          {
            "text": "When she beheld Thee, the Lamb and Shepherd, upon the Tree, the Ewe-lamb who gave Thee birth lamented and exclaimed to Thee maternally: “O my most beloved Son, how hast Thou been lifted up upon the tree of the Cross, O Long- suffering One? How have Thy hands and feet been pierced with nails by the iniquitous, O Word? How hast Thou shed Thy blood, O Master?”",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "As one valiant among the martyrs"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "4-6.pdf",
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
              "file": "4-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "When she beheld Thee hanging upon the Cross, the Virgin Thy Mother marveled, O Lord, and, lifting up her eyes, said: “How have they who enjoyed Thy many gifts rewarded Thee, O Master? Yet I pray: Leave me not alone in the world, but hasten Thou to arise, raising up our forefather with Thee!”",
        "tier": 1,
        "src": {
          "file": "4-6.pdf",
          "locus": "Thursday-evening Vespers, LIC Glory/Both-now closer"
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
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.thu",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VI:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone IV:",
        "items": [
          {
            "text": "Thou hast given Thy Cross to us as an invincible weapon, O Christ; and therewith we triumph over the assaults of the alien one.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
            "text": "Ever possessing Thy Cross as a help, O Christ, we easily trample underfoot the snares of the enemy.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
            "text": "O Christ God, Who art glorified in the memorials of Thy saints, entreated by them send down upon us great mercy.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
        "text": "“Lament not for Me, O Mother, * beholding Me thy Son and God hanging upon the Tree, * Who hath suspended the earth upon the waters unsupported, * and hath fashioned all creation; * for I shall arise and be glorified, * and shall crush the kingdoms of Hades with strength; * destroying its power * and delivering those in bondage * from its wickedness, * for I am compassionate; * and I shall bring them to My Father, ** in that I am the Lover of mankind.”",
        "tier": 2,
        "src": {
          "file": "4-6.pdf",
          "locus": "Thursday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "Called from on high",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "fri": {
      "rubric": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone IV: Spec. Mel.: “Thou hast given a sign ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Emulating the sufferings of Christ, the Lover of mankind, O passion-bearers, ye gave your bodies over to wounds, and bitter torments, and innumerable pangs, ever looking forward to the divine delight of paradise, to ever-abundant sustenance and everlasting glory; and having received this, ye pray for those who hymn you.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone IV: Spec. Mel.: “Thou hast given a sign ...”:"
          },
          {
            "text": "Emulating the sufferings of Christ ...,",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 2 (incipit repeat of sticheron 1, §2.7, printed with an explicit \"Repeat:\" label)"
            },
            "label": "plain",
            "incipit_ref": "tone4.vespers_weekday.fri.lic.octoechos[0]",
            "sourceLabel": "Repeat:",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone IV: Spec. Mel.: “Thou hast given a sign ...”:"
          },
          {
            "text": "O most sacred pastors, as glorious emulators of Christ, the Chief Shepherd, the King of all, ye readily laid down your lives for the sheep, and endured grievous misfortunes, O right blessed ones; and as champions ye save the divinely chosen flock unharmed by cruel wolves.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” these Stichera of the righteous ones, in Tone IV: Spec. Mel.: “Thou hast given a sign ...”:"
          },
          {
            "text": "O ye martyrs of the Lord, living sacrifices, noetic burnt-offerings, perfect offerings to God, lambs who knew God and are known by Him, whose fold no wolf can enter: Pray ye that with you we may also feed beside the waters of rest.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 4"
            },
            "label": "plain",
            "provenance_note": "Then, these Stichera, of the holy martyrs, in the same melody:"
          },
          {
            "text": "Precious is the death of Thy saints, O Lord. Slain by the sword, and by fire and freezing cold, they poured forth their blood, placing all their hope in Thee that from Thy hand they would receive the reward of their labors. They endured to the end and received from Thee O Savior, Thy great mercy.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 5"
            },
            "label": "plain",
            "provenance_note": "Then, these Stichera, of the holy martyrs, in the same melody:"
          },
          {
            "text": "O saints, since ye have boldness in the presence of the Savior, unceasingly entreat Him for us sinners, asking that remission of sins, and great mercy, be granted to our souls.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 6"
            },
            "label": "plain",
            "provenance_note": "Then, these Stichera, of the holy martyrs, in the same melody:"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
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
              "file": "4-7.pdf",
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
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 3"
            }
          },
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 4"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
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
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 6"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Prophet David, the ancestor of God, * spoke of thee in psalmody unto Him Who hath accomplished great things in thee. * For God was well pleased without father to become a man from thee, * the Queen who standeth at His right hand, * and He - the source of life - showed thee to be His mother, * that He might renew His own image, corrupted by the passions. * Having found the lost sheep wandering on the mountain * He hath laid it upon His shoulders, * that He may bring it to his Father; * and in accordance with His own will * unite it to the heavenly powers * and thus, O Theotokos, save the world, ** Christ, Who is richly and abundantly merciful.",
        "tier": 2,
        "src": {
          "file": "4-7.pdf",
          "locus": "Friday-evening Vespers, LIC Glory/Both-now closer — the dogmatikon printed IN FULL as its own site (§9.2)"
        },
        "type": "dogmatic_theotokion",
        "sourceLabel": "Glory ..., Both now ..., Dogmatic Theotokion:"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.fri",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VII:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera, in Tone IV:",
        "items": [
          {
            "text": "Thou art glorified in the memorials of Thy saints, O Christ our God; by their intercessions send down upon us great mercy.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 1"
            },
            "label": "martyrs"
          },
          {
            "text": "O Thou Who hast accepted the patient endurance of the holy martyrs; in Thy love for mankind do Thou accept our hymns of praise, and by their intercessions send down upon us great mercy.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 2"
            },
            "label": "martyrs"
          },
          {
            "text": "With the souls of the righteous who have reposed, O Savior, grant rest to the souls of Thy departed servants, preserving them in the life of blessedness which is in Thee, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
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
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike the 2-7 print — §5 per-tone; 3-7 diverged the same way)"
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
            "text": "Their souls * shall dwell among good things.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 2"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "O thou inextinguishable lamp, * and throne of righteousness * most pure Sovereign Lady: ** pray thou that our souls be saved.",
        "tier": 2,
        "src": {
          "file": "4-7.pdf",
          "locus": "Friday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. FRIDAY NIGHT: TONE IV AT COMPLINE Canon of supplication to the most holy Theotokos"
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
              "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Accept the supplication of my soul, O most pure Lady who hast given birth to God in the flesh; for I have fled unto thy mighty assistance, lest my hope utterly fail.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Like a slave I fall down before thee, O most pure Birthgiver of God, for, as thou hast great boldness, by thy supplications mediating before thy Son, deliver me from all tribulations.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Engulfed by the waves of the sea of life and beset by cruel temptations, I have hastened to the calm haven of thy protection; wherefore, deliver me from evils, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 3"
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
                "text": "With thy compassionate and calm gaze look upon thy servant and make haste to hearken unto me, O good one, fulfilling the supplication of thy servant and destroying the counsels of the evil, O most pure one.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
              "text": "Thy Church, O Christ, rejoiceth in Thee crying aloud: * Thou, O Lord, art my strength, * my refuge and foundation.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "O Lady, thou art an aide for the faithful against the enemy, an ally in battles, and a refuge for those who grieve.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "In that He is thy Son, pray to the God of all, to Whom thou hast given birth in the flesh, that throughout all circumstances of life He grant me remission of mine evils.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Mercifully regard our lowliness, O Lady, that thy servants may be delivered from the wrath which ever besets us.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Ever saved from all sorrows by thy protections, O good Lady, we offer praise to thy Son.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
              "text": "I have heard report of Thee, O Lord * and I am afraid. * Having understood Thy works, * I am in awe of Thee O Lord.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "As thou hast boldness before thy Son, O pure Birthgiver of God, free me from this present temptation, setting at naught the constant machinations of the enemy who ever wages war upon me.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O ye choirs of the ranks on high, ye martyrs and apostles, ye assembly of the divine prophets, ye righteous and venerable: with the Mother and Theotokos pray to Christ on our behalf.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "O Christ, accept Thy most glorious Mother who prayeth for the world and mercifully crieth out to Thee: “O my Son, accept my supplication and calm the wrath which hangeth over the world!”",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 3"
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
                "text": "I fall down before thee, O Theotokos, and pray from the depths of my heart: Rescue me from these present trials, that, delivered from evils, I may offer hymnody to thy splendor.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
              "text": "The wicked will not behold Thy glory, O Christ, * but we who rise early to hymn Thee shall behold Thee, * the Only-Begotten effulgence of Thy Father's divinity, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O pure one, thou hope and help of mortals, take pity on our lowliness, we pray, and free us from this present wrath.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Availing ourselves of thy prayer as it were an insuperable rampart, O pure one, we cry out to thee: O Lady, drive away the invisible foe!",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 2"
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
                "text": "Let us who put our trust in thee never be put to shame, O most pure one, we pray with tears, rendering homage to thy goodness.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "With thy most pure hand drive away the enemy who warreth against us, O all-hymned one; and let the accursed ones understand that we have placed our hope in thee.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 4"
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
              "text": "Prefiguring Thy three-day burial * prophet Jonah praying in the belly of the sea-monster cried aloud: * Deliver me from corruption * O Jesus Thou King of hosts.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Wash away our sins, we pray, O Lover of mankind, by the supplications of her who gave birth to Thee without seed; for, for our sake O Word, Thou didst shed Thy precious blood.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 1"
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
                "text": "Against us hath a wicked assembly of those who unjustly war against us gathered together, O Bride of God; but cast them down, like Peter cast down Simon Magus of old.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Hearken unto our prayer, O Lady, we pray, and still thou the waves of the tempest of divers pangs whereby enemies have assembled against us.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Transform my grief into joy, in that Thou art compassionate, replace my lamentation with gladness, and have pity, O Christ Who, for the sake of the Theotokos, transformed water into wine in Cana of Galilee.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
              "text": "Forsake us not to the end for Thy names sake, * for we have not forsaken Thy commandments, * and take not Thy mercy from us * O Lord God of our Fathers, * who art supremely hymned throughout the ages.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Amid divers perils and tribulations, I have now fled to thee, my salvation, O pure one, and I cry aloud: Let me not be turned away, ashamed, from my hope, but hearken, and deliver me from the snares of those who pursue me.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Like a slave I bend my neck, wretch that I am, and I utter a cry from the depths of my heart; stretching forth my hands, I bend my knees and entreat thee, the most pure Virgin, that I be delivered from the tribulations of those who ever assail me with the assaults of the evil one.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O most glorious and pure Mary, boast of mortals, we pray: Grant thine aid unto us who pray and piously worship thine Offspring, for we have acquired none other hope or helper than thee.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "O Mary who knewest not a man, O helper of the faithful, who hast given birth to God in a manner transcending understanding and all nature, from sudden temptations deliver as pure those who honor thee, unharmed by all enemies, visible and invisible.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
              "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "I dare not raise my hands unto thy Son, O pure one, for I am wholly defiled; wherefore, in boldness I flee to thee, O Lady. Mediate with the compassionate God Who is easily placated, that we may be delivered from the adverse foes who afflict us.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 1"
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
                "text": "To thee have I entrusted mine eyes, heart and soul, O most pure one; wherefore, have pity, O pure Lady, falling down before the Compassionate One, on behalf of me who am wicked and unable to endure, that He save me from all want, wounds and grief.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 2"
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
                "text": "“With Thy weaponry fell those who war against us, O Lord, in that Thou art mighty, and grant victory unto those who trust in Thee with faith, O Master!” prayeth the Theotokos with John the forerunner, the choir of the apostles and Thy martyrs.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 3"
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
                "text": "Once Gabriel brought thee the joy of the annunciation, O pure virgin, and by thy birthgiving hath loosed the grief of our first mother; wherefore, having cleansed my soul of despondency, by thy prayers render me unashamed.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
              "text": "A cornerstone not cut by hand O Virgin, * was cut from thee the unhewn mountain: * even Christ, Who hath joined together the disparate natures; * therefore rejoicing we magnify thee, * O Theotokos.",
              "tier": 2,
              "src": {
                "file": "4-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Quickly manifest thine aid, O Virgin Theotokos; and eagerly bend thine ear and hearkening to us who fervently cry aloud, free us from evils, and deliver us by thy prayers.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Wholly stuck fast in slothfulness, I find myself in an abyss of despair due to my transgressions; wherefore, stretch forth thy hand unto me, O Virgin Mother, as Christ did to Peter, and deliver me from the depths of sin.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Lay low the tongue of the ungovernable and haughty one which, like a sharpened arrow, aims to slay me, O Virgin; melt it like wax, and show forth his counsels to be in vain.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
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
                "text": "Destroy all the counsels of those who have armed themselves against us, O Mother of God Most High, and fill with joy those who trust in thee, that we may all earnestly proclaim thine aid.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 4"
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "Darkened in mind by many transgressions, I, the prodigal, cry out to thy mighty aid, O Theotokos: Enlighten the eyes of my soul, shine upon me a radiant beam of repentance, and clothe me in the armor of light, O pure Virgin Birthgiver of God.",
          "tier": 1,
          "src": {
            "file": "4-2.pdf",
            "locus": "Sunday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Trisagion through Our Father..., Troparion. The rest as usual. Dismissal."
    },
    "mon": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure one, who alone provides defense amid perils and tribulations, in that thou art good accept the heartfelt supplication of us who fervently flee unto thy protection.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Wretch that I am, I have found thee to be a calm haven fending off the assaults of perils and want, O divine bearer of the God-man, and I chant hymns of thanksgiving unto thee.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Gazing upon me, who am stuck fast in evil circumstances and sorrow, with thy meek and merciful eye, O Birthgiver of God, quickly free me, for I call upon thee for help.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Adam and Eve have been delivered from condemnation by thee, O pure one, and with them I fall down before thee. Transform my tears of grief now into joy, and free me from perils.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
              "text": "The bow of the mighty hath waxed feeble * and the weak have girded themselves with strength: * therefore is my heart established * in the Lord.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having acquired thee as a mighty weapon and bulwark, I vanquish hordes of the adversary, and I hymn thy mighty acts, O Theotokos who knewest not wedlock.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou destroyest the furnace of grief and dost extinguish the burning heat of despair. Who is a help for us like unto thee, O Virgin Theotokos?",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Hearken unto the cry of thy servant, who am in need of thine aid, O Mother of God. O my hope, hear me and hasten to save me.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 3"
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
                "text": "Look down, O pure one, and save me, for at the command of God, in a manner which transcendeth all telling and understanding, thou hast given flesh to the Word of God Who sustaineth all things.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 4"
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
              "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Having vanquished those who have become mine enemies in vain and have striven cruelly to seize my soul, preserve me unassailed, O Lady, that, rejoicing, I may glorify thee.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Delivering me from the deceitful tongue, in that thou art my good intercessor, show me to be unsullied by the works of this life, for as the Mother of the Creator thou art able to accomplish much.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Afflicted as I am, but knowing thee to be a painless physician, I cry out with spirit and mouth: Heal me, O Lady! Have mercy and save me, for I, thy servant, flee unto thee!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "O Virgin Mary, we all hymn thee as the boast of angels and mortals, and we pray with faith: O Lady, pray that we be delivered from all sorrow!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 4"
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
          "5": {
            "irmos": {
              "text": "Thou, O Lord, who camest into the world, * art my light, * a holy Light turning from the darkness of ignorance * those who sing Thy praises in faith.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O pure one, direct the prayer of thy servant to the Lord thy Son, that I may find remission of my many and varied transgressions.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Deliver me from sufferings and misfortunes, O Bride of God, for God hath appointed thee as a mediator before Him for my lowliness.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou art my protectress and constant boast, O Lady Theotokos, for thou dost in nowise spurn me who am beset by griefs.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Ask now, that by thy prayers we may be granted remission of sins, and deliverance from perils and impure passions, O all-hymned one.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 4"
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
              "text": "The Church crieth out unto Thee O Lord, * ‘I will sacrifice unto Thee with a voice of praise * having been cleansed of the blood of the demons' * by the blood that for mercy's sake flowed from Thy side.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Amid the desperate tribulations which greatly assail me, thou art my strength, O most pure Lady, and I cry unto thee: For thou art thy servant's great helper.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Heal thou the wounds of my soul, O Virgin Lady; help me, and deliver thy servant from slander, attack and unjust assault.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Destroy thou the unjust assailants who ever attack me and leave me not to perish, for I have recourse to thee O pure one, for all things are possible for thee, O divine maiden.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 3"
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
                "text": "Still thou the raging billows of my soul, for a multitude of transgressions, temptations and griefs have risen up against me; but do thou save me, O Lady.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 4"
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
              "text": "Thou didst save the children of Abraham in the fire * and slay the Chaldeans, * who unjustly entrapped the righteous ones. * O supremely hymned Lord, God of our fathers, * blessed art Thou.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Having quickly repelled the force of the Moslems with the sword of thy supplications, O Mary, preserve thy people and flock, who cry unto thy Son: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 1"
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
                "text": "O thou who art equal in majesty to the tabernacle, O Mother of God, accept me who flee unto thee, that the enemy who strives to destroy me may not overtake me who chant to thy Son: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 2"
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
                "text": "O Mary, Birthgiver of God, go thou quickly before thy servant, for I am engulfed in the threefold waves of perils and am bereft of help, and I cry unto thee: O Theotokos my help, have mercy upon me!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "The human temptations which are the cause of sins do thou now destroy by thy divine prayers, O good Theotokos, and deliver thy servants from painful transgressions and all perils.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 4"
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
              "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "An iniquitous nation hath arisen against us, boasting that it will destroy thy servants, O most pure one; but, destroying it, protect those who cry: Bless the Lord, all ye works of the Lord!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Thy many compassions mercifully save us from the judgment of sin and divers perils, O only Mother of God, for, having given birth unto God, thou hast pity for His world.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Take pity now upon me in my supplication, and grant me joy in place of grief, O Lady, that I may hymn thee and cry out to thy Son: Bless the Lord, all ye works of the Lord!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "In that thou art my strength and helper, I am not afraid of the hostility of the enemy, but I hymn thee, O Lady, and cry out to thy Son: Bless the Lord, all ye works of the Lord!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
              "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
              "tier": 2,
              "src": {
                "file": "4-3.pdf",
                "locus": "Monday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Having sharpened his weapons, the iniquitous and false Arabian taketh counsel against us; yet having armed thy servants against him with the power of the Cross of thy Son and thy supplications, O Virgin Theotokos, we proclaim thy glory.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "Thou hast been given to me as strength against the enemy and deliverance amid trials. I know not what I shall offer unto thee, O pure one. Yet accept thou from thy servant, that which I do have; my thanks which I offer unto thee, O Lady, and save me.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 2"
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
                "text": "O Mother of the Creator of all, all-pure comfort of the sorrowful, intercessor for the drowning and helper of the vanquished: keep me safe until the end of my life!",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
                "text": "O all-hymned one, though I am oppressed by many sins and cruel perils, I now offer thee the sacrifice of praise and earnestly cry out to thee: O holy Theotokos, help me, for, glorifying thee, I complete my hymnody.",
                "tier": 1,
                "src": {
                  "file": "4-3.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "All of us who have recourse to thy protection, O Virgin, cry out to thee: Accept our entreaty, and cease thou never to pray to Him Who is the Lover of mankind, that thy servants may be saved.",
          "tier": 1,
          "src": {
            "file": "4-3.pdf",
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father... Troparion. The rest as usual, and the dismissal."
    },
    "tue": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "I shall open my mouth, * and be filled with the Spirit, * and utter discourse to the Queen and Mother; * and be seen radiantly keeping festival, * joyfully praising her wonders.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Having seedlessly given birth in the flesh to Christ, the immeasurable Wisdom and Power of God, O most immaculate Birthgiver of God, through thy birthgiving thou hast acquired the might of strength and divine majesty.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O thy birthgiving which passeth understanding, O most pure one, whereby the multitude of mortals have been enriched with incorruption and, as is meet, now call thee, the blessed Mediatress of restoration!",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "By thine overshadowing heal thy servant, who am sick in soul and body, O Virgin; for I have recognized thee as the Intercessor for all who find themselves amid grief, in that thou hast given birth to our salvation.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 3"
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
                "text": "Extending unto me a hand of salvation, O Lady, from the abyss of evils lead me up who am cruelly engulfed in the depths of sorrows and beset by the storms of boundless evil circumstances.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
              "text": "O Theotokos, thou living and plentiful fount, * establish in spiritual fellowship those who sing hymns to thee, * and in thy divine glory * grant them crowns of glory..",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Everywhere thou pourest forth streams of healing upon the sick, O Virgin; for the Lord of mercy, Who was born from thee in a manner transcending understanding, hath shown thee to be a wellspring of loving-kindness, O Lady.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 1"
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
                "text": "O Virgin Mother, thou didst become the beautiful chamber of the divine Word and a divine bridal-chamber in a manner transcending nature; wherefore, open unto me the mercies of thy compassions, and lead me up to salvation.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "All my strength hath drained from me due to the multitude of my boundless evils, and I have drawn nigh to despair because of my many sorrows. Help me, O Sovereign Lady who hast given birth to Life, thou consolation of those who weep!",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 3"
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
                "text": "Have mercy, O only Mother of God, have mercy! Take pity on mine accursed soul, which is beset by wicked demons and passions as by a flood, and before the hour of my death deign to purify it.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
              "text": "Perceiving the profound counsel of God, * that the incarnation of Thee the Most High, * will be from a Virgin, * the prophet Habbakuk cried aloud: * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "The King of all, desiring thee as a royal root and womb, O Theotokos, made thee more exalted than the cherubim and seraphim, dwelling wholly within thee.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Incarnate for the sake of human birth, the Creator was born from thee and hath shown thee to be a true intercessor for Christians; wherefore, I flee to thy protection, O pure one.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "Be thou my protection, help and refuge, for I am thy servant, O most pure Virgin, and cure me of my boundless evils, that I may chant to thee: Glory to thine ineffable birthgiving!",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "I am at a loss, I weep and groan because of my passion-plagued thoughts, and I beseech thee, in that thou art a wellspring of mercy, deliver me from my pain, and lead me to divine compunction.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "All creation stands in awe of thy divine glory; * for thou, O Virgin who hast not known wedlock, * didst contain within thy womb the God of all, * and gave birth to the timeless Son, * bestowing peace, upon all who hymn thee.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Thou ever pourest forth the waters of healing upon all the infirm, O Virgin, in that thou art the animate cloud of Christ the King; wherefore, send down the dew of healing upon me who am sick.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Virgin Bride of God, cease thou never to entreat as Savior and Master Him Whom thou didst bear, that He grant me remission of sorrows and pangs, and lead me up to incorruptible joy, having forgiven me my transgressions.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "Thou art my hope and boast of salvation, O most pure one; wherefore, I flee to thy protection. Disdain me not who am now devoured by many and grievous pangs; but go thou before me, and save me.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 3"
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
                "text": "“How hangest Thou upon the Tree like a ripe cluster of grapes? O Sun of glory, how hast Thou been lifted up, at Whose suffering the light of the sun grew dim?”, the ewe-lamb who gave Thee birth, O Savior, exclaimed maternally, crying out to thee.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 4"
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
              "text": "I have reached the depths of the sea * and the tempest of my many sins hath engulfed me; * but do Thou raise up my life from the abyss * O Greatly-merciful One.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Our God, the King of all, assumed human form from thee, O Virgin, and hath shown thee to be, as the Theotokos, more exalted than the cherubim and the awesome seraphim.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "O thou who alone hast given birth to the divine Life Who granteth salvation unto all, grant salvation unto me who am in despair, and cut through the uprisings of my passions.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "Grant me thine aid and deliver me from tribulations and sorrows, freeing me from perils and my transgressions, O thou who hast given birth to the Deliverance of all.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "In thee do we boast, O Virgin, and through thee are we delivered from evils. Let not us who trust in thee fear the assault of ungodly barbarians, for we hymn thee.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
              "text": "Refusing to worship created things * in place of the Creator, * the divinely wise youths bravely trampled down the threatening fire * and rejoicing they sang aloud: * O supremely hymned Lord and God of our Fathers, Blessed art Thou.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "All my strength hath been desiccated by the passions like clay, and lo! I have drawn nigh unto Hades. Deliver me from most pernicious bonds, O Mother of God, and with the hand of thy mercy rescue me from the griefs which assail me.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "All that is within me hath been rent apart by multifarious evils, and I am cut off from life by the multitude of my transgressions and infirmities; yet deliver me from them all, O most pure one, who for us hast given birth unto Life.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "In that thou art good, O most pure Virgin, grant that the kingdom of the all-compassionate Christ may be opened unto me, and that, by thy supplications, O blessed one, I may be delivered from soul-destroying pangs and assaults.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 3"
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
                "text": "Painful wounds have been inflicted upon me by my boundless transgressions and lead me to death of soul and body; yet rescue me from all sorrows and infirmities, O Lady, in that thou art mighty.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
              "text": "The Offspring of the Theotokos * saved the holy children in the furnace. * He who was then prefigured hath now been born on earth, * and He gathereth all creation to hymn thee: * all ye works praise ye the Lord * and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Having fallen into a thicket of thorny passions, I am pierced by their sting; wherefore, I have fallen into despair, weighed down by bonds and temptations, O most pure Mother of Christ God. Delivering me from them, grant forgiveness of transgressions unto all by thy supplications.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "As thou art the candlestand of the light of the threefold Sun, dispel the darkness of my transgressions by the radiance of thy compassion, O Birthgiver of God, granting deliverance from oppressive pangs unto me who hymn and supremely exalt thy most pure Offspring with faith.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having made His abode wholly within thy womb, O Ever-virgin, the transcendent God ineffably became incarnate, making thee the helper and universal aid of the world. Wherefore, I beseech thee, that I may be delivered from my grievous sufferings and the bonds of my transgressions.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "At the hour of my death, O Virgin Mother of God, rescue me from the hands of the demons, from condemnation, sentencing, dread trial, the bitter toll-stations, the cruel prince, and everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
              "text": "Let every mortal born on earth, * radiant with light, in spirit leap for joy; * and let the host of the angelic powers * celebrate and honor the holy feast of the Mother of God, * and let them cry aloud: * Rejoice! O all- blessed Theotokos, * thou pure Ever-virgin.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "The mortal race hath been exalted by thy birthgiving, receiving adoption through union with God; and the heavenly multitude joins chorus with those on earth, hymning thee as is meet, O pure one, as the Mother of our God, the refuge of the whole world.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "Bound withal by my sins, countless wounds and pangs, I call upon thine aid and assistance, O Lady, that thou grant me deliverance from every cruel misfortune and sorrow.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "With love I offer hymnody and song, and well-woven praise from my pain-wracked soul unto thee who hast given birth in essence unto Christ God. Rendering Him easily reconciled, and fulfilling all my petitions, O Theotokos, preserve me by thy supplications.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
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
                "text": "O pure Birthgiver of God, enlighten the eyes of my soul, that the heavy darkness of sin may not overtake me, and that the abyss of despair may not swallow me; but do thou thyself save and pilot me, O thou unashamed intercessor of the faithful.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 4"
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "Stavrotheotokion: O most immaculate Virgin Mother of God, a sword passed through thy most holy soul when thou didst behold thy Son and God crucified of His own will. Cease not to beseech Him, O blessed one, that He grant us forgiveness of our transgressions.",
          "tier": 1,
          "src": {
            "file": "4-4.pdf",
            "locus": "Tuesday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparion. The rest as usual. Dismissal."
    },
    "wed": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Truly, yea surely, thou hast given birth to the Lord God, and truly, yea surely, thou alone hast been called the Theotokos, O pure one. Wherefore, with faith we hymn and glorify thee as is meet.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "From thee, O most pure one, hath the Star shone forth out of Jacob, Who as God hath numbered the multitude of the stars. Wherefore, by His effulgence remove thou the darkness of my sins.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "I know thee to be clearly the rational bridal-chamber of the incarnation of God, O pure and all-immaculate one; and I entreat thee to deliver me from carnal passions, tribulations, temptations and evil circumstances.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "In that thou art the ladder of the coming of the Almighty unto us, whereby God descended to the earth, raise me up to heaven from earthly carnal passions, and lead me to God.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Thou art a wellspring pouring forth consolation upon the sorrowful, O Lady; wherefore, pour forth upon me a torrent of the waters of thy supplications, and quench thou the furnace of my passions.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "O pure one who hast healed the grievous wounds of our nature by giving birth to the Creator and Lord, heal me who am wounded by unseemly thoughts.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "Tempest-tossed amid the deep of my many transgressions, passions and temptations, O all-immaculate one, by thine aid I hasten to the most tranquil haven.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 3"
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
                "text": "By the divine Rain which descended into thy womb as upon a fleece, and with thy supplications, bedew thou my heart, which is aflame with the fire of the passions.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 3, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "From the flowing ointment of thy Son, the Perfume of the life of all, O pure one, pour forth the myrrh of dispassion upon my soul, and remove from it the mire of its passions.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "With the hyssop of thy prayers sprinkle me who am defiled with the mire of sin, O Lady; wash me clean and cleanse me of the impurity of my passions, and show me to be a dwelling- place of Christ.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "I beseech thee, O most pure one, thou book inscribed and sealed by the finger of God: with the finger of thy supplications prescribe for me the remission of sins, and deliver me from perils.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "Thou wast the temple of God out of all the holy mountains, as the prophet said of old. Show me to be a pure temple of Christ, O Lady, by thine aid.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
              "text": "Thou, O Lord, who camest into the world, * art my light, * a holy Light turning from the darkness of ignorance * those who sing Thy praises in faith.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Knowing thee to be the dew of Hermon which descended upon Sion, O Birthgiver of God, I pray that thou quench the burning of my flesh.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "As the paradise of life, O Theotokos, do thou quickly deliver me from deadly sin and the many and varied passions.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O pure one, thou art the noetic phial of alabaster. Wherefore, with the perfume of the Myrrh Who was poured forth upon earth from heaven, do thou fill me now.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "Thou hast restored mankind who was inclined toward corruption, O Bride of God. Wherefore, lead me up now from the depths of transgressions and the passions.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
              "text": "The Church crieth out unto Thee O Lord, * ‘I will sacrifice unto Thee with a voice of praise * having been cleansed of the blood of the demons' * by the blood that for mercy's sake flowed from Thy side.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Having become the exceedingly beauteous palace of the King of glory, O glorious Lady, thou hast glorified mankind; wherefore, grant incorrupt glory to me.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "With pure incorruption thou hast allayed the vile corruption of nature, O most pure one; wherefore, dry up the torrents of my passions and the rivers of my carnal knowledge.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "Quell thou the passionate movements of my body and tame thou the uprisings of my flesh, making them subject to my mind as if they were a foal, O pure one, lulling them to sleep by thy prayers.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 3"
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
                "text": "I hymn thee who hast given birth to the supremely hymned God, O maiden, and I beseech thee: O Theotokos, deliver and save me from dreadful strife and everlasting condemnation.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 4"
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
              "text": "In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "In that thou art the fiery and God-bearing bush, O pure one, burn up the thorns of my wicked contemplations, illumine the thoughts of my soul, and dry up the abyss of my passions.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Thou alone hast manifestly acquired the majesty and divine glory of eternity on the earth, having been revealed to be another heaven; wherefore, set at naught mine enemies, the boastful demons.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O divine vessel of loving-kindness and goodness, pour forth upon me the riches of thy compassions in abundance, washing away the defilement of my transgressions, and quench thou the burning of my flesh.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "Having lived prodigally, I have ever wasted the spiritual wealth given me by God in carnal pleasures; yet by thy supplications do thou grant me justification, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
              "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Break thou the chains of my transgressions and quell thou the uprisings of my body, cut down mine evil thoughts and quickly cleanse thy servant of secret thoughts, O Theotokos, thou intercessor and help of all the faithful.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "O most pure one, who hast been shown to be the unquarried mountain of God, rich, densely wooded and overshadowed, shield me with the shelter of thy supplications, deliver me from the snares of the hunters, and preserve me from the darts of the demons and from vile thoughts.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "O Lady, grant that I may receive the fear of God and the spirit of compunction within me, and that I may bring forth a virtuous life; and render me frightful to the wicked demons and a partaker of the divine glory of the angelic choirs.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "Quickly open unto me the doors of life, the portals of my hope, O most pure one; guide me to life without end, and show me, thy servant, to be an heir to the kingdom of heaven and a partaker of the divine glory of the saints.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 4"
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
              "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "In thy prayers look down upon thy servant, O pure one; go thou quickly before me, and deliver me from the invisible foes who afflict and oppress me. Save me from misfortunes, sorrows and multifarious evil circumstances.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Virgin, heal me who am condemned and wounded by the stripes of sin, and deliver me from wicked thoughts, O thou who hast given birth to the omnipotent Word, the good One Who lovest mankind.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 2"
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
                "text": "For the sake of Adam who of old fell into sin, thy Son, O exceedingly good one, Who hath dominion over life and death, partook of death; wherefore, by thy supplications raise me up from the passions and the fall.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
                "text": "O Theotokos, from misfortunes and falls, from sin and tempest, from the passions of the body, from the billows and violent griefs of life, and from wicked malice save those who have recourse unto thee.",
                "tier": 1,
                "src": {
                  "file": "4-5.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "O intercessor unopposed, O Birthgiver of God, thou ready advocate for those who have recourse unto thee: deliver me from misfortunes, and disdain me not, O helper of all.",
          "tier": 1,
          "src": {
            "file": "4-5.pdf",
            "locus": "Wednesday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 3
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "thu": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "I shall open my mouth, * and be filled with the Spirit, * and utter discourse to the Queen and Mother; * and be seen radiantly keeping festival, * joyfully praising her wonders.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Thou alone art the help, refuge and preserver of thy servants, O pure Birthgiver of God. Wherefore, I fall down before thee and cry aloud: Save me, the accursed one, in that thou art merciful!",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "Vile deeds have wounded my conscience, holding up my guilt before my face. O Lady, hasten thou and help me! Before the end, deliver me and save me!",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O Lady who hast given birth to the most holy Word and art more holy than all the hosts on high, O thou who alone art all-hymned, sanctify my defiled heart.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "In thee have I placed my hope of salvation, and to thee who art compassionate have I fled with faith. Disdain me not, O hope of the hopeless, neither show me to be a joy to the demons.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
              "text": "O Theotokos, thou living and plentiful fount, * establish in spiritual fellowship those who sing hymns to thee, * and in thy divine glory * grant them crowns of glory.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "O pure one, grant the dew of thy tender compassion unto me who am melting under the burning heat of sin, cooling me with light, in that thou art good, and imparting divine joy.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "Dispel the darkness of my mind with the Light which was within thee, O Theotokos, I pray, that thou mayest render me steadfast through examples of repentance, in that thou art compassionate and greatly merciful; that, saved I may call thee blessed.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "With the sprinkling of thy mercy, O divinely joyous Virgin, extinguish the burning embers of my passions, and light the burning lamp of my heart, O all-immaculate golden lampstand.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 3"
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
                "text": "The billows of sin and the tempest of mine unseemly thoughts engulf me; yet take pity on me, O all-immaculate one, and stretch forth unto me thy helping hand, in that thou art merciful, that saved I may call thee blessed.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
              "text": "Perceiving the profound counsel of God, * that the incarnation of Thee the Most High, * will be from a Virgin, * the prophet Habbakuk cried aloud: * Glory to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O thou who art the most wondrous Mother of God, shine forth upon me beams of repentance and dispel the gloom of my wretched soul, driving away the wicked thoughts of my heart, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 1"
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
                "text": "With faith I pray thee, the purification of all, O blessed one, and I pray: Render the Judge, thy Son, merciful unto me, that I may glorify thee with praises.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "O only pure one, in that thou art a physician, heal thou my lowly heart which hath become leprous through exposure to unclean passions, and rescue me from the hands of the demons.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 3"
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
                "text": "Of old, bolding forth most manifestly, the blessed Habbakuk described thee with divinely inspired words as the pure and overshadowed mountain of Him Who came forth from Thaeman and assumed flesh through thee, O Lady.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
              "text": "All creation stands in awe of thy divine glory; * for thou, O Virgin who hast not known wedlock, * didst contain within thy womb the God of all, * and gave birth to the timeless Son, * bestowing peace, upon all who hymn thee.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Slain by passions and evil thoughts, O all-immaculate Lady, I flee to thy compassions and hasten to thy fervent protection and aid. O thou who alone hast given birth to Life, enliven my heart.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "With thine active healing cure me who have been bitten deep by the sword of sin, O pure one, for thou hast given birth to the Lord Who for my sake was pierced by a spear and thereby wounded the heart of the serpent.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "Treat thou my broken heart, O most immaculate one, heal the sufferings of my soul, and dispel the darkness of despondency, that in praises I may hymn thee, the ever-blessed one, O all-hymned Theotokos.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 3"
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
                "text": "Beholding the Grapes of the vine Whom she had produced, hanging upon the Tree, the Virgin cried aloud: “O my Child, thou pourest forth the sweet new-wine, doing away with the drunkenness of the foes who have crucified Thee in vain, for Thou art long-suffering in all things!”",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "Celebrating the divine and solemn feast * of the Mother of God * O ye divinely wise, * let us come, clapping our hands, * and glorify God who was born of her.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "O thou who alone art the help of all, help us who are in tribulation, grant us thy hand, and steer us to the haven of salvation, O thou who alone art full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 1"
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
                "text": "O most pure one, in the dread hour rescue me from the torture and delusion of the evil demons, from condemnation, fire, darkness and torment.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "I hymn thee, O all-hymned one, glorify thine honored and mighty works. Do thou free me from, impure passions and grant unto me everlasting glory.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 3"
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
                "text": "We must needs be sing of thee, yet are truly unable to do so as is meet; wherefore, we quietly hymn thee, O Virgin, honoring in silence the ineffable mystery wrought within thee.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
              "text": "Refusing to worship created things * in place of the Creator, * The divinely wise youths bravely trampled down the threatening fire * and rejoicing they sang aloud: * O supremely hymned Lord and God of our Fathers, Blessed art Thou.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "O pure one, who alone art full of the grace of God, pray thou to the Immutable One to Whom thou hast given birth, that with His right hand He change my mind towards the good, for it hath been grievously altered by the temptations of the demons.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "O Virgin Queen who hast given birth to Christ the King, have pity and save me who have been brought low by the passions. Establish me with faith and. guide me to the path of salvation, O salvation of the faithful.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 2"
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
                "text": "O most immaculate one, be thou mine advocate before Him Who was born from thee; grant me remission of my cruel debts and divine entry into the kingdom of God, that I may receive its food and partake of its light.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "O all-immaculate Mary, pure Virgin who knewest not wedlock, who art infinite in goodness, having given birth to God in the flesh: Beseech Him, that He deliver us from all grief and sin.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
              "text": "The Offspring of the Theotokos * saved the holy children in the furnace. * He who was then prefigured hath now been born on earth, * and He gathereth all creation to hymn thee: * all ye works praise ye the Lord * and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Having prodigally squandered my life and committed every vile deed, I tremble before the judgment, before the trial, before the sentence which will be pronounced. Have mercy upon mine accursed soul, O pure one, and, before I die, grant me illumination.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "On thee have I set all my hope of salvation, O Mother of God who tasted not of wedlock, and ever call upon thee for help: Save me from grief, from the assaults of the enemy; loose thou the bonds of mine evils, and rescue me from everlasting darkness.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Thou hast been revealed to be more exalted than the angels, having ineffably given flesh unto God. Him do thou therefore beseech, O all-immaculate Lady, that I may transcend carnal temptations and be delivered from the coming judgment and everlasting torment, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 3"
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
                "text": "Fill me with divine waters, O Virgin who didst bear the Wellspring in thy womb. Deliver me from the burning heat of my sins, guide me to the life of salvation, and dispel despondency from my wretched soul, O pure Virgin, and deliver me from the demons.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 4"
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
              "text": "Let every mortal born on earth, * radiant with light, in spirit leap for joy; * and let the host of the angelic powers * celebrate and honor the holy feast of the Mother of God, * and let them cry aloud: * Rejoice! O all- blessed Theotokos, * thou pure Ever-virgin.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "With the power of thy prayer, O all-immaculate, divinely joyous and most pure Lady, mow down the meadow of my sins, granting me saving healing - the most pure fear of the Master.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
                "text": "Thou art mine enlightenment, thou art my deliverance and joy, thou art mine ally, thou art my glory, my boast, hope and my salvation, and I cry unto thee: Save me, thy wretched servant, and rescue me from the gates of Hades.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Save me, O pure one who hast given birth to the most compassionate Savior, and take pity on thy servant; guide me to the path of repentance, dispel from within me the temptations of the evil one, deliver me from his pursuit, and rescue me from everlasting fire, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 3"
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
                "text": "The Word, Who from the beginning was incorporeal, abased Himself, clothing Himself in flesh from thee and dwelt incarnate in the world, O most immaculate one; and with divine power He hath cast down him who from of old hath tormented all.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "Upon beholding Thee suspended upon the Cross, * O Word of God, * Thy most pure Mother exclaimed, lamenting maternally: * “What is this new and strange wonder, O my Son? * How is it that Thou, the Life of all, hast tasted death, * desiring to bring life to mortals, ** in so far as Thou art compassionate?”",
          "tier": 2,
          "src": {
            "file": "4-6.pdf",
            "locus": "Thursday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., and Troparia. The rest as usual. Dismissal."
    },
    "fri": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "O Thou who wast born of the Virgin, * drown I implore Thee, in the depth of dispassion * the triune nature of my soul, * as Thou didst the mighty strongholds of the warriors, * that in the mortality of my flesh * as on a timbrel * I may chant a hymn of victory.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "From the mire of the passions, from the threefold billows of wicked thoughts, from the darts of the evil one, and from, every assault of the adversary, deliver my wretched soul, O most pure Birthgiver of God, and rescue me from everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "Lead me up from the abyss of transgressions, O pure one, and guide me to the light of the divine commandments of Christ God our Savior; shine forth upon me the saving radiance of repentance, and grant me eternal life.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Having fallen into the evil mire of my wicked deeds, I am choked greatly on mine evils, and I find no firm place whereon to stand, O Virgin Lady and Mother, lead me up by thy power, and deliver me from fire and torment.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 3"
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
                "text": "Thou hast destroyed death and corruption, O all-hymned Theotokos, having given birth to Christ, the Wellspring of incorruption, Who hath adorned human nature with immortality and grace, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 4"
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
              "text": "Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having been made manifest, O pure Virgin, take the darkness away from, my soul, break asunder the bonds of sin, and save me by thine assistance, I pray.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "My heart, which hath been whirled about by the assaults of the passions, do thou make steadfast in the most pure fear of God, O most immaculate Virgin, by thy loving-kindness.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Despairing of any hope, O most immaculate one, I have fled to thee as my mighty preservation and shelter. Wherefore, take not away from me thy divine protection.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "Arrayed like a queen in robes inwrought with gold, O Lady, thou standest now at the right hand of God, praying for thy servants.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
              "text": "He who sitteth in glory upon the throne of the Godhead, * Jesus the true God, * is come in a swift cloud * and with His sinless hands he hath saved those who cry: * Glory to Thy power, O Christ.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O divinely blessed maiden, free me who am held fast by despondency, am wholly darkened by the gloom of the passions, and am enslaved to sin; and join me to thy Son and our God.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "In that thou hast given birth to Life, O most immaculate one, give life to me who have been slain by the malice of the deceiver; for to thee have I fled. Lead me up who have been engulfed by abysmal falls, in that thou art merciful, O all- immaculate one.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 2"
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
                "text": "I lie in the tomb of mine unseemly pleasures, and am held fast by despondency and slothfulness. Yet, O good one who hast given birth to the Resurrection of all, enliven and save me!",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "Of old, O Virgin, the prophet called thee the sacred mountain of God, wholly overshadowed by the virtues, from whence the saving Word appeared, unto the edification and enlightenment of our souls.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
              "text": "The wicked will not behold Thy glory, O Christ, * but we who rise early to hymn Thee shall behold Thee, * the Only-Begotten effulgence of Thy Father's divinity, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "May my lowly soul rejoice to fear thy Son, O Lady, and to carry out His com- mandments with, a willing heart. O all-immaculate and most pure one, guide me by thy supplications.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 1"
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
                "text": "O good Lady, grant that my passion-plagued soul may confess the Redeemer with all my heart, dispelling the ignorance of my heart, O all-immaculate one.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 2"
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
                "text": "Keep thou my soul as the apple of thine eye under the shelter of thy wings, O good and most pure one, and deliver it from the oppression and tyranny of the evil spirits.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "O most pure one, thou hast appeared, delivering from the assaults of the passions and the evil demons thy servant who hath acquired thee as a mighty ally and unashamed intercessor.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 4"
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
              "text": "Prefiguring Thy three-day burial * prophet Jonah praying in the belly of the sea-monster cried aloud: * Deliver me from corruption * O Jesus Thou King of hosts.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Cast down those who ever wage war upon me, O Lady, and dispel the clouds of mine evil thoughts, O Mother of God who art the portal of the Sun of righteousness.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 1"
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
                "text": "Shine upon me the radiance of repentance, O Lady, and break through the clouds of mine evil thoughts, for I have been attracted and corrupted by grievous corruption.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "Still thou the raging billows of my passions and quell the storm of mine evil thoughts, O most immaculate one, thou steadfast intercessor and protection of all.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "The transgressions of my soul have multiplied more than the sand of the sea, and like a heavy burden they crush me; yet, taking pity, O Virgin, save me before the end.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 4"
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
              "text": "Of old the Children of Abraham in Babylon * trampled down the flame of the furnace, * crying aloud with hymns: * O God of our Fathers, blessed art Thou.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "O pure Theotokos, I call upon thee with faith: Keep safe my lowly heart, and deliver me from the flame of torment and everlasting darkness.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "With, the spear of thy Son, O pure Virgin, rend asunder the record of my transgressions, and deliver me, I pray, from all restraint at the hour of mine end.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "With the streams of my tears and the down-pouring of thy compassions, O pure Virgin, quench thou the furnace which the multitude of mine evils have prepared for me through the activity of the demons.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "From the temptations which assail us and from every torment. O thou who alone art the Ever-virgin Mother of the Word, do thou deliver us who truly hymn thee with understanding throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
              "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Heal thou my ailing soul, O Theotokos, Virgin Bride of God; illumine my darkened mind, and rescue me from fire and the indescribable and everlasting torments.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "Bent beneath the weight of irrational passions, I have fallen into the abyss of destruction and have made myself fuel for the flame; yet do thou deliver me, thy servant, from thence, O Virgin Theotokos.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "Dry up the depths of mine evils, O thou who hast given birth to the Abyss of loving-kindness, the Redeemer and Lord, and before the end loose thou the bonds of mine evils, O thou who hast given birth to the Savior of all.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 3"
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
                "text": "The Lord Who became incarnate through thy womb, He Who hath dominion over all creation, showed thee, O Virgin, to be the Sovereign Lady who reigns over all creatures, visible and invisible, glorifying thee as His immaculate Mother.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
              "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Friday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "My heart, which is barren of divine virtues, O most pure Virgin Theotokos, do thou show forth as fruitful, in that thou wast born from a barren woman at the command of, and by the will of, Him Who transformeth all things: that I may hymn thee, the all-hymned one.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "With thy light illumine me, O most immaculate one, for thou hast given birth to the unapproachable Light; burn away the clouds of my passions, rescue me from the darkness devoid of light, and grant unto me divine light, that I may hymn thee, O Virgin Mother.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 2"
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
                "text": "With the sprinkling of thy compassions, O pure one, cleanse my putrid heart, and grant that I may ever shed my tears in streams, and cutting off the torrents of the passions, may I be delivered from torment.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
                "text": "O right loving Theotokos who hast given birth to the right loving God, do thou now quickly free me from wicked carnal love, that I, who am perishing through slothfulness, may serve the will of God, O Lady.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "We, the faithful, bless thee as the Theotokos, our helper and fervent aid amid misfortunes, our reconciliation with God, by whom we have been delivered from corruption.",
          "tier": 1,
          "src": {
            "file": "4-7.pdf",
            "locus": "Friday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "sat": {
      "frame_rubric": "The priest saith: Blessed is our God..., and we respond: Amen. Glory to Thee, our God, glory to Thee. O heavenly King..., Trisagion through Our Father. Lord, have mercy (12 times). Glory..., Both now ..., O come, let us worship ..., (Thrice). Psalm 50 (Have mercy on me, O God...); Psalm 69 (O God, be attentive unto helping me...); and Psalm 142 (O Lord, hear my prayer...). Then, Glory to God in the highest..., and the Symbol of Faith (I believe in one God...).",
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos, in Tone IV",
        "heading_rubric": "Canon of supplication to the most holy Theotokos, in Tone IV",
        "odes": {
          "1": {
            "irmos": {
              "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "O thou who alone art the defender amid perils and tribulations of those who fervently flee beneath thy protection O most pure one, accept our heartfelt supplications, in that thou art exceedingly good.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Ignorant though I am, I have found thee to be a tranquil haven repelling dangers and violent assaults, O thou who hast given birth to the God-man, and I chant hymns of thanksgiving unto thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Regarding me, who am stuck fast amid evil circumstances and sorrows, with thy meek and merciful eye, O Birthgiver of God, quickly free me from them, for I call upon thee for help.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 3"
                },
                "label": "glory"
              },
              {
                "text": "In that thou alone art a good and merciful intercessor for thy servants, O Lady, extend the hand of entreaty and deliver me from cruel misfortunes for I am grievously bowed down by violent tribulations.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "The bow of the mighty hath waxed feeble * and the weak have girded themselves with strength: * therefore is my heart established * in the Lord.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having acquired thee as a mighty weapon and a rampart, O Theotokos who knewest not wedlock, I vanquish the hordes of the adversary and hymn thy mighty works.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Thou destroyest the furnace of griefs and dost extinguish the burning heat of despair, O Virgin Theotokos. Who then is a hope for us like unto thee?",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Attend unto the voice of thy servant who am in need of thy help, O Mother of God. O my hope, hearken unto me and rescue me from perils!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Oppression hath come upon us because of the multitude of our transgressions, bearing pernicious death; but save thy servants, O Theotokos, for thou art able so to do.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Thou hast vanquished those who make war upon me in vain, for they strove cruelly to make my soul captive. Preserve me, O Lady, have mercy upon me and save me, for I, thy servant, flee unto thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Delivering me from the tongue which speaketh falsehood, O my good ally, show me forth as unpunished for the deeds of my life, for, in that thou art the Mother of the Creator, thou art able to accomplish much.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Afflicted as I am, I know thee to be a painless physician, and I cry to thee: O Lady, heal me, have mercy on me, and save me, for I, am thy servant, and flee unto thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Leave me not to be given over to tortures, O Mother of our God, but preserve me unharmed by any affliction and the malice of men; for thou art the helper of us all.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Thou, O Lord, who camest into the world, * art my light, * a holy Light turning from the darkness of ignorance * those who sing Thy praises in faith.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Set forth the supplication of thy servant before the Lord thy Son, O pure one, that I may obtain, remission of my many transgressions.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Deliver me from sufferings and misfortunes, O Bride of God, for God hath appointed thee to be true cleansing for my lowliness.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Thou art my protection and sure boast, O Lady Theotokos, for thou dost in nowise spurn those who have recourse unto thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Have mercy upon those who worship thine Offspring, O pure one, and deliver them from the torment and bitterness of men; for thou art able so to do.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "The Church crieth out unto Thee O Lord, * ‘I will sacrifice unto Thee with a voice of praise * having been cleansed of the blood of the demons' * by the blood that for mercy's sake flowed from Thy side.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure Lady, thou thyself art my strength amid the exceedingly hopeless sorrows which beset me; and I cry unto thee, for thou art a mighty protectress for thy servant.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Heal thou my spiritual wounds, O most pure Virgin, help me, and deliver thy servant from slander, attack and undeserved ruination.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Crush thou those who unjustly assail me, for I ever flee unto thee, and leave me not to their destruction, for all things are possible for thee, O pure one, in that thou art the Theotokos.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Quell thou the savage billows of my soul, O Lady, for a multitude of transgressions, temptations and sorrows have risen up against me; but do thou thyself save me.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Thou didst save the children of Abraham in the fire * and slay the Chaldeans, * who unjustly entrapped the righteous ones. * O supremely hymned Lord, God of our fathers, * blessed art Thou.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Quickly routing the assault of the Moslems with the sword of thy prayers, O Mary, preserve thy people and flock who cry out to thy Son: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 1"
                },
                "label": "plain"
              },
              {
                "text": "O thou who art equal in majesty to the tabernacle, receive me who flee to thee, that the enemy not seize me, desiring to destroy me who cry aloud: O supremely exalted God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O Mary, Birthgiver of God, go thou quickly before me, thy servant, who am drowning, helpless, amid the threefold billows of perils, and who cry to thee: O thou hope of the ends of the earth, have mercy upon me!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 3"
                },
                "label": "glory"
              },
              {
                "text": "By thy divine supplications, O good Theotokos, do thou dispel my human thoughts, in that they are the cause of sins, and deliver thy servant from painful dangers and all harm.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "An iniquitous nation hath assailed us, boasting that it will destroy thy servants; but, destroying it, O most pure one, protect those who cry out: Bless and hymn the Lord, all ye works.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Thy many and varied compassions mercifully save us from sinful judgment and divers perils O only Mother of God, for, having given birth unto God, thou takest pity on His world.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Since thou art our might and help, I am undaunted by the wrath of the enemy, but I hymn thee, O Lady, and cry out to thy Son: Bless the Lord, all ye works of the Lord!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Take pity now on my turmoil and grant me joy instead of grief, that I may hymn thee, O Lady, and cry out to thy Son: Bless the Lord, all ye works of the Lord!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
              "tier": 2,
              "src": {
                "file": "4-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Having sharpened their swords, the iniquitous and false Moslems take counsel against us; but by the power of the Cross and thy supplications, O Virgin Theotokos, arm thy servants against them; that we may proclaim thy glory.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Might hath been given thee against the enemy and deliverance from misfortunes for me, O Lady, and I know not what I shall offer thee; yet accept thou the thanksgiving which I bring to thee: Receive it now, and save me!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O most radiant Mother of the Creator of all, thou consolation of the grieving, intercessor for the drowning and helper of those who are in utter affliction: Keep me safe throughout my life!",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Disdain me not who am beset by many sins and misfortunes, O all-hymned one, for I now offer thee the sacrifice of praise, earnestly crying out to thee: O holy Lady, help me, for I conclude my hymnody, glorifying thee.",
                "tier": 1,
                "src": {
                  "file": "4-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 4"
                },
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone IV:",
        "sessional": {
          "text": "Darkened in mind by many transgressions, prodigal that I am, I cry out for thy mighty aid, O Theotokos: Illumine the eyes of my soul, shine upon me the radiant light of repentance, and thus array me in an armor of light, O pure Birthgiver of God.",
          "tier": 1,
          "src": {
            "file": "4-1.pdf",
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
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns of repentance, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Lord, visit Thou my lowly soul, which hath squandered all its whole life in sins; accept me as Thou didst the harlot, and save me.",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
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
              "text": "Navigating the deep of this present life, I consider the abyss of my many evils; and lacking a helmsman for my thoughts, I utter unto Thee the cry of Peter: Save me, O Christ! Save me, O God, in that Thou lovest mankind!",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 2"
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
                "file": "4-2.pdf",
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
            "text": "Thou art the invincible rampart of us Christians, * O Virgin Theotokos; * for, fleeing to thee, we remain unharmed. * And though we sin again, we have thee as our advocate. * Wherefore, in thanksgiving we cry aloud to thee: * Rejoice, O thou who art full of grace! ** The Lord is with thee!",
            "tier": 2,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "We shall soon enter together into the bridal-chamber of Christ, that we may all hear the divine voice of Christ our God. Come, ye who love the glory of heaven, and having lit our lamps with faith, with the wise virgins let us receive it.",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Condemned by the multitude of my transgressions, I am troubled by fear of torment, O Christ God; from the depths of my heart I offer tears of repentance unto Thee, Who hast authority over life and death; and in compunction I cry to Thee: I have sinned! Save me, O Lord!",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
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
              "text": "Today the armies of heaven have come for the memorial of the passion-bearers, to enlighten the minds of the faithful and to illumine the whole world with grace. Entreated by them, O God, grant us great mercy.",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
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
                "file": "4-2.pdf",
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
                "file": "4-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Having received the Word in thy womb at the angel’s salutation, and given birth to the incarnate God, Christ Emmanuel, O Theotokos, pray thou on behalf of our souls.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Matins, sessional set 2 closer"
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
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": "Go Thou quickly before",
          "items": [
            {
              "text": "O supremely blessed Trinity, the choirs of the incorporeal ones unceasingly hymn Thee with their immaterial mouths, and standing before Thee with fear, they cry out: Holy is the Essence in three Hypostases! By their supplications have mercy on the creation of Thy hands, O Thou Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
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
              "text": "The ranks of angels stand with fear before Thy throne, O Master, and ever enlightened by the rays thereof, unceasingly chant unto Thee the hymn of victory, O Lord. By their sacred prayers grant peace unto the world and the remission of our transgressions.",
              "tier": 1,
              "src": {
                "file": "4-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 2"
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
            "text": "O all-immaculate Virgin * who hast given birth to the transcendent God: * do thou unceasingly entreat Him with the incorporeal ones, * that He grant forgiveness of transgressions * and correction of life before the end, * to us who, as is meet, hymn thee with faith and love, ** O thou who alone art all-hymned.",
            "tier": 2,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance, to our Lord Jesus Christ and His holy martyrs, the acrostic whereof is “O Savior, save me as Thou didst the harlot of old,” in Tone IV",
          "heading_rubric": "Canon of repentance, to our Lord Jesus Christ and His holy martyrs, the acrostic whereof is “O Savior, save me as Thou didst the harlot of old,” in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "O Thou who wast born of the Virgin, * drown I implore Thee, in the depth of dispassion * the triune nature of my soul, * as Thou didst the mighty strongholds of the warriors, * that in the mortality of my flesh * as on a timbrel * I may chant a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Jesus my Savior, Who saved the prodigal, accepted the weeping of the harlot, and by Thy goodness justified the publican who sighed: Accept me also, who turn to Thee though I have committed innumerable sins, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The fire of evil devoureth my soul like tinder, and kindleth the flame which is to come. O Long-suffering One and Lover of mankind, extinguish it with the dew of Thy mercies, granting us tears of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Full of great understanding, the choir of the holy passion- bearers, chastely rejecting the foolish counsel and adverse thinking of all the violators of the law, received divine honors.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O wise and all-famed passion-bearers, who in your faith disdained the beautiful things of this world, ye have inherited heavenly life. Wherefore, from all the turmoil of the world deliver me, who truly bless you.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 4"
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
                  "text": "O most pure one, most radiant luminary of the Sun of glory: Enkindle the flame of my soul, which hath been extinguished by despondency, and ever feed it with the oil of divine works, that I may glorify thee with faith and love.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 5"
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
                "text": "From on high didst Thou willingly descend to earth, * O Thou Who art more exalted than every noetic principality, * and from the uttermost depths of Hades * thou didst raise up lowly human nature; * for there is none more holy than Thee, O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ God, Who art the never-waning Light, the darkness of the passions hath surrounded me with the night of life, but in that Thou lovest mankind, save me, enlightening me with rays of repentance, that I may glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Show me to be an inheritor of the portion of the elect, O Christ my Savior, cutting me off from the portions of the adversary, and showing me to be cleansed by tears and almsgiving, that in praise I may ever glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Truly dyed red by your blood, your feet ran right swiftly to the heavens, leaving behind the world of sin, O martyrs, ye co-conversers with the divine powers.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 3"
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
                  "text": "Subjected to wounding, your bodies were exhausted, O spiritual athletes of Christ, but the power of your souls was strengthened, being tightly bound by love to Him Who by His will hath created all things.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "O Sovereign Lady Mary, who for all hast given birth to the Lord: Enlighten and free me, who am beset by the passions of my mind and am darkened by evil.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "He who sitteth in glory upon the throne of the Godhead, * Jesus the true God, * is come in a swift cloud * and with His sinless hands he hath saved those who cry: * Glory to Thy power, O Christ.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "I now fall down before thee as Judge, O Lord. Have pity on me, who am condemned and in despair; deliver me from Thy just sentence, and grant that I may stand with Thine elect.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "O Lover of mankind, heal me, O Christ, for I have fallen among savage thieves and been wounded. Pour forth the wine and oil of repentance upon me, and clothe me in the vesture of my salvation.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "When your bodies were flayed, O all-praised martyrs, ye were clothed from on high with, the robe of salvation; stripping bare him who of old stripped our first father naked, rendering him dead and lifeless.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Waxing eloquent before the iniquitous, adorned by piety with the understanding of the Word of God, O martyrs, ye put to shame all the ungodly sages and rhetors, slaying the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 4"
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
                  "text": "Like rain, Jesus the Abyss of wisdom, descended upon thee, O Virgin Birthgiver of God, finding thee alone to be pure; thereby restraining the grievous torrents of ungodliness with divine grace.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "Now I shall arise said God prophetically, * now I shall be glorified, now I shall be exalted, * elevating fallen human nature, * which I received from the Virgin, * to the noetic light of My divinity.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O how I shall stand before Thee, the Judge and God of all, condemned and accused of all the evils wherein I have mindlessly and willingly sinned, making myself wholly unprofitable!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Save me, O Lord, for I have been filled with many evils; and I pray: Heal my sins and grievous sores, and leave me not to perish alone, for I have sinned greatly against Thee, O my Jesus.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 2"
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
                  "text": "Manifestly finding a blessed end, the spiritual athletes have received glory, glorifying Christ the Appointer of the contest, with their bodily members, having manfully resolved to suffer wounds and stripes.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O blessed spiritual athletes of Christ, by your godly and beautiful way of life ye have inherited the riches of heaven, imperishable crowns, never-waning light, and a habitation unmade by men’s hands, which waxeth not old.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 4"
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
                  "text": "The voices of the prophets foretold thy wonders, O most pure one, calling thee the mountain, the door, and the radiant lamp, from whence the wondrous Light truly illumineth the world, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 5"
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
                "text": "I have reached the depths of the sea * and the tempest of my many sins hath engulfed me; * but do Thou raise up my life from the abyss * O Greatly-merciful One.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "As one mortal, I have neither understanding nor sense, wretch that I am, possessed of a conscience ever defiled. O God my Creator, let me not utterly perish!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "My deeds, like enemies, will accuse me at Thy judgment-seat, O Compassionate One; but deliver me quickly from them, O Christ, guiding me to repentance.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 2"
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
                  "text": "The assembly of the violators of the law broke the bones of the passion-bearers, yet were unable to break their faith, for which they have been shown to be heirs of God, the Savior of our souls.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Like precious stones, the passion-bearers were set upon the unshakable rock of hope with divine wisdom; and as temples of the Holy Spirit they have made their abode in the temple of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "My heart, which hath been darkened by the dark visitations of sin, do thou illumine with the light which is within thee, O Bride of God, who hast given birth unto Christ the Sun.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "The three youths in Babylon, * regarded the tyrant's command as foolishness, * and cried aloud in the midst of the flame: * Blessed art Thou, O Lord God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "To whom shall I liken thee, O my wretched soul? Woe is me, for I love unseemly things and fail to seek that which is good! Wherefore, hasten thou before the end, and exhibit good conduct.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Grant me a shower of tears, that I may be cleansed of mine evils; and leave me not to perish now, who have sinned against Thee more than all others, O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Bearing in your own bodies the mortality of the Word Who was slain, ye put deception to death; and having died, O glorious spiritual athletes, ye heal those brought to death by the passions,",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "What place doth not now have you as enlighteners and a bulwark, O martyrs? What land is not sanctified by your sufferings and the dawning of your healings, O glorious ones?",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 4"
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
                  "text": "Thou alone remainest a virgin even after giving birth, O Lady, who art resplendent in virginal beauty; thou alone didst escape the pain of motherhood: for thou alone hast given birth to God, the Redeemer of our souls.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Having submitted to the passions, I have been revealed to be like irrational dogs O Word of God Who art without beginning, turn me back to Thee and save me, who cry aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "The boar hath ravaged and laid waste to me like a solitary vineyard cultivated by the Spirit, O Savior. Deliver me from him. O Word, and straightway show me to be fruitful for Thee in the virtues.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 2"
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
                  "text": "Your bloody skins dyed a divinely woven robe for you, O martyrs, and, thereby adorned and wearing crowns of victory, ye stand in the highest before the eternal King.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "The sacred harmony of the martyrs set at naught the unholy discord which would have them commit that which is unlawful; and having suffered lawfully, they have been lawfully crowned by the Master of all.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "All creation blesseth thy birthgiving, which hath crowned us with blessings and removed the curse, O only all-blessed and most glorious one, who hath filled our race with grace.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "This is the time for repentance! Why then are we slothful? Why are we sunk in sleep? Let us put away despondency and feed our lamps with the oil of good deeds, as it is written, lest we find ourselves standing outside the doors, lamenting.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "While there is yet time to repent, O my soul, turn away from the evils which thou hast committed in knowledge and in ignorance, and cry out unto Him Who knoweth all things: I have sinned against Thee! Forgive me, O Master, and disdain me not, who am unworthy!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 2"
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
                  "text": "In places of glory, in resting-places of honor Christ hath with exceeding clarity assembled the saints who suffered, from every land and city; and they now shine forth in gladness upon the Church of the firstborn.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Illumined by the rays of the divine Spirit, the all-precious shrines of Thy holy martyrs most gloriously emit the radiance of healings, dispelling the pangs of infirmities, O only greatly merciful Lord.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Enlighten my soul with rays from the light that is within thee, O Bride of God, and raise it up, for it lieth in the pit of destruction, defeating the enemies who ever assail my heart, and impel it toward the passions.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 5"
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
          "acrostic": "O Savior, save me as Thou didst the harlot of old"
        },
        {
          "title": "Another canon, of the holy incorporeal angels, in Tone IV",
          "heading_rubric": "Another canon, of the holy incorporeal angels, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O angels, who as pure intelligences stand before the great and primal Mind, fed by divine radiance: Illumine me with your rays, hymning the Word Who is the cause of all, O most glorious ones.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 1"
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
                  "text": "Bowing down before God with love, and manifestly limned by the beauties of God, O glorious archangels, ye have taken your place around Him in orderly ranks, crying out to the Creator a hymn of victory.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "O all-immaculate one, who alone received in thy womb the Word, Whom the angelic armies ever glorify: Illumine my soul, releasing it from dark evil thoughts of sin, and enlightening it with the understanding of thine Offspring.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 3"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ Who art hymned by the heavenly choirs: In Thy divine wisdom move the assemblies of the faithful to hymn the ranks thereof for there is none more holy than Thee, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 1"
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
                  "text": "Sharing in the fervent bonds of love, ye stand as ministers before the primal Source, unceasingly hymning the one Essence of the beginningless Godhead, O divine archangels,",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "O pure Mother who hast given birth unto Christ, thou didst most splendidly annul the ancient curse of Eve by the blessings of Him Who crowneth all; for there is none as exceedingly holy as thee, our helper.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "With unapproachable power Thou didst bring forth the heavenly intelligences from non-existence, O transcendent Word of God; and with Thine ineffable glory adorned them, who cry aloud: Glory to Thy power, O Christ!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 1"
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
                  "text": "Guided by the Spirit and His reins, and illumined by divine rays, the heavenly hosts formed themselves into unbroken ranks, worshipping the one Godhead, the Cause of all.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Thy ministering radiances were deemed worthy to gaze upon the comely beauty of Thy countenance; and, having thereby received understanding, they cry out to Thee: Glory to Thy power, O Christ!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The Virgin Queen now standeth, arrayed in golden vesture, before the King her Son, incomparably more exalted than the angels, who cry out: Glory to Thy power, O Christ!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "With trembling the cherubim and seraphim, the thrones and the divine archangels, the dominions, powers and principalities, the authorities and the angels, glorify the one adored Godhead of the Trinity.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "The angels were shown to be shining radiantly with light, O Christ, proclaiming Thy resurrection to the venerable women in the world, and freeing the mind of Thine enemies with the rays of Thy divinity.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "O Thou Who wast ineffably born from the Virgin, delivering mankind from corruption, by the regiments of the angels preserve now Thy Church, which glorifieth Thee with Orthodox voices.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Standing round about the Master, and in purity delighting in the effulgence of the Source of radiance, O ye angelic armies, enlighten those who hymn you with faith.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "O Thou Who in Thy wisdom didst create the angelic choirs, as Master Thou didst show forth the dominions, powers and seraphim., who honor Thee with praises.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Master Christ, Who dost rest upon the most exalted thrones, preserving all things by Thy divine providence, Thou didst rest in the arms of the Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With the noetic angels as witnesses to what we have done, O my soul, let us choose their pure life, for they cry out: Blessed art Thou, O Lord God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 1"
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
                  "text": "Purified by a burning coal, the divine Isaiah beheld the seraphim standing before Thy throne, and he cried aloud: Blessed art Thou, O Lord God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "As thou hast given birth to the Creator and Lord, O Virgin, thou hast been revealed to be more exalted than the ranks of all the incorporeal beings. Blessed is the Fruit of thy womb, O pure one!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 3"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "As the only immortal Life and Creator, Thou didst fashion the angels to share in immortal life, teaching them to chant: Bless ye and hymn the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Noetically standing round about Thee, the archangels chant with never-ceasing voices, divinely honoring Thee as the Master of all: Bless ye and hymn the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O all-blessed one, the images of the law prefigured thee who hast given birth unto God Who is united to fleshly matter, but before was immaterial in His divine essence. O Virgin, we bless thy birthgiving!",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 3"
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
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The ineffable hidden mystery of God hath been revealed in thee, * O most pure Virgin; * for in His tender compassion * God become incarnate of thee. * Wherefore, we magnify thee as the Theotokos.",
                "tier": 2,
                "src": {
                  "file": "4-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Hymning the Mind, the Father and Origin of the Son and the Spirit, and having received gifts of divine grace, O angels, be ye assiduously quick to send them down upon us.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
                  "text": "Beautifully adorned with the gift of incorruption and with grace, hymning Thee, the eternal Source of incorruption, O Christ, the divine archangels magnify Thee as their Benefactor.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Mother of God, we, the faithful, know thee to be the bridal- chamber and dwelling-place of the ineffable Incarnation, and the ark of the law; wherefore, we unceasingly magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-2.pdf",
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
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone IV:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone IV:",
        "items": [
          {
            "text": "Wash me with my tears, O Savior, for I am defiled by many sins. Wherefore I fall down before Thee crying: ‘I have sinned, have mercy upon me, O God’.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Matins, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "I am a sheep of Thy rational flock, and to Thee do I flee for refuge, O Good Shepherd. I have gone astray, do Thou O God, have mercy on me.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Matins, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "Who is not filled with, awe, beholding the good contest wherein ye struggled, O holy martyrs? How have ye, who are fleshly beings, vanquished the incorporeal foe, confessing Christ and having armed yourselves with His Cross? Wherefore, as is meet, ye have been shown to be expellers of the demons and opponents of the barbarians, unceasingly praying that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Matins, aposticha item 3"
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
        "text": "O Theotokos, Queen of all, * thou praise of the Orthodox: * cast down the proud arrogance of the heretics, * and put to shame the countenances of those * who neither bow down before nor honor thy precious image, ** O most pure one.",
        "tier": 2,
        "src": {
          "file": "4-2.pdf",
          "locus": "Monday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "tue": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of repentance, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Lord, visit Thou my humbled soul, which hath squandered the whole of its life in sins; accept me as Thou didst the harlot, and save me.",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Navigating the deep of this present life, I consider the abyss of my many evils; and lacking a helmsman for my thoughts, I utter unto Thee the cry of Peter: Save me, O Christ! Save me, O God, in that Thou lovest mankind!",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
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
              "text": "O Lord, rebuke me not in Thine anger, nor chasten me in Thy wrath.",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
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
            "text": "In that thou art truly the Theotokos, who prayest with boldness to thy Son and our God as His Mother, preserve this city, which hath earnest recourse to thy protection, in thee doth find its might, and to thee doth flee for refuge, our haven and bulwark, the only intercessor for the race of mankind.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "The mind of my wretched soul, darkened by the gloom of the passions and the pleasures of life, giveth no thought to compunction; but have pity on me, the accursed, O Savior, and grant me compunctionate thought, that even I may cry out to Thy loving-kindness before the end, O Lord: Save me, who am unworthy, O Christ my Savior!",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 1"
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
              "text": "We shall soon enter together into the bridal-chamber of Christ, that we may all hear the divine voice of Christ our God. Come, ye who love the glory of heaven, and having lit our lamps with faith, with the wise virgins let us receive it.",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Armed with the Cross, O Christ our God, Thy passion-bearers overcame the wiles of the enemy, the author of evil, and shone forth, guiding mortal men like beacons; and they impart healings unto those who ask with faith. Through their supplications save Thou our souls.",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 3"
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
                "file": "4-3.pdf",
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
                "file": "4-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "The Word of the Father, Christ our God, * Who was incarnate of thee, * we have come to know, O Virgin Theotokos, * who alone art pure, who alone art blessed. ** Wherefore, we unceasingly hymn and magnify thee.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "Repent, O my soul, before thy departure, for the judgment upon sinners is inexorable; and though thou art fickle, cry out to the Lord in compunction of heart: I have sinned in knowledge and in ignorance, O Compassionate One. Through the supplications of him who baptized Thee have pity and save me!",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 1"
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
              "text": "The sacred Baptist, the desert-loving dove, who preached repentance and pointed to Christ Who had become a man, hath become an intercessor for all sinners, a faithful helper for all who are tempest-tossed. By his supplications, O Christ, save Thy world.",
              "tier": 1,
              "src": {
                "file": "4-3.pdf",
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
            "text": "By thy divine birthgiving, O pure one, * thou hast renewed the mortal nature of those born on earth, * which had become corrupt through the passions, * raising up all from death to a life of incorruption. * Wherefore, as is meet we all bless thee, ** O most glorious Virgin, as thou didst foretell.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance, to our Lord Jesus Christ, and His holy martyrs, the acrostic whereof is “Wash me with purifying tears, O Word,” the composition of Joseph, in Tone IV",
          "heading_rubric": "Canon of repentance, to our Lord Jesus Christ, and His holy martyrs, the acrostic whereof is “Wash me with purifying tears, O Word,” the composition of Joseph, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "O Thou Who smote Egypt and drowned the tyrant Pharaoh in the sea, * Thou didst save from slavery * the people who like Moses chanted a hymn of victory, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Do not openly denounce me who commit acts of darkness in secret, neither put me to shame before all mankind; but shine forth upon me the light of sincere repentance, O Savior, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Prodigal as I am, I ever heap sins upon sins and never sense the fear of Thee, O Master; wherefore, save me before mine end, and have pity on me, O Lord.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Protected by the shield of piety, O glorious saints, and wielding the implement of the Cross as it were a sword, ye went forth to do battle with the enemy, and cast him down.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "The godly martyrs were undaunted by the bloodthirsty wild beasts, the severing sword, the boiling of cauldrons, the uprooting of their nails, maiming, and the pain of tortures.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O most pure one, thou wast shown to be the ark gilded by the divine Spirit, holding not the tablets of the law, but Christ the Lord, Whom the law and the prophets proclaimed of old.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 5"
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
                "text": "Having established the thunder * and fashioned the wind: * do Thou make me steadfast O Lord, * that I may hymn Thee in truth and do Thy will; * for there is none holy like unto Thee, O our God.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ Who enlightened the eyes of blind men, enlighten mine eyes, which have grown dim through pleasures and the griefs of life, and which never look to thy judgments.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Lo! the time is come! Awake from the evils thou hast committed, O my soul, and cry out with fear to the Master and Redeemer: Open unto me the doors of repentance, O Christ!",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 2"
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
                  "text": "Belial, who boasted of old, is shown to be driven away by the divine struggles of the passion-bearers, and is seen to be dead and lifeless, trampled underfoot by them.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Finishing the course of martyrdom, by divine power the company of the saints truly hewed down myriads of noetic moors, and have received glory.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Thou didst assuage the grief of our first parents by giving birth for us to Joy, the Bestower of life and the Redeemer, O most holy Theotokos. Him do thou earnestly entreat, that He save our souls.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 5"
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
                "text": "I have heard report of Thee, O Lord and I am afraid. * Having understood Thy works, * I am in awe of Thee O Lord, * for the earth is full of Thy praise.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Stripped bare of the virtues, I have clothed myself in evil, and, lo! I am filled with shame. O Jesus Who lovest mankind, make me bright with divine vesture.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Navigating the waters of the sea of life, O Word, through slothfulness I have fallen into the misfortune of the shipwreck of bodily pleasures; but guide me to the harbor of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having truly cleansed away all the rot of the tolerance of sin, the valiant martyrs have given salvation unto all.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Rolled about the earth like stones, the steadfast passion- bearers utterly cast down deception and reached the city on high. By their supplications, O Lord, save us.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "At every time and in every place I call upon thee, my salvation: Disdain me not, O all-immaculate one, who hast given birth to God, my Redeemer and Savior!",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                "text": "Shine upon me, O Lord, * the light of Thy commandments, * for my soul riseth early to Thee and hymneth Thee: * For Thou art our God, * and unto Thee do I flee, O King of peace.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Jesus, have pity on me, who in despondency have led a corrupt life, and all the days of my life am darkened by the deceptions of the deceiver.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "My heart hath been made lofty by the assaults of the serpent, and I have fallen greatly. O Jesus, Who dost correct the negligent, raise me up and save me, for the sake of Thy many compassions.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With the drops of your blood ye have extinguished the furnace of the delusion of polytheism, O divinely blessed ones, and with showers of healings ye ever quench the flame of the passions, O spiritual athletes of the Savior.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 3"
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
                  "text": "Standing before the tribunal, your nails ripped out, your heads cut off, and undergoing a multitude of cruel tortures, O martyrs, at the behest of God ye remained unshaken.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O Lady, shine a ray of thy mercy upon me who am in the darkness of my transgressions, and guide me to the light of repentance, that I my hymn thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                "text": "I have been brought down into Hades * by the abyss of life with my deeds; * but like Jonah who cried out from within the whale, * so do I also cry aloud to Thee: * Lead me up from the depths of evils, I pray Thee,* O Son and Word of God!",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 6 irmos"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ]
              },
              "items": [
                {
                  "text": "I have weighed down my soul with the slumber of negligence, wretch that I am, and am brought low by the sleep of sin. Rouse me to the light of repentance, O Lord, and save me by Thy tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "How I have fallen, wretch that I am? How I have withdrawn far from the supremely good God? How I have paid no heed in my senses to the dread tribunal at which I must needs be judged? O my Creator, have pity on me!",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Ye were truly revealed to be like a harp ever playing the song of salvation, delighting the hearts of the faithful, and utterly driving away the drunkenness of deception, O most radiant spiritual athletes.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Passing beyond the limits of man to the Creator, by divine exaltation, O martyrs of Christ, rejoicing, ye endured the tortures of martyrdom as though your bodies were not your own.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O all-holy Virgin, intercessor and protection of all the faithful, stand forth and deliver me from the impending threat and the dread trial at the hour of judgment, that I may ever hymn thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                "text": "The children of Abraham, refusing to worship the golden image, * were tried like gold in a crucible; * and they joined chorus in the fiery furnace, * as in a splendid bridal-chamber, chanting: * Blessed art Thou, O God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 7 irmos"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ]
              },
              "items": [
                {
                  "text": "Desiring to deliver the world from the age-old condemnation, O Christ, Thou didst reveal Thyself as a young babe, in that Thou art full of tender compassion; wherefore, I cry out to Thee: Renew me now, who have grown old in many sins, O Compassionate One, and save me who chant: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O Savior, Who once saved Manasseh who repented, and had pity on the harlot who wept, and didst justify the thief by Thy word, accept me also, who have committed many and grievous sins against Thee, but cry aloud: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "When the cruel storm of polytheism smote the whole world, O passion-bearers, ye made yourselves ships of piety and reached the harbor of life by the piloting of Christ; and ye cry aloud: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 3"
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
                  "text": "Manifestly enlightened from on high, and tried by tortures like gold in a crucible, the spiritual athletes were shown to be precious seals of the sufferings of Christ, and have now been deposited in the treasuries of heaven, in great security.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having given birth in the flesh to the Savior and God, the Redeemer and Master, O most pure Lady, pray thou ever unto Him, O most pure one, that, having received release from evils and the remission of our many sins, we may glorify His compassions which pass understanding.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                "text": "In the flames of the divine fire * The cherubim and seraphim stand before Thee, O Lord, * and all creation doth chant beauteous hymns to Thee: * O ye people hymn, bless and supremely exalt Christ, the one Creator, * throughout all ages!",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 8 irmos"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 2
                  }
                ]
              },
              "items": [
                {
                  "text": "I have not remained in the fear of Thee; I have not heeded Thy commandments; and I have never done Thy will. What shall become of me, wretch that I am? As the Lover of mankind, O Savior, freely have pity on me, and turn not away from me.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O Creator of good things, I cry unto Thee: With the scythe of the fear of Thee cut off at the root all the thorny thoughts of my wretched soul, and grant, O Christ, that with the seed of repentance I may produce the grain of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 2"
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
                  "text": "Beset by many torments, the passion-bearers achieved the broad spaces by grace; and they confined the enemy to paths filled with crevices, and guide us now to the paths of God in faith and love.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Suffering misfortune, the mindless deceiver fell into the depths of your patience and suffering, O martyrs, and lieth there, mocked by all; but ye have been adorned with crowns of victory.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 4"
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
                  "text": "Thy womb was shown to be a harvest-stack , bearing into the world the Grain of life which feedeth all; wherefore, we, the faithful, fittingly bless thee as the cause of all good things.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The God of Israel hath shown strength with His arm, * for He hath put down the mighty from their thrones, * and exalted them of low degree * The daystar from on high Who hath visited us, * and firmly established us on the path of peace.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Behold! the mystical bridal-chamber hath been opened, and the wise, having replenished their lamps with the oil of the virtues, radiantly enter it in. Shake off the sleep of despondency, O my soul, that, bearing thine own lamp, thou mayest enter in with Christ.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Like the harlot I noetically clasp Thy feet and bathe them in my tears, O Word. Wash away the mire of the passions, O Savior, saying to me now: “Thy faith hath saved thee!”, that I may hymn Thine incalculable tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "With gladdened heart and joyful soul the martyrs dwell in the highest, ever having the wounds of Christ as an adornment of majesty; and they let fall upon us the dew of peace, deliverance from evils, and the remission of sins.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Every place that hath your relics is sanctified, O godly spiritual athletes, like another ark such as that which delivered Israel from evils. And the heavens rejoice with the honored angels, O blessed ones, having acquired your souls.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 4"
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
                  "text": "O right loving maiden, who hast given birth to the right-loving God, I cry out to thee: Bless thou my wretched soul, which hath been grievously oppressed by the passions and the assaults of evil demons, that with faith I may hymn thee, the hope of all.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
          "acrostic": "Wash me with purifying tears, O Word",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy forerunner, the acrostic whereof is “With love do I fashion a prayerful hymn to thee, O blessed ones,” the composition of Joseph, in Tone IV",
          "heading_rubric": "Another canon, of the holy forerunner, the acrostic whereof is “With love do I fashion a prayerful hymn to thee, O blessed ones,” the composition of Joseph, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "O Thou who wast born of the Virgin, * drown I implore Thee, in the depth of dispassion * the triune nature of my soul, * as Thou didst the mighty strongholds of the warriors, * that in the mortality of my flesh * as on a timbrel * I may chant a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Preceding the Sun like a great star, thou didst enlighten the earth with thy radiance, O Baptist; wherefore, I cry unto thee: Enlighten my heart, which hath been blinded by the cruel darkness of my countless transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O blessed one, in thy nativity thou didst once release thy mother from barrenness; wherefore, I beseech thee: By thy supplications show my soul, which is became empty through unfruitfulness, to be fruitful, bringing forth the virtues as goodly children.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Thou didst prepare the ways of the Redeemer, achieving the power of Elijah, O ever-glorious Baptist. By thy supplications direct the movement of my soul unto Him, removing every stumbling-block and the flame of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O radiant cloud, by thy splendid mediations drive the dark and cruel clouds from my soul, that I may see the light of Him Who shone forth from thee, and may receive unwaning light through the light.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 4"
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
                "text": "The bow of the mighty hath waxed feeble * and the weak have girded themselves with strength: * Therefore my heart is established * in the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst fulfill every virtue and didst hate all evil with thy heart, O blessed one; and thou dost direct all to the paths of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Thou wast shown to be the great Forerunner of the incarnate Word; wherefore, I pray to thee: Deliver me from the irrational passions, guiding me to dispassion.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "While yet alive on earth, in thy body thou didst show forth the life of the incorporeal ones, O Forerunner. Through thy supplications, O God-bearer, give us also the strength to emulate this, we pray.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 3"
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
                  "text": "The world, which before had become useless through disobedience, hath found mercy through thee; wherefore, in chanted hymns it blesseth thee, as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 4"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "For the sake of love for Thine image, * O compassionate One, * Thou didst ascend the cross * and the nations melted away. * For Thou, O Lover of mankind, * art my strength and my praise.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Understanding thee to be the turtledove who with thy words most true heralded the springtime of Truth, we ever bless thee, O glorious Forerunner.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "As thou art the mediator between the Old and New Covenants, O Forerunner, by thy supplications renew all of me, who am broken by the assaults of the deceiver.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "By thy divine prayers, O Forerunner, who led a blameless life in the wilderness, renew my mind, which hath been laid waste by all manner of wicked deeds.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thy Son, O Virgin, hath become known as our cleansing and deliverance. Him do thou entreat, that He save the souls of those who bless thee in compunction.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 4, item 4"
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
                "text": "Do Thou O Lord send down upon us * Thine enlightenment, and free us * from the gloom of transgression, O good One, * granting us Thy peace.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O offspring of the wilderness, with the dew of thy supplications preserve me, who am consumed by the assaults of the passions as with the burning coals of the desert, uninjured and unharmed by them.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "By thy holy right hand O all-blessed one, the divine Right Hand of the Father was baptized. He Who doth save us from the hand of the deceiver by thy mediations.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "The whole world hath thee as refuge, mighty protection and a great bulwark, O Forerunner. By thy prayers deliver us from all oppression.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "God loved thee, the beauty of Jacob, O Virgin maiden, through thee adorning all who before had enshrouded themselves in gloom through disobedience.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 4"
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
                "text": "I have reached the depths of the sea * and the tempest of my many sins hath engulfed me; * but do Thou raise up my life from the abyss * O Greatly-merciful One.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst stand in the stream's currents, baptizing the Master Who taketh away the sins of all mankind. Him do thou never cease to entreat, O Forerunner, that He have pity on our souls.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O Forerunner, thou wast shown to be a preacher of repentance, wherein do thou keep my heart, which hath been defiled by harmful sins, and lacks recovery.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O blessed one, in the trackless wilderness thou didst proclaim to souls the coming of the Word Who was to arrive; wherefore, the whole Church blesseth thee with unceasing voices.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "The images of the law were made clear by thine awesome birthgiving, O Bride of God; and, seeing their fulfillment now, O Lady, we fittingly honor thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 4"
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
                "text": "Of old the Children of Abraham in Babylon * trampled down the flame of the furnace, * crying aloud with hymns: * O God of our Fathers, blessed art Thou.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O prophet, who wast shown to be greater than all who were born, by thy supplication most great deliver from great flame and everlasting darkness me who have sinned greatly against God, that I may call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I have shown myself to be a barren fig-tree, and fear lest I be hewn down. Make me steadfast by thy mediation, O Forerunner of Christ, and render me fruitful, that I may call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "By thy vigil and prayers to the Redeemer of all, O Forerunner John, still every storm stirred up by the enemy against me, for with faith I have recourse unto thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O Virgin, from the assaults and lot of the evil one and from, slavery to the demons preserve thou thy servants, who with soul and tongue ever glorify thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "By thy radiant supplication, O Forerunner, guide me aright, who am beset by the sleep of despondency and darkened by the gloom of evil; and grant that I may walk nobly in the daylight of the virtues.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "The storm of temptations besets me, and the waves of the passions engulf me. Grant me thy hand, O Forerunner, by thy supplications bringing the ship of my soul up to the harbor of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O blessed Forerunner John, who in the river’s waters baptized Him Who taketh away the sins of the world: With the streams of thy prayers dry up the abyss of mine evils.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Seeing the Holy Spirit, thou didst hear the voice of the Father bearing witness to Jesus, Who was ineffably baptized by thee, O Forerunner. Him do thou entreat, that He save us.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As the Source of our restoration, wholly renew me who have been undone by the sting of the serpent, that I may bless thee with faith and love, O all-immaculate Virgin Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 5"
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
                    "file": "4-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 6"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
                "tier": 2,
                "src": {
                  "file": "4-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Christ the Lord is my strength and my song. Him do thou entreat, O blessed Forerunner, that He strengthen me against the passions and against every assault of the demons; and grant that I may do His divine will, that I may ever bless thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Thou hast been shown to be a beauteous turtledove and a melodious swallow, O divine Forerunner, heralding the divine springtime of Christ. Him do thou beseech, that He deliver me from the soul-corrupting winter and the tempest of sin, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Leaping up in thy mother’s womb, thou didst announce Him Who shone forth from the Virgin. Him do thou beseech, that He mortify the movements of my flesh, which deaden me, that He fill my heart with joy, and I may hymn thee, O divine Forerunner.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "Behold and pay heed, O my soul! The sentence is inescapable for those who do not act with mercy. Take then the oil which replenishes thy lamp, and keep it un-extinguished, for the Bridegroom draweth nigh. Be vigilant, that thou mayest have an unquenchable will.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
                  "text": "O right loving Theotokos, who hast given birth to the right loving God: Entreat Him to deliver me from all evil, and to make my heart zealous for Him, hating the sweet pleasures of the flesh, that I may magnify thee in hymns.",
                  "tier": 1,
                  "src": {
                    "file": "4-3.pdf",
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
          "acrostic": "With love do I fashion a prayerful hymn to thee, O blessed ones",
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone IV:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone IV:",
        "items": [
          {
            "text": "Wash me with my tears, O Savior, * for I am defiled by many sins. * Wherefore I fall down before Thee: * I have sinned, have mercy upon me, ** O God.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Matins, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "I am a sheep of Thy rational flock, * and to Thee do I flee for refuge, * O Good Shepherd. I have gone astray, ** do Thou O God, have mercy upon me.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Matins, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "Ye have become fellow partakers with the angels, * O holy martyrs * who manfully preached Christ at the tribunal; * for ye forsook all the beautiful things of this world * as though they though non-existent, * and clung to the Faith as your steadfast hope. * Wherefore, having driven away delusion, * pouring forth gifts of healing upon the faithful, ** unceasingly praying that our souls be saved.",
            "tier": 2,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Matins, aposticha item 3"
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
        "text": "Preserve thou thy servants from all misfortunes, * O blessed Theotokos, * that we all may glorify thee, ** the hope of our souls.",
        "tier": 2,
        "src": {
          "file": "4-3.pdf",
          "locus": "Tuesday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "wed": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "When Thou wast nailed to the Cross, and Thy side was pierced by a spear, Thou didst redeem us from the curse of the law by Thy precious blood and didst pour forth immortality upon mankind. O our Savior, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Savior, the Hebrews nailed Thee to the Cross, from whence Thou didst call us from among the nations, O Christ, our God and Savior. Of Thine own will Thou didst stretch out Thy hands upon it, O Thou Lover of mankind, and in the multitude of Thy compassions didst deign to be pierced in Thy side by a spear.",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 2"
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
          "verses": [
            {
              "text": "Exalt ye the Lord our God, * and worship the footstool of His feet; for He is holy.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Wednesday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "When Thine unwedded Mother beheld Thee * hanging upon the Cross, * she lamented bitterly and cried out to Thee: * ‘What is this strange and new wonder, O my Son? * How is it that the lawless people have nailed to the Cross, * Thee, the Life of all, ** O my sweetest Light,?’",
            "tier": 2,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Matins, sessional set 1 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "Go Thou quickly before us, O Christ our God, before we are enslaved to the enemies who blaspheme Thee and separate us. By Thy Cross destroy those who wage war against us, that they may understand what the Orthodox Faith may accomplish through the supplications of the Theotokos, O Thou only Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
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
              "text": "Nailed to the Cross on Golgotha of Thine own will, O Master, in Thy great goodness Thou didst heal me of the ancient wound of sin; for of Thine own will Thou wast placed there for the race of mankind, O our Savior Thou Lover of mankind, and Thou didst pour forth blood and water from Thy side upon those who hymn Thee with faith.",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 2"
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
              "text": "Advancing well by the power of the Cross, O holy passion- bearers, by your endurance ye mightily cast down the adverse foe; wherefore, celebrating your honored memorials with faith, by your supplications we are sanctified through the activity and grace of the all-holy Spirit. O warriors of Christ, pray to the Savior on behalf of the world.",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
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
              "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "4-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "The Virgin and ewe-lamb, beholding on the Cross the Lamb Who was born of her without seed, His side pierced by a spear, was wounded and with grief and cried aloud, exclaiming amid her pain: “What is this new mystery? How is it that Thou diest Who alone art Lord of life? Wherefore, arise, raising up our fallen forefather!”",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Matins, sessional set 2 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone III:",
          "spec_mel": null,
          "items": [
            {
              "text": "On Golgotha Thou didst raise up again me who in paradise fell grievously through the bitter counsel of the slayer of mankind, for by the Tree Thou didst heal the curse that came from the tree, slaying the serpent who through deceit brought death upon me; and hast thereby given me divine life. Glory be to Thy divine crucifixion, O Lord!",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
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
              "text": "When the sun perceived that is was Thee, O Sun of righteousness, suspended on the Cross, O Christ, it dimmed its light. Creation shook, and the dead quickly arose from the grave as from sleep, O Word, hymning the divine might of Thy glory.",
              "tier": 1,
              "src": {
                "file": "4-4.pdf",
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
            "text": "O most immaculate Virgin, * Mother of Christ God, * a sword pierced thy most holy soul * when thou didst behold thy Son and God * crucified of His own will. * Him do thou never cease to entreat, O blessed one, ** that He grant us the forgiveness of our transgressions.",
            "tier": 2,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Matins, sessional set 3 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the precious and life-creating Cross, the acrostic whereof is “The",
          "heading_rubric": "Canon of the precious and life-creating Cross, the acrostic whereof is “The",
          "odes": {
            "1": {
              "irmos": {
                "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Cross is a weapon unto salvation,” the composition of Joseph, in Tone IV:",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Jesus Who stretched out the heavens, in that Thou art good and full of loving-kindness, Thou didst stretch out Thine own hands, radiantly calling to Thee the nations who were far removed from Thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Protect me by Thy Cross, O Word my Christ, that I may not fall prey to the wolf, who seeks my destruction and every day lays snares and traps for me.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By your pangs, O martyrs, ye cast down him who hath brought pain upon all. Ye have now inherited the life which is devoid of pain, O blessed ones, ever easing every pain of our souls and bodies.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Bound for Christ, Who was willingly bound, and hath destroyed all delusion, O wise and holy ones, ye bound the greatly crafty one with unbreakable bonds; wherefore, ye are called blessed, as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 5"
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
                  "text": "Thou didst remain a virgin even after birthgiving, O most pure one, for thou hast given birth unto God Who wast lifted up upon the Cross, lifting up mortals with Himself; wherefore, all of us, the faithful, acclaim thee to be blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 6"
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
                "text": "Thy Church, O Christ, rejoiceth in Thee crying aloud: * Thou, O Lord, art my strength, * my refuge and foundation.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Lifted up upon the Cross, O Christ our God, Thou didst lift up those who had been cast down into corruption, casting down the enemy, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "The swords of the enemy were blunted when Thou wast pierced in the side, O hypostatic Word of the Father, and Eden was opened.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "With rivers of fire the martyrs countered the rivers of delusion, and they quenched the flame of polytheism.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Crucified, your nails ripped out, O martyrs of Christ, ye slew the enemy and the serpent with the sword of your patience.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Beholding Thee lifted up upon the Cross, O Master, the unblemished Ewe-lamb hymned Thy might, lamenting tearfully.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 5"
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
                "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Seeing Thee, the Sun of glory, willingly lifted up upon the Tree, the sun clothed itself in darkness; the stones split asunder, and the veil of the temple was rent in twain.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "When Thou wast crucified and pierced by a spear, O Lord and Savior, at Thy command the sword which barred the way into Eden was withdrawn for the noble thief, who hymneth Thy might.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Protected by the sword of Thy Cross, O Lord, Thy passion- bearers showed themselves to be unwounded by the arrow of evil, and demolished the unstable ramparts of the madness of idolatry.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "To the Lord, Who in His loving-kindness impoverished Himself, ye brought yourselves as unblemished sacred sacrifices and whole-burnt offerings, O martyrs, receiving rewards for your pangs.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 4"
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
                  "text": "When she who gave birth within time to the Timeless One, and who alone acquired immaculate virginity, beheld the Lord lifted up upon the Tree, her soul was rent with pain.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou, O Lord, who camest into the world, * art my light, * a holy Light turning from the darkness of ignorance * those who sing Thy praises in faith.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "From Thy pierced side, O Master, Thou pourest forth divine streams of incorruption upon me who have stumbled into corruption through the disobedience of Eve and the rib of Adam.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Thy precious Cross is victory over the enemy, for Thou hast given it to us for the salvation our souls who hymn Thee with faith, O Word.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Having passed through the material fire of great tortures, as most radiant martyrs the dead have now been united with the fiery ministers.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "When their flesh was maimed amid many sufferings, the spiritual love of the martyrs was firmly established.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "He Who alone is good, and Who entered into thine incorrupt womb, O most pure one, appeared incarnate and was crucified, that He might deliver us from corruption.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                "text": "The Church crieth out unto Thee O Lord, * ‘I will sacrifice unto Thee with a voice of praise * having been cleansed of the blood of the demons' * by the blood that for mercy's sake flowed from Thy side.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Though higher than all honor, Thou didst endure dishonor, that Thou mightest honor me who have wickedly dishonored myself, O Lover of mankind; and Thou savest me by Thy Cross.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast lifted up upon the Cross and died, O Lord, making the slayer of my soul dead and full of all shame. And now, O my Creator, I hymn Thy power.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 2"
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
                  "text": "The most evil one, who wounded you, was wounded by your incurable torments and was cast down beneath your feet, martyrs; and is seen to be mocked by all.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The dust of the martyrs’ relics, which lieth in the grave, poureth forth healings and scattereth the demons like dust; healing the divers sicknesses of mortals.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "“The council of the violators of the law affixed Thee to the Cross with nails; and I now rend my heart with the sword of grief, O my Son!” cried out the Virgin, weeping.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                "text": "In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O only Eternal and Immortal One, Who dost array the skies with clouds, and Who didst will to be crucified naked upon the Tree: Thou hast clothed in shame him who of old stripped our forefather naked.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Thou wast lifted up upon the Cross raising up fallen Adam; Thou wast pierced in the side with a spear, O Master, and the greatly crafty one was dealt a mortal blow. Blessed is Thy might, O Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 2"
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
                  "text": "Though most beautifully united to the most comely Word, O all-praised spiritual athletes, ye have not separated yourselves from the world; and though ye were bound and broken, ye ever trample the enemy underfoot.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "By your divine sufferings, O glorious spiritual athletes, ye truly cast down the walls of the citadel of deception; and ye have been revealed to be bulwarks and fortresses for the faithful, who piously bless you.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 4"
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
                  "text": "O maiden seeing Christ God, Who put forth dew in the furnace and in nowise consumed thy Womb, hanging upon the Tree, thou didst glorify His condescension, which was beyond thy comprehension.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst extend Thy hands upon the Cross, O Master, desiring to cure the transgression of unrestrained hands, and wast transfixed with nails, O Lord, removing all the passion-fraught understanding of the first-formed man, who singeth: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 1"
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
                  "text": "By the piercing of Thy divine side the record of first-formed Adam was torn asunder, O Master; and by the drops of Thy blood is the whole earth sanctified, which ever uttereth cries of thanksgiving: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "The all-glorious martyrs stood in the midst of the fire as ones bedewed and unconsumed, truly chanting in mystic harmony the divine hymn of the youths: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Enduring the flickering fire by the power of your will, O martyrs, ye were not moved to vanity by your myriad torments; but, strengthened by God, ye hastened to the never-waning light, crying: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Seeing Christ, Who slew the enemy who brought death upon mankind, being put to death, the all-hymned Lady weeping hymned Him as Master; and marveling at His long-suffering, cried aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "A cornerstone not cut by hand O Virgin, * was cut from thee the unhewn mountain: * even Christ, Who hath joined together the disparate natures; * therefore rejoicing we magnify thee, * O Theotokos.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Behold, the Life of all appeared, hanging upon the Cross; and the sun, unable to endure the sight, withdrew its rays, the earth quaked, and the thoughts of the faithful are made steadfast in piety and purity.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "How can it be that the iniquitous assembly hath condemned to die upon the Tree Thee, the Giver of the law, Who art the Life and Lord of all, and Who through Thy sufferings poured forth immortality upon all mankind?",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "In the midst of lawless enemies ye wisely preached the incarnation of the Word of God with your divinely eloquent mouths, O all-praised ones; and having suffered in a sacred manner, ye have been crowned with wreaths of victory.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Like radiant daystars ye illumine all creation with the brilliance of sacred sufferings and the divine splendors of healings, O godly martyrs, dispelling the deep night of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "O pure one, enlighten my soul, which hath been darkened by sins, and drive away the clouds of mine evils, O cloud of the Light, who of old once beheld the sun dimmed when the Immortal One was crucified.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 5"
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
          }
        },
        {
          "title": "Another canon, of the most holy Theotokos, the acrostic whereof is “I",
          "heading_rubric": "Another canon, of the most holy Theotokos, the acrostic whereof is “I",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "In that thou art she who is more pure than all creation, O most pure Birthgiver of God, by thy pure prayer purify my heart, which hath been grievously defiled by the impure passions.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 1"
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
                  "text": "By thy God-pleasing prayers to our Creator and God, O most pure Virgin Mother, deliver me from the tears and sighs that lie before me at the dread judgment which is to come.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "As thou alone, in a manner transcending understanding, hast by thy birthgiving freed the race of mankind from the curse, O most pure one, by thy supplications free me who am enslaved by carnal passions.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 3"
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
                "text": "Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "I beseech thee, who art more exalted than the cherubim, O Lady: My mind, which hath been brought low by the temptations of the serpent, do thou show forth as higher than the passions of the body.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 1"
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
                  "text": "At the dread trial, at which the Lord will sentence me who have sinned greatly, O all-immaculate one, let me find thee delivering me from condemnation.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "By Thy mercy, O Christ, transform my pitiless ways by Thy compassions; and by the supplications of her who gave birth to Thee, do Thou save me the unmerciful one.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O most pure one, who art the divine habitation of the Holy One Who hath poured forth His benefactions upon His creatures: Sanctify my soul and illumine my thoughts.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "By thy prayers, O Lady, make steadfast my mind, which is hurled about by the wind of evil and is wholly engulfed by slothfulness; and rescue me from my fall.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "I now entreat thee, the animate palace of the heavenly King: By thy supplications show me, who remain a den of thieves, to be a dwelling-place of the Holy Trinity.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 3"
                  },
                  "label": "plain"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "The wicked will not behold Thy glory, O Christ, * but we who rise early to hymn Thee shall behold Thee, * the Only-Begotten effulgence of Thy Father's divinity, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Lady, thou Ewe-lamb who hast given birth to the Lamb of God: Seek out my soul, which hath been led astray by the counsel of the serpent and through disobedience hath become lost in the mountains.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "By thy fervent supplication, O Ever-virgin Theotokos, toward the fervor of the Creator of divine love do thou piously impel my soul, which is frozen with cruel cold.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "O pure one, who art good and immaculate, by thy supplications free my wretched soul now from the stain of the passions, and make me to live in purity.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Under the shelter of thy wings keep my soul like the apple of thine eye, O good and most pure one, and deliver me from the wickedness, vengefulness and torment of the evil spirits.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O Virgin, thine Offspring is the Destroyer of death and the Life and Deliverance of those who die; wherefore, I beseech thee: Raise up my soul, which hath been slain.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Lover of mankind, by the intercessions of Thy Mother and of the countless hosts on high extend a helping hand unto me, who am tempest-tossed upon the deep of life.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "O field who gavest rise to the divine Grain, disdain not my soul, which hath been weakened and withered amid, a famine of godly acts, but water it with the divine grace of thy Son.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Lull to sleep the movements of my bodily passions, and make the uprisings of my flesh subject to my mind, as if they were like a mule, O pure one, calming them with thy prayers as with sleep.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O maiden, thou divine mountain, from whence the Stone was quarried Who crushed the pillars of the idols: Do away with the graven images of my soul and the stony doubt of my heart.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "As the one who received in thy womb Him Whose gaze brought about the earth and causeth all that is in it to tremble when He so desireth, thou wast not shaken, O maiden; wherefore, make me who am shaken by the assaults of the enemy steadfast.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "Casting down my carnal-mindedness, O Theotokos, show me to be wholly spiritual, adorned with the virtues, though the most evil one hath cast darkness over me by the ugliness of pleasures.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                },
                {
                  "text": "O divine bowl of tender compassion and goodness, pour forth upon me in abundance the wealth of thy compassions, washing away the defilement of my transgressions; and quench thou the burning of my flesh.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou hast given birth to the ripe Fruit, O Mistress, and eating of it death hath perished; wherefore, I cry unto thee: Grant life unto me who by deception have been slain by the fruit of sin, yet who cries aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "With thy vigilant prayers, lull to sleep the passion-fraught movements of my mind, O most pure Lady, and rouse me from the sleep of slothfulness, that in vigilance of soul I may chant: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "O Theotokos, break asunder the bonds of my transgressions and still the uprisings of my body; hew down my wicked devisings, and quickly cleanse thy servant of secret thoughts, O intercessor and deliverance of all the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 3"
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
                  "text": "Art thou not afraid, O my soul, that thy countless evil deeds will be accusers indicting thee? Wherefore; repent before the supremely good One, and take the only most pure one to be thine ally, for she is a refuge for all mankind.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Sever the bonds of mine evils with the divine spear of thy Son; and loose thou my wretched soul, which is fettered and in distress, O Virgin Mother of our God, and bind it to the love of Him.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Virgin who art more spacious than the heavens, lead thou my heart up to the broad expanse of dispassion, for it is hemmed in by all the assaults of the adversary, and ever grant me the strength to walk the narrow path.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
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
                  "text": "That I may glorify thee who art truly most glorious, O Virgin, deliver me from all the irrationality of sin, and cause me, who flee unto thy mercy, to share in the glory of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Confound all the counsels of those who have arrayed themselves against us, O Mother of God Most High, and fill with joy those who set their hope on thee, that we may all fervently proclaim thy help.",
                  "tier": 1,
                  "src": {
                    "file": "4-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 4"
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
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone IV:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone IV:",
        "items": [
          {
            "text": "Let Thy Cross be for us a bulwark, O Jesus our Savior; for we, the faithful, have no other hope save Thee Who wast nailed to it in the flesh, granting us great mercy.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thou hast given a sign unto those who fear Thee, O Lord: Thy precious Cross, whereby Thou didst put to shame the princes and rulers of darkness, and restoring us to our primal blessed state. Wherefore, we glorify Thy loving dispensation, O almighty Jesus, Savior of our souls.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
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
            "text": "How can we fail to marvel at your struggles, O holy martyrs? For, clad in mortal bodies, ye vanquished the incorporeal enemies. The threats of tyrants did not frighten you, neither did the infliction of tortures daunt you. Ye have truly been glorified by Christ, as is meet. Ask ye great mercy for our souls.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
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
        "text": "Seeing Christ slain, Who hath put the deceiver to death, the most pure Lady cried aloud, exclaiming bitterly unto Him Who issued forth from her womb; and marveling at His long-suffering, she said: “O my most beloved Child, forget not Thy handmaiden! O Lover of mankind, delay not my consolation!”",
        "tier": 1,
        "src": {
          "file": "4-4.pdf",
          "locus": "Wednesday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "stavrotheotokion",
        "spec_mel": "As one valiant among the martyrs",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia. Litany: Have mercy on us ..., First Hour, and Dismissal. ON WEDNESDAY MORNING: TONE IV AT LITURGY On the Beatitudes, these Troparia, in Tone IV:"
    },
    "thu": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns of the holy apostles, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "O first enthroned apostles and universal teachers, entreat the Master of all, that He grant peace to the whole world and great mercy to our souls.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Christ, Thou hast shown Thy disciples to be beacons unto the ends of the earth, shining forth the knowledge of Thee upon souls in darkness; and having for their sake cast the deception of idolatry into darkness, O Master, Thou hast enlightened the world with teachings of piety. By their intercessions save Thou our souls.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 2"
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
              "text": "Their sound hath gone forth into all the earth, * and their words unto the end of the world.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Hearken speedily to our supplications, O Lady, and bear them to thy Son and God. Remedy the adverse circumstances of those who have recourse unto thee, O most pure Sovereign Lady, and confound the ambushes and fury of those who now array themselves against thy servants, O Virgin.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": "Go Thou quickly before",
          "items": [
            {
              "text": "Your tidings raced round about the whole earth and rendered foolish the false wisdom of the unwise, O glorious apostles; drawing mankind from the depths of delusion, and showing the path of salvation unto all; wherefore, we now call you blessed, as is meet.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Savior, Thou hast shown Thy disciples to the world as preachers of the Faith, through them guiding the world to the knowledge of Thee; for with rays of the word they shed light upon all, dispelling the darkness of ignorance with faith. By their supplications save Thou our souls.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "In their sufferings, Thy martyrs O Lord, received imperishable crowns from Thee, our God; for, possessed of Thy might, they set at naught the tyrants and crushed the feeble audacity of the demons. By their supplications save Thou our souls.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 3"
              },
              "label": "martyrs"
            }
          ],
          "verses": [
            {
              "text": "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.",
              "tier": 2,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, the God of Israel.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O Lady, hearken to thy servant, for I cry out from the depths of my pain- wracked soul, and grant me the remission of my many evils, for thee do I have as an intercessor day and night. O Theotokos, deliver me from the fire of Gehenna, and set me at the right hand of thy Son and God.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Matins, sessional set 2 closer"
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
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": "Go Thou quickly before",
          "items": [
            {
              "text": "The Sun of righteousness emitted you like rays to enlighten the whole earth, O glorious apostles. By your divine prayers ye illumine all with the never-waning light of God, enlightening those who celebrate your holy memory with faith.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
                "locus": "Thursday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Go thou quickly on before, O Nicholas, and save thy servants from the misfortunes and tribulations which assail us, for thou hast boldness before God the Creator; wherefore, come now speedily unto those who call upon thee with faith, granting us thine intercession and protection.",
              "tier": 1,
              "src": {
                "file": "4-5.pdf",
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
            "text": "O thou who art more exalted than all created beings, I am in doubt as to how to worthily hymn thee O Theotokos, have mercy upon us for we freely entreat thee.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy, glorious and all-praised apostles, the composition of",
          "heading_rubric": "Canon of the holy, glorious and all-praised apostles, the composition of",
          "odes": {
            "1": {
              "irmos": {
                "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "As divine instruments of the Comforter, ever heralding Him with divine inspirations, the right glorious apostles of Christ have played for us a truly salvific song.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O glorious eye-witnesses of Christ, grant enlightenment unto me who languish on the bed of slothfulness and am grievously wasting away in the death of sin through sickness of spirit.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O apostles who by your discourse loosed the irrationality of the nations, by the grace of the Comforter enlighten my heart, which hath, been grievously darkened by irrational acts, O apostles.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 1, item 3"
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
                  "text": "Thou didst remain an incorrupt virgin even after birthgiving, O thou who in a manner transcending understanding hast given birth to Him Who for our sake appeared on earth. Him do thou earnestly entreat, that He enlighten our souls.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "Thy Church, O Christ, rejoiceth in Thee crying aloud: * Thou, O Lord, art my strength, * my refuge and foundation.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "The currents of Thy disciples, Thy noetic rivers, O God, gladden Thy city with sanctity.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 1"
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
                  "text": "O citizens of heaven, fellow ministers with the noetic ranks, all-glorious apostles: Deliver us from all tribulation.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O Christ Who established the apostles, Thy noetic heavens: By their prayers establish me steadfast upon the rock of Thy will, in that Thou art full of loving- kindness.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "In that the Mother who gave Thee birth in purity prayeth with the choir of the disciples, O Lord, grant us Thy mercies.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst ride Thy chosen steeds into the sea, O Lover of mankind, and they roiled the waters of false belief, proclaiming to all the true understanding of Thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O glorious apostles, ye stars who have enlightened the noetic firmament of the Church with piety: Deliver me from the night of ignorance and transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Having been shown to be like well-honed arrows, O apostles, quench now the burning arrows of mine evil, making steadfast my thoughts.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "By the prayers of her who gave birth to Thee, and those of Thy sacred apostles, O Christ, heal my soul with their effective remedies, for it hath been embittered by venom through the sting of the adversary.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "Thou, O Lord, who camest into the world, * art my light, * a holy Light turning from the darkness of ignorance * those who sing Thy praises in faith.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The Cause of all gave you to drink of noetic gladness, O glorious apostles, who art branches putting forth the grapes of life.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 1"
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
                  "text": "O apostles, unto the light of the commandments of God guide those who mindlessly remain in the darkness of despondency of soul.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Deliver us from transgressions of soul and from the judgment which is to come, from corruption and misfortunes, O blessed apostles.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Save me, O God, Thou Lover of mankind! Save me by the supplications of her who ineffably gave birth to Thee, and of all Thy divine apostles!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 5, item 4"
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
                "text": "The Church crieth out unto Thee O Lord, * ‘I will sacrifice unto Thee with a voice of praise * having been cleansed of the blood of the demons' * by the blood that for mercy's sake flowed from Thy side.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O divinely chosen sheep of the good Shepherd, ye who are scattered throughout the world, by faith ye transformed all the bestiality of the wolves into the meekness of lambs.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O apostles, ye right fruitful trees of divine paradise, transform all the barrenness of my soul into the goodly fruitfulness of virtuous ways.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "I have been wounded by the sword of the passions and deadened thereby. O glorious ones, who received from Christ the grace to resurrect the dead, give life to my wretched soul, which hath been slain.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Still Thou the raging storm of my soul, O compassionate God of all, by the supplications of the Theotokos who gave birth to Thee, and of Thine apostles and martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With the strength of your all-holy preaching, O true apostles of Christ, ye have broken the winter of deception and enlightened the minds of the faithful with the knowledge of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Ever pouring forth fragrant myrrh, O divine disciples, fill with the sweet smell of noetic myrrh those who have recourse unto you, and drive away the foul- smelling passions.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O glorious disciples of the incorrupt Word, save me, who am become corrupt through carnal offenses, yet who sing: Blessed art Thou in the temple of Thy glory, O Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 3"
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
                  "text": "The choir of the angels, the choir of the martyrs and Thine apostles, O Word, ever entreat the magnitude of Thy loving-kindness: Through the Theotokos have pity on all, in that Thou art compassionate.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 4"
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
                "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O mouths of Christ inspired by the fire of the Spirit, ye who closed the mouths of the unrestrained and spread the preaching of salvation everywhere: Ye have delivered from the jaws of the noetic wolf those who cry aloud: Hymn the Lord, all ye works, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Sound ye the melodious trumpets of Christ round about my deadened soul, O glorious apostles, and raise it up from the grave of despair and despondency, that it may chant: Hymn the Lord, all ye works, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "By the prayers of Thy disciples, O Christ, disdain me not, who with depravity of mind have trampled underfoot Thy laws and, a prodigal, have stumbled headlong into the abyss, and am ever captive to wicked habits.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O Mary, Sovereign Lady of all, by thy supplications free me, who am dominated by the serpent and ever sin; that I may labor for Christ in a pure life, and chant: Hymn the Lord, all ye works, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "A cornerstone not cut by hand O Virgin, * was cut from thee the unhewn mountain: * even Christ, Who hath joined together the disparate natures; * therefore rejoicing we magnify thee, * O Theotokos.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O apostles, ye chosen stones of the Stone set as the Chief Cornerstone, ye have built up the hearts of all the faithful, toppling the foundations of the enemy with the rock of the Faith.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O apostles, who received from Christ the authority to loose and to bind, loose the bonds of mine evils, bind me to the love of God, and cause me to share in the kingdom, of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O divine clouds of the Master, with divine showers water my heart, which hath become dry through every evil deed, and show it to be fruitful.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "With the holy angels, with the divine apostles and the glorious martyrs, O most pure Birthgiver of God, entreat thy Son and God, that He deliver our souls from misfortunes.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
          }
        },
        {
          "title": "Another canon, of the holy hierarch Nicholas, the acrostic whereof is “This is the fourth weaving for Nicholas,” the composition of Joseph, in Tone IV",
          "heading_rubric": "Another canon, of the holy hierarch Nicholas, the acrostic whereof is “This is the fourth weaving for Nicholas,” the composition of Joseph, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "O Thou who wast born of the Virgin, * drown I implore Thee, in the depth of dispassion * the triune nature of my soul, * as Thou didst the mighty strongholds of the warriors, * that in the mortality of my flesh * as on a timbrel * I may chant a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Having inherited the life which is devoid of grief, O blessed one, ever filled with, spiritual joy drive all grief from my soul, I pray, that, rejoicing, I may glorify thee, O most sacred father Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 1"
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
                  "text": "Thou wast set upon the lampstand of exalted virtues, and like a lamp dost enlighten the hearts of the faithful, O holy hierarch Nicholas; wherefore, I entreat thee with faith: By thy luminous prayers drive away darkness from my soul.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 1, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O most wise father, overwhelmed now by the abyss of this corrupt life and divers temptations, fleeing unto thee, I cry: Let me find thee to be a helmsman who by thy divine supplications transformeth the storm into calm.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O pure one, who art possessed of ever-vigilant prayer, lull to sleep the passions of our souls by thy sacred mediations, granting us divine and saving watchfulness for the fulfillment of the will of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou wast revealed to be a sword slaughtering the rampaging foe, O Nicholas; wherefore, preserve us unharmed by their temptations, that we may do the will of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Heal the broken state of my soul, O holy hierarch who broke all the snares and traps of the enemy, that with faith I may honor thee, mine intercessor.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O father Nicholas, who didst raze the lifeless temple of Venus, by thy divine mediations demolish the passionate fantasies of my mind.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thee have we acquired as an intercessor, O most pure Virgin. Transform our grief into joy, and deliver us from the sorrow which giveth rise to death.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "He who sitteth in glory upon the throne of the Godhead, * Jesus the true God, * is come in a swift cloud * and with His sinless hands he hath saved those who cry: * Glory to Thy power, O Christ.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Thy most glorious life, O Nicholas, hath everywhere shown thee to be most glorious, radiant with divine miracles, the adornment of hierarchs and boast of all who honor thee with hymns of joy,",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Resplendent with the divine rays of humble-mindedness, thou didst praise God on thine exalted cathedra, O blessed one, and by thy right acceptable supplications, O wise father, thou hast caused us to also partake of them.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Afire with priestly zeal, thou didst deliver those unjustly led forth to be slain, O father; wherefore, we cry out to thee: Rescue us thus from the perils which cruelly slay the heart.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Joyfully going about the heavens, O father Nicholas, stand forth invisibly before all who call upon thee, easing the sickness of our souls and granting us consolation in a godly manner.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 4"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The angelic armies are filled with awe, O most pure one, hymning the majesty of thy divine birthgiving. With them pray, O Virgin, that all may be saved who bless thee with pure faith.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 5"
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
            "5": {
              "irmos": {
                "text": "The wicked will not behold Thy glory, O Christ, * but we who rise early to hymn Thee shall behold Thee, * the Only-Begotten effulgence of Thy Father's divinity, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Dying, O wise father, thou didst set like the sun, but in Christ thou hast shone forth in the luminous effulgence of thy miracles, illumining the whole world, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 1"
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
                  "text": "O sacred Nicholas, hearken unto us in these days, when temptations and tribulations befall us, relieving all oppression by the grace of the Spirit Who dwelleth within thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In that I have a soul broken by the passions of life, I call upon thee for help, O sacred Nicholas: Hasten thou, and grant me perfect healing, entreating the supremely good One!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Beholding thee with noetic eyes, O Virgin, Isaiah cried out: Behold, Jesus the Lord will be born from the Virgin, the divine maiden, unto the regeneration of mankind!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                "text": "I have reached the depths of the sea * and the tempest of my many sins hath engulfed me; * but do Thou raise up my life from the abyss * O Greatly-merciful One.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou wast strengthened by the might of the Savior, O divinely wise one, who art able to destroy the invisible foe. By thy prayers, O father Nicholas, deliver us from his grievous harm.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 1"
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
                  "text": "By thy sacred supplications, O most glorious Nicholas, deliver us from torment in Gehenna, and from the most harmful oppression of wicked men.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "The military officers, who of old were unjustly sentenced to die, were delivered by thine intercessions, O right wondrous one. Rescue us from all harm as thou didst them.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Thy people and city entreat thee, O Mother of God: Rescue us from all need, O all-holy Lady, and from eternal damnation in the life to come.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 4"
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
                "text": "The three youths in Babylon, * regarded the tyrant's command as foolishness, * and cried aloud in the midst of the flame: * Blessed art Thou, O Lord God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O holy Nicholas, entreat the one Creator of all, Who resteth in the saints, that He sanctify us and send down upon us His rich mercies.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Holy, righteous and meek, gentle and humble, O glorious one, thou didst ascend to the most glorious heights of the priesthood, working signs and wonders.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Keeping the laws of God, O venerable one, thou wast revealed to be a most pure temple of God; wherefore, we cry aloud: O all-blessed one, deliver thy servants from all iniquity!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 3"
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
                  "text": "Put down the uprisings of the passions of my soul, and by thy vigilant supplications grant me watchfulness, O maiden, driving far away the slumber of despondency.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 4"
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
                "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Making proclamation concerning divine things, O Nicholas, thou didst clearly shut the gaping mouths of the iniquitous, and from the corruption of Arius delivered many, who chant in a Orthodox manner: Hymn the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O holy one, thou namesake of victory, by thy prayers show us forth, who ever pray to thee with faith, as victors over the passions which engender death, and over the lying tongue of all-iniquitous men.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Send down upon us thy salvific help, O wonderworker Nicholas, that we may be succored in the day of need when we call upon thee with faith, we pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Triadicon: In an Orthodox manner, O ye faithful, let us worship the Holy Trinity, glorifying the Father, the Son and the all-holy Spirit, crying aloud: Bless and hymn the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "Grant me thy mercy, O blessed and all-pure one who hast given birth to the exceedingly merciful Word; stand before me at the hour of judgment, and deliver me then from damnation, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 6"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
                "tier": 2,
                "src": {
                  "file": "4-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Ever working healings, O venerable Nicholas, thy tomb poureth forth fragrant myrrh upon those who approach it with faith and love, burying the assaults of illness; wherefore, we all call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Like the sun thou dost shed light upon the whole world, O divinely blessed Nicholas, driving away the darkness of grievous circumstances with the radiance of divine miracles by thy sacred mediations, O adornment of hierarchs.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 2"
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
                  "text": "As is thy wont, have pity, O Nicholas, upon those who are ever cruelly tempest-tossed by the circumstances of life, the deceptions of the demons and the temptations of wicked men, that we may all call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
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
                  "text": "O my soul, be thou mindful of the dread day and hour, when the Master will call thee to trial and judge thy secret acts; and cry out to Him: O Savior, save me by the prayers of Nicholas!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 4"
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
                  "text": "We joyfully offer thee the salutation of the divine Gabriel, and we cry aloud: Rejoice, O paradise who ever hast within thee the Tree of life, O most glorious palace of the Word! Rejoice, O all-immaculate Virgin!",
                  "tier": 1,
                  "src": {
                    "file": "4-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            }
          },
          "acrostic": "This is the fourth weaving for Nicholas",
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the holy apostles, in Tone IV:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the holy apostles, in Tone IV:",
        "items": [
          {
            "text": "Thou didst enlighten the choir of the apostles with the Holy Spirit, O Christ God. For their sake, wash away the defilement of our sin, and have mercy on us.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thy Holy Spirit revealed the illiterate disciples to be teachers, O Christ God, and set at naught the delusion of the pagans with their greatly eloquent harmony, in that He is almighty.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Precious is the death of Thy saints, O Lord! For broken by swords, fire and freezing cold, they poured forth their blood, placing in Thee their hope, that they would receive reward for their toils. They endured, O Savior, and have received great mercy from Thee.",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Matins, aposticha item 3"
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
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.thursday_matins_as_printed"
        }
      },
      "aposticha_theotokion": {
        "text": "Thee have we obtained as a rampart, * O most pure Theotokos, * a favorably calm harbor and confirmation. * Wherefore, I who am tempest-tossed in this life beseech thee: ** do thou guide me and save me!",
        "tier": 2,
        "src": {
          "file": "4-5.pdf",
          "locus": "Thursday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "fri": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "When Thou wast nailed to the Cross, and Thy side was pierced by a spear, Thou didst redeem us from the curse of the law by Thy precious blood and didst pour forth immortality upon mankind. O our Savior, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Savior, the Hebrews nailed Thee to the Cross, from whence Thou didst call us from among the nations, O Christ, our God and Savior. Thou didst willingly stretch out Thy hands upon it, O Lover of mankind, and in the multitude of Thy compassions deigned to be pierced in Thy side by a spear.",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 2"
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
          "verses": [
            {
              "text": "Exalt ye the Lord our God, and worship the footstool of His feet; * for He is holy.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "O most immaculate Virgin, * Mother of Christ God, * a sword pierced thy most holy soul * when thou didst behold thy Son and God * crucified of His own will. * Him do thou never cease to entreat, O blessed one, ** that He grant us the forgiveness of our transgressions.",
            "tier": 2,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Matins, sessional set 1 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "Go Thou quickly before us, O Christ our God, before we are enslaved to the enemies who blaspheme Thee and seek to separate us. By Thy Cross destroy those who wage war against us, that they may understand what the Orthodox Faith may accomplish through the prayers of the Theotokos, O Thou only Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 1"
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
              "text": "When Thou wast wounded in Thy divine side by the spear, O Master, the weapons of the invisible foe utterly failed, and all the force of his malice was annulled; wherefore, we worship Thy saving sufferings, glorifying Thy divine dispensation.",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Today, the angelic armies have come for the memorial of the passion-bearers, to enlighten the thoughts of the faithful and to make the whole world radiant by grace. Entreated by them, O God, grant us great mercy.",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
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
              "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "When Thy most pure Mother beheld Thee uplifted upon the Cross, O Word of God she exclaimed, lamenting maternally: “What is this new and strange wonder, O my Son? How is it that Thou, the Life of all, dost taste of death desiring to bring life to the dead, in that Thou art compassionate?”",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Matins, sessional set 2 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "In Thine infinite mercy, O good One, Thou didst endure for us an unjust trial, the Cross and death, that Thou mightest free from the ancient curse and condemnation all who through delusion have fallen into corruption; wherefore, we worship Thy crucifixion, O Word.",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
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
              "text": "When it perceived that is was Thee, the Sun of righteousness, suspended on the Cross, O Christ, the sun dimmed its light. Creation shook O Word, and the dead quickly arose from the grave as from sleep, hymning the divine might of Thy glory.",
              "tier": 1,
              "src": {
                "file": "4-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 2"
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
            "text": "When she beheld Thee lifted up upon the Cross, O Christ, Thine unwedded Mother maternally exclaimed lamenting, such things as these: “What is this new and strange wonder, O my Son? How is it that the iniquitous assembly hath nailed to the Cross Thee Who bestowest life upon all, O my Light most sweet?”",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the precious and life-creating Cross, the acrostic whereof is “Nailed to the Cross, Christ freeth from deception,” the composition of Joseph, in Tone IV",
          "heading_rubric": "Canon of the precious and life-creating Cross, the acrostic whereof is “Nailed to the Cross, Christ freeth from deception,” the composition of Joseph, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "I shall open my mouth, * and be filled with the Spirit, * and utter discourse to the Queen and Mother; * and be seen radiantly keeping festival, * joyfully praising her wonders.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst stretch out Thy divine hands upon the Cross, O Long-suffering One, calling the perishing world to recognize Thy might. Wherefore, O Compassionate One, we magnify Thy loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 1"
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
                  "text": "Moses lifted up the brazen serpent, prefiguring Thy divine crucifixion, O all- beginningless Word, whereby the venomous serpent who caused the fall of Adam fell himself.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Ye have now been deemed worthy to dwell amid the splendors of the saints, O martyrs, having manifestly received the unshakable kingdom, as Paul said; and ye have come to share in the glory of Christ.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 3"
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
                  "text": "Your ship was not capsized by the mounting waves of your unendurable torments, O martyrs, for through the steering of the King of all ye reached the calm haven.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "A sword pierced thy heart, as Symeon said, when thou didst behold the one Christ crucified and pierced by a spear, O Virgin Lady; wherefore, lamenting, thou didst endure pain.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                "text": "O Theotokos, thou living and plentiful fount, * establish in spiritual fellowship those who sing hymns to thee, * and in thy divine glory * grant them crowns of glory..",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "All-iniquitous men led thee like a lamb to the slaughter, O Christ, who art the Lamb of God Who desirest to deliver from the cruel wolf the lambs whom Thou didst love.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Unjustly condemned, Thou didst stand before the judge, O Thou Who dost judge the whole earth with righteousness; and Thou didst endure smiting on Thy cheek, O Lord, desiring to free me, who am enslaved to the evil prince of this world.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Suffering lawfully, O saints, ye put the lawless enemy to shame; and willingly slain for the uplifting of all, ye waged war on the serpent who brought about death.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 3"
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
                  "text": "Having raised themselves above earthly things and achieved goodly glory through suffering, the holy martyrs, full of ineffable joy, were united to the immaterial ranks, though they are material.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Through thee, O Virgin, the restoration of Eve hath truly been made manifest: God who is born in the flesh and lifted up upon the Cross, casting down the demons, O Lady full of the grace of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 5"
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
            "4": {
              "irmos": {
                "text": "Perceiving the profound counsel of God, * that the incarnation of Thee the Most High, * will be from a Virgin, * the prophet Habbakuk cried aloud: * Glory to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "That Thou mightest release me from the bonds of sin, O Lover of mankind, Thou wast willingly bound and didst die on the Cross like a malefactor. Glory be to Thy great loving-kindness!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Thou didst endure wounds and a violent death, O Word of God, making immortal the essence of mortal man, which had been slain by the passions. Glory to Thy great loving-kindness!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "The martyrs, who desired to inherit divine joys through the all-holy Spirit, with joyous souls endured wounds and a violent death, thereby wounding the evil one.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Your hands and heads severed, your tongues excised, your eyes put out, and your bodies dismembered, O divinely eloquent martyrs, ye remained un-separated from God.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "“When Thou wast pierced by the spear, O Master, the record of Adam was rent apart,” exclaimed the Theotokos as she stood before the Cross, O Lord, crying out in pain.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 5"
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
            "5": {
              "irmos": {
                "text": "All creation stands in awe of thy divine glory; * for thou, O Virgin who hast not known wedlock, * didst contain within thy womb the God of all, * and gave birth to the timeless Son, * bestowing peace, upon all who hymn thee.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Beholding Thee, the Sun, stretched out upon the Cross, the sun hid its rays, when Thou didst set, O Savior, enlightening those asleep in the night of delusion, who now worship Thy might.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Crucified in Thy loving-kindness, Thou hast saved me; and having tasted gall and vinegar, in that Thou art good, Thou hast delivered us from the taste of pleasures, whereby we were deceived and fell into corruption.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "With the warmth of the Holy Spirit ye dispelled the winter of deception, O divine martyrs, and, rejoicing, together ye reached the springtime of rest, helping all who find themselves amid tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "With the clouds of your divine blood, ye watered the whole earth, O holy martyrs, drying up the torrents of ungodliness; wherefore, ye have now made your abode by the water of life, praying for us all.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "When the divinely joyous one beheld the Son to Whom she had given birth lifted up upon the Tree, she was filled with weeping and truly marveled at His long-suffering; wherefore, she magnified His condescension.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "6": {
              "irmos": {
                "text": "Celebrating the divine and solemn feast * of the Mother of God * O ye divinely wise, * let us come, clapping our hands, * and glorify God who was born of her.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "By the pangs which Thou didst endure when Thou wast crucified Thou didst cause the pangs of mankind to cease, O loving Lord, leading all to the life which is devoid of pain.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "The rays of the sun were hidden, the veil of the temple was rent in twain, the earth trembled and the rocks split asunder in fear, unable to bear the sight of the Creator on the Cross.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The serpent fell dead, seeing the godly martyrs slain by tortures and truly inheriting life everlasting through divine grace.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Ye underwent many torments and have received many crowns, O innumerable multitude of martyrs, who live forever; wherefore, drive away the multitude of mine evils.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Be thou a haven unto me who navigate the deep of evils, O all- immaculate Birthgiver of God, who by thy birthgiving hast saved all creation, which is in distress.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                "text": "Refusing to worship created things * in place of the Creator, * The divinely wise youths bravely trampled down the threatening fire * and rejoicing they sang aloud: * O supremely hymned Lord and God of our Fathers, Blessed art Thou.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The adversary was vanquished and suffered a wondrous fall when Christ was lifted up upon the Tree; and that which before was condemned was saved, crying out to Him: Blessed art Thou, O Lord and God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Christ Who died upon the Tree, Thou didst impart life unto me who was slain by the tree; and by thy divine wounds Thou didst heal the wounds of my heart. Blessed art Thou, O Lord and God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having received the gift of healing, to cure illnesses and to drive the demons from mortals by the power of the Spirit, O invincible martyrs, by your prayers cure the passions of my heart.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 3"
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
                  "text": "Suffering shipwreck, the adversary and his myriad hosts perished in your blood; but ye, O all-praised martyrs, chant, rejoicing: Blessed art Thou, O Lord and God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 4"
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
                  "text": "O most pure one, thou hast been revealed to be the undefiled Bride, the palace of the Creator, the untilled land, the fiery throne; wherefore, we cry out to thee: Rejoice, O most pure Lady, who by thy divine birthgiving hast deified mankind!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 5"
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
                "text": "The Offspring of the Theotokos * saved the holy children in the furnace. * He who was then prefigured hath now been born on earth, * and He gathereth all creation to hymn thee: * all ye works praise ye the Lord * and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "As the Timeless One, Who having entered into time, dost release me from the bonds of time; and willingly bound, O Master, Thou didst send the prideful one into unbreakable bonds, saving me by Thy Cross and sufferings. Wherefore, I bless Thee, O Christ, throughout the ages.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 1"
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
                  "text": "Willingly lifted up upon the Tree, Thou didst raise up all creation with Thyself, O all-hymned and invisible Word Who art beginningless; and by Thy suffering Thou didst rebuke the princes and powers of darkness, O Christ. Wherefore, we hymn Thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "O most comely martyrs, ye mounted your blood like a chariot and were taken up to the habitations of heaven, receiving fitting honors from Christ, and crying aloud: Hymn the Lord and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Lifted up upon trees, thrown into pits, given over to wild beasts, cast into fire and water, rejoicing, the passion-bearers and martyrs chanted: Hymn the Lord and supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Seeing Christ, Who imparteth divine and saving wakefulness unto all, asleep upon the Tree, the all-immaculate Mother exclaimed, lamenting, and crying aloud: “What is this most new wonder? Thou Who givest life unto all dost die of Thine own will!”",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Let every mortal born on earth, * radiant with light, in spirit leap for joy; * and let the host of the angelic powers * celebrate and honor the holy feast of the Mother of God, * and let them cry aloud: * Rejoice! O all- blessed Theotokos, * thou pure Ever-virgin.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O Lover of mankind, Who wilt come to judge all mankind, Thou didst stand condemned, and willingly desired to be crowned with the crown of thorns, O Christ our Savior, uprooting the thorns of disobedience, and delighting all with the knowledge of Thy loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 1"
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
                  "text": "O how can the iniquitous ones, darkened by envy, condemn Thee, the righteous and blameless Judge, to the Cross, O Bestower of light? Seeing Thy suffering, the sun was darkened, the veil of the temple was rent in twain, and the foundations of the earth trembled.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 2"
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
                  "text": "Ye conformed yourselves to the sufferings of Christ, O holy martyrs, and became fellow heirs of the kingdom and splendor; wherefore, enlighten us who hymn you, O most wise ones, freeing us from the gloom of sin and divers evil circumstances.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Having already made your abode in the heavens, and received everlasting glory, O most wise ones, deified by sacred communion, remember all of us who with faith honor your all-sacred and honored memory, O ever-glorious ones.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 4"
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
                  "text": "Enlighten those who with love hymn and magnify thee, O pure maiden, and dispel the darkness of our passions. Still the tempest of the evil one, and by thy prayers drive away his temptations from among us, O maiden.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 5"
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
          "acrostic": "Nailed to the Cross, Christ freeth from deception",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos, in Tone IV",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou alone art the help, refuge and protection of thy servants, O pure Birthgiver of God; wherefore, falling down, we cry to thee: Save us in Thy loving- kindness, O Lady!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "O Lady who hast given birth to the most holy Word, O all-immaculate maiden who art more holy than all the hosts on high, sanctify my defiled heart.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 2"
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
                  "text": "O all-immaculate one, thou art the restoration of the fallen and the confirmation of those who stand fast; wherefore, I pray to thee: Set aright my mind, which hath fallen through sin, O Lady, that I may glorify thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 3"
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
                  "text": "Extending thy helping hand unto me, who lie still and dead of sin, O Birthgiver of God, raise me up and show me to be full of divine gladness.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Have mercy upon me, who am cruelly drowning in the deep of life, O Virgin, and guide me to the calm harbor of salvation; for thee have I acquired as mine only hope.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "With the light that is within thee dispel the darkness of my mind, O Theotokos, in that thou art good, I pray; and since thou art compassionate and greatly merciful, make me steadfast through examples of repentance, that, saved, I may call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "With the sprinkling of thy mercy, O divinely joyous Virgin, quench the burning coals of my passions; and light the lamp of my heart, which hath been extinguished, O all-immaculate one, thou golden lampstand.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 3"
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
                  "text": "In that thou art merciful, O Birthgiver of God, visit my wretched soul, which is grievously sick from the passions, and save me by thy prayers, that, having received a higher life, I may magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O all-immaculate Virgin Mother of God, shed upon me the radiance of repentance, dispel the gloom of my wretched soul, and drive wicked thoughts away from my heart.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "O Virgin Mother, who hast given birth to the Master Who is easily reconciled and most kindly, ever entreat Him on our behalf, in that thou art good, that He deliver us from the alien one.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "With faith I entreat thee, O blessed one, thou cleansing of all, and I ask: Render the Judge, thy Son, merciful unto me, that I may glorify thee in praise.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Ever having thee as my helper, O most pure one, I neither fear nor am afraid, of anyone. For who can desire to inflict woes upon thy servant and not be terrified?",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Slain by passions and defilements, O all-immaculate Lady, I flee to thy compassions and hasten to thy fervent protection and help. O thou who alone hast given birth to Life, impart life unto my heart!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 1"
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
                  "text": "Enlighten my darkened heart, O most pure one, who hast given birth to the Bestower of light: God and man. Him do thou entreat, as His Mother, to grant me deliverance before the dread day, O Sovereign Lady.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 2"
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
                  "text": "Cure the afflictions of my mind, O all-immaculate one, heal the sufferings of my soul and drive away the darkness of despondency, that in praise I may hymn thee, the ever-blessed one, O all-hymned Theotokos,",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 3"
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
                  "text": "Lay low the arrogance of mine enemies, O Lady, for thee do I have as mine only intercessor, hope and mighty help. Preserve me, O pure one, delivering me from their every assault.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 4"
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
                "text": "Prefiguring Thy three-day burial * prophet Jonah praying in the belly of the sea-monster cried aloud: * Deliver me from corruption * O Jesus Thou King of hosts.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Shine upon me a ray of repentance, O Lady, and drive away the clouds of mine evil thoughts, O Ever-virgin, thou cloud of the Sun of righteousness.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 1"
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
                  "text": "Still the raging waves of my passions and calm the storm of mine evil thoughts, O Ever-virgin, thou calm haven of the tempest-tossed.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Give me to drink of compunction, O Lady, and grant me now rivers of tears, whereby I may quench the everlasting flame, O only all-hymned one.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 3"
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
                  "text": "O thou who truly hast given birth to the Abyss of goodness, and who driest up the raging deep of mine evils, guide me to the haven of the will of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                "text": "Thou didst save the children of Abraham in the fire * and slay the Chaldeans, * who unjustly entrapped the righteous ones. * O supremely hymned Lord, God of our fathers, * blessed art Thou.",
                "tier": 2,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With great love I flee beneath thy holy protection. Turn me not empty away, O most pure one, but grant me remission of sinns, and save me, that, seeing this, mine enemies may be filled with shame.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "I fear no evil, for thou art with me, O Virgin; I repel the enemies who pitilessly persecute me, and, strengthened by thy power, O Mary, Birthgiver of God, I vanquish them.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Thou ever hast the power to do all things, in that thou hast given birth to the Master. Free me from the domination of pleasures and passions, O blessed one, that, rejoicing, I may sing: Rejoice, O throne of the Most High!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 3"
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
                  "text": "Thee alone do I, thy servant, have on this earth as an intercessor and a true and saving help, O most pure and divine glorious one; and unto thee do I flee. Save me from the snares of those who pursue me, O Birthgiver of God!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 4"
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
            "8": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Having wasted my life in fornication and having committed every impure act, I tremble before the judgment-seat, I tremble before the questioning, and I tremble before my sentence of condemnation. O pure one, since thou hast given birth to the Judge, stand before me then, and deliver me from necessity.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "In thee have I placed all my hope of salvation, O Mother of God, who knewest not wedlock, and I ever call upon thee for help: Save me from grief and the temptations of the enemy, loose the bonds of mine evils, and rescue me from everlasting darkness!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "At the hour of mine end, O Virgin, rescue me from the hands of the demons, from condemnation and retribution, from dreadful trials and the bitter toll-houses, and from the cruel prince and everlasting damnation, O Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 3"
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
                  "text": "O Virgin, preserve thy servants from the every assault of the alien, for thee do I have as protection and help, refuge and confirmation, O Lady; and because of thee I hope to be delivered from the snares of the enemy, O only intercessor for the race of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 4"
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
                  "text": "refrain: “More honorable than the cherubim ...,” and make prostrations.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Rejoice, O most pure one, who for those on earth hast truly given birth unto Joy! Rejoice, haven of salvation and protection of those who have recourse unto thee! Rejoice, O pure ladder who bearest up those who have fallen! Rejoice, O most blessed Theotokos, thou hope of our souls!",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 1"
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
                  "text": "By thy powerful prayer rid my defiled soul and body of the weeds of my sins, O divinely joyous and most pure Lady, granting me the healing of salvation , the divine fear of the Master, O all-immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 2"
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
                  "text": "Thou art mine enlightenment, thou art my deliverance and joy, thou art mine ally, thou art my glory and boast, my hope of salvation, O all-immaculate one; and unto thee do I bow down with faith and cry aloud: Save me, thy wretched servant, and rescue me from the gates of Hades.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
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
                  "text": "Save me, O pure one, who hast given birth to the all-compassionate Savior! Have pity on me, thy servant, and direct me to the ways of repentance! Repel from me the temptations of the evil one, deliver me from his pursuit, and rescue me from everlasting fire, O most immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "4-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 4"
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
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone IV:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone IV:",
        "items": [
          {
            "text": "Let Thy Cross be for us a bulwark, O Jesus our Savior; for we, the faithful, have no other hope save Thee Who wast nailed to it in the flesh, granting us great mercy.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Thou hast given a sign unto those who fear Thee, O Lord: Thy precious Cross, whereby Thou didst put to shame the princes and rulers of darkness, and restored us to our primal blessed state. Wherefore, we glorify Thy loving dispensation, O almighty Jesus, Savior of our souls.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
            "text": "Who is not moved to awe, beholding the good fight which ye fought, O holy martyrs: how, though in the flesh, ye vanquished the incorporeal foe, confessing Christ and armed with the Cross? Wherefore, as is meet, ye were shown to be expellers of the demons and victors over the barbarians, praying unceasingly that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
        "text": "Beholding Thee * nailed to the Cross, O Lord, * the ewe- lamb Thy Mother marveled * and cried out: “What is this that I see, * O my Son most desired? How hast Thou been rewarded * by the unfaithful and iniquitous assembly * which hath enjoyed Thy many miracles? ** Yet glory to Thine ineffable condescension, O Master! “",
        "tier": 2,
        "src": {
          "file": "4-6.pdf",
          "locus": "Friday Matins, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "As one valiant among the martyrs",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "sat": {
      "sessionals": [
        {
          "rubric": "st After the 1 chanting of the Psalter, the Sessional Hymns of the holy martyrs, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "Today the armies of heaven have arrived for the memorial of the passion- bearers, to enlighten the minds of the faithful and to illumine the whole world with grace. Entreated by them, O God, grant us great mercy.",
              "tier": 1,
              "src": {
                "file": "4-7.pdf",
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
              "text": "Armed with Thy Cross, O Christ our God, Thy passion-bearers defeated the machinations of the enemy, the author of all evil. They illumine mankind like radiant torches, guiding us, and granting healing to those who ask with faith. By their intercessions save Thou our souls.",
              "tier": 1,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 2"
              },
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "The mystery hidden from all ages * and unknown to the ranks of angels, * hath been revealed to those on earth through thee, O Theotokos: * God incarnate in an uncommingled union, * Who willingly accepted the Cross for our sake, * and through it hath raised up the first-formed man, ** and saved our souls from death.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone IV:",
          "spec_mel": null,
          "items": [
            {
              "text": "In their sufferings, O Lord, Thy martyrs received imperishable crowns from Thee our God. For possessed of Thy might they cast down the tyrants and crushed the feeble audacity of the demons. By their supplications save Thou our souls.",
              "tier": 1,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Adorned with the blood of Thy martyrs throughout all the world, as with purple and fine linen, Thy Church crieth out to Thee through them, O Christ God: Send down Thy compassions upon Thy people, and grant peace to Thy commonwealth and great mercy to our souls!",
              "tier": 1,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "In Thy loving compassion and almighty power, O Christ God, grant rest to the souls of those taken unto Thyself from this temporal life; Have mercy and forgive them all their transgressions; Have mercy, O merciful Lord on the work of Thy hands, by the prayers of the Theotokos, since Thou alone lovest mankind.",
              "tier": 1,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 3"
              },
              "label": "for_the_reposed"
            }
          ],
          "verses": [
            {
              "text": "Many are the tribulations of the righteous, * but the Lord shall deliver them out of them all.",
              "tier": 2,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord.",
              "tier": 1,
              "src": {
                "file": "4-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O pure, all-immaculate one who knewest not a man, who alone hast given birth within time to the timeless Son and Word of God, with the holy and honored patriarchs, the martyrs, prophets and the venerable, entreat Him, that He grant us purification and great mercy.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy martyrs, hierarchs, the venerable and the departed, the acrostic whereof is “I praise with splendor the godly friends of Christ,” the composition of Joseph, in Tone IV",
          "heading_rubric": "Canon of the holy martyrs, hierarchs, the venerable and the departed, the acrostic whereof is “I praise with splendor the godly friends of Christ,” the composition of Joseph, in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "O Thou who wast born of the Virgin, * drown I implore Thee, in the depth of dispassion * the triune nature of my soul, * as Thou didst the mighty strongholds of the warriors, * that in the mortality of my flesh * as on a timbrel * I may chant a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "The honorable Church is ever made splendid by the radiant struggles of the spiritual athletes of the Lord, and rendering worship it glorifies Christ, the Sun Who shone forth from the Virgin and dispelled the darkness of deception.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "With, faith let us praise the holy hierarchs of Christ, who shepherded well the chosen people; and let us praise the whole assembly of those who lived in holiness and by their spirit mortified the pleasures of the body.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Might was given by God to women who by grace trampled down the enemy in fasting and mighty suffering. By the supplications of them and Thy holy prophets, O Lord, send down Thy mercies upon all.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O Christ, justify Thy servants whom, in Thy righteous providence, Thou hast taken from this corruptible life unto true life; and, overlooking their transgressions, grant that they may join chorus with all Thy righteous ones.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Delivering us from the primal condemnation, the Son of God became thy Son, O pure one; wherefore, adopted for thy sake, we bless the heavenly Father, hymning thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                "text": "The bow of the mighty hath waxed feeble * and the weak have girded themselves with strength: * Therefore my heart is established * in the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Slaughtered like lambs, the right victorious martyrs were offered unto Christ, the Lamb and Word of God Who was slain for the deliverance of all.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "As mouths of God, the initiates of the sacred mysteries brought forth worthy people from among the unworthy, enlightening them with sacred teachings.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The company of the venerable have found inexhaustible sustenance through their asceticism, delighting in the sight of divine things and in spiritual ascents.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "By the intercessions of all Thy saints, O Christ, grant rest unto those who have departed in faith, overlooking all the transgressions they have committed in their life.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "We offer praise unto God Who through the Virgin was born in the flesh, and Who hath united the choirs of women to those of the angels.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "He who sitteth in glory upon the throne of the Godhead, * Jesus the true God, * is come in a swift cloud * and with His sinless hands he hath saved those who cry: * Glory to Thy power, O Christ.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "The most sacred company of martyrs hath been glorified; and by their members they have glorified in a sacred manner, the Lord Who is glorified by all the angels, and they pray that we be delivered from all tribulation.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Possessed of a mind resplendent with immaterial radiance, O godly hierarchs, ye dispelled the night of all delusion, and with true instruction guided the divinely chosen flock of Christ to understanding.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "The innumerable multitude of the venerable hath been adorned, the sole triumph of divine women hath been magnified, and the holy council of the prophets hath been honored, united, rejoicing, with the councils of the angels",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having become fellow citizens with the angels, O holy martyrs, ask remission for all those who have fallen asleep, a dwelling in divine paradise, and ultimate deliverance from transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 4"
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
                  "text": "He Who preserved thee a virgin after thine incorrupt birthgiving hath glorified the virgins who stand round about thee. With them do thou unceasingly pray that our souls be saved from every sorrow and peril.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "Thou, O Lord, who camest into the world, * art my light, * a holy Light turning from the darkness of ignorance * those who sing Thy praises in faith.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Suspended upon crosses, broken on wheels and dismembered, the mighty martyrs appeared before God wholly intact.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "As saviors of the faithful, O holy hierarchs, ye brought to the Lamb and Master those who were entrusted to you to shepherd in holiness.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Having withdrawn from the tumults of the world, O venerable ones, ye calmed hearts stirred up by the passions, and became children of the God of all.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O ye divine prophets, O company of women who were pleasing unto God, ask rest for those who have fallen asleep before us.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 4"
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
                  "text": "God, Who made His abode within thee, O most pure Virgin, hath made us divine habitations of His glory.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                "text": "I have reached the depths of the sea * and the tempest of my many sins hath engulfed me; * but do Thou raise up my life from the abyss * O Greatly-merciful One.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Like most costly stones most wisely rolling upon the earth, O martyrs, ye demolished the whole structure of ungodliness and became temples of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "From violent hands ye save all who are under your hands, O holy, righteous and venerable hierarchs, preserving the flock in Christ; wherefore, ye are called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Following the sayings of the prophets, in sufferings and fasting the multitude of women pleased God the Word, Who shone forth from the Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O greatly Merciful One, Thou Life of all, grant unto the dead who in faith have passed from us unto Thee the Creator, that they may dwell in the light with Thy saints.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "With mouth, tongue and heart I confess thee to be the pure Mother of our God, O maiden. By thy mediation deliver me from everlasting damnation.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 5"
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
                "text": "Of old the Children of Abraham in Babylon * trampled down the flame of the furnace, * crying aloud with hymns: * O God of our Fathers, blessed art Thou.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Together let us in gladness of soul hymn the martyrs of the Lord, the sanctified vessels of Christ the Master, the bulwarks and pillars of the Church.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "The holy hierarchs of Christ and the divine choir of all the venerable rejoice with the hosts on high. By their supplications, O Christ, save those who hymn Thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The goodly endurance of the women who shone forth in holiness and suffering and with faith labored in asceticism hath cast down him who infected Eve with disobedience.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Thou Who hast destroyed Hades and trampled down death by Thy death, grant rest to those whom Thou hast taken to Thyself in faith, and cause them to dwell in paradise.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 4"
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
                  "text": "Seeing the flame which did not consume the bush, the law-giver of old was taught an image of thy birthgiving, O ever-blessed Virgin Birthgiver of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 5"
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
                "text": "O almighty Redeemer of all, * having descended and bedewed the children * in the midst of the flame, * Thou didst teach them to sing: * All ye works bless and hymn the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The holy hierarchs, prophets and martyrs, who fought the sacred fight, have received a sacred habitation with the angels, and with them they ask that cleansing and great mercy be given to us all.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Enlightened by the Spirit, the venerable ones dispelled the darkness of the demons; and with them the hieromartyrs and holy hierarchs, the prophets and the righteous, glorify God in praise.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "He who before boasted mindlessly that he would destroy the earth and the sea is ever trampled underfoot by the women who have zealously served God in asceticism and fasting.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "We beseech Thee on behalf of all who in faith have fallen asleep, O Christ: In that Thou art full of loving kindness, enroll them in the choirs of the saved, who unceasingly cry aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O Lady, Birthgiver of God, who hast given birth to the right merciful Word, grant me thy mercy, and save me who cry aloud: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                "text": "Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Seeing the divine gifts and receiving honors for their great pangs, the martyrs rejoice, magnifying Christ Who truly magnified them and showed them to be victors.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having been ordained as bishops for the people and made yourselves radiant through fasting, O holy hierarchs who preached God, ye shone forth more brightly than the sun, illumining the faithful in the manifestation of great deeds, O venerable ones.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 2"
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
                  "text": "Let us bless all the venerable and the righteous, the hieromartyrs and all the prophets, and the women who splendidly pleased God, crying aloud: By their supplications, O Christ, deliver our souls from Gehenna!",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Unto those who have passed over to Thee in faith grant the joy received by the saints who were well-pleasing to Thee, O Christ, overlooking their offenses, O Thou only abundantly merciful Lord.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O all-immaculate one who wast revealed to be more exalted than the cherubim, in that thou hast given birth to the Sustainer of all things, elevate my mind, strengthening me against the carnal passions, that I may do the will of the Master.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
          "acrostic": "I praise with splendor the godly friends of Christ",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the departed, which we chant when there is no Menaion, the acrostic whereof is “A fourth rule: remembering our end,” in Tone IV",
          "heading_rubric": "Another canon, of the departed, which we chant when there is no Menaion, the acrostic whereof is “A fourth rule: remembering our end,” in Tone IV:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses’ outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Keep Thy servants at Thy right hand, O Savior, and, entreated by the passion- bearing martyrs, guide them to the pasture of immortality, that they may behold Thy beauty.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Overlooking their transgressions, grant, O Christ, that they who have reposed in faith may inherit Thine ineffable and blessed glory; and justify them by grace, through the shedding of Thy blood .",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "By Thy life-bearing death Thou didst slay the slayer, O Christ God. Grant rest now to Thy faithful servants, whom Thou hast received, and to whom Thou givest Thy life.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "When the Son of God, Who is comely in supremely exalted beauties, yet became incarnate from thee, O Virgin, was lifted up upon the Tree, He was bereft of beauty, taking upon Himself death for all.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 4"
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
                "text": "Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Having triumphed over the deception of idolatry, the martyrs now entreat God the Master, that He grant divine rest unto those who have previously reposed.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 1"
                  },
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Be Thou well-pleased to withdraw the flaming sword, O Master, that Thy servants who have reposed may partake of the tree of life.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Grant that Thy servants may dwell amid the sustenance of paradise, where the pure voices of those who keep festival are heard, O Christ, granting them remission of their offenses.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Thou didst combine virginity with a divine birthgiving, O most pure one; for thou didst ineffably give birth to the Creator of all things, unto Whose will all submit.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 4"
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
                "text": "Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Shown forth as luminaries, the martyrs enlighten the sky of the Church, and they entreat Christ the Savior to grant remission unto those who have fallen asleep.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 1"
                  },
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Possessing Thy Cross as a rod of power, thy servants have passed through the sea of the world, O Lord, and Thou hast caused them to dwell in Thy mountain, wherein Thou didst make Thy sanctuary.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 2"
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
                  "text": "Thy servants, whom Thou hast chosen and taken to Thyself, O Master, be Thou well-pleased to settle in Thy truly beloved habitations, where the souls of the righteous dwell.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 3"
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
                  "text": "The Immortal One, Who hath dominion over the living and the dead, becoming incarnate as a man from thee, O Mother of God, endured death in the flesh, destroying the power of death.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst glorify the martyrs of Thy dominion, O Lord; for their sake grant rest unto those who have fallen asleep before us, in that Thou art full of tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O greatly Merciful One, grant unto those who have died before us never- ending life, beauteous joy and unceasing gladness.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O only good One, Source of goodness, grant rest unto those who reached the end of their life in faith and the knowledge of Thee.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "We hymn thee, O Mother of God, through whom the ineffable and unapproachable Light hath shone forth on those in darkness, and we bless thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 4"
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
                "text": "The Church crieth out unto Thee O Lord, * ‘I will sacrifice unto Thee with a voice of praise * having been cleansed of the blood of the demons' * by the blood that for mercy's sake flowed from Thy side.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Let the flaming sword, beholding the spear which pierced Thy divine side, withdraw before Thy servants, O Savior, by the supplications of Thy passion- bearers.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Hanging upon the Tree, O my Savior, Thou didst open paradise. In that Thou art compassionate, cause those who have reposed in the faith to dwell therein, and show them to be partakers of Thy life.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Grant that those who through death have passed over to Thee in piety, O Master, may delight in the pasture of life, and number them with the righteous of ages past.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Though the Word is invisible God, yet He become visibly incarnate from the Virgin maiden who knew not a man; and by His death He hath destroyed death.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 4"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Accepting the endurance and patience and the blood of all the martyrs, grant rest unto those who in piety have fallen asleep in Thee, in that Thou art merciful and right conciliatory.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 1"
                  },
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Numbering the souls of Thy servants who have passed on to Thee among the firstborn and Thy righteous, O Savior, grant that they may unceasingly delight in Thee Who hast dominion over all.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 2"
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
                  "text": "O Word of God, our Redeemer, in that Thou art merciful be Thou well-pleased, as God, that those whom Thou hast now taken to Thyself may meet Thee on the clouds, with gladness, confidence and splendor.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Rejoice, O blessed Birthgiver of God, Virgin and Mother, for because of thee the destruction of death hath been wrought and life indestructible been granted to those who have reposed.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 4"
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
                "text": "Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.",
                "tier": 2,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Hearkening to the supplications of the martyrs and taking pity on that which is of the same stock as Thee, O Master, grant rest to the souls of those who have fallen asleep in faith in Thee, overlooking their sins, for they cry unto Thee: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "Reckoned as one dead with the two malefactors, Thou didst pour forth immortal life upon the dead; wherefore, grant that Thy servants who have reposed in the hope of resurrection may receive Thy kingdom, O Savior, for they cry unto Thee: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O Savior, Thou truly ever-flowing Wellspring of goodness, grant peace unto Thy servants, who have meekly left this corruptible life and found repose in the mansions of heaven, for they cry unto Thee: Bless the Lord, all ye works of the Lord!",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 3"
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
                  "text": "Thou alone hast appeared on earth as a most pure virgin and mother who knew not wedlock, O Lady, for in a manner transcending all telling and comprehension thou hast given birth unto God, and hast poured forth eternal life upon the dead; wherefore, we all bless thee, O Mary, Bride of God.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 4"
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
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "4-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Unto true martyrs and spiritual athletes Thou hast given the boldness to entreat Thee, O Lord. For their sake give divine deliverance unto those who have reposed, in faith, granting them to dwell in a place of holy habitation.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 1"
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
                  "text": "O Thou Who by Thine all-creative hand dost work all things for the good, Who hast authority over the living and dominion over the dead: In that Thou art almighty, settle by peaceful waters Thy servants whom Thou hast taken to Thyself.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "O Thou Who by nature art good, Who art rich in mercies and goodness, deliver from the outermost darkness those who call upon Thy name, justifying them by faith and grace, and enlightening them, in that Thou lovest mankind.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
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
                  "text": "The prophets proclaimed the images of thy birthgiving, O all- immaculate one, and others have composed yet other titles for thee, for thou hast given birth unto the Life of those in Hades, Who destroyeth the might of death.",
                  "tier": 1,
                  "src": {
                    "file": "4-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 4"
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
          "condition": "which we chant when there is no Menaion",
          "acrostic": "A fourth rule: remembering our end"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. On the Praises, these Stichera of the holy martyrs, in Tone IV:",
      "praises": {
        "rubric": "On the Praises, these Stichera of the holy martyrs, in Tone IV:",
        "items": [
          {
            "text": "Who is not filled with wonder, O holy martyrs, at beholding the good fight that ye have fought? For armed with the Cross and in the body confessing Christ, ye defeated the bodiless adversary; wherefore, as is meet, ye have been shown to be expellers of demons, and opponents of the barbarians, ever interceding that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises item 1"
            },
            "label": "plain"
          },
          {
            "text": "O holy martyrs, ye have become companions of the angels, bravely preaching Christ at the tribunal; for having forsaken all the beautiful things of this world, as though they did not exist, ye held fast to the faith as your steadfast hope. Wherefore, putting deception to flight, ye pour forth gifts of healing upon the faithful, ever interceding that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises item 2"
            },
            "label": "plain"
          },
          {
            "text": "How shall we not marvel at your struggles, O holy martyrs? For, clothed in mortal bodies, ye vanquished the incorporeal enemies; the threats of tyrants roused no fear in you; neither did the infliction of tortures, fill you with fear. Therefore, as is meet, ye have been truly glorified by Christ, ask ye great mercy for our souls.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises item 3"
            },
            "label": "plain"
          },
          {
            "text": "Precious is the death of Thy saints, O Lord. Slain by the sword, and by fire and freezing cold, they poured forth their blood, placing all their hope in Thee that from Thy hand they would receive the reward of their labors. They endured to the end and received from Thee O Savior, Thy great mercy.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises item 4"
            },
            "label": "plain"
          },
          {
            "text": "In a place of rest with Thee, O Lord, where all Thy saints repose, grant rest to Thy servants, for Thou alone lovest mankind.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises item 5"
            },
            "label": "for_the_reposed"
          },
          {
            "text": "Where is the passionate attraction of the world? Where is the illusion of transitory things? Where is the gold and silver? Where are the multitude of servants and their clamor? All is dust, all is ashes, all is but a shadow. Come ye, and let us cry aloud to Christ Who is immortal: O Lord, grant Thine eternal good things unto those who have departed from us, granting them rest in Thy blessedness which waxeth not old.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": [
              "glory"
            ],
            "sourceLabel": "Glory ...,"
          }
        ],
        "verses": [
          {
            "text": "Praise Him for His mighty acts, * praise Him according to the multitude of His greatness.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises verse 1"
            }
          },
          {
            "text": "Praise Him with the sound of trumpet, * praise Him with the psaltery and harp.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises verse 2"
            }
          },
          {
            "text": "Praise Him with timbrel and dance, * praise Him with strings and flute.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises verse 3"
            }
          },
          {
            "text": "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. * Let every breath praise the Lord.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, Praises verse 4"
            }
          }
        ],
        "theotokion": {
          "text": "O only pure and most pure Virgin, who hast given birth without seed unto God: Pray thou that our souls be saved.",
          "tier": 1,
          "src": {
            "file": "4-7.pdf",
            "locus": "Saturday Matins, Praises Both-now Theotokion (separate print site from the Glory — per-print closer device)"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ],
          "type": "theotokion",
          "sourceLabel": "Both now ..., Theotokion:"
        },
        "doxology_rubric": "Small Doxology (Read), Litany: Let us complete ...,"
      },
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the departed, in Tone IV:",
        "items": [
          {
            "text": "Truly awesome is the mystery of death. How the soul is separated from the body, and this harmony and union is broken, and severed by the will of God. Wherefore we entreat Thee: In the dwellings of Thy righteous grant rest to those who have departed unto Thee, O Bestower of life, and Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Thou hast given a sign"
          },
          {
            "text": "For those who believe in Thee, death is but a dream; for when Thou, the Master of all, wast laid in the tomb, Thou didst destroy the power of death, abolishing its ancient dominion. Wherefore we entreat Thee: Those who have departed unto Thee do Thou grant to dwell in the joy of Thy saints and the splendor of the just..",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 2"
            },
            "label": "plain"
          },
          {
            "text": "Thou hast become our righteousness and sanctification, and the redemption of our souls. For Thou didst lead us justified and redeemed unto the Father, taking upon Thyself the punishment and debt due from us. And now we entreat Thee: Grant rest to the departed in the joy and radiance of Thy saints, O our Benefactor and Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 3"
            },
            "label": "plain"
          }
        ],
        "verses": [
          {
            "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins aposticha of the departed, verse 1 — pointed, \"they\", final period (§5 per-tone)"
            }
          },
          {
            "text": "Their souls * shall dwell among good things.",
            "tier": 2,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Matins aposticha of the departed, verse 2 — tone 4 prints TWO verses where the 2-7/3-7 prints carry three (§5 structural per-tone set)"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "Following, the words of the divinely eloquent prophets, O all- immaculate One, we believe thee to be the Theotokos. For thou didst ineffably give birth to God in the flesh, Who hath delivered us from the bondage of sin. Ever beseech Him, that He illumine thy departed servants with the radiance of His Light.",
        "tier": 1,
        "src": {
          "file": "4-7.pdf",
          "locus": "Saturday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion",
        "sourceLabel": "Theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    }
  },
  "liturgy_weekday": {
    "mon": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone IV:",
        "items": [
          {
            "text": "Of old was Adam banished from paradise through the tree, but by the tree of the Cross hath the thief come to dwell in paradise: the one by tasting rejected the commandment of the Creator, but the other, crucified with Christ, confessed the hidden God, crying aloud: Remember me in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 1"
            },
            "label": "plain"
          },
          {
            "text": "I have sinned more than all others on earth, and I fear the implacable tribunal which is to come, O supremely good One. Preserve me uncondemned then, and deliver me from torment, granting me repentance which washeth away all defilements, in that Thou lovest mankind.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
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
            "text": "Standing now before the Master of all, O cherubim and seraphim, ye authorities, thrones, archangels, dominions and hosts, ye holy angels and most exalted principalities, ask remission offenses and correction of life for all who cry out with faith: Remember us in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Cast into the fire, ye utterly consumed the tinder of deception, O all-praised passion-bearers of Christ; and in the multitude of your blood ye drowned the serpent of the deep; and having won the victory, ye rejoice with the armies on high, praying earnestly that we be saved.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
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
            "text": "O Effulgence of the threefold Sun who shinest in the fullness of the world, dispelling the cruel passions of my soul: Send down the radiance of light and cleansing offenses unto me who now cry out with faith to Thee, the beginningless Father, the Son Who is co-enthroned with Him, and the Spirit. O Trinity, all-accomplishing Power, save us!",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 5"
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
            "text": "O pure one, have pity on me who ever sin and am greatly hindered by slothfulness, and reveal to me examples of repentance, granting compunction to my perplexed soul, O most pure unashamed hope. And remember us who hymn thee with love and cry out with: faith, O all-hymned Virgin.",
            "tier": 1,
            "src": {
              "file": "4-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
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
        "rubric": "On the Beatitudes, these Troparia, in Tone IV:",
        "items": [
          {
            "text": "Of old was Adam banished from paradise through the tree, but by the tree of the Cross hath the thief come to dwell in paradise: the one by tasting rejected the commandment of the Creator, but the other, crucified with Christ, confessed the hidden God, crying aloud: Remember me in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 1"
            },
            "label": "plain"
          },
          {
            "text": "O Word, Who accepted the weeping of Peter and the tears of the harlot, Thou didst also have compassion upon the publican, who only sighed, O Christ, in that Thou art full of tender compassion. O supremely good Lord, have mercy on me who ask for forgiveness of my transgressions, and deliver me from everlasting torment.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 2"
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
            "text": "O great Forerunner, who broke the bonds of infertility, release my lowly heart from its unfruitfulness, and by thy mediation make it bud forth virtuous deeds, whereby I may receive inexhaustible sustenance, crying out to Christ: Remember me, O Savior, when Thou comest in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 3"
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
            "text": "Broken by tortures, thrown to wild beasts for devouring, dismembered, cast into the depths of the sea, burned with fire and lacerated with sharp implements, O wise and all-glorious martyrs, ye did not reject God. Him do ye beseech, O saints, that He grant us peace, enlightenment and great mercy.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 4"
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
            "text": "O ye faithful, in oneness of mind let us all entreat the Father, the Son and the Holy Spirit, that we may glorify as is meet the Unity of the Godhead, Who existeth simply, without commingling, indivisibly and unapproachably, in three Hypostases; for thereby are we delivered from fiery torment.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 5"
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
            "text": "Having received in thy womb Him Who with the Father is without beginning and with the Holy Spirit is co-enthroned, in a manner transcending understanding and all telling thou hast given birth unto Him, Who became a man in His benevolence toward mankind, O Mary Bride of God, spacious habitation of our God. Him do thou earnestly beseech, that thy servants be saved.",
            "tier": 1,
            "src": {
              "file": "4-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 6"
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
        "rubric": "On the Beatitudes, these Troparia, in Tone IV:",
        "items": [
          {
            "text": "Of old was Adam banished from paradise through the tree, but by the tree of the Cross, the thief hath come to dwell in paradise: the one by tasting rejected the commandment of the Creator, but the other, crucified with Christ, confessed the hidden God, crying out: Remember me in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 1"
            },
            "label": "plain"
          },
          {
            "text": "Thou wast nailed to the Cross in Thy great goodness, O Christ; and Thou wast pierced in the side, pouring forth two fountains of remission. Unable to bear the sight of such audacity, the earth quaked, the stones split asunder, the sun was extinguished, and the mountains and hills trembled in fear of Thy might.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
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
            "text": "Setting aright the stumbling of our forefather, who of old stretched forth his hands unrestrainedly to the tree of knowledge, of Thine own will Thou wast stretched out and didst allow Thy hands to be nailed, O Long-suffering One, Who in Thy boundless goodness didst fashion us with Thy hands. Glory which passeth understanding be to Thy loving-kindness, O Word!",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
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
            "text": "O ye saints, who by the most radiant brilliance of your struggles rendered the earth heavenly, and thereby dispelled the darkness of vanity; are now deified by communion, and have come to dwell in the never- waning light, illumine ye with the light of understanding all who bless you as is meet.",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 4"
            },
            "label": "martyrs"
          },
          {
            "text": "We render praise, glory and worship to the all-accomplishing Trinity; and offering angelic hymnody to the beginningless Father, the Son and the Holy Spirit with thrice-holy voices, we utter the cry of the noble thief, chanting and exclaiming: Remember us in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "Seeing her Son and God willingly lifted up upon the Cross, weeping and marveling, the most pure one said to Him Who maketh all things beautiful: “Whither hath Thy comeliness gone, O Lord? How hath the ungrateful council repaid Thee for the good things Thou hast done? I hymn Thy goodness which passeth understanding!”",
            "tier": 1,
            "src": {
              "file": "4-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 6"
            },
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
        "rubric": "On the Beatitudes, these Troparia, in Tone IV:",
        "items": [
          {
            "text": "Of old Adam was banished from paradise through the tree, but by the tree of the Cross the thief hath come to dwell in paradise: the one by tasting rejected the commandment of the Creator, but the other, crucified with Christ, confessed the hidden God, crying out: Remember me in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 1"
            },
            "label": "plain"
          },
          {
            "text": "As reason-endowed members of the flock of the Lamb and Shepherd, O wise ones, ye were sent by Him like lambs into the midst of wolves to preach God; and ye transformed their savagery into meekness, so that with faith they cry out with steadfast intent: Remember us, O Savior, in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 2"
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
            "text": "Passing over the fullness of the earth, like radiant stars, O apostles of the Lord, ye loosed those darkened by deception and shone the light of salvation upon the deceived; wherefore, we call you blessed, O preachers of Christ, and ask: Ever pray to the Lord for us!",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 3"
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
            "text": "Consumed by material fire and slain, O wise and blessed ones, ye utterly consumed the tinder of bitter polytheism; and ye now pour forth streams of healings upon those who approach you with faith, and cry out fervently unto Christ, exclaiming: Remember us in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
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
            "text": "With unwavering resolve and sobriety of mind let us say unto Him Who in the highest is enthroned with the Father and the Spirit: O indivisible Trinity, Who in the beginning created all things by Thy word and enlightenest all: In Thy kingdom remember us who call upon Thee with faith!",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 5"
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
            "text": "Thou art truly the never-fading wreath of the passion-bearers, O Birthgiver of God, joy of the apostles, all-immaculate maiden. With them, O Lady, ask deliverance from transgressions and correction of life for us who petition thee with faith and cry out to thee: Rejoice, O thou who art most truly the treasury of good things!",
            "tier": 1,
            "src": {
              "file": "4-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "both_now"
          }
        ]
      },
      "prokeimenon": {
        "tone": 8,
        "text": {
          "text": "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.",
          "tier": 2,
          "src": {
            "file": "4-5.pdf",
            "locus": "Thursday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)"
          }
        },
        "verse": {
          "text": "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.",
          "tier": 2,
          "src": {
            "file": "4-5.pdf",
            "locus": "Thursday Liturgy prokeimenon verse — prints a * pointing mark absent from the 2-5/shared print (§5 divergence)"
          }
        }
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.thu.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.thu.communion"
      },
      "alleluia_note": "4-5 prints the same digit-zero artifact (\"0 Lord\") at the same verse as 2-5 AND 3-5 — three tones running, a per-print-site artifact pattern; normalized per §9.10 (scan review delivered); post-normalization the print byte-matches shared, so the ref stands."
    },
    "fri": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone IV:",
        "items": [
          {
            "text": "Of old Adam was banished from paradise through the tree, but by the tree of the Cross hath the thief come to dwell in paradise: the one by tasting rejected the commandment of the Creator, but the other, crucified with Christ, confessed the hidden God, crying aloud: Remember me in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 1"
            },
            "label": "plain"
          },
          {
            "text": "Beholding Thee stretched out upon the Cross, O only Long-suffering One, the hosts of heaven were at a loss and marveled; trembling, the earth quaked, O Lover of mankind, and the beauty of the heavenly lights was extinguished when Thou wast unjustly condemned; and Adam, who was condemned, was justified. I glorify Thy loving-kindness!",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 2"
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
            "text": "Lifted up on Golgotha, thou didst crush the head of the enemy; and having died on the Tree, O Master, Thou didst bring life to those who were slain by the fruit of the tree, and didst cause to dwell in paradise those who unceasingly glorify Thy goodness and cry aloud: Remember us in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
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
            "text": "Wielding the Cross as a weapon, O holy martyrs, with valiant resolve ye went forth to engage the foe; and having destroyed them, ye were crowned with a wreath of incorruption, and, rejoicing, have received higher glory, O right blessed ones; wherefore, we bless you with faith.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 4"
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
            "text": "That Thou mightest manifestly show us Thy loving-kindness toward us, Thou wast nailed to the Cross, O Savior Who art one with the Father and the Spirit; and Thou didst endure the sponge, the reed, mockery and stripes, desiring to deliver from everlasting fire those who cry: Remember us, O Savior, in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 5"
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
            "text": "He Who is everywhere infinite and unconfined by space made His abode within thy holy womb, O most pure Lady, Birthgiver of God; and, suspended upon the Tree, He clearly poured forth life upon the world. Him do thou beseech, that He mortify our carnal-mindedness, and that He save all, in that He is the Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 6"
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
        "ref": "shared.daily_liturgy_propers.fri.prokeimenon"
      },
      "alleluia": {
        "tone": 4,
        "text": {
          "text": "Remember Thy congregation which Thou hast purchased from the beginning.",
          "tier": 1,
          "src": {
            "file": "4-6.pdf",
            "locus": "Friday Liturgy Alleluia"
          }
        },
        "verses": [
          {
            "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
            "tier": 2,
            "src": {
              "file": "4-6.pdf",
              "locus": "Friday Liturgy Alleluia verse — \"ages,\" (the shared print: \"ages;\"; §5 divergence — 3-6 diverged at the SAME site the same way)"
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
        "rubric": "On the Beatitudes, these Troparia, in Tone IV:",
        "items": [
          {
            "text": "Of old Adam was banished From paradise through the tree, but by the tree of the Cross the thief hath come to dwell in paradise: the one by tasting rejected the commandment of the Creator, but the other, crucified with Christ, confessed the hidden God, crying out: Remember me in Thy kingdom!",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 1"
            },
            "label": "plain"
          },
          {
            "text": "Afire with the love of Christ, O holy martyrs, with the dew of your struggles ye quenched the fire of ungodliness; and ye were shown to be greatly radiant lamps of the Church, driving the darkness of infirmities and tribulations from our souls by your goodness; wherefore, we praise you as is meet.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
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
            "text": "O sacred hierarchs, ye divine company of the prophets, ye choir of the venerable, ye sole procession of holy women, who pleased God with virtuous acts and have been glorified: We bless you, praying through your supplications, that we may receive enlightenment and life everlasting.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Where Thy light shineth, and where the choirs of the saints rejoice, whence sighing and pain have fled, do Thou number Thy servants, who have reposed in times past and departed this most painful life, O Christ, that they may hymn Thine ineffable goodness; and overlook the transgressions they committed on earth.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 4"
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
            "text": "O indivisible Trinity, Who art worshipped in the Father, the Son and the Spirit, O Unity of three Hypostases, united in every way though with uncommingled characteristics: By the supplications of Thy holy martyrs, the fathers and the honorable prophets, grant rest unto those who have died in the Faith, and grant purification to their souls.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 5"
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
            "text": "Thou didst conceive the Word Whom the Father begot before the morning-star, and hast given birth, to Him in the flesh as a perfect man, known in two activities and wills, O most pure one. Wherefore, entreat Him as the Creator and Lord, that He have pity on us who hymn thee, O maiden Bride of God.",
            "tier": 1,
            "src": {
              "file": "4-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 6"
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
