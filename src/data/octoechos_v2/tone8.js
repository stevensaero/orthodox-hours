// src/data/octoechos_v2/tone8.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — Tone 8, DIFFERENTIAL scan (spec §11: templates assumed after
// the tone-3 verification, texts and per-tone facts captured fresh from the
// tone-8 chapters). THIS STEP: core §4.1 + Little Vespers + Great Vespers +
// Nocturns + Sunday Matins + Sunday Liturgy from 8-1.pdf (text layer CLEAN,
// scan July 8 2026); weekday sections merge in next.
//
// GENERATED from the raw pdftotext -layout text by paragraph-grammar walking
// (adapted tone-7 generators, July 8 2026) — nothing hand-retyped. Canonical
// §4.1 fields verified across ALL their print sites at generation. Psalm-verse
// fields whose print site is already encoded in shared.js are stored as {ref}
// — one print site, one encoding. Dynamically loaded only (§2.1).
// ─────────────────────────────────────────────────────────────────────────────

export default {
  "tone": 6,
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
    "text": "From on high didst Thou descend, O compassionate One; * to burial of three days hast Thou submitted * that Thou mightest free us from our passions. ** O our Life and Resurrection, O Lord, glory be to Thee.",
    "tier": 2,
    "src": {
      "file": "8-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (CANONICAL print, §9.5 convention)"
    },
    "provenance_note": "Verified WORD-identical at all four print sites (LV dismissal, GV no-vigil, Matins God-is-the-Lord, Liturgy); quotation-mark variance at: none; pointing (*/**): LV; word-level divergence: none. Canonical field stores the GV print per the §9.5 ruling."
  },
  "dismissal_theotokion": {
    "text": "O good One, Who for our sake wast born of the Virgin * and, having endured crucifixion, cast down death by death, * and as God revealed the Resurrection: * disdain not that which Thou hast fashioned with Thine own hand. * Show forth Thy love for mankind, O merciful One; * Accept the supplications of the Theotokos who bore Thee, ** and save Thy despairing people, O our Savior!",
    "tier": 2,
    "src": {
      "file": "8-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (verified identical at the Matins God-is-the-Lord site)"
    }
  },
  "kontakion": {
    "text": "Having risen from the tomb, Thou didst raise the dead and resurrect Adam, * Eve now danceth with joy at Thy Resurrection. * And all the ends of the earth keep festival at Thine arising from the dead, ** O greatly merciful One.",
    "tier": 2,
    "src": {
      "file": "8-1.pdf",
      "locus": "Sunday Matins after Ode VI (verified identical at the Liturgy site)"
    }
  },
  "ikos": {
    "text": "When Thou didst plunder the dominions of Hades and raise the dead, O longsuffering One, Thou didst meet the women bearing myrrh, bringing them joy instead of sorrow; and to Thine apostles Thou hast revealed the symbols of Thy victory, O my Savior and giver of life, Thou hast enlightened creation, O Lover of mankind. Therefore the world rejoiceth at Thine arising from the dead, O greatly merciful One.",
    "tier": 1,
    "src": {
      "file": "8-1.pdf",
      "locus": "Sunday Matins, after Ode VI"
    },
    "sourceLabel": "Ikos"
  },
  "little_vespers": {
    "rubric": "On “Lord, I have cried ...,” 4 Stichera:",
    "lic": [
      {
        "text": "We offer unto Thee, O Christ, * an evening hymn and spiritual worship; * because Thou wast well-pleased to have mercy on us ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 1"
        }
      },
      {
        "text": "We offer unto Thee, O Christ, * an evening hymn and spiritual worship; * because Thou wast well-pleased to have mercy on us ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 2"
        }
      },
      {
        "text": "O Lord, cast us not away * from Thy presence; * but be well-pleased to have mercy on us ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 3"
        }
      },
      {
        "text": "Rejoice holy Zion, * Mother of the Churches, * dwelling-place of God; * for it was thee who first received forgiveness of sins ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 4"
        }
      }
    ],
    "lic_verses": [
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC verse 1"
        }
      },
      {
        "text": "For with the Lord there is mercy, and with Him is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC verse 2"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC verse 3"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Little Vespers, LIC verse 4"
        }
      }
    ],
    "lic_theotokion": {
      "text": "How shall we call thee blessed, O Theotokos? How shall we hymn the unapproachable mystery of thy birthgiving, O all-blessed one? For the Creator of the ages and Fashioner of our nature, taking pity on His image, lowered Himself in an inscrutable self-abasement; and while He remained in the immaterial bosom of the Father, He made His abode in thy womb, O pure one, and immutably became flesh through thee, O thou who knewest not wedlock, remaining God by nature, as He was. Wherefore, we worship Him as perfect God and perfect man, One in dual form; for in Him there is truly a dual nature, and we all proclaim His essential characteristics to be of two kinds, according to His twofold essence, worshipping His two energies and wills. For, being one in essence with God the Father, of His own accord He willeth and acteth as God; and being of one essence with us, of His own accord He willeth and acteth as man. Him do thou entreat, O pure and most blessed one, that our souls be saved.",
      "tier": 1,
      "src": {
        "file": "8-1.pdf",
        "locus": "Little Vespers, LIC Glory/Both-now Theotokion"
      },
      "homoglyph_log": [
        {
          "from": "U+041E O (Cyrillic)",
          "to": "O",
          "count": 5
        }
      ]
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon",
      "rubric": "The Prokeimenon: “The Lord is King ...,” with its verses."
    },
    "aposticha": {
      "resurrection": [
        {
          "text": "O Jesus, having come down from heaven, * Thou didst ascend the Cross; * O immortal Life, Thou didst come to death; * the true Light, unto those in darkness; * the Resurrection unto all to those who had fallen. ** Our illumination and our Savior, glory be to Thee.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Little Vespers, aposticha Resurrection sticheron (as printed here — differs from the GV print, §2.2)"
          }
        }
      ],
      "theotokos": [
        {
          "text": "God, the Son begotten without time from the beginningless Father, * hath condescended to become man for the salvation of mortals * that He might now grant paradise to the first-formed man. * At the same time Thou, O Lord, hast redeemed all nature from the deceit of the serpent * and thus saved the fallen image. * As Thou art one Who art readily placated * Thou hast made Thy Mother the pure undefiled Mother of the Bridegroom, ** whom we have all gained as the anchor of our souls.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 1"
          }
        },
        {
          "text": "Thou didst hold within thy womb, * O thou blessed of God, * the incarnate Creator of all things, * as He refashioned mankind, * which through the serpent had once fallen by the transgression. * For thou hast given birth ineffably to our God in the flesh, * and through thy childbearing thou hast delivered from corruption * all creation which had grown old. * Therefore we praise and glorify thy grace, * O Virgin unwedded, ** we pray thee that we may be delivered from every punishment.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 2"
          }
        },
        {
          "text": "Reveal to us all the multitude of thy mercies * and the limitless ocean of thy loving-kindness, * by wiping away the sins of thy servants. * For as thou art the Theotokos, O all-immaculate one, * thou hast authority over all creation, * and by thy power thou mayest order all things as thou dost will; * for the grace of the Holy Spirit clearly dwelleth within thee * and with thee, dwelleth in all things eternally, ** O most blessed one.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 3"
          }
        }
      ],
      "theotokos_verses": {
        "ref": "shared.lv_theotokos_aposticha_verses"
      }
    },
    "aposticha_theotokion": {
      "text": "He Whom heaven could not contain found room within thy womb without being circumscribed, and thou didst remain pure through the ineffable word, thy virginity having in nowise been defiled. For thou, alone among women, wast both mother and virgin; and thou alone, alone, O all-pure one, didst give the Son, the Bestower of life, thy milk to drink, and didst hold the never-slumbering Eye in thine embrace. Yet as He was before time began, He did not leave the bosom of the Father, but being fully God with the angels above, below He was through thee wholly with men, yet everywhere present, in an ineffable manner. Him do thou entreat, O all-holy Lady, that those who in Orthodox manner confess thee to be the pure Theotokos may be saved.",
      "tier": 1,
      "src": {
        "file": "8-1.pdf",
        "locus": "Little Vespers, aposticha Theotokion"
      },
      "homoglyph_log": [
        {
          "from": "U+041E O (Cyrillic)",
          "to": "O",
          "count": 2
        }
      ]
    },
    "closing_rubric": "“Now lettest Thou Thy servant depart ...,” Trisagion. Then:",
    "dismissal_rubric": "Glory ..., Both now ..., Theotokion: [marked WITHOUT a printed text — §9.6: resolution is an assembly question (Fekula/Theotokia tables), not a data gap]"
  },
  "great_vespers": {
    "rubric": "On “Lord I have cried ...,” 10 Stichera: 7 Resurrection Stichera and 3 of the Saint of the day, or 4 and 6 if the Menaion service is of Polyeleos rank.",
    "lic": [
      {
        "text": "We offer unto Thee, O Christ, * an evening hymn and spiritual worship; * because Thou wast well-pleased to have mercy on us ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC sticheron 1"
        }
      },
      {
        "text": "O Lord, cast us not away * from Thy presence; * but be well-pleased to have mercy on us ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC sticheron 2"
        }
      },
      {
        "text": "Rejoice holy Zion, * Mother of the Churches, * dwelling-place of God; * for it was thee who first received forgiveness of sins ** through the Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC sticheron 3"
        }
      },
      {
        "text": "The Word, begotten of God the Father before all ages, * hath in the last times become incarnate of her who knew not wedlock, * and willingly endured the crucifixion and death, * and mankind, slain of old, hath thereby been saved ** through His own Resurrection.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC sticheron 4"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "We glorify Thy Resurrection from the dead, O Christ, * through which Thou hast freed the race of Adam from the tyranny of Hades, * and as God hast granted the world eternal life ** and great mercy.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC sticheron 5"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Glory be to Thee, O Christ Savior, * only-begotten Son of God, * affixed by nails to the Cross and risen from the tomb ** on the third day.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC sticheron 6"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "We glorify Thee, O Lord, * and we worship Thee, O all-powerful Savior, * who willingly endured the Cross for our sake; * cast us not away from Thy presence, * but hearken unto us and save us through Thy Resurrection, ** O only Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
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
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 1"
        }
      },
      {
        "text": "The righteous shall wait patiently for me * until Thou shalt reward me.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 2"
        }
      },
      {
        "text": "Out of the depths have I cried unto Thee, O Lord; * O Lord, hear my voice.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 3"
        }
      },
      {
        "text": "Let Thine ears be attentive * to the voice of my supplication.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 4"
        }
      },
      {
        "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 5"
        }
      },
      {
        "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, * my soul hath hoped in the Lord.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 6"
        }
      },
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
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
          "file": "8-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 1"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 2"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 3"
        }
      }
    ],
    "dogmatikon_rubric": "Glory from the Menaion, if appointed. Otherwise: Glory ..., Both now ..., Theotokion Dogmatic:",
    "dogmatikon": {
      "text": "In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!",
      "tier": 2,
      "src": {
        "file": "8-1.pdf",
        "locus": "Great Vespers, Glory/Both-now — Theotokion Dogmatic"
      },
      "sourceLabel": "Glory ..., Both now ..., Theotokion Dogmatic"
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon"
    },
    "aposticha": [
      {
        "text": "O Christ, having descended from heaven, * Thou didst ascend the Cross; * O immortal Life, Thou didst descend into Hades; * the true Light, unto those in darkness; * the Resurrection unto all those who had fallen. ** Our illumination and our Savior, glory be to Thee.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 1 (unversed)"
        }
      },
      {
        "text": "Let us glorify Christ who hath risen from the dead: * for having taken a body and a soul, * He parted them one from another by the Passion. * For His soul hath descended into Hades, * which He despoiled, while the holy body of the Redeemer of our souls ** knew not corruption in the tomb.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 2"
        }
      },
      {
        "text": "O Christ, in psalms and hymns we glorify Thy Resurrection from the dead. * For through it Thou hast freed us from the tyranny of Hades, ** and as God Thou hast granted us life eternal, ** and Thy great mercy.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 3"
        }
      },
      {
        "text": "Thou, O Master of all things, * art the incomprehensible Creator of heaven and earth, * by suffering the Cross Thou hast become for me the source of immortality. * Submitting to burial and arising in glory, * Thou hast raised Adam with Thyself by Thine all-powerful hand. * Glory to Thine arising on the third day, * through which Thou hast granted us eternal life and the forgiveness of sins, ** as Thou alone art lovingly compassionate.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 4"
        }
      }
    ],
    "aposticha_verses": {
      "ref": "shared.saturday_gv_aposticha_verses"
    },
    "aposticha_glory_rubric": "Glory from the Menaion, if appointed, otherwise:",
    "aposticha_theotokion": {
      "text": "O unwedded Virgin! * thou who ineffably conceived God in the flesh, * Mother of God Most High: * accept the supplications of thy servants, O all- immaculate one, * granting unto all cleansing of transgressions; * and, accepting now our supplications, ** pray thou that we all be saved.",
      "tier": 2,
      "src": {
        "file": "8-1.pdf",
        "locus": "Great Vespers, aposticha Theotokion — the REAL Saturday fallback (§4.3/§8)"
      }
    },
    "vigil_rubric": {
      "ref": "shared.theotokos_virgin_rejoice"
    },
    "no_vigil_rubric": "If a Vigil is not served, we chant (Once):"
  },
  "nocturns": {
    "frame_rubric": "The priest saith: “Blessed is our God ...,” and we say: Amen. Glory to Thee, our God, glory to Thee. O heavenly King ..., Trisagion through Our Father ..., Priest: For Thine is the kingdom ..., And we say: Amen. Lord, have mercy (12 times), Glory..., Both now..., O come, let us worship (Thrice). Psalm 50 (Have mercy on me, O God...)",
    "canon": {
      "title": "Canon to the Holy & Life-creating Trinity",
      "composer": "Metrophanes",
      "acrostic": "O Trinity and Unity, save me, Thy servant",
      "heading_rubric": "And then, the Canon to the Holy & Life-creating Trinity, the acrostic whereof is “O Trinity and Unity, save me, Thy servant,” the composition of Metrophanes, in Tone VIII:",
      "odes": {
        "1": {
          "irmos": {
            "text": "The wonderworking staff of Moses, * striking and dividing the sea in the figure of a cross, * once drowned pharaoh the pursuing charioteer, * while it saved the fleeing people of Israel * as they fled on foot, * chanting a hymn unto God.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 1 irmos"
            }
          },
          "items": [
            {
              "text": "Refrain: O most holy Trinity, our God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
              "text": "Chanting the Thrice-holy hymn, let us fall down before the three-Sunned King, the Arranger and Architect of all things, the good One Who is essentially One, the sole reigning God possessing the single glory of the Godhead.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Clearly remembering the divine and heavenly sayings of the prophets, we glorify the single divine Essence, eternal, equally without beginning, in three Hypostases: the Father, the Son and the Spirit: creative and omnipotent.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 3"
              },
              "label": "plain"
            },
            {
              "text": "As an initiate of the sacred mysteries, in a sacred manner Abraham of old, rejoicing, received God the Lord, the Creator of all, in three Persons, and recognized the single Dominion of the three Hypostases.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 4"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: For us thou hast given birth without wedlock unto Christ Who for our sake assumed our nature, O most pure one, and remained immutable in both. Him do thou unceasingly entreat, that He grant me deliverance from sins and temptations.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 5"
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
            "text": "O Christ fortify me on the rock of Thy commandments, * Thou Who in the beginning didst establish the heavens with understanding * and didst establish the earth upon the waters, * for there is none holy save Thee, O only Lover of mankind.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 3 irmos"
            }
          },
          "items": [
            {
              "text": "Isaiah beheld Thee, the unapproachable God and King of glory, seated on a lofty throne, and the cherubim and seraphim glorifying Thee, the one Godhead in three Hypostases, with unceasing hymns.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Through proper reasoning concerning the scriptural doctrines that pertain to the one Word, Who was begotten of the Father as from a Mind, and the Spirit Who ineffably proceedeth there-from, we honor the one three-sunned God.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 2"
              },
              "label": "plain"
            },
            {
              "text": "The Father, Who is unbegotten, and Who incorruptibly begat the Son, the effulgence of His essence, as Light from His own Light, issues forth through the procession of the commingled Light of the Spirit, Who is all-accomplishing and equal in honor.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: O Mary, Virgin and Mother, thou hast been revealed to be a pure temple for Christ Who omnipotently and most wisely created all things, placed them in order, and sustaineth them. By thy maternal supplications render Him merciful unto me.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 4"
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
              "text": "Lord, have mercy! (Thrice)",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 5"
              },
              "label": "plain"
            }
          ]
        },
        "4": {
          "irmos": {
            "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 4 irmos"
            }
          },
          "items": [
            {
              "text": "Revealed to those in darkness as the Dayspring of the Godhead, Thou didst dispel the dark night of the passions. The Sun of righteousness hath shone forth, singly according to essence, but thrice-radiantly as to Hypostases. Him do we ever hymn and glorify.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 1"
              },
              "label": "plain"
            },
            {
              "text": "The one Lord of Glory, Who is hymned by the mouths of the seraphim, and Whom we glorify in the Trinity, in His essence and Hypostases, with our mouths of clay, crying aloud: O King of all, grant Thy servants the forgiveness of their many transgressions!",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
              "text": "O adored and divine Trinity Who lovest mankind, Who sustaineth all things that exist, invisible, most compassionate and full of loving-kindness: Forget me not utterly, for I am Thy servant, neither annul the covenant Thou didst make with Thy servants, in Thine ineffable mercy.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: Finding thee alone to possess the beauty of Jacob from ages past, O all-pure one, the Word Who is wholly without beginning dwelt within thee in His tender compassion, and restored human nature. Him do thou unceasingly entreat, that I be delivered from all tribulation.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 4"
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
            "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 5 irmos"
            }
          },
          "items": [
            {
              "text": "We glorify the three equally eternal Hypostases, the one Lord, the divine Essence, distinguishing between and conjoining them simply; and we cry out with faith: O divine and holy Trinity, deliver Thy servants from tribulations!",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
              "text": "I bitterly lament the weakness of my mind, how, without desiring it, I truly suffer involuntary irrational tendencies; wherefore, I cry aloud: O Life-creating and Holy Trinity, cause me to stand among the good!",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 2"
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
              "text": "As Thou art supremely good, merciful, and the Lover of mankind, O divine and Holy Trinity, take pity on Thy servant, who am weighed down by the slumber of sin and plunged into a dream of death, and raise me up.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 3"
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
              "text": "Theotokion: O most pure, all-immaculate Virgin, Mother and maiden, who art full of the grace of God: By thy prayers render thy Son, Lord and God merciful unto me, and quickly deliver thy servant from transgressions and the passions.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 4"
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
            "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 6 irmos"
            }
          },
          "items": [
            {
              "text": "Emulating the ranks of the heavenly intelligences, O transcendent Trinity Who reignest over all, with our mouths of clay we glorify Thee with Thrice-holy hymns.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 1"
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
              "text": "I worship, honor, hymn and magnify Thee, God in three Hypostases, Who created man according to Thine image and most wisely formed everything out of nothingness.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O God almighty, Who alone art uncircumscribable, Thou three-sunned Master: Dwell Thou within me in Thine ineffable mercy, and illumine me and bring me to understanding, in that Thou art compassionate.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 3"
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
              "text": "Theotokion: Thou wast revealed to be a temple of God Whom no place can contain, O most pure one. By thine entreaties show me forth also as a temple of His divine grace, O most holy Lady, and preserve me unharmed.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 4"
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
              "text": "Lord, have mercy! (Thrice)",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 5"
              },
              "label": "plain"
            }
          ]
        },
        "7": {
          "irmos": {
            "text": "Once in Babylon the fire stood in awe * of God's condescension; * for which sake the youths in the furnace, * dancing with joyous steps as in a meadow, chanted: * O God of our fathers, blessed art Thou!",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 7 irmos"
            }
          },
          "items": [
            {
              "text": "In Thine ineffable wisdom and the abyss of Thy goodness, show me Thy servant to be freely receiving mercy; and now, as of old, deliver me from affliction, sins and the passions, O God, Trinity and Unity.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "O God Who alone reignest, Thou threefold Sun, the Father - the unbegotten Mind; and the Word - Who was begotten of Him; and the divine Spirit - Who proceedeth from Him unapproachably, unto Thee do I sing: Blessed is the God of our fathers!",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 2"
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
              "text": "Theotokion: Poisoned by the venom of sin, O most pure one, I have been slain; and I hasten with faith unto thee who hast given birth to the Author of life. By thy prayers give life to thy servant, and deliver me from temptations and the passions, O thou who alone art pure.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 3"
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
            "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 8 irmos"
            }
          },
          "items": [
            {
              "text": "O Thou who art Light never-waning, thrice-radiant, three-sunned, Who alone ruleth and reigneth, unapproachable God and ruling Lord: Enlighten my gloomy and darkened heart, and show it forth as luminous and full of light, that I may hymn and glorify Thee throughout all ages.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 1"
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
              "text": "The most divine seraphim reverently cover their faces and hands with their sacred wings, unable to bear the glory of Thine unapproachable beauty, O most holy, divine, ruling Trinity, Source of good; yet we also dare to hymn and glorify Thee with faith throughout the ages.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 2"
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
              "text": "The beginningless Dominion, the omnipotent, supremely good perfect Origin, the beneficent, boundless uncaused Cause, creative, eternal, providential and salvific for all, the Unity in essence and Trinity of Hypostases, with faith I glorify Thee my God, throughout the ages.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: The never-setting Sun shone forth on earth through thy virginal birthgiving, O most pure Lady, delivering mankind from the gloomy darkness of idolatry. Wherefore, enlighten me all the more with the rays of His Godhead, and preserve thy servant.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 4"
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
        "9": {
          "irmos": {
            "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 9 irmos"
            }
          },
          "items": [
            {
              "text": "Glorifying Thee now, the all-accomplishing Essence Who art beyond all beginning, reigning over all, the life-creating, compassionate, loving and good Trinity Who art above time and rulest alone, we ask forgiveness of sins, peace for the world, and oneness of mind for Thy Churches.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "O single Dominion in three Lights, Thou only three-sunned Godhead, accept those who offer Thee divine hymns, and deliver them from transgressions, temptations and evils; and in Thy love for mankind, quickly grant peace and unity to Thy Churches.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 2"
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
              "text": "Theotokion: O Christ my Savior, Who dwelt within the Virgin’s womb, Thou didst appear to Thy world as God and man, truly unchangeable and uncommingled; and Thou didst manifestly promise to abide with Thy servants forever.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 3"
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
    },
    "after_ode3": {
      "sessional": {
        "text": "O ye faithful, let us now praise the power of the three-sunned and adored Godhead, for by His hand alone He created all the choirs of the angels above and the sacred ranks of the Church below, that they might cry aloud: Holy, Holy, Holy art Thou, O supremely good God! Glory and hymnody be to Thy Dominion!",
        "tier": 1,
        "src": {
          "file": "8-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode III"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 2
          }
        ],
        "spec_mel": "That which was mystically commanded",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "O thou who hast given birth to the immutable God, * by thy maternal supplications * make steadfast my heart which is ever-changing due to sin, * slothfulness and the attacks of the deceiver; * that in thanksgiving I also may glorify thee O good one. * O all-immaculate Mary, Birthgiver of God, * have mercy on the flock ** which thou hast acquired.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode III"
        },
        "type": "theotokion"
      }
    },
    "after_ode6": {
      "sessional": {
        "text": "O ye faithful, let us truly hymn the beginningless Father, the Son Who is equally without beginning, and the divine Spirit: the Trinity simple, holy and conjoined without commingling, unchangeable and immutable; and let us cry aloud with the angels: Holy art Thou, O Father, Son and most holy and honorable Spirit! Have mercy upon those whom Thou hast created in Thine image, O Master!",
        "tier": 1,
        "src": {
          "file": "8-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode VI"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 3
          }
        ],
        "spec_mel": "That which was mystically commanded",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "We ever thank and magnify thee, O most pure Theotokos, * and bowing down, we hymn thy birthgiving and unceasingly cry aloud, * O thou who art Full of grace: do thou Save us, * O most merciful Virgin, * in that thou art good, do thou snatch us from the demons * at the hour of trial, and the dread sentence, ** that we, thy servants, may not be put to shame.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
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
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 1"
          }
        },
        {
          "text": "With divine songs let us all in godly manner hymn the Father, the Son and the Spirit divine, the Might in three Hypostases, the one Kingship and Dominion,",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 2 — \"in godly manner\" (no article) + \"the one KINGSHIP and Dominion\" (Kingship, as tone 7,; the print broke it across a line ('King- ship') — DE-HYPHENATED to 'Kingship' per Bill's ruling July 8 2026); 2-1/5-1 word-order side (§5 per-tone)"
          }
        },
        {
          "text": "Whom all mortals hymn and the hosts of heaven glorify, the essential Unity in three Hypostases, Who is worshipped with faith by all.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 3"
          }
        },
        {
          "text": "We magnify Thee, the Godhead, the Lord of the cherubim, the incomparable divine Origin of the seraphim, the indivisible Trinity in Unity.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 4"
          }
        },
        {
          "text": "I worship the beginningless God the Father, the Son Who is equally without beginning, and the Spirit. With hymns let us honor the one indivisible and unified Essence, the threefold Unity.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 5 — \"I worship the beginningless God the Father\" word order (§5 per-tone, as tone 7)"
          }
        },
        {
          "text": "Shine forth Thy dazzling lightning flashes upon me, O my God in three Hypostases, Thou Creator of all, and show me to be a splendid, luminous and immutable habitation of Thine unapproachable glory.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 6 — \"Thou Creator of all\" (shared \"Creator\"); \"immutable\" matches shared (§5 per-tone, as tone 7)"
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
          "text": "With fear let us glorify Christ the Bestower of life, Who became ineffably incarnate of the Virgin, for the cherubim tremble and quake before Him, and the angelic armies glorify Him.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 7 — \"Who became ineffably incarnate\" word order (shared \"ineffably became\"); \"of the Virgin\" matches shared (§5 per-tone, as tone 7)"
          }
        }
      ],
      "provenance_note": "RULED (Bill, July 8 2026): Gregory stored PER-TONE in every tone. 8-1 tracks the tone-7 byte-state (Kingship / immutable / of the Virgin) but prints \"Kingship\" (the source broke it across a line as \"King- ship\"; DE-HYPHENATED to \"Kingship\" per Bill’s ruling, July 8 2026). Divergences at stanzas 2, 5, 6, 7. Shared table remains the 2-1 print."
    },
    "closing_rubric": "The rest of Nocturnes, and the Dismissal."
  },
  "matins": {
    "god_is_lord_rubric": "At “God is The Lord ...,” the Resurrection Troparion, in Tone VIII: [troparion printed \"(Twice)\"] Glory ..., the Troparion from the Menaion, otherwise Glory ..., Both now ..., The Theotokion, in Tone VIII, (or in the Tone of that from the Menaion):",
    "sessionals": [
      {
        "rubric": "After the 1st chanting of the Psalter (Kathisma II), The Sessional Hymns of the Resurrection, in Tone VIII:",
        "items": [
          {
            "text": "Thou the Life of all, * didst rise from the dead, * and an angel of light cried out to the women saying: * “Cease your tears. Bring the good tidings unto the apostles.” * Cry aloud in hymns that Christ the Lord hath arisen ** who as God was well-pleased to save mankind.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "When Thou wast indeed risen from the tomb * Thou didst command the holy women to announce the Resurrection to the apostles, * as it is written; * and Peter, having arrived quickly, * stood by the grave and seeing the light in the tomb was affrightened. * observing the grave clothes lying therein, * without the divine body, * and believing he cried aloud: * “Glory be to Thee O Christ God our Savior, * Who hast saved us all, ** for Thou art the effulgence of the Father.”",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
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
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "Let us hymn the heavenly gate and ark, * the all-holy mountain, the cloud of light, the heavenly ladder, * the spiritual paradise, the redemption of Eve, * the great treasure of the world; * because salvation for the world and forgiveness of ancient offences were wrought in her. * Therefore we cry unto her: * Intercede with thine own Son and God to grant forgiveness offences ** to those who devoutly worship thy most holy Offspring.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Kathisma II, Glory/Both-now closer"
          },
          "type": "theotokion"
        }
      },
      {
        "rubric": "After the 2nd chanting of the Psalter (Kathisma III), The Sessional Hymns of the Resurrection, in Tone VIII:",
        "items": [
          {
            "text": "Mortals sealed Thy tomb, O Savior * and an angel rolled away the stone from the door, * and the women saw that Thou hadst arisen from the dead, * and announced the good tidings to Thy disciples in Zion: * “The Life of all hath risen and the bonds of death are loosed. ** O Lord, glory be to Thee.”",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "The women having brought sweet-smelling burial spices * heard an angel’s voice coming from the tomb: * “Cease thy tears, and bring joy instead of sorrow.” * Wherefore cry ye aloud in hymns that Christ the Lord is risen, ** who as God was well-pleased to save the race of mankind.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
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
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "In Thee, O Full of grace, * doth all creation rejoice, * the ranks of angels and the race of mankind; * O all-hallowed temple and spiritual paradise, * boast of Virgins. * For from thee God became incarnate * and He who is our God before the ages became a child. * He hath made thy womb a throne and rendered it wider than the heavens. * In thee, O Full of grace, doth all creation rejoice; ** glory be to thee.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
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
      "text": "The myrrh-bearing women standing at the tomb of the Giver of life * seeking the immortal Master among the dead; * and having received the glad tidings of joy from the angel * announced unto the apostles that Christ the Lord is risen, ** granting the world great mercy.",
      "tier": 2,
      "src": {
        "file": "8-1.pdf",
        "locus": "Sunday Matins, after the Evlogitaria"
      },
      "sourceLabel": "The Sessional Hymn"
    },
    "anabathmoi": [
      {
        "troparia": [
          {
            "text": "From my youth the enemy doth tempt me, * enflaming me with the desire for pleasures; ** but placing my trust in Thee O Lord, I put him to flight.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 1"
            }
          },
          {
            "text": "Let those that hate Zion, * become like grass before it is tilled; ** for Christ severeth their necks with the sharp blade of torments.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "By the Holy Spirit all things have life; * Light from Light, eminent God: ** we hymn Him together with the Father and the Word.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 1, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Let my humble heart be sheltered by the fear of Thee; * lest it fall away from Thee by being conceited, ** O exceedingly compassionate One.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 1"
            }
          },
          {
            "text": "He who hath his hope in the Lord * will not be afraid when the Lord judgeth all things ** with fire and torment.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "Everyone inspired by the Holy Spirit seeth and foretelleth all, * working the greatest wonders, * singing of one God in three Hypostases; * for though the Divinity radiates with triune light, ** it ruleth as One.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 2, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "I have cried unto Thee, O Lord, hearken unto me, * bend Thine ear to my supplications when I cry unto Thee, ** and do thou cleanse me before taking me from this life.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 1"
            }
          },
          {
            "text": "Each and every one who returneth to mother earth * will depart to receive torments or rewards ** in reward for their life’s actions.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "Contemplation of God by the Holy Spirit * is of a thrice-holy Unity; * for the Father is beginningless, * from Whom the Son was begotten before time, * and the Spirit equal in essence and majesty, ** doth blaze forth equally from the Father.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 3, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Behold, what is so good, what is so pleasant * as to see brothers dwelling together? * For by this the Lord hath promised eternal life.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 4, troparion 1"
            }
          },
          {
            "text": "The One who adorneth the lilies of the field * doth command us to be unconcerned ** over temporal things.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 4, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "By the Holy Spirit, * by one single cause all things gain the reward of peace; * for He is God perfectly consubstantial ** with both the Father and the Son.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 4, Glory/Both-now"
          }
        }
      }
    ],
    "prokeimenon": {
      "tone": 6,
      "text": {
        "text": "The Lord shall be King unto eternity; * thy God, O Zion, unto generation and generation.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Matins prokeimenon"
        }
      },
      "verse": {
        "text": "Praise the Lord, O my soul. I will praise the Lord in my life.",
        "tier": 1,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Matins prokeimenon verse"
        }
      }
    },
    "canon": {
      "title": "Resurrection Canon Tone VIII",
      "heading_rubric": "After which: “O God, save Thy people ...,” Then the Canons: Resurrection Canon Tone VIII.",
      "odes": {
        "1": {
          "irmos": {
            "text": "The wonderworking staff of Moses, * striking and dividing the sea in the figure of a cross, * once drowned pharaoh the pursuing charioteer, * while it saved the fleeing people of Israel * as they fled on foot, * chanting a hymn unto God.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 1 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "How can we not but marvel at Christ’s all-powerful divinity? To the faithful it poureth forth dispassion from his Passion, while from His holy side, it sheddeth forth a fount of incorruption, and from His tomb, eternal life.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 1"
                }
              },
              {
                "text": "How glorious the angel doth now appear to the women, wearing the luminous attributes of natural immaterial purity; for by his countenance he revealeth the radiance of the Resurrection as he crieth aloud, “The Lord hath been raised!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Glorious things have been spoken of thee in generation after generation, O Virgin Theotokos, who, while remaining pure, didst contain within thy womb God the Word. Wherefore, after God, we all honor thee as our protection.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "The gates of the Hades of suffering have been destroyed, and its gatekeepers tremble in fear upon seeing in the lowest depths the One who on high supra- naturally surpasseth the nature of all things.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 1"
                }
              },
              {
                "text": "The ranks of angels stood amazed when they saw mankind’s fallen nature, which had been held fast in the lowest depths, now seated upon the throne of the Father.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Mother without bridegroom, the ranks of angels and of mortal mankind sing thy praise without ceasing, for thou didst carry their Creator as an infant in thine arms.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "Immaculate Mother of God, who hast given birth beyond nature to the incarnate and eternal Word, we sing thy praises.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 1"
                }
              },
              {
                "text": "The Virgin hath given birth unto Thee, O Christ, the cluster of grapes from whence drippeth the life-bearing sweetness of the world’s salvation.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 2"
                }
              },
              {
                "text": "The race of Adam, having now been raised to blessedness beyond all telling, doth fittingly glorify thee, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "3": {
          "irmos": {
            "text": "O Christ fortify me on the rock of Thy commandments, * Thou who in the beginning didst establish the heavens with understanding * and didst establish the earth upon the waters, * for there is none holy save Thee, O only Lover of mankind.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 3 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The salvific Passion of Thy flesh, O Christ, hath justified Adam, who had been condemned by the taste of sin; for Thou, who alone art without sin, hast revealed that Thou didst remain uncondemned by the trial of death.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 1"
                }
              },
              {
                "text": "O Jesus my God, Thou hast made the light of the Resurrection to shine forth upon those that sit in the darkness and shadow of death, and by Thy divinity Thou hast bound the strong one and scattered his spoils.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou wast revealed to be higher than the cherubim and seraphim, O Theotokos, for thou alone hast received within thy womb, O undefiled one, God who is uncircumscribable; and so with hymns we believers ever call thee blessed.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "When of old I disobeyed Thy commandments, O Lord Who hath fashioned me, Thou didst reckon me a stranger; however having refashioned me and taught me obedience, Thou hast reconciled me to Thyself through the Crucifixion.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 1"
                }
              }
            ],
            "closer": {
              "text": "Having made thine abode within a Virgin, Thou O Lord, didst appear in the flesh to mankind, as befitted Thee to be seen. And Thou didst reveal her to be truly the Mother of God and the succor of believers, O only Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "Grant help unto me by thine intercessions, O all-pure one, by warding off the assaults of dreaded dangers.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 1"
                }
              },
              {
                "text": "When thou, O Theotokos, didst give birth to the Prince of life on behalf of all the world, Thou didst become the restoration of our foremother Eve.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 2"
                }
              },
              {
                "text": "By thy power grant me life, O all-pure one, who hath truly given birth to God in the flesh, the Hypostatic power of the Father.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "4": {
          "irmos": {
            "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 4 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "While I was hostile towards Thee, Thou didst love me exceedingly, for by a wondrous self-emptying, Thou didst descend to earth, O compassionate Savior, not spurning the indignity of the coarseness of my state, yet remaining in the height of Thine ineffable glory, whereby Thou hast glorified me who had hitherto existed in dishonor.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 1"
                }
              },
              {
                "text": "Who now doth not stand in awe, O Master, upon seeing death destroyed through Thy suffering, corruption taking flight through Thy Cross, and Hades emptied of its wealth through Thy death? These actions result from Thy lofty power, O Thou Crucified Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou art the boast of the faithful, O Mother unwedded, thou art the protection, thou art the refuge of Christians, their wall and safe harbor; for thou dost bring their supplications before thy Son, O all-immaculate one, and savest from dangers those who with faith and love acknowledge thee to be the pure Theotokos.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "The lawless and disobedient children nailed Thee to the Cross, O Lover of mankind, but in Thy compassion Thou hast, through it, saved those who glorify Thy sufferings.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 1"
                }
              },
              {
                "text": "By arising from the grave, Thou hast raised with Thee all the dead in Hades, and in Thy loving compassion Thou hast enlightened those who glorify Thy Resurrection.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Immaculate Mary, implore God whom thou didst bare to grant thy supplicants forgiveness of their offences.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "O Theotokos, thou art the un-ploughed land that brought forth the ear of corn which granteth life unto the world, do thou save those who sing thy praises.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 1"
                }
              },
              {
                "text": "All we who have been enlightened know thee, O all-pure one, to be the Mother of God, for thou, O ever-virgin, didst bear the Sun of righteousness.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 2"
                }
              },
              {
                "text": "Grant us the pardon of our offences, as thou alone art without sin, and grant peace unto thy world, O God, by the supplications of her who hath given birth to Thee.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "5": {
          "irmos": {
            "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 5 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "O Savior, Thou didst endure being wrapped in a cloak as Thou wast mocked before Thy Passion, thus covering the unsightly nakedness of the first-formed Adam, and being nailed to the Cross naked, Thou didst strip from Thyself, O Christ, the tunic of death.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 1"
                }
              },
              {
                "text": "Rising out of the dust of death, O Christ, Thou hast refashioned my fallen nature and rendered it incorrupt, revealing it as once again a princely image, radiating with the light of incorruption.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Having obtained a mother’s freedom of speech before thy Son, O all-pure one, we beseech thee to neglect not thy maternal care for us, for thee alone do we Christians present to the Master as a compassionate means of atonement.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "Guide us and grant us peace by the power of Thy Cross, O Christ, for by it we fall down before Thee, O Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 1"
                }
              },
              {
                "text": "O our God, guide the lives of us who sing the praises of Thine arising, and grant us peace, O only Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Mary, most pure and revered, who knew not wedlock, implore thy Son and our God to send down upon us the faithful, His great mercy.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "Calm the stormy tempest of my passions, O thou who hast given birth to God, my guide and my Lord.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 1"
                }
              },
              {
                "text": "The ranks of angels and the companies of mortals worship thine Offspring, O Immaculate Theotokos.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 2"
                }
              },
              {
                "text": "O Mary Theotokos thou who without bridegroom hast brought to naught the expectations of our enemies, bring joy to those who hymn thy praises.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "6": {
          "irmos": {
            "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 6 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Through a tree the author of evil hath mightily overthrown me, but raised upon a Cross, O Christ, Thou didst more mightily cast him down, confounding him, whilst raising me the one who had fallen.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 1"
                }
              },
              {
                "text": "When Thou didst shine forth from the grave, then didst Thou take pity on Zion, and in Thy compassion didst renew it by Thy divine Blood, and now O Christ, Thou dost reign over it as King forever.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "May we be delivered from grievous faults by thine intercessions, O pure Birthgiver of God, and may we receive the divine radiance of the Son of God, who ineffably became incarnate from thee.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "Thou didst stretch forth Thy hands upon the Cross, thus healing the hand of Adam the first-formed, which he so greedily stretched forth in Eden, and instead of the bitter tree, O Christ, Thou didst taste gall, and as All-powerful, Thou dost save those who glorify Thy sufferings.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 1"
                }
              },
              {
                "text": "The Redeemer tasted of the ancient sentence of death that He might abolish the palace of corruption, and when He had visited those in Hades, He saved, as one all-powerful, those who hymn the praises of His Resurrection.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Cease not to intercede for us, O Most holy Virgin Theotokos, support of the faithful, for by our trust in thee we are made strong, therefore with love we glorify thee and Him who from thee ineffably assumed flesh.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "O Theotokos, we the faithful proclaim thee to be the temple and ark, the living Bridal Chamber of God, and the gate of heaven.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 1"
                }
              },
              {
                "text": "Mary, bride of God, thine Offspring, Who hath become the destroyer of wooden idols, is worshipped together with the Father and the Spirit.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 2"
                }
              },
              {
                "text": "The Word of God revealed thee to mortal mankind to be a heavenly ladder, for through thee He descended to us.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "7": {
          "irmos": {
            "text": "Once in Babylon the fire stood in awe * of God's condescension; * for which sake the youths in the furnace, * dancing with joyous steps as in a meadow, chanted: * O God of our fathers, blessed art Thou!",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 7 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Thy glorious self-emptying, constituting the divine wealth of Thy poverty, O Christ, amazed the angels when they saw Thee nailed to the Cross, saving those who with faith cry aloud; “O God of our fathers, blessed art Thou!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 1"
                }
              },
              {
                "text": "Upon Thy divine descent the regions beneath the earth were filled with light, and the darkness which previously pursued those therein, was driven out. Therefore the prisoners from every age arose, crying aloud; “O God of our fathers, blessed art Thou!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Speaking of God with Orthodox belief, we proclaim Thee O Lord of all, to be Father of the one only-begotten Son, and we know only one right Spirit Who proceedeth from Thee, consubstantial and co-eternal.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Sunday Matins canon, Ode 7, resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "Glory to the Father, Son and Holy Spirit, the Lord.",
              "sourceLabel": "Trinitarian"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Thou hast wrought salvation in the midst of the inhabited world, O God, as the prophet said, for lifted up upon the Tree, Thou hast called back all those who cry out to Thee with faith; “O God of our fathers, blessed art Thou!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Rising from the tomb as from sleep, O compassionate Lord, Thou hast raised the world with Thee, while creation, through the apostles’ preaching of Thine arising, hath been persuaded to cry to Thee; “Blessed art Thou O God of our fathers!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Equal in action, and equal in power and co-eternal with His Begetter, the Word is fashioned in the womb of the Virgin by the good pleasure of the Father through the activity of the Spirit; “Blessed art Thou O God of our fathers!”",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Sunday Matins canon, Ode 7, cross_resurrection closer"
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
                "text": "For our salvation Thou didst appear incarnate from a virginal womb, and knowing Thy Mother to be the one who gave birth to God, we cry with thanksgiving; “Blessed art Thou O God of our fathers!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 1"
                }
              },
              {
                "text": "O Virgin, thou art the most blessed rod from Jesse’s root, blossoming with a salvific fruit for those who with faith cry to thy Son; “Blessed art Thou O God of our fathers!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 2"
                }
              },
              {
                "text": "O Hypostatic Wisdom of the Most High, through the Theotokos fill with wisdom and divine power all those who sing to Thee in faith; “Blessed art Thou O God of our fathers!”",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "8": {
          "irmos": {
            "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 8 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "In a manner befitting God, the supreme divine power of Jesus’ divinity hath shone forth in our nature: for having tasted of death in the flesh upon the Cross for the sake of all, He hath abolished the strength of Hades. Without ceasing; Ye children bless, ye priests praise, ye people, supremely exalt Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 1"
                }
              },
              {
                "text": "The crucified One hath arisen, the boastful One hath fallen, the fallen and crushed have been set upright, corruption hath been banished and incorruption hath blossomed forth; for mortality hath been swallowed up by life; Ye children bless, ye priests praise, ye people, supremely exalt Him throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "The Godhead of triune Light, the single radiance shining forth from one three-Hypostatic nature, the Begetter without beginning, the Word of the Father, one with Him in Nature and Kingship, and the consubstantial Spirit; Ye children bless, ye priests praise, ye people, supremely exalt Him throughout all ages.”",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Sunday Matins canon, Ode 8, resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "Glory to the Father, Son and Holy Spirit, the Lord.",
              "sourceLabel": "Trinitarian"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Unto the Lord Who, stripped naked, hath stretched out His hands upon the Tree for me, unto Him who doth call me and warm me with his noble nakedness, do all ye works of the Lord bless, and supremely exalt throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 1"
                }
              },
              {
                "text": "The Lord Who hath raised me the fallen one, out of the lowest pits of Hades, and honored me with the high-throned glory of His Begetter, do all ye works of the Lord, bless, and supremely exalt throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thou didst appear as a daughter of fallen Adam, but also as the Mother of the God who hath renewed my nature. Therefore all we His works sing His praises as Lord and supremely exalt throughout the ages.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Sunday Matins canon, Ode 8, cross_resurrection closer"
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
                "text": "Do thou quench the seductive and fiery darts of those who are our enemies, that we may hymn thee, O pure maiden, throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 1"
                }
              },
              {
                "text": "In a manner surpassing nature, O Virgin, thou hast given birth to God the Word, the Creator and Savior; therefore we hymn thee throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 2"
                }
              },
              {
                "text": "The unapproachable Light, Who made His abode within thee, O Virgin, hath shown thee to be a radiant golden lamp throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "After the Troparia from the Menaion for ODE VIII, we chant:"
        },
        "9": {
          "irmos": {
            "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
            "tier": 2,
            "src": {
              "file": "8-1.pdf",
              "locus": "Sunday Matins canon, Ode 9 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Begotten simply in Thy divine nature which is without beginning, Thou didst become compound in nature by assuming flesh, giving it essence in Thyself, O Word of God, and enduring the Passion as a man, Thou didst remain beyond suffering as God, wherefore we magnify Thee in two natures inseparable and uncommingled.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 1"
                }
              },
              {
                "text": "In accordance with Thy divine nature, O Most High, Thou didst address God as Thy Father when Thou didst descend to Thy servants and become man; and having risen from the dead Thou didst make Him who is by nature God and Master, Father by grace, of those born of earth, wherefore we magnify Thee together with Him.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "When thou didst give birth in the body in a manner surpassing nature to the good Word, Who came forth from the Father’s own essence before all ages, as He alone is Good, thou O Virgin was revealed as the Mother of God. Him we now comprehend to be beyond the nature of flesh, even though He is clothed in a natural body.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
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
                "text": "We know that Thou art the Son of God by nature, conceived in the womb of the Theotokos, and that Thou didst become man for our sake, and, as we behold Thee hanging upon the Cross, we understand that Thou didst suffer in Thy human nature, yet as God Thou didst remain untouched by suffering.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Murky darkness hath been abolished, for from Hades Christ, the Sun of righteousness, hath dawned enlightening all the ends of the earth, radiant with the rays of his divinity, man from heaven, God on earth, whom we magnify in two natures.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Bend Thy bow, prosper and reign, O Son of the Theotokos, subdue the people of Ishmael who war against us, and grant unto all Orthodox Christians the Cross as an invincible weapon, and trophy of peace.",
              "tier": 1,
              "src": {
                "file": "8-1.pdf",
                "locus": "Sunday Matins canon, Ode 9, cross_resurrection closer"
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
                "text": "We are filled with joy and gladness at the thought of thee, overflowing with healing for those who approach thee and devoutly proclaim thee to be the Mother of God.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 1"
                }
              },
              {
                "text": "With psalms we sing thy praises, O thou who art Full of grace, and never silent, we ceaselessly offer thee our praises; for thou art a fount of rejoicing for all.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 2"
                }
              },
              {
                "text": "Fair is thy Fruit, O Theotokos, for those who partake of it, it is incorruption, and for those who magnify thee with faith, it is life.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
      "rubric": "On the Praises: “Let every breath ...,” 8 Stichera of the Resurrection, however, if the service from the Menaion is ‘feasted’ sing the first 4 Stichera from the Resurrection, and the last 4 from the Menaion, with the appointed verses.",
      "stichera": [
        {
          "text": "O Lord, though Thou didst stand before the judgment seat * being judged by Pilate, * yet Thou wast seated with the Father * and was not absent from Thy throne. * And risen from the dead Thou hast freed the world from slavery to the stranger, ** as Thou art full of compassionate pity and love for mankind.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 1"
          }
        },
        {
          "text": "O Lord, the Jews laid Thee as a corpse in a grave, * and soldiers guarded Thee as a sleeping king * sealing Thee with a seal as if a treasury of life; * but Thou didst arise ** and grant incorruption to our souls.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 2"
          }
        },
        {
          "text": "O Lord, Thou hast given us Thy Cross as a weapon against the devil; * for he doth quake and tremble, unable to contemplate Thy power; * for Thou didst raise the dead and abolish death: ** Wherefore we worship Thy burial and Thy rising.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 3"
          }
        },
        {
          "text": "Thine angel, O Lord, having proclaimed Thy Resurrection, * filled the guards with fear, * but he cried unto the women saying: “Why seek ye the living among the dead? * Being God He is risen ** granting life to the whole world.”",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 4"
          }
        },
        {
          "text": "Thou didst endure the Cross, * O Thou who art impassible in Thy divinity, * to free us from slavery to the enemy * and Thou didst accept burial for three days, * making us immortal, * and granting life unto us through Thy Resurrection, ** O Christ God, Lover of mankind.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 5"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "O Christ, I worship, I glorify, and I praise Thy Resurrection from the tomb, * through which Thou hast delivered us from the unbreakable bonds of Hades ** and as God hast granted the world eternal life and great mercy.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 6"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "The lawless men, watching over Thy grave * which had received Life, sealed it; * but Thou, as the immortal and all-powerful God, ** arose on the third day.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 7"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "When Thou didst enter the gates of Hades, O Lord, * and didst shatter them, the prisoners therein cried aloud: * “Who is this?, for He hath not been condemned to the lowest parts of the earth, * but hath torn down the prisons of death as if a tent, * we received Him as One mortal, and we tremble before Him as God.” ** O all-powerful Savior have mercy on us.",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
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
        "text": "Thou art most blessed, O Virgin Theotokos, * for through Him who took flesh from thee, Hades hath been captured, * Adam recalled, the curse slain, Eve set free, * death put to death, and we have been given life. * Therefore in praise we cry: ** Blessed art thou, O Christ our God, who hast been thus well-pleased, glory be to Thee.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Matins, Praises Both-now Theotokion"
        }
      }
    },
    "doxology_troparion": {
      "text": "Having risen from the tomb, and having burst the bonds of Hades, * Thou hast destroyed the sentence of death, O Lord, * delivering all from the snares of the enemy. * Manifesting Thyself to Thine apostles, Thou didst send them forth to preach; * and through them hast granted Thy peace to the world, ** O Thou Who alone art greatly merciful.",
      "tier": 2,
      "src": {
        "file": "8-1.pdf",
        "locus": "Sunday Matins, troparion after the Great Doxology"
      }
    }
  },
  "liturgy": {
    "beatitudes": {
      "rubric": "Typika and Beatitudes.",
      "troparia": [
        {
          "text": "Remember us, O Christ, Thou Savior of the world, as Thou didst remember the thief upon the Cross; and deem us all worthy of Thy heavenly kingdom, O Thou Who alone art compassionate.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 1"
          }
        },
        {
          "text": "Hearken, O Adam, and rejoice with Eve; for He who of old stripped you both naked, and by deception hath taken all of us captive, hath been set at naught by the Cross of Christ.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 2"
          }
        },
        {
          "text": "Nailed of Thine own will to the Tree, O our Savior, Thou didst deliver Adam from the curse which came through the tree, and hast rewarded that which is in Thine image with a dwelling in paradise, in that Thou art compassionate.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 3"
          }
        },
        {
          "text": "Today is Christ risen from the tomb, granting incorruption unto all the faithful; renewing the joy of the myrrh-bearing women after His suffering and Resurrection.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 4"
          }
        },
        {
          "text": "Girded with power Thou didst ascend the Cross and wrestle with the tyrant, and as God didst hurl him from on high; but Adam hast Thou raised up with Thine invincible hand.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 5"
          }
        },
        {
          "text": "Rejoice, O wise myrrh-bearing women, who were first to behold the resurrection of Christ, and who proclaimed to the apostles the glad tidings of the restoration of the whole world!",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 6"
          }
        }
      ],
      "gloria": {
        "text": "O ye apostles, who are manifestly the friends of Christ and are to be enthroned with Him in glory: entreat Him with boldness, that He intercede for us, for ye are His disciples.",
        "tier": 1,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Gloria (Triadicon — final pre-Theotokion item)"
        }
      },
      "theotokion": {
        "text": "Thy pure womb, O Theotokos, hath been declared the dwelling- place of the unapproachable Godhead; upon which without fear the hosts of heaven dare not gaze, wherefore we cry unto thee; Rejoice thou who barest Him who gives life unto all.",
        "tier": 1,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Theotokion"
        },
        "sourceLabel": "Theotokion"
      }
    },
    "prokeimenon": {
      "tone": 6,
      "text": {
        "text": "Make your vows * and pay them to the Lord our God.",
        "tier": 2,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Liturgy prokeimenon"
        }
      },
      "verse": {
        "text": "In Judea is God known; His name is great in Israel.",
        "tier": 1,
        "src": {
          "file": "8-1.pdf",
          "locus": "Sunday Liturgy prokeimenon verse"
        }
      }
    },
    "alleluia": {
      "tone": 6,
      "verses": [
        {
          "text": "Come, let us rejoice in the Lord; let us shout with jubilation unto God our Savior.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy Alleluia"
          }
        },
        {
          "text": "Let us come before His countenance with thanksgiving, and with psalms let us shout in jubilation unto Him.",
          "tier": 1,
          "src": {
            "file": "8-1.pdf",
            "locus": "Sunday Liturgy Alleluia verse 2"
          }
        }
      ]
    }
  },
  "vespers_weekday": {
    "sun": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone VIII: Spec. Mel.: “O Lord, though Thou didst stand forth before the tribunal ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O Lord Who camest into the world to call sinners to Thee, and Who accepted the thief, the publican and the harlot: In Thy love for mankind, O my Christ, call me also to Thee, though I have sinned against Thee more than all others, and never repent.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O Lord, though Thou didst stand forth before the tribunal"
          },
          {
            "text": "O Lord, Who ordained publicans as pastors for Thy Church, and made a helper now of him who before was a persecutor: By their supplications show me to be Thy lamb, O Savior, and let me not, who am useless, fall prey to the alien one.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O Lord, though Thou didst stand forth before the tribunal"
          },
          {
            "text": "Weep before the end, O my wretched and most vile soul, and cleave unto God, crying out to him with groans from the depths of thy heart: I have sinned against Thee, O Christ! Revile me not, I pray, but turning me back to Thee, grant me forgiveness, in that Thou art merciful.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
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
            "spec_mel": "O Lord, though Thou didst stand forth before the tribunal"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "8-2.pdf",
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
              "file": "8-2.pdf",
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
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy incorporeal angels, in the same melody:",
        "menaion_fallback": [
          {
            "text": "O Lord, the councils of the incorporeal beings unceasingly glorify Thee, delighting in Thy beauty and ineffable comeliness, richly illumined by the light of the threefold Sun. By their prayers and intercession, O Savior, save Thou our souls.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
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
            "text": "O Lord, by Thine omnipotent word and Thy most holy Spirit Thou didst arrange the harmonious choirs of the angels, imparting effulgence to them with never-waning rays. By their prayers and intercession, O Savior, save Thou our souls.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 2"
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
            "text": "O Lord, the seraphim hymn Thee, and the authorities, angels, and principalities, the dominions, thrones and powers, the archangels and the dread cherubim offer Thee praise. By their prayers and intercession, O Savior, save Thou our souls.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 3"
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
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "8-2.pdf",
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
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "I, a created being, ever offend the Creator and move Him to anger. Grant me correction, O maiden, first conciliating Him; and with thy help raise me up to pleasing works, that I may receive salvation and remission.",
        "tier": 1,
        "src": {
          "file": "8-2.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone VIII",
        "items": [
          {
            "text": "The angels unceasingly hymn Thee, the King and Master; and I fall down before Thee, crying like the publican: Cleanse me, O God, and have mercy upon me!",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 1"
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
            "text": "As thou art immortal, O my soul, let not the waves of life cover thee, but rise up, crying out to thy Benefactor: Cleanse me, O God, and save me!",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 2"
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
            "text": "O martyrs of the Lord, ye sanctify every place and heal every infirmity. Pray ye now, that our souls be delivered from the snares of the enemy, we beseech you.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
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
        "text": "Taking up the cry of the Archangel Gabriel, let us say: * Rejoice, O Mother of God, * who hast given birth unto Christ, ** the bestower of life upon the world!",
        "tier": 2,
        "src": {
          "file": "8-2.pdf",
          "locus": "Sunday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. ON SUNDAY NIGHT: TONE VIII AT COMPLINE Canon of supplication to the most holy Theotokos"
    },
    "mon": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone VIII: Spec. Mel.: “O most glorious wonder ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "I have acquired neither compunction, * nor a wellspring of tears, * nor fervent confession, * nor weeping which washeth me clean, nor humility of heart; * I have been neither an emulator of the publican, * nor of the harlot, nor of the prodigal son. * How, therefore, shall I find remission for my many sins? * But in the judgments which Thou knowest, ** save me, O Christ.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O most glorious wonder"
          },
          {
            "text": "I have made myself a stranger * to every commandment of God; * in every way I have neglected higher virtue; * mindlessly wasting my whole life in slothfulness; * and I have committed * every unseemly and iniquitous act * in fornication. * Wherefore, since Thou art compassionate O Christ, ** have pity, and freely save me.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O most glorious wonder"
          },
          {
            "text": "In Thine anger rebuke me not * who am the work of Thy hands, * and who with my foolish mind * have torn myself away from goodness, O Lover of mankind, * and Who in the abyss of Thine ineffable compassion * wast for my sake well-pleased to become like unto me. * But through the supplications of Thine Ever-virgin Mother, O Word, * grant me divine conversion, ** in that Thou art God.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
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
            "spec_mel": "O most glorious wonder"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 1"
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
              "file": "8-3.pdf",
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
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy forerunner, in the same melody:",
        "menaion_fallback": [
          {
            "text": "O blessed Forerunner John, * with love ever return my lowly soul * to the Lord, * and by thy sacred mediations * quench for me the fire of pleasures, * guiding me to the fulfillment * of the precepts of God, * and truly cleansing the senses of my heart, ** that I may glorify thee.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
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
            "text": "O all-praised Forerunner John, * thou offspring of a barren woman, * pure orchard of the Master * and adornment of mankind, * divine preserver of my lowly soul: * By thy prayers and aid * grant me readiness to forgive, * delivering me from the wiles of the serpent ** and his wicked treachery and attacks.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 2"
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
            "text": "Wholly delightful and full of divine bliss, * O ever-glorious one, * thou hast gladdened all * who come to thee with faith, * delighting the senses of our souls and bodies, * ever releasing us from infirmities * and tribulations, * from the assaults of evil, ** and soul-corrupting pleasures.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
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
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
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
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "With faith I hasten to thy protection, * O pure Birthgiver of God. * Save me from perils and misfortunes, * from the confusion of the passions and the malice of the demons. * For, possessed of an abyss of mercy, * thou hast been shown to be a mediatress of salvation, * O Lady who hast given birth to the only merciful, * all-compassionate and abundantly kind-hearted God.",
        "tier": 2,
        "src": {
          "file": "8-3.pdf",
          "locus": "Monday-evening Vespers, LIC Glory/Both-now closer"
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
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.mon",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone IV:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone VIII:",
        "items": [
          {
            "text": "The angels unceasingly hymn Thee, the King and Master; and I fall down before Thee, crying like the publican: Cleanse me, O God, and have mercy upon me!",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 1"
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
            "text": "As thou art immortal, O my soul, let not the waves of life engulf thee, but rise up, crying out to thy Benefactor: Cleanse me, O God, and save me!",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 2"
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
            "text": "O martyrs of the Lord, entreat ye our God, and ask for our souls a multitude of compassions and the cleansing of our many transgressions, we beseech you.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 3"
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
        "text": "Rejoice, thou praise of the universe! * Rejoice, temple of the Lord! * Rejoice, mountain overshadowed! * Rejoice, refuge of all! * Rejoice, golden candlestick! * Rejoice, honored glory of the Orthodox! * Rejoice, Mary, Mother of Christ God! * Rejoice, paradise! Rejoice, divine table! * Rejoice, tabernacle! Rejoice, golden jar! ** Rejoice, thou hope of all!",
        "tier": 2,
        "src": {
          "file": "8-3.pdf",
          "locus": "Monday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "tue": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone VIII: Spec. Mel.: “The martyrs of the Lord ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "When Thou wast nailed to the Cross, Thy hands and feet run through, Thy holy side was pierced, pouring forth drops of blood and water, our divine salvation, O supremely good One, that Thou mightest wash away my defilement and pollution. Glory to Thy goodness, O all-Compassionate One!",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
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
            "spec_mel": "The martyrs of the Lord"
          },
          {
            "text": "Thou didst endure suffering, O Master, that Thou mightest bestow dispassion upon all who worship Thy sufferings and voluntary sacrifice: the spear, nails and reed, which Thou didst willingly endure with long-suffering: that for the sake of Thy sufferings, O Lord, Thou mightest win dispassion for me.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
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
            "spec_mel": "The martyrs of the Lord"
          },
          {
            "text": "The unblemished heifer, beholding her Bullock willingly lifted up upon the Tree, cried out with compunction, lamenting: “Woe is me, O my most beloved Child! How hath the ungrateful assembly of the Jews rewarded Thee, desiring to leave me bereft of Thee, O all-Beloved!”",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "The martyrs of the Lord"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "8-4.pdf",
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
              "file": "8-4.pdf",
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
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in Tone VIII:",
        "menaion_fallback": [
          {
            "text": "“I cannot bear to see Thee Who givest wakefulness to all, asleep upon the Tree, that Thou mightest give divine and saving watchfulness to those who have fallen into pernicious sleep through the fruit of disobedience!”, said the Virgin, whom we magnify, weeping.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "label": "plain"
          },
          {
            "text": "“The unrighteous council lifted Thee the Lamb Who taketh away the sins of the world up upon the Cross, and they pierced Thy side with a spear, and ran Thy hands and feet through with nails, O Long- suffering One. O the wicked savagery! O the audacity!”, cried the most pure one, weeping with compunction.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 2"
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
            "text": "“What is this thing that I now behold, O Master? Thou Who most wondrously holdeth all creation in the palm of Thy hand art suspended unjustly upon the Tree as a lamb, O Word of God, hung there by disobedient servants. O the patience! O Thy goodness, O Compassionate One!”, the most immaculate one said, weeping.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 5
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
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "8-4.pdf",
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
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "When the most pure one beheld Thee led to the slaughter, * following Thee with tears she cried aloud: * Whither hast Thou gone, O my Son,? * I can no longer bear not beholding Thee ** O my abundantly merciful Jesus.'",
        "tier": 2,
        "src": {
          "file": "8-4.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone VIII:",
        "items": [
          {
            "text": "O Christ God Who wast lifted up upon the Cross, Thou didst save the race of mankind. We glorify Thy sufferings!",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 1"
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
            "text": "Thou wast nailed to the Cross, O Christ God, and opened the gates of paradise. We glorify Thy divinity!",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 2"
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
            "text": "Thy martyrs, O Lord, putting aside the things of life, ignored their tortures for the sake of the life which is to come, and were shown to be inheritors thereof; wherefore, they rejoice with the angels. By their supplications grant great mercy to Thy people.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 3"
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
            "text": "Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, * until He take pity on us.",
            "tier": 2,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers aposticha verse 1 (byte-matches shared; stored with its per-tone partner)"
            }
          },
          {
            "text": "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. Greatly hath our soul been filled therewith; let reproach come upon them, that prosper, * and abasement on the proud.",
            "tier": 2,
            "src": {
              "file": "8-4.pdf",
              "locus": "Tuesday-evening Vespers aposticha verse 2 — DROPS the comma shared prints (\"them that\" for \"them, that\"); §5 per-tone"
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
        "text": "O Lord, when the sun beheld Thee * the Sun of righteousness, hanging upon the Tree, * it hid its rays, and the light of the moon was changed to darkness; * and Thine all-immaculate Mother ** was pierced in the depths of her soul.",
        "tier": 2,
        "src": {
          "file": "8-4.pdf",
          "locus": "Tuesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "spec_mel": "O Lord, though Thou didst stand forth before the tribunal",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. ON TUESDAY NIGHT: TONE VIII AT COMPLINE Canon of supplication to the most holy Theotokos"
    },
    "wed": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the holy apostles, in Tone VIII: Spec. Mel.: “O Lord, though Thou didst stand ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O Lord, Thou didst enlighten Thine apostles with the beams of the Comforter, with the noetic radiance of the knowledge of Thee setting them as beacons unto the confirmation of the Faith, O Master; wherefore, we bow down before Thine ineffable love for mankind.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O Lord, though Thou didst stand"
          },
          {
            "text": "By the supplications of Thine apostles, O Lord, Thou hast protected this Thy flock, preserving it unharmed by the temptations of the enemy; for with Thy precious blood Thou didst redeem it from enslavement to the enemy, in that Thou art compassionate and the Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O Lord, though Thou didst stand"
          },
          {
            "text": "Together ye were shown to be like precious stones set in the foundation of the Church, with radiant brilliance shining forth upon the whole world the knowledge of God, O divine apostles, who stand before the Trinity and pray for our souls.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O Lord, though Thou didst stand"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "8-5.pdf",
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
              "file": "8-5.pdf",
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
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy hierarch Nicholas, the wonderworker, in Tone VIII:",
        "menaion_fallback": [
          {
            "text": "O Lord, Thou hast glorified thine honored and holy hierarch Nicholas to the ends of the earth, imparting to him the grace of miracles; and Thou didst show him to be the champion of those in grievous misfortunes, and those who have fallen into tribulations and afflictions, and who ever ask his help.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
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
            "text": "O Lord, have pity on Thy servants through the divine entreaties of Thy holy hierarch, and free us from all misfortune, all affliction, and every attack, for with faith do we bow down before Thine invincible might.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
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
            "text": "Having thee as an intercessor and fervent ally before the Master, O Nicholas, we flee to thee with faith, and cry: Turn us not away empty of thy protection, but show that thy loving-kindness extends to thy servants.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
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
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "8-5.pdf",
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
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Behold the groaning of my contrite heart, * O Bride of God, * and accept, and reject not, the lifting up of my hands, * O pure and all-immaculate Virgin Mary, * as thou art full of love for mankind; ** that I may hymn and magnify thee who hast exalted our race.",
        "tier": 2,
        "src": {
          "file": "8-5.pdf",
          "locus": "Wednesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.wed",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone V:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the holy apostles, in Tone VIII:",
        "items": [
          {
            "text": "Fervently loving Thee on earth, O Lord, Thine apostles considered all to be but dung, that they might acquire Thee alone; and they gave their bodies over to wounds for Thee; wherefore, glorified, they pray for our souls.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 1"
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
            "text": "O Lord, Thou didst magnify the memory of the apostles on earth, for assembling them together, we all glorify Thee; since by their prayers and for their sake, Thou dost grant healings, peace and great mercy to the whole world.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers, aposticha item 2"
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
            "text": "What virtue, what praise is due the saints? For they bowed their heads beneath the sword for the sake of Thee Who bowed down the heavens and descended; they shed their blood for Thee Who emptied Thyself and assumed the form of a servant; they humbled themselves even unto death, emulat- ing Thy poverty. By their prayers, O God, have mercy upon us in the multitude of Thy compassions.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
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
        "verses": [
          {
            "text": "Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven, Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, * until He take pity on us.",
            "tier": 2,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers aposticha verse 1 — comma for period (\"in heaven, Behold\" for \"in heaven. Behold\"); §5 per-tone"
            }
          },
          {
            "text": "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. Greatly hath our soul been filled therewith; let reproach come upon them that prosper, * and abasement on the proud.",
            "tier": 2,
            "src": {
              "file": "8-5.pdf",
              "locus": "Wednesday-evening Vespers aposticha verse 2 (byte-matches shared; stored with its per-tone partner)"
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
        "text": "I flee to thy protection, O holy Virgin Theotokos, * for I know that through thee I shall obtain salvation; ** for thou art able to help me, O pure one.",
        "tier": 2,
        "src": {
          "file": "8-5.pdf",
          "locus": "Wednesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "thu": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone VIII: Spec. Mel.: “O most glorious wonder ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O most glorious wonder! * The Life-bearing Tree, * the most holy Cross is revealed today, * lifted up on high. * All the ends of the earth glorify it, * and the hordes of the demons are affrighted. * O what a gift hath been given to mortals! * Thereby, O Christ, save Thou our souls, ** in that Thou alone art compassionate.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "O most glorious wonder"
          },
          {
            "text": "O most glorious wonder! * Like a vine full of life, * bearing the Most High, * the Cross is seen today uplifted from the earth. * Thereby have we all been drawn to God, * and death hath been utterly slaughtered. * O most honored Tree, * whereby, glorifying Christ, * we have received the immortal sustenance ** which was in Eden!",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "O most glorious wonder"
          },
          {
            "text": "O the great goodness which Thou hast for us, * O good Jesus! * How didst Thou abase Thyself, * become a man, and will to suffer, * enduring the Cross and violent death * for Thy useless servants? * We offer the Cross to Thee as a worthy and divinely fitting gift; * and giving thanks, ** we, the faithful, glorify Thee.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
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
            "spec_mel": "O most glorious wonder"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
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
              "file": "8-6.pdf",
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
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in Tone VIII:",
        "menaion_fallback": [
          {
            "text": "O the ineffable goodness of Him * Who became incarnate from thee, O all- hymned Theotokos! * For He Who is the Lover of mankind * endured the Cross and death, * that He might save what He created. * Entreat Him, that He may deliver me from torment, * the wretched one who am greatly sick, * and cause me to dwell ** where the never-waning light shines.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 1"
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
            "text": "“What is this sight which mine eyes behold, * O Master? * Lifted up upon the Tree, * Thou Who upholdest all creation dost die, * giving life unto all!”, * said the Theotokos, weeping, * when she saw the God and man * who ineffably shone forth from her ** suspended upon the Cross.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 2"
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
            "text": "O most pure one, * by thine honored supplications * deliver from misfortunes the flock which thy Son and God * sprinkled with His blood. * And fending off the invisible foe-like wolves, * fill their faces with shame, * as David the psalmist * proclaimed of old, ** O pure one.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 3"
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
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
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
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Beholding Thee nailed to the Cross * and voluntarily accepting suffering, O Jesus, * Thy Virgin Mother, O Master, * cried aloud: Woe is me, my sweet Child! * How is it that Thou dost endure * unjustly inflicted wounds, * O Physician Who healeth the infirmities of mankind, * delivering all from corruption ** in Thy tender compassion?",
        "tier": 2,
        "src": {
          "file": "8-6.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone VIII:",
        "items": [
          {
            "text": "O Christ God Who wast lifted up upon the Cross, Thou didst save the race of mankind. We glorify Thy sufferings!",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 1"
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
            "text": "Thou wast nailed to the Cross, O Christ God, and didst open the gates of paradise. We glorify Thy divinity!",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Thursday-evening Vespers, aposticha item 2"
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
            "text": "Ye sanctify everyplace, O martyrs of the Lord, and heal every infirmity. Pray ye now, that our souls be delivered from the nets of the enemy, we beseech you.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
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
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.standard_vespers"
        }
      },
      "aposticha_theotokion": {
        "text": "The unblemished heifer, beholding her Bullock * willingly nailed upon the Tree, * cried out aloud, lamenting piteously: * “Woe is me, O my most beloved Child! * How hath the ungrateful assembly of the Jews rewarded Thee, * desiring to leave me childless and bereft of Thee, ** O my most beloved Child?”",
        "tier": 2,
        "src": {
          "file": "8-6.pdf",
          "locus": "Thursday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our Father ..., Troparia. Litany: Have mercy on us ..., and Dismissal. ON THURSDAY NIGHT: TONE VIII AT COMPLINE Canon of supplication to the most holy Theotokos"
    },
    "fri": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the holy martyrs, in Tone VIII:",
      "lic": {
        "octoechos": [
          {
            "text": "O martyrs of the Lord, ye sanctify every place and heal every manner of infirmities: and now we entreat you to intercede on our behalf, that our souls may be delivered from the snares of the enemy.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 1"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of the holy martyrs, in Tone VIII:"
          },
          {
            "text": "Thy martyrs, O Lord, no longer mindful of the temporal things of this life, despised not torture for the sake of the life to come, which they manifestly inherited, wherefore they rejoice with the angels. By their supplications grant great mercy to Thy people.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 2"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of the holy martyrs, in Tone VIII:"
          },
          {
            "text": "What virtue, what praise, are due the saints? For they bowed their heads beneath the sword for the sake of Thee Who bowed down the heavens and descended to us; they shed their blood for Thee Who abased Thyself and assumed the form of a servant; they humbled themselves even unto death, imitating Thy poverty. By their intercessions, O God, have mercy on us, in the multitude of Thy compassions!",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of the holy martyrs, in Tone VIII:"
          },
          {
            "text": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 4"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of the holy martyrs, in Tone VIII:"
          },
          {
            "text": "I have become like the barren tree, as if clad with useless leaves; and I am afraid that if I am cut down, Thou wilt send me into unquenchable everlasting fire, O Master. But grant me time to convert, that I may offer Thee the goodly fruit of virtuous acts, and may be deemed worthy of Thy kingdom.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 5"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "provenance_note": "Spec. Mel.: “O most glorious wonder ...”:"
          },
          {
            "text": "O Lord, O Lord, Who lovest mankind, turn not Thy face away from me, Thy servant, who angereth Thy goodness every day, neither punish me by Thy righteous wrath, O Christ. I confess that I have sinned, I have sinned against Thee like none other. But have pity and save me, by the prayers of Thy Mother.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 6"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "provenance_note": "Spec. Mel.: “O most glorious wonder ...”:"
          },
          {
            "text": "When in Thy glory Thou shalt sit as the King of all upon Thy judgment-seat, and all the holy angels stand before Thee with fear, and all human nature will stand before Thee to be judged, O Christ; then, through the supplications of Thy Mother, O Lord, from all torments deliver those who have fallen asleep in faith.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 7"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "provenance_note": "Spec. Mel.: “O most glorious wonder ...”:"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
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
              "file": "8-7.pdf",
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
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 3"
            }
          },
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 4"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
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
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 6"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!",
        "tier": 2,
        "src": {
          "file": "8-7.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera, in Tone VIII:",
        "items": [
          {
            "text": "O ye martyrs of the Lord, we beseech you to intercede before our God: pray ye that abundant mercy be granted to our souls, and the cleansing of our many sins.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "I weep and lament when I contemplate death and behold our beauty, which hath been created according to the image of God, lying in the grave, bereft of form, devoid of glory, unsightly. O the wonder! What is this mystery concerning us? How have we been given over to corruption? How have we been yoked together with death? Truly, as it is written, this is by the command of God, Who giveth rest unto the departed.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 2"
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
            "text": "Thy death, O Lord, won immortality for us; for if Thou hadst not been laid in the tomb, paradise would not have been opened. Wherefore, grant rest to the departed, in that Thou lovest mankind.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 3"
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
            "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 1 (final period; §5 per-tone; 3-7/4-7/5-7/6-7/7-7 class)"
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
              "file": "8-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 2"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "O pure Virgin, portal of the Word, Mother of our God: pray thou that we be saved.",
        "tier": 1,
        "src": {
          "file": "8-7.pdf",
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
              "text": "The wonderworking staff of Moses, * striking and dividing the sea in the figure of a cross, * once drowned pharaoh the pursuing charioteer, * while it saved the fleeing people of Israel * as they fled on foot, * chanting a hymn unto God.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Most glorious things have been said of thee, O most pure one, who alone art the glory of the faithful; wherefore, By thy prayers show me, who glorify thee, to be a partaker of the glory which is to come, O most holy and all-hymned Virgin.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 1"
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
                "text": "Blessed is the Fruit of thy womb, O all-pure and blessed one, whereby all of us mortals have been delivered from the curse. O the ineffable wonder, the indescribable report, the salvation of the all the faithful!",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 2"
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
                "text": "A multitude of angels, the assembly of the disciples and prophets, the company of the martyrs and Thy venerable ones ever entreat Thee, O Lord. For the sake of the Theotokos grant us forgiveness of sins, in that Thou lovest mankind.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 3"
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
                "text": "With faith I entreat thee, the most pure one, who received in thy womb the unbearable Fire, that I may be delivered and rescued from the fire of Gehenna, and by thy right acceptable prayers may be freed from everlasting torment.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "O Lord, Creator of the vault of Heaven * and Builder of the Church, * do Thou strengthen me in Thy love, O Summit of desire, * O Support of the faithful, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having fallen away from a life of purity, O most pure one, I have become like the dumb beasts and am wholly condemned. O thou who hast given birth to the Judge, deliver and save me from all damnation.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 1"
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
                "text": "O pure maiden, grant me groaning, spiritual tears and constant compunction, that I may weep over the passions which beset me due to mine indifference, O thou who art full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 2"
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
                "text": "The ranks of heaven, the ministering spirits, the assembly of prophets and apostles, and Thy martyrs unceasingly beseech Thee, O Compassionate One: Grant remission of sins unto Thy people.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "As thou art merciful, O most pure one, do thou now entreat Him Who is full of loving-kindness, that He grant unto us divine and tender compassion; for having unmercifully acquired unmerciful ways, I have become worthy of everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
              "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Rend asunder the record of my wicked sins with the divine spear which pierced the divine side of Him Who desired to become a man through thee, O most pure one, and entreat Him to write me in the Book of the Saved, even though I have foolishly estranged myself from Him.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "Let me glorify thee with cries of thanksgiving, let me magnify thee with divine love, O most immaculate one. O thou who by thy great birthgiving hast exalted all who have estranged themselves, grant divine forgiveness unto me who have greatly estranged myself and have fallen grievously.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 2"
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
                "text": "In thee were the laws of nature overcome; for in a manner transcending nature thou hast given birth to God the Word. Wherefore, I entreat thee with faith, O most immaculate one: By thy prayers save and convert me who have sinned greatly, surpassing human nature, and have gone far away from God.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "With the arrows of sin the enemy hath wounded my soul; and hath defiled my heart with lusts, and drawn me away from the straight path. Wherefore, I cry to thee, O Virgin: Turning me, heal and save me.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 4, item 4"
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
              "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Generations of generations now bless thee, the ever-blessed one, and the hosts of heaven praise thee as the one who hath united those below with those on high, the only one blessed among women, the restoration of fallen Adam.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 1"
                },
                "label": "plain"
              },
              {
                "text": "O good one who hast given birth to the Word, beseech the good One Who hath delivered us from irrationality, that I may remain whole, may attain an unshakable disposition, and may journey well, doing those things which are pleasing unto God.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "O Word Who didst shed Thine own blood upon the Cross in the surpassing depths of Thy mercy, dry up the abyss of my passions, and for the sake of the Theotokos grant that I may please Thee, my God, in humility.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "O Virgin Mother and maiden, who hast given birth to the Infinite One in the flesh, the glory of the angels and the wounding of the demons: Grant divine healing unto my heart which hath been wounded by sin, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 5, item 4"
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
              "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "In thee hath human nature found mercy, O merciful Lady; for thou hast given birth to the Merciful One, O most pure one. Wherefore, I beseech thee: Have mercy upon my soul!",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 6, item 1"
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
                "text": "The ranks of the incorporeal beings, of the martyrs, prophets and Thine apostles, entreat Thee, O Christ: For the sake of her who gave birth to Thee, save Thy people from every evil circumstance.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "O un-ploughed earth who gavest rise to the Husbandman and Creator of all, through divine understanding show forth as fertile my soul which hath been rendered hard and stony by the passions.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "I have violated the commandments which lead me to God, and without desiring it, have become enslaved to wicked passions; wherefore, I entreat thee, O Ever-virgin: Rescue me from their dominion.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
              "text": "Once in Babylon the fire stood in awe * of God's condescension; * for which sake the youths in the furnace, * dancing with joyous steps as in a meadow, chanted: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "By thine ineffable birthgiving thou hast granted unto us ineffable things, O Theotokos; wherefore, deliver me from terrifying torment, and fill me with ineffable joy, that I may ever hymn thee who art all-hymned.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "Having wasted my life in slothfulness, I have become barren, and I fear the interrogation and unquenchable fire of Gehenna. O Theotokos who hast given birth to the unbearable Fire, By thy prayers persuade Him to deliver me.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "The miracle of thy birthgiving surpasses all wonders, O pure Virgin; wherefore, I cry unto thee, O Birthgiver of God: Show forth upon me the wonders of thy mercies; deliver me from the coming wrath, and save me.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 3"
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
                "text": "O Christ my Savior, for the sake of her who gave birth to Thee have pity on me who have lived in slothfulness and have spurned Thy holy laws and Thine honored precepts, in that Thou art a beneficent and greatly merciful God,",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
              "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Give life to my soul, for it is dying; raise it up, for it hath fallen; heal it, for it hath been wounded. Grant peace to my mind; still thou the waves of temptations, O Virgin; and save me who cry aloud: Ye children bless; ye priests hymn; ye people supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 1"
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
                "text": "Like the thief I cry out to Thee: Have mercy on me, O Lover of mankind! Like the harlot, I weep and cry aloud: I have sinned like the prodigal of old! For the sake of the Theotokos accept me, a wretched penitent, that with zeal I may cry out to Thee: Ye children bless; ye priests hymn; ye people supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
                "text": "As befitteth a servant, I cry out to thee, O all-hymned Theotokos: With the countless noetic hosts, with the prophets and the venerable, the apostles and the martyrs, make entreaty for all those who chant in a godly manner: Ye children bless; ye priests hymn; ye people supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 3"
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
                "text": "O all-immaculate Theotokos, thou art more honorable than the angelic ranks of heaven, for through thy virginal womb which knew not wedlock thou hast given birth to their Creator and Lord in two natures, without commingling or change, incarnate in a single Hypostasis, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 8, item 4"
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
          "9": {
            "irmos": {
              "text": "Every ear is awestruck at hearing of God's ineffable condescension, * for the Most High voluntarily descended and assumed flesh, * becoming man in the Virgin's womb; * wherefore we the faithful magnify the most pure Theotokos.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "O divine couch of Solomon, upon which God hath rested, and who art now surrounded by sixty mighty utterances from the divine Scriptures: By thy power, O pure Ever-virgin, preserve me unharmed, who am ever surrounded by myriads of demons.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 1"
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
                "text": "O thou who pourest forth divine sweetness, O thou who hast given birth to the Sweetness of all, sweeten thou my soul which hath become bitter through the venom of the serpent, by thy mediation ever remove bitter harm from me, O unashamed intercessor for the faithful.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 2"
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
                "text": "O Jesus, thou Sun of glory, enlighten my wretched soul through the prayers of the pure divine maiden who gave birth to Thee, of the incorporeal ministers, Thine honored apostles, the holy hierarchs and prophets, Thy chosen martyrs and the venerable.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 9, item 3"
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
                "text": "Wholly condemned and at a loss what to do, I fear Thy dread second coming, only King and Lord; wherefore, before the end I cry unto Thee: For the sake of her who gave birth to Thee take pity upon me and save me, O Merciful and good One Who lovest mankind.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VIII:",
        "sessional": {
          "text": "O ye faithful, let us praise the Virgin Mother and maiden, the object of the veneration of the heavenly hosts and the all-praised exaltation of our souls: Rejoice, O thou who didst conceive the Creator of the angels in thy womb! Rejoice, cleansing of those who fall, who gavest flesh to God the Word! Rejoice, thou Bride unwedded!",
          "tier": 1,
          "src": {
            "file": "8-2.pdf",
            "locus": "Sunday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 2
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "mon": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "We all know thee to be the Theotokos, a wellspring of the waters of prayer, gushing forth in streams upon the souls and bodies of the faithful; wherefore, we unceasingly glorify thee.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 1"
                },
                "label": "plain"
              },
              {
                "text": "In a manner transcending nature didst thou give birth to the Word Whose origin is in God (the Father), O Virgin, and hast thereby delivered nature from corruption; wherefore, free me from irrational and unnatural passions.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "Fields of carnal passions now surround me and grievously vex me; speedily visit thy servant, O Virgin, and save me from those who afflict me.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "He Who sustaineth, upholdeth and saveth all creation hath appeared, circumscribed, in thine arms, O pure one, and hath restored the race of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
              "text": "O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Quell thou the turmoil of the grievous affliction which now beset me, O most pure Lady, and free me from my transgressions and passions.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 1"
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
                "text": "Ineffable is the abyss of thy compassions, O most pure one. Thereby do thou deliver me from transgressions and infirmities.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "Haste thou, O most pure one, and visit me who am infirm, and deliver me from grievous illness and every sorrow.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "Magnify the mercy and aid of thy prayers upon me, O most pure one, and deliver me from perils and tribulations.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
              "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure one, ever show the remembrance of the saints and the cleansing of transgressions to be the purification of my heart.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 1"
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
                "text": "Grant me salvation of soul and body, O most immaculate one; impart healing to me who am sick, and deliverance from evils.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 2"
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
                "text": "Set at naught the wiles of the evil demons and the uprisings of the passions, O most pure one, and grant strength to us who are sick.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 4, item 3"
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
                "text": "From thy womb hath the Sun of righteousness shone forth and illumined the world, O all-pure one. With His divine rays illumine me also.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
              "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "By thy birthgiving the bonds of death have been loosed and the might of corruption bound, O most holy and all-hymned Virgin; wherefore, quickly loose also the bonds of my transgressions and my heavy grief.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "Deliver me from the wickedness of the demons and the malice of men, O Lady, and quickly heal the sickness of my soul and body, O thou who alone hast given birth to the Savior and Lord, the Physician of spirits and all flesh.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 2"
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
                "text": "O most pure one, thee do I implore as the tongs which held the divine Coal: Utterly consume every passionate lust of thy servant and my grievous infirmities which are hard to bear, and do thou dry up the torrents of my grief.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "O all-pure Lady, thy Son hath given thee as salvation for all who believe in Him and proclaim Him to be God manifestly incarnate from thee; wherefore, save me from divers misfortunes and tribulations.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 5, item 4"
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
              "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Look upon me with thy merciful eye, O Lady, and quickly deliver me from cruel infirmities, from every affliction and fall which now awaiteth me.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "By thy supplications, O most pure Lady, deliver me from mindlessly passionate behavior, from unseemly jealousy, from, all evil and the oppression of life.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "He Who hath created us took form within thee, O Virgin, delivering human nature from corruption; wherefore, by thy prayers deliver me from the temptations which beset me, O pure one.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 6, item 3"
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
                "text": "Thou wast shown to be the most pure temple of God Whom naught can contain, O most pure Lady. By thy prayers show me to be a temple of His grace, and preserve me unharmed.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
              "text": "The Children of Judaea, * who of old came to dwell in Babylon, * trampled underfoot the flame of the furnace * through their faith in the Trinity, * as they sang: 'O God of our fathers, blessed art Thou.'",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Grievous pangs have I found to be my reward, and, afflicted, I experience the pain of great illness; yet I entreat thee, O Theotokos: Help me, and quickly grant me health by thy prayers.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "O blessed Virgin, refuge of all the faithful who sorrow, rescue me from all temptation and grief, and from the malice of those who envy me, and deliver me from sins and divers ailments.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 2"
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
                "text": "O jar of beaten gold, from whence the life-creating Myrrh hath flowed forth upon the faithful: By thine aid, O pure Birthgiver of God, purge my soul and body of infirmities and the defilement of transgressions.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 3"
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
                "text": "Unceasingly glorifying the Word Who with the Father and the Spirit is equally without beginning, and Who was ineffably born from thee, O Mother of God, we chant in praise: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 4"
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
              "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "All of us who in faith have recourse to thine aid proclaim the magnitude of thy divers miracles, O Lady. Save me now from cruel infirmity, from pangs of soul and body, and show me to be healthy, that I may glorify Christ thy Son throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 1"
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
                "text": "Of a sudden the winds of those who envy me have blown and the rivers of the wicked have grievously smitten the house of my mind, O pure Virgin; but repel the assault of all griefs as it were that of the mindlessly raging sea, and by thy prayers grant me stillness throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 8, item 2"
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
                "text": "He Who fashioned the clay body of man and instilled therein an immortal soul, took form within thee, O Virgin, and restored it. By thy prayers render Him well and kindly disposed toward me, and grant strength and speedy deliverance to all who sorrow.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "Illumine with light those who ever glorify thee, O most pure one, for from thee shone forth the never-waning Light, and thou deliverest thy servants from the dark nocturnal treachery of the demons. Deliver me also from them, and by thy prayers save me from the evils which beset me.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
              "text": "Saved by thee, O pure Virgin, * we confess thee to be truly the Theotokos, * and together with the choirs of the bodiless hosts * thee do we magnify.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
                "locus": "Monday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Lift up the horn of the Church, O most pure one, grant might to the faithful over the heathen, and make firm the scepters of kingdoms.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 1"
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
                "text": "Bring low those who have been exalted, vanquish the alien hordes which attack us, O pure Virgin, and free thy servants unharmed by them, O maiden.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 2"
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
                "text": "O only champion of the Orthodox Christians who glorify thee, by thy prayers quickly put to shame the weapon-bearing Moslems.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
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
                "text": "Grant understanding to the choirs of the faithful, O Virgin, strengthening them against enemies visible and invisible, and save them from all sorrow.",
                "tier": 1,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 4"
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VIII:",
        "sessional": {
          "text": "All we, the generations of mankind, * call thee blessed, * in that thou art the Virgin who alone among women * hast given birth without seed unto God in the flesh; * for the fire of the Godhead made its abode within thee, * and thou didst feed the Creator and Lord * with milk as an infant. * Wherefore, we, the race of mankind and of angels, * glorify thy birthgiving, * and together we cry out to thee: * Entreat Christ God to grant forgiveness of sins ** unto those who with faith worship thy most holy Offspring.",
          "tier": 2,
          "src": {
            "file": "8-3.pdf",
            "locus": "Monday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "tue": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Beset by many perils, I flee unto thee, seeking salvation. O Virgin Mother of the Word, save me from every grievous and cruel circumstance.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "Assaults of the passions disquiet me and fill my soul with great despondency. Bring peace to me with the tranquility of thy Son and God, O all-immaculate maiden.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "I entreat thee, O Virgin who hast given birth to God the Savior, that I may be delivered from grievous circumstances; for, fleeing now unto thee, I raise unto thee my soul and mind.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 3"
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
                "text": "In that thou art good, O only Mother of God who hast given birth to Him Who is good, unto me who am sick in body and soul grant divine visitation and providence.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
              "text": "O Lord, Creator of the vault of Heaven * and Builder of the Church, * do Thou strengthen me in Thy love, O Summit of desire, * O Support of the faithful, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "I count thee the intercession and protection of my life, O Virgin Birthgiver of God. Guide me to thy haven, O cause of good things, confirmation of the faithful, who alone art all-hymned.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 1"
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
                "text": "I beg thee to quell the tumult of my soul and the tempest of my grief, O Virgin; for thou hast given birth to Christ, the Origin of tranquility, O Bride of God who alone art most pure.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 2"
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
                "text": "O thou who hast given birth unto the Benefactor, the Cause of good things, pour forth the riches of beneficence upon all; for as thou hast given birth to Christ Who is mighty in strength, thou art able to accomplish all things, O thou who art blessed of God.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "When I am wracked by cruel afflictions and painful sufferings, O Virgin, do thou help me; for I know thee to be an inexhaustible and never-failing treasury of healings, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 4"
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
          "4": {
            "irmos": {
              "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O Bride of God, who hast given birth to the Lord and Helmsman, still thou the tumult of my passions and the tempest of my transgressions.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "O thou who hast given birth to the compassionate Savior of all who hymn thee, bestow the abyss of thy tender compassion upon me who invoke thee.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "Delighting in thy gifts, O most pure one, we chant hymnody of thanksgiving unto thee, knowing thee to be the Mother of God.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "As I lie upon my bed of sickness and infirmity, help me, O only Ever- virgin Theotokos, in that thou art full of love.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
              "text": "Illumine us O Lord with Thy commandments, * and with Thine arm raised on high * grant us Thy peace, * O Lover of mankind!",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Fill thou my heart with gladness, O pure one, granting me thine unfading joy, O thou who hast given birth to the Cause of gladness.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 1"
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
                "text": "Deliver us from misfortunes, O pure Theotokos, who hast given birth to eternal Deliverance, the Intelligence which passeth all understanding.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 2"
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
                "text": "Dispel thou the gloom of my transgressions with the radiance of thy splendor, O Bride of God who hast given birth to the divine and pre-eternal Light.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 3"
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
                "text": "O pure one, heal thou the sickness of my soul, granting me thy visitation, and By thy prayers giving me health.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 5, item 4"
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
              "text": "I will pour out my prayer unto the Lord, * and to Him will I proclaim my grief; * for my soul is filled with evils, * and my life unto Hades hath drawn nigh, * and like Jonah I pray unto Thee: * Raise me up from corruption, O God.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "He Who gave Himself over to death hath saved from death and corruption my nature which hath been held captive by corruption, O Virgin. Entreat thy Lord and Son, that He deliver me from the wickedness of the enemy.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 1"
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
                "text": "I know thee to be the intercessor and steadfast guardian of my life who doeth away with the tumults of temptations and repelleth the onslaughts of the demons; and I ever pray to be delivered from the corruption of my passions.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O maiden, we have acquired thee as a bulwark of refuge, the perfect salvation of our souls, and latitude amid tribulations; and we ever rejoice in thy splendor. O Lady, even now save us from sufferings and misfortunes.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 3"
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
                "text": "I lie now, sick, upon my bed, and there is no healing for my flesh; but to thee, the good one who gave birth to God, the Savior and Redeemer of the world, do I pray: Raise me up from the corruption of infirmities.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "The Children of Judaea, * who of old came to dwell in Babylon, * trampled underfoot the flame of the furnace * through their faith in the Trinity, * as they sang: 'O God of our fathers, blessed art Thou.'",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "As Thou didst desire to arrange our salvation, O Savior, Thou madest Thine abode within the womb of the Virgin, and hast shown her to be an intercessor for the world. O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 1"
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
                "text": "Thou hast given birth to Him Who willeth mercy, O pure Mother. Him do thou beseech, that He deliver from transgressions and defilement of soul those who cry out with faith: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 2"
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
                "text": "Thou hast shown her who gave birth to Thee to be a treasury of salvation, a wellspring of incorruption, a tower of safety and a portal of repentance for those who cry: O God of our fathers, blessed art Thou!",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 3"
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
                "text": "O Virgin Birthgiver of God who hast given birth for us to Christ the Savior, grant healing of bodily weakness and infirmity of soul unto those who with love have recourse to thy protection.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
              "text": "The King of heaven, * Who is glorified by the hosts of angels, * let us praise and supremely exalt throughout all ages.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "O Virgin, disdain not those who are in need of thine aid, and who hymn and supremely exalt thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "Thou healest, the infirmity of my soul and my bodily pangs, O pure Virgin, that I may glorify thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "O Virgin, thou pourest forth a wealth of healings upon those who with faith hymn thee and supremely exalt thine ineffable offspring.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 3"
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
                "text": "O Virgin, thou drivest away the assaults of temptations and the attacks of the passions; wherefore, we hymn thee throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
              "text": "Saved by thee, O pure Virgin, * we confess thee to be truly the Theotokos, * and together with the choirs of the bodiless hosts * thee do we magnify.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Turn not away from the torrent of my tears, O Virgin who hast given birth unto Christ, and wiped away every tear from every face.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "Fill thou my heart with joy, O Virgin who received the fullness of Joy, setting at naught the grief of sin.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
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
                "text": "With the rays of thy light, O Virgin, illumine those who in an Orthodox manner confess thee to be the Theotokos, dispelling the darkness of ignorance.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 3"
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
                "text": "Heal thou the infirmities of one who hath been brought down to a place of affliction, O Virgin, transforming illness into health.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 9, item 4"
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VIII:",
        "sessional": {
          "text": "Beholding Thee, the Lamb and Shepherd, * the Savior of the world, upon the Cross, * she that gaveth birth to Thee said, weeping: * The world rejoiceth, having received deliverance; * but my womb doth burn, beholding Thy crucifixion, ** which Thou dost endure on behalf of all, O my Son and God!",
          "tier": 2,
          "src": {
            "file": "8-4.pdf",
            "locus": "Tuesday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "wed": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "The wonderworking staff of Moses, * striking and dividing the sea in the figure of a cross, * once drowned pharaoh the pursuing charioteer, * while it saved the fleeing people of Israel * as they fled on foot, * chanting a hymn unto God.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "In a manner transcending nature, O Virgin Theotokos, thou hast given birth to God the Word incarnate, Who before was incorporeal, yet came to dwell in the world as God and man; wherefore, we all glorify thee who, after God, art our sure help.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Arrayed in a vesture of many colors, O blessed one who art full of the grace of God, in a manner transcending understanding and all telling thou hast given birth to the Word of the Father, Who became flesh in His ineffable loving-kindness; and thou didst remain an undefiled virgin.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "From a royal root thou didst put forth Christ the King, the Word of God, in a manner transcending understanding and comprehension, O pure one, and hast given birth to Him, incarnate from thy pure blood, revealed in two natures, but in a single Hypostasis.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "He who proclaimeth thee the Theotokos, O most pure one, prevaileth over every heresy; wherefore, O Birthgiver of God, having given birth unto the eternal Word of God Who immutably became flesh, thou art higher than all creation.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 4"
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
              "text": "O Christ fortify me on the rock of Thy commandments, * Thou Who in the beginning didst establish the heavens with understanding * and didst establish the earth upon the waters, * for there is none holy save Thee, O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "God made His abode within thy holy womb, O Mother of God, and became incarnate in a manner He Himself knew, and hath saved us by His life-bearing sufferings; wherefore, we glorify thee as the portal of salvation.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "The Supremely divine One, Who hath breathed the spirit (of life) into all, became incarnate on earth and dwelt with mankind, having been produced by thy womb seedlessly; wherefore, all of us, the faithful, bless thee with hymns, O pure one.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Having conceived in thy womb Him Who was begotten of the Father before all ages, O Virgin, without knowing a man, thou hast given birth for us to Him as both God and man, perfect and indivisible in both natures.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "O pure and divinely blessed Virgin, we all know thee to be the rod which budded forth Christ, the Flower of incorruption, and the golden censer who bore the burning Coal of the divine Essence in thine arms.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
              "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Of old the ark which received the divinely written law prefigured the life- creating Word Who was ineffably conceived within thy womb, O most immaculate one, richly nourishing the souls of those who chant: Glory to Thy power, O Lover of mankind!",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Thou alone wast the true source of salvation, O Mother of God, who through thine all-pure blood gave flesh to the Creator and Fashioner, and through whom the gates of death have been broken down and life given to us.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 2"
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
                "text": "That in the richness of thy goodness Thou mightest seek out Thine image which was buried by the passions, Thou didst make Thine abode within the Virgin’s womb, and Thou, the Wisdom of God, didst make a temple from her; and having thereby come to dwell among mankind, O Compassionate One, Thou hast saved the ends of the world.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 3"
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
                "text": "After God it is thee whom we have acquired as an intercessor, O most immaculate one; for thou wast the Mother of God the Creator and Fashioner, Who took upon Himself our form, saved it from corruption and tribulations, and glorified it with divine glory.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
              "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "The generations of all mankind bless thee as the one who gave birth to the Creator, Fashioner and Lord, O most pure one, and the noetic leaders of the incorporeal hosts glorify thee as the Mother of God.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "The armies of the hosts on high bless thee, O most pure one; for through thee alone we on earth have been united to those in heaven, wherefore we hymn thy birthgiving.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "In an ineffable manner, O Virgin, He Who alone is compassionate, the Word Who shone forth from the Father before all ages, made His abode within thee and become a man, delivering us from corruption and leading us up to a life of incorruption.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Thou wast clothed with the beauties of virginity, O most pure Virgin, and hast done away with the nakedness of the first Eve, having given birth to Christ Who bestoweth the vesture of incorruption upon those who hymn thee.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 4"
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
              "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "He Who upholdeth all things with His omnipotent power arrayed Himself in the weakness of the flesh through thee, O all-immaculate Virgin, for the good of mankind, in that He is the Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 1"
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
                "text": "The all-accomplishing Spirit descended upon thee, O all-immaculate one, and the Word, of God made His abode within thee and ineffably assumed flesh, though He remained immutable.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Illumine the souls of those who hymn thee in an Orthodox manner, O Bride of God, for the sayings of the prophets proclaimed beforehand thy most pure conception and birthgiving, which are beyond all telling.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "We piously hymn the most pure Mary, the truly divine and hon- ored dwelling-place of God; for she contained God, receiving Him Who is infinite and unapproachable.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Once in Babylon the fire stood in awe * of God's condescension; * for which sake the youths in the furnace, * dancing with joyous steps as in a meadow, chanted: * O God of our fathers, blessed art Thou!",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure Lady who conceived the Redeemer of all, grant ineffable and divine deliverance unto me who cry aloud and sing: Blessed is the God of our fathers!",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Now have all things been filled with divine light through thee, O most pure one; for thou hast been revealed to be the door through which God held converse, enlightening those who cry out with faith: Blessed is the God of our fathers!",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Lo! the divine prophecy of the godly David hath now been fulfilled: They who have acquired the riches of grace truly entreat thy countenance, O pure Birthgiver of God, and now bless the God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 7, item 3"
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
                "text": "O most pure one, thou didst conceive Him Who is God and Lord over all, Whose good pleasure it was to save the race of mankind from death and corruption; and hymning Him as is meet, we cry aloud: Blessed is the God of our fathers!",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
              "text": "By Thy grace the children became vanquishers * of both the tyrant and the flames, * carefully observing Thy commandments, * wherefore they cried aloud: * Bless the Lord, all ye works of the Lord!",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Cleanse thou the wounds of my soul and the stripes of my sins, O blessed, and most pure maiden, who from thy virginal womb which knew not wedlock gave birth to Him Who is God over all. Him do the children bless and supremely exalt, throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Resplendent with the beauties of virginity, thou didst become the receptacle of the never-waning Light, O all-pure one, enlightening those who with all their soul confess thee to be the true Theotokos, and who cry aloud: Ye children bless; ye priests hymn; ye people supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Sanctified by the Holy Spirit, O all-immaculate Theotokos, thou didst truly receive in thy womb the beginningless Son Who with the Father is equally eternal, Who became incarnate within thee, O pure one, for the benefit of those who cry out with faith: Ye children bless; ye priests, hymn; ye people, supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 8, item 3"
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
                "text": "In that thou hast given birth to God in a manner past all telling and understanding, O most pure Mother of God, Him do thou beseech, that all of us who are unworthy may be treated with lenience by Him at the time of His awesome and dread coming, when He shall discern the nature of all who with fear will stand naked before Him and be judged.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
              "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "All of us who have rejected eternal life and have fallen, accursed, into death thou hast called again, O most pure Mother of the Redeemer, and hast granted them to hasten to our former homeland; wherefore, O Mother of God, we unceasingly magnify thee.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "Readily grant that I may pass over the waves of the perils of this life and its present sufferings, O Theotokos, stilling them, in that thou art good, and guiding me to the virtues of the way of heaven, that I may unceasingly magnify thee as my benefactress.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "O pure and most glorious Mother of God, save those who hymn thee with love from all perils, mercifully subduing our turmoil, in that thou hast given birth unto God; for thou canst freely do all that thou dost desire, O Virgin. Wherefore, we all magnify thee.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
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
                "text": "The honored Church which Christ thy Son hath acquired with His precious blood, and hath saved from misfortunes and the violence which assails us, in that He is good, do thou show forth as victorious over budding heresy, O joyous Lady.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 9, item 4"
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VIII:",
        "sessional": {
          "text": "As the all-immaculate Bride of the Creator, * Mother of the Redeemer, who knewest not a man, * and as the receptacle of the Comforter O all-hymned one, * hasten thou to deliver me, * the vile abode of iniquity and noetic plaything of the demons, * from their evil machinations; * and make me the bright dwelling-place of the virtues, * O thou incorrupt light-bearing one. * Drive away the clouds of the passions and grant that, * by thy supplications, * I may receive a portion on high ** and share in the never-waning light.",
          "tier": 2,
          "src": {
            "file": "8-5.pdf",
            "locus": "Wednesday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "thu": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Let us sing unto the Lord, * who led His people through the Red Sea: * for He alone hath gloriously been glorified.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "O most immaculate Virgin, render Christ merciful unto me, setting me free on the day of the dread judgment.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "Rain down upon me drops of compunction, O Lady, washing away my defilement, that I may glorify thee.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Illumine me, O Virgin who hast given birth to the never-waning Light, driving away the profound darkness of my slothfulness.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 3"
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
                "text": "Save me who have perished amid many sins, O Theotokos, and deliver me from every torment and grievous condemnation.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 4"
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
              "text": "O Lord, Creator of the vault of Heaven * and Builder of the Church, * do Thou strengthen me in Thy love, O Summit of desire, * O Support of the faithful, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having fallen, away from the life of sanctity, O most pure one, I have joined the dumb beasts and am wholly condemned; but do thou who hast given birth to the Judge deliver me from all damnation, and save me.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 1"
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
                "text": "Unto thee do I flee, O Lady. Ever save me who am beset by a multitude of perils, taking pity upon me, O only all-hymned one who hast given birth to the Savior and Lord of all.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "O Lady, thou impassable gate leading to God, open unto me the gates of repentance, I pray, cleansing me of the impurity of my sins with the showers of thy mercy, O thou who art full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "Deliver me from the assaults of the passions, O Lady, and vanquish now the foes which wage war upon me; establish me upon the rock of the will of God, and illumine my soul, O portal of the divine Light.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 4"
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
          "4": {
            "irmos": {
              "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Heal thou the stripes of my soul, O Virgin full of the grace of God, and illumine my mind, which hath been darkened by the incursions of the passions, O pure one.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 4, item 1"
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
                "text": "In that thou art the Mother of the Word, O most pure one, rouse me to repentance, for I sleep the sleep of despondency and am covered with sin.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "O Lady unwedded, thou who hast given birth to the incarnate Word, enlighten my soul, and deliver me from Gehenna and torment.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "In thee have I placed all my hope, O Virgin Mother; preserve my soul, O thou who hast given birth to God my Savior.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
              "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Heal thou the wholly incurable sufferings of my soul, O maiden, light my lamp, which hath gone out through slothfulness, and guide me to the paths of repentance, O Virgin, that I may glorify thee with faith and love.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 1"
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
                "text": "I condemn myself even before the trial, O divinely joyous one. I alone among the accused bear shameful deeds. But intercede for me, in that thou art the advocate of all, and deliver me from grievous condemnation.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "Cease thou never to deliver me from captivity, from the soul- corrupting turmoil which surrounds me, and from the grievous passions which slay me, O most holy maiden, ally of sinners and our ready helper.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 3"
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
                "text": "O most pure one who didst conceive the Life of the world, the Redeemer and King, impart life unto me who am wholly slain by the sting of death because of disobedience, and guide me to the Light.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
              "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Grant life unto me who have been slain by many transgressions, O most pure Virgin Theotokos who ineffably gave birth to the Life of mankind, and teach me to do the will of the Lord.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "All of us, the faithful, who are ever drowning in the abyss of evils, turmoil and griefs, have acquired thee as an intercessor and bulwark, O Theotokos, thou only refuge of the faithful.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "O most immaculate and most pure one, who through thy holy Offspring hast caused the growths of ungodliness to wither away: destroy the evil of the enemy which ever groweth within me.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 3"
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
                "text": "Sanctify my mind and illumine my heart, O holy Mother of God, and deliver me from the evils which assail me, that I may glorify thee, my steadfast helper.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 6, item 4"
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
              "text": "The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * 'Blessed art Thou, O Lord our God, throughout the ages'.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Be merciful unto me, O Virgin, and with the dressing of thy prayer heal me who have been wounded by the sword of sin; and forever rescue me from the unquenchable fire.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "Deliver me from the cruel captivity which hath befallen me, from wicked thoughts and besetting transgressions, O Mother of the Savior, that, saved, I may ever glorify thee as is meet.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 2"
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
                "text": "I now flee unto thee, O Mother of God, bound by the fetters of transgressions. In the tender compassion of thy mercy loose me, O Virgin, and deliver me from the torment and malice of the demons.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "Take pity and save me, O Virgin who hast given birth to the compassionate Word of God, and with the light which is within thee illumine my soul, and deliver me from the cruel wiles of the demons.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 7, item 4"
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
              "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "He Who is perfect in every way and unapproachable in essence hath shown Himself to be accessible to me, having been clothed in the flesh through thee, O thou who knewest not wedlock. Him do thou earnestly entreat, that He lighten the burden of mine iniquities and deliver me from the judgment which is to come.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 1"
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
                "text": "O most holy one, who in a manner past all telling hast given birth to the Judge and Lord, entreat Him as thy Son, that on the day of judgment He deliver from fire, from the darkness which is devoid of light, and from the gnashing of teeth me who ever piously hymns thee with faith.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "O most pure Birthgiver of God, cleanse thou the wounds of my soul and the temptations of sin, washing them away with the streams gushing forth from fountain which emanated from the side of thine Off-spring, for to thee I cry, unto thee I flee, and thee do I entreat, who art full of the grace of God.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "O most immaculate one, who alone hast manifestly given birth unto Life, grant life to my soul which hath been slain by the sting of the serpent; and hasten to do the will of Him Who was born for our sake, O Virgin, for I cry: Ye children bless; ye priests hymn; ye people supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 4"
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
          "9": {
            "irmos": {
              "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "My soul, which hath been blinded by the passions, blackened by wicked thoughts and is beset by danger, do thou enlighten, O portal of the Light; and deliver me from perils, from the oppression of the demons, from grievous testing, and the coming flame and torment.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 1"
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
                "text": "O Savior Who wast born from the Virgin, and Who preserved her who gave birth to Thee incorrupt even after birthgiving, have pity on me when Thou shalt sit to judge my deeds. As Thou art sinless, overlook mine iniquities and sins, in that thou art a merciful God Who lovest mankind.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "Carrying the heavenly Fire in thine arms, as though with tongs, O pure one who art full of the grace of God, utterly consume the passions of my soul, and free me from dread judgment and fire, and from the cruel tyranny of the demons.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
                "text": "With thy mystical effulgence enlighten our thoughts, hearts and reasoning powers, O maiden full of the grace of God, that treading the paths of life aright, we may obtain mercy, ever singing praises unto thee.",
                "tier": 1,
                "src": {
                  "file": "8-6.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VIII:",
        "sessional": {
          "text": "“O the new wonder! O the awesome mystery!” the ewe-lamb cried, beholding her Son stretched out upon the Tree; “What is this, O immortal Word of God? How art Thou seen to be dead Who dost cause the earth to quake, in that Thou art almighty? Yet I hymn Thine awesome and divine condescension.”",
          "tier": 1,
          "src": {
            "file": "8-6.pdf",
            "locus": "Thursday-night Compline, sessional after Ode VI"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 2
            }
          ]
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "fri": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Let us sing unto the Lord, * who led His people through the Red Sea: * for He alone hath gloriously been glorified.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Mortify the understanding of my flesh, O most pure Virgin who hast given birth unto life, and deliver me from every torment.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 1"
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
                "text": "With the most radiant splendor of Him Who shone forth from thee, O Virgin, enlighten the eyes of my soul, that I may glorify thee.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 1, item 2"
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
                "text": "Pray thou, O holy Lady who alone art the Theotokos, that I may obtain salvation and divine radiance on the day of judgment.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "O most holy Theotokos who without pain hast given birth unto Christ in a manner transcending understanding and all telling: quell thou the pangs of my heart.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
              "text": "O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "By thy prayers deliver me from the darts of the enemy, O most pure one, and spare my heart from besetting thoughts.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "Heal thou the wounds of my soul, O most immaculate Mother of God, and By thy prayers still the turmoil of my heart.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 2"
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
                "text": "Subdue the chaos of my thoughts, O pure Lady, and take from, my soul every grief, O thou who hast given birth unto Joy.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 3"
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
                "text": "Rejoice, O Virgin Mother of Christ, thou salvation of those who have recourse unto thee! Rejoice, O boast of the apostles and martyrs!",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 3, item 4"
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
          "4": {
            "irmos": {
              "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O Word of God Who wast wounded for my sake in Thy love for mankind: Heal the wounds of my soul, and enlighten the darkness of my mind.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 1"
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
                "text": "The sleep of sin hath overtaken me through the slumber of my slothfulness, O Virgin. But by thy vigilant supplication rouse me to repentance.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "O most immaculate one who hast poured forth the water of remission from thy wellsprings: Give drink to my heart, which hath grown dry through all manner of transgressions.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 4, item 3"
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
                "text": "O all-holy Bride of God, Sovereign Lady of the world: save me, delivering me from misfortunes and dispelling the tumult of the passions.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
              "text": "Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Look down, O most pure Lady, hearken unto my voice, and wash away all mine iniquities.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "O Theotokos who hast given birth to the never-setting Sun, enlighten me who have become wholly dark through the passions, that I may glorify and praise thee, O most immaculate one.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 2"
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
                "text": "Have pity on my soul, O most holy maiden, and deliver it from damnation and everlasting torment.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "Heal mine ailing soul, O most holy Lady who hast given birth to Him Who taketh away the infirmities of all.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
              "text": "The abyss of my sins and the storm of my transgressions * disquieten me and thrust me down * into the depths of despondency; * but do Thou stretch forth Thy mighty arm, * unto me as Thou didst to Peter, * and save me, O my Guide.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "By thy vivifying birthgiving mortify the unseemly uprisings of my flesh, O Theotokos who hast given life unto those slain by evil, that I may glorify thee as the cause of the restoration of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "O Virgin Theotokos who hast given birth to the Abyss of compassions, save my soul from the sorrows of life, and open unto me the spiritual portals of joy; for in thee alone have I placed my hope.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "That I may joyously hymn thy mighty works and the great grace of thy miracles, O most pure Virgin, By thy prayers ever free me from the unseemly thoughts which afflict me.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 3"
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
                "text": "In a manner transcending nature didst thou give birth unto Him Who did not depart from the bosom of the Father, yet through thee, O Virgin, conversed with men. As thou art the boast and confirmation of all of us, O Theotokos, take pity upon those who flee unto thee.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 4"
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
          "7": {
            "irmos": {
              "text": "The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * 'Blessed art Thou, O Lord our God, throughout the ages'.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Woe is me! How shall I escape the torments which await me who have lived wickedly on earth? How shall I appear to the dread Judge as other than accursed? O Lady, Birthgiver of God, be thou my helper then!",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 1"
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
                "text": "Quench thou the flame of my passions and still the tempest of my heart, O pure Mother of God; and deliver me from the tyranny of the demons and from the eternal fire, O most pure one.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 2"
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
                "text": "Behold the sorrow which the multitude of mine evils have brought upon me, O Virgin, and before my departure grant me rest, assuaging thy Son by thy maternal supplications.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 7, item 3"
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
                "text": "With thy dew extinguish the flame of the passions of my heart, O Virgin maiden, and rescue me from the dread fire, from eternal damnation and the tyranny of the demons.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
              "text": "O ye Children, equal in number to the Trinity, * bless ye God the Father and creator; * sing ye the praises of the Word who descended and changed the fire into dew; * and supremely exalt ye throughout the ages * the all-Holy Spirit, who giveth life unto all.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Mortify all the uprisings of our bodies, O Virgin who by thy Life-bearing birthgiving didst slay the serpent, and pray that we may receive the life which ageth not, that we may hymn thee forever.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "I ever invoke thine aid, O Birthgiver of God. Put me not to shame who have already acquired shame, but take pity upon me, O most pure one, rescue me from the flame, and deliver me from eternal torments.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 2"
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
                "text": "Show thyself to me as a joyous helper amid evil circumstances, delivering me from the assaults which the demons launched at me, that I may ever bless thee, O Theotokos, as the intercessor for all.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "O most holy maiden, thou boast of the apostles and glory of the martyrs, cause me to share in eternal glory, who cry aloud: Bless the Most Holy Spirit throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
              "text": "Thou hast passed the limits of nature, * having conceived the Maker and the Lord, * and didst become a door of salvation * unto the world; * wherefore we unceasingly magnify thee, O Theotokos.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Friday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "With thy never-waning light drive away the cruel darkness from my soul, O portal of the Light, and show me the luminous paths of repentance, that, treading them, I may elude the gloom of sin and may unceasingly magnify thee.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "Cleanse thy servants, O good One, and grant us forgiveness of transgressions; deliver us from the eternal flame, that we may share in Thy kingdom, O Word of God, for Thou didst endure the Cross in Thy desire to save the race of mankind.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "Grant that I may easily pass through the journey of this life, O Theotokos, subduing the uprisings of temptations and perils, in that thou art good, and guide me to the virtues of the heavenly kingdom and divine rest, that, saved, I may glorify thee.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
                "text": "In that thou hast given birth to the supremely good God and art merciful, heal thou my soul, which is sick with grievous suffering, and ever deliver me from the evils which oppress and assail me, O most pure one, that, saved, I may fervently magnify thee who hast magnified our race.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VIII:",
        "sessional": {
          "text": "The Word of the Father descended to the earth, and the radiant angel said to the Theotokos: “Rejoice, O blessed one who alone hast preserved the bridal- chamber, accepting the conception of the pre-eternal God and Lord, that God might save the race of mankind from delusion!”",
          "tier": 1,
          "src": {
            "file": "8-7.pdf",
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "sat": {
      "frame_rubric": "The priest saith: Blessed is our God..., and we respond: Amen. Glory to Thee, our God, glory to Thee. O heavenly King..., Trisagion through Our Father. Lord, have mercy (12 times). Glory ..., Both now ..., O come, let us worship ..., (Thrice). Psalm 50 (Have mercy on me, O God...); Psalm 69 (O God, be attentive unto helping me...); and Psalm 142 (O Lord, hear my prayer...). Then, Glory to God in the highest..., and the Symbol of Faith (I believe in one God...).",
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos, in Tone VIII",
        "heading_rubric": "Canon of supplication to the most holy Theotokos, in Tone VIII:",
        "odes": {
          "1": {
            "irmos": {
              "text": "Let us sing unto the Lord, * who led His people through the Red Sea: * for He alone hath gloriously been glorified.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Come, O ye faithful brethren, and let us mystically offer a new hymn to the holy Theotokos, praising her mighty works today as from the beginning.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "Of old Moses, llumined in mind by divine vision, clearly learned of thy divine conceiving which transcendeth nature, O Virgin, and which was revealed to him in the bush.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "Unto thee do I offer up the works of my heart, and to thee I offer in an acceptable manner these writings, setting thee before Christ the Master as intercessor, in that thou art close to the divine shelter of aid.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O pure one, incline thine ear unto me who with Orthodox Faith and love devoutly hastens to thee in the tabernacle of thy countenance, worshiping thee with fear. Hearken thou to my cry of supplication.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
              "text": "O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "The patriarch’s ladder of old prefigured thee, O most immaculate one; for the angels’ descent revealed to us the divine descent of God into thy womb.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "The tribe of Judah rejoiced, as Jacob foretold, for from his tribe budded forth the one who would cause Jesus Christ, our Deliverance, to bud forth. Having given birth to Him, O most pure one, thou hast been glorified.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "In despair over my sins, I have found thee to be a refuge of salvation, O most pure Theotokos, our hope and aid; wherefore, guide me to repentance.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 3"
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
                "text": "I have thee near the Master, O most glorious Lady, and with faith have entrusted to thee the book of my deeds. Cease thou never to take pity on me.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
              "text": "From the overshadowed mountain, * from the only Theotokos, * the prophet in divine vision * foresaw Thy coming in the flesh, O Word, * and with fear he glorified Thy power.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Having received grace and been adorned with the beauty of virginity, thou wast likened to the Bride of the Father, adorned with golden coins, and revealed to be the Mother of the Son of God.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Christ the Word was pleased to make thee, the true Zion, a divine habitation for Himself, O Theotokos, choosing thee as His elect, for the restoration of the whole world.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 2"
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
                "text": "Rejoice, O beauteous palace of the Word, virginal bridal-chamber of the King! Rejoice, O boast of all the bodiless ones! Rejoice, O help of all mankind.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "They who reject the icons of thy Son, O Virgin Theotokos, Mother of God, withdraw from God, and therefore perish; but those who honor thee are saved by the same images.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
              "text": "Disperse, O Word, the darkness from my soul, * O Christ God, the Light-Giver, * Having driven out the primordial darkness of the abyss, * grant unto me the light of Thy commandments, * that early in the morning I may glorify Thee.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "Joining the divine Gabriel, let us cry aloud to the Theotokos with faith: Rejoice, O holy Virgin who art Full of grace! The Lord is with thee Who, having put an end to grief on thine account, hath given us joy.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 1"
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
                "text": "Gideon beheld thy most pure womb, O pure Virgin, wherein the Word, Who is inseparable from the divinity of the Father, became incarnate through the divine Spirit, descending like rain.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "Thou art the helper of the world and an aid of the sinful, O Virgin Birthgiver of God; and for those who with faith and love have recourse unto thee thou art the saving deliverance and the absolution of many transgressions.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "By the divine Spirit thou gavest rise without seed to the Son, the Offspring of the Father, Who existed before all creation, timeless and beginningless, O pure Birthgiver of God, and we all honor the likeness of His visage.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
              "text": "Held fast by a multitude of sins O Lover of mankind, * like the prophet I fall down before Thy tender compassions. * Accept me O Lord and save me.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "O unwedded Virgin, with hymns we praise thee as the mirror of virginity and the pure receptacle of the Godhead.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 1"
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
                "text": "In an awesome and dispassionate manner God became incarnate within thy womb, O Bride of God, written, as it were, by the finger of the Father on a new scroll.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "Thy protection do we have as cleansing, excellent hope and aid, O pure Virgin. O Lady, put not thy servants to shame!",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 3"
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
                "text": "By thy mediation, O Bride of God, reduce the never-ending mayhem of the passions to stillness, and guide us to the haven of tranquility.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
              "text": "Once in Babylon the fire stood in awe * of God's condescension; * for which sake the youths in the furnace, * dancing with joyous steps as in a meadow, chanted: * “O God of our fathers, blessed art Thou!”",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Thou hast been revealed to be the mediatress of our joy, O Virgin, and offering thee a crown of grace with love, and praising thee we cry aloud: “Rejoice, O pure and blessed one!”.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "Thou art the holy mountain of God overshadowed, the rich mountain, O most immaculate one, the mountain rendered fertile by divine effulgence, the mountain wherein God was pleased to dwell.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "No sin is too great for thy grace; for thou hast a mother’s boldness and will, and By thy prayers thou dost loose transgressions, leading us safely through all assaults.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O Theotokos, thou hast given birth to One of the Trinity Who, by uniting Himself to the flesh, remained immutable, being of two natures, wherefore we venerate the image of His countenance.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 4"
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
              "text": "Glorified in the holy mountain, * the Lord revealed the mystery of the ever-virgin unto Moses * in the flames of the burning bush: * praise ye and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Thou wast revealed to the prophet as the censer bearing the divine Coal Who taketh away sins, O Virgin Theotokos, Mother of our God.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "Daniel foresaw thee as a great mountain, O Virgin Theotokos, from whence Christ, the precious Stone, arrayed Himself in the flesh and brought down the temples of the falsehood of idolatry.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "The great sea-monster of grievous sin and the despair of my passions seek to slay me; but do thou anticipate my need, and save thy servant, O Lady.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 3"
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
                "text": "The God of all, Who through thee came to converse with mortals, assumed the guise of a man, wherefore we venerate His countenance in icons, O Virgin.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
              "text": "Saved by thee, O pure Virgin, * we confess thee to be truly the Theotokos, * and together with the choirs of the bodiless hosts * thee do we magnify.",
              "tier": 2,
              "src": {
                "file": "8-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "With songs the most wise one hymneth thee as the enclosed garden and the fountain sealed by the divine Spirit, O Virgin Theotokos; wherefore, Christ became incarnate within thee as the Tree of life.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 1"
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
                "text": "Describing thine ineffable birthgiving beforehand, the prophet foresaw thee as a sealed book, and the mystery of the incarnation of thine Offspring remaineth incomprehensible.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 2"
                },
                "label": "plain"
              },
              {
                "text": "In compunction of soul we all beseech thee: O Lady, disdain not our supplications, but be thou our compassionate protectress, and hearken unto our prayer.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
                "text": "I fall down before the images of thee and thy Son, O Virgin Theotokos, but those who refuse to venerate them I reject, as I do the deception of Manes; wherefore, in an Orthodox manner I complete my hymnody.",
                "tier": 1,
                "src": {
                  "file": "8-1.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Kontakion, in Tone VIII:",
        "sessional": {
          "text": "To thee, the champion leader, we thy servants dedicate a feast of victory and of thanksgiving * as ones rescued out of sufferings, O Theotokos: * but as Thou art one with might which is invincible, * from all dangers that can be do thou deliver us, that we may cry to thee: Rejoice, thou Bride unwedded!",
          "tier": 2,
          "src": {
            "file": "8-1.pdf",
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
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of repentance, in Tone VIII",
          "spec_mel": null,
          "items": [
            {
              "text": "Look upon my lowliness with Thy compassionate eye, O Lord, for my life will reach its end shortly, and there will be no salvation for me because of my works. Wherefore, I pray: Look upon my lowliness with Thy compassionate eye, O Lord, and save me!",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 1"
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
              "text": "The Judge is coming! Take care, O my soul, and consider the hour of that dread day; for He is without mercy for those who have shown no mercy. Wherefore, before the end cry aloud: Have pity on me, O Savior, Who alone art sinless!",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 2"
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
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
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
            "text": "Secretly pondering in his mind that which was commanded, * the incorporeal one presented himself without delay * in the house of Joseph, * and said unto her who knew not wedlock: * “He Who bowed the heavens down by His descent * shall be immutably contained wholly within thy womb! * And beholding Him assuming the guise of a servant in thy womb, * I am afraid to cry to thee: ** Rejoice, thou Bride unwedded!”",
            "tier": 2,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Pondering that dread day, be vigilant, O my soul, lighting thy lamp and feeding it with oil; for thou knowest not when the cry will come upon thee, saying: “Behold, the Bridegroom!” Wherefore, watch thou, O my soul, lest thou slumber and remain knocking without, like the five virgins; but watch and wait, that thou mayest meet Christ with rich oil, that He may grant thee the divine bridal-chamber of His glory.",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 1"
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
              "text": "Like the harlot I fall down before Thee, that I may receive remission; and instead of myrrh I offer Thee tears from the depths of my heart, that Thou mayest take pity on me as Thou didst her, O Savior, and grant me cleansing of my sins: For like her I cry to Thee: Deliver me from the mire of my deeds!",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 2"
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
              "text": "Today this church is illumined with heavenly light; for therein the angelic armies rejoice, and with them the souls of the righteous are filled with gladness at the memorial of the passion-bearers. Through their prayers, O Christ, send down peace and great mercy upon Thy world.",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 2, item 3"
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
                "file": "8-2.pdf",
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
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "Rejoice, thou portal of the King of glory, * through which the Most High alone hath passed, * and which He hath sealed, ** unto the salvation of our souls!",
            "tier": 2,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "How long, O my soul, shalt thou live in negligence? How long shalt thou languish in despair? Rouse thyself from the sleep of despondency, O wretched one, pondering thy works; groan and tremble before the sentence of the just Judge, to Whom thou must give answer in that hour. How wilt thou be delivered from the burning fire which awaiteth thee who remainest incorrigible? Before the end, cry unto the Judge: Grant me remission of sins, O Savior, for Thou alone art long-suffering!",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 1"
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
              "text": "Before the end, bring thou the groaning of the publican and the lamentation of the harlot unto Him Who knoweth thy hidden deeds, O my soul, and cease not to make confession with lamentation and weeping, with fasting and vigils, crying out in prayer: “I have sinned! Cleanse me, O Savior, through the supplications of Thine angels, and save me, in that Thou art compassionate!”",
              "tier": 1,
              "src": {
                "file": "8-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 2"
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
            "text": "O divinely joyous, pure and blessed one, with the powers on High, the archangels and all the incorporeal ones, beseech Him Who was born of thee out of the loving-kindness of His compassions; that before the end He grant us forgiveness, the cleansing of our sins and amendment of life, that we may find mercy.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance to our Lord Jesus Christ and His holy martyrs, the composition of Joseph, in Tone VIII",
          "heading_rubric": "Canon of repentance to our Lord Jesus Christ and His holy martyrs, the composition of Joseph, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Deliver me from Gehenna, which I have earned by mine unseemly deeds, O Redeemer, and in my mind enkindle the divine fire of Thy love.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "I have made myself subject to the passions. I have become darkened, and shown myself to be irrational, though I was honored with the ability to speak. O Lord, by the judgments which Thou knowest grant that my soul may arise, and save me!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Afflicted with wounds, your bodies showed forth your upright and unbreakable character and your love for the Creator, O all-praised and crowned martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 3"
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
                  "text": "The rivers of blood which flowed from the bodies of Thy holy and glorious spiritual athletes drowned the thorns of the madness of idolatry by Thy power, O Compassionate One.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "O pure one, cure me of the passions of soul and body, who am cruelly afflicted by deadly sin, that with faith I may ever call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 5"
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
                "text": "O Lord, Creator of the vault of Heaven * and Builder of the Church, * do Thou strengthen me in Thy love, O Summit of desire, * O Support of the faithful, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "With what eyes shall I, who have kept not one of Thy commandments, gaze upon Thee, O Christ my Savior? How shall I stand before Thine unbearable throne to give answer for my countless evils?",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Stretching forth the hands of Thy compassions, accept me as of old Thou didst the prodigal who had likewise enslaved himself to the dishonorable passions, for I too have departed far from Thee, O supremely good Jesus Who lovest mankind.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Having established yourselves upon the rock of the understanding of God, O martyrs and passion-bearers of Christ, with the sword of the Faith ye cut off the thorns of ignorance at the root, and produced the fruits of suffering.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 3"
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
                  "text": "Let the martyrs be praised: the unshakable pillars of the true Faith, the most splendid ornaments of the Church, the most sacred lambs of Christ, who were willingly slaughtered.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "I have acquired thee as a mediator amid perils, O most holy one; and after God I have thee as my tireless intercessor. May I find thee delivering me from all condemnation on the day of judgment, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 3, item 5"
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
                "text": "From the overshadowed mountain, * from the only Theotokos, * the prophet in divine vision * foresaw Thy coming in the flesh, O Word, * and with fear he glorified Thy power.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Great is the struggle when the soul is parted from the body; and dreadful the trembling when the Judge taketh His seat and sinful men are condemned! Woe is me! What shall I do when I am condemned?",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Possessed of a heart full of defilements and a burden of sin which is almost unbearable, I flee to Thy compassions, O Master. Despise me not, but take pity on me, I pray!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 2"
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
                  "text": "Your death was shown to be precious in the sight of God, O valiant passion-bearers; for though afflicted with myriads of pangs and wounds, ye did not deny Him.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 3"
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
                  "text": "The enemy was wounded by the wounds of the martyrs, and his vaunted pride hath fallen. Magnified is He Who bestowed crowns upon them, glorified with hymns divine.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With faith I entreat thee, O Birthgiver of God, the pure receptacle of the Master: Cleanse me of every defilement, and show me to be the abode of the all-accomplishing divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "Illumine us O Lord with Thy commandments, * and with Thine arm raised on high * grant us Thy peace, * O Lover of mankind!",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "With mine evil ways I have embittered Thee, O Lord, committing unseemly acts; but have pity on me who repent, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Possessed of a mind which doth not recoil from evils, I have no sense of my foolishness. Resolve my perplexity, O Jesus, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "The Bestower of light set you like stones brilliant in the knowledge of God and dispelling the darkness of delusion, O divine martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 3"
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
                  "text": "Ye set the laws of God against the wicked laws, and preaching God, ye earnestly willed to be slain for His sake.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Mortify the movements of my flesh, O pure maiden, who by thy birthgiving slew the living sin of our first parent.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "Thou O Lord, didst place Jonah alone within the sea monster. * Do Thou save me, * who am ensnared in the nets of the enemy, * as thou didst save him from corruption.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Christ, Bestower of light, shine forth the solar light of repentance upon me who am in the darkness of transgressions, that I may hymn Thy goodness.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I ever tremble before Thy dread judgment-seat, yet, ever enslaved to wicked habits, I do not put away mine evil deeds. Set me aright, O Christ, that I may hymn Thy goodness.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "The choirs of the martyrs of Christ suffered, vanquished the hordes of the demons, and united themselves in joy to the angelic choirs. By their prayers, O Lord, save Thou our souls.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 3"
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
                  "text": "Thou didst show Thy martyrs to be mighty in Thy power, O Lord, and they cast down all the power of him who of old caused man to fall. By their prayers, O Lord, save Thou our souls.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 6, item 4"
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
                  "text": "That I may ever glorify thee with cries of thanksgiving, O all- immaculate one, drive the darkness from my soul and by the light of repentance release me from dark offenses.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "The Children of Judaea, * who of old came to dwell in Babylon, * trampled underfoot the flame of the furnace * through their faith in the Trinity, * as they sang: 'O God of our fathers, blessed art Thou.'",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Grant me sighs, O Christ, as once Thou didst to the publican, washing away the filth of mine evils as Thou didst for the harlot; and have pity on me, O Compassionate One. O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 1"
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
                  "text": "With the oil of sincere repentance heal me who have fallen among soul- destroying thieves and am grievously wounded, O Savior, and with pity move me to chant unto Thee: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 2"
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
                  "text": "Ye died to the world, O valiant passion-bearers, and in nowise denied the life-bearing Christ, Who underwent death, but as ye suffered, ye chanted: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 3"
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
                  "text": "Confessing the one nature of the Trinity in three Hypostases, O wise passion-bearers, ye set at naught the falsehood of idolatrous polytheism, chanting: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 4"
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
                  "text": "God, the Word of God, making His abode in thy womb, O pure Virgin Mother, revealed thee to be the helper of all the oppressed, who cry aloud: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 7, item 5"
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
                "text": "Glorified in the holy mountain, * the Lord revealed the mystery of the ever-virgin unto Moses * in the flames of the burning bush: * praise ye and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O Savior, despise me not who am led astray by the love of carnal pleasures, who have foolishly estranged myself from Thee, O Word, and likened myself to all the beasts; and granting me conversion before the end, save me.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 1"
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
                  "text": "In nowise do I leave off sinning, nor do I ever turn from my ways, but, wretch that I am, I cry: I have sinned against Thee, O Lord! Have mercy on my hardened soul, O Compassionate One!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 2"
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
                  "text": "Baptized in the streams of your blood, O valiant passion- bearers of the Lord, ye were not defiled by further pollutions; and, crowned, ye join chorus unceasingly with the angels.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Enlivened by the hope of things to come, the valiant martyrs of piety endured the cruelty of tortures; and having died, they unceasingly stand before the throne of the Master.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Thou art the confirmation of those who stand and the setting aright of those who have fallen, O Virgin; wherefore, raise me up who have fallen, that I may glorify thee, who art blessed and full of joy.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "Every ear is awestruck at hearing of God's ineffable condescension, * for the Most High voluntarily descended and assumed flesh, * becoming man in the Virgin's womb; * wherefore we the faithful magnify the most pure Theotokos.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "As Thou didst cleanse the harlot of old, who fell down before Thee in tears, O Savior, and as Thou didst justify the publican who merely sighed, O Word* and as Thou didst accept Manasseh and have mercy on the penitent David, O Lover of mankind, so do Thou accept and save me.",
                  "tier": 2,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 1"
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
                  "text": "Sigh and shed tears, O my soul; abandon thy former offenses, and fall down, before Him Who clearly knoweth thy hidden deeds, and cry out with fervor: I have sinned against Thee, O Lord! Freely take pity on me, O greatly Merciful One, in Thy great compassion.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 2"
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
                  "text": "The divinely illumined passion-bearers, who suffered patiently on earth, have now received the sure inheritance of the kingdom, and, rejoicing, they partake of the delight of paradise. By their prayers, O Christ God, grant us a share in Thy glory.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Ye were shown to be beacons shining with the light of the never-waning East, O most wise ones; and ye destroyed the night of ungodliness, and with sacred rays have illumined all who magnify your splendid feast, O passion-bearers.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 4"
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
                  "text": "O Lady, portal of the Light, enlighten the eyes of my heart which the thick darkness of sin hath darkened; and send down upon me a ray of repentance, O pure one, and by thy mediation free me from the everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 5"
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
            }
          },
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy incorporeal angels, the composition of Theophanes, in the same tone",
          "heading_rubric": "Another canon, of the holy incorporeal angels, the composition of Theophanes, in the same tone:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "As the chief leaders of the holy angels, radiantly delighting in the vision of God, on our behalf entreat the Savior, the Bestower of good, O archangels.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Beset by violent passions, we, the faithful, now flee to you as our intercessors, O divine archangels. Earnestly entreat now the Master on our behalf.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 2"
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
                  "text": "Be thou a refuge, haven, bulwark and intercessor for me, O Virgin Mother of God, who hast given birth in the flesh unto God, the all- compassionate Redeemer.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Adorned with the multifarious gifts of the angelic rank, O supreme commanders, in that ye are leaders of the hosts, by your intercessions keep the Churches of Christ steadfast.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 1"
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
                  "text": "Crowned now with the beauties of Orthodoxy and wielding the sword of God’s good pleasure, O divine archangels, deliver the fullness of the faithful from perils, in that ye are right glorious divine intercessors.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 2"
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
                  "text": "Thou wast the divine tabernacle of Life incorruptible, O pure Mother who alone from all ages wast revealed as virgin; wherefore, By thy prayers guide me who am in the shadow of death, unto life.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O ye two who now lead the assembly of angels, from all misfortunes save those who have recourse to your protection.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "O beholders of the effulgence and benefactions of the Godhead and most glorious supreme commanders, enlighten now your flock.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 2"
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
                  "text": "The divine armies of incorporeal beings glorify thee in sacred manner, O all-immaculate Mother of God; for thou hast given birth to their Creator.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Standing round about God, and illumined with the rays emitted by Him, O supreme commanders, preserve ye your flock.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 1"
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
                  "text": "As mediators of deliverance for all, pray ye to our Master and God, that He grant us deliverance.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O all-pure one, we call thee the mystical myrrh, who hast given birth in the flesh unto God Who poureth forth gifts of sweet fragrance.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                "text": "I will pour out my prayer unto the Lord, * and to Him will I proclaim my grief; * for my soul is filled with evils, * and my life unto Hades hath drawn nigh, * and like Jonah I pray unto Thee: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O beholders of God, who have been granted to stand unwaveringly before the dread throne, ye now delight in the effulgence of the Holy Trinity. Pray ye, O archangels, that those who have recourse to you may be delivered from perils and sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "O archangels who behold God, most glorious Michael and Gabriel, pray ye, that those who hymn you in song may receive the hospitality of the Master, everlasting joy and divine splendor.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 2"
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
                  "text": "Let the divinely beauteous Virgin Theotokos be glorified as the animate bridal-chamber of the Master, a lily radiantly resplendent with the brilliant beams of virginity amid a plethora of thorns.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 3"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The Benefactor of all bestowed upon you many-faceted grace, O divine supreme commanders. Save ye now the Church which singeth to Him: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 1"
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
                  "text": "Strengthened by the power of Him Who seeth all things, ye manifestly watch over all the ends of the earth and save all who chant with faith: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Having thee as a haven of salvation, O Virgin Theotokos, we flee the tribulations and tumults of life, crying out to thy Son: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 7, item 3"
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
                "text": "The King of heaven, * Who is glorified by the hosts of angels, * let us praise and supremely exalt throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The angels who stand before Thee and hymn Thine ineffable and unutterable glory, and who pray now to Thee, O Christ, do Thou accept throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 1"
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
                  "text": "O Christ, Who alone art good, accept the angelic armies who pray now for us and hymn Thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 2"
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
                  "text": "With thy most radiant brilliance thou dost enlighten those who hymn thee with faith, O Mother of God, and praise thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 3"
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
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Saved by thee, O pure Virgin, * we confess thee to be truly the Theotokos, * and together with the choirs of the bodiless hosts * thee do we magnify.",
                "tier": 2,
                "src": {
                  "file": "8-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Show now Thy Church to emulate in virtue the choirs of the incorporeal beings, guarding Thy flock with the angels, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 1"
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
                  "text": "Pray ye, O most glorious angelic helpers, that salvation be given by God to the souls who flee beneath your protection.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
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
                  "text": "Holding in thine arms Christ, the Sun of righteousness, O Virgin, thou didst shine forth like the dawn upon those had become lost in the darkness.",
                  "tier": 1,
                  "src": {
                    "file": "8-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 3"
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
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone VIII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone VIII:",
        "items": [
          {
            "text": "When I bring to mind the multitude of the evils I have done, and come to consider the dread trial, seized with trembling I flee to Thee, the God Who is the Lover of mankind. Wherefore, disdain me not, I pray Thee, O only Sinless One; grant compunction to my lowly soul before the end, and save me.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Matins, aposticha item 1"
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
            "text": "Grant me tears as once Thou didst to the sinful woman, O God, and grant that I may wash the feet which have freed me from the path of deception, and that a pure life wrought for me by repentance I may offer Thee as myrrh of sweet savor, that even I may hear Thy longed- for voice saying: Thy faith hath saved thee. Go in peace!",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
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
            "text": "What shall we call you, O saints? cherubim, for Christ rested on you. seraphim, for ye glorified Him without ceasing. angels, for ye rejected your bodies. Powers, for ye work miracles. Many are your names, and great your gifts. Pray ye that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Matins, aposticha item 3"
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
        "text": "Those in heaven hymn thee, * O joyously blessed Mother unwedded, * and we glorify thine inscrutable birthgiving, O Theotokos; ** pray that our souls be saved!",
        "tier": 2,
        "src": {
          "file": "8-2.pdf",
          "locus": "Monday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "tue": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of repentance, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Look upon my lowliness with Thy compassionate eye, O Lord, for my life will reach its end shortly, and there will be no salvation for me because of my works. Wherefore, I pray: Look upon my lowliness with Thy compassionate eye, O Lord, and save me!",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 1"
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
              "text": "The Judge is coming! Take care, O my soul, and consider the hour of that dread day; for He is without mercy for those who have shown no mercy. Wherefore, before the end cry aloud: Have pity on me, O Savior, Who alone art sinless!",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 2"
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
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "8-3.pdf",
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
            "text": "O ye faithful, with hymns let us magnify the Theotokos, * the unshakable confirmation of the Faith * and the precious gift of our souls: * Rejoice, thou who didst hold within thy womb the Stone of life! * Rejoice, thou hope of the ends of the earth * and aid of the sorrowful! ** Rejoice, thou Bride unwedded!",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Like the harlot I fall down before Thee, that I may receive remission; and instead of myrrh I offer Thee tears from the depths of my heart, that Thou mayest take pity on me as Thou didst her, O Savior, and grant me cleansing of my sins: For like her I cry to Thee: Deliver me from the mire of my deeds!",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 1"
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
              "text": "My time on earth cometh to an end, my life hath passed by, and Thy dread judgment-seat is made ready, O Savior; the trial awaiteth me, threatening me with fiery torment, and unquenchable flame. Grant me a shower of tears and quench its power, O Thou Who desirest that all men should be saved.",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 2"
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
              "text": "Ye were shown to be noetic beacons, O holy martyrs, for by faith ye abolished the gloom of delusion, lit the lamps of our souls, and entered with glory into the heavenly bridal-chamber with the Bridegroom. Pray ye now, we beseech you, that our souls be saved.",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
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
                "file": "8-3.pdf",
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
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O most pure Virgin Mother of God, heal thou the grievous passions of my soul, I pray, and grant me forgiveness of the transgressions which I have committed, defiling my soul and body, wretch that I am. Woe is me! What shall I do at that hour when the angel will separate my soul from my passion-plagued body? Then be thou my helper and most fervent intercessor; for thee do I, thy servant, have as my hope.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": "Pondering what was mystically commanded",
          "items": [
            {
              "text": "Bringing to mind the day and hour of Thy dread, terrible and implacable tribunal, O Master Christ, I tremble like a malefactor. Shameful are the deeds and grievous the acts which I alone have diligently committed. Wherefore, I fall down before Thee with fear and cry out in pain: Through the supplications of Thy Fore- runner save me, O greatly Merciful One!",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 1"
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
              "text": "O my soul who art wasting thy life in negligence, arise now and lift thine eyes to repentance. Weep bitterly from the depths of thy heart, lest in the life to come thou lament in vain. Restrain thyself, considering the second coming of the Master, and before the judgment condemn thyself, that thou mayest then escape the righteous judgment.",
              "tier": 1,
              "src": {
                "file": "8-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 2"
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
            "text": "By the prayers of Thy bodiless ones, O Christ, * and the Forerunner, * of the disciples, prophets and martyrs, * of all Thy saints and venerable ones, * and of Thy blessed Mother, * we beseech Thee; grant us to walk in Thy light, * and deem us worthy to receive Thy Kingdom ** for the sake of Thy compassionate mercy.",
            "tier": 2,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance to our Lord Jesus Christ and His holy martyrs, the composition of Joseph, in Tone VIII",
          "heading_rubric": "Canon of repentance to our Lord Jesus Christ and His holy martyrs, the composition of Joseph, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "To Him who crushed the enemy with His arm * and led Israel through the Red Sea, * to our Redeemer and our God let us sing, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Fill my heart with compunction, O Christ, that with repentance I may enter Thy habitations, and with confession may pray to Thee Who dost release me from my debts.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Loose me from the bonds of my countless evils, O Word, that in repentance I may walk in Thy righteous footsteps which lead me to the divine resting-place of eternal beauty.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "The great magnificence of Thy martyrs is exalted to the highest, O Christ; for suffering all-gloriously, they were magnified by Thine exceedingly great grace.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 3"
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
                  "text": "By the sprinkling of the divine blood of the holy spiritual athletes the blood sacrificed to the enemy in pagan temples was staunched, and those on earth have been sanctified by the grace of the Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Show me the paths of repentance, O Virgin, and turn me from the way that leadeth to sin, that I may sing to thee, the greatly hymned Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "My heart is established in the Lord, * my horn is exalted in my God, * my mouth is enlarged against mine enemies, * and I rejoice in Thy salvation.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Having washed away the evil pollutions of my heart, O my Christ, in that Thou art good grant that I may appear blameless before Thee on the day of judgment.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 1"
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
                  "text": "Through wickedness the apostate spirit was able to slay me with the sting of sin, O Word; but do Thou Thyself, O Christ, heal me with the life-bearing herb of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "“Let us stand courageously,” the passion-bearers cried out one to another, “that no-one may desert the army. As an ally the Lord standeth before us who suffer with valiant mind.”",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "In hymns let us all honor the faithful martyrs of the Lord, the most precious stones of the Church, the divine pillars of piety.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O Theotokos, the setting-aright of the fallen, from the pit of mine evils raise me up who have fallen, and set me firmly upon the rock of the commandments of God, O Lady.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 5"
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
                "text": "I have heard report of Thee O Lord, * and I was afraid, * for thy counsel is ineffable, * being the ever-existent God, * Thou didst come forth from the Virgin, * wherefore I hymn Thee: * glory to thy condescension, O Christ, * glory to Thy power.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "The enemy deceiver beguiled me into sinfully tasting of the fruit, O good One, and exiled me far from Thee, and made me prey to his fangs. O only Savior, hasten Thou to rescue me!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 1"
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
                  "text": "O Lord, Thou Thyself knowest the hidden and secret things of me who have sinned greatly against Thee. By thy many compassions have pity, O Word of God, and as Thou art full of tender compassion grant me a purifying time of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 2"
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
                  "text": "Overwhelmed by tortures as with waves, O martyrs, ye were guided by the steering of Christ to the havens of the kingdom of heaven, and are truly adorned by Him with crowns of victory.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 3"
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
                  "text": "Cultivating the ground of your hearts with piety, O martyrs, ye sowed upon it the seed of confession, and by grace manifestly reaped the comely Grain an hundredfold.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O all-hymned Lady, with all joy fill thou the mind of me who sing aloud unto thee, granting me goodly tears, occasion for repentance, and an understanding of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "Disperse, O Word, the darkness from my soul, * O Christ God, the Light-Giver, * Having driven out the primordial darkness of the abyss, * grant unto me the light of Thy commandments, * that early in the morning I may glorify Thee.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Creator of all, Who purified the harlot and the lepers by Thy command, cleanse Thou my lowly soul of defiling sin, and make it beautiful with garments of light, I pray, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 1"
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
                  "text": "O Christ God, Who hast released me from the bonds of my many transgressions, guide me, that without hindrance I may walk Thy paths, that, parted from the flesh and dwelling in the holy mansions, I may glorify Thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 2"
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
                  "text": "Having woven for themselves robes of glory, and arrayed themselves beautifully therein, the martyrs dwell in joy in the kingdom on high, adorned with beautiful crowns of victory.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O wise martyrs, ye right wisely traded fleeting things for those which are permanent; for, beset by the afflictions of divers tortures, rejoicing, ye attained unto the true expanse of the kingdom of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 4"
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
                  "text": "O holy Theotokos, who hast given birth in the flesh to the holy Word Who alone resteth in all the saints: Sanctify my mind, which ever remains mired in wicked deeds.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "As Thou didst deliver the prophet from the depths * of the abyss, O Christ God, * so deliver me also from my sins, * O Lover of mankind, * and guide my life, I pray Thee.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Accept me who repent, as once Thou didst the Ninevites who believed in the divine preaching of Thy prophet, O Christ, and guide Thou my life, I pray Thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Drowning amid many transgressions, O Christ, I sigh like the publican, shed tears like the harlot, and like Peter cry aloud: Grant me a helping hand, and save me!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "As beacons of divine radiance, O martyrs, with the rays of your suffering ye ever illumine the earthly world and drive away the deep darkness of delustion.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 3"
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
                  "text": "Having found a most blessed end, O all-holy martyrs, ye ever worship the blessed God, delighting in His effulgence.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "The jar containing manna once prefigured thee, O Theotokos; for thou didst bear Christ, Who hath rained the manna of understanding upon all who honor thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "By an angel didst Thou refresh the Children in the furnace * transforming the roaring flames into dew. * “O God of our fathers, blessed art Thou.”",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Conceived and born in iniquities, I have sinned more than all, O Compassionate One. Grant me the time to obtain justification.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Like the Pharisee of old I have foolishly exalted myself, and have sustained a grievous fall; and seeing me, the adversary rejoiceth. O Word of God, disdain me not!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "The council of the honored martyrs, the invincible army, the holy regiment, who were brave on earth, have been enrolled in the city of the heavens.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having willingly passed through the suffering which winneth immortality, O martyrs, ye pour forth a stream of healings which driveth away our sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "In a surpassing manner thou hast given birth to the Cause of all, Who in the superabundance of His goodness became a man. Wherefore, together we call thee blessed, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "O Thou who dost cover Thy chambers on high with the waters, * Thou Who hast set the sands to bound the sea * and Who upholdest all things: * the sun doth sing Thy praises, * the moon giveth Thee glory, * every creature offereth a hymn unto Thee, * as their Fashioner, throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou hast defiled thy hands with all manner of wicked deeds, O my soul. How canst thou lift them up, and converse with God? And thy feet, which hasten to shameless deeds, thou hast rendered useless. Take care to walk the paths of salvation through repentance.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "I have never abode in Thy commandments, O good Lord, nor have I done Thy will for even a single day. What eyes can I raise to Thee Who rendereth just judgment and shalt send the guilty into the fire of Gehenna?",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Ye extinguished the burning furnace of polytheism, O wise spiritual athletes, pouring forth your unjustly shed blood like water, out of love for the Creator; wherefore, ye have inherited a torrent of delight.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Enduring the severing of your hands and feet, ye transcended your lowly earthly bodies, as though it were others who were suffering, O holy ones; wherefore, ye have now forever been deemed worthy of life on high.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Buffeted by the tempest of sin, I cry to thee, O pure Lady: By thy mediation steer me to saving repentance and the most calm haven, that I, who am ever darkened by sloth, may behold the light of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "Blessed be the Lord God of Israel, * Who hath exalted the horn of salvation on our behalf * in the house of His child David, * wherein the Dayspring from on high hath visited us, * and guided us on the path of peace.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O Christ, mercifully regard me, whose shoulders have received many stripes, and heal them, pouring forth wine and oil upon them, that saved I may magnify with thanksgiving the understanding of Thy loving-kindness, O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 1"
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
                  "text": "As Thou didst deliver from murder and evils the good thief who cried out to Thee, and as Thou didst have compassion upon the harlot who wept, have mercy upon me, the despairing, O Savior as Thou didst Thy great disciple Peter and David the prophet.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 2"
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
                  "text": "Conforming to the passions of Him Who suffered for our sake, O passion-bearers, with Him ye now send up glory together, deified by divine communion, resplendent with rays that outshine the material sun, enlightening the hearts of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "The virtue of the holy spiritual athletes hath shone forth, enriching every city with faith, for they possess them as treasures which cannot be taken away, and which abundantly emit the grace of most glorious miracles. Let us hymn them as our fervent intercessors.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With the brilliant lightning-flashes of the Son of God Who issued forth from thy womb, O all-immaculate one, enlighten those who hymn thee with faith; and by thine intercession rescue us from the darkness devoid of light, and from everlasting torment.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 5"
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
          "title": "Another canon, of the holy forerunner, in Tone VIII",
          "heading_rubric": "Another canon, of the holy forerunner, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Unto Him Who overthrew the tyranny of Pharaoh in the sea * and led Israel over dry land, * let us chant unto Christ our God, * for He hath been glorified throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Forerunner and preacher of repentance, entreat the Savior and Lord that I may repent with all my soul, and that He enlighten the mind and heart of me who honor thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 1"
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
                  "text": "As a most comely lamb of the desert, O Forerunner and martyr of Christ, by thy divine prayer, guide me to the life of repentance, for I now abide in the desert of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 2"
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
                  "text": "By thy mediation free me quickly from the sin which torments me, I pray, O Forerunner, and liberate me from the raging tempest of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 1, item 3"
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
                  "text": "O Mother of the Truth, save me who am cruelly tempest-tossed and oft engulfed by the passions, and steer me to the right calm harbor of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "O Thou Who established the heavens by Thy word, * establish our mind and heart, * that we may hymn and glorify Thee * unto the salvation of our souls.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Let fall upon me drops of repentance, O right glorious martyr and Forerunner of the Lord of all, who in the river baptized the Abyss of loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Ever buffeted in mind by the perilous waves of life, I flee beneath thy protection, O Forerunner of the Savior. Make haste to help me, thy servant.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "In my prayers at night I call upon thee, the day-star of the world, O Forerunner blessed of God. Enlighten the senses of my heart.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Accept this salutation from us, O holy Theotokos: Rejoice, thou who hast given birth to the Joy of the world! Rejoice, jar from whence the heavenly Manna hath been given to all the faithful!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 4"
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
                "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "I weep for myself, for I ever live a life uncorrected. O Forerunner, save and have pity on me who am perishing in my sins.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "In thy supplications and prayers, O blessed one, may I find thee to be a helper strengthening my soul and illumining my mind.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O Forerunner of the Savior, to the harbor of divine understanding steer me who am engulfed and imperiled by the tempest of my offenses.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O most pure one, who hast given birth to Him Who raised up our abased nature, having humbled me who live in arrogance of mind, save me.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "Out of the night of ignorance * hath the day of divine knowledge dawned, * in the light O Christ, of Thy countenance. * May Thy praise shine forth in our hearts * like the light of the dawn.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "As the luminary of the Sun of righteousness, O glorious Forerunner, enlighten me who am astray in the night of life.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 1"
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
                  "text": "At the trial to come, when I must stand before the Lord, may I find thee to be an intercessor, O Forerunner, rescuing me from dread condemnation.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O ever-hymned one, on the rock of the will of God establish me who am imperiled and buffeted by the temptations of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "In that thou art higher than all creation, O Ever-virgin Mother of God, show me as one who eludes the snares of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "O Thou that puttest on light as a garment * grant me also a robe of light, * O All-merciful Christ, our God.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "With the scythe of true repentance clear thou my whole heart, O most wise John, making it fertile with the virtues.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Attacked by the sea-monster of perils, I cry to thee from the depths of my heart, O Forerunner: Free me from grievous pain!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 2"
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
                  "text": "Repent with fervor, O my soul! Lo! the trial cometh! Rise up, crying aloud: O Jesus my God, for the sake of Thy Forerunner have pity on me!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 3"
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
                  "text": "We pray thee, O pure one, who at thy word alone hast given birth in the flesh to the Word: Deliver our souls from the snares of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                "text": "O Thou who in the beginning founded the earth * and by Thy word made the heavens firm, * blessed art Thou throughout the ages, * O Lord God of our Fathers.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O Forerunner, who prepared the ways of the Lord, guide thou my steps unto Him, that I may cry out: Blessed art Thou, O God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 1"
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
                  "text": "O herald of the Light, enlighten my soul, and from cruel darkness and burning Gehenna deliver me who flee to thee with undoubting soul.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "As the fruitful offspring of a barren woman, O wise Baptizer of Christ, By thy prayers transform the barrenness of my heart to fruitfulness.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O chosen ewe-lamb of the Word of God, entreat God Who became incarnate from thee, that at the dread hour He number me with His chosen sheep.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 4"
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
                "text": "The Beginningless King of glory, * before Whom tremble all the hosts of heaven, * ye priests hymn, and ye peoples * supremely exalt throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O Baptist, entreat the Lamb of God Who taketh away the sins of the world, and Whom thou didst point out to all, that He slay my passions and save my soul.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Ease thou the burden of my soul and do battle against those who make war upon me, O Baptist of the Lord; and show me to be unscathed by their malice.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "Fleeing, thou didst withdraw and make thine abode in the trackless wilderness, O prophet; wherefore, I beseech thee: Quickly lay waste to the passions of my soul.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O Virgin, thou art the vine which gave rise to the ripe Cluster, and now givest me the drink of compunction, taking away the drunkenness of mine evils.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "The prophetic vision of the lawgiver on the mountain, * in the fire of the burning bush, * prefigured thy birthgiving O Ever-Virgin, * the salvation of us the faithful, * wherefore with never silent hymns we magnify thee.",
                "tier": 2,
                "src": {
                  "file": "8-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "When I must stand before Thy dread throne, O Word, and the penalty for my deeds will be assessed, what answer shall I give, wretch that I am? For the sake of Thy Baptist, O Lord my God, have pity on me then.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 1"
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
                  "text": "As the voice of the Word, direct my cries unto God, O most wise Baptist, and deliver me from the evil of the demons and the temptations of men, that I may call thee blessed, as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 2"
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
                  "text": "Nurture me with the immortal food of Christ’s commandments, and give me the drink of life to consume, O prophet and Forerunner; and present me who flee under thy protection, to stand before God saved.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
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
                  "text": "O pure and most glorious Virgin Lady, with the Forerunner entreat thy Son and King, that He save from all need those who with faith call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "8-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 4"
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
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone VIII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone VIII:",
        "items": [
          {
            "text": "When I bring to mind the multitude of the evils I have done, and come to consider the dread trial, seized with trembling I flee to Thee, the God Who is the Lover of mankind. Wherefore, disdain me not, I pray Thee, O only Sinless One; grant compunction to my lowly soul before the end, and save me.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Matins, aposticha item 1"
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
            "text": "Grant me tears as once Thou didst to the sinful woman, O God, and grant that I may wash the feet which have freed me from the path of delusion, and that I may offer Thee a pure life wrought for me by repentance, as myrrh of sweet savor, that even I may hear Thy longed-for voice saying: Thy faith hath saved thee. Go in peace!",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
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
            "text": "Ye struggled greatly, O saints, valiantly enduring tortures at the hands of the iniquitous; and though ye have passed from this life, ye still work wonders in this world and heal those made sick by their passions. O holy ones, pray ye that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Matins, aposticha item 3"
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
        "text": "Thy shelter, O Virgin Theotokos, * is spiritual healing; * for, having recourse unto it, ** we are delivered from spiritual infirmities.",
        "tier": 2,
        "src": {
          "file": "8-3.pdf",
          "locus": "Tuesday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "wed": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Beholding the Author of life hanging upon the Cross, the thief said: “If Thou, Who art crucified with us, hadst not become God incarnate, the sun would not have lost its brightness and the earth would not have quaked with trembling. Remember me, O Lord, in Thy kingdom!”",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 1"
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
              "text": "Thy Cross is found to be a scale weighing the two thieves; for the one was brought down to Hades by the burden of his blasphemy, while the other was borne up out of transgressions to the knowledge of theology. O Christ God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 2"
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
              "text": "Exalt ye the Lord our God, * and worship the footstool of His feet, for He is holy.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Beholding the Lamb, Shepherd and Redeemer unjustly lifted up upon the Cross, the Ewe- lamb cried out, bitterly weeping: “The world rejoiceth, receiving deliverance through Thee; but my womb doth burn as I behold the crucifixion Thou dost endure in the tender compassion of Thy mercy, O supremely good God, O sinless Lord!” Wherefore, we cry out to her with faith: Show thou compassion to us, O Virgin, and grant remission offenses unto those who worship His sufferings.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "The tree in the midst of Eden blossomed forth death, but the Tree in the midst of the whole world hath produced life; for they who of old tasted the fruit, while incorrupt, became corrupt, but those who have obtained the latter have inherited incorruption. For by the Cross Thou savest the race of mankind, in that Thou art God.",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "In paradise of old the tree stripped me naked, and by my tasting the enemy brought mortality upon me; but when the tree of the Cross was planted in the ground, it brought forth the raiment of life everlasting, and filled the whole world with all joy. Beholding it uplifted, O ye people, with faith let us cry out together to God: Thy house is full of glory!",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 2"
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
              "text": "Through faith ye were shown to be ever-radiant beacons for the whole world; and placing all your martyric faith in God, with the noetic oil of the Holy Spirit ye fed the lamps of your souls. Wherefore, ye have been revealed to the Church as noetic cups pouring forth healings like water upon all, O all- praised passion-bearers. Entreat Christ God, that He grant remission of sins unto those who with love celebrate your holy memory.",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 3"
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
              "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "8-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O Virgin, when thou didst behold Him Who became incarnate from thee lifted up upon the Cross in the midst of two thieves, overcome with weeping, thou didst cry aloud: “Woe is me, O my most sweet Child! How is it that Thou Who, in that Thou art compassionate, takest away the sins of the world art willingly crucified, desiring, as God, that the hymnody of mortals be offered to Thee in praise?”",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Matins, sessional set 2 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": "Pondering what was mystically commanded",
          "items": [
            {
              "text": "Beholding Thee, O Christ, the never-setting Sun, lifted up upon the Cross, the sun straightway dimmed its rays in fear, the earth quaked, the rocks split asunder with trembling, the veil of the temple was rent in twain, and the dead arose from the graves, glorifying the awesome and divine condescension of our one God.",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
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
              "text": "The tree in Eden once gave rise to bitterness, but the tree of the Cross hath blossomed forth sweet life; for Adam, eating, fell headlong into corruption, but we, enjoying the fruit of Christ, are enlivened and mystically deified, receiving the eternal kingdom of God. Wherefore, we cry out with faith: Glory to Thy sufferings, O Word.",
              "tier": 1,
              "src": {
                "file": "8-4.pdf",
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
            "text": "Ever protected by the Cross of thy Son and God, O Virgin, we vanquish the assaults and wiles of the demons, hymning thee who art truly the Theotokos; and all generations bless thee with love, O most pure one, as thou didst foretell. Wherefore, by thy supplications grant us forgiveness of sins.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Matins, sessional set 3 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the precious and life-creating Cross, the acrostic whereof is, “Grace be to God, Who was nailed to the Tree,” the composition of Joseph, in Tone VIII",
          "heading_rubric": "Canon of the precious and life-creating Cross, the acrostic whereof is, “Grace be to God, Who was nailed to the Tree,” the composition of Joseph, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "The wonderworking staff of Moses, * striking and dividing the sea in the figure of a cross, * once drowned pharaoh the pursuing charioteer, * while it saved the fleeing people of Israel * as they fled on foot, * chanting a hymn unto God.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Word, having died on the Cross, Thou hast given life to me who was slain by the tree through pleasing food, and thereby adorned me with glory. I worship Thy dominion, glorifying Thy sufferings and infinite tender compassion.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 1"
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
                  "text": "When the uncultivated Grape hung upon the Tree, He exuded for us the wine of divine grace which gladdeneth our hearts, wholly doing away with the drunkenness of error, and washing away sins.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Arrayed in wounds and adorned with the pangs of your sufferings, O great martyrs, ye stood with glory before the beneficent Master, rejoicing most gloriously, recognized as godlike.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 3"
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
                  "text": "Manifestly strengthened by divine power, ye manfully cast down all the pernicious power of the mighty one; and beautifully invested with crowns of victory, ye stand before God, rejoicing.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Standing before Thy Cross, O Lord, she who knew not wedlock, beholding Thy wounds, O Master, was wounded, and said: “Woe is me, O my Child! I escaped pain at Thy birth but am now rent apart by pain!”",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "3": {
              "irmos": {
                "text": "O Christ fortify me on the rock of Thy commandments, * Thou Who in the beginning didst establish the heavens with understanding * and didst establish the earth upon the waters, * for there is none holy save Thee, O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Thou Who established the heavens, Who set the foundations of the earth and set the boundaries of the sea by Thy word, Thou wast bound for my sake and nailed to the Cross, that Thou mightest release me from the bonds of sin, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Hurling himself against the tree of the Cross, the enemy and his pernicious demons were slain; he who was condemned for wickedly eating hath found mercy; and creation hath been made steadfast by the confirmation of piety.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The godly and valiant spiritual athletes had their naked bodies subjected to all manner of wounds, sharp blades, and wild beasts by the wicked persecutors; but, protected by God’s hand, they remained undaunted.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Looking in thought with watchful mind toward things to come, the glorious martyrs of Christ utterly spurned transitory things; wherefore, rejoicing, they endured unbearable wounds.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The greatly hymned Ewe-lamb, beholding the Lamb unjustly lifted up upon the Tree, cried out, weeping and shedding maternal tears. And she hymned and glorified His long-suffering.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "4": {
              "irmos": {
                "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "The race of mankind hath been recalled from the fall which the first-formed man suffered of old; for the Creator of all was lifted up upon the Tree, His fingers bloody, His hands run through with nails of His own will, His side pierced by a spear.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "When the Cross was set up, all deceit was felled; when Thy garments, O Savior, were removed, the alien one was stripped naked, and Adam was arrayed in a robe of divine incorruption. Creation was enlightened when Thou wast crucified on the Tree, O Christ, and the sun dimmed its rays.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 2"
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
                  "text": "Like sheep, O martyrs, ye offered yourselves to the slaughtered Word as a new sacrifice; and drying up the sea of falsehood with streams of blood and divine grace, ever halting the outflow of the passions with the rain of miracles, O glorious ones.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 3"
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
                  "text": "Ye endured the mutilation of all your members, O martyrs: the uprooting of your teeth and nails, the pitiless amputation of your hands, tongues, feet and bodily extremities: wherefore, ye have been deemed worthy of the greatest glory, and stand before the God of all.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 4"
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
                  "text": "Seeing her Bullock lifted up upon the Tree, the unblemished heifer cried out, exclaiming: “O my Child, how hath the assembly of the iniquitous failed to have pity on Thee Who had pity on them, but instead by a deceitful plot they unjustly willed to murder Thee?”",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "That Thou mightest deliver me from the beguiling taste (of the fruit), Thou didst deign to taste gall, O Long-suffering One; and that Thou mightest strip me of the mortality of the passions, O Jesus, Thou didst will to be nailed, naked, to the Tree. I hymn Thy loving-kindness!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 1"
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
                  "text": "Making new my soul, which had been corrupted by the passions, O Word, Thou didst commit Thy soul to the Father, whilst hanging on the Tree. Perceiving this, the inanimate earth could not bear it, but quaked in fear, hymning Thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Arrayed in divine sufferings, having followed in the steps of Him Who by His sufferings hath granted dispassion unto all: the only-begotten Word of the beginningless Father: ye were adorned, O martyrs; wherefore, ye are glorified with Him.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 3"
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
                  "text": "Having rejected things below, ye inherited invisible things, making your abode in the divine habitations of heaven, immaterially deified by divine communion, O invincible martyrs of the Savior.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "“A strange sight do I see,” the all-hymned one cried; “How hast Thou, at the sight of Whom the whole earth doth quake, fallen asleep lifted up upon the Tree, desiring to wake those asleep from all ages? I bow down before Thy long-suffering, O my Son!”",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 5"
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
                "text": "The abyss of my sins and the storm of my transgressions * disquieten me and thrust me down * into the depths of despondency; * but do Thou stretch forth Thy mighty arm, * unto me as Thou didst to Peter, * and save me, O my Guide.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "All the hosts of heaven sang and were amazed, seeing Thee hanging upon the Cross, O Word, for by Thy wounds Thou didst heal wounded Adam, and the curse hath been annulled",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Mankind was released from unbreakable bonds when Thou wast bound in the flesh, O Word; and the tyrant is bound like a bird, reviled by all the faithful. Glory to Thy tender compassion, O Christ!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Ye were shown to be like burning coals consuming all the tinder of ungodliness with grace, O godly passion-bearers, for seared on burning coals of fire, ye received divine coolness.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "As sheep of the true Shepherd, ye remained unharmed even in the midst of wild wolves, O passion-bearers; and having finished your race well, O divine ones, ye now dwell in the fold of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 4"
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
                  "text": "“I gave birth to Thee, the Lord of my life, Who art comely in beauty more than the sons of men,” the Virgin cried out; “How dost Thou now die crucified, bereft of beauty, O my Son Who by Thy hand didst make all beautiful?”",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 5"
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
                "text": "Once in Babylon the fire stood in awe * of God's condescension; * for which sake the youths in the furnace, * dancing with joyous steps as in a meadow, chanted: * O God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The hands wherewith Thou didst work wonders were wounded, O Christ; and Thou didst endure wounds, healing all my wounds. O only Long-suffering One, I hymn Thee, crying out: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Crucified, Thy hands and feet were run through with nails, and Thy side, pierced, poured forth drops of remission upon all who unceasingly chant and say: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Let us form a choir, hymning the martyrs of God, who are numbered with the angelic choirs, enlighten those on earth, who ever chant: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Sanctified, ye have come to dwell amid the splendors of the saints, O divine martyrs, sending down upon all who praise you, sanctification and deliverance; wherefore they sing unto Christ: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 4"
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
                  "text": "“O never-setting Sun, how hast Thou set, crucified on the Tree?”, the Virgin cried out to Thee, O Word; “The sun, seeing this, hath halted in its circuit, unable to shine when Thou art suffering, O Master. I hymn Thine innocence, O my Son!”",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 5"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "theotokion"
                }
              ]
            },
            "8": {
              "irmos": {
                "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst spring forth, incarnate, from the root of Jesse, and, wearing the crown of thorns, uprooted the burgeoning thorns of Adam’s crime. Nailed to the Tree, Thou hast healed the curse which sprang forth from a tree, and saving those who chant: Hymn O ye priests! Supremely exalt Him O ye people, throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "That Thou mightest make man god, Thou didst become man, O Lover of mankind; and affixed to the Cross, Thou wast pierced in the side and given vinegar and gall to drink. But saved by Thy sufferings, O Word, we cry out in thanksgiving: O ye priests! Supremely exalt Him O ye people, throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 2"
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
                  "text": "Bound, and slaughtered like lambs, mercilessly roasted in the fire, cast to the wild beasts, your heads cut off, ye rejoiced with indescribable joy, O martyrs, crying out: Ye children, bless; ye priests, hymn; ye people, exalt Christ supremely forever!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 3"
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
                  "text": "O crowned martyrs, companions of the angels, who trampled the incorporeal foe underfoot: make entreaty for us to the Lord, that we may live in love and great oneness of mind, crying out with unwavering heart: Ye children bless; ye priests hymn; ye people, supremely exalt Christ throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 4"
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
                  "text": "Groaning with pain, thou didst cry out maternally; and unable to bear the turmoil in thy womb, thou didst look upon Him Who was born from thy womb hanging upon the Cross, and didst cry out: “What is this sight, O my Child? How is it that Thou sufferest, Who art by nature dispassionate, desiring in every way to free the race of mankind from the passions?”",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "With Thy wounded and blood-stained hands Thou didst heal my wounds, O Master and Lord, in that Thou art good; and Thou didst show me how to walk the paths of salvation, Thy feet affixed to the Cross - those feet at the sight of which, our first parents of old they hid themselves when they beheld Thee walking in paradise.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "When Thou wast set upright on the Cross, the first-formed man, who had suffered a great fall, was set aright, all the might of the enemy fell, and the whole earth was sanctified by the blood and water which flowed from Thy side. Wherefore, we magnify Thee unceasingly, O most Compassionate One.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Bound, O holy martyrs, ye loosed the bonds of the evil one, and with the bonds which ye patiently endured ye bound him and set him under your feet, full of shame, and by divine grace made him a mockery for those who saw him.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 3"
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
                  "text": "By the deposition of the sacred relics of the martyrs the earth hath been sanctified; for having acquired them as a divine wellspring, they pour forth all manner of healings, unceasingly healing the passions of soul and body, and with divine grace annulling the bane of the demons.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Having escaped maternal pangs when I gave birth to Thee, O Long-suffering One, I now suffer pangs in my womb, and my soul is filled with pain, as Thou now willingly partakest of suffering, and dost accept pain!”, cried the most pure one, whom we magnify as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 5"
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
          "title": "Another canon, of the most holy Theotokos, in Tone VIII",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "In thee, O Virgin, I have placed my hope of salvation. Wash me clean of all the filth of sin and make me pure, that I may act and be well-pleasing to thy Son and God and His all-holy name.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "O portal of the Light, enlighten mine eyes which the gloomy serpent hath enshrouded with the darkness of transgressions. Open unto me the doors of repentance, O Virgin; guide me to life, and rescue me from the flame and darkness.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 2"
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
                  "text": "As thou hast boldness before Him Who was born from thee: the only- begotten Word Who with the Father is without beginning: pray thou, O all- immaculate one, that He deliver my soul from the oppression of the demons, from fire and every torment.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 3"
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
                  "text": "O blessed and most pure Bride of God, blessed is the Fruit of thy womb whereby all of us mortals have been delivered from the curse: an ineffable wonder, incomprehensible knowledge, the salvation of all the faithful!",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 4"
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
                "text": "O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "All my desire is directed toward thee, O pure Lady: quickly free me of carnal desires.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 1"
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
                  "text": "O Lady, portal of the Light, shine upon me the pure rays of repentance, and dispel the gloom of my sins.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 2"
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
                  "text": "O only all-immaculate one, deliver us from every lust, from the temptations which assail us, and everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                },
                {
                  "text": "Haste thou, O most pure one, to visit me who am sick, and deliver me from grievous wounds and every affliction.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 4"
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
                "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "With light illumine my soul, which hath been darkened by transgressions, O Ever-virgin, for thou hast given birth to the Sun of righteousness.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 1"
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
                  "text": "Rescue me from temptations and the soul-destroying tempest of life, O Bride of God, and free me from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "O sacred vessel of virginity, habitation of Him Who by nature is uncontainable: Enlighten my soul, which hath been darkened by many passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                },
                {
                  "text": "O all-holy Bride of God, Sovereign Lady of the world: Save me, delivering me from misfortunes and dispelling the tumult of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 4, item 4"
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
                "text": "Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "We hymn thee, O all-hymned and most immaculate Virgin, who contained the Word of God in thy womb.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 1"
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
                  "text": "As thou hast the power to spare and to cure, deliver me from the unquenchable fire and the worm, O Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "Thou art the bulwark and might of the faithful, O all-holy one, from temptations saving those who hymn thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 3"
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
                  "text": "Heal thou mine ailing soul, O most pure Lady who hast given birth to the Salvation of all Who taketh away our infirmities.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 4"
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
                "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O Mary, pure and most honorable habitation of the Creator of all, grant me tears to purify my soul, and rescue me from the judgment and torment to come.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 1"
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
                  "text": "O Theotokos, thou gate of God, reveal to my lowly soul the divine entry, that entering therein with confession, I may receive remission of mine evil deeds.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "My mind is tempest-tossed in the deep of sins amid the waves of despair. Have pity, O Lady, extend thy hand to me, and save me, O thou who hast given birth to the Savior.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 3"
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
                  "text": "Amid the depths of evils, ever beset by turmoil and tribulations, all of us, the faithful, have thee as an intercessor and support, O Theotokos, thou only refuge of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 6, item 4"
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
                "text": "The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * 'Blessed art Thou, O Lord our God, throughout the ages'.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "I beseech thee, O most pure Virgin: Slay the sin which liveth in me, grant that I may receive life, and deliver me from the lot of those who are tormented in the life to come.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 1"
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
                  "text": "Divers passions disquiet me, O pure one who hast given birth to the Source of dispassion. By thy prayers O Theotokos, deliver me from their oppression and from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 2"
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
                  "text": "I sin of mine own free will, and, enslaved to unseemly habits, I flee now to thy customary mercy. Save me who am despairing, O all-holy Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 3"
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
                  "text": "Quench thou the flame of my passions, and still the tempest of my heart, O pure Mother of God; and deliver me from the tyranny of the demons and from everlasting fire, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 4"
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
                "text": "The King of heaven, * Who is glorified by the hosts of angels, * let us praise and supremely exalt throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "O Virgin Birthgiver of God, ease thou the burden of my sins and transgressions, that I may magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 1"
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
                  "text": "O pure one, who hast given birth to God the Judge, by thine appeasing supplications show Him to be merciful unto me, that He may deliver me, from everlasting fire.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "My many transgressions have increased, O Theotokos. Grant me now a helping hand, and deliver me, the useless one, from the ever-burning flame.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                  "text": "O most pure one, I pray thee: Enlighten the eyes of my heart, which have been blinded by the blackness of sin; and show them to be receptive to divine radiance, that for thy sake I may be shown to be pure for thy Son.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 4"
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
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Every ear is awestruck at hearing of God's ineffable condescension, * for the Most High voluntarily descended and assumed flesh, * becoming man in the Virgin's womb; * wherefore we the faithful magnify the most pure Theotokos.",
                "tier": 2,
                "src": {
                  "file": "8-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Take pity on my wretched soul, O most pure one, mortify my destructive passions, and dispel the perplexity which torments me; and grant me holy and ever-vivifying streams of tears, whereby I may be delivered from the grievous condemnation which awaits me.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 1"
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
                  "text": "O pure Virgin Bride of God, thou art a bulwark for Christians and a safe refuge for the world, wherein we are saved; for God, having become incarnate from thee, hath given thee to all as a saving protection. Wherefore, save me who am unworthy, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 2"
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
                  "text": "“O my Son, beginningless Word of the Father, Who art co-enthroned with the Holy Spirit, how is it that Thou hast stretched out Thy most precious feet upon the Cross? What is this great abasement, O supremely good One?”, the all- immaculate one cried out, standing before Thee as Thou wast crucified.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
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
                },
                {
                  "text": "O thou who hast given birth to the Sweetness of all, letting drops of divine sweetness fall, sweeten my soul, which hath been made bitter by the venom of the serpent, O sure intercessor of the faithful, ever estranging me to bitter sin by thy mediation.",
                  "tier": 1,
                  "src": {
                    "file": "8-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 4"
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
            }
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ...,",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone VIII:",
        "items": [
          {
            "text": "The staff of Moses prefigured Thy precious Cross, O our Savior; for thereby Thou didst save Thy people from the depths of the sea, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Matins, aposticha item 1"
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
            "text": "Of old the Garden of Eden put forth in its midst the tree whose fruit was eaten; but Thy Church, O Christ, hath caused the Cross to spring forth, pouring out life upon the world. The one brought death upon Adam, who ate of its fruit, but the other gave life to the thief, who was saved by faith. O Christ God, Who by Thy suffering didst break the snares laid for us by the enemy, show us to share in his salvation, and grant us Thy kingdom, O Lord.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Matins, aposticha item 2"
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
            "text": "O invincible martyrs of Christ, having vanquished error with the power of the Cross, ye received the grace of eternal life; and undaunted by the threats of the tyrants, ye rejoiced as ye were wounded with tortures: and your blood hath now become healing for our souls. Pray ye, that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
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
        "text": "Beholding Thee hanging upon the Cross, O Lord, the pure one who gave birth to Thee, standing nearby, said, weeping: “O my Child, why dost Thou suffer these things in the flesh and hasten to leave me childless? Hasten Thou, and glorify Thyself, that I may be magnified by Thy suffering!”",
        "tier": 1,
        "src": {
          "file": "8-4.pdf",
          "locus": "Wednesday Matins, aposticha Glory/Both-now closer"
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
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "thu": {
      "sessionals": [
        {
          "rubric": "st After the 1 chanting of the Psalter, the Sessional Hymns of the holy apostles, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Let us hymn the divine disciples of our God, who as beacons for the world and guides to our salvation, from the beginning shone forth upon us who were in darkness, and proclaimed to all the Sun of righteousness. And preaching the Trinity in a single Godhead, they cast down the falsehood of idolatry. Wherefore, we beseech you, O apostles: Entreat Christ God, that He grant us remission of sins and great mercy.",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 1"
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
              "text": "Your most wise sound, which truly went forth unto all the ends of the earth, O all-famed apostles of the Lord, manifestly proclaimed the knowledge of God unto all, transformed heathen ignorance into understanding; wherefore, dispelling the darkness of idolatry, it shone forth the light of knowledge upon those in darkness. For this cause we pray: Entreat Christ God, that He grant remission of sins unto those who with love honor your holy memory.",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
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
              "text": "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Having fallen into subtle temptations by enemies, visible and invisible, I am beset by the tempest of my countless sins, O most holy one, and I flee to the haven of thy goodness as to a fervent help and protection. Wherefore, besech Him Who became incarnate of thee without seed, O most pure one, on behalf of all thy servants who unceasingly hymn thee, O all-pure Theotokos, and earnestly beseech Him, that He grant remission offenses unto those who with faith bow down before thy birthgiving.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Matins, sessional set 1 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "The sound of the most wise apostles went forth unto all the earth, as said the prophet; for preaching the Word, they enlightened all the nations; wherefore, praising them with hymns, we honor them as is meet, for they ever entreat Christ that our souls be saved.",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Receiving the commandments of the Lord in their souls with faith, like a rich treasury, the apostles showed themselves to all as benefactors, dispelling the poverty of the demons and enriching all with divine wealth. To them let us all cry aloud: With works of the virtues enrich us also, who are now impoverished, we pray.",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Mortifying the fiery form and movements of the passions with temperance, the martyrs received the grace of Christ, to drive infirmities from the sick, and to work miracles, in that they live even after death. O what a truly most glorious wonder it is that bare bones pour forth healings! Glory to the one most wise Creator and God!",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 3"
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
              "text": "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "8-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O Virgin Birthgiver of God, intercessor for the faithful, joy of the sorrowful, and great consolation of those who weep: With the holy apostles unceasingly entreat on our behalf, Him Who was supra-naturally born from thine all-holy womb, that He deliver us at the hour of trial from grievous condemnation.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Matins, sessional set 2 closer"
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
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": "Pondering what was mystically commanded",
          "items": [
            {
              "text": "Ye were shown to be radiant beacons ever enlightening the whole earth and dispelling the darkness of polytheism with the light of piety through your teachings, O ye who beheld Christ with your own eyes; wherefore, by your holy prayers enlighten me also, who am in the darkness of the passions, that I may walk without fear, O God-bearing apostles.",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
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
              "text": "Trawling for reason-endowed fish with the net of divine words, ye brought the first-fruits thereof to our God; and loving the wounds of Christ, ye arrayed yourselves therein, and showed yourselves to be emulators of His sufferings. Wherefore, assembling as is meet, we now celebrate your festival, O glorious apostles, and cry out together: Entreat Christ God, that remission of sins be granted to those who with love honor your holy memory.",
              "tier": 1,
              "src": {
                "file": "8-5.pdf",
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
            "text": "The Son and Word of God whom nothing can contain, * in a manner beyond all telling and understanding * was born from thee, O Theotokos. * With the apostles do thou pray unto Him, * that He bestow true peace upon the Ecumene * and grant unto us before the end forgiveness of sins, * and in His extreme goodness ** deem thy servants worthy of the heavenly Kingdom.",
            "tier": 2,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy, glorious and all-praised apostles, the composition of Theophanes, in Tone VIII",
          "heading_rubric": "Canon of the holy, glorious and all-praised apostles, the composition of Theophanes, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O radiant choir of the apostles who stand before the great Light, illumine my darkened heart, and guide me to the paths of salvation.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O true friends of the Redeemer, from the love of the passions deliver me who have been beguiled by the many deceits of life and am covered by the night of ignorance.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "As arrows of the Mighty One, O divine apostles, with your keen blades cure those wounded by the evil one, who flee under your protection with faith.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Full of divine majesty, the Fruit of thy womb issueth forth, O pure Mother, saving those beguiled by the malice of the serpent.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O apostles of the Savior, with power ye gird about my heart, which hath been weakened by evil thoughts and the passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Proclaiming the one, Thrice-holy effulgence of God, the disciples dissipated the gloom of polytheism.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "As divine physicians and surgeons, treat ye the evil sores of my heart, O disciples of our God.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 3"
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
                  "text": "Save me, O pure Lady who supra-naturally hast given birth to the Redeemer, Master, Savior and Lord of all.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Ye have been adorned, O glorious apostles, arrayed in divine splendors and enlightened by the rays of Him Who showed you to be luminaries.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O helmsmen of all, ye divine apostles, from every tempest deliver me who am imperiled upon the deep and am shaken by the dangers of life.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 2"
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
                  "text": "Roiling the sea of polytheism, O divinely chosen steeds, with your supplications ye overwhelm the deep of my transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 3"
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
                  "text": "In thy womb thou gavest flesh to the Word Who is equal in activity to the Father, O Virgin; wherefore, thou hast been revealed to transcend all creation, O Lady.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 4"
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
                "text": "Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "As helmsmen, O apostles, to the broad expanse of salvation guide me who am hemmed in by many transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O apostles who beheld God with your own eyes, from every dishonorable act deliver me, who honor your all-honorable council, I pray.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "In that ye emulated the sufferings of the Savior, O holy apostles, drive all passion for luxury from my soul.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Cure my sick soul, O most pure Lady who hast given birth to Him Who taketh away the infirmities of all.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "I will pour out my prayer unto the Lord, * and to Him will I proclaim my grief; * for my soul is filled with evils, * and my life unto Hades hath drawn nigh, * and like Jonah I pray unto Thee: * Raise me up from corruption, O God.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Ye cast down the temples of the idols, which shook at the sound of your supplications, O disciples of Christ. And I pray with faith: Break ye the idols of my mind, and show me to be a temple of God, though I am guilty of many sins.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O chosen ones who beheld God, and who like stones were founded upon the immovable Rock, save my heart, which hath foolishly been founded upon the sand; for the rivers rage dangerously and buffet me cruelly.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 2"
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
                  "text": "O friends of Christ, from the beguiling love of the flesh deliver me, who have shown myself to be vile by my great evil; and bind me to the love of Him Who loveth sinners in the great mercy of remission.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "The Creator, choosing thee, O maiden, as a rose, as a most pure lily, as an aroma of sweet fragrance, from the beautiful vales of the world, and making His abode in thy womb, and being born from thee, hath filled all things with sweet savor.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 4"
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
                "text": "The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * 'Blessed art Thou, O Lord our God, throughout the ages'.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The night of slothfulness holds me, and the darkness of sin covers me. O most wise apostles, who were shown to be the light of the world, hasten ye to illumine my darkened heart.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 1"
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
                  "text": "O divinely eloquent ones, who were shown to be another heaven declaring the glory of our God, from the indignity of the passions deliver those who with faith have recourse to your mighty protection.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 2"
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
                  "text": "O apostles, who were shown to be burning coals alight with the fire of the Comforter, utterly consume all the tinder of our malice, and forever deliver us from, the unquenchable fire.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 3"
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
                  "text": "Thou wast shown to be a mountain overshadowed and unquarried, from whence the Stone was cut; wherefore, O Lady, grant compunction to my darkened soul, which hath been hardened by the bitter love of pleasures.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Strengthen my soul, which is whirled about by the passions, O ye who are the unbreakable foundations and unshakable pillars of the Church, the bulwark of the faithful, who draw out those who are in the depths of perdition, the right calm harbors of those who chant with faith: Ye children bless; ye priests hymn; ye people supremely exalt Him throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O disciples of the Savior, by your supplications raise me up who am in the grave of dark despair and lie in the netherworld, having fallen through pleasures. Have pity, O apostles who beheld God, for ye have manifestly been deemed worthy to be enriched with the Teacher’s compassion throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 2"
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
                  "text": "As thou wast revealed to be splendid in the beauties of virtue, O all-pure one, within thy womb thou didst contain the beautifying majesty of the Creator of all. Him do thou earnestly entreat, that He may throughout all ages majestically enlighten my soul, which is stuck fast in the sins of the passions, but seeketh its ancient beauty, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 3"
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
            "9": {
              "irmos": {
                "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "With the power of God ye broke the jaws of the soul-destroying lions, O apostles, for ye were ordained by Christ to be princes on earth, piously submitting in hymnody to this Spirit; wherefore, make the disorderly movements of my heart subject to the laws of God.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 1"
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
                  "text": "Preaching the Word of God, Who is more comely than all the sons of mankind, and Who appeared in the world, ye made beautiful your feet, as ones proclaiming peace and life; wherefore, by your prayers bring peace to my soul, which is troubled by the passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having mortified your members on earth, ye clothed yourselves in all life, emulating the honored Passion by your sufferings; wherefore, O divinely blessed apostles, with the remedy of true repentance give life to me who have been wounded by the darts of the evil one’s malice.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "In that thou art merciful, O thou who hast given birth to the supremely good God, heal my soul, which hath become sick through grievous passions; and ever deliver me from enemies who goad and attack me, O most pure one, that, saved, I may diligently magnify thee, whom our generation hath magnified.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 4"
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
            }
          },
          "composer": "Theophanes"
        },
        {
          "title": "Another canon, of the holy hierarch Nicholas, the wonderworker, in Tone VIII",
          "heading_rubric": "Another canon, of the holy hierarch Nicholas, the wonderworker, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "That which had been hewn down divided the undivided, * and land unseen was seen by the sun; * water engulfed the cruel enemy, * and Israel traversed the impassable, chanting a hymn: * Let us sing unto the Lord, * for gloriously hath He been glorified!",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Standing before the King of all with the choirs of the heavenly hosts, O blessed Nicholas, from every evil temptation save us on earth who ever call upon thee; and ask release from our transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Enriched by thee, our intercessor, O Nicholas, we cry out to thee with faith day and night: Go now before us who are greatly afflicted by the wicked attacks of the demons and corrupt men, that, finding tranquility, we may praise thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "With the mighty cords of thy prayers, O Nicholas, give over to utter suffocation those who seek to strangle us, from their wicked assault delivering us who cry out in praise: Let us sing unto the Lord, for gloriously hath He been glorified!",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "In a manner transcending the laws of nature thou hast given birth to God the Bestower of the law, Who became a man. As thou art good, O all- immaculate one, entreat Him to overlook the iniquities of us who ever cry out: Let us sing unto the Lord, for gloriously hath He been glorified!",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "That we may honor and hymn thee always, grant us a helping hand, O holy hierarch Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 1"
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
                  "text": "By thine unsleeping prayers, O Nicholas, lull to sleep the perils which arise before us, we beseech thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "By thy mediation, O holy Nicholas, deliver me who am wholly imperiled by the passions and the temptations of wicked men.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 3, item 3"
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
                  "text": "O pure one, entreat the Redeemer, that He grant me release from my sins and the cruel dangers of life.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Because of the multitude of my transgressions I fall into many and countless tribulations. Make haste to help me, O holy Nicholas, emulating the Benefactor.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Living in slothfulness, I weep over myself, who am perishing. By thy prayers, O Nicholas, guide me to repentance.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O father Nicholas, who delivered the three youths who were to be executed, deliver me from all oppression and from everlasting condemnation.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O most pure one, strengthen me to entertain heavenly thoughts, guiding the movements of my soul to the entries of life.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "By thy prayers, O divinely blessed Nicholas, strengthen us to keep the commandments of Christ, our one God.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Having lived in Myra, O Nicholas, with divine fragrance fill us who piously hymn thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Have pity on us By thy prayers, O holy hierarch Nicholas, entreating the most compassionate God, that we be delivered from misfortunes and tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 5, item 3"
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
                  "text": "O maiden full of the waters of life, give drink to all of us who hymn thee with pious mind.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Thy heart, O Nicholas, was like paradise, having Christ the Redeemer within it like the tree of life. Him do thou unceasingly entreat, that He make us all dwellers in paradise, enriched by thee, our fervent helper.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "I pass my life in slothfulness, and sin without fear, wretch that I am; but pondering the trial to come, which cannot be postponed, I am seized with fear. Have pity on me, O God, through the supplications of Nicholas, in that Thou art compassionate.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "When the tempest of many and varied temptations suddenly assails me because of the multitude of mine offenses, I cry out: Leave me not bereft of help, O blessed one, but as thou art merciful extend to me a helping hand, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Thou wast the palace and fiery throne of the Most High King, O Virgin, who art more exalted than the cherubim and seraphim. Wherefore, every breath glorifies thee as the Mother of the Creator.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 6, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst pour forth streams of doctrine, drying up the torrents of heresies and giving abundant drink to the souls of the faithful, O sacred minister Nicholas; wherefore, we honor thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Enabled by the power of the Trinity, thou didst receive the strength to destroy false graven images; wherefore, I entreat thee with faith, O Father: Drive out the passionate idols of my mind.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Thou wast the primate of the people of Myra, and even after death pourest forth divine myrrh, O most blessed Nicholas, dispelling the fetid ailments of us who approach thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 3"
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
                  "text": "Thou didst stop the flow of death, O thou who hast given birth to God immortal. Him do thou beseech, O pure one, that He mortify the passions of my lowly body, and grant me life.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                "text": "Treading down the fiery flame in the furnace, * the divinely eloquent children sang: * 'Bless the Lord, ye works of the Lord'.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Enlightened by the radiant beams of the three-Sunned Godhead, O divinely wise and holy hierarch Nicholas, By thy prayers dispel the darkness of my passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O Nicholas, initiate of the sacred mysteries, who delivered the three generals from death by thine awesome appearance, deliver us also from all deadly harm.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "By thy prayers, O most blessed Nicholas, make steadfast those who are beset by the temptations of the demons and oppressive men, and save us unharmed.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Bring entreaty to the Lord, that He have pity and save those who have recourse to thee with faith, O all-holy Virgin, our helper.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 4"
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
                    "file": "8-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Saved by thee, O pure Virgin, * we confess thee to be truly the Theotokos, * and together with the choirs of the bodiless hosts * thee do we magnify.",
                "tier": 2,
                "src": {
                  "file": "8-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "As thou art the deliverer of those who with faith pray to thee in their sorrow, O Nicholas, deliver me from all malice, entreating the Lord God in prayer.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "O most holy father Nicholas, who art now with the heavenly choirs, beseech the good God, that He save us.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "Judgment is at the gates! Be watchful, O my soul, and cry out to God the Judge: Through the prayers of Nicholas save me, O Lord!",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
                  "text": "As the receptacle of the Light, O Virgin, enlighten my soul, which hath been darkened by the passions, that I may ever glorify thee with faith and love.",
                  "tier": 1,
                  "src": {
                    "file": "8-5.pdf",
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
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the holy apostles, in Tone VIII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the holy apostles, in Tone VIII:",
        "items": [
          {
            "text": "Fervently loving Thee on earth, O Lord, Thine apostles considered all to be but dung, that they might acquire Thee alone; and they gave their bodies over to wounds for Thee; wherefore, glorified, they pray for our souls.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
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
            "text": "O Lord, Thou didst magnify the memory of the apostles on earth, for assembling together thereon, we all glorify Thee; since for their sake Thou hast granted healings, peace and great mercy to the whole world by their prayers.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Matins, aposticha item 2"
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
            "text": "Arrayed well in the breastplate of the Faith, having armed yourselves with the Cross as a sword, ye showed yourselves to be mighty warriors, manfully opposed the tyrants, and cast down the deception of the devil; and, victorious, ye were granted crowns. Pray ye ever on our behalf, that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Matins, aposticha item 3"
            },
            "label": "martyrs"
          }
        ],
        "verses": {
          "ref": "shared.weekday_aposticha_verses.sets.thursday_matins_as_printed"
        }
      },
      "aposticha_theotokion": {
        "text": "Rescue me, O lady, * from the hands of the man-slaying serpent, * who wickedly desireth to devour me utterly. * Crush thou his jaws, I pray thee, * and set at naught his wiles, ** that, delivered from his talons, I may magnify thine aid.",
        "tier": 2,
        "src": {
          "file": "8-5.pdf",
          "locus": "Thursday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "fri": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Beholding the Author of life hanging upon the Cross, the thief said: “If Thou, Who art crucified with us, hadst not become God incarnate, the sun would not have lost its brightness and the earth would not have quaked with trembling. Remember me, O Lord, in Thy kingdom!”",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 1"
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
              "text": "Thy Cross is found to be a scale weighing the two thieves; for the one was brought down to Hades by the burden of his blasphemy, while the other was borne up out of transgressions to the knowledge of theology. O Christ God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 2"
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
              "text": "Exalt ye the Lord our God, * and worship the footstool of His feet, for He is holy.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Ever preserved by the Cross of thy Son and God, O Virgin, we confound the assaults and wiles of the demons; and hymning thee as the true Theotokos; with love all of our generations call thee blessed, as thou didst foretell. Wherefore, By thy prayers grant us remission of our offenses.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Matins, sessional set 1 closer"
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
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "The tree in the midst of Eden blossomed forth death, but the Tree in the midst of the whole world hath produced life; for they who of old tasted the fruit, while incorrupt, became corrupt, but those who have obtained the latter have inherited incorruption. For by the Cross Thou hast saved the race of mankind, in that Thou art God.",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "In paradise of old the tree stripped me naked, and by my tasting the enemy brought mortality upon me; but when the tree of the Cross was planted in the ground, it brought us the raiment of everlasting life, and filled the whole world with joy. And beholding it uplifted, O ye people, with faith let us cry out together to God: Thy house is full of glory!",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 2"
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
              "text": "Today this church is illumined with heavenly light; for therein the angelic armies rejoice, and with them the souls of the righteous are filled with gladness on the memorial of the passion-bearers. Through their prayers, O Christ, send down peace and great mercy upon Thy world.",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 3"
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
              "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "8-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "When thou didst see Him Who became incarnate of thy precious blood and was born from thee in a manner transcending understanding, hanging upon the Tree in the midst of malefactors, O pure one, thy womb was filled with pain, and thou didst cry out, weeping maternally: “Woe is me, O my Child! What is this Thy divine and ineffable dispensation, whereby Thou hast given life to Thy creation? I hymn Thy tender compassion! “",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Matins, sessional set 2 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": "Pondering what was mystically commanded",
          "items": [
            {
              "text": "By Thy Cross and death was the tyranny of the enemy cast down, and death put to death. The dead of times past, whom Hades held bound as captives within itself, were suddenly released, O good One, and they hymn Thy might and Thine awesome and divine condescension, whereby Thou hast saved us.",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
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
              "text": "Deluded by a false hope of deification, our ancestor thereby brought corruption upon all; but through Thy Cross Thou pourest forth life upon all, in that Thou art supremely good; for Thou wast willingly nailed thereto, that Thou rnightest release us from the primal curse. Wherefore, we hymn Thy voluntary suffering, O Christ.",
              "tier": 1,
              "src": {
                "file": "8-6.pdf",
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
            "text": "Upon beholding the Lamb and Shepherd suspended upon the Cross, the unblemished ewe-lamb, cried aloud: “O my Child, what is this strange and unexpected sight? How can the Life of all be condemned to death like mortals? But rise Thou from the dead on the third day, O Word, as Thou didst say, that, rejoicing, I may glorify Thee!”",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Matins, sessional set 3 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the precious and life-creating Cross. The composition of Joseph, in Tone VIII",
          "heading_rubric": "Canon of the precious and life-creating Cross. The composition of Joseph, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Inscribing the invincible weapon of the Cross upon the waters, * Moses marked a straight line before him with his staff * and divided the Red Sea, * opening a path for Israel who went over dry-shod. * Then he marked a second line across the waters * and united them in one, * overwhelming the chariots of Pharaoh. * Therefore let us sing to Christ our God, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Stretching forth Thy divine hands on the Cross, O Jesus, Thou didst gather to Thyself the creation of Thine own hands’, freeing all from the hands of the evil one and subdueing him with Thy mighty hand, O King of all. Wherefore we the faithful hymn Thy majesty, for Thou hast been glorified.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 1"
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
                  "text": "Harmful was the bitter eating of the tree in Eden, which brought death upon us; but, dying on the Cross, Christ hath poured forth life upon all, slaying the serpent with His divine power. Wherefore, let us sing to Him, our God, for He hath been glorified!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Waging war, the multitude of the martyrs fought against the passions with Thy Cross and sufferings, O Jesus, and before the enemy they confessed Thee to reign over creation; and they endured tortures and boundless tribulations. Wherefore, they have received the glory of the Lord of glory.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "Finding deliverance through the sprinkling of Thy deifying precious blood, O Lord, Thy martyrs truly shed their own blood, and, unjustly tortured, they refused to offer sacrifice to the vile soul-destroying demons. Wherefore, they brought themselves as honorable whole-burnt offerings unto Thee, the King of all.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 4"
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
                  "text": "When she saw Thee, Who seest all things, nailed to the Cross, the immaculate one said, lamenting: “What is this, O my Child? How have those who enjoyed Thy many gifts rewarded Thee? How can I bear the pain? Glory be to Thy compassion and awesome dispensation, O Long-suffering One!”",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 5"
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
                "text": "The rod of Aaron is an image of this mystery, * for when it budded it showed who should be priest. * So in the Church, that once was barren, * the wood of the Cross hath now budded forth, * filling her with strength and steadfastness.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Beholding Thee unjustly suspended upon the Tree, the sun changed its bright vesture to black, the rocks split asunder, and the whole earth quaked, O only Savior, Thou deliverance of all.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "Stretching out his arms, Moses prefigured the precious Cross; and we, now making the sign thereof with goodly wisdom, vanquish all the alien hordes of the demons, immune to all their harm.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Enduring sufferings, the passion-bearers emulated the suffering of Christ, and they underwent all manner of tortures for the sake of Him Who willingly suffered, slaying the passions and shining forth life upon the world.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Unwaveringly treading the path of torment, the right glorious passion-bearers cast from their hearts the stumbling-blocks of delusiion, and hastened in gladness to the place of divine rest.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "“I gave birth to Thee in a manner transcending the ways of men’s laws, O my Child,” the Theotokos declared, weeping; “How then have the iniquitous lifted Thee up upon the Tree in the midst of malefactors, O Thou Who alone set forth the law of life?”",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 5"
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
                "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Bearing piety like the cedar, faith like the cypress, and love like the pine, we bow down before the divine Cross.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "By Thy Cross paradise hath been opened, O Savior, and man who had been condemned hath entered it again, magnifying Thy goodness.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 2"
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
                  "text": "Having died, Thou gavest life to all who had died, and didst slay the serpent who introduced sin.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Emulating the sufferings of Christ, the divine martyrs were shown to share in the radiance of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Uniting themselves to the beautiful Word, the martyrs were adorned; and, loving the Sun of righteousness, they were splendidly enlightened.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 5"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Unto Him Who was perfected before all ages hast thou given birth as a little babe, O all-immaculate maiden; and He hath perfected all things by His Cross and goodness.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 6"
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
                "text": "O thrice-blessed Tree, on which Christ the king and Lord was stretched! * Through thee the beguiler fell, * who tempted mankind with the tree. * He was caught in the trap set by God, * who was crucified upon thee in the flesh, * granting peace unto our souls.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Desiring to clothe us with the vesture of incorruption, for we have been stripped naked, Thou wast stripped naked; and crucified upon the Cross, Thou didst lay bare the wiles of the enemy. Wherefore, we glorify Thy sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "The saving blood which flowed from His side clearly cleansed the world, abolished the blood of the temples of the idols, restored those made subject to corruption by the fruit of knowledge, and poured forth incorruption upon our souls.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Resplendent in the beauty of their many wounds, and signed with the divine Blood, the glorious martyrs passed by the sword which before barred the way, and have made their abode, rejoicing, in paradise.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "How wonderful art Thou, O Christ, in the saints who loved Thee with faith! For, enriched by Thee, they pour forth upon the world rivers of divine healing, drying up the effluence of our passions.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 4"
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
                  "text": "Thou hast healed us who have been afflicted by sin, O most pure Virgin, who hast given birth to the Savior and Physician of all, Who was nailed to the tree of the Cross, and poured forth salvation upon our souls.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 5"
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
                "text": "Jonah stretched out his hands in the form of a cross * within the belly of the sea monster, * plainly prefiguring the redeeming Passion. * Cast out from thence after three days, * he foreshadowed the marvelous Resurrection of Christ our God, * who was crucified in the flesh and enlightened the world * by His Rising on the third day.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "The Cross was planted in the midst of the earth at the place of the skull, and healed the sickness caused by the tree which grew in the midst of paradise; for Jesus the Messiah, Who alone is righteous, appeared in the midst of two iniquitous thieves, and with Himself hath raised up all, and cast down into the abyss him who fell headlong from the heights.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Drawing the divine bow, Thy precious Cross O Christ, Thou didst loose Thine arrows at the slayer; with the nails of Thy hands Thou didst pierce his wrathful and most polluted heart, O Master; and Thou didst utterly slay him, granting life to those he had slain, O Compassionate One.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 2"
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
                  "text": "With the streams of blood which flowed from the bodies of the holy spiritual athletes they quenched all the flame of the madness of idolatry by the Spirit, watered the furrows of the honored Church, and caused the grain of salvation, hope and love to grow, wherewith every soul is nourished by divine grace.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The character of the glorious suffering passion-bearers was enflamed more than with fire, when the evil judges sentenced them to be consumed by material fire; but they were preserved unharmed through the activity and grace of the Holy Spirit, Who crowned them who suffered lawfully.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "A sword pierced thy heart, O most pure maiden, when thou didst see thy Son stretched out on the Cross, enduring sufferings, willingly pierced in His divine side by the spear, and slaying the adverse serpent of darkness; wherefore, weeping maternally, thou didst magnify Him.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                "text": "The senseless decree of the wicked tyrant, * breathing forth threats and blasphemy hateful to God, * confused the people. * Yet neither the fury of the wild beast nor the roaring of the fire * could frighten the three Children: * but standing together in the flame, * fanned by the wind that brought the dew as refreshment, they sang: * ‘Blessed and supremely praised art Thou, * O our God and the God of our fathers.’",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "When Thou wast stretched out upon the tree of the Cross like a grape-vine, O Word of the Father, mystically exuding the wine which doeth away with the drunkenness of disobedience gladdening all who acknowledge Thee to be God the Creator, Who willingly suffered. And it saveth those who chant: O all-hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 1"
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
                  "text": "Thou didst endure the mockery of crucifixion, O Christ my God, bringing an end to the reproaches and sighing of men; Thou didst eat gall, transforming all the bitterness of evil; and Thou didst suffer Thy hands to be wounded, healing the wounds of our souls, O Compassionate One, and commanding us to chant: O all- hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 2"
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
                  "text": "With your pangs, O valiant spiritual athletes, ye gained the life which is devoid of pain; wherefore, having received from on high the grace to heal our sufferings and dispel evil spirits, ye ease our pains, O holy ones; and standing forth before the faithful, ye save those who cry: O all-hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "martyrs"
                },
                {
                  "text": "Ye stood before the tribunal, confessing Christ Who for our sake assumed flesh like ours, though without corruption, O martyrs; and truly showing yourselves to be emulators of His sufferings, ye endured fire and all other tortures, crying out in gladness: O all- hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 4"
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
                  "text": "“I was filled with grief, beholding Thee, my Son, suffering unjustly; and I was wounded in soul when by the spear Thou wast pierced in the side,” weeping and lamenting the Theotokos, the only Lady, cried out, whom we all call blessed as is meet, piously crying aloud: O all-hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 5"
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
                "text": "O ye Children, equal in number to the Trinity, * bless ye God the Father and creator; * sing ye the praises of the Word who descended and changed the fire into dew; * and supremely exalt ye throughout the ages * the all-Holy Spirit, who giveth life unto all.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Blessed is the Tree whereby all the curse of delusion in Eden was annulled, which resulted from the wicked eating of the tree; and Christ the exceedingly glorious One hath been exalted, for in His tender compassion He willingly desired to be lifted up thereon.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Once, the ever-glorious one, crossing his arms in a sacred manner, blessed his grandsons, revealing the form of the sacred Tree, whereby blessing hath been imparted unto all who were cursed by the malignant fruit of the tree and stumbled headlong into the abyss of evils.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "All mankind was set aright when Thou, O Master, wast stretched forth on the Cross. The horde of evil demons fell, and those who were scattered came together in unity; and the might of Thine authority and Thy power are exalted throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 3"
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
                  "text": "O divine spiritual athletes of the Lord, ye have inherited blessed glory, incorrupt sustenance and splendid habitations, having joined the ranks of heaven, ye have now received with gladness the fulfillment of your ever- glorious hopes.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 4"
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
                  "text": "Your courage shone forth more brightly than the sun, O radiant spiritual athletes of Christ, with divine power casting into darkness all the deception of the devil, and with pious wisdom enlightening the hearts of all the faithful throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 5"
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
                  "text": "O most pure Virgin, blessed Mother of Him Who created all things, all of us, the faithful, call thee the noetic cloud, the tabernacle of sanctity, the throne of God, the portal and lampstand of the Light, and the daybreak of the Word.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 6"
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
                "text": "Today the death that came to man through eating of the tree, * is made of no effect through the Cross. * For the curse of our Mother Eve * that fell on all mankind * is destroyed by the fruit of the pure Mother of God, * whom all the powers of heaven magnify.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Exalting Thee most sacredly, O compassionate Master, we bow down before Thy Cross, the spear, the sponge, the reed, and the holy nails which pierced Thy hands and feet, whereby we have found perfect remission and have been deemed worthy to live in paradise.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 1"
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
                  "text": "O how unjustly wast Thou condemned to be nailed, crucified, to the Tree, O Thou Who alone art the most just Judge of all, seeking to justify all who with faith glorify thy voluntary sufferings and dispensation, and who magnify Thee, O my Christ, with faith.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 2"
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
                  "text": "Giving their bodies over to tortures with all their soul, the glorious martyrs endured wounds and a violent death, the severing of their members, laceration, and burning by fire, and were aflame with love for the Lord; wherefore, crowned, they dwell in the heavens.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O Thou Who art the delight of the apostles and martyrs, By thy prayers fill us all with mercy, in that Thou art compassionate, granting us the remission of our sins, deliverance from all evils, and a place to dwell in Thy kingdom, O Thou Who for our sake appeared as a man.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 4"
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
                  "text": "O Virgin, thou wast shown to be a radiant bridal-chamber for Him Who made His abode within thine incorrupt womb, Who by His will endured His blessed passion, and in His ineffable mercy granted dispassion unto all. Worshipping Him with faith, we piously magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos, in Tone VIII",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "By thy visitation, O Mother of God, enlighten my soul, which hath been darkened by the pleasures of life and is constantly vexed by the griefs of the world.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "The gates of heaven have been opened by thy divine birthgiving, O Mother of God. As thou art merciful, grant entry therein to my soul, and guide me to them.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "O Virgin, by thy mercy heal my soul, which hath been shot by the darts loosed by the evil one and is wounded by his wiles and schemes.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "As the hope of the hopeless and setting aright of the fallen, O thou who hast given birth to the divine Light, illumine my soul, which is in darkness.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                "text": "O Lord, Creator of the vault of Heaven * and Builder of the Church, * do Thou strengthen me in Thy love, O Summit of desire, * O Support of the faithful, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Grant me loud sighs, ardent tears and a contrite heart, O Virgin, that I may weep over what I have done; and destroy my growing passions, O thou who alone art all-hymned.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 1"
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
                  "text": "Rescue my soul, which is heavy with sinful slumber and sunk in the bowels of Hades, O Lady, and grant me the thought of true repentance, O divinely blessed one.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 2"
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
                  "text": "Love of contrition and the virtues do thou grant unto my soul, which hath been sunk by my transgressions, that it might love the life of heaven and possess divine desire.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "On thee do I set my hope, O Mother of God, and I am quickly delivered from despair; for I know, I know the richness of thy tender mercies and the power of thy boldness.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O thou who hast ineffably given birth to God the Word, bind up the wounds of my soul with effective herbs, pouring out upon them the precious blood of thy Son, Who destroyed the soul-corrupting belly of Hades, and poured forth resurrection upon the world.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 1"
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
                  "text": "O Bride of God, send down upon my soul the cleansing of transgressions, with streams wash away mine evil thoughts, and grant that it may become pure; for I have fled to thy mediation and help, O Virgin Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 2"
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
                  "text": "Unto thine aid do I now flee, O most pure one. Go thou before me, to deliver me from the cruel tempest of the enemy and the raging torrents of iniquity; and unerringly guide me to thy haven and thy tranquility, O Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 3"
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
                  "text": "With darts of sin the enemy hath wounded my whole soul; he hath defiled my heart with pleasures and turned me away from the straight path. Wherefore, I cry unto thee: Turning me back, heal and save me!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "5": {
              "irmos": {
                "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "With all diligence I hasten to thine aid, O all-immaculate one, and I lift up the eyes of my soul. Turn not away from me, but help and deliver me, in that thou art good, and wash away the defilement of my transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "Deadly poison lay in the fangs of sin, but thou didst supply an antidote thereto in the nails and divine spear of thine Offspring, Who in His tender compassion suffered in the flesh for our sake, O only all-hymned one.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "Grant life to me, who am slain by mine evil ways and corrupted by my transgressions, O thou who hast given birth to eternal Life; and turn me to incorruption by renewing my soul, O divinely blessed one.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 3"
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
                  "text": "Deliver me from the evil of the demons and the malice of men, O Lady who alone hast given birth to the Healer of all flesh and offenses, the Savior and Lord, and quickly heal the pain of my soul and body.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Living in fornication, I have fallen away from God. I have become a wretched slave to pleasures, and am stripped bare of all the divine virtues. But visit me, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 1"
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
                  "text": "I have shunned the commandments given me, and, having withdrawn from life, I have drawn nigh unto death. But instruct me to return, O most pure Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "My life is wicked, full of indifference, but thy mercy is great and ineffable, O most pure one. Let the tender compassion of thy goodness prevail over my weak mind.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "O pure one, who hast given birth to the compassionate Savior and Redeemer, have pity on me, and save and deliver me from those who surround me and mercilessly attack my weakness.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                "text": "The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * 'Blessed art Thou, O Lord our God, throughout the ages'.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Having received the never-waning Light, O pure Virgin, thou art wholly radiant, and dost illumine those who cry to thee with faith: Blessed is the Fruit of thy womb, O most pure one!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 1"
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
                  "text": "That thou mightest show forth thy mercy and love for mankind, O Virgin, lead me up from the depths of evils, who cry out: Blessed is the Fruit of thy womb, O most pure one!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 2"
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
                  "text": "Wounded by soul-destroying darts, unto thee do I flee, O Virgin Mother. By thy prayer wholly protect me, who cry aloud: Blessed is the Fruit of thy womb, O most pure one!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 3"
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
                  "text": "O Mother of the Savior, deliver me, who am held fast by cruel captivity, evil thoughts and sinful guilt, that, saved, I may ever glorify thee as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                "text": "In his wrath the Chaldean tyrant made the furnace blaze, * with heat fanned sevenfold for the servants of God; * but when he perceived that they had been saved by a greater power * he cried aloud to the Creator and Redeemer; * “Ye children bless, ye priests praise, * ye people, supremely exalt Him throughout all ages”.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The Lord Almighty, Who dwelt in thy womb, showed thee to the faithful as a tower of confirmation; and fleeing to it we are delivered from perils and misfortunes, and are freed from temptation, chanting together: Ye priests hymn; ye people supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Let the entreaty of my prayer rise unto the Lord Who issued forth from thy womb, O Lady, that He may deliver me from disobedience to His commandments, from condemnation and the curse of the law, that He may wash away the defilement of my grievous transgressions, in that He alone is merciful.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
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
                  "text": "O most pure Birthgiver of God, cleanse thou the wounds of my soul and my stumblings into sin, washing me clean with the streams which flowed from the side of thy Son; for to thee do I cry, to thee do I flee, and upon thee, who art full of the grace of God, do I call.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 3"
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
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 8, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Heaven was stricken with awe, * and the ends of the earth were filled with amazement, * for God hath appeared in the flesh, * and thy womb was rendered more spacious than the heavens. * Wherefore, the ranks of men and of angels * magnify thee as the Theotokos.",
                "tier": 2,
                "src": {
                  "file": "8-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "O thou who art truly the divine Mother of God, never cease to entreat Him Whom thou didst bear, that He grant now to thy servants remission of sins and perfect forgiveness to them for the evils they have committed; and that He grant them everlasting bliss with all the saints.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 1"
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
                  "text": "O most holy Theotokos, gird about my lowly soul with the might and power of the Spirit, with weaponry and dominion, and arm it with the sword of the Cross. And cleanse the wounds of my sin with the dew of thy love for mankind and thy great mercy.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 2"
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
                  "text": "Be unto me a pillar of salvation, O pure one; and render the hordes of the demons impotent, dispelling the turmoil of dangers and misfortunes, driving far away the assaults of the passions, and granting all of us pure liberation.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 3"
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
                  "text": "O pure and most glorious Mother of God, save those who hymn thee with love, mercifully quelling the tumults of temptation; for as thou hast given birth unto God, O Virgin, thou art able to do whatsoever dost will, and freely grantest mercy. Wherefore, we all magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 9, item 4"
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
            }
          }
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone VIII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone VIII:",
        "items": [
          {
            "text": "The staff of Moses prefigured Thy precious Cross, O our Savior; for thereby Thou hast save Thy people from the depths of the sea, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Matins, aposticha item 1"
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
            "text": "Of old the Garden of Eden put forth in its midst the tree whose fruit was eaten; but Thy Church, O Christ, hath caused the Cross to spring forth, pouring out life upon the world. The one brought death upon Adam, who ate of its fruit, but the other gave life to the thief who was saved by faith. O Christ God, Who by Thy suffering didst break the snares laid for us by the enemy, show us to share in his salvation, and grant us Thy kingdom, O Lord.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Matins, aposticha item 2"
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
            "text": "What shall we call you, O saints? Cherubim, for Christ rested on you. Seraphim, for ye glorified Him without ceasing. Angels, for ye rejected your bodies. Powers, for ye work miracles. Many are your names, and great your gifts. Pray ye that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Matins, aposticha item 3"
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
        "text": "“I cannot bear to see Thee asleep upon the Tree, Who givest wakefulness to all, that Thou mightest give divine and saving watchfulness to those who have fallen into most pernicious sleep through the fruit of disobedience!”, the Virgin, whom we magnify, said, weeping.",
        "tier": 1,
        "src": {
          "file": "8-6.pdf",
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
          "rubric": "st After the 1 chanting of the Psalter, the Sessional Hymns of the holy martyrs, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "O holy martyrs, ye were shown to be noetic beacons, for by faith ye have dispersed the gloom of deception, ignited the lamps of our souls, and entered with glory into the heavenly bridal chamber of the Bridegroom. * Wherefore we now entreat you, intercede that our souls be saved.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 1"
              },
              "label": "plain"
            },
            {
              "text": "By their temperance, the martyrs of Christ mortified the fiery impulses of the passions, and received the grace of Christ, whereby they drive infirmities from the sick, and work miracles, in that they are alive, even after death. O what a truly all- glorious wonder it is, that their bare bones pour forth healings. Glory be to our one God.",
              "tier": 1,
              "src": {
                "file": "8-7.pdf",
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
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "O good One, Who for our sake wast born of the Virgin * and, having endured crucifixion, cast down death by death, * and as God revealed the Resurrection: * disdain not that which Thou hast fashioned with Thine own hand. * Show forth Thy love for mankind, O merciful One; * Accept the supplications of the Theotokos who bore Thee, ** and save Thy despairing people, O our Savior!",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VIII:",
          "spec_mel": null,
          "items": [
            {
              "text": "O prophets, martyrs of Christ, and holy hierarchs, who with the wisdom of piety lawfully finished the good race and received unfading wreaths from God, unceasingly ask His grace for us, that He grant us the forgiveness of our transgressions, in that He is a readily conciliatory God.",
              "tier": 1,
              "src": {
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E O (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain",
              "spec_mel": "Pondering what was mystically commanded"
            },
            {
              "text": "Those who have piously departed from transitory things do Thou number among the righteous in the habitations of the elect, O Master, granting them rest in the place of those who keep festival and in the endless bliss of paradise, forgiving them their voluntary and involuntary transgressions in Thine extreme beneficence, in that Thou art good.",
              "tier": 1,
              "src": {
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 2"
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
              "text": "O Thou Who by the depth of Thy wisdom dost provide all things out of love for mankind, and grantest unto all that which is profitable, O only Creator: Grant rest, O Lord, to the souls of Thy servants; for in Thee have they placed their hope, O Creator and Fashioner and God.",
              "tier": 1,
              "src": {
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 3"
              },
              "label": "for_the_reposed"
            }
          ],
          "verses": [
            {
              "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
              "tier": 2,
              "src": {
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 1"
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
                "file": "8-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "In thee we have a rampart and a haven and an intercessor acceptable to God, Whom thou didst bear, O Theotokos unwedded, salvation of the faithful.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, sessional set 2 closer"
            },
            "type": "theotokion",
            "sourceLabel": "Theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of the holy martyrs, hierarchs, the venerable and the departed, the acrostic whereof is “the divine conclusion of the new Oktoechos,” the composition of Joseph, in Tone VIII",
          "heading_rubric": "Canon of the holy martyrs, hierarchs, the venerable and the departed, the acrostic whereof is “the divine conclusion of the new Oktoechos,” the composition of Joseph, in Tone VIII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us sing unto the Lord, * who led His people through the Red Sea: * for He alone hath gloriously been glorified.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Ye were revealed to be precious pearls rendering the crown of the honored Church brilliant, O most valiant passion-bearers of Christ.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 1"
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
                  "text": "With divine splendors the most wise and holy hierarchs shone forth the dogma of the virtues, enlightening the hearts of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Word Who art wondrous in the prophets and the righteous, we beseech Thee: By their prayers save us!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 3"
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
                  "text": "When Thou, the righteous Judge, shalt come to do what is most just, O Word, save us from condemnation by their supplications.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 4"
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
                  "text": "Knowing thee to be the one who gave birth to the Lord, O Virgin, the choirs of women who suffered, following in thine entourage, are brought before Him.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 5"
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
                "text": "O Christ fortify me on the rock of Thy commandments, * Thou Who in the beginning didst establish the heavens with understanding * and didst establish the earth upon the waters, * for there is none holy save Thee, O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Spurning vile sacrifices with most mighty intent, the spiritual athletes became most pure sacrifices for the Word Who was sacrificed.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Renewing with sanctifying words those grown old through all the passions, ye revealed yourselves to be divine disciples of the Word Who hath renewed the world.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The grace of the all-holy Spirit, which of old was manifestly imparted to the prophets, hath in the latter times filled the ascetics with divine gifts.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Join Thou to the choirs of the saints those who have passed from this life with faith, O God, and in Thine ineffable mercy cause them to dwell in paradise.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 4"
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
                  "text": "Jesus our Lord, Whom naught can contain, made His abode within thy sanctified womb without being circumscribed, O most pure and all- hymned Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Passing through the arena of torments, O divinely blessed spiritual athletes, with the fervor of the Spirit ye utterly consumed the tinder of delusion.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "Thou hast splendidly glorified Thy venerable and holy hierarchs, O Lord. By their divine supplications show me to partake of Thy glory.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 2"
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
                  "text": "The inspiration of the divine Spirit, which enlightened the prophets, gave women the strength to cast down the arrogance of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O supremely good One, having been entreated, grant that Thy servants, whom Thou hast taken to Thyself, may join chorus with all the saints in Thy holy habitations",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 4"
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
                  "text": "In a manner transcending nature, O all-immaculate one, thou hast given birth to the Bestower of the law of God, Who hath refashioned fallen human nature.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "Illumine us O Lord with Thy commandments, * and with Thine arm raised on high * grant us Thy peace, * O Lover of mankind!",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The divine martyrs bore the wounding of their flesh; wherefore, they ever heal our wounds, wounding the demons.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "O holy hierarchs of God, with all the venerable entreat Christ, that He grant us remission of sins.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 2"
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
                  "text": "Laying waste to their bodies with discomfort and asceticism., the venerable women have been deemed worthy of that for which they truly hoped, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "O Immortal One, Who destroyed death by Thy death, in that Thou lovest mankind grant rest to Thy faithful servants, who have died in the hope of life.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 4"
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
                  "text": "Thou hast annulled the condemnation of our first father, O pure one, having given birth in the flesh unto Jesus, the one Lord, Who hath justified all.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "Cleanse me, O Savior, * for many are mine iniquities; * lead me up from the abyss of evils I pray Thee, * for unto Thee have I cried, * and Thou hast hearkened unto me, * O God of my salvation.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "With your honored stripes ye heal the infirmities of men’s souls, O holy martyrs, and ever remove the corruption of their bodies, wounding the multitude of evil demons.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "The choir of the venerable, the company of holy hierarchs, and the divine assembly of sacred women, who struggled steadfastly, have inherited bliss in the heavens.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having mortified the flesh, ye received life, O ascetics; and having tended well the flock of Christ, O most wise and holy hierarchs, ye were deemed worthy of immortal glory after your repose.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 3"
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
                  "text": "O Word, Who art the life of the living and rest of the dead: Cause Thy servants, who have departed from us at Thy divine command, to dwell in the bosom of Abraham, Thy favored one.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 4"
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
                  "text": "The Effulgence of the Father dwelt within thee, O pure one, and with the immaterial rays of His divinity destroyed the darkness of polytheism, illumining the world.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "In Babylon, the pious youths did not worship the golden image, * but, bedewed in the midst of the fiery furnace, * they chanted a hymn, saying: * O supremely exalted God of our fathers, blessed art Thou!",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Having destroying the hedge of ungodliness with your sacred bonds, release from me the burden of mine offenses, O all-praised martyrs, and save me who cry: Blessed is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 1"
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
                  "text": "With the showers of your sacred blood ye extinguished the fire of heresies, and by the flame ye burned up the tares of the delusion of ungodliness, enlightening the souls of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Having mortified the flesh with asceticism, the fasters live even after death; and the choir of the prophets and the righteous, and the company of women who struggled, have been glorified. By their supplications, O Christ, deliver us from misfortunes.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 3"
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
                  "text": "Grant rest, O Christ, unto the souls of all who have fallen asleep in the hope of life, in Thy great loving-kindness overlooking the offenses they committed in this life, O only compassionate Savior. O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 4"
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
                  "text": "As thou art wholly pure, thou didst receive the incarnate Word within thy womb. Him do thou entreat, O most pure one, that He cleanse the infirmities of soul and body of me who have recourse unto thee with pure faith.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "Treading down the fiery flame in the furnace, * the divinely eloquent children sang: * 'Bless the Lord, ye works of the Lord'.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Suffering, ye demolished the temples of the idols and made yourselves temples of the divine Trinity, O passion-bearers of the Lord, conversers with the angels.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 1"
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
                  "text": "Thy priests, O Christ, having clothed themselves in righteousness with those who lived holy lives in times past, now rejoice, most clearly beholding Thy divine beauty.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "By the supplications of Thy most sacred prophets, the ever-memorable women, and the righteous of ages past, O Word, grant Thy mercies unto Thy world.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "O just Judge, when Thou wilt judge those whom Thou hast taken from among us, preserve them uncondemned, overlooking their offenses, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 4"
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
                  "text": "Appearing, with thine enlightenment, dispel the clouds of utter darkness from my soul, O Virgin who hast given birth to the Sun of righteousness.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "With never ceasing praises we magnify thee, * the Mother of God Most High, * who art higher than the most pure hosts, * and who beyond comprehension knew not wedlock, * yet hath truly given birth to God.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "The martyrs stood before the unjust tribunals, condemning all injustice by the grace of Christ, rescuing those held fast by them, and receiving crowns of righteousness.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Ye were shown to be pilots of the Church, piously steering the whole ship with the commandments of God, O all ye blessed primates and pastors. Wherefore, we honor you as our helmsmen.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 2"
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
                  "text": "The councils of the prophets and the venerable entreat Thee, O Lord, and the companies of women who most splendidly suffered and shone forth in asceticism, beseech Thee, O Lover of mankind: Grant us Thy compassions!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 3"
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
                  "text": "O Merciful One, through the supplications of Thy saints grant that Thy servants, who have departed in faith from this vain world, may have a share in the honor and everlasting glory which all the saints of Christ have been granted.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 4"
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
                  "text": "Bearing in thine arms the Fullness of all good things, O all- immaculate one, fulfill the entreaties of thy servants; and direct our steps toward God, giving us the strength to walk in virtue.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
          "acrostic": "the divine conclusion of the new Oktoechos",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the departed, the acrostic whereof is “I fashion an",
          "heading_rubric": "Another canon, of the departed, the acrostic whereof is “I fashion an",
          "odes": {
            "1": {
              "irmos": {
                "text": "Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Having emulated the death of Christ by their death and His honored suffering by their sufferings, all the martyrs have received divine and blessed life.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Overlooking the transgressions of youth and transcending our sins, O Christ our Savior, number among Thine elect Thy servants who have fallen asleep.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "Unto Thy servants whom Thou hast taken to Thyself, O greatly Merciful One, richly grant the glory and joy which those who acquired a blessed sojourn have received.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 3"
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
                  "text": "Thou didst conceive the Word of the Father, Who united Himself hypostatically to the flesh He received from thee, and Who abolished Hades with divine power, O all-immaculate maiden.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 4"
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
                "text": "O Lord, Creator of the vault of Heaven * and Builder of the Church, * do Thou strengthen me in Thy love, O Summit of desire, * O Support of the faithful, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Cleansed of the ancient fall of our first parents, and having been sprinkled with baptism, regeneration and the streams of your blood, O blessed ones, ye reign with Christ.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 1"
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
                  "text": "O Savior, Who wast willingly laid dead in the tomb, and called forth those who abode in the grave, be Thou well-pleased that those whom Thou hast taken from us may dwell in the habitations of Thy righteous.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 2"
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
                  "text": "Entreated by the compassion of Thy divine goodness, which is understood consubstantially, O Master and Savior, give rest to Thy servants, granting them remission of their sins.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 3"
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
                  "text": "He Who alone is manifestly the Lover of mankind, who was incarnate from thy womb and became a man, doth save mankind from the gates of death, O only most pure and all-hymned Mother of God.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                "text": "Thou, O Lord, art my strength and Thou art my power, * Thou art my God and Thou art my joy, * Thou Who, while never leaving the bosom of Thy Father, * hast visited our poverty. * Therefore with the prophet Habbakuk I cry unto Thee, * “Glory to Thy power, O Lover of mankind!”",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "That they might behold Thy glory and splendidly receive Thine effulgence in the heavens, O Master, the divine martyrs endured all manner of tortures, singing to Thee, O Christ: Glory to Thy power, O Lover of mankind!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "In Thy house are many mansions, O Savior, which are set aside for all according to the measure of their virtues, as is fitting. Be Thou well- pleased, O Compassionate One, to fill them with those who have reposed in faith, piously chanting unto Thee: Glory to Thy power, O Lover of mankind!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 3
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
                  "text": "Glory ...: Thou didst appear as a man equal to us, O Immortal One, didst endure death as do all, and hast shown us the path to life. In that Thou lovest mankind, free those who have departed from us, granting them forgiveness offenses, O Master, and give them a share of Thy light.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 3"
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
                  "text": "Thou art the boast of the faithful, the intercessor and refuge, the bulwark and haven of Christians, O unwedded and all-immaculate one, and thou bearest entreaties to thy Son, saving from misfortunes those who with faith and love know thee to be the Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 4"
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
                "text": "O Light never-waning, * why hast Thou turned Thy face from me * and why hath the alien darkness surrounded me, * wretched though I be? * But do Thou guide my steps I implore Thee * and turn me back towards the light of Thy commandments.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "In the habitations of the saints, where the beauteous cry is heard of those who keep festival, grant the life of dispassion, Thine ineffable glory and Thy blessedness, which is past all telling, unto those who have departed, O Thou only Lover of mankind, taking pity on them.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E O (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "for_the_reposed",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "In the bosom of Abraham, where the ranks of the angels are, and where the assemblies of the righteous rejoice, grant Thy servants to dwell, O loving Savior, and be Thou well-pleased that they stand with boldness before Thy dread and divine throne.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "Thou wast shown to be our purification, righteousness and deliverance, O Compassionate One, and by Thy wounds hast healed our infirmities; wherefore, in that Thou art good, grant unto those who have departed the delights of paradise.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 3"
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
                  "text": "Thou didst mercifully assume the form of man, O Merciful One, Who adornest all with the transcendent exaltations of divine glory, receiving animate and reason-endowed flesh from the Virgin’s womb, by which Thou didst destroy death.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 4"
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Wounded in their souls by the love of Thee, Thy martyrs, O Savior, endured many tortures, desiring everlasting glory and Thy sweet communion.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 1"
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
                  "text": "Thou didst cut open the belly of the enemy by Thy death, and didst resurrect all who were held prisoner therein, O Bestower of life. Grant this unto those who have departed, O Benefactor.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 2"
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
                  "text": "Thou didst free Thy servants in Hades from tears and sighing, O Savior, for as Thou alone art full of tender compassion, Thou hast wiped away every tear from the face of all who bless thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 3"
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
                  "text": "He Who formed nature hath taken form in thy womb; He Who is complete hath emptied Himself, O all-immaculate one; He Who alone is immortal hath submitted to death for our salvation.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 4"
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
                  "text": "With the saints give rest, O Christ, to the souls of Thy servants, where there is neither pain, nor sorrow, nor sighing, but life never-ending.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 5"
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
                  "text": "Ikos: Thou alone art immortal, * Who hast created and fashioned man; * but We mortals were fashioned from the earth, * and unto earth shall we return, * as Thou Who fashioned me didst command and say unto me, * “For earth thou art and unto earth shall thou return,” * whither all We mortals are going, * making our funeral lament the song: ** Alleluia, alleluia, alleluia.",
                  "tier": 2,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 6"
                  },
                  "label": "plain"
                }
              ]
            },
            "7": {
              "irmos": {
                "text": "The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * 'Blessed art Thou, O Lord our God, throughout the ages'.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "All the desire of the martyrs was for the one Master, for they were united to Him in love and chanted: Blessed art Thou, O Lord God, throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 1"
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
                  "text": "The splendor of the divine kingdom dost Thou give to those who have departed in faith, granting the vesture of incorruption unto those who cry out: Blessed art Thou, O Lord God, throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 2"
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
                  "text": "Glory ...,With joy and gladness fill Thy servants whom Thou hast taken to Thyself, O Compassionate One, Who called them to Thee, that they might chant: Blessed art Thou, O Lord God, throughout the ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 3"
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
                  "text": "Annulling the curse of Eve, Thou madest Thine abode within the most immaculate Virgin, pouring forth a fountain of blessing upon those who cry: Blessed is the Fruit of thy womb, O most pure one!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 4"
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
                "text": "The instruments of music sounded out in harmony, * and countless multitudes worshipped the image in Dura; * but the three Children, refusing to bow in obeisance, * hymn and glorify the Lord throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Having passed through the struggles of earth, the true martyrs received heavenly crowns, and without ceasing they cry unto Thee: Hymn the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Descending into the nethermost pit, with Thy life-creating hand Thou didst raise up those who abode in the graves, and gavest rest unto Thy servants who reposed aforetime in the faith, O Compassionate One.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "In that Thou art the Wellspring of life everlasting and the Torrent of delight, grant that Thy servants, who have departed unto Thee, may hymn and glorify Thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 3"
                  },
                  "label": "glory"
                },
                {
                  "text": "O Virgin Mary, Theotokos, who hast given birth in the flesh to God, the Savior of mankind: Save those who with faith hymn and supremely exalt thine Offspring throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 4"
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
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Every ear is awestruck at hearing of God's ineffable condescension, * for the Most High voluntarily descended and assumed flesh, * becoming man in the Virgin's womb; * wherefore we the faithful magnify the most pure Theotokos.",
                "tier": 2,
                "src": {
                  "file": "8-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Possessed of invincible and unvanquishable might, O martyrs of Christ, ye set at naught the ungodly edicts of the tyrants and, enlightened by the rays of the Trinity, O right glorious ones, ye were manifestly deemed worthy of the kingdom of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 1"
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
                  "text": "Bitter Hades was destroyed when Thou didst demolish it and raise up those who slept there from all ages. O Compassionate One, in that Thou art good, grant Thy never-waning light to those who have now passed over to Thee.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
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
                  "text": "O Savior, Thou art all sweetness, Thou art truly all desire, all insatiable love; Thou art all ineffable beauty! Wherefore, be Thou well-pleased that those who have passed over to Thee may delight in Thy comeliness, and grant unto them Thy divine beauty.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 3"
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
                  "text": "Save me, O Mother of God, who hast given birth to Christ my Savior, God and man, in two natures but a single Hypostasis: He is the only- begotten of the Father, and issued forth from thee as the firstborn of all creation. Him do we magnify in two natures.",
                  "tier": 1,
                  "src": {
                    "file": "8-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 4"
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
          "condition": "which we chant when there is no Menaion"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. On the Praises, these Stichera of the holy martyrs, in Tone VIII:",
      "praises": {
        "rubric": "On the Praises, these Stichera of the holy martyrs, in Tone VIII:",
        "items": [
          {
            "text": "Ye struggled greatly, O saints, valiantly enduring tortures at the hands of the iniquitous; and though ye have passed from this life, ye still work wonders in this world and heal those made sick by their passions. O holy ones, pray ye that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises item 1"
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
            "text": "O invincible martyrs of Christ, having triumphed over delusion by the power of the Cross, and gained as your reward the grace of eternal life. Ye feared not the threats of tyrants, and suffering tortures ye rejoiced; and now your blood hath become for us the healing of our souls, pray ye that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises item 2"
            },
            "label": "plain"
          },
          {
            "text": "Having clothed yourselves with the breastplate of the Faith, and armed yourselves with the Cross as a sword, ye showed yourselves to be mighty warriors, bravely opposing the tyrants and casting down the delusion of the devil; and, victorious, ye were deemed worthy of crowns. Pray ye ever on our behalf, that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises item 3"
            },
            "label": "plain"
          },
          {
            "text": "For those who have lived in fornication infinite is the torment, the gnashing of teeth, the inconsolable weeping, the fiery Gehenna, the outer darkness, the worm which sleepeth not, the ineffectual tears, and the im- placable judgment; wherefore, before the end let us cry aloud, saying: O Master Christ, grant rest with the elect unto those whom Thou hast taken to Thyself!",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "for_the_reposed"
          }
        ],
        "verses": [
          {
            "text": "Praise Him for His mighty acts, * praise Him according to the multitude of His greatness.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises verse 1"
            }
          },
          {
            "text": "Praise Him with the sound of trumpet, * praise Him with the psaltery and harp.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises verse 2"
            }
          },
          {
            "text": "Praise Him with timbrel and dance, * praise Him with strings and flute.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises verse 3"
            }
          },
          {
            "text": "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. * Let every breath praise the Lord.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, Praises verse 4"
            }
          }
        ],
        "theotokion": {
          "text": "I flee to thy protection, O holy Virgin Theotokos, for I know that through thee I shall obtain salvation; for thou art able to help me, O pure one.",
          "tier": 1,
          "src": {
            "file": "8-7.pdf",
            "locus": "Saturday Matins, Praises Glory/Both-now Theotokion"
          },
          "homoglyph_log": [
            {
              "from": "U+041E O (Cyrillic)",
              "to": "O",
              "count": 2
            }
          ],
          "type": "theotokion",
          "sourceLabel": "Glory ..., Both now ..., Theotokion:"
        },
        "doxology_rubric": "Small Doxology (Read), Litany: Let us complete ...,"
      },
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the departed, in Tone VIII:",
        "items": [
          {
            "text": "Dipping Thy fingers in Thy blood and staining them therewith as with red ink, Thou hast signed for us a royal reprieve, O Master; wherefore, we entreat Thee with faith: Among Thy firstborn number those who have departed unto Thee, the tenderly compassionate One, and grant that they may receive the joy of Thy righteous.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E O (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "O most glorious wonder"
          },
          {
            "text": "Having fulfilled Thy priestly ministry as a man, and been sacrificed as a lamb, Thou didst redeem mankind from corruption, offering Thyself as an oblation to the Father. As Thou art the Lover of mankind, do Thou enroll the departed in the land of the living, where torrents of delight pour forth, and well-springs of eternal life flow.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 2"
            },
            "label": "plain"
          },
          {
            "text": "O Thou Who, in the depths of Thine ineffable wisdom, dost set the bounds of life, and foresee things to come, cause the servants whom Thou hast taken to Thyself to dwell in the life to come. Settle them, by peaceful waters, in the splendor of the saints, O Lord, where the voice of joy and praise is heard.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
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
            "text": "O Word Who art invisible, of the same nature and form as the Father and the Spirit, for my sake Thou didst appear as a man in the flesh. In that Thou art merciful and lovest mankind, with the beauties of Thy majesty and comeliness enlighten those who have passed from this life, O Author of life.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
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
          }
        ],
        "verses": [
          {
            "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins departed aposticha verse 1 — \"they\" (shared \"those\"); §5 per-tone"
            }
          },
          {
            "text": "Their souls * shall dwell among good things.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins departed aposticha verse 2 (byte-matches shared)"
            }
          },
          {
            "text": "Their memorial * is from generation to generation.",
            "tier": 2,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Matins departed aposticha verse 3 — \"from generation to generation\" (shared \"unto...and\"); THREE-verse set REVERTS from the 4-7..7-7 two-verse run (§5 per-tone)"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "In that thou didst conceive the beginningless Word of God the Father, with thy maternal boldness earnestly entreat Him, O Theotokos, that He number thy servants where the jubilation of the righteous who rejoice and praise thee, is continuous, and where the radiance is eternal, and the voice of him who keepeth festival is sweet.",
        "tier": 1,
        "src": {
          "file": "8-7.pdf",
          "locus": "Saturday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E O (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "theotokion",
        "sourceLabel": "Theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    }
  },
  "liturgy_weekday": {
    "mon": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone VIII:",
        "items": [
          {
            "text": "Remember us, O Christ, Savior of the world, as Thou didst remember the thief on the tree; and grant unto all Thy heavenly kingdom, O only Compassionate One.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 1"
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
            "text": "Heal Thou the sufferings of my soul, O Christ, Thou only Physician of souls and bodies; and washing me with streams of compunction, wholly cleanse me, in that Thou art compassionate.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 2"
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
            "text": "Surrounding the throne of the adored Godhead, the thrones, cherubim, principalities and authorities, and the rest of the incorporeal ranks sing in a sacred manner.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 3"
            },
            "label": "plain"
          },
          {
            "text": "Afire with the burning of Christ’s love, the spiritual athletes remained unconsumed in the midst of the flames, burning up the thorns of impiety with divine grace.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 4"
            },
            "label": "martyrs"
          },
          {
            "text": "O most holy Trinity, ruling Unity: Deliver Thy servants from unquenchable fire at the entreaties of Thine incorporeal divine hosts, and grant us Thy kingdom.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
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
            "text": "O thou who art full of the grace of God, Isaiah once foresaw thee as a scroll upon which the Word was ineffably written by the finger of the Father, Who recordeth us in the books of life.",
            "tier": 1,
            "src": {
              "file": "8-2.pdf",
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VIII",
        "items": [
          {
            "text": "Remember us, O Christ, Savior of the world, as Thou didst remember the thief on the tree; and grant unto all Thy heavenly kingdom, O only Compassionate One.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 1"
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
            "text": "As Thou dost possess an abyss of tender compassion, O Christ, dry up the abyss of my transgressions; and with tears of compunction transform my hardened soul.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 2"
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
            "text": "O divine Baptist who of old baptized Christ in water, by thine supplications impel me to the haven of repentance, for I am tempest-tossed by the threefold billows of the passions.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
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
            "text": "Having quenched the fire of the madness of idolatry with your blood, O holy passion-bearers, ye ever pour forth streams of healings, curing divers passions.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
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
            "text": "O beginningless Father, Son and divine Spirit, through the supplications of the Baptist ease the chronic sufferings of my soul, I pray, and save me, Thy servant.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 5"
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
            "text": "By thy supplications, O most pure Theotokos, from the disgrace of the passions and cruel torment in Hades deliver us who piously call thee blessed.",
            "tier": 1,
            "src": {
              "file": "8-3.pdf",
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
        "tone": 7,
        "text": {
          "text": "The righteous man shall be glad in the Lord * and shall hope in Him.",
          "tier": 2,
          "src": {
            "file": "8-3.pdf",
            "locus": "Tuesday Liturgy prokeimenon (text byte-matches shared; per-tone beside its divergent verse)"
          }
        },
        "verse": {
          "text": "Hearken, O God, unto my prayer, when I pray unto Thee.",
          "tier": 1,
          "src": {
            "file": "8-3.pdf",
            "locus": "Tuesday Liturgy prokeimenon verse — \"when I pray unto Thee\" (shared \"make supplication\"); §5 word divergence (same as tone 7)"
          }
        }
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VIII:",
        "items": [
          {
            "text": "Remember us, O Christ, Savior of the world, as Thou didst remember the thief on the tree; and grant unto all Thy heavenly kingdom, O only Compassionate One.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 1"
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
            "text": "Forming a cross with his staff, Moses parted the deep and led the people of Israel across; and we, making the sign thereof, vanquish the noetic foe.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 2"
            },
            "label": "plain"
          },
          {
            "text": "Jacob of old, blessing the children, the sons of his sons, crossed his arms as he extended them, making the sign of Thy Cross, whereby all of us have been freed from the curse, O Christ our Savior.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 3"
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
            "text": "Emulating the sufferings of Christ, O passion-bearers, ye manfully endured bitter torments; and crowned with wreaths of incorruption, ye live in the heavens.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
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
            "text": "Glory to the one immortal Father! Glory to the Son, Who liveth forever! Glory also to the all-holy Spirit, Who sanctifieth all creation!",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 5"
            },
            "label": "glory"
          },
          {
            "text": "From thy virgin womb the Creator of the sun and moon shone forth, O pure one; and beholding Him hanging upon the Tree, all creation trembled.",
            "tier": 1,
            "src": {
              "file": "8-4.pdf",
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VIII:",
        "items": [
          {
            "text": "Remember us, O Christ, Savior of the world, as Thou didst remember the thief on the tree; and grant unto all Thy heavenly kingdom, O only Compassionate One.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 1"
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
            "text": "Like trumpets, O apostles of Christ, ye wakened those lying in the graves of ungodliness and brought them to share in the divine life.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 2"
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
            "text": "With the mystic seed of the Word, O divinely eloquent ones, ye rendered the barren hearts of all the nations fruitful with divine understanding; wherefore, ye are fittingly called blessed.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
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
            "text": "Having stripped yourselves of all evil, ye strode forth valiantly in the midst of evil men, and clothed yourselves in the robe of salvation from heaven, O spiritual athletes.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 4"
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
            "text": "By the supplications of Thy divine apostles mortify the uprisings of the evil passions of my wretched soul, O adored and all-holy Trinity, that, saved, I may glorify Thee.",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 5"
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
            "text": "Rejoice, tongs of the divine Coal! Rejoice, seal of the prophets and teaching of the apostles, O most pure Theotokos, because of whom we have been freed from corruption!",
            "tier": 1,
            "src": {
              "file": "8-5.pdf",
              "locus": "Thursday Liturgy, Beatitudes item 6"
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
        "tone": 8,
        "text": {
          "text": "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.",
          "tier": 2,
          "src": {
            "file": "8-5.pdf",
            "locus": "Thursday Liturgy prokeimenon (text byte-matches shared; per-tone beside its divergent verse)"
          }
        },
        "verse": {
          "text": "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.",
          "tier": 2,
          "src": {
            "file": "8-5.pdf",
            "locus": "Thursday Liturgy prokeimenon verse — gains a * absent from shared (§5; 4-5/5-5/6-5/7-5 class)"
          }
        }
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.thu.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.thu.communion"
      },
      "alleluia_note": "8-5 prints the digit-zero \"0 Lord\" as 2-5..7-5 — seven tones running; normalized per §9.10; post-norm byte-matches shared, ref stands."
    },
    "fri": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone VIII:",
        "items": [
          {
            "text": "Remember us, O Christ, Savior of the world, as Thou didst remember the thief on the tree; and grant unto all Thy heavenly kingdom, O only Compassionate One.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 1"
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
            "text": "Thou didst stretch forth Thy hands upon the Tree, O Christ, and, rebuking the princes and powers of evil, hast saved from their harm those who piously glorify Thee.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
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
            "text": "Pierced by the spear as Thou didst hang upon the Tree, Thou didst pour forth torrents of immortality upon us who mindlessly brought death upon ourselves by our transgression; wherefore, we glorify Thee with fear.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 3"
            },
            "label": "plain"
          },
          {
            "text": "Strangers to all earthly pleasures which arise, the spiritual athletes gave themselves over to strange torments, wounding the apostate spirit with their wounds.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 4"
            },
            "label": "martyrs"
          },
          {
            "text": "Thou didst willingly endure suffering on the Cross, O Thou Who art One of the beginningless Trinity. Dry up all the torrents of my passions, and grant me salvation.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 5"
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
            "text": "Seeing Emmanuel, the Lamb and Word of God, hanging bodily upon the Tree, the only unblemished Ewe-lamb and Virgin was seized by grief and shed tears.",
            "tier": 1,
            "src": {
              "file": "8-6.pdf",
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
        "tone": 4,
        "text": {
          "text": "Remember Thy congregation which Thou hast purchased from the beginning.",
          "tier": 1,
          "src": {
            "file": "8-6.pdf",
            "locus": "Friday Liturgy Alleluia (text byte-matches shared; per-tone beside its divergent verse)"
          }
        },
        "verses": [
          {
            "text": "God is our King before the ages, * He hath wrought salvation in the midst of the earth.",
            "tier": 2,
            "src": {
              "file": "8-6.pdf",
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VIII:",
        "items": [
          {
            "text": "Remember us, O Christ, Savior of the world, as Thou didst remember the thief on the tree; and grant unto all Thy heavenly kingdom, O only Compassionate One.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 1"
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
            "text": "O passion-bearers who endured all pain, by your wounds and divine grace ye have wounded all the darkness of the demons.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
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
            "text": "The venerable and divine hierarchs of Christ, the council of the prophets, and all the righteous saints, have received a heavenly inheritance. Let us bless them as is meet.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 3"
            },
            "label": "plain"
          },
          {
            "text": "All who have departed this life with faith do thou settle in the lands of the righteous, O God; and show forth as heirs of paradise those who hymn Thee in a godly manner.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 4"
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
            "text": "I offer Thee a final hymn, O Trinity: Those whom Thou hast taken from us in faith do Thou grant the habitations of the saints; and have mercy on me, the prodigal.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
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
            "text": "O Virgin who hast given birth to the Fullness of all good things, fulfill our supplications, asking for us remission offenses, enlightenment and great mercy.",
            "tier": 1,
            "src": {
              "file": "8-7.pdf",
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
